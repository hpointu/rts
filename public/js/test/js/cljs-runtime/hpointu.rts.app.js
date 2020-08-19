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
hpointu.rts.app.to_screen = (function hpointu$rts$app$to_screen(p__33698){
var vec__33699 = p__33698;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33699,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33699,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hpointu.rts.app.SIZE * x),(hpointu.rts.app.SIZE * y)], null);
});
hpointu.rts.app.to_world = (function hpointu$rts$app$to_world(p__33702){
var vec__33703 = p__33702;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33703,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33703,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / hpointu.rts.app.SIZE),(y / hpointu.rts.app.SIZE)], null);
});
hpointu.rts.app.get_canvas = (function hpointu$rts$app$get_canvas(){
return document.getElementById("game");
});
hpointu.rts.app.draw_tile_BANG_ = (function hpointu$rts$app$draw_tile_BANG_(ctx,world,x,y,size,hover_QMARK_){
var tile_color = (cljs.core.truth_((hpointu.rts.app.obstacle_QMARK_.cljs$core$IFn$_invoke$arity$3 ? hpointu.rts.app.obstacle_QMARK_.cljs$core$IFn$_invoke$arity$3(world,x,y) : hpointu.rts.app.obstacle_QMARK_.call(null,world,x,y)))?"gray":(cljs.core.truth_(hover_QMARK_)?"green":"#222"));
var vec__33706 = hpointu.rts.app.to_screen(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33706,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33706,(1),null);
hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((1) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((1) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (2)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (2)),new cljs.core.Keyword(null,"fill","fill",883462889),tile_color], null));

return hpointu.rts.graphics.render_item_BANG_.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),((2) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((2) + y__$1),new cljs.core.Keyword(null,"w","w",354169001),(size - (4)),new cljs.core.Keyword(null,"h","h",1109658740),(size - (4)),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
hpointu.rts.app.draw_map_BANG_ = (function hpointu$rts$app$draw_map_BANG_(ctx,p__33709){
var map__33710 = p__33709;
var map__33710__$1 = (((((!((map__33710 == null))))?(((((map__33710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33710):map__33710);
var state = map__33710__$1;
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33710__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33710__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var seq__33712 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((hpointu.rts.app.world_width.cljs$core$IFn$_invoke$arity$1 ? hpointu.rts.app.world_width.cljs$core$IFn$_invoke$arity$1(world) : hpointu.rts.app.world_width.call(null,world))));
var chunk__33717 = null;
var count__33718 = (0);
var i__33719 = (0);
while(true){
if((i__33719 < count__33718)){
var x = chunk__33717.cljs$core$IIndexed$_nth$arity$2(null,i__33719);
var seq__33720_33780 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((hpointu.rts.app.world_height.cljs$core$IFn$_invoke$arity$1 ? hpointu.rts.app.world_height.cljs$core$IFn$_invoke$arity$1(world) : hpointu.rts.app.world_height.call(null,world))));
var chunk__33721_33781 = null;
var count__33722_33782 = (0);
var i__33723_33783 = (0);
while(true){
if((i__33723_33783 < count__33722_33782)){
var y_33784 = chunk__33721_33781.cljs$core$IIndexed$_nth$arity$2(null,i__33723_33783);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_33784,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_33784], null)));


var G__33785 = seq__33720_33780;
var G__33786 = chunk__33721_33781;
var G__33787 = count__33722_33782;
var G__33788 = (i__33723_33783 + (1));
seq__33720_33780 = G__33785;
chunk__33721_33781 = G__33786;
count__33722_33782 = G__33787;
i__33723_33783 = G__33788;
continue;
} else {
var temp__5735__auto___33789 = cljs.core.seq(seq__33720_33780);
if(temp__5735__auto___33789){
var seq__33720_33790__$1 = temp__5735__auto___33789;
if(cljs.core.chunked_seq_QMARK_(seq__33720_33790__$1)){
var c__4556__auto___33791 = cljs.core.chunk_first(seq__33720_33790__$1);
var G__33792 = cljs.core.chunk_rest(seq__33720_33790__$1);
var G__33793 = c__4556__auto___33791;
var G__33794 = cljs.core.count(c__4556__auto___33791);
var G__33795 = (0);
seq__33720_33780 = G__33792;
chunk__33721_33781 = G__33793;
count__33722_33782 = G__33794;
i__33723_33783 = G__33795;
continue;
} else {
var y_33796 = cljs.core.first(seq__33720_33790__$1);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_33796,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_33796], null)));


var G__33797 = cljs.core.next(seq__33720_33790__$1);
var G__33798 = null;
var G__33799 = (0);
var G__33800 = (0);
seq__33720_33780 = G__33797;
chunk__33721_33781 = G__33798;
count__33722_33782 = G__33799;
i__33723_33783 = G__33800;
continue;
}
} else {
}
}
break;
}

var G__33801 = seq__33712;
var G__33802 = chunk__33717;
var G__33803 = count__33718;
var G__33804 = (i__33719 + (1));
seq__33712 = G__33801;
chunk__33717 = G__33802;
count__33718 = G__33803;
i__33719 = G__33804;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33712);
if(temp__5735__auto__){
var seq__33712__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33712__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33712__$1);
var G__33806 = cljs.core.chunk_rest(seq__33712__$1);
var G__33807 = c__4556__auto__;
var G__33808 = cljs.core.count(c__4556__auto__);
var G__33809 = (0);
seq__33712 = G__33806;
chunk__33717 = G__33807;
count__33718 = G__33808;
i__33719 = G__33809;
continue;
} else {
var x = cljs.core.first(seq__33712__$1);
var seq__33713_33810 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((hpointu.rts.app.world_height.cljs$core$IFn$_invoke$arity$1 ? hpointu.rts.app.world_height.cljs$core$IFn$_invoke$arity$1(world) : hpointu.rts.app.world_height.call(null,world))));
var chunk__33714_33811 = null;
var count__33715_33812 = (0);
var i__33716_33813 = (0);
while(true){
if((i__33716_33813 < count__33715_33812)){
var y_33814 = chunk__33714_33811.cljs$core$IIndexed$_nth$arity$2(null,i__33716_33813);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_33814,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_33814], null)));


