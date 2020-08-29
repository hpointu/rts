(ns hpointu.rts.drawing
  (:require [hpointu.rts.core :as core]
            [hpointu.rts.game :as game]
            [hpointu.rts.ux :as ux]
            [hpointu.rts.graphics :as g]))

(def SIZE 35)

(defn to-game-canvas [{:keys [camera]} [x y]]
  (let [[cx cy] camera]
    (into [] (map int [(* SIZE (- x cx)) (* SIZE (- y cy))]))))

(defn to-minimap-canvas [[x y] size]
  [(* size x) (* size y)])

(defn rect-center [x y w h]
  [(- (+ x w) (/ w 2))
   (- (+ y h) (/ h 2))])

(defn entity-box [state {:keys [pos] :as entity}]
  (let [[x y] (to-game-canvas state pos)]
    (into [] (map #(+ 5 %) [x y 20 20])))) 


(defmethod core/render-items :unit [u]
  [(:render-item u)])

(defmethod core/render-items :building
  [{:keys [name size label-size active build-progress build-time]}]
  (let [size (* SIZE size)
        completion (/ build-progress build-time)
        hs (/ size 2)
        [x y] (rect-center 0 0 size size)
        pbar {:type :rect
              :x (- x hs) :y (+ y 5)
              :fill "yellow" :h 5 :w (* completion size)}]
    (cond->
      [{:type :hash-square
        :color (if active "#0cf" "#ec0")
        :size size
        :x 0 :y 0}
       {:type :rect
        :x (- x (/ size 2))
        :y (- y (/ label-size 2) 4)
        :fill "#08bb"
        :w size
        :h (+ label-size 6)}
       {:type :text
        :x x :y y
        :color "white"
        :size label-size
        :value name}]
      (not active)
      (conj pbar))))
    
                  
(defmethod ux/draw-hover! nil
  [[_ btype] ctx {:keys [camera ] :as state}]
  (when-let [rect (game/selector-rect state)]
    (let [[x y w h] (map #(* % SIZE) rect)
          [cx cy] (map #(* % SIZE) camera)]
      (g/render-item!
        ctx
        {:type :box
         :color "yellow"
         :x (- x cx) :y (- y cy)
         :w w :h h}))))

(defmethod ux/draw-hover! ::ux/build
  [[_ btype] ctx {:keys [hover world] :as state}]
  (when hover
    (let [size (:size (core/->building btype))
          tiles (core/tiles hover size size)
          text (first (name btype))
          can? (game/free-tiles? state tiles)
          color (if can? "green" "red")
          [x y] (to-game-canvas state hover)]
      (doseq [tile tiles]
        (let [[x y] (to-game-canvas state tile)
              [xl yl] tile
              [xl yl] (to-game-canvas state [(+ 0.5 xl) (+ 0.55 yl)])]
          (g/render-item!
            ctx
            {:type :box
             :line-width 2
             :x (+ 2 x)
             :y (+ 2 y)
             :w (- SIZE 4)
             :h (- SIZE 4)
             :color color})
          (g/render-item!
            ctx
            {:type :text
             :color color
             :value text
             :size 20
             :x xl :y yl}))))))

(defn draw-tile! [ctx {:keys [mouse-mode world] :as state} x y size]
  (let [tile-color (if (core/obstacle? world x y) "gray" "#222")
        [x y] (to-game-canvas state [x y])]
    (g/render-item! ctx {:type :rect :x (+ 1 x) :y (+ 1 y)
                         :w (- size 2) :h (- size 2) :fill tile-color})
    (g/render-item! ctx {:type :rect :x (+ 2 x) :y (+ 2 y)
                         :w (- size 4) :h (- size 4) :fill "black"})))

(defn draw-game-elem!
  [state [update-type & args] {:keys [context canvas]}]
  (cond (= update-type :cell)
        (let [[x y] args]
          (when (game/visible? state [x y])
            (draw-tile! context state x y SIZE)))
        (= update-type :clear)
        (.clearRect context 0 0 (.-width canvas) (.-height canvas))))
    
(defn draw-minimap-elem! [ctx {:keys [world] :as state} [update-type & args]]
  (cond (= update-type :cell)
        (let [size 3
              [x y] args
              color (if (core/obstacle? world x y) "gray" "#111")
              [x y] (to-minimap-canvas args size)]
          (g/render-item! ctx {:type :rect :x x :y y
                               :w size :h size :fill color}))))

(defn select-box [x y entity]
  (let [[a b w h] (map #(* SIZE %) (:aabb entity))]
    {:type :box
     :color "yellow"
     :x (+ x a -3)
     :y (+ y b -3)
     :w (+ w 6)
     :h (+ h 6)}))

(defn render-entity! [ctx state entity]
  (let [[x y] (to-game-canvas state (:pos entity))
        selected? (:selected? entity)]
    (doseq [item (core/render-items entity)]
      (g/render-item! ctx (-> item (update :x + x) (update :y + y))))
    (when selected? (g/render-item! ctx (select-box x y entity)))))

(defn draw!
  [{:keys [world-updates mouse-mode entities camera]
    :as state}
   contexts]

  (defn context [k]
    (:context (contexts k)))

  (defn canvas [k]
    (:canvas (contexts k)))

  ; static rendering update
  (doseq [wu world-updates]
    (draw-game-elem! state wu (contexts :game))
    (draw-minimap-elem! (context :minimap-off) state wu))

  ; dynamic game rendering
  (doseq [entity (game/system-entities :draw state)
          :when (game/visible? state (:pos entity))]
    (render-entity! (context :game) state entity))

  ; Mouse mode rendering
  (ux/draw-hover! mouse-mode (context :game) state)

  ; dynamic minimap rendering : TODO move to :preview system
  (let [[cx cy] camera]
    (.clearRect (context :minimap) 0 0
                (.-width (canvas :minimap)) (.-height (canvas :minimap)))
    (.drawImage (context :minimap) (canvas :minimap-off) 0 0)
    (doseq [{:keys [pos selected?]} (vals entities)]
      (let [[x y] (to-minimap-canvas pos 3)]
        (g/render-item! (context :minimap)
                        {:type :rect :x x :y y :w 3 :h 3
                         :fill (if selected? "yellow" "#0cf")})))
    (g/render-item! (context :minimap)
                    {:type :box :x (* 3 cx) :y (* 3 cy)
                     :w 53 :h 42 :color "white"}))
  (assoc state :world-updates []))

