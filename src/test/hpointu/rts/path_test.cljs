(ns hpointu.rts.path-test
  (:require [cljs.test :refer [deftest is]]
            [hpointu.rts.core :as core]
            [hpointu.rts.path :as p]))

(deftest test-manhattan-distance
  (is (= 6 (p/manhattan-dist [1 2] [5 4]))))


(deftest test-path
  (is (= [[0 0]] (p/path [] [0 0] [0 0])))

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
    (is (= optimal-path (p/path world-test [0 0] [7 0])))))


(deftest trivial-path
  (let [world [[:g :w :g]
               [:g :g :g]]
        p [[0 0] [1 1] [2 0]]]
    (is (= p (p/path world [0 0] [2 0])))))

