import{_ as c,M as a,p as i,q as u,R as e,t,N as l,V as n,a1 as h}from"./framework-885bc257.js";const p={},_=e("h1",{id:"googletilelayer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#googletilelayer","aria-hidden":"true"},"#"),t(" GoogleTileLayer")],-1),m=e("code",null,"VMapGoogleTileLayer",-1),f={href:"https://developers.google.com/maps/documentation",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"basic-usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),t(" Basic usage")],-1),g=e("div",{class:"language-vue","data-ext":"vue"},[e("pre",{class:"language-vue"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("template")]),e("span",{class:"token punctuation"},">")]),t(`
  `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("VMap")]),e("span",{class:"token punctuation"},">")]),t(`
    `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("VMapGoogleTileLayer")]),t(),e("span",{class:"token punctuation"},"/>")]),t(`
  `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("VMap")]),e("span",{class:"token punctuation"},">")]),t(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("template")]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),b=e("h2",{id:"api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#"),t(" API")],-1),k=e("h3",{id:"attributes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),t(" Attributes")],-1),x={href:"https://leafletjs.com/reference.html#tilelayer",target:"_blank",rel:"noopener noreferrer"},v=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Description"),e("th",null,"Type"),e("th",null,"Default")])],-1),L=e("tr",null,[e("td",null,"type"),e("td",null,[t("Type of display layer on the map. Values: "),e("code",null,"hybrid"),t(", "),e("code",null,"satellite"),t(", "),e("code",null,"streets"),t(", "),e("code",null,"terrain"),t(".")]),e("td",null,[e("code",null,"string")]),e("td",null,"'streets'")],-1),T=e("tr",null,[e("td",null,"layers"),e("td",null,[t("Custom display layer type. If specified, overwrites the "),e("code",null,"type"),t(" attribute.")]),e("td",null,[e("code",null,"string")]),e("td",null,"—")],-1),V=e("tr",null,[e("td",null,"subdomains"),e("td",null,"List of third-level domains. Used to create the url of the tiles."),e("td",null,[e("code",null,"string[]")]),e("td",null,"['mt0', 'mt1', 'mt2', 'mt3']")],-1),N=e("td",null,"title",-1),D=e("td",null,[e("code",null,"string")],-1),M=e("td",null,"'Google'",-1),C=e("td",null,"overlay",-1),E=e("td",null,[e("code",null,"boolean")],-1),G=e("td",null,"false",-1),U=e("h3",{id:"events",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#events","aria-hidden":"true"},"#"),t(" Events")],-1),B={href:"https://leafletjs.com/reference.html#tilelayer-event",target:"_blank",rel:"noopener noreferrer"},I=h('<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>The default slot can be used to extend behavior.</td></tr></tbody></table><h3 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h3>',3),R=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Description"),e("th",null,"Type")])],-1),O=e("td",null,"tileLayer",-1),j=e("td",null,"Leaflet tile layer instance.",-1);function w(A,S){const o=a("ExternalLinkIcon"),r=a("Demo"),d=a("ClientOnly"),s=a("RouterLink");return i(),u("div",null,[_,e("p",null,[t("The "),m,t(" component is used to load and display "),e("a",f,[t("Google Map"),l(o)]),t(" tiles on the map.")]),y,l(d,null,{default:n(()=>[l(r,{url:"/tile/basic-google-tile-layer"},{default:n(()=>[g]),_:1})]),_:1}),b,k,e("p",null,[t("Use tile layer options from leaflet "),e("a",x,[t("documentation"),l(o)]),t(".")]),e("table",null,[v,e("tbody",null,[L,T,V,e("tr",null,[N,e("td",null,[t("Name of layer. Used in "),l(s,{to:"/components/control/layers-control.html"},{default:n(()=>[t("layers control")]),_:1}),t(".")]),D,M]),e("tr",null,[C,e("td",null,[t("Overlay layer. Used in "),l(s,{to:"/components/control/layers-control.html"},{default:n(()=>[t("layers control")]),_:1}),t(".")]),E,G])])]),U,e("p",null,[t("Use tile layer events from leaflet "),e("a",B,[t("documentation"),l(o)]),t(".")]),I,e("table",null,[R,e("tbody",null,[e("tr",null,[O,j,e("td",null,[t("Ref<"),l(s,{to:"/components/types.html#tilelayer"},{default:n(()=>[t("TileLayer")]),_:1}),t(">")])])])])])}const P=c(p,[["render",w],["__file","google-tile-layer.html.vue"]]);export{P as default};
