import{_ as r,c as d,b as i,d as h,a as o,a9 as e,a8 as a,r as p,o as c}from"./app-CyBGB7Zn.js";const k={};function g(b,s){const n=p("Tabs");return c(),d("div",null,[s[4]||(s[4]=i("h1",{id:"解决-vite-引入-variables-变量样式文件报错-this-file-is-already-being-loaded-问题",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#解决-vite-引入-variables-变量样式文件报错-this-file-is-already-being-loaded-问题"},[i("span",null,"解决 Vite 引入 variables 变量样式文件报错 This file is already being loaded 问题")])],-1)),s[5]||(s[5]=i("p",null,[e("之前脚手架使用的 Vue Cli 的时候，一般样式文件会定义一个变量样式文件，如"),i("code",null,"variables.scss"),e("，会在"),i("code",null,"vue.config"),e("中全局引入，而"),i("code",null,"variables.scss"),e("中也会通过"),i("code",null,":export"),e("的形式将变量导出，这样也方便在其他文件如 js 中引入相关变量。")],-1)),h(n,{id:"7",data:[{id:"variables.scss"},{id:"other.js"}]},{title0:a(({value:l,isActive:t})=>s[0]||(s[0]=[e("variables.scss")])),title1:a(({value:l,isActive:t})=>s[1]||(s[1]=[e("other.js")])),tab0:a(({value:l,isActive:t})=>s[2]||(s[2]=[i("div",{class:"language-scss line-numbers-mode","data-highlighter":"shiki","data-ext":"scss",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"$main-color"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"#"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#D19A66"}},"2f54eb"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},":export {")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  mainColor: "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"$main-color"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:a(({value:l,isActive:t})=>s[3]||(s[3]=[i("div",{class:"language-js line-numbers-mode","data-highlighter":"shiki","data-ext":"js",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"import"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}}," variables"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," from"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," '@/styles/variables.scss'")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"console"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"log"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"variables"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"mainColor"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") "),i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"// #2f54eb")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),s[6]||(s[6]=o(`<h2 id="vite-引用问题" tabindex="-1"><a class="header-anchor" href="#vite-引用问题"><span>Vite 引用问题</span></a></h2><p>在 Vite 中同样也可以<code>vite.config</code>中进行全局变量的引入，如下形式：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">css</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  preprocessorOptions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    scss</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      additionalData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          @import &quot;./src/styles/variables.scss&quot;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        \`</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时在其他文件如 js 中通过<code>import variables</code>的形式引入该文件的时候会报一个<code>This file is already being loaded.</code>的错误，大致意思该文件已经全局引入了，不能够在其他地方再次引入，网上 Google 搜索了一圈也没看到啥好的解决方法，最后只找到一个取巧的方式。</p><h2 id="取巧方式" tabindex="-1"><a class="header-anchor" href="#取巧方式"><span>取巧方式</span></a></h2><p>由于在<code>vite.config</code>中已经全局引入<code>variables.scss</code>文件，在 scss 文件中都可以使用里面的变量，所以可以新建一个<code>variables.module.scss</code>的文件，里面只需要留导出变量的内容。</p><div class="language-scss line-numbers-mode" data-highlighter="shiki" data-ext="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:export {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  mainColor: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$main-color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样其他文件在需要使用<code>variables.scss</code>中变量的时候只需要<code>import</code> <code>variables.module.scss</code>文件即可，这样就不会触发全局引入的情况下在其他文件再次引入的时候报错问题。</p>`,8))])}const m=r(k,[["render",g]]),u=JSON.parse('{"path":"/article/vue/fix-vite-import-variables-file-already-being-loaded-error.html","title":"解决 Vite 引入 variables 变量样式文件报错 This file is already being loaded 问题","lang":"zh-CN","frontmatter":{"date":"2023-02-04T00:00:00.000Z","category":["Vue","Vite"],"tag":["Vue","Vite","Scss"],"layout":"ArticleLayout","containerClass":"article-container","description":"之前脚手架使用的 Vue Cli 的时候，一般样式文件会定义一个变量样式文件，如variables.scss，会在vue.config中全局引入，而variables.scss中也会通过:export的形式将变量导出，这样也方便在其他文件如 js 中引入相关变量。","head":[["meta",{"property":"og:url","content":"https://liubing.me/article/vue/fix-vite-import-variables-file-already-being-loaded-error.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"解决 Vite 引入 variables 变量样式文件报错 This file is already being loaded 问题"}],["meta",{"property":"og:description","content":"之前脚手架使用的 Vue Cli 的时候，一般样式文件会定义一个变量样式文件，如variables.scss，会在vue.config中全局引入，而variables.scss中也会通过:export的形式将变量导出，这样也方便在其他文件如 js 中引入相关变量。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-25T00:44:02.000Z"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"Vite"}],["meta",{"property":"article:tag","content":"Scss"}],["meta",{"property":"article:published_time","content":"2023-02-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-25T00:44:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"解决 Vite 引入 variables 变量样式文件报错 This file is already being loaded 问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-25T00:44:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"git":{"createdTime":1675519772000,"updatedTime":1727225042000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":4,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":1.29,"words":387},"filePathRelative":"article/vue/fix-vite-import-variables-file-already-being-loaded-error.md","localizedDate":"2023年2月4日","excerpt":"\\n<p>之前脚手架使用的 Vue Cli 的时候，一般样式文件会定义一个变量样式文件，如<code>variables.scss</code>，会在<code>vue.config</code>中全局引入，而<code>variables.scss</code>中也会通过<code>:export</code>的形式将变量导出，这样也方便在其他文件如 js 中引入相关变量。</p>\\n","autoDesc":true}');export{m as comp,u as data};
