goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36650){
var map__36651 = p__36650;
var map__36651__$1 = (((((!((map__36651 == null))))?(((((map__36651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36651):map__36651);
var m = map__36651__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36651__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36651__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36656_36876 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36657_36877 = null;
var count__36658_36878 = (0);
var i__36659_36879 = (0);
while(true){
if((i__36659_36879 < count__36658_36878)){
var f_36880 = chunk__36657_36877.cljs$core$IIndexed$_nth$arity$2(null,i__36659_36879);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36880], 0));


var G__36881 = seq__36656_36876;
var G__36882 = chunk__36657_36877;
var G__36883 = count__36658_36878;
var G__36884 = (i__36659_36879 + (1));
seq__36656_36876 = G__36881;
chunk__36657_36877 = G__36882;
count__36658_36878 = G__36883;
i__36659_36879 = G__36884;
continue;
} else {
var temp__5735__auto___36885 = cljs.core.seq(seq__36656_36876);
if(temp__5735__auto___36885){
var seq__36656_36886__$1 = temp__5735__auto___36885;
if(cljs.core.chunked_seq_QMARK_(seq__36656_36886__$1)){
var c__4556__auto___36887 = cljs.core.chunk_first(seq__36656_36886__$1);
var G__36888 = cljs.core.chunk_rest(seq__36656_36886__$1);
var G__36889 = c__4556__auto___36887;
var G__36890 = cljs.core.count(c__4556__auto___36887);
var G__36891 = (0);
seq__36656_36876 = G__36888;
chunk__36657_36877 = G__36889;
count__36658_36878 = G__36890;
i__36659_36879 = G__36891;
continue;
} else {
var f_36892 = cljs.core.first(seq__36656_36886__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36892], 0));


var G__36893 = cljs.core.next(seq__36656_36886__$1);
var G__36894 = null;
var G__36895 = (0);
var G__36896 = (0);
seq__36656_36876 = G__36893;
chunk__36657_36877 = G__36894;
count__36658_36878 = G__36895;
i__36659_36879 = G__36896;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36897 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36897], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36897)))?cljs.core.second(arglists_36897):arglists_36897)], 0));
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
var seq__36663_36898 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36664_36899 = null;
var count__36665_36900 = (0);
var i__36666_36901 = (0);
while(true){
if((i__36666_36901 < count__36665_36900)){
var vec__36680_36902 = chunk__36664_36899.cljs$core$IIndexed$_nth$arity$2(null,i__36666_36901);
var name_36903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36680_36902,(0),null);
var map__36683_36904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36680_36902,(1),null);
var map__36683_36905__$1 = (((((!((map__36683_36904 == null))))?(((((map__36683_36904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36683_36904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36683_36904):map__36683_36904);
var doc_36906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36683_36905__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36683_36905__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36903], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36907], 0));

if(cljs.core.truth_(doc_36906)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36906], 0));
} else {
}


var G__36908 = seq__36663_36898;
var G__36909 = chunk__36664_36899;
var G__36910 = count__36665_36900;
var G__36911 = (i__36666_36901 + (1));
seq__36663_36898 = G__36908;
chunk__36664_36899 = G__36909;
count__36665_36900 = G__36910;
i__36666_36901 = G__36911;
continue;
} else {
var temp__5735__auto___36912 = cljs.core.seq(seq__36663_36898);
if(temp__5735__auto___36912){
var seq__36663_36913__$1 = temp__5735__auto___36912;
if(cljs.core.chunked_seq_QMARK_(seq__36663_36913__$1)){
var c__4556__auto___36914 = cljs.core.chunk_first(seq__36663_36913__$1);
var G__36915 = cljs.core.chunk_rest(seq__36663_36913__$1);
var G__36916 = c__4556__auto___36914;
var G__36917 = cljs.core.count(c__4556__auto___36914);
var G__36918 = (0);
seq__36663_36898 = G__36915;
chunk__36664_36899 = G__36916;
count__36665_36900 = G__36917;
i__36666_36901 = G__36918;
continue;
} else {
var vec__36687_36919 = cljs.core.first(seq__36663_36913__$1);
var name_36920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36687_36919,(0),null);
var map__36690_36921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36687_36919,(1),null);
var map__36690_36922__$1 = (((((!((map__36690_36921 == null))))?(((((map__36690_36921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36690_36921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36690_36921):map__36690_36921);
var doc_36923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36690_36922__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36690_36922__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36920], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36924], 0));

if(cljs.core.truth_(doc_36923)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36923], 0));
} else {
}


var G__36925 = cljs.core.next(seq__36663_36913__$1);
var G__36926 = null;
var G__36927 = (0);
var G__36928 = (0);
seq__36663_36898 = G__36925;
chunk__36664_36899 = G__36926;
count__36665_36900 = G__36927;
i__36666_36901 = G__36928;
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

var seq__36692 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36693 = null;
var count__36694 = (0);
var i__36695 = (0);
while(true){
if((i__36695 < count__36694)){
var role = chunk__36693.cljs$core$IIndexed$_nth$arity$2(null,i__36695);
var temp__5735__auto___36930__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36930__$1)){
var spec_36931 = temp__5735__auto___36930__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36931)], 0));
} else {
}


