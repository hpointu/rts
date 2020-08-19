(ns hpointu.rts.app
  (:require [hpointu.rts.graphics :as g]
            [hpointu.rts.input :as io]
            [hpointu.rts.core :as core]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.pprint]))


(def current-time (atom 0))
(defonce state (r/atom {}))

(defn get-debug-content []
  (with-out-str (cljs.pprint/pprint (dissoc @state :world))))

(def SIZE 35)
(defn init-state []
  {:world (core/->world 15 10)})

(defn to-screen [[x y]]
  [(* SIZE x) (* SIZE y)])

(defn to-world [[x y]]
  [(/ x SIZE) (/ y SIZE)])

(defn get-game-canvas []
  (js/document.getElementById "game"))

(defn get-minimap-canvas []
  (js/document.getElementById "minimap"))

(defn draw-tile! [ctx world x y size hover?]
  (let [tile-color (if (core/obstacle? world x y) "gray" (if hover? "green" "#222"))
        [x y] (to-screen [x y])]
    (g/render-item! ctx {:type :rect :x (+ 1 x) :y (+ 1 y)
                         :w (- size 2) :h (- size 2) :fill tile-color})
    (g/render-item! ctx {:type :rect :x (+ 2 x) :y (+ 2 y)
                         :w (- size 4) :h (- size 4) :fill "black"})))

(defn draw-map! [ctx {:keys [world hover] :as state}]
  (doseq [x (range (core/world-width world))
          y (range (core/world-height world))]
    (draw-tile! ctx world x y SIZE (= hover [x y])))) 

(defn update-state [{:keys [world] :as state} dt] state
  (let [canvas (get-game-canvas)
        [x y] (map int (to-world (io/mouse-pos canvas)))]
    (assoc state :hover (when (core/in-world? world x y) [x y]))))
 
(defn draw! [state]
  (let [canvas (get-game-canvas)
        ctx (. canvas getContext "2d")]
    (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
    (draw-map! ctx state)))

(defn tick! []
  (let [t (.now js/Date)
        dt (- t @current-time)
        new-state (update-state @state dt)]
    (do (reset! current-time t)
        (draw! new-state)
        (reset! state new-state))))

(defn rts-app [props]
  [:div {:style {:color "white"}}
   [:h2 {:style {:margin "0 0 5px 0"
                 :padding 10
                 :width 820
                 :background-color "black"}}
    "RTS Demo"]
   [:div {:style {:display "flex"}}
     [:div {:style {:width 235
                    :margin-right 5
                    :display "flex"
                    :flex-flow "column wrap"}}
      [:canvas {:id "minimap"
                :style {:background-color "#111" :width 235 :height 235}}]
      [:div {:style {:background-color "black"
                     :flex-grow 1
                     :padding 15 :margin-top 5}}
       [:h4 {:style {:margin 0}} "TODO:"]
       [:ul {:style {:font-size "0.8em" :margin 0}}
        [:li "Minimap"]
        [:li "Camera movement"]
        [:li "Mouse mode"]]]]
     [:canvas {:id "game" :width 600 :height 480
               :onContextMenu #(.preventDefault %)
               :style {:background-color "black"
                       :min-width 600
                       :margin 0}}]]
   [:pre {:style {:background-color "black"
                  :margin-top 5
                  :padding 10
                  :width 820}}
    (get-debug-content)]])

(defn ^:dev/before-load stop []
  (println "Stopping..."))

(defn ^:dev/after-load start []
  (println (str "Starting..."))
  (rdom/render [rts-app] (js/document.getElementById "app")))

(defn ^:export init []
  (println "Initializing...")
  (reset! state (init-state))
  (start)
  (io/init!)
  (js/setInterval tick! 20))

