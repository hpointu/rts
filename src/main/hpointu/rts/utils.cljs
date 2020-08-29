(ns hpointu.rts.utils)

(defn distance [[x1 y1] [x2 y2]]
  (let [dx (js/Math.abs (- x2 x1))
        dy (js/Math.abs (- y2 y1))]
    (js/Math.sqrt (+ (* dx dx) (* dy dy)))))

(defn normalize [v]
  (let [l (distance [0 0] v)]
    (into [] (map / v [l l]))))

(defn in-rect? [[x y w h] [px py]]
  (and (< x px (+ x w))
       (< y py (+ y h))))

(defn collides? [[x1 y1 w1 h1] [x2 y2 w2 h2]]
  (and (< x1 (+ x2 w2))
       (< x2 (+ x1 w1))
       (< y1 (+ y2 h2))
       (< y2 (+ y1 h1))))

