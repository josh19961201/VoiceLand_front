import{z as Ne,y as W,q as Me,B as Se,V as le,J as B,X as Te,Y as De,K as Fe,s as Pe,r as s,a0 as _e}from"./plugin-vueexport-helper-1542df20.js";import{b as g,a as Ce,h as Y,j as q,d as J,c as V}from"./Icon-02e655d0.js";import{i as Oe}from"./light-0eb798f5.js";import{u as Ae,_ as Ue,Y as ke}from"./router-0a69d1ba.js";import{u as $e,X as Q}from"./Button-1c319fcc.js";import{u as Ee,o as Z}from"./vue-router-28b6ae4c.js";import{R as He}from"./Remove-0a232454.js";function Le(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function je(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function H(n){return n==null?!0:!Number.isNaN(n)}function ee(n,i){return n==null?"":i===void 0?String(n):n.toFixed(i)}function L(n){if(n===null)return null;if(typeof n=="number")return n;{const i=Number(n);return Number.isNaN(i)?null:i}}const ze=Ne([W("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),W("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),ne=800,te=100,Ge=Object.assign(Object.assign({},le.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),Ze=Me({name:"InputNumber",props:Ge,setup(n){const{mergedBorderedRef:i,mergedClsPrefixRef:p,mergedRtlRef:D}=Se(n),u=le("InputNumber","-input-number",ze,Oe,n,p),{localeRef:v}=Ae("InputNumber"),N=$e(n),{mergedSizeRef:re,mergedDisabledRef:ie,mergedStatusRef:ue}=N,c=B(null),j=B(null),z=B(null),F=B(n.defaultValue),ae=Te(n,"value"),d=Ee(ae,F),h=B(""),P=e=>{const t=String(e).split(".")[1];return t?t.length:0},oe=e=>{const t=[n.min,n.max,n.step,e].map(l=>l===void 0?0:P(l));return Math.max(...t)},se=g(()=>{const{placeholder:e}=n;return e!==void 0?e:v.value.placeholder}),M=g(()=>{const e=L(n.step);return e!==null?e===0?1:Math.abs(e):1}),G=g(()=>{const e=L(n.min);return e!==null?e:null}),K=g(()=>{const e=L(n.max);return e!==null?e:null}),I=e=>{const{value:t}=d;if(e===t){b();return}const{"onUpdate:value":l,onUpdateValue:r,onChange:o}=n,{nTriggerFormInput:f,nTriggerFormChange:x}=N;o&&V(o,e),r&&V(r,e),l&&V(l,e),F.value=e,f(),x()},a=({offset:e,doUpdateIfValid:t,fixPrecision:l,isInputing:r})=>{const{value:o}=h;if(r&&je(o))return!1;const f=(n.parse||Le)(o);if(f===null)return t&&I(null),null;if(H(f)){const x=P(f),{precision:R}=n;if(R!==void 0&&R<x&&!l)return!1;let m=parseFloat((f+e).toFixed(R??oe(f)));if(H(m)){const{value:$}=K,{value:E}=G;if($!==null&&m>$){if(!t||r)return!1;m=$}if(E!==null&&m<E){if(!t||r)return!1;m=E}return n.validator&&!n.validator(m)?!1:(t&&I(m),m)}}return!1},b=()=>{const{value:e}=d;if(H(e)){const{format:t,precision:l}=n;t?h.value=t(e):e===null||l===void 0||P(e)>l?h.value=ee(e,void 0):h.value=ee(e,l)}else h.value=String(e)};b();const de=g(()=>a({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),_=g(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=M;return a({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),C=g(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=M;return a({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function fe(e){const{onFocus:t}=n,{nTriggerFormFocus:l}=N;t&&V(t,e),l()}function ce(e){var t,l;if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;const r=a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(r!==!1){const x=(l=c.value)===null||l===void 0?void 0:l.inputElRef;x&&(x.value=String(r||"")),d.value===r&&b()}else b();const{onBlur:o}=n,{nTriggerFormBlur:f}=N;o&&V(o,e),f(),_e(()=>{b()})}function me(e){const{onClear:t}=n;t&&V(t,e)}function O(){const{value:e}=C;if(!e){k();return}const{value:t}=d;if(t===null)n.validator||I(X());else{const{value:l}=M;a({offset:l,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function A(){const{value:e}=_;if(!e){U();return}const{value:t}=d;if(t===null)n.validator||I(X());else{const{value:l}=M;a({offset:-l,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const ve=fe,he=ce;function X(){if(n.validator)return null;const{value:e}=G,{value:t}=K;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function ge(e){me(e),I(null)}function pe(e){var t,l,r;!((t=z.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((l=j.value)===null||l===void 0)&&l.$el.contains(e.target)&&e.preventDefault(),(r=c.value)===null||r===void 0||r.activate()}let y=null,w=null,S=null;function U(){S&&(window.clearTimeout(S),S=null),y&&(window.clearInterval(y),y=null)}function k(){T&&(window.clearTimeout(T),T=null),w&&(window.clearInterval(w),w=null)}function be(){U(),S=window.setTimeout(()=>{y=window.setInterval(()=>{A()},te)},ne),Z("mouseup",document,U,{once:!0})}let T=null;function xe(){k(),T=window.setTimeout(()=>{w=window.setInterval(()=>{O()},te)},ne),Z("mouseup",document,k,{once:!0})}const Ve=()=>{w||O()},Ie=()=>{y||A()};function ye(e){var t,l;if(e.key==="Enter"){if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((l=c.value)===null||l===void 0||l.deactivate())}else if(e.key==="ArrowUp"){if(!C.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&O()}else if(e.key==="ArrowDown"){if(!_.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&A()}}function we(e){h.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&a({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}De(d,()=>{b()});const Re={focus:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.blur()}},Be=Ce("InputNumber",D,p);return Object.assign(Object.assign({},Re),{rtlEnabled:Be,inputInstRef:c,minusButtonInstRef:j,addButtonInstRef:z,mergedClsPrefix:p,mergedBordered:i,uncontrolledValue:F,mergedValue:d,mergedPlaceholder:se,displayedValueInvalid:de,mergedSize:re,mergedDisabled:ie,displayedValue:h,addable:C,minusable:_,mergedStatus:ue,handleFocus:ve,handleBlur:he,handleClear:ge,handleMouseDown:pe,handleAddClick:Ve,handleMinusClick:Ie,handleAddMousedown:xe,handleMinusMousedown:be,handleKeyDown:ye,handleUpdateDisplayedValue:we,mergedTheme:u,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:Fe(()=>{const{self:{iconColorDisabled:e}}=u.value,[t,l,r,o]=Pe(e);return{textColorTextDisabled:`rgb(${t}, ${l}, ${r})`,opacityDisabled:`${o}`}})})},render(){const{mergedClsPrefix:n,$slots:i}=this,p=()=>s(Q,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>q(i["minus-icon"],()=>[s(J,{clsPrefix:n},{default:()=>s(He,null)})])}),D=()=>s(Q,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>q(i["add-icon"],()=>[s(J,{clsPrefix:n},{default:()=>s(ke,null)})])});return s("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},s(Ue,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var u;return this.showButton&&this.buttonPlacement==="both"?[p(),Y(i.prefix,v=>v?s("span",{class:`${n}-input-number-prefix`},v):null)]:(u=i.prefix)===null||u===void 0?void 0:u.call(i)},suffix:()=>{var u;return this.showButton?[Y(i.suffix,v=>v?s("span",{class:`${n}-input-number-suffix`},v):null),this.buttonPlacement==="right"?p():null,D()]:(u=i.suffix)===null||u===void 0?void 0:u.call(i)}}))}});export{Ze as _};