goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30300 = arguments.length;
switch (G__30300) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30301 = (function (f,blockable,meta30302){
this.f = f;
this.blockable = blockable;
this.meta30302 = meta30302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30303,meta30302__$1){
var self__ = this;
var _30303__$1 = this;
return (new cljs.core.async.t_cljs$core$async30301(self__.f,self__.blockable,meta30302__$1));
}));

(cljs.core.async.t_cljs$core$async30301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30303){
var self__ = this;
var _30303__$1 = this;
return self__.meta30302;
}));

(cljs.core.async.t_cljs$core$async30301.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30301.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30301.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30301.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30302","meta30302",-929002832,null)], null);
}));

(cljs.core.async.t_cljs$core$async30301.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30301");

(cljs.core.async.t_cljs$core$async30301.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30301");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30301.
 */
cljs.core.async.__GT_t_cljs$core$async30301 = (function cljs$core$async$__GT_t_cljs$core$async30301(f__$1,blockable__$1,meta30302){
return (new cljs.core.async.t_cljs$core$async30301(f__$1,blockable__$1,meta30302));
});

}

return (new cljs.core.async.t_cljs$core$async30301(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30319 = arguments.length;
switch (G__30319) {
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
var G__30321 = arguments.length;
switch (G__30321) {
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
var G__30351 = arguments.length;
switch (G__30351) {
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
var val_32579 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32579) : fn1.call(null,val_32579));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32579) : fn1.call(null,val_32579));
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
var G__30365 = arguments.length;
switch (G__30365) {
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
var n__4666__auto___32585 = n;
var x_32586 = (0);
while(true){
if((x_32586 < n__4666__auto___32585)){
(a[x_32586] = x_32586);

var G__32587 = (x_32586 + (1));
x_32586 = G__32587;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30377 = (function (flag,meta30378){
this.flag = flag;
this.meta30378 = meta30378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30379,meta30378__$1){
var self__ = this;
var _30379__$1 = this;
return (new cljs.core.async.t_cljs$core$async30377(self__.flag,meta30378__$1));
}));

(cljs.core.async.t_cljs$core$async30377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30379){
var self__ = this;
var _30379__$1 = this;
return self__.meta30378;
}));

(cljs.core.async.t_cljs$core$async30377.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30377.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30378","meta30378",1520048201,null)], null);
}));

(cljs.core.async.t_cljs$core$async30377.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30377");

(cljs.core.async.t_cljs$core$async30377.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30377");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30377.
 */
cljs.core.async.__GT_t_cljs$core$async30377 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30377(flag__$1,meta30378){
return (new cljs.core.async.t_cljs$core$async30377(flag__$1,meta30378));
});

}

return (new cljs.core.async.t_cljs$core$async30377(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30381 = (function (flag,cb,meta30382){
this.flag = flag;
this.cb = cb;
this.meta30382 = meta30382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30383,meta30382__$1){
var self__ = this;
var _30383__$1 = this;
return (new cljs.core.async.t_cljs$core$async30381(self__.flag,self__.cb,meta30382__$1));
}));

(cljs.core.async.t_cljs$core$async30381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30383){
var self__ = this;
var _30383__$1 = this;
return self__.meta30382;
}));

(cljs.core.async.t_cljs$core$async30381.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30381.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30382","meta30382",1131204330,null)], null);
}));

(cljs.core.async.t_cljs$core$async30381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30381");

(cljs.core.async.t_cljs$core$async30381.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30381.
 */
cljs.core.async.__GT_t_cljs$core$async30381 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30381(flag__$1,cb__$1,meta30382){
return (new cljs.core.async.t_cljs$core$async30381(flag__$1,cb__$1,meta30382));
});

}

