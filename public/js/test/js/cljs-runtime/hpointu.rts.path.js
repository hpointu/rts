goog.provide('hpointu.rts.path');
hpointu.rts.path.get_cost = (function hpointu$rts$path$get_cost(world,p__46072){
var vec__46073 = p__46072;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46073,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46073,(1),null);
if(hpointu.rts.core.obstacle_QMARK_(world,x,y)){
return (999);
} else {
return (0);
}
});
hpointu.rts.path.manhattan_dist = (function hpointu$rts$path$manhattan_dist(p__46079,p__46080){
var vec__46081 = p__46079;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46081,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46081,(1),null);
var vec__46084 = p__46080;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46084,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46084,(1),null);
return (Math.abs((x2 - x1)) + Math.abs((y2 - y1)));
});
hpointu.rts.path.euclidian_distance = (function hpointu$rts$path$euclidian_distance(p__46094,p__46095){
var vec__46096 = p__46094;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46096,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46096,(1),null);
var vec__46099 = p__46095;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46099,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46099,(1),null);
var dx = Math.abs((x2 - x1));
var dy = Math.abs((y2 - y1));
return Math.sqrt((dx * dx),(dy * dy));
});

//# sourceMappingURL=hpointu.rts.path.js.map
