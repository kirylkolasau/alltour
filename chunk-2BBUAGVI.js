import{s as L}from"./chunk-XNSHGMPN.js";import{Ia as M,J as I,L as N,Pa as A,Ra as T,V as S,W as j,Y as D,da as u,fb as B,g,ia as a,j as E,u as f,v,y as x}from"./chunk-HZCRUJ6F.js";function w(t){return Array.isArray(t)?t:[t]}function z(t){return t==null?"":typeof t=="string"?t:`${t}px`}function H(t){return t instanceof M?t.nativeElement:t}var b;try{b=typeof Intl<"u"&&Intl.v8BreakIterator}catch{b=!1}var _=(()=>{let e=class e{constructor(n){this._platformId=n,this.isBrowser=this._platformId?L(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||b)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(i){return new(i||e)(a(A))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var p;function W(){if(p==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>p=!0}))}finally{p=p||!1}return p}function et(t){return W()?t:!!t.capture}var d;function nt(){if(d==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return d=!1,d;if("scrollBehavior"in document.documentElement.style)d=!0;else{let t=Element.prototype.scrollTo;t?d=!/\{\s*\[native code\]\s*\}/.test(t.toString()):d=!1}}return d}var y;function V(){if(y==null){let t=typeof document<"u"?document.head:null;y=!!(t&&(t.createShadowRoot||t.attachShadow))}return y}function it(t){if(V()){let e=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function ot(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let e=t.shadowRoot.activeElement;if(e===t)break;t=e}return t}function rt(t){return t.composedPath?t.composedPath()[0]:t.target}function st(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var R=new Set,c,G=(()=>{let e=class e{constructor(n,i){this._platform=n,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):$}matchMedia(n){return(this._platform.WEBKIT||this._platform.BLINK)&&Q(n,this._nonce),this._matchMedia(n)}};e.\u0275fac=function(i){return new(i||e)(a(_),a(T,8))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Q(t,e){if(!R.has(t))try{c||(c=document.createElement("style"),e&&c.setAttribute("nonce",e),c.setAttribute("type","text/css"),document.head.appendChild(c)),c.sheet&&(c.sheet.insertRule(`@media ${t} {body{ }}`,0),R.add(t))}catch(h){console.error(h)}}function $(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var ft=(()=>{let e=class e{constructor(n,i){this._mediaMatcher=n,this._zone=i,this._queries=new Map,this._destroySubject=new E}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(n){return P(w(n)).some(m=>this._registerQuery(m).mql.matches)}observe(n){let m=P(w(n)).map(r=>this._registerQuery(r).observable),o=v(m);return o=x(o.pipe(N(1)),o.pipe(S(1),I(0))),o.pipe(f(r=>{let s={matches:!1,breakpoints:{}};return r.forEach(({matches:l,query:k})=>{s.matches=s.matches||l,s.breakpoints[k]=l}),s}))}_registerQuery(n){if(this._queries.has(n))return this._queries.get(n);let i=this._mediaMatcher.matchMedia(n),o={observable:new g(r=>{let s=l=>this._zone.run(()=>r.next(l));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(j(i),f(({matches:r})=>({query:n,matches:r})),D(this._destroySubject)),mql:i};return this._queries.set(n,o),o}};e.\u0275fac=function(i){return new(i||e)(a(G),a(B))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function P(t){return t.map(e=>e.split(",")).reduce((e,h)=>e.concat(h)).map(e=>e.trim())}export{w as a,z as b,H as c,_ as d,et as e,nt as f,it as g,ot as h,rt as i,st as j,ft as k};
