(function(e){function t(t){for(var n,s,i=t[0],o=t[1],u=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&f.push(c[s][0]),c[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var o=a[i];0!==c[o]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},c={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0560":function(e,t,a){},"1c24":function(e,t,a){"use strict";var n=a("a2ce"),c=a.n(n);c.a},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id="4678"},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),c=a.n(n);c.a},"8c37":function(e,t,a){"use strict";var n=a("8d70"),c=a.n(n);c.a},"8d70":function(e,t,a){},"9c0c":function(e,t,a){},a2ce:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("Selector"),a("Calendar"),a("Organizer")],1)},r=[],s=(a("4de4"),a("d4ec")),i=a("bee2"),o=a("262e"),u=a("2caf"),l=a("9ab4"),d=a("60a3"),f=a("c1df"),b=a.n(f),j=a("dba1"),v=function(){function e(){Object(s["a"])(this,e),this.date=new j["a"](b()())}return Object(i["a"])(e,[{key:"changeMonth",value:function(e){var t=this.date.value.add(e,"month");this.date.next(t)}},{key:"changeDate",value:function(e){this.date.next(e)}}]),e}(),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("i",{staticClass:"material-icons",on:{click:function(t){return e.go(-1)}}},[e._v("arrow_left")]),a("span",[e._v(" "+e._s(e._f("month")(e.dateX)))]),a("i",{staticClass:"material-icons",on:{click:function(t){return e.go(1)}}},[e._v("arrow_right")])])},p=[],m=function(e){Object(o["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.dateX=b()(),e}return Object(i["a"])(a,[{key:"go",value:function(e){this.dateService.changeMonth(e),console.log(this.dateService.date.value)}},{key:"created",value:function(){var e=this;console.log("created"),this.dateService.date.subscribe((function(t){console.log("changed: "+t),e.dateX=t.clone()}))}}]),a}(d["d"]);Object(l["a"])([Object(d["b"])("dateService")],m.prototype,"dateService",void 0),m=Object(l["a"])([d["a"]],m);var k=m,y=k,O=(a("8c37"),a("2877")),g=Object(O["a"])(y,h,p,!1,null,"2d078c9b",null),_=g.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.calendar?a("div",[a("table",[a("thead",[a("tr",e._l(e.calendar[0].days,(function(t,n){return a("th",{key:n},[e._v(e._s(t.value.format("ddd")))])})),0)]),a("tbody",e._l(e.calendar,(function(t,n){return a("tr",{key:n},e._l(t.days,(function(t,n){return a("td",{key:n,class:t.disabled&&"disabled",on:{click:function(a){return e.select(t.value)}}},[a("span",{class:[t.selected&&"selected",t.active&&"active"]},[e._v(e._s(t.value.format("DD")))])])})),0)})),0)])]):e._e()},w=[],z=(a("cb29"),a("d81d"),function(e){Object(o["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.calendar=[],e}return Object(i["a"])(a,[{key:"created",value:function(){this.dateService.date.subscribe(this.generate.bind(this))}},{key:"go",value:function(e){this.dateService.changeMonth(e)}},{key:"select",value:function(e){this.dateService.changeDate(e)}},{key:"generate",value:function(e){var t=this,a=e.clone().startOf("month").startOf("week"),n=e.clone().endOf("month").endOf("week"),c=a.clone().subtract(1,"day");this.calendar=[];while(c.isBefore(n,"day"))this.calendar.push({days:new Array(7).fill({value:b()(),active:!1,disabled:!1,selected:!1}).map((function(){var a=c.add(1,"day").clone(),n=b()().isSame(a,"day"),r=!e.isSame(a,"month"),s=t.dateService.date.value.isSame(a,"day");return{value:a,active:n,disabled:r,selected:s}}))})}}]),a}(d["d"]));Object(l["a"])([Object(d["b"])("dateService")],z.prototype,"dateService",void 0),z=Object(l["a"])([d["a"]],z);var M=z,Y=M,x=(a("e611"),Object(O["a"])(Y,S,w,!1,null,null,null)),D=x.exports,C=(a("b0c0"),a("17f5")),E=a("a748"),P=(a("4160"),a("4fad"),a("159b"),a("3835")),T=a("e9b9"),q=a("e297"),$=a("ec26"),N=function(){function e(){Object(s["a"])(this,e)}return Object(i["a"])(e,null,[{key:"create",value:function(e){console.log("creating local"),e.id=e.id?e.id:Object($["a"])();var t=q["get"](e.date);return t=t||{},t[e.id]=e,q["set"](e.date,t),Object(C["a"])(e)}},{key:"load",value:function(e){var t=q["get"](e.format("DD-MM-YYYY"));return t=t||{},new T["a"]((function(e){Object.entries(t).forEach((function(t){var a=Object(P["a"])(t,2),n=(a[0],a[1]);e.next(n)}))}))}},{key:"remove",value:function(e){var t=q["get"](e.date);return t&&(delete t[e.id],q["set"](e.date,t)),Object(C["a"])(e)}}]),e}(),X=(a("99af"),a("2317")),A=a.n(X),J={headers:{"Content-Type":"application/json"}},L=A.a.create(J),U=a("ebb6"),W=function(){function e(){Object(s["a"])(this,e)}return Object(i["a"])(e,null,[{key:"create",value:function(t){console.log("creating remote: "+"".concat(e.url,"/").concat(t.date,".json")),t.online=!0;var a=L.request({url:"".concat(e.url,"/").concat(t.date,".json"),method:"post",data:t});return a.pipe(Object(U["a"])((function(e){return t.online=!1,e.data})))}},{key:"load",value:function(t){return console.log("loading"),new T["a"]((function(a){L.request({url:"".concat(e.url,"/").concat(t.format("DD-MM-YYYY"),".json"),method:"get"}).subscribe((function(e){e.data&&Object.entries(e.data).forEach((function(e){var t=Object(P["a"])(e,2),n=t[0],c=t[1];c.id=n,a.next(c)}))}))}))}},{key:"remove",value:function(t){return L.request({url:"".concat(e.url,"/").concat(t.date,"/").concat(t.id,".json"),method:"delete"})}}]),e}();W.url="https://angular-calendar-1ba83.firebaseio.com/tasks";var B=a("a2ef"),F=function(){function e(){Object(s["a"])(this,e)}return Object(i["a"])(e,[{key:"create",value:function(e){return N.create(e).subscribe((function(t){W.create(e).subscribe((function(t){return console.log(t),N.remove(e),console.log("created remote ",t["name"]),e.id=t["name"],e.online=!0,N.create(e).subscribe(),{}}))})),Object(C["a"])(e)}},{key:"load",value:function(e){var t=W.load(e);return t.subscribe((function(e){N.create(e)})),Object(E["a"])(t,N.load(e)).pipe(Object(B["a"])((function(e){return console.log(e.id),e.id})))}},{key:"remove",value:function(e){return N.remove(e).subscribe(),W.remove(e).subscribe(),Object(C["a"])(e)}}]),e}(),R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("header",[e._v("Organizer: "),a("strong",[e._v(e._s(e._f("date")(e.dateService.date.value)))]),a("hr")]),a("main",[a("ul",e._l(e.tasks,(function(t,n){return a("li",{key:n,staticClass:"task"},[a("span",[a("strong",[e._v(e._s(n+1))]),e._v(" "+e._s(t.title)+" "),a("br"),e._v(" "+e._s(t.date)+" ")]),a("button",{staticClass:"btn btn-primary",on:{click:function(a){return e.remove(t)}}},[e._v("Remove")])])})),0)]),a("footer",[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",required:""},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),a("button",{class:["btn","btn-primary","btn-block"],attrs:{disabled:e.invalid}},[e._v("Add")])])])])},G=[],H=a("d792"),I=function(e){Object(o["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.tasks=[],e.title="",e.invalid=!0,e}return Object(i["a"])(a,[{key:"created",value:function(){var e=this;this.dateService.date.pipe(Object(H["a"])((function(t){return e.tasks=[],e.taskService.load(t)}))).subscribe((function(t){console.log("subscriptor"),e.tasks.push(t)})),this.$on("offline",(function(){console.log("offline")}))}},{key:"submit",value:function(){var e=this,t={title:this.title,date:this.dateService.date.value.format("DD-MM-YYYY"),id:"",online:!1,version:0};this.taskService.create(t).subscribe((function(){e.tasks.push(t),e.title="",e.invalid=!0}),(function(e){console.error(e)}))}},{key:"remove",value:function(e){var t=this;this.taskService.remove(e).subscribe((function(){t.tasks=t.tasks.filter((function(t){return t.id!==e.id}))}),(function(e){return console.error(e)}))}},{key:"checkTitle",value:function(e){this.invalid=!e}}]),a}(d["d"]);Object(l["a"])([Object(d["b"])("dateService")],I.prototype,"dateService",void 0),Object(l["a"])([Object(d["b"])("taskService")],I.prototype,"taskService",void 0),Object(l["a"])([Object(d["e"])("title")],I.prototype,"checkTitle",null),I=Object(l["a"])([d["a"]],I);var K=I,Q=K,V=(a("1c24"),Object(O["a"])(Q,R,G,!1,null,null,null)),Z=V.exports;d["d"].filter("month",(function(e){return e.format("MMMM YYYY")})),d["d"].filter("date",(function(e){return e.format("DD.MM.YYYY")}));var ee=function(e){Object(o["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.dataService=new v,e.taskService=new F,e}return Object(i["a"])(a,[{key:"created",value:function(){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./service-worker.js").then((function(e){console.log("Service worker registered.",e)}))}))}}]),a}(d["d"]);Object(l["a"])([Object(d["c"])("dateService")],ee.prototype,"dataService",void 0),Object(l["a"])([Object(d["c"])("taskService")],ee.prototype,"taskService",void 0),ee=Object(l["a"])([Object(d["a"])({components:{Selector:_,Calendar:D,Organizer:Z}})],ee);var te=ee,ae=te,ne=(a("5c0b"),Object(O["a"])(ae,c,r,!1,null,null,null)),ce=ne.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(ce)}}).$mount("#app")},e611:function(e,t,a){"use strict";var n=a("0560"),c=a.n(n);c.a}});
//# sourceMappingURL=app.db7fb236.js.map