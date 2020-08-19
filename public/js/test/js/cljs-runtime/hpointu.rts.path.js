goog.provide('hpointu.rts.path');
hpointu.rts.path.get_cost = (function hpointu$rts$path$get_cost(world,p__35830){
var vec__35832 = p__35830;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35832,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35832,(1),null);
if(hpointu.rts.core.obstacle_QMARK_(world,x,y)){
return (999);
} else {
return (0);
}
});
hpointu.rts.path.manhattan_dist = (function hpointu$rts$path$manhattan_dist(p__35840,p__35841){
var vec__35842 = p__35840;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35842,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35842,(1),null);
var vec__35845 = p__35841;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35845,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35845,(1),null);
return (Math.abs((x2 - x1)) + Math.abs((y2 - y1)));
});
hpointu.rts.path.euclidian_distance = (function hpointu$rts$path$euclidian_distance(p__35852,p__35853){
var vec__35854 = p__35852;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35854,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35854,(1),null);
var vec__35857 = p__35853;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35857,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35857,(1),null);
var dx = Math.abs((x2 - x1));
var dy = Math.abs((y2 - y1));
return Math.sqrt((dx * dx),(dy * dy));
});

//# sourceMappingURL=hpointu.rts.path.js.map
