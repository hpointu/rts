goog.provide('hpointu.rts.graphics');
hpointu.rts.graphics.TWOPI = ((2) * Math.PI);
if((typeof hpointu !== 'undefined') && (typeof hpointu.rts !== 'undefined') && (typeof hpointu.rts.graphics !== 'undefined') && (typeof hpointu.rts.graphics.render_item_BANG_ !== 'undefined')){
} else {
hpointu.rts.graphics.render_item_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37368 = cljs.core.get_global_hierarchy;
return (fexpr__37368.cljs$core$IFn$_invoke$arity$0 ? fexpr__37368.cljs$core$IFn$_invoke$arity$0() : fexpr__37368.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hpointu.rts.graphics","render-item!"),(function (ctx,item){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
hpointu.rts.graphics.render_item_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rect","rect",-108902628),(function hpointu$rts$graphics$render_rect(ctx,p__37376){
var map__37377 = p__37376;
var map__37377__$1 = (((((!((map__37377 == null))))?(((((map__37377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37377):map__37377);
var item = map__37377__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37377__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37377__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37377__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37377__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37377__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var G__37379 = ctx;
G__37379.beginPath();

G__37379.rect(x,y,w,h);

(G__37379["fillStyle"] = fill);

G__37379.fill();

G__37379.closePath();

return G__37379;
}));
hpointu.rts.graphics.render_item_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"circle","circle",1903212362),(function hpointu$rts$graphics$render_circle(ctx,p__37380){
var map__37381 = p__37380;
var map__37381__$1 = (((((!((map__37381 == null))))?(((((map__37381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37381):map__37381);
var item = map__37381__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37381__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37381__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37381__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37381__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var G__37383 = ctx;
G__37383.beginPath();

G__37383.arc(x,y,r,(0),hpointu.rts.graphics.TWOPI);

(G__37383["fillStyle"] = fill);

G__37383.fill();

G__37383.closePath();

return G__37383;
}));
hpointu.rts.graphics.render_item_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"line","line",212345235),(function hpointu$rts$graphics$render_circle(ctx,p__37384){
var map__37385 = p__37384;
var map__37385__$1 = (((((!((map__37385 == null))))?(((((map__37385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37385):map__37385);
var item = map__37385__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37385__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37385__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37385__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37385__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37385__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var G__37387 = ctx;
G__37387.beginPath();

G__37387.moveTo(x1,y1);

G__37387.lineTo(x2,y2);

(G__37387["strokeStyle"] = color);

G__37387.stroke();

G__37387.closePath();

return G__37387;
}));

//# sourceMappingURL=hpointu.rts.graphics.js.map
