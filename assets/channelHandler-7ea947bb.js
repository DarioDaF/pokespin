var c=Object.defineProperty;var h=(n,t,e)=>t in n?c(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var s=(n,t,e)=>(h(n,typeof t!="symbol"?t+"":t,e),e);import{R as o}from"./setPicker-5e6d8f4f.js";const r="DaF.FancyRotator",d=r+"{e446921a-e31d-4344-85df-8caa95725bb2}",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";class l{constructor(){s(this,"globalChannel");s(this,"thisInstance");this.globalChannel=new BroadcastChannel(d),this.thisInstance=o.ident(u,6),this.globalChannel.addEventListener("message",t=>{const e=t.data;(e.target===null||e.target===this.thisInstance)&&this.received(e)})}getInstance(){return this.thisInstance}broadcast(t,e=null){this.send(null,t,e)}send(t,e,a=null){this.globalChannel.postMessage({type:e,instance:this.thisInstance,target:t,data:a})}close(){this.globalChannel.close()}}class g extends l{constructor(){super(),this.broadcast("alive",!0)}received(t){t.type==="enumerate"&&this.broadcast("alive",!0)}close(){this.broadcast("alive",!1),super.close()}}class C extends l{constructor(){super();s(this,"clients",new Set);s(this,"onclientschange");this.broadcast("enumerate")}received(e){var a,i;e.type==="alive"&&(e.data?this.clients.has(e.instance)||(this.clients.add(e.instance),(a=this.onclientschange)==null||a.call(this)):this.clients.delete(e.instance)&&((i=this.onclientschange)==null||i.call(this)))}}export{C as M,g as a};
