import{S as s,i as a,s as e,j as t,k as n,m as r,n as o,o as c,f as u,v as l,r as $,w as i,d as f,e as p,t as m,c as d,a as h,g,b as v,H as j}from"../chunks/vendor-8cb100a1.js";import{P as k}from"../chunks/PageTitle-3a4a8a30.js";import{P as x}from"../chunks/PopIn-472dd073.js";function P(s){let a,e;return{c(){a=p("p"),e=m("Bonjour, je suis Donovan Michel un développeur Fullstack."),this.h()},l(s){a=d(s,"P",{class:!0});var t=h(a);e=g(t,"Bonjour, je suis Donovan Michel un développeur Fullstack."),t.forEach(f),this.h()},h(){v(a,"class","svelte-1fgta6f")},m(s,t){u(s,a,t),j(a,e)},d(s){s&&f(a)}}}function w(s){let a,e,p,m;return a=new k({props:{title:"Accueil",text:"Bienvenue sur mon site.",speed:1}}),p=new x({props:{duration:2300,y:200,$$slots:{default:[P]},$$scope:{ctx:s}}}),{c(){t(a.$$.fragment),e=n(),t(p.$$.fragment)},l(s){r(a.$$.fragment,s),e=o(s),r(p.$$.fragment,s)},m(s,t){c(a,s,t),u(s,e,t),c(p,s,t),m=!0},p(s,[a]){const e={};1&a&&(e.$$scope={dirty:a,ctx:s}),p.$set(e)},i(s){m||(l(a.$$.fragment,s),l(p.$$.fragment,s),m=!0)},o(s){$(a.$$.fragment,s),$(p.$$.fragment,s),m=!1},d(s){i(a,s),s&&f(e),i(p,s)}}}export default class extends s{constructor(s){super(),a(this,s,null,w,e,{})}}