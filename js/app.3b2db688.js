(function(e){function t(t){for(var o,r,u=t[0],s=t[1],i=t[2],l=0,b=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},c={app:0},a=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0afad79f"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"ec20787f"}[e]+".css",c=s.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===o||l===c))return t()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){i=b[u],l=i.getAttribute("data-href");if(l===o||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],d.parentNode.removeChild(d),n(a)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var b=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",b.name="ChunkLoadError",b.type=o,b.request=r,n[1](b)}c[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"14be":function(e,t,n){},"60a5":function(e,t,n){"use strict";n("14be")},"7e11":function(e,t,n){},ae4a:function(e,t,n){"use strict";n("7e11")},cd49:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const r={id:"app"},c={class:"main"};function a(e,t,n,a,u,s){const i=Object(o["A"])("Header"),l=Object(o["A"])("router-view"),b=Object(o["A"])("Footer");return Object(o["v"])(),Object(o["g"])("div",r,[t[0]||(t[0]=Object(o["h"])("link",{rel:"stylesheet",href:"@/assets/projects/projects.css",type:"text/css"},null,-1)),Object(o["k"])(i),Object(o["h"])("div",c,[Object(o["k"])(o["b"],{name:"fade",mode:"out-in"},{default:Object(o["G"])(()=>[Object(o["k"])(l)]),_:1})]),Object(o["k"])(b)])}const u={class:"header"},s={class:"nav-bar"};function i(e,t,n,r,c,a){const i=Object(o["A"])("router-link");return Object(o["v"])(),Object(o["g"])("div",u,[Object(o["h"])("div",s,[Object(o["k"])(i,{to:"/"},{default:Object(o["G"])(()=>t[0]||(t[0]=[Object(o["j"])("About me")])),_:1}),Object(o["k"])(i,{to:"/game-projects"},{default:Object(o["G"])(()=>t[1]||(t[1]=[Object(o["j"])("Stuff")])),_:1}),Object(o["k"])(i,{to:"/other-projects"},{default:Object(o["G"])(()=>t[2]||(t[2]=[Object(o["j"])("Other stuff")])),_:1}),Object(o["k"])(i,{to:"/resume"},{default:Object(o["G"])(()=>t[3]||(t[3]=[Object(o["j"])("Resume")])),_:1}),Object(o["k"])(i,{to:"/contact"},{default:Object(o["G"])(()=>t[4]||(t[4]=[Object(o["j"])("Contact")])),_:1})])])}var l={name:"Header"},b=(n("ae4a"),n("6b0d")),d=n.n(b);const p=d()(l,[["render",i],["__scopeId","data-v-24902f74"]]);var f=p;const h={class:"footer"},j={class:"right"};function m(e,t,n,r,c,a){const u=Object(o["A"])("router-link");return Object(o["v"])(),Object(o["g"])("div",h,[t[4]||(t[4]=Object(o["h"])("div",{class:"left"},[Object(o["h"])("a",{href:"https://github.com/schouffy/gamedev-portfolio",target:"blank"},"Portfolio"),Object(o["j"])(" by schouffy")],-1)),Object(o["h"])("div",j,[t[1]||(t[1]=Object(o["j"])("Reach me at ")),t[2]||(t[2]=Object(o["h"])("a",{href:"mailto:my@email.com"},"my@email.com",-1)),t[3]||(t[3]=Object(o["j"])(" or ")),Object(o["k"])(u,{to:"/contact"},{default:Object(o["G"])(()=>t[0]||(t[0]=[Object(o["j"])("through here")])),_:1})])])}var O={name:"Footer"};n("f7a2");const v=d()(O,[["render",m],["__scopeId","data-v-e6da3414"]]);var g=v;class y{}y.preloadImages=e=>{e.forEach(e=>{y.preloadImage(e)})},y.preloadImage=e=>{const t=new Image;t.src=e};var k={name:"App",components:{Header:f,Footer:g}};y.preloadImages(["img/projects/project-1-icon.png","img/projects/project-2-icon.png","img/projects/project-3-icon.png"]);n("60a5");const _=d()(k,[["render",a]]);var w=_,A=n("6605");const P=[{path:"/",name:"Root",component:()=>n.e("about").then(n.bind(null,"f820"))},{path:"/resume",name:"Resume",component:()=>n.e("about").then(n.bind(null,"1ba2"))},{path:"/game-projects",name:"Game Projects",component:()=>n.e("about").then(n.bind(null,"4d97"))},{path:"/other-projects",name:"Other Projects",component:()=>n.e("about").then(n.bind(null,"7c58"))},{path:"/contact",name:"Contact",component:()=>n.e("about").then(n.bind(null,"b8fa"))},{path:"/404",name:"NotFound",component:()=>n.e("about").then(n.bind(null,"8cdb"))},{path:"/:pathMatch(.*)*",name:"NotFoundRedirect",redirect:"/404"}],E=Object(A["b"])({history:Object(A["a"])(),routes:P});var S=E;const C=Object(o["d"])(w);C.use(S),C.mount("#app")},cd90:function(e,t,n){},f7a2:function(e,t,n){"use strict";n("cd90")}});
//# sourceMappingURL=app.3b2db688.js.map