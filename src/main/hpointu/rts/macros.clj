(ns hpointu.rts.macros)

(defmacro update-entities [state filter-fn func & args]
  `(reduce
     #(hpointu.rts.game/update-entity %1 %2 ~func ~@args)
     ~state
     (map :uid (filter ~filter-fn (vals (:entities ~state))))))
