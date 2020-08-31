(ns hpointu.rts.colour)

(defn ->colour  ; 0-255 per component
  ([r g b]   [r g b 255])
  ([r g b a] [r g b a]))

(def BLACK   (->colour 0 0 0))
(def RED     (->colour 255 0 0))
(def GREEN   (->colour 0 255 0))
(def BLUE    (->colour 0 0 255))
(def CYAN    (->colour 0 255 255))
(def MAGENTA (->colour 255 0 255))
(def YELLOW  (->colour 255 255 0))
(def WHITE   (->colour 255 255 255))

(def DARK_GREEN (->colour 0 128 0))
