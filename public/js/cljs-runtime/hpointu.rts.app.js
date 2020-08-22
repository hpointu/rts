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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"world","world",-418292623),hpointu.rts.core.__GT_world((74),(74)),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hpointu.rts.core.add_waypoint(hpointu.rts.core.add_waypoint(hpointu.rts.core.add_waypoint(hpointu.rts.core.__GT_unit((3),(4)),(5),(5)),(2),(7)),(2),(9))], null),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.PersistentVector.EMPTY], null);
});
hpointu.rts.app.visible_QMARK_ = (function hpointu$rts$app$visible_QMARK_(p__62283,x,y){
var map__62284 = p__62283;
var map__62284__$1 = (((((!((map__62284 == null))))?(((((map__62284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62284):map__62284);
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62284__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__62286 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62286,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62286,(1),null);
return (((x < (cx + (18)))) && ((y < (cy + (14)))));
});
hpointu.rts.app.visible_range = (function hpointu$rts$app$visible_range(p__62289){
var vec__62290 = p__62289;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62290,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62290,(1),null);
var camera = vec__62290;
var iter__4529__auto__ = (function hpointu$rts$app$visible_range_$_iter__62293(s__62294){
return (new cljs.core.LazySeq(null,(function (){
var s__62294__$1 = s__62294;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62294__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__62294__$1,x,xs__6292__auto__,temp__5735__auto__,vec__62290,cx,cy,camera){
return (function hpointu$rts$app$visible_range_$_iter__62293_$_iter__62295(s__62296){
return (new cljs.core.LazySeq(null,((function (s__62294__$1,x,xs__6292__auto__,temp__5735__auto__,vec__62290,cx,cy,camera){
return (function (){
var s__62296__$1 = s__62296;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__62296__$1);
if(temp__5735__auto____$1){
var s__62296__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62296__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62296__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62298 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62297 = (0);
while(true){
if((i__62297 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__62297);
cljs.core.chunk_append(b__62298,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__62482 = (i__62297 + (1));
i__62297 = G__62482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62298),hpointu$rts$app$visible_range_$_iter__62293_$_iter__62295(cljs.core.chunk_rest(s__62296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62298),null);
}
} else {
var y = cljs.core.first(s__62296__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),hpointu$rts$app$visible_range_$_iter__62293_$_iter__62295(cljs.core.rest(s__62296__$2)));
}
} else {
return null;
}
break;
}
});})(s__62294__$1,x,xs__6292__auto__,temp__5735__auto__,vec__62290,cx,cy,camera))
,null,null));
});})(s__62294__$1,x,xs__6292__auto__,temp__5735__auto__,vec__62290,cx,cy,camera))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((cy | (0)),((cy + (14)) | (0)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,hpointu$rts$app$visible_range_$_iter__62293(cljs.core.rest(s__62294__$1)));
} else {
var G__62483 = cljs.core.rest(s__62294__$1);
s__62294__$1 = G__62483;
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
hpointu.rts.app.hover_QMARK_ = (function hpointu$rts$app$hover_QMARK_(p__62299,x,y){
var map__62300 = p__62299;
var map__62300__$1 = (((((!((map__62300 == null))))?(((((map__62300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62300):map__62300);
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62300__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
hpointu.rts.app.cell_redraw = (function hpointu$rts$app$cell_redraw(p__62302){
var vec__62303 = p__62302;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62303,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62303,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),x,y], null);
});
hpointu.rts.app.redraw_world = (function hpointu$rts$app$redraw_world(p__62306){
var map__62307 = p__62306;
var map__62307__$1 = (((((!((map__62307 == null))))?(((((map__62307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62307):map__62307);
var state = map__62307__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62307__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var elems = (function (){var iter__4529__auto__ = (function hpointu$rts$app$redraw_world_$_iter__62309(s__62310){
return (new cljs.core.LazySeq(null,(function (){
var s__62310__$1 = s__62310;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62310__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__62310__$1,x,xs__6292__auto__,temp__5735__auto__,map__62307,map__62307__$1,state,world){
return (function hpointu$rts$app$redraw_world_$_iter__62309_$_iter__62311(s__62312){
return (new cljs.core.LazySeq(null,((function (s__62310__$1,x,xs__6292__auto__,temp__5735__auto__,map__62307,map__62307__$1,state,world){
return (function (){
var s__62312__$1 = s__62312;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__62312__$1);
if(temp__5735__auto____$1){
var s__62312__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62312__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62312__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62314 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62313 = (0);
while(true){
if((i__62313 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__62313);
cljs.core.chunk_append(b__62314,hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__62484 = (i__62313 + (1));
i__62313 = G__62484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62314),hpointu$rts$app$redraw_world_$_iter__62309_$_iter__62311(cljs.core.chunk_rest(s__62312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62314),null);
}
} else {
var y = cljs.core.first(s__62312__$2);
return cljs.core.cons(hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),hpointu$rts$app$redraw_world_$_iter__62309_$_iter__62311(cljs.core.rest(s__62312__$2)));
}
} else {
return null;
}
break;
}
});})(s__62310__$1,x,xs__6292__auto__,temp__5735__auto__,map__62307,map__62307__$1,state,world))
,null,null));
});})(s__62310__$1,x,xs__6292__auto__,temp__5735__auto__,map__62307,map__62307__$1,state,world))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,hpointu$rts$app$redraw_world_$_iter__62309(cljs.core.rest(s__62310__$1)));
} else {
var G__62485 = cljs.core.rest(s__62310__$1);
s__62310__$1 = G__62485;
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
hpointu.rts.app.redraw_visible = (function hpointu$rts$app$redraw_visible(p__62315){
var map__62316 = p__62315;
var map__62316__$1 = (((((!((map__62316 == null))))?(((((map__62316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62316):map__62316);
var state = map__62316__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62316__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62316__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var elems = (function (){var iter__4529__auto__ = (function hpointu$rts$app$redraw_visible_$_iter__62318(s__62319){
return (new cljs.core.LazySeq(null,(function (){
var s__62319__$1 = s__62319;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62319__$1);
if(temp__5735__auto__){
var s__62319__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62319__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62319__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62321 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62320 = (0);
while(true){
if((i__62320 < size__4528__auto__)){
var vec__62322 = cljs.core._nth(c__4527__auto__,i__62320);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62322,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62322,(1),null);
cljs.core.chunk_append(b__62321,hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__62486 = (i__62320 + (1));
i__62320 = G__62486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62321),hpointu$rts$app$redraw_visible_$_iter__62318(cljs.core.chunk_rest(s__62319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62321),null);
}
} else {
var vec__62325 = cljs.core.first(s__62319__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62325,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62325,(1),null);
return cljs.core.cons(hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),hpointu$rts$app$redraw_visible_$_iter__62318(cljs.core.rest(s__62319__$2)));
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
hpointu.rts.app.to_game_canvas = (function hpointu$rts$app$to_game_canvas(p__62328,p__62329){
var map__62330 = p__62328;
var map__62330__$1 = (((((!((map__62330 == null))))?(((((map__62330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62330):map__62330);
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62330__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__62331 = p__62329;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62331,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62331,(1),null);
var vec__62335 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62335,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62335,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE * (x - cx)),(hpointu.rts.app.SIZE * (y - cy))], null)));
});
hpointu.rts.app.to_minimap_canvas = (function hpointu$rts$app$to_minimap_canvas(p__62338,size){
var vec__62339 = p__62338;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62339,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62339,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(size * x),(size * y)], null);
});
hpointu.rts.app.to_world = (function hpointu$rts$app$to_world(var_args){
var G__62343 = arguments.length;
switch (G__62343) {
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

(hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$2 = (function (p__62344,size){
var vec__62345 = p__62344;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62345,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62345,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / size),(y / size)], null);
}));

(hpointu.rts.app.to_world.cljs$lang$maxFixedArity = 2);

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
var vec__62348 = hpointu.rts.input.mouse_pos(elem);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62348,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62348,(1),null);
return ((((((-1) < x)) && ((x < elem.width)))) && (((((-1) < y)) && ((y < elem.height)))));
});
hpointu.rts.app.init_contexts = (function hpointu$rts$app$init_contexts(){
var minimap = hpointu.rts.app.get_minimap_canvas();
var canvas = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),hpointu.rts.app.get_game_canvas(),new cljs.core.Keyword(null,"minimap","minimap",-1428643929),minimap,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186),(function (){var G__62351 = document.createElement("canvas");
(G__62351["width"] = minimap.width);

(G__62351["height"] = minimap.height);

return G__62351;
})()], null);
return (function (selector){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),(selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(canvas) : selector.call(null,canvas)),new cljs.core.Keyword(null,"context","context",-830191113),(selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(canvas) : selector.call(null,canvas)).getContext("2d")], null);
});
});
hpointu.rts.app.draw_tile_BANG_ = (function hpointu$rts$app$draw_tile_BANG_(ctx,p__62352,x,y,size){
var map__62353 = p__62352;
var map__62353__$1 = (((((!((map__62353 == null))))?(((((map__62353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62353):map__62353);
var state = map__62353__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62353__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var tile_color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":((hpointu.rts.app.hover_QMARK_(state,x,y))?"green":"#222"
));
var vec__62355 = hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62355,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62355,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((1) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((1) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (2)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (2)),new cljs.core.Keyword(null,"fill","fill",883462889),tile_color], null));

return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((2) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((2) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (4)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (4)),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
hpointu.rts.app.update_hover = (function hpointu$rts$app$update_hover(p__62358,x,y){
var map__62359 = p__62358;
var map__62359__$1 = (((((!((map__62359 == null))))?(((((map__62359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62359):map__62359);
var state = map__62359__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62359__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62359__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62359__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__62361 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62361,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62361,(1),null);
var new_hover = ((hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$3(world,x,y))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),new_hover),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.cell_redraw,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_hover,hover], null))));
});
hpointu.rts.app.add_wall = (function hpointu$rts$app$add_wall(p__62364){
var map__62365 = p__62364;
var map__62365__$1 = (((((!((map__62365 == null))))?(((((map__62365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62365):map__62365);
var state = map__62365__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62365__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var vec__62367 = hover;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62367,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62367,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(state,new cljs.core.Keyword(null,"world","world",-418292623),hpointu.rts.core.set_world_cell,x,y,new cljs.core.Keyword(null,"w","w",354169001));
});
hpointu.rts.app.clamp_camera = (function hpointu$rts$app$clamp_camera(p__62370){
var map__62371 = p__62370;
var map__62371__$1 = (((((!((map__62371 == null))))?(((((map__62371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62371):map__62371);
var state = map__62371__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62371__$1,new cljs.core.Keyword(null,"world","world",-418292623));
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
hpointu.rts.app.handle_minimap = (function hpointu$rts$app$handle_minimap(state){
if(cljs.core.truth_((function (){var and__4115__auto__ = hpointu.rts.input.mouse_pressed_QMARK_(new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.truth_(and__4115__auto__)){
return hpointu.rts.app.mouse_on_element_QMARK_("minimap");
} else {
return and__4115__auto__;
}
})())){
var vec__62373 = hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$2(hpointu.rts.input.mouse_pos(hpointu.rts.app.get_minimap_canvas()),(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62373,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62373,(1),null);
return hpointu.rts.app.clamp_camera(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),(0)], null),(x - (9))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),(1)], null),(y - (7))));
} else {
return state;
}
});
hpointu.rts.app.handle_keys = (function hpointu$rts$app$handle_keys(p__62376){
var map__62377 = p__62376;
var map__62377__$1 = (((((!((map__62377 == null))))?(((((map__62377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62377):map__62377);
var state = map__62377__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62377__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var G__62379 = state;
var G__62379__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = hover;
if(cljs.core.truth_(and__4115__auto__)){
return hpointu.rts.input.key_pressed_QMARK_("KeyW");
} else {
return and__4115__auto__;
}
})())?hpointu.rts.app.add_wall(G__62379):G__62379);
var G__62379__$2 = (cljs.core.truth_((function (){var and__4115__auto__ = hover;
if(cljs.core.truth_(and__4115__auto__)){
return hpointu.rts.input.key_pressed_QMARK_("Space");
} else {
return and__4115__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__62379__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"units","units",-533089095),(0)], null),hpointu.rts.core.add_waypoint,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hover,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hover,(1))):G__62379__$1);
if(cljs.core.truth_(cljs.core.some(hpointu.rts.input.key_pressed_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrowUp",null,"ArrowDown",null,"ArrowRight",null,"ArrowLeft",null], null), null)))){
return hpointu.rts.app.move_camera(G__62379__$2,((hpointu.rts.input.key_pressed_QMARK_("ArrowLeft"))?(-1):((hpointu.rts.input.key_pressed_QMARK_("ArrowRight"))?(1):(0)
)),((hpointu.rts.input.key_pressed_QMARK_("ArrowUp"))?(-1):((hpointu.rts.input.key_pressed_QMARK_("ArrowDown"))?(1):(0)
)));
} else {
return G__62379__$2;
}
});
hpointu.rts.app.move_units = (function hpointu$rts$app$move_units(p__62381,dt){
var map__62382 = p__62381;
var map__62382__$1 = (((((!((map__62382 == null))))?(((((map__62382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62382):map__62382);
var state = map__62382__$1;
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62382__$1,new cljs.core.Keyword(null,"units","units",-533089095));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62380_SHARP_){
return hpointu.rts.core.walk(p1__62380_SHARP_,dt);
}),units)));
});
hpointu.rts.app.update_state = (function hpointu$rts$app$update_state(p__62384,dt){
var map__62385 = p__62384;
var map__62385__$1 = (((((!((map__62385 == null))))?(((((map__62385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62385):map__62385);
var state = map__62385__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62385__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62385__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));

var canvas = hpointu.rts.app.get_game_canvas();
var vec__62387 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core._PLUS_),camera,hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$1(hpointu.rts.input.mouse_pos(canvas)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62387,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62387,(1),null);
return hpointu.rts.app.redraw_visible(hpointu.rts.app.handle_minimap(hpointu.rts.app.handle_keys(hpointu.rts.app.update_hover(hpointu.rts.app.move_units(state,dt),x,y))));
});
hpointu.rts.app.draw_game_elem_BANG_ = (function hpointu$rts$app$draw_game_elem_BANG_(state,p__62390){
var vec__62391 = p__62390;
var seq__62392 = cljs.core.seq(vec__62391);
var first__62393 = cljs.core.first(seq__62392);
var seq__62392__$1 = cljs.core.next(seq__62392);
var update_type = first__62393;
var args = seq__62392__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_type,new cljs.core.Keyword(null,"cell","cell",764245084))){
var vec__62394 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62394,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62394,(1),null);
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
hpointu.rts.app.draw_minimap_elem_BANG_ = (function hpointu$rts$app$draw_minimap_elem_BANG_(ctx,p__62397,p__62398){
var map__62399 = p__62397;
var map__62399__$1 = (((((!((map__62399 == null))))?(((((map__62399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62399):map__62399);
var state = map__62399__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62399__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var vec__62400 = p__62398;
var seq__62401 = cljs.core.seq(vec__62400);
var first__62402 = cljs.core.first(seq__62401);
var seq__62401__$1 = cljs.core.next(seq__62401);
var update_type = first__62402;
var args = seq__62401__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_type,new cljs.core.Keyword(null,"cell","cell",764245084))){
var size = (3);
var vec__62404 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62404,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62404,(1),null);
var color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":"#111");
var vec__62407 = hpointu.rts.app.to_minimap_canvas(args,size);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62407,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62407,(1),null);
return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"w","w",354169001),size,new cljs.core.Keyword(null,"h","h",1109658740),size,new cljs.core.Keyword(null,"fill","fill",883462889),color], null));
} else {
return null;
}
});
hpointu.rts.app.draw_BANG_ = (function hpointu$rts$app$draw_BANG_(p__62410,contexts){
var map__62411 = p__62410;
var map__62411__$1 = (((((!((map__62411 == null))))?(((((map__62411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62411):map__62411);
var state = map__62411__$1;
var world_updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62411__$1,new cljs.core.Keyword(null,"world-updates","world-updates",1616740218));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62411__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62411__$1,new cljs.core.Keyword(null,"units","units",-533089095));
var seq__62413_62488 = cljs.core.seq(world_updates);
var chunk__62414_62489 = null;
var count__62415_62490 = (0);
var i__62416_62491 = (0);
while(true){
if((i__62416_62491 < count__62415_62490)){
var wu_62492 = chunk__62414_62489.cljs$core$IIndexed$_nth$arity$2(null,i__62416_62491);
hpointu.rts.app.draw_game_elem_BANG_(state,wu_62492);

hpointu.rts.app.draw_minimap_elem_BANG_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),state,wu_62492);


var G__62493 = seq__62413_62488;
var G__62494 = chunk__62414_62489;
var G__62495 = count__62415_62490;
var G__62496 = (i__62416_62491 + (1));
seq__62413_62488 = G__62493;
chunk__62414_62489 = G__62494;
count__62415_62490 = G__62495;
i__62416_62491 = G__62496;
continue;
} else {
var temp__5735__auto___62497 = cljs.core.seq(seq__62413_62488);
if(temp__5735__auto___62497){
var seq__62413_62498__$1 = temp__5735__auto___62497;
if(cljs.core.chunked_seq_QMARK_(seq__62413_62498__$1)){
var c__4556__auto___62499 = cljs.core.chunk_first(seq__62413_62498__$1);
var G__62500 = cljs.core.chunk_rest(seq__62413_62498__$1);
var G__62501 = c__4556__auto___62499;
var G__62502 = cljs.core.count(c__4556__auto___62499);
var G__62503 = (0);
seq__62413_62488 = G__62500;
chunk__62414_62489 = G__62501;
count__62415_62490 = G__62502;
i__62416_62491 = G__62503;
continue;
} else {
var wu_62504 = cljs.core.first(seq__62413_62498__$1);
hpointu.rts.app.draw_game_elem_BANG_(state,wu_62504);

hpointu.rts.app.draw_minimap_elem_BANG_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),state,wu_62504);


var G__62505 = cljs.core.next(seq__62413_62498__$1);
var G__62506 = null;
var G__62507 = (0);
var G__62508 = (0);
seq__62413_62488 = G__62505;
chunk__62414_62489 = G__62506;
count__62415_62490 = G__62507;
i__62416_62491 = G__62508;
continue;
}
} else {
}
}
break;
}

var seq__62417_62509 = cljs.core.seq(units);
var chunk__62419_62510 = null;
var count__62420_62511 = (0);
var i__62421_62512 = (0);
while(true){
if((i__62421_62512 < count__62420_62511)){
var map__62433_62513 = chunk__62419_62510.cljs$core$IIndexed$_nth$arity$2(null,i__62421_62512);
var map__62433_62514__$1 = (((((!((map__62433_62513 == null))))?(((((map__62433_62513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62433_62513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62433_62513):map__62433_62513);
var x_62515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62433_62514__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_62516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62433_62514__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__62517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62433_62514__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
if(hpointu.rts.app.visible_QMARK_(state,x_62515,y_62516)){
var vec__62435_62518 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_62515,y_62516], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE / (2)),(hpointu.rts.app.SIZE / (2))], null));
var x_62519__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62435_62518,(0),null);
var y_62520__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62435_62518,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),x_62519__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_62520__$1,new cljs.core.Keyword(null,"r","r",-471384190),(12),new cljs.core.Keyword(null,"fill","fill",883462889),"#0cf"], null));


var G__62521 = seq__62417_62509;
var G__62522 = chunk__62419_62510;
var G__62523 = count__62420_62511;
var G__62524 = (i__62421_62512 + (1));
seq__62417_62509 = G__62521;
chunk__62419_62510 = G__62522;
count__62420_62511 = G__62523;
i__62421_62512 = G__62524;
continue;
} else {
var G__62525 = seq__62417_62509;
var G__62526 = chunk__62419_62510;
var G__62527 = count__62420_62511;
var G__62528 = (i__62421_62512 + (1));
seq__62417_62509 = G__62525;
chunk__62419_62510 = G__62526;
count__62420_62511 = G__62527;
i__62421_62512 = G__62528;
continue;
}
} else {
var temp__5735__auto___62529 = cljs.core.seq(seq__62417_62509);
if(temp__5735__auto___62529){
var seq__62417_62530__$1 = temp__5735__auto___62529;
if(cljs.core.chunked_seq_QMARK_(seq__62417_62530__$1)){
var c__4556__auto___62531 = cljs.core.chunk_first(seq__62417_62530__$1);
var G__62532 = cljs.core.chunk_rest(seq__62417_62530__$1);
var G__62533 = c__4556__auto___62531;
var G__62534 = cljs.core.count(c__4556__auto___62531);
var G__62535 = (0);
seq__62417_62509 = G__62532;
chunk__62419_62510 = G__62533;
count__62420_62511 = G__62534;
i__62421_62512 = G__62535;
continue;
} else {
var map__62438_62536 = cljs.core.first(seq__62417_62530__$1);
var map__62438_62537__$1 = (((((!((map__62438_62536 == null))))?(((((map__62438_62536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62438_62536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62438_62536):map__62438_62536);
var x_62538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62438_62537__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_62539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62438_62537__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__62540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62438_62537__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
if(hpointu.rts.app.visible_QMARK_(state,x_62538,y_62539)){
var vec__62440_62541 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_62538,y_62539], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE / (2)),(hpointu.rts.app.SIZE / (2))], null));
var x_62542__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62440_62541,(0),null);
var y_62543__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62440_62541,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),x_62542__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_62543__$1,new cljs.core.Keyword(null,"r","r",-471384190),(12),new cljs.core.Keyword(null,"fill","fill",883462889),"#0cf"], null));


var G__62544 = cljs.core.next(seq__62417_62530__$1);
var G__62545 = null;
var G__62546 = (0);
var G__62547 = (0);
seq__62417_62509 = G__62544;
chunk__62419_62510 = G__62545;
count__62420_62511 = G__62546;
i__62421_62512 = G__62547;
continue;
} else {
var G__62548 = cljs.core.next(seq__62417_62530__$1);
var G__62549 = null;
var G__62550 = (0);
var G__62551 = (0);
seq__62417_62509 = G__62548;
chunk__62419_62510 = G__62549;
count__62420_62511 = G__62550;
i__62421_62512 = G__62551;
continue;
}
}
} else {
}
}
break;
}

var vec__62443_62552 = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(state);
var cx_62553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62443_62552,(0),null);
var cy_62554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62443_62552,(1),null);
var mmap_62555 = (contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap","minimap",-1428643929)) : contexts.call(null,new cljs.core.Keyword(null,"minimap","minimap",-1428643929)));
new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(mmap_62555).clearRect((0),(0),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(mmap_62555).width,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(mmap_62555).height);

new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(mmap_62555).drawImage(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),(0),(0));

var seq__62446_62556 = cljs.core.seq(units);
var chunk__62447_62557 = null;
var count__62448_62558 = (0);
var i__62449_62559 = (0);
while(true){
if((i__62449_62559 < count__62448_62558)){
var map__62460_62560 = chunk__62447_62557.cljs$core$IIndexed$_nth$arity$2(null,i__62449_62559);
var map__62460_62561__$1 = (((((!((map__62460_62560 == null))))?(((((map__62460_62560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62460_62560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62460_62560):map__62460_62560);
var x_62562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62460_62561__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_62563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62460_62561__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__62462_62564 = hpointu.rts.app.to_minimap_canvas(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_62562,y_62563], null),(3));
var x_62565__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62462_62564,(0),null);
var y_62566__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62462_62564,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_62565__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_62566__$1,new cljs.core.Keyword(null,"w","w",354169001),(3),new cljs.core.Keyword(null,"h","h",1109658740),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"yellow"], null));


var G__62567 = seq__62446_62556;
var G__62568 = chunk__62447_62557;
var G__62569 = count__62448_62558;
var G__62570 = (i__62449_62559 + (1));
seq__62446_62556 = G__62567;
chunk__62447_62557 = G__62568;
count__62448_62558 = G__62569;
i__62449_62559 = G__62570;
continue;
} else {
var temp__5735__auto___62571 = cljs.core.seq(seq__62446_62556);
if(temp__5735__auto___62571){
var seq__62446_62572__$1 = temp__5735__auto___62571;
if(cljs.core.chunked_seq_QMARK_(seq__62446_62572__$1)){
var c__4556__auto___62573 = cljs.core.chunk_first(seq__62446_62572__$1);
var G__62574 = cljs.core.chunk_rest(seq__62446_62572__$1);
var G__62575 = c__4556__auto___62573;
var G__62576 = cljs.core.count(c__4556__auto___62573);
var G__62577 = (0);
seq__62446_62556 = G__62574;
chunk__62447_62557 = G__62575;
count__62448_62558 = G__62576;
i__62449_62559 = G__62577;
continue;
} else {
var map__62465_62578 = cljs.core.first(seq__62446_62572__$1);
var map__62465_62579__$1 = (((((!((map__62465_62578 == null))))?(((((map__62465_62578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62465_62578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62465_62578):map__62465_62578);
var x_62580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62465_62579__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_62581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62465_62579__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__62467_62582 = hpointu.rts.app.to_minimap_canvas(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_62580,y_62581], null),(3));
var x_62583__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62467_62582,(0),null);
var y_62584__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62467_62582,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_62583__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_62584__$1,new cljs.core.Keyword(null,"w","w",354169001),(3),new cljs.core.Keyword(null,"h","h",1109658740),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"yellow"], null));


var G__62585 = cljs.core.next(seq__62446_62572__$1);
var G__62586 = null;
var G__62587 = (0);
var G__62588 = (0);
seq__62446_62556 = G__62585;
chunk__62447_62557 = G__62586;
count__62448_62558 = G__62587;
i__62449_62559 = G__62588;
continue;
}
} else {
}
}
break;
}

hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),((3) * cx_62553),new cljs.core.Keyword(null,"y","y",-1757859776),((3) * cy_62554),new cljs.core.Keyword(null,"w","w",354169001),(53),new cljs.core.Keyword(null,"h","h",1109658740),(42),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null));

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
var _STAR_print_newline_STAR__orig_val__62474_62589 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__62475_62590 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__62476_62591 = true;
var _STAR_print_fn_STAR__temp_val__62477_62592 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62476_62591);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62477_62592);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hpointu.rts.app.state),new cljs.core.Keyword(null,"world","world",-418292623)),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62475_62590);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62474_62589);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()].join('');
});
hpointu.rts.app.rts_app = (function hpointu$rts$app$rts_app(props){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 5px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black"], null)], null),"RTS Demo",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.7em",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"mono",new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(90)], null)], null),"- Press W on the map to place a wall"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column wrap"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"minimap",new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"height","height",1025178622),(223),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#111",new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"height","height",1025178622),(223)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"mono",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),"TODO:"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Minimap"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Camera movement"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Entities"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Mouse mode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Mouse clicks..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Stop scrolling on keys"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Path finding"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Gameplay elements"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"game",new cljs.core.Keyword(null,"width","width",-384071477),(611),new cljs.core.Keyword(null,"height","height",1025178622),(480),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(611),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820)], null)], null),hpointu.rts.app.get_debug_content()], null)], null);
});
hpointu.rts.app.timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hpointu.rts.app.stop = (function hpointu$rts$app$stop(){
var seq__62478_62593 = cljs.core.seq(cljs.core.deref(hpointu.rts.app.timers));
var chunk__62479_62594 = null;
var count__62480_62595 = (0);
var i__62481_62596 = (0);
while(true){
if((i__62481_62596 < count__62480_62595)){
var t_62597 = chunk__62479_62594.cljs$core$IIndexed$_nth$arity$2(null,i__62481_62596);
clearInterval(t_62597);


var G__62598 = seq__62478_62593;
var G__62599 = chunk__62479_62594;
var G__62600 = count__62480_62595;
var G__62601 = (i__62481_62596 + (1));
seq__62478_62593 = G__62598;
chunk__62479_62594 = G__62599;
count__62480_62595 = G__62600;
i__62481_62596 = G__62601;
continue;
} else {
var temp__5735__auto___62602 = cljs.core.seq(seq__62478_62593);
if(temp__5735__auto___62602){
var seq__62478_62603__$1 = temp__5735__auto___62602;
if(cljs.core.chunked_seq_QMARK_(seq__62478_62603__$1)){
var c__4556__auto___62604 = cljs.core.chunk_first(seq__62478_62603__$1);
var G__62605 = cljs.core.chunk_rest(seq__62478_62603__$1);
var G__62606 = c__4556__auto___62604;
var G__62607 = cljs.core.count(c__4556__auto___62604);
var G__62608 = (0);
seq__62478_62593 = G__62605;
chunk__62479_62594 = G__62606;
count__62480_62595 = G__62607;
i__62481_62596 = G__62608;
continue;
} else {
var t_62609 = cljs.core.first(seq__62478_62603__$1);
clearInterval(t_62609);


var G__62610 = cljs.core.next(seq__62478_62603__$1);
var G__62611 = null;
var G__62612 = (0);
var G__62613 = (0);
seq__62478_62593 = G__62610;
chunk__62479_62594 = G__62611;
count__62480_62595 = G__62612;
i__62481_62596 = G__62613;
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

var contexts_62614 = hpointu.rts.app.init_contexts();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hpointu.rts.app.timers,cljs.core.conj,setInterval((function (){
return hpointu.rts.app.tick_BANG_(contexts_62614);
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