var G__33815 = seq__33713_33810;
var G__33816 = chunk__33714_33811;
var G__33817 = count__33715_33812;
var G__33818 = (i__33716_33813 + (1));
seq__33713_33810 = G__33815;
chunk__33714_33811 = G__33816;
count__33715_33812 = G__33817;
i__33716_33813 = G__33818;
continue;
} else {
var temp__5735__auto___33819__$1 = cljs.core.seq(seq__33713_33810);
if(temp__5735__auto___33819__$1){
var seq__33713_33820__$1 = temp__5735__auto___33819__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33713_33820__$1)){
var c__4556__auto___33821 = cljs.core.chunk_first(seq__33713_33820__$1);
var G__33823 = cljs.core.chunk_rest(seq__33713_33820__$1);
var G__33824 = c__4556__auto___33821;
var G__33825 = cljs.core.count(c__4556__auto___33821);
var G__33826 = (0);
seq__33713_33810 = G__33823;
chunk__33714_33811 = G__33824;
count__33715_33812 = G__33825;
i__33716_33813 = G__33826;
continue;
} else {
var y_33827 = cljs.core.first(seq__33713_33820__$1);
hpointu.rts.app.draw_tile_BANG_(ctx,world,x,y_33827,hpointu.rts.app.SIZE,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_33827], null)));


var G__33828 = cljs.core.next(seq__33713_33820__$1);
var G__33829 = null;
var G__33830 = (0);
var G__33831 = (0);
seq__33713_33810 = G__33828;
chunk__33714_33811 = G__33829;
count__33715_33812 = G__33830;
i__33716_33813 = G__33831;
continue;
}
} else {
}
}
break;
}

var G__33832 = cljs.core.next(seq__33712__$1);
var G__33833 = null;
var G__33834 = (0);
var G__33835 = (0);
seq__33712 = G__33832;
chunk__33717 = G__33833;
count__33718 = G__33834;
i__33719 = G__33835;
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
