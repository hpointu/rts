(ns hpointu.rts.core
  (:require [hpointu.rts.utils :refer [distance]]))
      
(defmulti ->building (fn [btype] btype))

(defrecord Build [building])

(defprotocol UiAction
  (action-name [this])
  (select-action [this state]))

(defprotocol MouseMode
  (draw-hover! [this ctx state])
  (left-click-action [this state]))

;; TODO Probably move to game.cljc
(def uids (atom 0))
(defn get-uid []
  (swap! uids inc)
  @uids)

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

(defn unit-moving? [{:keys [waypoints]}] (seq waypoints))

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

(defn get-free-zone [world pos size]

  (defn reducer [{:keys [visited zone] :as acc} n]
    (if (or (contains? visited n)
            (>= (count zone) size))
      acc
      (let [[x y] n
            up (-> acc
                  (update :limit conj n)
                  (update :visited conj n))]
        (if (obstacle? world x y)
          up
          (update up :zone conj n)))))

  (loop [limit #queue [pos]
         visited #{pos}
         zone [pos]]
    (if (>= (count zone) size)
      (vec (take size zone))
      (let [current (peek limit)
            limit (pop limit)
            neighs (sort-by #(distance pos %) (neighbours world current))
            initial {:limit limit :visited visited :zone zone}
            {:keys [limit visited zone] :as acc}
            (reduce reducer initial neighs)]
        (recur limit visited zone)))))

(defrecord Building [btype pos])
