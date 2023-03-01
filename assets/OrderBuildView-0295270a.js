import{ag as D}from"./vue-router-28b6ae4c.js";import{P as O,Q as T,R as q,Z as R,a5 as v,W as j,D as M,_ as P,E as W}from"./router-0a69d1ba.js";import{b6 as z,J as b,a8 as h,ad as A,a_ as F,a$ as y,ag as t,af as r,b8 as c}from"./plugin-vueexport-helper-1542df20.js";import{_ as G}from"./FormItemGridItem-cbf5a76c.js";import{c as H}from"./headers-d0c66c5d.js";import{N as I}from"./Button-1c319fcc.js";import"./Icon-02e655d0.js";const J={class:"container"},Q={class:"inside",style:{padding:"0 5rem"}},S={class:"btnGroup"},Z={__name:"OrderBuildView",setup($){const m=O(),w=T(),f=D(),E=q(),p=b(!1),g=b(!1),{checkout:k}=E,a=h({}),d=h({}),x={name:{required:!0,validator(o,e){if(!e)return new Error("請輸入姓名")},trigger:["input","blur"]},email:{required:!0,validator(o,e){if(e){if(!v.isEmail(e))return new Error("Email格式錯誤")}else return new Error("請輸入Email");return!0},trigger:["input","blur"]},mobilephone:{required:!0,validator(o,e){if(e){if(e&&!v.isMobilePhone(e,"zh-TW"))return new Error("手機格式錯誤")}else return new Error("請輸入Email");return!0},trigger:["input","blur"]},address:{required:!0,trigger:["input","blur"]}},B=async()=>{f.push("/cart")},U=async()=>{var o;(o=g.value)==null||o.validate(async e=>{var n,l;if(e)w.error("請檢查資料是否完整");else{p.value=!0;try{await k(),f.push("/ordercomplete")}catch(i){m.error({title:"失敗",content:((l=(n=i==null?void 0:i.response)==null?void 0:n.data)==null?void 0:l.message)||"發生錯誤",positiveText:"確認"})}p.value=!1}})},C=()=>Object.assign(a,d);return(async()=>{var o,e;try{const n=await R.get("/users/me");Object.assign(d,n.data.result),console.log(d)}catch(n){m.error({title:"失敗",content:((e=(o=n==null?void 0:n.response)==null?void 0:o.data)==null?void 0:e.message)||"取得資料失敗",positiveText:"再試一次"})}})(),(o,e)=>{const n=H,l=I,i=M,u=P,_=G,N=W,V=j;return A(),F("div",J,[y("div",Q,[t(n,{class:"pageTitle"},{default:r(()=>[c(" 填寫收件資料 ")]),_:1}),t(l,{style:{width:"150px","align-self":"center"},onClick:C},{default:r(()=>[c(" 載入會員資料 ")]),_:1}),t(i),t(V,{ref_key:"formRef",ref:g,model:a,rules:x},{default:r(()=>[t(N,{cols:12,"x-gap":48,"y-gap":24},{default:r(()=>[t(_,{span:6,label:"收件人",path:"name"},{default:r(()=>[t(u,{value:a.name,"onUpdate:value":e[0]||(e[0]=s=>a.name=s),placeholder:"請輸入真實姓名，以免影響收貨權益"},null,8,["value"])]),_:1}),t(_,{span:6,label:"Eamil",path:"email"},{default:r(()=>[t(u,{value:a.email,"onUpdate:value":e[1]||(e[1]=s=>a.email=s),placeholder:"請輸入電子信箱"},null,8,["value"])]),_:1}),t(_,{span:6,label:"手機",path:"mobilephone"},{default:r(()=>[t(u,{value:a.mobilephone,"onUpdate:value":e[2]||(e[2]=s=>a.mobilephone=s),placeholder:"請輸入手機"},null,8,["value"])]),_:1}),t(_,{span:6,label:"收件地址",path:"address"},{default:r(()=>[t(u,{value:a.address,"onUpdate:value":e[3]||(e[3]=s=>a.address=s),placeholder:"請輸入收件地址"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model"]),y("div",S,[t(l,{onClick:B},{default:r(()=>[c(" 回購物車 ")]),_:1}),t(l,{loading:p.value,type:"primary",onClick:U},{default:r(()=>[c(" 送出訂單 ")]),_:1},8,["loading"])])])])}}},ne=z(Z,[["__scopeId","data-v-0294c693"]]);export{ne as default};
