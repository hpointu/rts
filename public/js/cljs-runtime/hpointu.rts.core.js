goog.provide('hpointu.rts.core');
hpointu.rts.core.world_width = (function hpointu$rts$core$world_width(world){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(world,(0)));
});
hpointu.rts.core.world_height = (function hpointu$rts$core$world_height(world){
return cljs.core.count(world);
});
hpointu.rts.core.__GT_world = (function hpointu$rts$core$__GT_world(width,height){
var full = cljs.core.vec((function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__46048(s__46049){
return (new cljs.core.LazySeq(null,(function (){
var s__46049__$1 = s__46049;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46049__$1);
if(temp__5735__auto__){
var s__46049__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46049__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46049__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46051 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46050 = (0);
while(true){
if((i__46050 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__46050);
cljs.core.chunk_append(b__46051,new cljs.core.Keyword(null,"w","w",354169001));

var G__46070 = (i__46050 + (1));
i__46050 = G__46070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46051),hpointu$rts$core$__GT_world_$_iter__46048(cljs.core.chunk_rest(s__46049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46051),null);
}
} else {
var _ = cljs.core.first(s__46049__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"w","w",354169001),hpointu$rts$core$__GT_world_$_iter__46048(cljs.core.rest(s__46049__$2)));
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
var line = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__46052(s__46053){
return (new cljs.core.LazySeq(null,(function (){
var s__46053__$1 = s__46053;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46053__$1);
if(temp__5735__auto__){
var s__46053__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46053__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46053__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46055 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46054 = (0);
while(true){
if((i__46054 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__46054);
cljs.core.chunk_append(b__46055,new cljs.core.Keyword(null,"g","g",1738089905));

var G__46076 = (i__46054 + (1));
i__46054 = G__46076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46055),hpointu$rts$core$__GT_world_$_iter__46052(cljs.core.chunk_rest(s__46053__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46055),null);
}
} else {
var _ = cljs.core.first(s__46053__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"g","g",1738089905),hpointu$rts$core$__GT_world_$_iter__46052(cljs.core.rest(s__46053__$2)));
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [full], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__46060(s__46061){
return (new cljs.core.LazySeq(null,(function (){
var s__46061__$1 = s__46061;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46061__$1);
if(temp__5735__auto__){
var s__46061__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46061__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46061__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46063 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46062 = (0);
while(true){
if((i__46062 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__46062);
cljs.core.chunk_append(b__46063,line);

var G__46087 = (i__46062 + (1));
i__46062 = G__46087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46063),hpointu$rts$core$__GT_world_$_iter__46060(cljs.core.chunk_rest(s__46061__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46063),null);
}
} else {
var _ = cljs.core.first(s__46061__$2);
return cljs.core.cons(line,hpointu$rts$core$__GT_world_$_iter__46060(cljs.core.rest(s__46061__$2)));
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
return (!(((function (){var G__46068 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
return (obstacles.cljs$core$IFn$_invoke$arity$1 ? obstacles.cljs$core$IFn$_invoke$arity$1(G__46068) : obstacles.call(null,G__46068));
})() == null)));
});
hpointu.rts.core.in_world_QMARK_ = (function hpointu$rts$core$in_world_QMARK_(world,x,y){
return ((((((-1) < x)) && ((x < hpointu.rts.core.world_width(world))))) && (((((-1) < y)) && ((y < hpointu.rts.core.world_height(world))))));
});

//# sourceMappingURL=hpointu.rts.core.js.map
