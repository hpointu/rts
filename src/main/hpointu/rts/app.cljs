(ns hpointu.rts.app
  (:require [hpointu.rts.input :as io]
            [hpointu.rts.core :as core]
            [hpointu.rts.drawing :as drawing]
            [hpointu.rts.action :as action]
            [hpointu.rts.game :as game]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [hpointu.rts.utils :refer [collides?]]
            [cljs.pprint]))


(defonce debug? (r/atom false))
(def current-time (atom (.now js/Date)))
(defonce state (r/atom {}))

;; hack for FPS counter
(defonce frame-counter (atom 0))
(defonce fps (r/atom 0))

(def SIZE 35)

(defn ->unit [x y]
  {:uid (core/get-uid)
   :x x
   :y y
   :pv 100
   :pv-max 100
   :available-actions [(core/->Build :house)
                       (core/->Build :farm)
                       (core/->Build :hotel)]
   :goals []
   :waypoints []
   :selected? false})

(defn init-state []
  {:world (core/->world 74 74)
   :camera [0 0]
   :buildings []
   :units (into {} (for [unit [
                               (->unit 2 2)
                               (->unit 3 4)
                               (->unit 4 4)
                               (->unit 5 3)
                               (->unit 5 4)
                               (->unit 6 3)
                               (->unit 6 5)
                               (->unit 6 6)
                               (->unit 6 8)
                               (->unit 7 4)
                               (->unit 7 5)
                               (->unit 7 6)
                               (->unit 7 8)
                               (->unit 8 5)
                               (->unit 8 8)
                               (->unit 8 9)
                               (->unit 9 5)
                               (->unit 9 8)]]
                     [(:uid unit) unit]))
   :world-updates []})

(defn to-world
  ([pos]
   (to-world pos SIZE))
  ([[x y] size]
   [(/ x size) (/ y size)]))

(defn to-grid [camera pos]
  (map (comp int +) camera (to-world pos)))

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



(defn handle-mouse-game
  [{:keys [camera selector mouse-mode right-click left-click] :as state}]
  (defn select-unit? [{:keys [x y] :as u}]
    (let [{:keys [x1 y1 x2 y2]} selector
          [x1 x2] [(min x1 x2) (max x1 x2)]
          [y1 y2] [(min y1 y2) (max y1 y2)]
          rect [x1 y1 (- x2 x1) (- y2 y1)]]
      (collides? (drawing/unit-aabb state u) rect)))

  (let [[x y] (io/mouse-pos (get-game-canvas))
        [wx wy] (to-grid camera [x y])]
    (cond
      (and (io/mouse-pressed? :left) (not (io/mouse-pressed? :right)))
      (if selector
        (update state :selector #(assoc % :x2 x :y2 y))
        (let [state (assoc state :left-click [wx wy])]
          (if mouse-mode
            state
            (update state :selector #(assoc % :x1 x :y1 y :x2 x :y2 y)))))
      (and (io/mouse-pressed? :right) (not (io/mouse-pressed? :left)))
      (if (not right-click)
        (assoc state :right-click [wx wy])
        state)
      :default
      (if left-click
        (game/end-game-left-click state select-unit?)
        (if right-click
          (game/end-game-right-click state)
          state)))))
    

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
                                        (dissoc :units)))))

(defn profile-box [[u & more]]
  [:div {:style {:margin-top 5 :background-color "black"
                 :font-family "Mono"
                 :flex-grow 1}}
    (if (and u (not more))
      [:div 
       [:h5 {:style {:padding-left 5 :margin 0 :margin-top 5}} "Unit"]
       [:pre {:style {:padding "0 5px"}}
        (str "PV: " (:pv u) "/" (:pv-max u) "\n"
            "POS: " ((juxt :x :y) u) "\n")]]
      [:div {:style {:padding 5}}
       "Coucou"])])

(defn action-box [selection]
  [:div {:style {:margin-top 5 :background-color "black"
                 :display "flex"
                 :flex-wrap "wrap"
                 :justify-content "stretch"
                 :align-content "stretch"
                 :flex-grow 1}}
   (let [[unit & more] selection
         actions (:available-actions unit)]
     (when (and actions (not more))
       (for [a actions]
         ^{:key (hash a)}
          [:button
           {:onClick #(swap! state (fn [s] (core/select-action a s)))
            :style {:padding 10 :margin 0 :width 111}}
           (core/action-name a)])))])
         
       

(defn rts-app [props]
  [:div {:style {:color "white"}}
   [:h2 {:style {:margin "0 0 5px 0"
                 :padding 10
                 :width 820
                 :background-color "black"}}
    "RTS Demo" [:span {:style {:font-size "0.7em"
                               :font-family "mono"
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
                :style {:background-color "#111" :width 223 :height 223}}]
      [profile-box (game/get-selected-units @state)]
      [action-box (game/get-selected-units @state)]
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

