(ns hpointu.rts.path-test
  (:require [cljs.test :refer [deftest is]]
            [hpointu.rts.core :as core]
            [hpointu.rts.path :as p]))

(deftest test-manhattan-distance
  (is (= 6 (p/manhattan-dist [1 2] [5 4]))))


(defn get-cost-fn [world]
  (fn [f t] (core/cost world f t)))

(defn get-neigh-fn [world]
  (fn [p] (core/neighbours world p)))


(deftest test-path
  (is (= [[0 0]] (p/path [0 0] [0 0] (get-cost-fn []) (get-neigh-fn []))))

  (let [world-test
        [[:g :w :g :g :g :w :w :g]
         [:g :w :g :g :g :g :g :g]
         [:g :w :g :w :w :g :g :g]
         [:g :w :g :g :w :g :g :g]
         [:g :g :g :g :w :g :g :g]
         [:w :w :w :w :w :w :w :w]]
        optimal-path
        [[0 0] [0 1] [0 2] [0 3]
         [1 4]
         [2 3] [2 2]
         [3 1] [4 1] [5 1] [6 1]
         [7 0]]]
    (is (= optimal-path
           (p/path [0 0] [7 0]
                   (get-cost-fn world-test)
                   (get-neigh-fn world-test))))))


(deftest trivial-path
  (let [world [[:g :w :g]
               [:g :g :g]]
        p [[0 0] [1 1] [2 0]]]
    (is (= p (p/path [0 0] [2 0]
                     (get-cost-fn world)
                     (get-neigh-fn world))))))

