goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29552 = arguments.length;
switch (G__29552) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29560 = (function (f,blockable,meta29561){
this.f = f;
this.blockable = blockable;
this.meta29561 = meta29561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29562,meta29561__$1){
var self__ = this;
var _29562__$1 = this;
return (new cljs.core.async.t_cljs$core$async29560(self__.f,self__.blockable,meta29561__$1));
}));

(cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29562){
var self__ = this;
var _29562__$1 = this;
return self__.meta29561;
}));

(cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29561","meta29561",-1127860791,null)], null);
}));

(cljs.core.async.t_cljs$core$async29560.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29560");

(cljs.core.async.t_cljs$core$async29560.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29560");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29560.
 */
cljs.core.async.__GT_t_cljs$core$async29560 = (function cljs$core$async$__GT_t_cljs$core$async29560(f__$1,blockable__$1,meta29561){
return (new cljs.core.async.t_cljs$core$async29560(f__$1,blockable__$1,meta29561));
});

}

return (new cljs.core.async.t_cljs$core$async29560(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29645 = arguments.length;
switch (G__29645) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29663 = arguments.length;
switch (G__29663) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29675 = arguments.length;
switch (G__29675) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32498 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32498) : fn1.call(null,val_32498));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32498) : fn1.call(null,val_32498));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29693 = arguments.length;
switch (G__29693) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32525 = n;
var x_32526 = (0);
while(true){
if((x_32526 < n__4613__auto___32525)){
(a[x_32526] = x_32526);

var G__32527 = (x_32526 + (1));
x_32526 = G__32527;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29723 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29723 = (function (flag,meta29724){
this.flag = flag;
this.meta29724 = meta29724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29725,meta29724__$1){
var self__ = this;
var _29725__$1 = this;
return (new cljs.core.async.t_cljs$core$async29723(self__.flag,meta29724__$1));
}));

(cljs.core.async.t_cljs$core$async29723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29725){
var self__ = this;
var _29725__$1 = this;
return self__.meta29724;
}));

(cljs.core.async.t_cljs$core$async29723.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29723.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29724","meta29724",31953865,null)], null);
}));

(cljs.core.async.t_cljs$core$async29723.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29723");

(cljs.core.async.t_cljs$core$async29723.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29723");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29723.
 */
cljs.core.async.__GT_t_cljs$core$async29723 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29723(flag__$1,meta29724){
return (new cljs.core.async.t_cljs$core$async29723(flag__$1,meta29724));
});

}

return (new cljs.core.async.t_cljs$core$async29723(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29734 = (function (flag,cb,meta29735){
this.flag = flag;
this.cb = cb;
this.meta29735 = meta29735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29736,meta29735__$1){
var self__ = this;
var _29736__$1 = this;
return (new cljs.core.async.t_cljs$core$async29734(self__.flag,self__.cb,meta29735__$1));
}));

(cljs.core.async.t_cljs$core$async29734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29736){
var self__ = this;
var _29736__$1 = this;
return self__.meta29735;
}));

(cljs.core.async.t_cljs$core$async29734.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29734.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29735","meta29735",39758980,null)], null);
}));

(cljs.core.async.t_cljs$core$async29734.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29734");

(cljs.core.async.t_cljs$core$async29734.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29734");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29734.
 */
cljs.core.async.__GT_t_cljs$core$async29734 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29734(flag__$1,cb__$1,meta29735){
return (new cljs.core.async.t_cljs$core$async29734(flag__$1,cb__$1,meta29735));
});

}

