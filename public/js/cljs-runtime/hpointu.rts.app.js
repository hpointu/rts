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
var _STAR_print_newline_STAR__orig_val__41688_41846 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41689_41847 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41690_41848 = true;
var _STAR_print_fn_STAR__temp_val__41691_41849 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41690_41848);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41691_41849);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hpointu.rts.app.state),new cljs.core.Keyword(null,"world","world",-418292623)),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41689_41847);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41688_41846);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()].join('');
});
hpointu.rts.app.SIZE = (35);
hpointu.rts.app.init_state = (function hpointu$rts$app$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"world","world",-418292623),hpointu.rts.core.__GT_world((112),(112)),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.PersistentVector.EMPTY], null);
});
hpointu.rts.app.redraw_world = (function hpointu$rts$app$redraw_world(p__41692){
var map__41693 = p__41692;
var map__41693__$1 = (((((!((map__41693 == null))))?(((((map__41693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41693):map__41693);
var state = map__41693__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41693__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var elems = (function (){var iter__4529__auto__ = (function hpointu$rts$app$redraw_world_$_iter__41695(s__41696){
return (new cljs.core.LazySeq(null,(function (){
var s__41696__$1 = s__41696;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41696__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__41696__$1,x,xs__6292__auto__,temp__5735__auto__,map__41693,map__41693__$1,state,world){
return (function hpointu$rts$app$redraw_world_$_iter__41695_$_iter__41697(s__41698){
return (new cljs.core.LazySeq(null,((function (s__41696__$1,x,xs__6292__auto__,temp__5735__auto__,map__41693,map__41693__$1,state,world){
return (function (){
var s__41698__$1 = s__41698;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__41698__$1);
if(temp__5735__auto____$1){
var s__41698__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41698__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__41698__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__41700 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__41699 = (0);
while(true){
if((i__41699 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__41699);
cljs.core.chunk_append(b__41700,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__41850 = (i__41699 + (1));
i__41699 = G__41850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41700),hpointu$rts$app$redraw_world_$_iter__41695_$_iter__41697(cljs.core.chunk_rest(s__41698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41700),null);
}
} else {
var y = cljs.core.first(s__41698__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),hpointu$rts$app$redraw_world_$_iter__41695_$_iter__41697(cljs.core.rest(s__41698__$2)));
}
} else {
return null;
}
break;
}
});})(s__41696__$1,x,xs__6292__auto__,temp__5735__auto__,map__41693,map__41693__$1,state,world))
,null,null));
});})(s__41696__$1,x,xs__6292__auto__,temp__5735__auto__,map__41693,map__41693__$1,state,world))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,hpointu$rts$app$redraw_world_$_iter__41695(cljs.core.rest(s__41696__$1)));
} else {
var G__41851 = cljs.core.rest(s__41696__$1);
s__41696__$1 = G__41851;
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
var G__41702 = arguments.length;
switch (G__41702) {
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

(hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2 = (function (p__41703,size){
var vec__41704 = p__41703;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41704,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41704,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(size * x),(size * y)], null);
}));

(hpointu.rts.app.to_screen.cljs$lang$maxFixedArity = 2);

hpointu.rts.app.to_world = (function hpointu$rts$app$to_world(p__41707){
var vec__41708 = p__41707;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41708,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41708,(1),null);
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
var vec__41711 = hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41711,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41711,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((1) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((1) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (2)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (2)),new cljs.core.Keyword(null,"fill","fill",883462889),tile_color], null));

return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((2) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((2) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (4)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (4)),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
hpointu.rts.app.draw_minimap_BANG_ = (function hpointu$rts$app$draw_minimap_BANG_(ctx,p__41714){
var map__41715 = p__41714;
var map__41715__$1 = (((((!((map__41715 == null))))?(((((map__41715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41715):map__41715);
var state = map__41715__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41715__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var seq__41717 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_width(world)));
var chunk__41722 = null;
var count__41723 = (0);
var i__41724 = (0);
while(true){
if((i__41724 < count__41723)){
var x = chunk__41722.cljs$core$IIndexed$_nth$arity$2(null,i__41724);
var seq__41725_41853 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world)));
var chunk__41726_41854 = null;
var count__41727_41855 = (0);
var i__41728_41856 = (0);
while(true){
if((i__41728_41856 < count__41727_41855)){
var y_41857 = chunk__41726_41854.cljs$core$IIndexed$_nth$arity$2(null,i__41728_41856);
var size_41858 = (2);
var color_41859 = ((hpointu.rts.core.obstacle_QMARK_(world,x,y_41857))?"gray":"#111");
var vec__41759_41860 = hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_41857], null),size_41858);
var x_41861__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41759_41860,(0),null);
var y_41862__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41759_41860,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_41861__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_41862__$1,new cljs.core.Keyword(null,"w","w",354169001),size_41858,new cljs.core.Keyword(null,"h","h",1109658740),size_41858,new cljs.core.Keyword(null,"fill","fill",883462889),color_41859], null));


var G__41863 = seq__41725_41853;
var G__41864 = chunk__41726_41854;
var G__41865 = count__41727_41855;
var G__41866 = (i__41728_41856 + (1));
seq__41725_41853 = G__41863;
chunk__41726_41854 = G__41864;
count__41727_41855 = G__41865;
i__41728_41856 = G__41866;
continue;
} else {
var temp__5735__auto___41867 = cljs.core.seq(seq__41725_41853);
if(temp__5735__auto___41867){
var seq__41725_41868__$1 = temp__5735__auto___41867;
if(cljs.core.chunked_seq_QMARK_(seq__41725_41868__$1)){
var c__4556__auto___41869 = cljs.core.chunk_first(seq__41725_41868__$1);
var G__41870 = cljs.core.chunk_rest(seq__41725_41868__$1);
var G__41871 = c__4556__auto___41869;
var G__41872 = cljs.core.count(c__4556__auto___41869);
var G__41873 = (0);
seq__41725_41853 = G__41870;
chunk__41726_41854 = G__41871;
count__41727_41855 = G__41872;
i__41728_41856 = G__41873;
continue;
} else {
var y_41874 = cljs.core.first(seq__41725_41868__$1);
var size_41875 = (2);
var color_41876 = ((hpointu.rts.core.obstacle_QMARK_(world,x,y_41874))?"gray":"#111");
var vec__41762_41877 = hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_41874], null),size_41875);
var x_41878__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41762_41877,(0),null);
var y_41879__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41762_41877,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_41878__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_41879__$1,new cljs.core.Keyword(null,"w","w",354169001),size_41875,new cljs.core.Keyword(null,"h","h",1109658740),size_41875,new cljs.core.Keyword(null,"fill","fill",883462889),color_41876], null));


var G__41880 = cljs.core.next(seq__41725_41868__$1);
var G__41881 = null;
var G__41882 = (0);
var G__41883 = (0);
seq__41725_41853 = G__41880;
chunk__41726_41854 = G__41881;
count__41727_41855 = G__41882;
i__41728_41856 = G__41883;
continue;
}
} else {
}
}
break;
}

