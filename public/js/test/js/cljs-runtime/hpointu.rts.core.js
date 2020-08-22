goog.provide('hpointu.rts.core');
hpointu.rts.core.distance = (function hpointu$rts$core$distance(p__47199,p__47200){
var vec__47201 = p__47199;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47201,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47201,(1),null);
var vec__47204 = p__47200;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47204,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47204,(1),null);
var dx = Math.abs((x2 - x1));
var dy = Math.abs((y2 - y1));
return Math.sqrt(((dx * dx) + (dy * dy)));
});
hpointu.rts.core.normalize = (function hpointu$rts$core$normalize(v){
var l = hpointu.rts.core.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),v);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,l], null)));
});
hpointu.rts.core.world_width = (function hpointu$rts$core$world_width(world){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(world,(0)));
});
hpointu.rts.core.world_height = (function hpointu$rts$core$world_height(world){
return cljs.core.count(world);
});
hpointu.rts.core.__GT_world = (function hpointu$rts$core$__GT_world(width,height){
var full = cljs.core.vec((function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__47219(s__47220){
return (new cljs.core.LazySeq(null,(function (){
var s__47220__$1 = s__47220;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47220__$1);
if(temp__5735__auto__){
var s__47220__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47220__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47220__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47222 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47221 = (0);
while(true){
if((i__47221 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__47221);
cljs.core.chunk_append(b__47222,new cljs.core.Keyword(null,"w","w",354169001));

var G__47319 = (i__47221 + (1));
i__47221 = G__47319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47222),hpointu$rts$core$__GT_world_$_iter__47219(cljs.core.chunk_rest(s__47220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47222),null);
}
} else {
var _ = cljs.core.first(s__47220__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"w","w",354169001),hpointu$rts$core$__GT_world_$_iter__47219(cljs.core.rest(s__47220__$2)));
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
var line = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__47223(s__47224){
return (new cljs.core.LazySeq(null,(function (){
var s__47224__$1 = s__47224;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47224__$1);
if(temp__5735__auto__){
var s__47224__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47224__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47224__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47226 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47225 = (0);
while(true){
if((i__47225 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__47225);
cljs.core.chunk_append(b__47226,new cljs.core.Keyword(null,"g","g",1738089905));

var G__47325 = (i__47225 + (1));
i__47225 = G__47325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47226),hpointu$rts$core$__GT_world_$_iter__47223(cljs.core.chunk_rest(s__47224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47226),null);
}
} else {
var _ = cljs.core.first(s__47224__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"g","g",1738089905),hpointu$rts$core$__GT_world_$_iter__47223(cljs.core.rest(s__47224__$2)));
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [full], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__47233(s__47234){
return (new cljs.core.LazySeq(null,(function (){
var s__47234__$1 = s__47234;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47234__$1);
if(temp__5735__auto__){
var s__47234__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47234__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47234__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47236 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47235 = (0);
while(true){
if((i__47235 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__47235);
cljs.core.chunk_append(b__47236,line);

var G__47335 = (i__47235 + (1));
i__47235 = G__47335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47236),hpointu$rts$core$__GT_world_$_iter__47233(cljs.core.chunk_rest(s__47234__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47236),null);
}
} else {
var _ = cljs.core.first(s__47234__$2);
return cljs.core.cons(line,hpointu$rts$core$__GT_world_$_iter__47233(cljs.core.rest(s__47234__$2)));
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
return (!(((function (){var G__47246 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
return (obstacles.cljs$core$IFn$_invoke$arity$1 ? obstacles.cljs$core$IFn$_invoke$arity$1(G__47246) : obstacles.call(null,G__47246));
})() == null)));
});
hpointu.rts.core.cost = (function hpointu$rts$core$cost(world,from,to){
var vec__47247 = to;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47247,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47247,(1),null);
if(hpointu.rts.core.obstacle_QMARK_(world,x1,y1)){
return (99999);
} else {
return hpointu.rts.core.distance(from,to);
}
});
hpointu.rts.core.in_world_QMARK_ = (function hpointu$rts$core$in_world_QMARK_(var_args){
var G__47252 = arguments.length;
switch (G__47252) {
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

(hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (world,p__47258){
var vec__47260 = p__47258;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47260,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47260,(1),null);
return hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$3(world,x,y);
}));

(hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (world,x,y){
return ((((((-1) < x)) && ((x < hpointu.rts.core.world_width(world))))) && (((((-1) < y)) && ((y < hpointu.rts.core.world_height(world))))));
}));

(hpointu.rts.core.in_world_QMARK_.cljs$lang$maxFixedArity = 3);

hpointu.rts.core.neighbours = (function hpointu$rts$core$neighbours(world,p__47276){
var vec__47277 = p__47276;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47277,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47277,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47272_SHARP_){
return hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$2(world,p1__47272_SHARP_);
}),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1))], null)], null));
});
hpointu.rts.core.__GT_unit = (function hpointu$rts$core$__GT_unit(x,y){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"waypoints","waypoints",-844253224),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null);
});
hpointu.rts.core.add_waypoint = (function hpointu$rts$core$add_waypoint(unit,x,y){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(unit,new cljs.core.Keyword(null,"waypoints","waypoints",-844253224),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
hpointu.rts.core.walk = (function hpointu$rts$core$walk(p__47282,dt){
var map__47283 = p__47282;
var map__47283__$1 = (((((!((map__47283 == null))))?(((((map__47283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47283):map__47283);
var unit = map__47283__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47283__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47283__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var waypoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47283__$1,new cljs.core.Keyword(null,"waypoints","waypoints",-844253224));
hpointu.rts.core.arrived_QMARK_ = (function hpointu$rts$core$walk_$_arrived_QMARK_(p__47286,dest){
var map__47287 = p__47286;
var map__47287__$1 = (((((!((map__47287 == null))))?(((((map__47287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47287):map__47287);
var unit__$1 = map__47287__$1;
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47287__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47287__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (hpointu.rts.core.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),dest) < 0.05);
});

var speed = (3);
var dt__$1 = (dt / (1000));
var wp = cljs.core.first(waypoints);
var vec__47290 = hpointu.rts.core.normalize(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,wp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47290,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47290,(1),null);
var vec__47293 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [speed,speed], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null));
var dx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47293,(0),null);
var dy__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47293,(1),null);
var vec__47296 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt__$1,dt__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx__$1,dy__$1], null));
var dx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47296,(0),null);
var dy__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47296,(1),null);
if(hpointu.rts.core.arrived_QMARK_(unit,wp)){
var vec__47299 = wp;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47299,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47299,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(unit,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y__$1], 0)),new cljs.core.Keyword(null,"waypoints","waypoints",-844253224),(function (p1__47280_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__47280_SHARP_));
}));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(unit,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,dx__$2),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,dy__$2);
}
});

//# sourceMappingURL=hpointu.rts.core.js.map
