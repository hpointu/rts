goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32986 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_32986(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32988 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_32988(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31808 = coll;
var G__31809 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31808,G__31809) : shadow.dom.lazy_native_coll_seq.call(null,G__31808,G__31809));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__31849 = arguments.length;
switch (G__31849) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__31861 = arguments.length;
switch (G__31861) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__31875 = arguments.length;
switch (G__31875) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__31889 = arguments.length;
switch (G__31889) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__31900 = arguments.length;
switch (G__31900) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__31925 = arguments.length;
switch (G__31925) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e31942){if((e31942 instanceof Object)){
var e = e31942;
return console.log("didnt support attachEvent",el,e);
} else {
throw e31942;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__31957 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__31958 = null;
var count__31959 = (0);
var i__31960 = (0);
while(true){
if((i__31960 < count__31959)){
var el = chunk__31958.cljs$core$IIndexed$_nth$arity$2(null,i__31960);
var handler_33033__$1 = ((function (seq__31957,chunk__31958,count__31959,i__31960,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31957,chunk__31958,count__31959,i__31960,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33033__$1);


var G__33034 = seq__31957;
var G__33035 = chunk__31958;
var G__33036 = count__31959;
var G__33037 = (i__31960 + (1));
seq__31957 = G__33034;
chunk__31958 = G__33035;
count__31959 = G__33036;
i__31960 = G__33037;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31957);
if(temp__5735__auto__){
var seq__31957__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31957__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31957__$1);
var G__33038 = cljs.core.chunk_rest(seq__31957__$1);
var G__33039 = c__4556__auto__;
var G__33040 = cljs.core.count(c__4556__auto__);
var G__33041 = (0);
seq__31957 = G__33038;
chunk__31958 = G__33039;
count__31959 = G__33040;
i__31960 = G__33041;
continue;
} else {
var el = cljs.core.first(seq__31957__$1);
var handler_33042__$1 = ((function (seq__31957,chunk__31958,count__31959,i__31960,el,seq__31957__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31957,chunk__31958,count__31959,i__31960,el,seq__31957__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33042__$1);


var G__33047 = cljs.core.next(seq__31957__$1);
var G__33048 = null;
var G__33049 = (0);
var G__33050 = (0);
seq__31957 = G__33047;
chunk__31958 = G__33048;
count__31959 = G__33049;
i__31960 = G__33050;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__31995 = arguments.length;
switch (G__31995) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32021 = cljs.core.seq(events);
var chunk__32022 = null;
var count__32023 = (0);
var i__32024 = (0);
while(true){
if((i__32024 < count__32023)){
var vec__32035 = chunk__32022.cljs$core$IIndexed$_nth$arity$2(null,i__32024);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32035,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33056 = seq__32021;
var G__33057 = chunk__32022;
var G__33058 = count__32023;
var G__33059 = (i__32024 + (1));
seq__32021 = G__33056;
chunk__32022 = G__33057;
count__32023 = G__33058;
i__32024 = G__33059;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32021);
if(temp__5735__auto__){
var seq__32021__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32021__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32021__$1);
var G__33060 = cljs.core.chunk_rest(seq__32021__$1);
var G__33061 = c__4556__auto__;
var G__33062 = cljs.core.count(c__4556__auto__);
var G__33063 = (0);
seq__32021 = G__33060;
chunk__32022 = G__33061;
count__32023 = G__33062;
i__32024 = G__33063;
continue;
} else {
var vec__32039 = cljs.core.first(seq__32021__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32039,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32039,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33064 = cljs.core.next(seq__32021__$1);
var G__33065 = null;
var G__33066 = (0);
var G__33067 = (0);
seq__32021 = G__33064;
chunk__32022 = G__33065;
count__32023 = G__33066;
i__32024 = G__33067;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32043 = cljs.core.seq(styles);
var chunk__32044 = null;
var count__32045 = (0);
var i__32046 = (0);
while(true){
if((i__32046 < count__32045)){
var vec__32066 = chunk__32044.cljs$core$IIndexed$_nth$arity$2(null,i__32046);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32066,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32066,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33068 = seq__32043;
var G__33069 = chunk__32044;
var G__33070 = count__32045;
var G__33071 = (i__32046 + (1));
seq__32043 = G__33068;
chunk__32044 = G__33069;
count__32045 = G__33070;
i__32046 = G__33071;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32043);
if(temp__5735__auto__){
var seq__32043__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32043__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32043__$1);
var G__33072 = cljs.core.chunk_rest(seq__32043__$1);
var G__33073 = c__4556__auto__;
var G__33074 = cljs.core.count(c__4556__auto__);
var G__33075 = (0);
seq__32043 = G__33072;
chunk__32044 = G__33073;
count__32045 = G__33074;
i__32046 = G__33075;
continue;
} else {
var vec__32071 = cljs.core.first(seq__32043__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32071,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33076 = cljs.core.next(seq__32043__$1);
var G__33077 = null;
var G__33078 = (0);
var G__33079 = (0);
seq__32043 = G__33076;
chunk__32044 = G__33077;
count__32045 = G__33078;
i__32046 = G__33079;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32094_33081 = key;
var G__32094_33082__$1 = (((G__32094_33081 instanceof cljs.core.Keyword))?G__32094_33081.fqn:null);
switch (G__32094_33082__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33085 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33085,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33085,"aria-");
}
})())){
el.setAttribute(ks_33085,value);
} else {
(el[ks_33085] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32150){
var map__32151 = p__32150;
var map__32151__$1 = (((((!((map__32151 == null))))?(((((map__32151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32151):map__32151);
var props = map__32151__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32151__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32155 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32155,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32155,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32155,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32163 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32163,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32163;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32170 = arguments.length;
switch (G__32170) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32185){
var vec__32190 = p__32185;
var seq__32191 = cljs.core.seq(vec__32190);
var first__32192 = cljs.core.first(seq__32191);
var seq__32191__$1 = cljs.core.next(seq__32191);
var nn = first__32192;
var first__32192__$1 = cljs.core.first(seq__32191__$1);
var seq__32191__$2 = cljs.core.next(seq__32191__$1);
var np = first__32192__$1;
var nc = seq__32191__$2;
var node = vec__32190;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32196 = nn;
var G__32197 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32196,G__32197) : create_fn.call(null,G__32196,G__32197));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32199 = nn;
var G__32200 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32199,G__32200) : create_fn.call(null,G__32199,G__32200));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32207 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32207,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32207,(1),null);
var seq__32210_33102 = cljs.core.seq(node_children);
var chunk__32211_33103 = null;
var count__32212_33104 = (0);
var i__32213_33105 = (0);
while(true){
if((i__32213_33105 < count__32212_33104)){
var child_struct_33106 = chunk__32211_33103.cljs$core$IIndexed$_nth$arity$2(null,i__32213_33105);
var children_33107 = shadow.dom.dom_node(child_struct_33106);
if(cljs.core.seq_QMARK_(children_33107)){
var seq__32260_33108 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33107));
var chunk__32262_33109 = null;
var count__32263_33110 = (0);
var i__32264_33111 = (0);
while(true){
if((i__32264_33111 < count__32263_33110)){
var child_33112 = chunk__32262_33109.cljs$core$IIndexed$_nth$arity$2(null,i__32264_33111);
if(cljs.core.truth_(child_33112)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33112);


var G__33113 = seq__32260_33108;
var G__33114 = chunk__32262_33109;
var G__33115 = count__32263_33110;
var G__33116 = (i__32264_33111 + (1));
seq__32260_33108 = G__33113;
chunk__32262_33109 = G__33114;
count__32263_33110 = G__33115;
i__32264_33111 = G__33116;
continue;
} else {
var G__33117 = seq__32260_33108;
var G__33118 = chunk__32262_33109;
var G__33119 = count__32263_33110;
var G__33120 = (i__32264_33111 + (1));
seq__32260_33108 = G__33117;
chunk__32262_33109 = G__33118;
count__32263_33110 = G__33119;
i__32264_33111 = G__33120;
continue;
}
} else {
var temp__5735__auto___33126 = cljs.core.seq(seq__32260_33108);
if(temp__5735__auto___33126){
var seq__32260_33127__$1 = temp__5735__auto___33126;
if(cljs.core.chunked_seq_QMARK_(seq__32260_33127__$1)){
var c__4556__auto___33128 = cljs.core.chunk_first(seq__32260_33127__$1);
var G__33129 = cljs.core.chunk_rest(seq__32260_33127__$1);
var G__33130 = c__4556__auto___33128;
var G__33131 = cljs.core.count(c__4556__auto___33128);
var G__33132 = (0);
seq__32260_33108 = G__33129;
chunk__32262_33109 = G__33130;
count__32263_33110 = G__33131;
i__32264_33111 = G__33132;
continue;
} else {
var child_33133 = cljs.core.first(seq__32260_33127__$1);
if(cljs.core.truth_(child_33133)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33133);


var G__33134 = cljs.core.next(seq__32260_33127__$1);
var G__33135 = null;
var G__33136 = (0);
var G__33137 = (0);
seq__32260_33108 = G__33134;
chunk__32262_33109 = G__33135;
count__32263_33110 = G__33136;
i__32264_33111 = G__33137;
continue;
} else {
var G__33138 = cljs.core.next(seq__32260_33127__$1);
var G__33139 = null;
var G__33140 = (0);
var G__33141 = (0);
seq__32260_33108 = G__33138;
chunk__32262_33109 = G__33139;
count__32263_33110 = G__33140;
i__32264_33111 = G__33141;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33107);
}


var G__33142 = seq__32210_33102;
var G__33143 = chunk__32211_33103;
var G__33144 = count__32212_33104;
var G__33145 = (i__32213_33105 + (1));
seq__32210_33102 = G__33142;
chunk__32211_33103 = G__33143;
count__32212_33104 = G__33144;
i__32213_33105 = G__33145;
continue;
} else {
var temp__5735__auto___33146 = cljs.core.seq(seq__32210_33102);
if(temp__5735__auto___33146){
var seq__32210_33147__$1 = temp__5735__auto___33146;
if(cljs.core.chunked_seq_QMARK_(seq__32210_33147__$1)){
var c__4556__auto___33148 = cljs.core.chunk_first(seq__32210_33147__$1);
var G__33149 = cljs.core.chunk_rest(seq__32210_33147__$1);
var G__33150 = c__4556__auto___33148;
var G__33151 = cljs.core.count(c__4556__auto___33148);
var G__33152 = (0);
seq__32210_33102 = G__33149;
chunk__32211_33103 = G__33150;
count__32212_33104 = G__33151;
i__32213_33105 = G__33152;
continue;
} else {
var child_struct_33153 = cljs.core.first(seq__32210_33147__$1);
var children_33154 = shadow.dom.dom_node(child_struct_33153);
if(cljs.core.seq_QMARK_(children_33154)){
var seq__32278_33156 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33154));
var chunk__32280_33159 = null;
var count__32281_33161 = (0);
var i__32282_33162 = (0);
while(true){
if((i__32282_33162 < count__32281_33161)){
var child_33163 = chunk__32280_33159.cljs$core$IIndexed$_nth$arity$2(null,i__32282_33162);
if(cljs.core.truth_(child_33163)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33163);


var G__33166 = seq__32278_33156;
var G__33168 = chunk__32280_33159;
var G__33169 = count__32281_33161;
var G__33171 = (i__32282_33162 + (1));
seq__32278_33156 = G__33166;
chunk__32280_33159 = G__33168;
count__32281_33161 = G__33169;
i__32282_33162 = G__33171;
continue;
} else {
var G__33174 = seq__32278_33156;
var G__33175 = chunk__32280_33159;
var G__33176 = count__32281_33161;
var G__33177 = (i__32282_33162 + (1));
seq__32278_33156 = G__33174;
chunk__32280_33159 = G__33175;
count__32281_33161 = G__33176;
i__32282_33162 = G__33177;
continue;
}
} else {
var temp__5735__auto___33198__$1 = cljs.core.seq(seq__32278_33156);
if(temp__5735__auto___33198__$1){
var seq__32278_33199__$1 = temp__5735__auto___33198__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32278_33199__$1)){
var c__4556__auto___33200 = cljs.core.chunk_first(seq__32278_33199__$1);
var G__33201 = cljs.core.chunk_rest(seq__32278_33199__$1);
var G__33202 = c__4556__auto___33200;
var G__33203 = cljs.core.count(c__4556__auto___33200);
var G__33204 = (0);
seq__32278_33156 = G__33201;
chunk__32280_33159 = G__33202;
count__32281_33161 = G__33203;
i__32282_33162 = G__33204;
continue;
} else {
var child_33205 = cljs.core.first(seq__32278_33199__$1);
if(cljs.core.truth_(child_33205)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33205);


var G__33206 = cljs.core.next(seq__32278_33199__$1);
var G__33207 = null;
var G__33208 = (0);
var G__33209 = (0);
seq__32278_33156 = G__33206;
chunk__32280_33159 = G__33207;
count__32281_33161 = G__33208;
i__32282_33162 = G__33209;
continue;
} else {
var G__33210 = cljs.core.next(seq__32278_33199__$1);
var G__33211 = null;
var G__33212 = (0);
var G__33213 = (0);
seq__32278_33156 = G__33210;
chunk__32280_33159 = G__33211;
count__32281_33161 = G__33212;
i__32282_33162 = G__33213;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33154);
}


var G__33214 = cljs.core.next(seq__32210_33147__$1);
var G__33215 = null;
var G__33216 = (0);
var G__33217 = (0);
seq__32210_33102 = G__33214;
chunk__32211_33103 = G__33215;
count__32212_33104 = G__33216;
i__32213_33105 = G__33217;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32330 = cljs.core.seq(node);
var chunk__32331 = null;
var count__32332 = (0);
var i__32333 = (0);
while(true){
if((i__32333 < count__32332)){
var n = chunk__32331.cljs$core$IIndexed$_nth$arity$2(null,i__32333);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33225 = seq__32330;
var G__33226 = chunk__32331;
var G__33227 = count__32332;
var G__33228 = (i__32333 + (1));
seq__32330 = G__33225;
chunk__32331 = G__33226;
count__32332 = G__33227;
i__32333 = G__33228;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32330);
if(temp__5735__auto__){
var seq__32330__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32330__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32330__$1);
var G__33229 = cljs.core.chunk_rest(seq__32330__$1);
var G__33230 = c__4556__auto__;
var G__33231 = cljs.core.count(c__4556__auto__);
var G__33232 = (0);
seq__32330 = G__33229;
chunk__32331 = G__33230;
count__32332 = G__33231;
i__32333 = G__33232;
continue;
} else {
var n = cljs.core.first(seq__32330__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33233 = cljs.core.next(seq__32330__$1);
var G__33234 = null;
var G__33235 = (0);
var G__33236 = (0);
seq__32330 = G__33233;
chunk__32331 = G__33234;
count__32332 = G__33235;
i__32333 = G__33236;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32367 = arguments.length;
switch (G__32367) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32377 = arguments.length;
switch (G__32377) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32394 = arguments.length;
switch (G__32394) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33248 = arguments.length;
var i__4737__auto___33249 = (0);
while(true){
if((i__4737__auto___33249 < len__4736__auto___33248)){
args__4742__auto__.push((arguments[i__4737__auto___33249]));

var G__33251 = (i__4737__auto___33249 + (1));
i__4737__auto___33249 = G__33251;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32414_33252 = cljs.core.seq(nodes);
var chunk__32415_33253 = null;
var count__32416_33254 = (0);
var i__32417_33255 = (0);
while(true){
if((i__32417_33255 < count__32416_33254)){
var node_33256 = chunk__32415_33253.cljs$core$IIndexed$_nth$arity$2(null,i__32417_33255);
fragment.appendChild(shadow.dom._to_dom(node_33256));


var G__33257 = seq__32414_33252;
var G__33258 = chunk__32415_33253;
var G__33259 = count__32416_33254;
var G__33260 = (i__32417_33255 + (1));
seq__32414_33252 = G__33257;
chunk__32415_33253 = G__33258;
count__32416_33254 = G__33259;
i__32417_33255 = G__33260;
continue;
} else {
var temp__5735__auto___33261 = cljs.core.seq(seq__32414_33252);
if(temp__5735__auto___33261){
var seq__32414_33262__$1 = temp__5735__auto___33261;
if(cljs.core.chunked_seq_QMARK_(seq__32414_33262__$1)){
var c__4556__auto___33263 = cljs.core.chunk_first(seq__32414_33262__$1);
var G__33264 = cljs.core.chunk_rest(seq__32414_33262__$1);
var G__33265 = c__4556__auto___33263;
var G__33266 = cljs.core.count(c__4556__auto___33263);
var G__33267 = (0);
seq__32414_33252 = G__33264;
chunk__32415_33253 = G__33265;
count__32416_33254 = G__33266;
i__32417_33255 = G__33267;
continue;
} else {
var node_33268 = cljs.core.first(seq__32414_33262__$1);
fragment.appendChild(shadow.dom._to_dom(node_33268));


var G__33269 = cljs.core.next(seq__32414_33262__$1);
var G__33270 = null;
var G__33271 = (0);
var G__33272 = (0);
seq__32414_33252 = G__33269;
chunk__32415_33253 = G__33270;
count__32416_33254 = G__33271;
i__32417_33255 = G__33272;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32410){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32410));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32424_33273 = cljs.core.seq(scripts);
var chunk__32425_33274 = null;
var count__32426_33275 = (0);
var i__32427_33276 = (0);
while(true){
if((i__32427_33276 < count__32426_33275)){
var vec__32436_33277 = chunk__32425_33274.cljs$core$IIndexed$_nth$arity$2(null,i__32427_33276);
var script_tag_33278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32436_33277,(0),null);
var script_body_33279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32436_33277,(1),null);
eval(script_body_33279);


var G__33281 = seq__32424_33273;
var G__33282 = chunk__32425_33274;
var G__33283 = count__32426_33275;
var G__33284 = (i__32427_33276 + (1));
seq__32424_33273 = G__33281;
chunk__32425_33274 = G__33282;
count__32426_33275 = G__33283;
i__32427_33276 = G__33284;
continue;
} else {
var temp__5735__auto___33285 = cljs.core.seq(seq__32424_33273);
if(temp__5735__auto___33285){
var seq__32424_33286__$1 = temp__5735__auto___33285;
if(cljs.core.chunked_seq_QMARK_(seq__32424_33286__$1)){
var c__4556__auto___33287 = cljs.core.chunk_first(seq__32424_33286__$1);
var G__33288 = cljs.core.chunk_rest(seq__32424_33286__$1);
var G__33289 = c__4556__auto___33287;
var G__33290 = cljs.core.count(c__4556__auto___33287);
var G__33291 = (0);
seq__32424_33273 = G__33288;
chunk__32425_33274 = G__33289;
count__32426_33275 = G__33290;
i__32427_33276 = G__33291;
continue;
} else {
var vec__32441_33293 = cljs.core.first(seq__32424_33286__$1);
var script_tag_33294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32441_33293,(0),null);
var script_body_33295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32441_33293,(1),null);
eval(script_body_33295);


var G__33296 = cljs.core.next(seq__32424_33286__$1);
var G__33297 = null;
var G__33298 = (0);
var G__33299 = (0);
seq__32424_33273 = G__33296;
chunk__32425_33274 = G__33297;
count__32426_33275 = G__33298;
i__32427_33276 = G__33299;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32446){
var vec__32447 = p__32446;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32447,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32447,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32462 = arguments.length;
switch (G__32462) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32502 = cljs.core.seq(style_keys);
var chunk__32503 = null;
var count__32504 = (0);
var i__32505 = (0);
while(true){
if((i__32505 < count__32504)){
var it = chunk__32503.cljs$core$IIndexed$_nth$arity$2(null,i__32505);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33311 = seq__32502;
var G__33312 = chunk__32503;
var G__33313 = count__32504;
var G__33314 = (i__32505 + (1));
seq__32502 = G__33311;
chunk__32503 = G__33312;
count__32504 = G__33313;
i__32505 = G__33314;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32502);
if(temp__5735__auto__){
var seq__32502__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32502__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32502__$1);
var G__33315 = cljs.core.chunk_rest(seq__32502__$1);
var G__33316 = c__4556__auto__;
var G__33317 = cljs.core.count(c__4556__auto__);
var G__33318 = (0);
seq__32502 = G__33315;
chunk__32503 = G__33316;
count__32504 = G__33317;
i__32505 = G__33318;
continue;
} else {
var it = cljs.core.first(seq__32502__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33319 = cljs.core.next(seq__32502__$1);
var G__33320 = null;
var G__33321 = (0);
var G__33322 = (0);
seq__32502 = G__33319;
chunk__32503 = G__33320;
count__32504 = G__33321;
i__32505 = G__33322;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32538,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32543 = k32538;
var G__32543__$1 = (((G__32543 instanceof cljs.core.Keyword))?G__32543.fqn:null);
switch (G__32543__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32538,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32551){
var vec__32552 = p__32551;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32552,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32552,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32537){
var self__ = this;
var G__32537__$1 = this;
return (new cljs.core.RecordIter((0),G__32537__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32539,other32540){
var self__ = this;
var this32539__$1 = this;
return (((!((other32540 == null)))) && ((this32539__$1.constructor === other32540.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32539__$1.x,other32540.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32539__$1.y,other32540.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32539__$1.__extmap,other32540.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32537){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32589 = cljs.core.keyword_identical_QMARK_;
var expr__32590 = k__4388__auto__;
if(cljs.core.truth_((pred__32589.cljs$core$IFn$_invoke$arity$2 ? pred__32589.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32590) : pred__32589.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32590)))){
return (new shadow.dom.Coordinate(G__32537,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32589.cljs$core$IFn$_invoke$arity$2 ? pred__32589.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32590) : pred__32589.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32590)))){
return (new shadow.dom.Coordinate(self__.x,G__32537,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32537),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32537){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32537,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32541){
var extmap__4419__auto__ = (function (){var G__32609 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32541,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32541)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32609);
} else {
return G__32609;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32541),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32541),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32627,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32635 = k32627;
var G__32635__$1 = (((G__32635 instanceof cljs.core.Keyword))?G__32635.fqn:null);
switch (G__32635__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32627,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32641){
var vec__32642 = p__32641;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32642,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32642,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32626){
var self__ = this;
var G__32626__$1 = this;
return (new cljs.core.RecordIter((0),G__32626__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32628,other32629){
var self__ = this;
var this32628__$1 = this;
return (((!((other32629 == null)))) && ((this32628__$1.constructor === other32629.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32628__$1.w,other32629.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32628__$1.h,other32629.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32628__$1.__extmap,other32629.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32626){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32663 = cljs.core.keyword_identical_QMARK_;
var expr__32664 = k__4388__auto__;
if(cljs.core.truth_((pred__32663.cljs$core$IFn$_invoke$arity$2 ? pred__32663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32664) : pred__32663.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32664)))){
return (new shadow.dom.Size(G__32626,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32663.cljs$core$IFn$_invoke$arity$2 ? pred__32663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32664) : pred__32663.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32664)))){
return (new shadow.dom.Size(self__.w,G__32626,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32626),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32626){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32626,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32630){
var extmap__4419__auto__ = (function (){var G__32701 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32630,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32630)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32701);
} else {
return G__32701;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32630),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32630),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__33376 = (i + (1));
var G__33377 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33376;
ret = G__33377;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32728){
var vec__32729 = p__32728;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32729,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32729,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32739 = arguments.length;
switch (G__32739) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33379 = ps;
var G__33380 = (i + (1));
el__$1 = G__33379;
i = G__33380;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32756 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32756,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32756,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32756,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32760_33384 = cljs.core.seq(props);
var chunk__32761_33385 = null;
var count__32762_33386 = (0);
var i__32763_33387 = (0);
while(true){
if((i__32763_33387 < count__32762_33386)){
var vec__32787_33388 = chunk__32761_33385.cljs$core$IIndexed$_nth$arity$2(null,i__32763_33387);
var k_33389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32787_33388,(0),null);
var v_33390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32787_33388,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33389);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33389),v_33390);


var G__33391 = seq__32760_33384;
var G__33392 = chunk__32761_33385;
var G__33393 = count__32762_33386;
var G__33394 = (i__32763_33387 + (1));
seq__32760_33384 = G__33391;
chunk__32761_33385 = G__33392;
count__32762_33386 = G__33393;
i__32763_33387 = G__33394;
continue;
} else {
var temp__5735__auto___33395 = cljs.core.seq(seq__32760_33384);
if(temp__5735__auto___33395){
var seq__32760_33398__$1 = temp__5735__auto___33395;
if(cljs.core.chunked_seq_QMARK_(seq__32760_33398__$1)){
var c__4556__auto___33399 = cljs.core.chunk_first(seq__32760_33398__$1);
var G__33400 = cljs.core.chunk_rest(seq__32760_33398__$1);
var G__33401 = c__4556__auto___33399;
var G__33402 = cljs.core.count(c__4556__auto___33399);
var G__33403 = (0);
seq__32760_33384 = G__33400;
chunk__32761_33385 = G__33401;
count__32762_33386 = G__33402;
i__32763_33387 = G__33403;
continue;
} else {
var vec__32795_33406 = cljs.core.first(seq__32760_33398__$1);
var k_33407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32795_33406,(0),null);
var v_33408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32795_33406,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33407);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33407),v_33408);


var G__33412 = cljs.core.next(seq__32760_33398__$1);
var G__33413 = null;
var G__33414 = (0);
var G__33415 = (0);
seq__32760_33384 = G__33412;
chunk__32761_33385 = G__33413;
count__32762_33386 = G__33414;
i__32763_33387 = G__33415;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32805 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32805,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32805,(1),null);
var seq__32810_33422 = cljs.core.seq(node_children);
var chunk__32812_33423 = null;
var count__32813_33424 = (0);
var i__32814_33425 = (0);
while(true){
if((i__32814_33425 < count__32813_33424)){
var child_struct_33427 = chunk__32812_33423.cljs$core$IIndexed$_nth$arity$2(null,i__32814_33425);
if((!((child_struct_33427 == null)))){
if(typeof child_struct_33427 === 'string'){
var text_33433 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33433),child_struct_33427].join(''));
} else {
var children_33434 = shadow.dom.svg_node(child_struct_33427);
if(cljs.core.seq_QMARK_(children_33434)){
var seq__32867_33435 = cljs.core.seq(children_33434);
var chunk__32869_33436 = null;
var count__32870_33437 = (0);
var i__32871_33438 = (0);
while(true){
if((i__32871_33438 < count__32870_33437)){
var child_33439 = chunk__32869_33436.cljs$core$IIndexed$_nth$arity$2(null,i__32871_33438);
if(cljs.core.truth_(child_33439)){
node.appendChild(child_33439);


var G__33440 = seq__32867_33435;
var G__33441 = chunk__32869_33436;
var G__33442 = count__32870_33437;
var G__33443 = (i__32871_33438 + (1));
seq__32867_33435 = G__33440;
chunk__32869_33436 = G__33441;
count__32870_33437 = G__33442;
i__32871_33438 = G__33443;
continue;
} else {
var G__33444 = seq__32867_33435;
var G__33445 = chunk__32869_33436;
var G__33446 = count__32870_33437;
var G__33447 = (i__32871_33438 + (1));
seq__32867_33435 = G__33444;
chunk__32869_33436 = G__33445;
count__32870_33437 = G__33446;
i__32871_33438 = G__33447;
continue;
}
} else {
var temp__5735__auto___33450 = cljs.core.seq(seq__32867_33435);
if(temp__5735__auto___33450){
var seq__32867_33451__$1 = temp__5735__auto___33450;
if(cljs.core.chunked_seq_QMARK_(seq__32867_33451__$1)){
var c__4556__auto___33452 = cljs.core.chunk_first(seq__32867_33451__$1);
var G__33453 = cljs.core.chunk_rest(seq__32867_33451__$1);
var G__33454 = c__4556__auto___33452;
var G__33455 = cljs.core.count(c__4556__auto___33452);
var G__33456 = (0);
seq__32867_33435 = G__33453;
chunk__32869_33436 = G__33454;
count__32870_33437 = G__33455;
i__32871_33438 = G__33456;
continue;
} else {
var child_33461 = cljs.core.first(seq__32867_33451__$1);
if(cljs.core.truth_(child_33461)){
node.appendChild(child_33461);


var G__33462 = cljs.core.next(seq__32867_33451__$1);
var G__33463 = null;
var G__33464 = (0);
var G__33465 = (0);
seq__32867_33435 = G__33462;
chunk__32869_33436 = G__33463;
count__32870_33437 = G__33464;
i__32871_33438 = G__33465;
continue;
} else {
var G__33466 = cljs.core.next(seq__32867_33451__$1);
var G__33467 = null;
var G__33468 = (0);
var G__33469 = (0);
seq__32867_33435 = G__33466;
chunk__32869_33436 = G__33467;
count__32870_33437 = G__33468;
i__32871_33438 = G__33469;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33434);
}
}


var G__33470 = seq__32810_33422;
var G__33471 = chunk__32812_33423;
var G__33472 = count__32813_33424;
var G__33473 = (i__32814_33425 + (1));
seq__32810_33422 = G__33470;
chunk__32812_33423 = G__33471;
count__32813_33424 = G__33472;
i__32814_33425 = G__33473;
continue;
} else {
var G__33478 = seq__32810_33422;
var G__33479 = chunk__32812_33423;
var G__33480 = count__32813_33424;
var G__33481 = (i__32814_33425 + (1));
seq__32810_33422 = G__33478;
chunk__32812_33423 = G__33479;
count__32813_33424 = G__33480;
i__32814_33425 = G__33481;
continue;
}
} else {
var temp__5735__auto___33482 = cljs.core.seq(seq__32810_33422);
if(temp__5735__auto___33482){
var seq__32810_33483__$1 = temp__5735__auto___33482;
if(cljs.core.chunked_seq_QMARK_(seq__32810_33483__$1)){
var c__4556__auto___33484 = cljs.core.chunk_first(seq__32810_33483__$1);
var G__33485 = cljs.core.chunk_rest(seq__32810_33483__$1);
var G__33486 = c__4556__auto___33484;
var G__33487 = cljs.core.count(c__4556__auto___33484);
var G__33488 = (0);
seq__32810_33422 = G__33485;
chunk__32812_33423 = G__33486;
count__32813_33424 = G__33487;
i__32814_33425 = G__33488;
continue;
} else {
var child_struct_33492 = cljs.core.first(seq__32810_33483__$1);
if((!((child_struct_33492 == null)))){
if(typeof child_struct_33492 === 'string'){
var text_33493 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33493),child_struct_33492].join(''));
} else {
var children_33494 = shadow.dom.svg_node(child_struct_33492);
if(cljs.core.seq_QMARK_(children_33494)){
var seq__32884_33495 = cljs.core.seq(children_33494);
var chunk__32886_33496 = null;
var count__32887_33497 = (0);
var i__32888_33498 = (0);
while(true){
if((i__32888_33498 < count__32887_33497)){
var child_33499 = chunk__32886_33496.cljs$core$IIndexed$_nth$arity$2(null,i__32888_33498);
if(cljs.core.truth_(child_33499)){
node.appendChild(child_33499);


var G__33500 = seq__32884_33495;
var G__33501 = chunk__32886_33496;
var G__33502 = count__32887_33497;
var G__33503 = (i__32888_33498 + (1));
seq__32884_33495 = G__33500;
chunk__32886_33496 = G__33501;
count__32887_33497 = G__33502;
i__32888_33498 = G__33503;
continue;
} else {
var G__33504 = seq__32884_33495;
var G__33505 = chunk__32886_33496;
var G__33506 = count__32887_33497;
var G__33507 = (i__32888_33498 + (1));
seq__32884_33495 = G__33504;
chunk__32886_33496 = G__33505;
count__32887_33497 = G__33506;
i__32888_33498 = G__33507;
continue;
}
} else {
var temp__5735__auto___33508__$1 = cljs.core.seq(seq__32884_33495);
if(temp__5735__auto___33508__$1){
var seq__32884_33509__$1 = temp__5735__auto___33508__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32884_33509__$1)){
var c__4556__auto___33510 = cljs.core.chunk_first(seq__32884_33509__$1);
var G__33511 = cljs.core.chunk_rest(seq__32884_33509__$1);
var G__33512 = c__4556__auto___33510;
var G__33513 = cljs.core.count(c__4556__auto___33510);
var G__33514 = (0);
seq__32884_33495 = G__33511;
chunk__32886_33496 = G__33512;
count__32887_33497 = G__33513;
i__32888_33498 = G__33514;
continue;
} else {
var child_33515 = cljs.core.first(seq__32884_33509__$1);
if(cljs.core.truth_(child_33515)){
node.appendChild(child_33515);


var G__33516 = cljs.core.next(seq__32884_33509__$1);
var G__33517 = null;
var G__33518 = (0);
var G__33519 = (0);
seq__32884_33495 = G__33516;
chunk__32886_33496 = G__33517;
count__32887_33497 = G__33518;
i__32888_33498 = G__33519;
continue;
} else {
var G__33520 = cljs.core.next(seq__32884_33509__$1);
var G__33521 = null;
var G__33522 = (0);
var G__33523 = (0);
seq__32884_33495 = G__33520;
chunk__32886_33496 = G__33521;
count__32887_33497 = G__33522;
i__32888_33498 = G__33523;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33494);
}
}


var G__33525 = cljs.core.next(seq__32810_33483__$1);
var G__33526 = null;
var G__33527 = (0);
var G__33528 = (0);
seq__32810_33422 = G__33525;
chunk__32812_33423 = G__33526;
count__32813_33424 = G__33527;
i__32814_33425 = G__33528;
continue;
} else {
var G__33529 = cljs.core.next(seq__32810_33483__$1);
var G__33530 = null;
var G__33531 = (0);
var G__33532 = (0);
seq__32810_33422 = G__33529;
chunk__32812_33423 = G__33530;
count__32813_33424 = G__33531;
i__32814_33425 = G__33532;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33536 = arguments.length;
var i__4737__auto___33537 = (0);
while(true){
if((i__4737__auto___33537 < len__4736__auto___33536)){
args__4742__auto__.push((arguments[i__4737__auto___33537]));

var G__33538 = (i__4737__auto___33537 + (1));
i__4737__auto___33537 = G__33538;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32923){
var G__32924 = cljs.core.first(seq32923);
var seq32923__$1 = cljs.core.next(seq32923);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32924,seq32923__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__32938 = arguments.length;
switch (G__32938) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__26600__auto___33547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_32951){
var state_val_32952 = (state_32951[(1)]);
if((state_val_32952 === (1))){
var state_32951__$1 = state_32951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32951__$1,(2),once_or_cleanup);
} else {
if((state_val_32952 === (2))){
var inst_32947 = (state_32951[(2)]);
var inst_32949 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32951__$1 = (function (){var statearr_32957 = state_32951;
(statearr_32957[(7)] = inst_32947);

return statearr_32957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32951__$1,inst_32949);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__26516__auto__ = null;
var shadow$dom$state_machine__26516__auto____0 = (function (){
var statearr_32959 = [null,null,null,null,null,null,null,null];
(statearr_32959[(0)] = shadow$dom$state_machine__26516__auto__);

(statearr_32959[(1)] = (1));

return statearr_32959;
});
var shadow$dom$state_machine__26516__auto____1 = (function (state_32951){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_32951);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e32962){var ex__26519__auto__ = e32962;
var statearr_32963_33551 = state_32951;
(statearr_32963_33551[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_32951[(4)]))){
var statearr_32965_33552 = state_32951;
(statearr_32965_33552[(1)] = cljs.core.first((state_32951[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33553 = state_32951;
state_32951 = G__33553;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
shadow$dom$state_machine__26516__auto__ = function(state_32951){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__26516__auto____0.call(this);
case 1:
return shadow$dom$state_machine__26516__auto____1.call(this,state_32951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__26516__auto____0;
shadow$dom$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__26516__auto____1;
return shadow$dom$state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_32967 = f__26601__auto__();
(statearr_32967[(6)] = c__26600__auto___33547);

return statearr_32967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
