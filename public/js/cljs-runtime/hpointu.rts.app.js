goog.provide('hpointu.rts.app');
hpointu.rts.app.current_time = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
if((typeof hpointu !== 'undefined') && (typeof hpointu.rts !== 'undefined') && (typeof hpointu.rts.app !== 'undefined') && (typeof hpointu.rts.app.state !== 'undefined')){
} else {
hpointu.rts.app.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
hpointu.rts.app.get_debug_content = (function hpointu$rts$app$get_debug_content(){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44888_44925 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44889_44926 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44890_44927 = true;
var _STAR_print_fn_STAR__temp_val__44891_44928 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44890_44927);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44891_44928);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hpointu.rts.app.state),new cljs.core.Keyword(null,"world","world",-418292623)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44889_44926);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44888_44925);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
hpointu.rts.app.SIZE = (35);
hpointu.rts.app.init_state = (function hpointu$rts$app$init_state(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"world","world",-418292623),hpointu.rts.core.__GT_world((15),(10))], null);
});
hpointu.rts.app.to_screen = (function hpointu$rts$app$to_screen(p__44892){
var vec__44893 = p__44892;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44893,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44893,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE * x),(hpointu.rts.app.SIZE * y)], null);
});
hpointu.rts.app.to_world = (function hpointu$rts$app$to_world(p__44896){
var vec__44897 = p__44896;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44897,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44897,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / hpointu.rts.app.SIZE),(y / hpointu.rts.app.SIZE)], null);
});
hpointu.rts.app.get_game_canvas = (function hpointu$rts$app$get_game_canvas(){
return document.getElementById("game");
});
hpointu.rts.app.get_minimap_canvas = (function hpointu$rts$app$get_minimap_canvas(){
return document.getElementById("minimap");
});
hpointu.rts.app.draw_tile_BANG_ = (function hpointu$rts$app$draw_tile_BANG_(ctx,world,x,y,size,hover_QMARK_){
var tile_color = ((hpointu.rts.core.obstacle_QMARK_(world,x,y))?"gray":(cljs.core.truth_(hover_QMARK_)?"green":"#222"));
var vec__44900 = hpointu.rts.app.to_screen(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44900,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44900,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((1) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((1) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (2)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (2)),new cljs.core.Keyword(null,"fill","fill",883462889),tile_color], null));

return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((2) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((2) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (4)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (4)),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
hpointu.rts.app.draw_map_BANG_ = (function hpointu$rts$app$draw_map_BANG_(ctx,p__44903){
var map__44904 = p__44903;
var map__44904__$1 = (((((!((map__44904 == null))))?(((((map__44904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44904):map__44904);
var state = map__44904__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44904__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44904__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var seq__44906 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_width(world)));
var chunk__44911 = null;
var count__44912 = (0);
var i__44913 = (0);
while(true){
if((i__44913 < count__44912)){
var x = chunk__44911.cljs$core$IIndexed$_nth$arity$2(null,i__44913);
var seq__44914_44929 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world)));
var chunk__44915_44930 = null;
var count__44916_44931 = (0);
var i__44917_44932 = (0);
while(true){
if((i__44917_44932 < count__44916_44931)){
var y_44933 = chunk__44915_44930.cljs$core$IIndexed$_nth$arity$2(null,i__44917_44932);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_44933,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_44933], null)));


var G__44934 = seq__44914_44929;
var G__44935 = chunk__44915_44930;
var G__44936 = count__44916_44931;
var G__44937 = (i__44917_44932 + (1));
seq__44914_44929 = G__44934;
chunk__44915_44930 = G__44935;
count__44916_44931 = G__44936;
i__44917_44932 = G__44937;
continue;
} else {
var temp__5735__auto___44938 = cljs.core.seq(seq__44914_44929);
if(temp__5735__auto___44938){
var seq__44914_44939__$1 = temp__5735__auto___44938;
if(cljs.core.chunked_seq_QMARK_(seq__44914_44939__$1)){
var c__4556__auto___44940 = cljs.core.chunk_first(seq__44914_44939__$1);
var G__44941 = cljs.core.chunk_rest(seq__44914_44939__$1);
var G__44942 = c__4556__auto___44940;
var G__44943 = cljs.core.count(c__4556__auto___44940);
var G__44944 = (0);
seq__44914_44929 = G__44941;
chunk__44915_44930 = G__44942;
count__44916_44931 = G__44943;
i__44917_44932 = G__44944;
continue;
} else {
var y_44945 = cljs.core.first(seq__44914_44939__$1);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_44945,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_44945], null)));


var G__44946 = cljs.core.next(seq__44914_44939__$1);
var G__44947 = null;
var G__44948 = (0);
var G__44949 = (0);
seq__44914_44929 = G__44946;
chunk__44915_44930 = G__44947;
count__44916_44931 = G__44948;
i__44917_44932 = G__44949;
continue;
}
} else {
}
}
break;
}

