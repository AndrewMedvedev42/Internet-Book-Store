(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{40:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),s=c(16),a=c.n(s),j=c(6),r=c(3),l=c(19),o=c(18),b=c(30),d=c(31),O=(c(40),c(1)),u=function(){var e=Object(r.e)().pathname.split("/")[1],t=32;return Object(O.jsx)("header",{className:"navigation-bar",children:Object(O.jsxs)("nav",{children:[Object(O.jsx)(j.b,{to:"/",className:""===e?"selected-tab":"Link",children:Object(O.jsx)(o.a,{size:t})}),Object(O.jsx)(j.b,{to:"/delivery",className:"delivery"===e?"selected-tab":"Link",children:Object(O.jsx)(l.b,{size:t})}),Object(O.jsx)(j.b,{to:"/discount",className:"discount"===e?"selected-tab":"Link",children:Object(O.jsx)(l.a,{size:t})}),Object(O.jsx)(j.b,{to:"/collection",className:"collection"===e?"selected-tab":"Link",children:Object(O.jsx)(b.a,{size:t})}),Object(O.jsx)(j.b,{to:"/contacts",className:"contacts"===e?"selected-tab":"Link",children:Object(O.jsx)(o.b,{size:t})}),Object(O.jsx)(j.b,{to:"/basket",className:"basket"===e?"selected-tab":"Link",children:Object(O.jsx)(d.a,{size:t})})]})})},h=c(7),x=(c(42),function(e){var t=e.data,c=t.volumeInfo,n=t.saleInfo;return Object(O.jsxs)("li",{className:"book-card",children:[c.imageLinks?Object(O.jsx)("img",{src:"".concat(c.imageLinks.smallThumbnail),alt:c.title}):Object(O.jsx)("img",{src:"#",alt:"img"}),Object(O.jsx)("h3",{children:c.title}),"NOT_FOR_SALE"===n.saleability||"FREE"===n.saleability?Object(O.jsx)("p",{children:n.saleability.split("_").join(" ")}):Object(O.jsx)("p",{children:n.listPrice.amount+" "+n.listPrice.currencyCode})]})}),m=function(){var e=Object(n.useState)("christmas"),t=Object(h.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(),a=Object(h.a)(s,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){c?fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(c)).then((function(e){return e.json()})).then((function(e){l(e.items)})):i("christmas")}),[c]),Object(O.jsx)("section",{className:"catalog-section",children:Object(O.jsxs)("section",{className:"search-section",children:[Object(O.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)}}),Object(O.jsx)("ul",{children:r&&r.map((function(e){return Object(O.jsx)(j.b,{to:"/book/".concat(e.id),children:Object(O.jsx)(x,{data:e})},e.id)}))})]})})},p=function(){return Object(O.jsxs)("section",{children:[Object(O.jsx)("h2",{children:"Our Partners"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"partner"}),Object(O.jsx)("li",{children:"partner"}),Object(O.jsx)("li",{children:"partner"})]})]})},f=function(){return Object(O.jsxs)("section",{children:[Object(O.jsx)("h2",{children:"About us"}),Object(O.jsxs)("article",{children:[Object(O.jsx)("p",{}),Object(O.jsx)("p",{})]})]})},g=function(){return Object(O.jsxs)("section",{className:"main-container",children:[Object(O.jsx)(m,{}),Object(O.jsx)(p,{}),Object(O.jsx)(f,{})]})},v=(c(43),function(){return Object(O.jsxs)("section",{className:"main-container",children:[Object(O.jsx)("h2",{children:"Delivery"}),Object(O.jsxs)("section",{className:"section white-container",children:[Object(O.jsxs)("article",{className:"delivery-article",children:[Object(O.jsx)("h3",{children:"Title"}),Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "})]}),Object(O.jsxs)("article",{className:"delivery-article",children:[Object(O.jsx)("h3",{children:"Title"}),Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "})]}),Object(O.jsx)("article",{children:Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "})})]})]})}),k=function(){return Object(O.jsxs)("section",{className:"main-container",children:[Object(O.jsxs)("section",{children:[Object(O.jsx)("input",{type:"text"}),Object(O.jsx)("button",{children:"Row"}),Object(O.jsx)("button",{children:"Card"})]}),Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:"Book"})})]})},y=function(){return Object(O.jsxs)("section",{className:"main-container",children:[Object(O.jsx)("h2",{children:"Delivery"}),Object(O.jsxs)("section",{children:[Object(O.jsx)("aside",{children:"contacts"}),Object(O.jsx)("div",{children:"Map"})]}),Object(O.jsx)("article",{children:Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "})}),Object(O.jsxs)("aside",{children:[Object(O.jsx)("input",{type:"text"}),Object(O.jsx)("input",{type:"text"}),Object(O.jsx)("input",{type:"text"})]})]})},N=c(8),_=c(13),L=c.n(_),w=c(21),E=c(33),I=c.n(E),T=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(),a=Object(h.a)(s,2),j=a[0],l=a[1],o=Object(r.e)().pathname.split("/")[2],b=Object(N.b)(),d=function(e){var t;i(!0),b((t=e,function(){var e=Object(w.a)(L.a.mark((function e(c){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://www.googleapis.com/books/v1/volumes/".concat(t));case 2:n=e.sent,c({type:"ADD_ITEM_TO_LIST",payload:{item:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))};Object(n.useEffect)((function(){fetch("https://www.googleapis.com/books/v1/volumes/".concat(o)).then((function(e){return e.json()})).then((function(e){l(e)}))}),[]);var u=Object(N.c)((function(e){return e.basket_list.list}));return Object(n.useEffect)((function(){j&&u.some((function(e){return e.data.id===j.id}))&&i(!0)}),[j]),console.log(c),Object(O.jsx)("section",{className:"main-container",children:j&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("article",{children:[Object(O.jsx)("img",{src:j.volumeInfo.imageLinks.large,alt:j.volumeInfo.title}),c?Object(O.jsx)("button",{disabled:c,children:"In a Basket"}):Object(O.jsx)("button",{onClick:function(){d(j.id)},children:"Basket"})]}),Object(O.jsxs)("article",{children:[Object(O.jsx)("h3",{children:j.volumeInfo.title}),Object(O.jsx)("p",{children:j.volumeInfo.description})]})]})})},S=function(){var e=Object(N.c)((function(e){return e.basket_list.list}));console.log(e);var t=Object(N.b)(),c=function(e){var c;t((c=e,function(){var e=Object(w.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"REMOVE_ITEM_FROM_LIST",payload:{item:c}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))};return Object(O.jsx)("section",{className:"main-container",children:e&&e.map((function(e){return Object(O.jsxs)("article",{children:[Object(O.jsx)(x,{data:e.data}),Object(O.jsx)("button",{onClick:function(){c(e.data.id)},children:"X"})]})}))})},M=function(){return Object(O.jsxs)("section",{className:"footer",children:[Object(O.jsxs)("article",{className:"navigation-section",children:[Object(O.jsxs)("article",{children:[Object(O.jsx)("h4",{children:"Logo"}),Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:"partner"})})]}),Object(O.jsxs)("article",{children:[Object(O.jsx)("h4",{children:"About Us"}),Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:"partner"})})]}),Object(O.jsxs)("article",{children:[Object(O.jsx)("h4",{children:"Contacts"}),Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:"partner"})})]}),Object(O.jsxs)("article",{children:[Object(O.jsx)("h4",{children:"Social Netwoks"}),Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:"partner"})})]})]}),Object(O.jsx)("article",{className:"copyright",children:Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})};c(69),c(70),c(71);var C=function(){return Object(O.jsxs)(j.a,{children:[Object(O.jsxs)("section",{className:"router",children:[Object(O.jsx)(u,{}),Object(O.jsx)(r.c,{children:Object(O.jsx)(r.a,{path:"/",element:Object(O.jsx)(g,{})})}),Object(O.jsx)(r.c,{children:Object(O.jsx)(r.a,{path:"/discount",element:Object(O.jsx)(k,{})})}),Object(O.jsx)(r.c,{children:Object(O.jsx)(r.a,{path:"/delivery",element:Object(O.jsx)(v,{})})}),Object(O.jsx)(r.c,{children:Object(O.jsx)(r.a,{path:"/contacts",element:Object(O.jsx)(y,{})})}),Object(O.jsx)(r.c,{children:Object(O.jsx)(r.a,{path:"/basket",element:Object(O.jsx)(S,{})})}),Object(O.jsx)(r.c,{children:Object(O.jsx)(r.a,{path:"/payment",element:Object(O.jsx)(y,{})})}),Object(O.jsx)(r.c,{children:Object(O.jsx)(r.a,{path:"/book/:id",element:Object(O.jsx)(T,{})})})]}),Object(O.jsx)(M,{})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))},F=c(35),R=c(11),q={list:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM_TO_LIST":return Object(R.a)(Object(R.a)({},e),{},{list:[].concat(Object(F.a)(e.list),[t.payload.item])});case"REMOVE_ITEM_FROM_LIST":return Object(R.a)(Object(R.a)({},e),{},{list:e.list.filter((function(e,c){return e.data.id!==t.payload.item}))});default:return Object(R.a)({},e)}},P=c(10),A=Object(P.b)({basket_list:z}),B=c(34),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.c,X=Object(P.d)(A,V(Object(P.a)(B.a)));a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(N.a,{store:X,children:Object(O.jsx)(C,{})})}),document.getElementById("root")),D()}},[[72,1,2]]]);
//# sourceMappingURL=main.69535425.chunk.js.map