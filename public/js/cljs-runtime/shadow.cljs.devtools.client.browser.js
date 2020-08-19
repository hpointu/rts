goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35697 = arguments.length;
var i__4737__auto___35698 = (0);
while(true){
if((i__4737__auto___35698 < len__4736__auto___35697)){
args__4742__auto__.push((arguments[i__4737__auto___35698]));

var G__35699 = (i__4737__auto___35698 + (1));
i__4737__auto___35698 = G__35699;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35549){
var G__35550 = cljs.core.first(seq35549);
var seq35549__$1 = cljs.core.next(seq35549);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35550,seq35549__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35552 = cljs.core.seq(sources);
var chunk__35553 = null;
var count__35554 = (0);
var i__35555 = (0);
while(true){
if((i__35555 < count__35554)){
var map__35570 = chunk__35553.cljs$core$IIndexed$_nth$arity$2(null,i__35555);
var map__35570__$1 = (((((!((map__35570 == null))))?(((((map__35570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35570):map__35570);
var src = map__35570__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35570__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35570__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35570__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35570__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35572){var e_35700 = e35572;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35700);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35700.message)].join('')));
}

var G__35701 = seq__35552;
var G__35702 = chunk__35553;
var G__35703 = count__35554;
var G__35704 = (i__35555 + (1));
seq__35552 = G__35701;
chunk__35553 = G__35702;
count__35554 = G__35703;
i__35555 = G__35704;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35552);
if(temp__5735__auto__){
var seq__35552__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35552__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35552__$1);
var G__35705 = cljs.core.chunk_rest(seq__35552__$1);
var G__35706 = c__4556__auto__;
var G__35707 = cljs.core.count(c__4556__auto__);
var G__35708 = (0);
seq__35552 = G__35705;
chunk__35553 = G__35706;
count__35554 = G__35707;
i__35555 = G__35708;
continue;
} else {
var map__35574 = cljs.core.first(seq__35552__$1);
var map__35574__$1 = (((((!((map__35574 == null))))?(((((map__35574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35574):map__35574);
var src = map__35574__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35574__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35574__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35574__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35574__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35576){var e_35709 = e35576;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35709);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35709.message)].join('')));
}

var G__35710 = cljs.core.next(seq__35552__$1);
var G__35711 = null;
var G__35712 = (0);
var G__35713 = (0);
seq__35552 = G__35710;
chunk__35553 = G__35711;
count__35554 = G__35712;
i__35555 = G__35713;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35578 = cljs.core.seq(js_requires);
var chunk__35579 = null;
var count__35580 = (0);
var i__35581 = (0);
while(true){
if((i__35581 < count__35580)){
var js_ns = chunk__35579.cljs$core$IIndexed$_nth$arity$2(null,i__35581);
var require_str_35714 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35714);


var G__35715 = seq__35578;
var G__35716 = chunk__35579;
var G__35717 = count__35580;
var G__35718 = (i__35581 + (1));
seq__35578 = G__35715;
chunk__35579 = G__35716;
count__35580 = G__35717;
i__35581 = G__35718;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35578);
if(temp__5735__auto__){
var seq__35578__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35578__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35578__$1);
var G__35719 = cljs.core.chunk_rest(seq__35578__$1);
var G__35720 = c__4556__auto__;
var G__35721 = cljs.core.count(c__4556__auto__);
var G__35722 = (0);
seq__35578 = G__35719;
chunk__35579 = G__35720;
count__35580 = G__35721;
i__35581 = G__35722;
continue;
} else {
var js_ns = cljs.core.first(seq__35578__$1);
var require_str_35723 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35723);


var G__35724 = cljs.core.next(seq__35578__$1);
var G__35725 = null;
var G__35726 = (0);
var G__35727 = (0);
seq__35578 = G__35724;
chunk__35579 = G__35725;
count__35580 = G__35726;
i__35581 = G__35727;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35583){
var map__35584 = p__35583;
var map__35584__$1 = (((((!((map__35584 == null))))?(((((map__35584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35584):map__35584);
var msg = map__35584__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35584__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35584__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35586(s__35587){
return (new cljs.core.LazySeq(null,(function (){
var s__35587__$1 = s__35587;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35587__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35592 = cljs.core.first(xs__6292__auto__);
var map__35592__$1 = (((((!((map__35592 == null))))?(((((map__35592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35592):map__35592);
var src = map__35592__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35592__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35592__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35587__$1,map__35592,map__35592__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35584,map__35584__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35586_$_iter__35588(s__35589){
return (new cljs.core.LazySeq(null,((function (s__35587__$1,map__35592,map__35592__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35584,map__35584__$1,msg,info,reload_info){
return (function (){
var s__35589__$1 = s__35589;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35589__$1);
if(temp__5735__auto____$1){
var s__35589__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35589__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35589__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35591 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35590 = (0);
while(true){
if((i__35590 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35590);
cljs.core.chunk_append(b__35591,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35728 = (i__35590 + (1));
i__35590 = G__35728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35591),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35586_$_iter__35588(cljs.core.chunk_rest(s__35589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35591),null);
}
} else {
var warning = cljs.core.first(s__35589__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35586_$_iter__35588(cljs.core.rest(s__35589__$2)));
}
} else {
return null;
}
break;
}
});})(s__35587__$1,map__35592,map__35592__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35584,map__35584__$1,msg,info,reload_info))
,null,null));
});})(s__35587__$1,map__35592,map__35592__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35584,map__35584__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35586(cljs.core.rest(s__35587__$1)));
} else {
var G__35729 = cljs.core.rest(s__35587__$1);
s__35587__$1 = G__35729;
continue;
}
} else {
var G__35730 = cljs.core.rest(s__35587__$1);
s__35587__$1 = G__35730;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__35594_35731 = cljs.core.seq(warnings);
var chunk__35595_35732 = null;
var count__35596_35733 = (0);
var i__35597_35734 = (0);
while(true){
if((i__35597_35734 < count__35596_35733)){
var map__35604_35735 = chunk__35595_35732.cljs$core$IIndexed$_nth$arity$2(null,i__35597_35734);
var map__35604_35736__$1 = (((((!((map__35604_35735 == null))))?(((((map__35604_35735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35604_35735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35604_35735):map__35604_35735);
var w_35737 = map__35604_35736__$1;
var msg_35738__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35604_35736__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35604_35736__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35604_35736__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35604_35736__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35741)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35739),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35740),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35738__$1)].join(''));


var G__35742 = seq__35594_35731;
var G__35743 = chunk__35595_35732;
var G__35744 = count__35596_35733;
var G__35745 = (i__35597_35734 + (1));
seq__35594_35731 = G__35742;
chunk__35595_35732 = G__35743;
count__35596_35733 = G__35744;
i__35597_35734 = G__35745;
continue;
} else {
var temp__5735__auto___35746 = cljs.core.seq(seq__35594_35731);
if(temp__5735__auto___35746){
var seq__35594_35747__$1 = temp__5735__auto___35746;
if(cljs.core.chunked_seq_QMARK_(seq__35594_35747__$1)){
var c__4556__auto___35748 = cljs.core.chunk_first(seq__35594_35747__$1);
var G__35749 = cljs.core.chunk_rest(seq__35594_35747__$1);
var G__35750 = c__4556__auto___35748;
var G__35751 = cljs.core.count(c__4556__auto___35748);
var G__35752 = (0);
seq__35594_35731 = G__35749;
chunk__35595_35732 = G__35750;
count__35596_35733 = G__35751;
i__35597_35734 = G__35752;
continue;
} else {
var map__35606_35753 = cljs.core.first(seq__35594_35747__$1);
var map__35606_35754__$1 = (((((!((map__35606_35753 == null))))?(((((map__35606_35753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35606_35753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35606_35753):map__35606_35753);
var w_35755 = map__35606_35754__$1;
var msg_35756__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35606_35754__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35606_35754__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35606_35754__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35606_35754__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35759)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35757),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35758),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35756__$1)].join(''));


var G__35760 = cljs.core.next(seq__35594_35747__$1);
var G__35761 = null;
var G__35762 = (0);
var G__35763 = (0);
seq__35594_35731 = G__35760;
chunk__35595_35732 = G__35761;
count__35596_35733 = G__35762;
i__35597_35734 = G__35763;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35582_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35582_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35608){
var map__35609 = p__35608;
var map__35609__$1 = (((((!((map__35609 == null))))?(((((map__35609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35609):map__35609);
var msg = map__35609__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35609__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35611 = cljs.core.seq(updates);
var chunk__35613 = null;
var count__35614 = (0);
var i__35615 = (0);
while(true){
if((i__35615 < count__35614)){
var path = chunk__35613.cljs$core$IIndexed$_nth$arity$2(null,i__35615);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35641_35764 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35644_35765 = null;
var count__35645_35766 = (0);
var i__35646_35767 = (0);
while(true){
if((i__35646_35767 < count__35645_35766)){
var node_35768 = chunk__35644_35765.cljs$core$IIndexed$_nth$arity$2(null,i__35646_35767);
var path_match_35769 = shadow.cljs.devtools.client.browser.match_paths(node_35768.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35769)){
var new_link_35770 = (function (){var G__35651 = node_35768.cloneNode(true);
G__35651.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35769),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35651;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35769], 0));

goog.dom.insertSiblingAfter(new_link_35770,node_35768);

goog.dom.removeNode(node_35768);


var G__35771 = seq__35641_35764;
var G__35772 = chunk__35644_35765;
var G__35773 = count__35645_35766;
var G__35774 = (i__35646_35767 + (1));
seq__35641_35764 = G__35771;
chunk__35644_35765 = G__35772;
count__35645_35766 = G__35773;
i__35646_35767 = G__35774;
continue;
} else {
var G__35775 = seq__35641_35764;
var G__35776 = chunk__35644_35765;
var G__35777 = count__35645_35766;
var G__35778 = (i__35646_35767 + (1));
seq__35641_35764 = G__35775;
chunk__35644_35765 = G__35776;
count__35645_35766 = G__35777;
i__35646_35767 = G__35778;
continue;
}
} else {
var temp__5735__auto___35779 = cljs.core.seq(seq__35641_35764);
if(temp__5735__auto___35779){
var seq__35641_35780__$1 = temp__5735__auto___35779;
if(cljs.core.chunked_seq_QMARK_(seq__35641_35780__$1)){
var c__4556__auto___35781 = cljs.core.chunk_first(seq__35641_35780__$1);
var G__35782 = cljs.core.chunk_rest(seq__35641_35780__$1);
var G__35783 = c__4556__auto___35781;
var G__35784 = cljs.core.count(c__4556__auto___35781);
var G__35785 = (0);
seq__35641_35764 = G__35782;
chunk__35644_35765 = G__35783;
count__35645_35766 = G__35784;
i__35646_35767 = G__35785;
continue;
} else {
var node_35786 = cljs.core.first(seq__35641_35780__$1);
var path_match_35787 = shadow.cljs.devtools.client.browser.match_paths(node_35786.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35787)){
var new_link_35788 = (function (){var G__35652 = node_35786.cloneNode(true);
G__35652.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35787),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35652;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35787], 0));

goog.dom.insertSiblingAfter(new_link_35788,node_35786);

goog.dom.removeNode(node_35786);


var G__35789 = cljs.core.next(seq__35641_35780__$1);
var G__35790 = null;
var G__35791 = (0);
var G__35792 = (0);
seq__35641_35764 = G__35789;
chunk__35644_35765 = G__35790;
count__35645_35766 = G__35791;
i__35646_35767 = G__35792;
continue;
} else {
var G__35793 = cljs.core.next(seq__35641_35780__$1);
var G__35794 = null;
var G__35795 = (0);
var G__35796 = (0);
seq__35641_35764 = G__35793;
chunk__35644_35765 = G__35794;
count__35645_35766 = G__35795;
i__35646_35767 = G__35796;
continue;
}
}
} else {
}
}
break;
}


var G__35797 = seq__35611;
var G__35798 = chunk__35613;
var G__35799 = count__35614;
var G__35800 = (i__35615 + (1));
seq__35611 = G__35797;
chunk__35613 = G__35798;
count__35614 = G__35799;
i__35615 = G__35800;
continue;
} else {
var G__35801 = seq__35611;
var G__35802 = chunk__35613;
var G__35803 = count__35614;
var G__35804 = (i__35615 + (1));
seq__35611 = G__35801;
chunk__35613 = G__35802;
count__35614 = G__35803;
i__35615 = G__35804;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35611);
if(temp__5735__auto__){
var seq__35611__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35611__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35611__$1);
var G__35805 = cljs.core.chunk_rest(seq__35611__$1);
var G__35806 = c__4556__auto__;
var G__35807 = cljs.core.count(c__4556__auto__);
var G__35808 = (0);
seq__35611 = G__35805;
chunk__35613 = G__35806;
count__35614 = G__35807;
i__35615 = G__35808;
continue;
} else {
var path = cljs.core.first(seq__35611__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35653_35809 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35656_35810 = null;
var count__35657_35811 = (0);
var i__35658_35812 = (0);
while(true){
if((i__35658_35812 < count__35657_35811)){
var node_35813 = chunk__35656_35810.cljs$core$IIndexed$_nth$arity$2(null,i__35658_35812);
var path_match_35814 = shadow.cljs.devtools.client.browser.match_paths(node_35813.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35814)){
var new_link_35815 = (function (){var G__35663 = node_35813.cloneNode(true);
G__35663.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35814),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35663;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35814], 0));

goog.dom.insertSiblingAfter(new_link_35815,node_35813);

goog.dom.removeNode(node_35813);


var G__35816 = seq__35653_35809;
var G__35817 = chunk__35656_35810;
var G__35818 = count__35657_35811;
var G__35819 = (i__35658_35812 + (1));
seq__35653_35809 = G__35816;
chunk__35656_35810 = G__35817;
count__35657_35811 = G__35818;
i__35658_35812 = G__35819;
continue;
} else {
var G__35820 = seq__35653_35809;
var G__35821 = chunk__35656_35810;
var G__35822 = count__35657_35811;
var G__35823 = (i__35658_35812 + (1));
seq__35653_35809 = G__35820;
chunk__35656_35810 = G__35821;
count__35657_35811 = G__35822;
i__35658_35812 = G__35823;
continue;
}
} else {
var temp__5735__auto___35824__$1 = cljs.core.seq(seq__35653_35809);
if(temp__5735__auto___35824__$1){
var seq__35653_35825__$1 = temp__5735__auto___35824__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35653_35825__$1)){
var c__4556__auto___35826 = cljs.core.chunk_first(seq__35653_35825__$1);
var G__35827 = cljs.core.chunk_rest(seq__35653_35825__$1);
var G__35828 = c__4556__auto___35826;
var G__35829 = cljs.core.count(c__4556__auto___35826);
var G__35830 = (0);
seq__35653_35809 = G__35827;
chunk__35656_35810 = G__35828;
count__35657_35811 = G__35829;
i__35658_35812 = G__35830;
continue;
} else {
var node_35831 = cljs.core.first(seq__35653_35825__$1);
var path_match_35832 = shadow.cljs.devtools.client.browser.match_paths(node_35831.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35832)){
var new_link_35833 = (function (){var G__35664 = node_35831.cloneNode(true);
G__35664.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35832),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35664;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35832], 0));

goog.dom.insertSiblingAfter(new_link_35833,node_35831);

goog.dom.removeNode(node_35831);


var G__35834 = cljs.core.next(seq__35653_35825__$1);
var G__35835 = null;
var G__35836 = (0);
var G__35837 = (0);
seq__35653_35809 = G__35834;
chunk__35656_35810 = G__35835;
count__35657_35811 = G__35836;
i__35658_35812 = G__35837;
continue;
} else {
var G__35838 = cljs.core.next(seq__35653_35825__$1);
var G__35839 = null;
var G__35840 = (0);
var G__35841 = (0);
seq__35653_35809 = G__35838;
chunk__35656_35810 = G__35839;
count__35657_35811 = G__35840;
i__35658_35812 = G__35841;
continue;
}
}
} else {
}
}
break;
}


var G__35842 = cljs.core.next(seq__35611__$1);
var G__35843 = null;
var G__35844 = (0);
var G__35845 = (0);
seq__35611 = G__35842;
chunk__35613 = G__35843;
count__35614 = G__35844;
i__35615 = G__35845;
continue;
} else {
var G__35846 = cljs.core.next(seq__35611__$1);
var G__35847 = null;
var G__35848 = (0);
var G__35849 = (0);
seq__35611 = G__35846;
chunk__35613 = G__35847;
count__35614 = G__35848;
i__35615 = G__35849;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35665){
var map__35666 = p__35665;
var map__35666__$1 = (((((!((map__35666 == null))))?(((((map__35666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35666):map__35666);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35666__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35668){
var map__35669 = p__35668;
var map__35669__$1 = (((((!((map__35669 == null))))?(((((map__35669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35669):map__35669);
var _ = map__35669__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35669__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35671,done,error){
var map__35672 = p__35671;
var map__35672__$1 = (((((!((map__35672 == null))))?(((((map__35672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35672):map__35672);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35672__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35674,done,error){
var map__35675 = p__35674;
var map__35675__$1 = (((((!((map__35675 == null))))?(((((map__35675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35675):map__35675);
var msg = map__35675__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35675__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35675__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35675__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35677){
var map__35678 = p__35677;
var map__35678__$1 = (((((!((map__35678 == null))))?(((((map__35678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35678):map__35678);
var src = map__35678__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35678__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35680 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35680) : done.call(null,G__35680));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35681){
var map__35682 = p__35681;
var map__35682__$1 = (((((!((map__35682 == null))))?(((((map__35682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35682):map__35682);
var msg__$1 = map__35682__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35682__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35684){var ex = e35684;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35685){
var map__35686 = p__35685;
var map__35686__$1 = (((((!((map__35686 == null))))?(((((map__35686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35686):map__35686);
var env = map__35686__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35686__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35688){
var map__35689 = p__35688;
var map__35689__$1 = (((((!((map__35689 == null))))?(((((map__35689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35689):map__35689);
var msg = map__35689__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35689__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35691){
var map__35692 = p__35691;
var map__35692__$1 = (((((!((map__35692 == null))))?(((((map__35692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35692):map__35692);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35692__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35692__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35694){
var map__35695 = p__35694;
var map__35695__$1 = (((((!((map__35695 == null))))?(((((map__35695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35695):map__35695);
var svc = map__35695__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35695__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
