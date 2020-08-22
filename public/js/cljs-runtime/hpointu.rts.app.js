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
hpointu.rts.app.visible_QMARK_ = (function hpointu$rts$app$visible_QMARK_(p__126078,x,y){
var map__126079 = p__126078;
var map__126079__$1 = (((((!((map__126079 == null))))?(((((map__126079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126079):map__126079);
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126079__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__126081 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126081,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126081,(1),null);
return (((x < (cx + (18)))) && ((y < (cy + (14)))));
});
hpointu.rts.app.visible_range = (function hpointu$rts$app$visible_range(p__126084){
var vec__126085 = p__126084;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126085,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126085,(1),null);
var camera = vec__126085;
var iter__4529__auto__ = (function hpointu$rts$app$visible_range_$_iter__126088(s__126089){
return (new cljs.core.LazySeq(null,(function (){
var s__126089__$1 = s__126089;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__126089__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__126089__$1,x,xs__6292__auto__,temp__5735__auto__,vec__126085,cx,cy,camera){
return (function hpointu$rts$app$visible_range_$_iter__126088_$_iter__126090(s__126091){
return (new cljs.core.LazySeq(null,((function (s__126089__$1,x,xs__6292__auto__,temp__5735__auto__,vec__126085,cx,cy,camera){
return (function (){
var s__126091__$1 = s__126091;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__126091__$1);
if(temp__5735__auto____$1){
var s__126091__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__126091__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__126091__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__126093 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__126092 = (0);
while(true){
if((i__126092 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__126092);
cljs.core.chunk_append(b__126093,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__126331 = (i__126092 + (1));
i__126092 = G__126331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__126093),hpointu$rts$app$visible_range_$_iter__126088_$_iter__126090(cljs.core.chunk_rest(s__126091__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__126093),null);
}
} else {
var y = cljs.core.first(s__126091__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),hpointu$rts$app$visible_range_$_iter__126088_$_iter__126090(cljs.core.rest(s__126091__$2)));
}
} else {
return null;
}
break;
}
});})(s__126089__$1,x,xs__6292__auto__,temp__5735__auto__,vec__126085,cx,cy,camera))
,null,null));
});})(s__126089__$1,x,xs__6292__auto__,temp__5735__auto__,vec__126085,cx,cy,camera))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((cy | (0)),((cy + (14)) | (0)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,hpointu$rts$app$visible_range_$_iter__126088(cljs.core.rest(s__126089__$1)));
} else {
var G__126332 = cljs.core.rest(s__126089__$1);
s__126089__$1 = G__126332;
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
hpointu.rts.app.hover_QMARK_ = (function hpointu$rts$app$hover_QMARK_(p__126094,x,y){
var map__126095 = p__126094;
var map__126095__$1 = (((((!((map__126095 == null))))?(((((map__126095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126095):map__126095);
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126095__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
hpointu.rts.app.cell_redraw = (function hpointu$rts$app$cell_redraw(p__126097){
var vec__126098 = p__126097;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126098,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126098,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),x,y], null);
});
hpointu.rts.app.redraw_world = (function hpointu$rts$app$redraw_world(p__126101){
var map__126102 = p__126101;
var map__126102__$1 = (((((!((map__126102 == null))))?(((((map__126102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126102):map__126102);
var state = map__126102__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126102__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var elems = (function (){var iter__4529__auto__ = (function hpointu$rts$app$redraw_world_$_iter__126104(s__126105){
return (new cljs.core.LazySeq(null,(function (){
var s__126105__$1 = s__126105;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__126105__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__126105__$1,x,xs__6292__auto__,temp__5735__auto__,map__126102,map__126102__$1,state,world){
return (function hpointu$rts$app$redraw_world_$_iter__126104_$_iter__126106(s__126107){
return (new cljs.core.LazySeq(null,((function (s__126105__$1,x,xs__6292__auto__,temp__5735__auto__,map__126102,map__126102__$1,state,world){
return (function (){
var s__126107__$1 = s__126107;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__126107__$1);
if(temp__5735__auto____$1){
var s__126107__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__126107__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__126107__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__126109 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__126108 = (0);
while(true){
if((i__126108 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__126108);
cljs.core.chunk_append(b__126109,hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__126333 = (i__126108 + (1));
i__126108 = G__126333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__126109),hpointu$rts$app$redraw_world_$_iter__126104_$_iter__126106(cljs.core.chunk_rest(s__126107__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__126109),null);
}
} else {
var y = cljs.core.first(s__126107__$2);
return cljs.core.cons(hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),hpointu$rts$app$redraw_world_$_iter__126104_$_iter__126106(cljs.core.rest(s__126107__$2)));
}
} else {
return null;
}
break;
}
});})(s__126105__$1,x,xs__6292__auto__,temp__5735__auto__,map__126102,map__126102__$1,state,world))
,null,null));
});})(s__126105__$1,x,xs__6292__auto__,temp__5735__auto__,map__126102,map__126102__$1,state,world))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,hpointu$rts$app$redraw_world_$_iter__126104(cljs.core.rest(s__126105__$1)));
} else {
var G__126334 = cljs.core.rest(s__126105__$1);
s__126105__$1 = G__126334;
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
hpointu.rts.app.redraw_visible = (function hpointu$rts$app$redraw_visible(p__126110){
var map__126111 = p__126110;
var map__126111__$1 = (((((!((map__126111 == null))))?(((((map__126111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126111):map__126111);
var state = map__126111__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126111__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126111__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var elems = (function (){var iter__4529__auto__ = (function hpointu$rts$app$redraw_visible_$_iter__126113(s__126114){
return (new cljs.core.LazySeq(null,(function (){
var s__126114__$1 = s__126114;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__126114__$1);
if(temp__5735__auto__){
var s__126114__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__126114__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__126114__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__126116 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__126115 = (0);
while(true){
if((i__126115 < size__4528__auto__)){
var vec__126117 = cljs.core._nth(c__4527__auto__,i__126115);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126117,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126117,(1),null);
cljs.core.chunk_append(b__126116,hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__126335 = (i__126115 + (1));
i__126115 = G__126335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__126116),hpointu$rts$app$redraw_visible_$_iter__126113(cljs.core.chunk_rest(s__126114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__126116),null);
}
} else {
var vec__126120 = cljs.core.first(s__126114__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126120,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126120,(1),null);
return cljs.core.cons(hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),hpointu$rts$app$redraw_visible_$_iter__126113(cljs.core.rest(s__126114__$2)));
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
hpointu.rts.app.to_game_canvas = (function hpointu$rts$app$to_game_canvas(p__126123,p__126124){
var map__126125 = p__126123;
var map__126125__$1 = (((((!((map__126125 == null))))?(((((map__126125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126125):map__126125);
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126125__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__126126 = p__126124;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126126,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126126,(1),null);
var vec__126130 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126130,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126130,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE * (x - cx)),(hpointu.rts.app.SIZE * (y - cy))], null)));
});
hpointu.rts.app.to_minimap_canvas = (function hpointu$rts$app$to_minimap_canvas(p__126133,size){
var vec__126134 = p__126133;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126134,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126134,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(size * x),(size * y)], null);
});
hpointu.rts.app.to_world = (function hpointu$rts$app$to_world(var_args){
var G__126138 = arguments.length;
switch (G__126138) {
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

(hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$2 = (function (p__126139,size){
var vec__126140 = p__126139;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126140,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126140,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / size),(y / size)], null);
}));

(hpointu.rts.app.to_world.cljs$lang$maxFixedArity = 2);

hpointu.rts.app.to_grid = (function hpointu$rts$app$to_grid(camera,pos){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core._PLUS_),camera,hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$1(pos));
});
hpointu.rts.app.unit_aabb = (function hpointu$rts$app$unit_aabb(state,p__126144){
var map__126145 = p__126144;
var map__126145__$1 = (((((!((map__126145 == null))))?(((((map__126145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126145):map__126145);
var unit = map__126145__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126145__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126145__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__126147 = hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126147,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126147,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__126143_SHARP_){
return ((5) + p1__126143_SHARP_);
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
var vec__126150 = hpointu.rts.input.mouse_pos(elem);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126150,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126150,(1),null);
return ((((((-1) < x)) && ((x < elem.width)))) && (((((-1) < y)) && ((y < elem.height)))));
});
hpointu.rts.app.init_contexts = (function hpointu$rts$app$init_contexts(){
var minimap = hpointu.rts.app.get_minimap_canvas();
var canvas = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),hpointu.rts.app.get_game_canvas(),new cljs.core.Keyword(null,"minimap","minimap",-1428643929),minimap,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186),(function (){var G__126153 = document.createElement("canvas");
(G__126153["width"] = minimap.width);

(G__126153["height"] = minimap.height);

return G__126153;
})()], null);
return (function (selector){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),(selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(canvas) : selector.call(null,canvas)),new cljs.core.Keyword(null,"context","context",-830191113),(selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(canvas) : selector.call(null,canvas)).getContext("2d")], null);
});
});
hpointu.rts.app.draw_tile_BANG_ = (function hpointu$rts$app$draw_tile_BANG_(ctx,p__126154,x,y,size){
var map__126155 = p__126154;
var map__126155__$1 = (((((!((map__126155 == null))))?(((((map__126155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126155):map__126155);
var state = map__126155__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126155__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var tile_color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":((hpointu.rts.app.hover_QMARK_(state,x,y))?"green":"#222"
));
var vec__126157 = hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126157,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126157,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((1) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((1) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (2)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (2)),new cljs.core.Keyword(null,"fill","fill",883462889),tile_color], null));

return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((2) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((2) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (4)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (4)),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
hpointu.rts.app.update_hover = (function hpointu$rts$app$update_hover(p__126160,x,y){
var map__126161 = p__126160;
var map__126161__$1 = (((((!((map__126161 == null))))?(((((map__126161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126161):map__126161);
var state = map__126161__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126161__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126161__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126161__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__126163 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126163,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126163,(1),null);
var new_hover = ((hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$3(world,x,y))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),new_hover),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.cell_redraw,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_hover,hover], null))));
});
hpointu.rts.app.add_wall = (function hpointu$rts$app$add_wall(p__126166){
var map__126167 = p__126166;
var map__126167__$1 = (((((!((map__126167 == null))))?(((((map__126167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126167):map__126167);
var state = map__126167__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126167__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var vec__126169 = hover;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126169,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126169,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(state,new cljs.core.Keyword(null,"world","world",-418292623),hpointu.rts.core.set_world_cell,x,y,new cljs.core.Keyword(null,"w","w",354169001));
});
hpointu.rts.app.clamp_camera = (function hpointu$rts$app$clamp_camera(p__126172){
var map__126173 = p__126172;
var map__126173__$1 = (((((!((map__126173 == null))))?(((((map__126173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126173):map__126173);
var state = map__126173__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126173__$1,new cljs.core.Keyword(null,"world","world",-418292623));
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
hpointu.rts.app.select_units = (function hpointu$rts$app$select_units(p__126176){
var map__126177 = p__126176;
var map__126177__$1 = (((((!((map__126177 == null))))?(((((map__126177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126177):map__126177);
var state = map__126177__$1;
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126177__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var map__126179 = selector;
var map__126179__$1 = (((((!((map__126179 == null))))?(((((map__126179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126179):map__126179);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126179__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126179__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126179__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126179__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var vec__126180 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4217__auto__ = x1;
var y__4218__auto__ = x2;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4214__auto__ = x1;
var y__4215__auto__ = x2;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
var x1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126180,(0),null);
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126180,(1),null);
var vec__126183 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4217__auto__ = y1;
var y__4218__auto__ = y2;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4214__auto__ = y1;
var y__4215__auto__ = y2;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
var y1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126183,(0),null);
var y2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126183,(1),null);
var rect = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1__$1,y1__$1,(x2__$1 - x1__$1),(y2__$1 - y1__$1)], null);
hpointu.rts.app.select_unit = (function hpointu$rts$app$select_units_$_select_unit(p__126187){
var map__126188 = p__126187;
var map__126188__$1 = (((((!((map__126188 == null))))?(((((map__126188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126188):map__126188);
var u = map__126188__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126188__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126188__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u,new cljs.core.Keyword(null,"selected?","selected?",-742502788),hpointu.rts.core.collides_QMARK_(hpointu.rts.app.unit_aabb(state,u),rect));
});

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"units","units",-533089095),(function (p1__126175_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.select_unit,p1__126175_SHARP_));
}));
});
hpointu.rts.app.end_game_left_click = (function hpointu$rts$app$end_game_left_click(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.select_units(state),new cljs.core.Keyword(null,"selector","selector",762528866)),new cljs.core.Keyword(null,"left-click","left-click",-1325204750));
});
hpointu.rts.app.end_game_right_click = (function hpointu$rts$app$end_game_right_click(p__126191){
var map__126192 = p__126191;
var map__126192__$1 = (((((!((map__126192 == null))))?(((((map__126192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126192):map__126192);
var state = map__126192__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126192__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var right_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126192__$1,new cljs.core.Keyword(null,"right-click","right-click",-1443353028));
hpointu.rts.app.set_unit_destination = (function hpointu$rts$app$end_game_right_click_$_set_unit_destination(p__126194){
var map__126195 = p__126194;
var map__126195__$1 = (((((!((map__126195 == null))))?(((((map__126195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126195):map__126195);
var unit = map__126195__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126195__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126195__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126195__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
if(cljs.core.truth_(selected_QMARK_)){
var waypoints = hpointu.rts.path.path(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),right_click);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(unit,new cljs.core.Keyword(null,"waypoints","waypoints",-844253224),waypoints);
} else {
return unit;
}
});

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"units","units",-533089095),(function (p1__126190_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.set_unit_destination,p1__126190_SHARP_));
})),new cljs.core.Keyword(null,"right-click","right-click",-1443353028));
});
hpointu.rts.app.handle_mouse_game = (function hpointu$rts$app$handle_mouse_game(p__126199){
var map__126200 = p__126199;
var map__126200__$1 = (((((!((map__126200 == null))))?(((((map__126200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126200):map__126200);
var state = map__126200__$1;
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126200__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126200__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var right_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126200__$1,new cljs.core.Keyword(null,"right-click","right-click",-1443353028));
var vec__126202 = hpointu.rts.input.mouse_pos(hpointu.rts.app.get_game_canvas());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126202,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126202,(1),null);
var vec__126205 = hpointu.rts.app.to_grid(camera,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var wx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126205,(0),null);
var wy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126205,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = hpointu.rts.input.mouse_pressed_QMARK_(new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(hpointu.rts.input.mouse_pressed_QMARK_(new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(selector)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"selector","selector",762528866),(function (p1__126197_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__126197_SHARP_,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y2","y2",-718691301),y], 0));
}));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"left-click","left-click",-1325204750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wx,wy], null)),new cljs.core.Keyword(null,"selector","selector",762528866),(function (p1__126198_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__126198_SHARP_,new cljs.core.Keyword(null,"x1","x1",-1863922247),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y2","y2",-718691301),y], 0));
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
var vec__126208 = hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$2(hpointu.rts.input.mouse_pos(hpointu.rts.app.get_minimap_canvas()),(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126208,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126208,(1),null);
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
hpointu.rts.app.handle_keys = (function hpointu$rts$app$handle_keys(p__126211){
var map__126212 = p__126211;
var map__126212__$1 = (((((!((map__126212 == null))))?(((((map__126212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126212):map__126212);
var state = map__126212__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126212__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var G__126214 = state;
var G__126214__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = hover;
if(cljs.core.truth_(and__4115__auto__)){
return hpointu.rts.input.key_pressed_QMARK_("KeyW");
} else {
return and__4115__auto__;
}
})())?hpointu.rts.app.add_wall(G__126214):G__126214);
if(cljs.core.truth_(cljs.core.some(hpointu.rts.input.key_pressed_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrowUp",null,"ArrowDown",null,"ArrowRight",null,"ArrowLeft",null], null), null)))){
return hpointu.rts.app.move_camera(G__126214__$1,((hpointu.rts.input.key_pressed_QMARK_("ArrowLeft"))?(-1):((hpointu.rts.input.key_pressed_QMARK_("ArrowRight"))?(1):(0)
)),((hpointu.rts.input.key_pressed_QMARK_("ArrowUp"))?(-1):((hpointu.rts.input.key_pressed_QMARK_("ArrowDown"))?(1):(0)
)));
} else {
return G__126214__$1;
}
});
hpointu.rts.app.move_units = (function hpointu$rts$app$move_units(p__126216,dt){
var map__126217 = p__126216;
var map__126217__$1 = (((((!((map__126217 == null))))?(((((map__126217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126217):map__126217);
var state = map__126217__$1;
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126217__$1,new cljs.core.Keyword(null,"units","units",-533089095));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__126215_SHARP_){
return hpointu.rts.core.walk(p1__126215_SHARP_,dt);
}),units)));
});
hpointu.rts.app.update_state = (function hpointu$rts$app$update_state(p__126219,dt){
var map__126220 = p__126219;
var map__126220__$1 = (((((!((map__126220 == null))))?(((((map__126220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126220):map__126220);
var state = map__126220__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126220__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126220__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));

var canvas = hpointu.rts.app.get_game_canvas();
var vec__126222 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core._PLUS_),camera,hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$1(hpointu.rts.input.mouse_pos(canvas)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126222,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126222,(1),null);
return hpointu.rts.app.redraw_visible(hpointu.rts.app.handle_mouse(hpointu.rts.app.handle_keys(hpointu.rts.app.update_hover(hpointu.rts.app.move_units(state,dt),x,y))));
});
hpointu.rts.app.draw_game_elem_BANG_ = (function hpointu$rts$app$draw_game_elem_BANG_(state,p__126225){
var vec__126226 = p__126225;
var seq__126227 = cljs.core.seq(vec__126226);
var first__126228 = cljs.core.first(seq__126227);
var seq__126227__$1 = cljs.core.next(seq__126227);
var update_type = first__126228;
var args = seq__126227__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_type,new cljs.core.Keyword(null,"cell","cell",764245084))){
var vec__126229 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126229,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126229,(1),null);
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
hpointu.rts.app.draw_minimap_elem_BANG_ = (function hpointu$rts$app$draw_minimap_elem_BANG_(ctx,p__126232,p__126233){
var map__126234 = p__126232;
var map__126234__$1 = (((((!((map__126234 == null))))?(((((map__126234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126234):map__126234);
var state = map__126234__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126234__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var vec__126235 = p__126233;
var seq__126236 = cljs.core.seq(vec__126235);
var first__126237 = cljs.core.first(seq__126236);
var seq__126236__$1 = cljs.core.next(seq__126236);
var update_type = first__126237;
var args = seq__126236__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_type,new cljs.core.Keyword(null,"cell","cell",764245084))){
var size = (3);
var vec__126239 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126239,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126239,(1),null);
var color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":"#111");
var vec__126242 = hpointu.rts.app.to_minimap_canvas(args,size);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126242,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126242,(1),null);
return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"w","w",354169001),size,new cljs.core.Keyword(null,"h","h",1109658740),size,new cljs.core.Keyword(null,"fill","fill",883462889),color], null));
} else {
return null;
}
});
hpointu.rts.app.draw_BANG_ = (function hpointu$rts$app$draw_BANG_(p__126245,contexts){
var map__126246 = p__126245;
var map__126246__$1 = (((((!((map__126246 == null))))?(((((map__126246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126246):map__126246);
var state = map__126246__$1;
var world_updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126246__$1,new cljs.core.Keyword(null,"world-updates","world-updates",1616740218));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126246__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126246__$1,new cljs.core.Keyword(null,"units","units",-533089095));
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126246__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var seq__126248_126337 = cljs.core.seq(world_updates);
var chunk__126249_126338 = null;
var count__126250_126339 = (0);
var i__126251_126340 = (0);
while(true){
if((i__126251_126340 < count__126250_126339)){
var wu_126341 = chunk__126249_126338.cljs$core$IIndexed$_nth$arity$2(null,i__126251_126340);
hpointu.rts.app.draw_game_elem_BANG_(state,wu_126341);

hpointu.rts.app.draw_minimap_elem_BANG_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),state,wu_126341);


var G__126342 = seq__126248_126337;
var G__126343 = chunk__126249_126338;
var G__126344 = count__126250_126339;
var G__126345 = (i__126251_126340 + (1));
seq__126248_126337 = G__126342;
chunk__126249_126338 = G__126343;
count__126250_126339 = G__126344;
i__126251_126340 = G__126345;
continue;
} else {
var temp__5735__auto___126346 = cljs.core.seq(seq__126248_126337);
if(temp__5735__auto___126346){
var seq__126248_126347__$1 = temp__5735__auto___126346;
if(cljs.core.chunked_seq_QMARK_(seq__126248_126347__$1)){
var c__4556__auto___126348 = cljs.core.chunk_first(seq__126248_126347__$1);
var G__126349 = cljs.core.chunk_rest(seq__126248_126347__$1);
var G__126350 = c__4556__auto___126348;
var G__126351 = cljs.core.count(c__4556__auto___126348);
var G__126352 = (0);
seq__126248_126337 = G__126349;
chunk__126249_126338 = G__126350;
count__126250_126339 = G__126351;
i__126251_126340 = G__126352;
continue;
} else {
var wu_126353 = cljs.core.first(seq__126248_126347__$1);
hpointu.rts.app.draw_game_elem_BANG_(state,wu_126353);

hpointu.rts.app.draw_minimap_elem_BANG_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),state,wu_126353);


var G__126354 = cljs.core.next(seq__126248_126347__$1);
var G__126355 = null;
var G__126356 = (0);
var G__126357 = (0);
seq__126248_126337 = G__126354;
chunk__126249_126338 = G__126355;
count__126250_126339 = G__126356;
i__126251_126340 = G__126357;
continue;
}
} else {
}
}
break;
}

var seq__126252_126358 = cljs.core.seq(units);
var chunk__126254_126359 = null;
var count__126255_126360 = (0);
var i__126256_126361 = (0);
while(true){
if((i__126256_126361 < count__126255_126360)){
var map__126274_126362 = chunk__126254_126359.cljs$core$IIndexed$_nth$arity$2(null,i__126256_126361);
var map__126274_126363__$1 = (((((!((map__126274_126362 == null))))?(((((map__126274_126362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126274_126362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126274_126362):map__126274_126362);
var u_126364 = map__126274_126363__$1;
var x_126365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126274_126363__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_126366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126274_126363__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__126367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126274_126363__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
if(hpointu.rts.app.visible_QMARK_(state,x_126365,y_126366)){
var vec__126276_126368 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_126365,y_126366], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE / (2)),(hpointu.rts.app.SIZE / (2))], null));
var x_126369__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126276_126368,(0),null);
var y_126370__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126276_126368,(1),null);
var color_126371 = "#0cf";
if(cljs.core.truth_(selected_QMARK__126367)){
var vec__126279_126372 = hpointu.rts.app.unit_aabb(state,u_126364);
var x_126373__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126279_126372,(0),null);
var y_126374__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126279_126372,(1),null);
var w_126375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126279_126372,(2),null);
var h_126376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126279_126372,(3),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),(x_126373__$2 - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y_126374__$2 - (3)),new cljs.core.Keyword(null,"w","w",354169001),(w_126375 + (6)),new cljs.core.Keyword(null,"h","h",1109658740),(h_126376 + (6)),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null));
} else {
}

hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),x_126369__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_126370__$1,new cljs.core.Keyword(null,"r","r",-471384190),(12),new cljs.core.Keyword(null,"fill","fill",883462889),color_126371], null));


var G__126377 = seq__126252_126358;
var G__126378 = chunk__126254_126359;
var G__126379 = count__126255_126360;
var G__126380 = (i__126256_126361 + (1));
seq__126252_126358 = G__126377;
chunk__126254_126359 = G__126378;
count__126255_126360 = G__126379;
i__126256_126361 = G__126380;
continue;
} else {
var G__126381 = seq__126252_126358;
var G__126382 = chunk__126254_126359;
var G__126383 = count__126255_126360;
var G__126384 = (i__126256_126361 + (1));
seq__126252_126358 = G__126381;
chunk__126254_126359 = G__126382;
count__126255_126360 = G__126383;
i__126256_126361 = G__126384;
continue;
}
} else {
var temp__5735__auto___126385 = cljs.core.seq(seq__126252_126358);
if(temp__5735__auto___126385){
var seq__126252_126386__$1 = temp__5735__auto___126385;
if(cljs.core.chunked_seq_QMARK_(seq__126252_126386__$1)){
var c__4556__auto___126387 = cljs.core.chunk_first(seq__126252_126386__$1);
var G__126388 = cljs.core.chunk_rest(seq__126252_126386__$1);
var G__126389 = c__4556__auto___126387;
var G__126390 = cljs.core.count(c__4556__auto___126387);
var G__126391 = (0);
seq__126252_126358 = G__126388;
chunk__126254_126359 = G__126389;
count__126255_126360 = G__126390;
i__126256_126361 = G__126391;
continue;
} else {
var map__126282_126392 = cljs.core.first(seq__126252_126386__$1);
var map__126282_126393__$1 = (((((!((map__126282_126392 == null))))?(((((map__126282_126392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126282_126392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126282_126392):map__126282_126392);
var u_126394 = map__126282_126393__$1;
var x_126395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126282_126393__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_126396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126282_126393__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__126397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126282_126393__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
if(hpointu.rts.app.visible_QMARK_(state,x_126395,y_126396)){
var vec__126284_126398 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_126395,y_126396], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE / (2)),(hpointu.rts.app.SIZE / (2))], null));
var x_126399__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126284_126398,(0),null);
var y_126400__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126284_126398,(1),null);
var color_126401 = "#0cf";
if(cljs.core.truth_(selected_QMARK__126397)){
var vec__126287_126402 = hpointu.rts.app.unit_aabb(state,u_126394);
var x_126403__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126287_126402,(0),null);
var y_126404__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126287_126402,(1),null);
var w_126405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126287_126402,(2),null);
var h_126406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126287_126402,(3),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),(x_126403__$2 - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y_126404__$2 - (3)),new cljs.core.Keyword(null,"w","w",354169001),(w_126405 + (6)),new cljs.core.Keyword(null,"h","h",1109658740),(h_126406 + (6)),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null));
} else {
}

hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),x_126399__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_126400__$1,new cljs.core.Keyword(null,"r","r",-471384190),(12),new cljs.core.Keyword(null,"fill","fill",883462889),color_126401], null));


var G__126407 = cljs.core.next(seq__126252_126386__$1);
var G__126408 = null;
var G__126409 = (0);
var G__126410 = (0);
seq__126252_126358 = G__126407;
chunk__126254_126359 = G__126408;
count__126255_126360 = G__126409;
i__126256_126361 = G__126410;
continue;
} else {
var G__126411 = cljs.core.next(seq__126252_126386__$1);
var G__126412 = null;
var G__126413 = (0);
var G__126414 = (0);
seq__126252_126358 = G__126411;
chunk__126254_126359 = G__126412;
count__126255_126360 = G__126413;
i__126256_126361 = G__126414;
continue;
}
}
} else {
}
}
break;
}

var temp__5733__auto___126415 = selector;
if(cljs.core.truth_(temp__5733__auto___126415)){
var map__126290_126416 = temp__5733__auto___126415;
var map__126290_126417__$1 = (((((!((map__126290_126416 == null))))?(((((map__126290_126416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126290_126416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126290_126416):map__126290_126416);
var x1_126418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126290_126417__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1_126419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126290_126417__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2_126420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126290_126417__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2_126421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126290_126417__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),x1_126418,new cljs.core.Keyword(null,"y","y",-1757859776),y1_126419,new cljs.core.Keyword(null,"w","w",354169001),(x2_126420 - x1_126418),new cljs.core.Keyword(null,"h","h",1109658740),(y2_126421 - y1_126419),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null));
} else {
}

var vec__126292_126422 = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(state);
var cx_126423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126292_126422,(0),null);
var cy_126424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126292_126422,(1),null);
var mmap_126425 = (contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap","minimap",-1428643929)) : contexts.call(null,new cljs.core.Keyword(null,"minimap","minimap",-1428643929)));
new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(mmap_126425).clearRect((0),(0),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(mmap_126425).width,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(mmap_126425).height);

new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(mmap_126425).drawImage(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),(0),(0));

var seq__126295_126426 = cljs.core.seq(units);
var chunk__126296_126427 = null;
var count__126297_126428 = (0);
var i__126298_126429 = (0);
while(true){
if((i__126298_126429 < count__126297_126428)){
var map__126309_126430 = chunk__126296_126427.cljs$core$IIndexed$_nth$arity$2(null,i__126298_126429);
var map__126309_126431__$1 = (((((!((map__126309_126430 == null))))?(((((map__126309_126430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126309_126430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126309_126430):map__126309_126430);
var x_126432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126309_126431__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_126433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126309_126431__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__126434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126309_126431__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var vec__126311_126435 = hpointu.rts.app.to_minimap_canvas(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_126432,y_126433], null),(3));
var x_126436__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126311_126435,(0),null);
var y_126437__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126311_126435,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_126436__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_126437__$1,new cljs.core.Keyword(null,"w","w",354169001),(3),new cljs.core.Keyword(null,"h","h",1109658740),(3),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(selected_QMARK__126434)?"yellow":"#0cf")], null));


var G__126438 = seq__126295_126426;
var G__126439 = chunk__126296_126427;
var G__126440 = count__126297_126428;
var G__126441 = (i__126298_126429 + (1));
seq__126295_126426 = G__126438;
chunk__126296_126427 = G__126439;
count__126297_126428 = G__126440;
i__126298_126429 = G__126441;
continue;
} else {
var temp__5735__auto___126442 = cljs.core.seq(seq__126295_126426);
if(temp__5735__auto___126442){
var seq__126295_126443__$1 = temp__5735__auto___126442;
if(cljs.core.chunked_seq_QMARK_(seq__126295_126443__$1)){
var c__4556__auto___126444 = cljs.core.chunk_first(seq__126295_126443__$1);
var G__126445 = cljs.core.chunk_rest(seq__126295_126443__$1);
var G__126446 = c__4556__auto___126444;
var G__126447 = cljs.core.count(c__4556__auto___126444);
var G__126448 = (0);
seq__126295_126426 = G__126445;
chunk__126296_126427 = G__126446;
count__126297_126428 = G__126447;
i__126298_126429 = G__126448;
continue;
} else {
var map__126314_126449 = cljs.core.first(seq__126295_126443__$1);
var map__126314_126450__$1 = (((((!((map__126314_126449 == null))))?(((((map__126314_126449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126314_126449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126314_126449):map__126314_126449);
var x_126451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126314_126450__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_126452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126314_126450__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__126453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126314_126450__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var vec__126316_126454 = hpointu.rts.app.to_minimap_canvas(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_126451,y_126452], null),(3));
var x_126455__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126316_126454,(0),null);
var y_126456__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126316_126454,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_126455__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_126456__$1,new cljs.core.Keyword(null,"w","w",354169001),(3),new cljs.core.Keyword(null,"h","h",1109658740),(3),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(selected_QMARK__126453)?"yellow":"#0cf")], null));


var G__126457 = cljs.core.next(seq__126295_126443__$1);
var G__126458 = null;
var G__126459 = (0);
var G__126460 = (0);
seq__126295_126426 = G__126457;
chunk__126296_126427 = G__126458;
count__126297_126428 = G__126459;
i__126298_126429 = G__126460;
continue;
}
} else {
}
}
break;
}

hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),((3) * cx_126423),new cljs.core.Keyword(null,"y","y",-1757859776),((3) * cy_126424),new cljs.core.Keyword(null,"w","w",354169001),(53),new cljs.core.Keyword(null,"h","h",1109658740),(42),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null));

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
var _STAR_print_newline_STAR__orig_val__126323_126461 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__126324_126462 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__126325_126463 = true;
var _STAR_print_fn_STAR__temp_val__126326_126464 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__126325_126463);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__126326_126464);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hpointu.rts.app.state),new cljs.core.Keyword(null,"world","world",-418292623)),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__126324_126462);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__126323_126461);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()].join('');
});
hpointu.rts.app.rts_app = (function hpointu$rts$app$rts_app(props){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 5px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black"], null)], null),"RTS Demo",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.7em",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"mono",new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(90)], null)], null),"- Press W on the map to place a wall"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column wrap"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"minimap",new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"height","height",1025178622),(223),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#111",new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"height","height",1025178622),(223)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"mono",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),"TODO:"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Minimap"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Camera movement"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Entities"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Mouse clicks..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Path finding"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Mouse mode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Stop scrolling on keys"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Gameplay elements"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"game",new cljs.core.Keyword(null,"width","width",-384071477),(611),new cljs.core.Keyword(null,"height","height",1025178622),(480),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(611),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820)], null)], null),hpointu.rts.app.get_debug_content()], null)], null);
});
hpointu.rts.app.timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hpointu.rts.app.stop = (function hpointu$rts$app$stop(){
var seq__126327_126465 = cljs.core.seq(cljs.core.deref(hpointu.rts.app.timers));
var chunk__126328_126466 = null;
var count__126329_126467 = (0);
var i__126330_126468 = (0);
while(true){
if((i__126330_126468 < count__126329_126467)){
var t_126469 = chunk__126328_126466.cljs$core$IIndexed$_nth$arity$2(null,i__126330_126468);
clearInterval(t_126469);


var G__126470 = seq__126327_126465;
var G__126471 = chunk__126328_126466;
var G__126472 = count__126329_126467;
var G__126473 = (i__126330_126468 + (1));
seq__126327_126465 = G__126470;
chunk__126328_126466 = G__126471;
count__126329_126467 = G__126472;
i__126330_126468 = G__126473;
continue;
} else {
var temp__5735__auto___126474 = cljs.core.seq(seq__126327_126465);
if(temp__5735__auto___126474){
var seq__126327_126475__$1 = temp__5735__auto___126474;
if(cljs.core.chunked_seq_QMARK_(seq__126327_126475__$1)){
var c__4556__auto___126476 = cljs.core.chunk_first(seq__126327_126475__$1);
var G__126477 = cljs.core.chunk_rest(seq__126327_126475__$1);
var G__126478 = c__4556__auto___126476;
var G__126479 = cljs.core.count(c__4556__auto___126476);
var G__126480 = (0);
seq__126327_126465 = G__126477;
chunk__126328_126466 = G__126478;
count__126329_126467 = G__126479;
i__126330_126468 = G__126480;
continue;
} else {
var t_126481 = cljs.core.first(seq__126327_126475__$1);
clearInterval(t_126481);


var G__126482 = cljs.core.next(seq__126327_126475__$1);
var G__126483 = null;
var G__126484 = (0);
var G__126485 = (0);
seq__126327_126465 = G__126482;
chunk__126328_126466 = G__126483;
count__126329_126467 = G__126484;
i__126330_126468 = G__126485;
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

var contexts_126486 = hpointu.rts.app.init_contexts();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hpointu.rts.app.timers,cljs.core.conj,setInterval((function (){
return hpointu.rts.app.tick_BANG_(contexts_126486);
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
