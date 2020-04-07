goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32571 = coll;
var G__32572 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32571,G__32572) : shadow.dom.lazy_native_coll_seq.call(null,G__32571,G__32572));
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
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
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
var G__32577 = arguments.length;
switch (G__32577) {
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
var G__32581 = arguments.length;
switch (G__32581) {
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
var G__32584 = arguments.length;
switch (G__32584) {
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
var G__32589 = arguments.length;
switch (G__32589) {
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
var G__32591 = arguments.length;
switch (G__32591) {
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
var G__32593 = arguments.length;
switch (G__32593) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32595){if((e32595 instanceof Object)){
var e = e32595;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32595;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32600 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32601 = null;
var count__32602 = (0);
var i__32603 = (0);
while(true){
if((i__32603 < count__32602)){
var el = chunk__32601.cljs$core$IIndexed$_nth$arity$2(null,i__32603);
var handler_33103__$1 = ((function (seq__32600,chunk__32601,count__32602,i__32603,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32600,chunk__32601,count__32602,i__32603,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33103__$1);


var G__33106 = seq__32600;
var G__33107 = chunk__32601;
var G__33108 = count__32602;
var G__33109 = (i__32603 + (1));
seq__32600 = G__33106;
chunk__32601 = G__33107;
count__32602 = G__33108;
i__32603 = G__33109;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32600);
if(temp__5735__auto__){
var seq__32600__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32600__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32600__$1);
var G__33112 = cljs.core.chunk_rest(seq__32600__$1);
var G__33113 = c__4609__auto__;
var G__33114 = cljs.core.count(c__4609__auto__);
var G__33115 = (0);
seq__32600 = G__33112;
chunk__32601 = G__33113;
count__32602 = G__33114;
i__32603 = G__33115;
continue;
} else {
var el = cljs.core.first(seq__32600__$1);
var handler_33116__$1 = ((function (seq__32600,chunk__32601,count__32602,i__32603,el,seq__32600__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32600,chunk__32601,count__32602,i__32603,el,seq__32600__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33116__$1);


var G__33118 = cljs.core.next(seq__32600__$1);
var G__33119 = null;
var G__33120 = (0);
var G__33121 = (0);
seq__32600 = G__33118;
chunk__32601 = G__33119;
count__32602 = G__33120;
i__32603 = G__33121;
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
var G__32606 = arguments.length;
switch (G__32606) {
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
var seq__32607 = cljs.core.seq(events);
var chunk__32608 = null;
var count__32609 = (0);
var i__32610 = (0);
while(true){
if((i__32610 < count__32609)){
var vec__32619 = chunk__32608.cljs$core$IIndexed$_nth$arity$2(null,i__32610);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32619,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32619,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33129 = seq__32607;
var G__33130 = chunk__32608;
var G__33131 = count__32609;
var G__33132 = (i__32610 + (1));
seq__32607 = G__33129;
chunk__32608 = G__33130;
count__32609 = G__33131;
i__32610 = G__33132;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32607);
if(temp__5735__auto__){
var seq__32607__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32607__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32607__$1);
var G__33134 = cljs.core.chunk_rest(seq__32607__$1);
var G__33135 = c__4609__auto__;
var G__33136 = cljs.core.count(c__4609__auto__);
var G__33137 = (0);
seq__32607 = G__33134;
chunk__32608 = G__33135;
count__32609 = G__33136;
i__32610 = G__33137;
continue;
} else {
var vec__32625 = cljs.core.first(seq__32607__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32625,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32625,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33139 = cljs.core.next(seq__32607__$1);
var G__33140 = null;
var G__33141 = (0);
var G__33142 = (0);
seq__32607 = G__33139;
chunk__32608 = G__33140;
count__32609 = G__33141;
i__32610 = G__33142;
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
var seq__32631 = cljs.core.seq(styles);
var chunk__32632 = null;
var count__32633 = (0);
var i__32634 = (0);
while(true){
if((i__32634 < count__32633)){
var vec__32647 = chunk__32632.cljs$core$IIndexed$_nth$arity$2(null,i__32634);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32647,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32647,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33143 = seq__32631;
var G__33144 = chunk__32632;
var G__33145 = count__32633;
var G__33146 = (i__32634 + (1));
seq__32631 = G__33143;
chunk__32632 = G__33144;
count__32633 = G__33145;
i__32634 = G__33146;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32631);
if(temp__5735__auto__){
var seq__32631__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32631__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32631__$1);
var G__33147 = cljs.core.chunk_rest(seq__32631__$1);
var G__33148 = c__4609__auto__;
var G__33149 = cljs.core.count(c__4609__auto__);
var G__33150 = (0);
seq__32631 = G__33147;
chunk__32632 = G__33148;
count__32633 = G__33149;
i__32634 = G__33150;
continue;
} else {
var vec__32652 = cljs.core.first(seq__32631__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32652,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33151 = cljs.core.next(seq__32631__$1);
var G__33152 = null;
var G__33153 = (0);
var G__33154 = (0);
seq__32631 = G__33151;
chunk__32632 = G__33152;
count__32633 = G__33153;
i__32634 = G__33154;
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
var G__32655_33155 = key;
var G__32655_33156__$1 = (((G__32655_33155 instanceof cljs.core.Keyword))?G__32655_33155.fqn:null);
switch (G__32655_33156__$1) {
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
var ks_33158 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33158,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33158,"aria-");
}
})())){
el.setAttribute(ks_33158,value);
} else {
(el[ks_33158] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32659){
var map__32660 = p__32659;
var map__32660__$1 = (((((!((map__32660 == null))))?(((((map__32660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32660):map__32660);
var props = map__32660__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32660__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32662 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32662,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32662,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32662,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32671 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32671,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32671;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32674 = arguments.length;
switch (G__32674) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32675){
var vec__32676 = p__32675;
var seq__32677 = cljs.core.seq(vec__32676);
var first__32678 = cljs.core.first(seq__32677);
var seq__32677__$1 = cljs.core.next(seq__32677);
var nn = first__32678;
var first__32678__$1 = cljs.core.first(seq__32677__$1);
var seq__32677__$2 = cljs.core.next(seq__32677__$1);
var np = first__32678__$1;
var nc = seq__32677__$2;
var node = vec__32676;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32679 = nn;
var G__32680 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32679,G__32680) : create_fn.call(null,G__32679,G__32680));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32681 = nn;
var G__32682 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32681,G__32682) : create_fn.call(null,G__32681,G__32682));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32683 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32683,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32683,(1),null);
var seq__32686_33187 = cljs.core.seq(node_children);
var chunk__32687_33188 = null;
var count__32688_33189 = (0);
var i__32689_33190 = (0);
while(true){
if((i__32689_33190 < count__32688_33189)){
var child_struct_33191 = chunk__32687_33188.cljs$core$IIndexed$_nth$arity$2(null,i__32689_33190);
var children_33193 = shadow.dom.dom_node(child_struct_33191);
if(cljs.core.seq_QMARK_(children_33193)){
var seq__32716_33194 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33193));
var chunk__32718_33195 = null;
var count__32719_33196 = (0);
var i__32720_33197 = (0);
while(true){
if((i__32720_33197 < count__32719_33196)){
var child_33198 = chunk__32718_33195.cljs$core$IIndexed$_nth$arity$2(null,i__32720_33197);
if(cljs.core.truth_(child_33198)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33198);


var G__33199 = seq__32716_33194;
var G__33200 = chunk__32718_33195;
var G__33201 = count__32719_33196;
var G__33202 = (i__32720_33197 + (1));
seq__32716_33194 = G__33199;
chunk__32718_33195 = G__33200;
count__32719_33196 = G__33201;
i__32720_33197 = G__33202;
continue;
} else {
var G__33204 = seq__32716_33194;
var G__33205 = chunk__32718_33195;
var G__33206 = count__32719_33196;
var G__33207 = (i__32720_33197 + (1));
seq__32716_33194 = G__33204;
chunk__32718_33195 = G__33205;
count__32719_33196 = G__33206;
i__32720_33197 = G__33207;
continue;
}
} else {
var temp__5735__auto___33208 = cljs.core.seq(seq__32716_33194);
if(temp__5735__auto___33208){
var seq__32716_33209__$1 = temp__5735__auto___33208;
if(cljs.core.chunked_seq_QMARK_(seq__32716_33209__$1)){
var c__4609__auto___33210 = cljs.core.chunk_first(seq__32716_33209__$1);
var G__33211 = cljs.core.chunk_rest(seq__32716_33209__$1);
var G__33212 = c__4609__auto___33210;
var G__33213 = cljs.core.count(c__4609__auto___33210);
var G__33214 = (0);
seq__32716_33194 = G__33211;
chunk__32718_33195 = G__33212;
count__32719_33196 = G__33213;
i__32720_33197 = G__33214;
continue;
} else {
var child_33216 = cljs.core.first(seq__32716_33209__$1);
if(cljs.core.truth_(child_33216)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33216);


var G__33217 = cljs.core.next(seq__32716_33209__$1);
var G__33218 = null;
var G__33219 = (0);
var G__33220 = (0);
seq__32716_33194 = G__33217;
chunk__32718_33195 = G__33218;
count__32719_33196 = G__33219;
i__32720_33197 = G__33220;
continue;
} else {
var G__33221 = cljs.core.next(seq__32716_33209__$1);
var G__33222 = null;
var G__33223 = (0);
var G__33224 = (0);
seq__32716_33194 = G__33221;
chunk__32718_33195 = G__33222;
count__32719_33196 = G__33223;
i__32720_33197 = G__33224;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33193);
}


var G__33225 = seq__32686_33187;
var G__33226 = chunk__32687_33188;
var G__33227 = count__32688_33189;
var G__33228 = (i__32689_33190 + (1));
seq__32686_33187 = G__33225;
chunk__32687_33188 = G__33226;
count__32688_33189 = G__33227;
i__32689_33190 = G__33228;
continue;
} else {
var temp__5735__auto___33229 = cljs.core.seq(seq__32686_33187);
if(temp__5735__auto___33229){
var seq__32686_33230__$1 = temp__5735__auto___33229;
if(cljs.core.chunked_seq_QMARK_(seq__32686_33230__$1)){
var c__4609__auto___33231 = cljs.core.chunk_first(seq__32686_33230__$1);
var G__33233 = cljs.core.chunk_rest(seq__32686_33230__$1);
var G__33234 = c__4609__auto___33231;
var G__33235 = cljs.core.count(c__4609__auto___33231);
var G__33236 = (0);
seq__32686_33187 = G__33233;
chunk__32687_33188 = G__33234;
count__32688_33189 = G__33235;
i__32689_33190 = G__33236;
continue;
} else {
var child_struct_33237 = cljs.core.first(seq__32686_33230__$1);
var children_33238 = shadow.dom.dom_node(child_struct_33237);
if(cljs.core.seq_QMARK_(children_33238)){
var seq__32728_33239 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33238));
var chunk__32730_33240 = null;
var count__32731_33241 = (0);
var i__32732_33242 = (0);
while(true){
if((i__32732_33242 < count__32731_33241)){
var child_33244 = chunk__32730_33240.cljs$core$IIndexed$_nth$arity$2(null,i__32732_33242);
if(cljs.core.truth_(child_33244)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33244);


var G__33246 = seq__32728_33239;
var G__33247 = chunk__32730_33240;
var G__33248 = count__32731_33241;
var G__33249 = (i__32732_33242 + (1));
seq__32728_33239 = G__33246;
chunk__32730_33240 = G__33247;
count__32731_33241 = G__33248;
i__32732_33242 = G__33249;
continue;
} else {
var G__33250 = seq__32728_33239;
var G__33251 = chunk__32730_33240;
var G__33252 = count__32731_33241;
var G__33253 = (i__32732_33242 + (1));
seq__32728_33239 = G__33250;
chunk__32730_33240 = G__33251;
count__32731_33241 = G__33252;
i__32732_33242 = G__33253;
continue;
}
} else {
var temp__5735__auto___33254__$1 = cljs.core.seq(seq__32728_33239);
if(temp__5735__auto___33254__$1){
var seq__32728_33255__$1 = temp__5735__auto___33254__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32728_33255__$1)){
var c__4609__auto___33256 = cljs.core.chunk_first(seq__32728_33255__$1);
var G__33257 = cljs.core.chunk_rest(seq__32728_33255__$1);
var G__33258 = c__4609__auto___33256;
var G__33259 = cljs.core.count(c__4609__auto___33256);
var G__33260 = (0);
seq__32728_33239 = G__33257;
chunk__32730_33240 = G__33258;
count__32731_33241 = G__33259;
i__32732_33242 = G__33260;
continue;
} else {
var child_33261 = cljs.core.first(seq__32728_33255__$1);
if(cljs.core.truth_(child_33261)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33261);


var G__33262 = cljs.core.next(seq__32728_33255__$1);
var G__33263 = null;
var G__33264 = (0);
var G__33265 = (0);
seq__32728_33239 = G__33262;
chunk__32730_33240 = G__33263;
count__32731_33241 = G__33264;
i__32732_33242 = G__33265;
continue;
} else {
var G__33266 = cljs.core.next(seq__32728_33255__$1);
var G__33267 = null;
var G__33268 = (0);
var G__33269 = (0);
seq__32728_33239 = G__33266;
chunk__32730_33240 = G__33267;
count__32731_33241 = G__33268;
i__32732_33242 = G__33269;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33238);
}


var G__33270 = cljs.core.next(seq__32686_33230__$1);
var G__33271 = null;
var G__33272 = (0);
var G__33273 = (0);
seq__32686_33187 = G__33270;
chunk__32687_33188 = G__33271;
count__32688_33189 = G__33272;
i__32689_33190 = G__33273;
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
var seq__32742 = cljs.core.seq(node);
var chunk__32743 = null;
var count__32744 = (0);
var i__32745 = (0);
while(true){
if((i__32745 < count__32744)){
var n = chunk__32743.cljs$core$IIndexed$_nth$arity$2(null,i__32745);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33284 = seq__32742;
var G__33285 = chunk__32743;
var G__33286 = count__32744;
var G__33287 = (i__32745 + (1));
seq__32742 = G__33284;
chunk__32743 = G__33285;
count__32744 = G__33286;
i__32745 = G__33287;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32742);
if(temp__5735__auto__){
var seq__32742__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32742__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32742__$1);
var G__33288 = cljs.core.chunk_rest(seq__32742__$1);
var G__33289 = c__4609__auto__;
var G__33290 = cljs.core.count(c__4609__auto__);
var G__33291 = (0);
seq__32742 = G__33288;
chunk__32743 = G__33289;
count__32744 = G__33290;
i__32745 = G__33291;
continue;
} else {
var n = cljs.core.first(seq__32742__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33292 = cljs.core.next(seq__32742__$1);
var G__33293 = null;
var G__33294 = (0);
var G__33295 = (0);
seq__32742 = G__33292;
chunk__32743 = G__33293;
count__32744 = G__33294;
i__32745 = G__33295;
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
var G__32751 = arguments.length;
switch (G__32751) {
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
var G__32757 = arguments.length;
switch (G__32757) {
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
var G__32767 = arguments.length;
switch (G__32767) {
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
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var args__4795__auto__ = [];
var len__4789__auto___33307 = arguments.length;
var i__4790__auto___33308 = (0);
while(true){
if((i__4790__auto___33308 < len__4789__auto___33307)){
args__4795__auto__.push((arguments[i__4790__auto___33308]));

var G__33309 = (i__4790__auto___33308 + (1));
i__4790__auto___33308 = G__33309;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32776_33312 = cljs.core.seq(nodes);
var chunk__32777_33313 = null;
var count__32778_33314 = (0);
var i__32779_33315 = (0);
while(true){
if((i__32779_33315 < count__32778_33314)){
var node_33316 = chunk__32777_33313.cljs$core$IIndexed$_nth$arity$2(null,i__32779_33315);
fragment.appendChild(shadow.dom._to_dom(node_33316));


var G__33317 = seq__32776_33312;
var G__33318 = chunk__32777_33313;
var G__33319 = count__32778_33314;
var G__33320 = (i__32779_33315 + (1));
seq__32776_33312 = G__33317;
chunk__32777_33313 = G__33318;
count__32778_33314 = G__33319;
i__32779_33315 = G__33320;
continue;
} else {
var temp__5735__auto___33321 = cljs.core.seq(seq__32776_33312);
if(temp__5735__auto___33321){
var seq__32776_33322__$1 = temp__5735__auto___33321;
if(cljs.core.chunked_seq_QMARK_(seq__32776_33322__$1)){
var c__4609__auto___33323 = cljs.core.chunk_first(seq__32776_33322__$1);
var G__33324 = cljs.core.chunk_rest(seq__32776_33322__$1);
var G__33325 = c__4609__auto___33323;
var G__33326 = cljs.core.count(c__4609__auto___33323);
var G__33327 = (0);
seq__32776_33312 = G__33324;
chunk__32777_33313 = G__33325;
count__32778_33314 = G__33326;
i__32779_33315 = G__33327;
continue;
} else {
var node_33328 = cljs.core.first(seq__32776_33322__$1);
fragment.appendChild(shadow.dom._to_dom(node_33328));


var G__33329 = cljs.core.next(seq__32776_33322__$1);
var G__33330 = null;
var G__33331 = (0);
var G__33332 = (0);
seq__32776_33312 = G__33329;
chunk__32777_33313 = G__33330;
count__32778_33314 = G__33331;
i__32779_33315 = G__33332;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32774){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32774));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32796_33333 = cljs.core.seq(scripts);
var chunk__32797_33334 = null;
var count__32798_33335 = (0);
var i__32799_33336 = (0);
while(true){
if((i__32799_33336 < count__32798_33335)){
var vec__32806_33337 = chunk__32797_33334.cljs$core$IIndexed$_nth$arity$2(null,i__32799_33336);
var script_tag_33338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32806_33337,(0),null);
var script_body_33339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32806_33337,(1),null);
eval(script_body_33339);


var G__33340 = seq__32796_33333;
var G__33341 = chunk__32797_33334;
var G__33342 = count__32798_33335;
var G__33343 = (i__32799_33336 + (1));
seq__32796_33333 = G__33340;
chunk__32797_33334 = G__33341;
count__32798_33335 = G__33342;
i__32799_33336 = G__33343;
continue;
} else {
var temp__5735__auto___33344 = cljs.core.seq(seq__32796_33333);
if(temp__5735__auto___33344){
var seq__32796_33345__$1 = temp__5735__auto___33344;
if(cljs.core.chunked_seq_QMARK_(seq__32796_33345__$1)){
var c__4609__auto___33346 = cljs.core.chunk_first(seq__32796_33345__$1);
var G__33347 = cljs.core.chunk_rest(seq__32796_33345__$1);
var G__33348 = c__4609__auto___33346;
var G__33349 = cljs.core.count(c__4609__auto___33346);
var G__33350 = (0);
seq__32796_33333 = G__33347;
chunk__32797_33334 = G__33348;
count__32798_33335 = G__33349;
i__32799_33336 = G__33350;
continue;
} else {
var vec__32809_33351 = cljs.core.first(seq__32796_33345__$1);
var script_tag_33352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32809_33351,(0),null);
var script_body_33353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32809_33351,(1),null);
eval(script_body_33353);


var G__33354 = cljs.core.next(seq__32796_33345__$1);
var G__33355 = null;
var G__33356 = (0);
var G__33357 = (0);
seq__32796_33333 = G__33354;
chunk__32797_33334 = G__33355;
count__32798_33335 = G__33356;
i__32799_33336 = G__33357;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32812){
var vec__32816 = p__32812;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32816,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32816,(1),null);
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
var G__32821 = arguments.length;
switch (G__32821) {
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
var seq__32830 = cljs.core.seq(style_keys);
var chunk__32831 = null;
var count__32832 = (0);
var i__32833 = (0);
while(true){
if((i__32833 < count__32832)){
var it = chunk__32831.cljs$core$IIndexed$_nth$arity$2(null,i__32833);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33360 = seq__32830;
var G__33361 = chunk__32831;
var G__33362 = count__32832;
var G__33363 = (i__32833 + (1));
seq__32830 = G__33360;
chunk__32831 = G__33361;
count__32832 = G__33362;
i__32833 = G__33363;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32830);
if(temp__5735__auto__){
var seq__32830__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32830__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32830__$1);
var G__33365 = cljs.core.chunk_rest(seq__32830__$1);
var G__33366 = c__4609__auto__;
var G__33367 = cljs.core.count(c__4609__auto__);
var G__33368 = (0);
seq__32830 = G__33365;
chunk__32831 = G__33366;
count__32832 = G__33367;
i__32833 = G__33368;
continue;
} else {
var it = cljs.core.first(seq__32830__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33369 = cljs.core.next(seq__32830__$1);
var G__33370 = null;
var G__33371 = (0);
var G__33372 = (0);
seq__32830 = G__33369;
chunk__32831 = G__33370;
count__32832 = G__33371;
i__32833 = G__33372;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32835,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32842 = k32835;
var G__32842__$1 = (((G__32842 instanceof cljs.core.Keyword))?G__32842.fqn:null);
switch (G__32842__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32835,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32844){
var vec__32846 = p__32844;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32846,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32846,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32834){
var self__ = this;
var G__32834__$1 = this;
return (new cljs.core.RecordIter((0),G__32834__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32836,other32837){
var self__ = this;
var this32836__$1 = this;
return (((!((other32837 == null)))) && ((this32836__$1.constructor === other32837.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32836__$1.x,other32837.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32836__$1.y,other32837.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32836__$1.__extmap,other32837.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32834){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32855 = cljs.core.keyword_identical_QMARK_;
var expr__32856 = k__4447__auto__;
if(cljs.core.truth_((pred__32855.cljs$core$IFn$_invoke$arity$2 ? pred__32855.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32856) : pred__32855.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32856)))){
return (new shadow.dom.Coordinate(G__32834,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32855.cljs$core$IFn$_invoke$arity$2 ? pred__32855.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32856) : pred__32855.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32856)))){
return (new shadow.dom.Coordinate(self__.x,G__32834,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32834),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32834){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32834,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32841){
var extmap__4478__auto__ = (function (){var G__32868 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32841,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32841)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32868);
} else {
return G__32868;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32841),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32841),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32870,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32874 = k32870;
var G__32874__$1 = (((G__32874 instanceof cljs.core.Keyword))?G__32874.fqn:null);
switch (G__32874__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32870,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32876){
var vec__32877 = p__32876;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32877,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32877,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32869){
var self__ = this;
var G__32869__$1 = this;
return (new cljs.core.RecordIter((0),G__32869__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32871,other32872){
var self__ = this;
var this32871__$1 = this;
return (((!((other32872 == null)))) && ((this32871__$1.constructor === other32872.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32871__$1.w,other32872.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32871__$1.h,other32872.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32871__$1.__extmap,other32872.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32869){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32893 = cljs.core.keyword_identical_QMARK_;
var expr__32894 = k__4447__auto__;
if(cljs.core.truth_((pred__32893.cljs$core$IFn$_invoke$arity$2 ? pred__32893.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32894) : pred__32893.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32894)))){
return (new shadow.dom.Size(G__32869,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32893.cljs$core$IFn$_invoke$arity$2 ? pred__32893.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32894) : pred__32893.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32894)))){
return (new shadow.dom.Size(self__.w,G__32869,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32869),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32869){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32869,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32873){
var extmap__4478__auto__ = (function (){var G__32896 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32873,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32873)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32896);
} else {
return G__32896;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32873),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32873),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__33453 = (i + (1));
var G__33454 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33453;
ret = G__33454;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32919){
var vec__32920 = p__32919;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32920,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32920,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32928 = arguments.length;
switch (G__32928) {
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
var G__33469 = ps;
var G__33470 = (i + (1));
el__$1 = G__33469;
i = G__33470;
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
var vec__32953 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32953,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32953,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32953,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32957_33476 = cljs.core.seq(props);
var chunk__32958_33477 = null;
var count__32959_33478 = (0);
var i__32960_33479 = (0);
while(true){
if((i__32960_33479 < count__32959_33478)){
var vec__32967_33480 = chunk__32958_33477.cljs$core$IIndexed$_nth$arity$2(null,i__32960_33479);
var k_33481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32967_33480,(0),null);
var v_33482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32967_33480,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33481);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33481),v_33482);


var G__33485 = seq__32957_33476;
var G__33486 = chunk__32958_33477;
var G__33487 = count__32959_33478;
var G__33488 = (i__32960_33479 + (1));
seq__32957_33476 = G__33485;
chunk__32958_33477 = G__33486;
count__32959_33478 = G__33487;
i__32960_33479 = G__33488;
continue;
} else {
var temp__5735__auto___33489 = cljs.core.seq(seq__32957_33476);
if(temp__5735__auto___33489){
var seq__32957_33490__$1 = temp__5735__auto___33489;
if(cljs.core.chunked_seq_QMARK_(seq__32957_33490__$1)){
var c__4609__auto___33491 = cljs.core.chunk_first(seq__32957_33490__$1);
var G__33492 = cljs.core.chunk_rest(seq__32957_33490__$1);
var G__33493 = c__4609__auto___33491;
var G__33494 = cljs.core.count(c__4609__auto___33491);
var G__33495 = (0);
seq__32957_33476 = G__33492;
chunk__32958_33477 = G__33493;
count__32959_33478 = G__33494;
i__32960_33479 = G__33495;
continue;
} else {
var vec__32970_33496 = cljs.core.first(seq__32957_33490__$1);
var k_33497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32970_33496,(0),null);
var v_33498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32970_33496,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33497);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33497),v_33498);


var G__33499 = cljs.core.next(seq__32957_33490__$1);
var G__33500 = null;
var G__33501 = (0);
var G__33502 = (0);
seq__32957_33476 = G__33499;
chunk__32958_33477 = G__33500;
count__32959_33478 = G__33501;
i__32960_33479 = G__33502;
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
var vec__32977 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32977,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32977,(1),null);
var seq__32980_33504 = cljs.core.seq(node_children);
var chunk__32982_33505 = null;
var count__32983_33506 = (0);
var i__32984_33507 = (0);
while(true){
if((i__32984_33507 < count__32983_33506)){
var child_struct_33509 = chunk__32982_33505.cljs$core$IIndexed$_nth$arity$2(null,i__32984_33507);
if((!((child_struct_33509 == null)))){
if(typeof child_struct_33509 === 'string'){
var text_33510 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33510),child_struct_33509].join(''));
} else {
var children_33511 = shadow.dom.svg_node(child_struct_33509);
if(cljs.core.seq_QMARK_(children_33511)){
var seq__33008_33512 = cljs.core.seq(children_33511);
var chunk__33010_33513 = null;
var count__33011_33514 = (0);
var i__33012_33515 = (0);
while(true){
if((i__33012_33515 < count__33011_33514)){
var child_33517 = chunk__33010_33513.cljs$core$IIndexed$_nth$arity$2(null,i__33012_33515);
if(cljs.core.truth_(child_33517)){
node.appendChild(child_33517);


var G__33518 = seq__33008_33512;
var G__33519 = chunk__33010_33513;
var G__33520 = count__33011_33514;
var G__33521 = (i__33012_33515 + (1));
seq__33008_33512 = G__33518;
chunk__33010_33513 = G__33519;
count__33011_33514 = G__33520;
i__33012_33515 = G__33521;
continue;
} else {
var G__33523 = seq__33008_33512;
var G__33524 = chunk__33010_33513;
var G__33525 = count__33011_33514;
var G__33526 = (i__33012_33515 + (1));
seq__33008_33512 = G__33523;
chunk__33010_33513 = G__33524;
count__33011_33514 = G__33525;
i__33012_33515 = G__33526;
continue;
}
} else {
var temp__5735__auto___33527 = cljs.core.seq(seq__33008_33512);
if(temp__5735__auto___33527){
var seq__33008_33528__$1 = temp__5735__auto___33527;
if(cljs.core.chunked_seq_QMARK_(seq__33008_33528__$1)){
var c__4609__auto___33530 = cljs.core.chunk_first(seq__33008_33528__$1);
var G__33531 = cljs.core.chunk_rest(seq__33008_33528__$1);
var G__33532 = c__4609__auto___33530;
var G__33533 = cljs.core.count(c__4609__auto___33530);
var G__33534 = (0);
seq__33008_33512 = G__33531;
chunk__33010_33513 = G__33532;
count__33011_33514 = G__33533;
i__33012_33515 = G__33534;
continue;
} else {
var child_33535 = cljs.core.first(seq__33008_33528__$1);
if(cljs.core.truth_(child_33535)){
node.appendChild(child_33535);


var G__33536 = cljs.core.next(seq__33008_33528__$1);
var G__33537 = null;
var G__33538 = (0);
var G__33539 = (0);
seq__33008_33512 = G__33536;
chunk__33010_33513 = G__33537;
count__33011_33514 = G__33538;
i__33012_33515 = G__33539;
continue;
} else {
var G__33541 = cljs.core.next(seq__33008_33528__$1);
var G__33542 = null;
var G__33544 = (0);
var G__33545 = (0);
seq__33008_33512 = G__33541;
chunk__33010_33513 = G__33542;
count__33011_33514 = G__33544;
i__33012_33515 = G__33545;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33511);
}
}


var G__33552 = seq__32980_33504;
var G__33553 = chunk__32982_33505;
var G__33554 = count__32983_33506;
var G__33555 = (i__32984_33507 + (1));
seq__32980_33504 = G__33552;
chunk__32982_33505 = G__33553;
count__32983_33506 = G__33554;
i__32984_33507 = G__33555;
continue;
} else {
var G__33556 = seq__32980_33504;
var G__33557 = chunk__32982_33505;
var G__33558 = count__32983_33506;
var G__33559 = (i__32984_33507 + (1));
seq__32980_33504 = G__33556;
chunk__32982_33505 = G__33557;
count__32983_33506 = G__33558;
i__32984_33507 = G__33559;
continue;
}
} else {
var temp__5735__auto___33560 = cljs.core.seq(seq__32980_33504);
if(temp__5735__auto___33560){
var seq__32980_33561__$1 = temp__5735__auto___33560;
if(cljs.core.chunked_seq_QMARK_(seq__32980_33561__$1)){
var c__4609__auto___33562 = cljs.core.chunk_first(seq__32980_33561__$1);
var G__33563 = cljs.core.chunk_rest(seq__32980_33561__$1);
var G__33564 = c__4609__auto___33562;
var G__33565 = cljs.core.count(c__4609__auto___33562);
var G__33566 = (0);
seq__32980_33504 = G__33563;
chunk__32982_33505 = G__33564;
count__32983_33506 = G__33565;
i__32984_33507 = G__33566;
continue;
} else {
var child_struct_33567 = cljs.core.first(seq__32980_33561__$1);
if((!((child_struct_33567 == null)))){
if(typeof child_struct_33567 === 'string'){
var text_33568 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33568),child_struct_33567].join(''));
} else {
var children_33571 = shadow.dom.svg_node(child_struct_33567);
if(cljs.core.seq_QMARK_(children_33571)){
var seq__33018_33572 = cljs.core.seq(children_33571);
var chunk__33020_33573 = null;
var count__33021_33574 = (0);
var i__33022_33575 = (0);
while(true){
if((i__33022_33575 < count__33021_33574)){
var child_33576 = chunk__33020_33573.cljs$core$IIndexed$_nth$arity$2(null,i__33022_33575);
if(cljs.core.truth_(child_33576)){
node.appendChild(child_33576);


var G__33577 = seq__33018_33572;
var G__33578 = chunk__33020_33573;
var G__33579 = count__33021_33574;
var G__33580 = (i__33022_33575 + (1));
seq__33018_33572 = G__33577;
chunk__33020_33573 = G__33578;
count__33021_33574 = G__33579;
i__33022_33575 = G__33580;
continue;
} else {
var G__33581 = seq__33018_33572;
var G__33582 = chunk__33020_33573;
var G__33583 = count__33021_33574;
var G__33584 = (i__33022_33575 + (1));
seq__33018_33572 = G__33581;
chunk__33020_33573 = G__33582;
count__33021_33574 = G__33583;
i__33022_33575 = G__33584;
continue;
}
} else {
var temp__5735__auto___33586__$1 = cljs.core.seq(seq__33018_33572);
if(temp__5735__auto___33586__$1){
var seq__33018_33588__$1 = temp__5735__auto___33586__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33018_33588__$1)){
var c__4609__auto___33592 = cljs.core.chunk_first(seq__33018_33588__$1);
var G__33593 = cljs.core.chunk_rest(seq__33018_33588__$1);
var G__33594 = c__4609__auto___33592;
var G__33595 = cljs.core.count(c__4609__auto___33592);
var G__33596 = (0);
seq__33018_33572 = G__33593;
chunk__33020_33573 = G__33594;
count__33021_33574 = G__33595;
i__33022_33575 = G__33596;
continue;
} else {
var child_33598 = cljs.core.first(seq__33018_33588__$1);
if(cljs.core.truth_(child_33598)){
node.appendChild(child_33598);


var G__33599 = cljs.core.next(seq__33018_33588__$1);
var G__33600 = null;
var G__33601 = (0);
var G__33602 = (0);
seq__33018_33572 = G__33599;
chunk__33020_33573 = G__33600;
count__33021_33574 = G__33601;
i__33022_33575 = G__33602;
continue;
} else {
var G__33603 = cljs.core.next(seq__33018_33588__$1);
var G__33604 = null;
var G__33605 = (0);
var G__33606 = (0);
seq__33018_33572 = G__33603;
chunk__33020_33573 = G__33604;
count__33021_33574 = G__33605;
i__33022_33575 = G__33606;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33571);
}
}


var G__33608 = cljs.core.next(seq__32980_33561__$1);
var G__33609 = null;
var G__33610 = (0);
var G__33611 = (0);
seq__32980_33504 = G__33608;
chunk__32982_33505 = G__33609;
count__32983_33506 = G__33610;
i__32984_33507 = G__33611;
continue;
} else {
var G__33612 = cljs.core.next(seq__32980_33561__$1);
var G__33613 = null;
var G__33614 = (0);
var G__33615 = (0);
seq__32980_33504 = G__33612;
chunk__32982_33505 = G__33613;
count__32983_33506 = G__33614;
i__32984_33507 = G__33615;
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
var args__4795__auto__ = [];
var len__4789__auto___33620 = arguments.length;
var i__4790__auto___33621 = (0);
while(true){
if((i__4790__auto___33621 < len__4789__auto___33620)){
args__4795__auto__.push((arguments[i__4790__auto___33621]));

var G__33622 = (i__4790__auto___33621 + (1));
i__4790__auto___33621 = G__33622;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33034){
var G__33035 = cljs.core.first(seq33034);
var seq33034__$1 = cljs.core.next(seq33034);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33035,seq33034__$1);
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
var G__33056 = arguments.length;
switch (G__33056) {
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

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__30202__auto___33647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30203__auto__ = (function (){var switch__29868__auto__ = (function (state_33069){
var state_val_33070 = (state_33069[(1)]);
if((state_val_33070 === (1))){
var state_33069__$1 = state_33069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33069__$1,(2),once_or_cleanup);
} else {
if((state_val_33070 === (2))){
var inst_33066 = (state_33069[(2)]);
var inst_33067 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33069__$1 = (function (){var statearr_33075 = state_33069;
(statearr_33075[(7)] = inst_33066);

return statearr_33075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33069__$1,inst_33067);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29869__auto__ = null;
var shadow$dom$state_machine__29869__auto____0 = (function (){
var statearr_33077 = [null,null,null,null,null,null,null,null];
(statearr_33077[(0)] = shadow$dom$state_machine__29869__auto__);

(statearr_33077[(1)] = (1));

return statearr_33077;
});
var shadow$dom$state_machine__29869__auto____1 = (function (state_33069){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__(state_33069);
if(cljs.core.keyword_identical_QMARK_(result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e33078){if((e33078 instanceof Object)){
var ex__29872__auto__ = e33078;
var statearr_33079_33652 = state_33069;
(statearr_33079_33652[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33654 = state_33069;
state_33069 = G__33654;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
shadow$dom$state_machine__29869__auto__ = function(state_33069){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29869__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29869__auto____1.call(this,state_33069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29869__auto____0;
shadow$dom$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29869__auto____1;
return shadow$dom$state_machine__29869__auto__;
})()
})();
var state__30204__auto__ = (function (){var statearr_33080 = f__30203__auto__();
(statearr_33080[(6)] = c__30202__auto___33647);

return statearr_33080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30204__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
