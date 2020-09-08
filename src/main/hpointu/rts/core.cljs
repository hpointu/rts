(ns hpointu.rts.core
  (:require
    [hpointu.rts.utils :refer [distance]]
    [hpointu.rts.constants :as C]))
      
(defmulti ->entity (fn [u] u))
(defmulti act (fn [state actor-uid action dt] (first action)))
(defmulti entity-subtype :type)
(defmulti render-items :render-as)
(defmulti player-resource (fn [state res-type] res-type))
(defmulti spend-resource (fn [state res-type _] res-type))

(defmethod act :default [s _ a _] (println a "default action") s)

;; TODO Probably move to game.cljc
(def uids (atom 0))
(defn get-uid
  "Return a fresh new Unique ID."
  [] (swap! uids inc) @uids)

(defn assign-uid
  "Assign a new Unique ID to `entity`."
  [entity]
  (assoc entity :uid (get-uid)))

(defn world-width
  "Return the width of the `world`."
  [world]
  (count (get world 0)))

(defn world-height
  "Return the height of the `world`."
  [world]
  (count world))

(defn ->world
  "Return a world enclosed by walls"
  [width height]
  (let [full (vec (for [_ (range width)] :w))
        line (-> [:w]
                 (into (for [_ (range (- width 2))] :g))
                 (conj :w))]
    (-> [full]
        (into (for [_ (range (- height 2))] line))
        (conj full)))) 

(defn world-cell
  "Return the obstruction value in `world` at `[x y]`."
  [world x y]
  (get-in world [y x]))

(defn world-seq
  "Enumerate [pos, val] for each cell of the world."
  [world]
  (let [w (world-width world)
        h (world-height world)]
    (for [x (range w), y (range h)]
      [[x y] (world-cell world x y)])))

(defn set-world-cells
  "Set the obstruction value to `v` for all `positions`
  in the `world`."
  [world positions v]
  (loop [w world
         [pos & more] positions]
    (let [[x y] pos]
      (if pos (recur (assoc-in w [y x] v) more) w))))


(defn entity-moving? [{:keys [waypoints]}] (seq waypoints))

(defn entity-aabb [{:keys [pos aabb] :as entity}]
  (let [[a b w h] aabb, [x y] pos]
    [(+ a x) (+ b y) w h]))

(defn add-goal [entity goal]
  (update entity :goals conj goal))

(defn set-goal [entity goal]
  (-> entity
      (assoc :waypoints [])
      (assoc :goals [goal])))

(defn replace-current-goal [entity goal]
  (-> entity
      (assoc :waypoints [])
      (update :goals (comp vec #(cons goal %) rest))))

(defn goals-by-type [goal-type entity]
  (filter #(= goal-type (first %)) (:goals entity)))

(defn in-world?
  ([world [x y]]
   (in-world? world x y))

  ([world x y]
   (and (< -1 x (world-width world))
        (< -1 y (world-height world)))))

(defn on-cell? [cell [x y]]
  (every? true? (map = cell [(int x) (int y)])))

(defn neighbours [world [x y]]
  (filter
    #(in-world? world %)
    [[(dec x) (dec y)] [x (dec y)] [(inc x) (dec y)]
     [(dec x) y]                   [(inc x) y]
     [(dec x) (inc y)] [x (inc y)] [(inc x) (inc y)]]))


(defn tiles [pos w h]
  (let [offsets (for [x (range w) y (range h)] [x y])
        [x y] pos
        add-offset (fn [[ox oy]] [(+ ox x) (+ oy y)])]
    (vec (map add-offset offsets))))

(defn entity-tiles
  "Return the list of tiles occupied by `entity`"
  [{:keys [size pos] :or {size 1} :as entity}]
  (tiles (mapv js/Math.round pos) size size))

(defn occupies?
  "Does `entity` stands on `tile` ?"
  [entity tile]
  (some #(= tile %) (entity-tiles entity)))

(defn busy-cell?
  "Does any entity stands on `pos` ?"
  [entities pos]
  (some #(occupies? % pos) entities))

(defn obstacle?
  "Is the value at [x y] in `world` considered an obstacle?"
  [world [x y]]
  (C/obstacles (world-cell world x y)))

(defn add-entity
  "Add an entity to the world.
  (This will update the obstruction map that
  the world represents)"
  [world entity]
  (if-let [v (:obstruction entity)]
    (set-world-cells world (entity-tiles entity) v)
    world))

(defn add-entities
  "Add many entities to the world.
  See `add-entity` for more details."
  [world entities]
  (if (seq entities)
    (recur (add-entity world (first entities)) (rest entities))
    world))

(defn get-free-zone
  "Given a `free-predicate`, return `size` world cells that are free,
  as close as possible to `pos`."
  [world pos size free-pred]

  (defn reducer [{:keys [visited zone] :as acc} n]
    (if (or (contains? visited n)
            (>= (count zone) size))
      acc
      (let [up (-> acc
                  (update :limit conj n)
                  (update :visited conj n))]
        (if (not (free-pred n)) up
          (update up :zone conj n)))))

  (loop [limit #queue [pos]
         visited #{}
         zone []]
    (if (>= (count zone) size)
      (vec (take size zone))
      (let [current (peek limit)
            limit (pop limit)
            neighs (sort-by #(distance pos %) (neighbours world current))
            initial {:limit limit :visited visited :zone zone}
            {:keys [limit visited zone] :as acc}
            (reduce reducer initial (conj neighs current))]
        (recur limit visited zone)))))
