import{t as vt,e as j,h as c,f as be,g as bt,i as F,j as x,k as $,l as O,m as me,n as V,p as Oe,N as yt,q as R,u as re,v as A,x as Pe,y as _e,z as Ct,A as B,B as H,C as xt,D as ce,E as De,F as ie,G as $e,H as Te,I as _t,J as St,K as Be,L as Se,M as wt,O as zt,P as kt,Q as Bt,R as Pt,S as qe,T as Ye,U as Re,V as J,W as $t,X as Ge,Y as Xe,Z as Ke,$ as Ze,a0 as Je,a1 as Tt,a2 as Rt,a3 as It,a4 as Ee,a5 as Ue,a6 as je,a7 as Qe,a8 as Ft,_ as ne,c as N,o as D,b as S,d as I,a9 as T,aa as G,ab as Le,ac as Ot,ad as ae,ae as ee,af as Q,ag as ve,ah as xe,ai as Ie,aj as et,ak as Fe,al as Dt,am as Et,an as Ut,ao as jt,ap as tt,aq as ot,ar as Lt,as as he,at as Ae,au as At,av as Mt,aw as Nt,a as Wt,r as Ht}from"./app-DewMY4YL.js";import{_ as Vt,a as qt}from"./InputNumber-DRkCTDE3.js";import"./Input-Dzv3b8Zc.js";var Yt=0;function Gt(e){var t=++Yt;return vt(e)+t}const Xt=j({name:"ChevronRight",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function Kt(e){const{textColor2:t,primaryColorHover:o,primaryColorPressed:r,primaryColor:n,infoColor:s,successColor:i,warningColor:a,errorColor:d,baseColor:f,borderColor:h,opacityDisabled:l,tagColor:b,closeIconColor:p,closeIconColorHover:u,closeIconColorPressed:m,borderRadiusSmall:g,fontSizeMini:v,fontSizeTiny:w,fontSizeSmall:y,fontSizeMedium:k,heightMini:z,heightTiny:_,heightSmall:P,heightMedium:q,closeColorHover:U,closeColorPressed:Y,buttonColor2Hover:C,buttonColor2Pressed:M,fontWeightStrong:X}=e;return Object.assign(Object.assign({},bt),{closeBorderRadius:g,heightTiny:z,heightSmall:_,heightMedium:P,heightLarge:q,borderRadius:g,opacityDisabled:l,fontSizeTiny:v,fontSizeSmall:w,fontSizeMedium:y,fontSizeLarge:k,fontWeightStrong:X,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:f,colorCheckable:"#0000",colorHoverCheckable:C,colorPressedCheckable:M,colorChecked:n,colorCheckedHover:o,colorCheckedPressed:r,border:`1px solid ${h}`,textColor:t,color:b,colorBordered:"rgb(250, 250, 252)",closeIconColor:p,closeIconColorHover:u,closeIconColorPressed:m,closeColorHover:U,closeColorPressed:Y,borderPrimary:`1px solid ${F(n,{alpha:.3})}`,textColorPrimary:n,colorPrimary:F(n,{alpha:.12}),colorBorderedPrimary:F(n,{alpha:.1}),closeIconColorPrimary:n,closeIconColorHoverPrimary:n,closeIconColorPressedPrimary:n,closeColorHoverPrimary:F(n,{alpha:.12}),closeColorPressedPrimary:F(n,{alpha:.18}),borderInfo:`1px solid ${F(s,{alpha:.3})}`,textColorInfo:s,colorInfo:F(s,{alpha:.12}),colorBorderedInfo:F(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:F(s,{alpha:.12}),closeColorPressedInfo:F(s,{alpha:.18}),borderSuccess:`1px solid ${F(i,{alpha:.3})}`,textColorSuccess:i,colorSuccess:F(i,{alpha:.12}),colorBorderedSuccess:F(i,{alpha:.1}),closeIconColorSuccess:i,closeIconColorHoverSuccess:i,closeIconColorPressedSuccess:i,closeColorHoverSuccess:F(i,{alpha:.12}),closeColorPressedSuccess:F(i,{alpha:.18}),borderWarning:`1px solid ${F(a,{alpha:.35})}`,textColorWarning:a,colorWarning:F(a,{alpha:.15}),colorBorderedWarning:F(a,{alpha:.12}),closeIconColorWarning:a,closeIconColorHoverWarning:a,closeIconColorPressedWarning:a,closeColorHoverWarning:F(a,{alpha:.12}),closeColorPressedWarning:F(a,{alpha:.18}),borderError:`1px solid ${F(d,{alpha:.23})}`,textColorError:d,colorError:F(d,{alpha:.1}),colorBorderedError:F(d,{alpha:.08}),closeIconColorError:d,closeIconColorHoverError:d,closeIconColorPressedError:d,closeColorHoverError:F(d,{alpha:.12}),closeColorPressedError:F(d,{alpha:.18})})}const Zt={common:be,self:Kt},Jt={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Qt=x("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[$("strong",`
 font-weight: var(--n-font-weight-strong);
 `),O("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),O("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),O("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),O("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),$("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[O("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),O("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),$("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),$("icon, avatar",[$("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),$("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),$("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[me("disabled",[V("&:hover","background-color: var(--n-color-hover-checkable);",[me("checked","color: var(--n-text-color-hover-checkable);")]),V("&:active","background-color: var(--n-color-pressed-checkable);",[me("checked","color: var(--n-text-color-pressed-checkable);")])]),$("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[me("disabled",[V("&:hover","background-color: var(--n-color-checked-hover);"),V("&:active","background-color: var(--n-color-checked-pressed);")])])])]),eo=Object.assign(Object.assign(Object.assign({},A.props),Jt),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),to=$e("n-tag"),oo=j({name:"Tag",props:eo,slots:Object,setup(e){const t=R(null),{mergedBorderedRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:n,mergedRtlRef:s}=re(e),i=A("Tag","-tag",Qt,Zt,e,r);Pe(to,{roundRef:_e(e,"round")});function a(){if(!e.disabled&&e.checkable){const{checked:p,onCheckedChange:u,onUpdateChecked:m,"onUpdate:checked":g}=e;m&&m(!p),g&&g(!p),u&&u(!p)}}function d(p){if(e.triggerClickOnClose||p.stopPropagation(),!e.disabled){const{onClose:u}=e;u&&ie(u,p)}}const f={setTextContent(p){const{value:u}=t;u&&(u.textContent=p)}},h=Ct("Tag",s,r),l=B(()=>{const{type:p,size:u,color:{color:m,textColor:g}={}}=e,{common:{cubicBezierEaseInOut:v},self:{padding:w,closeMargin:y,borderRadius:k,opacityDisabled:z,textColorCheckable:_,textColorHoverCheckable:P,textColorPressedCheckable:q,textColorChecked:U,colorCheckable:Y,colorHoverCheckable:C,colorPressedCheckable:M,colorChecked:X,colorCheckedHover:de,colorCheckedPressed:fe,closeBorderRadius:K,fontWeightStrong:ye,[H("colorBordered",p)]:we,[H("closeSize",u)]:ze,[H("closeIconSize",u)]:L,[H("fontSize",u)]:E,[H("height",u)]:W,[H("color",p)]:se,[H("textColor",p)]:Z,[H("border",p)]:oe,[H("closeIconColor",p)]:pe,[H("closeIconColorHover",p)]:ft,[H("closeIconColorPressed",p)]:pt,[H("closeColorHover",p)]:ht,[H("closeColorPressed",p)]:mt}}=i.value,Ce=xt(y);return{"--n-font-weight-strong":ye,"--n-avatar-size-override":`calc(${W} - 8px)`,"--n-bezier":v,"--n-border-radius":k,"--n-border":oe,"--n-close-icon-size":L,"--n-close-color-pressed":mt,"--n-close-color-hover":ht,"--n-close-border-radius":K,"--n-close-icon-color":pe,"--n-close-icon-color-hover":ft,"--n-close-icon-color-pressed":pt,"--n-close-icon-color-disabled":pe,"--n-close-margin-top":Ce.top,"--n-close-margin-right":Ce.right,"--n-close-margin-bottom":Ce.bottom,"--n-close-margin-left":Ce.left,"--n-close-size":ze,"--n-color":m||(o.value?we:se),"--n-color-checkable":Y,"--n-color-checked":X,"--n-color-checked-hover":de,"--n-color-checked-pressed":fe,"--n-color-hover-checkable":C,"--n-color-pressed-checkable":M,"--n-font-size":E,"--n-height":W,"--n-opacity-disabled":z,"--n-padding":w,"--n-text-color":g||Z,"--n-text-color-checkable":_,"--n-text-color-checked":U,"--n-text-color-hover-checkable":P,"--n-text-color-pressed-checkable":q}}),b=n?ce("tag",B(()=>{let p="";const{type:u,size:m,color:{color:g,textColor:v}={}}=e;return p+=u[0],p+=m[0],g&&(p+=`a${De(g)}`),v&&(p+=`b${De(v)}`),o.value&&(p+="c"),p}),l,e):void 0;return Object.assign(Object.assign({},f),{rtlEnabled:h,mergedClsPrefix:r,contentRef:t,mergedBordered:o,handleClick:a,handleCloseClick:d,cssVars:n?void 0:l,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender})},render(){var e,t;const{mergedClsPrefix:o,rtlEnabled:r,closable:n,color:{borderColor:s}={},round:i,onRender:a,$slots:d}=this;a==null||a();const f=Oe(d.avatar,l=>l&&c("div",{class:`${o}-tag__avatar`},l)),h=Oe(d.icon,l=>l&&c("div",{class:`${o}-tag__icon`},l));return c("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:r,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:i,[`${o}-tag--avatar`]:f,[`${o}-tag--icon`]:h,[`${o}-tag--closable`]:n}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},h||f,c("span",{class:`${o}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&n?c(yt,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?c("div",{class:`${o}-tag__border`,style:{borderColor:s}}):null)}});function ro(e){const{borderRadius:t,boxShadow2:o,baseColor:r}=e;return Object.assign(Object.assign({},St),{borderRadius:t,boxShadow:o,color:Be(r,"rgba(0, 0, 0, .85)"),textColor:r})}const rt=Te({name:"Tooltip",common:be,peers:{Popover:_t},self:ro}),no=Te({name:"Ellipsis",common:be,peers:{Tooltip:rt}}),so=Object.assign(Object.assign({},wt),A.props),io=j({name:"Tooltip",props:so,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=re(e),o=A("Tooltip","-tooltip",void 0,rt,e,t),r=R(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(s){r.value.setShow(s)}}),{popoverRef:r,mergedTheme:o,popoverThemeOverrides:B(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return c(Se,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),lo=x("ellipsis",{overflow:"hidden"},[me("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),$("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),$("cursor-pointer",`
 cursor: pointer;
 `)]);function Me(e){return`${e}-ellipsis--line-clamp`}function Ne(e,t){return`${e}-ellipsis--cursor-${t}`}const ao=Object.assign(Object.assign({},A.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),co=j({name:"Ellipsis",inheritAttrs:!1,props:ao,slots:Object,setup(e,{slots:t,attrs:o}){const r=zt(),n=A("Ellipsis","-ellipsis",lo,no,e,r),s=R(null),i=R(null),a=R(null),d=R(!1),f=B(()=>{const{lineClamp:g}=e,{value:v}=d;return g!==void 0?{textOverflow:"","-webkit-line-clamp":v?"":g}:{textOverflow:v?"":"ellipsis","-webkit-line-clamp":""}});function h(){let g=!1;const{value:v}=d;if(v)return!0;const{value:w}=s;if(w){const{lineClamp:y}=e;if(p(w),y!==void 0)g=w.scrollHeight<=w.offsetHeight;else{const{value:k}=i;k&&(g=k.getBoundingClientRect().width<=w.getBoundingClientRect().width)}u(w,g)}return g}const l=B(()=>e.expandTrigger==="click"?()=>{var g;const{value:v}=d;v&&((g=a.value)===null||g===void 0||g.setShow(!1)),d.value=!v}:void 0);kt(()=>{var g;e.tooltip&&((g=a.value)===null||g===void 0||g.setShow(!1))});const b=()=>c("span",Object.assign({},Bt(o,{class:[`${r.value}-ellipsis`,e.lineClamp!==void 0?Me(r.value):void 0,e.expandTrigger==="click"?Ne(r.value,"pointer"):void 0],style:f.value}),{ref:"triggerRef",onClick:l.value,onMouseenter:e.expandTrigger==="click"?h:void 0}),e.lineClamp?t:c("span",{ref:"triggerInnerRef"},t));function p(g){if(!g)return;const v=f.value,w=Me(r.value);e.lineClamp!==void 0?m(g,w,"add"):m(g,w,"remove");for(const y in v)g.style[y]!==v[y]&&(g.style[y]=v[y])}function u(g,v){const w=Ne(r.value,"pointer");e.expandTrigger==="click"&&!v?m(g,w,"add"):m(g,w,"remove")}function m(g,v,w){w==="add"?g.classList.contains(v)||g.classList.add(v):g.classList.contains(v)&&g.classList.remove(v)}return{mergedTheme:n,triggerRef:s,triggerInnerRef:i,tooltipRef:a,handleClick:l,renderTrigger:b,getTooltipDisabled:h}},render(){var e;const{tooltip:t,renderTrigger:o,$slots:r}=this;if(t){const{mergedTheme:n}=this;return c(io,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip}),{trigger:o,default:(e=r.tooltip)!==null&&e!==void 0?e:r.default})}else return o()}});function uo(e){const{baseColor:t,textColor2:o,bodyColor:r,cardColor:n,dividerColor:s,actionColor:i,scrollbarColor:a,scrollbarColorHover:d,invertedColor:f}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:i,headerColor:n,headerColorInverted:f,footerColor:i,footerColorInverted:f,headerBorderColor:s,headerBorderColorInverted:f,footerBorderColor:s,footerBorderColorInverted:f,siderBorderColor:s,siderBorderColorInverted:f,siderColor:n,siderColorInverted:f,siderToggleButtonBorder:`1px solid ${s}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:Be(r,a),siderToggleBarColorHover:Be(r,d),__invertScrollbar:"true"}}const nt=Te({name:"Layout",common:be,peers:{Scrollbar:Pt},self:uo}),go=$e("n-layout-sider"),st={type:String,default:"static"},fo=x("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[x("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),$("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),po={embedded:Boolean,position:st,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},it=$e("n-layout");function lt(e){return j({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},A.props),po),setup(t){const o=R(null),r=R(null),{mergedClsPrefixRef:n,inlineThemeDisabled:s}=re(t),i=A("Layout","-layout",fo,nt,t,n);function a(m,g){if(t.nativeScrollbar){const{value:v}=o;v&&(g===void 0?v.scrollTo(m):v.scrollTo(m,g))}else{const{value:v}=r;v&&v.scrollTo(m,g)}}Pe(it,t);let d=0,f=0;const h=m=>{var g;const v=m.target;d=v.scrollLeft,f=v.scrollTop,(g=t.onScroll)===null||g===void 0||g.call(t,m)};Ye(()=>{if(t.nativeScrollbar){const m=o.value;m&&(m.scrollTop=f,m.scrollLeft=d)}});const l={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},b={scrollTo:a},p=B(()=>{const{common:{cubicBezierEaseInOut:m},self:g}=i.value;return{"--n-bezier":m,"--n-color":t.embedded?g.colorEmbedded:g.color,"--n-text-color":g.textColor}}),u=s?ce("layout",B(()=>t.embedded?"e":""),p,t):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:l,mergedTheme:i,handleNativeElScroll:h,cssVars:s?void 0:p,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender},b)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const n=r?this.hasSiderStyle:void 0,s=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return c("div",{class:s,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):c(qe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const ho=lt(!1),mo=lt(!0),vo=x("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[$("bordered",[O("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),O("left-placement",[$("bordered",[O("border",`
 right: 0;
 `)])]),$("right-placement",`
 justify-content: flex-start;
 `,[$("bordered",[O("border",`
 left: 0;
 `)]),$("collapsed",[x("layout-toggle-button",[x("base-icon",`
 transform: rotate(180deg);
 `)]),x("layout-toggle-bar",[V("&:hover",[O("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),O("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),x("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[x("base-icon",`
 transform: rotate(0);
 `)]),x("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[V("&:hover",[O("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),O("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),$("collapsed",[x("layout-toggle-bar",[V("&:hover",[O("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),O("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),x("layout-toggle-button",[x("base-icon",`
 transform: rotate(0);
 `)])]),x("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[x("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),x("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[O("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),O("bottom",`
 position: absolute;
 top: 34px;
 `),V("&:hover",[O("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),O("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),O("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),V("&:hover",[O("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),O("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),x("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),$("show-content",[x("layout-sider-scroll-container",{opacity:1})]),$("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),bo=j({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),yo=j({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(Re,{clsPrefix:e},{default:()=>c(Xt,null)}))}}),Co={position:st,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},xo=j({name:"LayoutSider",props:Object.assign(Object.assign({},A.props),Co),setup(e){const t=$t(it),o=R(null),r=R(null),n=R(e.defaultCollapsed),s=Ge(_e(e,"collapsed"),n),i=B(()=>J(s.value?e.collapsedWidth:e.width)),a=B(()=>e.collapseMode!=="transform"?{}:{minWidth:J(e.width)}),d=B(()=>t?t.siderPlacement:"left");function f(z,_){if(e.nativeScrollbar){const{value:P}=o;P&&(_===void 0?P.scrollTo(z):P.scrollTo(z,_))}else{const{value:P}=r;P&&P.scrollTo(z,_)}}function h(){const{"onUpdate:collapsed":z,onUpdateCollapsed:_,onExpand:P,onCollapse:q}=e,{value:U}=s;_&&ie(_,!U),z&&ie(z,!U),n.value=!U,U?P&&ie(P):q&&ie(q)}let l=0,b=0;const p=z=>{var _;const P=z.target;l=P.scrollLeft,b=P.scrollTop,(_=e.onScroll)===null||_===void 0||_.call(e,z)};Ye(()=>{if(e.nativeScrollbar){const z=o.value;z&&(z.scrollTop=b,z.scrollLeft=l)}}),Pe(go,{collapsedRef:s,collapseModeRef:_e(e,"collapseMode")});const{mergedClsPrefixRef:u,inlineThemeDisabled:m}=re(e),g=A("Layout","-layout-sider",vo,nt,e,u);function v(z){var _,P;z.propertyName==="max-width"&&(s.value?(_=e.onAfterLeave)===null||_===void 0||_.call(e):(P=e.onAfterEnter)===null||P===void 0||P.call(e))}const w={scrollTo:f},y=B(()=>{const{common:{cubicBezierEaseInOut:z},self:_}=g.value,{siderToggleButtonColor:P,siderToggleButtonBorder:q,siderToggleBarColor:U,siderToggleBarColorHover:Y}=_,C={"--n-bezier":z,"--n-toggle-button-color":P,"--n-toggle-button-border":q,"--n-toggle-bar-color":U,"--n-toggle-bar-color-hover":Y};return e.inverted?(C["--n-color"]=_.siderColorInverted,C["--n-text-color"]=_.textColorInverted,C["--n-border-color"]=_.siderBorderColorInverted,C["--n-toggle-button-icon-color"]=_.siderToggleButtonIconColorInverted,C.__invertScrollbar=_.__invertScrollbar):(C["--n-color"]=_.siderColor,C["--n-text-color"]=_.textColor,C["--n-border-color"]=_.siderBorderColor,C["--n-toggle-button-icon-color"]=_.siderToggleButtonIconColor),C}),k=m?ce("layout-sider",B(()=>e.inverted?"a":"b"),y,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:u,mergedTheme:g,styleMaxWidth:i,mergedCollapsed:s,scrollContainerStyle:a,siderPlacement:d,handleNativeElScroll:p,handleTransitionend:v,handleTriggerClick:h,inlineThemeDisabled:m,cssVars:y,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender},w)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:J(this.width)}]},this.nativeScrollbar?c("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(qe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?c(bo,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(yo,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${t}-layout-sider__border`}):null)}}),_o={success:c(Je,null),error:c(Ze,null),warning:c(Ke,null),info:c(Xe,null)},So=j({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){function o(n,s,i,a){const{gapDegree:d,viewBoxWidth:f,strokeWidth:h}=e,l=50,b=0,p=l,u=0,m=2*l,g=50+h/2,v=`M ${g},${g} m ${b},${p}
      a ${l},${l} 0 1 1 ${u},-100
      a ${l},${l} 0 1 1 0,${m}`,w=Math.PI*2*l,y={stroke:a==="rail"?i:typeof e.fillColor=="object"?"url(#gradient)":i,strokeDasharray:`${n/100*(w-d)}px ${f*8}px`,strokeDashoffset:`-${d/2}px`,transformOrigin:s?"center":void 0,transform:s?`rotate(${s}deg)`:void 0};return{pathString:v,pathStyle:y}}const r=()=>{const n=typeof e.fillColor=="object",s=n?e.fillColor.stops[0]:"",i=n?e.fillColor.stops[1]:"";return n&&c("defs",null,c("linearGradient",{id:"gradient",x1:"0%",y1:"100%",x2:"100%",y2:"0%"},c("stop",{offset:"0%","stop-color":s}),c("stop",{offset:"100%","stop-color":i})))};return()=>{const{fillColor:n,railColor:s,strokeWidth:i,offsetDegree:a,status:d,percentage:f,showIndicator:h,indicatorTextColor:l,unit:b,gapOffsetDegree:p,clsPrefix:u}=e,{pathString:m,pathStyle:g}=o(100,0,s,"rail"),{pathString:v,pathStyle:w}=o(f,a,n,"fill"),y=100+i;return c("div",{class:`${u}-progress-content`,role:"none"},c("div",{class:`${u}-progress-graph`,"aria-hidden":!0},c("div",{class:`${u}-progress-graph-circle`,style:{transform:p?`rotate(${p}deg)`:void 0}},c("svg",{viewBox:`0 0 ${y} ${y}`},r(),c("g",null,c("path",{class:`${u}-progress-graph-circle-rail`,d:m,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:g})),c("g",null,c("path",{class:[`${u}-progress-graph-circle-fill`,f===0&&`${u}-progress-graph-circle-fill--empty`],d:v,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:w}))))),h?c("div",null,t.default?c("div",{class:`${u}-progress-custom-content`,role:"none"},t.default()):d!=="default"?c("div",{class:`${u}-progress-icon`,"aria-hidden":!0},c(Re,{clsPrefix:u},{default:()=>_o[d]})):c("div",{class:`${u}-progress-text`,style:{color:l},role:"none"},c("span",{class:`${u}-progress-text__percentage`},f),c("span",{class:`${u}-progress-text__unit`},b))):null)}}}),wo={success:c(Je,null),error:c(Ze,null),warning:c(Ke,null),info:c(Xe,null)},zo=j({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const o=B(()=>J(e.height)),r=B(()=>{var i,a;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(i=e.fillColor)===null||i===void 0?void 0:i.stops[0]} , ${(a=e.fillColor)===null||a===void 0?void 0:a.stops[1]})`:e.fillColor}),n=B(()=>e.railBorderRadius!==void 0?J(e.railBorderRadius):e.height!==void 0?J(e.height,{c:.5}):""),s=B(()=>e.fillBorderRadius!==void 0?J(e.fillBorderRadius):e.railBorderRadius!==void 0?J(e.railBorderRadius):e.height!==void 0?J(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:i,railColor:a,railStyle:d,percentage:f,unit:h,indicatorTextColor:l,status:b,showIndicator:p,processing:u,clsPrefix:m}=e;return c("div",{class:`${m}-progress-content`,role:"none"},c("div",{class:`${m}-progress-graph`,"aria-hidden":!0},c("div",{class:[`${m}-progress-graph-line`,{[`${m}-progress-graph-line--indicator-${i}`]:!0}]},c("div",{class:`${m}-progress-graph-line-rail`,style:[{backgroundColor:a,height:o.value,borderRadius:n.value},d]},c("div",{class:[`${m}-progress-graph-line-fill`,u&&`${m}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:r.value,height:o.value,lineHeight:o.value,borderRadius:s.value}},i==="inside"?c("div",{class:`${m}-progress-graph-line-indicator`,style:{color:l}},t.default?t.default():`${f}${h}`):null)))),p&&i==="outside"?c("div",null,t.default?c("div",{class:`${m}-progress-custom-content`,style:{color:l},role:"none"},t.default()):b==="default"?c("div",{role:"none",class:`${m}-progress-icon ${m}-progress-icon--as-text`,style:{color:l}},f,h):c("div",{class:`${m}-progress-icon`,"aria-hidden":!0},c(Re,{clsPrefix:m},{default:()=>wo[b]}))):null)}}});function We(e,t,o=100){return`m ${o/2} ${o/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const ko=j({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const o=B(()=>e.percentage.map((s,i)=>`${Math.PI*s/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*i)-e.circleGap*i)*2}, ${e.viewBoxWidth*8}`)),r=(n,s)=>{const i=e.fillColor[s],a=typeof i=="object"?i.stops[0]:"",d=typeof i=="object"?i.stops[1]:"";return typeof e.fillColor[s]=="object"&&c("linearGradient",{id:`gradient-${s}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},c("stop",{offset:"0%","stop-color":a}),c("stop",{offset:"100%","stop-color":d}))};return()=>{const{viewBoxWidth:n,strokeWidth:s,circleGap:i,showIndicator:a,fillColor:d,railColor:f,railStyle:h,percentage:l,clsPrefix:b}=e;return c("div",{class:`${b}-progress-content`,role:"none"},c("div",{class:`${b}-progress-graph`,"aria-hidden":!0},c("div",{class:`${b}-progress-graph-circle`},c("svg",{viewBox:`0 0 ${n} ${n}`},c("defs",null,l.map((p,u)=>r(p,u))),l.map((p,u)=>c("g",{key:u},c("path",{class:`${b}-progress-graph-circle-rail`,d:We(n/2-s/2*(1+2*u)-i*u,s,n),"stroke-width":s,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:f[u]},h[u]]}),c("path",{class:[`${b}-progress-graph-circle-fill`,p===0&&`${b}-progress-graph-circle-fill--empty`],d:We(n/2-s/2*(1+2*u)-i*u,s,n),"stroke-width":s,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:o.value[u],strokeDashoffset:0,stroke:typeof d[u]=="object"?`url(#gradient-${u})`:d[u]}})))))),a&&t.default?c("div",null,c("div",{class:`${b}-progress-text`},t.default())):null)}}}),Bo=V([x("progress",{display:"inline-block"},[x("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),$("line",`
 width: 100%;
 display: block;
 `,[x("progress-content",`
 display: flex;
 align-items: center;
 `,[x("progress-graph",{flex:1})]),x("progress-custom-content",{marginLeft:"14px"}),x("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[$("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),$("circle, dashboard",{width:"120px"},[x("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),x("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),x("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),$("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[x("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),x("progress-content",{position:"relative"}),x("progress-graph",{position:"relative"},[x("progress-graph-circle",[V("svg",{verticalAlign:"bottom"}),x("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[$("empty",{opacity:0})]),x("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),x("progress-graph-line",[$("indicator-inside",[x("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[x("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),x("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),$("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[x("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),x("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),x("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[x("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[$("processing",[V("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),V("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Po=Object.assign(Object.assign({},A.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),$o=j({name:"Progress",props:Po,setup(e){const t=B(()=>e.indicatorPlacement||e.indicatorPosition),o=B(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:n}=re(e),s=A("Progress","-progress",Bo,Tt,e,r),i=B(()=>{const{status:d}=e,{common:{cubicBezierEaseInOut:f},self:{fontSize:h,fontSizeCircle:l,railColor:b,railHeight:p,iconSizeCircle:u,iconSizeLine:m,textColorCircle:g,textColorLineInner:v,textColorLineOuter:w,lineBgProcessing:y,fontWeightCircle:k,[H("iconColor",d)]:z,[H("fillColor",d)]:_}}=s.value;return{"--n-bezier":f,"--n-fill-color":_,"--n-font-size":h,"--n-font-size-circle":l,"--n-font-weight-circle":k,"--n-icon-color":z,"--n-icon-size-circle":u,"--n-icon-size-line":m,"--n-line-bg-processing":y,"--n-rail-color":b,"--n-rail-height":p,"--n-text-color-circle":g,"--n-text-color-line-inner":v,"--n-text-color-line-outer":w}}),a=n?ce("progress",B(()=>e.status[0]),i,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:o,cssVars:n?void 0:i,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:o,showIndicator:r,status:n,railColor:s,railStyle:i,color:a,percentage:d,viewBoxWidth:f,strokeWidth:h,mergedIndicatorPlacement:l,unit:b,borderRadius:p,fillBorderRadius:u,height:m,processing:g,circleGap:v,mergedClsPrefix:w,gapDeg:y,gapOffsetDegree:k,themeClass:z,$slots:_,onRender:P}=this;return P==null||P(),c("div",{class:[z,`${w}-progress`,`${w}-progress--${e}`,`${w}-progress--${n}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?c(So,{clsPrefix:w,status:n,showIndicator:r,indicatorTextColor:o,railColor:s,fillColor:a,railStyle:i,offsetDegree:this.offsetDegree,percentage:d,viewBoxWidth:f,strokeWidth:h,gapDegree:y===void 0?e==="dashboard"?75:0:y,gapOffsetDegree:k,unit:b},_):e==="line"?c(zo,{clsPrefix:w,status:n,showIndicator:r,indicatorTextColor:o,railColor:s,fillColor:a,railStyle:i,percentage:d,processing:g,indicatorPlacement:l,unit:b,fillBorderRadius:u,railBorderRadius:p,height:m},_):e==="multiple-circle"?c(ko,{clsPrefix:w,strokeWidth:h,railColor:s,fillColor:a,railStyle:i,viewBoxWidth:f,percentage:d,showIndicator:r,circleGap:v},_):null)}});function To(e){const{primaryColorHover:t,borderColor:o}=e;return{resizableTriggerColorHover:t,resizableTriggerColor:o}}const Ro={common:be,self:To},Io=x("split",`
 display: flex;
 width: 100%;
 height: 100%;
`,[$("horizontal",`
 flex-direction: row;
 `),$("vertical",`
 flex-direction: column;
 `),x("split-pane-1",`
 overflow: hidden;
 `),x("split-pane-2",`
 overflow: hidden;
 flex: 1;
 `),O("resize-trigger",`
 background-color: var(--n-resize-trigger-color);
 transition: background-color .3s var(--n-bezier);
 `,[$("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `),V("&:hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)])]),Fo=Object.assign(Object.assign({},A.props),{direction:{type:String,default:"horizontal"},resizeTriggerSize:{type:Number,default:3},disabled:Boolean,defaultSize:{type:[String,Number],default:.5},"onUpdate:size":[Function,Array],onUpdateSize:[Function,Array],size:[String,Number],min:{type:[String,Number],default:0},max:{type:[String,Number],default:1},pane1Class:String,pane1Style:[Object,String],pane2Class:String,pane2Style:[Object,String],onDragStart:Function,onDragMove:Function,onDragEnd:Function,watchProps:Array}),Oo=j({name:"Split",props:Fo,slots:Object,setup(e){var t;const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=re(e),n=A("Split","-split",Io,Ro,e,o),s=B(()=>{const{common:{cubicBezierEaseInOut:y},self:{resizableTriggerColor:k,resizableTriggerColorHover:z}}=n.value;return{"--n-bezier":y,"--n-resize-trigger-color":k,"--n-resize-trigger-color-hover":z}}),i=R(null),a=R(!1),d=_e(e,"size"),f=R(e.defaultSize);!((t=e.watchProps)===null||t===void 0)&&t.includes("defaultSize")&&It(()=>f.value=e.defaultSize);const h=y=>{const k=e["onUpdate:size"];e.onUpdateSize&&ie(e.onUpdateSize,y),k&&ie(k,y),f.value=y},l=Ge(d,f),b=B(()=>{const y=l.value;if(typeof y=="string")return{flex:`0 0 ${y}`};if(typeof y=="number"){const k=y*100;return{flex:`0 0 calc(${k}% - ${e.resizeTriggerSize*k/100}px)`}}}),p=B(()=>e.direction==="horizontal"?{width:`${e.resizeTriggerSize}px`,height:"100%"}:{width:"100%",height:`${e.resizeTriggerSize}px`}),u=B(()=>{const y=e.direction==="horizontal";return{width:y?`${e.resizeTriggerSize}px`:"",height:y?"":`${e.resizeTriggerSize}px`,cursor:e.direction==="horizontal"?"col-resize":"row-resize"}});let m=0;const g=y=>{y.preventDefault(),a.value=!0,e.onDragStart&&e.onDragStart(y);const k="mousemove",z="mouseup",_=U=>{v(U),e.onDragMove&&e.onDragMove(U)},P=()=>{je(k,document,_),je(z,document,P),a.value=!1,e.onDragEnd&&e.onDragEnd(y),document.body.style.cursor=""};document.body.style.cursor=u.value.cursor,Ee(k,document,_),Ee(z,document,P);const q=i.value;if(q){const U=q.getBoundingClientRect();e.direction==="horizontal"?m=y.clientX-U.left:m=U.top-y.clientY}v(y)};function v(y){var k,z;const _=(z=(k=i.value)===null||k===void 0?void 0:k.parentElement)===null||z===void 0?void 0:z.getBoundingClientRect();if(!_)return;const{direction:P}=e,q=_.width-e.resizeTriggerSize,U=_.height-e.resizeTriggerSize,Y=P==="horizontal"?q:U,C=P==="horizontal"?y.clientX-_.left-m:y.clientY-_.top+m,{min:M,max:X}=e,de=typeof M=="string"?Ue(M):M*Y,fe=typeof X=="string"?Ue(X):X*Y;let K=C;K=Math.max(K,de),K=Math.min(K,fe,Y),typeof l.value=="string"?h(`${K}px`):h(K/Y)}const w=r?ce("split",void 0,s,e):void 0;return{themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender,cssVars:r?void 0:s,resizeTriggerElRef:i,isDragging:a,mergedClsPrefix:o,resizeTriggerWrapperStyle:u,resizeTriggerStyle:p,handleMouseDown:g,firstPaneStyle:b}},render(){var e,t,o,r,n;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{class:[`${this.mergedClsPrefix}-split`,`${this.mergedClsPrefix}-split--${this.direction}`,this.themeClass],style:this.cssVars},c("div",{class:[`${this.mergedClsPrefix}-split-pane-1`,this.pane1Class],style:[this.firstPaneStyle,this.pane1Style]},(o=(t=this.$slots)[1])===null||o===void 0?void 0:o.call(t)),!this.disabled&&c("div",{ref:"resizeTriggerElRef",class:`${this.mergedClsPrefix}-split__resize-trigger-wrapper`,style:this.resizeTriggerWrapperStyle,onMousedown:this.handleMouseDown},Rt(this.$slots["resize-trigger"],()=>[c("div",{style:this.resizeTriggerStyle,class:[`${this.mergedClsPrefix}-split__resize-trigger`,this.isDragging&&`${this.mergedClsPrefix}-split__resize-trigger--hover`]})])),c("div",{class:[`${this.mergedClsPrefix}-split-pane-2`,this.pane2Class],style:this.pane2Style},(n=(r=this.$slots)[2])===null||n===void 0?void 0:n.call(r)))}}),Do=x("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[V("&:first-child","margin-top: 0;"),V("&:last-child","margin-bottom: 0;")]),Eo=Object.assign(Object.assign({},A.props),{depth:[String,Number]}),Uo=j({name:"P",props:Eo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=re(e),r=A("Typography","-p",Do,Qe,e,t),n=B(()=>{const{depth:i}=e,a=i||"1",{common:{cubicBezierEaseInOut:d},self:{pFontSize:f,pLineHeight:h,pMargin:l,pTextColor:b,[`pTextColor${a}Depth`]:p}}=r.value;return{"--n-bezier":d,"--n-font-size":f,"--n-line-height":h,"--n-margin":l,"--n-text-color":i===void 0?b:p}}),s=o?ce("p",B(()=>`${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),c("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),jo=x("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[$("strong",`
 font-weight: var(--n-font-weight-strong);
 `),$("italic",{fontStyle:"italic"}),$("underline",{textDecoration:"underline"}),$("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),Lo=Object.assign(Object.assign({},A.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),Ao=j({name:"Text",props:Lo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=re(e),r=A("Typography","-text",jo,Qe,e,t),n=B(()=>{const{depth:i,type:a}=e,d=a==="default"?i===void 0?"textColor":`textColor${i}Depth`:H("textColor",a),{common:{fontWeightStrong:f,fontFamilyMono:h,cubicBezierEaseInOut:l},self:{codeTextColor:b,codeBorderRadius:p,codeColor:u,codeBorder:m,[d]:g}}=r.value;return{"--n-bezier":l,"--n-text-color":g,"--n-font-weight-strong":f,"--n-font-famliy-mono":h,"--n-code-border-radius":p,"--n-code-text-color":b,"--n-code-color":u,"--n-code-border":m}}),s=o?ce("text",B(()=>`${e.type[0]}${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:t,compitableTag:Ft(e,["as","tag"]),cssVars:o?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e,t,o;const{mergedClsPrefix:r}=this;(e=this.onRender)===null||e===void 0||e.call(this);const n=[`${r}-text`,this.themeClass,{[`${r}-text--code`]:this.code,[`${r}-text--delete`]:this.delete,[`${r}-text--strong`]:this.strong,[`${r}-text--italic`]:this.italic,[`${r}-text--underline`]:this.underline}],s=(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t);return this.code?c("code",{class:n,style:this.cssVars},this.delete?c("del",null,s):s):this.delete?c("del",{class:n,style:this.cssVars},s):c(this.compitableTag||"span",{class:n,style:this.cssVars},s)}}),Mo=j({__name:"index",props:{accept:{},multiple:{type:Boolean}},emits:["change"],setup(e,{expose:t,emit:o}){t();const r=o;function n(d){r("change",d)}function s(d){const f=d.target;f.files&&n(f.files)}function i(d){var h;const f=(h=d.dataTransfer)==null?void 0:h.files;f&&f.length&&n(f)}const a={emit:r,getFileList:n,handleChange:s,handleDropStop:i};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),No=["accept","multiple"],Wo={class:"text-center"};function Ho(e,t,o,r,n,s){const i=Ao,a=Uo;return D(),N("div",{class:"relative border border-border rounded-6 border-dashed p-10 transition-all hover:border-primary",onDragover:t[0]||(t[0]=Le(()=>{},["prevent"])),onDrop:Le(r.handleDropStop,["stop","prevent"])},[t[3]||(t[3]=S("label",{class:"absolute left-0 top-0 z-1 size-full cursor-pointer",for:"image-uploader"},null,-1)),S("input",{id:"image-uploader",class:"hidden",type:"file",accept:o.accept,multiple:o.multiple,onChange:r.handleChange},null,40,No),S("div",Wo,[I(i,{depth:"3"},{default:T(()=>t[1]||(t[1]=[S("span",{class:"i-mage-image-upload text-40"},null,-1)])),_:1})]),I(a,{class:"mt-0 text-center text-14",depth:"3"},{default:T(()=>t[2]||(t[2]=[G(" 拖拽文件到该区域或点击选择图片 ")])),_:1})],32)}const Vo=ne(Mo,[["render",Ho],["__file","index.vue"]]),qo=j({__name:"CompressUpload",emits:["change"],setup(e,{expose:t,emit:o}){t();const r=o;function n(i){const a=Array.from(i).map(d=>({file:d,id:Gt(),fileName:Ot(d.name),src:URL.createObjectURL(d)}));r("change",a)}const s={emit:r,getFileList:n};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function Yo(e,t,o,r,n,s){const i=Vo;return D(),ae(i,{multiple:"",accept:"image/png,image/jpeg,image/avif",onChange:r.getFileList})}const Go=ne(qo,[["render",Yo],["__file","CompressUpload.vue"]]),Xo=j({__name:"CompressProgress",props:{compressList:{},successList:{},failedList:{},compressEnd:{type:Boolean},percentage:{}},setup(e,{expose:t}){t();const o=e,r=B(()=>o.compressEnd?o.successList.length===o.compressList.length?"success":o.failedList.length===o.compressList.length?"error":"warning":"default"),n={props:o,getProgressStatus:r};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Ko={id:"CompressProgress",class:"mt-10 flex items-center"},Zo={key:0,class:"ml-4 flex items-center"},Jo={key:0,class:"i-solar-check-circle-bold ml-4 text-success"},Qo={class:"text-14"},er={class:"text-success"},tr={class:"text-error"};function or(e,t,o,r,n,s){const i=$o,a=Se;return D(),N("div",Ko,[I(i,{class:"flex-1",type:"line",status:r.getProgressStatus,percentage:o.percentage,"indicator-placement":"inside"},null,8,["status","percentage"]),o.compressEnd?(D(),N("div",Zo,[o.successList.length===o.compressList.length?(D(),N("div",Jo)):(D(),ae(a,{key:1},{trigger:T(()=>[S("div",{class:ve(["i-solar-info-circle-bold",{"text-error":o.failedList.length===o.compressList.length,"text-warning":o.successList.length!==o.compressList.length}])},null,2)]),default:T(()=>[S("div",Qo,[S("div",null,"总数："+Q(o.compressList.length),1),S("div",null,[t[0]||(t[0]=S("span",null,"成功：",-1)),S("span",er,Q(o.successList.length),1)]),S("div",null,[t[1]||(t[1]=S("span",null,"失败：",-1)),S("span",tr,Q(o.failedList.length),1)])])]),_:1}))])):ee("",!0)])}const rr=ne(Xo,[["render",or],["__file","CompressProgress.vue"]]),nr=j({__name:"CompressOption",props:{checked:{required:!0},checkedModifiers:{},size:{required:!0},sizeModifiers:{},quality:{required:!0},qualityModifiers:{}},emits:["update:checked","update:size","update:quality"],setup(e,{expose:t}){t();const o=xe(e,"checked"),r=xe(e,"size"),n=xe(e,"quality"),s=[{label:"WebP",value:"webp",tip:"压缩率较高，大多数浏览器支持"},{label:"AVIF",value:"avif",tip:"压缩率极高，部分现代浏览器支持"},{label:"JPEG",value:"jpeg",tip:"兼容性最好，所有浏览器支持"}];function i(d){o.value=d}const a={modelChecked:o,modelSize:r,modelQuality:n,outputs:s,handleChange:i};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),sr={id:"CompressOption"},ir={class:"color-grey"},lr={class:"flex"},ar={class:"mt-20 flex items-center font-600"},cr={class:"flex items-center"},dr={class:"flex items-center"};function ur(e,t,o,r,n,s){const i=Vt,a=Fe,d=qt,f=Se;return D(),N("div",sr,[t[11]||(t[11]=S("div",{class:"font-600"}," 图片压缩格式 ",-1)),I(a,{vertical:""},{default:T(()=>[(D(),N(Ie,null,et(r.outputs,h=>I(i,{key:h.value,checked:r.modelChecked===h.value,value:h.value,onChange:l=>r.handleChange(h.value)},{default:T(()=>[G(Q(h.label)+" ",1),S("span",ir,Q(h.tip),1)]),_:2},1032,["checked","value","onChange"])),64))]),_:1}),t[12]||(t[12]=S("div",{class:"mt-20 flex items-center font-600"}," 图片压缩质量 ",-1)),S("div",lr,[I(d,{value:r.modelQuality,"onUpdate:value":t[0]||(t[0]=h=>r.modelQuality=h),placeholder:"请输入",min:1,max:100},{suffix:T(()=>t[3]||(t[3]=[G(" % ")])),_:1},8,["value"])]),S("div",ar,[t[6]||(t[6]=G(" 图片输出尺寸 ")),I(f,{placement:"right"},{trigger:T(()=>t[4]||(t[4]=[S("span",{class:"i-solar-info-circle-bold"},null,-1)])),default:T(()=>[t[5]||(t[5]=G(" 如果只输入宽度或者高度，另外一项会自动计算 "))]),_:1})]),I(a,{vertical:""},{default:T(()=>[S("div",cr,[t[8]||(t[8]=S("div",{class:"text-16"}," 图片宽度： ",-1)),I(d,{value:r.modelSize.width,"onUpdate:value":t[1]||(t[1]=h=>r.modelSize.width=h),placeholder:"请输入",min:1},{suffix:T(()=>t[7]||(t[7]=[G(" px ")])),_:1},8,["value"])]),S("div",dr,[t[10]||(t[10]=S("div",{class:"text-16"}," 图片高度： ",-1)),I(d,{value:r.modelSize.height,"onUpdate:value":t[2]||(t[2]=h=>r.modelSize.height=h),placeholder:"请输入",min:1},{suffix:T(()=>t[9]||(t[9]=[G(" px ")])),_:1},8,["value"])])]),_:1})])}const gr=ne(nr,[["render",ur],["__file","CompressOption.vue"]]),fr=j({__name:"CompressPreview",props:{src:{},compressedSrc:{}},setup(e,{expose:t}){t();const o=R(.5),r=R(),{width:n}=Dt(r),s={split:o,leftBox:r,width:n};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),pr={id:"CompressPreview",class:"mb-10"},hr={key:0,class:"flex justify-between text-14"},mr={class:"h-250 overflow-hidden rounded-6"},vr=["src"],br={ref:"leftBox",class:"size-full"},yr=["src"],Cr={class:"size-full"},xr=["src"];function _r(e,t,o,r,n,s){const i=Oo;return D(),N("div",pr,[o.src&&o.compressedSrc?(D(),N("div",hr,t[1]||(t[1]=[S("span",null,"压缩前",-1),S("span",null,"压缩后",-1)]))):ee("",!0),S("div",mr,[o.src&&!o.compressedSrc?(D(),N("img",{key:0,class:"size-full object-cover",src:o.src},null,8,vr)):ee("",!0),o.src&&o.compressedSrc?(D(),ae(i,{key:1,size:r.split,"onUpdate:size":t[0]||(t[0]=a=>r.split=a),"resize-trigger-size":2,class:"relative h-full"},{1:T(()=>[S("div",br,[S("img",{class:"absolute left-0 top-0 z-1 size-full object-cover",src:o.src,style:Et({clip:`rect(auto, ${r.width}px, auto, auto)`})},null,12,yr)],512)]),2:T(()=>[S("div",Cr,[S("img",{class:"absolute left-0 top-0 size-full object-cover",src:o.compressedSrc},null,8,xr)])]),"resize-trigger":T(()=>t[2]||(t[2]=[S("div",{class:"relative z-1 h-full bg-primary"},[S("div",{class:"size-40 flex items-center border-2 border-primary rounded-1/2 border-solid absolute-center"},[S("span",{class:"i-ri-arrow-left-s-fill text-22 color-primary"}),S("span",{class:"i-ri-arrow-right-s-fill text-22 color-primary"})])],-1)])),_:1},8,["size"])):ee("",!0)])])}const Sr=ne(fr,[["render",_r],["__file","CompressPreview.vue"]]),wr=j({__name:"CompressList",props:Ut({list:{}},{active:{required:!0},activeModifiers:{}}),emits:["update:active"],setup(e,{expose:t}){t();const o=xe(e,"active");function r(s){o.value=s}const n={modelActive:o,handleSelect:r,get downloadFile(){return tt},get formatFileSize(){return jt}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),zr={class:"image-list"},kr=["onClick"],Br={class:"h-150 w-full"},Pr=["src"],$r={class:"flex items-center justify-between px-8 py-4"},Tr={class:"text-12"},Rr=["onClick"];function Ir(e,t,o,r,n,s){const i=ot,a=co,d=oo,f=Se,h=Fe;return D(),N("div",zr,[(D(!0),N(Ie,null,et(o.list,l=>(D(),N("div",{key:l.id,class:ve(["cursor-pointer overflow-hidden border border-border rounded-6 border-solid transition-all not-first:mt-10 hover:border-primary",{"border-primary":r.modelActive===l.id,"border-error!":l.status==="failed"}]),onClick:b=>r.handleSelect(l.id)},[I(i,{show:l.status==="processing"},{default:T(()=>[S("div",Br,[S("img",{class:"size-full object-cover",src:l.src,"no-view":""},null,8,Pr)])]),_:2},1032,["show"]),S("div",$r,[I(a,{class:ve(["flex-1 text-12",{"text-error":l.status==="failed"}])},{default:T(()=>[G(Q(l.file.name),1)]),_:2},1032,["class"]),I(h,{size:4},{default:T(()=>[I(d,{class:ve(["rounded-4",{"line-through":l.compressedFile}]),type:l.status==="failed"?"error":"default",size:"small"},{default:T(()=>[G(Q(r.formatFileSize(l.file.size)),1)]),_:2},1032,["class","type"]),l.compressedFile?(D(),ae(d,{key:0,class:"rounded-4",type:"success",size:"small"},{default:T(()=>[G(Q(r.formatFileSize(l.compressedFile.size)),1)]),_:2},1024)):ee("",!0),l.failedInfo?(D(),ae(f,{key:1,class:"max-h-150 max-w-200",trigger:"hover",scrollable:""},{trigger:T(()=>t[0]||(t[0]=[S("div",{class:"i-solar-info-circle-bold text-error"},null,-1)])),default:T(()=>[S("div",Tr,Q(l.failedInfo),1)]),_:2},1024)):ee("",!0)]),_:2},1024)]),l.compressedFile?(D(),N("div",{key:0,class:"cursor-pointer border-t border-border border-t-solid bg-primary-1 text-center text-12 leading-30 transition-all dark:bg-primary-2 dark:hover:bg-primary-3 hover:bg-primary-2",onClick:b=>r.downloadFile(l.compressedFile,l.compressedFile.name)}," 点击下载 ",8,Rr)):ee("",!0)],10,kr))),128))])}const Fr=ne(wr,[["render",Ir],["__file","CompressList.vue"]]);"stream"in Blob.prototype||Object.defineProperty(Blob.prototype,"stream",{value(){return new Response(this).body}}),"setBigUint64"in DataView.prototype||Object.defineProperty(DataView.prototype,"setBigUint64",{value(e,t,o){const r=Number(0xffffffffn&t),n=Number(t>>32n);this.setUint32(e+(o?0:4),r,o),this.setUint32(e+(o?4:0),n,o)}});var ge=e=>new DataView(new ArrayBuffer(e)),te=e=>new Uint8Array(e.buffer||e),ue=e=>new TextEncoder().encode(String(e)),le=e=>Math.min(4294967295,Number(e)),He=e=>Math.min(65535,Number(e));function Or(e,t){if(t===void 0||t instanceof Date||(t=new Date(t)),e instanceof File)return{isFile:1,t:t||new Date(e.lastModified),i:e.stream()};if(e instanceof Response)return{isFile:1,t:t||new Date(e.headers.get("Last-Modified")||Date.now()),i:e.body};if(t===void 0)t=new Date;else if(isNaN(t))throw new Error("Invalid modification date.");if(e===void 0)return{isFile:0,t};if(typeof e=="string")return{isFile:1,t,i:ue(e)};if(e instanceof Blob)return{isFile:1,t,i:e.stream()};if(e instanceof Uint8Array||e instanceof ReadableStream)return{isFile:1,t,i:e};if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return{isFile:1,t,i:te(e)};if(Symbol.asyncIterator in e)return{isFile:1,t,i:at(e[Symbol.asyncIterator]())};throw new TypeError("Unsupported input format.")}function at(e,t=e){return new ReadableStream({async pull(o){let r=0;for(;o.desiredSize>r;){const n=await e.next();if(!n.value){o.close();break}{const s=Dr(n.value);o.enqueue(s),r+=s.byteLength}}},cancel(o){var r;(r=t.throw)==null||r.call(t,o)}})}function Dr(e){return typeof e=="string"?ue(e):e instanceof Uint8Array?e:te(e)}function ct(e,t,o){let[r,n]=function(s){return s?s instanceof Uint8Array?[s,1]:ArrayBuffer.isView(s)||s instanceof ArrayBuffer?[te(s),1]:[ue(s),0]:[void 0,0]}(t);if(e instanceof File)return{o:ke(r||ue(e.name)),u:BigInt(e.size),l:n};if(e instanceof Response){const s=e.headers.get("content-disposition"),i=s&&s.match(/;\s*filename\*?\s*=\s*(?:UTF-\d+''|)["']?([^;"'\r\n]*)["']?(?:;|$)/i),a=i&&i[1]||e.url&&new URL(e.url).pathname.split("/").findLast(Boolean),d=a&&decodeURIComponent(a),f=o||+e.headers.get("content-length");return{o:ke(r||ue(d)),u:BigInt(f),l:n}}return r=ke(r,e!==void 0||o!==void 0),typeof e=="string"?{o:r,u:BigInt(ue(e).length),l:n}:e instanceof Blob?{o:r,u:BigInt(e.size),l:n}:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?{o:r,u:BigInt(e.byteLength),l:n}:{o:r,u:Er(e,o),l:n}}function Er(e,t){return t>-1?BigInt(t):e?void 0:0n}function ke(e,t=1){if(!e||e.every(o=>o===47))throw new Error("The file must have a name.");if(t)for(;e[e.length-1]===47;)e=e.subarray(0,-1);else e[e.length-1]!==47&&(e=new Uint8Array([...e,47]));return e}var dt=new Uint32Array(256);for(let e=0;e<256;++e){let t=e;for(let o=0;o<8;++o)t=t>>>1^(1&t&&3988292384);dt[e]=t}function Ve(e,t=0){t^=-1;for(var o=0,r=e.length;o<r;o++)t=t>>>8^dt[255&t^e[o]];return(-1^t)>>>0}function ut(e,t,o=0){const r=e.getSeconds()>>1|e.getMinutes()<<5|e.getHours()<<11,n=e.getDate()|e.getMonth()+1<<5|e.getFullYear()-1980<<9;t.setUint16(o,r,1),t.setUint16(o+2,n,1)}function Ur({o:e,l:t},o){return 8*(!t||(o??function(r){try{jr.decode(r)}catch{return 0}return 1}(e)))}var jr=new TextDecoder("utf8",{fatal:1});function Lr(e,t=0){const o=ge(30);return o.setUint32(0,1347093252),o.setUint32(4,754976768|t),ut(e.t,o,10),o.setUint16(26,e.o.length,1),te(o)}async function*Ar(e){let{i:t}=e;if("then"in t&&(t=await t),t instanceof Uint8Array)yield t,e.m=Ve(t,0),e.u=BigInt(t.length);else{e.u=0n;const o=t.getReader();for(;;){const{value:r,done:n}=await o.read();if(n)break;e.m=Ve(r,e.m),e.u+=BigInt(r.length),yield r}}}function Mr(e,t){const o=ge(16+(t?8:0));return o.setUint32(0,1347094280),o.setUint32(4,e.isFile?e.m:0,1),t?(o.setBigUint64(8,e.u,1),o.setBigUint64(16,e.u,1)):(o.setUint32(8,le(e.u),1),o.setUint32(12,le(e.u),1)),te(o)}function Nr(e,t,o=0,r=0){const n=ge(46);return n.setUint32(0,1347092738),n.setUint32(4,755182848),n.setUint16(8,2048|o),ut(e.t,n,12),n.setUint32(16,e.isFile?e.m:0,1),n.setUint32(20,le(e.u),1),n.setUint32(24,le(e.u),1),n.setUint16(28,e.o.length,1),n.setUint16(30,r,1),n.setUint16(40,e.isFile?33204:16893,1),n.setUint32(42,le(t),1),te(n)}function Wr(e,t,o){const r=ge(o);return r.setUint16(0,1,1),r.setUint16(2,o-4,1),16&o&&(r.setBigUint64(4,e.u,1),r.setBigUint64(12,e.u,1)),r.setBigUint64(o-8,t,1),te(r)}function gt(e){return e instanceof File||e instanceof Response?[[e],[e]]:[[e.input,e.name,e.size],[e.input,e.lastModified]]}var Hr=e=>function(t){let o=BigInt(22),r=0n,n=0;for(const s of t){if(!s.o)throw new Error("Every file must have a non-empty name.");if(s.u===void 0)throw new Error(`Missing size for file "${new TextDecoder().decode(s.o)}".`);const i=s.u>=0xffffffffn,a=r>=0xffffffffn;r+=BigInt(46+s.o.length+(i&&8))+s.u,o+=BigInt(s.o.length+46+(12*a|28*i)),n||(n=i)}return(n||r>=0xffffffffn)&&(o+=BigInt(76)),o+r}(function*(t){for(const o of t)yield ct(...gt(o)[0])}(e));function Vr(e,t={}){const o={"Content-Type":"application/zip","Content-Disposition":"attachment"};return(typeof t.length=="bigint"||Number.isInteger(t.length))&&t.length>0&&(o["Content-Length"]=String(t.length)),t.metadata&&(o["Content-Length"]=String(Hr(t.metadata))),new Response(qr(e,t),{headers:o})}function qr(e,t={}){const o=function(r){var s;const n=r[Symbol.iterator in r?Symbol.iterator:Symbol.asyncIterator]();return{async next(){const i=await n.next();if(i.done)return i;const[a,d]=gt(i.value);return{done:0,value:Object.assign(Or(...d),ct(...a))}},throw:(s=n.throw)==null?void 0:s.bind(n),[Symbol.asyncIterator](){return this}}}(e);return at(async function*(r,n){const s=[];let i=0n,a=0n,d=0;for await(const l of r){const b=Ur(l,n.buffersAreUTF8);yield Lr(l,b),yield new Uint8Array(l.o),l.isFile&&(yield*Ar(l));const p=l.u>=0xffffffffn,u=12*(i>=0xffffffffn)|28*p;yield Mr(l,p),s.push(Nr(l,i,b,u)),s.push(l.o),u&&s.push(Wr(l,i,u)),p&&(i+=8n),a++,i+=BigInt(46+l.o.length)+l.u,d||(d=p)}let f=0n;for(const l of s)yield l,f+=BigInt(l.length);if(d||i>=0xffffffffn){const l=ge(76);l.setUint32(0,1347094022),l.setBigUint64(4,BigInt(44),1),l.setUint32(12,755182848),l.setBigUint64(24,a,1),l.setBigUint64(32,a,1),l.setBigUint64(40,f,1),l.setBigUint64(48,i,1),l.setUint32(56,1347094023),l.setBigUint64(64,i+f,1),l.setUint32(72,1,1),yield te(l)}const h=ge(22);h.setUint32(0,1347093766),h.setUint16(8,He(a),1),h.setUint16(10,He(a),1),h.setUint32(12,le(f),1),h.setUint32(16,le(i),1),yield te(h)}(o,t),o)}const Yr=j({__name:"index",setup(e,{expose:t}){t();const o=Lt(),r=R([]),n=R([]),s=R(""),i=R(0),a=R(!0),d=R(!1),f=R(!1),h=R(!1),l=R(!1),b=R("webp"),p=R(75),u=R({width:void 0,height:void 0}),m=B(()=>n.value.find(C=>C.id===s.value)),g=B(()=>n.value.filter(C=>C.status==="success"&&C.compressedFile)),v=B(()=>n.value.filter(C=>C.status==="failed")),w=B(()=>{var C;return(C=m.value)==null?void 0:C.src}),y=B(()=>{var C;return(C=m.value)==null?void 0:C.compressedSrc});let k;try{z()}catch(C){console.log("loadModules error",C),a.value=!1,o.error({title:"加载异常",content:"依赖资源加载异常，请刷新页面后重试",positiveText:"重试",onPositiveClick:()=>{window.location.reload()}})}async function z(){const[C,M,X,de,{default:fe}]=await Promise.all([he(()=>import("https://unpkg.com/@jsquash/avif@1.3.0?module"),[]),he(()=>import("https://unpkg.com/@jsquash/jpeg@1.4.0?module"),[]),he(()=>import("https://unpkg.com/@jsquash/png@3.0.1?module"),[]),he(()=>import("https://unpkg.com/@jsquash/webp@1.4.0?module"),[]),he(()=>import("https://unpkg.com/@jsquash/resize@2.1.0?module"),[])]);a.value=!1,h.value=!0,k=async()=>{d.value=!0,f.value=!1,i.value=0,n.value=At(r.value);for(let L=0;L<n.value.length;L++){const E=n.value[L];try{const W=E.file.type.replace("image/","");E.status="processing";const se=await we(W,E.file),Z=`image/${b.value}`,oe=new Blob([se],{type:Z});E.compressedFile=new File([oe],`${E.fileName}.${b.value}`,{type:Z}),E.compressedSrc=URL.createObjectURL(E.compressedFile),E.status="success"}catch(W){E.status="failed",E.failedInfo=Ae(W)}i.value=Math.round((L+1)/n.value.length*100)}d.value=!1,f.value=!0};async function K(L,E){const W=await E.arrayBuffer();switch(L){case"avif":return await C.decode(W);case"jpeg":return await M.decode(W);case"png":return await X.decode(W);case"webp":return await de.decode(W);default:throw new Error(`Unknown source type: ${L}`)}}async function ye(L){const E={quality:p.value};switch(b.value){case"avif":return await C.encode(L,E);case"jpeg":return await M.encode(L,E);case"png":return await X.encode(L);case"webp":return await de.encode(L,E);default:throw new Error(`Unknown output type: ${b.value}`)}}async function we(L,E){const W=await K(L,E);if(u.value.width||u.value.height){const se=await Mt(E),Z=ze(se,u.value),oe=await fe(W,Z);return ye(oe)}return ye(W)}function ze(L,E){const{width:W,height:se}=L,{width:Z,height:oe}=E,pe=W/se;return{width:Z??Math.round(oe*pe),height:oe??Math.round(Z/pe)}}}function _(C){r.value=C,n.value=C,!s.value&&C.length&&(s.value=C[0].id)}function P(){U(r.value),U(n.value),s.value="",u.value={width:void 0,height:void 0},i.value=0,r.value=[],n.value=[],d.value=!1,f.value=!1}async function q(){try{const C=g.value.map(X=>X.compressedFile),M=await Vr(C).blob();tt(M,`liubing.me_compressed_${Date.now()}.zip`)}catch(C){window.$message.error(Ae(C))}}function U(C){C.forEach(M=>{M.src&&URL.revokeObjectURL(M.src),M.compressedSrc&&URL.revokeObjectURL(M.compressedSrc)})}const Y={dialog:o,defaultCompressList:r,compressList:n,active:s,percentage:i,showSpin:a,compressing:d,compressEnd:f,loadSuccess:h,downloadAllLoading:l,outputType:b,quality:p,compressSize:u,activeInfo:m,successList:g,failedList:v,activeSrc:w,activeCompressedSrc:y,get handleCompress(){return k},set handleCompress(C){k=C},loadModules:z,handleChange:_,handleReset:P,handleDownloadAll:q,revokeObjectURL:U};return Object.defineProperty(Y,"__isScriptSetup",{enumerable:!1,value:!0}),Y}}),Gr={key:0,class:"border border-border rounded-6 border-solid"},Xr={class:"border-r border-border border-r-solid p-10"},Kr={class:"py-10 pl-20 pr-10"},Zr={class:"mt-10 flex justify-end"};function Jr(e,t,o,r,n,s){const i=Fr,a=xo,d=Sr,f=gr,h=rr,l=Nt,b=Fe,p=mo,u=ho,m=Go,g=ot;return D(),N("div",{class:ve(["compress-image relative",{"opacity-50":!r.loadSuccess&&!r.showSpin,"after:content-empty after:absolute after:size-full after:top-0 after:z-1 after:cursor-not-allowed":!r.loadSuccess&&!r.showSpin}])},[I(g,{show:r.showSpin},{description:T(()=>t[7]||(t[7]=[S("div",{"text-center":"","text-14":""},[S("div",null,"依赖资源加载中..."),S("div",null,"首次加载较慢，请耐心等待")],-1)])),default:T(()=>[r.compressList.length?(D(),N("div",Gr,[I(u,{"has-sider":"",class:"h-[calc(100vh-150px)]"},{default:T(()=>[I(a,{"collapse-mode":"transform","collapsed-width":0,width:300,"show-trigger":"arrow-circle",bordered:""},{default:T(()=>[S("div",Xr,[I(i,{active:r.active,"onUpdate:active":t[0]||(t[0]=v=>r.active=v),list:r.compressList},null,8,["active","list"])])]),_:1}),I(p,null,{default:T(()=>[S("div",Kr,[r.activeSrc?(D(),ae(d,{key:0,src:r.activeSrc,"compressed-src":r.activeCompressedSrc},null,8,["src","compressed-src"])):ee("",!0),I(f,{checked:r.outputType,"onUpdate:checked":t[1]||(t[1]=v=>r.outputType=v),quality:r.quality,"onUpdate:quality":t[2]||(t[2]=v=>r.quality=v),size:r.compressSize,"onUpdate:size":t[3]||(t[3]=v=>r.compressSize=v)},null,8,["checked","quality","size"]),r.compressing||r.compressEnd?(D(),ae(h,{key:1,"compress-list":r.compressList,"success-list":r.successList,"failed-list":r.failedList,"compress-end":r.compressEnd,percentage:r.percentage},null,8,["compress-list","success-list","failed-list","compress-end","percentage"])):ee("",!0),S("div",Zr,[I(b,null,{default:T(()=>[I(l,{type:"tertiary",disabled:r.compressing,onClick:r.handleReset},{default:T(()=>t[8]||(t[8]=[G(" 重置 ")])),_:1},8,["disabled"]),I(l,{type:"primary",secondary:"",disabled:r.downloadAllLoading||!r.successList.length||r.compressing,loading:r.downloadAllLoading,onClick:r.handleDownloadAll},{default:T(()=>t[9]||(t[9]=[G(" 批量下载 ")])),_:1},8,["disabled","loading"]),I(l,{type:"primary",disabled:r.compressing,loading:r.compressing,onClick:r.handleCompress},{default:T(()=>t[10]||(t[10]=[G(" 开始压缩 ")])),_:1},8,["disabled","loading","onClick"])]),_:1})])])]),_:1})]),_:1})])):(D(),N(Ie,{key:1},[I(m,{onChange:r.handleChange}),I(f,{checked:r.outputType,"onUpdate:checked":t[4]||(t[4]=v=>r.outputType=v),quality:r.quality,"onUpdate:quality":t[5]||(t[5]=v=>r.quality=v),size:r.compressSize,"onUpdate:size":t[6]||(t[6]=v=>r.compressSize=v),class:"mt-10"},null,8,["checked","quality","size"])],64))]),_:1},8,["show"])],2)}const Qr=ne(Yr,[["render",Jr],["__file","index.vue"]]),en={};function tn(e,t){const o=Qr,r=Ht("ClientOnly");return D(),N("div",null,[t[0]||(t[0]=Wt('<h1 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩"><span>图片压缩</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>工具依赖加载<a href="https://unpkg.com/" target="_blank" rel="noopener noreferrer">unpkg</a>的资源，国内用户可能需要开启魔法上网。</p></div><div class="hint-container tip"><p class="hint-container-title">温馨提示</p><p>纯本地图片压缩工具，不会上传您的任何图片信息，请放心使用。</p></div>',3)),I(r,null,{default:T(()=>[I(o)]),_:1})])}const sn=ne(en,[["render",tn],["__file","compress-image.html.vue"]]),ln=JSON.parse('{"path":"/tools/compress-image.html","title":"图片压缩","lang":"zh-CN","frontmatter":{"toc":false,"pageInfo":false,"layout":"ToolLayout","description":"一个纯本地图片压缩工具，支持输出WebP、AVIF、JPEG格图片","head":[["meta",{"property":"og:url","content":"https://liubing.me/tools/compress-image.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"图片压缩"}],["meta",{"property":"og:description","content":"一个纯本地图片压缩工具，支持输出WebP、AVIF、JPEG格图片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-24T11:36:17.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-24T11:36:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图片压缩\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-24T11:36:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[],"git":{"createdTime":1732366923000,"updatedTime":1732448177000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":2,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":0.31,"words":94},"filePathRelative":"tools/compress-image.md","localizedDate":"2024年11月23日","excerpt":"\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>工具依赖加载<a href=\\"https://unpkg.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">unpkg</a>的资源，国内用户可能需要开启魔法上网。</p>\\n</div>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">温馨提示</p>\\n<p>纯本地图片压缩工具，不会上传您的任何图片信息，请放心使用。</p>\\n</div>"}');export{sn as comp,ln as data};
