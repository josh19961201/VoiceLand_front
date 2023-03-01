import{P as v,R as N,Z as q,D as x}from"./router-6446057b.js";import{ac as u}from"./vue-router-154c86bc.js";import{b6 as V,K as p,a8 as m,ad as B,a_ as D,a$ as T,ag as n,af as i,ah as c,r as o,b8 as d,bb as z}from"./plugin-vueexport-helper-1542df20.js";import{_ as F}from"./DataTable-e09467ad.js";import{c as P,N as H}from"./headers-d0c66c5d.js";import{N as l}from"./Button-a81ecdea.js";import"./Icon-8a75e956.js";import"./light-d50e1129.js";const R={class:"container"},S={class:"inside"},$={__name:"CartView",setup(A){const y=v(),f=N(),{editCart:g}=f,_=async(t,e)=>{await g({_id:a[t].p_id,quantity:e}),a[t].quantity+=e,a[t].quantity<=0&&a.splice(t,1)},h=p(()=>a.reduce((t,e)=>t+e.quantity*e.price,0)),k=p(()=>a.length>0&&!a.some(t=>!t.sell));(async()=>{var t,e;try{const{data:s}=await q.get("/users/cart");for(const r of s.result)a.push({_id:r._id,p_id:r.p_id._id,category:r.p_id.category,description:r.description,images:r.p_id.images,name:r.p_id.name,price:r.p_id.price,sell:r.p_id.sell,quantity:r.quantity,key:r._id})}catch(s){y.error({title:"失敗",content:((e=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:e.message)||"取得購物車失敗",positiveText:"再試一次"})}})();const a=m([]),C=m([{title:"",key:"image",render(t,e){return o("img",{src:a[e].images[0],height:80})}},{title:"商品",key:"name",render(t,e){return o(u,{to:"shop/products/"+a[e].p_id,style:"color: #FFF; text-decoration: none;"},{default:()=>a[e].name})}},{title:"單價",key:"price"},{title:"",key:"-",render(t,e){return o(l,{strong:!0,tertiary:!0,size:"small",onClick:()=>_(e,-1)},{default:()=>"-"})}},{title:"數量",key:"quantity"},{title:"",key:"+",render(t,e){return o(l,{strong:!0,tertiary:!0,size:"small",onClick:()=>_(e,1)},{default:()=>"+"})}},{title:"小計",key:"productTotalPrice",render(t,e){return o("p",{},{default:()=>t.price*t.quantity})}},{title:"",key:"delete",render(t,e){return o(l,{strong:!0,tertiary:!0,size:"small",onClick:()=>_(e,a[e].quantity*-1)},{default:()=>"刪除"})}}]);return(t,e)=>{const s=P,r=x,b=F,w=H;return B(),D("div",R,[T("div",S,[n(s,{class:"pageTitle"},{default:i(()=>[d(" 購物車 ")]),_:1}),n(r),n(b,{columns:C,data:a},null,8,["columns","data"]),n(w,{style:{"align-self":"flex-end"}},{default:i(()=>[d(" 結帳金額：$"+z(c(h)),1)]),_:1}),n(c(u),{to:"/orderbuild",style:{"align-self":"flex-end"}},{default:i(()=>[n(c(l),{disabled:!c(k),type:"primary"},{default:i(()=>[d(" 前往結帳 ")]),_:1},8,["disabled"])]),_:1})])])}}},J=V($,[["__scopeId","data-v-f3947c04"]]);export{J as default};
