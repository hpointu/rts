(ns hpointu.rts.core)

(defn distance [[x1 y1] [x2 y2]]
  (let [dx (js/Math.abs (- x2 x1))
        dy (js/Math.abs (- y2 y1))]
    (js/Math.sqrt (+ (* dx dx) (* dy dy)))))

(defn normalize [v]
  (let [l (distance [0 0] v)]
    (into [] (map / v [l l]))))

(defn collides? [[x1 y1 w1 h1] [x2 y2 w2 h2]]
  (and (< x1 (+ x2 w2))
       (< x2 (+ x1 w1))
       (< y1 (+ y2 h2))
       (< y2 (+ y1 h1))))

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
   :waypoints []
   :selected? false})

(defn add-waypoint [unit x y]
  (update unit :waypoints conj [x y]))


(defn walk [{:keys [x y waypoints] :as unit} dt]

  (defn arrived? [{:keys [x y] :as unit} dest]
    (< (distance [x y] dest) 0.05))

  (let [speed 3
        dt (/ dt 1000)
        wp (first waypoints)
        [dx dy] (normalize (map - wp [x y]))
        [dx dy] (map * [speed speed] [dx dy])
        [dx dy] (map * [dt dt] [dx dy])]
    (if (arrived? unit wp)
      (let [[x y] wp]
        (-> unit
            (assoc :x x :y y)  ; start from round values
            (update :waypoints #(-> % rest vec))))
      (-> unit
          (update :x + dx)
          (update :y + dy)))))
