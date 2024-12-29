import{j as b,n as C,l as _,e as T,q as Ye,ax as Ut,h as d,ay as ae,az as te,aA as ie,aB as he,aC as oe,aD as _e,aE as pe,p as R,z as F,a4 as we,a6 as xe,F as Vt,V as W,a2 as at,aF as Ce,aG as Ne,aH as Ge,aI as je,aJ as Dt,aK as Pt,k as re,u as Fe,aL as Ke,aM as it,aN as At,v as ce,x as Re,W as Ze,w as Qe,A as Ie,C as lt,aO as Tt,aP as Bt,aQ as It,aR as Mt,aS as Ft,aT as Lt,aU as Ht,aV as qt,G as me,aw as De,aW as Ot,m as rt,y as Et,aX as Nt,aY as Gt,aZ as jt,a_ as Kt,_ as be,o as O,c as E,b as V,am as Zt,ae as Te,d as N,ah as Ue,ai as ze,aj as $e,af as Me,aa as ke,ab as et,r as Xt}from"./app-iUePP8D9.js";import{_ as st,u as Jt}from"./Input-Bzepdc0y.js";import{r as Wt,b as Yt,a as Qt,_ as ut}from"./InputNumber-CY84vDwa.js";function dt(e,o,r){o/=100,r/=100;const t=o*Math.min(r,1-r)+r;return[e,t?(2-2*r/t)*100:0,t*100]}function Be(e,o,r){o/=100,r/=100;const t=r-r*o/2,n=Math.min(t,1-t);return[e,n?(r-t)/n*100:0,t*100]}function ne(e,o,r){o/=100,r/=100;let t=(n,a=(n+e/60)%6)=>r-r*o*Math.max(Math.min(a,4-a,1),0);return[t(5)*255,t(3)*255,t(1)*255]}function Xe(e,o,r){e/=255,o/=255,r/=255;let t=Math.max(e,o,r),n=t-Math.min(e,o,r),a=n&&(t==e?(o-r)/n:t==o?2+(r-e)/n:4+(e-o)/n);return[60*(a<0?a+6:a),t&&n/t*100,t*100]}function Je(e,o,r){e/=255,o/=255,r/=255;let t=Math.max(e,o,r),n=t-Math.min(e,o,r),a=1-Math.abs(t+t-n-1),i=n&&(t==e?(o-r)/n:t==o?2+(r-e)/n:4+(e-o)/n);return[60*(i<0?i+6:i),a?n/a*100:0,(t+t-n)*50]}function We(e,o,r){o/=100,r/=100;let t=o*Math.min(r,1-r),n=(a,i=(a+e/30)%12)=>r-t*Math.max(Math.min(i-3,9-i,1),-1);return[n(0)*255,n(8)*255,n(4)*255]}const eo=b("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[C(">",[b("input",[C("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),C("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),b("button",[C("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[_("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),C("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[_("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),C("*",[C("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[C(">",[b("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),b("base-selection",[b("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),b("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),_("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),C("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[C(">",[b("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),b("base-selection",[b("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),b("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),_("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),to={},oo=T({name:"InputGroup",props:to,setup(e){const{mergedClsPrefixRef:o}=Ye(e);return Ut("-input-group",eo,o),{mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return d("div",{class:`${e}-input-group`},this.$slots)}});function ro(e,o){switch(e[0]){case"hex":return o?"#000000FF":"#000000";case"rgb":return o?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return o?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return o?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function Ve(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function no(e){return e=Math.round(e),e>=360?359:e<0?0:e}function ao(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const io={rgb:{hex(e){return ae(te(e))},hsl(e){const[o,r,t,n]=te(e);return ie([...Je(o,r,t),n])},hsv(e){const[o,r,t,n]=te(e);return he([...Xe(o,r,t),n])}},hex:{rgb(e){return oe(te(e))},hsl(e){const[o,r,t,n]=te(e);return ie([...Je(o,r,t),n])},hsv(e){const[o,r,t,n]=te(e);return he([...Xe(o,r,t),n])}},hsl:{hex(e){const[o,r,t,n]=_e(e);return ae([...We(o,r,t),n])},rgb(e){const[o,r,t,n]=_e(e);return oe([...We(o,r,t),n])},hsv(e){const[o,r,t,n]=_e(e);return he([...dt(o,r,t),n])}},hsv:{hex(e){const[o,r,t,n]=pe(e);return ae([...ne(o,r,t),n])},rgb(e){const[o,r,t,n]=pe(e);return oe([...ne(o,r,t),n])},hsl(e){const[o,r,t,n]=pe(e);return ie([...Be(o,r,t),n])}}};function ct(e,o,r){return r=r||Ve(e),r?r===o?e:io[r][o](e):null}const Se="12px",lo=12,ue="6px",so=T({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const o=R(null);function r(a){!o.value||!e.rgba||(we("mousemove",document,t),we("mouseup",document,n),t(a))}function t(a){const{value:i}=o;if(!i)return;const{width:s,left:u}=i.getBoundingClientRect(),c=(a.clientX-u)/(s-lo);e.onUpdateAlpha(ao(c))}function n(){var a;xe("mousemove",document,t),xe("mouseup",document,n),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:o,railBackgroundImage:F(()=>{const{rgba:a}=e;return a?`linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, 0) 0%, rgba(${a[0]}, ${a[1]}, ${a[2]}, 1) 100%)`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:Se,borderRadius:ue},onMousedown:this.handleMouseDown},d("div",{style:{borderRadius:ue,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},d("div",{class:`${e}-color-picker-checkboard`}),d("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&d("div",{style:{position:"absolute",left:ue,right:ue,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${ue})`,borderRadius:ue,width:Se,height:Se}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:oe(this.rgba),borderRadius:ue,width:Se,height:Se}}))))}}),tt=Vt("n-color-picker");function uo(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function co(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function ho(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function po(e){const o=e.trim();return/^#[0-9a-fA-F]+$/.test(o)?[4,5,7,9].includes(o.length):!1}function bo(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const fo={paddingSmall:"0 4px"},nt=T({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const o=R(""),{themeRef:r}=W(tt,null);at(()=>{o.value=t()});function t(){const{value:i}=e;if(i===null)return"";const{label:s}=e;return s==="HEX"?i:s==="A"?`${Math.floor(i*100)}%`:String(Math.floor(i))}function n(i){o.value=i}function a(i){let s,u;switch(e.label){case"HEX":u=po(i),u&&e.onUpdateValue(i),o.value=t();break;case"H":s=co(i),s===!1?o.value=t():e.onUpdateValue(s);break;case"S":case"L":case"V":s=ho(i),s===!1?o.value=t():e.onUpdateValue(s);break;case"A":s=bo(i),s===!1?o.value=t():e.onUpdateValue(s);break;case"R":case"G":case"B":s=uo(i),s===!1?o.value=t():e.onUpdateValue(s);break}}return{mergedTheme:r,inputValue:o,handleInputChange:a,handleInputUpdateValue:n}},render(){const{mergedTheme:e}=this;return d(st,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:fo,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),go=T({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(o,r){const{showAlpha:t}=e;if(e.mode==="hex"){e.onUpdateValue((t?ae:Ce)(r));return}let n;switch(e.valueArr===null?n=[0,0,0,0]:n=Array.from(e.valueArr),e.mode){case"hsv":n[o]=r,e.onUpdateValue((t?he:je)(n));break;case"rgb":n[o]=r,e.onUpdateValue((t?oe:Ge)(n));break;case"hsl":n[o]=r,e.onUpdateValue((t?ie:Ne)(n));break}}}},render(){const{clsPrefix:e,modes:o}=this;return d("div",{class:`${e}-color-picker-input`},d("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:o.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),d(oo,null,{default:()=>{const{mode:r,valueArr:t,showAlpha:n}=this;if(r==="hex"){let a=null;try{a=t===null?null:(n?ae:Ce)(t)}catch{}return d(nt,{label:"HEX",showAlpha:n,value:a,onUpdateValue:i=>{this.handleUnitUpdateValue(0,i)}})}return(r+(n?"a":"")).split("").map((a,i)=>d(nt,{label:a.toUpperCase(),value:t===null?null:t[i],onUpdateValue:s=>{this.handleUnitUpdateValue(i,s)}}))}}))}});function vo(e,o){if(o==="hsv"){const[r,t,n,a]=pe(e);return oe([...ne(r,t,n),a])}return e}function mo(e){const o=document.createElement("canvas").getContext("2d");return o?(o.fillStyle=e,o.fillStyle):"#000000"}const _o=T({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const o=F(()=>e.swatches.map(a=>{const i=Ve(a);return{value:a,mode:i,legalValue:vo(a,i)}}));function r(a){const{mode:i}=e;let{value:s,mode:u}=a;return u||(u="hex",/^[a-zA-Z]+$/.test(s)?s=mo(s):(Dt("color-picker",`color ${s} in swatches is invalid.`),s="#000000")),u===i?s:ct(s,i,u)}function t(a){e.onUpdateColor(r(a))}function n(a,i){a.key==="Enter"&&t(i)}return{parsedSwatchesRef:o,handleSwatchSelect:t,handleSwatchKeyDown:n}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(o=>d("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(o)},onKeydown:r=>{this.handleSwatchKeyDown(r,o)}},d("div",{class:`${e}-color-picker-swatch__fill`,style:{background:o.legalValue}}))))}}),wo=T({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:o,renderLabelRef:r}=W(tt,null);return()=>{const{hsla:t,value:n,clsPrefix:a,onClick:i,disabled:s}=e,u=o.label||r.value;return d("div",{class:[`${a}-color-picker-trigger`,s&&`${a}-color-picker-trigger--disabled`],onClick:s?void 0:i},d("div",{class:`${a}-color-picker-trigger__fill`},d("div",{class:`${a}-color-picker-checkboard`}),d("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:t?ie(t):""}}),n&&t?d("div",{class:`${a}-color-picker-trigger__value`,style:{color:t[2]>50||t[3]<.5?"black":"white"}},u?u(n):n):null))}}}),xo=T({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const o=Ve(e);return!!(!e||o&&o!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function o(r){var t;const n=r.target.value;(t=e.onUpdateColor)===null||t===void 0||t.call(e,ct(n.toUpperCase(),e.mode,"hex")),r.stopPropagation()}return{handleChange:o}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-preview__preview`},d("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),d("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),ve="12px",ko=12,de="6px",yo=6,So="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Co=T({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const o=R(null);function r(a){o.value&&(we("mousemove",document,t),we("mouseup",document,n),t(a))}function t(a){const{value:i}=o;if(!i)return;const{width:s,left:u}=i.getBoundingClientRect(),c=no((a.clientX-u-yo)/(s-ko)*360);e.onUpdateHue(c)}function n(){var a;xe("mousemove",document,t),xe("mouseup",document,n),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:o,handleMouseDown:r}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,style:{height:ve,borderRadius:de}},d("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:So,height:ve,borderRadius:de,position:"relative"},onMousedown:this.handleMouseDown},d("div",{style:{position:"absolute",left:de,right:de,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${de})`,borderRadius:de,width:ve,height:ve}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:de,width:ve,height:ve}})))))}}),Pe="12px",Ae="6px",Ro=T({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const o=R(null);function r(a){o.value&&(we("mousemove",document,t),we("mouseup",document,n),t(a))}function t(a){const{value:i}=o;if(!i)return;const{width:s,height:u,left:c,bottom:w}=i.getBoundingClientRect(),p=(w-a.clientY)/u,L=(a.clientX-c)/s,j=100*(L>1?1:L<0?0:L),z=100*(p>1?1:p<0?0:p);e.onUpdateSV(j,z)}function n(){var a;xe("mousemove",document,t),xe("mouseup",document,n),(a=e.onComplete)===null||a===void 0||a.call(e)}return{palleteRef:o,handleColor:F(()=>{const{rgba:a}=e;return a?`rgb(${a[0]}, ${a[1]}, ${a[2]})`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},d("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),d("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&d("div",{class:`${e}-color-picker-handle`,style:{width:Pe,height:Pe,borderRadius:Ae,left:`calc(${this.displayedSv[0]}% - ${Ae})`,bottom:`calc(${this.displayedSv[1]}% - ${Ae})`}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Ae,width:Pe,height:Pe}})))}}),zo=C([b("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),b("color-picker-panel",`
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
 `,[Pt(),b("input",`
 text-align: center;
 `)]),b("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[C("&::after",`
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
 `)]),b("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[_("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),C("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),b("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[_("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),b("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[_("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[re("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),b("color-picker-preview",`
 display: flex;
 `,[_("sliders",`
 flex: 1 0 auto;
 `),_("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),_("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),_("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),b("color-picker-input",`
 display: flex;
 align-items: center;
 `,[b("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),_("mode",`
 width: 72px;
 text-align: center;
 `)]),b("color-picker-control",`
 padding: 12px;
 `),b("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[b("button","margin-left: 8px;")]),b("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[_("value",`
 white-space: nowrap;
 position: relative;
 `),_("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),re("disabled","cursor: not-allowed"),b("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[C("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),b("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[b("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[_("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),C("&:focus",`
 outline: none;
 `,[_("fill",[C("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),$o=Object.assign(Object.assign({},Fe.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Ke.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Uo=T({name:"ColorPicker",props:$o,setup(e,{slots:o}){const r=R(null);let t=null;const n=it(e),{mergedSizeRef:a,mergedDisabledRef:i}=n,{localeRef:s}=Jt("global"),{mergedClsPrefixRef:u,namespaceRef:c,inlineThemeDisabled:w}=Ye(e),p=Fe("ColorPicker","-color-picker",zo,At,e,u);ce(tt,{themeRef:p,renderLabelRef:Re(e,"renderLabel"),colorPickerSlots:o});const L=R(e.defaultShow),j=Ze(Re(e,"show"),L);function z(l){const{onUpdateShow:f,"onUpdate:show":k}=e;f&&me(f,l),k&&me(k,l),L.value=l}const{defaultValue:X}=e,B=R(X===void 0?ro(e.modes,e.showAlpha):X),$=Ze(Re(e,"value"),B),K=R([$.value]),x=R(0),Z=F(()=>Ve($.value)),{modes:H}=e,v=R(Ve($.value)||H[0]||"rgb");function g(){const{modes:l}=e,{value:f}=v,k=l.findIndex(S=>S===f);~k?v.value=l[(k+1)%l.length]:v.value="rgb"}let y,P,J,Y,I,h,A,q;const le=F(()=>{const{value:l}=$;if(!l)return null;switch(Z.value){case"hsv":return pe(l);case"hsl":return[y,P,J,q]=_e(l),[...dt(y,P,J),q];case"rgb":case"hex":return[I,h,A,q]=te(l),[...Xe(I,h,A),q]}}),Q=F(()=>{const{value:l}=$;if(!l)return null;switch(Z.value){case"rgb":case"hex":return te(l);case"hsv":return[y,P,Y,q]=pe(l),[...ne(y,P,Y),q];case"hsl":return[y,P,J,q]=_e(l),[...We(y,P,J),q]}}),ye=F(()=>{const{value:l}=$;if(!l)return null;switch(Z.value){case"hsl":return _e(l);case"hsv":return[y,P,Y,q]=pe(l),[...Be(y,P,Y),q];case"rgb":case"hex":return[I,h,A,q]=te(l),[...Je(I,h,A),q]}}),He=F(()=>{switch(v.value){case"rgb":case"hex":return Q.value;case"hsv":return le.value;case"hsl":return ye.value}}),fe=R(0),qe=R(1),Oe=R([0,0]);function gt(l,f){const{value:k}=le,S=fe.value,U=k?k[3]:1;Oe.value=[l,f];const{showAlpha:m}=e;switch(v.value){case"hsv":D((m?he:je)([S,l,f,U]),"cursor");break;case"hsl":D((m?ie:Ne)([...Be(S,l,f),U]),"cursor");break;case"rgb":D((m?oe:Ge)([...ne(S,l,f),U]),"cursor");break;case"hex":D((m?ae:Ce)([...ne(S,l,f),U]),"cursor");break}}function vt(l){fe.value=l;const{value:f}=le;if(!f)return;const[,k,S,U]=f,{showAlpha:m}=e;switch(v.value){case"hsv":D((m?he:je)([l,k,S,U]),"cursor");break;case"rgb":D((m?oe:Ge)([...ne(l,k,S),U]),"cursor");break;case"hex":D((m?ae:Ce)([...ne(l,k,S),U]),"cursor");break;case"hsl":D((m?ie:Ne)([...Be(l,k,S),U]),"cursor");break}}function mt(l){switch(v.value){case"hsv":[y,P,Y]=le.value,D(he([y,P,Y,l]),"cursor");break;case"rgb":[I,h,A]=Q.value,D(oe([I,h,A,l]),"cursor");break;case"hex":[I,h,A]=Q.value,D(ae([I,h,A,l]),"cursor");break;case"hsl":[y,P,J]=ye.value,D(ie([y,P,J,l]),"cursor");break}qe.value=l}function D(l,f){f==="cursor"?t=l:t=null;const{nTriggerFormChange:k,nTriggerFormInput:S}=n,{onUpdateValue:U,"onUpdate:value":m}=e;U&&me(U,l),m&&me(m,l),k(),S(),B.value=l}function _t(l){D(l,"input"),Ot(ge)}function ge(l=!0){const{value:f}=$;if(f){const{nTriggerFormChange:k,nTriggerFormInput:S}=n,{onComplete:U}=e;U&&U(f);const{value:m}=K,{value:G}=x;l&&(m.splice(G+1,m.length,f),x.value=G+1),k(),S()}}function wt(){const{value:l}=x;l-1<0||(D(K.value[l-1],"input"),ge(!1),x.value=l-1)}function xt(){const{value:l}=x;l<0||l+1>=K.value.length||(D(K.value[l+1],"input"),ge(!1),x.value=l+1)}function kt(){D(null,"input");const{onClear:l}=e;l&&l(),z(!1)}function yt(){const{value:l}=$,{onConfirm:f}=e;f&&f(l),z(!1)}const St=F(()=>x.value>=1),Ct=F(()=>{const{value:l}=K;return l.length>1&&x.value<l.length-1});Qe(j,l=>{l||(K.value=[$.value],x.value=0)}),at(()=>{if(!(t&&t===$.value)){const{value:l}=le;l&&(fe.value=l[0],qe.value=l[3],Oe.value=[l[1],l[2]])}t=null});const Ee=F(()=>{const{value:l}=a,{common:{cubicBezierEaseInOut:f},self:{textColor:k,color:S,panelFontSize:U,boxShadow:m,border:G,borderRadius:M,dividerColor:se,[Ie("height",l)]:zt,[Ie("fontSize",l)]:$t}}=p.value;return{"--n-bezier":f,"--n-text-color":k,"--n-color":S,"--n-panel-font-size":U,"--n-font-size":$t,"--n-box-shadow":m,"--n-border":G,"--n-border-radius":M,"--n-height":zt,"--n-divider-color":se}}),ee=w?lt("color-picker",F(()=>a.value[0]),Ee,e):void 0;function Rt(){var l;const{value:f}=Q,{value:k}=fe,{internalActions:S,modes:U,actions:m}=e,{value:G}=p,{value:M}=u;return d("div",{class:[`${M}-color-picker-panel`,ee==null?void 0:ee.themeClass.value],onDragstart:se=>{se.preventDefault()},style:w?void 0:Ee.value},d("div",{class:`${M}-color-picker-control`},d(Ro,{clsPrefix:M,rgba:f,displayedHue:k,displayedSv:Oe.value,onUpdateSV:gt,onComplete:ge}),d("div",{class:`${M}-color-picker-preview`},d("div",{class:`${M}-color-picker-preview__sliders`},d(Co,{clsPrefix:M,hue:k,onUpdateHue:vt,onComplete:ge}),e.showAlpha?d(so,{clsPrefix:M,rgba:f,alpha:qe.value,onUpdateAlpha:mt,onComplete:ge}):null),e.showPreview?d(xo,{clsPrefix:M,mode:v.value,color:Q.value&&Ce(Q.value),onUpdateColor:se=>{D(se,"input")}}):null),d(go,{clsPrefix:M,showAlpha:e.showAlpha,mode:v.value,modes:U,onUpdateMode:g,value:$.value,valueArr:He.value,onUpdateValue:_t}),((l=e.swatches)===null||l===void 0?void 0:l.length)&&d(_o,{clsPrefix:M,mode:v.value,swatches:e.swatches,onUpdateColor:se=>{D(se,"input")}})),m!=null&&m.length?d("div",{class:`${M}-color-picker-action`},m.includes("confirm")&&d(De,{size:"small",onClick:yt,theme:G.peers.Button,themeOverrides:G.peerOverrides.Button},{default:()=>s.value.confirm}),m.includes("clear")&&d(De,{size:"small",onClick:kt,disabled:!$.value,theme:G.peers.Button,themeOverrides:G.peerOverrides.Button},{default:()=>s.value.clear})):null,o.action?d("div",{class:`${M}-color-picker-action`},{default:o.action}):S?d("div",{class:`${M}-color-picker-action`},S.includes("undo")&&d(De,{size:"small",onClick:wt,disabled:!St.value,theme:G.peers.Button,themeOverrides:G.peerOverrides.Button},{default:()=>s.value.undo}),S.includes("redo")&&d(De,{size:"small",onClick:xt,disabled:!Ct.value,theme:G.peers.Button,themeOverrides:G.peerOverrides.Button},{default:()=>s.value.redo})):null)}return{mergedClsPrefix:u,namespace:c,selfRef:r,hsla:ye,rgba:Q,mergedShow:j,mergedDisabled:i,isMounted:Tt(),adjustedTo:Ke(e),mergedValue:$,handleTriggerClick(){z(!0)},handleClickOutside(l){var f;!((f=r.value)===null||f===void 0)&&f.contains(Bt(l))||z(!1)},renderPanel:Rt,cssVars:w?void 0:Ee,themeClass:ee==null?void 0:ee.themeClass,onRender:ee==null?void 0:ee.onRender}},render(){const{$slots:e,mergedClsPrefix:o,onRender:r}=this;return r==null||r(),d("div",{class:[this.themeClass,`${o}-color-picker`],ref:"selfRef",style:this.cssVars},d(It,null,{default:()=>[d(Mt,null,{default:()=>d(wo,{clsPrefix:o,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),d(Ft,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Ke.tdkey,to:this.adjustedTo},{default:()=>d(Lt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Ht(this.renderPanel(),[[qt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Vo=b("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[_("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[re("checked",{backgroundColor:"var(--n-button-border-color-active)"}),re("disabled",{opacity:"var(--n-opacity-disabled)"})]),re("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[b("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),_("splitor",{height:"var(--n-height)"})]),b("radio-button",`
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
 `,[b("radio-input",`
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
 `),_("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),C("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[_("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),C("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[_("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),rt("disabled",`
 cursor: pointer;
 `,[C("&:hover",[_("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),rt("checked",{color:"var(--n-button-text-color-hover)"})]),re("focus",[C("&:not(:active)",[_("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),re("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),re("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Do(e,o,r){var t;const n=[];let a=!1;for(let i=0;i<e.length;++i){const s=e[i],u=(t=s.type)===null||t===void 0?void 0:t.name;u==="RadioButton"&&(a=!0);const c=s.props;if(u!=="RadioButton"){n.push(s);continue}if(i===0)n.push(s);else{const w=n[n.length-1].props,p=o===w.value,L=w.disabled,j=o===c.value,z=c.disabled,X=(p?2:0)+(L?0:1),B=(j?2:0)+(z?0:1),$={[`${r}-radio-group__splitor--disabled`]:L,[`${r}-radio-group__splitor--checked`]:p},K={[`${r}-radio-group__splitor--disabled`]:z,[`${r}-radio-group__splitor--checked`]:j},x=X<B?K:$;n.push(d("div",{class:[`${r}-radio-group__splitor`,x]}),s)}}return{children:n,isButtonGroup:a}}const Po=Object.assign(Object.assign({},Fe.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ht=T({name:"RadioGroup",props:Po,setup(e){const o=R(null),{mergedSizeRef:r,mergedDisabledRef:t,nTriggerFormChange:n,nTriggerFormInput:a,nTriggerFormBlur:i,nTriggerFormFocus:s}=it(e),{mergedClsPrefixRef:u,inlineThemeDisabled:c,mergedRtlRef:w}=Ye(e),p=Fe("Radio","-radio-group",Vo,Wt,e,u),L=R(e.defaultValue),j=Re(e,"value"),z=Ze(j,L);function X(H){const{onUpdateValue:v,"onUpdate:value":g}=e;v&&me(v,H),g&&me(g,H),L.value=H,n(),a()}function B(H){const{value:v}=o;v&&(v.contains(H.relatedTarget)||s())}function $(H){const{value:v}=o;v&&(v.contains(H.relatedTarget)||i())}ce(Yt,{mergedClsPrefixRef:u,nameRef:Re(e,"name"),valueRef:z,disabledRef:t,mergedSizeRef:r,doUpdateValue:X});const K=Et("Radio",w,u),x=F(()=>{const{value:H}=r,{common:{cubicBezierEaseInOut:v},self:{buttonBorderColor:g,buttonBorderColorActive:y,buttonBorderRadius:P,buttonBoxShadow:J,buttonBoxShadowFocus:Y,buttonBoxShadowHover:I,buttonColor:h,buttonColorActive:A,buttonTextColor:q,buttonTextColorActive:le,buttonTextColorHover:Q,opacityDisabled:ye,[Ie("buttonHeight",H)]:He,[Ie("fontSize",H)]:fe}}=p.value;return{"--n-font-size":fe,"--n-bezier":v,"--n-button-border-color":g,"--n-button-border-color-active":y,"--n-button-border-radius":P,"--n-button-box-shadow":J,"--n-button-box-shadow-focus":Y,"--n-button-box-shadow-hover":I,"--n-button-color":h,"--n-button-color-active":A,"--n-button-text-color":q,"--n-button-text-color-hover":Q,"--n-button-text-color-active":le,"--n-height":He,"--n-opacity-disabled":ye}}),Z=c?lt("radio-group",F(()=>r.value[0]),x,e):void 0;return{selfElRef:o,rtlEnabled:K,mergedClsPrefix:u,mergedValue:z,handleFocusout:$,handleFocusin:B,cssVars:c?void 0:x,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:r,handleFocusin:t,handleFocusout:n}=this,{children:a,isButtonGroup:i}=Do(Nt(Gt(this)),o,r);return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{onFocusin:t,onFocusout:n,ref:"selfElRef",class:[`${r}-radio-group`,this.rtlEnabled&&`${r}-radio-group--rtl`,this.themeClass,i&&`${r}-radio-group--button-group`],style:this.cssVars},a)}}),Le=Symbol(),ot=Symbol(),pt=Symbol(),bt=Symbol(),ft=Symbol(),Ao=T({__name:"GeneratorPreview",setup(e,{expose:o}){o();const{isDarkmode:r}=jt(),t=W(Le),n=W(ot),a=W(bt),i=W(pt),s=W(ft),u={top:"bottom",right:"left",bottom:"top",left:"right",topRight:"right",bottomRight:"bottom",bottomLeft:"left",topLeft:"top"},c={top:{top:!1,right:"widthRight",bottom:"height",left:"widthLeft"},right:{top:"heightTop",right:!1,bottom:"heightBottom",left:"width"},bottom:{top:"height",right:"widthRight",bottom:!1,left:"widthLeft"},left:{top:"heightTop",right:"width",bottom:"heightBottom",left:!1},topRight:{top:!1,right:"width",bottom:"height",left:!1},bottomRight:{top:!1,right:!1,bottom:"height",left:"width"},bottomLeft:{top:"height",right:!1,bottom:!1,left:"width"},topLeft:{top:"height",right:"width",bottom:!1,left:!1}},w=F(()=>{const z={width:0,height:0,"border-style":"solid"},X=s.value,{width:B,widthLeft:$,widthRight:K,height:x,heightTop:Z,heightBottom:H}=a.value,v={top:"transparent",right:"transparent",bottom:"transparent",left:"transparent"},g={top:0,right:0,bottom:0,left:0},y=c[t.value];v[u[t.value]]=X;for(const I in y){const h=I;if(y[h]===!1)g[h]="0";else{let A="";switch(n.value){case"equilateral":if(t.value==="top"||t.value==="bottom")switch(A=(Math.sqrt(3)/2*B).toFixed(1),y[h]){case"width":g[h]=A+i.value;break;case"height":g[h]=A+i.value;break;case"widthLeft":g[h]=B/2+i.value;break;case"widthRight":g[h]=B/2+i.value;break}else if(t.value==="left"||t.value==="right")switch(A=(Math.sqrt(3)/2*x).toFixed(1),y[h]){case"width":g[h]=A+i.value;break;case"height":g[h]=A+i.value;break;case"heightTop":g[h]=x/2+i.value;break;case"heightBottom":g[h]=x/2+i.value;break}break;case"isosceles":switch(y[h]){case"width":g[h]=B+i.value;break;case"height":g[h]=x+i.value;break;case"widthLeft":g[h]=B/2+i.value;break;case"widthRight":g[h]=B/2+i.value;break;case"heightTop":g[h]=x/2+i.value;break;case"heightBottom":g[h]=x/2+i.value;break}break;case"scalene":switch(y[h]){case"width":g[h]=`${B}px`;break;case"height":g[h]=`${x}px`;break;case"widthLeft":g[h]=`${$}px`;break;case"widthRight":g[h]=`${K}px`;break;case"heightTop":g[h]=`${Z}px`;break;case"heightBottom":g[h]=`${H}px`;break}break}}}const P=p(v),J=p(g);return z["border-color"]=P,z["border-width"]=J,{outPutCss:`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${J};
    border-color: ${P};
  `.split(`
`).map(I=>I.trim()).filter(I=>I.length>0).join(`
`),outPutStyle:z}});function p(z){const X=[];for(const B in z)X.push(z[B]);return X.join(" ")}function L(){Kt(w.value.outPutCss)}const j={isDarkmode:r,direction:t,triangle:n,size:a,unit:i,colorValue:s,colorDirection:u,lengthDirection:c,getStyleInfo:w,toArrayString:p,handleCopy:L};return Object.defineProperty(j,"__isScriptSetup",{enumerable:!1,value:!0}),j}}),To={class:"generator-preview"};function Bo(e,o,r,t,n,a){const i=st;return O(),E("div",To,[V("div",{class:Te(["triangle-output h-250 flex items-center overflow-auto bg-white",{"opacity-80":t.isDarkmode}])},[V("div",{class:"mx-auto transition-all",style:Zt(t.getStyleInfo.outPutStyle)},null,4)],2),o[0]||(o[0]=V("div",{class:"title mt-20 text-24 font-600"}," CSS ",-1)),N(i,{value:t.getStyleInfo.outPutCss,autosize:"",readonly:"",type:"textarea",onClick:t.handleCopy},null,8,["value"])])}const Io=be(Ao,[["render",Bo],["__scopeId","data-v-f40e7f7c"],["__file","GeneratorPreview.vue"]]),Mo=T({__name:"GeneratorColor",props:{color:{required:!0},colorModifiers:{}},emits:["update:color"],setup(e,{expose:o}){o();const t={modelColor:Ue(e,"color")};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),Fo={class:"generator-color"};function Lo(e,o,r,t,n,a){const i=Uo;return O(),E("div",Fo,[o[1]||(o[1]=V("div",{class:"title text-24 font-600"}," 颜色 ",-1)),N(i,{value:t.modelColor,"onUpdate:value":o[0]||(o[0]=s=>t.modelColor=s),"show-preview":!0,"show-alpha":!1},null,8,["value"])])}const Ho=be(Mo,[["render",Lo],["__file","GeneratorColor.vue"]]),qo=T({__name:"GeneratorSize",props:{size:{required:!0},sizeModifiers:{},unit:{required:!0},unitModifiers:{}},emits:["update:size","update:unit"],setup(e,{expose:o}){o();const r=Ue(e,"size"),t=Ue(e,"unit"),n=W(Le),a=W(ot),i=[{label:"宽度",name:"width"},{label:"左",name:"widthLeft"},{label:"右",name:"widthRight"},{label:"高度",name:"height"},{label:"上",name:"heightTop"},{label:"下",name:"heightBottom"}];Qe(n,()=>{u()});function s(w){let p={};switch(a.value){case"equilateral":switch(n.value){case"top":case"bottom":p={width:!1,height:!0,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break;case"left":case"right":p={width:!0,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break;default:p={width:!1,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break}break;case"isosceles":p={width:!1,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break;case"scalene":switch(n.value){case"top":case"bottom":p={width:!0,height:!1,widthLeft:!1,widthRight:!1,heightTop:!0,heightBottom:!0};break;case"left":case"right":p={width:!1,height:!0,widthLeft:!0,widthRight:!0,heightTop:!1,heightBottom:!1};break;default:p={width:!1,height:!1,widthLeft:!0,widthRight:!0,heightTop:!0,heightBottom:!0};break}break}return p[w]}function u(w){["top","right","bottom","left"].includes(n.value)?(s("width")?r.value.width=r.value.widthLeft*1+r.value.widthRight*1:(r.value.widthLeft=r.value.width*1/2,r.value.widthRight=r.value.width*1/2),s("height")?r.value.height=r.value.heightTop*1+r.value.heightBottom*1:(r.value.heightTop=r.value.height*1/2,r.value.heightBottom=r.value.height*1/2)):a.value==="isosceles"&&(w==="width"?r.value.height=r.value.width:w==="height"?r.value.width=r.value.height:r.value.height!==r.value.width&&(r.value.height=r.value.width),r.value.widthLeft=r.value.width*1/2,r.value.widthRight=r.value.width*1/2,r.value.heightTop=r.value.height*1/2,r.value.heightBottom=r.value.height*1/2)}const c={modelSize:r,modelUnit:t,direction:n,triangle:a,sizeList:i,getDisabled:s,changeSize:u};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),Oo={class:"generator-size"},Eo={class:"w-30 pr-10 text-right text-14"};function No(e,o,r,t,n,a){const i=Qt;return O(),E("div",Oo,[o[0]||(o[0]=V("div",{class:"title text-24 font-600"}," 大小 ",-1)),(O(),E(ze,null,$e(t.sizeList,s=>V("div",{key:s.name,class:"mb-5 flex items-center"},[V("div",Eo,Me(s.label),1),N(i,{value:t.modelSize[s.name],"onUpdate:value":[u=>t.modelSize[s.name]=u,u=>t.changeSize(s.name)],class:"flex-1",disabled:t.getDisabled(s.name)},{suffix:ke(()=>[et(Me(t.modelUnit),1)]),_:2},1032,["value","onUpdate:value","disabled"])])),64))])}const Go=be(qo,[["render",No],["__file","GeneratorSize.vue"]]),jo=T({__name:"GeneratorOption",props:{value:{required:!0},valueModifiers:{}},emits:["update:value"],setup(e,{expose:o}){o();const r=Ue(e,"value"),t=W(Le),n=[{label:"等边",value:"equilateral"},{label:"等腰",value:"isosceles"},{label:"不等边",value:"scalene"}],a=["topRight","bottomRight","bottomLeft","topLeft"];Qe(t,()=>{a.includes(t.value)&&r.value==="equilateral"&&(r.value="isosceles")});function i(u){return!!(a.includes(t.value)&&u==="equilateral")}const s={modelValue:r,direction:t,options:n,directions:a,getDisabled:i};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),Ko={class:"generator-option"};function Zo(e,o,r,t,n,a){const i=ut,s=ht;return O(),E("div",Ko,[o[1]||(o[1]=V("div",{class:"title text-24 font-600"}," 选项 ",-1)),N(s,{value:t.modelValue,"onUpdate:value":o[0]||(o[0]=u=>t.modelValue=u)},{default:ke(()=>[(O(),E(ze,null,$e(t.options,u=>N(i,{key:u.value,value:u.value,disabled:t.getDisabled(u.value)},{default:ke(()=>[et(Me(u.label),1)]),_:2},1032,["value","disabled"])),64))]),_:1},8,["value"])])}const Xo=be(jo,[["render",Zo],["__file","GeneratorOption.vue"]]),Jo=T({__name:"GeneratorDirection",props:{value:{},valueModifiers:{}},emits:["update:value"],setup(e,{expose:o}){o();const r=Ue(e,"value"),t=[{label:"上",value:"top"},{label:"右",value:"right"},{label:"下",value:"bottom"},{label:"左",value:"left"},{label:"右上",value:"topRight"},{label:"右下",value:"bottomRight"},{label:"左下",value:"bottomLeft"},{label:"左上",value:"topLeft"}],n=[...t].splice(0,4),a=[...t].splice(4),i={modelValue:r,directions:t,directions1:n,directions2:a};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),Wo={class:"generator-direction"},Yo={class:"relative flex-center py-60"},Qo={class:"triangle-direction relative size-60"},er={class:"corners size-60"},tr=["onClick"],or={class:"corners absolute top-0 ml-3 mt-4 size-54 -rotate-45"},rr=["onClick"];function nr(e,o,r,t,n,a){const i=ut,s=ht;return O(),E("div",Wo,[o[2]||(o[2]=V("div",{class:"title text-24 font-600"}," 方向 ",-1)),V("div",Yo,[N(s,{value:t.modelValue,"onUpdate:value":o[0]||(o[0]=u=>t.modelValue=u),class:"ml-4"},{default:ke(()=>[V("div",Qo,[V("div",er,[(O(!0),E(ze,null,$e(t.directions2,(u,c)=>(O(),E("div",{key:u.value,class:Te(["triangle absolute size-30 cursor-pointer bg-blue hover:bg-green",{"top-0 right-0":c===0,"bottom-0 right-0":c===1,"bottom-0 left-0":c===2,"top-0 left-0":c===3,"bg-green":t.modelValue===u.value}]),onClick:w=>t.modelValue=u.value},null,10,tr))),128))]),V("div",or,[(O(!0),E(ze,null,$e(t.directions1,(u,c)=>(O(),E("div",{key:u.value,class:Te(["triangle absolute size-27 cursor-pointer bg-fuchsia hover:bg-green",{"top-0 right-0":c===0,"bottom-0 right-0":c===1,"bottom-0 left-0":c===2,"top-0 left-0":c===3,"bg-green":t.modelValue===u.value}]),onClick:w=>t.modelValue=u.value},null,10,rr))),128))]),o[1]||(o[1]=V("div",{class:"size-38 bg-white absolute-center"},null,-1)),(O(),E(ze,null,$e(t.directions,(u,c)=>N(i,{id:u.value+c,key:u.value,class:Te(["absolute! mr-0!",{"flex-row-reverse":c===3||c===6||c===7,"-top-38 left-1/2 -translate-x-1/2":c===0,"top-16 -right-60":c===1,"-bottom-38 left-1/2 -translate-x-1/2":c===2,"top-16 -left-60":c===3,"-top-16 -right-60":c===4,"-bottom-16 -right-60":c===5,"-bottom-16 -left-60":c===6,"-top-16 -left-60":c===7}]),value:u.value},{default:ke(()=>[et(Me(u.label),1)]),_:2},1032,["id","value","class"])),64))])]),_:1},8,["value"])])])}const ar=be(Jo,[["render",nr],["__file","GeneratorDirection.vue"]]),ir=T({__name:"index",setup(e,{expose:o}){o();const r=R("top"),t=R("isosceles"),n=R("px"),a=R({width:200,widthLeft:100,widthRight:100,height:100,heightTop:50,heightBottom:50}),i=R("#60a5fa");ce(Le,r),ce(ot,t),ce(ft,i),ce(bt,a),ce(pt,n);const s={direction:r,triangle:t,unit:n,size:a,colorValue:i};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),lr={class:"css-triangle-generator flex flex-col gap-20 md:flex-row"},sr={class:"w-full md:w-50%"},ur={class:"w-full md:w-50%"};function dr(e,o,r,t,n,a){const i=ar,s=Xo,u=Go,c=Ho,w=Io;return O(),E("div",lr,[V("div",sr,[N(i,{value:t.direction,"onUpdate:value":o[0]||(o[0]=p=>t.direction=p),class:"mb-20"},null,8,["value"]),N(s,{value:t.triangle,"onUpdate:value":o[1]||(o[1]=p=>t.triangle=p),class:"mb-20"},null,8,["value"]),N(u,{unit:t.unit,"onUpdate:unit":o[2]||(o[2]=p=>t.unit=p),size:t.size,"onUpdate:size":o[3]||(o[3]=p=>t.size=p),class:"mb-20"},null,8,["unit","size"]),N(c,{color:t.colorValue,"onUpdate:color":o[4]||(o[4]=p=>t.colorValue=p)},null,8,["color"])]),V("div",ur,[N(w)])])}const cr=be(ir,[["render",dr],["__file","index.vue"]]),hr={};function pr(e,o){const r=cr,t=Xt("ClientOnly");return O(),E("div",null,[o[0]||(o[0]=V("h1",{id:"css三角形生成器",tabindex:"-1"},[V("a",{class:"header-anchor",href:"#css三角形生成器"},[V("span",null,"CSS三角形生成器")])],-1)),N(t,null,{default:ke(()=>[N(r)]),_:1})])}const vr=be(hr,[["render",pr],["__file","css-triangle-generator.html.vue"]]),mr=JSON.parse('{"path":"/tools/css-triangle-generator.html","title":"CSS三角形生成器","lang":"zh-CN","frontmatter":{"toc":false,"pageInfo":false,"layout":"ToolLayout","description":"一个css三角形生成器，支持上下左右各方向选择，支持等边、等腰、不等边选择，支持自定义大小，支持自定义颜色选择，生成的代码支持一键复制，非常方便。","head":[["meta",{"property":"og:url","content":"https://liubing.me/tools/css-triangle-generator.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"CSS三角形生成器"}],["meta",{"property":"og:description","content":"一个css三角形生成器，支持上下左右各方向选择，支持等边、等腰、不等边选择，支持自定义大小，支持自定义颜色选择，生成的代码支持一键复制，非常方便。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-04T11:17:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-04T11:17:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS三角形生成器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-04T11:17:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[],"git":{"createdTime":1721659103000,"updatedTime":1725448668000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":3,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":0.27,"words":80},"filePathRelative":"tools/css-triangle-generator.md","localizedDate":"2024年7月22日","excerpt":"\\n\\n"}');export{vr as comp,mr as data};
