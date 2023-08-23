var Dt=Object.defineProperty;var Nt=(e,t,r)=>t in e?Dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var L=(e,t,r)=>(Nt(e,typeof t!="symbol"?t+"":t,r),r);import{e as jt,f as kt,R as Q,a as Gt,N as Ut}from"./setPicker-5e6d8f4f.js";import{d as Ee,r as V,k as Le,o as Fe,c as Ae,a as ne,x as He,y as qe,z as Vt,A as zt,p as $t,u as we,B as Lt,n as nt,C as Ht,q as qt,b as We,j as Wt,t as Yt}from"./index-a3727685.js";const Kt={class:"my--spinning3d-dyn--any"},Zt={class:"my--spinning3d-dyn--any my--spinning3d-dyn--alt"},Xt=Ee({__name:"Spinning3DDyn",props:{time:{},props:{}},emits:["spun"],setup(e,{emit:t}){const r=e,n=V();let s=!1;const c=V({...r.props}),i=V();let f;return Le(()=>r.time,()=>{f==null||f.updatePlaybackRate(1/r.time)}),Le(()=>r.props.key,async()=>{var p;const o=we(r.props.key);s?c.value={...r.props}:i.value={...r.props},s=!s;const a=s?[{transform:"rotateY(0deg)"},{transform:"rotateY(180deg)"}]:[{transform:"rotateY(180deg)"},{transform:"rotateY(360deg)"}];f!==void 0&&f.finish(),f=(p=n.value)==null?void 0:p.animate(a,{duration:1e3,playbackRate:1/r.time,iterations:1,fill:"forwards"}),await(f==null?void 0:f.finished),f=void 0,t("spun",o)}),(o,a)=>(Fe(),Ae("div",{ref_key:"myBlock",ref:n,class:"my--spinning3d-dyn--container"},[ne("div",Kt,[He(o.$slots,"default",qe(Vt(c.value)))]),ne("div",Zt,[i.value!==void 0?He(o.$slots,"default",qe(zt({key:0},i.value))):$t("",!0)])],512))}});var at={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(kt,function(){var r=function(o){return o.reduce(function(a,p){return a*2+p},0)},n=function(o){for(var a=[],p=7;p>=0;p--)a.push(!!(o&1<<p));return a},s=function(o){this.data=o,this.len=this.data.length,this.pos=0,this.readByte=function(){if(this.pos>=this.data.length)throw new Error("Attempted to read past end of stream.");return o instanceof Uint8Array?o[this.pos++]:o.charCodeAt(this.pos++)&255},this.readBytes=function(a){for(var p=[],m=0;m<a;m++)p.push(this.readByte());return p},this.read=function(a){for(var p="",m=0;m<a;m++)p+=String.fromCharCode(this.readByte());return p},this.readUnsigned=function(){var a=this.readBytes(2);return(a[1]<<8)+a[0]}},c=function(o,a){for(var p=0,m=function(h){for(var _=0,b=0;b<h;b++)a.charCodeAt(p>>3)&1<<(p&7)&&(_|=1<<b),p++;return _},v=[],C=1<<o,F=C+1,O=o+1,x=[],l=function(){x=[],O=o+1;for(var h=0;h<C;h++)x[h]=[h];x[C]=[],x[F]=null},d,y;;){if(y=d,d=m(O),d===C){l();continue}if(d===F)break;if(d<x.length)y!==C&&x.push(x[y].concat(x[d][0]));else{if(d!==x.length)throw new Error("Invalid LZW code.");x.push(x[y].concat(x[y][0]))}v.push.apply(v,x[d]),x.length===1<<O&&O<12&&O++}return v},i=function(o,a){a||(a={});var p=function(l){for(var d=[],y=0;y<l;y++)d.push(o.readBytes(3));return d},m=function(){var l,d;d="";do l=o.readByte(),d+=o.read(l);while(l!==0);return d},v=function(){var l={};if(l.sig=o.read(3),l.ver=o.read(3),l.sig!=="GIF")throw new Error("Not a GIF file.");l.width=o.readUnsigned(),l.height=o.readUnsigned();var d=n(o.readByte());l.gctFlag=d.shift(),l.colorRes=r(d.splice(0,3)),l.sorted=d.shift(),l.gctSize=r(d.splice(0,3)),l.bgColor=o.readByte(),l.pixelAspectRatio=o.readByte(),l.gctFlag&&(l.gct=p(1<<l.gctSize+1)),a.hdr&&a.hdr(l)},C=function(l){var d=function(g){o.readByte();var T=n(o.readByte());g.reserved=T.splice(0,3),g.disposalMethod=r(T.splice(0,3)),g.userInput=T.shift(),g.transparencyGiven=T.shift(),g.delayTime=o.readUnsigned(),g.transparencyIndex=o.readByte(),g.terminator=o.readByte(),a.gce&&a.gce(g)},y=function(g){g.comment=m(),a.com&&a.com(g)},h=function(g){o.readByte(),g.ptHeader=o.readBytes(12),g.ptData=m(),a.pte&&a.pte(g)},_=function(g){var T=function(S){o.readByte(),S.unknown=o.readByte(),S.iterations=o.readUnsigned(),S.terminator=o.readByte(),a.app&&a.app.NETSCAPE&&a.app.NETSCAPE(S)},N=function(S){S.appData=m(),a.app&&a.app[S.identifier]&&a.app[S.identifier](S)};switch(o.readByte(),g.identifier=o.read(8),g.authCode=o.read(3),g.identifier){case"NETSCAPE":T(g);break;default:N(g);break}},b=function(g){g.data=m(),a.unknown&&a.unknown(g)};switch(l.label=o.readByte(),l.label){case 249:l.extType="gce",d(l);break;case 254:l.extType="com",y(l);break;case 1:l.extType="pte",h(l);break;case 255:l.extType="app",_(l);break;default:l.extType="unknown",b(l);break}},F=function(l){var d=function(_,b){for(var g=new Array(_.length),T=_.length/b,N=function(Y,ie){var he=_.slice(ie*b,(ie+1)*b);g.splice.apply(g,[Y*b,b].concat(he))},S=[0,4,2,1],q=[8,8,4,2],W=0,G=0;G<4;G++)for(var j=S[G];j<T;j+=q[G])N(j,W),W++;return g};l.leftPos=o.readUnsigned(),l.topPos=o.readUnsigned(),l.width=o.readUnsigned(),l.height=o.readUnsigned();var y=n(o.readByte());l.lctFlag=y.shift(),l.interlaced=y.shift(),l.sorted=y.shift(),l.reserved=y.splice(0,2),l.lctSize=r(y.splice(0,3)),l.lctFlag&&(l.lct=p(1<<l.lctSize+1)),l.lzwMinCodeSize=o.readByte();var h=m();l.pixels=c(l.lzwMinCodeSize,h),l.interlaced&&(l.pixels=d(l.pixels,l.width)),a.img&&a.img(l)},O=function(){var l={};switch(l.sentinel=o.readByte(),String.fromCharCode(l.sentinel)){case"!":l.type="ext",C(l);break;case",":l.type="img",F(l);break;case";":l.type="eof",a.eof&&a.eof(l);break;default:throw new Error("Unknown block: 0x"+l.sentinel.toString(16))}l.type!=="eof"&&setTimeout(O,0)},x=function(){v(),setTimeout(O,0)};x()},f=function(o){var a={vp_l:0,vp_t:0,vp_w:null,vp_h:null,c_w:null,c_h:null};for(var p in o)a[p]=o[p];a.vp_w&&a.vp_h&&(a.is_vp=!0);var m,v,C=null,F=!1,O=null,x=null,l=null,d=null,y=null,h=null,_=null,b=!0,g=!1,T=[],N=[],S=a.gif;typeof a.auto_play>"u"&&(a.auto_play=!S.getAttribute("rel:auto_play")||S.getAttribute("rel:auto_play")=="1");var q=a.hasOwnProperty("on_end")?a.on_end:null,W=a.hasOwnProperty("loop_delay")?a.loop_delay:0,G=a.hasOwnProperty("loop_mode")?a.loop_mode:"auto",j=a.hasOwnProperty("draw_while_loading")?a.draw_while_loading:!0,Y=j?a.hasOwnProperty("show_progress_bar")?a.show_progress_bar:!0:!1,ie=a.hasOwnProperty("progressbar_height")?a.progressbar_height:25,he=a.hasOwnProperty("progressbar_background_color")?a.progressbar_background_color:"rgba(255,255,255,0.4)",Ot=a.hasOwnProperty("progressbar_foreground_color")?a.progressbar_foreground_color:"rgba(255,0,22,.8)",Re=function(){O=null,x=null,y=l,l=null,h=null},De=function(){try{i(m,It)}catch{me("parse")}},Ne=function(u,w){P.width=u*A(),P.height=w*A(),X.style.minWidth=u*A()+"px",k.width=u,k.height=w,k.style.width=u+"px",k.style.height=w+"px",k.getContext("2d").setTransform(1,0,0,1,0,0)},Et=function(u,w){if(!N[u]){N[u]=w;return}typeof w.x<"u"&&(N[u].x=w.x),typeof w.y<"u"&&(N[u].y=w.y)},je=function(u,w,E){if(E&&Y){var M=ie,I,R,$,K;a.is_vp?g?($=(a.vp_t+a.vp_h-M)/A(),M=M/A(),I=a.vp_l/A(),R=I+u/w*(a.vp_w/A()),K=P.width/A()):($=a.vp_t+a.vp_h-M,M=M,I=a.vp_l,R=I+u/w*a.vp_w,K=P.width):($=(P.height-M)/(g?A():1),R=u/w*P.width/(g?A():1),K=P.width/(g?A():1),M/=g?A():1),B.fillStyle=he,B.fillRect(R,$,K-R,M),B.fillStyle=Ot,B.fillRect(0,$,R,M)}},me=function(u){var w=function(){B.fillStyle="black",B.fillRect(0,0,a.c_w?a.c_w:v.width,a.c_h?a.c_h:v.height),B.strokeStyle="red",B.lineWidth=3,B.moveTo(0,0),B.lineTo(a.c_w?a.c_w:v.width,a.c_h?a.c_h:v.height),B.moveTo(0,a.c_h?a.c_h:v.height),B.lineTo(a.c_w?a.c_w:v.width,0),B.stroke()};C=u,v={width:S.width,height:S.height},T=[],w()},Ft=function(u){v=u,Ne(v.width,v.height)},At=function(u){ke(),Re(),O=u.transparencyGiven?u.transparencyIndex:null,x=u.delayTime,l=u.disposalMethod},ke=function(){h&&(T.push({data:h.getImageData(0,0,v.width,v.height),delay:x}),N.push({x:0,y:0}))},Bt=function(u){h||(h=k.getContext("2d"));var w=T.length,E=u.lctFlag?u.lct:v.gct;w>0&&(y===3?d!==null?h.putImageData(T[d].data,0,0):h.clearRect(_.leftPos,_.topPos,_.width,_.height):d=w-1,y===2&&h.clearRect(_.leftPos,_.topPos,_.width,_.height));var M=h.getImageData(u.leftPos,u.topPos,u.width,u.height);u.pixels.forEach(function(I,R){I!==O&&(M.data[R*4+0]=E[I][0],M.data[R*4+1]=E[I][1],M.data[R*4+2]=E[I][2],M.data[R*4+3]=255)}),h.putImageData(M,u.leftPos,u.topPos),g||(B.scale(A(),A()),g=!0),j&&(B.drawImage(k,0,0),j=a.auto_play),_=u},z=function(){var u=-1,w=0,E=function(){var D=1;return(u+D+T.length)%T.length},M=function(D){u=u+D,R()},I=function(){var D=!1,Pt=function(){q!==null&&q(S),w++,G!==!1||w<0?ge():(D=!1,b=!1)},ge=function(){if(D=b,!!D){M(1);var J=T[u].delay*10;J||(J=100);var Rt=E();Rt===0?(J+=W,setTimeout(Pt,J)):setTimeout(ge,J)}};return function(){D||setTimeout(ge,0)}}(),R=function(){var D;u=parseInt(u,10),u>T.length-1&&(u=0),u<0&&(u=0),D=N[u],k.getContext("2d").putImageData(T[u].data,D.x,D.y),B.globalCompositeOperation="copy",B.drawImage(k,0,0)},$=function(){b=!0,I()},K=function(){b=!1};return{init:function(){C||(a.c_w&&a.c_h||B.scale(A(),A()),a.auto_play?I():(u=0,R()))},step:I,play:$,pause:K,playing:b,move_relative:M,current_frame:function(){return u},length:function(){return T.length},move_to:function(D){u=D,R()}}}(),Ge=function(u){je(m.pos,m.data.length,u)},Ue=function(){},Z=function(u,w){return function(E){u(E),Ge(w)}},It={hdr:Z(Ft),gce:Z(At),com:Z(Ue),app:{NETSCAPE:Z(Ue)},img:Z(Bt,!0),eof:function(u){ke(),Ge(!1),a.c_w&&a.c_h||(P.width=v.width*A(),P.height=v.height*A()),z.init(),F=!1,le&&le(S)}},Ve=function(){var u=S.parentNode,w=document.createElement("div");P=document.createElement("canvas"),B=P.getContext("2d"),X=document.createElement("div"),k=document.createElement("canvas"),w.width=P.width=S.width,w.height=P.height=S.height,X.style.minWidth=S.width+"px",w.className="jsgif",X.className="jsgif_toolbar",w.appendChild(P),w.appendChild(X),u.insertBefore(w,S),u.removeChild(S),a.c_w&&a.c_h&&Ne(a.c_w,a.c_h),ye=!0},A=function(){var u;return a.max_width&&v&&v.width>a.max_width?u=a.max_width/v.width:u=1,u},P,B,X,k,ye=!1,le=!1,ze=function(u){return F?!1:(u?le=u:le=!1,F=!0,T=[],Re(),d=null,y=null,h=null,_=null,!0)},$e=function(){return T.reduce(function(u,w){return u+w.delay},0)};return{play:z.play,pause:z.pause,move_relative:z.move_relative,move_to:z.move_to,get_playing:function(){return b},get_canvas:function(){return P},get_canvas_scale:function(){return A()},get_loading:function(){return F},get_auto_play:function(){return a.auto_play},get_length:function(){return z.length()},get_frames:function(){return T},get_duration:function(){return $e()},get_duration_ms:function(){return $e()*10},get_current_frame:function(){return z.current_frame()},load_url:function(u,w){if(ze(w)){var E=new XMLHttpRequest;E.open("GET",u,!0),"overrideMimeType"in E?E.overrideMimeType("text/plain; charset=x-user-defined"):"responseType"in E?E.responseType="arraybuffer":E.setRequestHeader("Accept-Charset","x-user-defined"),E.onloadstart=function(){ye||Ve()},E.onload=function(M){this.status!=200&&me("xhr - response"),"response"in this||(this.response=new VBArray(this.responseText).toArray().map(String.fromCharCode).join(""));var I=this.response;I.toString().indexOf("ArrayBuffer")>0&&(I=new Uint8Array(I)),m=new s(I),setTimeout(De,0)},E.onprogress=function(M){M.lengthComputable&&je(M.loaded,M.total,!0)},E.onerror=function(){me("xhr")},E.send()}},load:function(u){this.load_url(S.getAttribute("rel:animated_src")||S.src,u)},load_raw:function(u,w){ze(w)&&(ye||Ve(),m=new s(u),setTimeout(De,0))},set_frame_offset:Et}};return f})})(at);var Jt=at.exports;const Ye=jt(Jt),Qt=Ee({__name:"ProgrammaticGif",props:{src:{}},setup(e,{expose:t}){const r=e,n=V(null),s=V(!1);let c;Lt(()=>{window.SuperGif=Ye,c=Ye({gif:n.value,loop_mode:!1,auto_play:!1,on_end:()=>s.value=!1}),c==null||c.load_url(r.src,()=>{})});function i(){s.value=!0,c==null||c.play()}return t({play:i}),(f,o)=>(Fe(),Ae("div",{style:nt({visibility:s.value?"inherit":"hidden"})},[ne("img",{ref_key:"myImg",ref:n},null,512)],4))}});function st(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r}var er=function(){},Ke=function(){};const be=(e,t,r)=>Math.min(Math.max(r,e),t),ve=.001,tr=.01,Ze=10,rr=.05,nr=1;function ar({duration:e=800,bounce:t=.25,velocity:r=0,mass:n=1}){let s,c;er(e<=Ze*1e3);let i=1-t;i=be(rr,nr,i),e=be(tr,Ze,e/1e3),i<1?(s=a=>{const p=a*i,m=p*e,v=p-r,C=Se(a,i),F=Math.exp(-m);return ve-v/C*F},c=a=>{const m=a*i*e,v=m*r+r,C=Math.pow(i,2)*Math.pow(a,2)*e,F=Math.exp(-m),O=Se(Math.pow(a,2),i);return(-s(a)+ve>0?-1:1)*((v-C)*F)/O}):(s=a=>{const p=Math.exp(-a*e),m=(a-r)*e+1;return-ve+p*m},c=a=>{const p=Math.exp(-a*e),m=(r-a)*(e*e);return p*m});const f=5/e,o=or(s,c,f);if(e=e*1e3,isNaN(o))return{stiffness:100,damping:10,duration:e};{const a=Math.pow(o,2)*n;return{stiffness:a,damping:i*2*Math.sqrt(n*a),duration:e}}}const sr=12;function or(e,t,r){let n=r;for(let s=1;s<sr;s++)n=n-e(n)/t(n);return n}function Se(e,t){return e*Math.sqrt(1-t*t)}const ir=["duration","bounce"],lr=["stiffness","damping","mass"];function Xe(e,t){return t.some(r=>e[r]!==void 0)}function cr(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Xe(e,lr)&&Xe(e,ir)){const r=ar(e);t=Object.assign(Object.assign(Object.assign({},t),r),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Be(e){var{from:t=0,to:r=1,restSpeed:n=2,restDelta:s}=e,c=st(e,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:f,damping:o,mass:a,velocity:p,duration:m,isResolvedFromDuration:v}=cr(c),C=Je,F=Je;function O(){const x=p?-(p/1e3):0,l=r-t,d=o/(2*Math.sqrt(f*a)),y=Math.sqrt(f/a)/1e3;if(s===void 0&&(s=Math.min(Math.abs(r-t)/100,.4)),d<1){const h=Se(y,d);C=_=>{const b=Math.exp(-d*y*_);return r-b*((x+d*y*l)/h*Math.sin(h*_)+l*Math.cos(h*_))},F=_=>{const b=Math.exp(-d*y*_);return d*y*b*(Math.sin(h*_)*(x+d*y*l)/h+l*Math.cos(h*_))-b*(Math.cos(h*_)*(x+d*y*l)-h*l*Math.sin(h*_))}}else if(d===1)C=h=>r-Math.exp(-y*h)*(l+(x+y*l)*h);else{const h=y*Math.sqrt(d*d-1);C=_=>{const b=Math.exp(-d*y*_),g=Math.min(h*_,300);return r-b*((x+d*y*l)*Math.sinh(g)+h*l*Math.cosh(g))/h}}}return O(),{next:x=>{const l=C(x);if(v)i.done=x>=m;else{const d=F(x)*1e3,y=Math.abs(d)<=n,h=Math.abs(r-l)<=s;i.done=y&&h}return i.value=i.done?r:l,i},flipTarget:()=>{p=-p,[t,r]=[r,t],O()}}}Be.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Je=e=>0,ot=(e,t,r)=>{const n=t-e;return n===0?1:(r-e)/n},Ie=(e,t,r)=>-r*e+r*t+e,it=(e,t)=>r=>Math.max(Math.min(r,t),e),ee=e=>e%1?Number(e.toFixed(5)):e,ue=/(-)?([\d]*\.?[\d])+/g,Te=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,ur=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function se(e){return typeof e=="string"}const fe={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},lt=Object.assign(Object.assign({},fe),{transform:it(0,1)});Object.assign(Object.assign({},fe),{default:1});const fr=e=>({test:t=>se(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),te=fr("%");Object.assign(Object.assign({},te),{parse:e=>te.parse(e)/100,transform:e=>te.transform(e*100)});const Pe=(e,t)=>r=>!!(se(r)&&ur.test(r)&&r.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(r,t)),ct=(e,t,r)=>n=>{if(!se(n))return n;const[s,c,i,f]=n.match(ue);return{[e]:parseFloat(s),[t]:parseFloat(c),[r]:parseFloat(i),alpha:f!==void 0?parseFloat(f):1}},H={test:Pe("hsl","hue"),parse:ct("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:r,alpha:n=1})=>"hsla("+Math.round(e)+", "+te.transform(ee(t))+", "+te.transform(ee(r))+", "+ee(lt.transform(n))+")"},pr=it(0,255),_e=Object.assign(Object.assign({},fe),{transform:e=>Math.round(pr(e))}),U={test:Pe("rgb","red"),parse:ct("red","green","blue"),transform:({red:e,green:t,blue:r,alpha:n=1})=>"rgba("+_e.transform(e)+", "+_e.transform(t)+", "+_e.transform(r)+", "+ee(lt.transform(n))+")"};function dr(e){let t="",r="",n="",s="";return e.length>5?(t=e.substr(1,2),r=e.substr(3,2),n=e.substr(5,2),s=e.substr(7,2)):(t=e.substr(1,1),r=e.substr(2,1),n=e.substr(3,1),s=e.substr(4,1),t+=t,r+=r,n+=n,s+=s),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:s?parseInt(s,16)/255:1}}const Me={test:Pe("#"),parse:dr,transform:U.transform},pe={test:e=>U.test(e)||Me.test(e)||H.test(e),parse:e=>U.test(e)?U.parse(e):H.test(e)?H.parse(e):Me.parse(e),transform:e=>se(e)?e:e.hasOwnProperty("red")?U.transform(e):H.transform(e)},ut="${c}",ft="${n}";function hr(e){var t,r,n,s;return isNaN(e)&&se(e)&&((r=(t=e.match(ue))===null||t===void 0?void 0:t.length)!==null&&r!==void 0?r:0)+((s=(n=e.match(Te))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)>0}function pt(e){typeof e=="number"&&(e=`${e}`);const t=[];let r=0;const n=e.match(Te);n&&(r=n.length,e=e.replace(Te,ut),t.push(...n.map(pe.parse)));const s=e.match(ue);return s&&(e=e.replace(ue,ft),t.push(...s.map(fe.parse))),{values:t,numColors:r,tokenised:e}}function dt(e){return pt(e).values}function ht(e){const{values:t,numColors:r,tokenised:n}=pt(e),s=t.length;return c=>{let i=n;for(let f=0;f<s;f++)i=i.replace(f<r?ut:ft,f<r?pe.transform(c[f]):ee(c[f]));return i}}const mr=e=>typeof e=="number"?0:e;function yr(e){const t=dt(e);return ht(e)(t.map(mr))}const mt={test:hr,parse:dt,createTransformer:ht,getAnimatableNone:yr};function xe(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Qe({hue:e,saturation:t,lightness:r,alpha:n}){e/=360,t/=100,r/=100;let s=0,c=0,i=0;if(!t)s=c=i=r;else{const f=r<.5?r*(1+t):r+t-r*t,o=2*r-f;s=xe(o,f,e+1/3),c=xe(o,f,e),i=xe(o,f,e-1/3)}return{red:Math.round(s*255),green:Math.round(c*255),blue:Math.round(i*255),alpha:n}}const gr=(e,t,r)=>{const n=e*e,s=t*t;return Math.sqrt(Math.max(0,r*(s-n)+n))},vr=[Me,U,H],et=e=>vr.find(t=>t.test(e)),yt=(e,t)=>{let r=et(e),n=et(t),s=r.parse(e),c=n.parse(t);r===H&&(s=Qe(s),r=U),n===H&&(c=Qe(c),n=U);const i=Object.assign({},s);return f=>{for(const o in i)o!=="alpha"&&(i[o]=gr(s[o],c[o],f));return i.alpha=Ie(s.alpha,c.alpha,f),r.transform(i)}},_r=e=>typeof e=="number",xr=(e,t)=>r=>t(e(r)),gt=(...e)=>e.reduce(xr);function vt(e,t){return _r(e)?r=>Ie(e,t,r):pe.test(e)?yt(e,t):xt(e,t)}const _t=(e,t)=>{const r=[...e],n=r.length,s=e.map((c,i)=>vt(c,t[i]));return c=>{for(let i=0;i<n;i++)r[i]=s[i](c);return r}},wr=(e,t)=>{const r=Object.assign(Object.assign({},e),t),n={};for(const s in r)e[s]!==void 0&&t[s]!==void 0&&(n[s]=vt(e[s],t[s]));return s=>{for(const c in n)r[c]=n[c](s);return r}};function tt(e){const t=mt.parse(e),r=t.length;let n=0,s=0,c=0;for(let i=0;i<r;i++)n||typeof t[i]=="number"?n++:t[i].hue!==void 0?c++:s++;return{parsed:t,numNumbers:n,numRGB:s,numHSL:c}}const xt=(e,t)=>{const r=mt.createTransformer(t),n=tt(e),s=tt(t);return n.numHSL===s.numHSL&&n.numRGB===s.numRGB&&n.numNumbers>=s.numNumbers?gt(_t(n.parsed,s.parsed),r):i=>`${i>0?t:e}`},br=(e,t)=>r=>Ie(e,t,r);function Sr(e){if(typeof e=="number")return br;if(typeof e=="string")return pe.test(e)?yt:xt;if(Array.isArray(e))return _t;if(typeof e=="object")return wr}function Tr(e,t,r){const n=[],s=r||Sr(e[0]),c=e.length-1;for(let i=0;i<c;i++){let f=s(e[i],e[i+1]);if(t){const o=Array.isArray(t)?t[i]:t;f=gt(o,f)}n.push(f)}return n}function Mr([e,t],[r]){return n=>r(ot(e,t,n))}function Cr(e,t){const r=e.length,n=r-1;return s=>{let c=0,i=!1;if(s<=e[0]?i=!0:s>=e[n]&&(c=n-1,i=!0),!i){let o=1;for(;o<r&&!(e[o]>s||o===n);o++);c=o-1}const f=ot(e[c],e[c+1],s);return t[c](f)}}function wt(e,t,{clamp:r=!0,ease:n,mixer:s}={}){const c=e.length;Ke(c===t.length),Ke(!n||!Array.isArray(n)||n.length===c-1),e[0]>e[c-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const i=Tr(t,n,s),f=c===2?Mr(e,i):Cr(e,i);return r?o=>f(be(e[0],e[c-1],o)):f}const Or=e=>t=>1-e(1-t),Er=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Fr=e=>t=>Math.pow(t,e),Ar=e=>t=>t*t*((e+1)*t-e),Br=e=>{const t=Ar(e);return r=>(r*=2)<1?.5*t(r):.5*(2-Math.pow(2,-10*(r-1)))},Ir=1.525,Pr=e=>e,bt=Fr(2),Rr=Or(bt),Dr=Er(bt);Br(Ir);function Nr(e,t){return e.map(()=>t||Dr).splice(0,e.length-1)}function jr(e){const t=e.length;return e.map((r,n)=>n!==0?n/(t-1):0)}function kr(e,t){return e.map(r=>r*t)}function ce({from:e=0,to:t=1,ease:r,offset:n,duration:s=300}){const c={done:!1,value:e},i=Array.isArray(t)?t:[e,t],f=kr(n&&n.length===i.length?n:jr(i),s);function o(){return wt(f,i,{ease:Array.isArray(r)?r:Nr(i,r)})}let a=o();return{next:p=>(c.value=a(p),c.done=p>=s,c),flipTarget:()=>{i.reverse(),a=o()}}}function Gr({velocity:e=0,from:t=0,power:r=.8,timeConstant:n=350,restDelta:s=.5,modifyTarget:c}){const i={done:!1,value:t};let f=r*e;const o=t+f,a=c===void 0?o:c(o);return a!==o&&(f=a-t),{next:p=>{const m=-f*Math.exp(-p/n);return i.done=!(m>s||m<-s),i.value=i.done?a:a+m,i},flipTarget:()=>{}}}const rt={keyframes:ce,spring:Be,decay:Gr};function Ur(e){if(Array.isArray(e.to))return ce;if(rt[e.type])return rt[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?ce:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Be:ce}const St=1/60*1e3,Vr=typeof performance<"u"?()=>performance.now():()=>Date.now(),Tt=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(Vr()),St);function zr(e){let t=[],r=[],n=0,s=!1,c=!1;const i=new WeakSet,f={schedule:(o,a=!1,p=!1)=>{const m=p&&s,v=m?t:r;return a&&i.add(o),v.indexOf(o)===-1&&(v.push(o),m&&s&&(n=t.length)),o},cancel:o=>{const a=r.indexOf(o);a!==-1&&r.splice(a,1),i.delete(o)},process:o=>{if(s){c=!0;return}if(s=!0,[t,r]=[r,t],r.length=0,n=t.length,n)for(let a=0;a<n;a++){const p=t[a];p(o),i.has(p)&&(f.schedule(p),e())}s=!1,c&&(c=!1,f.process(o))}};return f}const $r=40;let Ce=!0,ae=!1,Oe=!1;const re={delta:0,timestamp:0},oe=["read","update","preRender","render","postRender"],de=oe.reduce((e,t)=>(e[t]=zr(()=>ae=!0),e),{}),Lr=oe.reduce((e,t)=>{const r=de[t];return e[t]=(n,s=!1,c=!1)=>(ae||Wr(),r.schedule(n,s,c)),e},{}),Hr=oe.reduce((e,t)=>(e[t]=de[t].cancel,e),{});oe.reduce((e,t)=>(e[t]=()=>de[t].process(re),e),{});const qr=e=>de[e].process(re),Mt=e=>{ae=!1,re.delta=Ce?St:Math.max(Math.min(e-re.timestamp,$r),1),re.timestamp=e,Oe=!0,oe.forEach(qr),Oe=!1,ae&&(Ce=!1,Tt(Mt))},Wr=()=>{ae=!0,Ce=!0,Oe||Tt(Mt)};function Ct(e,t,r=0){return e-t-r}function Yr(e,t,r=0,n=!0){return n?Ct(t+-e,t,r):t-(e-t)+r}function Kr(e,t,r,n){return n?e>=t+r:e<=-r}const Zr=e=>{const t=({delta:r})=>e(r);return{start:()=>Lr.update(t,!0),stop:()=>Hr.update(t)}};function Xr(e){var t,r,{from:n,autoplay:s=!0,driver:c=Zr,elapsed:i=0,repeat:f=0,repeatType:o="loop",repeatDelay:a=0,onPlay:p,onStop:m,onComplete:v,onRepeat:C,onUpdate:F}=e,O=st(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:x}=O,l,d=0,y=O.duration,h,_=!1,b=!0,g;const T=Ur(O);!((r=(t=T).needsInterpolation)===null||r===void 0)&&r.call(t,n,x)&&(g=wt([0,100],[n,x],{clamp:!1}),n=0,x=100);const N=T(Object.assign(Object.assign({},O),{from:n,to:x}));function S(){d++,o==="reverse"?(b=d%2===0,i=Yr(i,y,a,b)):(i=Ct(i,y,a),o==="mirror"&&N.flipTarget()),_=!1,C&&C()}function q(){l.stop(),v&&v()}function W(j){if(b||(j=-j),i+=j,!_){const Y=N.next(Math.max(0,i));h=Y.value,g&&(h=g(h)),_=b?Y.done:i<=0}F==null||F(h),_&&(d===0&&(y??(y=i)),d<f?Kr(i,y,a,b)&&S():q())}function G(){p==null||p(),l=c(W),l.start()}return s&&G(),{stop:()=>{m==null||m(),l.stop()}}}function Jr(e,t){return new Array(e).fill(void 0).map(t)}class Qr{constructor(){L(this,"frames",[])}add(t,r=0,n=Pr){this.frames.push({duration:r,value:t,easing:n})}getOptions(){const t=[],r=this.frames.reduce((n,s)=>{const c=n+s.duration;return t.push(c),c},0);return{duration:r*1e3,to:this.frames.map(n=>n.value),offset:t.map(n=>n/r),ease:this.frames.map(n=>n.easing).slice(1)}}}class en{constructor(t,r,n){L(this,"time");L(this,"finished");L(this,"next");L(this,"stopAnim");L(this,"isSpinning",!1);this.time=t,this.next=r,this.finished=n}get isFinishedAnim(){return this.stopAnim===void 0}tryNext(){this.next()?this.isSpinning=!0:(this.isSpinning=!1,this.stop(),this.finished(!1))}spun(){this.isFinishedAnim?(this.isSpinning=!1,this.finished(!0)):this.tryNext()}start(){this.stop();const t=Q.chooseProb([[1,1],[2,1],[3,.2],[4,.2],[5,.01]]),r=Jr(t,()=>{const c=Q.floatRange(.2,.3),i=Q.floatRange(.4,.55);return{startSpeed:c,endSpeed:i,duration:(i-c)*10+Q.float(1.5),slowDuration:Q.floatRange(2,4)}}),n=new Qr;let s=!0;for(const c of r)n.add(c.startSpeed,s?0:.5),n.add(c.endSpeed,c.duration,Rr),n.add(c.endSpeed,c.slowDuration),s=!1;this.animate(n.getOptions()),this.isSpinning||this.tryNext()}animate(t){this.stopAnim=Xr({...t,onUpdate:r=>this.time.value=r,onComplete:()=>this.stopAnim=void 0}).stop}stop(){var t;(t=this.stopAnim)==null||t.call(this)}}const tn={style:{position:"relative"}},rn={style:{position:"absolute","z-index":"100",bottom:"0",left:"0",right:"0"}},on=Ee({__name:"FancySpinner",props:{picker:{},modelValue:{}},emits:["update:modelValue","update:spinning"],setup(e,{expose:t,emit:r}){const n=e,s=V(null),c=V(1),i=V(n.modelValue??n.picker.subset[0]);Ht(()=>{n.modelValue!==void 0&&(i.value=n.modelValue)});const f=new en(c,o,()=>{s.value.play(),r("update:spinning",!1),r("update:modelValue",i.value)});qt(()=>{f.stop()});function o(){try{i.value=n.picker.pickAvoiding(i.value.id)}catch(p){if(!(p instanceof Ut))throw p;return!1}return!0}function a(){f.start(),r("update:spinning",!0)}return t({start:a}),(p,m)=>(Fe(),Ae("div",tn,[We(Xt,{"cancel-current":"",class:"my--fancyspinner--box",time:c.value,props:{poke:i.value,key:i.value.id},onSpun:m[0]||(m[0]=v=>we(f).spun())},{default:Wt(({poke:v})=>[ne("div",{class:"my--fancyspinner--full",style:nt({backgroundImage:`url(${we(Gt)(v.id,v.sprite.gen,v.sprite.shiny)})`})},null,4),ne("p",rn,Yt(v.identifier),1)]),_:1},8,["time","props"]),We(Qt,{class:"my--fancyspinner--sparkle",ref_key:"shinyGif",ref:s,src:"ShinyFramesGif.gif"},null,512)]))}});export{on as _};
