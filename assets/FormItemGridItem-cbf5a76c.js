import{a6 as n,V as a,a7 as i,F as m,a8 as p,a9 as _}from"./router-0a69d1ba.js";import{z as r}from"./vue-router-28b6ae4c.js";import{q as u,J as f,r as o}from"./plugin-vueexport-helper-1542df20.js";const l=Object.assign(Object.assign({},p),_),P=u({__GRID_ITEM__:!0,name:"FormItemGridItem",alias:["FormItemGi"],props:l,setup(){const t=f(null);return{formItemInstRef:t,validate:(...e)=>{const{value:s}=t;if(s)return s.validate(...e)},restoreValidation:()=>{const{value:e}=t;if(e)return e.restoreValidation()}}},render(){return o(m,r(this.$.vnode.props||{},i),{default:()=>{const t=r(this.$props,n);return o(a,Object.assign({ref:"formItemInstRef"},t),this.$slots)}})}});export{P as _};
