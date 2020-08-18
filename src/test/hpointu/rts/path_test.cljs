(ns hpointu.rts.path-test
  (:require [cljs.test :refer [deftest is]]
            [hpointu.rts.path :as p]))

(deftest test-manhattan-distance

  (is (= 6 (p/manhattan-dist [1 2] [5 4]))))
