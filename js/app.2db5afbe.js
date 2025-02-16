(function(){"use strict";var t={2875:function(t,e,n){var r=n(1529),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"navbar navbar-dark bg-primary shadow-sm"},[e("div",{staticClass:"container d-flex justify-content-between align-items-center"},[e("a",{staticClass:"navbar-brand fw-bold text-uppercase",attrs:{href:"/ass1/"}},[t._v("Portfolio")]),e("ul",{staticClass:"nav"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/","exact-active-class":"active"}},[t._v("Home")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/skills","exact-active-class":"active"}},[t._v("Skills")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/contact","exact-active-class":"active"}},[t._v("Contact")])],1)])])]),e("div",{staticClass:"container mt-4"},[e("router-view")],1)])},i=[],a={name:"App"},u=a,s=n(1656),c=(0,s.A)(u,o,i,!1,null,null,null),l=c.exports,f=n(3475),d=n.p+"img/photo.b7300c34.png";r.Ay.use(f.Ay);const p=[{path:"/",component:()=>n.e(144).then(n.bind(n,144)),props:()=>({photo:d})},{path:"/skills",component:()=>n.e(418).then(n.bind(n,7418))},{path:"/contact",component:()=>n.e(686).then(n.bind(n,6686))}],v=new f.Ay({mode:"history",base:"/ass1/",routes:p});var h=v;n(4158);r.Ay.config.productionTip=!1,new r.Ay({router:h,render:t=>t(l)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{144:"3d16738a",418:"ae241bec",686:"ce10a6fb"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{144:"0734f513",418:"c84d463f",686:"2ae616bf"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="ass1:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=r),t[r]=[o];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/ass1/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var u=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var r=n&&n.type,u=n&&n.target&&n.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+": "+u+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=u,a.parentNode&&a.parentNode.removeChild(a),i(s)}};return a.onerror=a.onload=u,a.href=e,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(e(a,u))return o();t(r,u,null,o,i)}))},o={524:0};n.f.miniCss=function(t,e){var n={144:1,418:1,686:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),u=new Error,s=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(e&&e(r);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkass1"]=self["webpackChunkass1"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(2875)}));r=n.O(r)})();
//# sourceMappingURL=app.2db5afbe.js.map