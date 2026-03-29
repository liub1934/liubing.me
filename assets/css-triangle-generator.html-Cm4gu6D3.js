import{j as v,n as U,l as S,e as D,h as u,u as et,ax as Bt,ay as pe,az as te,aA as Ie,aB as oe,aC as ie,aD as le,aE as me,aF as be,aG as st,aH as Ge,aI as X,aJ as je,aK as Ke,w as F,x as V,a3 as we,a5 as xe,E as Pt,U as W,a2 as ut,aL as Ce,aM as Ze,aN as Xe,aO as We,aP as It,aQ as Mt,k as ne,aR as Ft,aS as Lt,aT as Ht,aU as Je,aV as qt,aW as Et,aX as Nt,aY as Ot,aZ as dt,q as He,a_ as Gt,V as Ye,a$ as tt,v as ct,b0 as nt,b1 as jt,y as ve,at as Te,b2 as Kt,D as Se,z as Fe,C as he,m as it,b3 as Zt,b4 as Xt,s as Wt,b5 as Jt,o as q,c as E,b as A,ae as Me,am as Qe,al as Yt,d as N,b6 as Qt,_ as ht,ag as ze,ai as Re,aj as $e,ad as Le,a9 as ke,aa as ot,r as eo}from"./app-BEfrOH_m.js";import{_ as pt,u as to}from"./Input-qbWmO77-.js";import{r as oo,b as ro,a as ao,_ as bt}from"./InputNumber-eYTy9PBN.js";const no=v("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[U(">",[v("input",[U("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),U("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),v("button",[U("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[S("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),U("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[S("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),U("*",[U("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[U(">",[v("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v("base-selection",[v("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),S("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),U("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[U(">",[v("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),v("base-selection",[v("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),v("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),S("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),io={},lo=D({name:"InputGroup",props:io,setup(e){const{mergedClsPrefixRef:t}=et(e);return Bt("-input-group",no,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:`${e}-input-group`},this.$slots)}});function so(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function Ue(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function uo(e,t=[255,255,255],o="AA"){const[a,n,r,l]=X(te(e));if(l===1){const g=De([a,n,r]),y=De(t);return(Math.max(g,y)+.05)/(Math.min(g,y)+.05)>=(o==="AA"?4.5:7)}const s=Math.round(a*l+t[0]*(1-l)),h=Math.round(n*l+t[1]*(1-l)),d=Math.round(r*l+t[2]*(1-l)),c=De([s,h,d]),w=De(t);return(Math.max(c,w)+.05)/(Math.min(c,w)+.05)>=(o==="AA"?4.5:7)}function De(e){const[t,o,a]=e.map(n=>(n/=255,n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)));return .2126*t+.7152*o+.0722*a}function co(e){return e=Math.round(e),e>=360?359:e<0?0:e}function ho(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const po={rgb:{hex(e){return le(X(e))},hsl(e){const[t,o,a,n]=X(e);return te([...Ke(t,o,a),n])},hsv(e){const[t,o,a,n]=X(e);return be([...je(t,o,a),n])}},hex:{rgb(e){return oe(X(e))},hsl(e){const[t,o,a,n]=X(e);return te([...Ke(t,o,a),n])},hsv(e){const[t,o,a,n]=X(e);return be([...je(t,o,a),n])}},hsl:{hex(e){const[t,o,a,n]=me(e);return le([...Ge(t,o,a),n])},rgb(e){const[t,o,a,n]=me(e);return oe([...Ge(t,o,a),n])},hsv(e){const[t,o,a,n]=me(e);return be([...st(t,o,a),n])}},hsv:{hex(e){const[t,o,a,n]=pe(e);return le([...ie(t,o,a),n])},rgb(e){const[t,o,a,n]=pe(e);return oe([...ie(t,o,a),n])},hsl(e){const[t,o,a,n]=pe(e);return te([...Ie(t,o,a),n])}}};function gt(e,t,o){return o=o||Ue(e),o?o===t?e:po[o][t](e):null}const _e="12px",bo=12,de="6px",go=D({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=V(null);function o(r){!t.value||!e.rgba||(we("mousemove",document,a),we("mouseup",document,n),a(r))}function a(r){const{value:l}=t;if(!l)return;const{width:s,left:h}=l.getBoundingClientRect(),d=(r.clientX-h)/(s-bo);e.onUpdateAlpha(ho(d))}function n(){var r;xe("mousemove",document,a),xe("mouseup",document,n),(r=e.onComplete)===null||r===void 0||r.call(e)}return{railRef:t,railBackgroundImage:F(()=>{const{rgba:r}=e;return r?`linear-gradient(to right, rgba(${r[0]}, ${r[1]}, ${r[2]}, 0) 0%, rgba(${r[0]}, ${r[1]}, ${r[2]}, 1) 100%)`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:_e,borderRadius:de},onMousedown:this.handleMouseDown},u("div",{style:{borderRadius:de,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},u("div",{class:`${e}-color-picker-checkboard`}),u("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&u("div",{style:{position:"absolute",left:de,right:de,top:0,bottom:0}},u("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${de})`,borderRadius:de,width:_e,height:_e}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:oe(this.rgba),borderRadius:de,width:_e,height:_e}}))))}}),rt=Pt("n-color-picker");function fo(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function vo(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function mo(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function wo(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function xo(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const ko={paddingSmall:"0 4px"},lt=D({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=V(""),{themeRef:o}=W(rt,null);ut(()=>{t.value=a()});function a(){const{value:l}=e;if(l===null)return"";const{label:s}=e;return s==="HEX"?l:s==="A"?`${Math.floor(l*100)}%`:String(Math.floor(l))}function n(l){t.value=l}function r(l){let s,h;switch(e.label){case"HEX":h=wo(l),h&&e.onUpdateValue(l),t.value=a();break;case"H":s=vo(l),s===!1?t.value=a():e.onUpdateValue(s);break;case"S":case"L":case"V":s=mo(l),s===!1?t.value=a():e.onUpdateValue(s);break;case"A":s=xo(l),s===!1?t.value=a():e.onUpdateValue(s);break;case"R":case"G":case"B":s=fo(l),s===!1?t.value=a():e.onUpdateValue(s);break}}return{mergedTheme:o,inputValue:t,handleInputChange:r,handleInputUpdateValue:n}},render(){const{mergedTheme:e}=this;return u(pt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:ko,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),yo=D({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,o){const{showAlpha:a}=e;if(e.mode==="hex"){e.onUpdateValue((a?le:Ce)(o));return}let n;switch(e.valueArr===null?n=[0,0,0,0]:n=Array.from(e.valueArr),e.mode){case"hsv":n[t]=o,e.onUpdateValue((a?be:We)(n));break;case"rgb":n[t]=o,e.onUpdateValue((a?oe:Xe)(n));break;case"hsl":n[t]=o,e.onUpdateValue((a?te:Ze)(n));break}}}},render(){const{clsPrefix:e,modes:t}=this;return u("div",{class:`${e}-color-picker-input`},u("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),u(lo,null,{default:()=>{const{mode:o,valueArr:a,showAlpha:n}=this;if(o==="hex"){let r=null;try{r=a===null?null:(n?le:Ce)(a)}catch{}return u(lt,{label:"HEX",showAlpha:n,value:r,onUpdateValue:l=>{this.handleUnitUpdateValue(0,l)}})}return(o+(n?"a":"")).split("").map((r,l)=>u(lt,{label:r.toUpperCase(),value:a===null?null:a[l],onUpdateValue:s=>{this.handleUnitUpdateValue(l,s)}}))}}))}});function _o(e,t){if(t==="hsv"){const[o,a,n,r]=pe(e);return oe([...ie(o,a,n),r])}return e}function Co(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const So=D({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=F(()=>e.swatches.map(r=>{const l=Ue(r);return{value:r,mode:l,legalValue:_o(r,l)}}));function o(r){const{mode:l}=e;let{value:s,mode:h}=r;return h||(h="hex",/^[a-zA-Z]+$/.test(s)?s=Co(s):(It("color-picker",`color ${s} in swatches is invalid.`),s="#000000")),h===l?s:gt(s,l,h)}function a(r){e.onUpdateColor(o(r))}function n(r,l){r.key==="Enter"&&a(l)}return{parsedSwatchesRef:t,handleSwatchSelect:a,handleSwatchKeyDown:n}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>u("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:o=>{this.handleSwatchKeyDown(o,t)}},u("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Ro=D({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:o}=W(rt,null);return()=>{const{hsla:a,value:n,clsPrefix:r,onClick:l,disabled:s}=e,h=t.label||o.value;return u("div",{class:[`${r}-color-picker`,s&&`${r}-color-picker--disabled`],onClick:s?void 0:l},u("div",{class:`${r}-color-picker__fill`},u("div",{class:`${r}-color-picker-checkboard`}),u("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:a?te(a):""}}),n&&a?u("div",{class:`${r}-color-picker__value`,style:{color:uo(a)?"white":"black"}},h?h(n):n):null))}}}),$o=D({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=Ue(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(o){var a;const n=o.target.value;(a=e.onUpdateColor)===null||a===void 0||a.call(e,gt(n.toUpperCase(),e.mode,"hex")),o.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-preview__preview`},u("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),u("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),fe="12px",zo=12,ce="6px",Uo=6,Vo="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Ao=D({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=V(null);function o(r){t.value&&(we("mousemove",document,a),we("mouseup",document,n),a(r))}function a(r){const{value:l}=t;if(!l)return;const{width:s,left:h}=l.getBoundingClientRect(),d=co((r.clientX-h-Uo)/(s-zo)*360);e.onUpdateHue(d)}function n(){var r;xe("mousemove",document,a),xe("mouseup",document,n),(r=e.onComplete)===null||r===void 0||r.call(e)}return{railRef:t,handleMouseDown:o}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-slider`,style:{height:fe,borderRadius:ce}},u("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Vo,height:fe,borderRadius:ce,position:"relative"},onMousedown:this.handleMouseDown},u("div",{style:{position:"absolute",left:ce,right:ce,top:0,bottom:0}},u("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${ce})`,borderRadius:ce,width:fe,height:fe}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:ce,width:fe,height:fe}})))))}}),Be="12px",Pe="6px",To=D({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=V(null);function o(r){t.value&&(we("mousemove",document,a),we("mouseup",document,n),a(r))}function a(r){const{value:l}=t;if(!l)return;const{width:s,height:h,left:d,bottom:c}=l.getBoundingClientRect(),w=(c-r.clientY)/h,m=(r.clientX-d)/s,g=100*(m>1?1:m<0?0:m),y=100*(w>1?1:w<0?0:w);e.onUpdateSV(g,y)}function n(){var r;xe("mousemove",document,a),xe("mouseup",document,n),(r=e.onComplete)===null||r===void 0||r.call(e)}return{palleteRef:t,handleColor:F(()=>{const{rgba:r}=e;return r?`rgb(${r[0]}, ${r[1]}, ${r[2]})`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},u("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),u("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&u("div",{class:`${e}-color-picker-handle`,style:{width:Be,height:Be,borderRadius:Pe,left:`calc(${this.displayedSv[0]}% - ${Pe})`,bottom:`calc(${this.displayedSv[1]}% - ${Pe})`}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Pe,width:Be,height:Be}})))}}),Do=U([v("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[Mt(),v("input",`
 text-align: center;
 `)]),v("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[U("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),v("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[S("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),U("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),v("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[S("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),v("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[S("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[ne("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),v("color-picker-preview",`
 display: flex;
 `,[S("sliders",`
 flex: 1 0 auto;
 `),S("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),S("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),S("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),v("color-picker-input",`
 display: flex;
 align-items: center;
 `,[v("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),S("mode",`
 width: 72px;
 text-align: center;
 `)]),v("color-picker-control",`
 padding: 12px;
 `),v("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[v("button","margin-left: 8px;")]),v("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 cursor: pointer;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[ne("disabled","cursor: not-allowed"),S("value",`
 white-space: nowrap;
 position: relative;
 `),S("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),v("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[U("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),v("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[v("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[S("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),U("&:focus",`
 outline: none;
 `,[S("fill",[U("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Bo=Object.assign(Object.assign({},He.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Je.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Po=D({name:"ColorPicker",props:Bo,slots:Object,setup(e,{slots:t}){let o=null;function a(i){o=i}let n=null;const{mergedClsPrefixRef:r,namespaceRef:l,inlineThemeDisabled:s,mergedComponentPropsRef:h}=et(e),d=dt(e,{mergedSize:i=>{var f,x;const{size:_}=e;if(_)return _;const{mergedSize:C}=i||{};if(C?.value)return C.value;const k=(x=(f=h?.value)===null||f===void 0?void 0:f.ColorPicker)===null||x===void 0?void 0:x.size;return k||"medium"}}),{mergedSizeRef:c,mergedDisabledRef:w}=d,{localeRef:m}=to("global"),g=He("ColorPicker","-color-picker",Do,Gt,e,r);he(rt,{themeRef:g,renderLabelRef:Se(e,"renderLabel"),colorPickerSlots:t});const y=V(e.defaultShow),J=Ye(Se(e,"show"),y);function G(i){const{onUpdateShow:f,"onUpdate:show":x}=e;f&&ve(f,i),x&&ve(x,i),y.value=i}const{defaultValue:L}=e,re=V(L===void 0?so(e.modes,e.showAlpha):L),$=Ye(Se(e,"value"),re),B=V([$.value]),p=V(0),R=F(()=>Ue($.value)),{modes:Y}=e,P=V(Ue($.value)||Y[0]||"rgb");function Ve(){const{modes:i}=e,{value:f}=P,x=i.findIndex(_=>_===f);~x?P.value=i[(x+1)%i.length]:P.value="rgb"}let z,b,I,ae,j,K,Z,H;const se=F(()=>{const{value:i}=$;if(!i)return null;switch(R.value){case"hsv":return pe(i);case"hsl":return[z,b,I,H]=me(i),[...st(z,b,I),H];case"rgb":case"hex":return[j,K,Z,H]=X(i),[...je(j,K,Z),H]}}),Q=F(()=>{const{value:i}=$;if(!i)return null;switch(R.value){case"rgb":case"hex":return X(i);case"hsv":return[z,b,ae,H]=pe(i),[...ie(z,b,ae),H];case"hsl":return[z,b,I,H]=me(i),[...Ge(z,b,I),H]}}),ye=F(()=>{const{value:i}=$;if(!i)return null;switch(R.value){case"hsl":return me(i);case"hsv":return[z,b,ae,H]=pe(i),[...Ie(z,b,ae),H];case"rgb":case"hex":return[j,K,Z,H]=X(i),[...Ke(j,K,Z),H]}}),xt=F(()=>{switch(P.value){case"rgb":case"hex":return Q.value;case"hsv":return se.value;case"hsl":return ye.value}}),Ae=V(0),Ee=V(1),Ne=V([0,0]);function kt(i,f){const{value:x}=se,_=Ae.value,C=x?x[3]:1;Ne.value=[i,f];const{showAlpha:k}=e;switch(P.value){case"hsv":T((k?be:We)([_,i,f,C]),"cursor");break;case"hsl":T((k?te:Ze)([...Ie(_,i,f),C]),"cursor");break;case"rgb":T((k?oe:Xe)([...ie(_,i,f),C]),"cursor");break;case"hex":T((k?le:Ce)([...ie(_,i,f),C]),"cursor");break}}function yt(i){Ae.value=i;const{value:f}=se;if(!f)return;const[,x,_,C]=f,{showAlpha:k}=e;switch(P.value){case"hsv":T((k?be:We)([i,x,_,C]),"cursor");break;case"rgb":T((k?oe:Xe)([...ie(i,x,_),C]),"cursor");break;case"hex":T((k?le:Ce)([...ie(i,x,_),C]),"cursor");break;case"hsl":T((k?te:Ze)([...Ie(i,x,_),C]),"cursor");break}}function _t(i){switch(P.value){case"hsv":[z,b,ae]=se.value,T(be([z,b,ae,i]),"cursor");break;case"rgb":[j,K,Z]=Q.value,T(oe([j,K,Z,i]),"cursor");break;case"hex":[j,K,Z]=Q.value,T(le([j,K,Z,i]),"cursor");break;case"hsl":[z,b,I]=ye.value,T(te([z,b,I,i]),"cursor");break}Ee.value=i}function T(i,f){f==="cursor"?n=i:n=null;const{nTriggerFormChange:x,nTriggerFormInput:_}=d,{onUpdateValue:C,"onUpdate:value":k}=e;C&&ve(C,i),k&&ve(k,i),x(),_(),re.value=i}function Ct(i){T(i,"input"),Kt(ge)}function ge(i=!0){const{value:f}=$;if(f){const{nTriggerFormChange:x,nTriggerFormInput:_}=d,{onComplete:C}=e;C&&C(f);const{value:k}=B,{value:O}=p;i&&(k.splice(O+1,k.length,f),p.value=O+1),x(),_()}}function St(){const{value:i}=p;i-1<0||(T(B.value[i-1],"input"),ge(!1),p.value=i-1)}function Rt(){const{value:i}=p;i<0||i+1>=B.value.length||(T(B.value[i+1],"input"),ge(!1),p.value=i+1)}function $t(){T(null,"input");const{onClear:i}=e;i&&i(),G(!1)}function zt(){const{value:i}=$,{onConfirm:f}=e;f&&f(i),G(!1)}const Ut=F(()=>p.value>=1),Vt=F(()=>{const{value:i}=B;return i.length>1&&p.value<i.length-1});tt(J,i=>{i||(B.value=[$.value],p.value=0)}),ut(()=>{if(!(n&&n===$.value)){const{value:i}=se;i&&(Ae.value=i[0],Ee.value=i[3],Ne.value=[i[1],i[2]])}n=null});const Oe=F(()=>{const{value:i}=c,{common:{cubicBezierEaseInOut:f},self:{textColor:x,color:_,panelFontSize:C,boxShadow:k,border:O,borderRadius:M,dividerColor:ue,[Fe("height",i)]:Tt,[Fe("fontSize",i)]:Dt}}=g.value;return{"--n-bezier":f,"--n-text-color":x,"--n-color":_,"--n-panel-font-size":C,"--n-font-size":Dt,"--n-box-shadow":k,"--n-border":O,"--n-border-radius":M,"--n-height":Tt,"--n-divider-color":ue}}),ee=s?ct("color-picker",F(()=>c.value[0]),Oe,e):void 0;function At(){var i;const{value:f}=Q,{value:x}=Ae,{internalActions:_,modes:C,actions:k}=e,{value:O}=g,{value:M}=r;return u("div",{class:[`${M}-color-picker-panel`,ee?.themeClass.value],onDragstart:ue=>{ue.preventDefault()},style:s?void 0:Oe.value},u("div",{class:`${M}-color-picker-control`},u(To,{clsPrefix:M,rgba:f,displayedHue:x,displayedSv:Ne.value,onUpdateSV:kt,onComplete:ge}),u("div",{class:`${M}-color-picker-preview`},u("div",{class:`${M}-color-picker-preview__sliders`},u(Ao,{clsPrefix:M,hue:x,onUpdateHue:yt,onComplete:ge}),e.showAlpha?u(go,{clsPrefix:M,rgba:f,alpha:Ee.value,onUpdateAlpha:_t,onComplete:ge}):null),e.showPreview?u($o,{clsPrefix:M,mode:P.value,color:Q.value&&Ce(Q.value),onUpdateColor:ue=>{T(ue,"input")}}):null),u(yo,{clsPrefix:M,showAlpha:e.showAlpha,mode:P.value,modes:C,onUpdateMode:Ve,value:$.value,valueArr:xt.value,onUpdateValue:Ct}),((i=e.swatches)===null||i===void 0?void 0:i.length)&&u(So,{clsPrefix:M,mode:P.value,swatches:e.swatches,onUpdateColor:ue=>{T(ue,"input")}})),k?.length?u("div",{class:`${M}-color-picker-action`},k.includes("confirm")&&u(Te,{size:"small",onClick:zt,theme:O.peers.Button,themeOverrides:O.peerOverrides.Button},{default:()=>m.value.confirm}),k.includes("clear")&&u(Te,{size:"small",onClick:$t,disabled:!$.value,theme:O.peers.Button,themeOverrides:O.peerOverrides.Button},{default:()=>m.value.clear})):null,t.action?u("div",{class:`${M}-color-picker-action`},{default:t.action}):_?u("div",{class:`${M}-color-picker-action`},_.includes("undo")&&u(Te,{size:"small",onClick:St,disabled:!Ut.value,theme:O.peers.Button,themeOverrides:O.peerOverrides.Button},{default:()=>m.value.undo}),_.includes("redo")&&u(Te,{size:"small",onClick:Rt,disabled:!Vt.value,theme:O.peers.Button,themeOverrides:O.peerOverrides.Button},{default:()=>m.value.redo})):null)}return{mergedClsPrefix:r,namespace:l,hsla:ye,rgba:Q,mergedShow:J,mergedDisabled:w,isMounted:jt(),adjustedTo:Je(e),mergedValue:$,handleTriggerClick(){w.value||G(!0)},setTriggerRef:a,handleClickOutside(i){if(o instanceof Element){if(o.contains(nt(i)))return}else if(o&&o.$el.contains(nt(i)))return;G(!1)},renderPanel:At,cssVars:s?void 0:Oe,themeClass:ee?.themeClass,onRender:ee?.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t?.(),u(Ot,null,{default:()=>[u(Ft,null,{default:()=>Lt(this.$slots.trigger,{value:this.mergedValue,onClick:this.handleTriggerClick,ref:this.setTriggerRef},o=>o||u(Ro,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,style:this.cssVars,ref:this.setTriggerRef,disabled:this.mergedDisabled,class:this.themeClass,onClick:this.mergedDisabled?void 0:this.handleTriggerClick}))}),u(Ht,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Je.tdkey,to:this.adjustedTo},{default:()=>u(qt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Et(this.renderPanel(),[[Nt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]})}}),Io=v("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[S("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[ne("checked",{backgroundColor:"var(--n-button-border-color-active)"}),ne("disabled",{opacity:"var(--n-opacity-disabled)"})]),ne("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[v("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),S("splitor",{height:"var(--n-height)"})]),v("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[v("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),S("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),U("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[S("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),U("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[S("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),it("disabled",`
 cursor: pointer;
 `,[U("&:hover",[S("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),it("checked",{color:"var(--n-button-text-color-hover)"})]),ne("focus",[U("&:not(:active)",[S("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),ne("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),ne("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Mo(e,t,o){var a;const n=[];let r=!1;for(let l=0;l<e.length;++l){const s=e[l],h=(a=s.type)===null||a===void 0?void 0:a.name;h==="RadioButton"&&(r=!0);const d=s.props;if(h!=="RadioButton"){n.push(s);continue}if(l===0)n.push(s);else{const c=n[n.length-1].props,w=t===c.value,m=c.disabled,g=t===d.value,y=d.disabled,J=(w?2:0)+(m?0:1),G=(g?2:0)+(y?0:1),L={[`${o}-radio-group__splitor--disabled`]:m,[`${o}-radio-group__splitor--checked`]:w},re={[`${o}-radio-group__splitor--disabled`]:y,[`${o}-radio-group__splitor--checked`]:g},$=J<G?re:L;n.push(u("div",{class:[`${o}-radio-group__splitor`,$]}),s)}}return{children:n,isButtonGroup:r}}const Fo=Object.assign(Object.assign({},He.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ft=D({name:"RadioGroup",props:Fo,setup(e){const t=V(null),{mergedSizeRef:o,mergedDisabledRef:a,nTriggerFormChange:n,nTriggerFormInput:r,nTriggerFormBlur:l,nTriggerFormFocus:s}=dt(e),{mergedClsPrefixRef:h,inlineThemeDisabled:d,mergedRtlRef:c}=et(e),w=He("Radio","-radio-group",Io,oo,e,h),m=V(e.defaultValue),g=Se(e,"value"),y=Ye(g,m);function J(p){const{onUpdateValue:R,"onUpdate:value":Y}=e;R&&ve(R,p),Y&&ve(Y,p),m.value=p,n(),r()}function G(p){const{value:R}=t;R&&(R.contains(p.relatedTarget)||s())}function L(p){const{value:R}=t;R&&(R.contains(p.relatedTarget)||l())}he(ro,{mergedClsPrefixRef:h,nameRef:Se(e,"name"),valueRef:y,disabledRef:a,mergedSizeRef:o,doUpdateValue:J});const re=Wt("Radio",c,h),$=F(()=>{const{value:p}=o,{common:{cubicBezierEaseInOut:R},self:{buttonBorderColor:Y,buttonBorderColorActive:P,buttonBorderRadius:Ve,buttonBoxShadow:z,buttonBoxShadowFocus:b,buttonBoxShadowHover:I,buttonColor:ae,buttonColorActive:j,buttonTextColor:K,buttonTextColorActive:Z,buttonTextColorHover:H,opacityDisabled:se,[Fe("buttonHeight",p)]:Q,[Fe("fontSize",p)]:ye}}=w.value;return{"--n-font-size":ye,"--n-bezier":R,"--n-button-border-color":Y,"--n-button-border-color-active":P,"--n-button-border-radius":Ve,"--n-button-box-shadow":z,"--n-button-box-shadow-focus":b,"--n-button-box-shadow-hover":I,"--n-button-color":ae,"--n-button-color-active":j,"--n-button-text-color":K,"--n-button-text-color-hover":H,"--n-button-text-color-active":Z,"--n-height":Q,"--n-opacity-disabled":se}}),B=d?ct("radio-group",F(()=>o.value[0]),$,e):void 0;return{selfElRef:t,rtlEnabled:re,mergedClsPrefix:h,mergedValue:y,handleFocusout:L,handleFocusin:G,cssVars:d?void 0:$,themeClass:B?.themeClass,onRender:B?.onRender}},render(){var e;const{mergedValue:t,mergedClsPrefix:o,handleFocusin:a,handleFocusout:n}=this,{children:r,isButtonGroup:l}=Mo(Zt(Xt(this)),t,o);return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{onFocusin:a,onFocusout:n,ref:"selfElRef",class:[`${o}-radio-group`,this.rtlEnabled&&`${o}-radio-group--rtl`,this.themeClass,l&&`${o}-radio-group--button-group`],style:this.cssVars},r)}}),qe=Symbol(),at=Symbol(),vt=Symbol(),mt=Symbol(),wt=Symbol(),Lo={class:"generator-preview"},Ho=D({__name:"GeneratorPreview",setup(e){const t=Jt(),o=W(qe),a=W(at),n=W(mt),r=W(vt),l=W(wt),s={top:"bottom",right:"left",bottom:"top",left:"right",topRight:"right",bottomRight:"bottom",bottomLeft:"left",topLeft:"top"},h={top:{top:!1,right:"widthRight",bottom:"height",left:"widthLeft"},right:{top:"heightTop",right:!1,bottom:"heightBottom",left:"width"},bottom:{top:"height",right:"widthRight",bottom:!1,left:"widthLeft"},left:{top:"heightTop",right:"width",bottom:"heightBottom",left:!1},topRight:{top:!1,right:"width",bottom:"height",left:!1},bottomRight:{top:!1,right:!1,bottom:"height",left:"width"},bottomLeft:{top:"height",right:!1,bottom:!1,left:"width"},topLeft:{top:"height",right:"width",bottom:!1,left:!1}},d=F(()=>{const m={width:0,height:0,"border-style":"solid"},g=l.value,{width:y,widthLeft:J,widthRight:G,height:L,heightTop:re,heightBottom:$}=n.value,B={top:"transparent",right:"transparent",bottom:"transparent",left:"transparent"},p={top:0,right:0,bottom:0,left:0},R=h[o.value];B[s[o.value]]=g;for(const z in R){const b=z;if(R[b]===!1)p[b]="0";else{let I="";switch(a.value){case"equilateral":if(o.value==="top"||o.value==="bottom")switch(I=(Math.sqrt(3)/2*y).toFixed(1),R[b]){case"width":p[b]=I+r.value;break;case"height":p[b]=I+r.value;break;case"widthLeft":p[b]=y/2+r.value;break;case"widthRight":p[b]=y/2+r.value;break}else if(o.value==="left"||o.value==="right")switch(I=(Math.sqrt(3)/2*L).toFixed(1),R[b]){case"width":p[b]=I+r.value;break;case"height":p[b]=I+r.value;break;case"heightTop":p[b]=L/2+r.value;break;case"heightBottom":p[b]=L/2+r.value;break}break;case"isosceles":switch(R[b]){case"width":p[b]=y+r.value;break;case"height":p[b]=L+r.value;break;case"widthLeft":p[b]=y/2+r.value;break;case"widthRight":p[b]=y/2+r.value;break;case"heightTop":p[b]=L/2+r.value;break;case"heightBottom":p[b]=L/2+r.value;break}break;case"scalene":switch(R[b]){case"width":p[b]=`${y}px`;break;case"height":p[b]=`${L}px`;break;case"widthLeft":p[b]=`${J}px`;break;case"widthRight":p[b]=`${G}px`;break;case"heightTop":p[b]=`${re}px`;break;case"heightBottom":p[b]=`${$}px`;break}break}}}const Y=c(B),P=c(p);return m["border-color"]=Y,m["border-width"]=P,{outPutCss:`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${P};
    border-color: ${Y};
  `.split(`
`).map(z=>z.trim()).filter(z=>z.length>0).join(`
`),outPutStyle:m}});function c(m){const g=[];for(const y in m)g.push(m[y]);return g.join(" ")}function w(){Qt(d.value.outPutCss)}return(m,g)=>{const y=pt;return q(),E("div",Lo,[A("div",{class:Me(["triangle-output h-250 flex items-center overflow-auto bg-white",{"opacity-80":Qe(t)}])},[A("div",{class:"mx-auto transition-all",style:Yt(d.value.outPutStyle)},null,4)],2),g[0]||(g[0]=A("div",{class:"title mt-20 text-24 font-600"}," CSS ",-1)),N(y,{value:d.value.outPutCss,autosize:"",readonly:"",type:"textarea",onClick:w},null,8,["value"])])}}}),qo=ht(Ho,[["__scopeId","data-v-566e9b32"]]),Eo={class:"generator-color"},No=D({__name:"GeneratorColor",props:{color:{required:!0},colorModifiers:{}},emits:["update:color"],setup(e){const t=ze(e,"color");return(o,a)=>{const n=Po;return q(),E("div",Eo,[a[1]||(a[1]=A("div",{class:"title text-24 font-600"}," 颜色 ",-1)),N(n,{value:t.value,"onUpdate:value":a[0]||(a[0]=r=>t.value=r),"show-preview":!0,"show-alpha":!1},null,8,["value"])])}}}),Oo={class:"generator-size"},Go={class:"w-30 pr-10 text-right text-14"},jo=D({__name:"GeneratorSize",props:{size:{required:!0},sizeModifiers:{},unit:{required:!0},unitModifiers:{}},emits:["update:size","update:unit"],setup(e){const t=ze(e,"size"),o=ze(e,"unit"),a=W(qe),n=W(at),r=[{label:"宽度",name:"width"},{label:"左",name:"widthLeft"},{label:"右",name:"widthRight"},{label:"高度",name:"height"},{label:"上",name:"heightTop"},{label:"下",name:"heightBottom"}];tt(a,()=>{s()});function l(h){let d={};switch(n.value){case"equilateral":switch(a.value){case"top":case"bottom":d={width:!1,height:!0,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break;case"left":case"right":d={width:!0,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break;default:d={width:!1,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break}break;case"isosceles":d={width:!1,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break;case"scalene":switch(a.value){case"top":case"bottom":d={width:!0,height:!1,widthLeft:!1,widthRight:!1,heightTop:!0,heightBottom:!0};break;case"left":case"right":d={width:!1,height:!0,widthLeft:!0,widthRight:!0,heightTop:!1,heightBottom:!1};break;default:d={width:!1,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break}break}return d[h]}function s(h){["top","right","bottom","left"].includes(a.value)?(l("width")?t.value.width=t.value.widthLeft*1+t.value.widthRight*1:(t.value.widthLeft=t.value.width*1/2,t.value.widthRight=t.value.width*1/2),l("height")?t.value.height=t.value.heightTop*1+t.value.heightBottom*1:(t.value.heightTop=t.value.height*1/2,t.value.heightBottom=t.value.height*1/2)):n.value==="isosceles"&&(h==="width"?t.value.height=t.value.width:h==="height"?t.value.width=t.value.height:t.value.height!==t.value.width&&(t.value.height=t.value.width),t.value.widthLeft=t.value.width*1/2,t.value.widthRight=t.value.width*1/2,t.value.heightTop=t.value.height*1/2,t.value.heightBottom=t.value.height*1/2)}return(h,d)=>{const c=ao;return q(),E("div",Oo,[d[0]||(d[0]=A("div",{class:"title text-24 font-600"}," 大小 ",-1)),(q(),E(Re,null,$e(r,w=>A("div",{key:w.name,class:"mb-5 flex items-center"},[A("div",Go,Le(w.label),1),N(c,{value:t.value[w.name],"onUpdate:value":[m=>t.value[w.name]=m,m=>s(w.name)],class:"flex-1",disabled:l(w.name)},{suffix:ke(()=>[ot(Le(o.value),1)]),_:1},8,["value","onUpdate:value","disabled"])])),64))])}}}),Ko={class:"generator-option"},Zo=D({__name:"GeneratorOption",props:{value:{required:!0},valueModifiers:{}},emits:["update:value"],setup(e){const t=ze(e,"value"),o=W(qe),a=[{label:"等边",value:"equilateral"},{label:"等腰",value:"isosceles"},{label:"不等边",value:"scalene"}],n=["topRight","bottomRight","bottomLeft","topLeft"];tt(o,()=>{n.includes(o.value)&&t.value==="equilateral"&&(t.value="isosceles")});function r(l){return!!(n.includes(o.value)&&l==="equilateral")}return(l,s)=>{const h=bt,d=ft;return q(),E("div",Ko,[s[1]||(s[1]=A("div",{class:"title text-24 font-600"}," 选项 ",-1)),N(d,{value:t.value,"onUpdate:value":s[0]||(s[0]=c=>t.value=c)},{default:ke(()=>[(q(),E(Re,null,$e(a,c=>N(h,{key:c.value,value:c.value,disabled:r(c.value)},{default:ke(()=>[ot(Le(c.label),1)]),_:2},1032,["value","disabled"])),64))]),_:1},8,["value"])])}}}),Xo={class:"generator-direction"},Wo={class:"relative flex-center py-60"},Jo={class:"triangle-direction relative size-60"},Yo={class:"corners size-60"},Qo=["onClick"],er={class:"corners absolute top-0 ml-3 mt-4 size-54 -rotate-45"},tr=["onClick"],or=D({__name:"GeneratorDirection",props:{value:{},valueModifiers:{}},emits:["update:value"],setup(e){const t=ze(e,"value"),o=[{label:"上",value:"top"},{label:"右",value:"right"},{label:"下",value:"bottom"},{label:"左",value:"left"},{label:"右上",value:"topRight"},{label:"右下",value:"bottomRight"},{label:"左下",value:"bottomLeft"},{label:"左上",value:"topLeft"}],a=[...o].splice(0,4),n=[...o].splice(4);return(r,l)=>{const s=bt,h=ft;return q(),E("div",Xo,[l[2]||(l[2]=A("div",{class:"title text-24 font-600"}," 方向 ",-1)),A("div",Wo,[N(h,{value:t.value,"onUpdate:value":l[0]||(l[0]=d=>t.value=d),class:"ml-4"},{default:ke(()=>[A("div",Jo,[A("div",Yo,[(q(!0),E(Re,null,$e(Qe(n),(d,c)=>(q(),E("div",{key:d.value,class:Me(["triangle absolute size-30 cursor-pointer bg-blue hover:bg-green",{"top-0 right-0":c===0,"bottom-0 right-0":c===1,"bottom-0 left-0":c===2,"top-0 left-0":c===3,"bg-green":t.value===d.value}]),onClick:w=>t.value=d.value},null,10,Qo))),128))]),A("div",er,[(q(!0),E(Re,null,$e(Qe(a),(d,c)=>(q(),E("div",{key:d.value,class:Me(["triangle absolute size-27 cursor-pointer bg-fuchsia hover:bg-green",{"top-0 right-0":c===0,"bottom-0 right-0":c===1,"bottom-0 left-0":c===2,"top-0 left-0":c===3,"bg-green":t.value===d.value}]),onClick:w=>t.value=d.value},null,10,tr))),128))]),l[1]||(l[1]=A("div",{class:"absolute-center size-38 bg-white"},null,-1)),(q(),E(Re,null,$e(o,(d,c)=>N(s,{id:d.value+c,key:d.value,class:Me(["absolute! mr-0!",{"flex-row-reverse":c===3||c===6||c===7,"-top-38 left-1/2 -translate-x-1/2":c===0,"top-16 -right-60":c===1,"-bottom-38 left-1/2 -translate-x-1/2":c===2,"top-16 -left-60":c===3,"-top-16 -right-60":c===4,"-bottom-16 -right-60":c===5,"-bottom-16 -left-60":c===6,"-top-16 -left-60":c===7}]),value:d.value},{default:ke(()=>[ot(Le(d.label),1)]),_:2},1032,["id","value","class"])),64))])]),_:1},8,["value"])])])}}}),rr={class:"css-triangle-generator flex flex-col gap-20 md:flex-row"},ar={class:"w-full md:w-50%"},nr={class:"w-full md:w-50%"},ir=D({__name:"index",setup(e){const t=V("top"),o=V("isosceles"),a=V("px"),n=V({width:200,widthLeft:100,widthRight:100,height:100,heightTop:50,heightBottom:50}),r=V("#60a5fa");return he(qe,t),he(at,o),he(wt,r),he(mt,n),he(vt,a),(l,s)=>{const h=or,d=Zo,c=jo,w=No,m=qo;return q(),E("div",rr,[A("div",ar,[N(h,{value:t.value,"onUpdate:value":s[0]||(s[0]=g=>t.value=g),class:"mb-20"},null,8,["value"]),N(d,{value:o.value,"onUpdate:value":s[1]||(s[1]=g=>o.value=g),class:"mb-20"},null,8,["value"]),N(c,{unit:a.value,"onUpdate:unit":s[2]||(s[2]=g=>a.value=g),size:n.value,"onUpdate:size":s[3]||(s[3]=g=>n.value=g),class:"mb-20"},null,8,["unit","size"]),N(w,{color:r.value,"onUpdate:color":s[4]||(s[4]=g=>r.value=g)},null,8,["color"])]),A("div",nr,[N(m)])])}}}),lr={};function sr(e,t){const o=ir,a=eo("ClientOnly");return q(),E("div",null,[t[0]||(t[0]=A("h1",{id:"css三角形生成器",tabindex:"-1"},[A("a",{class:"header-anchor",href:"#css三角形生成器"},[A("span",null,"CSS三角形生成器")])],-1)),N(a,null,{default:ke(()=>[N(o)]),_:1})])}const hr=ht(lr,[["render",sr]]),pr=JSON.parse('{"path":"/tools/css-triangle-generator.html","title":"CSS三角形生成器","lang":"zh-CN","frontmatter":{"toc":false,"pageInfo":false,"layout":"ToolLayout","description":"一个css三角形生成器，支持上下左右各方向选择，支持等边、等腰、不等边选择，支持自定义大小，支持自定义颜色选择，生成的代码支持一键复制，非常方便。","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS三角形生成器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-04T11:17:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"],["meta",{"property":"og:url","content":"https://liubing.me/tools/css-triangle-generator.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"CSS三角形生成器"}],["meta",{"property":"og:description","content":"一个css三角形生成器，支持上下左右各方向选择，支持等边、等腰、不等边选择，支持自定义大小，支持自定义颜色选择，生成的代码支持一键复制，非常方便。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-04T11:17:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-04T11:17:48.000Z"}]]},"git":{"createdTime":1721659103000,"updatedTime":1725448668000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":3,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":0.27,"words":80},"filePathRelative":"tools/css-triangle-generator.md","excerpt":"\\n\\n"}');export{hr as comp,pr as data};
