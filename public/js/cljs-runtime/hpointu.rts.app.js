goog.provide('hpointu.rts.app');
hpointu.rts.app.current_time = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
if((typeof hpointu !== 'undefined') && (typeof hpointu.rts !== 'undefined') && (typeof hpointu.rts.app !== 'undefined') && (typeof hpointu.rts.app.state !== 'undefined')){
} else {
hpointu.rts.app.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof hpointu !== 'undefined') && (typeof hpointu.rts !== 'undefined') && (typeof hpointu.rts.app !== 'undefined') && (typeof hpointu.rts.app.frame_counter !== 'undefined')){
} else {
hpointu.rts.app.frame_counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof hpointu !== 'undefined') && (typeof hpointu.rts !== 'undefined') && (typeof hpointu.rts.app !== 'undefined') && (typeof hpointu.rts.app.fps !== 'undefined')){
} else {
hpointu.rts.app.fps = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
hpointu.rts.app.get_debug_content = (function hpointu$rts$app$get_debug_content(){
return ["FPS: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hpointu.rts.app.fps)),"\n",(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44344_44502 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44345_44503 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44346_44504 = true;
var _STAR_print_fn_STAR__temp_val__44347_44505 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44346_44504);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44347_44505);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hpointu.rts.app.state),new cljs.core.Keyword(null,"world","world",-418292623)),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44345_44503);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44344_44502);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()].join('');
});
hpointu.rts.app.SIZE = (35);
hpointu.rts.app.init_state = (function hpointu$rts$app$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"world","world",-418292623),hpointu.rts.core.__GT_world((74),(74)),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.PersistentVector.EMPTY], null);
});
hpointu.rts.app.redraw_world = (function hpointu$rts$app$redraw_world(p__44348){
var map__44349 = p__44348;
var map__44349__$1 = (((((!((map__44349 == null))))?(((((map__44349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44349):map__44349);
var state = map__44349__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44349__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var elems = (function (){var iter__4529__auto__ = (function hpointu$rts$app$redraw_world_$_iter__44351(s__44352){
return (new cljs.core.LazySeq(null,(function (){
var s__44352__$1 = s__44352;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44352__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__44352__$1,x,xs__6292__auto__,temp__5735__auto__,map__44349,map__44349__$1,state,world){
return (function hpointu$rts$app$redraw_world_$_iter__44351_$_iter__44353(s__44354){
return (new cljs.core.LazySeq(null,((function (s__44352__$1,x,xs__6292__auto__,temp__5735__auto__,map__44349,map__44349__$1,state,world){
return (function (){
var s__44354__$1 = s__44354;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__44354__$1);
if(temp__5735__auto____$1){
var s__44354__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44354__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44354__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44356 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44355 = (0);
while(true){
if((i__44355 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__44355);
cljs.core.chunk_append(b__44356,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__44506 = (i__44355 + (1));
i__44355 = G__44506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44356),hpointu$rts$app$redraw_world_$_iter__44351_$_iter__44353(cljs.core.chunk_rest(s__44354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44356),null);
}
} else {
var y = cljs.core.first(s__44354__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),hpointu$rts$app$redraw_world_$_iter__44351_$_iter__44353(cljs.core.rest(s__44354__$2)));
}
} else {
return null;
}
break;
}
});})(s__44352__$1,x,xs__6292__auto__,temp__5735__auto__,map__44349,map__44349__$1,state,world))
,null,null));
});})(s__44352__$1,x,xs__6292__auto__,temp__5735__auto__,map__44349,map__44349__$1,state,world))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,hpointu$rts$app$redraw_world_$_iter__44351(cljs.core.rest(s__44352__$1)));
} else {
var G__44507 = cljs.core.rest(s__44352__$1);
s__44352__$1 = G__44507;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_width(world)));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),elems);
});
hpointu.rts.app.to_screen = (function hpointu$rts$app$to_screen(var_args){
var G__44358 = arguments.length;
switch (G__44358) {
case 1:
return hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$1 = (function (coords){
return hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2(coords,hpointu.rts.app.SIZE);
}));

(hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2 = (function (p__44359,size){
var vec__44360 = p__44359;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44360,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44360,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(size * x),(size * y)], null);
}));

(hpointu.rts.app.to_screen.cljs$lang$maxFixedArity = 2);

hpointu.rts.app.to_world = (function hpointu$rts$app$to_world(p__44363){
var vec__44364 = p__44363;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44364,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44364,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / hpointu.rts.app.SIZE),(y / hpointu.rts.app.SIZE)], null);
});
hpointu.rts.app.get_game_canvas = (function hpointu$rts$app$get_game_canvas(){
return document.getElementById("game");
});
hpointu.rts.app.get_minimap_canvas = (function hpointu$rts$app$get_minimap_canvas(){
return document.getElementById("minimap");
});
hpointu.rts.app.context = (function hpointu$rts$app$context(canvas_name){
return document.getElementById(canvas_name).getContext("2d");
});
hpointu.rts.app.visible_QMARK_ = (function hpointu$rts$app$visible_QMARK_(state,x,y){
return (((x < (18))) && ((y < (14))));
});
hpointu.rts.app.draw_tile_BANG_ = (function hpointu$rts$app$draw_tile_BANG_(ctx,world,x,y,size,hover_QMARK_){
var tile_color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":(cljs.core.truth_(hover_QMARK_)?"green":"#222"));
var vec__44367 = hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44367,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44367,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((1) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((1) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (2)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (2)),new cljs.core.Keyword(null,"fill","fill",883462889),tile_color], null));

