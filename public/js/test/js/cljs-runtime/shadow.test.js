goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__35641){
var vec__35642 = p__35641;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35642,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35642,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__35646 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__35646__$1 = (((G__35646 instanceof cljs.core.Keyword))?G__35646.fqn:null);
switch (G__35646__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__35653 = (function (){
var seq__35654 = cljs.core.seq(vars__$1);
var chunk__35655 = null;
var count__35656 = (0);
var i__35657 = (0);
while(true){
if((i__35657 < count__35656)){
var v = chunk__35655.cljs$core$IIndexed$_nth$arity$2(null,i__35657);
var temp__5735__auto___35821 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5735__auto___35821)){
var t_35822 = temp__5735__auto___35821;
var G__35664_35823 = ((function (seq__35654,chunk__35655,count__35656,i__35657,t_35822,temp__5735__auto___35821,v,each_fixture_fn,G__35646,G__35646__$1,env,once_fixtures,each_fixtures,vec__35642,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_35822)));
});})(seq__35654,chunk__35655,count__35656,i__35657,t_35822,temp__5735__auto___35821,v,each_fixture_fn,G__35646,G__35646__$1,env,once_fixtures,each_fixtures,vec__35642,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__35664_35823) : each_fixture_fn.call(null,G__35664_35823));
} else {
}


var G__35825 = seq__35654;
var G__35826 = chunk__35655;
var G__35827 = count__35656;
var G__35828 = (i__35657 + (1));
seq__35654 = G__35825;
chunk__35655 = G__35826;
count__35656 = G__35827;
i__35657 = G__35828;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35654);
if(temp__5735__auto__){
var seq__35654__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35654__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35654__$1);
var G__35836 = cljs.core.chunk_rest(seq__35654__$1);
var G__35837 = c__4556__auto__;
var G__35838 = cljs.core.count(c__4556__auto__);
var G__35839 = (0);
seq__35654 = G__35836;
chunk__35655 = G__35837;
count__35656 = G__35838;
i__35657 = G__35839;
continue;
} else {
var v = cljs.core.first(seq__35654__$1);
var temp__5735__auto___35841__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5735__auto___35841__$1)){
var t_35843 = temp__5735__auto___35841__$1;
var G__35668_35844 = ((function (seq__35654,chunk__35655,count__35656,i__35657,t_35843,temp__5735__auto___35841__$1,v,seq__35654__$1,temp__5735__auto__,each_fixture_fn,G__35646,G__35646__$1,env,once_fixtures,each_fixtures,vec__35642,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_35843)));
});})(seq__35654,chunk__35655,count__35656,i__35657,t_35843,temp__5735__auto___35841__$1,v,seq__35654__$1,temp__5735__auto__,each_fixture_fn,G__35646,G__35646__$1,env,once_fixtures,each_fixtures,vec__35642,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__35668_35844) : each_fixture_fn.call(null,G__35668_35844));
} else {
}


