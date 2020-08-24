(ns hpointu.rts.app
  (:require [hpointu.rts.graphics :as g]
            [hpointu.rts.input :as io]
            [hpointu.rts.core :as core]
            [hpointu.rts.action :as action]
            [hpointu.rts.utils :refer [collides?]]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.pprint]))


(def current-time (atom (.now js/Date)))
(defonce state (r/atom {}))

;; hack for FPS counter
(defonce frame-counter (atom 0))
(defonce fps (r/atom 0))

(def SIZE 35)
(defn init-state []
  {:world (core/->world 74 74)
   :camera [0 0]
   :units [(core/->unit 3 4)
           (core/->unit 5 3)
           (core/->unit 4 4)]
   :world-updates []})

(defn visible? [{:keys [camera]} x y]
  (let [[cx cy] camera]
    (and (< x (+ cx 18))
         (< y (+ cy 14)))))

(defn visible-range [[cx cy :as camera]]
  (for [x (range (int cx) (int (+ cx 18)))
        y (range (int cy) (int (+ cy 14)))]
    [x y]))

(defn hover? [{:keys [hover]} x y]
  (= hover [x y]))

(defn cell-redraw [[x y]]
  [:cell x y])

(defn redraw-world [{:keys [world] :as state}]
  (let [elems (for [x (range (core/world-width world))
                    y (range (core/world-height world))]
                (cell-redraw [x y]))]
    (-> state
        (update :world-updates conj [:clear])
        (update :world-updates into elems))))

(defn redraw-visible [{:keys [world camera] :as state}]
  (let [elems (for [[x y] (visible-range camera)]
                (cell-redraw [x y]))]
    (-> state
        (update :world-updates conj [:clear])
        (update :world-updates into elems))))

(defn to-game-canvas [{:keys [camera]} [x y]]
  (let [[cx cy] camera]
    (into [] (map int [(* SIZE (- x cx)) (* SIZE (- y cy))]))))

(defn to-minimap-canvas [[x y] size]
  [(* size x) (* size y)])

(defn to-world
  ([pos]
   (to-world pos SIZE))
  ([[x y] size]
   [(/ x size) (/ y size)]))

(defn to-grid [camera pos]
  (map (comp int +) camera (to-world pos)))

