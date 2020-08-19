goog.provide('hpointu.rts.core');
hpointu.rts.core.world_width = (function hpointu$rts$core$world_width(world){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(world,(0)));
});
hpointu.rts.core.world_height = (function hpointu$rts$core$world_height(world){
return cljs.core.count(world);
});
hpointu.rts.core.__GT_world = (function hpointu$rts$core$__GT_world(width,height){
var full = cljs.core.vec((function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__58368(s__58369){
return (new cljs.core.LazySeq(null,(function (){
var s__58369__$1 = s__58369;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58369__$1);
if(temp__5735__auto__){
var s__58369__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58369__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__58369__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__58371 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__58370 = (0);
while(true){
if((i__58370 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__58370);
cljs.core.chunk_append(b__58371,new cljs.core.Keyword(null,"w","w",354169001));

var G__58409 = (i__58370 + (1));
i__58370 = G__58409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58371),hpointu$rts$core$__GT_world_$_iter__58368(cljs.core.chunk_rest(s__58369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58371),null);
}
} else {
var _ = cljs.core.first(s__58369__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"w","w",354169001),hpointu$rts$core$__GT_world_$_iter__58368(cljs.core.rest(s__58369__$2)));
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
var line = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__58376(s__58377){
return (new cljs.core.LazySeq(null,(function (){
var s__58377__$1 = s__58377;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58377__$1);
if(temp__5735__auto__){
var s__58377__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58377__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__58377__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__58379 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__58378 = (0);
while(true){
if((i__58378 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__58378);
cljs.core.chunk_append(b__58379,new cljs.core.Keyword(null,"g","g",1738089905));

var G__58417 = (i__58378 + (1));
i__58378 = G__58417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58379),hpointu$rts$core$__GT_world_$_iter__58376(cljs.core.chunk_rest(s__58377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58379),null);
}
} else {
var _ = cljs.core.first(s__58377__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"g","g",1738089905),hpointu$rts$core$__GT_world_$_iter__58376(cljs.core.rest(s__58377__$2)));
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [full], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__58384(s__58385){
return (new cljs.core.LazySeq(null,(function (){
var s__58385__$1 = s__58385;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58385__$1);
if(temp__5735__auto__){
var s__58385__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58385__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__58385__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__58387 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__58386 = (0);
while(true){
if((i__58386 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__58386);
cljs.core.chunk_append(b__58387,line);

var G__58423 = (i__58386 + (1));
i__58386 = G__58423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58387),hpointu$rts$core$__GT_world_$_iter__58384(cljs.core.chunk_rest(s__58385__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58387),null);
}
} else {
var _ = cljs.core.first(s__58385__$2);
return cljs.core.cons(line,hpointu$rts$core$__GT_world_$_iter__58384(cljs.core.rest(s__58385__$2)));
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
hpointu.rts.core.obstacle_QMARK_ = (function hpointu$rts$core$obstacle_QMARK_(world,x,y){
var obstacles = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"w","w",354169001),null], null), null);
return (!(((function (){var G__58390 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
return (obstacles.cljs$core$IFn$_invoke$arity$1 ? obstacles.cljs$core$IFn$_invoke$arity$1(G__58390) : obstacles.call(null,G__58390));
})() == null)));
});
hpointu.rts.core.in_world_QMARK_ = (function hpointu$rts$core$in_world_QMARK_(world,x,y){
return ((((((-1) < x)) && ((x < hpointu.rts.core.world_width(world))))) && (((((-1) < y)) && ((y < hpointu.rts.core.world_height(world))))));
});

//# sourceMappingURL=hpointu.rts.core.js.map