var G__41884 = seq__41717;
var G__41885 = chunk__41722;
var G__41886 = count__41723;
var G__41887 = (i__41724 + (1));
seq__41717 = G__41884;
chunk__41722 = G__41885;
count__41723 = G__41886;
i__41724 = G__41887;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41717);
if(temp__5735__auto__){
var seq__41717__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41717__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41717__$1);
var G__41888 = cljs.core.chunk_rest(seq__41717__$1);
var G__41889 = c__4556__auto__;
var G__41890 = cljs.core.count(c__4556__auto__);
var G__41891 = (0);
seq__41717 = G__41888;
chunk__41722 = G__41889;
count__41723 = G__41890;
i__41724 = G__41891;
continue;
} else {
var x = cljs.core.first(seq__41717__$1);
var seq__41718_41892 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world)));
var chunk__41719_41893 = null;
var count__41720_41894 = (0);
var i__41721_41895 = (0);
while(true){
if((i__41721_41895 < count__41720_41894)){
var y_41896 = chunk__41719_41893.cljs$core$IIndexed$_nth$arity$2(null,i__41721_41895);
var size_41897 = (2);
var color_41898 = ((hpointu.rts.core.obstacle_QMARK_(world,x,y_41896))?"gray":"#111");
var vec__41771_41899 = hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_41896], null),size_41897);
var x_41900__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41771_41899,(0),null);
var y_41901__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41771_41899,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_41900__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_41901__$1,new cljs.core.Keyword(null,"w","w",354169001),size_41897,new cljs.core.Keyword(null,"h","h",1109658740),size_41897,new cljs.core.Keyword(null,"fill","fill",883462889),color_41898], null));


