goog.provide('hpointu.rts.graphics');
hpointu.rts.graphics.TWOPI = ((2) * Math.PI);
if((typeof hpointu !== 'undefined') && (typeof hpointu.rts !== 'undefined') && (typeof hpointu.rts.graphics !== 'undefined') && (typeof hpointu.rts.graphics.render_item_BANG_ !== 'undefined')){
} else {
hpointu.rts.graphics.render_item_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77941 = cljs.core.get_global_hierarchy;
return (fexpr__77941.cljs$core$IFn$_invoke$arity$0 ? fexpr__77941.cljs$core$IFn$_invoke$arity$0() : fexpr__77941.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hpointu.rts.graphics","render-item!"),(function (ctx,item){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
hpointu.rts.graphics.render_item_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rect","rect",-108902628),(function hpointu$rts$graphics$render_rect(ctx,p__77942){
var map__77943 = p__77942;
var map__77943__$1 = (((((!((map__77943 == null))))?(((((map__77943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77943):map__77943);
var item = map__77943__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77943__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77943__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77943__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77943__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77943__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var G__77945 = ctx;
G__77945.beginPath();

G__77945.rect(x,y,w,h);

(G__77945["fillStyle"] = fill);

G__77945.fill();

G__77945.closePath();

return G__77945;
}));
hpointu.rts.graphics.render_item_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"box","box",1530920394),(function hpointu$rts$graphics$render_box(ctx,p__77946){
var map__77947 = p__77946;
var map__77947__$1 = (((((!((map__77947 == null))))?(((((map__77947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77947):map__77947);
var item = map__77947__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77947__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77947__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77947__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77947__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77947__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var G__77949 = ctx;
G__77949.beginPath();

G__77949.rect(x,y,w,h);

(G__77949["strokeStyle"] = color);

G__77949.stroke();

G__77949.closePath();

return G__77949;
}));
hpointu.rts.graphics.render_item_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"circle","circle",1903212362),(function hpointu$rts$graphics$render_circle(ctx,p__77950){
var map__77951 = p__77950;
var map__77951__$1 = (((((!((map__77951 == null))))?(((((map__77951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77951):map__77951);
var item = map__77951__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77951__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77951__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77951__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77951__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var G__77953 = ctx;
G__77953.beginPath();

G__77953.arc(x,y,r,(0),hpointu.rts.graphics.TWOPI);

(G__77953["fillStyle"] = fill);

G__77953.fill();

G__77953.closePath();

return G__77953;
}));
hpointu.rts.graphics.render_item_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"line","line",212345235),(function hpointu$rts$graphics$render_line(ctx,p__77954){
var map__77955 = p__77954;
var map__77955__$1 = (((((!((map__77955 == null))))?(((((map__77955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77955):map__77955);
var item = map__77955__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77955__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77955__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77955__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77955__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77955__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var G__77957 = ctx;
G__77957.beginPath();

G__77957.moveTo(x1,y1);

G__77957.lineTo(x2,y2);

(G__77957["strokeStyle"] = color);

G__77957.stroke();

G__77957.closePath();

return G__77957;
}));

//# sourceMappingURL=hpointu.rts.graphics.js.map
