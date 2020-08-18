(ns hpointu.rts.path
  (:require [tailrecursion.priority-map :refer [priority-map]]
            [hpointu.rts.core :as core]))

(defn get-cost [world [x y]]
  (if (core/obstacle? world x y) 999 0))

(defn manhattan-dist [[x1 y1] [x2 y2]]
  (+ (js/Math.abs (- x2 x1))
     (js/Math.abs (- y2 y1))))

(defn euclidian-distance [[x1 y1] [x2 y2]]
  (let [dx (js/Math.abs (- x2 x1))
        dy (js/Math.abs (- y2 y1))]
    (js/Math.sqrt (* dx dx) (* dy dy))))
