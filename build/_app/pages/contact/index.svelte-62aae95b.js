import{S as a,i as s,s as t,a2 as e,j as o,k as r,m as n,n as m,o as c,f,v as $,r as i,w as l,d,e as g,t as p,c as h,a as u,g as k,b as v,H as x}from"../../chunks/vendor-27d7ffd5.js";import{P as j}from"../../chunks/PageTitle-1d10e292.js";import{P as w}from"../../chunks/PopIn-640da834.js";function P(a){let s,t;return{c(){s=g("a"),t=p("dono.m51@gmail.com"),this.h()},l(a){s=h(a,"A",{href:!0,target:!0,class:!0});var e=u(s);t=k(e,"dono.m51@gmail.com"),e.forEach(d),this.h()},h(){v(s,"href","https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dono.m51@gmail.com"),v(s,"target","_blank"),v(s,"class","svelte-1iykhbp")},m(a,e){f(a,s,e),x(s,t)},d(a){a&&d(s)}}}function b(a){let s,t,g,p;return s=new j({props:{title:"Contact",text:"Me contacter :",icon:e,speed:1.5}}),g=new w({props:{duration:100,y:200,$$slots:{default:[P]},$$scope:{ctx:a}}}),{c(){o(s.$$.fragment),t=r(),o(g.$$.fragment)},l(a){n(s.$$.fragment,a),t=m(a),n(g.$$.fragment,a)},m(a,e){c(s,a,e),f(a,t,e),c(g,a,e),p=!0},p(a,[s]){const t={};1&s&&(t.$$scope={dirty:s,ctx:a}),g.$set(t)},i(a){p||($(s.$$.fragment,a),$(g.$$.fragment,a),p=!0)},o(a){i(s.$$.fragment,a),i(g.$$.fragment,a),p=!1},d(a){l(s,a),a&&d(t),l(g,a)}}}export default class extends a{constructor(a){super(),s(this,a,null,b,t,{})}}