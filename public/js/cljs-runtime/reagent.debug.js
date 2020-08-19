goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__26752__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26753__i = 0, G__26753__a = new Array(arguments.length -  0);
while (G__26753__i < G__26753__a.length) {G__26753__a[G__26753__i] = arguments[G__26753__i + 0]; ++G__26753__i;}
  args = new cljs.core.IndexedSeq(G__26753__a,0,null);
} 
return G__26752__delegate.call(this,args);};
G__26752.cljs$lang$maxFixedArity = 0;
G__26752.cljs$lang$applyTo = (function (arglist__26755){
var args = cljs.core.seq(arglist__26755);
return G__26752__delegate(args);
});
G__26752.cljs$core$IFn$_invoke$arity$variadic = G__26752__delegate;
return G__26752;
})()
);

(o.error = (function() { 
var G__26756__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26757__i = 0, G__26757__a = new Array(arguments.length -  0);
while (G__26757__i < G__26757__a.length) {G__26757__a[G__26757__i] = arguments[G__26757__i + 0]; ++G__26757__i;}
  args = new cljs.core.IndexedSeq(G__26757__a,0,null);
} 
return G__26756__delegate.call(this,args);};
G__26756.cljs$lang$maxFixedArity = 0;
G__26756.cljs$lang$applyTo = (function (arglist__26758){
var args = cljs.core.seq(arglist__26758);
return G__26756__delegate(args);
});
G__26756.cljs$core$IFn$_invoke$arity$variadic = G__26756__delegate;
return G__26756;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
