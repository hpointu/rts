goog.provide('hpointu.rts.app');
hpointu.rts.app.current_time = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
if((typeof hpointu !== 'undefined') && (typeof hpointu.rts !== 'undefined') && (typeof hpointu.rts.app !== 'undefined') && (typeof hpointu.rts.app.state !== 'undefined')){
} else {
hpointu.rts.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
hpointu.rts.app.SIZE = (35);
hpointu.rts.app.__GT_world = (function hpointu$rts$app$__GT_world(width,height){
var full = cljs.core.vec((function (){var iter__4529__auto__ = (function hpointu$rts$app$__GT_world_$_iter__50828(s__50829){
return (new cljs.core.LazySeq(null,(function (){
var s__50829__$1 = s__50829;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50829__$1);
if(temp__5735__auto__){
var s__50829__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50829__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50829__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50831 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50830 = (0);
while(true){
if((i__50830 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__50830);
cljs.core.chunk_append(b__50831,new cljs.core.Keyword(null,"w","w",354169001));

var G__50906 = (i__50830 + (1));
i__50830 = G__50906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50831),hpointu$rts$app$__GT_world_$_iter__50828(cljs.core.chunk_rest(s__50829__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50831),null);
}
} else {
var _ = cljs.core.first(s__50829__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"w","w",354169001),hpointu$rts$app$__GT_world_$_iter__50828(cljs.core.rest(s__50829__$2)));
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
var line = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),(function (){var iter__4529__auto__ = (function hpointu$rts$app$__GT_world_$_iter__50832(s__50833){
return (new cljs.core.LazySeq(null,(function (){
var s__50833__$1 = s__50833;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50833__$1);
if(temp__5735__auto__){
var s__50833__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50833__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50833__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50835 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50834 = (0);
while(true){
if((i__50834 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__50834);
cljs.core.chunk_append(b__50835,new cljs.core.Keyword(null,"g","g",1738089905));

var G__50907 = (i__50834 + (1));
i__50834 = G__50907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50835),hpointu$rts$app$__GT_world_$_iter__50832(cljs.core.chunk_rest(s__50833__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50835),null);
}
} else {
var _ = cljs.core.first(s__50833__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"g","g",1738089905),hpointu$rts$app$__GT_world_$_iter__50832(cljs.core.rest(s__50833__$2)));
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [full], null),(function (){var iter__4529__auto__ = (function hpointu$rts$app$__GT_world_$_iter__50840(s__50841){
return (new cljs.core.LazySeq(null,(function (){
var s__50841__$1 = s__50841;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50841__$1);
if(temp__5735__auto__){
var s__50841__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50841__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50841__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50843 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50842 = (0);
while(true){
if((i__50842 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__50842);
cljs.core.chunk_append(b__50843,line);

var G__50908 = (i__50842 + (1));
i__50842 = G__50908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50843),hpointu$rts$app$__GT_world_$_iter__50840(cljs.core.chunk_rest(s__50841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50843),null);
}
} else {
var _ = cljs.core.first(s__50841__$2);
return cljs.core.cons(line,hpointu$rts$app$__GT_world_$_iter__50840(cljs.core.rest(s__50841__$2)));
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
hpointu.rts.app.init_state = (function hpointu$rts$app$init_state(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"world","world",-418292623),hpointu.rts.app.__GT_world((15),(10))], null);
});
hpointu.rts.app.world_width = (function hpointu$rts$app$world_width(world){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(world,(0)));
});
hpointu.rts.app.world_height = (function hpointu$rts$app$world_height(world){
return cljs.core.count(world);
});
hpointu.rts.app.to_screen = (function hpointu$rts$app$to_screen(p__50852){
var vec__50853 = p__50852;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50853,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50853,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE * x),(hpointu.rts.app.SIZE * y)], null);
});
hpointu.rts.app.to_world = (function hpointu$rts$app$to_world(p__50856){
var vec__50857 = p__50856;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50857,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50857,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / hpointu.rts.app.SIZE),(y / hpointu.rts.app.SIZE)], null);
});
hpointu.rts.app.get_canvas = (function hpointu$rts$app$get_canvas(){
return document.getElementById("game");
});
hpointu.rts.app.obstacle_QMARK_ = (function hpointu$rts$app$obstacle_QMARK_(world,x,y){
var obstacles = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"w","w",354169001),null], null), null);
return (!(((function (){var G__50860 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
return (obstacles.cljs$core$IFn$_invoke$arity$1 ? obstacles.cljs$core$IFn$_invoke$arity$1(G__50860) : obstacles.call(null,G__50860));
})() == null)));
});
hpointu.rts.app.draw_tile_BANG_ = (function hpointu$rts$app$draw_tile_BANG_(ctx,world,x,y,size,hover_QMARK_){
var tile_color = ((hpointu.rts.app.obstacle_QMARK_(world,x,y))?"gray":(cljs.core.truth_(hover_QMARK_)?"green":"#222"));
var vec__50861 = hpointu.rts.app.to_screen(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50861,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50861,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((1) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((1) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (2)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (2)),new cljs.core.Keyword(null,"fill","fill",883462889),tile_color], null));

return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((2) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((2) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (4)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (4)),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
hpointu.rts.app.draw_map_BANG_ = (function hpointu$rts$app$draw_map_BANG_(ctx,p__50868){
var map__50869 = p__50868;
var map__50869__$1 = (((((!((map__50869 == null))))?(((((map__50869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50869):map__50869);
var state = map__50869__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50869__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50869__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var seq__50875 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.app.world_width(world)));
var chunk__50880 = null;
var count__50881 = (0);
var i__50882 = (0);
while(true){
if((i__50882 < count__50881)){
var x = chunk__50880.cljs$core$IIndexed$_nth$arity$2(null,i__50882);
var seq__50883_50911 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.app.world_height(world)));
var chunk__50884_50912 = null;
var count__50885_50913 = (0);
var i__50886_50914 = (0);
while(true){
if((i__50886_50914 < count__50885_50913)){
var y_50916 = chunk__50884_50912.cljs$core$IIndexed$_nth$arity$2(null,i__50886_50914);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_50916,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_50916], null)));


var G__50917 = seq__50883_50911;
var G__50918 = chunk__50884_50912;
var G__50919 = count__50885_50913;
var G__50920 = (i__50886_50914 + (1));
seq__50883_50911 = G__50917;
chunk__50884_50912 = G__50918;
count__50885_50913 = G__50919;
i__50886_50914 = G__50920;
continue;
} else {
var temp__5735__auto___50921 = cljs.core.seq(seq__50883_50911);
if(temp__5735__auto___50921){
var seq__50883_50922__$1 = temp__5735__auto___50921;
if(cljs.core.chunked_seq_QMARK_(seq__50883_50922__$1)){
var c__4556__auto___50923 = cljs.core.chunk_first(seq__50883_50922__$1);
var G__50924 = cljs.core.chunk_rest(seq__50883_50922__$1);
var G__50925 = c__4556__auto___50923;
var G__50926 = cljs.core.count(c__4556__auto___50923);
var G__50927 = (0);
seq__50883_50911 = G__50924;
chunk__50884_50912 = G__50925;
count__50885_50913 = G__50926;
i__50886_50914 = G__50927;
continue;
} else {
var y_50928 = cljs.core.first(seq__50883_50922__$1);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_50928,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_50928], null)));


var G__50929 = cljs.core.next(seq__50883_50922__$1);
var G__50930 = null;
var G__50931 = (0);
var G__50932 = (0);
seq__50883_50911 = G__50929;
chunk__50884_50912 = G__50930;
count__50885_50913 = G__50931;
i__50886_50914 = G__50932;
continue;
}
} else {
}
}
break;
}

var G__50933 = seq__50875;
var G__50934 = chunk__50880;
var G__50935 = count__50881;
var G__50936 = (i__50882 + (1));
seq__50875 = G__50933;
chunk__50880 = G__50934;
count__50881 = G__50935;
i__50882 = G__50936;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50875);
if(temp__5735__auto__){
var seq__50875__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50875__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50875__$1);
var G__50937 = cljs.core.chunk_rest(seq__50875__$1);
var G__50938 = c__4556__auto__;
var G__50939 = cljs.core.count(c__4556__auto__);
var G__50940 = (0);
seq__50875 = G__50937;
chunk__50880 = G__50938;
count__50881 = G__50939;
i__50882 = G__50940;
continue;
} else {
var x = cljs.core.first(seq__50875__$1);
var seq__50876_50941 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.app.world_height(world)));
var chunk__50877_50942 = null;
var count__50878_50943 = (0);
var i__50879_50944 = (0);
while(true){
if((i__50879_50944 < count__50878_50943)){
var y_50945 = chunk__50877_50942.cljs$core$IIndexed$_nth$arity$2(null,i__50879_50944);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_50945,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_50945], null)));


var G__50946 = seq__50876_50941;
var G__50947 = chunk__50877_50942;
var G__50948 = count__50878_50943;
var G__50949 = (i__50879_50944 + (1));
seq__50876_50941 = G__50946;
chunk__50877_50942 = G__50947;
count__50878_50943 = G__50948;
i__50879_50944 = G__50949;
continue;
} else {
var temp__5735__auto___50950__$1 = cljs.core.seq(seq__50876_50941);
if(temp__5735__auto___50950__$1){
var seq__50876_50951__$1 = temp__5735__auto___50950__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50876_50951__$1)){
var c__4556__auto___50952 = cljs.core.chunk_first(seq__50876_50951__$1);
var G__50953 = cljs.core.chunk_rest(seq__50876_50951__$1);
var G__50954 = c__4556__auto___50952;
var G__50955 = cljs.core.count(c__4556__auto___50952);
var G__50956 = (0);
seq__50876_50941 = G__50953;
chunk__50877_50942 = G__50954;
count__50878_50943 = G__50955;
i__50879_50944 = G__50956;
continue;
} else {
var y_50957 = cljs.core.first(seq__50876_50951__$1);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_50957,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_50957], null)));


var G__50962 = cljs.core.next(seq__50876_50951__$1);
var G__50963 = null;
var G__50964 = (0);
var G__50965 = (0);
seq__50876_50941 = G__50962;
chunk__50877_50942 = G__50963;
count__50878_50943 = G__50964;
i__50879_50944 = G__50965;
continue;
}
} else {
}
}
break;
}

