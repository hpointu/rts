(ns hpointu.rts.input)

(defonce keymap (atom #{}))
(defonce mouse (atom {:x 0 :y 0 :left false :right false}))

(defn key-pressed? [code]
  (contains? @keymap code))

(defn mouse-pressed? [code]
  (get @mouse code))

(defn mouse-pos [elem]
  (let [rect (.getBoundingClientRect elem)
        {:keys [x y]} @mouse]
    [(- x (.-left rect))
     (- y (.-top rect))]))

(defn clear! []
  (swap! mouse assoc :double false))

(defn- mouseup [e]
  (when (= 0 e.button)
    (swap! mouse assoc :left false))
  (when (= 2 e.button)
    (swap! mouse assoc :right false)))

(defn- double-click [e]
  (swap! mouse assoc :double true))

(defn- mousedown [e]
  (swap! mouse assoc :double false)
  (when (= 0 e.button)
    (swap! mouse assoc :left true))
  (when (= 2 e.button)
    (swap! mouse assoc :right true)))

(defn init! []
  (js/document.addEventListener "keydown" #(swap! keymap conj (.-code %)))
  (js/document.addEventListener "keyup" #(swap! keymap disj (.-code %)))
  (js/document.addEventListener "dblclick" double-click)
  (js/document.addEventListener "mouseup" mouseup)
  (js/document.addEventListener "mousedown" mousedown)
  (js/document.addEventListener "mousemove" #(swap! mouse assoc
                                                    :x (.-clientX %)
                                                    :y (.-clientY %))))
