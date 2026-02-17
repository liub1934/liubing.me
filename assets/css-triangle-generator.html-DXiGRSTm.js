import{j as g,n as $,l as C,e as T,h as u,u as Qe,ax as At,ay as X,az as te,aA as he,aB as Te,aC as oe,aD as ne,aE as ie,aF as me,aG as pe,aH as it,aI as Oe,aJ as Ge,aK as je,w as F,x as z,a3 as we,a5 as xe,E as Bt,U as W,a2 as lt,aL as Ce,aM as Ke,aN as Ze,aO as Xe,aP as Dt,aQ as Tt,k as ae,aR as Pt,aS as It,aT as Mt,aU as We,aV as Ft,aW as Lt,aX as Ht,aY as st,q as Fe,aZ as qt,V as Je,a_ as et,v as ut,a$ as Et,b0 as Nt,y as fe,at as Ve,b1 as Ot,D as Se,z as Ie,C as ce,m as at,b2 as Gt,b3 as jt,s as Kt,b4 as Zt,o as q,c as E,b as V,ae as Pe,am as Ye,al as Xt,d as N,b5 as Wt,_ as dt,ag as ze,ai as Re,aj as $e,ad as Me,a9 as ke,aa as tt,r as Jt}from"./app-kBHCaxRY.js";import{_ as ct,u as Yt}from"./Input-DzmW_D_d.js";import{r as Qt,b as eo,a as to,_ as ht}from"./InputNumber-BW0nHIfe.js";const oo=g("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[$(">",[g("input",[$("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),$("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),g("button",[$("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[C("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),$("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[C("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),$("*",[$("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[$(">",[g("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),g("base-selection",[g("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),g("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),C("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),$("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[$(">",[g("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),g("base-selection",[g("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),g("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),C("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),ro={},ao=T({name:"InputGroup",props:ro,setup(e){const{mergedClsPrefixRef:t}=Qe(e);return At("-input-group",oo,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:`${e}-input-group`},this.$slots)}});function no(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function Ue(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function io(e,t=[255,255,255],a="AA"){const[o,n,r,l]=X(te(e));if(l===1){const f=Ae([o,n,r]),x=Ae(t);return(Math.max(f,x)+.05)/(Math.min(f,x)+.05)>=(a==="AA"?4.5:7)}const s=Math.round(o*l+t[0]*(1-l)),h=Math.round(n*l+t[1]*(1-l)),d=Math.round(r*l+t[2]*(1-l)),c=Ae([s,h,d]),m=Ae(t);return(Math.max(c,m)+.05)/(Math.min(c,m)+.05)>=(a==="AA"?4.5:7)}function Ae(e){const[t,a,o]=e.map(n=>(n/=255,n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)));return .2126*t+.7152*a+.0722*o}function lo(e){return e=Math.round(e),e>=360?359:e<0?0:e}function so(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const uo={rgb:{hex(e){return ie(X(e))},hsl(e){const[t,a,o,n]=X(e);return te([...je(t,a,o),n])},hsv(e){const[t,a,o,n]=X(e);return pe([...Ge(t,a,o),n])}},hex:{rgb(e){return oe(X(e))},hsl(e){const[t,a,o,n]=X(e);return te([...je(t,a,o),n])},hsv(e){const[t,a,o,n]=X(e);return pe([...Ge(t,a,o),n])}},hsl:{hex(e){const[t,a,o,n]=me(e);return ie([...Oe(t,a,o),n])},rgb(e){const[t,a,o,n]=me(e);return oe([...Oe(t,a,o),n])},hsv(e){const[t,a,o,n]=me(e);return pe([...it(t,a,o),n])}},hsv:{hex(e){const[t,a,o,n]=he(e);return ie([...ne(t,a,o),n])},rgb(e){const[t,a,o,n]=he(e);return oe([...ne(t,a,o),n])},hsl(e){const[t,a,o,n]=he(e);return te([...Te(t,a,o),n])}}};function pt(e,t,a){return a=a||Ue(e),a?a===t?e:uo[a][t](e):null}const _e="12px",co=12,ue="6px",ho=T({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=z(null);function a(r){!t.value||!e.rgba||(we("mousemove",document,o),we("mouseup",document,n),o(r))}function o(r){const{value:l}=t;if(!l)return;const{width:s,left:h}=l.getBoundingClientRect(),d=(r.clientX-h)/(s-co);e.onUpdateAlpha(so(d))}function n(){var r;xe("mousemove",document,o),xe("mouseup",document,n),(r=e.onComplete)===null||r===void 0||r.call(e)}return{railRef:t,railBackgroundImage:F(()=>{const{rgba:r}=e;return r?`linear-gradient(to right, rgba(${r[0]}, ${r[1]}, ${r[2]}, 0) 0%, rgba(${r[0]}, ${r[1]}, ${r[2]}, 1) 100%)`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:_e,borderRadius:ue},onMousedown:this.handleMouseDown},u("div",{style:{borderRadius:ue,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},u("div",{class:`${e}-color-picker-checkboard`}),u("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&u("div",{style:{position:"absolute",left:ue,right:ue,top:0,bottom:0}},u("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${ue})`,borderRadius:ue,width:_e,height:_e}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:oe(this.rgba),borderRadius:ue,width:_e,height:_e}}))))}}),ot=Bt("n-color-picker");function po(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function bo(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function go(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function vo(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function fo(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const mo={paddingSmall:"0 4px"},nt=T({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=z(""),{themeRef:a}=W(ot,null);lt(()=>{t.value=o()});function o(){const{value:l}=e;if(l===null)return"";const{label:s}=e;return s==="HEX"?l:s==="A"?`${Math.floor(l*100)}%`:String(Math.floor(l))}function n(l){t.value=l}function r(l){let s,h;switch(e.label){case"HEX":h=vo(l),h&&e.onUpdateValue(l),t.value=o();break;case"H":s=bo(l),s===!1?t.value=o():e.onUpdateValue(s);break;case"S":case"L":case"V":s=go(l),s===!1?t.value=o():e.onUpdateValue(s);break;case"A":s=fo(l),s===!1?t.value=o():e.onUpdateValue(s);break;case"R":case"G":case"B":s=po(l),s===!1?t.value=o():e.onUpdateValue(s);break}}return{mergedTheme:a,inputValue:t,handleInputChange:r,handleInputUpdateValue:n}},render(){const{mergedTheme:e}=this;return u(ct,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:mo,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),wo=T({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,a){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?ie:Ce)(a));return}let n;switch(e.valueArr===null?n=[0,0,0,0]:n=Array.from(e.valueArr),e.mode){case"hsv":n[t]=a,e.onUpdateValue((o?pe:Xe)(n));break;case"rgb":n[t]=a,e.onUpdateValue((o?oe:Ze)(n));break;case"hsl":n[t]=a,e.onUpdateValue((o?te:Ke)(n));break}}}},render(){const{clsPrefix:e,modes:t}=this;return u("div",{class:`${e}-color-picker-input`},u("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),u(ao,null,{default:()=>{const{mode:a,valueArr:o,showAlpha:n}=this;if(a==="hex"){let r=null;try{r=o===null?null:(n?ie:Ce)(o)}catch{}return u(nt,{label:"HEX",showAlpha:n,value:r,onUpdateValue:l=>{this.handleUnitUpdateValue(0,l)}})}return(a+(n?"a":"")).split("").map((r,l)=>u(nt,{label:r.toUpperCase(),value:o===null?null:o[l],onUpdateValue:s=>{this.handleUnitUpdateValue(l,s)}}))}}))}});function xo(e,t){if(t==="hsv"){const[a,o,n,r]=he(e);return oe([...ne(a,o,n),r])}return e}function ko(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const yo=T({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=F(()=>e.swatches.map(r=>{const l=Ue(r);return{value:r,mode:l,legalValue:xo(r,l)}}));function a(r){const{mode:l}=e;let{value:s,mode:h}=r;return h||(h="hex",/^[a-zA-Z]+$/.test(s)?s=ko(s):(Dt("color-picker",`color ${s} in swatches is invalid.`),s="#000000")),h===l?s:pt(s,l,h)}function o(r){e.onUpdateColor(a(r))}function n(r,l){r.key==="Enter"&&o(l)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:n}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>u("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:a=>{this.handleSwatchKeyDown(a,t)}},u("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),_o=T({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:a}=W(ot,null);return()=>{const{hsla:o,value:n,clsPrefix:r,onClick:l,disabled:s}=e,h=t.label||a.value;return u("div",{class:[`${r}-color-picker-trigger`,s&&`${r}-color-picker-trigger--disabled`],onClick:s?void 0:l},u("div",{class:`${r}-color-picker-trigger__fill`},u("div",{class:`${r}-color-picker-checkboard`}),u("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?te(o):""}}),n&&o?u("div",{class:`${r}-color-picker-trigger__value`,style:{color:io(o)?"white":"black"}},h?h(n):n):null))}}}),Co=T({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=Ue(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(a){var o;const n=a.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,pt(n.toUpperCase(),e.mode,"hex")),a.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-preview__preview`},u("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),u("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),ve="12px",So=12,de="6px",Ro=6,$o="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",zo=T({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=z(null);function a(r){t.value&&(we("mousemove",document,o),we("mouseup",document,n),o(r))}function o(r){const{value:l}=t;if(!l)return;const{width:s,left:h}=l.getBoundingClientRect(),d=lo((r.clientX-h-Ro)/(s-So)*360);e.onUpdateHue(d)}function n(){var r;xe("mousemove",document,o),xe("mouseup",document,n),(r=e.onComplete)===null||r===void 0||r.call(e)}return{railRef:t,handleMouseDown:a}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-slider`,style:{height:ve,borderRadius:de}},u("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:$o,height:ve,borderRadius:de,position:"relative"},onMousedown:this.handleMouseDown},u("div",{style:{position:"absolute",left:de,right:de,top:0,bottom:0}},u("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${de})`,borderRadius:de,width:ve,height:ve}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:de,width:ve,height:ve}})))))}}),Be="12px",De="6px",Uo=T({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=z(null);function a(r){t.value&&(we("mousemove",document,o),we("mouseup",document,n),o(r))}function o(r){const{value:l}=t;if(!l)return;const{width:s,height:h,left:d,bottom:c}=l.getBoundingClientRect(),m=(c-r.clientY)/h,k=(r.clientX-d)/s,f=100*(k>1?1:k<0?0:k),x=100*(m>1?1:m<0?0:m);e.onUpdateSV(f,x)}function n(){var r;xe("mousemove",document,o),xe("mouseup",document,n),(r=e.onComplete)===null||r===void 0||r.call(e)}return{palleteRef:t,handleColor:F(()=>{const{rgba:r}=e;return r?`rgb(${r[0]}, ${r[1]}, ${r[2]})`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},u("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),u("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&u("div",{class:`${e}-color-picker-handle`,style:{width:Be,height:Be,borderRadius:De,left:`calc(${this.displayedSv[0]}% - ${De})`,bottom:`calc(${this.displayedSv[1]}% - ${De})`}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:De,width:Be,height:Be}})))}}),Vo=$([g("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),g("color-picker-panel",`
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
 `,[Tt(),g("input",`
 text-align: center;
 `)]),g("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[$("&::after",`
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
 `)]),g("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[C("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),$("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),g("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[C("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),g("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[C("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[ae("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),g("color-picker-preview",`
 display: flex;
 `,[C("sliders",`
 flex: 1 0 auto;
 `),C("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),C("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),C("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),g("color-picker-input",`
 display: flex;
 align-items: center;
 `,[g("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),C("mode",`
 width: 72px;
 text-align: center;
 `)]),g("color-picker-control",`
 padding: 12px;
 `),g("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[g("button","margin-left: 8px;")]),g("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[C("value",`
 white-space: nowrap;
 position: relative;
 `),C("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),ae("disabled","cursor: not-allowed"),g("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[$("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),g("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[g("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[C("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),$("&:focus",`
 outline: none;
 `,[C("fill",[$("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Ao=Object.assign(Object.assign({},Fe.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:We.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Bo=T({name:"ColorPicker",props:Ao,slots:Object,setup(e,{slots:t}){const a=z(null);let o=null;const n=st(e),{mergedSizeRef:r,mergedDisabledRef:l}=n,{localeRef:s}=Yt("global"),{mergedClsPrefixRef:h,namespaceRef:d,inlineThemeDisabled:c}=Qe(e),m=Fe("ColorPicker","-color-picker",Vo,qt,e,h);ce(ot,{themeRef:m,renderLabelRef:Se(e,"renderLabel"),colorPickerSlots:t});const k=z(e.defaultShow),f=Je(Se(e,"show"),k);function x(i){const{onUpdateShow:v,"onUpdate:show":S}=e;v&&fe(v,i),S&&fe(S,i),k.value=i}const{defaultValue:J}=e,re=z(J===void 0?no(e.modes,e.showAlpha):J),y=Je(Se(e,"value"),re),j=z([y.value]),P=z(0),O=F(()=>Ue(y.value)),{modes:p}=e,w=z(Ue(y.value)||p[0]||"rgb");function Y(){const{modes:i}=e,{value:v}=w,S=i.findIndex(R=>R===v);~S?w.value=i[(S+1)%i.length]:w.value="rgb"}let B,I,L,b,D,K,Z,H;const le=F(()=>{const{value:i}=y;if(!i)return null;switch(O.value){case"hsv":return he(i);case"hsl":return[B,I,L,H]=me(i),[...it(B,I,L),H];case"rgb":case"hex":return[D,K,Z,H]=X(i),[...Ge(D,K,Z),H]}}),Q=F(()=>{const{value:i}=y;if(!i)return null;switch(O.value){case"rgb":case"hex":return X(i);case"hsv":return[B,I,b,H]=he(i),[...ne(B,I,b),H];case"hsl":return[B,I,L,H]=me(i),[...Oe(B,I,L),H]}}),ye=F(()=>{const{value:i}=y;if(!i)return null;switch(O.value){case"hsl":return me(i);case"hsv":return[B,I,b,H]=he(i),[...Te(B,I,b),H];case"rgb":case"hex":return[D,K,Z,H]=X(i),[...je(D,K,Z),H]}}),He=F(()=>{switch(w.value){case"rgb":case"hex":return Q.value;case"hsv":return le.value;case"hsl":return ye.value}}),be=z(0),qe=z(1),Ee=z([0,0]);function mt(i,v){const{value:S}=le,R=be.value,U=S?S[3]:1;Ee.value=[i,v];const{showAlpha:_}=e;switch(w.value){case"hsv":A((_?pe:Xe)([R,i,v,U]),"cursor");break;case"hsl":A((_?te:Ke)([...Te(R,i,v),U]),"cursor");break;case"rgb":A((_?oe:Ze)([...ne(R,i,v),U]),"cursor");break;case"hex":A((_?ie:Ce)([...ne(R,i,v),U]),"cursor");break}}function wt(i){be.value=i;const{value:v}=le;if(!v)return;const[,S,R,U]=v,{showAlpha:_}=e;switch(w.value){case"hsv":A((_?pe:Xe)([i,S,R,U]),"cursor");break;case"rgb":A((_?oe:Ze)([...ne(i,S,R),U]),"cursor");break;case"hex":A((_?ie:Ce)([...ne(i,S,R),U]),"cursor");break;case"hsl":A((_?te:Ke)([...Te(i,S,R),U]),"cursor");break}}function xt(i){switch(w.value){case"hsv":[B,I,b]=le.value,A(pe([B,I,b,i]),"cursor");break;case"rgb":[D,K,Z]=Q.value,A(oe([D,K,Z,i]),"cursor");break;case"hex":[D,K,Z]=Q.value,A(ie([D,K,Z,i]),"cursor");break;case"hsl":[B,I,L]=ye.value,A(te([B,I,L,i]),"cursor");break}qe.value=i}function A(i,v){v==="cursor"?o=i:o=null;const{nTriggerFormChange:S,nTriggerFormInput:R}=n,{onUpdateValue:U,"onUpdate:value":_}=e;U&&fe(U,i),_&&fe(_,i),S(),R(),re.value=i}function kt(i){A(i,"input"),Ot(ge)}function ge(i=!0){const{value:v}=y;if(v){const{nTriggerFormChange:S,nTriggerFormInput:R}=n,{onComplete:U}=e;U&&U(v);const{value:_}=j,{value:G}=P;i&&(_.splice(G+1,_.length,v),P.value=G+1),S(),R()}}function yt(){const{value:i}=P;i-1<0||(A(j.value[i-1],"input"),ge(!1),P.value=i-1)}function _t(){const{value:i}=P;i<0||i+1>=j.value.length||(A(j.value[i+1],"input"),ge(!1),P.value=i+1)}function Ct(){A(null,"input");const{onClear:i}=e;i&&i(),x(!1)}function St(){const{value:i}=y,{onConfirm:v}=e;v&&v(i),x(!1)}const Rt=F(()=>P.value>=1),$t=F(()=>{const{value:i}=j;return i.length>1&&P.value<i.length-1});et(f,i=>{i||(j.value=[y.value],P.value=0)}),lt(()=>{if(!(o&&o===y.value)){const{value:i}=le;i&&(be.value=i[0],qe.value=i[3],Ee.value=[i[1],i[2]])}o=null});const Ne=F(()=>{const{value:i}=r,{common:{cubicBezierEaseInOut:v},self:{textColor:S,color:R,panelFontSize:U,boxShadow:_,border:G,borderRadius:M,dividerColor:se,[Ie("height",i)]:Ut,[Ie("fontSize",i)]:Vt}}=m.value;return{"--n-bezier":v,"--n-text-color":S,"--n-color":R,"--n-panel-font-size":U,"--n-font-size":Vt,"--n-box-shadow":_,"--n-border":G,"--n-border-radius":M,"--n-height":Ut,"--n-divider-color":se}}),ee=c?ut("color-picker",F(()=>r.value[0]),Ne,e):void 0;function zt(){var i;const{value:v}=Q,{value:S}=be,{internalActions:R,modes:U,actions:_}=e,{value:G}=m,{value:M}=h;return u("div",{class:[`${M}-color-picker-panel`,ee?.themeClass.value],onDragstart:se=>{se.preventDefault()},style:c?void 0:Ne.value},u("div",{class:`${M}-color-picker-control`},u(Uo,{clsPrefix:M,rgba:v,displayedHue:S,displayedSv:Ee.value,onUpdateSV:mt,onComplete:ge}),u("div",{class:`${M}-color-picker-preview`},u("div",{class:`${M}-color-picker-preview__sliders`},u(zo,{clsPrefix:M,hue:S,onUpdateHue:wt,onComplete:ge}),e.showAlpha?u(ho,{clsPrefix:M,rgba:v,alpha:qe.value,onUpdateAlpha:xt,onComplete:ge}):null),e.showPreview?u(Co,{clsPrefix:M,mode:w.value,color:Q.value&&Ce(Q.value),onUpdateColor:se=>{A(se,"input")}}):null),u(wo,{clsPrefix:M,showAlpha:e.showAlpha,mode:w.value,modes:U,onUpdateMode:Y,value:y.value,valueArr:He.value,onUpdateValue:kt}),((i=e.swatches)===null||i===void 0?void 0:i.length)&&u(yo,{clsPrefix:M,mode:w.value,swatches:e.swatches,onUpdateColor:se=>{A(se,"input")}})),_?.length?u("div",{class:`${M}-color-picker-action`},_.includes("confirm")&&u(Ve,{size:"small",onClick:St,theme:G.peers.Button,themeOverrides:G.peerOverrides.Button},{default:()=>s.value.confirm}),_.includes("clear")&&u(Ve,{size:"small",onClick:Ct,disabled:!y.value,theme:G.peers.Button,themeOverrides:G.peerOverrides.Button},{default:()=>s.value.clear})):null,t.action?u("div",{class:`${M}-color-picker-action`},{default:t.action}):R?u("div",{class:`${M}-color-picker-action`},R.includes("undo")&&u(Ve,{size:"small",onClick:yt,disabled:!Rt.value,theme:G.peers.Button,themeOverrides:G.peerOverrides.Button},{default:()=>s.value.undo}),R.includes("redo")&&u(Ve,{size:"small",onClick:_t,disabled:!$t.value,theme:G.peers.Button,themeOverrides:G.peerOverrides.Button},{default:()=>s.value.redo})):null)}return{mergedClsPrefix:h,namespace:d,selfRef:a,hsla:ye,rgba:Q,mergedShow:f,mergedDisabled:l,isMounted:Nt(),adjustedTo:We(e),mergedValue:y,handleTriggerClick(){x(!0)},handleClickOutside(i){var v;!((v=a.value)===null||v===void 0)&&v.contains(Et(i))||x(!1)},renderPanel:zt,cssVars:c?void 0:Ne,themeClass:ee?.themeClass,onRender:ee?.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t?.(),u("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},u(Pt,null,{default:()=>[u(It,null,{default:()=>u(_o,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick})}),u(Mt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===We.tdkey,to:this.adjustedTo},{default:()=>u(Ft,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Lt(this.renderPanel(),[[Ht,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Do=g("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[C("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[ae("checked",{backgroundColor:"var(--n-button-border-color-active)"}),ae("disabled",{opacity:"var(--n-opacity-disabled)"})]),ae("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[g("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),C("splitor",{height:"var(--n-height)"})]),g("radio-button",`
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
 `,[g("radio-input",`
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
 `),C("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),$("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[C("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),$("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[C("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),at("disabled",`
 cursor: pointer;
 `,[$("&:hover",[C("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),at("checked",{color:"var(--n-button-text-color-hover)"})]),ae("focus",[$("&:not(:active)",[C("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),ae("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),ae("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function To(e,t,a){var o;const n=[];let r=!1;for(let l=0;l<e.length;++l){const s=e[l],h=(o=s.type)===null||o===void 0?void 0:o.name;h==="RadioButton"&&(r=!0);const d=s.props;if(h!=="RadioButton"){n.push(s);continue}if(l===0)n.push(s);else{const c=n[n.length-1].props,m=t===c.value,k=c.disabled,f=t===d.value,x=d.disabled,J=(m?2:0)+(k?0:1),re=(f?2:0)+(x?0:1),y={[`${a}-radio-group__splitor--disabled`]:k,[`${a}-radio-group__splitor--checked`]:m},j={[`${a}-radio-group__splitor--disabled`]:x,[`${a}-radio-group__splitor--checked`]:f},P=J<re?j:y;n.push(u("div",{class:[`${a}-radio-group__splitor`,P]}),s)}}return{children:n,isButtonGroup:r}}const Po=Object.assign(Object.assign({},Fe.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),bt=T({name:"RadioGroup",props:Po,setup(e){const t=z(null),{mergedSizeRef:a,mergedDisabledRef:o,nTriggerFormChange:n,nTriggerFormInput:r,nTriggerFormBlur:l,nTriggerFormFocus:s}=st(e),{mergedClsPrefixRef:h,inlineThemeDisabled:d,mergedRtlRef:c}=Qe(e),m=Fe("Radio","-radio-group",Do,Qt,e,h),k=z(e.defaultValue),f=Se(e,"value"),x=Je(f,k);function J(p){const{onUpdateValue:w,"onUpdate:value":Y}=e;w&&fe(w,p),Y&&fe(Y,p),k.value=p,n(),r()}function re(p){const{value:w}=t;w&&(w.contains(p.relatedTarget)||s())}function y(p){const{value:w}=t;w&&(w.contains(p.relatedTarget)||l())}ce(eo,{mergedClsPrefixRef:h,nameRef:Se(e,"name"),valueRef:x,disabledRef:o,mergedSizeRef:a,doUpdateValue:J});const j=Kt("Radio",c,h),P=F(()=>{const{value:p}=a,{common:{cubicBezierEaseInOut:w},self:{buttonBorderColor:Y,buttonBorderColorActive:B,buttonBorderRadius:I,buttonBoxShadow:L,buttonBoxShadowFocus:b,buttonBoxShadowHover:D,buttonColor:K,buttonColorActive:Z,buttonTextColor:H,buttonTextColorActive:le,buttonTextColorHover:Q,opacityDisabled:ye,[Ie("buttonHeight",p)]:He,[Ie("fontSize",p)]:be}}=m.value;return{"--n-font-size":be,"--n-bezier":w,"--n-button-border-color":Y,"--n-button-border-color-active":B,"--n-button-border-radius":I,"--n-button-box-shadow":L,"--n-button-box-shadow-focus":b,"--n-button-box-shadow-hover":D,"--n-button-color":K,"--n-button-color-active":Z,"--n-button-text-color":H,"--n-button-text-color-hover":Q,"--n-button-text-color-active":le,"--n-height":He,"--n-opacity-disabled":ye}}),O=d?ut("radio-group",F(()=>a.value[0]),P,e):void 0;return{selfElRef:t,rtlEnabled:j,mergedClsPrefix:h,mergedValue:x,handleFocusout:y,handleFocusin:re,cssVars:d?void 0:P,themeClass:O?.themeClass,onRender:O?.onRender}},render(){var e;const{mergedValue:t,mergedClsPrefix:a,handleFocusin:o,handleFocusout:n}=this,{children:r,isButtonGroup:l}=To(Gt(jt(this)),t,a);return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{onFocusin:o,onFocusout:n,ref:"selfElRef",class:[`${a}-radio-group`,this.rtlEnabled&&`${a}-radio-group--rtl`,this.themeClass,l&&`${a}-radio-group--button-group`],style:this.cssVars},r)}}),Le=Symbol(),rt=Symbol(),gt=Symbol(),vt=Symbol(),ft=Symbol(),Io={class:"generator-preview"},Mo=T({__name:"GeneratorPreview",setup(e){const t=Zt(),a=W(Le),o=W(rt),n=W(vt),r=W(gt),l=W(ft),s={top:"bottom",right:"left",bottom:"top",left:"right",topRight:"right",bottomRight:"bottom",bottomLeft:"left",topLeft:"top"},h={top:{top:!1,right:"widthRight",bottom:"height",left:"widthLeft"},right:{top:"heightTop",right:!1,bottom:"heightBottom",left:"width"},bottom:{top:"height",right:"widthRight",bottom:!1,left:"widthLeft"},left:{top:"heightTop",right:"width",bottom:"heightBottom",left:!1},topRight:{top:!1,right:"width",bottom:"height",left:!1},bottomRight:{top:!1,right:!1,bottom:"height",left:"width"},bottomLeft:{top:"height",right:!1,bottom:!1,left:"width"},topLeft:{top:"height",right:"width",bottom:!1,left:!1}},d=F(()=>{const k={width:0,height:0,"border-style":"solid"},f=l.value,{width:x,widthLeft:J,widthRight:re,height:y,heightTop:j,heightBottom:P}=n.value,O={top:"transparent",right:"transparent",bottom:"transparent",left:"transparent"},p={top:0,right:0,bottom:0,left:0},w=h[a.value];O[s[a.value]]=f;for(const L in w){const b=L;if(w[b]===!1)p[b]="0";else{let D="";switch(o.value){case"equilateral":if(a.value==="top"||a.value==="bottom")switch(D=(Math.sqrt(3)/2*x).toFixed(1),w[b]){case"width":p[b]=D+r.value;break;case"height":p[b]=D+r.value;break;case"widthLeft":p[b]=x/2+r.value;break;case"widthRight":p[b]=x/2+r.value;break}else if(a.value==="left"||a.value==="right")switch(D=(Math.sqrt(3)/2*y).toFixed(1),w[b]){case"width":p[b]=D+r.value;break;case"height":p[b]=D+r.value;break;case"heightTop":p[b]=y/2+r.value;break;case"heightBottom":p[b]=y/2+r.value;break}break;case"isosceles":switch(w[b]){case"width":p[b]=x+r.value;break;case"height":p[b]=y+r.value;break;case"widthLeft":p[b]=x/2+r.value;break;case"widthRight":p[b]=x/2+r.value;break;case"heightTop":p[b]=y/2+r.value;break;case"heightBottom":p[b]=y/2+r.value;break}break;case"scalene":switch(w[b]){case"width":p[b]=`${x}px`;break;case"height":p[b]=`${y}px`;break;case"widthLeft":p[b]=`${J}px`;break;case"widthRight":p[b]=`${re}px`;break;case"heightTop":p[b]=`${j}px`;break;case"heightBottom":p[b]=`${P}px`;break}break}}}const Y=c(O),B=c(p);return k["border-color"]=Y,k["border-width"]=B,{outPutCss:`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${B};
    border-color: ${Y};
  `.split(`
`).map(L=>L.trim()).filter(L=>L.length>0).join(`
`),outPutStyle:k}});function c(k){const f=[];for(const x in k)f.push(k[x]);return f.join(" ")}function m(){Wt(d.value.outPutCss)}return(k,f)=>{const x=ct;return q(),E("div",Io,[V("div",{class:Pe(["triangle-output h-250 flex items-center overflow-auto bg-white",{"opacity-80":Ye(t)}])},[V("div",{class:"mx-auto transition-all",style:Xt(d.value.outPutStyle)},null,4)],2),f[0]||(f[0]=V("div",{class:"title mt-20 text-24 font-600"}," CSS ",-1)),N(x,{value:d.value.outPutCss,autosize:"",readonly:"",type:"textarea",onClick:m},null,8,["value"])])}}}),Fo=dt(Mo,[["__scopeId","data-v-566e9b32"]]),Lo={class:"generator-color"},Ho=T({__name:"GeneratorColor",props:{color:{required:!0},colorModifiers:{}},emits:["update:color"],setup(e){const t=ze(e,"color");return(a,o)=>{const n=Bo;return q(),E("div",Lo,[o[1]||(o[1]=V("div",{class:"title text-24 font-600"}," 颜色 ",-1)),N(n,{value:t.value,"onUpdate:value":o[0]||(o[0]=r=>t.value=r),"show-preview":!0,"show-alpha":!1},null,8,["value"])])}}}),qo={class:"generator-size"},Eo={class:"w-30 pr-10 text-right text-14"},No=T({__name:"GeneratorSize",props:{size:{required:!0},sizeModifiers:{},unit:{required:!0},unitModifiers:{}},emits:["update:size","update:unit"],setup(e){const t=ze(e,"size"),a=ze(e,"unit"),o=W(Le),n=W(rt),r=[{label:"宽度",name:"width"},{label:"左",name:"widthLeft"},{label:"右",name:"widthRight"},{label:"高度",name:"height"},{label:"上",name:"heightTop"},{label:"下",name:"heightBottom"}];et(o,()=>{s()});function l(h){let d={};switch(n.value){case"equilateral":switch(o.value){case"top":case"bottom":d={width:!1,height:!0,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break;case"left":case"right":d={width:!0,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break;default:d={width:!1,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break}break;case"isosceles":d={width:!1,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break;case"scalene":switch(o.value){case"top":case"bottom":d={width:!0,height:!1,widthLeft:!1,widthRight:!1,heightTop:!0,heightBottom:!0};break;case"left":case"right":d={width:!1,height:!0,widthLeft:!0,widthRight:!0,heightTop:!1,heightBottom:!1};break;default:d={width:!1,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break}break}return d[h]}function s(h){["top","right","bottom","left"].includes(o.value)?(l("width")?t.value.width=t.value.widthLeft*1+t.value.widthRight*1:(t.value.widthLeft=t.value.width*1/2,t.value.widthRight=t.value.width*1/2),l("height")?t.value.height=t.value.heightTop*1+t.value.heightBottom*1:(t.value.heightTop=t.value.height*1/2,t.value.heightBottom=t.value.height*1/2)):n.value==="isosceles"&&(h==="width"?t.value.height=t.value.width:h==="height"?t.value.width=t.value.height:t.value.height!==t.value.width&&(t.value.height=t.value.width),t.value.widthLeft=t.value.width*1/2,t.value.widthRight=t.value.width*1/2,t.value.heightTop=t.value.height*1/2,t.value.heightBottom=t.value.height*1/2)}return(h,d)=>{const c=to;return q(),E("div",qo,[d[0]||(d[0]=V("div",{class:"title text-24 font-600"}," 大小 ",-1)),(q(),E(Re,null,$e(r,m=>V("div",{key:m.name,class:"mb-5 flex items-center"},[V("div",Eo,Me(m.label),1),N(c,{value:t.value[m.name],"onUpdate:value":[k=>t.value[m.name]=k,k=>s(m.name)],class:"flex-1",disabled:l(m.name)},{suffix:ke(()=>[tt(Me(a.value),1)]),_:1},8,["value","onUpdate:value","disabled"])])),64))])}}}),Oo={class:"generator-option"},Go=T({__name:"GeneratorOption",props:{value:{required:!0},valueModifiers:{}},emits:["update:value"],setup(e){const t=ze(e,"value"),a=W(Le),o=[{label:"等边",value:"equilateral"},{label:"等腰",value:"isosceles"},{label:"不等边",value:"scalene"}],n=["topRight","bottomRight","bottomLeft","topLeft"];et(a,()=>{n.includes(a.value)&&t.value==="equilateral"&&(t.value="isosceles")});function r(l){return!!(n.includes(a.value)&&l==="equilateral")}return(l,s)=>{const h=ht,d=bt;return q(),E("div",Oo,[s[1]||(s[1]=V("div",{class:"title text-24 font-600"}," 选项 ",-1)),N(d,{value:t.value,"onUpdate:value":s[0]||(s[0]=c=>t.value=c)},{default:ke(()=>[(q(),E(Re,null,$e(o,c=>N(h,{key:c.value,value:c.value,disabled:r(c.value)},{default:ke(()=>[tt(Me(c.label),1)]),_:2},1032,["value","disabled"])),64))]),_:1},8,["value"])])}}}),jo={class:"generator-direction"},Ko={class:"relative flex-center py-60"},Zo={class:"triangle-direction relative size-60"},Xo={class:"corners size-60"},Wo=["onClick"],Jo={class:"corners absolute top-0 ml-3 mt-4 size-54 -rotate-45"},Yo=["onClick"],Qo=T({__name:"GeneratorDirection",props:{value:{},valueModifiers:{}},emits:["update:value"],setup(e){const t=ze(e,"value"),a=[{label:"上",value:"top"},{label:"右",value:"right"},{label:"下",value:"bottom"},{label:"左",value:"left"},{label:"右上",value:"topRight"},{label:"右下",value:"bottomRight"},{label:"左下",value:"bottomLeft"},{label:"左上",value:"topLeft"}],o=[...a].splice(0,4),n=[...a].splice(4);return(r,l)=>{const s=ht,h=bt;return q(),E("div",jo,[l[2]||(l[2]=V("div",{class:"title text-24 font-600"}," 方向 ",-1)),V("div",Ko,[N(h,{value:t.value,"onUpdate:value":l[0]||(l[0]=d=>t.value=d),class:"ml-4"},{default:ke(()=>[V("div",Zo,[V("div",Xo,[(q(!0),E(Re,null,$e(Ye(n),(d,c)=>(q(),E("div",{key:d.value,class:Pe(["triangle absolute size-30 cursor-pointer bg-blue hover:bg-green",{"top-0 right-0":c===0,"bottom-0 right-0":c===1,"bottom-0 left-0":c===2,"top-0 left-0":c===3,"bg-green":t.value===d.value}]),onClick:m=>t.value=d.value},null,10,Wo))),128))]),V("div",Jo,[(q(!0),E(Re,null,$e(Ye(o),(d,c)=>(q(),E("div",{key:d.value,class:Pe(["triangle absolute size-27 cursor-pointer bg-fuchsia hover:bg-green",{"top-0 right-0":c===0,"bottom-0 right-0":c===1,"bottom-0 left-0":c===2,"top-0 left-0":c===3,"bg-green":t.value===d.value}]),onClick:m=>t.value=d.value},null,10,Yo))),128))]),l[1]||(l[1]=V("div",{class:"absolute-center size-38 bg-white"},null,-1)),(q(),E(Re,null,$e(a,(d,c)=>N(s,{id:d.value+c,key:d.value,class:Pe(["absolute! mr-0!",{"flex-row-reverse":c===3||c===6||c===7,"-top-38 left-1/2 -translate-x-1/2":c===0,"top-16 -right-60":c===1,"-bottom-38 left-1/2 -translate-x-1/2":c===2,"top-16 -left-60":c===3,"-top-16 -right-60":c===4,"-bottom-16 -right-60":c===5,"-bottom-16 -left-60":c===6,"-top-16 -left-60":c===7}]),value:d.value},{default:ke(()=>[tt(Me(d.label),1)]),_:2},1032,["id","value","class"])),64))])]),_:1},8,["value"])])])}}}),er={class:"css-triangle-generator flex flex-col gap-20 md:flex-row"},tr={class:"w-full md:w-50%"},or={class:"w-full md:w-50%"},rr=T({__name:"index",setup(e){const t=z("top"),a=z("isosceles"),o=z("px"),n=z({width:200,widthLeft:100,widthRight:100,height:100,heightTop:50,heightBottom:50}),r=z("#60a5fa");return ce(Le,t),ce(rt,a),ce(ft,r),ce(vt,n),ce(gt,o),(l,s)=>{const h=Qo,d=Go,c=No,m=Ho,k=Fo;return q(),E("div",er,[V("div",tr,[N(h,{value:t.value,"onUpdate:value":s[0]||(s[0]=f=>t.value=f),class:"mb-20"},null,8,["value"]),N(d,{value:a.value,"onUpdate:value":s[1]||(s[1]=f=>a.value=f),class:"mb-20"},null,8,["value"]),N(c,{unit:o.value,"onUpdate:unit":s[2]||(s[2]=f=>o.value=f),size:n.value,"onUpdate:size":s[3]||(s[3]=f=>n.value=f),class:"mb-20"},null,8,["unit","size"]),N(m,{color:r.value,"onUpdate:color":s[4]||(s[4]=f=>r.value=f)},null,8,["color"])]),V("div",or,[N(k)])])}}}),ar={};function nr(e,t){const a=rr,o=Jt("ClientOnly");return q(),E("div",null,[t[0]||(t[0]=V("h1",{id:"css三角形生成器",tabindex:"-1"},[V("a",{class:"header-anchor",href:"#css三角形生成器"},[V("span",null,"CSS三角形生成器")])],-1)),N(o,null,{default:ke(()=>[N(a)]),_:1})])}const ur=dt(ar,[["render",nr]]),dr=JSON.parse('{"path":"/tools/css-triangle-generator.html","title":"CSS三角形生成器","lang":"zh-CN","frontmatter":{"toc":false,"pageInfo":false,"layout":"ToolLayout","description":"一个css三角形生成器，支持上下左右各方向选择，支持等边、等腰、不等边选择，支持自定义大小，支持自定义颜色选择，生成的代码支持一键复制，非常方便。","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS三角形生成器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-04T11:17:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"],["meta",{"property":"og:url","content":"https://liubing.me/tools/css-triangle-generator.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"CSS三角形生成器"}],["meta",{"property":"og:description","content":"一个css三角形生成器，支持上下左右各方向选择，支持等边、等腰、不等边选择，支持自定义大小，支持自定义颜色选择，生成的代码支持一键复制，非常方便。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-04T11:17:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-04T11:17:48.000Z"}]]},"git":{"createdTime":1721659103000,"updatedTime":1725448668000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":3,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":0.27,"words":80},"filePathRelative":"tools/css-triangle-generator.md","excerpt":"\\n\\n"}');export{ur as comp,dr as data};
