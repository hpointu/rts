goog.provide('hpointu.rts.core');
hpointu.rts.core.world_width = (function hpointu$rts$core$world_width(world){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(world,(0)));
});
hpointu.rts.core.world_height = (function hpointu$rts$core$world_height(world){
return cljs.core.count(world);
});
hpointu.rts.core.__GT_world = (function hpointu$rts$core$__GT_world(width,height){
var full = cljs.core.vec((function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__46044(s__46045){
return (new cljs.core.LazySeq(null,(function (){
var s__46045__$1 = s__46045;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46045__$1);
if(temp__5735__auto__){
var s__46045__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46045__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46045__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46047 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46046 = (0);
while(true){
if((i__46046 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__46046);
cljs.core.chunk_append(b__46047,new cljs.core.Keyword(null,"w","w",354169001));

var G__46071 = (i__46046 + (1));
i__46046 = G__46071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46047),hpointu$rts$core$__GT_world_$_iter__46044(cljs.core.chunk_rest(s__46045__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46047),null);
}
} else {
var _ = cljs.core.first(s__46045__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"w","w",354169001),hpointu$rts$core$__GT_world_$_iter__46044(cljs.core.rest(s__46045__$2)));
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
var line = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__46056(s__46057){
return (new cljs.core.LazySeq(null,(function (){
var s__46057__$1 = s__46057;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46057__$1);
if(temp__5735__auto__){
var s__46057__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46057__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46057__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46059 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46058 = (0);
while(true){
if((i__46058 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__46058);
cljs.core.chunk_append(b__46059,new cljs.core.Keyword(null,"g","g",1738089905));

var G__46078 = (i__46058 + (1));
i__46058 = G__46078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46059),hpointu$rts$core$__GT_world_$_iter__46056(cljs.core.chunk_rest(s__46057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46059),null);
}
} else {
var _ = cljs.core.first(s__46057__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"g","g",1738089905),hpointu$rts$core$__GT_world_$_iter__46056(cljs.core.rest(s__46057__$2)));
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [full], null),(function (){var iter__4529__auto__ = (function hpointu$rts$core$__GT_world_$_iter__46064(s__46065){
return (new cljs.core.LazySeq(null,(function (){
var s__46065__$1 = s__46065;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46065__$1);
if(temp__5735__auto__){
var s__46065__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46065__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46065__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46067 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46066 = (0);
while(true){
if((i__46066 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__46066);
cljs.core.chunk_append(b__46067,line);

var G__46088 = (i__46066 + (1));
i__46066 = G__46088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46067),hpointu$rts$core$__GT_world_$_iter__46064(cljs.core.chunk_rest(s__46065__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46067),null);
}
} else {
var _ = cljs.core.first(s__46065__$2);
return cljs.core.cons(line,hpointu$rts$core$__GT_world_$_iter__46064(cljs.core.rest(s__46065__$2)));
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
return (!(((function (){var G__46069 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
return (obstacles.cljs$core$IFn$_invoke$arity$1 ? obstacles.cljs$core$IFn$_invoke$arity$1(G__46069) : obstacles.call(null,G__46069));
})() == null)));
});
hpointu.rts.core.in_world_QMARK_ = (function hpointu$rts$core$in_world_QMARK_(world,x,y){
return ((((((-1) < x)) && ((x < hpointu.rts.core.world_width(world))))) && (((((-1) < y)) && ((y < hpointu.rts.core.world_height(world))))));
});

//# sourceMappingURL=hpointu.rts.core.js.map