return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((2) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((2) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (4)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (4)),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
hpointu.rts.app.draw_minimap_BANG_ = (function hpointu$rts$app$draw_minimap_BANG_(ctx,p__44370){
var map__44371 = p__44370;
var map__44371__$1 = (((((!((map__44371 == null))))?(((((map__44371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44371):map__44371);
var state = map__44371__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44371__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var seq__44373 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_width(world)));
var chunk__44378 = null;
var count__44379 = (0);
var i__44380 = (0);
while(true){
if((i__44380 < count__44379)){
var x = chunk__44378.cljs$core$IIndexed$_nth$arity$2(null,i__44380);
var seq__44381_44509 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world)));
var chunk__44382_44510 = null;
var count__44383_44511 = (0);
var i__44384_44512 = (0);
while(true){
if((i__44384_44512 < count__44383_44511)){
var y_44513 = chunk__44382_44510.cljs$core$IIndexed$_nth$arity$2(null,i__44384_44512);
var size_44514 = (2);
var color_44515 = ((hpointu.rts.core.obstacle_QMARK_(world,x,y_44513))?"gray":"#111");
var vec__44415_44516 = hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_44513], null),size_44514);
var x_44517__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44415_44516,(0),null);
var y_44518__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44415_44516,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_44517__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_44518__$1,new cljs.core.Keyword(null,"w","w",354169001),size_44514,new cljs.core.Keyword(null,"h","h",1109658740),size_44514,new cljs.core.Keyword(null,"fill","fill",883462889),color_44515], null));


var G__44519 = seq__44381_44509;
var G__44520 = chunk__44382_44510;
var G__44521 = count__44383_44511;
var G__44522 = (i__44384_44512 + (1));
seq__44381_44509 = G__44519;
chunk__44382_44510 = G__44520;
count__44383_44511 = G__44521;
i__44384_44512 = G__44522;
continue;
} else {
var temp__5735__auto___44523 = cljs.core.seq(seq__44381_44509);
if(temp__5735__auto___44523){
var seq__44381_44524__$1 = temp__5735__auto___44523;
if(cljs.core.chunked_seq_QMARK_(seq__44381_44524__$1)){
var c__4556__auto___44525 = cljs.core.chunk_first(seq__44381_44524__$1);
var G__44526 = cljs.core.chunk_rest(seq__44381_44524__$1);
var G__44527 = c__4556__auto___44525;
var G__44528 = cljs.core.count(c__4556__auto___44525);
var G__44529 = (0);
seq__44381_44509 = G__44526;
chunk__44382_44510 = G__44527;
count__44383_44511 = G__44528;
i__44384_44512 = G__44529;
continue;
} else {
var y_44530 = cljs.core.first(seq__44381_44524__$1);
var size_44531 = (2);
var color_44532 = ((hpointu.rts.core.obstacle_QMARK_(world,x,y_44530))?"gray":"#111");
var vec__44418_44533 = hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_44530], null),size_44531);
var x_44534__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44418_44533,(0),null);
var y_44535__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44418_44533,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_44534__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_44535__$1,new cljs.core.Keyword(null,"w","w",354169001),size_44531,new cljs.core.Keyword(null,"h","h",1109658740),size_44531,new cljs.core.Keyword(null,"fill","fill",883462889),color_44532], null));


