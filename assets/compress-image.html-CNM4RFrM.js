import{t as bt,e as F,h as a,f as be,g as yt,i as j,j as C,k as T,l as D,m as he,n as Y,p as Ue,N as Ct,u as ie,q as A,s as xt,v as de,w as B,x as I,y as le,z as q,A as St,B as Oe,C as ke,D as Se,E as $e,F as Be,G as _t,H as wt,I as ze,J as _e,K as zt,L as kt,M as $t,O as Bt,P as Pt,S as qe,Q as Ye,R as Pe,T as Q,U as Tt,V as Ge,W as Xe,X as Ke,Y as Je,Z as Ze,$ as Rt,a0 as It,a1 as Ut,a2 as Ot,a3 as je,a4 as Le,a5 as De,a6 as Qe,a7 as jt,o as E,c as H,a8 as Ee,b as S,d as U,a9 as R,aa as X,ab as ce,ac as Lt,ad as ee,ae as ve,af as te,ag as xe,ah as Te,ai as Re,aj as et,ak as Dt,al as Et,am as me,an as tt,ao as Me,ap as ot,aq as Mt,ar as Ft,as as pe,at as Nt,au as At,av as Fe,aw as Wt,_ as Ht,a as Vt,r as qt}from"./app-kBHCaxRY.js";import{_ as Yt,a as Gt}from"./InputNumber-BW0nHIfe.js";import"./Input-DzmW_D_d.js";var Xt=0;function Kt(e){var t=++Xt;return bt(e)+t}const Jt=F({name:"ChevronRight",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function Zt(e){const{textColor2:t,primaryColorHover:o,primaryColorPressed:r,primaryColor:i,infoColor:n,successColor:l,warningColor:s,errorColor:g,baseColor:m,borderColor:f,opacityDisabled:c,tagColor:p,closeIconColor:h,closeIconColorHover:v,closeIconColorPressed:d,borderRadiusSmall:u,fontSizeMini:b,fontSizeTiny:w,fontSizeSmall:y,fontSizeMedium:k,heightMini:$,heightTiny:x,heightSmall:P,heightMedium:V,closeColorHover:z,closeColorPressed:_,buttonColor2Hover:M,buttonColor2Pressed:K,fontWeightStrong:J}=e;return Object.assign(Object.assign({},yt),{closeBorderRadius:u,heightTiny:$,heightSmall:x,heightMedium:P,heightLarge:V,borderRadius:u,opacityDisabled:c,fontSizeTiny:b,fontSizeSmall:w,fontSizeMedium:y,fontSizeLarge:k,fontWeightStrong:J,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:m,colorCheckable:"#0000",colorHoverCheckable:M,colorPressedCheckable:K,colorChecked:i,colorCheckedHover:o,colorCheckedPressed:r,border:`1px solid ${f}`,textColor:t,color:p,colorBordered:"rgb(250, 250, 252)",closeIconColor:h,closeIconColorHover:v,closeIconColorPressed:d,closeColorHover:z,closeColorPressed:_,borderPrimary:`1px solid ${j(i,{alpha:.3})}`,textColorPrimary:i,colorPrimary:j(i,{alpha:.12}),colorBorderedPrimary:j(i,{alpha:.1}),closeIconColorPrimary:i,closeIconColorHoverPrimary:i,closeIconColorPressedPrimary:i,closeColorHoverPrimary:j(i,{alpha:.12}),closeColorPressedPrimary:j(i,{alpha:.18}),borderInfo:`1px solid ${j(n,{alpha:.3})}`,textColorInfo:n,colorInfo:j(n,{alpha:.12}),colorBorderedInfo:j(n,{alpha:.1}),closeIconColorInfo:n,closeIconColorHoverInfo:n,closeIconColorPressedInfo:n,closeColorHoverInfo:j(n,{alpha:.12}),closeColorPressedInfo:j(n,{alpha:.18}),borderSuccess:`1px solid ${j(l,{alpha:.3})}`,textColorSuccess:l,colorSuccess:j(l,{alpha:.12}),colorBorderedSuccess:j(l,{alpha:.1}),closeIconColorSuccess:l,closeIconColorHoverSuccess:l,closeIconColorPressedSuccess:l,closeColorHoverSuccess:j(l,{alpha:.12}),closeColorPressedSuccess:j(l,{alpha:.18}),borderWarning:`1px solid ${j(s,{alpha:.35})}`,textColorWarning:s,colorWarning:j(s,{alpha:.15}),colorBorderedWarning:j(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:j(s,{alpha:.12}),closeColorPressedWarning:j(s,{alpha:.18}),borderError:`1px solid ${j(g,{alpha:.23})}`,textColorError:g,colorError:j(g,{alpha:.1}),colorBorderedError:j(g,{alpha:.08}),closeIconColorError:g,closeIconColorHoverError:g,closeIconColorPressedError:g,closeColorHoverError:j(g,{alpha:.12}),closeColorPressedError:j(g,{alpha:.18})})}const Qt={common:be,self:Zt},eo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},to=C("tag",`
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
`,[T("strong",`
 font-weight: var(--n-font-weight-strong);
 `),D("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),D("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),D("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),D("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),T("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[D("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),D("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),T("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),T("icon, avatar",[T("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),T("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),T("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[he("disabled",[Y("&:hover","background-color: var(--n-color-hover-checkable);",[he("checked","color: var(--n-text-color-hover-checkable);")]),Y("&:active","background-color: var(--n-color-pressed-checkable);",[he("checked","color: var(--n-text-color-pressed-checkable);")])]),T("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[he("disabled",[Y("&:hover","background-color: var(--n-color-checked-hover);"),Y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),oo=Object.assign(Object.assign(Object.assign({},A.props),eo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),ro=$e("n-tag"),no=F({name:"Tag",props:oo,slots:Object,setup(e){const t=I(null),{mergedBorderedRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:n}=ie(e),l=A("Tag","-tag",to,Qt,e,r);ke(ro,{roundRef:Se(e,"round")});function s(){if(!e.disabled&&e.checkable){const{checked:h,onCheckedChange:v,onUpdateChecked:d,"onUpdate:checked":u}=e;d&&d(!h),u&&u(!h),v&&v(!h)}}function g(h){if(e.triggerClickOnClose||h.stopPropagation(),!e.disabled){const{onClose:v}=e;v&&le(v,h)}}const m={setTextContent(h){const{value:v}=t;v&&(v.textContent=h)}},f=xt("Tag",n,r),c=B(()=>{const{type:h,size:v,color:{color:d,textColor:u}={}}=e,{common:{cubicBezierEaseInOut:b},self:{padding:w,closeMargin:y,borderRadius:k,opacityDisabled:$,textColorCheckable:x,textColorHoverCheckable:P,textColorPressedCheckable:V,textColorChecked:z,colorCheckable:_,colorHoverCheckable:M,colorPressedCheckable:K,colorChecked:J,colorCheckedHover:re,colorCheckedPressed:ne,closeBorderRadius:G,fontWeightStrong:fe,[q("colorBordered",h)]:N,[q("closeSize",v)]:O,[q("closeIconSize",v)]:W,[q("fontSize",v)]:Z,[q("height",v)]:L,[q("color",h)]:se,[q("textColor",h)]:ye,[q("border",h)]:ft,[q("closeIconColor",h)]:Ie,[q("closeIconColorHover",h)]:pt,[q("closeIconColorPressed",h)]:ht,[q("closeColorHover",h)]:vt,[q("closeColorPressed",h)]:mt}}=l.value,Ce=St(y);return{"--n-font-weight-strong":fe,"--n-avatar-size-override":`calc(${L} - 8px)`,"--n-bezier":b,"--n-border-radius":k,"--n-border":ft,"--n-close-icon-size":W,"--n-close-color-pressed":mt,"--n-close-color-hover":vt,"--n-close-border-radius":G,"--n-close-icon-color":Ie,"--n-close-icon-color-hover":pt,"--n-close-icon-color-pressed":ht,"--n-close-icon-color-disabled":Ie,"--n-close-margin-top":Ce.top,"--n-close-margin-right":Ce.right,"--n-close-margin-bottom":Ce.bottom,"--n-close-margin-left":Ce.left,"--n-close-size":O,"--n-color":d||(o.value?N:se),"--n-color-checkable":_,"--n-color-checked":J,"--n-color-checked-hover":re,"--n-color-checked-pressed":ne,"--n-color-hover-checkable":M,"--n-color-pressed-checkable":K,"--n-font-size":Z,"--n-height":L,"--n-opacity-disabled":$,"--n-padding":w,"--n-text-color":u||ye,"--n-text-color-checkable":x,"--n-text-color-checked":z,"--n-text-color-hover-checkable":P,"--n-text-color-pressed-checkable":V}}),p=i?de("tag",B(()=>{let h="";const{type:v,size:d,color:{color:u,textColor:b}={}}=e;return h+=v[0],h+=d[0],u&&(h+=`a${Oe(u)}`),b&&(h+=`b${Oe(b)}`),o.value&&(h+="c"),h}),c,e):void 0;return Object.assign(Object.assign({},m),{rtlEnabled:f,mergedClsPrefix:r,contentRef:t,mergedBordered:o,handleClick:s,handleCloseClick:g,cssVars:i?void 0:c,themeClass:p?.themeClass,onRender:p?.onRender})},render(){var e,t;const{mergedClsPrefix:o,rtlEnabled:r,closable:i,color:{borderColor:n}={},round:l,onRender:s,$slots:g}=this;s?.();const m=Ue(g.avatar,c=>c&&a("div",{class:`${o}-tag__avatar`},c)),f=Ue(g.icon,c=>c&&a("div",{class:`${o}-tag__icon`},c));return a("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:r,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:l,[`${o}-tag--avatar`]:m,[`${o}-tag--icon`]:f,[`${o}-tag--closable`]:i}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},f||m,a("span",{class:`${o}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&i?a(Ct,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:l,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?a("div",{class:`${o}-tag__border`,style:{borderColor:n}}):null)}});function so(e){const{borderRadius:t,boxShadow2:o,baseColor:r}=e;return Object.assign(Object.assign({},wt),{borderRadius:t,boxShadow:o,color:ze(r,"rgba(0, 0, 0, .85)"),textColor:r})}const rt=Be({name:"Tooltip",common:be,peers:{Popover:_t},self:so}),io=Be({name:"Ellipsis",common:be,peers:{Tooltip:rt}}),lo=Object.assign(Object.assign({},zt),A.props),ao=F({name:"Tooltip",props:lo,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=ie(e),o=A("Tooltip","-tooltip",void 0,rt,e,t),r=I(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(n){r.value.setShow(n)}}),{popoverRef:r,mergedTheme:o,popoverThemeOverrides:B(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return a(_e,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),co=C("ellipsis",{overflow:"hidden"},[he("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),T("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),T("cursor-pointer",`
 cursor: pointer;
 `)]);function Ne(e){return`${e}-ellipsis--line-clamp`}function Ae(e,t){return`${e}-ellipsis--cursor-${t}`}const uo=Object.assign(Object.assign({},A.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),go=F({name:"Ellipsis",inheritAttrs:!1,props:uo,slots:Object,setup(e,{slots:t,attrs:o}){const r=kt(),i=A("Ellipsis","-ellipsis",co,io,e,r),n=I(null),l=I(null),s=I(null),g=I(!1),m=B(()=>{const{lineClamp:u}=e,{value:b}=g;return u!==void 0?{textOverflow:"","-webkit-line-clamp":b?"":u}:{textOverflow:b?"":"ellipsis","-webkit-line-clamp":""}});function f(){let u=!1;const{value:b}=g;if(b)return!0;const{value:w}=n;if(w){const{lineClamp:y}=e;if(h(w),y!==void 0)u=w.scrollHeight<=w.offsetHeight;else{const{value:k}=l;k&&(u=k.getBoundingClientRect().width<=w.getBoundingClientRect().width)}v(w,u)}return u}const c=B(()=>e.expandTrigger==="click"?()=>{var u;const{value:b}=g;b&&((u=s.value)===null||u===void 0||u.setShow(!1)),g.value=!b}:void 0);$t(()=>{var u;e.tooltip&&((u=s.value)===null||u===void 0||u.setShow(!1))});const p=()=>a("span",Object.assign({},Bt(o,{class:[`${r.value}-ellipsis`,e.lineClamp!==void 0?Ne(r.value):void 0,e.expandTrigger==="click"?Ae(r.value,"pointer"):void 0],style:m.value}),{ref:"triggerRef",onClick:c.value,onMouseenter:e.expandTrigger==="click"?f:void 0}),e.lineClamp?t:a("span",{ref:"triggerInnerRef"},t));function h(u){if(!u)return;const b=m.value,w=Ne(r.value);e.lineClamp!==void 0?d(u,w,"add"):d(u,w,"remove");for(const y in b)u.style[y]!==b[y]&&(u.style[y]=b[y])}function v(u,b){const w=Ae(r.value,"pointer");e.expandTrigger==="click"&&!b?d(u,w,"add"):d(u,w,"remove")}function d(u,b,w){w==="add"?u.classList.contains(b)||u.classList.add(b):u.classList.contains(b)&&u.classList.remove(b)}return{mergedTheme:i,triggerRef:n,triggerInnerRef:l,tooltipRef:s,handleClick:c,renderTrigger:p,getTooltipDisabled:f}},render(){var e;const{tooltip:t,renderTrigger:o,$slots:r}=this;if(t){const{mergedTheme:i}=this;return a(ao,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:i.peers.Tooltip,themeOverrides:i.peerOverrides.Tooltip}),{trigger:o,default:(e=r.tooltip)!==null&&e!==void 0?e:r.default})}else return o()}});function fo(e){const{baseColor:t,textColor2:o,bodyColor:r,cardColor:i,dividerColor:n,actionColor:l,scrollbarColor:s,scrollbarColorHover:g,invertedColor:m}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:l,headerColor:i,headerColorInverted:m,footerColor:l,footerColorInverted:m,headerBorderColor:n,headerBorderColorInverted:m,footerBorderColor:n,footerBorderColorInverted:m,siderBorderColor:n,siderBorderColorInverted:m,siderColor:i,siderColorInverted:m,siderToggleButtonBorder:`1px solid ${n}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:ze(r,s),siderToggleBarColorHover:ze(r,g),__invertScrollbar:"true"}}const nt=Be({name:"Layout",common:be,peers:{Scrollbar:Pt},self:fo}),po=$e("n-layout-sider"),st={type:String,default:"static"},ho=C("layout",`
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
`,[C("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),T("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),vo={embedded:Boolean,position:st,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},it=$e("n-layout");function lt(e){return F({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},A.props),vo),setup(t){const o=I(null),r=I(null),{mergedClsPrefixRef:i,inlineThemeDisabled:n}=ie(t),l=A("Layout","-layout",ho,nt,t,i);function s(d,u){if(t.nativeScrollbar){const{value:b}=o;b&&(u===void 0?b.scrollTo(d):b.scrollTo(d,u))}else{const{value:b}=r;b&&b.scrollTo(d,u)}}ke(it,t);let g=0,m=0;const f=d=>{var u;const b=d.target;g=b.scrollLeft,m=b.scrollTop,(u=t.onScroll)===null||u===void 0||u.call(t,d)};Ye(()=>{if(t.nativeScrollbar){const d=o.value;d&&(d.scrollTop=m,d.scrollLeft=g)}});const c={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},p={scrollTo:s},h=B(()=>{const{common:{cubicBezierEaseInOut:d},self:u}=l.value;return{"--n-bezier":d,"--n-color":t.embedded?u.colorEmbedded:u.color,"--n-text-color":u.textColor}}),v=n?de("layout",B(()=>t.embedded?"e":""),h,t):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:c,mergedTheme:l,handleNativeElScroll:f,cssVars:n?void 0:h,themeClass:v?.themeClass,onRender:v?.onRender},p)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const i=r?this.hasSiderStyle:void 0,n=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return a("div",{class:n,style:this.cssVars},this.nativeScrollbar?a("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):a(qe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const mo=lt(!1),bo=lt(!0),yo=C("layout-sider",`
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
`,[T("bordered",[D("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),D("left-placement",[T("bordered",[D("border",`
 right: 0;
 `)])]),T("right-placement",`
 justify-content: flex-start;
 `,[T("bordered",[D("border",`
 left: 0;
 `)]),T("collapsed",[C("layout-toggle-button",[C("base-icon",`
 transform: rotate(180deg);
 `)]),C("layout-toggle-bar",[Y("&:hover",[D("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),C("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[C("base-icon",`
 transform: rotate(0);
 `)]),C("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[Y("&:hover",[D("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),T("collapsed",[C("layout-toggle-bar",[Y("&:hover",[D("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),C("layout-toggle-button",[C("base-icon",`
 transform: rotate(0);
 `)])]),C("layout-toggle-button",`
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
 `,[C("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),C("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[D("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),D("bottom",`
 position: absolute;
 top: 34px;
 `),Y("&:hover",[D("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),D("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),Y("&:hover",[D("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),D("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),C("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),T("show-content",[C("layout-sider-scroll-container",{opacity:1})]),T("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Co=F({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return a("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},a("div",{class:`${e}-layout-toggle-bar__top`}),a("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),xo=F({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return a("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},a(Pe,{clsPrefix:e},{default:()=>a(Jt,null)}))}}),So={position:st,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},_o=F({name:"LayoutSider",props:Object.assign(Object.assign({},A.props),So),setup(e){const t=Tt(it),o=I(null),r=I(null),i=I(e.defaultCollapsed),n=Ge(Se(e,"collapsed"),i),l=B(()=>Q(n.value?e.collapsedWidth:e.width)),s=B(()=>e.collapseMode!=="transform"?{}:{minWidth:Q(e.width)}),g=B(()=>t?t.siderPlacement:"left");function m($,x){if(e.nativeScrollbar){const{value:P}=o;P&&(x===void 0?P.scrollTo($):P.scrollTo($,x))}else{const{value:P}=r;P&&P.scrollTo($,x)}}function f(){const{"onUpdate:collapsed":$,onUpdateCollapsed:x,onExpand:P,onCollapse:V}=e,{value:z}=n;x&&le(x,!z),$&&le($,!z),i.value=!z,z?P&&le(P):V&&le(V)}let c=0,p=0;const h=$=>{var x;const P=$.target;c=P.scrollLeft,p=P.scrollTop,(x=e.onScroll)===null||x===void 0||x.call(e,$)};Ye(()=>{if(e.nativeScrollbar){const $=o.value;$&&($.scrollTop=p,$.scrollLeft=c)}}),ke(po,{collapsedRef:n,collapseModeRef:Se(e,"collapseMode")});const{mergedClsPrefixRef:v,inlineThemeDisabled:d}=ie(e),u=A("Layout","-layout-sider",yo,nt,e,v);function b($){var x,P;$.propertyName==="max-width"&&(n.value?(x=e.onAfterLeave)===null||x===void 0||x.call(e):(P=e.onAfterEnter)===null||P===void 0||P.call(e))}const w={scrollTo:m},y=B(()=>{const{common:{cubicBezierEaseInOut:$},self:x}=u.value,{siderToggleButtonColor:P,siderToggleButtonBorder:V,siderToggleBarColor:z,siderToggleBarColorHover:_}=x,M={"--n-bezier":$,"--n-toggle-button-color":P,"--n-toggle-button-border":V,"--n-toggle-bar-color":z,"--n-toggle-bar-color-hover":_};return e.inverted?(M["--n-color"]=x.siderColorInverted,M["--n-text-color"]=x.textColorInverted,M["--n-border-color"]=x.siderBorderColorInverted,M["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColorInverted,M.__invertScrollbar=x.__invertScrollbar):(M["--n-color"]=x.siderColor,M["--n-text-color"]=x.textColor,M["--n-border-color"]=x.siderBorderColor,M["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColor),M}),k=d?de("layout-sider",B(()=>e.inverted?"a":"b"),y,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:v,mergedTheme:u,styleMaxWidth:l,mergedCollapsed:n,scrollContainerStyle:s,siderPlacement:g,handleNativeElScroll:h,handleTransitionend:b,handleTriggerClick:f,inlineThemeDisabled:d,cssVars:y,themeClass:k?.themeClass,onRender:k?.onRender},w)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),a("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Q(this.width)}]},this.nativeScrollbar?a("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):a(qe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?a(Co,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):a(xo,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?a("div",{class:`${t}-layout-sider__border`}):null)}}),wo={success:a(Ze,null),error:a(Je,null),warning:a(Ke,null),info:a(Xe,null)},zo=F({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){const o=B(()=>{const n="gradient",{fillColor:l}=e;return typeof l=="object"?`${n}-${Rt(JSON.stringify(l))}`:n});function r(n,l,s,g){const{gapDegree:m,viewBoxWidth:f,strokeWidth:c}=e,p=50,h=0,v=p,d=0,u=2*p,b=50+c/2,w=`M ${b},${b} m ${h},${v}
      a ${p},${p} 0 1 1 ${d},${-u}
      a ${p},${p} 0 1 1 ${-d},${u}`,y=Math.PI*2*p,k={stroke:g==="rail"?s:typeof e.fillColor=="object"?`url(#${o.value})`:s,strokeDasharray:`${Math.min(n,100)/100*(y-m)}px ${f*8}px`,strokeDashoffset:`-${m/2}px`,transformOrigin:l?"center":void 0,transform:l?`rotate(${l}deg)`:void 0};return{pathString:w,pathStyle:k}}const i=()=>{const n=typeof e.fillColor=="object",l=n?e.fillColor.stops[0]:"",s=n?e.fillColor.stops[1]:"";return n&&a("defs",null,a("linearGradient",{id:o.value,x1:"0%",y1:"100%",x2:"100%",y2:"0%"},a("stop",{offset:"0%","stop-color":l}),a("stop",{offset:"100%","stop-color":s})))};return()=>{const{fillColor:n,railColor:l,strokeWidth:s,offsetDegree:g,status:m,percentage:f,showIndicator:c,indicatorTextColor:p,unit:h,gapOffsetDegree:v,clsPrefix:d}=e,{pathString:u,pathStyle:b}=r(100,0,l,"rail"),{pathString:w,pathStyle:y}=r(f,g,n,"fill"),k=100+s;return a("div",{class:`${d}-progress-content`,role:"none"},a("div",{class:`${d}-progress-graph`,"aria-hidden":!0},a("div",{class:`${d}-progress-graph-circle`,style:{transform:v?`rotate(${v}deg)`:void 0}},a("svg",{viewBox:`0 0 ${k} ${k}`},i(),a("g",null,a("path",{class:`${d}-progress-graph-circle-rail`,d:u,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:b})),a("g",null,a("path",{class:[`${d}-progress-graph-circle-fill`,f===0&&`${d}-progress-graph-circle-fill--empty`],d:w,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:y}))))),c?a("div",null,t.default?a("div",{class:`${d}-progress-custom-content`,role:"none"},t.default()):m!=="default"?a("div",{class:`${d}-progress-icon`,"aria-hidden":!0},a(Pe,{clsPrefix:d},{default:()=>wo[m]})):a("div",{class:`${d}-progress-text`,style:{color:p},role:"none"},a("span",{class:`${d}-progress-text__percentage`},f),a("span",{class:`${d}-progress-text__unit`},h))):null)}}}),ko={success:a(Ze,null),error:a(Je,null),warning:a(Ke,null),info:a(Xe,null)},$o=F({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const o=B(()=>Q(e.height)),r=B(()=>{var l,s;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(l=e.fillColor)===null||l===void 0?void 0:l.stops[0]} , ${(s=e.fillColor)===null||s===void 0?void 0:s.stops[1]})`:e.fillColor}),i=B(()=>e.railBorderRadius!==void 0?Q(e.railBorderRadius):e.height!==void 0?Q(e.height,{c:.5}):""),n=B(()=>e.fillBorderRadius!==void 0?Q(e.fillBorderRadius):e.railBorderRadius!==void 0?Q(e.railBorderRadius):e.height!==void 0?Q(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:l,railColor:s,railStyle:g,percentage:m,unit:f,indicatorTextColor:c,status:p,showIndicator:h,processing:v,clsPrefix:d}=e;return a("div",{class:`${d}-progress-content`,role:"none"},a("div",{class:`${d}-progress-graph`,"aria-hidden":!0},a("div",{class:[`${d}-progress-graph-line`,{[`${d}-progress-graph-line--indicator-${l}`]:!0}]},a("div",{class:`${d}-progress-graph-line-rail`,style:[{backgroundColor:s,height:o.value,borderRadius:i.value},g]},a("div",{class:[`${d}-progress-graph-line-fill`,v&&`${d}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:r.value,height:o.value,lineHeight:o.value,borderRadius:n.value}},l==="inside"?a("div",{class:`${d}-progress-graph-line-indicator`,style:{color:c}},t.default?t.default():`${m}${f}`):null)))),h&&l==="outside"?a("div",null,t.default?a("div",{class:`${d}-progress-custom-content`,style:{color:c},role:"none"},t.default()):p==="default"?a("div",{role:"none",class:`${d}-progress-icon ${d}-progress-icon--as-text`,style:{color:c}},m,f):a("div",{class:`${d}-progress-icon`,"aria-hidden":!0},a(Pe,{clsPrefix:d},{default:()=>ko[p]}))):null)}}});function We(e,t,o=100){return`m ${o/2} ${o/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Bo=F({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const o=B(()=>e.percentage.map((n,l)=>`${Math.PI*n/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*l)-e.circleGap*l)*2}, ${e.viewBoxWidth*8}`)),r=(i,n)=>{const l=e.fillColor[n],s=typeof l=="object"?l.stops[0]:"",g=typeof l=="object"?l.stops[1]:"";return typeof e.fillColor[n]=="object"&&a("linearGradient",{id:`gradient-${n}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},a("stop",{offset:"0%","stop-color":s}),a("stop",{offset:"100%","stop-color":g}))};return()=>{const{viewBoxWidth:i,strokeWidth:n,circleGap:l,showIndicator:s,fillColor:g,railColor:m,railStyle:f,percentage:c,clsPrefix:p}=e;return a("div",{class:`${p}-progress-content`,role:"none"},a("div",{class:`${p}-progress-graph`,"aria-hidden":!0},a("div",{class:`${p}-progress-graph-circle`},a("svg",{viewBox:`0 0 ${i} ${i}`},a("defs",null,c.map((h,v)=>r(h,v))),c.map((h,v)=>a("g",{key:v},a("path",{class:`${p}-progress-graph-circle-rail`,d:We(i/2-n/2*(1+2*v)-l*v,n,i),"stroke-width":n,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:m[v]},f[v]]}),a("path",{class:[`${p}-progress-graph-circle-fill`,h===0&&`${p}-progress-graph-circle-fill--empty`],d:We(i/2-n/2*(1+2*v)-l*v,n,i),"stroke-width":n,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:o.value[v],strokeDashoffset:0,stroke:typeof g[v]=="object"?`url(#gradient-${v})`:g[v]}})))))),s&&t.default?a("div",null,a("div",{class:`${p}-progress-text`},t.default())):null)}}}),Po=Y([C("progress",{display:"inline-block"},[C("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),T("line",`
 width: 100%;
 display: block;
 `,[C("progress-content",`
 display: flex;
 align-items: center;
 `,[C("progress-graph",{flex:1})]),C("progress-custom-content",{marginLeft:"14px"}),C("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[T("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),T("circle, dashboard",{width:"120px"},[C("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),C("progress-text",`
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
 `),C("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),T("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[C("progress-text",`
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
 `)]),C("progress-content",{position:"relative"}),C("progress-graph",{position:"relative"},[C("progress-graph-circle",[Y("svg",{verticalAlign:"bottom"}),C("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[T("empty",{opacity:0})]),C("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),C("progress-graph-line",[T("indicator-inside",[C("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[C("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),C("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),T("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[C("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),C("progress-graph-line-indicator",`
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
 `)]),C("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[C("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[T("processing",[Y("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),Y("@keyframes progress-processing-animation",`
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
 `)]),To=Object.assign(Object.assign({},A.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),Ro=F({name:"Progress",props:To,setup(e){const t=B(()=>e.indicatorPlacement||e.indicatorPosition),o=B(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=ie(e),n=A("Progress","-progress",Po,It,e,r),l=B(()=>{const{status:g}=e,{common:{cubicBezierEaseInOut:m},self:{fontSize:f,fontSizeCircle:c,railColor:p,railHeight:h,iconSizeCircle:v,iconSizeLine:d,textColorCircle:u,textColorLineInner:b,textColorLineOuter:w,lineBgProcessing:y,fontWeightCircle:k,[q("iconColor",g)]:$,[q("fillColor",g)]:x}}=n.value;return{"--n-bezier":m,"--n-fill-color":x,"--n-font-size":f,"--n-font-size-circle":c,"--n-font-weight-circle":k,"--n-icon-color":$,"--n-icon-size-circle":v,"--n-icon-size-line":d,"--n-line-bg-processing":y,"--n-rail-color":p,"--n-rail-height":h,"--n-text-color-circle":u,"--n-text-color-line-inner":b,"--n-text-color-line-outer":w}}),s=i?de("progress",B(()=>e.status[0]),l,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:o,cssVars:i?void 0:l,themeClass:s?.themeClass,onRender:s?.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:o,showIndicator:r,status:i,railColor:n,railStyle:l,color:s,percentage:g,viewBoxWidth:m,strokeWidth:f,mergedIndicatorPlacement:c,unit:p,borderRadius:h,fillBorderRadius:v,height:d,processing:u,circleGap:b,mergedClsPrefix:w,gapDeg:y,gapOffsetDegree:k,themeClass:$,$slots:x,onRender:P}=this;return P?.(),a("div",{class:[$,`${w}-progress`,`${w}-progress--${e}`,`${w}-progress--${i}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":g,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?a(zo,{clsPrefix:w,status:i,showIndicator:r,indicatorTextColor:o,railColor:n,fillColor:s,railStyle:l,offsetDegree:this.offsetDegree,percentage:g,viewBoxWidth:m,strokeWidth:f,gapDegree:y===void 0?e==="dashboard"?75:0:y,gapOffsetDegree:k,unit:p},x):e==="line"?a($o,{clsPrefix:w,status:i,showIndicator:r,indicatorTextColor:o,railColor:n,fillColor:s,railStyle:l,percentage:g,processing:u,indicatorPlacement:c,unit:p,fillBorderRadius:v,railBorderRadius:h,height:d},x):e==="multiple-circle"?a(Bo,{clsPrefix:w,strokeWidth:f,railColor:n,fillColor:s,railStyle:l,viewBoxWidth:m,percentage:g,showIndicator:r,circleGap:b},x):null)}});function Io(e){const{primaryColorHover:t,borderColor:o}=e;return{resizableTriggerColorHover:t,resizableTriggerColor:o}}const Uo={common:be,self:Io},Oo=C("split",`
 display: flex;
 width: 100%;
 height: 100%;
`,[T("horizontal",`
 flex-direction: row;
 `),T("vertical",`
 flex-direction: column;
 `),C("split-pane-1",`
 overflow: hidden;
 `),C("split-pane-2",`
 overflow: hidden;
 flex: 1;
 `),D("resize-trigger",`
 background-color: var(--n-resize-trigger-color);
 transition: background-color .3s var(--n-bezier);
 `,[T("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `),Y("&:hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)])]),jo=Object.assign(Object.assign({},A.props),{direction:{type:String,default:"horizontal"},resizeTriggerSize:{type:Number,default:3},disabled:Boolean,defaultSize:{type:[String,Number],default:.5},"onUpdate:size":[Function,Array],onUpdateSize:[Function,Array],size:[String,Number],min:{type:[String,Number],default:0},max:{type:[String,Number],default:1},pane1Class:String,pane1Style:[Object,String],pane2Class:String,pane2Style:[Object,String],onDragStart:Function,onDragMove:Function,onDragEnd:Function,watchProps:Array}),Lo=F({name:"Split",props:jo,slots:Object,setup(e){var t;const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=ie(e),i=A("Split","-split",Oo,Uo,e,o),n=B(()=>{const{common:{cubicBezierEaseInOut:y},self:{resizableTriggerColor:k,resizableTriggerColorHover:$}}=i.value;return{"--n-bezier":y,"--n-resize-trigger-color":k,"--n-resize-trigger-color-hover":$}}),l=I(null),s=I(!1),g=Se(e,"size"),m=I(e.defaultSize);!((t=e.watchProps)===null||t===void 0)&&t.includes("defaultSize")&&Ot(()=>m.value=e.defaultSize);const f=y=>{const k=e["onUpdate:size"];e.onUpdateSize&&le(e.onUpdateSize,y),k&&le(k,y),m.value=y},c=Ge(g,m),p=B(()=>{const y=c.value;if(typeof y=="string")return{flex:`0 0 ${y}`};if(typeof y=="number"){const k=y*100;return{flex:`0 0 calc(${k}% - ${e.resizeTriggerSize*k/100}px)`}}}),h=B(()=>e.direction==="horizontal"?{width:`${e.resizeTriggerSize}px`,height:"100%"}:{width:"100%",height:`${e.resizeTriggerSize}px`}),v=B(()=>{const y=e.direction==="horizontal";return{width:y?`${e.resizeTriggerSize}px`:"",height:y?"":`${e.resizeTriggerSize}px`,cursor:e.direction==="horizontal"?"col-resize":"row-resize"}});let d=0;const u=y=>{y.preventDefault(),s.value=!0,e.onDragStart&&e.onDragStart(y);const k="mousemove",$="mouseup",x=z=>{b(z),e.onDragMove&&e.onDragMove(z)},P=()=>{De(k,document,x),De($,document,P),s.value=!1,e.onDragEnd&&e.onDragEnd(y),document.body.style.cursor=""};document.body.style.cursor=v.value.cursor,je(k,document,x),je($,document,P);const V=l.value;if(V){const z=V.getBoundingClientRect();e.direction==="horizontal"?d=y.clientX-z.left:d=z.top-y.clientY}b(y)};function b(y){var k,$;const x=($=(k=l.value)===null||k===void 0?void 0:k.parentElement)===null||$===void 0?void 0:$.getBoundingClientRect();if(!x)return;const{direction:P}=e,V=x.width-e.resizeTriggerSize,z=x.height-e.resizeTriggerSize,_=P==="horizontal"?V:z,M=P==="horizontal"?y.clientX-x.left-d:y.clientY-x.top+d,{min:K,max:J}=e,re=typeof K=="string"?Le(K):K*_,ne=typeof J=="string"?Le(J):J*_;let G=M;G=Math.max(G,re),G=Math.min(G,ne,_),typeof c.value=="string"?f(`${G}px`):f(G/_)}const w=r?de("split",void 0,n,e):void 0;return{themeClass:w?.themeClass,onRender:w?.onRender,cssVars:r?void 0:n,resizeTriggerElRef:l,isDragging:s,mergedClsPrefix:o,resizeTriggerWrapperStyle:v,resizeTriggerStyle:h,handleMouseDown:u,firstPaneStyle:p}},render(){var e,t,o,r,i;return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${this.mergedClsPrefix}-split`,`${this.mergedClsPrefix}-split--${this.direction}`,this.themeClass],style:this.cssVars},a("div",{class:[`${this.mergedClsPrefix}-split-pane-1`,this.pane1Class],style:[this.firstPaneStyle,this.pane1Style]},(o=(t=this.$slots)[1])===null||o===void 0?void 0:o.call(t)),!this.disabled&&a("div",{ref:"resizeTriggerElRef",class:`${this.mergedClsPrefix}-split__resize-trigger-wrapper`,style:this.resizeTriggerWrapperStyle,onMousedown:this.handleMouseDown},Ut(this.$slots["resize-trigger"],()=>[a("div",{style:this.resizeTriggerStyle,class:[`${this.mergedClsPrefix}-split__resize-trigger`,this.isDragging&&`${this.mergedClsPrefix}-split__resize-trigger--hover`]})])),a("div",{class:[`${this.mergedClsPrefix}-split-pane-2`,this.pane2Class],style:this.pane2Style},(i=(r=this.$slots)[2])===null||i===void 0?void 0:i.call(r)))}}),Do=C("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[Y("&:first-child","margin-top: 0;"),Y("&:last-child","margin-bottom: 0;")]),Eo=Object.assign(Object.assign({},A.props),{depth:[String,Number]}),Mo=F({name:"P",props:Eo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ie(e),r=A("Typography","-p",Do,Qe,e,t),i=B(()=>{const{depth:l}=e,s=l||"1",{common:{cubicBezierEaseInOut:g},self:{pFontSize:m,pLineHeight:f,pMargin:c,pTextColor:p,[`pTextColor${s}Depth`]:h}}=r.value;return{"--n-bezier":g,"--n-font-size":m,"--n-line-height":f,"--n-margin":c,"--n-text-color":l===void 0?p:h}}),n=o?de("p",B(()=>`${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:n?.themeClass,onRender:n?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),a("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),Fo=C("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[T("strong",`
 font-weight: var(--n-font-weight-strong);
 `),T("italic",{fontStyle:"italic"}),T("underline",{textDecoration:"underline"}),T("code",`
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
 `)]),No=Object.assign(Object.assign({},A.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),Ao=F({name:"Text",props:No,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ie(e),r=A("Typography","-text",Fo,Qe,e,t),i=B(()=>{const{depth:l,type:s}=e,g=s==="default"?l===void 0?"textColor":`textColor${l}Depth`:q("textColor",s),{common:{fontWeightStrong:m,fontFamilyMono:f,cubicBezierEaseInOut:c},self:{codeTextColor:p,codeBorderRadius:h,codeColor:v,codeBorder:d,[g]:u}}=r.value;return{"--n-bezier":c,"--n-text-color":u,"--n-font-weight-strong":m,"--n-font-famliy-mono":f,"--n-code-border-radius":h,"--n-code-text-color":p,"--n-code-color":v,"--n-code-border":d}}),n=o?de("text",B(()=>`${e.type[0]}${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:t,compitableTag:jt(e,["as","tag"]),cssVars:o?void 0:i,themeClass:n?.themeClass,onRender:n?.onRender}},render(){var e,t,o;const{mergedClsPrefix:r}=this;(e=this.onRender)===null||e===void 0||e.call(this);const i=[`${r}-text`,this.themeClass,{[`${r}-text--code`]:this.code,[`${r}-text--delete`]:this.delete,[`${r}-text--strong`]:this.strong,[`${r}-text--italic`]:this.italic,[`${r}-text--underline`]:this.underline}],n=(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t);return this.code?a("code",{class:i,style:this.cssVars},this.delete?a("del",null,n):n):this.delete?a("del",{class:i,style:this.cssVars},n):a(this.compitableTag||"span",{class:i,style:this.cssVars},n)}}),Wo=["accept","multiple"],Ho={class:"text-center"},Vo=F({__name:"index",props:{accept:{},multiple:{type:Boolean}},emits:["change"],setup(e,{emit:t}){const o=t;function r(l){o("change",l)}function i(l){const s=l.target;s.files&&r(s.files)}function n(l){const s=l.dataTransfer?.files;s&&s.length&&r(s)}return(l,s)=>{const g=Ao,m=Mo;return E(),H("div",{class:"relative border border-border rounded-6 border-dashed p-10 transition-all hover:border-primary",onDragover:s[0]||(s[0]=Ee(()=>{},["prevent"])),onDrop:Ee(n,["stop","prevent"])},[s[3]||(s[3]=S("label",{class:"absolute left-0 top-0 z-1 size-full cursor-pointer",for:"image-uploader"},null,-1)),S("input",{id:"image-uploader",class:"hidden",type:"file",accept:e.accept,multiple:e.multiple,onChange:i},null,40,Wo),S("div",Ho,[U(g,{depth:"3"},{default:R(()=>[...s[1]||(s[1]=[S("span",{class:"i-mage-image-upload text-40"},null,-1)])]),_:1})]),U(m,{class:"mt-0 text-center text-14",depth:"3"},{default:R(()=>[...s[2]||(s[2]=[X(" 拖拽文件到该区域或点击选择图片 ",-1)])]),_:1})],32)}}}),qo=F({__name:"CompressUpload",emits:["change"],setup(e,{emit:t}){const o=t;function r(i){const n=Array.from(i).map(l=>({file:l,id:Kt(),fileName:Lt(l.name),src:URL.createObjectURL(l)}));o("change",n)}return(i,n)=>{const l=Vo;return E(),ce(l,{multiple:"",accept:"image/png,image/jpeg,image/avif",onChange:r})}}}),Yo={id:"CompressProgress",class:"mt-10 flex items-center"},Go={key:0,class:"ml-4 flex items-center"},Xo={key:0,class:"i-solar-check-circle-bold ml-4 text-success"},Ko={class:"text-14"},Jo={class:"text-success"},Zo={class:"text-error"},Qo=F({__name:"CompressProgress",props:{compressList:{},successList:{},failedList:{},compressEnd:{type:Boolean},percentage:{}},setup(e){const t=e,o=B(()=>t.compressEnd?t.successList.length===t.compressList.length?"success":t.failedList.length===t.compressList.length?"error":"warning":"default");return(r,i)=>{const n=Ro,l=_e;return E(),H("div",Yo,[U(n,{class:"flex-1",type:"line",status:o.value,percentage:e.percentage,"indicator-placement":"inside"},null,8,["status","percentage"]),e.compressEnd?(E(),H("div",Go,[e.successList.length===e.compressList.length?(E(),H("div",Xo)):(E(),ce(l,{key:1},{trigger:R(()=>[S("div",{class:ve(["i-solar-info-circle-bold",{"text-error":e.failedList.length===e.compressList.length,"text-warning":e.successList.length!==e.compressList.length}])},null,2)]),default:R(()=>[S("div",Ko,[S("div",null,"总数："+ee(e.compressList.length),1),S("div",null,[i[0]||(i[0]=S("span",null,"成功：",-1)),S("span",Jo,ee(e.successList.length),1)]),S("div",null,[i[1]||(i[1]=S("span",null,"失败：",-1)),S("span",Zo,ee(e.failedList.length),1)])])]),_:1}))])):te("",!0)])}}}),er={id:"CompressOption"},tr={class:"color-grey"},or={class:"flex"},rr={class:"mt-20 flex items-center font-600"},nr={class:"flex items-center"},sr={class:"flex items-center"},ir=F({__name:"CompressOption",props:{checked:{required:!0},checkedModifiers:{},size:{required:!0},sizeModifiers:{},quality:{required:!0},qualityModifiers:{}},emits:["update:checked","update:size","update:quality"],setup(e){const t=xe(e,"checked"),o=xe(e,"size"),r=xe(e,"quality"),i=[{label:"WebP",value:"webp",tip:"压缩率较高，大多数浏览器支持"},{label:"AVIF",value:"avif",tip:"压缩率极高，部分现代浏览器支持"},{label:"JPEG",value:"jpeg",tip:"兼容性最好，所有浏览器支持"}];function n(l){t.value=l}return(l,s)=>{const g=Yt,m=Te,f=Gt,c=_e;return E(),H("div",er,[s[11]||(s[11]=S("div",{class:"font-600"}," 图片压缩格式 ",-1)),U(m,{vertical:""},{default:R(()=>[(E(),H(Re,null,et(i,p=>U(g,{key:p.value,checked:t.value===p.value,value:p.value,onChange:h=>n(p.value)},{default:R(()=>[X(ee(p.label)+" ",1),S("span",tr,ee(p.tip),1)]),_:2},1032,["checked","value","onChange"])),64))]),_:1}),s[12]||(s[12]=S("div",{class:"mt-20 flex items-center font-600"}," 图片压缩质量 ",-1)),S("div",or,[U(f,{value:r.value,"onUpdate:value":s[0]||(s[0]=p=>r.value=p),placeholder:"请输入",min:1,max:100},{suffix:R(()=>[...s[3]||(s[3]=[X(" % ",-1)])]),_:1},8,["value"])]),S("div",rr,[s[6]||(s[6]=X(" 图片输出尺寸 ",-1)),U(c,{placement:"right"},{trigger:R(()=>[...s[4]||(s[4]=[S("span",{class:"i-solar-info-circle-bold"},null,-1)])]),default:R(()=>[s[5]||(s[5]=X(" 如果只输入宽度或者高度，另外一项会自动计算 ",-1))]),_:1})]),U(m,{vertical:""},{default:R(()=>[S("div",nr,[s[8]||(s[8]=S("div",{class:"text-16"}," 图片宽度： ",-1)),U(f,{value:o.value.width,"onUpdate:value":s[1]||(s[1]=p=>o.value.width=p),placeholder:"请输入",min:1},{suffix:R(()=>[...s[7]||(s[7]=[X(" px ",-1)])]),_:1},8,["value"])]),S("div",sr,[s[10]||(s[10]=S("div",{class:"text-16"}," 图片高度： ",-1)),U(f,{value:o.value.height,"onUpdate:value":s[2]||(s[2]=p=>o.value.height=p),placeholder:"请输入",min:1},{suffix:R(()=>[...s[9]||(s[9]=[X(" px ",-1)])]),_:1},8,["value"])])]),_:1})])}}}),lr={id:"CompressPreview",class:"mb-10"},ar={key:0,class:"flex justify-between text-14"},cr={class:"h-250 overflow-hidden rounded-6"},dr=["src"],ur=["src"],gr={class:"size-full"},fr=["src"],pr=F({__name:"CompressPreview",props:{src:{},compressedSrc:{}},setup(e){const t=I(.5),o=I(),{width:r}=Dt(o);return(i,n)=>{const l=Lo;return E(),H("div",lr,[e.src&&e.compressedSrc?(E(),H("div",ar,[...n[1]||(n[1]=[S("span",null,"压缩前",-1),S("span",null,"压缩后",-1)])])):te("",!0),S("div",cr,[e.src&&!e.compressedSrc?(E(),H("img",{key:0,class:"size-full object-cover",src:e.src},null,8,dr)):te("",!0),e.src&&e.compressedSrc?(E(),ce(l,{key:1,size:t.value,"onUpdate:size":n[0]||(n[0]=s=>t.value=s),"resize-trigger-size":2,class:"relative h-full"},{1:R(()=>[S("div",{ref_key:"leftBox",ref:o,class:"size-full"},[S("img",{class:"absolute left-0 top-0 z-1 size-full object-cover",src:e.src,style:Et({clip:`rect(auto, ${me(r)}px, auto, auto)`})},null,12,ur)],512)]),2:R(()=>[S("div",gr,[S("img",{class:"absolute left-0 top-0 size-full object-cover",src:e.compressedSrc},null,8,fr)])]),"resize-trigger":R(()=>[...n[2]||(n[2]=[S("div",{class:"relative z-1 h-full bg-primary"},[S("div",{class:"absolute-center size-40 flex items-center border-2 border-primary rounded-1/2 border-solid"},[S("span",{class:"i-ri-arrow-left-s-fill text-22 color-primary"}),S("span",{class:"i-ri-arrow-right-s-fill text-22 color-primary"})])],-1)])]),_:1},8,["size"])):te("",!0)])])}}}),hr={class:"image-list"},vr=["onClick"],mr={class:"h-150 w-full"},br=["src"],yr={class:"flex items-center justify-between px-8 py-4"},Cr={class:"text-12"},xr=["onClick"],Sr=F({__name:"CompressList",props:Mt({list:{}},{active:{required:!0},activeModifiers:{}}),emits:["update:active"],setup(e){const t=xe(e,"active");function o(r){t.value=r}return(r,i)=>{const n=tt,l=go,s=no,g=_e,m=Te;return E(),H("div",hr,[(E(!0),H(Re,null,et(e.list,f=>(E(),H("div",{key:f.id,class:ve(["cursor-pointer overflow-hidden border border-border rounded-6 border-solid transition-all not-first:mt-10 hover:border-primary",{"border-primary":t.value===f.id,"border-error!":f.status==="failed"}]),onClick:c=>o(f.id)},[U(n,{show:f.status==="processing"},{default:R(()=>[S("div",mr,[S("img",{class:"size-full object-cover",src:f.src,"no-view":""},null,8,br)])]),_:2},1032,["show"]),S("div",yr,[U(l,{class:ve(["flex-1 text-12",{"text-error":f.status==="failed"}])},{default:R(()=>[X(ee(f.file.name),1)]),_:2},1032,["class"]),U(m,{size:4},{default:R(()=>[U(s,{class:ve(["rounded-4",{"line-through":f.compressedFile}]),type:f.status==="failed"?"error":"default",size:"small"},{default:R(()=>[X(ee(me(Me)(f.file.size)),1)]),_:2},1032,["class","type"]),f.compressedFile?(E(),ce(s,{key:0,class:"rounded-4",type:"success",size:"small"},{default:R(()=>[X(ee(me(Me)(f.compressedFile.size)),1)]),_:2},1024)):te("",!0),f.failedInfo?(E(),ce(g,{key:1,class:"max-h-150 max-w-200",trigger:"hover",scrollable:""},{trigger:R(()=>[...i[0]||(i[0]=[S("div",{class:"i-solar-info-circle-bold text-error"},null,-1)])]),default:R(()=>[S("div",Cr,ee(f.failedInfo),1)]),_:2},1024)):te("",!0)]),_:2},1024)]),f.compressedFile?(E(),H("div",{key:0,class:"cursor-pointer border-t border-border border-t-solid bg-primary-1 text-center text-12 leading-30 transition-all dark:bg-primary-2 dark:hover:bg-primary-3 hover:bg-primary-2",onClick:c=>me(ot)(f.compressedFile,f.compressedFile.name)}," 点击下载 ",8,xr)):te("",!0)],10,vr))),128))])}}});"stream"in Blob.prototype||Object.defineProperty(Blob.prototype,"stream",{value(){return new Response(this).body}}),"setBigUint64"in DataView.prototype||Object.defineProperty(DataView.prototype,"setBigUint64",{value(e,t,o){const r=Number(0xffffffffn&t),i=Number(t>>32n);this.setUint32(e+(o?0:4),r,o),this.setUint32(e+(o?4:0),i,o)}});var ge=e=>new DataView(new ArrayBuffer(e)),oe=e=>new Uint8Array(e.buffer||e),ue=e=>new TextEncoder().encode(String(e)),ae=e=>Math.min(4294967295,Number(e)),He=e=>Math.min(65535,Number(e));function _r(e,t,o){t===void 0||t instanceof Date||(t=new Date(t));const r=e!==void 0;if(o||(o=r?436:509),e instanceof File)return{isFile:r,t:t||new Date(e.lastModified),bytes:e.stream(),mode:o};if(e instanceof Response)return{isFile:r,t:t||new Date(e.headers.get("Last-Modified")||Date.now()),bytes:e.body,mode:o};if(t===void 0)t=new Date;else if(isNaN(t))throw new Error("Invalid modification date.");if(!r)return{isFile:r,t,mode:o};if(typeof e=="string")return{isFile:r,t,bytes:ue(e),mode:o};if(e instanceof Blob)return{isFile:r,t,bytes:e.stream(),mode:o};if(e instanceof Uint8Array||e instanceof ReadableStream)return{isFile:r,t,bytes:e,mode:o};if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return{isFile:r,t,bytes:oe(e),mode:o};if(Symbol.asyncIterator in e)return{isFile:r,t,bytes:at(e[Symbol.asyncIterator]()),mode:o};throw new TypeError("Unsupported input format.")}function at(e,t=e){return new ReadableStream({async pull(o){let r=0;for(;o.desiredSize>r;){const i=await e.next();if(!i.value){o.close();break}{const n=wr(i.value);o.enqueue(n),r+=n.byteLength}}},cancel(o){t.throw?.(o)}})}function wr(e){return typeof e=="string"?ue(e):e instanceof Uint8Array?e:oe(e)}function ct(e,t,o){let[r,i]=(function(n){return n?n instanceof Uint8Array?[n,1]:ArrayBuffer.isView(n)||n instanceof ArrayBuffer?[oe(n),1]:[ue(n),0]:[void 0,0]})(t);if(e instanceof File)return{i:we(r||ue(e.name)),o:BigInt(e.size),u:i};if(e instanceof Response){const n=e.headers.get("content-disposition"),l=n&&n.match(/;\s*filename\*?\s*=\s*(?:UTF-\d+''|)["']?([^;"'\r\n]*)["']?(?:;|$)/i),s=l&&l[1]||e.url&&new URL(e.url).pathname.split("/").findLast(Boolean),g=s&&decodeURIComponent(s),m=o||+e.headers.get("content-length");return{i:we(r||ue(g)),o:BigInt(m),u:i}}return r=we(r,e!==void 0||o!==void 0),typeof e=="string"?{i:r,o:BigInt(ue(e).length),u:i}:e instanceof Blob?{i:r,o:BigInt(e.size),u:i}:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?{i:r,o:BigInt(e.byteLength),u:i}:{i:r,o:zr(e,o),u:i}}function zr(e,t){return t>-1?BigInt(t):e?void 0:0n}function we(e,t=1){if(!e||e.every((o=>o===47)))throw new Error("The file must have a name.");if(t)for(;e[e.length-1]===47;)e=e.subarray(0,-1);else e[e.length-1]!==47&&(e=new Uint8Array([...e,47]));return e}var dt=new Uint32Array(256);for(let e=0;e<256;++e){let t=e;for(let o=0;o<8;++o)t=t>>>1^(1&t&&3988292384);dt[e]=t}function Ve(e,t=0){t=~t;for(var o=0,r=e.length;o<r;o++)t=t>>>8^dt[255&t^e[o]];return~t>>>0}function ut(e,t,o=0){const r=e.getSeconds()>>1|e.getMinutes()<<5|e.getHours()<<11,i=e.getDate()|e.getMonth()+1<<5|e.getFullYear()-1980<<9;t.setUint16(o,r,1),t.setUint16(o+2,i,1)}function kr({i:e,u:t},o){return 8*(!t||(o??(function(r){try{$r.decode(r)}catch{return 0}return 1})(e)))}var $r=new TextDecoder("utf8",{fatal:1});function Br(e,t=0){const o=ge(30);return o.setUint32(0,1347093252),o.setUint32(4,754976768|t),ut(e.t,o,10),o.setUint16(26,e.i.length,1),oe(o)}async function*Pr(e){let{bytes:t}=e;if("then"in t&&(t=await t),t instanceof Uint8Array)yield t,e.l=Ve(t,0),e.o=BigInt(t.length);else{e.o=0n;const o=t.getReader();for(;;){const{value:r,done:i}=await o.read();if(i)break;e.l=Ve(r,e.l),e.o+=BigInt(r.length),yield r}}}function Tr(e,t){const o=ge(16+(t?8:0));return o.setUint32(0,1347094280),o.setUint32(4,e.isFile?e.l:0,1),t?(o.setBigUint64(8,e.o,1),o.setBigUint64(16,e.o,1)):(o.setUint32(8,ae(e.o),1),o.setUint32(12,ae(e.o),1)),oe(o)}function Rr(e,t,o=0,r=0){const i=ge(46);return i.setUint32(0,1347092738),i.setUint32(4,755182848),i.setUint16(8,2048|o),ut(e.t,i,12),i.setUint32(16,e.isFile?e.l:0,1),i.setUint32(20,ae(e.o),1),i.setUint32(24,ae(e.o),1),i.setUint16(28,e.i.length,1),i.setUint16(30,r,1),i.setUint16(40,e.mode|(e.isFile?32768:16384),1),i.setUint32(42,ae(t),1),oe(i)}function Ir(e,t,o){const r=ge(o);return r.setUint16(0,1,1),r.setUint16(2,o-4,1),16&o&&(r.setBigUint64(4,e.o,1),r.setBigUint64(12,e.o,1)),r.setBigUint64(o-8,t,1),oe(r)}function gt(e){return e instanceof File||e instanceof Response?[[e],[e]]:[[e.input,e.name,e.size],[e.input,e.lastModified,e.mode]]}var Ur=e=>(function(t){let o=BigInt(22),r=0n,i=0;for(const n of t){if(!n.i)throw new Error("Every file must have a non-empty name.");if(n.o===void 0)throw new Error(`Missing size for file "${new TextDecoder().decode(n.i)}".`);const l=n.o>=0xffffffffn,s=r>=0xffffffffn;r+=BigInt(46+n.i.length+(l&&8))+n.o,o+=BigInt(n.i.length+46+(12*s|28*l)),i||(i=l)}return(i||r>=0xffffffffn)&&(o+=BigInt(76)),o+r})((function*(t){for(const o of t)yield ct(...gt(o)[0])})(e));function Or(e,t={}){const o={"Content-Type":"application/zip","Content-Disposition":"attachment"};return(typeof t.length=="bigint"||Number.isInteger(t.length))&&t.length>0&&(o["Content-Length"]=String(t.length)),t.metadata&&(o["Content-Length"]=String(Ur(t.metadata))),new Response(jr(e,t),{headers:o})}function jr(e,t={}){const o=(function(r){const i=r[Symbol.iterator in r?Symbol.iterator:Symbol.asyncIterator]();return{async next(){const n=await i.next();if(n.done)return n;const[l,s]=gt(n.value);return{done:0,value:Object.assign(_r(...s),ct(...l))}},throw:i.throw?.bind(i),[Symbol.asyncIterator](){return this}}})(e);return at((async function*(r,i){const n=[];let l=0n,s=0n,g=0;for await(const c of r){const p=kr(c,i.buffersAreUTF8);yield Br(c,p),yield new Uint8Array(c.i),c.isFile&&(yield*Pr(c));const h=c.o>=0xffffffffn,v=12*(l>=0xffffffffn)|28*h;yield Tr(c,h),n.push(Rr(c,l,p,v)),n.push(c.i),v&&n.push(Ir(c,l,v)),h&&(l+=8n),s++,l+=BigInt(46+c.i.length)+c.o,g||(g=h)}let m=0n;for(const c of n)yield c,m+=BigInt(c.length);if(g||l>=0xffffffffn){const c=ge(76);c.setUint32(0,1347094022),c.setBigUint64(4,BigInt(44),1),c.setUint32(12,755182848),c.setBigUint64(24,s,1),c.setBigUint64(32,s,1),c.setBigUint64(40,m,1),c.setBigUint64(48,l,1),c.setUint32(56,1347094023),c.setBigUint64(64,l+m,1),c.setUint32(72,1,1),yield oe(c)}const f=ge(22);f.setUint32(0,1347093766),f.setUint16(8,He(s),1),f.setUint16(10,He(s),1),f.setUint32(12,ae(m),1),f.setUint32(16,ae(l),1),yield oe(f)})(o,t),o)}const Lr={key:0,class:"border border-border rounded-6 border-solid"},Dr={class:"border-r border-border border-r-solid p-10"},Er={class:"py-10 pl-20 pr-10"},Mr={class:"mt-10 flex justify-end"},Fr=F({__name:"index",setup(e){const t=Ft(),o=I([]),r=I([]),i=I(""),n=I(0),l=I(!0),s=I(!1),g=I(!1),m=I(!1),f=I(!1),c=I("webp"),p=I(75),h=I({width:void 0,height:void 0}),v=B(()=>r.value.find(z=>z.id===i.value)),d=B(()=>r.value.filter(z=>z.status==="success"&&z.compressedFile)),u=B(()=>r.value.filter(z=>z.status==="failed")),b=B(()=>v.value?.src),w=B(()=>v.value?.compressedSrc);let y;try{k()}catch(z){console.log("loadModules error",z),l.value=!1,t.error({title:"加载异常",content:"依赖资源加载异常，请刷新页面后重试",positiveText:"重试",onPositiveClick:()=>{window.location.reload()}})}async function k(){const[z,_,M,K,{default:J}]=await Promise.all([pe(()=>import("https://unpkg.com/@jsquash/avif@1.3.0?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/jpeg@1.6.0?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/png@3.1.1?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/webp@1.5.0?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/resize@2.1.0?module"),[])]);l.value=!1,m.value=!0,y=async()=>{s.value=!0,g.value=!1,n.value=0,r.value=At(o.value);for(let N=0;N<r.value.length;N++){const O=r.value[N];try{const W=O.file.type.replace("image/","");O.status="processing";const Z=await G(W,O.file),L=`image/${c.value}`,se=new Blob([Z],{type:L});O.compressedFile=new File([se],`${O.fileName}.${c.value}`,{type:L}),O.compressedSrc=URL.createObjectURL(O.compressedFile),O.status="success"}catch(W){O.status="failed",O.failedInfo=Fe(W)}n.value=Math.round((N+1)/r.value.length*100)}s.value=!1,g.value=!0};async function re(N,O){const W=await O.arrayBuffer();switch(N){case"avif":return await z.decode(W);case"jpeg":return await _.decode(W);case"png":return await M.decode(W);case"webp":return await K.decode(W);default:throw new Error(`Unknown source type: ${N}`)}}async function ne(N){const O={quality:p.value};switch(c.value){case"avif":return await z.encode(N,O);case"jpeg":return await _.encode(N,O);case"png":return await M.encode(N);case"webp":return await K.encode(N,O);default:throw new Error(`Unknown output type: ${c.value}`)}}async function G(N,O){const W=await re(N,O);if(h.value.width||h.value.height){const Z=await Wt(O),L=fe(Z,h.value),se=await J(W,L);return ne(se)}return ne(W)}function fe(N,O){const{width:W,height:Z}=N,{width:L,height:se}=O,ye=W/Z;return{width:L??Math.round(se*ye),height:se??Math.round(L/ye)}}}function $(z){o.value=z,r.value=z,!i.value&&z.length&&(i.value=z[0].id)}function x(){V(o.value),V(r.value),i.value="",h.value={width:void 0,height:void 0},n.value=0,o.value=[],r.value=[],s.value=!1,g.value=!1}async function P(){try{const z=d.value.map(M=>M.compressedFile),_=await Or(z).blob();ot(_,`liubing.me_compressed_${Date.now()}.zip`)}catch(z){window.$message.error(Fe(z))}}function V(z){z.forEach(_=>{_.src&&URL.revokeObjectURL(_.src),_.compressedSrc&&URL.revokeObjectURL(_.compressedSrc)})}return(z,_)=>{const M=Sr,K=_o,J=pr,re=ir,ne=Qo,G=Nt,fe=Te,N=bo,O=mo,W=qo,Z=tt;return E(),H("div",{class:ve(["compress-image relative",{"opacity-50":!m.value&&!l.value,"after:content-empty after:absolute after:size-full after:top-0 after:z-1 after:cursor-not-allowed":!m.value&&!l.value}])},[U(Z,{show:l.value},{description:R(()=>[..._[7]||(_[7]=[S("div",{"text-center":"","text-14":""},[S("div",null,"依赖资源加载中..."),S("div",null,"首次加载较慢，请耐心等待")],-1)])]),default:R(()=>[r.value.length?(E(),H("div",Lr,[U(O,{"has-sider":"",class:"h-[calc(100vh-150px)]"},{default:R(()=>[U(K,{"collapse-mode":"transform","collapsed-width":0,width:300,"show-trigger":"arrow-circle",bordered:""},{default:R(()=>[S("div",Dr,[U(M,{active:i.value,"onUpdate:active":_[0]||(_[0]=L=>i.value=L),list:r.value},null,8,["active","list"])])]),_:1}),U(N,null,{default:R(()=>[S("div",Er,[b.value?(E(),ce(J,{key:0,src:b.value,"compressed-src":w.value},null,8,["src","compressed-src"])):te("",!0),U(re,{checked:c.value,"onUpdate:checked":_[1]||(_[1]=L=>c.value=L),quality:p.value,"onUpdate:quality":_[2]||(_[2]=L=>p.value=L),size:h.value,"onUpdate:size":_[3]||(_[3]=L=>h.value=L)},null,8,["checked","quality","size"]),s.value||g.value?(E(),ce(ne,{key:1,"compress-list":r.value,"success-list":d.value,"failed-list":u.value,"compress-end":g.value,percentage:n.value},null,8,["compress-list","success-list","failed-list","compress-end","percentage"])):te("",!0),S("div",Mr,[U(fe,null,{default:R(()=>[U(G,{type:"tertiary",disabled:s.value,onClick:x},{default:R(()=>[..._[8]||(_[8]=[X(" 重置 ",-1)])]),_:1},8,["disabled"]),U(G,{type:"primary",secondary:"",disabled:f.value||!d.value.length||s.value,loading:f.value,onClick:P},{default:R(()=>[..._[9]||(_[9]=[X(" 批量下载 ",-1)])]),_:1},8,["disabled","loading"]),U(G,{type:"primary",disabled:s.value,loading:s.value,onClick:me(y)},{default:R(()=>[..._[10]||(_[10]=[X(" 开始压缩 ",-1)])]),_:1},8,["disabled","loading","onClick"])]),_:1})])])]),_:1})]),_:1})])):(E(),H(Re,{key:1},[U(W,{onChange:$}),U(re,{checked:c.value,"onUpdate:checked":_[4]||(_[4]=L=>c.value=L),quality:p.value,"onUpdate:quality":_[5]||(_[5]=L=>p.value=L),size:h.value,"onUpdate:size":_[6]||(_[6]=L=>h.value=L),class:"mt-10"},null,8,["checked","quality","size"])],64))]),_:1},8,["show"])],2)}}}),Nr={};function Ar(e,t){const o=Fr,r=qt("ClientOnly");return E(),H("div",null,[t[0]||(t[0]=Vt('<h1 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩"><span>图片压缩</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>工具依赖加载<a href="https://unpkg.com/" target="_blank" rel="noopener noreferrer">unpkg</a>的资源，国内用户可能需要开启魔法上网。</p></div><div class="hint-container tip"><p class="hint-container-title">温馨提示</p><p>纯本地图片压缩工具，不会上传您的任何图片信息，请放心使用。</p></div>',3)),U(r,null,{default:R(()=>[U(o)]),_:1})])}const qr=Ht(Nr,[["render",Ar]]),Yr=JSON.parse('{"path":"/tools/compress-image.html","title":"图片压缩","lang":"zh-CN","frontmatter":{"toc":false,"pageInfo":false,"layout":"ToolLayout","description":"一个纯本地图片压缩工具，支持输出WebP、AVIF、JPEG格图片","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图片压缩\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-25T06:46:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"],["meta",{"property":"og:url","content":"https://liubing.me/tools/compress-image.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"图片压缩"}],["meta",{"property":"og:description","content":"一个纯本地图片压缩工具，支持输出WebP、AVIF、JPEG格图片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-25T06:46:07.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-25T06:46:07.000Z"}],["script",{"type":"importmap"},"{\\n  \\"imports\\": {\\n    \\"wasm-feature-detect\\": \\"https://unpkg.com/wasm-feature-detect@1.8.0?module\\"\\n  }\\n}\\n"]]},"git":{"createdTime":1732366923000,"updatedTime":1742885167000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":3,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":0.36,"words":107},"filePathRelative":"tools/compress-image.md","excerpt":"\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>工具依赖加载<a href=\\"https://unpkg.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">unpkg</a>的资源，国内用户可能需要开启魔法上网。</p>\\n</div>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">温馨提示</p>\\n<p>纯本地图片压缩工具，不会上传您的任何图片信息，请放心使用。</p>\\n</div>"}');export{qr as comp,Yr as data};
