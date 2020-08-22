(ns hpointu.rts.path-test
  (:require [cljs.test :refer [deftest is]]
            [hpointu.rts.core :as core]
            [hpointu.rts.path :as p]))

(deftest test-manhattan-distance
  (is (= 6 (p/manhattan-dist [1 2] [5 4]))))

(deftest test-path
  (is (= [[0 0]] (p/path [] [0 0] [0 0])))
  (is (= #{[0 0] [1 0] [2 0]}
         (set (p/path (core/->world 3 3) [0 0] [2 0])))))
