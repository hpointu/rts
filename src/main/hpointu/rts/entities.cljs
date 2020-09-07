(ns hpointu.rts.entities
  (:require
    [clojure.string :as string]
    [hpointu.rts.constants :as C]
    [hpointu.rts.core :as core]
    [hpointu.rts.ux :as ux]))

(def components
  {:actors [:goals]
   :select [:aabb :pos]
   :draw [:pos :render-as :aabb]
   :draw-minimap [:pos :preview]
   :move [:pos :walk-speed]
   :stock-update [:stock]})

(defn has-components-pred
  "Return a predicate that returns true if the given entity
  has all components required for `system`."
  [system]
  (fn [entity] ((apply every-pred (components system)) entity)))

;; standard drawing shapes
(defn ->square-shape [color size]
  {:type :rect
   :fill color
   :w size
   :h size
   :x (/ (- C/CELL_SIZE size) 2)
   :y (/ (- C/CELL_SIZE size) 2)})

(defn ->circle-shape [color radius]
  {:type :circle
   :fill color
   :r radius
   :x (/ C/CELL_SIZE 2)
   :y (/ C/CELL_SIZE 2)})

(defn ->text [value color size]
  {:type :text
   :color color
   :size size
   :value value
   :x (/ C/CELL_SIZE 2)
   :y (/ C/CELL_SIZE 2)})

;; Static objects
(defn ->base-object [otype obj]
  (into
    {:type ::object
     :otype otype
     :name (string/capitalize (name otype))
     :aabb [0.1 0.1 0.8 0.8]
     :obstruction :w
     :render-as ::unit}
    obj))

(defmethod core/->object ::crystal [otype]
  (->base-object
    otype
    {:stock 5000
     :render-item (->text "✴" "#00ffc5" 28)
     :rtype :crystal
     :obstruction :crystal}))


;; Units
(defn ->base-unit [utype unit]
  (into
    {:type ::unit
     :utype utype
     :name (string/capitalize (name utype))
     :aabb [0.1 0.1 0.8 0.8]
     :goals []
     :render-as ::unit
     :waypoints []}
    unit))

(defmethod core/->unit ::peon [utype]
  (->base-unit
    utype
    {:walk-speed 3
     :pv 20
     :pv-max 20
     :available-actions [(ux/build ::house)
                         (ux/build ::farm)]
     :render-item (->text "♟" "#0cf" 28)
     :collect #{::crystal}}))

(defmethod core/->unit ::knight [utype]
  (->base-unit
    utype
    {:walk-speed 5
     :pv 200
     :pv-max 200
     :available-actions [(ux/build ::hotel)]
     :render-item (->square-shape "#0cf" 22)}))
  
;; Buildings
(defn ->base-building [btype building]
  (let [size (:size building)]
    (into
      {:type ::building
       :btype btype
       :name (string/capitalize (name btype))
       :build-progress 0
       :aabb [0 0 size size]
       :render-as ::building
       :obstruction :w
       :goals []}

      building)))

(defmethod core/->building ::farm [btype]
  (->base-building
    btype
    {:pv-max 50
     :pv 50
     :build-time 10000
     :label "Farm"
     :label-size 14
     :size 2}))

(defmethod core/->building ::house [btype]
  (->base-building
    btype
    {:pv-max 50
     :pv 50
     :build-time 7500
     :label "House"
     :label-size 10
     :size 1}))

(defmethod core/->building ::hotel [btype]
  (->base-building
    btype
    {:pv-max 80
     :pv 80
     :available-actions [(ux/spawn ::peon)]
     :build-time 15000
     :label "Hotel"
     :label-size 14
     :size 3}))

(def cell-spawn
  {:p1         #(assoc (core/->building ::hotel) :active true)
   :p2         #(assoc (core/->building ::hotel) :active true)
   :p3         #(assoc (core/->building ::hotel) :active true)
   :p4         #(assoc (core/->building ::hotel) :active true)
   :crystal    #(core/->object ::crystal)})