return (new cljs.core.async.t_cljs$core$async29734(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29751_SHARP_){
var G__29757 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29751_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29757) : fret.call(null,G__29757));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29752_SHARP_){
var G__29758 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29752_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29758) : fret.call(null,G__29758));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32543 = (i + (1));
i = G__32543;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32551 = arguments.length;
var i__4737__auto___32552 = (0);
while(true){
if((i__4737__auto___32552 < len__4736__auto___32551)){
args__4742__auto__.push((arguments[i__4737__auto___32552]));

var G__32559 = (i__4737__auto___32552 + (1));
i__4737__auto___32552 = G__32559;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29813){
var map__29814 = p__29813;
var map__29814__$1 = (((((!((map__29814 == null))))?(((((map__29814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29814):map__29814);
var opts = map__29814__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29802){
var G__29803 = cljs.core.first(seq29802);
var seq29802__$1 = cljs.core.next(seq29802);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29803,seq29802__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29826 = arguments.length;
switch (G__29826) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29446__auto___32575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_29906){
var state_val_29907 = (state_29906[(1)]);
if((state_val_29907 === (7))){
var inst_29896 = (state_29906[(2)]);
var state_29906__$1 = state_29906;
var statearr_29925_32578 = state_29906__$1;
(statearr_29925_32578[(2)] = inst_29896);

(statearr_29925_32578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (1))){
var state_29906__$1 = state_29906;
var statearr_29929_32579 = state_29906__$1;
(statearr_29929_32579[(2)] = null);

(statearr_29929_32579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (4))){
var inst_29854 = (state_29906[(7)]);
var inst_29854__$1 = (state_29906[(2)]);
var inst_29866 = (inst_29854__$1 == null);
var state_29906__$1 = (function (){var statearr_29939 = state_29906;
(statearr_29939[(7)] = inst_29854__$1);

return statearr_29939;
})();
if(cljs.core.truth_(inst_29866)){
var statearr_29943_32581 = state_29906__$1;
(statearr_29943_32581[(1)] = (5));

} else {
var statearr_29946_32583 = state_29906__$1;
(statearr_29946_32583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (13))){
var state_29906__$1 = state_29906;
var statearr_29952_32585 = state_29906__$1;
(statearr_29952_32585[(2)] = null);

(statearr_29952_32585[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (6))){
var inst_29854 = (state_29906[(7)]);
var state_29906__$1 = state_29906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29906__$1,(11),to,inst_29854);
} else {
if((state_val_29907 === (3))){
var inst_29902 = (state_29906[(2)]);
var state_29906__$1 = state_29906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29906__$1,inst_29902);
} else {
if((state_val_29907 === (12))){
var state_29906__$1 = state_29906;
var statearr_29964_32596 = state_29906__$1;
(statearr_29964_32596[(2)] = null);

(statearr_29964_32596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (2))){
var state_29906__$1 = state_29906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29906__$1,(4),from);
} else {
if((state_val_29907 === (11))){
var inst_29887 = (state_29906[(2)]);
var state_29906__$1 = state_29906;
if(cljs.core.truth_(inst_29887)){
var statearr_29975_32604 = state_29906__$1;
(statearr_29975_32604[(1)] = (12));

} else {
var statearr_29980_32605 = state_29906__$1;
(statearr_29980_32605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (9))){
var state_29906__$1 = state_29906;
var statearr_29982_32607 = state_29906__$1;
(statearr_29982_32607[(2)] = null);

(statearr_29982_32607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (5))){
var state_29906__$1 = state_29906;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29985_32609 = state_29906__$1;
(statearr_29985_32609[(1)] = (8));

} else {
var statearr_29988_32611 = state_29906__$1;
(statearr_29988_32611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (14))){
var inst_29893 = (state_29906[(2)]);
var state_29906__$1 = state_29906;
var statearr_29990_32614 = state_29906__$1;
(statearr_29990_32614[(2)] = inst_29893);

(statearr_29990_32614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (10))){
var inst_29883 = (state_29906[(2)]);
var state_29906__$1 = state_29906;
var statearr_29993_32615 = state_29906__$1;
(statearr_29993_32615[(2)] = inst_29883);

(statearr_29993_32615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (8))){
var inst_29871 = cljs.core.async.close_BANG_(to);
var state_29906__$1 = state_29906;
var statearr_29998_32616 = state_29906__$1;
(statearr_29998_32616[(2)] = inst_29871);

(statearr_29998_32616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29295__auto__ = null;
var cljs$core$async$state_machine__29295__auto____0 = (function (){
var statearr_30015 = [null,null,null,null,null,null,null,null];
(statearr_30015[(0)] = cljs$core$async$state_machine__29295__auto__);

(statearr_30015[(1)] = (1));

return statearr_30015;
});
var cljs$core$async$state_machine__29295__auto____1 = (function (state_29906){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_29906);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e30023){var ex__29298__auto__ = e30023;
var statearr_30025_32620 = state_29906;
(statearr_30025_32620[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_29906[(4)]))){
var statearr_30030_32625 = state_29906;
(statearr_30030_32625[(1)] = cljs.core.first((state_29906[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32626 = state_29906;
state_29906 = G__32626;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$state_machine__29295__auto__ = function(state_29906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29295__auto____1.call(this,state_29906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29295__auto____0;
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29295__auto____1;
return cljs$core$async$state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_30043 = f__29447__auto__();
(statearr_30043[(6)] = c__29446__auto___32575);

return statearr_30043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30078){
var vec__30079 = p__30078;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30079,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30079,(1),null);
var job = vec__30079;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29446__auto___32637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_30087){
var state_val_30088 = (state_30087[(1)]);
if((state_val_30088 === (1))){
var state_30087__$1 = state_30087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30087__$1,(2),res,v);
} else {
if((state_val_30088 === (2))){
var inst_30083 = (state_30087[(2)]);
var inst_30084 = cljs.core.async.close_BANG_(res);
var state_30087__$1 = (function (){var statearr_30094 = state_30087;
(statearr_30094[(7)] = inst_30083);

return statearr_30094;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30087__$1,inst_30084);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0 = (function (){
var statearr_30097 = [null,null,null,null,null,null,null,null];
(statearr_30097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__);

(statearr_30097[(1)] = (1));

return statearr_30097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1 = (function (state_30087){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_30087);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e30100){var ex__29298__auto__ = e30100;
var statearr_30101_32653 = state_30087;
(statearr_30101_32653[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_30087[(4)]))){
var statearr_30102_32654 = state_30087;
(statearr_30102_32654[(1)] = cljs.core.first((state_30087[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32657 = state_30087;
state_30087 = G__32657;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__ = function(state_30087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1.call(this,state_30087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_30106 = f__29447__auto__();
(statearr_30106[(6)] = c__29446__auto___32637);

return statearr_30106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30108){
var vec__30109 = p__30108;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30109,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30109,(1),null);
var job = vec__30109;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32665 = n;
var __32666 = (0);
while(true){
if((__32666 < n__4613__auto___32665)){
var G__30124_32667 = type;
var G__30124_32668__$1 = (((G__30124_32667 instanceof cljs.core.Keyword))?G__30124_32667.fqn:null);
switch (G__30124_32668__$1) {
case "compute":
var c__29446__auto___32671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32666,c__29446__auto___32671,G__30124_32667,G__30124_32668__$1,n__4613__auto___32665,jobs,results,process,async){
return (function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = ((function (__32666,c__29446__auto___32671,G__30124_32667,G__30124_32668__$1,n__4613__auto___32665,jobs,results,process,async){
return (function (state_30138){
var state_val_30139 = (state_30138[(1)]);
if((state_val_30139 === (1))){
var state_30138__$1 = state_30138;
var statearr_30145_32675 = state_30138__$1;
(statearr_30145_32675[(2)] = null);

(statearr_30145_32675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30139 === (2))){
var state_30138__$1 = state_30138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30138__$1,(4),jobs);
} else {
if((state_val_30139 === (3))){
var inst_30136 = (state_30138[(2)]);
var state_30138__$1 = state_30138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30138__$1,inst_30136);
} else {
if((state_val_30139 === (4))){
var inst_30128 = (state_30138[(2)]);
var inst_30129 = process(inst_30128);
var state_30138__$1 = state_30138;
if(cljs.core.truth_(inst_30129)){
var statearr_30150_32679 = state_30138__$1;
(statearr_30150_32679[(1)] = (5));

} else {
var statearr_30151_32681 = state_30138__$1;
(statearr_30151_32681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30139 === (5))){
var state_30138__$1 = state_30138;
var statearr_30153_32684 = state_30138__$1;
(statearr_30153_32684[(2)] = null);

(statearr_30153_32684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30139 === (6))){
var state_30138__$1 = state_30138;
var statearr_30156_32690 = state_30138__$1;
(statearr_30156_32690[(2)] = null);

(statearr_30156_32690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30139 === (7))){
var inst_30134 = (state_30138[(2)]);
var state_30138__$1 = state_30138;
var statearr_30160_32695 = state_30138__$1;
(statearr_30160_32695[(2)] = inst_30134);

(statearr_30160_32695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32666,c__29446__auto___32671,G__30124_32667,G__30124_32668__$1,n__4613__auto___32665,jobs,results,process,async))
;
return ((function (__32666,switch__29294__auto__,c__29446__auto___32671,G__30124_32667,G__30124_32668__$1,n__4613__auto___32665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0 = (function (){
var statearr_30161 = [null,null,null,null,null,null,null];
(statearr_30161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__);

(statearr_30161[(1)] = (1));

return statearr_30161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1 = (function (state_30138){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_30138);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e30164){var ex__29298__auto__ = e30164;
var statearr_30165_32704 = state_30138;
(statearr_30165_32704[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_30138[(4)]))){
var statearr_30167_32705 = state_30138;
(statearr_30167_32705[(1)] = cljs.core.first((state_30138[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32707 = state_30138;
state_30138 = G__32707;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__ = function(state_30138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1.call(this,state_30138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__;
})()
;})(__32666,switch__29294__auto__,c__29446__auto___32671,G__30124_32667,G__30124_32668__$1,n__4613__auto___32665,jobs,results,process,async))
})();
var state__29448__auto__ = (function (){var statearr_30169 = f__29447__auto__();
(statearr_30169[(6)] = c__29446__auto___32671);

return statearr_30169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
});})(__32666,c__29446__auto___32671,G__30124_32667,G__30124_32668__$1,n__4613__auto___32665,jobs,results,process,async))
);


break;
case "async":
var c__29446__auto___32711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32666,c__29446__auto___32711,G__30124_32667,G__30124_32668__$1,n__4613__auto___32665,jobs,results,process,async){
return (function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = ((function (__32666,c__29446__auto___32711,G__30124_32667,G__30124_32668__$1,n__4613__auto___32665,jobs,results,process,async){
return (function (state_30191){
var state_val_30192 = (state_30191[(1)]);
if((state_val_30192 === (1))){
var state_30191__$1 = state_30191;
var statearr_30200_32714 = state_30191__$1;
(statearr_30200_32714[(2)] = null);

(statearr_30200_32714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30192 === (2))){
var state_30191__$1 = state_30191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30191__$1,(4),jobs);
} else {
if((state_val_30192 === (3))){
var inst_30189 = (state_30191[(2)]);
var state_30191__$1 = state_30191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30191__$1,inst_30189);
} else {
if((state_val_30192 === (4))){
var inst_30179 = (state_30191[(2)]);
var inst_30182 = async(inst_30179);
var state_30191__$1 = state_30191;
if(cljs.core.truth_(inst_30182)){
var statearr_30210_32721 = state_30191__$1;
(statearr_30210_32721[(1)] = (5));

} else {
var statearr_30211_32722 = state_30191__$1;
(statearr_30211_32722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30192 === (5))){
var state_30191__$1 = state_30191;
var statearr_30212_32723 = state_30191__$1;
(statearr_30212_32723[(2)] = null);

(statearr_30212_32723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30192 === (6))){
var state_30191__$1 = state_30191;
var statearr_30213_32728 = state_30191__$1;
(statearr_30213_32728[(2)] = null);

(statearr_30213_32728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30192 === (7))){
var inst_30187 = (state_30191[(2)]);
var state_30191__$1 = state_30191;
var statearr_30214_32731 = state_30191__$1;
(statearr_30214_32731[(2)] = inst_30187);

(statearr_30214_32731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32666,c__29446__auto___32711,G__30124_32667,G__30124_32668__$1,n__4613__auto___32665,jobs,results,process,async))
;
return ((function (__32666,switch__29294__auto__,c__29446__auto___32711,G__30124_32667,G__30124_32668__$1,n__4613__auto___32665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0 = (function (){
var statearr_30215 = [null,null,null,null,null,null,null];
(statearr_30215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__);

(statearr_30215[(1)] = (1));

return statearr_30215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1 = (function (state_30191){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_30191);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e30220){var ex__29298__auto__ = e30220;
var statearr_30221_32738 = state_30191;
(statearr_30221_32738[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_30191[(4)]))){
var statearr_30222_32739 = state_30191;
(statearr_30222_32739[(1)] = cljs.core.first((state_30191[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32746 = state_30191;
state_30191 = G__32746;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__ = function(state_30191){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1.call(this,state_30191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__;
})()
;})(__32666,switch__29294__auto__,c__29446__auto___32711,G__30124_32667,G__30124_32668__$1,n__4613__auto___32665,jobs,results,process,async))
})();
var state__29448__auto__ = (function (){var statearr_30227 = f__29447__auto__();
(statearr_30227[(6)] = c__29446__auto___32711);

return statearr_30227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
});})(__32666,c__29446__auto___32711,G__30124_32667,G__30124_32668__$1,n__4613__auto___32665,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30124_32668__$1)].join('')));

}

var G__32754 = (__32666 + (1));
__32666 = G__32754;
continue;
} else {
}
break;
}

var c__29446__auto___32755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_30267){
var state_val_30268 = (state_30267[(1)]);
if((state_val_30268 === (7))){
var inst_30261 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30272_32759 = state_30267__$1;
(statearr_30272_32759[(2)] = inst_30261);

(statearr_30272_32759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (1))){
var state_30267__$1 = state_30267;
var statearr_30273_32762 = state_30267__$1;
(statearr_30273_32762[(2)] = null);

(statearr_30273_32762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (4))){
var inst_30246 = (state_30267[(7)]);
var inst_30246__$1 = (state_30267[(2)]);
var inst_30247 = (inst_30246__$1 == null);
var state_30267__$1 = (function (){var statearr_30274 = state_30267;
(statearr_30274[(7)] = inst_30246__$1);

return statearr_30274;
})();
if(cljs.core.truth_(inst_30247)){
var statearr_30275_32768 = state_30267__$1;
(statearr_30275_32768[(1)] = (5));

} else {
var statearr_30276_32770 = state_30267__$1;
(statearr_30276_32770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (6))){
var inst_30251 = (state_30267[(8)]);
var inst_30246 = (state_30267[(7)]);
var inst_30251__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30252 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30253 = [inst_30246,inst_30251__$1];
var inst_30254 = (new cljs.core.PersistentVector(null,2,(5),inst_30252,inst_30253,null));
var state_30267__$1 = (function (){var statearr_30277 = state_30267;
(statearr_30277[(8)] = inst_30251__$1);

return statearr_30277;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30267__$1,(8),jobs,inst_30254);
} else {
if((state_val_30268 === (3))){
var inst_30263 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30267__$1,inst_30263);
} else {
if((state_val_30268 === (2))){
var state_30267__$1 = state_30267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30267__$1,(4),from);
} else {
if((state_val_30268 === (9))){
var inst_30258 = (state_30267[(2)]);
var state_30267__$1 = (function (){var statearr_30282 = state_30267;
(statearr_30282[(9)] = inst_30258);

return statearr_30282;
})();
var statearr_30283_32784 = state_30267__$1;
(statearr_30283_32784[(2)] = null);

(statearr_30283_32784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (5))){
var inst_30249 = cljs.core.async.close_BANG_(jobs);
var state_30267__$1 = state_30267;
var statearr_30284_32786 = state_30267__$1;
(statearr_30284_32786[(2)] = inst_30249);

(statearr_30284_32786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (8))){
var inst_30251 = (state_30267[(8)]);
var inst_30256 = (state_30267[(2)]);
var state_30267__$1 = (function (){var statearr_30285 = state_30267;
(statearr_30285[(10)] = inst_30256);

return statearr_30285;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30267__$1,(9),results,inst_30251);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0 = (function (){
var statearr_30289 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30289[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__);

(statearr_30289[(1)] = (1));

return statearr_30289;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1 = (function (state_30267){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_30267);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e30290){var ex__29298__auto__ = e30290;
var statearr_30291_32794 = state_30267;
(statearr_30291_32794[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_30267[(4)]))){
var statearr_30292_32797 = state_30267;
(statearr_30292_32797[(1)] = cljs.core.first((state_30267[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32800 = state_30267;
state_30267 = G__32800;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__ = function(state_30267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1.call(this,state_30267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_30293 = f__29447__auto__();
(statearr_30293[(6)] = c__29446__auto___32755);

return statearr_30293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));


var c__29446__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_30335){
var state_val_30336 = (state_30335[(1)]);
if((state_val_30336 === (7))){
var inst_30331 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30337_32807 = state_30335__$1;
(statearr_30337_32807[(2)] = inst_30331);

(statearr_30337_32807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (20))){
var state_30335__$1 = state_30335;
var statearr_30338_32811 = state_30335__$1;
(statearr_30338_32811[(2)] = null);

(statearr_30338_32811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (1))){
var state_30335__$1 = state_30335;
var statearr_30340_32814 = state_30335__$1;
(statearr_30340_32814[(2)] = null);

(statearr_30340_32814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (4))){
var inst_30297 = (state_30335[(7)]);
var inst_30297__$1 = (state_30335[(2)]);
var inst_30298 = (inst_30297__$1 == null);
var state_30335__$1 = (function (){var statearr_30350 = state_30335;
(statearr_30350[(7)] = inst_30297__$1);

return statearr_30350;
})();
if(cljs.core.truth_(inst_30298)){
var statearr_30351_32822 = state_30335__$1;
(statearr_30351_32822[(1)] = (5));

} else {
var statearr_30352_32823 = state_30335__$1;
(statearr_30352_32823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (15))){
var inst_30313 = (state_30335[(8)]);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30335__$1,(18),to,inst_30313);
} else {
if((state_val_30336 === (21))){
var inst_30326 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30353_32829 = state_30335__$1;
(statearr_30353_32829[(2)] = inst_30326);

(statearr_30353_32829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (13))){
var inst_30328 = (state_30335[(2)]);
var state_30335__$1 = (function (){var statearr_30354 = state_30335;
(statearr_30354[(9)] = inst_30328);

return statearr_30354;
})();
var statearr_30355_32832 = state_30335__$1;
(statearr_30355_32832[(2)] = null);

(statearr_30355_32832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (6))){
var inst_30297 = (state_30335[(7)]);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30335__$1,(11),inst_30297);
} else {
if((state_val_30336 === (17))){
var inst_30321 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30321)){
var statearr_30358_32838 = state_30335__$1;
(statearr_30358_32838[(1)] = (19));

} else {
var statearr_30359_32839 = state_30335__$1;
(statearr_30359_32839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (3))){
var inst_30333 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30335__$1,inst_30333);
} else {
if((state_val_30336 === (12))){
var inst_30310 = (state_30335[(10)]);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30335__$1,(14),inst_30310);
} else {
if((state_val_30336 === (2))){
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30335__$1,(4),results);
} else {
if((state_val_30336 === (19))){
var state_30335__$1 = state_30335;
var statearr_30362_32840 = state_30335__$1;
(statearr_30362_32840[(2)] = null);

(statearr_30362_32840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (11))){
var inst_30310 = (state_30335[(2)]);
var state_30335__$1 = (function (){var statearr_30370 = state_30335;
(statearr_30370[(10)] = inst_30310);

return statearr_30370;
})();
var statearr_30371_32841 = state_30335__$1;
(statearr_30371_32841[(2)] = null);

(statearr_30371_32841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (9))){
var state_30335__$1 = state_30335;
var statearr_30373_32844 = state_30335__$1;
(statearr_30373_32844[(2)] = null);

(statearr_30373_32844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (5))){
var state_30335__$1 = state_30335;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30374_32846 = state_30335__$1;
(statearr_30374_32846[(1)] = (8));

} else {
var statearr_30375_32847 = state_30335__$1;
(statearr_30375_32847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (14))){
var inst_30313 = (state_30335[(8)]);
var inst_30313__$1 = (state_30335[(2)]);
var inst_30314 = (inst_30313__$1 == null);
var inst_30315 = cljs.core.not(inst_30314);
var state_30335__$1 = (function (){var statearr_30377 = state_30335;
(statearr_30377[(8)] = inst_30313__$1);

return statearr_30377;
})();
if(inst_30315){
var statearr_30378_32854 = state_30335__$1;
(statearr_30378_32854[(1)] = (15));

} else {
var statearr_30379_32861 = state_30335__$1;
(statearr_30379_32861[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (16))){
var state_30335__$1 = state_30335;
var statearr_30382_32862 = state_30335__$1;
(statearr_30382_32862[(2)] = false);

(statearr_30382_32862[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (10))){
var inst_30306 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30384_32868 = state_30335__$1;
(statearr_30384_32868[(2)] = inst_30306);

(statearr_30384_32868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (18))){
var inst_30318 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30386_32869 = state_30335__$1;
(statearr_30386_32869[(2)] = inst_30318);

(statearr_30386_32869[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (8))){
var inst_30303 = cljs.core.async.close_BANG_(to);
var state_30335__$1 = state_30335;
var statearr_30388_32870 = state_30335__$1;
(statearr_30388_32870[(2)] = inst_30303);

(statearr_30388_32870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0 = (function (){
var statearr_30390 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30390[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__);

(statearr_30390[(1)] = (1));

return statearr_30390;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1 = (function (state_30335){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_30335);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e30395){var ex__29298__auto__ = e30395;
var statearr_30396_32877 = state_30335;
(statearr_30396_32877[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_30335[(4)]))){
var statearr_30399_32881 = state_30335;
(statearr_30399_32881[(1)] = cljs.core.first((state_30335[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32882 = state_30335;
state_30335 = G__32882;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__ = function(state_30335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1.call(this,state_30335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_30406 = f__29447__auto__();
(statearr_30406[(6)] = c__29446__auto__);

return statearr_30406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));

return c__29446__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30408 = arguments.length;
switch (G__30408) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30421 = arguments.length;
switch (G__30421) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30429 = arguments.length;
switch (G__30429) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29446__auto___32904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_30463){
var state_val_30464 = (state_30463[(1)]);
if((state_val_30464 === (7))){
var inst_30459 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30473_32905 = state_30463__$1;
(statearr_30473_32905[(2)] = inst_30459);

(statearr_30473_32905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (1))){
var state_30463__$1 = state_30463;
var statearr_30476_32906 = state_30463__$1;
(statearr_30476_32906[(2)] = null);

(statearr_30476_32906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (4))){
var inst_30439 = (state_30463[(7)]);
var inst_30439__$1 = (state_30463[(2)]);
var inst_30440 = (inst_30439__$1 == null);
var state_30463__$1 = (function (){var statearr_30477 = state_30463;
(statearr_30477[(7)] = inst_30439__$1);

return statearr_30477;
})();
if(cljs.core.truth_(inst_30440)){
var statearr_30482_32910 = state_30463__$1;
(statearr_30482_32910[(1)] = (5));

} else {
var statearr_30483_32911 = state_30463__$1;
(statearr_30483_32911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (13))){
var state_30463__$1 = state_30463;
var statearr_30485_32913 = state_30463__$1;
(statearr_30485_32913[(2)] = null);

(statearr_30485_32913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (6))){
var inst_30439 = (state_30463[(7)]);
var inst_30445 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30439) : p.call(null,inst_30439));
var state_30463__$1 = state_30463;
if(cljs.core.truth_(inst_30445)){
var statearr_30488_32915 = state_30463__$1;
(statearr_30488_32915[(1)] = (9));

} else {
var statearr_30490_32916 = state_30463__$1;
(statearr_30490_32916[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (3))){
var inst_30461 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30463__$1,inst_30461);
} else {
if((state_val_30464 === (12))){
var state_30463__$1 = state_30463;
var statearr_30491_32919 = state_30463__$1;
(statearr_30491_32919[(2)] = null);

(statearr_30491_32919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (2))){
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30463__$1,(4),ch);
} else {
if((state_val_30464 === (11))){
var inst_30439 = (state_30463[(7)]);
var inst_30449 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30463__$1,(8),inst_30449,inst_30439);
} else {
if((state_val_30464 === (9))){
var state_30463__$1 = state_30463;
var statearr_30493_32920 = state_30463__$1;
(statearr_30493_32920[(2)] = tc);

(statearr_30493_32920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (5))){
var inst_30442 = cljs.core.async.close_BANG_(tc);
var inst_30443 = cljs.core.async.close_BANG_(fc);
var state_30463__$1 = (function (){var statearr_30496 = state_30463;
(statearr_30496[(8)] = inst_30442);

return statearr_30496;
})();
var statearr_30497_32922 = state_30463__$1;
(statearr_30497_32922[(2)] = inst_30443);

(statearr_30497_32922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (14))){
var inst_30457 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30500_32923 = state_30463__$1;
(statearr_30500_32923[(2)] = inst_30457);

(statearr_30500_32923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (10))){
var state_30463__$1 = state_30463;
var statearr_30501_32924 = state_30463__$1;
(statearr_30501_32924[(2)] = fc);

(statearr_30501_32924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (8))){
var inst_30451 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
if(cljs.core.truth_(inst_30451)){
var statearr_30506_32925 = state_30463__$1;
(statearr_30506_32925[(1)] = (12));

} else {
var statearr_30507_32926 = state_30463__$1;
(statearr_30507_32926[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29295__auto__ = null;
var cljs$core$async$state_machine__29295__auto____0 = (function (){
var statearr_30510 = [null,null,null,null,null,null,null,null,null];
(statearr_30510[(0)] = cljs$core$async$state_machine__29295__auto__);

(statearr_30510[(1)] = (1));

return statearr_30510;
});
var cljs$core$async$state_machine__29295__auto____1 = (function (state_30463){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_30463);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e30511){var ex__29298__auto__ = e30511;
var statearr_30513_32931 = state_30463;
(statearr_30513_32931[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_30463[(4)]))){
var statearr_30515_32936 = state_30463;
(statearr_30515_32936[(1)] = cljs.core.first((state_30463[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32939 = state_30463;
state_30463 = G__32939;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$state_machine__29295__auto__ = function(state_30463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29295__auto____1.call(this,state_30463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29295__auto____0;
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29295__auto____1;
return cljs$core$async$state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_30517 = f__29447__auto__();
(statearr_30517[(6)] = c__29446__auto___32904);

return statearr_30517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29446__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_30544){
var state_val_30545 = (state_30544[(1)]);
if((state_val_30545 === (7))){
var inst_30540 = (state_30544[(2)]);
var state_30544__$1 = state_30544;
var statearr_30547_32944 = state_30544__$1;
(statearr_30547_32944[(2)] = inst_30540);

(statearr_30547_32944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (1))){
var inst_30522 = init;
var inst_30523 = inst_30522;
var state_30544__$1 = (function (){var statearr_30548 = state_30544;
(statearr_30548[(7)] = inst_30523);

return statearr_30548;
})();
var statearr_30550_32945 = state_30544__$1;
(statearr_30550_32945[(2)] = null);

(statearr_30550_32945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (4))){
var inst_30526 = (state_30544[(8)]);
var inst_30526__$1 = (state_30544[(2)]);
var inst_30527 = (inst_30526__$1 == null);
var state_30544__$1 = (function (){var statearr_30558 = state_30544;
(statearr_30558[(8)] = inst_30526__$1);

return statearr_30558;
})();
if(cljs.core.truth_(inst_30527)){
var statearr_30561_32947 = state_30544__$1;
(statearr_30561_32947[(1)] = (5));

} else {
var statearr_30566_32948 = state_30544__$1;
(statearr_30566_32948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (6))){
var inst_30530 = (state_30544[(9)]);
var inst_30526 = (state_30544[(8)]);
var inst_30523 = (state_30544[(7)]);
var inst_30530__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30523,inst_30526) : f.call(null,inst_30523,inst_30526));
var inst_30531 = cljs.core.reduced_QMARK_(inst_30530__$1);
var state_30544__$1 = (function (){var statearr_30567 = state_30544;
(statearr_30567[(9)] = inst_30530__$1);

return statearr_30567;
})();
if(inst_30531){
var statearr_30568_32949 = state_30544__$1;
(statearr_30568_32949[(1)] = (8));

} else {
var statearr_30569_32950 = state_30544__$1;
(statearr_30569_32950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (3))){
var inst_30542 = (state_30544[(2)]);
var state_30544__$1 = state_30544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30544__$1,inst_30542);
} else {
if((state_val_30545 === (2))){
var state_30544__$1 = state_30544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30544__$1,(4),ch);
} else {
if((state_val_30545 === (9))){
var inst_30530 = (state_30544[(9)]);
var inst_30523 = inst_30530;
var state_30544__$1 = (function (){var statearr_30574 = state_30544;
(statearr_30574[(7)] = inst_30523);

return statearr_30574;
})();
var statearr_30575_32953 = state_30544__$1;
(statearr_30575_32953[(2)] = null);

(statearr_30575_32953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (5))){
var inst_30523 = (state_30544[(7)]);
var state_30544__$1 = state_30544;
var statearr_30582_32954 = state_30544__$1;
(statearr_30582_32954[(2)] = inst_30523);

(statearr_30582_32954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (10))){
var inst_30538 = (state_30544[(2)]);
var state_30544__$1 = state_30544;
var statearr_30585_32955 = state_30544__$1;
(statearr_30585_32955[(2)] = inst_30538);

(statearr_30585_32955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (8))){
var inst_30530 = (state_30544[(9)]);
var inst_30534 = cljs.core.deref(inst_30530);
var state_30544__$1 = state_30544;
var statearr_30586_32957 = state_30544__$1;
(statearr_30586_32957[(2)] = inst_30534);

(statearr_30586_32957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29295__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29295__auto____0 = (function (){
var statearr_30591 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30591[(0)] = cljs$core$async$reduce_$_state_machine__29295__auto__);

(statearr_30591[(1)] = (1));

return statearr_30591;
});
var cljs$core$async$reduce_$_state_machine__29295__auto____1 = (function (state_30544){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_30544);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e30592){var ex__29298__auto__ = e30592;
var statearr_30595_32962 = state_30544;
(statearr_30595_32962[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_30544[(4)]))){
var statearr_30597_32966 = state_30544;
(statearr_30597_32966[(1)] = cljs.core.first((state_30544[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32967 = state_30544;
state_30544 = G__32967;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29295__auto__ = function(state_30544){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29295__auto____1.call(this,state_30544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29295__auto____0;
cljs$core$async$reduce_$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29295__auto____1;
return cljs$core$async$reduce_$_state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_30599 = f__29447__auto__();
(statearr_30599[(6)] = c__29446__auto__);

return statearr_30599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));

return c__29446__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29446__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_30610){
var state_val_30611 = (state_30610[(1)]);
if((state_val_30611 === (1))){
var inst_30605 = cljs.core.async.reduce(f__$1,init,ch);
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30610__$1,(2),inst_30605);
} else {
if((state_val_30611 === (2))){
var inst_30607 = (state_30610[(2)]);
var inst_30608 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30607) : f__$1.call(null,inst_30607));
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30610__$1,inst_30608);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29295__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29295__auto____0 = (function (){
var statearr_30624 = [null,null,null,null,null,null,null];
(statearr_30624[(0)] = cljs$core$async$transduce_$_state_machine__29295__auto__);

(statearr_30624[(1)] = (1));

return statearr_30624;
});
var cljs$core$async$transduce_$_state_machine__29295__auto____1 = (function (state_30610){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_30610);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e30625){var ex__29298__auto__ = e30625;
var statearr_30626_32971 = state_30610;
(statearr_30626_32971[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_30610[(4)]))){
var statearr_30627_32972 = state_30610;
(statearr_30627_32972[(1)] = cljs.core.first((state_30610[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32974 = state_30610;
state_30610 = G__32974;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29295__auto__ = function(state_30610){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29295__auto____1.call(this,state_30610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29295__auto____0;
cljs$core$async$transduce_$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29295__auto____1;
return cljs$core$async$transduce_$_state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_30632 = f__29447__auto__();
(statearr_30632[(6)] = c__29446__auto__);

return statearr_30632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));

return c__29446__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30634 = arguments.length;
switch (G__30634) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29446__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_30661){
var state_val_30662 = (state_30661[(1)]);
if((state_val_30662 === (7))){
var inst_30643 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
var statearr_30664_32981 = state_30661__$1;
(statearr_30664_32981[(2)] = inst_30643);

(statearr_30664_32981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (1))){
var inst_30637 = cljs.core.seq(coll);
var inst_30638 = inst_30637;
var state_30661__$1 = (function (){var statearr_30665 = state_30661;
(statearr_30665[(7)] = inst_30638);

return statearr_30665;
})();
var statearr_30667_32986 = state_30661__$1;
(statearr_30667_32986[(2)] = null);

(statearr_30667_32986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (4))){
var inst_30638 = (state_30661[(7)]);
var inst_30641 = cljs.core.first(inst_30638);
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30661__$1,(7),ch,inst_30641);
} else {
if((state_val_30662 === (13))){
var inst_30655 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
var statearr_30668_32990 = state_30661__$1;
(statearr_30668_32990[(2)] = inst_30655);

(statearr_30668_32990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (6))){
var inst_30646 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
if(cljs.core.truth_(inst_30646)){
var statearr_30669_32995 = state_30661__$1;
(statearr_30669_32995[(1)] = (8));

} else {
var statearr_30672_32998 = state_30661__$1;
(statearr_30672_32998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (3))){
var inst_30659 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30661__$1,inst_30659);
} else {
if((state_val_30662 === (12))){
var state_30661__$1 = state_30661;
var statearr_30674_33000 = state_30661__$1;
(statearr_30674_33000[(2)] = null);

(statearr_30674_33000[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (2))){
var inst_30638 = (state_30661[(7)]);
var state_30661__$1 = state_30661;
if(cljs.core.truth_(inst_30638)){
var statearr_30684_33004 = state_30661__$1;
(statearr_30684_33004[(1)] = (4));

} else {
var statearr_30685_33005 = state_30661__$1;
(statearr_30685_33005[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (11))){
var inst_30652 = cljs.core.async.close_BANG_(ch);
var state_30661__$1 = state_30661;
var statearr_30686_33010 = state_30661__$1;
(statearr_30686_33010[(2)] = inst_30652);

(statearr_30686_33010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (9))){
var state_30661__$1 = state_30661;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30694_33014 = state_30661__$1;
(statearr_30694_33014[(1)] = (11));

} else {
var statearr_30695_33019 = state_30661__$1;
(statearr_30695_33019[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (5))){
var inst_30638 = (state_30661[(7)]);
var state_30661__$1 = state_30661;
var statearr_30696_33022 = state_30661__$1;
(statearr_30696_33022[(2)] = inst_30638);

(statearr_30696_33022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (10))){
var inst_30657 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
var statearr_30698_33025 = state_30661__$1;
(statearr_30698_33025[(2)] = inst_30657);

(statearr_30698_33025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (8))){
var inst_30638 = (state_30661[(7)]);
var inst_30648 = cljs.core.next(inst_30638);
var inst_30638__$1 = inst_30648;
var state_30661__$1 = (function (){var statearr_30699 = state_30661;
(statearr_30699[(7)] = inst_30638__$1);

return statearr_30699;
})();
var statearr_30700_33027 = state_30661__$1;
(statearr_30700_33027[(2)] = null);

(statearr_30700_33027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29295__auto__ = null;
var cljs$core$async$state_machine__29295__auto____0 = (function (){
var statearr_30703 = [null,null,null,null,null,null,null,null];
(statearr_30703[(0)] = cljs$core$async$state_machine__29295__auto__);

(statearr_30703[(1)] = (1));

return statearr_30703;
});
var cljs$core$async$state_machine__29295__auto____1 = (function (state_30661){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_30661);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e30704){var ex__29298__auto__ = e30704;
var statearr_30705_33029 = state_30661;
(statearr_30705_33029[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_30661[(4)]))){
var statearr_30706_33030 = state_30661;
(statearr_30706_33030[(1)] = cljs.core.first((state_30661[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33032 = state_30661;
state_30661 = G__33032;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$state_machine__29295__auto__ = function(state_30661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29295__auto____1.call(this,state_30661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29295__auto____0;
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29295__auto____1;
return cljs$core$async$state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_30709 = f__29447__auto__();
(statearr_30709[(6)] = c__29446__auto__);

return statearr_30709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));

return c__29446__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30722 = arguments.length;
switch (G__30722) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33047 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33047(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33051 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33051(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33056 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33056(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33063 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33063(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30758 = (function (ch,cs,meta30759){
this.ch = ch;
this.cs = cs;
this.meta30759 = meta30759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30760,meta30759__$1){
var self__ = this;
var _30760__$1 = this;
return (new cljs.core.async.t_cljs$core$async30758(self__.ch,self__.cs,meta30759__$1));
}));

(cljs.core.async.t_cljs$core$async30758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30760){
var self__ = this;
var _30760__$1 = this;
return self__.meta30759;
}));

(cljs.core.async.t_cljs$core$async30758.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30758.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30758.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30758.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30758.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30758.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30759","meta30759",-1418304191,null)], null);
}));

(cljs.core.async.t_cljs$core$async30758.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30758");

(cljs.core.async.t_cljs$core$async30758.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30758");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30758.
 */
cljs.core.async.__GT_t_cljs$core$async30758 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30758(ch__$1,cs__$1,meta30759){
return (new cljs.core.async.t_cljs$core$async30758(ch__$1,cs__$1,meta30759));
});

}

return (new cljs.core.async.t_cljs$core$async30758(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29446__auto___33075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_30920){
var state_val_30921 = (state_30920[(1)]);
if((state_val_30921 === (7))){
var inst_30915 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
var statearr_30922_33084 = state_30920__$1;
(statearr_30922_33084[(2)] = inst_30915);

(statearr_30922_33084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (20))){
var inst_30814 = (state_30920[(7)]);
var inst_30829 = cljs.core.first(inst_30814);
var inst_30830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30829,(0),null);
var inst_30831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30829,(1),null);
var state_30920__$1 = (function (){var statearr_30926 = state_30920;
(statearr_30926[(8)] = inst_30830);

return statearr_30926;
})();
if(cljs.core.truth_(inst_30831)){
var statearr_30928_33085 = state_30920__$1;
(statearr_30928_33085[(1)] = (22));

} else {
var statearr_30929_33090 = state_30920__$1;
(statearr_30929_33090[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (27))){
var inst_30862 = (state_30920[(9)]);
var inst_30867 = (state_30920[(10)]);
var inst_30779 = (state_30920[(11)]);
var inst_30860 = (state_30920[(12)]);
var inst_30867__$1 = cljs.core._nth(inst_30860,inst_30862);
var inst_30868 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30867__$1,inst_30779,done);
var state_30920__$1 = (function (){var statearr_30933 = state_30920;
(statearr_30933[(10)] = inst_30867__$1);

return statearr_30933;
})();
if(cljs.core.truth_(inst_30868)){
var statearr_30935_33099 = state_30920__$1;
(statearr_30935_33099[(1)] = (30));

} else {
var statearr_30937_33100 = state_30920__$1;
(statearr_30937_33100[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (1))){
var state_30920__$1 = state_30920;
var statearr_30940_33101 = state_30920__$1;
(statearr_30940_33101[(2)] = null);

(statearr_30940_33101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (24))){
var inst_30814 = (state_30920[(7)]);
var inst_30837 = (state_30920[(2)]);
var inst_30838 = cljs.core.next(inst_30814);
var inst_30788 = inst_30838;
var inst_30789 = null;
var inst_30790 = (0);
var inst_30791 = (0);
var state_30920__$1 = (function (){var statearr_30941 = state_30920;
(statearr_30941[(13)] = inst_30837);

(statearr_30941[(14)] = inst_30789);

(statearr_30941[(15)] = inst_30788);

(statearr_30941[(16)] = inst_30790);

(statearr_30941[(17)] = inst_30791);

return statearr_30941;
})();
var statearr_30942_33102 = state_30920__$1;
(statearr_30942_33102[(2)] = null);

(statearr_30942_33102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (39))){
var state_30920__$1 = state_30920;
var statearr_30953_33103 = state_30920__$1;
(statearr_30953_33103[(2)] = null);

(statearr_30953_33103[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (4))){
var inst_30779 = (state_30920[(11)]);
var inst_30779__$1 = (state_30920[(2)]);
var inst_30780 = (inst_30779__$1 == null);
var state_30920__$1 = (function (){var statearr_30954 = state_30920;
(statearr_30954[(11)] = inst_30779__$1);

return statearr_30954;
})();
if(cljs.core.truth_(inst_30780)){
var statearr_30958_33104 = state_30920__$1;
(statearr_30958_33104[(1)] = (5));

} else {
var statearr_30960_33105 = state_30920__$1;
(statearr_30960_33105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (15))){
var inst_30789 = (state_30920[(14)]);
var inst_30788 = (state_30920[(15)]);
var inst_30790 = (state_30920[(16)]);
var inst_30791 = (state_30920[(17)]);
var inst_30807 = (state_30920[(2)]);
var inst_30808 = (inst_30791 + (1));
var tmp30945 = inst_30789;
var tmp30946 = inst_30788;
var tmp30947 = inst_30790;
var inst_30788__$1 = tmp30946;
var inst_30789__$1 = tmp30945;
var inst_30790__$1 = tmp30947;
var inst_30791__$1 = inst_30808;
var state_30920__$1 = (function (){var statearr_30964 = state_30920;
(statearr_30964[(14)] = inst_30789__$1);

(statearr_30964[(15)] = inst_30788__$1);

(statearr_30964[(16)] = inst_30790__$1);

(statearr_30964[(18)] = inst_30807);

(statearr_30964[(17)] = inst_30791__$1);

return statearr_30964;
})();
var statearr_30969_33109 = state_30920__$1;
(statearr_30969_33109[(2)] = null);

(statearr_30969_33109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (21))){
var inst_30841 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
var statearr_30973_33110 = state_30920__$1;
(statearr_30973_33110[(2)] = inst_30841);

(statearr_30973_33110[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (31))){
var inst_30867 = (state_30920[(10)]);
var inst_30871 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30867);
var state_30920__$1 = state_30920;
var statearr_30978_33111 = state_30920__$1;
(statearr_30978_33111[(2)] = inst_30871);

(statearr_30978_33111[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (32))){
var inst_30862 = (state_30920[(9)]);
var inst_30860 = (state_30920[(12)]);
var inst_30861 = (state_30920[(19)]);
var inst_30859 = (state_30920[(20)]);
var inst_30873 = (state_30920[(2)]);
var inst_30874 = (inst_30862 + (1));
var tmp30970 = inst_30860;
var tmp30971 = inst_30861;
var tmp30972 = inst_30859;
var inst_30859__$1 = tmp30972;
var inst_30860__$1 = tmp30970;
var inst_30861__$1 = tmp30971;
var inst_30862__$1 = inst_30874;
var state_30920__$1 = (function (){var statearr_30982 = state_30920;
(statearr_30982[(21)] = inst_30873);

(statearr_30982[(9)] = inst_30862__$1);

(statearr_30982[(12)] = inst_30860__$1);

(statearr_30982[(19)] = inst_30861__$1);

(statearr_30982[(20)] = inst_30859__$1);

return statearr_30982;
})();
var statearr_30987_33112 = state_30920__$1;
(statearr_30987_33112[(2)] = null);

(statearr_30987_33112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (40))){
var inst_30886 = (state_30920[(22)]);
var inst_30891 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30886);
var state_30920__$1 = state_30920;
var statearr_30988_33113 = state_30920__$1;
(statearr_30988_33113[(2)] = inst_30891);

(statearr_30988_33113[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (33))){
var inst_30877 = (state_30920[(23)]);
var inst_30879 = cljs.core.chunked_seq_QMARK_(inst_30877);
var state_30920__$1 = state_30920;
if(inst_30879){
var statearr_30990_33114 = state_30920__$1;
(statearr_30990_33114[(1)] = (36));

} else {
var statearr_30991_33116 = state_30920__$1;
(statearr_30991_33116[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (13))){
var inst_30801 = (state_30920[(24)]);
var inst_30804 = cljs.core.async.close_BANG_(inst_30801);
var state_30920__$1 = state_30920;
var statearr_30995_33117 = state_30920__$1;
(statearr_30995_33117[(2)] = inst_30804);

(statearr_30995_33117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (22))){
var inst_30830 = (state_30920[(8)]);
var inst_30834 = cljs.core.async.close_BANG_(inst_30830);
var state_30920__$1 = state_30920;
var statearr_30996_33119 = state_30920__$1;
(statearr_30996_33119[(2)] = inst_30834);

(statearr_30996_33119[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (36))){
var inst_30877 = (state_30920[(23)]);
var inst_30881 = cljs.core.chunk_first(inst_30877);
var inst_30882 = cljs.core.chunk_rest(inst_30877);
var inst_30883 = cljs.core.count(inst_30881);
var inst_30859 = inst_30882;
var inst_30860 = inst_30881;
var inst_30861 = inst_30883;
var inst_30862 = (0);
var state_30920__$1 = (function (){var statearr_30997 = state_30920;
(statearr_30997[(9)] = inst_30862);

(statearr_30997[(12)] = inst_30860);

(statearr_30997[(19)] = inst_30861);

(statearr_30997[(20)] = inst_30859);

return statearr_30997;
})();
var statearr_30998_33124 = state_30920__$1;
(statearr_30998_33124[(2)] = null);

(statearr_30998_33124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (41))){
var inst_30877 = (state_30920[(23)]);
var inst_30893 = (state_30920[(2)]);
var inst_30894 = cljs.core.next(inst_30877);
var inst_30859 = inst_30894;
var inst_30860 = null;
var inst_30861 = (0);
var inst_30862 = (0);
var state_30920__$1 = (function (){var statearr_30999 = state_30920;
(statearr_30999[(9)] = inst_30862);

(statearr_30999[(12)] = inst_30860);

(statearr_30999[(19)] = inst_30861);

(statearr_30999[(25)] = inst_30893);

(statearr_30999[(20)] = inst_30859);

return statearr_30999;
})();
var statearr_31000_33129 = state_30920__$1;
(statearr_31000_33129[(2)] = null);

(statearr_31000_33129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (43))){
var state_30920__$1 = state_30920;
var statearr_31001_33134 = state_30920__$1;
(statearr_31001_33134[(2)] = null);

(statearr_31001_33134[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (29))){
var inst_30902 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
var statearr_31003_33139 = state_30920__$1;
(statearr_31003_33139[(2)] = inst_30902);

(statearr_31003_33139[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (44))){
var inst_30912 = (state_30920[(2)]);
var state_30920__$1 = (function (){var statearr_31004 = state_30920;
(statearr_31004[(26)] = inst_30912);

return statearr_31004;
})();
var statearr_31005_33140 = state_30920__$1;
(statearr_31005_33140[(2)] = null);

(statearr_31005_33140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (6))){
var inst_30851 = (state_30920[(27)]);
var inst_30850 = cljs.core.deref(cs);
var inst_30851__$1 = cljs.core.keys(inst_30850);
var inst_30852 = cljs.core.count(inst_30851__$1);
var inst_30853 = cljs.core.reset_BANG_(dctr,inst_30852);
var inst_30858 = cljs.core.seq(inst_30851__$1);
var inst_30859 = inst_30858;
var inst_30860 = null;
var inst_30861 = (0);
var inst_30862 = (0);
var state_30920__$1 = (function (){var statearr_31006 = state_30920;
(statearr_31006[(9)] = inst_30862);

(statearr_31006[(27)] = inst_30851__$1);

(statearr_31006[(12)] = inst_30860);

(statearr_31006[(19)] = inst_30861);

(statearr_31006[(28)] = inst_30853);

(statearr_31006[(20)] = inst_30859);

return statearr_31006;
})();
var statearr_31007_33142 = state_30920__$1;
(statearr_31007_33142[(2)] = null);

(statearr_31007_33142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (28))){
var inst_30877 = (state_30920[(23)]);
var inst_30859 = (state_30920[(20)]);
var inst_30877__$1 = cljs.core.seq(inst_30859);
var state_30920__$1 = (function (){var statearr_31008 = state_30920;
(statearr_31008[(23)] = inst_30877__$1);

return statearr_31008;
})();
if(inst_30877__$1){
var statearr_31010_33148 = state_30920__$1;
(statearr_31010_33148[(1)] = (33));

} else {
var statearr_31011_33149 = state_30920__$1;
(statearr_31011_33149[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (25))){
var inst_30862 = (state_30920[(9)]);
var inst_30861 = (state_30920[(19)]);
var inst_30864 = (inst_30862 < inst_30861);
var inst_30865 = inst_30864;
var state_30920__$1 = state_30920;
if(cljs.core.truth_(inst_30865)){
var statearr_31012_33153 = state_30920__$1;
(statearr_31012_33153[(1)] = (27));

} else {
var statearr_31013_33154 = state_30920__$1;
(statearr_31013_33154[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (34))){
var state_30920__$1 = state_30920;
var statearr_31017_33156 = state_30920__$1;
(statearr_31017_33156[(2)] = null);

(statearr_31017_33156[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (17))){
var state_30920__$1 = state_30920;
var statearr_31018_33159 = state_30920__$1;
(statearr_31018_33159[(2)] = null);

(statearr_31018_33159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (3))){
var inst_30917 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30920__$1,inst_30917);
} else {
if((state_val_30921 === (12))){
var inst_30846 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
var statearr_31019_33163 = state_30920__$1;
(statearr_31019_33163[(2)] = inst_30846);

(statearr_31019_33163[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (2))){
var state_30920__$1 = state_30920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30920__$1,(4),ch);
} else {
if((state_val_30921 === (23))){
var state_30920__$1 = state_30920;
var statearr_31021_33168 = state_30920__$1;
(statearr_31021_33168[(2)] = null);

(statearr_31021_33168[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (35))){
var inst_30900 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
var statearr_31024_33169 = state_30920__$1;
(statearr_31024_33169[(2)] = inst_30900);

(statearr_31024_33169[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (19))){
var inst_30814 = (state_30920[(7)]);
var inst_30819 = cljs.core.chunk_first(inst_30814);
var inst_30820 = cljs.core.chunk_rest(inst_30814);
var inst_30821 = cljs.core.count(inst_30819);
var inst_30788 = inst_30820;
var inst_30789 = inst_30819;
var inst_30790 = inst_30821;
var inst_30791 = (0);
var state_30920__$1 = (function (){var statearr_31029 = state_30920;
(statearr_31029[(14)] = inst_30789);

(statearr_31029[(15)] = inst_30788);

(statearr_31029[(16)] = inst_30790);

(statearr_31029[(17)] = inst_30791);

return statearr_31029;
})();
var statearr_31030_33173 = state_30920__$1;
(statearr_31030_33173[(2)] = null);

(statearr_31030_33173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (11))){
var inst_30814 = (state_30920[(7)]);
var inst_30788 = (state_30920[(15)]);
var inst_30814__$1 = cljs.core.seq(inst_30788);
var state_30920__$1 = (function (){var statearr_31034 = state_30920;
(statearr_31034[(7)] = inst_30814__$1);

return statearr_31034;
})();
if(inst_30814__$1){
var statearr_31035_33177 = state_30920__$1;
(statearr_31035_33177[(1)] = (16));

} else {
var statearr_31036_33178 = state_30920__$1;
(statearr_31036_33178[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (9))){
var inst_30848 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
var statearr_31037_33179 = state_30920__$1;
(statearr_31037_33179[(2)] = inst_30848);

(statearr_31037_33179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (5))){
var inst_30786 = cljs.core.deref(cs);
var inst_30787 = cljs.core.seq(inst_30786);
var inst_30788 = inst_30787;
var inst_30789 = null;
var inst_30790 = (0);
var inst_30791 = (0);
var state_30920__$1 = (function (){var statearr_31038 = state_30920;
(statearr_31038[(14)] = inst_30789);

(statearr_31038[(15)] = inst_30788);

(statearr_31038[(16)] = inst_30790);

(statearr_31038[(17)] = inst_30791);

return statearr_31038;
})();
var statearr_31039_33183 = state_30920__$1;
(statearr_31039_33183[(2)] = null);

(statearr_31039_33183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (14))){
var state_30920__$1 = state_30920;
var statearr_31040_33184 = state_30920__$1;
(statearr_31040_33184[(2)] = null);

(statearr_31040_33184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (45))){
var inst_30909 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
var statearr_31041_33185 = state_30920__$1;
(statearr_31041_33185[(2)] = inst_30909);

(statearr_31041_33185[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (26))){
var inst_30851 = (state_30920[(27)]);
var inst_30904 = (state_30920[(2)]);
var inst_30905 = cljs.core.seq(inst_30851);
var state_30920__$1 = (function (){var statearr_31045 = state_30920;
(statearr_31045[(29)] = inst_30904);

return statearr_31045;
})();
if(inst_30905){
var statearr_31046_33188 = state_30920__$1;
(statearr_31046_33188[(1)] = (42));

} else {
var statearr_31047_33189 = state_30920__$1;
(statearr_31047_33189[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (16))){
var inst_30814 = (state_30920[(7)]);
var inst_30816 = cljs.core.chunked_seq_QMARK_(inst_30814);
var state_30920__$1 = state_30920;
if(inst_30816){
var statearr_31051_33193 = state_30920__$1;
(statearr_31051_33193[(1)] = (19));

} else {
var statearr_31052_33197 = state_30920__$1;
(statearr_31052_33197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (38))){
var inst_30897 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
var statearr_31053_33198 = state_30920__$1;
(statearr_31053_33198[(2)] = inst_30897);

(statearr_31053_33198[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (30))){
var state_30920__$1 = state_30920;
var statearr_31054_33202 = state_30920__$1;
(statearr_31054_33202[(2)] = null);

(statearr_31054_33202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (10))){
var inst_30789 = (state_30920[(14)]);
var inst_30791 = (state_30920[(17)]);
var inst_30800 = cljs.core._nth(inst_30789,inst_30791);
var inst_30801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30800,(0),null);
var inst_30802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30800,(1),null);
var state_30920__$1 = (function (){var statearr_31056 = state_30920;
(statearr_31056[(24)] = inst_30801);

return statearr_31056;
})();
if(cljs.core.truth_(inst_30802)){
var statearr_31057_33203 = state_30920__$1;
(statearr_31057_33203[(1)] = (13));

} else {
var statearr_31062_33204 = state_30920__$1;
(statearr_31062_33204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (18))){
var inst_30844 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
var statearr_31065_33205 = state_30920__$1;
(statearr_31065_33205[(2)] = inst_30844);

(statearr_31065_33205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (42))){
var state_30920__$1 = state_30920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30920__$1,(45),dchan);
} else {
if((state_val_30921 === (37))){
var inst_30779 = (state_30920[(11)]);
var inst_30886 = (state_30920[(22)]);
var inst_30877 = (state_30920[(23)]);
var inst_30886__$1 = cljs.core.first(inst_30877);
var inst_30888 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30886__$1,inst_30779,done);
var state_30920__$1 = (function (){var statearr_31070 = state_30920;
(statearr_31070[(22)] = inst_30886__$1);

return statearr_31070;
})();
if(cljs.core.truth_(inst_30888)){
var statearr_31071_33206 = state_30920__$1;
(statearr_31071_33206[(1)] = (39));

} else {
var statearr_31072_33207 = state_30920__$1;
(statearr_31072_33207[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (8))){
var inst_30790 = (state_30920[(16)]);
var inst_30791 = (state_30920[(17)]);
var inst_30793 = (inst_30791 < inst_30790);
var inst_30794 = inst_30793;
var state_30920__$1 = state_30920;
if(cljs.core.truth_(inst_30794)){
var statearr_31074_33208 = state_30920__$1;
(statearr_31074_33208[(1)] = (10));

} else {
var statearr_31075_33209 = state_30920__$1;
(statearr_31075_33209[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29295__auto__ = null;
var cljs$core$async$mult_$_state_machine__29295__auto____0 = (function (){
var statearr_31077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31077[(0)] = cljs$core$async$mult_$_state_machine__29295__auto__);

(statearr_31077[(1)] = (1));

return statearr_31077;
});
var cljs$core$async$mult_$_state_machine__29295__auto____1 = (function (state_30920){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_30920);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e31079){var ex__29298__auto__ = e31079;
var statearr_31081_33210 = state_30920;
(statearr_31081_33210[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_30920[(4)]))){
var statearr_31083_33211 = state_30920;
(statearr_31083_33211[(1)] = cljs.core.first((state_30920[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33212 = state_30920;
state_30920 = G__33212;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29295__auto__ = function(state_30920){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29295__auto____1.call(this,state_30920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29295__auto____0;
cljs$core$async$mult_$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29295__auto____1;
return cljs$core$async$mult_$_state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_31085 = f__29447__auto__();
(statearr_31085[(6)] = c__29446__auto___33075);

return statearr_31085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31096 = arguments.length;
switch (G__31096) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33219 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33219(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33220 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33220(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33221 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33221(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33222 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33222(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33230 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33230(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33234 = arguments.length;
var i__4737__auto___33235 = (0);
while(true){
if((i__4737__auto___33235 < len__4736__auto___33234)){
args__4742__auto__.push((arguments[i__4737__auto___33235]));

var G__33236 = (i__4737__auto___33235 + (1));
i__4737__auto___33235 = G__33236;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31141){
var map__31143 = p__31141;
var map__31143__$1 = (((((!((map__31143 == null))))?(((((map__31143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31143):map__31143);
var opts = map__31143__$1;
var statearr_31146_33240 = state;
(statearr_31146_33240[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31147_33241 = state;
(statearr_31147_33241[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31148_33245 = state;
(statearr_31148_33245[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31132){
var G__31133 = cljs.core.first(seq31132);
var seq31132__$1 = cljs.core.next(seq31132);
var G__31134 = cljs.core.first(seq31132__$1);
var seq31132__$2 = cljs.core.next(seq31132__$1);
var G__31135 = cljs.core.first(seq31132__$2);
var seq31132__$3 = cljs.core.next(seq31132__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31133,G__31134,G__31135,seq31132__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31158 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31159){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31159 = meta31159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31160,meta31159__$1){
var self__ = this;
var _31160__$1 = this;
return (new cljs.core.async.t_cljs$core$async31158(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31159__$1));
}));

(cljs.core.async.t_cljs$core$async31158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31160){
var self__ = this;
var _31160__$1 = this;
return self__.meta31159;
}));

(cljs.core.async.t_cljs$core$async31158.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31158.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31158.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31158.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31158.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31158.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31158.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31158.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31159","meta31159",-1538667700,null)], null);
}));

(cljs.core.async.t_cljs$core$async31158.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31158");

(cljs.core.async.t_cljs$core$async31158.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31158");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31158.
 */
cljs.core.async.__GT_t_cljs$core$async31158 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31158(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31159){
return (new cljs.core.async.t_cljs$core$async31158(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31159));
});

}

return (new cljs.core.async.t_cljs$core$async31158(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29446__auto___33256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_31294){
var state_val_31295 = (state_31294[(1)]);
if((state_val_31295 === (7))){
var inst_31198 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31309_33257 = state_31294__$1;
(statearr_31309_33257[(2)] = inst_31198);

(statearr_31309_33257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (20))){
var inst_31210 = (state_31294[(7)]);
var state_31294__$1 = state_31294;
var statearr_31312_33258 = state_31294__$1;
(statearr_31312_33258[(2)] = inst_31210);

(statearr_31312_33258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (27))){
var state_31294__$1 = state_31294;
var statearr_31313_33259 = state_31294__$1;
(statearr_31313_33259[(2)] = null);

(statearr_31313_33259[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (1))){
var inst_31183 = (state_31294[(8)]);
var inst_31183__$1 = calc_state();
var inst_31187 = (inst_31183__$1 == null);
var inst_31188 = cljs.core.not(inst_31187);
var state_31294__$1 = (function (){var statearr_31314 = state_31294;
(statearr_31314[(8)] = inst_31183__$1);

return statearr_31314;
})();
if(inst_31188){
var statearr_31315_33260 = state_31294__$1;
(statearr_31315_33260[(1)] = (2));

} else {
var statearr_31316_33261 = state_31294__$1;
(statearr_31316_33261[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (24))){
var inst_31265 = (state_31294[(9)]);
var inst_31248 = (state_31294[(10)]);
var inst_31239 = (state_31294[(11)]);
var inst_31265__$1 = (inst_31239.cljs$core$IFn$_invoke$arity$1 ? inst_31239.cljs$core$IFn$_invoke$arity$1(inst_31248) : inst_31239.call(null,inst_31248));
var state_31294__$1 = (function (){var statearr_31317 = state_31294;
(statearr_31317[(9)] = inst_31265__$1);

return statearr_31317;
})();
if(cljs.core.truth_(inst_31265__$1)){
var statearr_31318_33263 = state_31294__$1;
(statearr_31318_33263[(1)] = (29));

} else {
var statearr_31319_33264 = state_31294__$1;
(statearr_31319_33264[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (4))){
var inst_31201 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
if(cljs.core.truth_(inst_31201)){
var statearr_31320_33265 = state_31294__$1;
(statearr_31320_33265[(1)] = (8));

} else {
var statearr_31321_33267 = state_31294__$1;
(statearr_31321_33267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (15))){
var inst_31233 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
if(cljs.core.truth_(inst_31233)){
var statearr_31322_33272 = state_31294__$1;
(statearr_31322_33272[(1)] = (19));

} else {
var statearr_31323_33273 = state_31294__$1;
(statearr_31323_33273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (21))){
var inst_31238 = (state_31294[(12)]);
var inst_31238__$1 = (state_31294[(2)]);
var inst_31239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31238__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31238__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31238__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31294__$1 = (function (){var statearr_31324 = state_31294;
(statearr_31324[(13)] = inst_31240);

(statearr_31324[(12)] = inst_31238__$1);

(statearr_31324[(11)] = inst_31239);

return statearr_31324;
})();
return cljs.core.async.ioc_alts_BANG_(state_31294__$1,(22),inst_31241);
} else {
if((state_val_31295 === (31))){
var inst_31273 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
if(cljs.core.truth_(inst_31273)){
var statearr_31325_33275 = state_31294__$1;
(statearr_31325_33275[(1)] = (32));

} else {
var statearr_31326_33276 = state_31294__$1;
(statearr_31326_33276[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (32))){
var inst_31247 = (state_31294[(14)]);
var state_31294__$1 = state_31294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31294__$1,(35),out,inst_31247);
} else {
if((state_val_31295 === (33))){
var inst_31238 = (state_31294[(12)]);
var inst_31210 = inst_31238;
var state_31294__$1 = (function (){var statearr_31327 = state_31294;
(statearr_31327[(7)] = inst_31210);

return statearr_31327;
})();
var statearr_31328_33277 = state_31294__$1;
(statearr_31328_33277[(2)] = null);

(statearr_31328_33277[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (13))){
var inst_31210 = (state_31294[(7)]);
var inst_31222 = inst_31210.cljs$lang$protocol_mask$partition0$;
var inst_31223 = (inst_31222 & (64));
var inst_31224 = inst_31210.cljs$core$ISeq$;
var inst_31225 = (cljs.core.PROTOCOL_SENTINEL === inst_31224);
var inst_31226 = ((inst_31223) || (inst_31225));
var state_31294__$1 = state_31294;
if(cljs.core.truth_(inst_31226)){
var statearr_31334_33280 = state_31294__$1;
(statearr_31334_33280[(1)] = (16));

} else {
var statearr_31336_33281 = state_31294__$1;
(statearr_31336_33281[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (22))){
var inst_31247 = (state_31294[(14)]);
var inst_31248 = (state_31294[(10)]);
var inst_31246 = (state_31294[(2)]);
var inst_31247__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31246,(0),null);
var inst_31248__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31246,(1),null);
var inst_31249 = (inst_31247__$1 == null);
var inst_31250 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31248__$1,change);
var inst_31251 = ((inst_31249) || (inst_31250));
var state_31294__$1 = (function (){var statearr_31337 = state_31294;
(statearr_31337[(14)] = inst_31247__$1);

(statearr_31337[(10)] = inst_31248__$1);

return statearr_31337;
})();
if(cljs.core.truth_(inst_31251)){
var statearr_31338_33288 = state_31294__$1;
(statearr_31338_33288[(1)] = (23));

} else {
var statearr_31339_33289 = state_31294__$1;
(statearr_31339_33289[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (36))){
var inst_31238 = (state_31294[(12)]);
var inst_31210 = inst_31238;
var state_31294__$1 = (function (){var statearr_31340 = state_31294;
(statearr_31340[(7)] = inst_31210);

return statearr_31340;
})();
var statearr_31342_33291 = state_31294__$1;
(statearr_31342_33291[(2)] = null);

(statearr_31342_33291[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (29))){
var inst_31265 = (state_31294[(9)]);
var state_31294__$1 = state_31294;
var statearr_31343_33292 = state_31294__$1;
(statearr_31343_33292[(2)] = inst_31265);

(statearr_31343_33292[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (6))){
var state_31294__$1 = state_31294;
var statearr_31344_33294 = state_31294__$1;
(statearr_31344_33294[(2)] = false);

(statearr_31344_33294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (28))){
var inst_31259 = (state_31294[(2)]);
var inst_31261 = calc_state();
var inst_31210 = inst_31261;
var state_31294__$1 = (function (){var statearr_31345 = state_31294;
(statearr_31345[(15)] = inst_31259);

(statearr_31345[(7)] = inst_31210);

return statearr_31345;
})();
var statearr_31346_33296 = state_31294__$1;
(statearr_31346_33296[(2)] = null);

(statearr_31346_33296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (25))){
var inst_31290 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31347_33297 = state_31294__$1;
(statearr_31347_33297[(2)] = inst_31290);

(statearr_31347_33297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (34))){
var inst_31288 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31348_33298 = state_31294__$1;
(statearr_31348_33298[(2)] = inst_31288);

(statearr_31348_33298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (17))){
var state_31294__$1 = state_31294;
var statearr_31350_33299 = state_31294__$1;
(statearr_31350_33299[(2)] = false);

(statearr_31350_33299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (3))){
var state_31294__$1 = state_31294;
var statearr_31351_33301 = state_31294__$1;
(statearr_31351_33301[(2)] = false);

(statearr_31351_33301[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (12))){
var inst_31292 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31294__$1,inst_31292);
} else {
if((state_val_31295 === (2))){
var inst_31183 = (state_31294[(8)]);
var inst_31190 = inst_31183.cljs$lang$protocol_mask$partition0$;
var inst_31191 = (inst_31190 & (64));
var inst_31192 = inst_31183.cljs$core$ISeq$;
var inst_31193 = (cljs.core.PROTOCOL_SENTINEL === inst_31192);
var inst_31194 = ((inst_31191) || (inst_31193));
var state_31294__$1 = state_31294;
if(cljs.core.truth_(inst_31194)){
var statearr_31353_33308 = state_31294__$1;
(statearr_31353_33308[(1)] = (5));

} else {
var statearr_31354_33309 = state_31294__$1;
(statearr_31354_33309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (23))){
var inst_31247 = (state_31294[(14)]);
var inst_31253 = (inst_31247 == null);
var state_31294__$1 = state_31294;
if(cljs.core.truth_(inst_31253)){
var statearr_31355_33311 = state_31294__$1;
(statearr_31355_33311[(1)] = (26));

} else {
var statearr_31356_33312 = state_31294__$1;
(statearr_31356_33312[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (35))){
var inst_31277 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
if(cljs.core.truth_(inst_31277)){
var statearr_31360_33314 = state_31294__$1;
(statearr_31360_33314[(1)] = (36));

} else {
var statearr_31361_33315 = state_31294__$1;
(statearr_31361_33315[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (19))){
var inst_31210 = (state_31294[(7)]);
var inst_31235 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31210);
var state_31294__$1 = state_31294;
var statearr_31362_33316 = state_31294__$1;
(statearr_31362_33316[(2)] = inst_31235);

(statearr_31362_33316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (11))){
var inst_31210 = (state_31294[(7)]);
var inst_31217 = (inst_31210 == null);
var inst_31218 = cljs.core.not(inst_31217);
var state_31294__$1 = state_31294;
if(inst_31218){
var statearr_31363_33318 = state_31294__$1;
(statearr_31363_33318[(1)] = (13));

} else {
var statearr_31364_33319 = state_31294__$1;
(statearr_31364_33319[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (9))){
var inst_31183 = (state_31294[(8)]);
var state_31294__$1 = state_31294;
var statearr_31365_33320 = state_31294__$1;
(statearr_31365_33320[(2)] = inst_31183);

(statearr_31365_33320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (5))){
var state_31294__$1 = state_31294;
var statearr_31366_33321 = state_31294__$1;
(statearr_31366_33321[(2)] = true);

(statearr_31366_33321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (14))){
var state_31294__$1 = state_31294;
var statearr_31368_33324 = state_31294__$1;
(statearr_31368_33324[(2)] = false);

(statearr_31368_33324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (26))){
var inst_31248 = (state_31294[(10)]);
var inst_31256 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31248);
var state_31294__$1 = state_31294;
var statearr_31369_33326 = state_31294__$1;
(statearr_31369_33326[(2)] = inst_31256);

(statearr_31369_33326[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (16))){
var state_31294__$1 = state_31294;
var statearr_31370_33327 = state_31294__$1;
(statearr_31370_33327[(2)] = true);

(statearr_31370_33327[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (38))){
var inst_31283 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31371_33328 = state_31294__$1;
(statearr_31371_33328[(2)] = inst_31283);

(statearr_31371_33328[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (30))){
var inst_31240 = (state_31294[(13)]);
var inst_31248 = (state_31294[(10)]);
var inst_31239 = (state_31294[(11)]);
var inst_31268 = cljs.core.empty_QMARK_(inst_31239);
var inst_31269 = (inst_31240.cljs$core$IFn$_invoke$arity$1 ? inst_31240.cljs$core$IFn$_invoke$arity$1(inst_31248) : inst_31240.call(null,inst_31248));
var inst_31270 = cljs.core.not(inst_31269);
var inst_31271 = ((inst_31268) && (inst_31270));
var state_31294__$1 = state_31294;
var statearr_31372_33336 = state_31294__$1;
(statearr_31372_33336[(2)] = inst_31271);

(statearr_31372_33336[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (10))){
var inst_31183 = (state_31294[(8)]);
var inst_31206 = (state_31294[(2)]);
var inst_31207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31206,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31206,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31206,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31210 = inst_31183;
var state_31294__$1 = (function (){var statearr_31373 = state_31294;
(statearr_31373[(16)] = inst_31207);

(statearr_31373[(17)] = inst_31208);

(statearr_31373[(7)] = inst_31210);

(statearr_31373[(18)] = inst_31209);

return statearr_31373;
})();
var statearr_31374_33355 = state_31294__$1;
(statearr_31374_33355[(2)] = null);

(statearr_31374_33355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (18))){
var inst_31230 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31375_33361 = state_31294__$1;
(statearr_31375_33361[(2)] = inst_31230);

(statearr_31375_33361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (37))){
var state_31294__$1 = state_31294;
var statearr_31376_33372 = state_31294__$1;
(statearr_31376_33372[(2)] = null);

(statearr_31376_33372[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (8))){
var inst_31183 = (state_31294[(8)]);
var inst_31203 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31183);
var state_31294__$1 = state_31294;
var statearr_31377_33382 = state_31294__$1;
(statearr_31377_33382[(2)] = inst_31203);

(statearr_31377_33382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29295__auto__ = null;
var cljs$core$async$mix_$_state_machine__29295__auto____0 = (function (){
var statearr_31378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31378[(0)] = cljs$core$async$mix_$_state_machine__29295__auto__);

(statearr_31378[(1)] = (1));

return statearr_31378;
});
var cljs$core$async$mix_$_state_machine__29295__auto____1 = (function (state_31294){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_31294);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e31379){var ex__29298__auto__ = e31379;
var statearr_31380_33384 = state_31294;
(statearr_31380_33384[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_31294[(4)]))){
var statearr_31382_33385 = state_31294;
(statearr_31382_33385[(1)] = cljs.core.first((state_31294[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33389 = state_31294;
state_31294 = G__33389;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29295__auto__ = function(state_31294){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29295__auto____1.call(this,state_31294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29295__auto____0;
cljs$core$async$mix_$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29295__auto____1;
return cljs$core$async$mix_$_state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_31383 = f__29447__auto__();
(statearr_31383[(6)] = c__29446__auto___33256);

return statearr_31383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33391 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33391(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33394 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33394(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33401 = (function() {
var G__33402 = null;
var G__33402__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33402__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33402 = function(p,v){
switch(arguments.length){
case 1:
return G__33402__1.call(this,p);
case 2:
return G__33402__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33402.cljs$core$IFn$_invoke$arity$1 = G__33402__1;
G__33402.cljs$core$IFn$_invoke$arity$2 = G__33402__2;
return G__33402;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31403 = arguments.length;
switch (G__31403) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33401(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33401(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31412 = arguments.length;
switch (G__31412) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31404_SHARP_){
if(cljs.core.truth_((p1__31404_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31404_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31404_SHARP_.call(null,topic)))){
return p1__31404_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31404_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31432 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31433){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31433 = meta31433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31434,meta31433__$1){
var self__ = this;
var _31434__$1 = this;
return (new cljs.core.async.t_cljs$core$async31432(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31433__$1));
}));

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31434){
var self__ = this;
var _31434__$1 = this;
return self__.meta31433;
}));

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31433","meta31433",-295340531,null)], null);
}));

(cljs.core.async.t_cljs$core$async31432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31432");

(cljs.core.async.t_cljs$core$async31432.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31432.
 */
cljs.core.async.__GT_t_cljs$core$async31432 = (function cljs$core$async$__GT_t_cljs$core$async31432(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31433){
return (new cljs.core.async.t_cljs$core$async31432(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31433));
});

}

return (new cljs.core.async.t_cljs$core$async31432(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29446__auto___33426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_31521){
var state_val_31522 = (state_31521[(1)]);
if((state_val_31522 === (7))){
var inst_31516 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31524_33428 = state_31521__$1;
(statearr_31524_33428[(2)] = inst_31516);

(statearr_31524_33428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (20))){
var state_31521__$1 = state_31521;
var statearr_31526_33429 = state_31521__$1;
(statearr_31526_33429[(2)] = null);

(statearr_31526_33429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (1))){
var state_31521__$1 = state_31521;
var statearr_31528_33430 = state_31521__$1;
(statearr_31528_33430[(2)] = null);

(statearr_31528_33430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (24))){
var inst_31499 = (state_31521[(7)]);
var inst_31508 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31499);
var state_31521__$1 = state_31521;
var statearr_31529_33431 = state_31521__$1;
(statearr_31529_33431[(2)] = inst_31508);

(statearr_31529_33431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (4))){
var inst_31445 = (state_31521[(8)]);
var inst_31445__$1 = (state_31521[(2)]);
var inst_31446 = (inst_31445__$1 == null);
var state_31521__$1 = (function (){var statearr_31531 = state_31521;
(statearr_31531[(8)] = inst_31445__$1);

return statearr_31531;
})();
if(cljs.core.truth_(inst_31446)){
var statearr_31532_33432 = state_31521__$1;
(statearr_31532_33432[(1)] = (5));

} else {
var statearr_31533_33433 = state_31521__$1;
(statearr_31533_33433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (15))){
var inst_31493 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31534_33434 = state_31521__$1;
(statearr_31534_33434[(2)] = inst_31493);

(statearr_31534_33434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (21))){
var inst_31513 = (state_31521[(2)]);
var state_31521__$1 = (function (){var statearr_31535 = state_31521;
(statearr_31535[(9)] = inst_31513);

return statearr_31535;
})();
var statearr_31536_33435 = state_31521__$1;
(statearr_31536_33435[(2)] = null);

(statearr_31536_33435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (13))){
var inst_31469 = (state_31521[(10)]);
var inst_31471 = cljs.core.chunked_seq_QMARK_(inst_31469);
var state_31521__$1 = state_31521;
if(inst_31471){
var statearr_31537_33436 = state_31521__$1;
(statearr_31537_33436[(1)] = (16));

} else {
var statearr_31538_33437 = state_31521__$1;
(statearr_31538_33437[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (22))){
var inst_31505 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
if(cljs.core.truth_(inst_31505)){
var statearr_31539_33439 = state_31521__$1;
(statearr_31539_33439[(1)] = (23));

} else {
var statearr_31540_33440 = state_31521__$1;
(statearr_31540_33440[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (6))){
var inst_31499 = (state_31521[(7)]);
var inst_31501 = (state_31521[(11)]);
var inst_31445 = (state_31521[(8)]);
var inst_31499__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31445) : topic_fn.call(null,inst_31445));
var inst_31500 = cljs.core.deref(mults);
var inst_31501__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31500,inst_31499__$1);
var state_31521__$1 = (function (){var statearr_31541 = state_31521;
(statearr_31541[(7)] = inst_31499__$1);

(statearr_31541[(11)] = inst_31501__$1);

return statearr_31541;
})();
if(cljs.core.truth_(inst_31501__$1)){
var statearr_31544_33441 = state_31521__$1;
(statearr_31544_33441[(1)] = (19));

} else {
var statearr_31545_33442 = state_31521__$1;
(statearr_31545_33442[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (25))){
var inst_31510 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31546_33446 = state_31521__$1;
(statearr_31546_33446[(2)] = inst_31510);

(statearr_31546_33446[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (17))){
var inst_31469 = (state_31521[(10)]);
var inst_31481 = cljs.core.first(inst_31469);
var inst_31485 = cljs.core.async.muxch_STAR_(inst_31481);
var inst_31486 = cljs.core.async.close_BANG_(inst_31485);
var inst_31487 = cljs.core.next(inst_31469);
var inst_31455 = inst_31487;
var inst_31456 = null;
var inst_31457 = (0);
var inst_31458 = (0);
var state_31521__$1 = (function (){var statearr_31551 = state_31521;
(statearr_31551[(12)] = inst_31486);

(statearr_31551[(13)] = inst_31456);

(statearr_31551[(14)] = inst_31458);

(statearr_31551[(15)] = inst_31457);

(statearr_31551[(16)] = inst_31455);

return statearr_31551;
})();
var statearr_31553_33447 = state_31521__$1;
(statearr_31553_33447[(2)] = null);

(statearr_31553_33447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (3))){
var inst_31519 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31521__$1,inst_31519);
} else {
if((state_val_31522 === (12))){
var inst_31495 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31555_33449 = state_31521__$1;
(statearr_31555_33449[(2)] = inst_31495);

(statearr_31555_33449[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (2))){
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31521__$1,(4),ch);
} else {
if((state_val_31522 === (23))){
var state_31521__$1 = state_31521;
var statearr_31565_33451 = state_31521__$1;
(statearr_31565_33451[(2)] = null);

(statearr_31565_33451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (19))){
var inst_31501 = (state_31521[(11)]);
var inst_31445 = (state_31521[(8)]);
var inst_31503 = cljs.core.async.muxch_STAR_(inst_31501);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31521__$1,(22),inst_31503,inst_31445);
} else {
if((state_val_31522 === (11))){
var inst_31469 = (state_31521[(10)]);
var inst_31455 = (state_31521[(16)]);
var inst_31469__$1 = cljs.core.seq(inst_31455);
var state_31521__$1 = (function (){var statearr_31574 = state_31521;
(statearr_31574[(10)] = inst_31469__$1);

return statearr_31574;
})();
if(inst_31469__$1){
var statearr_31575_33452 = state_31521__$1;
(statearr_31575_33452[(1)] = (13));

} else {
var statearr_31576_33453 = state_31521__$1;
(statearr_31576_33453[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (9))){
var inst_31497 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31577_33454 = state_31521__$1;
(statearr_31577_33454[(2)] = inst_31497);

(statearr_31577_33454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (5))){
var inst_31452 = cljs.core.deref(mults);
var inst_31453 = cljs.core.vals(inst_31452);
var inst_31454 = cljs.core.seq(inst_31453);
var inst_31455 = inst_31454;
var inst_31456 = null;
var inst_31457 = (0);
var inst_31458 = (0);
var state_31521__$1 = (function (){var statearr_31578 = state_31521;
(statearr_31578[(13)] = inst_31456);

(statearr_31578[(14)] = inst_31458);

(statearr_31578[(15)] = inst_31457);

(statearr_31578[(16)] = inst_31455);

return statearr_31578;
})();
var statearr_31579_33457 = state_31521__$1;
(statearr_31579_33457[(2)] = null);

(statearr_31579_33457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (14))){
var state_31521__$1 = state_31521;
var statearr_31583_33458 = state_31521__$1;
(statearr_31583_33458[(2)] = null);

(statearr_31583_33458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (16))){
var inst_31469 = (state_31521[(10)]);
var inst_31473 = cljs.core.chunk_first(inst_31469);
var inst_31474 = cljs.core.chunk_rest(inst_31469);
var inst_31475 = cljs.core.count(inst_31473);
var inst_31455 = inst_31474;
var inst_31456 = inst_31473;
var inst_31457 = inst_31475;
var inst_31458 = (0);
var state_31521__$1 = (function (){var statearr_31584 = state_31521;
(statearr_31584[(13)] = inst_31456);

(statearr_31584[(14)] = inst_31458);

(statearr_31584[(15)] = inst_31457);

(statearr_31584[(16)] = inst_31455);

return statearr_31584;
})();
var statearr_31585_33460 = state_31521__$1;
(statearr_31585_33460[(2)] = null);

(statearr_31585_33460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (10))){
var inst_31456 = (state_31521[(13)]);
var inst_31458 = (state_31521[(14)]);
var inst_31457 = (state_31521[(15)]);
var inst_31455 = (state_31521[(16)]);
var inst_31463 = cljs.core._nth(inst_31456,inst_31458);
var inst_31464 = cljs.core.async.muxch_STAR_(inst_31463);
var inst_31465 = cljs.core.async.close_BANG_(inst_31464);
var inst_31466 = (inst_31458 + (1));
var tmp31580 = inst_31456;
var tmp31581 = inst_31457;
var tmp31582 = inst_31455;
var inst_31455__$1 = tmp31582;
var inst_31456__$1 = tmp31580;
var inst_31457__$1 = tmp31581;
var inst_31458__$1 = inst_31466;
var state_31521__$1 = (function (){var statearr_31586 = state_31521;
(statearr_31586[(13)] = inst_31456__$1);

(statearr_31586[(14)] = inst_31458__$1);

(statearr_31586[(15)] = inst_31457__$1);

(statearr_31586[(17)] = inst_31465);

(statearr_31586[(16)] = inst_31455__$1);

return statearr_31586;
})();
var statearr_31587_33462 = state_31521__$1;
(statearr_31587_33462[(2)] = null);

(statearr_31587_33462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (18))){
var inst_31490 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31588_33463 = state_31521__$1;
(statearr_31588_33463[(2)] = inst_31490);

(statearr_31588_33463[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (8))){
var inst_31458 = (state_31521[(14)]);
var inst_31457 = (state_31521[(15)]);
var inst_31460 = (inst_31458 < inst_31457);
var inst_31461 = inst_31460;
var state_31521__$1 = state_31521;
if(cljs.core.truth_(inst_31461)){
var statearr_31589_33465 = state_31521__$1;
(statearr_31589_33465[(1)] = (10));

} else {
var statearr_31590_33466 = state_31521__$1;
(statearr_31590_33466[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29295__auto__ = null;
var cljs$core$async$state_machine__29295__auto____0 = (function (){
var statearr_31591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31591[(0)] = cljs$core$async$state_machine__29295__auto__);

(statearr_31591[(1)] = (1));

return statearr_31591;
});
var cljs$core$async$state_machine__29295__auto____1 = (function (state_31521){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_31521);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e31592){var ex__29298__auto__ = e31592;
var statearr_31593_33468 = state_31521;
(statearr_31593_33468[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_31521[(4)]))){
var statearr_31594_33469 = state_31521;
(statearr_31594_33469[(1)] = cljs.core.first((state_31521[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33470 = state_31521;
state_31521 = G__33470;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$state_machine__29295__auto__ = function(state_31521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29295__auto____1.call(this,state_31521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29295__auto____0;
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29295__auto____1;
return cljs$core$async$state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_31595 = f__29447__auto__();
(statearr_31595[(6)] = c__29446__auto___33426);

return statearr_31595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31598 = arguments.length;
switch (G__31598) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31611 = arguments.length;
switch (G__31611) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31613 = arguments.length;
switch (G__31613) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29446__auto___33489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_31658){
var state_val_31659 = (state_31658[(1)]);
if((state_val_31659 === (7))){
var state_31658__$1 = state_31658;
var statearr_31664_33490 = state_31658__$1;
(statearr_31664_33490[(2)] = null);

(statearr_31664_33490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (1))){
var state_31658__$1 = state_31658;
var statearr_31665_33491 = state_31658__$1;
(statearr_31665_33491[(2)] = null);

(statearr_31665_33491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (4))){
var inst_31619 = (state_31658[(7)]);
var inst_31618 = (state_31658[(8)]);
var inst_31621 = (inst_31619 < inst_31618);
var state_31658__$1 = state_31658;
if(cljs.core.truth_(inst_31621)){
var statearr_31666_33492 = state_31658__$1;
(statearr_31666_33492[(1)] = (6));

} else {
var statearr_31667_33493 = state_31658__$1;
(statearr_31667_33493[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (15))){
var inst_31644 = (state_31658[(9)]);
var inst_31649 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31644);
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31658__$1,(17),out,inst_31649);
} else {
if((state_val_31659 === (13))){
var inst_31644 = (state_31658[(9)]);
var inst_31644__$1 = (state_31658[(2)]);
var inst_31645 = cljs.core.some(cljs.core.nil_QMARK_,inst_31644__$1);
var state_31658__$1 = (function (){var statearr_31668 = state_31658;
(statearr_31668[(9)] = inst_31644__$1);

return statearr_31668;
})();
if(cljs.core.truth_(inst_31645)){
var statearr_31669_33494 = state_31658__$1;
(statearr_31669_33494[(1)] = (14));

} else {
var statearr_31670_33495 = state_31658__$1;
(statearr_31670_33495[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (6))){
var state_31658__$1 = state_31658;
var statearr_31671_33496 = state_31658__$1;
(statearr_31671_33496[(2)] = null);

(statearr_31671_33496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (17))){
var inst_31651 = (state_31658[(2)]);
var state_31658__$1 = (function (){var statearr_31674 = state_31658;
(statearr_31674[(10)] = inst_31651);

return statearr_31674;
})();
var statearr_31676_33497 = state_31658__$1;
(statearr_31676_33497[(2)] = null);

(statearr_31676_33497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (3))){
var inst_31656 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31658__$1,inst_31656);
} else {
if((state_val_31659 === (12))){
var _ = (function (){var statearr_31681 = state_31658;
(statearr_31681[(4)] = cljs.core.rest((state_31658[(4)])));

return statearr_31681;
})();
var state_31658__$1 = state_31658;
var ex31672 = (state_31658__$1[(2)]);
var statearr_31682_33498 = state_31658__$1;
(statearr_31682_33498[(5)] = ex31672);


if((ex31672 instanceof Object)){
var statearr_31683_33499 = state_31658__$1;
(statearr_31683_33499[(1)] = (11));

(statearr_31683_33499[(5)] = null);

} else {
throw ex31672;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (2))){
var inst_31617 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31618 = cnt;
var inst_31619 = (0);
var state_31658__$1 = (function (){var statearr_31688 = state_31658;
(statearr_31688[(7)] = inst_31619);

(statearr_31688[(8)] = inst_31618);

(statearr_31688[(11)] = inst_31617);

return statearr_31688;
})();
var statearr_31689_33500 = state_31658__$1;
(statearr_31689_33500[(2)] = null);

(statearr_31689_33500[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (11))){
var inst_31623 = (state_31658[(2)]);
var inst_31624 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31658__$1 = (function (){var statearr_31692 = state_31658;
(statearr_31692[(12)] = inst_31623);

return statearr_31692;
})();
var statearr_31695_33501 = state_31658__$1;
(statearr_31695_33501[(2)] = inst_31624);

(statearr_31695_33501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (9))){
var inst_31619 = (state_31658[(7)]);
var _ = (function (){var statearr_31698 = state_31658;
(statearr_31698[(4)] = cljs.core.cons((12),(state_31658[(4)])));

return statearr_31698;
})();
var inst_31630 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31619) : chs__$1.call(null,inst_31619));
var inst_31631 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31619) : done.call(null,inst_31619));
var inst_31632 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31630,inst_31631);
var ___$1 = (function (){var statearr_31699 = state_31658;
(statearr_31699[(4)] = cljs.core.rest((state_31658[(4)])));

return statearr_31699;
})();
var state_31658__$1 = state_31658;
var statearr_31700_33502 = state_31658__$1;
(statearr_31700_33502[(2)] = inst_31632);

(statearr_31700_33502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (5))){
var inst_31642 = (state_31658[(2)]);
var state_31658__$1 = (function (){var statearr_31702 = state_31658;
(statearr_31702[(13)] = inst_31642);

return statearr_31702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31658__$1,(13),dchan);
} else {
if((state_val_31659 === (14))){
var inst_31647 = cljs.core.async.close_BANG_(out);
var state_31658__$1 = state_31658;
var statearr_31705_33503 = state_31658__$1;
(statearr_31705_33503[(2)] = inst_31647);

(statearr_31705_33503[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (16))){
var inst_31654 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31706_33504 = state_31658__$1;
(statearr_31706_33504[(2)] = inst_31654);

(statearr_31706_33504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (10))){
var inst_31619 = (state_31658[(7)]);
var inst_31635 = (state_31658[(2)]);
var inst_31636 = (inst_31619 + (1));
var inst_31619__$1 = inst_31636;
var state_31658__$1 = (function (){var statearr_31707 = state_31658;
(statearr_31707[(7)] = inst_31619__$1);

(statearr_31707[(14)] = inst_31635);

return statearr_31707;
})();
var statearr_31708_33505 = state_31658__$1;
(statearr_31708_33505[(2)] = null);

(statearr_31708_33505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (8))){
var inst_31640 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31709_33506 = state_31658__$1;
(statearr_31709_33506[(2)] = inst_31640);

(statearr_31709_33506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29295__auto__ = null;
var cljs$core$async$state_machine__29295__auto____0 = (function (){
var statearr_31713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31713[(0)] = cljs$core$async$state_machine__29295__auto__);

(statearr_31713[(1)] = (1));

return statearr_31713;
});
var cljs$core$async$state_machine__29295__auto____1 = (function (state_31658){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_31658);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e31714){var ex__29298__auto__ = e31714;
var statearr_31715_33507 = state_31658;
(statearr_31715_33507[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_31658[(4)]))){
var statearr_31716_33508 = state_31658;
(statearr_31716_33508[(1)] = cljs.core.first((state_31658[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33509 = state_31658;
state_31658 = G__33509;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$state_machine__29295__auto__ = function(state_31658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29295__auto____1.call(this,state_31658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29295__auto____0;
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29295__auto____1;
return cljs$core$async$state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_31717 = f__29447__auto__();
(statearr_31717[(6)] = c__29446__auto___33489);

return statearr_31717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31721 = arguments.length;
switch (G__31721) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29446__auto___33511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_31755){
var state_val_31756 = (state_31755[(1)]);
if((state_val_31756 === (7))){
var inst_31733 = (state_31755[(7)]);
var inst_31734 = (state_31755[(8)]);
var inst_31733__$1 = (state_31755[(2)]);
var inst_31734__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31733__$1,(0),null);
var inst_31735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31733__$1,(1),null);
var inst_31736 = (inst_31734__$1 == null);
var state_31755__$1 = (function (){var statearr_31758 = state_31755;
(statearr_31758[(9)] = inst_31735);

(statearr_31758[(7)] = inst_31733__$1);

(statearr_31758[(8)] = inst_31734__$1);

return statearr_31758;
})();
if(cljs.core.truth_(inst_31736)){
var statearr_31759_33519 = state_31755__$1;
(statearr_31759_33519[(1)] = (8));

} else {
var statearr_31760_33523 = state_31755__$1;
(statearr_31760_33523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (1))){
var inst_31723 = cljs.core.vec(chs);
var inst_31724 = inst_31723;
var state_31755__$1 = (function (){var statearr_31761 = state_31755;
(statearr_31761[(10)] = inst_31724);

return statearr_31761;
})();
var statearr_31762_33524 = state_31755__$1;
(statearr_31762_33524[(2)] = null);

(statearr_31762_33524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (4))){
var inst_31724 = (state_31755[(10)]);
var state_31755__$1 = state_31755;
return cljs.core.async.ioc_alts_BANG_(state_31755__$1,(7),inst_31724);
} else {
if((state_val_31756 === (6))){
var inst_31750 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31763_33525 = state_31755__$1;
(statearr_31763_33525[(2)] = inst_31750);

(statearr_31763_33525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (3))){
var inst_31752 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31755__$1,inst_31752);
} else {
if((state_val_31756 === (2))){
var inst_31724 = (state_31755[(10)]);
var inst_31726 = cljs.core.count(inst_31724);
var inst_31727 = (inst_31726 > (0));
var state_31755__$1 = state_31755;
if(cljs.core.truth_(inst_31727)){
var statearr_31765_33529 = state_31755__$1;
(statearr_31765_33529[(1)] = (4));

} else {
var statearr_31766_33530 = state_31755__$1;
(statearr_31766_33530[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (11))){
var inst_31724 = (state_31755[(10)]);
var inst_31743 = (state_31755[(2)]);
var tmp31764 = inst_31724;
var inst_31724__$1 = tmp31764;
var state_31755__$1 = (function (){var statearr_31767 = state_31755;
(statearr_31767[(10)] = inst_31724__$1);

(statearr_31767[(11)] = inst_31743);

return statearr_31767;
})();
var statearr_31768_33534 = state_31755__$1;
(statearr_31768_33534[(2)] = null);

(statearr_31768_33534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (9))){
var inst_31734 = (state_31755[(8)]);
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31755__$1,(11),out,inst_31734);
} else {
if((state_val_31756 === (5))){
var inst_31748 = cljs.core.async.close_BANG_(out);
var state_31755__$1 = state_31755;
var statearr_31769_33535 = state_31755__$1;
(statearr_31769_33535[(2)] = inst_31748);

(statearr_31769_33535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (10))){
var inst_31746 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31770_33536 = state_31755__$1;
(statearr_31770_33536[(2)] = inst_31746);

(statearr_31770_33536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (8))){
var inst_31735 = (state_31755[(9)]);
var inst_31733 = (state_31755[(7)]);
var inst_31734 = (state_31755[(8)]);
var inst_31724 = (state_31755[(10)]);
var inst_31738 = (function (){var cs = inst_31724;
var vec__31729 = inst_31733;
var v = inst_31734;
var c = inst_31735;
return (function (p1__31718_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31718_SHARP_);
});
})();
var inst_31739 = cljs.core.filterv(inst_31738,inst_31724);
var inst_31724__$1 = inst_31739;
var state_31755__$1 = (function (){var statearr_31771 = state_31755;
(statearr_31771[(10)] = inst_31724__$1);

return statearr_31771;
})();
var statearr_31772_33540 = state_31755__$1;
(statearr_31772_33540[(2)] = null);

(statearr_31772_33540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29295__auto__ = null;
var cljs$core$async$state_machine__29295__auto____0 = (function (){
var statearr_31773 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31773[(0)] = cljs$core$async$state_machine__29295__auto__);

(statearr_31773[(1)] = (1));

return statearr_31773;
});
var cljs$core$async$state_machine__29295__auto____1 = (function (state_31755){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_31755);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e31774){var ex__29298__auto__ = e31774;
var statearr_31775_33542 = state_31755;
(statearr_31775_33542[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_31755[(4)]))){
var statearr_31780_33543 = state_31755;
(statearr_31780_33543[(1)] = cljs.core.first((state_31755[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33547 = state_31755;
state_31755 = G__33547;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$state_machine__29295__auto__ = function(state_31755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29295__auto____1.call(this,state_31755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29295__auto____0;
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29295__auto____1;
return cljs$core$async$state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_31785 = f__29447__auto__();
(statearr_31785[(6)] = c__29446__auto___33511);

return statearr_31785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31793 = arguments.length;
switch (G__31793) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29446__auto___33561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_31818){
var state_val_31819 = (state_31818[(1)]);
if((state_val_31819 === (7))){
var inst_31800 = (state_31818[(7)]);
var inst_31800__$1 = (state_31818[(2)]);
var inst_31801 = (inst_31800__$1 == null);
var inst_31802 = cljs.core.not(inst_31801);
var state_31818__$1 = (function (){var statearr_31825 = state_31818;
(statearr_31825[(7)] = inst_31800__$1);

return statearr_31825;
})();
if(inst_31802){
var statearr_31826_33562 = state_31818__$1;
(statearr_31826_33562[(1)] = (8));

} else {
var statearr_31827_33563 = state_31818__$1;
(statearr_31827_33563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (1))){
var inst_31795 = (0);
var state_31818__$1 = (function (){var statearr_31828 = state_31818;
(statearr_31828[(8)] = inst_31795);

return statearr_31828;
})();
var statearr_31829_33564 = state_31818__$1;
(statearr_31829_33564[(2)] = null);

(statearr_31829_33564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (4))){
var state_31818__$1 = state_31818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31818__$1,(7),ch);
} else {
if((state_val_31819 === (6))){
var inst_31813 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
var statearr_31830_33565 = state_31818__$1;
(statearr_31830_33565[(2)] = inst_31813);

(statearr_31830_33565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (3))){
var inst_31815 = (state_31818[(2)]);
var inst_31816 = cljs.core.async.close_BANG_(out);
var state_31818__$1 = (function (){var statearr_31833 = state_31818;
(statearr_31833[(9)] = inst_31815);

return statearr_31833;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31818__$1,inst_31816);
} else {
if((state_val_31819 === (2))){
var inst_31795 = (state_31818[(8)]);
var inst_31797 = (inst_31795 < n);
var state_31818__$1 = state_31818;
if(cljs.core.truth_(inst_31797)){
var statearr_31835_33567 = state_31818__$1;
(statearr_31835_33567[(1)] = (4));

} else {
var statearr_31836_33573 = state_31818__$1;
(statearr_31836_33573[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (11))){
var inst_31795 = (state_31818[(8)]);
var inst_31805 = (state_31818[(2)]);
var inst_31806 = (inst_31795 + (1));
var inst_31795__$1 = inst_31806;
var state_31818__$1 = (function (){var statearr_31837 = state_31818;
(statearr_31837[(10)] = inst_31805);

(statearr_31837[(8)] = inst_31795__$1);

return statearr_31837;
})();
var statearr_31838_33574 = state_31818__$1;
(statearr_31838_33574[(2)] = null);

(statearr_31838_33574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (9))){
var state_31818__$1 = state_31818;
var statearr_31839_33575 = state_31818__$1;
(statearr_31839_33575[(2)] = null);

(statearr_31839_33575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (5))){
var state_31818__$1 = state_31818;
var statearr_31840_33576 = state_31818__$1;
(statearr_31840_33576[(2)] = null);

(statearr_31840_33576[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (10))){
var inst_31810 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
var statearr_31841_33577 = state_31818__$1;
(statearr_31841_33577[(2)] = inst_31810);

(statearr_31841_33577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (8))){
var inst_31800 = (state_31818[(7)]);
var state_31818__$1 = state_31818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31818__$1,(11),out,inst_31800);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29295__auto__ = null;
var cljs$core$async$state_machine__29295__auto____0 = (function (){
var statearr_31847 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31847[(0)] = cljs$core$async$state_machine__29295__auto__);

(statearr_31847[(1)] = (1));

return statearr_31847;
});
var cljs$core$async$state_machine__29295__auto____1 = (function (state_31818){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_31818);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e31849){var ex__29298__auto__ = e31849;
var statearr_31853_33578 = state_31818;
(statearr_31853_33578[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_31818[(4)]))){
var statearr_31854_33579 = state_31818;
(statearr_31854_33579[(1)] = cljs.core.first((state_31818[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33580 = state_31818;
state_31818 = G__33580;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$state_machine__29295__auto__ = function(state_31818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29295__auto____1.call(this,state_31818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29295__auto____0;
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29295__auto____1;
return cljs$core$async$state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_31858 = f__29447__auto__();
(statearr_31858[(6)] = c__29446__auto___33561);

return statearr_31858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31865 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31865 = (function (f,ch,meta31866){
this.f = f;
this.ch = ch;
this.meta31866 = meta31866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31867,meta31866__$1){
var self__ = this;
var _31867__$1 = this;
return (new cljs.core.async.t_cljs$core$async31865(self__.f,self__.ch,meta31866__$1));
}));

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31867){
var self__ = this;
var _31867__$1 = this;
return self__.meta31866;
}));

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31870 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31870 = (function (f,ch,meta31866,_,fn1,meta31871){
this.f = f;
this.ch = ch;
this.meta31866 = meta31866;
this._ = _;
this.fn1 = fn1;
this.meta31871 = meta31871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31872,meta31871__$1){
var self__ = this;
var _31872__$1 = this;
return (new cljs.core.async.t_cljs$core$async31870(self__.f,self__.ch,self__.meta31866,self__._,self__.fn1,meta31871__$1));
}));

(cljs.core.async.t_cljs$core$async31870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31872){
var self__ = this;
var _31872__$1 = this;
return self__.meta31871;
}));

(cljs.core.async.t_cljs$core$async31870.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31870.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31870.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31870.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31864_SHARP_){
var G__31875 = (((p1__31864_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31864_SHARP_) : self__.f.call(null,p1__31864_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31875) : f1.call(null,G__31875));
});
}));

(cljs.core.async.t_cljs$core$async31870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31866","meta31866",85403450,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31865","cljs.core.async/t_cljs$core$async31865",-194169821,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31871","meta31871",1381261493,null)], null);
}));

(cljs.core.async.t_cljs$core$async31870.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31870");

(cljs.core.async.t_cljs$core$async31870.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31870");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31870.
 */
cljs.core.async.__GT_t_cljs$core$async31870 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31870(f__$1,ch__$1,meta31866__$1,___$2,fn1__$1,meta31871){
return (new cljs.core.async.t_cljs$core$async31870(f__$1,ch__$1,meta31866__$1,___$2,fn1__$1,meta31871));
});

}

return (new cljs.core.async.t_cljs$core$async31870(self__.f,self__.ch,self__.meta31866,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31879 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31879) : self__.f.call(null,G__31879));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31866","meta31866",85403450,null)], null);
}));

(cljs.core.async.t_cljs$core$async31865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31865");

(cljs.core.async.t_cljs$core$async31865.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31865.
 */
cljs.core.async.__GT_t_cljs$core$async31865 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31865(f__$1,ch__$1,meta31866){
return (new cljs.core.async.t_cljs$core$async31865(f__$1,ch__$1,meta31866));
});

}

return (new cljs.core.async.t_cljs$core$async31865(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31889 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31889 = (function (f,ch,meta31890){
this.f = f;
this.ch = ch;
this.meta31890 = meta31890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31891,meta31890__$1){
var self__ = this;
var _31891__$1 = this;
return (new cljs.core.async.t_cljs$core$async31889(self__.f,self__.ch,meta31890__$1));
}));

(cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31891){
var self__ = this;
var _31891__$1 = this;
return self__.meta31890;
}));

(cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31890","meta31890",919819512,null)], null);
}));

(cljs.core.async.t_cljs$core$async31889.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31889");

(cljs.core.async.t_cljs$core$async31889.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31889");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31889.
 */
cljs.core.async.__GT_t_cljs$core$async31889 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31889(f__$1,ch__$1,meta31890){
return (new cljs.core.async.t_cljs$core$async31889(f__$1,ch__$1,meta31890));
});

}

return (new cljs.core.async.t_cljs$core$async31889(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31905 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31905 = (function (p,ch,meta31906){
this.p = p;
this.ch = ch;
this.meta31906 = meta31906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31907,meta31906__$1){
var self__ = this;
var _31907__$1 = this;
return (new cljs.core.async.t_cljs$core$async31905(self__.p,self__.ch,meta31906__$1));
}));

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31907){
var self__ = this;
var _31907__$1 = this;
return self__.meta31906;
}));

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31906","meta31906",-1876277531,null)], null);
}));

(cljs.core.async.t_cljs$core$async31905.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31905");

(cljs.core.async.t_cljs$core$async31905.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31905");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31905.
 */
cljs.core.async.__GT_t_cljs$core$async31905 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31905(p__$1,ch__$1,meta31906){
return (new cljs.core.async.t_cljs$core$async31905(p__$1,ch__$1,meta31906));
});

}

return (new cljs.core.async.t_cljs$core$async31905(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31934 = arguments.length;
switch (G__31934) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29446__auto___33598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_31959){
var state_val_31960 = (state_31959[(1)]);
if((state_val_31960 === (7))){
var inst_31952 = (state_31959[(2)]);
var state_31959__$1 = state_31959;
var statearr_31964_33599 = state_31959__$1;
(statearr_31964_33599[(2)] = inst_31952);

(statearr_31964_33599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (1))){
var state_31959__$1 = state_31959;
var statearr_31965_33600 = state_31959__$1;
(statearr_31965_33600[(2)] = null);

(statearr_31965_33600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (4))){
var inst_31937 = (state_31959[(7)]);
var inst_31937__$1 = (state_31959[(2)]);
var inst_31938 = (inst_31937__$1 == null);
var state_31959__$1 = (function (){var statearr_31966 = state_31959;
(statearr_31966[(7)] = inst_31937__$1);

return statearr_31966;
})();
if(cljs.core.truth_(inst_31938)){
var statearr_31967_33601 = state_31959__$1;
(statearr_31967_33601[(1)] = (5));

} else {
var statearr_31968_33602 = state_31959__$1;
(statearr_31968_33602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (6))){
var inst_31937 = (state_31959[(7)]);
var inst_31942 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31937) : p.call(null,inst_31937));
var state_31959__$1 = state_31959;
if(cljs.core.truth_(inst_31942)){
var statearr_31969_33603 = state_31959__$1;
(statearr_31969_33603[(1)] = (8));

} else {
var statearr_31970_33604 = state_31959__$1;
(statearr_31970_33604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (3))){
var inst_31954 = (state_31959[(2)]);
var state_31959__$1 = state_31959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31959__$1,inst_31954);
} else {
if((state_val_31960 === (2))){
var state_31959__$1 = state_31959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31959__$1,(4),ch);
} else {
if((state_val_31960 === (11))){
var inst_31946 = (state_31959[(2)]);
var state_31959__$1 = state_31959;
var statearr_31975_33605 = state_31959__$1;
(statearr_31975_33605[(2)] = inst_31946);

(statearr_31975_33605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (9))){
var state_31959__$1 = state_31959;
var statearr_31976_33606 = state_31959__$1;
(statearr_31976_33606[(2)] = null);

(statearr_31976_33606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (5))){
var inst_31940 = cljs.core.async.close_BANG_(out);
var state_31959__$1 = state_31959;
var statearr_31977_33613 = state_31959__$1;
(statearr_31977_33613[(2)] = inst_31940);

(statearr_31977_33613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (10))){
var inst_31949 = (state_31959[(2)]);
var state_31959__$1 = (function (){var statearr_31978 = state_31959;
(statearr_31978[(8)] = inst_31949);

return statearr_31978;
})();
var statearr_31979_33614 = state_31959__$1;
(statearr_31979_33614[(2)] = null);

(statearr_31979_33614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (8))){
var inst_31937 = (state_31959[(7)]);
var state_31959__$1 = state_31959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31959__$1,(11),out,inst_31937);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29295__auto__ = null;
var cljs$core$async$state_machine__29295__auto____0 = (function (){
var statearr_31980 = [null,null,null,null,null,null,null,null,null];
(statearr_31980[(0)] = cljs$core$async$state_machine__29295__auto__);

(statearr_31980[(1)] = (1));

return statearr_31980;
});
var cljs$core$async$state_machine__29295__auto____1 = (function (state_31959){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_31959);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e31986){var ex__29298__auto__ = e31986;
var statearr_31987_33617 = state_31959;
(statearr_31987_33617[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_31959[(4)]))){
var statearr_31988_33619 = state_31959;
(statearr_31988_33619[(1)] = cljs.core.first((state_31959[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33622 = state_31959;
state_31959 = G__33622;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$state_machine__29295__auto__ = function(state_31959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29295__auto____1.call(this,state_31959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29295__auto____0;
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29295__auto____1;
return cljs$core$async$state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_31990 = f__29447__auto__();
(statearr_31990[(6)] = c__29446__auto___33598);

return statearr_31990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32020 = arguments.length;
switch (G__32020) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29446__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_32089){
var state_val_32090 = (state_32089[(1)]);
if((state_val_32090 === (7))){
var inst_32085 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
var statearr_32093_33627 = state_32089__$1;
(statearr_32093_33627[(2)] = inst_32085);

(statearr_32093_33627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (20))){
var inst_32054 = (state_32089[(7)]);
var inst_32065 = (state_32089[(2)]);
var inst_32067 = cljs.core.next(inst_32054);
var inst_32040 = inst_32067;
var inst_32041 = null;
var inst_32042 = (0);
var inst_32043 = (0);
var state_32089__$1 = (function (){var statearr_32094 = state_32089;
(statearr_32094[(8)] = inst_32043);

(statearr_32094[(9)] = inst_32065);

(statearr_32094[(10)] = inst_32042);

(statearr_32094[(11)] = inst_32041);

(statearr_32094[(12)] = inst_32040);

return statearr_32094;
})();
var statearr_32095_33628 = state_32089__$1;
(statearr_32095_33628[(2)] = null);

(statearr_32095_33628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (1))){
var state_32089__$1 = state_32089;
var statearr_32096_33629 = state_32089__$1;
(statearr_32096_33629[(2)] = null);

(statearr_32096_33629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (4))){
var inst_32028 = (state_32089[(13)]);
var inst_32028__$1 = (state_32089[(2)]);
var inst_32030 = (inst_32028__$1 == null);
var state_32089__$1 = (function (){var statearr_32097 = state_32089;
(statearr_32097[(13)] = inst_32028__$1);

return statearr_32097;
})();
if(cljs.core.truth_(inst_32030)){
var statearr_32098_33630 = state_32089__$1;
(statearr_32098_33630[(1)] = (5));

} else {
var statearr_32099_33631 = state_32089__$1;
(statearr_32099_33631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (15))){
var state_32089__$1 = state_32089;
var statearr_32103_33632 = state_32089__$1;
(statearr_32103_33632[(2)] = null);

(statearr_32103_33632[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (21))){
var state_32089__$1 = state_32089;
var statearr_32104_33633 = state_32089__$1;
(statearr_32104_33633[(2)] = null);

(statearr_32104_33633[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (13))){
var inst_32043 = (state_32089[(8)]);
var inst_32042 = (state_32089[(10)]);
var inst_32041 = (state_32089[(11)]);
var inst_32040 = (state_32089[(12)]);
var inst_32050 = (state_32089[(2)]);
var inst_32051 = (inst_32043 + (1));
var tmp32100 = inst_32042;
var tmp32101 = inst_32041;
var tmp32102 = inst_32040;
var inst_32040__$1 = tmp32102;
var inst_32041__$1 = tmp32101;
var inst_32042__$1 = tmp32100;
var inst_32043__$1 = inst_32051;
var state_32089__$1 = (function (){var statearr_32105 = state_32089;
(statearr_32105[(8)] = inst_32043__$1);

(statearr_32105[(14)] = inst_32050);

(statearr_32105[(10)] = inst_32042__$1);

(statearr_32105[(11)] = inst_32041__$1);

(statearr_32105[(12)] = inst_32040__$1);

return statearr_32105;
})();
var statearr_32107_33635 = state_32089__$1;
(statearr_32107_33635[(2)] = null);

(statearr_32107_33635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (22))){
var state_32089__$1 = state_32089;
var statearr_32108_33636 = state_32089__$1;
(statearr_32108_33636[(2)] = null);

(statearr_32108_33636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (6))){
var inst_32028 = (state_32089[(13)]);
var inst_32038 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32028) : f.call(null,inst_32028));
var inst_32039 = cljs.core.seq(inst_32038);
var inst_32040 = inst_32039;
var inst_32041 = null;
var inst_32042 = (0);
var inst_32043 = (0);
var state_32089__$1 = (function (){var statearr_32114 = state_32089;
(statearr_32114[(8)] = inst_32043);

(statearr_32114[(10)] = inst_32042);

(statearr_32114[(11)] = inst_32041);

(statearr_32114[(12)] = inst_32040);

return statearr_32114;
})();
var statearr_32116_33638 = state_32089__$1;
(statearr_32116_33638[(2)] = null);

(statearr_32116_33638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (17))){
var inst_32054 = (state_32089[(7)]);
var inst_32058 = cljs.core.chunk_first(inst_32054);
var inst_32059 = cljs.core.chunk_rest(inst_32054);
var inst_32060 = cljs.core.count(inst_32058);
var inst_32040 = inst_32059;
var inst_32041 = inst_32058;
var inst_32042 = inst_32060;
var inst_32043 = (0);
var state_32089__$1 = (function (){var statearr_32120 = state_32089;
(statearr_32120[(8)] = inst_32043);

(statearr_32120[(10)] = inst_32042);

(statearr_32120[(11)] = inst_32041);

(statearr_32120[(12)] = inst_32040);

return statearr_32120;
})();
var statearr_32121_33640 = state_32089__$1;
(statearr_32121_33640[(2)] = null);

(statearr_32121_33640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (3))){
var inst_32087 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32089__$1,inst_32087);
} else {
if((state_val_32090 === (12))){
var inst_32075 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
var statearr_32122_33642 = state_32089__$1;
(statearr_32122_33642[(2)] = inst_32075);

(statearr_32122_33642[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (2))){
var state_32089__$1 = state_32089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32089__$1,(4),in$);
} else {
if((state_val_32090 === (23))){
var inst_32083 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
var statearr_32126_33643 = state_32089__$1;
(statearr_32126_33643[(2)] = inst_32083);

(statearr_32126_33643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (19))){
var inst_32070 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
var statearr_32127_33644 = state_32089__$1;
(statearr_32127_33644[(2)] = inst_32070);

(statearr_32127_33644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (11))){
var inst_32054 = (state_32089[(7)]);
var inst_32040 = (state_32089[(12)]);
var inst_32054__$1 = cljs.core.seq(inst_32040);
var state_32089__$1 = (function (){var statearr_32131 = state_32089;
(statearr_32131[(7)] = inst_32054__$1);

return statearr_32131;
})();
if(inst_32054__$1){
var statearr_32132_33646 = state_32089__$1;
(statearr_32132_33646[(1)] = (14));

} else {
var statearr_32133_33647 = state_32089__$1;
(statearr_32133_33647[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (9))){
var inst_32077 = (state_32089[(2)]);
var inst_32078 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32089__$1 = (function (){var statearr_32139 = state_32089;
(statearr_32139[(15)] = inst_32077);

return statearr_32139;
})();
if(cljs.core.truth_(inst_32078)){
var statearr_32140_33648 = state_32089__$1;
(statearr_32140_33648[(1)] = (21));

} else {
var statearr_32141_33649 = state_32089__$1;
(statearr_32141_33649[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (5))){
var inst_32032 = cljs.core.async.close_BANG_(out);
var state_32089__$1 = state_32089;
var statearr_32142_33650 = state_32089__$1;
(statearr_32142_33650[(2)] = inst_32032);

(statearr_32142_33650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (14))){
var inst_32054 = (state_32089[(7)]);
var inst_32056 = cljs.core.chunked_seq_QMARK_(inst_32054);
var state_32089__$1 = state_32089;
if(inst_32056){
var statearr_32143_33652 = state_32089__$1;
(statearr_32143_33652[(1)] = (17));

} else {
var statearr_32144_33653 = state_32089__$1;
(statearr_32144_33653[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (16))){
var inst_32073 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
var statearr_32145_33654 = state_32089__$1;
(statearr_32145_33654[(2)] = inst_32073);

(statearr_32145_33654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (10))){
var inst_32043 = (state_32089[(8)]);
var inst_32041 = (state_32089[(11)]);
var inst_32048 = cljs.core._nth(inst_32041,inst_32043);
var state_32089__$1 = state_32089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32089__$1,(13),out,inst_32048);
} else {
if((state_val_32090 === (18))){
var inst_32054 = (state_32089[(7)]);
var inst_32063 = cljs.core.first(inst_32054);
var state_32089__$1 = state_32089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32089__$1,(20),out,inst_32063);
} else {
if((state_val_32090 === (8))){
var inst_32043 = (state_32089[(8)]);
var inst_32042 = (state_32089[(10)]);
var inst_32045 = (inst_32043 < inst_32042);
var inst_32046 = inst_32045;
var state_32089__$1 = state_32089;
if(cljs.core.truth_(inst_32046)){
var statearr_32154_33656 = state_32089__$1;
(statearr_32154_33656[(1)] = (10));

} else {
var statearr_32155_33657 = state_32089__$1;
(statearr_32155_33657[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29295__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29295__auto____0 = (function (){
var statearr_32168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32168[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29295__auto__);

(statearr_32168[(1)] = (1));

return statearr_32168;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29295__auto____1 = (function (state_32089){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_32089);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e32169){var ex__29298__auto__ = e32169;
var statearr_32170_33659 = state_32089;
(statearr_32170_33659[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_32089[(4)]))){
var statearr_32171_33660 = state_32089;
(statearr_32171_33660[(1)] = cljs.core.first((state_32089[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33665 = state_32089;
state_32089 = G__33665;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29295__auto__ = function(state_32089){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29295__auto____1.call(this,state_32089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29295__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29295__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_32172 = f__29447__auto__();
(statearr_32172[(6)] = c__29446__auto__);

return statearr_32172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));

return c__29446__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32174 = arguments.length;
switch (G__32174) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32179 = arguments.length;
switch (G__32179) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32187 = arguments.length;
switch (G__32187) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29446__auto___33682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_32217){
var state_val_32218 = (state_32217[(1)]);
if((state_val_32218 === (7))){
var inst_32212 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
var statearr_32225_33683 = state_32217__$1;
(statearr_32225_33683[(2)] = inst_32212);

(statearr_32225_33683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (1))){
var inst_32190 = null;
var state_32217__$1 = (function (){var statearr_32226 = state_32217;
(statearr_32226[(7)] = inst_32190);

return statearr_32226;
})();
var statearr_32227_33688 = state_32217__$1;
(statearr_32227_33688[(2)] = null);

(statearr_32227_33688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (4))){
var inst_32193 = (state_32217[(8)]);
var inst_32193__$1 = (state_32217[(2)]);
var inst_32194 = (inst_32193__$1 == null);
var inst_32199 = cljs.core.not(inst_32194);
var state_32217__$1 = (function (){var statearr_32232 = state_32217;
(statearr_32232[(8)] = inst_32193__$1);

return statearr_32232;
})();
if(inst_32199){
var statearr_32233_33693 = state_32217__$1;
(statearr_32233_33693[(1)] = (5));

} else {
var statearr_32234_33698 = state_32217__$1;
(statearr_32234_33698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (6))){
var state_32217__$1 = state_32217;
var statearr_32235_33699 = state_32217__$1;
(statearr_32235_33699[(2)] = null);

(statearr_32235_33699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (3))){
var inst_32214 = (state_32217[(2)]);
var inst_32215 = cljs.core.async.close_BANG_(out);
var state_32217__$1 = (function (){var statearr_32238 = state_32217;
(statearr_32238[(9)] = inst_32214);

return statearr_32238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32217__$1,inst_32215);
} else {
if((state_val_32218 === (2))){
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32217__$1,(4),ch);
} else {
if((state_val_32218 === (11))){
var inst_32193 = (state_32217[(8)]);
var inst_32206 = (state_32217[(2)]);
var inst_32190 = inst_32193;
var state_32217__$1 = (function (){var statearr_32241 = state_32217;
(statearr_32241[(10)] = inst_32206);

(statearr_32241[(7)] = inst_32190);

return statearr_32241;
})();
var statearr_32242_33706 = state_32217__$1;
(statearr_32242_33706[(2)] = null);

(statearr_32242_33706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (9))){
var inst_32193 = (state_32217[(8)]);
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32217__$1,(11),out,inst_32193);
} else {
if((state_val_32218 === (5))){
var inst_32193 = (state_32217[(8)]);
var inst_32190 = (state_32217[(7)]);
var inst_32201 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32193,inst_32190);
var state_32217__$1 = state_32217;
if(inst_32201){
var statearr_32244_33714 = state_32217__$1;
(statearr_32244_33714[(1)] = (8));

} else {
var statearr_32245_33719 = state_32217__$1;
(statearr_32245_33719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (10))){
var inst_32209 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
var statearr_32246_33723 = state_32217__$1;
(statearr_32246_33723[(2)] = inst_32209);

(statearr_32246_33723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (8))){
var inst_32190 = (state_32217[(7)]);
var tmp32243 = inst_32190;
var inst_32190__$1 = tmp32243;
var state_32217__$1 = (function (){var statearr_32247 = state_32217;
(statearr_32247[(7)] = inst_32190__$1);

return statearr_32247;
})();
var statearr_32248_33726 = state_32217__$1;
(statearr_32248_33726[(2)] = null);

(statearr_32248_33726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29295__auto__ = null;
var cljs$core$async$state_machine__29295__auto____0 = (function (){
var statearr_32249 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32249[(0)] = cljs$core$async$state_machine__29295__auto__);

(statearr_32249[(1)] = (1));

return statearr_32249;
});
var cljs$core$async$state_machine__29295__auto____1 = (function (state_32217){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_32217);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e32250){var ex__29298__auto__ = e32250;
var statearr_32251_33730 = state_32217;
(statearr_32251_33730[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_32217[(4)]))){
var statearr_32252_33731 = state_32217;
(statearr_32252_33731[(1)] = cljs.core.first((state_32217[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33732 = state_32217;
state_32217 = G__33732;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$state_machine__29295__auto__ = function(state_32217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29295__auto____1.call(this,state_32217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29295__auto____0;
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29295__auto____1;
return cljs$core$async$state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_32253 = f__29447__auto__();
(statearr_32253[(6)] = c__29446__auto___33682);

return statearr_32253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32255 = arguments.length;
switch (G__32255) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29446__auto___33741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_32296){
var state_val_32297 = (state_32296[(1)]);
if((state_val_32297 === (7))){
var inst_32291 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32302_33743 = state_32296__$1;
(statearr_32302_33743[(2)] = inst_32291);

(statearr_32302_33743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (1))){
var inst_32256 = (new Array(n));
var inst_32257 = inst_32256;
var inst_32258 = (0);
var state_32296__$1 = (function (){var statearr_32306 = state_32296;
(statearr_32306[(7)] = inst_32258);

(statearr_32306[(8)] = inst_32257);

return statearr_32306;
})();
var statearr_32307_33752 = state_32296__$1;
(statearr_32307_33752[(2)] = null);

(statearr_32307_33752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (4))){
var inst_32261 = (state_32296[(9)]);
var inst_32261__$1 = (state_32296[(2)]);
var inst_32262 = (inst_32261__$1 == null);
var inst_32263 = cljs.core.not(inst_32262);
var state_32296__$1 = (function (){var statearr_32311 = state_32296;
(statearr_32311[(9)] = inst_32261__$1);

return statearr_32311;
})();
if(inst_32263){
var statearr_32312_33758 = state_32296__$1;
(statearr_32312_33758[(1)] = (5));

} else {
var statearr_32313_33759 = state_32296__$1;
(statearr_32313_33759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (15))){
var inst_32285 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32314_33760 = state_32296__$1;
(statearr_32314_33760[(2)] = inst_32285);

(statearr_32314_33760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (13))){
var state_32296__$1 = state_32296;
var statearr_32315_33761 = state_32296__$1;
(statearr_32315_33761[(2)] = null);

(statearr_32315_33761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (6))){
var inst_32258 = (state_32296[(7)]);
var inst_32281 = (inst_32258 > (0));
var state_32296__$1 = state_32296;
if(cljs.core.truth_(inst_32281)){
var statearr_32316_33762 = state_32296__$1;
(statearr_32316_33762[(1)] = (12));

} else {
var statearr_32317_33763 = state_32296__$1;
(statearr_32317_33763[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (3))){
var inst_32293 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32296__$1,inst_32293);
} else {
if((state_val_32297 === (12))){
var inst_32257 = (state_32296[(8)]);
var inst_32283 = cljs.core.vec(inst_32257);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32296__$1,(15),out,inst_32283);
} else {
if((state_val_32297 === (2))){
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32296__$1,(4),ch);
} else {
if((state_val_32297 === (11))){
var inst_32274 = (state_32296[(2)]);
var inst_32275 = (new Array(n));
var inst_32257 = inst_32275;
var inst_32258 = (0);
var state_32296__$1 = (function (){var statearr_32319 = state_32296;
(statearr_32319[(7)] = inst_32258);

(statearr_32319[(10)] = inst_32274);

(statearr_32319[(8)] = inst_32257);

return statearr_32319;
})();
var statearr_32320_33766 = state_32296__$1;
(statearr_32320_33766[(2)] = null);

(statearr_32320_33766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (9))){
var inst_32257 = (state_32296[(8)]);
var inst_32272 = cljs.core.vec(inst_32257);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32296__$1,(11),out,inst_32272);
} else {
if((state_val_32297 === (5))){
var inst_32258 = (state_32296[(7)]);
var inst_32266 = (state_32296[(11)]);
var inst_32261 = (state_32296[(9)]);
var inst_32257 = (state_32296[(8)]);
var inst_32265 = (inst_32257[inst_32258] = inst_32261);
var inst_32266__$1 = (inst_32258 + (1));
var inst_32267 = (inst_32266__$1 < n);
var state_32296__$1 = (function (){var statearr_32323 = state_32296;
(statearr_32323[(11)] = inst_32266__$1);

(statearr_32323[(12)] = inst_32265);

return statearr_32323;
})();
if(cljs.core.truth_(inst_32267)){
var statearr_32324_33769 = state_32296__$1;
(statearr_32324_33769[(1)] = (8));

} else {
var statearr_32326_33770 = state_32296__$1;
(statearr_32326_33770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (14))){
var inst_32288 = (state_32296[(2)]);
var inst_32289 = cljs.core.async.close_BANG_(out);
var state_32296__$1 = (function (){var statearr_32328 = state_32296;
(statearr_32328[(13)] = inst_32288);

return statearr_32328;
})();
var statearr_32329_33774 = state_32296__$1;
(statearr_32329_33774[(2)] = inst_32289);

(statearr_32329_33774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (10))){
var inst_32279 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32330_33776 = state_32296__$1;
(statearr_32330_33776[(2)] = inst_32279);

(statearr_32330_33776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (8))){
var inst_32266 = (state_32296[(11)]);
var inst_32257 = (state_32296[(8)]);
var tmp32327 = inst_32257;
var inst_32257__$1 = tmp32327;
var inst_32258 = inst_32266;
var state_32296__$1 = (function (){var statearr_32331 = state_32296;
(statearr_32331[(7)] = inst_32258);

(statearr_32331[(8)] = inst_32257__$1);

return statearr_32331;
})();
var statearr_32332_33777 = state_32296__$1;
(statearr_32332_33777[(2)] = null);

(statearr_32332_33777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29295__auto__ = null;
var cljs$core$async$state_machine__29295__auto____0 = (function (){
var statearr_32333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32333[(0)] = cljs$core$async$state_machine__29295__auto__);

(statearr_32333[(1)] = (1));

return statearr_32333;
});
var cljs$core$async$state_machine__29295__auto____1 = (function (state_32296){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_32296);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e32334){var ex__29298__auto__ = e32334;
var statearr_32335_33791 = state_32296;
(statearr_32335_33791[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_32296[(4)]))){
var statearr_32336_33793 = state_32296;
(statearr_32336_33793[(1)] = cljs.core.first((state_32296[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33802 = state_32296;
state_32296 = G__33802;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$state_machine__29295__auto__ = function(state_32296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29295__auto____1.call(this,state_32296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29295__auto____0;
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29295__auto____1;
return cljs$core$async$state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_32337 = f__29447__auto__();
(statearr_32337[(6)] = c__29446__auto___33741);

return statearr_32337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32340 = arguments.length;
switch (G__32340) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29446__auto___33827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29447__auto__ = (function (){var switch__29294__auto__ = (function (state_32382){
var state_val_32383 = (state_32382[(1)]);
if((state_val_32383 === (7))){
var inst_32378 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32384_33836 = state_32382__$1;
(statearr_32384_33836[(2)] = inst_32378);

(statearr_32384_33836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (1))){
var inst_32341 = [];
var inst_32342 = inst_32341;
var inst_32343 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32382__$1 = (function (){var statearr_32385 = state_32382;
(statearr_32385[(7)] = inst_32343);

(statearr_32385[(8)] = inst_32342);

return statearr_32385;
})();
var statearr_32386_33845 = state_32382__$1;
(statearr_32386_33845[(2)] = null);

(statearr_32386_33845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (4))){
var inst_32346 = (state_32382[(9)]);
var inst_32346__$1 = (state_32382[(2)]);
var inst_32347 = (inst_32346__$1 == null);
var inst_32348 = cljs.core.not(inst_32347);
var state_32382__$1 = (function (){var statearr_32387 = state_32382;
(statearr_32387[(9)] = inst_32346__$1);

return statearr_32387;
})();
if(inst_32348){
var statearr_32389_33855 = state_32382__$1;
(statearr_32389_33855[(1)] = (5));

} else {
var statearr_32390_33858 = state_32382__$1;
(statearr_32390_33858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (15))){
var inst_32372 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32391_33864 = state_32382__$1;
(statearr_32391_33864[(2)] = inst_32372);

(statearr_32391_33864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (13))){
var state_32382__$1 = state_32382;
var statearr_32392_33870 = state_32382__$1;
(statearr_32392_33870[(2)] = null);

(statearr_32392_33870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (6))){
var inst_32342 = (state_32382[(8)]);
var inst_32367 = inst_32342.length;
var inst_32368 = (inst_32367 > (0));
var state_32382__$1 = state_32382;
if(cljs.core.truth_(inst_32368)){
var statearr_32393_33875 = state_32382__$1;
(statearr_32393_33875[(1)] = (12));

} else {
var statearr_32394_33880 = state_32382__$1;
(statearr_32394_33880[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (3))){
var inst_32380 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32382__$1,inst_32380);
} else {
if((state_val_32383 === (12))){
var inst_32342 = (state_32382[(8)]);
var inst_32370 = cljs.core.vec(inst_32342);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32382__$1,(15),out,inst_32370);
} else {
if((state_val_32383 === (2))){
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32382__$1,(4),ch);
} else {
if((state_val_32383 === (11))){
var inst_32350 = (state_32382[(10)]);
var inst_32346 = (state_32382[(9)]);
var inst_32360 = (state_32382[(2)]);
var inst_32361 = [];
var inst_32362 = inst_32361.push(inst_32346);
var inst_32342 = inst_32361;
var inst_32343 = inst_32350;
var state_32382__$1 = (function (){var statearr_32395 = state_32382;
(statearr_32395[(7)] = inst_32343);

(statearr_32395[(11)] = inst_32360);

(statearr_32395[(12)] = inst_32362);

(statearr_32395[(8)] = inst_32342);

return statearr_32395;
})();
var statearr_32396_33882 = state_32382__$1;
(statearr_32396_33882[(2)] = null);

(statearr_32396_33882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (9))){
var inst_32342 = (state_32382[(8)]);
var inst_32358 = cljs.core.vec(inst_32342);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32382__$1,(11),out,inst_32358);
} else {
if((state_val_32383 === (5))){
var inst_32350 = (state_32382[(10)]);
var inst_32343 = (state_32382[(7)]);
var inst_32346 = (state_32382[(9)]);
var inst_32350__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32346) : f.call(null,inst_32346));
var inst_32351 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32350__$1,inst_32343);
var inst_32352 = cljs.core.keyword_identical_QMARK_(inst_32343,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32353 = ((inst_32351) || (inst_32352));
var state_32382__$1 = (function (){var statearr_32405 = state_32382;
(statearr_32405[(10)] = inst_32350__$1);

return statearr_32405;
})();
if(cljs.core.truth_(inst_32353)){
var statearr_32410_33889 = state_32382__$1;
(statearr_32410_33889[(1)] = (8));

} else {
var statearr_32411_33890 = state_32382__$1;
(statearr_32411_33890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (14))){
var inst_32375 = (state_32382[(2)]);
var inst_32376 = cljs.core.async.close_BANG_(out);
var state_32382__$1 = (function (){var statearr_32413 = state_32382;
(statearr_32413[(13)] = inst_32375);

return statearr_32413;
})();
var statearr_32414_33903 = state_32382__$1;
(statearr_32414_33903[(2)] = inst_32376);

(statearr_32414_33903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (10))){
var inst_32365 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32415_33904 = state_32382__$1;
(statearr_32415_33904[(2)] = inst_32365);

(statearr_32415_33904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (8))){
var inst_32350 = (state_32382[(10)]);
var inst_32346 = (state_32382[(9)]);
var inst_32342 = (state_32382[(8)]);
var inst_32355 = inst_32342.push(inst_32346);
var tmp32412 = inst_32342;
var inst_32342__$1 = tmp32412;
var inst_32343 = inst_32350;
var state_32382__$1 = (function (){var statearr_32416 = state_32382;
(statearr_32416[(14)] = inst_32355);

(statearr_32416[(7)] = inst_32343);

(statearr_32416[(8)] = inst_32342__$1);

return statearr_32416;
})();
var statearr_32419_33906 = state_32382__$1;
(statearr_32419_33906[(2)] = null);

(statearr_32419_33906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29295__auto__ = null;
var cljs$core$async$state_machine__29295__auto____0 = (function (){
var statearr_32420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32420[(0)] = cljs$core$async$state_machine__29295__auto__);

(statearr_32420[(1)] = (1));

return statearr_32420;
});
var cljs$core$async$state_machine__29295__auto____1 = (function (state_32382){
while(true){
var ret_value__29296__auto__ = (function (){try{while(true){
var result__29297__auto__ = switch__29294__auto__(state_32382);
if(cljs.core.keyword_identical_QMARK_(result__29297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29297__auto__;
}
break;
}
}catch (e32421){var ex__29298__auto__ = e32421;
var statearr_32422_33908 = state_32382;
(statearr_32422_33908[(2)] = ex__29298__auto__);


if(cljs.core.seq((state_32382[(4)]))){
var statearr_32423_33909 = state_32382;
(statearr_32423_33909[(1)] = cljs.core.first((state_32382[(4)])));

} else {
throw ex__29298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33910 = state_32382;
state_32382 = G__33910;
continue;
} else {
return ret_value__29296__auto__;
}
break;
}
});
cljs$core$async$state_machine__29295__auto__ = function(state_32382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29295__auto____1.call(this,state_32382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29295__auto____0;
cljs$core$async$state_machine__29295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29295__auto____1;
return cljs$core$async$state_machine__29295__auto__;
})()
})();
var state__29448__auto__ = (function (){var statearr_32424 = f__29447__auto__();
(statearr_32424[(6)] = c__29446__auto___33827);

return statearr_32424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29448__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