var G__44536 = cljs.core.next(seq__44381_44524__$1);
var G__44537 = null;
var G__44538 = (0);
var G__44539 = (0);
seq__44381_44509 = G__44536;
chunk__44382_44510 = G__44537;
count__44383_44511 = G__44538;
i__44384_44512 = G__44539;
continue;
}
} else {
}
}
break;
}

var G__44540 = seq__44373;
var G__44541 = chunk__44378;
var G__44542 = count__44379;
var G__44543 = (i__44380 + (1));
seq__44373 = G__44540;
chunk__44378 = G__44541;
count__44379 = G__44542;
i__44380 = G__44543;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44373);
if(temp__5735__auto__){
var seq__44373__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44373__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44373__$1);
var G__44544 = cljs.core.chunk_rest(seq__44373__$1);
var G__44545 = c__4556__auto__;
var G__44546 = cljs.core.count(c__4556__auto__);
var G__44547 = (0);
seq__44373 = G__44544;
chunk__44378 = G__44545;
count__44379 = G__44546;
i__44380 = G__44547;
continue;
} else {
var x = cljs.core.first(seq__44373__$1);
var seq__44374_44548 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world)));
var chunk__44375_44549 = null;
var count__44376_44550 = (0);
var i__44377_44551 = (0);
while(true){
if((i__44377_44551 < count__44376_44550)){
var y_44552 = chunk__44375_44549.cljs$core$IIndexed$_nth$arity$2(null,i__44377_44551);
var size_44553 = (2);
var color_44554 = ((hpointu.rts.core.obstacle_QMARK_(world,x,y_44552))?"gray":"#111");
var vec__44427_44555 = hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_44552], null),size_44553);
var x_44556__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44427_44555,(0),null);
var y_44557__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44427_44555,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_44556__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_44557__$1,new cljs.core.Keyword(null,"w","w",354169001),size_44553,new cljs.core.Keyword(null,"h","h",1109658740),size_44553,new cljs.core.Keyword(null,"fill","fill",883462889),color_44554], null));


var G__44558 = seq__44374_44548;
var G__44559 = chunk__44375_44549;
var G__44560 = count__44376_44550;
var G__44561 = (i__44377_44551 + (1));
seq__44374_44548 = G__44558;
chunk__44375_44549 = G__44559;
count__44376_44550 = G__44560;
i__44377_44551 = G__44561;
continue;
} else {
var temp__5735__auto___44562__$1 = cljs.core.seq(seq__44374_44548);
if(temp__5735__auto___44562__$1){
var seq__44374_44563__$1 = temp__5735__auto___44562__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44374_44563__$1)){
var c__4556__auto___44564 = cljs.core.chunk_first(seq__44374_44563__$1);
var G__44565 = cljs.core.chunk_rest(seq__44374_44563__$1);
var G__44566 = c__4556__auto___44564;
var G__44567 = cljs.core.count(c__4556__auto___44564);
var G__44568 = (0);
seq__44374_44548 = G__44565;
chunk__44375_44549 = G__44566;
count__44376_44550 = G__44567;
i__44377_44551 = G__44568;
continue;
} else {
var y_44569 = cljs.core.first(seq__44374_44563__$1);
var size_44570 = (2);
var color_44571 = ((hpointu.rts.core.obstacle_QMARK_(world,x,y_44569))?"gray":"#111");
var vec__44430_44572 = hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_44569], null),size_44570);
var x_44573__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44430_44572,(0),null);
var y_44574__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44430_44572,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_44573__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_44574__$1,new cljs.core.Keyword(null,"w","w",354169001),size_44570,new cljs.core.Keyword(null,"h","h",1109658740),size_44570,new cljs.core.Keyword(null,"fill","fill",883462889),color_44571], null));


var G__44575 = cljs.core.next(seq__44374_44563__$1);
var G__44576 = null;
var G__44577 = (0);
var G__44578 = (0);
seq__44374_44548 = G__44575;
chunk__44375_44549 = G__44576;
count__44376_44550 = G__44577;
i__44377_44551 = G__44578;
continue;
}
} else {
}
}
break;
}

