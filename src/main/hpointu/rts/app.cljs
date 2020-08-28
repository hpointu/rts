(ns hpointu.rts.app
  (:require [hpointu.rts.core :as core]
            [hpointu.rts.drawing :as drawing]
            [hpointu.rts.input :as io]
            [hpointu.rts.game :as game]
            [hpointu.rts.utils :refer [collides?]]
            [hpointu.rts.ux :as ux]
            [goog.string :as gstring]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.pprint]))

(defonce debug? (r/atom false))
(def current-time (atom (.now js/Date)))
(defonce state (r/atom {}))

;; hack for FPS counter
(defonce frame-counter (atom 0))
(defonce fps (r/atom 0))

(def SIZE 35)

(defn- ->unit
  ([utype x y]
   (into (core/->unit utype)
         {:uid (core/get-uid)
          :pos [x y]}))
  ([utype x y pv]
   (into (core/->unit utype)
         {:uid (core/get-uid)
          :pv pv
          :pos [x y]})))

(defn init-entities []
  [(->unit :peon 2 2)
   (->unit :knight 3 4)
   (->unit :peon 4 4)
   (->unit :peon 5 3)
   (->unit :knight 5 4 45)
   (->unit :peon 6 3)
   (->unit :peon 6 5 14)
   (->unit :knight 6 6)
   (->unit :knight 6 8 120)
   (->unit :knight 7 4)
   (->unit :peon 7 5)
   (->unit :peon 7 6)
   (->unit :peon 7 8 3)
   (->unit :peon 8 5)
   (->unit :knight 8 8 88)
   (->unit :peon 8 9)
   (->unit :knight 9 5)
   (->unit :peon 9 8)])
  

(defn init-state []
  {:world (core/->world 74 74)
   :camera [0 0]
   :buildings []
   :entities (into {} (map (juxt :uid identity) (init-entities)))
   :world-updates []})

(defn to-world
  ([pos]
   (to-world pos SIZE))
  ([[x y] size]
   [(/ x size) (/ y size)]))

(defn to-grid
  ([camera pos]
   (map (comp int +) camera (to-world pos)))
  ([camera pos floating?]
   (map + camera (to-world pos))))

(defn get-game-canvas []
  (js/document.getElementById "game"))

(defn get-minimap-canvas []
  (js/document.getElementById "minimap"))

(defn get-element [id]
  (js/document.getElementById id))

(defn context [canvas-name]
  (.getContext (js/document.getElementById canvas-name) "2d"))

(defn mouse-on-element? [id]
  (let [elem (get-element id)
        [x y] (io/mouse-pos elem)]
    (and (< -1 x elem.width)
         (< -1 y elem.height))))

(defn init-contexts []
  (let [minimap (get-minimap-canvas)
        canvas {:game (get-game-canvas)
                :minimap minimap
                :minimap-off (doto (js/document.createElement "canvas")
                               (aset "width" (.-width minimap))
                               (aset "height" (.-height minimap)))}
        contexts (into {} (for [[k v] canvas] [k (.getContext v "2d")]))]
    (fn [selector]
      {:canvas (selector canvas)
       :context (selector contexts)})))

(defn get-modifiers []
  (cond-> #{}
    (or (io/key-pressed? "ShiftLeft")
        (io/key-pressed? "ShiftRight"))
    (conj :append)
    (or (io/key-pressed? "ControlLeft") 
        (io/key-pressed? "ControlRight"))
    (conj :control)))


