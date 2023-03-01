import{M as lo,W as Vo,K as j,aN as go,L as vo,q as K,a2 as Ao,r as f,z as x,t as po,y as V,A as d,X as mo,J as A,a0 as Ko,v as yo,x as qo,U as I,aT as fo,V as Co,B as Qo,Z as a,w as J,_ as Uo}from"./plugin-vueexport-helper-1542df20.js";import{t as Xo,i as Jo,T as Yo,u as wo,k as Z,b as Zo,a as oe,h as bo,N as ee,o as re,c as te}from"./Icon-02e655d0.js";function ho(o){return o.replace(/#|\(|\)|,|\s/g,"_")}const xo=vo("n-form-item");function ne(o,{defaultSize:r="medium",mergedSize:t,mergedDisabled:s}={}){const n=lo(xo,null);Vo(xo,null);const c=j(t?()=>t(n):()=>{const{size:S}=o;if(S)return S;if(n){const{mergedSize:N}=n;if(N.value!==void 0)return N.value}return r}),G=j(s?()=>s(n):()=>{const{disabled:S}=o;return S!==void 0?S:n?n.disabled.value:!1}),_=j(()=>{const{status:S}=o;return S||(n==null?void 0:n.mergedValidationStatus.value)});return go(()=>{n&&n.restoreValidation()}),{mergedSizeRef:c,mergedDisabledRef:G,mergedStatusRef:_,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}function se(o,r,t){var s=-1,n=o.length;r<0&&(r=-r>n?0:n+r),t=t>n?n:t,t<0&&(t+=n),n=r>t?0:t-r>>>0,r>>>=0;for(var c=Array(n);++s<n;)c[s]=o[s+r];return c}function ie(o,r,t){var s=o.length;return t=t===void 0?s:t,!r&&t>=s?o:se(o,r,t)}var ae="\\ud800-\\udfff",le="\\u0300-\\u036f",de="\\ufe20-\\ufe2f",ce="\\u20d0-\\u20ff",ue=le+de+ce,fe="\\ufe0e\\ufe0f",be="\\u200d",he=RegExp("["+be+ae+ue+fe+"]");function $o(o){return he.test(o)}function xe(o){return o.split("")}var Po="\\ud800-\\udfff",ge="\\u0300-\\u036f",ve="\\ufe20-\\ufe2f",pe="\\u20d0-\\u20ff",me=ge+ve+pe,ye="\\ufe0e\\ufe0f",Ce="["+Po+"]",so="["+me+"]",io="\\ud83c[\\udffb-\\udfff]",we="(?:"+so+"|"+io+")",So="[^"+Po+"]",To="(?:\\ud83c[\\udde6-\\uddff]){2}",ko="[\\ud800-\\udbff][\\udc00-\\udfff]",$e="\\u200d",zo=we+"?",Ho="["+ye+"]?",Pe="(?:"+$e+"(?:"+[So,To,ko].join("|")+")"+Ho+zo+")*",Se=Ho+zo+Pe,Te="(?:"+[So+so+"?",so,To,ko,Ce].join("|")+")",ke=RegExp(io+"(?="+io+")|"+Te+Se,"g");function ze(o){return o.match(ke)||[]}function He(o){return $o(o)?ze(o):xe(o)}function Re(o){return function(r){r=Xo(r);var t=$o(r)?He(r):void 0,s=t?t[0]:r.charAt(0),n=t?ie(t,1).join(""):r.slice(1);return s[o]()+n}}var Fe=Re("toUpperCase");const Ie=Fe;function Je(o,r){return K({name:Ie(o),setup(){var t;const s=(t=lo(Ao,null))===null||t===void 0?void 0:t.mergedIconsRef;return()=>{var n;const c=(n=s==null?void 0:s.value)===null||n===void 0?void 0:n[o];return c?c():r}}})}const Ro=K({name:"BaseIconSwitchTransition",setup(o,{slots:r}){const t=Jo();return()=>f(Yo,{name:"icon-switch-transition",appear:t.value},r)}}),{cubicBezierEaseInOut:Be}=po;function ao({originalTransform:o="",left:r=0,top:t=0,transition:s=`all .3s ${Be} !important`}={}){return[x("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:o+" scale(0.75)",left:r,top:t,opacity:0}),x("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${o}`,left:r,top:t,opacity:1}),x("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:r,top:t,transition:s})]}const Ee=x([x("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),x("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),x("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),x("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),V("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[d("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[ao()]),d("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[d("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),d("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[d("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[d("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),d("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[d("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),d("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[d("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),d("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ao({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),De={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},We=K({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},De),setup(o){wo("-base-loading",Ee,mo(o,"clsPrefix"))},render(){const{clsPrefix:o,radius:r,strokeWidth:t,stroke:s,scale:n}=this,c=r/n;return f("div",{class:`${o}-base-loading`,role:"img","aria-label":"loading"},f(Ro,null,{default:()=>this.show?f("div",{key:"icon",class:`${o}-base-loading__transition-wrapper`},f("div",{class:`${o}-base-loading__container`},f("div",{class:`${o}-base-loading__container-layer`},f("div",{class:`${o}-base-loading__container-layer-left`},f("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*c} ${2*c}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},f("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:c,cy:c,r:r-t/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r}))),f("div",{class:`${o}-base-loading__container-layer-patch`},f("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*c} ${2*c}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},f("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:c,cy:c,r:r-t/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r}))),f("div",{class:`${o}-base-loading__container-layer-right`},f("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*c} ${2*c}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},f("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:c,cy:c,r:r-t/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r})))))):f("div",{key:"placeholder",class:`${o}-base-loading__placeholder`},this.$slots)}))}}),Ge=V("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),_e=K({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){wo("-base-wave",Ge,mo(o,"clsPrefix"));const r=A(null),t=A(!1);let s=null;return go(()=>{s!==null&&window.clearTimeout(s)}),{active:t,selfRef:r,play(){s!==null&&(window.clearTimeout(s),t.value=!1,s=null),Ko(()=>{var n;(n=r.value)===null||n===void 0||n.offsetHeight,t.value=!0,s=window.setTimeout(()=>{t.value=!1,s=null},1e3)})}}},render(){const{clsPrefix:o}=this;return f("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}}),{cubicBezierEaseInOut:W}=po;function Me({duration:o=".2s",delay:r=".1s"}={}){return[x("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),x("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),x("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${W},
 max-width ${o} ${W} ${r},
 margin-left ${o} ${W} ${r},
 margin-right ${o} ${W} ${r};
 `),x("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${W} ${r},
 max-width ${o} ${W},
 margin-left ${o} ${W},
 margin-right ${o} ${W};
 `)]}const Oe=Z&&"chrome"in window;Z&&navigator.userAgent.includes("Firefox");const je=Z&&navigator.userAgent.includes("Safari")&&!Oe;function O(o){return yo(o,[255,255,255,.16])}function Y(o){return yo(o,[0,0,0,.12])}const Ne=vo("n-button-group"),Le={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},Ve=o=>{const{heightTiny:r,heightSmall:t,heightMedium:s,heightLarge:n,borderRadius:c,fontSizeTiny:G,fontSizeSmall:_,fontSizeMedium:S,fontSizeLarge:N,opacityDisabled:oo,textColor2:$,textColor3:eo,primaryColorHover:p,primaryColorPressed:T,borderColor:q,primaryColor:R,baseColor:u,infoColor:F,infoColorHover:w,infoColorPressed:i,successColor:b,successColorHover:y,successColorPressed:e,warningColor:k,warningColorHover:P,warningColorPressed:E,errorColor:z,errorColorHover:m,errorColorPressed:D,fontWeight:B,buttonColor2:L,buttonColor2Hover:H,buttonColor2Pressed:h,fontWeightStrong:Q}=o;return Object.assign(Object.assign({},Le),{heightTiny:r,heightSmall:t,heightMedium:s,heightLarge:n,borderRadiusTiny:c,borderRadiusSmall:c,borderRadiusMedium:c,borderRadiusLarge:c,fontSizeTiny:G,fontSizeSmall:_,fontSizeMedium:S,fontSizeLarge:N,opacityDisabled:oo,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:L,colorSecondaryHover:H,colorSecondaryPressed:h,colorTertiary:L,colorTertiaryHover:H,colorTertiaryPressed:h,colorQuaternary:"#0000",colorQuaternaryHover:H,colorQuaternaryPressed:h,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:$,textColorTertiary:eo,textColorHover:p,textColorPressed:T,textColorFocus:p,textColorDisabled:$,textColorText:$,textColorTextHover:p,textColorTextPressed:T,textColorTextFocus:p,textColorTextDisabled:$,textColorGhost:$,textColorGhostHover:p,textColorGhostPressed:T,textColorGhostFocus:p,textColorGhostDisabled:$,border:`1px solid ${q}`,borderHover:`1px solid ${p}`,borderPressed:`1px solid ${T}`,borderFocus:`1px solid ${p}`,borderDisabled:`1px solid ${q}`,rippleColor:R,colorPrimary:R,colorHoverPrimary:p,colorPressedPrimary:T,colorFocusPrimary:p,colorDisabledPrimary:R,textColorPrimary:u,textColorHoverPrimary:u,textColorPressedPrimary:u,textColorFocusPrimary:u,textColorDisabledPrimary:u,textColorTextPrimary:R,textColorTextHoverPrimary:p,textColorTextPressedPrimary:T,textColorTextFocusPrimary:p,textColorTextDisabledPrimary:$,textColorGhostPrimary:R,textColorGhostHoverPrimary:p,textColorGhostPressedPrimary:T,textColorGhostFocusPrimary:p,textColorGhostDisabledPrimary:R,borderPrimary:`1px solid ${R}`,borderHoverPrimary:`1px solid ${p}`,borderPressedPrimary:`1px solid ${T}`,borderFocusPrimary:`1px solid ${p}`,borderDisabledPrimary:`1px solid ${R}`,rippleColorPrimary:R,colorInfo:F,colorHoverInfo:w,colorPressedInfo:i,colorFocusInfo:w,colorDisabledInfo:F,textColorInfo:u,textColorHoverInfo:u,textColorPressedInfo:u,textColorFocusInfo:u,textColorDisabledInfo:u,textColorTextInfo:F,textColorTextHoverInfo:w,textColorTextPressedInfo:i,textColorTextFocusInfo:w,textColorTextDisabledInfo:$,textColorGhostInfo:F,textColorGhostHoverInfo:w,textColorGhostPressedInfo:i,textColorGhostFocusInfo:w,textColorGhostDisabledInfo:F,borderInfo:`1px solid ${F}`,borderHoverInfo:`1px solid ${w}`,borderPressedInfo:`1px solid ${i}`,borderFocusInfo:`1px solid ${w}`,borderDisabledInfo:`1px solid ${F}`,rippleColorInfo:F,colorSuccess:b,colorHoverSuccess:y,colorPressedSuccess:e,colorFocusSuccess:y,colorDisabledSuccess:b,textColorSuccess:u,textColorHoverSuccess:u,textColorPressedSuccess:u,textColorFocusSuccess:u,textColorDisabledSuccess:u,textColorTextSuccess:b,textColorTextHoverSuccess:y,textColorTextPressedSuccess:e,textColorTextFocusSuccess:y,textColorTextDisabledSuccess:$,textColorGhostSuccess:b,textColorGhostHoverSuccess:y,textColorGhostPressedSuccess:e,textColorGhostFocusSuccess:y,textColorGhostDisabledSuccess:b,borderSuccess:`1px solid ${b}`,borderHoverSuccess:`1px solid ${y}`,borderPressedSuccess:`1px solid ${e}`,borderFocusSuccess:`1px solid ${y}`,borderDisabledSuccess:`1px solid ${b}`,rippleColorSuccess:b,colorWarning:k,colorHoverWarning:P,colorPressedWarning:E,colorFocusWarning:P,colorDisabledWarning:k,textColorWarning:u,textColorHoverWarning:u,textColorPressedWarning:u,textColorFocusWarning:u,textColorDisabledWarning:u,textColorTextWarning:k,textColorTextHoverWarning:P,textColorTextPressedWarning:E,textColorTextFocusWarning:P,textColorTextDisabledWarning:$,textColorGhostWarning:k,textColorGhostHoverWarning:P,textColorGhostPressedWarning:E,textColorGhostFocusWarning:P,textColorGhostDisabledWarning:k,borderWarning:`1px solid ${k}`,borderHoverWarning:`1px solid ${P}`,borderPressedWarning:`1px solid ${E}`,borderFocusWarning:`1px solid ${P}`,borderDisabledWarning:`1px solid ${k}`,rippleColorWarning:k,colorError:z,colorHoverError:m,colorPressedError:D,colorFocusError:m,colorDisabledError:z,textColorError:u,textColorHoverError:u,textColorPressedError:u,textColorFocusError:u,textColorDisabledError:u,textColorTextError:z,textColorTextHoverError:m,textColorTextPressedError:D,textColorTextFocusError:m,textColorTextDisabledError:$,textColorGhostError:z,textColorGhostHoverError:m,textColorGhostPressedError:D,textColorGhostFocusError:m,textColorGhostDisabledError:z,borderError:`1px solid ${z}`,borderHoverError:`1px solid ${m}`,borderPressedError:`1px solid ${D}`,borderFocusError:`1px solid ${m}`,borderDisabledError:`1px solid ${z}`,rippleColorError:z,waveOpacity:"0.6",fontWeight:B,fontWeightStrong:Q})},Ae={name:"Button",common:qo,self:Ve},Ke=Ae,qe=x([V("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[I("color",[d("border",{borderColor:"var(--n-border-color)"}),I("disabled",[d("border",{borderColor:"var(--n-border-color-disabled)"})]),fo("disabled",[x("&:focus",[d("state-border",{borderColor:"var(--n-border-color-focus)"})]),x("&:hover",[d("state-border",{borderColor:"var(--n-border-color-hover)"})]),x("&:active",[d("state-border",{borderColor:"var(--n-border-color-pressed)"})]),I("pressed",[d("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),I("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[d("border",{border:"var(--n-border-disabled)"})]),fo("disabled",[x("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[d("state-border",{border:"var(--n-border-focus)"})]),x("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[d("state-border",{border:"var(--n-border-hover)"})]),x("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[d("state-border",{border:"var(--n-border-pressed)"})]),I("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[d("state-border",{border:"var(--n-border-pressed)"})])]),I("loading","cursor: wait;"),V("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[I("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Z&&"MozBoxSizing"in document.createElement("div").style?x("&::moz-focus-inner",{border:0}):null,d("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),d("border",{border:"var(--n-border)"}),d("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),d("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[V("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[ao({top:"50%",originalTransform:"translateY(-50%)"})]),Me()]),d("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[x("~",[d("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),I("block",`
 display: flex;
 width: 100%;
 `),I("dashed",[d("border, state-border",{borderStyle:"dashed !important"})]),I("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),x("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),x("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Qe=Object.assign(Object.assign({},Co.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!je}}),Fo=K({name:"Button",props:Qe,setup(o){const r=A(null),t=A(null),s=A(!1),n=Zo(()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered),c=lo(Ne,{}),{mergedSizeRef:G}=ne({},{defaultSize:"medium",mergedSize:i=>{const{size:b}=o;if(b)return b;const{size:y}=c;if(y)return y;const{mergedSize:e}=i||{};return e?e.value:"medium"}}),_=j(()=>o.focusable&&!o.disabled),S=i=>{var b;_.value||i.preventDefault(),!o.nativeFocusBehavior&&(i.preventDefault(),!o.disabled&&_.value&&((b=r.value)===null||b===void 0||b.focus({preventScroll:!0})))},N=i=>{var b;if(!o.disabled&&!o.loading){const{onClick:y}=o;y&&te(y,i),o.text||(b=t.value)===null||b===void 0||b.play()}},oo=i=>{switch(i.key){case"Enter":if(!o.keyboard)return;s.value=!1}},$=i=>{switch(i.key){case"Enter":if(!o.keyboard||o.loading){i.preventDefault();return}s.value=!0}},eo=()=>{s.value=!1},{inlineThemeDisabled:p,mergedClsPrefixRef:T,mergedRtlRef:q}=Qo(o),R=Co("Button","-button",qe,Ke,o,T),u=oe("Button",q,T),F=j(()=>{const i=R.value,{common:{cubicBezierEaseInOut:b,cubicBezierEaseOut:y},self:e}=i,{rippleDuration:k,opacityDisabled:P,fontWeight:E,fontWeightStrong:z}=e,m=G.value,{dashed:D,type:B,ghost:L,text:H,color:h,round:Q,circle:ro,textColor:M,secondary:Io,tertiary:co,quaternary:Bo,strong:Eo}=o,Do={"font-weight":Eo?z:E};let g={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const U=B==="tertiary",uo=B==="default",l=U?"default":B;if(H){const v=M||h;g={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":v||e[a("textColorText",l)],"--n-text-color-hover":v?O(v):e[a("textColorTextHover",l)],"--n-text-color-pressed":v?Y(v):e[a("textColorTextPressed",l)],"--n-text-color-focus":v?O(v):e[a("textColorTextHover",l)],"--n-text-color-disabled":v||e[a("textColorTextDisabled",l)]}}else if(L||D){const v=M||h;g={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":h||e[a("rippleColor",l)],"--n-text-color":v||e[a("textColorGhost",l)],"--n-text-color-hover":v?O(v):e[a("textColorGhostHover",l)],"--n-text-color-pressed":v?Y(v):e[a("textColorGhostPressed",l)],"--n-text-color-focus":v?O(v):e[a("textColorGhostHover",l)],"--n-text-color-disabled":v||e[a("textColorGhostDisabled",l)]}}else if(Io){const v=uo?e.textColor:U?e.textColorTertiary:e[a("color",l)],C=h||v,X=B!=="default"&&B!=="tertiary";g={"--n-color":X?J(C,{alpha:Number(e.colorOpacitySecondary)}):e.colorSecondary,"--n-color-hover":X?J(C,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-pressed":X?J(C,{alpha:Number(e.colorOpacitySecondaryPressed)}):e.colorSecondaryPressed,"--n-color-focus":X?J(C,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-disabled":e.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":C,"--n-text-color-hover":C,"--n-text-color-pressed":C,"--n-text-color-focus":C,"--n-text-color-disabled":C}}else if(co||Bo){const v=uo?e.textColor:U?e.textColorTertiary:e[a("color",l)],C=h||v;co?(g["--n-color"]=e.colorTertiary,g["--n-color-hover"]=e.colorTertiaryHover,g["--n-color-pressed"]=e.colorTertiaryPressed,g["--n-color-focus"]=e.colorSecondaryHover,g["--n-color-disabled"]=e.colorTertiary):(g["--n-color"]=e.colorQuaternary,g["--n-color-hover"]=e.colorQuaternaryHover,g["--n-color-pressed"]=e.colorQuaternaryPressed,g["--n-color-focus"]=e.colorQuaternaryHover,g["--n-color-disabled"]=e.colorQuaternary),g["--n-ripple-color"]="#0000",g["--n-text-color"]=C,g["--n-text-color-hover"]=C,g["--n-text-color-pressed"]=C,g["--n-text-color-focus"]=C,g["--n-text-color-disabled"]=C}else g={"--n-color":h||e[a("color",l)],"--n-color-hover":h?O(h):e[a("colorHover",l)],"--n-color-pressed":h?Y(h):e[a("colorPressed",l)],"--n-color-focus":h?O(h):e[a("colorFocus",l)],"--n-color-disabled":h||e[a("colorDisabled",l)],"--n-ripple-color":h||e[a("rippleColor",l)],"--n-text-color":M||(h?e.textColorPrimary:U?e.textColorTertiary:e[a("textColor",l)]),"--n-text-color-hover":M||(h?e.textColorHoverPrimary:e[a("textColorHover",l)]),"--n-text-color-pressed":M||(h?e.textColorPressedPrimary:e[a("textColorPressed",l)]),"--n-text-color-focus":M||(h?e.textColorFocusPrimary:e[a("textColorFocus",l)]),"--n-text-color-disabled":M||(h?e.textColorDisabledPrimary:e[a("textColorDisabled",l)])};let to={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};H?to={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:to={"--n-border":e[a("border",l)],"--n-border-hover":e[a("borderHover",l)],"--n-border-pressed":e[a("borderPressed",l)],"--n-border-focus":e[a("borderFocus",l)],"--n-border-disabled":e[a("borderDisabled",l)]};const{[a("height",m)]:no,[a("fontSize",m)]:Wo,[a("padding",m)]:Go,[a("paddingRound",m)]:_o,[a("iconSize",m)]:Mo,[a("borderRadius",m)]:Oo,[a("iconMargin",m)]:jo,waveOpacity:No}=e,Lo={"--n-width":ro&&!H?no:"initial","--n-height":H?"initial":no,"--n-font-size":Wo,"--n-padding":ro||H?"initial":Q?_o:Go,"--n-icon-size":Mo,"--n-icon-margin":jo,"--n-border-radius":H?"initial":ro||Q?no:Oo};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":b,"--n-bezier-ease-out":y,"--n-ripple-duration":k,"--n-opacity-disabled":P,"--n-wave-opacity":No},Do),g),to),Lo)}),w=p?Uo("button",j(()=>{let i="";const{dashed:b,type:y,ghost:e,text:k,color:P,round:E,circle:z,textColor:m,secondary:D,tertiary:B,quaternary:L,strong:H}=o;b&&(i+="a"),e&&(i+="b"),k&&(i+="c"),E&&(i+="d"),z&&(i+="e"),D&&(i+="f"),B&&(i+="g"),L&&(i+="h"),H&&(i+="i"),P&&(i+="j"+ho(P)),m&&(i+="k"+ho(m));const{value:h}=G;return i+="l"+h[0],i+="m"+y[0],i}),F,o):void 0;return{selfElRef:r,waveElRef:t,mergedClsPrefix:T,mergedFocusable:_,mergedSize:G,showBorder:n,enterPressed:s,rtlEnabled:u,handleMousedown:S,handleKeydown:$,handleBlur:eo,handleKeyup:oo,handleClick:N,customColorCssVars:j(()=>{const{color:i}=o;if(!i)return null;const b=O(i);return{"--n-border-color":i,"--n-border-color-hover":b,"--n-border-color-pressed":Y(i),"--n-border-color-focus":b,"--n-border-color-disabled":i}}),cssVars:p?void 0:F,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:o,tag:r,onRender:t}=this;t==null||t();const s=bo(this.$slots.default,n=>n&&f("span",{class:`${o}-button__content`},n));return f(r,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&s,f(ee,{width:!0},{default:()=>bo(this.$slots.icon,n=>(this.loading||this.renderIcon||n)&&f("span",{class:`${o}-button__icon`,style:{margin:re(this.$slots.default)?"0":""}},f(Ro,null,{default:()=>this.loading?f(We,{clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20}):f("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():n)})))}),this.iconPlacement==="left"&&s,this.text?null:f(_e,{ref:"waveElRef",clsPrefix:o}),this.showBorder?f("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?f("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}}),Ye=Fo,Ze=Fo;export{Ye as N,Ze as X,Ro as a,Ke as b,We as c,Ie as d,ho as e,je as f,xo as g,Ne as h,ao as i,Je as r,Ve as s,ne as u};