var G__44579 = cljs.core.next(seq__44373__$1);
var G__44580 = null;
var G__44581 = (0);
var G__44582 = (0);
seq__44373 = G__44579;
chunk__44378 = G__44580;
count__44379 = G__44581;
i__44380 = G__44582;
continue;
}
} else {
return null;
}
}
break;
}
});
hpointu.rts.app.update_hover = (function hpointu$rts$app$update_hover(p__44433,x,y){
var map__44434 = p__44433;
var map__44434__$1 = (((((!((map__44434 == null))))?(((((map__44434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44434):map__44434);
var state = map__44434__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44434__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44434__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var new_hover = ((hpointu.rts.core.in_world_QMARK_(world,x,y))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),new_hover),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.into,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_hover,hover], null)));
});
hpointu.rts.app.handle_input = (function hpointu$rts$app$handle_input(p__44436){
var map__44437 = p__44436;
var map__44437__$1 = (((((!((map__44437 == null))))?(((((map__44437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44437):map__44437);
var state = map__44437__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44437__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
if(cljs.core.truth_((function (){var and__4115__auto__ = hover;
if(cljs.core.truth_(and__4115__auto__)){
return hpointu.rts.input.key_pressed_QMARK_("KeyW");
} else {
return and__4115__auto__;
}
})())){
var vec__44439 = hover;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44439,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44439,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),y,x], null),new cljs.core.Keyword(null,"w","w",354169001));
} else {
return state;
}
});
hpointu.rts.app.update_state = (function hpointu$rts$app$update_state(p__44442,dt){
var map__44443 = p__44442;
var map__44443__$1 = (((((!((map__44443 == null))))?(((((map__44443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44443):map__44443);
var state = map__44443__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44443__$1,new cljs.core.Keyword(null,"world","world",-418292623));

var canvas = hpointu.rts.app.get_game_canvas();
var vec__44445 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,hpointu.rts.app.to_world(hpointu.rts.input.mouse_pos(canvas)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44445,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44445,(1),null);
return hpointu.rts.app.handle_input(hpointu.rts.app.update_hover(state,x,y));
});
hpointu.rts.app.draw_BANG_ = (function hpointu$rts$app$draw_BANG_(p__44448){
var map__44449 = p__44448;
var map__44449__$1 = (((((!((map__44449 == null))))?(((((map__44449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44449):map__44449);
var state = map__44449__$1;
var world_updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44449__$1,new cljs.core.Keyword(null,"world-updates","world-updates",1616740218));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44449__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44449__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var seq__44451_44583 = cljs.core.seq(world_updates);
var chunk__44453_44584 = null;
var count__44454_44585 = (0);
var i__44455_44586 = (0);
while(true){
if((i__44455_44586 < count__44454_44585)){
var vec__44463_44587 = chunk__44453_44584.cljs$core$IIndexed$_nth$arity$2(null,i__44455_44586);
var x_44588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44463_44587,(0),null);
var y_44589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44463_44587,(1),null);
if(hpointu.rts.app.visible_QMARK_(state,x_44588,y_44589)){
hpointu.rts.app.draw_tile_BANG_(hpointu.rts.app.context("game"),world,x_44588,y_44589,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_44588,y_44589], null)));


var G__44590 = seq__44451_44583;
var G__44591 = chunk__44453_44584;
var G__44592 = count__44454_44585;
var G__44593 = (i__44455_44586 + (1));
seq__44451_44583 = G__44590;
chunk__44453_44584 = G__44591;
count__44454_44585 = G__44592;
i__44455_44586 = G__44593;
continue;
} else {
var G__44594 = seq__44451_44583;
var G__44595 = chunk__44453_44584;
var G__44596 = count__44454_44585;
var G__44597 = (i__44455_44586 + (1));
seq__44451_44583 = G__44594;
chunk__44453_44584 = G__44595;
count__44454_44585 = G__44596;
i__44455_44586 = G__44597;
continue;
}
} else {
var temp__5735__auto___44598 = cljs.core.seq(seq__44451_44583);
if(temp__5735__auto___44598){
var seq__44451_44599__$1 = temp__5735__auto___44598;
if(cljs.core.chunked_seq_QMARK_(seq__44451_44599__$1)){
var c__4556__auto___44600 = cljs.core.chunk_first(seq__44451_44599__$1);
var G__44601 = cljs.core.chunk_rest(seq__44451_44599__$1);
var G__44602 = c__4556__auto___44600;
var G__44603 = cljs.core.count(c__4556__auto___44600);
var G__44604 = (0);
seq__44451_44583 = G__44601;
chunk__44453_44584 = G__44602;
count__44454_44585 = G__44603;
i__44455_44586 = G__44604;
continue;
} else {
var vec__44466_44605 = cljs.core.first(seq__44451_44599__$1);
var x_44606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44466_44605,(0),null);
var y_44607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44466_44605,(1),null);
if(hpointu.rts.app.visible_QMARK_(state,x_44606,y_44607)){
hpointu.rts.app.draw_tile_BANG_(hpointu.rts.app.context("game"),world,x_44606,y_44607,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_44606,y_44607], null)));


var G__44608 = cljs.core.next(seq__44451_44599__$1);
var G__44609 = null;
var G__44610 = (0);
var G__44611 = (0);
seq__44451_44583 = G__44608;
chunk__44453_44584 = G__44609;
count__44454_44585 = G__44610;
i__44455_44586 = G__44611;
continue;
} else {
var G__44612 = cljs.core.next(seq__44451_44599__$1);
var G__44613 = null;
var G__44614 = (0);
var G__44615 = (0);
seq__44451_44583 = G__44612;
chunk__44453_44584 = G__44613;
count__44454_44585 = G__44614;
i__44455_44586 = G__44615;
continue;
}
}
} else {
}
}
break;
}

var seq__44469_44616 = cljs.core.seq(world_updates);
var chunk__44470_44617 = null;
var count__44471_44618 = (0);
var i__44472_44619 = (0);
while(true){
if((i__44472_44619 < count__44471_44618)){
var vec__44485_44620 = chunk__44470_44617.cljs$core$IIndexed$_nth$arity$2(null,i__44472_44619);
var x_44621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44485_44620,(0),null);
var y_44622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44485_44620,(1),null);
var size_44623 = (3);
var color_44624 = ((hpointu.rts.core.obstacle_QMARK_(world,x_44621,y_44622))?"gray":"#111");
var vec__44488_44625 = hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_44621,y_44622], null),size_44623);
var x_44626__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44488_44625,(0),null);
var y_44627__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44488_44625,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_44626__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_44627__$1,new cljs.core.Keyword(null,"w","w",354169001),size_44623,new cljs.core.Keyword(null,"h","h",1109658740),size_44623,new cljs.core.Keyword(null,"fill","fill",883462889),color_44624], null));


