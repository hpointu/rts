(ns hpointu.rts.utils
  (:require [hpointu.rts.colour :as colour]))

(defn jsimage-data [img]
  (let [w (.-width img)
        h (.-height img)
        offcv (doto (js/document.createElement "canvas")
                (aset "width" w)
                (aset "height" h))
        ctx (doto (.getContext offcv "2d")
              (.drawImage img 0 0))]
    (.getImageData ctx 0 0 w h)))

(defn jsimagedata-read-pixel [imgdata x y]
  (let [data (.-data imgdata)
        i (+ (* 4 (.-width imgdata) y) (* 4 x))]  
    (colour/->colour
      (aget data (+ i 0))    ; R
      (aget data (+ i 1))    ; G
      (aget data (+ i 2))    ; B
      (aget data (+ i 3))))) ; A)))

(defn jsimage->pixels [img]
  (let [w (.-width img)
        h (.-height img)
        img-data (jsimage-data img)
        row (fn [i]
              (mapv
                #(jsimagedata-read-pixel img-data % i)
                (range w)))]
    (mapv row (range h))))

(defn distance [[x1 y1] [x2 y2]]
  (let [dx (js/Math.abs (- x2 x1))
        dy (js/Math.abs (- y2 y1))]
    (js/Math.sqrt (+ (* dx dx) (* dy dy)))))

(defn normalize [v]
  (let [l (distance [0 0] v)]
    (mapv / v [l l])))

(defn in-rect? [[x y w h] [px py]]
  (and (< x px (+ x w))
       (< y py (+ y h))))

(defn collides? [[x1 y1 w1 h1] [x2 y2 w2 h2]]
  (and (< x1 (+ x2 w2))
       (< x2 (+ x1 w1))
       (< y1 (+ y2 h2))
       (< y2 (+ y1 h1))))
