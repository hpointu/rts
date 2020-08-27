(ns hpointu.rts.game)

(defmacro update-selected-entities [state func & args]
  `(reduce
     #(hpointu.rts.game/update-entity %1 %2 ~func ~@args)
     ~state
     (map :uid (hpointu.rts.game/get-selected-entities ~state))))

           
