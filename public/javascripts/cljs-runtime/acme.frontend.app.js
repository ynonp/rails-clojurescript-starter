goog.provide('acme.frontend.app');
goog.require('cljs.core');
goog.require('reagent.core');
acme.frontend.app.app = (function acme$frontend$app$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello ",gon.username], null)], null);
});
acme.frontend.app.stop = (function acme$frontend$app$stop(){
return console.log("Stopping...");
});
acme.frontend.app.start = (function acme$frontend$app$start(){
console.log("Starting...");

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [acme.frontend.app.app], null),document.getElementById("app"));
});
acme.frontend.app.init = (function acme$frontend$app$init(){
return acme.frontend.app.start();
});
goog.exportSymbol('acme.frontend.app.init', acme.frontend.app.init);

//# sourceMappingURL=acme.frontend.app.js.map
