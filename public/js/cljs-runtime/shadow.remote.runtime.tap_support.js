goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35233,p__35234){
var map__35235 = p__35233;
var map__35235__$1 = (((((!((map__35235 == null))))?(((((map__35235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35235):map__35235);
var svc = map__35235__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35235__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35235__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35235__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35236 = p__35234;
var map__35236__$1 = (((((!((map__35236 == null))))?(((((map__35236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35236):map__35236);
var msg = map__35236__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35236__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35236__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35236__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35236__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35250,p__35251){
var map__35252 = p__35250;
var map__35252__$1 = (((((!((map__35252 == null))))?(((((map__35252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35252):map__35252);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35252__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35253 = p__35251;
var map__35253__$1 = (((((!((map__35253 == null))))?(((((map__35253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35253):map__35253);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35253__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35262,p__35263){
var map__35266 = p__35262;
var map__35266__$1 = (((((!((map__35266 == null))))?(((((map__35266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35266):map__35266);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35266__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35266__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35267 = p__35263;
var map__35267__$1 = (((((!((map__35267 == null))))?(((((map__35267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35267):map__35267);
var msg = map__35267__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35267__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35275,tid){
var map__35276 = p__35275;
var map__35276__$1 = (((((!((map__35276 == null))))?(((((map__35276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35276):map__35276);
var svc = map__35276__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35276__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35297 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35298 = null;
var count__35299 = (0);
var i__35300 = (0);
while(true){
if((i__35300 < count__35299)){
var vec__35307 = chunk__35298.cljs$core$IIndexed$_nth$arity$2(null,i__35300);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35307,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35307,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35337 = seq__35297;
var G__35338 = chunk__35298;
var G__35339 = count__35299;
var G__35340 = (i__35300 + (1));
seq__35297 = G__35337;
chunk__35298 = G__35338;
count__35299 = G__35339;
i__35300 = G__35340;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35297);
if(temp__5735__auto__){
var seq__35297__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35297__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35297__$1);
var G__35351 = cljs.core.chunk_rest(seq__35297__$1);
var G__35352 = c__4556__auto__;
var G__35353 = cljs.core.count(c__4556__auto__);
var G__35354 = (0);
seq__35297 = G__35351;
chunk__35298 = G__35352;
count__35299 = G__35353;
i__35300 = G__35354;
continue;
} else {
var vec__35311 = cljs.core.first(seq__35297__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35311,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35311,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35358 = cljs.core.next(seq__35297__$1);
var G__35359 = null;
var G__35360 = (0);
var G__35361 = (0);
seq__35297 = G__35358;
chunk__35298 = G__35359;
count__35299 = G__35360;
i__35300 = G__35361;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35280_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35280_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35281_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35281_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35282_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35282_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35283_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35283_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35316){
var map__35317 = p__35316;
var map__35317__$1 = (((((!((map__35317 == null))))?(((((map__35317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35317):map__35317);
var svc = map__35317__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35317__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35317__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
