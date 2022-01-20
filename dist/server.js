(()=>{var e={757:(e,r,n)=>{e.exports=n(671)},671:e=>{"use strict";e.exports=require("regenerator-runtime")}},r={};function n(t){var s=r[t];if(void 0!==s)return s.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";function e(e,r,n,t,s,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?r(u):Promise.resolve(u).then(t,s)}function r(r){return function(){var n=this,t=arguments;return new Promise((function(s,i){var o=r.apply(n,t);function c(r){e(o,s,i,c,u,"next",r)}function u(r){e(o,s,i,c,u,"throw",r)}c(void 0)}))}}var t=n(757),s=n.n(t);const i=require("react-dom/server");var o=n.n(i);const c=require("express");var u=n.n(c);const a=require("react-router-dom/server"),l=require("react-router-dom"),d=require("react/jsx-runtime"),p=function(){return(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(l.Link,{to:"/red",children:"Red"})}),(0,d.jsx)("li",{children:(0,d.jsx)(l.Link,{to:"/blue",children:"Blue"})}),(0,d.jsx)("li",{children:(0,d.jsx)(l.Link,{to:"/users",children:"Users"})})]})},f=require("react-router"),v=function(){return(0,d.jsx)("div",{className:"Red",children:"Red"})},h=function(){return(0,d.jsx)(v,{})},j=function(){return(0,d.jsx)("div",{className:"Blue",children:"Blue"})},x=function(){return(0,d.jsx)(j,{})},m=require("react"),y=require("react-redux"),b=function(e){var r=e.users;return r?(0,d.jsx)("div",{children:(0,d.jsx)("ul",{children:r.map((function(e){return(0,d.jsx)("li",{children:(0,d.jsx)(l.Link,{to:"/users/".concat(e.id),children:e.username})},e.id)}))})}):null};var g=(0,m.createContext)(null);const O=g;var S=function(e){var r=e.resolve,n=(0,m.useContext)(g);return n?(n.done||n.promise.push(Promise.resolve(r())),null):null};function w(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function P(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function k(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?P(Object(n),!0).forEach((function(r){w(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}const R=require("axios");var E=n.n(R),q="users/GET_USERS_PENDING",_="users/GET_USERS_SUCCESS",U="users/GET_USERS_FAILURE",D={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};const N=(0,y.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=r(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:q}),e.next=4,E().get("https://jsonplaceholder.typicode.com/users");case 4:n=e.sent,r({type:_,payload:n}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r((t=e.t0,{type:U,error:!0,payload:t})),e.t0;case 12:case"end":return e.stop()}var t}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}})((function(e){var r=e.users,n=e.getUsers;return(0,m.useEffect)((function(){r||n()}),[r,n]),(0,d.jsxs)("div",{children:[(0,d.jsx)(b,{users:r}),(0,d.jsx)(S,{resolve:n})]})})),T=function(){return(0,d.jsx)(N,{})},L=function(){return console.log("production","production"),(0,d.jsxs)("div",{className:"App",children:[(0,d.jsx)(p,{}),(0,d.jsx)("hr",{}),(0,d.jsxs)(f.Routes,{children:[(0,d.jsx)(f.Route,{path:"/red",element:(0,d.jsx)(h,{})}),(0,d.jsx)(f.Route,{path:"/blue",element:(0,d.jsx)(x,{})}),(0,d.jsx)(f.Route,{path:"/users/*",element:(0,d.jsx)(T,{})})]})]})},A=require("path");var C=n.n(A);const G=require("fs");var B=n.n(G);const J=require("redux"),M=(0,J.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case q:return k(k({},e),{},{loading:k(k({},e.loading),{},{users:!0})});case _:return k(k({},e),{},{loading:k(k({},e.loading),{},{users:!1}),users:r.payload.data});case U:return k(k({},e),{},{loading:k(k({},e.loading),{},{users:!1}),error:k(k({},e.error),{},{users:r.payload})});default:return e}}}),F=require("redux-thunk");var I=n.n(F),W=JSON.parse(B().readFileSync(C().resolve("./build/asset-manifest.json"),"utf8")),Y=Object.keys(W.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(W.files[e],'"><\/script>')})).join("");function $(e,r){return'<!doctype html>\n  <html lang="en">\n  <head>\n    <meta charset="utf-8"/>\n    <link rel="icon" href="/favicon.ico"/>\n    <meta name="viewport" content="width=device-width,initial-scale=1"/>\n    <meta name="theme-color" content="#000000"/>\n    <meta name="description" content="Web site created using create-react-app"/>\n    <link rel="apple-touch-icon" href="/logo192.png"/>\n    <link rel="manifest" href="/manifest.json"/>\n    <title>React App</title>\n    <script defer="defer" src="/static/js/main.534fcdce.js"><\/script>\n    <link href="'.concat(W.files["main.css"],'" rel="stylesheet">\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root">\n      ').concat(e,"\n    </div>\n    ").concat(r,'\n    <script src="').concat(W.files["runtime-main.js"],'"><\/script>\n    ').concat(Y,'\n    <script src="').concat(W.files["main.js"],'"><\/script>\n  </body>\n  </html>\n  ')}var z=u()(),H=function(){var e=r(s().mark((function e(r,n,t){var i,c,u,l,p,f,v;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={},c=(0,J.createStore)(M,(0,J.applyMiddleware)(I())),u={done:!1,promises:[]},l=(0,d.jsx)(O.Provider,{value:u,children:(0,d.jsx)(y.Provider,{store:c,children:(0,d.jsx)(a.StaticRouter,{location:r.url,context:i,children:(0,d.jsx)(L,{})})})}),o().renderToStaticMarkup(l),e.prev=5,e.next=8,Promise.all(u.promises);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(5),e.abrupt("return",n.status(500));case 13:u.done=!0,p=o().renderToString(l),f=JSON.stringify(c.getState()).replace(/</g,"\\u003c"),v="<script>__PRELOADED_STATE__ = ".concat(f,"<\/script>"),n.send($(p,v));case 18:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(r,n,t){return e.apply(this,arguments)}}(),K=u().static(C().resolve("./build"),{index:!1});z.use(K),z.use(H),z.listen(5001,(function(){console.log("Running on Port 5001...")}))})()})();