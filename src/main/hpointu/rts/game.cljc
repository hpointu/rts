(ns hpointu.rts.game
  (:require [hpointu.rts.core :as core]
            [hpointu.rts.action :as action]))

(def VIEW_W 18)
(def VIEW_H 14)


(defn visible? [{:keys [camera]} x y]
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

  ([{:keys [units] :as state} pos ignore-pred]
   (some
     (fn [u] (= ((comp vec #(map js/Math.round %) (juxt :x :y)) u) pos))
     (remove ignore-pred (vals units)))))

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

(defn select-units [{:keys [selector] :as state} select-unit-pred]

    (defn assing-select-id [units]
      (loop [result []
             left units
             cpt 0]
        (let [[[uid u] & more] left
              select? (select-unit-pred u)]
          (if u
            (recur
              (conj result [uid
                            (assoc u :selected? (if select? cpt false))])
              more
              (if select? (inc cpt) cpt))
            result))))

    (update state :units #(into {} (assing-select-id %))))

(defn get-selected-units [{:keys [units]}]
  (filter :selected? (vals units)))

(defn end-game-left-click
  [{:keys [mouse-mode] :as state} select-unit-predicate]
  (if mouse-mode
    (core/left-click-action mouse-mode state)
    (-> state
        (select-units select-unit-predicate)
        (dissoc :selector)
        (dissoc :left-click))))

(defn end-game-right-click [{:keys [world right-click units] :as state}]

  (defn set-unit-destination [targets {:keys [x y selected?] :as unit}]
    (if selected?
      (-> unit
        (update :goals conj [:walk (nth targets selected?)]))
      unit))

  (let [size (count (get-selected-units state))
        targets (core/get-free-zone world right-click size)]
    (-> state
        (update :units
                #(into {} (map (fn [[uid u]]
                                 [uid (set-unit-destination targets u)]) %)))
        (dissoc :right-click))))

(defn update-actor [state actor-uid dt]
  (if-let [current-goal (get-in state [:units actor-uid :goals 0])]
    (action/act state actor-uid current-goal dt)
    state))

(defn update-actors [{:keys [units] :as state} dt]
  (letfn [(actor-reducer [prev-state actor]
            (update-actor prev-state (first actor) dt))]
    (reduce actor-reducer state units)))

(defn add-building [state btype pos]
  (let [building (assoc (core/->building btype) :pos pos)
        tiles (core/building-tiles building)
        can? (free-tiles? state tiles)]
    (if can?
      (-> state
          (update :buildings conj building)
          (update :world #(core/set-world-cells % tiles :w))
          (dissoc :mouse-mode)
          (redraw tiles))
      state)))

(extend-type core/Build
  core/UiAction
  (core/action-name [{:keys [building]}]
    (name building))
  (core/select-action [{:keys [building] :as this} state]
    (assoc state :mouse-mode this))
  core/MouseMode
  (core/left-click-action
    [{:keys [building]} {:keys [left-click] :as state}]
    (add-building state building left-click)))

(defmethod core/->building :farm [btype]
  {:type btype
   :pv-max 50
   :pv 50
   :size 2})

(defmethod core/->building :house [btype]
  {:type btype
   :pv-max 50
   :pv 50
   :size 1})

(defmethod core/->building :hotel [btype]
  {:type btype
   :pv-max 80
   :pv 80
   :size 3})
