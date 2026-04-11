import{t as Ct,e as F,h as c,f as ye,g as xt,i as j,j as C,k as R,l as L,m as ve,n as Y,p as Ue,N as St,u as ie,q as A,s as _t,v as de,w as $,x as I,y as le,z as q,A as wt,B as Oe,C as ke,D as Se,E as $e,F as Be,G as zt,H as kt,I as ze,J as _e,K as $t,L as Bt,M as Pt,O as Rt,P as Tt,S as qe,Q as Ye,R as Pe,T as Q,U as It,V as Ge,W as Xe,X as Ke,Y as Je,Z as Ze,$ as Ut,a0 as Ot,a1 as jt,a2 as Lt,a3 as je,a4 as Le,a5 as De,a6 as Qe,a7 as Dt,o as D,c as H,a8 as Ee,b as _,d as U,a9 as T,aa as X,ab as ce,ac as Et,ad as ee,ae as me,af as te,ag as xe,ah as Re,ai as Te,aj as et,ak as Mt,al as Ft,am as be,an as tt,ao as Me,ap as ot,aq as Nt,ar as At,as as he,at as Wt,au as Ht,av as Fe,aw as Vt,_ as qt,a as Yt,r as Gt}from"./app-4qcFlX1-.js";import{_ as Xt,a as Kt}from"./InputNumber-e0C2RIxq.js";import"./Input-BGmQrPWh.js";var Jt=0;function Zt(e){var t=++Jt;return Ct(e)+t}const Qt=F({name:"ChevronRight",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function eo(e){const{textColor2:t,primaryColorHover:o,primaryColorPressed:r,primaryColor:i,infoColor:n,successColor:l,warningColor:s,errorColor:g,baseColor:h,borderColor:f,opacityDisabled:d,tagColor:p,closeIconColor:x,closeIconColorHover:v,closeIconColorPressed:a,borderRadiusSmall:u,fontSizeMini:m,fontSizeTiny:b,fontSizeSmall:y,fontSizeMedium:k,heightMini:B,heightTiny:S,heightSmall:P,heightMedium:V,closeColorHover:z,closeColorPressed:w,buttonColor2Hover:E,buttonColor2Pressed:K,fontWeightStrong:J}=e;return Object.assign(Object.assign({},xt),{closeBorderRadius:u,heightTiny:B,heightSmall:S,heightMedium:P,heightLarge:V,borderRadius:u,opacityDisabled:d,fontSizeTiny:m,fontSizeSmall:b,fontSizeMedium:y,fontSizeLarge:k,fontWeightStrong:J,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:h,colorCheckable:"#0000",colorHoverCheckable:E,colorPressedCheckable:K,colorChecked:i,colorCheckedHover:o,colorCheckedPressed:r,border:`1px solid ${f}`,textColor:t,color:p,colorBordered:"rgb(250, 250, 252)",closeIconColor:x,closeIconColorHover:v,closeIconColorPressed:a,closeColorHover:z,closeColorPressed:w,borderPrimary:`1px solid ${j(i,{alpha:.3})}`,textColorPrimary:i,colorPrimary:j(i,{alpha:.12}),colorBorderedPrimary:j(i,{alpha:.1}),closeIconColorPrimary:i,closeIconColorHoverPrimary:i,closeIconColorPressedPrimary:i,closeColorHoverPrimary:j(i,{alpha:.12}),closeColorPressedPrimary:j(i,{alpha:.18}),borderInfo:`1px solid ${j(n,{alpha:.3})}`,textColorInfo:n,colorInfo:j(n,{alpha:.12}),colorBorderedInfo:j(n,{alpha:.1}),closeIconColorInfo:n,closeIconColorHoverInfo:n,closeIconColorPressedInfo:n,closeColorHoverInfo:j(n,{alpha:.12}),closeColorPressedInfo:j(n,{alpha:.18}),borderSuccess:`1px solid ${j(l,{alpha:.3})}`,textColorSuccess:l,colorSuccess:j(l,{alpha:.12}),colorBorderedSuccess:j(l,{alpha:.1}),closeIconColorSuccess:l,closeIconColorHoverSuccess:l,closeIconColorPressedSuccess:l,closeColorHoverSuccess:j(l,{alpha:.12}),closeColorPressedSuccess:j(l,{alpha:.18}),borderWarning:`1px solid ${j(s,{alpha:.35})}`,textColorWarning:s,colorWarning:j(s,{alpha:.15}),colorBorderedWarning:j(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:j(s,{alpha:.12}),closeColorPressedWarning:j(s,{alpha:.18}),borderError:`1px solid ${j(g,{alpha:.23})}`,textColorError:g,colorError:j(g,{alpha:.1}),colorBorderedError:j(g,{alpha:.08}),closeIconColorError:g,closeIconColorHoverError:g,closeIconColorPressedError:g,closeColorHoverError:j(g,{alpha:.12}),closeColorPressedError:j(g,{alpha:.18})})}const to={common:ye,self:eo},oo={color:Object,type:{type:String,default:"default"},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},ro=C("tag",`
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
`,[R("strong",`
 font-weight: var(--n-font-weight-strong);
 `),L("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),L("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),L("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),L("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),R("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[L("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),L("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),R("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),R("icon, avatar",[R("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),R("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),R("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ve("disabled",[Y("&:hover","background-color: var(--n-color-hover-checkable);",[ve("checked","color: var(--n-text-color-hover-checkable);")]),Y("&:active","background-color: var(--n-color-pressed-checkable);",[ve("checked","color: var(--n-text-color-pressed-checkable);")])]),R("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ve("disabled",[Y("&:hover","background-color: var(--n-color-checked-hover);"),Y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),no=Object.assign(Object.assign(Object.assign({},A.props),oo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),so=$e("n-tag"),io=F({name:"Tag",props:no,slots:Object,setup(e){const t=I(null),{mergedBorderedRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:n,mergedComponentPropsRef:l}=ie(e),s=$(()=>{var a,u;return e.size||((u=(a=l?.value)===null||a===void 0?void 0:a.Tag)===null||u===void 0?void 0:u.size)||"medium"}),g=A("Tag","-tag",ro,to,e,r);ke(so,{roundRef:Se(e,"round")});function h(){if(!e.disabled&&e.checkable){const{checked:a,onCheckedChange:u,onUpdateChecked:m,"onUpdate:checked":b}=e;m&&m(!a),b&&b(!a),u&&u(!a)}}function f(a){if(e.triggerClickOnClose||a.stopPropagation(),!e.disabled){const{onClose:u}=e;u&&le(u,a)}}const d={setTextContent(a){const{value:u}=t;u&&(u.textContent=a)}},p=_t("Tag",n,r),x=$(()=>{const{type:a,color:{color:u,textColor:m}={}}=e,b=s.value,{common:{cubicBezierEaseInOut:y},self:{padding:k,closeMargin:B,borderRadius:S,opacityDisabled:P,textColorCheckable:V,textColorHoverCheckable:z,textColorPressedCheckable:w,textColorChecked:E,colorCheckable:K,colorHoverCheckable:J,colorPressedCheckable:re,colorChecked:ne,colorCheckedHover:G,colorCheckedPressed:fe,closeBorderRadius:N,fontWeightStrong:O,[q("colorBordered",a)]:W,[q("closeSize",b)]:Z,[q("closeIconSize",b)]:M,[q("fontSize",b)]:se,[q("height",b)]:pe,[q("color",a)]:ft,[q("textColor",a)]:pt,[q("border",a)]:ht,[q("closeIconColor",a)]:Ie,[q("closeIconColorHover",a)]:vt,[q("closeIconColorPressed",a)]:mt,[q("closeColorHover",a)]:bt,[q("closeColorPressed",a)]:yt}}=g.value,Ce=wt(B);return{"--n-font-weight-strong":O,"--n-avatar-size-override":`calc(${pe} - 8px)`,"--n-bezier":y,"--n-border-radius":S,"--n-border":ht,"--n-close-icon-size":M,"--n-close-color-pressed":yt,"--n-close-color-hover":bt,"--n-close-border-radius":N,"--n-close-icon-color":Ie,"--n-close-icon-color-hover":vt,"--n-close-icon-color-pressed":mt,"--n-close-icon-color-disabled":Ie,"--n-close-margin-top":Ce.top,"--n-close-margin-right":Ce.right,"--n-close-margin-bottom":Ce.bottom,"--n-close-margin-left":Ce.left,"--n-close-size":Z,"--n-color":u||(o.value?W:ft),"--n-color-checkable":K,"--n-color-checked":ne,"--n-color-checked-hover":G,"--n-color-checked-pressed":fe,"--n-color-hover-checkable":J,"--n-color-pressed-checkable":re,"--n-font-size":se,"--n-height":pe,"--n-opacity-disabled":P,"--n-padding":k,"--n-text-color":m||pt,"--n-text-color-checkable":V,"--n-text-color-checked":E,"--n-text-color-hover-checkable":z,"--n-text-color-pressed-checkable":w}}),v=i?de("tag",$(()=>{let a="";const{type:u,color:{color:m,textColor:b}={}}=e;return a+=u[0],a+=s.value[0],m&&(a+=`a${Oe(m)}`),b&&(a+=`b${Oe(b)}`),o.value&&(a+="c"),a}),x,e):void 0;return Object.assign(Object.assign({},d),{rtlEnabled:p,mergedClsPrefix:r,contentRef:t,mergedBordered:o,handleClick:h,handleCloseClick:f,cssVars:i?void 0:x,themeClass:v?.themeClass,onRender:v?.onRender})},render(){var e,t;const{mergedClsPrefix:o,rtlEnabled:r,closable:i,color:{borderColor:n}={},round:l,onRender:s,$slots:g}=this;s?.();const h=Ue(g.avatar,d=>d&&c("div",{class:`${o}-tag__avatar`},d)),f=Ue(g.icon,d=>d&&c("div",{class:`${o}-tag__icon`},d));return c("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:r,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:l,[`${o}-tag--avatar`]:h,[`${o}-tag--icon`]:f,[`${o}-tag--closable`]:i}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},f||h,c("span",{class:`${o}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&i?c(St,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:l,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?c("div",{class:`${o}-tag__border`,style:{borderColor:n}}):null)}});function lo(e){const{borderRadius:t,boxShadow2:o,baseColor:r}=e;return Object.assign(Object.assign({},kt),{borderRadius:t,boxShadow:o,color:ze(r,"rgba(0, 0, 0, .85)"),textColor:r})}const rt=Be({name:"Tooltip",common:ye,peers:{Popover:zt},self:lo}),ao=Be({name:"Ellipsis",common:ye,peers:{Tooltip:rt}}),co=Object.assign(Object.assign({},$t),A.props),uo=F({name:"Tooltip",props:co,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=ie(e),o=A("Tooltip","-tooltip",void 0,rt,e,t),r=I(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(n){r.value.setShow(n)}}),{popoverRef:r,mergedTheme:o,popoverThemeOverrides:$(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return c(_e,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),go=C("ellipsis",{overflow:"hidden"},[ve("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),R("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),R("cursor-pointer",`
 cursor: pointer;
 `)]);function Ne(e){return`${e}-ellipsis--line-clamp`}function Ae(e,t){return`${e}-ellipsis--cursor-${t}`}const fo=Object.assign(Object.assign({},A.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),po=F({name:"Ellipsis",inheritAttrs:!1,props:fo,slots:Object,setup(e,{slots:t,attrs:o}){const r=Bt(),i=A("Ellipsis","-ellipsis",go,ao,e,r),n=I(null),l=I(null),s=I(null),g=I(!1),h=$(()=>{const{lineClamp:u}=e,{value:m}=g;return u!==void 0?{textOverflow:"","-webkit-line-clamp":m?"":u}:{textOverflow:m?"":"ellipsis","-webkit-line-clamp":""}});function f(){let u=!1;const{value:m}=g;if(m)return!0;const{value:b}=n;if(b){const{lineClamp:y}=e;if(x(b),y!==void 0)u=b.scrollHeight<=b.offsetHeight;else{const{value:k}=l;k&&(u=k.getBoundingClientRect().width<=b.getBoundingClientRect().width)}v(b,u)}return u}const d=$(()=>e.expandTrigger==="click"?()=>{var u;const{value:m}=g;m&&((u=s.value)===null||u===void 0||u.setShow(!1)),g.value=!m}:void 0);Pt(()=>{var u;e.tooltip&&((u=s.value)===null||u===void 0||u.setShow(!1))});const p=()=>c("span",Object.assign({},Rt(o,{class:[`${r.value}-ellipsis`,e.lineClamp!==void 0?Ne(r.value):void 0,e.expandTrigger==="click"?Ae(r.value,"pointer"):void 0],style:h.value}),{ref:"triggerRef",onClick:d.value,onMouseenter:e.expandTrigger==="click"?f:void 0}),e.lineClamp?t:c("span",{ref:"triggerInnerRef"},t));function x(u){if(!u)return;const m=h.value,b=Ne(r.value);e.lineClamp!==void 0?a(u,b,"add"):a(u,b,"remove");for(const y in m)u.style[y]!==m[y]&&(u.style[y]=m[y])}function v(u,m){const b=Ae(r.value,"pointer");e.expandTrigger==="click"&&!m?a(u,b,"add"):a(u,b,"remove")}function a(u,m,b){b==="add"?u.classList.contains(m)||u.classList.add(m):u.classList.contains(m)&&u.classList.remove(m)}return{mergedTheme:i,triggerRef:n,triggerInnerRef:l,tooltipRef:s,handleClick:d,renderTrigger:p,getTooltipDisabled:f}},render(){var e;const{tooltip:t,renderTrigger:o,$slots:r}=this;if(t){const{mergedTheme:i}=this;return c(uo,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:i.peers.Tooltip,themeOverrides:i.peerOverrides.Tooltip}),{trigger:o,default:(e=r.tooltip)!==null&&e!==void 0?e:r.default})}else return o()}});function ho(e){const{baseColor:t,textColor2:o,bodyColor:r,cardColor:i,dividerColor:n,actionColor:l,scrollbarColor:s,scrollbarColorHover:g,invertedColor:h}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:l,headerColor:i,headerColorInverted:h,footerColor:l,footerColorInverted:h,headerBorderColor:n,headerBorderColorInverted:h,footerBorderColor:n,footerBorderColorInverted:h,siderBorderColor:n,siderBorderColorInverted:h,siderColor:i,siderColorInverted:h,siderToggleButtonBorder:`1px solid ${n}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:ze(r,s),siderToggleBarColorHover:ze(r,g),__invertScrollbar:"true"}}const nt=Be({name:"Layout",common:ye,peers:{Scrollbar:Tt},self:ho}),vo=$e("n-layout-sider"),st={type:String,default:"static"},mo=C("layout",`
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
 `),R("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),bo={embedded:Boolean,position:st,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},it=$e("n-layout");function lt(e){return F({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},A.props),bo),setup(t){const o=I(null),r=I(null),{mergedClsPrefixRef:i,inlineThemeDisabled:n}=ie(t),l=A("Layout","-layout",mo,nt,t,i);function s(a,u){if(t.nativeScrollbar){const{value:m}=o;m&&(u===void 0?m.scrollTo(a):m.scrollTo(a,u))}else{const{value:m}=r;m&&m.scrollTo(a,u)}}ke(it,t);let g=0,h=0;const f=a=>{var u;const m=a.target;g=m.scrollLeft,h=m.scrollTop,(u=t.onScroll)===null||u===void 0||u.call(t,a)};Ye(()=>{if(t.nativeScrollbar){const a=o.value;a&&(a.scrollTop=h,a.scrollLeft=g)}});const d={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},p={scrollTo:s},x=$(()=>{const{common:{cubicBezierEaseInOut:a},self:u}=l.value;return{"--n-bezier":a,"--n-color":t.embedded?u.colorEmbedded:u.color,"--n-text-color":u.textColor}}),v=n?de("layout",$(()=>t.embedded?"e":""),x,t):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:d,mergedTheme:l,handleNativeElScroll:f,cssVars:n?void 0:x,themeClass:v?.themeClass,onRender:v?.onRender},p)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const i=r?this.hasSiderStyle:void 0,n=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return c("div",{class:n,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):c(qe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const yo=lt(!1),Co=lt(!0),xo=C("layout-sider",`
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
`,[R("bordered",[L("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),L("left-placement",[R("bordered",[L("border",`
 right: 0;
 `)])]),R("right-placement",`
 justify-content: flex-start;
 `,[R("bordered",[L("border",`
 left: 0;
 `)]),R("collapsed",[C("layout-toggle-button",[C("base-icon",`
 transform: rotate(180deg);
 `)]),C("layout-toggle-bar",[Y("&:hover",[L("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),L("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),C("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[C("base-icon",`
 transform: rotate(0);
 `)]),C("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[Y("&:hover",[L("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),L("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),R("collapsed",[C("layout-toggle-bar",[Y("&:hover",[L("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),L("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),C("layout-toggle-button",[C("base-icon",`
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
 `,[L("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),L("bottom",`
 position: absolute;
 top: 34px;
 `),Y("&:hover",[L("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),L("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),L("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),Y("&:hover",[L("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),L("border",`
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
 `),R("show-content",[C("layout-sider-scroll-container",{opacity:1})]),R("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),So=F({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),_o=F({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(Pe,{clsPrefix:e},{default:()=>c(Qt,null)}))}}),wo={position:st,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},zo=F({name:"LayoutSider",props:Object.assign(Object.assign({},A.props),wo),setup(e){const t=It(it),o=I(null),r=I(null),i=I(e.defaultCollapsed),n=Ge(Se(e,"collapsed"),i),l=$(()=>Q(n.value?e.collapsedWidth:e.width)),s=$(()=>e.collapseMode!=="transform"?{}:{minWidth:Q(e.width)}),g=$(()=>t?t.siderPlacement:"left");function h(B,S){if(e.nativeScrollbar){const{value:P}=o;P&&(S===void 0?P.scrollTo(B):P.scrollTo(B,S))}else{const{value:P}=r;P&&P.scrollTo(B,S)}}function f(){const{"onUpdate:collapsed":B,onUpdateCollapsed:S,onExpand:P,onCollapse:V}=e,{value:z}=n;S&&le(S,!z),B&&le(B,!z),i.value=!z,z?P&&le(P):V&&le(V)}let d=0,p=0;const x=B=>{var S;const P=B.target;d=P.scrollLeft,p=P.scrollTop,(S=e.onScroll)===null||S===void 0||S.call(e,B)};Ye(()=>{if(e.nativeScrollbar){const B=o.value;B&&(B.scrollTop=p,B.scrollLeft=d)}}),ke(vo,{collapsedRef:n,collapseModeRef:Se(e,"collapseMode")});const{mergedClsPrefixRef:v,inlineThemeDisabled:a}=ie(e),u=A("Layout","-layout-sider",xo,nt,e,v);function m(B){var S,P;B.propertyName==="max-width"&&(n.value?(S=e.onAfterLeave)===null||S===void 0||S.call(e):(P=e.onAfterEnter)===null||P===void 0||P.call(e))}const b={scrollTo:h},y=$(()=>{const{common:{cubicBezierEaseInOut:B},self:S}=u.value,{siderToggleButtonColor:P,siderToggleButtonBorder:V,siderToggleBarColor:z,siderToggleBarColorHover:w}=S,E={"--n-bezier":B,"--n-toggle-button-color":P,"--n-toggle-button-border":V,"--n-toggle-bar-color":z,"--n-toggle-bar-color-hover":w};return e.inverted?(E["--n-color"]=S.siderColorInverted,E["--n-text-color"]=S.textColorInverted,E["--n-border-color"]=S.siderBorderColorInverted,E["--n-toggle-button-icon-color"]=S.siderToggleButtonIconColorInverted,E.__invertScrollbar=S.__invertScrollbar):(E["--n-color"]=S.siderColor,E["--n-text-color"]=S.textColor,E["--n-border-color"]=S.siderBorderColor,E["--n-toggle-button-icon-color"]=S.siderToggleButtonIconColor),E}),k=a?de("layout-sider",$(()=>e.inverted?"a":"b"),y,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:v,mergedTheme:u,styleMaxWidth:l,mergedCollapsed:n,scrollContainerStyle:s,siderPlacement:g,handleNativeElScroll:x,handleTransitionend:m,handleTriggerClick:f,inlineThemeDisabled:a,cssVars:y,themeClass:k?.themeClass,onRender:k?.onRender},b)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Q(this.width)}]},this.nativeScrollbar?c("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(qe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?c(So,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(_o,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${t}-layout-sider__border`}):null)}}),ko={success:c(Ze,null),error:c(Je,null),warning:c(Ke,null),info:c(Xe,null)},$o=F({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){const o=$(()=>{const n="gradient",{fillColor:l}=e;return typeof l=="object"?`${n}-${Ut(JSON.stringify(l))}`:n});function r(n,l,s,g){const{gapDegree:h,viewBoxWidth:f,strokeWidth:d}=e,p=50,x=0,v=p,a=0,u=2*p,m=50+d/2,b=`M ${m},${m} m ${x},${v}
      a ${p},${p} 0 1 1 ${a},${-u}
      a ${p},${p} 0 1 1 ${-a},${u}`,y=Math.PI*2*p,k={stroke:g==="rail"?s:typeof e.fillColor=="object"?`url(#${o.value})`:s,strokeDasharray:`${Math.min(n,100)/100*(y-h)}px ${f*8}px`,strokeDashoffset:`-${h/2}px`,transformOrigin:l?"center":void 0,transform:l?`rotate(${l}deg)`:void 0};return{pathString:b,pathStyle:k}}const i=()=>{const n=typeof e.fillColor=="object",l=n?e.fillColor.stops[0]:"",s=n?e.fillColor.stops[1]:"";return n&&c("defs",null,c("linearGradient",{id:o.value,x1:"0%",y1:"100%",x2:"100%",y2:"0%"},c("stop",{offset:"0%","stop-color":l}),c("stop",{offset:"100%","stop-color":s})))};return()=>{const{fillColor:n,railColor:l,strokeWidth:s,offsetDegree:g,status:h,percentage:f,showIndicator:d,indicatorTextColor:p,unit:x,gapOffsetDegree:v,clsPrefix:a}=e,{pathString:u,pathStyle:m}=r(100,0,l,"rail"),{pathString:b,pathStyle:y}=r(f,g,n,"fill"),k=100+s;return c("div",{class:`${a}-progress-content`,role:"none"},c("div",{class:`${a}-progress-graph`,"aria-hidden":!0},c("div",{class:`${a}-progress-graph-circle`,style:{transform:v?`rotate(${v}deg)`:void 0}},c("svg",{viewBox:`0 0 ${k} ${k}`},i(),c("g",null,c("path",{class:`${a}-progress-graph-circle-rail`,d:u,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:m})),c("g",null,c("path",{class:[`${a}-progress-graph-circle-fill`,f===0&&`${a}-progress-graph-circle-fill--empty`],d:b,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:y}))))),d?c("div",null,t.default?c("div",{class:`${a}-progress-custom-content`,role:"none"},t.default()):h!=="default"?c("div",{class:`${a}-progress-icon`,"aria-hidden":!0},c(Pe,{clsPrefix:a},{default:()=>ko[h]})):c("div",{class:`${a}-progress-text`,style:{color:p},role:"none"},c("span",{class:`${a}-progress-text__percentage`},f),c("span",{class:`${a}-progress-text__unit`},x))):null)}}}),Bo={success:c(Ze,null),error:c(Je,null),warning:c(Ke,null),info:c(Xe,null)},Po=F({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const o=$(()=>Q(e.height)),r=$(()=>{var l,s;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(l=e.fillColor)===null||l===void 0?void 0:l.stops[0]} , ${(s=e.fillColor)===null||s===void 0?void 0:s.stops[1]})`:e.fillColor}),i=$(()=>e.railBorderRadius!==void 0?Q(e.railBorderRadius):e.height!==void 0?Q(e.height,{c:.5}):""),n=$(()=>e.fillBorderRadius!==void 0?Q(e.fillBorderRadius):e.railBorderRadius!==void 0?Q(e.railBorderRadius):e.height!==void 0?Q(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:l,railColor:s,railStyle:g,percentage:h,unit:f,indicatorTextColor:d,status:p,showIndicator:x,processing:v,clsPrefix:a}=e;return c("div",{class:`${a}-progress-content`,role:"none"},c("div",{class:`${a}-progress-graph`,"aria-hidden":!0},c("div",{class:[`${a}-progress-graph-line`,{[`${a}-progress-graph-line--indicator-${l}`]:!0}]},c("div",{class:`${a}-progress-graph-line-rail`,style:[{backgroundColor:s,height:o.value,borderRadius:i.value},g]},c("div",{class:[`${a}-progress-graph-line-fill`,v&&`${a}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:r.value,height:o.value,lineHeight:o.value,borderRadius:n.value}},l==="inside"?c("div",{class:`${a}-progress-graph-line-indicator`,style:{color:d}},t.default?t.default():`${h}${f}`):null)))),x&&l==="outside"?c("div",null,t.default?c("div",{class:`${a}-progress-custom-content`,style:{color:d},role:"none"},t.default()):p==="default"?c("div",{role:"none",class:`${a}-progress-icon ${a}-progress-icon--as-text`,style:{color:d}},h,f):c("div",{class:`${a}-progress-icon`,"aria-hidden":!0},c(Pe,{clsPrefix:a},{default:()=>Bo[p]}))):null)}}});function We(e,t,o=100){return`m ${o/2} ${o/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Ro=F({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const o=$(()=>e.percentage.map((n,l)=>`${Math.PI*n/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*l)-e.circleGap*l)*2}, ${e.viewBoxWidth*8}`)),r=(i,n)=>{const l=e.fillColor[n],s=typeof l=="object"?l.stops[0]:"",g=typeof l=="object"?l.stops[1]:"";return typeof e.fillColor[n]=="object"&&c("linearGradient",{id:`gradient-${n}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},c("stop",{offset:"0%","stop-color":s}),c("stop",{offset:"100%","stop-color":g}))};return()=>{const{viewBoxWidth:i,strokeWidth:n,circleGap:l,showIndicator:s,fillColor:g,railColor:h,railStyle:f,percentage:d,clsPrefix:p}=e;return c("div",{class:`${p}-progress-content`,role:"none"},c("div",{class:`${p}-progress-graph`,"aria-hidden":!0},c("div",{class:`${p}-progress-graph-circle`},c("svg",{viewBox:`0 0 ${i} ${i}`},c("defs",null,d.map((x,v)=>r(x,v))),d.map((x,v)=>c("g",{key:v},c("path",{class:`${p}-progress-graph-circle-rail`,d:We(i/2-n/2*(1+2*v)-l*v,n,i),"stroke-width":n,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:h[v]},f[v]]}),c("path",{class:[`${p}-progress-graph-circle-fill`,x===0&&`${p}-progress-graph-circle-fill--empty`],d:We(i/2-n/2*(1+2*v)-l*v,n,i),"stroke-width":n,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:o.value[v],strokeDashoffset:0,stroke:typeof g[v]=="object"?`url(#gradient-${v})`:g[v]}})))))),s&&t.default?c("div",null,c("div",{class:`${p}-progress-text`},t.default())):null)}}}),To=Y([C("progress",{display:"inline-block"},[C("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),R("line",`
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
 `,[R("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),R("circle, dashboard",{width:"120px"},[C("progress-custom-content",`
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
 `)]),R("multiple-circle",`
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
 `,[R("empty",{opacity:0})]),C("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),C("progress-graph-line",[R("indicator-inside",[C("progress-graph-line-rail",`
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
 `)])]),R("indicator-inside-label",`
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
 `,[R("processing",[Y("&::after",`
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
 `)]),Io=Object.assign(Object.assign({},A.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),Uo=F({name:"Progress",props:Io,setup(e){const t=$(()=>e.indicatorPlacement||e.indicatorPosition),o=$(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=ie(e),n=A("Progress","-progress",To,Ot,e,r),l=$(()=>{const{status:g}=e,{common:{cubicBezierEaseInOut:h},self:{fontSize:f,fontSizeCircle:d,railColor:p,railHeight:x,iconSizeCircle:v,iconSizeLine:a,textColorCircle:u,textColorLineInner:m,textColorLineOuter:b,lineBgProcessing:y,fontWeightCircle:k,[q("iconColor",g)]:B,[q("fillColor",g)]:S}}=n.value;return{"--n-bezier":h,"--n-fill-color":S,"--n-font-size":f,"--n-font-size-circle":d,"--n-font-weight-circle":k,"--n-icon-color":B,"--n-icon-size-circle":v,"--n-icon-size-line":a,"--n-line-bg-processing":y,"--n-rail-color":p,"--n-rail-height":x,"--n-text-color-circle":u,"--n-text-color-line-inner":m,"--n-text-color-line-outer":b}}),s=i?de("progress",$(()=>e.status[0]),l,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:o,cssVars:i?void 0:l,themeClass:s?.themeClass,onRender:s?.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:o,showIndicator:r,status:i,railColor:n,railStyle:l,color:s,percentage:g,viewBoxWidth:h,strokeWidth:f,mergedIndicatorPlacement:d,unit:p,borderRadius:x,fillBorderRadius:v,height:a,processing:u,circleGap:m,mergedClsPrefix:b,gapDeg:y,gapOffsetDegree:k,themeClass:B,$slots:S,onRender:P}=this;return P?.(),c("div",{class:[B,`${b}-progress`,`${b}-progress--${e}`,`${b}-progress--${i}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":g,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?c($o,{clsPrefix:b,status:i,showIndicator:r,indicatorTextColor:o,railColor:n,fillColor:s,railStyle:l,offsetDegree:this.offsetDegree,percentage:g,viewBoxWidth:h,strokeWidth:f,gapDegree:y===void 0?e==="dashboard"?75:0:y,gapOffsetDegree:k,unit:p},S):e==="line"?c(Po,{clsPrefix:b,status:i,showIndicator:r,indicatorTextColor:o,railColor:n,fillColor:s,railStyle:l,percentage:g,processing:u,indicatorPlacement:d,unit:p,fillBorderRadius:v,railBorderRadius:x,height:a},S):e==="multiple-circle"?c(Ro,{clsPrefix:b,strokeWidth:f,railColor:n,fillColor:s,railStyle:l,viewBoxWidth:h,percentage:g,showIndicator:r,circleGap:m},S):null)}});function Oo(e){const{primaryColorHover:t,borderColor:o}=e;return{resizableTriggerColorHover:t,resizableTriggerColor:o}}const jo={common:ye,self:Oo},Lo=C("split",`
 display: flex;
 width: 100%;
 height: 100%;
`,[R("horizontal",`
 flex-direction: row;
 `),R("vertical",`
 flex-direction: column;
 `),C("split-pane-1",`
 overflow: hidden;
 `),C("split-pane-2",`
 overflow: hidden;
 flex: 1;
 `),L("resize-trigger",`
 background-color: var(--n-resize-trigger-color);
 transition: background-color .3s var(--n-bezier);
 `,[R("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `),Y("&:hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)])]),Do=Object.assign(Object.assign({},A.props),{direction:{type:String,default:"horizontal"},resizeTriggerSize:{type:Number,default:3},disabled:Boolean,defaultSize:{type:[String,Number],default:.5},"onUpdate:size":[Function,Array],onUpdateSize:[Function,Array],size:[String,Number],min:{type:[String,Number],default:0},max:{type:[String,Number],default:1},pane1Class:String,pane1Style:[Object,String],pane2Class:String,pane2Style:[Object,String],onDragStart:Function,onDragMove:Function,onDragEnd:Function,watchProps:Array}),Eo=F({name:"Split",props:Do,slots:Object,setup(e){var t;const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=ie(e),i=A("Split","-split",Lo,jo,e,o),n=$(()=>{const{common:{cubicBezierEaseInOut:y},self:{resizableTriggerColor:k,resizableTriggerColorHover:B}}=i.value;return{"--n-bezier":y,"--n-resize-trigger-color":k,"--n-resize-trigger-color-hover":B}}),l=I(null),s=I(!1),g=Se(e,"size"),h=I(e.defaultSize);!((t=e.watchProps)===null||t===void 0)&&t.includes("defaultSize")&&Lt(()=>h.value=e.defaultSize);const f=y=>{const k=e["onUpdate:size"];e.onUpdateSize&&le(e.onUpdateSize,y),k&&le(k,y),h.value=y},d=Ge(g,h),p=$(()=>{const y=d.value;if(typeof y=="string")return{flex:`0 0 ${y}`};if(typeof y=="number"){const k=y*100;return{flex:`0 0 calc(${k}% - ${e.resizeTriggerSize*k/100}px)`}}}),x=$(()=>e.direction==="horizontal"?{width:`${e.resizeTriggerSize}px`,height:"100%"}:{width:"100%",height:`${e.resizeTriggerSize}px`}),v=$(()=>{const y=e.direction==="horizontal";return{width:y?`${e.resizeTriggerSize}px`:"",height:y?"":`${e.resizeTriggerSize}px`,cursor:e.direction==="horizontal"?"col-resize":"row-resize"}});let a=0;const u=y=>{y.preventDefault(),s.value=!0,e.onDragStart&&e.onDragStart(y);const k="mousemove",B="mouseup",S=z=>{m(z),e.onDragMove&&e.onDragMove(z)},P=()=>{De(k,document,S),De(B,document,P),s.value=!1,e.onDragEnd&&e.onDragEnd(y),document.body.style.cursor=""};document.body.style.cursor=v.value.cursor,je(k,document,S),je(B,document,P);const V=l.value;if(V){const z=V.getBoundingClientRect();e.direction==="horizontal"?a=y.clientX-z.left:a=z.top-y.clientY}m(y)};function m(y){var k,B;const S=(B=(k=l.value)===null||k===void 0?void 0:k.parentElement)===null||B===void 0?void 0:B.getBoundingClientRect();if(!S)return;const{direction:P}=e,V=S.width-e.resizeTriggerSize,z=S.height-e.resizeTriggerSize,w=P==="horizontal"?V:z,E=P==="horizontal"?y.clientX-S.left-a:y.clientY-S.top+a,{min:K,max:J}=e,re=typeof K=="string"?Le(K):K*w,ne=typeof J=="string"?Le(J):J*w;let G=E;G=Math.max(G,re),G=Math.min(G,ne,w),typeof d.value=="string"?f(`${G}px`):f(G/w)}const b=r?de("split",void 0,n,e):void 0;return{themeClass:b?.themeClass,onRender:b?.onRender,cssVars:r?void 0:n,resizeTriggerElRef:l,isDragging:s,mergedClsPrefix:o,resizeTriggerWrapperStyle:v,resizeTriggerStyle:x,handleMouseDown:u,firstPaneStyle:p}},render(){var e,t,o,r,i;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{class:[`${this.mergedClsPrefix}-split`,`${this.mergedClsPrefix}-split--${this.direction}`,this.themeClass],style:this.cssVars},c("div",{class:[`${this.mergedClsPrefix}-split-pane-1`,this.pane1Class],style:[this.firstPaneStyle,this.pane1Style]},(o=(t=this.$slots)[1])===null||o===void 0?void 0:o.call(t)),!this.disabled&&c("div",{ref:"resizeTriggerElRef",class:`${this.mergedClsPrefix}-split__resize-trigger-wrapper`,style:this.resizeTriggerWrapperStyle,onMousedown:this.handleMouseDown},jt(this.$slots["resize-trigger"],()=>[c("div",{style:this.resizeTriggerStyle,class:[`${this.mergedClsPrefix}-split__resize-trigger`,this.isDragging&&`${this.mergedClsPrefix}-split__resize-trigger--hover`]})])),c("div",{class:[`${this.mergedClsPrefix}-split-pane-2`,this.pane2Class],style:this.pane2Style},(i=(r=this.$slots)[2])===null||i===void 0?void 0:i.call(r)))}}),Mo=C("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[Y("&:first-child","margin-top: 0;"),Y("&:last-child","margin-bottom: 0;")]),Fo=Object.assign(Object.assign({},A.props),{depth:[String,Number]}),No=F({name:"P",props:Fo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ie(e),r=A("Typography","-p",Mo,Qe,e,t),i=$(()=>{const{depth:l}=e,s=l||"1",{common:{cubicBezierEaseInOut:g},self:{pFontSize:h,pLineHeight:f,pMargin:d,pTextColor:p,[`pTextColor${s}Depth`]:x}}=r.value;return{"--n-bezier":g,"--n-font-size":h,"--n-line-height":f,"--n-margin":d,"--n-text-color":l===void 0?p:x}}),n=o?de("p",$(()=>`${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:n?.themeClass,onRender:n?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),c("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),Ao=C("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[R("strong",`
 font-weight: var(--n-font-weight-strong);
 `),R("italic",{fontStyle:"italic"}),R("underline",{textDecoration:"underline"}),R("code",`
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
 `)]),Wo=Object.assign(Object.assign({},A.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),Ho=F({name:"Text",props:Wo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ie(e),r=A("Typography","-text",Ao,Qe,e,t),i=$(()=>{const{depth:l,type:s}=e,g=s==="default"?l===void 0?"textColor":`textColor${l}Depth`:q("textColor",s),{common:{fontWeightStrong:h,fontFamilyMono:f,cubicBezierEaseInOut:d},self:{codeTextColor:p,codeBorderRadius:x,codeColor:v,codeBorder:a,[g]:u}}=r.value;return{"--n-bezier":d,"--n-text-color":u,"--n-font-weight-strong":h,"--n-font-famliy-mono":f,"--n-code-border-radius":x,"--n-code-text-color":p,"--n-code-color":v,"--n-code-border":a}}),n=o?de("text",$(()=>`${e.type[0]}${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:t,compitableTag:Dt(e,["as","tag"]),cssVars:o?void 0:i,themeClass:n?.themeClass,onRender:n?.onRender}},render(){var e,t,o;const{mergedClsPrefix:r}=this;(e=this.onRender)===null||e===void 0||e.call(this);const i=[`${r}-text`,this.themeClass,{[`${r}-text--code`]:this.code,[`${r}-text--delete`]:this.delete,[`${r}-text--strong`]:this.strong,[`${r}-text--italic`]:this.italic,[`${r}-text--underline`]:this.underline}],n=(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t);return this.code?c("code",{class:i,style:this.cssVars},this.delete?c("del",null,n):n):this.delete?c("del",{class:i,style:this.cssVars},n):c(this.compitableTag||"span",{class:i,style:this.cssVars},n)}}),Vo=["accept","multiple"],qo={class:"text-center"},Yo=F({__name:"index",props:{accept:{},multiple:{type:Boolean}},emits:["change"],setup(e,{emit:t}){const o=t;function r(l){o("change",l)}function i(l){const s=l.target;s.files&&r(s.files)}function n(l){const s=l.dataTransfer?.files;s&&s.length&&r(s)}return(l,s)=>{const g=Ho,h=No;return D(),H("div",{class:"relative border border-border rounded-6 border-dashed p-10 transition-all hover:border-primary",onDragover:s[0]||(s[0]=Ee(()=>{},["prevent"])),onDrop:Ee(n,["stop","prevent"])},[s[3]||(s[3]=_("label",{class:"absolute left-0 top-0 z-1 size-full cursor-pointer",for:"image-uploader"},null,-1)),_("input",{id:"image-uploader",class:"hidden",type:"file",accept:e.accept,multiple:e.multiple,onChange:i},null,40,Vo),_("div",qo,[U(g,{depth:"3"},{default:T(()=>[...s[1]||(s[1]=[_("span",{class:"i-mage-image-upload text-40"},null,-1)])]),_:1})]),U(h,{class:"mt-0 text-center text-14",depth:"3"},{default:T(()=>[...s[2]||(s[2]=[X(" 拖拽文件到该区域或点击选择图片 ",-1)])]),_:1})],32)}}}),Go=F({__name:"CompressUpload",emits:["change"],setup(e,{emit:t}){const o=t;function r(i){const n=Array.from(i).map(l=>({file:l,id:Zt(),fileName:Et(l.name),src:URL.createObjectURL(l)}));o("change",n)}return(i,n)=>{const l=Yo;return D(),ce(l,{multiple:"",accept:"image/png,image/jpeg,image/avif",onChange:r})}}}),Xo={id:"CompressProgress",class:"mt-10 flex items-center"},Ko={key:0,class:"ml-4 flex items-center"},Jo={key:0,class:"i-solar-check-circle-bold ml-4 text-success"},Zo={class:"text-14"},Qo={class:"text-success"},er={class:"text-error"},tr=F({__name:"CompressProgress",props:{compressList:{},successList:{},failedList:{},compressEnd:{type:Boolean},percentage:{}},setup(e){const t=e,o=$(()=>t.compressEnd?t.successList.length===t.compressList.length?"success":t.failedList.length===t.compressList.length?"error":"warning":"default");return(r,i)=>{const n=Uo,l=_e;return D(),H("div",Xo,[U(n,{class:"flex-1",type:"line",status:o.value,percentage:e.percentage,"indicator-placement":"inside"},null,8,["status","percentage"]),e.compressEnd?(D(),H("div",Ko,[e.successList.length===e.compressList.length?(D(),H("div",Jo)):(D(),ce(l,{key:1},{trigger:T(()=>[_("div",{class:me(["i-solar-info-circle-bold",{"text-error":e.failedList.length===e.compressList.length,"text-warning":e.successList.length!==e.compressList.length}])},null,2)]),default:T(()=>[_("div",Zo,[_("div",null,"总数："+ee(e.compressList.length),1),_("div",null,[i[0]||(i[0]=_("span",null,"成功：",-1)),_("span",Qo,ee(e.successList.length),1)]),_("div",null,[i[1]||(i[1]=_("span",null,"失败：",-1)),_("span",er,ee(e.failedList.length),1)])])]),_:1}))])):te("",!0)])}}}),or={id:"CompressOption"},rr={class:"color-grey"},nr={class:"flex"},sr={class:"mt-20 flex items-center font-600"},ir={class:"flex items-center"},lr={class:"flex items-center"},ar=F({__name:"CompressOption",props:{checked:{required:!0},checkedModifiers:{},size:{required:!0},sizeModifiers:{},quality:{required:!0},qualityModifiers:{}},emits:["update:checked","update:size","update:quality"],setup(e){const t=xe(e,"checked"),o=xe(e,"size"),r=xe(e,"quality"),i=[{label:"WebP",value:"webp",tip:"压缩率较高，大多数浏览器支持"},{label:"AVIF",value:"avif",tip:"压缩率极高，部分现代浏览器支持"},{label:"JPEG",value:"jpeg",tip:"兼容性最好，所有浏览器支持"}];function n(l){t.value=l}return(l,s)=>{const g=Xt,h=Re,f=Kt,d=_e;return D(),H("div",or,[s[11]||(s[11]=_("div",{class:"font-600"}," 图片压缩格式 ",-1)),U(h,{vertical:""},{default:T(()=>[(D(),H(Te,null,et(i,p=>U(g,{key:p.value,checked:t.value===p.value,value:p.value,onChange:x=>n(p.value)},{default:T(()=>[X(ee(p.label)+" ",1),_("span",rr,ee(p.tip),1)]),_:2},1032,["checked","value","onChange"])),64))]),_:1}),s[12]||(s[12]=_("div",{class:"mt-20 flex items-center font-600"}," 图片压缩质量 ",-1)),_("div",nr,[U(f,{value:r.value,"onUpdate:value":s[0]||(s[0]=p=>r.value=p),placeholder:"请输入",min:1,max:100},{suffix:T(()=>[...s[3]||(s[3]=[X(" % ",-1)])]),_:1},8,["value"])]),_("div",sr,[s[6]||(s[6]=X(" 图片输出尺寸 ",-1)),U(d,{placement:"right"},{trigger:T(()=>[...s[4]||(s[4]=[_("span",{class:"i-solar-info-circle-bold"},null,-1)])]),default:T(()=>[s[5]||(s[5]=X(" 如果只输入宽度或者高度，另外一项会自动计算 ",-1))]),_:1})]),U(h,{vertical:""},{default:T(()=>[_("div",ir,[s[8]||(s[8]=_("div",{class:"text-16"}," 图片宽度： ",-1)),U(f,{value:o.value.width,"onUpdate:value":s[1]||(s[1]=p=>o.value.width=p),placeholder:"请输入",min:1},{suffix:T(()=>[...s[7]||(s[7]=[X(" px ",-1)])]),_:1},8,["value"])]),_("div",lr,[s[10]||(s[10]=_("div",{class:"text-16"}," 图片高度： ",-1)),U(f,{value:o.value.height,"onUpdate:value":s[2]||(s[2]=p=>o.value.height=p),placeholder:"请输入",min:1},{suffix:T(()=>[...s[9]||(s[9]=[X(" px ",-1)])]),_:1},8,["value"])])]),_:1})])}}}),cr={id:"CompressPreview",class:"mb-10"},dr={key:0,class:"flex justify-between text-14"},ur={class:"h-250 overflow-hidden rounded-6"},gr=["src"],fr=["src"],pr={class:"size-full"},hr=["src"],vr=F({__name:"CompressPreview",props:{src:{},compressedSrc:{}},setup(e){const t=I(.5),o=I(),{width:r}=Mt(o);return(i,n)=>{const l=Eo;return D(),H("div",cr,[e.src&&e.compressedSrc?(D(),H("div",dr,[...n[1]||(n[1]=[_("span",null,"压缩前",-1),_("span",null,"压缩后",-1)])])):te("",!0),_("div",ur,[e.src&&!e.compressedSrc?(D(),H("img",{key:0,class:"size-full object-cover",src:e.src},null,8,gr)):te("",!0),e.src&&e.compressedSrc?(D(),ce(l,{key:1,size:t.value,"onUpdate:size":n[0]||(n[0]=s=>t.value=s),"resize-trigger-size":2,class:"relative h-full"},{1:T(()=>[_("div",{ref_key:"leftBox",ref:o,class:"size-full"},[_("img",{class:"absolute left-0 top-0 z-1 size-full object-cover",src:e.src,style:Ft({clip:`rect(auto, ${be(r)}px, auto, auto)`})},null,12,fr)],512)]),2:T(()=>[_("div",pr,[_("img",{class:"absolute left-0 top-0 size-full object-cover",src:e.compressedSrc},null,8,hr)])]),"resize-trigger":T(()=>[...n[2]||(n[2]=[_("div",{class:"relative z-1 h-full bg-primary"},[_("div",{class:"absolute-center size-40 flex items-center border-2 border-primary rounded-1/2 border-solid"},[_("span",{class:"i-ri-arrow-left-s-fill text-22 color-primary"}),_("span",{class:"i-ri-arrow-right-s-fill text-22 color-primary"})])],-1)])]),_:1},8,["size"])):te("",!0)])])}}}),mr={class:"image-list"},br=["onClick"],yr={class:"h-150 w-full"},Cr=["src"],xr={class:"flex items-center justify-between px-8 py-4"},Sr={class:"text-12"},_r=["onClick"],wr=F({__name:"CompressList",props:Nt({list:{}},{active:{required:!0},activeModifiers:{}}),emits:["update:active"],setup(e){const t=xe(e,"active");function o(r){t.value=r}return(r,i)=>{const n=tt,l=po,s=io,g=_e,h=Re;return D(),H("div",mr,[(D(!0),H(Te,null,et(e.list,f=>(D(),H("div",{key:f.id,class:me(["cursor-pointer overflow-hidden border border-border rounded-6 border-solid transition-all not-first:mt-10 hover:border-primary",{"border-primary":t.value===f.id,"border-error!":f.status==="failed"}]),onClick:d=>o(f.id)},[U(n,{show:f.status==="processing"},{default:T(()=>[_("div",yr,[_("img",{class:"size-full object-cover",src:f.src,"no-view":""},null,8,Cr)])]),_:2},1032,["show"]),_("div",xr,[U(l,{class:me(["flex-1 text-12",{"text-error":f.status==="failed"}])},{default:T(()=>[X(ee(f.file.name),1)]),_:2},1032,["class"]),U(h,{size:4},{default:T(()=>[U(s,{class:me(["rounded-4",{"line-through":f.compressedFile}]),type:f.status==="failed"?"error":"default",size:"small"},{default:T(()=>[X(ee(be(Me)(f.file.size)),1)]),_:2},1032,["class","type"]),f.compressedFile?(D(),ce(s,{key:0,class:"rounded-4",type:"success",size:"small"},{default:T(()=>[X(ee(be(Me)(f.compressedFile.size)),1)]),_:2},1024)):te("",!0),f.failedInfo?(D(),ce(g,{key:1,class:"max-h-150 max-w-200",trigger:"hover",scrollable:""},{trigger:T(()=>[...i[0]||(i[0]=[_("div",{class:"i-solar-info-circle-bold text-error"},null,-1)])]),default:T(()=>[_("div",Sr,ee(f.failedInfo),1)]),_:2},1024)):te("",!0)]),_:2},1024)]),f.compressedFile?(D(),H("div",{key:0,class:"cursor-pointer border-t border-border border-t-solid bg-primary-1 text-center text-12 leading-30 transition-all dark:bg-primary-2 dark:hover:bg-primary-3 hover:bg-primary-2",onClick:d=>be(ot)(f.compressedFile,f.compressedFile.name)}," 点击下载 ",8,_r)):te("",!0)],10,br))),128))])}}});"stream"in Blob.prototype||Object.defineProperty(Blob.prototype,"stream",{value(){return new Response(this).body}}),"setBigUint64"in DataView.prototype||Object.defineProperty(DataView.prototype,"setBigUint64",{value(e,t,o){const r=Number(0xffffffffn&t),i=Number(t>>32n);this.setUint32(e+(o?0:4),r,o),this.setUint32(e+(o?4:0),i,o)}});var ge=e=>new DataView(new ArrayBuffer(e)),oe=e=>new Uint8Array(e.buffer||e),ue=e=>new TextEncoder().encode(String(e)),ae=e=>Math.min(4294967295,Number(e)),He=e=>Math.min(65535,Number(e));function zr(e,t,o){t===void 0||t instanceof Date||(t=new Date(t));const r=e!==void 0;if(o||(o=r?436:509),e instanceof File)return{isFile:r,t:t||new Date(e.lastModified),bytes:e.stream(),mode:o};if(e instanceof Response)return{isFile:r,t:t||new Date(e.headers.get("Last-Modified")||Date.now()),bytes:e.body,mode:o};if(t===void 0)t=new Date;else if(isNaN(t))throw new Error("Invalid modification date.");if(!r)return{isFile:r,t,mode:o};if(typeof e=="string")return{isFile:r,t,bytes:ue(e),mode:o};if(e instanceof Blob)return{isFile:r,t,bytes:e.stream(),mode:o};if(e instanceof Uint8Array||e instanceof ReadableStream)return{isFile:r,t,bytes:e,mode:o};if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return{isFile:r,t,bytes:oe(e),mode:o};if(Symbol.asyncIterator in e)return{isFile:r,t,bytes:at(e[Symbol.asyncIterator]()),mode:o};throw new TypeError("Unsupported input format.")}function at(e,t=e){return new ReadableStream({async pull(o){let r=0;for(;o.desiredSize>r;){const i=await e.next();if(!i.value){o.close();break}{const n=kr(i.value);o.enqueue(n),r+=n.byteLength}}},cancel(o){t.throw?.(o)}})}function kr(e){return typeof e=="string"?ue(e):e instanceof Uint8Array?e:oe(e)}function ct(e,t,o){let[r,i]=(function(n){return n?n instanceof Uint8Array?[n,1]:ArrayBuffer.isView(n)||n instanceof ArrayBuffer?[oe(n),1]:[ue(n),0]:[void 0,0]})(t);if(e instanceof File)return{i:we(r||ue(e.name)),o:BigInt(e.size),u:i};if(e instanceof Response){const n=e.headers.get("content-disposition"),l=n&&n.match(/;\s*filename\*?\s*=\s*(?:UTF-\d+''|)["']?([^;"'\r\n]*)["']?(?:;|$)/i),s=l&&l[1]||e.url&&new URL(e.url).pathname.split("/").findLast(Boolean),g=s&&decodeURIComponent(s),h=o||+e.headers.get("content-length");return{i:we(r||ue(g)),o:BigInt(h),u:i}}return r=we(r,e!==void 0||o!==void 0),typeof e=="string"?{i:r,o:BigInt(ue(e).length),u:i}:e instanceof Blob?{i:r,o:BigInt(e.size),u:i}:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?{i:r,o:BigInt(e.byteLength),u:i}:{i:r,o:$r(e,o),u:i}}function $r(e,t){return t>-1?BigInt(t):e?void 0:0n}function we(e,t=1){if(!e||e.every((o=>o===47)))throw new Error("The file must have a name.");if(t)for(;e[e.length-1]===47;)e=e.subarray(0,-1);else e[e.length-1]!==47&&(e=new Uint8Array([...e,47]));return e}var dt=new Uint32Array(256);for(let e=0;e<256;++e){let t=e;for(let o=0;o<8;++o)t=t>>>1^(1&t&&3988292384);dt[e]=t}function Ve(e,t=0){t=~t;for(var o=0,r=e.length;o<r;o++)t=t>>>8^dt[255&t^e[o]];return~t>>>0}function ut(e,t,o=0){const r=e.getSeconds()>>1|e.getMinutes()<<5|e.getHours()<<11,i=e.getDate()|e.getMonth()+1<<5|e.getFullYear()-1980<<9;t.setUint16(o,r,1),t.setUint16(o+2,i,1)}function Br({i:e,u:t},o){return 8*(!t||(o??(function(r){try{Pr.decode(r)}catch{return 0}return 1})(e)))}var Pr=new TextDecoder("utf8",{fatal:1});function Rr(e,t=0){const o=ge(30);return o.setUint32(0,1347093252),o.setUint32(4,754976768|t),ut(e.t,o,10),o.setUint16(26,e.i.length,1),oe(o)}async function*Tr(e){let{bytes:t}=e;if("then"in t&&(t=await t),t instanceof Uint8Array)yield t,e.l=Ve(t,0),e.o=BigInt(t.length);else{e.o=0n;const o=t.getReader();for(;;){const{value:r,done:i}=await o.read();if(i)break;e.l=Ve(r,e.l),e.o+=BigInt(r.length),yield r}}}function Ir(e,t){const o=ge(16+(t?8:0));return o.setUint32(0,1347094280),o.setUint32(4,e.isFile?e.l:0,1),t?(o.setBigUint64(8,e.o,1),o.setBigUint64(16,e.o,1)):(o.setUint32(8,ae(e.o),1),o.setUint32(12,ae(e.o),1)),oe(o)}function Ur(e,t,o=0,r=0){const i=ge(46);return i.setUint32(0,1347092738),i.setUint32(4,755182848),i.setUint16(8,2048|o),ut(e.t,i,12),i.setUint32(16,e.isFile?e.l:0,1),i.setUint32(20,ae(e.o),1),i.setUint32(24,ae(e.o),1),i.setUint16(28,e.i.length,1),i.setUint16(30,r,1),i.setUint16(40,e.mode|(e.isFile?32768:16384),1),i.setUint32(42,ae(t),1),oe(i)}function Or(e,t,o){const r=ge(o);return r.setUint16(0,1,1),r.setUint16(2,o-4,1),16&o&&(r.setBigUint64(4,e.o,1),r.setBigUint64(12,e.o,1)),r.setBigUint64(o-8,t,1),oe(r)}function gt(e){return e instanceof File||e instanceof Response?[[e],[e]]:[[e.input,e.name,e.size],[e.input,e.lastModified,e.mode]]}var jr=e=>(function(t){let o=BigInt(22),r=0n,i=0;for(const n of t){if(!n.i)throw new Error("Every file must have a non-empty name.");if(n.o===void 0)throw new Error(`Missing size for file "${new TextDecoder().decode(n.i)}".`);const l=n.o>=0xffffffffn,s=r>=0xffffffffn;r+=BigInt(46+n.i.length+(l&&8))+n.o,o+=BigInt(n.i.length+46+(12*s|28*l)),i||(i=l)}return(i||r>=0xffffffffn)&&(o+=BigInt(76)),o+r})((function*(t){for(const o of t)yield ct(...gt(o)[0])})(e));function Lr(e,t={}){const o={"Content-Type":"application/zip","Content-Disposition":"attachment"};return(typeof t.length=="bigint"||Number.isInteger(t.length))&&t.length>0&&(o["Content-Length"]=String(t.length)),t.metadata&&(o["Content-Length"]=String(jr(t.metadata))),new Response(Dr(e,t),{headers:o})}function Dr(e,t={}){const o=(function(r){const i=r[Symbol.iterator in r?Symbol.iterator:Symbol.asyncIterator]();return{async next(){const n=await i.next();if(n.done)return n;const[l,s]=gt(n.value);return{done:0,value:Object.assign(zr(...s),ct(...l))}},throw:i.throw?.bind(i),[Symbol.asyncIterator](){return this}}})(e);return at((async function*(r,i){const n=[];let l=0n,s=0n,g=0;for await(const d of r){const p=Br(d,i.buffersAreUTF8);yield Rr(d,p),yield new Uint8Array(d.i),d.isFile&&(yield*Tr(d));const x=d.o>=0xffffffffn,v=12*(l>=0xffffffffn)|28*x;yield Ir(d,x),n.push(Ur(d,l,p,v)),n.push(d.i),v&&n.push(Or(d,l,v)),x&&(l+=8n),s++,l+=BigInt(46+d.i.length)+d.o,g||(g=x)}let h=0n;for(const d of n)yield d,h+=BigInt(d.length);if(g||l>=0xffffffffn){const d=ge(76);d.setUint32(0,1347094022),d.setBigUint64(4,BigInt(44),1),d.setUint32(12,755182848),d.setBigUint64(24,s,1),d.setBigUint64(32,s,1),d.setBigUint64(40,h,1),d.setBigUint64(48,l,1),d.setUint32(56,1347094023),d.setBigUint64(64,l+h,1),d.setUint32(72,1,1),yield oe(d)}const f=ge(22);f.setUint32(0,1347093766),f.setUint16(8,He(s),1),f.setUint16(10,He(s),1),f.setUint32(12,ae(h),1),f.setUint32(16,ae(l),1),yield oe(f)})(o,t),o)}const Er={key:0,class:"border border-border rounded-6 border-solid"},Mr={class:"border-r border-border border-r-solid p-10"},Fr={class:"py-10 pl-20 pr-10"},Nr={class:"mt-10 flex justify-end"},Ar=F({__name:"index",setup(e){const t=At(),o=I([]),r=I([]),i=I(""),n=I(0),l=I(!0),s=I(!1),g=I(!1),h=I(!1),f=I(!1),d=I("webp"),p=I(75),x=I({width:void 0,height:void 0}),v=$(()=>r.value.find(z=>z.id===i.value)),a=$(()=>r.value.filter(z=>z.status==="success"&&z.compressedFile)),u=$(()=>r.value.filter(z=>z.status==="failed")),m=$(()=>v.value?.src),b=$(()=>v.value?.compressedSrc);let y;try{k()}catch(z){console.log("loadModules error",z),l.value=!1,t.error({title:"加载异常",content:"依赖资源加载异常，请刷新页面后重试",positiveText:"重试",onPositiveClick:()=>{window.location.reload()}})}async function k(){const[z,w,E,K,{default:J}]=await Promise.all([he(()=>import("https://unpkg.com/@jsquash/avif@1.3.0?module"),[]),he(()=>import("https://unpkg.com/@jsquash/jpeg@1.6.0?module"),[]),he(()=>import("https://unpkg.com/@jsquash/png@3.1.1?module"),[]),he(()=>import("https://unpkg.com/@jsquash/webp@1.5.0?module"),[]),he(()=>import("https://unpkg.com/@jsquash/resize@2.1.0?module"),[])]);l.value=!1,h.value=!0,y=async()=>{s.value=!0,g.value=!1,n.value=0,r.value=Ht(o.value);for(let N=0;N<r.value.length;N++){const O=r.value[N];try{const W=O.file.type.replace("image/","");O.status="processing";const Z=await G(W,O.file),M=`image/${d.value}`,se=new Blob([Z],{type:M});O.compressedFile=new File([se],`${O.fileName}.${d.value}`,{type:M}),O.compressedSrc=URL.createObjectURL(O.compressedFile),O.status="success"}catch(W){O.status="failed",O.failedInfo=Fe(W)}n.value=Math.round((N+1)/r.value.length*100)}s.value=!1,g.value=!0};async function re(N,O){const W=await O.arrayBuffer();switch(N){case"avif":return await z.decode(W);case"jpeg":return await w.decode(W);case"png":return await E.decode(W);case"webp":return await K.decode(W);default:throw new Error(`Unknown source type: ${N}`)}}async function ne(N){const O={quality:p.value};switch(d.value){case"avif":return await z.encode(N,O);case"jpeg":return await w.encode(N,O);case"png":return await E.encode(N);case"webp":return await K.encode(N,O);default:throw new Error(`Unknown output type: ${d.value}`)}}async function G(N,O){const W=await re(N,O);if(x.value.width||x.value.height){const Z=await Vt(O),M=fe(Z,x.value),se=await J(W,M);return ne(se)}return ne(W)}function fe(N,O){const{width:W,height:Z}=N,{width:M,height:se}=O,pe=W/Z;return{width:M??Math.round(se*pe),height:se??Math.round(M/pe)}}}function B(z){o.value=z,r.value=z,!i.value&&z.length&&(i.value=z[0].id)}function S(){V(o.value),V(r.value),i.value="",x.value={width:void 0,height:void 0},n.value=0,o.value=[],r.value=[],s.value=!1,g.value=!1}async function P(){try{const z=a.value.map(E=>E.compressedFile),w=await Lr(z).blob();ot(w,`liubing.me_compressed_${Date.now()}.zip`)}catch(z){window.$message.error(Fe(z))}}function V(z){z.forEach(w=>{w.src&&URL.revokeObjectURL(w.src),w.compressedSrc&&URL.revokeObjectURL(w.compressedSrc)})}return(z,w)=>{const E=wr,K=zo,J=vr,re=ar,ne=tr,G=Wt,fe=Re,N=Co,O=yo,W=Go,Z=tt;return D(),H("div",{class:me(["compress-image relative",{"opacity-50":!h.value&&!l.value,"after:content-empty after:absolute after:size-full after:top-0 after:z-1 after:cursor-not-allowed":!h.value&&!l.value}])},[U(Z,{show:l.value},{description:T(()=>[...w[7]||(w[7]=[_("div",{"text-center":"","text-14":""},[_("div",null,"依赖资源加载中..."),_("div",null,"首次加载较慢，请耐心等待")],-1)])]),default:T(()=>[r.value.length?(D(),H("div",Er,[U(O,{"has-sider":"",class:"h-[calc(100vh-150px)]"},{default:T(()=>[U(K,{"collapse-mode":"transform","collapsed-width":0,width:300,"show-trigger":"arrow-circle",bordered:""},{default:T(()=>[_("div",Mr,[U(E,{active:i.value,"onUpdate:active":w[0]||(w[0]=M=>i.value=M),list:r.value},null,8,["active","list"])])]),_:1}),U(N,null,{default:T(()=>[_("div",Fr,[m.value?(D(),ce(J,{key:0,src:m.value,"compressed-src":b.value},null,8,["src","compressed-src"])):te("",!0),U(re,{checked:d.value,"onUpdate:checked":w[1]||(w[1]=M=>d.value=M),quality:p.value,"onUpdate:quality":w[2]||(w[2]=M=>p.value=M),size:x.value,"onUpdate:size":w[3]||(w[3]=M=>x.value=M)},null,8,["checked","quality","size"]),s.value||g.value?(D(),ce(ne,{key:1,"compress-list":r.value,"success-list":a.value,"failed-list":u.value,"compress-end":g.value,percentage:n.value},null,8,["compress-list","success-list","failed-list","compress-end","percentage"])):te("",!0),_("div",Nr,[U(fe,null,{default:T(()=>[U(G,{type:"tertiary",disabled:s.value,onClick:S},{default:T(()=>[...w[8]||(w[8]=[X(" 重置 ",-1)])]),_:1},8,["disabled"]),U(G,{type:"primary",secondary:"",disabled:f.value||!a.value.length||s.value,loading:f.value,onClick:P},{default:T(()=>[...w[9]||(w[9]=[X(" 批量下载 ",-1)])]),_:1},8,["disabled","loading"]),U(G,{type:"primary",disabled:s.value,loading:s.value,onClick:be(y)},{default:T(()=>[...w[10]||(w[10]=[X(" 开始压缩 ",-1)])]),_:1},8,["disabled","loading","onClick"])]),_:1})])])]),_:1})]),_:1})])):(D(),H(Te,{key:1},[U(W,{onChange:B}),U(re,{checked:d.value,"onUpdate:checked":w[4]||(w[4]=M=>d.value=M),quality:p.value,"onUpdate:quality":w[5]||(w[5]=M=>p.value=M),size:x.value,"onUpdate:size":w[6]||(w[6]=M=>x.value=M),class:"mt-10"},null,8,["checked","quality","size"])],64))]),_:1},8,["show"])],2)}}}),Wr={};function Hr(e,t){const o=Ar,r=Gt("ClientOnly");return D(),H("div",null,[t[0]||(t[0]=Yt('<h1 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩"><span>图片压缩</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>工具依赖加载<a href="https://unpkg.com/" target="_blank" rel="noopener noreferrer">unpkg</a>的资源，国内用户可能需要开启魔法上网。</p></div><div class="hint-container tip"><p class="hint-container-title">温馨提示</p><p>纯本地图片压缩工具，不会上传您的任何图片信息，请放心使用。</p></div>',3)),U(r,null,{default:T(()=>[U(o)]),_:1})])}const Gr=qt(Wr,[["render",Hr]]),Xr=JSON.parse('{"path":"/tools/compress-image.html","title":"图片压缩","lang":"zh-CN","frontmatter":{"toc":false,"pageInfo":false,"layout":"ToolLayout","description":"一个纯本地图片压缩工具，支持输出WebP、AVIF、JPEG格图片","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图片压缩\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-25T06:46:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"],["meta",{"property":"og:url","content":"https://liubing.me/tools/compress-image.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"图片压缩"}],["meta",{"property":"og:description","content":"一个纯本地图片压缩工具，支持输出WebP、AVIF、JPEG格图片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-25T06:46:07.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-25T06:46:07.000Z"}],["script",{"type":"importmap"},"{\\n  \\"imports\\": {\\n    \\"wasm-feature-detect\\": \\"https://unpkg.com/wasm-feature-detect@1.8.0?module\\"\\n  }\\n}\\n"]]},"git":{"createdTime":1732366923000,"updatedTime":1742885167000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":3,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":0.36,"words":107},"filePathRelative":"tools/compress-image.md","excerpt":"\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>工具依赖加载<a href=\\"https://unpkg.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">unpkg</a>的资源，国内用户可能需要开启魔法上网。</p>\\n</div>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">温馨提示</p>\\n<p>纯本地图片压缩工具，不会上传您的任何图片信息，请放心使用。</p>\\n</div>"}');export{Gr as comp,Xr as data};
