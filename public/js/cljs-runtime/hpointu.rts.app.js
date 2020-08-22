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
hpointu.rts.app.visible_QMARK_ = (function hpointu$rts$app$visible_QMARK_(p__128534,x,y){
var map__128535 = p__128534;
var map__128535__$1 = (((((!((map__128535 == null))))?(((((map__128535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128535):map__128535);
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128535__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__128537 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128537,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128537,(1),null);
return (((x < (cx + (18)))) && ((y < (cy + (14)))));
});
hpointu.rts.app.visible_range = (function hpointu$rts$app$visible_range(p__128540){
var vec__128541 = p__128540;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128541,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128541,(1),null);
var camera = vec__128541;
var iter__4529__auto__ = (function hpointu$rts$app$visible_range_$_iter__128544(s__128545){
return (new cljs.core.LazySeq(null,(function (){
var s__128545__$1 = s__128545;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__128545__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__128545__$1,x,xs__6292__auto__,temp__5735__auto__,vec__128541,cx,cy,camera){
return (function hpointu$rts$app$visible_range_$_iter__128544_$_iter__128546(s__128547){
return (new cljs.core.LazySeq(null,((function (s__128545__$1,x,xs__6292__auto__,temp__5735__auto__,vec__128541,cx,cy,camera){
return (function (){
var s__128547__$1 = s__128547;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__128547__$1);
if(temp__5735__auto____$1){
var s__128547__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__128547__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__128547__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__128549 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__128548 = (0);
while(true){
if((i__128548 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__128548);
cljs.core.chunk_append(b__128549,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__128787 = (i__128548 + (1));
i__128548 = G__128787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__128549),hpointu$rts$app$visible_range_$_iter__128544_$_iter__128546(cljs.core.chunk_rest(s__128547__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__128549),null);
}
} else {
var y = cljs.core.first(s__128547__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),hpointu$rts$app$visible_range_$_iter__128544_$_iter__128546(cljs.core.rest(s__128547__$2)));
}
} else {
return null;
}
break;
}
});})(s__128545__$1,x,xs__6292__auto__,temp__5735__auto__,vec__128541,cx,cy,camera))
,null,null));
});})(s__128545__$1,x,xs__6292__auto__,temp__5735__auto__,vec__128541,cx,cy,camera))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((cy | (0)),((cy + (14)) | (0)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,hpointu$rts$app$visible_range_$_iter__128544(cljs.core.rest(s__128545__$1)));
} else {
var G__128788 = cljs.core.rest(s__128545__$1);
s__128545__$1 = G__128788;
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
hpointu.rts.app.hover_QMARK_ = (function hpointu$rts$app$hover_QMARK_(p__128550,x,y){
var map__128551 = p__128550;
var map__128551__$1 = (((((!((map__128551 == null))))?(((((map__128551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128551):map__128551);
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128551__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
hpointu.rts.app.cell_redraw = (function hpointu$rts$app$cell_redraw(p__128553){
var vec__128554 = p__128553;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128554,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128554,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),x,y], null);
});
hpointu.rts.app.redraw_world = (function hpointu$rts$app$redraw_world(p__128557){
var map__128558 = p__128557;
var map__128558__$1 = (((((!((map__128558 == null))))?(((((map__128558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128558):map__128558);
var state = map__128558__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128558__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var elems = (function (){var iter__4529__auto__ = (function hpointu$rts$app$redraw_world_$_iter__128560(s__128561){
return (new cljs.core.LazySeq(null,(function (){
var s__128561__$1 = s__128561;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__128561__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__128561__$1,x,xs__6292__auto__,temp__5735__auto__,map__128558,map__128558__$1,state,world){
return (function hpointu$rts$app$redraw_world_$_iter__128560_$_iter__128562(s__128563){
return (new cljs.core.LazySeq(null,((function (s__128561__$1,x,xs__6292__auto__,temp__5735__auto__,map__128558,map__128558__$1,state,world){
return (function (){
var s__128563__$1 = s__128563;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__128563__$1);
if(temp__5735__auto____$1){
var s__128563__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__128563__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__128563__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__128565 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__128564 = (0);
while(true){
if((i__128564 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__128564);
cljs.core.chunk_append(b__128565,hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__128789 = (i__128564 + (1));
i__128564 = G__128789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__128565),hpointu$rts$app$redraw_world_$_iter__128560_$_iter__128562(cljs.core.chunk_rest(s__128563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__128565),null);
}
} else {
var y = cljs.core.first(s__128563__$2);
return cljs.core.cons(hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),hpointu$rts$app$redraw_world_$_iter__128560_$_iter__128562(cljs.core.rest(s__128563__$2)));
}
} else {
return null;
}
break;
}
});})(s__128561__$1,x,xs__6292__auto__,temp__5735__auto__,map__128558,map__128558__$1,state,world))
,null,null));
});})(s__128561__$1,x,xs__6292__auto__,temp__5735__auto__,map__128558,map__128558__$1,state,world))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,hpointu$rts$app$redraw_world_$_iter__128560(cljs.core.rest(s__128561__$1)));
} else {
var G__128790 = cljs.core.rest(s__128561__$1);
s__128561__$1 = G__128790;
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
hpointu.rts.app.redraw_visible = (function hpointu$rts$app$redraw_visible(p__128566){
var map__128567 = p__128566;
var map__128567__$1 = (((((!((map__128567 == null))))?(((((map__128567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128567):map__128567);
var state = map__128567__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128567__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128567__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var elems = (function (){var iter__4529__auto__ = (function hpointu$rts$app$redraw_visible_$_iter__128569(s__128570){
return (new cljs.core.LazySeq(null,(function (){
var s__128570__$1 = s__128570;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__128570__$1);
if(temp__5735__auto__){
var s__128570__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__128570__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__128570__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__128572 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__128571 = (0);
while(true){
if((i__128571 < size__4528__auto__)){
var vec__128573 = cljs.core._nth(c__4527__auto__,i__128571);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128573,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128573,(1),null);
cljs.core.chunk_append(b__128572,hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__128791 = (i__128571 + (1));
i__128571 = G__128791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__128572),hpointu$rts$app$redraw_visible_$_iter__128569(cljs.core.chunk_rest(s__128570__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__128572),null);
}
} else {
var vec__128576 = cljs.core.first(s__128570__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128576,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128576,(1),null);
return cljs.core.cons(hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),hpointu$rts$app$redraw_visible_$_iter__128569(cljs.core.rest(s__128570__$2)));
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
hpointu.rts.app.to_game_canvas = (function hpointu$rts$app$to_game_canvas(p__128579,p__128580){
var map__128581 = p__128579;
var map__128581__$1 = (((((!((map__128581 == null))))?(((((map__128581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128581):map__128581);
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128581__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__128582 = p__128580;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128582,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128582,(1),null);
var vec__128586 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128586,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128586,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE * (x - cx)),(hpointu.rts.app.SIZE * (y - cy))], null)));
});
hpointu.rts.app.to_minimap_canvas = (function hpointu$rts$app$to_minimap_canvas(p__128589,size){
var vec__128590 = p__128589;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128590,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128590,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(size * x),(size * y)], null);
});
hpointu.rts.app.to_world = (function hpointu$rts$app$to_world(var_args){
var G__128594 = arguments.length;
switch (G__128594) {
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

(hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$2 = (function (p__128595,size){
var vec__128596 = p__128595;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128596,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128596,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / size),(y / size)], null);
}));

(hpointu.rts.app.to_world.cljs$lang$maxFixedArity = 2);

hpointu.rts.app.to_grid = (function hpointu$rts$app$to_grid(camera,pos){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core._PLUS_),camera,hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$1(pos));
});
hpointu.rts.app.unit_aabb = (function hpointu$rts$app$unit_aabb(state,p__128600){
var map__128601 = p__128600;
var map__128601__$1 = (((((!((map__128601 == null))))?(((((map__128601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128601):map__128601);
var unit = map__128601__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128601__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128601__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__128603 = hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128603,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128603,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__128599_SHARP_){
return ((5) + p1__128599_SHARP_);
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
var vec__128606 = hpointu.rts.input.mouse_pos(elem);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128606,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128606,(1),null);
return ((((((-1) < x)) && ((x < elem.width)))) && (((((-1) < y)) && ((y < elem.height)))));
});
hpointu.rts.app.init_contexts = (function hpointu$rts$app$init_contexts(){
var minimap = hpointu.rts.app.get_minimap_canvas();
var canvas = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),hpointu.rts.app.get_game_canvas(),new cljs.core.Keyword(null,"minimap","minimap",-1428643929),minimap,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186),(function (){var G__128609 = document.createElement("canvas");
(G__128609["width"] = minimap.width);

(G__128609["height"] = minimap.height);

return G__128609;
})()], null);
return (function (selector){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),(selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(canvas) : selector.call(null,canvas)),new cljs.core.Keyword(null,"context","context",-830191113),(selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(canvas) : selector.call(null,canvas)).getContext("2d")], null);
});
});
hpointu.rts.app.draw_tile_BANG_ = (function hpointu$rts$app$draw_tile_BANG_(ctx,p__128610,x,y,size){
var map__128611 = p__128610;
var map__128611__$1 = (((((!((map__128611 == null))))?(((((map__128611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128611):map__128611);
var state = map__128611__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128611__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var tile_color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":((hpointu.rts.app.hover_QMARK_(state,x,y))?"green":"#222"
));
var vec__128613 = hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128613,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128613,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((1) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((1) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (2)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (2)),new cljs.core.Keyword(null,"fill","fill",883462889),tile_color], null));

return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((2) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((2) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (4)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (4)),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
hpointu.rts.app.update_hover = (function hpointu$rts$app$update_hover(p__128616,x,y){
var map__128617 = p__128616;
var map__128617__$1 = (((((!((map__128617 == null))))?(((((map__128617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128617):map__128617);
var state = map__128617__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128617__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128617__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128617__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__128619 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128619,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128619,(1),null);
var new_hover = ((hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$3(world,x,y))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),new_hover),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.cell_redraw,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_hover,hover], null))));
});
hpointu.rts.app.add_wall = (function hpointu$rts$app$add_wall(p__128622){
var map__128623 = p__128622;
var map__128623__$1 = (((((!((map__128623 == null))))?(((((map__128623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128623):map__128623);
var state = map__128623__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128623__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var vec__128625 = hover;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128625,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128625,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(state,new cljs.core.Keyword(null,"world","world",-418292623),hpointu.rts.core.set_world_cell,x,y,new cljs.core.Keyword(null,"w","w",354169001));
});
hpointu.rts.app.clamp_camera = (function hpointu$rts$app$clamp_camera(p__128628){
var map__128629 = p__128628;
var map__128629__$1 = (((((!((map__128629 == null))))?(((((map__128629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128629):map__128629);
var state = map__128629__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128629__$1,new cljs.core.Keyword(null,"world","world",-418292623));
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
hpointu.rts.app.select_units = (function hpointu$rts$app$select_units(p__128632){
var map__128633 = p__128632;
var map__128633__$1 = (((((!((map__128633 == null))))?(((((map__128633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128633):map__128633);
var state = map__128633__$1;
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128633__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var map__128635 = selector;
var map__128635__$1 = (((((!((map__128635 == null))))?(((((map__128635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128635):map__128635);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128635__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128635__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128635__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128635__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var vec__128636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4217__auto__ = x1;
var y__4218__auto__ = x2;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4214__auto__ = x1;
var y__4215__auto__ = x2;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
var x1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128636,(0),null);
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128636,(1),null);
var vec__128639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4217__auto__ = y1;
var y__4218__auto__ = y2;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4214__auto__ = y1;
var y__4215__auto__ = y2;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
var y1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128639,(0),null);
var y2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128639,(1),null);
var rect = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1__$1,y1__$1,(x2__$1 - x1__$1),(y2__$1 - y1__$1)], null);
hpointu.rts.app.select_unit = (function hpointu$rts$app$select_units_$_select_unit(p__128643){
var map__128644 = p__128643;
var map__128644__$1 = (((((!((map__128644 == null))))?(((((map__128644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128644):map__128644);
var u = map__128644__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128644__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128644__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u,new cljs.core.Keyword(null,"selected?","selected?",-742502788),hpointu.rts.core.collides_QMARK_(hpointu.rts.app.unit_aabb(state,u),rect));
});

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"units","units",-533089095),(function (p1__128631_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.select_unit,p1__128631_SHARP_));
}));
});
hpointu.rts.app.end_game_left_click = (function hpointu$rts$app$end_game_left_click(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.select_units(state),new cljs.core.Keyword(null,"selector","selector",762528866)),new cljs.core.Keyword(null,"left-click","left-click",-1325204750));
});
hpointu.rts.app.end_game_right_click = (function hpointu$rts$app$end_game_right_click(p__128647){
var map__128648 = p__128647;
var map__128648__$1 = (((((!((map__128648 == null))))?(((((map__128648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128648):map__128648);
var state = map__128648__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128648__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var right_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128648__$1,new cljs.core.Keyword(null,"right-click","right-click",-1443353028));
hpointu.rts.app.set_unit_destination = (function hpointu$rts$app$end_game_right_click_$_set_unit_destination(p__128650){
var map__128651 = p__128650;
var map__128651__$1 = (((((!((map__128651 == null))))?(((((map__128651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128651):map__128651);
var unit = map__128651__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128651__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128651__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128651__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
if(cljs.core.truth_(selected_QMARK_)){
var waypoints = hpointu.rts.path.path(world,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),right_click);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(unit,new cljs.core.Keyword(null,"waypoints","waypoints",-844253224),waypoints);
} else {
return unit;
}
});

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"units","units",-533089095),(function (p1__128646_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.set_unit_destination,p1__128646_SHARP_));
})),new cljs.core.Keyword(null,"right-click","right-click",-1443353028));
});
hpointu.rts.app.handle_mouse_game = (function hpointu$rts$app$handle_mouse_game(p__128655){
var map__128656 = p__128655;
var map__128656__$1 = (((((!((map__128656 == null))))?(((((map__128656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128656):map__128656);
var state = map__128656__$1;
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128656__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128656__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var right_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128656__$1,new cljs.core.Keyword(null,"right-click","right-click",-1443353028));
var vec__128658 = hpointu.rts.input.mouse_pos(hpointu.rts.app.get_game_canvas());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128658,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128658,(1),null);
var vec__128661 = hpointu.rts.app.to_grid(camera,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var wx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128661,(0),null);
var wy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128661,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = hpointu.rts.input.mouse_pressed_QMARK_(new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(hpointu.rts.input.mouse_pressed_QMARK_(new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(selector)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"selector","selector",762528866),(function (p1__128653_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__128653_SHARP_,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y2","y2",-718691301),y], 0));
}));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"left-click","left-click",-1325204750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wx,wy], null)),new cljs.core.Keyword(null,"selector","selector",762528866),(function (p1__128654_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__128654_SHARP_,new cljs.core.Keyword(null,"x1","x1",-1863922247),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y2","y2",-718691301),y], 0));
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
var vec__128664 = hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$2(hpointu.rts.input.mouse_pos(hpointu.rts.app.get_minimap_canvas()),(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128664,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128664,(1),null);
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
hpointu.rts.app.handle_keys = (function hpointu$rts$app$handle_keys(p__128667){
var map__128668 = p__128667;
var map__128668__$1 = (((((!((map__128668 == null))))?(((((map__128668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128668):map__128668);
var state = map__128668__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128668__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var G__128670 = state;
var G__128670__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = hover;
if(cljs.core.truth_(and__4115__auto__)){
return hpointu.rts.input.key_pressed_QMARK_("KeyW");
} else {
return and__4115__auto__;
}
})())?hpointu.rts.app.add_wall(G__128670):G__128670);
if(cljs.core.truth_(cljs.core.some(hpointu.rts.input.key_pressed_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrowUp",null,"ArrowDown",null,"ArrowRight",null,"ArrowLeft",null], null), null)))){
return hpointu.rts.app.move_camera(G__128670__$1,((hpointu.rts.input.key_pressed_QMARK_("ArrowLeft"))?(-1):((hpointu.rts.input.key_pressed_QMARK_("ArrowRight"))?(1):(0)
)),((hpointu.rts.input.key_pressed_QMARK_("ArrowUp"))?(-1):((hpointu.rts.input.key_pressed_QMARK_("ArrowDown"))?(1):(0)
)));
} else {
return G__128670__$1;
}
});
hpointu.rts.app.move_units = (function hpointu$rts$app$move_units(p__128672,dt){
var map__128673 = p__128672;
var map__128673__$1 = (((((!((map__128673 == null))))?(((((map__128673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128673):map__128673);
var state = map__128673__$1;
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128673__$1,new cljs.core.Keyword(null,"units","units",-533089095));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__128671_SHARP_){
return hpointu.rts.core.walk(p1__128671_SHARP_,dt);
}),units)));
});
hpointu.rts.app.update_state = (function hpointu$rts$app$update_state(p__128675,dt){
var map__128676 = p__128675;
var map__128676__$1 = (((((!((map__128676 == null))))?(((((map__128676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128676):map__128676);
var state = map__128676__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128676__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128676__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));

var canvas = hpointu.rts.app.get_game_canvas();
var vec__128678 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core._PLUS_),camera,hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$1(hpointu.rts.input.mouse_pos(canvas)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128678,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128678,(1),null);
return hpointu.rts.app.redraw_visible(hpointu.rts.app.handle_mouse(hpointu.rts.app.handle_keys(hpointu.rts.app.update_hover(hpointu.rts.app.move_units(state,dt),x,y))));
});
hpointu.rts.app.draw_game_elem_BANG_ = (function hpointu$rts$app$draw_game_elem_BANG_(state,p__128681){
var vec__128682 = p__128681;
var seq__128683 = cljs.core.seq(vec__128682);
var first__128684 = cljs.core.first(seq__128683);
var seq__128683__$1 = cljs.core.next(seq__128683);
var update_type = first__128684;
var args = seq__128683__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_type,new cljs.core.Keyword(null,"cell","cell",764245084))){
var vec__128685 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128685,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128685,(1),null);
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
hpointu.rts.app.draw_minimap_elem_BANG_ = (function hpointu$rts$app$draw_minimap_elem_BANG_(ctx,p__128688,p__128689){
var map__128690 = p__128688;
var map__128690__$1 = (((((!((map__128690 == null))))?(((((map__128690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128690):map__128690);
var state = map__128690__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128690__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var vec__128691 = p__128689;
var seq__128692 = cljs.core.seq(vec__128691);
var first__128693 = cljs.core.first(seq__128692);
var seq__128692__$1 = cljs.core.next(seq__128692);
var update_type = first__128693;
var args = seq__128692__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_type,new cljs.core.Keyword(null,"cell","cell",764245084))){
var size = (3);
var vec__128695 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128695,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128695,(1),null);
var color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":"#111");
var vec__128698 = hpointu.rts.app.to_minimap_canvas(args,size);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128698,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128698,(1),null);
return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"w","w",354169001),size,new cljs.core.Keyword(null,"h","h",1109658740),size,new cljs.core.Keyword(null,"fill","fill",883462889),color], null));
} else {
return null;
}
});
hpointu.rts.app.draw_BANG_ = (function hpointu$rts$app$draw_BANG_(p__128701,contexts){
var map__128702 = p__128701;
var map__128702__$1 = (((((!((map__128702 == null))))?(((((map__128702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128702):map__128702);
var state = map__128702__$1;
var world_updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128702__$1,new cljs.core.Keyword(null,"world-updates","world-updates",1616740218));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128702__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128702__$1,new cljs.core.Keyword(null,"units","units",-533089095));
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128702__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var seq__128704_128793 = cljs.core.seq(world_updates);
var chunk__128705_128794 = null;
var count__128706_128795 = (0);
var i__128707_128796 = (0);
while(true){
if((i__128707_128796 < count__128706_128795)){
var wu_128797 = chunk__128705_128794.cljs$core$IIndexed$_nth$arity$2(null,i__128707_128796);
hpointu.rts.app.draw_game_elem_BANG_(state,wu_128797);

hpointu.rts.app.draw_minimap_elem_BANG_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),state,wu_128797);


var G__128798 = seq__128704_128793;
var G__128799 = chunk__128705_128794;
var G__128800 = count__128706_128795;
var G__128801 = (i__128707_128796 + (1));
seq__128704_128793 = G__128798;
chunk__128705_128794 = G__128799;
count__128706_128795 = G__128800;
i__128707_128796 = G__128801;
continue;
} else {
var temp__5735__auto___128802 = cljs.core.seq(seq__128704_128793);
if(temp__5735__auto___128802){
var seq__128704_128803__$1 = temp__5735__auto___128802;
if(cljs.core.chunked_seq_QMARK_(seq__128704_128803__$1)){
var c__4556__auto___128804 = cljs.core.chunk_first(seq__128704_128803__$1);
var G__128805 = cljs.core.chunk_rest(seq__128704_128803__$1);
var G__128806 = c__4556__auto___128804;
var G__128807 = cljs.core.count(c__4556__auto___128804);
var G__128808 = (0);
seq__128704_128793 = G__128805;
chunk__128705_128794 = G__128806;
count__128706_128795 = G__128807;
i__128707_128796 = G__128808;
continue;
} else {
var wu_128809 = cljs.core.first(seq__128704_128803__$1);
hpointu.rts.app.draw_game_elem_BANG_(state,wu_128809);

hpointu.rts.app.draw_minimap_elem_BANG_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),state,wu_128809);


var G__128810 = cljs.core.next(seq__128704_128803__$1);
var G__128811 = null;
var G__128812 = (0);
var G__128813 = (0);
seq__128704_128793 = G__128810;
chunk__128705_128794 = G__128811;
count__128706_128795 = G__128812;
i__128707_128796 = G__128813;
continue;
}
} else {
}
}
break;
}

var seq__128708_128814 = cljs.core.seq(units);
var chunk__128710_128815 = null;
var count__128711_128816 = (0);
var i__128712_128817 = (0);
while(true){
if((i__128712_128817 < count__128711_128816)){
var map__128730_128818 = chunk__128710_128815.cljs$core$IIndexed$_nth$arity$2(null,i__128712_128817);
var map__128730_128819__$1 = (((((!((map__128730_128818 == null))))?(((((map__128730_128818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128730_128818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128730_128818):map__128730_128818);
var u_128820 = map__128730_128819__$1;
var x_128821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128730_128819__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_128822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128730_128819__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__128823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128730_128819__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
if(hpointu.rts.app.visible_QMARK_(state,x_128821,y_128822)){
var vec__128732_128824 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_128821,y_128822], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE / (2)),(hpointu.rts.app.SIZE / (2))], null));
var x_128825__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128732_128824,(0),null);
var y_128826__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128732_128824,(1),null);
var color_128827 = "#0cf";
if(cljs.core.truth_(selected_QMARK__128823)){
var vec__128735_128828 = hpointu.rts.app.unit_aabb(state,u_128820);
var x_128829__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128735_128828,(0),null);
var y_128830__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128735_128828,(1),null);
var w_128831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128735_128828,(2),null);
var h_128832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128735_128828,(3),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),(x_128829__$2 - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y_128830__$2 - (3)),new cljs.core.Keyword(null,"w","w",354169001),(w_128831 + (6)),new cljs.core.Keyword(null,"h","h",1109658740),(h_128832 + (6)),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null));
} else {
}

hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),x_128825__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_128826__$1,new cljs.core.Keyword(null,"r","r",-471384190),(12),new cljs.core.Keyword(null,"fill","fill",883462889),color_128827], null));


var G__128833 = seq__128708_128814;
var G__128834 = chunk__128710_128815;
var G__128835 = count__128711_128816;
var G__128836 = (i__128712_128817 + (1));
seq__128708_128814 = G__128833;
chunk__128710_128815 = G__128834;
count__128711_128816 = G__128835;
i__128712_128817 = G__128836;
continue;
} else {
var G__128837 = seq__128708_128814;
var G__128838 = chunk__128710_128815;
var G__128839 = count__128711_128816;
var G__128840 = (i__128712_128817 + (1));
seq__128708_128814 = G__128837;
chunk__128710_128815 = G__128838;
count__128711_128816 = G__128839;
i__128712_128817 = G__128840;
continue;
}
} else {
var temp__5735__auto___128841 = cljs.core.seq(seq__128708_128814);
if(temp__5735__auto___128841){
var seq__128708_128842__$1 = temp__5735__auto___128841;
if(cljs.core.chunked_seq_QMARK_(seq__128708_128842__$1)){
var c__4556__auto___128843 = cljs.core.chunk_first(seq__128708_128842__$1);
var G__128844 = cljs.core.chunk_rest(seq__128708_128842__$1);
var G__128845 = c__4556__auto___128843;
var G__128846 = cljs.core.count(c__4556__auto___128843);
var G__128847 = (0);
seq__128708_128814 = G__128844;
chunk__128710_128815 = G__128845;
count__128711_128816 = G__128846;
i__128712_128817 = G__128847;
continue;
} else {
var map__128738_128848 = cljs.core.first(seq__128708_128842__$1);
var map__128738_128849__$1 = (((((!((map__128738_128848 == null))))?(((((map__128738_128848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128738_128848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128738_128848):map__128738_128848);
var u_128850 = map__128738_128849__$1;
var x_128851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128738_128849__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_128852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128738_128849__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__128853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128738_128849__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
if(hpointu.rts.app.visible_QMARK_(state,x_128851,y_128852)){
var vec__128740_128854 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_128851,y_128852], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE / (2)),(hpointu.rts.app.SIZE / (2))], null));
var x_128855__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128740_128854,(0),null);
var y_128856__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128740_128854,(1),null);
var color_128857 = "#0cf";
if(cljs.core.truth_(selected_QMARK__128853)){
var vec__128743_128858 = hpointu.rts.app.unit_aabb(state,u_128850);
var x_128859__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128743_128858,(0),null);
var y_128860__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128743_128858,(1),null);
var w_128861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128743_128858,(2),null);
var h_128862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128743_128858,(3),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),(x_128859__$2 - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y_128860__$2 - (3)),new cljs.core.Keyword(null,"w","w",354169001),(w_128861 + (6)),new cljs.core.Keyword(null,"h","h",1109658740),(h_128862 + (6)),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null));
} else {
}

hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),x_128855__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_128856__$1,new cljs.core.Keyword(null,"r","r",-471384190),(12),new cljs.core.Keyword(null,"fill","fill",883462889),color_128857], null));


var G__128863 = cljs.core.next(seq__128708_128842__$1);
var G__128864 = null;
var G__128865 = (0);
var G__128866 = (0);
seq__128708_128814 = G__128863;
chunk__128710_128815 = G__128864;
count__128711_128816 = G__128865;
i__128712_128817 = G__128866;
continue;
} else {
var G__128867 = cljs.core.next(seq__128708_128842__$1);
var G__128868 = null;
var G__128869 = (0);
var G__128870 = (0);
seq__128708_128814 = G__128867;
chunk__128710_128815 = G__128868;
count__128711_128816 = G__128869;
i__128712_128817 = G__128870;
continue;
}
}
} else {
}
}
break;
}

var temp__5733__auto___128871 = selector;
if(cljs.core.truth_(temp__5733__auto___128871)){
var map__128746_128872 = temp__5733__auto___128871;
var map__128746_128873__$1 = (((((!((map__128746_128872 == null))))?(((((map__128746_128872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128746_128872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128746_128872):map__128746_128872);
var x1_128874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128746_128873__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1_128875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128746_128873__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2_128876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128746_128873__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2_128877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128746_128873__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),x1_128874,new cljs.core.Keyword(null,"y","y",-1757859776),y1_128875,new cljs.core.Keyword(null,"w","w",354169001),(x2_128876 - x1_128874),new cljs.core.Keyword(null,"h","h",1109658740),(y2_128877 - y1_128875),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null));
} else {
}

var vec__128748_128878 = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(state);
var cx_128879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128748_128878,(0),null);
var cy_128880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128748_128878,(1),null);
var mmap_128881 = (contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap","minimap",-1428643929)) : contexts.call(null,new cljs.core.Keyword(null,"minimap","minimap",-1428643929)));
new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(mmap_128881).clearRect((0),(0),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(mmap_128881).width,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(mmap_128881).height);

new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(mmap_128881).drawImage(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),(0),(0));

var seq__128751_128882 = cljs.core.seq(units);
var chunk__128752_128883 = null;
var count__128753_128884 = (0);
var i__128754_128885 = (0);
while(true){
if((i__128754_128885 < count__128753_128884)){
var map__128765_128886 = chunk__128752_128883.cljs$core$IIndexed$_nth$arity$2(null,i__128754_128885);
var map__128765_128887__$1 = (((((!((map__128765_128886 == null))))?(((((map__128765_128886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128765_128886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128765_128886):map__128765_128886);
var x_128888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128765_128887__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_128889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128765_128887__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__128890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128765_128887__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var vec__128767_128891 = hpointu.rts.app.to_minimap_canvas(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_128888,y_128889], null),(3));
var x_128892__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128767_128891,(0),null);
var y_128893__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128767_128891,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_128892__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_128893__$1,new cljs.core.Keyword(null,"w","w",354169001),(3),new cljs.core.Keyword(null,"h","h",1109658740),(3),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(selected_QMARK__128890)?"yellow":"#0cf")], null));


var G__128894 = seq__128751_128882;
var G__128895 = chunk__128752_128883;
var G__128896 = count__128753_128884;
var G__128897 = (i__128754_128885 + (1));
seq__128751_128882 = G__128894;
chunk__128752_128883 = G__128895;
count__128753_128884 = G__128896;
i__128754_128885 = G__128897;
continue;
} else {
var temp__5735__auto___128898 = cljs.core.seq(seq__128751_128882);
if(temp__5735__auto___128898){
var seq__128751_128899__$1 = temp__5735__auto___128898;
if(cljs.core.chunked_seq_QMARK_(seq__128751_128899__$1)){
var c__4556__auto___128900 = cljs.core.chunk_first(seq__128751_128899__$1);
var G__128901 = cljs.core.chunk_rest(seq__128751_128899__$1);
var G__128902 = c__4556__auto___128900;
var G__128903 = cljs.core.count(c__4556__auto___128900);
var G__128904 = (0);
seq__128751_128882 = G__128901;
chunk__128752_128883 = G__128902;
count__128753_128884 = G__128903;
i__128754_128885 = G__128904;
continue;
} else {
var map__128770_128905 = cljs.core.first(seq__128751_128899__$1);
var map__128770_128906__$1 = (((((!((map__128770_128905 == null))))?(((((map__128770_128905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128770_128905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128770_128905):map__128770_128905);
var x_128907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128770_128906__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_128908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128770_128906__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__128909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128770_128906__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var vec__128772_128910 = hpointu.rts.app.to_minimap_canvas(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_128907,y_128908], null),(3));
var x_128911__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128772_128910,(0),null);
var y_128912__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128772_128910,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_128911__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_128912__$1,new cljs.core.Keyword(null,"w","w",354169001),(3),new cljs.core.Keyword(null,"h","h",1109658740),(3),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(selected_QMARK__128909)?"yellow":"#0cf")], null));


var G__128913 = cljs.core.next(seq__128751_128899__$1);
var G__128914 = null;
var G__128915 = (0);
var G__128916 = (0);
seq__128751_128882 = G__128913;
chunk__128752_128883 = G__128914;
count__128753_128884 = G__128915;
i__128754_128885 = G__128916;
continue;
}
} else {
}
}
break;
}

hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),((3) * cx_128879),new cljs.core.Keyword(null,"y","y",-1757859776),((3) * cy_128880),new cljs.core.Keyword(null,"w","w",354169001),(53),new cljs.core.Keyword(null,"h","h",1109658740),(42),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null));

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
var _STAR_print_newline_STAR__orig_val__128779_128917 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__128780_128918 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__128781_128919 = true;
var _STAR_print_fn_STAR__temp_val__128782_128920 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__128781_128919);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__128782_128920);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hpointu.rts.app.state),new cljs.core.Keyword(null,"world","world",-418292623)),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__128780_128918);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__128779_128917);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()].join('');
});
hpointu.rts.app.rts_app = (function hpointu$rts$app$rts_app(props){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 5px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black"], null)], null),"RTS Demo",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.7em",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"mono",new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(90)], null)], null),"- Press W on the map to place a wall"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column wrap"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"minimap",new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"height","height",1025178622),(223),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#111",new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"height","height",1025178622),(223)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"mono",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),"TODO:"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Minimap"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Camera movement"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Entities"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Mouse clicks..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Path finding"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Multiple units, One goal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Stop scrolling on keys"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Gameplay elements"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"game",new cljs.core.Keyword(null,"width","width",-384071477),(611),new cljs.core.Keyword(null,"height","height",1025178622),(480),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(611),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820)], null)], null),hpointu.rts.app.get_debug_content()], null)], null);
});
hpointu.rts.app.timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hpointu.rts.app.stop = (function hpointu$rts$app$stop(){
var seq__128783_128921 = cljs.core.seq(cljs.core.deref(hpointu.rts.app.timers));
var chunk__128784_128922 = null;
var count__128785_128923 = (0);
var i__128786_128924 = (0);
while(true){
if((i__128786_128924 < count__128785_128923)){
var t_128925 = chunk__128784_128922.cljs$core$IIndexed$_nth$arity$2(null,i__128786_128924);
clearInterval(t_128925);


var G__128926 = seq__128783_128921;
var G__128927 = chunk__128784_128922;
var G__128928 = count__128785_128923;
var G__128929 = (i__128786_128924 + (1));
seq__128783_128921 = G__128926;
chunk__128784_128922 = G__128927;
count__128785_128923 = G__128928;
i__128786_128924 = G__128929;
continue;
} else {
var temp__5735__auto___128930 = cljs.core.seq(seq__128783_128921);
if(temp__5735__auto___128930){
var seq__128783_128931__$1 = temp__5735__auto___128930;
if(cljs.core.chunked_seq_QMARK_(seq__128783_128931__$1)){
var c__4556__auto___128932 = cljs.core.chunk_first(seq__128783_128931__$1);
var G__128933 = cljs.core.chunk_rest(seq__128783_128931__$1);
var G__128934 = c__4556__auto___128932;
var G__128935 = cljs.core.count(c__4556__auto___128932);
var G__128936 = (0);
seq__128783_128921 = G__128933;
chunk__128784_128922 = G__128934;
count__128785_128923 = G__128935;
i__128786_128924 = G__128936;
continue;
} else {
var t_128937 = cljs.core.first(seq__128783_128931__$1);
clearInterval(t_128937);


var G__128938 = cljs.core.next(seq__128783_128931__$1);
var G__128939 = null;
var G__128940 = (0);
var G__128941 = (0);
seq__128783_128921 = G__128938;
chunk__128784_128922 = G__128939;
count__128785_128923 = G__128940;
i__128786_128924 = G__128941;
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

var contexts_128942 = hpointu.rts.app.init_contexts();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hpointu.rts.app.timers,cljs.core.conj,setInterval((function (){
return hpointu.rts.app.tick_BANG_(contexts_128942);
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
