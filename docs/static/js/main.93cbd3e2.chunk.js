(this["webpackJsonp06-ctc-gif-expert-app"]=this["webpackJsonp06-ctc-gif-expert-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=a(1),l=a(8),m=function(e){var t=e.setCategorias,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],m=c[1];return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),m(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){m(e.target.value)}})))},o=a(4),s=a.n(o),f=a(7),p=function(){var e=Object(f.a)(s.a.mark((function e(t){var a,n,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=pZF5taT2C8y5Jk6AOVAZpZhF7B0b4j17"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeInLeft"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))},g=function(e){var t=e.categoria,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){p(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeInLeft"},t),i&&r.a.createElement("p",{className:"animate__animated animate__flash"},"generando gifs..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(n.useState)(["Metroid"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(m,{setCategorias:c,categorias:a}),r.a.createElement("hr",null),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement(g,{key:e,categoria:e})}))))};a(15);i.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.93cbd3e2.chunk.js.map