var G__41902 = seq__41718_41892;
var G__41903 = chunk__41719_41893;
var G__41904 = count__41720_41894;
var G__41905 = (i__41721_41895 + (1));
seq__41718_41892 = G__41902;
chunk__41719_41893 = G__41903;
count__41720_41894 = G__41904;
i__41721_41895 = G__41905;
continue;
} else {
var temp__5735__auto___41906__$1 = cljs.core.seq(seq__41718_41892);
if(temp__5735__auto___41906__$1){
var seq__41718_41907__$1 = temp__5735__auto___41906__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41718_41907__$1)){
var c__4556__auto___41908 = cljs.core.chunk_first(seq__41718_41907__$1);
var G__41909 = cljs.core.chunk_rest(seq__41718_41907__$1);
var G__41910 = c__4556__auto___41908;
var G__41911 = cljs.core.count(c__4556__auto___41908);
var G__41912 = (0);
seq__41718_41892 = G__41909;
chunk__41719_41893 = G__41910;
count__41720_41894 = G__41911;
i__41721_41895 = G__41912;
continue;
} else {
var y_41913 = cljs.core.first(seq__41718_41907__$1);
var size_41914 = (2);
var color_41915 = ((hpointu.rts.core.obstacle_QMARK_(world,x,y_41913))?"gray":"#111");
var vec__41774_41916 = hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_41913], null),size_41914);
var x_41917__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41774_41916,(0),null);
var y_41918__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41774_41916,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_41917__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_41918__$1,new cljs.core.Keyword(null,"w","w",354169001),size_41914,new cljs.core.Keyword(null,"h","h",1109658740),size_41914,new cljs.core.Keyword(null,"fill","fill",883462889),color_41915], null));


var G__41919 = cljs.core.next(seq__41718_41907__$1);
var G__41920 = null;
var G__41921 = (0);
var G__41922 = (0);
seq__41718_41892 = G__41919;
chunk__41719_41893 = G__41920;
count__41720_41894 = G__41921;
i__41721_41895 = G__41922;
continue;
}
} else {
}
}
break;
}

