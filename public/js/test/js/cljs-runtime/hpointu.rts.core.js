goog.provide('hpointu.rts.core');
hpointu.rts.core.world_width = (function hpointu$rts$core$world_width(world){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(world,(0)));
});
hpointu.rts.core.world_height = (function hpointu$rts$core$world_height(world){
return cljs.core.count(world);
});
hpointu.rts.core.__GT_world = (function hpointu$rts$core$__GT_world(width,height){
var full = cljs.core.vec((function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__35799(s__35800){
return (new cljs.core.LazySeq(null,(function (){
var s__35800__$1 = s__35800;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35800__$1);
if(temp__5735__auto__){
var s__35800__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35800__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35800__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35802 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35801 = (0);
while(true){
if((i__35801 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__35801);
cljs.core.chunk_append(b__35802,new cljs.core.Keyword(null,"w","w",354169001));

var G__35824 = (i__35801 + (1));
i__35801 = G__35824;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35802),hpointu$rts$core$__GT_world_$_iter__35799(cljs.core.chunk_rest(s__35800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35802),null);
}
} else {
var _ = cljs.core.first(s__35800__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"w","w",354169001),hpointu$rts$core$__GT_world_$_iter__35799(cljs.core.rest(s__35800__$2)));
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
var line = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__35807(s__35808){
return (new cljs.core.LazySeq(null,(function (){
var s__35808__$1 = s__35808;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35808__$1);
if(temp__5735__auto__){
var s__35808__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35808__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35808__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35810 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35809 = (0);
while(true){
if((i__35809 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__35809);
cljs.core.chunk_append(b__35810,new cljs.core.Keyword(null,"g","g",1738089905));

var G__35825 = (i__35809 + (1));
i__35809 = G__35825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35810),hpointu$rts$core$__GT_world_$_iter__35807(cljs.core.chunk_rest(s__35808__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35810),null);
}
} else {
var _ = cljs.core.first(s__35808__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"g","g",1738089905),hpointu$rts$core$__GT_world_$_iter__35807(cljs.core.rest(s__35808__$2)));
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [full], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__35812(s__35813){
return (new cljs.core.LazySeq(null,(function (){
var s__35813__$1 = s__35813;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35813__$1);
if(temp__5735__auto__){
var s__35813__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35813__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35813__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35815 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35814 = (0);
while(true){
if((i__35814 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__35814);
cljs.core.chunk_append(b__35815,line);

var G__35831 = (i__35814 + (1));
i__35814 = G__35831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35815),hpointu$rts$core$__GT_world_$_iter__35812(cljs.core.chunk_rest(s__35813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35815),null);
}
} else {
var _ = cljs.core.first(s__35813__$2);
return cljs.core.cons(line,hpointu$rts$core$__GT_world_$_iter__35812(cljs.core.rest(s__35813__$2)));
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
hpointu.rts.core.obstacle_QMARK_ = (function hpointu$rts$core$obstacle_QMARK_(world,x,y){
var obstacles = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"w","w",354169001),null], null), null);
return (!(((function (){var G__35816 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
return (obstacles.cljs$core$IFn$_invoke$arity$1 ? obstacles.cljs$core$IFn$_invoke$arity$1(G__35816) : obstacles.call(null,G__35816));
})() == null)));
});
hpointu.rts.core.in_world_QMARK_ = (function hpointu$rts$core$in_world_QMARK_(world,x,y){
return ((((((-1) < x)) && ((x < hpointu.rts.core.world_width(world))))) && (((((-1) < y)) && ((y < hpointu.rts.core.world_height(world))))));
});

//# sourceMappingURL=hpointu.rts.core.js.map
