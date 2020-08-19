goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33624 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_33624(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33626 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_33626(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32541 = coll;
var G__32542 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32541,G__32542) : shadow.dom.lazy_native_coll_seq.call(null,G__32541,G__32542));
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
var G__32606 = arguments.length;
switch (G__32606) {
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
var G__32619 = arguments.length;
switch (G__32619) {
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
var G__32632 = arguments.length;
switch (G__32632) {
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
var G__32659 = arguments.length;
switch (G__32659) {
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
var G__32689 = arguments.length;
switch (G__32689) {
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
var G__32720 = arguments.length;
switch (G__32720) {
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
}catch (e32744){if((e32744 instanceof Object)){
var e = e32744;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32744;

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
var seq__32774 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32775 = null;
var count__32776 = (0);
var i__32777 = (0);
while(true){
if((i__32777 < count__32776)){
var el = chunk__32775.cljs$core$IIndexed$_nth$arity$2(null,i__32777);
var handler_33658__$1 = ((function (seq__32774,chunk__32775,count__32776,i__32777,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32774,chunk__32775,count__32776,i__32777,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33658__$1);


var G__33661 = seq__32774;
var G__33662 = chunk__32775;
var G__33663 = count__32776;
var G__33664 = (i__32777 + (1));
seq__32774 = G__33661;
chunk__32775 = G__33662;
count__32776 = G__33663;
i__32777 = G__33664;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32774);
if(temp__5735__auto__){
var seq__32774__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32774__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32774__$1);
var G__33666 = cljs.core.chunk_rest(seq__32774__$1);
var G__33667 = c__4556__auto__;
var G__33668 = cljs.core.count(c__4556__auto__);
var G__33669 = (0);
seq__32774 = G__33666;
chunk__32775 = G__33667;
count__32776 = G__33668;
i__32777 = G__33669;
continue;
} else {
var el = cljs.core.first(seq__32774__$1);
var handler_33671__$1 = ((function (seq__32774,chunk__32775,count__32776,i__32777,el,seq__32774__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32774,chunk__32775,count__32776,i__32777,el,seq__32774__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33671__$1);


var G__33672 = cljs.core.next(seq__32774__$1);
var G__33673 = null;
var G__33674 = (0);
var G__33675 = (0);
seq__32774 = G__33672;
chunk__32775 = G__33673;
count__32776 = G__33674;
i__32777 = G__33675;
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
var G__32830 = arguments.length;
switch (G__32830) {
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
var seq__32857 = cljs.core.seq(events);
var chunk__32858 = null;
var count__32859 = (0);
var i__32860 = (0);
while(true){
if((i__32860 < count__32859)){
var vec__32878 = chunk__32858.cljs$core$IIndexed$_nth$arity$2(null,i__32860);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32878,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32878,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33684 = seq__32857;
var G__33685 = chunk__32858;
var G__33686 = count__32859;
var G__33687 = (i__32860 + (1));
seq__32857 = G__33684;
chunk__32858 = G__33685;
count__32859 = G__33686;
i__32860 = G__33687;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32857);
if(temp__5735__auto__){
var seq__32857__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32857__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32857__$1);
var G__33689 = cljs.core.chunk_rest(seq__32857__$1);
var G__33690 = c__4556__auto__;
var G__33691 = cljs.core.count(c__4556__auto__);
var G__33692 = (0);
seq__32857 = G__33689;
chunk__32858 = G__33690;
count__32859 = G__33691;
i__32860 = G__33692;
continue;
} else {
var vec__32884 = cljs.core.first(seq__32857__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32884,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32884,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33694 = cljs.core.next(seq__32857__$1);
var G__33695 = null;
var G__33696 = (0);
var G__33697 = (0);
seq__32857 = G__33694;
chunk__32858 = G__33695;
count__32859 = G__33696;
i__32860 = G__33697;
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
var seq__32888 = cljs.core.seq(styles);
var chunk__32889 = null;
var count__32890 = (0);
var i__32891 = (0);
while(true){
if((i__32891 < count__32890)){
var vec__32901 = chunk__32889.cljs$core$IIndexed$_nth$arity$2(null,i__32891);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32901,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32901,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33700 = seq__32888;
var G__33701 = chunk__32889;
var G__33702 = count__32890;
var G__33703 = (i__32891 + (1));
seq__32888 = G__33700;
chunk__32889 = G__33701;
count__32890 = G__33702;
i__32891 = G__33703;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32888);
if(temp__5735__auto__){
var seq__32888__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32888__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32888__$1);
var G__33707 = cljs.core.chunk_rest(seq__32888__$1);
var G__33708 = c__4556__auto__;
var G__33709 = cljs.core.count(c__4556__auto__);
var G__33710 = (0);
seq__32888 = G__33707;
chunk__32889 = G__33708;
count__32890 = G__33709;
i__32891 = G__33710;
continue;
} else {
var vec__32907 = cljs.core.first(seq__32888__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32907,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33715 = cljs.core.next(seq__32888__$1);
var G__33716 = null;
var G__33717 = (0);
var G__33718 = (0);
seq__32888 = G__33715;
chunk__32889 = G__33716;
count__32890 = G__33717;
i__32891 = G__33718;
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
var G__32918_33721 = key;
var G__32918_33722__$1 = (((G__32918_33721 instanceof cljs.core.Keyword))?G__32918_33721.fqn:null);
switch (G__32918_33722__$1) {
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
var ks_33733 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33733,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33733,"aria-");
}
})())){
el.setAttribute(ks_33733,value);
} else {
(el[ks_33733] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32956){
var map__32958 = p__32956;
var map__32958__$1 = (((((!((map__32958 == null))))?(((((map__32958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32958):map__32958);
var props = map__32958__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32958__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32963 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32963,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32963,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32963,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32968 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32968,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32968;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32970 = arguments.length;
switch (G__32970) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32979){
var vec__32982 = p__32979;
var seq__32983 = cljs.core.seq(vec__32982);
var first__32984 = cljs.core.first(seq__32983);
var seq__32983__$1 = cljs.core.next(seq__32983);
var nn = first__32984;
var first__32984__$1 = cljs.core.first(seq__32983__$1);
var seq__32983__$2 = cljs.core.next(seq__32983__$1);
var np = first__32984__$1;
var nc = seq__32983__$2;
var node = vec__32982;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32988 = nn;
var G__32989 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32988,G__32989) : create_fn.call(null,G__32988,G__32989));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32992 = nn;
var G__32993 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32992,G__32993) : create_fn.call(null,G__32992,G__32993));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33001 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33001,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33001,(1),null);
var seq__33006_33778 = cljs.core.seq(node_children);
var chunk__33007_33779 = null;
var count__33008_33780 = (0);
var i__33009_33781 = (0);
while(true){
if((i__33009_33781 < count__33008_33780)){
var child_struct_33783 = chunk__33007_33779.cljs$core$IIndexed$_nth$arity$2(null,i__33009_33781);
var children_33785 = shadow.dom.dom_node(child_struct_33783);
if(cljs.core.seq_QMARK_(children_33785)){
var seq__33057_33787 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33785));
var chunk__33059_33788 = null;
var count__33060_33789 = (0);
var i__33061_33790 = (0);
while(true){
if((i__33061_33790 < count__33060_33789)){
var child_33792 = chunk__33059_33788.cljs$core$IIndexed$_nth$arity$2(null,i__33061_33790);
if(cljs.core.truth_(child_33792)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33792);


var G__33794 = seq__33057_33787;
var G__33795 = chunk__33059_33788;
var G__33796 = count__33060_33789;
var G__33797 = (i__33061_33790 + (1));
seq__33057_33787 = G__33794;
chunk__33059_33788 = G__33795;
count__33060_33789 = G__33796;
i__33061_33790 = G__33797;
continue;
} else {
var G__33798 = seq__33057_33787;
var G__33799 = chunk__33059_33788;
var G__33800 = count__33060_33789;
var G__33801 = (i__33061_33790 + (1));
seq__33057_33787 = G__33798;
chunk__33059_33788 = G__33799;
count__33060_33789 = G__33800;
i__33061_33790 = G__33801;
continue;
}
} else {
var temp__5735__auto___33803 = cljs.core.seq(seq__33057_33787);
if(temp__5735__auto___33803){
var seq__33057_33804__$1 = temp__5735__auto___33803;
if(cljs.core.chunked_seq_QMARK_(seq__33057_33804__$1)){
var c__4556__auto___33806 = cljs.core.chunk_first(seq__33057_33804__$1);
var G__33807 = cljs.core.chunk_rest(seq__33057_33804__$1);
var G__33808 = c__4556__auto___33806;
var G__33809 = cljs.core.count(c__4556__auto___33806);
var G__33810 = (0);
seq__33057_33787 = G__33807;
chunk__33059_33788 = G__33808;
count__33060_33789 = G__33809;
i__33061_33790 = G__33810;
continue;
} else {
var child_33811 = cljs.core.first(seq__33057_33804__$1);
if(cljs.core.truth_(child_33811)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33811);


var G__33814 = cljs.core.next(seq__33057_33804__$1);
var G__33815 = null;
var G__33816 = (0);
var G__33817 = (0);
seq__33057_33787 = G__33814;
chunk__33059_33788 = G__33815;
count__33060_33789 = G__33816;
i__33061_33790 = G__33817;
continue;
} else {
var G__33818 = cljs.core.next(seq__33057_33804__$1);
var G__33819 = null;
var G__33820 = (0);
var G__33821 = (0);
seq__33057_33787 = G__33818;
chunk__33059_33788 = G__33819;
count__33060_33789 = G__33820;
i__33061_33790 = G__33821;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33785);
}


var G__33823 = seq__33006_33778;
var G__33824 = chunk__33007_33779;
var G__33825 = count__33008_33780;
var G__33826 = (i__33009_33781 + (1));
seq__33006_33778 = G__33823;
chunk__33007_33779 = G__33824;
count__33008_33780 = G__33825;
i__33009_33781 = G__33826;
continue;
} else {
var temp__5735__auto___33829 = cljs.core.seq(seq__33006_33778);
if(temp__5735__auto___33829){
var seq__33006_33830__$1 = temp__5735__auto___33829;
if(cljs.core.chunked_seq_QMARK_(seq__33006_33830__$1)){
var c__4556__auto___33831 = cljs.core.chunk_first(seq__33006_33830__$1);
var G__33832 = cljs.core.chunk_rest(seq__33006_33830__$1);
var G__33833 = c__4556__auto___33831;
var G__33834 = cljs.core.count(c__4556__auto___33831);
var G__33835 = (0);
seq__33006_33778 = G__33832;
chunk__33007_33779 = G__33833;
count__33008_33780 = G__33834;
i__33009_33781 = G__33835;
continue;
} else {
var child_struct_33838 = cljs.core.first(seq__33006_33830__$1);
var children_33839 = shadow.dom.dom_node(child_struct_33838);
if(cljs.core.seq_QMARK_(children_33839)){
var seq__33078_33841 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33839));
var chunk__33080_33842 = null;
var count__33081_33843 = (0);
var i__33082_33844 = (0);
while(true){
if((i__33082_33844 < count__33081_33843)){
var child_33846 = chunk__33080_33842.cljs$core$IIndexed$_nth$arity$2(null,i__33082_33844);
if(cljs.core.truth_(child_33846)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33846);


var G__33847 = seq__33078_33841;
var G__33848 = chunk__33080_33842;
var G__33849 = count__33081_33843;
var G__33850 = (i__33082_33844 + (1));
seq__33078_33841 = G__33847;
chunk__33080_33842 = G__33848;
count__33081_33843 = G__33849;
i__33082_33844 = G__33850;
continue;
} else {
var G__33851 = seq__33078_33841;
var G__33852 = chunk__33080_33842;
var G__33853 = count__33081_33843;
var G__33854 = (i__33082_33844 + (1));
seq__33078_33841 = G__33851;
chunk__33080_33842 = G__33852;
count__33081_33843 = G__33853;
i__33082_33844 = G__33854;
continue;
}
} else {
var temp__5735__auto___33856__$1 = cljs.core.seq(seq__33078_33841);
if(temp__5735__auto___33856__$1){
var seq__33078_33857__$1 = temp__5735__auto___33856__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33078_33857__$1)){
var c__4556__auto___33859 = cljs.core.chunk_first(seq__33078_33857__$1);
var G__33860 = cljs.core.chunk_rest(seq__33078_33857__$1);
var G__33861 = c__4556__auto___33859;
var G__33862 = cljs.core.count(c__4556__auto___33859);
var G__33863 = (0);
seq__33078_33841 = G__33860;
chunk__33080_33842 = G__33861;
count__33081_33843 = G__33862;
i__33082_33844 = G__33863;
continue;
} else {
var child_33865 = cljs.core.first(seq__33078_33857__$1);
if(cljs.core.truth_(child_33865)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33865);


var G__33866 = cljs.core.next(seq__33078_33857__$1);
var G__33867 = null;
var G__33868 = (0);
var G__33869 = (0);
seq__33078_33841 = G__33866;
chunk__33080_33842 = G__33867;
count__33081_33843 = G__33868;
i__33082_33844 = G__33869;
continue;
} else {
var G__33871 = cljs.core.next(seq__33078_33857__$1);
var G__33872 = null;
var G__33873 = (0);
var G__33874 = (0);
seq__33078_33841 = G__33871;
chunk__33080_33842 = G__33872;
count__33081_33843 = G__33873;
i__33082_33844 = G__33874;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33839);
}


var G__33876 = cljs.core.next(seq__33006_33830__$1);
var G__33877 = null;
var G__33878 = (0);
var G__33879 = (0);
seq__33006_33778 = G__33876;
chunk__33007_33779 = G__33877;
count__33008_33780 = G__33878;
i__33009_33781 = G__33879;
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
var seq__33120 = cljs.core.seq(node);
var chunk__33121 = null;
var count__33122 = (0);
var i__33123 = (0);
while(true){
if((i__33123 < count__33122)){
var n = chunk__33121.cljs$core$IIndexed$_nth$arity$2(null,i__33123);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33885 = seq__33120;
var G__33886 = chunk__33121;
var G__33887 = count__33122;
var G__33888 = (i__33123 + (1));
seq__33120 = G__33885;
chunk__33121 = G__33886;
count__33122 = G__33887;
i__33123 = G__33888;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33120);
if(temp__5735__auto__){
var seq__33120__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33120__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33120__$1);
var G__33891 = cljs.core.chunk_rest(seq__33120__$1);
var G__33892 = c__4556__auto__;
var G__33893 = cljs.core.count(c__4556__auto__);
var G__33894 = (0);
seq__33120 = G__33891;
chunk__33121 = G__33892;
count__33122 = G__33893;
i__33123 = G__33894;
continue;
} else {
var n = cljs.core.first(seq__33120__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33899 = cljs.core.next(seq__33120__$1);
var G__33900 = null;
var G__33901 = (0);
var G__33902 = (0);
seq__33120 = G__33899;
chunk__33121 = G__33900;
count__33122 = G__33901;
i__33123 = G__33902;
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
var G__33147 = arguments.length;
switch (G__33147) {
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
var G__33162 = arguments.length;
switch (G__33162) {
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
var G__33187 = arguments.length;
switch (G__33187) {
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
var len__4736__auto___33920 = arguments.length;
var i__4737__auto___33921 = (0);
while(true){
if((i__4737__auto___33921 < len__4736__auto___33920)){
args__4742__auto__.push((arguments[i__4737__auto___33921]));

var G__33922 = (i__4737__auto___33921 + (1));
i__4737__auto___33921 = G__33922;
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
var seq__33215_33923 = cljs.core.seq(nodes);
var chunk__33216_33924 = null;
var count__33217_33925 = (0);
var i__33218_33926 = (0);
while(true){
if((i__33218_33926 < count__33217_33925)){
var node_33927 = chunk__33216_33924.cljs$core$IIndexed$_nth$arity$2(null,i__33218_33926);
fragment.appendChild(shadow.dom._to_dom(node_33927));


var G__33928 = seq__33215_33923;
var G__33929 = chunk__33216_33924;
var G__33930 = count__33217_33925;
var G__33931 = (i__33218_33926 + (1));
seq__33215_33923 = G__33928;
chunk__33216_33924 = G__33929;
count__33217_33925 = G__33930;
i__33218_33926 = G__33931;
continue;
} else {
var temp__5735__auto___33932 = cljs.core.seq(seq__33215_33923);
if(temp__5735__auto___33932){
var seq__33215_33933__$1 = temp__5735__auto___33932;
if(cljs.core.chunked_seq_QMARK_(seq__33215_33933__$1)){
var c__4556__auto___33934 = cljs.core.chunk_first(seq__33215_33933__$1);
var G__33935 = cljs.core.chunk_rest(seq__33215_33933__$1);
var G__33936 = c__4556__auto___33934;
var G__33937 = cljs.core.count(c__4556__auto___33934);
var G__33938 = (0);
seq__33215_33923 = G__33935;
chunk__33216_33924 = G__33936;
count__33217_33925 = G__33937;
i__33218_33926 = G__33938;
continue;
} else {
var node_33942 = cljs.core.first(seq__33215_33933__$1);
fragment.appendChild(shadow.dom._to_dom(node_33942));


var G__33943 = cljs.core.next(seq__33215_33933__$1);
var G__33944 = null;
var G__33945 = (0);
var G__33946 = (0);
seq__33215_33923 = G__33943;
chunk__33216_33924 = G__33944;
count__33217_33925 = G__33945;
i__33218_33926 = G__33946;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33213){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33213));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33223_33947 = cljs.core.seq(scripts);
var chunk__33224_33948 = null;
var count__33225_33949 = (0);
var i__33226_33950 = (0);
while(true){
if((i__33226_33950 < count__33225_33949)){
var vec__33237_33951 = chunk__33224_33948.cljs$core$IIndexed$_nth$arity$2(null,i__33226_33950);
var script_tag_33952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33237_33951,(0),null);
var script_body_33953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33237_33951,(1),null);
eval(script_body_33953);


var G__33954 = seq__33223_33947;
var G__33955 = chunk__33224_33948;
var G__33956 = count__33225_33949;
var G__33957 = (i__33226_33950 + (1));
seq__33223_33947 = G__33954;
chunk__33224_33948 = G__33955;
count__33225_33949 = G__33956;
i__33226_33950 = G__33957;
continue;
} else {
var temp__5735__auto___33958 = cljs.core.seq(seq__33223_33947);
if(temp__5735__auto___33958){
var seq__33223_33959__$1 = temp__5735__auto___33958;
if(cljs.core.chunked_seq_QMARK_(seq__33223_33959__$1)){
var c__4556__auto___33960 = cljs.core.chunk_first(seq__33223_33959__$1);
var G__33961 = cljs.core.chunk_rest(seq__33223_33959__$1);
var G__33962 = c__4556__auto___33960;
var G__33963 = cljs.core.count(c__4556__auto___33960);
var G__33964 = (0);
seq__33223_33947 = G__33961;
chunk__33224_33948 = G__33962;
count__33225_33949 = G__33963;
i__33226_33950 = G__33964;
continue;
} else {
var vec__33242_33965 = cljs.core.first(seq__33223_33959__$1);
var script_tag_33966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33242_33965,(0),null);
var script_body_33967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33242_33965,(1),null);
eval(script_body_33967);


var G__33968 = cljs.core.next(seq__33223_33959__$1);
var G__33969 = null;
var G__33970 = (0);
var G__33971 = (0);
seq__33223_33947 = G__33968;
chunk__33224_33948 = G__33969;
count__33225_33949 = G__33970;
i__33226_33950 = G__33971;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33246){
var vec__33247 = p__33246;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33247,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33247,(1),null);
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
var G__33254 = arguments.length;
switch (G__33254) {
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
var seq__33268 = cljs.core.seq(style_keys);
var chunk__33269 = null;
var count__33270 = (0);
var i__33271 = (0);
while(true){
if((i__33271 < count__33270)){
var it = chunk__33269.cljs$core$IIndexed$_nth$arity$2(null,i__33271);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33983 = seq__33268;
var G__33984 = chunk__33269;
var G__33985 = count__33270;
var G__33986 = (i__33271 + (1));
seq__33268 = G__33983;
chunk__33269 = G__33984;
count__33270 = G__33985;
i__33271 = G__33986;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33268);
if(temp__5735__auto__){
var seq__33268__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33268__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33268__$1);
var G__33987 = cljs.core.chunk_rest(seq__33268__$1);
var G__33988 = c__4556__auto__;
var G__33989 = cljs.core.count(c__4556__auto__);
var G__33990 = (0);
seq__33268 = G__33987;
chunk__33269 = G__33988;
count__33270 = G__33989;
i__33271 = G__33990;
continue;
} else {
var it = cljs.core.first(seq__33268__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33995 = cljs.core.next(seq__33268__$1);
var G__33996 = null;
var G__33997 = (0);
var G__33998 = (0);
seq__33268 = G__33995;
chunk__33269 = G__33996;
count__33270 = G__33997;
i__33271 = G__33998;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33283,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33295 = k33283;
var G__33295__$1 = (((G__33295 instanceof cljs.core.Keyword))?G__33295.fqn:null);
switch (G__33295__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33283,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33304){
var vec__33305 = p__33304;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33305,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33305,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33282){
var self__ = this;
var G__33282__$1 = this;
return (new cljs.core.RecordIter((0),G__33282__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33284,other33285){
var self__ = this;
var this33284__$1 = this;
return (((!((other33285 == null)))) && ((this33284__$1.constructor === other33285.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33284__$1.x,other33285.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33284__$1.y,other33285.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33284__$1.__extmap,other33285.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33282){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33368 = cljs.core.keyword_identical_QMARK_;
var expr__33369 = k__4388__auto__;
if(cljs.core.truth_((pred__33368.cljs$core$IFn$_invoke$arity$2 ? pred__33368.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33369) : pred__33368.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33369)))){
return (new shadow.dom.Coordinate(G__33282,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33368.cljs$core$IFn$_invoke$arity$2 ? pred__33368.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33369) : pred__33368.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33369)))){
return (new shadow.dom.Coordinate(self__.x,G__33282,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33282),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33282){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33282,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33287){
var extmap__4419__auto__ = (function (){var G__33392 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33287,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33287)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33392);
} else {
return G__33392;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33287),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33287),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33407,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33416 = k33407;
var G__33416__$1 = (((G__33416 instanceof cljs.core.Keyword))?G__33416.fqn:null);
switch (G__33416__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33407,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33419){
var vec__33421 = p__33419;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33421,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33421,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33406){
var self__ = this;
var G__33406__$1 = this;
return (new cljs.core.RecordIter((0),G__33406__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33408,other33409){
var self__ = this;
var this33408__$1 = this;
return (((!((other33409 == null)))) && ((this33408__$1.constructor === other33409.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33408__$1.w,other33409.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33408__$1.h,other33409.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33408__$1.__extmap,other33409.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33406){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33443 = cljs.core.keyword_identical_QMARK_;
var expr__33444 = k__4388__auto__;
if(cljs.core.truth_((pred__33443.cljs$core$IFn$_invoke$arity$2 ? pred__33443.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33444) : pred__33443.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33444)))){
return (new shadow.dom.Size(G__33406,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33443.cljs$core$IFn$_invoke$arity$2 ? pred__33443.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33444) : pred__33443.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33444)))){
return (new shadow.dom.Size(self__.w,G__33406,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33406),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33406){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33406,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33410){
var extmap__4419__auto__ = (function (){var G__33456 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33410,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33410)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33456);
} else {
return G__33456;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33410),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33410),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__34047 = (i + (1));
var G__34048 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34047;
ret = G__34048;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33481){
var vec__33482 = p__33481;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33482,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33482,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33488 = arguments.length;
switch (G__33488) {
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
var G__34053 = ps;
var G__34054 = (i + (1));
el__$1 = G__34053;
i = G__34054;
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
var vec__33512 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33512,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33512,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33512,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33515_34055 = cljs.core.seq(props);
var chunk__33516_34056 = null;
var count__33517_34057 = (0);
var i__33518_34058 = (0);
while(true){
if((i__33518_34058 < count__33517_34057)){
var vec__33531_34059 = chunk__33516_34056.cljs$core$IIndexed$_nth$arity$2(null,i__33518_34058);
var k_34060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33531_34059,(0),null);
var v_34061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33531_34059,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34060);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34060),v_34061);


var G__34062 = seq__33515_34055;
var G__34063 = chunk__33516_34056;
var G__34064 = count__33517_34057;
var G__34065 = (i__33518_34058 + (1));
seq__33515_34055 = G__34062;
chunk__33516_34056 = G__34063;
count__33517_34057 = G__34064;
i__33518_34058 = G__34065;
continue;
} else {
var temp__5735__auto___34066 = cljs.core.seq(seq__33515_34055);
if(temp__5735__auto___34066){
var seq__33515_34067__$1 = temp__5735__auto___34066;
if(cljs.core.chunked_seq_QMARK_(seq__33515_34067__$1)){
var c__4556__auto___34068 = cljs.core.chunk_first(seq__33515_34067__$1);
var G__34069 = cljs.core.chunk_rest(seq__33515_34067__$1);
var G__34070 = c__4556__auto___34068;
var G__34071 = cljs.core.count(c__4556__auto___34068);
var G__34072 = (0);
seq__33515_34055 = G__34069;
chunk__33516_34056 = G__34070;
count__33517_34057 = G__34071;
i__33518_34058 = G__34072;
continue;
} else {
var vec__33537_34073 = cljs.core.first(seq__33515_34067__$1);
var k_34074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33537_34073,(0),null);
var v_34075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33537_34073,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34074);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34074),v_34075);


var G__34076 = cljs.core.next(seq__33515_34067__$1);
var G__34077 = null;
var G__34078 = (0);
var G__34079 = (0);
seq__33515_34055 = G__34076;
chunk__33516_34056 = G__34077;
count__33517_34057 = G__34078;
i__33518_34058 = G__34079;
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
var vec__33544 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33544,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33544,(1),null);
var seq__33548_34082 = cljs.core.seq(node_children);
var chunk__33550_34083 = null;
var count__33551_34084 = (0);
var i__33552_34085 = (0);
while(true){
if((i__33552_34085 < count__33551_34084)){
var child_struct_34086 = chunk__33550_34083.cljs$core$IIndexed$_nth$arity$2(null,i__33552_34085);
if((!((child_struct_34086 == null)))){
if(typeof child_struct_34086 === 'string'){
var text_34087 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34087),child_struct_34086].join(''));
} else {
var children_34088 = shadow.dom.svg_node(child_struct_34086);
if(cljs.core.seq_QMARK_(children_34088)){
var seq__33581_34089 = cljs.core.seq(children_34088);
var chunk__33583_34090 = null;
var count__33584_34091 = (0);
var i__33585_34092 = (0);
while(true){
if((i__33585_34092 < count__33584_34091)){
var child_34093 = chunk__33583_34090.cljs$core$IIndexed$_nth$arity$2(null,i__33585_34092);
if(cljs.core.truth_(child_34093)){
node.appendChild(child_34093);


var G__34094 = seq__33581_34089;
var G__34095 = chunk__33583_34090;
var G__34096 = count__33584_34091;
var G__34097 = (i__33585_34092 + (1));
seq__33581_34089 = G__34094;
chunk__33583_34090 = G__34095;
count__33584_34091 = G__34096;
i__33585_34092 = G__34097;
continue;
} else {
var G__34098 = seq__33581_34089;
var G__34099 = chunk__33583_34090;
var G__34100 = count__33584_34091;
var G__34101 = (i__33585_34092 + (1));
seq__33581_34089 = G__34098;
chunk__33583_34090 = G__34099;
count__33584_34091 = G__34100;
i__33585_34092 = G__34101;
continue;
}
} else {
var temp__5735__auto___34102 = cljs.core.seq(seq__33581_34089);
if(temp__5735__auto___34102){
var seq__33581_34103__$1 = temp__5735__auto___34102;
if(cljs.core.chunked_seq_QMARK_(seq__33581_34103__$1)){
var c__4556__auto___34104 = cljs.core.chunk_first(seq__33581_34103__$1);
var G__34105 = cljs.core.chunk_rest(seq__33581_34103__$1);
var G__34106 = c__4556__auto___34104;
var G__34107 = cljs.core.count(c__4556__auto___34104);
var G__34108 = (0);
seq__33581_34089 = G__34105;
chunk__33583_34090 = G__34106;
count__33584_34091 = G__34107;
i__33585_34092 = G__34108;
continue;
} else {
var child_34109 = cljs.core.first(seq__33581_34103__$1);
if(cljs.core.truth_(child_34109)){
node.appendChild(child_34109);


var G__34110 = cljs.core.next(seq__33581_34103__$1);
var G__34111 = null;
var G__34112 = (0);
var G__34113 = (0);
seq__33581_34089 = G__34110;
chunk__33583_34090 = G__34111;
count__33584_34091 = G__34112;
i__33585_34092 = G__34113;
continue;
} else {
var G__34114 = cljs.core.next(seq__33581_34103__$1);
var G__34115 = null;
var G__34116 = (0);
var G__34117 = (0);
seq__33581_34089 = G__34114;
chunk__33583_34090 = G__34115;
count__33584_34091 = G__34116;
i__33585_34092 = G__34117;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34088);
}
}


var G__34118 = seq__33548_34082;
var G__34119 = chunk__33550_34083;
var G__34120 = count__33551_34084;
var G__34121 = (i__33552_34085 + (1));
seq__33548_34082 = G__34118;
chunk__33550_34083 = G__34119;
count__33551_34084 = G__34120;
i__33552_34085 = G__34121;
continue;
} else {
var G__34122 = seq__33548_34082;
var G__34123 = chunk__33550_34083;
var G__34124 = count__33551_34084;
var G__34125 = (i__33552_34085 + (1));
seq__33548_34082 = G__34122;
chunk__33550_34083 = G__34123;
count__33551_34084 = G__34124;
i__33552_34085 = G__34125;
continue;
}
} else {
var temp__5735__auto___34126 = cljs.core.seq(seq__33548_34082);
if(temp__5735__auto___34126){
var seq__33548_34127__$1 = temp__5735__auto___34126;
if(cljs.core.chunked_seq_QMARK_(seq__33548_34127__$1)){
var c__4556__auto___34128 = cljs.core.chunk_first(seq__33548_34127__$1);
var G__34129 = cljs.core.chunk_rest(seq__33548_34127__$1);
var G__34130 = c__4556__auto___34128;
var G__34131 = cljs.core.count(c__4556__auto___34128);
var G__34132 = (0);
seq__33548_34082 = G__34129;
chunk__33550_34083 = G__34130;
count__33551_34084 = G__34131;
i__33552_34085 = G__34132;
continue;
} else {
var child_struct_34133 = cljs.core.first(seq__33548_34127__$1);
if((!((child_struct_34133 == null)))){
if(typeof child_struct_34133 === 'string'){
var text_34134 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34134),child_struct_34133].join(''));
} else {
var children_34135 = shadow.dom.svg_node(child_struct_34133);
if(cljs.core.seq_QMARK_(children_34135)){
var seq__33587_34136 = cljs.core.seq(children_34135);
var chunk__33589_34137 = null;
var count__33590_34138 = (0);
var i__33591_34139 = (0);
while(true){
if((i__33591_34139 < count__33590_34138)){
var child_34140 = chunk__33589_34137.cljs$core$IIndexed$_nth$arity$2(null,i__33591_34139);
if(cljs.core.truth_(child_34140)){
node.appendChild(child_34140);


var G__34141 = seq__33587_34136;
var G__34142 = chunk__33589_34137;
var G__34143 = count__33590_34138;
var G__34144 = (i__33591_34139 + (1));
seq__33587_34136 = G__34141;
chunk__33589_34137 = G__34142;
count__33590_34138 = G__34143;
i__33591_34139 = G__34144;
continue;
} else {
var G__34145 = seq__33587_34136;
var G__34146 = chunk__33589_34137;
var G__34147 = count__33590_34138;
var G__34148 = (i__33591_34139 + (1));
seq__33587_34136 = G__34145;
chunk__33589_34137 = G__34146;
count__33590_34138 = G__34147;
i__33591_34139 = G__34148;
continue;
}
} else {
var temp__5735__auto___34149__$1 = cljs.core.seq(seq__33587_34136);
if(temp__5735__auto___34149__$1){
var seq__33587_34150__$1 = temp__5735__auto___34149__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33587_34150__$1)){
var c__4556__auto___34151 = cljs.core.chunk_first(seq__33587_34150__$1);
var G__34152 = cljs.core.chunk_rest(seq__33587_34150__$1);
var G__34153 = c__4556__auto___34151;
var G__34154 = cljs.core.count(c__4556__auto___34151);
var G__34155 = (0);
seq__33587_34136 = G__34152;
chunk__33589_34137 = G__34153;
count__33590_34138 = G__34154;
i__33591_34139 = G__34155;
continue;
} else {
var child_34156 = cljs.core.first(seq__33587_34150__$1);
if(cljs.core.truth_(child_34156)){
node.appendChild(child_34156);


var G__34157 = cljs.core.next(seq__33587_34150__$1);
var G__34158 = null;
var G__34159 = (0);
var G__34160 = (0);
seq__33587_34136 = G__34157;
chunk__33589_34137 = G__34158;
count__33590_34138 = G__34159;
i__33591_34139 = G__34160;
continue;
} else {
var G__34161 = cljs.core.next(seq__33587_34150__$1);
var G__34162 = null;
var G__34163 = (0);
var G__34164 = (0);
seq__33587_34136 = G__34161;
chunk__33589_34137 = G__34162;
count__33590_34138 = G__34163;
i__33591_34139 = G__34164;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34135);
}
}


var G__34165 = cljs.core.next(seq__33548_34127__$1);
var G__34166 = null;
var G__34167 = (0);
var G__34168 = (0);
seq__33548_34082 = G__34165;
chunk__33550_34083 = G__34166;
count__33551_34084 = G__34167;
i__33552_34085 = G__34168;
continue;
} else {
var G__34169 = cljs.core.next(seq__33548_34127__$1);
var G__34170 = null;
var G__34171 = (0);
var G__34172 = (0);
seq__33548_34082 = G__34169;
chunk__33550_34083 = G__34170;
count__33551_34084 = G__34171;
i__33552_34085 = G__34172;
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
var len__4736__auto___34174 = arguments.length;
var i__4737__auto___34175 = (0);
while(true){
if((i__4737__auto___34175 < len__4736__auto___34174)){
args__4742__auto__.push((arguments[i__4737__auto___34175]));

var G__34176 = (i__4737__auto___34175 + (1));
i__4737__auto___34175 = G__34176;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33593){
var G__33594 = cljs.core.first(seq33593);
var seq33593__$1 = cljs.core.next(seq33593);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33594,seq33593__$1);
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
var G__33597 = arguments.length;
switch (G__33597) {
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
var c__29446__auto___34204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_33611){
var state_val_33612 = (state_33611[(1)]);
if((state_val_33612 === (1))){
var state_33611__$1 = state_33611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33611__$1,(2),once_or_cleanup);
} else {
if((state_val_33612 === (2))){
var inst_33608 = (state_33611[(2)]);
var inst_33609 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33611__$1 = (function (){var statearr_33615 = state_33611;
(statearr_33615[(7)] = inst_33608);

return statearr_33615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33611__$1,inst_33609);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29295__auto__ = null;
var shadow$dom$state_machine__29295__auto____0 = (function (){
var statearr_33616 = [null,null,null,null,null,null,null,null];
(statearr_33616[(0)] = shadow$dom$state_machine__29295__auto__);

(statearr_33616[(1)] = (1));

return statearr_33616;
});
var shadow$dom$state_machine__29295__auto____1 = (function (state_33611){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_33611);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e33618){var ex__29298__auto__ = e33618;
var statearr_33620_34210 = state_33611;
(statearr_33620_34210[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_33611[(4)]))){
var statearr_33621_34211 = state_33611;
(statearr_33621_34211[(1)] = cljs.core.first((state_33611[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34213 = state_33611;
state_33611 = G__34213;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
shadow$dom$state_machine__29295__auto__ = function(state_33611){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29295__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29295__auto____1.call(this,state_33611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29295__auto____0;
shadow$dom$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29295__auto____1;
return shadow$dom$state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_33623 = f__29447__auto__();
(statearr_33623[(6)] = c__29446__auto___34204);

return statearr_33623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