return (new cljs.core.async.t_cljs$core$async30381(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30403_SHARP_){
var G__30412 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30403_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30412) : fret.call(null,G__30412));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30404_SHARP_){
var G__30415 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30404_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30415) : fret.call(null,G__30415));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32594 = (i + (1));
i = G__32594;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
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
var args__4795__auto__ = [];
var len__4789__auto___32596 = arguments.length;
var i__4790__auto___32597 = (0);
while(true){
if((i__4790__auto___32597 < len__4789__auto___32596)){
args__4795__auto__.push((arguments[i__4790__auto___32597]));

var G__32598 = (i__4790__auto___32597 + (1));
i__4790__auto___32597 = G__32598;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30421){
var map__30422 = p__30421;
var map__30422__$1 = (((((!((map__30422 == null))))?(((((map__30422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30422):map__30422);
var opts = map__30422__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30419){
var G__30420 = cljs.core.first(seq30419);
var seq30419__$1 = cljs.core.next(seq30419);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30420,seq30419__$1);
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
var G__30427 = arguments.length;
switch (G__30427) {
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
var c__30202__auto___32604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_30462){
var state_val_30463 = (state_30462[(1)]);
if((state_val_30463 === (7))){
var inst_30458 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
var statearr_30464_32617 = state_30462__$1;
(statearr_30464_32617[(2)] = inst_30458);

(statearr_30464_32617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (1))){
var state_30462__$1 = state_30462;
var statearr_30466_32618 = state_30462__$1;
(statearr_30466_32618[(2)] = null);

(statearr_30466_32618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (4))){
var inst_30433 = (state_30462[(7)]);
var inst_30433__$1 = (state_30462[(2)]);
var inst_30437 = (inst_30433__$1 == null);
var state_30462__$1 = (function (){var statearr_30467 = state_30462;
(statearr_30467[(7)] = inst_30433__$1);

return statearr_30467;
})();
if(cljs.core.truth_(inst_30437)){
var statearr_30468_32622 = state_30462__$1;
(statearr_30468_32622[(1)] = (5));

} else {
var statearr_30469_32623 = state_30462__$1;
(statearr_30469_32623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (13))){
var state_30462__$1 = state_30462;
var statearr_30482_32624 = state_30462__$1;
(statearr_30482_32624[(2)] = null);

(statearr_30482_32624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (6))){
var inst_30433 = (state_30462[(7)]);
var state_30462__$1 = state_30462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30462__$1,(11),to,inst_30433);
} else {
if((state_val_30463 === (3))){
var inst_30460 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30462__$1,inst_30460);
} else {
if((state_val_30463 === (12))){
var state_30462__$1 = state_30462;
var statearr_30483_32628 = state_30462__$1;
(statearr_30483_32628[(2)] = null);

(statearr_30483_32628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (2))){
var state_30462__$1 = state_30462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30462__$1,(4),from);
} else {
if((state_val_30463 === (11))){
var inst_30449 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
if(cljs.core.truth_(inst_30449)){
var statearr_30485_32629 = state_30462__$1;
(statearr_30485_32629[(1)] = (12));

} else {
var statearr_30486_32630 = state_30462__$1;
(statearr_30486_32630[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (9))){
var state_30462__$1 = state_30462;
var statearr_30487_32635 = state_30462__$1;
(statearr_30487_32635[(2)] = null);

(statearr_30487_32635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (5))){
var state_30462__$1 = state_30462;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30488_32639 = state_30462__$1;
(statearr_30488_32639[(1)] = (8));

} else {
var statearr_30489_32640 = state_30462__$1;
(statearr_30489_32640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (14))){
var inst_30456 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
var statearr_30490_32641 = state_30462__$1;
(statearr_30490_32641[(2)] = inst_30456);

(statearr_30490_32641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (10))){
var inst_30444 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
var statearr_30491_32642 = state_30462__$1;
(statearr_30491_32642[(2)] = inst_30444);

(statearr_30491_32642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (8))){
var inst_30440 = cljs.core.async.close_BANG_(to);
var state_30462__$1 = state_30462;
var statearr_30494_32646 = state_30462__$1;
(statearr_30494_32646[(2)] = inst_30440);

(statearr_30494_32646[(1)] = (10));


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
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_30497 = [null,null,null,null,null,null,null,null];
(statearr_30497[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_30497[(1)] = (1));

return statearr_30497;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_30462){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_30462);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30500){if((e30500 instanceof Object)){
var ex__29872__auto__ = e30500;
var statearr_30504_32650 = state_30462;
(statearr_30504_32650[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32651 = state_30462;
state_30462 = G__32651;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_30462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_30462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_30505 = f__30203__auto__();
(statearr_30505[(6)] = c__30202__auto___32604);

return statearr_30505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
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
var process = (function (p__30508){
var vec__30509 = p__30508;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30509,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30509,(1),null);
var job = vec__30509;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30202__auto___32656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_30516){
var state_val_30518 = (state_30516[(1)]);
if((state_val_30518 === (1))){
var state_30516__$1 = state_30516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30516__$1,(2),res,v);
} else {
if((state_val_30518 === (2))){
var inst_30513 = (state_30516[(2)]);
var inst_30514 = cljs.core.async.close_BANG_(res);
var state_30516__$1 = (function (){var statearr_30522 = state_30516;
(statearr_30522[(7)] = inst_30513);

return statearr_30522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30516__$1,inst_30514);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0 = (function (){
var statearr_30539 = [null,null,null,null,null,null,null,null];
(statearr_30539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__);

(statearr_30539[(1)] = (1));

return statearr_30539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1 = (function (state_30516){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_30516);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30540){if((e30540 instanceof Object)){
var ex__29872__auto__ = e30540;
var statearr_30541_32657 = state_30516;
(statearr_30541_32657[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30540;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32658 = state_30516;
state_30516 = G__32658;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = function(state_30516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1.call(this,state_30516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_30544 = f__30203__auto__();
(statearr_30544[(6)] = c__30202__auto___32656);

return statearr_30544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30546){
var vec__30551 = p__30546;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30551,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30551,(1),null);
var job = vec__30551;
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
var n__4666__auto___32665 = n;
var __32666 = (0);
while(true){
if((__32666 < n__4666__auto___32665)){
var G__30559_32667 = type;
var G__30559_32668__$1 = (((G__30559_32667 instanceof cljs.core.Keyword))?G__30559_32667.fqn:null);
switch (G__30559_32668__$1) {
case "compute":
var c__30202__auto___32670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32666,c__30202__auto___32670,G__30559_32667,G__30559_32668__$1,n__4666__auto___32665,jobs,results,process,async){
return (function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = ((function (__32666,c__30202__auto___32670,G__30559_32667,G__30559_32668__$1,n__4666__auto___32665,jobs,results,process,async){
return (function (state_30574){
var state_val_30575 = (state_30574[(1)]);
if((state_val_30575 === (1))){
var state_30574__$1 = state_30574;
var statearr_30581_32672 = state_30574__$1;
(statearr_30581_32672[(2)] = null);

(statearr_30581_32672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (2))){
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30574__$1,(4),jobs);
} else {
if((state_val_30575 === (3))){
var inst_30572 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30574__$1,inst_30572);
} else {
if((state_val_30575 === (4))){
var inst_30564 = (state_30574[(2)]);
var inst_30565 = process(inst_30564);
var state_30574__$1 = state_30574;
if(cljs.core.truth_(inst_30565)){
var statearr_30582_32690 = state_30574__$1;
(statearr_30582_32690[(1)] = (5));

} else {
var statearr_30583_32691 = state_30574__$1;
(statearr_30583_32691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (5))){
var state_30574__$1 = state_30574;
var statearr_30584_32694 = state_30574__$1;
(statearr_30584_32694[(2)] = null);

(statearr_30584_32694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (6))){
var state_30574__$1 = state_30574;
var statearr_30585_32699 = state_30574__$1;
(statearr_30585_32699[(2)] = null);

(statearr_30585_32699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (7))){
var inst_30570 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30586_32700 = state_30574__$1;
(statearr_30586_32700[(2)] = inst_30570);

(statearr_30586_32700[(1)] = (3));


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
});})(__32666,c__30202__auto___32670,G__30559_32667,G__30559_32668__$1,n__4666__auto___32665,jobs,results,process,async))
;
return ((function (__32666,switch__29868__auto__,c__30202__auto___32670,G__30559_32667,G__30559_32668__$1,n__4666__auto___32665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0 = (function (){
var statearr_30588 = [null,null,null,null,null,null,null];
(statearr_30588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__);

(statearr_30588[(1)] = (1));

return statearr_30588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1 = (function (state_30574){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_30574);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30589){if((e30589 instanceof Object)){
var ex__29872__auto__ = e30589;
var statearr_30591_32701 = state_30574;
(statearr_30591_32701[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32702 = state_30574;
state_30574 = G__32702;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = function(state_30574){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1.call(this,state_30574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__;
})()
;})(__32666,switch__29868__auto__,c__30202__auto___32670,G__30559_32667,G__30559_32668__$1,n__4666__auto___32665,jobs,results,process,async))
})();
var state__30204__auto__ = (function (){var statearr_30592 = f__30203__auto__();
(statearr_30592[(6)] = c__30202__auto___32670);

return statearr_30592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
});})(__32666,c__30202__auto___32670,G__30559_32667,G__30559_32668__$1,n__4666__auto___32665,jobs,results,process,async))
);


break;
case "async":
var c__30202__auto___32703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32666,c__30202__auto___32703,G__30559_32667,G__30559_32668__$1,n__4666__auto___32665,jobs,results,process,async){
return (function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = ((function (__32666,c__30202__auto___32703,G__30559_32667,G__30559_32668__$1,n__4666__auto___32665,jobs,results,process,async){
return (function (state_30605){
var state_val_30606 = (state_30605[(1)]);
if((state_val_30606 === (1))){
var state_30605__$1 = state_30605;
var statearr_30607_32704 = state_30605__$1;
(statearr_30607_32704[(2)] = null);

(statearr_30607_32704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (2))){
var state_30605__$1 = state_30605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30605__$1,(4),jobs);
} else {
if((state_val_30606 === (3))){
var inst_30603 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30605__$1,inst_30603);
} else {
if((state_val_30606 === (4))){
var inst_30595 = (state_30605[(2)]);
var inst_30596 = async(inst_30595);
var state_30605__$1 = state_30605;
if(cljs.core.truth_(inst_30596)){
var statearr_30609_32711 = state_30605__$1;
(statearr_30609_32711[(1)] = (5));

} else {
var statearr_30610_32712 = state_30605__$1;
(statearr_30610_32712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (5))){
var state_30605__$1 = state_30605;
var statearr_30611_32713 = state_30605__$1;
(statearr_30611_32713[(2)] = null);

(statearr_30611_32713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (6))){
var state_30605__$1 = state_30605;
var statearr_30612_32714 = state_30605__$1;
(statearr_30612_32714[(2)] = null);

(statearr_30612_32714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (7))){
var inst_30601 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
var statearr_30613_32715 = state_30605__$1;
(statearr_30613_32715[(2)] = inst_30601);

(statearr_30613_32715[(1)] = (3));


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
});})(__32666,c__30202__auto___32703,G__30559_32667,G__30559_32668__$1,n__4666__auto___32665,jobs,results,process,async))
;
return ((function (__32666,switch__29868__auto__,c__30202__auto___32703,G__30559_32667,G__30559_32668__$1,n__4666__auto___32665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0 = (function (){
var statearr_30614 = [null,null,null,null,null,null,null];
(statearr_30614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__);

(statearr_30614[(1)] = (1));

return statearr_30614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1 = (function (state_30605){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_30605);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30615){if((e30615 instanceof Object)){
var ex__29872__auto__ = e30615;
var statearr_30616_32722 = state_30605;
(statearr_30616_32722[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32723 = state_30605;
state_30605 = G__32723;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = function(state_30605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1.call(this,state_30605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__;
})()
;})(__32666,switch__29868__auto__,c__30202__auto___32703,G__30559_32667,G__30559_32668__$1,n__4666__auto___32665,jobs,results,process,async))
})();
var state__30204__auto__ = (function (){var statearr_30617 = f__30203__auto__();
(statearr_30617[(6)] = c__30202__auto___32703);

return statearr_30617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
});})(__32666,c__30202__auto___32703,G__30559_32667,G__30559_32668__$1,n__4666__auto___32665,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30559_32668__$1)].join('')));

}

var G__32724 = (__32666 + (1));
__32666 = G__32724;
continue;
} else {
}
break;
}

var c__30202__auto___32725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_30653){
var state_val_30654 = (state_30653[(1)]);
if((state_val_30654 === (7))){
var inst_30644 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
var statearr_30676_32726 = state_30653__$1;
(statearr_30676_32726[(2)] = inst_30644);

(statearr_30676_32726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (1))){
var state_30653__$1 = state_30653;
var statearr_30677_32727 = state_30653__$1;
(statearr_30677_32727[(2)] = null);

(statearr_30677_32727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (4))){
var inst_30623 = (state_30653[(7)]);
var inst_30623__$1 = (state_30653[(2)]);
var inst_30624 = (inst_30623__$1 == null);
var state_30653__$1 = (function (){var statearr_30680 = state_30653;
(statearr_30680[(7)] = inst_30623__$1);

return statearr_30680;
})();
if(cljs.core.truth_(inst_30624)){
var statearr_30681_32734 = state_30653__$1;
(statearr_30681_32734[(1)] = (5));

} else {
var statearr_30682_32735 = state_30653__$1;
(statearr_30682_32735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (6))){
var inst_30623 = (state_30653[(7)]);
var inst_30631 = (state_30653[(8)]);
var inst_30631__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30632 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30634 = [inst_30623,inst_30631__$1];
var inst_30636 = (new cljs.core.PersistentVector(null,2,(5),inst_30632,inst_30634,null));
var state_30653__$1 = (function (){var statearr_30684 = state_30653;
(statearr_30684[(8)] = inst_30631__$1);

return statearr_30684;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30653__$1,(8),jobs,inst_30636);
} else {
if((state_val_30654 === (3))){
var inst_30646 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30653__$1,inst_30646);
} else {
if((state_val_30654 === (2))){
var state_30653__$1 = state_30653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30653__$1,(4),from);
} else {
if((state_val_30654 === (9))){
var inst_30641 = (state_30653[(2)]);
var state_30653__$1 = (function (){var statearr_30685 = state_30653;
(statearr_30685[(9)] = inst_30641);

return statearr_30685;
})();
var statearr_30686_32736 = state_30653__$1;
(statearr_30686_32736[(2)] = null);

(statearr_30686_32736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (5))){
var inst_30626 = cljs.core.async.close_BANG_(jobs);
var state_30653__$1 = state_30653;
var statearr_30687_32737 = state_30653__$1;
(statearr_30687_32737[(2)] = inst_30626);

(statearr_30687_32737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (8))){
var inst_30631 = (state_30653[(8)]);
var inst_30638 = (state_30653[(2)]);
var state_30653__$1 = (function (){var statearr_30689 = state_30653;
(statearr_30689[(10)] = inst_30638);

return statearr_30689;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30653__$1,(9),results,inst_30631);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0 = (function (){
var statearr_30691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__);

(statearr_30691[(1)] = (1));

return statearr_30691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1 = (function (state_30653){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_30653);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30696){if((e30696 instanceof Object)){
var ex__29872__auto__ = e30696;
var statearr_30697_32738 = state_30653;
(statearr_30697_32738[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30696;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32739 = state_30653;
state_30653 = G__32739;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = function(state_30653){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1.call(this,state_30653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_30698 = f__30203__auto__();
(statearr_30698[(6)] = c__30202__auto___32725);

return statearr_30698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
}));


var c__30202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_30740){
var state_val_30741 = (state_30740[(1)]);
if((state_val_30741 === (7))){
var inst_30735 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30747_32740 = state_30740__$1;
(statearr_30747_32740[(2)] = inst_30735);

(statearr_30747_32740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (20))){
var state_30740__$1 = state_30740;
var statearr_30748_32746 = state_30740__$1;
(statearr_30748_32746[(2)] = null);

(statearr_30748_32746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (1))){
var state_30740__$1 = state_30740;
var statearr_30749_32747 = state_30740__$1;
(statearr_30749_32747[(2)] = null);

(statearr_30749_32747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (4))){
var inst_30701 = (state_30740[(7)]);
var inst_30701__$1 = (state_30740[(2)]);
var inst_30702 = (inst_30701__$1 == null);
var state_30740__$1 = (function (){var statearr_30755 = state_30740;
(statearr_30755[(7)] = inst_30701__$1);

return statearr_30755;
})();
if(cljs.core.truth_(inst_30702)){
var statearr_30756_32749 = state_30740__$1;
(statearr_30756_32749[(1)] = (5));

} else {
var statearr_30758_32750 = state_30740__$1;
(statearr_30758_32750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (15))){
var inst_30714 = (state_30740[(8)]);
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30740__$1,(18),to,inst_30714);
} else {
if((state_val_30741 === (21))){
var inst_30730 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30761_32752 = state_30740__$1;
(statearr_30761_32752[(2)] = inst_30730);

(statearr_30761_32752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (13))){
var inst_30732 = (state_30740[(2)]);
var state_30740__$1 = (function (){var statearr_30762 = state_30740;
(statearr_30762[(9)] = inst_30732);

return statearr_30762;
})();
var statearr_30763_32753 = state_30740__$1;
(statearr_30763_32753[(2)] = null);

(statearr_30763_32753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (6))){
var inst_30701 = (state_30740[(7)]);
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30740__$1,(11),inst_30701);
} else {
if((state_val_30741 === (17))){
var inst_30725 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
if(cljs.core.truth_(inst_30725)){
var statearr_30764_32754 = state_30740__$1;
(statearr_30764_32754[(1)] = (19));

} else {
var statearr_30765_32756 = state_30740__$1;
(statearr_30765_32756[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (3))){
var inst_30737 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30740__$1,inst_30737);
} else {
if((state_val_30741 === (12))){
var inst_30711 = (state_30740[(10)]);
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30740__$1,(14),inst_30711);
} else {
if((state_val_30741 === (2))){
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30740__$1,(4),results);
} else {
if((state_val_30741 === (19))){
var state_30740__$1 = state_30740;
var statearr_30768_32758 = state_30740__$1;
(statearr_30768_32758[(2)] = null);

(statearr_30768_32758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (11))){
var inst_30711 = (state_30740[(2)]);
var state_30740__$1 = (function (){var statearr_30769 = state_30740;
(statearr_30769[(10)] = inst_30711);

return statearr_30769;
})();
var statearr_30773_32759 = state_30740__$1;
(statearr_30773_32759[(2)] = null);

(statearr_30773_32759[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (9))){
var state_30740__$1 = state_30740;
var statearr_30774_32760 = state_30740__$1;
(statearr_30774_32760[(2)] = null);

(statearr_30774_32760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (5))){
var state_30740__$1 = state_30740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30776_32761 = state_30740__$1;
(statearr_30776_32761[(1)] = (8));

} else {
var statearr_30777_32762 = state_30740__$1;
(statearr_30777_32762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (14))){
var inst_30714 = (state_30740[(8)]);
var inst_30714__$1 = (state_30740[(2)]);
var inst_30718 = (inst_30714__$1 == null);
var inst_30719 = cljs.core.not(inst_30718);
var state_30740__$1 = (function (){var statearr_30779 = state_30740;
(statearr_30779[(8)] = inst_30714__$1);

return statearr_30779;
})();
if(inst_30719){
var statearr_30780_32763 = state_30740__$1;
(statearr_30780_32763[(1)] = (15));

} else {
var statearr_30781_32764 = state_30740__$1;
(statearr_30781_32764[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (16))){
var state_30740__$1 = state_30740;
var statearr_30782_32765 = state_30740__$1;
(statearr_30782_32765[(2)] = false);

(statearr_30782_32765[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (10))){
var inst_30708 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30783_32768 = state_30740__$1;
(statearr_30783_32768[(2)] = inst_30708);

(statearr_30783_32768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (18))){
var inst_30722 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30784_32769 = state_30740__$1;
(statearr_30784_32769[(2)] = inst_30722);

(statearr_30784_32769[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (8))){
var inst_30705 = cljs.core.async.close_BANG_(to);
var state_30740__$1 = state_30740;
var statearr_30786_32770 = state_30740__$1;
(statearr_30786_32770[(2)] = inst_30705);

(statearr_30786_32770[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0 = (function (){
var statearr_30794 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30794[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__);

(statearr_30794[(1)] = (1));

return statearr_30794;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1 = (function (state_30740){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_30740);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30795){if((e30795 instanceof Object)){
var ex__29872__auto__ = e30795;
var statearr_30796_32771 = state_30740;
(statearr_30796_32771[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30795;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32772 = state_30740;
state_30740 = G__32772;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = function(state_30740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1.call(this,state_30740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_30798 = f__30203__auto__();
(statearr_30798[(6)] = c__30202__auto__);

return statearr_30798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
}));

return c__30202__auto__;
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
var G__30802 = arguments.length;
switch (G__30802) {
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
var G__30804 = arguments.length;
switch (G__30804) {
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
var G__30811 = arguments.length;
switch (G__30811) {
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
var c__30202__auto___32781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_30838){
var state_val_30839 = (state_30838[(1)]);
if((state_val_30839 === (7))){
var inst_30834 = (state_30838[(2)]);
var state_30838__$1 = state_30838;
var statearr_30840_32782 = state_30838__$1;
(statearr_30840_32782[(2)] = inst_30834);

(statearr_30840_32782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (1))){
var state_30838__$1 = state_30838;
var statearr_30841_32783 = state_30838__$1;
(statearr_30841_32783[(2)] = null);

(statearr_30841_32783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (4))){
var inst_30815 = (state_30838[(7)]);
var inst_30815__$1 = (state_30838[(2)]);
var inst_30816 = (inst_30815__$1 == null);
var state_30838__$1 = (function (){var statearr_30842 = state_30838;
(statearr_30842[(7)] = inst_30815__$1);

return statearr_30842;
})();
if(cljs.core.truth_(inst_30816)){
var statearr_30843_32784 = state_30838__$1;
(statearr_30843_32784[(1)] = (5));

} else {
var statearr_30844_32785 = state_30838__$1;
(statearr_30844_32785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (13))){
var state_30838__$1 = state_30838;
var statearr_30845_32786 = state_30838__$1;
(statearr_30845_32786[(2)] = null);

(statearr_30845_32786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (6))){
var inst_30815 = (state_30838[(7)]);
var inst_30821 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30815) : p.call(null,inst_30815));
var state_30838__$1 = state_30838;
if(cljs.core.truth_(inst_30821)){
var statearr_30848_32787 = state_30838__$1;
(statearr_30848_32787[(1)] = (9));

} else {
var statearr_30849_32788 = state_30838__$1;
(statearr_30849_32788[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (3))){
var inst_30836 = (state_30838[(2)]);
var state_30838__$1 = state_30838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30838__$1,inst_30836);
} else {
if((state_val_30839 === (12))){
var state_30838__$1 = state_30838;
var statearr_30850_32789 = state_30838__$1;
(statearr_30850_32789[(2)] = null);

(statearr_30850_32789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (2))){
var state_30838__$1 = state_30838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30838__$1,(4),ch);
} else {
if((state_val_30839 === (11))){
var inst_30815 = (state_30838[(7)]);
var inst_30825 = (state_30838[(2)]);
var state_30838__$1 = state_30838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30838__$1,(8),inst_30825,inst_30815);
} else {
if((state_val_30839 === (9))){
var state_30838__$1 = state_30838;
var statearr_30851_32790 = state_30838__$1;
(statearr_30851_32790[(2)] = tc);

(statearr_30851_32790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (5))){
var inst_30818 = cljs.core.async.close_BANG_(tc);
var inst_30819 = cljs.core.async.close_BANG_(fc);
var state_30838__$1 = (function (){var statearr_30852 = state_30838;
(statearr_30852[(8)] = inst_30818);

return statearr_30852;
})();
var statearr_30853_32791 = state_30838__$1;
(statearr_30853_32791[(2)] = inst_30819);

(statearr_30853_32791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (14))){
var inst_30832 = (state_30838[(2)]);
var state_30838__$1 = state_30838;
var statearr_30854_32792 = state_30838__$1;
(statearr_30854_32792[(2)] = inst_30832);

(statearr_30854_32792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (10))){
var state_30838__$1 = state_30838;
var statearr_30858_32793 = state_30838__$1;
(statearr_30858_32793[(2)] = fc);

(statearr_30858_32793[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (8))){
var inst_30827 = (state_30838[(2)]);
var state_30838__$1 = state_30838;
if(cljs.core.truth_(inst_30827)){
var statearr_30859_32794 = state_30838__$1;
(statearr_30859_32794[(1)] = (12));

} else {
var statearr_30860_32795 = state_30838__$1;
(statearr_30860_32795[(1)] = (13));

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
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_30862 = [null,null,null,null,null,null,null,null,null];
(statearr_30862[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_30862[(1)] = (1));

return statearr_30862;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_30838){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_30838);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30863){if((e30863 instanceof Object)){
var ex__29872__auto__ = e30863;
var statearr_30864_32813 = state_30838;
(statearr_30864_32813[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30863;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32814 = state_30838;
state_30838 = G__32814;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_30838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_30838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_30865 = f__30203__auto__();
(statearr_30865[(6)] = c__30202__auto___32781);

return statearr_30865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
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
var c__30202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_30888){
var state_val_30889 = (state_30888[(1)]);
if((state_val_30889 === (7))){
var inst_30884 = (state_30888[(2)]);
var state_30888__$1 = state_30888;
var statearr_30890_32815 = state_30888__$1;
(statearr_30890_32815[(2)] = inst_30884);

(statearr_30890_32815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (1))){
var inst_30868 = init;
var state_30888__$1 = (function (){var statearr_30891 = state_30888;
(statearr_30891[(7)] = inst_30868);

return statearr_30891;
})();
var statearr_30892_32819 = state_30888__$1;
(statearr_30892_32819[(2)] = null);

(statearr_30892_32819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (4))){
var inst_30871 = (state_30888[(8)]);
var inst_30871__$1 = (state_30888[(2)]);
var inst_30872 = (inst_30871__$1 == null);
var state_30888__$1 = (function (){var statearr_30894 = state_30888;
(statearr_30894[(8)] = inst_30871__$1);

return statearr_30894;
})();
if(cljs.core.truth_(inst_30872)){
var statearr_30895_32822 = state_30888__$1;
(statearr_30895_32822[(1)] = (5));

} else {
var statearr_30896_32823 = state_30888__$1;
(statearr_30896_32823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (6))){
var inst_30868 = (state_30888[(7)]);
var inst_30871 = (state_30888[(8)]);
var inst_30875 = (state_30888[(9)]);
var inst_30875__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30868,inst_30871) : f.call(null,inst_30868,inst_30871));
var inst_30876 = cljs.core.reduced_QMARK_(inst_30875__$1);
var state_30888__$1 = (function (){var statearr_30897 = state_30888;
(statearr_30897[(9)] = inst_30875__$1);

return statearr_30897;
})();
if(inst_30876){
var statearr_30898_32824 = state_30888__$1;
(statearr_30898_32824[(1)] = (8));

} else {
var statearr_30899_32825 = state_30888__$1;
(statearr_30899_32825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (3))){
var inst_30886 = (state_30888[(2)]);
var state_30888__$1 = state_30888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30888__$1,inst_30886);
} else {
if((state_val_30889 === (2))){
var state_30888__$1 = state_30888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30888__$1,(4),ch);
} else {
if((state_val_30889 === (9))){
var inst_30875 = (state_30888[(9)]);
var inst_30868 = inst_30875;
var state_30888__$1 = (function (){var statearr_30900 = state_30888;
(statearr_30900[(7)] = inst_30868);

return statearr_30900;
})();
var statearr_30901_32826 = state_30888__$1;
(statearr_30901_32826[(2)] = null);

(statearr_30901_32826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (5))){
var inst_30868 = (state_30888[(7)]);
var state_30888__$1 = state_30888;
var statearr_30903_32827 = state_30888__$1;
(statearr_30903_32827[(2)] = inst_30868);

(statearr_30903_32827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (10))){
var inst_30882 = (state_30888[(2)]);
var state_30888__$1 = state_30888;
var statearr_30906_32828 = state_30888__$1;
(statearr_30906_32828[(2)] = inst_30882);

(statearr_30906_32828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (8))){
var inst_30875 = (state_30888[(9)]);
var inst_30878 = cljs.core.deref(inst_30875);
var state_30888__$1 = state_30888;
var statearr_30908_32829 = state_30888__$1;
(statearr_30908_32829[(2)] = inst_30878);

(statearr_30908_32829[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29869__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29869__auto____0 = (function (){
var statearr_30910 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30910[(0)] = cljs$core$async$reduce_$_state_machine__29869__auto__);

(statearr_30910[(1)] = (1));

return statearr_30910;
});
var cljs$core$async$reduce_$_state_machine__29869__auto____1 = (function (state_30888){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_30888);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30911){if((e30911 instanceof Object)){
var ex__29872__auto__ = e30911;
var statearr_30912_32838 = state_30888;
(statearr_30912_32838[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30911;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32839 = state_30888;
state_30888 = G__32839;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29869__auto__ = function(state_30888){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29869__auto____1.call(this,state_30888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29869__auto____0;
cljs$core$async$reduce_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29869__auto____1;
return cljs$core$async$reduce_$_state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_30919 = f__30203__auto__();
(statearr_30919[(6)] = c__30202__auto__);

return statearr_30919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
}));

return c__30202__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_30926){
var state_val_30928 = (state_30926[(1)]);
if((state_val_30928 === (1))){
var inst_30921 = cljs.core.async.reduce(f__$1,init,ch);
var state_30926__$1 = state_30926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30926__$1,(2),inst_30921);
} else {
if((state_val_30928 === (2))){
var inst_30923 = (state_30926[(2)]);
var inst_30924 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30923) : f__$1.call(null,inst_30923));
var state_30926__$1 = state_30926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30926__$1,inst_30924);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29869__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29869__auto____0 = (function (){
var statearr_30933 = [null,null,null,null,null,null,null];
(statearr_30933[(0)] = cljs$core$async$transduce_$_state_machine__29869__auto__);

(statearr_30933[(1)] = (1));

return statearr_30933;
});
var cljs$core$async$transduce_$_state_machine__29869__auto____1 = (function (state_30926){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_30926);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30934){if((e30934 instanceof Object)){
var ex__29872__auto__ = e30934;
var statearr_30935_32840 = state_30926;
(statearr_30935_32840[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30934;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32843 = state_30926;
state_30926 = G__32843;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29869__auto__ = function(state_30926){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29869__auto____1.call(this,state_30926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29869__auto____0;
cljs$core$async$transduce_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29869__auto____1;
return cljs$core$async$transduce_$_state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_30936 = f__30203__auto__();
(statearr_30936[(6)] = c__30202__auto__);

return statearr_30936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
}));

return c__30202__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30951 = arguments.length;
switch (G__30951) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_30976){
var state_val_30977 = (state_30976[(1)]);
if((state_val_30977 === (7))){
var inst_30958 = (state_30976[(2)]);
var state_30976__$1 = state_30976;
var statearr_30978_32849 = state_30976__$1;
(statearr_30978_32849[(2)] = inst_30958);

(statearr_30978_32849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (1))){
var inst_30952 = cljs.core.seq(coll);
var inst_30953 = inst_30952;
var state_30976__$1 = (function (){var statearr_30981 = state_30976;
(statearr_30981[(7)] = inst_30953);

return statearr_30981;
})();
var statearr_30982_32850 = state_30976__$1;
(statearr_30982_32850[(2)] = null);

(statearr_30982_32850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (4))){
var inst_30953 = (state_30976[(7)]);
var inst_30956 = cljs.core.first(inst_30953);
var state_30976__$1 = state_30976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30976__$1,(7),ch,inst_30956);
} else {
if((state_val_30977 === (13))){
var inst_30970 = (state_30976[(2)]);
var state_30976__$1 = state_30976;
var statearr_30985_32851 = state_30976__$1;
(statearr_30985_32851[(2)] = inst_30970);

(statearr_30985_32851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (6))){
var inst_30961 = (state_30976[(2)]);
var state_30976__$1 = state_30976;
if(cljs.core.truth_(inst_30961)){
var statearr_30986_32852 = state_30976__$1;
(statearr_30986_32852[(1)] = (8));

} else {
var statearr_30987_32853 = state_30976__$1;
(statearr_30987_32853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (3))){
var inst_30974 = (state_30976[(2)]);
var state_30976__$1 = state_30976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30976__$1,inst_30974);
} else {
if((state_val_30977 === (12))){
var state_30976__$1 = state_30976;
var statearr_30989_32854 = state_30976__$1;
(statearr_30989_32854[(2)] = null);

(statearr_30989_32854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (2))){
var inst_30953 = (state_30976[(7)]);
var state_30976__$1 = state_30976;
if(cljs.core.truth_(inst_30953)){
var statearr_30991_32858 = state_30976__$1;
(statearr_30991_32858[(1)] = (4));

} else {
var statearr_30992_32859 = state_30976__$1;
(statearr_30992_32859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (11))){
var inst_30967 = cljs.core.async.close_BANG_(ch);
var state_30976__$1 = state_30976;
var statearr_30995_32860 = state_30976__$1;
(statearr_30995_32860[(2)] = inst_30967);

(statearr_30995_32860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (9))){
var state_30976__$1 = state_30976;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30997_32861 = state_30976__$1;
(statearr_30997_32861[(1)] = (11));

} else {
var statearr_30998_32862 = state_30976__$1;
(statearr_30998_32862[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (5))){
var inst_30953 = (state_30976[(7)]);
var state_30976__$1 = state_30976;
var statearr_30999_32863 = state_30976__$1;
(statearr_30999_32863[(2)] = inst_30953);

(statearr_30999_32863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (10))){
var inst_30972 = (state_30976[(2)]);
var state_30976__$1 = state_30976;
var statearr_31000_32864 = state_30976__$1;
(statearr_31000_32864[(2)] = inst_30972);

(statearr_31000_32864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (8))){
var inst_30953 = (state_30976[(7)]);
var inst_30963 = cljs.core.next(inst_30953);
var inst_30953__$1 = inst_30963;
var state_30976__$1 = (function (){var statearr_31001 = state_30976;
(statearr_31001[(7)] = inst_30953__$1);

return statearr_31001;
})();
var statearr_31002_32865 = state_30976__$1;
(statearr_31002_32865[(2)] = null);

(statearr_31002_32865[(1)] = (2));


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
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_31007 = [null,null,null,null,null,null,null,null];
(statearr_31007[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_31007[(1)] = (1));

return statearr_31007;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_30976){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_30976);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e31008){if((e31008 instanceof Object)){
var ex__29872__auto__ = e31008;
var statearr_31011_32866 = state_30976;
(statearr_31011_32866[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32867 = state_30976;
state_30976 = G__32867;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_30976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_30976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_31014 = f__30203__auto__();
(statearr_31014[(6)] = c__30202__auto__);

return statearr_31014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
}));

return c__30202__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31062 = (function (ch,cs,meta31063){
this.ch = ch;
this.cs = cs;
this.meta31063 = meta31063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31064,meta31063__$1){
var self__ = this;
var _31064__$1 = this;
return (new cljs.core.async.t_cljs$core$async31062(self__.ch,self__.cs,meta31063__$1));
}));

(cljs.core.async.t_cljs$core$async31062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31064){
var self__ = this;
var _31064__$1 = this;
return self__.meta31063;
}));

(cljs.core.async.t_cljs$core$async31062.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31062.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31062.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31062.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31062.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31063","meta31063",-475950382,null)], null);
}));

(cljs.core.async.t_cljs$core$async31062.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31062");

(cljs.core.async.t_cljs$core$async31062.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31062");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31062.
 */
cljs.core.async.__GT_t_cljs$core$async31062 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31062(ch__$1,cs__$1,meta31063){
return (new cljs.core.async.t_cljs$core$async31062(ch__$1,cs__$1,meta31063));
});

}

return (new cljs.core.async.t_cljs$core$async31062(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30202__auto___32875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_31220){
var state_val_31221 = (state_31220[(1)]);
if((state_val_31221 === (7))){
var inst_31213 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31224_32880 = state_31220__$1;
(statearr_31224_32880[(2)] = inst_31213);

(statearr_31224_32880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (20))){
var inst_31111 = (state_31220[(7)]);
var inst_31124 = cljs.core.first(inst_31111);
var inst_31125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31124,(0),null);
var inst_31126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31124,(1),null);
var state_31220__$1 = (function (){var statearr_31225 = state_31220;
(statearr_31225[(8)] = inst_31125);

return statearr_31225;
})();
if(cljs.core.truth_(inst_31126)){
var statearr_31226_32881 = state_31220__$1;
(statearr_31226_32881[(1)] = (22));

} else {
var statearr_31229_32882 = state_31220__$1;
(statearr_31229_32882[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (27))){
var inst_31076 = (state_31220[(9)]);
var inst_31158 = (state_31220[(10)]);
var inst_31156 = (state_31220[(11)]);
var inst_31164 = (state_31220[(12)]);
var inst_31164__$1 = cljs.core._nth(inst_31156,inst_31158);
var inst_31165 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31164__$1,inst_31076,done);
var state_31220__$1 = (function (){var statearr_31231 = state_31220;
(statearr_31231[(12)] = inst_31164__$1);

return statearr_31231;
})();
if(cljs.core.truth_(inst_31165)){
var statearr_31232_32883 = state_31220__$1;
(statearr_31232_32883[(1)] = (30));

} else {
var statearr_31233_32884 = state_31220__$1;
(statearr_31233_32884[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (1))){
var state_31220__$1 = state_31220;
var statearr_31237_32885 = state_31220__$1;
(statearr_31237_32885[(2)] = null);

(statearr_31237_32885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (24))){
var inst_31111 = (state_31220[(7)]);
var inst_31131 = (state_31220[(2)]);
var inst_31132 = cljs.core.next(inst_31111);
var inst_31089 = inst_31132;
var inst_31090 = null;
var inst_31091 = (0);
var inst_31092 = (0);
var state_31220__$1 = (function (){var statearr_31277 = state_31220;
(statearr_31277[(13)] = inst_31091);

(statearr_31277[(14)] = inst_31092);

(statearr_31277[(15)] = inst_31089);

(statearr_31277[(16)] = inst_31131);

(statearr_31277[(17)] = inst_31090);

return statearr_31277;
})();
var statearr_31278_32886 = state_31220__$1;
(statearr_31278_32886[(2)] = null);

(statearr_31278_32886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (39))){
var state_31220__$1 = state_31220;
var statearr_31293_32887 = state_31220__$1;
(statearr_31293_32887[(2)] = null);

(statearr_31293_32887[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (4))){
var inst_31076 = (state_31220[(9)]);
var inst_31076__$1 = (state_31220[(2)]);
var inst_31077 = (inst_31076__$1 == null);
var state_31220__$1 = (function (){var statearr_31294 = state_31220;
(statearr_31294[(9)] = inst_31076__$1);

return statearr_31294;
})();
if(cljs.core.truth_(inst_31077)){
var statearr_31298_32888 = state_31220__$1;
(statearr_31298_32888[(1)] = (5));

} else {
var statearr_31299_32889 = state_31220__$1;
(statearr_31299_32889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (15))){
var inst_31091 = (state_31220[(13)]);
var inst_31092 = (state_31220[(14)]);
var inst_31089 = (state_31220[(15)]);
var inst_31090 = (state_31220[(17)]);
var inst_31107 = (state_31220[(2)]);
var inst_31108 = (inst_31092 + (1));
var tmp31282 = inst_31091;
var tmp31283 = inst_31089;
var tmp31284 = inst_31090;
var inst_31089__$1 = tmp31283;
var inst_31090__$1 = tmp31284;
var inst_31091__$1 = tmp31282;
var inst_31092__$1 = inst_31108;
var state_31220__$1 = (function (){var statearr_31300 = state_31220;
(statearr_31300[(13)] = inst_31091__$1);

(statearr_31300[(14)] = inst_31092__$1);

(statearr_31300[(18)] = inst_31107);

(statearr_31300[(15)] = inst_31089__$1);

(statearr_31300[(17)] = inst_31090__$1);

return statearr_31300;
})();
var statearr_31302_32890 = state_31220__$1;
(statearr_31302_32890[(2)] = null);

(statearr_31302_32890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (21))){
var inst_31135 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31306_32891 = state_31220__$1;
(statearr_31306_32891[(2)] = inst_31135);

(statearr_31306_32891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (31))){
var inst_31164 = (state_31220[(12)]);
var inst_31168 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31164);
var state_31220__$1 = state_31220;
var statearr_31307_32892 = state_31220__$1;
(statearr_31307_32892[(2)] = inst_31168);

(statearr_31307_32892[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (32))){
var inst_31157 = (state_31220[(19)]);
var inst_31158 = (state_31220[(10)]);
var inst_31155 = (state_31220[(20)]);
var inst_31156 = (state_31220[(11)]);
var inst_31170 = (state_31220[(2)]);
var inst_31171 = (inst_31158 + (1));
var tmp31303 = inst_31157;
var tmp31304 = inst_31155;
var tmp31305 = inst_31156;
var inst_31155__$1 = tmp31304;
var inst_31156__$1 = tmp31305;
var inst_31157__$1 = tmp31303;
var inst_31158__$1 = inst_31171;
var state_31220__$1 = (function (){var statearr_31308 = state_31220;
(statearr_31308[(19)] = inst_31157__$1);

(statearr_31308[(10)] = inst_31158__$1);

(statearr_31308[(20)] = inst_31155__$1);

(statearr_31308[(11)] = inst_31156__$1);

(statearr_31308[(21)] = inst_31170);

return statearr_31308;
})();
var statearr_31309_32897 = state_31220__$1;
(statearr_31309_32897[(2)] = null);

(statearr_31309_32897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (40))){
var inst_31186 = (state_31220[(22)]);
var inst_31190 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31186);
var state_31220__$1 = state_31220;
var statearr_31310_32898 = state_31220__$1;
(statearr_31310_32898[(2)] = inst_31190);

(statearr_31310_32898[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (33))){
var inst_31174 = (state_31220[(23)]);
var inst_31178 = cljs.core.chunked_seq_QMARK_(inst_31174);
var state_31220__$1 = state_31220;
if(inst_31178){
var statearr_31311_32899 = state_31220__$1;
(statearr_31311_32899[(1)] = (36));

} else {
var statearr_31312_32900 = state_31220__$1;
(statearr_31312_32900[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (13))){
var inst_31101 = (state_31220[(24)]);
var inst_31104 = cljs.core.async.close_BANG_(inst_31101);
var state_31220__$1 = state_31220;
var statearr_31313_32901 = state_31220__$1;
(statearr_31313_32901[(2)] = inst_31104);

(statearr_31313_32901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (22))){
var inst_31125 = (state_31220[(8)]);
var inst_31128 = cljs.core.async.close_BANG_(inst_31125);
var state_31220__$1 = state_31220;
var statearr_31314_32902 = state_31220__$1;
(statearr_31314_32902[(2)] = inst_31128);

(statearr_31314_32902[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (36))){
var inst_31174 = (state_31220[(23)]);
var inst_31181 = cljs.core.chunk_first(inst_31174);
var inst_31182 = cljs.core.chunk_rest(inst_31174);
var inst_31183 = cljs.core.count(inst_31181);
var inst_31155 = inst_31182;
var inst_31156 = inst_31181;
var inst_31157 = inst_31183;
var inst_31158 = (0);
var state_31220__$1 = (function (){var statearr_31315 = state_31220;
(statearr_31315[(19)] = inst_31157);

(statearr_31315[(10)] = inst_31158);

(statearr_31315[(20)] = inst_31155);

(statearr_31315[(11)] = inst_31156);

return statearr_31315;
})();
var statearr_31319_32903 = state_31220__$1;
(statearr_31319_32903[(2)] = null);

(statearr_31319_32903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (41))){
var inst_31174 = (state_31220[(23)]);
var inst_31192 = (state_31220[(2)]);
var inst_31193 = cljs.core.next(inst_31174);
var inst_31155 = inst_31193;
var inst_31156 = null;
var inst_31157 = (0);
var inst_31158 = (0);
var state_31220__$1 = (function (){var statearr_31320 = state_31220;
(statearr_31320[(19)] = inst_31157);

(statearr_31320[(25)] = inst_31192);

(statearr_31320[(10)] = inst_31158);

(statearr_31320[(20)] = inst_31155);

(statearr_31320[(11)] = inst_31156);

return statearr_31320;
})();
var statearr_31321_32904 = state_31220__$1;
(statearr_31321_32904[(2)] = null);

(statearr_31321_32904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (43))){
var state_31220__$1 = state_31220;
var statearr_31322_32905 = state_31220__$1;
(statearr_31322_32905[(2)] = null);

(statearr_31322_32905[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (29))){
var inst_31201 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31323_32906 = state_31220__$1;
(statearr_31323_32906[(2)] = inst_31201);

(statearr_31323_32906[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (44))){
var inst_31210 = (state_31220[(2)]);
var state_31220__$1 = (function (){var statearr_31324 = state_31220;
(statearr_31324[(26)] = inst_31210);

return statearr_31324;
})();
var statearr_31325_32907 = state_31220__$1;
(statearr_31325_32907[(2)] = null);

(statearr_31325_32907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (6))){
var inst_31145 = (state_31220[(27)]);
var inst_31144 = cljs.core.deref(cs);
var inst_31145__$1 = cljs.core.keys(inst_31144);
var inst_31147 = cljs.core.count(inst_31145__$1);
var inst_31148 = cljs.core.reset_BANG_(dctr,inst_31147);
var inst_31154 = cljs.core.seq(inst_31145__$1);
var inst_31155 = inst_31154;
var inst_31156 = null;
var inst_31157 = (0);
var inst_31158 = (0);
var state_31220__$1 = (function (){var statearr_31328 = state_31220;
(statearr_31328[(19)] = inst_31157);

(statearr_31328[(27)] = inst_31145__$1);

(statearr_31328[(10)] = inst_31158);

(statearr_31328[(20)] = inst_31155);

(statearr_31328[(28)] = inst_31148);

(statearr_31328[(11)] = inst_31156);

return statearr_31328;
})();
var statearr_31329_32908 = state_31220__$1;
(statearr_31329_32908[(2)] = null);

(statearr_31329_32908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (28))){
var inst_31174 = (state_31220[(23)]);
var inst_31155 = (state_31220[(20)]);
var inst_31174__$1 = cljs.core.seq(inst_31155);
var state_31220__$1 = (function (){var statearr_31330 = state_31220;
(statearr_31330[(23)] = inst_31174__$1);

return statearr_31330;
})();
if(inst_31174__$1){
var statearr_31331_32909 = state_31220__$1;
(statearr_31331_32909[(1)] = (33));

} else {
var statearr_31332_32910 = state_31220__$1;
(statearr_31332_32910[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (25))){
var inst_31157 = (state_31220[(19)]);
var inst_31158 = (state_31220[(10)]);
var inst_31161 = (inst_31158 < inst_31157);
var inst_31162 = inst_31161;
var state_31220__$1 = state_31220;
if(cljs.core.truth_(inst_31162)){
var statearr_31333_32911 = state_31220__$1;
(statearr_31333_32911[(1)] = (27));

} else {
var statearr_31334_32913 = state_31220__$1;
(statearr_31334_32913[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (34))){
var state_31220__$1 = state_31220;
var statearr_31335_32917 = state_31220__$1;
(statearr_31335_32917[(2)] = null);

(statearr_31335_32917[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (17))){
var state_31220__$1 = state_31220;
var statearr_31339_32918 = state_31220__$1;
(statearr_31339_32918[(2)] = null);

(statearr_31339_32918[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (3))){
var inst_31215 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31220__$1,inst_31215);
} else {
if((state_val_31221 === (12))){
var inst_31140 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31340_32923 = state_31220__$1;
(statearr_31340_32923[(2)] = inst_31140);

(statearr_31340_32923[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (2))){
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31220__$1,(4),ch);
} else {
if((state_val_31221 === (23))){
var state_31220__$1 = state_31220;
var statearr_31341_32924 = state_31220__$1;
(statearr_31341_32924[(2)] = null);

(statearr_31341_32924[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (35))){
var inst_31199 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31342_32925 = state_31220__$1;
(statearr_31342_32925[(2)] = inst_31199);

(statearr_31342_32925[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (19))){
var inst_31111 = (state_31220[(7)]);
var inst_31115 = cljs.core.chunk_first(inst_31111);
var inst_31116 = cljs.core.chunk_rest(inst_31111);
var inst_31117 = cljs.core.count(inst_31115);
var inst_31089 = inst_31116;
var inst_31090 = inst_31115;
var inst_31091 = inst_31117;
var inst_31092 = (0);
var state_31220__$1 = (function (){var statearr_31343 = state_31220;
(statearr_31343[(13)] = inst_31091);

(statearr_31343[(14)] = inst_31092);

(statearr_31343[(15)] = inst_31089);

(statearr_31343[(17)] = inst_31090);

return statearr_31343;
})();
var statearr_31346_32927 = state_31220__$1;
(statearr_31346_32927[(2)] = null);

(statearr_31346_32927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (11))){
var inst_31111 = (state_31220[(7)]);
var inst_31089 = (state_31220[(15)]);
var inst_31111__$1 = cljs.core.seq(inst_31089);
var state_31220__$1 = (function (){var statearr_31347 = state_31220;
(statearr_31347[(7)] = inst_31111__$1);

return statearr_31347;
})();
if(inst_31111__$1){
var statearr_31348_32929 = state_31220__$1;
(statearr_31348_32929[(1)] = (16));

} else {
var statearr_31349_32930 = state_31220__$1;
(statearr_31349_32930[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (9))){
var inst_31142 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31351_32931 = state_31220__$1;
(statearr_31351_32931[(2)] = inst_31142);

(statearr_31351_32931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (5))){
var inst_31087 = cljs.core.deref(cs);
var inst_31088 = cljs.core.seq(inst_31087);
var inst_31089 = inst_31088;
var inst_31090 = null;
var inst_31091 = (0);
var inst_31092 = (0);
var state_31220__$1 = (function (){var statearr_31356 = state_31220;
(statearr_31356[(13)] = inst_31091);

(statearr_31356[(14)] = inst_31092);

(statearr_31356[(15)] = inst_31089);

(statearr_31356[(17)] = inst_31090);

return statearr_31356;
})();
var statearr_31357_32932 = state_31220__$1;
(statearr_31357_32932[(2)] = null);

(statearr_31357_32932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (14))){
var state_31220__$1 = state_31220;
var statearr_31358_32933 = state_31220__$1;
(statearr_31358_32933[(2)] = null);

(statearr_31358_32933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (45))){
var inst_31207 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31359_32934 = state_31220__$1;
(statearr_31359_32934[(2)] = inst_31207);

(statearr_31359_32934[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (26))){
var inst_31145 = (state_31220[(27)]);
var inst_31203 = (state_31220[(2)]);
var inst_31204 = cljs.core.seq(inst_31145);
var state_31220__$1 = (function (){var statearr_31360 = state_31220;
(statearr_31360[(29)] = inst_31203);

return statearr_31360;
})();
if(inst_31204){
var statearr_31361_32935 = state_31220__$1;
(statearr_31361_32935[(1)] = (42));

} else {
var statearr_31362_32936 = state_31220__$1;
(statearr_31362_32936[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (16))){
var inst_31111 = (state_31220[(7)]);
var inst_31113 = cljs.core.chunked_seq_QMARK_(inst_31111);
var state_31220__$1 = state_31220;
if(inst_31113){
var statearr_31363_32937 = state_31220__$1;
(statearr_31363_32937[(1)] = (19));

} else {
var statearr_31364_32938 = state_31220__$1;
(statearr_31364_32938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (38))){
var inst_31196 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31365_32939 = state_31220__$1;
(statearr_31365_32939[(2)] = inst_31196);

(statearr_31365_32939[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (30))){
var state_31220__$1 = state_31220;
var statearr_31366_32940 = state_31220__$1;
(statearr_31366_32940[(2)] = null);

(statearr_31366_32940[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (10))){
var inst_31092 = (state_31220[(14)]);
var inst_31090 = (state_31220[(17)]);
var inst_31100 = cljs.core._nth(inst_31090,inst_31092);
var inst_31101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31100,(0),null);
var inst_31102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31100,(1),null);
var state_31220__$1 = (function (){var statearr_31371 = state_31220;
(statearr_31371[(24)] = inst_31101);

return statearr_31371;
})();
if(cljs.core.truth_(inst_31102)){
var statearr_31372_32941 = state_31220__$1;
(statearr_31372_32941[(1)] = (13));

} else {
var statearr_31373_32942 = state_31220__$1;
(statearr_31373_32942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (18))){
var inst_31138 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31374_32943 = state_31220__$1;
(statearr_31374_32943[(2)] = inst_31138);

(statearr_31374_32943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (42))){
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31220__$1,(45),dchan);
} else {
if((state_val_31221 === (37))){
var inst_31076 = (state_31220[(9)]);
var inst_31186 = (state_31220[(22)]);
var inst_31174 = (state_31220[(23)]);
var inst_31186__$1 = cljs.core.first(inst_31174);
var inst_31187 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31186__$1,inst_31076,done);
var state_31220__$1 = (function (){var statearr_31381 = state_31220;
(statearr_31381[(22)] = inst_31186__$1);

return statearr_31381;
})();
if(cljs.core.truth_(inst_31187)){
var statearr_31382_32944 = state_31220__$1;
(statearr_31382_32944[(1)] = (39));

} else {
var statearr_31383_32945 = state_31220__$1;
(statearr_31383_32945[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (8))){
var inst_31091 = (state_31220[(13)]);
var inst_31092 = (state_31220[(14)]);
var inst_31094 = (inst_31092 < inst_31091);
var inst_31095 = inst_31094;
var state_31220__$1 = state_31220;
if(cljs.core.truth_(inst_31095)){
var statearr_31384_32946 = state_31220__$1;
(statearr_31384_32946[(1)] = (10));

} else {
var statearr_31385_32947 = state_31220__$1;
(statearr_31385_32947[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29869__auto__ = null;
var cljs$core$async$mult_$_state_machine__29869__auto____0 = (function (){
var statearr_31386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31386[(0)] = cljs$core$async$mult_$_state_machine__29869__auto__);

(statearr_31386[(1)] = (1));

return statearr_31386;
});
var cljs$core$async$mult_$_state_machine__29869__auto____1 = (function (state_31220){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_31220);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e31387){if((e31387 instanceof Object)){
var ex__29872__auto__ = e31387;
var statearr_31388_32948 = state_31220;
(statearr_31388_32948[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31387;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32949 = state_31220;
state_31220 = G__32949;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29869__auto__ = function(state_31220){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29869__auto____1.call(this,state_31220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29869__auto____0;
cljs$core$async$mult_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29869__auto____1;
return cljs$core$async$mult_$_state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_31389 = f__30203__auto__();
(statearr_31389[(6)] = c__30202__auto___32875);

return statearr_31389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
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
var G__31391 = arguments.length;
switch (G__31391) {
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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32951 = arguments.length;
var i__4790__auto___32952 = (0);
while(true){
if((i__4790__auto___32952 < len__4789__auto___32951)){
args__4795__auto__.push((arguments[i__4790__auto___32952]));

var G__32956 = (i__4790__auto___32952 + (1));
i__4790__auto___32952 = G__32956;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31416){
var map__31417 = p__31416;
var map__31417__$1 = (((((!((map__31417 == null))))?(((((map__31417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31417):map__31417);
var opts = map__31417__$1;
var statearr_31419_32973 = state;
(statearr_31419_32973[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31420_32974 = state;
(statearr_31420_32974[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31429_32975 = state;
(statearr_31429_32975[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31412){
var G__31413 = cljs.core.first(seq31412);
var seq31412__$1 = cljs.core.next(seq31412);
var G__31414 = cljs.core.first(seq31412__$1);
var seq31412__$2 = cljs.core.next(seq31412__$1);
var G__31415 = cljs.core.first(seq31412__$2);
var seq31412__$3 = cljs.core.next(seq31412__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31413,G__31414,G__31415,seq31412__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31448 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31448 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31449){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31449 = meta31449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31450,meta31449__$1){
var self__ = this;
var _31450__$1 = this;
return (new cljs.core.async.t_cljs$core$async31448(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31449__$1));
}));

(cljs.core.async.t_cljs$core$async31448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31450){
var self__ = this;
var _31450__$1 = this;
return self__.meta31449;
}));

(cljs.core.async.t_cljs$core$async31448.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31448.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31448.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31448.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31448.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31448.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31448.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31449","meta31449",-1722878432,null)], null);
}));

(cljs.core.async.t_cljs$core$async31448.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31448");

(cljs.core.async.t_cljs$core$async31448.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31448");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31448.
 */
cljs.core.async.__GT_t_cljs$core$async31448 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31448(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31449){
return (new cljs.core.async.t_cljs$core$async31448(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31449));
});

}

return (new cljs.core.async.t_cljs$core$async31448(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30202__auto___32992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_31607){
var state_val_31608 = (state_31607[(1)]);
if((state_val_31608 === (7))){
var inst_31516 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31611_32993 = state_31607__$1;
(statearr_31611_32993[(2)] = inst_31516);

(statearr_31611_32993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (20))){
var inst_31529 = (state_31607[(7)]);
var state_31607__$1 = state_31607;
var statearr_31612_32994 = state_31607__$1;
(statearr_31612_32994[(2)] = inst_31529);

(statearr_31612_32994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (27))){
var state_31607__$1 = state_31607;
var statearr_31614_32995 = state_31607__$1;
(statearr_31614_32995[(2)] = null);

(statearr_31614_32995[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (1))){
var inst_31499 = (state_31607[(8)]);
var inst_31499__$1 = calc_state();
var inst_31502 = (inst_31499__$1 == null);
var inst_31503 = cljs.core.not(inst_31502);
var state_31607__$1 = (function (){var statearr_31615 = state_31607;
(statearr_31615[(8)] = inst_31499__$1);

return statearr_31615;
})();
if(inst_31503){
var statearr_31617_32996 = state_31607__$1;
(statearr_31617_32996[(1)] = (2));

} else {
var statearr_31618_32997 = state_31607__$1;
(statearr_31618_32997[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (24))){
var inst_31577 = (state_31607[(9)]);
var inst_31563 = (state_31607[(10)]);
var inst_31554 = (state_31607[(11)]);
var inst_31577__$1 = (inst_31554.cljs$core$IFn$_invoke$arity$1 ? inst_31554.cljs$core$IFn$_invoke$arity$1(inst_31563) : inst_31554.call(null,inst_31563));
var state_31607__$1 = (function (){var statearr_31619 = state_31607;
(statearr_31619[(9)] = inst_31577__$1);

return statearr_31619;
})();
if(cljs.core.truth_(inst_31577__$1)){
var statearr_31620_32998 = state_31607__$1;
(statearr_31620_32998[(1)] = (29));

} else {
var statearr_31622_32999 = state_31607__$1;
(statearr_31622_32999[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (4))){
var inst_31520 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
if(cljs.core.truth_(inst_31520)){
var statearr_31623_33000 = state_31607__$1;
(statearr_31623_33000[(1)] = (8));

} else {
var statearr_31624_33001 = state_31607__$1;
(statearr_31624_33001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (15))){
var inst_31548 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
if(cljs.core.truth_(inst_31548)){
var statearr_31626_33014 = state_31607__$1;
(statearr_31626_33014[(1)] = (19));

} else {
var statearr_31627_33015 = state_31607__$1;
(statearr_31627_33015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (21))){
var inst_31553 = (state_31607[(12)]);
var inst_31553__$1 = (state_31607[(2)]);
var inst_31554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31553__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31553__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31553__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31607__$1 = (function (){var statearr_31629 = state_31607;
(statearr_31629[(12)] = inst_31553__$1);

(statearr_31629[(11)] = inst_31554);

(statearr_31629[(13)] = inst_31555);

return statearr_31629;
})();
return cljs.core.async.ioc_alts_BANG_(state_31607__$1,(22),inst_31556);
} else {
if((state_val_31608 === (31))){
var inst_31585 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
if(cljs.core.truth_(inst_31585)){
var statearr_31630_33016 = state_31607__$1;
(statearr_31630_33016[(1)] = (32));

} else {
var statearr_31631_33017 = state_31607__$1;
(statearr_31631_33017[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (32))){
var inst_31562 = (state_31607[(14)]);
var state_31607__$1 = state_31607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31607__$1,(35),out,inst_31562);
} else {
if((state_val_31608 === (33))){
var inst_31553 = (state_31607[(12)]);
var inst_31529 = inst_31553;
var state_31607__$1 = (function (){var statearr_31632 = state_31607;
(statearr_31632[(7)] = inst_31529);

return statearr_31632;
})();
var statearr_31633_33024 = state_31607__$1;
(statearr_31633_33024[(2)] = null);

(statearr_31633_33024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (13))){
var inst_31529 = (state_31607[(7)]);
var inst_31537 = inst_31529.cljs$lang$protocol_mask$partition0$;
var inst_31538 = (inst_31537 & (64));
var inst_31539 = inst_31529.cljs$core$ISeq$;
var inst_31540 = (cljs.core.PROTOCOL_SENTINEL === inst_31539);
var inst_31541 = ((inst_31538) || (inst_31540));
var state_31607__$1 = state_31607;
if(cljs.core.truth_(inst_31541)){
var statearr_31634_33025 = state_31607__$1;
(statearr_31634_33025[(1)] = (16));

} else {
var statearr_31635_33026 = state_31607__$1;
(statearr_31635_33026[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (22))){
var inst_31563 = (state_31607[(10)]);
var inst_31562 = (state_31607[(14)]);
var inst_31561 = (state_31607[(2)]);
var inst_31562__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31561,(0),null);
var inst_31563__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31561,(1),null);
var inst_31564 = (inst_31562__$1 == null);
var inst_31565 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31563__$1,change);
var inst_31566 = ((inst_31564) || (inst_31565));
var state_31607__$1 = (function (){var statearr_31636 = state_31607;
(statearr_31636[(10)] = inst_31563__$1);

(statearr_31636[(14)] = inst_31562__$1);

return statearr_31636;
})();
if(cljs.core.truth_(inst_31566)){
var statearr_31637_33027 = state_31607__$1;
(statearr_31637_33027[(1)] = (23));

} else {
var statearr_31638_33028 = state_31607__$1;
(statearr_31638_33028[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (36))){
var inst_31553 = (state_31607[(12)]);
var inst_31529 = inst_31553;
var state_31607__$1 = (function (){var statearr_31639 = state_31607;
(statearr_31639[(7)] = inst_31529);

return statearr_31639;
})();
var statearr_31640_33029 = state_31607__$1;
(statearr_31640_33029[(2)] = null);

(statearr_31640_33029[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (29))){
var inst_31577 = (state_31607[(9)]);
var state_31607__$1 = state_31607;
var statearr_31642_33030 = state_31607__$1;
(statearr_31642_33030[(2)] = inst_31577);

(statearr_31642_33030[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (6))){
var state_31607__$1 = state_31607;
var statearr_31643_33031 = state_31607__$1;
(statearr_31643_33031[(2)] = false);

(statearr_31643_33031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (28))){
var inst_31573 = (state_31607[(2)]);
var inst_31574 = calc_state();
var inst_31529 = inst_31574;
var state_31607__$1 = (function (){var statearr_31645 = state_31607;
(statearr_31645[(7)] = inst_31529);

(statearr_31645[(15)] = inst_31573);

return statearr_31645;
})();
var statearr_31646_33032 = state_31607__$1;
(statearr_31646_33032[(2)] = null);

(statearr_31646_33032[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (25))){
var inst_31602 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31647_33033 = state_31607__$1;
(statearr_31647_33033[(2)] = inst_31602);

(statearr_31647_33033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (34))){
var inst_31600 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31648_33036 = state_31607__$1;
(statearr_31648_33036[(2)] = inst_31600);

(statearr_31648_33036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (17))){
var state_31607__$1 = state_31607;
var statearr_31649_33041 = state_31607__$1;
(statearr_31649_33041[(2)] = false);

(statearr_31649_33041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (3))){
var state_31607__$1 = state_31607;
var statearr_31650_33042 = state_31607__$1;
(statearr_31650_33042[(2)] = false);

(statearr_31650_33042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (12))){
var inst_31604 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31607__$1,inst_31604);
} else {
if((state_val_31608 === (2))){
var inst_31499 = (state_31607[(8)]);
var inst_31507 = inst_31499.cljs$lang$protocol_mask$partition0$;
var inst_31508 = (inst_31507 & (64));
var inst_31509 = inst_31499.cljs$core$ISeq$;
var inst_31510 = (cljs.core.PROTOCOL_SENTINEL === inst_31509);
var inst_31511 = ((inst_31508) || (inst_31510));
var state_31607__$1 = state_31607;
if(cljs.core.truth_(inst_31511)){
var statearr_31651_33046 = state_31607__$1;
(statearr_31651_33046[(1)] = (5));

} else {
var statearr_31652_33047 = state_31607__$1;
(statearr_31652_33047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (23))){
var inst_31562 = (state_31607[(14)]);
var inst_31568 = (inst_31562 == null);
var state_31607__$1 = state_31607;
if(cljs.core.truth_(inst_31568)){
var statearr_31653_33048 = state_31607__$1;
(statearr_31653_33048[(1)] = (26));

} else {
var statearr_31654_33049 = state_31607__$1;
(statearr_31654_33049[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (35))){
var inst_31588 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
if(cljs.core.truth_(inst_31588)){
var statearr_31655_33050 = state_31607__$1;
(statearr_31655_33050[(1)] = (36));

} else {
var statearr_31656_33051 = state_31607__$1;
(statearr_31656_33051[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (19))){
var inst_31529 = (state_31607[(7)]);
var inst_31550 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31529);
var state_31607__$1 = state_31607;
var statearr_31657_33052 = state_31607__$1;
(statearr_31657_33052[(2)] = inst_31550);

(statearr_31657_33052[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (11))){
var inst_31529 = (state_31607[(7)]);
var inst_31533 = (inst_31529 == null);
var inst_31534 = cljs.core.not(inst_31533);
var state_31607__$1 = state_31607;
if(inst_31534){
var statearr_31658_33053 = state_31607__$1;
(statearr_31658_33053[(1)] = (13));

} else {
var statearr_31659_33055 = state_31607__$1;
(statearr_31659_33055[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (9))){
var inst_31499 = (state_31607[(8)]);
var state_31607__$1 = state_31607;
var statearr_31660_33057 = state_31607__$1;
(statearr_31660_33057[(2)] = inst_31499);

(statearr_31660_33057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (5))){
var state_31607__$1 = state_31607;
var statearr_31661_33058 = state_31607__$1;
(statearr_31661_33058[(2)] = true);

(statearr_31661_33058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (14))){
var state_31607__$1 = state_31607;
var statearr_31662_33059 = state_31607__$1;
(statearr_31662_33059[(2)] = false);

(statearr_31662_33059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (26))){
var inst_31563 = (state_31607[(10)]);
var inst_31570 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31563);
var state_31607__$1 = state_31607;
var statearr_31663_33060 = state_31607__$1;
(statearr_31663_33060[(2)] = inst_31570);

(statearr_31663_33060[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (16))){
var state_31607__$1 = state_31607;
var statearr_31664_33061 = state_31607__$1;
(statearr_31664_33061[(2)] = true);

(statearr_31664_33061[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (38))){
var inst_31596 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31665_33062 = state_31607__$1;
(statearr_31665_33062[(2)] = inst_31596);

(statearr_31665_33062[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (30))){
var inst_31563 = (state_31607[(10)]);
var inst_31554 = (state_31607[(11)]);
var inst_31555 = (state_31607[(13)]);
var inst_31580 = cljs.core.empty_QMARK_(inst_31554);
var inst_31581 = (inst_31555.cljs$core$IFn$_invoke$arity$1 ? inst_31555.cljs$core$IFn$_invoke$arity$1(inst_31563) : inst_31555.call(null,inst_31563));
var inst_31582 = cljs.core.not(inst_31581);
var inst_31583 = ((inst_31580) && (inst_31582));
var state_31607__$1 = state_31607;
var statearr_31666_33063 = state_31607__$1;
(statearr_31666_33063[(2)] = inst_31583);

(statearr_31666_33063[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (10))){
var inst_31499 = (state_31607[(8)]);
var inst_31525 = (state_31607[(2)]);
var inst_31526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31525,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31525,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31525,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31529 = inst_31499;
var state_31607__$1 = (function (){var statearr_31667 = state_31607;
(statearr_31667[(16)] = inst_31528);

(statearr_31667[(17)] = inst_31527);

(statearr_31667[(7)] = inst_31529);

(statearr_31667[(18)] = inst_31526);

return statearr_31667;
})();
var statearr_31668_33064 = state_31607__$1;
(statearr_31668_33064[(2)] = null);

(statearr_31668_33064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (18))){
var inst_31545 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31669_33071 = state_31607__$1;
(statearr_31669_33071[(2)] = inst_31545);

(statearr_31669_33071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (37))){
var state_31607__$1 = state_31607;
var statearr_31670_33072 = state_31607__$1;
(statearr_31670_33072[(2)] = null);

(statearr_31670_33072[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (8))){
var inst_31499 = (state_31607[(8)]);
var inst_31522 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31499);
var state_31607__$1 = state_31607;
var statearr_31672_33073 = state_31607__$1;
(statearr_31672_33073[(2)] = inst_31522);

(statearr_31672_33073[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__29869__auto__ = null;
var cljs$core$async$mix_$_state_machine__29869__auto____0 = (function (){
var statearr_31673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31673[(0)] = cljs$core$async$mix_$_state_machine__29869__auto__);

(statearr_31673[(1)] = (1));

return statearr_31673;
});
var cljs$core$async$mix_$_state_machine__29869__auto____1 = (function (state_31607){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_31607);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e31674){if((e31674 instanceof Object)){
var ex__29872__auto__ = e31674;
var statearr_31675_33074 = state_31607;
(statearr_31675_33074[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31674;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33076 = state_31607;
state_31607 = G__33076;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29869__auto__ = function(state_31607){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29869__auto____1.call(this,state_31607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29869__auto____0;
cljs$core$async$mix_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29869__auto____1;
return cljs$core$async$mix_$_state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_31677 = f__30203__auto__();
(statearr_31677[(6)] = c__30202__auto___32992);

return statearr_31677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31679 = arguments.length;
switch (G__31679) {
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
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
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
var G__31682 = arguments.length;
switch (G__31682) {
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
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31680_SHARP_){
if(cljs.core.truth_((p1__31680_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31680_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31680_SHARP_.call(null,topic)))){
return p1__31680_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31680_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31685 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31685 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31686){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31686 = meta31686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31687,meta31686__$1){
var self__ = this;
var _31687__$1 = this;
return (new cljs.core.async.t_cljs$core$async31685(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31686__$1));
}));

(cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31687){
var self__ = this;
var _31687__$1 = this;
return self__.meta31686;
}));

(cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31686","meta31686",-1666551992,null)], null);
}));

(cljs.core.async.t_cljs$core$async31685.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31685");

(cljs.core.async.t_cljs$core$async31685.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31685");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31685.
 */
cljs.core.async.__GT_t_cljs$core$async31685 = (function cljs$core$async$__GT_t_cljs$core$async31685(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31686){
return (new cljs.core.async.t_cljs$core$async31685(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31686));
});

}

return (new cljs.core.async.t_cljs$core$async31685(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30202__auto___33091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_31784){
var state_val_31785 = (state_31784[(1)]);
if((state_val_31785 === (7))){
var inst_31778 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31795_33092 = state_31784__$1;
(statearr_31795_33092[(2)] = inst_31778);

(statearr_31795_33092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (20))){
var state_31784__$1 = state_31784;
var statearr_31796_33093 = state_31784__$1;
(statearr_31796_33093[(2)] = null);

(statearr_31796_33093[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (1))){
var state_31784__$1 = state_31784;
var statearr_31797_33095 = state_31784__$1;
(statearr_31797_33095[(2)] = null);

(statearr_31797_33095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (24))){
var inst_31757 = (state_31784[(7)]);
var inst_31770 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31757);
var state_31784__$1 = state_31784;
var statearr_31802_33096 = state_31784__$1;
(statearr_31802_33096[(2)] = inst_31770);

(statearr_31802_33096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (4))){
var inst_31707 = (state_31784[(8)]);
var inst_31707__$1 = (state_31784[(2)]);
var inst_31708 = (inst_31707__$1 == null);
var state_31784__$1 = (function (){var statearr_31803 = state_31784;
(statearr_31803[(8)] = inst_31707__$1);

return statearr_31803;
})();
if(cljs.core.truth_(inst_31708)){
var statearr_31804_33098 = state_31784__$1;
(statearr_31804_33098[(1)] = (5));

} else {
var statearr_31805_33099 = state_31784__$1;
(statearr_31805_33099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (15))){
var inst_31751 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31806_33101 = state_31784__$1;
(statearr_31806_33101[(2)] = inst_31751);

(statearr_31806_33101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (21))){
var inst_31775 = (state_31784[(2)]);
var state_31784__$1 = (function (){var statearr_31810 = state_31784;
(statearr_31810[(9)] = inst_31775);

return statearr_31810;
})();
var statearr_31811_33102 = state_31784__$1;
(statearr_31811_33102[(2)] = null);

(statearr_31811_33102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (13))){
var inst_31733 = (state_31784[(10)]);
var inst_31735 = cljs.core.chunked_seq_QMARK_(inst_31733);
var state_31784__$1 = state_31784;
if(inst_31735){
var statearr_31812_33104 = state_31784__$1;
(statearr_31812_33104[(1)] = (16));

} else {
var statearr_31813_33105 = state_31784__$1;
(statearr_31813_33105[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (22))){
var inst_31767 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
if(cljs.core.truth_(inst_31767)){
var statearr_31814_33110 = state_31784__$1;
(statearr_31814_33110[(1)] = (23));

} else {
var statearr_31815_33111 = state_31784__$1;
(statearr_31815_33111[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (6))){
var inst_31707 = (state_31784[(8)]);
var inst_31759 = (state_31784[(11)]);
var inst_31757 = (state_31784[(7)]);
var inst_31757__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31707) : topic_fn.call(null,inst_31707));
var inst_31758 = cljs.core.deref(mults);
var inst_31759__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31758,inst_31757__$1);
var state_31784__$1 = (function (){var statearr_31816 = state_31784;
(statearr_31816[(11)] = inst_31759__$1);

(statearr_31816[(7)] = inst_31757__$1);

return statearr_31816;
})();
if(cljs.core.truth_(inst_31759__$1)){
var statearr_31817_33117 = state_31784__$1;
(statearr_31817_33117[(1)] = (19));

} else {
var statearr_31818_33122 = state_31784__$1;
(statearr_31818_33122[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (25))){
var inst_31772 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31819_33123 = state_31784__$1;
(statearr_31819_33123[(2)] = inst_31772);

(statearr_31819_33123[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (17))){
var inst_31733 = (state_31784[(10)]);
var inst_31742 = cljs.core.first(inst_31733);
var inst_31743 = cljs.core.async.muxch_STAR_(inst_31742);
var inst_31744 = cljs.core.async.close_BANG_(inst_31743);
var inst_31745 = cljs.core.next(inst_31733);
var inst_31719 = inst_31745;
var inst_31720 = null;
var inst_31721 = (0);
var inst_31722 = (0);
var state_31784__$1 = (function (){var statearr_31820 = state_31784;
(statearr_31820[(12)] = inst_31720);

(statearr_31820[(13)] = inst_31722);

(statearr_31820[(14)] = inst_31721);

(statearr_31820[(15)] = inst_31744);

(statearr_31820[(16)] = inst_31719);

return statearr_31820;
})();
var statearr_31821_33128 = state_31784__$1;
(statearr_31821_33128[(2)] = null);

(statearr_31821_33128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (3))){
var inst_31780 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31784__$1,inst_31780);
} else {
if((state_val_31785 === (12))){
var inst_31753 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31822_33133 = state_31784__$1;
(statearr_31822_33133[(2)] = inst_31753);

(statearr_31822_33133[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (2))){
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31784__$1,(4),ch);
} else {
if((state_val_31785 === (23))){
var state_31784__$1 = state_31784;
var statearr_31823_33138 = state_31784__$1;
(statearr_31823_33138[(2)] = null);

(statearr_31823_33138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (19))){
var inst_31707 = (state_31784[(8)]);
var inst_31759 = (state_31784[(11)]);
var inst_31765 = cljs.core.async.muxch_STAR_(inst_31759);
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31784__$1,(22),inst_31765,inst_31707);
} else {
if((state_val_31785 === (11))){
var inst_31733 = (state_31784[(10)]);
var inst_31719 = (state_31784[(16)]);
var inst_31733__$1 = cljs.core.seq(inst_31719);
var state_31784__$1 = (function (){var statearr_31824 = state_31784;
(statearr_31824[(10)] = inst_31733__$1);

return statearr_31824;
})();
if(inst_31733__$1){
var statearr_31825_33159 = state_31784__$1;
(statearr_31825_33159[(1)] = (13));

} else {
var statearr_31826_33160 = state_31784__$1;
(statearr_31826_33160[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (9))){
var inst_31755 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31827_33161 = state_31784__$1;
(statearr_31827_33161[(2)] = inst_31755);

(statearr_31827_33161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (5))){
var inst_31715 = cljs.core.deref(mults);
var inst_31716 = cljs.core.vals(inst_31715);
var inst_31717 = cljs.core.seq(inst_31716);
var inst_31719 = inst_31717;
var inst_31720 = null;
var inst_31721 = (0);
var inst_31722 = (0);
var state_31784__$1 = (function (){var statearr_31828 = state_31784;
(statearr_31828[(12)] = inst_31720);

(statearr_31828[(13)] = inst_31722);

(statearr_31828[(14)] = inst_31721);

(statearr_31828[(16)] = inst_31719);

return statearr_31828;
})();
var statearr_31829_33163 = state_31784__$1;
(statearr_31829_33163[(2)] = null);

(statearr_31829_33163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (14))){
var state_31784__$1 = state_31784;
var statearr_31833_33164 = state_31784__$1;
(statearr_31833_33164[(2)] = null);

(statearr_31833_33164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (16))){
var inst_31733 = (state_31784[(10)]);
var inst_31737 = cljs.core.chunk_first(inst_31733);
var inst_31738 = cljs.core.chunk_rest(inst_31733);
var inst_31739 = cljs.core.count(inst_31737);
var inst_31719 = inst_31738;
var inst_31720 = inst_31737;
var inst_31721 = inst_31739;
var inst_31722 = (0);
var state_31784__$1 = (function (){var statearr_31834 = state_31784;
(statearr_31834[(12)] = inst_31720);

(statearr_31834[(13)] = inst_31722);

(statearr_31834[(14)] = inst_31721);

(statearr_31834[(16)] = inst_31719);

return statearr_31834;
})();
var statearr_31835_33165 = state_31784__$1;
(statearr_31835_33165[(2)] = null);

(statearr_31835_33165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (10))){
var inst_31720 = (state_31784[(12)]);
var inst_31722 = (state_31784[(13)]);
var inst_31721 = (state_31784[(14)]);
var inst_31719 = (state_31784[(16)]);
var inst_31727 = cljs.core._nth(inst_31720,inst_31722);
var inst_31728 = cljs.core.async.muxch_STAR_(inst_31727);
var inst_31729 = cljs.core.async.close_BANG_(inst_31728);
var inst_31730 = (inst_31722 + (1));
var tmp31830 = inst_31720;
var tmp31831 = inst_31721;
var tmp31832 = inst_31719;
var inst_31719__$1 = tmp31832;
var inst_31720__$1 = tmp31830;
var inst_31721__$1 = tmp31831;
var inst_31722__$1 = inst_31730;
var state_31784__$1 = (function (){var statearr_31859 = state_31784;
(statearr_31859[(12)] = inst_31720__$1);

(statearr_31859[(13)] = inst_31722__$1);

(statearr_31859[(14)] = inst_31721__$1);

(statearr_31859[(17)] = inst_31729);

(statearr_31859[(16)] = inst_31719__$1);

return statearr_31859;
})();
var statearr_31861_33166 = state_31784__$1;
(statearr_31861_33166[(2)] = null);

(statearr_31861_33166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (18))){
var inst_31748 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31864_33167 = state_31784__$1;
(statearr_31864_33167[(2)] = inst_31748);

(statearr_31864_33167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (8))){
var inst_31722 = (state_31784[(13)]);
var inst_31721 = (state_31784[(14)]);
var inst_31724 = (inst_31722 < inst_31721);
var inst_31725 = inst_31724;
var state_31784__$1 = state_31784;
if(cljs.core.truth_(inst_31725)){
var statearr_31865_33168 = state_31784__$1;
(statearr_31865_33168[(1)] = (10));

} else {
var statearr_31866_33169 = state_31784__$1;
(statearr_31866_33169[(1)] = (11));

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
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_31870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31870[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_31870[(1)] = (1));

return statearr_31870;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_31784){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_31784);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e31871){if((e31871 instanceof Object)){
var ex__29872__auto__ = e31871;
var statearr_31873_33170 = state_31784;
(statearr_31873_33170[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31871;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33171 = state_31784;
state_31784 = G__33171;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_31784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_31784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_31876 = f__30203__auto__();
(statearr_31876[(6)] = c__30202__auto___33091);

return statearr_31876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
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
var G__31881 = arguments.length;
switch (G__31881) {
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
var G__31895 = arguments.length;
switch (G__31895) {
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
var G__31908 = arguments.length;
switch (G__31908) {
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
var c__30202__auto___33177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_31986){
var state_val_31988 = (state_31986[(1)]);
if((state_val_31988 === (7))){
var state_31986__$1 = state_31986;
var statearr_31989_33178 = state_31986__$1;
(statearr_31989_33178[(2)] = null);

(statearr_31989_33178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (1))){
var state_31986__$1 = state_31986;
var statearr_31990_33179 = state_31986__$1;
(statearr_31990_33179[(2)] = null);

(statearr_31990_33179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (4))){
var inst_31926 = (state_31986[(7)]);
var inst_31928 = (inst_31926 < cnt);
var state_31986__$1 = state_31986;
if(cljs.core.truth_(inst_31928)){
var statearr_31993_33180 = state_31986__$1;
(statearr_31993_33180[(1)] = (6));

} else {
var statearr_31994_33181 = state_31986__$1;
(statearr_31994_33181[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (15))){
var inst_31976 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
var statearr_31995_33182 = state_31986__$1;
(statearr_31995_33182[(2)] = inst_31976);

(statearr_31995_33182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (13))){
var inst_31969 = cljs.core.async.close_BANG_(out);
var state_31986__$1 = state_31986;
var statearr_31996_33183 = state_31986__$1;
(statearr_31996_33183[(2)] = inst_31969);

(statearr_31996_33183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (6))){
var state_31986__$1 = state_31986;
var statearr_31997_33184 = state_31986__$1;
(statearr_31997_33184[(2)] = null);

(statearr_31997_33184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (3))){
var inst_31982 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31986__$1,inst_31982);
} else {
if((state_val_31988 === (12))){
var inst_31966 = (state_31986[(8)]);
var inst_31966__$1 = (state_31986[(2)]);
var inst_31967 = cljs.core.some(cljs.core.nil_QMARK_,inst_31966__$1);
var state_31986__$1 = (function (){var statearr_32012 = state_31986;
(statearr_32012[(8)] = inst_31966__$1);

return statearr_32012;
})();
if(cljs.core.truth_(inst_31967)){
var statearr_32013_33185 = state_31986__$1;
(statearr_32013_33185[(1)] = (13));

} else {
var statearr_32014_33186 = state_31986__$1;
(statearr_32014_33186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (2))){
var inst_31925 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31926 = (0);
var state_31986__$1 = (function (){var statearr_32019 = state_31986;
(statearr_32019[(7)] = inst_31926);

(statearr_32019[(9)] = inst_31925);

return statearr_32019;
})();
var statearr_32020_33192 = state_31986__$1;
(statearr_32020_33192[(2)] = null);

(statearr_32020_33192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (11))){
var inst_31926 = (state_31986[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31986,(10),Object,null,(9));
var inst_31953 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31926) : chs__$1.call(null,inst_31926));
var inst_31954 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31926) : done.call(null,inst_31926));
var inst_31955 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31953,inst_31954);
var state_31986__$1 = state_31986;
var statearr_32023_33203 = state_31986__$1;
(statearr_32023_33203[(2)] = inst_31955);


cljs.core.async.impl.ioc_helpers.process_exception(state_31986__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (9))){
var inst_31926 = (state_31986[(7)]);
var inst_31957 = (state_31986[(2)]);
var inst_31958 = (inst_31926 + (1));
var inst_31926__$1 = inst_31958;
var state_31986__$1 = (function (){var statearr_32024 = state_31986;
(statearr_32024[(7)] = inst_31926__$1);

(statearr_32024[(10)] = inst_31957);

return statearr_32024;
})();
var statearr_32029_33215 = state_31986__$1;
(statearr_32029_33215[(2)] = null);

(statearr_32029_33215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (5))){
var inst_31964 = (state_31986[(2)]);
var state_31986__$1 = (function (){var statearr_32030 = state_31986;
(statearr_32030[(11)] = inst_31964);

return statearr_32030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31986__$1,(12),dchan);
} else {
if((state_val_31988 === (14))){
var inst_31966 = (state_31986[(8)]);
var inst_31971 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31966);
var state_31986__$1 = state_31986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31986__$1,(16),out,inst_31971);
} else {
if((state_val_31988 === (16))){
var inst_31973 = (state_31986[(2)]);
var state_31986__$1 = (function (){var statearr_32034 = state_31986;
(statearr_32034[(12)] = inst_31973);

return statearr_32034;
})();
var statearr_32038_33232 = state_31986__$1;
(statearr_32038_33232[(2)] = null);

(statearr_32038_33232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (10))){
var inst_31930 = (state_31986[(2)]);
var inst_31931 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31986__$1 = (function (){var statearr_32041 = state_31986;
(statearr_32041[(13)] = inst_31930);

return statearr_32041;
})();
var statearr_32043_33243 = state_31986__$1;
(statearr_32043_33243[(2)] = inst_31931);


cljs.core.async.impl.ioc_helpers.process_exception(state_31986__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (8))){
var inst_31962 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
var statearr_32044_33245 = state_31986__$1;
(statearr_32044_33245[(2)] = inst_31962);

(statearr_32044_33245[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_32052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32052[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_32052[(1)] = (1));

return statearr_32052;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_31986){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_31986);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32053){if((e32053 instanceof Object)){
var ex__29872__auto__ = e32053;
var statearr_32054_33274 = state_31986;
(statearr_32054_33274[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32053;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33275 = state_31986;
state_31986 = G__33275;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_31986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_31986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_32062 = f__30203__auto__();
(statearr_32062[(6)] = c__30202__auto___33177);

return statearr_32062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
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
var G__32065 = arguments.length;
switch (G__32065) {
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
var c__30202__auto___33277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_32108){
var state_val_32109 = (state_32108[(1)]);
if((state_val_32109 === (7))){
var inst_32082 = (state_32108[(7)]);
var inst_32083 = (state_32108[(8)]);
var inst_32082__$1 = (state_32108[(2)]);
var inst_32083__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32082__$1,(0),null);
var inst_32084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32082__$1,(1),null);
var inst_32085 = (inst_32083__$1 == null);
var state_32108__$1 = (function (){var statearr_32114 = state_32108;
(statearr_32114[(7)] = inst_32082__$1);

(statearr_32114[(9)] = inst_32084);

(statearr_32114[(8)] = inst_32083__$1);

return statearr_32114;
})();
if(cljs.core.truth_(inst_32085)){
var statearr_32117_33278 = state_32108__$1;
(statearr_32117_33278[(1)] = (8));

} else {
var statearr_32118_33279 = state_32108__$1;
(statearr_32118_33279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (1))){
var inst_32072 = cljs.core.vec(chs);
var inst_32073 = inst_32072;
var state_32108__$1 = (function (){var statearr_32119 = state_32108;
(statearr_32119[(10)] = inst_32073);

return statearr_32119;
})();
var statearr_32120_33280 = state_32108__$1;
(statearr_32120_33280[(2)] = null);

(statearr_32120_33280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (4))){
var inst_32073 = (state_32108[(10)]);
var state_32108__$1 = state_32108;
return cljs.core.async.ioc_alts_BANG_(state_32108__$1,(7),inst_32073);
} else {
if((state_val_32109 === (6))){
var inst_32102 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
var statearr_32133_33281 = state_32108__$1;
(statearr_32133_33281[(2)] = inst_32102);

(statearr_32133_33281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (3))){
var inst_32104 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32108__$1,inst_32104);
} else {
if((state_val_32109 === (2))){
var inst_32073 = (state_32108[(10)]);
var inst_32075 = cljs.core.count(inst_32073);
var inst_32076 = (inst_32075 > (0));
var state_32108__$1 = state_32108;
if(cljs.core.truth_(inst_32076)){
var statearr_32135_33282 = state_32108__$1;
(statearr_32135_33282[(1)] = (4));

} else {
var statearr_32136_33283 = state_32108__$1;
(statearr_32136_33283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (11))){
var inst_32073 = (state_32108[(10)]);
var inst_32094 = (state_32108[(2)]);
var tmp32134 = inst_32073;
var inst_32073__$1 = tmp32134;
var state_32108__$1 = (function (){var statearr_32137 = state_32108;
(statearr_32137[(11)] = inst_32094);

(statearr_32137[(10)] = inst_32073__$1);

return statearr_32137;
})();
var statearr_32138_33298 = state_32108__$1;
(statearr_32138_33298[(2)] = null);

(statearr_32138_33298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (9))){
var inst_32083 = (state_32108[(8)]);
var state_32108__$1 = state_32108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32108__$1,(11),out,inst_32083);
} else {
if((state_val_32109 === (5))){
var inst_32100 = cljs.core.async.close_BANG_(out);
var state_32108__$1 = state_32108;
var statearr_32139_33299 = state_32108__$1;
(statearr_32139_33299[(2)] = inst_32100);

(statearr_32139_33299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (10))){
var inst_32097 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
var statearr_32140_33301 = state_32108__$1;
(statearr_32140_33301[(2)] = inst_32097);

(statearr_32140_33301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (8))){
var inst_32082 = (state_32108[(7)]);
var inst_32084 = (state_32108[(9)]);
var inst_32073 = (state_32108[(10)]);
var inst_32083 = (state_32108[(8)]);
var inst_32088 = (function (){var cs = inst_32073;
var vec__32078 = inst_32082;
var v = inst_32083;
var c = inst_32084;
return (function (p1__32063_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32063_SHARP_);
});
})();
var inst_32089 = cljs.core.filterv(inst_32088,inst_32073);
var inst_32073__$1 = inst_32089;
var state_32108__$1 = (function (){var statearr_32142 = state_32108;
(statearr_32142[(10)] = inst_32073__$1);

return statearr_32142;
})();
var statearr_32143_33302 = state_32108__$1;
(statearr_32143_33302[(2)] = null);

(statearr_32143_33302[(1)] = (2));


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
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_32144 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32144[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_32144[(1)] = (1));

return statearr_32144;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_32108){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_32108);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32145){if((e32145 instanceof Object)){
var ex__29872__auto__ = e32145;
var statearr_32147_33303 = state_32108;
(statearr_32147_33303[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33304 = state_32108;
state_32108 = G__33304;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_32108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_32108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_32148 = f__30203__auto__();
(statearr_32148[(6)] = c__30202__auto___33277);

return statearr_32148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
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
var G__32162 = arguments.length;
switch (G__32162) {
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
var c__30202__auto___33306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_32186){
var state_val_32187 = (state_32186[(1)]);
if((state_val_32187 === (7))){
var inst_32168 = (state_32186[(7)]);
var inst_32168__$1 = (state_32186[(2)]);
var inst_32169 = (inst_32168__$1 == null);
var inst_32170 = cljs.core.not(inst_32169);
var state_32186__$1 = (function (){var statearr_32188 = state_32186;
(statearr_32188[(7)] = inst_32168__$1);

return statearr_32188;
})();
if(inst_32170){
var statearr_32189_33310 = state_32186__$1;
(statearr_32189_33310[(1)] = (8));

} else {
var statearr_32190_33311 = state_32186__$1;
(statearr_32190_33311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (1))){
var inst_32163 = (0);
var state_32186__$1 = (function (){var statearr_32191 = state_32186;
(statearr_32191[(8)] = inst_32163);

return statearr_32191;
})();
var statearr_32192_33359 = state_32186__$1;
(statearr_32192_33359[(2)] = null);

(statearr_32192_33359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (4))){
var state_32186__$1 = state_32186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32186__$1,(7),ch);
} else {
if((state_val_32187 === (6))){
var inst_32181 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
var statearr_32193_33364 = state_32186__$1;
(statearr_32193_33364[(2)] = inst_32181);

(statearr_32193_33364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (3))){
var inst_32183 = (state_32186[(2)]);
var inst_32184 = cljs.core.async.close_BANG_(out);
var state_32186__$1 = (function (){var statearr_32194 = state_32186;
(statearr_32194[(9)] = inst_32183);

return statearr_32194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32186__$1,inst_32184);
} else {
if((state_val_32187 === (2))){
var inst_32163 = (state_32186[(8)]);
var inst_32165 = (inst_32163 < n);
var state_32186__$1 = state_32186;
if(cljs.core.truth_(inst_32165)){
var statearr_32195_33373 = state_32186__$1;
(statearr_32195_33373[(1)] = (4));

} else {
var statearr_32196_33374 = state_32186__$1;
(statearr_32196_33374[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (11))){
var inst_32163 = (state_32186[(8)]);
var inst_32173 = (state_32186[(2)]);
var inst_32174 = (inst_32163 + (1));
var inst_32163__$1 = inst_32174;
var state_32186__$1 = (function (){var statearr_32197 = state_32186;
(statearr_32197[(10)] = inst_32173);

(statearr_32197[(8)] = inst_32163__$1);

return statearr_32197;
})();
var statearr_32198_33375 = state_32186__$1;
(statearr_32198_33375[(2)] = null);

(statearr_32198_33375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (9))){
var state_32186__$1 = state_32186;
var statearr_32199_33377 = state_32186__$1;
(statearr_32199_33377[(2)] = null);

(statearr_32199_33377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (5))){
var state_32186__$1 = state_32186;
var statearr_32200_33378 = state_32186__$1;
(statearr_32200_33378[(2)] = null);

(statearr_32200_33378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (10))){
var inst_32178 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
var statearr_32201_33379 = state_32186__$1;
(statearr_32201_33379[(2)] = inst_32178);

(statearr_32201_33379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (8))){
var inst_32168 = (state_32186[(7)]);
var state_32186__$1 = state_32186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32186__$1,(11),out,inst_32168);
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
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_32202 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32202[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_32202[(1)] = (1));

return statearr_32202;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_32186){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_32186);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32203){if((e32203 instanceof Object)){
var ex__29872__auto__ = e32203;
var statearr_32204_33380 = state_32186;
(statearr_32204_33380[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32203;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33381 = state_32186;
state_32186 = G__33381;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_32186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_32186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_32205 = f__30203__auto__();
(statearr_32205[(6)] = c__30202__auto___33306);

return statearr_32205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32207 = (function (f,ch,meta32208){
this.f = f;
this.ch = ch;
this.meta32208 = meta32208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32209,meta32208__$1){
var self__ = this;
var _32209__$1 = this;
return (new cljs.core.async.t_cljs$core$async32207(self__.f,self__.ch,meta32208__$1));
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32209){
var self__ = this;
var _32209__$1 = this;
return self__.meta32208;
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32210 = (function (f,ch,meta32208,_,fn1,meta32211){
this.f = f;
this.ch = ch;
this.meta32208 = meta32208;
this._ = _;
this.fn1 = fn1;
this.meta32211 = meta32211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32212,meta32211__$1){
var self__ = this;
var _32212__$1 = this;
return (new cljs.core.async.t_cljs$core$async32210(self__.f,self__.ch,self__.meta32208,self__._,self__.fn1,meta32211__$1));
}));

(cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32212){
var self__ = this;
var _32212__$1 = this;
return self__.meta32211;
}));

(cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32206_SHARP_){
var G__32213 = (((p1__32206_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32206_SHARP_) : self__.f.call(null,p1__32206_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32213) : f1.call(null,G__32213));
});
}));

(cljs.core.async.t_cljs$core$async32210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32208","meta32208",1044250196,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32207","cljs.core.async/t_cljs$core$async32207",-779501745,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32211","meta32211",155230932,null)], null);
}));

(cljs.core.async.t_cljs$core$async32210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32210");

(cljs.core.async.t_cljs$core$async32210.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32210.
 */
cljs.core.async.__GT_t_cljs$core$async32210 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32210(f__$1,ch__$1,meta32208__$1,___$2,fn1__$1,meta32211){
return (new cljs.core.async.t_cljs$core$async32210(f__$1,ch__$1,meta32208__$1,___$2,fn1__$1,meta32211));
});

}

return (new cljs.core.async.t_cljs$core$async32210(self__.f,self__.ch,self__.meta32208,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32214 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32214) : self__.f.call(null,G__32214));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32208","meta32208",1044250196,null)], null);
}));

(cljs.core.async.t_cljs$core$async32207.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32207");

(cljs.core.async.t_cljs$core$async32207.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32207");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32207.
 */
cljs.core.async.__GT_t_cljs$core$async32207 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32207(f__$1,ch__$1,meta32208){
return (new cljs.core.async.t_cljs$core$async32207(f__$1,ch__$1,meta32208));
});

}

return (new cljs.core.async.t_cljs$core$async32207(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32215 = (function (f,ch,meta32216){
this.f = f;
this.ch = ch;
this.meta32216 = meta32216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32217,meta32216__$1){
var self__ = this;
var _32217__$1 = this;
return (new cljs.core.async.t_cljs$core$async32215(self__.f,self__.ch,meta32216__$1));
}));

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32217){
var self__ = this;
var _32217__$1 = this;
return self__.meta32216;
}));

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32216","meta32216",-1757355173,null)], null);
}));

(cljs.core.async.t_cljs$core$async32215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32215");

(cljs.core.async.t_cljs$core$async32215.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32215.
 */
cljs.core.async.__GT_t_cljs$core$async32215 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32215(f__$1,ch__$1,meta32216){
return (new cljs.core.async.t_cljs$core$async32215(f__$1,ch__$1,meta32216));
});

}

return (new cljs.core.async.t_cljs$core$async32215(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32218 = (function (p,ch,meta32219){
this.p = p;
this.ch = ch;
this.meta32219 = meta32219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32220,meta32219__$1){
var self__ = this;
var _32220__$1 = this;
return (new cljs.core.async.t_cljs$core$async32218(self__.p,self__.ch,meta32219__$1));
}));

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32220){
var self__ = this;
var _32220__$1 = this;
return self__.meta32219;
}));

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32219","meta32219",1660488683,null)], null);
}));

(cljs.core.async.t_cljs$core$async32218.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32218");

(cljs.core.async.t_cljs$core$async32218.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32218");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32218.
 */
cljs.core.async.__GT_t_cljs$core$async32218 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32218(p__$1,ch__$1,meta32219){
return (new cljs.core.async.t_cljs$core$async32218(p__$1,ch__$1,meta32219));
});

}

return (new cljs.core.async.t_cljs$core$async32218(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32222 = arguments.length;
switch (G__32222) {
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
var c__30202__auto___33439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_32243){
var state_val_32244 = (state_32243[(1)]);
if((state_val_32244 === (7))){
var inst_32239 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
var statearr_32245_33440 = state_32243__$1;
(statearr_32245_33440[(2)] = inst_32239);

(statearr_32245_33440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (1))){
var state_32243__$1 = state_32243;
var statearr_32246_33441 = state_32243__$1;
(statearr_32246_33441[(2)] = null);

(statearr_32246_33441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (4))){
var inst_32225 = (state_32243[(7)]);
var inst_32225__$1 = (state_32243[(2)]);
var inst_32226 = (inst_32225__$1 == null);
var state_32243__$1 = (function (){var statearr_32247 = state_32243;
(statearr_32247[(7)] = inst_32225__$1);

return statearr_32247;
})();
if(cljs.core.truth_(inst_32226)){
var statearr_32248_33442 = state_32243__$1;
(statearr_32248_33442[(1)] = (5));

} else {
var statearr_32249_33443 = state_32243__$1;
(statearr_32249_33443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (6))){
var inst_32225 = (state_32243[(7)]);
var inst_32230 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32225) : p.call(null,inst_32225));
var state_32243__$1 = state_32243;
if(cljs.core.truth_(inst_32230)){
var statearr_32250_33444 = state_32243__$1;
(statearr_32250_33444[(1)] = (8));

} else {
var statearr_32251_33445 = state_32243__$1;
(statearr_32251_33445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (3))){
var inst_32241 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32243__$1,inst_32241);
} else {
if((state_val_32244 === (2))){
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32243__$1,(4),ch);
} else {
if((state_val_32244 === (11))){
var inst_32233 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
var statearr_32252_33447 = state_32243__$1;
(statearr_32252_33447[(2)] = inst_32233);

(statearr_32252_33447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (9))){
var state_32243__$1 = state_32243;
var statearr_32253_33448 = state_32243__$1;
(statearr_32253_33448[(2)] = null);

(statearr_32253_33448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (5))){
var inst_32228 = cljs.core.async.close_BANG_(out);
var state_32243__$1 = state_32243;
var statearr_32254_33449 = state_32243__$1;
(statearr_32254_33449[(2)] = inst_32228);

(statearr_32254_33449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (10))){
var inst_32236 = (state_32243[(2)]);
var state_32243__$1 = (function (){var statearr_32255 = state_32243;
(statearr_32255[(8)] = inst_32236);

return statearr_32255;
})();
var statearr_32256_33451 = state_32243__$1;
(statearr_32256_33451[(2)] = null);

(statearr_32256_33451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (8))){
var inst_32225 = (state_32243[(7)]);
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32243__$1,(11),out,inst_32225);
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
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_32257 = [null,null,null,null,null,null,null,null,null];
(statearr_32257[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_32257[(1)] = (1));

return statearr_32257;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_32243){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_32243);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32258){if((e32258 instanceof Object)){
var ex__29872__auto__ = e32258;
var statearr_32259_33452 = state_32243;
(statearr_32259_33452[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33455 = state_32243;
state_32243 = G__33455;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_32243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_32243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_32260 = f__30203__auto__();
(statearr_32260[(6)] = c__30202__auto___33439);

return statearr_32260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32262 = arguments.length;
switch (G__32262) {
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
var c__30202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_32324){
var state_val_32325 = (state_32324[(1)]);
if((state_val_32325 === (7))){
var inst_32320 = (state_32324[(2)]);
var state_32324__$1 = state_32324;
var statearr_32326_33467 = state_32324__$1;
(statearr_32326_33467[(2)] = inst_32320);

(statearr_32326_33467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (20))){
var inst_32290 = (state_32324[(7)]);
var inst_32301 = (state_32324[(2)]);
var inst_32302 = cljs.core.next(inst_32290);
var inst_32276 = inst_32302;
var inst_32277 = null;
var inst_32278 = (0);
var inst_32279 = (0);
var state_32324__$1 = (function (){var statearr_32327 = state_32324;
(statearr_32327[(8)] = inst_32277);

(statearr_32327[(9)] = inst_32276);

(statearr_32327[(10)] = inst_32301);

(statearr_32327[(11)] = inst_32278);

(statearr_32327[(12)] = inst_32279);

return statearr_32327;
})();
var statearr_32328_33468 = state_32324__$1;
(statearr_32328_33468[(2)] = null);

(statearr_32328_33468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (1))){
var state_32324__$1 = state_32324;
var statearr_32329_33471 = state_32324__$1;
(statearr_32329_33471[(2)] = null);

(statearr_32329_33471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (4))){
var inst_32265 = (state_32324[(13)]);
var inst_32265__$1 = (state_32324[(2)]);
var inst_32266 = (inst_32265__$1 == null);
var state_32324__$1 = (function (){var statearr_32330 = state_32324;
(statearr_32330[(13)] = inst_32265__$1);

return statearr_32330;
})();
if(cljs.core.truth_(inst_32266)){
var statearr_32331_33472 = state_32324__$1;
(statearr_32331_33472[(1)] = (5));

} else {
var statearr_32332_33473 = state_32324__$1;
(statearr_32332_33473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (15))){
var state_32324__$1 = state_32324;
var statearr_32336_33474 = state_32324__$1;
(statearr_32336_33474[(2)] = null);

(statearr_32336_33474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (21))){
var state_32324__$1 = state_32324;
var statearr_32337_33475 = state_32324__$1;
(statearr_32337_33475[(2)] = null);

(statearr_32337_33475[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (13))){
var inst_32277 = (state_32324[(8)]);
var inst_32276 = (state_32324[(9)]);
var inst_32278 = (state_32324[(11)]);
var inst_32279 = (state_32324[(12)]);
var inst_32286 = (state_32324[(2)]);
var inst_32287 = (inst_32279 + (1));
var tmp32333 = inst_32277;
var tmp32334 = inst_32276;
var tmp32335 = inst_32278;
var inst_32276__$1 = tmp32334;
var inst_32277__$1 = tmp32333;
var inst_32278__$1 = tmp32335;
var inst_32279__$1 = inst_32287;
var state_32324__$1 = (function (){var statearr_32338 = state_32324;
(statearr_32338[(8)] = inst_32277__$1);

(statearr_32338[(9)] = inst_32276__$1);

(statearr_32338[(14)] = inst_32286);

(statearr_32338[(11)] = inst_32278__$1);

(statearr_32338[(12)] = inst_32279__$1);

return statearr_32338;
})();
var statearr_32339_33483 = state_32324__$1;
(statearr_32339_33483[(2)] = null);

(statearr_32339_33483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (22))){
var state_32324__$1 = state_32324;
var statearr_32340_33484 = state_32324__$1;
(statearr_32340_33484[(2)] = null);

(statearr_32340_33484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (6))){
var inst_32265 = (state_32324[(13)]);
var inst_32274 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32265) : f.call(null,inst_32265));
var inst_32275 = cljs.core.seq(inst_32274);
var inst_32276 = inst_32275;
var inst_32277 = null;
var inst_32278 = (0);
var inst_32279 = (0);
var state_32324__$1 = (function (){var statearr_32341 = state_32324;
(statearr_32341[(8)] = inst_32277);

(statearr_32341[(9)] = inst_32276);

(statearr_32341[(11)] = inst_32278);

(statearr_32341[(12)] = inst_32279);

return statearr_32341;
})();
var statearr_32342_33503 = state_32324__$1;
(statearr_32342_33503[(2)] = null);

(statearr_32342_33503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (17))){
var inst_32290 = (state_32324[(7)]);
var inst_32294 = cljs.core.chunk_first(inst_32290);
var inst_32295 = cljs.core.chunk_rest(inst_32290);
var inst_32296 = cljs.core.count(inst_32294);
var inst_32276 = inst_32295;
var inst_32277 = inst_32294;
var inst_32278 = inst_32296;
var inst_32279 = (0);
var state_32324__$1 = (function (){var statearr_32343 = state_32324;
(statearr_32343[(8)] = inst_32277);

(statearr_32343[(9)] = inst_32276);

(statearr_32343[(11)] = inst_32278);

(statearr_32343[(12)] = inst_32279);

return statearr_32343;
})();
var statearr_32344_33508 = state_32324__$1;
(statearr_32344_33508[(2)] = null);

(statearr_32344_33508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (3))){
var inst_32322 = (state_32324[(2)]);
var state_32324__$1 = state_32324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32324__$1,inst_32322);
} else {
if((state_val_32325 === (12))){
var inst_32310 = (state_32324[(2)]);
var state_32324__$1 = state_32324;
var statearr_32345_33516 = state_32324__$1;
(statearr_32345_33516[(2)] = inst_32310);

(statearr_32345_33516[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (2))){
var state_32324__$1 = state_32324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32324__$1,(4),in$);
} else {
if((state_val_32325 === (23))){
var inst_32318 = (state_32324[(2)]);
var state_32324__$1 = state_32324;
var statearr_32346_33522 = state_32324__$1;
(statearr_32346_33522[(2)] = inst_32318);

(statearr_32346_33522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (19))){
var inst_32305 = (state_32324[(2)]);
var state_32324__$1 = state_32324;
var statearr_32347_33529 = state_32324__$1;
(statearr_32347_33529[(2)] = inst_32305);

(statearr_32347_33529[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (11))){
var inst_32276 = (state_32324[(9)]);
var inst_32290 = (state_32324[(7)]);
var inst_32290__$1 = cljs.core.seq(inst_32276);
var state_32324__$1 = (function (){var statearr_32348 = state_32324;
(statearr_32348[(7)] = inst_32290__$1);

return statearr_32348;
})();
if(inst_32290__$1){
var statearr_32349_33540 = state_32324__$1;
(statearr_32349_33540[(1)] = (14));

} else {
var statearr_32350_33543 = state_32324__$1;
(statearr_32350_33543[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (9))){
var inst_32312 = (state_32324[(2)]);
var inst_32313 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32324__$1 = (function (){var statearr_32351 = state_32324;
(statearr_32351[(15)] = inst_32312);

return statearr_32351;
})();
if(cljs.core.truth_(inst_32313)){
var statearr_32352_33546 = state_32324__$1;
(statearr_32352_33546[(1)] = (21));

} else {
var statearr_32353_33547 = state_32324__$1;
(statearr_32353_33547[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (5))){
var inst_32268 = cljs.core.async.close_BANG_(out);
var state_32324__$1 = state_32324;
var statearr_32354_33548 = state_32324__$1;
(statearr_32354_33548[(2)] = inst_32268);

(statearr_32354_33548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (14))){
var inst_32290 = (state_32324[(7)]);
var inst_32292 = cljs.core.chunked_seq_QMARK_(inst_32290);
var state_32324__$1 = state_32324;
if(inst_32292){
var statearr_32355_33549 = state_32324__$1;
(statearr_32355_33549[(1)] = (17));

} else {
var statearr_32356_33550 = state_32324__$1;
(statearr_32356_33550[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (16))){
var inst_32308 = (state_32324[(2)]);
var state_32324__$1 = state_32324;
var statearr_32357_33551 = state_32324__$1;
(statearr_32357_33551[(2)] = inst_32308);

(statearr_32357_33551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (10))){
var inst_32277 = (state_32324[(8)]);
var inst_32279 = (state_32324[(12)]);
var inst_32284 = cljs.core._nth(inst_32277,inst_32279);
var state_32324__$1 = state_32324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32324__$1,(13),out,inst_32284);
} else {
if((state_val_32325 === (18))){
var inst_32290 = (state_32324[(7)]);
var inst_32299 = cljs.core.first(inst_32290);
var state_32324__$1 = state_32324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32324__$1,(20),out,inst_32299);
} else {
if((state_val_32325 === (8))){
var inst_32278 = (state_32324[(11)]);
var inst_32279 = (state_32324[(12)]);
var inst_32281 = (inst_32279 < inst_32278);
var inst_32282 = inst_32281;
var state_32324__$1 = state_32324;
if(cljs.core.truth_(inst_32282)){
var statearr_32358_33569 = state_32324__$1;
(statearr_32358_33569[(1)] = (10));

} else {
var statearr_32359_33570 = state_32324__$1;
(statearr_32359_33570[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29869__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29869__auto____0 = (function (){
var statearr_32360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32360[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29869__auto__);

(statearr_32360[(1)] = (1));

return statearr_32360;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29869__auto____1 = (function (state_32324){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_32324);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32361){if((e32361 instanceof Object)){
var ex__29872__auto__ = e32361;
var statearr_32362_33587 = state_32324;
(statearr_32362_33587[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32361;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33597 = state_32324;
state_32324 = G__33597;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29869__auto__ = function(state_32324){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29869__auto____1.call(this,state_32324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29869__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29869__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_32363 = f__30203__auto__();
(statearr_32363[(6)] = c__30202__auto__);

return statearr_32363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
}));

return c__30202__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32365 = arguments.length;
switch (G__32365) {
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
var G__32367 = arguments.length;
switch (G__32367) {
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
var G__32369 = arguments.length;
switch (G__32369) {
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
var c__30202__auto___33624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_32393){
var state_val_32394 = (state_32393[(1)]);
if((state_val_32394 === (7))){
var inst_32388 = (state_32393[(2)]);
var state_32393__$1 = state_32393;
var statearr_32395_33625 = state_32393__$1;
(statearr_32395_33625[(2)] = inst_32388);

(statearr_32395_33625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (1))){
var inst_32370 = null;
var state_32393__$1 = (function (){var statearr_32396 = state_32393;
(statearr_32396[(7)] = inst_32370);

return statearr_32396;
})();
var statearr_32397_33627 = state_32393__$1;
(statearr_32397_33627[(2)] = null);

(statearr_32397_33627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (4))){
var inst_32373 = (state_32393[(8)]);
var inst_32373__$1 = (state_32393[(2)]);
var inst_32374 = (inst_32373__$1 == null);
var inst_32375 = cljs.core.not(inst_32374);
var state_32393__$1 = (function (){var statearr_32398 = state_32393;
(statearr_32398[(8)] = inst_32373__$1);

return statearr_32398;
})();
if(inst_32375){
var statearr_32399_33628 = state_32393__$1;
(statearr_32399_33628[(1)] = (5));

} else {
var statearr_32400_33629 = state_32393__$1;
(statearr_32400_33629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (6))){
var state_32393__$1 = state_32393;
var statearr_32401_33630 = state_32393__$1;
(statearr_32401_33630[(2)] = null);

(statearr_32401_33630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (3))){
var inst_32390 = (state_32393[(2)]);
var inst_32391 = cljs.core.async.close_BANG_(out);
var state_32393__$1 = (function (){var statearr_32402 = state_32393;
(statearr_32402[(9)] = inst_32390);

return statearr_32402;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32393__$1,inst_32391);
} else {
if((state_val_32394 === (2))){
var state_32393__$1 = state_32393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32393__$1,(4),ch);
} else {
if((state_val_32394 === (11))){
var inst_32373 = (state_32393[(8)]);
var inst_32382 = (state_32393[(2)]);
var inst_32370 = inst_32373;
var state_32393__$1 = (function (){var statearr_32403 = state_32393;
(statearr_32403[(7)] = inst_32370);

(statearr_32403[(10)] = inst_32382);

return statearr_32403;
})();
var statearr_32404_33634 = state_32393__$1;
(statearr_32404_33634[(2)] = null);

(statearr_32404_33634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (9))){
var inst_32373 = (state_32393[(8)]);
var state_32393__$1 = state_32393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32393__$1,(11),out,inst_32373);
} else {
if((state_val_32394 === (5))){
var inst_32370 = (state_32393[(7)]);
var inst_32373 = (state_32393[(8)]);
var inst_32377 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32373,inst_32370);
var state_32393__$1 = state_32393;
if(inst_32377){
var statearr_32406_33636 = state_32393__$1;
(statearr_32406_33636[(1)] = (8));

} else {
var statearr_32407_33637 = state_32393__$1;
(statearr_32407_33637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (10))){
var inst_32385 = (state_32393[(2)]);
var state_32393__$1 = state_32393;
var statearr_32408_33639 = state_32393__$1;
(statearr_32408_33639[(2)] = inst_32385);

(statearr_32408_33639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (8))){
var inst_32370 = (state_32393[(7)]);
var tmp32405 = inst_32370;
var inst_32370__$1 = tmp32405;
var state_32393__$1 = (function (){var statearr_32409 = state_32393;
(statearr_32409[(7)] = inst_32370__$1);

return statearr_32409;
})();
var statearr_32410_33642 = state_32393__$1;
(statearr_32410_33642[(2)] = null);

(statearr_32410_33642[(1)] = (2));


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
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_32411 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32411[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_32411[(1)] = (1));

return statearr_32411;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_32393){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_32393);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32412){if((e32412 instanceof Object)){
var ex__29872__auto__ = e32412;
var statearr_32413_33643 = state_32393;
(statearr_32413_33643[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33644 = state_32393;
state_32393 = G__33644;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_32393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_32393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_32414 = f__30203__auto__();
(statearr_32414[(6)] = c__30202__auto___33624);

return statearr_32414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32416 = arguments.length;
switch (G__32416) {
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
var c__30202__auto___33646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_32454){
var state_val_32455 = (state_32454[(1)]);
if((state_val_32455 === (7))){
var inst_32450 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32456_33648 = state_32454__$1;
(statearr_32456_33648[(2)] = inst_32450);

(statearr_32456_33648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (1))){
var inst_32417 = (new Array(n));
var inst_32418 = inst_32417;
var inst_32419 = (0);
var state_32454__$1 = (function (){var statearr_32457 = state_32454;
(statearr_32457[(7)] = inst_32418);

(statearr_32457[(8)] = inst_32419);

return statearr_32457;
})();
var statearr_32458_33649 = state_32454__$1;
(statearr_32458_33649[(2)] = null);

(statearr_32458_33649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (4))){
var inst_32422 = (state_32454[(9)]);
var inst_32422__$1 = (state_32454[(2)]);
var inst_32423 = (inst_32422__$1 == null);
var inst_32424 = cljs.core.not(inst_32423);
var state_32454__$1 = (function (){var statearr_32459 = state_32454;
(statearr_32459[(9)] = inst_32422__$1);

return statearr_32459;
})();
if(inst_32424){
var statearr_32460_33650 = state_32454__$1;
(statearr_32460_33650[(1)] = (5));

} else {
var statearr_32461_33651 = state_32454__$1;
(statearr_32461_33651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (15))){
var inst_32444 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32462_33653 = state_32454__$1;
(statearr_32462_33653[(2)] = inst_32444);

(statearr_32462_33653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (13))){
var state_32454__$1 = state_32454;
var statearr_32463_33655 = state_32454__$1;
(statearr_32463_33655[(2)] = null);

(statearr_32463_33655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (6))){
var inst_32419 = (state_32454[(8)]);
var inst_32440 = (inst_32419 > (0));
var state_32454__$1 = state_32454;
if(cljs.core.truth_(inst_32440)){
var statearr_32464_33656 = state_32454__$1;
(statearr_32464_33656[(1)] = (12));

} else {
var statearr_32465_33657 = state_32454__$1;
(statearr_32465_33657[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (3))){
var inst_32452 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32454__$1,inst_32452);
} else {
if((state_val_32455 === (12))){
var inst_32418 = (state_32454[(7)]);
var inst_32442 = cljs.core.vec(inst_32418);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32454__$1,(15),out,inst_32442);
} else {
if((state_val_32455 === (2))){
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32454__$1,(4),ch);
} else {
if((state_val_32455 === (11))){
var inst_32434 = (state_32454[(2)]);
var inst_32435 = (new Array(n));
var inst_32418 = inst_32435;
var inst_32419 = (0);
var state_32454__$1 = (function (){var statearr_32466 = state_32454;
(statearr_32466[(10)] = inst_32434);

(statearr_32466[(7)] = inst_32418);

(statearr_32466[(8)] = inst_32419);

return statearr_32466;
})();
var statearr_32467_33658 = state_32454__$1;
(statearr_32467_33658[(2)] = null);

(statearr_32467_33658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (9))){
var inst_32418 = (state_32454[(7)]);
var inst_32432 = cljs.core.vec(inst_32418);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32454__$1,(11),out,inst_32432);
} else {
if((state_val_32455 === (5))){
var inst_32422 = (state_32454[(9)]);
var inst_32418 = (state_32454[(7)]);
var inst_32427 = (state_32454[(11)]);
var inst_32419 = (state_32454[(8)]);
var inst_32426 = (inst_32418[inst_32419] = inst_32422);
var inst_32427__$1 = (inst_32419 + (1));
var inst_32428 = (inst_32427__$1 < n);
var state_32454__$1 = (function (){var statearr_32468 = state_32454;
(statearr_32468[(12)] = inst_32426);

(statearr_32468[(11)] = inst_32427__$1);

return statearr_32468;
})();
if(cljs.core.truth_(inst_32428)){
var statearr_32469_33659 = state_32454__$1;
(statearr_32469_33659[(1)] = (8));

} else {
var statearr_32470_33660 = state_32454__$1;
(statearr_32470_33660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (14))){
var inst_32447 = (state_32454[(2)]);
var inst_32448 = cljs.core.async.close_BANG_(out);
var state_32454__$1 = (function (){var statearr_32472 = state_32454;
(statearr_32472[(13)] = inst_32447);

return statearr_32472;
})();
var statearr_32473_33661 = state_32454__$1;
(statearr_32473_33661[(2)] = inst_32448);

(statearr_32473_33661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (10))){
var inst_32438 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32474_33662 = state_32454__$1;
(statearr_32474_33662[(2)] = inst_32438);

(statearr_32474_33662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (8))){
var inst_32418 = (state_32454[(7)]);
var inst_32427 = (state_32454[(11)]);
var tmp32471 = inst_32418;
var inst_32418__$1 = tmp32471;
var inst_32419 = inst_32427;
var state_32454__$1 = (function (){var statearr_32475 = state_32454;
(statearr_32475[(7)] = inst_32418__$1);

(statearr_32475[(8)] = inst_32419);

return statearr_32475;
})();
var statearr_32476_33663 = state_32454__$1;
(statearr_32476_33663[(2)] = null);

(statearr_32476_33663[(1)] = (2));


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
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_32477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32477[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_32477[(1)] = (1));

return statearr_32477;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_32454){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_32454);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32478){if((e32478 instanceof Object)){
var ex__29872__auto__ = e32478;
var statearr_32479_33664 = state_32454;
(statearr_32479_33664[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32478;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33665 = state_32454;
state_32454 = G__33665;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_32454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_32454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_32480 = f__30203__auto__();
(statearr_32480[(6)] = c__30202__auto___33646);

return statearr_32480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32482 = arguments.length;
switch (G__32482) {
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
var c__30202__auto___33667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_32524){
var state_val_32525 = (state_32524[(1)]);
if((state_val_32525 === (7))){
var inst_32520 = (state_32524[(2)]);
var state_32524__$1 = state_32524;
var statearr_32526_33668 = state_32524__$1;
(statearr_32526_33668[(2)] = inst_32520);

(statearr_32526_33668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (1))){
var inst_32483 = [];
var inst_32484 = inst_32483;
var inst_32485 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32524__$1 = (function (){var statearr_32527 = state_32524;
(statearr_32527[(7)] = inst_32485);

(statearr_32527[(8)] = inst_32484);

return statearr_32527;
})();
var statearr_32528_33669 = state_32524__$1;
(statearr_32528_33669[(2)] = null);

(statearr_32528_33669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (4))){
var inst_32488 = (state_32524[(9)]);
var inst_32488__$1 = (state_32524[(2)]);
var inst_32489 = (inst_32488__$1 == null);
var inst_32490 = cljs.core.not(inst_32489);
var state_32524__$1 = (function (){var statearr_32529 = state_32524;
(statearr_32529[(9)] = inst_32488__$1);

return statearr_32529;
})();
if(inst_32490){
var statearr_32530_33670 = state_32524__$1;
(statearr_32530_33670[(1)] = (5));

} else {
var statearr_32531_33671 = state_32524__$1;
(statearr_32531_33671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (15))){
var inst_32514 = (state_32524[(2)]);
var state_32524__$1 = state_32524;
var statearr_32532_33672 = state_32524__$1;
(statearr_32532_33672[(2)] = inst_32514);

(statearr_32532_33672[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (13))){
var state_32524__$1 = state_32524;
var statearr_32533_33673 = state_32524__$1;
(statearr_32533_33673[(2)] = null);

(statearr_32533_33673[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (6))){
var inst_32484 = (state_32524[(8)]);
var inst_32509 = inst_32484.length;
var inst_32510 = (inst_32509 > (0));
var state_32524__$1 = state_32524;
if(cljs.core.truth_(inst_32510)){
var statearr_32534_33674 = state_32524__$1;
(statearr_32534_33674[(1)] = (12));

} else {
var statearr_32535_33675 = state_32524__$1;
(statearr_32535_33675[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (3))){
var inst_32522 = (state_32524[(2)]);
var state_32524__$1 = state_32524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32524__$1,inst_32522);
} else {
if((state_val_32525 === (12))){
var inst_32484 = (state_32524[(8)]);
var inst_32512 = cljs.core.vec(inst_32484);
var state_32524__$1 = state_32524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32524__$1,(15),out,inst_32512);
} else {
if((state_val_32525 === (2))){
var state_32524__$1 = state_32524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32524__$1,(4),ch);
} else {
if((state_val_32525 === (11))){
var inst_32488 = (state_32524[(9)]);
var inst_32492 = (state_32524[(10)]);
var inst_32502 = (state_32524[(2)]);
var inst_32503 = [];
var inst_32504 = inst_32503.push(inst_32488);
var inst_32484 = inst_32503;
var inst_32485 = inst_32492;
var state_32524__$1 = (function (){var statearr_32536 = state_32524;
(statearr_32536[(7)] = inst_32485);

(statearr_32536[(11)] = inst_32504);

(statearr_32536[(12)] = inst_32502);

(statearr_32536[(8)] = inst_32484);

return statearr_32536;
})();
var statearr_32537_33676 = state_32524__$1;
(statearr_32537_33676[(2)] = null);

(statearr_32537_33676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (9))){
var inst_32484 = (state_32524[(8)]);
var inst_32500 = cljs.core.vec(inst_32484);
var state_32524__$1 = state_32524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32524__$1,(11),out,inst_32500);
} else {
if((state_val_32525 === (5))){
var inst_32485 = (state_32524[(7)]);
var inst_32488 = (state_32524[(9)]);
var inst_32492 = (state_32524[(10)]);
var inst_32492__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32488) : f.call(null,inst_32488));
var inst_32493 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32492__$1,inst_32485);
var inst_32494 = cljs.core.keyword_identical_QMARK_(inst_32485,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32495 = ((inst_32493) || (inst_32494));
var state_32524__$1 = (function (){var statearr_32538 = state_32524;
(statearr_32538[(10)] = inst_32492__$1);

return statearr_32538;
})();
if(cljs.core.truth_(inst_32495)){
var statearr_32539_33677 = state_32524__$1;
(statearr_32539_33677[(1)] = (8));

} else {
var statearr_32540_33678 = state_32524__$1;
(statearr_32540_33678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (14))){
var inst_32517 = (state_32524[(2)]);
var inst_32518 = cljs.core.async.close_BANG_(out);
var state_32524__$1 = (function (){var statearr_32542 = state_32524;
(statearr_32542[(13)] = inst_32517);

return statearr_32542;
})();
var statearr_32543_33679 = state_32524__$1;
(statearr_32543_33679[(2)] = inst_32518);

(statearr_32543_33679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (10))){
var inst_32507 = (state_32524[(2)]);
var state_32524__$1 = state_32524;
var statearr_32544_33680 = state_32524__$1;
(statearr_32544_33680[(2)] = inst_32507);

(statearr_32544_33680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (8))){
var inst_32488 = (state_32524[(9)]);
var inst_32492 = (state_32524[(10)]);
var inst_32484 = (state_32524[(8)]);
var inst_32497 = inst_32484.push(inst_32488);
var tmp32541 = inst_32484;
var inst_32484__$1 = tmp32541;
var inst_32485 = inst_32492;
var state_32524__$1 = (function (){var statearr_32545 = state_32524;
(statearr_32545[(7)] = inst_32485);

(statearr_32545[(8)] = inst_32484__$1);

(statearr_32545[(14)] = inst_32497);

return statearr_32545;
})();
var statearr_32546_33681 = state_32524__$1;
(statearr_32546_33681[(2)] = null);

(statearr_32546_33681[(1)] = (2));


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
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_32547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32547[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_32547[(1)] = (1));

return statearr_32547;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_32524){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_32524);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32548){if((e32548 instanceof Object)){
var ex__29872__auto__ = e32548;
var statearr_32549_33682 = state_32524;
(statearr_32549_33682[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32548;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33683 = state_32524;
state_32524 = G__33683;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_32524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_32524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_32550 = f__30203__auto__();
(statearr_32550[(6)] = c__30202__auto___33667);

return statearr_32550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