var G__44950 = seq__44906;
var G__44951 = chunk__44911;
var G__44952 = count__44912;
var G__44953 = (i__44913 + (1));
seq__44906 = G__44950;
chunk__44911 = G__44951;
count__44912 = G__44952;
i__44913 = G__44953;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44906);
if(temp__5735__auto__){
var seq__44906__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44906__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44906__$1);
var G__44954 = cljs.core.chunk_rest(seq__44906__$1);
var G__44955 = c__4556__auto__;
var G__44956 = cljs.core.count(c__4556__auto__);
var G__44957 = (0);
seq__44906 = G__44954;
chunk__44911 = G__44955;
count__44912 = G__44956;
i__44913 = G__44957;
continue;
} else {
var x = cljs.core.first(seq__44906__$1);
var seq__44907_44958 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hpointu.rts.core.world_height(world)));
var chunk__44908_44959 = null;
var count__44909_44960 = (0);
var i__44910_44961 = (0);
while(true){
if((i__44910_44961 < count__44909_44960)){
var y_44962 = chunk__44908_44959.cljs$core$IIndexed$_nth$arity$2(null,i__44910_44961);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_44962,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_44962], null)));


var G__44963 = seq__44907_44958;
var G__44964 = chunk__44908_44959;
var G__44965 = count__44909_44960;
var G__44966 = (i__44910_44961 + (1));
seq__44907_44958 = G__44963;
chunk__44908_44959 = G__44964;
count__44909_44960 = G__44965;
i__44910_44961 = G__44966;
continue;
} else {
var temp__5735__auto___44967__$1 = cljs.core.seq(seq__44907_44958);
if(temp__5735__auto___44967__$1){
var seq__44907_44968__$1 = temp__5735__auto___44967__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44907_44968__$1)){
var c__4556__auto___44969 = cljs.core.chunk_first(seq__44907_44968__$1);
var G__44970 = cljs.core.chunk_rest(seq__44907_44968__$1);
var G__44971 = c__4556__auto___44969;
var G__44972 = cljs.core.count(c__4556__auto___44969);
var G__44973 = (0);
seq__44907_44958 = G__44970;
chunk__44908_44959 = G__44971;
count__44909_44960 = G__44972;
i__44910_44961 = G__44973;
continue;
} else {
var y_44974 = cljs.core.first(seq__44907_44968__$1);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_44974,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_44974], null)));


var G__44975 = cljs.core.next(seq__44907_44968__$1);
var G__44976 = null;
var G__44977 = (0);
var G__44978 = (0);
seq__44907_44958 = G__44975;
chunk__44908_44959 = G__44976;
count__44909_44960 = G__44977;
i__44910_44961 = G__44978;
continue;
}
} else {
}
}
break;
}

var G__44979 = cljs.core.next(seq__44906__$1);
var G__44980 = null;
var G__44981 = (0);
var G__44982 = (0);
seq__44906 = G__44979;
chunk__44911 = G__44980;
count__44912 = G__44981;
i__44913 = G__44982;
continue;
}
} else {
return null;
}
}
break;
}
});
hpointu.rts.app.update_state = (function hpointu$rts$app$update_state(p__44918,dt){
var map__44919 = p__44918;
var map__44919__$1 = (((((!((map__44919 == null))))?(((((map__44919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44919):map__44919);
var state = map__44919__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44919__$1,new cljs.core.Keyword(null,"world","world",-418292623));

var canvas = hpointu.rts.app.get_game_canvas();
var vec__44921 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,hpointu.rts.app.to_world(hpointu.rts.input.mouse_pos(canvas)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44921,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44921,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),((hpointu.rts.core.in_world_QMARK_(world,x,y))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null));
});
hpointu.rts.app.draw_BANG_ = (function hpointu$rts$app$draw_BANG_(state){
var canvas = hpointu.rts.app.get_game_canvas();
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
hpointu.rts.app.rts_app = (function hpointu$rts$app$rts_app(props){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 5px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black"], null)], null),"RTS Demo"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(235),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column wrap"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"minimap",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#111",new cljs.core.Keyword(null,"width","width",-384071477),(235),new cljs.core.Keyword(null,"height","height",1025178622),(235)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),"TODO:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Minimap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Camera movement"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Mouse mode"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"game",new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(480),new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),(function (p1__44924_SHARP_){
return p1__44924_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(600),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(820)], null)], null),hpointu.rts.app.get_debug_content()], null)], null);
});
hpointu.rts.app.stop = (function hpointu$rts$app$stop(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Stopping..."], 0));
});
hpointu.rts.app.start = (function hpointu$rts$app$start(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Starting..."], 0));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hpointu.rts.app.rts_app], null),document.getElementById("app"));
});
hpointu.rts.app.init = (function hpointu$rts$app$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing..."], 0));

cljs.core.reset_BANG_(hpointu.rts.app.state,hpointu.rts.app.init_state());

hpointu.rts.app.start();

hpointu.rts.input.init_BANG_();

return setInterval(hpointu.rts.app.tick_BANG_,(20));
});
goog.exportSymbol('hpointu.rts.app.init', hpointu.rts.app.init);

//# sourceMappingURL=hpointu.rts.app.js.map
