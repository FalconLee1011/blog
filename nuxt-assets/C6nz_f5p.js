const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BULIggwE.js","./Xon7ivAG.js","./DlAUqK2U.js","./404.BH_YH73u.css","./BDgl6561.js","./qFw7MBrY.js","./about.DjAiRAjB.css","./pMfZxIeP.js","./index.CrT743Sw.css","./B9Jrd39W.js","./DRo2fHHm.js","./D8fXTTjx.js","./ProjectCard.D3lx5y9c.css","./index.P8Q5GhVO.css","./wTpFISMN.js","./ProjectDetail.WQ-CJI5d.css","./DIvOPK39.js","./default.poKyivK1.css","./B4NX_32c.js","./qXAomcMk.js","./error-404.DlVPZ4GE.css","./BE2b-z4r.js","./error-500.DjyirMQI.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Qe={},Nr=[],Fn=()=>{},sd=()=>!1,Hs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xc=t=>t.startsWith("onUpdate:"),Mt=Object.assign,$c=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ug=Object.prototype.hasOwnProperty,nt=(t,e)=>ug.call(t,e),He=Array.isArray,Fr=t=>ks(t)==="[object Map]",od=t=>ks(t)==="[object Set]",fg=t=>ks(t)==="[object RegExp]",ke=t=>typeof t=="function",dt=t=>typeof t=="string",ci=t=>typeof t=="symbol",ut=t=>t!==null&&typeof t=="object",ad=t=>(ut(t)||ke(t))&&ke(t.then)&&ke(t.catch),ld=Object.prototype.toString,ks=t=>ld.call(t),hg=t=>ks(t).slice(8,-1),cd=t=>ks(t)==="[object Object]",qc=t=>dt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Or=Wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},dg=/-\w/g,on=ua(t=>t.replace(dg,e=>e.slice(1).toUpperCase())),pg=/\B([A-Z])/g,Fi=ua(t=>t.replace(pg,"-$1").toLowerCase()),fa=ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),Da=ua(t=>t?`on${fa(t)}`:""),$t=(t,e)=>!Object.is(t,e),xs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ud=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},mg=t=>{const e=parseFloat(t);return isNaN(e)?t:e},fd=t=>{const e=dt(t)?Number(t):NaN;return isNaN(e)?t:e};let Hu;const ha=()=>Hu||(Hu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function da(t){if(He(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=dt(i)?xg(i):da(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(dt(t)||ut(t))return t}const gg=/;(?![^(]*\))/g,_g=/:([^]+)/,vg=/\/\*[^]*?\*\//g;function xg(t){const e={};return t.replace(vg,"").split(gg).forEach(n=>{if(n){const i=n.split(_g);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pa(t){let e="";if(dt(t))e=t;else if(He(t))for(let n=0;n<t.length;n++){const i=pa(t[n]);i&&(e+=i+" ")}else if(ut(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function yg(t){if(!t)return null;let{class:e,style:n}=t;return e&&!dt(e)&&(t.class=pa(e)),n&&(t.style=da(n)),t}const Sg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Eg=Wc(Sg);function hd(t){return!!t||t===""}const dd=t=>!!(t&&t.__v_isRef===!0),Mg=t=>dt(t)?t:t==null?"":He(t)||ut(t)&&(t.toString===ld||!ke(t.toString))?dd(t)?Mg(t.value):JSON.stringify(t,pd,2):String(t),pd=(t,e)=>dd(e)?pd(t,e.value):Fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ia(i,s)+" =>"]=r,n),{})}:od(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ia(n))}:ci(e)?Ia(e):ut(e)&&!He(e)&&!cd(e)?String(e):e,Ia=(t,e="")=>{var n;return ci(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class md{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){this._on>0&&--this._on===0&&(Wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Tg(t){return new md(t)}function gd(){return Wt}let ct;const Ua=new WeakSet;class _d{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&Wt.active&&Wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ua.has(this)&&(Ua.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ku(this),yd(this);const e=ct,n=Mn;ct=this,Mn=!0;try{return this.fn()}finally{Sd(this),ct=e,Mn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Kc(e);this.deps=this.depsTail=void 0,ku(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ua.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pl(this)&&this.run()}get dirty(){return Pl(this)}}let vd=0,ys,Ss;function xd(t,e=!1){if(t.flags|=8,e){t.next=Ss,Ss=t;return}t.next=ys,ys=t}function jc(){vd++}function Yc(){if(--vd>0)return;if(Ss){let e=Ss;for(Ss=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ys;){let e=ys;for(ys=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function yd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sd(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Kc(i),bg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Pl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ed(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ed(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ws)||(t.globalVersion=ws,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Pl(t))))return;t.flags|=2;const e=t.dep,n=ct,i=Mn;ct=t,Mn=!0;try{yd(t);const r=t.fn(t._value);(e.version===0||$t(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ct=n,Mn=i,Sd(t),t.flags&=-3}}function Kc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Kc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function bg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Mn=!0;const Md=[];function ni(){Md.push(Mn),Mn=!1}function ii(){const t=Md.pop();Mn=t===void 0?!0:t}function ku(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ct;ct=void 0;try{e()}finally{ct=n}}}let ws=0;class Ag{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ma{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ct||!Mn||ct===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ct)n=this.activeLink=new Ag(ct,this),ct.deps?(n.prevDep=ct.depsTail,ct.depsTail.nextDep=n,ct.depsTail=n):ct.deps=ct.depsTail=n,Td(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ct.depsTail,n.nextDep=void 0,ct.depsTail.nextDep=n,ct.depsTail=n,ct.deps===n&&(ct.deps=i)}return n}trigger(e){this.version++,ws++,this.notify(e)}notify(e){jc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Yc()}}}function Td(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Td(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vo=new WeakMap,ir=Symbol(""),Ll=Symbol(""),Rs=Symbol("");function Ut(t,e,n){if(Mn&&ct){let i=Vo.get(t);i||Vo.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new ma),r.map=i,r.key=n),r.track()}}function Yn(t,e,n,i,r,s){const o=Vo.get(t);if(!o){ws++;return}const a=l=>{l&&l.trigger()};if(jc(),e==="clear")o.forEach(a);else{const l=He(t),u=l&&qc(n);if(l&&n==="length"){const c=Number(i);o.forEach((f,h)=>{(h==="length"||h===Rs||!ci(h)&&h>=c)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Rs)),e){case"add":l?u&&a(o.get("length")):(a(o.get(ir)),Fr(t)&&a(o.get(Ll)));break;case"delete":l||(a(o.get(ir)),Fr(t)&&a(o.get(Ll)));break;case"set":Fr(t)&&a(o.get(ir));break}}Yc()}function wg(t,e){const n=Vo.get(t);return n&&n.get(e)}function mr(t){const e=Ye(t);return e===t?e:(Ut(e,"iterate",Rs),gn(t)?e:e.map(Pt))}function ga(t){return Ut(t=Ye(t),"iterate",Rs),t}const Rg={__proto__:null,[Symbol.iterator](){return Na(this,Symbol.iterator,Pt)},concat(...t){return mr(this).concat(...t.map(e=>He(e)?mr(e):e))},entries(){return Na(this,"entries",t=>(t[1]=Pt(t[1]),t))},every(t,e){return Bn(this,"every",t,e,void 0,arguments)},filter(t,e){return Bn(this,"filter",t,e,n=>n.map(Pt),arguments)},find(t,e){return Bn(this,"find",t,e,Pt,arguments)},findIndex(t,e){return Bn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Bn(this,"findLast",t,e,Pt,arguments)},findLastIndex(t,e){return Bn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Bn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Fa(this,"includes",t)},indexOf(...t){return Fa(this,"indexOf",t)},join(t){return mr(this).join(t)},lastIndexOf(...t){return Fa(this,"lastIndexOf",t)},map(t,e){return Bn(this,"map",t,e,void 0,arguments)},pop(){return as(this,"pop")},push(...t){return as(this,"push",t)},reduce(t,...e){return zu(this,"reduce",t,e)},reduceRight(t,...e){return zu(this,"reduceRight",t,e)},shift(){return as(this,"shift")},some(t,e){return Bn(this,"some",t,e,void 0,arguments)},splice(...t){return as(this,"splice",t)},toReversed(){return mr(this).toReversed()},toSorted(t){return mr(this).toSorted(t)},toSpliced(...t){return mr(this).toSpliced(...t)},unshift(...t){return as(this,"unshift",t)},values(){return Na(this,"values",Pt)}};function Na(t,e,n){const i=ga(t),r=i[e]();return i!==t&&!gn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const Cg=Array.prototype;function Bn(t,e,n,i,r,s){const o=ga(t),a=o!==t&&!gn(t),l=o[e];if(l!==Cg[e]){const f=l.apply(t,s);return a?Pt(f):f}let u=n;o!==t&&(a?u=function(f,h){return n.call(this,Pt(f),h,t)}:n.length>2&&(u=function(f,h){return n.call(this,f,h,t)}));const c=l.call(o,u,i);return a&&r?r(c):c}function zu(t,e,n,i){const r=ga(t);let s=n;return r!==t&&(gn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Pt(a),l,t)}),r[e](s,...i)}function Fa(t,e,n){const i=Ye(t);Ut(i,"iterate",Rs);const r=i[e](...n);return(r===-1||r===!1)&&Qc(n[0])?(n[0]=Ye(n[0]),i[e](...n)):r}function as(t,e,n=[]){ni(),jc();const i=Ye(t)[e].apply(t,n);return Yc(),ii(),i}const Pg=Wc("__proto__,__v_isRef,__isVue"),bd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ci));function Lg(t){ci(t)||(t=String(t));const e=Ye(this);return Ut(e,"has",t),e.hasOwnProperty(t)}class Ad{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?zg:Pd:s?Cd:Rd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!r){let l;if(o&&(l=Rg[n]))return l;if(n==="hasOwnProperty")return Lg}const a=Reflect.get(e,n,St(e)?e:i);return(ci(n)?bd.has(n):Pg(n))||(r||Ut(e,"get",n),s)?a:St(a)?o&&qc(n)?a:a.value:ut(a)?r?Ld(a):Oi(a):a}}class wd extends Ad{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=ri(s);if(!gn(i)&&!ri(i)&&(s=Ye(s),i=Ye(i)),!He(e)&&St(s)&&!St(i))return l||(s.value=i),!0}const o=He(e)&&qc(n)?Number(n)<e.length:nt(e,n),a=Reflect.set(e,n,i,St(e)?e:r);return e===Ye(r)&&(o?$t(i,s)&&Yn(e,"set",n,i):Yn(e,"add",n,i)),a}deleteProperty(e,n){const i=nt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Yn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!ci(n)||!bd.has(n))&&Ut(e,"has",n),i}ownKeys(e){return Ut(e,"iterate",He(e)?"length":ir),Reflect.ownKeys(e)}}class Dg extends Ad{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ig=new wd,Ug=new Dg,Ng=new wd(!0);const Dl=t=>t,Qs=t=>Reflect.getPrototypeOf(t);function Fg(t,e,n){return function(...i){const r=this.__v_raw,s=Ye(r),o=Fr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=r[t](...i),c=n?Dl:e?Go:Pt;return!e&&Ut(s,"iterate",l?Ll:ir),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}},[Symbol.iterator](){return this}}}}function eo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Og(t,e){const n={get(r){const s=this.__v_raw,o=Ye(s),a=Ye(r);t||($t(r,a)&&Ut(o,"get",r),Ut(o,"get",a));const{has:l}=Qs(o),u=e?Dl:t?Go:Pt;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Ut(Ye(r),"iterate",ir),r.size},has(r){const s=this.__v_raw,o=Ye(s),a=Ye(r);return t||($t(r,a)&&Ut(o,"has",r),Ut(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Ye(a),u=e?Dl:t?Go:Pt;return!t&&Ut(l,"iterate",ir),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return Mt(n,t?{add:eo("add"),set:eo("set"),delete:eo("delete"),clear:eo("clear")}:{add(r){!e&&!gn(r)&&!ri(r)&&(r=Ye(r));const s=Ye(this);return Qs(s).has.call(s,r)||(s.add(r),Yn(s,"add",r,r)),this},set(r,s){!e&&!gn(s)&&!ri(s)&&(s=Ye(s));const o=Ye(this),{has:a,get:l}=Qs(o);let u=a.call(o,r);u||(r=Ye(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?$t(s,c)&&Yn(o,"set",r,s):Yn(o,"add",r,s),this},delete(r){const s=Ye(this),{has:o,get:a}=Qs(s);let l=o.call(s,r);l||(r=Ye(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Yn(s,"delete",r,void 0),u},clear(){const r=Ye(this),s=r.size!==0,o=r.clear();return s&&Yn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Fg(r,t,e)}),n}function Zc(t,e){const n=Og(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(nt(n,r)&&r in i?n:i,r,s)}const Bg={get:Zc(!1,!1)},Hg={get:Zc(!1,!0)},kg={get:Zc(!0,!1)};const Rd=new WeakMap,Cd=new WeakMap,Pd=new WeakMap,zg=new WeakMap;function Vg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gg(t){return t.__v_skip||!Object.isExtensible(t)?0:Vg(hg(t))}function Oi(t){return ri(t)?t:Jc(t,!1,Ig,Bg,Rd)}function Dn(t){return Jc(t,!1,Ng,Hg,Cd)}function Ld(t){return Jc(t,!0,Ug,kg,Pd)}function Jc(t,e,n,i,r){if(!ut(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Gg(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function rr(t){return ri(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function ri(t){return!!(t&&t.__v_isReadonly)}function gn(t){return!!(t&&t.__v_isShallow)}function Qc(t){return t?!!t.__v_raw:!1}function Ye(t){const e=t&&t.__v_raw;return e?Ye(e):t}function Wg(t){return!nt(t,"__v_skip")&&Object.isExtensible(t)&&ud(t,"__v_skip",!0),t}const Pt=t=>ut(t)?Oi(t):t,Go=t=>ut(t)?Ld(t):t;function St(t){return t?t.__v_isRef===!0:!1}function Qn(t){return Dd(t,!1)}function lr(t){return Dd(t,!0)}function Dd(t,e){return St(t)?t:new Xg(t,e)}class Xg{constructor(e,n){this.dep=new ma,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ye(e),this._value=n?e:Pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||gn(e)||ri(e);e=i?e:Ye(e),$t(e,n)&&(this._rawValue=e,this._value=i?e:Pt(e),this.dep.trigger())}}function ht(t){return St(t)?t.value:t}function $g(t){return ke(t)?t():ht(t)}const qg={get:(t,e,n)=>e==="__v_raw"?t:ht(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return St(r)&&!St(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Id(t){return rr(t)?t:new Proxy(t,qg)}class jg{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new ma,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Yg(t){return new jg(t)}class Kg{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return wg(Ye(this._object),this._key)}}class Zg{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Jg(t,e,n){return St(t)?t:ke(t)?new Zg(t):ut(t)&&arguments.length>1?Qg(t,e,n):Qn(t)}function Qg(t,e,n){const i=t[e];return St(i)?i:new Kg(t,e,n)}class e_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ma(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ws-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ct!==this)return xd(this,!0),!0}get value(){const e=this.dep.track();return Ed(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function t_(t,e,n=!1){let i,r;return ke(t)?i=t:(i=t.get,r=t.set),new e_(i,r,n)}const to={},Wo=new WeakMap;let Yi;function n_(t,e=!1,n=Yi){if(n){let i=Wo.get(n);i||Wo.set(n,i=[]),i.push(t)}}function i_(t,e,n=Qe){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,u=y=>r?y:gn(y)||r===!1||r===0?Ai(y,1):Ai(y);let c,f,h,d,g=!1,_=!1;if(St(t)?(f=()=>t.value,g=gn(t)):rr(t)?(f=()=>u(t),g=!0):He(t)?(_=!0,g=t.some(y=>rr(y)||gn(y)),f=()=>t.map(y=>{if(St(y))return y.value;if(rr(y))return u(y);if(ke(y))return l?l(y,2):y()})):ke(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){ni();try{h()}finally{ii()}}const y=Yi;Yi=c;try{return l?l(t,3,[d]):t(d)}finally{Yi=y}}:f=Fn,e&&r){const y=f,b=r===!0?1/0:r;f=()=>Ai(y(),b)}const m=gd(),p=()=>{c.stop(),m&&m.active&&$c(m.effects,c)};if(s&&e){const y=e;e=(...b)=>{y(...b),p()}}let T=_?new Array(t.length).fill(to):to;const x=y=>{if(!(!(c.flags&1)||!c.dirty&&!y))if(e){const b=c.run();if(r||g||(_?b.some((R,P)=>$t(R,T[P])):$t(b,T))){h&&h();const R=Yi;Yi=c;try{const P=[b,T===to?void 0:_&&T[0]===to?[]:T,d];T=b,l?l(e,3,P):e(...P)}finally{Yi=R}}}else c.run()};return a&&a(x),c=new _d(f),c.scheduler=o?()=>o(x,!1):x,d=y=>n_(y,!1,c),h=c.onStop=()=>{const y=Wo.get(c);if(y){if(l)l(y,4);else for(const b of y)b();Wo.delete(c)}},e?i?x(!0):T=c.run():o?o(x.bind(null,!0),!0):c.run(),p.pause=c.pause.bind(c),p.resume=c.resume.bind(c),p.stop=p,p}function Ai(t,e=1/0,n){if(e<=0||!ut(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,St(t))Ai(t.value,e,n);else if(He(t))for(let i=0;i<t.length;i++)Ai(t[i],e,n);else if(od(t)||Fr(t))t.forEach(i=>{Ai(i,e,n)});else if(cd(t)){for(const i in t)Ai(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ai(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zs(t,e,n,i){try{return i?t(...i):t()}catch(r){is(r,e,n)}}function bn(t,e,n,i){if(ke(t)){const r=zs(t,e,n,i);return r&&ad(r)&&r.catch(s=>{is(s,e,n)}),r}if(He(t)){const r=[];for(let s=0;s<t.length;s++)r.push(bn(t[s],e,n,i));return r}}function is(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Qe;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,l,u)===!1)return}a=a.parent}if(s){ni(),zs(s,null,10,[t,l,u]),ii();return}}r_(t,n,r,i,o)}function r_(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const kt=[];let Cn=-1;const Br=[];let Mi=null,Lr=0;const Ud=Promise.resolve();let Xo=null;function $r(t){const e=Xo||Ud;return t?e.then(this?t.bind(this):t):e}function s_(t){let e=Cn+1,n=kt.length;for(;e<n;){const i=e+n>>>1,r=kt[i],s=Cs(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function eu(t){if(!(t.flags&1)){const e=Cs(t),n=kt[kt.length-1];!n||!(t.flags&2)&&e>=Cs(n)?kt.push(t):kt.splice(s_(e),0,t),t.flags|=1,Nd()}}function Nd(){Xo||(Xo=Ud.then(Fd))}function Il(t){He(t)?Br.push(...t):Mi&&t.id===-1?Mi.splice(Lr+1,0,t):t.flags&1||(Br.push(t),t.flags|=1),Nd()}function Vu(t,e,n=Cn+1){for(;n<kt.length;n++){const i=kt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;kt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function $o(t){if(Br.length){const e=[...new Set(Br)].sort((n,i)=>Cs(n)-Cs(i));if(Br.length=0,Mi){Mi.push(...e);return}for(Mi=e,Lr=0;Lr<Mi.length;Lr++){const n=Mi[Lr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mi=null,Lr=0}}const Cs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Fd(t){try{for(Cn=0;Cn<kt.length;Cn++){const e=kt[Cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Cn<kt.length;Cn++){const e=kt[Cn];e&&(e.flags&=-2)}Cn=-1,kt.length=0,$o(),Xo=null,(kt.length||Br.length)&&Fd()}}let zt=null,Od=null;function qo(t){const e=zt;return zt=t,Od=t&&t.type.__scopeId||null,e}function tu(t,e=zt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Jo(-1);const s=qo(e);let o;try{o=t(...r)}finally{qo(s),i._d&&Jo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Pn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ni(),bn(l,n,8,[t.el,a,t,e]),ii())}}const o_=Symbol("_vte"),Bd=t=>t.__isTeleport,jn=Symbol("_leaveCb"),no=Symbol("_enterCb");function Hd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return va(()=>{t.isMounted=!0}),Gs(()=>{t.isUnmounting=!0}),t}const un=[Function,Array],kd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:un,onEnter:un,onAfterEnter:un,onEnterCancelled:un,onBeforeLeave:un,onLeave:un,onAfterLeave:un,onLeaveCancelled:un,onBeforeAppear:un,onAppear:un,onAfterAppear:un,onAppearCancelled:un},zd=t=>{const e=t.subTree;return e.component?zd(e.component):e},a_={name:"BaseTransition",props:kd,setup(t,{slots:e}){const n=hi(),i=Hd();return()=>{const r=e.default&&nu(e.default(),!0);if(!r||!r.length)return;const s=Vd(r),o=Ye(t),{mode:a}=o;if(i.isLeaving)return Oa(s);const l=Gu(s);if(!l)return Oa(s);let u=Ps(l,o,i,n,f=>u=f);l.type!==yt&&Ii(l,u);let c=n.subTree&&Gu(n.subTree);if(c&&c.type!==yt&&!yn(c,l)&&zd(n).type!==yt){let f=Ps(c,o,i,n);if(Ii(c,f),a==="out-in"&&l.type!==yt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,c=void 0},Oa(s);a==="in-out"&&l.type!==yt?f.delayLeave=(h,d,g)=>{const _=Gd(i,c);_[String(c.key)]=c,h[jn]=()=>{d(),h[jn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function Vd(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==yt){e=n;break}}return e}const l_=a_;function Gd(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Ps(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:T,onAppearCancelled:x}=e,y=String(t.key),b=Gd(n,t),R=(M,E)=>{M&&bn(M,i,9,E)},P=(M,E)=>{const C=E[1];R(M,E),He(M)?M.every(U=>U.length<=1)&&C():M.length<=1&&C()},D={mode:o,persisted:a,beforeEnter(M){let E=l;if(!n.isMounted)if(s)E=m||l;else return;M[jn]&&M[jn](!0);const C=b[y];C&&yn(t,C)&&C.el[jn]&&C.el[jn](),R(E,[M])},enter(M){let E=u,C=c,U=f;if(!n.isMounted)if(s)E=p||u,C=T||c,U=x||f;else return;let k=!1;const X=M[no]=J=>{k||(k=!0,J?R(U,[M]):R(C,[M]),D.delayedLeave&&D.delayedLeave(),M[no]=void 0)};E?P(E,[M,X]):X()},leave(M,E){const C=String(t.key);if(M[no]&&M[no](!0),n.isUnmounting)return E();R(h,[M]);let U=!1;const k=M[jn]=X=>{U||(U=!0,E(),X?R(_,[M]):R(g,[M]),M[jn]=void 0,b[C]===t&&delete b[C])};b[C]=t,d?P(d,[M,k]):k()},clone(M){const E=Ps(M,e,n,i,r);return r&&r(E),E}};return D}function Oa(t){if(Vs(t))return t=si(t),t.children=null,t}function Gu(t){if(!Vs(t))return Bd(t.type)&&t.children?Vd(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ke(n.default))return n.default()}}function Ii(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ii(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function nu(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Rt?(o.patchFlag&128&&r++,i=i.concat(nu(o.children,e,a))):(e||o.type!==yt)&&i.push(a!=null?si(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function ui(t,e){return ke(t)?Mt({name:t.name},e,{setup:t}):t}function iu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function dR(t){const e=hi(),n=lr(null);if(e){const r=e.refs===Qe?e.refs={}:e.refs;Object.defineProperty(r,t,{enumerable:!0,get:()=>n.value,set:s=>n.value=s})}return n}const jo=new WeakMap;function Hr(t,e,n,i,r=!1){if(He(t)){t.forEach((g,_)=>Hr(g,e&&(He(e)?e[_]:e),n,i,r));return}if(Ci(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Hr(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?uu(i.component):i.el,o=r?null:s,{i:a,r:l}=t,u=e&&e.r,c=a.refs===Qe?a.refs={}:a.refs,f=a.setupState,h=Ye(f),d=f===Qe?sd:g=>nt(h,g);if(u!=null&&u!==l){if(Wu(e),dt(u))c[u]=null,d(u)&&(f[u]=null);else if(St(u)){u.value=null;const g=e;g.k&&(c[g.k]=null)}}if(ke(l))zs(l,a,12,[o,c]);else{const g=dt(l),_=St(l);if(g||_){const m=()=>{if(t.f){const p=g?d(l)?f[l]:c[l]:l.value;if(r)He(p)&&$c(p,s);else if(He(p))p.includes(s)||p.push(s);else if(g)c[l]=[s],d(l)&&(f[l]=c[l]);else{const T=[s];l.value=T,t.k&&(c[t.k]=T)}}else g?(c[l]=o,d(l)&&(f[l]=o)):_&&(l.value=o,t.k&&(c[t.k]=o))};if(o){const p=()=>{m(),jo.delete(t)};p.id=-1,jo.set(t,p),Ct(p,n)}else Wu(t),m()}}}function Wu(t){const e=jo.get(t);e&&(e.flags|=8,jo.delete(t))}let Xu=!1;const gr=()=>{Xu||(console.error("Hydration completed but contains mismatches."),Xu=!0)},c_=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",u_=t=>t.namespaceURI.includes("MathML"),io=t=>{if(t.nodeType===1){if(c_(t))return"svg";if(u_(t))return"mathml"}},Ir=t=>t.nodeType===8;function f_(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:u}}=t,c=(x,y)=>{if(!y.hasChildNodes()){n(null,x,y),$o(),y._vnode=x;return}f(y.firstChild,x,null,null,null),$o(),y._vnode=x},f=(x,y,b,R,P,D=!1)=>{D=D||!!y.dynamicChildren;const M=Ir(x)&&x.data==="[",E=()=>_(x,y,b,R,P,M),{type:C,ref:U,shapeFlag:k,patchFlag:X}=y;let J=x.nodeType;y.el=x,X===-2&&(D=!1,y.dynamicChildren=null);let H=null;switch(C){case or:J!==3?y.children===""?(l(y.el=r(""),o(x),x),H=x):H=E():(x.data!==y.children&&(gr(),x.data=y.children),H=s(x));break;case yt:T(x)?(H=s(x),p(y.el=x.content.firstChild,x,b)):J!==8||M?H=E():H=s(x);break;case Lo:if(M&&(x=s(x),J=x.nodeType),J===1||J===3){H=x;const Z=!y.children.length;for(let N=0;N<y.staticCount;N++)Z&&(y.children+=H.nodeType===1?H.outerHTML:H.data),N===y.staticCount-1&&(y.anchor=H),H=s(H);return M?s(H):H}else E();break;case Rt:M?H=g(x,y,b,R,P,D):H=E();break;default:if(k&1)(J!==1||y.type.toLowerCase()!==x.tagName.toLowerCase())&&!T(x)?H=E():H=h(x,y,b,R,P,D);else if(k&6){y.slotScopeIds=P;const Z=o(x);if(M?H=m(x):Ir(x)&&x.data==="teleport start"?H=m(x,x.data,"teleport end"):H=s(x),e(y,Z,null,b,R,io(Z),D),Ci(y)&&!y.type.__asyncResolved){let N;M?(N=vt(Rt),N.anchor=H?H.previousSibling:Z.lastChild):N=x.nodeType===3?Tp(""):vt("div"),N.el=x,y.component.subTree=N}}else k&64?J!==8?H=E():H=y.type.hydrate(x,y,b,R,P,D,t,d):k&128&&(H=y.type.hydrate(x,y,b,R,io(o(x)),P,D,t,f))}return U!=null&&Hr(U,null,R,y),H},h=(x,y,b,R,P,D)=>{D=D||!!y.dynamicChildren;const{type:M,props:E,patchFlag:C,shapeFlag:U,dirs:k,transition:X}=y,J=M==="input"||M==="option";if(J||C!==-1){k&&Pn(y,null,b,"created");let H=!1;if(T(x)){H=fp(null,X)&&b&&b.vnode.props&&b.vnode.props.appear;const N=x.content.firstChild;if(H){const he=N.getAttribute("class");he&&(N.$cls=he),X.beforeEnter(N)}p(N,x,b),y.el=x=N}if(U&16&&!(E&&(E.innerHTML||E.textContent))){let N=d(x.firstChild,y,x,b,R,P,D);for(;N;){ro(x,1)||gr();const he=N;N=N.nextSibling,a(he)}}else if(U&8){let N=y.children;N[0]===`
`&&(x.tagName==="PRE"||x.tagName==="TEXTAREA")&&(N=N.slice(1)),x.textContent!==N&&(ro(x,0)||gr(),x.textContent=y.children)}if(E){if(J||!D||C&48){const N=x.tagName.includes("-");for(const he in E)(J&&(he.endsWith("value")||he==="indeterminate")||Hs(he)&&!Or(he)||he[0]==="."||N)&&i(x,he,null,E[he],void 0,b)}else if(E.onClick)i(x,"onClick",null,E.onClick,void 0,b);else if(C&4&&rr(E.style))for(const N in E.style)E.style[N]}let Z;(Z=E&&E.onVnodeBeforeMount)&&Xt(Z,b,y),k&&Pn(y,null,b,"beforeMount"),((Z=E&&E.onVnodeMounted)||k||H)&&vp(()=>{Z&&Xt(Z,b,y),H&&X.enter(x),k&&Pn(y,null,b,"mounted")},R)}return x.nextSibling},d=(x,y,b,R,P,D,M)=>{M=M||!!y.dynamicChildren;const E=y.children,C=E.length;for(let U=0;U<C;U++){const k=M?E[U]:E[U]=rn(E[U]),X=k.type===or;x?(X&&!M&&U+1<C&&rn(E[U+1]).type===or&&(l(r(x.data.slice(k.children.length)),b,s(x)),x.data=k.children),x=f(x,k,R,P,D,M)):X&&!k.children?l(k.el=r(""),b):(ro(b,1)||gr(),n(null,k,b,null,R,P,io(b),D))}return x},g=(x,y,b,R,P,D)=>{const{slotScopeIds:M}=y;M&&(P=P?P.concat(M):M);const E=o(x),C=d(s(x),y,E,b,R,P,D);return C&&Ir(C)&&C.data==="]"?s(y.anchor=C):(gr(),l(y.anchor=u("]"),E,C),C)},_=(x,y,b,R,P,D)=>{if(ro(x.parentElement,1)||gr(),y.el=null,D){const C=m(x);for(;;){const U=s(x);if(U&&U!==C)a(U);else break}}const M=s(x),E=o(x);return a(x),n(null,y,E,M,b,R,io(E),P),b&&(b.vnode.el=y.el,Sa(b,y.el)),M},m=(x,y="[",b="]")=>{let R=0;for(;x;)if(x=s(x),x&&Ir(x)&&(x.data===y&&R++,x.data===b)){if(R===0)return s(x);R--}return x},p=(x,y,b)=>{const R=y.parentNode;R&&R.replaceChild(x,y);let P=b;for(;P;)P.vnode.el===y&&(P.vnode.el=P.subTree.el=x),P=P.parent},T=x=>x.nodeType===1&&x.tagName==="TEMPLATE";return[c,f]}const $u="data-allow-mismatch",h_={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ro(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute($u);)t=t.parentElement;const n=t&&t.getAttribute($u);if(n==null)return!1;if(n==="")return!0;{const i=n.split(",");return e===0&&i.includes("children")?!0:i.includes(h_[e])}}ha().requestIdleCallback;ha().cancelIdleCallback;function d_(t,e){if(Ir(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Ir(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const Ci=t=>!!t.type.__asyncLoader;function Ul(t){ke(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,c,f=0;const h=()=>(f++,u=null,d()),d=()=>{let g;return u||(g=u=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((m,p)=>{l(_,()=>m(h()),()=>p(_),f+1)});throw _}).then(_=>g!==u&&u?u:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),c=_,_)))};return ui({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(g,_,m){let p=!1;(_.bu||(_.bu=[])).push(()=>p=!0);const T=()=>{p||m()},x=s?()=>{const y=s(T,b=>d_(g,b));y&&(_.bum||(_.bum=[])).push(y)}:T;c?x():d().then(()=>!_.isUnmounted&&x())},get __asyncResolved(){return c},setup(){const g=Lt;if(iu(g),c)return()=>Ba(c,g);const _=x=>{u=null,is(x,g,13,!i)};if(a&&g.suspense||jr)return d().then(x=>()=>Ba(x,g)).catch(x=>(_(x),()=>i?vt(i,{error:x}):null));const m=Qn(!1),p=Qn(),T=Qn(!!r);return r&&setTimeout(()=>{T.value=!1},r),o!=null&&setTimeout(()=>{if(!m.value&&!p.value){const x=new Error(`Async component timed out after ${o}ms.`);_(x),p.value=x}},o),d().then(()=>{m.value=!0,g.parent&&Vs(g.parent.vnode)&&g.parent.update()}).catch(x=>{_(x),p.value=x}),()=>{if(m.value&&c)return Ba(c,g);if(p.value&&i)return vt(i,{error:p.value});if(n&&!T.value)return vt(n)}}})}function Ba(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=vt(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Vs=t=>t.type.__isKeepAlive,p_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=hi(),i=n.ctx;if(!i.renderer)return()=>{const T=e.default&&e.default();return T&&T.length===1?T[0]:T};const r=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:f}}}=i,h=f("div");i.activate=(T,x,y,b,R)=>{const P=T.component;u(T,x,y,0,a),l(P.vnode,T,x,y,P,a,b,T.slotScopeIds,R),Ct(()=>{P.isDeactivated=!1,P.a&&xs(P.a);const D=T.props&&T.props.onVnodeMounted;D&&Xt(D,P.parent,T)},a)},i.deactivate=T=>{const x=T.component;Ko(x.m),Ko(x.a),u(T,h,null,1,a),Ct(()=>{x.da&&xs(x.da);const y=T.props&&T.props.onVnodeUnmounted;y&&Xt(y,x.parent,T),x.isDeactivated=!0},a)};function d(T){Ha(T),c(T,n,a,!0)}function g(T){r.forEach((x,y)=>{const b=Vl(x.type);b&&!T(b)&&_(y)})}function _(T){const x=r.get(T);x&&(!o||!yn(x,o))?d(x):o&&Ha(o),r.delete(T),s.delete(T)}kr(()=>[t.include,t.exclude],([T,x])=>{T&&g(y=>gs(T,y)),x&&g(y=>!gs(x,y))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&(Zo(n.subTree.type)?Ct(()=>{r.set(m,so(n.subTree))},n.subTree.suspense):r.set(m,so(n.subTree)))};return va(p),ru(p),Gs(()=>{r.forEach(T=>{const{subTree:x,suspense:y}=n,b=so(x);if(T.type===b.type&&T.key===b.key){Ha(b);const R=b.component.da;R&&Ct(R,y);return}d(T)})}),()=>{if(m=null,!e.default)return o=null;const T=e.default(),x=T[0];if(T.length>1)return o=null,T;if(!cr(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return o=null,x;let y=so(x);if(y.type===yt)return o=null,y;const b=y.type,R=Vl(Ci(y)?y.type.__asyncResolved||{}:b),{include:P,exclude:D,max:M}=t;if(P&&(!R||!gs(P,R))||D&&R&&gs(D,R))return y.shapeFlag&=-257,o=y,x;const E=y.key==null?b:y.key,C=r.get(E);return y.el&&(y=si(y),x.shapeFlag&128&&(x.ssContent=y)),m=E,C?(y.el=C.el,y.component=C.component,y.transition&&Ii(y,y.transition),y.shapeFlag|=512,s.delete(E),s.add(E)):(s.add(E),M&&s.size>parseInt(M,10)&&_(s.values().next().value)),y.shapeFlag|=256,o=y,Zo(x.type)?x:y}}},m_=p_;function gs(t,e){return He(t)?t.some(n=>gs(n,e)):dt(t)?t.split(",").includes(e):fg(t)?(t.lastIndex=0,t.test(e)):!1}function Wd(t,e){$d(t,"a",e)}function Xd(t,e){$d(t,"da",e)}function $d(t,e,n=Lt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(_a(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Vs(r.parent.vnode)&&g_(i,e,n,r),r=r.parent}}function g_(t,e,n,i){const r=_a(e,t,i,!0);qd(()=>{$c(i[e],r)},n)}function Ha(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function so(t){return t.shapeFlag&128?t.ssContent:t}function _a(t,e,n=Lt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{ni();const a=Ws(n),l=bn(e,n,t,o);return a(),ii(),l});return i?r.unshift(s):r.push(s),s}}const fi=t=>(e,n=Lt)=>{(!jr||t==="sp")&&_a(t,(...i)=>e(...i),n)},__=fi("bm"),va=fi("m"),v_=fi("bu"),ru=fi("u"),Gs=fi("bum"),qd=fi("um"),x_=fi("sp"),y_=fi("rtg"),S_=fi("rtc");function jd(t,e=Lt){_a("ec",t,e)}const Yd="components";function pR(t,e){return Zd(Yd,t,!0,e)||t}const Kd=Symbol.for("v-ndc");function E_(t){return dt(t)?Zd(Yd,t,!1)||t:t||Kd}function Zd(t,e,n=!0,i=!1){const r=zt||Lt;if(r){const s=r.type;{const a=Vl(s,!1);if(a&&(a===e||a===on(e)||a===fa(on(e))))return s}const o=qu(r[t]||s[t],e)||qu(r.appContext[t],e);return!o&&i?s:o}}function qu(t,e){return t&&(t[e]||t[on(e)]||t[fa(on(e))])}function mR(t,e,n,i){let r;const s=n,o=He(t);if(o||dt(t)){const a=o&&rr(t);let l=!1,u=!1;a&&(l=!gn(t),u=ri(t),t=ga(t)),r=new Array(t.length);for(let c=0,f=t.length;c<f;c++)r[c]=e(l?u?Go(Pt(t[c])):Pt(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(ut(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(t[c],c,l,s)}}else r=[];return r}function gR(t,e,n={},i,r){if(zt.ce||zt.parent&&Ci(zt.parent)&&zt.parent.ce)return dn(),Kn(Rt,null,[vt("slot",n,i)],64);let s=t[e];s&&s._c&&(s._d=!1),dn();const o=s&&Jd(s(n)),a=n.key||o&&o.key,l=Kn(Rt,{key:(a&&!ci(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&t._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Jd(t){return t.some(e=>cr(e)?!(e.type===yt||e.type===Rt&&!Jd(e.children)):!0)?t:null}const Nl=t=>t?Ap(t)?uu(t):Nl(t.parent):null,Es=Mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nl(t.parent),$root:t=>Nl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ep(t),$forceUpdate:t=>t.f||(t.f=()=>{eu(t.update)}),$nextTick:t=>t.n||(t.n=$r.bind(t.proxy)),$watch:t=>W_.bind(t)}),ka=(t,e)=>t!==Qe&&!t.__isScriptSetup&&nt(t,e),M_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(ka(i,e))return o[e]=1,i[e];if(r!==Qe&&nt(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&nt(u,e))return o[e]=3,s[e];if(n!==Qe&&nt(n,e))return o[e]=4,n[e];Fl&&(o[e]=0)}}const c=Es[e];let f,h;if(c)return e==="$attrs"&&Ut(t.attrs,"get",""),c(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Qe&&nt(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,nt(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return ka(r,e)?(r[e]=n,!0):i!==Qe&&nt(i,e)?(i[e]=n,!0):nt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s,type:o}},a){let l,u;return!!(n[a]||t!==Qe&&a[0]!=="$"&&nt(t,a)||ka(e,a)||(l=s[0])&&nt(l,a)||nt(i,a)||nt(Es,a)||nt(r.config.globalProperties,a)||(u=o.__cssModules)&&u[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:nt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ju(t){return He(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Fl=!0;function T_(t){const e=ep(t),n=t.proxy,i=t.ctx;Fl=!1,e.beforeCreate&&Yu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:x,unmounted:y,render:b,renderTracked:R,renderTriggered:P,errorCaptured:D,serverPrefetch:M,expose:E,inheritAttrs:C,components:U,directives:k,filters:X}=e;if(u&&b_(u,i,null),o)for(const Z in o){const N=o[Z];ke(N)&&(i[Z]=N.bind(n))}if(r){const Z=r.call(n,n);ut(Z)&&(t.data=Oi(Z))}if(Fl=!0,s)for(const Z in s){const N=s[Z],he=ke(N)?N.bind(n,n):ke(N.get)?N.get.bind(n,n):Fn,Se=!ke(N)&&ke(N.set)?N.set.bind(n):Fn,Re=mn({get:he,set:Se});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Ie=>Re.value=Ie})}if(a)for(const Z in a)Qd(a[Z],i,n,Z);if(l){const Z=ke(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(N=>{Pi(N,Z[N])})}c&&Yu(c,t,"c");function H(Z,N){He(N)?N.forEach(he=>Z(he.bind(n))):N&&Z(N.bind(n))}if(H(__,f),H(va,h),H(v_,d),H(ru,g),H(Wd,_),H(Xd,m),H(jd,D),H(S_,R),H(y_,P),H(Gs,T),H(qd,y),H(x_,M),He(E))if(E.length){const Z=t.exposed||(t.exposed={});E.forEach(N=>{Object.defineProperty(Z,N,{get:()=>n[N],set:he=>n[N]=he,enumerable:!0})})}else t.exposed||(t.exposed={});b&&t.render===Fn&&(t.render=b),C!=null&&(t.inheritAttrs=C),U&&(t.components=U),k&&(t.directives=k),M&&iu(t)}function b_(t,e,n=Fn){He(t)&&(t=Ol(t));for(const i in t){const r=t[i];let s;ut(r)?"default"in r?s=Ft(r.from||i,r.default,!0):s=Ft(r.from||i):s=Ft(r),St(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Yu(t,e,n){bn(He(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qd(t,e,n,i){let r=i.includes(".")?pp(n,i):()=>n[i];if(dt(t)){const s=e[t];ke(s)&&kr(r,s)}else if(ke(t))kr(r,t.bind(n));else if(ut(t))if(He(t))t.forEach(s=>Qd(s,e,n,i));else{const s=ke(t.handler)?t.handler.bind(n):e[t.handler];ke(s)&&kr(r,s,t)}}function ep(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(u=>Yo(l,u,o,!0)),Yo(l,e,o)),ut(e)&&s.set(e,l),l}function Yo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Yo(t,s,n,!0),r&&r.forEach(o=>Yo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=A_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const A_={data:Ku,props:Zu,emits:Zu,methods:_s,computed:_s,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:_s,directives:_s,watch:R_,provide:Ku,inject:w_};function Ku(t,e){return e?t?function(){return Mt(ke(t)?t.call(this,this):t,ke(e)?e.call(this,this):e)}:e:t}function w_(t,e){return _s(Ol(t),Ol(e))}function Ol(t){if(He(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Bt(t,e){return t?[...new Set([].concat(t,e))]:e}function _s(t,e){return t?Mt(Object.create(null),t,e):e}function Zu(t,e){return t?He(t)&&He(e)?[...new Set([...t,...e])]:Mt(Object.create(null),ju(t),ju(e??{})):e}function R_(t,e){if(!t)return e;if(!e)return t;const n=Mt(Object.create(null),t);for(const i in e)n[i]=Bt(t[i],e[i]);return n}function tp(){return{app:null,config:{isNativeTag:sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let C_=0;function P_(t,e){return function(i,r=null){ke(i)||(i=Mt({},i)),r!=null&&!ut(r)&&(r=null);const s=tp(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:C_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:hv,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&ke(c.install)?(o.add(c),c.install(u,...f)):ke(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const d=u._ceVNode||vt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,c):t(d,c,h),l=!0,u._container=c,c.__vue_app__=u,uu(d.component)}},onUnmount(c){a.push(c)},unmount(){l&&(bn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=sr;sr=u;try{return c()}finally{sr=f}}};return u}}let sr=null;function Pi(t,e){if(Lt){let n=Lt.provides;const i=Lt.parent&&Lt.parent.provides;i===n&&(n=Lt.provides=Object.create(i)),n[t]=e}}function Ft(t,e,n=!1){const i=hi();if(i||sr){let r=sr?sr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ke(e)?e.call(i&&i.proxy):e}}function su(){return!!(hi()||sr)}const np={},ip=()=>Object.create(np),rp=t=>Object.getPrototypeOf(t)===np;function L_(t,e,n,i=!1){const r={},s=ip();t.propsDefaults=Object.create(null),sp(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Dn(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function D_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=Ye(r),[l]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(ya(t.emitsOptions,h))continue;const d=e[h];if(l)if(nt(s,h))d!==s[h]&&(s[h]=d,u=!0);else{const g=on(h);r[g]=Bl(l,a,g,d,t,!1)}else d!==s[h]&&(s[h]=d,u=!0)}}}else{sp(t,e,r,s)&&(u=!0);let c;for(const f in a)(!e||!nt(e,f)&&((c=Fi(f))===f||!nt(e,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(r[f]=Bl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!nt(e,f))&&(delete s[f],u=!0)}u&&Yn(t.attrs,"set","")}function sp(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Or(l))continue;const u=e[l];let c;r&&nt(r,c=on(l))?!s||!s.includes(c)?n[c]=u:(a||(a={}))[c]=u:ya(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=Ye(n),u=a||Qe;for(let c=0;c<s.length;c++){const f=s[c];n[f]=Bl(r,l,f,u[f],t,!nt(u,f))}}return o}function Bl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=Ws(r);i=u[n]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Fi(n))&&(i=!0))}return i}const I_=new WeakMap;function op(t,e,n=!1){const i=n?I_:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!ke(t)){const c=f=>{l=!0;const[h,d]=op(f,e,!0);Mt(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!s&&!l)return ut(t)&&i.set(t,Nr),Nr;if(He(s))for(let c=0;c<s.length;c++){const f=on(s[c]);Ju(f)&&(o[f]=Qe)}else if(s)for(const c in s){const f=on(c);if(Ju(f)){const h=s[c],d=o[f]=He(h)||ke(h)?{type:h}:Mt({},h),g=d.type;let _=!1,m=!0;if(He(g))for(let p=0;p<g.length;++p){const T=g[p],x=ke(T)&&T.name;if(x==="Boolean"){_=!0;break}else x==="String"&&(m=!1)}else _=ke(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||nt(d,"default"))&&a.push(f)}}const u=[o,a];return ut(t)&&i.set(t,u),u}function Ju(t){return t[0]!=="$"&&!Or(t)}const ou=t=>t==="_"||t==="_ctx"||t==="$stable",au=t=>He(t)?t.map(rn):[rn(t)],U_=(t,e,n)=>{if(e._n)return e;const i=tu((...r)=>au(e(...r)),n);return i._c=!1,i},ap=(t,e,n)=>{const i=t._ctx;for(const r in t){if(ou(r))continue;const s=t[r];if(ke(s))e[r]=U_(r,s,i);else if(s!=null){const o=au(s);e[r]=()=>o}}},lp=(t,e)=>{const n=au(e);t.slots.default=()=>n},cp=(t,e,n)=>{for(const i in e)(n||!ou(i))&&(t[i]=e[i])},N_=(t,e,n)=>{const i=t.slots=ip();if(t.vnode.shapeFlag&32){const r=e._;r?(cp(i,e,n),n&&ud(i,"_",r,!0)):ap(e,i)}else e&&lp(t,e)},F_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Qe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:cp(r,e,n):(s=!e.$stable,ap(e,r)),o=e}else e&&(lp(t,e),o={default:1});if(s)for(const a in r)!ou(a)&&o[a]==null&&delete r[a]},Ct=vp;function O_(t){return up(t)}function B_(t){return up(t,f_)}function up(t,e){const n=ha();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:d=Fn,insertStaticContent:g}=t,_=(v,L,F,ee=null,G=null,te=null,K=void 0,re=null,ue=!!L.dynamicChildren)=>{if(v===L)return;v&&!yn(v,L)&&(ee=B(v),Ie(v,G,te,!0),v=null),L.patchFlag===-2&&(ue=!1,L.dynamicChildren=null);const{type:oe,ref:w,shapeFlag:S}=L;switch(oe){case or:m(v,L,F,ee);break;case yt:p(v,L,F,ee);break;case Lo:v==null&&T(L,F,ee,K);break;case Rt:U(v,L,F,ee,G,te,K,re,ue);break;default:S&1?b(v,L,F,ee,G,te,K,re,ue):S&6?k(v,L,F,ee,G,te,K,re,ue):(S&64||S&128)&&oe.process(v,L,F,ee,G,te,K,re,ue,le)}w!=null&&G?Hr(w,v&&v.ref,te,L||v,!L):w==null&&v&&v.ref!=null&&Hr(v.ref,null,te,v,!0)},m=(v,L,F,ee)=>{if(v==null)i(L.el=a(L.children),F,ee);else{const G=L.el=v.el;L.children!==v.children&&u(G,L.children)}},p=(v,L,F,ee)=>{v==null?i(L.el=l(L.children||""),F,ee):L.el=v.el},T=(v,L,F,ee)=>{[v.el,v.anchor]=g(v.children,L,F,ee,v.el,v.anchor)},x=({el:v,anchor:L},F,ee)=>{let G;for(;v&&v!==L;)G=h(v),i(v,F,ee),v=G;i(L,F,ee)},y=({el:v,anchor:L})=>{let F;for(;v&&v!==L;)F=h(v),r(v),v=F;r(L)},b=(v,L,F,ee,G,te,K,re,ue)=>{L.type==="svg"?K="svg":L.type==="math"&&(K="mathml"),v==null?R(L,F,ee,G,te,K,re,ue):M(v,L,G,te,K,re,ue)},R=(v,L,F,ee,G,te,K,re)=>{let ue,oe;const{props:w,shapeFlag:S,transition:I,dirs:W}=v;if(ue=v.el=o(v.type,te,w&&w.is,w),S&8?c(ue,v.children):S&16&&D(v.children,ue,null,ee,G,za(v,te),K,re),W&&Pn(v,null,ee,"created"),P(ue,v,v.scopeId,K,ee),w){for(const $ in w)$!=="value"&&!Or($)&&s(ue,$,null,w[$],te,ee);"value"in w&&s(ue,"value",null,w.value,te),(oe=w.onVnodeBeforeMount)&&Xt(oe,ee,v)}W&&Pn(v,null,ee,"beforeMount");const Q=fp(G,I);Q&&I.beforeEnter(ue),i(ue,L,F),((oe=w&&w.onVnodeMounted)||Q||W)&&Ct(()=>{oe&&Xt(oe,ee,v),Q&&I.enter(ue),W&&Pn(v,null,ee,"mounted")},G)},P=(v,L,F,ee,G)=>{if(F&&d(v,F),ee)for(let te=0;te<ee.length;te++)d(v,ee[te]);if(G){let te=G.subTree;if(L===te||Zo(te.type)&&(te.ssContent===L||te.ssFallback===L)){const K=G.vnode;P(v,K,K.scopeId,K.slotScopeIds,G.parent)}}},D=(v,L,F,ee,G,te,K,re,ue=0)=>{for(let oe=ue;oe<v.length;oe++){const w=v[oe]=re?Ti(v[oe]):rn(v[oe]);_(null,w,L,F,ee,G,te,K,re)}},M=(v,L,F,ee,G,te,K)=>{const re=L.el=v.el;let{patchFlag:ue,dynamicChildren:oe,dirs:w}=L;ue|=v.patchFlag&16;const S=v.props||Qe,I=L.props||Qe;let W;if(F&&ki(F,!1),(W=I.onVnodeBeforeUpdate)&&Xt(W,F,L,v),w&&Pn(L,v,F,"beforeUpdate"),F&&ki(F,!0),(S.innerHTML&&I.innerHTML==null||S.textContent&&I.textContent==null)&&c(re,""),oe?E(v.dynamicChildren,oe,re,F,ee,za(L,G),te):K||N(v,L,re,null,F,ee,za(L,G),te,!1),ue>0){if(ue&16)C(re,S,I,F,G);else if(ue&2&&S.class!==I.class&&s(re,"class",null,I.class,G),ue&4&&s(re,"style",S.style,I.style,G),ue&8){const Q=L.dynamicProps;for(let $=0;$<Q.length;$++){const _e=Q[$],fe=S[_e],Ee=I[_e];(Ee!==fe||_e==="value")&&s(re,_e,fe,Ee,G,F)}}ue&1&&v.children!==L.children&&c(re,L.children)}else!K&&oe==null&&C(re,S,I,F,G);((W=I.onVnodeUpdated)||w)&&Ct(()=>{W&&Xt(W,F,L,v),w&&Pn(L,v,F,"updated")},ee)},E=(v,L,F,ee,G,te,K)=>{for(let re=0;re<L.length;re++){const ue=v[re],oe=L[re],w=ue.el&&(ue.type===Rt||!yn(ue,oe)||ue.shapeFlag&198)?f(ue.el):F;_(ue,oe,w,null,ee,G,te,K,!0)}},C=(v,L,F,ee,G)=>{if(L!==F){if(L!==Qe)for(const te in L)!Or(te)&&!(te in F)&&s(v,te,L[te],null,G,ee);for(const te in F){if(Or(te))continue;const K=F[te],re=L[te];K!==re&&te!=="value"&&s(v,te,re,K,G,ee)}"value"in F&&s(v,"value",L.value,F.value,G)}},U=(v,L,F,ee,G,te,K,re,ue)=>{const oe=L.el=v?v.el:a(""),w=L.anchor=v?v.anchor:a("");let{patchFlag:S,dynamicChildren:I,slotScopeIds:W}=L;W&&(re=re?re.concat(W):W),v==null?(i(oe,F,ee),i(w,F,ee),D(L.children||[],F,w,G,te,K,re,ue)):S>0&&S&64&&I&&v.dynamicChildren?(E(v.dynamicChildren,I,F,G,te,K,re),(L.key!=null||G&&L===G.subTree)&&hp(v,L,!0)):N(v,L,F,w,G,te,K,re,ue)},k=(v,L,F,ee,G,te,K,re,ue)=>{L.slotScopeIds=re,v==null?L.shapeFlag&512?G.ctx.activate(L,F,ee,K,ue):X(L,F,ee,G,te,K,ue):J(v,L,ue)},X=(v,L,F,ee,G,te,K)=>{const re=v.component=ov(v,ee,G);if(Vs(v)&&(re.ctx.renderer=le),av(re,!1,K),re.asyncDep){if(G&&G.registerDep(re,H,K),!v.el){const ue=re.subTree=vt(yt);p(null,ue,L,F),v.placeholder=ue.el}}else H(re,v,L,F,G,te,K)},J=(v,L,F)=>{const ee=L.component=v.component;if(K_(v,L,F))if(ee.asyncDep&&!ee.asyncResolved){Z(ee,L,F);return}else ee.next=L,ee.update();else L.el=v.el,ee.vnode=L},H=(v,L,F,ee,G,te,K)=>{const re=()=>{if(v.isMounted){let{next:S,bu:I,u:W,parent:Q,vnode:$}=v;{const ce=dp(v);if(ce){S&&(S.el=$.el,Z(v,S,K)),ce.asyncDep.then(()=>{v.isUnmounted||re()});return}}let _e=S,fe;ki(v,!1),S?(S.el=$.el,Z(v,S,K)):S=$,I&&xs(I),(fe=S.props&&S.props.onVnodeBeforeUpdate)&&Xt(fe,Q,S,$),ki(v,!0);const Ee=Va(v),Ae=v.subTree;v.subTree=Ee,_(Ae,Ee,f(Ae.el),B(Ae),v,G,te),S.el=Ee.el,_e===null&&Sa(v,Ee.el),W&&Ct(W,G),(fe=S.props&&S.props.onVnodeUpdated)&&Ct(()=>Xt(fe,Q,S,$),G)}else{let S;const{el:I,props:W}=L,{bm:Q,m:$,parent:_e,root:fe,type:Ee}=v,Ae=Ci(L);if(ki(v,!1),Q&&xs(Q),!Ae&&(S=W&&W.onVnodeBeforeMount)&&Xt(S,_e,L),ki(v,!0),I&&De){const ce=()=>{v.subTree=Va(v),De(I,v.subTree,v,G,null)};Ae&&Ee.__asyncHydrate?Ee.__asyncHydrate(I,v,ce):ce()}else{fe.ce&&fe.ce._def.shadowRoot!==!1&&fe.ce._injectChildStyle(Ee);const ce=v.subTree=Va(v);_(null,ce,F,ee,v,G,te),L.el=ce.el}if($&&Ct($,G),!Ae&&(S=W&&W.onVnodeMounted)){const ce=L;Ct(()=>Xt(S,_e,ce),G)}(L.shapeFlag&256||_e&&Ci(_e.vnode)&&_e.vnode.shapeFlag&256)&&v.a&&Ct(v.a,G),v.isMounted=!0,L=F=ee=null}};v.scope.on();const ue=v.effect=new _d(re);v.scope.off();const oe=v.update=ue.run.bind(ue),w=v.job=ue.runIfDirty.bind(ue);w.i=v,w.id=v.uid,ue.scheduler=()=>eu(w),ki(v,!0),oe()},Z=(v,L,F)=>{L.component=v;const ee=v.vnode.props;v.vnode=L,v.next=null,D_(v,L.props,ee,F),F_(v,L.children,F),ni(),Vu(v),ii()},N=(v,L,F,ee,G,te,K,re,ue=!1)=>{const oe=v&&v.children,w=v?v.shapeFlag:0,S=L.children,{patchFlag:I,shapeFlag:W}=L;if(I>0){if(I&128){Se(oe,S,F,ee,G,te,K,re,ue);return}else if(I&256){he(oe,S,F,ee,G,te,K,re,ue);return}}W&8?(w&16&&ge(oe,G,te),S!==oe&&c(F,S)):w&16?W&16?Se(oe,S,F,ee,G,te,K,re,ue):ge(oe,G,te,!0):(w&8&&c(F,""),W&16&&D(S,F,ee,G,te,K,re,ue))},he=(v,L,F,ee,G,te,K,re,ue)=>{v=v||Nr,L=L||Nr;const oe=v.length,w=L.length,S=Math.min(oe,w);let I;for(I=0;I<S;I++){const W=L[I]=ue?Ti(L[I]):rn(L[I]);_(v[I],W,F,null,G,te,K,re,ue)}oe>w?ge(v,G,te,!0,!1,S):D(L,F,ee,G,te,K,re,ue,S)},Se=(v,L,F,ee,G,te,K,re,ue)=>{let oe=0;const w=L.length;let S=v.length-1,I=w-1;for(;oe<=S&&oe<=I;){const W=v[oe],Q=L[oe]=ue?Ti(L[oe]):rn(L[oe]);if(yn(W,Q))_(W,Q,F,null,G,te,K,re,ue);else break;oe++}for(;oe<=S&&oe<=I;){const W=v[S],Q=L[I]=ue?Ti(L[I]):rn(L[I]);if(yn(W,Q))_(W,Q,F,null,G,te,K,re,ue);else break;S--,I--}if(oe>S){if(oe<=I){const W=I+1,Q=W<w?L[W].el:ee;for(;oe<=I;)_(null,L[oe]=ue?Ti(L[oe]):rn(L[oe]),F,Q,G,te,K,re,ue),oe++}}else if(oe>I)for(;oe<=S;)Ie(v[oe],G,te,!0),oe++;else{const W=oe,Q=oe,$=new Map;for(oe=Q;oe<=I;oe++){const be=L[oe]=ue?Ti(L[oe]):rn(L[oe]);be.key!=null&&$.set(be.key,oe)}let _e,fe=0;const Ee=I-Q+1;let Ae=!1,ce=0;const ye=new Array(Ee);for(oe=0;oe<Ee;oe++)ye[oe]=0;for(oe=W;oe<=S;oe++){const be=v[oe];if(fe>=Ee){Ie(be,G,te,!0);continue}let ve;if(be.key!=null)ve=$.get(be.key);else for(_e=Q;_e<=I;_e++)if(ye[_e-Q]===0&&yn(be,L[_e])){ve=_e;break}ve===void 0?Ie(be,G,te,!0):(ye[ve-Q]=oe+1,ve>=ce?ce=ve:Ae=!0,_(be,L[ve],F,null,G,te,K,re,ue),fe++)}const Fe=Ae?H_(ye):Nr;for(_e=Fe.length-1,oe=Ee-1;oe>=0;oe--){const be=Q+oe,ve=L[be],Ve=L[be+1],O=be+1<w?Ve.el||Ve.placeholder:ee;ye[oe]===0?_(null,ve,F,O,G,te,K,re,ue):Ae&&(_e<0||oe!==Fe[_e]?Re(ve,F,O,2):_e--)}}},Re=(v,L,F,ee,G=null)=>{const{el:te,type:K,transition:re,children:ue,shapeFlag:oe}=v;if(oe&6){Re(v.component.subTree,L,F,ee);return}if(oe&128){v.suspense.move(L,F,ee);return}if(oe&64){K.move(v,L,F,le);return}if(K===Rt){i(te,L,F);for(let S=0;S<ue.length;S++)Re(ue[S],L,F,ee);i(v.anchor,L,F);return}if(K===Lo){x(v,L,F);return}if(ee!==2&&oe&1&&re)if(ee===0)re.beforeEnter(te),i(te,L,F),Ct(()=>re.enter(te),G);else{const{leave:S,delayLeave:I,afterLeave:W}=re,Q=()=>{v.ctx.isUnmounted?r(te):i(te,L,F)},$=()=>{te._isLeaving&&te[jn](!0),S(te,()=>{Q(),W&&W()})};I?I(te,Q,$):$()}else i(te,L,F)},Ie=(v,L,F,ee=!1,G=!1)=>{const{type:te,props:K,ref:re,children:ue,dynamicChildren:oe,shapeFlag:w,patchFlag:S,dirs:I,cacheIndex:W}=v;if(S===-2&&(G=!1),re!=null&&(ni(),Hr(re,null,F,v,!0),ii()),W!=null&&(L.renderCache[W]=void 0),w&256){L.ctx.deactivate(v);return}const Q=w&1&&I,$=!Ci(v);let _e;if($&&(_e=K&&K.onVnodeBeforeUnmount)&&Xt(_e,L,v),w&6)ne(v.component,F,ee);else{if(w&128){v.suspense.unmount(F,ee);return}Q&&Pn(v,null,L,"beforeUnmount"),w&64?v.type.remove(v,L,F,le,ee):oe&&!oe.hasOnce&&(te!==Rt||S>0&&S&64)?ge(oe,L,F,!1,!0):(te===Rt&&S&384||!G&&w&16)&&ge(ue,L,F),ee&&Je(v)}($&&(_e=K&&K.onVnodeUnmounted)||Q)&&Ct(()=>{_e&&Xt(_e,L,v),Q&&Pn(v,null,L,"unmounted")},F)},Je=v=>{const{type:L,el:F,anchor:ee,transition:G}=v;if(L===Rt){je(F,ee);return}if(L===Lo){y(v);return}const te=()=>{r(F),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(v.shapeFlag&1&&G&&!G.persisted){const{leave:K,delayLeave:re}=G,ue=()=>K(F,te);re?re(v.el,te,ue):ue()}else te()},je=(v,L)=>{let F;for(;v!==L;)F=h(v),r(v),v=F;r(L)},ne=(v,L,F)=>{const{bum:ee,scope:G,job:te,subTree:K,um:re,m:ue,a:oe}=v;Ko(ue),Ko(oe),ee&&xs(ee),G.stop(),te&&(te.flags|=8,Ie(K,v,L,F)),re&&Ct(re,L),Ct(()=>{v.isUnmounted=!0},L)},ge=(v,L,F,ee=!1,G=!1,te=0)=>{for(let K=te;K<v.length;K++)Ie(v[K],L,F,ee,G)},B=v=>{if(v.shapeFlag&6)return B(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const L=h(v.anchor||v.el),F=L&&L[o_];return F?h(F):L};let se=!1;const ie=(v,L,F)=>{v==null?L._vnode&&Ie(L._vnode,null,null,!0):_(L._vnode||null,v,L,null,null,null,F),L._vnode=v,se||(se=!0,Vu(),$o(),se=!1)},le={p:_,um:Ie,m:Re,r:Je,mt:X,mc:D,pc:N,pbc:E,n:B,o:t};let Ne,De;return e&&([Ne,De]=e(le)),{render:ie,hydrate:Ne,createApp:P_(ie,Ne)}}function za({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ki({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function fp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function hp(t,e,n=!1){const i=t.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ti(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&hp(o,a)),a.type===or&&a.patchFlag!==-1&&(a.el=o.el),a.type===yt&&!a.el&&(a.el=o.el)}}function H_(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function dp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dp(e)}function Ko(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const k_=Symbol.for("v-scx"),z_=()=>Ft(k_);function V_(t,e){return xa(t,null,e)}function G_(t,e){return xa(t,null,{flush:"sync"})}function kr(t,e,n){return xa(t,e,n)}function xa(t,e,n=Qe){const{immediate:i,deep:r,flush:s,once:o}=n,a=Mt({},n),l=e&&i||!e&&s!=="post";let u;if(jr){if(s==="sync"){const d=z_();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Fn,d.resume=Fn,d.pause=Fn,d}}const c=Lt;a.call=(d,g,_)=>bn(d,c,g,_);let f=!1;s==="post"?a.scheduler=d=>{Ct(d,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():eu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const h=i_(t,e,a);return jr&&(u?u.push(h):l&&h()),h}function W_(t,e,n){const i=this.proxy,r=dt(t)?t.includes(".")?pp(i,t):()=>i[t]:t.bind(i,i);let s;ke(e)?s=e:(s=e.handler,n=e);const o=Ws(this),a=xa(r,s.bind(i),n);return o(),a}function pp(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function _R(t,e,n=Qe){const i=hi(),r=on(e),s=Fi(e),o=mp(t,r),a=Yg((l,u)=>{let c,f=Qe,h;return G_(()=>{const d=t[r];$t(c,d)&&(c=d,u())}),{get(){return l(),n.get?n.get(c):c},set(d){const g=n.set?n.set(d):d;if(!$t(g,c)&&!(f!==Qe&&$t(d,f)))return;const _=i.vnode.props;_&&(e in _||r in _||s in _)&&(`onUpdate:${e}`in _||`onUpdate:${r}`in _||`onUpdate:${s}`in _)||(c=d,u()),i.emit(`update:${e}`,g),$t(d,g)&&$t(d,f)&&!$t(g,h)&&u(),f=d,h=g}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||Qe:a,done:!1}:{done:!0}}}},a}const mp=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${on(e)}Modifiers`]||t[`${Fi(e)}Modifiers`];function X_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Qe;let r=n;const s=e.startsWith("update:"),o=s&&mp(i,e.slice(7));o&&(o.trim&&(r=n.map(c=>dt(c)?c.trim():c)),o.number&&(r=n.map(mg)));let a,l=i[a=Da(e)]||i[a=Da(on(e))];!l&&s&&(l=i[a=Da(Fi(e))]),l&&bn(l,t,6,r);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bn(u,t,6,r)}}const $_=new WeakMap;function gp(t,e,n=!1){const i=n?$_:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!ke(t)){const l=u=>{const c=gp(u,e,!0);c&&(a=!0,Mt(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ut(t)&&i.set(t,null),null):(He(s)?s.forEach(l=>o[l]=null):Mt(o,s),ut(t)&&i.set(t,o),o)}function ya(t,e){return!t||!Hs(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(t,e[0].toLowerCase()+e.slice(1))||nt(t,Fi(e))||nt(t,e))}function Va(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=t,m=qo(t);let p,T;try{if(n.shapeFlag&4){const y=r||i,b=y;p=rn(u.call(b,y,c,f,d,h,g)),T=a}else{const y=e;p=rn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),T=e.props?a:j_(a)}}catch(y){Ms.length=0,is(y,t,1),p=vt(yt)}let x=p;if(T&&_!==!1){const y=Object.keys(T),{shapeFlag:b}=x;y.length&&b&7&&(s&&y.some(Xc)&&(T=Y_(T,s)),x=si(x,T,!1,!0))}return n.dirs&&(x=si(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&Ii(x,n.transition),p=x,qo(m),p}function q_(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(cr(r)){if(r.type!==yt||r.children==="v-if"){if(n)return;n=r}}else return}return n}const j_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hs(n))&&((e||(e={}))[n]=t[n]);return e},Y_=(t,e)=>{const n={};for(const i in t)(!Xc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function K_(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Qu(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(o[h]!==i[h]&&!ya(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Qu(i,o,u):!0:!!o;return!1}function Qu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ya(n,s))return!0}return!1}function Sa({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Zo=t=>t.__isSuspense;let Hl=0;const Z_={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,u){if(t==null)J_(e,n,i,r,s,o,a,l,u);else{if(s&&s.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Q_(t,e,n,i,r,o,a,l,u)}},hydrate:ev,normalize:tv},lu=Z_;function Ls(t,e){const n=t.props&&t.props[e];ke(n)&&n()}function J_(t,e,n,i,r,s,o,a,l){const{p:u,o:{createElement:c}}=l,f=c("div"),h=t.suspense=_p(t,r,i,e,f,n,s,o,a,l);u(null,h.pendingBranch=t.ssContent,f,null,i,h,s,o),h.deps>0?(Ls(t,"onPending"),Ls(t,"onFallback"),u(null,t.ssFallback,e,n,i,null,s,o),zr(h,t.ssFallback)):h.resolve(!1,!0)}function Q_(t,e,n,i,r,s,o,a,{p:l,um:u,o:{createElement:c}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:_,isInFallback:m,isHydrating:p}=f;if(_)f.pendingBranch=h,yn(_,h)?(l(_,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(p||(l(g,d,n,i,r,null,s,o,a),zr(f,d)))):(f.pendingId=Hl++,p?(f.isHydrating=!1,f.activeBranch=_):u(_,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=c("div"),m?(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(g,d,n,i,r,null,s,o,a),zr(f,d))):g&&yn(g,h)?(l(g,h,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(g&&yn(g,h))l(g,h,n,i,r,f,s,o,a),zr(f,h);else if(Ls(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=Hl++,l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:T,pendingId:x}=f;T>0?setTimeout(()=>{f.pendingId===x&&f.fallback(d)},T):T===0&&f.fallback(d)}}function _p(t,e,n,i,r,s,o,a,l,u,c=!1){const{p:f,m:h,um:d,n:g,o:{parentNode:_,remove:m}}=u;let p;const T=nv(t);T&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const x=t.props?fd(t.props.timeout):void 0,y=s,b={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:Hl++,timeout:typeof x=="number"?x:-1,activeBranch:null,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(R=!1,P=!1){const{vnode:D,activeBranch:M,pendingBranch:E,pendingId:C,effects:U,parentComponent:k,container:X}=b;let J=!1;b.isHydrating?b.isHydrating=!1:R||(J=M&&E.transition&&E.transition.mode==="out-in",J&&(M.transition.afterLeave=()=>{C===b.pendingId&&(h(E,X,s===y?g(M):s,0),Il(U))}),M&&(_(M.el)===X&&(s=g(M)),d(M,k,b,!0)),J||h(E,X,s,0)),zr(b,E),b.pendingBranch=null,b.isInFallback=!1;let H=b.parent,Z=!1;for(;H;){if(H.pendingBranch){H.effects.push(...U),Z=!0;break}H=H.parent}!Z&&!J&&Il(U),b.effects=[],T&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!P&&e.resolve()),Ls(D,"onResolve")},fallback(R){if(!b.pendingBranch)return;const{vnode:P,activeBranch:D,parentComponent:M,container:E,namespace:C}=b;Ls(P,"onFallback");const U=g(D),k=()=>{b.isInFallback&&(f(null,R,E,U,M,null,C,a,l),zr(b,R))},X=R.transition&&R.transition.mode==="out-in";X&&(D.transition.afterLeave=k),b.isInFallback=!0,d(D,M,null,!0),X||k()},move(R,P,D){b.activeBranch&&h(b.activeBranch,R,P,D),b.container=R},next(){return b.activeBranch&&g(b.activeBranch)},registerDep(R,P,D){const M=!!b.pendingBranch;M&&b.deps++;const E=R.vnode.el;R.asyncDep.catch(C=>{is(C,R,0)}).then(C=>{if(R.isUnmounted||b.isUnmounted||b.pendingId!==R.suspenseId)return;R.asyncResolved=!0;const{vnode:U}=R;zl(R,C),E&&(U.el=E);const k=!E&&R.subTree.el;P(R,U,_(E||R.subTree.el),E?null:g(R.subTree),b,o,D),k&&m(k),Sa(R,U.el),M&&--b.deps===0&&b.resolve()})},unmount(R,P){b.isUnmounted=!0,b.activeBranch&&d(b.activeBranch,n,R,P),b.pendingBranch&&d(b.pendingBranch,n,R,P)}};return b}function ev(t,e,n,i,r,s,o,a,l){const u=e.suspense=_p(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),c=l(t,u.pendingBranch=e.ssContent,n,u,s,o);return u.deps===0&&u.resolve(!1,!0),c}function tv(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=ef(i?n.default:n),t.ssFallback=i?ef(n.fallback):vt(yt)}function ef(t){let e;if(ke(t)){const n=qr&&t._c;n&&(t._d=!1,dn()),t=t(),n&&(t._d=!0,e=qt,xp())}return He(t)&&(t=q_(t)),t=rn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function vp(t,e){e&&e.pendingBranch?He(t)?e.effects.push(...t):e.effects.push(t):Il(t)}function zr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,Sa(i,r))}function nv(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Rt=Symbol.for("v-fgt"),or=Symbol.for("v-txt"),yt=Symbol.for("v-cmt"),Lo=Symbol.for("v-stc"),Ms=[];let qt=null;function dn(t=!1){Ms.push(qt=t?null:[])}function xp(){Ms.pop(),qt=Ms[Ms.length-1]||null}let qr=1;function Jo(t,e=!1){qr+=t,t<0&&qt&&e&&(qt.hasOnce=!0)}function yp(t){return t.dynamicChildren=qr>0?qt||Nr:null,xp(),qr>0&&qt&&qt.push(t),t}function Sp(t,e,n,i,r,s){return yp(Qo(t,e,n,i,r,s,!0))}function Kn(t,e,n,i,r){return yp(vt(t,e,n,i,r,!0))}function cr(t){return t?t.__v_isVNode===!0:!1}function yn(t,e){return t.type===e.type&&t.key===e.key}const Ep=({key:t})=>t??null,Do=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?dt(t)||St(t)||ke(t)?{i:zt,r:t,k:e,f:!!n}:t:null);function Qo(t,e=null,n=null,i=0,r=null,s=t===Rt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ep(e),ref:e&&Do(e),scopeId:Od,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:zt};return a?(cu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=dt(n)?8:16),qr>0&&!o&&qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&qt.push(l),l}const vt=iv;function iv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Kd)&&(t=yt),cr(t)){const a=si(t,e,!0);return n&&cu(a,n),qr>0&&!s&&qt&&(a.shapeFlag&6?qt[qt.indexOf(t)]=a:qt.push(a)),a.patchFlag=-2,a}if(fv(t)&&(t=t.__vccOpts),e){e=Mp(e);let{class:a,style:l}=e;a&&!dt(a)&&(e.class=pa(a)),ut(l)&&(Qc(l)&&!He(l)&&(l=Mt({},l)),e.style=da(l))}const o=dt(t)?1:Zo(t)?128:Bd(t)?64:ut(t)?4:ke(t)?2:0;return Qo(t,e,n,i,r,o,s,!0)}function Mp(t){return t?Qc(t)||rp(t)?Mt({},t):t:null}function si(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,u=e?bp(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ep(u),ref:e&&e.ref?n&&s?He(s)?s.concat(Do(e)):[s,Do(e)]:Do(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Rt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&si(t.ssContent),ssFallback:t.ssFallback&&si(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ii(c,l.clone(c)),c}function Tp(t=" ",e=0){return vt(or,null,t,e)}function vR(t="",e=!1){return e?(dn(),Kn(yt,null,t)):vt(yt,null,t)}function rn(t){return t==null||typeof t=="boolean"?vt(yt):He(t)?vt(Rt,null,t.slice()):cr(t)?Ti(t):vt(or,null,String(t))}function Ti(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:si(t)}function cu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(He(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),cu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!rp(e)?e._ctx=zt:r===3&&zt&&(zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:zt},n=32):(e=String(e),i&64?(n=16,e=[Tp(e)]):n=8);t.children=e,t.shapeFlag|=n}function bp(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=pa([e.class,i.class]));else if(r==="style")e.style=da([e.style,i.style]);else if(Hs(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Xt(t,e,n,i=null){bn(t,e,7,[n,i])}const rv=tp();let sv=0;function ov(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||rv,s={uid:sv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new md(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:op(i,r),emitsOptions:gp(i,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=X_.bind(null,s),t.ce&&t.ce(s),s}let Lt=null;const hi=()=>Lt||zt;let ea,kl;{const t=ha(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ea=e("__VUE_INSTANCE_SETTERS__",n=>Lt=n),kl=e("__VUE_SSR_SETTERS__",n=>jr=n)}const Ws=t=>{const e=Lt;return ea(t),t.scope.on(),()=>{t.scope.off(),ea(e)}},tf=()=>{Lt&&Lt.scope.off(),ea(null)};function Ap(t){return t.vnode.shapeFlag&4}let jr=!1;function av(t,e=!1,n=!1){e&&kl(e);const{props:i,children:r}=t.vnode,s=Ap(t);L_(t,i,s,e),N_(t,r,n||e);const o=s?lv(t,e):void 0;return e&&kl(!1),o}function lv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,M_);const{setup:i}=n;if(i){ni();const r=t.setupContext=i.length>1?uv(t):null,s=Ws(t),o=zs(i,t,0,[t.props,r]),a=ad(o);if(ii(),s(),(a||t.sp)&&!Ci(t)&&iu(t),a){if(o.then(tf,tf),e)return o.then(l=>{zl(t,l)}).catch(l=>{is(l,t,0)});t.asyncDep=o}else zl(t,o)}else wp(t)}function zl(t,e,n){ke(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ut(e)&&(t.setupState=Id(e)),wp(t)}function wp(t,e,n){const i=t.type;t.render||(t.render=i.render||Fn);{const r=Ws(t);ni();try{T_(t)}finally{ii(),r()}}}const cv={get(t,e){return Ut(t,"get",""),t[e]}};function uv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cv),slots:t.slots,emit:t.emit,expose:e}}function uu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Id(Wg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Es)return Es[n](t)},has(e,n){return n in e||n in Es}})):t.proxy}function Vl(t,e=!0){return ke(t)?t.displayName||t.name:t.name||e&&t.__name}function fv(t){return ke(t)&&"__vccOpts"in t}const mn=(t,e)=>t_(t,e,jr);function Nt(t,e,n){const i=(s,o,a)=>{Jo(-1);try{return vt(s,o,a)}finally{Jo(1)}},r=arguments.length;return r===2?ut(e)&&!He(e)?cr(e)?i(t,null,[e]):i(t,e):i(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&cr(n)&&(n=[n]),i(t,e,n))}const hv="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gl;const nf=typeof window<"u"&&window.trustedTypes;if(nf)try{Gl=nf.createPolicy("vue",{createHTML:t=>t})}catch{}const Rp=Gl?t=>Gl.createHTML(t):t=>t,dv="http://www.w3.org/2000/svg",pv="http://www.w3.org/1998/Math/MathML",qn=typeof document<"u"?document:null,rf=qn&&qn.createElement("template"),mv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?qn.createElementNS(dv,t):e==="mathml"?qn.createElementNS(pv,t):n?qn.createElement(t,{is:n}):qn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>qn.createTextNode(t),createComment:t=>qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{rf.innerHTML=Rp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=rf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pi="transition",ls="animation",Yr=Symbol("_vtc"),Cp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pp=Mt({},kd,Cp),gv=t=>(t.displayName="Transition",t.props=Pp,t),_v=gv((t,{slots:e})=>Nt(l_,Lp(t),e)),zi=(t,e=[])=>{He(t)?t.forEach(n=>n(...e)):t&&t(...e)},sf=t=>t?He(t)?t.some(e=>e.length>1):t.length>1:!1;function Lp(t){const e={};for(const U in t)U in Cp||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,g=vv(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:T,onEnterCancelled:x,onLeave:y,onLeaveCancelled:b,onBeforeAppear:R=p,onAppear:P=T,onAppearCancelled:D=x}=e,M=(U,k,X,J)=>{U._enterCancelled=J,Ei(U,k?c:a),Ei(U,k?u:o),X&&X()},E=(U,k)=>{U._isLeaving=!1,Ei(U,f),Ei(U,d),Ei(U,h),k&&k()},C=U=>(k,X)=>{const J=U?P:T,H=()=>M(k,U,X);zi(J,[k,H]),of(()=>{Ei(k,U?l:s),Rn(k,U?c:a),sf(J)||af(k,i,_,H)})};return Mt(e,{onBeforeEnter(U){zi(p,[U]),Rn(U,s),Rn(U,o)},onBeforeAppear(U){zi(R,[U]),Rn(U,l),Rn(U,u)},onEnter:C(!1),onAppear:C(!0),onLeave(U,k){U._isLeaving=!0;const X=()=>E(U,k);Rn(U,f),U._enterCancelled?(Rn(U,h),Wl()):(Wl(),Rn(U,h)),of(()=>{U._isLeaving&&(Ei(U,f),Rn(U,d),sf(y)||af(U,i,m,X))}),zi(y,[U,X])},onEnterCancelled(U){M(U,!1,void 0,!0),zi(x,[U])},onAppearCancelled(U){M(U,!0,void 0,!0),zi(D,[U])},onLeaveCancelled(U){E(U),zi(b,[U])}})}function vv(t){if(t==null)return null;if(ut(t))return[Ga(t.enter),Ga(t.leave)];{const e=Ga(t);return[e,e]}}function Ga(t){return fd(t)}function Rn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Yr]||(t[Yr]=new Set)).add(e)}function Ei(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Yr];n&&(n.delete(e),n.size||(t[Yr]=void 0))}function of(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let xv=0;function af(t,e,n,i){const r=t._endId=++xv,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Dp(t,e);if(!o)return i();const u=o+"end";let c=0;const f=()=>{t.removeEventListener(u,h),s()},h=d=>{d.target===t&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),t.addEventListener(u,h)}function Dp(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${pi}Delay`),s=i(`${pi}Duration`),o=lf(r,s),a=i(`${ls}Delay`),l=i(`${ls}Duration`),u=lf(a,l);let c=null,f=0,h=0;e===pi?o>0&&(c=pi,f=o,h=s.length):e===ls?u>0&&(c=ls,f=u,h=l.length):(f=Math.max(o,u),c=f>0?o>u?pi:ls:null,h=c?c===pi?s.length:l.length:0);const d=c===pi&&/\b(?:transform|all)(?:,|$)/.test(i(`${pi}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:d}}function lf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>cf(n)+cf(t[i])))}function cf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Wl(){return document.body.offsetHeight}function yv(t,e,n){const i=t[Yr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const uf=Symbol("_vod"),Sv=Symbol("_vsh"),Ev=Symbol(""),Mv=/(?:^|;)\s*display\s*:/;function Tv(t,e,n){const i=t.style,r=dt(n);let s=!1;if(n&&!r){if(e)if(dt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Io(i,a,"")}else for(const o in e)n[o]==null&&Io(i,o,"");for(const o in n)o==="display"&&(s=!0),Io(i,o,n[o])}else if(r){if(e!==n){const o=i[Ev];o&&(n+=";"+o),i.cssText=n,s=Mv.test(n)}}else e&&t.removeAttribute("style");uf in t&&(t[uf]=s?i.display:"",t[Sv]&&(i.display="none"))}const ff=/\s*!important$/;function Io(t,e,n){if(He(n))n.forEach(i=>Io(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=bv(t,e);ff.test(n)?t.setProperty(Fi(i),n.replace(ff,""),"important"):t[i]=n}}const hf=["Webkit","Moz","ms"],Wa={};function bv(t,e){const n=Wa[e];if(n)return n;let i=on(e);if(i!=="filter"&&i in t)return Wa[e]=i;i=fa(i);for(let r=0;r<hf.length;r++){const s=hf[r]+i;if(s in t)return Wa[e]=s}return e}const df="http://www.w3.org/1999/xlink";function pf(t,e,n,i,r,s=Eg(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(df,e.slice(6,e.length)):t.setAttributeNS(df,e,n):n==null||s&&!hd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":ci(n)?String(n):n)}function mf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Rp(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=hd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Av(t,e,n,i){t.addEventListener(e,n,i)}function wv(t,e,n,i){t.removeEventListener(e,n,i)}const gf=Symbol("_vei");function Rv(t,e,n,i,r=null){const s=t[gf]||(t[gf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Cv(e);if(i){const u=s[e]=Dv(i,r);Av(t,a,u,l)}else o&&(wv(t,a,o,l),s[e]=void 0)}}const _f=/(?:Once|Passive|Capture)$/;function Cv(t){let e;if(_f.test(t)){e={};let i;for(;i=t.match(_f);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fi(t.slice(2)),e]}let Xa=0;const Pv=Promise.resolve(),Lv=()=>Xa||(Pv.then(()=>Xa=0),Xa=Date.now());function Dv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;bn(Iv(i,n.value),e,5,[i])};return n.value=t,n.attached=Lv(),n}function Iv(t,e){if(He(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const vf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Uv=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?yv(t,i,o):e==="style"?Tv(t,n,i):Hs(e)?Xc(e)||Rv(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nv(t,e,i,o))?(mf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&pf(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!dt(i))?mf(t,on(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),pf(t,e,i,o))};function Nv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&vf(e)&&ke(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return vf(e)&&dt(n)?!1:e in t}const Ip=new WeakMap,Up=new WeakMap,ta=Symbol("_moveCb"),xf=Symbol("_enterCb"),Fv=t=>(delete t.props.mode,t),Ov=Fv({name:"TransitionGroup",props:Mt({},Pp,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=hi(),i=Hd();let r,s;return ru(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!zv(r[0].el,n.vnode.el,o)){r=[];return}r.forEach(Bv),r.forEach(Hv);const a=r.filter(kv);Wl(),a.forEach(l=>{const u=l.el,c=u.style;Rn(u,o),c.transform=c.webkitTransform=c.transitionDuration="";const f=u[ta]=h=>{h&&h.target!==u||(!h||h.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",f),u[ta]=null,Ei(u,o))};u.addEventListener("transitionend",f)}),r=[]}),()=>{const o=Ye(t),a=Lp(o);let l=o.tag||Rt;if(r=[],s)for(let u=0;u<s.length;u++){const c=s[u];c.el&&c.el instanceof Element&&(r.push(c),Ii(c,Ps(c,a,i,n)),Ip.set(c,c.el.getBoundingClientRect()))}s=e.default?nu(e.default()):[];for(let u=0;u<s.length;u++){const c=s[u];c.key!=null&&Ii(c,Ps(c,a,i,n))}return vt(l,null,s)}}}),xR=Ov;function Bv(t){const e=t.el;e[ta]&&e[ta](),e[xf]&&e[xf]()}function Hv(t){Up.set(t,t.el.getBoundingClientRect())}function kv(t){const e=Ip.get(t),n=Up.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function zv(t,e,n){const i=t.cloneNode(),r=t[Yr];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=Dp(i);return s.removeChild(i),o}const Np=Mt({patchProp:Uv},mv);let Ts,yf=!1;function Vv(){return Ts||(Ts=O_(Np))}function Gv(){return Ts=yf?Ts:B_(Np),yf=!0,Ts}const Wv=((...t)=>{const e=Vv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Op(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Fp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e}),Xv=((...t)=>{const e=Gv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Op(i);if(r)return n(r,!0,Fp(r))},e});function Fp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Op(t){return dt(t)?document.querySelector(t):t}const $v=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,qv=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,jv=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Yv(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){Kv(t);return}return e}function Kv(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function na(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!jv.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if($v.test(t)||qv.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,Yv)}return JSON.parse(t)}catch(i){if(e.strict)throw i;return t}}const Zv=/#/g,Jv=/&/g,Qv=/\//g,e0=/=/g,fu=/\+/g,t0=/%5e/gi,n0=/%60/gi,i0=/%7c/gi,r0=/%20/gi;function s0(t){return encodeURI(""+t).replace(i0,"|")}function Xl(t){return s0(typeof t=="string"?t:JSON.stringify(t)).replace(fu,"%2B").replace(r0,"+").replace(Zv,"%23").replace(Jv,"%26").replace(n0,"`").replace(t0,"^").replace(Qv,"%2F")}function $a(t){return Xl(t).replace(e0,"%3D")}function ia(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function o0(t){return ia(t.replace(fu," "))}function a0(t){return ia(t.replace(fu," "))}function Bp(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=o0(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=a0(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function l0(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${$a(t)}=${Xl(n)}`).join("&"):`${$a(t)}=${Xl(e)}`:$a(t)}function c0(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>l0(e,t[e])).filter(Boolean).join("&")}const u0=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,f0=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,h0=/^([/\\]\s*){2,}[^/\\]/,d0=/^[\s\0]*(blob|data|javascript|vbscript):$/i,p0=/\/$|\/\?|\/#/,m0=/^\.?\//;function dr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?u0.test(t):f0.test(t)||(e.acceptRelative?h0.test(t):!1)}function g0(t){return!!t&&d0.test(t)}function $l(t="",e){return e?p0.test(t):t.endsWith("/")}function Ds(t="",e){if(!e)return($l(t)?t.slice(0,-1):t)||"/";if(!$l(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");r!==-1&&(n=t.slice(0,r),i=t.slice(r));const[s,...o]=n.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function _0(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if($l(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");if(r!==-1&&(n=t.slice(0,r),i=t.slice(r),!n))return i;const[s,...o]=n.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function v0(t,e){if(kp(e)||dr(t))return t;const n=Ds(e);return t.startsWith(n)?t:hu(n,t)}function Sf(t,e){if(kp(e))return t;const n=Ds(e);if(!t.startsWith(n))return t;const i=t.slice(n.length);return i[0]==="/"?i:"/"+i}function Hp(t,e){const n=Gp(t),i={...Bp(n.search),...e};return n.search=c0(i),S0(n)}function kp(t){return!t||t==="/"}function x0(t){return t&&t!=="/"}function hu(t,...e){let n=t||"";for(const i of e.filter(r=>x0(r)))if(n){const r=i.replace(m0,"");n=_0(n)+r}else n=i;return n}function zp(...t){const e=/\/(?!\/)/,n=t.filter(Boolean),i=[];let r=0;for(const o of n)if(!(!o||o==="/")){for(const[a,l]of o.split(e).entries())if(!(!l||l===".")){if(l===".."){if(i.length===1&&dr(i[0]))continue;i.pop(),r--;continue}if(a===1&&i[i.length-1]?.endsWith(":/")){i[i.length-1]+="/"+l;continue}i.push(l),r++}}let s=i.join("/");return r>=0?n[0]?.startsWith("/")&&!s.startsWith("/")?s="/"+s:n[0]?.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,n[n.length-1]?.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function y0(t,e){return ia(Ds(t))===ia(Ds(e))}const Vp=Symbol.for("ufo:protocolRelative");function Gp(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,h=""]=n;return{protocol:f.toLowerCase(),pathname:h,href:f+h,auth:"",host:"",search:"",hash:""}}if(!dr(t,{acceptRelative:!0}))return Ef(t);const[,i="",r,s=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:c}=Ef(a);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:u,hash:c,[Vp]:!i}}function Ef(t=""){const[e="",n="",i=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:i}}function S0(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",i=t.hash||"",r=t.auth?t.auth+"@":"",s=t.host||"";return(t.protocol||t[Vp]?(t.protocol||"")+"//":"")+r+s+e+n+i}class E0 extends Error{constructor(e,n){super(e,n),this.name="FetchError",n?.cause&&!this.cause&&(this.cause=n.cause)}}function M0(t){const e=t.error?.message||t.error?.toString()||"",n=t.request?.method||t.options?.method||"GET",i=t.request?.url||String(t.request)||"/",r=`[${n}] ${JSON.stringify(i)}`,s=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${r}: ${s}${e?` ${e}`:""}`,a=new E0(o,t.error?{cause:t.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(a,l,{get(){return t[l]}});for(const[l,u]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,l,{get(){return t.response&&t.response[u]}});return a}const T0=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Mf(t="GET"){return T0.has(t.toUpperCase())}function b0(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const A0=new Set(["image/svg","application/xml","application/xhtml","application/html"]),w0=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function R0(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return w0.test(e)?"json":A0.has(e)||e.startsWith("text/")?"text":"blob"}function C0(t,e,n,i){const r=P0(e?.headers??t?.headers,n?.headers,i);let s;return(n?.query||n?.params||e?.params||e?.query)&&(s={...n?.params,...n?.query,...e?.params,...e?.query}),{...n,...e,query:s,params:s,headers:r}}function P0(t,e,n){if(!e)return new n(t);const i=new n(e);if(t)for(const[r,s]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))i.set(r,s);return i}async function oo(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const L0=new Set([408,409,425,429,500,502,503,504]),D0=new Set([101,204,205,304]);function Wp(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:i=globalThis.AbortController}=t;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let c;typeof a.options.retry=="number"?c=a.options.retry:c=Mf(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(c>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):L0.has(f))){const h=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return h>0&&await new Promise(d=>setTimeout(d,h)),s(a.request,{...a.options,retry:c-1})}}const u=M0(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,s),u}const s=async function(l,u={}){const c={request:l,options:C0(l,u,t.defaults,n),response:void 0,error:void 0};c.options.method&&(c.options.method=c.options.method.toUpperCase()),c.options.onRequest&&await oo(c,c.options.onRequest),typeof c.request=="string"&&(c.options.baseURL&&(c.request=v0(c.request,c.options.baseURL)),c.options.query&&(c.request=Hp(c.request,c.options.query),delete c.options.query),"query"in c.options&&delete c.options.query,"params"in c.options&&delete c.options.params),c.options.body&&Mf(c.options.method)&&(b0(c.options.body)?(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers||{}),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")):("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half")));let f;if(!c.options.signal&&c.options.timeout){const d=new i;f=setTimeout(()=>{const g=new Error("[TimeoutError]: The operation was aborted due to timeout");g.name="TimeoutError",g.code=23,d.abort(g)},c.options.timeout),c.options.signal=d.signal}try{c.response=await e(c.request,c.options)}catch(d){return c.error=d,c.options.onRequestError&&await oo(c,c.options.onRequestError),await r(c)}finally{f&&clearTimeout(f)}if((c.response.body||c.response._bodyInit)&&!D0.has(c.response.status)&&c.options.method!=="HEAD"){const d=(c.options.parseResponse?"json":c.options.responseType)||R0(c.response.headers.get("content-type")||"");switch(d){case"json":{const g=await c.response.text(),_=c.options.parseResponse||na;c.response._data=_(g);break}case"stream":{c.response._data=c.response.body||c.response._bodyInit;break}default:c.response._data=await c.response[d]()}}return c.options.onResponse&&await oo(c,c.options.onResponse),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await oo(c,c.options.onResponseError),await r(c)):c.response},o=async function(l,u){return(await s(l,u))._data};return o.raw=s,o.native=(...a)=>e(...a),o.create=(a={},l={})=>Wp({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const ra=(function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")})(),I0=ra.fetch?(...t)=>ra.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),U0=ra.Headers,N0=ra.AbortController,F0=Wp({fetch:I0,Headers:U0,AbortController:N0}),O0=F0,B0=()=>window?.__NUXT__?.config||window?.useNuxtApp?.().payload?.config,du=()=>B0().app,H0=()=>du().baseURL,k0=()=>du().buildAssetsDir,pu=(...t)=>zp(Xp(),k0(),...t),Xp=(...t)=>{const e=du(),n=e.cdnURL||e.baseURL;return t.length?zp(n,...t):n};globalThis.__buildAssetsURL=pu,globalThis.__publicAssetsURL=Xp;globalThis.$fetch||(globalThis.$fetch=O0.create({baseURL:H0()}));"global"in globalThis||(globalThis.global=globalThis);function ql(t,e={},n){for(const i in t){const r=t[i],s=n?`${n}:${i}`:i;typeof r=="object"&&r!==null?ql(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const z0={run:t=>t()},V0=()=>z0,$p=typeof console.createTask<"u"?console.createTask:V0;function G0(t,e){const n=e.shift(),i=$p(n);return t.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function W0(t,e){const n=e.shift(),i=$p(n);return Promise.all(t.map(r=>i.run(()=>r(...e))))}function qa(t,e){for(const n of[...t])n(e)}class X0{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,i={}){if(!e||typeof n!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,n(...s));return i=this.hook(e,r),i}removeHook(e,n){if(this._hooks[e]){const i=this._hooks[e].indexOf(n);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=ql(e),i=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const n=ql(e);for(const i in n)this.removeHook(i,n[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(G0,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(W0,e,...n)}callHookWith(e,n,...i){const r=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&qa(this._before,r);const s=e(n in this._hooks?[...this._hooks[n]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&qa(this._after,r)}):(this._after&&r&&qa(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function qp(){return new X0}function $0(t={}){let e,n=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;jl.add(u);try{const c=r?r.run(o,a):a();return n||(e=void 0),await c}finally{jl.delete(u)}}}}function q0(t={}){const e={};return{get(n,i={}){return e[n]||(e[n]=$0({...t,...i})),e[n]}}}const sa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Tf="__unctx__",j0=sa[Tf]||(sa[Tf]=q0()),Y0=(t,e={})=>j0.get(t,e),bf="__unctx_async_handlers__",jl=sa[bf]||(sa[bf]=new Set);function Vr(t){const e=[];for(const r of jl){const s=r();s&&e.push(s)}const n=()=>{for(const r of e)r()};let i=t();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw n(),r})),[i,n]}const Af={name:"page-transition",mode:"out-in"},K0={name:"layout-transition",mode:"out-in"},Z0=!1,wf={id:"__nuxt-loader"},yR={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},J0="#__nuxt",jp="nuxt-app",Rf=36e5,Q0="vite:preloadError";function Yp(t=jp){return Y0(t,{asyncContext:!1})}const ex="__nuxt_plugin";function tx(t){let e=0;const n={_id:t.id||jp||"nuxt-app",_scope:Tg(),provide:void 0,versions:{get nuxt(){return"4.1.1"},get vue(){return n.vueApp.version}},payload:Dn({...t.ssrContext?.payload||{},data:Dn({}),state:Oi({}),once:new Set,_errors:Dn({})}),static:{data:{}},runWithContext(r){return n._scope.active&&!gd()?n._scope.run(()=>Cf(n,r)):Cf(n,r)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Dn({}),_payloadRevivers:{},...t};{const r=window.__NUXT__;if(r)for(const s in r)switch(s){case"data":case"state":case"_errors":Object.assign(n.payload[s],r[s]);break;default:n.payload[s]=r[s]}}n.hooks=qp(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(r,s)=>{const o="$"+r;ao(n,o,s),ao(n.vueApp.config.globalProperties,o,s)},ao(n.vueApp,"$nuxt",n),ao(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(Q0,s=>{n.callHook("app:chunkError",{error:s.payload}),s.payload.message.includes("Unable to preload CSS")&&s.preventDefault()}),window.useNuxtApp||=Tt;const r=n.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});n.hook("app:mounted",r)}const i=n.payload.config;return n.provide("config",i),n}function nx(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function ix(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const i in n)t.provide(i,n[i])}}async function rx(t,e){const n=new Set,i=[],r=[];let s,o=0;async function a(l){const u=l.dependsOn?.filter(c=>e.some(f=>f._name===c)&&!n.has(c))??[];if(u.length>0)i.push([new Set(u),l]);else{const c=ix(t,l).then(async()=>{l._name&&(n.add(l._name),await Promise.all(i.map(async([f,h])=>{f.has(l._name)&&(f.delete(l._name),f.size===0&&(o++,await a(h)))})))}).catch(f=>{if(!l.parallel&&!t.payload.error)throw f;s||=f});l.parallel?r.push(c):await c}}for(const l of e)nx(t,l);for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s)throw t.payload.error||s}function di(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[ex]:!0,_name:e})}function Cf(t,e,n){const i=()=>e();return Yp(t._id).set(t),t.vueApp.runWithContext(i)}function sx(t){let e;return su()&&(e=hi()?.appContext.app.$nuxt),e||=Yp(t).tryUse(),e||null}function Tt(t){const e=sx(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Ea(t){return Tt().$config}function ao(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function ox(t,e){return{ctx:{table:t},matchAll:n=>Zp(n,t)}}function Kp(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([i,r])=>[i,Kp(r)])):new Map(Object.entries(t[n]));return e}function ax(t){return ox(Kp(t))}function Zp(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const i=[];for(const[s,o]of Pf(e.wildcard))(t===s||t.startsWith(s+"/"))&&i.push(o);for(const[s,o]of Pf(e.dynamic))if(t.startsWith(s+"/")){const a="/"+t.slice(s.length).split("/").splice(2).join("/");i.push(...Zp(a,o))}const r=e.static.get(t);return r&&i.push(r),i.filter(Boolean)}function Pf(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function ja(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Yl(t,e,n=".",i){if(!ja(e))return Yl(t,{},n,i);const r=Object.assign({},e);for(const s in t){if(s==="__proto__"||s==="constructor")continue;const o=t[s];o!=null&&(i&&i(r,s,o,n)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:ja(o)&&ja(r[s])?r[s]=Yl(o,r[s],(n?`${n}.`:"")+s.toString(),i):r[s]=o))}return r}function lx(t){return(...e)=>e.reduce((n,i)=>Yl(n,i,"",t),{})}const Jp=lx();function cx(t,e){try{return e in t}catch{return!1}}class Lf extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,n={}){super(e,n),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Kl(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Qp(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function ux(t){if(typeof t=="string")return new Lf(t);if(fx(t))return t;const e=new Lf(t.message??t.statusMessage??"",{cause:t.cause||t});if(cx(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Kl(t.statusCode,e.statusCode):t.status&&(e.statusCode=Kl(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Qp(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function fx(t){return t?.constructor?.__h3_error__===!0}const hx=/[^\u0009\u0020-\u007E]/g;function Qp(t=""){return t.replace(hx,"")}function Kl(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const em=Symbol("layout-meta"),ur=Symbol("route");import.meta.url.replace(/\/app\/.*$/,"/");const an=()=>Tt()?.$router,Ma=()=>su()?Ft(ur,Tt()._route):Tt()._route;const dx=()=>{try{if(Tt()._processingMiddleware)return!0}catch{return!1}return!1},SR=(t,e)=>{t||="/";const n=typeof t=="string"?t:"path"in t?px(t):an().resolve(t).href;if(e?.open){const{target:l="_blank",windowFeatures:u={}}=e.open,c=Object.entries(u).filter(([f,h])=>h!==void 0).map(([f,h])=>`${f.toLowerCase()}=${h}`).join(", ");return open(n,l,c),Promise.resolve()}const i=dr(n,{acceptRelative:!0}),r=e?.external||i;if(r){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&g0(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const s=dx();if(!r&&s){if(e?.replace){if(typeof t=="string"){const{pathname:l,search:u,hash:c}=Gp(t);return{path:l,...u&&{query:Bp(u)},...c&&{hash:c},replace:!0}}return{...t,replace:!0}}return t}const o=an(),a=Tt();return r?(a._scope.stop(),e?.replace?location.replace(n):location.href=n,s?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e?.replace?o.replace(t):o.push(t)};function px(t){return Hp(t.path||"",t.query||{})+(t.hash||"")}const tm="__nuxt_error",Ta=()=>Jg(Tt().payload,"error"),Ki=t=>{const e=ar(t);try{const n=Tt(),i=Ta();n.hooks.callHook("app:error",e),i.value||=e}catch{throw e}return e},mx=async(t={})=>{const e=Tt(),n=Ta();e.callHook("app:error:cleared",t),t.redirect&&await an().replace(t.redirect),n.value=void 0},nm=t=>!!t&&typeof t=="object"&&tm in t,ar=t=>{const e=ux(t);return Object.defineProperty(e,tm,{value:!0,configurable:!1,writable:!1}),e};function gx(t){const e=vx(t),n=new ArrayBuffer(e.length),i=new DataView(n);for(let r=0;r<n.byteLength;r++)i.setUint8(r,e.charCodeAt(r));return n}const _x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function vx(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,i=0;for(let r=0;r<t.length;r++)n<<=6,n|=_x.indexOf(t[r]),i+=6,i===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=i=0);return i===12?(n>>=4,e+=String.fromCharCode(n)):i===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const xx=-1,yx=-2,Sx=-3,Ex=-4,Mx=-5,Tx=-6;function bx(t,e){return Ax(JSON.parse(t),e)}function Ax(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,i=Array(n.length);function r(s,o=!1){if(s===xx)return;if(s===Sx)return NaN;if(s===Ex)return 1/0;if(s===Mx)return-1/0;if(s===Tx)return-0;if(o||typeof s!="number")throw new Error("Invalid input");if(s in i)return i[s];const a=n[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e?.[l];if(u)return i[s]=u(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const c=new Set;i[s]=c;for(let d=1;d<a.length;d+=1)c.add(r(a[d]));break;case"Map":const f=new Map;i[s]=f;for(let d=1;d<a.length;d+=2)f.set(r(a[d]),r(a[d+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const h=Object.create(null);i[s]=h;for(let d=1;d<a.length;d+=2)h[a[d]]=r(a[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[l],g=new d(r(a[1]));i[s]=a[2]!==void 0?g.subarray(a[2],a[3]):g;break}case"ArrayBuffer":{const d=a[1],g=gx(d);i[s]=g;break}case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{const d=l.slice(9);i[s]=Temporal[d].from(a[1]);break}case"URL":{const d=new URL(a[1]);i[s]=d;break}case"URLSearchParams":{const d=new URLSearchParams(a[1]);i[s]=d;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let u=0;u<a.length;u+=1){const c=a[u];c!==yx&&(l[u]=r(c))}}else{const l={};i[s]=l;for(const u in a){if(u==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");const c=a[u];l[u]=r(c)}}return i[s]}return r(0)}const wx=new Set(["link","style","script","noscript"]),Rx=new Set(["title","titleTemplate","script","style","noscript"]),Df=new Set(["base","meta","link","style","script","noscript"]),Cx=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Px=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Lx=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),Dx=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Ix=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),Ux=["name","property","http-equiv"],Nx=new Set(["viewport","description","keywords","robots"]);function im(t){const e=t.split(":");return e.length?Ix.has(e[1]):!1}function Zl(t){const{props:e,tag:n}=t;if(Px.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const i of Ux)if(e[i]!==void 0){const r=e[i],s=r.includes(":"),o=Nx.has(r),l=!(s||o)&&t.key?`:key:${t.key}`:"";return`${n}:${r}${l}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(Rx.has(n)){const i=t.textContent||t.innerHTML;if(i)return`${n}:content:${i}`}}function If(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([i,r])=>`${i}:${String(r)}`).join(",")}`}function oa(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let r;if(e&&(r=e(n,t)),Array.isArray(r))return r.map(s=>oa(s,e));if(r?.constructor===Object){const s={};for(const o of Object.keys(r))s[o]=oa(r[o],e,o);return s}return r}function Fx(t,e){const n=t==="style"?new Map:new Set;function i(r){const s=r.trim();if(s)if(t==="style"){const[o,...a]=s.split(":").map(l=>l.trim());o&&a.length&&n.set(o,a.join(":"))}else s.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(i):i(e):Array.isArray(e)?e.forEach(r=>i(r)):e&&typeof e=="object"&&Object.entries(e).forEach(([r,s])=>{s&&s!=="false"&&(t==="style"?n.set(r.trim(),s):i(r))}),n}function rm(t,e){return t.props=t.props||{},e?t.tag==="templateParams"?(t.props=e,t):(Object.entries(e).forEach(([n,i])=>{if(i===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=Fx(n,i);return}if(Lx.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof i=="object"){let o=e.type;if(e.type||(o="application/json"),!o?.endsWith("json")&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(i)}else t[n]=i;return}const r=String(i),s=n.startsWith("data-");r==="true"||r===""?t.props[n]=s?r:!0:!i&&s&&r==="false"?t.props[n]="false":i!==void 0&&(t.props[n]=i)}),t):t}function Ox(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},i=rm({tag:t,props:{}},n);return i.key&&wx.has(i.tag)&&(i.props["data-hid"]=i._h=i.key),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function Bx(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(r,s)=>{for(let o=0;o<e.length;o++)s=e[o](r,s);return s};t=n(void 0,t);const i=[];return t=oa(t,n),Object.entries(t||{}).forEach(([r,s])=>{if(s!==void 0)for(const o of Array.isArray(s)?s:[s])i.push(Ox(r,o))}),i.flat()}const Uf=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Nf={base:-10,title:10},Hx={critical:-8,high:-1,low:2},Ff={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},kx=/@import/,cs=t=>t===""||t===!0;function zx(t,e){if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const i=Hx[e.tagPriority]||0,r=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Ff;if(e.tag in Nf)n=Nf[e.tag];else if(e.tag==="meta"){const s=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;s&&(n=Ff.meta[s])}else e.tag==="link"&&e.props.rel?n=r.link[e.props.rel]:e.tag==="script"?cs(e.props.async)?n=r.script.async:e.props.src&&!cs(e.props.defer)&&!cs(e.props.async)&&e.props.type!=="module"&&!e.props.type?.endsWith("json")?n=r.script.sync:cs(e.props.defer)&&e.props.src&&!cs(e.props.async)&&(n=r.script.defer):e.tag==="style"&&(n=e.innerHTML&&kx.test(e.innerHTML)?r.style.imported:r.style.sync);return(n||100)+i}function Of(t,e){const n=typeof e=="function"?e(t):e,i=n.key||String(t.plugins.size+1);t.plugins.get(i)||(t.plugins.set(i,n),t.hooks.addHooks(n.hooks||{}))}function Vx(t={}){const e=qp();e.addHooks(t.hooks||{});const n=!t.document,i=new Map,r=new Map,s=new Set,o={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:i,headEntries(){return[...i.values()]},use:a=>Of(o,a),push(a,l){const u={...l||{}};delete u.head;const c=u._index??o._entryCount++,f={_i:c,input:a,options:u},h={_poll(d=!1){o.dirty=!0,!d&&s.add(c),e.callHook("entries:updated",o)},dispose(){i.delete(c)&&o.invalidate()},patch(d){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(f.input=d,i.set(c,f),h._poll())}};return h.patch(a),h},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);s.size;){const h=s.values().next().value;s.delete(h);const d=i.get(h);if(d){const g={tags:Bx(d.input,t.propResolvers||[]).map(_=>Object.assign(_,d.options)),entry:d};await e.callHook("entries:normalize",g),d._tags=g.tags.map((_,m)=>(_._w=zx(o,_),_._p=(d._i<<10)+m,_._d=Zl(_),_))}}let l=!1;a.entries.flatMap(h=>(h._tags||[]).map(d=>({...d,props:{...d.props}}))).sort(Uf).reduce((h,d)=>{const g=String(d._d||d._p);if(!h.has(g))return h.set(g,d);const _=h.get(g);if((d?.tagDuplicateStrategy||(Dx.has(d.tag)?"merge":null)||(d.key&&d.key===_.key?"merge":null))==="merge"){const p={..._.props};Object.entries(d.props).forEach(([T,x])=>p[T]=T==="style"?new Map([..._.props.style||new Map,...x]):T==="class"?new Set([..._.props.class||new Set,...x]):x),h.set(g,{...d,props:p})}else d._p>>10===_._p>>10&&d.tag==="meta"&&im(g)?(h.set(g,Object.assign([...Array.isArray(_)?_:[_],d],d)),l=!0):(d._w===_._w?d._p>_._p:d?._w<_?._w)&&h.set(g,d);return h},a.tagMap);const u=a.tagMap.get("title"),c=a.tagMap.get("titleTemplate");if(o._title=u?.textContent,c){const h=c?.textContent;if(o._titleTemplate=h,h){let d=typeof h=="function"?h(u?.textContent):h;typeof d=="string"&&!o.plugins.has("template-params")&&(d=d.replace("%s",u?.textContent||"")),u?d===null?a.tagMap.delete("title"):a.tagMap.set("title",{...u,textContent:d}):(c.tag="title",c.textContent=d)}}a.tags=Array.from(a.tagMap.values()),l&&(a.tags=a.tags.flat().sort(Uf)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const f=[];for(const h of a.tags){const{innerHTML:d,tag:g,props:_}=h;if(Cx.has(g)&&!(Object.keys(_).length===0&&!h.innerHTML&&!h.textContent)&&!(g==="meta"&&!_.content&&!_["http-equiv"]&&!_.charset)){if(g==="script"&&d){if(_.type?.endsWith("json")){const m=typeof d=="string"?d:JSON.stringify(d);h.innerHTML=m.replace(/</g,"\\u003C")}else typeof d=="string"&&(h.innerHTML=d.replace(new RegExp(`</${g}`,"g"),`<\\/${g}`));h._d=Zl(h)}f.push(h)}}return f},invalidate(){for(const a of i.values())s.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(t?.plugins||[]).forEach(a=>Of(o,a)),o.hooks.callHook("init",o),t.init?.forEach(a=>a&&o.push(a)),o}const Gx=(t,e)=>St(e)?$g(e):e,sm="usehead";function Wx(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(sm,t)}}.install}function Xx(){if(su()){const t=Ft(sm);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function ER(t,e={}){const n=e.head||Xx();return n.ssr?n.push(t||{},e):$x(n,t,e)}function $x(t,e,n={}){const i=Qn(!1);let r;return V_(()=>{const o=i.value?{}:oa(e,Gx);r?r.patch(o):r=t.push(o,n)}),hi()&&(Gs(()=>{r.dispose()}),Xd(()=>{i.value=!0}),Wd(()=>{i.value=!1})),r}const qx="modulepreload",jx=function(t,e){return new URL(t,e).href},Bf={},tn=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let u=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=u(n.map(c=>{if(c=jx(c,i),c in Bf)return;Bf[c]=!0;const f=c.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!i)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===c&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":qx,f||(g.as="script"),g.crossOrigin="",g.href=c,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};let Uo,No;function Yx(){return Uo=$fetch(pu(`builds/meta/${Ea().app.buildId}.json`),{responseType:"json"}),Uo.then(t=>{No=ax(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Uo}function ba(){return Uo||Yx()}async function mu(t){const e=typeof t=="string"?t:t.path;if(await ba(),!No)return console.error("[nuxt] Error creating app manifest matcher.",No),{};try{return Jp({},...No.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function Hf(t,e={}){if(!await am(t))return null;const i=await Zx(t,e);return await om(i)||null}const Kx="_payload.json";async function Zx(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||dr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const i=Ea(),r=e.hash||(e.fresh?Date.now():i.app.buildId),s=i.app.cdnURL,o=s&&await am(t)?s:i.app.baseURL;return hu(o,n.pathname,Kx+(r?`?${r}`:""))}async function om(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(lm));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function am(t=Ma().path){const e=Tt();return t=Ds(t),(await ba()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const i=await mu({path:t});return!!i.prerender&&!i.redirect})}let Vi=null;async function Jx(){if(Vi)return Vi;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await lm(t.textContent||""),n=t.dataset.src?await om(t.dataset.src):void 0;return Vi={...e,...n,...window.__NUXT__},Vi.config?.public&&(Vi.config.public=Oi(Vi.config.public)),Vi}async function lm(t){return await bx(t,Tt()._payloadRevivers)}function Qx(t,e){Tt()._payloadRevivers[t]=e}const ey=[["NuxtError",t=>ar(t)],["EmptyShallowRef",t=>lr(t==="_"?void 0:t==="0n"?BigInt(0):na(t))],["EmptyRef",t=>Qn(t==="_"?void 0:t==="0n"?BigInt(0):na(t))],["ShallowRef",t=>lr(t)],["ShallowReactive",t=>Dn(t)],["Ref",t=>Qn(t)],["Reactive",t=>Oi(t)]],ty=di({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[i,r]of ey)Qx(i,r);Object.assign(t.payload,([e,n]=Vr(()=>t.runWithContext(Jx)),e=await e,n(),e)),delete window.__NUXT__}});async function gu(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const i={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async r=>{const s=new Map,o=new Promise(d=>{t.resolveTags().then(g=>{d(g.map(_=>{const m=s.get(_._d)||0,p={tag:_,id:(m?`${_._d}:${m}`:_._d)||If(_),shouldRender:!0};return _._d&&im(_._d)&&s.set(_._d,m+1),p}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const d of["body","head"]){const g=n[d]?.children;for(const _ of g){const m=_.tagName.toLowerCase();if(!Df.has(m))continue;const p=rm({tag:m,props:{}},{innerHTML:_.innerHTML,..._.getAttributeNames().reduce((T,x)=>(T[x]=_.getAttribute(x),T),{})||{}});if(p.key=_.getAttribute("data-hid")||void 0,p._d=Zl(p)||If(p),a.elMap.has(p._d)){let T=1,x=p._d;for(;a.elMap.has(x);)x=`${p._d}:${T++}`;a.elMap.set(x,_)}else a.elMap.set(p._d,_)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(d,g,_){const m=`${d}:${g}`;a.sideEffects[m]=_,delete a.pendingSideEffects[m]}function u({id:d,$el:g,tag:_}){const m=_.tag.endsWith("Attrs");a.elMap.set(d,g),m||(_.textContent&&_.textContent!==g.textContent&&(g.textContent=_.textContent),_.innerHTML&&_.innerHTML!==g.innerHTML&&(g.innerHTML=_.innerHTML),l(d,"el",()=>{g?.remove(),a.elMap.delete(d)}));for(const p in _.props){if(!Object.prototype.hasOwnProperty.call(_.props,p))continue;const T=_.props[p];if(p.startsWith("on")&&typeof T=="function"){const y=g?.dataset;if(y&&y[`${p}fired`]){const b=p.slice(0,-5);T.call(g,new Event(b.substring(2)))}g.getAttribute(`data-${p}`)!==""&&((_.tag==="bodyAttrs"?n.defaultView:g).addEventListener(p.substring(2),T.bind(g)),g.setAttribute(`data-${p}`,""));continue}const x=`attr:${p}`;if(p==="class"){if(!T)continue;for(const y of T)m&&l(d,`${x}:${y}`,()=>g.classList.remove(y)),!g.classList.contains(y)&&g.classList.add(y)}else if(p==="style"){if(!T)continue;for(const[y,b]of T)l(d,`${x}:${y}`,()=>{g.style.removeProperty(y)}),g.style.setProperty(y,b)}else T!==!1&&T!==null&&(g.getAttribute(p)!==T&&g.setAttribute(p,T===!0?"":String(T)),m&&l(d,x,()=>g.removeAttribute(p)))}}const c=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},h=await o;for(const d of h){const{tag:g,shouldRender:_,id:m}=d;if(_){if(g.tag==="title"){n.title=g.textContent,l("title","",()=>n.title=a.title);continue}d.$el=d.$el||a.elMap.get(m),d.$el?u(d):Df.has(g.tag)&&c.push(d)}}for(const d of c){const g=d.tag.tagPosition||"head";d.$el=n.createElement(d.tag.tag),u(d),f[g]=f[g]||n.createDocumentFragment(),f[g].appendChild(d.$el)}for(const d of h)await t.hooks.callHook("dom:renderTag",d,n,l);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const d in a.pendingSideEffects)a.pendingSideEffects[d]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:h}),r()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function ny(t={}){const e=t.domOptions?.render||gu;t.document=t.document||(typeof window<"u"?document:void 0);const n=t.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1;return Vx({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function iy(t,e){let n=0;return()=>{const i=++n;e(()=>{n===i&&t()})}}function ry(t={}){const e=ny({domOptions:{render:iy(()=>gu(e),n=>setTimeout(n,0))},...t});return e.install=Wx(e),e}const sy={disableDefaults:!0},oy=di({name:"nuxt:head",enforce:"pre",setup(t){const e=ry(sy);t.vueApp.use(e);{let n=!0;const i=async()=>{n=!1,await gu(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||i()}),t.hooks.hook("app:error",i),t.hooks.hook("app:suspense:resolve",i)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Dr=typeof document<"u";function cm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ay(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cm(t.default)}const tt=Object.assign;function Ya(t,e){const n={};for(const i in e){const r=e[i];n[i]=An(r)?r.map(t):t(r)}return n}const bs=()=>{},An=Array.isArray,um=/#/g,ly=/&/g,cy=/\//g,uy=/=/g,fy=/\?/g,fm=/\+/g,hy=/%5B/g,dy=/%5D/g,hm=/%5E/g,py=/%60/g,dm=/%7B/g,my=/%7C/g,pm=/%7D/g,gy=/%20/g;function _u(t){return encodeURI(""+t).replace(my,"|").replace(hy,"[").replace(dy,"]")}function _y(t){return _u(t).replace(dm,"{").replace(pm,"}").replace(hm,"^")}function Jl(t){return _u(t).replace(fm,"%2B").replace(gy,"+").replace(um,"%23").replace(ly,"%26").replace(py,"`").replace(dm,"{").replace(pm,"}").replace(hm,"^")}function vy(t){return Jl(t).replace(uy,"%3D")}function xy(t){return _u(t).replace(um,"%23").replace(fy,"%3F")}function yy(t){return t==null?"":xy(t).replace(cy,"%2F")}function Is(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Sy=/\/$/,Ey=t=>t.replace(Sy,"");function Ka(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Ay(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Is(o)}}function My(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ty(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Kr(e.matched[i],n.matched[r])&&mm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Kr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!by(t[n],e[n]))return!1;return!0}function by(t,e){return An(t)?zf(t,e):An(e)?zf(e,t):t===e}function zf(t,e){return An(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Ay(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Us;(function(t){t.pop="pop",t.push="push"})(Us||(Us={}));var As;(function(t){t.back="back",t.forward="forward",t.unknown=""})(As||(As={}));function wy(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ey(t)}const Ry=/^[^#]+#/;function Cy(t,e){return t.replace(Ry,"#")+e}function Py(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Aa=()=>({left:window.scrollX,top:window.scrollY});function Ly(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Py(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Vf(t,e){return(history.state?history.state.position-e:-1)+t}const Ql=new Map;function Dy(t,e){Ql.set(t,e)}function Iy(t){const e=Ql.get(t);return Ql.delete(t),e}let Uy=()=>location.protocol+"//"+location.host;function gm(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),kf(l,"")}return kf(n,t)+i+r}function Ny(t,e,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=gm(t,location),g=n.value,_=e.value;let m=0;if(h){if(n.value=d,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(d);r.forEach(p=>{p(n.value,g,{delta:m,type:Us.pop,direction:m?m>0?As.forward:As.back:As.unknown})})};function l(){o=n.value}function u(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function c(){const{history:h}=window;h.state&&h.replaceState(tt({},h.state,{scroll:Aa()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function Gf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Aa():null}}function Fy(t){const{history:e,location:n}=window,i={value:gm(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Uy()+t+l;try{e[c?"replaceState":"pushState"](u,"",h),r.value=u}catch(d){console.error(d),n[c?"replace":"assign"](h)}}function o(l,u){const c=tt({},e.state,Gf(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});s(l,c,!0),i.value=l}function a(l,u){const c=tt({},r.value,e.state,{forward:l,scroll:Aa()});s(c.current,c,!0);const f=tt({},Gf(i.value,l,null),{position:c.position+1},u);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Oy(t){t=wy(t);const e=Fy(t),n=Ny(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=tt({location:"",base:t,go:i,createHref:Cy.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function By(t){return typeof t=="string"||t&&typeof t=="object"}function _m(t){return typeof t=="string"||typeof t=="symbol"}const vm=Symbol("");var Wf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wf||(Wf={}));function Zr(t,e){return tt(new Error,{type:t,[vm]:!0},e)}function Hn(t,e){return t instanceof Error&&vm in t&&(e==null||!!(t.type&e))}const Xf="[^/]+?",Hy={sensitive:!1,strict:!1,start:!0,end:!0},ky=/[.+*?^${}()[\]/\\]/g;function zy(t,e){const n=tt({},Hy,e),i=[];let r=n.start?"^":"";const s=[];for(const u of t){const c=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const h=u[f];let d=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(ky,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=h;s.push({name:g,repeatable:_,optional:m});const T=p||Xf;if(T!==Xf){d+=10;try{new RegExp(`(${T})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+y.message)}}let x=_?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;f||(x=m&&u.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),r+=x,d+=20,m&&(d+=-8),_&&(d+=-20),T===".*"&&(d+=-50)}c.push(d)}i.push(c)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let h=1;h<c.length;h++){const d=c[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(u){let c="",f=!1;for(const h of t){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const d of h)if(d.type===0)c+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in u?u[g]:"";if(An(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=An(p)?p.join("/"):p;if(!T)if(m)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);c+=T}}return c||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Vy(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function xm(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=Vy(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if($f(i))return 1;if($f(r))return-1}return r.length-i.length}function $f(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Gy={type:0,value:""},Wy=/[a-zA-Z0-9_]/;function Xy(t){if(!t)return[[]];if(t==="/")return[[Gy]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${u}": ${d}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,u="",c="";function f(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:Wy.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function $y(t,e,n){const i=zy(Xy(t.path),n),r=tt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function qy(t,e){const n=[],i=new Map;e=Kf({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const g=!d,_=jf(f);_.aliasOf=d&&d.record;const m=Kf(e,f),p=[_];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const b of y)p.push(jf(tt({},_,{components:d?d.record.components:_.components,path:b,aliasOf:d?d.record:_})))}let T,x;for(const y of p){const{path:b}=y;if(h&&b[0]!=="/"){const R=h.record.path,P=R[R.length-1]==="/"?"":"/";y.path=h.record.path+(b&&P+b)}if(T=$y(y,h,m),d?d.alias.push(T):(x=x||T,x!==T&&x.alias.push(T),g&&f.name&&!Yf(T)&&o(f.name)),ym(T)&&l(T),_.children){const R=_.children;for(let P=0;P<R.length;P++)s(R[P],T,d&&d.children[P])}d=d||T}return x?()=>{o(x)}:bs}function o(f){if(_m(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const h=Ky(f,n);n.splice(h,0,f),f.record.name&&!Yf(f)&&i.set(f.record.name,f)}function u(f,h){let d,g={},_,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw Zr(1,{location:f});m=d.record.name,g=tt(qf(h.params,d.keys.filter(x=>!x.optional).concat(d.parent?d.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),f.params&&qf(f.params,d.keys.map(x=>x.name))),_=d.stringify(g)}else if(f.path!=null)_=f.path,d=n.find(x=>x.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=h.name?i.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw Zr(1,{location:f,currentLocation:h});m=d.record.name,g=tt({},h.params,f.params),_=d.stringify(g)}const p=[];let T=d;for(;T;)p.unshift(T.record),T=T.parent;return{name:m,path:_,params:g,matched:p,meta:Yy(p)}}t.forEach(f=>s(f));function c(){n.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:r}}function qf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function jf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:jy(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function jy(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Yf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Yy(t){return t.reduce((e,n)=>tt(e,n.meta),{})}function Kf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Ky(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;xm(t,e[s])<0?i=s:n=s+1}const r=Zy(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function Zy(t){let e=t;for(;e=e.parent;)if(ym(e)&&xm(t,e)===0)return e}function ym({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Jy(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(fm," "),o=s.indexOf("="),a=Is(o<0?s:s.slice(0,o)),l=o<0?null:Is(s.slice(o+1));if(a in e){let u=e[a];An(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Zf(t){let e="";for(let n in t){const i=t[n];if(n=vy(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(An(i)?i.map(s=>s&&Jl(s)):[i&&Jl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Qy(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=An(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const eS=Symbol(""),Jf=Symbol(""),vu=Symbol(""),xu=Symbol(""),ec=Symbol("");function us(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function bi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=h=>{h===!1?l(Zr(4,{from:n,to:e})):h instanceof Error?l(h):By(h)?l(Zr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},c=s(()=>t.call(i&&i.instances[r],e,n,u));let f=Promise.resolve(c);t.length<3&&(f=f.then(u)),f.catch(h=>l(h))})}function Za(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(cm(l)){const c=(l.__vccOpts||l)[e];c&&s.push(bi(c,n,i,o,a,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=ay(c)?c.default:c;o.mods[a]=c,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&bi(d,n,i,o,a,r)()}))}}return s}function Qf(t){const e=Ft(vu),n=Ft(xu),i=mn(()=>{const l=ht(t.to);return e.resolve(l)}),r=mn(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],f=n.matched;if(!c||!f.length)return-1;const h=f.findIndex(Kr.bind(null,c));if(h>-1)return h;const d=eh(l[u-2]);return u>1&&eh(c)===d&&f[f.length-1].path!==d?f.findIndex(Kr.bind(null,l[u-2])):h}),s=mn(()=>r.value>-1&&sS(n.params,i.value.params)),o=mn(()=>r.value>-1&&r.value===n.matched.length-1&&mm(n.params,i.value.params));function a(l={}){if(rS(l)){const u=e[ht(t.replace)?"replace":"push"](ht(t.to)).catch(bs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:mn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function tS(t){return t.length===1?t[0]:t}const nS=ui({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Qf,setup(t,{slots:e}){const n=Oi(Qf(t)),{options:i}=Ft(vu),r=mn(()=>({[th(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[th(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&tS(e.default(n));return t.custom?s:Nt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),iS=nS;function rS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sS(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!An(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function eh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const th=(t,e,n)=>t??e??n,oS=ui({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Ft(ec),r=mn(()=>t.route||i.value),s=Ft(Jf,0),o=mn(()=>{let u=ht(s);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=mn(()=>r.value.matched[o.value]);Pi(Jf,mn(()=>o.value+1)),Pi(eS,a),Pi(ec,r);const l=Qn();return kr(()=>[l.value,a.value,t.name],([u,c,f],[h,d,g])=>{c&&(c.instances[f]=u,d&&d!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),u&&c&&(!d||!Kr(c,d)||!h)&&(c.enterCallbacks[f]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=r.value,c=t.name,f=a.value,h=f&&f.components[c];if(!h)return nh(n.default,{Component:h,route:u});const d=f.props[c],g=d?d===!0?u.params:typeof d=="function"?d(u):d:null,m=Nt(h,tt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return nh(n.default,{Component:m,route:u})||m}}});function nh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Sm=oS;function aS(t){const e=qy(t.routes,t),n=t.parseQuery||Jy,i=t.stringifyQuery||Zf,r=t.history,s=us(),o=us(),a=us(),l=lr(hn);let u=hn;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ya.bind(null,B=>""+B),f=Ya.bind(null,yy),h=Ya.bind(null,Is);function d(B,se){let ie,le;return _m(B)?(ie=e.getRecordMatcher(B),le=se):le=B,e.addRoute(le,ie)}function g(B){const se=e.getRecordMatcher(B);se&&e.removeRoute(se)}function _(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,se){if(se=tt({},se||l.value),typeof B=="string"){const L=Ka(n,B,se.path),F=e.resolve({path:L.path},se),ee=r.createHref(L.fullPath);return tt(L,F,{params:h(F.params),hash:Is(L.hash),redirectedFrom:void 0,href:ee})}let ie;if(B.path!=null)ie=tt({},B,{path:Ka(n,B.path,se.path).path});else{const L=tt({},B.params);for(const F in L)L[F]==null&&delete L[F];ie=tt({},B,{params:f(L)}),se.params=f(se.params)}const le=e.resolve(ie,se),Ne=B.hash||"";le.params=c(h(le.params));const De=My(i,tt({},B,{hash:_y(Ne),path:le.path})),v=r.createHref(De);return tt({fullPath:De,hash:Ne,query:i===Zf?Qy(B.query):B.query||{}},le,{redirectedFrom:void 0,href:v})}function T(B){return typeof B=="string"?Ka(n,B,l.value.path):tt({},B)}function x(B,se){if(u!==B)return Zr(8,{from:se,to:B})}function y(B){return P(B)}function b(B){return y(tt(T(B),{replace:!0}))}function R(B){const se=B.matched[B.matched.length-1];if(se&&se.redirect){const{redirect:ie}=se;let le=typeof ie=="function"?ie(B):ie;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=T(le):{path:le},le.params={}),tt({query:B.query,hash:B.hash,params:le.path!=null?{}:B.params},le)}}function P(B,se){const ie=u=p(B),le=l.value,Ne=B.state,De=B.force,v=B.replace===!0,L=R(ie);if(L)return P(tt(T(L),{state:typeof L=="object"?tt({},Ne,L.state):Ne,force:De,replace:v}),se||ie);const F=ie;F.redirectedFrom=se;let ee;return!De&&Ty(i,le,ie)&&(ee=Zr(16,{to:F,from:le}),Re(le,le,!0,!1)),(ee?Promise.resolve(ee):E(F,le)).catch(G=>Hn(G)?Hn(G,2)?G:Se(G):N(G,F,le)).then(G=>{if(G){if(Hn(G,2))return P(tt({replace:v},T(G.to),{state:typeof G.to=="object"?tt({},Ne,G.to.state):Ne,force:De}),se||F)}else G=U(F,le,!0,v,Ne);return C(F,le,G),G})}function D(B,se){const ie=x(B,se);return ie?Promise.reject(ie):Promise.resolve()}function M(B){const se=je.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(B):B()}function E(B,se){let ie;const[le,Ne,De]=lS(B,se);ie=Za(le.reverse(),"beforeRouteLeave",B,se);for(const L of le)L.leaveGuards.forEach(F=>{ie.push(bi(F,B,se))});const v=D.bind(null,B,se);return ie.push(v),ge(ie).then(()=>{ie=[];for(const L of s.list())ie.push(bi(L,B,se));return ie.push(v),ge(ie)}).then(()=>{ie=Za(Ne,"beforeRouteUpdate",B,se);for(const L of Ne)L.updateGuards.forEach(F=>{ie.push(bi(F,B,se))});return ie.push(v),ge(ie)}).then(()=>{ie=[];for(const L of De)if(L.beforeEnter)if(An(L.beforeEnter))for(const F of L.beforeEnter)ie.push(bi(F,B,se));else ie.push(bi(L.beforeEnter,B,se));return ie.push(v),ge(ie)}).then(()=>(B.matched.forEach(L=>L.enterCallbacks={}),ie=Za(De,"beforeRouteEnter",B,se,M),ie.push(v),ge(ie))).then(()=>{ie=[];for(const L of o.list())ie.push(bi(L,B,se));return ie.push(v),ge(ie)}).catch(L=>Hn(L,8)?L:Promise.reject(L))}function C(B,se,ie){a.list().forEach(le=>M(()=>le(B,se,ie)))}function U(B,se,ie,le,Ne){const De=x(B,se);if(De)return De;const v=se===hn,L=Dr?history.state:{};ie&&(le||v?r.replace(B.fullPath,tt({scroll:v&&L&&L.scroll},Ne)):r.push(B.fullPath,Ne)),l.value=B,Re(B,se,ie,v),Se()}let k;function X(){k||(k=r.listen((B,se,ie)=>{if(!ne.listening)return;const le=p(B),Ne=R(le);if(Ne){P(tt(Ne,{replace:!0,force:!0}),le).catch(bs);return}u=le;const De=l.value;Dr&&Dy(Vf(De.fullPath,ie.delta),Aa()),E(le,De).catch(v=>Hn(v,12)?v:Hn(v,2)?(P(tt(T(v.to),{force:!0}),le).then(L=>{Hn(L,20)&&!ie.delta&&ie.type===Us.pop&&r.go(-1,!1)}).catch(bs),Promise.reject()):(ie.delta&&r.go(-ie.delta,!1),N(v,le,De))).then(v=>{v=v||U(le,De,!1),v&&(ie.delta&&!Hn(v,8)?r.go(-ie.delta,!1):ie.type===Us.pop&&Hn(v,20)&&r.go(-1,!1)),C(le,De,v)}).catch(bs)}))}let J=us(),H=us(),Z;function N(B,se,ie){Se(B);const le=H.list();return le.length?le.forEach(Ne=>Ne(B,se,ie)):console.error(B),Promise.reject(B)}function he(){return Z&&l.value!==hn?Promise.resolve():new Promise((B,se)=>{J.add([B,se])})}function Se(B){return Z||(Z=!B,X(),J.list().forEach(([se,ie])=>B?ie(B):se()),J.reset()),B}function Re(B,se,ie,le){const{scrollBehavior:Ne}=t;if(!Dr||!Ne)return Promise.resolve();const De=!ie&&Iy(Vf(B.fullPath,0))||(le||!ie)&&history.state&&history.state.scroll||null;return $r().then(()=>Ne(B,se,De)).then(v=>v&&Ly(v)).catch(v=>N(v,B,se))}const Ie=B=>r.go(B);let Je;const je=new Set,ne={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:t,push:y,replace:b,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:he,install(B){const se=this;B.component("RouterLink",iS),B.component("RouterView",Sm),B.config.globalProperties.$router=se,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>ht(l)}),Dr&&!Je&&l.value===hn&&(Je=!0,y(r.location).catch(Ne=>{}));const ie={};for(const Ne in hn)Object.defineProperty(ie,Ne,{get:()=>l.value[Ne],enumerable:!0});B.provide(vu,se),B.provide(xu,Dn(ie)),B.provide(ec,l);const le=B.unmount;je.add(B),B.unmount=function(){je.delete(B),je.size<1&&(u=hn,k&&k(),k=null,l.value=hn,Je=!1,Z=!1),le()}}};function ge(B){return B.reduce((se,ie)=>se.then(()=>M(ie)),Promise.resolve())}return ne}function lS(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>Kr(u,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Kr(u,l))||r.push(l))}return[n,i,r]}function Em(t){return Ft(xu)}const cS=/(:\w+)\([^)]+\)/g,uS=/(:\w+)[?+*]/g,fS=/:\w+/g,hS=(t,e)=>e.path.replace(cS,"$1").replace(uS,"$1").replace(fS,n=>t.params[n.slice(1)]?.toString()||""),tc=(t,e)=>{const n=t.route.matched.find(r=>r.components?.default===t.Component.type),i=e??n?.meta.key??(n&&hS(t.route,n));return typeof i=="function"?i(t.route):i},dS=(t,e)=>({default:()=>t?Nt(m_,t===!0?{}:t,e):e});function yu(t){return Array.isArray(t)?t:[t]}const Ja=[{name:"3",path:"/3",component:()=>tn(()=>import("./D-h8PhuD.js"),[],import.meta.url)},{name:"404",path:"/404",component:()=>tn(()=>import("./BULIggwE.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)},{name:"none",path:"/none",component:()=>tn(()=>import("./DLq01jyl.js"),[],import.meta.url)},{name:"about",path:"/about",component:()=>tn(()=>import("./BDgl6561.js"),__vite__mapDeps([4,5,1,2,6]),import.meta.url)},{name:"index",path:"/",component:()=>tn(()=>import("./pMfZxIeP.js"),__vite__mapDeps([7,2,8]),import.meta.url)},{name:"projects",path:"/projects",component:()=>tn(()=>import("./B9Jrd39W.js"),__vite__mapDeps([9,1,2,10,11,12,13]),import.meta.url)},{name:"projects-ProjectCard",path:"/projects/ProjectCard",component:()=>tn(()=>import("./D8fXTTjx.js"),__vite__mapDeps([11,2,12]),import.meta.url)},{name:"projects-WorkProjects",path:"/projects/WorkProjects",component:()=>tn(()=>import("./B3YltPFo.js"),[],import.meta.url)},{name:"projects-ProjectDetail",path:"/projects/ProjectDetail",component:()=>tn(()=>import("./wTpFISMN.js"),__vite__mapDeps([14,2,15]),import.meta.url)},{name:"projects-PersonalProjects",path:"/projects/PersonalProjects",component:()=>tn(()=>import("./DRo2fHHm.js"),[],import.meta.url)}],Mm=(t,e)=>({default:()=>t?Nt(_v,t===!0?{}:t,e):e.default?.()}),pS=/(:\w+)\([^)]+\)/g,mS=/(:\w+)[?+*]/g,gS=/:\w+/g;function ih(t){const e=t?.meta.key??t.path.replace(pS,"$1").replace(mS,"$1").replace(gS,n=>t.params[n.slice(1)]?.toString()||"");return typeof e=="function"?e(t):e}function _S(t,e){return t===e||e===hn?!1:ih(t)!==ih(e)?!0:!t.matched.every((i,r)=>i.components&&i.components.default===e.matched[r]?.components?.default)}const vS={scrollBehavior(t,e,n){const i=Tt(),r=an().options?.scrollBehaviorType??"auto";if(t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Tm(t.hash),behavior:r}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;const o=i._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(a=>{if(e===hn){a(rh(t,e,n,r));return}i.hooks.hookOnce(o,()=>{requestAnimationFrame(()=>a(rh(t,e,n,r)))})})}};function Tm(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function rh(t,e,n,i){if(n)return n;const r=_S(t,e);return t.hash?{el:t.hash,top:Tm(t.hash),behavior:r?i:"instant"}:{left:0,top:0}}const xS={hashMode:!1,scrollBehaviorType:"auto"},mi={...xS,...vS},yS=async(t,e)=>{let n,i;if(!t.meta?.validate)return;const r=([n,i]=Vr(()=>Promise.resolve(t.meta.validate(t))),n=await n,i(),n);if(r===!0)return;const s=ar({fatal:!0,statusCode:r&&r.statusCode||404,statusMessage:r&&r.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),s},SS=async t=>{let e,n;const i=([e,n]=Vr(()=>mu({path:t.path})),e=await e,n(),e);if(i.redirect)return dr(i.redirect,{acceptRelative:!0})?(window.location.href=i.redirect,!1):i.redirect},ES=[yS,SS],nc={};function MS(t,e,n){const{pathname:i,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){const u=s.includes(t.slice(o))?t.slice(o).length:1;let c=s.slice(u);return c[0]!=="/"&&(c="/"+c),Sf(c,"")}const a=Sf(i,t),l=!n||y0(a,n)?a:n;return l+(l.includes("?")?"":r)+s}const TS=di({name:"nuxt:router",enforce:"pre",async setup(t){let e,n,i=Ea().app.baseURL;const r=mi.history?.(i)??Oy(i),s=mi.routes?([e,n]=Vr(()=>mi.routes(Ja)),e=await e,n(),e??Ja):Ja;let o;const a=aS({...mi,scrollBehavior:(m,p,T)=>{if(p===hn){o=T;return}if(mi.scrollBehavior){if(a.options.scrollBehavior=mi.scrollBehavior,"scrollRestoration"in window.history){const x=a.beforeEach(()=>{x(),window.history.scrollRestoration="manual"})}return mi.scrollBehavior(m,hn,o||T)}},history:r,routes:s});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=lr(a.currentRoute.value);a.afterEach((m,p)=>{l.value=p}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=MS(i,window.location,t.payload.path),c=lr(a.currentRoute.value),f=()=>{c.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((m,p)=>{m.matched[m.matched.length-1]?.components?.default===p.matched[p.matched.length-1]?.components?.default&&f()});const h={};for(const m in c.value)Object.defineProperty(h,m,{get:()=>c.value[m],enumerable:!0});t._route=Dn(h),t._middleware||={global:[],named:{}};const d=Ta();a.afterEach(async(m,p,T)=>{delete t._processingMiddleware,!t.isHydrating&&d.value&&await t.runWithContext(mx),T&&await t.callHook("page:loading:end")});try{[e,n]=Vr(()=>a.isReady()),await e,n()}catch(m){[e,n]=Vr(()=>t.runWithContext(()=>Ki(m))),await e,n()}const g=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const _=t.payload.state._layout;return a.beforeEach(async(m,p)=>{await t.callHook("page:loading:start"),m.meta=Oi(m.meta),t.isHydrating&&_&&!ri(m.meta.layout)&&(m.meta.layout=_),t._processingMiddleware=!0;{const T=new Set([...ES,...t._middleware.global]);for(const x of m.matched){const y=x.meta.middleware;if(y)for(const b of yu(y))T.add(b)}{const x=await t.runWithContext(()=>mu({path:m.path}));if(x.appMiddleware)for(const y in x.appMiddleware)x.appMiddleware[y]?T.add(y):T.delete(y)}for(const x of T){const y=typeof x=="string"?t._middleware.named[x]||await nc[x]?.().then(b=>b.default||b):x;if(!y)throw new Error(`Unknown route middleware: '${x}'.`);try{const b=await t.runWithContext(()=>y(m,p));if(!t.payload.serverRendered&&t.isHydrating&&(b===!1||b instanceof Error)){const R=b||ar({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Ki(R)),!1}if(b===!0)continue;if(b===!1)return b;if(b)return nm(b)&&b.fatal&&await t.runWithContext(()=>Ki(b)),b}catch(b){const R=ar(b);return R.fatal&&await t.runWithContext(()=>Ki(R)),R}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(m=>{if(m.matched.length===0)return t.runWithContext(()=>Ki(ar({statusCode:404,fatal:!1,statusMessage:`Page not found: ${m.fullPath}`,data:{path:m.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in g&&(g.name=void 0),await a.replace({...g,force:!0}),a.options.scrollBehavior=mi.scrollBehavior}catch(m){await t.runWithContext(()=>Ki(m))}}),{provide:{router:a}}}}),sh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),MR=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Su=t=>{const e=Tt();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{sh(()=>t())}):sh(()=>t())},bS=di({name:"nuxt:payload",setup(t){const e=new Set;an().beforeResolve(async(n,i)=>{if(n.path===i.path)return;const r=await Hf(n.path);if(r){for(const s of e)delete t.static.data[s];for(const s in r.data)s in t.static.data||e.add(s),t.static.data[s]=r.data[s]}}),Su(()=>{t.hooks.hook("link:prefetch",async n=>{const{hostname:i}=new URL(n,window.location.href);i===window.location.hostname&&await Hf(n).catch(()=>{console.warn("[nuxt] Error preloading payload for",n)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(ba,1e3)})}}),AS=di(()=>{const t=an();Su(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),wS=di(t=>{let e;async function n(){let i;try{i=await ba()}catch(r){const s=r;if(!("status"in s&&(s.status===404||s.status===403)))throw s}e&&clearTimeout(e),e=setTimeout(n,Rf);try{const r=await $fetch(pu("builds/latest.json")+`?${Date.now()}`);r.id!==i?.id&&(t.hooks.callHook("app:manifest:update",r),e&&clearTimeout(e))}catch{}}Su(()=>{e=setTimeout(n,Rf)})});function RS(t={}){const e=t.path||window.location.pathname;let n={};try{n=na(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||n?.path!==e||n?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Tt().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const CS=di({name:"nuxt:chunk-reload",setup(t){const e=an(),n=Ea(),i=new Set;e.beforeEach(()=>{i.clear()}),t.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const o=hu(n.app.baseURL,s.fullPath);RS({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,o)=>{i.has(s)&&r(o)})}}),PS=di({name:"nuxt:global-components"}),Ri={default:Ul(()=>tn(()=>import("./DIvOPK39.js"),__vite__mapDeps([16,5,2,17]),import.meta.url).then(t=>t.default||t))};function LS(t){if(t?.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function DS(t,e=an()){const{path:n,matched:i}=e.resolve(t);if(!i.length||(e._routePreloaded||=new Set,e._routePreloaded.has(n)))return;const r=e._preloadPromises||=[];if(r.length>4)return Promise.all(r).then(()=>DS(t,e));e._routePreloaded.add(n);const s=i.map(o=>o.components?.default).filter(o=>typeof o=="function");for(const o of s){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>r.splice(r.indexOf(a)));r.push(a)}await Promise.all(r)}const IS=di({name:"nuxt:prefetch",setup(t){const e=an();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{const i=n?.meta?.layout;i&&typeof Ri[i]=="function"&&await Ri[i]()})}),t.hooks.hook("link:prefetch",n=>{if(dr(n))return;const i=e.resolve(n);if(!i)return;const r=i.meta.layout;let s=yu(i.meta.middleware);s=s.filter(o=>typeof o=="string");for(const o of s)typeof nc[o]=="function"&&nc[o]();typeof r=="string"&&r in Ri&&LS(Ri[r])})}}),US=()=>{},NS={Hex:["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F"],Symbols:["!","@","#","$","%","^","&","*"],FullWidthHex:["１","２","３","４","５","６","７","８","９","０","Ａ","Ｂ","Ｃ","Ｄ","Ｅ","Ｆ","Ｘ"],FullWidthSymbols:["！","＠","＃","＄","％","＾","＆","＊"]},bm={HalfWidth:"&ensp;",FullWidth:"&emsp;"};function FS(t){const e=Math.floor(Math.random()*t.length);return{index:e,element:t[e]}}function OS(t,e){const n=t.innerHTML.split(""),i=n.length;let r=0,s="",o=0;n.forEach(l=>{s+=bm.HalfWidth}),t.innerHTML=s,console.log(t.innerHTML);function a(l){if(r<i){if(Math.abs(l-o)>(e?.interval??100)){const u=t.innerHTML.split("");u[r]=n[r],s=u.join(""),r+=1,t.innerHTML=s,o=l}requestAnimationFrame(a)}}o=new Date().valueOf(),requestAnimationFrame(a)}const BS={DefaultBaseChars:NS,DefaultSpaces:bm,shuffleFrom:FS,fooAnimateTitle:OS},HS=[ty,oy,TS,bS,AS,wS,CS,PS,IS,US,BS],Am=(t="RouteProvider")=>ui({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,i=e.route,r={};for(const s in e.route)Object.defineProperty(r,s,{get:()=>n===e.renderKey?e.route[s]:i[s],enumerable:!0});return Pi(ur,Dn(r)),()=>e.vnode?Nt(e.vnode,{ref:e.vnodeRef}):e.vnode}}),kS=Am(),oh=new WeakMap,zS=ui({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:i}){const r=Tt(),s=Qn(),o=Ft(ur,null);let a;i({pageRef:s});const l=Ft(em,null);let u;const c=r.deferHydration();if(r.isHydrating){const h=r.hooks.hookOnce("app:error",c);an().beforeEach(h)}t.pageKey&&kr(()=>t.pageKey,(h,d)=>{h!==d&&r.callHook("page:loading:start")});let f=!1;{const h=an().beforeResolve(()=>{f=!1});Gs(()=>{h()})}return()=>Nt(Sm,{name:t.name,route:t.route,...e},{default:h=>{const d=GS(o,h.route,h.Component),g=o&&o.matched.length===h.route.matched.length;if(!h.Component){if(u&&!g)return u;c();return}if(u&&l&&!l.isCurrent(h.route))return u;if(d&&o&&(!l||l?.isCurrent(o)))return g?u:null;const _=tc(h,t.pageKey),m=WS(o,h.route,h.Component);!r.isHydrating&&a===_&&!m&&$r(()=>{f=!0,r.callHook("page:loading:end")}),a=_;const p=!!(t.transition??h.route.meta.pageTransition??Af),T=p&&VS([t.transition,h.route.meta.pageTransition,Af,{onAfterLeave(){delete r._runningTransition,r.callHook("page:transition:finish",h.Component)}}]),x=t.keepalive??h.route.meta.keepalive??Z0;return u=Mm(p&&T,dS(x,Nt(lu,{suspensible:!0,onPending:()=>{p&&(r._runningTransition=!0),r.callHook("page:start",h.Component)},onResolve:()=>{$r(()=>r.callHook("page:finish",h.Component).then(()=>{if(delete r._runningTransition,!f&&!m)return f=!0,r.callHook("page:loading:end")}).finally(c))}},{default:()=>{const y={key:_||void 0,vnode:n.default?XS(n.default,h):h.Component,route:h.route,renderKey:_||void 0,trackRootNodes:p,vnodeRef:s};if(!x)return Nt(kS,y);const b=h.Component.type,R=b;let P=oh.get(R);return P||(P=Am(b.name||b.__name),oh.set(R,P)),Nt(P,y)}}))).default(),u}})}});function VS(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?yu(n.onAfterLeave):void 0}));return Jp(...e)}function GS(t,e,n){if(!t)return!1;const i=e.matched.findIndex(r=>r.components?.default===n?.type);return!i||i===-1?!1:e.matched.slice(0,i).some((r,s)=>r.components?.default!==t.matched[s]?.components?.default)||n&&tc({route:e,Component:n})!==tc({route:t,Component:n})}function WS(t,e,n){return t?e.matched.findIndex(r=>r.components?.default===n?.type)<e.matched.length-1:!1}function XS(t,e){const n=t(e);return n.length===1?Nt(n[0]):Nt(Rt,void 0,n)}const $S=ui({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>Nt(Ri[t.name],t.layoutProps,e.slots)}}),qS={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},jS=ui({name:"NuxtLayout",inheritAttrs:!1,props:qS,setup(t,e){const n=Tt(),i=Ft(ur),s=!i||i===Ma()?Em():i,o=mn(()=>{let c=ht(t.name)??s?.meta.layout??"default";return c&&!(c in Ri)&&t.fallback&&(c=ht(t.fallback)),c}),a=lr();e.expose({layoutRef:a});const l=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",l);an().beforeEach(c)}let u;return()=>{const c=o.value&&o.value in Ri,f=s?.meta.layoutTransition??K0,h=u;return u=o.value,Mm(c&&f,{default:()=>Nt(lu,{suspensible:!0,onResolve:()=>{$r(l)}},{default:()=>Nt(YS,{layoutProps:bp(e.attrs,{ref:a}),key:o.value||void 0,name:o.value,shouldProvide:!t.name,isRenderingNewLayout:d=>d!==h&&d===o.value,hasTransition:!!f},e.slots)})}).default()}}}),YS=ui({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(t,e){const n=t.name;t.shouldProvide&&Pi(em,{isCurrent:s=>n===(s.meta.layout??"default")});const i=Ft(ur);if(i&&i===Ma()){const s=Em(),o={};for(const a in s){const l=a;Object.defineProperty(o,l,{enumerable:!0,get:()=>t.isRenderingNewLayout(t.name)?s[l]:i[l]})}Pi(ur,Dn(o))}return()=>!n||typeof n=="string"&&!(n in Ri)?e.slots.default?.():Nt($S,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eu="179",KS=0,ah=1,ZS=2,wm=1,JS=2,$n=3,Ui=0,jt=1,Zn=2,Li=0,Gr=1,lh=2,ch=3,uh=4,QS=5,Qi=100,eE=101,tE=102,nE=103,iE=104,rE=200,sE=201,oE=202,aE=203,ic=204,rc=205,lE=206,cE=207,uE=208,fE=209,hE=210,dE=211,pE=212,mE=213,gE=214,sc=0,oc=1,ac=2,Jr=3,lc=4,cc=5,uc=6,fc=7,Rm=0,_E=1,vE=2,Di=0,xE=1,yE=2,SE=3,EE=4,ME=5,TE=6,bE=7,Cm=300,Qr=301,es=302,hc=303,dc=304,wa=306,pc=1e3,tr=1001,mc=1002,Tn=1003,AE=1004,lo=1005,In=1006,Qa=1007,nr=1008,oi=1009,Pm=1010,Lm=1011,Ns=1012,Mu=1013,fr=1014,Jn=1015,Xs=1016,Tu=1017,bu=1018,Fs=1020,Dm=35902,Im=1021,Um=1022,En=1023,Os=1026,Bs=1027,Nm=1028,Au=1029,Fm=1030,wu=1031,Ru=1033,Fo=33776,Oo=33777,Bo=33778,Ho=33779,gc=35840,_c=35841,vc=35842,xc=35843,yc=36196,Sc=37492,Ec=37496,Mc=37808,Tc=37809,bc=37810,Ac=37811,wc=37812,Rc=37813,Cc=37814,Pc=37815,Lc=37816,Dc=37817,Ic=37818,Uc=37819,Nc=37820,Fc=37821,ko=36492,Oc=36494,Bc=36495,Om=36283,Hc=36284,kc=36285,zc=36286,wE=3200,RE=3201,Bm=0,CE=1,wi="",nn="srgb",ts="srgb-linear",aa="linear",ot="srgb",_r=7680,fh=519,PE=512,LE=513,DE=514,Hm=515,IE=516,UE=517,NE=518,FE=519,hh=35044,dh="300 es",Un=2e3,la=2001;class rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],el=Math.PI/180,Vc=180/Math.PI;function $s(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[t&255]+Dt[t>>8&255]+Dt[t>>16&255]+Dt[t>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[n&63|128]+Dt[n>>8&255]+"-"+Dt[n>>16&255]+Dt[n>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function OE(t,e){return(t%e+e)%e}function tl(t,e,n){return(1-n)*t+n*e}function fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Gt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==h||u!==d||c!==g){let m=1-a;const p=l*h+u*d+c*g+f*_,T=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),R=Math.atan2(b,p*T);m=Math.sin(m*R)/b,a=Math.sin(a*R)/b}const y=a*T;if(l=l*m+h*y,u=u*m+d*y,c=c*m+g*y,f=f*m+_*y,m===1-a){const b=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=b,u*=b,c*=b,f*=b}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[n]=a*g+c*f+l*d-u*h,e[n+1]=l*g+c*h+u*f-a*d,e[n+2]=u*g+c*d+a*h-l*f,e[n+3]=c*g-a*f-l*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"YXZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"ZXY":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"ZYX":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"YZX":this._x=h*c*f+u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f-h*d*g;break;case"XZY":this._x=h*c*f-u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ph.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nl=new Y,ph=new qs;class We{constructor(e,n,i,r,s,o,a,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],T=r[1],x=r[4],y=r[7],b=r[2],R=r[5],P=r[8];return s[0]=o*_+a*T+l*b,s[3]=o*m+a*x+l*R,s[6]=o*p+a*y+l*P,s[1]=u*_+c*T+f*b,s[4]=u*m+c*x+f*R,s[7]=u*p+c*y+f*P,s[2]=h*_+d*T+g*b,s[5]=h*m+d*x+g*R,s[8]=h*p+d*y+g*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,d=u*s-o*l,g=n*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=d*_,e[7]=(i*l-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(il.makeScale(e,n)),this}rotate(e){return this.premultiply(il.makeRotation(-e)),this}translate(e,n){return this.premultiply(il.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const il=new We;function km(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ca(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function BE(){const t=ca("canvas");return t.style.display="block",t}const mh={};function Wr(t){t in mh||(mh[t]=!0,console.warn(t))}function HE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const gh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kE(){const t={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=Xr(r.r),r.g=Xr(r.g),r.b=Xr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?aa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Wr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Wr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ts]:{primaries:e,whitePoint:i,transfer:aa,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),t}const Ze=kE();function ei(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let vr;class zE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vr===void 0&&(vr=ca("canvas")),vr.width=e.width,vr.height=e.height;const r=vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=vr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ca("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ei(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ei(n[i]/255)*255):n[i]=ei(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VE=0;class Cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=$s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rl(r[o].image)):s.push(rl(r[o]))}else s=rl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function rl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GE=0;const sl=new Y;class Yt extends rs{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=tr,r=tr,s=In,o=nr,a=En,l=oi,u=Yt.DEFAULT_ANISOTROPY,c=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=$s(),this.name="",this.source=new Cu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sl).x}get height(){return this.source.getSize(sl).y}get depth(){return this.source.getSize(sl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pc:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pc:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Cm;Yt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,y=(d+1)/2,b=(p+1)/2,R=(c+h)/4,P=(f+_)/4,D=(g+m)/4;return x>y&&x>b?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=P/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=D/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=P/s,r=D/s),this.set(i,r,s,n),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(h-c)/T,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WE extends rs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Yt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Cu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends WE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class zm extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XE extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(_n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(_n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=_n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),uo.subVectors(this.max,hs),xr.subVectors(e.a,hs),yr.subVectors(e.b,hs),Sr.subVectors(e.c,hs),gi.subVectors(yr,xr),_i.subVectors(Sr,yr),Gi.subVectors(xr,Sr);let n=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Gi.z,Gi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Gi.z,0,-Gi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Gi.y,Gi.x,0];return!ol(n,xr,yr,Sr,uo)||(n=[1,0,0,0,1,0,0,0,1],!ol(n,xr,yr,Sr,uo))?!1:(fo.crossVectors(gi,_i),n=[fo.x,fo.y,fo.z],ol(n,xr,yr,Sr,uo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],_n=new Y,co=new js,xr=new Y,yr=new Y,Sr=new Y,gi=new Y,_i=new Y,Gi=new Y,hs=new Y,uo=new Y,fo=new Y,Wi=new Y;function ol(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Wi.fromArray(t,s);const a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),u=n.dot(Wi),c=i.dot(Wi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const $E=new js,ds=new Y,al=new Y;class Pu{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):$E.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const n=ds.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(al)),this.expandByPoint(ds.copy(e.center).sub(al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zn=new Y,ll=new Y,ho=new Y,vi=new Y,cl=new Y,po=new Y,ul=new Y;class qE{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,n),zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ll.copy(e).add(n).multiplyScalar(.5),ho.copy(n).sub(e).normalize(),vi.copy(this.origin).sub(ll);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ho),a=vi.dot(this.direction),l=-vi.dot(ho),u=vi.lengthSq(),c=Math.abs(1-o*o);let f,h,d,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ll).addScaledVector(ho,h),d}intersectSphere(e,n){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,n,i,r,s){cl.subVectors(n,e),po.subVectors(i,e),ul.crossVectors(cl,po);let o=this.direction.dot(ul),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(po.crossVectors(vi,po));if(l<0)return null;const u=a*this.direction.dot(cl.cross(vi));if(u<0||l+u>o)return null;const c=-a*vi.dot(ul);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,o,a,l,u,c,f,h,d,g,_,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,h,d,g,_,m)}set(e,n,i,r,s,o,a,l,u,c,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),s=1/Er.setFromMatrixColumn(e,1).length(),o=1/Er.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,d=o*f,g=a*c,_=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=d+g*u,n[5]=h-_*u,n[9]=-a*l,n[2]=_-h*u,n[6]=g+d*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,d=l*f,g=u*c,_=u*f;n[0]=h+_*a,n[4]=g*a-d,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=d*a-g,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,d=l*f,g=u*c,_=u*f;n[0]=h-_*a,n[4]=-o*f,n[8]=g+d*a,n[1]=d+g*a,n[5]=o*c,n[9]=_-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,d=o*f,g=a*c,_=a*f;n[0]=l*c,n[4]=g*u-d,n[8]=h*u+_,n[1]=l*f,n[5]=_*u+h,n[9]=d*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*u,g=a*l,_=a*u;n[0]=l*c,n[4]=_-h*f,n[8]=g*f+d,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=d*f+g,n[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*u,g=a*l,_=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+_,n[5]=o*c,n[9]=d*f-g,n[2]=g*f-d,n[6]=a*c,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jE,e,YE)}lookAt(e,n,i){const r=this.elements;return Qt.subVectors(e,n),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),xi.crossVectors(i,Qt),xi.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),xi.crossVectors(i,Qt)),xi.normalize(),mo.crossVectors(Qt,xi),r[0]=xi.x,r[4]=mo.x,r[8]=Qt.x,r[1]=xi.y,r[5]=mo.y,r[9]=Qt.y,r[2]=xi.z,r[6]=mo.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],x=i[7],y=i[11],b=i[15],R=r[0],P=r[4],D=r[8],M=r[12],E=r[1],C=r[5],U=r[9],k=r[13],X=r[2],J=r[6],H=r[10],Z=r[14],N=r[3],he=r[7],Se=r[11],Re=r[15];return s[0]=o*R+a*E+l*X+u*N,s[4]=o*P+a*C+l*J+u*he,s[8]=o*D+a*U+l*H+u*Se,s[12]=o*M+a*k+l*Z+u*Re,s[1]=c*R+f*E+h*X+d*N,s[5]=c*P+f*C+h*J+d*he,s[9]=c*D+f*U+h*H+d*Se,s[13]=c*M+f*k+h*Z+d*Re,s[2]=g*R+_*E+m*X+p*N,s[6]=g*P+_*C+m*J+p*he,s[10]=g*D+_*U+m*H+p*Se,s[14]=g*M+_*k+m*Z+p*Re,s[3]=T*R+x*E+y*X+b*N,s[7]=T*P+x*C+y*J+b*he,s[11]=T*D+x*U+y*H+b*Se,s[15]=T*M+x*k+y*Z+b*Re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*d-i*l*d)+_*(+n*l*d-n*u*h+s*o*h-r*o*d+r*u*c-s*l*c)+m*(+n*u*f-n*a*d-s*o*f+i*o*d+s*a*c-i*u*c)+p*(-r*a*c-n*l*f+n*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=f*m*u-_*h*u+_*l*d-a*m*d-f*l*p+a*h*p,x=g*h*u-c*m*u-g*l*d+o*m*d+c*l*p-o*h*p,y=c*_*u-g*f*u+g*a*d-o*_*d-c*a*p+o*f*p,b=g*f*l-c*_*l-g*a*h+o*_*h+c*a*m-o*f*m,R=n*T+i*x+r*y+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=T*P,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*P,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*p+i*l*p)*P,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*d-i*l*d)*P,e[4]=x*P,e[5]=(c*m*s-g*h*s+g*r*d-n*m*d-c*r*p+n*h*p)*P,e[6]=(g*l*s-o*m*s-g*r*u+n*m*u+o*r*p-n*l*p)*P,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*d+n*l*d)*P,e[8]=y*P,e[9]=(g*f*s-c*_*s-g*i*d+n*_*d+c*i*p-n*f*p)*P,e[10]=(o*_*s-g*a*s+g*i*u-n*_*u-o*i*p+n*a*p)*P,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*d-n*a*d)*P,e[12]=b*P,e[13]=(c*_*r-g*f*r+g*i*h-n*_*h-c*i*m+n*f*m)*P,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*P,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*h+n*a*h)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,h=s*u,d=s*c,g=s*f,_=o*c,m=o*f,p=a*f,T=l*u,x=l*c,y=l*f,b=i.x,R=i.y,P=i.z;return r[0]=(1-(_+p))*b,r[1]=(d+y)*b,r[2]=(g-x)*b,r[3]=0,r[4]=(d-y)*R,r[5]=(1-(h+p))*R,r[6]=(m+T)*R,r[7]=0,r[8]=(g+x)*P,r[9]=(m-T)*P,r[10]=(1-(h+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Er.set(r[0],r[1],r[2]).length();const o=Er.set(r[4],r[5],r[6]).length(),a=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);const u=1/s,c=1/o,f=1/a;return vn.elements[0]*=u,vn.elements[1]*=u,vn.elements[2]*=u,vn.elements[4]*=c,vn.elements[5]*=c,vn.elements[6]*=c,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,n.setFromRotationMatrix(vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Un,l=!1){const u=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Un)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===la)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Un,l=!1){const u=this.elements,c=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),d=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Un)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===la)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=f,u[9]=0,u[13]=d,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Er=new Y,vn=new Et,jE=new Y(0,0,0),YE=new Y(1,1,1),xi=new Y,mo=new Y,Qt=new Y,vh=new Et,xh=new qs;class ai{constructor(e=0,n=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xh.setFromEuler(this),this.setFromQuaternion(xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Vm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KE=0;const yh=new Y,Mr=new qs,Vn=new Et,go=new Y,ps=new Y,ZE=new Y,JE=new qs,Sh=new Y(1,0,0),Eh=new Y(0,1,0),Mh=new Y(0,0,1),Th={type:"added"},QE={type:"removed"},Tr={type:"childadded",child:null},fl={type:"childremoved",child:null};class Kt extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new Y,n=new ai,i=new qs,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new We}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Mr.setFromAxisAngle(e,n),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,n){return Mr.setFromAxisAngle(e,n),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(Sh,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(Mh,e)}translateOnAxis(e,n){return yh.copy(e).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sh,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(Mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?go.copy(e):go.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(ps,go,this.up):Vn.lookAt(go,ps,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),Mr.setFromRotationMatrix(Vn),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Th),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(QE),fl.child=e,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Th),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,ZE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,JE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new Y(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new Y,Gn=new Y,hl=new Y,Wn=new Y,br=new Y,Ar=new Y,bh=new Y,dl=new Y,pl=new Y,ml=new Y,gl=new _t,_l=new _t,vl=new _t;class Sn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),xn.subVectors(e,n),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){xn.subVectors(r,n),Gn.subVectors(i,n),hl.subVectors(e,n);const o=xn.dot(xn),a=xn.dot(Gn),l=xn.dot(hl),u=Gn.dot(Gn),c=Gn.dot(hl),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return gl.setScalar(0),_l.setScalar(0),vl.setScalar(0),gl.fromBufferAttribute(e,n),_l.fromBufferAttribute(e,i),vl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(gl,s.x),o.addScaledVector(_l,s.y),o.addScaledVector(vl,s.z),o}static isFrontFacing(e,n,i,r){return xn.subVectors(i,n),Gn.subVectors(e,n),xn.cross(Gn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),xn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Sn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;br.subVectors(r,i),Ar.subVectors(s,i),dl.subVectors(e,i);const l=br.dot(dl),u=Ar.dot(dl);if(l<=0&&u<=0)return n.copy(i);pl.subVectors(e,r);const c=br.dot(pl),f=Ar.dot(pl);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(br,o);ml.subVectors(e,s);const d=br.dot(ml),g=Ar.dot(ml);if(g>=0&&d<=g)return n.copy(s);const _=d*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(Ar,a);const m=c*g-d*f;if(m<=0&&f-c>=0&&d-g>=0)return bh.subVectors(s,r),a=(f-c)/(f-c+(d-g)),n.copy(r).addScaledVector(bh,a);const p=1/(m+_+h);return o=_*p,a=h*p,n.copy(i).addScaledVector(br,o).addScaledVector(Ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function xl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=OE(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=xl(o,s,e+1/3),this.g=xl(o,s,e),this.b=xl(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=nn){const i=Gm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Ze.workingToColorSpace(It.copy(this),e),Math.round(qe(It.r*255,0,255))*65536+Math.round(qe(It.g*255,0,255))*256+Math.round(qe(It.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(It.copy(this),n);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(It.copy(this),n),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=nn){Ze.workingToColorSpace(It.copy(this),e);const n=It.r,i=It.g,r=It.b;return e!==nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+n,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(yi),e.getHSL(_o);const i=tl(yi.h,_o.h,n),r=tl(yi.s,_o.s,n),s=tl(yi.l,_o.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new it;it.NAMES=Gm;let eM=0;class Ys extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Gr,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=rc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ic&&(i.blendSrc=this.blendSrc),this.blendDst!==rc&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wm extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new Y,vo=new rt;let tM=0;class sn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=hh,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vo.fromBufferAttribute(this,n),vo.applyMatrix3(e),this.setXY(n,vo.x,vo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hh&&(e.usage=this.usage),e}}class Xm extends sn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class $m extends sn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ti extends sn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let nM=0;const fn=new Et,yl=new Kt,wr=new Y,en=new js,ms=new js,wt=new Y;class li extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(km(e)?$m:Xm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,n,i){return fn.makeTranslation(e,n,i),this.applyMatrix4(fn),this}scale(e,n,i){return fn.makeScale(e,n,i),this.applyMatrix4(fn),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ti(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(en.min,ms.min),en.expandByPoint(wt),wt.addVectors(en.max,ms.max),en.expandByPoint(wt)):(en.expandByPoint(ms.min),en.expandByPoint(ms.max))}en.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)wt.fromBufferAttribute(a,u),l&&(wr.fromBufferAttribute(e,u),wt.add(wr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new Y,l[D]=new Y;const u=new Y,c=new Y,f=new Y,h=new rt,d=new rt,g=new rt,_=new Y,m=new Y;function p(D,M,E){u.fromBufferAttribute(i,D),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,D),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,E),c.sub(u),f.sub(u),d.sub(h),g.sub(h);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(C),m.copy(f).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(C),a[D].add(_),a[M].add(_),a[E].add(_),l[D].add(m),l[M].add(m),l[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,M=T.length;D<M;++D){const E=T[D],C=E.start,U=E.count;for(let k=C,X=C+U;k<X;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new Y,y=new Y,b=new Y,R=new Y;function P(D){b.fromBufferAttribute(r,D),R.copy(b);const M=a[D];x.copy(M),x.sub(b.multiplyScalar(b.dot(M))).normalize(),y.crossVectors(R,M);const C=y.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,C)}for(let D=0,M=T.length;D<M;++D){const E=T[D],C=E.start,U=E.count;for(let k=C,X=C+U;k<X;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,u=new Y,c=new Y,f=new Y;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,d=n.count;h<d;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wt.fromBufferAttribute(e,n),wt.normalize(),e.setXYZ(n,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*c;for(let p=0;p<c;p++)h[g++]=u[d++]}return new sn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const d=u[f];c.push(d.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,d=f.length;h<d;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ah=new Et,Xi=new qE,xo=new Pu,wh=new Y,yo=new Y,So=new Y,Eo=new Y,Sl=new Y,Mo=new Y,Rh=new Y,To=new Y;class Nn extends Kt{constructor(e=new li,n=new Wm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Mo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Sl.fromBufferAttribute(f,e),o?Mo.addScaledVector(Sl,c):Mo.addScaledVector(Sl.sub(n),c))}n.add(Mo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),!(xo.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(xo,wh)===null||Xi.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Ah.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(Ah),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,b=x;y<b;y+=3){const R=a.getX(y),P=a.getX(y+1),D=a.getX(y+2);r=bo(this,p,e,i,u,c,f,R,P,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=bo(this,o,e,i,u,c,f,T,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,b=x;y<b;y+=3){const R=y,P=y+1,D=y+2;r=bo(this,p,e,i,u,c,f,R,P,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,x=m+1,y=m+2;r=bo(this,o,e,i,u,c,f,T,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function iM(t,e,n,i,r,s,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ui,a),l===null)return null;To.copy(a),To.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(To);return u<n.near||u>n.far?null:{distance:u,point:To.clone(),object:t}}function bo(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,yo),t.getVertexPosition(l,So),t.getVertexPosition(u,Eo);const c=iM(t,e,n,i,yo,So,Eo,Rh);if(c){const f=new Y;Sn.getBarycoord(Rh,yo,So,Eo,f),r&&(c.uv=Sn.getInterpolatedAttribute(r,a,l,u,f,new rt)),s&&(c.uv1=Sn.getInterpolatedAttribute(s,a,l,u,f,new rt)),o&&(c.normal=Sn.getInterpolatedAttribute(o,a,l,u,f,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new Y,materialIndex:0};Sn.getNormal(yo,So,Eo,h.normal),c.face=h,c.barycoord=f}return c}class Ks extends li{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ti(u,3)),this.setAttribute("normal",new ti(c,3)),this.setAttribute("uv",new ti(f,2));function g(_,m,p,T,x,y,b,R,P,D,M){const E=y/P,C=b/D,U=y/2,k=b/2,X=R/2,J=P+1,H=D+1;let Z=0,N=0;const he=new Y;for(let Se=0;Se<H;Se++){const Re=Se*C-k;for(let Ie=0;Ie<J;Ie++){const Je=Ie*E-U;he[_]=Je*T,he[m]=Re*x,he[p]=X,u.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[p]=R>0?1:-1,c.push(he.x,he.y,he.z),f.push(Ie/P),f.push(1-Se/D),Z+=1}}for(let Se=0;Se<D;Se++)for(let Re=0;Re<P;Re++){const Ie=h+Re+J*Se,Je=h+Re+J*(Se+1),je=h+(Re+1)+J*(Se+1),ne=h+(Re+1)+J*Se;l.push(Ie,Je,ne),l.push(Je,je,ne),N+=6}a.addGroup(d,N,M),d+=N,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=ns(t[n]);for(const r in i)e[r]=i[r]}return e}function rM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function qm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const sM={clone:ns,merge:Ht};var oM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oM,this.fragmentShader=aM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jm extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new Y,Ch=new rt,Ph=new rt;class pn extends jm{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vc*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,n){return this.getViewBounds(e,Ch,Ph),n.subVectors(Ph,Ch)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(el*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rr=-90,Cr=1;class lM extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Rr,Cr,e,n);r.layers=this.layers,this.add(r);const s=new pn(Rr,Cr,e,n);s.layers=this.layers,this.add(s);const o=new pn(Rr,Cr,e,n);o.layers=this.layers,this.add(o);const a=new pn(Rr,Cr,e,n);a.layers=this.layers,this.add(a);const l=new pn(Rr,Cr,e,n);l.layers=this.layers,this.add(l);const u=new pn(Rr,Cr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ym extends Yt{constructor(e=[],n=Qr,i,r,s,o,a,l,u,c){super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cM extends hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ym(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ks(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:Li});s.uniforms.tEquirect.value=n;const o=new Nn(r,s),a=n.minFilter;return n.minFilter===nr&&(n.minFilter=In),new lM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Ao extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uM={type:"move"};class El{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),d=.02,g=.005;u.inputState.pinching&&h>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ao;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class fM extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ml=new Y,hM=new Y,dM=new We;class Zi{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ml.subVectors(i,n).cross(hM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ml),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||dM.getNormalMatrix(e),r=this.coplanarPoint(Ml).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Pu,pM=new rt(.5,.5),wo=new Y;class Km{constructor(e=new Zi,n=new Zi,i=new Zi,r=new Zi,s=new Zi,o=new Zi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Un,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],f=s[5],h=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],T=s[12],x=s[13],y=s[14],b=s[15];if(r[0].setComponents(u-o,d-c,p-g,b-T).normalize(),r[1].setComponents(u+o,d+c,p+g,b+T).normalize(),r[2].setComponents(u+a,d+f,p+_,b+x).normalize(),r[3].setComponents(u-a,d-f,p-_,b-x).normalize(),i)r[4].setComponents(l,h,m,y).normalize(),r[5].setComponents(u-l,d-h,p-m,b-y).normalize();else if(r[4].setComponents(u-l,d-h,p-m,b-y).normalize(),n===Un)r[5].setComponents(u+l,d+h,p+m,b+y).normalize();else if(n===la)r[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);const n=pM.distanceTo(e.center);return $i.radius=.7071067811865476+n,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zm extends Yt{constructor(e,n,i=fr,r,s,o,a=Tn,l=Tn,u,c=Os,f=1){if(c!==Os&&c!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ra extends li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,d=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const T=p*h-o;for(let x=0;x<u;x++){const y=x*f-s;g.push(y,-T,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const x=T+u*p,y=T+u*(p+1),b=T+1+u*(p+1),R=T+1+u*p;d.push(x,y,R),d.push(y,b,R)}this.setIndex(d),this.setAttribute("position",new ti(g,3)),this.setAttribute("normal",new ti(_,3)),this.setAttribute("uv",new ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class mM extends Ys{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bm,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class gM extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _M extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class vM{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const d=u[f],g=u[f+1];if(d.global&&(d.lastIndex=0),d.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const xM=new vM;class Lu{constructor(e){this.manager=e!==void 0?e:xM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Lu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class yM extends Error{constructor(e,n){super(e),this.response=n}}class SM extends Lu{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Lh.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Xn[e]!==void 0){Xn[e].push({onLoad:n,onProgress:i,onError:r});return}Xn[e]=[],Xn[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=Xn[e],f=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){T();function T(){f.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let R=0,P=c.length;R<P;R++){const D=c[R];D.onProgress&&D.onProgress(b)}p.enqueue(y),T()}},x=>{p.error(x)})}}});return new Response(m)}else throw new yM(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a==="")return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return u.arrayBuffer().then(g=>d.decode(g))}}}).then(u=>{Lh.add(`file:${e}`,u);const c=Xn[e];delete Xn[e];for(let f=0,h=c.length;f<h;f++){const d=c[f];d.onLoad&&d.onLoad(u)}}).catch(u=>{const c=Xn[e];if(c===void 0)throw this.manager.itemError(e),u;delete Xn[e];for(let f=0,h=c.length;f<h;f++){const d=c[f];d.onError&&d.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class EM extends Kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class MM extends jm{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class TR extends EM{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class TM extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Dh(t,e,n,i){const r=bM(i);switch(n){case Im:return t*e;case Nm:return t*e/r.components*r.byteLength;case Au:return t*e/r.components*r.byteLength;case Fm:return t*e*2/r.components*r.byteLength;case wu:return t*e*2/r.components*r.byteLength;case Um:return t*e*3/r.components*r.byteLength;case En:return t*e*4/r.components*r.byteLength;case Ru:return t*e*4/r.components*r.byteLength;case Fo:case Oo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bo:case Ho:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _c:case xc:return Math.max(t,16)*Math.max(e,8)/4;case gc:case vc:return Math.max(t,8)*Math.max(e,8)/2;case yc:case Sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ec:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ko:case Oc:case Bc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Om:case Hc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kc:case zc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bM(t){switch(t){case oi:case Pm:return{byteLength:1,components:1};case Ns:case Lm:case Xs:return{byteLength:2,components:1};case Tu:case bu:return{byteLength:2,components:4};case fr:case Mu:case Jn:return{byteLength:4,components:1};case Dm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jm(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function AM(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)d=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=t.SHORT;else if(u instanceof Uint32Array)d=t.UNSIGNED_INT;else if(u instanceof Int32Array)d=t.INT;else if(u instanceof Int8Array)d=t.BYTE;else if(u instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];t.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iT="gl_FragColor = linearToOutputTexel( gl_FragColor );",rT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_T=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ST=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ET=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,db=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ib=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ub=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:wM,alphahash_pars_fragment:RM,alphamap_fragment:CM,alphamap_pars_fragment:PM,alphatest_fragment:LM,alphatest_pars_fragment:DM,aomap_fragment:IM,aomap_pars_fragment:UM,batching_pars_vertex:NM,batching_vertex:FM,begin_vertex:OM,beginnormal_vertex:BM,bsdfs:HM,iridescence_fragment:kM,bumpmap_pars_fragment:zM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:GM,clipping_planes_pars_vertex:WM,clipping_planes_vertex:XM,color_fragment:$M,color_pars_fragment:qM,color_pars_vertex:jM,color_vertex:YM,common:KM,cube_uv_reflection_fragment:ZM,defaultnormal_vertex:JM,displacementmap_pars_vertex:QM,displacementmap_vertex:eT,emissivemap_fragment:tT,emissivemap_pars_fragment:nT,colorspace_fragment:iT,colorspace_pars_fragment:rT,envmap_fragment:sT,envmap_common_pars_fragment:oT,envmap_pars_fragment:aT,envmap_pars_vertex:lT,envmap_physical_pars_fragment:xT,envmap_vertex:cT,fog_vertex:uT,fog_pars_vertex:fT,fog_fragment:hT,fog_pars_fragment:dT,gradientmap_pars_fragment:pT,lightmap_pars_fragment:mT,lights_lambert_fragment:gT,lights_lambert_pars_fragment:_T,lights_pars_begin:vT,lights_toon_fragment:yT,lights_toon_pars_fragment:ST,lights_phong_fragment:ET,lights_phong_pars_fragment:MT,lights_physical_fragment:TT,lights_physical_pars_fragment:bT,lights_fragment_begin:AT,lights_fragment_maps:wT,lights_fragment_end:RT,logdepthbuf_fragment:CT,logdepthbuf_pars_fragment:PT,logdepthbuf_pars_vertex:LT,logdepthbuf_vertex:DT,map_fragment:IT,map_pars_fragment:UT,map_particle_fragment:NT,map_particle_pars_fragment:FT,metalnessmap_fragment:OT,metalnessmap_pars_fragment:BT,morphinstance_vertex:HT,morphcolor_vertex:kT,morphnormal_vertex:zT,morphtarget_pars_vertex:VT,morphtarget_vertex:GT,normal_fragment_begin:WT,normal_fragment_maps:XT,normal_pars_fragment:$T,normal_pars_vertex:qT,normal_vertex:jT,normalmap_pars_fragment:YT,clearcoat_normal_fragment_begin:KT,clearcoat_normal_fragment_maps:ZT,clearcoat_pars_fragment:JT,iridescence_pars_fragment:QT,opaque_fragment:eb,packing:tb,premultiplied_alpha_fragment:nb,project_vertex:ib,dithering_fragment:rb,dithering_pars_fragment:sb,roughnessmap_fragment:ob,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:cb,shadowmap_vertex:ub,shadowmask_pars_fragment:fb,skinbase_vertex:hb,skinning_pars_vertex:db,skinning_vertex:pb,skinnormal_vertex:mb,specularmap_fragment:gb,specularmap_pars_fragment:_b,tonemapping_fragment:vb,tonemapping_pars_fragment:xb,transmission_fragment:yb,transmission_pars_fragment:Sb,uv_pars_fragment:Eb,uv_pars_vertex:Mb,uv_vertex:Tb,worldpos_vertex:bb,background_vert:Ab,background_frag:wb,backgroundCube_vert:Rb,backgroundCube_frag:Cb,cube_vert:Pb,cube_frag:Lb,depth_vert:Db,depth_frag:Ib,distanceRGBA_vert:Ub,distanceRGBA_frag:Nb,equirect_vert:Fb,equirect_frag:Ob,linedashed_vert:Bb,linedashed_frag:Hb,meshbasic_vert:kb,meshbasic_frag:zb,meshlambert_vert:Vb,meshlambert_frag:Gb,meshmatcap_vert:Wb,meshmatcap_frag:Xb,meshnormal_vert:$b,meshnormal_frag:qb,meshphong_vert:jb,meshphong_frag:Yb,meshphysical_vert:Kb,meshphysical_frag:Zb,meshtoon_vert:Jb,meshtoon_frag:Qb,points_vert:eA,points_frag:tA,shadow_vert:nA,shadow_frag:iA,sprite_vert:rA,sprite_frag:sA},Me={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Ln={basic:{uniforms:Ht([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ht([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ht([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ht([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ht([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ht([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ht([Me.points,Me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ht([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ht([Me.common,Me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ht([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ht([Me.sprite,Me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ht([Me.common,Me.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ht([Me.lights,Me.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Ln.physical={uniforms:Ht([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ro={r:0,b:0,g:0},qi=new ai,oA=new Et;function aA(t,e,n,i,r,s,o){const a=new it(0);let l=s===!0?0:1,u,c,f=null,h=0,d=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function _(x){let y=!1;const b=g(x);b===null?p(a,l):b&&b.isColor&&(p(b,1),y=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===wa)?(c===void 0&&(c=new Nn(new Ks(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:ns(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),qi.copy(y.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(oA.makeRotationFromEuler(qi)),c.material.toneMapped=Ze.getTransfer(b.colorSpace)!==ot,(f!==b||h!==b.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new Nn(new Ra(2,2),new Ni({name:"BackgroundMaterial",uniforms:ns(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(b.colorSpace)!==ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function p(x,y){x.getRGB(Ro,qm(t)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,y,o)}function T(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m,dispose:T}}function lA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,C,U,k,X){let J=!1;const H=f(k,U,C);s!==H&&(s=H,u(s.object)),J=d(E,k,U,X),J&&g(E,k,U,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,y(E,C,U,k),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function u(E){return t.bindVertexArray(E)}function c(E){return t.deleteVertexArray(E)}function f(E,C,U){const k=U.wireframe===!0;let X=i[E.id];X===void 0&&(X={},i[E.id]=X);let J=X[C.id];J===void 0&&(J={},X[C.id]=J);let H=J[k];return H===void 0&&(H=h(l()),J[k]=H),H}function h(E){const C=[],U=[],k=[];for(let X=0;X<n;X++)C[X]=0,U[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:k,object:E,attributes:{},index:null}}function d(E,C,U,k){const X=s.attributes,J=C.attributes;let H=0;const Z=U.getAttributes();for(const N in Z)if(Z[N].location>=0){const Se=X[N];let Re=J[N];if(Re===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(Re=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(Re=E.instanceColor)),Se===void 0||Se.attribute!==Re||Re&&Se.data!==Re.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function g(E,C,U,k){const X={},J=C.attributes;let H=0;const Z=U.getAttributes();for(const N in Z)if(Z[N].location>=0){let Se=J[N];Se===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(Se=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(Se=E.instanceColor));const Re={};Re.attribute=Se,Se&&Se.data&&(Re.data=Se.data),X[N]=Re,H++}s.attributes=X,s.attributesNum=H,s.index=k}function _(){const E=s.newAttributes;for(let C=0,U=E.length;C<U;C++)E[C]=0}function m(E){p(E,0)}function p(E,C){const U=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;U[E]=1,k[E]===0&&(t.enableVertexAttribArray(E),k[E]=1),X[E]!==C&&(t.vertexAttribDivisor(E,C),X[E]=C)}function T(){const E=s.newAttributes,C=s.enabledAttributes;for(let U=0,k=C.length;U<k;U++)C[U]!==E[U]&&(t.disableVertexAttribArray(U),C[U]=0)}function x(E,C,U,k,X,J,H){H===!0?t.vertexAttribIPointer(E,C,U,X,J):t.vertexAttribPointer(E,C,U,k,X,J)}function y(E,C,U,k){_();const X=k.attributes,J=U.getAttributes(),H=C.defaultAttributeValues;for(const Z in J){const N=J[Z];if(N.location>=0){let he=X[Z];if(he===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(he=E.instanceColor)),he!==void 0){const Se=he.normalized,Re=he.itemSize,Ie=e.get(he);if(Ie===void 0)continue;const Je=Ie.buffer,je=Ie.type,ne=Ie.bytesPerElement,ge=je===t.INT||je===t.UNSIGNED_INT||he.gpuType===Mu;if(he.isInterleavedBufferAttribute){const B=he.data,se=B.stride,ie=he.offset;if(B.isInstancedInterleavedBuffer){for(let le=0;le<N.locationSize;le++)p(N.location+le,B.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let le=0;le<N.locationSize;le++)m(N.location+le);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let le=0;le<N.locationSize;le++)x(N.location+le,Re/N.locationSize,je,Se,se*ne,(ie+Re/N.locationSize*le)*ne,ge)}else{if(he.isInstancedBufferAttribute){for(let B=0;B<N.locationSize;B++)p(N.location+B,he.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let B=0;B<N.locationSize;B++)m(N.location+B);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let B=0;B<N.locationSize;B++)x(N.location+B,Re/N.locationSize,je,Se,Re*ne,Re/N.locationSize*B*ne,ge)}}else if(H!==void 0){const Se=H[Z];if(Se!==void 0)switch(Se.length){case 2:t.vertexAttrib2fv(N.location,Se);break;case 3:t.vertexAttrib3fv(N.location,Se);break;case 4:t.vertexAttrib4fv(N.location,Se);break;default:t.vertexAttrib1fv(N.location,Se)}}}}T()}function b(){D();for(const E in i){const C=i[E];for(const U in C){const k=C[U];for(const X in k)c(k[X].object),delete k[X];delete C[U]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const C=i[E.id];for(const U in C){const k=C[U];for(const X in k)c(k[X].object),delete k[X];delete C[U]}delete i[E.id]}function P(E){for(const C in i){const U=i[C];if(U[E.id]===void 0)continue;const k=U[E.id];for(const X in k)c(k[X].object),delete k[X];delete U[E.id]}}function D(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function cA(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let d=0;for(let g=0;g<f;g++)d+=c[g];n.update(d,i,1)}function l(u,c,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_]*h[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function uA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==En&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==oi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Jn&&!D)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),T=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:b,maxSamples:R}}function fA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Zi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const T=s?0:i,x=T*4;let y=p.clippingState||null;l.value=y,y=c(g,h,x,d);for(let b=0;b!==x;++b)y[b]=n[b];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=d;x!==_;++x,y+=4)o.copy(f[x]).applyMatrix4(T,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function hA(t){let e=new WeakMap;function n(o,a){return a===hc?o.mapping=Qr:a===dc&&(o.mapping=es),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hc||a===dc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new cM(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ur=4,Ih=[.125,.215,.35,.446,.526,.582],er=20,Tl=new MM,Uh=new it;let bl=null,Al=0,wl=0,Rl=!1;const Ji=(1+Math.sqrt(5))/2,Pr=1/Ji,Nh=[new Y(-Ji,Pr,0),new Y(Ji,Pr,0),new Y(-Pr,0,Ji),new Y(Pr,0,Ji),new Y(0,Ji,-Pr),new Y(0,Ji,Pr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],dA=new Y;class Fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=dA}=s;bl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,Al,wl),this._renderer.xr.enabled=Rl,e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qr||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:Xs,format:En,colorSpace:ts,depthBuffer:!1},r=Oh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pA(s)),this._blurMaterial=mA(s,e,n)}return r}_compileMaterial(e){const n=new Nn(this._lodPlanes[0],e);this._renderer.compile(n,Tl)}_sceneToCubeUV(e,n,i,r,s){const l=new pn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Uh),f.toneMapping=Di,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new Wm({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),m=new Nn(new Ks,_);let p=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,p=!0):(_.color.copy(Uh),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):y===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const b=this._cubeSize;Co(r,y*b,x>2?b:0,b,b),f.setRenderTarget(r),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=T}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qr||e.mapping===es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Co(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Tl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nh[(r-s-1)%Nh.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Nn(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*er-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):er;m>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${er}`);const p=[];let T=0;for(let P=0;P<er;++P){const D=P/_,M=Math.exp(-D*D/2);p.push(M),P===0?T+=M:P<m&&(T+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const y=this._sizeLods[r],b=3*y*(r>x-Ur?r-x+Ur:0),R=4*(this._cubeSize-y);Co(n,b,R,3*y,2*y),l.setRenderTarget(n),l.render(f,Tl)}}function pA(t){const e=[],n=[],i=[];let r=t;const s=t-Ur+1+Ih.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ur?l=Ih[o-t+Ur-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),x=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let R=0;R<d;R++){const P=R%3*2/3-1,D=R>2?0:-1,M=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];T.set(M,_*g*R),x.set(h,m*g*R);const E=[R,R,R,R,R,R];y.set(E,p*g*R)}const b=new li;b.setAttribute("position",new sn(T,_)),b.setAttribute("uv",new sn(x,m)),b.setAttribute("faceIndex",new sn(y,p)),e.push(b),r>Ur&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Oh(t,e,n){const i=new hr(t,e,n);return i.texture.mapping=wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Co(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mA(t,e,n){const i=new Float32Array(er),r=new Y(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Bh(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Hh(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===hc||l===dc,c=l===Qr||l===es;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Fh(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&r(d)?(n===null&&(n=new Fh(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function _A(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Wr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vA(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],t.ARRAY_BUFFER)}function u(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let x=0,y=T.length;x<y;x+=3){const b=T[x+0],R=T[x+1],P=T[x+2];h.push(b,R,R,P,P,b)}}else if(g!==void 0){const T=g.array;_=g.version;for(let x=0,y=T.length/3-1;x<y;x+=3){const b=x+0,R=x+1,P=x+2;h.push(b,R,R,P,P,b)}}else return;const m=new(km(h)?$m:Xm)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function c(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function xA(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*o),n.update(d,i,1)}function u(h,d,g){g!==0&&(t.drawElementsInstanced(i,d,s,h*o,g),n.update(d,i,g))}function c(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];n.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)u(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function yA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function SA(t,e,n){const i=new WeakMap,r=new _t;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const R=new Float32Array(y*b*4*f),P=new zm(R,y,b,f);P.type=Jn,P.needsUpdate=!0;const D=x*4;for(let E=0;E<f;E++){const C=m[E],U=p[E],k=T[E],X=y*b*4*E;for(let J=0;J<C.count;J++){const H=J*D;d===!0&&(r.fromBufferAttribute(C,J),R[X+H+0]=r.x,R[X+H+1]=r.y,R[X+H+2]=r.z,R[X+H+3]=0),g===!0&&(r.fromBufferAttribute(U,J),R[X+H+4]=r.x,R[X+H+5]=r.y,R[X+H+6]=r.z,R[X+H+7]=0),_===!0&&(r.fromBufferAttribute(k,J),R[X+H+8]=r.x,R[X+H+9]=r.y,R[X+H+10]=r.z,R[X+H+11]=k.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new rt(y,b)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let d=0;for(let _=0;_<u.length;_++)d+=u[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function EA(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Qm=new Yt,kh=new Zm(1,1),eg=new zm,tg=new XE,ng=new Ym,zh=[],Vh=[],Gh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function ss(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zh[r];if(s===void 0&&(s=new Float32Array(r),zh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ca(t,e){let n=Vh[e];n===void 0&&(n=new Int32Array(e),Vh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function MA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function TA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function bA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function AA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function wA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(bt(n,i))return;Xh.set(i),t.uniformMatrix2fv(this.addr,!1,Xh),At(n,i)}}function RA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(bt(n,i))return;Wh.set(i),t.uniformMatrix3fv(this.addr,!1,Wh),At(n,i)}}function CA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(bt(n,i))return;Gh.set(i),t.uniformMatrix4fv(this.addr,!1,Gh),At(n,i)}}function PA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function LA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function DA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function IA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function UA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function NA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function FA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function OA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function BA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(kh.compareFunction=Hm,s=kh):s=Qm,n.setTexture2D(e||s,r)}function HA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||tg,r)}function kA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ng,r)}function zA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||eg,r)}function VA(t){switch(t){case 5126:return MA;case 35664:return TA;case 35665:return bA;case 35666:return AA;case 35674:return wA;case 35675:return RA;case 35676:return CA;case 5124:case 35670:return PA;case 35667:case 35671:return LA;case 35668:case 35672:return DA;case 35669:case 35673:return IA;case 5125:return UA;case 36294:return NA;case 36295:return FA;case 36296:return OA;case 35678:case 36198:case 36298:case 36306:case 35682:return BA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return zA}}function GA(t,e){t.uniform1fv(this.addr,e)}function WA(t,e){const n=ss(e,this.size,2);t.uniform2fv(this.addr,n)}function XA(t,e){const n=ss(e,this.size,3);t.uniform3fv(this.addr,n)}function $A(t,e){const n=ss(e,this.size,4);t.uniform4fv(this.addr,n)}function qA(t,e){const n=ss(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jA(t,e){const n=ss(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function YA(t,e){const n=ss(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function KA(t,e){t.uniform1iv(this.addr,e)}function ZA(t,e){t.uniform2iv(this.addr,e)}function JA(t,e){t.uniform3iv(this.addr,e)}function QA(t,e){t.uniform4iv(this.addr,e)}function ew(t,e){t.uniform1uiv(this.addr,e)}function tw(t,e){t.uniform2uiv(this.addr,e)}function nw(t,e){t.uniform3uiv(this.addr,e)}function iw(t,e){t.uniform4uiv(this.addr,e)}function rw(t,e,n){const i=this.cache,r=e.length,s=Ca(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Qm,s[o])}function sw(t,e,n){const i=this.cache,r=e.length,s=Ca(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||tg,s[o])}function ow(t,e,n){const i=this.cache,r=e.length,s=Ca(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||ng,s[o])}function aw(t,e,n){const i=this.cache,r=e.length,s=Ca(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||eg,s[o])}function lw(t){switch(t){case 5126:return GA;case 35664:return WA;case 35665:return XA;case 35666:return $A;case 35674:return qA;case 35675:return jA;case 35676:return YA;case 5124:case 35670:return KA;case 35667:case 35671:return ZA;case 35668:case 35672:return JA;case 35669:case 35673:return QA;case 5125:return ew;case 36294:return tw;case 36295:return nw;case 36296:return iw;case 35678:case 36198:case 36298:case 36306:case 35682:return rw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return aw}}class cw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=VA(n.type)}}class uw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lw(n.type)}}class fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Cl=/(\w+)(\])?(\[|\.)?/g;function $h(t,e){t.seq.push(e),t.map[e.id]=e}function hw(t,e,n){const i=t.name,r=i.length;for(Cl.lastIndex=0;;){const s=Cl.exec(i),o=Cl.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){$h(n,u===void 0?new cw(a,t,e):new uw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new fw(a),$h(n,f)),n=f}}}class zo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);hw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function qh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const dw=37297;let pw=0;function mw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const jh=new We;function gw(t){Ze._getMatrix(jh,Ze.workingColorSpace,t);const e=`mat3( ${jh.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case aa:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Yh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+mw(t.getShaderSource(e),a)}else return s}function _w(t,e){const n=gw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function vw(t,e){let n;switch(e){case xE:n="Linear";break;case yE:n="Reinhard";break;case SE:n="Cineon";break;case EE:n="ACESFilmic";break;case TE:n="AgX";break;case bE:n="Neutral";break;case ME:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Po=new Y;function xw(){Ze.getLuminanceCoefficients(Po);const t=Po.x.toFixed(4),e=Po.y.toFixed(4),n=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function Sw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ew(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function vs(t){return t!==""}function Kh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(t){return t.replace(Mw,bw)}const Tw=new Map;function bw(t,e){let n=Xe[e];if(n===void 0){const i=Tw.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gc(n)}const Aw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(t){return t.replace(Aw,ww)}function ww(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===wm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===JS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function Cw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Qr:case es:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function Lw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Rm:e="ENVMAP_BLENDING_MULTIPLY";break;case _E:e="ENVMAP_BLENDING_MIX";break;case vE:e="ENVMAP_BLENDING_ADD";break}return e}function Dw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Iw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Rw(n),u=Cw(n),c=Pw(n),f=Lw(n),h=Dw(n),d=yw(n),g=Sw(s),_=r.createProgram();let m,p,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(vs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(vs).join(`
`),p.length>0&&(p+=`
`)):(m=[Qh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),p=[Qh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?Xe.tonemapping_pars_fragment:"",n.toneMapping!==Di?vw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,_w("linearToOutputTexel",n.outputColorSpace),xw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vs).join(`
`)),o=Gc(o),o=Kh(o,n),o=Zh(o,n),a=Gc(a),a=Kh(a,n),a=Zh(a,n),o=Jh(o),a=Jh(a),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=T+m+o,y=T+p+a,b=qh(r,r.VERTEX_SHADER,x),R=qh(r,r.FRAGMENT_SHADER,y);r.attachShader(_,b),r.attachShader(_,R),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(C){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(b)||"",X=r.getShaderInfoLog(R)||"",J=U.trim(),H=k.trim(),Z=X.trim();let N=!0,he=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,b,R);else{const Se=Yh(r,b,"vertex"),Re=Yh(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+J+`
`+Se+`
`+Re)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(H===""||Z==="")&&(he=!1);he&&(C.diagnostics={runnable:N,programLog:J,vertexShader:{log:H,prefix:m},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(b),r.deleteShader(R),D=new zo(r,_),M=Ew(r,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,dw)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=R,this}let Uw=0;class Nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Fw(e),n.set(e,i)),i}}class Fw{constructor(e){this.id=Uw++,this.code=e,this.usedTimes=0}}function Ow(t,e,n,i,r,s,o){const a=new Vm,l=new Nw,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,E,C,U,k){const X=U.fog,J=k.geometry,H=M.isMeshStandardMaterial?U.environment:null,Z=(M.isMeshStandardMaterial?n:e).get(M.envMap||H),N=Z&&Z.mapping===wa?Z.image.height:null,he=g[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const Se=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Re=Se!==void 0?Se.length:0;let Ie=0;J.morphAttributes.position!==void 0&&(Ie=1),J.morphAttributes.normal!==void 0&&(Ie=2),J.morphAttributes.color!==void 0&&(Ie=3);let Je,je,ne,ge;if(he){const et=Ln[he];Je=et.vertexShader,je=et.fragmentShader}else Je=M.vertexShader,je=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const B=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),ie=k.isInstancedMesh===!0,le=k.isBatchedMesh===!0,Ne=!!M.map,De=!!M.matcap,v=!!Z,L=!!M.aoMap,F=!!M.lightMap,ee=!!M.bumpMap,G=!!M.normalMap,te=!!M.displacementMap,K=!!M.emissiveMap,re=!!M.metalnessMap,ue=!!M.roughnessMap,oe=M.anisotropy>0,w=M.clearcoat>0,S=M.dispersion>0,I=M.iridescence>0,W=M.sheen>0,Q=M.transmission>0,$=oe&&!!M.anisotropyMap,_e=w&&!!M.clearcoatMap,fe=w&&!!M.clearcoatNormalMap,Ee=w&&!!M.clearcoatRoughnessMap,Ae=I&&!!M.iridescenceMap,ce=I&&!!M.iridescenceThicknessMap,ye=W&&!!M.sheenColorMap,Fe=W&&!!M.sheenRoughnessMap,be=!!M.specularMap,ve=!!M.specularColorMap,Ve=!!M.specularIntensityMap,O=Q&&!!M.transmissionMap,me=Q&&!!M.thicknessMap,xe=!!M.gradientMap,Ce=!!M.alphaMap,de=M.alphaTest>0,ae=!!M.alphaHash,Le=!!M.extensions;let Ge=Di;M.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ge=t.toneMapping);const lt={shaderID:he,shaderType:M.type,shaderName:M.name,vertexShader:Je,fragmentShader:je,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:le,batchingColor:le&&k._colorsTexture!==null,instancing:ie,instancingColor:ie&&k.instanceColor!==null,instancingMorph:ie&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ts,alphaToCoverage:!!M.alphaToCoverage,map:Ne,matcap:De,envMap:v,envMapMode:v&&Z.mapping,envMapCubeUVHeight:N,aoMap:L,lightMap:F,bumpMap:ee,normalMap:G,displacementMap:h&&te,emissiveMap:K,normalMapObjectSpace:G&&M.normalMapType===CE,normalMapTangentSpace:G&&M.normalMapType===Bm,metalnessMap:re,roughnessMap:ue,anisotropy:oe,anisotropyMap:$,clearcoat:w,clearcoatMap:_e,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ee,dispersion:S,iridescence:I,iridescenceMap:Ae,iridescenceThicknessMap:ce,sheen:W,sheenColorMap:ye,sheenRoughnessMap:Fe,specularMap:be,specularColorMap:ve,specularIntensityMap:Ve,transmission:Q,transmissionMap:O,thicknessMap:me,gradientMap:xe,opaque:M.transparent===!1&&M.blending===Gr&&M.alphaToCoverage===!1,alphaMap:Ce,alphaTest:de,alphaHash:ae,combine:M.combine,mapUv:Ne&&_(M.map.channel),aoMapUv:L&&_(M.aoMap.channel),lightMapUv:F&&_(M.lightMap.channel),bumpMapUv:ee&&_(M.bumpMap.channel),normalMapUv:G&&_(M.normalMap.channel),displacementMapUv:te&&_(M.displacementMap.channel),emissiveMapUv:K&&_(M.emissiveMap.channel),metalnessMapUv:re&&_(M.metalnessMap.channel),roughnessMapUv:ue&&_(M.roughnessMap.channel),anisotropyMapUv:$&&_(M.anisotropyMap.channel),clearcoatMapUv:_e&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&_(M.sheenRoughnessMap.channel),specularMapUv:be&&_(M.specularMap.channel),specularColorMapUv:ve&&_(M.specularColorMap.channel),specularIntensityMapUv:Ve&&_(M.specularIntensityMap.channel),transmissionMapUv:O&&_(M.transmissionMap.channel),thicknessMapUv:me&&_(M.thicknessMap.channel),alphaMapUv:Ce&&_(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(G||oe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(Ne||Ce),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:se,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ne&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===ot,decodeVideoTextureEmissive:K&&M.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(M.emissiveMap.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zn,flipSided:M.side===jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Le&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&M.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return lt.vertexUv1s=u.has(1),lt.vertexUv2s=u.has(2),lt.vertexUv3s=u.has(3),u.clear(),lt}function p(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)E.push(C),E.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(T(E,M),x(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function T(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const E=g[M.type];let C;if(E){const U=Ln[E];C=sM.clone(U.uniforms)}else C=M.uniforms;return C}function b(M,E){let C;for(let U=0,k=c.length;U<k;U++){const X=c[U];if(X.cacheKey===E){C=X,++C.usedTimes;break}}return C===void 0&&(C=new Iw(t,E,M,s),c.push(C)),C}function R(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function P(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:R,releaseShaderCache:P,programs:c,dispose:D}}function Bw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Hw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ed(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function td(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):n.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):n.unshift(p)}function u(f,h){n.length>1&&n.sort(f||Hw),i.length>1&&i.sort(h||ed),r.length>1&&r.sort(h||ed)}function c(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function kw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new td,t.set(i,[o])):r>=s.length?(o=new td,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function zw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new it};break;case"SpotLight":n={position:new Y,direction:new Y,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function Vw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Gw=0;function Ww(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Xw(t){const e=new zw,n=Vw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,s=new Et,o=new Et;function a(u){let c=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,x=0,y=0,b=0,R=0,P=0;u.sort(Ww);for(let M=0,E=u.length;M<E;M++){const C=u[M],U=C.color,k=C.intensity,X=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=U.r*k,f+=U.g*k,h+=U.b*k;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],k);P++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,N=n.get(C);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.directionalShadow[d]=N,i.directionalShadowMap[d]=J,i.directionalShadowMatrix[d]=C.shadow.matrix,T++}i.directional[d]=H,d++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(U).multiplyScalar(k),H.distance=X,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[_]=H;const Z=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,Z.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[_]=Z.matrix,C.castShadow){const N=n.get(C);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=J,y++}_++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(U).multiplyScalar(k),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const Z=C.shadow,N=n.get(C);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=C.shadow.matrix,x++}i.point[g]=H,g++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(k),H.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[p]=H,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==x||D.numSpotShadows!==y||D.numSpotMaps!==b||D.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=x,D.numSpotShadows=y,D.numSpotMaps=b,D.numLightProbes=P,i.version=Gw++)}function l(u,c){let f=0,h=0,d=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,T=u.length;p<T;p++){const x=u[p];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function nd(t){const e=new Xw(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function $w(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new nd(t),e.set(r,[a])):s>=o.length?(a=new nd(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const qw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yw(t,e,n){let i=new Km;const r=new rt,s=new rt,o=new _t,a=new gM({depthPacking:RE}),l=new _M,u={},c=n.maxTextureSize,f={[Ui]:jt,[jt]:Ui,[Zn]:Zn},h=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:qw,fragmentShader:jw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new li;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wm;let p=this.type;this.render=function(R,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=t.getRenderTarget(),E=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Li),U.buffers.depth.getReversed()?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=p!==$n&&this.type===$n,X=p===$n&&this.type!==$n;for(let J=0,H=R.length;J<H;J++){const Z=R[J],N=Z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const he=N.getFrameExtents();if(r.multiply(he),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/he.x),r.x=s.x*he.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/he.y),r.y=s.y*he.y,N.mapSize.y=s.y)),N.map===null||k===!0||X===!0){const Re=this.type!==$n?{minFilter:Tn,magFilter:Tn}:{};N.map!==null&&N.map.dispose(),N.map=new hr(r.x,r.y,Re),N.map.texture.name=Z.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Se=N.getViewportCount();for(let Re=0;Re<Se;Re++){const Ie=N.getViewport(Re);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),U.viewport(o),N.updateMatrices(Z,Re),i=N.getFrustum(),y(P,D,N.camera,Z,this.type)}N.isPointLightShadow!==!0&&this.type===$n&&T(N,D),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(M,E,C)};function T(R,P){const D=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new hr(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(P,null,D,h,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(P,null,D,d,_,null)}function x(R,P,D,M){let E=null;const C=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)E=C;else if(E=D.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const U=E.uuid,k=P.uuid;let X=u[U];X===void 0&&(X={},u[U]=X);let J=X[k];J===void 0&&(J=E.clone(),X[k]=J,P.addEventListener("dispose",b)),E=J}if(E.visible=P.visible,E.wireframe=P.wireframe,M===$n?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:f[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=t.properties.get(E);U.light=D}return E}function y(R,P,D,M,E){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===$n)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const k=e.update(R),X=R.material;if(Array.isArray(X)){const J=k.groups;for(let H=0,Z=J.length;H<Z;H++){const N=J[H],he=X[N.materialIndex];if(he&&he.visible){const Se=x(R,he,M,E);R.onBeforeShadow(t,R,P,D,k,Se,N),t.renderBufferDirect(D,null,k,Se,R,N),R.onAfterShadow(t,R,P,D,k,Se,N)}}}else if(X.visible){const J=x(R,X,M,E);R.onBeforeShadow(t,R,P,D,k,J,null),t.renderBufferDirect(D,null,k,J,R,null),R.onAfterShadow(t,R,P,D,k,J,null)}}const U=R.children;for(let k=0,X=U.length;k<X;k++)y(U[k],P,D,M,E)}function b(R){R.target.removeEventListener("dispose",b);for(const D in u){const M=u[D],E=R.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const Kw={[sc]:oc,[ac]:uc,[lc]:fc,[Jr]:cc,[oc]:sc,[uc]:ac,[fc]:lc,[cc]:Jr};function Zw(t,e){function n(){let O=!1;const me=new _t;let xe=null;const Ce=new _t(0,0,0,0);return{setMask:function(de){xe!==de&&!O&&(t.colorMask(de,de,de,de),xe=de)},setLocked:function(de){O=de},setClear:function(de,ae,Le,Ge,lt){lt===!0&&(de*=Ge,ae*=Ge,Le*=Ge),me.set(de,ae,Le,Ge),Ce.equals(me)===!1&&(t.clearColor(de,ae,Le,Ge),Ce.copy(me))},reset:function(){O=!1,xe=null,Ce.set(-1,0,0,0)}}}function i(){let O=!1,me=!1,xe=null,Ce=null,de=null;return{setReversed:function(ae){if(me!==ae){const Le=e.get("EXT_clip_control");ae?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),me=ae;const Ge=de;de=null,this.setClear(Ge)}},getReversed:function(){return me},setTest:function(ae){ae?B(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(ae){xe!==ae&&!O&&(t.depthMask(ae),xe=ae)},setFunc:function(ae){if(me&&(ae=Kw[ae]),Ce!==ae){switch(ae){case sc:t.depthFunc(t.NEVER);break;case oc:t.depthFunc(t.ALWAYS);break;case ac:t.depthFunc(t.LESS);break;case Jr:t.depthFunc(t.LEQUAL);break;case lc:t.depthFunc(t.EQUAL);break;case cc:t.depthFunc(t.GEQUAL);break;case uc:t.depthFunc(t.GREATER);break;case fc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ce=ae}},setLocked:function(ae){O=ae},setClear:function(ae){de!==ae&&(me&&(ae=1-ae),t.clearDepth(ae),de=ae)},reset:function(){O=!1,xe=null,Ce=null,de=null,me=!1}}}function r(){let O=!1,me=null,xe=null,Ce=null,de=null,ae=null,Le=null,Ge=null,lt=null;return{setTest:function(et){O||(et?B(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(et){me!==et&&!O&&(t.stencilMask(et),me=et)},setFunc:function(et,On,wn){(xe!==et||Ce!==On||de!==wn)&&(t.stencilFunc(et,On,wn),xe=et,Ce=On,de=wn)},setOp:function(et,On,wn){(ae!==et||Le!==On||Ge!==wn)&&(t.stencilOp(et,On,wn),ae=et,Le=On,Ge=wn)},setLocked:function(et){O=et},setClear:function(et){lt!==et&&(t.clearStencil(et),lt=et)},reset:function(){O=!1,me=null,xe=null,Ce=null,de=null,ae=null,Le=null,Ge=null,lt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,x=null,y=null,b=null,R=null,P=new it(0,0,0),D=0,M=!1,E=null,C=null,U=null,k=null,X=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(N)[1]),H=Z>=1):N.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),H=Z>=2);let he=null,Se={};const Re=t.getParameter(t.SCISSOR_BOX),Ie=t.getParameter(t.VIEWPORT),Je=new _t().fromArray(Re),je=new _t().fromArray(Ie);function ne(O,me,xe,Ce){const de=new Uint8Array(4),ae=t.createTexture();t.bindTexture(O,ae),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<xe;Le++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(me+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ae}const ge={};ge[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(t.DEPTH_TEST),o.setFunc(Jr),ee(!1),G(ah),B(t.CULL_FACE),L(Li);function B(O){c[O]!==!0&&(t.enable(O),c[O]=!0)}function se(O){c[O]!==!1&&(t.disable(O),c[O]=!1)}function ie(O,me){return f[O]!==me?(t.bindFramebuffer(O,me),f[O]=me,O===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=me),O===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=me),!0):!1}function le(O,me){let xe=d,Ce=!1;if(O){xe=h.get(me),xe===void 0&&(xe=[],h.set(me,xe));const de=O.textures;if(xe.length!==de.length||xe[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Le=de.length;ae<Le;ae++)xe[ae]=t.COLOR_ATTACHMENT0+ae;xe.length=de.length,Ce=!0}}else xe[0]!==t.BACK&&(xe[0]=t.BACK,Ce=!0);Ce&&t.drawBuffers(xe)}function Ne(O){return g!==O?(t.useProgram(O),g=O,!0):!1}const De={[Qi]:t.FUNC_ADD,[eE]:t.FUNC_SUBTRACT,[tE]:t.FUNC_REVERSE_SUBTRACT};De[nE]=t.MIN,De[iE]=t.MAX;const v={[rE]:t.ZERO,[sE]:t.ONE,[oE]:t.SRC_COLOR,[ic]:t.SRC_ALPHA,[hE]:t.SRC_ALPHA_SATURATE,[uE]:t.DST_COLOR,[lE]:t.DST_ALPHA,[aE]:t.ONE_MINUS_SRC_COLOR,[rc]:t.ONE_MINUS_SRC_ALPHA,[fE]:t.ONE_MINUS_DST_COLOR,[cE]:t.ONE_MINUS_DST_ALPHA,[dE]:t.CONSTANT_COLOR,[pE]:t.ONE_MINUS_CONSTANT_COLOR,[mE]:t.CONSTANT_ALPHA,[gE]:t.ONE_MINUS_CONSTANT_ALPHA};function L(O,me,xe,Ce,de,ae,Le,Ge,lt,et){if(O===Li){_===!0&&(se(t.BLEND),_=!1);return}if(_===!1&&(B(t.BLEND),_=!0),O!==QS){if(O!==m||et!==M){if((p!==Qi||y!==Qi)&&(t.blendEquation(t.FUNC_ADD),p=Qi,y=Qi),et)switch(O){case Gr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lh:t.blendFunc(t.ONE,t.ONE);break;case ch:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case uh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Gr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ch:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,x=null,b=null,R=null,P.set(0,0,0),D=0,m=O,M=et}return}de=de||me,ae=ae||xe,Le=Le||Ce,(me!==p||de!==y)&&(t.blendEquationSeparate(De[me],De[de]),p=me,y=de),(xe!==T||Ce!==x||ae!==b||Le!==R)&&(t.blendFuncSeparate(v[xe],v[Ce],v[ae],v[Le]),T=xe,x=Ce,b=ae,R=Le),(Ge.equals(P)===!1||lt!==D)&&(t.blendColor(Ge.r,Ge.g,Ge.b,lt),P.copy(Ge),D=lt),m=O,M=!1}function F(O,me){O.side===Zn?se(t.CULL_FACE):B(t.CULL_FACE);let xe=O.side===jt;me&&(xe=!xe),ee(xe),O.blending===Gr&&O.transparent===!1?L(Li):L(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Ce=O.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),K(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?B(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(O){E!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),E=O)}function G(O){O!==KS?(B(t.CULL_FACE),O!==C&&(O===ah?t.cullFace(t.BACK):O===ZS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),C=O}function te(O){O!==U&&(H&&t.lineWidth(O),U=O)}function K(O,me,xe){O?(B(t.POLYGON_OFFSET_FILL),(k!==me||X!==xe)&&(t.polygonOffset(me,xe),k=me,X=xe)):se(t.POLYGON_OFFSET_FILL)}function re(O){O?B(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function ue(O){O===void 0&&(O=t.TEXTURE0+J-1),he!==O&&(t.activeTexture(O),he=O)}function oe(O,me,xe){xe===void 0&&(he===null?xe=t.TEXTURE0+J-1:xe=he);let Ce=Se[xe];Ce===void 0&&(Ce={type:void 0,texture:void 0},Se[xe]=Ce),(Ce.type!==O||Ce.texture!==me)&&(he!==xe&&(t.activeTexture(xe),he=xe),t.bindTexture(O,me||ge[O]),Ce.type=O,Ce.texture=me)}function w(){const O=Se[he];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{t.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{t.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{t.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{t.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{t.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{t.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{t.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(O){Je.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Je.copy(O))}function Fe(O){je.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),je.copy(O))}function be(O,me){let xe=u.get(me);xe===void 0&&(xe=new WeakMap,u.set(me,xe));let Ce=xe.get(O);Ce===void 0&&(Ce=t.getUniformBlockIndex(me,O.name),xe.set(O,Ce))}function ve(O,me){const Ce=u.get(me).get(O);l.get(me)!==Ce&&(t.uniformBlockBinding(me,Ce,O.__bindingPointIndex),l.set(me,Ce))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},he=null,Se={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,x=null,y=null,b=null,R=null,P=new it(0,0,0),D=0,M=!1,E=null,C=null,U=null,k=null,X=null,Je.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:B,disable:se,bindFramebuffer:ie,drawBuffers:le,useProgram:Ne,setBlending:L,setMaterial:F,setFlipSided:ee,setCullFace:G,setLineWidth:te,setPolygonOffset:K,setScissorTest:re,activeTexture:ue,bindTexture:oe,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:I,texImage2D:Ae,texImage3D:ce,updateUBOMapping:be,uniformBlockBinding:ve,texStorage2D:fe,texStorage3D:Ee,texSubImage2D:W,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:_e,scissor:ye,viewport:Fe,reset:Ve}}function Jw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new rt,c=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return d?new OffscreenCanvas(w,S):ca("canvas")}function _(w,S,I){let W=1;const Q=oe(w);if((Q.width>I||Q.height>I)&&(W=I/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(W*Q.width),_e=Math.floor(W*Q.height);f===void 0&&(f=g($,_e));const fe=S?g($,_e):f;return fe.width=$,fe.height=_e,fe.getContext("2d").drawImage(w,0,0,$,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+_e+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){t.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(w,S,I,W,Q=!1){if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=S;if(S===t.RED&&(I===t.FLOAT&&($=t.R32F),I===t.HALF_FLOAT&&($=t.R16F),I===t.UNSIGNED_BYTE&&($=t.R8)),S===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&($=t.R8UI),I===t.UNSIGNED_SHORT&&($=t.R16UI),I===t.UNSIGNED_INT&&($=t.R32UI),I===t.BYTE&&($=t.R8I),I===t.SHORT&&($=t.R16I),I===t.INT&&($=t.R32I)),S===t.RG&&(I===t.FLOAT&&($=t.RG32F),I===t.HALF_FLOAT&&($=t.RG16F),I===t.UNSIGNED_BYTE&&($=t.RG8)),S===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&($=t.RG8UI),I===t.UNSIGNED_SHORT&&($=t.RG16UI),I===t.UNSIGNED_INT&&($=t.RG32UI),I===t.BYTE&&($=t.RG8I),I===t.SHORT&&($=t.RG16I),I===t.INT&&($=t.RG32I)),S===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&($=t.RGB8UI),I===t.UNSIGNED_SHORT&&($=t.RGB16UI),I===t.UNSIGNED_INT&&($=t.RGB32UI),I===t.BYTE&&($=t.RGB8I),I===t.SHORT&&($=t.RGB16I),I===t.INT&&($=t.RGB32I)),S===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&($=t.RGBA8UI),I===t.UNSIGNED_SHORT&&($=t.RGBA16UI),I===t.UNSIGNED_INT&&($=t.RGBA32UI),I===t.BYTE&&($=t.RGBA8I),I===t.SHORT&&($=t.RGBA16I),I===t.INT&&($=t.RGBA32I)),S===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),S===t.RGBA){const _e=Q?aa:Ze.getTransfer(W);I===t.FLOAT&&($=t.RGBA32F),I===t.HALF_FLOAT&&($=t.RGBA16F),I===t.UNSIGNED_BYTE&&($=_e===ot?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(w,S){let I;return w?S===null||S===fr||S===Fs?I=t.DEPTH24_STENCIL8:S===Jn?I=t.DEPTH32F_STENCIL8:S===Ns&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fr||S===Fs?I=t.DEPTH_COMPONENT24:S===Jn?I=t.DEPTH_COMPONENT32F:S===Ns&&(I=t.DEPTH_COMPONENT16),I}function b(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Tn&&w.minFilter!==In?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){const S=w.target;S.removeEventListener("dispose",R),D(S),S.isVideoTexture&&c.delete(S)}function P(w){const S=w.target;S.removeEventListener("dispose",P),E(S)}function D(w){const S=i.get(w);if(S.__webglInit===void 0)return;const I=w.source,W=h.get(I);if(W){const Q=W[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(w),Object.keys(W).length===0&&h.delete(I)}i.remove(w)}function M(w){const S=i.get(w);t.deleteTexture(S.__webglTexture);const I=w.source,W=h.get(I);delete W[S.__cacheKey],o.memory.textures--}function E(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let Q=0;Q<S.__webglFramebuffer[W].length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[W][Q]);else t.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)t.deleteFramebuffer(S.__webglFramebuffer[W]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const I=w.textures;for(let W=0,Q=I.length;W<Q;W++){const $=i.get(I[W]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(I[W])}i.remove(w)}let C=0;function U(){C=0}function k(){const w=C;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),C+=1,w}function X(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function J(w,S){const I=i.get(w);if(w.isVideoTexture&&re(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&I.__version!==w.version){const W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(I,w,S);return}}else w.isExternalTexture&&(I.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+S)}function H(w,S){const I=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){ge(I,w,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+S)}function Z(w,S){const I=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){ge(I,w,S);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+S)}function N(w,S){const I=i.get(w);if(w.version>0&&I.__version!==w.version){B(I,w,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+S)}const he={[pc]:t.REPEAT,[tr]:t.CLAMP_TO_EDGE,[mc]:t.MIRRORED_REPEAT},Se={[Tn]:t.NEAREST,[AE]:t.NEAREST_MIPMAP_NEAREST,[lo]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[Qa]:t.LINEAR_MIPMAP_NEAREST,[nr]:t.LINEAR_MIPMAP_LINEAR},Re={[PE]:t.NEVER,[FE]:t.ALWAYS,[LE]:t.LESS,[Hm]:t.LEQUAL,[DE]:t.EQUAL,[NE]:t.GEQUAL,[IE]:t.GREATER,[UE]:t.NOTEQUAL};function Ie(w,S){if(S.type===Jn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===In||S.magFilter===Qa||S.magFilter===lo||S.magFilter===nr||S.minFilter===In||S.minFilter===Qa||S.minFilter===lo||S.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,he[S.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,he[S.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,he[S.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Se[S.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Se[S.minFilter]),S.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Tn||S.minFilter!==lo&&S.minFilter!==nr||S.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Je(w,S){let I=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",R));const W=S.source;let Q=h.get(W);Q===void 0&&(Q={},h.set(W,Q));const $=X(S);if($!==w.__cacheKey){Q[$]===void 0&&(Q[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Q[$].usedTimes++;const _e=Q[w.__cacheKey];_e!==void 0&&(Q[w.__cacheKey].usedTimes--,_e.usedTimes===0&&M(S)),w.__cacheKey=$,w.__webglTexture=Q[$].texture}return I}function je(w,S,I){return Math.floor(Math.floor(w/I)/S)}function ne(w,S,I,W){const $=w.updateRanges;if($.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,I,W,S.data);else{$.sort((ce,ye)=>ce.start-ye.start);let _e=0;for(let ce=1;ce<$.length;ce++){const ye=$[_e],Fe=$[ce],be=ye.start+ye.count,ve=je(Fe.start,S.width,4),Ve=je(ye.start,S.width,4);Fe.start<=be+1&&ve===Ve&&je(Fe.start+Fe.count-1,S.width,4)===ve?ye.count=Math.max(ye.count,Fe.start+Fe.count-ye.start):(++_e,$[_e]=Fe)}$.length=_e+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Ee=t.getParameter(t.UNPACK_SKIP_PIXELS),Ae=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let ce=0,ye=$.length;ce<ye;ce++){const Fe=$[ce],be=Math.floor(Fe.start/4),ve=Math.ceil(Fe.count/4),Ve=be%S.width,O=Math.floor(be/S.width),me=ve,xe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,Ve,O,me,xe,I,W,S.data)}w.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ae)}}function ge(w,S,I){let W=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=t.TEXTURE_3D);const Q=Je(w,S),$=S.source;n.bindTexture(W,w.__webglTexture,t.TEXTURE0+I);const _e=i.get($);if($.version!==_e.__version||Q===!0){n.activeTexture(t.TEXTURE0+I);const fe=Ze.getPrimaries(Ze.workingColorSpace),Ee=S.colorSpace===wi?null:Ze.getPrimaries(S.colorSpace),Ae=S.colorSpace===wi||fe===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ce=_(S.image,!1,r.maxTextureSize);ce=ue(S,ce);const ye=s.convert(S.format,S.colorSpace),Fe=s.convert(S.type);let be=x(S.internalFormat,ye,Fe,S.colorSpace,S.isVideoTexture);Ie(W,S);let ve;const Ve=S.mipmaps,O=S.isVideoTexture!==!0,me=_e.__version===void 0||Q===!0,xe=$.dataReady,Ce=b(S,ce);if(S.isDepthTexture)be=y(S.format===Bs,S.type),me&&(O?n.texStorage2D(t.TEXTURE_2D,1,be,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,be,ce.width,ce.height,0,ye,Fe,null));else if(S.isDataTexture)if(Ve.length>0){O&&me&&n.texStorage2D(t.TEXTURE_2D,Ce,be,Ve[0].width,Ve[0].height);for(let de=0,ae=Ve.length;de<ae;de++)ve=Ve[de],O?xe&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ve.width,ve.height,ye,Fe,ve.data):n.texImage2D(t.TEXTURE_2D,de,be,ve.width,ve.height,0,ye,Fe,ve.data);S.generateMipmaps=!1}else O?(me&&n.texStorage2D(t.TEXTURE_2D,Ce,be,ce.width,ce.height),xe&&ne(S,ce,ye,Fe)):n.texImage2D(t.TEXTURE_2D,0,be,ce.width,ce.height,0,ye,Fe,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){O&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ce,be,Ve[0].width,Ve[0].height,ce.depth);for(let de=0,ae=Ve.length;de<ae;de++)if(ve=Ve[de],S.format!==En)if(ye!==null)if(O){if(xe)if(S.layerUpdates.size>0){const Le=Dh(ve.width,ve.height,S.format,S.type);for(const Ge of S.layerUpdates){const lt=ve.data.subarray(Ge*Le/ve.data.BYTES_PER_ELEMENT,(Ge+1)*Le/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,Ge,ve.width,ve.height,1,ye,lt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,ve.width,ve.height,ce.depth,ye,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,be,ve.width,ve.height,ce.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?xe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,ve.width,ve.height,ce.depth,ye,Fe,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,be,ve.width,ve.height,ce.depth,0,ye,Fe,ve.data)}else{O&&me&&n.texStorage2D(t.TEXTURE_2D,Ce,be,Ve[0].width,Ve[0].height);for(let de=0,ae=Ve.length;de<ae;de++)ve=Ve[de],S.format!==En?ye!==null?O?xe&&n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,ve.width,ve.height,ye,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,de,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?xe&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ve.width,ve.height,ye,Fe,ve.data):n.texImage2D(t.TEXTURE_2D,de,be,ve.width,ve.height,0,ye,Fe,ve.data)}else if(S.isDataArrayTexture)if(O){if(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ce,be,ce.width,ce.height,ce.depth),xe)if(S.layerUpdates.size>0){const de=Dh(ce.width,ce.height,S.format,S.type);for(const ae of S.layerUpdates){const Le=ce.data.subarray(ae*de/ce.data.BYTES_PER_ELEMENT,(ae+1)*de/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,ce.width,ce.height,1,ye,Fe,Le)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,Fe,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ce.width,ce.height,ce.depth,0,ye,Fe,ce.data);else if(S.isData3DTexture)O?(me&&n.texStorage3D(t.TEXTURE_3D,Ce,be,ce.width,ce.height,ce.depth),xe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,Fe,ce.data)):n.texImage3D(t.TEXTURE_3D,0,be,ce.width,ce.height,ce.depth,0,ye,Fe,ce.data);else if(S.isFramebufferTexture){if(me)if(O)n.texStorage2D(t.TEXTURE_2D,Ce,be,ce.width,ce.height);else{let de=ce.width,ae=ce.height;for(let Le=0;Le<Ce;Le++)n.texImage2D(t.TEXTURE_2D,Le,be,de,ae,0,ye,Fe,null),de>>=1,ae>>=1}}else if(Ve.length>0){if(O&&me){const de=oe(Ve[0]);n.texStorage2D(t.TEXTURE_2D,Ce,be,de.width,de.height)}for(let de=0,ae=Ve.length;de<ae;de++)ve=Ve[de],O?xe&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ye,Fe,ve):n.texImage2D(t.TEXTURE_2D,de,be,ye,Fe,ve);S.generateMipmaps=!1}else if(O){if(me){const de=oe(ce);n.texStorage2D(t.TEXTURE_2D,Ce,be,de.width,de.height)}xe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Fe,ce)}else n.texImage2D(t.TEXTURE_2D,0,be,ye,Fe,ce);m(S)&&p(W),_e.__version=$.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function B(w,S,I){if(S.image.length!==6)return;const W=Je(w,S),Q=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+I);const $=i.get(Q);if(Q.version!==$.__version||W===!0){n.activeTexture(t.TEXTURE0+I);const _e=Ze.getPrimaries(Ze.workingColorSpace),fe=S.colorSpace===wi?null:Ze.getPrimaries(S.colorSpace),Ee=S.colorSpace===wi||_e===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let ae=0;ae<6;ae++)!Ae&&!ce?ye[ae]=_(S.image[ae],!0,r.maxCubemapSize):ye[ae]=ce?S.image[ae].image:S.image[ae],ye[ae]=ue(S,ye[ae]);const Fe=ye[0],be=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),Ve=x(S.internalFormat,be,ve,S.colorSpace),O=S.isVideoTexture!==!0,me=$.__version===void 0||W===!0,xe=Q.dataReady;let Ce=b(S,Fe);Ie(t.TEXTURE_CUBE_MAP,S);let de;if(Ae){O&&me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,Ve,Fe.width,Fe.height);for(let ae=0;ae<6;ae++){de=ye[ae].mipmaps;for(let Le=0;Le<de.length;Le++){const Ge=de[Le];S.format!==En?be!==null?O?xe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Ge.width,Ge.height,be,Ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,Ve,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Ge.width,Ge.height,be,ve,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,Ve,Ge.width,Ge.height,0,be,ve,Ge.data)}}}else{if(de=S.mipmaps,O&&me){de.length>0&&Ce++;const ae=oe(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,Ve,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ce){O?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ye[ae].width,ye[ae].height,be,ve,ye[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ve,ye[ae].width,ye[ae].height,0,be,ve,ye[ae].data);for(let Le=0;Le<de.length;Le++){const lt=de[Le].image[ae].image;O?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,lt.width,lt.height,be,ve,lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,Ve,lt.width,lt.height,0,be,ve,lt.data)}}else{O?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,be,ve,ye[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ve,be,ve,ye[ae]);for(let Le=0;Le<de.length;Le++){const Ge=de[Le];O?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,be,ve,Ge.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,Ve,be,ve,Ge.image[ae])}}}m(S)&&p(t.TEXTURE_CUBE_MAP),$.__version=Q.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function se(w,S,I,W,Q,$){const _e=s.convert(I.format,I.colorSpace),fe=s.convert(I.type),Ee=x(I.internalFormat,_e,fe,I.colorSpace),Ae=i.get(S),ce=i.get(I);if(ce.__renderTarget=S,!Ae.__hasExternalTextures){const ye=Math.max(1,S.width>>$),Fe=Math.max(1,S.height>>$);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,$,Ee,ye,Fe,S.depth,0,_e,fe,null):n.texImage2D(Q,$,Ee,ye,Fe,0,_e,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),K(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,Q,ce.__webglTexture,0,te(S)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,Q,ce.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(w,S,I){if(t.bindRenderbuffer(t.RENDERBUFFER,w),S.depthBuffer){const W=S.depthTexture,Q=W&&W.isDepthTexture?W.type:null,$=y(S.stencilBuffer,Q),_e=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=te(S);K(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,$,S.width,S.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,$,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,$,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,w)}else{const W=S.textures;for(let Q=0;Q<W.length;Q++){const $=W[Q],_e=s.convert($.format,$.colorSpace),fe=s.convert($.type),Ee=x($.internalFormat,_e,fe,$.colorSpace),Ae=te(S);I&&K(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,Ee,S.width,S.height):K(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,Ee,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(S.depthTexture);W.__renderTarget=S,(!W.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);const Q=W.__webglTexture,$=te(S);if(S.depthTexture.format===Os)K(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Bs)K(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ne(w){const S=i.get(w),I=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=W}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const W=w.texture.mipmaps;W&&W.length>0?le(S.__webglFramebuffer[0],w):le(S.__webglFramebuffer,w)}else if(I){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=t.createRenderbuffer(),ie(S.__webglDepthbuffer[W],w,!1);else{const Q=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,$)}}else{const W=w.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ie(S.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,$)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(w,S,I){const W=i.get(w);S!==void 0&&se(W.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Ne(w)}function v(w){const S=w.texture,I=i.get(w),W=i.get(S);w.addEventListener("dispose",P);const Q=w.textures,$=w.isWebGLCubeRenderTarget===!0,_e=Q.length>1;if(_e||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=S.version,o.memory.textures++),$){I.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[fe]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)I.__webglFramebuffer[fe][Ee]=t.createFramebuffer()}else I.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)I.__webglFramebuffer[fe]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(_e)for(let fe=0,Ee=Q.length;fe<Ee;fe++){const Ae=i.get(Q[fe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(w.samples>0&&K(w)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const Ee=Q[fe];I.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[fe]);const Ae=s.convert(Ee.format,Ee.colorSpace),ce=s.convert(Ee.type),ye=x(Ee.internalFormat,Ae,ce,Ee.colorSpace,w.isXRRenderTarget===!0),Fe=te(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ye,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,I.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(I.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)se(I.__webglFramebuffer[fe][Ee],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee);else se(I.__webglFramebuffer[fe],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(S)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){for(let fe=0,Ee=Q.length;fe<Ee;fe++){const Ae=Q[fe],ce=i.get(Ae);let ye=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ye=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ye,ce.__webglTexture),Ie(ye,Ae),se(I.__webglFramebuffer,w,Ae,t.COLOR_ATTACHMENT0+fe,ye,0),m(Ae)&&p(ye)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,W.__webglTexture),Ie(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)se(I.__webglFramebuffer[Ee],w,S,t.COLOR_ATTACHMENT0,fe,Ee);else se(I.__webglFramebuffer,w,S,t.COLOR_ATTACHMENT0,fe,0);m(S)&&p(fe),n.unbindTexture()}w.depthBuffer&&Ne(w)}function L(w){const S=w.textures;for(let I=0,W=S.length;I<W;I++){const Q=S[I];if(m(Q)){const $=T(w),_e=i.get(Q).__webglTexture;n.bindTexture($,_e),p($),n.unbindTexture()}}}const F=[],ee=[];function G(w){if(w.samples>0){if(K(w)===!1){const S=w.textures,I=w.width,W=w.height;let Q=t.COLOR_BUFFER_BIT;const $=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(w),fe=S.length>1;if(fe)for(let Ae=0;Ae<S.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ee=w.texture.mipmaps;Ee&&Ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Ae]);const ce=i.get(S[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,I,W,0,0,I,W,Q,t.NEAREST),l===!0&&(F.length=0,ee.length=0,F.push(t.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&w.resolveDepthBuffer===!1&&(F.push($),ee.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ee)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,F))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Ae=0;Ae<S.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Ae]);const ce=i.get(S[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function te(w){return Math.min(r.maxSamples,w.samples)}function K(w){const S=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function re(w){const S=o.render.frame;c.get(w)!==S&&(c.set(w,S),w.update())}function ue(w,S){const I=w.colorSpace,W=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||I!==ts&&I!==wi&&(Ze.getTransfer(I)===ot?(W!==En||Q!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}function oe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=N,this.rebindTextures=De,this.setupRenderTarget=v,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=se,this.useMultisampledRTT=K}function Qw(t,e){function n(i,r=wi){let s;const o=Ze.getTransfer(r);if(i===oi)return t.UNSIGNED_BYTE;if(i===Tu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===bu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Dm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Pm)return t.BYTE;if(i===Lm)return t.SHORT;if(i===Ns)return t.UNSIGNED_SHORT;if(i===Mu)return t.INT;if(i===fr)return t.UNSIGNED_INT;if(i===Jn)return t.FLOAT;if(i===Xs)return t.HALF_FLOAT;if(i===Im)return t.ALPHA;if(i===Um)return t.RGB;if(i===En)return t.RGBA;if(i===Os)return t.DEPTH_COMPONENT;if(i===Bs)return t.DEPTH_STENCIL;if(i===Nm)return t.RED;if(i===Au)return t.RED_INTEGER;if(i===Fm)return t.RG;if(i===wu)return t.RG_INTEGER;if(i===Ru)return t.RGBA_INTEGER;if(i===Fo||i===Oo||i===Bo||i===Ho)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gc||i===_c||i===vc||i===xc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_c)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yc||i===Sc||i===Ec)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yc||i===Sc)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ec)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mc||i===Tc||i===bc||i===Ac||i===wc||i===Rc||i===Cc||i===Pc||i===Lc||i===Dc||i===Ic||i===Uc||i===Nc||i===Fc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ac)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ic)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ko||i===Oc||i===Bc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ko)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Om||i===Hc||i===kc||i===zc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ko)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class ig extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const eR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new ig(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ni({vertexShader:eR,fragmentShader:tR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Nn(new Ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iR extends rs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,d=null,g=null;const _=new nR,m={},p=n.getContextAttributes();let T=null,x=null;const y=[],b=[],R=new rt;let P=null;const D=new pn;D.viewport=new _t;const M=new pn;M.viewport=new _t;const E=[D,M],C=new TM;let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ge=y[ne];return ge===void 0&&(ge=new El,y[ne]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ne){let ge=y[ne];return ge===void 0&&(ge=new El,y[ne]=ge),ge.getGripSpace()},this.getHand=function(ne){let ge=y[ne];return ge===void 0&&(ge=new El,y[ne]=ge),ge.getHandSpace()};function X(ne){const ge=b.indexOf(ne.inputSource);if(ge===-1)return;const B=y[ge];B!==void 0&&(B.update(ne.inputSource,ne.frame,u||o),B.dispatchEvent({type:ne.type,data:ne.inputSource}))}function J(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",H);for(let ne=0;ne<y.length;ne++){const ge=b[ne];ge!==null&&(b[ne]=null,y[ne].disconnect(ge))}U=null,k=null,_.reset();for(const ne in m)delete m[ne];e.setRenderTarget(T),d=null,h=null,f=null,r=null,x=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ne){u=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",J),r.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,n)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let B=null,se=null,ie=null;p.depth&&(ie=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,B=p.stencil?Bs:Os,se=p.stencil?Fs:fr);const le={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:s};h=f.createProjectionLayer(le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new hr(h.textureWidth,h.textureHeight,{format:En,type:oi,depthTexture:new Zm(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const B={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,B),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new hr(d.framebufferWidth,d.framebufferHeight,{format:En,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(ne){for(let ge=0;ge<ne.removed.length;ge++){const B=ne.removed[ge],se=b.indexOf(B);se>=0&&(b[se]=null,y[se].disconnect(B))}for(let ge=0;ge<ne.added.length;ge++){const B=ne.added[ge];let se=b.indexOf(B);if(se===-1){for(let le=0;le<y.length;le++)if(le>=b.length){b.push(B),se=le;break}else if(b[le]===null){b[le]=B,se=le;break}if(se===-1)break}const ie=y[se];ie&&ie.connect(B)}}const Z=new Y,N=new Y;function he(ne,ge,B){Z.setFromMatrixPosition(ge.matrixWorld),N.setFromMatrixPosition(B.matrixWorld);const se=Z.distanceTo(N),ie=ge.projectionMatrix.elements,le=B.projectionMatrix.elements,Ne=ie[14]/(ie[10]-1),De=ie[14]/(ie[10]+1),v=(ie[9]+1)/ie[5],L=(ie[9]-1)/ie[5],F=(ie[8]-1)/ie[0],ee=(le[8]+1)/le[0],G=Ne*F,te=Ne*ee,K=se/(-F+ee),re=K*-F;if(ge.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(re),ne.translateZ(K),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ie[10]===-1)ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const ue=Ne+K,oe=De+K,w=G-re,S=te+(se-re),I=v*De/oe*ue,W=L*De/oe*ue;ne.projectionMatrix.makePerspective(w,S,I,W,ue,oe),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Se(ne,ge){ge===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ge.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let ge=ne.near,B=ne.far;_.texture!==null&&(_.depthNear>0&&(ge=_.depthNear),_.depthFar>0&&(B=_.depthFar)),C.near=M.near=D.near=ge,C.far=M.far=D.far=B,(U!==C.near||k!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),U=C.near,k=C.far),C.layers.mask=ne.layers.mask|6,D.layers.mask=C.layers.mask&3,M.layers.mask=C.layers.mask&5;const se=ne.parent,ie=C.cameras;Se(C,se);for(let le=0;le<ie.length;le++)Se(ie[le],se);ie.length===2?he(C,D,M):C.projectionMatrix.copy(D.projectionMatrix),Re(ne,C,se)};function Re(ne,ge,B){B===null?ne.matrix.copy(ge.matrixWorld):(ne.matrix.copy(B.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ge.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Vc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(C)},this.getCameraTexture=function(ne){return m[ne]};let Ie=null;function Je(ne,ge){if(c=ge.getViewerPose(u||o),g=ge,c!==null){const B=c.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let se=!1;B.length!==C.cameras.length&&(C.cameras.length=0,se=!0);for(let De=0;De<B.length;De++){const v=B[De];let L=null;if(d!==null)L=d.getViewport(v);else{const ee=f.getViewSubImage(h,v);L=ee.viewport,De===0&&(e.setRenderTargetTextures(x,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(x))}let F=E[De];F===void 0&&(F=new pn,F.layers.enable(De),F.viewport=new _t,E[De]=F),F.matrix.fromArray(v.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(v.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(L.x,L.y,L.width,L.height),De===0&&(C.matrix.copy(F.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),se===!0&&C.cameras.push(F)}const ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const De=f.getDepthInformation(B[0]);De&&De.isValid&&De.texture&&_.init(De,r.renderState)}if(ie&&ie.includes("camera-access")&&(e.state.unbindTexture(),f))for(let De=0;De<B.length;De++){const v=B[De].camera;if(v){let L=m[v];L||(L=new ig,m[v]=L);const F=f.getCameraImage(v);L.sourceTexture=F}}}for(let B=0;B<y.length;B++){const se=b[B],ie=y[B];se!==null&&ie!==void 0&&ie.update(se,ge,u||o)}Ie&&Ie(ne,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}const je=new Jm;je.setAnimationLoop(Je),this.setAnimationLoop=function(ne){Ie=ne},this.dispose=function(){}}}const ji=new ai,rR=new Et;function sR(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,qm(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,x):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),x=T.envMap,y=T.envMapRotation;x&&(m.envMap.value=x,ji.copy(y),ji.x*=-1,ji.y*=-1,ji.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(rR.makeRotationFromEuler(ji)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=x*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oR(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){const y=x.program;i.uniformBlockBinding(T,y)}function u(T,x){let y=r[T.id];y===void 0&&(g(T),y=c(T),r[T.id]=y,T.addEventListener("dispose",m));const b=x.program;i.updateUBOMapping(T,b);const R=e.render.frame;s[T.id]!==R&&(h(T),s[T.id]=R)}function c(T){const x=f();T.__bindingPointIndex=x;const y=t.createBuffer(),b=T.__size,R=T.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const x=r[T.id],y=T.uniforms,b=T.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let R=0,P=y.length;R<P;R++){const D=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,E=D.length;M<E;M++){const C=D[M];if(d(C,R,M,b)===!0){const U=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let J=0;J<k.length;J++){const H=k[J],Z=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,U+X,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(T,x,y,b){const R=T.value,P=x+"_"+y;if(b[P]===void 0)return typeof R=="number"||typeof R=="boolean"?b[P]=R:b[P]=R.clone(),!0;{const D=b[P];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return b[P]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(T){const x=T.uniforms;let y=0;const b=16;for(let P=0,D=x.length;P<D;P++){const M=Array.isArray(x[P])?x[P]:[x[P]];for(let E=0,C=M.length;E<C;E++){const U=M[E],k=Array.isArray(U.value)?U.value:[U.value];for(let X=0,J=k.length;X<J;X++){const H=k[X],Z=_(H),N=y%b,he=N%Z.boundary,Se=N+he;y+=he,Se!==0&&b-Se<Z.storage&&(y+=b-Se),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=Z.storage}}}const R=y%b;return R>0&&(y+=b-R),T.__size=y,T.__cache={},this}function _(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function m(T){const x=T.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const T in r)t.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class aR{constructor(e={}){const{canvas:n=BE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let b=!1;this._outputColorSpace=nn;let R=0,P=0,D=null,M=-1,E=null;const C=new _t,U=new _t;let k=null;const X=new it(0);let J=0,H=n.width,Z=n.height,N=1,he=null,Se=null;const Re=new _t(0,0,H,Z),Ie=new _t(0,0,H,Z);let Je=!1;const je=new Km;let ne=!1,ge=!1;const B=new Et,se=new Y,ie=new _t,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function De(){return D===null?N:1}let v=i;function L(A,z){return n.getContext(A,z)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Eu}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",Ce,!1),n.addEventListener("webglcontextcreationerror",de,!1),v===null){const z="webgl2";if(v=L(z,A),v===null)throw L(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let F,ee,G,te,K,re,ue,oe,w,S,I,W,Q,$,_e,fe,Ee,Ae,ce,ye,Fe,be,ve,Ve;function O(){F=new _A(v),F.init(),be=new Qw(v,F),ee=new uA(v,F,e,be),G=new Zw(v,F),ee.reversedDepthBuffer&&h&&G.buffers.depth.setReversed(!0),te=new yA(v),K=new Bw,re=new Jw(v,F,G,K,ee,be,te),ue=new hA(y),oe=new gA(y),w=new AM(v),ve=new lA(v,w),S=new vA(v,w,te,ve),I=new EA(v,S,w,te),ce=new SA(v,ee,re),fe=new fA(K),W=new Ow(y,ue,oe,F,ee,ve,fe),Q=new sR(y,K),$=new kw,_e=new $w(F),Ae=new aA(y,ue,oe,G,I,d,l),Ee=new Yw(y,I,ee),Ve=new oR(v,te,ee,G),ye=new cA(v,F,te),Fe=new xA(v,F,te),te.programs=W.programs,y.capabilities=ee,y.extensions=F,y.properties=K,y.renderLists=$,y.shadowMap=Ee,y.state=G,y.info=te}O();const me=new iR(y,v);this.xr=me,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const A=F.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=F.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(A){A!==void 0&&(N=A,this.setSize(H,Z,!1))},this.getSize=function(A){return A.set(H,Z)},this.setSize=function(A,z,q=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,Z=z,n.width=Math.floor(A*N),n.height=Math.floor(z*N),q===!0&&(n.style.width=A+"px",n.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(H*N,Z*N).floor()},this.setDrawingBufferSize=function(A,z,q){H=A,Z=z,N=q,n.width=Math.floor(A*q),n.height=Math.floor(z*q),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(Re)},this.setViewport=function(A,z,q,j){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,z,q,j),G.viewport(C.copy(Re).multiplyScalar(N).round())},this.getScissor=function(A){return A.copy(Ie)},this.setScissor=function(A,z,q,j){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,z,q,j),G.scissor(U.copy(Ie).multiplyScalar(N).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(A){G.setScissorTest(Je=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,q=!0){let j=0;if(A){let V=!1;if(D!==null){const pe=D.texture.format;V=pe===Ru||pe===wu||pe===Au}if(V){const pe=D.texture.type,Te=pe===oi||pe===fr||pe===Ns||pe===Fs||pe===Tu||pe===bu,Pe=Ae.getClearColor(),we=Ae.getClearAlpha(),Be=Pe.r,ze=Pe.g,Ue=Pe.b;Te?(g[0]=Be,g[1]=ze,g[2]=Ue,g[3]=we,v.clearBufferuiv(v.COLOR,0,g)):(_[0]=Be,_[1]=ze,_[2]=Ue,_[3]=we,v.clearBufferiv(v.COLOR,0,_))}else j|=v.COLOR_BUFFER_BIT}z&&(j|=v.DEPTH_BUFFER_BIT),q&&(j|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",Ce,!1),n.removeEventListener("webglcontextcreationerror",de,!1),Ae.dispose(),$.dispose(),_e.dispose(),K.dispose(),ue.dispose(),oe.dispose(),I.dispose(),ve.dispose(),Ve.dispose(),W.dispose(),me.dispose(),me.removeEventListener("sessionstart",wn),me.removeEventListener("sessionend",Iu),Bi.stop()};function xe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=te.autoReset,z=Ee.enabled,q=Ee.autoUpdate,j=Ee.needsUpdate,V=Ee.type;O(),te.autoReset=A,Ee.enabled=z,Ee.autoUpdate=q,Ee.needsUpdate=j,Ee.type=V}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){const z=A.target;z.removeEventListener("dispose",ae),Le(z)}function Le(A){Ge(A),K.remove(A)}function Ge(A){const z=K.get(A).programs;z!==void 0&&(z.forEach(function(q){W.releaseProgram(q)}),A.isShaderMaterial&&W.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,q,j,V,pe){z===null&&(z=le);const Te=V.isMesh&&V.matrixWorld.determinant()<0,Pe=rg(A,z,q,j,V);G.setMaterial(j,Te);let we=q.index,Be=1;if(j.wireframe===!0){if(we=S.getWireframeAttribute(q),we===void 0)return;Be=2}const ze=q.drawRange,Ue=q.attributes.position;let $e=ze.start*Be,st=(ze.start+ze.count)*Be;pe!==null&&($e=Math.max($e,pe.start*Be),st=Math.min(st,(pe.start+pe.count)*Be)),we!==null?($e=Math.max($e,0),st=Math.min(st,we.count)):Ue!=null&&($e=Math.max($e,0),st=Math.min(st,Ue.count));const gt=st-$e;if(gt<0||gt===1/0)return;ve.setup(V,j,Pe,q,we);let ft,at=ye;if(we!==null&&(ft=w.get(we),at=Fe,at.setIndex(ft)),V.isMesh)j.wireframe===!0?(G.setLineWidth(j.wireframeLinewidth*De()),at.setMode(v.LINES)):at.setMode(v.TRIANGLES);else if(V.isLine){let Oe=j.linewidth;Oe===void 0&&(Oe=1),G.setLineWidth(Oe*De()),V.isLineSegments?at.setMode(v.LINES):V.isLineLoop?at.setMode(v.LINE_LOOP):at.setMode(v.LINE_STRIP)}else V.isPoints?at.setMode(v.POINTS):V.isSprite&&at.setMode(v.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Wr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))at.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Oe=V._multiDrawStarts,pt=V._multiDrawCounts,Ke=V._multiDrawCount,Zt=we?w.get(we).bytesPerElement:1,pr=K.get(j).currentProgram.getUniforms();for(let Jt=0;Jt<Ke;Jt++)pr.setValue(v,"_gl_DrawID",Jt),at.render(Oe[Jt]/Zt,pt[Jt])}else if(V.isInstancedMesh)at.renderInstances($e,gt,V.count);else if(q.isInstancedBufferGeometry){const Oe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,pt=Math.min(q.instanceCount,Oe);at.renderInstances($e,gt,pt)}else at.render($e,gt)};function lt(A,z,q){A.transparent===!0&&A.side===Zn&&A.forceSinglePass===!1?(A.side=jt,A.needsUpdate=!0,Js(A,z,q),A.side=Ui,A.needsUpdate=!0,Js(A,z,q),A.side=Zn):Js(A,z,q)}this.compile=function(A,z,q=null){q===null&&(q=A),p=_e.get(q),p.init(z),x.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==q&&A.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const j=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pe=V.material;if(pe)if(Array.isArray(pe))for(let Te=0;Te<pe.length;Te++){const Pe=pe[Te];lt(Pe,q,V),j.add(Pe)}else lt(pe,q,V),j.add(pe)}),p=x.pop(),j},this.compileAsync=function(A,z,q=null){const j=this.compile(A,z,q);return new Promise(V=>{function pe(){if(j.forEach(function(Te){K.get(Te).currentProgram.isReady()&&j.delete(Te)}),j.size===0){V(A);return}setTimeout(pe,10)}F.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let et=null;function On(A){et&&et(A)}function wn(){Bi.stop()}function Iu(){Bi.start()}const Bi=new Jm;Bi.setAnimationLoop(On),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(A){et=A,me.setAnimationLoop(A),A===null?Bi.stop():Bi.start()},me.addEventListener("sessionstart",wn),me.addEventListener("sessionend",Iu),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(z),z=me.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,z,D),p=_e.get(A,x.length),p.init(z),x.push(p),B.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),je.setFromProjectionMatrix(B,Un,z.reversedDepth),ge=this.localClippingEnabled,ne=fe.init(this.clippingPlanes,ge),m=$.get(A,T.length),m.init(),T.push(m),me.enabled===!0&&me.isPresenting===!0){const pe=y.xr.getDepthSensingMesh();pe!==null&&Pa(pe,z,-1/0,y.sortObjects)}Pa(A,z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(he,Se),Ne=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Ne&&Ae.addToRenderList(m,A),this.info.render.frame++,ne===!0&&fe.beginShadows();const q=p.state.shadowsArray;Ee.render(q,A,z),ne===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,V=m.transmissive;if(p.setupLights(),z.isArrayCamera){const pe=z.cameras;if(V.length>0)for(let Te=0,Pe=pe.length;Te<Pe;Te++){const we=pe[Te];Nu(j,V,A,we)}Ne&&Ae.render(A);for(let Te=0,Pe=pe.length;Te<Pe;Te++){const we=pe[Te];Uu(m,A,we,we.viewport)}}else V.length>0&&Nu(j,V,A,z),Ne&&Ae.render(A),Uu(m,A,z);D!==null&&P===0&&(re.updateMultisampleRenderTarget(D),re.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(y,A,z),ve.resetDefaultState(),M=-1,E=null,x.pop(),x.length>0?(p=x[x.length-1],ne===!0&&fe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Pa(A,z,q,j){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||je.intersectsSprite(A)){j&&ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(B);const Te=I.update(A),Pe=A.material;Pe.visible&&m.push(A,Te,Pe,q,ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||je.intersectsObject(A))){const Te=I.update(A),Pe=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ie.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ie.copy(Te.boundingSphere.center)),ie.applyMatrix4(A.matrixWorld).applyMatrix4(B)),Array.isArray(Pe)){const we=Te.groups;for(let Be=0,ze=we.length;Be<ze;Be++){const Ue=we[Be],$e=Pe[Ue.materialIndex];$e&&$e.visible&&m.push(A,Te,$e,q,ie.z,Ue)}}else Pe.visible&&m.push(A,Te,Pe,q,ie.z,null)}}const pe=A.children;for(let Te=0,Pe=pe.length;Te<Pe;Te++)Pa(pe[Te],z,q,j)}function Uu(A,z,q,j){const V=A.opaque,pe=A.transmissive,Te=A.transparent;p.setupLightsView(q),ne===!0&&fe.setGlobalState(y.clippingPlanes,q),j&&G.viewport(C.copy(j)),V.length>0&&Zs(V,z,q),pe.length>0&&Zs(pe,z,q),Te.length>0&&Zs(Te,z,q),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Nu(A,z,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new hr(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?Xs:oi,minFilter:nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const pe=p.state.transmissionRenderTarget[j.id],Te=j.viewport||C;pe.setSize(Te.z*y.transmissionResolutionScale,Te.w*y.transmissionResolutionScale);const Pe=y.getRenderTarget(),we=y.getActiveCubeFace(),Be=y.getActiveMipmapLevel();y.setRenderTarget(pe),y.getClearColor(X),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Ne&&Ae.render(q);const ze=y.toneMapping;y.toneMapping=Di;const Ue=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ne===!0&&fe.setGlobalState(y.clippingPlanes,j),Zs(A,q,j),re.updateMultisampleRenderTarget(pe),re.updateRenderTargetMipmap(pe),F.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let st=0,gt=z.length;st<gt;st++){const ft=z[st],at=ft.object,Oe=ft.geometry,pt=ft.material,Ke=ft.group;if(pt.side===Zn&&at.layers.test(j.layers)){const Zt=pt.side;pt.side=jt,pt.needsUpdate=!0,Fu(at,q,j,Oe,pt,Ke),pt.side=Zt,pt.needsUpdate=!0,$e=!0}}$e===!0&&(re.updateMultisampleRenderTarget(pe),re.updateRenderTargetMipmap(pe))}y.setRenderTarget(Pe,we,Be),y.setClearColor(X,J),Ue!==void 0&&(j.viewport=Ue),y.toneMapping=ze}function Zs(A,z,q){const j=z.isScene===!0?z.overrideMaterial:null;for(let V=0,pe=A.length;V<pe;V++){const Te=A[V],Pe=Te.object,we=Te.geometry,Be=Te.group;let ze=Te.material;ze.allowOverride===!0&&j!==null&&(ze=j),Pe.layers.test(q.layers)&&Fu(Pe,z,q,we,ze,Be)}}function Fu(A,z,q,j,V,pe){A.onBeforeRender(y,z,q,j,V,pe),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(y,z,q,j,A,pe),V.transparent===!0&&V.side===Zn&&V.forceSinglePass===!1?(V.side=jt,V.needsUpdate=!0,y.renderBufferDirect(q,z,j,V,A,pe),V.side=Ui,V.needsUpdate=!0,y.renderBufferDirect(q,z,j,V,A,pe),V.side=Zn):y.renderBufferDirect(q,z,j,V,A,pe),A.onAfterRender(y,z,q,j,V,pe)}function Js(A,z,q){z.isScene!==!0&&(z=le);const j=K.get(A),V=p.state.lights,pe=p.state.shadowsArray,Te=V.state.version,Pe=W.getParameters(A,V.state,pe,z,q),we=W.getProgramCacheKey(Pe);let Be=j.programs;j.environment=A.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(A.isMeshStandardMaterial?oe:ue).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",ae),Be=new Map,j.programs=Be);let ze=Be.get(we);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===Te)return Bu(A,Pe),ze}else Pe.uniforms=W.getUniforms(A),A.onBeforeCompile(Pe,y),ze=W.acquireProgram(Pe,we),Be.set(we,ze),j.uniforms=Pe.uniforms;const Ue=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=fe.uniform),Bu(A,Pe),j.needsLights=og(A),j.lightsStateVersion=Te,j.needsLights&&(Ue.ambientLightColor.value=V.state.ambient,Ue.lightProbe.value=V.state.probe,Ue.directionalLights.value=V.state.directional,Ue.directionalLightShadows.value=V.state.directionalShadow,Ue.spotLights.value=V.state.spot,Ue.spotLightShadows.value=V.state.spotShadow,Ue.rectAreaLights.value=V.state.rectArea,Ue.ltc_1.value=V.state.rectAreaLTC1,Ue.ltc_2.value=V.state.rectAreaLTC2,Ue.pointLights.value=V.state.point,Ue.pointLightShadows.value=V.state.pointShadow,Ue.hemisphereLights.value=V.state.hemi,Ue.directionalShadowMap.value=V.state.directionalShadowMap,Ue.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ue.spotShadowMap.value=V.state.spotShadowMap,Ue.spotLightMatrix.value=V.state.spotLightMatrix,Ue.spotLightMap.value=V.state.spotLightMap,Ue.pointShadowMap.value=V.state.pointShadowMap,Ue.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function Ou(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=zo.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Bu(A,z){const q=K.get(A);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function rg(A,z,q,j,V){z.isScene!==!0&&(z=le),re.resetTextureUnits();const pe=z.fog,Te=j.isMeshStandardMaterial?z.environment:null,Pe=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ts,we=(j.isMeshStandardMaterial?oe:ue).get(j.envMap||Te),Be=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ze=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ue=!!q.morphAttributes.position,$e=!!q.morphAttributes.normal,st=!!q.morphAttributes.color;let gt=Di;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(gt=y.toneMapping);const ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,at=ft!==void 0?ft.length:0,Oe=K.get(j),pt=p.state.lights;if(ne===!0&&(ge===!0||A!==E)){const Ot=A===E&&j.id===M;fe.setState(j,A,Ot)}let Ke=!1;j.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==pt.state.version||Oe.outputColorSpace!==Pe||V.isBatchedMesh&&Oe.batching===!1||!V.isBatchedMesh&&Oe.batching===!0||V.isBatchedMesh&&Oe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Oe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Oe.instancing===!1||!V.isInstancedMesh&&Oe.instancing===!0||V.isSkinnedMesh&&Oe.skinning===!1||!V.isSkinnedMesh&&Oe.skinning===!0||V.isInstancedMesh&&Oe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Oe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Oe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Oe.instancingMorph===!1&&V.morphTexture!==null||Oe.envMap!==we||j.fog===!0&&Oe.fog!==pe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==fe.numPlanes||Oe.numIntersection!==fe.numIntersection)||Oe.vertexAlphas!==Be||Oe.vertexTangents!==ze||Oe.morphTargets!==Ue||Oe.morphNormals!==$e||Oe.morphColors!==st||Oe.toneMapping!==gt||Oe.morphTargetsCount!==at)&&(Ke=!0):(Ke=!0,Oe.__version=j.version);let Zt=Oe.currentProgram;Ke===!0&&(Zt=Js(j,z,V));let pr=!1,Jt=!1,os=!1;const mt=Zt.getUniforms(),ln=Oe.uniforms;if(G.useProgram(Zt.program)&&(pr=!0,Jt=!0,os=!0),j.id!==M&&(M=j.id,Jt=!0),pr||E!==A){G.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),mt.setValue(v,"projectionMatrix",A.projectionMatrix),mt.setValue(v,"viewMatrix",A.matrixWorldInverse);const Vt=mt.map.cameraPosition;Vt!==void 0&&Vt.setValue(v,se.setFromMatrixPosition(A.matrixWorld)),ee.logarithmicDepthBuffer&&mt.setValue(v,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&mt.setValue(v,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Jt=!0,os=!0)}if(V.isSkinnedMesh){mt.setOptional(v,V,"bindMatrix"),mt.setOptional(v,V,"bindMatrixInverse");const Ot=V.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),mt.setValue(v,"boneTexture",Ot.boneTexture,re))}V.isBatchedMesh&&(mt.setOptional(v,V,"batchingTexture"),mt.setValue(v,"batchingTexture",V._matricesTexture,re),mt.setOptional(v,V,"batchingIdTexture"),mt.setValue(v,"batchingIdTexture",V._indirectTexture,re),mt.setOptional(v,V,"batchingColorTexture"),V._colorsTexture!==null&&mt.setValue(v,"batchingColorTexture",V._colorsTexture,re));const cn=q.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&ce.update(V,q,Zt),(Jt||Oe.receiveShadow!==V.receiveShadow)&&(Oe.receiveShadow=V.receiveShadow,mt.setValue(v,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ln.envMap.value=we,ln.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(ln.envMapIntensity.value=z.environmentIntensity),Jt&&(mt.setValue(v,"toneMappingExposure",y.toneMappingExposure),Oe.needsLights&&sg(ln,os),pe&&j.fog===!0&&Q.refreshFogUniforms(ln,pe),Q.refreshMaterialUniforms(ln,j,N,Z,p.state.transmissionRenderTarget[A.id]),zo.upload(v,Ou(Oe),ln,re)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(zo.upload(v,Ou(Oe),ln,re),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&mt.setValue(v,"center",V.center),mt.setValue(v,"modelViewMatrix",V.modelViewMatrix),mt.setValue(v,"normalMatrix",V.normalMatrix),mt.setValue(v,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ot=j.uniformsGroups;for(let Vt=0,La=Ot.length;Vt<La;Vt++){const Hi=Ot[Vt];Ve.update(Hi,Zt),Ve.bind(Hi,Zt)}}return Zt}function sg(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function og(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,z,q){const j=K.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),K.get(A.texture).__webglTexture=z,K.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const q=K.get(A);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const ag=v.createFramebuffer();this.setRenderTarget=function(A,z=0,q=0){D=A,R=z,P=q;let j=!0,V=null,pe=!1,Te=!1;if(A){const we=K.get(A);if(we.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(v.FRAMEBUFFER,null),j=!1;else if(we.__webglFramebuffer===void 0)re.setupRenderTarget(A);else if(we.__hasExternalTextures)re.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ue=A.depthTexture;if(we.__boundDepthTexture!==Ue){if(Ue!==null&&K.has(Ue)&&(A.width!==Ue.image.width||A.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const ze=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?V=ze[z][q]:V=ze[z],pe=!0):A.samples>0&&re.useMultisampledRTT(A)===!1?V=K.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[q]:V=ze,C.copy(A.viewport),U.copy(A.scissor),k=A.scissorTest}else C.copy(Re).multiplyScalar(N).floor(),U.copy(Ie).multiplyScalar(N).floor(),k=Je;if(q!==0&&(V=ag),G.bindFramebuffer(v.FRAMEBUFFER,V)&&j&&G.drawBuffers(A,V),G.viewport(C),G.scissor(U),G.setScissorTest(k),pe){const we=K.get(A.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,q)}else if(Te){const we=z;for(let Be=0;Be<A.textures.length;Be++){const ze=K.get(A.textures[Be]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+Be,ze.__webglTexture,q,we)}}else if(A!==null&&q!==0){const we=K.get(A.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,we.__webglTexture,q)}M=-1},this.readRenderTargetPixels=function(A,z,q,j,V,pe,Te,Pe=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){G.bindFramebuffer(v.FRAMEBUFFER,we);try{const Be=A.textures[Pe],ze=Be.format,Ue=Be.type;if(!ee.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-j&&q>=0&&q<=A.height-V&&(A.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Pe),v.readPixels(z,q,j,V,be.convert(ze),be.convert(Ue),pe))}finally{const Be=D!==null?K.get(D).__webglFramebuffer:null;G.bindFramebuffer(v.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,z,q,j,V,pe,Te,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we)if(z>=0&&z<=A.width-j&&q>=0&&q<=A.height-V){G.bindFramebuffer(v.FRAMEBUFFER,we);const Be=A.textures[Pe],ze=Be.format,Ue=Be.type;if(!ee.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,$e),v.bufferData(v.PIXEL_PACK_BUFFER,pe.byteLength,v.STREAM_READ),A.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Pe),v.readPixels(z,q,j,V,be.convert(ze),be.convert(Ue),0);const st=D!==null?K.get(D).__webglFramebuffer:null;G.bindFramebuffer(v.FRAMEBUFFER,st);const gt=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await HE(v,gt,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,$e),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,pe),v.deleteBuffer($e),v.deleteSync(gt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,q=0){const j=Math.pow(2,-q),V=Math.floor(A.image.width*j),pe=Math.floor(A.image.height*j),Te=z!==null?z.x:0,Pe=z!==null?z.y:0;re.setTexture2D(A,0),v.copyTexSubImage2D(v.TEXTURE_2D,q,0,0,Te,Pe,V,pe),G.unbindTexture()};const lg=v.createFramebuffer(),cg=v.createFramebuffer();this.copyTextureToTexture=function(A,z,q=null,j=null,V=0,pe=null){pe===null&&(V!==0?(Wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=V,V=0):pe=0);let Te,Pe,we,Be,ze,Ue,$e,st,gt;const ft=A.isCompressedTexture?A.mipmaps[pe]:A.image;if(q!==null)Te=q.max.x-q.min.x,Pe=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Be=q.min.x,ze=q.min.y,Ue=q.isBox3?q.min.z:0;else{const cn=Math.pow(2,-V);Te=Math.floor(ft.width*cn),Pe=Math.floor(ft.height*cn),A.isDataArrayTexture?we=ft.depth:A.isData3DTexture?we=Math.floor(ft.depth*cn):we=1,Be=0,ze=0,Ue=0}j!==null?($e=j.x,st=j.y,gt=j.z):($e=0,st=0,gt=0);const at=be.convert(z.format),Oe=be.convert(z.type);let pt;z.isData3DTexture?(re.setTexture3D(z,0),pt=v.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(re.setTexture2DArray(z,0),pt=v.TEXTURE_2D_ARRAY):(re.setTexture2D(z,0),pt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,z.unpackAlignment);const Ke=v.getParameter(v.UNPACK_ROW_LENGTH),Zt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),pr=v.getParameter(v.UNPACK_SKIP_PIXELS),Jt=v.getParameter(v.UNPACK_SKIP_ROWS),os=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,ft.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ft.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Be),v.pixelStorei(v.UNPACK_SKIP_ROWS,ze),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Ue);const mt=A.isDataArrayTexture||A.isData3DTexture,ln=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const cn=K.get(A),Ot=K.get(z),Vt=K.get(cn.__renderTarget),La=K.get(Ot.__renderTarget);G.bindFramebuffer(v.READ_FRAMEBUFFER,Vt.__webglFramebuffer),G.bindFramebuffer(v.DRAW_FRAMEBUFFER,La.__webglFramebuffer);for(let Hi=0;Hi<we;Hi++)mt&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,K.get(A).__webglTexture,V,Ue+Hi),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,K.get(z).__webglTexture,pe,gt+Hi)),v.blitFramebuffer(Be,ze,Te,Pe,$e,st,Te,Pe,v.DEPTH_BUFFER_BIT,v.NEAREST);G.bindFramebuffer(v.READ_FRAMEBUFFER,null),G.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||K.has(A)){const cn=K.get(A),Ot=K.get(z);G.bindFramebuffer(v.READ_FRAMEBUFFER,lg),G.bindFramebuffer(v.DRAW_FRAMEBUFFER,cg);for(let Vt=0;Vt<we;Vt++)mt?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,cn.__webglTexture,V,Ue+Vt):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,cn.__webglTexture,V),ln?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Ot.__webglTexture,pe,gt+Vt):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Ot.__webglTexture,pe),V!==0?v.blitFramebuffer(Be,ze,Te,Pe,$e,st,Te,Pe,v.COLOR_BUFFER_BIT,v.NEAREST):ln?v.copyTexSubImage3D(pt,pe,$e,st,gt+Vt,Be,ze,Te,Pe):v.copyTexSubImage2D(pt,pe,$e,st,Be,ze,Te,Pe);G.bindFramebuffer(v.READ_FRAMEBUFFER,null),G.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else ln?A.isDataTexture||A.isData3DTexture?v.texSubImage3D(pt,pe,$e,st,gt,Te,Pe,we,at,Oe,ft.data):z.isCompressedArrayTexture?v.compressedTexSubImage3D(pt,pe,$e,st,gt,Te,Pe,we,at,ft.data):v.texSubImage3D(pt,pe,$e,st,gt,Te,Pe,we,at,Oe,ft):A.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,pe,$e,st,Te,Pe,at,Oe,ft.data):A.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,pe,$e,st,ft.width,ft.height,at,ft.data):v.texSubImage2D(v.TEXTURE_2D,pe,$e,st,Te,Pe,at,Oe,ft);v.pixelStorei(v.UNPACK_ROW_LENGTH,Ke),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Zt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,pr),v.pixelStorei(v.UNPACK_SKIP_ROWS,Jt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,os),pe===0&&z.generateMipmaps&&v.generateMipmap(pt),G.unbindTexture()},this.copyTextureToTexture3D=function(A,z,q=null,j=null,V=0){return Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,q,j,V)},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),G.unbindTexture()},this.resetState=function(){R=0,P=0,D=null,G.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}class lR extends Lu{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new SM(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){function n(u){const c=new DataView(u),f=32/8*3+32/8*3*3+16/8,h=c.getUint32(80,!0);if(80+32/8+h*f===c.byteLength)return!0;const g=[115,111,108,105,100];for(let _=0;_<5;_++)if(i(g,c,_))return!1;return!0}function i(u,c,f){for(let h=0,d=u.length;h<d;h++)if(u[h]!==c.getUint8(f+h))return!1;return!0}function r(u){const c=new DataView(u),f=c.getUint32(80,!0);let h,d,g,_=!1,m,p,T,x,y;for(let C=0;C<70;C++)c.getUint32(C,!1)==1129270351&&c.getUint8(C+4)==82&&c.getUint8(C+5)==61&&(_=!0,m=new Float32Array(f*3*3),p=c.getUint8(C+6)/255,T=c.getUint8(C+7)/255,x=c.getUint8(C+8)/255,y=c.getUint8(C+9)/255);const b=84,R=50,P=new li,D=new Float32Array(f*3*3),M=new Float32Array(f*3*3),E=new it;for(let C=0;C<f;C++){const U=b+C*R,k=c.getFloat32(U,!0),X=c.getFloat32(U+4,!0),J=c.getFloat32(U+8,!0);if(_){const H=c.getUint16(U+48,!0);(H&32768)===0?(h=(H&31)/31,d=(H>>5&31)/31,g=(H>>10&31)/31):(h=p,d=T,g=x)}for(let H=1;H<=3;H++){const Z=U+H*12,N=C*3*3+(H-1)*3;D[N]=c.getFloat32(Z,!0),D[N+1]=c.getFloat32(Z+4,!0),D[N+2]=c.getFloat32(Z+8,!0),M[N]=k,M[N+1]=X,M[N+2]=J,_&&(E.setRGB(h,d,g,nn),m[N]=E.r,m[N+1]=E.g,m[N+2]=E.b)}}return P.setAttribute("position",new sn(D,3)),P.setAttribute("normal",new sn(M,3)),_&&(P.setAttribute("color",new sn(m,3)),P.hasColors=!0,P.alpha=y),P}function s(u){const c=new li,f=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/;let g=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),p=new RegExp("normal"+_+_+_,"g"),T=[],x=[],y=[],b=new Y;let R,P=0,D=0,M=0;for(;(R=f.exec(u))!==null;){D=M;const E=R[0],C=(R=d.exec(E))!==null?R[1]:"";for(y.push(C);(R=h.exec(E))!==null;){let X=0,J=0;const H=R[0];for(;(R=p.exec(H))!==null;)b.x=parseFloat(R[1]),b.y=parseFloat(R[2]),b.z=parseFloat(R[3]),J++;for(;(R=m.exec(H))!==null;)T.push(parseFloat(R[1]),parseFloat(R[2]),parseFloat(R[3])),x.push(b.x,b.y,b.z),X++,M++;J!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),X!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const U=D,k=M-D;c.userData.groupNames=y,c.addGroup(U,k,P),P++}return c.setAttribute("position",new ti(T,3)),c.setAttribute("normal",new ti(x,3)),c}function o(u){return typeof u!="string"?new TextDecoder().decode(u):u}function a(u){if(typeof u=="string"){const c=new Uint8Array(u.length);for(let f=0;f<u.length;f++)c[f]=u.charCodeAt(f)&255;return c.buffer||c}else return u}const l=a(e);return n(l)?r(l):s(o(e))}}const cR={class:"app"},uR=ui({__name:"app",setup(t){return va(()=>{const e=new fM,n=new pn(50),i=new aR,r=new lR;i.setSize(window.innerWidth,window.innerHeight),r.load("/assets/3d/yhtr24k.stl",s=>{const o=new mM({wireframe:!0}),a=new Nn(s,o);a.rotateX(-1.5),e.add(a),n.position.z=.75,n.position.y=.25,n.position.x=-.15,e.add(a),i.setAnimationLoop(()=>{a.rotation.y+=.001,a.rotation.x+=.001,a.rotation.z+=.001,i.setSize(window.innerWidth,window.innerHeight),i.render(e,n)})}),document.querySelector("#l1c4-3d-bg")?.appendChild(i.domElement)}),(e,n)=>{const i=zS,r=jS;return dn(),Sp(Rt,null,[vt(r,null,{default:tu(()=>[Qo("div",cR,[vt(i)])]),_:1}),n[0]||(n[0]=Qo("div",{id:"l1c4-3d-bg"},null,-1))],64)}}}),fR={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const i=Number(n.statusCode||500),r=i===404,s=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,c=r?Ul(()=>tn(()=>import("./B4NX_32c.js"),__vite__mapDeps([18,5,2,19,20]),import.meta.url)):Ul(()=>tn(()=>import("./BE2b-z4r.js"),__vite__mapDeps([21,2,19,22]),import.meta.url));return(f,h)=>(dn(),Kn(ht(c),yg(Mp({statusCode:ht(i),statusMessage:ht(s),description:ht(o),stack:ht(a)})),null,16))}},hR={key:0},id={__name:"nuxt-root",setup(t){const e=()=>null,n=Tt(),i=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",i);an().beforeEach(u)}const r=!1;Pi(ur,Ma()),n.hooks.callHookWith(u=>u.map(c=>c()),"vue:setup");const s=Ta(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;jd((u,c,f)=>{if(n.hooks.callHook("vue:error",u,c,f).catch(h=>console.error("[nuxt] Error in `vue:error` hook",h)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(nm(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>Ki(u)),!1});const l=!1;return(u,c)=>(dn(),Kn(lu,{onResolve:ht(i)},{default:tu(()=>[ht(o)?(dn(),Sp("div",hR)):ht(s)?(dn(),Kn(ht(fR),{key:1,error:ht(s)},null,8,["error"])):ht(l)?(dn(),Kn(ht(e),{key:2,context:ht(l)},null,8,["context"])):ht(r)?(dn(),Kn(E_(ht(r)),{key:3})):(dn(),Kn(ht(uR),{key:4}))]),_:1},8,["onResolve"]))}};let rd;{let t;rd=async function(){if(t)return t;const n=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true"),i=n?Xv(id):Wv(id),r=tx({vueApp:i});async function s(o){await r.callHook("app:error",o),r.payload.error||=ar(o)}i.config.errorHandler=s,r.hook("app:suspense:resolve",()=>{i.config.errorHandler===s&&(i.config.errorHandler=void 0)}),!n&&wf.id&&r.hook("app:suspense:resolve",()=>{document.getElementById(wf.id)?.remove()});try{await rx(r,HS)}catch(o){s(o)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(J0),await r.hooks.callHook("app:mounted",i),await $r()}catch(o){s(o)}return i},t=rd().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{hu as $,TR as A,gR as B,it as C,Gs as D,Oi as E,Rt as F,mn as G,_v as H,pa as I,_R as J,Ma as K,lr as L,Wm as M,Su as N,sh as O,pn as P,MR as Q,Nt as R,fM as S,xR as T,pR as U,Bp as V,aR as W,px as X,DS as Y,dr as Z,jS as _,Qo as a,Ea as a0,SR as a1,_0 as a2,Ds as a3,yR as a4,vt as b,Sp as c,Tp as d,Tt as e,sm as f,ui as g,su as h,Ft as i,va as j,lR as k,Nn as l,mM as m,BS as n,dn as o,ht as p,Kn as q,Qn as r,mR as s,Mg as t,ER as u,da as v,tu as w,vR as x,an as y,dR as z};
