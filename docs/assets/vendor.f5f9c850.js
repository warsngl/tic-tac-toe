var ef=Object.defineProperty,tf=Object.defineProperties;var nf=Object.getOwnPropertyDescriptors;var pl=Object.getOwnPropertySymbols;var sf=Object.prototype.hasOwnProperty,rf=Object.prototype.propertyIsEnumerable;var _l=(t,e,n)=>e in t?ef(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gl=(t,e)=>{for(var n in e||(e={}))sf.call(e,n)&&_l(t,n,e[n]);if(pl)for(var n of pl(e))rf.call(e,n)&&_l(t,n,e[n]);return t},ml=(t,e)=>tf(t,nf(e));function $i(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const of="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lf=$i(of);function yl(t){return!!t||t===""}function ji(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Te(s)?uf(s):ji(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Te(t))return t;if(ye(t))return t}}const af=/;(?![^(]*\))/g,cf=/:(.+)/;function uf(t){const e={};return t.split(af).forEach(n=>{if(n){const s=n.split(cf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Vi(t){let e="";if(Te(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Vi(t[n]);s&&(e+=s+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const HC=t=>t==null?"":H(t)||ye(t)&&(t.toString===bl||!W(t.toString))?JSON.stringify(t,vl,2):String(t),vl=(t,e)=>e&&e.__v_isRef?vl(t,e.value):hn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Cl(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!H(e)&&!wl(e)?String(e):e,se={},un=[],Qe=()=>{},hf=()=>!1,ff=/^on[^a-z]/,Ms=t=>ff.test(t),Gi=t=>t.startsWith("onUpdate:"),Ne=Object.assign,zi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},df=Object.prototype.hasOwnProperty,Q=(t,e)=>df.call(t,e),H=Array.isArray,hn=t=>Ds(t)==="[object Map]",Cl=t=>Ds(t)==="[object Set]",W=t=>typeof t=="function",Te=t=>typeof t=="string",Ki=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",El=t=>ye(t)&&W(t.then)&&W(t.catch),bl=Object.prototype.toString,Ds=t=>bl.call(t),pf=t=>Ds(t).slice(8,-1),wl=t=>Ds(t)==="[object Object]",qi=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ls=$i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_f=/-(\w)/g,it=Fs(t=>t.replace(_f,(e,n)=>n?n.toUpperCase():"")),gf=/\B([A-Z])/g,Mt=Fs(t=>t.replace(gf,"-$1").toLowerCase()),Bs=Fs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yi=Fs(t=>t?`on${Bs(t)}`:""),Qn=(t,e)=>!Object.is(t,e),Hs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Us=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Qi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Il;const mf=()=>Il||(Il=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Dt;const Ws=[];class yf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Dt&&(this.parent=Dt,this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Ws.push(this),Dt=this)}off(){this.active&&(Ws.pop(),Dt=Ws[Ws.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function vf(t,e){e=e||Dt,e&&e.active&&e.effects.push(t)}const Xi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Tl=t=>(t.w&vt)>0,Sl=t=>(t.n&vt)>0,Cf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=vt},Ef=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Tl(i)&&!Sl(i)?i.delete(t):e[n++]=i,i.w&=~vt,i.n&=~vt}e.length=n}},Ji=new WeakMap;let Xn=0,vt=1;const Zi=30,Jn=[];let Lt;const Ft=Symbol(""),er=Symbol("");class tr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],vf(this,s)}run(){if(!this.active)return this.fn();if(!Jn.includes(this))try{return Jn.push(Lt=this),bf(),vt=1<<++Xn,Xn<=Zi?Cf(this):Rl(this),this.fn()}finally{Xn<=Zi&&Ef(this),vt=1<<--Xn,Bt(),Jn.pop();const e=Jn.length;Lt=e>0?Jn[e-1]:void 0}}stop(){this.active&&(Rl(this),this.onStop&&this.onStop(),this.active=!1)}}function Rl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let fn=!0;const nr=[];function dn(){nr.push(fn),fn=!1}function bf(){nr.push(fn),fn=!0}function Bt(){const t=nr.pop();fn=t===void 0?!0:t}function Ue(t,e,n){if(!xl())return;let s=Ji.get(t);s||Ji.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Xi()),Nl(i)}function xl(){return fn&&Lt!==void 0}function Nl(t,e){let n=!1;Xn<=Zi?Sl(t)||(t.n|=vt,n=!Tl(t)):n=!t.has(Lt),n&&(t.add(Lt),Lt.deps.push(t))}function dt(t,e,n,s,i,r){const o=Ji.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&H(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":H(t)?qi(n)&&l.push(o.get("length")):(l.push(o.get(Ft)),hn(t)&&l.push(o.get(er)));break;case"delete":H(t)||(l.push(o.get(Ft)),hn(t)&&l.push(o.get(er)));break;case"set":hn(t)&&l.push(o.get(Ft));break}if(l.length===1)l[0]&&sr(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);sr(Xi(a))}}function sr(t,e){for(const n of H(t)?t:[...t])(n!==Lt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const wf=$i("__proto__,__v_isRef,__isVue"),Al=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Ki)),If=ir(),Tf=ir(!1,!0),Sf=ir(!0),Pl=Rf();function Rf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=J(this);for(let r=0,o=this.length;r<o;r++)Ue(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(J)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){dn();const s=J(this)[e].apply(this,n);return Bt(),s}}),t}function ir(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&r===(t?e?jf:Ul:e?Hl:Bl).get(s))return s;const o=H(s);if(!t&&o&&Q(Pl,i))return Reflect.get(Pl,i,r);const l=Reflect.get(s,i,r);return(Ki(i)?Al.has(i):wf(i))||(t||Ue(s,"get",i),e)?l:Pe(l)?!o||!qi(i)?l.value:l:ye(l)?t?Wl(l):pn(l):l}}const xf=Ol(),Nf=Ol(!0);function Ol(t=!1){return function(n,s,i,r){let o=n[s];if(!t&&!ar(i)&&(i=J(i),o=J(o),!H(n)&&Pe(o)&&!Pe(i)))return o.value=i,!0;const l=H(n)&&qi(s)?Number(s)<n.length:Q(n,s),a=Reflect.set(n,s,i,r);return n===J(r)&&(l?Qn(i,o)&&dt(n,"set",s,i):dt(n,"add",s,i)),a}}function Af(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&dt(t,"delete",e,void 0),s}function Pf(t,e){const n=Reflect.has(t,e);return(!Ki(e)||!Al.has(e))&&Ue(t,"has",e),n}function Of(t){return Ue(t,"iterate",H(t)?"length":Ft),Reflect.ownKeys(t)}const kl={get:If,set:xf,deleteProperty:Af,has:Pf,ownKeys:Of},kf={get:Sf,set(t,e){return!0},deleteProperty(t,e){return!0}},Mf=Ne({},kl,{get:Tf,set:Nf}),rr=t=>t,$s=t=>Reflect.getPrototypeOf(t);function js(t,e,n=!1,s=!1){t=t.__v_raw;const i=J(t),r=J(e);e!==r&&!n&&Ue(i,"get",e),!n&&Ue(i,"get",r);const{has:o}=$s(i),l=s?rr:n?cr:Zn;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Vs(t,e=!1){const n=this.__v_raw,s=J(n),i=J(t);return t!==i&&!e&&Ue(s,"has",t),!e&&Ue(s,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Gs(t,e=!1){return t=t.__v_raw,!e&&Ue(J(t),"iterate",Ft),Reflect.get(t,"size",t)}function Ml(t){t=J(t);const e=J(this);return $s(e).has.call(e,t)||(e.add(t),dt(e,"add",t,t)),this}function Dl(t,e){e=J(e);const n=J(this),{has:s,get:i}=$s(n);let r=s.call(n,t);r||(t=J(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Qn(e,o)&&dt(n,"set",t,e):dt(n,"add",t,e),this}function Ll(t){const e=J(this),{has:n,get:s}=$s(e);let i=n.call(e,t);i||(t=J(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&dt(e,"delete",t,void 0),r}function Fl(){const t=J(this),e=t.size!==0,n=t.clear();return e&&dt(t,"clear",void 0,void 0),n}function zs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=J(o),a=e?rr:t?cr:Zn;return!t&&Ue(l,"iterate",Ft),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Ks(t,e,n){return function(...s){const i=this.__v_raw,r=J(i),o=hn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?rr:e?cr:Zn;return!e&&Ue(r,"iterate",a?er:Ft),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ct(t){return function(...e){return t==="delete"?!1:this}}function Df(){const t={get(r){return js(this,r)},get size(){return Gs(this)},has:Vs,add:Ml,set:Dl,delete:Ll,clear:Fl,forEach:zs(!1,!1)},e={get(r){return js(this,r,!1,!0)},get size(){return Gs(this)},has:Vs,add:Ml,set:Dl,delete:Ll,clear:Fl,forEach:zs(!1,!0)},n={get(r){return js(this,r,!0)},get size(){return Gs(this,!0)},has(r){return Vs.call(this,r,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:zs(!0,!1)},s={get(r){return js(this,r,!0,!0)},get size(){return Gs(this,!0)},has(r){return Vs.call(this,r,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:zs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ks(r,!1,!1),n[r]=Ks(r,!0,!1),e[r]=Ks(r,!1,!0),s[r]=Ks(r,!0,!0)}),[t,n,e,s]}const[Lf,Ff,Bf,Hf]=Df();function or(t,e){const n=e?t?Hf:Bf:t?Ff:Lf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const Uf={get:or(!1,!1)},Wf={get:or(!1,!0)},$f={get:or(!0,!1)},Bl=new WeakMap,Hl=new WeakMap,Ul=new WeakMap,jf=new WeakMap;function Vf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gf(t){return t.__v_skip||!Object.isExtensible(t)?0:Vf(pf(t))}function pn(t){return t&&t.__v_isReadonly?t:lr(t,!1,kl,Uf,Bl)}function zf(t){return lr(t,!1,Mf,Wf,Hl)}function Wl(t){return lr(t,!0,kf,$f,Ul)}function lr(t,e,n,s,i){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Gf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function _n(t){return ar(t)?_n(t.__v_raw):!!(t&&t.__v_isReactive)}function ar(t){return!!(t&&t.__v_isReadonly)}function $l(t){return _n(t)||ar(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function jl(t){return Us(t,"__v_skip",!0),t}const Zn=t=>ye(t)?pn(t):t,cr=t=>ye(t)?Wl(t):t;function Vl(t){xl()&&(t=J(t),t.dep||(t.dep=Xi()),Nl(t.dep))}function Gl(t,e){t=J(t),t.dep&&sr(t.dep)}function Pe(t){return Boolean(t&&t.__v_isRef===!0)}function Kf(t){return zl(t,!1)}function qf(t){return zl(t,!0)}function zl(t,e){return Pe(t)?t:new Yf(t,e)}class Yf{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:Zn(e)}get value(){return Vl(this),this._value}set value(e){e=this._shallow?e:J(e),Qn(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Zn(e),Gl(this))}}function es(t){return Pe(t)?t.value:t}const Qf={get:(t,e,n)=>es(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Kl(t){return _n(t)?t:new Proxy(t,Qf)}class Xf{constructor(e,n,s){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new tr(e,()=>{this._dirty||(this._dirty=!0,Gl(this))}),this.__v_isReadonly=s}get value(){const e=J(this);return Vl(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function rt(t,e){let n,s;const i=W(t);return i?(n=t,s=Qe):(n=t.get,s=t.set),new Xf(n,s,i||!s)}Promise.resolve();function Jf(t,e,...n){const s=t.vnode.props||se;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||se;f?i=n.map(_=>_.trim()):h&&(i=n.map(Qi))}let l,a=s[l=Yi(e)]||s[l=Yi(it(e))];!a&&r&&(a=s[l=Yi(Mt(e))]),a&&Ke(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ke(c,t,6,i)}}function ql(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!W(t)){const a=c=>{const u=ql(c,e,!0);u&&(l=!0,Ne(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(s.set(t,null),null):(H(r)?r.forEach(a=>o[a]=null):Ne(o,r),s.set(t,o),o)}function ur(t,e){return!t||!Ms(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Mt(e))||Q(t,e))}let Ge=null,Yl=null;function qs(t){const e=Ge;return Ge=t,Yl=t&&t.type.__scopeId||null,e}function Zf(t,e=Ge,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ba(-1);const r=qs(e),o=t(...i);return qs(r),s._d&&ba(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function hr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:_,ctx:m,inheritAttrs:x}=t;let S,A;const F=qs(t);try{if(n.shapeFlag&4){const K=i||s;S=at(u.call(K,K,h,r,_,f,m)),A=a}else{const K=e;S=at(K.length>1?K(r,{attrs:a,slots:l,emit:c}):K(r,null)),A=e.props?a:ed(a)}}catch(K){ts.length=0,ii(K,t,1),S=We(lt)}let z=S;if(A&&x!==!1){const K=Object.keys(A),{shapeFlag:_e}=z;K.length&&_e&(1|6)&&(o&&K.some(Gi)&&(A=td(A,o)),z=gn(z,A))}return n.dirs&&(z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),S=z,qs(F),S}const ed=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ms(n))&&((e||(e={}))[n]=t[n]);return e},td=(t,e)=>{const n={};for(const s in t)(!Gi(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function nd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Ql(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ur(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Ql(s,o,c):!0:!!o;return!1}function Ql(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ur(n,r))return!0}return!1}function sd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const id=t=>t.__isSuspense;function rd(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):rp(t)}function Ys(t,e){if(Ee){let n=Ee.provides;const s=Ee.parent&&Ee.parent.provides;s===n&&(n=Ee.provides=Object.create(s)),n[t]=e}}function Et(t,e,n=!1){const s=Ee||Ge;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&W(e)?e.call(s.proxy):e}}function od(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return na(()=>{t.isMounted=!0}),sa(()=>{t.isUnmounting=!0}),t}const ze=[Function,Array],ld={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ze,onEnter:ze,onAfterEnter:ze,onEnterCancelled:ze,onBeforeLeave:ze,onLeave:ze,onAfterLeave:ze,onLeaveCancelled:ze,onBeforeAppear:ze,onAppear:ze,onAfterAppear:ze,onAppearCancelled:ze},setup(t,{slots:e}){const n=qd(),s=od();let i;return()=>{const r=e.default&&Zl(e.default(),!0);if(!r||!r.length)return;const o=J(t),{mode:l}=o,a=r[0];if(s.isLeaving)return dr(a);const c=Jl(a);if(!c)return dr(a);const u=fr(c,o,s,n);pr(c,u);const h=n.subTree,f=h&&Jl(h);let _=!1;const{getTransitionKey:m}=c.type;if(m){const x=m();i===void 0?i=x:x!==i&&(i=x,_=!0)}if(f&&f.type!==lt&&(!jt(c,f)||_)){const x=fr(f,o,s,n);if(pr(f,x),l==="out-in")return s.isLeaving=!0,x.afterLeave=()=>{s.isLeaving=!1,n.update()},dr(a);l==="in-out"&&c.type!==lt&&(x.delayLeave=(S,A,F)=>{const z=Xl(s,f);z[String(f.key)]=f,S._leaveCb=()=>{A(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=F})}return a}}},ad=ld;function Xl(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function fr(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:x,onAppear:S,onAfterAppear:A,onAppearCancelled:F}=e,z=String(t.key),K=Xl(n,t),_e=(q,ge)=>{q&&Ke(q,s,9,ge)},Ie={mode:r,persisted:o,beforeEnter(q){let ge=l;if(!n.isMounted)if(i)ge=x||l;else return;q._leaveCb&&q._leaveCb(!0);const fe=K[z];fe&&jt(t,fe)&&fe.el._leaveCb&&fe.el._leaveCb(),_e(ge,[q])},enter(q){let ge=a,fe=c,De=u;if(!n.isMounted)if(i)ge=S||a,fe=A||c,De=F||u;else return;let xe=!1;const Ae=q._enterCb=yt=>{xe||(xe=!0,yt?_e(De,[q]):_e(fe,[q]),Ie.delayedLeave&&Ie.delayedLeave(),q._enterCb=void 0)};ge?(ge(q,Ae),ge.length<=1&&Ae()):Ae()},leave(q,ge){const fe=String(t.key);if(q._enterCb&&q._enterCb(!0),n.isUnmounting)return ge();_e(h,[q]);let De=!1;const xe=q._leaveCb=Ae=>{De||(De=!0,ge(),Ae?_e(m,[q]):_e(_,[q]),q._leaveCb=void 0,K[fe]===t&&delete K[fe])};K[fe]=t,f?(f(q,xe),f.length<=1&&xe()):xe()},clone(q){return fr(q,e,n,s)}};return Ie}function dr(t){if(Qs(t))return t=gn(t),t.children=null,t}function Jl(t){return Qs(t)?t.children?t.children[0]:void 0:t}function pr(t,e){t.shapeFlag&6&&t.component?pr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zl(t,e=!1){let n=[],s=0;for(let i=0;i<t.length;i++){const r=t[i];r.type===ot?(r.patchFlag&128&&s++,n=n.concat(Zl(r.children,e))):(e||r.type!==lt)&&n.push(r)}if(s>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function ea(t){return W(t)?{setup:t,name:t.name}:t}const _r=t=>!!t.type.__asyncLoader,Qs=t=>t.type.__isKeepAlive;function cd(t,e){ta(t,"a",e)}function ud(t,e){ta(t,"da",e)}function ta(t,e,n=Ee){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Xs(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Qs(i.parent.vnode)&&hd(s,e,n,i),i=i.parent}}function hd(t,e,n,s){const i=Xs(e,t,s,!0);ia(()=>{zi(s[e],i)},n)}function Xs(t,e,n=Ee,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;dn(),mn(n);const l=Ke(e,n,t,o);return Vt(),Bt(),l});return s?i.unshift(r):i.push(r),r}}const pt=t=>(e,n=Ee)=>(!si||t==="sp")&&Xs(t,e,n),fd=pt("bm"),na=pt("m"),dd=pt("bu"),pd=pt("u"),sa=pt("bum"),ia=pt("um"),_d=pt("sp"),gd=pt("rtg"),md=pt("rtc");function yd(t,e=Ee){Xs("ec",t,e)}let gr=!0;function vd(t){const e=la(t),n=t.proxy,s=t.ctx;gr=!1,e.beforeCreate&&ra(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:x,deactivated:S,beforeDestroy:A,beforeUnmount:F,destroyed:z,unmounted:K,render:_e,renderTracked:Ie,renderTriggered:q,errorCaptured:ge,serverPrefetch:fe,expose:De,inheritAttrs:xe,components:Ae,directives:yt,filters:on}=e;if(c&&Cd(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const re in o){const ee=o[re];W(ee)&&(s[re]=ee.bind(n))}if(i){const re=i.call(n,n);ye(re)&&(t.data=pn(re))}if(gr=!0,r)for(const re in r){const ee=r[re],je=W(ee)?ee.bind(n,n):W(ee.get)?ee.get.bind(n,n):Qe,an=!W(ee)&&W(ee.set)?ee.set.bind(n):Qe,ft=rt({get:je,set:an});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>ft.value,set:nt=>ft.value=nt})}if(l)for(const re in l)oa(l[re],s,n,re);if(a){const re=W(a)?a.call(n):a;Reflect.ownKeys(re).forEach(ee=>{Ys(ee,re[ee])})}u&&ra(u,t,"c");function me(re,ee){H(ee)?ee.forEach(je=>re(je.bind(n))):ee&&re(ee.bind(n))}if(me(fd,h),me(na,f),me(dd,_),me(pd,m),me(cd,x),me(ud,S),me(yd,ge),me(md,Ie),me(gd,q),me(sa,F),me(ia,K),me(_d,fe),H(De))if(De.length){const re=t.exposed||(t.exposed={});De.forEach(ee=>{Object.defineProperty(re,ee,{get:()=>n[ee],set:je=>n[ee]=je})})}else t.exposed||(t.exposed={});_e&&t.render===Qe&&(t.render=_e),xe!=null&&(t.inheritAttrs=xe),Ae&&(t.components=Ae),yt&&(t.directives=yt)}function Cd(t,e,n=Qe,s=!1){H(t)&&(t=mr(t));for(const i in t){const r=t[i];let o;ye(r)?"default"in r?o=Et(r.from||i,r.default,!0):o=Et(r.from||i):o=Et(r),Pe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function ra(t,e,n){Ke(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function oa(t,e,n,s){const i=s.includes(".")?Ha(n,s):()=>n[s];if(Te(t)){const r=e[t];W(r)&&Cn(i,r)}else if(W(t))Cn(i,t.bind(n));else if(ye(t))if(H(t))t.forEach(r=>oa(r,e,n,s));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)&&Cn(i,r,t)}}function la(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Js(a,c,o,!0)),Js(a,e,o)),r.set(e,a),a}function Js(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Js(t,r,n,!0),i&&i.forEach(o=>Js(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Ed[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Ed={data:aa,props:Ht,emits:Ht,methods:Ht,computed:Ht,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Ht,directives:Ht,watch:wd,provide:aa,inject:bd};function aa(t,e){return e?t?function(){return Ne(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function bd(t,e){return Ht(mr(t),mr(e))}function mr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function Ht(t,e){return t?Ne(Ne(Object.create(null),t),e):e}function wd(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const s in e)n[s]=Oe(t[s],e[s]);return n}function Id(t,e,n,s=!1){const i={},r={};Us(r,ei,1),t.propsDefaults=Object.create(null),ca(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:zf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Td(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=J(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const _=e[f];if(a)if(Q(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const m=it(f);i[m]=yr(a,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{ca(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!Q(e,h)&&((u=Mt(h))===h||!Q(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=yr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!Q(e,h))&&(delete r[h],c=!0)}c&&dt(t,"set","$attrs")}function ca(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Ls(a))continue;const c=e[a];let u;i&&Q(i,u=it(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:ur(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=J(n),c=l||se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=yr(i,a,h,c[h],t,!Q(c,h))}}return o}function yr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Q(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&W(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(mn(i),s=c[n]=a.call(null,e),Vt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Mt(n))&&(s=!0))}return s}function ua(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!W(t)){const u=h=>{a=!0;const[f,_]=ua(h,e,!0);Ne(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return s.set(t,un),un;if(H(r))for(let u=0;u<r.length;u++){const h=it(r[u]);ha(h)&&(o[h]=se)}else if(r)for(const u in r){const h=it(u);if(ha(h)){const f=r[u],_=o[h]=H(f)||W(f)?{type:f}:f;if(_){const m=pa(Boolean,_.type),x=pa(String,_.type);_[0]=m>-1,_[1]=x<0||m<x,(m>-1||Q(_,"default"))&&l.push(h)}}}const c=[o,l];return s.set(t,c),c}function ha(t){return t[0]!=="$"}function fa(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function da(t,e){return fa(t)===fa(e)}function pa(t,e){return H(e)?e.findIndex(n=>da(n,t)):W(e)&&da(e,t)?0:-1}const _a=t=>t[0]==="_"||t==="$stable",vr=t=>H(t)?t.map(at):[at(t)],Sd=(t,e,n)=>{const s=Zf((...i)=>vr(e(...i)),n);return s._c=!1,s},ga=(t,e,n)=>{const s=t._ctx;for(const i in t){if(_a(i))continue;const r=t[i];if(W(r))e[i]=Sd(i,r,s);else if(r!=null){const o=vr(r);e[i]=()=>o}}},ma=(t,e)=>{const n=vr(e);t.slots.default=()=>n},Rd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),Us(e,"_",n)):ga(e,t.slots={})}else t.slots={},e&&ma(t,e);Us(t.slots,ei,1)},xd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=se;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Ne(i,e),!n&&l===1&&delete i._):(r=!e.$stable,ga(e,i)),o=e}else e&&(ma(t,e),o={default:1});if(r)for(const l in i)!_a(l)&&!(l in o)&&delete i[l]};function UC(t,e){const n=Ge;if(n===null)return t;const s=n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=se]=e[r];W(o)&&(o={mounted:o,updated:o}),o.deep&&Gt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c})}return t}function Ut(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(dn(),Ke(a,n,8,[t.el,l,t,e]),Bt())}}function ya(){return{app:null,config:{isNativeTag:hf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nd=0;function Ad(t,e){return function(s,i=null){i!=null&&!ye(i)&&(i=null);const r=ya(),o=new Set;let l=!1;const a=r.app={_uid:Nd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:lp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(a,...u)):W(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=We(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,Sr(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function Cr(t,e,n,s,i=!1){if(H(t)){t.forEach((f,_)=>Cr(f,e&&(H(e)?e[_]:e),n,s,i));return}if(_r(s)&&!i)return;const r=s.shapeFlag&4?Sr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===se?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(Te(c)?(u[c]=null,Q(h,c)&&(h[c]=null)):Pe(c)&&(c.value=null)),W(a))wt(a,l,12,[o,u]);else{const f=Te(a),_=Pe(a);if(f||_){const m=()=>{if(t.f){const x=f?u[a]:a.value;i?H(x)&&zi(x,r):H(x)?x.includes(r)||x.push(r):f?u[a]=[r]:(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,Q(h,a)&&(h[a]=o)):Pe(a)&&(a.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Le(m,n)):m()}}}const Le=rd;function Pd(t){return Od(t)}function Od(t,e){const n=mf();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=Qe,cloneNode:m,insertStaticContent:x}=t,S=(d,p,g,C=null,v=null,I=null,N=!1,w=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!jt(d,p)&&(C=k(d),Ve(d,v,I,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:E,ref:M,shapeFlag:P}=p;switch(E){case Er:A(d,p,g,C);break;case lt:F(d,p,g,C);break;case br:d==null&&z(p,g,C,N);break;case ot:yt(d,p,g,C,v,I,N,w,T);break;default:P&1?Ie(d,p,g,C,v,I,N,w,T):P&6?on(d,p,g,C,v,I,N,w,T):(P&64||P&128)&&E.process(d,p,g,C,v,I,N,w,T,oe)}M!=null&&v&&Cr(M,d&&d.ref,I,p||d,!p)},A=(d,p,g,C)=>{if(d==null)s(p.el=l(p.children),g,C);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},F=(d,p,g,C)=>{d==null?s(p.el=a(p.children||""),g,C):p.el=d.el},z=(d,p,g,C)=>{[d.el,d.anchor]=x(d.children,p,g,C)},K=({el:d,anchor:p},g,C)=>{let v;for(;d&&d!==p;)v=f(d),s(d,g,C),d=v;s(p,g,C)},_e=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},Ie=(d,p,g,C,v,I,N,w,T)=>{N=N||p.type==="svg",d==null?q(p,g,C,v,I,N,w,T):De(d,p,v,I,N,w,T)},q=(d,p,g,C,v,I,N,w)=>{let T,E;const{type:M,props:P,shapeFlag:D,transition:B,patchFlag:Y,dirs:he}=d;if(d.el&&m!==void 0&&Y===-1)T=d.el=m(d.el);else{if(T=d.el=o(d.type,I,P&&P.is,P),D&8?u(T,d.children):D&16&&fe(d.children,T,null,C,v,I&&M!=="foreignObject",N,w),he&&Ut(d,null,C,"created"),P){for(const ue in P)ue!=="value"&&!Ls(ue)&&r(T,ue,null,P[ue],I,d.children,C,v,R);"value"in P&&r(T,"value",null,P.value),(E=P.onVnodeBeforeMount)&&ct(E,C,d)}ge(T,d,d.scopeId,N,C)}he&&Ut(d,null,C,"beforeMount");const ne=(!v||v&&!v.pendingBranch)&&B&&!B.persisted;ne&&B.beforeEnter(T),s(T,p,g),((E=P&&P.onVnodeMounted)||ne||he)&&Le(()=>{E&&ct(E,C,d),ne&&B.enter(T),he&&Ut(d,null,C,"mounted")},v)},ge=(d,p,g,C,v)=>{if(g&&_(d,g),C)for(let I=0;I<C.length;I++)_(d,C[I]);if(v){let I=v.subTree;if(p===I){const N=v.vnode;ge(d,N,N.scopeId,N.slotScopeIds,v.parent)}}},fe=(d,p,g,C,v,I,N,w,T=0)=>{for(let E=T;E<d.length;E++){const M=d[E]=w?bt(d[E]):at(d[E]);S(null,M,p,g,C,v,I,N,w)}},De=(d,p,g,C,v,I,N)=>{const w=p.el=d.el;let{patchFlag:T,dynamicChildren:E,dirs:M}=p;T|=d.patchFlag&16;const P=d.props||se,D=p.props||se;let B;g&&Wt(g,!1),(B=D.onVnodeBeforeUpdate)&&ct(B,g,p,d),M&&Ut(p,d,g,"beforeUpdate"),g&&Wt(g,!0);const Y=v&&p.type!=="foreignObject";if(E?xe(d.dynamicChildren,E,w,g,C,Y,I):N||je(d,p,w,null,g,C,Y,I,!1),T>0){if(T&16)Ae(w,p,P,D,g,C,v);else if(T&2&&P.class!==D.class&&r(w,"class",null,D.class,v),T&4&&r(w,"style",P.style,D.style,v),T&8){const he=p.dynamicProps;for(let ne=0;ne<he.length;ne++){const ue=he[ne],Ye=P[ue],cn=D[ue];(cn!==Ye||ue==="value")&&r(w,ue,Ye,cn,v,d.children,g,C,R)}}T&1&&d.children!==p.children&&u(w,p.children)}else!N&&E==null&&Ae(w,p,P,D,g,C,v);((B=D.onVnodeUpdated)||M)&&Le(()=>{B&&ct(B,g,p,d),M&&Ut(p,d,g,"updated")},C)},xe=(d,p,g,C,v,I,N)=>{for(let w=0;w<p.length;w++){const T=d[w],E=p[w],M=T.el&&(T.type===ot||!jt(T,E)||T.shapeFlag&(6|64))?h(T.el):g;S(T,E,M,null,C,v,I,N,!0)}},Ae=(d,p,g,C,v,I,N)=>{if(g!==C){for(const w in C){if(Ls(w))continue;const T=C[w],E=g[w];T!==E&&w!=="value"&&r(d,w,E,T,N,p.children,v,I,R)}if(g!==se)for(const w in g)!Ls(w)&&!(w in C)&&r(d,w,g[w],null,N,p.children,v,I,R);"value"in C&&r(d,"value",g.value,C.value)}},yt=(d,p,g,C,v,I,N,w,T)=>{const E=p.el=d?d.el:l(""),M=p.anchor=d?d.anchor:l("");let{patchFlag:P,dynamicChildren:D,slotScopeIds:B}=p;B&&(w=w?w.concat(B):B),d==null?(s(E,g,C),s(M,g,C),fe(p.children,g,M,v,I,N,w,T)):P>0&&P&64&&D&&d.dynamicChildren?(xe(d.dynamicChildren,D,g,v,I,N,w),(p.key!=null||v&&p===v.subTree)&&va(d,p,!0)):je(d,p,g,M,v,I,N,w,T)},on=(d,p,g,C,v,I,N,w,T)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?v.ctx.activate(p,g,C,N,T):ln(p,g,C,v,I,N,T):me(d,p,T)},ln=(d,p,g,C,v,I,N)=>{const w=d.component=Kd(d,C,v);if(Qs(d)&&(w.ctx.renderer=oe),Yd(w),w.asyncDep){if(v&&v.registerDep(w,re),!d.el){const T=w.subTree=We(lt);F(null,T,p,g)}return}re(w,d,p,g,v,I,N)},me=(d,p,g)=>{const C=p.component=d.component;if(nd(d,p,g))if(C.asyncDep&&!C.asyncResolved){ee(C,p,g);return}else C.next=p,sp(C.update),C.update();else p.component=d.component,p.el=d.el,C.vnode=p},re=(d,p,g,C,v,I,N)=>{const w=()=>{if(d.isMounted){let{next:M,bu:P,u:D,parent:B,vnode:Y}=d,he=M,ne;Wt(d,!1),M?(M.el=Y.el,ee(d,M,N)):M=Y,P&&Hs(P),(ne=M.props&&M.props.onVnodeBeforeUpdate)&&ct(ne,B,M,Y),Wt(d,!0);const ue=hr(d),Ye=d.subTree;d.subTree=ue,S(Ye,ue,h(Ye.el),k(Ye),d,v,I),M.el=ue.el,he===null&&sd(d,ue.el),D&&Le(D,v),(ne=M.props&&M.props.onVnodeUpdated)&&Le(()=>ct(ne,B,M,Y),v)}else{let M;const{el:P,props:D}=p,{bm:B,m:Y,parent:he}=d,ne=_r(p);if(Wt(d,!1),B&&Hs(B),!ne&&(M=D&&D.onVnodeBeforeMount)&&ct(M,he,p),Wt(d,!0),P&&U){const ue=()=>{d.subTree=hr(d),U(P,d.subTree,d,v,null)};ne?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ue()):ue()}else{const ue=d.subTree=hr(d);S(null,ue,g,C,d,v,I),p.el=ue.el}if(Y&&Le(Y,v),!ne&&(M=D&&D.onVnodeMounted)){const ue=p;Le(()=>ct(M,he,ue),v)}p.shapeFlag&256&&d.a&&Le(d.a,v),d.isMounted=!0,p=g=C=null}},T=d.effect=new tr(w,()=>Oa(d.update),d.scope),E=d.update=T.run.bind(T);E.id=d.uid,Wt(d,!0),E()},ee=(d,p,g)=>{p.component=d;const C=d.vnode.props;d.vnode=p,d.next=null,Td(d,p.props,C,g),xd(d,p.children,g),dn(),Ar(void 0,d.update),Bt()},je=(d,p,g,C,v,I,N,w,T=!1)=>{const E=d&&d.children,M=d?d.shapeFlag:0,P=p.children,{patchFlag:D,shapeFlag:B}=p;if(D>0){if(D&128){ft(E,P,g,C,v,I,N,w,T);return}else if(D&256){an(E,P,g,C,v,I,N,w,T);return}}B&8?(M&16&&R(E,v,I),P!==E&&u(g,P)):M&16?B&16?ft(E,P,g,C,v,I,N,w,T):R(E,v,I,!0):(M&8&&u(g,""),B&16&&fe(P,g,C,v,I,N,w,T))},an=(d,p,g,C,v,I,N,w,T)=>{d=d||un,p=p||un;const E=d.length,M=p.length,P=Math.min(E,M);let D;for(D=0;D<P;D++){const B=p[D]=T?bt(p[D]):at(p[D]);S(d[D],B,g,null,v,I,N,w,T)}E>M?R(d,v,I,!0,!1,P):fe(p,g,C,v,I,N,w,T,P)},ft=(d,p,g,C,v,I,N,w,T)=>{let E=0;const M=p.length;let P=d.length-1,D=M-1;for(;E<=P&&E<=D;){const B=d[E],Y=p[E]=T?bt(p[E]):at(p[E]);if(jt(B,Y))S(B,Y,g,null,v,I,N,w,T);else break;E++}for(;E<=P&&E<=D;){const B=d[P],Y=p[D]=T?bt(p[D]):at(p[D]);if(jt(B,Y))S(B,Y,g,null,v,I,N,w,T);else break;P--,D--}if(E>P){if(E<=D){const B=D+1,Y=B<M?p[B].el:C;for(;E<=D;)S(null,p[E]=T?bt(p[E]):at(p[E]),g,Y,v,I,N,w,T),E++}}else if(E>D)for(;E<=P;)Ve(d[E],v,I,!0),E++;else{const B=E,Y=E,he=new Map;for(E=Y;E<=D;E++){const He=p[E]=T?bt(p[E]):at(p[E]);He.key!=null&&he.set(He.key,E)}let ne,ue=0;const Ye=D-Y+1;let cn=!1,hl=0;const Yn=new Array(Ye);for(E=0;E<Ye;E++)Yn[E]=0;for(E=B;E<=P;E++){const He=d[E];if(ue>=Ye){Ve(He,v,I,!0);continue}let st;if(He.key!=null)st=he.get(He.key);else for(ne=Y;ne<=D;ne++)if(Yn[ne-Y]===0&&jt(He,p[ne])){st=ne;break}st===void 0?Ve(He,v,I,!0):(Yn[st-Y]=E+1,st>=hl?hl=st:cn=!0,S(He,p[st],g,null,v,I,N,w,T),ue++)}const fl=cn?kd(Yn):un;for(ne=fl.length-1,E=Ye-1;E>=0;E--){const He=Y+E,st=p[He],dl=He+1<M?p[He+1].el:C;Yn[E]===0?S(null,st,g,dl,v,I,N,w,T):cn&&(ne<0||E!==fl[ne]?nt(st,g,dl,2):ne--)}}},nt=(d,p,g,C,v=null)=>{const{el:I,type:N,transition:w,children:T,shapeFlag:E}=d;if(E&6){nt(d.component.subTree,p,g,C);return}if(E&128){d.suspense.move(p,g,C);return}if(E&64){N.move(d,p,g,oe);return}if(N===ot){s(I,p,g);for(let P=0;P<T.length;P++)nt(T[P],p,g,C);s(d.anchor,p,g);return}if(N===br){K(d,p,g);return}if(C!==2&&E&1&&w)if(C===0)w.beforeEnter(I),s(I,p,g),Le(()=>w.enter(I),v);else{const{leave:P,delayLeave:D,afterLeave:B}=w,Y=()=>s(I,p,g),he=()=>{P(I,()=>{Y(),B&&B()})};D?D(I,Y,he):he()}else s(I,p,g)},Ve=(d,p,g,C=!1,v=!1)=>{const{type:I,props:N,ref:w,children:T,dynamicChildren:E,shapeFlag:M,patchFlag:P,dirs:D}=d;if(w!=null&&Cr(w,null,g,d,!0),M&256){p.ctx.deactivate(d);return}const B=M&1&&D,Y=!_r(d);let he;if(Y&&(he=N&&N.onVnodeBeforeUnmount)&&ct(he,p,d),M&6)O(d.component,g,C);else{if(M&128){d.suspense.unmount(g,C);return}B&&Ut(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,g,v,oe,C):E&&(I!==ot||P>0&&P&64)?R(E,p,g,!1,!0):(I===ot&&P&(128|256)||!v&&M&16)&&R(T,p,g),C&&Wi(d)}(Y&&(he=N&&N.onVnodeUnmounted)||B)&&Le(()=>{he&&ct(he,p,d),B&&Ut(d,null,p,"unmounted")},g)},Wi=d=>{const{type:p,el:g,anchor:C,transition:v}=d;if(p===ot){y(g,C);return}if(p===br){_e(d);return}const I=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:N,delayLeave:w}=v,T=()=>N(g,I);w?w(d.el,I,T):T()}else I()},y=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},O=(d,p,g)=>{const{bum:C,scope:v,update:I,subTree:N,um:w}=d;C&&Hs(C),v.stop(),I&&(I.active=!1,Ve(N,d,p,g)),w&&Le(w,p),Le(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},R=(d,p,g,C=!1,v=!1,I=0)=>{for(let N=I;N<d.length;N++)Ve(d[N],p,g,C,v)},k=d=>d.shapeFlag&6?k(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),te=(d,p,g)=>{d==null?p._vnode&&Ve(p._vnode,null,null,!0):S(p._vnode||null,d,p,null,null,null,g),Da(),p._vnode=d},oe={p:S,um:Ve,m:nt,r:Wi,mt:ln,mc:fe,pc:je,pbc:xe,n:k,o:t};let V,U;return e&&([V,U]=e(oe)),{render:te,hydrate:V,createApp:Ad(te,V)}}function Wt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function va(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=bt(i[r]),l.el=o.el),n||va(o,l))}}function kd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Md=t=>t.__isTeleport,Ca="components";function WC(t,e){return Ld(Ca,t,!0,e)||t}const Dd=Symbol();function Ld(t,e,n=!0,s=!1){const i=Ge||Ee;if(i){const r=i.type;if(t===Ca){const l=Zd(r);if(l&&(l===e||l===it(e)||l===Bs(it(e))))return r}const o=Ea(i[t]||r[t],e)||Ea(i.appContext[t],e);return!o&&s?r:o}}function Ea(t,e){return t&&(t[e]||t[it(e)]||t[Bs(it(e))])}const ot=Symbol(void 0),Er=Symbol(void 0),lt=Symbol(void 0),br=Symbol(void 0),ts=[];let $t=null;function Fd(t=!1){ts.push($t=t?null:[])}function Bd(){ts.pop(),$t=ts[ts.length-1]||null}let Zs=1;function ba(t){Zs+=t}function wa(t){return t.dynamicChildren=Zs>0?$t||un:null,Bd(),Zs>0&&$t&&$t.push(t),t}function $C(t,e,n,s,i,r){return wa(Ta(t,e,n,s,i,r,!0))}function Hd(t,e,n,s,i){return wa(We(t,e,n,s,i,!0))}function wr(t){return t?t.__v_isVNode===!0:!1}function jt(t,e){return t.type===e.type&&t.key===e.key}const ei="__vInternal",Ia=({key:t})=>t!=null?t:null,ti=({ref:t,ref_key:e,ref_for:n})=>t!=null?Te(t)||Pe(t)||W(t)?{i:Ge,r:t,k:e,f:!!n}:t:null;function Ta(t,e=null,n=null,s=0,i=null,r=t===ot?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ia(e),ref:e&&ti(e),scopeId:Yl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Ir(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Te(n)?8:16),Zs>0&&!o&&$t&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&$t.push(a),a}const We=Ud;function Ud(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Dd)&&(t=lt),wr(t)){const l=gn(t,e,!0);return n&&Ir(l,n),l}if(ep(t)&&(t=t.__vccOpts),e){e=Wd(e);let{class:l,style:a}=e;l&&!Te(l)&&(e.class=Vi(l)),ye(a)&&($l(a)&&!H(a)&&(a=Ne({},a)),e.style=ji(a))}const o=Te(t)?1:id(t)?128:Md(t)?64:ye(t)?4:W(t)?2:0;return Ta(t,e,n,s,i,o,r,!0)}function Wd(t){return t?$l(t)||ei in t?Ne({},t):t:null}function gn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?jd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ia(l),ref:e&&e.ref?n&&i?H(i)?i.concat(ti(e)):[i,ti(e)]:ti(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ot?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gn(t.ssContent),ssFallback:t.ssFallback&&gn(t.ssFallback),el:t.el,anchor:t.anchor}}function $d(t=" ",e=0){return We(Er,null,t,e)}function jC(t="",e=!1){return e?(Fd(),Hd(lt,null,t)):We(lt,null,t)}function at(t){return t==null||typeof t=="boolean"?We(lt):H(t)?We(ot,null,t.slice()):typeof t=="object"?bt(t):We(Er,null,String(t))}function bt(t){return t.el===null||t.memo?t:gn(t)}function Ir(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&(1|64)){const i=e.default;i&&(i._c&&(i._d=!1),Ir(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ei in e)?e._ctx=Ge:i===3&&Ge&&(Ge.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Ge},n=32):(e=String(e),s&64?(n=16,e=[$d(e)]):n=8);t.children=e,t.shapeFlag|=n}function jd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Vi([e.class,s.class]));else if(i==="style")e.style=ji([e.style,s.style]);else if(Ms(i)){const r=e[i],o=s[i];r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ct(t,e,n,s=null){Ke(t,e,7,[n,s])}function VC(t,e,n,s){let i;const r=n&&n[s];if(H(t)||Te(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ye(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Tr=t=>t?Sa(t)?Sr(t)||t.proxy:Tr(t.parent):null,ni=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tr(t.parent),$root:t=>Tr(t.root),$emit:t=>t.emit,$options:t=>la(t),$forceUpdate:t=>()=>Oa(t.update),$nextTick:t=>Pa.bind(t.proxy),$watch:t=>op.bind(t)}),Vd={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==se&&Q(s,e))return o[e]=1,s[e];if(i!==se&&Q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,r[e];if(n!==se&&Q(n,e))return o[e]=4,n[e];gr&&(o[e]=0)}}const u=ni[e];let h,f;if(u)return e==="$attrs"&&Ue(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==se&&Q(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,Q(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;if(i!==se&&Q(i,e))i[e]=n;else if(s!==se&&Q(s,e))s[e]=n;else if(Q(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==se&&Q(t,o)||e!==se&&Q(e,o)||(l=r[0])&&Q(l,o)||Q(s,o)||Q(ni,o)||Q(i.config.globalProperties,o)}},Gd=ya();let zd=0;function Kd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Gd,r={uid:zd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new yf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ua(s,i),emitsOptions:ql(s,i),emit:null,emitted:null,propsDefaults:se,inheritAttrs:s.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Jf.bind(null,r),t.ce&&t.ce(r),r}let Ee=null;const qd=()=>Ee||Ge,mn=t=>{Ee=t,t.scope.on()},Vt=()=>{Ee&&Ee.scope.off(),Ee=null};function Sa(t){return t.vnode.shapeFlag&4}let si=!1;function Yd(t,e=!1){si=e;const{props:n,children:s}=t.vnode,i=Sa(t);Id(t,n,i,e),Rd(t,s);const r=i?Qd(t,e):void 0;return si=!1,r}function Qd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=jl(new Proxy(t.ctx,Vd));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Jd(t):null;mn(t),dn();const r=wt(s,t,0,[t.props,i]);if(Bt(),Vt(),El(r)){if(r.then(Vt,Vt),e)return r.then(o=>{Ra(t,o,e)}).catch(o=>{ii(o,t,0)});t.asyncDep=r}else Ra(t,r,e)}else Na(t,e)}function Ra(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=Kl(e)),Na(t,n)}let xa;function Na(t,e,n){const s=t.type;if(!t.render){if(!e&&xa&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Ne(Ne({isCustomElement:r,delimiters:l},o),a);s.render=xa(i,c)}}t.render=s.render||Qe}mn(t),dn(),vd(t),Bt(),Vt()}function Xd(t){return new Proxy(t.attrs,{get(e,n){return Ue(t,"get","$attrs"),e[n]}})}function Jd(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Xd(t))},slots:t.slots,emit:t.emit,expose:e}}function Sr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Kl(jl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ni)return ni[n](t)}}))}function Zd(t){return W(t)&&t.displayName||t.name}function ep(t){return W(t)&&"__vccOpts"in t}function wt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ii(r,e,n)}return i}function Ke(t,e,n,s){if(W(t)){const r=wt(t,e,n,s);return r&&El(r)&&r.catch(o=>{ii(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ke(t[r],e,n,s));return i}function ii(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){wt(a,null,10,[t,o,l]);return}}tp(t,n,i,s)}function tp(t,e,n,s=!0){console.error(t)}let ri=!1,Rr=!1;const $e=[];let _t=0;const ns=[];let ss=null,yn=0;const is=[];let It=null,vn=0;const Aa=Promise.resolve();let xr=null,Nr=null;function Pa(t){const e=xr||Aa;return t?e.then(this?t.bind(this):t):e}function np(t){let e=_t+1,n=$e.length;for(;e<n;){const s=e+n>>>1;rs($e[s])<t?e=s+1:n=s}return e}function Oa(t){(!$e.length||!$e.includes(t,ri&&t.allowRecurse?_t+1:_t))&&t!==Nr&&(t.id==null?$e.push(t):$e.splice(np(t.id),0,t),ka())}function ka(){!ri&&!Rr&&(Rr=!0,xr=Aa.then(La))}function sp(t){const e=$e.indexOf(t);e>_t&&$e.splice(e,1)}function Ma(t,e,n,s){H(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),ka()}function ip(t){Ma(t,ss,ns,yn)}function rp(t){Ma(t,It,is,vn)}function Ar(t,e=null){if(ns.length){for(Nr=e,ss=[...new Set(ns)],ns.length=0,yn=0;yn<ss.length;yn++)ss[yn]();ss=null,yn=0,Nr=null,Ar(t,e)}}function Da(t){if(is.length){const e=[...new Set(is)];if(is.length=0,It){It.push(...e);return}for(It=e,It.sort((n,s)=>rs(n)-rs(s)),vn=0;vn<It.length;vn++)It[vn]();It=null,vn=0}}const rs=t=>t.id==null?1/0:t.id;function La(t){Rr=!1,ri=!0,Ar(t),$e.sort((n,s)=>rs(n)-rs(s));const e=Qe;try{for(_t=0;_t<$e.length;_t++){const n=$e[_t];n&&n.active!==!1&&wt(n,null,14)}}finally{_t=0,$e.length=0,Da(),ri=!1,xr=null,($e.length||ns.length||is.length)&&La(t)}}const Fa={};function Cn(t,e,n){return Ba(t,e,n)}function Ba(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=se){const l=Ee;let a,c=!1,u=!1;if(Pe(t)?(a=()=>t.value,c=!!t._shallow):_n(t)?(a=()=>t,s=!0):H(t)?(u=!0,c=t.some(_n),a=()=>t.map(A=>{if(Pe(A))return A.value;if(_n(A))return Gt(A);if(W(A))return wt(A,l,2)})):W(t)?e?a=()=>wt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ke(t,l,3,[f])}:a=Qe,e&&s){const A=a;a=()=>Gt(A())}let h,f=A=>{h=S.onStop=()=>{wt(A,l,4)}};if(si)return f=Qe,e?n&&Ke(e,l,3,[a(),u?[]:void 0,f]):a(),Qe;let _=u?[]:Fa;const m=()=>{if(!!S.active)if(e){const A=S.run();(s||c||(u?A.some((F,z)=>Qn(F,_[z])):Qn(A,_)))&&(h&&h(),Ke(e,l,3,[A,_===Fa?void 0:_,f]),_=A)}else S.run()};m.allowRecurse=!!e;let x;i==="sync"?x=m:i==="post"?x=()=>Le(m,l&&l.suspense):x=()=>{!l||l.isMounted?ip(m):m()};const S=new tr(a,x);return e?n?m():_=S.run():i==="post"?Le(S.run.bind(S),l&&l.suspense):S.run(),()=>{S.stop(),l&&l.scope&&zi(l.scope.effects,S)}}function op(t,e,n){const s=this.proxy,i=Te(t)?t.includes(".")?Ha(s,t):()=>s[t]:t.bind(s,s);let r;W(e)?r=e:(r=e.handler,n=e);const o=Ee;mn(this);const l=Ba(i,r.bind(s),n);return o?mn(o):Vt(),l}function Ha(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Gt(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))Gt(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Gt(t[n],e);else if(Cl(t)||hn(t))t.forEach(n=>{Gt(n,e)});else if(wl(t))for(const n in t)Gt(t[n],e);return t}function Ua(t,e,n){const s=arguments.length;return s===2?ye(e)&&!H(e)?wr(e)?We(t,null,[e]):We(t,e):We(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&wr(n)&&(n=[n]),We(t,e,n))}const lp="3.2.26",ap="http://www.w3.org/2000/svg",En=typeof document!="undefined"?document:null,Wa=new Map,cp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?En.createElementNS(ap,t):En.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s){const i=n?n.previousSibling:e.lastChild;let r=Wa.get(t);if(!r){const o=En.createElement("template");if(o.innerHTML=s?`<svg>${t}</svg>`:t,r=o.content,s){const l=r.firstChild;for(;l.firstChild;)r.appendChild(l.firstChild);r.removeChild(l)}Wa.set(t,r)}return e.insertBefore(r.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function up(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function hp(t,e,n){const s=t.style,i=Te(n);if(n&&!i){for(const r in n)Pr(s,r,n[r]);if(e&&!Te(e))for(const r in e)n[r]==null&&Pr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const $a=/\s*!important$/;function Pr(t,e,n){if(H(n))n.forEach(s=>Pr(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=fp(t,e);$a.test(n)?t.setProperty(Mt(s),n.replace($a,""),"important"):t[s]=n}}const ja=["Webkit","Moz","ms"],Or={};function fp(t,e){const n=Or[e];if(n)return n;let s=it(e);if(s!=="filter"&&s in t)return Or[e]=s;s=Bs(s);for(let i=0;i<ja.length;i++){const r=ja[i]+s;if(r in t)return Or[e]=r}return e}const Va="http://www.w3.org/1999/xlink";function dp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Va,e.slice(6,e.length)):t.setAttributeNS(Va,e,n);else{const r=lf(e);n==null||r&&!yl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function pp(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const l=typeof t[e];if(l==="boolean"){t[e]=yl(n);return}else if(n==null&&l==="string"){t[e]="",t.removeAttribute(e);return}else if(l==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let oi=Date.now,Ga=!1;if(typeof window!="undefined"){oi()>document.createEvent("Event").timeStamp&&(oi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Ga=!!(t&&Number(t[1])<=53)}let kr=0;const _p=Promise.resolve(),gp=()=>{kr=0},mp=()=>kr||(_p.then(gp),kr=oi());function bn(t,e,n,s){t.addEventListener(e,n,s)}function yp(t,e,n,s){t.removeEventListener(e,n,s)}function vp(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Cp(e);if(s){const c=r[e]=Ep(s,i);bn(t,l,c,a)}else o&&(yp(t,l,o,a),r[e]=void 0)}}const za=/(?:Once|Passive|Capture)$/;function Cp(t){let e;if(za.test(t)){e={};let n;for(;n=t.match(za);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Mt(t.slice(2)),e]}function Ep(t,e){const n=s=>{const i=s.timeStamp||oi();(Ga||i>=n.attached-1)&&Ke(bp(s,n.value),e,5,[s])};return n.value=t,n.attached=mp(),n}function bp(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s(i))}else return e}const Ka=/^on[a-z]/,wp=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?up(t,s,i):e==="style"?hp(t,n,s):Ms(e)?Gi(e)||vp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ip(t,e,s,i))?pp(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),dp(t,e,s,i))};function Ip(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ka.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ka.test(e)&&Te(n)?!1:e in t}const Tp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ad.props;const qa=t=>{const e=t.props["onUpdate:modelValue"];return H(e)?n=>Hs(e,n):e};function Sp(t){t.target.composing=!0}function Ya(t){const e=t.target;e.composing&&(e.composing=!1,Rp(e,"input"))}function Rp(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const GC={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=qa(i);const r=s||i.props&&i.props.type==="number";bn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n?l=l.trim():r&&(l=Qi(l)),t._assign(l)}),n&&bn(t,"change",()=>{t.value=t.value.trim()}),e||(bn(t,"compositionstart",Sp),bn(t,"compositionend",Ya),bn(t,"change",Ya))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=qa(r),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Qi(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},xp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zC=(t,e)=>n=>{if(!("key"in n))return;const s=Mt(n.key);if(e.some(i=>i===s||xp[i]===s))return t(n)},Np=Ne({patchProp:wp},cp);let Qa;function Ap(){return Qa||(Qa=Pd(Np))}const KC=(...t)=>{const e=Ap().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Pp(s);if(!i)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Pp(t){return Te(t)?document.querySelector(t):t}function Op(){return Xa().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Xa(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const kp=typeof Proxy=="function",Mp="devtools-plugin:setup",Dp="plugin:settings:set";class Lp{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const l=e.settings[o];s[o]=l.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),l=JSON.parse(o);Object.assign(r,l)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o}},n&&n.on(Dp,(o,l)=>{o===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(o,l)=>this.target?this.target.on[l]:(...a)=>{this.onQueue.push({method:l,args:a})}}),this.proxiedTarget=new Proxy({},{get:(o,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...a)=>(this.targetQueue.push({method:l,args:a,resolve:()=>{}}),this.fallbacks[l](...a)):(...a)=>new Promise(c=>{this.targetQueue.push({method:l,args:a,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Fp(t,e){const n=Xa(),s=Op(),i=kp&&t.enableEarlyProxy;if(s&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(Mp,t,e);else{const r=i?new Lp(t,s):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:r}),r&&e(r.proxiedTarget)}}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Ja=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",wn=t=>Ja?Symbol(t):"_vr_"+t,Bp=wn("rvlm"),Za=wn("rvd"),Mr=wn("r"),ec=wn("rl"),Dr=wn("rvl"),In=typeof window!="undefined";function Hp(t){return t.__esModule||Ja&&t[Symbol.toStringTag]==="Module"}const ie=Object.assign;function Lr(t,e){const n={};for(const s in e){const i=e[s];n[s]=Array.isArray(i)?i.map(t):t(i)}return n}const os=()=>{},Up=/\/$/,Wp=t=>t.replace(Up,"");function Fr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("?"),a=e.indexOf("#",l>-1?l:0);return l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Gp(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function $p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function tc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function jp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Tn(e.matched[s],n.matched[i])&&nc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Tn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function nc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Vp(t[n],e[n]))return!1;return!0}function Vp(t,e){return Array.isArray(t)?sc(t,e):Array.isArray(e)?sc(e,t):t===e}function sc(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Gp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var ls;(function(t){t.pop="pop",t.push="push"})(ls||(ls={}));var as;(function(t){t.back="back",t.forward="forward",t.unknown=""})(as||(as={}));function zp(t){if(!t)if(In){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Wp(t)}const Kp=/^[^#]+#/;function qp(t,e){return t.replace(Kp,"#")+e}function Yp(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const li=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qp(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Yp(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ic(t,e){return(history.state?history.state.position-e:-1)+t}const Br=new Map;function Xp(t,e){Br.set(t,e)}function Jp(t){const e=Br.get(t);return Br.delete(t),e}let Zp=()=>location.protocol+"//"+location.host;function rc(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),tc(a,"")}return tc(n,t)+s+i}function e_(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=rc(t,location),m=n.value,x=e.value;let S=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}S=x?f.position-x.position:0}else s(_);i.forEach(A=>{A(n.value,m,{delta:S,type:ls.pop,direction:S?S>0?as.forward:as.back:as.unknown})})};function a(){o=n.value}function c(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;!f.state||f.replaceState(ie({},f.state,{scroll:li()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:c,destroy:h}}function oc(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?li():null}}function t_(t){const{history:e,location:n}=window,s={value:rc(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Zp()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(a,c){const u=ie({},e.state,oc(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=ie({},i.value,e.state,{forward:a,scroll:li()});r(u.current,u,!0);const h=ie({},oc(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function n_(t){t=zp(t);const e=t_(t),n=e_(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ie({location:"",base:t,go:s,createHref:qp.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function qC(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),n_(t)}function s_(t){return typeof t=="string"||t&&typeof t=="object"}function lc(t){return typeof t=="string"||typeof t=="symbol"}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ac=wn("nf");var cc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cc||(cc={}));function Sn(t,e){return ie(new Error,{type:t,[ac]:!0},e)}function zt(t,e){return t instanceof Error&&ac in t&&(e==null||!!(t.type&e))}const uc="[^/]+?",i_={sensitive:!1,strict:!1,start:!0,end:!0},r_=/[.+*?^${}()[\]/\\]/g;function o_(t,e){const n=ie({},i_,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(r_,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:x,optional:S,regexp:A}=f;r.push({name:m,repeatable:x,optional:S});const F=A||uc;if(F!==uc){_+=10;try{new RegExp(`(${F})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${m}" (${F}): `+K.message)}}let z=x?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(z=S&&c.length<2?`(?:/${z})`:"/"+z),S&&(z+="?"),i+=z,_+=20,S&&(_+=-8),x&&(_+=-20),F===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:x,optional:S}=_,A=m in c?c[m]:"";if(Array.isArray(A)&&!x)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const F=Array.isArray(A)?A.join("/"):A;if(!F)if(S)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=F}}return u}return{re:o,score:s,keys:r,parse:l,stringify:a}}function l_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function a_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=l_(s[n],i[n]);if(r)return r;n++}return i.length-s.length}const c_={type:0,value:""},u_=/[a-zA-Z0-9_]/;function h_(t){if(!t)return[[]];if(t==="/")return[[c_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:u_.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function f_(t,e,n){const s=o_(h_(t.path),n),i=ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function d_(t,e){const n=[],s=new Map;e=fc({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,m=__(u);m.aliasOf=f&&f.record;const x=fc(e,u),S=[m];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of z)S.push(ie({},m,{components:f?f.record.components:m.components,path:K,aliasOf:f?f.record:m}))}let A,F;for(const z of S){const{path:K}=z;if(h&&K[0]!=="/"){const _e=h.record.path,Ie=_e[_e.length-1]==="/"?"":"/";z.path=h.record.path+(K&&Ie+K)}if(A=f_(z,h,x),f?f.alias.push(A):(F=F||A,F!==A&&F.alias.push(A),_&&u.name&&!hc(A)&&o(u.name)),"children"in m){const _e=m.children;for(let Ie=0;Ie<_e.length;Ie++)r(_e[Ie],A,f&&f.children[Ie])}f=f||A,a(A)}return F?()=>{o(F)}:os}function o(u){if(lc(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&a_(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!hc(u)&&s.set(u.record.name,u)}function c(u,h){let f,_={},m,x;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Sn(1,{location:u});x=f.record.name,_=ie(p_(h.params,f.keys.filter(F=>!F.optional).map(F=>F.name)),u.params),m=f.stringify(_)}else if("path"in u)m=u.path,f=n.find(F=>F.re.test(m)),f&&(_=f.parse(m),x=f.record.name);else{if(f=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!f)throw Sn(1,{location:u,currentLocation:h});x=f.record.name,_=ie({},h.params,u.params),m=f.stringify(_)}const S=[];let A=f;for(;A;)S.unshift(A.record),A=A.parent;return{name:x,path:m,params:_,matched:S,meta:m_(S)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function p_(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function __(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:g_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function g_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function hc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function m_(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function fc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const dc=/#/g,y_=/&/g,v_=/\//g,C_=/=/g,E_=/\?/g,pc=/\+/g,b_=/%5B/g,w_=/%5D/g,_c=/%5E/g,I_=/%60/g,gc=/%7B/g,T_=/%7C/g,mc=/%7D/g,S_=/%20/g;function Hr(t){return encodeURI(""+t).replace(T_,"|").replace(b_,"[").replace(w_,"]")}function R_(t){return Hr(t).replace(gc,"{").replace(mc,"}").replace(_c,"^")}function Ur(t){return Hr(t).replace(pc,"%2B").replace(S_,"+").replace(dc,"%23").replace(y_,"%26").replace(I_,"`").replace(gc,"{").replace(mc,"}").replace(_c,"^")}function x_(t){return Ur(t).replace(C_,"%3D")}function N_(t){return Hr(t).replace(dc,"%23").replace(E_,"%3F")}function A_(t){return t==null?"":N_(t).replace(v_,"%2F")}function ai(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function P_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(pc," "),o=r.indexOf("="),l=ai(o<0?r:r.slice(0,o)),a=o<0?null:ai(r.slice(o+1));if(l in e){let c=e[l];Array.isArray(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function yc(t){let e="";for(let n in t){const s=t[n];if(n=x_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(r=>r&&Ur(r)):[s&&Ur(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function O_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}function cs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function St(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(Sn(4,{from:n,to:e})):h instanceof Error?l(h):s_(h)?l(Sn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function Wr(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(k_(l)){const c=(l.__vccOpts||l)[e];c&&i.push(St(c,n,s,r,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Hp(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&St(f,n,s,r,o)()}))}}return i}function k_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vc(t){const e=Et(Mr),n=Et(ec),s=rt(()=>e.resolve(es(t.to))),i=rt(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Tn.bind(null,u));if(f>-1)return f;const _=Cc(a[c-2]);return c>1&&Cc(u)===_&&h[h.length-1].path!==_?h.findIndex(Tn.bind(null,a[c-2])):f}),r=rt(()=>i.value>-1&&F_(n.params,s.value.params)),o=rt(()=>i.value>-1&&i.value===n.matched.length-1&&nc(n.params,s.value.params));function l(a={}){return L_(a)?e[es(t.replace)?"replace":"push"](es(t.to)).catch(os):Promise.resolve()}return{route:s,href:rt(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const M_=ea({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vc,setup(t,{slots:e}){const n=pn(vc(t)),{options:s}=Et(Mr),i=rt(()=>({[Ec(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ec(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Ua("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),D_=M_;function L_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function F_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Array.isArray(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Cc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ec=(t,e,n)=>t!=null?t:e!=null?e:n,B_=ea({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Et(Dr),i=rt(()=>t.route||s.value),r=Et(Za,0),o=rt(()=>i.value.matched[r]);Ys(Za,r+1),Ys(Bp,o),Ys(Dr,i);const l=Kf();return Cn(()=>[l.value,o.value,t.name],([a,c,u],[h,f,_])=>{c&&(c.instances[u]=a,f&&f!==c&&a&&a===h&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),a&&c&&(!f||!Tn(c,f)||!h)&&(c.enterCallbacks[u]||[]).forEach(m=>m(a))},{flush:"post"}),()=>{const a=i.value,c=o.value,u=c&&c.components[t.name],h=t.name;if(!u)return bc(n.default,{Component:u,route:a});const f=c.props[t.name],_=f?f===!0?a.params:typeof f=="function"?f(a):f:null,x=Ua(u,ie({},_,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(c.instances[h]=null)},ref:l}));return bc(n.default,{Component:x,route:a})||x}}});function bc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const H_=B_;function YC(t){const e=d_(t.routes,t),n=t.parseQuery||P_,s=t.stringifyQuery||yc,i=t.history,r=cs(),o=cs(),l=cs(),a=qf(Tt);let c=Tt;In&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Lr.bind(null,y=>""+y),h=Lr.bind(null,A_),f=Lr.bind(null,ai);function _(y,O){let R,k;return lc(y)?(R=e.getRecordMatcher(y),k=O):k=y,e.addRoute(k,R)}function m(y){const O=e.getRecordMatcher(y);O&&e.removeRoute(O)}function x(){return e.getRoutes().map(y=>y.record)}function S(y){return!!e.getRecordMatcher(y)}function A(y,O){if(O=ie({},O||a.value),typeof y=="string"){const U=Fr(n,y,O.path),d=e.resolve({path:U.path},O),p=i.createHref(U.fullPath);return ie(U,d,{params:f(d.params),hash:ai(U.hash),redirectedFrom:void 0,href:p})}let R;if("path"in y)R=ie({},y,{path:Fr(n,y.path,O.path).path});else{const U=ie({},y.params);for(const d in U)U[d]==null&&delete U[d];R=ie({},y,{params:h(y.params)}),O.params=h(O.params)}const k=e.resolve(R,O),te=y.hash||"";k.params=u(f(k.params));const oe=$p(s,ie({},y,{hash:R_(te),path:k.path})),V=i.createHref(oe);return ie({fullPath:oe,hash:te,query:s===yc?O_(y.query):y.query||{}},k,{redirectedFrom:void 0,href:V})}function F(y){return typeof y=="string"?Fr(n,y,a.value.path):ie({},y)}function z(y,O){if(c!==y)return Sn(8,{from:O,to:y})}function K(y){return q(y)}function _e(y){return K(ie(F(y),{replace:!0}))}function Ie(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:R}=O;let k=typeof R=="function"?R(y):R;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=F(k):{path:k},k.params={}),ie({query:y.query,hash:y.hash,params:y.params},k)}}function q(y,O){const R=c=A(y),k=a.value,te=y.state,oe=y.force,V=y.replace===!0,U=Ie(R);if(U)return q(ie(F(U),{state:te,force:oe,replace:V}),O||R);const d=R;d.redirectedFrom=O;let p;return!oe&&jp(s,k,R)&&(p=Sn(16,{to:d,from:k}),an(k,k,!0,!1)),(p?Promise.resolve(p):fe(d,k)).catch(g=>zt(g)?g:re(g,d,k)).then(g=>{if(g){if(zt(g,2))return q(ie(F(g.to),{state:te,force:oe,replace:V}),O||d)}else g=xe(d,k,!0,V,te);return De(d,k,g),g})}function ge(y,O){const R=z(y,O);return R?Promise.reject(R):Promise.resolve()}function fe(y,O){let R;const[k,te,oe]=U_(y,O);R=Wr(k.reverse(),"beforeRouteLeave",y,O);for(const U of k)U.leaveGuards.forEach(d=>{R.push(St(d,y,O))});const V=ge.bind(null,y,O);return R.push(V),Rn(R).then(()=>{R=[];for(const U of r.list())R.push(St(U,y,O));return R.push(V),Rn(R)}).then(()=>{R=Wr(te,"beforeRouteUpdate",y,O);for(const U of te)U.updateGuards.forEach(d=>{R.push(St(d,y,O))});return R.push(V),Rn(R)}).then(()=>{R=[];for(const U of y.matched)if(U.beforeEnter&&!O.matched.includes(U))if(Array.isArray(U.beforeEnter))for(const d of U.beforeEnter)R.push(St(d,y,O));else R.push(St(U.beforeEnter,y,O));return R.push(V),Rn(R)}).then(()=>(y.matched.forEach(U=>U.enterCallbacks={}),R=Wr(oe,"beforeRouteEnter",y,O),R.push(V),Rn(R))).then(()=>{R=[];for(const U of o.list())R.push(St(U,y,O));return R.push(V),Rn(R)}).catch(U=>zt(U,8)?U:Promise.reject(U))}function De(y,O,R){for(const k of l.list())k(y,O,R)}function xe(y,O,R,k,te){const oe=z(y,O);if(oe)return oe;const V=O===Tt,U=In?history.state:{};R&&(k||V?i.replace(y.fullPath,ie({scroll:V&&U&&U.scroll},te)):i.push(y.fullPath,te)),a.value=y,an(y,O,R,V),je()}let Ae;function yt(){Ae=i.listen((y,O,R)=>{const k=A(y),te=Ie(k);if(te){q(ie(te,{replace:!0}),k).catch(os);return}c=k;const oe=a.value;In&&Xp(ic(oe.fullPath,R.delta),li()),fe(k,oe).catch(V=>zt(V,4|8)?V:zt(V,2)?(q(V.to,k).then(U=>{zt(U,4|16)&&!R.delta&&R.type===ls.pop&&i.go(-1,!1)}).catch(os),Promise.reject()):(R.delta&&i.go(-R.delta,!1),re(V,k,oe))).then(V=>{V=V||xe(k,oe,!1),V&&(R.delta?i.go(-R.delta,!1):R.type===ls.pop&&zt(V,4|16)&&i.go(-1,!1)),De(k,oe,V)}).catch(os)})}let on=cs(),ln=cs(),me;function re(y,O,R){je(y);const k=ln.list();return k.length?k.forEach(te=>te(y,O,R)):console.error(y),Promise.reject(y)}function ee(){return me&&a.value!==Tt?Promise.resolve():new Promise((y,O)=>{on.add([y,O])})}function je(y){me||(me=!0,yt(),on.list().forEach(([O,R])=>y?R(y):O()),on.reset())}function an(y,O,R,k){const{scrollBehavior:te}=t;if(!In||!te)return Promise.resolve();const oe=!R&&Jp(ic(y.fullPath,0))||(k||!R)&&history.state&&history.state.scroll||null;return Pa().then(()=>te(y,O,oe)).then(V=>V&&Qp(V)).catch(V=>re(V,y,O))}const ft=y=>i.go(y);let nt;const Ve=new Set;return{currentRoute:a,addRoute:_,removeRoute:m,hasRoute:S,getRoutes:x,resolve:A,options:t,push:K,replace:_e,go:ft,back:()=>ft(-1),forward:()=>ft(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:ln.add,isReady:ee,install(y){const O=this;y.component("RouterLink",D_),y.component("RouterView",H_),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>es(a)}),In&&!nt&&a.value===Tt&&(nt=!0,K(i.location).catch(te=>{}));const R={};for(const te in Tt)R[te]=rt(()=>a.value[te]);y.provide(Mr,O),y.provide(ec,pn(R)),y.provide(Dr,a);const k=y.unmount;Ve.add(y),y.unmount=function(){Ve.delete(y),Ve.size<1&&(c=Tt,Ae&&Ae(),a.value=Tt,nt=!1,me=!1),k()}}}}function Rn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function U_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>Tn(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Tn(c,a))||i.push(a))}return[n,s,i]}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var W_="store";function xn(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function $_(t){return t!==null&&typeof t=="object"}function j_(t){return t&&typeof t.then=="function"}function V_(t,e){return function(){return t(e)}}function wc(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Ic(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;ci(t,n,[],t._modules.root,!0),$r(t,n,e)}function $r(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,r={};xn(i,function(o,l){r[l]=V_(o,t),Object.defineProperty(t.getters,l,{get:function(){return r[l]()},enumerable:!0})}),t._state=pn({data:e}),t.strict&&Y_(t),s&&n&&t._withCommit(function(){s.data=null})}function ci(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var l=jr(e,n.slice(0,-1)),a=n[n.length-1];t._withCommit(function(){l[a]=s.state})}var c=s.context=G_(t,o,n);s.forEachMutation(function(u,h){var f=o+h;z_(t,f,u,c)}),s.forEachAction(function(u,h){var f=u.root?h:o+h,_=u.handler||u;K_(t,f,_,c)}),s.forEachGetter(function(u,h){var f=o+h;q_(t,f,u,c)}),s.forEachChild(function(u,h){ci(t,e,n.concat(h),u,i)})}function G_(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,l){var a=ui(r,o,l),c=a.payload,u=a.options,h=a.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,c)},commit:s?t.commit:function(r,o,l){var a=ui(r,o,l),c=a.payload,u=a.options,h=a.type;(!u||!u.root)&&(h=e+h),t.commit(h,c,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return Tc(t,e)}},state:{get:function(){return jr(t.state,n)}}}),i}function Tc(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function z_(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function K_(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var l=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return j_(l)||(l=Promise.resolve(l)),t._devtoolHook?l.catch(function(a){throw t._devtoolHook.emit("vuex:error",a),a}):l})}function q_(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function Y_(t){Cn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function jr(t,e){return e.reduce(function(n,s){return n[s]},t)}function ui(t,e,n){return $_(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Q_="vuex bindings",Sc="vuex:mutations",Vr="vuex:actions",Nn="vuex",X_=0;function J_(t,e){Fp({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Q_]},function(n){n.addTimelineLayer({id:Sc,label:"Vuex Mutations",color:Rc}),n.addTimelineLayer({id:Vr,label:"Vuex Actions",color:Rc}),n.addInspector({id:Nn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Nn)if(s.filter){var i=[];Pc(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[Ac(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Nn){var i=s.nodeId;Tc(e,i),s.state=tg(sg(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Nn){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Nn),n.sendInspectorState(Nn),n.addTimelineEvent({layerId:Sc,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=X_++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:Vr,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:Vr,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var Rc=8702998,Z_=6710886,eg=16777215,xc={label:"namespaced",textColor:eg,backgroundColor:Z_};function Nc(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Ac(t,e){return{id:e||"root",label:Nc(e),tags:t.namespaced?[xc]:[],children:Object.keys(t._children).map(function(n){return Ac(t._children[n],e+n+"/")})}}function Pc(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[xc]:[]}),Object.keys(e._children).forEach(function(i){Pc(t,e._children[i],n,s+i+"/")})}function tg(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=ng(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?Nc(o):o,editable:!1,value:Gr(function(){return r[o]})}})}return i}function ng(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=Gr(function(){return t[n]})}else e[n]=Gr(function(){return t[n]})}),e}function sg(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Gr(t){try{return t()}catch(e){return e}}var Xe=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Oc={namespaced:{configurable:!0}};Oc.namespaced.get=function(){return!!this._rawModule.namespaced};Xe.prototype.addChild=function(e,n){this._children[e]=n};Xe.prototype.removeChild=function(e){delete this._children[e]};Xe.prototype.getChild=function(e){return this._children[e]};Xe.prototype.hasChild=function(e){return e in this._children};Xe.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Xe.prototype.forEachChild=function(e){xn(this._children,e)};Xe.prototype.forEachGetter=function(e){this._rawModule.getters&&xn(this._rawModule.getters,e)};Xe.prototype.forEachAction=function(e){this._rawModule.actions&&xn(this._rawModule.actions,e)};Xe.prototype.forEachMutation=function(e){this._rawModule.mutations&&xn(this._rawModule.mutations,e)};Object.defineProperties(Xe.prototype,Oc);var Kt=function(e){this.register([],e,!1)};Kt.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};Kt.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};Kt.prototype.update=function(e){kc([],this.root,e)};Kt.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new Xe(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&xn(n.modules,function(l,a){i.register(e.concat(a),l,s)})};Kt.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);!i||!i.runtime||n.removeChild(s)};Kt.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function kc(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;kc(t.concat(s),e.getChild(s),n.modules[s])}}function QC(t){return new Fe(t)}var Fe=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Kt(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var o=this,l=this,a=l.dispatch,c=l.commit;this.dispatch=function(f,_){return a.call(o,f,_)},this.commit=function(f,_,m){return c.call(o,f,_,m)},this.strict=i;var u=this._modules.root.state;ci(this,u,[],this._modules.root),$r(this,u),s.forEach(function(h){return h(n)})},zr={state:{configurable:!0}};Fe.prototype.install=function(e,n){e.provide(n||W_,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&J_(e,this)};zr.state.get=function(){return this._state.data};zr.state.set=function(t){};Fe.prototype.commit=function(e,n,s){var i=this,r=ui(e,n,s),o=r.type,l=r.payload,a={type:o,payload:l},c=this._mutations[o];!c||(this._withCommit(function(){c.forEach(function(h){h(l)})}),this._subscribers.slice().forEach(function(u){return u(a,i.state)}))};Fe.prototype.dispatch=function(e,n){var s=this,i=ui(e,n),r=i.type,o=i.payload,l={type:r,payload:o},a=this._actions[r];if(!!a){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(l,s.state)})}catch{}var c=a.length>1?Promise.all(a.map(function(u){return u(o)})):a[0](o);return new Promise(function(u,h){c.then(function(f){try{s._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(l,s.state)})}catch{}u(f)},function(f){try{s._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(l,s.state,f)})}catch{}h(f)})})}};Fe.prototype.subscribe=function(e,n){return wc(e,this._subscribers,n)};Fe.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return wc(s,this._actionSubscribers,n)};Fe.prototype.watch=function(e,n,s){var i=this;return Cn(function(){return e(i.state,i.getters)},n,Object.assign({},s))};Fe.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Fe.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),ci(this,this.state,e,this._modules.get(e),s.preserveState),$r(this,this.state)};Fe.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=jr(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Ic(this)};Fe.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Fe.prototype.hotUpdate=function(e){this._modules.update(e),Ic(this,!0)};Fe.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Fe.prototype,zr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw An(e)},An=function(t){return new Error("Firebase Database ("+Mc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ig=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Kr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ig(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Lc=function(t){const e=Dc(t);return Kr.encodeByteArray(e,!0)},Fc=function(t){return Lc(t).replace(/\./g,"")},Bc=function(t){try{return Kr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t){return Hc(void 0,t)}function Hc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!og(n)||(t[n]=Hc(t[n],e[n]));return t}function og(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lg())}function ag(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wc(){return Mc.NODE_ADMIN===!0}function cg(){return typeof indexedDB=="object"}function ug(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="FirebaseError";class qr extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=hg,Object.setPrototypeOf(this,qr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$c.prototype.create)}}class $c{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?fg(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new qr(i,l,s)}}function fg(t,e){return t.replace(dg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const dg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=hs(Bc(r[0])||""),n=hs(Bc(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},pg=function(t){const e=jc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_g=function(t){const e=jc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Pn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Vc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Yr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Gc(r)&&Gc(o)){if(!Yr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Gc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function fi(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},di=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){return t&&t._delegate?t._delegate:t}class fs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new us;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eg(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cg(t){return t===qt?void 0:t}function Eg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const wg={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Ig=le.INFO,Tg={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Sg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Tg[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zc{constructor(e){this.name=e,this._logLevel=Ig,this._logHandler=Sg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Rg=(t,e)=>e.some(n=>t instanceof n);let Kc,qc;function xg(){return Kc||(Kc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ng(){return qc||(qc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yc=new WeakMap,Qr=new WeakMap,Qc=new WeakMap,Xr=new WeakMap,Jr=new WeakMap;function Ag(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Rt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yc.set(n,t)}).catch(()=>{}),Jr.set(e,t),e}function Pg(t){if(Qr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Qr.set(t,e)}let Zr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Og(t){Zr=t(Zr)}function kg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(eo(this),e,...n);return Qc.set(s,e.sort?e.sort():[e]),Rt(s)}:Ng().includes(t)?function(...e){return t.apply(eo(this),e),Rt(Yc.get(this))}:function(...e){return Rt(t.apply(eo(this),e))}}function Mg(t){return typeof t=="function"?kg(t):(t instanceof IDBTransaction&&Pg(t),Rg(t,xg())?new Proxy(t,Zr):t)}function Rt(t){if(t instanceof IDBRequest)return Ag(t);if(Xr.has(t))return Xr.get(t);const e=Mg(t);return e!==t&&(Xr.set(t,e),Jr.set(e,t)),e}const eo=t=>Jr.get(t);function Dg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Rt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Rt(o.result),a.oldVersion,a.newVersion,Rt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Lg=["get","getKey","getAll","getAllKeys","count"],Fg=["put","add","delete","clear"],to=new Map;function Xc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(to.get(e))return to.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Fg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Lg.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return to.set(e,r),r}Og(t=>ml(gl({},t),{get:(e,n,s)=>Xc(e,n)||t.get(e,n,s),has:(e,n)=>!!Xc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Hg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const no="@firebase/app",Jc="0.7.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new zc("@firebase/app"),Ug="@firebase/app-compat",Wg="@firebase/analytics-compat",$g="@firebase/analytics",jg="@firebase/app-check-compat",Vg="@firebase/app-check",Gg="@firebase/auth",zg="@firebase/auth-compat",Kg="@firebase/database",qg="@firebase/database-compat",Yg="@firebase/functions",Qg="@firebase/functions-compat",Xg="@firebase/installations",Jg="@firebase/installations-compat",Zg="@firebase/messaging",em="@firebase/messaging-compat",tm="@firebase/performance",nm="@firebase/performance-compat",sm="@firebase/remote-config",im="@firebase/remote-config-compat",rm="@firebase/storage",om="@firebase/storage-compat",lm="@firebase/firestore",am="@firebase/firestore-compat",cm="firebase",um="9.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="[DEFAULT]",hm={[no]:"fire-core",[Ug]:"fire-core-compat",[$g]:"fire-analytics",[Wg]:"fire-analytics-compat",[Vg]:"fire-app-check",[jg]:"fire-app-check-compat",[Gg]:"fire-auth",[zg]:"fire-auth-compat",[Kg]:"fire-rtdb",[qg]:"fire-rtdb-compat",[Yg]:"fire-fn",[Qg]:"fire-fn-compat",[Xg]:"fire-iid",[Jg]:"fire-iid-compat",[Zg]:"fire-fcm",[em]:"fire-fcm-compat",[tm]:"fire-perf",[nm]:"fire-perf-compat",[sm]:"fire-rc",[im]:"fire-rc-compat",[rm]:"fire-gcs",[om]:"fire-gcs-compat",[lm]:"fire-fst",[am]:"fire-fst-compat","fire-js":"fire-js",[cm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Map,io=new Map;function fm(t,e){try{t.container.addComponent(e)}catch(n){so.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _i(t){const e=t.name;if(io.has(e))return so.debug(`There were multiple attempts to register component ${e}.`),!1;io.set(e,t);for(const n of pi.values())fm(n,t);return!0}function dm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Yt=new $c("app","Firebase",pm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=um;function XC(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Zc,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});const i=pi.get(s);if(i){if(Yr(t,i.options)&&Yr(n,i.config))return i;throw Yt.create("duplicate-app",{appName:s})}const r=new bg(s);for(const l of io.values())r.addComponent(l);const o=new _m(t,n,r);return pi.set(s,o),o}function mm(t=Zc){const e=pi.get(t);if(!e)throw Yt.create("no-app",{appName:t});return e}function kn(t,e,n){var s;let i=(s=hm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),so.warn(l.join(" "));return}_i(new fs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="firebase-heartbeat-database",vm=1,ds="firebase-heartbeat-store";let ro=null;function eu(){return ro||(ro=Dg(ym,vm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ds)}}}).catch(t=>{throw Yt.create("storage-open",{originalErrorMessage:t.message})})),ro}async function Cm(t){var e;try{return(await eu()).transaction(ds).objectStore(ds).get(nu(t))}catch(n){throw Yt.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function tu(t,e){var n;try{const i=(await eu()).transaction(ds,"readwrite");return await i.objectStore(ds).put(e,nu(t)),i.done}catch(s){throw Yt.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function nu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=1024,bm=30*24*60*60*1e3;class wm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=su();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=bm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=su(),{heartbeatsToSend:n,unsentEntries:s}=Im(this._heartbeatsCache.heartbeats),i=Fc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function su(){return new Date().toISOString().substring(0,10)}function Im(t,e=Em){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),iu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),iu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Tm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cg()?ug().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Cm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function iu(t){return Fc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t){_i(new fs("platform-logger",e=>new Bg(e),"PRIVATE")),_i(new fs("heartbeat",e=>new wm(e),"PRIVATE")),kn(no,Jc,t),kn(no,Jc,"esm2017"),kn("fire-js","")}Sm("");const ru="@firebase/database",ou="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lu="";function Rm(t){lu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xm(e)}}catch{}return new Nm},Qt=au("localStorage"),oo=au("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new zc("@firebase/database"),Am=function(){let t=1;return function(){return t++}}(),cu=function(t){const e=yg(t),n=new mg;n.update(e);const s=n.digest();return Kr.encodeByteArray(s)},ps=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ps.apply(null,s):typeof s=="object"?e+=ve(s):e+=s,e+=" "}return e};let Xt=null,uu=!0;const Pm=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Mn.logLevel=le.VERBOSE,Xt=Mn.log.bind(Mn),e&&oo.set("logging_enabled",!0)):typeof t=="function"?Xt=t:(Xt=null,oo.remove("logging_enabled"))},Se=function(...t){if(uu===!0&&(uu=!1,Xt===null&&oo.get("logging_enabled")===!0&&Pm(!0)),Xt){const e=ps.apply(null,t);Xt(e)}},_s=function(t){return function(...e){Se(t,...e)}},lo=function(...t){const e="FIREBASE INTERNAL ERROR: "+ps(...t);Mn.error(e)},Jt=function(...t){const e=`FIREBASE FATAL ERROR: ${ps(...t)}`;throw Mn.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+ps(...t);Mn.warn(e)},Om=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ao=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},km=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Dn="[MIN_NAME]",Zt="[MAX_NAME]",en=function(t,e){if(t===e)return 0;if(t===Dn||e===Zt)return-1;if(e===Dn||t===Zt)return 1;{const n=du(t),s=du(e);return n!==null?s!==null?n-s==0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Mm=function(t,e){return t===e?0:t<e?-1:1},gs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},co=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ve(e[s]),n+=":",n+=co(t[e[s]]);return n+="}",n},hu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const fu=function(t){b(!ao(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t==-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Dm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Lm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Fm(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Bm=new RegExp("^-?(0*)\\d{1,10}$"),Hm=-2147483648,Um=2147483647,du=function(t){if(Bm.test(t)){const e=Number(t);if(e>=Hm&&e<=Um)return e}return null},Ln=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},Wm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ms=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class uo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}uo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="5",pu="v",_u="s",gu="r",mu="f",yu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vu="ls",Cu="p",fo="ac",Eu="websocket",bu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Gm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function wu(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Eu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===bu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gm(t)&&(n.ns=t.namespace);const i=[];return Re(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.counters_={}}incrementCounter(e,n=1){ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return rg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po={},_o={};function go(t){const e=t.toString();return po[e]||(po[e]=new zm),po[e]}function Km(t,e){const n=t.toString();return _o[n]||(_o[n]=e()),_o[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ln(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="start",Ym="close",Qm="pLPCommand",Xm="pRTLPCB",Tu="id",Su="pw",Ru="ser",Jm="cb",Zm="seg",ey="ts",ty="d",ny="dframe",xu=1870,Nu=30,sy=xu-Nu,iy=25e3,ry=3e4;class Fn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_s(e),this.stats_=go(n),this.urlFn=a=>(this.appCheckToken&&(a[fo]=this.appCheckToken),wu(n,bu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ry)),km(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Iu)this.id=l,this.password=a;else if(o===Ym)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Iu]="t",s[Ru]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Jm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[pu]=ho,this.transportSessionId&&(s[_u]=this.transportSessionId),this.lastSessionId&&(s[vu]=this.lastSessionId),this.applicationId&&(s[Cu]=this.applicationId),this.appCheckToken&&(s[fo]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&yu.test(location.hostname)&&(s[gu]=mu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fn.forceAllow_=!0}static forceDisallow(){Fn.forceDisallow_=!0}static isAvailable(){return Fn.forceAllow_?!0:!Fn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Dm()&&!Lm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lc(n),i=hu(s,sy);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[ny]="t",s[Tu]=e,s[Su]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Am(),window[Qm+this.uniqueCallbackIdentifier]=e,window[Xm+this.uniqueCallbackIdentifier]=n,this.myIFrame=mo.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Tu]=this.myID,e[Su]=this.myPW,e[Ru]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Nu+s.length<=xu;){const o=this.pendingSegs.shift();s=s+"&"+Zm+i+"="+o.seg+"&"+ey+i+"="+o.ts+"&"+ty+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(iy)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=16384,ly=45e3;let gi=null;typeof MozWebSocket!="undefined"?gi=MozWebSocket:typeof WebSocket!="undefined"&&(gi=WebSocket);class Je{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_s(this.connId),this.stats_=go(n),this.connURL=Je.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[pu]=ho,typeof location!="undefined"&&location.hostname&&yu.test(location.hostname)&&(o[gu]=mu),n&&(o[_u]=n),s&&(o[vu]=s),i&&(o[fo]=i),r&&(o[Cu]=r),wu(e,Eu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qt.set("previous_websocket_failure",!0);try{let s;Wc(),this.mySock=new gi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&gi!==null&&!Je.forceDisallow_}static previouslyFailed(){return Qt.isInMemoryStorage||Qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=hs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=hu(n,oy);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ly))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Je.responsesRequiredToBeHealthy=2;Je.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fn,Je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Je&&Je.isAvailable();let s=n&&!Je.previouslyFailed();if(e.webSocketOnly&&(n||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Je];else{const i=this.transports_=[];for(const r of ys.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ys.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ys.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=6e4,cy=5e3,uy=10*1024,hy=100*1024,yo="t",Au="d",fy="s",Pu="r",dy="e",Ou="o",ku="a",Mu="n",Du="p",py="h";class _y{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_s("c:"+this.id+":"),this.transportManager_=new ys(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ms(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yo in e){const n=e[yo];n===ku?this.upgradeIfSecondaryHealthy_():n===Pu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ou&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gs("t",e),s=gs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Du,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ku,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gs("t",e),s=gs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gs(yo,e);if(Au in e){const s=e[Au];if(n===py)this.onHandshake_(s);else if(n===Mu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fy?this.onConnectionShutdown_(s):n===Pu?this.onReset_(s):n===dy?lo("Server Error: "+s):n===Ou?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ho!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ms(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ay))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ms(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Du,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends Fu{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Uc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new mi}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=32,Hu=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new Z("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xt(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function vo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function gy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Uu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function de(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Z(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return Me(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function my(t,e){const n=vs(t,0),s=vs(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=en(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Co(t,e){if(xt(t)!==xt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function qe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(xt(t)>xt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class yy{constructor(e,n){this.errorPrefix_=n,this.parts_=vs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=di(this.parts_[s]);Wu(this)}}function vy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=di(e),Wu(t)}function Cy(t){const e=t.parts_.pop();t.byteLength_-=di(e),t.parts_.length>0&&(t.byteLength_-=1)}function Wu(t){if(t.byteLength_>Hu)throw new Error(t.errorPrefix_+"has a key path longer than "+Hu+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bu+") or object contains a cycle "+tn(t))}function tn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends Fu{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Eo}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=1e3,Ey=60*5*1e3,by=3*1e3,$u=30*1e3,wy=1.3,Iy=3e4,Ty="server_kill",ju=3;class gt extends Lu{constructor(e,n,s,i,r,o,l,a){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=gt.nextPersistentConnectionId_++,this.log_=_s("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cs,this.maxReconnectDelay_=Ey,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Wc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Eo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ve(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new us,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||i!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},by),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;gt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ut(e,"w")){const s=Pn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_g(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$u)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=pg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):lo("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Iy&&(this.reconnectDelay_=Cs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+gt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new _y(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{ke(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ty)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ke(h),a())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vc(this.interruptReasons_)&&(this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>co(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ju&&(this.reconnectDelay_=$u,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ju&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+lu.replace(/\./g,"-")]=1,Uc()?e["framework.cordova"]=1:ag()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mi.getInstance().currentlyOnline();return Vc(this.interruptReasons_)&&e}}gt.nextPersistentConnectionId_=0;gt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new j(Dn,e),i=new j(Dn,n);return this.compare(s,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi;class Vu extends yi{static get __EMPTY_NODE(){return vi}static set __EMPTY_NODE(e){vi=e}compare(e,n){return en(e.name,n.name)}isDefinedOn(e){throw An("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Zt,vi)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,vi)}toString(){return".key"}}const Bn=new Vu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:be.RED,this.left=i!=null?i:Be.EMPTY_NODE,this.right=r!=null?r:Be.EMPTY_NODE}copy(e,n,s,i,r){return new be(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class Sy{copy(e,n,s,i,r){return this}insert(e,n,s){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Be{constructor(e,n=Be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new Be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ci(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ci(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ci(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ci(this.root_,null,this.comparator_,!0,e)}}Be.EMPTY_NODE=new Sy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(t,e){return en(t.name,e.name)}function bo(t,e){return en(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo;function xy(t){wo=t}const Gu=function(t){return typeof t=="number"?"number:"+fu(t):"string:"+t},zu=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ut(e,".sv"),"Priority must be a string or number.")}else b(t===wo||t.isEmpty(),"priority of unexpected type.");b(t===wo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zu(this.priorityNode_)}static set __childrenNodeConstructor(e){Ku=e}static get __childrenNodeConstructor(){return Ku}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:$(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||xt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=fu(this.value_):e+=this.value_,this.lazyHash_=cu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),r=we.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qu,Yu;function Ny(t){qu=t}function Ay(t){Yu=t}class Py extends yi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?en(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Zt,new we("[PRIORITY-POST]",Yu))}makePost(e,n){const s=qu(e);return new j(n,new we("[PRIORITY-POST]",s))}toString(){return".priority"}}const pe=new Py;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=Math.log(2);class ky{constructor(e){const n=r=>parseInt(Math.log(r)/Oy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ei=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new be(f,h.node,be.BLACK,null,null);{const _=parseInt(u/2,10)+a,m=i(a,_),x=i(_+1,c);return h=t[_],f=n?n(h):h,new be(f,h.node,be.BLACK,m,x)}},r=function(a){let c=null,u=null,h=t.length;const f=function(m,x){const S=h-m,A=h;h-=m;const F=i(S+1,A),z=t[S],K=n?n(z):z;_(new be(K,z.node,x,null,F))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const x=a.nextBitIsOne(),S=Math.pow(2,a.count-(m+1));x?f(S,be.BLACK):(f(S,be.BLACK),f(S,be.RED))}return u},o=new ky(t.length),l=r(o);return new Be(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io;const Hn={};class mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(Hn&&pe,"ChildrenNode.ts has not been loaded"),Io=Io||new mt({".priority":Hn},{".priority":pe}),Io}get(e){const n=Pn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Be?n:null}hasIndex(e){return ut(this.indexSet_,e.toString())}addIndex(e,n){b(e!==Bn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(j.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ei(s,e.getCompare()):l=Hn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new mt(u,c)}addToIndexes(e,n){const s=hi(this.indexes_,(i,r)=>{const o=Pn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===Hn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ei(l,o.getCompare())}else return Hn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new mt(s,this.indexSet_)}removeFromIndexes(e,n){const s=hi(this.indexes_,i=>{if(i===Hn)return i;{const r=n.get(e.name);return r?i.remove(new j(e.name,r)):i}});return new mt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;class L{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&zu(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Es||(Es=new L(new Be(bo),null,mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Es}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Es:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new j(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Es:this.priorityNode_;return new L(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{b($(e)!==".priority"||xt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(pe,(o,l)=>{n[o]=l.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gu(this.getPriority().val())+":"),this.forEachChild(pe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":cu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new j(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bs?-1:0}withIndex(e){if(e===Bn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Bn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(pe),i=n.getIterator(pe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Bn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class My extends L{constructor(){super(new Be(bo),L.EMPTY_NODE,mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const bs=new My;Object.defineProperties(j,{MIN:{value:new j(Dn,L.EMPTY_NODE)},MAX:{value:new j(Zt,bs)}});Vu.__EMPTY_NODE=L.EMPTY_NODE;we.__childrenNodeConstructor=L;xy(bs);Ay(bs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=!0;function Ce(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,Ce(e))}if(!(t instanceof Array)&&Dy){const n=[];let s=!1;if(Re(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ce(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return L.EMPTY_NODE;const r=Ei(n,Ry,o=>o.name,bo);if(s){const o=Ei(n,pe.getCompare());return new L(r,Ce(e),new mt({".priority":o},{".priority":pe}))}else return new L(r,Ce(e),mt.Default)}else{let n=L.EMPTY_NODE;return Re(t,(s,i)=>{if(ut(t,s)&&s.substring(0,1)!=="."){const r=Ce(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ce(e))}}Ny(Ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly extends yi{constructor(e){super();this.indexPath_=e,b(!G(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?en(e.name,n.name):r}makePost(e,n){const s=Ce(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new j(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,bs);return new j(Zt,e)}toString(){return vs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy extends yi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?en(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const s=Ce(e);return new j(n,s)}toString(){return".value"}}const By=new Fy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Hy=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Qu.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Qu.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){return{type:"value",snapshotNode:t}}function Un(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ws(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Is(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Uy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ws(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Un(n,s)):o.trackChildChange(Is(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(pe,(i,r)=>{n.hasChild(i)||s.trackChildChange(ws(i,r))}),n.isLeafNode()||n.forEachChild(pe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Is(i,r,o))}else s.trackChildChange(Un(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.indexedFilter_=new To(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ts.getStartPost_(e),this.endPost_=Ts.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new j(n,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return n.forEachChild(pe,(o,l)=>{r.matches(new j(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.rangedFilter_=new Ts(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new j(n,s))||(s=L.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(f,_)=>h(_,f)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:i=i.updateImmediateChild(h.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new j(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Is(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ws(n,h));const x=l.updateImmediateChild(n,L.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Un(f.name,f.node)),x.updateImmediateChild(f.name,f.node)):x}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ws(c.name,c.node)),r.trackChildChange(Un(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pe}copy(){const e=new So;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $y(t){return t.loadsAllData()?new To(t.getIndex()):t.hasLimit()?new Wy(t):new Ts(t)}function Ju(t){const e={};if(t.isDefault())return e;let n;return t.index_===pe?n="$priority":t.index_===By?n="$value":t.index_===Bn?n="$key":(b(t.index_ instanceof Ly,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_&&(e.startAt=ve(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ve(t.indexStartName_))),t.endSet_&&(e.endAt=ve(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ve(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Zu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Lu{constructor(e,n,s,i){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=_s("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=bi.getListenId_(e,s),l={};this.listens_[o]=l;const a=Ju(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Pn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=bi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ju(e._queryParams),s=e._path.toString(),i=new us;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+gg(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=hs(l.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(){return{value:null,children:new Map}}function eh(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,wi());const i=t.children.get(s);e=ae(e),eh(i,e,n)}}function Ro(t,e,n){t.value!==null?n(e,t.value):Vy(t,(s,i)=>{const r=new Z(e.toString()+"/"+s);Ro(i,r,n)})}function Vy(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=10*1e3,zy=30*1e3,Ky=5*60*1e3;class qy{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Gy(e);const s=th+(zy-th)*Math.random();ms(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Re(e,(i,r)=>{r>0&&ut(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ms(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ky))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ze||(Ze={}));function xo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function No(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ao(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ze.ACK_USER_WRITE,this.source=xo()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new Ii(X(),n,this.revert)}}else return b($(this.path)===e,"operationForChild called for unrelated child."),new Ii(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.source=e,this.path=n,this.type=Ze.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Ss(this.source,X()):new Ss(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ze.OVERWRITE}operationForChild(e){return G(this.path)?new nn(this.source,X(),this.snap.getImmediateChild(e)):new nn(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ze.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new nn(this.source,X(),n.value):new Wn(this.source,X(),n)}else return b($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wn(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Qy(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Uy(o.childName,o.snapshotNode))}),Rs(t,i,"child_removed",e,s,n),Rs(t,i,"child_added",e,s,n),Rs(t,i,"child_moved",r,s,n),Rs(t,i,"child_changed",e,s,n),Rs(t,i,"value",e,s,n),i}function Rs(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Jy(t,l,a)),o.forEach(l=>{const a=Xy(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Xy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Jy(t,e,n){if(e.childName==null||n.childName==null)throw An("Should only compare child_ events.");const s=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t,e){return{eventCache:t,serverCache:e}}function xs(t,e,n,s){return Ti(new Nt(e,n,s),t.serverCache)}function nh(t,e,n,s){return Ti(t.eventCache,new Nt(e,n,s))}function Si(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function sn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po;const Zy=()=>(Po||(Po=new Be(Mm)),Po);class ce{constructor(e,n=Zy()){this.value=e,this.children=n}static fromObject(e){let n=new ce(null);return Re(e,(s,i)=>{n=n.set(new Z(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(G(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ae(e),n);return r!=null?{path:de(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(ae(e)):new ce(null)}}set(e,n){if(G(e))return new ce(n,this.children);{const s=$(e),r=(this.children.get(s)||new ce(null)).set(ae(e),n),o=this.children.insert(s,r);return new ce(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ce(null):new ce(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(ae(e)):null}}setTree(e,n){if(G(e))return n;{const s=$(e),r=(this.children.get(s)||new ce(null)).setTree(ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ce(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(G(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(ae(e),de(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,s){if(G(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(ae(e),de(n,i),s):new ce(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new ce(null))}}function Ns(t,e,n){if(G(e))return new et(new ce(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Me(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new ce(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function Oo(t,e,n){let s=t;return Re(n,(i,r)=>{s=Ns(s,de(e,i),r)}),s}function sh(t,e){if(G(e))return et.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new et(n)}}function ko(t,e){return rn(t,e)!=null}function rn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function ih(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pe,(s,i)=>{e.push(new j(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new j(s,i.value))}),e}function At(t,e){if(G(e))return t;{const n=rn(t,e);return n!=null?new et(new ce(n)):new et(t.writeTree_.subtree(e))}}function Mo(t){return t.writeTree_.isEmpty()}function $n(t,e){return rh(X(),t.writeTree_,e)}function rh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=rh(de(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(de(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t,e){return uh(e,t)}function ev(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ns(t.visibleWrites,e,n)),t.lastWriteId=s}function tv(t,e,n,s){b(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Oo(t.visibleWrites,e,n),t.lastWriteId=s}function nv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function sv(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&iv(l,s.path)?i=!1:qe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return rv(t),!0;if(s.snap)t.visibleWrites=sh(t.visibleWrites,s.path);else{const l=s.children;Re(l,a=>{t.visibleWrites=sh(t.visibleWrites,de(s.path,a))})}return!0}else return!1}function iv(t,e){if(t.snap)return qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qe(de(t.path,n),e))return!0;return!1}function rv(t){t.visibleWrites=oh(t.allWrites,ov,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ov(t){return t.visible}function oh(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)qe(n,o)?(l=Me(n,o),s=Ns(s,l,r.snap)):qe(o,n)&&(l=Me(o,n),s=Ns(s,X(),r.snap.getChild(l)));else if(r.children){if(qe(n,o))l=Me(n,o),s=Oo(s,l,r.children);else if(qe(o,n))if(l=Me(o,n),G(l))s=Oo(s,X(),r.children);else{const a=Pn(r.children,$(l));if(a){const c=a.getChild(ae(l));s=Ns(s,X(),c)}}}else throw An("WriteRecord should have .snap or .children")}}return s}function lh(t,e,n,s,i){if(!s&&!i){const r=rn(t.visibleWrites,e);if(r!=null)return r;{const o=At(t.visibleWrites,e);if(Mo(o))return n;if(n==null&&!ko(o,X()))return null;{const l=n||L.EMPTY_NODE;return $n(o,l)}}}else{const r=At(t.visibleWrites,e);if(!i&&Mo(r))return n;if(!i&&n==null&&!ko(r,X()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(qe(c.path,e)||qe(e,c.path))},l=oh(t.allWrites,o,e),a=n||L.EMPTY_NODE;return $n(l,a)}}}function lv(t,e,n){let s=L.EMPTY_NODE;const i=rn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=At(t.visibleWrites,e);return n.forEachChild(pe,(o,l)=>{const a=$n(At(r,new Z(o)),l);s=s.updateImmediateChild(o,a)}),ih(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=At(t.visibleWrites,e);return ih(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function av(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,n);if(ko(t.visibleWrites,r))return null;{const o=At(t.visibleWrites,r);return Mo(o)?i.getChild(n):$n(o,i.getChild(n))}}function cv(t,e,n,s){const i=de(e,n),r=rn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=At(t.visibleWrites,i);return $n(o,s.getNode().getImmediateChild(n))}else return null}function uv(t,e){return rn(t.visibleWrites,e)}function hv(t,e,n,s,i,r,o){let l;const a=At(t.visibleWrites,e),c=rn(a,X());if(c!=null)l=c;else if(n!=null)l=$n(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function fv(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function xi(t,e,n,s){return lh(t.writeTree,t.treePath,e,n,s)}function Do(t,e){return lv(t.writeTree,t.treePath,e)}function ah(t,e,n,s){return av(t.writeTree,t.treePath,e,n,s)}function Ni(t,e){return uv(t.writeTree,de(t.treePath,e))}function dv(t,e,n,s,i,r){return hv(t.writeTree,t.treePath,e,n,s,i,r)}function Lo(t,e,n){return cv(t.writeTree,t.treePath,e,n)}function ch(t,e){return uh(de(t.treePath,e),t.writeTree)}function uh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Is(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ws(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Un(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Is(s,e.snapshotNode,i.oldSnap));else throw An("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const hh=new _v;class Fo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Nt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Lo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:sn(this.viewCache_),r=dv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t){return{filter:t}}function mv(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function yv(t,e,n,s,i){const r=new pv;let o,l;if(n.type===Ze.OVERWRITE){const c=n;c.source.fromUser?o=Bo(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),o=Ai(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ze.MERGE){const c=n;c.source.fromUser?o=Cv(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Ho(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ze.ACK_USER_WRITE){const c=n;c.revert?o=wv(t,e,c.path,s,i,r):o=Ev(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ze.LISTEN_COMPLETE)o=bv(t,e,n.path,s,r);else throw An("Unknown operation type: "+n.type);const a=r.getChanges();return vv(e,o,a),{viewCache:o,changes:a}}function vv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Si(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Xu(Si(e)))}}function fh(t,e,n,s,i,r){const o=e.eventCache;if(Ni(s,n)!=null)return e;{let l,a;if(G(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=sn(e),u=c instanceof L?c:L.EMPTY_NODE,h=Do(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=xi(s,sn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=$(n);if(c===".priority"){b(xt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=ah(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ae(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=ah(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Lo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return xs(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Ai(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(G(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=$(n);if(!a.isCompleteForPath(n)&&xt(n)>1)return e;const m=ae(n),S=a.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(a.getNode(),S):c=u.updateChild(a.getNode(),_,S,m,hh,null)}const h=nh(e,c,a.isFullyInitialized()||G(n),u.filtersNodes()),f=new Fo(i,h,r);return fh(t,h,n,i,f,l)}function Bo(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Fo(i,e,r);if(G(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=xs(e,c,!0,t.filter.filtersNodes());else{const h=$(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=xs(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=ae(n),_=l.getNode().getImmediateChild(h);let m;if(G(f))m=s;else{const x=u.getCompleteChild(h);x!=null?vo(f)===".priority"&&x.getChild(Uu(f)).isEmpty()?m=x:m=x.updateChild(f,s):m=L.EMPTY_NODE}if(_.equals(m))a=e;else{const x=t.filter.updateChild(l.getNode(),h,m,f,u,o);a=xs(e,x,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function dh(t,e){return t.eventCache.isCompleteForChild(e)}function Cv(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=de(n,a);dh(e,$(u))&&(l=Bo(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=de(n,a);dh(e,$(u))||(l=Bo(t,l,u,c,i,r,o))}),l}function ph(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ho(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;G(n)?c=s:c=new ce(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=ph(t,_,f);a=Ai(t,a,new Z(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),x=ph(t,m,f);a=Ai(t,a,new Z(h),x,i,r,o,l)}}),a}function Ev(t,e,n,s,i,r,o){if(Ni(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(G(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ai(t,e,n,a.getNode().getChild(n),i,r,l,o);if(G(n)){let c=new ce(null);return a.getNode().forEachChild(Bn,(u,h)=>{c=c.set(new Z(u),h)}),Ho(t,e,n,c,i,r,l,o)}else return e}else{let c=new ce(null);return s.foreach((u,h)=>{const f=de(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Ho(t,e,n,c,i,r,l,o)}}function bv(t,e,n,s,i){const r=e.serverCache,o=nh(e,r.getNode(),r.isFullyInitialized()||G(n),r.isFiltered());return fh(t,o,n,s,hh,i)}function wv(t,e,n,s,i,r){let o;if(Ni(s,n)!=null)return e;{const l=new Fo(s,e,i),a=e.eventCache.getNode();let c;if(G(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=xi(s,sn(e));else{const h=e.serverCache.getNode();b(h instanceof L,"serverChildren would be complete if leaf node"),u=Do(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=$(n);let h=Lo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ae(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,L.EMPTY_NODE,ae(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=xi(s,sn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ni(s,X())!=null,xs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new To(s.getIndex()),r=$y(s);this.processor_=gv(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(L.EMPTY_NODE,l.getNode(),null),u=new Nt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Nt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ti(h,u),this.eventGenerator_=new Yy(this.query_)}get query(){return this.query_}}function Tv(t){return t.viewCache_.serverCache.getNode()}function Sv(t){return Si(t.viewCache_)}function Rv(t,e){const n=sn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function _h(t){return t.eventRegistrations_.length===0}function xv(t,e){t.eventRegistrations_.push(e)}function gh(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function mh(t,e,n,s){e.type===Ze.MERGE&&e.source.queryId!==null&&(b(sn(t.viewCache_),"We should always have a full cache before handling merges"),b(Si(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=yv(t.processor_,i,e,n,s);return mv(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,yh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Nv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(pe,(r,o)=>{s.push(Un(r,o))}),n.isFullyInitialized()&&s.push(Xu(n.getNode())),yh(t,s,n.getNode(),e)}function yh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Qy(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi;class vh{constructor(){this.views=new Map}}function Av(t){b(!Pi,"__referenceConstructor has already been defined"),Pi=t}function Pv(){return b(Pi,"Reference.ts has not been loaded"),Pi}function Ov(t){return t.views.size===0}function Uo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),mh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(mh(o,e,n,s));return r}}function Wo(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=xi(n,i?s:null),a=!1;l?a=!0:s instanceof L?(l=Do(n,s),a=!1):(l=L.EMPTY_NODE,a=!1);const c=Ti(new Nt(l,a,!1),new Nt(s,i,!1));return new Iv(e,c)}return o}function kv(t,e,n,s,i,r){const o=Wo(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xv(o,n),Nv(o,n)}function Mv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ot(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(gh(c,n,s)),_h(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(gh(a,n,s)),_h(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ot(t)&&r.push(new(Pv())(e._repo,e._path)),{removed:r,events:o}}function Ch(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pt(t,e){let n=null;for(const s of t.views.values())n=n||Rv(s,e);return n}function Eh(t,e){if(e._queryParams.loadsAllData())return Oi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function bh(t,e){return Eh(t,e)!=null}function Ot(t){return Oi(t)!=null}function Oi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki;function Dv(t){b(!ki,"__referenceConstructor has already been defined"),ki=t}function Lv(){return b(ki,"Reference.ts has not been loaded"),ki}let Fv=1;class wh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=fv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ih(t,e,n,s,i){return ev(t.pendingWriteTree_,e,n,s,i),i?jn(t,new nn(xo(),e,n)):[]}function Bv(t,e,n,s){tv(t.pendingWriteTree_,e,n,s);const i=ce.fromObject(n);return jn(t,new Wn(xo(),e,i))}function kt(t,e,n=!1){const s=nv(t.pendingWriteTree_,e);if(sv(t.pendingWriteTree_,e)){let r=new ce(null);return s.snap!=null?r=r.set(X(),!0):Re(s.children,o=>{r=r.set(new Z(o),!0)}),jn(t,new Ii(s.path,r,n))}else return[]}function As(t,e,n){return jn(t,new nn(No(),e,n))}function Hv(t,e,n){const s=ce.fromObject(n);return jn(t,new Wn(No(),e,s))}function Uv(t,e){return jn(t,new Ss(No(),e))}function Wv(t,e,n){const s=jo(t,n);if(s){const i=Vo(s),r=i.path,o=i.queryId,l=Me(r,e),a=new Ss(Ao(o),l);return Go(t,r,a)}else return[]}function Mi(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||bh(r,e))){const l=Mv(r,e,n,s);Ov(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const a=l.removed;o=l.events;const c=a.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,f)=>Ot(f));if(c&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const f=Gv(h);for(let _=0;_<f.length;++_){const m=f[_],x=m.query,S=Ah(t,m);t.listenProvider_.startListening(Os(x),Ps(t,x),S.hashFn,S.onComplete)}}}if(!u&&a.length>0&&!s)if(c){const h=null;t.listenProvider_.stopListening(Os(e),h)}else a.forEach(h=>{const f=t.queryToTagMap.get(Di(h));t.listenProvider_.stopListening(Os(h),f)});zv(t,a)}return o}function $v(t,e){const{syncPoint:n,serverCache:s,writesCache:i,serverCacheComplete:r}=Sh(e,t),o=Wo(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),e._queryParams.loadsAllData()?null:Ps(t,e)}function Th(t,e,n,s){const i=jo(t,s);if(i!=null){const r=Vo(i),o=r.path,l=r.queryId,a=Me(o,e),c=new nn(Ao(l),a,n);return Go(t,o,c)}else return[]}function jv(t,e,n,s){const i=jo(t,s);if(i){const r=Vo(i),o=r.path,l=r.queryId,a=Me(o,e),c=ce.fromObject(n),u=new Wn(Ao(l),a,c);return Go(t,o,u)}else return[]}function Sh(t,e){const n=t._path;let s=null,i=!1;e.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Me(c,n);s=s||Pt(u,h),i=i||Ot(u)});let r=e.syncPointTree_.get(n);r?(i=i||Ot(r),s=s||Pt(r,X())):(r=new vh,e.syncPointTree_=e.syncPointTree_.set(n,r));let o;s!=null?o=!0:(o=!1,s=L.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((u,h)=>{const f=Pt(h,X());f&&(s=s.updateImmediateChild(u,f))}));const l=bh(r,t);if(!l&&!t._queryParams.loadsAllData()){const c=Di(t);b(!e.queryToTagMap.has(c),"View does not exist, but we have a tag");const u=Kv();e.queryToTagMap.set(c,u),e.tagToQueryMap.set(u,c)}const a=Ri(e.pendingWriteTree_,n);return{syncPoint:r,writesCache:a,serverCache:s,serverCacheComplete:o,foundAncestorDefaultView:i,viewAlreadyExists:l}}function Rh(t,e,n){const{syncPoint:s,serverCache:i,writesCache:r,serverCacheComplete:o,viewAlreadyExists:l,foundAncestorDefaultView:a}=Sh(e,t);let c=kv(s,e,n,r,i,o);if(!l&&!a){const u=Eh(s,e);c=c.concat(qv(t,e,u))}return c}function $o(t,e,n){const s=!0,i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Me(o,e),c=Pt(l,a);if(c)return c});return lh(i,e,r,n,s)}function Vv(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Me(c,n);s=s||Pt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Pt(i,X()):(i=new vh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Nt(s,!0,!1):null,l=Ri(t.pendingWriteTree_,e._path),a=Wo(i,e,l,r?o.getNode():L.EMPTY_NODE,r);return Sv(a)}function jn(t,e){return xh(e,t.syncPointTree_,null,Ri(t.pendingWriteTree_,X()))}function xh(t,e,n,s){if(G(t.path))return Nh(t,e,n,s);{const i=e.get(X());n==null&&i!=null&&(n=Pt(i,X()));let r=[];const o=$(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=ch(s,o);r=r.concat(xh(l,a,c,u))}return i&&(r=r.concat(Uo(i,t,s,n))),r}}function Nh(t,e,n,s){const i=e.get(X());n==null&&i!=null&&(n=Pt(i,X()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=ch(s,o),u=t.operationForChild(o);u&&(r=r.concat(Nh(u,l,a,c)))}),i&&(r=r.concat(Uo(i,t,s,n))),r}function Ah(t,e){const n=e.query,s=Ps(t,n);return{hashFn:()=>(Tv(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Wv(t,n._path,s):Uv(t,n._path);{const r=Fm(i,n);return Mi(t,n,null,r)}}}}function Ps(t,e){const n=Di(e);return t.queryToTagMap.get(n)}function Di(t){return t._path.toString()+"$"+t._queryIdentifier}function jo(t,e){return t.tagToQueryMap.get(e)}function Vo(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function Go(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=Ri(t.pendingWriteTree_,e);return Uo(s,n,i,null)}function Gv(t){return t.fold((e,n,s)=>{if(n&&Ot(n))return[Oi(n)];{let i=[];return n&&(i=Ch(n)),Re(s,(r,o)=>{i=i.concat(o)}),i}})}function Os(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Lv())(t._repo,t._path):t}function zv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Di(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Kv(){return Fv++}function qv(t,e,n){const s=e._path,i=Ps(t,e),r=Ah(t,n),o=t.listenProvider_.startListening(Os(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!Ot(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!G(c)&&u&&Ot(u))return[Oi(u).query];{let f=[];return u&&(f=f.concat(Ch(u).map(_=>_.query))),Re(h,(_,m)=>{f=f.concat(m)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Os(u),Ps(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new zo(n)}node(){return this.node_}}class Ko{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Ko(this.syncTree_,n)}node(){return $o(this.syncTree_,this.path_)}}const Yv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ph=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Qv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Xv(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Qv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Xv=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Oh=function(t,e,n,s){return qo(e,new Ko(n,t),s)},kh=function(t,e,n){return qo(t,new zo(e),n)};function qo(t,e,n){const s=t.getPriority().val(),i=Ph(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ph(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new we(l,Ce(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new we(i))),o.forEachChild(pe,(l,a)=>{const c=qo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Qo(t,e){let n=e instanceof Z?e:new Z(e),s=t,i=$(n);for(;i!==null;){const r=Pn(s.node.children,i)||{children:{},childCount:0};s=new Yo(i,s,r),n=ae(n),i=$(n)}return s}function Vn(t){return t.node.value}function Mh(t,e){t.node.value=e,Xo(t)}function Dh(t){return t.node.childCount>0}function Jv(t){return Vn(t)===void 0&&!Dh(t)}function Li(t,e){Re(t.node.children,(n,s)=>{e(new Yo(n,t,s))})}function Lh(t,e,n,s){n&&!s&&e(t),Li(t,i=>{Lh(i,e,!0,s)}),n&&s&&e(t)}function Zv(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ks(t){return new Z(t.parent===null?t.name:ks(t.parent)+"/"+t.name)}function Xo(t){t.parent!==null&&eC(t.parent,t.name,t)}function eC(t,e,n){const s=Jv(n),i=ut(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Xo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Xo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=/[\[\].#$\/\u0000-\u001F\u007F]/,nC=/[\[\].#$\u0000-\u001F\u007F]/,Jo=10*1024*1024,Zo=function(t){return typeof t=="string"&&t.length!==0&&!tC.test(t)},Fh=function(t){return typeof t=="string"&&t.length!==0&&!nC.test(t)},sC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fh(t)},iC=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ao(t)||t&&typeof t=="object"&&ut(t,".sv")},Bh=function(t,e,n,s){s&&e===void 0||Fi(fi(t,"value"),e,n)},Fi=function(t,e,n){const s=n instanceof Z?new yy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+tn(s));if(typeof e=="function")throw new Error(t+"contains a function "+tn(s)+" with contents = "+e.toString());if(ao(e))throw new Error(t+"contains "+e.toString()+" "+tn(s));if(typeof e=="string"&&e.length>Jo/3&&di(e)>Jo)throw new Error(t+"contains a string greater than "+Jo+" utf8 bytes "+tn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Re(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Zo(o)))throw new Error(t+" contains an invalid key ("+o+") "+tn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vy(s,o),Fi(t,l,s),Cy(s)}),i&&r)throw new Error(t+' contains ".value" child '+tn(s)+" in addition to actual children.")}},rC=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=vs(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Zo(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(my);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&qe(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},oC=function(t,e,n,s){if(s&&e===void 0)return;const i=fi(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Re(e,(o,l)=>{const a=new Z(o);if(Fi(i,l,de(n,a)),vo(a)===".priority"&&!iC(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),rC(i,r)},Hh=function(t,e,n,s){if(!(s&&n===void 0)&&!Fh(n))throw new Error(fi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lC=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hh(t,e,n,s)},el=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},aC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sC(n))throw new Error(fi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bi(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Co(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Uh(t,e,n){Bi(t,n),Wh(t,s=>Co(s,e))}function tt(t,e,n){Bi(t,n),Wh(t,s=>qe(s,e)||qe(e,s))}function Wh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(uC(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function uC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Xt&&Se("event: "+n.toString()),Ln(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC="repo_interrupt",fC=25;class dC{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wi(),this.transactionQueueTree_=new Yo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pC(t,e,n){if(t.stats_=go(t.repoInfo_),t.forceRestClient_||Wm())t.server_=new bi(t.repoInfo_,(s,i,r,o)=>{jh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Vh(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new gt(t.repoInfo_,e,(s,i,r,o)=>{jh(t,s,i,r,o)},s=>{Vh(t,s)},s=>{_C(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Km(t.repoInfo_,()=>new qy(t.stats_,t.server_)),t.infoData_=new jy,t.infoSyncTree_=new wh({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=As(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),tl(t,"connected",!1),t.serverSyncTree_=new wh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);tt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function $h(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Hi(t){return Yv({timestamp:$h(t)})}function jh(t,e,n,s,i){t.dataUpdateCount++;const r=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=hi(n,c=>Ce(c));o=jv(t.serverSyncTree_,r,a,i)}else{const a=Ce(n);o=Th(t.serverSyncTree_,r,a,i)}else if(s){const a=hi(n,c=>Ce(c));o=Hv(t.serverSyncTree_,r,a)}else{const a=Ce(n);o=As(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=zn(t,r)),tt(t.eventQueue_,l,o)}function Vh(t,e){tl(t,"connected",e),e===!1&&vC(t)}function _C(t,e){Re(e,(n,s)=>{tl(t,n,s)})}function tl(t,e,n){const s=new Z("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(s,i);const r=As(t.infoSyncTree_,s,i);tt(t.eventQueue_,s,r)}function nl(t){return t.nextWriteId_++}function gC(t,e){const n=Vv(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(s=>{const i=Ce(s).withIndex(e._queryParams.getIndex());if(e._queryParams.loadsAllData())As(t.serverSyncTree_,e._path,i);else{const o=$v(t.serverSyncTree_,e);Th(t.serverSyncTree_,e._path,i,o)}return Mi(t.serverSyncTree_,e,null).length>0&&Gn(t,"unexpected cancel events in repoGetValue"),i},s=>(Gn(t,"get for query "+ve(e)+" failed: "+s),Promise.reject(new Error(s))))}function mC(t,e,n,s,i){Gn(t,"set",{path:e.toString(),value:n,priority:s});const r=Hi(t),o=Ce(n,s),l=$o(t.serverSyncTree_,e),a=kh(o,l,r),c=nl(t),u=Ih(t.serverSyncTree_,e,a,c,!0);Bi(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const m=f==="ok";m||ke("set at "+e+" failed: "+f);const x=kt(t.serverSyncTree_,c,!m);tt(t.eventQueue_,e,x),sl(t,i,f,_)});const h=rl(t,e);zn(t,h),tt(t.eventQueue_,h,[])}function yC(t,e,n,s){Gn(t,"update",{path:e.toString(),value:n});let i=!0;const r=Hi(t),o={};if(Re(n,(l,a)=>{i=!1,o[l]=Oh(de(e,l),Ce(a),t.serverSyncTree_,r)}),i)Se("update() called with empty data.  Don't do anything."),sl(t,s,"ok",void 0);else{const l=nl(t),a=Bv(t.serverSyncTree_,e,o,l);Bi(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||ke("update at "+e+" failed: "+c);const f=kt(t.serverSyncTree_,l,!h),_=f.length>0?zn(t,e):e;tt(t.eventQueue_,_,f),sl(t,s,c,u)}),Re(n,c=>{const u=rl(t,de(e,c));zn(t,u)}),tt(t.eventQueue_,e,[])}}function vC(t){Gn(t,"onDisconnectEvents");const e=Hi(t),n=wi();Ro(t.onDisconnect_,X(),(i,r)=>{const o=Oh(i,r,t.serverSyncTree_,e);eh(n,i,o)});let s=[];Ro(n,X(),(i,r)=>{s=s.concat(As(t.serverSyncTree_,i,r));const o=rl(t,i);zn(t,o)}),t.onDisconnect_=wi(),tt(t.eventQueue_,X(),s)}function CC(t,e,n){let s;$(e._path)===".info"?s=Rh(t.infoSyncTree_,e,n):s=Rh(t.serverSyncTree_,e,n),Uh(t.eventQueue_,e._path,s)}function Gh(t,e,n){let s;$(e._path)===".info"?s=Mi(t.infoSyncTree_,e,n):s=Mi(t.serverSyncTree_,e,n),Uh(t.eventQueue_,e._path,s)}function EC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hC)}function Gn(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function sl(t,e,n,s){e&&Ln(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function zh(t,e,n){return $o(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function il(t,e=t.transactionQueueTree_){if(e||Ui(t,e),Vn(e)){const n=qh(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&bC(t,ks(e),n)}else Dh(e)&&Li(e,n=>{il(t,n)})}function bC(t,e,n){const s=n.map(c=>c.currentWriteId),i=zh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Me(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Gn(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(kt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ui(t,Qo(t.transactionQueueTree_,e)),il(t,t.transactionQueueTree_),tt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Ln(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ke("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}zn(t,e)}},o)}function zn(t,e){const n=Kh(t,e),s=ks(n),i=qh(t,n);return wC(t,i,s),s}function wC(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Me(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(kt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=fC)u=!0,h="maxretry",i=i.concat(kt(t.serverSyncTree_,a.currentWriteId,!0));else{const f=zh(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Fi("transaction failed: Data returned ",_,a.path);let m=Ce(_);typeof _=="object"&&_!=null&&ut(_,".priority")||(m=m.updatePriority(f.getPriority()));const S=a.currentWriteId,A=Hi(t),F=kh(m,f,A);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=F,a.currentWriteId=nl(t),o.splice(o.indexOf(S),1),i=i.concat(Ih(t.serverSyncTree_,a.path,F,a.currentWriteId,a.applyLocally)),i=i.concat(kt(t.serverSyncTree_,S,!0))}else u=!0,h="nodata",i=i.concat(kt(t.serverSyncTree_,a.currentWriteId,!0))}tt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Ui(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Ln(s[l]);il(t,t.transactionQueueTree_)}function Kh(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&Vn(s)===void 0;)s=Qo(s,n),e=ae(e),n=$(e);return s}function qh(t,e){const n=[];return Yh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Yh(t,e,n){const s=Vn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Li(e,i=>{Yh(t,i,n)})}function Ui(t,e){const n=Vn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Mh(e,n.length>0?n:void 0)}Li(e,s=>{Ui(t,s)})}function rl(t,e){const n=ks(Kh(t,e)),s=Qo(t.transactionQueueTree_,e);return Zv(s,i=>{ol(t,i)}),ol(t,s),Lh(s,i=>{ol(t,i)}),n}function ol(t,e){const n=Vn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(kt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Mh(e,void 0):n.length=r+1,tt(t.eventQueue_,ks(e),i);for(let o=0;o<s.length;o++)Ln(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function TC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const Qh=function(t,e){const n=SC(t),s=n.namespace;n.domain==="firebase.com"&&Jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Om();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Vm(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Z(n.pathString)}},SC=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=IC(t.substring(u,h)));const f=TC(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class Jh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return G(this._path)?null:vo(this._path)}get ref(){return new ht(this._repo,this._path)}get _queryIdentifier(){const e=Zu(this._queryParams),n=co(e);return n==="{}"?"default":n}get _queryObject(){return Zu(this._queryParams)}isEqual(e){if(e=On(e),!(e instanceof ll))return!1;const n=this._repo===e._repo,s=Co(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gy(this._path)}}class ht extends ll{constructor(e,n){super(e,n,new So,!1)}get parent(){const e=Uu(this._path);return e===null?null:new ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),s=qn(this.ref,e);return new Kn(this._node.getChild(n),s,pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Kn(i,qn(this.ref,s),pe)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function JC(t,e){return t=On(t),t._checkNotDeleted("ref"),e!==void 0?qn(t._root,e):t._root}function qn(t,e){return t=On(t),$(t._path)===null?lC("child","path",e,!1):Hh("child","path",e,!1),new ht(t._repo,de(t._path,e))}function ZC(t,e){t=On(t),el("push",t._path),Bh("push",e,t._path,!0);const n=$h(t._repo),s=Hy(n),i=qn(t,s),r=qn(t,s);let o;return e!=null?o=Zh(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function eE(t){return el("remove",t._path),Zh(t,null)}function Zh(t,e){t=On(t),el("set",t._path),Bh("set",e,t._path,!1);const n=new us;return mC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function tE(t,e){oC("update",e,t._path,!1);const n=new us;return yC(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function nE(t){return t=On(t),gC(t._repo,t).then(e=>new Kn(e,new ht(t._repo,t._path),t._queryParams.getIndex()))}class al{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Xh("value",this,new Kn(e.snapshotNode,new ht(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Jh(this,e,n):null}matches(e){return e instanceof al?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class cl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Jh(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const s=qn(new ht(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Xh(e.type,this,new Kn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof cl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function xC(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{Gh(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new RC(n,r||void 0),l=e==="value"?new al(o):new cl(e,o);return CC(t._repo,t,l),()=>Gh(t._repo,t,l)}function sE(t,e,n,s){return xC(t,"value",e,n,s)}Av(ht);Dv(ht);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="FIREBASE_DATABASE_EMULATOR_HOST",ul={};let AC=!1;function PC(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Qh(r,i),l=o.repoInfo,a,c;typeof process!="undefined"&&process.env&&(c=process.env[NC]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Qh(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new uo(uo.OWNER):new jm(t.name,t.options,e);aC("Invalid Firebase Database URL",o),G(o.path)||Jt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=kC(l,t,u,new $m(t.name,n));return new MC(h,t)}function OC(t,e){const n=ul[e];(!n||n[t.key]!==t)&&Jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),EC(t),delete n[t.key]}function kC(t,e,n,s){let i=ul[e.name];i||(i={},ul[e.name]=i);let r=i[t.toURLString()];return r&&Jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new dC(t,AC,n,s),i[t.toURLString()]=r,r}class MC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ht(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(OC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jt("Cannot call "+e+" on a deleted database.")}}function iE(t=mm(),e){return dm(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t){Rm(gm),_i(new fs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return PC(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),kn(ru,ou,t),kn(ru,ou,"esm2017")}gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};DC();var LC="firebase",FC="9.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(LC,FC,"app");export{qC as A,KC as B,ot as F,nE as a,eE as b,QC as c,WC as d,$C as e,We as f,iE as g,$d as h,XC as i,Hd as j,jC as k,Ta as l,VC as m,Vi as n,Fd as o,ji as p,sE as q,JC as r,UC as s,HC as t,tE as u,GC as v,Zf as w,zC as x,ZC as y,YC as z};
