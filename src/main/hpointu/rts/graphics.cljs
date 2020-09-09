(ns hpointu.rts.graphics)

(def TWOPI (* 2 (.-PI js/Math)))

(defmulti render-item! (fn [ctx item] (:type item)))

(defmethod render-item! :text render-text
  [ctx {:keys [x y color value size font] :as item
        :or {font "RTSMono"}}]
  (doto ctx
    (aset "fillStyle" color)
    (aset
      "font" (str size "px/1em " font))
    (aset "textBaseline" "middle")
    (aset "textAlign" "center")
    (.fillText value x y)))

(defmethod render-item! :rect render-rect
  [ctx {:keys [x y w h fill] :as item}]
  (doto ctx
    (.beginPath)
    (.rect x y w h)
    (aset "fillStyle" fill)
    (.fill)
    (.closePath)))

(defmethod render-item! :cross render-cross
  [ctx {:keys [x y width color]}]
  (let [hw (/ width 2)]
    (doto ctx
      (.beginPath)
      (.moveTo (- x hw) (- y hw))
      (.lineTo (+ x hw) (+ y hw))
      (.moveTo (+ x hw) (- y hw))
      (.lineTo (- x hw) (+ y hw))
      (aset "strokeStyle" color)
      (.stroke)
      (.closePath))))

(defmethod render-item! :box render-box
  [ctx {:keys [x y w h color line-width]
        :or {line-width 1}
        :as item}]
  (doto ctx
    (.beginPath)
    (.rect x y w h)
    (aset "lineWidth" line-width)
    (aset "strokeStyle" color)
    (.stroke)
    (.closePath)))

(defmethod render-item! :circle render-circle
  [ctx {:keys [x y r fill] :as item}]
  (doto ctx
    (.beginPath)
    (.arc x y r 0 TWOPI)
    (aset "fillStyle" fill)
    (.fill)
    (.closePath)))


(defmethod render-item! :line render-line
  [ctx {:keys [x1 y1 x2 y2 color] :as item}]
  (doto ctx
    (.beginPath)
    (.moveTo x1 y1)
    (.lineTo x2 y2)
    (aset "strokeStyle" color)
    (.stroke)
    (.closePath)))

(defmethod render-item! :hash-square render-hash-rect
  [ctx {:keys [x y size color space border?]
        :or {space 10 border? true}}]
  (.beginPath ctx)
  (when border?
    (.rect ctx (+ 1 x) (+ 1 y) (- size 2) (- size 2)))
  (let [off (if border? 2 0)]
    (doseq [p (range space (* 2 size) space)]
      (doto ctx
        (.moveTo (- (min (+ x p) (+ size x)) off)
                 (+ off (max y (+ y (- p size)))))
        (.lineTo (+ off (max x (+ x (- p size))))
                 (- (min (+ y size) (+ y p)) off)))))
  (aset ctx "strokeStyle" color)
  (.stroke ctx)
  (.closePath ctx))
