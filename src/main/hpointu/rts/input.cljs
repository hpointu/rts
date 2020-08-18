(ns hpointu.rts.input)

(def keymap (atom #{}))
(def mouse (atom {:x 0 :y 0 :clicked? false}))

(defn key-pressed? [code]
  (contains? @keymap code))

(defn mouse-pos [elem]
  (let [rect (.getBoundingClientRect elem)
        {:keys [x y]} @mouse]
    [(- x (.-left rect))
     (- y (.-top rect))]))

(defn init! []
  (js/document.addEventListener "keydown" #(swap! keymap conj (.-code %)))
  (js/document.addEventListener "keyup" #(swap! keymap disj (.-code %)))
  (js/document.addEventListener "mousemove" #(swap! mouse assoc
                                                    :x (.-clientX %)
                                                    :y (.-clientY %))))
