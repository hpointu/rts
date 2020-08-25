(ns hpointu.rts.action
  (:require [hpointu.rts.utils :refer [normalize distance]]
            [hpointu.rts.path :refer [path]]
            [hpointu.rts.core :as core]))

(defmulti act (fn [state actor-uid action dt] (first action)))

(defmethod act :wait [state uid [_ t] dt]
  (if (> t 0)
    (update-in state [:units uid :goals 0 1] - dt)
    (update-in state [:units uid :goals] (comp vec rest))))

(defmethod act :walk
  [{:keys [world] :as state} uid [_ target] dt]

  (defn arrived? [{:keys [x y] :as unit} dest]
    (< (distance [x y] dest) 0.01))

  (defn cost-fn [from to]
    (core/cost world from to))

  (defn get-path [x y]
    (let [neighbours-fn #(core/neighbours world %1)]
      (path (map int [x y]) target cost-fn neighbours-fn)))

  (defn calculate-new-path [{:keys [x y] :as unit} wait-tile]
    (if-let [path (get-path x y)]
      (assoc unit :waypoints path)
      (update unit :goals (if wait-tile
                            #(into [[:wait 1000]] %)
                            (comp vec rest)))))
  (defn dir [a b]
    (if (< a b) 1 -1))

  (defn move-unit [{:keys [x y waypoints] :as unit}]
    (let [speed 3
          dt (/ dt 1000)
          [wp & more] waypoints
          [tx ty] wp
          [max-dx max-dy] [(- tx x) (- ty y)]
          [dx dy] (map #(* speed dt %) [(dir x tx) (dir y ty)])
          [dx dy] [(min-key js/Math.abs max-dx dx) 
                   (min-key js/Math.abs max-dy dy)]]
      (cond
        ; arrived to wp
        (arrived? unit wp)
        (let [[x y] wp]
          (-> unit
              (assoc :x x :y y)  ; start from round values
              (assoc :waypoints (vec more))
              ; if no more waypoints, go to next goal
              (update :goals #(if (not more) (into [] (rest %1)) %1))))
        ; there's a wp further away :
        wp
        (if (apply core/obstacle? world wp)
          (calculate-new-path unit wp)
          (-> unit
              (update :x + dx)
              (update :y + dy)))
        ; there are no wp yet?
        (not wp)
        (calculate-new-path unit nil))))

  (update-in state [:units uid] move-unit))
