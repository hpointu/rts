(ns hpointu.rts.core
  (:require [hpointu.rts.utils :refer [distance]]))
      
(defmulti ->unit (fn [u] u))
(defmulti ->building (fn [b] b))
(defmulti act (fn [state actor-uid action dt] (first action)))
(defmulti system-components (fn [s] s))
(defmulti entity-subtype :type)
(defmulti render-items :render-as)

;; TODO Probably move to game.cljc
(def uids (atom 0))
(defn get-uid []
  (swap! uids inc)
  @uids)

(defn filter-by-components [components]
  (fn [record] ((apply every-pred components) record)))

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


(defn set-world-cells [world positions v]
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

(defn obstacle?
  ([world x y]
   (let [obstacles #{:w}]
     (some? (obstacles (get-in world [y x])))))
  ([world [x y]]
   (obstacle? world x y)))


(defn cost [world from to]
  (let [[x1 y1] to]
    (if (obstacle? world x1 y1)
      ##Inf
      (distance from to))))


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

(defn building-tiles [{:keys [size pos]}]
  (tiles pos size size))

(defn built? [{:keys [build-time build-progress]}]
  (= build-progress build-time))

(defn get-free-zone [world pos size free-pred]

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