var G__50967 = cljs.core.next(seq__50875__$1);
var G__50968 = null;
var G__50969 = (0);
var G__50970 = (0);
seq__50875 = G__50967;
chunk__50880 = G__50968;
count__50881 = G__50969;
i__50882 = G__50970;
continue;
}
} else {
return null;
}
}
break;
}
});
hpointu.rts.app.update_state = (function hpointu$rts$app$update_state(state,dt){

var canvas = hpointu.rts.app.get_canvas();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,hpointu.rts.app.to_world(hpointu.rts.input.mouse_pos(canvas)))));
});
hpointu.rts.app.draw_BANG_ = (function hpointu$rts$app$draw_BANG_(state){
var canvas = hpointu.rts.app.get_canvas();
var ctx = canvas.getContext("2d");
ctx.clearRect((0),(0),canvas.width,canvas.height);

return hpointu.rts.app.draw_map_BANG_(ctx,state);
});
hpointu.rts.app.tick_BANG_ = (function hpointu$rts$app$tick_BANG_(){
var t = Date.now();
var dt = (t - cljs.core.deref(hpointu.rts.app.current_time));
var new_state = hpointu.rts.app.update_state(cljs.core.deref(hpointu.rts.app.state),dt);
cljs.core.reset_BANG_(hpointu.rts.app.current_time,t);

hpointu.rts.app.draw_BANG_(new_state);

return cljs.core.reset_BANG_(hpointu.rts.app.state,new_state);
});
hpointu.rts.app.stop = (function hpointu$rts$app$stop(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Stopping..."], 0));
});
hpointu.rts.app.start = (function hpointu$rts$app$start(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Starting..."], 0));
});
hpointu.rts.app.init = (function hpointu$rts$app$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing..."], 0));

setInterval(hpointu.rts.app.tick_BANG_,(20));

cljs.core.reset_BANG_(hpointu.rts.app.state,hpointu.rts.app.init_state());

hpointu.rts.input.init_BANG_();

return hpointu.rts.app.start();
});
goog.exportSymbol('hpointu.rts.app.init', hpointu.rts.app.init);

//# sourceMappingURL=hpointu.rts.app.js.map
