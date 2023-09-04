import{g as O,r as h,o as a,c as l,a as c,F as E,j as v,h as y,_ as e,t as b,b as L,w as V,d as f}from"./entry.0a63261b.js";import{_ as D}from"./nuxt-link.474fd0be.js";function P(m){return`${m}`.toLowerCase().replace(new RegExp(/[-_]+/,"g")," ").replace(new RegExp(/[^\w\s]/,"g"),"").replace(new RegExp(/\s+(.)(\w*)/,"g"),(s,p,r)=>` ${p.toUpperCase()+r}`).replace(new RegExp(/\w/),s=>s.toUpperCase())}const I={class:"p-4"},T=c("h1",{class:"font-semibold text-lg"},"Examples",-1),x={class:"p-2"},A={class:"font-semibold"},w={class:"p-2"},j=O({__name:"index",setup(m){const s=Object.freeze({map:1,layer:2,control:3,tile:4}),p=Object.assign({"./control/basic-attribution-control.vue":()=>e(()=>import("./basic-attribution-control.5c2bc971.js"),["./basic-attribution-control.5c2bc971.js","./index.es.925b71e0.js","./entry.0a63261b.js","./entry.43c8c36b.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./control/basic-layers-control.vue":()=>e(()=>import("./basic-layers-control.268ef9cc.js"),["./basic-layers-control.268ef9cc.js","./index.es.925b71e0.js","./entry.0a63261b.js","./entry.43c8c36b.css"],import.meta.url),"./control/basic-scale-control.vue":()=>e(()=>import("./basic-scale-control.a0c0fa3e.js"),["./basic-scale-control.a0c0fa3e.js","./index.es.925b71e0.js","./entry.0a63261b.js","./entry.43c8c36b.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./control/basic-zoom-control.vue":()=>e(()=>import("./basic-zoom-control.29d0a54d.js"),["./basic-zoom-control.29d0a54d.js","./index.es.925b71e0.js","./entry.0a63261b.js","./entry.43c8c36b.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./layer/basic-tile-layer.vue":()=>e(()=>import("./basic-tile-layer.2119ff69.js"),["./basic-tile-layer.2119ff69.js","./index.es.925b71e0.js","./entry.0a63261b.js","./entry.43c8c36b.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./map/basic-map-pane.vue":()=>e(()=>import("./basic-map-pane.f6029984.js"),["./basic-map-pane.f6029984.js","./index.es.925b71e0.js","./entry.0a63261b.js","./entry.43c8c36b.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./map/basic-map.vue":()=>e(()=>import("./basic-map.631a13b9.js"),["./basic-map.631a13b9.js","./index.es.925b71e0.js","./entry.0a63261b.js","./entry.43c8c36b.css"],import.meta.url),"./tile/basic-arc-gis-aero-tile-layer.vue":()=>e(()=>import("./basic-arc-gis-aero-tile-layer.5d2dc2f9.js"),["./basic-arc-gis-aero-tile-layer.5d2dc2f9.js","./index.es.925b71e0.js","./entry.0a63261b.js","./entry.43c8c36b.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/basic-arc-gis-tile-layer.vue":()=>e(()=>import("./basic-arc-gis-tile-layer.a5d3efab.js"),["./basic-arc-gis-tile-layer.a5d3efab.js","./index.es.925b71e0.js","./entry.0a63261b.js","./entry.43c8c36b.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/basic-google-tile-layer.vue":()=>e(()=>import("./basic-google-tile-layer.73fc662e.js"),["./basic-google-tile-layer.73fc662e.js","./index.es.925b71e0.js","./entry.0a63261b.js","./entry.43c8c36b.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/basic-mapbox-tile-layer.vue":()=>e(()=>import("./basic-mapbox-tile-layer.4d8e540c.js"),["./basic-mapbox-tile-layer.4d8e540c.js","./index.es.925b71e0.js","./entry.0a63261b.js","./entry.43c8c36b.css"],import.meta.url),"./tile/basic-open-transport-tile-layer.vue":()=>e(()=>import("./basic-open-transport-tile-layer.801935ed.js"),["./basic-open-transport-tile-layer.801935ed.js","./index.es.925b71e0.js","./entry.0a63261b.js","./entry.43c8c36b.css"],import.meta.url),"./tile/basic-osm-tile-layer.vue":()=>e(()=>import("./basic-osm-tile-layer.ca298793.js"),["./basic-osm-tile-layer.ca298793.js","./index.es.925b71e0.js","./entry.0a63261b.js","./entry.43c8c36b.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/hybrid-google-tile-layer.vue":()=>e(()=>import("./hybrid-google-tile-layer.6f64e28f.js"),["./hybrid-google-tile-layer.6f64e28f.js","./index.es.925b71e0.js","./entry.0a63261b.js","./entry.43c8c36b.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url)}),r={};for(const[i]of Object.entries(p)){const o=i.split("/"),t=o[o.length-2],_=o[o.length-1].slice(0,-4),n=`/${t}/${_}`;r[t]||(r[t]={title:t.slice(0,1).toUpperCase()+t.slice(1),order:s[t],children:[]}),r[t].children.push({title:P(_),url:n})}const u=h(Object.keys(r).map(i=>r[i]));return u.sort((i,o)=>i.order-o.order),(i,o)=>{const t=D;return a(),l("div",I,[T,c("ul",x,[(a(!0),l(E,null,v(y(u),({title:_,children:n},g)=>(a(),l("li",{key:g,class:"mb-1"},[c("h2",A,b(_),1),c("ul",w,[(a(!0),l(E,null,v(n,(d,R)=>(a(),l("li",{key:R,class:"mb-1"},[L(t,{class:"underline",to:d.url,"no-prefetch":""},{default:V(()=>[f(b(d.title),1)]),_:2},1032,["to"])]))),128))])]))),128))])])}}});export{j as default};
