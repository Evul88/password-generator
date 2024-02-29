(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))y(h);new MutationObserver(h=>{for(const p of h)if(p.type==="childList")for(const c of p.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&y(c)}).observe(document,{childList:!0,subtree:!0});function a(h){const p={};return h.integrity&&(p.integrity=h.integrity),h.referrerPolicy&&(p.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?p.credentials="include":h.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function y(h){if(h.ep)return;h.ep=!0;const p=a(h);fetch(h.href,p)}})();var Br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gr(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var gr={exports:{}},or={exports:{}},ur={exports:{}},Er={},z={};z.byteLength=Yr;z.toByteArray=Hr;z.fromByteArray=Kr;var O=[],L=[],Vr=typeof Uint8Array<"u"?Uint8Array:Array,nr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var H=0,Wr=nr.length;H<Wr;++H)O[H]=nr[H],L[nr.charCodeAt(H)]=H;L[45]=62;L[95]=63;function Ir(s){var f=s.length;if(f%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var a=s.indexOf("=");a===-1&&(a=f);var y=a===f?0:4-a%4;return[a,y]}function Yr(s){var f=Ir(s),a=f[0],y=f[1];return(a+y)*3/4-y}function Xr(s,f,a){return(f+a)*3/4-a}function Hr(s){var f,a=Ir(s),y=a[0],h=a[1],p=new Vr(Xr(s,y,h)),c=0,o=h>0?y-4:y,m;for(m=0;m<o;m+=4)f=L[s.charCodeAt(m)]<<18|L[s.charCodeAt(m+1)]<<12|L[s.charCodeAt(m+2)]<<6|L[s.charCodeAt(m+3)],p[c++]=f>>16&255,p[c++]=f>>8&255,p[c++]=f&255;return h===2&&(f=L[s.charCodeAt(m)]<<2|L[s.charCodeAt(m+1)]>>4,p[c++]=f&255),h===1&&(f=L[s.charCodeAt(m)]<<10|L[s.charCodeAt(m+1)]<<4|L[s.charCodeAt(m+2)]>>2,p[c++]=f>>8&255,p[c++]=f&255),p}function Jr(s){return O[s>>18&63]+O[s>>12&63]+O[s>>6&63]+O[s&63]}function Zr(s,f,a){for(var y,h=[],p=f;p<a;p+=3)y=(s[p]<<16&16711680)+(s[p+1]<<8&65280)+(s[p+2]&255),h.push(Jr(y));return h.join("")}function Kr(s){for(var f,a=s.length,y=a%3,h=[],p=16383,c=0,o=a-y;c<o;c+=p)h.push(Zr(s,c,c+p>o?o:c+p));return y===1?(f=s[a-1],h.push(O[f>>2]+O[f<<4&63]+"==")):y===2&&(f=(s[a-2]<<8)+s[a-1],h.push(O[f>>10]+O[f>>4&63]+O[f<<2&63]+"=")),h.join("")}var lr={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */lr.read=function(s,f,a,y,h){var p,c,o=h*8-y-1,m=(1<<o)-1,b=m>>1,F=-7,A=a?h-1:0,_=a?-1:1,T=s[f+A];for(A+=_,p=T&(1<<-F)-1,T>>=-F,F+=o;F>0;p=p*256+s[f+A],A+=_,F-=8);for(c=p&(1<<-F)-1,p>>=-F,F+=y;F>0;c=c*256+s[f+A],A+=_,F-=8);if(p===0)p=1-b;else{if(p===m)return c?NaN:(T?-1:1)*(1/0);c=c+Math.pow(2,y),p=p-b}return(T?-1:1)*c*Math.pow(2,p-y)};lr.write=function(s,f,a,y,h,p){var c,o,m,b=p*8-h-1,F=(1<<b)-1,A=F>>1,_=h===23?Math.pow(2,-24)-Math.pow(2,-77):0,T=y?0:p-1,q=y?1:-1,d=f<0||f===0&&1/f<0?1:0;for(f=Math.abs(f),isNaN(f)||f===1/0?(o=isNaN(f)?1:0,c=F):(c=Math.floor(Math.log(f)/Math.LN2),f*(m=Math.pow(2,-c))<1&&(c--,m*=2),c+A>=1?f+=_/m:f+=_*Math.pow(2,1-A),f*m>=2&&(c++,m/=2),c+A>=F?(o=0,c=F):c+A>=1?(o=(f*m-1)*Math.pow(2,h),c=c+A):(o=f*Math.pow(2,A-1)*Math.pow(2,h),c=0));h>=8;s[a+T]=o&255,T+=q,o/=256,h-=8);for(c=c<<h|o,b+=h;b>0;s[a+T]=c&255,T+=q,c/=256,b-=8);s[a+T-q]|=d*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(s){const f=z,a=lr,y=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;s.Buffer=o,s.SlowBuffer=P,s.INSPECT_MAX_BYTES=50;const h=2147483647;s.kMaxLength=h,o.TYPED_ARRAY_SUPPORT=p(),!o.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function p(){try{const t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),t.foo()===42}catch{return!1}}Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}});function c(t){if(t>h)throw new RangeError('The value "'+t+'" is invalid for option "size"');const r=new Uint8Array(t);return Object.setPrototypeOf(r,o.prototype),r}function o(t,r,e){if(typeof t=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return A(t)}return m(t,r,e)}o.poolSize=8192;function m(t,r,e){if(typeof t=="string")return _(t,r);if(ArrayBuffer.isView(t))return q(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(N(t,ArrayBuffer)||t&&N(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(N(t,SharedArrayBuffer)||t&&N(t.buffer,SharedArrayBuffer)))return d(t,r,e);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return o.from(n,r,e);const i=S(t);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return o.from(t[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}o.from=function(t,r,e){return m(t,r,e)},Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array);function b(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function F(t,r,e){return b(t),t<=0?c(t):r!==void 0?typeof e=="string"?c(t).fill(r,e):c(t).fill(r):c(t)}o.alloc=function(t,r,e){return F(t,r,e)};function A(t){return b(t),c(t<0?0:g(t)|0)}o.allocUnsafe=function(t){return A(t)},o.allocUnsafeSlow=function(t){return A(t)};function _(t,r){if((typeof r!="string"||r==="")&&(r="utf8"),!o.isEncoding(r))throw new TypeError("Unknown encoding: "+r);const e=W(t,r)|0;let n=c(e);const i=n.write(t,r);return i!==e&&(n=n.slice(0,i)),n}function T(t){const r=t.length<0?0:g(t.length)|0,e=c(r);for(let n=0;n<r;n+=1)e[n]=t[n]&255;return e}function q(t){if(N(t,Uint8Array)){const r=new Uint8Array(t);return d(r.buffer,r.byteOffset,r.byteLength)}return T(t)}function d(t,r,e){if(r<0||t.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');let n;return r===void 0&&e===void 0?n=new Uint8Array(t):e===void 0?n=new Uint8Array(t,r):n=new Uint8Array(t,r,e),Object.setPrototypeOf(n,o.prototype),n}function S(t){if(o.isBuffer(t)){const r=g(t.length)|0,e=c(r);return e.length===0||t.copy(e,0,0,r),e}if(t.length!==void 0)return typeof t.length!="number"||tr(t.length)?c(0):T(t);if(t.type==="Buffer"&&Array.isArray(t.data))return T(t.data)}function g(t){if(t>=h)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+h.toString(16)+" bytes");return t|0}function P(t){return+t!=t&&(t=0),o.alloc(+t)}o.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==o.prototype},o.compare=function(r,e){if(N(r,Uint8Array)&&(r=o.from(r,r.offset,r.byteLength)),N(e,Uint8Array)&&(e=o.from(e,e.offset,e.byteLength)),!o.isBuffer(r)||!o.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===e)return 0;let n=r.length,i=e.length;for(let u=0,l=Math.min(n,i);u<l;++u)if(r[u]!==e[u]){n=r[u],i=e[u];break}return n<i?-1:i<n?1:0},o.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return o.alloc(0);let n;if(e===void 0)for(e=0,n=0;n<r.length;++n)e+=r[n].length;const i=o.allocUnsafe(e);let u=0;for(n=0;n<r.length;++n){let l=r[n];if(N(l,Uint8Array))u+l.length>i.length?(o.isBuffer(l)||(l=o.from(l)),l.copy(i,u)):Uint8Array.prototype.set.call(i,l,u);else if(o.isBuffer(l))l.copy(i,u);else throw new TypeError('"list" argument must be an Array of Buffers');u+=l.length}return i};function W(t,r){if(o.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||N(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const e=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&e===0)return 0;let i=!1;for(;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return er(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return xr(t).length;default:if(i)return n?-1:er(t).length;r=(""+r).toLowerCase(),i=!0}}o.byteLength=W;function Z(t,r,e){let n=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(t||(t="utf8");;)switch(t){case"hex":return Pr(this,r,e);case"utf8":case"utf-8":return fr(this,r,e);case"ascii":return Lr(this,r,e);case"latin1":case"binary":return _r(this,r,e);case"base64":return Rr(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Nr(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}o.prototype._isBuffer=!0;function M(t,r,e){const n=t[r];t[r]=t[e],t[e]=n}o.prototype.swap16=function(){const r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<r;e+=2)M(this,e,e+1);return this},o.prototype.swap32=function(){const r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<r;e+=4)M(this,e,e+3),M(this,e+1,e+2);return this},o.prototype.swap64=function(){const r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<r;e+=8)M(this,e,e+7),M(this,e+1,e+6),M(this,e+2,e+5),M(this,e+3,e+4);return this},o.prototype.toString=function(){const r=this.length;return r===0?"":arguments.length===0?fr(this,0,r):Z.apply(this,arguments)},o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=function(r){if(!o.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:o.compare(this,r)===0},o.prototype.inspect=function(){let r="";const e=s.INSPECT_MAX_BYTES;return r=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(r+=" ... "),"<Buffer "+r+">"},y&&(o.prototype[y]=o.prototype.inspect),o.prototype.compare=function(r,e,n,i,u){if(N(r,Uint8Array)&&(r=o.from(r,r.offset,r.byteLength)),!o.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(e===void 0&&(e=0),n===void 0&&(n=r?r.length:0),i===void 0&&(i=0),u===void 0&&(u=this.length),e<0||n>r.length||i<0||u>this.length)throw new RangeError("out of range index");if(i>=u&&e>=n)return 0;if(i>=u)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,i>>>=0,u>>>=0,this===r)return 0;let l=u-i,w=n-e;const E=Math.min(l,w),B=this.slice(i,u),I=r.slice(e,n);for(let x=0;x<E;++x)if(B[x]!==I[x]){l=B[x],w=I[x];break}return l<w?-1:w<l?1:0};function G(t,r,e,n,i){if(t.length===0)return-1;if(typeof e=="string"?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,tr(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0)if(i)e=0;else return-1;if(typeof r=="string"&&(r=o.from(r,n)),o.isBuffer(r))return r.length===0?-1:K(t,r,e,n,i);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):K(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function K(t,r,e,n,i){let u=1,l=t.length,w=r.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||r.length<2)return-1;u=2,l/=2,w/=2,e/=2}function E(I,x){return u===1?I[x]:I.readUInt16BE(x*u)}let B;if(i){let I=-1;for(B=e;B<l;B++)if(E(t,B)===E(r,I===-1?0:B-I)){if(I===-1&&(I=B),B-I+1===w)return I*u}else I!==-1&&(B-=B-I),I=-1}else for(e+w>l&&(e=l-w),B=e;B>=0;B--){let I=!0;for(let x=0;x<w;x++)if(E(t,B+x)!==E(r,x)){I=!1;break}if(I)return B}return-1}o.prototype.includes=function(r,e,n){return this.indexOf(r,e,n)!==-1},o.prototype.indexOf=function(r,e,n){return G(this,r,e,n,!0)},o.prototype.lastIndexOf=function(r,e,n){return G(this,r,e,n,!1)};function Ar(t,r,e,n){e=Number(e)||0;const i=t.length-e;n?(n=Number(n),n>i&&(n=i)):n=i;const u=r.length;n>u/2&&(n=u/2);let l;for(l=0;l<n;++l){const w=parseInt(r.substr(l*2,2),16);if(tr(w))return l;t[e+l]=w}return l}function Ur(t,r,e,n){return Q(er(r,t.length-e),t,e,n)}function br(t,r,e,n){return Q(Dr(r),t,e,n)}function Tr(t,r,e,n){return Q(xr(r),t,e,n)}function Cr(t,r,e,n){return Q($r(r,t.length-e),t,e,n)}o.prototype.write=function(r,e,n,i){if(e===void 0)i="utf8",n=this.length,e=0;else if(n===void 0&&typeof e=="string")i=e,n=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(n)?(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const u=this.length-e;if((n===void 0||n>u)&&(n=u),r.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let l=!1;for(;;)switch(i){case"hex":return Ar(this,r,e,n);case"utf8":case"utf-8":return Ur(this,r,e,n);case"ascii":case"latin1":case"binary":return br(this,r,e,n);case"base64":return Tr(this,r,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Cr(this,r,e,n);default:if(l)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),l=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Rr(t,r,e){return r===0&&e===t.length?f.fromByteArray(t):f.fromByteArray(t.slice(r,e))}function fr(t,r,e){e=Math.min(t.length,e);const n=[];let i=r;for(;i<e;){const u=t[i];let l=null,w=u>239?4:u>223?3:u>191?2:1;if(i+w<=e){let E,B,I,x;switch(w){case 1:u<128&&(l=u);break;case 2:E=t[i+1],(E&192)===128&&(x=(u&31)<<6|E&63,x>127&&(l=x));break;case 3:E=t[i+1],B=t[i+2],(E&192)===128&&(B&192)===128&&(x=(u&15)<<12|(E&63)<<6|B&63,x>2047&&(x<55296||x>57343)&&(l=x));break;case 4:E=t[i+1],B=t[i+2],I=t[i+3],(E&192)===128&&(B&192)===128&&(I&192)===128&&(x=(u&15)<<18|(E&63)<<12|(B&63)<<6|I&63,x>65535&&x<1114112&&(l=x))}}l===null?(l=65533,w=1):l>65535&&(l-=65536,n.push(l>>>10&1023|55296),l=56320|l&1023),n.push(l),i+=w}return Sr(n)}const cr=4096;function Sr(t){const r=t.length;if(r<=cr)return String.fromCharCode.apply(String,t);let e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=cr));return e}function Lr(t,r,e){let n="";e=Math.min(t.length,e);for(let i=r;i<e;++i)n+=String.fromCharCode(t[i]&127);return n}function _r(t,r,e){let n="";e=Math.min(t.length,e);for(let i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function Pr(t,r,e){const n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);let i="";for(let u=r;u<e;++u)i+=jr[t[u]];return i}function Nr(t,r,e){const n=t.slice(r,e);let i="";for(let u=0;u<n.length-1;u+=2)i+=String.fromCharCode(n[u]+n[u+1]*256);return i}o.prototype.slice=function(r,e){const n=this.length;r=~~r,e=e===void 0?n:~~e,r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<r&&(e=r);const i=this.subarray(r,e);return Object.setPrototypeOf(i,o.prototype),i};function U(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}o.prototype.readUintLE=o.prototype.readUIntLE=function(r,e,n){r=r>>>0,e=e>>>0,n||U(r,e,this.length);let i=this[r],u=1,l=0;for(;++l<e&&(u*=256);)i+=this[r+l]*u;return i},o.prototype.readUintBE=o.prototype.readUIntBE=function(r,e,n){r=r>>>0,e=e>>>0,n||U(r,e,this.length);let i=this[r+--e],u=1;for(;e>0&&(u*=256);)i+=this[r+--e]*u;return i},o.prototype.readUint8=o.prototype.readUInt8=function(r,e){return r=r>>>0,e||U(r,1,this.length),this[r]},o.prototype.readUint16LE=o.prototype.readUInt16LE=function(r,e){return r=r>>>0,e||U(r,2,this.length),this[r]|this[r+1]<<8},o.prototype.readUint16BE=o.prototype.readUInt16BE=function(r,e){return r=r>>>0,e||U(r,2,this.length),this[r]<<8|this[r+1]},o.prototype.readUint32LE=o.prototype.readUInt32LE=function(r,e){return r=r>>>0,e||U(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},o.prototype.readUint32BE=o.prototype.readUInt32BE=function(r,e){return r=r>>>0,e||U(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},o.prototype.readBigUInt64LE=V(function(r){r=r>>>0,X(r,"offset");const e=this[r],n=this[r+7];(e===void 0||n===void 0)&&J(r,this.length-8);const i=e+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24,u=this[++r]+this[++r]*2**8+this[++r]*2**16+n*2**24;return BigInt(i)+(BigInt(u)<<BigInt(32))}),o.prototype.readBigUInt64BE=V(function(r){r=r>>>0,X(r,"offset");const e=this[r],n=this[r+7];(e===void 0||n===void 0)&&J(r,this.length-8);const i=e*2**24+this[++r]*2**16+this[++r]*2**8+this[++r],u=this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+n;return(BigInt(i)<<BigInt(32))+BigInt(u)}),o.prototype.readIntLE=function(r,e,n){r=r>>>0,e=e>>>0,n||U(r,e,this.length);let i=this[r],u=1,l=0;for(;++l<e&&(u*=256);)i+=this[r+l]*u;return u*=128,i>=u&&(i-=Math.pow(2,8*e)),i},o.prototype.readIntBE=function(r,e,n){r=r>>>0,e=e>>>0,n||U(r,e,this.length);let i=e,u=1,l=this[r+--i];for(;i>0&&(u*=256);)l+=this[r+--i]*u;return u*=128,l>=u&&(l-=Math.pow(2,8*e)),l},o.prototype.readInt8=function(r,e){return r=r>>>0,e||U(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},o.prototype.readInt16LE=function(r,e){r=r>>>0,e||U(r,2,this.length);const n=this[r]|this[r+1]<<8;return n&32768?n|4294901760:n},o.prototype.readInt16BE=function(r,e){r=r>>>0,e||U(r,2,this.length);const n=this[r+1]|this[r]<<8;return n&32768?n|4294901760:n},o.prototype.readInt32LE=function(r,e){return r=r>>>0,e||U(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},o.prototype.readInt32BE=function(r,e){return r=r>>>0,e||U(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},o.prototype.readBigInt64LE=V(function(r){r=r>>>0,X(r,"offset");const e=this[r],n=this[r+7];(e===void 0||n===void 0)&&J(r,this.length-8);const i=this[r+4]+this[r+5]*2**8+this[r+6]*2**16+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(e+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24)}),o.prototype.readBigInt64BE=V(function(r){r=r>>>0,X(r,"offset");const e=this[r],n=this[r+7];(e===void 0||n===void 0)&&J(r,this.length-8);const i=(e<<24)+this[++r]*2**16+this[++r]*2**8+this[++r];return(BigInt(i)<<BigInt(32))+BigInt(this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+n)}),o.prototype.readFloatLE=function(r,e){return r=r>>>0,e||U(r,4,this.length),a.read(this,r,!0,23,4)},o.prototype.readFloatBE=function(r,e){return r=r>>>0,e||U(r,4,this.length),a.read(this,r,!1,23,4)},o.prototype.readDoubleLE=function(r,e){return r=r>>>0,e||U(r,8,this.length),a.read(this,r,!0,52,8)},o.prototype.readDoubleBE=function(r,e){return r=r>>>0,e||U(r,8,this.length),a.read(this,r,!1,52,8)};function R(t,r,e,n,i,u){if(!o.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<u)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}o.prototype.writeUintLE=o.prototype.writeUIntLE=function(r,e,n,i){if(r=+r,e=e>>>0,n=n>>>0,!i){const w=Math.pow(2,8*n)-1;R(this,r,e,n,w,0)}let u=1,l=0;for(this[e]=r&255;++l<n&&(u*=256);)this[e+l]=r/u&255;return e+n},o.prototype.writeUintBE=o.prototype.writeUIntBE=function(r,e,n,i){if(r=+r,e=e>>>0,n=n>>>0,!i){const w=Math.pow(2,8*n)-1;R(this,r,e,n,w,0)}let u=n-1,l=1;for(this[e+u]=r&255;--u>=0&&(l*=256);)this[e+u]=r/l&255;return e+n},o.prototype.writeUint8=o.prototype.writeUInt8=function(r,e,n){return r=+r,e=e>>>0,n||R(this,r,e,1,255,0),this[e]=r&255,e+1},o.prototype.writeUint16LE=o.prototype.writeUInt16LE=function(r,e,n){return r=+r,e=e>>>0,n||R(this,r,e,2,65535,0),this[e]=r&255,this[e+1]=r>>>8,e+2},o.prototype.writeUint16BE=o.prototype.writeUInt16BE=function(r,e,n){return r=+r,e=e>>>0,n||R(this,r,e,2,65535,0),this[e]=r>>>8,this[e+1]=r&255,e+2},o.prototype.writeUint32LE=o.prototype.writeUInt32LE=function(r,e,n){return r=+r,e=e>>>0,n||R(this,r,e,4,4294967295,0),this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255,e+4},o.prototype.writeUint32BE=o.prototype.writeUInt32BE=function(r,e,n){return r=+r,e=e>>>0,n||R(this,r,e,4,4294967295,0),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};function ar(t,r,e,n,i){mr(r,n,i,t,e,7);let u=Number(r&BigInt(4294967295));t[e++]=u,u=u>>8,t[e++]=u,u=u>>8,t[e++]=u,u=u>>8,t[e++]=u;let l=Number(r>>BigInt(32)&BigInt(4294967295));return t[e++]=l,l=l>>8,t[e++]=l,l=l>>8,t[e++]=l,l=l>>8,t[e++]=l,e}function hr(t,r,e,n,i){mr(r,n,i,t,e,7);let u=Number(r&BigInt(4294967295));t[e+7]=u,u=u>>8,t[e+6]=u,u=u>>8,t[e+5]=u,u=u>>8,t[e+4]=u;let l=Number(r>>BigInt(32)&BigInt(4294967295));return t[e+3]=l,l=l>>8,t[e+2]=l,l=l>>8,t[e+1]=l,l=l>>8,t[e]=l,e+8}o.prototype.writeBigUInt64LE=V(function(r,e=0){return ar(this,r,e,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeBigUInt64BE=V(function(r,e=0){return hr(this,r,e,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeIntLE=function(r,e,n,i){if(r=+r,e=e>>>0,!i){const E=Math.pow(2,8*n-1);R(this,r,e,n,E-1,-E)}let u=0,l=1,w=0;for(this[e]=r&255;++u<n&&(l*=256);)r<0&&w===0&&this[e+u-1]!==0&&(w=1),this[e+u]=(r/l>>0)-w&255;return e+n},o.prototype.writeIntBE=function(r,e,n,i){if(r=+r,e=e>>>0,!i){const E=Math.pow(2,8*n-1);R(this,r,e,n,E-1,-E)}let u=n-1,l=1,w=0;for(this[e+u]=r&255;--u>=0&&(l*=256);)r<0&&w===0&&this[e+u+1]!==0&&(w=1),this[e+u]=(r/l>>0)-w&255;return e+n},o.prototype.writeInt8=function(r,e,n){return r=+r,e=e>>>0,n||R(this,r,e,1,127,-128),r<0&&(r=255+r+1),this[e]=r&255,e+1},o.prototype.writeInt16LE=function(r,e,n){return r=+r,e=e>>>0,n||R(this,r,e,2,32767,-32768),this[e]=r&255,this[e+1]=r>>>8,e+2},o.prototype.writeInt16BE=function(r,e,n){return r=+r,e=e>>>0,n||R(this,r,e,2,32767,-32768),this[e]=r>>>8,this[e+1]=r&255,e+2},o.prototype.writeInt32LE=function(r,e,n){return r=+r,e=e>>>0,n||R(this,r,e,4,2147483647,-2147483648),this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24,e+4},o.prototype.writeInt32BE=function(r,e,n){return r=+r,e=e>>>0,n||R(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4},o.prototype.writeBigInt64LE=V(function(r,e=0){return ar(this,r,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),o.prototype.writeBigInt64BE=V(function(r,e=0){return hr(this,r,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function pr(t,r,e,n,i,u){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function yr(t,r,e,n,i){return r=+r,e=e>>>0,i||pr(t,r,e,4),a.write(t,r,e,n,23,4),e+4}o.prototype.writeFloatLE=function(r,e,n){return yr(this,r,e,!0,n)},o.prototype.writeFloatBE=function(r,e,n){return yr(this,r,e,!1,n)};function dr(t,r,e,n,i){return r=+r,e=e>>>0,i||pr(t,r,e,8),a.write(t,r,e,n,52,8),e+8}o.prototype.writeDoubleLE=function(r,e,n){return dr(this,r,e,!0,n)},o.prototype.writeDoubleBE=function(r,e,n){return dr(this,r,e,!1,n)},o.prototype.copy=function(r,e,n,i){if(!o.isBuffer(r))throw new TypeError("argument should be a Buffer");if(n||(n=0),!i&&i!==0&&(i=this.length),e>=r.length&&(e=r.length),e||(e=0),i>0&&i<n&&(i=n),i===n||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),r.length-e<i-n&&(i=r.length-e+n);const u=i-n;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(r,this.subarray(n,i),e),u},o.prototype.fill=function(r,e,n,i){if(typeof r=="string"){if(typeof e=="string"?(i=e,e=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!o.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(r.length===1){const l=r.charCodeAt(0);(i==="utf8"&&l<128||i==="latin1")&&(r=l)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e=e>>>0,n=n===void 0?this.length:n>>>0,r||(r=0);let u;if(typeof r=="number")for(u=e;u<n;++u)this[u]=r;else{const l=o.isBuffer(r)?r:o.from(r,i),w=l.length;if(w===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(u=0;u<n-e;++u)this[u+e]=l[u%w]}return this};const Y={};function rr(t,r,e){Y[t]=class extends e{constructor(){super(),Object.defineProperty(this,"message",{value:r.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(i){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}rr("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),rr("ERR_INVALID_ARG_TYPE",function(t,r){return`The "${t}" argument must be of type number. Received type ${typeof r}`},TypeError),rr("ERR_OUT_OF_RANGE",function(t,r,e){let n=`The value of "${t}" is out of range.`,i=e;return Number.isInteger(e)&&Math.abs(e)>2**32?i=wr(String(e)):typeof e=="bigint"&&(i=String(e),(e>BigInt(2)**BigInt(32)||e<-(BigInt(2)**BigInt(32)))&&(i=wr(i)),i+="n"),n+=` It must be ${r}. Received ${i}`,n},RangeError);function wr(t){let r="",e=t.length;const n=t[0]==="-"?1:0;for(;e>=n+4;e-=3)r=`_${t.slice(e-3,e)}${r}`;return`${t.slice(0,e)}${r}`}function Or(t,r,e){X(r,"offset"),(t[r]===void 0||t[r+e]===void 0)&&J(r,t.length-(e+1))}function mr(t,r,e,n,i,u){if(t>e||t<r){const l=typeof r=="bigint"?"n":"";let w;throw u>3?r===0||r===BigInt(0)?w=`>= 0${l} and < 2${l} ** ${(u+1)*8}${l}`:w=`>= -(2${l} ** ${(u+1)*8-1}${l}) and < 2 ** ${(u+1)*8-1}${l}`:w=`>= ${r}${l} and <= ${e}${l}`,new Y.ERR_OUT_OF_RANGE("value",w,t)}Or(n,i,u)}function X(t,r){if(typeof t!="number")throw new Y.ERR_INVALID_ARG_TYPE(r,"number",t)}function J(t,r,e){throw Math.floor(t)!==t?(X(t,e),new Y.ERR_OUT_OF_RANGE(e||"offset","an integer",t)):r<0?new Y.ERR_BUFFER_OUT_OF_BOUNDS:new Y.ERR_OUT_OF_RANGE(e||"offset",`>= ${e?1:0} and <= ${r}`,t)}const Mr=/[^+/0-9A-Za-z-_]/g;function kr(t){if(t=t.split("=")[0],t=t.trim().replace(Mr,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function er(t,r){r=r||1/0;let e;const n=t.length;let i=null;const u=[];for(let l=0;l<n;++l){if(e=t.charCodeAt(l),e>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&u.push(239,191,189);continue}else if(l+1===n){(r-=3)>-1&&u.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&u.push(239,191,189),i=e;continue}e=(i-55296<<10|e-56320)+65536}else i&&(r-=3)>-1&&u.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;u.push(e)}else if(e<2048){if((r-=2)<0)break;u.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;u.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;u.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return u}function Dr(t){const r=[];for(let e=0;e<t.length;++e)r.push(t.charCodeAt(e)&255);return r}function $r(t,r){let e,n,i;const u=[];for(let l=0;l<t.length&&!((r-=2)<0);++l)e=t.charCodeAt(l),n=e>>8,i=e%256,u.push(i),u.push(n);return u}function xr(t){return f.toByteArray(kr(t))}function Q(t,r,e,n){let i;for(i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function N(t,r){return t instanceof r||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===r.name}function tr(t){return t!==t}const jr=function(){const t="0123456789abcdef",r=new Array(256);for(let e=0;e<16;++e){const n=e*16;for(let i=0;i<16;++i)r[n+i]=t[e]+t[i]}return r}();function V(t){return typeof BigInt>"u"?qr:t}function qr(){throw new Error("BigInt not supported")}})(Er);/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */(function(s,f){var a=Er,y=a.Buffer;function h(c,o){for(var m in c)o[m]=c[m]}y.from&&y.alloc&&y.allocUnsafe&&y.allocUnsafeSlow?s.exports=a:(h(a,f),f.Buffer=p);function p(c,o,m){return y(c,o,m)}p.prototype=Object.create(y.prototype),h(y,p),p.from=function(c,o,m){if(typeof c=="number")throw new TypeError("Argument must not be a number");return y(c,o,m)},p.alloc=function(c,o,m){if(typeof c!="number")throw new TypeError("Argument must be a number");var b=y(c);return o!==void 0?typeof m=="string"?b.fill(o,m):b.fill(o):b.fill(0),b},p.allocUnsafe=function(c){if(typeof c!="number")throw new TypeError("Argument must be a number");return y(c)},p.allocUnsafeSlow=function(c){if(typeof c!="number")throw new TypeError("Argument must be a number");return a.SlowBuffer(c)}})(ur,ur.exports);var Qr=ur.exports,ir=65536,vr=4294967295;function zr(){throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`)}var re=Qr.Buffer,v=Br.crypto||Br.msCrypto;v&&v.getRandomValues?or.exports=ee:or.exports=zr;function ee(s,f){if(s>vr)throw new RangeError("requested too many random bytes");var a=re.allocUnsafe(s);if(s>0)if(s>ir)for(var y=0;y<s;y+=ir)v.getRandomValues(a.slice(y,y+ir));else v.getRandomValues(a);return typeof f=="function"?process.nextTick(function(){f(null,a)}):a}var te=or.exports;(function(s){typeof window<"u"&&(window.global=window.global||window);var f={randomBytes:te},a=s.exports;const y=256;var h,p,c=function(){(h===void 0||h>=p.length)&&(h=0,p=f.randomBytes(y));var d=p[h];return h+=1,d},o=function(d){for(var S=c();S>=256-256%d;)S=c();return S%d},m="abcdefghijklmnopqrstuvwxyz",b="ABCDEFGHIJKLMNOPQRSTUVWXYZ",F="0123456789",A='!@#$%^&*()+_-=}{[]|:;"/?.><,`~',_=/[ilLI|`oO0]/g,T=[{name:"lowercase",rule:/[a-z]/},{name:"uppercase",rule:/[A-Z]/},{name:"numbers",rule:/[0-9]/},{name:"symbols",rule:/[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]/}],q=function(d,S){for(var g="",P=d.length,W=S.length,Z=0;Z<P;Z++)g+=S[o(W)];if(d.strict){var M=T.every(function(G){if(d[G.name]==!1)return!0;if(G.name==="symbols"&&typeof d[G.name]=="string"){var K=new RegExp("["+d[G.name]+"]");return K.test(g)}return G.rule.test(g)});if(!M)return q(d,S)}return g};a.generate=function(d){if(d=d||{},Object.prototype.hasOwnProperty.call(d,"length")||(d.length=10),Object.prototype.hasOwnProperty.call(d,"numbers")||(d.numbers=!1),Object.prototype.hasOwnProperty.call(d,"symbols")||(d.symbols=!1),Object.prototype.hasOwnProperty.call(d,"exclude")||(d.exclude=""),Object.prototype.hasOwnProperty.call(d,"uppercase")||(d.uppercase=!0),Object.prototype.hasOwnProperty.call(d,"lowercase")||(d.lowercase=!0),Object.prototype.hasOwnProperty.call(d,"excludeSimilarCharacters")||(d.excludeSimilarCharacters=!1),Object.prototype.hasOwnProperty.call(d,"strict")||(d.strict=!1),d.strict){var S=1+(d.numbers?1:0)+(d.symbols?1:0)+(d.uppercase?1:0);if(S>d.length)throw new TypeError("Length must correlate with strict guidelines")}var g="";if(d.lowercase&&(g+=m),d.uppercase&&(g+=b),d.numbers&&(g+=F),d.symbols&&(typeof d.symbols=="string"?g+=d.symbols:g+=A),!g)throw new TypeError("At least one rule for pools must be true");d.excludeSimilarCharacters&&(g=g.replace(_,""));for(var P=d.exclude.length;P--;)g=g.replace(d.exclude[P],"");var W=q(d,g);return W},a.generateMultiple=function(d,S){for(var g=[],P=0;P<d;P++)g[P]=a.generate(S);return g}})(gr);var ne=gr.exports,ie=ne;const oe=Gr(ie);let ue=document.getElementById("copyIcon");ue.addEventListener("click",s=>{let f=document.getElementById("password-string").textContent;if(f){navigator.clipboard.writeText(f);let a=document.getElementById("copyText");a.style.display="flex",a.style.opacity="1",setTimeout(()=>{a.style.opacity="0",setTimeout(()=>{a.style.display="none"},1e3)},2e3)}else alert("No hay nada que copiar.")});let C=document.getElementById("length"),Fr=document.getElementById("lengthValue");C.addEventListener("input",()=>{let s=document.getElementById("progressBar");Fr.textContent=C.value,s.style.width=C.value/C.max*100-.755+"%",sr()});let le=document.getElementsByClassName("checkbox"),k,D,$,j=!1;Array.from(le).forEach(s=>{s.addEventListener("click",f=>{s.id=="upperCheck"&&(D=!D),s.id=="lowerCheck"&&(k=!k),s.id=="numbersCheck"&&($=!$),s.id=="symbolsCheck"&&(j=!j),sr()})});function sr(){let s=document.querySelector(".noPasswd"),f=document.querySelector(".veryWeakPasswd"),a=document.querySelector(".weakPasswd"),y=document.querySelector(".mediumPasswd"),h=document.querySelector(".strongPasswd");C.value==0&&(s.style.display="flex",f.style.display="none",a.style.display="none",y.style.display="none",h.style.display="none"),(C.value>0||C.value>0&&!D&&!k&&!$&&!j)&&(s.style.display="none",f.style.display="flex",a.style.display="none",y.style.display="none",h.style.display="none"),C.value>5&&(s.style.display="none",f.style.display="none",a.style.display="flex",y.style.display="none",h.style.display="none"),(C.value>9&&D&&k||C.value>9&&$&&j)&&(s.style.display="none",f.style.display="none",a.style.display="none",y.style.display="flex",h.style.display="none"),(C.value>15&&D&&k&&$&&j||C.value>8&&D&&k&&$&&j)&&(s.style.display="none",f.style.display="none",a.style.display="none",y.style.display="none",h.style.display="flex")}let se=document.getElementById("submit");se.addEventListener("click",s=>{if(s.preventDefault(),C.value!=0){let f=oe.generate({length:C.value,uppercase:D,lowercase:k,numbers:$,symbols:j});document.getElementById("password-string").textContent=f;let a=document.getElementById("copyText");a.style.display="none",C.value=0;let y=document.getElementById("progressBar");y.style.width=0,Fr.textContent="0";let h=document.getElementsByClassName("checkbox");k=D=$=j=!1,Array.from(h).forEach(p=>{p.checked=!1}),sr()}else alert(!D&&!k&&!$&&!j?"Al menos uno de los campos debe ser marcado.":"La contraseña no puede tener 0 caracteres de longitud.")});
