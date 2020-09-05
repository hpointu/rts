(ns hpointu.rts.ux
  (:require [hpointu.rts.core :as core]))

(defmulti ui-action-name (fn [action] (first action)))
(defmethod ui-action-name :default [a] (name (second a)))

(defmulti ui-action-select (fn [action state] (first action)))
(defmethod ui-action-select :default [a s] s)

(defmulti draw-hover! (fn [action ctx state] (first action)))
(defmulti right-click-start (fn [action state pos] (first action)))
(defmulti left-click-start (fn [action state pos] (first action)))
(defmulti right-click-end (fn [action state pos] (first action)))
(defmulti left-click-end (fn [action state pos] (first action)))
(defmulti drag (fn [action state pos] (first action)))

(defn build [building] [::build building])
(defn spawn [unit] [::spawn unit])
