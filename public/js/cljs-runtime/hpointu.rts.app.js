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
hpointu.rts.app.visible_QMARK_ = (function hpointu$rts$app$visible_QMARK_(p__125669,x,y){
var map__125670 = p__125669;
var map__125670__$1 = (((((!((map__125670 == null))))?(((((map__125670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125670):map__125670);
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125670__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__125672 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125672,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125672,(1),null);
return (((x < (cx + (18)))) && ((y < (cy + (14)))));
});
hpointu.rts.app.visible_range = (function hpointu$rts$app$visible_range(p__125675){
var vec__125676 = p__125675;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125676,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125676,(1),null);
var camera = vec__125676;
var iter__4529__auto__ = (function hpointu$rts$app$visible_range_$_iter__125679(s__125680){
return (new cljs.core.LazySeq(null,(function (){
var s__125680__$1 = s__125680;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__125680__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__125680__$1,x,xs__6292__auto__,temp__5735__auto__,vec__125676,cx,cy,camera){
return (function hpointu$rts$app$visible_range_$_iter__125679_$_iter__125681(s__125682){
return (new cljs.core.LazySeq(null,((function (s__125680__$1,x,xs__6292__auto__,temp__5735__auto__,vec__125676,cx,cy,camera){
return (function (){
var s__125682__$1 = s__125682;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__125682__$1);
if(temp__5735__auto____$1){
var s__125682__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__125682__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__125682__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__125684 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__125683 = (0);
while(true){
if((i__125683 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__125683);
cljs.core.chunk_append(b__125684,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__125922 = (i__125683 + (1));
i__125683 = G__125922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__125684),hpointu$rts$app$visible_range_$_iter__125679_$_iter__125681(cljs.core.chunk_rest(s__125682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__125684),null);
}
} else {
var y = cljs.core.first(s__125682__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),hpointu$rts$app$visible_range_$_iter__125679_$_iter__125681(cljs.core.rest(s__125682__$2)));
}
} else {
return null;
}
break;
}
});})(s__125680__$1,x,xs__6292__auto__,temp__5735__auto__,vec__125676,cx,cy,camera))
,null,null));
});})(s__125680__$1,x,xs__6292__auto__,temp__5735__auto__,vec__125676,cx,cy,camera))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((cy | (0)),((cy + (14)) | (0)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,hpointu$rts$app$visible_range_$_iter__125679(cljs.core.rest(s__125680__$1)));
} else {
var G__125923 = cljs.core.rest(s__125680__$1);
s__125680__$1 = G__125923;
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
hpointu.rts.app.hover_QMARK_ = (function hpointu$rts$app$hover_QMARK_(p__125685,x,y){
var map__125686 = p__125685;
var map__125686__$1 = (((((!((map__125686 == null))))?(((((map__125686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125686):map__125686);
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125686__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
hpointu.rts.app.cell_redraw = (function hpointu$rts$app$cell_redraw(p__125688){
var vec__125689 = p__125688;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125689,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125689,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),x,y], null);
});
hpointu.rts.app.redraw_world = (function hpointu$rts$app$redraw_world(p__125692){
var map__125693 = p__125692;
var map__125693__$1 = (((((!((map__125693 == null))))?(((((map__125693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125693):map__125693);
var state = map__125693__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125693__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var elems = (function (){var iter__4529__auto__ = (function hpointu$rts$app$redraw_world_$_iter__125695(s__125696){
return (new cljs.core.LazySeq(null,(function (){
var s__125696__$1 = s__125696;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__125696__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__125696__$1,x,xs__6292__auto__,temp__5735__auto__,map__125693,map__125693__$1,state,world){
return (function hpointu$rts$app$redraw_world_$_iter__125695_$_iter__125697(s__125698){
return (new cljs.core.LazySeq(null,((function (s__125696__$1,x,xs__6292__auto__,temp__5735__auto__,map__125693,map__125693__$1,state,world){
return (function (){
var s__125698__$1 = s__125698;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__125698__$1);
if(temp__5735__auto____$1){
var s__125698__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__125698__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__125698__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__125700 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__125699 = (0);
while(true){
if((i__125699 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__125699);
cljs.core.chunk_append(b__125700,hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__125924 = (i__125699 + (1));
i__125699 = G__125924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__125700),hpointu$rts$app$redraw_world_$_iter__125695_$_iter__125697(cljs.core.chunk_rest(s__125698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__125700),null);
}
} else {
var y = cljs.core.first(s__125698__$2);
return cljs.core.cons(hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),hpointu$rts$app$redraw_world_$_iter__125695_$_iter__125697(cljs.core.rest(s__125698__$2)));
}
} else {
return null;
}
break;
}
});})(s__125696__$1,x,xs__6292__auto__,temp__5735__auto__,map__125693,map__125693__$1,state,world))
,null,null));
});})(s__125696__$1,x,xs__6292__auto__,temp__5735__auto__,map__125693,map__125693__$1,state,world))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,hpointu$rts$app$redraw_world_$_iter__125695(cljs.core.rest(s__125696__$1)));
} else {
var G__125925 = cljs.core.rest(s__125696__$1);
s__125696__$1 = G__125925;
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
hpointu.rts.app.redraw_visible = (function hpointu$rts$app$redraw_visible(p__125701){
var map__125702 = p__125701;
var map__125702__$1 = (((((!((map__125702 == null))))?(((((map__125702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125702):map__125702);
var state = map__125702__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125702__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125702__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var elems = (function (){var iter__4529__auto__ = (function hpointu$rts$app$redraw_visible_$_iter__125704(s__125705){
return (new cljs.core.LazySeq(null,(function (){
var s__125705__$1 = s__125705;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__125705__$1);
if(temp__5735__auto__){
var s__125705__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__125705__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__125705__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__125707 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__125706 = (0);
while(true){
if((i__125706 < size__4528__auto__)){
var vec__125708 = cljs.core._nth(c__4527__auto__,i__125706);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125708,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125708,(1),null);
cljs.core.chunk_append(b__125707,hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__125926 = (i__125706 + (1));
i__125706 = G__125926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__125707),hpointu$rts$app$redraw_visible_$_iter__125704(cljs.core.chunk_rest(s__125705__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__125707),null);
}
} else {
var vec__125711 = cljs.core.first(s__125705__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125711,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125711,(1),null);
return cljs.core.cons(hpointu.rts.app.cell_redraw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),hpointu$rts$app$redraw_visible_$_iter__125704(cljs.core.rest(s__125705__$2)));
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
hpointu.rts.app.to_game_canvas = (function hpointu$rts$app$to_game_canvas(p__125714,p__125715){
var map__125716 = p__125714;
var map__125716__$1 = (((((!((map__125716 == null))))?(((((map__125716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125716):map__125716);
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125716__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__125717 = p__125715;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125717,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125717,(1),null);
var vec__125721 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125721,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125721,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE * (x - cx)),(hpointu.rts.app.SIZE * (y - cy))], null)));
});
hpointu.rts.app.to_minimap_canvas = (function hpointu$rts$app$to_minimap_canvas(p__125724,size){
var vec__125725 = p__125724;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125725,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125725,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(size * x),(size * y)], null);
});
hpointu.rts.app.to_world = (function hpointu$rts$app$to_world(var_args){
var G__125729 = arguments.length;
switch (G__125729) {
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

(hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$2 = (function (p__125730,size){
var vec__125731 = p__125730;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125731,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125731,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / size),(y / size)], null);
}));

(hpointu.rts.app.to_world.cljs$lang$maxFixedArity = 2);

hpointu.rts.app.to_grid = (function hpointu$rts$app$to_grid(camera,pos){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core._PLUS_),camera,hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$1(pos));
});
hpointu.rts.app.unit_aabb = (function hpointu$rts$app$unit_aabb(state,p__125735){
var map__125736 = p__125735;
var map__125736__$1 = (((((!((map__125736 == null))))?(((((map__125736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125736):map__125736);
var unit = map__125736__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125736__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125736__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__125738 = hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125738,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125738,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__125734_SHARP_){
return ((5) + p1__125734_SHARP_);
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
var vec__125741 = hpointu.rts.input.mouse_pos(elem);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125741,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125741,(1),null);
return ((((((-1) < x)) && ((x < elem.width)))) && (((((-1) < y)) && ((y < elem.height)))));
});
hpointu.rts.app.init_contexts = (function hpointu$rts$app$init_contexts(){
var minimap = hpointu.rts.app.get_minimap_canvas();
var canvas = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),hpointu.rts.app.get_game_canvas(),new cljs.core.Keyword(null,"minimap","minimap",-1428643929),minimap,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186),(function (){var G__125744 = document.createElement("canvas");
(G__125744["width"] = minimap.width);

(G__125744["height"] = minimap.height);

return G__125744;
})()], null);
return (function (selector){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),(selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(canvas) : selector.call(null,canvas)),new cljs.core.Keyword(null,"context","context",-830191113),(selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(canvas) : selector.call(null,canvas)).getContext("2d")], null);
});
});
hpointu.rts.app.draw_tile_BANG_ = (function hpointu$rts$app$draw_tile_BANG_(ctx,p__125745,x,y,size){
var map__125746 = p__125745;
var map__125746__$1 = (((((!((map__125746 == null))))?(((((map__125746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125746):map__125746);
var state = map__125746__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125746__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var tile_color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":((hpointu.rts.app.hover_QMARK_(state,x,y))?"green":"#222"
));
var vec__125748 = hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125748,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125748,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((1) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((1) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (2)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (2)),new cljs.core.Keyword(null,"fill","fill",883462889),tile_color], null));

return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((2) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((2) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (4)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (4)),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
hpointu.rts.app.update_hover = (function hpointu$rts$app$update_hover(p__125751,x,y){
var map__125752 = p__125751;
var map__125752__$1 = (((((!((map__125752 == null))))?(((((map__125752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125752):map__125752);
var state = map__125752__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125752__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125752__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125752__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var vec__125754 = camera;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125754,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125754,(1),null);
var new_hover = ((hpointu.rts.core.in_world_QMARK_.cljs$core$IFn$_invoke$arity$3(world,x,y))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),new_hover),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.cell_redraw,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_hover,hover], null))));
});
hpointu.rts.app.add_wall = (function hpointu$rts$app$add_wall(p__125757){
var map__125758 = p__125757;
var map__125758__$1 = (((((!((map__125758 == null))))?(((((map__125758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125758):map__125758);
var state = map__125758__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125758__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var vec__125760 = hover;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125760,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125760,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(state,new cljs.core.Keyword(null,"world","world",-418292623),hpointu.rts.core.set_world_cell,x,y,new cljs.core.Keyword(null,"w","w",354169001));
});
hpointu.rts.app.clamp_camera = (function hpointu$rts$app$clamp_camera(p__125763){
var map__125764 = p__125763;
var map__125764__$1 = (((((!((map__125764 == null))))?(((((map__125764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125764):map__125764);
var state = map__125764__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125764__$1,new cljs.core.Keyword(null,"world","world",-418292623));
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
hpointu.rts.app.select_units = (function hpointu$rts$app$select_units(p__125767){
var map__125768 = p__125767;
var map__125768__$1 = (((((!((map__125768 == null))))?(((((map__125768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125768):map__125768);
var state = map__125768__$1;
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125768__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var map__125770 = selector;
var map__125770__$1 = (((((!((map__125770 == null))))?(((((map__125770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125770):map__125770);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125770__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125770__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125770__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125770__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var vec__125771 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4217__auto__ = x1;
var y__4218__auto__ = x2;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4214__auto__ = x1;
var y__4215__auto__ = x2;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
var x1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125771,(0),null);
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125771,(1),null);
var vec__125774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4217__auto__ = y1;
var y__4218__auto__ = y2;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4214__auto__ = y1;
var y__4215__auto__ = y2;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
var y1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125774,(0),null);
var y2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125774,(1),null);
var rect = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1__$1,y1__$1,(x2__$1 - x1__$1),(y2__$1 - y1__$1)], null);
hpointu.rts.app.select_unit = (function hpointu$rts$app$select_units_$_select_unit(p__125778){
var map__125779 = p__125778;
var map__125779__$1 = (((((!((map__125779 == null))))?(((((map__125779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125779):map__125779);
var u = map__125779__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125779__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125779__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u,new cljs.core.Keyword(null,"selected?","selected?",-742502788),hpointu.rts.core.collides_QMARK_(hpointu.rts.app.unit_aabb(state,u),rect));
});

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"units","units",-533089095),(function (p1__125766_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.select_unit,p1__125766_SHARP_));
}));
});
hpointu.rts.app.end_game_left_click = (function hpointu$rts$app$end_game_left_click(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.select_units(state),new cljs.core.Keyword(null,"selector","selector",762528866)),new cljs.core.Keyword(null,"left-click","left-click",-1325204750));
});
hpointu.rts.app.end_game_right_click = (function hpointu$rts$app$end_game_right_click(p__125782){
var map__125783 = p__125782;
var map__125783__$1 = (((((!((map__125783 == null))))?(((((map__125783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125783):map__125783);
var state = map__125783__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125783__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var right_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125783__$1,new cljs.core.Keyword(null,"right-click","right-click",-1443353028));
hpointu.rts.app.set_unit_destination = (function hpointu$rts$app$end_game_right_click_$_set_unit_destination(p__125785){
var map__125786 = p__125785;
var map__125786__$1 = (((((!((map__125786 == null))))?(((((map__125786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125786):map__125786);
var unit = map__125786__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125786__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125786__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125786__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
if(cljs.core.truth_(selected_QMARK_)){
var waypoints = hpointu.rts.path.path(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),right_click);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(unit,new cljs.core.Keyword(null,"waypoints","waypoints",-844253224),waypoints);
} else {
return unit;
}
});

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"units","units",-533089095),(function (p1__125781_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.set_unit_destination,p1__125781_SHARP_));
})),new cljs.core.Keyword(null,"right-click","right-click",-1443353028));
});
hpointu.rts.app.handle_mouse_game = (function hpointu$rts$app$handle_mouse_game(p__125790){
var map__125791 = p__125790;
var map__125791__$1 = (((((!((map__125791 == null))))?(((((map__125791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125791):map__125791);
var state = map__125791__$1;
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125791__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125791__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var right_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125791__$1,new cljs.core.Keyword(null,"right-click","right-click",-1443353028));
var vec__125793 = hpointu.rts.input.mouse_pos(hpointu.rts.app.get_game_canvas());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125793,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125793,(1),null);
var vec__125796 = hpointu.rts.app.to_grid(camera,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var wx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125796,(0),null);
var wy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125796,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = hpointu.rts.input.mouse_pressed_QMARK_(new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(hpointu.rts.input.mouse_pressed_QMARK_(new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(selector)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"selector","selector",762528866),(function (p1__125788_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__125788_SHARP_,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y2","y2",-718691301),y], 0));
}));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"left-click","left-click",-1325204750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wx,wy], null)),new cljs.core.Keyword(null,"selector","selector",762528866),(function (p1__125789_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__125789_SHARP_,new cljs.core.Keyword(null,"x1","x1",-1863922247),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y2","y2",-718691301),y], 0));
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
var vec__125799 = hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$2(hpointu.rts.input.mouse_pos(hpointu.rts.app.get_minimap_canvas()),(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125799,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125799,(1),null);
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
hpointu.rts.app.handle_keys = (function hpointu$rts$app$handle_keys(p__125802){
var map__125803 = p__125802;
var map__125803__$1 = (((((!((map__125803 == null))))?(((((map__125803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125803):map__125803);
var state = map__125803__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125803__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var G__125805 = state;
var G__125805__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = hover;
if(cljs.core.truth_(and__4115__auto__)){
return hpointu.rts.input.key_pressed_QMARK_("KeyW");
} else {
return and__4115__auto__;
}
})())?hpointu.rts.app.add_wall(G__125805):G__125805);
if(cljs.core.truth_(cljs.core.some(hpointu.rts.input.key_pressed_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrowUp",null,"ArrowDown",null,"ArrowRight",null,"ArrowLeft",null], null), null)))){
return hpointu.rts.app.move_camera(G__125805__$1,((hpointu.rts.input.key_pressed_QMARK_("ArrowLeft"))?(-1):((hpointu.rts.input.key_pressed_QMARK_("ArrowRight"))?(1):(0)
)),((hpointu.rts.input.key_pressed_QMARK_("ArrowUp"))?(-1):((hpointu.rts.input.key_pressed_QMARK_("ArrowDown"))?(1):(0)
)));
} else {
return G__125805__$1;
}
});
hpointu.rts.app.move_units = (function hpointu$rts$app$move_units(p__125807,dt){
var map__125808 = p__125807;
var map__125808__$1 = (((((!((map__125808 == null))))?(((((map__125808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125808):map__125808);
var state = map__125808__$1;
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125808__$1,new cljs.core.Keyword(null,"units","units",-533089095));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__125806_SHARP_){
return hpointu.rts.core.walk(p1__125806_SHARP_,dt);
}),units)));
});
hpointu.rts.app.update_state = (function hpointu$rts$app$update_state(p__125810,dt){
var map__125811 = p__125810;
var map__125811__$1 = (((((!((map__125811 == null))))?(((((map__125811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125811):map__125811);
var state = map__125811__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125811__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125811__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));

var canvas = hpointu.rts.app.get_game_canvas();
var vec__125813 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core._PLUS_),camera,hpointu.rts.app.to_world.cljs$core$IFn$_invoke$arity$1(hpointu.rts.input.mouse_pos(canvas)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125813,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125813,(1),null);
return hpointu.rts.app.redraw_visible(hpointu.rts.app.handle_mouse(hpointu.rts.app.handle_keys(hpointu.rts.app.update_hover(hpointu.rts.app.move_units(state,dt),x,y))));
});
hpointu.rts.app.draw_game_elem_BANG_ = (function hpointu$rts$app$draw_game_elem_BANG_(state,p__125816){
var vec__125817 = p__125816;
var seq__125818 = cljs.core.seq(vec__125817);
var first__125819 = cljs.core.first(seq__125818);
var seq__125818__$1 = cljs.core.next(seq__125818);
var update_type = first__125819;
var args = seq__125818__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_type,new cljs.core.Keyword(null,"cell","cell",764245084))){
var vec__125820 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125820,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125820,(1),null);
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
hpointu.rts.app.draw_minimap_elem_BANG_ = (function hpointu$rts$app$draw_minimap_elem_BANG_(ctx,p__125823,p__125824){
var map__125825 = p__125823;
var map__125825__$1 = (((((!((map__125825 == null))))?(((((map__125825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125825):map__125825);
var state = map__125825__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125825__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var vec__125826 = p__125824;
var seq__125827 = cljs.core.seq(vec__125826);
var first__125828 = cljs.core.first(seq__125827);
var seq__125827__$1 = cljs.core.next(seq__125827);
var update_type = first__125828;
var args = seq__125827__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_type,new cljs.core.Keyword(null,"cell","cell",764245084))){
var size = (3);
var vec__125830 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125830,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125830,(1),null);
var color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":"#111");
var vec__125833 = hpointu.rts.app.to_minimap_canvas(args,size);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125833,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125833,(1),null);
return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"w","w",354169001),size,new cljs.core.Keyword(null,"h","h",1109658740),size,new cljs.core.Keyword(null,"fill","fill",883462889),color], null));
} else {
return null;
}
});
hpointu.rts.app.draw_BANG_ = (function hpointu$rts$app$draw_BANG_(p__125836,contexts){
var map__125837 = p__125836;
var map__125837__$1 = (((((!((map__125837 == null))))?(((((map__125837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125837):map__125837);
var state = map__125837__$1;
var world_updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125837__$1,new cljs.core.Keyword(null,"world-updates","world-updates",1616740218));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125837__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125837__$1,new cljs.core.Keyword(null,"units","units",-533089095));
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125837__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var seq__125839_125928 = cljs.core.seq(world_updates);
var chunk__125840_125929 = null;
var count__125841_125930 = (0);
var i__125842_125931 = (0);
while(true){
if((i__125842_125931 < count__125841_125930)){
var wu_125932 = chunk__125840_125929.cljs$core$IIndexed$_nth$arity$2(null,i__125842_125931);
hpointu.rts.app.draw_game_elem_BANG_(state,wu_125932);

hpointu.rts.app.draw_minimap_elem_BANG_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),state,wu_125932);


var G__125933 = seq__125839_125928;
var G__125934 = chunk__125840_125929;
var G__125935 = count__125841_125930;
var G__125936 = (i__125842_125931 + (1));
seq__125839_125928 = G__125933;
chunk__125840_125929 = G__125934;
count__125841_125930 = G__125935;
i__125842_125931 = G__125936;
continue;
} else {
var temp__5735__auto___125937 = cljs.core.seq(seq__125839_125928);
if(temp__5735__auto___125937){
var seq__125839_125938__$1 = temp__5735__auto___125937;
if(cljs.core.chunked_seq_QMARK_(seq__125839_125938__$1)){
var c__4556__auto___125939 = cljs.core.chunk_first(seq__125839_125938__$1);
var G__125940 = cljs.core.chunk_rest(seq__125839_125938__$1);
var G__125941 = c__4556__auto___125939;
var G__125942 = cljs.core.count(c__4556__auto___125939);
var G__125943 = (0);
seq__125839_125928 = G__125940;
chunk__125840_125929 = G__125941;
count__125841_125930 = G__125942;
i__125842_125931 = G__125943;
continue;
} else {
var wu_125944 = cljs.core.first(seq__125839_125938__$1);
hpointu.rts.app.draw_game_elem_BANG_(state,wu_125944);

hpointu.rts.app.draw_minimap_elem_BANG_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),state,wu_125944);


var G__125945 = cljs.core.next(seq__125839_125938__$1);
var G__125946 = null;
var G__125947 = (0);
var G__125948 = (0);
seq__125839_125928 = G__125945;
chunk__125840_125929 = G__125946;
count__125841_125930 = G__125947;
i__125842_125931 = G__125948;
continue;
}
} else {
}
}
break;
}

var seq__125843_125949 = cljs.core.seq(units);
var chunk__125845_125950 = null;
var count__125846_125951 = (0);
var i__125847_125952 = (0);
while(true){
if((i__125847_125952 < count__125846_125951)){
var map__125865_125953 = chunk__125845_125950.cljs$core$IIndexed$_nth$arity$2(null,i__125847_125952);
var map__125865_125954__$1 = (((((!((map__125865_125953 == null))))?(((((map__125865_125953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125865_125953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125865_125953):map__125865_125953);
var u_125955 = map__125865_125954__$1;
var x_125956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125865_125954__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_125957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125865_125954__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__125958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125865_125954__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
if(hpointu.rts.app.visible_QMARK_(state,x_125956,y_125957)){
var vec__125867_125959 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_125956,y_125957], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE / (2)),(hpointu.rts.app.SIZE / (2))], null));
var x_125960__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125867_125959,(0),null);
var y_125961__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125867_125959,(1),null);
var color_125962 = "#0cf";
if(cljs.core.truth_(selected_QMARK__125958)){
var vec__125870_125963 = hpointu.rts.app.unit_aabb(state,u_125955);
var x_125964__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125870_125963,(0),null);
var y_125965__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125870_125963,(1),null);
var w_125966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125870_125963,(2),null);
var h_125967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125870_125963,(3),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),(x_125964__$2 - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y_125965__$2 - (3)),new cljs.core.Keyword(null,"w","w",354169001),(w_125966 + (6)),new cljs.core.Keyword(null,"h","h",1109658740),(h_125967 + (6)),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null));
} else {
}

hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),x_125960__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_125961__$1,new cljs.core.Keyword(null,"r","r",-471384190),(12),new cljs.core.Keyword(null,"fill","fill",883462889),color_125962], null));


var G__125968 = seq__125843_125949;
var G__125969 = chunk__125845_125950;
var G__125970 = count__125846_125951;
var G__125971 = (i__125847_125952 + (1));
seq__125843_125949 = G__125968;
chunk__125845_125950 = G__125969;
count__125846_125951 = G__125970;
i__125847_125952 = G__125971;
continue;
} else {
var G__125972 = seq__125843_125949;
var G__125973 = chunk__125845_125950;
var G__125974 = count__125846_125951;
var G__125975 = (i__125847_125952 + (1));
seq__125843_125949 = G__125972;
chunk__125845_125950 = G__125973;
count__125846_125951 = G__125974;
i__125847_125952 = G__125975;
continue;
}
} else {
var temp__5735__auto___125976 = cljs.core.seq(seq__125843_125949);
if(temp__5735__auto___125976){
var seq__125843_125977__$1 = temp__5735__auto___125976;
if(cljs.core.chunked_seq_QMARK_(seq__125843_125977__$1)){
var c__4556__auto___125978 = cljs.core.chunk_first(seq__125843_125977__$1);
var G__125979 = cljs.core.chunk_rest(seq__125843_125977__$1);
var G__125980 = c__4556__auto___125978;
var G__125981 = cljs.core.count(c__4556__auto___125978);
var G__125982 = (0);
seq__125843_125949 = G__125979;
chunk__125845_125950 = G__125980;
count__125846_125951 = G__125981;
i__125847_125952 = G__125982;
continue;
} else {
var map__125873_125983 = cljs.core.first(seq__125843_125977__$1);
var map__125873_125984__$1 = (((((!((map__125873_125983 == null))))?(((((map__125873_125983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125873_125983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125873_125983):map__125873_125983);
var u_125985 = map__125873_125984__$1;
var x_125986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125873_125984__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_125987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125873_125984__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__125988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125873_125984__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
if(hpointu.rts.app.visible_QMARK_(state,x_125986,y_125987)){
var vec__125875_125989 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,hpointu.rts.app.to_game_canvas(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_125986,y_125987], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE / (2)),(hpointu.rts.app.SIZE / (2))], null));
var x_125990__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125875_125989,(0),null);
var y_125991__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125875_125989,(1),null);
var color_125992 = "#0cf";
if(cljs.core.truth_(selected_QMARK__125988)){
var vec__125878_125993 = hpointu.rts.app.unit_aabb(state,u_125985);
var x_125994__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125878_125993,(0),null);
var y_125995__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125878_125993,(1),null);
var w_125996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125878_125993,(2),null);
var h_125997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125878_125993,(3),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),(x_125994__$2 - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y_125995__$2 - (3)),new cljs.core.Keyword(null,"w","w",354169001),(w_125996 + (6)),new cljs.core.Keyword(null,"h","h",1109658740),(h_125997 + (6)),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null));
} else {
}

hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),x_125990__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_125991__$1,new cljs.core.Keyword(null,"r","r",-471384190),(12),new cljs.core.Keyword(null,"fill","fill",883462889),color_125992], null));


var G__125998 = cljs.core.next(seq__125843_125977__$1);
var G__125999 = null;
var G__126000 = (0);
var G__126001 = (0);
seq__125843_125949 = G__125998;
chunk__125845_125950 = G__125999;
count__125846_125951 = G__126000;
i__125847_125952 = G__126001;
continue;
} else {
var G__126002 = cljs.core.next(seq__125843_125977__$1);
var G__126003 = null;
var G__126004 = (0);
var G__126005 = (0);
seq__125843_125949 = G__126002;
chunk__125845_125950 = G__126003;
count__125846_125951 = G__126004;
i__125847_125952 = G__126005;
continue;
}
}
} else {
}
}
break;
}

var temp__5733__auto___126006 = selector;
if(cljs.core.truth_(temp__5733__auto___126006)){
var map__125881_126007 = temp__5733__auto___126006;
var map__125881_126008__$1 = (((((!((map__125881_126007 == null))))?(((((map__125881_126007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125881_126007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125881_126007):map__125881_126007);
var x1_126009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125881_126008__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1_126010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125881_126008__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2_126011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125881_126008__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2_126012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125881_126008__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("game"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),x1_126009,new cljs.core.Keyword(null,"y","y",-1757859776),y1_126010,new cljs.core.Keyword(null,"w","w",354169001),(x2_126011 - x1_126009),new cljs.core.Keyword(null,"h","h",1109658740),(y2_126012 - y1_126010),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null));
} else {
}

var vec__125883_126013 = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(state);
var cx_126014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125883_126013,(0),null);
var cy_126015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125883_126013,(1),null);
var mmap_126016 = (contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap","minimap",-1428643929)) : contexts.call(null,new cljs.core.Keyword(null,"minimap","minimap",-1428643929)));
new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(mmap_126016).clearRect((0),(0),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(mmap_126016).width,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(mmap_126016).height);

new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(mmap_126016).drawImage(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1((contexts.cljs$core$IFn$_invoke$arity$1 ? contexts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)) : contexts.call(null,new cljs.core.Keyword(null,"minimap-off","minimap-off",-1265422186)))),(0),(0));

var seq__125886_126017 = cljs.core.seq(units);
var chunk__125887_126018 = null;
var count__125888_126019 = (0);
var i__125889_126020 = (0);
while(true){
if((i__125889_126020 < count__125888_126019)){
var map__125900_126021 = chunk__125887_126018.cljs$core$IIndexed$_nth$arity$2(null,i__125889_126020);
var map__125900_126022__$1 = (((((!((map__125900_126021 == null))))?(((((map__125900_126021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125900_126021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125900_126021):map__125900_126021);
var x_126023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125900_126022__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_126024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125900_126022__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__126025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125900_126022__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var vec__125902_126026 = hpointu.rts.app.to_minimap_canvas(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_126023,y_126024], null),(3));
var x_126027__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125902_126026,(0),null);
var y_126028__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125902_126026,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_126027__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_126028__$1,new cljs.core.Keyword(null,"w","w",354169001),(3),new cljs.core.Keyword(null,"h","h",1109658740),(3),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(selected_QMARK__126025)?"yellow":"#0cf")], null));


var G__126029 = seq__125886_126017;
var G__126030 = chunk__125887_126018;
var G__126031 = count__125888_126019;
var G__126032 = (i__125889_126020 + (1));
seq__125886_126017 = G__126029;
chunk__125887_126018 = G__126030;
count__125888_126019 = G__126031;
i__125889_126020 = G__126032;
continue;
} else {
var temp__5735__auto___126033 = cljs.core.seq(seq__125886_126017);
if(temp__5735__auto___126033){
var seq__125886_126034__$1 = temp__5735__auto___126033;
if(cljs.core.chunked_seq_QMARK_(seq__125886_126034__$1)){
var c__4556__auto___126035 = cljs.core.chunk_first(seq__125886_126034__$1);
var G__126036 = cljs.core.chunk_rest(seq__125886_126034__$1);
var G__126037 = c__4556__auto___126035;
var G__126038 = cljs.core.count(c__4556__auto___126035);
var G__126039 = (0);
seq__125886_126017 = G__126036;
chunk__125887_126018 = G__126037;
count__125888_126019 = G__126038;
i__125889_126020 = G__126039;
continue;
} else {
var map__125905_126040 = cljs.core.first(seq__125886_126034__$1);
var map__125905_126041__$1 = (((((!((map__125905_126040 == null))))?(((((map__125905_126040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125905_126040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125905_126040):map__125905_126040);
var x_126042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125905_126041__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_126043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125905_126041__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK__126044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125905_126041__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var vec__125907_126045 = hpointu.rts.app.to_minimap_canvas(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_126042,y_126043], null),(3));
var x_126046__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125907_126045,(0),null);
var y_126047__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125907_126045,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_126046__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_126047__$1,new cljs.core.Keyword(null,"w","w",354169001),(3),new cljs.core.Keyword(null,"h","h",1109658740),(3),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(selected_QMARK__126044)?"yellow":"#0cf")], null));


var G__126048 = cljs.core.next(seq__125886_126034__$1);
var G__126049 = null;
var G__126050 = (0);
var G__126051 = (0);
seq__125886_126017 = G__126048;
chunk__125887_126018 = G__126049;
count__125888_126019 = G__126050;
i__125889_126020 = G__126051;
continue;
}
} else {
}
}
break;
}

hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"x","x",2099068185),((3) * cx_126014),new cljs.core.Keyword(null,"y","y",-1757859776),((3) * cy_126015),new cljs.core.Keyword(null,"w","w",354169001),(53),new cljs.core.Keyword(null,"h","h",1109658740),(42),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null));

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
var _STAR_print_newline_STAR__orig_val__125914_126052 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__125915_126053 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__125916_126054 = true;
var _STAR_print_fn_STAR__temp_val__125917_126055 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__125916_126054);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__125917_126055);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hpointu.rts.app.state),new cljs.core.Keyword(null,"world","world",-418292623)),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__125915_126053);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__125914_126052);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()].join('');
});
hpointu.rts.app.rts_app = (function hpointu$rts$app$rts_app(props){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 5px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black"], null)], null),"RTS Demo",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.7em",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"mono",new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(90)], null)], null),"- Press W on the map to place a wall"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column wrap"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"minimap",new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"height","height",1025178622),(223),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#111",new cljs.core.Keyword(null,"width","width",-384071477),(223),new cljs.core.Keyword(null,"height","height",1025178622),(223)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"mono",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),"TODO:"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Minimap"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Camera movement"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Entities"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Mouse clicks..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through",new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"Path finding"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Mouse mode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Stop scrolling on keys"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"initial"], null)], null),"Gameplay elements"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"game",new cljs.core.Keyword(null,"width","width",-384071477),(611),new cljs.core.Keyword(null,"height","height",1025178622),(480),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(611),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820)], null)], null),hpointu.rts.app.get_debug_content()], null)], null);
});
hpointu.rts.app.timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hpointu.rts.app.stop = (function hpointu$rts$app$stop(){
var seq__125918_126056 = cljs.core.seq(cljs.core.deref(hpointu.rts.app.timers));
var chunk__125919_126057 = null;
var count__125920_126058 = (0);
var i__125921_126059 = (0);
while(true){
if((i__125921_126059 < count__125920_126058)){
var t_126060 = chunk__125919_126057.cljs$core$IIndexed$_nth$arity$2(null,i__125921_126059);
clearInterval(t_126060);


var G__126061 = seq__125918_126056;
var G__126062 = chunk__125919_126057;
var G__126063 = count__125920_126058;
var G__126064 = (i__125921_126059 + (1));
seq__125918_126056 = G__126061;
chunk__125919_126057 = G__126062;
count__125920_126058 = G__126063;
i__125921_126059 = G__126064;
continue;
} else {
var temp__5735__auto___126065 = cljs.core.seq(seq__125918_126056);
if(temp__5735__auto___126065){
var seq__125918_126066__$1 = temp__5735__auto___126065;
if(cljs.core.chunked_seq_QMARK_(seq__125918_126066__$1)){
var c__4556__auto___126067 = cljs.core.chunk_first(seq__125918_126066__$1);
var G__126068 = cljs.core.chunk_rest(seq__125918_126066__$1);
var G__126069 = c__4556__auto___126067;
var G__126070 = cljs.core.count(c__4556__auto___126067);
var G__126071 = (0);
seq__125918_126056 = G__126068;
chunk__125919_126057 = G__126069;
count__125920_126058 = G__126070;
i__125921_126059 = G__126071;
continue;
} else {
var t_126072 = cljs.core.first(seq__125918_126066__$1);
clearInterval(t_126072);


var G__126073 = cljs.core.next(seq__125918_126066__$1);
var G__126074 = null;
var G__126075 = (0);
var G__126076 = (0);
seq__125918_126056 = G__126073;
chunk__125919_126057 = G__126074;
count__125920_126058 = G__126075;
i__125921_126059 = G__126076;
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

var contexts_126077 = hpointu.rts.app.init_contexts();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hpointu.rts.app.timers,cljs.core.conj,setInterval((function (){
return hpointu.rts.app.tick_BANG_(contexts_126077);
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
