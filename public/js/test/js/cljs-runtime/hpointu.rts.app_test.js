goog.provide('hpointu.rts.app_test');
hpointu.rts.app_test.test_obstacles = (function hpointu$rts$app_test$test_obstacles(){
return cljs.test.test_var(hpointu.rts.app_test.test_obstacles.cljs$lang$var);
});
hpointu.rts.app_test.test_obstacles.cljs$lang$test = (function (){
var world = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"w","w",354169001)], null)], null);
try{var values__9192__auto___46486 = (new cljs.core.List(null,world,(new cljs.core.List(null,(3),(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null));
var result__9193__auto___46487 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hpointu.rts.core.obstacle_QMARK_,values__9192__auto___46486);
if(cljs.core.truth_(result__9193__auto___46487)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),9,8,cljs.core.list(new cljs.core.Symbol("core","obstacle?","core/obstacle?",255765168,null),new cljs.core.Symbol(null,"world","world",1222238904,null),(3),(1)),8,cljs.core.cons(new cljs.core.Symbol("core","obstacle?","core/obstacle?",255765168,null),values__9192__auto___46486),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),9,8,cljs.core.list(new cljs.core.Symbol("core","obstacle?","core/obstacle?",255765168,null),new cljs.core.Symbol(null,"world","world",1222238904,null),(3),(1)),8,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("core","obstacle?","core/obstacle?",255765168,null),values__9192__auto___46486),null,(1),null)),(2),null)),null]));
}

}catch (e46479){var t__9229__auto___46488 = e46479;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),9,8,cljs.core.list(new cljs.core.Symbol("core","obstacle?","core/obstacle?",255765168,null),new cljs.core.Symbol(null,"world","world",1222238904,null),(3),(1)),8,t__9229__auto___46488,null]));
}
try{var values__9192__auto__ = (new cljs.core.List(null,hpointu.rts.core.obstacle_QMARK_(world,(1),(1)),null,(1),null));
var result__9193__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9192__auto__);
if(cljs.core.truth_(result__9193__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",41,new cljs.core.Keyword(null,"pass","pass",1574159993),9,9,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("core","obstacle?","core/obstacle?",255765168,null),new cljs.core.Symbol(null,"world","world",1222238904,null),(1),(1))),9,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__9192__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",41,new cljs.core.Keyword(null,"fail","fail",1706214930),9,9,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("core","obstacle?","core/obstacle?",255765168,null),new cljs.core.Symbol(null,"world","world",1222238904,null),(1),(1))),9,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__9192__auto__),null,(1),null)),(2),null)),null]));
}

return result__9193__auto__;
}catch (e46480){var t__9229__auto__ = e46480;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",41,new cljs.core.Keyword(null,"error","error",-978969032),9,9,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("core","obstacle?","core/obstacle?",255765168,null),new cljs.core.Symbol(null,"world","world",1222238904,null),(1),(1))),9,t__9229__auto__,null]));
}});

(hpointu.rts.app_test.test_obstacles.cljs$lang$var = new cljs.core.Var(function(){return hpointu.rts.app_test.test_obstacles;},new cljs.core.Symbol("hpointu.rts.app-test","test-obstacles","hpointu.rts.app-test/test-obstacles",362828850,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hpointu.rts.app-test","hpointu.rts.app-test",-961413434,null),new cljs.core.Symbol(null,"test-obstacles","test-obstacles",-1113975466,null),"hpointu/rts/app_test.cljs",24,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(hpointu.rts.app_test.test_obstacles)?hpointu.rts.app_test.test_obstacles.cljs$lang$test:null)])));
hpointu.rts.app_test.test_world_dimensions = (function hpointu$rts$app_test$test_world_dimensions(){
return cljs.test.test_var(hpointu.rts.app_test.test_world_dimensions.cljs$lang$var);
});
hpointu.rts.app_test.test_world_dimensions.cljs$lang$test = (function (){
var world = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001)], null)], null);
try{var values__9192__auto___46489 = (new cljs.core.List(null,(3),(new cljs.core.List(null,hpointu.rts.core.world_width(world),null,(1),null)),(2),null));
var result__9193__auto___46490 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9192__auto___46489);
if(cljs.core.truth_(result__9193__auto___46490)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),9,14,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("core","world-width","core/world-width",-890533981,null),new cljs.core.Symbol(null,"world","world",1222238904,null))),14,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9192__auto___46489),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),9,14,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("core","world-width","core/world-width",-890533981,null),new cljs.core.Symbol(null,"world","world",1222238904,null))),14,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9192__auto___46489),null,(1),null)),(2),null)),null]));
}

}catch (e46481){var t__9229__auto___46491 = e46481;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),9,14,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("core","world-width","core/world-width",-890533981,null),new cljs.core.Symbol(null,"world","world",1222238904,null))),14,t__9229__auto___46491,null]));
}
try{var values__9192__auto__ = (new cljs.core.List(null,(2),(new cljs.core.List(null,hpointu.rts.core.world_height(world),null,(1),null)),(2),null));
var result__9193__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9192__auto__);
if(cljs.core.truth_(result__9193__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),9,15,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("core","world-height","core/world-height",-490565439,null),new cljs.core.Symbol(null,"world","world",1222238904,null))),15,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9192__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),9,15,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("core","world-height","core/world-height",-490565439,null),new cljs.core.Symbol(null,"world","world",1222238904,null))),15,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9192__auto__),null,(1),null)),(2),null)),null]));
}

