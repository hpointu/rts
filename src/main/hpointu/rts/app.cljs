(ns hpointu.rts.app
  (:require [hpointu.rts.graphics :as g]
            [hpointu.rts.input :as io]
            [hpointu.rts.core :as core]))

(def current-time (atom 0))
(defonce state (atom {}))

(def SIZE 35)

(defn ->world [width height]
  (let [full (vec (for [_ (range width)] :w))
        line (-> [:w]
                 (into (for [_ (range (- width 2))] :g))
                 (conj :w))]
    (-> [full]
        (into (for [_ (range (- height 2))] line))
        (conj full)))) 

(defn init-state []
  {:world (->world 15 10)})

(defn world-width [world]
  (count (get world 0)))

(defn world-height [world]
  (count world))

(defn to-screen [[x y]]
  [(* SIZE x) (* SIZE y)])

(defn to-world [[x y]]
  [(/ x SIZE) (/ y SIZE)])

(defn get-canvas []
  (js/document.getElementById "game"))

(defn obstacle? [world x y]
  (let [obstacles #{:w}]
    (some? (obstacles (get-in world [y x])))))

(defn draw-tile! [ctx world x y size hover?]
  (let [tile-color (if (obstacle? world x y) "gray" (if hover? "green" "#222"))
        [x y] (to-screen [x y])]
    (g/render-item! ctx {:type :rect :x (+ 1 x) :y (+ 1 y)
                         :w (- size 2) :h (- size 2) :fill tile-color})
    (g/render-item! ctx {:type :rect :x (+ 2 x) :y (+ 2 y)
                         :w (- size 4) :h (- size 4) :fill "black"})))

(defn draw-map! [ctx {:keys [world hover] :as state}]
  (doseq [x (range (world-width world))
          y (range (world-height world))]
    (draw-tile! ctx world x y SIZE (= hover [x y])))) 

(defn update-state [state dt] state
  (let [canvas (get-canvas)]
    (assoc state :hover (into [] (map int (to-world (io/mouse-pos canvas)))))))
 
(defn draw! [state]
  (let [canvas (get-canvas)
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

(defn ^:dev/before-load stop []
  (println "Stopping..."))

(defn ^:dev/after-load start []
  (println (str "Starting...")))

(defn ^:export init []
  (println "Initializing...")
  (js/setInterval tick! 20)
  (reset! state (init-state))
  (io/init!)
  (start))
