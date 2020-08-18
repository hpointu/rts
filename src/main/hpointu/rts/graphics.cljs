(ns hpointu.rts.graphics)

(def TWOPI (* 2 (.-PI js/Math)))

(defmulti render-item! (fn [ctx item] (:type item)))

(defmethod render-item! :rect render-rect
  [ctx {:keys [x y w h fill] :as item}]
  (doto ctx
    (.beginPath)
    (.rect x y w h)
    (aset "fillStyle" fill)
    (.fill)
    (.closePath)))

(defmethod render-item! :circle render-circle
  [ctx {:keys [x y r fill] :as item}]
  (doto ctx
    (.beginPath)
    (.arc x y r 0 TWOPI)
    (aset "fillStyle" fill)
    (.fill)
    (.closePath)))


(defmethod render-item! :line render-circle
  [ctx {:keys [x1 y1 x2 y2 color] :as item}]
  (doto ctx
    (.beginPath)
    (.moveTo x1 y1)
    (.lineTo x2 y2)
    (aset "strokeStyle" color)
    (.stroke)
    (.closePath)))

