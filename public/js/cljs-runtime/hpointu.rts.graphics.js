goog.provide('hpointu.rts.graphics');
hpointu.rts.graphics.TWOPI = ((2) * Math.PI);
if((typeof hpointu !== 'undefined') && (typeof hpointu.rts !== 'undefined') && (typeof hpointu.rts.graphics !== 'undefined') && (typeof hpointu.rts.graphics.render_item_BANG_ !== 'undefined')){
} else {
hpointu.rts.graphics.render_item_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__85083 = cljs.core.get_global_hierarchy;
return (fexpr__85083.cljs$core$IFn$_invoke$arity$0 ? fexpr__85083.cljs$core$IFn$_invoke$arity$0() : fexpr__85083.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hpointu.rts.graphics","render-item!"),(function (ctx,item){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
hpointu.rts.graphics.render_item_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rect","rect",-108902628),(function hpointu$rts$graphics$render_rect(ctx,p__85084){
var map__85085 = p__85084;
var map__85085__$1 = (((((!((map__85085 == null))))?(((((map__85085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85085):map__85085);
var item = map__85085__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85085__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85085__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85085__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85085__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85085__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var G__85087 = ctx;
G__85087.beginPath();

G__85087.rect(x,y,w,h);

(G__85087["fillStyle"] = fill);

G__85087.fill();

G__85087.closePath();

return G__85087;
}));
hpointu.rts.graphics.render_item_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"box","box",1530920394),(function hpointu$rts$graphics$render_box(ctx,p__85088){
var map__85089 = p__85088;
var map__85089__$1 = (((((!((map__85089 == null))))?(((((map__85089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85089):map__85089);
var item = map__85089__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85089__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85089__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85089__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85089__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85089__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85089__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988),(1));
var G__85091 = ctx;
G__85091.beginPath();

G__85091.rect(x,y,w,h);

(G__85091["lineWidth"] = line_width);

(G__85091["strokeStyle"] = color);

G__85091.stroke();

G__85091.closePath();

return G__85091;
}));
hpointu.rts.graphics.render_item_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"circle","circle",1903212362),(function hpointu$rts$graphics$render_circle(ctx,p__85092){
var map__85093 = p__85092;
var map__85093__$1 = (((((!((map__85093 == null))))?(((((map__85093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85093):map__85093);
var item = map__85093__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85093__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85093__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85093__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85093__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var G__85095 = ctx;
G__85095.beginPath();

G__85095.arc(x,y,r,(0),hpointu.rts.graphics.TWOPI);

(G__85095["fillStyle"] = fill);

G__85095.fill();

G__85095.closePath();

return G__85095;
}));
hpointu.rts.graphics.render_item_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"line","line",212345235),(function hpointu$rts$graphics$render_line(ctx,p__85096){
var map__85097 = p__85096;
var map__85097__$1 = (((((!((map__85097 == null))))?(((((map__85097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85097):map__85097);
var item = map__85097__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85097__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85097__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85097__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85097__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85097__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var G__85099 = ctx;
G__85099.beginPath();

G__85099.moveTo(x1,y1);

G__85099.lineTo(x2,y2);

(G__85099["strokeStyle"] = color);

G__85099.stroke();

G__85099.closePath();

return G__85099;
}));

//# sourceMappingURL=hpointu.rts.graphics.js.map
