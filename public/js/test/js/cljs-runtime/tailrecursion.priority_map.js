goog.provide('tailrecursion.priority_map');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.item__GT_priority);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item = cljs.core.first(cljs.core.val(f));
if(cljs.core.truth_(self__.keyfn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key(f)], null);
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item_set = cljs.core.val(f);
var item = cljs.core.first(item_set);
var priority_key = cljs.core.key(f);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4529__auto__ = (function tailrecursion$priority_map$iter__27087(s__27088){
return (new cljs.core.LazySeq(null,(function (){
var s__27088__$1 = s__27088;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27088__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__27093 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27093,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27093,(1),null);
var iterys__4525__auto__ = ((function (s__27088__$1,vec__27093,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__27087_$_iter__27089(s__27090){
return (new cljs.core.LazySeq(null,((function (s__27088__$1,vec__27093,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1){
return (function (){
var s__27090__$1 = s__27090;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27090__$1);
if(temp__5735__auto____$1){
var s__27090__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27090__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27090__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27092 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27091 = (0);
while(true){
if((i__27091 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__27091);
cljs.core.chunk_append(b__27092,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__27174 = (i__27091 + (1));
i__27091 = G__27174;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27092),tailrecursion$priority_map$iter__27087_$_iter__27089(cljs.core.chunk_rest(s__27090__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27092),null);
}
} else {
var item = cljs.core.first(s__27090__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__27087_$_iter__27089(cljs.core.rest(s__27090__$2)));
}
} else {
return null;
}
break;
}
});})(s__27088__$1,vec__27093,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1))
,null,null));
});})(s__27088__$1,vec__27093,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(item_set));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,tailrecursion$priority_map$iter__27087(cljs.core.rest(s__27088__$1)));
} else {
var G__27175 = cljs.core.rest(s__27088__$1);
s__27088__$1 = G__27175;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq((function (){var iter__4529__auto__ = (function tailrecursion$priority_map$iter__27096(s__27097){
return (new cljs.core.LazySeq(null,(function (){
var s__27097__$1 = s__27097;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27097__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__27102 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27102,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27102,(1),null);
var iterys__4525__auto__ = ((function (s__27097__$1,vec__27102,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__27096_$_iter__27098(s__27099){
return (new cljs.core.LazySeq(null,((function (s__27097__$1,vec__27102,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1){
return (function (){
var s__27099__$1 = s__27099;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27099__$1);
if(temp__5735__auto____$1){
var s__27099__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27099__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27099__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27101 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27100 = (0);
while(true){
if((i__27100 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__27100);
cljs.core.chunk_append(b__27101,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__27176 = (i__27100 + (1));
i__27100 = G__27176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27101),tailrecursion$priority_map$iter__27096_$_iter__27098(cljs.core.chunk_rest(s__27099__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27101),null);
}
} else {
var item = cljs.core.first(s__27099__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__27096_$_iter__27098(cljs.core.rest(s__27099__$2)));
}
} else {
return null;
}
break;
}
});})(s__27097__$1,vec__27102,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1))
,null,null));
});})(s__27097__$1,vec__27102,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(item_set));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,tailrecursion$priority_map$iter__27096(cljs.core.rest(s__27097__$1)));
} else {
var G__27177 = cljs.core.rest(s__27097__$1);
s__27097__$1 = G__27177;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(self__.item__GT_priority,other);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)) : self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var item_set = (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(priority_key) : self__.priority__GT_set_of_items.call(null,priority_key));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__5733__auto__)){
var current_priority = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority)){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var current_priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(current_priority) : self__.keyfn.call(null,current_priority));
var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4529__auto__ = (function tailrecursion$priority_map$iter__27105(s__27106){
return (new cljs.core.LazySeq(null,(function (){
var s__27106__$1 = s__27106;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27106__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__27111 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27111,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27111,(1),null);
var iterys__4525__auto__ = ((function (s__27106__$1,vec__27111,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__27105_$_iter__27107(s__27108){
return (new cljs.core.LazySeq(null,((function (s__27106__$1,vec__27111,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1){
return (function (){
var s__27108__$1 = s__27108;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27108__$1);
if(temp__5735__auto____$1){
var s__27108__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27108__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27108__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27110 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27109 = (0);
while(true){
if((i__27109 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__27109);
cljs.core.chunk_append(b__27110,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__27178 = (i__27109 + (1));
i__27109 = G__27178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27110),tailrecursion$priority_map$iter__27105_$_iter__27107(cljs.core.chunk_rest(s__27108__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27110),null);
}
} else {
var item = cljs.core.first(s__27108__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__27105_$_iter__27107(cljs.core.rest(s__27108__$2)));
}
} else {
return null;
}
break;
}
});})(s__27106__$1,vec__27111,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1))
,null,null));
});})(s__27106__$1,vec__27111,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(item_set));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,tailrecursion$priority_map$iter__27105(cljs.core.rest(s__27106__$1)));
} else {
var G__27179 = cljs.core.rest(s__27106__$1);
s__27106__$1 = G__27179;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq((function (){var iter__4529__auto__ = (function tailrecursion$priority_map$iter__27114(s__27115){
return (new cljs.core.LazySeq(null,(function (){
var s__27115__$1 = s__27115;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27115__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__27120 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27120,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27120,(1),null);
var iterys__4525__auto__ = ((function (s__27115__$1,vec__27120,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__27114_$_iter__27116(s__27117){
return (new cljs.core.LazySeq(null,((function (s__27115__$1,vec__27120,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1){
return (function (){
var s__27117__$1 = s__27117;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27117__$1);
if(temp__5735__auto____$1){
var s__27117__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27117__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27117__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27119 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27118 = (0);
while(true){
if((i__27118 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__27118);
cljs.core.chunk_append(b__27119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__27180 = (i__27118 + (1));
i__27118 = G__27180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27119),tailrecursion$priority_map$iter__27114_$_iter__27116(cljs.core.chunk_rest(s__27117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27119),null);
}
} else {
var item = cljs.core.first(s__27117__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__27114_$_iter__27116(cljs.core.rest(s__27117__$2)));
}
} else {
return null;
}
break;
}
});})(s__27115__$1,vec__27120,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1))
,null,null));
});})(s__27115__$1,vec__27120,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(item_set));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,tailrecursion$priority_map$iter__27114(cljs.core.rest(s__27115__$1)));
} else {
var G__27181 = cljs.core.rest(s__27115__$1);
s__27115__$1 = G__27181;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(self__.priority__GT_set_of_items);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__27182 = null;
var G__27182__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__27182__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__27182 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__27182__2.call(this,self__,item);
case 3:
return G__27182__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__27182.cljs$core$IFn$_invoke$arity$2 = G__27182__2;
G__27182.cljs$core$IFn$_invoke$arity$3 = G__27182__3;
return G__27182;
})()
);

(tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args27071){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args27071)));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var fexpr__27123 = (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq);
return (fexpr__27123.cljs$core$IFn$_invoke$arity$1 ? fexpr__27123.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__27123.call(null,this$__$1));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4529__auto__ = (function tailrecursion$priority_map$iter__27124(s__27125){
return (new cljs.core.LazySeq(null,(function (){
var s__27125__$1 = s__27125;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27125__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__27130 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27130,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27130,(1),null);
var iterys__4525__auto__ = ((function (s__27125__$1,vec__27130,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__27124_$_iter__27126(s__27127){
return (new cljs.core.LazySeq(null,((function (s__27125__$1,vec__27130,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1){
return (function (){
var s__27127__$1 = s__27127;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27127__$1);
if(temp__5735__auto____$1){
var s__27127__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27127__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27127__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27129 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27128 = (0);
while(true){
if((i__27128 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__27128);
cljs.core.chunk_append(b__27129,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__27183 = (i__27128 + (1));
i__27128 = G__27183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27129),tailrecursion$priority_map$iter__27124_$_iter__27126(cljs.core.chunk_rest(s__27127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27129),null);
}
} else {
var item = cljs.core.first(s__27127__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__27124_$_iter__27126(cljs.core.rest(s__27127__$2)));
}
} else {
return null;
}
break;
}
});})(s__27125__$1,vec__27130,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1))
,null,null));
});})(s__27125__$1,vec__27130,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(item_set));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,tailrecursion$priority_map$iter__27124(cljs.core.rest(s__27125__$1)));
} else {
var G__27184 = cljs.core.rest(s__27125__$1);
s__27125__$1 = G__27184;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sets);
})());
} else {
return cljs.core.seq((function (){var iter__4529__auto__ = (function tailrecursion$priority_map$iter__27133(s__27134){
return (new cljs.core.LazySeq(null,(function (){
var s__27134__$1 = s__27134;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27134__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__27139 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27139,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27139,(1),null);
var iterys__4525__auto__ = ((function (s__27134__$1,vec__27139,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__27133_$_iter__27135(s__27136){
return (new cljs.core.LazySeq(null,((function (s__27134__$1,vec__27139,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1){
return (function (){
var s__27136__$1 = s__27136;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27136__$1);
if(temp__5735__auto____$1){
var s__27136__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27136__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27136__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27138 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27137 = (0);
while(true){
if((i__27137 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__27137);
cljs.core.chunk_append(b__27138,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__27185 = (i__27137 + (1));
i__27137 = G__27185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27138),tailrecursion$priority_map$iter__27133_$_iter__27135(cljs.core.chunk_rest(s__27136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27138),null);
}
} else {
var item = cljs.core.first(s__27136__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__27133_$_iter__27135(cljs.core.rest(s__27136__$2)));
}
} else {
return null;
}
break;
}
});})(s__27134__$1,vec__27139,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1))
,null,null));
});})(s__27134__$1,vec__27139,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(item_set));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,tailrecursion$priority_map$iter__27133(cljs.core.rest(s__27134__$1)));
} else {
var G__27186 = cljs.core.rest(s__27134__$1);
s__27134__$1 = G__27186;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sets);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
var G__27142 = cljs.core.val(entry);
return (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(G__27142) : self__.keyfn.call(null,G__27142));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
}));

(tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true);

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap");

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
}));

