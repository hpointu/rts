goog.provide('hpointu.rts.app');
hpointu.rts.app.current_time = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
if((typeof hpointu !== 'undefined') && (typeof hpointu.rts !== 'undefined') && (typeof hpointu.rts.app !== 'undefined') && (typeof hpointu.rts.app.state !== 'undefined')){
} else {
hpointu.rts.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
hpointu.rts.app.SIZE = (35);
hpointu.rts.app.init_state = (function hpointu$rts$app$init_state(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"world","world",-418292623),hpointu.rts.core.__GT_world((15),(10))], null);
});
hpointu.rts.app.to_screen = (function hpointu$rts$app$to_screen(p__33028){
var vec__33029 = p__33028;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33029,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33029,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE * x),(hpointu.rts.app.SIZE * y)], null);
});
hpointu.rts.app.to_world = (function hpointu$rts$app$to_world(p__33032){
var vec__33033 = p__33032;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33033,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33033,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / hpointu.rts.app.SIZE),(y / hpointu.rts.app.SIZE)], null);
});
hpointu.rts.app.get_canvas = (function hpointu$rts$app$get_canvas(){
return document.getElementById("game");
});
hpointu.rts.app.draw_tile_BANG_ = (function hpointu$rts$app$draw_tile_BANG_(ctx,world,x,y,size,hover_QMARK_){
var tile_color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":(cljs.core.truth_(hover_QMARK_)?"green":"#222"));
var vec__33036 = hpointu.rts.app.to_screen(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33036,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33036,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((1) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((1) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (2)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (2)),new cljs.core.Keyword(null,"fill","fill",883462889),tile_color], null));

return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((2) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((2) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (4)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (4)),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
hpointu.rts.app.draw_map_BANG_ = (function hpointu$rts$app$draw_map_BANG_(ctx,p__33039){
var map__33040 = p__33039;
var map__33040__$1 = (((((!((map__33040 == null))))?(((((map__33040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33040):map__33040);
var state = map__33040__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33040__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33040__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var seq__33042 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_width(world)));
var chunk__33047 = null;
var count__33048 = (0);
var i__33049 = (0);
while(true){
if((i__33049 < count__33048)){
var x = chunk__33047.cljs$core$IIndexed$_nth$arity$2(null,i__33049);
var seq__33050_33054 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world)));
var chunk__33051_33055 = null;
var count__33052_33056 = (0);
var i__33053_33057 = (0);
while(true){
if((i__33053_33057 < count__33052_33056)){
var y_33058 = chunk__33051_33055.cljs$core$IIndexed$_nth$arity$2(null,i__33053_33057);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_33058,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_33058], null)));


var G__33059 = seq__33050_33054;
var G__33060 = chunk__33051_33055;
var G__33061 = count__33052_33056;
var G__33062 = (i__33053_33057 + (1));
seq__33050_33054 = G__33059;
chunk__33051_33055 = G__33060;
count__33052_33056 = G__33061;
i__33053_33057 = G__33062;
continue;
} else {
var temp__5735__auto___33063 = cljs.core.seq(seq__33050_33054);
if(temp__5735__auto___33063){
var seq__33050_33064__$1 = temp__5735__auto___33063;
if(cljs.core.chunked_seq_QMARK_(seq__33050_33064__$1)){
var c__4556__auto___33065 = cljs.core.chunk_first(seq__33050_33064__$1);
var G__33066 = cljs.core.chunk_rest(seq__33050_33064__$1);
var G__33067 = c__4556__auto___33065;
var G__33068 = cljs.core.count(c__4556__auto___33065);
var G__33069 = (0);
seq__33050_33054 = G__33066;
chunk__33051_33055 = G__33067;
count__33052_33056 = G__33068;
i__33053_33057 = G__33069;
continue;
} else {
var y_33070 = cljs.core.first(seq__33050_33064__$1);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_33070,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_33070], null)));


var G__33071 = cljs.core.next(seq__33050_33064__$1);
var G__33072 = null;
var G__33073 = (0);
var G__33074 = (0);
seq__33050_33054 = G__33071;
chunk__33051_33055 = G__33072;
count__33052_33056 = G__33073;
i__33053_33057 = G__33074;
continue;
}
} else {
}
}
break;
}

var G__33075 = seq__33042;
var G__33076 = chunk__33047;
var G__33077 = count__33048;
var G__33078 = (i__33049 + (1));
seq__33042 = G__33075;
chunk__33047 = G__33076;
count__33048 = G__33077;
i__33049 = G__33078;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33042);
if(temp__5735__auto__){
var seq__33042__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33042__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33042__$1);
var G__33079 = cljs.core.chunk_rest(seq__33042__$1);
var G__33080 = c__4556__auto__;
var G__33081 = cljs.core.count(c__4556__auto__);
var G__33082 = (0);
seq__33042 = G__33079;
chunk__33047 = G__33080;
count__33048 = G__33081;
i__33049 = G__33082;
continue;
} else {
var x = cljs.core.first(seq__33042__$1);
var seq__33043_33083 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world)));
var chunk__33044_33084 = null;
var count__33045_33085 = (0);
var i__33046_33086 = (0);
while(true){
if((i__33046_33086 < count__33045_33085)){
var y_33087 = chunk__33044_33084.cljs$core$IIndexed$_nth$arity$2(null,i__33046_33086);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_33087,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_33087], null)));


var G__33088 = seq__33043_33083;
var G__33089 = chunk__33044_33084;
var G__33090 = count__33045_33085;
var G__33091 = (i__33046_33086 + (1));
seq__33043_33083 = G__33088;
chunk__33044_33084 = G__33089;
count__33045_33085 = G__33090;
i__33046_33086 = G__33091;
continue;
} else {
var temp__5735__auto___33092__$1 = cljs.core.seq(seq__33043_33083);
if(temp__5735__auto___33092__$1){
var seq__33043_33093__$1 = temp__5735__auto___33092__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33043_33093__$1)){
var c__4556__auto___33094 = cljs.core.chunk_first(seq__33043_33093__$1);
var G__33095 = cljs.core.chunk_rest(seq__33043_33093__$1);
var G__33096 = c__4556__auto___33094;
var G__33097 = cljs.core.count(c__4556__auto___33094);
var G__33098 = (0);
seq__33043_33083 = G__33095;
chunk__33044_33084 = G__33096;
count__33045_33085 = G__33097;
i__33046_33086 = G__33098;
continue;
} else {
var y_33099 = cljs.core.first(seq__33043_33093__$1);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_33099,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_33099], null)));


var G__33100 = cljs.core.next(seq__33043_33093__$1);
var G__33101 = null;
var G__33102 = (0);
var G__33103 = (0);
seq__33043_33083 = G__33100;
chunk__33044_33084 = G__33101;
count__33045_33085 = G__33102;
i__33046_33086 = G__33103;
continue;
}
} else {
}
}
break;
}

var G__33104 = cljs.core.next(seq__33042__$1);
var G__33105 = null;
var G__33106 = (0);
var G__33107 = (0);
seq__33042 = G__33104;
chunk__33047 = G__33105;
count__33048 = G__33106;
i__33049 = G__33107;
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
