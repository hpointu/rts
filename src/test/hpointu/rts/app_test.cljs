(ns hpointu.rts.app-test
  (:require [cljs.test :refer [deftest is]]
            [hpointu.rts.core :as core]))

(deftest test-obstacles
  (let [world [[:g :g :g :g]
               [:g :g :g :w]]]  ; wall (3, 1)
    (is (core/obstacle? world 3 1))
    (is (not (core/obstacle? world 1 1)))))

(deftest test-world-dimensions
  (let [world [[:w :w :w]
               [:w :w :w]]]
    (is (= 3 (core/world-width world)))
    (is (= 2 (core/world-height world)))))

(deftest world-template
  (is (= (core/->world 4 3)
         [[:w :w :w :w]
          [:w :g :g :w]
          [:w :w :w :w]])))

(deftest in-world
  (is (core/in-world? (core/->world 4 3) 2 2))
  (is (core/in-world? (core/->world 4 3) [2 2])))

(deftest neighbours
  (is (= (set (core/neighbours (core/->world 3 3) [0 0]))
         #{[1 0] [1 1] [0 1]})))

(deftest change-world-value
  (is (= (core/set-world-cell (core/->world 2 2) 1 0 :x)
         [[:w :x]
          [:w :w]])))

(deftest distance
  (is (= 5 (core/distance [2 3] [6 6]))))

(deftest normalize
  (is (= [1 0] (core/normalize [5 0])))
  ; test len more or less 1 (floating dist from js/Math.sqrt)
  (is (> 0.0000000000001 (- 1 (core/distance [0 0] (core/normalize [7 3]))))))

