goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36047 = arguments.length;
var i__4737__auto___36048 = (0);
while(true){
if((i__4737__auto___36048 < len__4736__auto___36047)){
args__4742__auto__.push((arguments[i__4737__auto___36048]));

var G__36049 = (i__4737__auto___36048 + (1));
i__4737__auto___36048 = G__36049;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35804){
var G__35805 = cljs.core.first(seq35804);
var seq35804__$1 = cljs.core.next(seq35804);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35805,seq35804__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35812 = cljs.core.seq(sources);
var chunk__35813 = null;
var count__35814 = (0);
var i__35815 = (0);
while(true){
if((i__35815 < count__35814)){
var map__35887 = chunk__35813.cljs$core$IIndexed$_nth$arity$2(null,i__35815);
var map__35887__$1 = (((((!((map__35887 == null))))?(((((map__35887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35887):map__35887);
var src = map__35887__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35887__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35887__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35887__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35887__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35899){var e_36050 = e35899;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36050);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36050.message)].join('')));
}

var G__36051 = seq__35812;
var G__36052 = chunk__35813;
var G__36053 = count__35814;
var G__36054 = (i__35815 + (1));
seq__35812 = G__36051;
chunk__35813 = G__36052;
count__35814 = G__36053;
i__35815 = G__36054;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35812);
if(temp__5735__auto__){
var seq__35812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35812__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35812__$1);
var G__36055 = cljs.core.chunk_rest(seq__35812__$1);
var G__36056 = c__4556__auto__;
var G__36057 = cljs.core.count(c__4556__auto__);
var G__36058 = (0);
seq__35812 = G__36055;
chunk__35813 = G__36056;
count__35814 = G__36057;
i__35815 = G__36058;
continue;
} else {
var map__35906 = cljs.core.first(seq__35812__$1);
var map__35906__$1 = (((((!((map__35906 == null))))?(((((map__35906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35906):map__35906);
var src = map__35906__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35906__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35906__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35906__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35906__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35911){var e_36059 = e35911;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36059);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36059.message)].join('')));
}

var G__36060 = cljs.core.next(seq__35812__$1);
var G__36061 = null;
var G__36062 = (0);
var G__36063 = (0);
seq__35812 = G__36060;
chunk__35813 = G__36061;
count__35814 = G__36062;
i__35815 = G__36063;
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
var seq__35915 = cljs.core.seq(js_requires);
var chunk__35916 = null;
var count__35917 = (0);
var i__35918 = (0);
while(true){
if((i__35918 < count__35917)){
var js_ns = chunk__35916.cljs$core$IIndexed$_nth$arity$2(null,i__35918);
var require_str_36064 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36064);


var G__36065 = seq__35915;
var G__36066 = chunk__35916;
var G__36067 = count__35917;
var G__36068 = (i__35918 + (1));
seq__35915 = G__36065;
chunk__35916 = G__36066;
count__35917 = G__36067;
i__35918 = G__36068;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35915);
if(temp__5735__auto__){
var seq__35915__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35915__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35915__$1);
var G__36069 = cljs.core.chunk_rest(seq__35915__$1);
var G__36070 = c__4556__auto__;
var G__36071 = cljs.core.count(c__4556__auto__);
var G__36072 = (0);
seq__35915 = G__36069;
chunk__35916 = G__36070;
count__35917 = G__36071;
i__35918 = G__36072;
continue;
} else {
var js_ns = cljs.core.first(seq__35915__$1);
var require_str_36073 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36073);


var G__36074 = cljs.core.next(seq__35915__$1);
var G__36075 = null;
var G__36076 = (0);
var G__36077 = (0);
seq__35915 = G__36074;
chunk__35916 = G__36075;
count__35917 = G__36076;
i__35918 = G__36077;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35926){
var map__35927 = p__35926;
var map__35927__$1 = (((((!((map__35927 == null))))?(((((map__35927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35927):map__35927);
var msg = map__35927__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35927__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35927__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35930(s__35931){
return (new cljs.core.LazySeq(null,(function (){
var s__35931__$1 = s__35931;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35931__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35939 = cljs.core.first(xs__6292__auto__);
var map__35939__$1 = (((((!((map__35939 == null))))?(((((map__35939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35939):map__35939);
var src = map__35939__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35939__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35939__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35931__$1,map__35939,map__35939__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35927,map__35927__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35930_$_iter__35932(s__35933){
return (new cljs.core.LazySeq(null,((function (s__35931__$1,map__35939,map__35939__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35927,map__35927__$1,msg,info,reload_info){
return (function (){
var s__35933__$1 = s__35933;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35933__$1);
if(temp__5735__auto____$1){
var s__35933__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35933__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35933__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35935 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35934 = (0);
while(true){
if((i__35934 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35934);
cljs.core.chunk_append(b__35935,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36078 = (i__35934 + (1));
i__35934 = G__36078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35935),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35930_$_iter__35932(cljs.core.chunk_rest(s__35933__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35935),null);
}
} else {
var warning = cljs.core.first(s__35933__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35930_$_iter__35932(cljs.core.rest(s__35933__$2)));
}
} else {
return null;
}
break;
}
});})(s__35931__$1,map__35939,map__35939__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35927,map__35927__$1,msg,info,reload_info))
,null,null));
});})(s__35931__$1,map__35939,map__35939__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35927,map__35927__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35930(cljs.core.rest(s__35931__$1)));
} else {
var G__36079 = cljs.core.rest(s__35931__$1);
s__35931__$1 = G__36079;
continue;
}
} else {
var G__36080 = cljs.core.rest(s__35931__$1);
s__35931__$1 = G__36080;
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
var seq__35941_36081 = cljs.core.seq(warnings);
var chunk__35942_36082 = null;
var count__35943_36083 = (0);
var i__35944_36084 = (0);
while(true){
if((i__35944_36084 < count__35943_36083)){
var map__35949_36085 = chunk__35942_36082.cljs$core$IIndexed$_nth$arity$2(null,i__35944_36084);
var map__35949_36086__$1 = (((((!((map__35949_36085 == null))))?(((((map__35949_36085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35949_36085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35949_36085):map__35949_36085);
var w_36087 = map__35949_36086__$1;
var msg_36088__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35949_36086__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35949_36086__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35949_36086__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35949_36086__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36091)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36089),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36090),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36088__$1)].join(''));


var G__36092 = seq__35941_36081;
var G__36093 = chunk__35942_36082;
var G__36094 = count__35943_36083;
var G__36095 = (i__35944_36084 + (1));
seq__35941_36081 = G__36092;
chunk__35942_36082 = G__36093;
count__35943_36083 = G__36094;
i__35944_36084 = G__36095;
continue;
} else {
var temp__5735__auto___36096 = cljs.core.seq(seq__35941_36081);
if(temp__5735__auto___36096){
var seq__35941_36097__$1 = temp__5735__auto___36096;
if(cljs.core.chunked_seq_QMARK_(seq__35941_36097__$1)){
var c__4556__auto___36098 = cljs.core.chunk_first(seq__35941_36097__$1);
var G__36099 = cljs.core.chunk_rest(seq__35941_36097__$1);
var G__36100 = c__4556__auto___36098;
var G__36101 = cljs.core.count(c__4556__auto___36098);
var G__36102 = (0);
seq__35941_36081 = G__36099;
chunk__35942_36082 = G__36100;
count__35943_36083 = G__36101;
i__35944_36084 = G__36102;
continue;
} else {
var map__35951_36103 = cljs.core.first(seq__35941_36097__$1);
var map__35951_36104__$1 = (((((!((map__35951_36103 == null))))?(((((map__35951_36103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35951_36103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35951_36103):map__35951_36103);
var w_36105 = map__35951_36104__$1;
var msg_36106__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35951_36104__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35951_36104__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35951_36104__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35951_36104__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36109)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36107),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36108),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36106__$1)].join(''));


var G__36110 = cljs.core.next(seq__35941_36097__$1);
var G__36111 = null;
var G__36112 = (0);
var G__36113 = (0);
seq__35941_36081 = G__36110;
chunk__35942_36082 = G__36111;
count__35943_36083 = G__36112;
i__35944_36084 = G__36113;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35923_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35923_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35957){
var map__35958 = p__35957;
var map__35958__$1 = (((((!((map__35958 == null))))?(((((map__35958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35958):map__35958);
var msg = map__35958__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35958__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35961 = cljs.core.seq(updates);
var chunk__35963 = null;
var count__35964 = (0);
var i__35965 = (0);
while(true){
if((i__35965 < count__35964)){
var path = chunk__35963.cljs$core$IIndexed$_nth$arity$2(null,i__35965);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35991_36114 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35994_36115 = null;
var count__35995_36116 = (0);
var i__35996_36117 = (0);
while(true){
if((i__35996_36117 < count__35995_36116)){
var node_36118 = chunk__35994_36115.cljs$core$IIndexed$_nth$arity$2(null,i__35996_36117);
var path_match_36119 = shadow.cljs.devtools.client.browser.match_paths(node_36118.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36119)){
var new_link_36120 = (function (){var G__36001 = node_36118.cloneNode(true);
G__36001.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36119),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36001;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36119], 0));

goog.dom.insertSiblingAfter(new_link_36120,node_36118);

goog.dom.removeNode(node_36118);


var G__36121 = seq__35991_36114;
var G__36122 = chunk__35994_36115;
var G__36123 = count__35995_36116;
var G__36124 = (i__35996_36117 + (1));
seq__35991_36114 = G__36121;
chunk__35994_36115 = G__36122;
count__35995_36116 = G__36123;
i__35996_36117 = G__36124;
continue;
} else {
var G__36125 = seq__35991_36114;
var G__36126 = chunk__35994_36115;
var G__36127 = count__35995_36116;
var G__36128 = (i__35996_36117 + (1));
seq__35991_36114 = G__36125;
chunk__35994_36115 = G__36126;
count__35995_36116 = G__36127;
i__35996_36117 = G__36128;
continue;
}
} else {
var temp__5735__auto___36129 = cljs.core.seq(seq__35991_36114);
if(temp__5735__auto___36129){
var seq__35991_36130__$1 = temp__5735__auto___36129;
if(cljs.core.chunked_seq_QMARK_(seq__35991_36130__$1)){
var c__4556__auto___36131 = cljs.core.chunk_first(seq__35991_36130__$1);
var G__36132 = cljs.core.chunk_rest(seq__35991_36130__$1);
var G__36133 = c__4556__auto___36131;
var G__36134 = cljs.core.count(c__4556__auto___36131);
var G__36135 = (0);
seq__35991_36114 = G__36132;
chunk__35994_36115 = G__36133;
count__35995_36116 = G__36134;
i__35996_36117 = G__36135;
continue;
} else {
var node_36136 = cljs.core.first(seq__35991_36130__$1);
var path_match_36137 = shadow.cljs.devtools.client.browser.match_paths(node_36136.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36137)){
var new_link_36138 = (function (){var G__36002 = node_36136.cloneNode(true);
G__36002.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36137),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36002;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36137], 0));

goog.dom.insertSiblingAfter(new_link_36138,node_36136);

goog.dom.removeNode(node_36136);


var G__36139 = cljs.core.next(seq__35991_36130__$1);
var G__36140 = null;
var G__36141 = (0);
var G__36142 = (0);
seq__35991_36114 = G__36139;
chunk__35994_36115 = G__36140;
count__35995_36116 = G__36141;
i__35996_36117 = G__36142;
continue;
} else {
var G__36143 = cljs.core.next(seq__35991_36130__$1);
var G__36144 = null;
var G__36145 = (0);
var G__36146 = (0);
seq__35991_36114 = G__36143;
chunk__35994_36115 = G__36144;
count__35995_36116 = G__36145;
i__35996_36117 = G__36146;
continue;
}
}
} else {
}
}
break;
}


var G__36147 = seq__35961;
var G__36148 = chunk__35963;
var G__36149 = count__35964;
var G__36150 = (i__35965 + (1));
seq__35961 = G__36147;
chunk__35963 = G__36148;
count__35964 = G__36149;
i__35965 = G__36150;
continue;
} else {
var G__36151 = seq__35961;
var G__36152 = chunk__35963;
var G__36153 = count__35964;
var G__36154 = (i__35965 + (1));
seq__35961 = G__36151;
chunk__35963 = G__36152;
count__35964 = G__36153;
i__35965 = G__36154;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35961);
if(temp__5735__auto__){
var seq__35961__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35961__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35961__$1);
var G__36155 = cljs.core.chunk_rest(seq__35961__$1);
var G__36156 = c__4556__auto__;
var G__36157 = cljs.core.count(c__4556__auto__);
var G__36158 = (0);
seq__35961 = G__36155;
chunk__35963 = G__36156;
count__35964 = G__36157;
i__35965 = G__36158;
continue;
} else {
var path = cljs.core.first(seq__35961__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36003_36159 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36006_36160 = null;
var count__36007_36161 = (0);
var i__36008_36162 = (0);
while(true){
if((i__36008_36162 < count__36007_36161)){
var node_36163 = chunk__36006_36160.cljs$core$IIndexed$_nth$arity$2(null,i__36008_36162);
var path_match_36164 = shadow.cljs.devtools.client.browser.match_paths(node_36163.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36164)){
var new_link_36165 = (function (){var G__36013 = node_36163.cloneNode(true);
G__36013.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36164),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36013;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36164], 0));

goog.dom.insertSiblingAfter(new_link_36165,node_36163);

goog.dom.removeNode(node_36163);


var G__36166 = seq__36003_36159;
var G__36167 = chunk__36006_36160;
var G__36168 = count__36007_36161;
var G__36169 = (i__36008_36162 + (1));
seq__36003_36159 = G__36166;
chunk__36006_36160 = G__36167;
count__36007_36161 = G__36168;
i__36008_36162 = G__36169;
continue;
} else {
var G__36170 = seq__36003_36159;
var G__36171 = chunk__36006_36160;
var G__36172 = count__36007_36161;
var G__36173 = (i__36008_36162 + (1));
seq__36003_36159 = G__36170;
chunk__36006_36160 = G__36171;
count__36007_36161 = G__36172;
i__36008_36162 = G__36173;
continue;
}
} else {
var temp__5735__auto___36174__$1 = cljs.core.seq(seq__36003_36159);
if(temp__5735__auto___36174__$1){
var seq__36003_36175__$1 = temp__5735__auto___36174__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36003_36175__$1)){
var c__4556__auto___36176 = cljs.core.chunk_first(seq__36003_36175__$1);
var G__36177 = cljs.core.chunk_rest(seq__36003_36175__$1);
var G__36178 = c__4556__auto___36176;
var G__36179 = cljs.core.count(c__4556__auto___36176);
var G__36180 = (0);
seq__36003_36159 = G__36177;
chunk__36006_36160 = G__36178;
count__36007_36161 = G__36179;
i__36008_36162 = G__36180;
continue;
} else {
var node_36181 = cljs.core.first(seq__36003_36175__$1);
var path_match_36182 = shadow.cljs.devtools.client.browser.match_paths(node_36181.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36182)){
var new_link_36183 = (function (){var G__36014 = node_36181.cloneNode(true);
G__36014.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36182),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36014;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36182], 0));

goog.dom.insertSiblingAfter(new_link_36183,node_36181);

goog.dom.removeNode(node_36181);


var G__36184 = cljs.core.next(seq__36003_36175__$1);
var G__36185 = null;
var G__36186 = (0);
var G__36187 = (0);
seq__36003_36159 = G__36184;
chunk__36006_36160 = G__36185;
count__36007_36161 = G__36186;
i__36008_36162 = G__36187;
continue;
} else {
var G__36188 = cljs.core.next(seq__36003_36175__$1);
var G__36189 = null;
var G__36190 = (0);
var G__36191 = (0);
seq__36003_36159 = G__36188;
chunk__36006_36160 = G__36189;
count__36007_36161 = G__36190;
i__36008_36162 = G__36191;
continue;
}
}
} else {
}
}
break;
}


var G__36192 = cljs.core.next(seq__35961__$1);
var G__36193 = null;
var G__36194 = (0);
var G__36195 = (0);
seq__35961 = G__36192;
chunk__35963 = G__36193;
count__35964 = G__36194;
i__35965 = G__36195;
continue;
} else {
var G__36196 = cljs.core.next(seq__35961__$1);
var G__36197 = null;
var G__36198 = (0);
var G__36199 = (0);
seq__35961 = G__36196;
chunk__35963 = G__36197;
count__35964 = G__36198;
i__35965 = G__36199;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36015){
var map__36016 = p__36015;
var map__36016__$1 = (((((!((map__36016 == null))))?(((((map__36016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36016):map__36016);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36016__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36018){
var map__36019 = p__36018;
var map__36019__$1 = (((((!((map__36019 == null))))?(((((map__36019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36019):map__36019);
var _ = map__36019__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36019__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36021,done,error){
var map__36022 = p__36021;
var map__36022__$1 = (((((!((map__36022 == null))))?(((((map__36022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36022):map__36022);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36022__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36024,done,error){
var map__36025 = p__36024;
var map__36025__$1 = (((((!((map__36025 == null))))?(((((map__36025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36025):map__36025);
var msg = map__36025__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36025__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36025__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36025__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36027){
var map__36028 = p__36027;
var map__36028__$1 = (((((!((map__36028 == null))))?(((((map__36028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36028):map__36028);
var src = map__36028__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36028__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36030 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36030) : done.call(null,G__36030));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36031){
var map__36032 = p__36031;
var map__36032__$1 = (((((!((map__36032 == null))))?(((((map__36032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36032):map__36032);
var msg__$1 = map__36032__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36032__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36034){var ex = e36034;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36035){
var map__36036 = p__36035;
var map__36036__$1 = (((((!((map__36036 == null))))?(((((map__36036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36036):map__36036);
var env = map__36036__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36036__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36038){
var map__36039 = p__36038;
var map__36039__$1 = (((((!((map__36039 == null))))?(((((map__36039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36039):map__36039);
var msg = map__36039__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36039__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36041){
var map__36042 = p__36041;
var map__36042__$1 = (((((!((map__36042 == null))))?(((((map__36042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36042):map__36042);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__36044){
var map__36045 = p__36044;
var map__36045__$1 = (((((!((map__36045 == null))))?(((((map__36045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36045):map__36045);
var svc = map__36045__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36045__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
