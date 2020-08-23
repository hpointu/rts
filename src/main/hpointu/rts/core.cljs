(ns hpointu.rts.core
  (:require [hpointu.rts.utils :refer [distance]]))

(defn world-width [world]
  (count (get world 0)))

(defn world-height [world]
  (count world))

(defn ->world [width height]
  (let [full (vec (for [_ (range width)] :w))
        line (-> [:w]
                 (into (for [_ (range (- width 2))] :g))
                 (conj :w))]
    (-> [full]
        (into (for [_ (range (- height 2))] line))
        (conj full)))) 


(defn world-cell [world x y]
  (get-in world [y x]))


(defn set-world-cell [world x y v]
  (assoc-in world [y x] v))


(defn obstacle? [world x y]
  (let [obstacles #{:w}]
    (some? (obstacles (get-in world [y x])))))


(defn cost [world from to]
  (let [[x1 y1] to]
    (if (obstacle? world x1 y1)
      99999
      (distance from to))))

(defn in-world?

  ([world [x y]]
   (in-world? world x y))

  ([world x y]
   (and (< -1 x (world-width world))
        (< -1 y (world-height world)))))


(defn neighbours [world [x y]]
  (filter
    #(in-world? world %)
    [[(dec x) (dec y)] [x (dec y)] [(inc x) (dec y)]
     [(dec x) y]                   [(inc x) y]
     [(dec x) (inc y)] [x (inc y)] [(inc x) (inc y)]]))


(defn ->unit [x y]
  {:x x
   :y y
   :goals []
   :waypoints []
   :selected? false})

(defn add-waypoint [unit x y]
  (update unit :waypoints conj [x y]))
