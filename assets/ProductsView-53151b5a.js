import{Q as A,P as L,Z as g,_ as P,a2 as j,E as H,W as I,K as J,D as K}from"./router-0a69d1ba.js";import{_ as M}from"./light-b5bc1b2e.js";import{_ as Q}from"./Switch-18b5321a.js";import{J as f,a8 as b,ad as W,a_ as Z,ag as n,af as i,ah as w,a7 as G,b8 as v,a$ as O,bb as X,r as Y}from"./plugin-vueexport-helper-1542df20.js";import{c as ee}from"./headers-d0c66c5d.js";import{_ as te}from"./DataTable-580eca18.js";import{N as k}from"./Button-1c319fcc.js";import{_ as ae}from"./FormItemGridItem-cbf5a76c.js";import{_ as ne}from"./InputNumber-8d34889a.js";import{_ as oe}from"./Upload-e68553b1.js";import"./vue-router-28b6ae4c.js";import"./Icon-02e655d0.js";import"./Warning-3a274335.js";import"./light-d58bdd15.js";import"./light-0eb798f5.js";import"./Remove-0a232454.js";import"./light-213a3a4a.js";import"./Image-4078dd16.js";import"./light-283706ed.js";const De={__name:"ProductsView",setup(se){const x=A(),c=L(),_=f(!1),m=f([]),C={name:{required:!0,message:"這一欄忘了填",trigger:["input","blur"]},price:{type:"number",required:!0,validator(a,t){if(t){if(!/^[1-9]\d*$/.test(t))return new Error("請輸入正整數")}else return new Error("請輸入售價");return!0},trigger:["input","blur"]},description:{required:!0,message:"這一欄忘了填",trigger:["input","blur"]},images:{required:!0,message:"請上傳圖片"},category:{required:!0,message:"請選擇分類"}},U=[{label:"Clothing",value:"clothing"},{label:"Rechords",value:"rechords"},{label:"Accessories",value:"accessories"}],y=f(null),u=b([]),e=b({_id:"",name:"",price:0,description:"",images:[],sell:!1,category:"",dialog:!1,idx:-1}),h=a=>{a===-1?(e._id="",e.name="",e.price=0,e.description="",e.images=[],e.sell=!1,e.category="",e.idx=-1):(e._id=u[a]._id,e.name=u[a].name,e.price=u[a].price,e.description=u[a].description,e.sell=u[a].sell,e.category=u[a].category,e.idx=a,m.value.push(...u[a].images.map((t,o)=>({id:o.toString(),name:o.toString(),status:"finished",url:t}))),e.images=m.value),e.dialog=!0},D=a=>{let t=[],o=[];t=a.fileList.map(p=>p.url).filter(p=>p!==null),o=a.fileList.map(p=>p.file).filter(p=>p!==null),e.images=[...t,...o]},d=()=>{m.value=[],e.dialog=!1},N=async()=>{var a;return(a=y.value)==null||a.validate(async t=>{var o,p;if(t)x.error("請檢查資料是否完整");else{_.value=!0;const l=new FormData;l.append("name",e.name),l.append("price",e.price),l.append("description",e.description),l.append("sell",e.sell),l.append("category",e.category),e.images=e.images.map(s=>s.url?s.url:s);for(const s of e.images)l.append("images",s);try{if(e._id.length===0){const{data:s}=await g.post("/products",l);u.push(s.result),c.success({title:"新增成功",content:"商品新增成功",positiveText:"確認"}),d()}else{const{data:s}=await g.patch("/products/"+e._id,l);u[e.idx]=s.result,c.success({title:"編輯成功",content:"商品編輯成功",positiveText:"確認"}),d()}e.dialog=!1}catch(s){c.error({title:"新增失敗",content:((p=(o=s==null?void 0:s.response)==null?void 0:o.data)==null?void 0:p.message)||"發生錯誤",positiveText:"確認"}),console.log(s)}_.value=!1}}),!1};(async()=>{var a,t;try{const{data:o}=await g.get("/products/all");u.push(...o.result)}catch(o){c.error({title:"載入失敗",content:((t=(a=o==null?void 0:o.response)==null?void 0:a.data)==null?void 0:t.message)||"發生錯誤",positiveText:"確認"})}})();const T=(({edit:a})=>[{title:"商品",key:"name"},{title:"售價",key:"price"},{title:"分類",key:"category"},{title:"",key:"edit",render(t,o){return Y(k,{strong:!0,tertiary:!0,size:"small",onClick:()=>a(t,o)},{default:()=>"編輯"})}}])({edit(a,t){h(t)}});return(a,t)=>{const o=ee,p=P,l=ae,s=Q,q=ne,R=j,B=oe,E=H,F=I,V=J,S=M,$=K,z=te;return W(),Z(G,null,[n(o,{class:"pageTitle"},{default:i(()=>[v(" 商品管理 ")]),_:1}),n(w(k),{onClick:t[0]||(t[0]=r=>h(-1))},{default:i(()=>[v(" 新增商品 ")]),_:1}),n(S,{show:e.dialog,"onUpdate:show":t[7]||(t[7]=r=>e.dialog=r),preset:"dialog",title:"Dialog","negative-text":"取消","positive-text":"送出","mask-closable":!1,"on-negative-click":d,"on-positive-click":N,closable:!1,loading:_.value},{header:i(()=>[O("div",null,X(e._id.length>0?"編輯商品":"新增商品"),1)]),default:i(()=>[n(V,null,{default:i(()=>[n(F,{ref_key:"formRef",ref:y,rules:C,model:e},{default:i(()=>[n(E,{cols:12,"x-gap":12},{default:i(()=>[n(l,{span:10,label:"商品名稱",path:"name"},{default:i(()=>[n(p,{value:e.name,"onUpdate:value":t[1]||(t[1]=r=>e.name=r),placeholder:"給商品取個名字吧！"},null,8,["value"])]),_:1}),n(l,{span:2,label:"上架",path:"sell"},{default:i(()=>[n(s,{value:e.sell,"onUpdate:value":t[2]||(t[2]=r=>e.sell=r)},null,8,["value"])]),_:1}),n(l,{span:6,label:"商品售價",path:"price"},{default:i(()=>[n(q,{value:e.price,"onUpdate:value":t[3]||(t[3]=r=>e.price=r),placeholder:"賣多少錢？"},null,8,["value"])]),_:1}),n(l,{span:6,label:"商品分類",path:"category"},{default:i(()=>[n(R,{value:e.category,"onUpdate:value":t[4]||(t[4]=r=>e.category=r),options:U,"show-checkmark":!1},null,8,["value"])]),_:1}),n(l,{span:12,label:"商品說明",path:"description"},{default:i(()=>[n(p,{value:e.description,"onUpdate:value":t[5]||(t[5]=r=>e.description=r),type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"說說這個商品有多酷！"},null,8,["value"])]),_:1}),n(l,{span:12,label:"商品圖片",path:"images"},{default:i(()=>[n(B,{value:e.images,"onUpdate:value":t[6]||(t[6]=r=>e.images=r),"list-type":"image-card",accept:".jpg,.jpeg,.png,.gif,.bmp,.tiff,.svg,.webp","default-file-list":m.value,multiple:!0,max:12,onChange:D},{default:i(()=>[v(" 上傳圖片 ")]),_:1},8,["value","default-file-list"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["show","loading"]),n($),n(z,{columns:w(T),data:u},null,8,["columns","data"])],64)}}};export{De as default};
