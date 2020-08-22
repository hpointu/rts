goog.provide('hpointu.rts.input');
if((typeof hpointu !== 'undefined') && (typeof hpointu.rts !== 'undefined') && (typeof hpointu.rts.input !== 'undefined') && (typeof hpointu.rts.input.keymap !== 'undefined')){
} else {
hpointu.rts.input.keymap = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof hpointu !== 'undefined') && (typeof hpointu.rts !== 'undefined') && (typeof hpointu.rts.input !== 'undefined') && (typeof hpointu.rts.input.mouse !== 'undefined')){
} else {
hpointu.rts.input.mouse = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"left","left",-399115937),false,new cljs.core.Keyword(null,"right","right",-452581833),false], null));
}
hpointu.rts.input.key_pressed_QMARK_ = (function hpointu$rts$input$key_pressed_QMARK_(code){
return cljs.core.contains_QMARK_(cljs.core.deref(hpointu.rts.input.keymap),code);
});
hpointu.rts.input.mouse_pressed_QMARK_ = (function hpointu$rts$input$mouse_pressed_QMARK_(code){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hpointu.rts.input.mouse),code);
});
hpointu.rts.input.mouse_pos = (function hpointu$rts$input$mouse_pos(elem){
var rect = elem.getBoundingClientRect();
var map__61282 = cljs.core.deref(hpointu.rts.input.mouse);
var map__61282__$1 = (((((!((map__61282 == null))))?(((((map__61282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61282):map__61282);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61282__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61282__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - rect.left),(y - rect.top)], null);
});
hpointu.rts.input.mouseup = (function hpointu$rts$input$mouseup(e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),e.button)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hpointu.rts.input.mouse,cljs.core.assoc,new cljs.core.Keyword(null,"left","left",-399115937),false);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hpointu.rts.input.mouse,cljs.core.assoc,new cljs.core.Keyword(null,"right","right",-452581833),false);
} else {
return null;
}
});
hpointu.rts.input.mousedown = (function hpointu$rts$input$mousedown(e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),e.button)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hpointu.rts.input.mouse,cljs.core.assoc,new cljs.core.Keyword(null,"left","left",-399115937),true);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hpointu.rts.input.mouse,cljs.core.assoc,new cljs.core.Keyword(null,"right","right",-452581833),true);
} else {
return null;
}
});
hpointu.rts.input.init_BANG_ = (function hpointu$rts$input$init_BANG_(){
document.addEventListener("keydown",(function (p1__61284_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hpointu.rts.input.keymap,cljs.core.conj,p1__61284_SHARP_.code);
}));

document.addEventListener("keyup",(function (p1__61285_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hpointu.rts.input.keymap,cljs.core.disj,p1__61285_SHARP_.code);
}));

document.addEventListener("mouseup",hpointu.rts.input.mouseup);

document.addEventListener("mousedown",hpointu.rts.input.mousedown);

return document.addEventListener("mousemove",(function (p1__61286_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(hpointu.rts.input.mouse,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),p1__61286_SHARP_.clientX,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),p1__61286_SHARP_.clientY], 0));
}));
});

//# sourceMappingURL=hpointu.rts.input.js.map
