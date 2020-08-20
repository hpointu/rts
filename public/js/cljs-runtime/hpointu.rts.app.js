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
hpointu.rts.app.SIZE = (35);
hpointu.rts.app.init_state = (function hpointu$rts$app$init_state(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"world","world",-418292623),hpointu.rts.core.__GT_world((74),(74)),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.PersistentVector.EMPTY], null);
});
hpointu.rts.app.visible_QMARK_ = (function hpointu$rts$app$visible_QMARK_(p__91619,x,y){
var map__91620 = p__91619;
var map__91620__$1 = (((((!((map__91620 == null))))?(((((map__91620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91620):map__91620);
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91620__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__91622 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91622,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91622,(1),null);
return (((x < (cx + (18)))) && ((y < (cy + (14)))));
});
hpointu.rts.app.visible_range = (function hpointu$rts$app$visible_range(p__91625){
var vec__91626 = p__91625;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91626,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91626,(1),null);
var camera = vec__91626;
var iter__4529__auto__ = (function hpointu$rts$app$visible_range_$_iter__91629(s__91630){
return (new cljs.core.LazySeq(null,(function (){
var s__91630__$1 = s__91630;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__91630__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__91630__$1,x,xs__6292__auto__,temp__5735__auto__,vec__91626,cx,cy,camera){
return (function hpointu$rts$app$visible_range_$_iter__91629_$_iter__91631(s__91632){
return (new cljs.core.LazySeq(null,((function (s__91630__$1,x,xs__6292__auto__,temp__5735__auto__,vec__91626,cx,cy,camera){
return (function (){
var s__91632__$1 = s__91632;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__91632__$1);
if(temp__5735__auto____$1){
var s__91632__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__91632__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__91632__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__91634 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__91633 = (0);
while(true){
if((i__91633 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__91633);
cljs.core.chunk_append(b__91634,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__91756 = (i__91633 + (1));
i__91633 = G__91756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__91634),hpointu$rts$app$visible_range_$_iter__91629_$_iter__91631(cljs.core.chunk_rest(s__91632__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__91634),null);
}
} else {
var y = cljs.core.first(s__91632__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),hpointu$rts$app$visible_range_$_iter__91629_$_iter__91631(cljs.core.rest(s__91632__$2)));
}
} else {
return null;
}
break;
}
});})(s__91630__$1,x,xs__6292__auto__,temp__5735__auto__,vec__91626,cx,cy,camera))
,null,null));
});})(s__91630__$1,x,xs__6292__auto__,temp__5735__auto__,vec__91626,cx,cy,camera))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(((cy - (2)) | (0)),(((cy + (14)) + (2)) | (0)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,hpointu$rts$app$visible_range_$_iter__91629(cljs.core.rest(s__91630__$1)));
} else {
var G__91757 = cljs.core.rest(s__91630__$1);
s__91630__$1 = G__91757;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(((cx - (2)) | (0)),(((cx + (18)) + (2)) | (0))));
});
hpointu.rts.app.hover_QMARK_ = (function hpointu$rts$app$hover_QMARK_(p__91635,x,y){
var map__91636 = p__91635;
var map__91636__$1 = (((((!((map__91636 == null))))?(((((map__91636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91636):map__91636);
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91636__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
hpointu.rts.app.cell_redraw = (function hpointu$rts$app$cell_redraw(p__91638){
var vec__91639 = p__91638;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91639,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91639,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),x,y], null);
});
hpointu.rts.app.redraw_world = (function hpointu$rts$app$redraw_world(p__91642){
var map__91643 = p__91642;
var map__91643__$1 = (((((!((map__91643 == null))))?(((((map__91643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91643):map__91643);
var state = map__91643__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91643__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var elems = (function (){var iter__4529__auto__ = (function hpointu$rts$app$redraw_world_$_iter__91645(s__91646){
return (new cljs.core.LazySeq(null,(function (){
var s__91646__$1 = s__91646;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__91646__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__91646__$1,x,xs__6292__auto__,temp__5735__auto__,map__91643,map__91643__$1,state,world){
return (function hpointu$rts$app$redraw_world_$_iter__91645_$_iter__91647(s__91648){
return (new cljs.core.LazySeq(null,((function (s__91646__$1,x,xs__6292__auto__,temp__5735__auto__,map__91643,map__91643__$1,state,world){
return (function (){
var s__91648__$1 = s__91648;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__91648__$1);
if(temp__5735__auto____$1){
var s__91648__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__91648__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__91648__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__91650 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__91649 = (0);
while(true){
if((i__91649 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__91649);
cljs.core.chunk_append(b__91650,hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__91758 = (i__91649 + (1));
i__91649 = G__91758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__91650),hpointu$rts$app$redraw_world_$_iter__91645_$_iter__91647(cljs.core.chunk_rest(s__91648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__91650),null);
}
} else {
var y = cljs.core.first(s__91648__$2);
return cljs.core.cons(hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),hpointu$rts$app$redraw_world_$_iter__91645_$_iter__91647(cljs.core.rest(s__91648__$2)));
}
} else {
return null;
}
break;
}
});})(s__91646__$1,x,xs__6292__auto__,temp__5735__auto__,map__91643,map__91643__$1,state,world))
,null,null));
});})(s__91646__$1,x,xs__6292__auto__,temp__5735__auto__,map__91643,map__91643__$1,state,world))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,hpointu$rts$app$redraw_world_$_iter__91645(cljs.core.rest(s__91646__$1)));
} else {
var G__91759 = cljs.core.rest(s__91646__$1);
s__91646__$1 = G__91759;
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear","clear",1877104959)], null)),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.into,elems);
});
hpointu.rts.app.redraw_visible = (function hpointu$rts$app$redraw_visible(p__91651){
var map__91652 = p__91651;
var map__91652__$1 = (((((!((map__91652 == null))))?(((((map__91652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91652):map__91652);
var state = map__91652__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91652__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91652__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var elems = (function (){var iter__4529__auto__ = (function hpointu$rts$app$redraw_visible_$_iter__91654(s__91655){
return (new cljs.core.LazySeq(null,(function (){
var s__91655__$1 = s__91655;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__91655__$1);
if(temp__5735__auto__){
var s__91655__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__91655__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__91655__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__91657 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__91656 = (0);
while(true){
if((i__91656 < size__4528__auto__)){
var vec__91658 = cljs.core._nth(c__4527__auto__,i__91656);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91658,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91658,(1),null);
cljs.core.chunk_append(b__91657,hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__91760 = (i__91656 + (1));
i__91656 = G__91760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__91657),hpointu$rts$app$redraw_visible_$_iter__91654(cljs.core.chunk_rest(s__91655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__91657),null);
}
} else {
var vec__91661 = cljs.core.first(s__91655__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91661,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91661,(1),null);
return cljs.core.cons(hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),hpointu$rts$app$redraw_visible_$_iter__91654(cljs.core.rest(s__91655__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(hpointu.rts.app.visible_range(camera));
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear","clear",1877104959)], null)),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.into,elems);
});
hpointu.rts.app.to_game_canvas = (function hpointu$rts$app$to_game_canvas(p__91664,p__91665){
var map__91666 = p__91664;
var map__91666__$1 = (((((!((map__91666 == null))))?(((((map__91666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91666):map__91666);
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91666__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__91667 = p__91665;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91667,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91667,(1),null);
var vec__91671 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91671,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91671,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE * (x - cx)),(hpointu.rts.app.SIZE * (y - cy))], null)));
});
hpointu.rts.app.to_minimap_canvas = (function hpointu$rts$app$to_minimap_canvas(p__91674,size){
var vec__91675 = p__91674;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91675,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91675,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(size * x),(size * y)], null);
});
hpointu.rts.app.to_world = (function hpointu$rts$app$to_world(p__91678){
var vec__91679 = p__91678;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91679,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91679,(1),null);
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
hpointu.rts.app.draw_tile_BANG_ = (function hpointu$rts$app$draw_tile_BANG_(ctx,p__91682,x,y,size){
var map__91683 = p__91682;
var map__91683__$1 = (((((!((map__91683 == null))))?(((((map__91683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91683):map__91683);
var state = map__91683__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91683__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var tile_color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":((hpointu.rts.app.hover_QMARK_(state,x,y))?"green":"#222"
));
var vec__91685 = hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91685,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91685,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((1) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((1) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (2)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (2)),new cljs.core.Keyword(null,"fill","fill",883462889),tile_color], null));

return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((2) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((2) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (4)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (4)),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
hpointu.rts.app.update_hover = (function hpointu$rts$app$update_hover(p__91688,x,y){
var map__91689 = p__91688;
var map__91689__$1 = (((((!((map__91689 == null))))?(((((map__91689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91689):map__91689);
var state = map__91689__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91689__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91689__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91689__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__91691 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91691,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91691,(1),null);
var new_hover = ((hpointu.rts.core.in_world_QMARK_(world,x,y))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),new_hover),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.cell_redraw,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_hover,hover], null))));
});
hpointu.rts.app.add_wall = (function hpointu$rts$app$add_wall(p__91694){
var map__91695 = p__91694;
var map__91695__$1 = (((((!((map__91695 == null))))?(((((map__91695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91695):map__91695);
var state = map__91695__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91695__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var vec__91697 = hover;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91697,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91697,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(state,new cljs.core.Keyword(null,"world","world",-418292623),hpointu.rts.core.set_world_cell,x,y,new cljs.core.Keyword(null,"w","w",354169001));
});
hpointu.rts.app.clamp_camera = (function hpointu$rts$app$clamp_camera(p__91700){
var map__91701 = p__91700;
var map__91701__$1 = (((((!((map__91701 == null))))?(((((map__91701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91701):map__91701);
var state = map__91701__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91701__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var max_x = (hpointu.rts.core.world_width(world) - 17.4);
var max_y = (hpointu.rts.core.world_height(world) - 13.6);
var round = (function (f){
return (Math.round(((10) * f)) / (10));
});
var fixed = (function (camera){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(round,camera));
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),(0)], null),cljs.core.min,max_x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),(0)], null),cljs.core.max,(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),(1)], null),cljs.core.min,max_y),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),(1)], null),cljs.core.max,(0)),new cljs.core.Keyword(null,"camera","camera",-1190348585),fixed);
});
hpointu.rts.app.move_camera = (function hpointu$rts$app$move_camera(state,dx,dy){
var speed = 0.3;
return hpointu.rts.app.redraw_visible(hpointu.rts.app.clamp_camera(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),(0)], null),cljs.core._PLUS_,(speed * dx)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),(1)], null),cljs.core._PLUS_,(speed * dy))));
});
hpointu.rts.app.handle_keys = (function hpointu$rts$app$handle_keys(p__91703){
var map__91704 = p__91703;
var map__91704__$1 = (((((!((map__91704 == null))))?(((((map__91704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91704):map__91704);
var state = map__91704__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91704__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var G__91706 = state;
var G__91706__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = hover;
if(cljs.core.truth_(and__4115__auto__)){
return hpointu.rts.input.key_pressed_QMARK_("KeyW");
} else {
return and__4115__auto__;
}
})())?hpointu.rts.app.add_wall(G__91706):G__91706);
if(cljs.core.truth_(cljs.core.some(hpointu.rts.input.key_pressed_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrowUp",null,"ArrowDown",null,"ArrowRight",null,"ArrowLeft",null], null), null)))){
return hpointu.rts.app.move_camera(G__91706__$1,((hpointu.rts.input.key_pressed_QMARK_("ArrowLeft"))?(-1):((hpointu.rts.input.key_pressed_QMARK_("ArrowRight"))?(1):(0)
)),((hpointu.rts.input.key_pressed_QMARK_("ArrowUp"))?(-1):((hpointu.rts.input.key_pressed_QMARK_("ArrowDown"))?(1):(0)
)));
} else {
return G__91706__$1;
}
});
hpointu.rts.app.update_state = (function hpointu$rts$app$update_state(p__91707,dt){
var map__91708 = p__91707;
var map__91708__$1 = (((((!((map__91708 == null))))?(((((map__91708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91708):map__91708);
var state = map__91708__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91708__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91708__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));

var canvas = hpointu.rts.app.get_game_canvas();
var vec__91710 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core._PLUS_),camera,hpointu.rts.app.to_world(hpointu.rts.input.mouse_pos(canvas)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91710,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91710,(1),null);
return hpointu.rts.app.handle_keys(hpointu.rts.app.update_hover(state,x,y));
});
hpointu.rts.app.draw_game_elem_BANG_ = (function hpointu$rts$app$draw_game_elem_BANG_(state,p__91713){
var vec__91714 = p__91713;
var seq__91715 = cljs.core.seq(vec__91714);
var first__91716 = cljs.core.first(seq__91715);
var seq__91715__$1 = cljs.core.next(seq__91715);
var update_type = first__91716;
var args = seq__91715__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_type,new cljs.core.Keyword(null,"cell","cell",764245084))){
var vec__91717 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91717,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91717,(1),null);
if(hpointu.rts.app.visible_QMARK_(state,x,y)){
return hpointu.rts.app.draw_tile_BANG_(hpointu.rts.app.context("game"),state,x,y,hpointu.rts.app.SIZE);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_type,new cljs.core.Keyword(null,"clear","clear",1877104959))){
var canvas = hpointu.rts.app.get_game_canvas();
return hpointu.rts.app.context("game").clearRect((0),(0),canvas.width,canvas.height);
} else {
return null;
}
}
});
hpointu.rts.app.draw_minimap_elem_BANG_ = (function hpointu$rts$app$draw_minimap_elem_BANG_(p__91720,p__91721){
var map__91722 = p__91720;
var map__91722__$1 = (((((!((map__91722 == null))))?(((((map__91722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91722):map__91722);
var state = map__91722__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91722__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var vec__91723 = p__91721;
var seq__91724 = cljs.core.seq(vec__91723);
var first__91725 = cljs.core.first(seq__91724);
var seq__91724__$1 = cljs.core.next(seq__91724);
var update_type = first__91725;
var args = seq__91724__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_type,new cljs.core.Keyword(null,"cell","cell",764245084))){
var size = (3);
var vec__91727 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91727,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91727,(1),null);
var color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":"#111");
var vec__91730 = hpointu.rts.app.to_minimap_canvas(args,size);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91730,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91730,(1),null);
return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"w","w",354169001),size,new cljs.core.Keyword(null,"h","h",1109658740),size,new cljs.core.Keyword(null,"fill","fill",883462889),color], null));
} else {
return null;
}
});
hpointu.rts.app.draw_BANG_ = (function hpointu$rts$app$draw_BANG_(p__91733){
var map__91734 = p__91733;
var map__91734__$1 = (((((!((map__91734 == null))))?(((((map__91734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91734):map__91734);
var state = map__91734__$1;
var world_updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91734__$1,new cljs.core.Keyword(null,"world-updates","world-updates",1616740218));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91734__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var seq__91736_91761 = cljs.core.seq(world_updates);
var chunk__91737_91762 = null;
var count__91738_91763 = (0);
var i__91739_91764 = (0);
while(true){
if((i__91739_91764 < count__91738_91763)){
var wu_91765 = chunk__91737_91762.cljs$core$IIndexed$_nth$arity$2(null,i__91739_91764);
hpointu.rts.app.draw_game_elem_BANG_(state,wu_91765);

hpointu.rts.app.draw_minimap_elem_BANG_(state,wu_91765);


var G__91766 = seq__91736_91761;
var G__91767 = chunk__91737_91762;
var G__91768 = count__91738_91763;
var G__91769 = (i__91739_91764 + (1));
seq__91736_91761 = G__91766;
chunk__91737_91762 = G__91767;
count__91738_91763 = G__91768;
i__91739_91764 = G__91769;
continue;
} else {
var temp__5735__auto___91770 = cljs.core.seq(seq__91736_91761);
if(temp__5735__auto___91770){
var seq__91736_91771__$1 = temp__5735__auto___91770;
if(cljs.core.chunked_seq_QMARK_(seq__91736_91771__$1)){
var c__4556__auto___91772 = cljs.core.chunk_first(seq__91736_91771__$1);
var G__91773 = cljs.core.chunk_rest(seq__91736_91771__$1);
var G__91774 = c__4556__auto___91772;
var G__91775 = cljs.core.count(c__4556__auto___91772);
var G__91776 = (0);
seq__91736_91761 = G__91773;
chunk__91737_91762 = G__91774;
count__91738_91763 = G__91775;
i__91739_91764 = G__91776;
continue;
} else {
var wu_91777 = cljs.core.first(seq__91736_91771__$1);
hpointu.rts.app.draw_game_elem_BANG_(state,wu_91777);

hpointu.rts.app.draw_minimap_elem_BANG_(state,wu_91777);


var G__91778 = cljs.core.next(seq__91736_91771__$1);
var G__91779 = null;
var G__91780 = (0);
var G__91781 = (0);
seq__91736_91761 = G__91778;
chunk__91737_91762 = G__91779;
count__91738_91763 = G__91780;
i__91739_91764 = G__91781;
continue;
}
} else {
}
}
break;
}

var vec__91740_91782 = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(state);
var cx_91783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91740_91782,(0),null);
var cy_91784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91740_91782,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),((3) * cx_91783),new cljs.core.Keyword(null,"y","y",-1757859776),((3) * cy_91784),new cljs.core.Keyword(null,"w","w",354169001),(53),new cljs.core.Keyword(null,"h","h",1109658740),(42),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null));

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
hpointu.rts.app.get_debug_content = (function hpointu$rts$app$get_debug_content(){
return ["FPS: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hpointu.rts.app.fps))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hpointu.rts.input.keymap)),"\n",(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__91747_91785 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__91748_91786 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__91749_91787 = true;
var _STAR_print_fn_STAR__temp_val__91750_91788 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__91749_91787);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__91750_91788);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hpointu.rts.app.state),new cljs.core.Keyword(null,"world","world",-418292623)),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__91748_91786);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__91747_91785);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()].join('');
});
hpointu.rts.app.rts_app = (function hpointu$rts$app$rts_app(props){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 5px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black"], null)], null),"RTS Demo",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.7em",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"mono",new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(90)], null)], null),"- Press W on the map to place a wall"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column wrap"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"minimap",new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"height","height",1025178622),(223),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#111",new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"height","height",1025178622),(223)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"mono",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),"TODO:"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Minimap"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Camera movement"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Mouse mode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Entities"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Path finding"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Gameplay elements"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"game",new cljs.core.Keyword(null,"width","width",-384071477),(611),new cljs.core.Keyword(null,"height","height",1025178622),(480),new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),(function (p1__91751_SHARP_){
return p1__91751_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(611),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820)], null)], null),hpointu.rts.app.get_debug_content()], null)], null);
});
hpointu.rts.app.timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hpointu.rts.app.stop = (function hpointu$rts$app$stop(){
var seq__91752_91789 = cljs.core.seq(cljs.core.deref(hpointu.rts.app.timers));
var chunk__91753_91790 = null;
var count__91754_91791 = (0);
var i__91755_91792 = (0);
while(true){
if((i__91755_91792 < count__91754_91791)){
var t_91793 = chunk__91753_91790.cljs$core$IIndexed$_nth$arity$2(null,i__91755_91792);
clearInterval(t_91793);


var G__91794 = seq__91752_91789;
var G__91795 = chunk__91753_91790;
var G__91796 = count__91754_91791;
var G__91797 = (i__91755_91792 + (1));
seq__91752_91789 = G__91794;
chunk__91753_91790 = G__91795;
count__91754_91791 = G__91796;
i__91755_91792 = G__91797;
continue;
} else {
var temp__5735__auto___91798 = cljs.core.seq(seq__91752_91789);
if(temp__5735__auto___91798){
var seq__91752_91799__$1 = temp__5735__auto___91798;
if(cljs.core.chunked_seq_QMARK_(seq__91752_91799__$1)){
var c__4556__auto___91800 = cljs.core.chunk_first(seq__91752_91799__$1);
var G__91801 = cljs.core.chunk_rest(seq__91752_91799__$1);
var G__91802 = c__4556__auto___91800;
var G__91803 = cljs.core.count(c__4556__auto___91800);
var G__91804 = (0);
seq__91752_91789 = G__91801;
chunk__91753_91790 = G__91802;
count__91754_91791 = G__91803;
i__91755_91792 = G__91804;
continue;
} else {
var t_91805 = cljs.core.first(seq__91752_91799__$1);
clearInterval(t_91805);


var G__91806 = cljs.core.next(seq__91752_91799__$1);
var G__91807 = null;
var G__91808 = (0);
var G__91809 = (0);
seq__91752_91789 = G__91806;
chunk__91753_91790 = G__91807;
count__91754_91791 = G__91808;
i__91755_91792 = G__91809;
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
