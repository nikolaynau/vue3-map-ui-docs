import{c as e,H as f,r as x,i as w,V as h}from"./index.es.7ca2482c.js";import{q as V,r as _,o as b,c as v,a as l,b as n,w as C,u as o,t as a}from"./entry.299c8486.js";const z=e(f),M=e(x),g=e(w),k=e(h),y={class:"flex flex-col w-full h-full"},B={class:"flex-grow basis-full"},H={class:"px-1 pt-3 flex-shrink-0 text-sm overflow-hidden"},D=V({__name:"basic-map",setup(N){const s=_([0,0]),c=_(0),r=_(null);function p(t){s.value=t.center,c.value=t.zoom,r.value=t.bounds}return(t,O)=>{const i=z,m=M,u=g,d=k;return b(),v("div",y,[l("div",B,[n(d,{center:o(s),zoom:o(c),onViewChanged:p},{default:C(()=>[n(i),n(m),n(u)]),_:1},8,["center","zoom"])]),l("div",H," center: "+a(o(s))+", zoom: "+a(o(c))+", bounds: "+a(o(r)),1)])}}});export{D as default};