(ns hpointu.rts.game
  (:require [hpointu.rts.core :as core]
            [hpointu.rts.constants :refer [CELL_SIZE]]
            [hpointu.rts.path :refer [path]]
            [hpointu.rts.utils :refer [distance collides?]])
  (:require-macros [hpointu.rts.macros
                    :refer [update-selected-entities]]))

(def VIEW_W 18)
(def VIEW_H 14)

(defn visible? [{:keys [camera]} [x y]]
  (let [[cx cy] camera]
    (and (< x (+ cx VIEW_W))
         (< y (+ cy VIEW_H)))))

(defn visible-range [[cx cy :as camera]]
  (for [x (range (int cx) (int (+ cx VIEW_W)))
        y (range (int cy) (int (+ cy VIEW_H)))]
    [x y]))

(defn hover? [{:keys [hover]} x y]
  (= hover [x y]))

(defn cell-redraw [[x y]]
  [:cell x y])

(defn busy-cell?
  ([state pos]
   (busy-cell? state pos (fn [_] false)))

  ([{:keys [entities] :as state} pos ignore-pred]
   (some
     (fn [u] (= ((comp vec #(map js/Math.round %) :pos) u) pos))
     (remove ignore-pred (vals entities)))))

(defn free-tiles? [state tiles]
  (not-any? #(or (core/obstacle? (:world state) %1)
                 (busy-cell? state %1)) tiles))

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
        fixed (fn [camera] (into [] (map round camera)))]
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

(defn filter-entities [system {:keys [entities]}]
  (let [components (core/system-components system)
        filter-fn (core/filter-by-components components)]
    (filter filter-fn (vals entities))))

(defn update-entity [state uid func & args]
  (update-in state [:entities uid] #(apply func % args)))

(defn select-entities
  [{:keys [entities] :as state} select-entity-pred append?]
  (letfn
    [(-select [uids]
      (loop [cpt (if append? (count (get-selected-entities state)) 0)
             current state
             left uids]
        (if (empty? left) current
          (let [uid (first left)
                select? (select-entity-pred (get entities uid))
                selected (get-in entities [uid :selected?])
                not-sel (if append? selected false)
                sel (if selected (if append? selected cpt) cpt)
                sel (if select? sel not-sel)
                next-cpt (if (and sel (not selected)) (inc cpt) cpt)
                next-state (update-entity current uid
                                          assoc :selected? sel)]
            (recur next-cpt next-state (rest left))))))]
    (-select (map :uid (filter-entities :select state)))))

(defn move-selected-entities [{:keys [world entities] :as state} target]

  (defn set-entity-destination [{:keys [selected?] :as entity} targets]
    (if selected?
      (-> entity
        (core/add-goal [:walk (nth targets selected?)]))
      entity))

  (let [size (count (get-selected-entities state))
        targets (core/get-free-zone world target size)]
    (update-selected-entities state set-entity-destination targets)))

(defn update-actor [state actor-uid dt]
  (if-let [current-goal (get-in state [:entities actor-uid :goals 0])]
    (core/act state actor-uid current-goal dt)
    state))

(defn update-actors [{:keys [entities] :as state} dt]
  (letfn [(actor-reducer [prev-state actor]
            (update-actor prev-state (first actor) dt))]
    (reduce actor-reducer state entities)))

(defn nearest-tile-path [world start tiles]
  (let [neighbour-fn #(core/neighbours world %1)
        cost-fn #(core/cost world % %)
        paths (map #(path start % cost-fn neighbour-fn) tiles)]
    (first (sort-by count paths))))

(defmethod core/act :wait [state uid [_ t] dt]
  (if (> t 0)
    (update-in state [:entities uid :goals 0 1] - dt)
    (update-in state [:entities uid :goals] (comp vec rest))))

(defmethod core/act :build [state uid [_ btype pos] dt]
  (let [building (assoc (core/->building btype)
                        :uid (core/get-uid)
                        :pos pos)
        tiles (core/building-tiles building)
        can? (free-tiles? state tiles)]
    (if can?
      (-> state
          (update :entities assoc (:uid building) building)
          (update :world #(core/set-world-cells % tiles :w))
          (update-in [:entities uid :goals] (comp vec rest))
          (redraw tiles))
      state)))

(defmethod core/act :walk
  [{:keys [world entities] :as state} uid [_ target] dt]

  (defn arrived? [{:keys [pos] :as entity} dest]
    (< (distance pos dest) 0.01))

  (defn cost-fn [from to]
    (core/cost world from to))

  (defn get-path [pos]
    (let [neighbours-fn #(core/neighbours world %1)]
      (path (map int pos) target cost-fn neighbours-fn)))

  (defn calculate-new-path [{:keys [pos] :as entity}]
    (if-let [path (get-path pos)]
      (assoc entity :waypoints path)
      (-> entity
         (assoc :waypoints [])
         (update :goals #(into [[:wait 1000]] %)))))
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
        (if (apply core/obstacle? world wp)
          (calculate-new-path entity)
          (-> entity
              (update :pos #(map + [dx dy] %))))
        ; there are no wp yet?
        (not wp)
        (calculate-new-path entity))))

  (if-let [speed (get-in entities [uid :walk-speed])]
    (update-in state [:entities uid] move-entity)
    (update-in state [:entities uid :goals] (comp vec rest))))

(extend-type nil
  core/MouseMode
  (left-click-start [_ state pos] (update-selector state pos pos))
  (drag [_ {:keys [selector] :as state} pos]
    (if selector
      (let [[x y & _] selector] (update-selector state [x y] pos))
      state))
  (left-click-end [_ {:keys [mods] :as state} pos]
    (-> state
        (select-entities
          #(collides? (selector-rect state) (core/entity-aabb %))
          (contains? mods :append))
        (dissoc :selector)))
  (right-click-start [_ state pos]
    (move-selected-entities state (map int pos)))
  (right-click-end [_ state _] state))

(extend-type core/Build
  core/UiAction
  (action-name [{:keys [building]}]
    (name building))
  (select-action [{:keys [building] :as this} state]
    (assoc state :mouse-mode this))

  core/MouseMode
  (drag [_ state _] state)
  (right-click-start [_ state _] state)
  (right-click-end [_ state _] state)
  (left-click-start [_ state _] state)
  (left-click-end
    [{:keys [building]} {:keys [world] :as state} pos]
    (let [entity (first (get-selected-entities state))
          start ((comp #(map int %) :pos) entity)
          pos (map int pos)
          tmp (assoc (core/->building building) :pos pos)
          tiles (core/building-tiles tmp)
          path (nearest-tile-path world start tiles)]
      (-> state
          (move-selected-entities (second (reverse path)))
          (update-selected-entities
            update :goals conj [:build building pos])
          (dissoc :mouse-mode)))))

;; TODO: Figure out where this game content data section should live
;; Units
(defn ->base-unit [utype unit]
  (into
    {:utype utype
     :name "NO"
     :aabb [0.1 0.1 0.8 0.8]
     :goals []
     :waypoints []}

    unit))

(defn ->square-shape [color size]
  {:type :rect
   :fill color
   :w size
   :h size
   :x (/ (- CELL_SIZE size) 2)
   :y (/ (- CELL_SIZE size) 2)})

(defn ->circle-shape [color radius]
  {:type :circle
   :fill color
   :r radius
   :x (/ CELL_SIZE 2)
   :y (/ CELL_SIZE 2)})

(defmethod core/->unit :peon [utype]
  (->base-unit
    utype
    {:walk-speed 3
     :pv 20
     :pv-max 20
     :available-actions [(core/->Build :house)
                         (core/->Build :farm)]
     :render (->circle-shape "#0cf" 12)}))

(defmethod core/->unit :knight [utype]
  (->base-unit
    utype
    {:walk-speed 5
     :pv 200
     :pv-max 200
     :available-actions [(core/->Build :hotel)]
     :render (->square-shape "#0cf" 22)}))
  
;; Buildings
(defn ->base-building [btype building]
  (into
    {:btype btype
     :name (name btype)
     :build-progress 0
     :build-time 10000
     :goals []}

    building))

(defmethod core/->building :farm [btype]
  (->base-building
    btype
    {:pv-max 50
     :pv 50
     :size 2}))

(defmethod core/->building :house [btype]
  (->base-building
    btype
    {:pv-max 50
     :pv 50
     :size 1}))

(defmethod core/->building :hotel [btype]
  (->base-building
    btype
    {:pv-max 80
     :pv 80
     :size 3}))

(defmethod core/system-components :select [_] [:aabb])
(defmethod core/system-components :draw [_] [:pos :render :aabb])
(defmethod core/system-components :draw-minimap [_] [:pos :preview])
