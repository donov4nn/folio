import{S as t,i as s,s as e,e as a,t as r,c as n,a as o,g as i,d as u,f as c,H as l,h as f,Q as d}from"../chunks/vendor-27d7ffd5.js";function p(t){let s,e;return{c(){s=a("h1"),e=r(t[0])},l(a){s=n(a,"H1",{});var r=o(s);e=i(r,t[0]),r.forEach(u)},m(t,a){c(t,s,a),l(s,e)},p(t,[s]){1&s&&f(e,t[0])},i:d,o:d,d(t){t&&u(s)}}}function h({error:t,status:s}){return{props:{title:`${s}: ${t.message}`}}}function m(t,s,e){let{title:a}=s;return t.$$set=t=>{"title"in t&&e(0,a=t.title)},[a]}export default class extends t{constructor(t){super(),s(this,t,m,p,e,{title:0})}}export{h as load};