(defn unit-aabb [state {:keys [x y] :as unit}]
  (let [[x y] (to-game-canvas state [x y])]
    (into [] (map #(+ 5 %) [x y 20 20])))) 

(defn get-game-canvas []
  (js/document.getElementById "game"))

(defn get-minimap-canvas []
  (js/document.getElementById "minimap"))

(defn get-element [id]
  (js/document.getElementById id))

(defn context [canvas-name]
  (.getContext (js/document.getElementById canvas-name) "2d"))

(defn mouse-on-element? [id]
  (let [elem (get-element id)
        [x y] (io/mouse-pos elem)]
    (and (< -1 x elem.width)
         (< -1 y elem.height))))

(defn init-contexts []
  (let [minimap (get-minimap-canvas)
        canvas {:game (get-game-canvas)
                :minimap minimap
                :minimap-off (doto (js/document.createElement "canvas")
                               (aset "width" (.-width minimap))
                               (aset "height" (.-height minimap)))}]
    (fn [selector]
      {:canvas (selector canvas)
       :context (.getContext (selector canvas) "2d")})))

(defn draw-tile! [ctx {:keys [world] :as state} x y size]
  (let [tile-color (cond
                     (core/obstacle? world x y) "gray"
                     (hover? state x y) "green"
                     :else "#222")
        [x y] (to-game-canvas state [x y])]
    (g/render-item! ctx {:type :rect :x (+ 1 x) :y (+ 1 y)
                         :w (- size 2) :h (- size 2) :fill tile-color})
    (g/render-item! ctx {:type :rect :x (+ 2 x) :y (+ 2 y)
                         :w (- size 4) :h (- size 4) :fill "black"})))

(defn update-hover [{:keys [hover world camera] :as state} x y]
  (let [[cx cy] camera
        new-hover (when (core/in-world? world x y) [x y])]
    (-> state
        (assoc :hover new-hover)
        (update :world-updates into (map cell-redraw (keep identity [new-hover hover]))))))

(defn set-cell [{:keys [hover] :as state} v]
  (let [[x y] hover]
    (update state :world core/set-world-cell x y v)))

(defn clamp-camera [{:keys [world] :as state}]
  (let [max-x (- (core/world-width world) 17.4)
        max-y (- (core/world-height world) 13.6)
        round (fn [f] (/ (js/Math.round (* 10 f)) 10))
        fixed (fn [camera] (into [] (map round camera)))]
    (-> state
      (update-in [:camera 0] min max-x)
      (update-in [:camera 0] max 0)
      (update-in [:camera 1] min max-y)
      (update-in [:camera 1] max 0)
      (update :camera fixed))))

(defn move-camera [state dx dy]
  (let [speed 0.3]
    (-> state
        (update-in [:camera 0] + (* speed dx))
        (update-in [:camera 1] + (* speed dy))
        (clamp-camera))))

(defn select-units [{:keys [selector] :as state}]
  (let [{:keys [x1 y1 x2 y2]} selector
        [x1 x2] [(min x1 x2) (max x1 x2)]
        [y1 y2] [(min y1 y2) (max y1 y2)]
        rect [x1 y1 (- x2 x1) (- y2 y1)]]

    (defn select-unit? [{:keys [x y] :as u}]
      (collides? (unit-aabb state u) rect))

    (defn assing-select-id [select-fn units]
      (loop [result []
             left units
             cpt 0]
        (let [[u & more] left
              select? (select-fn u)]
          (if u
            (recur
              (conj result (assoc u :selected? (if select? cpt false)))
              more
              (if select? (inc cpt) cpt))
            result))))

    (update state :units #(assing-select-id select-unit? %))))
  

(defn end-game-left-click [state]
  (-> state
      (select-units)
      (dissoc :selector)
      (dissoc :left-click)))

(defn end-game-right-click [{:keys [world right-click units] :as state}]

  (defn set-unit-destination [targets {:keys [x y selected?] :as unit}]
    (if selected?
      (-> unit
        (update :goals conj (action/walk (nth targets selected?))))
      unit))

  (let [size (count (filter :selected? units))
        targets (core/get-free-zone world right-click size)]
    (-> state
        (update :units
                #(into [] (map (fn [u] (set-unit-destination targets u)) %)))
        (dissoc :right-click))))

(defn handle-mouse-game [{:keys [camera selector right-click] :as state}]
  (let [[x y] (io/mouse-pos (get-game-canvas))
        [wx wy] (to-grid camera [x y])]
    (cond
      (and (io/mouse-pressed? :left) (not (io/mouse-pressed? :right)))
      (if selector
        (update state :selector #(assoc % :x2 x :y2 y))
        (-> state
          (assoc :left-click [wx wy])
          (update :selector #(assoc % :x1 x :y1 y :x2 x :y2 y))
          (dissoc :selected)))
      (and (io/mouse-pressed? :right) (not (io/mouse-pressed? :left)))
      (if (not right-click)
        (assoc state :right-click [wx wy])
        state)
      :default
      (if selector
        (-> state (end-game-left-click))
        (if right-click
          (-> state (end-game-right-click))
          state)))))
    

(defn handle-mouse-minimap [state]
  (if (io/mouse-pressed? :left)
    (let [[x y] (to-world (io/mouse-pos (get-minimap-canvas)) 3)]
      (-> state
          (assoc-in [:camera 0] (- x 9))
          (assoc-in [:camera 1] (- y 7))
          (clamp-camera)))
    state))

(defn handle-mouse [state]
  (cond (mouse-on-element? "minimap")
        (handle-mouse-minimap state)
        (mouse-on-element? "game")
        (handle-mouse-game state)
        :default state))

(defn handle-keys [{:keys [hover] :as state}]
  (cond-> state
    ;; Pressing W
    (and hover (io/key-pressed? "KeyW"))
    (set-cell :w)
    ;; Pressing G
    (and hover (io/key-pressed? "KeyG"))
    (set-cell :g)
    ;; Pressing arrows
    (some io/key-pressed? #{"ArrowLeft" "ArrowRight" "ArrowUp" "ArrowDown"})
    (move-camera (cond (io/key-pressed? "ArrowLeft") -1
                       (io/key-pressed? "ArrowRight") 1
                       :else 0)
                 (cond (io/key-pressed? "ArrowUp") -1
                      (io/key-pressed? "ArrowDown") 1
                      :else 0))))

(defn move-units [{:keys [units] :as state} dt]
  (assoc state
         :units (into [] (map #(action/update-actor state % dt) units))))
   
(defn update-state [{:keys [world camera] :as state} dt] state
  (let [canvas (get-game-canvas)
        [x y] (map (comp int +) camera (to-world (io/mouse-pos canvas)))]
    (-> state
        (move-units dt)
        (update-hover x y)
        (handle-keys)
        (handle-mouse)
        (redraw-visible))))


(defn draw-game-elem! [state [update-type & args]]
  (cond (= update-type :cell)
        (let [[x y] args]
          (when (visible? state x y)
            (draw-tile! (context "game") state x y SIZE)))
        (= update-type :clear)
        (let [canvas (get-game-canvas)]
          (.clearRect (context "game") 0 0 (.-width canvas) (.-height canvas)))))
    
(defn draw-minimap-elem! [ctx {:keys [world] :as state} [update-type & args]]
  (cond (= update-type :cell)
        (let [size 3
              [x y] args
              color (if (core/obstacle? world x y) "gray" "#111")
              [x y] (to-minimap-canvas args size)]
          (g/render-item! ctx {:type :rect :x x :y y
                               :w size :h size :fill color}))))
 
(defn draw! [{:keys [world-updates world units selector]
              :as state} contexts]
  (doseq [wu world-updates]
    (draw-game-elem! state wu)
    (draw-minimap-elem! (:context (contexts :minimap-off)) state wu))
  (doseq [{:keys [x y selected?] :as u} units
          :when (visible? state x y)]
    (let [[x y] (map + (to-game-canvas state [x y])
                     [(/ SIZE 2) (/ SIZE 2)])
          color "#0cf"]
      (when selected?
        (let [[x y w h] (unit-aabb state u)]
          (g/render-item! (context "game")
                          {:type :box
                           :x (- x 3) :y (- y 3)
                           :w (+ w 6) :h (+ h 6)
                           :color "yellow"})))
      (g/render-item! (context "game")
                      {:type :circle :x x :y y :r 12 :fill color})))
  (if-let [{:keys [x1 y1 x2 y2]} selector]
    (g/render-item! (context "game")
                    {:type :box :x x1 :y y1
                     :w (- x2 x1) :h (- y2 y1)
                     :color "yellow"}))
  (let [[cx cy] (:camera state)
        mmap (contexts :minimap)]
    (.clearRect (:context mmap) 0 0
                (.-width (:canvas mmap)) (.-height (:canvas mmap)))
    (.drawImage (:context mmap)
                (:canvas (contexts :minimap-off)) 0 0)
    (doseq [{:keys [x y selected?]} units]
      (let [[x y] (to-minimap-canvas [x y] 3)]
        (g/render-item! (context "minimap")
                        {:type :rect :x x :y y :w 3 :h 3
                         :fill (if selected? "yellow" "#0cf")})))
    (g/render-item! (context "minimap")
                    {:type :box :x (* 3 cx) :y (* 3 cy)
                     :w 53 :h 42 :color "white"}))
  (assoc state :world-updates []))

(defn tick! [contexts]
  (let [t (.now js/Date)
        dt (- t @current-time)
        new-state (draw! (update-state @state dt) contexts)]
    (do (reset! current-time t)
        (reset! state new-state)
        (swap! frame-counter inc))))

(defn get-debug-content []
  (str "FPS: " @fps)); " - " @io/keymap " - " @io/mouse "\n")
;       (with-out-str (cljs.pprint/pprint (-> @state (dissoc :world)
;                                             (dissoc :world-updates)))
(defn rts-app [props]
  [:div {:style {:color "white"}}
   [:h2 {:style {:margin "0 0 5px 0"
                 :padding 10
                 :width 820
                 :background-color "black"}}
    "RTS Demo" [:span {:style {:font-size "0.7em"
                               :font-family "mono"
                               :color "red"
                               :margin-left 90}}
                "- Press W on the map to place a wall"]]
   [:div {:style {:display "flex"}}
     [:div {:style {:width 223
                    :margin-right 5
                    :display "flex"
                    :flex-flow "column wrap"}}
      [:canvas {:id "minimap"
                :width 223
                :height 223
                :style {:background-color "#111" :width 223 :height 223}}]
      [:div {:style {:background-color "black"
                     :font-family "mono"
                     :flex-grow 1
                     :padding 15 :margin-top 5}}
       [:h4 {:style {:margin 0}} "TODO:"]
       [:ul {:style {:font-size "0.8em" :margin 0 :padding-left 20}}
        [:li {:style {:text-decoration "line-through" :color "#888"}} "Minimap"]
        [:li {:style {:text-decoration "line-through" :color "#888"}} "Camera movement"]
        [:li {:style {:text-decoration "line-through" :color "#888"}} "Entities"]
        [:li {:style {:text-decoration "line-through" :color "#888"}} "Mouse clicks..."]
        [:li {:style {:text-decoration "line-through" :color "#888"}} "Path finding"]
        [:li {:style {:text-decoration "initial"}} "Multiple units, One goal"]
        [:li {:style {:text-decoration "initial"}} "Stop scrolling on keys"]
        [:li {:style {:text-decoration "initial"}} "Gameplay elements"]]]]
     [:canvas {:id "game" :width 611 :height 480
               :style {:background-color "black"
                       :min-width 611
                       :margin 0}}]]
   [:pre {:style {:background-color "black"
                  :margin-top 5
                  :padding 10
                  :width 820}}
    (get-debug-content)]])

(def timers (atom []))
;(reset! state (init-state))
(defn ^:dev/before-load stop []
  (doseq [t @timers]
    (js/clearInterval t))
  (println "Stopping..."))

(defn ^:dev/after-load start []
  (println (str "Starting..."))
  (swap! state redraw-world)
  (rdom/render [rts-app] (js/document.getElementById "app"))
  (let [contexts (init-contexts)]
    (swap! timers conj (js/setInterval #(tick! contexts) 16.66)))
  (swap! timers conj (js/setInterval
                      #(do 
                         (reset! fps @frame-counter)
                         (reset! frame-counter 0))
                      1000)))

(defn ^:export init []
  (println "Initializing...")
  (reset! state (init-state))
  (start)
  (io/init!))

