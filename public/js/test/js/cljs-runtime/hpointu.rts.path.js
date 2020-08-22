goog.provide('hpointu.rts.path');
hpointu.rts.path.get_cost = (function hpointu$rts$path$get_cost(world,p__107538){
var vec__107542 = p__107538;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107542,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107542,(1),null);
if(hpointu.rts.core.obstacle_QMARK_(world,x,y)){
return (999);
} else {
return (0);
}
});
hpointu.rts.path.manhattan_dist = (function hpointu$rts$path$manhattan_dist(p__107550,p__107551){
var vec__107552 = p__107550;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107552,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107552,(1),null);
var vec__107555 = p__107551;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107555,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107555,(1),null);
return (Math.abs((x2 - x1)) + Math.abs((y2 - y1)));
});
hpointu.rts.path.path = (function hpointu$rts$path$path(world,begin,end){
hpointu.rts.path.reconstruct = (function hpointu$rts$path$path_$_reconstruct(came_from,current,total){
while(true){
var current__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(came_from,current);
if(cljs.core.truth_(current__$1)){
var G__107613 = came_from;
var G__107614 = current__$1;
var G__107615 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(total,current__$1);
came_from = G__107613;
current = G__107614;
total = G__107615;
continue;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(total));
}
break;
}
});

hpointu.rts.path.score = (function hpointu$rts$path$path_$_score(m,k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,(9999999));
});

hpointu.rts.path.h = (function hpointu$rts$path$path_$_h(n){
return hpointu.rts.core.distance(n,end);
});

hpointu.rts.path.neighbour_reducer = (function hpointu$rts$path$path_$_neighbour_reducer(current){
return (function (p__107568,neighbour){
var map__107569 = p__107568;
var map__107569__$1 = (((((!((map__107569 == null))))?(((((map__107569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__107569):map__107569);
var acc = map__107569__$1;
var came_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107569__$1,new cljs.core.Keyword(null,"came-from","came-from",-714945194));
var g_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107569__$1,new cljs.core.Keyword(null,"g-score","g-score",599301131));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107569__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var tmp_score = (hpointu.rts.path.score(g_score,current) + hpointu.rts.core.cost(world,current,neighbour));
if((tmp_score >= hpointu.rts.path.score(g_score,neighbour))){
return acc;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"came-from","came-from",-714945194),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(came_from,neighbour,current),new cljs.core.Keyword(null,"g-score","g-score",599301131),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(g_score,neighbour,tmp_score),new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(open,neighbour,(tmp_score + hpointu.rts.path.h(neighbour)))], null);
}
});
});

var closed = cljs.core.PersistentHashSet.EMPTY;
var open = tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([begin,hpointu.rts.path.h(begin)], 0));
var came_from = cljs.core.PersistentArrayMap.EMPTY;
var g_score = cljs.core.PersistentArrayMap.createAsIfByAssoc([begin,(0)]);
while(true){
if(cljs.core.empty_QMARK_(open)){
return null;
} else {
var vec__107593 = open;
var seq__107594 = cljs.core.seq(vec__107593);
var first__107595 = cljs.core.first(seq__107594);
var seq__107594__$1 = cljs.core.next(seq__107594);
var vec__107596 = first__107595;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107596,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107596,(1),null);
var ___$1 = seq__107594__$1;
var open__$1 = cljs.core.pop(open);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,end)){
return hpointu.rts.path.reconstruct(came_from,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos], null));
} else {
var closed__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(closed,pos);
var neighbours = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(closed__$1,hpointu.rts.core.neighbours(world,pos));
var map__107600 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hpointu.rts.path.neighbour_reducer(pos),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"came-from","came-from",-714945194),came_from,new cljs.core.Keyword(null,"g-score","g-score",599301131),g_score,new cljs.core.Keyword(null,"open","open",-1763596448),open__$1], null),neighbours);
var map__107600__$1 = (((((!((map__107600 == null))))?(((((map__107600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__107600):map__107600);
var acc = map__107600__$1;
var came_from__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107600__$1,new cljs.core.Keyword(null,"came-from","came-from",-714945194));
var g_score__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107600__$1,new cljs.core.Keyword(null,"g-score","g-score",599301131));
var open__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107600__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var G__107628 = closed__$1;
var G__107629 = open__$2;
var G__107630 = came_from__$1;
var G__107631 = g_score__$1;
closed = G__107628;
open = G__107629;
came_from = G__107630;
g_score = G__107631;
continue;
}
}
break;
}
});

//# sourceMappingURL=hpointu.rts.path.js.map
