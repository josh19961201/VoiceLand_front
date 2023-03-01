import{P as m,Z as d,D as y}from"./router-695404e9.js";import{ab as c,af as f,a_ as g,ai as s,ah as k,aj as h,aa as x,r as q,b8 as D}from"./plugin-vueexport-helper-93ca072e.js";import{c as P}from"./headers-4ec1fbe9.js";import{_ as r}from"./DataTable-c941df54.js";import"./vue-router-c479bf20.js";import"./Icon-d2f7755d.js";import"./Button-a9e134a7.js";import"./light-63842926.js";const E={__name:"OrdersView",setup(T){const l=m(),i=c([]);(async()=>{var n,a;try{const{data:t}=await d.get("/orders/all");i.push(...t.result.map((e,u)=>(e.totalPrice="$"+e.products.reduce((_,o)=>_+o.p_id.price*o.quantity,0),e.key=u+1,e.date=new Date(e.date).toLocaleDateString(),e.user=e.u_id.account,e)))}catch(t){console.log(t),l.error({title:"失敗",content:((a=(n=t==null?void 0:t.response)==null?void 0:n.data)==null?void 0:a.message)||"取得訂單失敗",positiveText:"再試一次"})}})();const p=c([{type:"expand",renderExpand:n=>{const a=[];for(const t of n.products)a.push({name:t.p_id.name,price:t.p_id.price,quantity:t.quantity,productsTotalPrice:t.p_id.price*t.quantity});return q(r,{size:"small",columns:[{title:"商品名稱",key:"name"},{title:"單價",key:"price"},{title:"數量",key:"quantity"},{title:"商品金額",key:"productsTotalPrice"}],data:a},{})}},{title:"訂單編號",key:"_id"},{title:"訂購人",key:"user"},{title:"日期",key:"date"},{title:"訂單金額",key:"totalPrice"}]);return(n,a)=>{const t=P,e=y;return f(),g(x,null,[s(t,{class:"pageTitle"},{default:k(()=>[D(" 訂單管理 ")]),_:1}),s(e),s(h(r),{size:"large",columns:p,data:i,"default-expand-all":""},null,8,["columns","data"])],64)}}};export{E as default};