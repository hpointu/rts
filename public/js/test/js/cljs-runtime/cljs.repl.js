goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36999){
var map__37000 = p__36999;
var map__37000__$1 = (((((!((map__37000 == null))))?(((((map__37000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37000):map__37000);
var m = map__37000__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37000__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37000__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37002_37224 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37003_37225 = null;
var count__37004_37226 = (0);
var i__37005_37227 = (0);
while(true){
if((i__37005_37227 < count__37004_37226)){
var f_37228 = chunk__37003_37225.cljs$core$IIndexed$_nth$arity$2(null,i__37005_37227);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37228], 0));


var G__37229 = seq__37002_37224;
var G__37230 = chunk__37003_37225;
var G__37231 = count__37004_37226;
var G__37232 = (i__37005_37227 + (1));
seq__37002_37224 = G__37229;
chunk__37003_37225 = G__37230;
count__37004_37226 = G__37231;
i__37005_37227 = G__37232;
continue;
} else {
var temp__5735__auto___37233 = cljs.core.seq(seq__37002_37224);
if(temp__5735__auto___37233){
var seq__37002_37234__$1 = temp__5735__auto___37233;
if(cljs.core.chunked_seq_QMARK_(seq__37002_37234__$1)){
var c__4556__auto___37235 = cljs.core.chunk_first(seq__37002_37234__$1);
var G__37236 = cljs.core.chunk_rest(seq__37002_37234__$1);
var G__37237 = c__4556__auto___37235;
var G__37238 = cljs.core.count(c__4556__auto___37235);
var G__37239 = (0);
seq__37002_37224 = G__37236;
chunk__37003_37225 = G__37237;
count__37004_37226 = G__37238;
i__37005_37227 = G__37239;
continue;
} else {
var f_37240 = cljs.core.first(seq__37002_37234__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37240], 0));


var G__37241 = cljs.core.next(seq__37002_37234__$1);
var G__37242 = null;
var G__37243 = (0);
var G__37244 = (0);
seq__37002_37224 = G__37241;
chunk__37003_37225 = G__37242;
count__37004_37226 = G__37243;
i__37005_37227 = G__37244;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37245 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37245], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37245)))?cljs.core.second(arglists_37245):arglists_37245)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37011_37247 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37012_37248 = null;
var count__37013_37249 = (0);
var i__37014_37250 = (0);
while(true){
if((i__37014_37250 < count__37013_37249)){
var vec__37027_37251 = chunk__37012_37248.cljs$core$IIndexed$_nth$arity$2(null,i__37014_37250);
var name_37252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37027_37251,(0),null);
var map__37030_37253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37027_37251,(1),null);
var map__37030_37254__$1 = (((((!((map__37030_37253 == null))))?(((((map__37030_37253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37030_37253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37030_37253):map__37030_37253);
var doc_37255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37030_37254__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37030_37254__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37252], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37256], 0));

if(cljs.core.truth_(doc_37255)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37255], 0));
} else {
}


var G__37257 = seq__37011_37247;
var G__37258 = chunk__37012_37248;
var G__37259 = count__37013_37249;
var G__37260 = (i__37014_37250 + (1));
seq__37011_37247 = G__37257;
chunk__37012_37248 = G__37258;
count__37013_37249 = G__37259;
i__37014_37250 = G__37260;
continue;
} else {
var temp__5735__auto___37261 = cljs.core.seq(seq__37011_37247);
if(temp__5735__auto___37261){
var seq__37011_37262__$1 = temp__5735__auto___37261;
if(cljs.core.chunked_seq_QMARK_(seq__37011_37262__$1)){
var c__4556__auto___37263 = cljs.core.chunk_first(seq__37011_37262__$1);
var G__37264 = cljs.core.chunk_rest(seq__37011_37262__$1);
var G__37265 = c__4556__auto___37263;
var G__37266 = cljs.core.count(c__4556__auto___37263);
var G__37267 = (0);
seq__37011_37247 = G__37264;
chunk__37012_37248 = G__37265;
count__37013_37249 = G__37266;
i__37014_37250 = G__37267;
continue;
} else {
var vec__37034_37268 = cljs.core.first(seq__37011_37262__$1);
var name_37269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37034_37268,(0),null);
var map__37037_37270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37034_37268,(1),null);
var map__37037_37271__$1 = (((((!((map__37037_37270 == null))))?(((((map__37037_37270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37037_37270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37037_37270):map__37037_37270);
var doc_37272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37037_37271__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37037_37271__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37269], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37273], 0));

if(cljs.core.truth_(doc_37272)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37272], 0));
} else {
}


var G__37274 = cljs.core.next(seq__37011_37262__$1);
var G__37275 = null;
var G__37276 = (0);
var G__37277 = (0);
seq__37011_37247 = G__37274;
chunk__37012_37248 = G__37275;
count__37013_37249 = G__37276;
i__37014_37250 = G__37277;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37040 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37041 = null;
var count__37042 = (0);
var i__37043 = (0);
while(true){
if((i__37043 < count__37042)){
var role = chunk__37041.cljs$core$IIndexed$_nth$arity$2(null,i__37043);
var temp__5735__auto___37279__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37279__$1)){
var spec_37280 = temp__5735__auto___37279__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37280)], 0));
} else {
}


