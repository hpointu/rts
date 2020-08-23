(ns hpointu.rts.action
  (:require [hpointu.rts.utils :refer [normalize distance]]
            [hpointu.rts.path :refer [path]]
            [hpointu.rts.core :as core]))

(defn walk [pos]
  [:walk pos])


(defmulti act (fn [state actor action dt] (first action)))

(defmethod act :walk
  [{:keys [world] :as state}
   {:keys [x y waypoints] :as unit}
   [_ target]
   dt]

  (defn arrived? [{:keys [x y] :as unit} dest]
    (< (distance [x y] dest) 0.05))

  (let [speed 3
        dt (/ dt 1000)
        [wp & more] waypoints
        [dx dy] (normalize (map - wp [x y]))
        [dx dy] (map * [speed speed] [dx dy])
        [dx dy] (map * [dt dt] [dx dy])]
    (cond
      ; arrived to wp
      (arrived? unit wp)
      (let [[x y] wp]
        (-> unit
            (assoc :x x :y y)  ; start from round values
            (assoc :waypoints (vec more))
            ; if no more waypoints, go to next goal
            (update :goals #(if (not more) (into [] (rest %1)) %1))))
      ; there's a wp :
      wp (-> unit
             (update :x + dx)
             (update :y + dy))

      ; there are no wp yet?
      (not wp)
      (let [cost-fn #(core/cost world %1 %2)
            neighbours-fn #(core/neighbours world %1)
            path (path (map int [x y]) target cost-fn neighbours-fn)]
        (if path
          (assoc unit :waypoints path)
          (update unit :goals (comp vec rest)))))))
      
(defn update-actor [state unit dt]
  (if-let [current-goal (first (:goals unit))]
    (act state unit current-goal dt)
    unit))
