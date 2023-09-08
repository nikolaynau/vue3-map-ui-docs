import{g as L,r as V,o as _,c as a,a as m,F as d,j as v,h as y,_ as e,t as b,b as D,w as P,d as I}from"./entry.9688fd0a.js";import{_ as T}from"./nuxt-link.a9afb2b7.js";function g(p){return`${p}`.toLowerCase().replace(new RegExp(/[-_]+/,"g")," ").replace(new RegExp(/[^\w\s]/,"g"),"").replace(new RegExp(/\s+(.)(\w*)/,"g"),(l,c,r)=>` ${c.toUpperCase()+r}`).replace(new RegExp(/\w/),l=>l.toUpperCase())}const A={class:"p-4"},f=m("h1",{class:"font-semibold text-lg"},"Examples",-1),h={class:"p-2"},x={class:"font-semibold"},w={class:"p-2"},j=L({__name:"index",setup(p){const l=Object.freeze({map:1,layer:2,control:3,tile:4}),c=Object.assign({"./control/basic-attribution-control.vue":()=>e(()=>import("./basic-attribution-control.b4a25b58.js"),["./basic-attribution-control.b4a25b58.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./control/basic-control-position.vue":()=>e(()=>import("./basic-control-position.bdc086e8.js"),["./basic-control-position.bdc086e8.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css","./basic-control-position.bb12839f.css"],import.meta.url),"./control/basic-layers-control.vue":()=>e(()=>import("./basic-layers-control.04c8e40d.js"),["./basic-layers-control.04c8e40d.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css"],import.meta.url),"./control/basic-scale-control.vue":()=>e(()=>import("./basic-scale-control.20d42e6d.js"),["./basic-scale-control.20d42e6d.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./control/basic-zoom-control.vue":()=>e(()=>import("./basic-zoom-control.985f1f4c.js"),["./basic-zoom-control.985f1f4c.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./layer/basic-default-icon.vue":()=>e(()=>import("./basic-default-icon.c24c09db.js"),["./basic-default-icon.c24c09db.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css"],import.meta.url),"./layer/basic-div-icon.vue":()=>e(()=>import("./basic-div-icon.3d99356a.js"),["./basic-div-icon.3d99356a.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css","./basic-div-icon.bf1c27ce.css"],import.meta.url),"./layer/basic-div-marker.vue":()=>e(()=>import("./basic-div-marker.a5d6d234.js"),["./basic-div-marker.a5d6d234.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css","./basic-div-marker.c8f3889b.css"],import.meta.url),"./layer/basic-icon-marker.vue":()=>e(()=>import("./basic-icon-marker.0db9ef66.js"),["./basic-icon-marker.0db9ef66.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css"],import.meta.url),"./layer/basic-icon.vue":()=>e(()=>import("./basic-icon.b4a96263.js"),["./basic-icon.b4a96263.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css"],import.meta.url),"./layer/basic-marker.vue":()=>e(()=>import("./basic-marker.ce8252fe.js"),["./basic-marker.ce8252fe.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css"],import.meta.url),"./layer/basic-pin-icon.vue":()=>e(()=>import("./basic-pin-icon.1efff6d7.js"),["./basic-pin-icon.1efff6d7.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css"],import.meta.url),"./layer/basic-tile-layer.vue":()=>e(()=>import("./basic-tile-layer.e0bfd36d.js"),["./basic-tile-layer.e0bfd36d.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./map/basic-map-pane.vue":()=>e(()=>import("./basic-map-pane.af4be86e.js"),["./basic-map-pane.af4be86e.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css"],import.meta.url),"./map/basic-map.vue":()=>e(()=>import("./basic-map.0f4c5ec8.js"),["./basic-map.0f4c5ec8.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css"],import.meta.url),"./tile/basic-arc-gis-aero-tile-layer.vue":()=>e(()=>import("./basic-arc-gis-aero-tile-layer.4ed3a9b1.js"),["./basic-arc-gis-aero-tile-layer.4ed3a9b1.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/basic-arc-gis-tile-layer.vue":()=>e(()=>import("./basic-arc-gis-tile-layer.1a9f0a37.js"),["./basic-arc-gis-tile-layer.1a9f0a37.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/basic-google-tile-layer.vue":()=>e(()=>import("./basic-google-tile-layer.fc16b1ba.js"),["./basic-google-tile-layer.fc16b1ba.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/basic-mapbox-tile-layer.vue":()=>e(()=>import("./basic-mapbox-tile-layer.2feeae33.js"),["./basic-mapbox-tile-layer.2feeae33.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css"],import.meta.url),"./tile/basic-open-transport-tile-layer.vue":()=>e(()=>import("./basic-open-transport-tile-layer.7ffb3f59.js"),["./basic-open-transport-tile-layer.7ffb3f59.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css"],import.meta.url),"./tile/basic-osm-tile-layer.vue":()=>e(()=>import("./basic-osm-tile-layer.fef10b1d.js"),["./basic-osm-tile-layer.fef10b1d.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/hybrid-google-tile-layer.vue":()=>e(()=>import("./hybrid-google-tile-layer.f164c93c.js"),["./hybrid-google-tile-layer.f164c93c.js","./index.es.7c01a1b7.js","./entry.9688fd0a.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url)}),r={};for(const[i]of Object.entries(c)){const o=i.split("/"),t=o[o.length-2],s=o[o.length-1].slice(0,-4),u=`/${t}/${s}`;r[t]||(r[t]={title:t.slice(0,1).toUpperCase()+t.slice(1),order:l[t],children:[]}),r[t].children.push({title:g(s),url:u})}const n=V(Object.keys(r).map(i=>r[i]));return n.sort((i,o)=>i.order-o.order),(i,o)=>{const t=T;return _(),a("div",A,[f,m("ul",h,[(_(!0),a(d,null,v(y(n),({title:s,children:u},R)=>(_(),a("li",{key:R,class:"mb-1"},[m("h2",x,b(s),1),m("ul",w,[(_(!0),a(d,null,v(u,(E,O)=>(_(),a("li",{key:O,class:"mb-1"},[D(t,{class:"underline",to:E.url,"no-prefetch":""},{default:P(()=>[I(b(E.title),1)]),_:2},1032,["to"])]))),128))])]))),128))])])}}});export{j as default};
