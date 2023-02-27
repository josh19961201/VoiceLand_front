import{C as q,ax as J,a3 as D,u as G,ay as Q,az as Z,I as ee,W as oe,a6 as re,_ as te,a8 as C,aa as ne,ab as le,ac as se,L as ae,a9 as ie}from"./PersonOutline-bba22013.js";import{y as l,U as c,A as n,z as b,q as v,r as s,V as N,M as de,J as A,K as z,X as F,W,B as U,_ as K,bc as ce,bx as ue,L as he,ad as $,aX as R,aY as h,bz as pe,b3 as ge,ac as be,ae as ve,af as j,ag as S}from"./plugin-vueexport-helper-0effeee0.js";import{e as me,c as E,a as fe}from"./Icon-e4f27f28.js";import{l as _e}from"./light-6b80c29a.js";const xe=l("layout-sider",`
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
`,[c("bordered",[n("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),n("left-placement",[c("bordered",[n("border",`
 right: 0;
 `)])]),c("right-placement",`
 justify-content: flex-start;
 `,[c("bordered",[n("border",`
 left: 0;
 `)]),c("collapsed",[l("layout-toggle-button",[l("base-icon",`
 transform: rotate(180deg);
 `)]),l("layout-toggle-bar",[b("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),l("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[l("base-icon",`
 transform: rotate(0);
 `)]),l("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[b("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),c("collapsed",[l("layout-toggle-bar",[b("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),l("layout-toggle-button",[l("base-icon",`
 transform: rotate(0);
 `)])]),l("layout-toggle-button",`
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
 `,[l("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),l("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[n("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),n("bottom",`
 position: absolute;
 top: 34px;
 `),b("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),n("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),b("&:hover",[n("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),n("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),l("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),c("show-content",[l("layout-sider-scroll-container",{opacity:1})]),c("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),ke=v({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},s(me,{clsPrefix:e},{default:()=>s(q,null)}))}}),ye=v({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},s("div",{class:`${e}-layout-toggle-bar__top`}),s("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),we={position:re,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Ce=v({name:"LayoutSider",props:Object.assign(Object.assign({},N.props),we),setup(e){const o=de(J),r=A(null),d=A(null),f=z(()=>D(g.value?e.collapsedWidth:e.width)),_=z(()=>e.collapseMode!=="transform"?{}:{minWidth:D(e.width)}),x=z(()=>o?o.siderPlacement:"left"),u=A(e.defaultCollapsed),g=G(F(e,"collapsed"),u);function B(i,t){if(e.nativeScrollbar){const{value:a}=r;a&&(t===void 0?a.scrollTo(i):a.scrollTo(i,t))}else{const{value:a}=d;a&&a.scrollTo(i,t)}}function T(){const{"onUpdate:collapsed":i,onUpdateCollapsed:t,onExpand:a,onCollapse:V}=e,{value:w}=g;t&&E(t,!w),i&&E(i,!w),u.value=!w,w?a&&E(a):V&&E(V)}let k=0,y=0;const M=i=>{var t;const a=i.target;k=a.scrollLeft,y=a.scrollTop,(t=e.onScroll)===null||t===void 0||t.call(e,i)};Q(()=>{if(e.nativeScrollbar){const i=r.value;i&&(i.scrollTop=y,i.scrollLeft=k)}}),W(Z,{collapsedRef:g,collapseModeRef:F(e,"collapseMode")});const{mergedClsPrefixRef:P,inlineThemeDisabled:O}=U(e),L=N("Layout","-layout-sider",xe,ee,e,P);function Y(i){var t,a;i.propertyName==="max-width"&&(g.value?(t=e.onAfterLeave)===null||t===void 0||t.call(e):(a=e.onAfterEnter)===null||a===void 0||a.call(e))}const H={scrollTo:B},I=z(()=>{const{common:{cubicBezierEaseInOut:i},self:t}=L.value,{siderToggleButtonColor:a,siderToggleButtonBorder:V,siderToggleBarColor:w,siderToggleBarColorHover:X}=t,p={"--n-bezier":i,"--n-toggle-button-color":a,"--n-toggle-button-border":V,"--n-toggle-bar-color":w,"--n-toggle-bar-color-hover":X};return e.inverted?(p["--n-color"]=t.siderColorInverted,p["--n-text-color"]=t.textColorInverted,p["--n-border-color"]=t.siderBorderColorInverted,p["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColorInverted,p.__invertScrollbar=t.__invertScrollbar):(p["--n-color"]=t.siderColor,p["--n-text-color"]=t.textColor,p["--n-border-color"]=t.siderBorderColor,p["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColor),p}),m=O?K("layout-sider",z(()=>e.inverted?"a":"b"),I,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:d,mergedClsPrefix:P,mergedTheme:L,styleMaxWidth:f,mergedCollapsed:g,scrollContainerStyle:_,siderPlacement:x,handleNativeElScroll:M,handleTransitionend:Y,handleTriggerClick:T,inlineThemeDisabled:O,cssVars:I,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender},H)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:r,showTrigger:d}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,r&&`${o}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:D(this.width)}]},this.nativeScrollbar?s("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):s(oe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),d?d==="bar"?s(ye,{clsPrefix:o,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):s(ke,{clsPrefix:o,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?s("div",{class:`${o}-layout-sider__border`}):null)}}),Se=b([l("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[c("show-divider",[l("list-item",[b("&:not(:last-child)",[n("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),c("clickable",[l("list-item",`
 cursor: pointer;
 `)]),c("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),c("hoverable",[l("list-item",`
 border-radius: var(--n-border-radius);
 `,[b("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[n("divider",`
 background-color: transparent;
 `)])])]),c("bordered, hoverable",[l("list-item",`
 padding: 12px 20px;
 `),n("header, footer",`
 padding: 12px 20px;
 `)]),n("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[b("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),l("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[n("prefix",`
 margin-right: 20px;
 flex: 0;
 `),n("suffix",`
 margin-left: 20px;
 flex: 0;
 `),n("main",`
 flex: 1;
 `),n("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),ce(l("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),ue(l("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),ze=Object.assign(Object.assign({},N.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),$e=he("n-list"),Be=v({name:"List",props:ze,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:d}=U(e),f=fe("List",d,o),_=N("List","-list",Se,_e,e,o);W($e,{showDividerRef:F(e,"showDivider"),mergedClsPrefixRef:o});const x=z(()=>{const{common:{cubicBezierEaseInOut:g},self:{fontSize:B,textColor:T,color:k,colorModal:y,colorPopover:M,borderColor:P,borderColorModal:O,borderColorPopover:L,borderRadius:Y,colorHover:H,colorHoverModal:I,colorHoverPopover:m}}=_.value;return{"--n-font-size":B,"--n-bezier":g,"--n-text-color":T,"--n-color":k,"--n-border-radius":Y,"--n-border-color":P,"--n-border-color-modal":O,"--n-border-color-popover":L,"--n-color-modal":y,"--n-color-popover":M,"--n-color-hover":H,"--n-color-hover-modal":I,"--n-color-hover-popover":m}}),u=r?K("list",void 0,x,e):void 0;return{mergedClsPrefix:o,rtlEnabled:f,cssVars:r?void 0:x,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var e;const{$slots:o,mergedClsPrefix:r,onRender:d}=this;return d==null||d(),s("ul",{class:[`${r}-list`,this.rtlEnabled&&`${r}-list--rtl`,this.bordered&&`${r}-list--bordered`,this.showDivider&&`${r}-list--show-divider`,this.hoverable&&`${r}-list--hoverable`,this.clickable&&`${r}-list--clickable`,this.themeClass],style:this.cssVars},o.header?s("div",{class:`${r}-list__header`},o.header()):null,(e=o.default)===null||e===void 0?void 0:e.call(o),o.footer?s("div",{class:`${r}-list__footer`},o.footer()):null)}}),Te={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Me=h("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16z"},null,-1),je=h("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 176v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"},null,-1),Re=[Me,je],Pe=v({name:"BagOutline",render:function(o,r){return $(),R("svg",Te,Re)}}),Oe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Le=h("path",{d:"M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),Ie=h("path",{d:"M256 56v120a32 32 0 0 0 32 32h120",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Ve=h("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M176 288h160"},null,-1),Ee=h("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M176 368h160"},null,-1),Ae=[Le,Ie,Ve,Ee],Ne=v({name:"DocumentTextOutline",render:function(o,r){return $(),R("svg",Oe,Ae)}}),Ye={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},He=h("path",{d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),De=h("path",{d:"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Fe=h("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 179V64h-48v69"},null,-1),We=[He,De,Fe],Ue=v({name:"HomeOutline",render:function(o,r){return $(),R("svg",Ye,We)}}),Ke={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Xe=pe('<path d="M407.94 52.22S321.3 160 240 160H80a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h160c81.3 0 167.94 108.23 167.94 108.23c6.06 8 24.06 2.52 24.06-9.83V62c0-12.31-17-18.82-24.06-9.78z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M64 256s-16-6-16-32s16-32 16-32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M448 246s16-4.33 16-22s-16-22-16-22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 160v128"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160v128"></path><path d="M144 288v168a8 8 0 0 0 8 8h53a16 16 0 0 0 15.29-20.73C211.91 416.39 192 386.08 192 336h16a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>',6),qe=[Xe],Je=v({name:"MegaphoneOutline",render:function(o,r){return $(),R("svg",Ke,qe)}}),Ge={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Qe=h("path",{d:"M192 218v-6c0-14.84 10-27 24.24-30.59l174.59-46.68A20 20 0 0 1 416 154v22",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Ze=h("path",{d:"M416 295.94v80c0 13.91-8.93 25.59-22 30l-22 8c-25.9 8.72-52-10.42-52-38h0a33.37 33.37 0 0 1 23-32l51-18.15c13.07-4.4 22-15.94 22-29.85V58a10 10 0 0 0-12.6-9.61L204 102a16.48 16.48 0 0 0-12 16v226c0 13.91-8.93 25.6-22 30l-52 18c-13.88 4.68-22 17.22-22 32h0c0 27.58 26.52 46.55 52 38l22-8c13.07-4.4 22-16.08 22-30v-80",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),eo=[Qe,Ze],oo=v({name:"MusicalNotesOutline",render:function(o,r){return $(),R("svg",Ge,eo)}});const ro={__name:"AdminLayout",setup(e){const o=A(null);function r(f){return()=>s(ae,null,{default:()=>s(f)})}const d=[{label:()=>s(C,{to:"/admin"},{default:()=>"首頁管理"}),key:"admin-home",icon:r(Ue)},{label:()=>s(C,{to:"/admin/shows"},{default:()=>"演出管理"}),key:"admin-shows",icon:r(Je)},{label:()=>s(C,{to:"/admin/works"},{default:()=>"作品管理"}),key:"admin-works",icon:r(oo)},{label:()=>s(C,{to:"/admin/products"},{default:()=>"商品管理"}),key:"admin-products",icon:r(Pe)},{label:()=>s(C,{to:"/admin/orders"},{default:()=>"訂單管理"}),key:"admin-orders",icon:r(Ne)},{label:()=>s(C,{to:"/admin/users"},{default:()=>"會員管理"}),key:"admin-users",icon:r(ie)}];return(f,_)=>{const x=ne,u=Be,g=Ce,B=be("router-view"),T=le,k=se,y=te;return $(),ve(y,{vertical:"",class:"container"},{default:j(()=>[S(k,{"has-sider":""},{default:j(()=>[S(g,{"collapse-mode":"width",width:240,bordered:"","content-style":"padding-top: 3rem;"},{default:j(()=>[S(u,null,{default:j(()=>[S(x,{value:o.value,"onUpdate:value":_[0]||(_[0]=M=>o.value=M),options:d},null,8,["value"])]),_:1})]),_:1}),S(T,{"content-style":"padding: 3rem;"},{default:j(()=>[S(B)]),_:1})]),_:1})]),_:1})}}},ao=ge(ro,[["__scopeId","data-v-8e3ca8ac"]]);export{ao as default};
