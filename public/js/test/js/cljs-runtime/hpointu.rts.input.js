goog.provide('hpointu.rts.input');
hpointu.rts.input.keymap = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
hpointu.rts.input.mouse = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623),false], null));
hpointu.rts.input.key_pressed_QMARK_ = (function hpointu$rts$input$key_pressed_QMARK_(code){
return cljs.core.contains_QMARK_(cljs.core.deref(hpointu.rts.input.keymap),code);
});
hpointu.rts.input.mouse_pos = (function hpointu$rts$input$mouse_pos(elem){
var rect = elem.getBoundingClientRect();
var map__45821 = cljs.core.deref(hpointu.rts.input.mouse);
var map__45821__$1 = (((((!((map__45821 == null))))?(((((map__45821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45821):map__45821);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45821__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45821__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - rect.left),(y - rect.top)], null);
});
hpointu.rts.input.init_BANG_ = (function hpointu$rts$input$init_BANG_(){
document.addEventListener("keydown",(function (p1__45823_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hpointu.rts.input.keymap,cljs.core.conj,p1__45823_SHARP_.code);
}));

document.addEventListener("keyup",(function (p1__45824_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hpointu.rts.input.keymap,cljs.core.disj,p1__45824_SHARP_.code);
}));

return document.addEventListener("mousemove",(function (p1__45825_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(hpointu.rts.input.mouse,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),p1__45825_SHARP_.clientX,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),p1__45825_SHARP_.clientY], 0));
}));
});

//# sourceMappingURL=hpointu.rts.input.js.map
