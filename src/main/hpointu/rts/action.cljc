(ns hpointu.rts.action
  (:require [hpointu.rts.utils :refer [normalize distance]]
            [hpointu.rts.path :refer [path]]
            [hpointu.rts.core :as core]))

(defn walk [pos]
  [:walk pos])


(defn units-on-pos [{:keys [units]} [x y]]
  (filter #(and (= (int x) (int (:x %1)))
                (= (int y) (int (:y %1))))
          units))

(defn busy-tile? [{:keys [world units] :as state} [x y] exclude-uid]
  (let [bee (first (units-on-pos state [x y]))]
    (if (= (:uid bee) exclude-uid)
      nil
      bee)))

(defmulti act (fn [state actor action dt] (first action)))

(defmethod act :wait [state unit action dt]
  unit)

(defmethod act :walk
  [{:keys [world] :as state}
   {:keys [x y waypoints uid] :as unit}
   [_ target]
   dt]

  (defn arrived? [{:keys [x y] :as unit} dest]
    (< (distance [x y] dest) 0.05))

  (defn cost-fn [from to]
    (core/cost world from to))

  (defn get-path []
    (let [neighbours-fn #(core/neighbours world %1)]
      (path (map int [x y]) target cost-fn neighbours-fn)))

  (defn calculate-new-path [wait-tile]
    (if-let [path (get-path)]
      (assoc unit :waypoints path)
      (update unit :goals (if wait-tile
                            #(into [[:wait]] %)
                            (comp vec rest)))))

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
      ; there's a wp further away :
      wp
      (if (apply core/obstacle? world wp)
        (calculate-new-path wp)
        (-> unit
            (update :x + dx)
            (update :y + dy)))
      ; there are no wp yet?
      (not wp)
      (calculate-new-path nil))))
      
(defn update-actor [state unit dt]
  (if-let [current-goal (first (:goals unit))]
    (act state unit current-goal dt)
    unit))
