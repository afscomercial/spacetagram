(this.webpackJsonpspacestagram=this.webpackJsonpspacestagram||[]).push([[0],{17:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(11),c=a.n(n),s=(a(17),a(3)),r=a(2),i=a(10),o=a(12),l=a(9),d=a.n(l),u=function(){var e=Object(o.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.nasa.gov/planetary/apod?api_key=gJfg1fVQCoMkxd4EVncw4tIRutThDp5Q0fxQ8z9h&start_date=2021-12-23&end_date=2021-12-31",e.next=3,fetch("https://api.nasa.gov/planetary/apod?api_key=gJfg1fVQCoMkxd4EVncw4tIRutThDp5Q0fxQ8z9h&start_date=2021-12-23&end_date=2021-12-31");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,n=a.map((function(e){var t=null!=e.url.match(/\.(jpeg|jpg|gif|png)$/)?e.url:"https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg";return{title:e.title,date:e.date,url:t,likes:0}})),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=a(5),b=a(6),f=a(0),h=function(e){var t=e.pic,a=e.handleLike,n=t.date,c=t.title,s=t.url,r=t.likes;return Object(f.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(f.jsx)("div",{className:"card__img",style:{backgroundImage:"url(".concat(s,")")}}),Object(f.jsxs)("div",{className:"card__data",children:[Object(f.jsxs)("div",{className:"card__data-title",children:[" ",c," "]}),Object(f.jsxs)("div",{className:"card__data-date",children:[" ",n," "]}),Object(f.jsxs)("div",{className:"card__data-like",children:[Object(f.jsx)(j.a,{icon:b.b,className:"btn-like",onClick:function(){return a(c)}}),Object(f.jsx)("span",{children:r})]})]})]})},p=function(){var e=function(){var e=Object(r.useState)({data:[],isLoading:!0,loadLocalStorage:!1}),t=Object(s.a)(e,2),a=t[0],n=t[1],c=a.data,o=a.loadLocalStorage;return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("pictures"));!e||e.length<1?(console.log("fetch data"),u().then((function(e){n({data:e,isLoading:!1,loadLocalStorage:!0})}))):n({data:e,isLoading:!1,loadLocalStorage:!1})}),[]),Object(r.useEffect)((function(){o&&(console.log("load"),localStorage.setItem("pictures",JSON.stringify(c)))}),[c,o]),{picturesState:a,handleLike:function(e){var t=a.data.map((function(t){return t.title===e?Object(i.a)(Object(i.a)({},t),{},{likes:++t.likes}):t}));n({data:t,isLoading:!1,loadLocalStorage:!0})}}}(),t=e.picturesState,a=e.handleLike,n=t.data,c=t.isLoading,o=Object(r.useState)([]),l=Object(s.a)(o,2),d=l[0],p=l[1],g=Object(r.useState)(9),m=Object(s.a)(g,2),O=m[0],x=m[1],k=Object(r.useCallback)((function(){!c&&n.length>0&&p(n.slice(0,O))}),[c,n,O]),v=function(e){x(e)};return Object(r.useEffect)((function(){k()}),[k]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("header",{children:[Object(f.jsx)("h1",{children:"Spacestagram"}),Object(f.jsx)("h2",{children:"Image-sharing from the final frontier"})]}),Object(f.jsxs)("nav",{children:[Object(f.jsx)("div",{children:"Number of photos:"}),Object(f.jsx)("button",{className:"num-btn ",onClick:function(){return v(3)},children:"3"}),Object(f.jsx)("button",{className:"num-btn",onClick:function(){return v(6)},children:"6"}),Object(f.jsx)("button",{className:"num-btn",onClick:function(){return v(9)},children:"9"})]}),Object(f.jsxs)("main",{children:[c&&Object(f.jsx)(j.a,{icon:b.a,spin:!0,className:"spinner"}),!c&&Object(f.jsx)("div",{className:"card-grid",children:d.map((function(e){return Object(f.jsx)(h,{pic:e,handleLike:a},e.title)}))})]}),Object(f.jsxs)("footer",{children:[Object(f.jsx)("hr",{}),"An app to share photos of the last 9 days of 2021 from APOD one of NASA\u2019s image APIs."]})]})};c.a.render(Object(f.jsx)(p,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.8143c7a3.chunk.js.map