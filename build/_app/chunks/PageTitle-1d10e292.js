import{S as t,i as e,s,N as n,e as a,c as l,a as o,d as c,b as r,R as i,f as p,H as u,O as d,v as $,r as h,z as f,T as m,k as v,j as x,U as g,n as w,m as k,o as y,V as b,w as S,t as E,g as P,h as C,Q as T,F as A,W as N,X as j,Y as D}from"./vendor-27d7ffd5.js";function H(t){let e,s,f;const m=t[3].default,v=n(m,t,t[2],null);return{c(){e=a("p"),s=a("span"),v&&v.c(),this.h()},l(t){e=l(t,"P",{class:!0});var n=o(e);s=l(n,"SPAN",{class:!0,style:!0});var a=o(s);v&&v.l(a),a.forEach(c),n.forEach(c),this.h()},h(){var n;r(s,"class","typewriterText svelte-15es1n8"),i(s,"--typewriterSpeed",t[0]+"s"),i(s,"--typewriterChar",null==(n=t[1])?void 0:n.length),r(e,"class","svelte-15es1n8")},m(t,n){p(t,e,n),u(e,s),v&&v.m(s,null),f=!0},p(t,[e]){var n;v&&v.p&&(!f||4&e)&&d(v,m,t,t[2],e,null,null),(!f||1&e)&&i(s,"--typewriterSpeed",t[0]+"s"),(!f||2&e)&&i(s,"--typewriterChar",null==(n=t[1])?void 0:n.length)},i(t){f||($(v,t),f=!0)},o(t){h(v,t),f=!1},d(t){t&&c(e),v&&v.d(t)}}}function q(t,e,s){let n,{$$slots:a={},$$scope:l}=e,{speed:o=4}=e;return f((()=>{s(1,n=document.querySelector(".typewriterText").textContent)})),t.$$set=t=>{"speed"in t&&s(0,o=t.speed),"$$scope"in t&&s(2,l=t.$$scope)},[o,n,l,a]}class z extends t{constructor(t){super(),e(this,t,q,H,s,{speed:0})}}function F(t){return{c:T,l:T,m:T,p:T,i:T,o:T,d:T}}function O(t){let e,s,n,i;return s=new A({props:{icon:t[0]}}),{c(){e=a("span"),x(s.$$.fragment),this.h()},l(t){e=l(t,"SPAN",{class:!0});var n=o(e);k(s.$$.fragment,n),n.forEach(c),this.h()},h(){r(e,"class","popAfter svelte-t7lapf")},m(t,n){p(t,e,n),y(s,e,null),i=!0},p(t,e){const n={};1&e&&(n.icon=t[0]),s.$set(n)},i(t){i||($(s.$$.fragment,t),n||N((()=>{n=j(e,D,{}),n.start()})),i=!0)},o(t){h(s.$$.fragment,t),i=!1},d(t){t&&c(e),S(s)}}}function Q(t){return{c:T,l:T,m:T,p:T,i:T,o:T,d:T}}function R(t){let e;return{c(){e=E(t[1])},l(s){e=P(s,t[1])},m(t,s){p(t,e,s)},p(t,s){2&s&&C(e,t[1])},d(t){t&&c(e)}}}function U(t){let e,s,n,i,d,f;document.title=e="Donovan - "+t[3];let E={ctx:t,current:null,token:null,hasCatch:!1,pending:Q,then:O,catch:F,value:5,blocks:[,,,]};return m(t[4],E),d=new z({props:{speed:t[2],$$slots:{default:[R]},$$scope:{ctx:t}}}),{c(){s=v(),n=a("h1"),E.block.c(),i=v(),x(d.$$.fragment),this.h()},l(t){g('[data-svelte="svelte-1acwtal"]',document.head).forEach(c),s=w(t),n=l(t,"H1",{class:!0});var e=o(n);E.block.l(e),i=w(e),k(d.$$.fragment,e),e.forEach(c),this.h()},h(){r(n,"class","svelte-t7lapf")},m(t,e){p(t,s,e),p(t,n,e),E.block.m(n,E.anchor=null),E.mount=()=>n,E.anchor=i,u(n,i),y(d,n,null),f=!0},p(s,[n]){t=s,(!f||8&n)&&e!==(e="Donovan - "+t[3])&&(document.title=e),b(E,t,n);const a={};4&n&&(a.speed=t[2]),66&n&&(a.$$scope={dirty:n,ctx:t}),d.$set(a)},i(t){f||($(E.block),$(d.$$.fragment,t),f=!0)},o(t){for(let e=0;e<3;e+=1){const t=E.blocks[e];h(t)}h(d.$$.fragment,t),f=!1},d(t){t&&c(s),t&&c(n),E.block.d(),E.token=null,E=null,S(d)}}}function V(t,e,s){let{icon:n}=e,{text:a}=e,{speed:l}=e,{title:o}=e;const c=new Promise((t=>setTimeout(t,1e3*l+200)));return t.$$set=t=>{"icon"in t&&s(0,n=t.icon),"text"in t&&s(1,a=t.text),"speed"in t&&s(2,l=t.speed),"title"in t&&s(3,o=t.title)},[n,a,l,o,c]}class W extends t{constructor(t){super(),e(this,t,V,U,s,{icon:0,text:1,speed:2,title:3})}}export{W as P};