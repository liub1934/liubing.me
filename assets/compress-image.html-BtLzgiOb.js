import{t as vt,e as L,h as c,f as ue,g as bt,i as F,j as y,k as $,l as D,m as ce,n as H,u as N,p as R,q as Q,v as xe,x as he,y as yt,z as P,A as W,B as Ct,C as re,D as Te,E as Re,N as xt,F as _e,G as te,H as Se,I as _t,J as St,K as Ce,L as we,M as wt,O as zt,P as kt,Q as Bt,R as $t,S as Ae,T as We,U as ze,V as Pt,W as He,X,Y as Ve,Z as qe,$ as Ye,a0 as Xe,a1 as Tt,a2 as Rt,a3 as It,a4 as Ie,a5 as Fe,a6 as De,a7 as Ge,a8 as Ft,a9 as Dt,_ as ne,o as U,c as A,b as w,d as E,aa as I,ab as Z,ac as Oe,ad as ie,ae as de,af as G,ag as K,ah as Ke,ai as ke,aj as Je,ak as Be,al as Ot,am as Et,an as Ut,ao as Ze,ap as Lt,aq as Qe,ar as jt,as as pe,at as Mt,au as Ee,av as Nt,a as At,r as Wt}from"./app-B3-b4MTp.js";import{_ as Ht}from"./Radio-BIeQCNUe.js";var Vt=0;function qt(e){var t=++Vt;return vt(e)+t}const Yt=L({name:"ChevronRight",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function Xt(e){const{textColor2:t,primaryColorHover:o,primaryColorPressed:r,primaryColor:n,infoColor:s,successColor:l,warningColor:a,errorColor:u,baseColor:g,borderColor:h,opacityDisabled:i,tagColor:b,closeIconColor:d,closeIconColorHover:v,closeIconColorPressed:p,borderRadiusSmall:f,fontSizeMini:m,fontSizeTiny:_,fontSizeSmall:x,fontSizeMedium:B,heightMini:z,heightTiny:C,heightSmall:k,heightMedium:S,closeColorHover:O,closeColorPressed:V,buttonColor2Hover:j,buttonColor2Pressed:q,fontWeightStrong:Y}=e;return Object.assign(Object.assign({},bt),{closeBorderRadius:f,heightTiny:z,heightSmall:C,heightMedium:k,heightLarge:S,borderRadius:f,opacityDisabled:i,fontSizeTiny:m,fontSizeSmall:_,fontSizeMedium:x,fontSizeLarge:B,fontWeightStrong:Y,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:g,colorCheckable:"#0000",colorHoverCheckable:j,colorPressedCheckable:q,colorChecked:n,colorCheckedHover:o,colorCheckedPressed:r,border:`1px solid ${h}`,textColor:t,color:b,colorBordered:"rgb(250, 250, 252)",closeIconColor:d,closeIconColorHover:v,closeIconColorPressed:p,closeColorHover:O,closeColorPressed:V,borderPrimary:`1px solid ${F(n,{alpha:.3})}`,textColorPrimary:n,colorPrimary:F(n,{alpha:.12}),colorBorderedPrimary:F(n,{alpha:.1}),closeIconColorPrimary:n,closeIconColorHoverPrimary:n,closeIconColorPressedPrimary:n,closeColorHoverPrimary:F(n,{alpha:.12}),closeColorPressedPrimary:F(n,{alpha:.18}),borderInfo:`1px solid ${F(s,{alpha:.3})}`,textColorInfo:s,colorInfo:F(s,{alpha:.12}),colorBorderedInfo:F(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:F(s,{alpha:.12}),closeColorPressedInfo:F(s,{alpha:.18}),borderSuccess:`1px solid ${F(l,{alpha:.3})}`,textColorSuccess:l,colorSuccess:F(l,{alpha:.12}),colorBorderedSuccess:F(l,{alpha:.1}),closeIconColorSuccess:l,closeIconColorHoverSuccess:l,closeIconColorPressedSuccess:l,closeColorHoverSuccess:F(l,{alpha:.12}),closeColorPressedSuccess:F(l,{alpha:.18}),borderWarning:`1px solid ${F(a,{alpha:.35})}`,textColorWarning:a,colorWarning:F(a,{alpha:.15}),colorBorderedWarning:F(a,{alpha:.12}),closeIconColorWarning:a,closeIconColorHoverWarning:a,closeIconColorPressedWarning:a,closeColorHoverWarning:F(a,{alpha:.12}),closeColorPressedWarning:F(a,{alpha:.18}),borderError:`1px solid ${F(u,{alpha:.23})}`,textColorError:u,colorError:F(u,{alpha:.1}),colorBorderedError:F(u,{alpha:.08}),closeIconColorError:u,closeIconColorHoverError:u,closeIconColorPressedError:u,closeColorHoverError:F(u,{alpha:.12}),closeColorPressedError:F(u,{alpha:.18})})}const Gt={name:"Tag",common:ue,self:Xt},Kt={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Jt=y("tag",`
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
 `),$("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[D("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),D("avatar",`
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
 `,[ce("disabled",[H("&:hover","background-color: var(--n-color-hover-checkable);",[ce("checked","color: var(--n-text-color-hover-checkable);")]),H("&:active","background-color: var(--n-color-pressed-checkable);",[ce("checked","color: var(--n-text-color-pressed-checkable);")])]),$("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ce("disabled",[H("&:hover","background-color: var(--n-color-checked-hover);"),H("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Zt=Object.assign(Object.assign(Object.assign({},N.props),Kt),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Qt=_e("n-tag"),eo=L({name:"Tag",props:Zt,setup(e){const t=R(null),{mergedBorderedRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:n,mergedRtlRef:s}=Q(e),l=N("Tag","-tag",Jt,Gt,e,r);xe(Qt,{roundRef:he(e,"round")});function a(){if(!e.disabled&&e.checkable){const{checked:d,onCheckedChange:v,onUpdateChecked:p,"onUpdate:checked":f}=e;p&&p(!d),f&&f(!d),v&&v(!d)}}function u(d){if(e.triggerClickOnClose||d.stopPropagation(),!e.disabled){const{onClose:v}=e;v&&te(v,d)}}const g={setTextContent(d){const{value:v}=t;v&&(v.textContent=d)}},h=yt("Tag",s,r),i=P(()=>{const{type:d,size:v,color:{color:p,textColor:f}={}}=e,{common:{cubicBezierEaseInOut:m},self:{padding:_,closeMargin:x,borderRadius:B,opacityDisabled:z,textColorCheckable:C,textColorHoverCheckable:k,textColorPressedCheckable:S,textColorChecked:O,colorCheckable:V,colorHoverCheckable:j,colorPressedCheckable:q,colorChecked:Y,colorCheckedHover:ae,colorCheckedPressed:M,closeBorderRadius:T,fontWeightStrong:ee,[W("colorBordered",d)]:me,[W("closeSize",v)]:ve,[W("closeIconSize",v)]:ge,[W("fontSize",v)]:be,[W("height",v)]:$e,[W("color",d)]:dt,[W("textColor",d)]:ut,[W("border",d)]:gt,[W("closeIconColor",d)]:Pe,[W("closeIconColorHover",d)]:ft,[W("closeIconColorPressed",d)]:pt,[W("closeColorHover",d)]:ht,[W("closeColorPressed",d)]:mt}}=l.value,fe=Ct(x);return{"--n-font-weight-strong":ee,"--n-avatar-size-override":`calc(${$e} - 8px)`,"--n-bezier":m,"--n-border-radius":B,"--n-border":gt,"--n-close-icon-size":ge,"--n-close-color-pressed":mt,"--n-close-color-hover":ht,"--n-close-border-radius":T,"--n-close-icon-color":Pe,"--n-close-icon-color-hover":ft,"--n-close-icon-color-pressed":pt,"--n-close-icon-color-disabled":Pe,"--n-close-margin-top":fe.top,"--n-close-margin-right":fe.right,"--n-close-margin-bottom":fe.bottom,"--n-close-margin-left":fe.left,"--n-close-size":ve,"--n-color":p||(o.value?me:dt),"--n-color-checkable":V,"--n-color-checked":Y,"--n-color-checked-hover":ae,"--n-color-checked-pressed":M,"--n-color-hover-checkable":j,"--n-color-pressed-checkable":q,"--n-font-size":be,"--n-height":$e,"--n-opacity-disabled":z,"--n-padding":_,"--n-text-color":f||ut,"--n-text-color-checkable":C,"--n-text-color-checked":O,"--n-text-color-hover-checkable":k,"--n-text-color-pressed-checkable":S}}),b=n?re("tag",P(()=>{let d="";const{type:v,size:p,color:{color:f,textColor:m}={}}=e;return d+=v[0],d+=p[0],f&&(d+=`a${Te(f)}`),m&&(d+=`b${Te(m)}`),o.value&&(d+="c"),d}),i,e):void 0;return Object.assign(Object.assign({},g),{rtlEnabled:h,mergedClsPrefix:r,contentRef:t,mergedBordered:o,handleClick:a,handleCloseClick:u,cssVars:n?void 0:i,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender})},render(){var e,t;const{mergedClsPrefix:o,rtlEnabled:r,closable:n,color:{borderColor:s}={},round:l,onRender:a,$slots:u}=this;a==null||a();const g=Re(u.avatar,i=>i&&c("div",{class:`${o}-tag__avatar`},i)),h=Re(u.icon,i=>i&&c("div",{class:`${o}-tag__icon`},i));return c("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:r,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:l,[`${o}-tag--avatar`]:g,[`${o}-tag--icon`]:h,[`${o}-tag--closable`]:n}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},h||g,c("span",{class:`${o}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&n?c(xt,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:l,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?c("div",{class:`${o}-tag__border`,style:{borderColor:s}}):null)}});function to(e){const{borderRadius:t,boxShadow2:o,baseColor:r}=e;return Object.assign(Object.assign({},St),{borderRadius:t,boxShadow:o,color:Ce(r,"rgba(0, 0, 0, .85)"),textColor:r})}const et=Se({name:"Tooltip",common:ue,peers:{Popover:_t},self:to}),oo=Se({name:"Ellipsis",common:ue,peers:{Tooltip:et}}),ro=Object.assign(Object.assign({},wt),N.props),no=L({name:"Tooltip",props:ro,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=Q(e),o=N("Tooltip","-tooltip",void 0,et,e,t),r=R(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(s){r.value.setShow(s)}}),{popoverRef:r,mergedTheme:o,popoverThemeOverrides:P(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return c(we,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),so=y("ellipsis",{overflow:"hidden"},[ce("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),$("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),$("cursor-pointer",`
 cursor: pointer;
 `)]);function Ue(e){return`${e}-ellipsis--line-clamp`}function Le(e,t){return`${e}-ellipsis--cursor-${t}`}const io=Object.assign(Object.assign({},N.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),lo=L({name:"Ellipsis",inheritAttrs:!1,props:io,setup(e,{slots:t,attrs:o}){const r=zt(),n=N("Ellipsis","-ellipsis",so,oo,e,r),s=R(null),l=R(null),a=R(null),u=R(!1),g=P(()=>{const{lineClamp:f}=e,{value:m}=u;return f!==void 0?{textOverflow:"","-webkit-line-clamp":m?"":f}:{textOverflow:m?"":"ellipsis","-webkit-line-clamp":""}});function h(){let f=!1;const{value:m}=u;if(m)return!0;const{value:_}=s;if(_){const{lineClamp:x}=e;if(d(_),x!==void 0)f=_.scrollHeight<=_.offsetHeight;else{const{value:B}=l;B&&(f=B.getBoundingClientRect().width<=_.getBoundingClientRect().width)}v(_,f)}return f}const i=P(()=>e.expandTrigger==="click"?()=>{var f;const{value:m}=u;m&&((f=a.value)===null||f===void 0||f.setShow(!1)),u.value=!m}:void 0);kt(()=>{var f;e.tooltip&&((f=a.value)===null||f===void 0||f.setShow(!1))});const b=()=>c("span",Object.assign({},Bt(o,{class:[`${r.value}-ellipsis`,e.lineClamp!==void 0?Ue(r.value):void 0,e.expandTrigger==="click"?Le(r.value,"pointer"):void 0],style:g.value}),{ref:"triggerRef",onClick:i.value,onMouseenter:e.expandTrigger==="click"?h:void 0}),e.lineClamp?t:c("span",{ref:"triggerInnerRef"},t));function d(f){if(!f)return;const m=g.value,_=Ue(r.value);e.lineClamp!==void 0?p(f,_,"add"):p(f,_,"remove");for(const x in m)f.style[x]!==m[x]&&(f.style[x]=m[x])}function v(f,m){const _=Le(r.value,"pointer");e.expandTrigger==="click"&&!m?p(f,_,"add"):p(f,_,"remove")}function p(f,m,_){_==="add"?f.classList.contains(m)||f.classList.add(m):f.classList.contains(m)&&f.classList.remove(m)}return{mergedTheme:n,triggerRef:s,triggerInnerRef:l,tooltipRef:a,handleClick:i,renderTrigger:b,getTooltipDisabled:h}},render(){var e;const{tooltip:t,renderTrigger:o,$slots:r}=this;if(t){const{mergedTheme:n}=this;return c(no,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip}),{trigger:o,default:(e=r.tooltip)!==null&&e!==void 0?e:r.default})}else return o()}});function ao(e){const{baseColor:t,textColor2:o,bodyColor:r,cardColor:n,dividerColor:s,actionColor:l,scrollbarColor:a,scrollbarColorHover:u,invertedColor:g}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:l,headerColor:n,headerColorInverted:g,footerColor:l,footerColorInverted:g,headerBorderColor:s,headerBorderColorInverted:g,footerBorderColor:s,footerBorderColorInverted:g,siderBorderColor:s,siderBorderColorInverted:g,siderColor:n,siderColorInverted:g,siderToggleButtonBorder:`1px solid ${s}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:Ce(r,a),siderToggleBarColorHover:Ce(r,u),__invertScrollbar:"true"}}const tt=Se({name:"Layout",common:ue,peers:{Scrollbar:$t},self:ao}),co=_e("n-layout-sider"),ot={type:String,default:"static"},uo=y("layout",`
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
`,[y("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),$("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),go={embedded:Boolean,position:ot,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},rt=_e("n-layout");function nt(e){return L({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},N.props),go),setup(t){const o=R(null),r=R(null),{mergedClsPrefixRef:n,inlineThemeDisabled:s}=Q(t),l=N("Layout","-layout",uo,tt,t,n);function a(p,f){if(t.nativeScrollbar){const{value:m}=o;m&&(f===void 0?m.scrollTo(p):m.scrollTo(p,f))}else{const{value:m}=r;m&&m.scrollTo(p,f)}}xe(rt,t);let u=0,g=0;const h=p=>{var f;const m=p.target;u=m.scrollLeft,g=m.scrollTop,(f=t.onScroll)===null||f===void 0||f.call(t,p)};Ae(()=>{if(t.nativeScrollbar){const p=o.value;p&&(p.scrollTop=g,p.scrollLeft=u)}});const i={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},b={scrollTo:a},d=P(()=>{const{common:{cubicBezierEaseInOut:p},self:f}=l.value;return{"--n-bezier":p,"--n-color":t.embedded?f.colorEmbedded:f.color,"--n-text-color":f.textColor}}),v=s?re("layout",P(()=>t.embedded?"e":""),d,t):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:i,mergedTheme:l,handleNativeElScroll:h,cssVars:s?void 0:d,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender},b)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const n=r?this.hasSiderStyle:void 0,s=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return c("div",{class:s,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):c(We,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const fo=nt(!1),po=nt(!0),ho=y("layout-sider",`
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
`,[$("bordered",[D("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),D("left-placement",[$("bordered",[D("border",`
 right: 0;
 `)])]),$("right-placement",`
 justify-content: flex-start;
 `,[$("bordered",[D("border",`
 left: 0;
 `)]),$("collapsed",[y("layout-toggle-button",[y("base-icon",`
 transform: rotate(180deg);
 `)]),y("layout-toggle-bar",[H("&:hover",[D("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),y("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[y("base-icon",`
 transform: rotate(0);
 `)]),y("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[H("&:hover",[D("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),$("collapsed",[y("layout-toggle-bar",[H("&:hover",[D("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),y("layout-toggle-button",[y("base-icon",`
 transform: rotate(0);
 `)])]),y("layout-toggle-button",`
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
 `,[y("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),y("layout-toggle-bar",`
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
 `),H("&:hover",[D("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),D("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),H("&:hover",[D("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),D("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),y("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),$("show-content",[y("layout-sider-scroll-container",{opacity:1})]),$("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),mo=L({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(ze,{clsPrefix:e},{default:()=>c(Yt,null)}))}}),vo=L({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),bo={position:ot,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},yo=L({name:"LayoutSider",props:Object.assign(Object.assign({},N.props),bo),setup(e){const t=Pt(rt),o=R(null),r=R(null),n=R(e.defaultCollapsed),s=He(he(e,"collapsed"),n),l=P(()=>X(s.value?e.collapsedWidth:e.width)),a=P(()=>e.collapseMode!=="transform"?{}:{minWidth:X(e.width)}),u=P(()=>t?t.siderPlacement:"left");function g(z,C){if(e.nativeScrollbar){const{value:k}=o;k&&(C===void 0?k.scrollTo(z):k.scrollTo(z,C))}else{const{value:k}=r;k&&k.scrollTo(z,C)}}function h(){const{"onUpdate:collapsed":z,onUpdateCollapsed:C,onExpand:k,onCollapse:S}=e,{value:O}=s;C&&te(C,!O),z&&te(z,!O),n.value=!O,O?k&&te(k):S&&te(S)}let i=0,b=0;const d=z=>{var C;const k=z.target;i=k.scrollLeft,b=k.scrollTop,(C=e.onScroll)===null||C===void 0||C.call(e,z)};Ae(()=>{if(e.nativeScrollbar){const z=o.value;z&&(z.scrollTop=b,z.scrollLeft=i)}}),xe(co,{collapsedRef:s,collapseModeRef:he(e,"collapseMode")});const{mergedClsPrefixRef:v,inlineThemeDisabled:p}=Q(e),f=N("Layout","-layout-sider",ho,tt,e,v);function m(z){var C,k;z.propertyName==="max-width"&&(s.value?(C=e.onAfterLeave)===null||C===void 0||C.call(e):(k=e.onAfterEnter)===null||k===void 0||k.call(e))}const _={scrollTo:g},x=P(()=>{const{common:{cubicBezierEaseInOut:z},self:C}=f.value,{siderToggleButtonColor:k,siderToggleButtonBorder:S,siderToggleBarColor:O,siderToggleBarColorHover:V}=C,j={"--n-bezier":z,"--n-toggle-button-color":k,"--n-toggle-button-border":S,"--n-toggle-bar-color":O,"--n-toggle-bar-color-hover":V};return e.inverted?(j["--n-color"]=C.siderColorInverted,j["--n-text-color"]=C.textColorInverted,j["--n-border-color"]=C.siderBorderColorInverted,j["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColorInverted,j.__invertScrollbar=C.__invertScrollbar):(j["--n-color"]=C.siderColor,j["--n-text-color"]=C.textColor,j["--n-border-color"]=C.siderBorderColor,j["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColor),j}),B=p?re("layout-sider",P(()=>e.inverted?"a":"b"),x,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:v,mergedTheme:f,styleMaxWidth:l,mergedCollapsed:s,scrollContainerStyle:a,siderPlacement:u,handleNativeElScroll:d,handleTransitionend:m,handleTriggerClick:h,inlineThemeDisabled:p,cssVars:x,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender},_)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:X(this.width)}]},this.nativeScrollbar?c("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(We,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?c(vo,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(mo,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${t}-layout-sider__border`}):null)}}),Co=H([y("progress",{display:"inline-block"},[y("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),$("line",`
 width: 100%;
 display: block;
 `,[y("progress-content",`
 display: flex;
 align-items: center;
 `,[y("progress-graph",{flex:1})]),y("progress-custom-content",{marginLeft:"14px"}),y("progress-icon",`
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
 `)])]),$("circle, dashboard",{width:"120px"},[y("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),y("progress-text",`
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
 `),y("progress-icon",`
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
 `,[y("progress-text",`
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
 `)]),y("progress-content",{position:"relative"}),y("progress-graph",{position:"relative"},[y("progress-graph-circle",[H("svg",{verticalAlign:"bottom"}),y("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[$("empty",{opacity:0})]),y("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),y("progress-graph-line",[$("indicator-inside",[y("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[y("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),y("progress-graph-line-indicator",`
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
 `,[y("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),y("progress-graph-line-indicator",`
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
 `)]),y("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[y("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[$("processing",[H("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),H("@keyframes progress-processing-animation",`
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
 `)]),xo={success:c(Ve,null),error:c(qe,null),warning:c(Ye,null),info:c(Xe,null)},_o=L({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const o=P(()=>X(e.height)),r=P(()=>e.railBorderRadius!==void 0?X(e.railBorderRadius):e.height!==void 0?X(e.height,{c:.5}):""),n=P(()=>e.fillBorderRadius!==void 0?X(e.fillBorderRadius):e.railBorderRadius!==void 0?X(e.railBorderRadius):e.height!==void 0?X(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:s,railColor:l,railStyle:a,percentage:u,unit:g,indicatorTextColor:h,status:i,showIndicator:b,fillColor:d,processing:v,clsPrefix:p}=e;return c("div",{class:`${p}-progress-content`,role:"none"},c("div",{class:`${p}-progress-graph`,"aria-hidden":!0},c("div",{class:[`${p}-progress-graph-line`,{[`${p}-progress-graph-line--indicator-${s}`]:!0}]},c("div",{class:`${p}-progress-graph-line-rail`,style:[{backgroundColor:l,height:o.value,borderRadius:r.value},a]},c("div",{class:[`${p}-progress-graph-line-fill`,v&&`${p}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:d,height:o.value,lineHeight:o.value,borderRadius:n.value}},s==="inside"?c("div",{class:`${p}-progress-graph-line-indicator`,style:{color:h}},t.default?t.default():`${u}${g}`):null)))),b&&s==="outside"?c("div",null,t.default?c("div",{class:`${p}-progress-custom-content`,style:{color:h},role:"none"},t.default()):i==="default"?c("div",{role:"none",class:`${p}-progress-icon ${p}-progress-icon--as-text`,style:{color:h}},u,g):c("div",{class:`${p}-progress-icon`,"aria-hidden":!0},c(ze,{clsPrefix:p},{default:()=>xo[i]}))):null)}}}),So={success:c(Ve,null),error:c(qe,null),warning:c(Ye,null),info:c(Xe,null)},wo=L({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){function o(r,n,s){const{gapDegree:l,viewBoxWidth:a,strokeWidth:u}=e,g=50,h=0,i=g,b=0,d=2*g,v=50+u/2,p=`M ${v},${v} m ${h},${i}
      a ${g},${g} 0 1 1 ${b},${-d}
      a ${g},${g} 0 1 1 ${-b},${d}`,f=Math.PI*2*g,m={stroke:s,strokeDasharray:`${r/100*(f-l)}px ${a*8}px`,strokeDashoffset:`-${l/2}px`,transformOrigin:n?"center":void 0,transform:n?`rotate(${n}deg)`:void 0};return{pathString:p,pathStyle:m}}return()=>{const{fillColor:r,railColor:n,strokeWidth:s,offsetDegree:l,status:a,percentage:u,showIndicator:g,indicatorTextColor:h,unit:i,gapOffsetDegree:b,clsPrefix:d}=e,{pathString:v,pathStyle:p}=o(100,0,n),{pathString:f,pathStyle:m}=o(u,l,r),_=100+s;return c("div",{class:`${d}-progress-content`,role:"none"},c("div",{class:`${d}-progress-graph`,"aria-hidden":!0},c("div",{class:`${d}-progress-graph-circle`,style:{transform:b?`rotate(${b}deg)`:void 0}},c("svg",{viewBox:`0 0 ${_} ${_}`},c("g",null,c("path",{class:`${d}-progress-graph-circle-rail`,d:v,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:p})),c("g",null,c("path",{class:[`${d}-progress-graph-circle-fill`,u===0&&`${d}-progress-graph-circle-fill--empty`],d:f,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:m}))))),g?c("div",null,t.default?c("div",{class:`${d}-progress-custom-content`,role:"none"},t.default()):a!=="default"?c("div",{class:`${d}-progress-icon`,"aria-hidden":!0},c(ze,{clsPrefix:d},{default:()=>So[a]})):c("div",{class:`${d}-progress-text`,style:{color:h},role:"none"},c("span",{class:`${d}-progress-text__percentage`},u),c("span",{class:`${d}-progress-text__unit`},i))):null)}}});function je(e,t,o=100){return`m ${o/2} ${o/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const zo=L({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const o=P(()=>e.percentage.map((n,s)=>`${Math.PI*n/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*s)-e.circleGap*s)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:r,strokeWidth:n,circleGap:s,showIndicator:l,fillColor:a,railColor:u,railStyle:g,percentage:h,clsPrefix:i}=e;return c("div",{class:`${i}-progress-content`,role:"none"},c("div",{class:`${i}-progress-graph`,"aria-hidden":!0},c("div",{class:`${i}-progress-graph-circle`},c("svg",{viewBox:`0 0 ${r} ${r}`},h.map((b,d)=>c("g",{key:d},c("path",{class:`${i}-progress-graph-circle-rail`,d:je(r/2-n/2*(1+2*d)-s*d,n,r),"stroke-width":n,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:u[d]},g[d]]}),c("path",{class:[`${i}-progress-graph-circle-fill`,b===0&&`${i}-progress-graph-circle-fill--empty`],d:je(r/2-n/2*(1+2*d)-s*d,n,r),"stroke-width":n,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:o.value[d],strokeDashoffset:0,stroke:a[d]}})))))),l&&t.default?c("div",null,c("div",{class:`${i}-progress-text`},t.default())):null)}}}),ko=Object.assign(Object.assign({},N.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),Bo=L({name:"Progress",props:ko,setup(e){const t=P(()=>e.indicatorPlacement||e.indicatorPosition),o=P(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:n}=Q(e),s=N("Progress","-progress",Co,Tt,e,r),l=P(()=>{const{status:u}=e,{common:{cubicBezierEaseInOut:g},self:{fontSize:h,fontSizeCircle:i,railColor:b,railHeight:d,iconSizeCircle:v,iconSizeLine:p,textColorCircle:f,textColorLineInner:m,textColorLineOuter:_,lineBgProcessing:x,fontWeightCircle:B,[W("iconColor",u)]:z,[W("fillColor",u)]:C}}=s.value;return{"--n-bezier":g,"--n-fill-color":C,"--n-font-size":h,"--n-font-size-circle":i,"--n-font-weight-circle":B,"--n-icon-color":z,"--n-icon-size-circle":v,"--n-icon-size-line":p,"--n-line-bg-processing":x,"--n-rail-color":b,"--n-rail-height":d,"--n-text-color-circle":f,"--n-text-color-line-inner":m,"--n-text-color-line-outer":_}}),a=n?re("progress",P(()=>e.status[0]),l,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:o,cssVars:n?void 0:l,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:o,showIndicator:r,status:n,railColor:s,railStyle:l,color:a,percentage:u,viewBoxWidth:g,strokeWidth:h,mergedIndicatorPlacement:i,unit:b,borderRadius:d,fillBorderRadius:v,height:p,processing:f,circleGap:m,mergedClsPrefix:_,gapDeg:x,gapOffsetDegree:B,themeClass:z,$slots:C,onRender:k}=this;return k==null||k(),c("div",{class:[z,`${_}-progress`,`${_}-progress--${e}`,`${_}-progress--${n}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":u,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?c(wo,{clsPrefix:_,status:n,showIndicator:r,indicatorTextColor:o,railColor:s,fillColor:a,railStyle:l,offsetDegree:this.offsetDegree,percentage:u,viewBoxWidth:g,strokeWidth:h,gapDegree:x===void 0?e==="dashboard"?75:0:x,gapOffsetDegree:B,unit:b},C):e==="line"?c(_o,{clsPrefix:_,status:n,showIndicator:r,indicatorTextColor:o,railColor:s,fillColor:a,railStyle:l,percentage:u,processing:f,indicatorPlacement:i,unit:b,fillBorderRadius:v,railBorderRadius:d,height:p},C):e==="multiple-circle"?c(zo,{clsPrefix:_,strokeWidth:h,railColor:s,fillColor:a,railStyle:l,viewBoxWidth:g,percentage:u,showIndicator:r,circleGap:m},C):null)}});function $o(e){const{primaryColorHover:t,borderColor:o}=e;return{resizableTriggerColorHover:t,resizableTriggerColor:o}}const Po={name:"Split",common:ue,self:$o},To=y("split",`
 display: flex;
 width: 100%;
 height: 100%;
`,[$("horizontal",`
 flex-direction: row;
 `),$("vertical",`
 flex-direction: column;
 `),y("split-pane-1",`
 overflow: hidden;
 `),y("split-pane-2",`
 overflow: hidden;
 flex: 1;
 `),D("resize-trigger",`
 background-color: var(--n-resize-trigger-color);
 transition: background-color .3s var(--n-bezier);
 `,[$("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `),H("&:hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)])]),Ro=Object.assign(Object.assign({},N.props),{direction:{type:String,default:"horizontal"},resizeTriggerSize:{type:Number,default:3},disabled:Boolean,defaultSize:{type:[String,Number],default:.5},"onUpdate:size":[Function,Array],onUpdateSize:[Function,Array],size:[String,Number],min:{type:[String,Number],default:0},max:{type:[String,Number],default:1},pane1Class:String,pane1Style:[Object,String],pane2Class:String,pane2Style:[Object,String],onDragStart:Function,onDragMove:Function,onDragEnd:Function,watchProps:Array}),Io=L({name:"Split",props:Ro,setup(e){var t;const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=Q(e),n=N("Split","-split",To,Po,e,o),s=P(()=>{const{common:{cubicBezierEaseInOut:x},self:{resizableTriggerColor:B,resizableTriggerColorHover:z}}=n.value;return{"--n-bezier":x,"--n-resize-trigger-color":B,"--n-resize-trigger-color-hover":z}}),l=R(null),a=R(!1),u=he(e,"size"),g=R(e.defaultSize);!((t=e.watchProps)===null||t===void 0)&&t.includes("defaultSize")&&Rt(()=>g.value=e.defaultSize);const h=x=>{const B=e["onUpdate:size"];e.onUpdateSize&&te(e.onUpdateSize,x),B&&te(B,x),g.value=x},i=He(u,g),b=P(()=>{const x=i.value;if(typeof x=="string")return{flex:`0 0 ${x}`};if(typeof x=="number"){const B=x*100;return{flex:`0 0 calc(${B}% - ${e.resizeTriggerSize*B/100}px)`}}}),d=P(()=>e.direction==="horizontal"?{width:`${e.resizeTriggerSize}px`,height:"100%"}:{width:"100%",height:`${e.resizeTriggerSize}px`}),v=P(()=>{const x=e.direction==="horizontal";return{width:x?`${e.resizeTriggerSize}px`:"",height:x?"":`${e.resizeTriggerSize}px`,cursor:e.direction==="horizontal"?"col-resize":"row-resize"}});let p=0;const f=x=>{x.preventDefault(),a.value=!0,e.onDragStart&&e.onDragStart(x);const B="mousemove",z="mouseup",C=O=>{m(O),e.onDragMove&&e.onDragMove(O)},k=()=>{De(B,document,C),De(z,document,k),a.value=!1,e.onDragEnd&&e.onDragEnd(x),document.body.style.cursor=""};document.body.style.cursor=v.value.cursor,Ie(B,document,C),Ie(z,document,k);const S=l.value;if(S){const O=S.getBoundingClientRect();e.direction==="horizontal"?p=x.clientX-O.left:p=O.top-x.clientY}m(x)};function m(x){var B,z;const C=(z=(B=l.value)===null||B===void 0?void 0:B.parentElement)===null||z===void 0?void 0:z.getBoundingClientRect();if(!C)return;const{direction:k}=e,S=C.width-e.resizeTriggerSize,O=C.height-e.resizeTriggerSize,V=k==="horizontal"?S:O,j=k==="horizontal"?x.clientX-C.left-p:x.clientY-C.top+p,{min:q,max:Y}=e,ae=typeof q=="string"?Fe(q):q*V,M=typeof Y=="string"?Fe(Y):Y*V;let T=j;T=Math.max(T,ae),T=Math.min(T,M,V),typeof i.value=="string"?h(`${T}px`):h(T/V)}const _=r?re("split",void 0,s,e):void 0;return{themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender,cssVars:r?void 0:s,resizeTriggerElRef:l,isDragging:a,mergedClsPrefix:o,resizeTriggerWrapperStyle:v,resizeTriggerStyle:d,handleMouseDown:f,firstPaneStyle:b}},render(){var e,t,o,r,n;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{class:[`${this.mergedClsPrefix}-split`,`${this.mergedClsPrefix}-split--${this.direction}`,this.themeClass],style:this.cssVars},c("div",{class:[`${this.mergedClsPrefix}-split-pane-1`,this.pane1Class],style:[this.firstPaneStyle,this.pane1Style]},(o=(t=this.$slots)[1])===null||o===void 0?void 0:o.call(t)),!this.disabled&&c("div",{ref:"resizeTriggerElRef",class:`${this.mergedClsPrefix}-split__resize-trigger-wrapper`,style:this.resizeTriggerWrapperStyle,onMousedown:this.handleMouseDown},It(this.$slots["resize-trigger"],()=>[c("div",{style:this.resizeTriggerStyle,class:[`${this.mergedClsPrefix}-split__resize-trigger`,this.isDragging&&`${this.mergedClsPrefix}-split__resize-trigger--hover`]})])),c("div",{class:[`${this.mergedClsPrefix}-split-pane-2`,this.pane2Class],style:this.pane2Style},(n=(r=this.$slots)[2])===null||n===void 0?void 0:n.call(r)))}}),Fo=y("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[H("&:first-child","margin-top: 0;"),H("&:last-child","margin-bottom: 0;")]),Do=Object.assign(Object.assign({},N.props),{depth:[String,Number]}),Oo=L({name:"P",props:Do,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=N("Typography","-p",Fo,Ge,e,t),n=P(()=>{const{depth:l}=e,a=l||"1",{common:{cubicBezierEaseInOut:u},self:{pFontSize:g,pLineHeight:h,pMargin:i,pTextColor:b,[`pTextColor${a}Depth`]:d}}=r.value;return{"--n-bezier":u,"--n-font-size":g,"--n-line-height":h,"--n-margin":i,"--n-text-color":l===void 0?b:d}}),s=o?re("p",P(()=>`${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),c("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),Eo=y("text",`
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
 `)]),Uo=Object.assign(Object.assign({},N.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),Lo=L({name:"Text",props:Uo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=N("Typography","-text",Eo,Ge,e,t),n=P(()=>{const{depth:l,type:a}=e,u=a==="default"?l===void 0?"textColor":`textColor${l}Depth`:W("textColor",a),{common:{fontWeightStrong:g,fontFamilyMono:h,cubicBezierEaseInOut:i},self:{codeTextColor:b,codeBorderRadius:d,codeColor:v,codeBorder:p,[u]:f}}=r.value;return{"--n-bezier":i,"--n-text-color":f,"--n-font-weight-strong":g,"--n-font-famliy-mono":h,"--n-code-border-radius":d,"--n-code-text-color":b,"--n-code-color":v,"--n-code-border":p}}),s=o?re("text",P(()=>`${e.type[0]}${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:t,compitableTag:Ft(e,["as","tag"]),cssVars:o?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e,t,o;const{mergedClsPrefix:r}=this;(e=this.onRender)===null||e===void 0||e.call(this);const n=[`${r}-text`,this.themeClass,{[`${r}-text--code`]:this.code,[`${r}-text--delete`]:this.delete,[`${r}-text--strong`]:this.strong,[`${r}-text--italic`]:this.italic,[`${r}-text--underline`]:this.underline}],s=(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t);return this.code?c("code",{class:n,style:this.cssVars},this.delete?c("del",null,s):s):this.delete?c("del",{class:n,style:this.cssVars},s):c(this.compitableTag||"span",{class:n,style:this.cssVars},s)}}),jo=L({__name:"CompressUpload",emits:["change"],setup(e,{expose:t,emit:o}){t();const r=o;function n(u){const g=Array.from(u).map(h=>({file:h,id:qt(),name:h.name,fileName:Dt(h.name),size:h.size,type:h.type,src:URL.createObjectURL(h)}));r("change",g)}function s(u){const g=u.target;g.files&&n(g.files)}function l(u){var h;const g=(h=u.dataTransfer)==null?void 0:h.files;g&&g.length&&n(g)}const a={emit:r,getFileList:n,handleChange:s,handleDropStop:l};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),Mo={class:"text-center"};function No(e,t,o,r,n,s){const l=Lo,a=Oo;return U(),A("div",{id:"CompressUpload",class:"relative border border-border rounded-6 border-dashed p-10 transition-all hover:border-primary",onDragover:t[0]||(t[0]=Oe(()=>{},["prevent"])),onDrop:Oe(r.handleDropStop,["stop","prevent"])},[t[3]||(t[3]=w("label",{class:"absolute left-0 top-0 z-1 size-full cursor-pointer",for:"image-uploader"},null,-1)),w("input",{id:"image-uploader",class:"hidden",type:"file",accept:"image/png,image/jpeg,image/avif",multiple:"",onChange:r.handleChange},null,32),w("div",Mo,[E(l,{depth:"3"},{default:I(()=>t[1]||(t[1]=[w("span",{class:"i-mage-image-upload text-40"},null,-1)])),_:1})]),E(a,{class:"mt-0 text-center text-14",depth:"3"},{default:I(()=>t[2]||(t[2]=[Z(" 拖拽文件到该区域或点击选择图片 ")])),_:1})],32)}const Ao=ne(jo,[["render",No],["__file","CompressUpload.vue"]]),Wo=L({__name:"CompressProgress",props:{compressList:{},successList:{},failedList:{},compressEnd:{type:Boolean},percentage:{}},setup(e,{expose:t}){t();const o=e,r=P(()=>o.compressEnd?o.successList.length===o.compressList.length?"success":o.failedList.length===o.compressList.length?"error":"warning":"default"),n={props:o,getProgressStatus:r};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Ho={id:"CompressProgress",class:"mt-10 flex items-center"},Vo={key:0,class:"ml-4 flex items-center"},qo={key:0,class:"i-solar-check-circle-bold ml-4 text-success"},Yo={class:"text-14"},Xo={class:"text-success"},Go={class:"text-error"};function Ko(e,t,o,r,n,s){const l=Bo,a=we;return U(),A("div",Ho,[E(l,{class:"flex-1",type:"line",status:r.getProgressStatus,percentage:o.percentage,"indicator-placement":"inside"},null,8,["status","percentage"]),o.compressEnd?(U(),A("div",Vo,[o.successList.length===o.compressList.length?(U(),A("div",qo)):(U(),ie(a,{key:1},{trigger:I(()=>[w("div",{class:de(["i-solar-info-circle-bold",{"text-error":o.failedList.length===o.compressList.length,"text-warning":o.successList.length!==o.compressList.length}])},null,2)]),default:I(()=>[w("div",Yo,[w("div",null,"总数："+G(o.compressList.length),1),w("div",null,[t[0]||(t[0]=w("span",null,"成功：",-1)),w("span",Xo,G(o.successList.length),1)]),w("div",null,[t[1]||(t[1]=w("span",null,"失败：",-1)),w("span",Go,G(o.failedList.length),1)])])]),_:1}))])):K("",!0)])}const Jo=ne(Wo,[["render",Ko],["__file","CompressProgress.vue"]]),Zo=L({__name:"CompressOption",props:{checked:{required:!0},checkedModifiers:{}},emits:["update:checked"],setup(e,{expose:t}){t();const o=Ke(e,"checked"),r=[{label:"WebP",value:"webp",tip:"压缩率较高，大多数浏览器支持"},{label:"AVIF",value:"avif",tip:"压缩率极高，部分现代浏览器支持"},{label:"JPEG",value:"jpeg",tip:"兼容性最好，所有浏览器支持"}];function n(l){o.value=l}const s={modelChecked:o,outputs:r,handleChange:n};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),Qo={id:"CompressOption"},er={class:"color-grey"};function tr(e,t,o,r,n,s){const l=Ht,a=Be;return U(),A("div",Qo,[t[0]||(t[0]=w("div",{class:"font-600"}," 图片压缩格式 ",-1)),E(a,{vertical:""},{default:I(()=>[(U(),A(ke,null,Je(r.outputs,u=>E(l,{key:u.value,checked:r.modelChecked===u.value,value:u.value,onChange:g=>r.handleChange(u.value)},{default:I(()=>[Z(G(u.label)+" ",1),w("span",er,G(u.tip),1)]),_:2},1032,["checked","value","onChange"])),64))]),_:1})])}const or=ne(Zo,[["render",tr],["__file","CompressOption.vue"]]),rr=L({__name:"CompressPreview",props:{src:{},compressedSrc:{}},setup(e,{expose:t}){t();const o=R(.5),r=R(),{width:n}=Ot(r),s={split:o,leftBox:r,width:n};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),nr={id:"CompressPreview",class:"mb-10"},sr={key:0,class:"flex justify-between text-14"},ir={class:"h-250 overflow-hidden rounded-6"},lr=["src"],ar={ref:"leftBox",class:"size-full"},cr=["src"],dr={class:"size-full"},ur=["src"];function gr(e,t,o,r,n,s){const l=Io;return U(),A("div",nr,[o.src&&o.compressedSrc?(U(),A("div",sr,t[1]||(t[1]=[w("span",null,"压缩前",-1),w("span",null,"压缩后",-1)]))):K("",!0),w("div",ir,[o.src&&!o.compressedSrc?(U(),A("img",{key:0,class:"size-full object-cover",src:o.src},null,8,lr)):K("",!0),o.src&&o.compressedSrc?(U(),ie(l,{key:1,size:r.split,"onUpdate:size":t[0]||(t[0]=a=>r.split=a),"resize-trigger-size":2,class:"relative h-full"},{1:I(()=>[w("div",ar,[w("img",{class:"absolute left-0 top-0 z-1 size-full object-cover",src:o.src,style:Et({clip:`rect(auto, ${r.width}px, auto, auto)`})},null,12,cr)],512)]),2:I(()=>[w("div",dr,[w("img",{class:"absolute left-0 top-0 size-full object-cover",src:o.compressedSrc},null,8,ur)])]),"resize-trigger":I(()=>t[2]||(t[2]=[w("div",{class:"relative z-1 h-full bg-primary"},[w("div",{class:"size-40 flex items-center border-2 border-primary rounded-1/2 border-solid absolute-center"},[w("span",{class:"i-ri-arrow-left-s-fill text-22 color-primary"}),w("span",{class:"i-ri-arrow-right-s-fill text-22 color-primary"})])],-1)])),_:1},8,["size"])):K("",!0)])])}const fr=ne(rr,[["render",gr],["__file","CompressPreview.vue"]]),pr=L({__name:"CompressList",props:Ut({list:{}},{active:{required:!0},activeModifiers:{}}),emits:["update:active"],setup(e,{expose:t}){t();const o=Ke(e,"active");function r(s){o.value=s}const n={modelActive:o,handleSelect:r,get downloadFile(){return Ze},get formatFileSize(){return Lt}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),hr={class:"image-list"},mr=["onClick"],vr={class:"h-150 w-full"},br=["src"],yr={class:"flex items-center justify-between px-8 py-4"},Cr={class:"text-12"},xr=["onClick"];function _r(e,t,o,r,n,s){const l=Qe,a=lo,u=eo,g=we,h=Be;return U(),A("div",hr,[(U(!0),A(ke,null,Je(o.list,i=>(U(),A("div",{key:i.id,class:de(["cursor-pointer overflow-hidden border border-border rounded-6 border-solid transition-all not-first:mt-10 hover:border-primary",{"border-primary":r.modelActive===i.id,"border-error!":i.status==="failed"}]),onClick:b=>r.handleSelect(i.id)},[E(l,{show:i.status==="processing"},{default:I(()=>[w("div",vr,[w("img",{class:"size-full object-cover",src:i.src},null,8,br)])]),_:2},1032,["show"]),w("div",yr,[E(a,{class:de(["flex-1 text-12",{"text-error":i.status==="failed"}])},{default:I(()=>[Z(G(i.name),1)]),_:2},1032,["class"]),E(h,{size:4},{default:I(()=>[E(u,{class:de(["rounded-4",{"line-through":i.compressedFile}]),type:i.status==="failed"?"error":"default",size:"small"},{default:I(()=>[Z(G(r.formatFileSize(i.file.size)),1)]),_:2},1032,["class","type"]),i.compressedFile?(U(),ie(u,{key:0,class:"rounded-4",type:"success",size:"small"},{default:I(()=>[Z(G(r.formatFileSize(i.compressedFile.size)),1)]),_:2},1024)):K("",!0),i.failedInfo?(U(),ie(g,{key:1,class:"max-h-150 max-w-200",trigger:"hover",scrollable:""},{trigger:I(()=>t[0]||(t[0]=[w("div",{class:"i-solar-info-circle-bold text-error"},null,-1)])),default:I(()=>[w("div",Cr,G(i.failedInfo),1)]),_:2},1024)):K("",!0)]),_:2},1024)]),i.compressedFile?(U(),A("div",{key:0,class:"cursor-pointer border-t border-border border-t-solid bg-primary-1 text-center text-12 leading-30 transition-all dark:bg-primary-2 dark:hover:bg-primary-3 hover:bg-primary-2",onClick:b=>r.downloadFile(i.compressedFile,i.compressedFile.name)}," 点击下载 ",8,xr)):K("",!0)],10,mr))),128))])}const Sr=ne(pr,[["render",_r],["__file","CompressList.vue"]]);"stream"in Blob.prototype||Object.defineProperty(Blob.prototype,"stream",{value(){return new Response(this).body}}),"setBigUint64"in DataView.prototype||Object.defineProperty(DataView.prototype,"setBigUint64",{value(e,t,o){const r=Number(0xffffffffn&t),n=Number(t>>32n);this.setUint32(e+(o?0:4),r,o),this.setUint32(e+(o?4:0),n,o)}});var le=e=>new DataView(new ArrayBuffer(e)),J=e=>new Uint8Array(e.buffer||e),se=e=>new TextEncoder().encode(String(e)),oe=e=>Math.min(4294967295,Number(e)),Me=e=>Math.min(65535,Number(e));function wr(e,t){if(t===void 0||t instanceof Date||(t=new Date(t)),e instanceof File)return{isFile:1,t:t||new Date(e.lastModified),i:e.stream()};if(e instanceof Response)return{isFile:1,t:t||new Date(e.headers.get("Last-Modified")||Date.now()),i:e.body};if(t===void 0)t=new Date;else if(isNaN(t))throw new Error("Invalid modification date.");if(e===void 0)return{isFile:0,t};if(typeof e=="string")return{isFile:1,t,i:se(e)};if(e instanceof Blob)return{isFile:1,t,i:e.stream()};if(e instanceof Uint8Array||e instanceof ReadableStream)return{isFile:1,t,i:e};if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return{isFile:1,t,i:J(e)};if(Symbol.asyncIterator in e)return{isFile:1,t,i:st(e[Symbol.asyncIterator]())};throw new TypeError("Unsupported input format.")}function st(e,t=e){return new ReadableStream({async pull(o){let r=0;for(;o.desiredSize>r;){const n=await e.next();if(!n.value){o.close();break}{const s=zr(n.value);o.enqueue(s),r+=s.byteLength}}},cancel(o){var r;(r=t.throw)==null||r.call(t,o)}})}function zr(e){return typeof e=="string"?se(e):e instanceof Uint8Array?e:J(e)}function it(e,t,o){let[r,n]=function(s){return s?s instanceof Uint8Array?[s,1]:ArrayBuffer.isView(s)||s instanceof ArrayBuffer?[J(s),1]:[se(s),0]:[void 0,0]}(t);if(e instanceof File)return{o:ye(r||se(e.name)),u:BigInt(e.size),l:n};if(e instanceof Response){const s=e.headers.get("content-disposition"),l=s&&s.match(/;\s*filename\*?\s*=\s*(?:UTF-\d+''|)["']?([^;"'\r\n]*)["']?(?:;|$)/i),a=l&&l[1]||e.url&&new URL(e.url).pathname.split("/").findLast(Boolean),u=a&&decodeURIComponent(a),g=o||+e.headers.get("content-length");return{o:ye(r||se(u)),u:BigInt(g),l:n}}return r=ye(r,e!==void 0||o!==void 0),typeof e=="string"?{o:r,u:BigInt(se(e).length),l:n}:e instanceof Blob?{o:r,u:BigInt(e.size),l:n}:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?{o:r,u:BigInt(e.byteLength),l:n}:{o:r,u:kr(e,o),l:n}}function kr(e,t){return t>-1?BigInt(t):e?void 0:0n}function ye(e,t=1){if(!e||e.every(o=>o===47))throw new Error("The file must have a name.");if(t)for(;e[e.length-1]===47;)e=e.subarray(0,-1);else e[e.length-1]!==47&&(e=new Uint8Array([...e,47]));return e}var lt=new Uint32Array(256);for(let e=0;e<256;++e){let t=e;for(let o=0;o<8;++o)t=t>>>1^(1&t&&3988292384);lt[e]=t}function Ne(e,t=0){t^=-1;for(var o=0,r=e.length;o<r;o++)t=t>>>8^lt[255&t^e[o]];return(-1^t)>>>0}function at(e,t,o=0){const r=e.getSeconds()>>1|e.getMinutes()<<5|e.getHours()<<11,n=e.getDate()|e.getMonth()+1<<5|e.getFullYear()-1980<<9;t.setUint16(o,r,1),t.setUint16(o+2,n,1)}function Br({o:e,l:t},o){return 8*(!t||(o??function(r){try{$r.decode(r)}catch{return 0}return 1}(e)))}var $r=new TextDecoder("utf8",{fatal:1});function Pr(e,t=0){const o=le(30);return o.setUint32(0,1347093252),o.setUint32(4,754976768|t),at(e.t,o,10),o.setUint16(26,e.o.length,1),J(o)}async function*Tr(e){let{i:t}=e;if("then"in t&&(t=await t),t instanceof Uint8Array)yield t,e.m=Ne(t,0),e.u=BigInt(t.length);else{e.u=0n;const o=t.getReader();for(;;){const{value:r,done:n}=await o.read();if(n)break;e.m=Ne(r,e.m),e.u+=BigInt(r.length),yield r}}}function Rr(e,t){const o=le(16+(t?8:0));return o.setUint32(0,1347094280),o.setUint32(4,e.isFile?e.m:0,1),t?(o.setBigUint64(8,e.u,1),o.setBigUint64(16,e.u,1)):(o.setUint32(8,oe(e.u),1),o.setUint32(12,oe(e.u),1)),J(o)}function Ir(e,t,o=0,r=0){const n=le(46);return n.setUint32(0,1347092738),n.setUint32(4,755182848),n.setUint16(8,2048|o),at(e.t,n,12),n.setUint32(16,e.isFile?e.m:0,1),n.setUint32(20,oe(e.u),1),n.setUint32(24,oe(e.u),1),n.setUint16(28,e.o.length,1),n.setUint16(30,r,1),n.setUint16(40,e.isFile?33204:16893,1),n.setUint32(42,oe(t),1),J(n)}function Fr(e,t,o){const r=le(o);return r.setUint16(0,1,1),r.setUint16(2,o-4,1),16&o&&(r.setBigUint64(4,e.u,1),r.setBigUint64(12,e.u,1)),r.setBigUint64(o-8,t,1),J(r)}function ct(e){return e instanceof File||e instanceof Response?[[e],[e]]:[[e.input,e.name,e.size],[e.input,e.lastModified]]}var Dr=e=>function(t){let o=BigInt(22),r=0n,n=0;for(const s of t){if(!s.o)throw new Error("Every file must have a non-empty name.");if(s.u===void 0)throw new Error(`Missing size for file "${new TextDecoder().decode(s.o)}".`);const l=s.u>=0xffffffffn,a=r>=0xffffffffn;r+=BigInt(46+s.o.length+(l&&8))+s.u,o+=BigInt(s.o.length+46+(12*a|28*l)),n||(n=l)}return(n||r>=0xffffffffn)&&(o+=BigInt(76)),o+r}(function*(t){for(const o of t)yield it(...ct(o)[0])}(e));function Or(e,t={}){const o={"Content-Type":"application/zip","Content-Disposition":"attachment"};return(typeof t.length=="bigint"||Number.isInteger(t.length))&&t.length>0&&(o["Content-Length"]=String(t.length)),t.metadata&&(o["Content-Length"]=String(Dr(t.metadata))),new Response(Er(e,t),{headers:o})}function Er(e,t={}){const o=function(r){var s;const n=r[Symbol.iterator in r?Symbol.iterator:Symbol.asyncIterator]();return{async next(){const l=await n.next();if(l.done)return l;const[a,u]=ct(l.value);return{done:0,value:Object.assign(wr(...u),it(...a))}},throw:(s=n.throw)==null?void 0:s.bind(n),[Symbol.asyncIterator](){return this}}}(e);return st(async function*(r,n){const s=[];let l=0n,a=0n,u=0;for await(const i of r){const b=Br(i,n.buffersAreUTF8);yield Pr(i,b),yield new Uint8Array(i.o),i.isFile&&(yield*Tr(i));const d=i.u>=0xffffffffn,v=12*(l>=0xffffffffn)|28*d;yield Rr(i,d),s.push(Ir(i,l,b,v)),s.push(i.o),v&&s.push(Fr(i,l,v)),d&&(l+=8n),a++,l+=BigInt(46+i.o.length)+i.u,u||(u=d)}let g=0n;for(const i of s)yield i,g+=BigInt(i.length);if(u||l>=0xffffffffn){const i=le(76);i.setUint32(0,1347094022),i.setBigUint64(4,BigInt(44),1),i.setUint32(12,755182848),i.setBigUint64(24,a,1),i.setBigUint64(32,a,1),i.setBigUint64(40,g,1),i.setBigUint64(48,l,1),i.setUint32(56,1347094023),i.setBigUint64(64,l+g,1),i.setUint32(72,1,1),yield J(i)}const h=le(22);h.setUint32(0,1347093766),h.setUint16(8,Me(a),1),h.setUint16(10,Me(a),1),h.setUint32(12,oe(g),1),h.setUint32(16,oe(l),1),yield J(h)}(o,t),o)}const Ur=L({__name:"index",setup(e,{expose:t}){t();const o=jt(),r=R([]),n=R([]),s=R(""),l=R(0),a=R(!0),u=R(!1),g=R(!1),h=R(!1),i=R(!1),b=R("webp"),d=P(()=>n.value.find(S=>S.id===s.value)),v=P(()=>n.value.filter(S=>S.status==="success"&&S.compressedFile)),p=P(()=>n.value.filter(S=>S.status==="failed")),f=P(()=>{var S;return(S=d.value)==null?void 0:S.src}),m=P(()=>{var S;return(S=d.value)==null?void 0:S.compressedSrc});let _;try{x()}catch(S){console.log("loadModules error",S),a.value=!1,o.error({title:"加载异常",content:"依赖资源加载异常，请刷新页面后重试",positiveText:"重试",onPositiveClick:()=>{window.location.reload()}})}async function x(){const[S,O,V,j]=await Promise.all([pe(()=>import("https://unpkg.com/@jsquash/avif@1.3.0?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/jpeg@1.4.0?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/png@3.0.1?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/webp@1.4.0?module"),[])]);a.value=!1,h.value=!0,_=async()=>{u.value=!0,g.value=!1,n.value=Mt(r.value);for(let M=0;M<n.value.length;M++){const T=n.value[M];try{const ee=T.file.type.replace("image/","");T.status="processing";const me=await T.file.arrayBuffer(),ve=await ae(ee,me),ge=`image/${b.value}`,be=new Blob([ve],{type:ge});T.compressedFile=new File([be],`${T.fileName}.${b.value}`,{type:ge}),T.compressedSrc=URL.createObjectURL(T.compressedFile),T.status="success"}catch(ee){T.status="failed",T.failedInfo=Ee(ee)}l.value=Math.round((M+1)/n.value.length*100)}u.value=!1,g.value=!0};async function q(M,T){switch(M){case"avif":return await S.decode(T);case"jpeg":return await O.decode(T);case"png":return await V.decode(T);case"webp":return await j.decode(T);default:throw new Error(`Unknown source type: ${M}`)}}async function Y(M){switch(b.value){case"avif":return await S.encode(M);case"jpeg":return await O.encode(M);case"png":return await V.encode(M);case"webp":return await j.encode(M);default:throw new Error(`Unknown output type: ${b.value}`)}}async function ae(M,T){const ee=await q(M,T);return Y(ee)}}function B(S){r.value=S,n.value=S,!s.value&&S.length&&(s.value=S[0].id)}function z(){r.value=[],n.value=[]}async function C(){try{const S=v.value.map(V=>V.compressedFile),O=await Or(S).blob();Ze(O,`liubing.me_compressed_${Date.now()}.zip`)}catch(S){window.$message.error(Ee(S))}}const k={dialog:o,defaultCompressList:r,compressList:n,active:s,percentage:l,showSpin:a,compressing:u,compressEnd:g,loadSuccess:h,downloadAllLoading:i,outputType:b,activeInfo:d,successList:v,failedList:p,activeSrc:f,activeCompressedSrc:m,get handleCompress(){return _},set handleCompress(S){_=S},loadModules:x,handleChange:B,handleReset:z,handleDownloadAll:C};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}}),Lr={key:0,class:"border border-border rounded-6 border-solid"},jr={class:"border-r border-border border-r-solid p-10"},Mr={class:"py-10 pl-20 pr-10"},Nr={class:"mt-10 flex justify-end"};function Ar(e,t,o,r,n,s){const l=Sr,a=yo,u=fr,g=or,h=Jo,i=Nt,b=Be,d=po,v=fo,p=Ao,f=Qe;return U(),A("div",{class:de(["compress-image relative",{"opacity-50":!r.loadSuccess&&!r.showSpin,"after:content-empty after:absolute after:size-full after:top-0 after:z-1 after:cursor-not-allowed":!r.loadSuccess&&!r.showSpin}])},[E(f,{show:r.showSpin},{description:I(()=>t[3]||(t[3]=[w("div",{"text-center":"","text-14":""},[w("div",null,"依赖资源加载中..."),w("div",null,"首次加载较慢，请耐心等待")],-1)])),default:I(()=>[r.compressList.length?(U(),A("div",Lr,[E(v,{"has-sider":"",class:"h-[calc(100vh-150px)]"},{default:I(()=>[E(a,{"collapse-mode":"transform","collapsed-width":0,width:300,"show-trigger":"arrow-circle",bordered:""},{default:I(()=>[w("div",jr,[E(l,{active:r.active,"onUpdate:active":t[0]||(t[0]=m=>r.active=m),list:r.compressList},null,8,["active","list"])])]),_:1}),E(d,null,{default:I(()=>[w("div",Mr,[r.activeSrc?(U(),ie(u,{key:0,src:r.activeSrc,"compressed-src":r.activeCompressedSrc},null,8,["src","compressed-src"])):K("",!0),E(g,{checked:r.outputType,"onUpdate:checked":t[1]||(t[1]=m=>r.outputType=m)},null,8,["checked"]),r.compressing||r.compressEnd?(U(),ie(h,{key:1,"compress-list":r.compressList,"success-list":r.successList,"failed-list":r.failedList,"compress-end":r.compressEnd,percentage:r.percentage},null,8,["compress-list","success-list","failed-list","compress-end","percentage"])):K("",!0),w("div",Nr,[E(b,null,{default:I(()=>[E(i,{type:"tertiary",disabled:r.compressing,onClick:r.handleReset},{default:I(()=>t[4]||(t[4]=[Z(" 重置 ")])),_:1},8,["disabled"]),E(i,{type:"primary",disabled:r.downloadAllLoading||!r.successList.length||r.compressing,loading:r.downloadAllLoading,onClick:r.handleDownloadAll},{default:I(()=>t[5]||(t[5]=[Z(" 批量下载 ")])),_:1},8,["disabled","loading"]),E(i,{type:"primary",disabled:r.compressing,loading:r.compressing,onClick:r.handleCompress},{default:I(()=>t[6]||(t[6]=[Z(" 压缩 ")])),_:1},8,["disabled","loading","onClick"])]),_:1})])])]),_:1})]),_:1})])):(U(),A(ke,{key:1},[E(p,{onChange:r.handleChange}),E(g,{checked:r.outputType,"onUpdate:checked":t[2]||(t[2]=m=>r.outputType=m),class:"mt-10"},null,8,["checked"])],64))]),_:1},8,["show"])],2)}const Wr=ne(Ur,[["render",Ar],["__file","index.vue"]]),Hr={};function Vr(e,t){const o=Wr,r=Wt("ClientOnly");return U(),A("div",null,[t[0]||(t[0]=At('<h1 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩"><span>图片压缩</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>工具依赖加载<a href="https://unpkg.com/" target="_blank" rel="noopener noreferrer">unpkg</a>的资源，国内用户可能需要开启魔法上网。</p></div><div class="hint-container tip"><p class="hint-container-title">温馨提示</p><p>纯本地图片压缩工具，不会上传您的任何图片信息，请放心使用。</p></div>',3)),E(r,null,{default:I(()=>[E(o)]),_:1})])}const Xr=ne(Hr,[["render",Vr],["__file","compress-image.html.vue"]]),Gr=JSON.parse('{"path":"/tools/compress-image.html","title":"图片压缩","lang":"zh-CN","frontmatter":{"toc":false,"pageInfo":false,"layout":"ToolLayout","description":"一个纯本地图片压缩工具，支持输出WebP、AVIF、JPEG格图片","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://liubing.me/tools/compress-image.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"图片压缩"}],["meta",{"property":"og:description","content":"一个纯本地图片压缩工具，支持输出WebP、AVIF、JPEG格图片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图片压缩\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.31,"words":94},"filePathRelative":"tools/compress-image.md","excerpt":"\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>工具依赖加载<a href=\\"https://unpkg.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">unpkg</a>的资源，国内用户可能需要开启魔法上网。</p>\\n</div>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">温馨提示</p>\\n<p>纯本地图片压缩工具，不会上传您的任何图片信息，请放心使用。</p>\\n</div>"}');export{Xr as comp,Gr as data};