var G__44628 = seq__44469_44616;
var G__44629 = chunk__44470_44617;
var G__44630 = count__44471_44618;
var G__44631 = (i__44472_44619 + (1));
seq__44469_44616 = G__44628;
chunk__44470_44617 = G__44629;
count__44471_44618 = G__44630;
i__44472_44619 = G__44631;
continue;
} else {
var temp__5735__auto___44632 = cljs.core.seq(seq__44469_44616);
if(temp__5735__auto___44632){
var seq__44469_44633__$1 = temp__5735__auto___44632;
if(cljs.core.chunked_seq_QMARK_(seq__44469_44633__$1)){
var c__4556__auto___44634 = cljs.core.chunk_first(seq__44469_44633__$1);
var G__44635 = cljs.core.chunk_rest(seq__44469_44633__$1);
var G__44636 = c__4556__auto___44634;
var G__44637 = cljs.core.count(c__4556__auto___44634);
var G__44638 = (0);
seq__44469_44616 = G__44635;
chunk__44470_44617 = G__44636;
count__44471_44618 = G__44637;
i__44472_44619 = G__44638;
continue;
} else {
var vec__44491_44639 = cljs.core.first(seq__44469_44633__$1);
var x_44640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44491_44639,(0),null);
var y_44641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44491_44639,(1),null);
var size_44642 = (3);
var color_44643 = ((hpointu.rts.core.obstacle_QMARK_(world,x_44640,y_44641))?"gray":"#111");
var vec__44494_44644 = hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_44640,y_44641], null),size_44642);
var x_44645__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44494_44644,(0),null);
var y_44646__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44494_44644,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_44645__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_44646__$1,new cljs.core.Keyword(null,"w","w",354169001),size_44642,new cljs.core.Keyword(null,"h","h",1109658740),size_44642,new cljs.core.Keyword(null,"fill","fill",883462889),color_44643], null));