(defn handle-mouse-game
  [{:keys [camera selector mouse-mode right-click left-click] :as state}]

  (let [mouse-pos (io/mouse-pos (get-game-canvas))
        [x y] (to-grid camera mouse-pos true)
        state (assoc state :mods (get-modifiers))]
    (cond
      (and (io/mouse-pressed? :left) (not (io/mouse-pressed? :right)))
      (if (not left-click)
        (-> state
          (#(ux/left-click-start mouse-mode % [x y]))
          (assoc :left-click [(int x) (int y)]))
        (ux/drag mouse-mode state [x y]))

      (and (io/mouse-pressed? :right) (not (io/mouse-pressed? :left)))
      (if (not right-click)
        (-> state
          (#(ux/right-click-start mouse-mode % [x y]))
          (assoc :right-click [(int x) (int y)]))
        (ux/drag mouse-mode state [x y]))

      :default
      (if left-click
        (do
          (-> state
              (#(ux/left-click-end mouse-mode % [x y]))
              (dissoc :left-click)
              (dissoc :mods)))
        (if right-click
          (-> state
              (#(ux/right-click-end mouse-mode % [x y]))
              (dissoc :right-click)
              (dissoc :mods))
          (dissoc state :mods))))))
    

(defn handle-mouse-minimap [state]
  (if (io/mouse-pressed? :left)
    (let [[x y] (to-world (io/mouse-pos (get-minimap-canvas)) 3)]
      (-> state
          (assoc-in [:camera 0] (- x 9))
          (assoc-in [:camera 1] (- y 7))
          (game/clamp-camera)))
    state))

(defn handle-mouse [state]
  (cond (mouse-on-element? "minimap")
        (handle-mouse-minimap state)
        (mouse-on-element? "game")
        (handle-mouse-game state)
        :default state))

(defn handle-keys [{:keys [hover] :as state}]
  (let [cam-keys #{"ArrowLeft" "ArrowRight"
                   "ArrowUp" "ArrowDown"}]
    (cond-> state
      ;; Pressing W
      (and hover (io/key-pressed? "KeyW"))
      (game/set-cell :w)
      ;; Pressing G
      (and hover (io/key-pressed? "KeyG"))
      (game/set-cell :g)
      ;; Pressing arrows
      (some io/key-pressed? cam-keys)
      (game/move-camera (cond (io/key-pressed? "ArrowLeft") -1
                              (io/key-pressed? "ArrowRight") 1
                              :else 0)
                        (cond (io/key-pressed? "ArrowUp") -1
                              (io/key-pressed? "ArrowDown") 1
                              :else 0)))))

(defn update-state [{:keys [world camera] :as state} dt]
  (let [canvas (get-game-canvas)
        [x y] (to-grid camera (io/mouse-pos canvas))]
    (-> state
        (game/update-actors dt)
        (game/update-hover x y)
        (handle-keys)
        (handle-mouse)
        (game/redraw-visible))))


; --  UI  -- >8 --

(defn get-debug-content []
  (with-out-str (cljs.pprint/pprint (-> @state (dissoc :world)
                                        (dissoc :world-updates)
                                        (dissoc :entities)))))

(defn click-on-portrait [entity event]
  (let [extend? event.ctrlKey]
    (swap! state game/select-entity-uid (:uid entity) extend?)))

(defn short-name [n s]
  (if (> (count n) s)
    (str (subs n 0 s) ".")
    n))

(defn percent [pv pv-max]
  (* 100 (/ pv pv-max)))

(defn health-color [pv pv-max]
  (let [p (percent pv pv-max)]
    (cond
      (< p 20) "red"
      (< p 50) "orange"
      (< p 80) "#ed0"
      :default "green")))

(defn health-bar [pv pv-max]
  [:div {:style {:background-color "#444"
                 :margin 8
                 :height 18
                 :position "relative"
                 :border "1px solid #fff"}}
   [:div {:style {:background-color (health-color pv pv-max)
                  :height "100%"
                  :width (str (percent pv pv-max) "%")}}
    (gstring/unescapeEntities "&nbsp;")]
   [:span
    {:style {:vertical-align "middle"
             :position "absolute"
             :top 2
             :text-align "center"
             :width "100%"
             :background-color "#2226"
             :margin-bottom 2
             :color "white"
             :font-weight "bold"
             :font-size "11px"}}
    (str "PV: " pv "/" pv-max)]])

(defn health-preview [pv pv-max]
  [:div {:style {:background-color "#444"
                 :font-size 4
                 :min-width 40}}
   [:div {:style {:background-color (health-color pv pv-max)
                  :width (str (percent pv pv-max) "%")}}
    (gstring/unescapeEntities "&nbsp;")]])

(defn profile-box [[u & more :as entities]]
  [:div {:style {:margin-top 5 :background-color "#111"
                 :max-width 222
                 :border "1px solid #888"
                 :font-family "\"Courier New\", Courier, monospace"
                 :flex-grow 1}}
    (if (and u (not more))
      [:div 
       [:h5 {:style {:padding-left 5 :margin 0 :margin-top 5}}
        (str (:name u) " - " (:uid u))]
       [health-bar (:pv u) (:pv-max u)]
       [:pre {:style {:padding "0 5px"}}
        [:span (str "ac:" (:active u) "\n")]
        (for [g (:goals u)] (str g "\n"))]]
      
      [:div {:style {:display "flex"
                     :margin-top 1
                     :margin-left 1
                     :text-align "center"
                     :font-size 9
                     :flex-wrap "wrap"}}
       (for [u entities]
        ^{:key (str "profile-" (:uid u))}
        [:div {:style {:border "1px solid #ee8"
                       :padding-top 2
                       :cursor "pointer"
                       :margin 1
                       :max-width 40}
               :onClick #(click-on-portrait u %)} 
         [:div (short-name (:name u) 6)]
         [health-preview (:pv u) (:pv-max u)]])])])

(defn action-box [selection]
  [:div {:style {:margin-top 5 :background-color "black"
                 :display "flex"
                 :flex-wrap "wrap"
                 :justify-content "stretch"
                 :align-content "stretch"
                 :flex-grow 1}}
   (let [[entity & more] selection
         actions (:available-actions entity)]
     (when (and actions (not more))
       (for [a actions]
         ^{:key (hash a)}
          [:button
           {:onClick #(swap! state (fn [s] (ux/ui-action-select a s)))
            :style {:padding 10 :margin 0 :width 111}}
           (ux/ui-action-name a)])))])

(defn rts-app [props]
  [:div {:style {:color "white"}}
   [:h2 {:style {:margin "0 0 5px 0"
                 :padding 10
                 :width 820
                 :background-color "black"}}
    "RTS Demo" [:span {:style {:font-size "0.7em"
                               :font-family "\"Courier New\", Courier, monospace"
                               :color "red"
                               :margin-left 90}}
                "- Press W on the map to place a wall"]]
   [:div {:style {:display "flex"}}
     [:div {:style {:width 223
                    :margin-right 5
                    :display "flex"
                    :flex-flow "column wrap"}}
      [:canvas {:id "minimap"
                :width 223
                :height 223
                :style {:background-color "#111"
                        :cursor "crosshair"
                        :width 223 :height 223}}]
      [profile-box (game/get-selected-entities @state)]
      [action-box (game/get-selected-entities @state)]
      (when (:mouse-mode @state)
        [:div {:style {:padding 5 :margin 0 :flex-grow 0.1
                       :display "flex"
                       :justify-content "flex-end"
                       :background-color "black"}}
         [:button
          {:onClick #(swap! state dissoc :mouse-mode)}
          "X"]])]
     [:canvas {:id "game" :width 611 :height 480
               :style {:background-color "black"
                       :min-width 611
                       :margin 0}}]]
   [:pre {:style {:background-color "black"
                  :margin-top 5
                  :padding 10
                  :width 820}}
     (str "FPS: " @fps " - " @io/keymap "\n"
          (if @debug?
            (get-debug-content)
            "Press , to debug state"))]])

; -- End UI --- >8 --

(defn tick! [contexts]
  (let [t (.now js/Date)
        dt (- t @current-time)
        new-state (drawing/draw! (update-state @state dt) contexts)]
    (do (reset! current-time t)
        (reset! state new-state)
        (reset! debug? (io/key-pressed? "Comma"))
        (io/clear!)
        (swap! frame-counter inc))))

(def timers (atom []))

;(reset! state (init-state))

(defn ^:dev/before-load stop []
  (doseq [t @timers]
    (js/clearInterval t))
  (println "Stopping..."))

(defn ^:dev/after-load start []
  (println (str "Starting..."))
  (swap! state game/redraw-world)
  (rdom/render [rts-app] (js/document.getElementById "app"))
  (let [contexts (init-contexts)]
    (doto timers
        (swap! conj (js/setInterval #(tick! contexts) 16.66))
        (swap! conj (js/setInterval
                     #(do 
                        (reset! fps @frame-counter)
                        (reset! frame-counter 0))
                     1000)))))

(defn ^:export init []
  (println "Initializing...")
  (reset! state (init-state))
  (start)
  (io/init!))

