(ns hpointu.rts.game
  (:require
    [hpointu.rts.core :as core]
    [hpointu.rts.constants :as C]
    [hpointu.rts.entities :as ntt]
    [hpointu.rts.path :refer [path]]
    [hpointu.rts.utils :as u]
    [hpointu.rts.ux :as ux]
    [taoensso.tufte :as tufte :refer-macros (defnp p profiled profile)])
  (:require-macros
    [hpointu.rts.macros
     :refer [update-entities]]))

(defmulti as-target (fn [entity state] (:type entity)))
(defmethod as-target :default [_ state] state)

(defn img->world [img]
  (let 
    [tile #(C/TILES % :grass)
     pixels (u/jsimage->pixels img)
     row (fn [i] (mapv tile (get pixels i)))]
    (mapv row (range (.-height img)))))

(defn spawn-entity [[pos cell-type]]
  (when-let [entity-factory (ntt/cell-spawn cell-type)]
    (-> (entity-factory)
        (core/assign-uid)
        (assoc :pos pos))))

(defn add-entity [state pos entity-factory]
  (let [entity (-> (entity-factory)
                   (core/assign-uid)
                   (assoc :pos pos))
        uid (:uid entity)]
    (->
      state
      (update :entities into [[uid entity]])
      (update :world core/add-entity entity))))

(defn world->entities [world]
  (remove nil? (map spawn-entity (core/world-seq world))))

(defn populate-entities [{:keys [world] :as state}]
  (let [entities (world->entities world)]
    (->
      state
      (update :entities into (map (juxt :uid identity) entities))
      (update :world core/add-entities entities))))

(defn visible? [{:keys [camera]} [x y]]
  (let [[cx cy] camera]
    (and (<= (dec cx) x (inc (+ cx C/VIEW_W)))
         (<= (dec cy) y (inc (+ cy C/VIEW_H))))))

(defn visible-range [[cx cy :as camera]]
  (for [x (range (int cx) (int (+ 1 cx C/VIEW_W)))
        y (range (int cy) (int (+ 1 cy C/VIEW_H)))]
    [x y]))

(defn cell-redraw [[x y]] [:cell x y])

