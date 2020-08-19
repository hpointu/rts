goog.provide('hpointu.rts.path');
hpointu.rts.path.get_cost = (function hpointu$rts$path$get_cost(world,p__58391){
var vec__58392 = p__58391;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58392,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58392,(1),null);
if(hpointu.rts.core.obstacle_QMARK_(world,x,y)){
return (999);
} else {
return (0);
}
});
hpointu.rts.path.manhattan_dist = (function hpointu$rts$path$manhattan_dist(p__58397,p__58398){
var vec__58399 = p__58397;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58399,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58399,(1),null);
var vec__58402 = p__58398;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58402,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58402,(1),null);
return (Math.abs((x2 - x1)) + Math.abs((y2 - y1)));
});
hpointu.rts.path.euclidian_distance = (function hpointu$rts$path$euclidian_distance(p__58407,p__58408){
var vec__58410 = p__58407;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58410,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58410,(1),null);
var vec__58413 = p__58408;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58413,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58413,(1),null);
var dx = Math.abs((x2 - x1));
var dy = Math.abs((y2 - y1));
return Math.sqrt((dx * dx),(dy * dy));
});

//# sourceMappingURL=hpointu.rts.path.js.map
