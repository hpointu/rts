(ns hpointu.rts.macros)

(defmacro update-selected-units [state func & args]
  `(reduce
     #(hpointu.rts.game/update-unit %1 %2 ~func ~@args)
     ~state
     (map :uid (hpointu.rts.game/get-selected-units ~state))))

           
