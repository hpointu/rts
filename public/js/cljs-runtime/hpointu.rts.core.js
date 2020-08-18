goog.provide('hpointu.rts.core');
hpointu.rts.core.world_width = (function hpointu$rts$core$world_width(world){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(world,(0)));
});
hpointu.rts.core.world_height = (function hpointu$rts$core$world_height(world){
return cljs.core.count(world);
});
hpointu.rts.core.__GT_world = (function hpointu$rts$core$__GT_world(width,height){
var full = cljs.core.vec((function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__33312(s__33313){
return (new cljs.core.LazySeq(null,(function (){
var s__33313__$1 = s__33313;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33313__$1);
if(temp__5735__auto__){
var s__33313__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33313__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33313__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33315 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33314 = (0);
while(true){
if((i__33314 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__33314);
cljs.core.chunk_append(b__33315,new cljs.core.Keyword(null,"w","w",354169001));

var G__33335 = (i__33314 + (1));
i__33314 = G__33335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33315),hpointu$rts$core$__GT_world_$_iter__33312(cljs.core.chunk_rest(s__33313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33315),null);
}
} else {
var _ = cljs.core.first(s__33313__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"w","w",354169001),hpointu$rts$core$__GT_world_$_iter__33312(cljs.core.rest(s__33313__$2)));
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
var line = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__33320(s__33321){
return (new cljs.core.LazySeq(null,(function (){
var s__33321__$1 = s__33321;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33321__$1);
if(temp__5735__auto__){
var s__33321__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33321__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33321__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33323 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33322 = (0);
while(true){
if((i__33322 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__33322);
cljs.core.chunk_append(b__33323,new cljs.core.Keyword(null,"g","g",1738089905));

var G__33353 = (i__33322 + (1));
i__33322 = G__33353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33323),hpointu$rts$core$__GT_world_$_iter__33320(cljs.core.chunk_rest(s__33321__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33323),null);
}
} else {
var _ = cljs.core.first(s__33321__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"g","g",1738089905),hpointu$rts$core$__GT_world_$_iter__33320(cljs.core.rest(s__33321__$2)));
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [full], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__33328(s__33329){
return (new cljs.core.LazySeq(null,(function (){
var s__33329__$1 = s__33329;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33329__$1);
if(temp__5735__auto__){
var s__33329__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33329__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33329__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33331 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33330 = (0);
while(true){
if((i__33330 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__33330);
cljs.core.chunk_append(b__33331,line);

var G__33357 = (i__33330 + (1));
i__33330 = G__33357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33331),hpointu$rts$core$__GT_world_$_iter__33328(cljs.core.chunk_rest(s__33329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33331),null);
}
} else {
var _ = cljs.core.first(s__33329__$2);
return cljs.core.cons(line,hpointu$rts$core$__GT_world_$_iter__33328(cljs.core.rest(s__33329__$2)));
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
return (!(((function (){var G__33333 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
return (obstacles.cljs$core$IFn$_invoke$arity$1 ? obstacles.cljs$core$IFn$_invoke$arity$1(G__33333) : obstacles.call(null,G__33333));
})() == null)));
});

//# sourceMappingURL=hpointu.rts.core.js.map
