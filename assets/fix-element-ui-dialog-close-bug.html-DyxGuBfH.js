import{_ as i,c as a,a as n,b as l,o as e}from"./app-iUePP8D9.js";const t={};function h(k,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="解决-element-ui-dialog-弹窗鼠标在遮罩层松开后导致弹窗关闭问题" tabindex="-1"><a class="header-anchor" href="#解决-element-ui-dialog-弹窗鼠标在遮罩层松开后导致弹窗关闭问题"><span>解决 Element UI Dialog 弹窗鼠标在遮罩层松开后导致弹窗关闭问题</span></a></h1><p>在 Dialog 弹窗中鼠标左键按住后移动到弹窗的遮罩层松开后弹窗会被关闭，很怪异的一个问题，经常碰到复制弹窗文字的时候鼠标不小心移动到了遮罩层后弹窗莫名其妙的就被关闭了。<br> 网上找了个类似的<a href="https://github.com/ElemeFE/element/issues/15000" target="_blank" rel="noopener noreferrer">issues</a>，如下图所示：</p><figure><img src="https://image.liubing.me/2021/05/30/20813bc7e4aa5.gif" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="解决方法一" tabindex="-1"><a class="header-anchor" href="#解决方法一"><span>解决方法一</span></a></h2><p>最简单有效的方法加个<code>:close-on-click-modal=&quot;false&quot;</code>来阻止点击遮罩层关闭弹窗</p><h2 id="解决方法二" tabindex="-1"><a class="header-anchor" href="#解决方法二"><span>解决方法二</span></a></h2><p>既能点击遮罩层关闭弹窗，又可以解决该弹窗的问题，可以利用 Dialog 的<code>before-close</code>和鼠标的<code>mousedown</code>和<code>mouseup</code>来解决，代码大致如下：<br> 利用<code>mousedown</code>和<code>mouseup</code>获取到的 class 列表在<code>before-close</code>的时候做判断</p><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">el-button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> @click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;dialogVisible = true&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      点击打开 Dialog</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">el-button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">el-dialog</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;提示&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      :visible.sync</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;dialogVisible&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      :before-close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;beforeDialogClose&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      @mousedown.native</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;dialogMousedown&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      @mouseup.native</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;dialogMouseup&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;这是一段信息&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> slot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;footer&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;dialog-footer&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">el-button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> @click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;dialogVisible = false&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;取 消&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">el-button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">el-button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;primary&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> @click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;dialogVisible = false&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          确 定</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">el-button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">el-dialog</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      dialogVisible</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      mousedownCls</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      mouseupCls</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  methods</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    dialogMousedown</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">mousedownCls</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E06C75;">classList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    dialogMouseup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">mouseupCls</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E06C75;">classList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    beforeDialogClose</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">done</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> isWrapper</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">mousedownCls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">includes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;el-dialog__wrapper&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">mouseupCls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">includes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;el-dialog__wrapper&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> isClose</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">mousedownCls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">includes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;el-dialog__close&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">mouseupCls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">includes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;el-dialog__close&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">isWrapper</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> isClose</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        done</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语"><span>结语</span></a></h2><p>可以将上述部分代码写成 mixin，进行全局注册，这样其他页面的弹窗也可以直接使用，或者对弹窗进行二次封装也可。</p><h2 id="在线预览" tabindex="-1"><a class="header-anchor" href="#在线预览"><span>在线预览</span></a></h2>`,11),l("iframe",{width:"100%",height:"300",src:"//jsrun.net/NZVKp/embedded/all/light",allowfullscreen:"allowfullscreen",frameborder:"0"},null,-1)]))}const d=i(t,[["render",h],["__file","fix-element-ui-dialog-close-bug.html.vue"]]),r=JSON.parse('{"path":"/article/vue/element-ui/fix-element-ui-dialog-close-bug.html","title":"解决 Element UI Dialog 弹窗鼠标在遮罩层松开后导致弹窗关闭问题","lang":"zh-CN","frontmatter":{"date":"2021-05-30T00:00:00.000Z","category":["Element UI","Vue","Web"],"tag":["Vue","Dialog","弹窗"],"layout":"ArticleLayout","containerClass":"article-container","description":"在 Dialog 弹窗中鼠标左键按住后移动到弹窗的遮罩层松开后弹窗会被关闭，很怪异的一个问题，经常碰到复制弹窗文字的时候鼠标不小心移动到了遮罩层后弹窗莫名其妙的就被关闭了。 网上找了个类似的issues，如下图所示：","head":[["meta",{"property":"og:url","content":"https://liubing.me/article/vue/element-ui/fix-element-ui-dialog-close-bug.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"解决 Element UI Dialog 弹窗鼠标在遮罩层松开后导致弹窗关闭问题"}],["meta",{"property":"og:description","content":"在 Dialog 弹窗中鼠标左键按住后移动到弹窗的遮罩层松开后弹窗会被关闭，很怪异的一个问题，经常碰到复制弹窗文字的时候鼠标不小心移动到了遮罩层后弹窗莫名其妙的就被关闭了。 网上找了个类似的issues，如下图所示："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://image.liubing.me/2021/05/30/20813bc7e4aa5.gif"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-20T14:06:59.000Z"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"Dialog"}],["meta",{"property":"article:tag","content":"弹窗"}],["meta",{"property":"article:published_time","content":"2021-05-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-20T14:06:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"解决 Element UI Dialog 弹窗鼠标在遮罩层松开后导致弹窗关闭问题\\",\\"image\\":[\\"https://image.liubing.me/2021/05/30/20813bc7e4aa5.gif\\"],\\"datePublished\\":\\"2021-05-30T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-20T14:06:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"解决方法一","slug":"解决方法一","link":"#解决方法一","children":[]},{"level":2,"title":"解决方法二","slug":"解决方法二","link":"#解决方法二","children":[]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]},{"level":2,"title":"在线预览","slug":"在线预览","link":"#在线预览","children":[]}],"git":{"createdTime":1671435588000,"updatedTime":1687270019000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":6,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":1.4,"words":419},"filePathRelative":"article/vue/element-ui/fix-element-ui-dialog-close-bug.md","localizedDate":"2021年5月30日","excerpt":"\\n<p>在 Dialog 弹窗中鼠标左键按住后移动到弹窗的遮罩层松开后弹窗会被关闭，很怪异的一个问题，经常碰到复制弹窗文字的时候鼠标不小心移动到了遮罩层后弹窗莫名其妙的就被关闭了。<br>\\n网上找了个类似的<a href=\\"https://github.com/ElemeFE/element/issues/15000\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">issues</a>，如下图所示：</p>\\n","autoDesc":true}');export{d as comp,r as data};