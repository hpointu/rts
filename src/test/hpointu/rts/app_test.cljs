(ns hpointu.rts.app-test
  (:require [cljs.test :refer [deftest testing are is]]
            [hpointu.rts.core :as core]
            [hpointu.rts.game :as game]
            [hpointu.rts.utils :as utils]))

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
  (is (= (core/set-world-cells (core/->world 2 2) [[1 0]] :x)
         [[:w :x]
          [:w :w]])))

(deftest distance
  (is (= 5 (utils/distance [2 3] [6 6]))))

(deftest normalize
  (is (= [1 0] (utils/normalize [5 0])))
  ; test len more or less 1 (floating dist from js/Math.sqrt)
  (is (> 0.0000000000001 (- 1 (utils/distance [0 0] (utils/normalize [7 3]))))))


(deftest free-zone
  (let [world [[:g :w :w :g :g]
               [:g :g :g :g :g]
               [:g :g :w :g :g]
               [:g :w :g :g :g]
               [:w :w :g :w :w]]]
    (is (= [[1 1]] (core/get-free-zone world [1 1] 1)))
    (is (= #{[1 1] [0 0] [0 1] [0 2] [1 2] [2 1] [3 1]}
           (set (core/get-free-zone world [1 1] 7))))))


(deftest actors
  (testing "waiting"
    (let [state {:entities {1 {:goals [[:wait 10]]}}}
          new-state (game/update-actors state 2)]
      (is (= [:wait 8] (get-in new-state [:entities 1 :goals 0])))))

  (testing "walking"
    (let [state {:entities {1 {:pos [1 1] :goals [[:walk [2 2]]]}}
                       :waypoints [[2 2]]
                 :world [[:g :g :g]
                         [:g :g :g]
                         [:g :g :g]]}
          new-state (game/update-actors state 100)]
      (are [k v] (= (get-in new-state [:entities 1 k]) v)
           :pos [1.3 1.3]))))
          

(deftest add-building
  (let [tiles (core/building-tiles {:size 2 :pos [1 1]})
        world  [[:g :g :g :g :g]
                [:g :g :g :g :g]
                [:g :g :g :g :g]
                [:g :g :g :g :g]
                [:g :g :g :g :g]]
        expect [[:g :g :g :g :g]
                [:g :w :w :g :g]
                [:g :w :w :g :g]
                [:g :g :g :g :g]
                [:g :g :g :g :g]]]
    (is (= #{[1 1] [2 1] [1 2] [2 2]} (set tiles)))
    (is (= expect (core/set-world-cells world tiles :w)))))