return result__9193__auto__;
}catch (e46482){var t__9229__auto__ = e46482;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),9,15,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("core","world-height","core/world-height",-490565439,null),new cljs.core.Symbol(null,"world","world",1222238904,null))),15,t__9229__auto__,null]));
}});

(hpointu.rts.app_test.test_world_dimensions.cljs$lang$var = new cljs.core.Var(function(){return hpointu.rts.app_test.test_world_dimensions;},new cljs.core.Symbol("hpointu.rts.app-test","test-world-dimensions","hpointu.rts.app-test/test-world-dimensions",-325931358,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hpointu.rts.app-test","hpointu.rts.app-test",-961413434,null),new cljs.core.Symbol(null,"test-world-dimensions","test-world-dimensions",-2067960002,null),"hpointu/rts/app_test.cljs",31,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(hpointu.rts.app_test.test_world_dimensions)?hpointu.rts.app_test.test_world_dimensions.cljs$lang$test:null)])));
hpointu.rts.app_test.world_template = (function hpointu$rts$app_test$world_template(){
return cljs.test.test_var(hpointu.rts.app_test.world_template.cljs$lang$var);
});
hpointu.rts.app_test.world_template.cljs$lang$test = (function (){
try{var values__9192__auto__ = (new cljs.core.List(null,hpointu.rts.core.__GT_world((4),(3)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001)], null)], null),null,(1),null)),(2),null));
var result__9193__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9192__auto__);
if(cljs.core.truth_(result__9193__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",26,new cljs.core.Keyword(null,"pass","pass",1574159993),7,18,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","->world","core/->world",-2041346825,null),(4),(3)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001)], null)], null)),21,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9192__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",26,new cljs.core.Keyword(null,"fail","fail",1706214930),7,18,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","->world","core/->world",-2041346825,null),(4),(3)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001)], null)], null)),21,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9192__auto__),null,(1),null)),(2),null)),null]));
}

return result__9193__auto__;
}catch (e46483){var t__9229__auto__ = e46483;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",26,new cljs.core.Keyword(null,"error","error",-978969032),7,18,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","->world","core/->world",-2041346825,null),(4),(3)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001)], null)], null)),21,t__9229__auto__,null]));
}});

(hpointu.rts.app_test.world_template.cljs$lang$var = new cljs.core.Var(function(){return hpointu.rts.app_test.world_template;},new cljs.core.Symbol("hpointu.rts.app-test","world-template","hpointu.rts.app-test/world-template",-1338634860,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hpointu.rts.app-test","hpointu.rts.app-test",-961413434,null),new cljs.core.Symbol(null,"world-template","world-template",407915768,null),"hpointu/rts/app_test.cljs",24,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(hpointu.rts.app_test.world_template)?hpointu.rts.app_test.world_template.cljs$lang$test:null)])));
hpointu.rts.app_test.in_world = (function hpointu$rts$app_test$in_world(){
return cljs.test.test_var(hpointu.rts.app_test.in_world.cljs$lang$var);
});
hpointu.rts.app_test.in_world.cljs$lang$test = (function (){
try{var values__9192__auto__ = (new cljs.core.List(null,hpointu.rts.core.__GT_world((4),(3)),(new cljs.core.List(null,(2),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null));
var result__9193__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hpointu.rts.core.in_world_QMARK_,values__9192__auto__);
if(cljs.core.truth_(result__9193__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",46,new cljs.core.Keyword(null,"pass","pass",1574159993),7,24,cljs.core.list(new cljs.core.Symbol("core","in-world?","core/in-world?",1469609024,null),cljs.core.list(new cljs.core.Symbol("core","->world","core/->world",-2041346825,null),(4),(3)),(2),(2)),24,cljs.core.cons(new cljs.core.Symbol("core","in-world?","core/in-world?",1469609024,null),values__9192__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",46,new cljs.core.Keyword(null,"fail","fail",1706214930),7,24,cljs.core.list(new cljs.core.Symbol("core","in-world?","core/in-world?",1469609024,null),cljs.core.list(new cljs.core.Symbol("core","->world","core/->world",-2041346825,null),(4),(3)),(2),(2)),24,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("core","in-world?","core/in-world?",1469609024,null),values__9192__auto__),null,(1),null)),(2),null)),null]));
}

