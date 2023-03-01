import{B as G,C as K,D as U,E as q,F as J,G as O,H as b,I as Q,J as A,K as W,L as X,M as Y}from"./router-2a9f4963.js";import{ai as Z,a3 as ee}from"./vue-router-09c1997e.js";import{aL as te,j as T,G as k,K as m,aD as v,N as t,M as s,aE as f,F as C,aR as P,aN as u,aQ as y,L as R,aS as ne,aT as se}from"./plugin-vueexport-helper-7bd45fc8.js";import{_ as oe}from"./InputNumber-55bb665a.js";import{_ as ae}from"./Image-51ae2651.js";import{c as re,N as ie}from"./headers-3957187b.js";import{e as ce}from"./Button-0a6df741.js";import"./Icon-f0586d91.js";import"./Remove-15a18098.js";const le={class:"pageContent"},_e={class:"carouselOut"},ue={class:"description"},pe={class:"foot"},de={class:"sell"},me={__name:"ProductView",setup(fe){const c=G(),V=K(),B=Z(),g=ee(),D=U(),{editCart:L}=D,h=T(null),p=T({quantity:1}),x=k([]),M={quantity:{type:"number",required:!0,validator(o,a){return!a||!/^[1-9]\d*$/.test(a)?new Error("請輸入正確的數量"):!0}}},n=k({_id:"",name:"",price:0,description:"",images:[],sell:!0,category:""}),j=()=>{var o;(o=h.value)==null||o.validate(async a=>{var d,l;if(a)V.error("請輸入正確的數量");else try{const e=await L({_id:n._id,quantity:p.value.quantity});e.length===0?c.success({title:"成功",content:"您新增了 "+p.value.quantity+" 個 "+n.name+" 到購物車",positiveText:"確認"}):e===-1?(c.error({title:"錯誤",content:"請登入帳號",positiveText:"確認"}),g.push("/login")):c.error({title:"加入購物車失敗",content:e,positiveText:"確認"})}catch(e){c.error({title:"加入購物車失敗",content:((l=(d=e==null?void 0:e.response)==null?void 0:d.data)==null?void 0:l.message)||"發生錯誤",positiveText:"確認"})}})};return(async()=>{try{const{data:o}=await q.get("/products/"+B.params.id);n._id=o.result._id,n.name=o.result.name,n.price=o.result.price,n.description=o.result.description,n.images=o.result.images,n.sell=o.result.sell,n.category=o.result.category,document.title="Voice Land - 線上商城 | "+n.name,n.sell||(c.error({title:"錯誤",content:"商品未上架",positiveText:"確認"}),g.go(-1));const a=await q.get("/products"),l=(e=>{for(let r=e.length-1;r>0;r--){const _=Math.floor(Math.random()*(r+1));[e[r],e[_]]=[e[_],e[r]]}return e})(a.data.result).slice(0,3);x.push(...l)}catch{c.error({title:"錯誤",content:"取得商品失敗",positiveText:"再試一次"}),g.go(-1)}})(),(o,a)=>{const d=ae,l=O,e=b,r=re,_=ie,E=Q,F=oe,w=A,z=ce,H=W,N=J,I=X,S=Y,$=b;return m(),v("div",le,[t(N,{cols:"12","item-responsive":"",responsive:"screen"},{default:s(()=>[t(e,{span:"12 s:6 m:6",style:{display:"flex","justify-content":"center"}},{default:s(()=>[f("div",_e,[t(l,{"show-arrow":"","space-between":20,draggable:""},{default:s(()=>[(m(!0),v(C,null,P(n.images,i=>(m(),R(d,{key:i,src:i,class:"carousel-img","object-fit":"contain"},null,8,["src"]))),128))]),_:1})])]),_:1}),t(e,{span:"12 s:5 m:5",class:"info",style:{"margin-left":"5rem"}},{default:s(()=>[t(r,null,{default:s(()=>[u(y(n.name),1)]),_:1}),t(_,null,{default:s(()=>[u("NT$"+y(n.price),1)]),_:1}),t(H,{ref_key:"addRef",ref:h,model:p.value,rules:M,"show-require-mark":!1},{default:s(()=>[f("div",ue,[t(_,null,{default:s(()=>[u("商品介紹")]),_:1}),t(E,{style:{"white-space":"pre-line","line-height":"2"}},{default:s(()=>[u(y(n.description),1)]),_:1})]),f("div",pe,[t(w,{label:"數量",path:"quantity"},{default:s(()=>[t(F,{value:p.value.quantity,"onUpdate:value":a[0]||(a[0]=i=>p.value.quantity=i)},null,8,["value"])]),_:1}),t(w,null,{default:s(()=>[t(z,{size:"medium",type:"primary",onClick:j},{default:s(()=>[u(" 加入購物車 ")]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1})]),_:1}),t(I,{style:{margin:"5rem"}}),f("div",de,[t(_,{style:{"font-size":"2rem","margin-bottom":"3rem"}},{default:s(()=>[u(" 你可能會喜歡... ")]),_:1}),t(N,{cols:"3","x-gap":64},{default:s(()=>[(m(!0),v(C,null,P(x,i=>(m(),R($,{key:i._id},{default:s(()=>[t(S,ne(se(i)),null,16)]),_:2},1024))),128))]),_:1})])])}}},Te=te(me,[["__scopeId","data-v-d203253c"]]);export{Te as default};