var G__41923 = cljs.core.next(seq__41717__$1);
var G__41924 = null;
var G__41925 = (0);
var G__41926 = (0);
seq__41717 = G__41923;
chunk__41722 = G__41924;
count__41723 = G__41925;
i__41724 = G__41926;
continue;
}
} else {
return null;
}
}
break;
}
});
hpointu.rts.app.update_hover = (function hpointu$rts$app$update_hover(p__41777,x,y){
var map__41778 = p__41777;
var map__41778__$1 = (((((!((map__41778 == null))))?(((((map__41778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41778):map__41778);
var state = map__41778__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41778__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41778__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var new_hover = ((hpointu.rts.core.in_world_QMARK_(world,x,y))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),new_hover),new cljs.core.Keyword(null,"world-updates","world-updates",1616740218),cljs.core.into,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_hover,hover], null)));
});
hpointu.rts.app.handle_input = (function hpointu$rts$app$handle_input(p__41780){
var map__41781 = p__41780;
var map__41781__$1 = (((((!((map__41781 == null))))?(((((map__41781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41781):map__41781);
var state = map__41781__$1;
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41781__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
if(cljs.core.truth_((function (){var and__4115__auto__ = hover;
if(cljs.core.truth_(and__4115__auto__)){
return hpointu.rts.input.key_pressed_QMARK_("KeyW");
} else {
return and__4115__auto__;
}
})())){
var vec__41783 = hover;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41783,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41783,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),y,x], null),new cljs.core.Keyword(null,"w","w",354169001));
} else {
return state;
}
});
hpointu.rts.app.update_state = (function hpointu$rts$app$update_state(p__41786,dt){
var map__41787 = p__41786;
var map__41787__$1 = (((((!((map__41787 == null))))?(((((map__41787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41787):map__41787);
var state = map__41787__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41787__$1,new cljs.core.Keyword(null,"world","world",-418292623));

var canvas = hpointu.rts.app.get_game_canvas();
var vec__41789 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,hpointu.rts.app.to_world(hpointu.rts.input.mouse_pos(canvas)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41789,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41789,(1),null);
return hpointu.rts.app.handle_input(hpointu.rts.app.update_hover(state,x,y));
});
hpointu.rts.app.draw_BANG_ = (function hpointu$rts$app$draw_BANG_(p__41792){
var map__41793 = p__41792;
var map__41793__$1 = (((((!((map__41793 == null))))?(((((map__41793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41793):map__41793);
var state = map__41793__$1;
var world_updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41793__$1,new cljs.core.Keyword(null,"world-updates","world-updates",1616740218));
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41793__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41793__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var seq__41795_41927 = cljs.core.seq(world_updates);
var chunk__41797_41928 = null;
var count__41798_41929 = (0);
var i__41799_41930 = (0);
while(true){
if((i__41799_41930 < count__41798_41929)){
var vec__41807_41931 = chunk__41797_41928.cljs$core$IIndexed$_nth$arity$2(null,i__41799_41930);
var x_41932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41807_41931,(0),null);
var y_41933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41807_41931,(1),null);
if(hpointu.rts.app.visible_QMARK_(state,x_41932,y_41933)){
hpointu.rts.app.draw_tile_BANG_(hpointu.rts.app.context("game"),world,x_41932,y_41933,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41932,y_41933], null)));


var G__41934 = seq__41795_41927;
var G__41935 = chunk__41797_41928;
var G__41936 = count__41798_41929;
var G__41937 = (i__41799_41930 + (1));
seq__41795_41927 = G__41934;
chunk__41797_41928 = G__41935;
count__41798_41929 = G__41936;
i__41799_41930 = G__41937;
continue;
} else {
var G__41938 = seq__41795_41927;
var G__41939 = chunk__41797_41928;
var G__41940 = count__41798_41929;
var G__41941 = (i__41799_41930 + (1));
seq__41795_41927 = G__41938;
chunk__41797_41928 = G__41939;
count__41798_41929 = G__41940;
i__41799_41930 = G__41941;
continue;
}
} else {
var temp__5735__auto___41942 = cljs.core.seq(seq__41795_41927);
if(temp__5735__auto___41942){
var seq__41795_41943__$1 = temp__5735__auto___41942;
if(cljs.core.chunked_seq_QMARK_(seq__41795_41943__$1)){
var c__4556__auto___41944 = cljs.core.chunk_first(seq__41795_41943__$1);
var G__41945 = cljs.core.chunk_rest(seq__41795_41943__$1);
var G__41946 = c__4556__auto___41944;
var G__41947 = cljs.core.count(c__4556__auto___41944);
var G__41948 = (0);
seq__41795_41927 = G__41945;
chunk__41797_41928 = G__41946;
count__41798_41929 = G__41947;
i__41799_41930 = G__41948;
continue;
} else {
var vec__41810_41949 = cljs.core.first(seq__41795_41943__$1);
var x_41950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41810_41949,(0),null);
var y_41951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41810_41949,(1),null);
if(hpointu.rts.app.visible_QMARK_(state,x_41950,y_41951)){
hpointu.rts.app.draw_tile_BANG_(hpointu.rts.app.context("game"),world,x_41950,y_41951,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41950,y_41951], null)));


var G__41952 = cljs.core.next(seq__41795_41943__$1);
var G__41953 = null;
var G__41954 = (0);
var G__41955 = (0);
seq__41795_41927 = G__41952;
chunk__41797_41928 = G__41953;
count__41798_41929 = G__41954;
i__41799_41930 = G__41955;
continue;
} else {
var G__41956 = cljs.core.next(seq__41795_41943__$1);
var G__41957 = null;
var G__41958 = (0);
var G__41959 = (0);
seq__41795_41927 = G__41956;
chunk__41797_41928 = G__41957;
count__41798_41929 = G__41958;
i__41799_41930 = G__41959;
continue;
}
}
} else {
}
}
break;
}

var seq__41813_41960 = cljs.core.seq(world_updates);
var chunk__41814_41961 = null;
var count__41815_41962 = (0);
var i__41816_41963 = (0);
while(true){
if((i__41816_41963 < count__41815_41962)){
var vec__41829_41964 = chunk__41814_41961.cljs$core$IIndexed$_nth$arity$2(null,i__41816_41963);
var x_41965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41829_41964,(0),null);
var y_41966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41829_41964,(1),null);
var size_41967 = (2);
var color_41968 = ((hpointu.rts.core.obstacle_QMARK_(world,x_41965,y_41966))?"gray":"#111");
var vec__41832_41969 = hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41965,y_41966], null),size_41967);
var x_41970__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41832_41969,(0),null);
var y_41971__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41832_41969,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_41970__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_41971__$1,new cljs.core.Keyword(null,"w","w",354169001),size_41967,new cljs.core.Keyword(null,"h","h",1109658740),size_41967,new cljs.core.Keyword(null,"fill","fill",883462889),color_41968], null));