(defn free-tiles?
  ([state tiles free-tiles]
   (let [ignore (fn [cell] (some #(= % cell) free-tiles))
         entities (vals (:entities state))]
     (not-any? #(and (not (ignore %1))
                     (or (core/obstacle? (:world state) %1)
                         (core/busy-cell? entities %1)))
               tiles)))
  ([state tiles]
   (free-tiles? state tiles [])))

(defn get-cost-fn [state]
  (let [obstacle? #(core/obstacle? (:world state) %)]
    (fn [from to]
      (if (obstacle? to)
        ##Inf
        (u/distance from to)))))

(defn get-neigh-fn [state]
  (fn [pos] (core/neighbours (:world state) pos)))

(defn reserved-walk-targets [{:keys [entities]}]
  (apply
    concat
    (map (fn [e] (map second (core/goals-by-type :walk e)))
         (vals entities))))

(defn cell-reserved? [state cell]
  (some #(= cell %) (reserved-walk-targets state)))

(defn find-walk-targets [{:keys [world] :as state} target size origins]
  (let [free? (fn [tile] (and (free-tiles? state [tile] origins)
                              (not (cell-reserved? state tile))))]
    (core/get-free-zone world target size free?)))

(defn redraw [{:keys [world] :as state} tiles]
  (update state :world-updates into (for [t tiles] (cell-redraw t))))

(defn redraw-world [{:keys [world] :as state}]
  (let [elems (for [x (range (core/world-width world))
                    y (range (core/world-height world))]
                (cell-redraw [x y]))]
    (-> state
        (update :world-updates conj [:clear])
        (update :world-updates into elems))))

(defn redraw-visible [{:keys [world camera] :as state}]
  (let [elems (for [[x y] (visible-range camera)]
                (cell-redraw [x y]))]
    (-> state
        (update :world-updates conj [:clear])
        (update :world-updates into elems))))

(defn update-hover [{:keys [hover world camera] :as state} x y]
  (let [[cx cy] camera
        new-hover (when (core/in-world? world x y) [x y])]
    (-> state
        (assoc :hover new-hover)
        (update :world-updates into (map cell-redraw (keep identity [new-hover hover]))))))

(defn update-selector [state start end]
  (assoc state :selector (into start end)))

(defn selector-rect [{selector :selector}]
  (when selector
    (let [[x1 y1 x2 y2] selector
          [x1 x2] [(min x1 x2) (max x1 x2)]
          [y1 y2] [(min y1 y2) (max y1 y2)]]
      [x1 y1 (- x2 x1) (- y2 y1)])))

(defn set-cell [{:keys [hover] :as state} v]
  (let [pos hover]
    (update state :world core/set-world-cells [pos] v)))

(defn clamp-camera [{:keys [world] :as state}]
  (let [max-x (- (core/world-width world) 17.4)
        max-y (- (core/world-height world) 13.6)
        round (fn [f] (/ (js/Math.round (* 10 f)) 10))
        fixed (fn [camera] (mapv round camera))]
    (-> state
      (update-in [:camera 0] min max-x)
      (update-in [:camera 0] max 0)
      (update-in [:camera 1] min max-y)
      (update-in [:camera 1] max 0)
      (update :camera fixed))))

(defn move-camera [state dx dy]
  (let [speed 0.3]
    (-> state
        (update-in [:camera 0] + (* speed dx))
        (update-in [:camera 1] + (* speed dy))
        (clamp-camera))))

(defn get-selected-entities
  ([{:keys [entities]}]
   (filter :selected? (vals entities)))

  ([{:keys [entities]} sort-key]
   (filter :selected? (sort-by sort-key (vals entities)))))

(defn system-entities [system {:keys [entities]}]
  (let [filter-fn (ntt/has-components-pred system)]
    (filter filter-fn (vals entities))))

(defn entity-can-build [entity btype]
  (some #(= (ux/build btype) %) (:available-actions entity)))

(defn entity-can-collect [entity otype]
  (when-let [collect (:collect entity)]
    (collect otype)))

(defn get-entity [state uid]
  (get-in state [:entities uid]))

(defn update-entity [state uid func & args]
  (update-in state [:entities uid] #(apply func % args)))

(defn clear-selection [state]
  (update-entities state :selected? assoc :selected? false))

(defn select-entities
  ([state select-entity-pred]
   (select-entities state select-entity-pred false))

  ([state select-entity-pred append?]
   (cond-> state
     (not append?)
     clear-selection
     true
     (update-entities select-entity-pred assoc :selected? true))))

(defn extend-selection [{:keys [mods] :as state} subtype]
  (select-entities
    state
    #(= (core/entity-subtype %) subtype)
    (contains? mods :append)))

(defn select-entity-uid [state uid extend?]
  (let [e (get-in state [:entities uid])]
    (cond-> state true
      (select-entities #(= uid (:uid %)))
      extend?
      (extend-selection (core/entity-subtype e)))))

(defn pick-entities [state pos]
  (filter
    #(u/in-rect? (core/entity-aabb %) pos)
    (system-entities :select state)))

(defn get-path [state from to]
  (let [cost-fn (get-cost-fn state)
        neigh-fn (get-neigh-fn state)]
    (path from to cost-fn neigh-fn)))

(defn nearest-tile-path [{:keys [world] :as state} end tiles]
  (let [tile (first (sort-by #(u/distance end %) tiles))]
    (get-path state tile end)))

(defn move-selected-entities
  [{:keys [world entities mods] :as state} target]

  (defn set-entity-destination [{:keys [uid] :as entity} targets]
    (if (contains? mods :append)
      (core/add-goal entity [:walk (targets uid)])
      (core/set-goal entity [:walk (targets uid)])))

  (let [movable? (every-pred :selected? (ntt/has-components-pred :move))
        to-move (filter movable? (vals entities))
        origins (map :pos to-move)
        targets (find-walk-targets state target (count to-move) origins)
        targets (into {} (map vector (map :uid to-move) targets))]
    (-> state
        (update-entities movable? set-entity-destination targets))))

(defn find-closest-entity [{:keys [entities]} pos pred]
  (first (sort-by #(u/distance pos (:pos %))
                  (filter pred (vals entities)))))

(defn update-current-goal [state actor-uid f & args]
  (update-in state [:entities actor-uid :goals 0] #(apply f % args)))

(defn next-goal [state actor-uid]
  (update-in state [:entities actor-uid :goals] (comp vec rest)))

(defn update-actor [state actor-uid dt]
  (if-let [current-goal (get-in state [:entities actor-uid :goals 0])]
    (core/act state actor-uid current-goal dt)
    state))

(defn update-actors [state dt]
  (letfn [(actor-reducer [prev-state actor]
            (update-actor prev-state (:uid actor) dt))]
    (reduce actor-reducer state (system-entities :actors state))))

(defmethod core/act :spawn
  [state uid [_ utype progress total] dt]
  (if (< progress total)
    (update-in state [:entities uid :goals 0 2] + dt)
    (let [pos (:pos (get-entity state uid))
          to (first (find-walk-targets state pos 1 []))]
      (-> state
          (add-entity to #(core/->unit utype))
          (next-goal uid)))))

(defmethod core/act :build [state uid [_ buid] dt]
  (let [btime (get-in state [:entities buid :build-time])
        bprogress (get-in state [:entities buid :build-progress])]
    (if (< bprogress btime)
      (update-in state [:entities buid :build-progress] + dt)
      (-> state
          (assoc-in [:entities buid :build-progress] btime)
          (assoc-in [:entities buid :active] true)
          (next-goal uid)))))

(defmethod core/act :wait [state uid [_ t] dt]
  (if (> t 0)
    (update-in state [:entities uid :goals 0 1] - dt)
    (next-goal state uid)))

(defmethod core/act :place-building [state uid [_ btype pos] dt]
  (let [buid (core/get-uid)
        building (assoc (core/->building btype)
                        :uid buid
                        :pos pos)
        tiles (core/entity-tiles building)
        can? (free-tiles? state tiles)]
    (if can?
      (-> state
          (update :entities assoc (:uid building) building)
          (update :world #(core/set-world-cells % tiles :building))
          (update-in [:entities uid :goals] (comp vec rest))
          (update-in [:entities uid :goals] #(vec (cons [:build buid] %)))
          (redraw tiles))
      state)))

(defmethod core/act :deposit [state uid [_ rtype size] dt]
  (-> state
      (update-in [:player rtype] + size)
      (next-goal uid)))

(defmethod core/act :collect [state uid [_ ouid size timeout] dt]
  (let [{:keys [stock rtype]} (get-in state [:entities ouid])
        opos  (get-in state [:entities ouid :pos])
        size (min size stock)
        pos (get-in state [:entities uid :pos])]
    (if (pos? timeout)
      (update-in state [:entities uid :goals 0 3] - dt)
      (if (pos? stock)
        (let [hotel-pred #(= (:btype %) ::ntt/hotel)
              hotel (find-closest-entity state pos hotel-pred)
              htiles (core/entity-tiles hotel)
              path (nearest-tile-path state pos htiles)]
          (-> state
              (update-in [:entities ouid :stock] - size)
              (update-in [:entities uid :goals] conj
                         [:walk (second path)]
                         [:deposit rtype size]
                         [:walk pos]
                         [:collect ouid
                          C/COLLECTION_SIZE C/COLLECTION_TIME])
              (next-goal uid)))
        (next-goal state uid)))))
  

(defmethod core/act :walk
  [{:keys [world entities] :as state} uid [_ target] dt]

  (defn arrived? [{:keys [pos] :as entity} dest]
    (< (u/distance pos dest) 0.01))

  (defn calculate-new-path [{:keys [pos] :as entity}]
    (if-let [path (get-path state (map js/Math.round pos) target)]
      (assoc entity :waypoints path)
      (let [targets (find-walk-targets state target 1 [(map js/Math.round pos)])
            goal [:walk (first targets)]]
        (core/replace-current-goal entity goal))))

  (defn dir [a b]
    (if (< a b) 1 -1))

  (defn move-entity [{:keys [walk-speed pos waypoints] :as entity}]
    (let [dt (/ dt 1000)
          [wp & more] waypoints
          [tx ty] wp
          [x y] pos
          [max-dx max-dy] [(- tx x) (- ty y)]
          [dx dy] (map #(* walk-speed dt %) [(dir x tx) (dir y ty)])
          [dx dy] [(min-key js/Math.abs max-dx dx) 
                   (min-key js/Math.abs max-dy dy)]]
      (cond
        ; arrived to wp
        (arrived? entity wp)
        (let [[x y] wp]
          (-> entity
              (assoc :pos [x y])  ; start from round values
              (assoc :waypoints (vec more))
              ; if no more waypoints, go to next goal
              (update :goals #(if (not more) (into [] (rest %1)) %1))))
        ; there's a wp further away :
        wp
        (-> entity (update :pos #(map + [dx dy] %)))
        ; there are no wp yet?
        (not wp)
        (calculate-new-path entity))))

  (if-let [speed (get-in entities [uid :walk-speed])]
    (update-in state [:entities uid] move-entity)
    (update-in state [:entities uid :goals] (comp vec rest))))


(defn contribute-to-build [entity buid]
  (update entity :goals conj [:build buid]))

(defn collect-object [entity ouid]
  (update entity :goals conj [:collect ouid
                              C/COLLECTION_SIZE C/COLLECTION_TIME]))

(defmethod as-target ::ntt/building [{:keys [active btype uid]} state]
  (let [can-build #(entity-can-build % btype)]
    (update-entities
      state
      (every-pred can-build :selected?)
      contribute-to-build
      uid)))

(defmethod as-target ::ntt/object [{:keys [active otype uid]} state]
  (let [can-collect? #(entity-can-collect % otype)]
    (update-entities
      state
      (every-pred can-collect? :selected?)
      collect-object
      uid)))

;; nil mouse mode
(defmethod ux/left-click-start nil [_ state pos]
  (update-selector state pos pos))

(defmethod ux/right-click-start nil [_ state pos]
  (let [[target & _] (pick-entities state pos)]
    (as-target target
      (move-selected-entities state (map int pos)))))

(defmethod ux/right-click-end nil [_ state _] state)

(defmethod ux/drag nil [_ {:keys [selector] :as state} pos]
  (if selector
    (let [[x y & _] selector] (update-selector state [x y] pos))
    state))

(defmethod ux/left-click-end nil [_ {:keys [mods] :as state} pos]
  (let [hit? #(u/collides? (selector-rect state) (core/entity-aabb %))
        [uid u] (first (filter (comp hit? second) (:entities state)))
        subtype (when u (core/entity-subtype u))]
    (cond-> state
      true
       (select-entities hit? (contains? mods :append))
       (contains? mods :control)
       (extend-selection subtype)
       true
       (dissoc :selector))))

;; build mouse mode
(defmethod ux/right-click-start ::ux/build [_ state pos] state)
(defmethod ux/right-click-end ::ux/build [_ state _] state)
(defmethod ux/drag ::ux/build [_ {:keys [selector] :as state} pos] state)
(defmethod ux/left-click-start ::ux/build [_ state pos] state)
(defmethod ux/left-click-end ::ux/build
  [[_ building] state pos]
  (let [entity (first (get-selected-entities state))
        start ((comp #(map int %) :pos) entity)
        pos (map int pos)
        tmp (assoc (core/->building building) :pos pos)
        tiles (core/entity-tiles tmp)
        path (nearest-tile-path state start tiles)]
    (if (free-tiles? state tiles)
      (-> state
          (move-selected-entities (second path))
          (update-entities :selected?
            update :goals conj [:place-building building pos])
          (dissoc :mouse-mode))
      state)))

(defmethod core/entity-subtype ::ntt/unit [e] (:utype e))
(defmethod core/entity-subtype ::ntt/building [e] (:btype e))
(defmethod core/entity-subtype ::ntt/object [e] (:otype e))

(defmethod ux/ui-action-select ::ux/build [action state]
  (assoc state :mouse-mode action))

(defmethod ux/ui-action-select ::ux/spawn [action state]
  (let [action [:spawn ::ntt/peon 0 1000]]
    (update-entities state :selected? update :goals conj action)))
