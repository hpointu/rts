goog.provide('hpointu.rts.graphics');
hpointu.rts.graphics.TWOPI = ((2) * Math.PI);
if((typeof hpointu !== 'undefined') && (typeof hpointu.rts !== 'undefined') && (typeof hpointu.rts.graphics !== 'undefined') && (typeof hpointu.rts.graphics.render_item_BANG_ !== 'undefined')){
} else {
hpointu.rts.graphics.render_item_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26679 = cljs.core.get_global_hierarchy;
return (fexpr__26679.cljs$core$IFn$_invoke$arity$0 ? fexpr__26679.cljs$core$IFn$_invoke$arity$0() : fexpr__26679.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hpointu.rts.graphics","render-item!"),(function (ctx,item){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
hpointu.rts.graphics.render_item_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rect","rect",-108902628),(function hpointu$rts$graphics$render_rect(ctx,p__26680){
var map__26681 = p__26680;
var map__26681__$1 = (((((!((map__26681 == null))))?(((((map__26681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26681):map__26681);
var item = map__26681__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26681__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26681__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26681__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26681__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26681__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var G__26683 = ctx;
G__26683.beginPath();

G__26683.rect(x,y,w,h);

(G__26683["fillStyle"] = fill);

G__26683.fill();

G__26683.closePath();

return G__26683;
}));
hpointu.rts.graphics.render_item_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"circle","circle",1903212362),(function hpointu$rts$graphics$render_circle(ctx,p__26690){
var map__26691 = p__26690;
var map__26691__$1 = (((((!((map__26691 == null))))?(((((map__26691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26691):map__26691);
var item = map__26691__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26691__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26691__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26691__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26691__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var G__26693 = ctx;
G__26693.beginPath();

G__26693.arc(x,y,r,(0),hpointu.rts.graphics.TWOPI);

(G__26693["fillStyle"] = fill);

G__26693.fill();

G__26693.closePath();

return G__26693;
}));
hpointu.rts.graphics.render_item_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"line","line",212345235),(function hpointu$rts$graphics$render_circle(ctx,p__26694){
var map__26695 = p__26694;
var map__26695__$1 = (((((!((map__26695 == null))))?(((((map__26695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26695):map__26695);
var item = map__26695__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26695__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26695__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26695__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26695__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26695__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var G__26698 = ctx;
G__26698.beginPath();

G__26698.moveTo(x1,y1);

G__26698.lineTo(x2,y2);

(G__26698["strokeStyle"] = color);

G__26698.stroke();

G__26698.closePath();

return G__26698;
}));

//# sourceMappingURL=hpointu.rts.graphics.js.map
