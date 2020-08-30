(ns hpointu.rts.resources
  (:require [cljs.core.async :as a
             :refer [chan put! <!]
             :refer-macros [go]]))

(defn load-image [id path out]
  (let [img (js/Image.)]
    (.addEventListener img "load" #(put! out [id img]))
    (set! (.-src img) path)))

(defn resource-collection [resource-map]
  (go (let [t (map #(vector (chan) %) resource-map)
            chans (map first t)]
        (doseq [[c [k path]] t]
          (load-image k path c))
        (into {} (<! (a/map vector chans))))))
