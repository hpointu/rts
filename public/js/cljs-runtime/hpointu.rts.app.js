goog.provide('hpointu.rts.app');
hpointu.rts.app.current_time = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(Date.now());
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"world","world",-418292623),hpointu.rts.core.__GT_world((74),(74)),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hpointu.rts.core.__GT_unit((3),(4))], null),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.PersistentVector.EMPTY], null);
});
hpointu.rts.app.visible_QMARK_ = (function hpointu$rts$app$visible_QMARK_(p__126489,x,y){
var map__126490 = p__126489;
var map__126490__$1 = (((((!((map__126490 == null))))?(((((map__126490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126490):map__126490);
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126490__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__126492 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126492,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126492,(1),null);
return (((x < (cx + (18)))) && ((y < (cy + (14)))));
});
hpointu.rts.app.visible_range = (function hpointu$rts$app$visible_range(p__126495){
var vec__126496 = p__126495;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126496,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126496,(1),null);
var camera = vec__126496;
var iter__4529__auto__ = (function hpointu$rts$app$visible_range_$_iter__126499(s__126500){
return (new cljs.core.LazySeq(null,(function (){
var s__126500__$1 = s__126500;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__126500__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__126500__$1,x,xs__6292__auto__,temp__5735__auto__,vec__126496,cx,cy,camera){
return (function hpointu$rts$app$visible_range_$_iter__126499_$_iter__126501(s__126502){
return (new cljs.core.LazySeq(null,((function (s__126500__$1,x,xs__6292__auto__,temp__5735__auto__,vec__126496,cx,cy,camera){
return (function (){
var s__126502__$1 = s__126502;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__126502__$1);
if(temp__5735__auto____$1){
var s__126502__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__126502__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__126502__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__126504 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__126503 = (0);
while(true){
if((i__126503 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__126503);
cljs.core.chunk_append(b__126504,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__126742 = (i__126503 + (1));
i__126503 = G__126742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__126504),hpointu$rts$app$visible_range_$_iter__126499_$_iter__126501(cljs.core.chunk_rest(s__126502__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__126504),null);
}
} else {
var y = cljs.core.first(s__126502__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),hpointu$rts$app$visible_range_$_iter__126499_$_iter__126501(cljs.core.rest(s__126502__$2)));
}
} else {
return null;
}
break;
}
});})(s__126500__$1,x,xs__6292__auto__,temp__5735__auto__,vec__126496,cx,cy,camera))
,null,null));
});})(s__126500__$1,x,xs__6292__auto__,temp__5735__auto__,vec__126496,cx,cy,camera))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((cy | (0)),((cy + (14)) | (0)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,hpointu$rts$app$visible_range_$_iter__126499(cljs.core.rest(s__126500__$1)));
} else {
var G__126743 = cljs.core.rest(s__126500__$1);
s__126500__$1 = G__126743;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((cx | (0)),((cx + (18)) | (0))));
});
hpointu.rts.app.hover_QMARK_ = (function hpointu$rts$app$hover_QMARK_(p__126505,x,y){
var map__126506 = p__126505;
var map__126506__$1 = (((((!((map__126506 == null))))?(((((map__126506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126506):map__126506);
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126506__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
hpointu.rts.app.cell_redraw = (function hpointu$rts$app$cell_redraw(p__126508){
var vec__126509 = p__126508;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126509,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126509,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),x,y], null);
});
hpointu.rts.app.redraw_world = (function hpointu$rts$app$redraw_world(p__126512){
var map__126513 = p__126512;
var map__126513__$1 = (((((!((map__126513 == null))))?(((((map__126513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126513):map__126513);
var state = map__126513__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126513__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var elems = (function (){var iter__4529__auto__ = (function hpointu$rts$app$redraw_world_$_iter__126515(s__126516){
return (new cljs.core.LazySeq(null,(function (){
var s__126516__$1 = s__126516;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__126516__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__126516__$1,x,xs__6292__auto__,temp__5735__auto__,map__126513,map__126513__$1,state,world){
return (function hpointu$rts$app$redraw_world_$_iter__126515_$_iter__126517(s__126518){
return (new cljs.core.LazySeq(null,((function (s__126516__$1,x,xs__6292__auto__,temp__5735__auto__,map__126513,map__126513__$1,state,world){
return (function (){
var s__126518__$1 = s__126518;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__126518__$1);
if(temp__5735__auto____$1){
var s__126518__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__126518__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__126518__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__126520 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__126519 = (0);
while(true){
if((i__126519 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__126519);
cljs.core.chunk_append(b__126520,hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__126744 = (i__126519 + (1));
i__126519 = G__126744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__126520),hpointu$rts$app$redraw_world_$_iter__126515_$_iter__126517(cljs.core.chunk_rest(s__126518__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__126520),null);
}
} else {
var y = cljs.core.first(s__126518__$2);
return cljs.core.cons(hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),hpointu$rts$app$redraw_world_$_iter__126515_$_iter__126517(cljs.core.rest(s__126518__$2)));
}
} else {
return null;
}
break;
}
});})(s__126516__$1,x,xs__6292__auto__,temp__5735__auto__,map__126513,map__126513__$1,state,world))
,null,null));
});})(s__126516__$1,x,xs__6292__auto__,temp__5735__auto__,map__126513,map__126513__$1,state,world))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,hpointu$rts$app$redraw_world_$_iter__126515(cljs.core.rest(s__126516__$1)));
} else {
var G__126745 = cljs.core.rest(s__126516__$1);
s__126516__$1 = G__126745;
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
hpointu.rts.app.redraw_visible = (function hpointu$rts$app$redraw_visible(p__126521){
var map__126522 = p__126521;
var map__126522__$1 = (((((!((map__126522 == null))))?(((((map__126522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126522):map__126522);
var state = map__126522__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126522__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126522__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var elems = (function (){var iter__4529__auto__ = (function hpointu$rts$app$redraw_visible_$_iter__126524(s__126525){
return (new cljs.core.LazySeq(null,(function (){
var s__126525__$1 = s__126525;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__126525__$1);
if(temp__5735__auto__){
var s__126525__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__126525__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__126525__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__126527 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__126526 = (0);
while(true){
if((i__126526 < size__4528__auto__)){
var vec__126528 = cljs.core._nth(c__4527__auto__,i__126526);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126528,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126528,(1),null);
cljs.core.chunk_append(b__126527,hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__126746 = (i__126526 + (1));
i__126526 = G__126746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__126527),hpointu$rts$app$redraw_visible_$_iter__126524(cljs.core.chunk_rest(s__126525__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__126527),null);
}
} else {
var vec__126531 = cljs.core.first(s__126525__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126531,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126531,(1),null);
return cljs.core.cons(hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),hpointu$rts$app$redraw_visible_$_iter__126524(cljs.core.rest(s__126525__$2)));
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
hpointu.rts.app.to_game_canvas = (function hpointu$rts$app$to_game_canvas(p__126534,p__126535){
var map__126536 = p__126534;
var map__126536__$1 = (((((!((map__126536 == null))))?(((((map__126536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126536):map__126536);
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126536__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__126537 = p__126535;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126537,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126537,(1),null);
var vec__126541 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126541,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126541,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE * (x - cx)),(hpointu.rts.app.SIZE * (y - cy))], null)));
});
hpointu.rts.app.to_minimap_canvas = (function hpointu$rts$app$to_minimap_canvas(p__126544,size){
var vec__126545 = p__126544;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126545,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126545,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(size * x),(size * y)], null);
});
hpointu.rts.app.to_world = (function hpointu$rts$app$to_world(var_args){
var G__126549 = arguments.length;
switch (G__126549) {
case 1:
return hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$1 = (function (pos){
return hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$2(pos,hpointu.rts.app.SIZE);
}));

(hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$2 = (function (p__126550,size){
var vec__126551 = p__126550;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126551,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126551,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / size),(y / size)], null);
}));

(hpointu.rts.app.to_world.cljs$lang$maxFixedArity = 2);

hpointu.rts.app.to_grid = (function hpointu$rts$app$to_grid(camera,pos){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core._PLUS_),camera,hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$1(pos));
});
hpointu.rts.app.unit_aabb = (function hpointu$rts$app$unit_aabb(state,p__126555){
var map__126556 = p__126555;
var map__126556__$1 = (((((!((map__126556 == null))))?(((((map__126556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126556):map__126556);
var unit = map__126556__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126556__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126556__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__126558 = hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126558,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126558,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__126554_SHARP_){
return ((5) + p1__126554_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1,(20),(20)], null)));
});
hpointu.rts.app.get_game_canvas = (function hpointu$rts$app$get_game_canvas(){
return document.getElementById("game");
});
hpointu.rts.app.get_minimap_canvas = (function hpointu$rts$app$get_minimap_canvas(){
return document.getElementById("minimap");
});
hpointu.rts.app.get_element = (function hpointu$rts$app$get_element(id){
return document.getElementById(id);
});
hpointu.rts.app.context = (function hpointu$rts$app$context(canvas_name){
return document.getElementById(canvas_name).getContext("2d");
});
hpointu.rts.app.mouse_on_element_QMARK_ = (function hpointu$rts$app$mouse_on_element_QMARK_(id){
var elem = hpointu.rts.app.get_element(id);
var vec__126561 = hpointu.rts.input.mouse_pos(elem);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126561,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126561,(1),null);
return ((((((-1) < x)) && ((x < elem.width)))) && (((((-1) < y)) && ((y < elem.height)))));
});
hpointu.rts.app.init_contexts = (function hpointu$rts$app$init_contexts(){
var minimap = hpointu.rts.app.get_minimap_canvas();
var canvas = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),hpointu.rts.app.get_game_canvas(),new cljs.core.Keyword(null,"minimap","minimap",-1428643929),minimap,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186),(function (){var G__126564 = document.createElement("canvas");
(G__126564["width"] = minimap.width);

(G__126564["height"] = minimap.height);

return G__126564;
})()], null);
return (function (selector){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),(selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(canvas) : selector.call(null,canvas)),new cljs.core.Keyword(null,"context","context",-830191113),(selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(canvas) : selector.call(null,canvas)).getContext("2d")], null);
});
});
hpointu.rts.app.draw_tile_BANG_ = (function hpointu$rts$app$draw_tile_BANG_(ctx,p__126565,x,y,size){
var map__126566 = p__126565;
var map__126566__$1 = (((((!((map__126566 == null))))?(((((map__126566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126566):map__126566);
var state = map__126566__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126566__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var tile_color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":((hpointu.rts.app.hover_QMARK_(state,x,y))?"green":"#222"
));
var vec__126568 = hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126568,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126568,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((1) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((1) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (2)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (2)),new cljs.core.Keyword(null,"fill","fill",883462889),tile_color], null));

return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((2) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((2) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (4)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (4)),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
hpointu.rts.app.update_hover = (function hpointu$rts$app$update_hover(p__126571,x,y){
var map__126572 = p__126571;
var map__126572__$1 = (((((!((map__126572 == null))))?(((((map__126572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126572):map__126572);
var state = map__126572__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126572__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126572__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126572__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__126574 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126574,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126574,(1),null);
var new_hover = ((hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$3(world,x,y))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),new_hover),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.cell_redraw,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_hover,hover], null))));
});
hpointu.rts.app.add_wall = (function hpointu$rts$app$add_wall(p__126577){
var map__126578 = p__126577;
var map__126578__$1 = (((((!((map__126578 == null))))?(((((map__126578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126578):map__126578);
var state = map__126578__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126578__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var vec__126580 = hover;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126580,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126580,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(state,new cljs.core.Keyword(null,"world","world",-418292623),hpointu.rts.core.set_world_cell,x,y,new cljs.core.Keyword(null,"w","w",354169001));
});
hpointu.rts.app.clamp_camera = (function hpointu$rts$app$clamp_camera(p__126583){
var map__126584 = p__126583;
var map__126584__$1 = (((((!((map__126584 == null))))?(((((map__126584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126584):map__126584);
var state = map__126584__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126584__$1,new cljs.core.Keyword(null,"world","world",-418292623));
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
return hpointu.rts.app.clamp_camera(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),(0)], null),cljs.core._PLUS_,(speed * dx)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),(1)], null),cljs.core._PLUS_,(speed * dy)));
});
hpointu.rts.app.select_units = (function hpointu$rts$app$select_units(p__126587){
var map__126588 = p__126587;
var map__126588__$1 = (((((!((map__126588 == null))))?(((((map__126588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126588):map__126588);
var state = map__126588__$1;
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126588__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var map__126590 = selector;
var map__126590__$1 = (((((!((map__126590 == null))))?(((((map__126590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126590):map__126590);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126590__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126590__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126590__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126590__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var vec__126591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4217__auto__ = x1;
var y__4218__auto__ = x2;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4214__auto__ = x1;
var y__4215__auto__ = x2;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
var x1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126591,(0),null);
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126591,(1),null);
var vec__126594 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4217__auto__ = y1;
var y__4218__auto__ = y2;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4214__auto__ = y1;
var y__4215__auto__ = y2;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
var y1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126594,(0),null);
var y2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126594,(1),null);
var rect = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1__$1,y1__$1,(x2__$1 - x1__$1),(y2__$1 - y1__$1)], null);
hpointu.rts.app.select_unit = (function hpointu$rts$app$select_units_$_select_unit(p__126598){
var map__126599 = p__126598;
var map__126599__$1 = (((((!((map__126599 == null))))?(((((map__126599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126599):map__126599);
var u = map__126599__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126599__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126599__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u,new cljs.core.Keyword(null,"selected?","selected?",-742502788),hpointu.rts.core.collides_QMARK_(hpointu.rts.app.unit_aabb(state,u),rect));
});

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"units","units",-533089095),(function (p1__126586_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.select_unit,p1__126586_SHARP_));
}));
});
hpointu.rts.app.end_game_left_click = (function hpointu$rts$app$end_game_left_click(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.select_units(state),new cljs.core.Keyword(null,"selector","selector",762528866)),new cljs.core.Keyword(null,"left-click","left-click",-1325204750));
});
hpointu.rts.app.end_game_right_click = (function hpointu$rts$app$end_game_right_click(p__126602){
var map__126603 = p__126602;
var map__126603__$1 = (((((!((map__126603 == null))))?(((((map__126603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126603):map__126603);
var state = map__126603__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126603__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var right_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126603__$1,new cljs.core.Keyword(null,"right-click","right-click",-1443353028));
hpointu.rts.app.set_unit_destination = (function hpointu$rts$app$end_game_right_click_$_set_unit_destination(p__126605){
var map__126606 = p__126605;
var map__126606__$1 = (((((!((map__126606 == null))))?(((((map__126606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126606):map__126606);
var unit = map__126606__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126606__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126606__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126606__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
if(cljs.core.truth_(selected_QMARK_)){
var waypoints = hpointu.rts.path.path(world,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),right_click);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(unit,new cljs.core.Keyword(null,"waypoints","waypoints",-844253224),waypoints);
} else {
return unit;
}
});

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"units","units",-533089095),(function (p1__126601_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.set_unit_destination,p1__126601_SHARP_));
})),new cljs.core.Keyword(null,"right-click","right-click",-1443353028));
});
hpointu.rts.app.handle_mouse_game = (function hpointu$rts$app$handle_mouse_game(p__126610){
var map__126611 = p__126610;
var map__126611__$1 = (((((!((map__126611 == null))))?(((((map__126611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126611):map__126611);
var state = map__126611__$1;
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126611__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126611__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var right_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126611__$1,new cljs.core.Keyword(null,"right-click","right-click",-1443353028));
var vec__126613 = hpointu.rts.input.mouse_pos(hpointu.rts.app.get_game_canvas());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126613,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126613,(1),null);
var vec__126616 = hpointu.rts.app.to_grid(camera,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var wx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126616,(0),null);
var wy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126616,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = hpointu.rts.input.mouse_pressed_QMARK_(new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(hpointu.rts.input.mouse_pressed_QMARK_(new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(selector)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"selector","selector",762528866),(function (p1__126608_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__126608_SHARP_,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y2","y2",-718691301),y], 0));
}));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"left-click","left-click",-1325204750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wx,wy], null)),new cljs.core.Keyword(null,"selector","selector",762528866),(function (p1__126609_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__126609_SHARP_,new cljs.core.Keyword(null,"x1","x1",-1863922247),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y2","y2",-718691301),y], 0));
})),new cljs.core.Keyword(null,"selected","selected",574897764));
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = hpointu.rts.input.mouse_pressed_QMARK_(new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(hpointu.rts.input.mouse_pressed_QMARK_(new cljs.core.Keyword(null,"left","left",-399115937)));
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.not(right_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"right-click","right-click",-1443353028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wx,wy], null));
} else {
return state;
}
} else {
if(cljs.core.truth_(selector)){
return hpointu.rts.app.end_game_left_click(state);
} else {
if(cljs.core.truth_(right_click)){
return hpointu.rts.app.end_game_right_click(state);
} else {
return state;
}
}

}
}
});
hpointu.rts.app.handle_mouse_minimap = (function hpointu$rts$app$handle_mouse_minimap(state){
if(cljs.core.truth_(hpointu.rts.input.mouse_pressed_QMARK_(new cljs.core.Keyword(null,"left","left",-399115937)))){
var vec__126619 = hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$2(hpointu.rts.input.mouse_pos(hpointu.rts.app.get_minimap_canvas()),(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126619,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126619,(1),null);
return hpointu.rts.app.clamp_camera(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),(0)], null),(x - (9))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),(1)], null),(y - (7))));
} else {
return state;
}
});
hpointu.rts.app.handle_mouse = (function hpointu$rts$app$handle_mouse(state){
if(hpointu.rts.app.mouse_on_element_QMARK_("minimap")){
return hpointu.rts.app.handle_mouse_minimap(state);
} else {
if(hpointu.rts.app.mouse_on_element_QMARK_("game")){
return hpointu.rts.app.handle_mouse_game(state);
} else {
return state;

}
}
});
hpointu.rts.app.handle_keys = (function hpointu$rts$app$handle_keys(p__126622){
var map__126623 = p__126622;
var map__126623__$1 = (((((!((map__126623 == null))))?(((((map__126623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126623):map__126623);
var state = map__126623__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126623__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var G__126625 = state;
var G__126625__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = hover;
if(cljs.core.truth_(and__4115__auto__)){
return hpointu.rts.input.key_pressed_QMARK_("KeyW");
} else {
return and__4115__auto__;
}
})())?hpointu.rts.app.add_wall(G__126625):G__126625);
if(cljs.core.truth_(cljs.core.some(hpointu.rts.input.key_pressed_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrowUp",null,"ArrowDown",null,"ArrowRight",null,"ArrowLeft",null], null), null)))){
return hpointu.rts.app.move_camera(G__126625__$1,((hpointu.rts.input.key_pressed_QMARK_("ArrowLeft"))?(-1):((hpointu.rts.input.key_pressed_QMARK_("ArrowRight"))?(1):(0)
)),((hpointu.rts.input.key_pressed_QMARK_("ArrowUp"))?(-1):((hpointu.rts.input.key_pressed_QMARK_("ArrowDown"))?(1):(0)
)));
} else {
return G__126625__$1;
}
});
hpointu.rts.app.move_units = (function hpointu$rts$app$move_units(p__126627,dt){
var map__126628 = p__126627;
var map__126628__$1 = (((((!((map__126628 == null))))?(((((map__126628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126628):map__126628);
var state = map__126628__$1;
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126628__$1,new cljs.core.Keyword(null,"units","units",-533089095));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__126626_SHARP_){
return hpointu.rts.core.walk(p1__126626_SHARP_,dt);
}),units)));
});
hpointu.rts.app.update_state = (function hpointu$rts$app$update_state(p__126630,dt){
var map__126631 = p__126630;
var map__126631__$1 = (((((!((map__126631 == null))))?(((((map__126631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126631):map__126631);
var state = map__126631__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126631__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126631__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));

var canvas = hpointu.rts.app.get_game_canvas();
var vec__126633 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core._PLUS_),camera,hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$1(hpointu.rts.input.mouse_pos(canvas)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126633,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126633,(1),null);
return hpointu.rts.app.redraw_visible(hpointu.rts.app.handle_mouse(hpointu.rts.app.handle_keys(hpointu.rts.app.update_hover(hpointu.rts.app.move_units(state,dt),x,y))));
});
hpointu.rts.app.draw_game_elem_BANG_ = (function hpointu$rts$app$draw_game_elem_BANG_(state,p__126636){
var vec__126637 = p__126636;
var seq__126638 = cljs.core.seq(vec__126637);
var first__126639 = cljs.core.first(seq__126638);
var seq__126638__$1 = cljs.core.next(seq__126638);
var update_type = first__126639;
var args = seq__126638__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_type,new cljs.core.Keyword(null,"cell","cell",764245084))){
var vec__126640 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126640,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126640,(1),null);
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
hpointu.rts.app.draw_minimap_elem_BANG_ = (function hpointu$rts$app$draw_minimap_elem_BANG_(ctx,p__126643,p__126644){
var map__126645 = p__126643;
var map__126645__$1 = (((((!((map__126645 == null))))?(((((map__126645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126645):map__126645);
var state = map__126645__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126645__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var vec__126646 = p__126644;
var seq__126647 = cljs.core.seq(vec__126646);
var first__126648 = cljs.core.first(seq__126647);
var seq__126647__$1 = cljs.core.next(seq__126647);
var update_type = first__126648;
var args = seq__126647__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_type,new cljs.core.Keyword(null,"cell","cell",764245084))){
var size = (3);
var vec__126650 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126650,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126650,(1),null);
var color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":"#111");
var vec__126653 = hpointu.rts.app.to_minimap_canvas(args,size);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126653,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126653,(1),null);
return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"w","w",354169001),size,new cljs.core.Keyword(null,"h","h",1109658740),size,new cljs.core.Keyword(null,"fill","fill",883462889),color], null));
} else {
return null;
}
});
hpointu.rts.app.draw_BANG_ = (function hpointu$rts$app$draw_BANG_(p__126656,contexts){
var map__126657 = p__126656;
var map__126657__$1 = (((((!((map__126657 == null))))?(((((map__126657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126657):map__126657);
var state = map__126657__$1;
var world_updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126657__$1,new cljs.core.Keyword(null,"world-updates","world-updates",1616740218));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126657__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126657__$1,new cljs.core.Keyword(null,"units","units",-533089095));
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126657__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var seq__126659_126748 = cljs.core.seq(world_updates);
var chunk__126660_126749 = null;
var count__126661_126750 = (0);
var i__126662_126751 = (0);
while(true){
if((i__126662_126751 < count__126661_126750)){
var wu_126752 = chunk__126660_126749.cljs$core$IIndexed$_nth$arity$2(null,i__126662_126751);
hpointu.rts.app.draw_game_elem_BANG_(state,wu_126752);

hpointu.rts.app.draw_minimap_elem_BANG_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),state,wu_126752);


var G__126753 = seq__126659_126748;
var G__126754 = chunk__126660_126749;
var G__126755 = count__126661_126750;
var G__126756 = (i__126662_126751 + (1));
seq__126659_126748 = G__126753;
chunk__126660_126749 = G__126754;
count__126661_126750 = G__126755;
i__126662_126751 = G__126756;
continue;
} else {
var temp__5735__auto___126757 = cljs.core.seq(seq__126659_126748);
if(temp__5735__auto___126757){
var seq__126659_126758__$1 = temp__5735__auto___126757;
if(cljs.core.chunked_seq_QMARK_(seq__126659_126758__$1)){
var c__4556__auto___126759 = cljs.core.chunk_first(seq__126659_126758__$1);
var G__126760 = cljs.core.chunk_rest(seq__126659_126758__$1);
var G__126761 = c__4556__auto___126759;
var G__126762 = cljs.core.count(c__4556__auto___126759);
var G__126763 = (0);
seq__126659_126748 = G__126760;
chunk__126660_126749 = G__126761;
count__126661_126750 = G__126762;
i__126662_126751 = G__126763;
continue;
} else {
var wu_126764 = cljs.core.first(seq__126659_126758__$1);
hpointu.rts.app.draw_game_elem_BANG_(state,wu_126764);

hpointu.rts.app.draw_minimap_elem_BANG_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),state,wu_126764);


var G__126765 = cljs.core.next(seq__126659_126758__$1);
var G__126766 = null;
var G__126767 = (0);
var G__126768 = (0);
seq__126659_126748 = G__126765;
chunk__126660_126749 = G__126766;
count__126661_126750 = G__126767;
i__126662_126751 = G__126768;
continue;
}
} else {
}
}
break;
}

var seq__126663_126769 = cljs.core.seq(units);
var chunk__126665_126770 = null;
var count__126666_126771 = (0);
var i__126667_126772 = (0);
while(true){
if((i__126667_126772 < count__126666_126771)){
var map__126685_126773 = chunk__126665_126770.cljs$core$IIndexed$_nth$arity$2(null,i__126667_126772);
var map__126685_126774__$1 = (((((!((map__126685_126773 == null))))?(((((map__126685_126773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126685_126773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126685_126773):map__126685_126773);
var u_126775 = map__126685_126774__$1;
var x_126776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126685_126774__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_126777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126685_126774__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__126778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126685_126774__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
if(hpointu.rts.app.visible_QMARK_(state,x_126776,y_126777)){
var vec__126687_126779 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_126776,y_126777], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE / (2)),(hpointu.rts.app.SIZE / (2))], null));
var x_126780__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126687_126779,(0),null);
var y_126781__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126687_126779,(1),null);
var color_126782 = "#0cf";
if(cljs.core.truth_(selected_QMARK__126778)){
var vec__126690_126783 = hpointu.rts.app.unit_aabb(state,u_126775);
var x_126784__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126690_126783,(0),null);
var y_126785__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126690_126783,(1),null);
var w_126786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126690_126783,(2),null);
var h_126787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126690_126783,(3),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),(x_126784__$2 - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y_126785__$2 - (3)),new cljs.core.Keyword(null,"w","w",354169001),(w_126786 + (6)),new cljs.core.Keyword(null,"h","h",1109658740),(h_126787 + (6)),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null));
} else {
}

hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),x_126780__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_126781__$1,new cljs.core.Keyword(null,"r","r",-471384190),(12),new cljs.core.Keyword(null,"fill","fill",883462889),color_126782], null));


var G__126788 = seq__126663_126769;
var G__126789 = chunk__126665_126770;
var G__126790 = count__126666_126771;
var G__126791 = (i__126667_126772 + (1));
seq__126663_126769 = G__126788;
chunk__126665_126770 = G__126789;
count__126666_126771 = G__126790;
i__126667_126772 = G__126791;
continue;
} else {
var G__126792 = seq__126663_126769;
var G__126793 = chunk__126665_126770;
var G__126794 = count__126666_126771;
var G__126795 = (i__126667_126772 + (1));
seq__126663_126769 = G__126792;
chunk__126665_126770 = G__126793;
count__126666_126771 = G__126794;
i__126667_126772 = G__126795;
continue;
}
} else {
var temp__5735__auto___126796 = cljs.core.seq(seq__126663_126769);
if(temp__5735__auto___126796){
var seq__126663_126797__$1 = temp__5735__auto___126796;
if(cljs.core.chunked_seq_QMARK_(seq__126663_126797__$1)){
var c__4556__auto___126798 = cljs.core.chunk_first(seq__126663_126797__$1);
var G__126799 = cljs.core.chunk_rest(seq__126663_126797__$1);
var G__126800 = c__4556__auto___126798;
var G__126801 = cljs.core.count(c__4556__auto___126798);
var G__126802 = (0);
seq__126663_126769 = G__126799;
chunk__126665_126770 = G__126800;
count__126666_126771 = G__126801;
i__126667_126772 = G__126802;
continue;
} else {
var map__126693_126803 = cljs.core.first(seq__126663_126797__$1);
var map__126693_126804__$1 = (((((!((map__126693_126803 == null))))?(((((map__126693_126803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126693_126803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126693_126803):map__126693_126803);
var u_126805 = map__126693_126804__$1;
var x_126806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126693_126804__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_126807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126693_126804__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__126808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126693_126804__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
if(hpointu.rts.app.visible_QMARK_(state,x_126806,y_126807)){
var vec__126695_126809 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_126806,y_126807], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE / (2)),(hpointu.rts.app.SIZE / (2))], null));
var x_126810__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126695_126809,(0),null);
var y_126811__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126695_126809,(1),null);
var color_126812 = "#0cf";
if(cljs.core.truth_(selected_QMARK__126808)){
var vec__126698_126813 = hpointu.rts.app.unit_aabb(state,u_126805);
var x_126814__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126698_126813,(0),null);
var y_126815__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126698_126813,(1),null);
var w_126816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126698_126813,(2),null);
var h_126817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126698_126813,(3),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),(x_126814__$2 - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y_126815__$2 - (3)),new cljs.core.Keyword(null,"w","w",354169001),(w_126816 + (6)),new cljs.core.Keyword(null,"h","h",1109658740),(h_126817 + (6)),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null));
} else {
}

hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),x_126810__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_126811__$1,new cljs.core.Keyword(null,"r","r",-471384190),(12),new cljs.core.Keyword(null,"fill","fill",883462889),color_126812], null));


var G__126818 = cljs.core.next(seq__126663_126797__$1);
var G__126819 = null;
var G__126820 = (0);
var G__126821 = (0);
seq__126663_126769 = G__126818;
chunk__126665_126770 = G__126819;
count__126666_126771 = G__126820;
i__126667_126772 = G__126821;
continue;
} else {
var G__126822 = cljs.core.next(seq__126663_126797__$1);
var G__126823 = null;
var G__126824 = (0);
var G__126825 = (0);
seq__126663_126769 = G__126822;
chunk__126665_126770 = G__126823;
count__126666_126771 = G__126824;
i__126667_126772 = G__126825;
continue;
}
}
} else {
}
}
break;
}

var temp__5733__auto___126826 = selector;
if(cljs.core.truth_(temp__5733__auto___126826)){
var map__126701_126827 = temp__5733__auto___126826;
var map__126701_126828__$1 = (((((!((map__126701_126827 == null))))?(((((map__126701_126827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126701_126827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126701_126827):map__126701_126827);
var x1_126829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126701_126828__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1_126830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126701_126828__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2_126831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126701_126828__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2_126832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126701_126828__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),x1_126829,new cljs.core.Keyword(null,"y","y",-1757859776),y1_126830,new cljs.core.Keyword(null,"w","w",354169001),(x2_126831 - x1_126829),new cljs.core.Keyword(null,"h","h",1109658740),(y2_126832 - y1_126830),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null));
} else {
}

var vec__126703_126833 = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(state);
var cx_126834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126703_126833,(0),null);
var cy_126835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126703_126833,(1),null);
var mmap_126836 = (contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap","minimap",-1428643929)) : contexts.call(null,new cljs.core.Keyword(null,"minimap","minimap",-1428643929)));
new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(mmap_126836).clearRect((0),(0),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(mmap_126836).width,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(mmap_126836).height);

new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(mmap_126836).drawImage(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),(0),(0));

var seq__126706_126837 = cljs.core.seq(units);
var chunk__126707_126838 = null;
var count__126708_126839 = (0);
var i__126709_126840 = (0);
while(true){
if((i__126709_126840 < count__126708_126839)){
var map__126720_126841 = chunk__126707_126838.cljs$core$IIndexed$_nth$arity$2(null,i__126709_126840);
var map__126720_126842__$1 = (((((!((map__126720_126841 == null))))?(((((map__126720_126841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126720_126841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126720_126841):map__126720_126841);
var x_126843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126720_126842__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_126844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126720_126842__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__126845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126720_126842__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var vec__126722_126846 = hpointu.rts.app.to_minimap_canvas(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_126843,y_126844], null),(3));
var x_126847__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126722_126846,(0),null);
var y_126848__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126722_126846,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_126847__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_126848__$1,new cljs.core.Keyword(null,"w","w",354169001),(3),new cljs.core.Keyword(null,"h","h",1109658740),(3),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(selected_QMARK__126845)?"yellow":"#0cf")], null));


var G__126849 = seq__126706_126837;
var G__126850 = chunk__126707_126838;
var G__126851 = count__126708_126839;
var G__126852 = (i__126709_126840 + (1));
seq__126706_126837 = G__126849;
chunk__126707_126838 = G__126850;
count__126708_126839 = G__126851;
i__126709_126840 = G__126852;
continue;
} else {
var temp__5735__auto___126853 = cljs.core.seq(seq__126706_126837);
if(temp__5735__auto___126853){
var seq__126706_126854__$1 = temp__5735__auto___126853;
if(cljs.core.chunked_seq_QMARK_(seq__126706_126854__$1)){
var c__4556__auto___126855 = cljs.core.chunk_first(seq__126706_126854__$1);
var G__126856 = cljs.core.chunk_rest(seq__126706_126854__$1);
var G__126857 = c__4556__auto___126855;
var G__126858 = cljs.core.count(c__4556__auto___126855);
var G__126859 = (0);
seq__126706_126837 = G__126856;
chunk__126707_126838 = G__126857;
count__126708_126839 = G__126858;
i__126709_126840 = G__126859;
continue;
} else {
var map__126725_126860 = cljs.core.first(seq__126706_126854__$1);
var map__126725_126861__$1 = (((((!((map__126725_126860 == null))))?(((((map__126725_126860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126725_126860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126725_126860):map__126725_126860);
var x_126862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126725_126861__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_126863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126725_126861__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__126864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126725_126861__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var vec__126727_126865 = hpointu.rts.app.to_minimap_canvas(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_126862,y_126863], null),(3));
var x_126866__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126727_126865,(0),null);
var y_126867__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126727_126865,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_126866__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_126867__$1,new cljs.core.Keyword(null,"w","w",354169001),(3),new cljs.core.Keyword(null,"h","h",1109658740),(3),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(selected_QMARK__126864)?"yellow":"#0cf")], null));


var G__126868 = cljs.core.next(seq__126706_126854__$1);
var G__126869 = null;
var G__126870 = (0);
var G__126871 = (0);
seq__126706_126837 = G__126868;
chunk__126707_126838 = G__126869;
count__126708_126839 = G__126870;
i__126709_126840 = G__126871;
continue;
}
} else {
}
}
break;
}

hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),((3) * cx_126834),new cljs.core.Keyword(null,"y","y",-1757859776),((3) * cy_126835),new cljs.core.Keyword(null,"w","w",354169001),(53),new cljs.core.Keyword(null,"h","h",1109658740),(42),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.PersistentVector.EMPTY);
});
hpointu.rts.app.tick_BANG_ = (function hpointu$rts$app$tick_BANG_(contexts){
var t = Date.now();
var dt = (t - cljs.core.deref(hpointu.rts.app.current_time));
var new_state = hpointu.rts.app.draw_BANG_(hpointu.rts.app.update_state(cljs.core.deref(hpointu.rts.app.state),dt),contexts);
cljs.core.reset_BANG_(hpointu.rts.app.current_time,t);

cljs.core.reset_BANG_(hpointu.rts.app.state,new_state);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.frame_counter,cljs.core.inc);
});
hpointu.rts.app.get_debug_content = (function hpointu$rts$app$get_debug_content(){
return ["FPS: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hpointu.rts.app.fps))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hpointu.rts.input.keymap))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hpointu.rts.input.mouse)),"\n",(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__126734_126872 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__126735_126873 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__126736_126874 = true;
var _STAR_print_fn_STAR__temp_val__126737_126875 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__126736_126874);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__126737_126875);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hpointu.rts.app.state),new cljs.core.Keyword(null,"world","world",-418292623)),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__126735_126873);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__126734_126872);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()].join('');
});
hpointu.rts.app.rts_app = (function hpointu$rts$app$rts_app(props){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 5px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black"], null)], null),"RTS Demo",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.7em",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"mono",new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(90)], null)], null),"- Press W on the map to place a wall"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column wrap"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"minimap",new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"height","height",1025178622),(223),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#111",new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"height","height",1025178622),(223)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"mono",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),"TODO:"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Minimap"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Camera movement"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Entities"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Mouse clicks..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Path finding"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Mouse mode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Stop scrolling on keys"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Gameplay elements"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"game",new cljs.core.Keyword(null,"width","width",-384071477),(611),new cljs.core.Keyword(null,"height","height",1025178622),(480),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(611),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820)], null)], null),hpointu.rts.app.get_debug_content()], null)], null);
});
hpointu.rts.app.timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hpointu.rts.app.stop = (function hpointu$rts$app$stop(){
var seq__126738_126876 = cljs.core.seq(cljs.core.deref(hpointu.rts.app.timers));
var chunk__126739_126877 = null;
var count__126740_126878 = (0);
var i__126741_126879 = (0);
while(true){
if((i__126741_126879 < count__126740_126878)){
var t_126880 = chunk__126739_126877.cljs$core$IIndexed$_nth$arity$2(null,i__126741_126879);
clearInterval(t_126880);


var G__126881 = seq__126738_126876;
var G__126882 = chunk__126739_126877;
var G__126883 = count__126740_126878;
var G__126884 = (i__126741_126879 + (1));
seq__126738_126876 = G__126881;
chunk__126739_126877 = G__126882;
count__126740_126878 = G__126883;
i__126741_126879 = G__126884;
continue;
} else {
var temp__5735__auto___126885 = cljs.core.seq(seq__126738_126876);
if(temp__5735__auto___126885){
var seq__126738_126886__$1 = temp__5735__auto___126885;
if(cljs.core.chunked_seq_QMARK_(seq__126738_126886__$1)){
var c__4556__auto___126887 = cljs.core.chunk_first(seq__126738_126886__$1);
var G__126888 = cljs.core.chunk_rest(seq__126738_126886__$1);
var G__126889 = c__4556__auto___126887;
var G__126890 = cljs.core.count(c__4556__auto___126887);
var G__126891 = (0);
seq__126738_126876 = G__126888;
chunk__126739_126877 = G__126889;
count__126740_126878 = G__126890;
i__126741_126879 = G__126891;
continue;
} else {
var t_126892 = cljs.core.first(seq__126738_126886__$1);
clearInterval(t_126892);


var G__126893 = cljs.core.next(seq__126738_126886__$1);
var G__126894 = null;
var G__126895 = (0);
var G__126896 = (0);
seq__126738_126876 = G__126893;
chunk__126739_126877 = G__126894;
count__126740_126878 = G__126895;
i__126741_126879 = G__126896;
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

var contexts_126897 = hpointu.rts.app.init_contexts();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hpointu.rts.app.timers,cljs.core.conj,setInterval((function (){
return hpointu.rts.app.tick_BANG_(contexts_126897);
}),16.66));

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
