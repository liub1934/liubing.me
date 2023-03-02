import{_ as i,G as a,S as d,U as e,a1 as t,V as n,a3 as r,a2 as s,C as o}from"./framework-ad037d56.js";const u={},c=e("h1",{id:"vue-js-你需要知道的-v-slot-转",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-js-你需要知道的-v-slot-转","aria-hidden":"true"},"#"),t(" Vue.js 你需要知道的 v-slot[转]")],-1),v={href:"https://github.com/vuejs/vue/releases/tag/v2.6.0",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"v-slot",-1),g=e("code",null,"slot",-1),p=e("code",null,"scope-slot",-1),b=e("code",null,"slot",-1),h=e("code",null,"scope-slot",-1),f=e("code",null,"vue@3.0.x",-1),H=e("code",null,"vue@2.6.0",-1),_=e("code",null,"v-slot",-1),q=s(`<h2 id="具名插槽" tabindex="-1"><a class="header-anchor" href="#具名插槽" aria-hidden="true">#</a> 具名插槽</h2><blockquote><p>在 2.6.0+ 中已弃用</p></blockquote><p>先前，我们使用具名插槽来自定义模板内容，例如，一个假设的 <code>&lt;base-layout&gt;</code> 组件的模板如下：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;div class=&quot;container&quot;&gt;
  &lt;header&gt;
    &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;slot&gt;&lt;/slot&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt;
  &lt;/footer&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在向具名插槽提供内容的时候，我们可以在一个父组件的 <code>&lt;template&gt;</code> 元素上使用 <code>slot</code> 特性：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;base-layout&gt;
  &lt;template slot=&quot;header&quot;&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/template&gt;
  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
  &lt;p&gt;And another one.&lt;/p&gt;
  &lt;template slot=&quot;footer&quot;&gt;
    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;
  &lt;/template&gt;
&lt;/base-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者直接用在一个普通的元素上：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;base-layout&gt;
  &lt;h1 slot=&quot;header&quot;&gt;Here might be a page title&lt;/h1&gt;
  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
  &lt;p&gt;And another one.&lt;/p&gt;
  &lt;p slot=&quot;footer&quot;&gt;Here&#39;s some contact info&lt;/p&gt;
&lt;/base-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述两个示例渲染出来的 HTML 都将会是：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;div class=&quot;container&quot;&gt;
  &lt;header&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
    &lt;p&gt;And another one.&lt;/p&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;
  &lt;/footer&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以使用 <code>v-slot</code> 指令改写上面的栗子：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;base-layout&gt;
  &lt;template v-slot:header&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/template&gt;
  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
  &lt;p&gt;And another one.&lt;/p&gt;
  &lt;template v-slot:footer&gt;
    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;
  &lt;/template&gt;
&lt;/base-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就是这么简单，插槽的名字现在通过 <code>v-slot:slotName</code> 这种形式来使用。</p><blockquote><p><strong>Tips:</strong> 没有名字的 <code>&lt;slot&gt;</code> 隐含有一个 <code>&quot;default&quot;</code> 名称</p></blockquote><p>例如，上面的默认插槽，如果你想显示调用的话，可以这样：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;base-layout&gt;
  &lt;template v-slot:header&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/template&gt;
  &lt;template v-slot:default&gt;
    &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
    &lt;p&gt;And another one.&lt;/p&gt;
  &lt;/template&gt;
  &lt;template v-slot:footer&gt;
    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;
  &lt;/template&gt;
&lt;/base-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无论哪种方式，上面的代码都将输出为下面代码：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;div class=&quot;container&quot;&gt;
  &lt;header&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
    &lt;p&gt;And another one.&lt;/p&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;
  &lt;/footer&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请注意， <code>v-slot</code> 只能添加到 <code>&lt;template&gt;</code> 或自定义组件上，这点与弃用的 slot 属性不同</p></blockquote><h2 id="作用域插槽" tabindex="-1"><a class="header-anchor" href="#作用域插槽" aria-hidden="true">#</a> 作用域插槽</h2><blockquote><p>在 2.6.0+ 中已弃用</p></blockquote><p>有时候，我们想在父组件中访问子组件内部的一些可用数据。例如，假设有一个下面模板的 <code>&lt;current-user&gt;</code> 组件：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>    &lt;span&gt;
      &lt;slot&gt;{{ user.lastName }}&lt;/slot&gt;
    &lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可能想用用户的名字来替换掉插槽里面的姓，于是我们这样写：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;current-user&gt;
  {{ user.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很不幸，上面这段代码不能如你预期那样工作，因为当前代码的作用域环境是在父组件中，所以它访问不了 <code>&lt;current-user&gt;</code> 内部的数据。<br> 为了解决这个， 我们可以在 <code>&lt;current-user&gt;</code> 内部的 <code>&lt;slot&gt;</code> 元素上动态绑定一个 <code>user</code> 对象属性：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;span&gt;
  &lt;!-- 完整 v-bind:user 下面是简写形式 --&gt;
  &lt;slot :user=&quot;user&quot;&gt;
    {{ user.lastName }}
  &lt;/slot&gt;
&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定到 <code>&lt;slot&gt;</code> 元素上的属性我们称之为 <strong>slot props</strong>。现在，在父作用域中，我们可以通过 <code>slot-scope</code> 来访问 <code>user</code> 数据了：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;current-user&gt;
  &lt;template slot-scope=&quot;slotProp&quot;&gt;
    {{ slotProp.user.firstName }}
  &lt;/template&gt;
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，我们使用 <code>v-slot</code> 重构上面的代码：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;current-user&gt;
  &lt;template v-slot:default=&quot;slotProps&quot;&gt;
    {{ slotProps.user.firstName }}
  &lt;/template&gt;
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者直接作用在 <code>&lt;current-user&gt;</code> 上的写法：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;!-- 省略默认插槽名字 --&gt;
&lt;current-user v-slot=&quot;slotProp&quot;&gt;
  {{ slotProp.user.firstName }}
&lt;/current-user&gt;
&lt;!-- 显示调用默认插槽名字 --&gt;
&lt;current-user v-slot:default=&quot;slotProp&quot;&gt;
  {{ slotProp.user.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在这个栗子中，我们选择 <code>slotProp</code> 作为我们的 <strong>slot props</strong> 名字，但你可以使用你喜欢的任何名字。</p></blockquote><h2 id="单个默认插槽的缩写形式" tabindex="-1"><a class="header-anchor" href="#单个默认插槽的缩写形式" aria-hidden="true">#</a> 单个默认插槽的缩写形式</h2><p>在上述情况下，当且仅当提供了默认插槽内容时，我们可以使用 <code>v-slot</code> 直接作用在组件上：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>    &lt;current-user v-slot:default=&quot;slotProps&quot;&gt;
      {{ slotProps.user.firstName }}
    &lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以简化上面的的默认插槽写法：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;current-user v-slot=&quot;slotProps&quot;&gt;
  {{ slotProps.user.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意了，默认插槽的缩写语法不能与具名插槽混用：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;!-- 控制台将报警告：--&gt;
&lt;!-- To avoid scope ambiguity, the default slot should also use &lt;template&gt; syntax when there are other named slots. --&gt;
&lt;!-- 意思就是说，为了避免作用域模糊 --&gt;
&lt;!-- 当有其他具名插槽时，默认插槽也应当使用 &#39;&lt;template&gt;&#39; 模板语法 --&gt;
&lt;current-user v-slot=&quot;slotProps&quot;&gt;
  {{ slotProps.user.firstName }}
  &lt;template v-slot:other=&quot;otherSlotProps&quot;&gt;
    slotProps is NOT available here
  &lt;/template&gt;
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>于是，上面的代码，我们改写成：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;current-user&gt;
  &lt;!-- 两种写法均可 --&gt;
  &lt;!--&lt;template v-slot=&quot;slotProps&quot;&gt;
    {{ slotProps.user.firstName }}
  &lt;/template&gt;--&gt;
  &lt;template v-slot:default=&quot;slotProps&quot;&gt;
    {{ slotProps.user.firstName }}
  &lt;/template&gt;
  &lt;template v-slot:other=&quot;otherSlotProps&quot;&gt;
    ...
  &lt;/template&gt;
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插槽内容的解构赋值" tabindex="-1"><a class="header-anchor" href="#插槽内容的解构赋值" aria-hidden="true">#</a> 插槽内容的解构赋值</h2><p>在 Vue 代码内部，我们传递的 slotProps 其实就是函数的一个单一参数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">slotProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... slot content ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这也就意味着 <code>v-slot</code> 的值只要满足函数参数定义的 JavaScript 表达式的都可以接受。因此，在支持的环境（单文件或现代浏览器）中，你还可以使用 <strong>ES2015</strong> 解构语法来提取特定的插值内容，例如：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;current-user v-slot=&quot;{ user }&quot;&gt;
  {{ user.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码看起来更简洁对吧。我们还可以重命名解构变量：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;current-user v-slot=&quot;{ user: person }&quot;&gt;
  {{ person.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这给了我们很多自由操作的空间，你甚至可以自定义回退内容，以便在未定义插值情况下使用：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>    &lt;current-user v-slot=&quot;{ user = { firstName: &#39;Guest&#39; } }&quot;&gt;&gt;
      {{ user.firstName }}
    &lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态插槽名称" tabindex="-1"><a class="header-anchor" href="#动态插槽名称" aria-hidden="true">#</a> 动态插槽名称</h2><blockquote><p>2.6.0+ 新增</p></blockquote>`,54),x={href:"https://cn.vuejs.org/v2/guide/syntax.html#%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"v-slot",-1),N=s(`<div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;base-layout&gt;
  &lt;template v-slot:[dynamicSlotName]&gt;
    ...
  &lt;/template&gt;
&lt;/base-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命名插槽简写" tabindex="-1"><a class="header-anchor" href="#命名插槽简写" aria-hidden="true">#</a> 命名插槽简写</h2><blockquote><p>2.6.0+ 新增</p></blockquote><p>与 <code>v-on</code> 和 <code>v-bind</code> 类似，<code>v-slot</code> 也有一个简写，即使用 <code>#</code> 代替 <code>v-slot</code>。例如， <code>v-slot:header</code> 简写成 <code>#header</code>:</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;base-layout&gt;
  &lt;template #header&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/template&gt;
  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
  &lt;p&gt;And another one.&lt;/p&gt;
  &lt;template #footer&gt;
    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;
  &lt;/template&gt;
&lt;/base-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和其他指令一样，只有在提供参数时才能使用简写形式，下面的写法是无效的：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;!-- 将会触发一个控制台警告 --&gt;
&lt;current-user #=&quot;{ user }&quot;&gt;
  {{ user.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说，如果你想使用简写语法，则务必指定插值的名字：</p><div class="language-Html line-numbers-mode" data-ext="Html"><pre class="language-Html"><code>&lt;current-user #default=&quot;{ user }&quot;&gt;
  {{ user.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,10),P={href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md",target:"_blank",rel:"noopener noreferrer"},j={href:"https://vuejs.org/v2/guide/components-slots.html#Slot-Content",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),t(" Demo")],-1),A={href:"https://codepen.io/anon/pen/mYOJrz",target:"_blank",rel:"noopener noreferrer"},V=e("h2",{id:"转载信息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#转载信息","aria-hidden":"true"},"#"),t(" 转载信息")],-1),S={href:"https://juejin.im/user/57beefb6efa631005a9edd7c",target:"_blank",rel:"noopener noreferrer"},E=e("br",null,null,-1),T={href:"https://juejin.im/post/5c64e11151882562e4726d98",title:"https://juejin.im/post/5c64e11151882562e4726d98",target:"_blank",rel:"noopener noreferrer"},B=e("br",null,null,-1),C={href:"https://juejin.im",target:"_blank",rel:"noopener noreferrer"};function w(J,L){const l=o("ExternalLinkIcon");return a(),d("div",null,[c,e("p",null,[t("从 "),e("a",v,[t("vue@2.6.x"),n(l)]),t(" 开始，Vue 为具名和范围插槽引入了一个全新的语法，即我们今天要讲的主角："),m,t(" 指令。目的就是想统一 "),g,t(" 和 "),p,t(" 语法，使代码更加规范和清晰。既然有新的语法上位，很明显，"),b,t(" 和 "),h,t(" 也将会在 "),f,t(" 中彻底的跟我们说拜拜了。而从 "),H,t(" 开始，官方推荐我们使用 "),_,t(" 来替代后两者。")]),r(" more "),q,e("p",null,[e("a",x,[t("动态指令参数"),n(l)]),t(" 也适用于 "),k,t(" ，允许我们定义动态插槽名称：")]),N,e("ul",null,[e("li",null,[e("a",P,[t("v-slot 设计细节看这里"),n(l)])]),e("li",null,[t("Vue 中文文档更新的慢，英文文档"),e("a",j,[t("看这里"),n(l)])])]),y,e("p",null,[e("a",A,[t("https://codepen.io/anon/pen/mYOJrz"),n(l)])]),V,e("p",null,[t("作者："),e("a",S,[t("gongph"),n(l)]),E,t(" 链接："),e("a",T,[t("https://juejin.im/post/5c64e11151882562e4726d98"),n(l)]),B,t(" 来源："),e("a",C,[t("掘金"),n(l)])])])}const z=i(u,[["render",w],["__file","vue-v-slot.html.vue"]]);export{z as default};
