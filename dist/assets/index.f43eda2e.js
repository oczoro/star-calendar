const tm=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};tm();function uc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const nm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sm=uc(nm);function Wh(t){return!!t||t===""}function hc(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=De(s)?om(s):hc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(De(t))return t;if(be(t))return t}}const rm=/;(?![^(]*\))/g,im=/:(.+)/;function om(t){const e={};return t.split(rm).forEach(n=>{if(n){const s=n.split(im);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fc(t){let e="";if(De(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const s=fc(t[n]);s&&(e+=s+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function am(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Qi(t[s],e[s]);return n}function Qi(t,e){if(t===e)return!0;let n=$l(t),s=$l(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=j(t),s=j(e),n||s)return n&&s?am(t,e):!1;if(n=be(t),s=be(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Qi(t[o],e[o]))return!1}}return String(t)===String(e)}function cm(t,e){return t.findIndex(n=>Qi(n,e))}const sA=t=>De(t)?t:t==null?"":j(t)||be(t)&&(t.toString===Xh||!X(t.toString))?JSON.stringify(t,Gh,2):String(t),Gh=(t,e)=>e&&e.__v_isRef?Gh(t,e.value):ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Zi(e)?{[`Set(${e.size})`]:[...e.values()]}:be(e)&&!j(e)&&!Qh(e)?String(e):e,fe={},ns=[],vt=()=>{},lm=()=>!1,um=/^on[^a-z]/,Ji=t=>um.test(t),dc=t=>t.startsWith("onUpdate:"),We=Object.assign,pc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hm=Object.prototype.hasOwnProperty,ne=(t,e)=>hm.call(t,e),j=Array.isArray,ss=t=>eo(t)==="[object Map]",Zi=t=>eo(t)==="[object Set]",$l=t=>t instanceof Date,X=t=>typeof t=="function",De=t=>typeof t=="string",gc=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",Yh=t=>be(t)&&X(t.then)&&X(t.catch),Xh=Object.prototype.toString,eo=t=>Xh.call(t),fm=t=>eo(t).slice(8,-1),Qh=t=>eo(t)==="[object Object]",mc=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oi=uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),to=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dm=/-(\w)/g,Nt=to(t=>t.replace(dm,(e,n)=>n?n.toUpperCase():"")),pm=/\B([A-Z])/g,Ts=to(t=>t.replace(pm,"-$1").toLowerCase()),no=to(t=>t.charAt(0).toUpperCase()+t.slice(1)),qo=to(t=>t?`on${no(t)}`:""),sr=(t,e)=>!Object.is(t,e),ai=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ei=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let jl;const gm=()=>jl||(jl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let bt;class mm{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&bt&&(this.parent=bt,this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function ym(t,e=bt){e&&e.active&&e.effects.push(t)}const yc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Jh=t=>(t.w&on)>0,Zh=t=>(t.n&on)>0,vm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=on},wm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Jh(r)&&!Zh(r)?r.delete(t):e[n++]=r,r.w&=~on,r.n&=~on}e.length=n}},ga=new WeakMap;let Bs=0,on=1;const ma=30;let yt;const Tn=Symbol(""),ya=Symbol("");class vc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ym(this,s)}run(){if(!this.active)return this.fn();let e=yt,n=tn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=yt,yt=this,tn=!0,on=1<<++Bs,Bs<=ma?vm(this):Hl(this),this.fn()}finally{Bs<=ma&&wm(this),on=1<<--Bs,yt=this.parent,tn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){yt===this?this.deferStop=!0:this.active&&(Hl(this),this.onStop&&this.onStop(),this.active=!1)}}function Hl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let tn=!0;const ef=[];function bs(){ef.push(tn),tn=!1}function Ss(){const t=ef.pop();tn=t===void 0?!0:t}function ut(t,e,n){if(tn&&yt){let s=ga.get(t);s||ga.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=yc()),tf(r)}}function tf(t,e){let n=!1;Bs<=ma?Zh(t)||(t.n|=on,n=!Jh(t)):n=!t.has(yt),n&&(t.add(yt),yt.deps.push(t))}function Vt(t,e,n,s,r,i){const o=ga.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?mc(n)&&a.push(o.get("length")):(a.push(o.get(Tn)),ss(t)&&a.push(o.get(ya)));break;case"delete":j(t)||(a.push(o.get(Tn)),ss(t)&&a.push(o.get(ya)));break;case"set":ss(t)&&a.push(o.get(Tn));break}if(a.length===1)a[0]&&va(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);va(yc(c))}}function va(t,e){for(const n of j(t)?t:[...t])(n!==yt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Em=uc("__proto__,__v_isRef,__isVue"),nf=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(gc)),_m=wc(),Im=wc(!1,!0),Tm=wc(!0),ql=bm();function bm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let i=0,o=this.length;i<o;i++)ut(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ie)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){bs();const s=ie(this)[e].apply(this,n);return Ss(),s}}),t}function wc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Bm:cf:e?af:of).get(s))return s;const o=j(s);if(!t&&o&&ne(ql,r))return Reflect.get(ql,r,i);const a=Reflect.get(s,r,i);return(gc(r)?nf.has(r):Em(r))||(t||ut(s,"get",r),e)?a:xe(a)?!o||!mc(r)?a.value:a:be(a)?t?lf(a):Ar(a):a}}const Sm=sf(),Am=sf(!0);function sf(t=!1){return function(n,s,r,i){let o=n[s];if(rr(o)&&xe(o)&&!xe(r))return!1;if(!t&&!rr(r)&&(uf(r)||(r=ie(r),o=ie(o)),!j(n)&&xe(o)&&!xe(r)))return o.value=r,!0;const a=j(n)&&mc(s)?Number(s)<n.length:ne(n,s),c=Reflect.set(n,s,r,i);return n===ie(i)&&(a?sr(r,o)&&Vt(n,"set",s,r):Vt(n,"add",s,r)),c}}function Cm(t,e){const n=ne(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Vt(t,"delete",e,void 0),s}function Rm(t,e){const n=Reflect.has(t,e);return(!gc(e)||!nf.has(e))&&ut(t,"has",e),n}function km(t){return ut(t,"iterate",j(t)?"length":Tn),Reflect.ownKeys(t)}const rf={get:_m,set:Sm,deleteProperty:Cm,has:Rm,ownKeys:km},Nm={get:Tm,set(t,e){return!0},deleteProperty(t,e){return!0}},Dm=We({},rf,{get:Im,set:Am}),Ec=t=>t,so=t=>Reflect.getPrototypeOf(t);function Xr(t,e,n=!1,s=!1){t=t.__v_raw;const r=ie(t),i=ie(e);e!==i&&!n&&ut(r,"get",e),!n&&ut(r,"get",i);const{has:o}=so(r),a=s?Ec:n?Tc:ir;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Qr(t,e=!1){const n=this.__v_raw,s=ie(n),r=ie(t);return t!==r&&!e&&ut(s,"has",t),!e&&ut(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function Jr(t,e=!1){return t=t.__v_raw,!e&&ut(ie(t),"iterate",Tn),Reflect.get(t,"size",t)}function Kl(t){t=ie(t);const e=ie(this);return so(e).has.call(e,t)||(e.add(t),Vt(e,"add",t,t)),this}function zl(t,e){e=ie(e);const n=ie(this),{has:s,get:r}=so(n);let i=s.call(n,t);i||(t=ie(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?sr(e,o)&&Vt(n,"set",t,e):Vt(n,"add",t,e),this}function Wl(t){const e=ie(this),{has:n,get:s}=so(e);let r=n.call(e,t);r||(t=ie(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Vt(e,"delete",t,void 0),i}function Gl(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Vt(t,"clear",void 0,void 0),n}function Zr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ie(o),c=e?Ec:t?Tc:ir;return!t&&ut(a,"iterate",Tn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function ei(t,e,n){return function(...s){const r=this.__v_raw,i=ie(r),o=ss(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Ec:e?Tc:ir;return!e&&ut(i,"iterate",c?ya:Tn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function qt(t){return function(...e){return t==="delete"?!1:this}}function Om(){const t={get(i){return Xr(this,i)},get size(){return Jr(this)},has:Qr,add:Kl,set:zl,delete:Wl,clear:Gl,forEach:Zr(!1,!1)},e={get(i){return Xr(this,i,!1,!0)},get size(){return Jr(this)},has:Qr,add:Kl,set:zl,delete:Wl,clear:Gl,forEach:Zr(!1,!0)},n={get(i){return Xr(this,i,!0)},get size(){return Jr(this,!0)},has(i){return Qr.call(this,i,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:Zr(!0,!1)},s={get(i){return Xr(this,i,!0,!0)},get size(){return Jr(this,!0)},has(i){return Qr.call(this,i,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:Zr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ei(i,!1,!1),n[i]=ei(i,!0,!1),e[i]=ei(i,!1,!0),s[i]=ei(i,!0,!0)}),[t,n,e,s]}const[Pm,Mm,Lm,xm]=Om();function _c(t,e){const n=e?t?xm:Lm:t?Mm:Pm;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ne(n,r)&&r in s?n:s,r,i)}const Um={get:_c(!1,!1)},Fm={get:_c(!1,!0)},Vm={get:_c(!0,!1)},of=new WeakMap,af=new WeakMap,cf=new WeakMap,Bm=new WeakMap;function $m(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jm(t){return t.__v_skip||!Object.isExtensible(t)?0:$m(fm(t))}function Ar(t){return rr(t)?t:Ic(t,!1,rf,Um,of)}function Hm(t){return Ic(t,!1,Dm,Fm,af)}function lf(t){return Ic(t,!0,Nm,Vm,cf)}function Ic(t,e,n,s,r){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=jm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function rs(t){return rr(t)?rs(t.__v_raw):!!(t&&t.__v_isReactive)}function rr(t){return!!(t&&t.__v_isReadonly)}function uf(t){return!!(t&&t.__v_isShallow)}function hf(t){return rs(t)||rr(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function ff(t){return wi(t,"__v_skip",!0),t}const ir=t=>be(t)?Ar(t):t,Tc=t=>be(t)?lf(t):t;function df(t){tn&&yt&&(t=ie(t),tf(t.dep||(t.dep=yc())))}function pf(t,e){t=ie(t),t.dep&&va(t.dep)}function xe(t){return!!(t&&t.__v_isRef===!0)}function qm(t){return gf(t,!1)}function Km(t){return gf(t,!0)}function gf(t,e){return xe(t)?t:new zm(t,e)}class zm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:ir(e)}get value(){return df(this),this._value}set value(e){e=this.__v_isShallow?e:ie(e),sr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ir(e),pf(this))}}function zs(t){return xe(t)?t.value:t}const Wm={get:(t,e,n)=>zs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return xe(r)&&!xe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function mf(t){return rs(t)?t:new Proxy(t,Wm)}class Gm{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new vc(e,()=>{this._dirty||(this._dirty=!0,pf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ie(this);return df(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ym(t,e,n=!1){let s,r;const i=X(t);return i?(s=t,r=vt):(s=t.get,r=t.set),new Gm(s,r,i||!r,n)}function nn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ro(i,e,n)}return r}function gt(t,e,n,s){if(X(t)){const i=nn(t,e,n,s);return i&&Yh(i)&&i.catch(o=>{ro(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(gt(t[i],e,n,s));return r}function ro(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){nn(c,null,10,[t,o,a]);return}}Xm(t,n,r,s)}function Xm(t,e,n,s=!0){console.error(t)}let _i=!1,wa=!1;const at=[];let Pt=0;const Ws=[];let $s=null,Xn=0;const Gs=[];let Gt=null,Qn=0;const yf=Promise.resolve();let bc=null,Ea=null;function vf(t){const e=bc||yf;return t?e.then(this?t.bind(this):t):e}function Qm(t){let e=Pt+1,n=at.length;for(;e<n;){const s=e+n>>>1;or(at[s])<t?e=s+1:n=s}return e}function wf(t){(!at.length||!at.includes(t,_i&&t.allowRecurse?Pt+1:Pt))&&t!==Ea&&(t.id==null?at.push(t):at.splice(Qm(t.id),0,t),Ef())}function Ef(){!_i&&!wa&&(wa=!0,bc=yf.then(Tf))}function Jm(t){const e=at.indexOf(t);e>Pt&&at.splice(e,1)}function _f(t,e,n,s){j(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Ef()}function Zm(t){_f(t,$s,Ws,Xn)}function ey(t){_f(t,Gt,Gs,Qn)}function Sc(t,e=null){if(Ws.length){for(Ea=e,$s=[...new Set(Ws)],Ws.length=0,Xn=0;Xn<$s.length;Xn++)$s[Xn]();$s=null,Xn=0,Ea=null,Sc(t,e)}}function If(t){if(Gs.length){const e=[...new Set(Gs)];if(Gs.length=0,Gt){Gt.push(...e);return}for(Gt=e,Gt.sort((n,s)=>or(n)-or(s)),Qn=0;Qn<Gt.length;Qn++)Gt[Qn]();Gt=null,Qn=0}}const or=t=>t.id==null?1/0:t.id;function Tf(t){wa=!1,_i=!0,Sc(t),at.sort((n,s)=>or(n)-or(s));const e=vt;try{for(Pt=0;Pt<at.length;Pt++){const n=at[Pt];n&&n.active!==!1&&nn(n,null,14)}}finally{Pt=0,at.length=0,If(),_i=!1,bc=null,(at.length||Ws.length||Gs.length)&&Tf(t)}}function ty(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||fe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||fe;f?r=n.map(g=>g.trim()):h&&(r=n.map(Ei))}let a,c=s[a=qo(e)]||s[a=qo(Nt(e))];!c&&i&&(c=s[a=qo(Ts(e))]),c&&gt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gt(l,t,6,r)}}function bf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=bf(l,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):We(o,i),s.set(t,o),o)}function io(t,e){return!t||!Ji(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Ts(e))||ne(t,e))}let pt=null,Sf=null;function Ii(t){const e=pt;return pt=t,Sf=t&&t.type.__scopeId||null,e}function ny(t,e=pt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&iu(-1);const i=Ii(e),o=t(...r);return Ii(i),s._d&&iu(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ko(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:T}=t;let S,N;const L=Ii(t);try{if(n.shapeFlag&4){const Y=r||s;S=At(u.call(Y,Y,h,i,g,f,y)),N=c}else{const Y=e;S=At(Y.length>1?Y(i,{attrs:c,slots:a,emit:l}):Y(i,null)),N=e.props?c:sy(c)}}catch(Y){Ys.length=0,ro(Y,t,1),S=nt(wt)}let z=S;if(N&&T!==!1){const Y=Object.keys(N),{shapeFlag:ae}=z;Y.length&&ae&7&&(o&&Y.some(dc)&&(N=ry(N,o)),z=kn(z,N))}return n.dirs&&(z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),S=z,Ii(L),S}const sy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ji(n))&&((e||(e={}))[n]=t[n]);return e},ry=(t,e)=>{const n={};for(const s in t)(!dc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function iy(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Yl(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!io(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Yl(s,o,l):!0:!!o;return!1}function Yl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!io(n,i))return!0}return!1}function oy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ay=t=>t.__isSuspense;function cy(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):ey(t)}function ci(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function Ut(t,e,n=!1){const s=Ne||pt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&X(e)?e.call(s.proxy):e}}const Xl={};function li(t,e,n){return Af(t,e,n)}function Af(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=fe){const a=Ne;let c,l=!1,u=!1;if(xe(t)?(c=()=>t.value,l=uf(t)):rs(t)?(c=()=>t,s=!0):j(t)?(u=!0,l=t.some(rs),c=()=>t.map(N=>{if(xe(N))return N.value;if(rs(N))return En(N);if(X(N))return nn(N,a,2)})):X(t)?e?c=()=>nn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),gt(t,a,3,[f])}:c=vt,e&&s){const N=c;c=()=>En(N())}let h,f=N=>{h=S.onStop=()=>{nn(N,a,4)}};if(ar)return f=vt,e?n&&gt(e,a,3,[c(),u?[]:void 0,f]):c(),vt;let g=u?[]:Xl;const y=()=>{if(!!S.active)if(e){const N=S.run();(s||l||(u?N.some((L,z)=>sr(L,g[z])):sr(N,g)))&&(h&&h(),gt(e,a,3,[N,g===Xl?void 0:g,f]),g=N)}else S.run()};y.allowRecurse=!!e;let T;r==="sync"?T=y:r==="post"?T=()=>Ze(y,a&&a.suspense):T=()=>{!a||a.isMounted?Zm(y):y()};const S=new vc(c,T);return e?n?y():g=S.run():r==="post"?Ze(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&pc(a.scope.effects,S)}}function ly(t,e,n){const s=this.proxy,r=De(t)?t.includes(".")?Cf(s,t):()=>s[t]:t.bind(s,s);let i;X(e)?i=e:(i=e.handler,n=e);const o=Ne;ls(this);const a=Af(r,i.bind(s),n);return o?ls(o):Sn(),a}function Cf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function En(t,e){if(!be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xe(t))En(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)En(t[n],e);else if(Zi(t)||ss(t))t.forEach(n=>{En(n,e)});else if(Qh(t))for(const n in t)En(t[n],e);return t}function uy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Of(()=>{t.isMounted=!0}),Pf(()=>{t.isUnmounting=!0}),t}const dt=[Function,Array],hy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dt,onEnter:dt,onAfterEnter:dt,onEnterCancelled:dt,onBeforeLeave:dt,onLeave:dt,onAfterLeave:dt,onLeaveCancelled:dt,onBeforeAppear:dt,onAppear:dt,onAfterAppear:dt,onAppearCancelled:dt},setup(t,{slots:e}){const n=Qy(),s=uy();let r;return()=>{const i=e.default&&kf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const T of i)if(T.type!==wt){o=T;break}}const a=ie(t),{mode:c}=a;if(s.isLeaving)return zo(o);const l=Ql(o);if(!l)return zo(o);const u=_a(l,a,s,n);Ia(l,u);const h=n.subTree,f=h&&Ql(h);let g=!1;const{getTransitionKey:y}=l.type;if(y){const T=y();r===void 0?r=T:T!==r&&(r=T,g=!0)}if(f&&f.type!==wt&&(!yn(l,f)||g)){const T=_a(f,a,s,n);if(Ia(f,T),c==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update()},zo(o);c==="in-out"&&l.type!==wt&&(T.delayLeave=(S,N,L)=>{const z=Rf(s,f);z[String(f.key)]=f,S._leaveCb=()=>{N(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=L})}return o}}},fy=hy;function Rf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function _a(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:T,onAppear:S,onAfterAppear:N,onAppearCancelled:L}=e,z=String(t.key),Y=Rf(n,t),ae=(J,Te)=>{J&&gt(J,s,9,Te)},_e={mode:i,persisted:o,beforeEnter(J){let Te=a;if(!n.isMounted)if(r)Te=T||a;else return;J._leaveCb&&J._leaveCb(!0);const de=Y[z];de&&yn(t,de)&&de.el._leaveCb&&de.el._leaveCb(),ae(Te,[J])},enter(J){let Te=c,de=l,je=u;if(!n.isMounted)if(r)Te=S||c,de=N||l,je=L||u;else return;let He=!1;const Ge=J._enterCb=Ht=>{He||(He=!0,Ht?ae(je,[J]):ae(de,[J]),_e.delayedLeave&&_e.delayedLeave(),J._enterCb=void 0)};Te?(Te(J,Ge),Te.length<=1&&Ge()):Ge()},leave(J,Te){const de=String(t.key);if(J._enterCb&&J._enterCb(!0),n.isUnmounting)return Te();ae(h,[J]);let je=!1;const He=J._leaveCb=Ge=>{je||(je=!0,Te(),Ge?ae(y,[J]):ae(g,[J]),J._leaveCb=void 0,Y[de]===t&&delete Y[de])};Y[de]=t,f?(f(J,He),f.length<=1&&He()):He()},clone(J){return _a(J,e,n,s)}};return _e}function zo(t){if(oo(t))return t=kn(t),t.children=null,t}function Ql(t){return oo(t)?t.children?t.children[0]:void 0:t}function Ia(t,e){t.shapeFlag&6&&t.component?Ia(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function kf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===St?(o.patchFlag&128&&r++,s=s.concat(kf(o.children,e,a))):(e||o.type!==wt)&&s.push(a!=null?kn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Nf(t){return X(t)?{setup:t,name:t.name}:t}const Ta=t=>!!t.type.__asyncLoader,oo=t=>t.type.__isKeepAlive;function dy(t,e){Df(t,"a",e)}function py(t,e){Df(t,"da",e)}function Df(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ao(e,s,n),n){let r=n.parent;for(;r&&r.parent;)oo(r.parent.vnode)&&gy(s,e,n,r),r=r.parent}}function gy(t,e,n,s){const r=ao(e,t,s,!0);Mf(()=>{pc(s[e],r)},n)}function ao(t,e,n=Ne,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;bs(),ls(n);const a=gt(e,n,t,o);return Sn(),Ss(),a});return s?r.unshift(i):r.push(i),i}}const jt=t=>(e,n=Ne)=>(!ar||t==="sp")&&ao(t,e,n),my=jt("bm"),Of=jt("m"),yy=jt("bu"),vy=jt("u"),Pf=jt("bum"),Mf=jt("um"),wy=jt("sp"),Ey=jt("rtg"),_y=jt("rtc");function Iy(t,e=Ne){ao("ec",t,e)}let ba=!0;function Ty(t){const e=xf(t),n=t.proxy,s=t.ctx;ba=!1,e.beforeCreate&&Jl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:T,deactivated:S,beforeDestroy:N,beforeUnmount:L,destroyed:z,unmounted:Y,render:ae,renderTracked:_e,renderTriggered:J,errorCaptured:Te,serverPrefetch:de,expose:je,inheritAttrs:He,components:Ge,directives:Ht,filters:qn}=e;if(l&&by(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const ce=o[pe];X(ce)&&(s[pe]=ce.bind(n))}if(r){const pe=r.call(n,n);be(pe)&&(t.data=Ar(pe))}if(ba=!0,i)for(const pe in i){const ce=i[pe],it=X(ce)?ce.bind(n,n):X(ce.get)?ce.get.bind(n,n):vt,zn=!X(ce)&&X(ce.set)?ce.set.bind(n):vt,Ot=Ct({get:it,set:zn});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:_t=>Ot.value=_t})}if(a)for(const pe in a)Lf(a[pe],s,n,pe);if(c){const pe=X(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(ce=>{ci(ce,pe[ce])})}u&&Jl(u,t,"c");function Re(pe,ce){j(ce)?ce.forEach(it=>pe(it.bind(n))):ce&&pe(ce.bind(n))}if(Re(my,h),Re(Of,f),Re(yy,g),Re(vy,y),Re(dy,T),Re(py,S),Re(Iy,Te),Re(_y,_e),Re(Ey,J),Re(Pf,L),Re(Mf,Y),Re(wy,de),j(je))if(je.length){const pe=t.exposed||(t.exposed={});je.forEach(ce=>{Object.defineProperty(pe,ce,{get:()=>n[ce],set:it=>n[ce]=it})})}else t.exposed||(t.exposed={});ae&&t.render===vt&&(t.render=ae),He!=null&&(t.inheritAttrs=He),Ge&&(t.components=Ge),Ht&&(t.directives=Ht)}function by(t,e,n=vt,s=!1){j(t)&&(t=Sa(t));for(const r in t){const i=t[r];let o;be(i)?"default"in i?o=Ut(i.from||r,i.default,!0):o=Ut(i.from||r):o=Ut(i),xe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Jl(t,e,n){gt(j(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Lf(t,e,n,s){const r=s.includes(".")?Cf(n,s):()=>n[s];if(De(t)){const i=e[t];X(i)&&li(r,i)}else if(X(t))li(r,t.bind(n));else if(be(t))if(j(t))t.forEach(i=>Lf(i,e,n,s));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&li(r,i,t)}}function xf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ti(c,l,o,!0)),Ti(c,e,o)),i.set(e,c),c}function Ti(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ti(t,i,n,!0),r&&r.forEach(o=>Ti(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Sy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Sy={data:Zl,props:gn,emits:gn,methods:gn,computed:gn,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:gn,directives:gn,watch:Cy,provide:Zl,inject:Ay};function Zl(t,e){return e?t?function(){return We(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function Ay(t,e){return gn(Sa(t),Sa(e))}function Sa(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function gn(t,e){return t?We(We(Object.create(null),t),e):e}function Cy(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const s in e)n[s]=Ye(t[s],e[s]);return n}function Ry(t,e,n,s=!1){const r={},i={};wi(i,co,1),t.propsDefaults=Object.create(null),Uf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Hm(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function ky(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ie(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(io(t.emitsOptions,f))continue;const g=e[f];if(c)if(ne(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=Nt(f);r[y]=Aa(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Uf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=Ts(h))===h||!ne(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Aa(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ne(e,h)&&!0)&&(delete i[h],l=!0)}l&&Vt(t,"set","$attrs")}function Uf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(oi(c))continue;const l=e[c];let u;r&&ne(r,u=Nt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:io(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ie(n),l=a||fe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Aa(r,c,h,l[h],t,!ne(l,h))}}return o}function Aa(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&X(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(ls(r),s=l[n]=c.call(null,e),Sn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ts(n))&&(s=!0))}return s}function Ff(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[f,g]=Ff(h,e,!0);We(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,ns),ns;if(j(i))for(let u=0;u<i.length;u++){const h=Nt(i[u]);eu(h)&&(o[h]=fe)}else if(i)for(const u in i){const h=Nt(u);if(eu(h)){const f=i[u],g=o[h]=j(f)||X(f)?{type:f}:f;if(g){const y=su(Boolean,g.type),T=su(String,g.type);g[0]=y>-1,g[1]=T<0||y<T,(y>-1||ne(g,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function eu(t){return t[0]!=="$"}function tu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function nu(t,e){return tu(t)===tu(e)}function su(t,e){return j(e)?e.findIndex(n=>nu(n,t)):X(e)&&nu(e,t)?0:-1}const Vf=t=>t[0]==="_"||t==="$stable",Ac=t=>j(t)?t.map(At):[At(t)],Ny=(t,e,n)=>{const s=ny((...r)=>Ac(e(...r)),n);return s._c=!1,s},Bf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Vf(r))continue;const i=t[r];if(X(i))e[r]=Ny(r,i,s);else if(i!=null){const o=Ac(i);e[r]=()=>o}}},$f=(t,e)=>{const n=Ac(e);t.slots.default=()=>n},Dy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),wi(e,"_",n)):Bf(e,t.slots={})}else t.slots={},e&&$f(t,e);wi(t.slots,co,1)},Oy=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=fe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(We(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Bf(e,r)),o=e}else e&&($f(t,e),o={default:1});if(i)for(const a in r)!Vf(a)&&!(a in o)&&delete r[a]};function rA(t,e){const n=pt;if(n===null)return t;const s=lo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=fe]=e[i];X(o)&&(o={mounted:o,updated:o}),o.deep&&En(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function fn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(bs(),gt(c,n,8,[t.el,a,t,e]),Ss())}}function jf(){return{app:null,config:{isNativeTag:lm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Py=0;function My(t,e){return function(s,r=null){X(s)||(s=Object.assign({},s)),r!=null&&!be(r)&&(r=null);const i=jf(),o=new Set;let a=!1;const c=i.app={_uid:Py++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:rv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=nt(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,lo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Ca(t,e,n,s,r=!1){if(j(t)){t.forEach((f,g)=>Ca(f,e&&(j(e)?e[g]:e),n,s,r));return}if(Ta(s)&&!r)return;const i=s.shapeFlag&4?lo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===fe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(De(l)?(u[l]=null,ne(h,l)&&(h[l]=null)):xe(l)&&(l.value=null)),X(c))nn(c,a,12,[o,u]);else{const f=De(c),g=xe(c);if(f||g){const y=()=>{if(t.f){const T=f?u[c]:c.value;r?j(T)&&pc(T,i):j(T)?T.includes(i)||T.push(i):f?(u[c]=[i],ne(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ne(h,c)&&(h[c]=o)):xe(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Ze(y,n)):y()}}}const Ze=cy;function Ly(t){return xy(t)}function xy(t,e){const n=gm();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=vt,cloneNode:y,insertStaticContent:T}=t,S=(d,p,m,E=null,w=null,A=null,D=!1,b=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!yn(d,p)&&(E=U(d),ft(d,w,A,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:_,ref:F,shapeFlag:P}=p;switch(_){case Cc:N(d,p,m,E);break;case wt:L(d,p,m,E);break;case ui:d==null&&z(p,m,E,D);break;case St:Ht(d,p,m,E,w,A,D,b,R);break;default:P&1?_e(d,p,m,E,w,A,D,b,R):P&6?qn(d,p,m,E,w,A,D,b,R):(P&64||P&128)&&_.process(d,p,m,E,w,A,D,b,R,ge)}F!=null&&w&&Ca(F,d&&d.ref,A,p||d,!p)},N=(d,p,m,E)=>{if(d==null)s(p.el=a(p.children),m,E);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},L=(d,p,m,E)=>{d==null?s(p.el=c(p.children||""),m,E):p.el=d.el},z=(d,p,m,E)=>{[d.el,d.anchor]=T(d.children,p,m,E,d.el,d.anchor)},Y=({el:d,anchor:p},m,E)=>{let w;for(;d&&d!==p;)w=f(d),s(d,m,E),d=w;s(p,m,E)},ae=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},_e=(d,p,m,E,w,A,D,b,R)=>{D=D||p.type==="svg",d==null?J(p,m,E,w,A,D,b,R):je(d,p,w,A,D,b,R)},J=(d,p,m,E,w,A,D,b)=>{let R,_;const{type:F,props:P,shapeFlag:V,transition:K,patchFlag:se,dirs:we}=d;if(d.el&&y!==void 0&&se===-1)R=d.el=y(d.el);else{if(R=d.el=o(d.type,A,P&&P.is,P),V&8?u(R,d.children):V&16&&de(d.children,R,null,E,w,A&&F!=="foreignObject",D,b),we&&fn(d,null,E,"created"),P){for(const ye in P)ye!=="value"&&!oi(ye)&&i(R,ye,null,P[ye],A,d.children,E,w,k);"value"in P&&i(R,"value",null,P.value),(_=P.onVnodeBeforeMount)&&Tt(_,E,d)}Te(R,d,d.scopeId,D,E)}we&&fn(d,null,E,"beforeMount");const ue=(!w||w&&!w.pendingBranch)&&K&&!K.persisted;ue&&K.beforeEnter(R),s(R,p,m),((_=P&&P.onVnodeMounted)||ue||we)&&Ze(()=>{_&&Tt(_,E,d),ue&&K.enter(R),we&&fn(d,null,E,"mounted")},w)},Te=(d,p,m,E,w)=>{if(m&&g(d,m),E)for(let A=0;A<E.length;A++)g(d,E[A]);if(w){let A=w.subTree;if(p===A){const D=w.vnode;Te(d,D,D.scopeId,D.slotScopeIds,w.parent)}}},de=(d,p,m,E,w,A,D,b,R=0)=>{for(let _=R;_<d.length;_++){const F=d[_]=b?Yt(d[_]):At(d[_]);S(null,F,p,m,E,w,A,D,b)}},je=(d,p,m,E,w,A,D)=>{const b=p.el=d.el;let{patchFlag:R,dynamicChildren:_,dirs:F}=p;R|=d.patchFlag&16;const P=d.props||fe,V=p.props||fe;let K;m&&dn(m,!1),(K=V.onVnodeBeforeUpdate)&&Tt(K,m,p,d),F&&fn(p,d,m,"beforeUpdate"),m&&dn(m,!0);const se=w&&p.type!=="foreignObject";if(_?He(d.dynamicChildren,_,b,m,E,se,A):D||it(d,p,b,null,m,E,se,A,!1),R>0){if(R&16)Ge(b,p,P,V,m,E,w);else if(R&2&&P.class!==V.class&&i(b,"class",null,V.class,w),R&4&&i(b,"style",P.style,V.style,w),R&8){const we=p.dynamicProps;for(let ue=0;ue<we.length;ue++){const ye=we[ue],mt=P[ye],Wn=V[ye];(Wn!==mt||ye==="value")&&i(b,ye,mt,Wn,w,d.children,m,E,k)}}R&1&&d.children!==p.children&&u(b,p.children)}else!D&&_==null&&Ge(b,p,P,V,m,E,w);((K=V.onVnodeUpdated)||F)&&Ze(()=>{K&&Tt(K,m,p,d),F&&fn(p,d,m,"updated")},E)},He=(d,p,m,E,w,A,D)=>{for(let b=0;b<p.length;b++){const R=d[b],_=p[b],F=R.el&&(R.type===St||!yn(R,_)||R.shapeFlag&70)?h(R.el):m;S(R,_,F,null,E,w,A,D,!0)}},Ge=(d,p,m,E,w,A,D)=>{if(m!==E){for(const b in E){if(oi(b))continue;const R=E[b],_=m[b];R!==_&&b!=="value"&&i(d,b,_,R,D,p.children,w,A,k)}if(m!==fe)for(const b in m)!oi(b)&&!(b in E)&&i(d,b,m[b],null,D,p.children,w,A,k);"value"in E&&i(d,"value",m.value,E.value)}},Ht=(d,p,m,E,w,A,D,b,R)=>{const _=p.el=d?d.el:a(""),F=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:V,slotScopeIds:K}=p;K&&(b=b?b.concat(K):K),d==null?(s(_,m,E),s(F,m,E),de(p.children,m,F,w,A,D,b,R)):P>0&&P&64&&V&&d.dynamicChildren?(He(d.dynamicChildren,V,m,w,A,D,b),(p.key!=null||w&&p===w.subTree)&&Hf(d,p,!0)):it(d,p,m,F,w,A,D,b,R)},qn=(d,p,m,E,w,A,D,b,R)=>{p.slotScopeIds=b,d==null?p.shapeFlag&512?w.ctx.activate(p,m,E,D,R):Kn(p,m,E,w,A,D,R):Re(d,p,R)},Kn=(d,p,m,E,w,A,D)=>{const b=d.component=Xy(d,E,w);if(oo(d)&&(b.ctx.renderer=ge),Jy(b),b.asyncDep){if(w&&w.registerDep(b,pe),!d.el){const R=b.subTree=nt(wt);L(null,R,p,m)}return}pe(b,d,p,m,w,A,D)},Re=(d,p,m)=>{const E=p.component=d.component;if(iy(d,p,m))if(E.asyncDep&&!E.asyncResolved){ce(E,p,m);return}else E.next=p,Jm(E.update),E.update();else p.component=d.component,p.el=d.el,E.vnode=p},pe=(d,p,m,E,w,A,D)=>{const b=()=>{if(d.isMounted){let{next:F,bu:P,u:V,parent:K,vnode:se}=d,we=F,ue;dn(d,!1),F?(F.el=se.el,ce(d,F,D)):F=se,P&&ai(P),(ue=F.props&&F.props.onVnodeBeforeUpdate)&&Tt(ue,K,F,se),dn(d,!0);const ye=Ko(d),mt=d.subTree;d.subTree=ye,S(mt,ye,h(mt.el),U(mt),d,w,A),F.el=ye.el,we===null&&oy(d,ye.el),V&&Ze(V,w),(ue=F.props&&F.props.onVnodeUpdated)&&Ze(()=>Tt(ue,K,F,se),w)}else{let F;const{el:P,props:V}=p,{bm:K,m:se,parent:we}=d,ue=Ta(p);if(dn(d,!1),K&&ai(K),!ue&&(F=V&&V.onVnodeBeforeMount)&&Tt(F,we,p),dn(d,!0),P&&Q){const ye=()=>{d.subTree=Ko(d),Q(P,d.subTree,d,w,null)};ue?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ye()):ye()}else{const ye=d.subTree=Ko(d);S(null,ye,m,E,d,w,A),p.el=ye.el}if(se&&Ze(se,w),!ue&&(F=V&&V.onVnodeMounted)){const ye=p;Ze(()=>Tt(F,we,ye),w)}p.shapeFlag&256&&d.a&&Ze(d.a,w),d.isMounted=!0,p=m=E=null}},R=d.effect=new vc(b,()=>wf(d.update),d.scope),_=d.update=R.run.bind(R);_.id=d.uid,dn(d,!0),_()},ce=(d,p,m)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,ky(d,p.props,E,m),Oy(d,p.children,m),bs(),Sc(void 0,d.update),Ss()},it=(d,p,m,E,w,A,D,b,R=!1)=>{const _=d&&d.children,F=d?d.shapeFlag:0,P=p.children,{patchFlag:V,shapeFlag:K}=p;if(V>0){if(V&128){Ot(_,P,m,E,w,A,D,b,R);return}else if(V&256){zn(_,P,m,E,w,A,D,b,R);return}}K&8?(F&16&&k(_,w,A),P!==_&&u(m,P)):F&16?K&16?Ot(_,P,m,E,w,A,D,b,R):k(_,w,A,!0):(F&8&&u(m,""),K&16&&de(P,m,E,w,A,D,b,R))},zn=(d,p,m,E,w,A,D,b,R)=>{d=d||ns,p=p||ns;const _=d.length,F=p.length,P=Math.min(_,F);let V;for(V=0;V<P;V++){const K=p[V]=R?Yt(p[V]):At(p[V]);S(d[V],K,m,null,w,A,D,b,R)}_>F?k(d,w,A,!0,!1,P):de(p,m,E,w,A,D,b,R,P)},Ot=(d,p,m,E,w,A,D,b,R)=>{let _=0;const F=p.length;let P=d.length-1,V=F-1;for(;_<=P&&_<=V;){const K=d[_],se=p[_]=R?Yt(p[_]):At(p[_]);if(yn(K,se))S(K,se,m,null,w,A,D,b,R);else break;_++}for(;_<=P&&_<=V;){const K=d[P],se=p[V]=R?Yt(p[V]):At(p[V]);if(yn(K,se))S(K,se,m,null,w,A,D,b,R);else break;P--,V--}if(_>P){if(_<=V){const K=V+1,se=K<F?p[K].el:E;for(;_<=V;)S(null,p[_]=R?Yt(p[_]):At(p[_]),m,se,w,A,D,b,R),_++}}else if(_>V)for(;_<=P;)ft(d[_],w,A,!0),_++;else{const K=_,se=_,we=new Map;for(_=se;_<=V;_++){const ot=p[_]=R?Yt(p[_]):At(p[_]);ot.key!=null&&we.set(ot.key,_)}let ue,ye=0;const mt=V-se+1;let Wn=!1,Fl=0;const xs=new Array(mt);for(_=0;_<mt;_++)xs[_]=0;for(_=K;_<=P;_++){const ot=d[_];if(ye>=mt){ft(ot,w,A,!0);continue}let It;if(ot.key!=null)It=we.get(ot.key);else for(ue=se;ue<=V;ue++)if(xs[ue-se]===0&&yn(ot,p[ue])){It=ue;break}It===void 0?ft(ot,w,A,!0):(xs[It-se]=_+1,It>=Fl?Fl=It:Wn=!0,S(ot,p[It],m,null,w,A,D,b,R),ye++)}const Vl=Wn?Uy(xs):ns;for(ue=Vl.length-1,_=mt-1;_>=0;_--){const ot=se+_,It=p[ot],Bl=ot+1<F?p[ot+1].el:E;xs[_]===0?S(null,It,m,Bl,w,A,D,b,R):Wn&&(ue<0||_!==Vl[ue]?_t(It,m,Bl,2):ue--)}}},_t=(d,p,m,E,w=null)=>{const{el:A,type:D,transition:b,children:R,shapeFlag:_}=d;if(_&6){_t(d.component.subTree,p,m,E);return}if(_&128){d.suspense.move(p,m,E);return}if(_&64){D.move(d,p,m,ge);return}if(D===St){s(A,p,m);for(let P=0;P<R.length;P++)_t(R[P],p,m,E);s(d.anchor,p,m);return}if(D===ui){Y(d,p,m);return}if(E!==2&&_&1&&b)if(E===0)b.beforeEnter(A),s(A,p,m),Ze(()=>b.enter(A),w);else{const{leave:P,delayLeave:V,afterLeave:K}=b,se=()=>s(A,p,m),we=()=>{P(A,()=>{se(),K&&K()})};V?V(A,se,we):we()}else s(A,p,m)},ft=(d,p,m,E=!1,w=!1)=>{const{type:A,props:D,ref:b,children:R,dynamicChildren:_,shapeFlag:F,patchFlag:P,dirs:V}=d;if(b!=null&&Ca(b,null,m,d,!0),F&256){p.ctx.deactivate(d);return}const K=F&1&&V,se=!Ta(d);let we;if(se&&(we=D&&D.onVnodeBeforeUnmount)&&Tt(we,p,d),F&6)M(d.component,m,E);else{if(F&128){d.suspense.unmount(m,E);return}K&&fn(d,null,p,"beforeUnmount"),F&64?d.type.remove(d,p,m,w,ge,E):_&&(A!==St||P>0&&P&64)?k(_,p,m,!1,!0):(A===St&&P&384||!w&&F&16)&&k(R,p,m),E&&Ho(d)}(se&&(we=D&&D.onVnodeUnmounted)||K)&&Ze(()=>{we&&Tt(we,p,d),K&&fn(d,null,p,"unmounted")},m)},Ho=d=>{const{type:p,el:m,anchor:E,transition:w}=d;if(p===St){v(m,E);return}if(p===ui){ae(d);return}const A=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:D,delayLeave:b}=w,R=()=>D(m,A);b?b(d.el,A,R):R()}else A()},v=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},M=(d,p,m)=>{const{bum:E,scope:w,update:A,subTree:D,um:b}=d;E&&ai(E),w.stop(),A&&(A.active=!1,ft(D,d,p,m)),b&&Ze(b,p),Ze(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},k=(d,p,m,E=!1,w=!1,A=0)=>{for(let D=A;D<d.length;D++)ft(d[D],p,m,E,w)},U=d=>d.shapeFlag&6?U(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),le=(d,p,m)=>{d==null?p._vnode&&ft(p._vnode,null,null,!0):S(p._vnode||null,d,p,null,null,null,m),If(),p._vnode=d},ge={p:S,um:ft,m:_t,r:Ho,mt:Kn,mc:de,pc:it,pbc:He,n:U,o:t};let ee,Q;return e&&([ee,Q]=e(ge)),{render:le,hydrate:ee,createApp:My(le,ee)}}function dn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Hf(t,e,n=!1){const s=t.children,r=e.children;if(j(s)&&j(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Yt(r[i]),a.el=o.el),n||Hf(o,a))}}function Uy(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Fy=t=>t.__isTeleport,qf="components";function Vy(t,e){return $y(qf,t,!0,e)||t}const By=Symbol();function $y(t,e,n=!0,s=!1){const r=pt||Ne;if(r){const i=r.type;if(t===qf){const a=nv(i);if(a&&(a===e||a===Nt(e)||a===no(Nt(e))))return i}const o=ru(r[t]||i[t],e)||ru(r.appContext[t],e);return!o&&s?i:o}}function ru(t,e){return t&&(t[e]||t[Nt(e)]||t[no(Nt(e))])}const St=Symbol(void 0),Cc=Symbol(void 0),wt=Symbol(void 0),ui=Symbol(void 0),Ys=[];let bn=null;function Kf(t=!1){Ys.push(bn=t?null:[])}function jy(){Ys.pop(),bn=Ys[Ys.length-1]||null}let bi=1;function iu(t){bi+=t}function zf(t){return t.dynamicChildren=bi>0?bn||ns:null,jy(),bi>0&&bn&&bn.push(t),t}function iA(t,e,n,s,r,i){return zf(Yf(t,e,n,s,r,i,!0))}function Wf(t,e,n,s,r){return zf(nt(t,e,n,s,r,!0))}function Ra(t){return t?t.__v_isVNode===!0:!1}function yn(t,e){return t.type===e.type&&t.key===e.key}const co="__vInternal",Gf=({key:t})=>t!=null?t:null,hi=({ref:t,ref_key:e,ref_for:n})=>t!=null?De(t)||xe(t)||X(t)?{i:pt,r:t,k:e,f:!!n}:t:null;function Yf(t,e=null,n=null,s=0,r=null,i=t===St?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gf(e),ref:e&&hi(e),scopeId:Sf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Rc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),bi>0&&!o&&bn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&bn.push(c),c}const nt=Hy;function Hy(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===By)&&(t=wt),Ra(t)){const a=kn(t,e,!0);return n&&Rc(a,n),a}if(sv(t)&&(t=t.__vccOpts),e){e=qy(e);let{class:a,style:c}=e;a&&!De(a)&&(e.class=fc(a)),be(c)&&(hf(c)&&!j(c)&&(c=We({},c)),e.style=hc(c))}const o=De(t)?1:ay(t)?128:Fy(t)?64:be(t)?4:X(t)?2:0;return Yf(t,e,n,s,r,o,i,!0)}function qy(t){return t?hf(t)||co in t?We({},t):t:null}function kn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?zy(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Gf(a),ref:e&&e.ref?n&&r?j(r)?r.concat(hi(e)):[r,hi(e)]:hi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==St?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kn(t.ssContent),ssFallback:t.ssFallback&&kn(t.ssFallback),el:t.el,anchor:t.anchor}}function Ky(t=" ",e=0){return nt(Cc,null,t,e)}function oA(t,e){const n=nt(ui,null,t);return n.staticCount=e,n}function aA(t="",e=!1){return e?(Kf(),Wf(wt,null,t)):nt(wt,null,t)}function At(t){return t==null||typeof t=="boolean"?nt(wt):j(t)?nt(St,null,t.slice()):typeof t=="object"?Yt(t):nt(Cc,null,String(t))}function Yt(t){return t.el===null||t.memo?t:kn(t)}function Rc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Rc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(co in e)?e._ctx=pt:r===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),s&64?(n=16,e=[Ky(e)]):n=8);t.children=e,t.shapeFlag|=n}function zy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=fc([e.class,s.class]));else if(r==="style")e.style=hc([e.style,s.style]);else if(Ji(r)){const i=e[r],o=s[r];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Tt(t,e,n,s=null){gt(t,e,7,[n,s])}function cA(t,e,n,s){let r;const i=n&&n[s];if(j(t)||De(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(be(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const ka=t=>t?Xf(t)?lo(t)||t.proxy:ka(t.parent):null,Si=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ka(t.parent),$root:t=>ka(t.root),$emit:t=>t.emit,$options:t=>xf(t),$forceUpdate:t=>()=>wf(t.update),$nextTick:t=>vf.bind(t.proxy),$watch:t=>ly.bind(t)}),Wy={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==fe&&ne(s,e))return o[e]=1,s[e];if(r!==fe&&ne(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ne(l,e))return o[e]=3,i[e];if(n!==fe&&ne(n,e))return o[e]=4,n[e];ba&&(o[e]=0)}}const u=Si[e];let h,f;if(u)return e==="$attrs"&&ut(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==fe&&ne(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ne(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==fe&&ne(r,e)?(r[e]=n,!0):s!==fe&&ne(s,e)?(s[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==fe&&ne(t,o)||e!==fe&&ne(e,o)||(a=i[0])&&ne(a,o)||ne(s,o)||ne(Si,o)||ne(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Gy=jf();let Yy=0;function Xy(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Gy,i={uid:Yy++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new mm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ff(s,r),emitsOptions:bf(s,r),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:s.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ty.bind(null,i),t.ce&&t.ce(i),i}let Ne=null;const Qy=()=>Ne||pt,ls=t=>{Ne=t,t.scope.on()},Sn=()=>{Ne&&Ne.scope.off(),Ne=null};function Xf(t){return t.vnode.shapeFlag&4}let ar=!1;function Jy(t,e=!1){ar=e;const{props:n,children:s}=t.vnode,r=Xf(t);Ry(t,n,r,e),Dy(t,s);const i=r?Zy(t,e):void 0;return ar=!1,i}function Zy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ff(new Proxy(t.ctx,Wy));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?tv(t):null;ls(t),bs();const i=nn(s,t,0,[t.props,r]);if(Ss(),Sn(),Yh(i)){if(i.then(Sn,Sn),e)return i.then(o=>{ou(t,o,e)}).catch(o=>{ro(o,t,0)});t.asyncDep=i}else ou(t,i,e)}else Qf(t,e)}function ou(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=mf(e)),Qf(t,n)}let au;function Qf(t,e,n){const s=t.type;if(!t.render){if(!e&&au&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=We(We({isCustomElement:i,delimiters:a},o),c);s.render=au(r,l)}}t.render=s.render||vt}ls(t),bs(),Ty(t),Ss(),Sn()}function ev(t){return new Proxy(t.attrs,{get(e,n){return ut(t,"get","$attrs"),e[n]}})}function tv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=ev(t))},slots:t.slots,emit:t.emit,expose:e}}function lo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(mf(ff(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Si)return Si[n](t)}}))}function nv(t){return X(t)&&t.displayName||t.name}function sv(t){return X(t)&&"__vccOpts"in t}const Ct=(t,e)=>Ym(t,e,ar);function Jf(t,e,n){const s=arguments.length;return s===2?be(e)&&!j(e)?Ra(e)?nt(t,null,[e]):nt(t,e):nt(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ra(n)&&(n=[n]),nt(t,e,n))}const rv="3.2.33",iv="http://www.w3.org/2000/svg",vn=typeof document!="undefined"?document:null,cu=vn&&vn.createElement("template"),ov={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?vn.createElementNS(iv,t):vn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>vn.createTextNode(t),createComment:t=>vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{cu.innerHTML=s?`<svg>${t}</svg>`:t;const a=cu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function av(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function cv(t,e,n){const s=t.style,r=De(n);if(n&&!r){for(const i in n)Na(s,i,n[i]);if(e&&!De(e))for(const i in e)n[i]==null&&Na(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const lu=/\s*!important$/;function Na(t,e,n){if(j(n))n.forEach(s=>Na(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=lv(t,e);lu.test(n)?t.setProperty(Ts(s),n.replace(lu,""),"important"):t[s]=n}}const uu=["Webkit","Moz","ms"],Wo={};function lv(t,e){const n=Wo[e];if(n)return n;let s=Nt(e);if(s!=="filter"&&s in t)return Wo[e]=s;s=no(s);for(let r=0;r<uu.length;r++){const i=uu[r]+s;if(i in t)return Wo[e]=i}return e}const hu="http://www.w3.org/1999/xlink";function uv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hu,e.slice(6,e.length)):t.setAttributeNS(hu,e,n);else{const i=sm(e);n==null||i&&!Wh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function hv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Wh(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Zf,fv]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Da=0;const dv=Promise.resolve(),pv=()=>{Da=0},gv=()=>Da||(dv.then(pv),Da=Zf());function wn(t,e,n,s){t.addEventListener(e,n,s)}function mv(t,e,n,s){t.removeEventListener(e,n,s)}function yv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=vv(e);if(s){const l=i[e]=wv(s,r);wn(t,a,l,c)}else o&&(mv(t,a,o,c),i[e]=void 0)}}const fu=/(?:Once|Passive|Capture)$/;function vv(t){let e;if(fu.test(t)){e={};let n;for(;n=t.match(fu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ts(t.slice(2)),e]}function wv(t,e){const n=s=>{const r=s.timeStamp||Zf();(fv||r>=n.attached-1)&&gt(Ev(s,n.value),e,5,[s])};return n.value=t,n.attached=gv(),n}function Ev(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const du=/^on[a-z]/,_v=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?av(t,s,r):e==="style"?cv(t,n,s):Ji(e)?dc(e)||yv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Iv(t,e,s,r))?hv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),uv(t,e,s,r))};function Iv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&du.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||du.test(e)&&De(n)?!1:e in t}const Tv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};fy.props;const Ai=t=>{const e=t.props["onUpdate:modelValue"];return j(e)?n=>ai(e,n):e};function bv(t){t.target.composing=!0}function pu(t){const e=t.target;e.composing&&(e.composing=!1,Sv(e,"input"))}function Sv(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const lA={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Ai(r);const i=s||r.props&&r.props.type==="number";wn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Ei(a)),t._assign(a)}),n&&wn(t,"change",()=>{t.value=t.value.trim()}),e||(wn(t,"compositionstart",bv),wn(t,"compositionend",pu),wn(t,"change",pu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Ai(i),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ei(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},uA={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Zi(e);wn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ei(Ci(o)):Ci(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Ai(s)},mounted(t,{value:e}){gu(t,e)},beforeUpdate(t,e,n){t._assign=Ai(n)},updated(t,{value:e}){gu(t,e)}};function gu(t,e){const n=t.multiple;if(!(n&&!j(e)&&!Zi(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Ci(i);if(n)j(e)?i.selected=cm(e,o)>-1:i.selected=e.has(o);else if(Qi(Ci(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ci(t){return"_value"in t?t._value:t.value}const Av=["ctrl","shift","alt","meta"],Cv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Av.some(n=>t[`${n}Key`]&&!e.includes(n))},hA=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Cv[e[r]];if(i&&i(n,e))return}return t(n,...s)},fA={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Us(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Us(t,!0),s.enter(t)):s.leave(t,()=>{Us(t,!1)}):Us(t,e))},beforeUnmount(t,{value:e}){Us(t,e)}};function Us(t,e){t.style.display=e?t._vod:"none"}const Rv=We({patchProp:_v},ov);let mu;function kv(){return mu||(mu=Ly(Rv))}const Nv=(...t)=>{const e=kv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Dv(s);if(!r)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Dv(t){return De(t)?document.querySelector(t):t}const Ov={setup(t){return(e,n)=>{const s=Vy("router-view");return Kf(),Wf(s)}}},Pv="modulepreload",yu={},Mv="/",vu=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${Mv}${s}`,s in yu)return;yu[s]=!0;const r=s.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Pv,r||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),r)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ed=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",As=t=>ed?Symbol(t):"_vr_"+t,Lv=As("rvlm"),wu=As("rvd"),uo=As("r"),td=As("rl"),Oa=As("rvl"),Jn=typeof window!="undefined";function xv(t){return t.__esModule||ed&&t[Symbol.toStringTag]==="Module"}const he=Object.assign;function Go(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const Xs=()=>{},Uv=/\/$/,Fv=t=>t.replace(Uv,"");function Yo(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=jv(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Vv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Eu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Bv(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&us(e.matched[s],n.matched[r])&&nd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function us(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function nd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$v(t[n],e[n]))return!1;return!0}function $v(t,e){return Array.isArray(t)?_u(t,e):Array.isArray(e)?_u(e,t):t===e}function _u(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function jv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var cr;(function(t){t.pop="pop",t.push="push"})(cr||(cr={}));var Qs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Qs||(Qs={}));function Hv(t){if(!t)if(Jn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Fv(t)}const qv=/^[^#]+#/;function Kv(t,e){return t.replace(qv,"#")+e}function zv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ho=()=>({left:window.pageXOffset,top:window.pageYOffset});function Wv(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=zv(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Iu(t,e){return(history.state?history.state.position-e:-1)+t}const Pa=new Map;function Gv(t,e){Pa.set(t,e)}function Yv(t){const e=Pa.get(t);return Pa.delete(t),e}let Xv=()=>location.protocol+"//"+location.host;function sd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Eu(c,"")}return Eu(n,t)+s+r}function Qv(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=sd(t,location),y=n.value,T=e.value;let S=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}S=T?f.position-T.position:0}else s(g);r.forEach(N=>{N(n.value,y,{delta:S,type:cr.pop,direction:S?S>0?Qs.forward:Qs.back:Qs.unknown})})};function c(){o=n.value}function l(f){r.push(f);const g=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;!f.state||f.replaceState(he({},f.state,{scroll:ho()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Tu(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ho():null}}function Jv(t){const{history:e,location:n}=window,s={value:sd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Xv()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=he({},e.state,Tu(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=he({},r.value,e.state,{forward:c,scroll:ho()});i(u.current,u,!0);const h=he({},Tu(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Zv(t){t=Hv(t);const e=Jv(t),n=Qv(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=he({location:"",base:t,go:s,createHref:Kv.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ew(t){return typeof t=="string"||t&&typeof t=="object"}function rd(t){return typeof t=="string"||typeof t=="symbol"}const Kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},id=As("nf");var bu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bu||(bu={}));function hs(t,e){return he(new Error,{type:t,[id]:!0},e)}function zt(t,e){return t instanceof Error&&id in t&&(e==null||!!(t.type&e))}const Su="[^/]+?",tw={sensitive:!1,strict:!1,start:!0,end:!0},nw=/[.+*?^${}()[\]/\\]/g;function sw(t,e){const n=he({},tw,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(nw,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:T,optional:S,regexp:N}=f;i.push({name:y,repeatable:T,optional:S});const L=N||Su;if(L!==Su){g+=10;try{new RegExp(`(${L})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${y}" (${L}): `+Y.message)}}let z=T?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(z=S&&l.length<2?`(?:/${z})`:"/"+z),S&&(z+="?"),r+=z,g+=20,S&&(g+=-8),T&&(g+=-20),L===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:T,optional:S}=g,N=y in l?l[y]:"";if(Array.isArray(N)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const L=Array.isArray(N)?N.join("/"):N;if(!L)if(S)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=L}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function rw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function iw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=rw(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const ow={type:0,value:""},aw=/[a-zA-Z0-9_]/;function cw(t){if(!t)return[[]];if(t==="/")return[[ow]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:aw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function lw(t,e,n){const s=sw(cw(t.path),n),r=he(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function uw(t,e){const n=[],s=new Map;e=Cu({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const g=!f,y=fw(u);y.aliasOf=f&&f.record;const T=Cu(e,u),S=[y];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const Y of z)S.push(he({},y,{components:f?f.record.components:y.components,path:Y,aliasOf:f?f.record:y}))}let N,L;for(const z of S){const{path:Y}=z;if(h&&Y[0]!=="/"){const ae=h.record.path,_e=ae[ae.length-1]==="/"?"":"/";z.path=h.record.path+(Y&&_e+Y)}if(N=lw(z,h,T),f?f.alias.push(N):(L=L||N,L!==N&&L.alias.push(N),g&&u.name&&!Au(N)&&o(u.name)),"children"in y){const ae=y.children;for(let _e=0;_e<ae.length;_e++)i(ae[_e],N,f&&f.children[_e])}f=f||N,c(N)}return L?()=>{o(L)}:Xs}function o(u){if(rd(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&iw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!od(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Au(u)&&s.set(u.record.name,u)}function l(u,h){let f,g={},y,T;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw hs(1,{location:u});T=f.record.name,g=he(hw(h.params,f.keys.filter(L=>!L.optional).map(L=>L.name)),u.params),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(L=>L.re.test(y)),f&&(g=f.parse(y),T=f.record.name);else{if(f=h.name?s.get(h.name):n.find(L=>L.re.test(h.path)),!f)throw hs(1,{location:u,currentLocation:h});T=f.record.name,g=he({},h.params,u.params),y=f.stringify(g)}const S=[];let N=f;for(;N;)S.unshift(N.record),N=N.parent;return{name:T,path:y,params:g,matched:S,meta:pw(S)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function hw(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function fw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:dw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function dw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Au(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pw(t){return t.reduce((e,n)=>he(e,n.meta),{})}function Cu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function od(t,e){return e.children.some(n=>n===t||od(t,n))}const ad=/#/g,gw=/&/g,mw=/\//g,yw=/=/g,vw=/\?/g,cd=/\+/g,ww=/%5B/g,Ew=/%5D/g,ld=/%5E/g,_w=/%60/g,ud=/%7B/g,Iw=/%7C/g,hd=/%7D/g,Tw=/%20/g;function kc(t){return encodeURI(""+t).replace(Iw,"|").replace(ww,"[").replace(Ew,"]")}function bw(t){return kc(t).replace(ud,"{").replace(hd,"}").replace(ld,"^")}function Ma(t){return kc(t).replace(cd,"%2B").replace(Tw,"+").replace(ad,"%23").replace(gw,"%26").replace(_w,"`").replace(ud,"{").replace(hd,"}").replace(ld,"^")}function Sw(t){return Ma(t).replace(yw,"%3D")}function Aw(t){return kc(t).replace(ad,"%23").replace(vw,"%3F")}function Cw(t){return t==null?"":Aw(t).replace(mw,"%2F")}function Ri(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Rw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(cd," "),o=i.indexOf("="),a=Ri(o<0?i:i.slice(0,o)),c=o<0?null:Ri(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ru(t){let e="";for(let n in t){const s=t[n];if(n=Sw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&Ma(i)):[s&&Ma(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function kw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function Fs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Xt(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(hs(4,{from:n,to:e})):h instanceof Error?a(h):ew(h)?a(hs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Xo(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Nw(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Xt(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=xv(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Xt(f,n,s,i,o)()}))}}return r}function Nw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ku(t){const e=Ut(uo),n=Ut(td),s=Ct(()=>e.resolve(zs(t.to))),r=Ct(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(us.bind(null,u));if(f>-1)return f;const g=Nu(c[l-2]);return l>1&&Nu(u)===g&&h[h.length-1].path!==g?h.findIndex(us.bind(null,c[l-2])):f}),i=Ct(()=>r.value>-1&&Mw(n.params,s.value.params)),o=Ct(()=>r.value>-1&&r.value===n.matched.length-1&&nd(n.params,s.value.params));function a(c={}){return Pw(c)?e[zs(t.replace)?"replace":"push"](zs(t.to)).catch(Xs):Promise.resolve()}return{route:s,href:Ct(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Dw=Nf({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ku,setup(t,{slots:e}){const n=Ar(ku(t)),{options:s}=Ut(uo),r=Ct(()=>({[Du(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Du(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Jf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Ow=Dw;function Pw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Mw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Nu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Du=(t,e,n)=>t!=null?t:e!=null?e:n,Lw=Nf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Ut(Oa),r=Ct(()=>t.route||s.value),i=Ut(wu,0),o=Ct(()=>r.value.matched[i]);ci(wu,i+1),ci(Lv,o),ci(Oa,r);const a=qm();return li(()=>[a.value,o.value,t.name],([c,l,u],[h,f,g])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!us(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Ou(n.default,{Component:u,route:c});const f=l.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,T=Jf(u,he({},g,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Ou(n.default,{Component:T,route:c})||T}}});function Ou(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xw=Lw;function Uw(t){const e=uw(t.routes,t),n=t.parseQuery||Rw,s=t.stringifyQuery||Ru,r=t.history,i=Fs(),o=Fs(),a=Fs(),c=Km(Kt);let l=Kt;Jn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Go.bind(null,v=>""+v),h=Go.bind(null,Cw),f=Go.bind(null,Ri);function g(v,M){let k,U;return rd(v)?(k=e.getRecordMatcher(v),U=M):U=v,e.addRoute(U,k)}function y(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function T(){return e.getRoutes().map(v=>v.record)}function S(v){return!!e.getRecordMatcher(v)}function N(v,M){if(M=he({},M||c.value),typeof v=="string"){const Q=Yo(n,v,M.path),d=e.resolve({path:Q.path},M),p=r.createHref(Q.fullPath);return he(Q,d,{params:f(d.params),hash:Ri(Q.hash),redirectedFrom:void 0,href:p})}let k;if("path"in v)k=he({},v,{path:Yo(n,v.path,M.path).path});else{const Q=he({},v.params);for(const d in Q)Q[d]==null&&delete Q[d];k=he({},v,{params:h(v.params)}),M.params=h(M.params)}const U=e.resolve(k,M),le=v.hash||"";U.params=u(f(U.params));const ge=Vv(s,he({},v,{hash:bw(le),path:U.path})),ee=r.createHref(ge);return he({fullPath:ge,hash:le,query:s===Ru?kw(v.query):v.query||{}},U,{redirectedFrom:void 0,href:ee})}function L(v){return typeof v=="string"?Yo(n,v,c.value.path):he({},v)}function z(v,M){if(l!==v)return hs(8,{from:M,to:v})}function Y(v){return J(v)}function ae(v){return Y(he(L(v),{replace:!0}))}function _e(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:k}=M;let U=typeof k=="function"?k(v):k;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=L(U):{path:U},U.params={}),he({query:v.query,hash:v.hash,params:v.params},U)}}function J(v,M){const k=l=N(v),U=c.value,le=v.state,ge=v.force,ee=v.replace===!0,Q=_e(k);if(Q)return J(he(L(Q),{state:le,force:ge,replace:ee}),M||k);const d=k;d.redirectedFrom=M;let p;return!ge&&Bv(s,U,k)&&(p=hs(16,{to:d,from:U}),zn(U,U,!0,!1)),(p?Promise.resolve(p):de(d,U)).catch(m=>zt(m)?zt(m,2)?m:it(m):pe(m,d,U)).then(m=>{if(m){if(zt(m,2))return J(he(L(m.to),{state:le,force:ge,replace:ee}),M||d)}else m=He(d,U,!0,ee,le);return je(d,U,m),m})}function Te(v,M){const k=z(v,M);return k?Promise.reject(k):Promise.resolve()}function de(v,M){let k;const[U,le,ge]=Fw(v,M);k=Xo(U.reverse(),"beforeRouteLeave",v,M);for(const Q of U)Q.leaveGuards.forEach(d=>{k.push(Xt(d,v,M))});const ee=Te.bind(null,v,M);return k.push(ee),Gn(k).then(()=>{k=[];for(const Q of i.list())k.push(Xt(Q,v,M));return k.push(ee),Gn(k)}).then(()=>{k=Xo(le,"beforeRouteUpdate",v,M);for(const Q of le)Q.updateGuards.forEach(d=>{k.push(Xt(d,v,M))});return k.push(ee),Gn(k)}).then(()=>{k=[];for(const Q of v.matched)if(Q.beforeEnter&&!M.matched.includes(Q))if(Array.isArray(Q.beforeEnter))for(const d of Q.beforeEnter)k.push(Xt(d,v,M));else k.push(Xt(Q.beforeEnter,v,M));return k.push(ee),Gn(k)}).then(()=>(v.matched.forEach(Q=>Q.enterCallbacks={}),k=Xo(ge,"beforeRouteEnter",v,M),k.push(ee),Gn(k))).then(()=>{k=[];for(const Q of o.list())k.push(Xt(Q,v,M));return k.push(ee),Gn(k)}).catch(Q=>zt(Q,8)?Q:Promise.reject(Q))}function je(v,M,k){for(const U of a.list())U(v,M,k)}function He(v,M,k,U,le){const ge=z(v,M);if(ge)return ge;const ee=M===Kt,Q=Jn?history.state:{};k&&(U||ee?r.replace(v.fullPath,he({scroll:ee&&Q&&Q.scroll},le)):r.push(v.fullPath,le)),c.value=v,zn(v,M,k,ee),it()}let Ge;function Ht(){Ge=r.listen((v,M,k)=>{const U=N(v),le=_e(U);if(le){J(he(le,{replace:!0}),U).catch(Xs);return}l=U;const ge=c.value;Jn&&Gv(Iu(ge.fullPath,k.delta),ho()),de(U,ge).catch(ee=>zt(ee,12)?ee:zt(ee,2)?(J(ee.to,U).then(Q=>{zt(Q,20)&&!k.delta&&k.type===cr.pop&&r.go(-1,!1)}).catch(Xs),Promise.reject()):(k.delta&&r.go(-k.delta,!1),pe(ee,U,ge))).then(ee=>{ee=ee||He(U,ge,!1),ee&&(k.delta?r.go(-k.delta,!1):k.type===cr.pop&&zt(ee,20)&&r.go(-1,!1)),je(U,ge,ee)}).catch(Xs)})}let qn=Fs(),Kn=Fs(),Re;function pe(v,M,k){it(v);const U=Kn.list();return U.length?U.forEach(le=>le(v,M,k)):console.error(v),Promise.reject(v)}function ce(){return Re&&c.value!==Kt?Promise.resolve():new Promise((v,M)=>{qn.add([v,M])})}function it(v){return Re||(Re=!v,Ht(),qn.list().forEach(([M,k])=>v?k(v):M()),qn.reset()),v}function zn(v,M,k,U){const{scrollBehavior:le}=t;if(!Jn||!le)return Promise.resolve();const ge=!k&&Yv(Iu(v.fullPath,0))||(U||!k)&&history.state&&history.state.scroll||null;return vf().then(()=>le(v,M,ge)).then(ee=>ee&&Wv(ee)).catch(ee=>pe(ee,v,M))}const Ot=v=>r.go(v);let _t;const ft=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:S,getRoutes:T,resolve:N,options:t,push:Y,replace:ae,go:Ot,back:()=>Ot(-1),forward:()=>Ot(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Kn.add,isReady:ce,install(v){const M=this;v.component("RouterLink",Ow),v.component("RouterView",xw),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>zs(c)}),Jn&&!_t&&c.value===Kt&&(_t=!0,Y(r.location).catch(le=>{}));const k={};for(const le in Kt)k[le]=Ct(()=>c.value[le]);v.provide(uo,M),v.provide(td,Ar(k)),v.provide(Oa,c);const U=v.unmount;ft.add(v),v.unmount=function(){ft.delete(v),ft.size<1&&(l=Kt,Ge&&Ge(),c.value=Kt,_t=!1,Re=!1),U()}}}}function Gn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Fw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>us(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>us(l,c))||r.push(c))}return[n,s,r]}function dA(){return Ut(uo)}/**
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
 *//**
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
 */const fd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Vw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Bw=function(t){const e=fd(t);return dd.encodeByteArray(e,!0)},pd=function(t){return Bw(t).replace(/\./g,"")},$w=function(t){try{return dd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class jw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Oe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gd(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function md(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hw(){return Oe().indexOf("Electron/")>=0}function vd(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qw(){return Oe().indexOf("MSAppHost/")>=0}function Kw(){return typeof indexedDB=="object"}function zw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ww="FirebaseError";class Bn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ww,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cr.prototype.create)}}class Cr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Gw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Bn(r,a,s)}}function Gw(t,e){return t.replace(Yw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Yw=/\{\$([^}]+)}/g;function Xw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ki(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Pu(i)&&Pu(o)){if(!ki(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Pu(t){return t!==null&&typeof t=="object"}/**
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
 */function Rr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Hs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Qw(t,e){const n=new Jw(t,e);return n.subscribe.bind(n)}class Jw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Zw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Qo),r.error===void 0&&(r.error=Qo),r.complete===void 0&&(r.complete=Qo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qo(){}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function qs(t,e){return new Promise((n,s)=>{t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;s(`${e}: ${(i=r.target.error)===null||i===void 0?void 0:i.message}`)}})}class Mu{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new wd(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Ed(this._db.createObjectStore(e,n))}close(){this._db.close()}}class wd{constructor(e){this._transaction=e,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(e){return new Ed(this._transaction.objectStore(e))}}class Ed{constructor(e){this._store=e}index(e){return new Lu(this._store.index(e))}createIndex(e,n,s){return new Lu(this._store.createIndex(e,n,s))}get(e){const n=this._store.get(e);return qs(n,"Error reading from IndexedDB")}put(e,n){const s=this._store.put(e,n);return qs(s,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return qs(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return qs(e,"Error clearing IndexedDB object store")}}class Lu{constructor(e){this._index=e}get(e){const n=this._index.get(e);return qs(n,"Error reading from IndexedDB")}}function eE(t,e,n){return new Promise((s,r)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{s(new Mu(o.target.result))},i.onerror=o=>{var a;r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new Mu(i.result),o.oldVersion,o.newVersion,new wd(i.transaction))}}catch(i){r(`Error opening indexedDB: ${i.message}`)}})}class Nn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mn="[DEFAULT]";/**
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
 */class tE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new jw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sE(e))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mn){return this.instances.has(e)}getOptions(e=mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=mn){return this.component?this.component.multipleInstances?e:mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nE(t){return t===mn?void 0:t}function sE(t){return t.instantiationMode==="EAGER"}/**
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
 */class rE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const iE={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},oE=re.INFO,aE={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},cE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=aE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nc{constructor(e){this.name=e,this._logLevel=oE,this._logHandler=cE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}/**
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
 */class lE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function uE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const La="@firebase/app",xu="0.7.21";/**
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
 */const Dc=new Nc("@firebase/app"),hE="@firebase/app-compat",fE="@firebase/analytics-compat",dE="@firebase/analytics",pE="@firebase/app-check-compat",gE="@firebase/app-check",mE="@firebase/auth",yE="@firebase/auth-compat",vE="@firebase/database",wE="@firebase/database-compat",EE="@firebase/functions",_E="@firebase/functions-compat",IE="@firebase/installations",TE="@firebase/installations-compat",bE="@firebase/messaging",SE="@firebase/messaging-compat",AE="@firebase/performance",CE="@firebase/performance-compat",RE="@firebase/remote-config",kE="@firebase/remote-config-compat",NE="@firebase/storage",DE="@firebase/storage-compat",OE="@firebase/firestore",PE="@firebase/firestore-compat",ME="firebase",LE="9.6.11";/**
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
 */const _d="[DEFAULT]",xE={[La]:"fire-core",[hE]:"fire-core-compat",[dE]:"fire-analytics",[fE]:"fire-analytics-compat",[gE]:"fire-app-check",[pE]:"fire-app-check-compat",[mE]:"fire-auth",[yE]:"fire-auth-compat",[vE]:"fire-rtdb",[wE]:"fire-rtdb-compat",[EE]:"fire-fn",[_E]:"fire-fn-compat",[IE]:"fire-iid",[TE]:"fire-iid-compat",[bE]:"fire-fcm",[SE]:"fire-fcm-compat",[AE]:"fire-perf",[CE]:"fire-perf-compat",[RE]:"fire-rc",[kE]:"fire-rc-compat",[NE]:"fire-gcs",[DE]:"fire-gcs-compat",[OE]:"fire-fst",[PE]:"fire-fst-compat","fire-js":"fire-js",[ME]:"fire-js-all"};/**
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
 */const Ni=new Map,xa=new Map;function UE(t,e){try{t.container.addComponent(e)}catch(n){Dc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if(xa.has(e))return Dc.debug(`There were multiple attempts to register component ${e}.`),!1;xa.set(e,t);for(const n of Ni.values())UE(n,t);return!0}function Oc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const FE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Dn=new Cr("app","Firebase",FE);/**
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
 */class VE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
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
 */const kr=LE;function BE(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:_d,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Dn.create("bad-app-name",{appName:String(s)});const r=Ni.get(s);if(r){if(ki(t,r.options)&&ki(n,r.config))return r;throw Dn.create("duplicate-app",{appName:s})}const i=new rE(s);for(const a of xa.values())i.addComponent(a);const o=new VE(t,n,i);return Ni.set(s,o),o}function Id(t=_d){const e=Ni.get(t);if(!e)throw Dn.create("no-app",{appName:t});return e}function sn(t,e,n){var s;let r=(s=xE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dc.warn(a.join(" "));return}fs(new Nn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const $E="firebase-heartbeat-database",jE=1,lr="firebase-heartbeat-store";let Jo=null;function Td(){return Jo||(Jo=eE($E,jE,(t,e)=>{switch(e){case 0:t.createObjectStore(lr)}}).catch(t=>{throw Dn.create("storage-open",{originalErrorMessage:t.message})})),Jo}async function HE(t){try{return(await Td()).transaction(lr).objectStore(lr).get(bd(t))}catch(e){throw Dn.create("storage-get",{originalErrorMessage:e.message})}}async function Uu(t,e){try{const s=(await Td()).transaction(lr,"readwrite");return await s.objectStore(lr).put(e,bd(t)),s.complete}catch(n){throw Dn.create("storage-set",{originalErrorMessage:n.message})}}function bd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qE=1024,KE=30*24*60*60*1e3;class zE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=KE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fu(),{heartbeatsToSend:n,unsentEntries:s}=WE(this._heartbeatsCache.heartbeats),r=pd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fu(){return new Date().toISOString().substring(0,10)}function WE(t,e=qE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Vu(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Vu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class GE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kw()?zw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Uu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Uu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Vu(t){return pd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function YE(t){fs(new Nn("platform-logger",e=>new lE(e),"PRIVATE")),fs(new Nn("heartbeat",e=>new zE(e),"PRIVATE")),sn(La,xu,t),sn(La,xu,"esm2017"),sn("fire-js","")}YE("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Pc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Sd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XE=Sd,Ad=new Cr("auth","Firebase",Sd());/**
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
 */const Bu=new Nc("@firebase/auth");function fi(t,...e){Bu.logLevel<=re.ERROR&&Bu.error(`Auth (${kr}): ${t}`,...e)}/**
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
 */function Et(t,...e){throw Mc(t,...e)}function Rt(t,...e){return Mc(t,...e)}function QE(t,e,n){const s=Object.assign(Object.assign({},XE()),{[e]:n});return new Cr("auth","Firebase",s).create(e,{appName:t.name})}function Mc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ad.create(t,...e)}function H(t,e,...n){if(!t)throw Mc(e,...n)}function Mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fi(e),new Error(e)}function Bt(t,e){t||Mt(e)}/**
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
 */const $u=new Map;function Lt(t){Bt(t instanceof Function,"Expected a class definition");let e=$u.get(t);return e?(Bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$u.set(t,e),e)}/**
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
 */function JE(t,e){const n=Oc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ki(i,e!=null?e:{}))return r;Et(r,"already-initialized")}return n.initialize({options:e})}function ZE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ua(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function e_(){return ju()==="http:"||ju()==="https:"}function ju(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function t_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(e_()||md()||"connection"in navigator)?navigator.onLine:!0}function n_(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bt(n>e,"Short delay should be less than long delay!"),this.isMobile=gd()||yd()}get(){return t_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lc(t,e){Bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const s_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const r_=new Nr(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Or(t,e,n,s,r={}){return Rd(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Rr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Cd.fetch()(kd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Rd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},s_),e);try{const r=new i_(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zo(t,"email-already-in-use",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw QE(t,u,l);Et(t,u)}}catch(r){if(r instanceof Bn)throw r;Et(t,"network-request-failed")}}async function Pr(t,e,n,s,r={}){const i=await Or(t,e,n,s,r);return"mfaPendingCredential"in i&&Et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function kd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Lc(t.config,r):`${t.config.apiScheme}://${r}`}class i_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Rt(this.auth,"network-request-failed")),r_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Rt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function o_(t,e){return Or(t,"POST","/v1/accounts:delete",e)}async function a_(t,e){return Or(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Js(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function c_(t,e=!1){const n=rt(t),s=await n.getIdToken(e),r=xc(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Js(ea(r.auth_time)),issuedAtTime:Js(ea(r.iat)),expirationTime:Js(ea(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ea(t){return Number(t)*1e3}function xc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return fi("JWT malformed, contained fewer than 3 sections"),null;try{const r=$w(n);return r?JSON.parse(r):(fi("Failed to decode base64 JWT payload"),null)}catch(r){return fi("Caught error parsing JWT payload as JSON",r),null}}function l_(t){const e=xc(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ur(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Bn&&u_(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function u_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class h_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Di(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ur(t,a_(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?p_(i.providerUserInfo):[],a=d_(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Nd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function f_(t){const e=rt(t);await Di(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function d_(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function p_(t){return t.map(e=>{var{providerId:n}=e,s=Pc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function g_(t,e){const n=await Rd(t,{},async()=>{const s=Rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=kd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):l_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await g_(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new hr;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hr,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
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
 */function Wt(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class An{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Pc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new h_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Nd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ur(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return c_(this,e)}reload(){return f_(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new An(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Di(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ur(this,o_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,N=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:Y,isAnonymous:ae,providerData:_e,stsTokenManager:J}=n;H(z&&J,e,"internal-error");const Te=hr.fromJSON(this.name,J);H(typeof z=="string",e,"internal-error"),Wt(h,e.name),Wt(f,e.name),H(typeof Y=="boolean",e,"internal-error"),H(typeof ae=="boolean",e,"internal-error"),Wt(g,e.name),Wt(y,e.name),Wt(T,e.name),Wt(S,e.name),Wt(N,e.name),Wt(L,e.name);const de=new An({uid:z,auth:e,email:f,emailVerified:Y,displayName:h,isAnonymous:ae,photoURL:y,phoneNumber:g,tenantId:T,stsTokenManager:Te,createdAt:N,lastLoginAt:L});return _e&&Array.isArray(_e)&&(de.providerData=_e.map(je=>Object.assign({},je))),S&&(de._redirectEventId=S),de}static async _fromIdTokenResponse(e,n,s=!1){const r=new hr;r.updateFromServerResponse(n);const i=new An({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Di(i),i}}/**
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
 */class Dd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dd.type="NONE";const Hu=Dd;/**
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
 */function di(t,e,n){return`firebase:${t}:${e}:${n}`}class is{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=di(this.userKey,r.apiKey,i),this.fullPersistenceKey=di("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?An._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new is(Lt(Hu),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Lt(Hu);const o=di(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=An._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new is(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new is(i,e,s))}}/**
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
 */function qu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Md(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Od(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xd(e))return"Blackberry";if(Ud(e))return"Webos";if(Uc(e))return"Safari";if((e.includes("chrome/")||Pd(e))&&!e.includes("edge/"))return"Chrome";if(Ld(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Od(t=Oe()){return/firefox\//i.test(t)}function Uc(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pd(t=Oe()){return/crios\//i.test(t)}function Md(t=Oe()){return/iemobile/i.test(t)}function Ld(t=Oe()){return/android/i.test(t)}function xd(t=Oe()){return/blackberry/i.test(t)}function Ud(t=Oe()){return/webos/i.test(t)}function fo(t=Oe()){return/iphone|ipad|ipod/i.test(t)}function m_(t=Oe()){var e;return fo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function y_(){return vd()&&document.documentMode===10}function Fd(t=Oe()){return fo(t)||Ld(t)||Ud(t)||xd(t)||/windows phone/i.test(t)||Md(t)}function v_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vd(t,e=[]){let n;switch(t){case"Browser":n=qu(Oe());break;case"Worker":n=`${qu(Oe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${s}`}/**
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
 */class w_{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ku(this),this.idTokenSubscription=new Ku(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ad,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await is.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===i)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Di(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function po(t){return rt(t)}class Ku{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qw(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Fc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,n){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}async function E_(t,e){return Or(t,"POST","/v1/accounts:update",e)}/**
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
 */async function __(t,e){return Pr(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}/**
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
 */async function I_(t,e){return Pr(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function T_(t,e){return Pr(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
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
 */class fr extends Fc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new fr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new fr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return __(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return I_(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return E_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return T_(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function os(t,e){return Pr(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
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
 */const b_="http://localhost";class On extends Fc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new On(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Pc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new On(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,os(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:b_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rr(n)}return e}}/**
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
 */function S_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function A_(t){const e=js(Hs(t)).link,n=e?js(Hs(e)).deep_link_id:null,s=js(Hs(t)).deep_link_id;return(s?js(Hs(s)).link:null)||s||n||e||t}class Vc{constructor(e){var n,s,r,i,o,a;const c=js(Hs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=S_((r=c.mode)!==null&&r!==void 0?r:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=A_(e);try{return new Vc(n)}catch{return null}}}/**
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
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,n){return fr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Vc.parseLink(n);return H(s,"argument-error"),fr._fromEmailAndCode(e,s.code,s.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Bd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mr extends Bd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qt extends Mr{constructor(){super("facebook.com")}static credential(e){return On._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
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
 */class Jt extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return On._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Jt.credential(n,s)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
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
 */class Zt extends Mr{constructor(){super("github.com")}static credential(e){return On._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.GITHUB_SIGN_IN_METHOD="github.com";Zt.PROVIDER_ID="github.com";/**
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
 */class en extends Mr{constructor(){super("twitter.com")}static credential(e,n){return On._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return en.credential(n,s)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
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
 */async function C_(t,e){return Pr(t,"POST","/v1/accounts:signUp",Dr(t,e))}/**
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
 */class Pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await An._fromIdTokenResponse(e,s,r),o=zu(s);return new Pn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=zu(s);return new Pn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function zu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Oi extends Bn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Oi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Oi(e,n,s,r)}}function $d(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oi._fromErrorAndOperation(t,i,e,s):i})}async function R_(t,e,n=!1){const s=await ur(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pn._forOperation(t,"link",s)}/**
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
 */async function k_(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await ur(t,$d(s,r,e,t),n);H(i.idToken,s,"internal-error");const o=xc(i.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),Pn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Et(s,"user-mismatch"),i}}/**
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
 */async function jd(t,e,n=!1){const s="signIn",r=await $d(t,s,e),i=await Pn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function N_(t,e){return jd(po(t),e)}async function pA(t,e,n){const s=po(t),r=await C_(s,{returnSecureToken:!0,email:e,password:n}),i=await Pn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function gA(t,e,n){return N_(rt(t),Cs.credential(e,n))}function D_(t,e,n,s){return rt(t).onAuthStateChanged(e,n,s)}function mA(t){return rt(t).signOut()}const Pi="__sak";/**
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
 */class Hd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pi,"1"),this.storage.removeItem(Pi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function O_(){const t=Oe();return Uc(t)||fo(t)}const P_=1e3,M_=10;class qd extends Hd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=O_()&&v_(),this.fallbackToPolling=Fd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);y_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,M_):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},P_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qd.type="LOCAL";const L_=qd;/**
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
 */class Kd extends Hd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kd.type="SESSION";const zd=Kd;/**
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
 */function x_(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new go(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await x_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}go.receivers=[];/**
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
 */function Bc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class U_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Bc("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kt(){return window}function F_(t){kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Wd(){return typeof kt().WorkerGlobalScope!="undefined"&&typeof kt().importScripts=="function"}async function V_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function B_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $_(){return Wd()?self:null}/**
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
 */const Gd="firebaseLocalStorageDb",j_=1,Mi="firebaseLocalStorage",Yd="fbase_key";class Lr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mo(t,e){return t.transaction([Mi],e?"readwrite":"readonly").objectStore(Mi)}function H_(){const t=indexedDB.deleteDatabase(Gd);return new Lr(t).toPromise()}function Fa(){const t=indexedDB.open(Gd,j_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Mi,{keyPath:Yd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Mi)?e(s):(s.close(),await H_(),e(await Fa()))})})}async function Wu(t,e,n){const s=mo(t,!0).put({[Yd]:e,value:n});return new Lr(s).toPromise()}async function q_(t,e){const n=mo(t,!1).get(e),s=await new Lr(n).toPromise();return s===void 0?null:s.value}function Gu(t,e){const n=mo(t,!0).delete(e);return new Lr(n).toPromise()}const K_=800,z_=3;class Xd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>z_)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=go._getInstance($_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await V_(),!this.activeServiceWorker)return;this.sender=new U_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||B_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fa();return await Wu(e,Pi,"1"),await Gu(e,Pi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Wu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>q_(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=mo(r,!1).getAll();return new Lr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),K_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xd.type="LOCAL";const W_=Xd;/**
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
 */function G_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Y_(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Rt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",G_().appendChild(s)})}function X_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Nr(3e4,6e4);/**
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
 */function Q_(t,e){return e?Lt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $c extends Fc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function J_(t){return jd(t.auth,new $c(t),t.bypassAuthState)}function Z_(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),k_(n,new $c(t),t.bypassAuthState)}async function e0(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),R_(n,new $c(t),t.bypassAuthState)}/**
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
 */class Qd{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return J_;case"linkViaPopup":case"linkViaRedirect":return e0;case"reauthViaPopup":case"reauthViaRedirect":return Z_;default:Et(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const t0=new Nr(2e3,1e4);class Zn extends Qd{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=Bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,t0.get())};e()}}Zn.currentPopupAction=null;/**
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
 */const n0="pendingRedirect",ta=new Map;class s0 extends Qd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ta.get(this.auth._key());if(!e){try{const s=await r0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ta.set(this.auth._key(),e)}return this.bypassAuthState||ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r0(t,e){const n=o0(e),s=i0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function i0(t){return Lt(t._redirectPersistence)}function o0(t){return di(n0,t.config.apiKey,t.name)}async function a0(t,e,n=!1){const s=po(t),r=Q_(s,e),o=await new s0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const c0=10*60*1e3;class l0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!u0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Jd(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=c0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yu(e))}saveEventToCache(e){this.cachedEventUids.add(Yu(e)),this.lastProcessedEventTime=Date.now()}}function Yu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function u0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jd(t);default:return!1}}/**
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
 */async function h0(t,e={}){return Or(t,"GET","/v1/projects",e)}/**
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
 */const f0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,d0=/^https?/;async function p0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await h0(t);for(const n of e)try{if(g0(n))return}catch{}Et(t,"unauthorized-domain")}function g0(t){const e=Ua(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!d0.test(n))return!1;if(f0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const m0=new Nr(3e4,6e4);function Xu(){const t=kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function y0(t){return new Promise((e,n)=>{var s,r,i;function o(){Xu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xu(),n(Rt(t,"network-request-failed"))},timeout:m0.get()})}if(!((r=(s=kt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=kt().gapi)===null||i===void 0)&&i.load)o();else{const a=X_("iframefcb");return kt()[a]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},Y_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw pi=null,e})}let pi=null;function v0(t){return pi=pi||y0(t),pi}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const w0=new Nr(5e3,15e3),E0="__/auth/iframe",_0="emulator/auth/iframe",I0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function b0(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lc(e,_0):`https://${t.config.authDomain}/${E0}`,s={apiKey:e.apiKey,appName:t.name,v:kr},r=T0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Rr(s).slice(1)}`}async function S0(t){const e=await v0(t),n=kt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:b0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),a=kt().setTimeout(()=>{i(o)},w0.get());function c(){kt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const A0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C0=500,R0=600,k0="_blank",N0="http://localhost";class Qu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D0(t,e,n,s=C0,r=R0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},A0),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Oe().toLowerCase();n&&(a=Pd(l)?k0:n),Od(l)&&(e=e||N0,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(m_(l)&&a!=="_self")return O0(e||"",a),new Qu(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Qu(h)}function O0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const P0="__/auth/handler",M0="emulator/auth/handler";function Ju(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:kr,eventId:r};if(e instanceof Bd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Mr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${L0(t)}?${Rr(a).slice(1)}`}function L0({config:t}){return t.emulator?Lc(t,M0):`https://${t.authDomain}/${P0}`}/**
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
 */const na="webStorageSupport";class x0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zd,this._completeRedirectFn=a0}async _openPopup(e,n,s,r){var i;Bt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ju(e,n,s,Ua(),r);return D0(e,o,Bc())}async _openRedirect(e,n,s,r){return await this._originValidation(e),F_(Ju(e,n,s,Ua(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Bt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await S0(e),s=new l0(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(na,{type:na},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[na];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=p0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fd()||Uc()||fo()}}const U0=x0;var Zu="@firebase/auth",eh="0.19.12";/**
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
 */class F0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function V0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function B0(t){fs(new Nn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vd(t)},u=new w_(a,c,l);return ZE(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),fs(new Nn("auth-internal",e=>{const n=po(e.getProvider("auth").getImmediate());return(s=>new F0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(Zu,eh,V0(t)),sn(Zu,eh,"esm2017")}/**
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
 */function $0(t=Id()){const e=Oc(t,"auth");return e.isInitialized()?e.getImmediate():JE(t,{popupRedirectResolver:U0,persistence:[W_,L_,zd]})}B0("Browser");const j0=[{path:"/",component:()=>vu(()=>import("./Home.81a50581.js"),["assets/Home.81a50581.js","assets/db_api.aaec220f.js"]),meta:{requiresUnAuth:!0}},{path:"/dashboard",component:()=>vu(()=>import("./Dashboard.052120d1.js"),["assets/Dashboard.052120d1.js","assets/db_api.aaec220f.js"]),meta:{requiresAuth:!0}}],Zd=Uw({history:Zv(""),routes:j0});function th(){return new Promise((t,e)=>{const n=D_($0(),s=>{n(),t(s)},e)})}Zd.beforeEach(async(t,e,n)=>{t.matched.some(s=>s.meta.requiresUnAuth)?await th()?n("/dashboard"):n():t.matched.some(s=>s.meta.requiresAuth)?await th()?n():n("/"):n()});var H0="firebase",q0="9.6.11";/**
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
 */sn(H0,q0,"app");var K0=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,jc=jc||{},q=K0||self;function Li(){}function Va(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function z0(t){return Object.prototype.hasOwnProperty.call(t,sa)&&t[sa]||(t[sa]=++W0)}var sa="closure_uid_"+(1e9*Math.random()>>>0),W0=0;function G0(t,e,n){return t.call.apply(t.bind,arguments)}function Y0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ue(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ue=G0:Ue=Y0,Ue.apply(null,arguments)}function ti(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function un(){this.s=this.s,this.o=this.o}var X0=0,Q0={};un.prototype.s=!1;un.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),X0!=0)){var t=z0(this);delete Q0[t]}};un.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ep=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},tp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function J0(t){e:{var e=HI;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function nh(t){return Array.prototype.concat.apply([],arguments)}function Hc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function xi(t){return/^[\s\xa0]*$/.test(t)}var sh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xe(t,e){return t.indexOf(e)!=-1}function ra(t,e){return t<e?-1:t>e?1:0}var Qe;e:{var rh=q.navigator;if(rh){var ih=rh.userAgent;if(ih){Qe=ih;break e}}Qe=""}function qc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function np(t){const e={};for(const n in t)e[n]=t[n];return e}var oh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<oh.length;i++)n=oh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Kc(t){return Kc[" "](t),t}Kc[" "]=Li;function Z0(t){var e=nI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var eI=Xe(Qe,"Opera"),ds=Xe(Qe,"Trident")||Xe(Qe,"MSIE"),rp=Xe(Qe,"Edge"),Ba=rp||ds,ip=Xe(Qe,"Gecko")&&!(Xe(Qe.toLowerCase(),"webkit")&&!Xe(Qe,"Edge"))&&!(Xe(Qe,"Trident")||Xe(Qe,"MSIE"))&&!Xe(Qe,"Edge"),tI=Xe(Qe.toLowerCase(),"webkit")&&!Xe(Qe,"Edge");function op(){var t=q.document;return t?t.documentMode:void 0}var Ui;e:{var ia="",oa=function(){var t=Qe;if(ip)return/rv:([^\);]+)(\)|;)/.exec(t);if(rp)return/Edge\/([\d\.]+)/.exec(t);if(ds)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(tI)return/WebKit\/(\S+)/.exec(t);if(eI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(oa&&(ia=oa?oa[1]:""),ds){var aa=op();if(aa!=null&&aa>parseFloat(ia)){Ui=String(aa);break e}}Ui=ia}var nI={};function sI(){return Z0(function(){let t=0;const e=sh(String(Ui)).split("."),n=sh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=ra(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ra(r[2].length==0,i[2].length==0)||ra(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var $a;if(q.document&&ds){var ah=op();$a=ah||parseInt(Ui,10)||void 0}else $a=void 0;var rI=$a,iI=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",Li,e),q.removeEventListener("test",Li,e)}catch{}return t}();function Ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};function dr(t,e){if(Ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ip){e:{try{Kc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:oI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&dr.Z.h.call(this)}}$e(dr,Ke);var oI={2:"touch",3:"pen",4:"mouse"};dr.prototype.h=function(){dr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ur="closure_listenable_"+(1e6*Math.random()|0),aI=0;function cI(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++aI,this.ca=this.fa=!1}function yo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function vo(t){this.src=t,this.g={},this.h=0}vo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ha(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new cI(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function ja(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ep(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(yo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ha(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var zc="closure_lm_"+(1e6*Math.random()|0),ca={};function ap(t,e,n,s,r){if(s&&s.once)return lp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ap(t,e[i],n,s,r);return null}return n=Yc(n),t&&t[Ur]?t.N(e,n,xr(s)?!!s.capture:!!s,r):cp(t,e,n,!1,s,r)}function cp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=xr(r)?!!r.capture:!!r,a=Gc(t);if(a||(t[zc]=a=new vo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=lI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)iI||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(hp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function lI(){function t(n){return e.call(t.src,t.listener,n)}var e=uI;return t}function lp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)lp(t,e[i],n,s,r);return null}return n=Yc(n),t&&t[Ur]?t.O(e,n,xr(s)?!!s.capture:!!s,r):cp(t,e,n,!0,s,r)}function up(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)up(t,e[i],n,s,r);else s=xr(s)?!!s.capture:!!s,n=Yc(n),t&&t[Ur]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ha(i,n,s,r),-1<n&&(yo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Gc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ha(e,n,s,r)),(n=-1<t?e[t]:null)&&Wc(n))}function Wc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ur])ja(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(hp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Gc(e))?(ja(n,t),n.h==0&&(n.src=null,e[zc]=null)):yo(t)}}}function hp(t){return t in ca?ca[t]:ca[t]="on"+t}function uI(t,e){if(t.ca)t=!0;else{e=new dr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Wc(t),t=n.call(s,e)}return t}function Gc(t){return t=t[zc],t instanceof vo?t:null}var la="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yc(t){return typeof t=="function"?t:(t[la]||(t[la]=function(e){return t.handleEvent(e)}),t[la])}function Pe(){un.call(this),this.i=new vo(this),this.P=this,this.I=null}$e(Pe,un);Pe.prototype[Ur]=!0;Pe.prototype.removeEventListener=function(t,e,n,s){up(this,t,e,n,s)};function Fe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ke(e,t);else if(e instanceof Ke)e.target=e.target||t;else{var r=e;e=new Ke(s,t),sp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ni(o,s,!0,e)&&r}if(o=e.g=t,r=ni(o,s,!0,e)&&r,r=ni(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ni(o,s,!1,e)&&r}Pe.prototype.M=function(){if(Pe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)yo(n[s]);delete t.g[e],t.h--}}this.I=null};Pe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Pe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ni(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ja(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Xc=q.JSON.stringify;function hI(){var t=dp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class fI{constructor(){this.h=this.g=null}add(e,n){const s=fp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var fp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new dI,t=>t.reset());class dI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pI(t){q.setTimeout(()=>{throw t},0)}function Qc(t,e){qa||gI(),Ka||(qa(),Ka=!0),dp.add(t,e)}var qa;function gI(){var t=q.Promise.resolve(void 0);qa=function(){t.then(mI)}}var Ka=!1,dp=new fI;function mI(){for(var t;t=hI();){try{t.h.call(t.g)}catch(n){pI(n)}var e=fp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ka=!1}function wo(t,e){Pe.call(this),this.h=t||1,this.g=e||q,this.j=Ue(this.kb,this),this.l=Date.now()}$e(wo,Pe);O=wo.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Fe(this,"tick"),this.da&&(Jc(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){wo.Z.M.call(this),Jc(this),delete this.g};function Zc(t,e,n){if(typeof t=="function")n&&(t=Ue(t,n));else if(t&&typeof t.handleEvent=="function")t=Ue(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function pp(t){t.g=Zc(()=>{t.g=null,t.i&&(t.i=!1,pp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class yI extends un{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pp(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pr(t){un.call(this),this.h=t,this.g={}}$e(pr,un);var ch=[];function gp(t,e,n,s){Array.isArray(n)||(n&&(ch[0]=n.toString()),n=ch);for(var r=0;r<n.length;r++){var i=ap(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function mp(t){qc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wc(e)},t),t.g={}}pr.prototype.M=function(){pr.Z.M.call(this),mp(this)};pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Eo(){this.g=!0}Eo.prototype.Aa=function(){this.g=!1};function vI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function wI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function es(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_I(t,n)+(s?" "+s:"")})}function EI(t,e){t.info(function(){return"TIMEOUT: "+e})}Eo.prototype.info=function(){};function _I(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Xc(n)}catch{return e}}var $n={},lh=null;function _o(){return lh=lh||new Pe}$n.Ma="serverreachability";function yp(t){Ke.call(this,$n.Ma,t)}$e(yp,Ke);function gr(t){const e=_o();Fe(e,new yp(e,t))}$n.STAT_EVENT="statevent";function vp(t,e){Ke.call(this,$n.STAT_EVENT,t),this.stat=e}$e(vp,Ke);function Je(t){const e=_o();Fe(e,new vp(e,t))}$n.Na="timingevent";function wp(t,e){Ke.call(this,$n.Na,t),this.size=e}$e(wp,Ke);function Fr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var Io={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ep={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function el(){}el.prototype.h=null;function uh(t){return t.h||(t.h=t.i())}function _p(){}var Vr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function tl(){Ke.call(this,"d")}$e(tl,Ke);function nl(){Ke.call(this,"c")}$e(nl,Ke);var za;function To(){}$e(To,el);To.prototype.g=function(){return new XMLHttpRequest};To.prototype.i=function(){return{}};za=new To;function Br(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new pr(this),this.P=II,t=Ba?125:void 0,this.W=new wo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ip}function Ip(){this.i=null,this.g="",this.h=!1}var II=45e3,Wa={},Fi={};O=Br.prototype;O.setTimeout=function(t){this.P=t};function Ga(t,e,n){t.K=1,t.v=So($t(e)),t.s=n,t.U=!0,Tp(t,null)}function Tp(t,e){t.F=Date.now(),$r(t),t.A=$t(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Np(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Ip,t.g=Xp(t.l,n?e:null,!t.s),0<t.O&&(t.L=new yI(Ue(t.Ia,t,t.g),t.O)),gp(t.V,t.g,"readystatechange",t.gb),e=t.H?np(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),gr(1),vI(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&xt(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const u=xt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Ba||this.g&&(this.h.h||this.g.ga()||ph(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?gr(3):gr(2)),bo(this);var n=this.g.ba();this.N=n;t:if(bp(this)){var s=ph(this.g);t="";var r=s.length,i=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){_n(this),Zs(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,wI(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xi(a)){var l=a;break t}}l=null}if(n=l)es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ya(this,n);else{this.i=!1,this.o=3,Je(12),_n(this),Zs(this);break e}}this.U?(Sp(this,u,o),Ba&&this.i&&u==3&&(gp(this.V,this.W,"tick",this.fb),this.W.start())):(es(this.j,this.m,o,null),Ya(this,o)),u==4&&_n(this),this.i&&!this.I&&(u==4?zp(this.l,this):(this.i=!1,$r(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Je(12)):(this.o=0,Je(13)),_n(this),Zs(this)}}}catch{}finally{}};function bp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Sp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=TI(t,n),r==Fi){e==4&&(t.o=4,Je(14),s=!1),es(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Wa){t.o=4,Je(15),es(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else es(t.j,t.m,r,null),Ya(t,r);bp(t)&&r!=Fi&&r!=Wa&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Je(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hl(e),e.L=!0,Je(11))):(es(t.j,t.m,n,"[Invalid Chunked Response]"),_n(t),Zs(t))}O.fb=function(){if(this.g){var t=xt(this.g),e=this.g.ga();this.C<e.length&&(bo(this),Sp(this,t,e),this.i&&t!=4&&$r(this))}};function TI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Fi:(n=Number(e.substring(n,s)),isNaN(n)?Wa:(s+=1,s+n>e.length?Fi:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.I=!0,_n(this)};function $r(t){t.Y=Date.now()+t.P,Ap(t,t.P)}function Ap(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fr(Ue(t.eb,t),e)}function bo(t){t.B&&(q.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(EI(this.j,this.A),this.K!=2&&(gr(3),Je(17)),_n(this),this.o=2,Zs(this)):Ap(this,this.Y-t)};function Zs(t){t.l.G==0||t.I||zp(t.l,t)}function _n(t){bo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Jc(t.W),mp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ya(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Xa(n.i,t))){if(n.I=t.N,!t.J&&Xa(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ji(n),Ro(n);else break e;ul(n),Je(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Fr(Ue(n.ab,n),6e3));if(1>=Pp(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else In(n,11)}else if((t.J||n.g==t)&&ji(n),!xi(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;!i.g&&(Xe(y,"spdy")||Xe(y,"quic")||Xe(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(il(i,i.h),i.h=null))}if(s.D){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.sa=T,Ee(s.F,s.D,T))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Yp(s,s.H?s.la:null,s.W),o.J){Mp(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(bo(a),$r(a)),s.g=o}else qp(s);0<n.l.length&&ko(n)}else l[0]!="stop"&&l[0]!="close"||In(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?In(n,7):ll(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}gr(4)}catch{}}function bI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Va(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function sl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Va(t)||typeof t=="string")tp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Va(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=bI(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Rs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Rs)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}O=Rs.prototype;O.R=function(){rl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return rl(this),this.g.concat()};function rl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Mn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Mn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}O.get=function(t,e){return Mn(this.h,t)?this.h[t]:e};O.set=function(t,e){Mn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Cp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function SI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ln(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ln){this.g=e!==void 0?e:t.g,Vi(this,t.j),this.s=t.s,Bi(this,t.i),$i(this,t.m),this.l=t.l,e=t.h;var n=new mr;n.i=e.i,e.g&&(n.g=new Rs(e.g),n.h=e.h),hh(this,n),this.o=t.o}else t&&(n=String(t).match(Cp))?(this.g=!!e,Vi(this,n[1]||"",!0),this.s=er(n[2]||""),Bi(this,n[3]||"",!0),$i(this,n[4]),this.l=er(n[5]||"",!0),hh(this,n[6]||"",!0),this.o=er(n[7]||"")):(this.g=!!e,this.h=new mr(null,this.g))}Ln.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ks(e,fh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ks(e,fh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ks(n,n.charAt(0)=="/"?NI:kI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ks(n,OI)),t.join("")};function $t(t){return new Ln(t)}function Vi(t,e,n){t.j=n?er(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bi(t,e,n){t.i=n?er(e,!0):e}function $i(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hh(t,e,n){e instanceof mr?(t.h=e,PI(t.h,t.g)):(n||(e=Ks(e,DI)),t.h=new mr(e,t.g))}function Ee(t,e,n){t.h.set(e,n)}function So(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function AI(t){return t instanceof Ln?$t(t):new Ln(t,void 0)}function CI(t,e,n,s){var r=new Ln(null,void 0);return t&&Vi(r,t),e&&Bi(r,e),n&&$i(r,n),s&&(r.l=s),r}function er(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,RI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function RI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fh=/[#\/\?@]/g,kI=/[#\?:]/g,NI=/[#\?]/g,DI=/[#\?@]/g,OI=/#/g;function mr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hn(t){t.g||(t.g=new Rs,t.h=0,t.i&&SI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=mr.prototype;O.add=function(t,e){hn(this),this.i=null,t=ks(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rp(t,e){hn(t),e=ks(t,e),Mn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Mn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&rl(t)))}function kp(t,e){return hn(t),e=ks(t,e),Mn(t.g.h,e)}O.forEach=function(t,e){hn(this),this.g.forEach(function(n,s){tp(n,function(r){t.call(e,r,s,this)},this)},this)};O.T=function(){hn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};O.R=function(t){hn(this);var e=[];if(typeof t=="string")kp(this,t)&&(e=nh(e,this.g.get(ks(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=nh(e,t[n])}return e};O.set=function(t,e){return hn(this),this.i=null,t=ks(this,t),kp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Np(t,e,n){Rp(t,e),0<n.length&&(t.i=null,t.g.set(ks(t,e),Hc(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function ks(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function PI(t,e){e&&!t.j&&(hn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Rp(this,s),Np(this,r,n))},t)),t.j=e}var MI=class{constructor(t,e){this.h=t,this.g=e}};function Dp(t){this.l=t||LI,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ea&&q.g.Ea()&&q.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var LI=10;function Op(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Pp(t){return t.h?1:t.g?t.g.size:0}function Xa(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function il(t,e){t.g?t.g.add(e):t.h=e}function Mp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Dp.prototype.cancel=function(){if(this.i=Lp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Lp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Hc(t.i)}function ol(){}ol.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};ol.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function xI(){this.g=new ol}function UI(t,e,n){const s=n||"";try{sl(t,function(r,i){let o=r;xr(r)&&(o=Xc(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function FI(t,e){const n=new Eo;if(q.Image){const s=new Image;s.onload=ti(si,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ti(si,n,s,"TestLoadImage: error",!1,e),s.onabort=ti(si,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ti(si,n,s,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function si(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function jr(t){this.l=t.$b||null,this.j=t.ib||!1}$e(jr,el);jr.prototype.g=function(){return new Ao(this.l,this.j)};jr.prototype.i=function(t){return function(){return t}}({});function Ao(t,e){Pe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=al,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(Ao,Pe);var al=0;O=Ao.prototype;O.open=function(t,e){if(this.readyState!=al)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yr(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=al};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof q.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xp(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function xp(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hr(this):yr(this),this.readyState==3&&xp(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,Hr(this))};O.Ta=function(t){this.g&&(this.response=t,Hr(this))};O.ha=function(){this.g&&Hr(this)};function Hr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yr(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var VI=q.JSON.parse;function Ce(t){Pe.call(this),this.headers=new Rs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Up,this.K=this.L=!1}$e(Ce,Pe);var Up="",BI=/^https?$/i,$I=["POST","PUT"];O=Ce.prototype;O.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():za.g(),this.C=this.u?uh(this.u):uh(za),this.g.onreadystatechange=Ue(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){dh(this,i);return}t=n||"";const r=new Rs(this.headers);s&&sl(s,function(i,o){r.set(o,i)}),s=J0(r.T()),n=q.FormData&&t instanceof q.FormData,!(0<=ep($I,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bp(this),0<this.B&&((this.K=jI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ue(this.pa,this)):this.A=Zc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){dh(this,i)}};function jI(t){return ds&&sI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function HI(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof jc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fe(this,"timeout"),this.abort(8))};function dh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fp(t),Co(t)}function Fp(t){t.D||(t.D=!0,Fe(t,"complete"),Fe(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Fe(this,"complete"),Fe(this,"abort"),Co(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Co(this,!0)),Ce.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?Vp(this):this.cb())};O.cb=function(){Vp(this)};function Vp(t){if(t.h&&typeof jc!="undefined"&&(!t.C[1]||xt(t)!=4||t.ba()!=2)){if(t.v&&xt(t)==4)Zc(t.Fa,0,t);else if(Fe(t,"readystatechange"),xt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Cp)[1]||null;if(!r&&q.self&&q.self.location){var i=q.self.location.protocol;r=i.substr(0,i.length-1)}s=!BI.test(r?r.toLowerCase():"")}n=s}if(n)Fe(t,"complete"),Fe(t,"success");else{t.m=6;try{var o=2<xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Fp(t)}}finally{Co(t)}}}}function Co(t,e){if(t.g){Bp(t);const n=t.g,s=t.C[0]?Li:null;t.g=null,t.C=null,e||Fe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Bp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function xt(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),VI(e)}};function ph(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Up:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function qI(t){let e="";return qc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function cl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=qI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Vs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $p(t){this.za=0,this.l=[],this.h=new Eo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Vs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Vs("baseRetryDelayMs",5e3,t),this.$a=Vs("retryDelaySeedMs",1e4,t),this.Ya=Vs("forwardChannelMaxRetries",2,t),this.ra=Vs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Dp(t&&t.concurrentRequestLimit),this.Ca=new xI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=$p.prototype;O.ma=8;O.G=1;function ll(t){if(jp(t),t.G==3){var e=t.V++,n=$t(t.F);Ee(n,"SID",t.J),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),qr(t,n),e=new Br(t,t.h,e,void 0),e.K=2,e.v=So($t(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=Xp(e.l,null),e.g.ea(e.v)),e.F=Date.now(),$r(e)}Gp(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ro(t){t.g&&(hl(t),t.g.cancel(),t.g=null)}function jp(t){Ro(t),t.u&&(q.clearTimeout(t.u),t.u=null),ji(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function ua(t,e){t.l.push(new MI(t.Za++,e)),t.G==3&&ko(t)}function ko(t){Op(t.i)||t.m||(t.m=!0,Qc(t.Ha,t),t.C=0)}function KI(t,e){return Pp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Fr(Ue(t.Ha,t,e),Wp(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Br(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=np(i),sp(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Hp(this,r,e),n=$t(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),qr(this,n),this.o&&i&&cl(n,this.o,i),il(this.i,r),this.Ra&&Ee(n,"TYPE","init"),this.ja?(Ee(n,"$req",e),Ee(n,"SID","null"),r.$=!0,Ga(r,n,null)):Ga(r,n,e),this.G=2}}else this.G==3&&(t?gh(this,t):this.l.length==0||Op(this.i)||gh(this))};function gh(t,e){var n;e?n=e.m:n=t.V++;const s=$t(t.F);Ee(s,"SID",t.J),Ee(s,"RID",n),Ee(s,"AID",t.U),qr(t,s),t.o&&t.s&&cl(s,t.o,t.s),n=new Br(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Hp(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),il(t.i,n),Ga(n,s,e)}function qr(t,e){t.j&&sl({},function(n,s){Ee(e,s,n)})}function Hp(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Ue(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{UI(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function qp(t){t.g||t.u||(t.Y=1,Qc(t.Ga,t),t.A=0)}function ul(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Fr(Ue(t.Ga,t),Wp(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,Kp(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Fr(Ue(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Je(10),Ro(this),Kp(this))};function hl(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function Kp(t){t.g=new Br(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=$t(t.oa);Ee(e,"RID","rpc"),Ee(e,"SID",t.J),Ee(e,"CI",t.N?"0":"1"),Ee(e,"AID",t.U),qr(t,e),Ee(e,"TYPE","xmlhttp"),t.o&&t.s&&cl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=So($t(e)),n.s=null,n.U=!0,Tp(n,t)}O.ab=function(){this.v!=null&&(this.v=null,Ro(this),ul(this),Je(19))};function ji(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function zp(t,e){var n=null;if(t.g==e){ji(t),hl(t),t.g=null;var s=2}else if(Xa(t.i,e))n=e.D,Mp(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=_o(),Fe(s,new wp(s,n,e,r)),ko(t)}else qp(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&KI(t,e)||s==2&&ul(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:In(t,5);break;case 4:In(t,10);break;case 3:In(t,6);break;default:In(t,2)}}}function Wp(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function In(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Ue(t.jb,t);n||(n=new Ln("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||Vi(n,"https"),So(n)),FI(n.toString(),s)}else Je(2);t.G=0,t.j&&t.j.va(e),Gp(t),jp(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Je(2)):(this.h.info("Failed to ping google.com"),Je(1))};function Gp(t){t.G=0,t.I=-1,t.j&&((Lp(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Hc(t.l),t.l.length=0),t.j.ua())}function Yp(t,e,n){let s=AI(n);if(s.i!="")e&&Bi(s,e+"."+s.i),$i(s,s.m);else{const r=q.location;s=CI(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&qc(t.aa,function(r,i){Ee(s,i,r)}),e=t.D,n=t.sa,e&&n&&Ee(s,e,n),Ee(s,"VER",t.ma),qr(t,s),s}function Xp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ce(new jr({ib:!0})):new Ce(t.qa),e.L=t.H,e}function Qp(){}O=Qp.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function Hi(){if(ds&&!(10<=Number(rI)))throw Error("Environmental error: no available transport.")}Hi.prototype.g=function(t,e){return new ht(t,e)};function ht(t,e){Pe.call(this),this.g=new $p(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!xi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ns(this)}$e(ht,Pe);ht.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Qc(Ue(t.hb,t,e))),Je(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Yp(t,null,t.W),ko(t)};ht.prototype.close=function(){ll(this.g)};ht.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ua(this.g,e)}else this.v?(e={},e.__data__=Xc(t),ua(this.g,e)):ua(this.g,t)};ht.prototype.M=function(){this.g.j=null,delete this.j,ll(this.g),delete this.g,ht.Z.M.call(this)};function Jp(t){tl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(Jp,tl);function Zp(){nl.call(this),this.status=1}$e(Zp,nl);function Ns(t){this.g=t}$e(Ns,Qp);Ns.prototype.xa=function(){Fe(this.g,"a")};Ns.prototype.wa=function(t){Fe(this.g,new Jp(t))};Ns.prototype.va=function(t){Fe(this.g,new Zp(t))};Ns.prototype.ua=function(){Fe(this.g,"b")};Hi.prototype.createWebChannel=Hi.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;Io.NO_ERROR=0;Io.TIMEOUT=8;Io.HTTP_ERROR=6;Ep.COMPLETE="complete";_p.EventType=Vr;Vr.OPEN="a";Vr.CLOSE="b";Vr.ERROR="c";Vr.MESSAGE="d";Pe.prototype.listen=Pe.prototype.N;Ce.prototype.listenOnce=Ce.prototype.O;Ce.prototype.getLastError=Ce.prototype.La;Ce.prototype.getLastErrorCode=Ce.prototype.Da;Ce.prototype.getStatus=Ce.prototype.ba;Ce.prototype.getResponseJson=Ce.prototype.Qa;Ce.prototype.getResponseText=Ce.prototype.ga;Ce.prototype.send=Ce.prototype.ea;var zI=function(){return new Hi},WI=function(){return _o()},ha=Io,GI=Ep,YI=$n,mh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},XI=jr,ri=_p,QI=Ce;const yh="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let Ds="9.6.11";/**
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
 */const xn=new Nc("@firebase/firestore");function vh(){return xn.logLevel}function x(t,...e){if(xn.logLevel<=re.DEBUG){const n=e.map(fl);xn.debug(`Firestore (${Ds}): ${t}`,...n)}}function an(t,...e){if(xn.logLevel<=re.ERROR){const n=e.map(fl);xn.error(`Firestore (${Ds}): ${t}`,...n)}}function wh(t,...e){if(xn.logLevel<=re.WARN){const n=e.map(fl);xn.warn(`Firestore (${Ds}): ${t}`,...n)}}function fl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw an(e),new Error(e)}function me(t,e){t||W()}function G(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class JI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class eT{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(me(typeof s.accessToken=="string"),new JI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new et(e)}}class tT{constructor(e,n,s){this.type="FirstParty",this.user=et.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class nT{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new tT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rT{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.p=n.token,new sT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class dl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function iT(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */dl.A=-1;class eg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=iT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function oe(t,e){return t<e?-1:t>e?1:0}function ps(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ze(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new ze(0,0))}static max(){return new Z(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Eh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class vr{constructor(e,n,s){n===void 0?n=0:n>e.length&&W(),s===void 0?s=e.length-n:s>e.length-n&&W(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return vr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends vr{construct(e,n,s){return new Ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const oT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends vr{construct(e,n,s){return new tt(e,n,s)}static isValidIdentifier(e){return oT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new $(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new $(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new $(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class wr{constructor(e){this.fields=e,e.sort(tt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Be(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const aT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cn(t){if(me(!!t),typeof t=="string"){let e=0;const n=aT.exec(t);if(me(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gs(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
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
 */function ng(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sg(t){const e=t.mapValue.fields.__previous_value__;return ng(e)?sg(e):e}function Er(t){const e=cn(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
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
 */class cT{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ms{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ms("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ms&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Os(t){return t==null}function qi(t){return t===0&&1/t==-1/0}function lT(t){return typeof t=="number"&&Number.isInteger(t)&&!qi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Ie.fromString(e))}static fromName(e){return new B(Ie.fromString(e).popFirst(5))}static empty(){return new B(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Ie(e.slice()))}}function Un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ng(t)?4:uT(t)?9:10:W()}function Dt(t,e){if(t===e)return!0;const n=Un(t);if(n!==Un(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Er(t).isEqual(Er(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=cn(s.timestampValue),o=cn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return gs(s.bytesValue).isEqual(gs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ae(s.geoPointValue.latitude)===Ae(r.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ae(s.integerValue)===Ae(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ae(s.doubleValue),o=Ae(r.doubleValue);return i===o?qi(i)===qi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ps(t.arrayValue.values||[],e.arrayValue.values||[],Dt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Eh(i)!==Eh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Dt(i[a],o[a])))return!1;return!0}(t,e);default:return W()}}function _r(t,e){return(t.values||[]).find(n=>Dt(n,e))!==void 0}function ys(t,e){if(t===e)return 0;const n=Un(t),s=Un(e);if(n!==s)return oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ae(r.integerValue||r.doubleValue),a=Ae(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return _h(t.timestampValue,e.timestampValue);case 4:return _h(Er(t),Er(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=gs(r),a=gs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=oe(o[c],a[c]);if(l!==0)return l}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=oe(Ae(r.latitude),Ae(i.latitude));return o!==0?o:oe(Ae(r.longitude),Ae(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ys(o[c],a[c]);if(l)return l}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=oe(a[u],l[u]);if(h!==0)return h;const f=ys(o[a[u]],c[l[u]]);if(f!==0)return f}return oe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw W()}}function _h(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=cn(t),s=cn(e),r=oe(n.seconds,s.seconds);return r!==0?r:oe(n.nanos,s.nanos)}function as(t){return Qa(t)}function Qa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=cn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Qa(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Qa(s.fields[a])}`;return i+"}"}(t.mapValue):W();var e,n}function Ja(t){return!!t&&"integerValue"in t}function pl(t){return!!t&&"arrayValue"in t}function Ih(t){return!!t&&"nullValue"in t}function Th(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gi(t){return!!t&&"mapValue"in t}function tr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=tr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=tr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!gi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=tr(n)}setAll(e){let n=tt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=tr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());gi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];gi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){jn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ct(tr(this.value))}}function rg(t){const e=[];return jn(t.fields,(n,s)=>{const r=new tt([n]);if(gi(s)){const i=rg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new wr(e)}/**
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
 */class qe{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new qe(e,0,Z.min(),Z.min(),ct.empty(),0)}static newFoundDocument(e,n,s){return new qe(e,1,n,Z.min(),s,0)}static newNoDocument(e,n){return new qe(e,2,n,Z.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new qe(e,3,n,Z.min(),ct.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function hT(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Z.fromTimestamp(s===1e9?new ze(n+1,0):new ze(n,s));return new vs(r,B.empty(),e)}function fT(t){return new vs(t.readTime,t.key,-1)}class vs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new vs(Z.min(),B.empty(),-1)}static max(){return new vs(Z.max(),B.empty(),-1)}}function dT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */class pT{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function bh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new pT(t,e,n,s,r,i,o)}function gl(t){const e=G(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+as(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Os(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>as(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>as(s)).join(",")),e.P=n}return e.P}function gT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${as(s.value)}`;var s}).join(", ")}]`),Os(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>as(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>as(n)).join(",")),`Target(${e})`}function ml(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!TT(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Dt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ah(t.startAt,e.startAt)&&Ah(t.endAt,e.endAt)}function Za(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class st extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new mT(e,n,s):n==="array-contains"?new wT(e,s):n==="in"?new ET(e,s):n==="not-in"?new _T(e,s):n==="array-contains-any"?new IT(e,s):new st(e,n,s)}static V(e,n,s){return n==="in"?new yT(e,s):new vT(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(ys(n,this.value)):n!==null&&Un(this.value)===Un(n)&&this.v(ys(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class mT extends st{constructor(e,n,s){super(e,n,s),this.key=B.fromName(s.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.v(n)}}class yT extends st{constructor(e,n){super(e,"in",n),this.keys=ig("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vT extends st{constructor(e,n){super(e,"not-in",n),this.keys=ig("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ig(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>B.fromName(s.referenceValue))}class wT extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pl(n)&&_r(n.arrayValue,this.value)}}class ET extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_r(this.value.arrayValue,n)}}class _T extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(_r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_r(this.value.arrayValue,n)}}class IT extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>_r(this.value.arrayValue,s))}}class Ki{constructor(e,n){this.position=e,this.inclusive=n}}class nr{constructor(e,n="asc"){this.field=e,this.dir=n}}function TT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Sh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(o.referenceValue),n.key):s=ys(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ah(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class No{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function bT(t,e,n,s,r,i,o,a){return new No(t,e,n,s,r,i,o,a)}function yl(t){return new No(t)}function mi(t){return!Os(t.limit)&&t.limitType==="F"}function ec(t){return!Os(t.limit)&&t.limitType==="L"}function ST(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function AT(t){for(const e of t.filters)if(e.S())return e.field;return null}function CT(t){return t.collectionGroup!==null}function Ir(t){const e=G(t);if(e.D===null){e.D=[];const n=AT(e),s=ST(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new nr(n)),e.D.push(new nr(tt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new nr(tt.keyField(),i))}}}return e.D}function Fn(t){const e=G(t);if(!e.C)if(e.limitType==="F")e.C=bh(e.path,e.collectionGroup,Ir(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ir(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new nr(i.field,o))}const s=e.endAt?new Ki(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new Ki(e.startAt.position,!e.startAt.inclusive):null;e.C=bh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function RT(t,e,n){return new No(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Do(t,e){return ml(Fn(t),Fn(e))&&t.limitType===e.limitType}function og(t){return`${gl(Fn(t))}|lt:${t.limitType}`}function tc(t){return`Query(target=${gT(Fn(t))}; limitType=${t.limitType})`}function vl(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):B.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Sh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ir(n),s)||n.endAt&&!function(r,i,o){const a=Sh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ir(n),s))}(t,e)}function kT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ag(t){return(e,n)=>{let s=!1;for(const r of Ir(t)){const i=NT(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function NT(t,e,n){const s=t.field.isKeyField()?B.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ys(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return W()}}/**
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
 */function cg(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qi(e)?"-0":e}}function lg(t){return{integerValue:""+t}}function DT(t,e){return lT(e)?lg(e):cg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Oo{constructor(){this._=void 0}}function OT(t,e,n){return t instanceof zi?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Tr?hg(t,e):t instanceof br?fg(t,e):function(s,r){const i=ug(s,r),o=Ch(i)+Ch(s.k);return Ja(i)&&Ja(s.k)?lg(o):cg(s.M,o)}(t,e)}function PT(t,e,n){return t instanceof Tr?hg(t,e):t instanceof br?fg(t,e):n}function ug(t,e){return t instanceof Wi?Ja(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class zi extends Oo{}class Tr extends Oo{constructor(e){super(),this.elements=e}}function hg(t,e){const n=dg(e);for(const s of t.elements)n.some(r=>Dt(r,s))||n.push(s);return{arrayValue:{values:n}}}class br extends Oo{constructor(e){super(),this.elements=e}}function fg(t,e){let n=dg(e);for(const s of t.elements)n=n.filter(r=>!Dt(r,s));return{arrayValue:{values:n}}}class Wi extends Oo{constructor(e,n){super(),this.M=e,this.k=n}}function Ch(t){return Ae(t.integerValue||t.doubleValue)}function dg(t){return pl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function MT(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Tr&&s instanceof Tr||n instanceof br&&s instanceof br?ps(n.elements,s.elements,Dt):n instanceof Wi&&s instanceof Wi?Dt(n.k,s.k):n instanceof zi&&s instanceof zi}(t.transform,e.transform)}class LT{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Po{}function xT(t,e,n){t instanceof Mo?function(s,r,i){const o=s.value.clone(),a=Nh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ps?function(s,r,i){if(!yi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Nh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(pg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function nc(t,e,n){t instanceof Mo?function(s,r,i){if(!yi(s.precondition,r))return;const o=s.value.clone(),a=Dh(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(kh(r),o).setHasLocalMutations()}(t,e,n):t instanceof Ps?function(s,r,i){if(!yi(s.precondition,r))return;const o=Dh(s.fieldTransforms,i,r),a=r.data;a.setAll(pg(s)),a.setAll(o),r.convertToFoundDocument(kh(r),a).setHasLocalMutations()}(t,e,n):function(s,r){yi(s.precondition,r)&&r.convertToNoDocument(Z.min())}(t,e)}function UT(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=ug(s.transform,r||null);i!=null&&(n==null&&(n=ct.empty()),n.set(s.field,i))}return n||null}function Rh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ps(n,s,(r,i)=>MT(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function kh(t){return t.isFoundDocument()?t.version:Z.min()}class Mo extends Po{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class Ps extends Po{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function pg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Nh(t,e,n){const s=new Map;me(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,PT(o,a,n[r]))}return s}function Dh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,OT(i,o,e))}return s}class FT extends Po{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class VT extends Po{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class BT{constructor(e){this.count=e}}/**
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
 */var Se,te;function $T(t){switch(t){default:return W();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function gg(t){if(t===void 0)return an("GRPC error has no .code"),I.UNKNOWN;switch(t){case Se.OK:return I.OK;case Se.CANCELLED:return I.CANCELLED;case Se.UNKNOWN:return I.UNKNOWN;case Se.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Se.INTERNAL:return I.INTERNAL;case Se.UNAVAILABLE:return I.UNAVAILABLE;case Se.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Se.NOT_FOUND:return I.NOT_FOUND;case Se.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Se.ABORTED:return I.ABORTED;case Se.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Se.DATA_LOSS:return I.DATA_LOSS;default:return W()}}(te=Se||(Se={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){jn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return tg(this.inner)}size(){return this.innerSize}}/**
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
 */class Me{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ii(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ii(this.root,e,this.comparator,!1)}getReverseIterator(){return new ii(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ii(this.root,e,this.comparator,!0)}}class ii{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Le.RED,this.left=r!=null?r:Le.EMPTY,this.right=i!=null?i:Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Le(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Oh(this.data.getIterator())}getIteratorFrom(e){return new Oh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class Oh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const jT=new Me(B.comparator);function Vn(){return jT}const HT=new Me(B.comparator);function sc(){return HT}function fa(){return new Ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const qT=new Me(B.comparator),KT=new Ve(B.comparator);function ve(...t){let e=KT;for(const n of t)e=e.add(n);return e}const zT=new Ve(oe);function mg(){return zT}/**
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
 */class Lo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Kr.createSynthesizedTargetChangeForCurrentChange(e,n)),new Lo(Z.min(),s,mg(),Vn(),ve())}}class Kr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Kr(Be.EMPTY_BYTE_STRING,n,ve(),ve(),ve())}}/**
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
 */class vi{constructor(e,n,s,r){this.O=e,this.removedTargetIds=n,this.key=s,this.F=r}}class yg{constructor(e,n){this.targetId=e,this.$=n}}class vg{constructor(e,n,s=Be.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Ph{constructor(){this.B=0,this.L=Lh(),this.U=Be.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=ve(),n=ve(),s=ve();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:W()}}),new Kr(this.U,this.q,e,n,s)}J(){this.K=!1,this.L=Lh()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class WT{constructor(e){this.nt=e,this.st=new Map,this.it=Vn(),this.rt=Mh(),this.ot=new Ve(oe)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.$.count,r=this.wt(n);if(r){const i=r.target;if(Za(i))if(s===0){const o=new B(i.path);this.ct(n,o,qe.newNoDocument(o,Z.min()))}else me(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Za(a.target)){const c=new B(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,qe.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=ve();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new Lo(e,n,this.ot,this.it,s);return this.it=Vn(),this.rt=Mh(),this.ot=new Ve(oe),r}at(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Ph,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Ve(oe),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Ph),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Mh(){return new Me(B.comparator)}function Lh(){return new Me(B.comparator)}/**
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
 */const GT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),YT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class XT{constructor(e,n){this.databaseId=e,this.N=n}}function Gi(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wg(t,e){return t.N?e.toBase64():e.toUint8Array()}function QT(t,e){return Gi(t,e.toTimestamp())}function Ft(t){return me(!!t),Z.fromTimestamp(function(e){const n=cn(e);return new ze(n.seconds,n.nanos)}(t))}function wl(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Eg(t){const e=Ie.fromString(t);return me(Tg(e)),e}function rc(t,e){return wl(t.databaseId,e.path)}function da(t,e){const n=Eg(e);if(n.get(1)!==t.databaseId.projectId)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(_g(n))}function ic(t,e){return wl(t.databaseId,e)}function JT(t){const e=Eg(t);return e.length===4?Ie.emptyPath():_g(e)}function oc(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _g(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xh(t,e,n){return{name:rc(t,e),fields:n.value.mapValue.fields}}function ZT(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.N?(me(l===void 0||typeof l=="string"),Be.fromBase64String(l||"")):(me(l===void 0||l instanceof Uint8Array),Be.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:gg(c.code);return new $(l,c.message||"")}(o);n=new vg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=da(t,s.document.name),i=Ft(s.document.updateTime),o=new ct({mapValue:{fields:s.document.fields}}),a=qe.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new vi(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=da(t,s.document),i=s.readTime?Ft(s.readTime):Z.min(),o=qe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new vi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=da(t,s.document),i=s.removedTargetIds||[];n=new vi([],i,r,null)}else{if(!("filter"in e))return W();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new BT(r),o=s.targetId;n=new yg(o,i)}}return n}function eb(t,e){let n;if(e instanceof Mo)n={update:xh(t,e.key,e.value)};else if(e instanceof FT)n={delete:rc(t,e.key)};else if(e instanceof Ps)n={update:xh(t,e.key,e.data),updateMask:ub(e.fieldMask)};else{if(!(e instanceof VT))return W();n={verify:rc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof zi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Tr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof br)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Wi)return{fieldPath:i.field.canonicalString(),increment:o.k};throw W()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:QT(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(t,e.precondition)),n}function tb(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ft(s.updateTime):Ft(r);return i.isEqual(Z.min())&&(i=Ft(r)),new LT(i,s.transformResults||[])}(n,e))):[]}function nb(t,e){return{documents:[ic(t,e.path)]}}function sb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ic(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ic(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Th(h.value))return{unaryFilter:{field:Yn(h.field),op:"IS_NAN"}};if(Ih(h.value))return{unaryFilter:{field:Yn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Th(h.value))return{unaryFilter:{field:Yn(h.field),op:"IS_NOT_NAN"}};if(Ih(h.value))return{unaryFilter:{field:Yn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yn(h.field),op:ab(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Yn(u.field),direction:ob(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||Os(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function rb(t){let e=JT(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){me(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Ig(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new nr(ts(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Os(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Ki(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Ki(f,h)}(n.endAt)),bT(e,r,o,i,a,"F",c,l)}function ib(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return W()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ig(t){return t?t.unaryFilter!==void 0?[lb(t)]:t.fieldFilter!==void 0?[cb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Ig(e)).reduce((e,n)=>e.concat(n)):W():[]}function ob(t){return GT[t]}function ab(t){return YT[t]}function Yn(t){return{fieldPath:t.canonicalString()}}function ts(t){return tt.fromServerFormat(t.fieldPath)}function cb(t){return st.create(ts(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}function lb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ts(t.unaryFilter.field);return st.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ts(t.unaryFilter.field);return st.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ts(t.unaryFilter.field);return st.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ts(t.unaryFilter.field);return st.create(r,"!=",{nullValue:"NULL_VALUE"});default:return W()}}function ub(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Tg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const hb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,s)=>{n(e)})}static reject(e){return new C((n,s)=>{s(e)})}static waitFor(e){return new C((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=C.resolve(!1);for(const s of e)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function zr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class db{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&xT(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&nc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&nc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(Z.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(n,s)=>Rh(n,s))&&ps(this.baseMutations,e.baseMutations,(n,s)=>Rh(n,s))}}class El{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){me(e.mutations.length===s.length);let r=qT;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new El(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class pb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Rn{constructor(e,n,s,r,i=Z.min(),o=Z.min(),a=Be.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class gb{constructor(e){this.Jt=e}}function mb(t){const e=rb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?RT(e,e.limit,"L"):e}/**
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
 */class yb{constructor(){this.qe=new vb}addToCollectionParentIndex(e,n){return this.qe.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getFieldIndex(e,n){return C.resolve(null)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}updateCollectionGroup(e,n,s){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class vb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ve(Ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ve(Ie.comparator)).toArray()}}/**
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
 */class ws{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new ws(0)}static yn(){return new ws(-1)}}/**
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
 */async function Wr(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==hb)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class wb{constructor(){this.changes=new Ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Eb{constructor(e,n,s){this.ds=e,this.Bs=n,this.indexManager=s}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Us(e,n,s))}Us(e,n,s){return this.ds.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}qs(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Ks(e,n){return this.ds.getEntries(e,n).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.qs(n,s))}Qs(e,n,s){return function(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.js(e,n.path):CT(n)?this.Ws(e,n,s):this.zs(e,n,s)}js(e,n){return this.Ls(e,new B(n)).next(s=>{let r=sc();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ws(e,n,s){const r=n.collectionGroup;let i=sc();return this.indexManager.getCollectionParents(e,r).next(o=>C.forEach(o,a=>{const c=function(l,u){return new No(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.zs(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}zs(e,n,s){let r;return this.ds.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=r.get(c);l==null&&(l=qe.newInvalidDocument(c),r=r.insert(c,l)),nc(a,l,o.localWriteTime),l.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{vl(n,o)||(r=r.remove(i))}),r))}}/**
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
 */class _l{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Hs=s,this.Js=r}static Ys(e,n){let s=ve(),r=ve();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new _l(e,n.fromCache,s,r)}}/**
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
 */class _b{Xs(e){this.Zs=e}Qs(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(Z.min())?this.ti(e,n):this.Zs.Ks(e,r).next(i=>{const o=this.ei(n,i);return(mi(n)||ec(n))&&this.ni(n.limitType,o,r,s)?this.ti(e,n):(vh()<=re.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),tc(n)),this.Zs.Qs(e,n,hT(s,-1)).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}ei(e,n){let s=new Ve(ag(e));return n.forEach((r,i)=>{vl(e,i)&&(s=s.add(i))}),s}ni(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ti(e,n){return vh()<=re.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",tc(n)),this.Zs.Qs(e,n,vs.min())}}/**
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
 */class Ib{constructor(e,n,s,r){this.persistence=e,this.si=n,this.M=r,this.ii=new Me(oe),this.ri=new Ms(i=>gl(i),ml),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(s)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new Eb(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ii))}}function Tb(t,e,n,s){return new Ib(t,e,n,s)}async function bg(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.Bs.getAllMutationBatches(s).next(i=>(r=i,n.ai(e),n.Bs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ve();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.ci.Ks(s,c).next(l=>({hi:l,removedBatchIds:o,addedBatchIds:a}))})})}function bb(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=C.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(y=>{const T=c.docVersions.get(g);me(T!==null),y.version.compareTo(T)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),f.next(()=>o.Bs.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.Bs.performConsistencyCheck(s)).next(()=>n.ci.Ks(s,r))})}function Sg(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function Sb(t,e){const n=G(t),s=e.snapshotVersion;let r=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});r=n.ii;const a=[];e.targetChanges.forEach((l,u)=>{const h=r.get(u);if(!h)return;a.push(n.fs.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.fs.addMatchingKeys(i,l.addedDocuments,u)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(Be.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),r=r.insert(u,f),function(g,y,T){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(h,f,l)&&a.push(n.fs.updateTargetData(i,f))});let c=Vn();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Ab(i,o,e.documentUpdates).next(l=>{c=l})),!s.isEqual(Z.min())){const l=n.fs.getLastRemoteSnapshotVersion(i).next(u=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.ci.Gs(i,c)).next(()=>c)}).then(i=>(n.ii=r,i))}function Ab(t,e,n){let s=ve();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=Vn();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(Z.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):x("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function Cb(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(s,e)))}function Rb(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.fs.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):n.fs.allocateTargetId(s).next(o=>(r=new Rn(e,o,0,s.currentSequenceNumber),n.fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ii.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ii=n.ii.insert(s.targetId,s),n.ri.set(e,s.targetId)),s})}async function ac(t,e,n){const s=G(t),r=s.ii.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!zr(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ii=s.ii.remove(e),s.ri.delete(r.target)}function Uh(t,e,n){const s=G(t);let r=Z.min(),i=ve();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=G(a),h=u.ri.get(l);return h!==void 0?C.resolve(u.ii.get(h)):u.fs.getTargetData(c,l)}(s,o,Fn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.si.Qs(o,e,n?r:Z.min(),n?i:ve())).next(a=>(kb(s,kT(e),a),{documents:a,li:i})))}function kb(t,e,n){let s=Z.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.oi.set(e,s)}/**
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
 */class Nb{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,n){return C.resolve(this.wi.get(n))}saveBundleMetadata(e,n){var s;return this.wi.set(n.id,{id:(s=n).id,version:s.version,createTime:Ft(s.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.mi.get(n))}saveNamedQuery(e,n){return this.mi.set(n.name,function(s){return{name:s.name,query:mb(s.bundledQuery),readTime:Ft(s.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Db{constructor(){this.overlays=new Me(B.comparator),this.gi=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Xt(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.gi.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.gi.delete(s)),C.resolve()}getOverlaysForCollection(e,n,s){const r=fa(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return C.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=fa(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=fa(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return C.resolve(a)}Xt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.gi.get(r.largestBatchId).delete(s.key);this.gi.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new pb(n,s));let i=this.gi.get(n);i===void 0&&(i=ve(),this.gi.set(n,i)),this.gi.set(n,i.add(s.key))}}/**
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
 */class Il{constructor(){this.yi=new Ve(ke.pi),this.Ii=new Ve(ke.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,n){const s=new ke(e,n);this.yi=this.yi.add(s),this.Ii=this.Ii.add(s)}Ei(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Ai(new ke(e,n))}Ri(e,n){e.forEach(s=>this.removeReference(s,n))}Pi(e){const n=new B(new Ie([])),s=new ke(n,e),r=new ke(n,e+1),i=[];return this.Ii.forEachInRange([s,r],o=>{this.Ai(o),i.push(o.key)}),i}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const n=new B(new Ie([])),s=new ke(n,e),r=new ke(n,e+1);let i=ve();return this.Ii.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ke(e,0),s=this.yi.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ke{constructor(e,n){this.key=e,this.vi=n}static pi(e,n){return B.comparator(e.key,n.key)||oe(e.vi,n.vi)}static Ti(e,n){return oe(e.vi,n.vi)||B.comparator(e.key,n.key)}}/**
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
 */class Ob{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new Ve(ke.pi)}checkEmpty(e){return C.resolve(this.Bs.length===0)}addMutationBatch(e,n,s,r){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new db(i,n,s,r);this.Bs.push(o);for(const a of r)this.Di=this.Di.add(new ke(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.xi(s),i=r<0?0:r;return C.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(e){return C.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ke(n,0),r=new ke(n,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([s,r],o=>{const a=this.Ci(o.vi);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ve(oe);return n.forEach(r=>{const i=new ke(r,0),o=new ke(r,Number.POSITIVE_INFINITY);this.Di.forEachInRange([i,o],a=>{s=s.add(a.vi)})}),C.resolve(this.Ni(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const o=new ke(new B(i),0);let a=new Ve(oe);return this.Di.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.vi)),!0)},o),C.resolve(this.Ni(a))}Ni(e){const n=[];return e.forEach(s=>{const r=this.Ci(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){me(this.ki(n.batchId,"removed")===0),this.Bs.shift();let s=this.Di;return C.forEach(n.mutations,r=>{const i=new ke(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Di=s})}_n(e){}containsKey(e,n){const s=new ke(n,0),r=this.Di.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,C.resolve()}ki(e,n){return this.xi(e)}xi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}Ci(e){const n=this.xi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
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
 */class Pb{constructor(e){this.Mi=e,this.docs=new Me(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Mi(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return C.resolve(s?s.document.mutableCopy():qe.newInvalidDocument(n))}getEntries(e,n){let s=Vn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():qe.newInvalidDocument(r))}),C.resolve(s)}getAllFromCollection(e,n,s){let r=Vn();const i=new B(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||dT(fT(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return C.resolve(r)}getAllFromCollectionGroup(e,n,s,r){W()}Oi(e,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Mb(this)}getSize(e){return C.resolve(this.size)}}class Mb extends wb{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(s)}),C.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
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
 */class Lb{constructor(e){this.persistence=e,this.Fi=new Ms(n=>gl(n),ml),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Il,this.targetCount=0,this.Li=ws.gn()}forEachTarget(e,n){return this.Fi.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$i&&(this.$i=n),C.resolve()}Tn(e){this.Fi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Li=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Tn(n),C.resolve()}removeTargetData(e,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fi.get(n)||null;return C.resolve(s)}addMatchingKeys(e,n,s){return this.Bi.Ei(n,s),C.resolve()}removeMatchingKeys(e,n,s){this.Bi.Ri(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Bi.Pi(n),C.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Bi.Vi(n);return C.resolve(s)}containsKey(e,n){return C.resolve(this.Bi.containsKey(n))}}/**
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
 */class xb{constructor(e,n){this.Ui={},this.overlays={},this.es=new dl(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new Lb(this),this.indexManager=new yb,this.ds=function(s){return new Pb(s)}(s=>this.referenceDelegate.qi(s)),this.M=new gb(n),this._s=new Nb(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Db,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ui[e.toKey()];return s||(s=new Ob(n,this.referenceDelegate),this.Ui[e.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,s){x("MemoryPersistence","Starting transaction:",e);const r=new Ub(this.es.next());return this.referenceDelegate.Ki(),s(r).next(i=>this.referenceDelegate.Gi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Qi(e,n){return C.or(Object.values(this.Ui).map(s=>()=>s.containsKey(e,n)))}}class Ub extends fb{constructor(e){super(),this.currentSequenceNumber=e}}class Tl{constructor(e){this.persistence=e,this.ji=new Il,this.Wi=null}static zi(e){return new Tl(e)}get Hi(){if(this.Wi)return this.Wi;throw W()}addReference(e,n,s){return this.ji.addReference(s,n),this.Hi.delete(s.toString()),C.resolve()}removeReference(e,n,s){return this.ji.removeReference(s,n),this.Hi.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Hi.add(n.toString()),C.resolve()}removeTarget(e,n){this.ji.Pi(n.targetId).forEach(r=>this.Hi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Hi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ki(){this.Wi=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Hi,s=>{const r=B.fromPath(s);return this.Ji(e,r).next(i=>{i||n.removeEntry(r,Z.min())})}).next(()=>(this.Wi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ji(e,n).next(s=>{s?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(e){return 0}Ji(e,n){return C.or([()=>C.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Qi(e,n)])}}class Fh{constructor(){this.activeTargetIds=mg()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fb{constructor(){this.$r=new Fh,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,n,s){this.Br[e]=n}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new Fh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Vb{Lr(e){}shutdown(){}}/**
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
 */class Vh{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Bb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class $b{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
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
 */class jb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.io=n+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,n,s,r,i){const o=this.uo(e,n);x("RestConnection","Sending: ",o,s);const a={};return this.ao(a,r,i),this.co(e,o,a,s).then(c=>(x("RestConnection","Received: ",c),c),c=>{throw wh("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ho(e,n,s,r,i){return this.oo(e,n,s,r,i)}ao(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ds,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}uo(e,n){const s=Bb[e];return`${this.io}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,r){return new Promise((i,o)=>{const a=new QI;a.listenOnce(GI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ha.NO_ERROR:const l=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(l)),i(l);break;case ha.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new $(I.DEADLINE_EXCEEDED,"Request time out"));break;case ha.HTTP_ERROR:const u=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(y)>=0?y:I.UNKNOWN}(h.status);o(new $(f,h.message))}else o(new $(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $(I.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}lo(e,n,s){const r=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=zI(),o=WI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new XI({})),this.ao(a.initMessageHeaders,n,s),gd()||yd()||Hw()||vd()||qw()||md()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");x("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new $b({Wr:y=>{h?x("Connection","Not sending because WebChannel is closed:",y):(u||(x("Connection","Opening WebChannel transport."),l.open(),u=!0),x("Connection","WebChannel sending:",y),l.send(y))},zr:()=>l.close()}),g=(y,T,S)=>{y.listen(T,N=>{try{S(N)}catch(L){setTimeout(()=>{throw L},0)}})};return g(l,ri.EventType.OPEN,()=>{h||x("Connection","WebChannel transport opened.")}),g(l,ri.EventType.CLOSE,()=>{h||(h=!0,x("Connection","WebChannel transport closed"),f.no())}),g(l,ri.EventType.ERROR,y=>{h||(h=!0,wh("Connection","WebChannel transport errored:",y),f.no(new $(I.UNAVAILABLE,"The operation could not be completed")))}),g(l,ri.EventType.MESSAGE,y=>{var T;if(!h){const S=y.data[0];me(!!S);const N=S,L=N.error||((T=N[0])===null||T===void 0?void 0:T.error);if(L){x("Connection","WebChannel received error:",L);const z=L.status;let Y=function(_e){const J=Se[_e];if(J!==void 0)return gg(J)}(z),ae=L.message;Y===void 0&&(Y=I.INTERNAL,ae="Unknown error status: "+z+" with message "+L.message),h=!0,f.no(new $(Y,ae)),l.close()}else x("Connection","WebChannel received:",S),f.so(S)}}),g(o,YI.STAT_EVENT,y=>{y.stat===mh.PROXY?x("Connection","Detected buffering proxy"):y.stat===mh.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.eo()},0),f}}function pa(){return typeof document!="undefined"?document:null}/**
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
 */function xo(t){return new XT(t,!0)}class Ag{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=n,this.fo=s,this._o=r,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const n=Math.floor(this.mo+this.Eo()),s=Math.max(0,Date.now()-this.po),r=Math.max(0,n-s);r>0&&x("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
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
 */class Cg{constructor(e,n,s,r,i,o,a,c){this.Yn=e,this.Ro=s,this.Po=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Ag(e,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,e!==4?this.Do.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(an(n.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.qo(s,r)},s=>{e(()=>{const r=new $(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ko(r)})})}qo(e,n){const s=this.Uo(this.Vo);this.stream=this.Go(e,n),this.stream.Hr(()=>{s(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(r=>{s(()=>this.Ko(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hb extends Cg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Go(e,n){return this.bo.lo("Listen",e,n)}onMessage(e){this.Do.reset();const n=ZT(this.M,e),s=function(r){if(!("targetChange"in r))return Z.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?Ft(i.readTime):Z.min()}(e);return this.listener.Qo(n,s)}jo(e){const n={};n.database=oc(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=Za(a)?{documents:nb(r,a)}:{query:sb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=wg(r,i.resumeToken):i.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=Gi(r,i.snapshotVersion.toTimestamp())),o}(this.M,e);const s=ib(this.M,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=oc(this.M),n.removeTarget=e,this.Fo(n)}}class qb extends Cg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,n){return this.bo.lo("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const n=tb(e.writeResults,e.commitTime),s=Ft(e.commitTime);return this.listener.Yo(s,n)}return me(!e.writeResults||e.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=oc(this.M),this.Fo(e)}Jo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>eb(this.M,s))};this.Fo(n)}}/**
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
 */class Kb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.M=r,this.tu=!1}eu(){if(this.tu)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,n,s){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.oo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(I.UNKNOWN,r.toString())})}ho(e,n,s){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ho(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(I.UNKNOWN,r.toString())})}terminate(){this.tu=!0}}class zb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,e==="Online"&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(an(n),this.iu=!1):x("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
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
 */class Wb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr(o=>{s.enqueueAndForget(async()=>{Hn(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c.fu.add(4),await Gr(c),c.wu.set("Unknown"),c.fu.delete(4),await Uo(c)}(this))})}),this.wu=new zb(s,r)}}async function Uo(t){if(Hn(t))for(const e of t.du)await e(!0)}async function Gr(t){for(const e of t.du)await e(!1)}function Rg(t,e){const n=G(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),Al(n)?Sl(n):Ls(n).xo()&&bl(n,e))}function kg(t,e){const n=G(t),s=Ls(n);n.lu.delete(e),s.xo()&&Ng(n,e),n.lu.size===0&&(s.xo()?s.Mo():Hn(n)&&n.wu.set("Unknown"))}function bl(t,e){t.mu.Z(e.targetId),Ls(t).jo(e)}function Ng(t,e){t.mu.Z(e),Ls(t).Wo(e)}function Sl(t){t.mu=new WT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),Ls(t).start(),t.wu.ru()}function Al(t){return Hn(t)&&!Ls(t).Co()&&t.lu.size>0}function Hn(t){return G(t).fu.size===0}function Dg(t){t.mu=void 0}async function Gb(t){t.lu.forEach((e,n)=>{bl(t,e)})}async function Yb(t,e){Dg(t),Al(t)?(t.wu.au(e),Sl(t)):t.wu.set("Unknown")}async function Xb(t,e,n){if(t.wu.set("Online"),e instanceof vg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.lu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.lu.delete(o),s.mu.removeTarget(o))}(t,e)}catch(s){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Yi(t,s)}else if(e instanceof vi?t.mu.ut(e):e instanceof yg?t.mu._t(e):t.mu.ht(e),!n.isEqual(Z.min()))try{const s=await Sg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.mu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.lu.get(c);l&&r.lu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.lu.get(a);if(!c)return;r.lu.set(a,c.withResumeToken(Be.EMPTY_BYTE_STRING,c.snapshotVersion)),Ng(r,a);const l=new Rn(c.target,a,1,c.sequenceNumber);bl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){x("RemoteStore","Failed to raise snapshot:",s),await Yi(t,s)}}async function Yi(t,e,n){if(!zr(e))throw e;t.fu.add(1),await Gr(t),t.wu.set("Offline"),n||(n=()=>Sg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await Uo(t)})}function Og(t,e){return e().catch(n=>Yi(t,n,e))}async function Fo(t){const e=G(t),n=ln(e);let s=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;Qb(e);)try{const r=await Cb(e.localStore,s);if(r===null){e.hu.length===0&&n.Mo();break}s=r.batchId,Jb(e,r)}catch(r){await Yi(e,r)}Pg(e)&&Mg(e)}function Qb(t){return Hn(t)&&t.hu.length<10}function Jb(t,e){t.hu.push(e);const n=ln(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function Pg(t){return Hn(t)&&!ln(t).Co()&&t.hu.length>0}function Mg(t){ln(t).start()}async function Zb(t){ln(t).Zo()}async function eS(t){const e=ln(t);for(const n of t.hu)e.Jo(n.mutations)}async function tS(t,e,n){const s=t.hu.shift(),r=El.from(s,e,n);await Og(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Fo(t)}async function nS(t,e){e&&ln(t).Ho&&await async function(n,s){if(r=s.code,$T(r)&&r!==I.ABORTED){const i=n.hu.shift();ln(n).ko(),await Og(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Fo(n)}var r}(t,e),Pg(t)&&Mg(t)}async function Bh(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const s=Hn(n);n.fu.add(3),await Gr(n),s&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await Uo(n)}async function sS(t,e){const n=G(t);e?(n.fu.delete(2),await Uo(n)):e||(n.fu.add(2),await Gr(n),n.wu.set("Unknown"))}function Ls(t){return t.gu||(t.gu=function(e,n,s){const r=G(e);return r.eu(),new Hb(n,r.bo,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Hr:Gb.bind(null,t),Yr:Yb.bind(null,t),Qo:Xb.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),Al(t)?Sl(t):t.wu.set("Unknown")):(await t.gu.stop(),Dg(t))})),t.gu}function ln(t){return t.yu||(t.yu=function(e,n,s){const r=G(e);return r.eu(),new qb(n,r.bo,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Hr:Zb.bind(null,t),Yr:nS.bind(null,t),Xo:eS.bind(null,t),Yo:tS.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await Fo(t)):(await t.yu.stop(),t.hu.length>0&&(x("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu}/**
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
 */class Cl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Cl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rl(t,e){if(an("AsyncQueue",`${e}: ${t}`),zr(t))return new $(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class cs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||B.comparator(n.key,s.key):(n,s)=>B.comparator(n.key,s.key),this.keyedMap=sc(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new cs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class $h{constructor(){this.pu=new Me(B.comparator)}track(e){const n=e.doc.key,s=this.pu.get(n);s?e.type!==0&&s.type===3?this.pu=this.pu.insert(n,e):e.type===3&&s.type!==1?this.pu=this.pu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pu=this.pu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pu=this.pu.remove(n):e.type===1&&s.type===2?this.pu=this.pu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):W():this.pu=this.pu.insert(n,e)}Iu(){const e=[];return this.pu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Es{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Es(e,n,cs.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Do(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class rS{constructor(){this.Tu=void 0,this.listeners=[]}}class iS{constructor(){this.queries=new Ms(e=>og(e),Do),this.onlineState="Unknown",this.Eu=new Set}}async function oS(t,e){const n=G(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new rS),r)try{i.Tu=await n.onListen(s)}catch(o){const a=Rl(o,`Initialization of query '${tc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Au(n.onlineState),i.Tu&&e.Ru(i.Tu)&&kl(n)}async function aS(t,e){const n=G(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function cS(t,e){const n=G(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Ru(r)&&(s=!0);o.Tu=r}}s&&kl(n)}function lS(t,e,n){const s=G(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function kl(t){t.Eu.forEach(e=>{e.next()})}class uS{constructor(e,n,s){this.query=e,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}Ru(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Es(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),n=!0):this.Su(e,this.onlineState)&&(this.Du(e),n=!0),this.Vu=e,n}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),n=!0),n}Su(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Cu||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}/**
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
 */class Lg{constructor(e){this.key=e}}class xg{constructor(e){this.key=e}}class hS{constructor(e,n){this.query=e,this.$u=n,this.Bu=null,this.current=!1,this.Lu=ve(),this.mutatedKeys=ve(),this.Uu=ag(e),this.qu=new cs(this.Uu)}get Ku(){return this.$u}Gu(e,n){const s=n?n.Qu:new $h,r=n?n.qu:this.qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=mi(this.query)&&r.size===this.query.limit?r.last():null,l=ec(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),g=vl(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;f&&g?f.data.isEqual(g.data)?y!==T&&(s.track({type:3,doc:g}),S=!0):this.ju(f,g)||(s.track({type:2,doc:g}),S=!0,(c&&this.Uu(g,c)>0||l&&this.Uu(g,l)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),S=!0):f&&!g&&(s.track({type:1,doc:f}),S=!0,(c||l)&&(a=!0)),S&&(g?(o=o.add(g),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),mi(this.query)||ec(this.query))for(;o.size>this.query.limit;){const u=mi(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{qu:o,Qu:s,ni:a,mutatedKeys:i}}ju(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const i=e.Qu.Iu();i.sort((l,u)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return g(h)-g(f)}(l.type,u.type)||this.Uu(l.doc,u.doc)),this.Wu(s);const o=n?this.zu():[],a=this.Lu.size===0&&this.current?1:0,c=a!==this.Bu;return this.Bu=a,i.length!==0||c?{snapshot:new Es(this.query,e.qu,r,i,e.mutatedKeys,a===0,c,!1),Hu:o}:{Hu:o}}Au(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new $h,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=ve(),this.qu.forEach(s=>{this.Ju(s.key)&&(this.Lu=this.Lu.add(s.key))});const n=[];return e.forEach(s=>{this.Lu.has(s)||n.push(new xg(s))}),this.Lu.forEach(s=>{e.has(s)||n.push(new Lg(s))}),n}Yu(e){this.$u=e.li,this.Lu=ve();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Xu(){return Es.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class fS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class dS{constructor(e){this.key=e,this.Zu=!1}}class pS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new Ms(a=>og(a),Do),this.na=new Map,this.sa=new Set,this.ia=new Me(B.comparator),this.ra=new Map,this.oa=new Il,this.ua={},this.aa=new Map,this.ca=ws.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function gS(t,e){const n=SS(t);let s,r;const i=n.ea.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Xu();else{const o=await Rb(n.localStore,Fn(e));n.isPrimaryClient&&Rg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await mS(n,e,s,a==="current")}return r}async function mS(t,e,n,s){t.la=(u,h,f)=>async function(g,y,T,S){let N=y.view.Gu(T);N.ni&&(N=await Uh(g.localStore,y.query,!1).then(({documents:Y})=>y.view.Gu(Y,N)));const L=S&&S.targetChanges.get(y.targetId),z=y.view.applyChanges(N,g.isPrimaryClient,L);return Hh(g,y.targetId,z.Hu),z.snapshot}(t,u,h,f);const r=await Uh(t.localStore,e,!0),i=new hS(e,r.li),o=i.Gu(r.documents),a=Kr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Hh(t,n,c.Hu);const l=new fS(e,n,i);return t.ea.set(e,l),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),c.snapshot}async function yS(t,e){const n=G(t),s=n.ea.get(e),r=n.na.get(s.targetId);if(r.length>1)return n.na.set(s.targetId,r.filter(i=>!Do(i,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ac(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),kg(n.remoteStore,s.targetId),cc(n,s.targetId)}).catch(Wr)):(cc(n,s.targetId),await ac(n.localStore,s.targetId,!0))}async function vS(t,e,n){const s=AS(t);try{const r=await function(i,o){const a=G(i),c=ze.now(),l=o.reduce((h,f)=>h.add(f.key),ve());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ci.Ks(h,l).next(f=>{u=f;const g=[];for(const y of o){const T=UT(y,u.get(y.key));T!=null&&g.push(new Ps(y.key,T,rg(T.value.mapValue),Cn.exists(!0)))}return a.Bs.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ua[i.currentUser.toKey()];c||(c=new Me(oe)),c=c.insert(o,a),i.ua[i.currentUser.toKey()]=c}(s,r.batchId,n),await Yr(s,r.changes),await Fo(s.remoteStore)}catch(r){const i=Rl(r,"Failed to persist write");n.reject(i)}}async function Ug(t,e){const n=G(t);try{const s=await Sb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ra.get(i);o&&(me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Zu=!0:r.modifiedDocuments.size>0?me(o.Zu):r.removedDocuments.size>0&&(me(o.Zu),o.Zu=!1))}),await Yr(n,s,e)}catch(s){await Wr(s)}}function jh(t,e,n){const s=G(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ea.forEach((i,o)=>{const a=o.view.Au(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=G(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Au(o)&&(c=!0)}),c&&kl(a)}(s.eventManager,e),r.length&&s.ta.Qo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function wS(t,e,n){const s=G(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ra.get(e),i=r&&r.key;if(i){let o=new Me(B.comparator);o=o.insert(i,qe.newNoDocument(i,Z.min()));const a=ve().add(i),c=new Lo(Z.min(),new Map,new Ve(oe),o,a);await Ug(s,c),s.ia=s.ia.remove(i),s.ra.delete(e),Nl(s)}else await ac(s.localStore,e,!1).then(()=>cc(s,e,n)).catch(Wr)}async function ES(t,e){const n=G(t),s=e.batch.batchId;try{const r=await bb(n.localStore,e);Vg(n,s,null),Fg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Yr(n,r)}catch(r){await Wr(r)}}async function _S(t,e,n){const s=G(t);try{const r=await function(i,o){const a=G(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.Bs.lookupMutationBatch(c,o).next(u=>(me(u!==null),l=u.keys(),a.Bs.removeMutationBatch(c,u))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.ci.Ks(c,l))})}(s.localStore,e);Vg(s,e,n),Fg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Yr(s,r)}catch(r){await Wr(r)}}function Fg(t,e){(t.aa.get(e)||[]).forEach(n=>{n.resolve()}),t.aa.delete(e)}function Vg(t,e,n){const s=G(t);let r=s.ua[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ua[s.currentUser.toKey()]=r}}function cc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.na.get(e))t.ea.delete(s),n&&t.ta.fa(s,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(s=>{t.oa.containsKey(s)||Bg(t,s)})}function Bg(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);n!==null&&(kg(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),Nl(t))}function Hh(t,e,n){for(const s of n)s instanceof Lg?(t.oa.addReference(s.key,e),IS(t,s)):s instanceof xg?(x("SyncEngine","Document no longer in limbo: "+s.key),t.oa.removeReference(s.key,e),t.oa.containsKey(s.key)||Bg(t,s.key)):W()}function IS(t,e){const n=e.key,s=n.path.canonicalString();t.ia.get(n)||t.sa.has(s)||(x("SyncEngine","New document in limbo: "+n),t.sa.add(s),Nl(t))}function Nl(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new B(Ie.fromString(e)),s=t.ca.next();t.ra.set(s,new dS(n)),t.ia=t.ia.insert(n,s),Rg(t.remoteStore,new Rn(Fn(yl(n.path)),s,2,dl.A))}}async function Yr(t,e,n){const s=G(t),r=[],i=[],o=[];s.ea.isEmpty()||(s.ea.forEach((a,c)=>{o.push(s.la(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=_l.Ys(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.ta.Qo(r),await async function(a,c){const l=G(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>C.forEach(c,h=>C.forEach(h.Hs,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>C.forEach(h.Js,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!zr(u))throw u;x("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.ii.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);l.ii=l.ii.insert(h,y)}}}(s.localStore,i))}async function TS(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const s=await bg(n.localStore,e);n.currentUser=e,function(r,i){r.aa.forEach(o=>{o.forEach(a=>{a.reject(new $(I.CANCELLED,i))})}),r.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Yr(n,s.hi)}}function bS(t,e){const n=G(t),s=n.ra.get(e);if(s&&s.Zu)return ve().add(s.key);{let r=ve();const i=n.na.get(e);if(!i)return r;for(const o of i){const a=n.ea.get(o);r=r.unionWith(a.view.Ku)}return r}}function SS(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ug.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wS.bind(null,e),e.ta.Qo=cS.bind(null,e.eventManager),e.ta.fa=lS.bind(null,e.eventManager),e}function AS(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ES.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_S.bind(null,e),e}class CS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=xo(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return Tb(this.persistence,new _b,e.initialUser,this.M)}wa(e){return new xb(Tl.zi,this.M)}_a(e){return new Fb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>jh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=TS.bind(null,this.syncEngine),await sS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new iS}createDatastore(e){const n=xo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new jb(r));var r;return function(i,o,a,c){return new Kb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>jh(this.syncEngine,a,0),o=Vh.vt()?new Vh:new Vb,new Wb(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new pS(s,r,i,o,a,c);return l&&(u.ha=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);x("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await Gr(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class kS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class NS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=et.UNAUTHENTICATED,this.clientId=eg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{x("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(x("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Rl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function DS(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await bg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function OS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PS(t);x("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Bh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Bh(e.remoteStore,i)),t.onlineComponents=e}async function PS(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await DS(t,new CS)),t.offlineComponents}async function $g(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await OS(t,new RS)),t.onlineComponents}function MS(t){return $g(t).then(e=>e.syncEngine)}async function LS(t){const e=await $g(t),n=e.eventManager;return n.onListen=gS.bind(null,e.syncEngine),n.onUnlisten=yS.bind(null,e.syncEngine),n}function xS(t,e,n={}){const s=new rn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new kS({next:h=>{i.enqueueAndForget(()=>aS(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new $(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new $(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new uS(yl(o.path),l,{includeMetadataChanges:!0,Cu:!0});return oS(r,u)}(await LS(t),t.asyncQueue,e,n,s)),s.promise}const qh=new Map;/**
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
 */function US(t,e,n){if(!n)throw new $(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function FS(t,e,n,s){if(e===!0&&s===!0)throw new $(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kh(t){if(!B.isDocumentKey(t))throw new $(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function _s(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dl(t);throw new $(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class zh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,FS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class jg{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zh({}),this._settingsFrozen=!1,e instanceof ms?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new $(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ms(r.options.projectId)}(e))}get app(){if(!this._app)throw new $(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ZI;switch(n.type){case"gapi":const s=n.client;return me(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new nT(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new $(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=qh.get(e);n&&(x("ComponentProvider","Removing Datastore"),qh.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class lt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class Ol{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ol(this.firestore,e,this._query)}}class Sr extends Ol{constructor(e,n,s){super(e,n,yl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new B(e))}withConverter(e){return new Sr(this.firestore,e,this._path)}}function yA(t,e,...n){if(t=rt(t),arguments.length===1&&(e=eg.R()),US("doc","path",e),t instanceof jg){const s=Ie.fromString(e,...n);return Kh(s),new lt(t,null,new B(s))}{if(!(t instanceof lt||t instanceof Sr))throw new $(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Kh(s),new lt(t.firestore,t instanceof Sr?t.converter:null,new B(s))}}/**
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
 */class VS{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Ag(this,"async_queue_retry"),this.qa=()=>{const n=pa();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const e=pa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const n=pa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new rn;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!zr(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const n=this.ka.then(()=>(this.Ba=!0,e().catch(s=>{this.$a=s,this.Ba=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw an("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ba=!1,s))));return this.ka=n,n}enqueueAfterDelay(e,n,s){this.Ka(),this.Ua.indexOf(e)>-1&&(n=0);const r=Cl.createAndSchedule(this,e,n,s,i=>this.ja(i));return this.Fa.push(r),r}Ka(){this.$a&&W()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(e){for(const n of this.Fa)if(n.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const n=this.Fa.indexOf(e);this.Fa.splice(n,1)}}class Vo extends jg{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new VS,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||qg(this),this._firestoreClient.terminate()}}function BS(t=Id()){return Oc(t,"firestore").getImmediate()}function Hg(t){return t._firestoreClient||qg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function qg(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new cT(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new NS(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 *//**
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
 */class Bo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Is(Be.fromBase64String(e))}catch(n){throw new $(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Is(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Pl{constructor(e){this._methodName=e}}/**
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
 */class Ml{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const $S=/^__.*__$/;class jS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mo(e,this.data,n,this.fieldTransforms)}}class Kg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Ll{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new Ll(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Za({path:s,ec:!1});return r.nc(e),r}sc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Za({path:s,ec:!1});return r.Ya(),r}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return Xi(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(e.length===0)throw this.rc("Document fields must not be empty");if(zg(this.Xa)&&$S.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class HS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||xo(e)}ac(e,n,s,r=!1){return new Ll({Xa:e,methodName:n,uc:s,path:tt.emptyPath(),ec:!1,oc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Wg(t){const e=t._freezeSettings(),n=xo(t._databaseId);return new HS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qS(t,e,n,s,r,i={}){const o=t.ac(i.merge||i.mergeFields?2:0,e,n,r);xl("Data must be an object, but it was:",o,s);const a=Gg(s,o);let c,l;if(i.merge)c=new wr(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=lc(e,h,n);if(!o.contains(f))throw new $(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Xg(u,f)||u.push(f)}c=new wr(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new jS(new ct(a),c,l)}class $o extends Pl{_toFieldTransform(e){if(e.Xa!==2)throw e.Xa===1?e.rc(`${this._methodName}() can only appear at the top level of your update data`):e.rc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $o}}function KS(t,e,n,s){const r=t.ac(1,e,n);xl("Data must be an object, but it was:",r,s);const i=[],o=ct.empty();jn(s,(c,l)=>{const u=Ul(e,c,n);l=rt(l);const h=r.sc(u);if(l instanceof $o)i.push(u);else{const f=jo(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new wr(i);return new Kg(o,a,r.fieldTransforms)}function zS(t,e,n,s,r,i){const o=t.ac(1,e,n),a=[lc(e,s,n)],c=[r];if(i.length%2!=0)throw new $(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(lc(e,i[f])),c.push(i[f+1]);const l=[],u=ct.empty();for(let f=a.length-1;f>=0;--f)if(!Xg(l,a[f])){const g=a[f];let y=c[f];y=rt(y);const T=o.sc(g);if(y instanceof $o)l.push(g);else{const S=jo(y,T);S!=null&&(l.push(g),u.set(g,S))}}const h=new wr(l);return new Kg(u,h,o.fieldTransforms)}function jo(t,e){if(Yg(t=rt(t)))return xl("Unsupported field value:",e,t),Gg(t,e);if(t instanceof Pl)return function(n,s){if(!zg(s.Xa))throw s.rc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.rc(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&e.Xa!==4)throw e.rc("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=jo(o,s.ic(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return DT(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ze.fromDate(n);return{timestampValue:Gi(s.M,r)}}if(n instanceof ze){const r=new ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Gi(s.M,r)}}if(n instanceof Ml)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Is)return{bytesValue:wg(s.M,n._byteString)};if(n instanceof lt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.rc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:wl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.rc(`Unsupported field value: ${Dl(n)}`)}(t,e)}function Gg(t,e){const n={};return tg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jn(t,(s,r)=>{const i=jo(r,e.tc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Yg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Ml||t instanceof Is||t instanceof lt||t instanceof Pl)}function xl(t,e,n){if(!Yg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Dl(n);throw s==="an object"?e.rc(t+" a custom object"):e.rc(t+" "+s)}}function lc(t,e,n){if((e=rt(e))instanceof Bo)return e._internalPath;if(typeof e=="string")return Ul(t,e);throw Xi("Field path arguments must be of type string or ",t,!1,void 0,n)}const WS=new RegExp("[~\\*/\\[\\]]");function Ul(t,e,n){if(e.search(WS)>=0)throw Xi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bo(...e.split("."))._internalPath}catch{throw Xi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xi(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new $(I.INVALID_ARGUMENT,a+t+c)}function Xg(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Qg{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GS extends Qg{data(){return super.data()}}function Jg(t,e){return typeof e=="string"?Ul(t,e):e instanceof Bo?e._internalPath:e._delegate._internalPath}/**
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
 */class YS{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zg extends Qg{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new XS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Jg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class XS extends Zg{data(e={}){return super.data(e)}}/**
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
 */class QS{convertValue(e,n="none"){switch(Un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){const s={};return jn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ml(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=sg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Er(e));default:return null}}convertTimestamp(e){const n=cn(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ie.fromString(e);me(Tg(s));const r=new ms(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(n)||an(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function JS(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 *//**
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
 */function vA(t){t=_s(t,lt);const e=_s(t.firestore,Vo);return xS(Hg(e),t._key).then(n=>eA(e,t,n))}class ZS extends QS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function wA(t,e,n){t=_s(t,lt);const s=_s(t.firestore,Vo),r=JS(t.converter,e,n);return em(s,[qS(Wg(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Cn.none())])}function EA(t,e,n,...s){t=_s(t,lt);const r=_s(t.firestore,Vo),i=Wg(r);let o;return o=typeof(e=rt(e))=="string"||e instanceof Bo?zS(i,"updateDoc",t._key,e,n,s):KS(i,"updateDoc",t._key,e),em(r,[o.toMutation(t._key,Cn.exists(!0))])}function em(t,e){return function(n,s){const r=new rn;return n.asyncQueue.enqueueAndForget(async()=>vS(await MS(n),s,r)),r.promise}(Hg(t),e)}function eA(t,e,n){const s=n.docs.get(e._key),r=new ZS(t);return new Zg(t,r,e._key,s,new YS(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ds=n})(kr),fs(new Nn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Vo(r,new eT(n.getProvider("auth-internal")),new rT(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),sn(yh,"3.4.8",t),sn(yh,"3.4.8","esm2017")})();const pn={VITE_APIKEY:"AIzaSyCOA3mQ0XVeWKOGZ47fqzl4yNt1KN86KQU",VITE_AUTHDOMAIN:"star-tracker-182e4.firebaseapp.com",VITE_PROJECTID:"star-tracker-182e4",VITE_STORAGEBUCKET:"star-tracker-182e4.appspot.com",VITE_MESSAGINGSENDERID:"354007771156",VITE_APPID:"1:354007771156:web:55a1e24d980637576bdf01",VITE_MEASUREMENTID:"G-G0SV2RCKSM",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},tA={apiKey:pn.VITE_APIKEY,authDomain:pn.VITE_AUTHDOMAIN,projectId:pn.VITE_PROJECTID,storageBucket:pn.VITE_STORAGEBUCKET,messagingSenderId:pn.VITE_MESSAGINGSENDERID,appId:pn.VITE_APPID,measurementId:pn.VITE_MEASUREMENTID},nA=BE(tA),_A=BS(nA);Nv(Ov).use(Zd).mount("#app");export{cA as A,zs as B,oA as C,Of as D,D_ as E,St as F,fA as G,yA as T,Yf as a,nt as b,iA as c,Ky as d,qm as e,rA as f,aA as g,hA as h,pA as i,$0 as j,vA as k,_A as l,EA as m,fc as n,Kf as o,wA as p,mA as q,Vy as r,gA as s,sA as t,dA as u,lA as v,ny as w,Zd as x,uA as y,xe as z};
