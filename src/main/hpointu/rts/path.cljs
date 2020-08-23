(ns hpointu.rts.path
  (:require [tailrecursion.priority-map :refer [priority-map]]
            [hpointu.rts.utils :refer [distance]]))

(defn manhattan-dist [[x1 y1] [x2 y2]]
  (+ (js/Math.abs (- x2 x1))
     (js/Math.abs (- y2 y1))))

(defn path [begin end cost-fn neighbours-fn]
  ;; Straight from wikipedia :D

  (defn reconstruct [came-from current total]
    (let [current (get came-from current)]
      (if current
        (recur came-from current (conj total current))
        (into [] (reverse total)))))

  (defn score [m k]
    (get m k 9999999))

  (defn h [n]
    (distance n end))

  (defn neighbour-reducer [current]
    (fn [{:keys [came-from g-score open] :as acc} neighbour] 
      (let [tmp-score (+ (score g-score current)
                         (cost-fn current neighbour))] 
        (if (>= tmp-score (score g-score neighbour))
          acc
          {:came-from (assoc came-from neighbour current)
           :g-score (assoc g-score neighbour tmp-score)
           :open (assoc open neighbour (+ tmp-score
                                          (h neighbour)))}))))

  (loop [closed #{}
         open (priority-map begin (h begin))
         came-from {}
         g-score {begin 0}]
    (if (empty? open)
      nil
      (let [[[pos _] & _] open
            open (pop open)]
        (if (= pos end)
          (reconstruct came-from pos [pos])
          (let [closed (conj closed pos)
                neighbours (remove closed (neighbours-fn pos))
                {:keys [came-from g-score open] :as acc}
                (reduce (neighbour-reducer pos)
                        {:came-from came-from
                         :g-score g-score
                         :open open}
                        neighbours)]
            (recur closed open came-from g-score)))))))
