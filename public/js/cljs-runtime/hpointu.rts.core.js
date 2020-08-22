goog.provide('hpointu.rts.core');
hpointu.rts.core.distance = (function hpointu$rts$core$distance(p__107388,p__107389){
var vec__107390 = p__107388;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107390,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107390,(1),null);
var vec__107393 = p__107389;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107393,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107393,(1),null);
var dx = Math.abs((x2 - x1));
var dy = Math.abs((y2 - y1));
return Math.sqrt(((dx * dx) + (dy * dy)));
});
hpointu.rts.core.normalize = (function hpointu$rts$core$normalize(v){
var l = hpointu.rts.core.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),v);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,l], null)));
});
hpointu.rts.core.collides_QMARK_ = (function hpointu$rts$core$collides_QMARK_(p__107396,p__107397){
var vec__107398 = p__107396;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107398,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107398,(1),null);
var w1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107398,(2),null);
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107398,(3),null);
var vec__107401 = p__107397;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107401,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107401,(1),null);
var w2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107401,(2),null);
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107401,(3),null);
return (((x1 < (x2 + w2))) && ((x2 < (x1 + w1))) && ((y1 < (y2 + h2))) && ((y2 < (y1 + h1))));
});
hpointu.rts.core.world_width = (function hpointu$rts$core$world_width(world){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(world,(0)));
});
hpointu.rts.core.world_height = (function hpointu$rts$core$world_height(world){
return cljs.core.count(world);
});
hpointu.rts.core.__GT_world = (function hpointu$rts$core$__GT_world(width,height){
var full = cljs.core.vec((function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__107412(s__107413){
return (new cljs.core.LazySeq(null,(function (){
var s__107413__$1 = s__107413;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__107413__$1);
if(temp__5735__auto__){
var s__107413__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__107413__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__107413__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__107415 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__107414 = (0);
while(true){
if((i__107414 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__107414);
cljs.core.chunk_append(b__107415,new cljs.core.Keyword(null,"w","w",354169001));

var G__107491 = (i__107414 + (1));
i__107414 = G__107491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__107415),hpointu$rts$core$__GT_world_$_iter__107412(cljs.core.chunk_rest(s__107413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__107415),null);
}
} else {
var _ = cljs.core.first(s__107413__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"w","w",354169001),hpointu$rts$core$__GT_world_$_iter__107412(cljs.core.rest(s__107413__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(width));
})());
var line = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__107418(s__107419){
return (new cljs.core.LazySeq(null,(function (){
var s__107419__$1 = s__107419;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__107419__$1);
if(temp__5735__auto__){
var s__107419__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__107419__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__107419__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__107421 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__107420 = (0);
while(true){
if((i__107420 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__107420);
cljs.core.chunk_append(b__107421,new cljs.core.Keyword(null,"g","g",1738089905));

var G__107497 = (i__107420 + (1));
i__107420 = G__107497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__107421),hpointu$rts$core$__GT_world_$_iter__107418(cljs.core.chunk_rest(s__107419__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__107421),null);
}
} else {
var _ = cljs.core.first(s__107419__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"g","g",1738089905),hpointu$rts$core$__GT_world_$_iter__107418(cljs.core.rest(s__107419__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((width - (2))));
})()),new cljs.core.Keyword(null,"w","w",354169001));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [full], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__107428(s__107429){
return (new cljs.core.LazySeq(null,(function (){
var s__107429__$1 = s__107429;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__107429__$1);
if(temp__5735__auto__){
var s__107429__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__107429__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__107429__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__107431 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__107430 = (0);
while(true){
if((i__107430 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__107430);
cljs.core.chunk_append(b__107431,line);

var G__107509 = (i__107430 + (1));
i__107430 = G__107509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__107431),hpointu$rts$core$__GT_world_$_iter__107428(cljs.core.chunk_rest(s__107429__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__107431),null);
}
} else {
var _ = cljs.core.first(s__107429__$2);
return cljs.core.cons(line,hpointu$rts$core$__GT_world_$_iter__107428(cljs.core.rest(s__107429__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((height - (2))));
})()),full);
});
hpointu.rts.core.world_cell = (function hpointu$rts$core$world_cell(world,x,y){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
});
hpointu.rts.core.set_world_cell = (function hpointu$rts$core$set_world_cell(world,x,y,v){
return cljs.core.assoc_in(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),v);
});
hpointu.rts.core.obstacle_QMARK_ = (function hpointu$rts$core$obstacle_QMARK_(world,x,y){
var obstacles = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"w","w",354169001),null], null), null);
return (!(((function (){var G__107436 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
return (obstacles.cljs$core$IFn$_invoke$arity$1 ? obstacles.cljs$core$IFn$_invoke$arity$1(G__107436) : obstacles.call(null,G__107436));
})() == null)));
});
hpointu.rts.core.cost = (function hpointu$rts$core$cost(world,from,to){
var vec__107441 = to;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107441,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107441,(1),null);
if(hpointu.rts.core.obstacle_QMARK_(world,x1,y1)){
return (99999);
} else {
return hpointu.rts.core.distance(from,to);
}
});
hpointu.rts.core.in_world_QMARK_ = (function hpointu$rts$core$in_world_QMARK_(var_args){
var G__107445 = arguments.length;
switch (G__107445) {
case 2:
return hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (world,p__107446){
var vec__107447 = p__107446;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107447,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107447,(1),null);
return hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$3(world,x,y);
}));

(hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (world,x,y){
return ((((((-1) < x)) && ((x < hpointu.rts.core.world_width(world))))) && (((((-1) < y)) && ((y < hpointu.rts.core.world_height(world))))));
}));

(hpointu.rts.core.in_world_QMARK_.cljs$lang$maxFixedArity = 3);

hpointu.rts.core.neighbours = (function hpointu$rts$core$neighbours(world,p__107455){
var vec__107456 = p__107455;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107456,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107456,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__107454_SHARP_){
return hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$2(world,p1__107454_SHARP_);
}),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1))], null)], null));
});
hpointu.rts.core.__GT_unit = (function hpointu$rts$core$__GT_unit(x,y){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"waypoints","waypoints",-844253224),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null);
});
hpointu.rts.core.add_waypoint = (function hpointu$rts$core$add_waypoint(unit,x,y){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(unit,new cljs.core.Keyword(null,"waypoints","waypoints",-844253224),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
hpointu.rts.core.walk = (function hpointu$rts$core$walk(p__107460,dt){
var map__107461 = p__107460;
var map__107461__$1 = (((((!((map__107461 == null))))?(((((map__107461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__107461):map__107461);
var unit = map__107461__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107461__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107461__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var waypoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107461__$1,new cljs.core.Keyword(null,"waypoints","waypoints",-844253224));
hpointu.rts.core.arrived_QMARK_ = (function hpointu$rts$core$walk_$_arrived_QMARK_(p__107463,dest){
var map__107465 = p__107463;
var map__107465__$1 = (((((!((map__107465 == null))))?(((((map__107465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__107465):map__107465);
var unit__$1 = map__107465__$1;
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107465__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107465__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (hpointu.rts.core.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),dest) < 0.05);
});

var speed = (3);
var dt__$1 = (dt / (1000));
var wp = cljs.core.first(waypoints);
var vec__107467 = hpointu.rts.core.normalize(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,wp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107467,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107467,(1),null);
var vec__107470 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [speed,speed], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null));
var dx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107470,(0),null);
var dy__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107470,(1),null);
var vec__107473 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt__$1,dt__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx__$1,dy__$1], null));
var dx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107473,(0),null);
var dy__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107473,(1),null);
if(hpointu.rts.core.arrived_QMARK_(unit,wp)){
var vec__107479 = wp;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107479,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107479,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(unit,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y__$1], 0)),new cljs.core.Keyword(null,"waypoints","waypoints",-844253224),(function (p1__107459_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__107459_SHARP_));
}));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(unit,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,dx__$2),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,dy__$2);
}
});

//# sourceMappingURL=hpointu.rts.core.js.map
