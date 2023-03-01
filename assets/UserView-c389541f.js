import{P as j,Q as A,Z as w,aa as B,a5 as N,D as O,_ as H,E as Z,W as G,ab as M}from"./router-6446057b.js";import{b6 as S,a8 as v,J as y,ad as W,a_ as I,a$ as h,ag as a,af as t,r as J,b8 as c,bb as L,ah as Q}from"./plugin-vueexport-helper-1542df20.js";import{c as F,N as K}from"./headers-d0c66c5d.js";import{_ as T}from"./DataTable-e09467ad.js";import{_ as X}from"./FormItemGridItem-7c66574f.js";import{N as Y}from"./Button-a81ecdea.js";import"./vue-router-154c86bc.js";import"./Icon-8a75e956.js";import"./light-d50e1129.js";const ee={class:"container"},ae={class:"inside"},te={class:"btnGroup"},se={class:"btnGroup"},ne={__name:"UserView",setup(re){const m=j(),P=A(),k=v([]),r=v({name:"",email:"",mobilephone:"",address:""}),i=v({originalPassword:"",newPassword:"",passwordConfirm:""}),x=y(null),E=y(null),_=y(!1);(async()=>{var n,e;try{const s=await w.get("/users/me");Object.assign(r,s.data.result);const{data:u}=await w.get("/orders");k.push(...u.result.map((o,d)=>(o.totalPrice="$"+o.products.reduce((p,f)=>p+f.p_id.price*f.quantity,0),o.key=d+1,o.date=new Date(o.date).toLocaleDateString(),o)))}catch(s){m.error({title:"失敗",content:((e=(n=s==null?void 0:s.response)==null?void 0:n.data)==null?void 0:e.message)||"取得資料失敗",positiveText:"再試一次"})}})();const q={email:{required:!0,validator(n,e){if(e){if(!N.isEmail(e))return new Error("Email格式錯誤")}else return new Error("請輸入Email");return!0},trigger:["input","blur"]},mobilephone:{validator(n,e){return e&&!N.isMobilePhone(e,"zh-TW")?new Error("手機格式錯誤"):!0},trigger:["input","blur"]}},D={originalPassword:{required:!0,validator(n,e){if(e)if(e.length>=4&&e.length<=20){if(!/^[A-Za-z0-9]+$/.test(e))return new Error("密碼僅能為大寫、小寫英文字母及數字")}else return new Error("密碼必須為 4 ~ 20 個字");else return new Error("請輸入密碼");return!0},trigger:["input","blur"]},newPassword:{required:!0,validator(n,e){return e&&!/^[A-Za-z0-9]+$/.test(e)?new Error("密碼僅能為大寫、小寫英文字母及數字"):e&&!(e.length>=4&&e.length<=20)?new Error("密碼必須為 4 ~ 20 個字"):!0},trigger:["input","blur"]},passwordConfirm:{required:!0,validator(n,e){return r.newPassword&&e!==r.newPassword?new Error("兩次密碼不一致"):!0},trigger:["input","blur"]}},C=async()=>{const n=await w.get("/users/me");Object.assign(r,n.data.result),Object.assign(i,{originalPassword:"",newPassword:"",passwordConfirm:""})},V=async()=>{var n;(n=E.value)==null||n.validate(async e=>{var s,u;if(e)P.error("請檢查資料是否完整");else{_.value=!0;try{await w.patch("/users/password/"+r._id,i),m.success({title:"成功",content:"密碼修改成功",positiveText:"確認"}),Object.assign(i,{originalPassword:"",newPassword:"",passwordConfirm:""})}catch(o){m.error({title:"失敗",content:((u=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:u.message)||"發生錯誤",positiveText:"確認"})}_.value=!1}})},$=async()=>{var n;(n=x.value)==null||n.validate(async e=>{var s,u;if(e)P.error("請檢查資料是否完整");else{_.value=!0;try{await w.patch("/users/"+r._id,r),m.success({title:"成功",content:"會員資料修改成功",positiveText:"確認"})}catch(o){m.error({title:"失敗",content:((u=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:u.message)||"發生錯誤",positiveText:"確認"})}_.value=!1}})},z=v([{type:"expand",renderExpand:n=>{const e=[];for(const s of n.products)e.push({name:s.p_id.name,price:s.p_id.price,quantity:s.quantity,productsTotalPrice:s.p_id.price*s.quantity});return J(T,{size:"small",columns:[{title:"商品名稱",key:"name"},{title:"單價",key:"price"},{title:"數量",key:"quantity"},{title:"商品金額",key:"productsTotalPrice"}],data:e},{})}},{title:"訂單編號",key:"_id"},{title:"日期",key:"date"},{title:"訂單金額",key:"totalPrice"}]);return(n,e)=>{const s=F,u=O,o=K,d=H,p=X,f=Z,U=G,g=Y,b=M,R=B;return W(),I("div",ee,[h("div",ae,[a(s,{class:"pageTitle"},{default:t(()=>[c(" 會員中心 ")]),_:1}),a(u),a(o,null,{default:t(()=>[c("Hello "+L(r.account)+"！",1)]),_:1}),a(R,{type:"segment"},{default:t(()=>[a(b,{name:"chap1",tab:"會員資料"},{default:t(()=>[a(U,{ref_key:"formRef",ref:x,model:r,rules:q},{default:t(()=>[a(f,{cols:12,"x-gap":24},{default:t(()=>[a(p,{span:6,label:"Name",path:"name"},{default:t(()=>[a(d,{value:r.name,"onUpdate:value":e[0]||(e[0]=l=>r.name=l),placeholder:"請輸入真實姓名，以免影響收貨權益"},null,8,["value"])]),_:1}),a(p,{span:6,label:"Eamil",path:"email"},{default:t(()=>[a(d,{value:r.email,"onUpdate:value":e[1]||(e[1]=l=>r.email=l),placeholder:"請輸入電子信箱"},null,8,["value"])]),_:1}),a(p,{span:6,label:"Phone",path:"mobilephone"},{default:t(()=>[a(d,{value:r.mobilephone,"onUpdate:value":e[2]||(e[2]=l=>r.mobilephone=l),placeholder:"請輸入手機"},null,8,["value"])]),_:1}),a(p,{span:6,label:"Address",path:"address"},{default:t(()=>[a(d,{value:r.address,"onUpdate:value":e[3]||(e[3]=l=>r.address=l),placeholder:"請輸入地址"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model"]),h("div",te,[a(g,{onClick:C},{default:t(()=>[c(" 取消 ")]),_:1}),a(g,{loading:_.value,type:"primary",onClick:$},{default:t(()=>[c(" 修改 ")]),_:1},8,["loading"])])]),_:1}),a(b,{name:"chap2",tab:"歷史訂單"},{default:t(()=>[a(Q(T),{size:"large",columns:z,data:k,"default-expand-all":""},null,8,["columns","data"])]),_:1}),a(b,{name:"chap3",tab:"修改密碼"},{default:t(()=>[a(U,{ref_key:"passwordmRef",ref:E,model:i,rules:D},{default:t(()=>[a(f,{cols:12,"x-gap":24},{default:t(()=>[a(p,{span:12,label:"Password",path:"originalPassword"},{default:t(()=>[a(d,{value:i.originalPassword,"onUpdate:value":e[4]||(e[4]=l=>i.originalPassword=l),type:"password",placeholder:"請輸入原密碼"},null,8,["value"])]),_:1}),a(p,{span:12,label:"New Password",path:"newPassword"},{default:t(()=>[a(d,{value:i.newPassword,"onUpdate:value":e[5]||(e[5]=l=>i.newPassword=l),type:"password",placeholder:"請輸入新密碼"},null,8,["value"])]),_:1}),a(p,{span:12,label:"Confirm New Password",path:"passwordConfirm"},{default:t(()=>[a(d,{value:i.passwordConfirm,"onUpdate:value":e[6]||(e[6]=l=>i.passwordConfirm=l),type:"password",placeholder:"請再次輸入新密碼"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model"]),h("div",se,[a(g,{onClick:C},{default:t(()=>[c(" 取消 ")]),_:1}),a(g,{loading:_.value,type:"primary",onClick:V},{default:t(()=>[c(" 修改 ")]),_:1},8,["loading"])])]),_:1})]),_:1})])])}}},fe=S(ne,[["__scopeId","data-v-20b601b5"]]);export{fe as default};
