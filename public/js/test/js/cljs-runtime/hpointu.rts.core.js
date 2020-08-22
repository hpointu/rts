goog.provide('hpointu.rts.core');
hpointu.rts.core.distance = (function hpointu$rts$core$distance(p__107404,p__107405){
var vec__107406 = p__107404;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107406,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107406,(1),null);
var vec__107409 = p__107405;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107409,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107409,(1),null);
var dx = Math.abs((x2 - x1));
var dy = Math.abs((y2 - y1));
return Math.sqrt(((dx * dx) + (dy * dy)));
});
hpointu.rts.core.normalize = (function hpointu$rts$core$normalize(v){
var l = hpointu.rts.core.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),v);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,l], null)));
});
hpointu.rts.core.collides_QMARK_ = (function hpointu$rts$core$collides_QMARK_(p__107416,p__107417){
var vec__107422 = p__107416;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107422,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107422,(1),null);
var w1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107422,(2),null);
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107422,(3),null);
var vec__107425 = p__107417;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107425,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107425,(1),null);
var w2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107425,(2),null);
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107425,(3),null);
return (((x1 < (x2 + w2))) && ((x2 < (x1 + w1))) && ((y1 < (y2 + h2))) && ((y2 < (y1 + h1))));
});
hpointu.rts.core.world_width = (function hpointu$rts$core$world_width(world){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(world,(0)));
});
hpointu.rts.core.world_height = (function hpointu$rts$core$world_height(world){
return cljs.core.count(world);
});
hpointu.rts.core.__GT_world = (function hpointu$rts$core$__GT_world(width,height){
var full = cljs.core.vec((function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__107432(s__107433){
return (new cljs.core.LazySeq(null,(function (){
var s__107433__$1 = s__107433;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__107433__$1);
if(temp__5735__auto__){
var s__107433__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__107433__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__107433__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__107435 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__107434 = (0);
while(true){
if((i__107434 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__107434);
cljs.core.chunk_append(b__107435,new cljs.core.Keyword(null,"w","w",354169001));

var G__107532 = (i__107434 + (1));
i__107434 = G__107532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__107435),hpointu$rts$core$__GT_world_$_iter__107432(cljs.core.chunk_rest(s__107433__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__107435),null);
}
} else {
var _ = cljs.core.first(s__107433__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"w","w",354169001),hpointu$rts$core$__GT_world_$_iter__107432(cljs.core.rest(s__107433__$2)));
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
var line = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__107437(s__107438){
return (new cljs.core.LazySeq(null,(function (){
var s__107438__$1 = s__107438;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__107438__$1);
if(temp__5735__auto__){
var s__107438__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__107438__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__107438__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__107440 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__107439 = (0);
while(true){
if((i__107439 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__107439);
cljs.core.chunk_append(b__107440,new cljs.core.Keyword(null,"g","g",1738089905));

var G__107536 = (i__107439 + (1));
i__107439 = G__107536;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__107440),hpointu$rts$core$__GT_world_$_iter__107437(cljs.core.chunk_rest(s__107438__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__107440),null);
}
} else {
var _ = cljs.core.first(s__107438__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"g","g",1738089905),hpointu$rts$core$__GT_world_$_iter__107437(cljs.core.rest(s__107438__$2)));
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [full], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__107450(s__107451){
return (new cljs.core.LazySeq(null,(function (){
var s__107451__$1 = s__107451;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__107451__$1);
if(temp__5735__auto__){
var s__107451__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__107451__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__107451__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__107453 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__107452 = (0);
while(true){
if((i__107452 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__107452);
cljs.core.chunk_append(b__107453,line);

var G__107546 = (i__107452 + (1));
i__107452 = G__107546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__107453),hpointu$rts$core$__GT_world_$_iter__107450(cljs.core.chunk_rest(s__107451__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__107453),null);
}
} else {
var _ = cljs.core.first(s__107451__$2);
return cljs.core.cons(line,hpointu$rts$core$__GT_world_$_iter__107450(cljs.core.rest(s__107451__$2)));
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
return (!(((function (){var G__107464 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
return (obstacles.cljs$core$IFn$_invoke$arity$1 ? obstacles.cljs$core$IFn$_invoke$arity$1(G__107464) : obstacles.call(null,G__107464));
})() == null)));
});
hpointu.rts.core.cost = (function hpointu$rts$core$cost(world,from,to){
var vec__107476 = to;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107476,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107476,(1),null);
if(hpointu.rts.core.obstacle_QMARK_(world,x1,y1)){
return (99999);
} else {
return hpointu.rts.core.distance(from,to);
}
});
hpointu.rts.core.in_world_QMARK_ = (function hpointu$rts$core$in_world_QMARK_(var_args){
var G__107483 = arguments.length;
switch (G__107483) {
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

(hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (world,p__107484){
var vec__107485 = p__107484;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107485,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107485,(1),null);
return hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$3(world,x,y);
}));

(hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (world,x,y){
return ((((((-1) < x)) && ((x < hpointu.rts.core.world_width(world))))) && (((((-1) < y)) && ((y < hpointu.rts.core.world_height(world))))));
}));

(hpointu.rts.core.in_world_QMARK_.cljs$lang$maxFixedArity = 3);

hpointu.rts.core.neighbours = (function hpointu$rts$core$neighbours(world,p__107489){
var vec__107490 = p__107489;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107490,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107490,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__107488_SHARP_){
return hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$2(world,p1__107488_SHARP_);
}),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1))], null)], null));
});
hpointu.rts.core.__GT_unit = (function hpointu$rts$core$__GT_unit(x,y){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"waypoints","waypoints",-844253224),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null);
});
hpointu.rts.core.add_waypoint = (function hpointu$rts$core$add_waypoint(unit,x,y){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(unit,new cljs.core.Keyword(null,"waypoints","waypoints",-844253224),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
hpointu.rts.core.walk = (function hpointu$rts$core$walk(p__107502,dt){
var map__107503 = p__107502;
var map__107503__$1 = (((((!((map__107503 == null))))?(((((map__107503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__107503):map__107503);
var unit = map__107503__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107503__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107503__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var waypoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107503__$1,new cljs.core.Keyword(null,"waypoints","waypoints",-844253224));
hpointu.rts.core.arrived_QMARK_ = (function hpointu$rts$core$walk_$_arrived_QMARK_(p__107505,dest){
var map__107506 = p__107505;
var map__107506__$1 = (((((!((map__107506 == null))))?(((((map__107506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__107506):map__107506);
var unit__$1 = map__107506__$1;
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107506__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107506__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (hpointu.rts.core.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),dest) < 0.05);
});

var speed = (3);
var dt__$1 = (dt / (1000));
var wp = cljs.core.first(waypoints);
var vec__107519 = hpointu.rts.core.normalize(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,wp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107519,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107519,(1),null);
var vec__107522 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [speed,speed], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null));
var dx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107522,(0),null);
var dy__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107522,(1),null);
var vec__107525 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt__$1,dt__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx__$1,dy__$1], null));
var dx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107525,(0),null);
var dy__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107525,(1),null);
if(hpointu.rts.core.arrived_QMARK_(unit,wp)){
var vec__107528 = wp;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107528,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107528,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(unit,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y__$1], 0)),new cljs.core.Keyword(null,"waypoints","waypoints",-844253224),(function (p1__107498_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__107498_SHARP_));
}));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(unit,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,dx__$2),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,dy__$2);
}
});

//# sourceMappingURL=hpointu.rts.core.js.map
