import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.0cc98949.js";const h=JSON.parse('{"title":"Nuxt Module","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/nuxt.md","filePath":"guide/advanced/nuxt.md","lastUpdated":1694083721000}'),p={name:"guide/advanced/nuxt.md"},l=e(`<h1 id="nuxt-module" tabindex="-1">Nuxt Module <a class="header-anchor" href="#nuxt-module" aria-label="Permalink to &quot;Nuxt Module&quot;">​</a></h1><p>For Nuxt users, you only need to install <code>nuxt-vue-map-ui</code>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nuxt-vue-map-ui</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nuxt-vue-map-ui</span></span></code></pre></div><p>Then add the code below into your config file.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// nuxt.config.ts</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineNuxtConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  modules: [</span><span style="color:#9ECBFF;">&#39;nuxt-vue-map-ui&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  vueMap: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** Options */</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// nuxt.config.ts</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineNuxtConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  modules: [</span><span style="color:#032F62;">&#39;nuxt-vue-map-ui&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  vueMap: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** Options */</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>Refer to the <a href="https://github.com/nikolaynau/nuxt-vue-map-ui#readme" target="_blank" rel="noreferrer">docs</a> for how to configure it.</p>`,6),o=[l];function t(c,r,i,d,u,E){return a(),n("div",null,o)}const _=s(p,[["render",t]]);export{h as __pageData,_ as default};