var G__35846 = cljs.core.next(seq__35654__$1);
var G__35847 = null;
var G__35848 = (0);
var G__35849 = (0);
seq__35654 = G__35846;
chunk__35655 = G__35847;
count__35656 = G__35848;
i__35657 = G__35849;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__35652 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__35652.cljs$core$IFn$_invoke$arity$1 ? fexpr__35652.cljs$core$IFn$_invoke$arity$1(G__35653) : fexpr__35652.call(null,G__35653));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35646__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__35637_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__35637_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__35680 = shadow.test.env.get_test_ns_info(ns);
var map__35680__$1 = (((((!((map__35680 == null))))?(((((map__35680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35680):map__35680);
var test_ns = map__35680__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35680__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__35690,vars){
var map__35691 = p__35690;
var map__35691__$1 = (((((!((map__35691 == null))))?(((((map__35691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35691):map__35691);
var env = map__35691__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35691__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__35698_35850 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__35700_35851 = null;
var count__35701_35852 = (0);
var i__35702_35853 = (0);
while(true){
if((i__35702_35853 < count__35701_35852)){
var vec__35723_35854 = chunk__35700_35851.cljs$core$IIndexed$_nth$arity$2(null,i__35702_35853);
var test_ns_35855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35723_35854,(0),null);
var ns_info_35856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35723_35854,(1),null);
var map__35726_35858 = ns_info_35856;
var map__35726_35859__$1 = (((((!((map__35726_35858 == null))))?(((((map__35726_35858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35726_35858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35726_35858):map__35726_35858);
var fixtures_35860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35726_35859__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5735__auto___35862 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_35860);
if(cljs.core.truth_(temp__5735__auto___35862)){
var fix_35863 = temp__5735__auto___35862;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_35855,fix_35863], 0));
} else {
}

var temp__5735__auto___35865 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_35860);
if(cljs.core.truth_(temp__5735__auto___35865)){
var fix_35866 = temp__5735__auto___35865;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_35855,fix_35866], 0));
} else {
}


var G__35868 = seq__35698_35850;
var G__35869 = chunk__35700_35851;
var G__35870 = count__35701_35852;
var G__35871 = (i__35702_35853 + (1));
seq__35698_35850 = G__35868;
chunk__35700_35851 = G__35869;
count__35701_35852 = G__35870;
i__35702_35853 = G__35871;
continue;
} else {
var temp__5735__auto___35873 = cljs.core.seq(seq__35698_35850);
if(temp__5735__auto___35873){
var seq__35698_35874__$1 = temp__5735__auto___35873;
if(cljs.core.chunked_seq_QMARK_(seq__35698_35874__$1)){
var c__4556__auto___35875 = cljs.core.chunk_first(seq__35698_35874__$1);
var G__35876 = cljs.core.chunk_rest(seq__35698_35874__$1);
var G__35877 = c__4556__auto___35875;
var G__35878 = cljs.core.count(c__4556__auto___35875);
var G__35879 = (0);
seq__35698_35850 = G__35876;
chunk__35700_35851 = G__35877;
count__35701_35852 = G__35878;
i__35702_35853 = G__35879;
continue;
} else {
var vec__35734_35880 = cljs.core.first(seq__35698_35874__$1);
var test_ns_35881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35734_35880,(0),null);
var ns_info_35882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35734_35880,(1),null);
var map__35738_35883 = ns_info_35882;
var map__35738_35884__$1 = (((((!((map__35738_35883 == null))))?(((((map__35738_35883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35738_35883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35738_35883):map__35738_35883);
var fixtures_35885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35738_35884__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5735__auto___35889__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_35885);
if(cljs.core.truth_(temp__5735__auto___35889__$1)){
var fix_35891 = temp__5735__auto___35889__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_35881,fix_35891], 0));
} else {
}

var temp__5735__auto___35893__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_35885);
if(cljs.core.truth_(temp__5735__auto___35893__$1)){
var fix_35894 = temp__5735__auto___35893__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_35881,fix_35894], 0));
} else {
}


var G__35895 = cljs.core.next(seq__35698_35874__$1);
var G__35896 = null;
var G__35897 = (0);
var G__35898 = (0);
seq__35698_35850 = G__35895;
chunk__35700_35851 = G__35896;
count__35701_35852 = G__35897;
i__35702_35853 = G__35898;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35686_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__35686_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__35753 = cljs.test.get_current_env();
var map__35753__$1 = (((((!((map__35753 == null))))?(((((map__35753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35753):map__35753);
var env = map__35753__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35753__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35753__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__35770 = arguments.length;
switch (G__35770) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__35787 = arguments.length;
switch (G__35787) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__35791 = shadow.test.env.get_test_ns_info(ns);
var map__35791__$1 = (((((!((map__35791 == null))))?(((((map__35791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35791):map__35791);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35791__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__35799 = arguments.length;
switch (G__35799) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35794_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__35794_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__35808 = arguments.length;
switch (G__35808) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35803_SHARP_){
var or__4126__auto__ = (re == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35803_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
