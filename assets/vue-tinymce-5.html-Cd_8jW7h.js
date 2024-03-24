import{_ as t,r as l,o as d,c as r,a as e,b as n,d as s,e as a}from"./app-BvPowtGR.js";const c={},o=e("h1",{id:"vue-cli-3-tinymce-5-富文本编辑器整合",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-cli-3-tinymce-5-富文本编辑器整合"},[e("span",null,"Vue CLI 3 TinyMCE 5 富文本编辑器整合")])],-1),u=e("figure",null,[e("img",{src:"https://image.liubing.me/2019/12/26/8373ab26138dc.png",alt:"image",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image")],-1),m={href:"https://blog.csdn.net/liub37/article/details/83310879",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),v={href:"https://github.com/liub1934/vue-use-tinymce",title:"https://github.com/liub1934/vue-use-tinymce",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"插件安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#插件安装"},[e("span",null,"插件安装")])],-1),g={href:"https://github.com/tinymce/tinymce-vue",target:"_blank",rel:"noopener noreferrer"},h=e("br",null,null,-1),y=a(`<h3 id="安装-tinymce-vue" tabindex="-1"><a class="header-anchor" href="#安装-tinymce-vue"><span>安装 tinymce-vue</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @tinymce/tinymce-vue <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装-tinymce" tabindex="-1"><a class="header-anchor" href="#安装-tinymce"><span>安装 tinymce</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> tinymce <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>若无法完成安装，将下面的配置到<code>package.json</code>中执行<code>npm install</code></p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;@tinymce/tinymce-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;tinymce&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.0.3&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载中文语言包" tabindex="-1"><a class="header-anchor" href="#下载中文语言包"><span>下载中文语言包</span></a></h3>`,7),k={href:"https://www.tiny.cloud/get-tiny/language-packages/",target:"_blank",rel:"noopener noreferrer"},f=a(`<figure><img src="https://image.liubing.me/2019/12/26/8ab5303abec92.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>1、在<code>public</code>目录下新建<code>tinymce</code>，将上面下载的语言包解压到该目录<br> 2、在<code>node_modules</code>里面找到<code>tinymce</code>,将<code>skins</code>目录复制到<code>public/tinymce</code>里面<br> 最终形成以下目录形式：</p><figure><img src="https://image.liubing.me/2019/12/26/a5b859754b616.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h3><p>引入基本文件</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> tinymce <span class="token keyword">from</span> <span class="token string">&#39;tinymce/tinymce&#39;</span>
<span class="token keyword">import</span> Editor <span class="token keyword">from</span> <span class="token string">&#39;@tinymce/tinymce-vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;tinymce/themes/silver&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>components 中注册 tinymce-vue 才能使用</p><div class="language-Html line-numbers-mode" data-ext="Html" data-title="Html"><pre class="language-Html"><code>&lt;editor id=&quot;tinymce&quot; v-model=&quot;value&quot; :init=&quot;init&quot;&gt;&lt;/editor&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),_={href:"https://www.tiny.cloud/docs/",target:"_blank",rel:"noopener noreferrer"},x=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">init</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">language_url</span><span class="token operator">:</span> <span class="token string">&#39;/tinymce/langs/zh_CN.js&#39;</span><span class="token punctuation">,</span><span class="token comment">// 语言包的路径</span>
  <span class="token literal-property property">language</span><span class="token operator">:</span> <span class="token string">&#39;zh_CN&#39;</span><span class="token punctuation">,</span><span class="token comment">//语言</span>
  <span class="token literal-property property">skin_url</span><span class="token operator">:</span> <span class="token string">&#39;/tinymce/skins/ui/oxide&#39;</span><span class="token punctuation">,</span><span class="token comment">// skin路径</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span><span class="token comment">//编辑器高度</span>
  <span class="token literal-property property">branding</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//是否禁用“Powered by TinyMCE”</span>
  <span class="token literal-property property">menubar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//顶部菜单栏显示</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展插件" tabindex="-1"><a class="header-anchor" href="#扩展插件"><span>扩展插件</span></a></h2>`,2),q={href:"https://www.tiny.cloud/docs/plugins/",target:"_blank",rel:"noopener noreferrer"},w=e("br",null,null,-1),C=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;tinymce/plugins/image&#39;</span> <span class="token comment">// 插入上传图片插件</span>
<span class="token keyword">import</span> <span class="token string">&#39;tinymce/plugins/media&#39;</span> <span class="token comment">// 插入视频插件</span>
<span class="token keyword">import</span> <span class="token string">&#39;tinymce/plugins/table&#39;</span> <span class="token comment">// 插入表格插件</span>
<span class="token keyword">import</span> <span class="token string">&#39;tinymce/plugins/lists&#39;</span> <span class="token comment">// 列表插件</span>
<span class="token keyword">import</span> <span class="token string">&#39;tinymce/plugins/wordcount&#39;</span> <span class="token comment">// 字数统计插件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入后还需要再<code>plugins</code>上配置和<code>toolbar</code>工具栏上添加相应的按钮</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token string">&#39;lists image media table wordcount&#39;</span><span class="token punctuation">,</span>
<span class="token literal-property property">toolbar</span><span class="token operator">:</span> <span class="token string">&#39;undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们一般会再次把它进行封装一下，以便其他地方随时可以引用</p><h2 id="完整代码-tinymce-editor-vue" tabindex="-1"><a class="header-anchor" href="#完整代码-tinymce-editor-vue"><span>完整代码 tinymce-editor.vue</span></a></h2><blockquote><p>这里只是一个简单的封装，不一定满足所有人的需求，可以按照自己的需求和思路进行更深层次的封装。</p></blockquote><div class="language-Html line-numbers-mode" data-ext="Html" data-title="Html"><pre class="language-Html"><code>&lt;template&gt;
  &lt;div class=&quot;tinymce-editor&quot;&gt;
    &lt;editor v-model=&quot;myValue&quot;
      :init=&quot;init&quot;
      :disabled=&quot;disabled&quot;
      @onClick=&quot;onClick&quot;&gt;
    &lt;/editor&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import tinymce from &#39;tinymce/tinymce&#39;
import Editor from &#39;@tinymce/tinymce-vue&#39;
import &#39;tinymce/themes/silver&#39;
// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import &#39;tinymce/plugins/image&#39;// 插入上传图片插件
import &#39;tinymce/plugins/media&#39;// 插入视频插件
import &#39;tinymce/plugins/table&#39;// 插入表格插件
import &#39;tinymce/plugins/lists&#39;// 列表插件
import &#39;tinymce/plugins/wordcount&#39;// 字数统计插件
export default {
  components: {
    Editor
  },
  props: {
    value: {
      type: String,
      default: &#39;&#39;
    },
    // 基本路径，默认为空根目录，如果你的项目发布后的地址为目录形式，
    // 即abc.com/tinymce，baseUrl需要配置成tinymce，不然发布后资源会找不到
    baseUrl: {
      type: String,
      default: &#39;&#39;
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: &#39;lists image media table wordcount&#39;
    },
    toolbar: {
      type: [String, Array],
      default: &#39;undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat&#39;
    }
  },
  data () {
    return {
      init: {
        language_url: \`\${this.baseUrl}/tinymce/langs/zh_CN.js\`,
        language: &#39;zh_CN&#39;,
        skin_url: \`\${this.baseUrl}/tinymce/skins/ui/oxide\`,
        content_css: \`\${this.baseUrl}/tinymce/skins/content/default/content.css\`,
        // skin_url: \`\${this.baseUrl}/tinymce/skins/ui/oxide-dark\`, // 暗色系
        // content_css: \`\${this.baseUrl}/tinymce/skins/content/dark/content.css\`, // 暗色系
        height: 300,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: false,
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) =&gt; {
          const img = &#39;data:image/jpeg;base64,&#39; + blobInfo.base64()
          success(img)
        }
      },
      myValue: this.value
    }
  },
  mounted () {
    tinymce.init({})
  },
  methods: {
    // 添加相关的事件，可用的事件参照文档=&gt; https://github.com/tinymce/tinymce-vue =&gt; All available events
    // 需要什么事件可以自己增加
    onClick (e) {
      this.$emit(&#39;onClick&#39;, e, tinymce)
    },
    // 可以添加一些自己的自定义事件，如清空内容
    clear () {
      this.myValue = &#39;&#39;
    }
  },
  watch: {
    value (newValue) {
      this.myValue = newValue
    },
    myValue (newValue) {
      this.$emit(&#39;input&#39;, newValue)
    }
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装后使用" tabindex="-1"><a class="header-anchor" href="#封装后使用"><span>封装后使用</span></a></h2><div class="language-Html line-numbers-mode" data-ext="Html" data-title="Html"><pre class="language-Html"><code>&lt;template&gt;
  &lt;div&gt;
    { { msg }}
    &lt;tinymce-editor ref=&quot;editor&quot;
      v-model=&quot;msg&quot;
      :disabled=&quot;disabled&quot;
      @onClick=&quot;onClick&quot;&gt;
    &lt;/tinymce-editor&gt;
    &lt;button @click=&quot;clear&quot;&gt;清空内容&lt;/button&gt;
    &lt;button @click=&quot;disabled = true&quot;&gt;禁用&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;


&lt;script&gt;
import TinymceEditor from &#39;./tinymce-editor/tinymce-editor&#39;
export default {
  components: {
    TinymceEditor
  },
  data () {
    return {
      msg: &#39;Welcome to Use Tinymce Editor&#39;,
      disabled: false
    }
  },
  methods: {
    // 鼠标单击的事件
    onClick (e, editor) {
      console.log(&#39;Element clicked&#39;)
      console.log(e)
      console.log(editor)
    },
    // 清空内容
    clear () {
      this.$refs.editor.clear()
    }
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="效果图" tabindex="-1"><a class="header-anchor" href="#效果图"><span>效果图</span></a></h2><figure><img src="https://image.liubing.me/2019/12/26/a74de0869dd5e.gif" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="在线预览" tabindex="-1"><a class="header-anchor" href="#在线预览"><span>在线预览</span></a></h2>`,12),j={href:"https://github.liubing.me/vue-use-tinymce",title:"在线Demo",target:"_blank",rel:"noopener noreferrer"},V=e("blockquote",null,[e("p",null,[n("需要梯子"),e("br"),n(" 需要梯子"),e("br"),n(" 需要梯子")])],-1),T={href:"https://codesandbox.io/s/1654wj537?fontsize=14",target:"_blank",rel:"noopener noreferrer"};function E(I,z){const i=l("ExternalLinkIcon");return d(),r("div",null,[o,u,e("p",null,[n("基于 Vue CLI 3 脚手架搭建的项目整合 tinymce 5 富文本编辑器，vue cli 2 版本及 tinymce 4 版本参考："),e("a",m,[n("https://blog.csdn.net/liub37/article/details/83310879"),s(i)]),p,n(" 做了些小修改，详情见 github。")]),e("blockquote",null,[e("p",null,[n("Github:"),e("a",v,[n("https://github.com/liub1934/vue-use-tinymce"),s(i)])])]),b,e("p",null,[n("tinymce 官方提供了一个 vue 的组件"),e("a",g,[n("tinymce-vue"),s(i)]),h,n(" 如果有注册或购买过服务的话，直接通过组件配置 api-key 直接使用，像我这种懒的注册或者购买的直接下载 tinymce，自力更生")]),y,e("p",null,[n("tinymce 提供了很多的语言包，这里我们下载"),e("a",k,[n("中文语言包"),s(i)])]),f,e("p",null,[n("初始化配置项，具体参考"),e("a",_,[n("官网文档"),s(i)]),n("，这里说几个重要的")]),x,e("p",null,[n("默认的编辑器只有基本功能，如果还需要上传图片，插入表格之类的功能就需要添加"),e("a",q,[n("插件"),s(i)]),w,n(" 如添加上传图片和插入表格的插件")]),C,e("p",null,[e("a",j,[n("在线 Demo"),s(i)])]),V,e("p",null,[e("a",T,[n("Edit on CodeSandBox"),s(i)])])])}const H=t(c,[["render",E],["__file","vue-tinymce-5.html.vue"]]),M=JSON.parse('{"path":"/article/vue/vue-tinymce-5.html","title":"Vue CLI 3 TinyMCE 5 富文本编辑器整合","lang":"zh-CN","frontmatter":{"date":"2019-04-06T00:00:00.000Z","category":["Vue","Web"],"tag":["Vue","TinyMCE","富文本编辑器","TinyMCE-Vue"],"layout":"ArticleLayout","containerClass":"article-container","description":"Vue CLI 3 TinyMCE 5 富文本编辑器整合 imageimage 基于 Vue CLI 3 脚手架搭建的项目整合 tinymce 5 富文本编辑器，vue cli 2 版本及 tinymce 4 版本参考：https://blog.csdn.net/liub37/article/details/83310879 做了些小修改，详情见 gi...","head":[["meta",{"property":"og:url","content":"https://liubing.me/article/vue/vue-tinymce-5.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"Vue CLI 3 TinyMCE 5 富文本编辑器整合"}],["meta",{"property":"og:description","content":"Vue CLI 3 TinyMCE 5 富文本编辑器整合 imageimage 基于 Vue CLI 3 脚手架搭建的项目整合 tinymce 5 富文本编辑器，vue cli 2 版本及 tinymce 4 版本参考：https://blog.csdn.net/liub37/article/details/83310879 做了些小修改，详情见 gi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://image.liubing.me/2019/12/26/8373ab26138dc.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-20T14:06:59.000Z"}],["meta",{"property":"article:author","content":"Bing🐣"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"TinyMCE"}],["meta",{"property":"article:tag","content":"富文本编辑器"}],["meta",{"property":"article:tag","content":"TinyMCE-Vue"}],["meta",{"property":"article:published_time","content":"2019-04-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-20T14:06:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue CLI 3 TinyMCE 5 富文本编辑器整合\\",\\"image\\":[\\"https://image.liubing.me/2019/12/26/8373ab26138dc.png\\",\\"https://image.liubing.me/2019/12/26/8ab5303abec92.png\\",\\"https://image.liubing.me/2019/12/26/a5b859754b616.png\\",\\"https://image.liubing.me/2019/12/26/a74de0869dd5e.gif\\"],\\"datePublished\\":\\"2019-04-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-20T14:06:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"插件安装","slug":"插件安装","link":"#插件安装","children":[{"level":3,"title":"安装 tinymce-vue","slug":"安装-tinymce-vue","link":"#安装-tinymce-vue","children":[]},{"level":3,"title":"安装 tinymce","slug":"安装-tinymce","link":"#安装-tinymce","children":[]},{"level":3,"title":"下载中文语言包","slug":"下载中文语言包","link":"#下载中文语言包","children":[]}]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]}]},{"level":2,"title":"扩展插件","slug":"扩展插件","link":"#扩展插件","children":[]},{"level":2,"title":"完整代码 tinymce-editor.vue","slug":"完整代码-tinymce-editor-vue","link":"#完整代码-tinymce-editor-vue","children":[]},{"level":2,"title":"封装后使用","slug":"封装后使用","link":"#封装后使用","children":[]},{"level":2,"title":"效果图","slug":"效果图","link":"#效果图","children":[]},{"level":2,"title":"在线预览","slug":"在线预览","link":"#在线预览","children":[]}],"git":{"createdTime":1671435588000,"updatedTime":1687270019000,"contributors":[{"name":"liub1934","email":"liub1934@gmail.com","commits":6}]},"readingTime":{"minutes":3.85,"words":1156},"filePathRelative":"article/vue/vue-tinymce-5.md","localizedDate":"2019年4月6日","excerpt":"\\n<figure><img src=\\"https://image.liubing.me/2019/12/26/8373ab26138dc.png\\" alt=\\"image\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image</figcaption></figure>\\n<p>基于 Vue CLI 3 脚手架搭建的项目整合 tinymce 5 富文本编辑器，vue cli 2 版本及 tinymce 4 版本参考：<a href=\\"https://blog.csdn.net/liub37/article/details/83310879\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/liub37/article/details/83310879</a><br>\\n做了些小修改，详情见 github。</p>\\n","autoDesc":true}');export{H as comp,M as data};