var G__37281 = seq__37040;
var G__37282 = chunk__37041;
var G__37283 = count__37042;
var G__37284 = (i__37043 + (1));
seq__37040 = G__37281;
chunk__37041 = G__37282;
count__37042 = G__37283;
i__37043 = G__37284;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37040);
if(temp__5735__auto____$1){
var seq__37040__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37040__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37040__$1);
var G__37285 = cljs.core.chunk_rest(seq__37040__$1);
var G__37286 = c__4556__auto__;
var G__37287 = cljs.core.count(c__4556__auto__);
var G__37288 = (0);
seq__37040 = G__37285;
chunk__37041 = G__37286;
count__37042 = G__37287;
i__37043 = G__37288;
continue;
} else {
var role = cljs.core.first(seq__37040__$1);
var temp__5735__auto___37289__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37289__$2)){
var spec_37290 = temp__5735__auto___37289__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37290)], 0));
} else {
}


var G__37291 = cljs.core.next(seq__37040__$1);
var G__37292 = null;
var G__37293 = (0);
var G__37294 = (0);
seq__37040 = G__37291;
chunk__37041 = G__37292;
count__37042 = G__37293;
i__37043 = G__37294;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37295 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37296 = cljs.core.ex_cause(t);
via = G__37295;
t = G__37296;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37110 = datafied_throwable;
var map__37110__$1 = (((((!((map__37110 == null))))?(((((map__37110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37110):map__37110);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37110__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37110__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37110__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37111 = cljs.core.last(via);
var map__37111__$1 = (((((!((map__37111 == null))))?(((((map__37111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37111):map__37111);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37111__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37111__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37111__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37112 = data;
var map__37112__$1 = (((((!((map__37112 == null))))?(((((map__37112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37112):map__37112);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37112__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37112__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37112__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37113 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37113__$1 = (((((!((map__37113 == null))))?(((((map__37113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37113):map__37113);
var top_data = map__37113__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37113__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37151 = phase;
var G__37151__$1 = (((G__37151 instanceof cljs.core.Keyword))?G__37151.fqn:null);
switch (G__37151__$1) {
case "read-source":
var map__37152 = data;
var map__37152__$1 = (((((!((map__37152 == null))))?(((((map__37152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37152):map__37152);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37152__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37152__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37154 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37154__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37154,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37154);
var G__37154__$2 = (cljs.core.truth_((function (){var fexpr__37156 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37156.cljs$core$IFn$_invoke$arity$1 ? fexpr__37156.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37156.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37154__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37154__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37154__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37154__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37157 = top_data;
var G__37157__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37157,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37157);
var G__37157__$2 = (cljs.core.truth_((function (){var fexpr__37158 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37158.cljs$core$IFn$_invoke$arity$1 ? fexpr__37158.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37158.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37157__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37157__$1);
var G__37157__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37157__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37157__$2);
var G__37157__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37157__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37157__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37157__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37157__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37160 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37160,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37160,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37160,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37160,(3),null);
var G__37163 = top_data;
var G__37163__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37163,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37163);
var G__37163__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37163__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37163__$1);
var G__37163__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37163__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37163__$2);
var G__37163__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37163__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37163__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37163__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37163__$4;
}

break;
case "execution":
var vec__37165 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37165,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37165,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37165,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37165,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37109_SHARP_){
var or__4126__auto__ = (p1__37109_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__37169 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37169.cljs$core$IFn$_invoke$arity$1 ? fexpr__37169.cljs$core$IFn$_invoke$arity$1(p1__37109_SHARP_) : fexpr__37169.call(null,p1__37109_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__37171 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37171__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37171,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37171);
var G__37171__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37171__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37171__$1);
var G__37171__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37171__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37171__$2);
var G__37171__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37171__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37171__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37171__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37171__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37151__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37176){
var map__37177 = p__37176;
var map__37177__$1 = (((((!((map__37177 == null))))?(((((map__37177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37177):map__37177);
var triage_data = map__37177__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37177__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37177__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37177__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37177__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37177__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37177__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37177__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37177__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37179 = phase;
var G__37179__$1 = (((G__37179 instanceof cljs.core.Keyword))?G__37179.fqn:null);
switch (G__37179__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37180 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37181 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37182 = loc;
var G__37183 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37184_37306 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37185_37307 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37186_37308 = true;
var _STAR_print_fn_STAR__temp_val__37187_37309 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37186_37308);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37187_37309);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37173_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37173_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37185_37307);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37184_37306);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37180,G__37181,G__37182,G__37183) : format.call(null,G__37180,G__37181,G__37182,G__37183));

break;
case "macroexpansion":
var G__37188 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37189 = cause_type;
var G__37190 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37191 = loc;
var G__37192 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37188,G__37189,G__37190,G__37191,G__37192) : format.call(null,G__37188,G__37189,G__37190,G__37191,G__37192));

break;
case "compile-syntax-check":
var G__37197 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37198 = cause_type;
var G__37199 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37200 = loc;
var G__37201 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37197,G__37198,G__37199,G__37200,G__37201) : format.call(null,G__37197,G__37198,G__37199,G__37200,G__37201));

break;
case "compilation":
var G__37202 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37203 = cause_type;
var G__37204 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37205 = loc;
var G__37206 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37202,G__37203,G__37204,G__37205,G__37206) : format.call(null,G__37202,G__37203,G__37204,G__37205,G__37206));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37207 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37208 = symbol;
var G__37209 = loc;
var G__37210 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37213_37310 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37214_37311 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37215_37312 = true;
var _STAR_print_fn_STAR__temp_val__37216_37313 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37215_37312);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37216_37313);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37174_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37174_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37214_37311);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37213_37310);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37207,G__37208,G__37209,G__37210) : format.call(null,G__37207,G__37208,G__37209,G__37210));
} else {
var G__37219 = "Execution error%s at %s(%s).\n%s\n";
var G__37220 = cause_type;
var G__37221 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37222 = loc;
var G__37223 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37219,G__37220,G__37221,G__37222,G__37223) : format.call(null,G__37219,G__37220,G__37221,G__37222,G__37223));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37179__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
