import{t as bt,e as F,h as a,f as be,g as yt,i as j,j as x,k as T,l as D,m as he,n as Y,p as Ue,N as Ct,q as I,u as ie,s as A,v as ke,w as _e,x as xt,y as $,z as q,A as _t,B as de,C as Oe,D as le,E as $e,F as Be,G as St,H as wt,I as ze,J as Se,K as zt,L as kt,M as $t,O as Bt,P as Pt,S as qe,Q as Ye,R as Pe,T as Q,U as Tt,V as Ge,W as Xe,X as Ke,Y as Ze,Z as Je,$ as Rt,a0 as It,a1 as Ut,a2 as je,a3 as Le,a4 as De,a5 as Qe,a6 as Ot,c as H,o as E,a7 as Ee,b as S,d as U,a8 as R,a9 as X,aa as ce,ab as jt,ac as te,ad as ee,ae as ve,af as xe,ag as Te,ah as Re,ai as et,aj as Lt,ak as Dt,al as me,am as Et,an as tt,ao as Me,ap as ot,aq as Mt,ar as pe,as as Ft,at as Nt,au as Fe,av as At,_ as Wt,a as Ht,r as Vt}from"./app-DyfPPSu6.js";import{_ as qt,a as Yt}from"./InputNumber-BGAvhyXs.js";import"./Input-eTOpND71.js";var Gt=0;function Xt(e){var t=++Gt;return bt(e)+t}const Kt=F({name:"ChevronRight",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function Zt(e){const{textColor2:t,primaryColorHover:o,primaryColorPressed:r,primaryColor:n,infoColor:s,successColor:l,warningColor:i,errorColor:d,baseColor:h,borderColor:p,opacityDisabled:c,tagColor:v,closeIconColor:g,closeIconColorHover:u,closeIconColorPressed:m,borderRadiusSmall:f,fontSizeMini:b,fontSizeTiny:z,fontSizeSmall:y,fontSizeMedium:B,heightMini:k,heightTiny:_,heightSmall:P,heightMedium:V,closeColorHover:C,closeColorPressed:w,buttonColor2Hover:M,buttonColor2Pressed:K,fontWeightStrong:Z}=e;return Object.assign(Object.assign({},yt),{closeBorderRadius:f,heightTiny:k,heightSmall:_,heightMedium:P,heightLarge:V,borderRadius:f,opacityDisabled:c,fontSizeTiny:b,fontSizeSmall:z,fontSizeMedium:y,fontSizeLarge:B,fontWeightStrong:Z,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:h,colorCheckable:"#0000",colorHoverCheckable:M,colorPressedCheckable:K,colorChecked:n,colorCheckedHover:o,colorCheckedPressed:r,border:`1px solid ${p}`,textColor:t,color:v,colorBordered:"rgb(250, 250, 252)",closeIconColor:g,closeIconColorHover:u,closeIconColorPressed:m,closeColorHover:C,closeColorPressed:w,borderPrimary:`1px solid ${j(n,{alpha:.3})}`,textColorPrimary:n,colorPrimary:j(n,{alpha:.12}),colorBorderedPrimary:j(n,{alpha:.1}),closeIconColorPrimary:n,closeIconColorHoverPrimary:n,closeIconColorPressedPrimary:n,closeColorHoverPrimary:j(n,{alpha:.12}),closeColorPressedPrimary:j(n,{alpha:.18}),borderInfo:`1px solid ${j(s,{alpha:.3})}`,textColorInfo:s,colorInfo:j(s,{alpha:.12}),colorBorderedInfo:j(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:j(s,{alpha:.12}),closeColorPressedInfo:j(s,{alpha:.18}),borderSuccess:`1px solid ${j(l,{alpha:.3})}`,textColorSuccess:l,colorSuccess:j(l,{alpha:.12}),colorBorderedSuccess:j(l,{alpha:.1}),closeIconColorSuccess:l,closeIconColorHoverSuccess:l,closeIconColorPressedSuccess:l,closeColorHoverSuccess:j(l,{alpha:.12}),closeColorPressedSuccess:j(l,{alpha:.18}),borderWarning:`1px solid ${j(i,{alpha:.35})}`,textColorWarning:i,colorWarning:j(i,{alpha:.15}),colorBorderedWarning:j(i,{alpha:.12}),closeIconColorWarning:i,closeIconColorHoverWarning:i,closeIconColorPressedWarning:i,closeColorHoverWarning:j(i,{alpha:.12}),closeColorPressedWarning:j(i,{alpha:.18}),borderError:`1px solid ${j(d,{alpha:.23})}`,textColorError:d,colorError:j(d,{alpha:.1}),colorBorderedError:j(d,{alpha:.08}),closeIconColorError:d,closeIconColorHoverError:d,closeIconColorPressedError:d,closeColorHoverError:j(d,{alpha:.12}),closeColorPressedError:j(d,{alpha:.18})})}const Jt={common:be,self:Zt},Qt={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},eo=x("tag",`
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
 `,[he("disabled",[Y("&:hover","background-color: var(--n-color-checked-hover);"),Y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),to=Object.assign(Object.assign(Object.assign({},A.props),Qt),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),oo=$e("n-tag"),ro=F({name:"Tag",props:to,slots:Object,setup(e){const t=I(null),{mergedBorderedRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:n,mergedRtlRef:s}=ie(e),l=A("Tag","-tag",eo,Jt,e,r);ke(oo,{roundRef:_e(e,"round")});function i(){if(!e.disabled&&e.checkable){const{checked:g,onCheckedChange:u,onUpdateChecked:m,"onUpdate:checked":f}=e;m&&m(!g),f&&f(!g),u&&u(!g)}}function d(g){if(e.triggerClickOnClose||g.stopPropagation(),!e.disabled){const{onClose:u}=e;u&&le(u,g)}}const h={setTextContent(g){const{value:u}=t;u&&(u.textContent=g)}},p=xt("Tag",s,r),c=$(()=>{const{type:g,size:u,color:{color:m,textColor:f}={}}=e,{common:{cubicBezierEaseInOut:b},self:{padding:z,closeMargin:y,borderRadius:B,opacityDisabled:k,textColorCheckable:_,textColorHoverCheckable:P,textColorPressedCheckable:V,textColorChecked:C,colorCheckable:w,colorHoverCheckable:M,colorPressedCheckable:K,colorChecked:Z,colorCheckedHover:re,colorCheckedPressed:ne,closeBorderRadius:G,fontWeightStrong:fe,[q("colorBordered",g)]:N,[q("closeSize",u)]:O,[q("closeIconSize",u)]:W,[q("fontSize",u)]:J,[q("height",u)]:L,[q("color",g)]:se,[q("textColor",g)]:ye,[q("border",g)]:ft,[q("closeIconColor",g)]:Ie,[q("closeIconColorHover",g)]:pt,[q("closeIconColorPressed",g)]:ht,[q("closeColorHover",g)]:vt,[q("closeColorPressed",g)]:mt}}=l.value,Ce=_t(y);return{"--n-font-weight-strong":fe,"--n-avatar-size-override":`calc(${L} - 8px)`,"--n-bezier":b,"--n-border-radius":B,"--n-border":ft,"--n-close-icon-size":W,"--n-close-color-pressed":mt,"--n-close-color-hover":vt,"--n-close-border-radius":G,"--n-close-icon-color":Ie,"--n-close-icon-color-hover":pt,"--n-close-icon-color-pressed":ht,"--n-close-icon-color-disabled":Ie,"--n-close-margin-top":Ce.top,"--n-close-margin-right":Ce.right,"--n-close-margin-bottom":Ce.bottom,"--n-close-margin-left":Ce.left,"--n-close-size":O,"--n-color":m||(o.value?N:se),"--n-color-checkable":w,"--n-color-checked":Z,"--n-color-checked-hover":re,"--n-color-checked-pressed":ne,"--n-color-hover-checkable":M,"--n-color-pressed-checkable":K,"--n-font-size":J,"--n-height":L,"--n-opacity-disabled":k,"--n-padding":z,"--n-text-color":f||ye,"--n-text-color-checkable":_,"--n-text-color-checked":C,"--n-text-color-hover-checkable":P,"--n-text-color-pressed-checkable":V}}),v=n?de("tag",$(()=>{let g="";const{type:u,size:m,color:{color:f,textColor:b}={}}=e;return g+=u[0],g+=m[0],f&&(g+=`a${Oe(f)}`),b&&(g+=`b${Oe(b)}`),o.value&&(g+="c"),g}),c,e):void 0;return Object.assign(Object.assign({},h),{rtlEnabled:p,mergedClsPrefix:r,contentRef:t,mergedBordered:o,handleClick:i,handleCloseClick:d,cssVars:n?void 0:c,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender})},render(){var e,t;const{mergedClsPrefix:o,rtlEnabled:r,closable:n,color:{borderColor:s}={},round:l,onRender:i,$slots:d}=this;i==null||i();const h=Ue(d.avatar,c=>c&&a("div",{class:`${o}-tag__avatar`},c)),p=Ue(d.icon,c=>c&&a("div",{class:`${o}-tag__icon`},c));return a("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:r,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:l,[`${o}-tag--avatar`]:h,[`${o}-tag--icon`]:p,[`${o}-tag--closable`]:n}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},p||h,a("span",{class:`${o}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&n?a(Ct,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:l,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?a("div",{class:`${o}-tag__border`,style:{borderColor:s}}):null)}});function no(e){const{borderRadius:t,boxShadow2:o,baseColor:r}=e;return Object.assign(Object.assign({},wt),{borderRadius:t,boxShadow:o,color:ze(r,"rgba(0, 0, 0, .85)"),textColor:r})}const rt=Be({name:"Tooltip",common:be,peers:{Popover:St},self:no}),so=Be({name:"Ellipsis",common:be,peers:{Tooltip:rt}}),io=Object.assign(Object.assign({},zt),A.props),lo=F({name:"Tooltip",props:io,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=ie(e),o=A("Tooltip","-tooltip",void 0,rt,e,t),r=I(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(s){r.value.setShow(s)}}),{popoverRef:r,mergedTheme:o,popoverThemeOverrides:$(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return a(Se,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),ao=x("ellipsis",{overflow:"hidden"},[he("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),T("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),T("cursor-pointer",`
 cursor: pointer;
 `)]);function Ne(e){return`${e}-ellipsis--line-clamp`}function Ae(e,t){return`${e}-ellipsis--cursor-${t}`}const co=Object.assign(Object.assign({},A.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),uo=F({name:"Ellipsis",inheritAttrs:!1,props:co,slots:Object,setup(e,{slots:t,attrs:o}){const r=kt(),n=A("Ellipsis","-ellipsis",ao,so,e,r),s=I(null),l=I(null),i=I(null),d=I(!1),h=$(()=>{const{lineClamp:f}=e,{value:b}=d;return f!==void 0?{textOverflow:"","-webkit-line-clamp":b?"":f}:{textOverflow:b?"":"ellipsis","-webkit-line-clamp":""}});function p(){let f=!1;const{value:b}=d;if(b)return!0;const{value:z}=s;if(z){const{lineClamp:y}=e;if(g(z),y!==void 0)f=z.scrollHeight<=z.offsetHeight;else{const{value:B}=l;B&&(f=B.getBoundingClientRect().width<=z.getBoundingClientRect().width)}u(z,f)}return f}const c=$(()=>e.expandTrigger==="click"?()=>{var f;const{value:b}=d;b&&((f=i.value)===null||f===void 0||f.setShow(!1)),d.value=!b}:void 0);$t(()=>{var f;e.tooltip&&((f=i.value)===null||f===void 0||f.setShow(!1))});const v=()=>a("span",Object.assign({},Bt(o,{class:[`${r.value}-ellipsis`,e.lineClamp!==void 0?Ne(r.value):void 0,e.expandTrigger==="click"?Ae(r.value,"pointer"):void 0],style:h.value}),{ref:"triggerRef",onClick:c.value,onMouseenter:e.expandTrigger==="click"?p:void 0}),e.lineClamp?t:a("span",{ref:"triggerInnerRef"},t));function g(f){if(!f)return;const b=h.value,z=Ne(r.value);e.lineClamp!==void 0?m(f,z,"add"):m(f,z,"remove");for(const y in b)f.style[y]!==b[y]&&(f.style[y]=b[y])}function u(f,b){const z=Ae(r.value,"pointer");e.expandTrigger==="click"&&!b?m(f,z,"add"):m(f,z,"remove")}function m(f,b,z){z==="add"?f.classList.contains(b)||f.classList.add(b):f.classList.contains(b)&&f.classList.remove(b)}return{mergedTheme:n,triggerRef:s,triggerInnerRef:l,tooltipRef:i,handleClick:c,renderTrigger:v,getTooltipDisabled:p}},render(){var e;const{tooltip:t,renderTrigger:o,$slots:r}=this;if(t){const{mergedTheme:n}=this;return a(lo,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip}),{trigger:o,default:(e=r.tooltip)!==null&&e!==void 0?e:r.default})}else return o()}});function go(e){const{baseColor:t,textColor2:o,bodyColor:r,cardColor:n,dividerColor:s,actionColor:l,scrollbarColor:i,scrollbarColorHover:d,invertedColor:h}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:l,headerColor:n,headerColorInverted:h,footerColor:l,footerColorInverted:h,headerBorderColor:s,headerBorderColorInverted:h,footerBorderColor:s,footerBorderColorInverted:h,siderBorderColor:s,siderBorderColorInverted:h,siderColor:n,siderColorInverted:h,siderToggleButtonBorder:`1px solid ${s}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:ze(r,i),siderToggleBarColorHover:ze(r,d),__invertScrollbar:"true"}}const nt=Be({name:"Layout",common:be,peers:{Scrollbar:Pt},self:go}),fo=$e("n-layout-sider"),st={type:String,default:"static"},po=x("layout",`
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
 `),T("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ho={embedded:Boolean,position:st,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},it=$e("n-layout");function lt(e){return F({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},A.props),ho),setup(t){const o=I(null),r=I(null),{mergedClsPrefixRef:n,inlineThemeDisabled:s}=ie(t),l=A("Layout","-layout",po,nt,t,n);function i(m,f){if(t.nativeScrollbar){const{value:b}=o;b&&(f===void 0?b.scrollTo(m):b.scrollTo(m,f))}else{const{value:b}=r;b&&b.scrollTo(m,f)}}ke(it,t);let d=0,h=0;const p=m=>{var f;const b=m.target;d=b.scrollLeft,h=b.scrollTop,(f=t.onScroll)===null||f===void 0||f.call(t,m)};Ye(()=>{if(t.nativeScrollbar){const m=o.value;m&&(m.scrollTop=h,m.scrollLeft=d)}});const c={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},v={scrollTo:i},g=$(()=>{const{common:{cubicBezierEaseInOut:m},self:f}=l.value;return{"--n-bezier":m,"--n-color":t.embedded?f.colorEmbedded:f.color,"--n-text-color":f.textColor}}),u=s?de("layout",$(()=>t.embedded?"e":""),g,t):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:c,mergedTheme:l,handleNativeElScroll:p,cssVars:s?void 0:g,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender},v)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const n=r?this.hasSiderStyle:void 0,s=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return a("div",{class:s,style:this.cssVars},this.nativeScrollbar?a("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):a(qe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const vo=lt(!1),mo=lt(!0),bo=x("layout-sider",`
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
 `)]),T("collapsed",[x("layout-toggle-button",[x("base-icon",`
 transform: rotate(180deg);
 `)]),x("layout-toggle-bar",[Y("&:hover",[D("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),x("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[x("base-icon",`
 transform: rotate(0);
 `)]),x("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[Y("&:hover",[D("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),T("collapsed",[x("layout-toggle-bar",[Y("&:hover",[D("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),x("layout-toggle-button",[x("base-icon",`
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
 `),x("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),T("show-content",[x("layout-sider-scroll-container",{opacity:1})]),T("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),yo=F({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return a("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},a("div",{class:`${e}-layout-toggle-bar__top`}),a("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Co=F({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return a("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},a(Pe,{clsPrefix:e},{default:()=>a(Kt,null)}))}}),xo={position:st,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},_o=F({name:"LayoutSider",props:Object.assign(Object.assign({},A.props),xo),setup(e){const t=Tt(it),o=I(null),r=I(null),n=I(e.defaultCollapsed),s=Ge(_e(e,"collapsed"),n),l=$(()=>Q(s.value?e.collapsedWidth:e.width)),i=$(()=>e.collapseMode!=="transform"?{}:{minWidth:Q(e.width)}),d=$(()=>t?t.siderPlacement:"left");function h(k,_){if(e.nativeScrollbar){const{value:P}=o;P&&(_===void 0?P.scrollTo(k):P.scrollTo(k,_))}else{const{value:P}=r;P&&P.scrollTo(k,_)}}function p(){const{"onUpdate:collapsed":k,onUpdateCollapsed:_,onExpand:P,onCollapse:V}=e,{value:C}=s;_&&le(_,!C),k&&le(k,!C),n.value=!C,C?P&&le(P):V&&le(V)}let c=0,v=0;const g=k=>{var _;const P=k.target;c=P.scrollLeft,v=P.scrollTop,(_=e.onScroll)===null||_===void 0||_.call(e,k)};Ye(()=>{if(e.nativeScrollbar){const k=o.value;k&&(k.scrollTop=v,k.scrollLeft=c)}}),ke(fo,{collapsedRef:s,collapseModeRef:_e(e,"collapseMode")});const{mergedClsPrefixRef:u,inlineThemeDisabled:m}=ie(e),f=A("Layout","-layout-sider",bo,nt,e,u);function b(k){var _,P;k.propertyName==="max-width"&&(s.value?(_=e.onAfterLeave)===null||_===void 0||_.call(e):(P=e.onAfterEnter)===null||P===void 0||P.call(e))}const z={scrollTo:h},y=$(()=>{const{common:{cubicBezierEaseInOut:k},self:_}=f.value,{siderToggleButtonColor:P,siderToggleButtonBorder:V,siderToggleBarColor:C,siderToggleBarColorHover:w}=_,M={"--n-bezier":k,"--n-toggle-button-color":P,"--n-toggle-button-border":V,"--n-toggle-bar-color":C,"--n-toggle-bar-color-hover":w};return e.inverted?(M["--n-color"]=_.siderColorInverted,M["--n-text-color"]=_.textColorInverted,M["--n-border-color"]=_.siderBorderColorInverted,M["--n-toggle-button-icon-color"]=_.siderToggleButtonIconColorInverted,M.__invertScrollbar=_.__invertScrollbar):(M["--n-color"]=_.siderColor,M["--n-text-color"]=_.textColor,M["--n-border-color"]=_.siderBorderColor,M["--n-toggle-button-icon-color"]=_.siderToggleButtonIconColor),M}),B=m?de("layout-sider",$(()=>e.inverted?"a":"b"),y,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:u,mergedTheme:f,styleMaxWidth:l,mergedCollapsed:s,scrollContainerStyle:i,siderPlacement:d,handleNativeElScroll:g,handleTransitionend:b,handleTriggerClick:p,inlineThemeDisabled:m,cssVars:y,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender},z)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),a("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Q(this.width)}]},this.nativeScrollbar?a("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):a(qe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?a(yo,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):a(Co,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?a("div",{class:`${t}-layout-sider__border`}):null)}}),So={success:a(Je,null),error:a(Ze,null),warning:a(Ke,null),info:a(Xe,null)},wo=F({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){function o(n,s,l,i){const{gapDegree:d,viewBoxWidth:h,strokeWidth:p}=e,c=50,v=0,g=c,u=0,m=2*c,f=50+p/2,b=`M ${f},${f} m ${v},${g}
      a ${c},${c} 0 1 1 ${u},-100
      a ${c},${c} 0 1 1 0,${m}`,z=Math.PI*2*c,y={stroke:i==="rail"?l:typeof e.fillColor=="object"?"url(#gradient)":l,strokeDasharray:`${n/100*(z-d)}px ${h*8}px`,strokeDashoffset:`-${d/2}px`,transformOrigin:s?"center":void 0,transform:s?`rotate(${s}deg)`:void 0};return{pathString:b,pathStyle:y}}const r=()=>{const n=typeof e.fillColor=="object",s=n?e.fillColor.stops[0]:"",l=n?e.fillColor.stops[1]:"";return n&&a("defs",null,a("linearGradient",{id:"gradient",x1:"0%",y1:"100%",x2:"100%",y2:"0%"},a("stop",{offset:"0%","stop-color":s}),a("stop",{offset:"100%","stop-color":l})))};return()=>{const{fillColor:n,railColor:s,strokeWidth:l,offsetDegree:i,status:d,percentage:h,showIndicator:p,indicatorTextColor:c,unit:v,gapOffsetDegree:g,clsPrefix:u}=e,{pathString:m,pathStyle:f}=o(100,0,s,"rail"),{pathString:b,pathStyle:z}=o(h,i,n,"fill"),y=100+l;return a("div",{class:`${u}-progress-content`,role:"none"},a("div",{class:`${u}-progress-graph`,"aria-hidden":!0},a("div",{class:`${u}-progress-graph-circle`,style:{transform:g?`rotate(${g}deg)`:void 0}},a("svg",{viewBox:`0 0 ${y} ${y}`},r(),a("g",null,a("path",{class:`${u}-progress-graph-circle-rail`,d:m,"stroke-width":l,"stroke-linecap":"round",fill:"none",style:f})),a("g",null,a("path",{class:[`${u}-progress-graph-circle-fill`,h===0&&`${u}-progress-graph-circle-fill--empty`],d:b,"stroke-width":l,"stroke-linecap":"round",fill:"none",style:z}))))),p?a("div",null,t.default?a("div",{class:`${u}-progress-custom-content`,role:"none"},t.default()):d!=="default"?a("div",{class:`${u}-progress-icon`,"aria-hidden":!0},a(Pe,{clsPrefix:u},{default:()=>So[d]})):a("div",{class:`${u}-progress-text`,style:{color:c},role:"none"},a("span",{class:`${u}-progress-text__percentage`},h),a("span",{class:`${u}-progress-text__unit`},v))):null)}}}),zo={success:a(Je,null),error:a(Ze,null),warning:a(Ke,null),info:a(Xe,null)},ko=F({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const o=$(()=>Q(e.height)),r=$(()=>{var l,i;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(l=e.fillColor)===null||l===void 0?void 0:l.stops[0]} , ${(i=e.fillColor)===null||i===void 0?void 0:i.stops[1]})`:e.fillColor}),n=$(()=>e.railBorderRadius!==void 0?Q(e.railBorderRadius):e.height!==void 0?Q(e.height,{c:.5}):""),s=$(()=>e.fillBorderRadius!==void 0?Q(e.fillBorderRadius):e.railBorderRadius!==void 0?Q(e.railBorderRadius):e.height!==void 0?Q(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:l,railColor:i,railStyle:d,percentage:h,unit:p,indicatorTextColor:c,status:v,showIndicator:g,processing:u,clsPrefix:m}=e;return a("div",{class:`${m}-progress-content`,role:"none"},a("div",{class:`${m}-progress-graph`,"aria-hidden":!0},a("div",{class:[`${m}-progress-graph-line`,{[`${m}-progress-graph-line--indicator-${l}`]:!0}]},a("div",{class:`${m}-progress-graph-line-rail`,style:[{backgroundColor:i,height:o.value,borderRadius:n.value},d]},a("div",{class:[`${m}-progress-graph-line-fill`,u&&`${m}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:r.value,height:o.value,lineHeight:o.value,borderRadius:s.value}},l==="inside"?a("div",{class:`${m}-progress-graph-line-indicator`,style:{color:c}},t.default?t.default():`${h}${p}`):null)))),g&&l==="outside"?a("div",null,t.default?a("div",{class:`${m}-progress-custom-content`,style:{color:c},role:"none"},t.default()):v==="default"?a("div",{role:"none",class:`${m}-progress-icon ${m}-progress-icon--as-text`,style:{color:c}},h,p):a("div",{class:`${m}-progress-icon`,"aria-hidden":!0},a(Pe,{clsPrefix:m},{default:()=>zo[v]}))):null)}}});function We(e,t,o=100){return`m ${o/2} ${o/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const $o=F({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const o=$(()=>e.percentage.map((s,l)=>`${Math.PI*s/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*l)-e.circleGap*l)*2}, ${e.viewBoxWidth*8}`)),r=(n,s)=>{const l=e.fillColor[s],i=typeof l=="object"?l.stops[0]:"",d=typeof l=="object"?l.stops[1]:"";return typeof e.fillColor[s]=="object"&&a("linearGradient",{id:`gradient-${s}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},a("stop",{offset:"0%","stop-color":i}),a("stop",{offset:"100%","stop-color":d}))};return()=>{const{viewBoxWidth:n,strokeWidth:s,circleGap:l,showIndicator:i,fillColor:d,railColor:h,railStyle:p,percentage:c,clsPrefix:v}=e;return a("div",{class:`${v}-progress-content`,role:"none"},a("div",{class:`${v}-progress-graph`,"aria-hidden":!0},a("div",{class:`${v}-progress-graph-circle`},a("svg",{viewBox:`0 0 ${n} ${n}`},a("defs",null,c.map((g,u)=>r(g,u))),c.map((g,u)=>a("g",{key:u},a("path",{class:`${v}-progress-graph-circle-rail`,d:We(n/2-s/2*(1+2*u)-l*u,s,n),"stroke-width":s,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:h[u]},p[u]]}),a("path",{class:[`${v}-progress-graph-circle-fill`,g===0&&`${v}-progress-graph-circle-fill--empty`],d:We(n/2-s/2*(1+2*u)-l*u,s,n),"stroke-width":s,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:o.value[u],strokeDashoffset:0,stroke:typeof d[u]=="object"?`url(#gradient-${u})`:d[u]}})))))),i&&t.default?a("div",null,a("div",{class:`${v}-progress-text`},t.default())):null)}}}),Bo=Y([x("progress",{display:"inline-block"},[x("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),T("line",`
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
 `,[T("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),T("circle, dashboard",{width:"120px"},[x("progress-custom-content",`
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
 `)]),T("multiple-circle",`
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
 `)]),x("progress-content",{position:"relative"}),x("progress-graph",{position:"relative"},[x("progress-graph-circle",[Y("svg",{verticalAlign:"bottom"}),x("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[T("empty",{opacity:0})]),x("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),x("progress-graph-line",[T("indicator-inside",[x("progress-graph-line-rail",`
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
 `)])]),T("indicator-inside-label",`
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
 `)]),Po=Object.assign(Object.assign({},A.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),To=F({name:"Progress",props:Po,setup(e){const t=$(()=>e.indicatorPlacement||e.indicatorPosition),o=$(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:n}=ie(e),s=A("Progress","-progress",Bo,Rt,e,r),l=$(()=>{const{status:d}=e,{common:{cubicBezierEaseInOut:h},self:{fontSize:p,fontSizeCircle:c,railColor:v,railHeight:g,iconSizeCircle:u,iconSizeLine:m,textColorCircle:f,textColorLineInner:b,textColorLineOuter:z,lineBgProcessing:y,fontWeightCircle:B,[q("iconColor",d)]:k,[q("fillColor",d)]:_}}=s.value;return{"--n-bezier":h,"--n-fill-color":_,"--n-font-size":p,"--n-font-size-circle":c,"--n-font-weight-circle":B,"--n-icon-color":k,"--n-icon-size-circle":u,"--n-icon-size-line":m,"--n-line-bg-processing":y,"--n-rail-color":v,"--n-rail-height":g,"--n-text-color-circle":f,"--n-text-color-line-inner":b,"--n-text-color-line-outer":z}}),i=n?de("progress",$(()=>e.status[0]),l,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:o,cssVars:n?void 0:l,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:o,showIndicator:r,status:n,railColor:s,railStyle:l,color:i,percentage:d,viewBoxWidth:h,strokeWidth:p,mergedIndicatorPlacement:c,unit:v,borderRadius:g,fillBorderRadius:u,height:m,processing:f,circleGap:b,mergedClsPrefix:z,gapDeg:y,gapOffsetDegree:B,themeClass:k,$slots:_,onRender:P}=this;return P==null||P(),a("div",{class:[k,`${z}-progress`,`${z}-progress--${e}`,`${z}-progress--${n}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?a(wo,{clsPrefix:z,status:n,showIndicator:r,indicatorTextColor:o,railColor:s,fillColor:i,railStyle:l,offsetDegree:this.offsetDegree,percentage:d,viewBoxWidth:h,strokeWidth:p,gapDegree:y===void 0?e==="dashboard"?75:0:y,gapOffsetDegree:B,unit:v},_):e==="line"?a(ko,{clsPrefix:z,status:n,showIndicator:r,indicatorTextColor:o,railColor:s,fillColor:i,railStyle:l,percentage:d,processing:f,indicatorPlacement:c,unit:v,fillBorderRadius:u,railBorderRadius:g,height:m},_):e==="multiple-circle"?a($o,{clsPrefix:z,strokeWidth:p,railColor:s,fillColor:i,railStyle:l,viewBoxWidth:h,percentage:d,showIndicator:r,circleGap:b},_):null)}});function Ro(e){const{primaryColorHover:t,borderColor:o}=e;return{resizableTriggerColorHover:t,resizableTriggerColor:o}}const Io={common:be,self:Ro},Uo=x("split",`
 display: flex;
 width: 100%;
 height: 100%;
`,[T("horizontal",`
 flex-direction: row;
 `),T("vertical",`
 flex-direction: column;
 `),x("split-pane-1",`
 overflow: hidden;
 `),x("split-pane-2",`
 overflow: hidden;
 flex: 1;
 `),D("resize-trigger",`
 background-color: var(--n-resize-trigger-color);
 transition: background-color .3s var(--n-bezier);
 `,[T("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `),Y("&:hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)])]),Oo=Object.assign(Object.assign({},A.props),{direction:{type:String,default:"horizontal"},resizeTriggerSize:{type:Number,default:3},disabled:Boolean,defaultSize:{type:[String,Number],default:.5},"onUpdate:size":[Function,Array],onUpdateSize:[Function,Array],size:[String,Number],min:{type:[String,Number],default:0},max:{type:[String,Number],default:1},pane1Class:String,pane1Style:[Object,String],pane2Class:String,pane2Style:[Object,String],onDragStart:Function,onDragMove:Function,onDragEnd:Function,watchProps:Array}),jo=F({name:"Split",props:Oo,slots:Object,setup(e){var t;const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=ie(e),n=A("Split","-split",Uo,Io,e,o),s=$(()=>{const{common:{cubicBezierEaseInOut:y},self:{resizableTriggerColor:B,resizableTriggerColorHover:k}}=n.value;return{"--n-bezier":y,"--n-resize-trigger-color":B,"--n-resize-trigger-color-hover":k}}),l=I(null),i=I(!1),d=_e(e,"size"),h=I(e.defaultSize);!((t=e.watchProps)===null||t===void 0)&&t.includes("defaultSize")&&Ut(()=>h.value=e.defaultSize);const p=y=>{const B=e["onUpdate:size"];e.onUpdateSize&&le(e.onUpdateSize,y),B&&le(B,y),h.value=y},c=Ge(d,h),v=$(()=>{const y=c.value;if(typeof y=="string")return{flex:`0 0 ${y}`};if(typeof y=="number"){const B=y*100;return{flex:`0 0 calc(${B}% - ${e.resizeTriggerSize*B/100}px)`}}}),g=$(()=>e.direction==="horizontal"?{width:`${e.resizeTriggerSize}px`,height:"100%"}:{width:"100%",height:`${e.resizeTriggerSize}px`}),u=$(()=>{const y=e.direction==="horizontal";return{width:y?`${e.resizeTriggerSize}px`:"",height:y?"":`${e.resizeTriggerSize}px`,cursor:e.direction==="horizontal"?"col-resize":"row-resize"}});let m=0;const f=y=>{y.preventDefault(),i.value=!0,e.onDragStart&&e.onDragStart(y);const B="mousemove",k="mouseup",_=C=>{b(C),e.onDragMove&&e.onDragMove(C)},P=()=>{De(B,document,_),De(k,document,P),i.value=!1,e.onDragEnd&&e.onDragEnd(y),document.body.style.cursor=""};document.body.style.cursor=u.value.cursor,je(B,document,_),je(k,document,P);const V=l.value;if(V){const C=V.getBoundingClientRect();e.direction==="horizontal"?m=y.clientX-C.left:m=C.top-y.clientY}b(y)};function b(y){var B,k;const _=(k=(B=l.value)===null||B===void 0?void 0:B.parentElement)===null||k===void 0?void 0:k.getBoundingClientRect();if(!_)return;const{direction:P}=e,V=_.width-e.resizeTriggerSize,C=_.height-e.resizeTriggerSize,w=P==="horizontal"?V:C,M=P==="horizontal"?y.clientX-_.left-m:y.clientY-_.top+m,{min:K,max:Z}=e,re=typeof K=="string"?Le(K):K*w,ne=typeof Z=="string"?Le(Z):Z*w;let G=M;G=Math.max(G,re),G=Math.min(G,ne,w),typeof c.value=="string"?p(`${G}px`):p(G/w)}const z=r?de("split",void 0,s,e):void 0;return{themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender,cssVars:r?void 0:s,resizeTriggerElRef:l,isDragging:i,mergedClsPrefix:o,resizeTriggerWrapperStyle:u,resizeTriggerStyle:g,handleMouseDown:f,firstPaneStyle:v}},render(){var e,t,o,r,n;return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${this.mergedClsPrefix}-split`,`${this.mergedClsPrefix}-split--${this.direction}`,this.themeClass],style:this.cssVars},a("div",{class:[`${this.mergedClsPrefix}-split-pane-1`,this.pane1Class],style:[this.firstPaneStyle,this.pane1Style]},(o=(t=this.$slots)[1])===null||o===void 0?void 0:o.call(t)),!this.disabled&&a("div",{ref:"resizeTriggerElRef",class:`${this.mergedClsPrefix}-split__resize-trigger-wrapper`,style:this.resizeTriggerWrapperStyle,onMousedown:this.handleMouseDown},It(this.$slots["resize-trigger"],()=>[a("div",{style:this.resizeTriggerStyle,class:[`${this.mergedClsPrefix}-split__resize-trigger`,this.isDragging&&`${this.mergedClsPrefix}-split__resize-trigger--hover`]})])),a("div",{class:[`${this.mergedClsPrefix}-split-pane-2`,this.pane2Class],style:this.pane2Style},(n=(r=this.$slots)[2])===null||n===void 0?void 0:n.call(r)))}}),Lo=x("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[Y("&:first-child","margin-top: 0;"),Y("&:last-child","margin-bottom: 0;")]),Do=Object.assign(Object.assign({},A.props),{depth:[String,Number]}),Eo=F({name:"P",props:Do,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ie(e),r=A("Typography","-p",Lo,Qe,e,t),n=$(()=>{const{depth:l}=e,i=l||"1",{common:{cubicBezierEaseInOut:d},self:{pFontSize:h,pLineHeight:p,pMargin:c,pTextColor:v,[`pTextColor${i}Depth`]:g}}=r.value;return{"--n-bezier":d,"--n-font-size":h,"--n-line-height":p,"--n-margin":c,"--n-text-color":l===void 0?v:g}}),s=o?de("p",$(()=>`${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),a("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),Mo=x("text",`
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
 `)]),Fo=Object.assign(Object.assign({},A.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),No=F({name:"Text",props:Fo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ie(e),r=A("Typography","-text",Mo,Qe,e,t),n=$(()=>{const{depth:l,type:i}=e,d=i==="default"?l===void 0?"textColor":`textColor${l}Depth`:q("textColor",i),{common:{fontWeightStrong:h,fontFamilyMono:p,cubicBezierEaseInOut:c},self:{codeTextColor:v,codeBorderRadius:g,codeColor:u,codeBorder:m,[d]:f}}=r.value;return{"--n-bezier":c,"--n-text-color":f,"--n-font-weight-strong":h,"--n-font-famliy-mono":p,"--n-code-border-radius":g,"--n-code-text-color":v,"--n-code-color":u,"--n-code-border":m}}),s=o?de("text",$(()=>`${e.type[0]}${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:t,compitableTag:Ot(e,["as","tag"]),cssVars:o?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e,t,o;const{mergedClsPrefix:r}=this;(e=this.onRender)===null||e===void 0||e.call(this);const n=[`${r}-text`,this.themeClass,{[`${r}-text--code`]:this.code,[`${r}-text--delete`]:this.delete,[`${r}-text--strong`]:this.strong,[`${r}-text--italic`]:this.italic,[`${r}-text--underline`]:this.underline}],s=(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t);return this.code?a("code",{class:n,style:this.cssVars},this.delete?a("del",null,s):s):this.delete?a("del",{class:n,style:this.cssVars},s):a(this.compitableTag||"span",{class:n,style:this.cssVars},s)}}),Ao=["accept","multiple"],Wo={class:"text-center"},Ho=F({__name:"index",props:{accept:{},multiple:{type:Boolean}},emits:["change"],setup(e,{emit:t}){const o=t;function r(l){o("change",l)}function n(l){const i=l.target;i.files&&r(i.files)}function s(l){var d;const i=(d=l.dataTransfer)==null?void 0:d.files;i&&i.length&&r(i)}return(l,i)=>{const d=No,h=Eo;return E(),H("div",{class:"relative border border-border rounded-6 border-dashed p-10 transition-all hover:border-primary",onDragover:i[0]||(i[0]=Ee(()=>{},["prevent"])),onDrop:Ee(s,["stop","prevent"])},[i[3]||(i[3]=S("label",{class:"absolute left-0 top-0 z-1 size-full cursor-pointer",for:"image-uploader"},null,-1)),S("input",{id:"image-uploader",class:"hidden",type:"file",accept:l.accept,multiple:l.multiple,onChange:n},null,40,Ao),S("div",Wo,[U(d,{depth:"3"},{default:R(()=>i[1]||(i[1]=[S("span",{class:"i-mage-image-upload text-40"},null,-1)])),_:1})]),U(h,{class:"mt-0 text-center text-14",depth:"3"},{default:R(()=>i[2]||(i[2]=[X(" 拖拽文件到该区域或点击选择图片 ")])),_:1})],32)}}}),Vo=F({__name:"CompressUpload",emits:["change"],setup(e,{emit:t}){const o=t;function r(n){const s=Array.from(n).map(l=>({file:l,id:Xt(),fileName:jt(l.name),src:URL.createObjectURL(l)}));o("change",s)}return(n,s)=>{const l=Ho;return E(),ce(l,{multiple:"",accept:"image/png,image/jpeg,image/avif",onChange:r})}}}),qo={id:"CompressProgress",class:"mt-10 flex items-center"},Yo={key:0,class:"ml-4 flex items-center"},Go={key:0,class:"i-solar-check-circle-bold ml-4 text-success"},Xo={class:"text-14"},Ko={class:"text-success"},Zo={class:"text-error"},Jo=F({__name:"CompressProgress",props:{compressList:{},successList:{},failedList:{},compressEnd:{type:Boolean},percentage:{}},setup(e){const t=e,o=$(()=>t.compressEnd?t.successList.length===t.compressList.length?"success":t.failedList.length===t.compressList.length?"error":"warning":"default");return(r,n)=>{const s=To,l=Se;return E(),H("div",qo,[U(s,{class:"flex-1",type:"line",status:o.value,percentage:r.percentage,"indicator-placement":"inside"},null,8,["status","percentage"]),r.compressEnd?(E(),H("div",Yo,[r.successList.length===r.compressList.length?(E(),H("div",Go)):(E(),ce(l,{key:1},{trigger:R(()=>[S("div",{class:ve(["i-solar-info-circle-bold",{"text-error":r.failedList.length===r.compressList.length,"text-warning":r.successList.length!==r.compressList.length}])},null,2)]),default:R(()=>[S("div",Xo,[S("div",null,"总数："+ee(r.compressList.length),1),S("div",null,[n[0]||(n[0]=S("span",null,"成功：",-1)),S("span",Ko,ee(r.successList.length),1)]),S("div",null,[n[1]||(n[1]=S("span",null,"失败：",-1)),S("span",Zo,ee(r.failedList.length),1)])])]),_:1}))])):te("",!0)])}}}),Qo={id:"CompressOption"},er={class:"color-grey"},tr={class:"flex"},or={class:"mt-20 flex items-center font-600"},rr={class:"flex items-center"},nr={class:"flex items-center"},sr=F({__name:"CompressOption",props:{checked:{required:!0},checkedModifiers:{},size:{required:!0},sizeModifiers:{},quality:{required:!0},qualityModifiers:{}},emits:["update:checked","update:size","update:quality"],setup(e){const t=xe(e,"checked"),o=xe(e,"size"),r=xe(e,"quality"),n=[{label:"WebP",value:"webp",tip:"压缩率较高，大多数浏览器支持"},{label:"AVIF",value:"avif",tip:"压缩率极高，部分现代浏览器支持"},{label:"JPEG",value:"jpeg",tip:"兼容性最好，所有浏览器支持"}];function s(l){t.value=l}return(l,i)=>{const d=qt,h=Te,p=Yt,c=Se;return E(),H("div",Qo,[i[11]||(i[11]=S("div",{class:"font-600"}," 图片压缩格式 ",-1)),U(h,{vertical:""},{default:R(()=>[(E(),H(Re,null,et(n,v=>U(d,{key:v.value,checked:t.value===v.value,value:v.value,onChange:g=>s(v.value)},{default:R(()=>[X(ee(v.label)+" ",1),S("span",er,ee(v.tip),1)]),_:2},1032,["checked","value","onChange"])),64))]),_:1}),i[12]||(i[12]=S("div",{class:"mt-20 flex items-center font-600"}," 图片压缩质量 ",-1)),S("div",tr,[U(p,{value:r.value,"onUpdate:value":i[0]||(i[0]=v=>r.value=v),placeholder:"请输入",min:1,max:100},{suffix:R(()=>i[3]||(i[3]=[X(" % ")])),_:1},8,["value"])]),S("div",or,[i[6]||(i[6]=X(" 图片输出尺寸 ")),U(c,{placement:"right"},{trigger:R(()=>i[4]||(i[4]=[S("span",{class:"i-solar-info-circle-bold"},null,-1)])),default:R(()=>[i[5]||(i[5]=X(" 如果只输入宽度或者高度，另外一项会自动计算 "))]),_:1})]),U(h,{vertical:""},{default:R(()=>[S("div",rr,[i[8]||(i[8]=S("div",{class:"text-16"}," 图片宽度： ",-1)),U(p,{value:o.value.width,"onUpdate:value":i[1]||(i[1]=v=>o.value.width=v),placeholder:"请输入",min:1},{suffix:R(()=>i[7]||(i[7]=[X(" px ")])),_:1},8,["value"])]),S("div",nr,[i[10]||(i[10]=S("div",{class:"text-16"}," 图片高度： ",-1)),U(p,{value:o.value.height,"onUpdate:value":i[2]||(i[2]=v=>o.value.height=v),placeholder:"请输入",min:1},{suffix:R(()=>i[9]||(i[9]=[X(" px ")])),_:1},8,["value"])])]),_:1})])}}}),ir={id:"CompressPreview",class:"mb-10"},lr={key:0,class:"flex justify-between text-14"},ar={class:"h-250 overflow-hidden rounded-6"},cr=["src"],dr=["src"],ur={class:"size-full"},gr=["src"],fr=F({__name:"CompressPreview",props:{src:{},compressedSrc:{}},setup(e){const t=I(.5),o=I(),{width:r}=Lt(o);return(n,s)=>{const l=jo;return E(),H("div",ir,[n.src&&n.compressedSrc?(E(),H("div",lr,s[1]||(s[1]=[S("span",null,"压缩前",-1),S("span",null,"压缩后",-1)]))):te("",!0),S("div",ar,[n.src&&!n.compressedSrc?(E(),H("img",{key:0,class:"size-full object-cover",src:n.src},null,8,cr)):te("",!0),n.src&&n.compressedSrc?(E(),ce(l,{key:1,size:t.value,"onUpdate:size":s[0]||(s[0]=i=>t.value=i),"resize-trigger-size":2,class:"relative h-full"},{1:R(()=>[S("div",{ref_key:"leftBox",ref:o,class:"size-full"},[S("img",{class:"absolute left-0 top-0 z-1 size-full object-cover",src:n.src,style:Dt({clip:`rect(auto, ${me(r)}px, auto, auto)`})},null,12,dr)],512)]),2:R(()=>[S("div",ur,[S("img",{class:"absolute left-0 top-0 size-full object-cover",src:n.compressedSrc},null,8,gr)])]),"resize-trigger":R(()=>s[2]||(s[2]=[S("div",{class:"relative z-1 h-full bg-primary"},[S("div",{class:"size-40 flex items-center border-2 border-primary rounded-1/2 border-solid absolute-center"},[S("span",{class:"i-ri-arrow-left-s-fill text-22 color-primary"}),S("span",{class:"i-ri-arrow-right-s-fill text-22 color-primary"})])],-1)])),_:1},8,["size"])):te("",!0)])])}}}),pr={class:"image-list"},hr=["onClick"],vr={class:"h-150 w-full"},mr=["src"],br={class:"flex items-center justify-between px-8 py-4"},yr={class:"text-12"},Cr=["onClick"],xr=F({__name:"CompressList",props:Et({list:{}},{active:{required:!0},activeModifiers:{}}),emits:["update:active"],setup(e){const t=xe(e,"active");function o(r){t.value=r}return(r,n)=>{const s=tt,l=uo,i=ro,d=Se,h=Te;return E(),H("div",pr,[(E(!0),H(Re,null,et(r.list,p=>(E(),H("div",{key:p.id,class:ve(["cursor-pointer overflow-hidden border border-border rounded-6 border-solid transition-all not-first:mt-10 hover:border-primary",{"border-primary":t.value===p.id,"border-error!":p.status==="failed"}]),onClick:c=>o(p.id)},[U(s,{show:p.status==="processing"},{default:R(()=>[S("div",vr,[S("img",{class:"size-full object-cover",src:p.src,"no-view":""},null,8,mr)])]),_:2},1032,["show"]),S("div",br,[U(l,{class:ve(["flex-1 text-12",{"text-error":p.status==="failed"}])},{default:R(()=>[X(ee(p.file.name),1)]),_:2},1032,["class"]),U(h,{size:4},{default:R(()=>[U(i,{class:ve(["rounded-4",{"line-through":p.compressedFile}]),type:p.status==="failed"?"error":"default",size:"small"},{default:R(()=>[X(ee(me(Me)(p.file.size)),1)]),_:2},1032,["class","type"]),p.compressedFile?(E(),ce(i,{key:0,class:"rounded-4",type:"success",size:"small"},{default:R(()=>[X(ee(me(Me)(p.compressedFile.size)),1)]),_:2},1024)):te("",!0),p.failedInfo?(E(),ce(d,{key:1,class:"max-h-150 max-w-200",trigger:"hover",scrollable:""},{trigger:R(()=>n[0]||(n[0]=[S("div",{class:"i-solar-info-circle-bold text-error"},null,-1)])),default:R(()=>[S("div",yr,ee(p.failedInfo),1)]),_:2},1024)):te("",!0)]),_:2},1024)]),p.compressedFile?(E(),H("div",{key:0,class:"cursor-pointer border-t border-border border-t-solid bg-primary-1 text-center text-12 leading-30 transition-all dark:bg-primary-2 dark:hover:bg-primary-3 hover:bg-primary-2",onClick:c=>me(ot)(p.compressedFile,p.compressedFile.name)}," 点击下载 ",8,Cr)):te("",!0)],10,hr))),128))])}}});"stream"in Blob.prototype||Object.defineProperty(Blob.prototype,"stream",{value(){return new Response(this).body}}),"setBigUint64"in DataView.prototype||Object.defineProperty(DataView.prototype,"setBigUint64",{value(e,t,o){const r=Number(0xffffffffn&t),n=Number(t>>32n);this.setUint32(e+(o?0:4),r,o),this.setUint32(e+(o?4:0),n,o)}});var ge=e=>new DataView(new ArrayBuffer(e)),oe=e=>new Uint8Array(e.buffer||e),ue=e=>new TextEncoder().encode(String(e)),ae=e=>Math.min(4294967295,Number(e)),He=e=>Math.min(65535,Number(e));function _r(e,t,o){t===void 0||t instanceof Date||(t=new Date(t));const r=e!==void 0;if(o||(o=r?436:509),e instanceof File)return{isFile:r,t:t||new Date(e.lastModified),bytes:e.stream(),mode:o};if(e instanceof Response)return{isFile:r,t:t||new Date(e.headers.get("Last-Modified")||Date.now()),bytes:e.body,mode:o};if(t===void 0)t=new Date;else if(isNaN(t))throw new Error("Invalid modification date.");if(!r)return{isFile:r,t,mode:o};if(typeof e=="string")return{isFile:r,t,bytes:ue(e),mode:o};if(e instanceof Blob)return{isFile:r,t,bytes:e.stream(),mode:o};if(e instanceof Uint8Array||e instanceof ReadableStream)return{isFile:r,t,bytes:e,mode:o};if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return{isFile:r,t,bytes:oe(e),mode:o};if(Symbol.asyncIterator in e)return{isFile:r,t,bytes:at(e[Symbol.asyncIterator]()),mode:o};throw new TypeError("Unsupported input format.")}function at(e,t=e){return new ReadableStream({async pull(o){let r=0;for(;o.desiredSize>r;){const n=await e.next();if(!n.value){o.close();break}{const s=Sr(n.value);o.enqueue(s),r+=s.byteLength}}},cancel(o){var r;(r=t.throw)==null||r.call(t,o)}})}function Sr(e){return typeof e=="string"?ue(e):e instanceof Uint8Array?e:oe(e)}function ct(e,t,o){let[r,n]=function(s){return s?s instanceof Uint8Array?[s,1]:ArrayBuffer.isView(s)||s instanceof ArrayBuffer?[oe(s),1]:[ue(s),0]:[void 0,0]}(t);if(e instanceof File)return{i:we(r||ue(e.name)),o:BigInt(e.size),u:n};if(e instanceof Response){const s=e.headers.get("content-disposition"),l=s&&s.match(/;\s*filename\*?\s*=\s*(?:UTF-\d+''|)["']?([^;"'\r\n]*)["']?(?:;|$)/i),i=l&&l[1]||e.url&&new URL(e.url).pathname.split("/").findLast(Boolean),d=i&&decodeURIComponent(i),h=o||+e.headers.get("content-length");return{i:we(r||ue(d)),o:BigInt(h),u:n}}return r=we(r,e!==void 0||o!==void 0),typeof e=="string"?{i:r,o:BigInt(ue(e).length),u:n}:e instanceof Blob?{i:r,o:BigInt(e.size),u:n}:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?{i:r,o:BigInt(e.byteLength),u:n}:{i:r,o:wr(e,o),u:n}}function wr(e,t){return t>-1?BigInt(t):e?void 0:0n}function we(e,t=1){if(!e||e.every(o=>o===47))throw new Error("The file must have a name.");if(t)for(;e[e.length-1]===47;)e=e.subarray(0,-1);else e[e.length-1]!==47&&(e=new Uint8Array([...e,47]));return e}var dt=new Uint32Array(256);for(let e=0;e<256;++e){let t=e;for(let o=0;o<8;++o)t=t>>>1^(1&t&&3988292384);dt[e]=t}function Ve(e,t=0){t=~t;for(var o=0,r=e.length;o<r;o++)t=t>>>8^dt[255&t^e[o]];return~t>>>0}function ut(e,t,o=0){const r=e.getSeconds()>>1|e.getMinutes()<<5|e.getHours()<<11,n=e.getDate()|e.getMonth()+1<<5|e.getFullYear()-1980<<9;t.setUint16(o,r,1),t.setUint16(o+2,n,1)}function zr({i:e,u:t},o){return 8*(!t||(o??function(r){try{kr.decode(r)}catch{return 0}return 1}(e)))}var kr=new TextDecoder("utf8",{fatal:1});function $r(e,t=0){const o=ge(30);return o.setUint32(0,1347093252),o.setUint32(4,754976768|t),ut(e.t,o,10),o.setUint16(26,e.i.length,1),oe(o)}async function*Br(e){let{bytes:t}=e;if("then"in t&&(t=await t),t instanceof Uint8Array)yield t,e.l=Ve(t,0),e.o=BigInt(t.length);else{e.o=0n;const o=t.getReader();for(;;){const{value:r,done:n}=await o.read();if(n)break;e.l=Ve(r,e.l),e.o+=BigInt(r.length),yield r}}}function Pr(e,t){const o=ge(16+(t?8:0));return o.setUint32(0,1347094280),o.setUint32(4,e.isFile?e.l:0,1),t?(o.setBigUint64(8,e.o,1),o.setBigUint64(16,e.o,1)):(o.setUint32(8,ae(e.o),1),o.setUint32(12,ae(e.o),1)),oe(o)}function Tr(e,t,o=0,r=0){const n=ge(46);return n.setUint32(0,1347092738),n.setUint32(4,755182848),n.setUint16(8,2048|o),ut(e.t,n,12),n.setUint32(16,e.isFile?e.l:0,1),n.setUint32(20,ae(e.o),1),n.setUint32(24,ae(e.o),1),n.setUint16(28,e.i.length,1),n.setUint16(30,r,1),n.setUint16(40,e.mode|(e.isFile?32768:16384),1),n.setUint32(42,ae(t),1),oe(n)}function Rr(e,t,o){const r=ge(o);return r.setUint16(0,1,1),r.setUint16(2,o-4,1),16&o&&(r.setBigUint64(4,e.o,1),r.setBigUint64(12,e.o,1)),r.setBigUint64(o-8,t,1),oe(r)}function gt(e){return e instanceof File||e instanceof Response?[[e],[e]]:[[e.input,e.name,e.size],[e.input,e.lastModified,e.mode]]}var Ir=e=>function(t){let o=BigInt(22),r=0n,n=0;for(const s of t){if(!s.i)throw new Error("Every file must have a non-empty name.");if(s.o===void 0)throw new Error(`Missing size for file "${new TextDecoder().decode(s.i)}".`);const l=s.o>=0xffffffffn,i=r>=0xffffffffn;r+=BigInt(46+s.i.length+(l&&8))+s.o,o+=BigInt(s.i.length+46+(12*i|28*l)),n||(n=l)}return(n||r>=0xffffffffn)&&(o+=BigInt(76)),o+r}(function*(t){for(const o of t)yield ct(...gt(o)[0])}(e));function Ur(e,t={}){const o={"Content-Type":"application/zip","Content-Disposition":"attachment"};return(typeof t.length=="bigint"||Number.isInteger(t.length))&&t.length>0&&(o["Content-Length"]=String(t.length)),t.metadata&&(o["Content-Length"]=String(Ir(t.metadata))),new Response(Or(e,t),{headers:o})}function Or(e,t={}){const o=function(r){var s;const n=r[Symbol.iterator in r?Symbol.iterator:Symbol.asyncIterator]();return{async next(){const l=await n.next();if(l.done)return l;const[i,d]=gt(l.value);return{done:0,value:Object.assign(_r(...d),ct(...i))}},throw:(s=n.throw)==null?void 0:s.bind(n),[Symbol.asyncIterator](){return this}}}(e);return at(async function*(r,n){const s=[];let l=0n,i=0n,d=0;for await(const c of r){const v=zr(c,n.buffersAreUTF8);yield $r(c,v),yield new Uint8Array(c.i),c.isFile&&(yield*Br(c));const g=c.o>=0xffffffffn,u=12*(l>=0xffffffffn)|28*g;yield Pr(c,g),s.push(Tr(c,l,v,u)),s.push(c.i),u&&s.push(Rr(c,l,u)),g&&(l+=8n),i++,l+=BigInt(46+c.i.length)+c.o,d||(d=g)}let h=0n;for(const c of s)yield c,h+=BigInt(c.length);if(d||l>=0xffffffffn){const c=ge(76);c.setUint32(0,1347094022),c.setBigUint64(4,BigInt(44),1),c.setUint32(12,755182848),c.setBigUint64(24,i,1),c.setBigUint64(32,i,1),c.setBigUint64(40,h,1),c.setBigUint64(48,l,1),c.setUint32(56,1347094023),c.setBigUint64(64,l+h,1),c.setUint32(72,1,1),yield oe(c)}const p=ge(22);p.setUint32(0,1347093766),p.setUint16(8,He(i),1),p.setUint16(10,He(i),1),p.setUint32(12,ae(h),1),p.setUint32(16,ae(l),1),yield oe(p)}(o,t),o)}const jr={key:0,class:"border border-border rounded-6 border-solid"},Lr={class:"border-r border-border border-r-solid p-10"},Dr={class:"py-10 pl-20 pr-10"},Er={class:"mt-10 flex justify-end"},Mr=F({__name:"index",setup(e){const t=Mt(),o=I([]),r=I([]),n=I(""),s=I(0),l=I(!0),i=I(!1),d=I(!1),h=I(!1),p=I(!1),c=I("webp"),v=I(75),g=I({width:void 0,height:void 0}),u=$(()=>r.value.find(C=>C.id===n.value)),m=$(()=>r.value.filter(C=>C.status==="success"&&C.compressedFile)),f=$(()=>r.value.filter(C=>C.status==="failed")),b=$(()=>{var C;return(C=u.value)==null?void 0:C.src}),z=$(()=>{var C;return(C=u.value)==null?void 0:C.compressedSrc});let y;try{B()}catch(C){console.log("loadModules error",C),l.value=!1,t.error({title:"加载异常",content:"依赖资源加载异常，请刷新页面后重试",positiveText:"重试",onPositiveClick:()=>{window.location.reload()}})}async function B(){const[C,w,M,K,{default:Z}]=await Promise.all([pe(()=>import("https://unpkg.com/@jsquash/avif@1.3.0?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/jpeg@1.5.0?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/png@3.0.1?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/webp@1.4.0?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/resize@2.1.0?module"),[])]);l.value=!1,h.value=!0,y=async()=>{i.value=!0,d.value=!1,s.value=0,r.value=Nt(o.value);for(let N=0;N<r.value.length;N++){const O=r.value[N];try{const W=O.file.type.replace("image/","");O.status="processing";const J=await G(W,O.file),L=`image/${c.value}`,se=new Blob([J],{type:L});O.compressedFile=new File([se],`${O.fileName}.${c.value}`,{type:L}),O.compressedSrc=URL.createObjectURL(O.compressedFile),O.status="success"}catch(W){O.status="failed",O.failedInfo=Fe(W)}s.value=Math.round((N+1)/r.value.length*100)}i.value=!1,d.value=!0};async function re(N,O){const W=await O.arrayBuffer();switch(N){case"avif":return await C.decode(W);case"jpeg":return await w.decode(W);case"png":return await M.decode(W);case"webp":return await K.decode(W);default:throw new Error(`Unknown source type: ${N}`)}}async function ne(N){const O={quality:v.value};switch(c.value){case"avif":return await C.encode(N,O);case"jpeg":return await w.encode(N,O);case"png":return await M.encode(N);case"webp":return await K.encode(N,O);default:throw new Error(`Unknown output type: ${c.value}`)}}async function G(N,O){const W=await re(N,O);if(g.value.width||g.value.height){const J=await At(O),L=fe(J,g.value),se=await Z(W,L);return ne(se)}return ne(W)}function fe(N,O){const{width:W,height:J}=N,{width:L,height:se}=O,ye=W/J;return{width:L??Math.round(se*ye),height:se??Math.round(L/ye)}}}function k(C){o.value=C,r.value=C,!n.value&&C.length&&(n.value=C[0].id)}function _(){V(o.value),V(r.value),n.value="",g.value={width:void 0,height:void 0},s.value=0,o.value=[],r.value=[],i.value=!1,d.value=!1}async function P(){try{const C=m.value.map(M=>M.compressedFile),w=await Ur(C).blob();ot(w,`liubing.me_compressed_${Date.now()}.zip`)}catch(C){window.$message.error(Fe(C))}}function V(C){C.forEach(w=>{w.src&&URL.revokeObjectURL(w.src),w.compressedSrc&&URL.revokeObjectURL(w.compressedSrc)})}return(C,w)=>{const M=xr,K=_o,Z=fr,re=sr,ne=Jo,G=Ft,fe=Te,N=mo,O=vo,W=Vo,J=tt;return E(),H("div",{class:ve(["compress-image relative",{"opacity-50":!h.value&&!l.value,"after:content-empty after:absolute after:size-full after:top-0 after:z-1 after:cursor-not-allowed":!h.value&&!l.value}])},[U(J,{show:l.value},{description:R(()=>w[7]||(w[7]=[S("div",{"text-center":"","text-14":""},[S("div",null,"依赖资源加载中..."),S("div",null,"首次加载较慢，请耐心等待")],-1)])),default:R(()=>[r.value.length?(E(),H("div",jr,[U(O,{"has-sider":"",class:"h-[calc(100vh-150px)]"},{default:R(()=>[U(K,{"collapse-mode":"transform","collapsed-width":0,width:300,"show-trigger":"arrow-circle",bordered:""},{default:R(()=>[S("div",Lr,[U(M,{active:n.value,"onUpdate:active":w[0]||(w[0]=L=>n.value=L),list:r.value},null,8,["active","list"])])]),_:1}),U(N,null,{default:R(()=>[S("div",Dr,[b.value?(E(),ce(Z,{key:0,src:b.value,"compressed-src":z.value},null,8,["src","compressed-src"])):te("",!0),U(re,{checked:c.value,"onUpdate:checked":w[1]||(w[1]=L=>c.value=L),quality:v.value,"onUpdate:quality":w[2]||(w[2]=L=>v.value=L),size:g.value,"onUpdate:size":w[3]||(w[3]=L=>g.value=L)},null,8,["checked","quality","size"]),i.value||d.value?(E(),ce(ne,{key:1,"compress-list":r.value,"success-list":m.value,"failed-list":f.value,"compress-end":d.value,percentage:s.value},null,8,["compress-list","success-list","failed-list","compress-end","percentage"])):te("",!0),S("div",Er,[U(fe,null,{default:R(()=>[U(G,{type:"tertiary",disabled:i.value,onClick:_},{default:R(()=>w[8]||(w[8]=[X(" 重置 ")])),_:1},8,["disabled"]),U(G,{type:"primary",secondary:"",disabled:p.value||!m.value.length||i.value,loading:p.value,onClick:P},{default:R(()=>w[9]||(w[9]=[X(" 批量下载 ")])),_:1},8,["disabled","loading"]),U(G,{type:"primary",disabled:i.value,loading:i.value,onClick:me(y)},{default:R(()=>w[10]||(w[10]=[X(" 开始压缩 ")])),_:1},8,["disabled","loading","onClick"])]),_:1})])])]),_:1})]),_:1})])):(E(),H(Re,{key:1},[U(W,{onChange:k}),U(re,{checked:c.value,"onUpdate:checked":w[4]||(w[4]=L=>c.value=L),quality:v.value,"onUpdate:quality":w[5]||(w[5]=L=>v.value=L),size:g.value,"onUpdate:size":w[6]||(w[6]=L=>g.value=L),class:"mt-10"},null,8,["checked","quality","size"])],64))]),_:1},8,["show"])],2)}}}),Fr={};function Nr(e,t){const o=Mr,r=Vt("ClientOnly");return E(),H("div",null,[t[0]||(t[0]=Ht('<h1 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩"><span>图片压缩</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>工具依赖加载<a href="https://unpkg.com/" target="_blank" rel="noopener noreferrer">unpkg</a>的资源，国内用户可能需要开启魔法上网。</p></div><div class="hint-container tip"><p class="hint-container-title">温馨提示</p><p>纯本地图片压缩工具，不会上传您的任何图片信息，请放心使用。</p></div>',3)),U(r,null,{default:R(()=>[U(o)]),_:1})])}const Vr=Wt(Fr,[["render",Nr]]),qr=JSON.parse('{"path":"/tools/compress-image.html","title":"图片压缩","lang":"zh-CN","frontmatter":{"toc":false,"pageInfo":false,"layout":"ToolLayout","description":"一个纯本地图片压缩工具，支持输出WebP、AVIF、JPEG格图片","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图片压缩\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-25T06:46:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"],["meta",{"property":"og:url","content":"https://liubing.me/tools/compress-image.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"图片压缩"}],["meta",{"property":"og:description","content":"一个纯本地图片压缩工具，支持输出WebP、AVIF、JPEG格图片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-25T06:46:07.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-25T06:46:07.000Z"}],["script",{"type":"importmap"},"{\\n  \\"imports\\": {\\n    \\"wasm-feature-detect\\": \\"https://unpkg.com/wasm-feature-detect@1.8.0?module\\"\\n  }\\n}\\n"]]},"git":{"createdTime":1732366923000,"updatedTime":1742885167000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":3,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":0.36,"words":107},"filePathRelative":"tools/compress-image.md","excerpt":"\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>工具依赖加载<a href=\\"https://unpkg.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">unpkg</a>的资源，国内用户可能需要开启魔法上网。</p>\\n</div>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">温馨提示</p>\\n<p>纯本地图片压缩工具，不会上传您的任何图片信息，请放心使用。</p>\\n</div>"}');export{Vr as comp,qr as data};
