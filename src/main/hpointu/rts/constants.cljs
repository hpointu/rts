(ns hpointu.rts.constants
  (:require
    [hpointu.rts.colour :as colour]))

(def CELL_SIZE 35)

(def COLLECTION_TIME 2000)
(def COLLECTION_SIZE 20)

(def VIEW_W 18)
(def VIEW_H 14)

(def TILES
  {colour/BLACK      :floor
   colour/BLUE       :p1
   colour/RED        :p2
   colour/GREEN      :p3
   colour/MAGENTA    :p4
   colour/WHITE      :rock
   colour/YELLOW     :crystal})

(def obstacles #{:w :rock :building :crystal})
