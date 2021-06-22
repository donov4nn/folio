import{S as s,i as a,s as t,T as e,l as r,f as c,V as o,v as l,r as n,d as i,Q as u,N as h,e as f,c as $,a as p,b as d,O as m,W as v,X as k,Z as E,a1 as P,j as g,k as j,m as x,n as y,o as b,w as T,t as N,g as w,H as C}from"../../chunks/vendor-8cb100a1.js";import{P as H}from"../../chunks/PageTitle-3a4a8a30.js";function I(s){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function O(s){let a,t,e,r;const o=s[5].default,u=h(o,s,s[4],null);return{c(){a=f("div"),u&&u.c(),this.h()},l(s){a=$(s,"DIV",{class:!0});var t=p(a);u&&u.l(t),t.forEach(i),this.h()},h(){d(a,"class",t="wrapperParallax "+s[2]+" svelte-4llxcf")},m(s,t){c(s,a,t),u&&u.m(a,null),r=!0},p(e,c){s=e,u&&u.p&&(!r||16&c)&&m(u,o,s,s[4],c,null,null),(!r||4&c&&t!==(t="wrapperParallax "+s[2]+" svelte-4llxcf"))&&d(a,"class",t)},i(t){r||(l(u,t),e||v((()=>{e=k(a,E,{y:s[0],duration:s[1]}),e.start()})),r=!0)},o(s){n(u,s),r=!1},d(s){s&&i(a),u&&u.d(s)}}}function S(s){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function V(s){let a,t,u={ctx:s,current:null,token:null,hasCatch:!1,pending:S,then:O,catch:I,value:6,blocks:[,,,]};return e(s[3],u),{c(){a=r(),u.block.c()},l(s){a=r(),u.block.l(s)},m(s,e){c(s,a,e),u.block.m(s,u.anchor=e),u.mount=()=>a.parentNode,u.anchor=a,t=!0},p(a,[t]){o(u,s=a,t)},i(s){t||(l(u.block),t=!0)},o(s){for(let a=0;a<3;a+=1){const s=u.blocks[a];n(s)}t=!1},d(s){s&&i(a),u.block.d(s),u.token=null,u=null}}}function D(s,a,t){let{$$slots:e={},$$scope:r}=a,{y:c=0}=a,{duration:o=0}=a,{classes:l=""}=a;const n=new Promise((s=>setTimeout(s,o)));return s.$$set=s=>{"y"in s&&t(0,c=s.y),"duration"in s&&t(1,o=s.duration),"classes"in s&&t(2,l=s.classes),"$$scope"in s&&t(4,r=s.$$scope)},[c,o,l,n,r,e]}class M extends s{constructor(s){super(),a(this,s,D,V,t,{y:0,duration:1,classes:2})}}function Q(s){let a,t,e,r,o,l,n,u,h,m,v,k,E,P,g,x,b,T,H;return{c(){a=f("section"),t=f("h1"),e=N("Projet 1"),r=j(),o=f("section"),l=f("h1"),n=N("Projet 2"),u=j(),h=f("section"),m=f("h1"),v=N("Projet 3"),k=j(),E=f("section"),P=f("h1"),g=N("Projet 4"),x=j(),b=f("section"),T=f("h1"),H=N("Projet 5 (static)"),this.h()},l(s){a=$(s,"SECTION",{class:!0,style:!0});var c=p(a);t=$(c,"H1",{});var f=p(t);e=w(f,"Projet 1"),f.forEach(i),c.forEach(i),r=y(s),o=$(s,"SECTION",{class:!0,style:!0});var d=p(o);l=$(d,"H1",{});var j=p(l);n=w(j,"Projet 2"),j.forEach(i),d.forEach(i),u=y(s),h=$(s,"SECTION",{class:!0,style:!0});var N=p(h);m=$(N,"H1",{});var C=p(m);v=w(C,"Projet 3"),C.forEach(i),N.forEach(i),k=y(s),E=$(s,"SECTION",{class:!0,style:!0});var I=p(E);P=$(I,"H1",{});var O=p(P);g=w(O,"Projet 4"),O.forEach(i),I.forEach(i),x=y(s),b=$(s,"SECTION",{class:!0});var S=p(b);T=$(S,"H1",{});var V=p(T);H=w(V,"Projet 5 (static)"),V.forEach(i),S.forEach(i),this.h()},h(){d(a,"class","section parallax"),d(a,"style","background : #4d77b6"),d(o,"class","section parallax"),d(o,"style","background : #0e459c"),d(h,"class","section parallax"),d(h,"style","background : #032963"),d(E,"class","section parallax"),d(E,"style","background : teal"),d(b,"class","section static")},m(s,i){c(s,a,i),C(a,t),C(t,e),c(s,r,i),c(s,o,i),C(o,l),C(l,n),c(s,u,i),c(s,h,i),C(h,m),C(m,v),c(s,k,i),c(s,E,i),C(E,P),C(P,g),c(s,x,i),c(s,b,i),C(b,T),C(T,H)},d(s){s&&i(a),s&&i(r),s&&i(o),s&&i(u),s&&i(h),s&&i(k),s&&i(E),s&&i(x),s&&i(b)}}}function W(s){let a,t,e,r;return a=new H({props:{title:"Projets",text:"Mes projets :",icon:P,speed:1}}),e=new M({props:{duration:1700,y:200,$$slots:{default:[Q]},$$scope:{ctx:s}}}),{c(){g(a.$$.fragment),t=j(),g(e.$$.fragment)},l(s){x(a.$$.fragment,s),t=y(s),x(e.$$.fragment,s)},m(s,o){b(a,s,o),c(s,t,o),b(e,s,o),r=!0},p(s,[a]){const t={};1&a&&(t.$$scope={dirty:a,ctx:s}),e.$set(t)},i(s){r||(l(a.$$.fragment,s),l(e.$$.fragment,s),r=!0)},o(s){n(a.$$.fragment,s),n(e.$$.fragment,s),r=!1},d(s){T(a,s),s&&i(t),T(e,s)}}}export default class extends s{constructor(s){super(),a(this,s,null,W,t,{})}}