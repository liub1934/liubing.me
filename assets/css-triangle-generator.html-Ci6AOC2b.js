import{e as A,h as d,j as v,n as M,l as z,q as Je,aw as Ht,ax as ce,ay as ae,az as he,aA as _e,aB as se,aC as Ve,aD as ye,p as R,z as G,a4 as fe,a6 as Ie,F as Et,V as ie,a2 as It,aE as Fe,aF as st,aG as ut,aH as dt,aI as qt,aJ as jt,k as ue,u as ze,aK as ct,aL as gt,aM as Gt,v as we,x as $e,W as Ze,w as Ye,A as Xe,C as Ut,aN as Kt,aO as Zt,aP as Xt,aQ as Wt,aR as Jt,aS as Yt,aT as Qt,aU as eo,G as ee,av as Ee,aV as zt,m as wt,y as Bt,aW as to,aX as oo,H as ro,f as no,aY as ao,aZ as io,a_ as me,E as _t,a3 as yt,U as kt,a$ as St,b0 as lo,b1 as so,_ as ke,o as Z,c as X,b as O,am as uo,ae as Ge,d as W,ah as Le,ai as Ne,aj as Oe,af as We,aa as Ue,ab as bt,r as co}from"./app-DbY_WXI7.js";import{_ as mt,u as Pt}from"./Input-aKPUjISw.js";import{r as ho,a as fo,_ as Dt}from"./Radio-CYhoE7b3.js";function Mt(e,t,r){t/=100,r/=100;const o=t*Math.min(r,1-r)+r;return[e,o?(2-2*r/o)*100:0,o*100]}function Ke(e,t,r){t/=100,r/=100;const o=r-r*t/2,a=Math.min(o,1-o);return[e,a?(r-o)/a*100:0,o*100]}function de(e,t,r){t/=100,r/=100;let o=(a,i=(a+e/60)%6)=>r-r*t*Math.max(Math.min(i,4-i,1),0);return[o(5)*255,o(3)*255,o(1)*255]}function ht(e,t,r){e/=255,t/=255,r/=255;let o=Math.max(e,t,r),a=o-Math.min(e,t,r),i=a&&(o==e?(t-r)/a:o==t?2+(r-e)/a:4+(e-t)/a);return[60*(i<0?i+6:i),o&&a/o*100,o*100]}function ft(e,t,r){e/=255,t/=255,r/=255;let o=Math.max(e,t,r),a=o-Math.min(e,t,r),i=1-Math.abs(o+o-a-1),l=a&&(o==e?(t-r)/a:o==t?2+(r-e)/a:4+(e-t)/a);return[60*(l<0?l+6:l),i?a/i*100:0,(o+o-a)*50]}function pt(e,t,r){t/=100,r/=100;let o=t*Math.min(r,1-r),a=(i,l=(i+e/30)%12)=>r-o*Math.max(Math.min(l-3,9-l,1),-1);return[a(0)*255,a(8)*255,a(4)*255]}const po=A({name:"Add",render(){return d("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),go=A({name:"Remove",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},d("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),bo=v("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[M(">",[v("input",[M("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),M("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),v("button",[M("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[z("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),M("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[z("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),M("*",[M("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[M(">",[v("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v("base-selection",[v("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),z("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),M("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[M(">",[v("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),v("base-selection",[v("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),v("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),z("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),mo={},vo=A({name:"InputGroup",props:mo,setup(e){const{mergedClsPrefixRef:t}=Je(e);return Ht("-input-group",bo,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return d("div",{class:`${e}-input-group`},this.$slots)}});function xo(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function He(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function wo(e){return e=Math.round(e),e>=360?359:e<0?0:e}function _o(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const yo={rgb:{hex(e){return ce(ae(e))},hsl(e){const[t,r,o,a]=ae(e);return he([...ft(t,r,o),a])},hsv(e){const[t,r,o,a]=ae(e);return _e([...ht(t,r,o),a])}},hex:{rgb(e){return se(ae(e))},hsl(e){const[t,r,o,a]=ae(e);return he([...ft(t,r,o),a])},hsv(e){const[t,r,o,a]=ae(e);return _e([...ht(t,r,o),a])}},hsl:{hex(e){const[t,r,o,a]=Ve(e);return ce([...pt(t,r,o),a])},rgb(e){const[t,r,o,a]=Ve(e);return se([...pt(t,r,o),a])},hsv(e){const[t,r,o,a]=Ve(e);return _e([...Mt(t,r,o),a])}},hsv:{hex(e){const[t,r,o,a]=ye(e);return ce([...de(t,r,o),a])},rgb(e){const[t,r,o,a]=ye(e);return se([...de(t,r,o),a])},hsl(e){const[t,r,o,a]=ye(e);return he([...Ke(t,r,o),a])}}};function Tt(e,t,r){return r=r||He(e),r?r===t?e:yo[r][t](e):null}const Ae="12px",ko=12,ve="6px",So=A({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=R(null);function r(i){!t.value||!e.rgba||(fe("mousemove",document,o),fe("mouseup",document,a),o(i))}function o(i){const{value:l}=t;if(!l)return;const{width:u,left:c}=l.getBoundingClientRect(),f=(i.clientX-c)/(u-ko);e.onUpdateAlpha(_o(f))}function a(){var i;Ie("mousemove",document,o),Ie("mouseup",document,a),(i=e.onComplete)===null||i===void 0||i.call(e)}return{railRef:t,railBackgroundImage:G(()=>{const{rgba:i}=e;return i?`linear-gradient(to right, rgba(${i[0]}, ${i[1]}, ${i[2]}, 0) 0%, rgba(${i[0]}, ${i[1]}, ${i[2]}, 1) 100%)`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:Ae,borderRadius:ve},onMousedown:this.handleMouseDown},d("div",{style:{borderRadius:ve,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},d("div",{class:`${e}-color-picker-checkboard`}),d("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&d("div",{style:{position:"absolute",left:ve,right:ve,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${ve})`,borderRadius:ve,width:Ae,height:Ae}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:se(this.rgba),borderRadius:ve,width:Ae,height:Ae}}))))}}),vt=Et("n-color-picker");function Co(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function Ro(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function Vo(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function $o(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Io(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const Uo={paddingSmall:"0 4px"},Ct=A({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=R(""),{themeRef:r}=ie(vt,null);It(()=>{t.value=o()});function o(){const{value:l}=e;if(l===null)return"";const{label:u}=e;return u==="HEX"?l:u==="A"?`${Math.floor(l*100)}%`:String(Math.floor(l))}function a(l){t.value=l}function i(l){let u,c;switch(e.label){case"HEX":c=$o(l),c&&e.onUpdateValue(l),t.value=o();break;case"H":u=Ro(l),u===!1?t.value=o():e.onUpdateValue(u);break;case"S":case"L":case"V":u=Vo(l),u===!1?t.value=o():e.onUpdateValue(u);break;case"A":u=Io(l),u===!1?t.value=o():e.onUpdateValue(u);break;case"R":case"G":case"B":u=Co(l),u===!1?t.value=o():e.onUpdateValue(u);break}}return{mergedTheme:r,inputValue:t,handleInputChange:i,handleInputUpdateValue:a}},render(){const{mergedTheme:e}=this;return d(mt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Uo,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),zo=A({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,r){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?ce:Fe)(r));return}let a;switch(e.valueArr===null?a=[0,0,0,0]:a=Array.from(e.valueArr),e.mode){case"hsv":a[t]=r,e.onUpdateValue((o?_e:dt)(a));break;case"rgb":a[t]=r,e.onUpdateValue((o?se:ut)(a));break;case"hsl":a[t]=r,e.onUpdateValue((o?he:st)(a));break}}}},render(){const{clsPrefix:e,modes:t}=this;return d("div",{class:`${e}-color-picker-input`},d("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),d(vo,null,{default:()=>{const{mode:r,valueArr:o,showAlpha:a}=this;if(r==="hex"){let i=null;try{i=o===null?null:(a?ce:Fe)(o)}catch{}return d(Ct,{label:"HEX",showAlpha:a,value:i,onUpdateValue:l=>{this.handleUnitUpdateValue(0,l)}})}return(r+(a?"a":"")).split("").map((i,l)=>d(Ct,{label:i.toUpperCase(),value:o===null?null:o[l],onUpdateValue:u=>{this.handleUnitUpdateValue(l,u)}}))}}))}});function Bo(e,t){if(t==="hsv"){const[r,o,a,i]=ye(e);return se([...de(r,o,a),i])}return e}function Po(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const Do=A({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=G(()=>e.swatches.map(i=>{const l=He(i);return{value:i,mode:l,legalValue:Bo(i,l)}}));function r(i){const{mode:l}=e;let{value:u,mode:c}=i;return c||(c="hex",/^[a-zA-Z]+$/.test(u)?u=Po(u):(qt("color-picker",`color ${u} in swatches is invalid.`),u="#000000")),c===l?u:Tt(u,l,c)}function o(i){e.onUpdateColor(r(i))}function a(i,l){i.key==="Enter"&&o(l)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:a}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>d("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:r=>{this.handleSwatchKeyDown(r,t)}},d("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Mo=A({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:r}=ie(vt,null);return()=>{const{hsla:o,value:a,clsPrefix:i,onClick:l,disabled:u}=e,c=t.label||r.value;return d("div",{class:[`${i}-color-picker-trigger`,u&&`${i}-color-picker-trigger--disabled`],onClick:u?void 0:l},d("div",{class:`${i}-color-picker-trigger__fill`},d("div",{class:`${i}-color-picker-checkboard`}),d("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?he(o):""}}),a&&o?d("div",{class:`${i}-color-picker-trigger__value`,style:{color:o[2]>50||o[3]<.5?"black":"white"}},c?c(a):a):null))}}}),To=A({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=He(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(r){var o;const a=r.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,Tt(a.toUpperCase(),e.mode,"hex")),r.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-preview__preview`},d("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),d("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Re="12px",Ao=12,xe="6px",Fo=6,No="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Oo=A({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=R(null);function r(i){t.value&&(fe("mousemove",document,o),fe("mouseup",document,a),o(i))}function o(i){const{value:l}=t;if(!l)return;const{width:u,left:c}=l.getBoundingClientRect(),f=wo((i.clientX-c-Fo)/(u-Ao)*360);e.onUpdateHue(f)}function a(){var i;Ie("mousemove",document,o),Ie("mouseup",document,a),(i=e.onComplete)===null||i===void 0||i.call(e)}return{railRef:t,handleMouseDown:r}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,style:{height:Re,borderRadius:xe}},d("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:No,height:Re,borderRadius:xe,position:"relative"},onMousedown:this.handleMouseDown},d("div",{style:{position:"absolute",left:xe,right:xe,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${xe})`,borderRadius:xe,width:Re,height:Re}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:xe,width:Re,height:Re}})))))}}),qe="12px",je="6px",Lo=A({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=R(null);function r(i){t.value&&(fe("mousemove",document,o),fe("mouseup",document,a),o(i))}function o(i){const{value:l}=t;if(!l)return;const{width:u,height:c,left:f,bottom:x}=l.getBoundingClientRect(),g=(x-i.clientY)/c,L=(i.clientX-f)/u,q=100*(L>1?1:L<0?0:L),P=100*(g>1?1:g<0?0:g);e.onUpdateSV(q,P)}function a(){var i;Ie("mousemove",document,o),Ie("mouseup",document,a),(i=e.onComplete)===null||i===void 0||i.call(e)}return{palleteRef:t,handleColor:G(()=>{const{rgba:i}=e;return i?`rgb(${i[0]}, ${i[1]}, ${i[2]})`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},d("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),d("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&d("div",{class:`${e}-color-picker-handle`,style:{width:qe,height:qe,borderRadius:je,left:`calc(${this.displayedSv[0]}% - ${je})`,bottom:`calc(${this.displayedSv[1]}% - ${je})`}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:je,width:qe,height:qe}})))}}),Ho=M([v("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),v("color-picker-panel",`
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
 `,[jt(),v("input",`
 text-align: center;
 `)]),v("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[M("&::after",`
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
 `,[z("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),M("&::after",`
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
 `,[z("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),v("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[z("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[ue("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),v("color-picker-preview",`
 display: flex;
 `,[z("sliders",`
 flex: 1 0 auto;
 `),z("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),z("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),z("input",`
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
 `),z("mode",`
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
 `,[v("button","margin-left: 8px;")]),v("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[z("value",`
 white-space: nowrap;
 position: relative;
 `),z("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),ue("disabled","cursor: not-allowed"),v("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[M("&::after",`
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
 `,[z("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),M("&:focus",`
 outline: none;
 `,[z("fill",[M("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Eo=Object.assign(Object.assign({},ze.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:ct.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),qo=A({name:"ColorPicker",props:Eo,setup(e,{slots:t}){const r=R(null);let o=null;const a=gt(e),{mergedSizeRef:i,mergedDisabledRef:l}=a,{localeRef:u}=Pt("global"),{mergedClsPrefixRef:c,namespaceRef:f,inlineThemeDisabled:x}=Je(e),g=ze("ColorPicker","-color-picker",Ho,Gt,e,c);we(vt,{themeRef:g,renderLabelRef:$e(e,"renderLabel"),colorPickerSlots:t});const L=R(e.defaultShow),q=Ze($e(e,"show"),L);function P(n){const{onUpdateShow:h,"onUpdate:show":p}=e;h&&ee(h,n),p&&ee(p,n),L.value=n}const{defaultValue:D}=e,V=R(D===void 0?xo(e.modes,e.showAlpha):D),U=Ze($e(e,"value"),V),K=R([U.value]),$=R(0),H=G(()=>He(U.value)),{modes:E}=e,S=R(He(U.value)||E[0]||"rgb");function m(){const{modes:n}=e,{value:h}=S,p=n.findIndex(w=>w===h);~p?S.value=n[(p+1)%n.length]:S.value="rgb"}let C,k,J,Y,T,b,F,j;const te=G(()=>{const{value:n}=U;if(!n)return null;switch(H.value){case"hsv":return ye(n);case"hsl":return[C,k,J,j]=Ve(n),[...Mt(C,k,J),j];case"rgb":case"hex":return[T,b,F,j]=ae(n),[...ht(T,b,F),j]}}),Q=G(()=>{const{value:n}=U;if(!n)return null;switch(H.value){case"rgb":case"hex":return ae(n);case"hsv":return[C,k,Y,j]=ye(n),[...de(C,k,Y),j];case"hsl":return[C,k,J,j]=Ve(n),[...pt(C,k,J),j]}}),pe=G(()=>{const{value:n}=U;if(!n)return null;switch(H.value){case"hsl":return Ve(n);case"hsv":return[C,k,Y,j]=ye(n),[...Ke(C,k,Y),j];case"rgb":case"hex":return[T,b,F,j]=ae(n),[...ft(T,b,F),j]}}),Be=G(()=>{switch(S.value){case"rgb":case"hex":return Q.value;case"hsv":return te.value;case"hsl":return pe.value}}),le=R(0),Pe=R(1),De=R([0,0]);function ge(n,h){const{value:p}=te,w=le.value,y=p?p[3]:1;De.value=[n,h];const{showAlpha:_}=e;switch(S.value){case"hsv":B((_?_e:dt)([w,n,h,y]),"cursor");break;case"hsl":B((_?he:st)([...Ke(w,n,h),y]),"cursor");break;case"rgb":B((_?se:ut)([...de(w,n,h),y]),"cursor");break;case"hex":B((_?ce:Fe)([...de(w,n,h),y]),"cursor");break}}function be(n){le.value=n;const{value:h}=te;if(!h)return;const[,p,w,y]=h,{showAlpha:_}=e;switch(S.value){case"hsv":B((_?_e:dt)([n,p,w,y]),"cursor");break;case"rgb":B((_?se:ut)([...de(n,p,w),y]),"cursor");break;case"hex":B((_?ce:Fe)([...de(n,p,w),y]),"cursor");break;case"hsl":B((_?he:st)([...Ke(n,p,w),y]),"cursor");break}}function Se(n){switch(S.value){case"hsv":[C,k,Y]=te.value,B(_e([C,k,Y,n]),"cursor");break;case"rgb":[T,b,F]=Q.value,B(se([T,b,F,n]),"cursor");break;case"hex":[T,b,F]=Q.value,B(ce([T,b,F,n]),"cursor");break;case"hsl":[C,k,J]=pe.value,B(he([C,k,J,n]),"cursor");break}Pe.value=n}function B(n,h){h==="cursor"?o=n:o=null;const{nTriggerFormChange:p,nTriggerFormInput:w}=a,{onUpdateValue:y,"onUpdate:value":_}=e;y&&ee(y,n),_&&ee(_,n),p(),w(),V.value=n}function Ce(n){B(n,"input"),zt(ne)}function ne(n=!0){const{value:h}=U;if(h){const{nTriggerFormChange:p,nTriggerFormInput:w}=a,{onComplete:y}=e;y&&y(h);const{value:_}=K,{value:N}=$;n&&(_.splice(N+1,_.length,h),$.value=N+1),p(),w()}}function et(){const{value:n}=$;n-1<0||(B(K.value[n-1],"input"),ne(!1),$.value=n-1)}function tt(){const{value:n}=$;n<0||n+1>=K.value.length||(B(K.value[n+1],"input"),ne(!1),$.value=n+1)}function ot(){B(null,"input");const{onClear:n}=e;n&&n(),P(!1)}function rt(){const{value:n}=U,{onConfirm:h}=e;h&&h(n),P(!1)}const nt=G(()=>$.value>=1),at=G(()=>{const{value:n}=K;return n.length>1&&$.value<n.length-1});Ye(q,n=>{n||(K.value=[U.value],$.value=0)}),It(()=>{if(!(o&&o===U.value)){const{value:n}=te;n&&(le.value=n[0],Pe.value=n[3],De.value=[n[1],n[2]])}o=null});const Me=G(()=>{const{value:n}=i,{common:{cubicBezierEaseInOut:h},self:{textColor:p,color:w,panelFontSize:y,boxShadow:_,border:N,borderRadius:I,dividerColor:re,[Xe("height",n)]:Te,[Xe("fontSize",n)]:Lt}}=g.value;return{"--n-bezier":h,"--n-text-color":p,"--n-color":w,"--n-panel-font-size":y,"--n-font-size":Lt,"--n-box-shadow":_,"--n-border":N,"--n-border-radius":I,"--n-height":Te,"--n-divider-color":re}}),oe=x?Ut("color-picker",G(()=>i.value[0]),Me,e):void 0;function s(){var n;const{value:h}=Q,{value:p}=le,{internalActions:w,modes:y,actions:_}=e,{value:N}=g,{value:I}=c;return d("div",{class:[`${I}-color-picker-panel`,oe==null?void 0:oe.themeClass.value],onDragstart:re=>{re.preventDefault()},style:x?void 0:Me.value},d("div",{class:`${I}-color-picker-control`},d(Lo,{clsPrefix:I,rgba:h,displayedHue:p,displayedSv:De.value,onUpdateSV:ge,onComplete:ne}),d("div",{class:`${I}-color-picker-preview`},d("div",{class:`${I}-color-picker-preview__sliders`},d(Oo,{clsPrefix:I,hue:p,onUpdateHue:be,onComplete:ne}),e.showAlpha?d(So,{clsPrefix:I,rgba:h,alpha:Pe.value,onUpdateAlpha:Se,onComplete:ne}):null),e.showPreview?d(To,{clsPrefix:I,mode:S.value,color:Q.value&&Fe(Q.value),onUpdateColor:re=>{B(re,"input")}}):null),d(zo,{clsPrefix:I,showAlpha:e.showAlpha,mode:S.value,modes:y,onUpdateMode:m,value:U.value,valueArr:Be.value,onUpdateValue:Ce}),((n=e.swatches)===null||n===void 0?void 0:n.length)&&d(Do,{clsPrefix:I,mode:S.value,swatches:e.swatches,onUpdateColor:re=>{B(re,"input")}})),_!=null&&_.length?d("div",{class:`${I}-color-picker-action`},_.includes("confirm")&&d(Ee,{size:"small",onClick:rt,theme:N.peers.Button,themeOverrides:N.peerOverrides.Button},{default:()=>u.value.confirm}),_.includes("clear")&&d(Ee,{size:"small",onClick:ot,disabled:!U.value,theme:N.peers.Button,themeOverrides:N.peerOverrides.Button},{default:()=>u.value.clear})):null,t.action?d("div",{class:`${I}-color-picker-action`},{default:t.action}):w?d("div",{class:`${I}-color-picker-action`},w.includes("undo")&&d(Ee,{size:"small",onClick:et,disabled:!nt.value,theme:N.peers.Button,themeOverrides:N.peerOverrides.Button},{default:()=>u.value.undo}),w.includes("redo")&&d(Ee,{size:"small",onClick:tt,disabled:!at.value,theme:N.peers.Button,themeOverrides:N.peerOverrides.Button},{default:()=>u.value.redo})):null)}return{mergedClsPrefix:c,namespace:f,selfRef:r,hsla:pe,rgba:Q,mergedShow:q,mergedDisabled:l,isMounted:Kt(),adjustedTo:ct(e),mergedValue:U,handleTriggerClick(){P(!0)},handleClickOutside(n){var h;!((h=r.value)===null||h===void 0)&&h.contains(Zt(n))||P(!1)},renderPanel:s,cssVars:x?void 0:Me,themeClass:oe==null?void 0:oe.themeClass,onRender:oe==null?void 0:oe.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:r}=this;return r==null||r(),d("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},d(Xt,null,{default:()=>[d(Wt,null,{default:()=>d(Mo,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),d(Jt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===ct.tdkey,to:this.adjustedTo},{default:()=>d(Yt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Qt(this.renderPanel(),[[eo,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),jo=v("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[z("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[ue("checked",{backgroundColor:"var(--n-button-border-color-active)"}),ue("disabled",{opacity:"var(--n-opacity-disabled)"})]),ue("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[v("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),z("splitor",{height:"var(--n-height)"})]),v("radio-button",`
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
 `),z("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),M("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[z("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),M("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[z("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),wt("disabled",`
 cursor: pointer;
 `,[M("&:hover",[z("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),wt("checked",{color:"var(--n-button-text-color-hover)"})]),ue("focus",[M("&:not(:active)",[z("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),ue("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),ue("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Go(e,t,r){var o;const a=[];let i=!1;for(let l=0;l<e.length;++l){const u=e[l],c=(o=u.type)===null||o===void 0?void 0:o.name;c==="RadioButton"&&(i=!0);const f=u.props;if(c!=="RadioButton"){a.push(u);continue}if(l===0)a.push(u);else{const x=a[a.length-1].props,g=t===x.value,L=x.disabled,q=t===f.value,P=f.disabled,D=(g?2:0)+(L?0:1),V=(q?2:0)+(P?0:1),U={[`${r}-radio-group__splitor--disabled`]:L,[`${r}-radio-group__splitor--checked`]:g},K={[`${r}-radio-group__splitor--disabled`]:P,[`${r}-radio-group__splitor--checked`]:q},$=D<V?K:U;a.push(d("div",{class:[`${r}-radio-group__splitor`,$]}),u)}}return{children:a,isButtonGroup:i}}const Ko=Object.assign(Object.assign({},ze.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),At=A({name:"RadioGroup",props:Ko,setup(e){const t=R(null),{mergedSizeRef:r,mergedDisabledRef:o,nTriggerFormChange:a,nTriggerFormInput:i,nTriggerFormBlur:l,nTriggerFormFocus:u}=gt(e),{mergedClsPrefixRef:c,inlineThemeDisabled:f,mergedRtlRef:x}=Je(e),g=ze("Radio","-radio-group",jo,ho,e,c),L=R(e.defaultValue),q=$e(e,"value"),P=Ze(q,L);function D(E){const{onUpdateValue:S,"onUpdate:value":m}=e;S&&ee(S,E),m&&ee(m,E),L.value=E,a(),i()}function V(E){const{value:S}=t;S&&(S.contains(E.relatedTarget)||u())}function U(E){const{value:S}=t;S&&(S.contains(E.relatedTarget)||l())}we(fo,{mergedClsPrefixRef:c,nameRef:$e(e,"name"),valueRef:P,disabledRef:o,mergedSizeRef:r,doUpdateValue:D});const K=Bt("Radio",x,c),$=G(()=>{const{value:E}=r,{common:{cubicBezierEaseInOut:S},self:{buttonBorderColor:m,buttonBorderColorActive:C,buttonBorderRadius:k,buttonBoxShadow:J,buttonBoxShadowFocus:Y,buttonBoxShadowHover:T,buttonColor:b,buttonColorActive:F,buttonTextColor:j,buttonTextColorActive:te,buttonTextColorHover:Q,opacityDisabled:pe,[Xe("buttonHeight",E)]:Be,[Xe("fontSize",E)]:le}}=g.value;return{"--n-font-size":le,"--n-bezier":S,"--n-button-border-color":m,"--n-button-border-color-active":C,"--n-button-border-radius":k,"--n-button-box-shadow":J,"--n-button-box-shadow-focus":Y,"--n-button-box-shadow-hover":T,"--n-button-color":b,"--n-button-color-active":F,"--n-button-text-color":j,"--n-button-text-color-hover":Q,"--n-button-text-color-active":te,"--n-height":Be,"--n-opacity-disabled":pe}}),H=f?Ut("radio-group",G(()=>r.value[0]),$,e):void 0;return{selfElRef:t,rtlEnabled:K,mergedClsPrefix:c,mergedValue:P,handleFocusout:U,handleFocusin:V,cssVars:f?void 0:$,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender}},render(){var e;const{mergedValue:t,mergedClsPrefix:r,handleFocusin:o,handleFocusout:a}=this,{children:i,isButtonGroup:l}=Go(to(oo(this)),t,r);return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{onFocusin:o,onFocusout:a,ref:"selfElRef",class:[`${r}-radio-group`,this.rtlEnabled&&`${r}-radio-group--rtl`,this.themeClass,l&&`${r}-radio-group--button-group`],style:this.cssVars},i)}});function Zo(e){const{textColorDisabled:t}=e;return{iconColorDisabled:t}}const Xo=ro({name:"InputNumber",common:no,peers:{Button:ao,Input:io},self:Zo}),Wo=M([v("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),v("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]);function Jo(e){return e==null||typeof e=="string"&&e.trim()===""?null:Number(e)}function Yo(e){return e.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(e)||/^-?\d*$/.test(e))||e==="-"||e==="-0"}function it(e){return e==null?!0:!Number.isNaN(e)}function Rt(e,t){return typeof e!="number"?"":t===void 0?String(e):e.toFixed(t)}function lt(e){if(e===null)return null;if(typeof e=="number")return e;{const t=Number(e);return Number.isNaN(t)?null:t}}const Vt=800,$t=100,Qo=Object.assign(Object.assign({},ze.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},inputProps:Object,readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},round:{type:Boolean,default:void 0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),er=A({name:"InputNumber",props:Qo,setup(e){const{mergedBorderedRef:t,mergedClsPrefixRef:r,mergedRtlRef:o}=Je(e),a=ze("InputNumber","-input-number",Wo,Xo,e,r),{localeRef:i}=Pt("InputNumber"),l=gt(e),{mergedSizeRef:u,mergedDisabledRef:c,mergedStatusRef:f}=l,x=R(null),g=R(null),L=R(null),q=R(e.defaultValue),P=$e(e,"value"),D=Ze(P,q),V=R(""),U=s=>{const n=String(s).split(".")[1];return n?n.length:0},K=s=>{const n=[e.min,e.max,e.step,s].map(h=>h===void 0?0:U(h));return Math.max(...n)},$=me(()=>{const{placeholder:s}=e;return s!==void 0?s:i.value.placeholder}),H=me(()=>{const s=lt(e.step);return s!==null?s===0?1:Math.abs(s):1}),E=me(()=>{const s=lt(e.min);return s!==null?s:null}),S=me(()=>{const s=lt(e.max);return s!==null?s:null}),m=()=>{const{value:s}=D;if(it(s)){const{format:n,precision:h}=e;n?V.value=n(s):s===null||h===void 0||U(s)>h?V.value=Rt(s,void 0):V.value=Rt(s,h)}else V.value=String(s)};m();const C=s=>{const{value:n}=D;if(s===n){m();return}const{"onUpdate:value":h,onUpdateValue:p,onChange:w}=e,{nTriggerFormInput:y,nTriggerFormChange:_}=l;w&&ee(w,s),p&&ee(p,s),h&&ee(h,s),q.value=s,y(),_()},k=({offset:s,doUpdateIfValid:n,fixPrecision:h,isInputing:p})=>{const{value:w}=V;if(p&&Yo(w))return!1;const y=(e.parse||Jo)(w);if(y===null)return n&&C(null),null;if(it(y)){const _=U(y),{precision:N}=e;if(N!==void 0&&N<_&&!h)return!1;let I=Number.parseFloat((y+s).toFixed(N??K(y)));if(it(I)){const{value:re}=S,{value:Te}=E;if(re!==null&&I>re){if(!n||p)return!1;I=re}if(Te!==null&&I<Te){if(!n||p)return!1;I=Te}return e.validator&&!e.validator(I)?!1:(n&&C(I),I)}}return!1},J=me(()=>k({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),Y=me(()=>{const{value:s}=D;if(e.validator&&s===null)return!1;const{value:n}=H;return k({offset:-n,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),T=me(()=>{const{value:s}=D;if(e.validator&&s===null)return!1;const{value:n}=H;return k({offset:+n,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function b(s){const{onFocus:n}=e,{nTriggerFormFocus:h}=l;n&&ee(n,s),h()}function F(s){var n,h;if(s.target===((n=x.value)===null||n===void 0?void 0:n.wrapperElRef))return;const p=k({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(p!==!1){const _=(h=x.value)===null||h===void 0?void 0:h.inputElRef;_&&(_.value=String(p||"")),D.value===p&&m()}else m();const{onBlur:w}=e,{nTriggerFormBlur:y}=l;w&&ee(w,s),y(),zt(()=>{m()})}function j(s){const{onClear:n}=e;n&&ee(n,s)}function te(){const{value:s}=T;if(!s){ne();return}const{value:n}=D;if(n===null)e.validator||C(le());else{const{value:h}=H;k({offset:h,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function Q(){const{value:s}=Y;if(!s){B();return}const{value:n}=D;if(n===null)e.validator||C(le());else{const{value:h}=H;k({offset:-h,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const pe=b,Be=F;function le(){if(e.validator)return null;const{value:s}=E,{value:n}=S;return s!==null?Math.max(0,s):n!==null?Math.min(0,n):0}function Pe(s){j(s),C(null)}function De(s){var n,h,p;!((n=L.value)===null||n===void 0)&&n.$el.contains(s.target)&&s.preventDefault(),!((h=g.value)===null||h===void 0)&&h.$el.contains(s.target)&&s.preventDefault(),(p=x.value)===null||p===void 0||p.activate()}let ge=null,be=null,Se=null;function B(){Se&&(window.clearTimeout(Se),Se=null),ge&&(window.clearInterval(ge),ge=null)}let Ce=null;function ne(){Ce&&(window.clearTimeout(Ce),Ce=null),be&&(window.clearInterval(be),be=null)}function et(){B(),Se=window.setTimeout(()=>{ge=window.setInterval(()=>{Q()},$t)},Vt),fe("mouseup",document,B,{once:!0})}function tt(){ne(),Ce=window.setTimeout(()=>{be=window.setInterval(()=>{te()},$t)},Vt),fe("mouseup",document,ne,{once:!0})}const ot=()=>{be||te()},rt=()=>{ge||Q()};function nt(s){var n,h;if(s.key==="Enter"){if(s.target===((n=x.value)===null||n===void 0?void 0:n.wrapperElRef))return;k({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((h=x.value)===null||h===void 0||h.deactivate())}else if(s.key==="ArrowUp"){if(!T.value||e.keyboard.ArrowUp===!1)return;s.preventDefault(),k({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&te()}else if(s.key==="ArrowDown"){if(!Y.value||e.keyboard.ArrowDown===!1)return;s.preventDefault(),k({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&Q()}}function at(s){V.value=s,e.updateValueOnInput&&!e.format&&!e.parse&&e.precision===void 0&&k({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Ye(D,()=>{m()});const Me={focus:()=>{var s;return(s=x.value)===null||s===void 0?void 0:s.focus()},blur:()=>{var s;return(s=x.value)===null||s===void 0?void 0:s.blur()},select:()=>{var s;return(s=x.value)===null||s===void 0?void 0:s.select()}},oe=Bt("InputNumber",o,r);return Object.assign(Object.assign({},Me),{rtlEnabled:oe,inputInstRef:x,minusButtonInstRef:g,addButtonInstRef:L,mergedClsPrefix:r,mergedBordered:t,uncontrolledValue:q,mergedValue:D,mergedPlaceholder:$,displayedValueInvalid:J,mergedSize:u,mergedDisabled:c,displayedValue:V,addable:T,minusable:Y,mergedStatus:f,handleFocus:pe,handleBlur:Be,handleClear:Pe,handleMouseDown:De,handleAddClick:ot,handleMinusClick:rt,handleAddMousedown:tt,handleMinusMousedown:et,handleKeyDown:nt,handleUpdateDisplayedValue:at,mergedTheme:a,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:G(()=>{const{self:{iconColorDisabled:s}}=a.value,[n,h,p,w]=ae(s);return{textColorTextDisabled:`rgb(${n}, ${h}, ${p})`,opacityDisabled:`${w}`}})})},render(){const{mergedClsPrefix:e,$slots:t}=this,r=()=>d(St,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>yt(t["minus-icon"],()=>[d(kt,{clsPrefix:e},{default:()=>d(go,null)})])}),o=()=>d(St,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>yt(t["add-icon"],()=>[d(kt,{clsPrefix:e},{default:()=>d(po,null)})])});return d("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},d(mt,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,round:this.round,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,inputProps:this.inputProps,internalLoadingBeforeSuffix:!0},{prefix:()=>{var a;return this.showButton&&this.buttonPlacement==="both"?[r(),_t(t.prefix,i=>i?d("span",{class:`${e}-input-number-prefix`},i):null)]:(a=t.prefix)===null||a===void 0?void 0:a.call(t)},suffix:()=>{var a;return this.showButton?[_t(t.suffix,i=>i?d("span",{class:`${e}-input-number-suffix`},i):null),this.buttonPlacement==="right"?r():null,o()]:(a=t.suffix)===null||a===void 0?void 0:a.call(t)}}))}}),Qe=Symbol(),xt=Symbol(),Ft=Symbol(),Nt=Symbol(),Ot=Symbol(),tr=A({__name:"GeneratorPreview",setup(e,{expose:t}){t();const{isDarkmode:r}=lo(),o=ie(Qe),a=ie(xt),i=ie(Nt),l=ie(Ft),u=ie(Ot),c={top:"bottom",right:"left",bottom:"top",left:"right",topRight:"right",bottomRight:"bottom",bottomLeft:"left",topLeft:"top"},f={top:{top:!1,right:"widthRight",bottom:"height",left:"widthLeft"},right:{top:"heightTop",right:!1,bottom:"heightBottom",left:"width"},bottom:{top:"height",right:"widthRight",bottom:!1,left:"widthLeft"},left:{top:"heightTop",right:"width",bottom:"heightBottom",left:!1},topRight:{top:!1,right:"width",bottom:"height",left:!1},bottomRight:{top:!1,right:!1,bottom:"height",left:"width"},bottomLeft:{top:"height",right:!1,bottom:!1,left:"width"},topLeft:{top:"height",right:"width",bottom:!1,left:!1}},x=G(()=>{const P={width:0,height:0,"border-style":"solid"},D=u.value,{width:V,widthLeft:U,widthRight:K,height:$,heightTop:H,heightBottom:E}=i.value,S={top:"transparent",right:"transparent",bottom:"transparent",left:"transparent"},m={top:0,right:0,bottom:0,left:0},C=f[o.value];S[c[o.value]]=D;for(const T in C){const b=T;if(C[b]===!1)m[b]="0";else{let F="";switch(a.value){case"equilateral":if(o.value==="top"||o.value==="bottom")switch(F=(Math.sqrt(3)/2*V).toFixed(1),C[b]){case"width":m[b]=F+l.value;break;case"height":m[b]=F+l.value;break;case"widthLeft":m[b]=V/2+l.value;break;case"widthRight":m[b]=V/2+l.value;break}else if(o.value==="left"||o.value==="right")switch(F=(Math.sqrt(3)/2*$).toFixed(1),C[b]){case"width":m[b]=F+l.value;break;case"height":m[b]=F+l.value;break;case"heightTop":m[b]=$/2+l.value;break;case"heightBottom":m[b]=$/2+l.value;break}break;case"isosceles":switch(C[b]){case"width":m[b]=V+l.value;break;case"height":m[b]=$+l.value;break;case"widthLeft":m[b]=V/2+l.value;break;case"widthRight":m[b]=V/2+l.value;break;case"heightTop":m[b]=$/2+l.value;break;case"heightBottom":m[b]=$/2+l.value;break}break;case"scalene":switch(C[b]){case"width":m[b]=`${V}px`;break;case"height":m[b]=`${$}px`;break;case"widthLeft":m[b]=`${U}px`;break;case"widthRight":m[b]=`${K}px`;break;case"heightTop":m[b]=`${H}px`;break;case"heightBottom":m[b]=`${E}px`;break}break}}}const k=g(S),J=g(m);return P["border-color"]=k,P["border-width"]=J,{outPutCss:`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${J};
    border-color: ${k};
  `.split(`
`).map(T=>T.trim()).filter(T=>T.length>0).join(`
`),outPutStyle:P}});function g(P){const D=[];for(const V in P)D.push(P[V]);return D.join(" ")}function L(){so(x.value.outPutCss)}const q={isDarkmode:r,direction:o,triangle:a,size:i,unit:l,colorValue:u,colorDirection:c,lengthDirection:f,getStyleInfo:x,toArrayString:g,handleCopy:L};return Object.defineProperty(q,"__isScriptSetup",{enumerable:!1,value:!0}),q}}),or={class:"generator-preview"};function rr(e,t,r,o,a,i){const l=mt;return Z(),X("div",or,[O("div",{class:Ge(["triangle-output h-250 flex items-center overflow-auto bg-white",{"opacity-80":o.isDarkmode}])},[O("div",{class:"mx-auto transition-all",style:uo(o.getStyleInfo.outPutStyle)},null,4)],2),t[0]||(t[0]=O("div",{class:"title mt-20 text-24 font-600"}," CSS ",-1)),W(l,{value:o.getStyleInfo.outPutCss,autosize:"",readonly:"",type:"textarea",onClick:o.handleCopy},null,8,["value"])])}const nr=ke(tr,[["render",rr],["__scopeId","data-v-f40e7f7c"],["__file","GeneratorPreview.vue"]]),ar=A({__name:"GeneratorColor",props:{color:{required:!0},colorModifiers:{}},emits:["update:color"],setup(e,{expose:t}){t();const o={modelColor:Le(e,"color")};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),ir={class:"generator-color"};function lr(e,t,r,o,a,i){const l=qo;return Z(),X("div",ir,[t[1]||(t[1]=O("div",{class:"title text-24 font-600"}," 颜色 ",-1)),W(l,{value:o.modelColor,"onUpdate:value":t[0]||(t[0]=u=>o.modelColor=u),"show-preview":!0,"show-alpha":!1},null,8,["value"])])}const sr=ke(ar,[["render",lr],["__file","GeneratorColor.vue"]]),ur=A({__name:"GeneratorSize",props:{size:{required:!0},sizeModifiers:{},unit:{required:!0},unitModifiers:{}},emits:["update:size","update:unit"],setup(e,{expose:t}){t();const r=Le(e,"size"),o=Le(e,"unit"),a=ie(Qe),i=ie(xt),l=[{label:"宽度",name:"width"},{label:"左",name:"widthLeft"},{label:"右",name:"widthRight"},{label:"高度",name:"height"},{label:"上",name:"heightTop"},{label:"下",name:"heightBottom"}];Ye(a,()=>{c()});function u(x){let g={};switch(i.value){case"equilateral":switch(a.value){case"top":case"bottom":g={width:!1,height:!0,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break;case"left":case"right":g={width:!0,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break;default:g={width:!1,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break}break;case"isosceles":g={width:!1,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break;case"scalene":switch(a.value){case"top":case"bottom":g={width:!0,height:!1,widthLeft:!1,widthRight:!1,heightTop:!0,heightBottom:!0};break;case"left":case"right":g={width:!1,height:!0,widthLeft:!0,widthRight:!0,heightTop:!1,heightBottom:!1};break;default:g={width:!1,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break}break}return g[x]}function c(x){["top","right","bottom","left"].includes(a.value)?(u("width")?r.value.width=r.value.widthLeft*1+r.value.widthRight*1:(r.value.widthLeft=r.value.width*1/2,r.value.widthRight=r.value.width*1/2),u("height")?r.value.height=r.value.heightTop*1+r.value.heightBottom*1:(r.value.heightTop=r.value.height*1/2,r.value.heightBottom=r.value.height*1/2)):i.value==="isosceles"&&(x==="width"?r.value.height=r.value.width:x==="height"?r.value.width=r.value.height:r.value.height!==r.value.width&&(r.value.height=r.value.width),r.value.widthLeft=r.value.width*1/2,r.value.widthRight=r.value.width*1/2,r.value.heightTop=r.value.height*1/2,r.value.heightBottom=r.value.height*1/2)}const f={modelSize:r,modelUnit:o,direction:a,triangle:i,sizeList:l,getDisabled:u,changeSize:c};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}),dr={class:"generator-size"},cr={class:"w-30 pr-10 text-right text-14"};function hr(e,t,r,o,a,i){const l=er;return Z(),X("div",dr,[t[0]||(t[0]=O("div",{class:"title text-24 font-600"}," 大小 ",-1)),(Z(),X(Ne,null,Oe(o.sizeList,u=>O("div",{key:u.name,class:"mb-5 flex items-center"},[O("div",cr,We(u.label),1),W(l,{value:o.modelSize[u.name],"onUpdate:value":[c=>o.modelSize[u.name]=c,c=>o.changeSize(u.name)],class:"flex-1",disabled:o.getDisabled(u.name)},{suffix:Ue(()=>[bt(We(o.modelUnit),1)]),_:2},1032,["value","onUpdate:value","disabled"])])),64))])}const fr=ke(ur,[["render",hr],["__file","GeneratorSize.vue"]]),pr=A({__name:"GeneratorOption",props:{value:{required:!0},valueModifiers:{}},emits:["update:value"],setup(e,{expose:t}){t();const r=Le(e,"value"),o=ie(Qe),a=[{label:"等边",value:"equilateral"},{label:"等腰",value:"isosceles"},{label:"不等边",value:"scalene"}],i=["topRight","bottomRight","bottomLeft","topLeft"];Ye(o,()=>{i.includes(o.value)&&r.value==="equilateral"&&(r.value="isosceles")});function l(c){return!!(i.includes(o.value)&&c==="equilateral")}const u={modelValue:r,direction:o,options:a,directions:i,getDisabled:l};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),gr={class:"generator-option"};function br(e,t,r,o,a,i){const l=Dt,u=At;return Z(),X("div",gr,[t[1]||(t[1]=O("div",{class:"title text-24 font-600"}," 选项 ",-1)),W(u,{value:o.modelValue,"onUpdate:value":t[0]||(t[0]=c=>o.modelValue=c)},{default:Ue(()=>[(Z(),X(Ne,null,Oe(o.options,c=>W(l,{key:c.value,value:c.value,disabled:o.getDisabled(c.value)},{default:Ue(()=>[bt(We(c.label),1)]),_:2},1032,["value","disabled"])),64))]),_:1},8,["value"])])}const mr=ke(pr,[["render",br],["__file","GeneratorOption.vue"]]),vr=A({__name:"GeneratorDirection",props:{value:{},valueModifiers:{}},emits:["update:value"],setup(e,{expose:t}){t();const r=Le(e,"value"),o=[{label:"上",value:"top"},{label:"右",value:"right"},{label:"下",value:"bottom"},{label:"左",value:"left"},{label:"右上",value:"topRight"},{label:"右下",value:"bottomRight"},{label:"左下",value:"bottomLeft"},{label:"左上",value:"topLeft"}],a=[...o].splice(0,4),i=[...o].splice(4),l={modelValue:r,directions:o,directions1:a,directions2:i};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),xr={class:"generator-direction"},wr={class:"relative flex-center py-60"},_r={class:"triangle-direction relative size-60"},yr={class:"corners size-60"},kr=["onClick"],Sr={class:"corners absolute top-0 ml-3 mt-4 size-54 -rotate-45"},Cr=["onClick"];function Rr(e,t,r,o,a,i){const l=Dt,u=At;return Z(),X("div",xr,[t[2]||(t[2]=O("div",{class:"title text-24 font-600"}," 方向 ",-1)),O("div",wr,[W(u,{value:o.modelValue,"onUpdate:value":t[0]||(t[0]=c=>o.modelValue=c),class:"ml-4"},{default:Ue(()=>[O("div",_r,[O("div",yr,[(Z(!0),X(Ne,null,Oe(o.directions2,(c,f)=>(Z(),X("div",{key:c.value,class:Ge(["triangle absolute size-30 cursor-pointer bg-blue hover:bg-green",{"top-0 right-0":f===0,"bottom-0 right-0":f===1,"bottom-0 left-0":f===2,"top-0 left-0":f===3,"bg-green":o.modelValue===c.value}]),onClick:x=>o.modelValue=c.value},null,10,kr))),128))]),O("div",Sr,[(Z(!0),X(Ne,null,Oe(o.directions1,(c,f)=>(Z(),X("div",{key:c.value,class:Ge(["triangle absolute size-27 cursor-pointer bg-fuchsia hover:bg-green",{"top-0 right-0":f===0,"bottom-0 right-0":f===1,"bottom-0 left-0":f===2,"top-0 left-0":f===3,"bg-green":o.modelValue===c.value}]),onClick:x=>o.modelValue=c.value},null,10,Cr))),128))]),t[1]||(t[1]=O("div",{class:"size-38 bg-white absolute-center"},null,-1)),(Z(),X(Ne,null,Oe(o.directions,(c,f)=>W(l,{id:c.value+f,key:c.value,class:Ge(["absolute! mr-0!",{"flex-row-reverse":f===3||f===6||f===7,"-top-38 left-1/2 -translate-x-1/2":f===0,"top-16 -right-60":f===1,"-bottom-38 left-1/2 -translate-x-1/2":f===2,"top-16 -left-60":f===3,"-top-16 -right-60":f===4,"-bottom-16 -right-60":f===5,"-bottom-16 -left-60":f===6,"-top-16 -left-60":f===7}]),value:c.value},{default:Ue(()=>[bt(We(c.label),1)]),_:2},1032,["id","value","class"])),64))])]),_:1},8,["value"])])])}const Vr=ke(vr,[["render",Rr],["__file","GeneratorDirection.vue"]]),$r=A({__name:"index",setup(e,{expose:t}){t();const r=R("top"),o=R("isosceles"),a=R("px"),i=R({width:200,widthLeft:100,widthRight:100,height:100,heightTop:50,heightBottom:50}),l=R("#60a5fa");we(Qe,r),we(xt,o),we(Ot,l),we(Nt,i),we(Ft,a);const u={direction:r,triangle:o,unit:a,size:i,colorValue:l};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),Ir={class:"css-triangle-generator flex flex-col gap-20 md:flex-row"},Ur={class:"w-full md:w-50%"},zr={class:"w-full md:w-50%"};function Br(e,t,r,o,a,i){const l=Vr,u=mr,c=fr,f=sr,x=nr;return Z(),X("div",Ir,[O("div",Ur,[W(l,{value:o.direction,"onUpdate:value":t[0]||(t[0]=g=>o.direction=g),class:"mb-20"},null,8,["value"]),W(u,{value:o.triangle,"onUpdate:value":t[1]||(t[1]=g=>o.triangle=g),class:"mb-20"},null,8,["value"]),W(c,{unit:o.unit,"onUpdate:unit":t[2]||(t[2]=g=>o.unit=g),size:o.size,"onUpdate:size":t[3]||(t[3]=g=>o.size=g),class:"mb-20"},null,8,["unit","size"]),W(f,{color:o.colorValue,"onUpdate:color":t[4]||(t[4]=g=>o.colorValue=g)},null,8,["color"])]),O("div",zr,[W(x)])])}const Pr=ke($r,[["render",Br],["__file","index.vue"]]),Dr={};function Mr(e,t){const r=Pr,o=co("ClientOnly");return Z(),X("div",null,[t[0]||(t[0]=O("h1",{id:"css三角形生成器",tabindex:"-1"},[O("a",{class:"header-anchor",href:"#css三角形生成器"},[O("span",null,"CSS三角形生成器")])],-1)),W(o,null,{default:Ue(()=>[W(r)]),_:1})])}const Nr=ke(Dr,[["render",Mr],["__file","css-triangle-generator.html.vue"]]),Or=JSON.parse('{"path":"/tools/css-triangle-generator.html","title":"CSS三角形生成器","lang":"zh-CN","frontmatter":{"toc":false,"pageInfo":false,"layout":"ToolLayout","description":"一个css三角形生成器，支持上下左右各方向选择，支持等边、等腰、不等边选择，支持自定义大小，支持自定义颜色选择，生成的代码支持一键复制，非常方便。","head":[["meta",{"property":"og:url","content":"https://liubing.me/tools/css-triangle-generator.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"CSS三角形生成器"}],["meta",{"property":"og:description","content":"一个css三角形生成器，支持上下左右各方向选择，支持等边、等腰、不等边选择，支持自定义大小，支持自定义颜色选择，生成的代码支持一键复制，非常方便。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-04T11:17:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-04T11:17:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS三角形生成器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-04T11:17:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[],"git":{"createdTime":1721659103000,"updatedTime":1725448668000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":3,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":0.27,"words":80},"filePathRelative":"tools/css-triangle-generator.md","localizedDate":"2024年7月22日","excerpt":"\\n\\n"}');export{Nr as comp,Or as data};
