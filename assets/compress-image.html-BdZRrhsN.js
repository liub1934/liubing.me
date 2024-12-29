import{t as vt,e as L,h as c,f as ve,g as bt,i as D,j as C,k as P,l as E,m as he,n as V,u as M,p as I,q as ne,v as Be,x as Ce,y as yt,z as B,A as H,B as Ct,C as le,D as De,E as Ee,N as xt,F as $e,G as se,H as Pe,I as _t,J as St,K as ze,L as xe,M as wt,O as zt,P as kt,Q as Bt,R as $t,S as qe,T as Ye,U as Te,V as Pt,W as Ge,X as J,Y as Xe,Z as Ke,$ as Ze,a0 as Je,a1 as Tt,a2 as Rt,a3 as It,a4 as Oe,a5 as Ue,a6 as Le,a7 as Qe,a8 as Ft,a9 as Dt,_ as ae,o as O,c as W,b as _,d as R,aa as T,ab as G,ac as je,ad as de,ae as me,af as Q,ag as ee,ah as ke,ai as Re,aj as et,ak as Ie,al as Et,am as Ot,an as Ut,ao as tt,ap as Lt,aq as ot,ar as jt,as as pe,at as At,au as Ae,av as Mt,aw as Nt,a as Wt,r as Ht}from"./app-iUePP8D9.js";import{_ as Vt,a as qt}from"./InputNumber-CY84vDwa.js";import"./Input-Bzepdc0y.js";var Yt=0;function Gt(e){var t=++Yt;return vt(e)+t}const Xt=L({name:"ChevronRight",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function Kt(e){const{textColor2:t,primaryColorHover:o,primaryColorPressed:r,primaryColor:n,infoColor:s,successColor:i,warningColor:a,errorColor:u,baseColor:g,borderColor:h,opacityDisabled:l,tagColor:b,closeIconColor:p,closeIconColorHover:d,closeIconColorPressed:m,borderRadiusSmall:f,fontSizeMini:v,fontSizeTiny:S,fontSizeSmall:y,fontSizeMedium:k,heightMini:z,heightTiny:x,heightSmall:$,heightMedium:N,closeColorHover:U,closeColorPressed:w,buttonColor2Hover:F,buttonColor2Pressed:Y,fontWeightStrong:K}=e;return Object.assign(Object.assign({},bt),{closeBorderRadius:f,heightTiny:z,heightSmall:x,heightMedium:$,heightLarge:N,borderRadius:f,opacityDisabled:l,fontSizeTiny:v,fontSizeSmall:S,fontSizeMedium:y,fontSizeLarge:k,fontWeightStrong:K,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:g,colorCheckable:"#0000",colorHoverCheckable:F,colorPressedCheckable:Y,colorChecked:n,colorCheckedHover:o,colorCheckedPressed:r,border:`1px solid ${h}`,textColor:t,color:b,colorBordered:"rgb(250, 250, 252)",closeIconColor:p,closeIconColorHover:d,closeIconColorPressed:m,closeColorHover:U,closeColorPressed:w,borderPrimary:`1px solid ${D(n,{alpha:.3})}`,textColorPrimary:n,colorPrimary:D(n,{alpha:.12}),colorBorderedPrimary:D(n,{alpha:.1}),closeIconColorPrimary:n,closeIconColorHoverPrimary:n,closeIconColorPressedPrimary:n,closeColorHoverPrimary:D(n,{alpha:.12}),closeColorPressedPrimary:D(n,{alpha:.18}),borderInfo:`1px solid ${D(s,{alpha:.3})}`,textColorInfo:s,colorInfo:D(s,{alpha:.12}),colorBorderedInfo:D(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:D(s,{alpha:.12}),closeColorPressedInfo:D(s,{alpha:.18}),borderSuccess:`1px solid ${D(i,{alpha:.3})}`,textColorSuccess:i,colorSuccess:D(i,{alpha:.12}),colorBorderedSuccess:D(i,{alpha:.1}),closeIconColorSuccess:i,closeIconColorHoverSuccess:i,closeIconColorPressedSuccess:i,closeColorHoverSuccess:D(i,{alpha:.12}),closeColorPressedSuccess:D(i,{alpha:.18}),borderWarning:`1px solid ${D(a,{alpha:.35})}`,textColorWarning:a,colorWarning:D(a,{alpha:.15}),colorBorderedWarning:D(a,{alpha:.12}),closeIconColorWarning:a,closeIconColorHoverWarning:a,closeIconColorPressedWarning:a,closeColorHoverWarning:D(a,{alpha:.12}),closeColorPressedWarning:D(a,{alpha:.18}),borderError:`1px solid ${D(u,{alpha:.23})}`,textColorError:u,colorError:D(u,{alpha:.1}),colorBorderedError:D(u,{alpha:.08}),closeIconColorError:u,closeIconColorHoverError:u,closeIconColorPressedError:u,closeColorHoverError:D(u,{alpha:.12}),closeColorPressedError:D(u,{alpha:.18})})}const Zt={name:"Tag",common:ve,self:Kt},Jt={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Qt=C("tag",`
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
 `),E("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),E("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),E("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),E("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),P("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[E("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),E("avatar",`
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
 `,[he("disabled",[V("&:hover","background-color: var(--n-color-hover-checkable);",[he("checked","color: var(--n-text-color-hover-checkable);")]),V("&:active","background-color: var(--n-color-pressed-checkable);",[he("checked","color: var(--n-text-color-pressed-checkable);")])]),P("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[he("disabled",[V("&:hover","background-color: var(--n-color-checked-hover);"),V("&:active","background-color: var(--n-color-checked-pressed);")])])])]),eo=Object.assign(Object.assign(Object.assign({},M.props),Jt),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),to=$e("n-tag"),oo=L({name:"Tag",props:eo,setup(e){const t=I(null),{mergedBorderedRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:n,mergedRtlRef:s}=ne(e),i=M("Tag","-tag",Qt,Zt,e,r);Be(to,{roundRef:Ce(e,"round")});function a(){if(!e.disabled&&e.checkable){const{checked:p,onCheckedChange:d,onUpdateChecked:m,"onUpdate:checked":f}=e;m&&m(!p),f&&f(!p),d&&d(!p)}}function u(p){if(e.triggerClickOnClose||p.stopPropagation(),!e.disabled){const{onClose:d}=e;d&&se(d,p)}}const g={setTextContent(p){const{value:d}=t;d&&(d.textContent=p)}},h=yt("Tag",s,r),l=B(()=>{const{type:p,size:d,color:{color:m,textColor:f}={}}=e,{common:{cubicBezierEaseInOut:v},self:{padding:S,closeMargin:y,borderRadius:k,opacityDisabled:z,textColorCheckable:x,textColorHoverCheckable:$,textColorPressedCheckable:N,textColorChecked:U,colorCheckable:w,colorHoverCheckable:F,colorPressedCheckable:Y,colorChecked:K,colorCheckedHover:ge,colorCheckedPressed:fe,closeBorderRadius:X,fontWeightStrong:_e,[H("colorBordered",p)]:Se,[H("closeSize",d)]:A,[H("closeIconSize",d)]:j,[H("fontSize",d)]:q,[H("height",d)]:oe,[H("color",p)]:Z,[H("textColor",p)]:re,[H("border",p)]:be,[H("closeIconColor",p)]:Fe,[H("closeIconColorHover",p)]:ft,[H("closeIconColorPressed",p)]:pt,[H("closeColorHover",p)]:ht,[H("closeColorPressed",p)]:mt}}=i.value,ye=Ct(y);return{"--n-font-weight-strong":_e,"--n-avatar-size-override":`calc(${oe} - 8px)`,"--n-bezier":v,"--n-border-radius":k,"--n-border":be,"--n-close-icon-size":j,"--n-close-color-pressed":mt,"--n-close-color-hover":ht,"--n-close-border-radius":X,"--n-close-icon-color":Fe,"--n-close-icon-color-hover":ft,"--n-close-icon-color-pressed":pt,"--n-close-icon-color-disabled":Fe,"--n-close-margin-top":ye.top,"--n-close-margin-right":ye.right,"--n-close-margin-bottom":ye.bottom,"--n-close-margin-left":ye.left,"--n-close-size":A,"--n-color":m||(o.value?Se:Z),"--n-color-checkable":w,"--n-color-checked":K,"--n-color-checked-hover":ge,"--n-color-checked-pressed":fe,"--n-color-hover-checkable":F,"--n-color-pressed-checkable":Y,"--n-font-size":q,"--n-height":oe,"--n-opacity-disabled":z,"--n-padding":S,"--n-text-color":f||re,"--n-text-color-checkable":x,"--n-text-color-checked":U,"--n-text-color-hover-checkable":$,"--n-text-color-pressed-checkable":N}}),b=n?le("tag",B(()=>{let p="";const{type:d,size:m,color:{color:f,textColor:v}={}}=e;return p+=d[0],p+=m[0],f&&(p+=`a${De(f)}`),v&&(p+=`b${De(v)}`),o.value&&(p+="c"),p}),l,e):void 0;return Object.assign(Object.assign({},g),{rtlEnabled:h,mergedClsPrefix:r,contentRef:t,mergedBordered:o,handleClick:a,handleCloseClick:u,cssVars:n?void 0:l,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender})},render(){var e,t;const{mergedClsPrefix:o,rtlEnabled:r,closable:n,color:{borderColor:s}={},round:i,onRender:a,$slots:u}=this;a==null||a();const g=Ee(u.avatar,l=>l&&c("div",{class:`${o}-tag__avatar`},l)),h=Ee(u.icon,l=>l&&c("div",{class:`${o}-tag__icon`},l));return c("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:r,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:i,[`${o}-tag--avatar`]:g,[`${o}-tag--icon`]:h,[`${o}-tag--closable`]:n}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},h||g,c("span",{class:`${o}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&n?c(xt,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?c("div",{class:`${o}-tag__border`,style:{borderColor:s}}):null)}});function ro(e){const{borderRadius:t,boxShadow2:o,baseColor:r}=e;return Object.assign(Object.assign({},St),{borderRadius:t,boxShadow:o,color:ze(r,"rgba(0, 0, 0, .85)"),textColor:r})}const rt=Pe({name:"Tooltip",common:ve,peers:{Popover:_t},self:ro}),no=Pe({name:"Ellipsis",common:ve,peers:{Tooltip:rt}}),so=Object.assign(Object.assign({},wt),M.props),io=L({name:"Tooltip",props:so,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=ne(e),o=M("Tooltip","-tooltip",void 0,rt,e,t),r=I(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(s){r.value.setShow(s)}}),{popoverRef:r,mergedTheme:o,popoverThemeOverrides:B(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return c(xe,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),lo=C("ellipsis",{overflow:"hidden"},[he("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),P("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),P("cursor-pointer",`
 cursor: pointer;
 `)]);function Me(e){return`${e}-ellipsis--line-clamp`}function Ne(e,t){return`${e}-ellipsis--cursor-${t}`}const ao=Object.assign(Object.assign({},M.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),co=L({name:"Ellipsis",inheritAttrs:!1,props:ao,setup(e,{slots:t,attrs:o}){const r=zt(),n=M("Ellipsis","-ellipsis",lo,no,e,r),s=I(null),i=I(null),a=I(null),u=I(!1),g=B(()=>{const{lineClamp:f}=e,{value:v}=u;return f!==void 0?{textOverflow:"","-webkit-line-clamp":v?"":f}:{textOverflow:v?"":"ellipsis","-webkit-line-clamp":""}});function h(){let f=!1;const{value:v}=u;if(v)return!0;const{value:S}=s;if(S){const{lineClamp:y}=e;if(p(S),y!==void 0)f=S.scrollHeight<=S.offsetHeight;else{const{value:k}=i;k&&(f=k.getBoundingClientRect().width<=S.getBoundingClientRect().width)}d(S,f)}return f}const l=B(()=>e.expandTrigger==="click"?()=>{var f;const{value:v}=u;v&&((f=a.value)===null||f===void 0||f.setShow(!1)),u.value=!v}:void 0);kt(()=>{var f;e.tooltip&&((f=a.value)===null||f===void 0||f.setShow(!1))});const b=()=>c("span",Object.assign({},Bt(o,{class:[`${r.value}-ellipsis`,e.lineClamp!==void 0?Me(r.value):void 0,e.expandTrigger==="click"?Ne(r.value,"pointer"):void 0],style:g.value}),{ref:"triggerRef",onClick:l.value,onMouseenter:e.expandTrigger==="click"?h:void 0}),e.lineClamp?t:c("span",{ref:"triggerInnerRef"},t));function p(f){if(!f)return;const v=g.value,S=Me(r.value);e.lineClamp!==void 0?m(f,S,"add"):m(f,S,"remove");for(const y in v)f.style[y]!==v[y]&&(f.style[y]=v[y])}function d(f,v){const S=Ne(r.value,"pointer");e.expandTrigger==="click"&&!v?m(f,S,"add"):m(f,S,"remove")}function m(f,v,S){S==="add"?f.classList.contains(v)||f.classList.add(v):f.classList.contains(v)&&f.classList.remove(v)}return{mergedTheme:n,triggerRef:s,triggerInnerRef:i,tooltipRef:a,handleClick:l,renderTrigger:b,getTooltipDisabled:h}},render(){var e;const{tooltip:t,renderTrigger:o,$slots:r}=this;if(t){const{mergedTheme:n}=this;return c(io,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip}),{trigger:o,default:(e=r.tooltip)!==null&&e!==void 0?e:r.default})}else return o()}});function uo(e){const{baseColor:t,textColor2:o,bodyColor:r,cardColor:n,dividerColor:s,actionColor:i,scrollbarColor:a,scrollbarColorHover:u,invertedColor:g}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:i,headerColor:n,headerColorInverted:g,footerColor:i,footerColorInverted:g,headerBorderColor:s,headerBorderColorInverted:g,footerBorderColor:s,footerBorderColorInverted:g,siderBorderColor:s,siderBorderColorInverted:g,siderColor:n,siderColorInverted:g,siderToggleButtonBorder:`1px solid ${s}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:ze(r,a),siderToggleBarColorHover:ze(r,u),__invertScrollbar:"true"}}const nt=Pe({name:"Layout",common:ve,peers:{Scrollbar:$t},self:uo}),go=$e("n-layout-sider"),st={type:String,default:"static"},fo=C("layout",`
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
 `)]),po={embedded:Boolean,position:st,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},it=$e("n-layout");function lt(e){return L({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},M.props),po),setup(t){const o=I(null),r=I(null),{mergedClsPrefixRef:n,inlineThemeDisabled:s}=ne(t),i=M("Layout","-layout",fo,nt,t,n);function a(m,f){if(t.nativeScrollbar){const{value:v}=o;v&&(f===void 0?v.scrollTo(m):v.scrollTo(m,f))}else{const{value:v}=r;v&&v.scrollTo(m,f)}}Be(it,t);let u=0,g=0;const h=m=>{var f;const v=m.target;u=v.scrollLeft,g=v.scrollTop,(f=t.onScroll)===null||f===void 0||f.call(t,m)};qe(()=>{if(t.nativeScrollbar){const m=o.value;m&&(m.scrollTop=g,m.scrollLeft=u)}});const l={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},b={scrollTo:a},p=B(()=>{const{common:{cubicBezierEaseInOut:m},self:f}=i.value;return{"--n-bezier":m,"--n-color":t.embedded?f.colorEmbedded:f.color,"--n-text-color":f.textColor}}),d=s?le("layout",B(()=>t.embedded?"e":""),p,t):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:l,mergedTheme:i,handleNativeElScroll:h,cssVars:s?void 0:p,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender},b)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const n=r?this.hasSiderStyle:void 0,s=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return c("div",{class:s,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):c(Ye,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const ho=lt(!1),mo=lt(!0),vo=C("layout-sider",`
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
`,[P("bordered",[E("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),E("left-placement",[P("bordered",[E("border",`
 right: 0;
 `)])]),P("right-placement",`
 justify-content: flex-start;
 `,[P("bordered",[E("border",`
 left: 0;
 `)]),P("collapsed",[C("layout-toggle-button",[C("base-icon",`
 transform: rotate(180deg);
 `)]),C("layout-toggle-bar",[V("&:hover",[E("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),E("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),C("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[C("base-icon",`
 transform: rotate(0);
 `)]),C("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[V("&:hover",[E("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),E("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),P("collapsed",[C("layout-toggle-bar",[V("&:hover",[E("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),E("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),C("layout-toggle-button",[C("base-icon",`
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
 `,[E("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),E("bottom",`
 position: absolute;
 top: 34px;
 `),V("&:hover",[E("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),E("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),E("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),V("&:hover",[E("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),E("border",`
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
 `)]),bo=L({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),yo=L({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(Te,{clsPrefix:e},{default:()=>c(Xt,null)}))}}),Co={position:st,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},xo=L({name:"LayoutSider",props:Object.assign(Object.assign({},M.props),Co),setup(e){const t=Pt(it),o=I(null),r=I(null),n=I(e.defaultCollapsed),s=Ge(Ce(e,"collapsed"),n),i=B(()=>J(s.value?e.collapsedWidth:e.width)),a=B(()=>e.collapseMode!=="transform"?{}:{minWidth:J(e.width)}),u=B(()=>t?t.siderPlacement:"left");function g(z,x){if(e.nativeScrollbar){const{value:$}=o;$&&(x===void 0?$.scrollTo(z):$.scrollTo(z,x))}else{const{value:$}=r;$&&$.scrollTo(z,x)}}function h(){const{"onUpdate:collapsed":z,onUpdateCollapsed:x,onExpand:$,onCollapse:N}=e,{value:U}=s;x&&se(x,!U),z&&se(z,!U),n.value=!U,U?$&&se($):N&&se(N)}let l=0,b=0;const p=z=>{var x;const $=z.target;l=$.scrollLeft,b=$.scrollTop,(x=e.onScroll)===null||x===void 0||x.call(e,z)};qe(()=>{if(e.nativeScrollbar){const z=o.value;z&&(z.scrollTop=b,z.scrollLeft=l)}}),Be(go,{collapsedRef:s,collapseModeRef:Ce(e,"collapseMode")});const{mergedClsPrefixRef:d,inlineThemeDisabled:m}=ne(e),f=M("Layout","-layout-sider",vo,nt,e,d);function v(z){var x,$;z.propertyName==="max-width"&&(s.value?(x=e.onAfterLeave)===null||x===void 0||x.call(e):($=e.onAfterEnter)===null||$===void 0||$.call(e))}const S={scrollTo:g},y=B(()=>{const{common:{cubicBezierEaseInOut:z},self:x}=f.value,{siderToggleButtonColor:$,siderToggleButtonBorder:N,siderToggleBarColor:U,siderToggleBarColorHover:w}=x,F={"--n-bezier":z,"--n-toggle-button-color":$,"--n-toggle-button-border":N,"--n-toggle-bar-color":U,"--n-toggle-bar-color-hover":w};return e.inverted?(F["--n-color"]=x.siderColorInverted,F["--n-text-color"]=x.textColorInverted,F["--n-border-color"]=x.siderBorderColorInverted,F["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColorInverted,F.__invertScrollbar=x.__invertScrollbar):(F["--n-color"]=x.siderColor,F["--n-text-color"]=x.textColor,F["--n-border-color"]=x.siderBorderColor,F["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColor),F}),k=m?le("layout-sider",B(()=>e.inverted?"a":"b"),y,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:d,mergedTheme:f,styleMaxWidth:i,mergedCollapsed:s,scrollContainerStyle:a,siderPlacement:u,handleNativeElScroll:p,handleTransitionend:v,handleTriggerClick:h,inlineThemeDisabled:m,cssVars:y,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender},S)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:J(this.width)}]},this.nativeScrollbar?c("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(Ye,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?c(bo,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(yo,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${t}-layout-sider__border`}):null)}}),_o={success:c(Xe,null),error:c(Ke,null),warning:c(Ze,null),info:c(Je,null)},So=L({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){function o(n,s,i,a){const{gapDegree:u,viewBoxWidth:g,strokeWidth:h}=e,l=50,b=0,p=l,d=0,m=2*l,f=50+h/2,v=`M ${f},${f} m ${b},${p}
      a ${l},${l} 0 1 1 ${d},${-m}
      a ${l},${l} 0 1 1 ${-d},${m}`,S=Math.PI*2*l,y={stroke:a==="rail"?i:typeof e.fillColor=="object"?"url(#gradient)":i,strokeDasharray:`${n/100*(S-u)}px ${g*8}px`,strokeDashoffset:`-${u/2}px`,transformOrigin:s?"center":void 0,transform:s?`rotate(${s}deg)`:void 0};return{pathString:v,pathStyle:y}}const r=()=>{const n=typeof e.fillColor=="object",s=n?e.fillColor.stops[0]:"",i=n?e.fillColor.stops[1]:"";return n&&c("defs",null,c("linearGradient",{id:"gradient",x1:"0%",y1:"100%",x2:"100%",y2:"0%"},c("stop",{offset:"0%","stop-color":s}),c("stop",{offset:"100%","stop-color":i})))};return()=>{const{fillColor:n,railColor:s,strokeWidth:i,offsetDegree:a,status:u,percentage:g,showIndicator:h,indicatorTextColor:l,unit:b,gapOffsetDegree:p,clsPrefix:d}=e,{pathString:m,pathStyle:f}=o(100,0,s,"rail"),{pathString:v,pathStyle:S}=o(g,a,n,"fill"),y=100+i;return c("div",{class:`${d}-progress-content`,role:"none"},c("div",{class:`${d}-progress-graph`,"aria-hidden":!0},c("div",{class:`${d}-progress-graph-circle`,style:{transform:p?`rotate(${p}deg)`:void 0}},c("svg",{viewBox:`0 0 ${y} ${y}`},r(),c("g",null,c("path",{class:`${d}-progress-graph-circle-rail`,d:m,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:f})),c("g",null,c("path",{class:[`${d}-progress-graph-circle-fill`,g===0&&`${d}-progress-graph-circle-fill--empty`],d:v,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:S}))))),h?c("div",null,t.default?c("div",{class:`${d}-progress-custom-content`,role:"none"},t.default()):u!=="default"?c("div",{class:`${d}-progress-icon`,"aria-hidden":!0},c(Te,{clsPrefix:d},{default:()=>_o[u]})):c("div",{class:`${d}-progress-text`,style:{color:l},role:"none"},c("span",{class:`${d}-progress-text__percentage`},g),c("span",{class:`${d}-progress-text__unit`},b))):null)}}}),wo={success:c(Xe,null),error:c(Ke,null),warning:c(Ze,null),info:c(Je,null)},zo=L({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const o=B(()=>J(e.height)),r=B(()=>{var i,a;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(i=e.fillColor)===null||i===void 0?void 0:i.stops[0]} , ${(a=e.fillColor)===null||a===void 0?void 0:a.stops[1]})`:e.fillColor}),n=B(()=>e.railBorderRadius!==void 0?J(e.railBorderRadius):e.height!==void 0?J(e.height,{c:.5}):""),s=B(()=>e.fillBorderRadius!==void 0?J(e.fillBorderRadius):e.railBorderRadius!==void 0?J(e.railBorderRadius):e.height!==void 0?J(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:i,railColor:a,railStyle:u,percentage:g,unit:h,indicatorTextColor:l,status:b,showIndicator:p,processing:d,clsPrefix:m}=e;return c("div",{class:`${m}-progress-content`,role:"none"},c("div",{class:`${m}-progress-graph`,"aria-hidden":!0},c("div",{class:[`${m}-progress-graph-line`,{[`${m}-progress-graph-line--indicator-${i}`]:!0}]},c("div",{class:`${m}-progress-graph-line-rail`,style:[{backgroundColor:a,height:o.value,borderRadius:n.value},u]},c("div",{class:[`${m}-progress-graph-line-fill`,d&&`${m}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:r.value,height:o.value,lineHeight:o.value,borderRadius:s.value}},i==="inside"?c("div",{class:`${m}-progress-graph-line-indicator`,style:{color:l}},t.default?t.default():`${g}${h}`):null)))),p&&i==="outside"?c("div",null,t.default?c("div",{class:`${m}-progress-custom-content`,style:{color:l},role:"none"},t.default()):b==="default"?c("div",{role:"none",class:`${m}-progress-icon ${m}-progress-icon--as-text`,style:{color:l}},g,h):c("div",{class:`${m}-progress-icon`,"aria-hidden":!0},c(Te,{clsPrefix:m},{default:()=>wo[b]}))):null)}}});function We(e,t,o=100){return`m ${o/2} ${o/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const ko=L({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const o=B(()=>e.percentage.map((s,i)=>`${Math.PI*s/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*i)-e.circleGap*i)*2}, ${e.viewBoxWidth*8}`)),r=(n,s)=>{const i=e.fillColor[s],a=typeof i=="object"?i.stops[0]:"",u=typeof i=="object"?i.stops[1]:"";return typeof e.fillColor[s]=="object"&&c("linearGradient",{id:`gradient-${s}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},c("stop",{offset:"0%","stop-color":a}),c("stop",{offset:"100%","stop-color":u}))};return()=>{const{viewBoxWidth:n,strokeWidth:s,circleGap:i,showIndicator:a,fillColor:u,railColor:g,railStyle:h,percentage:l,clsPrefix:b}=e;return c("div",{class:`${b}-progress-content`,role:"none"},c("div",{class:`${b}-progress-graph`,"aria-hidden":!0},c("div",{class:`${b}-progress-graph-circle`},c("svg",{viewBox:`0 0 ${n} ${n}`},c("defs",null,l.map((p,d)=>r(p,d))),l.map((p,d)=>c("g",{key:d},c("path",{class:`${b}-progress-graph-circle-rail`,d:We(n/2-s/2*(1+2*d)-i*d,s,n),"stroke-width":s,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:g[d]},h[d]]}),c("path",{class:[`${b}-progress-graph-circle-fill`,p===0&&`${b}-progress-graph-circle-fill--empty`],d:We(n/2-s/2*(1+2*d)-i*d,s,n),"stroke-width":s,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:o.value[d],strokeDashoffset:0,stroke:typeof u[d]=="object"?`url(#gradient-${d})`:u[d]}})))))),a&&t.default?c("div",null,c("div",{class:`${b}-progress-text`},t.default())):null)}}}),Bo=V([C("progress",{display:"inline-block"},[C("progress-icon",`
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
 `)]),C("progress-content",{position:"relative"}),C("progress-graph",{position:"relative"},[C("progress-graph-circle",[V("svg",{verticalAlign:"bottom"}),C("progress-graph-circle-fill",`
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
 `,[P("processing",[V("&::after",`
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
 `)]),$o=Object.assign(Object.assign({},M.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),Po=L({name:"Progress",props:$o,setup(e){const t=B(()=>e.indicatorPlacement||e.indicatorPosition),o=B(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:n}=ne(e),s=M("Progress","-progress",Bo,Tt,e,r),i=B(()=>{const{status:u}=e,{common:{cubicBezierEaseInOut:g},self:{fontSize:h,fontSizeCircle:l,railColor:b,railHeight:p,iconSizeCircle:d,iconSizeLine:m,textColorCircle:f,textColorLineInner:v,textColorLineOuter:S,lineBgProcessing:y,fontWeightCircle:k,[H("iconColor",u)]:z,[H("fillColor",u)]:x}}=s.value;return{"--n-bezier":g,"--n-fill-color":x,"--n-font-size":h,"--n-font-size-circle":l,"--n-font-weight-circle":k,"--n-icon-color":z,"--n-icon-size-circle":d,"--n-icon-size-line":m,"--n-line-bg-processing":y,"--n-rail-color":b,"--n-rail-height":p,"--n-text-color-circle":f,"--n-text-color-line-inner":v,"--n-text-color-line-outer":S}}),a=n?le("progress",B(()=>e.status[0]),i,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:o,cssVars:n?void 0:i,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:o,showIndicator:r,status:n,railColor:s,railStyle:i,color:a,percentage:u,viewBoxWidth:g,strokeWidth:h,mergedIndicatorPlacement:l,unit:b,borderRadius:p,fillBorderRadius:d,height:m,processing:f,circleGap:v,mergedClsPrefix:S,gapDeg:y,gapOffsetDegree:k,themeClass:z,$slots:x,onRender:$}=this;return $==null||$(),c("div",{class:[z,`${S}-progress`,`${S}-progress--${e}`,`${S}-progress--${n}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":u,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?c(So,{clsPrefix:S,status:n,showIndicator:r,indicatorTextColor:o,railColor:s,fillColor:a,railStyle:i,offsetDegree:this.offsetDegree,percentage:u,viewBoxWidth:g,strokeWidth:h,gapDegree:y===void 0?e==="dashboard"?75:0:y,gapOffsetDegree:k,unit:b},x):e==="line"?c(zo,{clsPrefix:S,status:n,showIndicator:r,indicatorTextColor:o,railColor:s,fillColor:a,railStyle:i,percentage:u,processing:f,indicatorPlacement:l,unit:b,fillBorderRadius:d,railBorderRadius:p,height:m},x):e==="multiple-circle"?c(ko,{clsPrefix:S,strokeWidth:h,railColor:s,fillColor:a,railStyle:i,viewBoxWidth:g,percentage:u,showIndicator:r,circleGap:v},x):null)}});function To(e){const{primaryColorHover:t,borderColor:o}=e;return{resizableTriggerColorHover:t,resizableTriggerColor:o}}const Ro={name:"Split",common:ve,self:To},Io=C("split",`
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
 `),E("resize-trigger",`
 background-color: var(--n-resize-trigger-color);
 transition: background-color .3s var(--n-bezier);
 `,[P("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `),V("&:hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)])]),Fo=Object.assign(Object.assign({},M.props),{direction:{type:String,default:"horizontal"},resizeTriggerSize:{type:Number,default:3},disabled:Boolean,defaultSize:{type:[String,Number],default:.5},"onUpdate:size":[Function,Array],onUpdateSize:[Function,Array],size:[String,Number],min:{type:[String,Number],default:0},max:{type:[String,Number],default:1},pane1Class:String,pane1Style:[Object,String],pane2Class:String,pane2Style:[Object,String],onDragStart:Function,onDragMove:Function,onDragEnd:Function,watchProps:Array}),Do=L({name:"Split",props:Fo,setup(e){var t;const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=ne(e),n=M("Split","-split",Io,Ro,e,o),s=B(()=>{const{common:{cubicBezierEaseInOut:y},self:{resizableTriggerColor:k,resizableTriggerColorHover:z}}=n.value;return{"--n-bezier":y,"--n-resize-trigger-color":k,"--n-resize-trigger-color-hover":z}}),i=I(null),a=I(!1),u=Ce(e,"size"),g=I(e.defaultSize);!((t=e.watchProps)===null||t===void 0)&&t.includes("defaultSize")&&Rt(()=>g.value=e.defaultSize);const h=y=>{const k=e["onUpdate:size"];e.onUpdateSize&&se(e.onUpdateSize,y),k&&se(k,y),g.value=y},l=Ge(u,g),b=B(()=>{const y=l.value;if(typeof y=="string")return{flex:`0 0 ${y}`};if(typeof y=="number"){const k=y*100;return{flex:`0 0 calc(${k}% - ${e.resizeTriggerSize*k/100}px)`}}}),p=B(()=>e.direction==="horizontal"?{width:`${e.resizeTriggerSize}px`,height:"100%"}:{width:"100%",height:`${e.resizeTriggerSize}px`}),d=B(()=>{const y=e.direction==="horizontal";return{width:y?`${e.resizeTriggerSize}px`:"",height:y?"":`${e.resizeTriggerSize}px`,cursor:e.direction==="horizontal"?"col-resize":"row-resize"}});let m=0;const f=y=>{y.preventDefault(),a.value=!0,e.onDragStart&&e.onDragStart(y);const k="mousemove",z="mouseup",x=U=>{v(U),e.onDragMove&&e.onDragMove(U)},$=()=>{Le(k,document,x),Le(z,document,$),a.value=!1,e.onDragEnd&&e.onDragEnd(y),document.body.style.cursor=""};document.body.style.cursor=d.value.cursor,Oe(k,document,x),Oe(z,document,$);const N=i.value;if(N){const U=N.getBoundingClientRect();e.direction==="horizontal"?m=y.clientX-U.left:m=U.top-y.clientY}v(y)};function v(y){var k,z;const x=(z=(k=i.value)===null||k===void 0?void 0:k.parentElement)===null||z===void 0?void 0:z.getBoundingClientRect();if(!x)return;const{direction:$}=e,N=x.width-e.resizeTriggerSize,U=x.height-e.resizeTriggerSize,w=$==="horizontal"?N:U,F=$==="horizontal"?y.clientX-x.left-m:y.clientY-x.top+m,{min:Y,max:K}=e,ge=typeof Y=="string"?Ue(Y):Y*w,fe=typeof K=="string"?Ue(K):K*w;let X=F;X=Math.max(X,ge),X=Math.min(X,fe,w),typeof l.value=="string"?h(`${X}px`):h(X/w)}const S=r?le("split",void 0,s,e):void 0;return{themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender,cssVars:r?void 0:s,resizeTriggerElRef:i,isDragging:a,mergedClsPrefix:o,resizeTriggerWrapperStyle:d,resizeTriggerStyle:p,handleMouseDown:f,firstPaneStyle:b}},render(){var e,t,o,r,n;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{class:[`${this.mergedClsPrefix}-split`,`${this.mergedClsPrefix}-split--${this.direction}`,this.themeClass],style:this.cssVars},c("div",{class:[`${this.mergedClsPrefix}-split-pane-1`,this.pane1Class],style:[this.firstPaneStyle,this.pane1Style]},(o=(t=this.$slots)[1])===null||o===void 0?void 0:o.call(t)),!this.disabled&&c("div",{ref:"resizeTriggerElRef",class:`${this.mergedClsPrefix}-split__resize-trigger-wrapper`,style:this.resizeTriggerWrapperStyle,onMousedown:this.handleMouseDown},It(this.$slots["resize-trigger"],()=>[c("div",{style:this.resizeTriggerStyle,class:[`${this.mergedClsPrefix}-split__resize-trigger`,this.isDragging&&`${this.mergedClsPrefix}-split__resize-trigger--hover`]})])),c("div",{class:[`${this.mergedClsPrefix}-split-pane-2`,this.pane2Class],style:this.pane2Style},(n=(r=this.$slots)[2])===null||n===void 0?void 0:n.call(r)))}}),Eo=C("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[V("&:first-child","margin-top: 0;"),V("&:last-child","margin-bottom: 0;")]),Oo=Object.assign(Object.assign({},M.props),{depth:[String,Number]}),Uo=L({name:"P",props:Oo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ne(e),r=M("Typography","-p",Eo,Qe,e,t),n=B(()=>{const{depth:i}=e,a=i||"1",{common:{cubicBezierEaseInOut:u},self:{pFontSize:g,pLineHeight:h,pMargin:l,pTextColor:b,[`pTextColor${a}Depth`]:p}}=r.value;return{"--n-bezier":u,"--n-font-size":g,"--n-line-height":h,"--n-margin":l,"--n-text-color":i===void 0?b:p}}),s=o?le("p",B(()=>`${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),c("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),Lo=C("text",`
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
 `)]),jo=Object.assign(Object.assign({},M.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),Ao=L({name:"Text",props:jo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ne(e),r=M("Typography","-text",Lo,Qe,e,t),n=B(()=>{const{depth:i,type:a}=e,u=a==="default"?i===void 0?"textColor":`textColor${i}Depth`:H("textColor",a),{common:{fontWeightStrong:g,fontFamilyMono:h,cubicBezierEaseInOut:l},self:{codeTextColor:b,codeBorderRadius:p,codeColor:d,codeBorder:m,[u]:f}}=r.value;return{"--n-bezier":l,"--n-text-color":f,"--n-font-weight-strong":g,"--n-font-famliy-mono":h,"--n-code-border-radius":p,"--n-code-text-color":b,"--n-code-color":d,"--n-code-border":m}}),s=o?le("text",B(()=>`${e.type[0]}${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:t,compitableTag:Ft(e,["as","tag"]),cssVars:o?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e,t,o;const{mergedClsPrefix:r}=this;(e=this.onRender)===null||e===void 0||e.call(this);const n=[`${r}-text`,this.themeClass,{[`${r}-text--code`]:this.code,[`${r}-text--delete`]:this.delete,[`${r}-text--strong`]:this.strong,[`${r}-text--italic`]:this.italic,[`${r}-text--underline`]:this.underline}],s=(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t);return this.code?c("code",{class:n,style:this.cssVars},this.delete?c("del",null,s):s):this.delete?c("del",{class:n,style:this.cssVars},s):c(this.compitableTag||"span",{class:n,style:this.cssVars},s)}}),Mo=L({__name:"CompressUpload",emits:["change"],setup(e,{expose:t,emit:o}){t();const r=o;function n(u){const g=Array.from(u).map(h=>({file:h,id:Gt(),fileName:Dt(h.name),src:URL.createObjectURL(h)}));r("change",g)}function s(u){const g=u.target;g.files&&n(g.files)}function i(u){var h;const g=(h=u.dataTransfer)==null?void 0:h.files;g&&g.length&&n(g)}const a={emit:r,getFileList:n,handleChange:s,handleDropStop:i};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),No={class:"text-center"};function Wo(e,t,o,r,n,s){const i=Ao,a=Uo;return O(),W("div",{id:"CompressUpload",class:"relative border border-border rounded-6 border-dashed p-10 transition-all hover:border-primary",onDragover:t[0]||(t[0]=je(()=>{},["prevent"])),onDrop:je(r.handleDropStop,["stop","prevent"])},[t[3]||(t[3]=_("label",{class:"absolute left-0 top-0 z-1 size-full cursor-pointer",for:"image-uploader"},null,-1)),_("input",{id:"image-uploader",class:"hidden",type:"file",accept:"image/png,image/jpeg,image/avif",multiple:"",onChange:r.handleChange},null,32),_("div",No,[R(i,{depth:"3"},{default:T(()=>t[1]||(t[1]=[_("span",{class:"i-mage-image-upload text-40"},null,-1)])),_:1})]),R(a,{class:"mt-0 text-center text-14",depth:"3"},{default:T(()=>t[2]||(t[2]=[G(" 拖拽文件到该区域或点击选择图片 ")])),_:1})],32)}const Ho=ae(Mo,[["render",Wo],["__file","CompressUpload.vue"]]),Vo=L({__name:"CompressProgress",props:{compressList:{},successList:{},failedList:{},compressEnd:{type:Boolean},percentage:{}},setup(e,{expose:t}){t();const o=e,r=B(()=>o.compressEnd?o.successList.length===o.compressList.length?"success":o.failedList.length===o.compressList.length?"error":"warning":"default"),n={props:o,getProgressStatus:r};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),qo={id:"CompressProgress",class:"mt-10 flex items-center"},Yo={key:0,class:"ml-4 flex items-center"},Go={key:0,class:"i-solar-check-circle-bold ml-4 text-success"},Xo={class:"text-14"},Ko={class:"text-success"},Zo={class:"text-error"};function Jo(e,t,o,r,n,s){const i=Po,a=xe;return O(),W("div",qo,[R(i,{class:"flex-1",type:"line",status:r.getProgressStatus,percentage:o.percentage,"indicator-placement":"inside"},null,8,["status","percentage"]),o.compressEnd?(O(),W("div",Yo,[o.successList.length===o.compressList.length?(O(),W("div",Go)):(O(),de(a,{key:1},{trigger:T(()=>[_("div",{class:me(["i-solar-info-circle-bold",{"text-error":o.failedList.length===o.compressList.length,"text-warning":o.successList.length!==o.compressList.length}])},null,2)]),default:T(()=>[_("div",Xo,[_("div",null,"总数："+Q(o.compressList.length),1),_("div",null,[t[0]||(t[0]=_("span",null,"成功：",-1)),_("span",Ko,Q(o.successList.length),1)]),_("div",null,[t[1]||(t[1]=_("span",null,"失败：",-1)),_("span",Zo,Q(o.failedList.length),1)])])]),_:1}))])):ee("",!0)])}const Qo=ae(Vo,[["render",Jo],["__file","CompressProgress.vue"]]),er=L({__name:"CompressOption",props:{checked:{required:!0},checkedModifiers:{},size:{required:!0},sizeModifiers:{}},emits:["update:checked","update:size"],setup(e,{expose:t}){t();const o=ke(e,"checked"),r=ke(e,"size"),n=[{label:"WebP",value:"webp",tip:"压缩率较高，大多数浏览器支持"},{label:"AVIF",value:"avif",tip:"压缩率极高，部分现代浏览器支持"},{label:"JPEG",value:"jpeg",tip:"兼容性最好，所有浏览器支持"}];function s(a){o.value=a}const i={modelChecked:o,modelSize:r,outputs:n,handleChange:s};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),tr={id:"CompressOption"},or={class:"color-grey"},rr={class:"mt-20 flex items-center font-600"},nr={class:"flex items-center"},sr={class:"flex items-center"};function ir(e,t,o,r,n,s){const i=Vt,a=Ie,u=xe,g=qt;return O(),W("div",tr,[t[9]||(t[9]=_("div",{class:"font-600"}," 图片压缩格式 ",-1)),R(a,{vertical:""},{default:T(()=>[(O(),W(Re,null,et(r.outputs,h=>R(i,{key:h.value,checked:r.modelChecked===h.value,value:h.value,onChange:l=>r.handleChange(h.value)},{default:T(()=>[G(Q(h.label)+" ",1),_("span",or,Q(h.tip),1)]),_:2},1032,["checked","value","onChange"])),64))]),_:1}),_("div",rr,[t[4]||(t[4]=G(" 图片输出尺寸 ")),R(u,{placement:"right"},{trigger:T(()=>t[2]||(t[2]=[_("span",{class:"i-solar-info-circle-bold"},null,-1)])),default:T(()=>[t[3]||(t[3]=G(" 如果只输入宽度或者高度，另外一项会自动计算 "))]),_:1})]),R(a,{vertical:""},{default:T(()=>[_("div",nr,[t[6]||(t[6]=_("div",{class:"text-16"}," 图片宽度： ",-1)),R(g,{value:r.modelSize.width,"onUpdate:value":t[0]||(t[0]=h=>r.modelSize.width=h),placeholder:"请输入",min:1},{suffix:T(()=>t[5]||(t[5]=[G(" px ")])),_:1},8,["value"])]),_("div",sr,[t[8]||(t[8]=_("div",{class:"text-16"}," 图片高度： ",-1)),R(g,{value:r.modelSize.height,"onUpdate:value":t[1]||(t[1]=h=>r.modelSize.height=h),placeholder:"请输入",min:1},{suffix:T(()=>t[7]||(t[7]=[G(" px ")])),_:1},8,["value"])])]),_:1})])}const lr=ae(er,[["render",ir],["__file","CompressOption.vue"]]),ar=L({__name:"CompressPreview",props:{src:{},compressedSrc:{}},setup(e,{expose:t}){t();const o=I(.5),r=I(),{width:n}=Et(r),s={split:o,leftBox:r,width:n};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),cr={id:"CompressPreview",class:"mb-10"},dr={key:0,class:"flex justify-between text-14"},ur={class:"h-250 overflow-hidden rounded-6"},gr=["src"],fr={ref:"leftBox",class:"size-full"},pr=["src"],hr={class:"size-full"},mr=["src"];function vr(e,t,o,r,n,s){const i=Do;return O(),W("div",cr,[o.src&&o.compressedSrc?(O(),W("div",dr,t[1]||(t[1]=[_("span",null,"压缩前",-1),_("span",null,"压缩后",-1)]))):ee("",!0),_("div",ur,[o.src&&!o.compressedSrc?(O(),W("img",{key:0,class:"size-full object-cover",src:o.src},null,8,gr)):ee("",!0),o.src&&o.compressedSrc?(O(),de(i,{key:1,size:r.split,"onUpdate:size":t[0]||(t[0]=a=>r.split=a),"resize-trigger-size":2,class:"relative h-full"},{1:T(()=>[_("div",fr,[_("img",{class:"absolute left-0 top-0 z-1 size-full object-cover",src:o.src,style:Ot({clip:`rect(auto, ${r.width}px, auto, auto)`})},null,12,pr)],512)]),2:T(()=>[_("div",hr,[_("img",{class:"absolute left-0 top-0 size-full object-cover",src:o.compressedSrc},null,8,mr)])]),"resize-trigger":T(()=>t[2]||(t[2]=[_("div",{class:"relative z-1 h-full bg-primary"},[_("div",{class:"size-40 flex items-center border-2 border-primary rounded-1/2 border-solid absolute-center"},[_("span",{class:"i-ri-arrow-left-s-fill text-22 color-primary"}),_("span",{class:"i-ri-arrow-right-s-fill text-22 color-primary"})])],-1)])),_:1},8,["size"])):ee("",!0)])])}const br=ae(ar,[["render",vr],["__file","CompressPreview.vue"]]),yr=L({__name:"CompressList",props:Ut({list:{}},{active:{required:!0},activeModifiers:{}}),emits:["update:active"],setup(e,{expose:t}){t();const o=ke(e,"active");function r(s){o.value=s}const n={modelActive:o,handleSelect:r,get downloadFile(){return tt},get formatFileSize(){return Lt}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Cr={class:"image-list"},xr=["onClick"],_r={class:"h-150 w-full"},Sr=["src"],wr={class:"flex items-center justify-between px-8 py-4"},zr={class:"text-12"},kr=["onClick"];function Br(e,t,o,r,n,s){const i=ot,a=co,u=oo,g=xe,h=Ie;return O(),W("div",Cr,[(O(!0),W(Re,null,et(o.list,l=>(O(),W("div",{key:l.id,class:me(["cursor-pointer overflow-hidden border border-border rounded-6 border-solid transition-all not-first:mt-10 hover:border-primary",{"border-primary":r.modelActive===l.id,"border-error!":l.status==="failed"}]),onClick:b=>r.handleSelect(l.id)},[R(i,{show:l.status==="processing"},{default:T(()=>[_("div",_r,[_("img",{class:"size-full object-cover",src:l.src,"no-view":""},null,8,Sr)])]),_:2},1032,["show"]),_("div",wr,[R(a,{class:me(["flex-1 text-12",{"text-error":l.status==="failed"}])},{default:T(()=>[G(Q(l.file.name),1)]),_:2},1032,["class"]),R(h,{size:4},{default:T(()=>[R(u,{class:me(["rounded-4",{"line-through":l.compressedFile}]),type:l.status==="failed"?"error":"default",size:"small"},{default:T(()=>[G(Q(r.formatFileSize(l.file.size)),1)]),_:2},1032,["class","type"]),l.compressedFile?(O(),de(u,{key:0,class:"rounded-4",type:"success",size:"small"},{default:T(()=>[G(Q(r.formatFileSize(l.compressedFile.size)),1)]),_:2},1024)):ee("",!0),l.failedInfo?(O(),de(g,{key:1,class:"max-h-150 max-w-200",trigger:"hover",scrollable:""},{trigger:T(()=>t[0]||(t[0]=[_("div",{class:"i-solar-info-circle-bold text-error"},null,-1)])),default:T(()=>[_("div",zr,Q(l.failedInfo),1)]),_:2},1024)):ee("",!0)]),_:2},1024)]),l.compressedFile?(O(),W("div",{key:0,class:"cursor-pointer border-t border-border border-t-solid bg-primary-1 text-center text-12 leading-30 transition-all dark:bg-primary-2 dark:hover:bg-primary-3 hover:bg-primary-2",onClick:b=>r.downloadFile(l.compressedFile,l.compressedFile.name)}," 点击下载 ",8,kr)):ee("",!0)],10,xr))),128))])}const $r=ae(yr,[["render",Br],["__file","CompressList.vue"]]);"stream"in Blob.prototype||Object.defineProperty(Blob.prototype,"stream",{value(){return new Response(this).body}}),"setBigUint64"in DataView.prototype||Object.defineProperty(DataView.prototype,"setBigUint64",{value(e,t,o){const r=Number(0xffffffffn&t),n=Number(t>>32n);this.setUint32(e+(o?0:4),r,o),this.setUint32(e+(o?4:0),n,o)}});var ue=e=>new DataView(new ArrayBuffer(e)),te=e=>new Uint8Array(e.buffer||e),ce=e=>new TextEncoder().encode(String(e)),ie=e=>Math.min(4294967295,Number(e)),He=e=>Math.min(65535,Number(e));function Pr(e,t){if(t===void 0||t instanceof Date||(t=new Date(t)),e instanceof File)return{isFile:1,t:t||new Date(e.lastModified),i:e.stream()};if(e instanceof Response)return{isFile:1,t:t||new Date(e.headers.get("Last-Modified")||Date.now()),i:e.body};if(t===void 0)t=new Date;else if(isNaN(t))throw new Error("Invalid modification date.");if(e===void 0)return{isFile:0,t};if(typeof e=="string")return{isFile:1,t,i:ce(e)};if(e instanceof Blob)return{isFile:1,t,i:e.stream()};if(e instanceof Uint8Array||e instanceof ReadableStream)return{isFile:1,t,i:e};if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return{isFile:1,t,i:te(e)};if(Symbol.asyncIterator in e)return{isFile:1,t,i:at(e[Symbol.asyncIterator]())};throw new TypeError("Unsupported input format.")}function at(e,t=e){return new ReadableStream({async pull(o){let r=0;for(;o.desiredSize>r;){const n=await e.next();if(!n.value){o.close();break}{const s=Tr(n.value);o.enqueue(s),r+=s.byteLength}}},cancel(o){var r;(r=t.throw)==null||r.call(t,o)}})}function Tr(e){return typeof e=="string"?ce(e):e instanceof Uint8Array?e:te(e)}function ct(e,t,o){let[r,n]=function(s){return s?s instanceof Uint8Array?[s,1]:ArrayBuffer.isView(s)||s instanceof ArrayBuffer?[te(s),1]:[ce(s),0]:[void 0,0]}(t);if(e instanceof File)return{o:we(r||ce(e.name)),u:BigInt(e.size),l:n};if(e instanceof Response){const s=e.headers.get("content-disposition"),i=s&&s.match(/;\s*filename\*?\s*=\s*(?:UTF-\d+''|)["']?([^;"'\r\n]*)["']?(?:;|$)/i),a=i&&i[1]||e.url&&new URL(e.url).pathname.split("/").findLast(Boolean),u=a&&decodeURIComponent(a),g=o||+e.headers.get("content-length");return{o:we(r||ce(u)),u:BigInt(g),l:n}}return r=we(r,e!==void 0||o!==void 0),typeof e=="string"?{o:r,u:BigInt(ce(e).length),l:n}:e instanceof Blob?{o:r,u:BigInt(e.size),l:n}:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?{o:r,u:BigInt(e.byteLength),l:n}:{o:r,u:Rr(e,o),l:n}}function Rr(e,t){return t>-1?BigInt(t):e?void 0:0n}function we(e,t=1){if(!e||e.every(o=>o===47))throw new Error("The file must have a name.");if(t)for(;e[e.length-1]===47;)e=e.subarray(0,-1);else e[e.length-1]!==47&&(e=new Uint8Array([...e,47]));return e}var dt=new Uint32Array(256);for(let e=0;e<256;++e){let t=e;for(let o=0;o<8;++o)t=t>>>1^(1&t&&3988292384);dt[e]=t}function Ve(e,t=0){t^=-1;for(var o=0,r=e.length;o<r;o++)t=t>>>8^dt[255&t^e[o]];return(-1^t)>>>0}function ut(e,t,o=0){const r=e.getSeconds()>>1|e.getMinutes()<<5|e.getHours()<<11,n=e.getDate()|e.getMonth()+1<<5|e.getFullYear()-1980<<9;t.setUint16(o,r,1),t.setUint16(o+2,n,1)}function Ir({o:e,l:t},o){return 8*(!t||(o??function(r){try{Fr.decode(r)}catch{return 0}return 1}(e)))}var Fr=new TextDecoder("utf8",{fatal:1});function Dr(e,t=0){const o=ue(30);return o.setUint32(0,1347093252),o.setUint32(4,754976768|t),ut(e.t,o,10),o.setUint16(26,e.o.length,1),te(o)}async function*Er(e){let{i:t}=e;if("then"in t&&(t=await t),t instanceof Uint8Array)yield t,e.m=Ve(t,0),e.u=BigInt(t.length);else{e.u=0n;const o=t.getReader();for(;;){const{value:r,done:n}=await o.read();if(n)break;e.m=Ve(r,e.m),e.u+=BigInt(r.length),yield r}}}function Or(e,t){const o=ue(16+(t?8:0));return o.setUint32(0,1347094280),o.setUint32(4,e.isFile?e.m:0,1),t?(o.setBigUint64(8,e.u,1),o.setBigUint64(16,e.u,1)):(o.setUint32(8,ie(e.u),1),o.setUint32(12,ie(e.u),1)),te(o)}function Ur(e,t,o=0,r=0){const n=ue(46);return n.setUint32(0,1347092738),n.setUint32(4,755182848),n.setUint16(8,2048|o),ut(e.t,n,12),n.setUint32(16,e.isFile?e.m:0,1),n.setUint32(20,ie(e.u),1),n.setUint32(24,ie(e.u),1),n.setUint16(28,e.o.length,1),n.setUint16(30,r,1),n.setUint16(40,e.isFile?33204:16893,1),n.setUint32(42,ie(t),1),te(n)}function Lr(e,t,o){const r=ue(o);return r.setUint16(0,1,1),r.setUint16(2,o-4,1),16&o&&(r.setBigUint64(4,e.u,1),r.setBigUint64(12,e.u,1)),r.setBigUint64(o-8,t,1),te(r)}function gt(e){return e instanceof File||e instanceof Response?[[e],[e]]:[[e.input,e.name,e.size],[e.input,e.lastModified]]}var jr=e=>function(t){let o=BigInt(22),r=0n,n=0;for(const s of t){if(!s.o)throw new Error("Every file must have a non-empty name.");if(s.u===void 0)throw new Error(`Missing size for file "${new TextDecoder().decode(s.o)}".`);const i=s.u>=0xffffffffn,a=r>=0xffffffffn;r+=BigInt(46+s.o.length+(i&&8))+s.u,o+=BigInt(s.o.length+46+(12*a|28*i)),n||(n=i)}return(n||r>=0xffffffffn)&&(o+=BigInt(76)),o+r}(function*(t){for(const o of t)yield ct(...gt(o)[0])}(e));function Ar(e,t={}){const o={"Content-Type":"application/zip","Content-Disposition":"attachment"};return(typeof t.length=="bigint"||Number.isInteger(t.length))&&t.length>0&&(o["Content-Length"]=String(t.length)),t.metadata&&(o["Content-Length"]=String(jr(t.metadata))),new Response(Mr(e,t),{headers:o})}function Mr(e,t={}){const o=function(r){var s;const n=r[Symbol.iterator in r?Symbol.iterator:Symbol.asyncIterator]();return{async next(){const i=await n.next();if(i.done)return i;const[a,u]=gt(i.value);return{done:0,value:Object.assign(Pr(...u),ct(...a))}},throw:(s=n.throw)==null?void 0:s.bind(n),[Symbol.asyncIterator](){return this}}}(e);return at(async function*(r,n){const s=[];let i=0n,a=0n,u=0;for await(const l of r){const b=Ir(l,n.buffersAreUTF8);yield Dr(l,b),yield new Uint8Array(l.o),l.isFile&&(yield*Er(l));const p=l.u>=0xffffffffn,d=12*(i>=0xffffffffn)|28*p;yield Or(l,p),s.push(Ur(l,i,b,d)),s.push(l.o),d&&s.push(Lr(l,i,d)),p&&(i+=8n),a++,i+=BigInt(46+l.o.length)+l.u,u||(u=p)}let g=0n;for(const l of s)yield l,g+=BigInt(l.length);if(u||i>=0xffffffffn){const l=ue(76);l.setUint32(0,1347094022),l.setBigUint64(4,BigInt(44),1),l.setUint32(12,755182848),l.setBigUint64(24,a,1),l.setBigUint64(32,a,1),l.setBigUint64(40,g,1),l.setBigUint64(48,i,1),l.setUint32(56,1347094023),l.setBigUint64(64,i+g,1),l.setUint32(72,1,1),yield te(l)}const h=ue(22);h.setUint32(0,1347093766),h.setUint16(8,He(a),1),h.setUint16(10,He(a),1),h.setUint32(12,ie(g),1),h.setUint32(16,ie(i),1),yield te(h)}(o,t),o)}const Nr=L({__name:"index",setup(e,{expose:t}){t();const o=jt(),r=I([]),n=I([]),s=I(""),i=I(0),a=I(!0),u=I(!1),g=I(!1),h=I(!1),l=I(!1),b=I("webp"),p=I({width:void 0,height:void 0}),d=B(()=>n.value.find(w=>w.id===s.value)),m=B(()=>n.value.filter(w=>w.status==="success"&&w.compressedFile)),f=B(()=>n.value.filter(w=>w.status==="failed")),v=B(()=>{var w;return(w=d.value)==null?void 0:w.src}),S=B(()=>{var w;return(w=d.value)==null?void 0:w.compressedSrc});let y;try{k()}catch(w){console.log("loadModules error",w),a.value=!1,o.error({title:"加载异常",content:"依赖资源加载异常，请刷新页面后重试",positiveText:"重试",onPositiveClick:()=>{window.location.reload()}})}async function k(){const[w,F,Y,K,{default:ge}]=await Promise.all([pe(()=>import("https://unpkg.com/@jsquash/avif@1.3.0?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/jpeg@1.4.0?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/png@3.0.1?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/webp@1.4.0?module"),[]),pe(()=>import("https://unpkg.com/@jsquash/resize@2.1.0?module"),[])]);a.value=!1,h.value=!0,y=async()=>{u.value=!0,g.value=!1,i.value=0,n.value=At(r.value);for(let A=0;A<n.value.length;A++){const j=n.value[A];try{const q=j.file.type.replace("image/","");j.status="processing";const oe=await _e(q,j.file),Z=`image/${b.value}`,re=new Blob([oe],{type:Z});j.compressedFile=new File([re],`${j.fileName}.${b.value}`,{type:Z}),j.compressedSrc=URL.createObjectURL(j.compressedFile),j.status="success"}catch(q){j.status="failed",j.failedInfo=Ae(q)}i.value=Math.round((A+1)/n.value.length*100)}u.value=!1,g.value=!0};async function fe(A,j){const q=await j.arrayBuffer();switch(A){case"avif":return await w.decode(q);case"jpeg":return await F.decode(q);case"png":return await Y.decode(q);case"webp":return await K.decode(q);default:throw new Error(`Unknown source type: ${A}`)}}async function X(A){switch(b.value){case"avif":return await w.encode(A);case"jpeg":return await F.encode(A);case"png":return await Y.encode(A);case"webp":return await K.encode(A);default:throw new Error(`Unknown output type: ${b.value}`)}}async function _e(A,j){const q=await fe(A,j);if(p.value.width||p.value.height){const oe=await Mt(j),Z=Se(oe,p.value),re=await ge(q,Z);return X(re)}return X(q)}function Se(A,j){const{width:q,height:oe}=A,{width:Z,height:re}=j,be=q/oe;return{width:Z??Math.round(re*be),height:re??Math.round(Z/be)}}}function z(w){r.value=w,n.value=w,!s.value&&w.length&&(s.value=w[0].id)}function x(){N(r.value),N(n.value),s.value="",p.value={width:void 0,height:void 0},i.value=0,r.value=[],n.value=[],u.value=!1,g.value=!1}async function $(){try{const w=m.value.map(Y=>Y.compressedFile),F=await Ar(w).blob();tt(F,`liubing.me_compressed_${Date.now()}.zip`)}catch(w){window.$message.error(Ae(w))}}function N(w){w.forEach(F=>{F.src&&URL.revokeObjectURL(F.src),F.compressedSrc&&URL.revokeObjectURL(F.compressedSrc)})}const U={dialog:o,defaultCompressList:r,compressList:n,active:s,percentage:i,showSpin:a,compressing:u,compressEnd:g,loadSuccess:h,downloadAllLoading:l,outputType:b,compressSize:p,activeInfo:d,successList:m,failedList:f,activeSrc:v,activeCompressedSrc:S,get handleCompress(){return y},set handleCompress(w){y=w},loadModules:k,handleChange:z,handleReset:x,handleDownloadAll:$,revokeObjectURL:N};return Object.defineProperty(U,"__isScriptSetup",{enumerable:!1,value:!0}),U}}),Wr={key:0,class:"border border-border rounded-6 border-solid"},Hr={class:"border-r border-border border-r-solid p-10"},Vr={class:"py-10 pl-20 pr-10"},qr={class:"mt-10 flex justify-end"};function Yr(e,t,o,r,n,s){const i=$r,a=xo,u=br,g=lr,h=Qo,l=Nt,b=Ie,p=mo,d=ho,m=Ho,f=ot;return O(),W("div",{class:me(["compress-image relative",{"opacity-50":!r.loadSuccess&&!r.showSpin,"after:content-empty after:absolute after:size-full after:top-0 after:z-1 after:cursor-not-allowed":!r.loadSuccess&&!r.showSpin}])},[R(f,{show:r.showSpin},{description:T(()=>t[5]||(t[5]=[_("div",{"text-center":"","text-14":""},[_("div",null,"依赖资源加载中..."),_("div",null,"首次加载较慢，请耐心等待")],-1)])),default:T(()=>[r.compressList.length?(O(),W("div",Wr,[R(d,{"has-sider":"",class:"h-[calc(100vh-150px)]"},{default:T(()=>[R(a,{"collapse-mode":"transform","collapsed-width":0,width:300,"show-trigger":"arrow-circle",bordered:""},{default:T(()=>[_("div",Hr,[R(i,{active:r.active,"onUpdate:active":t[0]||(t[0]=v=>r.active=v),list:r.compressList},null,8,["active","list"])])]),_:1}),R(p,null,{default:T(()=>[_("div",Vr,[r.activeSrc?(O(),de(u,{key:0,src:r.activeSrc,"compressed-src":r.activeCompressedSrc},null,8,["src","compressed-src"])):ee("",!0),R(g,{checked:r.outputType,"onUpdate:checked":t[1]||(t[1]=v=>r.outputType=v),size:r.compressSize,"onUpdate:size":t[2]||(t[2]=v=>r.compressSize=v)},null,8,["checked","size"]),r.compressing||r.compressEnd?(O(),de(h,{key:1,"compress-list":r.compressList,"success-list":r.successList,"failed-list":r.failedList,"compress-end":r.compressEnd,percentage:r.percentage},null,8,["compress-list","success-list","failed-list","compress-end","percentage"])):ee("",!0),_("div",qr,[R(b,null,{default:T(()=>[R(l,{type:"tertiary",disabled:r.compressing,onClick:r.handleReset},{default:T(()=>t[6]||(t[6]=[G(" 重置 ")])),_:1},8,["disabled"]),R(l,{type:"primary",secondary:"",disabled:r.downloadAllLoading||!r.successList.length||r.compressing,loading:r.downloadAllLoading,onClick:r.handleDownloadAll},{default:T(()=>t[7]||(t[7]=[G(" 批量下载 ")])),_:1},8,["disabled","loading"]),R(l,{type:"primary",disabled:r.compressing,loading:r.compressing,onClick:r.handleCompress},{default:T(()=>t[8]||(t[8]=[G(" 开始压缩 ")])),_:1},8,["disabled","loading","onClick"])]),_:1})])])]),_:1})]),_:1})])):(O(),W(Re,{key:1},[R(m,{onChange:r.handleChange}),R(g,{checked:r.outputType,"onUpdate:checked":t[3]||(t[3]=v=>r.outputType=v),size:r.compressSize,"onUpdate:size":t[4]||(t[4]=v=>r.compressSize=v),class:"mt-10"},null,8,["checked","size"])],64))]),_:1},8,["show"])],2)}const Gr=ae(Nr,[["render",Yr],["__file","index.vue"]]),Xr={};function Kr(e,t){const o=Gr,r=Ht("ClientOnly");return O(),W("div",null,[t[0]||(t[0]=Wt('<h1 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩"><span>图片压缩</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>工具依赖加载<a href="https://unpkg.com/" target="_blank" rel="noopener noreferrer">unpkg</a>的资源，国内用户可能需要开启魔法上网。</p></div><div class="hint-container tip"><p class="hint-container-title">温馨提示</p><p>纯本地图片压缩工具，不会上传您的任何图片信息，请放心使用。</p></div>',3)),R(r,null,{default:T(()=>[R(o)]),_:1})])}const en=ae(Xr,[["render",Kr],["__file","compress-image.html.vue"]]),tn=JSON.parse('{"path":"/tools/compress-image.html","title":"图片压缩","lang":"zh-CN","frontmatter":{"toc":false,"pageInfo":false,"layout":"ToolLayout","description":"一个纯本地图片压缩工具，支持输出WebP、AVIF、JPEG格图片","head":[["meta",{"property":"og:url","content":"https://liubing.me/tools/compress-image.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"图片压缩"}],["meta",{"property":"og:description","content":"一个纯本地图片压缩工具，支持输出WebP、AVIF、JPEG格图片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-24T11:36:17.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-24T11:36:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图片压缩\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-24T11:36:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[],"git":{"createdTime":1732366923000,"updatedTime":1732448177000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":2,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":0.31,"words":94},"filePathRelative":"tools/compress-image.md","localizedDate":"2024年11月23日","excerpt":"\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>工具依赖加载<a href=\\"https://unpkg.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">unpkg</a>的资源，国内用户可能需要开启魔法上网。</p>\\n</div>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">温馨提示</p>\\n<p>纯本地图片压缩工具，不会上传您的任何图片信息，请放心使用。</p>\\n</div>"}');export{en as comp,tn as data};