/**
 * Positional factory function for tailrecursion.priority-map/PersistentPriorityMap.
 */
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

(tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null)));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var G__27144 = arguments.length;
switch (G__27144) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$lang$maxFixedArity = 2);

tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
throw Error("Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27188 = arguments.length;
var i__4737__auto___27189 = (0);
while(true){
if((i__4737__auto___27189 < len__4736__auto___27188)){
args__4742__auto__.push((arguments[i__4737__auto___27189]));

var G__27190 = (i__4737__auto___27189 + (1));
i__4737__auto___27189 = G__27190;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__27191 = cljs.core.nnext(in$);
var G__27192 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__27191;
out = G__27192;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq27145){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27145));
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27193 = arguments.length;
var i__4737__auto___27194 = (0);
while(true){
if((i__4737__auto___27194 < len__4736__auto___27193)){
args__4742__auto__.push((arguments[i__4737__auto___27194]));

var G__27195 = (i__4737__auto___27194 + (1));
i__4737__auto___27194 = G__27195;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_by(comparator);
while(true){
if(in$){
var G__27196 = cljs.core.nnext(in$);
var G__27197 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__27196;
out = G__27197;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq27146){
var G__27147 = cljs.core.first(seq27146);
var seq27146__$1 = cljs.core.next(seq27146);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27147,seq27146__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27198 = arguments.length;
var i__4737__auto___27199 = (0);
while(true){
if((i__4737__auto___27199 < len__4736__auto___27198)){
args__4742__auto__.push((arguments[i__4737__auto___27199]));

var G__27200 = (i__4737__auto___27199 + (1));
i__4737__auto___27199 = G__27200;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1(keyfn);
while(true){
if(in$){
var G__27201 = cljs.core.nnext(in$);
var G__27202 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__27201;
out = G__27202;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq27148){
var G__27149 = cljs.core.first(seq27148);
var seq27148__$1 = cljs.core.next(seq27148);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27149,seq27148__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27203 = arguments.length;
var i__4737__auto___27204 = (0);
while(true){
if((i__4737__auto___27204 < len__4736__auto___27203)){
args__4742__auto__.push((arguments[i__4737__auto___27204]));

var G__27205 = (i__4737__auto___27204 + (1));
i__4737__auto___27204 = G__27205;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2(keyfn,comparator);
while(true){
if(in$){
var G__27206 = cljs.core.nnext(in$);
var G__27207 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__27206;
out = G__27207;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq27150){
var G__27151 = cljs.core.first(seq27150);
var seq27150__$1 = cljs.core.next(seq27150);
var G__27152 = cljs.core.first(seq27150__$1);
var seq27150__$2 = cljs.core.next(seq27150__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27151,G__27152,seq27150__$2);
}));


//# sourceMappingURL=tailrecursion.priority_map.js.map
