goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29113 = arguments.length;
switch (G__29113) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29117 = (function (f,blockable,meta29118){
this.f = f;
this.blockable = blockable;
this.meta29118 = meta29118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29119,meta29118__$1){
var self__ = this;
var _29119__$1 = this;
return (new cljs.core.async.t_cljs$core$async29117(self__.f,self__.blockable,meta29118__$1));
}));

(cljs.core.async.t_cljs$core$async29117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29119){
var self__ = this;
var _29119__$1 = this;
return self__.meta29118;
}));

(cljs.core.async.t_cljs$core$async29117.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29117.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29118","meta29118",-1769465601,null)], null);
}));

(cljs.core.async.t_cljs$core$async29117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29117");

(cljs.core.async.t_cljs$core$async29117.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29117.
 */
cljs.core.async.__GT_t_cljs$core$async29117 = (function cljs$core$async$__GT_t_cljs$core$async29117(f__$1,blockable__$1,meta29118){
return (new cljs.core.async.t_cljs$core$async29117(f__$1,blockable__$1,meta29118));
});

}

return (new cljs.core.async.t_cljs$core$async29117(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29147 = arguments.length;
switch (G__29147) {
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
var G__29160 = arguments.length;
switch (G__29160) {
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
var G__29166 = arguments.length;
switch (G__29166) {
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
var val_31804 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31804) : fn1.call(null,val_31804));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31804) : fn1.call(null,val_31804));
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
var G__29181 = arguments.length;
switch (G__29181) {
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
var n__4613__auto___31816 = n;
var x_31817 = (0);
while(true){
if((x_31817 < n__4613__auto___31816)){
(a[x_31817] = x_31817);

var G__31818 = (x_31817 + (1));
x_31817 = G__31818;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29191 = (function (flag,meta29192){
this.flag = flag;
this.meta29192 = meta29192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29193,meta29192__$1){
var self__ = this;
var _29193__$1 = this;
return (new cljs.core.async.t_cljs$core$async29191(self__.flag,meta29192__$1));
}));

(cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29193){
var self__ = this;
var _29193__$1 = this;
return self__.meta29192;
}));

(cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29192","meta29192",1196159859,null)], null);
}));

(cljs.core.async.t_cljs$core$async29191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29191");

(cljs.core.async.t_cljs$core$async29191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29191.
 */
cljs.core.async.__GT_t_cljs$core$async29191 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29191(flag__$1,meta29192){
return (new cljs.core.async.t_cljs$core$async29191(flag__$1,meta29192));
});

}

return (new cljs.core.async.t_cljs$core$async29191(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29211 = (function (flag,cb,meta29212){
this.flag = flag;
this.cb = cb;
this.meta29212 = meta29212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29213,meta29212__$1){
var self__ = this;
var _29213__$1 = this;
return (new cljs.core.async.t_cljs$core$async29211(self__.flag,self__.cb,meta29212__$1));
}));

(cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29213){
var self__ = this;
var _29213__$1 = this;
return self__.meta29212;
}));

(cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29212","meta29212",1626422768,null)], null);
}));

(cljs.core.async.t_cljs$core$async29211.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29211");

(cljs.core.async.t_cljs$core$async29211.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29211");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29211.
 */
cljs.core.async.__GT_t_cljs$core$async29211 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29211(flag__$1,cb__$1,meta29212){
return (new cljs.core.async.t_cljs$core$async29211(flag__$1,cb__$1,meta29212));
});

}

