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

(defn get-debug-content []
  (str "FPS: " @fps "\n"
    (with-out-str (cljs.pprint/pprint (-> @state (dissoc :world)
                                          (dissoc :world-updates))))))

(def SIZE 35)
(defn init-state []
  {:world (core/->world 112 112)
   :world-updates []})

(defn redraw-world [{:keys [world] :as state}]
  (let [elems (for [x (range (core/world-width world))
                    y (range (core/world-height world))]
                [x y])]
    (assoc state :world-updates elems)))

(defn to-screen
  ([coords]
   (to-screen coords SIZE))
  ([[x y] size]
   [(* size x) (* size y)]))

(defn to-world [[x y]]
  [(/ x SIZE) (/ y SIZE)])

(defn get-game-canvas []
  (js/document.getElementById "game"))

(defn get-minimap-canvas []
  (js/document.getElementById "minimap"))

(defn context [canvas-name]
  (.getContext (js/document.getElementById canvas-name) "2d"))

(defn visible? [state x y]
  (and (< x 18)
       (< y 14)))

(defn draw-tile! [ctx world x y size hover?]
  (let [tile-color (if (core/obstacle? world x y) "gray" (if hover? "green" "#222"))
        [x y] (to-screen [x y])]
    (g/render-item! ctx {:type :rect :x (+ 1 x) :y (+ 1 y)
                         :w (- size 2) :h (- size 2) :fill tile-color})
    (g/render-item! ctx {:type :rect :x (+ 2 x) :y (+ 2 y)
                         :w (- size 4) :h (- size 4) :fill "black"})))

(defn draw-minimap! [ctx {:keys [world] :as state}]
  (doseq [x (range (core/world-width world))
          y (range (core/world-height world))]
    (let [size 2
          color (if (core/obstacle? world x y) "gray" "#111")
          [x y] (to-screen [x y] size)]
      (g/render-item! ctx {:type :rect :x x :y y :w size :h size :fill color}))))

(defn update-hover [{:keys [hover world] :as state} x y]
  (let [new-hover (when (core/in-world? world x y) [x y])]
    (-> state
        (assoc :hover new-hover)
        (update :world-updates into (keep identity [new-hover hover])))))

(defn handle-input [{:keys [hover] :as state}]
  (if (and hover (io/key-pressed? "KeyW"))
    (let [[x y] hover]
      (assoc-in state [:world y x] :w))
    state))
   

(defn update-state [{:keys [world] :as state} dt] state
  (let [canvas (get-game-canvas)
        [x y] (map int (to-world (io/mouse-pos canvas)))]
    (-> state
        (update-hover x y)
        (handle-input))))
 
(defn draw! [{:keys [world-updates world hover] :as state}]
  (doseq [[x y] world-updates
          :when (visible? state x y)]
    (draw-tile! (context "game") world x y SIZE (= hover [x y])))
  (doseq [[x y] world-updates]
    (let [size 2
          color (if (core/obstacle? world x y) "gray" "#111")
          [x y] (to-screen [x y] size)]
      (g/render-item! (context "minimap") {:type :rect :x x :y y :w size :h size :fill color})))
  (assoc state :world-updates []))

(defn tick! []
  (let [t (.now js/Date)
        dt (- t @current-time)
        new-state (draw! (update-state @state dt))]
    (do (reset! current-time t)
        (reset! state new-state)
        (swap! frame-counter inc))))

(defn rts-app [props]
  [:div {:style {:color "white"}}
   [:h2 {:style {:margin "0 0 5px 0"
                 :padding 10
                 :width 820
                 :background-color "black"}}
    "RTS Demo"]
   [:div {:style {:display "flex"}}
     [:div {:style {:width 224
                    :margin-right 5
                    :display "flex"
                    :flex-flow "column wrap"}}
      [:canvas {:id "minimap"
                :width 224
                :height 224
                :style {:background-color "#111" :width 224 :height 224}}]
      [:div {:style {:background-color "black"
                     :flex-grow 1
                     :padding 15 :margin-top 5}}
       [:h4 {:style {:margin 0}} "TODO:"]
       [:ul {:style {:font-size "0.8em" :margin 0}}
        [:li "Minimap"]
        [:li "Camera movement"]
        [:li "Mouse mode"]]]]
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
; (reset! state (init-state))
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

