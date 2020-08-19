(ns hpointu.rts.core)


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

(defn obstacle? [world x y]
  (let [obstacles #{:w}]
    (some? (obstacles (get-in world [y x])))))

(defn in-world? [world x y]
  (and (< -1 x (world-width world))
       (< -1 y (world-height world))))