return result__9193__auto__;
}catch (e46484){var t__9229__auto__ = e46484;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",46,new cljs.core.Keyword(null,"error","error",-978969032),7,24,cljs.core.list(new cljs.core.Symbol("core","in-world?","core/in-world?",1469609024,null),cljs.core.list(new cljs.core.Symbol("core","->world","core/->world",-2041346825,null),(4),(3)),(2),(2)),24,t__9229__auto__,null]));
}});

(hpointu.rts.app_test.in_world.cljs$lang$var = new cljs.core.Var(function(){return hpointu.rts.app_test.in_world;},new cljs.core.Symbol("hpointu.rts.app-test","in-world","hpointu.rts.app-test/in-world",1249810756,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hpointu.rts.app-test","hpointu.rts.app-test",-961413434,null),new cljs.core.Symbol(null,"in-world","in-world",-503031256,null),"hpointu/rts/app_test.cljs",18,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(hpointu.rts.app_test.in_world)?hpointu.rts.app_test.in_world.cljs$lang$test:null)])));
hpointu.rts.app_test.change_world_value = (function hpointu$rts$app_test$change_world_value(){
return cljs.test.test_var(hpointu.rts.app_test.change_world_value.cljs$lang$var);
});
hpointu.rts.app_test.change_world_value.cljs$lang$test = (function (){
try{var values__9192__auto__ = (new cljs.core.List(null,hpointu.rts.core.set_world_cell(hpointu.rts.core.__GT_world((2),(2)),(1),(0),new cljs.core.Keyword(null,"x","x",2099068185)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001)], null)], null),null,(1),null)),(2),null));
var result__9193__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9192__auto__);
if(cljs.core.truth_(result__9193__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",20,new cljs.core.Keyword(null,"pass","pass",1574159993),7,27,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","set-world-cell","core/set-world-cell",260967832,null),cljs.core.list(new cljs.core.Symbol("core","->world","core/->world",-2041346825,null),(2),(2)),(1),(0),new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001)], null)], null)),29,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9192__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",20,new cljs.core.Keyword(null,"fail","fail",1706214930),7,27,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","set-world-cell","core/set-world-cell",260967832,null),cljs.core.list(new cljs.core.Symbol("core","->world","core/->world",-2041346825,null),(2),(2)),(1),(0),new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001)], null)], null)),29,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9192__auto__),null,(1),null)),(2),null)),null]));
}

return result__9193__auto__;
}catch (e46485){var t__9229__auto__ = e46485;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["hpointu/rts/app_test.cljs",20,new cljs.core.Keyword(null,"error","error",-978969032),7,27,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","set-world-cell","core/set-world-cell",260967832,null),cljs.core.list(new cljs.core.Symbol("core","->world","core/->world",-2041346825,null),(2),(2)),(1),(0),new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001)], null)], null)),29,t__9229__auto__,null]));
}});

(hpointu.rts.app_test.change_world_value.cljs$lang$var = new cljs.core.Var(function(){return hpointu.rts.app_test.change_world_value;},new cljs.core.Symbol("hpointu.rts.app-test","change-world-value","hpointu.rts.app-test/change-world-value",1731570512,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hpointu.rts.app-test","hpointu.rts.app-test",-961413434,null),new cljs.core.Symbol(null,"change-world-value","change-world-value",-819205444,null),"hpointu/rts/app_test.cljs",28,1,26,26,cljs.core.List.EMPTY,null,(cljs.core.truth_(hpointu.rts.app_test.change_world_value)?hpointu.rts.app_test.change_world_value.cljs$lang$test:null)])));

//# sourceMappingURL=hpointu.rts.app_test.js.map
