(ns hpointu.rts.ux
  (:require [hpointu.rts.core :as core]))

(defmulti ui-action-name (fn [action] (first action)))
(defmulti ui-action-select (fn [action state] (first action)))

(defmulti draw-hover! (fn [action ctx state] (first action)))
(defmulti right-click-start (fn [action state pos] (first action)))
(defmulti left-click-start (fn [action state pos] (first action)))
(defmulti right-click-end (fn [action state pos] (first action)))
(defmulti left-click-end (fn [action state pos] (first action)))
(defmulti drag (fn [action state pos] (first action)))

(defn build [building] [::build building])