var G__36932 = seq__36692;
var G__36933 = chunk__36693;
var G__36934 = count__36694;
var G__36935 = (i__36695 + (1));
seq__36692 = G__36932;
chunk__36693 = G__36933;
count__36694 = G__36934;
i__36695 = G__36935;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36692);
if(temp__5735__auto____$1){
var seq__36692__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36692__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36692__$1);
var G__36936 = cljs.core.chunk_rest(seq__36692__$1);
var G__36937 = c__4556__auto__;
var G__36938 = cljs.core.count(c__4556__auto__);
var G__36939 = (0);
seq__36692 = G__36936;
chunk__36693 = G__36937;
count__36694 = G__36938;
i__36695 = G__36939;
continue;
} else {
var role = cljs.core.first(seq__36692__$1);
var temp__5735__auto___36940__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36940__$2)){
var spec_36941 = temp__5735__auto___36940__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36941)], 0));
} else {
}


var G__36942 = cljs.core.next(seq__36692__$1);
var G__36943 = null;
var G__36944 = (0);
var G__36945 = (0);
seq__36692 = G__36942;
chunk__36693 = G__36943;
count__36694 = G__36944;
i__36695 = G__36945;
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
var G__36950 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36951 = cljs.core.ex_cause(t);
via = G__36950;
t = G__36951;
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
var map__36794 = datafied_throwable;
var map__36794__$1 = (((((!((map__36794 == null))))?(((((map__36794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36794):map__36794);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36794__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36794__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36794__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36795 = cljs.core.last(via);
var map__36795__$1 = (((((!((map__36795 == null))))?(((((map__36795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36795):map__36795);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36795__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36795__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36795__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36796 = data;
var map__36796__$1 = (((((!((map__36796 == null))))?(((((map__36796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36796):map__36796);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36796__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36796__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36796__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36797 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36797__$1 = (((((!((map__36797 == null))))?(((((map__36797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36797):map__36797);
var top_data = map__36797__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36797__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36804 = phase;
var G__36804__$1 = (((G__36804 instanceof cljs.core.Keyword))?G__36804.fqn:null);
switch (G__36804__$1) {
case "read-source":
var map__36805 = data;
var map__36805__$1 = (((((!((map__36805 == null))))?(((((map__36805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36805):map__36805);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36805__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36805__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36808 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36808__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36808,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36808);
var G__36808__$2 = (cljs.core.truth_((function (){var fexpr__36810 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36810.cljs$core$IFn$_invoke$arity$1 ? fexpr__36810.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36810.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36808__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36808__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36808__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36808__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36811 = top_data;
var G__36811__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36811,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36811);
var G__36811__$2 = (cljs.core.truth_((function (){var fexpr__36812 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36812.cljs$core$IFn$_invoke$arity$1 ? fexpr__36812.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36812.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36811__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36811__$1);
var G__36811__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36811__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36811__$2);
var G__36811__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36811__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36811__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36811__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36811__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36813 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36813,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36813,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36813,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36813,(3),null);
var G__36817 = top_data;
var G__36817__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36817,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36817);
var G__36817__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36817__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36817__$1);
var G__36817__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36817__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36817__$2);
var G__36817__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36817__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36817__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36817__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36817__$4;
}

break;
case "execution":
var vec__36818 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36818,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36818,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36818,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36818,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36792_SHARP_){
var or__4126__auto__ = (p1__36792_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36822 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36822.cljs$core$IFn$_invoke$arity$1 ? fexpr__36822.cljs$core$IFn$_invoke$arity$1(p1__36792_SHARP_) : fexpr__36822.call(null,p1__36792_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36823 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36823__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36823,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36823);
var G__36823__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36823__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36823__$1);
var G__36823__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36823__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36823__$2);
var G__36823__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36823__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36823__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36823__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36823__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36804__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36830){
var map__36833 = p__36830;
var map__36833__$1 = (((((!((map__36833 == null))))?(((((map__36833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36833):map__36833);
var triage_data = map__36833__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36837 = phase;
var G__36837__$1 = (((G__36837 instanceof cljs.core.Keyword))?G__36837.fqn:null);
switch (G__36837__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36838 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36839 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36840 = loc;
var G__36841 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36842_36965 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36843_36966 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36844_36967 = true;
var _STAR_print_fn_STAR__temp_val__36845_36968 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36844_36967);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36845_36968);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36828_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36828_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36843_36966);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36842_36965);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36838,G__36839,G__36840,G__36841) : format.call(null,G__36838,G__36839,G__36840,G__36841));

break;
case "macroexpansion":
var G__36846 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36847 = cause_type;
var G__36848 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36849 = loc;
var G__36850 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36846,G__36847,G__36848,G__36849,G__36850) : format.call(null,G__36846,G__36847,G__36848,G__36849,G__36850));

break;
case "compile-syntax-check":
var G__36851 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36852 = cause_type;
var G__36853 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36854 = loc;
var G__36855 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36851,G__36852,G__36853,G__36854,G__36855) : format.call(null,G__36851,G__36852,G__36853,G__36854,G__36855));

break;
case "compilation":
var G__36856 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36857 = cause_type;
var G__36858 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36859 = loc;
var G__36860 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36856,G__36857,G__36858,G__36859,G__36860) : format.call(null,G__36856,G__36857,G__36858,G__36859,G__36860));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36861 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36862 = symbol;
var G__36863 = loc;
var G__36864 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36865_36969 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36866_36970 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36867_36971 = true;
var _STAR_print_fn_STAR__temp_val__36868_36972 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36867_36971);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36868_36972);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36829_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36829_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36866_36970);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36865_36969);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36861,G__36862,G__36863,G__36864) : format.call(null,G__36861,G__36862,G__36863,G__36864));
} else {
var G__36870 = "Execution error%s at %s(%s).\n%s\n";
var G__36871 = cause_type;
var G__36872 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36873 = loc;
var G__36874 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36870,G__36871,G__36872,G__36873,G__36874) : format.call(null,G__36870,G__36871,G__36872,G__36873,G__36874));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36837__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
