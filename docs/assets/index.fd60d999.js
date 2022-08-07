var H=Object.defineProperty,T=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var L=(e,t,s)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_=(e,t)=>{for(var s in t||(t={}))W.call(t,s)&&L(e,s,t[s]);if(S)for(var s of S(t))j.call(t,s)&&L(e,s,t[s]);return e},x=(e,t)=>T(e,U(t));import{i as A,g as I,c as M,a as $,r as h,u as m,b as w,d as G,o as n,e as o,f as O,w as X,h as B,j as R,k as C,l as d,t as p,n as y,F as v,m as b,p as N,q as D,s as V,v as F,x as J,y as K,z as E,A as P,B as q}from"./vendor.f5f9c850.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}};Z();const Q={apiKey:"AIzaSyDpQuarni71EeMHzYrMJ55mmG9fUahdauM",authDomain:"tic-tac-toe-4fba0.firebaseapp.com",databaseURL:"https://tic-tac-toe-4fba0-default-rtdb.europe-west1.firebasedatabase.app",projectId:"tic-tac-toe-4fba0",storageBucket:"tic-tac-toe-4fba0.appspot.com",messagingSenderId:"742316989928",appId:"1:742316989928:web:857d79d4a5c034485d985d"};A(Q);const u=I(),Y=M({state(){return{user:{name:"",stats:{}}}},mutations:{setUser(e,t){e.user.name=t},setStats(e,t){e.user.stats=t}},actions:{kick({state:e},t){$(h(u,"/"+t)).then(s=>{let c=s.val();c.host,c.host==e.user.name?c.player?(console.log("host->player2"),m(h(u,"/"+t),{host:c.player}),w(h(u,"/"+t+"/player"))):w(h(u,"/"+t)).then(i=>{}):w(h(u,"/"+t+"/player"))})}}}),ee={class:"fc h-6"},te=B("Lobby"),se=B("Rating");function re(e,t){const s=G("router-link");return n(),o("div",ee,[O(s,{class:"mr-10 b",to:"/lobby"},{default:X(()=>[te]),_:1}),O(s,{class:"b",to:"/rating"},{default:X(()=>[se]),_:1})])}var g=(e,t)=>{const s=e.__vccOpts||e;for(const[c,i]of t)s[c]=i;return s};const ie={};var ae=g(ie,[["render",re]]),z={computed:{user:{get(){return this.$store.state.user.name},set(e){this.$store.commit("setUser",e)}},stats:{get(){return this.$store.state.user.stats},set(e){this.$store.commit("setStats",e)}}}};const ne={class:"fc flex-col"};function oe(e,t,s,c,i,r){const a=G("TheNavbar"),f=G("router-view");return n(),o("div",ne,[e.user?(n(),R(a,{key:0,class:"mb-8"})):C("",!0),O(f)])}const le={mixins:[z],components:{TheNavbar:ae}};var he=g(le,[["render",oe]]);const ue=["disabled"],ce={class:"fc mt-6"},de=["onClick"],me={class:"flex w-36 flex-wrap mx-8"},pe=["onClick"],fe=["onClick"];function ve(e,t,s,c,i,r){var a,f;return n(),o(v,null,[d("span",null,p(r.winner),1),d("span",null,[d("button",{class:"b",onClick:t[0]||(t[0]=(...l)=>r.refresh&&r.refresh(...l)),disabled:!e.isHost},"Again",8,ue)]),d("p",null,p(r.turn=="o"?"Turn O":"Turn X"),1),d("div",ce,[e.isHost?(n(),o("div",{key:0,class:y(["rounded pb-2 leading-3 text-pri -ml-10",this.turn=="o"?"bg-sec":"bg-error"])},[(n(!0),o(v,null,b(r.o,l=>(n(),o("p",{class:y(["text-center p-2",{hidden:!l,"text-white":l==e.oo}]),style:N({"font-size":l*6+8+"px"}),onClick:k=>r.pickO(l)},"o",14,de))),256))],2)):C("",!0),d("div",me,[(n(!0),o(v,null,b(r.z,(l,k)=>(n(),o("div",{class:"border border-sec w-12 h-12 fc",onClick:De=>r.set(k),style:N({"font-size":l.v==0?"0px":l.v*6+8+"px"})},[d("p",null,p(l.s),1)],12,pe))),256))]),e.isHost?C("",!0):(n(),o("div",{key:1,class:y(["rounded pb-2 leading-3 text-pri -mr-10",this.turn=="x"?"bg-sec":"bg-error"])},[(n(!0),o(v,null,b(r.x,l=>(n(),o("p",{class:y(["text-center p-2",{hidden:!l,"text-white":l==e.xx}]),style:N({"font-size":l*6+8+"px"}),onClick:k=>r.pickX(l)},"x",14,fe))),256))],2))]),d("p",null,"X: "+p((a=r.x)==null?void 0:a.filter(l=>l!=0)),1),d("p",null,"O: "+p((f=r.o)==null?void 0:f.filter(l=>l!=0)),1)],64)}const ge={mixins:[z],data:()=>({isHost:!1,url:"",initialX:[1,1,3,3,6,6],initialO:[1,1,3,3,6,6],initialZ:[{s:".",v:0},{s:".",v:0},{s:".",v:0},{s:".",v:0},{s:".",v:0},{s:".",v:0},{s:".",v:0},{s:".",v:0},{s:".",v:0}],xx:0,oo:0,game:{}}),watch:{},computed:{winner:{get(){var e,t;return(t=(e=this.game)==null?void 0:e.winner)!=null?t:""},set(e){m(h(u,"/"+this.url),{winner:e})}},gameURL(){return this.$route.params.game},turn:{get(){return this.game.turn=="o"?"o":"x"},set(e){m(h(u,"/"+this.url),{turn:e})}},z(){var e,t;return(t=(e=this.game)==null?void 0:e.z)==null?void 0:t.map(s=>s.s!="."?{s:s.s,v:s.v}:{s:[],v:s.v})},x(){var e,t;return(t=(e=this.game)==null?void 0:e.x)==null?void 0:t.map(s=>s)},o(){var e,t;return(t=(e=this.game)==null?void 0:e.o)==null?void 0:t.map(s=>s)}},methods:{set(e){this.turn=="o"?this.setO(e):this.setX(e)},setX(e){this.z[e].v<this.xx&&(m(h(u,"/"+this.url+"/z/"+e),{s:"x",v:this.xx}),this.checkWin().then(t=>{this.winner=this.turn=="o"?"Winner O":"Winner X",this.refresh()},t=>{this.turn="o";let s=this.x.indexOf(this.xx);m(h(u,"/"+this.url+"/x/"),{[s]:0}),this.xx=0}))},setO(e){this.z[e].v<this.oo&&(m(h(u,"/"+this.url+"/z/"+e),{s:"o",v:this.oo}),this.checkWin().then(t=>{this.winner=this.turn=="o"?"Winner O":"Winner X",this.refresh()},t=>{this.turn="x";let s=this.o.indexOf(this.oo);m(h(u,"/"+this.url+"/o/"),{[s]:0}),this.oo=0}))},pickX(e){this.turn=="x"&&(this.xx=e)},pickO(e){this.turn=="o"&&(this.oo=e)},refresh(){let e={z:this.initialZ,x:this.initialX,o:this.initialO};Math.random()>.5?m(h(u,"/"+this.url),x(_({},e),{turn:"x"})):m(h(u,"/"+this.url),x(_({},e),{turn:"o"}))},checkWin(){return new Promise((e,t)=>{this.z[0].s==[]&&this.z[4].s==[]&&this.z[8].s==[]&&t(),this.z[0].s==this.z[1].s&&this.z[1].s==this.z[2].s||this.z[3].s==this.z[4].s&&this.z[4].s==this.z[5].s||this.z[6].s==this.z[7].s&&this.z[7].s==this.z[8].s||this.z[0].s==this.z[3].s&&this.z[3].s==this.z[6].s||this.z[1].s==this.z[4].s&&this.z[4].s==this.z[7].s||this.z[2].s==this.z[5].s&&this.z[5].s==this.z[8].s||this.z[0].s==this.z[4].s&&this.z[4].s==this.z[8].s||this.z[2].s==this.z[4].s&&this.z[4].s==this.z[6].s?e():t()})}},created(){this.url=this.$route.params.game,$(h(u,this.url)).then(e=>{let{host:t}=e.val();this.isHost=t==this.user,this.refresh(),D(h(u,"/"+this.gameURL),s=>this.game=s.val())})},beforeUnmount(){this.$store.dispatch("kick",this.url)}};var be=g(ge,[["render",ve]]);function _e(e,t,s,c,i,r){return n(),o(v,null,[V(d("input",{class:"mb-3 pl-2","onUpdate:modelValue":t[0]||(t[0]=a=>e.name=a),ref:"userName"},null,512),[[F,e.name]]),d("button",{class:"b",onClick:t[1]||(t[1]=(...a)=>r.auth&&r.auth(...a)),onKeydown:t[2]||(t[2]=J((...a)=>r.auth&&r.auth(...a),["enter"]))},"Start Game",32)],64)}const xe={mixins:[z],data:()=>({name:""}),methods:{auth(){this.user=this.name,localStorage.setItem("tic-tac-toe-user",JSON.stringify({name:this.user,stats:this.stats})),this.$router.push("lobby")},authFromLS(){let e=JSON.parse(localStorage.getItem("tic-tac-toe-user"));e&&(this.stats=e.stats,this.user=e.name,this.$router.push("lobby"))}},created(){this.authFromLS()}};var ye=g(xe,[["render",_e]]);function ze(e,t,s,c,i,r){return n(),o("ul",null,[(n(!0),o(v,null,b(e.i,(a,f)=>(n(),o("li",null,p(f+1)+": "+p(a),1))),256))])}const ke={props:{},data:()=>({i:["God","Dog","Godzilla","God","Dog","Godzilla","God","Dog","Godzilla"]}),methods:{},computed:{}};var $e=g(ke,[["render",ze]]);const we={class:"w-40 fc flex-col"},Ge={key:0,class:"w-full"},Oe=["onClick"],Ce={key:1};function Ne(e,t,s,c,i,r){return n(),o("div",we,[d("button",{class:"b mb-4 w-full",onClick:t[0]||(t[0]=(...a)=>r.createGame&&r.createGame(...a))},"+"),r.availableGames.length>0?(n(),o("ul",Ge,[(n(!0),o(v,null,b(r.availableGames,a=>(n(),o("li",{class:"b bg-blue-400 text-center mb-3",onClick:f=>r.joinGame(a.id)},"Join to "+p(a.host),9,Oe))),256))])):(n(),o("p",Ce,"No available games...")),d("p",null,p(e.error),1)])}const Se={mixins:[z],data:()=>({games:[],error:""}),methods:{getGames(){try{D(h(u),e=>{e.exists()&&(this.games=e.val())})}catch(e){this.error=e}},createGame(){try{let e=K(h(u),{host:this.user}).key;this.$router.push("/id/"+e)}catch(e){this.error=e}},joinGame(e){try{$(h(u,e)).then(t=>{let{host:s}=t.val();s==this.user?this.$router.push("/id/"+e):m(h(u,e),{host:s,player:this.user}).then(c=>this.$router.push("/id/"+e))}).catch(t=>this.error=t)}catch(t){this.error=t}}},computed:{availableGames(){return this.games?Object.keys(this.games).filter(e=>!this.games[e].player||!this.games[e].host).map(e=>x(_({},this.games[e]),{id:e})):[]}},created(){this.getGames()}};var Le=g(Se,[["render",Ne]]);const Xe=[{path:"/",component:ye},{path:"/id/:game",component:be},{path:"/rating",component:$e},{path:"/lobby",component:Le}],Be=E({history:P(),routes:Xe});q(he).use(Be).use(Y).mount("#app");
