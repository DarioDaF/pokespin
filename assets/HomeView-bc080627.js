import{S as y,g as w,a as C}from"./setPicker-5e6d8f4f.js";import{_ as S}from"./FancySpinner.vue_vue_type_style_index_0_lang-82d31b95.js";import{d as b,r as a,w as V,o as c,c as m,a as r,t as N,b as h,u as p,F as x,e as F,n as z,f as B}from"./index-a3727685.js";const P=["src","onClick"],U=b({__name:"HomeView",async setup($){let i,d;const o=a(!1),t=new y(([i,d]=V(()=>w()),i=await i,d(),i));window.picker=t;const f=a(t.subset[0]),l=a(new Set),_=a(null);function v(n,s){const e=l.value.has(n);s!==e&&(e?(l.value.delete(n),t.markNotConsumed(n)):(l.value.add(n),t.markConsumed(n)))}const u=a(!1);function g(){_.value.start()}function k(n){console.warn(n.identifier)}return(n,s)=>(c(),m("main",null,[r("p",null,N(o.value?"SPINNING":""),1),r("button",{onClick:g,class:"my--home--bigbtn"},"Start anim"),h(S,{ref_key:"spinner",ref:_,picker:p(t),modelValue:f.value,"onUpdate:modelValue":[s[0]||(s[0]=e=>f.value=e),k],spinning:o.value,"onUpdate:spinning":s[1]||(s[1]=e=>o.value=e)},null,8,["picker","modelValue","spinning"]),r("button",{onClick:s[2]||(s[2]=e=>u.value=!u.value)},"Show all"),r("div",{id:"preload-zone",style:z({display:u.value?"":"none"})},[(c(!0),m(x,null,F(p(t).subset,e=>(c(),m("img",{key:e.id,src:p(C)(e.id,e.sprite.gen,e.sprite.shiny),class:B({"my--picked":l.value.has(e.id)}),onClick:A=>v(e.id)},null,10,P))),128))],4)]))}});export{U as default};
