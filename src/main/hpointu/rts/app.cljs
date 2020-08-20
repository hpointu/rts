(ns hpointu.rts.app
  (:require [hpointu.rts.graphics :as g]
            [hpointu.rts.input :as io]
            [hpointu.rts.core :as core]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.pprint]))


(def current-time (atom 0))
(defonce state (r/atom {}))

;; hack for FPS counter
(defonce frame-counter (atom 0))
(defonce fps (r/atom 0))

(def SIZE 35)
(defn init-state []
  {:world (core/->world 74 74)
   :camera [0 0]
   :world-updates []})

(defn visible? [{:keys [camera]} x y]
  (let [[cx cy] camera]
    (and (< x (+ cx 18))
         (< y (+ cy 14)))))

(defn visible-range [[cx cy :as camera]]
  (for [x (range (int (- cx 2)) (int (+ cx 18 2)))
        y (range (int (- cy 2)) (int (+ cy 14 2)))]
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

(defn to-world [[x y]]
  [(/ x SIZE) (/ y SIZE)])

(defn get-game-canvas []
  (js/document.getElementById "game"))

(defn get-minimap-canvas []
  (js/document.getElementById "minimap"))

(defn context [canvas-name]
  (.getContext (js/document.getElementById canvas-name) "2d"))

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

(defn add-wall [{:keys [hover] :as state}]
  (let [[x y] hover]
    (update state :world core/set-world-cell x y :w)))

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
        (clamp-camera)
        (redraw-visible))))

(defn handle-keys [{:keys [hover] :as state}]
  (cond-> state
    ;; Pressing W
    (and hover (io/key-pressed? "KeyW"))
    (add-wall)
    ;; Pressing arrows
    (some io/key-pressed? #{"ArrowLeft" "ArrowRight" "ArrowUp" "ArrowDown"})
    (move-camera (cond (io/key-pressed? "ArrowLeft") -1
                       (io/key-pressed? "ArrowRight") 1
                       :else 0)
                 (cond (io/key-pressed? "ArrowUp") -1
                      (io/key-pressed? "ArrowDown") 1
                      :else 0))))
   
(defn update-state [{:keys [world camera] :as state} dt] state
  (let [canvas (get-game-canvas)
        [x y] (map (comp int +) camera (to-world (io/mouse-pos canvas)))]
    (-> state
        (update-hover x y)
        (handle-keys))))


(defn draw-game-elem! [state [update-type & args]]
  (cond (= update-type :cell)
        (let [[x y] args]
          (when (visible? state x y)
            (draw-tile! (context "game") state x y SIZE)))
        (= update-type :clear)
        (let [canvas (get-game-canvas)]
          (.clearRect (context "game") 0 0 (.-width canvas) (.-height canvas)))))
    
(defn draw-minimap-elem! [{:keys [world] :as state} [update-type & args]]
  (cond (= update-type :cell)
        (let [size 3
              [x y] args
              color (if (core/obstacle? world x y) "gray" "#111")
              [x y] (to-minimap-canvas args size)]
          (g/render-item! (context "minimap") {:type :rect :x x :y y
                                               :w size :h size :fill color}))))
 
(defn draw! [{:keys [world-updates world] :as state}]
  (doseq [wu world-updates]
    (draw-game-elem! state wu)
    (draw-minimap-elem! state wu))
  (let [[cx cy] (:camera state)]
    (g/render-item! (context "minimap") {:type :box :x (* 3 cx) :y (* 3 cy)
                                         :w 53 :h 42 :color "white"}))
  (assoc state :world-updates []))

(defn tick! []
  (let [t (.now js/Date)
        dt (- t @current-time)
        new-state (draw! (update-state @state dt))]
    (do (reset! current-time t)
        (reset! state new-state)
        (swap! frame-counter inc))))

(defn get-debug-content []
  (str "FPS: " @fps " - " @io/keymap "\n"
       (with-out-str (cljs.pprint/pprint (-> @state (dissoc :world)
                                             (dissoc :world-updates))))))
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
        [:li {:style {:text-decoration "initial"}} "Mouse mode"]
        [:li {:style {:text-decoration "initial"}} "Entities"]
        [:li {:style {:text-decoration "initial"}} "Path finding"]
        [:li {:style {:text-decoration "initial"}} "Gameplay elements"]]]]
     [:canvas {:id "game" :width 611 :height 480
               :onContextMenu #(.preventDefault %)
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
  (swap! timers conj (js/setInterval tick! 16.66))
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