var G__41972 = seq__41813_41960;
var G__41973 = chunk__41814_41961;
var G__41974 = count__41815_41962;
var G__41975 = (i__41816_41963 + (1));
seq__41813_41960 = G__41972;
chunk__41814_41961 = G__41973;
count__41815_41962 = G__41974;
i__41816_41963 = G__41975;
continue;
} else {
var temp__5735__auto___41976 = cljs.core.seq(seq__41813_41960);
if(temp__5735__auto___41976){
var seq__41813_41977__$1 = temp__5735__auto___41976;
if(cljs.core.chunked_seq_QMARK_(seq__41813_41977__$1)){
var c__4556__auto___41978 = cljs.core.chunk_first(seq__41813_41977__$1);
var G__41979 = cljs.core.chunk_rest(seq__41813_41977__$1);
var G__41980 = c__4556__auto___41978;
var G__41981 = cljs.core.count(c__4556__auto___41978);
var G__41982 = (0);
seq__41813_41960 = G__41979;
chunk__41814_41961 = G__41980;
count__41815_41962 = G__41981;
i__41816_41963 = G__41982;
continue;
} else {
var vec__41835_41983 = cljs.core.first(seq__41813_41977__$1);
var x_41984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41835_41983,(0),null);
var y_41985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41835_41983,(1),null);
var size_41986 = (2);
var color_41987 = ((hpointu.rts.core.obstacle_QMARK_(world,x_41984,y_41985))?"gray":"#111");
var vec__41838_41988 = hpointu.rts.app.to_screen.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41984,y_41985], null),size_41986);
var x_41989__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41838_41988,(0),null);
var y_41990__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41838_41988,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(hpointu.rts.app.context("minimap"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),x_41989__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y_41990__$1,new cljs.core.Keyword(null,"w","w",354169001),size_41986,new cljs.core.Keyword(null,"h","h",1109658740),size_41986,new cljs.core.Keyword(null,"fill","fill",883462889),color_41987], null));


var G__41991 = cljs.core.next(seq__41813_41977__$1);
var G__41992 = null;
var G__41993 = (0);
var G__41994 = (0);
seq__41813_41960 = G__41991;
chunk__41814_41961 = G__41992;
count__41815_41962 = G__41993;
i__41816_41963 = G__41994;
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 5px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black"], null)], null),"RTS Demo"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(224),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column wrap"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"minimap",new cljs.core.Keyword(null,"width","width",-384071477),(224),new cljs.core.Keyword(null,"height","height",1025178622),(224),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#111",new cljs.core.Keyword(null,"width","width",-384071477),(224),new cljs.core.Keyword(null,"height","height",1025178622),(224)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),"TODO:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Minimap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Camera movement"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Mouse mode"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"game",new cljs.core.Keyword(null,"width","width",-384071477),(611),new cljs.core.Keyword(null,"height","height",1025178622),(480),new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),(function (p1__41841_SHARP_){
return p1__41841_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(611),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820)], null)], null),hpointu.rts.app.get_debug_content()], null)], null);
});
hpointu.rts.app.timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hpointu.rts.app.stop = (function hpointu$rts$app$stop(){
var seq__41842_41995 = cljs.core.seq(cljs.core.deref(hpointu.rts.app.timers));
var chunk__41843_41996 = null;
var count__41844_41997 = (0);
var i__41845_41998 = (0);
while(true){
if((i__41845_41998 < count__41844_41997)){
var t_41999 = chunk__41843_41996.cljs$core$IIndexed$_nth$arity$2(null,i__41845_41998);
clearInterval(t_41999);


var G__42000 = seq__41842_41995;
var G__42001 = chunk__41843_41996;
var G__42002 = count__41844_41997;
var G__42003 = (i__41845_41998 + (1));
seq__41842_41995 = G__42000;
chunk__41843_41996 = G__42001;
count__41844_41997 = G__42002;
i__41845_41998 = G__42003;
continue;
} else {
var temp__5735__auto___42004 = cljs.core.seq(seq__41842_41995);
if(temp__5735__auto___42004){
var seq__41842_42005__$1 = temp__5735__auto___42004;
if(cljs.core.chunked_seq_QMARK_(seq__41842_42005__$1)){
var c__4556__auto___42006 = cljs.core.chunk_first(seq__41842_42005__$1);
var G__42007 = cljs.core.chunk_rest(seq__41842_42005__$1);
var G__42008 = c__4556__auto___42006;
var G__42009 = cljs.core.count(c__4556__auto___42006);
var G__42010 = (0);
seq__41842_41995 = G__42007;
chunk__41843_41996 = G__42008;
count__41844_41997 = G__42009;
i__41845_41998 = G__42010;
continue;
} else {
var t_42011 = cljs.core.first(seq__41842_42005__$1);
clearInterval(t_42011);


var G__42012 = cljs.core.next(seq__41842_42005__$1);
var G__42013 = null;
var G__42014 = (0);
var G__42015 = (0);
seq__41842_41995 = G__42012;
chunk__41843_41996 = G__42013;
count__41844_41997 = G__42014;
i__41845_41998 = G__42015;
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