var G__44647 = cljs.core.next(seq__44469_44633__$1);
var G__44648 = null;
var G__44649 = (0);
var G__44650 = (0);
seq__44469_44616 = G__44647;
chunk__44470_44617 = G__44648;
count__44471_44618 = G__44649;
i__44472_44619 = G__44650;
continue;
}
} else {
}
}
break;
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.PersistentVector.EMPTY);
});
hpointu.rts.app.tick_BANG_ = (function hpointu$rts$app$tick_BANG_(){
var t = Date.now();
var dt = (t - cljs.core.deref(hpointu.rts.app.current_time));
var new_state = hpointu.rts.app.draw_BANG_(hpointu.rts.app.update_state(cljs.core.deref(hpointu.rts.app.state),dt));
cljs.core.reset_BANG_(hpointu.rts.app.current_time,t);

cljs.core.reset_BANG_(hpointu.rts.app.state,new_state);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.frame_counter,cljs.core.inc);
});
hpointu.rts.app.rts_app = (function hpointu$rts$app$rts_app(props){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 5px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black"], null)], null),"RTS Demo"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column wrap"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"minimap",new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"height","height",1025178622),(223),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#111",new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"height","height",1025178622),(223)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),"TODO:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Minimap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Camera movement"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Mouse mode"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"game",new cljs.core.Keyword(null,"width","width",-384071477),(611),new cljs.core.Keyword(null,"height","height",1025178622),(480),new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),(function (p1__44497_SHARP_){
return p1__44497_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(611),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820)], null)], null),hpointu.rts.app.get_debug_content()], null)], null);
});
hpointu.rts.app.timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hpointu.rts.app.stop = (function hpointu$rts$app$stop(){
var seq__44498_44651 = cljs.core.seq(cljs.core.deref(hpointu.rts.app.timers));
var chunk__44499_44652 = null;
var count__44500_44653 = (0);
var i__44501_44654 = (0);
while(true){
if((i__44501_44654 < count__44500_44653)){
var t_44655 = chunk__44499_44652.cljs$core$IIndexed$_nth$arity$2(null,i__44501_44654);
clearInterval(t_44655);


var G__44656 = seq__44498_44651;
var G__44657 = chunk__44499_44652;
var G__44658 = count__44500_44653;
var G__44659 = (i__44501_44654 + (1));
seq__44498_44651 = G__44656;
chunk__44499_44652 = G__44657;
count__44500_44653 = G__44658;
i__44501_44654 = G__44659;
continue;
} else {
var temp__5735__auto___44660 = cljs.core.seq(seq__44498_44651);
if(temp__5735__auto___44660){
var seq__44498_44661__$1 = temp__5735__auto___44660;
if(cljs.core.chunked_seq_QMARK_(seq__44498_44661__$1)){
var c__4556__auto___44662 = cljs.core.chunk_first(seq__44498_44661__$1);
var G__44663 = cljs.core.chunk_rest(seq__44498_44661__$1);
var G__44664 = c__4556__auto___44662;
var G__44665 = cljs.core.count(c__4556__auto___44662);
var G__44666 = (0);
seq__44498_44651 = G__44663;
chunk__44499_44652 = G__44664;
count__44500_44653 = G__44665;
i__44501_44654 = G__44666;
continue;
} else {
var t_44667 = cljs.core.first(seq__44498_44661__$1);
clearInterval(t_44667);


var G__44668 = cljs.core.next(seq__44498_44661__$1);
var G__44669 = null;
var G__44670 = (0);
var G__44671 = (0);
seq__44498_44651 = G__44668;
chunk__44499_44652 = G__44669;
count__44500_44653 = G__44670;
i__44501_44654 = G__44671;
continue;
}
} else {
}
}
break;
}

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Stopping..."], 0));
});
hpointu.rts.app.start = (function hpointu$rts$app$start(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Starting..."], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.state,hpointu.rts.app.redraw_world);

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hpointu.rts.app.rts_app], null),document.getElementById("app"));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hpointu.rts.app.timers,cljs.core.conj,setInterval(hpointu.rts.app.tick_BANG_,16.66));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hpointu.rts.app.timers,cljs.core.conj,setInterval((function (){
cljs.core.reset_BANG_(hpointu.rts.app.fps,cljs.core.deref(hpointu.rts.app.frame_counter));

return cljs.core.reset_BANG_(hpointu.rts.app.frame_counter,(0));
}),(1000)));
});
hpointu.rts.app.init = (function hpointu$rts$app$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing..."], 0));

cljs.core.reset_BANG_(hpointu.rts.app.state,hpointu.rts.app.init_state());

hpointu.rts.app.start();

return hpointu.rts.input.init_BANG_();
});
goog.exportSymbol('hpointu.rts.app.init', hpointu.rts.app.init);

//# sourceMappingURL=hpointu.rts.app.js.map
