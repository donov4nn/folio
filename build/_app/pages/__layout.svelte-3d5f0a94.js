import{D as s,S as a,i as e,s as t,F as c,E as r,G as n,e as o,j as l,k as i,t as u,c as f,a as h,m as v,d as p,n as $,g,b as d,H as m,f as b,I as E,o as A,J as j,K as k,L as C,v as N,r as w,w as x,M as P,N as _,O as y,P as I}from"../chunks/vendor-8855e1f0.js";function L(s,a){function e(e){s.contains(e.target)||a()}return document.body.addEventListener("click",e),{update(s){a=s},destroy(){document.body.removeEventListener("click",e)}}}const V={subscribe:a=>(()=>{const a=s("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}})().page.subscribe(a)};function M(s){let a,e,t,_,y,I,V,M,O,S,q,z,D,F,G,H,J,K,B,Q,R,T;return t=new c({props:{icon:r}}),I=new c({props:{icon:n}}),{c(){a=o("nav"),e=o("span"),l(t.$$.fragment),_=i(),y=o("a"),l(I.$$.fragment),V=i(),M=o("a"),O=u("Projets"),S=i(),q=o("a"),z=u("Articles"),D=i(),F=o("a"),G=u("CV"),H=i(),J=o("a"),K=u("Contact"),this.h()},l(s){a=f(s,"NAV",{class:!0});var c=h(a);e=f(c,"SPAN",{class:!0});var r=h(e);v(t.$$.fragment,r),r.forEach(p),_=$(c),y=f(c,"A",{href:!0,class:!0});var n=h(y);v(I.$$.fragment,n),n.forEach(p),V=$(c),M=f(c,"A",{href:!0,class:!0});var o=h(M);O=g(o,"Projets"),o.forEach(p),S=$(c),q=f(c,"A",{href:!0,class:!0});var l=h(q);z=g(l,"Articles"),l.forEach(p),D=$(c),F=f(c,"A",{href:!0,class:!0});var i=h(F);G=g(i,"CV"),i.forEach(p),H=$(c),J=f(c,"A",{href:!0,class:!0});var u=h(J);K=g(u,"Contact"),u.forEach(p),c.forEach(p),this.h()},h(){d(e,"class","popOutIcon svelte-13o0s12"),d(y,"href","/"),d(y,"class","svelte-13o0s12"),m(y,"active","/"===s[1].path),d(M,"href","/projects"),d(M,"class","svelte-13o0s12"),m(M,"active","/projects"===s[1].path),d(q,"href","/articles"),d(q,"class","svelte-13o0s12"),m(q,"active","/articles"===s[1].path),d(F,"href","/cv"),d(F,"class","svelte-13o0s12"),m(F,"active","/cv"===s[1].path),d(J,"href","/contact"),d(J,"class","svelte-13o0s12"),m(J,"active","/contact"===s[1].path),d(a,"class","svelte-13o0s12"),m(a,"toggleClassNavbar",s[0])},m(c,r){b(c,a,r),E(a,e),A(t,e,null),E(a,_),E(a,y),A(I,y,null),E(a,V),E(a,M),E(M,O),E(a,S),E(a,q),E(q,z),E(a,D),E(a,F),E(F,G),E(a,H),E(a,J),E(J,K),Q=!0,R||(T=[j(e,"click",s[2]),k(B=L.call(null,a,s[4])),j(a,"click",s[3])],R=!0)},p(s,[e]){2&e&&m(y,"active","/"===s[1].path),2&e&&m(M,"active","/projects"===s[1].path),2&e&&m(q,"active","/articles"===s[1].path),2&e&&m(F,"active","/cv"===s[1].path),2&e&&m(J,"active","/contact"===s[1].path),B&&C(B.update)&&1&e&&B.update.call(null,s[4]),1&e&&m(a,"toggleClassNavbar",s[0])},i(s){Q||(N(t.$$.fragment,s),N(I.$$.fragment,s),Q=!0)},o(s){w(t.$$.fragment,s),w(I.$$.fragment,s),Q=!1},d(s){s&&p(a),x(t),x(I),R=!1,P(T)}}}function O(s,a,e){let t;_(s,V,(s=>e(1,t=s)));let c=!1;return[c,t,function(){e(0,c=!c)},function(s){s.toElement.matches("a")&&e(0,c=!1)},()=>e(0,c=!1)]}class S extends a{constructor(s){super(),e(this,s,O,M,t,{})}}function q(s){let a,e,t,c;a=new S({});const r=s[1].default,n=y(r,s,s[0],null);return{c(){l(a.$$.fragment),e=i(),t=o("main"),n&&n.c(),this.h()},l(s){v(a.$$.fragment,s),e=$(s),t=f(s,"MAIN",{class:!0});var c=h(t);n&&n.l(c),c.forEach(p),this.h()},h(){d(t,"class","svelte-zxqrsn")},m(s,r){A(a,s,r),b(s,e,r),b(s,t,r),n&&n.m(t,null),c=!0},p(s,[a]){n&&n.p&&(!c||1&a)&&I(n,r,s,s[0],a,null,null)},i(s){c||(N(a.$$.fragment,s),N(n,s),c=!0)},o(s){w(a.$$.fragment,s),w(n,s),c=!1},d(s){x(a,s),s&&p(e),s&&p(t),n&&n.d(s)}}}function z(s,a,e){let{$$slots:t={},$$scope:c}=a;return s.$$set=s=>{"$$scope"in s&&e(0,c=s.$$scope)},[c,t]}export default class extends a{constructor(s){super(),e(this,s,z,q,t,{})}}