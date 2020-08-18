(ns hpointu.rts.app-test
  (:require [cljs.test :refer [deftest is]]
            [hpointu.rts.app :as app]))

(deftest test-obstacles
  (let [world [[:g :g :g :g]
               [:g :g :g :w]]]  ; wall (3, 1)
    (is (app/obstacle? world 3 1))
    (is (not (app/obstacle? world 1 1)))))

(deftest test-world-dimensions
  (let [world [[:w :w :w]
               [:w :w :w]]]
    (is (= 3 (app/world-width world)))
    (is (= 2 (app/world-height world)))))

(deftest world-template
  (is (= (app/->world 4 3)
         [[:w :w :w :w]
          [:w :g :g :w]
          [:w :w :w :w]])))