return (new cljs.core.async.t_cljs$core$async29211(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29226_SHARP_){
var G__29231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29226_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29231) : fret.call(null,G__29231));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29227_SHARP_){
var G__29232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29227_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29232) : fret.call(null,G__29232));
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
var G__31842 = (i + (1));
i = G__31842;
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
var len__4736__auto___31846 = arguments.length;
var i__4737__auto___31847 = (0);
while(true){
if((i__4737__auto___31847 < len__4736__auto___31846)){
args__4742__auto__.push((arguments[i__4737__auto___31847]));

var G__31848 = (i__4737__auto___31847 + (1));
i__4737__auto___31847 = G__31848;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29238){
var map__29239 = p__29238;
var map__29239__$1 = (((((!((map__29239 == null))))?(((((map__29239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29239):map__29239);
var opts = map__29239__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29236){
var G__29237 = cljs.core.first(seq29236);
var seq29236__$1 = cljs.core.next(seq29236);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29237,seq29236__$1);
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
var G__29256 = arguments.length;
switch (G__29256) {
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
var c__26600__auto___31860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_29312){
var state_val_29313 = (state_29312[(1)]);
if((state_val_29313 === (7))){
var inst_29308 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
var statearr_29316_31862 = state_29312__$1;
(statearr_29316_31862[(2)] = inst_29308);

(statearr_29316_31862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (1))){
var state_29312__$1 = state_29312;
var statearr_29317_31863 = state_29312__$1;
(statearr_29317_31863[(2)] = null);

(statearr_29317_31863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (4))){
var inst_29287 = (state_29312[(7)]);
var inst_29287__$1 = (state_29312[(2)]);
var inst_29289 = (inst_29287__$1 == null);
var state_29312__$1 = (function (){var statearr_29319 = state_29312;
(statearr_29319[(7)] = inst_29287__$1);

return statearr_29319;
})();
if(cljs.core.truth_(inst_29289)){
var statearr_29320_31868 = state_29312__$1;
(statearr_29320_31868[(1)] = (5));

} else {
var statearr_29321_31869 = state_29312__$1;
(statearr_29321_31869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (13))){
var state_29312__$1 = state_29312;
var statearr_29325_31870 = state_29312__$1;
(statearr_29325_31870[(2)] = null);

(statearr_29325_31870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (6))){
var inst_29287 = (state_29312[(7)]);
var state_29312__$1 = state_29312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29312__$1,(11),to,inst_29287);
} else {
if((state_val_29313 === (3))){
var inst_29310 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29312__$1,inst_29310);
} else {
if((state_val_29313 === (12))){
var state_29312__$1 = state_29312;
var statearr_29329_31871 = state_29312__$1;
(statearr_29329_31871[(2)] = null);

(statearr_29329_31871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (2))){
var state_29312__$1 = state_29312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29312__$1,(4),from);
} else {
if((state_val_29313 === (11))){
var inst_29301 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
if(cljs.core.truth_(inst_29301)){
var statearr_29330_31873 = state_29312__$1;
(statearr_29330_31873[(1)] = (12));

} else {
var statearr_29331_31874 = state_29312__$1;
(statearr_29331_31874[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (9))){
var state_29312__$1 = state_29312;
var statearr_29332_31876 = state_29312__$1;
(statearr_29332_31876[(2)] = null);

(statearr_29332_31876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (5))){
var state_29312__$1 = state_29312;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29334_31877 = state_29312__$1;
(statearr_29334_31877[(1)] = (8));

} else {
var statearr_29335_31878 = state_29312__$1;
(statearr_29335_31878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (14))){
var inst_29306 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
var statearr_29337_31879 = state_29312__$1;
(statearr_29337_31879[(2)] = inst_29306);

(statearr_29337_31879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (10))){
var inst_29295 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
var statearr_29338_31880 = state_29312__$1;
(statearr_29338_31880[(2)] = inst_29295);

(statearr_29338_31880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (8))){
var inst_29292 = cljs.core.async.close_BANG_(to);
var state_29312__$1 = state_29312;
var statearr_29339_31882 = state_29312__$1;
(statearr_29339_31882[(2)] = inst_29292);

(statearr_29339_31882[(1)] = (10));


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
var cljs$core$async$state_machine__26516__auto__ = null;
var cljs$core$async$state_machine__26516__auto____0 = (function (){
var statearr_29341 = [null,null,null,null,null,null,null,null];
(statearr_29341[(0)] = cljs$core$async$state_machine__26516__auto__);

(statearr_29341[(1)] = (1));

return statearr_29341;
});
var cljs$core$async$state_machine__26516__auto____1 = (function (state_29312){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_29312);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e29348){var ex__26519__auto__ = e29348;
var statearr_29349_31885 = state_29312;
(statearr_29349_31885[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_29312[(4)]))){
var statearr_29353_31886 = state_29312;
(statearr_29353_31886[(1)] = cljs.core.first((state_29312[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31888 = state_29312;
state_29312 = G__31888;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$state_machine__26516__auto__ = function(state_29312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26516__auto____1.call(this,state_29312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26516__auto____0;
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26516__auto____1;
return cljs$core$async$state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_29354 = f__26601__auto__();
(statearr_29354[(6)] = c__26600__auto___31860);

return statearr_29354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
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
var process = (function (p__29359){
var vec__29360 = p__29359;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29360,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29360,(1),null);
var job = vec__29360;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__26600__auto___31893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_29367){
var state_val_29368 = (state_29367[(1)]);
if((state_val_29368 === (1))){
var state_29367__$1 = state_29367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29367__$1,(2),res,v);
} else {
if((state_val_29368 === (2))){
var inst_29364 = (state_29367[(2)]);
var inst_29365 = cljs.core.async.close_BANG_(res);
var state_29367__$1 = (function (){var statearr_29373 = state_29367;
(statearr_29373[(7)] = inst_29364);

return statearr_29373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29367__$1,inst_29365);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0 = (function (){
var statearr_29375 = [null,null,null,null,null,null,null,null];
(statearr_29375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__);

(statearr_29375[(1)] = (1));

return statearr_29375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1 = (function (state_29367){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_29367);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e29376){var ex__26519__auto__ = e29376;
var statearr_29377_31896 = state_29367;
(statearr_29377_31896[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_29367[(4)]))){
var statearr_29378_31897 = state_29367;
(statearr_29378_31897[(1)] = cljs.core.first((state_29367[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31898 = state_29367;
state_29367 = G__31898;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__ = function(state_29367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1.call(this,state_29367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_29383 = f__26601__auto__();
(statearr_29383[(6)] = c__26600__auto___31893);

return statearr_29383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29385){
var vec__29387 = p__29385;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29387,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29387,(1),null);
var job = vec__29387;
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
var n__4613__auto___31903 = n;
var __31904 = (0);
while(true){
if((__31904 < n__4613__auto___31903)){
var G__29391_31905 = type;
var G__29391_31906__$1 = (((G__29391_31905 instanceof cljs.core.Keyword))?G__29391_31905.fqn:null);
switch (G__29391_31906__$1) {
case "compute":
var c__26600__auto___31908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31904,c__26600__auto___31908,G__29391_31905,G__29391_31906__$1,n__4613__auto___31903,jobs,results,process,async){
return (function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = ((function (__31904,c__26600__auto___31908,G__29391_31905,G__29391_31906__$1,n__4613__auto___31903,jobs,results,process,async){
return (function (state_29405){
var state_val_29406 = (state_29405[(1)]);
if((state_val_29406 === (1))){
var state_29405__$1 = state_29405;
var statearr_29408_31910 = state_29405__$1;
(statearr_29408_31910[(2)] = null);

(statearr_29408_31910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (2))){
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29405__$1,(4),jobs);
} else {
if((state_val_29406 === (3))){
var inst_29403 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29405__$1,inst_29403);
} else {
if((state_val_29406 === (4))){
var inst_29395 = (state_29405[(2)]);
var inst_29396 = process(inst_29395);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29396)){
var statearr_29409_31911 = state_29405__$1;
(statearr_29409_31911[(1)] = (5));

} else {
var statearr_29410_31912 = state_29405__$1;
(statearr_29410_31912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (5))){
var state_29405__$1 = state_29405;
var statearr_29411_31913 = state_29405__$1;
(statearr_29411_31913[(2)] = null);

(statearr_29411_31913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (6))){
var state_29405__$1 = state_29405;
var statearr_29412_31914 = state_29405__$1;
(statearr_29412_31914[(2)] = null);

(statearr_29412_31914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (7))){
var inst_29401 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29414_31917 = state_29405__$1;
(statearr_29414_31917[(2)] = inst_29401);

(statearr_29414_31917[(1)] = (3));


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
});})(__31904,c__26600__auto___31908,G__29391_31905,G__29391_31906__$1,n__4613__auto___31903,jobs,results,process,async))
;
return ((function (__31904,switch__26515__auto__,c__26600__auto___31908,G__29391_31905,G__29391_31906__$1,n__4613__auto___31903,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0 = (function (){
var statearr_29417 = [null,null,null,null,null,null,null];
(statearr_29417[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__);

(statearr_29417[(1)] = (1));

return statearr_29417;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1 = (function (state_29405){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_29405);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e29422){var ex__26519__auto__ = e29422;
var statearr_29423_31920 = state_29405;
(statearr_29423_31920[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_29405[(4)]))){
var statearr_29425_31922 = state_29405;
(statearr_29425_31922[(1)] = cljs.core.first((state_29405[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31924 = state_29405;
state_29405 = G__31924;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__ = function(state_29405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1.call(this,state_29405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__;
})()
;})(__31904,switch__26515__auto__,c__26600__auto___31908,G__29391_31905,G__29391_31906__$1,n__4613__auto___31903,jobs,results,process,async))
})();
var state__26602__auto__ = (function (){var statearr_29426 = f__26601__auto__();
(statearr_29426[(6)] = c__26600__auto___31908);

return statearr_29426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
});})(__31904,c__26600__auto___31908,G__29391_31905,G__29391_31906__$1,n__4613__auto___31903,jobs,results,process,async))
);


break;
case "async":
var c__26600__auto___31926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31904,c__26600__auto___31926,G__29391_31905,G__29391_31906__$1,n__4613__auto___31903,jobs,results,process,async){
return (function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = ((function (__31904,c__26600__auto___31926,G__29391_31905,G__29391_31906__$1,n__4613__auto___31903,jobs,results,process,async){
return (function (state_29440){
var state_val_29441 = (state_29440[(1)]);
if((state_val_29441 === (1))){
var state_29440__$1 = state_29440;
var statearr_29444_31927 = state_29440__$1;
(statearr_29444_31927[(2)] = null);

(statearr_29444_31927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29441 === (2))){
var state_29440__$1 = state_29440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29440__$1,(4),jobs);
} else {
if((state_val_29441 === (3))){
var inst_29437 = (state_29440[(2)]);
var state_29440__$1 = state_29440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29440__$1,inst_29437);
} else {
if((state_val_29441 === (4))){
var inst_29429 = (state_29440[(2)]);
var inst_29430 = async(inst_29429);
var state_29440__$1 = state_29440;
if(cljs.core.truth_(inst_29430)){
var statearr_29446_31930 = state_29440__$1;
(statearr_29446_31930[(1)] = (5));

} else {
var statearr_29447_31931 = state_29440__$1;
(statearr_29447_31931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29441 === (5))){
var state_29440__$1 = state_29440;
var statearr_29448_31932 = state_29440__$1;
(statearr_29448_31932[(2)] = null);

(statearr_29448_31932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29441 === (6))){
var state_29440__$1 = state_29440;
var statearr_29449_31933 = state_29440__$1;
(statearr_29449_31933[(2)] = null);

(statearr_29449_31933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29441 === (7))){
var inst_29435 = (state_29440[(2)]);
var state_29440__$1 = state_29440;
var statearr_29450_31934 = state_29440__$1;
(statearr_29450_31934[(2)] = inst_29435);

(statearr_29450_31934[(1)] = (3));


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
});})(__31904,c__26600__auto___31926,G__29391_31905,G__29391_31906__$1,n__4613__auto___31903,jobs,results,process,async))
;
return ((function (__31904,switch__26515__auto__,c__26600__auto___31926,G__29391_31905,G__29391_31906__$1,n__4613__auto___31903,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0 = (function (){
var statearr_29453 = [null,null,null,null,null,null,null];
(statearr_29453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__);

(statearr_29453[(1)] = (1));

return statearr_29453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1 = (function (state_29440){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_29440);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e29457){var ex__26519__auto__ = e29457;
var statearr_29459_31939 = state_29440;
(statearr_29459_31939[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_29440[(4)]))){
var statearr_29460_31941 = state_29440;
(statearr_29460_31941[(1)] = cljs.core.first((state_29440[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31943 = state_29440;
state_29440 = G__31943;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__ = function(state_29440){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1.call(this,state_29440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__;
})()
;})(__31904,switch__26515__auto__,c__26600__auto___31926,G__29391_31905,G__29391_31906__$1,n__4613__auto___31903,jobs,results,process,async))
})();
var state__26602__auto__ = (function (){var statearr_29461 = f__26601__auto__();
(statearr_29461[(6)] = c__26600__auto___31926);

return statearr_29461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
});})(__31904,c__26600__auto___31926,G__29391_31905,G__29391_31906__$1,n__4613__auto___31903,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29391_31906__$1)].join('')));

}

var G__31946 = (__31904 + (1));
__31904 = G__31946;
continue;
} else {
}
break;
}

var c__26600__auto___31947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_29483){
var state_val_29484 = (state_29483[(1)]);
if((state_val_29484 === (7))){
var inst_29479 = (state_29483[(2)]);
var state_29483__$1 = state_29483;
var statearr_29486_31950 = state_29483__$1;
(statearr_29486_31950[(2)] = inst_29479);

(statearr_29486_31950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (1))){
var state_29483__$1 = state_29483;
var statearr_29487_31951 = state_29483__$1;
(statearr_29487_31951[(2)] = null);

(statearr_29487_31951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (4))){
var inst_29464 = (state_29483[(7)]);
var inst_29464__$1 = (state_29483[(2)]);
var inst_29465 = (inst_29464__$1 == null);
var state_29483__$1 = (function (){var statearr_29488 = state_29483;
(statearr_29488[(7)] = inst_29464__$1);

return statearr_29488;
})();
if(cljs.core.truth_(inst_29465)){
var statearr_29489_31952 = state_29483__$1;
(statearr_29489_31952[(1)] = (5));

} else {
var statearr_29490_31953 = state_29483__$1;
(statearr_29490_31953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (6))){
var inst_29469 = (state_29483[(8)]);
var inst_29464 = (state_29483[(7)]);
var inst_29469__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29471 = [inst_29464,inst_29469__$1];
var inst_29472 = (new cljs.core.PersistentVector(null,2,(5),inst_29470,inst_29471,null));
var state_29483__$1 = (function (){var statearr_29493 = state_29483;
(statearr_29493[(8)] = inst_29469__$1);

return statearr_29493;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29483__$1,(8),jobs,inst_29472);
} else {
if((state_val_29484 === (3))){
var inst_29481 = (state_29483[(2)]);
var state_29483__$1 = state_29483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29483__$1,inst_29481);
} else {
if((state_val_29484 === (2))){
var state_29483__$1 = state_29483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29483__$1,(4),from);
} else {
if((state_val_29484 === (9))){
var inst_29476 = (state_29483[(2)]);
var state_29483__$1 = (function (){var statearr_29494 = state_29483;
(statearr_29494[(9)] = inst_29476);

return statearr_29494;
})();
var statearr_29495_31956 = state_29483__$1;
(statearr_29495_31956[(2)] = null);

(statearr_29495_31956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (5))){
var inst_29467 = cljs.core.async.close_BANG_(jobs);
var state_29483__$1 = state_29483;
var statearr_29496_31965 = state_29483__$1;
(statearr_29496_31965[(2)] = inst_29467);

(statearr_29496_31965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (8))){
var inst_29469 = (state_29483[(8)]);
var inst_29474 = (state_29483[(2)]);
var state_29483__$1 = (function (){var statearr_29498 = state_29483;
(statearr_29498[(10)] = inst_29474);

return statearr_29498;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29483__$1,(9),results,inst_29469);
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
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0 = (function (){
var statearr_29500 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__);

(statearr_29500[(1)] = (1));

return statearr_29500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1 = (function (state_29483){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_29483);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e29503){var ex__26519__auto__ = e29503;
var statearr_29505_31966 = state_29483;
(statearr_29505_31966[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_29483[(4)]))){
var statearr_29508_31970 = state_29483;
(statearr_29508_31970[(1)] = cljs.core.first((state_29483[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31971 = state_29483;
state_29483 = G__31971;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__ = function(state_29483){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1.call(this,state_29483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_29509 = f__26601__auto__();
(statearr_29509[(6)] = c__26600__auto___31947);

return statearr_29509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
}));


var c__26600__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_29553){
var state_val_29554 = (state_29553[(1)]);
if((state_val_29554 === (7))){
var inst_29548 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
var statearr_29556_31975 = state_29553__$1;
(statearr_29556_31975[(2)] = inst_29548);

(statearr_29556_31975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (20))){
var state_29553__$1 = state_29553;
var statearr_29557_31977 = state_29553__$1;
(statearr_29557_31977[(2)] = null);

(statearr_29557_31977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (1))){
var state_29553__$1 = state_29553;
var statearr_29558_31978 = state_29553__$1;
(statearr_29558_31978[(2)] = null);

(statearr_29558_31978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (4))){
var inst_29515 = (state_29553[(7)]);
var inst_29515__$1 = (state_29553[(2)]);
var inst_29516 = (inst_29515__$1 == null);
var state_29553__$1 = (function (){var statearr_29562 = state_29553;
(statearr_29562[(7)] = inst_29515__$1);

return statearr_29562;
})();
if(cljs.core.truth_(inst_29516)){
var statearr_29563_31984 = state_29553__$1;
(statearr_29563_31984[(1)] = (5));

} else {
var statearr_29564_31985 = state_29553__$1;
(statearr_29564_31985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (15))){
var inst_29530 = (state_29553[(8)]);
var state_29553__$1 = state_29553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29553__$1,(18),to,inst_29530);
} else {
if((state_val_29554 === (21))){
var inst_29543 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
var statearr_29565_31986 = state_29553__$1;
(statearr_29565_31986[(2)] = inst_29543);

(statearr_29565_31986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (13))){
var inst_29545 = (state_29553[(2)]);
var state_29553__$1 = (function (){var statearr_29567 = state_29553;
(statearr_29567[(9)] = inst_29545);

return statearr_29567;
})();
var statearr_29568_31987 = state_29553__$1;
(statearr_29568_31987[(2)] = null);

(statearr_29568_31987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (6))){
var inst_29515 = (state_29553[(7)]);
var state_29553__$1 = state_29553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29553__$1,(11),inst_29515);
} else {
if((state_val_29554 === (17))){
var inst_29538 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
if(cljs.core.truth_(inst_29538)){
var statearr_29570_31991 = state_29553__$1;
(statearr_29570_31991[(1)] = (19));

} else {
var statearr_29571_31992 = state_29553__$1;
(statearr_29571_31992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (3))){
var inst_29550 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29553__$1,inst_29550);
} else {
if((state_val_29554 === (12))){
var inst_29527 = (state_29553[(10)]);
var state_29553__$1 = state_29553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29553__$1,(14),inst_29527);
} else {
if((state_val_29554 === (2))){
var state_29553__$1 = state_29553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29553__$1,(4),results);
} else {
if((state_val_29554 === (19))){
var state_29553__$1 = state_29553;
var statearr_29575_31994 = state_29553__$1;
(statearr_29575_31994[(2)] = null);

(statearr_29575_31994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (11))){
var inst_29527 = (state_29553[(2)]);
var state_29553__$1 = (function (){var statearr_29577 = state_29553;
(statearr_29577[(10)] = inst_29527);

return statearr_29577;
})();
var statearr_29578_31999 = state_29553__$1;
(statearr_29578_31999[(2)] = null);

(statearr_29578_31999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (9))){
var state_29553__$1 = state_29553;
var statearr_29579_32000 = state_29553__$1;
(statearr_29579_32000[(2)] = null);

(statearr_29579_32000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (5))){
var state_29553__$1 = state_29553;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29583_32001 = state_29553__$1;
(statearr_29583_32001[(1)] = (8));

} else {
var statearr_29584_32003 = state_29553__$1;
(statearr_29584_32003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (14))){
var inst_29530 = (state_29553[(8)]);
var inst_29530__$1 = (state_29553[(2)]);
var inst_29531 = (inst_29530__$1 == null);
var inst_29532 = cljs.core.not(inst_29531);
var state_29553__$1 = (function (){var statearr_29588 = state_29553;
(statearr_29588[(8)] = inst_29530__$1);

return statearr_29588;
})();
if(inst_29532){
var statearr_29592_32004 = state_29553__$1;
(statearr_29592_32004[(1)] = (15));

} else {
var statearr_29593_32005 = state_29553__$1;
(statearr_29593_32005[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (16))){
var state_29553__$1 = state_29553;
var statearr_29595_32008 = state_29553__$1;
(statearr_29595_32008[(2)] = false);

(statearr_29595_32008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (10))){
var inst_29524 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
var statearr_29599_32013 = state_29553__$1;
(statearr_29599_32013[(2)] = inst_29524);

(statearr_29599_32013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (18))){
var inst_29535 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
var statearr_29600_32015 = state_29553__$1;
(statearr_29600_32015[(2)] = inst_29535);

(statearr_29600_32015[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (8))){
var inst_29521 = cljs.core.async.close_BANG_(to);
var state_29553__$1 = state_29553;
var statearr_29601_32018 = state_29553__$1;
(statearr_29601_32018[(2)] = inst_29521);

(statearr_29601_32018[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0 = (function (){
var statearr_29606 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29606[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__);

(statearr_29606[(1)] = (1));

return statearr_29606;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1 = (function (state_29553){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_29553);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e29607){var ex__26519__auto__ = e29607;
var statearr_29608_32019 = state_29553;
(statearr_29608_32019[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_29553[(4)]))){
var statearr_29610_32020 = state_29553;
(statearr_29610_32020[(1)] = cljs.core.first((state_29553[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32025 = state_29553;
state_29553 = G__32025;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__ = function(state_29553){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1.call(this,state_29553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_29612 = f__26601__auto__();
(statearr_29612[(6)] = c__26600__auto__);

return statearr_29612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
}));

return c__26600__auto__;
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
var G__29614 = arguments.length;
switch (G__29614) {
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
var G__29621 = arguments.length;
switch (G__29621) {
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
var G__29633 = arguments.length;
switch (G__29633) {
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
var c__26600__auto___32047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_29671){
var state_val_29672 = (state_29671[(1)]);
if((state_val_29672 === (7))){
var inst_29667 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29681_32053 = state_29671__$1;
(statearr_29681_32053[(2)] = inst_29667);

(statearr_29681_32053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (1))){
var state_29671__$1 = state_29671;
var statearr_29685_32054 = state_29671__$1;
(statearr_29685_32054[(2)] = null);

(statearr_29685_32054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (4))){
var inst_29645 = (state_29671[(7)]);
var inst_29645__$1 = (state_29671[(2)]);
var inst_29646 = (inst_29645__$1 == null);
var state_29671__$1 = (function (){var statearr_29686 = state_29671;
(statearr_29686[(7)] = inst_29645__$1);

return statearr_29686;
})();
if(cljs.core.truth_(inst_29646)){
var statearr_29688_32057 = state_29671__$1;
(statearr_29688_32057[(1)] = (5));

} else {
var statearr_29689_32058 = state_29671__$1;
(statearr_29689_32058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (13))){
var state_29671__$1 = state_29671;
var statearr_29693_32059 = state_29671__$1;
(statearr_29693_32059[(2)] = null);

(statearr_29693_32059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (6))){
var inst_29645 = (state_29671[(7)]);
var inst_29654 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29645) : p.call(null,inst_29645));
var state_29671__$1 = state_29671;
if(cljs.core.truth_(inst_29654)){
var statearr_29694_32063 = state_29671__$1;
(statearr_29694_32063[(1)] = (9));

} else {
var statearr_29695_32064 = state_29671__$1;
(statearr_29695_32064[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (3))){
var inst_29669 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29671__$1,inst_29669);
} else {
if((state_val_29672 === (12))){
var state_29671__$1 = state_29671;
var statearr_29697_32065 = state_29671__$1;
(statearr_29697_32065[(2)] = null);

(statearr_29697_32065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (2))){
var state_29671__$1 = state_29671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29671__$1,(4),ch);
} else {
if((state_val_29672 === (11))){
var inst_29645 = (state_29671[(7)]);
var inst_29658 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29671__$1,(8),inst_29658,inst_29645);
} else {
if((state_val_29672 === (9))){
var state_29671__$1 = state_29671;
var statearr_29698_32069 = state_29671__$1;
(statearr_29698_32069[(2)] = tc);

(statearr_29698_32069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (5))){
var inst_29651 = cljs.core.async.close_BANG_(tc);
var inst_29652 = cljs.core.async.close_BANG_(fc);
var state_29671__$1 = (function (){var statearr_29700 = state_29671;
(statearr_29700[(8)] = inst_29651);

return statearr_29700;
})();
var statearr_29701_32070 = state_29671__$1;
(statearr_29701_32070[(2)] = inst_29652);

(statearr_29701_32070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (14))){
var inst_29665 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29702_32075 = state_29671__$1;
(statearr_29702_32075[(2)] = inst_29665);

(statearr_29702_32075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (10))){
var state_29671__$1 = state_29671;
var statearr_29704_32078 = state_29671__$1;
(statearr_29704_32078[(2)] = fc);

(statearr_29704_32078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (8))){
var inst_29660 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
if(cljs.core.truth_(inst_29660)){
var statearr_29705_32080 = state_29671__$1;
(statearr_29705_32080[(1)] = (12));

} else {
var statearr_29706_32081 = state_29671__$1;
(statearr_29706_32081[(1)] = (13));

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
var cljs$core$async$state_machine__26516__auto__ = null;
var cljs$core$async$state_machine__26516__auto____0 = (function (){
var statearr_29709 = [null,null,null,null,null,null,null,null,null];
(statearr_29709[(0)] = cljs$core$async$state_machine__26516__auto__);

(statearr_29709[(1)] = (1));

return statearr_29709;
});
var cljs$core$async$state_machine__26516__auto____1 = (function (state_29671){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_29671);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e29710){var ex__26519__auto__ = e29710;
var statearr_29712_32082 = state_29671;
(statearr_29712_32082[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_29671[(4)]))){
var statearr_29713_32083 = state_29671;
(statearr_29713_32083[(1)] = cljs.core.first((state_29671[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32084 = state_29671;
state_29671 = G__32084;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$state_machine__26516__auto__ = function(state_29671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26516__auto____1.call(this,state_29671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26516__auto____0;
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26516__auto____1;
return cljs$core$async$state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_29714 = f__26601__auto__();
(statearr_29714[(6)] = c__26600__auto___32047);

return statearr_29714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
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
var c__26600__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_29742){
var state_val_29743 = (state_29742[(1)]);
if((state_val_29743 === (7))){
var inst_29738 = (state_29742[(2)]);
var state_29742__$1 = state_29742;
var statearr_29744_32092 = state_29742__$1;
(statearr_29744_32092[(2)] = inst_29738);

(statearr_29744_32092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (1))){
var inst_29720 = init;
var inst_29721 = inst_29720;
var state_29742__$1 = (function (){var statearr_29745 = state_29742;
(statearr_29745[(7)] = inst_29721);

return statearr_29745;
})();
var statearr_29746_32095 = state_29742__$1;
(statearr_29746_32095[(2)] = null);

(statearr_29746_32095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (4))){
var inst_29724 = (state_29742[(8)]);
var inst_29724__$1 = (state_29742[(2)]);
var inst_29726 = (inst_29724__$1 == null);
var state_29742__$1 = (function (){var statearr_29749 = state_29742;
(statearr_29749[(8)] = inst_29724__$1);

return statearr_29749;
})();
if(cljs.core.truth_(inst_29726)){
var statearr_29750_32096 = state_29742__$1;
(statearr_29750_32096[(1)] = (5));

} else {
var statearr_29751_32097 = state_29742__$1;
(statearr_29751_32097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (6))){
var inst_29721 = (state_29742[(7)]);
var inst_29729 = (state_29742[(9)]);
var inst_29724 = (state_29742[(8)]);
var inst_29729__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29721,inst_29724) : f.call(null,inst_29721,inst_29724));
var inst_29730 = cljs.core.reduced_QMARK_(inst_29729__$1);
var state_29742__$1 = (function (){var statearr_29753 = state_29742;
(statearr_29753[(9)] = inst_29729__$1);

return statearr_29753;
})();
if(inst_29730){
var statearr_29754_32098 = state_29742__$1;
(statearr_29754_32098[(1)] = (8));

} else {
var statearr_29755_32099 = state_29742__$1;
(statearr_29755_32099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (3))){
var inst_29740 = (state_29742[(2)]);
var state_29742__$1 = state_29742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29742__$1,inst_29740);
} else {
if((state_val_29743 === (2))){
var state_29742__$1 = state_29742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29742__$1,(4),ch);
} else {
if((state_val_29743 === (9))){
var inst_29729 = (state_29742[(9)]);
var inst_29721 = inst_29729;
var state_29742__$1 = (function (){var statearr_29760 = state_29742;
(statearr_29760[(7)] = inst_29721);

return statearr_29760;
})();
var statearr_29761_32107 = state_29742__$1;
(statearr_29761_32107[(2)] = null);

(statearr_29761_32107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (5))){
var inst_29721 = (state_29742[(7)]);
var state_29742__$1 = state_29742;
var statearr_29763_32108 = state_29742__$1;
(statearr_29763_32108[(2)] = inst_29721);

(statearr_29763_32108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (10))){
var inst_29736 = (state_29742[(2)]);
var state_29742__$1 = state_29742;
var statearr_29764_32109 = state_29742__$1;
(statearr_29764_32109[(2)] = inst_29736);

(statearr_29764_32109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (8))){
var inst_29729 = (state_29742[(9)]);
var inst_29732 = cljs.core.deref(inst_29729);
var state_29742__$1 = state_29742;
var statearr_29765_32114 = state_29742__$1;
(statearr_29765_32114[(2)] = inst_29732);

(statearr_29765_32114[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__26516__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26516__auto____0 = (function (){
var statearr_29767 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29767[(0)] = cljs$core$async$reduce_$_state_machine__26516__auto__);

(statearr_29767[(1)] = (1));

return statearr_29767;
});
var cljs$core$async$reduce_$_state_machine__26516__auto____1 = (function (state_29742){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_29742);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e29769){var ex__26519__auto__ = e29769;
var statearr_29771_32116 = state_29742;
(statearr_29771_32116[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_29742[(4)]))){
var statearr_29773_32117 = state_29742;
(statearr_29773_32117[(1)] = cljs.core.first((state_29742[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32118 = state_29742;
state_29742 = G__32118;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26516__auto__ = function(state_29742){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26516__auto____1.call(this,state_29742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26516__auto____0;
cljs$core$async$reduce_$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26516__auto____1;
return cljs$core$async$reduce_$_state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_29774 = f__26601__auto__();
(statearr_29774[(6)] = c__26600__auto__);

return statearr_29774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
}));

return c__26600__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__26600__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_29785){
var state_val_29786 = (state_29785[(1)]);
if((state_val_29786 === (1))){
var inst_29779 = cljs.core.async.reduce(f__$1,init,ch);
var state_29785__$1 = state_29785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29785__$1,(2),inst_29779);
} else {
if((state_val_29786 === (2))){
var inst_29781 = (state_29785[(2)]);
var inst_29782 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29781) : f__$1.call(null,inst_29781));
var state_29785__$1 = state_29785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29785__$1,inst_29782);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26516__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26516__auto____0 = (function (){
var statearr_29789 = [null,null,null,null,null,null,null];
(statearr_29789[(0)] = cljs$core$async$transduce_$_state_machine__26516__auto__);

(statearr_29789[(1)] = (1));

return statearr_29789;
});
var cljs$core$async$transduce_$_state_machine__26516__auto____1 = (function (state_29785){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_29785);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e29790){var ex__26519__auto__ = e29790;
var statearr_29792_32132 = state_29785;
(statearr_29792_32132[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_29785[(4)]))){
var statearr_29793_32134 = state_29785;
(statearr_29793_32134[(1)] = cljs.core.first((state_29785[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32135 = state_29785;
state_29785 = G__32135;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26516__auto__ = function(state_29785){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26516__auto____1.call(this,state_29785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26516__auto____0;
cljs$core$async$transduce_$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26516__auto____1;
return cljs$core$async$transduce_$_state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_29797 = f__26601__auto__();
(statearr_29797[(6)] = c__26600__auto__);

return statearr_29797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
}));

return c__26600__auto__;
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
var G__29801 = arguments.length;
switch (G__29801) {
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
var c__26600__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_29836){
var state_val_29837 = (state_29836[(1)]);
if((state_val_29837 === (7))){
var inst_29815 = (state_29836[(2)]);
var state_29836__$1 = state_29836;
var statearr_29846_32147 = state_29836__$1;
(statearr_29846_32147[(2)] = inst_29815);

(statearr_29846_32147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (1))){
var inst_29809 = cljs.core.seq(coll);
var inst_29810 = inst_29809;
var state_29836__$1 = (function (){var statearr_29850 = state_29836;
(statearr_29850[(7)] = inst_29810);

return statearr_29850;
})();
var statearr_29851_32149 = state_29836__$1;
(statearr_29851_32149[(2)] = null);

(statearr_29851_32149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (4))){
var inst_29810 = (state_29836[(7)]);
var inst_29813 = cljs.core.first(inst_29810);
var state_29836__$1 = state_29836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29836__$1,(7),ch,inst_29813);
} else {
if((state_val_29837 === (13))){
var inst_29830 = (state_29836[(2)]);
var state_29836__$1 = state_29836;
var statearr_29858_32154 = state_29836__$1;
(statearr_29858_32154[(2)] = inst_29830);

(statearr_29858_32154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (6))){
var inst_29818 = (state_29836[(2)]);
var state_29836__$1 = state_29836;
if(cljs.core.truth_(inst_29818)){
var statearr_29859_32158 = state_29836__$1;
(statearr_29859_32158[(1)] = (8));

} else {
var statearr_29860_32160 = state_29836__$1;
(statearr_29860_32160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (3))){
var inst_29834 = (state_29836[(2)]);
var state_29836__$1 = state_29836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29836__$1,inst_29834);
} else {
if((state_val_29837 === (12))){
var state_29836__$1 = state_29836;
var statearr_29862_32164 = state_29836__$1;
(statearr_29862_32164[(2)] = null);

(statearr_29862_32164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (2))){
var inst_29810 = (state_29836[(7)]);
var state_29836__$1 = state_29836;
if(cljs.core.truth_(inst_29810)){
var statearr_29865_32166 = state_29836__$1;
(statearr_29865_32166[(1)] = (4));

} else {
var statearr_29867_32167 = state_29836__$1;
(statearr_29867_32167[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (11))){
var inst_29824 = cljs.core.async.close_BANG_(ch);
var state_29836__$1 = state_29836;
var statearr_29874_32169 = state_29836__$1;
(statearr_29874_32169[(2)] = inst_29824);

(statearr_29874_32169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (9))){
var state_29836__$1 = state_29836;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29875_32171 = state_29836__$1;
(statearr_29875_32171[(1)] = (11));

} else {
var statearr_29876_32172 = state_29836__$1;
(statearr_29876_32172[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (5))){
var inst_29810 = (state_29836[(7)]);
var state_29836__$1 = state_29836;
var statearr_29880_32174 = state_29836__$1;
(statearr_29880_32174[(2)] = inst_29810);

(statearr_29880_32174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (10))){
var inst_29832 = (state_29836[(2)]);
var state_29836__$1 = state_29836;
var statearr_29881_32175 = state_29836__$1;
(statearr_29881_32175[(2)] = inst_29832);

(statearr_29881_32175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (8))){
var inst_29810 = (state_29836[(7)]);
var inst_29820 = cljs.core.next(inst_29810);
var inst_29810__$1 = inst_29820;
var state_29836__$1 = (function (){var statearr_29883 = state_29836;
(statearr_29883[(7)] = inst_29810__$1);

return statearr_29883;
})();
var statearr_29886_32177 = state_29836__$1;
(statearr_29886_32177[(2)] = null);

(statearr_29886_32177[(1)] = (2));


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
var cljs$core$async$state_machine__26516__auto__ = null;
var cljs$core$async$state_machine__26516__auto____0 = (function (){
var statearr_29888 = [null,null,null,null,null,null,null,null];
(statearr_29888[(0)] = cljs$core$async$state_machine__26516__auto__);

(statearr_29888[(1)] = (1));

return statearr_29888;
});
var cljs$core$async$state_machine__26516__auto____1 = (function (state_29836){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_29836);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e29889){var ex__26519__auto__ = e29889;
var statearr_29893_32182 = state_29836;
(statearr_29893_32182[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_29836[(4)]))){
var statearr_29894_32183 = state_29836;
(statearr_29894_32183[(1)] = cljs.core.first((state_29836[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32184 = state_29836;
state_29836 = G__32184;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$state_machine__26516__auto__ = function(state_29836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26516__auto____1.call(this,state_29836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26516__auto____0;
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26516__auto____1;
return cljs$core$async$state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_29898 = f__26601__auto__();
(statearr_29898[(6)] = c__26600__auto__);

return statearr_29898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
}));

return c__26600__auto__;
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
var G__29908 = arguments.length;
switch (G__29908) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_32202 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_32202(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32214 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_32214(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32228 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_32228(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32233 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_32233(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29952 = (function (ch,cs,meta29953){
this.ch = ch;
this.cs = cs;
this.meta29953 = meta29953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29954,meta29953__$1){
var self__ = this;
var _29954__$1 = this;
return (new cljs.core.async.t_cljs$core$async29952(self__.ch,self__.cs,meta29953__$1));
}));

(cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29954){
var self__ = this;
var _29954__$1 = this;
return self__.meta29953;
}));

(cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29953","meta29953",2098493533,null)], null);
}));

(cljs.core.async.t_cljs$core$async29952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29952");

(cljs.core.async.t_cljs$core$async29952.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29952.
 */
cljs.core.async.__GT_t_cljs$core$async29952 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29952(ch__$1,cs__$1,meta29953){
return (new cljs.core.async.t_cljs$core$async29952(ch__$1,cs__$1,meta29953));
});

}

return (new cljs.core.async.t_cljs$core$async29952(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26600__auto___32247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_30150){
var state_val_30151 = (state_30150[(1)]);
if((state_val_30151 === (7))){
var inst_30146 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30160_32248 = state_30150__$1;
(statearr_30160_32248[(2)] = inst_30146);

(statearr_30160_32248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (20))){
var inst_30020 = (state_30150[(7)]);
var inst_30035 = cljs.core.first(inst_30020);
var inst_30039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30035,(0),null);
var inst_30044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30035,(1),null);
var state_30150__$1 = (function (){var statearr_30168 = state_30150;
(statearr_30168[(8)] = inst_30039);

return statearr_30168;
})();
if(cljs.core.truth_(inst_30044)){
var statearr_30171_32250 = state_30150__$1;
(statearr_30171_32250[(1)] = (22));

} else {
var statearr_30177_32251 = state_30150__$1;
(statearr_30177_32251[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (27))){
var inst_30087 = (state_30150[(9)]);
var inst_29966 = (state_30150[(10)]);
var inst_30077 = (state_30150[(11)]);
var inst_30079 = (state_30150[(12)]);
var inst_30087__$1 = cljs.core._nth(inst_30077,inst_30079);
var inst_30089 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30087__$1,inst_29966,done);
var state_30150__$1 = (function (){var statearr_30189 = state_30150;
(statearr_30189[(9)] = inst_30087__$1);

return statearr_30189;
})();
if(cljs.core.truth_(inst_30089)){
var statearr_30190_32254 = state_30150__$1;
(statearr_30190_32254[(1)] = (30));

} else {
var statearr_30191_32255 = state_30150__$1;
(statearr_30191_32255[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (1))){
var state_30150__$1 = state_30150;
var statearr_30193_32257 = state_30150__$1;
(statearr_30193_32257[(2)] = null);

(statearr_30193_32257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (24))){
var inst_30020 = (state_30150[(7)]);
var inst_30049 = (state_30150[(2)]);
var inst_30050 = cljs.core.next(inst_30020);
var inst_29975 = inst_30050;
var inst_29976 = null;
var inst_29977 = (0);
var inst_29978 = (0);
var state_30150__$1 = (function (){var statearr_30196 = state_30150;
(statearr_30196[(13)] = inst_29976);

(statearr_30196[(14)] = inst_29975);

(statearr_30196[(15)] = inst_29978);

(statearr_30196[(16)] = inst_29977);

(statearr_30196[(17)] = inst_30049);

return statearr_30196;
})();
var statearr_30197_32267 = state_30150__$1;
(statearr_30197_32267[(2)] = null);

(statearr_30197_32267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (39))){
var state_30150__$1 = state_30150;
var statearr_30206_32268 = state_30150__$1;
(statearr_30206_32268[(2)] = null);

(statearr_30206_32268[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (4))){
var inst_29966 = (state_30150[(10)]);
var inst_29966__$1 = (state_30150[(2)]);
var inst_29967 = (inst_29966__$1 == null);
var state_30150__$1 = (function (){var statearr_30208 = state_30150;
(statearr_30208[(10)] = inst_29966__$1);

return statearr_30208;
})();
if(cljs.core.truth_(inst_29967)){
var statearr_30212_32269 = state_30150__$1;
(statearr_30212_32269[(1)] = (5));

} else {
var statearr_30217_32274 = state_30150__$1;
(statearr_30217_32274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (15))){
var inst_29976 = (state_30150[(13)]);
var inst_29975 = (state_30150[(14)]);
var inst_29978 = (state_30150[(15)]);
var inst_29977 = (state_30150[(16)]);
var inst_30012 = (state_30150[(2)]);
var inst_30014 = (inst_29978 + (1));
var tmp30201 = inst_29976;
var tmp30202 = inst_29975;
var tmp30203 = inst_29977;
var inst_29975__$1 = tmp30202;
var inst_29976__$1 = tmp30201;
var inst_29977__$1 = tmp30203;
var inst_29978__$1 = inst_30014;
var state_30150__$1 = (function (){var statearr_30223 = state_30150;
(statearr_30223[(13)] = inst_29976__$1);

(statearr_30223[(14)] = inst_29975__$1);

(statearr_30223[(15)] = inst_29978__$1);

(statearr_30223[(18)] = inst_30012);

(statearr_30223[(16)] = inst_29977__$1);

return statearr_30223;
})();
var statearr_30225_32275 = state_30150__$1;
(statearr_30225_32275[(2)] = null);

(statearr_30225_32275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (21))){
var inst_30053 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30229_32276 = state_30150__$1;
(statearr_30229_32276[(2)] = inst_30053);

(statearr_30229_32276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (31))){
var inst_30087 = (state_30150[(9)]);
var inst_30098 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30087);
var state_30150__$1 = state_30150;
var statearr_30232_32277 = state_30150__$1;
(statearr_30232_32277[(2)] = inst_30098);

(statearr_30232_32277[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (32))){
var inst_30078 = (state_30150[(19)]);
var inst_30076 = (state_30150[(20)]);
var inst_30077 = (state_30150[(11)]);
var inst_30079 = (state_30150[(12)]);
var inst_30100 = (state_30150[(2)]);
var inst_30101 = (inst_30079 + (1));
var tmp30226 = inst_30078;
var tmp30227 = inst_30076;
var tmp30228 = inst_30077;
var inst_30076__$1 = tmp30227;
var inst_30077__$1 = tmp30228;
var inst_30078__$1 = tmp30226;
var inst_30079__$1 = inst_30101;
var state_30150__$1 = (function (){var statearr_30239 = state_30150;
(statearr_30239[(19)] = inst_30078__$1);

(statearr_30239[(21)] = inst_30100);

(statearr_30239[(20)] = inst_30076__$1);

(statearr_30239[(11)] = inst_30077__$1);

(statearr_30239[(12)] = inst_30079__$1);

return statearr_30239;
})();
var statearr_30240_32284 = state_30150__$1;
(statearr_30240_32284[(2)] = null);

(statearr_30240_32284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (40))){
var inst_30114 = (state_30150[(22)]);
var inst_30118 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30114);
var state_30150__$1 = state_30150;
var statearr_30250_32285 = state_30150__$1;
(statearr_30250_32285[(2)] = inst_30118);

(statearr_30250_32285[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (33))){
var inst_30105 = (state_30150[(23)]);
var inst_30107 = cljs.core.chunked_seq_QMARK_(inst_30105);
var state_30150__$1 = state_30150;
if(inst_30107){
var statearr_30252_32288 = state_30150__$1;
(statearr_30252_32288[(1)] = (36));

} else {
var statearr_30255_32289 = state_30150__$1;
(statearr_30255_32289[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (13))){
var inst_30001 = (state_30150[(24)]);
var inst_30006 = cljs.core.async.close_BANG_(inst_30001);
var state_30150__$1 = state_30150;
var statearr_30257_32291 = state_30150__$1;
(statearr_30257_32291[(2)] = inst_30006);

(statearr_30257_32291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (22))){
var inst_30039 = (state_30150[(8)]);
var inst_30046 = cljs.core.async.close_BANG_(inst_30039);
var state_30150__$1 = state_30150;
var statearr_30258_32294 = state_30150__$1;
(statearr_30258_32294[(2)] = inst_30046);

(statearr_30258_32294[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (36))){
var inst_30105 = (state_30150[(23)]);
var inst_30109 = cljs.core.chunk_first(inst_30105);
var inst_30110 = cljs.core.chunk_rest(inst_30105);
var inst_30111 = cljs.core.count(inst_30109);
var inst_30076 = inst_30110;
var inst_30077 = inst_30109;
var inst_30078 = inst_30111;
var inst_30079 = (0);
var state_30150__$1 = (function (){var statearr_30259 = state_30150;
(statearr_30259[(19)] = inst_30078);

(statearr_30259[(20)] = inst_30076);

(statearr_30259[(11)] = inst_30077);

(statearr_30259[(12)] = inst_30079);

return statearr_30259;
})();
var statearr_30260_32297 = state_30150__$1;
(statearr_30260_32297[(2)] = null);

(statearr_30260_32297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (41))){
var inst_30105 = (state_30150[(23)]);
var inst_30120 = (state_30150[(2)]);
var inst_30122 = cljs.core.next(inst_30105);
var inst_30076 = inst_30122;
var inst_30077 = null;
var inst_30078 = (0);
var inst_30079 = (0);
var state_30150__$1 = (function (){var statearr_30261 = state_30150;
(statearr_30261[(19)] = inst_30078);

(statearr_30261[(25)] = inst_30120);

(statearr_30261[(20)] = inst_30076);

(statearr_30261[(11)] = inst_30077);

(statearr_30261[(12)] = inst_30079);

return statearr_30261;
})();
var statearr_30262_32300 = state_30150__$1;
(statearr_30262_32300[(2)] = null);

(statearr_30262_32300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (43))){
var state_30150__$1 = state_30150;
var statearr_30263_32301 = state_30150__$1;
(statearr_30263_32301[(2)] = null);

(statearr_30263_32301[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (29))){
var inst_30131 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30268_32304 = state_30150__$1;
(statearr_30268_32304[(2)] = inst_30131);

(statearr_30268_32304[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (44))){
var inst_30143 = (state_30150[(2)]);
var state_30150__$1 = (function (){var statearr_30272 = state_30150;
(statearr_30272[(26)] = inst_30143);

return statearr_30272;
})();
var statearr_30273_32307 = state_30150__$1;
(statearr_30273_32307[(2)] = null);

(statearr_30273_32307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (6))){
var inst_30064 = (state_30150[(27)]);
var inst_30063 = cljs.core.deref(cs);
var inst_30064__$1 = cljs.core.keys(inst_30063);
var inst_30065 = cljs.core.count(inst_30064__$1);
var inst_30066 = cljs.core.reset_BANG_(dctr,inst_30065);
var inst_30075 = cljs.core.seq(inst_30064__$1);
var inst_30076 = inst_30075;
var inst_30077 = null;
var inst_30078 = (0);
var inst_30079 = (0);
var state_30150__$1 = (function (){var statearr_30277 = state_30150;
(statearr_30277[(28)] = inst_30066);

(statearr_30277[(19)] = inst_30078);

(statearr_30277[(27)] = inst_30064__$1);

(statearr_30277[(20)] = inst_30076);

(statearr_30277[(11)] = inst_30077);

(statearr_30277[(12)] = inst_30079);

return statearr_30277;
})();
var statearr_30278_32312 = state_30150__$1;
(statearr_30278_32312[(2)] = null);

(statearr_30278_32312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (28))){
var inst_30105 = (state_30150[(23)]);
var inst_30076 = (state_30150[(20)]);
var inst_30105__$1 = cljs.core.seq(inst_30076);
var state_30150__$1 = (function (){var statearr_30282 = state_30150;
(statearr_30282[(23)] = inst_30105__$1);

return statearr_30282;
})();
if(inst_30105__$1){
var statearr_30283_32313 = state_30150__$1;
(statearr_30283_32313[(1)] = (33));

} else {
var statearr_30284_32314 = state_30150__$1;
(statearr_30284_32314[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (25))){
var inst_30078 = (state_30150[(19)]);
var inst_30079 = (state_30150[(12)]);
var inst_30082 = (inst_30079 < inst_30078);
var inst_30083 = inst_30082;
var state_30150__$1 = state_30150;
if(cljs.core.truth_(inst_30083)){
var statearr_30288_32315 = state_30150__$1;
(statearr_30288_32315[(1)] = (27));

} else {
var statearr_30289_32316 = state_30150__$1;
(statearr_30289_32316[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (34))){
var state_30150__$1 = state_30150;
var statearr_30291_32319 = state_30150__$1;
(statearr_30291_32319[(2)] = null);

(statearr_30291_32319[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (17))){
var state_30150__$1 = state_30150;
var statearr_30294_32321 = state_30150__$1;
(statearr_30294_32321[(2)] = null);

(statearr_30294_32321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (3))){
var inst_30148 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30150__$1,inst_30148);
} else {
if((state_val_30151 === (12))){
var inst_30058 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30298_32323 = state_30150__$1;
(statearr_30298_32323[(2)] = inst_30058);

(statearr_30298_32323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (2))){
var state_30150__$1 = state_30150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30150__$1,(4),ch);
} else {
if((state_val_30151 === (23))){
var state_30150__$1 = state_30150;
var statearr_30302_32327 = state_30150__$1;
(statearr_30302_32327[(2)] = null);

(statearr_30302_32327[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (35))){
var inst_30128 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30305_32329 = state_30150__$1;
(statearr_30305_32329[(2)] = inst_30128);

(statearr_30305_32329[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (19))){
var inst_30020 = (state_30150[(7)]);
var inst_30027 = cljs.core.chunk_first(inst_30020);
var inst_30028 = cljs.core.chunk_rest(inst_30020);
var inst_30029 = cljs.core.count(inst_30027);
var inst_29975 = inst_30028;
var inst_29976 = inst_30027;
var inst_29977 = inst_30029;
var inst_29978 = (0);
var state_30150__$1 = (function (){var statearr_30313 = state_30150;
(statearr_30313[(13)] = inst_29976);

(statearr_30313[(14)] = inst_29975);

(statearr_30313[(15)] = inst_29978);

(statearr_30313[(16)] = inst_29977);

return statearr_30313;
})();
var statearr_30314_32334 = state_30150__$1;
(statearr_30314_32334[(2)] = null);

(statearr_30314_32334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (11))){
var inst_30020 = (state_30150[(7)]);
var inst_29975 = (state_30150[(14)]);
var inst_30020__$1 = cljs.core.seq(inst_29975);
var state_30150__$1 = (function (){var statearr_30315 = state_30150;
(statearr_30315[(7)] = inst_30020__$1);

return statearr_30315;
})();
if(inst_30020__$1){
var statearr_30316_32338 = state_30150__$1;
(statearr_30316_32338[(1)] = (16));

} else {
var statearr_30319_32339 = state_30150__$1;
(statearr_30319_32339[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (9))){
var inst_30060 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30320_32340 = state_30150__$1;
(statearr_30320_32340[(2)] = inst_30060);

(statearr_30320_32340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (5))){
var inst_29973 = cljs.core.deref(cs);
var inst_29974 = cljs.core.seq(inst_29973);
var inst_29975 = inst_29974;
var inst_29976 = null;
var inst_29977 = (0);
var inst_29978 = (0);
var state_30150__$1 = (function (){var statearr_30325 = state_30150;
(statearr_30325[(13)] = inst_29976);

(statearr_30325[(14)] = inst_29975);

(statearr_30325[(15)] = inst_29978);

(statearr_30325[(16)] = inst_29977);

return statearr_30325;
})();
var statearr_30326_32344 = state_30150__$1;
(statearr_30326_32344[(2)] = null);

(statearr_30326_32344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (14))){
var state_30150__$1 = state_30150;
var statearr_30329_32346 = state_30150__$1;
(statearr_30329_32346[(2)] = null);

(statearr_30329_32346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (45))){
var inst_30140 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30334_32350 = state_30150__$1;
(statearr_30334_32350[(2)] = inst_30140);

(statearr_30334_32350[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (26))){
var inst_30064 = (state_30150[(27)]);
var inst_30136 = (state_30150[(2)]);
var inst_30137 = cljs.core.seq(inst_30064);
var state_30150__$1 = (function (){var statearr_30344 = state_30150;
(statearr_30344[(29)] = inst_30136);

return statearr_30344;
})();
if(inst_30137){
var statearr_30347_32356 = state_30150__$1;
(statearr_30347_32356[(1)] = (42));

} else {
var statearr_30349_32357 = state_30150__$1;
(statearr_30349_32357[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (16))){
var inst_30020 = (state_30150[(7)]);
var inst_30022 = cljs.core.chunked_seq_QMARK_(inst_30020);
var state_30150__$1 = state_30150;
if(inst_30022){
var statearr_30357_32361 = state_30150__$1;
(statearr_30357_32361[(1)] = (19));

} else {
var statearr_30358_32363 = state_30150__$1;
(statearr_30358_32363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (38))){
var inst_30125 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30364_32366 = state_30150__$1;
(statearr_30364_32366[(2)] = inst_30125);

(statearr_30364_32366[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (30))){
var state_30150__$1 = state_30150;
var statearr_30365_32368 = state_30150__$1;
(statearr_30365_32368[(2)] = null);

(statearr_30365_32368[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (10))){
var inst_29976 = (state_30150[(13)]);
var inst_29978 = (state_30150[(15)]);
var inst_29997 = cljs.core._nth(inst_29976,inst_29978);
var inst_30001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29997,(0),null);
var inst_30002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29997,(1),null);
var state_30150__$1 = (function (){var statearr_30367 = state_30150;
(statearr_30367[(24)] = inst_30001);

return statearr_30367;
})();
if(cljs.core.truth_(inst_30002)){
var statearr_30368_32373 = state_30150__$1;
(statearr_30368_32373[(1)] = (13));

} else {
var statearr_30370_32374 = state_30150__$1;
(statearr_30370_32374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (18))){
var inst_30056 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30371_32375 = state_30150__$1;
(statearr_30371_32375[(2)] = inst_30056);

(statearr_30371_32375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (42))){
var state_30150__$1 = state_30150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30150__$1,(45),dchan);
} else {
if((state_val_30151 === (37))){
var inst_30105 = (state_30150[(23)]);
var inst_30114 = (state_30150[(22)]);
var inst_29966 = (state_30150[(10)]);
var inst_30114__$1 = cljs.core.first(inst_30105);
var inst_30115 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30114__$1,inst_29966,done);
var state_30150__$1 = (function (){var statearr_30373 = state_30150;
(statearr_30373[(22)] = inst_30114__$1);

return statearr_30373;
})();
if(cljs.core.truth_(inst_30115)){
var statearr_30374_32378 = state_30150__$1;
(statearr_30374_32378[(1)] = (39));

} else {
var statearr_30375_32379 = state_30150__$1;
(statearr_30375_32379[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (8))){
var inst_29978 = (state_30150[(15)]);
var inst_29977 = (state_30150[(16)]);
var inst_29981 = (inst_29978 < inst_29977);
var inst_29982 = inst_29981;
var state_30150__$1 = state_30150;
if(cljs.core.truth_(inst_29982)){
var statearr_30376_32380 = state_30150__$1;
(statearr_30376_32380[(1)] = (10));

} else {
var statearr_30377_32381 = state_30150__$1;
(statearr_30377_32381[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__26516__auto__ = null;
var cljs$core$async$mult_$_state_machine__26516__auto____0 = (function (){
var statearr_30378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30378[(0)] = cljs$core$async$mult_$_state_machine__26516__auto__);

(statearr_30378[(1)] = (1));

return statearr_30378;
});
var cljs$core$async$mult_$_state_machine__26516__auto____1 = (function (state_30150){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_30150);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e30385){var ex__26519__auto__ = e30385;
var statearr_30386_32383 = state_30150;
(statearr_30386_32383[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_30150[(4)]))){
var statearr_30387_32384 = state_30150;
(statearr_30387_32384[(1)] = cljs.core.first((state_30150[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32385 = state_30150;
state_30150 = G__32385;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26516__auto__ = function(state_30150){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26516__auto____1.call(this,state_30150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26516__auto____0;
cljs$core$async$mult_$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26516__auto____1;
return cljs$core$async$mult_$_state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_30388 = f__26601__auto__();
(statearr_30388[(6)] = c__26600__auto___32247);

return statearr_30388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
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
var G__30390 = arguments.length;
switch (G__30390) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_32393 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_32393(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32395 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_32395(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32398 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32398(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32401 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_32401(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32402 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32402(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32406 = arguments.length;
var i__4737__auto___32407 = (0);
while(true){
if((i__4737__auto___32407 < len__4736__auto___32406)){
args__4742__auto__.push((arguments[i__4737__auto___32407]));

var G__32408 = (i__4737__auto___32407 + (1));
i__4737__auto___32407 = G__32408;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30416){
var map__30417 = p__30416;
var map__30417__$1 = (((((!((map__30417 == null))))?(((((map__30417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30417):map__30417);
var opts = map__30417__$1;
var statearr_30422_32411 = state;
(statearr_30422_32411[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30423_32412 = state;
(statearr_30423_32412[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30424_32413 = state;
(statearr_30424_32413[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30412){
var G__30413 = cljs.core.first(seq30412);
var seq30412__$1 = cljs.core.next(seq30412);
var G__30414 = cljs.core.first(seq30412__$1);
var seq30412__$2 = cljs.core.next(seq30412__$1);
var G__30415 = cljs.core.first(seq30412__$2);
var seq30412__$3 = cljs.core.next(seq30412__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30413,G__30414,G__30415,seq30412__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30436 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30437){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30437 = meta30437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30438,meta30437__$1){
var self__ = this;
var _30438__$1 = this;
return (new cljs.core.async.t_cljs$core$async30436(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30437__$1));
}));

(cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30438){
var self__ = this;
var _30438__$1 = this;
return self__.meta30437;
}));

(cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30437","meta30437",1976692194,null)], null);
}));

(cljs.core.async.t_cljs$core$async30436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30436");

(cljs.core.async.t_cljs$core$async30436.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30436.
 */
cljs.core.async.__GT_t_cljs$core$async30436 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30436(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30437){
return (new cljs.core.async.t_cljs$core$async30436(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30437));
});

}

return (new cljs.core.async.t_cljs$core$async30436(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26600__auto___32439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_30559){
var state_val_30560 = (state_30559[(1)]);
if((state_val_30560 === (7))){
var inst_30470 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30561_32440 = state_30559__$1;
(statearr_30561_32440[(2)] = inst_30470);

(statearr_30561_32440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (20))){
var inst_30482 = (state_30559[(7)]);
var state_30559__$1 = state_30559;
var statearr_30562_32444 = state_30559__$1;
(statearr_30562_32444[(2)] = inst_30482);

(statearr_30562_32444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (27))){
var state_30559__$1 = state_30559;
var statearr_30566_32445 = state_30559__$1;
(statearr_30566_32445[(2)] = null);

(statearr_30566_32445[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (1))){
var inst_30457 = (state_30559[(8)]);
var inst_30457__$1 = calc_state();
var inst_30459 = (inst_30457__$1 == null);
var inst_30460 = cljs.core.not(inst_30459);
var state_30559__$1 = (function (){var statearr_30567 = state_30559;
(statearr_30567[(8)] = inst_30457__$1);

return statearr_30567;
})();
if(inst_30460){
var statearr_30568_32450 = state_30559__$1;
(statearr_30568_32450[(1)] = (2));

} else {
var statearr_30569_32451 = state_30559__$1;
(statearr_30569_32451[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (24))){
var inst_30530 = (state_30559[(9)]);
var inst_30515 = (state_30559[(10)]);
var inst_30506 = (state_30559[(11)]);
var inst_30530__$1 = (inst_30506.cljs$core$IFn$_invoke$arity$1 ? inst_30506.cljs$core$IFn$_invoke$arity$1(inst_30515) : inst_30506.call(null,inst_30515));
var state_30559__$1 = (function (){var statearr_30570 = state_30559;
(statearr_30570[(9)] = inst_30530__$1);

return statearr_30570;
})();
if(cljs.core.truth_(inst_30530__$1)){
var statearr_30571_32452 = state_30559__$1;
(statearr_30571_32452[(1)] = (29));

} else {
var statearr_30572_32453 = state_30559__$1;
(statearr_30572_32453[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (4))){
var inst_30473 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
if(cljs.core.truth_(inst_30473)){
var statearr_30573_32454 = state_30559__$1;
(statearr_30573_32454[(1)] = (8));

} else {
var statearr_30574_32455 = state_30559__$1;
(statearr_30574_32455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (15))){
var inst_30500 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
if(cljs.core.truth_(inst_30500)){
var statearr_30575_32456 = state_30559__$1;
(statearr_30575_32456[(1)] = (19));

} else {
var statearr_30579_32457 = state_30559__$1;
(statearr_30579_32457[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (21))){
var inst_30505 = (state_30559[(12)]);
var inst_30505__$1 = (state_30559[(2)]);
var inst_30506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30505__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30505__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30505__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30559__$1 = (function (){var statearr_30581 = state_30559;
(statearr_30581[(12)] = inst_30505__$1);

(statearr_30581[(13)] = inst_30507);

(statearr_30581[(11)] = inst_30506);

return statearr_30581;
})();
return cljs.core.async.ioc_alts_BANG_(state_30559__$1,(22),inst_30508);
} else {
if((state_val_30560 === (31))){
var inst_30538 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
if(cljs.core.truth_(inst_30538)){
var statearr_30582_32459 = state_30559__$1;
(statearr_30582_32459[(1)] = (32));

} else {
var statearr_30583_32461 = state_30559__$1;
(statearr_30583_32461[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (32))){
var inst_30514 = (state_30559[(14)]);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30559__$1,(35),out,inst_30514);
} else {
if((state_val_30560 === (33))){
var inst_30505 = (state_30559[(12)]);
var inst_30482 = inst_30505;
var state_30559__$1 = (function (){var statearr_30588 = state_30559;
(statearr_30588[(7)] = inst_30482);

return statearr_30588;
})();
var statearr_30589_32463 = state_30559__$1;
(statearr_30589_32463[(2)] = null);

(statearr_30589_32463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (13))){
var inst_30482 = (state_30559[(7)]);
var inst_30489 = inst_30482.cljs$lang$protocol_mask$partition0$;
var inst_30490 = (inst_30489 & (64));
var inst_30491 = inst_30482.cljs$core$ISeq$;
var inst_30492 = (cljs.core.PROTOCOL_SENTINEL === inst_30491);
var inst_30493 = ((inst_30490) || (inst_30492));
var state_30559__$1 = state_30559;
if(cljs.core.truth_(inst_30493)){
var statearr_30591_32464 = state_30559__$1;
(statearr_30591_32464[(1)] = (16));

} else {
var statearr_30592_32465 = state_30559__$1;
(statearr_30592_32465[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (22))){
var inst_30514 = (state_30559[(14)]);
var inst_30515 = (state_30559[(10)]);
var inst_30513 = (state_30559[(2)]);
var inst_30514__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30513,(0),null);
var inst_30515__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30513,(1),null);
var inst_30516 = (inst_30514__$1 == null);
var inst_30517 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30515__$1,change);
var inst_30518 = ((inst_30516) || (inst_30517));
var state_30559__$1 = (function (){var statearr_30593 = state_30559;
(statearr_30593[(14)] = inst_30514__$1);

(statearr_30593[(10)] = inst_30515__$1);

return statearr_30593;
})();
if(cljs.core.truth_(inst_30518)){
var statearr_30594_32467 = state_30559__$1;
(statearr_30594_32467[(1)] = (23));

} else {
var statearr_30595_32468 = state_30559__$1;
(statearr_30595_32468[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (36))){
var inst_30505 = (state_30559[(12)]);
var inst_30482 = inst_30505;
var state_30559__$1 = (function (){var statearr_30596 = state_30559;
(statearr_30596[(7)] = inst_30482);

return statearr_30596;
})();
var statearr_30597_32469 = state_30559__$1;
(statearr_30597_32469[(2)] = null);

(statearr_30597_32469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (29))){
var inst_30530 = (state_30559[(9)]);
var state_30559__$1 = state_30559;
var statearr_30598_32471 = state_30559__$1;
(statearr_30598_32471[(2)] = inst_30530);

(statearr_30598_32471[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (6))){
var state_30559__$1 = state_30559;
var statearr_30599_32472 = state_30559__$1;
(statearr_30599_32472[(2)] = false);

(statearr_30599_32472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (28))){
var inst_30525 = (state_30559[(2)]);
var inst_30526 = calc_state();
var inst_30482 = inst_30526;
var state_30559__$1 = (function (){var statearr_30600 = state_30559;
(statearr_30600[(15)] = inst_30525);

(statearr_30600[(7)] = inst_30482);

return statearr_30600;
})();
var statearr_30601_32475 = state_30559__$1;
(statearr_30601_32475[(2)] = null);

(statearr_30601_32475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (25))){
var inst_30552 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30602_32476 = state_30559__$1;
(statearr_30602_32476[(2)] = inst_30552);

(statearr_30602_32476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (34))){
var inst_30550 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30603_32478 = state_30559__$1;
(statearr_30603_32478[(2)] = inst_30550);

(statearr_30603_32478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (17))){
var state_30559__$1 = state_30559;
var statearr_30604_32479 = state_30559__$1;
(statearr_30604_32479[(2)] = false);

(statearr_30604_32479[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (3))){
var state_30559__$1 = state_30559;
var statearr_30605_32481 = state_30559__$1;
(statearr_30605_32481[(2)] = false);

(statearr_30605_32481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (12))){
var inst_30554 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30559__$1,inst_30554);
} else {
if((state_val_30560 === (2))){
var inst_30457 = (state_30559[(8)]);
var inst_30462 = inst_30457.cljs$lang$protocol_mask$partition0$;
var inst_30463 = (inst_30462 & (64));
var inst_30464 = inst_30457.cljs$core$ISeq$;
var inst_30465 = (cljs.core.PROTOCOL_SENTINEL === inst_30464);
var inst_30466 = ((inst_30463) || (inst_30465));
var state_30559__$1 = state_30559;
if(cljs.core.truth_(inst_30466)){
var statearr_30609_32482 = state_30559__$1;
(statearr_30609_32482[(1)] = (5));

} else {
var statearr_30611_32483 = state_30559__$1;
(statearr_30611_32483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (23))){
var inst_30514 = (state_30559[(14)]);
var inst_30520 = (inst_30514 == null);
var state_30559__$1 = state_30559;
if(cljs.core.truth_(inst_30520)){
var statearr_30614_32484 = state_30559__$1;
(statearr_30614_32484[(1)] = (26));

} else {
var statearr_30617_32485 = state_30559__$1;
(statearr_30617_32485[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (35))){
var inst_30541 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
if(cljs.core.truth_(inst_30541)){
var statearr_30619_32486 = state_30559__$1;
(statearr_30619_32486[(1)] = (36));

} else {
var statearr_30620_32490 = state_30559__$1;
(statearr_30620_32490[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (19))){
var inst_30482 = (state_30559[(7)]);
var inst_30502 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30482);
var state_30559__$1 = state_30559;
var statearr_30624_32491 = state_30559__$1;
(statearr_30624_32491[(2)] = inst_30502);

(statearr_30624_32491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (11))){
var inst_30482 = (state_30559[(7)]);
var inst_30486 = (inst_30482 == null);
var inst_30487 = cljs.core.not(inst_30486);
var state_30559__$1 = state_30559;
if(inst_30487){
var statearr_30627_32492 = state_30559__$1;
(statearr_30627_32492[(1)] = (13));

} else {
var statearr_30630_32493 = state_30559__$1;
(statearr_30630_32493[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (9))){
var inst_30457 = (state_30559[(8)]);
var state_30559__$1 = state_30559;
var statearr_30632_32494 = state_30559__$1;
(statearr_30632_32494[(2)] = inst_30457);

(statearr_30632_32494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (5))){
var state_30559__$1 = state_30559;
var statearr_30634_32495 = state_30559__$1;
(statearr_30634_32495[(2)] = true);

(statearr_30634_32495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (14))){
var state_30559__$1 = state_30559;
var statearr_30635_32497 = state_30559__$1;
(statearr_30635_32497[(2)] = false);

(statearr_30635_32497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (26))){
var inst_30515 = (state_30559[(10)]);
var inst_30522 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30515);
var state_30559__$1 = state_30559;
var statearr_30638_32498 = state_30559__$1;
(statearr_30638_32498[(2)] = inst_30522);

(statearr_30638_32498[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (16))){
var state_30559__$1 = state_30559;
var statearr_30642_32499 = state_30559__$1;
(statearr_30642_32499[(2)] = true);

(statearr_30642_32499[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (38))){
var inst_30546 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30644_32500 = state_30559__$1;
(statearr_30644_32500[(2)] = inst_30546);

(statearr_30644_32500[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (30))){
var inst_30515 = (state_30559[(10)]);
var inst_30507 = (state_30559[(13)]);
var inst_30506 = (state_30559[(11)]);
var inst_30533 = cljs.core.empty_QMARK_(inst_30506);
var inst_30534 = (inst_30507.cljs$core$IFn$_invoke$arity$1 ? inst_30507.cljs$core$IFn$_invoke$arity$1(inst_30515) : inst_30507.call(null,inst_30515));
var inst_30535 = cljs.core.not(inst_30534);
var inst_30536 = ((inst_30533) && (inst_30535));
var state_30559__$1 = state_30559;
var statearr_30645_32506 = state_30559__$1;
(statearr_30645_32506[(2)] = inst_30536);

(statearr_30645_32506[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (10))){
var inst_30457 = (state_30559[(8)]);
var inst_30478 = (state_30559[(2)]);
var inst_30479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30478,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30478,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30478,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30482 = inst_30457;
var state_30559__$1 = (function (){var statearr_30654 = state_30559;
(statearr_30654[(16)] = inst_30479);

(statearr_30654[(17)] = inst_30480);

(statearr_30654[(18)] = inst_30481);

(statearr_30654[(7)] = inst_30482);

return statearr_30654;
})();
var statearr_30655_32507 = state_30559__$1;
(statearr_30655_32507[(2)] = null);

(statearr_30655_32507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (18))){
var inst_30497 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30657_32508 = state_30559__$1;
(statearr_30657_32508[(2)] = inst_30497);

(statearr_30657_32508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (37))){
var state_30559__$1 = state_30559;
var statearr_30658_32509 = state_30559__$1;
(statearr_30658_32509[(2)] = null);

(statearr_30658_32509[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (8))){
var inst_30457 = (state_30559[(8)]);
var inst_30475 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30457);
var state_30559__$1 = state_30559;
var statearr_30659_32510 = state_30559__$1;
(statearr_30659_32510[(2)] = inst_30475);

(statearr_30659_32510[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__26516__auto__ = null;
var cljs$core$async$mix_$_state_machine__26516__auto____0 = (function (){
var statearr_30668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30668[(0)] = cljs$core$async$mix_$_state_machine__26516__auto__);

(statearr_30668[(1)] = (1));

return statearr_30668;
});
var cljs$core$async$mix_$_state_machine__26516__auto____1 = (function (state_30559){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_30559);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e30671){var ex__26519__auto__ = e30671;
var statearr_30672_32523 = state_30559;
(statearr_30672_32523[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_30559[(4)]))){
var statearr_30673_32524 = state_30559;
(statearr_30673_32524[(1)] = cljs.core.first((state_30559[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32525 = state_30559;
state_30559 = G__32525;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26516__auto__ = function(state_30559){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26516__auto____1.call(this,state_30559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26516__auto____0;
cljs$core$async$mix_$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26516__auto____1;
return cljs$core$async$mix_$_state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_30675 = f__26601__auto__();
(statearr_30675[(6)] = c__26600__auto___32439);

return statearr_30675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_32527 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_32527(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32528 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_32528(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32534 = (function() {
var G__32535 = null;
var G__32535__1 = (function (p){
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
var G__32535__2 = (function (p,v){
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
G__32535 = function(p,v){
switch(arguments.length){
case 1:
return G__32535__1.call(this,p);
case 2:
return G__32535__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32535.cljs$core$IFn$_invoke$arity$1 = G__32535__1;
G__32535.cljs$core$IFn$_invoke$arity$2 = G__32535__2;
return G__32535;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30696 = arguments.length;
switch (G__30696) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32534(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32534(p,v);
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
var G__30719 = arguments.length;
switch (G__30719) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30712_SHARP_){
if(cljs.core.truth_((p1__30712_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30712_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30712_SHARP_.call(null,topic)))){
return p1__30712_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30712_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30745 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30746){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30746 = meta30746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30747,meta30746__$1){
var self__ = this;
var _30747__$1 = this;
return (new cljs.core.async.t_cljs$core$async30745(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30746__$1));
}));

(cljs.core.async.t_cljs$core$async30745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30747){
var self__ = this;
var _30747__$1 = this;
return self__.meta30746;
}));

(cljs.core.async.t_cljs$core$async30745.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30745.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30745.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30745.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30745.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async30745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30746","meta30746",1490985343,null)], null);
}));

(cljs.core.async.t_cljs$core$async30745.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30745");

(cljs.core.async.t_cljs$core$async30745.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30745");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30745.
 */
cljs.core.async.__GT_t_cljs$core$async30745 = (function cljs$core$async$__GT_t_cljs$core$async30745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30746){
return (new cljs.core.async.t_cljs$core$async30745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30746));
});

}

return (new cljs.core.async.t_cljs$core$async30745(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26600__auto___32563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_30843){
var state_val_30844 = (state_30843[(1)]);
if((state_val_30844 === (7))){
var inst_30839 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30848_32564 = state_30843__$1;
(statearr_30848_32564[(2)] = inst_30839);

(statearr_30848_32564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (20))){
var state_30843__$1 = state_30843;
var statearr_30849_32565 = state_30843__$1;
(statearr_30849_32565[(2)] = null);

(statearr_30849_32565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (1))){
var state_30843__$1 = state_30843;
var statearr_30850_32566 = state_30843__$1;
(statearr_30850_32566[(2)] = null);

(statearr_30850_32566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (24))){
var inst_30822 = (state_30843[(7)]);
var inst_30831 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30822);
var state_30843__$1 = state_30843;
var statearr_30851_32567 = state_30843__$1;
(statearr_30851_32567[(2)] = inst_30831);

(statearr_30851_32567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (4))){
var inst_30774 = (state_30843[(8)]);
var inst_30774__$1 = (state_30843[(2)]);
var inst_30775 = (inst_30774__$1 == null);
var state_30843__$1 = (function (){var statearr_30852 = state_30843;
(statearr_30852[(8)] = inst_30774__$1);

return statearr_30852;
})();
if(cljs.core.truth_(inst_30775)){
var statearr_30853_32570 = state_30843__$1;
(statearr_30853_32570[(1)] = (5));

} else {
var statearr_30855_32571 = state_30843__$1;
(statearr_30855_32571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (15))){
var inst_30816 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30856_32572 = state_30843__$1;
(statearr_30856_32572[(2)] = inst_30816);

(statearr_30856_32572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (21))){
var inst_30836 = (state_30843[(2)]);
var state_30843__$1 = (function (){var statearr_30857 = state_30843;
(statearr_30857[(9)] = inst_30836);

return statearr_30857;
})();
var statearr_30858_32575 = state_30843__$1;
(statearr_30858_32575[(2)] = null);

(statearr_30858_32575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (13))){
var inst_30798 = (state_30843[(10)]);
var inst_30800 = cljs.core.chunked_seq_QMARK_(inst_30798);
var state_30843__$1 = state_30843;
if(inst_30800){
var statearr_30859_32577 = state_30843__$1;
(statearr_30859_32577[(1)] = (16));

} else {
var statearr_30860_32578 = state_30843__$1;
(statearr_30860_32578[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (22))){
var inst_30828 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
if(cljs.core.truth_(inst_30828)){
var statearr_30861_32579 = state_30843__$1;
(statearr_30861_32579[(1)] = (23));

} else {
var statearr_30862_32584 = state_30843__$1;
(statearr_30862_32584[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (6))){
var inst_30774 = (state_30843[(8)]);
var inst_30824 = (state_30843[(11)]);
var inst_30822 = (state_30843[(7)]);
var inst_30822__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30774) : topic_fn.call(null,inst_30774));
var inst_30823 = cljs.core.deref(mults);
var inst_30824__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30823,inst_30822__$1);
var state_30843__$1 = (function (){var statearr_30863 = state_30843;
(statearr_30863[(11)] = inst_30824__$1);

(statearr_30863[(7)] = inst_30822__$1);

return statearr_30863;
})();
if(cljs.core.truth_(inst_30824__$1)){
var statearr_30864_32593 = state_30843__$1;
(statearr_30864_32593[(1)] = (19));

} else {
var statearr_30865_32595 = state_30843__$1;
(statearr_30865_32595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (25))){
var inst_30833 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30866_32596 = state_30843__$1;
(statearr_30866_32596[(2)] = inst_30833);

(statearr_30866_32596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (17))){
var inst_30798 = (state_30843[(10)]);
var inst_30807 = cljs.core.first(inst_30798);
var inst_30808 = cljs.core.async.muxch_STAR_(inst_30807);
var inst_30809 = cljs.core.async.close_BANG_(inst_30808);
var inst_30810 = cljs.core.next(inst_30798);
var inst_30784 = inst_30810;
var inst_30785 = null;
var inst_30786 = (0);
var inst_30787 = (0);
var state_30843__$1 = (function (){var statearr_30867 = state_30843;
(statearr_30867[(12)] = inst_30787);

(statearr_30867[(13)] = inst_30786);

(statearr_30867[(14)] = inst_30784);

(statearr_30867[(15)] = inst_30809);

(statearr_30867[(16)] = inst_30785);

return statearr_30867;
})();
var statearr_30868_32602 = state_30843__$1;
(statearr_30868_32602[(2)] = null);

(statearr_30868_32602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (3))){
var inst_30841 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30843__$1,inst_30841);
} else {
if((state_val_30844 === (12))){
var inst_30818 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30869_32604 = state_30843__$1;
(statearr_30869_32604[(2)] = inst_30818);

(statearr_30869_32604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (2))){
var state_30843__$1 = state_30843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30843__$1,(4),ch);
} else {
if((state_val_30844 === (23))){
var state_30843__$1 = state_30843;
var statearr_30870_32605 = state_30843__$1;
(statearr_30870_32605[(2)] = null);

(statearr_30870_32605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (19))){
var inst_30774 = (state_30843[(8)]);
var inst_30824 = (state_30843[(11)]);
var inst_30826 = cljs.core.async.muxch_STAR_(inst_30824);
var state_30843__$1 = state_30843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30843__$1,(22),inst_30826,inst_30774);
} else {
if((state_val_30844 === (11))){
var inst_30784 = (state_30843[(14)]);
var inst_30798 = (state_30843[(10)]);
var inst_30798__$1 = cljs.core.seq(inst_30784);
var state_30843__$1 = (function (){var statearr_30871 = state_30843;
(statearr_30871[(10)] = inst_30798__$1);

return statearr_30871;
})();
if(inst_30798__$1){
var statearr_30872_32606 = state_30843__$1;
(statearr_30872_32606[(1)] = (13));

} else {
var statearr_30873_32607 = state_30843__$1;
(statearr_30873_32607[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (9))){
var inst_30820 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30874_32608 = state_30843__$1;
(statearr_30874_32608[(2)] = inst_30820);

(statearr_30874_32608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (5))){
var inst_30781 = cljs.core.deref(mults);
var inst_30782 = cljs.core.vals(inst_30781);
var inst_30783 = cljs.core.seq(inst_30782);
var inst_30784 = inst_30783;
var inst_30785 = null;
var inst_30786 = (0);
var inst_30787 = (0);
var state_30843__$1 = (function (){var statearr_30875 = state_30843;
(statearr_30875[(12)] = inst_30787);

(statearr_30875[(13)] = inst_30786);

(statearr_30875[(14)] = inst_30784);

(statearr_30875[(16)] = inst_30785);

return statearr_30875;
})();
var statearr_30876_32610 = state_30843__$1;
(statearr_30876_32610[(2)] = null);

(statearr_30876_32610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (14))){
var state_30843__$1 = state_30843;
var statearr_30880_32611 = state_30843__$1;
(statearr_30880_32611[(2)] = null);

(statearr_30880_32611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (16))){
var inst_30798 = (state_30843[(10)]);
var inst_30802 = cljs.core.chunk_first(inst_30798);
var inst_30803 = cljs.core.chunk_rest(inst_30798);
var inst_30804 = cljs.core.count(inst_30802);
var inst_30784 = inst_30803;
var inst_30785 = inst_30802;
var inst_30786 = inst_30804;
var inst_30787 = (0);
var state_30843__$1 = (function (){var statearr_30881 = state_30843;
(statearr_30881[(12)] = inst_30787);

(statearr_30881[(13)] = inst_30786);

(statearr_30881[(14)] = inst_30784);

(statearr_30881[(16)] = inst_30785);

return statearr_30881;
})();
var statearr_30882_32612 = state_30843__$1;
(statearr_30882_32612[(2)] = null);

(statearr_30882_32612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (10))){
var inst_30787 = (state_30843[(12)]);
var inst_30786 = (state_30843[(13)]);
var inst_30784 = (state_30843[(14)]);
var inst_30785 = (state_30843[(16)]);
var inst_30792 = cljs.core._nth(inst_30785,inst_30787);
var inst_30793 = cljs.core.async.muxch_STAR_(inst_30792);
var inst_30794 = cljs.core.async.close_BANG_(inst_30793);
var inst_30795 = (inst_30787 + (1));
var tmp30877 = inst_30786;
var tmp30878 = inst_30784;
var tmp30879 = inst_30785;
var inst_30784__$1 = tmp30878;
var inst_30785__$1 = tmp30879;
var inst_30786__$1 = tmp30877;
var inst_30787__$1 = inst_30795;
var state_30843__$1 = (function (){var statearr_30883 = state_30843;
(statearr_30883[(12)] = inst_30787__$1);

(statearr_30883[(13)] = inst_30786__$1);

(statearr_30883[(17)] = inst_30794);

(statearr_30883[(14)] = inst_30784__$1);

(statearr_30883[(16)] = inst_30785__$1);

return statearr_30883;
})();
var statearr_30884_32614 = state_30843__$1;
(statearr_30884_32614[(2)] = null);

(statearr_30884_32614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (18))){
var inst_30813 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30888_32616 = state_30843__$1;
(statearr_30888_32616[(2)] = inst_30813);

(statearr_30888_32616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (8))){
var inst_30787 = (state_30843[(12)]);
var inst_30786 = (state_30843[(13)]);
var inst_30789 = (inst_30787 < inst_30786);
var inst_30790 = inst_30789;
var state_30843__$1 = state_30843;
if(cljs.core.truth_(inst_30790)){
var statearr_30889_32617 = state_30843__$1;
(statearr_30889_32617[(1)] = (10));

} else {
var statearr_30890_32618 = state_30843__$1;
(statearr_30890_32618[(1)] = (11));

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
var cljs$core$async$state_machine__26516__auto__ = null;
var cljs$core$async$state_machine__26516__auto____0 = (function (){
var statearr_30897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30897[(0)] = cljs$core$async$state_machine__26516__auto__);

(statearr_30897[(1)] = (1));

return statearr_30897;
});
var cljs$core$async$state_machine__26516__auto____1 = (function (state_30843){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_30843);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e30898){var ex__26519__auto__ = e30898;
var statearr_30899_32620 = state_30843;
(statearr_30899_32620[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_30843[(4)]))){
var statearr_30900_32621 = state_30843;
(statearr_30900_32621[(1)] = cljs.core.first((state_30843[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32623 = state_30843;
state_30843 = G__32623;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$state_machine__26516__auto__ = function(state_30843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26516__auto____1.call(this,state_30843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26516__auto____0;
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26516__auto____1;
return cljs$core$async$state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_30901 = f__26601__auto__();
(statearr_30901[(6)] = c__26600__auto___32563);

return statearr_30901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
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
var G__30905 = arguments.length;
switch (G__30905) {
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
var G__30911 = arguments.length;
switch (G__30911) {
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
var G__30913 = arguments.length;
switch (G__30913) {
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
var c__26600__auto___32633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_30963){
var state_val_30964 = (state_30963[(1)]);
if((state_val_30964 === (7))){
var state_30963__$1 = state_30963;
var statearr_30968_32634 = state_30963__$1;
(statearr_30968_32634[(2)] = null);

(statearr_30968_32634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (1))){
var state_30963__$1 = state_30963;
var statearr_30969_32636 = state_30963__$1;
(statearr_30969_32636[(2)] = null);

(statearr_30969_32636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (4))){
var inst_30917 = (state_30963[(7)]);
var inst_30916 = (state_30963[(8)]);
var inst_30919 = (inst_30917 < inst_30916);
var state_30963__$1 = state_30963;
if(cljs.core.truth_(inst_30919)){
var statearr_30970_32638 = state_30963__$1;
(statearr_30970_32638[(1)] = (6));

} else {
var statearr_30971_32639 = state_30963__$1;
(statearr_30971_32639[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (15))){
var inst_30946 = (state_30963[(9)]);
var inst_30951 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30946);
var state_30963__$1 = state_30963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30963__$1,(17),out,inst_30951);
} else {
if((state_val_30964 === (13))){
var inst_30946 = (state_30963[(9)]);
var inst_30946__$1 = (state_30963[(2)]);
var inst_30947 = cljs.core.some(cljs.core.nil_QMARK_,inst_30946__$1);
var state_30963__$1 = (function (){var statearr_30972 = state_30963;
(statearr_30972[(9)] = inst_30946__$1);

return statearr_30972;
})();
if(cljs.core.truth_(inst_30947)){
var statearr_30973_32645 = state_30963__$1;
(statearr_30973_32645[(1)] = (14));

} else {
var statearr_30974_32646 = state_30963__$1;
(statearr_30974_32646[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (6))){
var state_30963__$1 = state_30963;
var statearr_30975_32647 = state_30963__$1;
(statearr_30975_32647[(2)] = null);

(statearr_30975_32647[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (17))){
var inst_30953 = (state_30963[(2)]);
var state_30963__$1 = (function (){var statearr_30981 = state_30963;
(statearr_30981[(10)] = inst_30953);

return statearr_30981;
})();
var statearr_30982_32648 = state_30963__$1;
(statearr_30982_32648[(2)] = null);

(statearr_30982_32648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (3))){
var inst_30958 = (state_30963[(2)]);
var state_30963__$1 = state_30963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30963__$1,inst_30958);
} else {
if((state_val_30964 === (12))){
var _ = (function (){var statearr_30983 = state_30963;
(statearr_30983[(4)] = cljs.core.rest((state_30963[(4)])));

return statearr_30983;
})();
var state_30963__$1 = state_30963;
var ex30980 = (state_30963__$1[(2)]);
var statearr_30985_32649 = state_30963__$1;
(statearr_30985_32649[(5)] = ex30980);


if((ex30980 instanceof Object)){
var statearr_30988_32650 = state_30963__$1;
(statearr_30988_32650[(1)] = (11));

(statearr_30988_32650[(5)] = null);

} else {
throw ex30980;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (2))){
var inst_30915 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30916 = cnt;
var inst_30917 = (0);
var state_30963__$1 = (function (){var statearr_30990 = state_30963;
(statearr_30990[(11)] = inst_30915);

(statearr_30990[(7)] = inst_30917);

(statearr_30990[(8)] = inst_30916);

return statearr_30990;
})();
var statearr_30992_32651 = state_30963__$1;
(statearr_30992_32651[(2)] = null);

(statearr_30992_32651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (11))){
var inst_30921 = (state_30963[(2)]);
var inst_30922 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30963__$1 = (function (){var statearr_30996 = state_30963;
(statearr_30996[(12)] = inst_30921);

return statearr_30996;
})();
var statearr_30997_32652 = state_30963__$1;
(statearr_30997_32652[(2)] = inst_30922);

(statearr_30997_32652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (9))){
var inst_30917 = (state_30963[(7)]);
var _ = (function (){var statearr_30998 = state_30963;
(statearr_30998[(4)] = cljs.core.cons((12),(state_30963[(4)])));

return statearr_30998;
})();
var inst_30932 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30917) : chs__$1.call(null,inst_30917));
var inst_30933 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30917) : done.call(null,inst_30917));
var inst_30934 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30932,inst_30933);
var ___$1 = (function (){var statearr_30999 = state_30963;
(statearr_30999[(4)] = cljs.core.rest((state_30963[(4)])));

return statearr_30999;
})();
var state_30963__$1 = state_30963;
var statearr_31000_32653 = state_30963__$1;
(statearr_31000_32653[(2)] = inst_30934);

(statearr_31000_32653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (5))){
var inst_30944 = (state_30963[(2)]);
var state_30963__$1 = (function (){var statearr_31001 = state_30963;
(statearr_31001[(13)] = inst_30944);

return statearr_31001;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30963__$1,(13),dchan);
} else {
if((state_val_30964 === (14))){
var inst_30949 = cljs.core.async.close_BANG_(out);
var state_30963__$1 = state_30963;
var statearr_31002_32654 = state_30963__$1;
(statearr_31002_32654[(2)] = inst_30949);

(statearr_31002_32654[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (16))){
var inst_30956 = (state_30963[(2)]);
var state_30963__$1 = state_30963;
var statearr_31003_32655 = state_30963__$1;
(statearr_31003_32655[(2)] = inst_30956);

(statearr_31003_32655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (10))){
var inst_30917 = (state_30963[(7)]);
var inst_30937 = (state_30963[(2)]);
var inst_30938 = (inst_30917 + (1));
var inst_30917__$1 = inst_30938;
var state_30963__$1 = (function (){var statearr_31004 = state_30963;
(statearr_31004[(14)] = inst_30937);

(statearr_31004[(7)] = inst_30917__$1);

return statearr_31004;
})();
var statearr_31005_32656 = state_30963__$1;
(statearr_31005_32656[(2)] = null);

(statearr_31005_32656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (8))){
var inst_30942 = (state_30963[(2)]);
var state_30963__$1 = state_30963;
var statearr_31006_32657 = state_30963__$1;
(statearr_31006_32657[(2)] = inst_30942);

(statearr_31006_32657[(1)] = (5));


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
var cljs$core$async$state_machine__26516__auto__ = null;
var cljs$core$async$state_machine__26516__auto____0 = (function (){
var statearr_31008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31008[(0)] = cljs$core$async$state_machine__26516__auto__);

(statearr_31008[(1)] = (1));

return statearr_31008;
});
var cljs$core$async$state_machine__26516__auto____1 = (function (state_30963){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_30963);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e31012){var ex__26519__auto__ = e31012;
var statearr_31013_32660 = state_30963;
(statearr_31013_32660[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_30963[(4)]))){
var statearr_31014_32661 = state_30963;
(statearr_31014_32661[(1)] = cljs.core.first((state_30963[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32662 = state_30963;
state_30963 = G__32662;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$state_machine__26516__auto__ = function(state_30963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26516__auto____1.call(this,state_30963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26516__auto____0;
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26516__auto____1;
return cljs$core$async$state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_31015 = f__26601__auto__();
(statearr_31015[(6)] = c__26600__auto___32633);

return statearr_31015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
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
var G__31018 = arguments.length;
switch (G__31018) {
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
var c__26600__auto___32680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_31050){
var state_val_31051 = (state_31050[(1)]);
if((state_val_31051 === (7))){
var inst_31030 = (state_31050[(7)]);
var inst_31029 = (state_31050[(8)]);
var inst_31029__$1 = (state_31050[(2)]);
var inst_31030__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31029__$1,(0),null);
var inst_31031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31029__$1,(1),null);
var inst_31032 = (inst_31030__$1 == null);
var state_31050__$1 = (function (){var statearr_31057 = state_31050;
(statearr_31057[(7)] = inst_31030__$1);

(statearr_31057[(9)] = inst_31031);

(statearr_31057[(8)] = inst_31029__$1);

return statearr_31057;
})();
if(cljs.core.truth_(inst_31032)){
var statearr_31058_32692 = state_31050__$1;
(statearr_31058_32692[(1)] = (8));

} else {
var statearr_31059_32693 = state_31050__$1;
(statearr_31059_32693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (1))){
var inst_31019 = cljs.core.vec(chs);
var inst_31020 = inst_31019;
var state_31050__$1 = (function (){var statearr_31060 = state_31050;
(statearr_31060[(10)] = inst_31020);

return statearr_31060;
})();
var statearr_31061_32696 = state_31050__$1;
(statearr_31061_32696[(2)] = null);

(statearr_31061_32696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (4))){
var inst_31020 = (state_31050[(10)]);
var state_31050__$1 = state_31050;
return cljs.core.async.ioc_alts_BANG_(state_31050__$1,(7),inst_31020);
} else {
if((state_val_31051 === (6))){
var inst_31046 = (state_31050[(2)]);
var state_31050__$1 = state_31050;
var statearr_31062_32698 = state_31050__$1;
(statearr_31062_32698[(2)] = inst_31046);

(statearr_31062_32698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (3))){
var inst_31048 = (state_31050[(2)]);
var state_31050__$1 = state_31050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31050__$1,inst_31048);
} else {
if((state_val_31051 === (2))){
var inst_31020 = (state_31050[(10)]);
var inst_31022 = cljs.core.count(inst_31020);
var inst_31023 = (inst_31022 > (0));
var state_31050__$1 = state_31050;
if(cljs.core.truth_(inst_31023)){
var statearr_31064_32699 = state_31050__$1;
(statearr_31064_32699[(1)] = (4));

} else {
var statearr_31065_32700 = state_31050__$1;
(statearr_31065_32700[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (11))){
var inst_31020 = (state_31050[(10)]);
var inst_31039 = (state_31050[(2)]);
var tmp31063 = inst_31020;
var inst_31020__$1 = tmp31063;
var state_31050__$1 = (function (){var statearr_31066 = state_31050;
(statearr_31066[(11)] = inst_31039);

(statearr_31066[(10)] = inst_31020__$1);

return statearr_31066;
})();
var statearr_31067_32702 = state_31050__$1;
(statearr_31067_32702[(2)] = null);

(statearr_31067_32702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (9))){
var inst_31030 = (state_31050[(7)]);
var state_31050__$1 = state_31050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31050__$1,(11),out,inst_31030);
} else {
if((state_val_31051 === (5))){
var inst_31044 = cljs.core.async.close_BANG_(out);
var state_31050__$1 = state_31050;
var statearr_31072_32703 = state_31050__$1;
(statearr_31072_32703[(2)] = inst_31044);

(statearr_31072_32703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (10))){
var inst_31042 = (state_31050[(2)]);
var state_31050__$1 = state_31050;
var statearr_31073_32704 = state_31050__$1;
(statearr_31073_32704[(2)] = inst_31042);

(statearr_31073_32704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (8))){
var inst_31030 = (state_31050[(7)]);
var inst_31031 = (state_31050[(9)]);
var inst_31029 = (state_31050[(8)]);
var inst_31020 = (state_31050[(10)]);
var inst_31034 = (function (){var cs = inst_31020;
var vec__31025 = inst_31029;
var v = inst_31030;
var c = inst_31031;
return (function (p1__31016_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31016_SHARP_);
});
})();
var inst_31035 = cljs.core.filterv(inst_31034,inst_31020);
var inst_31020__$1 = inst_31035;
var state_31050__$1 = (function (){var statearr_31080 = state_31050;
(statearr_31080[(10)] = inst_31020__$1);

return statearr_31080;
})();
var statearr_31081_32707 = state_31050__$1;
(statearr_31081_32707[(2)] = null);

(statearr_31081_32707[(1)] = (2));


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
var cljs$core$async$state_machine__26516__auto__ = null;
var cljs$core$async$state_machine__26516__auto____0 = (function (){
var statearr_31088 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31088[(0)] = cljs$core$async$state_machine__26516__auto__);

(statearr_31088[(1)] = (1));

return statearr_31088;
});
var cljs$core$async$state_machine__26516__auto____1 = (function (state_31050){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_31050);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e31089){var ex__26519__auto__ = e31089;
var statearr_31090_32708 = state_31050;
(statearr_31090_32708[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_31050[(4)]))){
var statearr_31091_32709 = state_31050;
(statearr_31091_32709[(1)] = cljs.core.first((state_31050[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32710 = state_31050;
state_31050 = G__32710;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$state_machine__26516__auto__ = function(state_31050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26516__auto____1.call(this,state_31050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26516__auto____0;
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26516__auto____1;
return cljs$core$async$state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_31095 = f__26601__auto__();
(statearr_31095[(6)] = c__26600__auto___32680);

return statearr_31095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
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
var G__31111 = arguments.length;
switch (G__31111) {
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
var c__26600__auto___32712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_31136){
var state_val_31137 = (state_31136[(1)]);
if((state_val_31137 === (7))){
var inst_31118 = (state_31136[(7)]);
var inst_31118__$1 = (state_31136[(2)]);
var inst_31119 = (inst_31118__$1 == null);
var inst_31120 = cljs.core.not(inst_31119);
var state_31136__$1 = (function (){var statearr_31139 = state_31136;
(statearr_31139[(7)] = inst_31118__$1);

return statearr_31139;
})();
if(inst_31120){
var statearr_31140_32715 = state_31136__$1;
(statearr_31140_32715[(1)] = (8));

} else {
var statearr_31141_32716 = state_31136__$1;
(statearr_31141_32716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (1))){
var inst_31113 = (0);
var state_31136__$1 = (function (){var statearr_31142 = state_31136;
(statearr_31142[(8)] = inst_31113);

return statearr_31142;
})();
var statearr_31143_32717 = state_31136__$1;
(statearr_31143_32717[(2)] = null);

(statearr_31143_32717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (4))){
var state_31136__$1 = state_31136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31136__$1,(7),ch);
} else {
if((state_val_31137 === (6))){
var inst_31131 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31144_32720 = state_31136__$1;
(statearr_31144_32720[(2)] = inst_31131);

(statearr_31144_32720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (3))){
var inst_31133 = (state_31136[(2)]);
var inst_31134 = cljs.core.async.close_BANG_(out);
var state_31136__$1 = (function (){var statearr_31147 = state_31136;
(statearr_31147[(9)] = inst_31133);

return statearr_31147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31136__$1,inst_31134);
} else {
if((state_val_31137 === (2))){
var inst_31113 = (state_31136[(8)]);
var inst_31115 = (inst_31113 < n);
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31115)){
var statearr_31150_32724 = state_31136__$1;
(statearr_31150_32724[(1)] = (4));

} else {
var statearr_31151_32726 = state_31136__$1;
(statearr_31151_32726[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (11))){
var inst_31113 = (state_31136[(8)]);
var inst_31123 = (state_31136[(2)]);
var inst_31124 = (inst_31113 + (1));
var inst_31113__$1 = inst_31124;
var state_31136__$1 = (function (){var statearr_31152 = state_31136;
(statearr_31152[(10)] = inst_31123);

(statearr_31152[(8)] = inst_31113__$1);

return statearr_31152;
})();
var statearr_31153_32734 = state_31136__$1;
(statearr_31153_32734[(2)] = null);

(statearr_31153_32734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (9))){
var state_31136__$1 = state_31136;
var statearr_31154_32735 = state_31136__$1;
(statearr_31154_32735[(2)] = null);

(statearr_31154_32735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (5))){
var state_31136__$1 = state_31136;
var statearr_31155_32736 = state_31136__$1;
(statearr_31155_32736[(2)] = null);

(statearr_31155_32736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (10))){
var inst_31128 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31156_32737 = state_31136__$1;
(statearr_31156_32737[(2)] = inst_31128);

(statearr_31156_32737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (8))){
var inst_31118 = (state_31136[(7)]);
var state_31136__$1 = state_31136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31136__$1,(11),out,inst_31118);
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
var cljs$core$async$state_machine__26516__auto__ = null;
var cljs$core$async$state_machine__26516__auto____0 = (function (){
var statearr_31160 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31160[(0)] = cljs$core$async$state_machine__26516__auto__);

(statearr_31160[(1)] = (1));

return statearr_31160;
});
var cljs$core$async$state_machine__26516__auto____1 = (function (state_31136){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_31136);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e31161){var ex__26519__auto__ = e31161;
var statearr_31162_32740 = state_31136;
(statearr_31162_32740[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_31136[(4)]))){
var statearr_31165_32741 = state_31136;
(statearr_31165_32741[(1)] = cljs.core.first((state_31136[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32742 = state_31136;
state_31136 = G__32742;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$state_machine__26516__auto__ = function(state_31136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26516__auto____1.call(this,state_31136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26516__auto____0;
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26516__auto____1;
return cljs$core$async$state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_31166 = f__26601__auto__();
(statearr_31166[(6)] = c__26600__auto___32712);

return statearr_31166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31170 = (function (f,ch,meta31171){
this.f = f;
this.ch = ch;
this.meta31171 = meta31171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31172,meta31171__$1){
var self__ = this;
var _31172__$1 = this;
return (new cljs.core.async.t_cljs$core$async31170(self__.f,self__.ch,meta31171__$1));
}));

(cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31172){
var self__ = this;
var _31172__$1 = this;
return self__.meta31171;
}));

(cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31183 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31183 = (function (f,ch,meta31171,_,fn1,meta31184){
this.f = f;
this.ch = ch;
this.meta31171 = meta31171;
this._ = _;
this.fn1 = fn1;
this.meta31184 = meta31184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31185,meta31184__$1){
var self__ = this;
var _31185__$1 = this;
return (new cljs.core.async.t_cljs$core$async31183(self__.f,self__.ch,self__.meta31171,self__._,self__.fn1,meta31184__$1));
}));

(cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31185){
var self__ = this;
var _31185__$1 = this;
return self__.meta31184;
}));

(cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31169_SHARP_){
var G__31199 = (((p1__31169_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31169_SHARP_) : self__.f.call(null,p1__31169_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31199) : f1.call(null,G__31199));
});
}));

(cljs.core.async.t_cljs$core$async31183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31171","meta31171",-16087981,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31170","cljs.core.async/t_cljs$core$async31170",-1323870991,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31184","meta31184",-1247621041,null)], null);
}));

(cljs.core.async.t_cljs$core$async31183.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31183");

(cljs.core.async.t_cljs$core$async31183.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31183");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31183.
 */
cljs.core.async.__GT_t_cljs$core$async31183 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31183(f__$1,ch__$1,meta31171__$1,___$2,fn1__$1,meta31184){
return (new cljs.core.async.t_cljs$core$async31183(f__$1,ch__$1,meta31171__$1,___$2,fn1__$1,meta31184));
});

}

return (new cljs.core.async.t_cljs$core$async31183(self__.f,self__.ch,self__.meta31171,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31202 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31202) : self__.f.call(null,G__31202));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31171","meta31171",-16087981,null)], null);
}));

(cljs.core.async.t_cljs$core$async31170.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31170");

(cljs.core.async.t_cljs$core$async31170.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31170");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31170.
 */
cljs.core.async.__GT_t_cljs$core$async31170 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31170(f__$1,ch__$1,meta31171){
return (new cljs.core.async.t_cljs$core$async31170(f__$1,ch__$1,meta31171));
});

}

return (new cljs.core.async.t_cljs$core$async31170(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31210 = (function (f,ch,meta31211){
this.f = f;
this.ch = ch;
this.meta31211 = meta31211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31212,meta31211__$1){
var self__ = this;
var _31212__$1 = this;
return (new cljs.core.async.t_cljs$core$async31210(self__.f,self__.ch,meta31211__$1));
}));

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31212){
var self__ = this;
var _31212__$1 = this;
return self__.meta31211;
}));

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31211","meta31211",278764622,null)], null);
}));

(cljs.core.async.t_cljs$core$async31210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31210");

(cljs.core.async.t_cljs$core$async31210.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31210.
 */
cljs.core.async.__GT_t_cljs$core$async31210 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31210(f__$1,ch__$1,meta31211){
return (new cljs.core.async.t_cljs$core$async31210(f__$1,ch__$1,meta31211));
});

}

return (new cljs.core.async.t_cljs$core$async31210(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31227 = (function (p,ch,meta31228){
this.p = p;
this.ch = ch;
this.meta31228 = meta31228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31229,meta31228__$1){
var self__ = this;
var _31229__$1 = this;
return (new cljs.core.async.t_cljs$core$async31227(self__.p,self__.ch,meta31228__$1));
}));

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31229){
var self__ = this;
var _31229__$1 = this;
return self__.meta31228;
}));

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31228","meta31228",-986017410,null)], null);
}));

(cljs.core.async.t_cljs$core$async31227.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31227");

(cljs.core.async.t_cljs$core$async31227.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31227");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31227.
 */
cljs.core.async.__GT_t_cljs$core$async31227 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31227(p__$1,ch__$1,meta31228){
return (new cljs.core.async.t_cljs$core$async31227(p__$1,ch__$1,meta31228));
});

}

return (new cljs.core.async.t_cljs$core$async31227(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31245 = arguments.length;
switch (G__31245) {
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
var c__26600__auto___32764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_31278){
var state_val_31279 = (state_31278[(1)]);
if((state_val_31279 === (7))){
var inst_31272 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
var statearr_31281_32770 = state_31278__$1;
(statearr_31281_32770[(2)] = inst_31272);

(statearr_31281_32770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (1))){
var state_31278__$1 = state_31278;
var statearr_31282_32773 = state_31278__$1;
(statearr_31282_32773[(2)] = null);

(statearr_31282_32773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (4))){
var inst_31258 = (state_31278[(7)]);
var inst_31258__$1 = (state_31278[(2)]);
var inst_31259 = (inst_31258__$1 == null);
var state_31278__$1 = (function (){var statearr_31284 = state_31278;
(statearr_31284[(7)] = inst_31258__$1);

return statearr_31284;
})();
if(cljs.core.truth_(inst_31259)){
var statearr_31285_32776 = state_31278__$1;
(statearr_31285_32776[(1)] = (5));

} else {
var statearr_31287_32777 = state_31278__$1;
(statearr_31287_32777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (6))){
var inst_31258 = (state_31278[(7)]);
var inst_31263 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31258) : p.call(null,inst_31258));
var state_31278__$1 = state_31278;
if(cljs.core.truth_(inst_31263)){
var statearr_31289_32779 = state_31278__$1;
(statearr_31289_32779[(1)] = (8));

} else {
var statearr_31290_32783 = state_31278__$1;
(statearr_31290_32783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (3))){
var inst_31275 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31278__$1,inst_31275);
} else {
if((state_val_31279 === (2))){
var state_31278__$1 = state_31278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31278__$1,(4),ch);
} else {
if((state_val_31279 === (11))){
var inst_31266 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
var statearr_31294_32784 = state_31278__$1;
(statearr_31294_32784[(2)] = inst_31266);

(statearr_31294_32784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (9))){
var state_31278__$1 = state_31278;
var statearr_31296_32785 = state_31278__$1;
(statearr_31296_32785[(2)] = null);

(statearr_31296_32785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (5))){
var inst_31261 = cljs.core.async.close_BANG_(out);
var state_31278__$1 = state_31278;
var statearr_31303_32790 = state_31278__$1;
(statearr_31303_32790[(2)] = inst_31261);

(statearr_31303_32790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (10))){
var inst_31269 = (state_31278[(2)]);
var state_31278__$1 = (function (){var statearr_31305 = state_31278;
(statearr_31305[(8)] = inst_31269);

return statearr_31305;
})();
var statearr_31306_32791 = state_31278__$1;
(statearr_31306_32791[(2)] = null);

(statearr_31306_32791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (8))){
var inst_31258 = (state_31278[(7)]);
var state_31278__$1 = state_31278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31278__$1,(11),out,inst_31258);
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
var cljs$core$async$state_machine__26516__auto__ = null;
var cljs$core$async$state_machine__26516__auto____0 = (function (){
var statearr_31308 = [null,null,null,null,null,null,null,null,null];
(statearr_31308[(0)] = cljs$core$async$state_machine__26516__auto__);

(statearr_31308[(1)] = (1));

return statearr_31308;
});
var cljs$core$async$state_machine__26516__auto____1 = (function (state_31278){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_31278);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e31310){var ex__26519__auto__ = e31310;
var statearr_31311_32798 = state_31278;
(statearr_31311_32798[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_31278[(4)]))){
var statearr_31312_32799 = state_31278;
(statearr_31312_32799[(1)] = cljs.core.first((state_31278[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32801 = state_31278;
state_31278 = G__32801;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$state_machine__26516__auto__ = function(state_31278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26516__auto____1.call(this,state_31278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26516__auto____0;
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26516__auto____1;
return cljs$core$async$state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_31313 = f__26601__auto__();
(statearr_31313[(6)] = c__26600__auto___32764);

return statearr_31313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31318 = arguments.length;
switch (G__31318) {
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
var c__26600__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_31399){
var state_val_31400 = (state_31399[(1)]);
if((state_val_31400 === (7))){
var inst_31394 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
var statearr_31406_32804 = state_31399__$1;
(statearr_31406_32804[(2)] = inst_31394);

(statearr_31406_32804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (20))){
var inst_31359 = (state_31399[(7)]);
var inst_31374 = (state_31399[(2)]);
var inst_31375 = cljs.core.next(inst_31359);
var inst_31343 = inst_31375;
var inst_31344 = null;
var inst_31345 = (0);
var inst_31346 = (0);
var state_31399__$1 = (function (){var statearr_31412 = state_31399;
(statearr_31412[(8)] = inst_31345);

(statearr_31412[(9)] = inst_31343);

(statearr_31412[(10)] = inst_31344);

(statearr_31412[(11)] = inst_31374);

(statearr_31412[(12)] = inst_31346);

return statearr_31412;
})();
var statearr_31414_32817 = state_31399__$1;
(statearr_31414_32817[(2)] = null);

(statearr_31414_32817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (1))){
var state_31399__$1 = state_31399;
var statearr_31415_32818 = state_31399__$1;
(statearr_31415_32818[(2)] = null);

(statearr_31415_32818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (4))){
var inst_31332 = (state_31399[(13)]);
var inst_31332__$1 = (state_31399[(2)]);
var inst_31333 = (inst_31332__$1 == null);
var state_31399__$1 = (function (){var statearr_31420 = state_31399;
(statearr_31420[(13)] = inst_31332__$1);

return statearr_31420;
})();
if(cljs.core.truth_(inst_31333)){
var statearr_31421_32819 = state_31399__$1;
(statearr_31421_32819[(1)] = (5));

} else {
var statearr_31424_32826 = state_31399__$1;
(statearr_31424_32826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (15))){
var state_31399__$1 = state_31399;
var statearr_31429_32827 = state_31399__$1;
(statearr_31429_32827[(2)] = null);

(statearr_31429_32827[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (21))){
var state_31399__$1 = state_31399;
var statearr_31430_32828 = state_31399__$1;
(statearr_31430_32828[(2)] = null);

(statearr_31430_32828[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (13))){
var inst_31345 = (state_31399[(8)]);
var inst_31343 = (state_31399[(9)]);
var inst_31344 = (state_31399[(10)]);
var inst_31346 = (state_31399[(12)]);
var inst_31355 = (state_31399[(2)]);
var inst_31356 = (inst_31346 + (1));
var tmp31425 = inst_31345;
var tmp31426 = inst_31343;
var tmp31427 = inst_31344;
var inst_31343__$1 = tmp31426;
var inst_31344__$1 = tmp31427;
var inst_31345__$1 = tmp31425;
var inst_31346__$1 = inst_31356;
var state_31399__$1 = (function (){var statearr_31431 = state_31399;
(statearr_31431[(8)] = inst_31345__$1);

(statearr_31431[(14)] = inst_31355);

(statearr_31431[(9)] = inst_31343__$1);

(statearr_31431[(10)] = inst_31344__$1);

(statearr_31431[(12)] = inst_31346__$1);

return statearr_31431;
})();
var statearr_31433_32829 = state_31399__$1;
(statearr_31433_32829[(2)] = null);

(statearr_31433_32829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (22))){
var state_31399__$1 = state_31399;
var statearr_31434_32830 = state_31399__$1;
(statearr_31434_32830[(2)] = null);

(statearr_31434_32830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (6))){
var inst_31332 = (state_31399[(13)]);
var inst_31341 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31332) : f.call(null,inst_31332));
var inst_31342 = cljs.core.seq(inst_31341);
var inst_31343 = inst_31342;
var inst_31344 = null;
var inst_31345 = (0);
var inst_31346 = (0);
var state_31399__$1 = (function (){var statearr_31436 = state_31399;
(statearr_31436[(8)] = inst_31345);

(statearr_31436[(9)] = inst_31343);

(statearr_31436[(10)] = inst_31344);

(statearr_31436[(12)] = inst_31346);

return statearr_31436;
})();
var statearr_31437_32832 = state_31399__$1;
(statearr_31437_32832[(2)] = null);

(statearr_31437_32832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (17))){
var inst_31359 = (state_31399[(7)]);
var inst_31367 = cljs.core.chunk_first(inst_31359);
var inst_31368 = cljs.core.chunk_rest(inst_31359);
var inst_31369 = cljs.core.count(inst_31367);
var inst_31343 = inst_31368;
var inst_31344 = inst_31367;
var inst_31345 = inst_31369;
var inst_31346 = (0);
var state_31399__$1 = (function (){var statearr_31438 = state_31399;
(statearr_31438[(8)] = inst_31345);

(statearr_31438[(9)] = inst_31343);

(statearr_31438[(10)] = inst_31344);

(statearr_31438[(12)] = inst_31346);

return statearr_31438;
})();
var statearr_31439_32833 = state_31399__$1;
(statearr_31439_32833[(2)] = null);

(statearr_31439_32833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (3))){
var inst_31396 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31399__$1,inst_31396);
} else {
if((state_val_31400 === (12))){
var inst_31383 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
var statearr_31443_32834 = state_31399__$1;
(statearr_31443_32834[(2)] = inst_31383);

(statearr_31443_32834[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (2))){
var state_31399__$1 = state_31399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31399__$1,(4),in$);
} else {
if((state_val_31400 === (23))){
var inst_31392 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
var statearr_31445_32841 = state_31399__$1;
(statearr_31445_32841[(2)] = inst_31392);

(statearr_31445_32841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (19))){
var inst_31378 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
var statearr_31446_32846 = state_31399__$1;
(statearr_31446_32846[(2)] = inst_31378);

(statearr_31446_32846[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (11))){
var inst_31343 = (state_31399[(9)]);
var inst_31359 = (state_31399[(7)]);
var inst_31359__$1 = cljs.core.seq(inst_31343);
var state_31399__$1 = (function (){var statearr_31447 = state_31399;
(statearr_31447[(7)] = inst_31359__$1);

return statearr_31447;
})();
if(inst_31359__$1){
var statearr_31448_32851 = state_31399__$1;
(statearr_31448_32851[(1)] = (14));

} else {
var statearr_31449_32852 = state_31399__$1;
(statearr_31449_32852[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (9))){
var inst_31386 = (state_31399[(2)]);
var inst_31387 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31399__$1 = (function (){var statearr_31450 = state_31399;
(statearr_31450[(15)] = inst_31386);

return statearr_31450;
})();
if(cljs.core.truth_(inst_31387)){
var statearr_31451_32857 = state_31399__$1;
(statearr_31451_32857[(1)] = (21));

} else {
var statearr_31452_32858 = state_31399__$1;
(statearr_31452_32858[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (5))){
var inst_31335 = cljs.core.async.close_BANG_(out);
var state_31399__$1 = state_31399;
var statearr_31457_32859 = state_31399__$1;
(statearr_31457_32859[(2)] = inst_31335);

(statearr_31457_32859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (14))){
var inst_31359 = (state_31399[(7)]);
var inst_31362 = cljs.core.chunked_seq_QMARK_(inst_31359);
var state_31399__$1 = state_31399;
if(inst_31362){
var statearr_31458_32860 = state_31399__$1;
(statearr_31458_32860[(1)] = (17));

} else {
var statearr_31459_32861 = state_31399__$1;
(statearr_31459_32861[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (16))){
var inst_31381 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
var statearr_31461_32862 = state_31399__$1;
(statearr_31461_32862[(2)] = inst_31381);

(statearr_31461_32862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (10))){
var inst_31344 = (state_31399[(10)]);
var inst_31346 = (state_31399[(12)]);
var inst_31353 = cljs.core._nth(inst_31344,inst_31346);
var state_31399__$1 = state_31399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31399__$1,(13),out,inst_31353);
} else {
if((state_val_31400 === (18))){
var inst_31359 = (state_31399[(7)]);
var inst_31372 = cljs.core.first(inst_31359);
var state_31399__$1 = state_31399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31399__$1,(20),out,inst_31372);
} else {
if((state_val_31400 === (8))){
var inst_31345 = (state_31399[(8)]);
var inst_31346 = (state_31399[(12)]);
var inst_31348 = (inst_31346 < inst_31345);
var inst_31349 = inst_31348;
var state_31399__$1 = state_31399;
if(cljs.core.truth_(inst_31349)){
var statearr_31471_32865 = state_31399__$1;
(statearr_31471_32865[(1)] = (10));

} else {
var statearr_31473_32866 = state_31399__$1;
(statearr_31473_32866[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__26516__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26516__auto____0 = (function (){
var statearr_31478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31478[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26516__auto__);

(statearr_31478[(1)] = (1));

return statearr_31478;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26516__auto____1 = (function (state_31399){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_31399);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e31479){var ex__26519__auto__ = e31479;
var statearr_31480_32873 = state_31399;
(statearr_31480_32873[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_31399[(4)]))){
var statearr_31481_32875 = state_31399;
(statearr_31481_32875[(1)] = cljs.core.first((state_31399[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32876 = state_31399;
state_31399 = G__32876;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26516__auto__ = function(state_31399){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26516__auto____1.call(this,state_31399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26516__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26516__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_31482 = f__26601__auto__();
(statearr_31482[(6)] = c__26600__auto__);

return statearr_31482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
}));

return c__26600__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31484 = arguments.length;
switch (G__31484) {
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
var G__31491 = arguments.length;
switch (G__31491) {
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
var G__31494 = arguments.length;
switch (G__31494) {
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
var c__26600__auto___32890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_31528){
var state_val_31531 = (state_31528[(1)]);
if((state_val_31531 === (7))){
var inst_31523 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31534_32891 = state_31528__$1;
(statearr_31534_32891[(2)] = inst_31523);

(statearr_31534_32891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (1))){
var inst_31499 = null;
var state_31528__$1 = (function (){var statearr_31535 = state_31528;
(statearr_31535[(7)] = inst_31499);

return statearr_31535;
})();
var statearr_31537_32892 = state_31528__$1;
(statearr_31537_32892[(2)] = null);

(statearr_31537_32892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (4))){
var inst_31505 = (state_31528[(8)]);
var inst_31505__$1 = (state_31528[(2)]);
var inst_31509 = (inst_31505__$1 == null);
var inst_31510 = cljs.core.not(inst_31509);
var state_31528__$1 = (function (){var statearr_31544 = state_31528;
(statearr_31544[(8)] = inst_31505__$1);

return statearr_31544;
})();
if(inst_31510){
var statearr_31545_32895 = state_31528__$1;
(statearr_31545_32895[(1)] = (5));

} else {
var statearr_31546_32897 = state_31528__$1;
(statearr_31546_32897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (6))){
var state_31528__$1 = state_31528;
var statearr_31551_32898 = state_31528__$1;
(statearr_31551_32898[(2)] = null);

(statearr_31551_32898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (3))){
var inst_31525 = (state_31528[(2)]);
var inst_31526 = cljs.core.async.close_BANG_(out);
var state_31528__$1 = (function (){var statearr_31552 = state_31528;
(statearr_31552[(9)] = inst_31525);

return statearr_31552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31528__$1,inst_31526);
} else {
if((state_val_31531 === (2))){
var state_31528__$1 = state_31528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31528__$1,(4),ch);
} else {
if((state_val_31531 === (11))){
var inst_31505 = (state_31528[(8)]);
var inst_31517 = (state_31528[(2)]);
var inst_31499 = inst_31505;
var state_31528__$1 = (function (){var statearr_31556 = state_31528;
(statearr_31556[(7)] = inst_31499);

(statearr_31556[(10)] = inst_31517);

return statearr_31556;
})();
var statearr_31557_32900 = state_31528__$1;
(statearr_31557_32900[(2)] = null);

(statearr_31557_32900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (9))){
var inst_31505 = (state_31528[(8)]);
var state_31528__$1 = state_31528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31528__$1,(11),out,inst_31505);
} else {
if((state_val_31531 === (5))){
var inst_31505 = (state_31528[(8)]);
var inst_31499 = (state_31528[(7)]);
var inst_31512 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31505,inst_31499);
var state_31528__$1 = state_31528;
if(inst_31512){
var statearr_31559_32901 = state_31528__$1;
(statearr_31559_32901[(1)] = (8));

} else {
var statearr_31560_32902 = state_31528__$1;
(statearr_31560_32902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (10))){
var inst_31520 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31561_32903 = state_31528__$1;
(statearr_31561_32903[(2)] = inst_31520);

(statearr_31561_32903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (8))){
var inst_31499 = (state_31528[(7)]);
var tmp31558 = inst_31499;
var inst_31499__$1 = tmp31558;
var state_31528__$1 = (function (){var statearr_31562 = state_31528;
(statearr_31562[(7)] = inst_31499__$1);

return statearr_31562;
})();
var statearr_31563_32908 = state_31528__$1;
(statearr_31563_32908[(2)] = null);

(statearr_31563_32908[(1)] = (2));


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
var cljs$core$async$state_machine__26516__auto__ = null;
var cljs$core$async$state_machine__26516__auto____0 = (function (){
var statearr_31564 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31564[(0)] = cljs$core$async$state_machine__26516__auto__);

(statearr_31564[(1)] = (1));

return statearr_31564;
});
var cljs$core$async$state_machine__26516__auto____1 = (function (state_31528){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_31528);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e31565){var ex__26519__auto__ = e31565;
var statearr_31566_32915 = state_31528;
(statearr_31566_32915[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_31528[(4)]))){
var statearr_31567_32917 = state_31528;
(statearr_31567_32917[(1)] = cljs.core.first((state_31528[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32918 = state_31528;
state_31528 = G__32918;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$state_machine__26516__auto__ = function(state_31528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26516__auto____1.call(this,state_31528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26516__auto____0;
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26516__auto____1;
return cljs$core$async$state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_31568 = f__26601__auto__();
(statearr_31568[(6)] = c__26600__auto___32890);

return statearr_31568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31572 = arguments.length;
switch (G__31572) {
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
var c__26600__auto___32928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_31623){
var state_val_31624 = (state_31623[(1)]);
if((state_val_31624 === (7))){
var inst_31619 = (state_31623[(2)]);
var state_31623__$1 = state_31623;
var statearr_31630_32929 = state_31623__$1;
(statearr_31630_32929[(2)] = inst_31619);

(statearr_31630_32929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (1))){
var inst_31573 = (new Array(n));
var inst_31574 = inst_31573;
var inst_31575 = (0);
var state_31623__$1 = (function (){var statearr_31631 = state_31623;
(statearr_31631[(7)] = inst_31575);

(statearr_31631[(8)] = inst_31574);

return statearr_31631;
})();
var statearr_31634_32930 = state_31623__$1;
(statearr_31634_32930[(2)] = null);

(statearr_31634_32930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (4))){
var inst_31580 = (state_31623[(9)]);
var inst_31580__$1 = (state_31623[(2)]);
var inst_31581 = (inst_31580__$1 == null);
var inst_31583 = cljs.core.not(inst_31581);
var state_31623__$1 = (function (){var statearr_31636 = state_31623;
(statearr_31636[(9)] = inst_31580__$1);

return statearr_31636;
})();
if(inst_31583){
var statearr_31637_32931 = state_31623__$1;
(statearr_31637_32931[(1)] = (5));

} else {
var statearr_31638_32932 = state_31623__$1;
(statearr_31638_32932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (15))){
var inst_31613 = (state_31623[(2)]);
var state_31623__$1 = state_31623;
var statearr_31639_32935 = state_31623__$1;
(statearr_31639_32935[(2)] = inst_31613);

(statearr_31639_32935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (13))){
var state_31623__$1 = state_31623;
var statearr_31640_32937 = state_31623__$1;
(statearr_31640_32937[(2)] = null);

(statearr_31640_32937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (6))){
var inst_31575 = (state_31623[(7)]);
var inst_31609 = (inst_31575 > (0));
var state_31623__$1 = state_31623;
if(cljs.core.truth_(inst_31609)){
var statearr_31641_32939 = state_31623__$1;
(statearr_31641_32939[(1)] = (12));

} else {
var statearr_31642_32940 = state_31623__$1;
(statearr_31642_32940[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (3))){
var inst_31621 = (state_31623[(2)]);
var state_31623__$1 = state_31623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31623__$1,inst_31621);
} else {
if((state_val_31624 === (12))){
var inst_31574 = (state_31623[(8)]);
var inst_31611 = cljs.core.vec(inst_31574);
var state_31623__$1 = state_31623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31623__$1,(15),out,inst_31611);
} else {
if((state_val_31624 === (2))){
var state_31623__$1 = state_31623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31623__$1,(4),ch);
} else {
if((state_val_31624 === (11))){
var inst_31603 = (state_31623[(2)]);
var inst_31604 = (new Array(n));
var inst_31574 = inst_31604;
var inst_31575 = (0);
var state_31623__$1 = (function (){var statearr_31645 = state_31623;
(statearr_31645[(7)] = inst_31575);

(statearr_31645[(10)] = inst_31603);

(statearr_31645[(8)] = inst_31574);

return statearr_31645;
})();
var statearr_31647_32941 = state_31623__$1;
(statearr_31647_32941[(2)] = null);

(statearr_31647_32941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (9))){
var inst_31574 = (state_31623[(8)]);
var inst_31601 = cljs.core.vec(inst_31574);
var state_31623__$1 = state_31623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31623__$1,(11),out,inst_31601);
} else {
if((state_val_31624 === (5))){
var inst_31575 = (state_31623[(7)]);
var inst_31595 = (state_31623[(11)]);
var inst_31580 = (state_31623[(9)]);
var inst_31574 = (state_31623[(8)]);
var inst_31588 = (inst_31574[inst_31575] = inst_31580);
var inst_31595__$1 = (inst_31575 + (1));
var inst_31596 = (inst_31595__$1 < n);
var state_31623__$1 = (function (){var statearr_31650 = state_31623;
(statearr_31650[(11)] = inst_31595__$1);

(statearr_31650[(12)] = inst_31588);

return statearr_31650;
})();
if(cljs.core.truth_(inst_31596)){
var statearr_31651_32944 = state_31623__$1;
(statearr_31651_32944[(1)] = (8));

} else {
var statearr_31652_32945 = state_31623__$1;
(statearr_31652_32945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (14))){
var inst_31616 = (state_31623[(2)]);
var inst_31617 = cljs.core.async.close_BANG_(out);
var state_31623__$1 = (function (){var statearr_31654 = state_31623;
(statearr_31654[(13)] = inst_31616);

return statearr_31654;
})();
var statearr_31655_32948 = state_31623__$1;
(statearr_31655_32948[(2)] = inst_31617);

(statearr_31655_32948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (10))){
var inst_31607 = (state_31623[(2)]);
var state_31623__$1 = state_31623;
var statearr_31656_32953 = state_31623__$1;
(statearr_31656_32953[(2)] = inst_31607);

(statearr_31656_32953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (8))){
var inst_31595 = (state_31623[(11)]);
var inst_31574 = (state_31623[(8)]);
var tmp31653 = inst_31574;
var inst_31574__$1 = tmp31653;
var inst_31575 = inst_31595;
var state_31623__$1 = (function (){var statearr_31657 = state_31623;
(statearr_31657[(7)] = inst_31575);

(statearr_31657[(8)] = inst_31574__$1);

return statearr_31657;
})();
var statearr_31658_32954 = state_31623__$1;
(statearr_31658_32954[(2)] = null);

(statearr_31658_32954[(1)] = (2));


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
var cljs$core$async$state_machine__26516__auto__ = null;
var cljs$core$async$state_machine__26516__auto____0 = (function (){
var statearr_31659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31659[(0)] = cljs$core$async$state_machine__26516__auto__);

(statearr_31659[(1)] = (1));

return statearr_31659;
});
var cljs$core$async$state_machine__26516__auto____1 = (function (state_31623){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_31623);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e31661){var ex__26519__auto__ = e31661;
var statearr_31662_32958 = state_31623;
(statearr_31662_32958[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_31623[(4)]))){
var statearr_31663_32960 = state_31623;
(statearr_31663_32960[(1)] = cljs.core.first((state_31623[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32961 = state_31623;
state_31623 = G__32961;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$state_machine__26516__auto__ = function(state_31623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26516__auto____1.call(this,state_31623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26516__auto____0;
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26516__auto____1;
return cljs$core$async$state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_31665 = f__26601__auto__();
(statearr_31665[(6)] = c__26600__auto___32928);

return statearr_31665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31670 = arguments.length;
switch (G__31670) {
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
var c__26600__auto___32968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26601__auto__ = (function (){var switch__26515__auto__ = (function (state_31712){
var state_val_31713 = (state_31712[(1)]);
if((state_val_31713 === (7))){
var inst_31708 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
var statearr_31723_32969 = state_31712__$1;
(statearr_31723_32969[(2)] = inst_31708);

(statearr_31723_32969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (1))){
var inst_31671 = [];
var inst_31672 = inst_31671;
var inst_31673 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31712__$1 = (function (){var statearr_31725 = state_31712;
(statearr_31725[(7)] = inst_31672);

(statearr_31725[(8)] = inst_31673);

return statearr_31725;
})();
var statearr_31726_32970 = state_31712__$1;
(statearr_31726_32970[(2)] = null);

(statearr_31726_32970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (4))){
var inst_31676 = (state_31712[(9)]);
var inst_31676__$1 = (state_31712[(2)]);
var inst_31677 = (inst_31676__$1 == null);
var inst_31678 = cljs.core.not(inst_31677);
var state_31712__$1 = (function (){var statearr_31731 = state_31712;
(statearr_31731[(9)] = inst_31676__$1);

return statearr_31731;
})();
if(inst_31678){
var statearr_31732_32978 = state_31712__$1;
(statearr_31732_32978[(1)] = (5));

} else {
var statearr_31733_32979 = state_31712__$1;
(statearr_31733_32979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (15))){
var inst_31702 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
var statearr_31736_32980 = state_31712__$1;
(statearr_31736_32980[(2)] = inst_31702);

(statearr_31736_32980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (13))){
var state_31712__$1 = state_31712;
var statearr_31737_32981 = state_31712__$1;
(statearr_31737_32981[(2)] = null);

(statearr_31737_32981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (6))){
var inst_31672 = (state_31712[(7)]);
var inst_31697 = inst_31672.length;
var inst_31698 = (inst_31697 > (0));
var state_31712__$1 = state_31712;
if(cljs.core.truth_(inst_31698)){
var statearr_31740_32982 = state_31712__$1;
(statearr_31740_32982[(1)] = (12));

} else {
var statearr_31741_32983 = state_31712__$1;
(statearr_31741_32983[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (3))){
var inst_31710 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31712__$1,inst_31710);
} else {
if((state_val_31713 === (12))){
var inst_31672 = (state_31712[(7)]);
var inst_31700 = cljs.core.vec(inst_31672);
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31712__$1,(15),out,inst_31700);
} else {
if((state_val_31713 === (2))){
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31712__$1,(4),ch);
} else {
if((state_val_31713 === (11))){
var inst_31676 = (state_31712[(9)]);
var inst_31680 = (state_31712[(10)]);
var inst_31690 = (state_31712[(2)]);
var inst_31691 = [];
var inst_31692 = inst_31691.push(inst_31676);
var inst_31672 = inst_31691;
var inst_31673 = inst_31680;
var state_31712__$1 = (function (){var statearr_31742 = state_31712;
(statearr_31742[(11)] = inst_31690);

(statearr_31742[(7)] = inst_31672);

(statearr_31742[(12)] = inst_31692);

(statearr_31742[(8)] = inst_31673);

return statearr_31742;
})();
var statearr_31743_32987 = state_31712__$1;
(statearr_31743_32987[(2)] = null);

(statearr_31743_32987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (9))){
var inst_31672 = (state_31712[(7)]);
var inst_31688 = cljs.core.vec(inst_31672);
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31712__$1,(11),out,inst_31688);
} else {
if((state_val_31713 === (5))){
var inst_31676 = (state_31712[(9)]);
var inst_31680 = (state_31712[(10)]);
var inst_31673 = (state_31712[(8)]);
var inst_31680__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31676) : f.call(null,inst_31676));
var inst_31681 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31680__$1,inst_31673);
var inst_31682 = cljs.core.keyword_identical_QMARK_(inst_31673,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31683 = ((inst_31681) || (inst_31682));
var state_31712__$1 = (function (){var statearr_31745 = state_31712;
(statearr_31745[(10)] = inst_31680__$1);

return statearr_31745;
})();
if(cljs.core.truth_(inst_31683)){
var statearr_31747_32989 = state_31712__$1;
(statearr_31747_32989[(1)] = (8));

} else {
var statearr_31749_32990 = state_31712__$1;
(statearr_31749_32990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (14))){
var inst_31705 = (state_31712[(2)]);
var inst_31706 = cljs.core.async.close_BANG_(out);
var state_31712__$1 = (function (){var statearr_31751 = state_31712;
(statearr_31751[(13)] = inst_31705);

return statearr_31751;
})();
var statearr_31754_32991 = state_31712__$1;
(statearr_31754_32991[(2)] = inst_31706);

(statearr_31754_32991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (10))){
var inst_31695 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
var statearr_31759_32992 = state_31712__$1;
(statearr_31759_32992[(2)] = inst_31695);

(statearr_31759_32992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (8))){
var inst_31672 = (state_31712[(7)]);
var inst_31676 = (state_31712[(9)]);
var inst_31680 = (state_31712[(10)]);
var inst_31685 = inst_31672.push(inst_31676);
var tmp31750 = inst_31672;
var inst_31672__$1 = tmp31750;
var inst_31673 = inst_31680;
var state_31712__$1 = (function (){var statearr_31760 = state_31712;
(statearr_31760[(7)] = inst_31672__$1);

(statearr_31760[(14)] = inst_31685);

(statearr_31760[(8)] = inst_31673);

return statearr_31760;
})();
var statearr_31762_32997 = state_31712__$1;
(statearr_31762_32997[(2)] = null);

(statearr_31762_32997[(1)] = (2));


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
var cljs$core$async$state_machine__26516__auto__ = null;
var cljs$core$async$state_machine__26516__auto____0 = (function (){
var statearr_31768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31768[(0)] = cljs$core$async$state_machine__26516__auto__);

(statearr_31768[(1)] = (1));

return statearr_31768;
});
var cljs$core$async$state_machine__26516__auto____1 = (function (state_31712){
while(true){
var ret_value__26517__auto__ = (function (){try{while(true){
var result__26518__auto__ = switch__26515__auto__(state_31712);
if(cljs.core.keyword_identical_QMARK_(result__26518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26518__auto__;
}
break;
}
}catch (e31771){var ex__26519__auto__ = e31771;
var statearr_31772_33002 = state_31712;
(statearr_31772_33002[(2)] = ex__26519__auto__);


if(cljs.core.seq((state_31712[(4)]))){
var statearr_31774_33003 = state_31712;
(statearr_31774_33003[(1)] = cljs.core.first((state_31712[(4)])));

} else {
throw ex__26519__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33004 = state_31712;
state_31712 = G__33004;
continue;
} else {
return ret_value__26517__auto__;
}
break;
}
});
cljs$core$async$state_machine__26516__auto__ = function(state_31712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26516__auto____1.call(this,state_31712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26516__auto____0;
cljs$core$async$state_machine__26516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26516__auto____1;
return cljs$core$async$state_machine__26516__auto__;
})()
})();
var state__26602__auto__ = (function (){var statearr_31775 = f__26601__auto__();
(statearr_31775[(6)] = c__26600__auto___32968);

return statearr_31775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26602__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
