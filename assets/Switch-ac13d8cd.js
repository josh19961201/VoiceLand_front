import{i as O,d as se,N as de,a as ce}from"./Button-4159ae6a.js";import{d as ue,b as he,e as U,H as t,g as W,f as l,as as A,i as be,u as fe,m as I,j as K,t as ge,l as z,I as m,p as ve,h as n}from"./plugin-vueexport-helper-7abb35e5.js";import{e as me}from"./_common-4b455c47.js";import{u as we,p as M,o as s}from"./vue-router-23be1caa.js";import{n as P,f as w,g as H}from"./Icon-085b31e9.js";const pe=e=>{const{primaryColor:d,opacityDisabled:f,borderRadius:a,textColor3:r}=e,p="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},me),{iconColor:r,textColor:"white",loadingColor:d,opacityDisabled:f,railColor:p,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:a,railBorderRadiusMedium:a,railBorderRadiusLarge:a,buttonBorderRadiusSmall:a,buttonBorderRadiusMedium:a,buttonBorderRadiusLarge:a,boxShadowFocus:`0 0 0 2px ${he(d,{alpha:.2})}`})},ye={name:"Switch",common:ue,self:pe},xe=ye,ke=U("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),U("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[O({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),W("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),A("disabled",[A("icon",[l("rubber-band",[l("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[W("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),l("active",[l("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[W("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),l("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[O()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),l("active",[t("rail","background-color: var(--n-rail-color-active);")]),l("loading",[t("rail",`
 cursor: wait;
 `)]),l("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Ce=Object.assign(Object.assign({},I.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let B;const Ve=be({name:"Switch",props:Ce,setup(e){B===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?B=CSS.supports("width","max(1px)"):B=!1:B=!0);const{mergedClsPrefixRef:d,inlineThemeDisabled:f}=fe(e),a=I("Switch","-switch",ke,xe,e,d),r=se(e),{mergedSizeRef:p,mergedDisabledRef:g}=r,k=K(e.defaultValue),R=ge(e,"value"),v=we(R,k),C=z(()=>v.value===e.checkedValue),y=K(!1),i=K(!1),c=z(()=>{const{railStyle:o}=e;if(o)return o({focused:i.value,checked:C.value})});function u(o){const{"onUpdate:value":$,onChange:_,onUpdateValue:V}=e,{nTriggerFormInput:F,nTriggerFormChange:T}=r;$&&H($,o),V&&H(V,o),_&&H(_,o),k.value=o,F(),T()}function E(){const{nTriggerFormFocus:o}=r;o()}function X(){const{nTriggerFormBlur:o}=r;o()}function Y(){e.loading||g.value||(v.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function q(){i.value=!0,E()}function G(){i.value=!1,X(),y.value=!1}function J(o){e.loading||g.value||o.key===" "&&(v.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),y.value=!1)}function Q(o){e.loading||g.value||o.key===" "&&(o.preventDefault(),y.value=!0)}const L=z(()=>{const{value:o}=p,{self:{opacityDisabled:$,railColor:_,railColorActive:V,buttonBoxShadow:F,buttonColor:T,boxShadowFocus:Z,loadingColor:ee,textColor:te,iconColor:oe,[m("buttonHeight",o)]:h,[m("buttonWidth",o)]:ie,[m("buttonWidthPressed",o)]:ne,[m("railHeight",o)]:b,[m("railWidth",o)]:S,[m("railBorderRadius",o)]:ae,[m("buttonBorderRadius",o)]:re},common:{cubicBezierEaseInOut:le}}=a.value;let j,D,N;return B?(j=`calc((${b} - ${h}) / 2)`,D=`max(${b}, ${h})`,N=`max(${S}, calc(${S} + ${h} - ${b}))`):(j=M((s(b)-s(h))/2),D=M(Math.max(s(b),s(h))),N=s(b)>s(h)?S:M(s(S)+s(h)-s(b))),{"--n-bezier":le,"--n-button-border-radius":re,"--n-button-box-shadow":F,"--n-button-color":T,"--n-button-width":ie,"--n-button-width-pressed":ne,"--n-button-height":h,"--n-height":D,"--n-offset":j,"--n-opacity-disabled":$,"--n-rail-border-radius":ae,"--n-rail-color":_,"--n-rail-color-active":V,"--n-rail-height":b,"--n-rail-width":S,"--n-width":N,"--n-box-shadow-focus":Z,"--n-loading-color":ee,"--n-text-color":te,"--n-icon-color":oe}}),x=f?ve("switch",z(()=>p.value[0]),L,e):void 0;return{handleClick:Y,handleBlur:G,handleFocus:q,handleKeyup:J,handleKeydown:Q,mergedRailStyle:c,pressed:y,mergedClsPrefix:d,mergedValue:v,checked:C,mergedDisabled:g,cssVars:f?void 0:L,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:f,mergedRailStyle:a,onRender:r,$slots:p}=this;r==null||r();const{checked:g,unchecked:k,icon:R,"checked-icon":v,"unchecked-icon":C}=p,y=!(P(R)&&P(v)&&P(C));return n("div",{role:"switch","aria-checked":f,class:[`${e}-switch`,this.themeClass,y&&`${e}-switch--icon`,f&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},n("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:a},w(g,i=>w(k,c=>i||c?n("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),i),n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),c)):null)),n("div",{class:`${e}-switch__button`},w(R,i=>w(v,c=>w(C,u=>n(de,null,{default:()=>this.loading?n(ce,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||i)?n("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||i):!this.checked&&(u||i)?n("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||i):null})))),w(g,i=>i&&n("div",{key:"checked",class:`${e}-switch__checked`},i)),w(k,i=>i&&n("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}});export{Ve as _};
