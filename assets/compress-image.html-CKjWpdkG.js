import{t as vt,e as j,h as a,f as ue,g as bt,i as F,j as C,k as P,l as D,m as ce,n as H,u as N,p as R,q as Q,v as xe,x as he,y as yt,z as B,A as W,B as Ct,C as re,D as Te,E as Re,N as xt,F as _e,G as te,H as Se,I as _t,J as St,K as Ce,L as we,M as wt,O as zt,P as kt,Q as Bt,R as $t,S as Ae,T as We,U as ze,V as Pt,W as He,X as G,Y as Ve,Z as qe,$ as Ye,a0 as Ge,a1 as Tt,a2 as Rt,a3 as It,a4 as Ie,a5 as Fe,a6 as De,a7 as Xe,a8 as Ft,a9 as Dt,_ as ne,o as U,c as A,b as w,d as E,aa as I,ab as J,ac as Oe,ad as ie,ae as de,af as X,ag as K,ah as Ke,ai as ke,aj as Ze,ak as Be,al as Ot,am as Et,an as Ut,ao as Je,ap as jt,aq as Qe,ar as Lt,as as pe,at as Mt,au as Ee,av as Nt,a as At,r as Wt}from"./app-DbY_WXI7.js";import{_ as Ht}from"./Radio-CYhoE7b3.js";var Vt=0;function qt(e){var t=++Vt;return vt(e)+t}const Yt=j({name:"ChevronRight",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function Gt(e){const{textColor2:t,primaryColorHover:o,primaryColorPressed:r,primaryColor:n,infoColor:s,successColor:i,warningColor:c,errorColor:d,baseColor:g,borderColor:m,opacityDisabled:l,tagColor:b,closeIconColor:p,closeIconColorHover:u,closeIconColorPressed:h,borderRadiusSmall:f,fontSizeMini:v,fontSizeTiny:_,fontSizeSmall:y,fontSizeMedium:$,heightMini:z,heightTiny:x,heightSmall:k,heightMedium:S,closeColorHover:O,closeColorPressed:V,buttonColor2Hover:L,buttonColor2Pressed:q,fontWeightStrong:Y}=e;return Object.assign(Object.assign({},bt),{closeBorderRadius:f,heightTiny:z,heightSmall:x,heightMedium:k,heightLarge:S,borderRadius:f,opacityDisabled:l,fontSizeTiny:v,fontSizeSmall:_,fontSizeMedium:y,fontSizeLarge:$,fontWeightStrong:Y,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:g,colorCheckable:"#0000",colorHoverCheckable:L,colorPressedCheckable:q,colorChecked:n,colorCheckedHover:o,colorCheckedPressed:r,border:`1px solid ${m}`,textColor:t,color:b,colorBordered:"rgb(250, 250, 252)",closeIconColor:p,closeIconColorHover:u,closeIconColorPressed:h,closeColorHover:O,closeColorPressed:V,borderPrimary:`1px solid ${F(n,{alpha:.3})}`,textColorPrimary:n,colorPrimary:F(n,{alpha:.12}),colorBorderedPrimary:F(n,{alpha:.1}),closeIconColorPrimary:n,closeIconColorHoverPrimary:n,closeIconColorPressedPrimary:n,closeColorHoverPrimary:F(n,{alpha:.12}),closeColorPressedPrimary:F(n,{alpha:.18}),borderInfo:`1px solid ${F(s,{alpha:.3})}`,textColorInfo:s,colorInfo:F(s,{alpha:.12}),colorBorderedInfo:F(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:F(s,{alpha:.12}),closeColorPressedInfo:F(s,{alpha:.18}),borderSuccess:`1px solid ${F(i,{alpha:.3})}`,textColorSuccess:i,colorSuccess:F(i,{alpha:.12}),colorBorderedSuccess:F(i,{alpha:.1}),closeIconColorSuccess:i,closeIconColorHoverSuccess:i,closeIconColorPressedSuccess:i,closeColorHoverSuccess:F(i,{alpha:.12}),closeColorPressedSuccess:F(i,{alpha:.18}),borderWarning:`1px solid ${F(c,{alpha:.35})}`,textColorWarning:c,colorWarning:F(c,{alpha:.15}),colorBorderedWarning:F(c,{alpha:.12}),closeIconColorWarning:c,closeIconColorHoverWarning:c,closeIconColorPressedWarning:c,closeColorHoverWarning:F(c,{alpha:.12}),closeColorPressedWarning:F(c,{alpha:.18}),borderError:`1px solid ${F(d,{alpha:.23})}`,textColorError:d,colorError:F(d,{alpha:.1}),colorBorderedError:F(d,{alpha:.08}),closeIconColorError:d,closeIconColorHoverError:d,closeIconColorPressedError:d,closeColorHoverError:F(d,{alpha:.12}),closeColorPressedError:F(d,{alpha:.18})})}const Xt={name:"Tag",common:ue,self:Gt},Kt={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Zt=C("tag",`
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
`,[P("strong",`
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
 `),P("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[D("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),D("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),P("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),P("icon, avatar",[P("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),P("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),P("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ce("disabled",[H("&:hover","background-color: var(--n-color-hover-checkable);",[ce("checked","color: var(--n-text-color-hover-checkable);")]),H("&:active","background-color: var(--n-color-pressed-checkable);",[ce("checked","color: var(--n-text-color-pressed-checkable);")])]),P("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ce("disabled",[H("&:hover","background-color: var(--n-color-checked-hover);"),H("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Jt=Object.assign(Object.assign(Object.assign({},N.props),Kt),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Qt=_e("n-tag"),eo=j({name:"Tag",props:Jt,setup(e){const t=R(null),{mergedBorderedRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:n,mergedRtlRef:s}=Q(e),i=N("Tag","-tag",Zt,Xt,e,r);xe(Qt,{roundRef:he(e,"round")});function c(){if(!e.disabled&&e.checkable){const{checked:p,onCheckedChange:u,onUpdateChecked:h,"onUpdate:checked":f}=e;h&&h(!p),f&&f(!p),u&&u(!p)}}function d(p){if(e.triggerClickOnClose||p.stopPropagation(),!e.disabled){const{onClose:u}=e;u&&te(u,p)}}const g={setTextContent(p){const{value:u}=t;u&&(u.textContent=p)}},m=yt("Tag",s,r),l=B(()=>{const{type:p,size:u,color:{color:h,textColor:f}={}}=e,{common:{cubicBezierEaseInOut:v},self:{padding:_,closeMargin:y,borderRadius:$,opacityDisabled:z,textColorCheckable:x,textColorHoverCheckable:k,textColorPressedCheckable:S,textColorChecked:O,colorCheckable:V,colorHoverCheckable:L,colorPressedCheckable:q,colorChecked:Y,colorCheckedHover:ae,colorCheckedPressed:M,closeBorderRadius:T,fontWeightStrong:ee,[W("colorBordered",p)]:me,[W("closeSize",u)]:ve,[W("closeIconSize",u)]:ge,[W("fontSize",u)]:be,[W("height",u)]:$e,[W("color",p)]:dt,[W("textColor",p)]:ut,[W("border",p)]:gt,[W("closeIconColor",p)]:Pe,[W("closeIconColorHover",p)]:ft,[W("closeIconColorPressed",p)]:pt,[W("closeColorHover",p)]:ht,[W("closeColorPressed",p)]:mt}}=i.value,fe=Ct(y);return{"--n-font-weight-strong":ee,"--n-avatar-size-override":`calc(${$e} - 8px)`,"--n-bezier":v,"--n-border-radius":$,"--n-border":gt,"--n-close-icon-size":ge,"--n-close-color-pressed":mt,"--n-close-color-hover":ht,"--n-close-border-radius":T,"--n-close-icon-color":Pe,"--n-close-icon-color-hover":ft,"--n-close-icon-color-pressed":pt,"--n-close-icon-color-disabled":Pe,"--n-close-margin-top":fe.top,"--n-close-margin-right":fe.right,"--n-close-margin-bottom":fe.bottom,"--n-close-margin-left":fe.left,"--n-close-size":ve,"--n-color":h||(o.value?me:dt),"--n-color-checkable":V,"--n-color-checked":Y,"--n-color-checked-hover":ae,"--n-color-checked-pressed":M,"--n-color-hover-checkable":L,"--n-color-pressed-checkable":q,"--n-font-size":be,"--n-height":$e,"--n-opacity-disabled":z,"--n-padding":_,"--n-text-color":f||ut,"--n-text-color-checkable":x,"--n-text-color-checked":O,"--n-text-color-hover-checkable":k,"--n-text-color-pressed-checkable":S}}),b=n?re("tag",B(()=>{let p="";const{type:u,size:h,color:{color:f,textColor:v}={}}=e;return p+=u[0],p+=h[0],f&&(p+=`a${Te(f)}`),v&&(p+=`b${Te(v)}`),o.value&&(p+="c"),p}),l,e):void 0;return Object.assign(Object.assign({},g),{rtlEnabled:m,mergedClsPrefix:r,contentRef:t,mergedBordered:o,handleClick:c,handleCloseClick:d,cssVars:n?void 0:l,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender})},render(){var e,t;const{mergedClsPrefix:o,rtlEnabled:r,closable:n,color:{borderColor:s}={},round:i,onRender:c,$slots:d}=this;c==null||c();const g=Re(d.avatar,l=>l&&a("div",{class:`${o}-tag__avatar`},l)),m=Re(d.icon,l=>l&&a("div",{class:`${o}-tag__icon`},l));return a("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:r,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:i,[`${o}-tag--avatar`]:g,[`${o}-tag--icon`]:m,[`${o}-tag--closable`]:n}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||g,a("span",{class:`${o}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&n?a(xt,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?a("div",{class:`${o}-tag__border`,style:{borderColor:s}}):null)}});function to(e){const{borderRadius:t,boxShadow2:o,baseColor:r}=e;return Object.assign(Object.assign({},St),{borderRadius:t,boxShadow:o,color:Ce(r,"rgba(0, 0, 0, .85)"),textColor:r})}const et=Se({name:"Tooltip",common:ue,peers:{Popover:_t},self:to}),oo=Se({name:"Ellipsis",common:ue,peers:{Tooltip:et}}),ro=Object.assign(Object.assign({},wt),N.props),no=j({name:"Tooltip",props:ro,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=Q(e),o=N("Tooltip","-tooltip",void 0,et,e,t),r=R(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(s){r.value.setShow(s)}}),{popoverRef:r,mergedTheme:o,popoverThemeOverrides:B(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return a(we,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),so=C("ellipsis",{overflow:"hidden"},[ce("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),P("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),P("cursor-pointer",`
 cursor: pointer;
 `)]);function Ue(e){return`${e}-ellipsis--line-clamp`}function je(e,t){return`${e}-ellipsis--cursor-${t}`}const io=Object.assign(Object.assign({},N.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),lo=j({name:"Ellipsis",inheritAttrs:!1,props:io,setup(e,{slots:t,attrs:o}){const r=zt(),n=N("Ellipsis","-ellipsis",so,oo,e,r),s=R(null),i=R(null),c=R(null),d=R(!1),g=B(()=>{const{lineClamp:f}=e,{value:v}=d;return f!==void 0?{textOverflow:"","-webkit-line-clamp":v?"":f}:{textOverflow:v?"":"ellipsis","-webkit-line-clamp":""}});function m(){let f=!1;const{value:v}=d;if(v)return!0;const{value:_}=s;if(_){const{lineClamp:y}=e;if(p(_),y!==void 0)f=_.scrollHeight<=_.offsetHeight;else{const{value:$}=i;$&&(f=$.getBoundingClientRect().width<=_.getBoundingClientRect().width)}u(_,f)}return f}const l=B(()=>e.expandTrigger==="click"?()=>{var f;const{value:v}=d;v&&((f=c.value)===null||f===void 0||f.setShow(!1)),d.value=!v}:void 0);kt(()=>{var f;e.tooltip&&((f=c.value)===null||f===void 0||f.setShow(!1))});const b=()=>a("span",Object.assign({},Bt(o,{class:[`${r.value}-ellipsis`,e.lineClamp!==void 0?Ue(r.value):void 0,e.expandTrigger==="click"?je(r.value,"pointer"):void 0],style:g.value}),{ref:"triggerRef",onClick:l.value,onMouseenter:e.expandTrigger==="click"?m:void 0}),e.lineClamp?t:a("span",{ref:"triggerInnerRef"},t));function p(f){if(!f)return;const v=g.value,_=Ue(r.value);e.lineClamp!==void 0?h(f,_,"add"):h(f,_,"remove");for(const y in v)f.style[y]!==v[y]&&(f.style[y]=v[y])}function u(f,v){const _=je(r.value,"pointer");e.expandTrigger==="click"&&!v?h(f,_,"add"):h(f,_,"remove")}function h(f,v,_){_==="add"?f.classList.contains(v)||f.classList.add(v):f.classList.contains(v)&&f.classList.remove(v)}return{mergedTheme:n,triggerRef:s,triggerInnerRef:i,tooltipRef:c,handleClick:l,renderTrigger:b,getTooltipDisabled:m}},render(){var e;const{tooltip:t,renderTrigger:o,$slots:r}=this;if(t){const{mergedTheme:n}=this;return a(no,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip}),{trigger:o,default:(e=r.tooltip)!==null&&e!==void 0?e:r.default})}else return o()}});function ao(e){const{baseColor:t,textColor2:o,bodyColor:r,cardColor:n,dividerColor:s,actionColor:i,scrollbarColor:c,scrollbarColorHover:d,invertedColor:g}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:i,headerColor:n,headerColorInverted:g,footerColor:i,footerColorInverted:g,headerBorderColor:s,headerBorderColorInverted:g,footerBorderColor:s,footerBorderColorInverted:g,siderBorderColor:s,siderBorderColorInverted:g,siderColor:n,siderColorInverted:g,siderToggleButtonBorder:`1px solid ${s}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:Ce(r,c),siderToggleBarColorHover:Ce(r,d),__invertScrollbar:"true"}}const tt=Se({name:"Layout",common:ue,peers:{Scrollbar:$t},self:ao}),co=_e("n-layout-sider"),ot={type:String,default:"static"},uo=C("layout",`
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
 `),P("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),go={embedded:Boolean,position:ot,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},rt=_e("n-layout");function nt(e){return j({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},N.props),go),setup(t){const o=R(null),r=R(null),{mergedClsPrefixRef:n,inlineThemeDisabled:s}=Q(t),i=N("Layout","-layout",uo,tt,t,n);function c(h,f){if(t.nativeScrollbar){const{value:v}=o;v&&(f===void 0?v.scrollTo(h):v.scrollTo(h,f))}else{const{value:v}=r;v&&v.scrollTo(h,f)}}xe(rt,t);let d=0,g=0;const m=h=>{var f;const v=h.target;d=v.scrollLeft,g=v.scrollTop,(f=t.onScroll)===null||f===void 0||f.call(t,h)};Ae(()=>{if(t.nativeScrollbar){const h=o.value;h&&(h.scrollTop=g,h.scrollLeft=d)}});const l={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},b={scrollTo:c},p=B(()=>{const{common:{cubicBezierEaseInOut:h},self:f}=i.value;return{"--n-bezier":h,"--n-color":t.embedded?f.colorEmbedded:f.color,"--n-text-color":f.textColor}}),u=s?re("layout",B(()=>t.embedded?"e":""),p,t):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:l,mergedTheme:i,handleNativeElScroll:m,cssVars:s?void 0:p,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender},b)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const n=r?this.hasSiderStyle:void 0,s=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return a("div",{class:s,style:this.cssVars},this.nativeScrollbar?a("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):a(We,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const fo=nt(!1),po=nt(!0),ho=C("layout-sider",`
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
`,[P("bordered",[D("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),D("left-placement",[P("bordered",[D("border",`
 right: 0;
 `)])]),P("right-placement",`
 justify-content: flex-start;
 `,[P("bordered",[D("border",`
 left: 0;
 `)]),P("collapsed",[C("layout-toggle-button",[C("base-icon",`
 transform: rotate(180deg);
 `)]),C("layout-toggle-bar",[H("&:hover",[D("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),C("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[C("base-icon",`
 transform: rotate(0);
 `)]),C("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[H("&:hover",[D("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),P("collapsed",[C("layout-toggle-bar",[H("&:hover",[D("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),C("layout-toggle-button",[C("base-icon",`
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
 `),H("&:hover",[D("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),D("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),D("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),H("&:hover",[D("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),D("border",`
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
 `),P("show-content",[C("layout-sider-scroll-container",{opacity:1})]),P("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),mo=j({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return a("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},a("div",{class:`${e}-layout-toggle-bar__top`}),a("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),vo=j({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return a("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},a(ze,{clsPrefix:e},{default:()=>a(Yt,null)}))}}),bo={position:ot,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},yo=j({name:"LayoutSider",props:Object.assign(Object.assign({},N.props),bo),setup(e){const t=Pt(rt),o=R(null),r=R(null),n=R(e.defaultCollapsed),s=He(he(e,"collapsed"),n),i=B(()=>G(s.value?e.collapsedWidth:e.width)),c=B(()=>e.collapseMode!=="transform"?{}:{minWidth:G(e.width)}),d=B(()=>t?t.siderPlacement:"left");function g(z,x){if(e.nativeScrollbar){const{value:k}=o;k&&(x===void 0?k.scrollTo(z):k.scrollTo(z,x))}else{const{value:k}=r;k&&k.scrollTo(z,x)}}function m(){const{"onUpdate:collapsed":z,onUpdateCollapsed:x,onExpand:k,onCollapse:S}=e,{value:O}=s;x&&te(x,!O),z&&te(z,!O),n.value=!O,O?k&&te(k):S&&te(S)}let l=0,b=0;const p=z=>{var x;const k=z.target;l=k.scrollLeft,b=k.scrollTop,(x=e.onScroll)===null||x===void 0||x.call(e,z)};Ae(()=>{if(e.nativeScrollbar){const z=o.value;z&&(z.scrollTop=b,z.scrollLeft=l)}}),xe(co,{collapsedRef:s,collapseModeRef:he(e,"collapseMode")});const{mergedClsPrefixRef:u,inlineThemeDisabled:h}=Q(e),f=N("Layout","-layout-sider",ho,tt,e,u);function v(z){var x,k;z.propertyName==="max-width"&&(s.value?(x=e.onAfterLeave)===null||x===void 0||x.call(e):(k=e.onAfterEnter)===null||k===void 0||k.call(e))}const _={scrollTo:g},y=B(()=>{const{common:{cubicBezierEaseInOut:z},self:x}=f.value,{siderToggleButtonColor:k,siderToggleButtonBorder:S,siderToggleBarColor:O,siderToggleBarColorHover:V}=x,L={"--n-bezier":z,"--n-toggle-button-color":k,"--n-toggle-button-border":S,"--n-toggle-bar-color":O,"--n-toggle-bar-color-hover":V};return e.inverted?(L["--n-color"]=x.siderColorInverted,L["--n-text-color"]=x.textColorInverted,L["--n-border-color"]=x.siderBorderColorInverted,L["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColorInverted,L.__invertScrollbar=x.__invertScrollbar):(L["--n-color"]=x.siderColor,L["--n-text-color"]=x.textColor,L["--n-border-color"]=x.siderBorderColor,L["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColor),L}),$=h?re("layout-sider",B(()=>e.inverted?"a":"b"),y,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:u,mergedTheme:f,styleMaxWidth:i,mergedCollapsed:s,scrollContainerStyle:c,siderPlacement:d,handleNativeElScroll:p,handleTransitionend:v,handleTriggerClick:m,inlineThemeDisabled:h,cssVars:y,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender},_)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),a("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:G(this.width)}]},this.nativeScrollbar?a("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):a(We,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?a(mo,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):a(vo,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?a("div",{class:`${t}-layout-sider__border`}):null)}}),Co={success:a(Ve,null),error:a(qe,null),warning:a(Ye,null),info:a(Ge,null)},xo=j({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){function o(n,s,i,c){const{gapDegree:d,viewBoxWidth:g,strokeWidth:m}=e,l=50,b=0,p=l,u=0,h=2*l,f=50+m/2,v=`M ${f},${f} m ${b},${p}
      a ${l},${l} 0 1 1 ${u},${-h}
      a ${l},${l} 0 1 1 ${-u},${h}`,_=Math.PI*2*l,y={stroke:c==="rail"?i:typeof e.fillColor=="object"?"url(#gradient)":i,strokeDasharray:`${n/100*(_-d)}px ${g*8}px`,strokeDashoffset:`-${d/2}px`,transformOrigin:s?"center":void 0,transform:s?`rotate(${s}deg)`:void 0};return{pathString:v,pathStyle:y}}const r=()=>{const n=typeof e.fillColor=="object",s=n?e.fillColor.stops[0]:"",i=n?e.fillColor.stops[1]:"";return n&&a("defs",null,a("linearGradient",{id:"gradient",x1:"0%",y1:"100%",x2:"100%",y2:"0%"},a("stop",{offset:"0%","stop-color":s}),a("stop",{offset:"100%","stop-color":i})))};return()=>{const{fillColor:n,railColor:s,strokeWidth:i,offsetDegree:c,status:d,percentage:g,showIndicator:m,indicatorTextColor:l,unit:b,gapOffsetDegree:p,clsPrefix:u}=e,{pathString:h,pathStyle:f}=o(100,0,s,"rail"),{pathString:v,pathStyle:_}=o(g,c,n,"fill"),y=100+i;return a("div",{class:`${u}-progress-content`,role:"none"},a("div",{class:`${u}-progress-graph`,"aria-hidden":!0},a("div",{class:`${u}-progress-graph-circle`,style:{transform:p?`rotate(${p}deg)`:void 0}},a("svg",{viewBox:`0 0 ${y} ${y}`},r(),a("g",null,a("path",{class:`${u}-progress-graph-circle-rail`,d:h,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:f})),a("g",null,a("path",{class:[`${u}-progress-graph-circle-fill`,g===0&&`${u}-progress-graph-circle-fill--empty`],d:v,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:_}))))),m?a("div",null,t.default?a("div",{class:`${u}-progress-custom-content`,role:"none"},t.default()):d!=="default"?a("div",{class:`${u}-progress-icon`,"aria-hidden":!0},a(ze,{clsPrefix:u},{default:()=>Co[d]})):a("div",{class:`${u}-progress-text`,style:{color:l},role:"none"},a("span",{class:`${u}-progress-text__percentage`},g),a("span",{class:`${u}-progress-text__unit`},b))):null)}}}),_o={success:a(Ve,null),error:a(qe,null),warning:a(Ye,null),info:a(Ge,null)},So=j({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const o=B(()=>G(e.height)),r=B(()=>{var i,c;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(i=e.fillColor)===null||i===void 0?void 0:i.stops[0]} , ${(c=e.fillColor)===null||c===void 0?void 0:c.stops[1]})`:e.fillColor}),n=B(()=>e.railBorderRadius!==void 0?G(e.railBorderRadius):e.height!==void 0?G(e.height,{c:.5}):""),s=B(()=>e.fillBorderRadius!==void 0?G(e.fillBorderRadius):e.railBorderRadius!==void 0?G(e.railBorderRadius):e.height!==void 0?G(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:i,railColor:c,railStyle:d,percentage:g,unit:m,indicatorTextColor:l,status:b,showIndicator:p,processing:u,clsPrefix:h}=e;return a("div",{class:`${h}-progress-content`,role:"none"},a("div",{class:`${h}-progress-graph`,"aria-hidden":!0},a("div",{class:[`${h}-progress-graph-line`,{[`${h}-progress-graph-line--indicator-${i}`]:!0}]},a("div",{class:`${h}-progress-graph-line-rail`,style:[{backgroundColor:c,height:o.value,borderRadius:n.value},d]},a("div",{class:[`${h}-progress-graph-line-fill`,u&&`${h}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:r.value,height:o.value,lineHeight:o.value,borderRadius:s.value}},i==="inside"?a("div",{class:`${h}-progress-graph-line-indicator`,style:{color:l}},t.default?t.default():`${g}${m}`):null)))),p&&i==="outside"?a("div",null,t.default?a("div",{class:`${h}-progress-custom-content`,style:{color:l},role:"none"},t.default()):b==="default"?a("div",{role:"none",class:`${h}-progress-icon ${h}-progress-icon--as-text`,style:{color:l}},g,m):a("div",{class:`${h}-progress-icon`,"aria-hidden":!0},a(ze,{clsPrefix:h},{default:()=>_o[b]}))):null)}}});function Le(e,t,o=100){return`m ${o/2} ${o/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const wo=j({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const o=B(()=>e.percentage.map((s,i)=>`${Math.PI*s/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*i)-e.circleGap*i)*2}, ${e.viewBoxWidth*8}`)),r=(n,s)=>{const i=e.fillColor[s],c=typeof i=="object"?i.stops[0]:"",d=typeof i=="object"?i.stops[1]:"";return typeof e.fillColor[s]=="object"&&a("linearGradient",{id:`gradient-${s}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},a("stop",{offset:"0%","stop-color":c}),a("stop",{offset:"100%","stop-color":d}))};return()=>{const{viewBoxWidth:n,strokeWidth:s,circleGap:i,showIndicator:c,fillColor:d,railColor:g,railStyle:m,percentage:l,clsPrefix:b}=e;return a("div",{class:`${b}-progress-content`,role:"none"},a("div",{class:`${b}-progress-graph`,"aria-hidden":!0},a("div",{class:`${b}-progress-graph-circle`},a("svg",{viewBox:`0 0 ${n} ${n}`},a("defs",null,l.map((p,u)=>r(p,u))),l.map((p,u)=>a("g",{key:u},a("path",{class:`${b}-progress-graph-circle-rail`,d:Le(n/2-s/2*(1+2*u)-i*u,s,n),"stroke-width":s,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:g[u]},m[u]]}),a("path",{class:[`${b}-progress-graph-circle-fill`,p===0&&`${b}-progress-graph-circle-fill--empty`],d:Le(n/2-s/2*(1+2*u)-i*u,s,n),"stroke-width":s,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:o.value[u],strokeDashoffset:0,stroke:typeof d[u]=="object"?`url(#gradient-${u})`:d[u]}})))))),c&&t.default?a("div",null,a("div",{class:`${b}-progress-text`},t.default())):null)}}}),zo=H([C("progress",{display:"inline-block"},[C("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),P("line",`
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
 `,[P("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),P("circle, dashboard",{width:"120px"},[C("progress-custom-content",`
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
 `)]),P("multiple-circle",`
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
 `)]),C("progress-content",{position:"relative"}),C("progress-graph",{position:"relative"},[C("progress-graph-circle",[H("svg",{verticalAlign:"bottom"}),C("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[P("empty",{opacity:0})]),C("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),C("progress-graph-line",[P("indicator-inside",[C("progress-graph-line-rail",`
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
 `)])]),P("indicator-inside-label",`
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
 `,[P("processing",[H("&::after",`
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
 `)]),ko=Object.assign(Object.assign({},N.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),Bo=j({name:"Progress",props:ko,setup(e){const t=B(()=>e.indicatorPlacement||e.indicatorPosition),o=B(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:n}=Q(e),s=N("Progress","-progress",zo,Tt,e,r),i=B(()=>{const{status:d}=e,{common:{cubicBezierEaseInOut:g},self:{fontSize:m,fontSizeCircle:l,railColor:b,railHeight:p,iconSizeCircle:u,iconSizeLine:h,textColorCircle:f,textColorLineInner:v,textColorLineOuter:_,lineBgProcessing:y,fontWeightCircle:$,[W("iconColor",d)]:z,[W("fillColor",d)]:x}}=s.value;return{"--n-bezier":g,"--n-fill-color":x,"--n-font-size":m,"--n-font-size-circle":l,"--n-font-weight-circle":$,"--n-icon-color":z,"--n-icon-size-circle":u,"--n-icon-size-line":h,"--n-line-bg-processing":y,"--n-rail-color":b,"--n-rail-height":p,"--n-text-color-circle":f,"--n-text-color-line-inner":v,"--n-text-color-line-outer":_}}),c=n?re("progress",B(()=>e.status[0]),i,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:o,cssVars:n?void 0:i,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:o,showIndicator:r,status:n,railColor:s,railStyle:i,color:c,percentage:d,viewBoxWidth:g,strokeWidth:m,mergedIndicatorPlacement:l,unit:b,borderRadius:p,fillBorderRadius:u,height:h,processing:f,circleGap:v,mergedClsPrefix:_,gapDeg:y,gapOffsetDegree:$,themeClass:z,$slots:x,onRender:k}=this;return k==null||k(),a("div",{class:[z,`${_}-progress`,`${_}-progress--${e}`,`${_}-progress--${n}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?a(xo,{clsPrefix:_,status:n,showIndicator:r,indicatorTextColor:o,railColor:s,fillColor:c,railStyle:i,offsetDegree:this.offsetDegree,percentage:d,viewBoxWidth:g,strokeWidth:m,gapDegree:y===void 0?e==="dashboard"?75:0:y,gapOffsetDegree:$,unit:b},x):e==="line"?a(So,{clsPrefix:_,status:n,showIndicator:r,indicatorTextColor:o,railColor:s,fillColor:c,railStyle:i,percentage:d,processing:f,indicatorPlacement:l,unit:b,fillBorderRadius:u,railBorderRadius:p,height:h},x):e==="multiple-circle"?a(wo,{clsPrefix:_,strokeWidth:m,railColor:s,fillColor:c,railStyle:i,viewBoxWidth:g,percentage:d,showIndicator:r,circleGap:v},x):null)}});function $o(e){const{primaryColorHover:t,borderColor:o}=e;return{resizableTriggerColorHover:t,resizableTriggerColor:o}}const Po={name:"Split",common:ue,self:$o},To=C("split",`
 display: flex;
 width: 100%;
 height: 100%;
`,[P("horizontal",`
 flex-direction: row;
 `),P("vertical",`
 flex-direction: column;
 `),C("split-pane-1",`
 overflow: hidden;
 `),C("split-pane-2",`
 overflow: hidden;
 flex: 1;
 `),D("resize-trigger",`
 background-color: var(--n-resize-trigger-color);
 transition: background-color .3s var(--n-bezier);
 `,[P("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `),H("&:hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)])]),Ro=Object.assign(Object.assign({},N.props),{direction:{type:String,default:"horizontal"},resizeTriggerSize:{type:Number,default:3},disabled:Boolean,defaultSize:{type:[String,Number],default:.5},"onUpdate:size":[Function,Array],onUpdateSize:[Function,Array],size:[String,Number],min:{type:[String,Number],default:0},max:{type:[String,Number],default:1},pane1Class:String,pane1Style:[Object,String],pane2Class:String,pane2Style:[Object,String],onDragStart:Function,onDragMove:Function,onDragEnd:Function,watchProps:Array}),Io=j({name:"Split",props:Ro,setup(e){var t;const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=Q(e),n=N("Split","-split",To,Po,e,o),s=B(()=>{const{common:{cubicBezierEaseInOut:y},self:{resizableTriggerColor:$,resizableTriggerColorHover:z}}=n.value;return{"--n-bezier":y,"--n-resize-trigger-color":$,"--n-resize-trigger-color-hover":z}}),i=R(null),c=R(!1),d=he(e,"size"),g=R(e.defaultSize);!((t=e.watchProps)===null||t===void 0)&&t.includes("defaultSize")&&Rt(()=>g.value=e.defaultSize);const m=y=>{const $=e["onUpdate:size"];e.onUpdateSize&&te(e.onUpdateSize,y),$&&te($,y),g.value=y},l=He(d,g),b=B(()=>{const y=l.value;if(typeof y=="string")return{flex:`0 0 ${y}`};if(typeof y=="number"){const $=y*100;return{flex:`0 0 calc(${$}% - ${e.resizeTriggerSize*$/100}px)`}}}),p=B(()=>e.direction==="horizontal"?{width:`${e.resizeTriggerSize}px`,height:"100%"}:{width:"100%",height:`${e.resizeTriggerSize}px`}),u=B(()=>{const y=e.direction==="horizontal";return{width:y?`${e.resizeTriggerSize}px`:"",height:y?"":`${e.resizeTriggerSize}px`,cursor:e.direction==="horizontal"?"col-resize":"row-resize"}});let h=0;const f=y=>{y.preventDefault(),c.value=!0,e.onDragStart&&e.onDragStart(y);const $="mousemove",z="mouseup",x=O=>{v(O),e.onDragMove&&e.onDragMove(O)},k=()=>{De($,document,x),De(z,document,k),c.value=!1,e.onDragEnd&&e.onDragEnd(y),document.body.style.cursor=""};document.body.style.cursor=u.value.cursor,Ie($,document,x),Ie(z,document,k);const S=i.value;if(S){const O=S.getBoundingClientRect();e.direction==="horizontal"?h=y.clientX-O.left:h=O.top-y.clientY}v(y)};function v(y){var $,z;const x=(z=($=i.value)===null||$===void 0?void 0:$.parentElement)===null||z===void 0?void 0:z.getBoundingClientRect();if(!x)return;const{direction:k}=e,S=x.width-e.resizeTriggerSize,O=x.height-e.resizeTriggerSize,V=k==="horizontal"?S:O,L=k==="horizontal"?y.clientX-x.left-h:y.clientY-x.top+h,{min:q,max:Y}=e,ae=typeof q=="string"?Fe(q):q*V,M=typeof Y=="string"?Fe(Y):Y*V;let T=L;T=Math.max(T,ae),T=Math.min(T,M,V),typeof l.value=="string"?m(`${T}px`):m(T/V)}const _=r?re("split",void 0,s,e):void 0;return{themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender,cssVars:r?void 0:s,resizeTriggerElRef:i,isDragging:c,mergedClsPrefix:o,resizeTriggerWrapperStyle:u,resizeTriggerStyle:p,handleMouseDown:f,firstPaneStyle:b}},render(){var e,t,o,r,n;return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${this.mergedClsPrefix}-split`,`${this.mergedClsPrefix}-split--${this.direction}`,this.themeClass],style:this.cssVars},a("div",{class:[`${this.mergedClsPrefix}-split-pane-1`,this.pane1Class],style:[this.firstPaneStyle,this.pane1Style]},(o=(t=this.$slots)[1])===null||o===void 0?void 0:o.call(t)),!this.disabled&&a("div",{ref:"resizeTriggerElRef",class:`${this.mergedClsPrefix}-split__resize-trigger-wrapper`,style:this.resizeTriggerWrapperStyle,onMousedown:this.handleMouseDown},It(this.$slots["resize-trigger"],()=>[a("div",{style:this.resizeTriggerStyle,class:[`${this.mergedClsPrefix}-split__resize-trigger`,this.isDragging&&`${this.mergedClsPrefix}-split__resize-trigger--hover`]})])),a("div",{class:[`${this.mergedClsPrefix}-split-pane-2`,this.pane2Class],style:this.pane2Style},(n=(r=this.$slots)[2])===null||n===void 0?void 0:n.call(r)))}}),Fo=C("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[H("&:first-child","margin-top: 0;"),H("&:last-child","margin-bottom: 0;")]),Do=Object.assign(Object.assign({},N.props),{depth:[String,Number]}),Oo=j({name:"P",props:Do,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=N("Typography","-p",Fo,Xe,e,t),n=B(()=>{const{depth:i}=e,c=i||"1",{common:{cubicBezierEaseInOut:d},self:{pFontSize:g,pLineHeight:m,pMargin:l,pTextColor:b,[`pTextColor${c}Depth`]:p}}=r.value;return{"--n-bezier":d,"--n-font-size":g,"--n-line-height":m,"--n-margin":l,"--n-text-color":i===void 0?b:p}}),s=o?re("p",B(()=>`${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),a("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),Eo=C("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[P("strong",`
 font-weight: var(--n-font-weight-strong);
 `),P("italic",{fontStyle:"italic"}),P("underline",{textDecoration:"underline"}),P("code",`
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
 `)]),Uo=Object.assign(Object.assign({},N.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),jo=j({name:"Text",props:Uo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=N("Typography","-text",Eo,Xe,e,t),n=B(()=>{const{depth:i,type:c}=e,d=c==="default"?i===void 0?"textColor":`textColor${i}Depth`:W("textColor",c),{common:{fontWeightStrong:g,fontFamilyMono:m,cubicBezierEaseInOut:l},self:{codeTextColor:b,codeBorderRadius:p,codeColor:u,codeBorder:h,[d]:f}}=r.value;return{"--n-bezier":l,"--n-text-color":f,"--n-font-weight-strong":g,"--n-font-famliy-mono":m,"--n-code-border-radius":p,"--n-code-text-color":b,"--n-code-color":u,"--n-code-border":h}}),s=o?re("text",B(()=>`${e.type[0]}${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:t,compitableTag:Ft(e,["as","tag"]),cssVars:o?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e,t,o;const{mergedClsPrefix:r}=this;(e=this.onRender)===null||e===void 0||e.call(this);const n=[`${r}-text`,this.themeClass,{[`${r}-text--code`]:this.code,[`${r}-text--delete`]:this.delete,[`${r}-text--strong`]:this.strong,[`${r}-text--italic`]:this.italic,[`${r}-text--underline`]:this.underline}],s=(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t);return this.code?a("code",{class:n,style:this.cssVars},this.delete?a("del",null,s):s):this.delete?a("del",{class:n,style:this.cssVars},s):a(this.compitableTag||"span",{class:n,style:this.cssVars},s)}}),Lo=j({__name:"CompressUpload",emits:["change"],setup(e,{expose:t,emit:o}){t();const r=o;function n(d){const g=Array.from(d).map(m=>({file:m,id:qt(),name:m.name,fileName:Dt(m.name),size:m.size,type:m.type,src:URL.createObjectURL(m)}));r("change",g)}function s(d){const g=d.target;g.files&&n(g.files)}function i(d){var m;const g=(m=d.dataTransfer)==null?void 0:m.files;g&&g.length&&n(g)}const c={emit:r,getFileList:n,handleChange:s,handleDropStop:i};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),Mo={class:"text-center"};function No(e,t,o,r,n,s){const i=jo,c=Oo;return U(),A("div",{id:"CompressUpload",class:"relative border border-border rounded-6 border-dashed p-10 transition-all hover:border-primary",onDragover:t[0]||(t[0]=Oe(()=>{},["prevent"])),onDrop:Oe(r.handleDropStop,["stop","prevent"])},[t[3]||(t[3]=w("label",{class:"absolute left-0 top-0 z-1 size-full cursor-pointer",for:"image-uploader"},null,-1)),w("input",{id:"image-uploader",class:"hidden",type:"file",accept:"image/png,image/jpeg,image/avif",multiple:"",onChange:r.handleChange},null,32),w("div",Mo,[E(i,{depth:"3"},{default:I(()=>t[1]||(t[1]=[w("span",{class:"i-mage-image-upload text-40"},null,-1)])),_:1})]),E(c,{class:"mt-0 text-center text-14",depth:"3"},{default:I(()=>t[2]||(t[2]=[J(" 拖拽文件到该区域或点击选择图片 ")])),_:1})],32)}const Ao=ne(Lo,[["render",No],["__file","CompressUpload.vue"]]),Wo=j({__name:"CompressProgress",props:{compressList:{},successList:{},failedList:{},compressEnd:{type:Boolean},percentage:{}},setup(e,{expose:t}){t();const o=e,r=B(()=>o.compressEnd?o.successList.length===o.compressList.length?"success":o.failedList.length===o.compressList.length?"error":"warning":"default"),n={props:o,getProgressStatus:r};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Ho={id:"CompressProgress",class:"mt-10 flex items-center"},Vo={key:0,class:"ml-4 flex items-center"},qo={key:0,class:"i-solar-check-circle-bold ml-4 text-success"},Yo={class:"text-14"},Go={class:"text-success"},Xo={class:"text-error"};function Ko(e,t,o,r,n,s){const i=Bo,c=we;return U(),A("div",Ho,[E(i,{class:"flex-1",type:"line",status:r.getProgressStatus,percentage:o.percentage,"indicator-placement":"inside"},null,8,["status","percentage"]),o.compressEnd?(U(),A("div",Vo,[o.successList.length===o.compressList.length?(U(),A("div",qo)):(U(),ie(c,{key:1},{trigger:I(()=>[w("div",{class:de(["i-solar-info-circle-bold",{"text-error":o.failedList.length===o.compressList.length,"text-warning":o.successList.length!==o.compressList.length}])},null,2)]),default:I(()=>[w("div",Yo,[w("div",null,"总数："+X(o.compressList.length),1),w("div",null,[t[0]||(t[0]=w("span",null,"成功：",-1)),w("span",Go,X(o.successList.length),1)]),w("div",null,[t[1]||(t[1]=w("span",null,"失败：",-1)),w("span",Xo,X(o.failedList.length),1)])])]),_:1}))])):K("",!0)])}const Zo=ne(Wo,[["render",Ko],["__file","CompressProgress.vue"]]),Jo=j({__name:"CompressOption",props:{checked:{required:!0},checkedModifiers:{}},emits:["update:checked"],setup(e,{expose:t}){t();const o=Ke(e,"checked"),r=[{label:"WebP",value:"webp",tip:"压缩率较高，大多数浏览器支持"},{label:"AVIF",value:"avif",tip:"压缩率极高，部分现代浏览器支持"},{label:"JPEG",value:"jpeg",tip:"兼容性最好，所有浏览器支持"}];function n(i){o.value=i}const s={modelChecked:o,outputs:r,handleChange:n};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),Qo={id:"CompressOption"},er={class:"color-grey"};function tr(e,t,o,r,n,s){const i=Ht,c=Be;return U(),A("div",Qo,[t[0]||(t[0]=w("div",{class:"font-600"}," 图片压缩格式 ",-1)),E(c,{vertical:""},{default:I(()=>[(U(),A(ke,null,Ze(r.outputs,d=>E(i,{key:d.value,checked:r.modelChecked===d.value,value:d.value,onChange:g=>r.handleChange(d.value)},{default:I(()=>[J(X(d.label)+" ",1),w("span",er,X(d.tip),1)]),_:2},1032,["checked","value","onChange"])),64))]),_:1})])}const or=ne(Jo,[["render",tr],["__file","CompressOption.vue"]]),rr=j({__name:"CompressPreview",props:{src:{},compressedSrc:{}},setup(e,{expose:t}){t();const o=R(.5),r=R(),{width:n}=Ot(r),s={split:o,leftBox:r,width:n};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),nr={id:"CompressPreview",class:"mb-10"},sr={key:0,class:"flex justify-between text-14"},ir={class:"h-250 overflow-hidden rounded-6"},lr=["src"],ar={ref:"leftBox",class:"size-full"},cr=["src"],dr={class:"size-full"},ur=["src"];function gr(e,t,o,r,n,s){const i=Io;return U(),A("div",nr,[o.src&&o.compressedSrc?(U(),A("div",sr,t[1]||(t[1]=[w("span",null,"压缩前",-1),w("span",null,"压缩后",-1)]))):K("",!0),w("div",ir,[o.src&&!o.compressedSrc?(U(),A("img",{key:0,class:"size-full object-cover",src:o.src},null,8,lr)):K("",!0),o.src&&o.compressedSrc?(U(),ie(i,{key:1,size:r.split,"onUpdate:size":t[0]||(t[0]=c=>r.split=c),"resize-trigger-size":2,class:"relative h-full"},{1:I(()=>[w("div",ar,[w("img",{class:"absolute left-0 top-0 z-1 size-full object-cover",src:o.src,style:Et({clip:`rect(auto, ${r.width}px, auto, auto)`})},null,12,cr)],512)]),2:I(()=>[w("div",dr,[w("img",{class:"absolute left-0 top-0 size-full object-cover",src:o.compressedSrc},null,8,ur)])]),"resize-trigger":I(()=>t[2]||(t[2]=[w("div",{class:"relative z-1 h-full bg-primary"},[w("div",{class:"size-40 flex items-center border-2 border-primary rounded-1/2 border-solid absolute-center"},[w("span",{class:"i-ri-arrow-left-s-fill text-22 color-primary"}),w("span",{class:"i-ri-arrow-right-s-fill text-22 color-primary"})])],-1)])),_:1},8,["size"])):K("",!0)])])}const fr=ne(rr,[["render",gr],["__file","CompressPreview.vue"]]),pr=j({__name:"CompressList",props:Ut({list:{}},{active:{required:!0},activeModifiers:{}}),emits:["update:active"],setup(e,{expose:t}){t();const o=Ke(e,"active");function r(s){o.value=s}const n={modelActive:o,handleSelect:r,get downloadFile(){return Je},get formatFileSize(){return jt}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),hr={class:"image-list"},mr=["onClick"],vr={class:"h-150 w-full"},br=["src"],yr={class:"flex items-center justify-between px-8 py-4"},Cr={class:"text-12"},xr=["onClick"];function _r(e,t,o,r,n,s){const i=Qe,c=lo,d=eo,g=we,m=Be;return U(),A("div",hr,[(U(!0),A(ke,null,Ze(o.list,l=>(U(),A("div",{key:l.id,class:de(["cursor-pointer overflow-hidden border border-border rounded-6 border-solid transition-all not-first:mt-10 hover:border-primary",{"border-primary":r.modelActive===l.id,"border-error!":l.status==="failed"}]),onClick:b=>r.handleSelect(l.id)},[E(i,{show:l.status==="processing"},{default:I(()=>[w("div",vr,[w("img",{class:"size-full object-cover",src:l.src,"no-view":""},null,8,br)])]),_:2},1032,["show"]),w("div",yr,[E(c,{class:de(["flex-1 text-12",{"text-error":l.status==="failed"}])},{default:I(()=>[J(X(l.name),1)]),_:2},1032,["class"]),E(m,{size:4},{default:I(()=>[E(d,{class:de(["rounded-4",{"line-through":l.compressedFile}]),type:l.status==="failed"?"error":"default",size:"small"},{default:I(()=>[J(X(r.formatFileSize(l.file.size)),1)]),_:2},1032,["class","type"]),l.compressedFile?(U(),ie(d,{key:0,class:"rounded-4",type:"success",size:"small"},{default:I(()=>[J(X(r.formatFileSize(l.compressedFile.size)),1)]),_:2},1024)):K("",!0),l.failedInfo?(U(),ie(g,{key:1,class:"max-h-150 max-w-200",trigger:"hover",scrollable:""},{trigger:I(()=>t[0]||(t[0]=[w("div",{class:"i-solar-info-circle-bold text-error"},null,-1)])),default:I(()=>[w("div",Cr,X(l.failedInfo),1)]),_:2},1024)):K("",!0)]),_:2},1024)]),l.compressedFile?(U(),A("div",{key:0,class:"cursor-pointer border-t border-border border-t-solid bg-primary-1 text-center text-12 leading-30 transition-all dark:bg-primary-2 dark:hover:bg-primary-3 hover:bg-primary-2",onClick:b=>r.downloadFile(l.compressedFile,l.compressedFile.name)}," 点击下载 ",8,xr)):K("",!0)],10,mr))),128))])}const Sr=ne(pr,[["render",_r],["__file","CompressList.vue"]]);"stream"in Blob.prototype||Object.defineProperty(Blob.prototype,"stream",{value(){return new Response(this).body}}),"setBigUint64"in DataView.prototype||Object.defineProperty(DataView.prototype,"setBigUint64",{value(e,t,o){const r=Number(0xffffffffn&t),n=Number(t>>32n);this.setUint32(e+(o?0:4),r,o),this.setUint32(e+(o?4:0),n,o)}});var le=e=>new DataView(new ArrayBuffer(e)),Z=e=>new Uint8Array(e.buffer||e),se=e=>new TextEncoder().encode(String(e)),oe=e=>Math.min(4294967295,Number(e)),Me=e=>Math.min(65535,Number(e));function wr(e,t){if(t===void 0||t instanceof Date||(t=new Date(t)),e instanceof File)return{isFile:1,t:t||new Date(e.lastModified),i:e.stream()};if(e instanceof Response)return{isFile:1,t:t||new Date(e.headers.get("Last-Modified")||Date.now()),i:e.body};if(t===void 0)t=new Date;else if(isNaN(t))throw new Error("Invalid modification date.");if(e===void 0)return{isFile:0,t};if(typeof e=="string")return{isFile:1,t,i:se(e)};if(e instanceof Blob)return{isFile:1,t,i:e.stream()};if(e instanceof Uint8Array||e instanceof ReadableStream)return{isFile:1,t,i:e};if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return{isFile:1,t,i:Z(e)};if(Symbol.asyncIterator in e)return{isFile:1,t,i:st(e[Symbol.asyncIterator]())};throw new TypeError("Unsupported input format.")}function st(e,t=e){return new ReadableStream({async pull(o){let r=0;for(;o.desiredSize>r;){const n=await e.next();if(!n.value){o.close();break}{const s=zr(n.value);o.enqueue(s),r+=s.byteLength}}},cancel(o){var r;(r=t.throw)==null||r.call(t,o)}})}function zr(e){return typeof e=="string"?se(e):e instanceof Uint8Array?e:Z(e)}function it(e,t,o){let[r,n]=function(s){return s?s instanceof Uint8Array?[s,1]:ArrayBuffer.isView(s)||s instanceof ArrayBuffer?[Z(s),1]:[se(s),0]:[void 0,0]}(t);if(e instanceof File)return{o:ye(r||se(e.name)),u:BigInt(e.size),l:n};if(e instanceof Response){const s=e.headers.get("content-disposition"),i=s&&s.match(/;\s*filename\*?\s*=\s*(?:UTF-\d+''|)["']?([^;"'\r\n]*)["']?(?:;|$)/i),c=i&&i[1]||e.url&&new URL(e.url).pathname.split("/").findLast(Boolean),d=c&&decodeURIComponent(c),g=o||+e.headers.get("content-length");return{o:ye(r||se(d)),u:BigInt(g),l:n}}return r=ye(r,e!==void 0||o!==void 0),typeof e=="string"?{o:r,u:BigInt(se(e).length),l:n}:e instanceof Blob?{o:r,u:BigInt(e.size),l:n}:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?{o:r,u:BigInt(e.byteLength),l:n}:{o:r,u:kr(e,o),l:n}}function kr(e,t){return t>-1?BigInt(t):e?void 0:0n}function ye(e,t=1){if(!e||e.every(o=>o===47))throw new Error("The file must have a name.");if(t)for(;e[e.length-1]===47;)e=e.subarray(0,-1);else e[e.length-1]!==47&&(e=new Uint8Array([...e,47]));return e}var lt=new Uint32Array(256);for(let e=0;e<256;++e){let t=e;for(let o=0;o<8;++o)t=t>>>1^(1&t&&3988292384);lt[e]=t}function Ne(e,t=0){t^=-1;for(var o=0,r=e.length;o<r;o++)t=t>>>8^lt[255&t^e[o]];return(-1^t)>>>0}function at(e,t,o=0){const r=e.getSeconds()>>1|e.getMinutes()<<5|e.getHours()<<11,n=e.getDate()|e.getMonth()+1<<5|e.getFullYear()-1980<<9;t.setUint16(o,r,1),t.setUint16(o+2,n,1)}function Br({o:e,l:t},o){return 8*(!t||(o??function(r){try{$r.decode(r)}catch{return 0}return 1}(e)))}var $r=new TextDecoder("utf8",{fatal:1});function Pr(e,t=0){const o=le(30);return o.setUint32(0,1347093252),o.setUint32(4,754976768|t),at(e.t,o,10),o.setUint16(26,e.o.length,1),Z(o)}async function*Tr(e){let{i:t}=e;if("then"in t&&(t=await t),t instanceof Uint8Array)yield t,e.m=Ne(t,0),e.u=BigInt(t.length);else{e.u=0n;const o=t.getReader();for(;;){const{value:r,done:n}=await o.read();if(n)break;e.m=Ne(r,e.m),e.u+=BigInt(r.length),yield r}}}function Rr(e,t){const o=le(16+(t?8:0));return o.setUint32(0,1347094280),o.setUint32(4,e.isFile?e.m:0,1),t?(o.setBigUint64(8,e.u,1),o.setBigUint64(16,e.u,1)):(o.setUint32(8,oe(e.u),1),o.setUint32(12,oe(e.u),1)),Z(o)}function Ir(e,t,o=0,r=0){const n=le(46);return n.setUint32(0,1347092738),n.setUint32(4,755182848),n.setUint16(8,2048|o),at(e.t,n,12),n.setUint32(16,e.isFile?e.m:0,1),n.setUint32(20,oe(e.u),1),n.setUint32(24,oe(e.u),1),n.setUint16(28,e.o.length,1),n.setUint16(30,r,1),n.setUint16(40,e.isFile?33204:16893,1),n.setUint32(42,oe(t),1),Z(n)}function Fr(e,t,o){const r=le(o);return r.setUint16(0,1,1),r.setUint16(2,o-4,1),16&o&&(r.setBigUint64(4,e.u,1),r.setBigUint64(12,e.u,1)),r.setBigUint64(o-8,t,1),Z(r)}function ct(e){return e instanceof File||e instanceof Response?[[e],[e]]:[[e.input,e.name,e.size],[e.input,e.lastModified]]}var Dr=e=>function(t){let o=BigInt(22),r=0n,n=0;for(const s of t){if(!s.o)throw new Error("Every file must have a non-empty name.");if(s.u===void 0)throw new Error(`Missing size for file "${new TextDecoder().decode(s.o)}".`);const i=s.u>=0xffffffffn,c=r>=0xffffffffn;r+=BigInt(46+s.o.length+(i&&8))+s.u,o+=BigInt(s.o.length+46+(12*c|28*i)),n||(n=i)}return(n||r>=0xffffffffn)&&(o+=BigInt(76)),o+r}(function*(t){for(const o of t)yield it(...ct(o)[0])}(e));function Or(e,t={}){const o={"Content-Type":"application/zip","Content-Disposition":"attachment"};return(typeof t.length=="bigint"||Number.isInteger(t.length))&&t.length>0&&(o["Content-Length"]=String(t.length)),t.metadata&&(o["Content-Length"]=String(Dr(t.metadata))),new Response(Er(e,t),{headers:o})}function Er(e,t={}){const o=function(r){var s;const n=r[Symbol.iterator in r?Symbol.iterator:Symbol.asyncIterator]();return{async next(){const i=await n.next();if(i.done)return i;const[c,d]=ct(i.value);return{done:0,value:Object.assign(wr(...d),it(...c))}},throw:(s=n.throw)==null?void 0:s.bind(n),[Symbol.asyncIterator](){return this}}}(e);return st(async function*(r,n){const s=[];let i=0n,c=0n,d=0;for await(const l of r){const b=Br(l,n.buffersAreUTF8);yield Pr(l,b),yield new Uint8Array(l.o),l.isFile&&(yield*Tr(l));const p=l.u>=0xffffffffn,u=12*(i>=0xffffffffn)|28*p;yield Rr(l,p),s.push(Ir(l,i,b,u)),s.push(l.o),u&&s.push(Fr(l,i,u)),p&&(i+=8n),c++,i+=BigInt(46+l.o.length)+l.u,d||(d=p)}let g=0n;for(const l of s)yield l,g+=BigInt(l.length);if(d||i>=0xffffffffn){const l=le(76);l.setUint32(0,1347094022),l.setBigUint64(4,BigInt(44),1),l.setUint32(12,755182848),l.setBigUint64(24,c,1),l.setBigUint64(32,c,1),l.setBigUint64(40,g,1),l.setBigUint64(48,i,1),l.setUint32(56,1347094023),l.setBigUint64(64,i+g,1),l.setUint32(72,1,1),yield Z(l)}const m=le(22);m.setUint32(0,1347093766),m.setUint16(8,Me(c),1),m.setUint16(10,Me(c),1),m.setUint32(12,oe(g),1),m.setUint32(16,oe(i),1),yield Z(m)}(o,t),o)}const Ur=j({__name:"index",setup(e,{expose:t}){t();const o=Lt(),r=R([]),n=R([]),s=R(""),i=R(0),c=R(!0),d=R(!1),g=R(!1),m=R(!1),l=R(!1),b=R("webp"),p=B(()=>n.value.find(S=>S.id===s.value)),u=B(()=>n.value.filter(S=>S.status==="success"&&S.compressedFile)),h=B(()=>n.value.filter(S=>S.status==="failed")),f=B(()=>{var S;return(S=p.value)==null?void 0:S.src}),v=B(()=>{var S;return(S=p.value)==null?void 0:S.compressedSrc});let _;try{y()}catch(S){console.log("loadModules error",S),c.value=!1,o.error({title:"加载异常",content:"依赖资源加载异常，请刷新页面后重试",positiveText:"重试",onPositiveClick:()=>{window.location.reload()}})}async function y(){const[S,O,V,L]=await Promise.all([pe(()=>import("https://unpkg.com/@jsquash/avif@1.3.0?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/jpeg@1.4.0?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/png@3.0.1?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/webp@1.4.0?module"),[])]);c.value=!1,m.value=!0,_=async()=>{d.value=!0,g.value=!1,n.value=Mt(r.value);for(let M=0;M<n.value.length;M++){const T=n.value[M];try{const ee=T.file.type.replace("image/","");T.status="processing";const me=await T.file.arrayBuffer(),ve=await ae(ee,me),ge=`image/${b.value}`,be=new Blob([ve],{type:ge});T.compressedFile=new File([be],`${T.fileName}.${b.value}`,{type:ge}),T.compressedSrc=URL.createObjectURL(T.compressedFile),T.status="success"}catch(ee){T.status="failed",T.failedInfo=Ee(ee)}i.value=Math.round((M+1)/n.value.length*100)}d.value=!1,g.value=!0};async function q(M,T){switch(M){case"avif":return await S.decode(T);case"jpeg":return await O.decode(T);case"png":return await V.decode(T);case"webp":return await L.decode(T);default:throw new Error(`Unknown source type: ${M}`)}}async function Y(M){switch(b.value){case"avif":return await S.encode(M);case"jpeg":return await O.encode(M);case"png":return await V.encode(M);case"webp":return await L.encode(M);default:throw new Error(`Unknown output type: ${b.value}`)}}async function ae(M,T){const ee=await q(M,T);return Y(ee)}}function $(S){r.value=S,n.value=S,!s.value&&S.length&&(s.value=S[0].id)}function z(){r.value=[],s.value="",n.value=[],d.value=!1,g.value=!1}async function x(){try{const S=u.value.map(V=>V.compressedFile),O=await Or(S).blob();Je(O,`liubing.me_compressed_${Date.now()}.zip`)}catch(S){window.$message.error(Ee(S))}}const k={dialog:o,defaultCompressList:r,compressList:n,active:s,percentage:i,showSpin:c,compressing:d,compressEnd:g,loadSuccess:m,downloadAllLoading:l,outputType:b,activeInfo:p,successList:u,failedList:h,activeSrc:f,activeCompressedSrc:v,get handleCompress(){return _},set handleCompress(S){_=S},loadModules:y,handleChange:$,handleReset:z,handleDownloadAll:x};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}}),jr={key:0,class:"border border-border rounded-6 border-solid"},Lr={class:"border-r border-border border-r-solid p-10"},Mr={class:"py-10 pl-20 pr-10"},Nr={class:"mt-10 flex justify-end"};function Ar(e,t,o,r,n,s){const i=Sr,c=yo,d=fr,g=or,m=Zo,l=Nt,b=Be,p=po,u=fo,h=Ao,f=Qe;return U(),A("div",{class:de(["compress-image relative",{"opacity-50":!r.loadSuccess&&!r.showSpin,"after:content-empty after:absolute after:size-full after:top-0 after:z-1 after:cursor-not-allowed":!r.loadSuccess&&!r.showSpin}])},[E(f,{show:r.showSpin},{description:I(()=>t[3]||(t[3]=[w("div",{"text-center":"","text-14":""},[w("div",null,"依赖资源加载中..."),w("div",null,"首次加载较慢，请耐心等待")],-1)])),default:I(()=>[r.compressList.length?(U(),A("div",jr,[E(u,{"has-sider":"",class:"h-[calc(100vh-150px)]"},{default:I(()=>[E(c,{"collapse-mode":"transform","collapsed-width":0,width:300,"show-trigger":"arrow-circle",bordered:""},{default:I(()=>[w("div",Lr,[E(i,{active:r.active,"onUpdate:active":t[0]||(t[0]=v=>r.active=v),list:r.compressList},null,8,["active","list"])])]),_:1}),E(p,null,{default:I(()=>[w("div",Mr,[r.activeSrc?(U(),ie(d,{key:0,src:r.activeSrc,"compressed-src":r.activeCompressedSrc},null,8,["src","compressed-src"])):K("",!0),E(g,{checked:r.outputType,"onUpdate:checked":t[1]||(t[1]=v=>r.outputType=v)},null,8,["checked"]),r.compressing||r.compressEnd?(U(),ie(m,{key:1,"compress-list":r.compressList,"success-list":r.successList,"failed-list":r.failedList,"compress-end":r.compressEnd,percentage:r.percentage},null,8,["compress-list","success-list","failed-list","compress-end","percentage"])):K("",!0),w("div",Nr,[E(b,null,{default:I(()=>[E(l,{type:"tertiary",disabled:r.compressing,onClick:r.handleReset},{default:I(()=>t[4]||(t[4]=[J(" 重置 ")])),_:1},8,["disabled"]),E(l,{type:"primary",disabled:r.downloadAllLoading||!r.successList.length||r.compressing,loading:r.downloadAllLoading,onClick:r.handleDownloadAll},{default:I(()=>t[5]||(t[5]=[J(" 批量下载 ")])),_:1},8,["disabled","loading"]),E(l,{type:"primary",disabled:r.compressing,loading:r.compressing,onClick:r.handleCompress},{default:I(()=>t[6]||(t[6]=[J(" 压缩 ")])),_:1},8,["disabled","loading","onClick"])]),_:1})])])]),_:1})]),_:1})])):(U(),A(ke,{key:1},[E(h,{onChange:r.handleChange}),E(g,{checked:r.outputType,"onUpdate:checked":t[2]||(t[2]=v=>r.outputType=v),class:"mt-10"},null,8,["checked"])],64))]),_:1},8,["show"])],2)}const Wr=ne(Ur,[["render",Ar],["__file","index.vue"]]),Hr={};function Vr(e,t){const o=Wr,r=Wt("ClientOnly");return U(),A("div",null,[t[0]||(t[0]=At('<h1 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩"><span>图片压缩</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>工具依赖加载<a href="https://unpkg.com/" target="_blank" rel="noopener noreferrer">unpkg</a>的资源，国内用户可能需要开启魔法上网。</p></div><div class="hint-container tip"><p class="hint-container-title">温馨提示</p><p>纯本地图片压缩工具，不会上传您的任何图片信息，请放心使用。</p></div>',3)),E(r,null,{default:I(()=>[E(o)]),_:1})])}const Gr=ne(Hr,[["render",Vr],["__file","compress-image.html.vue"]]),Xr=JSON.parse('{"path":"/tools/compress-image.html","title":"图片压缩","lang":"zh-CN","frontmatter":{"toc":false,"pageInfo":false,"layout":"ToolLayout","description":"一个纯本地图片压缩工具，支持输出WebP、AVIF、JPEG格图片","head":[["meta",{"property":"og:url","content":"https://liubing.me/tools/compress-image.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"图片压缩"}],["meta",{"property":"og:description","content":"一个纯本地图片压缩工具，支持输出WebP、AVIF、JPEG格图片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-24T11:36:17.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-24T11:36:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图片压缩\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-24T11:36:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[],"git":{"createdTime":1732366923000,"updatedTime":1732448177000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":2,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":0.31,"words":94},"filePathRelative":"tools/compress-image.md","localizedDate":"2024年11月23日","excerpt":"\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>工具依赖加载<a href=\\"https://unpkg.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">unpkg</a>的资源，国内用户可能需要开启魔法上网。</p>\\n</div>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">温馨提示</p>\\n<p>纯本地图片压缩工具，不会上传您的任何图片信息，请放心使用。</p>\\n</div>"}');export{Gr as comp,Xr as data};
