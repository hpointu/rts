goog.provide('hpointu.rts.core');
hpointu.rts.core.world_width = (function hpointu$rts$core$world_width(world){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(world,(0)));
});
hpointu.rts.core.world_height = (function hpointu$rts$core$world_height(world){
return cljs.core.count(world);
});
hpointu.rts.core.__GT_world = (function hpointu$rts$core$__GT_world(width,height){
var full = cljs.core.vec((function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__35791(s__35792){
return (new cljs.core.LazySeq(null,(function (){
var s__35792__$1 = s__35792;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35792__$1);
if(temp__5735__auto__){
var s__35792__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35792__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35792__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35794 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35793 = (0);
while(true){
if((i__35793 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__35793);
cljs.core.chunk_append(b__35794,new cljs.core.Keyword(null,"w","w",354169001));

var G__35817 = (i__35793 + (1));
i__35793 = G__35817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35794),hpointu$rts$core$__GT_world_$_iter__35791(cljs.core.chunk_rest(s__35792__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35794),null);
}
} else {
var _ = cljs.core.first(s__35792__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"w","w",354169001),hpointu$rts$core$__GT_world_$_iter__35791(cljs.core.rest(s__35792__$2)));
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
var line = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__35795(s__35796){
return (new cljs.core.LazySeq(null,(function (){
var s__35796__$1 = s__35796;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35796__$1);
if(temp__5735__auto__){
var s__35796__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35796__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35796__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35798 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35797 = (0);
while(true){
if((i__35797 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__35797);
cljs.core.chunk_append(b__35798,new cljs.core.Keyword(null,"g","g",1738089905));

var G__35818 = (i__35797 + (1));
i__35797 = G__35818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35798),hpointu$rts$core$__GT_world_$_iter__35795(cljs.core.chunk_rest(s__35796__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35798),null);
}
} else {
var _ = cljs.core.first(s__35796__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"g","g",1738089905),hpointu$rts$core$__GT_world_$_iter__35795(cljs.core.rest(s__35796__$2)));
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [full], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__35803(s__35804){
return (new cljs.core.LazySeq(null,(function (){
var s__35804__$1 = s__35804;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35804__$1);
if(temp__5735__auto__){
var s__35804__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35804__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35804__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35806 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35805 = (0);
while(true){
if((i__35805 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__35805);
cljs.core.chunk_append(b__35806,line);

var G__35819 = (i__35805 + (1));
i__35805 = G__35819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35806),hpointu$rts$core$__GT_world_$_iter__35803(cljs.core.chunk_rest(s__35804__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35806),null);
}
} else {
var _ = cljs.core.first(s__35804__$2);
return cljs.core.cons(line,hpointu$rts$core$__GT_world_$_iter__35803(cljs.core.rest(s__35804__$2)));
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
return (!(((function (){var G__35811 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
return (obstacles.cljs$core$IFn$_invoke$arity$1 ? obstacles.cljs$core$IFn$_invoke$arity$1(G__35811) : obstacles.call(null,G__35811));
})() == null)));
});
hpointu.rts.core.in_world_QMARK_ = (function hpointu$rts$core$in_world_QMARK_(world,x,y){
return ((((((-1) < x)) && ((x < hpointu.rts.core.world_width(world))))) && (((((-1) < y)) && ((y < hpointu.rts.core.world_height(world))))));
});

//# sourceMappingURL=hpointu.rts.core.js.map
