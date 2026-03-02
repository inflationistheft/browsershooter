const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TunerBoot-GYc2QB-Y.js","assets/dat.gui.module-CMI775Zz.js","assets/Tuner3PBoot-CVGvqtXL.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const gd="modulepreload",_d=function(s){return"/"+s},Xc={},$c=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=o(t.map(c=>{if(c=_d(c),c in Xc)return;Xc[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":gd,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((f,_)=>{d.addEventListener("load",f),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hc="169",vd=0,qc=1,xd=2,nu=1,yd=2,zn=3,Xn=0,Xt=1,sn=2,ui=0,es=1,Yc=2,jc=3,Kc=4,Sd=5,bi=100,Md=101,Ed=102,Ad=103,Td=104,wd=200,bd=201,Rd=202,Cd=203,fa=204,pa=205,Pd=206,Id=207,Ld=208,Dd=209,Nd=210,Od=211,Ud=212,Fd=213,Bd=214,ma=0,ga=1,_a=2,ss=3,va=4,xa=5,ya=6,Sa=7,iu=0,zd=1,kd=2,di=0,Hd=1,Vd=2,Gd=3,Wd=4,Xd=5,$d=6,qd=7,Jc="attached",Yd="detached",su=300,rs=301,os=302,Ma=303,Ea=304,so=306,as=1e3,ci=1001,Yr=1002,Wt=1003,ru=1004,Hs=1005,Qt=1006,kr=1007,Gn=1008,$n=1009,ou=1010,au=1011,Ks=1012,uc=1013,Pi=1014,vn=1015,nr=1016,dc=1017,fc=1018,cs=1020,cu=35902,lu=1021,hu=1022,rn=1023,uu=1024,du=1025,ts=1026,ls=1027,pc=1028,mc=1029,fu=1030,gc=1031,_c=1033,Hr=33776,Vr=33777,Gr=33778,Wr=33779,Aa=35840,Ta=35841,wa=35842,ba=35843,Ra=36196,Ca=37492,Pa=37496,Ia=37808,La=37809,Da=37810,Na=37811,Oa=37812,Ua=37813,Fa=37814,Ba=37815,za=37816,ka=37817,Ha=37818,Va=37819,Ga=37820,Wa=37821,Xr=36492,Xa=36494,$a=36495,pu=36283,qa=36284,Ya=36285,ja=36286,mu=2200,Ka=2201,jd=2202,Js=2300,Zs=2301,fo=2302,Ki=2400,Ji=2401,jr=2402,vc=2500,Kd=2501,Jd=0,gu=1,Ja=2,Zd=3200,Qd=3201,_u=0,ef=1,ai="",Vt="srgb",Ut="srgb-linear",xc="display-p3",ro="display-p3-linear",Kr="linear",_t="srgb",Jr="rec709",Zr="p3",Oi=7680,Zc=519,tf=512,nf=513,sf=514,vu=515,rf=516,of=517,af=518,cf=519,Za=35044,Qc="300 es",Wn=2e3,Qr=2001;class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let el=1234567;const Ws=Math.PI/180,hs=180/Math.PI;function xn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[s&255]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function yc(s,e){return(s%e+e)%e}function lf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function hf(s,e,t){return s!==e?(t-s)/(e-s):0}function Xs(s,e,t){return(1-t)*s+t*e}function uf(s,e,t,n){return Xs(s,e,1-Math.exp(-t*n))}function df(s,e=1){return e-Math.abs(yc(s,e*2)-e)}function ff(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function pf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function mf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function gf(s,e){return s+Math.random()*(e-s)}function _f(s){return s*(.5-Math.random())}function vf(s){s!==void 0&&(el=s);let e=el+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xf(s){return s*Ws}function yf(s){return s*hs}function Sf(s){return(s&s-1)===0&&s!==0}function Mf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ef(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Af(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const eo={DEG2RAD:Ws,RAD2DEG:hs,generateUUID:xn,clamp:Ct,euclideanModulo:yc,mapLinear:lf,inverseLerp:hf,lerp:Xs,damp:uf,pingpong:df,smoothstep:ff,smootherstep:pf,randInt:mf,randFloat:gf,randFloatSpread:_f,seededRandom:vf,degToRad:xf,radToDeg:yf,isPowerOfTwo:Sf,ceilPowerOfTwo:Mf,floorPowerOfTwo:Ef,setQuaternionFromProperEuler:Af,normalize:ft,denormalize:gn};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],v=i[0],p=i[3],g=i[6],M=i[1],A=i[4],T=i[7],L=i[2],I=i[5],P=i[8];return r[0]=o*v+a*M+l*L,r[3]=o*p+a*A+l*I,r[6]=o*g+a*T+l*P,r[1]=c*v+u*M+h*L,r[4]=c*p+u*A+h*I,r[7]=c*g+u*T+h*P,r[2]=d*v+f*M+_*L,r[5]=d*p+f*A+_*I,r[8]=d*g+f*T+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(po.makeScale(e,t)),this}rotate(e){return this.premultiply(po.makeRotation(-e)),this}translate(e,t){return this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const po=new Ge;function xu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Tf(){const s=Qs("canvas");return s.style.display="block",s}const tl={};function $r(s){s in tl||(tl[s]=!0,console.warn(s))}function wf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function bf(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rf(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nl=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),il=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ms={[Ut]:{transfer:Kr,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Vt]:{transfer:_t,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ro]:{transfer:Kr,primaries:Zr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(il),fromReference:s=>s.applyMatrix3(nl)},[xc]:{transfer:_t,primaries:Zr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(il),fromReference:s=>s.applyMatrix3(nl).convertLinearToSRGB()}},Cf=new Set([Ut,ro]),at={enabled:!0,_workingColorSpace:Ut,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Cf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ms[e].toReference,i=Ms[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ms[s].primaries},getTransfer:function(s){return s===ai?Kr:Ms[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Ms[e].luminanceCoefficients)}};function ns(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ui;class Pf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=Qs("canvas")),Ui.width=e.width,Ui.height=e.height;const n=Ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ns(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ns(t[n]/255)*255):t[n]=ns(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let If=0;class yu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(go(i[o].image)):r.push(go(i[o]))}else r=go(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function go(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Pf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lf=0;class Nt extends Li{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=ci,i=ci,r=Qt,o=Gn,a=rn,l=$n,c=Nt.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=xn(),this.name="",this.source=new yu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=su;Nt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,T=(f+1)/2,L=(g+1)/2,I=(u+d)/4,P=(h+v)/4,B=(_+p)/4;return A>T&&A>L?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=I/n,r=P/n):T>L?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=I/i,r=B/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=P/r,i=B/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-_)*(p-_)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-v)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Df extends Li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Nt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Df{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Su extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nf extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==_){let p=1-a;const g=l*d+c*f+u*_+h*v,M=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){const L=Math.sqrt(A),I=Math.atan2(L,g*M);p=Math.sin(p*I)/L,a=Math.sin(a*I)/L}const T=a*M;if(l=l*p+d*T,c=c*p+f*T,u=u*p+_*T,h=h*p+v*T,p===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-a*f,e[t+2]=c*_+u*f+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _o=new D,sl=new jt;class Yn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),ar.subVectors(this.max,Es),Fi.subVectors(e.a,Es),Bi.subVectors(e.b,Es),zi.subVectors(e.c,Es),Kn.subVectors(Bi,Fi),Jn.subVectors(zi,Bi),fi.subVectors(Fi,zi);let t=[0,-Kn.z,Kn.y,0,-Jn.z,Jn.y,0,-fi.z,fi.y,Kn.z,0,-Kn.x,Jn.z,0,-Jn.x,fi.z,0,-fi.x,-Kn.y,Kn.x,0,-Jn.y,Jn.x,0,-fi.y,fi.x,0];return!vo(t,Fi,Bi,zi,ar)||(t=[1,0,0,0,1,0,0,0,1],!vo(t,Fi,Bi,zi,ar))?!1:(cr.crossVectors(Kn,Jn),t=[cr.x,cr.y,cr.z],vo(t,Fi,Bi,zi,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new D,new D,new D,new D,new D,new D,new D,new D],ln=new D,or=new Yn,Fi=new D,Bi=new D,zi=new D,Kn=new D,Jn=new D,fi=new D,Es=new D,ar=new D,cr=new D,pi=new D;function vo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){pi.fromArray(s,r);const a=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),u=n.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Of=new Yn,As=new D,xo=new D;class bn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Of.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(xo)),this.expandByPoint(As.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new D,yo=new D,lr=new D,Zn=new D,So=new D,hr=new D,Mo=new D;class oo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yo.copy(e).add(t).multiplyScalar(.5),lr.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(yo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(lr),a=Zn.dot(this.direction),l=-Zn.dot(lr),c=Zn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(yo).addScaledVector(lr,d),f}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,i,r){So.subVectors(t,e),hr.subVectors(n,e),Mo.crossVectors(So,hr);let o=this.direction.dot(Mo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,e);const l=a*this.direction.dot(hr.crossVectors(Zn,hr));if(l<0)return null;const c=a*this.direction.dot(So.cross(Zn));if(c<0||l+c>o)return null;const u=-a*Zn.dot(Mo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,_,v,p){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,_,v,p)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,_,v,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=_,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,_=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,v=c*h;t[0]=d+v*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,_=a*u,v=a*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uf,e,Ff)}lookAt(e,t,n){const i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Qn.crossVectors(n,Jt),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Qn.crossVectors(n,Jt)),Qn.normalize(),ur.crossVectors(Jt,Qn),i[0]=Qn.x,i[4]=ur.x,i[8]=Jt.x,i[1]=Qn.y,i[5]=ur.y,i[9]=Jt.y,i[2]=Qn.z,i[6]=ur.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],v=n[6],p=n[10],g=n[14],M=n[3],A=n[7],T=n[11],L=n[15],I=i[0],P=i[4],B=i[8],J=i[12],S=i[1],R=i[5],V=i[9],G=i[13],q=i[2],ne=i[6],$=i[10],ie=i[14],Y=i[3],ye=i[7],me=i[11],ae=i[15];return r[0]=o*I+a*S+l*q+c*Y,r[4]=o*P+a*R+l*ne+c*ye,r[8]=o*B+a*V+l*$+c*me,r[12]=o*J+a*G+l*ie+c*ae,r[1]=u*I+h*S+d*q+f*Y,r[5]=u*P+h*R+d*ne+f*ye,r[9]=u*B+h*V+d*$+f*me,r[13]=u*J+h*G+d*ie+f*ae,r[2]=_*I+v*S+p*q+g*Y,r[6]=_*P+v*R+p*ne+g*ye,r[10]=_*B+v*V+p*$+g*me,r[14]=_*J+v*G+p*ie+g*ae,r[3]=M*I+A*S+T*q+L*Y,r[7]=M*P+A*R+T*ne+L*ye,r[11]=M*B+A*V+T*$+L*me,r[15]=M*J+A*G+T*ie+L*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],v=e[7],p=e[11],g=e[15];return _*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+v*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+p*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+g*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],v=e[13],p=e[14],g=e[15],M=h*p*c-v*d*c+v*l*f-a*p*f-h*l*g+a*d*g,A=_*d*c-u*p*c-_*l*f+o*p*f+u*l*g-o*d*g,T=u*v*c-_*h*c+_*a*f-o*v*f-u*a*g+o*h*g,L=_*h*l-u*v*l-_*a*d+o*v*d+u*a*p-o*h*p,I=t*M+n*A+i*T+r*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=M*P,e[1]=(v*d*r-h*p*r-v*i*f+n*p*f+h*i*g-n*d*g)*P,e[2]=(a*p*r-v*l*r+v*i*c-n*p*c-a*i*g+n*l*g)*P,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*P,e[4]=A*P,e[5]=(u*p*r-_*d*r+_*i*f-t*p*f-u*i*g+t*d*g)*P,e[6]=(_*l*r-o*p*r-_*i*c+t*p*c+o*i*g-t*l*g)*P,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*P,e[8]=T*P,e[9]=(_*h*r-u*v*r-_*n*f+t*v*f+u*n*g-t*h*g)*P,e[10]=(o*v*r-_*a*r+_*n*c-t*v*c-o*n*g+t*a*g)*P,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*P,e[12]=L*P,e[13]=(u*v*i-_*h*i+_*n*d-t*v*d-u*n*p+t*h*p)*P,e[14]=(_*a*i-o*v*i-_*n*l+t*v*l+o*n*p-t*a*p)*P,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,_=r*h,v=o*u,p=o*h,g=a*h,M=l*c,A=l*u,T=l*h,L=n.x,I=n.y,P=n.z;return i[0]=(1-(v+g))*L,i[1]=(f+T)*L,i[2]=(_-A)*L,i[3]=0,i[4]=(f-T)*I,i[5]=(1-(d+g))*I,i[6]=(p+M)*I,i[7]=0,i[8]=(_+A)*P,i[9]=(p-M)*P,i[10]=(1-(d+v))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ki.set(i[0],i[1],i[2]).length();const o=ki.set(i[4],i[5],i[6]).length(),a=ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);const c=1/r,u=1/o,h=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,t.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Wn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===Wn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Qr)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Wn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*c,f=(n+i)*u;let _,v;if(a===Wn)_=(o+r)*h,v=-2*h;else if(a===Qr)_=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new D,hn=new He,Uf=new D(0,0,0),Ff=new D(1,1,1),Qn=new D,ur=new D,Jt=new D,rl=new He,ol=new jt;class wn{constructor(e=0,t=0,n=0,i=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ol.setFromEuler(this),this.setFromQuaternion(ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Mu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bf=0;const al=new D,Hi=new jt,Dn=new He,dr=new D,Ts=new D,zf=new D,kf=new jt,cl=new D(1,0,0),ll=new D(0,1,0),hl=new D(0,0,1),ul={type:"added"},Hf={type:"removed"},Vi={type:"childadded",child:null},Eo={type:"childremoved",child:null};class vt extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new D,t=new wn,n=new jt,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new Ge}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(cl,e)}rotateY(e){return this.rotateOnAxis(ll,e)}rotateZ(e){return this.rotateOnAxis(hl,e)}translateOnAxis(e,t){return al.copy(e).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cl,e)}translateY(e){return this.translateOnAxis(ll,e)}translateZ(e){return this.translateOnAxis(hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dr.copy(e):dr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Ts,dr,this.up):Dn.lookAt(dr,Ts,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ul),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hf),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ul),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new D(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new D,Nn=new D,Ao=new D,On=new D,Gi=new D,Wi=new D,dl=new D,To=new D,wo=new D,bo=new D,Ro=new lt,Co=new lt,Po=new lt;class _n{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){un.subVectors(i,t),Nn.subVectors(n,t),Ao.subVectors(e,t);const o=un.dot(un),a=un.dot(Nn),l=un.dot(Ao),c=Nn.dot(Nn),u=Nn.dot(Ao),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ro.setScalar(0),Co.setScalar(0),Po.setScalar(0),Ro.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,n),Po.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ro,r.x),o.addScaledVector(Co,r.y),o.addScaledVector(Po,r.z),o}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),Nn.subVectors(e,t),un.cross(Nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),un.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Gi.subVectors(i,n),Wi.subVectors(r,n),To.subVectors(e,n);const l=Gi.dot(To),c=Wi.dot(To);if(l<=0&&c<=0)return t.copy(n);wo.subVectors(e,i);const u=Gi.dot(wo),h=Wi.dot(wo);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Gi,o);bo.subVectors(e,r);const f=Gi.dot(bo),_=Wi.dot(bo);if(_>=0&&f<=_)return t.copy(r);const v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Wi,a);const p=u*_-f*h;if(p<=0&&h-u>=0&&f-_>=0)return dl.subVectors(r,i),a=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(dl,a);const g=1/(p+v+d);return o=v*g,a=d*g,t.copy(n).addScaledVector(Gi,o).addScaledVector(Wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Io(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=yc(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Io(o,r,e+1/3),this.g=Io(o,r,e),this.b=Io(o,r,e-1/3)}return at.toWorkingColorSpace(this,i),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return at.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ct(zt.r*255,0,255))*65536+Math.round(Ct(zt.g*255,0,255))*256+Math.round(Ct(zt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,r=zt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Vt){at.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(fr);const n=Xs(ei.h,fr.h,t),i=Xs(ei.s,fr.s,t),r=Xs(ei.l,fr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Fe;Fe.NAMES=Eu;let Vf=0;class Tn extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=es,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=pa,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class An extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new D,pr=new be;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Za,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}}class Au extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tu extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gf=0;const tn=new He,Lo=new vt,Xi=new D,Zt=new Yn,ws=new Yn,Lt=new D;class qt extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xu(e)?Tu:Au)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(Zt.min,ws.min),Zt.expandByPoint(Lt),Lt.addVectors(Zt.max,ws.max),Zt.expandByPoint(Lt)):(Zt.expandByPoint(ws.min),Zt.expandByPoint(ws.max))}Zt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(e,c),Lt.add(Xi)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<n.count;B++)a[B]=new D,l[B]=new D;const c=new D,u=new D,h=new D,d=new be,f=new be,_=new be,v=new D,p=new D;function g(B,J,S){c.fromBufferAttribute(n,B),u.fromBufferAttribute(n,J),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,B),f.fromBufferAttribute(r,J),_.fromBufferAttribute(r,S),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const R=1/(f.x*_.y-_.x*f.y);isFinite(R)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(R),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(R),a[B].add(v),a[J].add(v),a[S].add(v),l[B].add(p),l[J].add(p),l[S].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let B=0,J=M.length;B<J;++B){const S=M[B],R=S.start,V=S.count;for(let G=R,q=R+V;G<q;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const A=new D,T=new D,L=new D,I=new D;function P(B){L.fromBufferAttribute(i,B),I.copy(L);const J=a[B];A.copy(J),A.sub(L.multiplyScalar(L.dot(J))).normalize(),T.crossVectors(I,J);const R=T.dot(l[B])<0?-1:1;o.setXYZW(B,A.x,A.y,A.z,R)}for(let B=0,J=M.length;B<J;++B){const S=M[B],R=S.start,V=S.count;for(let G=R,q=R+V;G<q;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let g=0;g<u;g++)d[_++]=c[f++]}return new $t(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fl=new He,mi=new oo,mr=new bn,pl=new D,gr=new D,_r=new D,vr=new D,Do=new D,xr=new D,ml=new D,yr=new D;class yt extends vt{constructor(e=new qt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Do.fromBufferAttribute(h,e),o?xr.addScaledVector(Do,u):xr.addScaledVector(Do.sub(t),u))}t.add(xr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(mr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(mr,pl)===null||mi.origin.distanceToSquared(pl)>(e.far-e.near)**2))&&(fl.copy(r).invert(),mi.copy(e.ray).applyMatrix4(fl),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const p=d[_],g=o[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let T=M,L=A;T<L;T+=3){const I=a.getX(T),P=a.getX(T+1),B=a.getX(T+2);i=Sr(this,g,e,n,c,u,h,I,P,B),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=_,g=v;p<g;p+=3){const M=a.getX(p),A=a.getX(p+1),T=a.getX(p+2);i=Sr(this,o,e,n,c,u,h,M,A,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const p=d[_],g=o[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let T=M,L=A;T<L;T+=3){const I=T,P=T+1,B=T+2;i=Sr(this,g,e,n,c,u,h,I,P,B),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=_,g=v;p<g;p+=3){const M=p,A=p+1,T=p+2;i=Sr(this,o,e,n,c,u,h,M,A,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Wf(s,e,t,n,i,r,o,a){let l;if(e.side===Xt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Xn,a),l===null)return null;yr.copy(a),yr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(yr);return c<t.near||c>t.far?null:{distance:c,point:yr.clone(),object:s}}function Sr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,gr),s.getVertexPosition(l,_r),s.getVertexPosition(c,vr);const u=Wf(s,e,t,n,gr,_r,vr,ml);if(u){const h=new D;_n.getBarycoord(ml,gr,_r,vr,h),i&&(u.uv=_n.getInterpolatedAttribute(i,a,l,c,h,new be)),r&&(u.uv1=_n.getInterpolatedAttribute(r,a,l,c,h,new be)),o&&(u.normal=_n.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};_n.getNormal(gr,_r,vr,d.normal),u.face=d,u.barycoord=h}return u}class Di extends qt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(h,2));function _(v,p,g,M,A,T,L,I,P,B,J){const S=T/P,R=L/B,V=T/2,G=L/2,q=I/2,ne=P+1,$=B+1;let ie=0,Y=0;const ye=new D;for(let me=0;me<$;me++){const ae=me*R-G;for(let Xe=0;Xe<ne;Xe++){const et=Xe*S-V;ye[v]=et*M,ye[p]=ae*A,ye[g]=q,c.push(ye.x,ye.y,ye.z),ye[v]=0,ye[p]=0,ye[g]=I>0?1:-1,u.push(ye.x,ye.y,ye.z),h.push(Xe/P),h.push(1-me/B),ie+=1}}for(let me=0;me<B;me++)for(let ae=0;ae<P;ae++){const Xe=d+ae+ne*me,et=d+ae+ne*(me+1),Z=d+(ae+1)+ne*(me+1),le=d+(ae+1)+ne*me;l.push(Xe,et,le),l.push(et,Z,le),Y+=6}a.addGroup(f,Y,J),f+=Y,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(s){const e={};for(let t=0;t<s.length;t++){const n=us(s[t]);for(const i in n)e[i]=n[i]}return e}function Xf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function wu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const $f={clone:us,merge:Ht};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=Xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bu extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new D,gl=new be,_l=new be;class Gt extends bu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,gl,_l),t.subVectors(_l,gl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,qi=1;class jf extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt($i,qi,e,t);i.layers=this.layers,this.add(i);const r=new Gt($i,qi,e,t);r.layers=this.layers,this.add(r);const o=new Gt($i,qi,e,t);o.layers=this.layers,this.add(o);const a=new Gt($i,qi,e,t);a.layers=this.layers,this.add(a);const l=new Gt($i,qi,e,t);l.layers=this.layers,this.add(l);const c=new Gt($i,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ru extends Nt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:rs,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kf extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ru(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Di(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:ui});r.uniforms.tEquirect.value=t;const o=new yt(i,r),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Qt),new jf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const No=new D,Jf=new D,Zf=new Ge;class Ti{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=No.subVectors(n,t).cross(Jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(No),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zf.getNormalMatrix(e),i=this.coplanarPoint(No).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new bn,Mr=new D;class Sc{constructor(e=new Ti,t=new Ti,n=new Ti,i=new Ti,r=new Ti,o=new Ti){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],v=i[10],p=i[11],g=i[12],M=i[13],A=i[14],T=i[15];if(n[0].setComponents(l-r,d-c,p-f,T-g).normalize(),n[1].setComponents(l+r,d+c,p+f,T+g).normalize(),n[2].setComponents(l+o,d+u,p+_,T+M).normalize(),n[3].setComponents(l-o,d-u,p-_,T-M).normalize(),n[4].setComponents(l-a,d-h,p-v,T-A).normalize(),t===Wn)n[5].setComponents(l+a,d+h,p+v,T+A).normalize();else if(t===Qr)n[5].setComponents(a,h,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Mr.x=i.normal.x>0?e.max.x:e.min.x,Mr.y=i.normal.y>0?e.max.y:e.min.y,Mr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Qf(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],v=h[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const v=h[f];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class ir extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],_=[],v=[],p=[];for(let g=0;g<u;g++){const M=g*d-o;for(let A=0;A<c;A++){const T=A*h-r;_.push(T,-M,0),v.push(0,0,1),p.push(A/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){const A=M+c*g,T=M+c*(g+1),L=M+1+c*(g+1),I=M+1+c*g;f.push(A,T,I),f.push(T,L,I)}this.setIndex(f),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.widthSegments,e.heightSegments)}}var ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tp=`#ifdef USE_ALPHAHASH
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
#endif`,np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,op=`#ifdef USE_AOMAP
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
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
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
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,pp=`#ifdef USE_BUMPMAP
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ep=`#define PI 3.141592653589793
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
} // validated`,Ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xp=`uniform bool receiveShadow;
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
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
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
#endif`,Zp=`struct PhysicalMaterial {
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
}`,Qp=`
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lm=`#if defined( USE_POINTS_UV )
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
#endif`,hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,Em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
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
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bm=`float getShadowMask() {
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
}`,zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`#include <common>
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
}`,og=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ag=`#define DISTANCE
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
}`,cg=`#define DISTANCE
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`uniform float scale;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define LAMBERT
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
}`,_g=`#define MATCAP
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
}`,vg=`#define MATCAP
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
}`,xg=`#define NORMAL
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
}`,yg=`#define NORMAL
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
}`,Sg=`#define PHONG
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
}`,Mg=`#define PHONG
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
}`,Eg=`#define STANDARD
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
}`,Ag=`#define STANDARD
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
}`,Tg=`#define TOON
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
}`,wg=`#define TOON
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
}`,bg=`uniform float size;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Pg=`uniform vec3 color;
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
}`,Ig=`uniform float rotation;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:ep,alphahash_pars_fragment:tp,alphamap_fragment:np,alphamap_pars_fragment:ip,alphatest_fragment:sp,alphatest_pars_fragment:rp,aomap_fragment:op,aomap_pars_fragment:ap,batching_pars_vertex:cp,batching_vertex:lp,begin_vertex:hp,beginnormal_vertex:up,bsdfs:dp,iridescence_fragment:fp,bumpmap_pars_fragment:pp,clipping_planes_fragment:mp,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:_p,clipping_planes_vertex:vp,color_fragment:xp,color_pars_fragment:yp,color_pars_vertex:Sp,color_vertex:Mp,common:Ep,cube_uv_reflection_fragment:Ap,defaultnormal_vertex:Tp,displacementmap_pars_vertex:wp,displacementmap_vertex:bp,emissivemap_fragment:Rp,emissivemap_pars_fragment:Cp,colorspace_fragment:Pp,colorspace_pars_fragment:Ip,envmap_fragment:Lp,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Np,envmap_pars_vertex:Op,envmap_physical_pars_fragment:$p,envmap_vertex:Up,fog_vertex:Fp,fog_pars_vertex:Bp,fog_fragment:zp,fog_pars_fragment:kp,gradientmap_pars_fragment:Hp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Wp,lights_pars_begin:Xp,lights_toon_fragment:qp,lights_toon_pars_fragment:Yp,lights_phong_fragment:jp,lights_phong_pars_fragment:Kp,lights_physical_fragment:Jp,lights_physical_pars_fragment:Zp,lights_fragment_begin:Qp,lights_fragment_maps:em,lights_fragment_end:tm,logdepthbuf_fragment:nm,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:sm,logdepthbuf_vertex:rm,map_fragment:om,map_pars_fragment:am,map_particle_fragment:cm,map_particle_pars_fragment:lm,metalnessmap_fragment:hm,metalnessmap_pars_fragment:um,morphinstance_vertex:dm,morphcolor_vertex:fm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:_m,normal_fragment_maps:vm,normal_pars_fragment:xm,normal_pars_vertex:ym,normal_vertex:Sm,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:Em,clearcoat_normal_fragment_maps:Am,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:wm,opaque_fragment:bm,packing:Rm,premultiplied_alpha_fragment:Cm,project_vertex:Pm,dithering_fragment:Im,dithering_pars_fragment:Lm,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Um,shadowmap_vertex:Fm,shadowmask_pars_fragment:Bm,skinbase_vertex:zm,skinning_pars_vertex:km,skinning_vertex:Hm,skinnormal_vertex:Vm,specularmap_fragment:Gm,specularmap_pars_fragment:Wm,tonemapping_fragment:Xm,tonemapping_pars_fragment:$m,transmission_fragment:qm,transmission_pars_fragment:Ym,uv_pars_fragment:jm,uv_pars_vertex:Km,uv_vertex:Jm,worldpos_vertex:Zm,background_vert:Qm,background_frag:eg,backgroundCube_vert:tg,backgroundCube_frag:ng,cube_vert:ig,cube_frag:sg,depth_vert:rg,depth_frag:og,distanceRGBA_vert:ag,distanceRGBA_frag:cg,equirect_vert:lg,equirect_frag:hg,linedashed_vert:ug,linedashed_frag:dg,meshbasic_vert:fg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:_g,meshmatcap_frag:vg,meshnormal_vert:xg,meshnormal_frag:yg,meshphong_vert:Sg,meshphong_frag:Mg,meshphysical_vert:Eg,meshphysical_frag:Ag,meshtoon_vert:Tg,meshtoon_frag:wg,points_vert:bg,points_frag:Rg,shadow_vert:Cg,shadow_frag:Pg,sprite_vert:Ig,sprite_frag:Lg},de={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},En={basic:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ht([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ht([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ht([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ht([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ht([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ht([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ht([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ht([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ht([de.common,de.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ht([de.lights,de.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};En.physical={uniforms:Ht([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Er={r:0,b:0,g:0},_i=new wn,Dg=new He;function Ng(s,e,t,n,i,r,o){const a=new Fe(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function _(M){let A=M.isScene===!0?M.background:null;return A&&A.isTexture&&(A=(M.backgroundBlurriness>0?t:e).get(A)),A}function v(M){let A=!1;const T=_(M);T===null?g(a,l):T&&T.isColor&&(g(T,1),A=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(M,A){const T=_(A);T&&(T.isCubeTexture||T.mapping===so)?(u===void 0&&(u=new yt(new Di(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:us(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),_i.copy(A.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(_i)),u.material.toneMapped=at.getTransfer(T.colorSpace)!==_t,(h!==T||d!==T.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new yt(new ir(2,2),new qn({name:"BackgroundMaterial",uniforms:us(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=at.getTransfer(T.colorSpace)!==_t,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,A){M.getRGB(Er,wu(s)),n.buffers.color.setClear(Er.r,Er.g,Er.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),l=A,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(a,l)},render:v,addToRenderList:p}}function Og(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(S,R,V,G,q){let ne=!1;const $=h(G,V,R);r!==$&&(r=$,c(r.object)),ne=f(S,G,V,q),ne&&_(S,G,V,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,T(S,R,V,G),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,R,V){const G=V.wireframe===!0;let q=n[S.id];q===void 0&&(q={},n[S.id]=q);let ne=q[R.id];ne===void 0&&(ne={},q[R.id]=ne);let $=ne[G];return $===void 0&&($=d(l()),ne[G]=$),$}function d(S){const R=[],V=[],G=[];for(let q=0;q<t;q++)R[q]=0,V[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:G,object:S,attributes:{},index:null}}function f(S,R,V,G){const q=r.attributes,ne=R.attributes;let $=0;const ie=V.getAttributes();for(const Y in ie)if(ie[Y].location>=0){const me=q[Y];let ae=ne[Y];if(ae===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),me===void 0||me.attribute!==ae||ae&&me.data!==ae.data)return!0;$++}return r.attributesNum!==$||r.index!==G}function _(S,R,V,G){const q={},ne=R.attributes;let $=0;const ie=V.getAttributes();for(const Y in ie)if(ie[Y].location>=0){let me=ne[Y];me===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));const ae={};ae.attribute=me,me&&me.data&&(ae.data=me.data),q[Y]=ae,$++}r.attributes=q,r.attributesNum=$,r.index=G}function v(){const S=r.newAttributes;for(let R=0,V=S.length;R<V;R++)S[R]=0}function p(S){g(S,0)}function g(S,R){const V=r.newAttributes,G=r.enabledAttributes,q=r.attributeDivisors;V[S]=1,G[S]===0&&(s.enableVertexAttribArray(S),G[S]=1),q[S]!==R&&(s.vertexAttribDivisor(S,R),q[S]=R)}function M(){const S=r.newAttributes,R=r.enabledAttributes;for(let V=0,G=R.length;V<G;V++)R[V]!==S[V]&&(s.disableVertexAttribArray(V),R[V]=0)}function A(S,R,V,G,q,ne,$){$===!0?s.vertexAttribIPointer(S,R,V,q,ne):s.vertexAttribPointer(S,R,V,G,q,ne)}function T(S,R,V,G){v();const q=G.attributes,ne=V.getAttributes(),$=R.defaultAttributeValues;for(const ie in ne){const Y=ne[ie];if(Y.location>=0){let ye=q[ie];if(ye===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),ye!==void 0){const me=ye.normalized,ae=ye.itemSize,Xe=e.get(ye);if(Xe===void 0)continue;const et=Xe.buffer,Z=Xe.type,le=Xe.bytesPerElement,Me=Z===s.INT||Z===s.UNSIGNED_INT||ye.gpuType===uc;if(ye.isInterleavedBufferAttribute){const Ee=ye.data,Be=Ee.stride,De=ye.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ye=0;Ye<Y.locationSize;Ye++)g(Y.location+Ye,Ee.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ye=0;Ye<Y.locationSize;Ye++)p(Y.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,et);for(let Ye=0;Ye<Y.locationSize;Ye++)A(Y.location+Ye,ae/Y.locationSize,Z,me,Be*le,(De+ae/Y.locationSize*Ye)*le,Me)}else{if(ye.isInstancedBufferAttribute){for(let Ee=0;Ee<Y.locationSize;Ee++)g(Y.location+Ee,ye.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ee=0;Ee<Y.locationSize;Ee++)p(Y.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,et);for(let Ee=0;Ee<Y.locationSize;Ee++)A(Y.location+Ee,ae/Y.locationSize,Z,me,ae*le,ae/Y.locationSize*Ee*le,Me)}}else if($!==void 0){const me=$[ie];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(Y.location,me);break;case 3:s.vertexAttrib3fv(Y.location,me);break;case 4:s.vertexAttrib4fv(Y.location,me);break;default:s.vertexAttrib1fv(Y.location,me)}}}}M()}function L(){B();for(const S in n){const R=n[S];for(const V in R){const G=R[V];for(const q in G)u(G[q].object),delete G[q];delete R[V]}delete n[S]}}function I(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const V in R){const G=R[V];for(const q in G)u(G[q].object),delete G[q];delete R[V]}delete n[S.id]}function P(S){for(const R in n){const V=n[R];if(V[S.id]===void 0)continue;const G=V[S.id];for(const q in G)u(G[q].object),delete G[q];delete V[S.id]}}function B(){J(),o=!0,r!==i&&(r=i,c(r.object))}function J(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:B,resetDefaultState:J,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function Ug(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v];for(let v=0;v<d.length;v++)t.update(_,n,d[v])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==rn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const B=P===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==$n&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==vn&&!B)}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:T,vertexTextures:L,maxSamples:I}}function Bg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ti,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,g=s.get(h);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,A=M*4;let T=g.clippingState||null;l.value=T,T=u(_,d,A,f);for(let L=0;L!==A;++L)T[L]=t[L];g.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const g=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let A=0,T=f;A!==v;++A,T+=4)o.copy(h[A]).applyMatrix4(M,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function zg(s){let e=new WeakMap;function t(o,a){return a===Ma?o.mapping=rs:a===Ea&&(o.mapping=os),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ma||a===Ea)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kf(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Mc extends bu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,vl=[.125,.215,.35,.446,.526,.582],Ri=20,Oo=new Mc,xl=new Fe;let Uo=null,Fo=0,Bo=0,zo=!1;const wi=(1+Math.sqrt(5))/2,Yi=1/wi,yl=[new D(-wi,Yi,0),new D(wi,Yi,0),new D(-Yi,0,wi),new D(Yi,0,wi),new D(0,wi,-Yi),new D(0,wi,Yi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Sl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Uo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uo,Fo,Bo),this._renderer.xr.enabled=zo,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:nr,format:rn,colorSpace:Ut,depthBuffer:!1},i=Ml(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kg(r)),this._blurMaterial=Hg(r,e,t)}return i}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,n,i){const a=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(xl),u.toneMapping=di,u.autoClear=!1;const f=new An({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),_=new yt(new Di,f);let v=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(xl),v=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):M===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const A=this._cubeSize;Ar(i,M*A,g>2?A:0,A,A),u.setRenderTarget(i),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===rs||e.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=El());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ar(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yl[(i-r-1)%yl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new yt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),v=r/_,p=isFinite(r)?1+Math.floor(u*v):Ri;p>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ri}`);const g=[];let M=0;for(let P=0;P<Ri;++P){const B=P/v,J=Math.exp(-B*B/2);g.push(J),P===0?M+=J:P<p&&(M+=2*J)}for(let P=0;P<g.length;P++)g[P]=g[P]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=_,d.mipInt.value=A-n;const T=this._sizeLods[i],L=3*T*(i>A-Zi?i-A+Zi:0),I=4*(this._cubeSize-T);Ar(t,L,I,3*T,2*T),l.setRenderTarget(t),l.render(h,Oo)}}function kg(s){const e=[],t=[],n=[];let i=s;const r=s-Zi+1+vl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Zi?l=vl[o-s+Zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,v=3,p=2,g=1,M=new Float32Array(v*_*f),A=new Float32Array(p*_*f),T=new Float32Array(g*_*f);for(let I=0;I<f;I++){const P=I%3*2/3-1,B=I>2?0:-1,J=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];M.set(J,v*_*I),A.set(d,p*_*I);const S=[I,I,I,I,I,I];T.set(S,g*_*I)}const L=new qt;L.setAttribute("position",new $t(M,v)),L.setAttribute("uv",new $t(A,p)),L.setAttribute("faceIndex",new $t(T,g)),e.push(L),i>Zi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ml(s,e,t){const n=new Ii(s,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Hg(s,e,t){const n=new Float32Array(Ri),i=new D(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function El(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Al(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function Vg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ma||l===Ea,u=l===rs||l===os;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Sl(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Sl(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Gg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&$r("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wg(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let p=0,g=v.length;p<g;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const v=f[_];for(let p=0,g=v.length;p<g;p++)e.update(v[p],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,_=h.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let A=0,T=M.length;A<T;A+=3){const L=M[A+0],I=M[A+1],P=M[A+2];d.push(L,I,I,P,P,L)}}else if(_!==void 0){const M=_.array;v=_.version;for(let A=0,T=M.length/3-1;A<T;A+=3){const L=A+0,I=A+1,P=A+2;d.push(L,I,I,P,P,L)}}else return;const p=new(xu(d)?Tu:Au)(d,1);p.version=v;const g=r.get(h);g&&e.remove(g),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Xg(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*o,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let p=0;for(let g=0;g<_;g++)p+=f[g];t.update(p,n,1)}function h(d,f,_,v){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],v[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,_);let g=0;for(let M=0;M<_;M++)g+=f[M];for(let M=0;M<v.length;M++)t.update(g,n,v[M])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function $g(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qg(s,e,t){const n=new WeakMap,i=new lt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let J=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",J)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let A=0;f===!0&&(A=1),_===!0&&(A=2),v===!0&&(A=3);let T=a.attributes.position.count*A,L=1;T>e.maxTextureSize&&(L=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const I=new Float32Array(T*L*4*h),P=new Su(I,T,L,h);P.type=vn,P.needsUpdate=!0;const B=A*4;for(let S=0;S<h;S++){const R=p[S],V=g[S],G=M[S],q=T*L*4*S;for(let ne=0;ne<R.count;ne++){const $=ne*B;f===!0&&(i.fromBufferAttribute(R,ne),I[q+$+0]=i.x,I[q+$+1]=i.y,I[q+$+2]=i.z,I[q+$+3]=0),_===!0&&(i.fromBufferAttribute(V,ne),I[q+$+4]=i.x,I[q+$+5]=i.y,I[q+$+6]=i.z,I[q+$+7]=0),v===!0&&(i.fromBufferAttribute(G,ne),I[q+$+8]=i.x,I[q+$+9]=i.y,I[q+$+10]=i.z,I[q+$+11]=G.itemSize===4?i.w:1)}}d={count:h,texture:P,size:new be(T,L)},n.set(a,d),a.addEventListener("dispose",J)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Yg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Pu extends Nt{constructor(e,t,n,i,r,o,a,l,c,u=ts){if(u!==ts&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ts&&(n=Pi),n===void 0&&u===ls&&(n=cs),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Iu=new Nt,Tl=new Pu(1,1),Lu=new Su,Du=new Nf,Nu=new Ru,wl=[],bl=[],Rl=new Float32Array(16),Cl=new Float32Array(9),Pl=new Float32Array(4);function _s(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=wl[i];if(r===void 0&&(r=new Float32Array(i),wl[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function It(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ao(s,e){let t=bl[e];t===void 0&&(t=new Int32Array(e),bl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function jg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2fv(this.addr,e),It(t,e)}}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;s.uniform3fv(this.addr,e),It(t,e)}}function Zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4fv(this.addr,e),It(t,e)}}function Qg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Pl.set(n),s.uniformMatrix2fv(this.addr,!1,Pl),It(t,n)}}function e_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Cl.set(n),s.uniformMatrix3fv(this.addr,!1,Cl),It(t,n)}}function t_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Rl.set(n),s.uniformMatrix4fv(this.addr,!1,Rl),It(t,n)}}function n_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function i_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2iv(this.addr,e),It(t,e)}}function s_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3iv(this.addr,e),It(t,e)}}function r_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4iv(this.addr,e),It(t,e)}}function o_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function a_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2uiv(this.addr,e),It(t,e)}}function c_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3uiv(this.addr,e),It(t,e)}}function l_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4uiv(this.addr,e),It(t,e)}}function h_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Tl.compareFunction=vu,r=Tl):r=Iu,t.setTexture2D(e||r,i)}function u_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Du,i)}function d_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nu,i)}function f_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lu,i)}function p_(s){switch(s){case 5126:return jg;case 35664:return Kg;case 35665:return Jg;case 35666:return Zg;case 35674:return Qg;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return c_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}function m_(s,e){s.uniform1fv(this.addr,e)}function g_(s,e){const t=_s(e,this.size,2);s.uniform2fv(this.addr,t)}function __(s,e){const t=_s(e,this.size,3);s.uniform3fv(this.addr,t)}function v_(s,e){const t=_s(e,this.size,4);s.uniform4fv(this.addr,t)}function x_(s,e){const t=_s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function y_(s,e){const t=_s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function S_(s,e){const t=_s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function M_(s,e){s.uniform1iv(this.addr,e)}function E_(s,e){s.uniform2iv(this.addr,e)}function A_(s,e){s.uniform3iv(this.addr,e)}function T_(s,e){s.uniform4iv(this.addr,e)}function w_(s,e){s.uniform1uiv(this.addr,e)}function b_(s,e){s.uniform2uiv(this.addr,e)}function R_(s,e){s.uniform3uiv(this.addr,e)}function C_(s,e){s.uniform4uiv(this.addr,e)}function P_(s,e,t){const n=this.cache,i=e.length,r=ao(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Iu,r[o])}function I_(s,e,t){const n=this.cache,i=e.length,r=ao(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Du,r[o])}function L_(s,e,t){const n=this.cache,i=e.length,r=ao(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Nu,r[o])}function D_(s,e,t){const n=this.cache,i=e.length,r=ao(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Lu,r[o])}function N_(s){switch(s){case 5126:return m_;case 35664:return g_;case 35665:return __;case 35666:return v_;case 35674:return x_;case 35675:return y_;case 35676:return S_;case 5124:case 35670:return M_;case 35667:case 35671:return E_;case 35668:case 35672:return A_;case 35669:case 35673:return T_;case 5125:return w_;case 36294:return b_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}class O_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=p_(t.type)}}class U_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N_(t.type)}}class F_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Il(s,e){s.seq.push(e),s.map[e.id]=e}function B_(s,e,t){const n=s.name,i=n.length;for(ko.lastIndex=0;;){const r=ko.exec(n),o=ko.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Il(t,c===void 0?new O_(a,s,e):new U_(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new F_(a),Il(t,h)),t=h}}}class qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);B_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ll(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const z_=37297;let k_=0;function H_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function V_(s){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(s);let n;switch(e===t?n="":e===Zr&&t===Jr?n="LinearDisplayP3ToLinearSRGB":e===Jr&&t===Zr&&(n="LinearSRGBToLinearDisplayP3"),s){case Ut:case ro:return[n,"LinearTransferOETF"];case Vt:case xc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Dl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+H_(s.getShaderSource(e),o)}else return i}function G_(s,e){const t=V_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function W_(s,e){let t;switch(e){case Hd:t="Linear";break;case Vd:t="Reinhard";break;case Gd:t="Cineon";break;case Wd:t="ACESFilmic";break;case $d:t="AgX";break;case qd:t="Neutral";break;case Xd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tr=new D;function X_(){at.getLuminanceCoefficients(Tr);const s=Tr.x.toFixed(4),e=Tr.y.toFixed(4),t=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function q_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Y_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Vs(s){return s!==""}function Nl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ol(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(s){return s.replace(j_,J_)}const K_=new Map;function J_(s,e){let t=Ve[e];if(t===void 0){const n=K_.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qa(t)}const Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(s){return s.replace(Z_,Q_)}function Q_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===nu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===yd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function t0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case rs:case os:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function i0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case iu:e="ENVMAP_BLENDING_MULTIPLY";break;case zd:e="ENVMAP_BLENDING_MIX";break;case kd:e="ENVMAP_BLENDING_ADD";break}return e}function s0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function r0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=e0(t),c=t0(t),u=n0(t),h=i0(t),d=s0(t),f=$_(t),_=q_(r),v=i.createProgram();let p,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vs).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vs).join(`
`),g.length>0&&(g+=`
`)):(p=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),g=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?Ve.tonemapping_pars_fragment:"",t.toneMapping!==di?W_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,G_("linearToOutputTexel",t.outputColorSpace),X_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),o=Qa(o),o=Nl(o,t),o=Ol(o,t),a=Qa(a),a=Nl(a,t),a=Ol(a,t),o=Ul(o),a=Ul(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=M+p+o,T=M+g+a,L=Ll(i,i.VERTEX_SHADER,A),I=Ll(i,i.FRAGMENT_SHADER,T);i.attachShader(v,L),i.attachShader(v,I),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function P(R){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(v).trim(),G=i.getShaderInfoLog(L).trim(),q=i.getShaderInfoLog(I).trim();let ne=!0,$=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,L,I);else{const ie=Dl(i,L,"vertex"),Y=Dl(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+ie+`
`+Y)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||q==="")&&($=!1);$&&(R.diagnostics={runnable:ne,programLog:V,vertexShader:{log:G,prefix:p},fragmentShader:{log:q,prefix:g}})}i.deleteShader(L),i.deleteShader(I),B=new qr(i,v),J=Y_(i,v)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let J;this.getAttributes=function(){return J===void 0&&P(this),J};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,z_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=I,this}let o0=0;class a0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new c0(e),t.set(e,n)),n}}class c0{constructor(e){this.id=o0++,this.code=e,this.usedTimes=0}}function l0(s,e,t,n,i,r,o){const a=new Mu,l=new a0,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let _=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,R,V,G,q){const ne=G.fog,$=q.geometry,ie=S.isMeshStandardMaterial?G.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||ie),ye=Y&&Y.mapping===so?Y.image.height:null,me=v[S.type];S.precision!==null&&(_=i.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const ae=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Xe=ae!==void 0?ae.length:0;let et=0;$.morphAttributes.position!==void 0&&(et=1),$.morphAttributes.normal!==void 0&&(et=2),$.morphAttributes.color!==void 0&&(et=3);let Z,le,Me,Ee;if(me){const mt=En[me];Z=mt.vertexShader,le=mt.fragmentShader}else Z=S.vertexShader,le=S.fragmentShader,l.update(S),Me=l.getVertexShaderID(S),Ee=l.getFragmentShaderID(S);const Be=s.getRenderTarget(),De=q.isInstancedMesh===!0,Ye=q.isBatchedMesh===!0,ht=!!S.map,$e=!!S.matcap,U=!!Y,Ot=!!S.aoMap,Je=!!S.lightMap,tt=!!S.bumpMap,Ie=!!S.normalMap,pt=!!S.displacementMap,Ne=!!S.emissiveMap,C=!!S.metalnessMap,w=!!S.roughnessMap,X=S.anisotropy>0,te=S.clearcoat>0,re=S.dispersion>0,ee=S.iridescence>0,Re=S.sheen>0,fe=S.transmission>0,Ae=X&&!!S.anisotropyMap,Ze=te&&!!S.clearcoatMap,he=te&&!!S.clearcoatNormalMap,Te=te&&!!S.clearcoatRoughnessMap,Oe=ee&&!!S.iridescenceMap,Ue=ee&&!!S.iridescenceThicknessMap,ge=Re&&!!S.sheenColorMap,Qe=Re&&!!S.sheenRoughnessMap,ze=!!S.specularMap,dt=!!S.specularColorMap,z=!!S.specularIntensityMap,_e=fe&&!!S.transmissionMap,j=fe&&!!S.thicknessMap,se=!!S.gradientMap,ve=!!S.alphaMap,xe=S.alphaTest>0,nt=!!S.alphaHash,xt=!!S.extensions;let Ft=di;S.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const ot={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:le,defines:S.defines,customVertexShaderID:Me,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Ye,batchingColor:Ye&&q._colorsTexture!==null,instancing:De,instancingColor:De&&q.instanceColor!==null,instancingMorph:De&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Be===null?s.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:Ut,alphaToCoverage:!!S.alphaToCoverage,map:ht,matcap:$e,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:ye,aoMap:Ot,lightMap:Je,bumpMap:tt,normalMap:Ie,displacementMap:f&&pt,emissiveMap:Ne,normalMapObjectSpace:Ie&&S.normalMapType===ef,normalMapTangentSpace:Ie&&S.normalMapType===_u,metalnessMap:C,roughnessMap:w,anisotropy:X,anisotropyMap:Ae,clearcoat:te,clearcoatMap:Ze,clearcoatNormalMap:he,clearcoatRoughnessMap:Te,dispersion:re,iridescence:ee,iridescenceMap:Oe,iridescenceThicknessMap:Ue,sheen:Re,sheenColorMap:ge,sheenRoughnessMap:Qe,specularMap:ze,specularColorMap:dt,specularIntensityMap:z,transmission:fe,transmissionMap:_e,thicknessMap:j,gradientMap:se,opaque:S.transparent===!1&&S.blending===es&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:xe,alphaHash:nt,combine:S.combine,mapUv:ht&&p(S.map.channel),aoMapUv:Ot&&p(S.aoMap.channel),lightMapUv:Je&&p(S.lightMap.channel),bumpMapUv:tt&&p(S.bumpMap.channel),normalMapUv:Ie&&p(S.normalMap.channel),displacementMapUv:pt&&p(S.displacementMap.channel),emissiveMapUv:Ne&&p(S.emissiveMap.channel),metalnessMapUv:C&&p(S.metalnessMap.channel),roughnessMapUv:w&&p(S.roughnessMap.channel),anisotropyMapUv:Ae&&p(S.anisotropyMap.channel),clearcoatMapUv:Ze&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&p(S.sheenRoughnessMap.channel),specularMapUv:ze&&p(S.specularMap.channel),specularColorMapUv:dt&&p(S.specularColorMap.channel),specularIntensityMapUv:z&&p(S.specularIntensityMap.channel),transmissionMapUv:_e&&p(S.transmissionMap.channel),thicknessMapUv:j&&p(S.thicknessMap.channel),alphaMapUv:ve&&p(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ie||X),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!$.attributes.uv&&(ht||ve),fog:!!ne,useFog:S.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Xe,morphTextureStride:et,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:ht&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Xt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&S.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function M(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const V in S.defines)R.push(V),R.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(A(R,S),T(R,S),R.push(s.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function A(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function T(S,R){a.disableAll(),R.supportsVertexTextures&&a.enable(0),R.instancing&&a.enable(1),R.instancingColor&&a.enable(2),R.instancingMorph&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),R.dispersion&&a.enable(20),R.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reverseDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),S.push(a.mask)}function L(S){const R=v[S.type];let V;if(R){const G=En[R];V=$f.clone(G.uniforms)}else V=S.uniforms;return V}function I(S,R){let V;for(let G=0,q=u.length;G<q;G++){const ne=u[G];if(ne.cacheKey===R){V=ne,++V.usedTimes;break}}return V===void 0&&(V=new r0(s,R,S,r),u.push(V)),V}function P(S){if(--S.usedTimes===0){const R=u.indexOf(S);u[R]=u[u.length-1],u.pop(),S.destroy()}}function B(S){l.remove(S)}function J(){l.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:L,acquireProgram:I,releaseProgram:P,releaseShaderCache:B,programs:u,dispose:J}}function h0(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function u0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Bl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,_,v,p){let g=s[e];return g===void 0?(g={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:v,group:p},s[e]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=f,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=v,g.group=p),e++,g}function a(h,d,f,_,v,p){const g=o(h,d,f,_,v,p);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function l(h,d,f,_,v,p){const g=o(h,d,f,_,v,p);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function c(h,d){t.length>1&&t.sort(h||u0),n.length>1&&n.sort(d||Bl),i.length>1&&i.sort(d||Bl)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function d0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new zl,s.set(n,[o])):i>=r.length?(o=new zl,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function f0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Fe};break;case"SpotLight":t={position:new D,direction:new D,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function p0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let m0=0;function g0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _0(s){const e=new f0,t=p0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new He,o=new He;function a(c){let u=0,h=0,d=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let f=0,_=0,v=0,p=0,g=0,M=0,A=0,T=0,L=0,I=0,P=0;c.sort(g0);for(let J=0,S=c.length;J<S;J++){const R=c[J],V=R.color,G=R.intensity,q=R.distance,ne=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=V.r*G,h+=V.g*G,d+=V.b*G;else if(R.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(R.sh.coefficients[$],G);P++}else if(R.isDirectionalLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ie=R.shadow,Y=t.get(R);Y.shadowIntensity=ie.intensity,Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=ne,n.directionalShadowMatrix[f]=R.shadow.matrix,M++}n.directional[f]=$,f++}else if(R.isSpotLight){const $=e.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(V).multiplyScalar(G),$.distance=q,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,n.spot[v]=$;const ie=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,ie.updateMatrices(R),R.castShadow&&I++),n.spotLightMatrix[v]=ie.matrix,R.castShadow){const Y=t.get(R);Y.shadowIntensity=ie.intensity,Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=ne,T++}v++}else if(R.isRectAreaLight){const $=e.get(R);$.color.copy(V).multiplyScalar(G),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=$,p++}else if(R.isPointLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),$.distance=R.distance,$.decay=R.decay,R.castShadow){const ie=R.shadow,Y=t.get(R);Y.shadowIntensity=ie.intensity,Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,Y.shadowCameraNear=ie.camera.near,Y.shadowCameraFar=ie.camera.far,n.pointShadow[_]=Y,n.pointShadowMap[_]=ne,n.pointShadowMatrix[_]=R.shadow.matrix,A++}n.point[_]=$,_++}else if(R.isHemisphereLight){const $=e.get(R);$.skyColor.copy(R.color).multiplyScalar(G),$.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[g]=$,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const B=n.hash;(B.directionalLength!==f||B.pointLength!==_||B.spotLength!==v||B.rectAreaLength!==p||B.hemiLength!==g||B.numDirectionalShadows!==M||B.numPointShadows!==A||B.numSpotShadows!==T||B.numSpotMaps!==L||B.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=T+L-I,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,B.directionalLength=f,B.pointLength=_,B.spotLength=v,B.rectAreaLength=p,B.hemiLength=g,B.numDirectionalShadows=M,B.numPointShadows=A,B.numSpotShadows=T,B.numSpotMaps=L,B.numLightProbes=P,n.version=m0++)}function l(c,u){let h=0,d=0,f=0,_=0,v=0;const p=u.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const A=c[g];if(A.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),h++}else if(A.isSpotLight){const T=n.spot[f];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),f++}else if(A.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(A.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(A.width*.5,0,0),T.halfHeight.set(0,A.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(p),d++}else if(A.isHemisphereLight){const T=n.hemi[v];T.direction.setFromMatrixPosition(A.matrixWorld),T.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function kl(s){const e=new _0(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function v0(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new kl(s),e.set(i,[a])):r>=o.length?(a=new kl(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class x0 extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class y0 extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const S0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
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
}`;function E0(s,e,t){let n=new Sc;const i=new be,r=new be,o=new lt,a=new x0({depthPacking:Qd}),l=new y0,c={},u=t.maxTextureSize,h={[Xn]:Xt,[Xt]:Xn,[sn]:sn},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:S0,fragmentShader:M0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new qt;_.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new yt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let g=this.type;this.render=function(I,P,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;const J=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),V=s.state;V.setBlending(ui),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const G=g!==zn&&this.type===zn,q=g===zn&&this.type!==zn;for(let ne=0,$=I.length;ne<$;ne++){const ie=I[ne],Y=ie.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const ye=Y.getFrameExtents();if(i.multiply(ye),r.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ye.x),i.x=r.x*ye.x,Y.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ye.y),i.y=r.y*ye.y,Y.mapSize.y=r.y)),Y.map===null||G===!0||q===!0){const ae=this.type!==zn?{minFilter:Wt,magFilter:Wt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ii(i.x,i.y,ae),Y.map.texture.name=ie.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const me=Y.getViewportCount();for(let ae=0;ae<me;ae++){const Xe=Y.getViewport(ae);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),V.viewport(o),Y.updateMatrices(ie,ae),n=Y.getFrustum(),T(P,B,Y.camera,ie,this.type)}Y.isPointLightShadow!==!0&&this.type===zn&&M(Y,B),Y.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(J,S,R)};function M(I,P){const B=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ii(i.x,i.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(P,null,B,d,v,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(P,null,B,f,v,null)}function A(I,P,B,J){let S=null;const R=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(R!==void 0)S=R;else if(S=B.isPointLight===!0?l:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const V=S.uuid,G=P.uuid;let q=c[V];q===void 0&&(q={},c[V]=q);let ne=q[G];ne===void 0&&(ne=S.clone(),q[G]=ne,P.addEventListener("dispose",L)),S=ne}if(S.visible=P.visible,S.wireframe=P.wireframe,J===zn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:h[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=s.properties.get(S);V.light=B}return S}function T(I,P,B,J,S){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===zn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const G=e.update(I),q=I.material;if(Array.isArray(q)){const ne=G.groups;for(let $=0,ie=ne.length;$<ie;$++){const Y=ne[$],ye=q[Y.materialIndex];if(ye&&ye.visible){const me=A(I,ye,J,S);I.onBeforeShadow(s,I,P,B,G,me,Y),s.renderBufferDirect(B,null,G,me,I,Y),I.onAfterShadow(s,I,P,B,G,me,Y)}}}else if(q.visible){const ne=A(I,q,J,S);I.onBeforeShadow(s,I,P,B,G,ne,null),s.renderBufferDirect(B,null,G,ne,I,null),I.onAfterShadow(s,I,P,B,G,ne,null)}}const V=I.children;for(let G=0,q=V.length;G<q;G++)T(V[G],P,B,J,S)}function L(I){I.target.removeEventListener("dispose",L);for(const B in c){const J=c[B],S=I.target.uuid;S in J&&(J[S].dispose(),delete J[S])}}}const A0={[ma]:ga,[_a]:ya,[va]:Sa,[ss]:xa,[ga]:ma,[ya]:_a,[Sa]:va,[xa]:ss};function T0(s){function e(){let z=!1;const _e=new lt;let j=null;const se=new lt(0,0,0,0);return{setMask:function(ve){j!==ve&&!z&&(s.colorMask(ve,ve,ve,ve),j=ve)},setLocked:function(ve){z=ve},setClear:function(ve,xe,nt,xt,Ft){Ft===!0&&(ve*=xt,xe*=xt,nt*=xt),_e.set(ve,xe,nt,xt),se.equals(_e)===!1&&(s.clearColor(ve,xe,nt,xt),se.copy(_e))},reset:function(){z=!1,j=null,se.set(-1,0,0,0)}}}function t(){let z=!1,_e=!1,j=null,se=null,ve=null;return{setReversed:function(xe){_e=xe},setTest:function(xe){xe?Me(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(xe){j!==xe&&!z&&(s.depthMask(xe),j=xe)},setFunc:function(xe){if(_e&&(xe=A0[xe]),se!==xe){switch(xe){case ma:s.depthFunc(s.NEVER);break;case ga:s.depthFunc(s.ALWAYS);break;case _a:s.depthFunc(s.LESS);break;case ss:s.depthFunc(s.LEQUAL);break;case va:s.depthFunc(s.EQUAL);break;case xa:s.depthFunc(s.GEQUAL);break;case ya:s.depthFunc(s.GREATER);break;case Sa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=xe}},setLocked:function(xe){z=xe},setClear:function(xe){ve!==xe&&(s.clearDepth(xe),ve=xe)},reset:function(){z=!1,j=null,se=null,ve=null}}}function n(){let z=!1,_e=null,j=null,se=null,ve=null,xe=null,nt=null,xt=null,Ft=null;return{setTest:function(ot){z||(ot?Me(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(ot){_e!==ot&&!z&&(s.stencilMask(ot),_e=ot)},setFunc:function(ot,mt,on){(j!==ot||se!==mt||ve!==on)&&(s.stencilFunc(ot,mt,on),j=ot,se=mt,ve=on)},setOp:function(ot,mt,on){(xe!==ot||nt!==mt||xt!==on)&&(s.stencilOp(ot,mt,on),xe=ot,nt=mt,xt=on)},setLocked:function(ot){z=ot},setClear:function(ot){Ft!==ot&&(s.clearStencil(ot),Ft=ot)},reset:function(){z=!1,_e=null,j=null,se=null,ve=null,xe=null,nt=null,xt=null,Ft=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,_=!1,v=null,p=null,g=null,M=null,A=null,T=null,L=null,I=new Fe(0,0,0),P=0,B=!1,J=null,S=null,R=null,V=null,G=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,$=0;const ie=s.getParameter(s.VERSION);ie.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ie)[1]),ne=$>=1):ie.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),ne=$>=2);let Y=null,ye={};const me=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),Xe=new lt().fromArray(me),et=new lt().fromArray(ae);function Z(z,_e,j,se){const ve=new Uint8Array(4),xe=s.createTexture();s.bindTexture(z,xe),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<j;nt++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,se,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(_e+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return xe}const le={};le[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Me(s.DEPTH_TEST),r.setFunc(ss),Je(!1),tt(qc),Me(s.CULL_FACE),U(ui);function Me(z){c[z]!==!0&&(s.enable(z),c[z]=!0)}function Ee(z){c[z]!==!1&&(s.disable(z),c[z]=!1)}function Be(z,_e){return u[z]!==_e?(s.bindFramebuffer(z,_e),u[z]=_e,z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=_e),z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=_e),!0):!1}function De(z,_e){let j=d,se=!1;if(z){j=h.get(_e),j===void 0&&(j=[],h.set(_e,j));const ve=z.textures;if(j.length!==ve.length||j[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,nt=ve.length;xe<nt;xe++)j[xe]=s.COLOR_ATTACHMENT0+xe;j.length=ve.length,se=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,se=!0);se&&s.drawBuffers(j)}function Ye(z){return f!==z?(s.useProgram(z),f=z,!0):!1}const ht={[bi]:s.FUNC_ADD,[Md]:s.FUNC_SUBTRACT,[Ed]:s.FUNC_REVERSE_SUBTRACT};ht[Ad]=s.MIN,ht[Td]=s.MAX;const $e={[wd]:s.ZERO,[bd]:s.ONE,[Rd]:s.SRC_COLOR,[fa]:s.SRC_ALPHA,[Nd]:s.SRC_ALPHA_SATURATE,[Ld]:s.DST_COLOR,[Pd]:s.DST_ALPHA,[Cd]:s.ONE_MINUS_SRC_COLOR,[pa]:s.ONE_MINUS_SRC_ALPHA,[Dd]:s.ONE_MINUS_DST_COLOR,[Id]:s.ONE_MINUS_DST_ALPHA,[Od]:s.CONSTANT_COLOR,[Ud]:s.ONE_MINUS_CONSTANT_COLOR,[Fd]:s.CONSTANT_ALPHA,[Bd]:s.ONE_MINUS_CONSTANT_ALPHA};function U(z,_e,j,se,ve,xe,nt,xt,Ft,ot){if(z===ui){_===!0&&(Ee(s.BLEND),_=!1);return}if(_===!1&&(Me(s.BLEND),_=!0),z!==Sd){if(z!==v||ot!==B){if((p!==bi||A!==bi)&&(s.blendEquation(s.FUNC_ADD),p=bi,A=bi),ot)switch(z){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yc:s.blendFunc(s.ONE,s.ONE);break;case jc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case jc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}g=null,M=null,T=null,L=null,I.set(0,0,0),P=0,v=z,B=ot}return}ve=ve||_e,xe=xe||j,nt=nt||se,(_e!==p||ve!==A)&&(s.blendEquationSeparate(ht[_e],ht[ve]),p=_e,A=ve),(j!==g||se!==M||xe!==T||nt!==L)&&(s.blendFuncSeparate($e[j],$e[se],$e[xe],$e[nt]),g=j,M=se,T=xe,L=nt),(xt.equals(I)===!1||Ft!==P)&&(s.blendColor(xt.r,xt.g,xt.b,Ft),I.copy(xt),P=Ft),v=z,B=!1}function Ot(z,_e){z.side===sn?Ee(s.CULL_FACE):Me(s.CULL_FACE);let j=z.side===Xt;_e&&(j=!j),Je(j),z.blending===es&&z.transparent===!1?U(ui):U(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),i.setMask(z.colorWrite);const se=z.stencilWrite;o.setTest(se),se&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),pt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function Je(z){J!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),J=z)}function tt(z){z!==vd?(Me(s.CULL_FACE),z!==S&&(z===qc?s.cullFace(s.BACK):z===xd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),S=z}function Ie(z){z!==R&&(ne&&s.lineWidth(z),R=z)}function pt(z,_e,j){z?(Me(s.POLYGON_OFFSET_FILL),(V!==_e||G!==j)&&(s.polygonOffset(_e,j),V=_e,G=j)):Ee(s.POLYGON_OFFSET_FILL)}function Ne(z){z?Me(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function C(z){z===void 0&&(z=s.TEXTURE0+q-1),Y!==z&&(s.activeTexture(z),Y=z)}function w(z,_e,j){j===void 0&&(Y===null?j=s.TEXTURE0+q-1:j=Y);let se=ye[j];se===void 0&&(se={type:void 0,texture:void 0},ye[j]=se),(se.type!==z||se.texture!==_e)&&(Y!==j&&(s.activeTexture(j),Y=j),s.bindTexture(z,_e||le[z]),se.type=z,se.texture=_e)}function X(){const z=ye[Y];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function te(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ze(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(z){Xe.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Xe.copy(z))}function ge(z){et.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),et.copy(z))}function Qe(z,_e){let j=l.get(_e);j===void 0&&(j=new WeakMap,l.set(_e,j));let se=j.get(z);se===void 0&&(se=s.getUniformBlockIndex(_e,z.name),j.set(z,se))}function ze(z,_e){const se=l.get(_e).get(z);a.get(_e)!==se&&(s.uniformBlockBinding(_e,se,z.__bindingPointIndex),a.set(_e,se))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},Y=null,ye={},u={},h=new WeakMap,d=[],f=null,_=!1,v=null,p=null,g=null,M=null,A=null,T=null,L=null,I=new Fe(0,0,0),P=0,B=!1,J=null,S=null,R=null,V=null,G=null,Xe.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:Me,disable:Ee,bindFramebuffer:Be,drawBuffers:De,useProgram:Ye,setBlending:U,setMaterial:Ot,setFlipSided:Je,setCullFace:tt,setLineWidth:Ie,setPolygonOffset:pt,setScissorTest:Ne,activeTexture:C,bindTexture:w,unbindTexture:X,compressedTexImage2D:te,compressedTexImage3D:re,texImage2D:Te,texImage3D:Oe,updateUBOMapping:Qe,uniformBlockBinding:ze,texStorage2D:Ze,texStorage3D:he,texSubImage2D:ee,texSubImage3D:Re,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ae,scissor:Ue,viewport:ge,reset:dt}}function Hl(s,e,t,n){const i=w0(n);switch(t){case lu:return s*e;case uu:return s*e;case du:return s*e*2;case pc:return s*e/i.components*i.byteLength;case mc:return s*e/i.components*i.byteLength;case fu:return s*e*2/i.components*i.byteLength;case gc:return s*e*2/i.components*i.byteLength;case hu:return s*e*3/i.components*i.byteLength;case rn:return s*e*4/i.components*i.byteLength;case _c:return s*e*4/i.components*i.byteLength;case Hr:case Vr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gr:case Wr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ta:case ba:return Math.max(s,16)*Math.max(e,8)/4;case Aa:case wa:return Math.max(s,8)*Math.max(e,8)/2;case Ra:case Ca:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Na:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case za:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Va:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xr:case Xa:case $a:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pu:case qa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ya:case ja:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w0(s){switch(s){case $n:case ou:return{byteLength:1,components:1};case Ks:case au:case nr:return{byteLength:2,components:1};case dc:case fc:return{byteLength:2,components:4};case Pi:case uc:case vn:return{byteLength:4,components:1};case cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function b0(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return f?new OffscreenCanvas(C,w):Qs("canvas")}function v(C,w,X){let te=1;const re=Ne(C);if((re.width>X||re.height>X)&&(te=X/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ee=Math.floor(te*re.width),Re=Math.floor(te*re.height);h===void 0&&(h=_(ee,Re));const fe=w?_(ee,Re):h;return fe.width=ee,fe.height=Re,fe.getContext("2d").drawImage(C,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Re+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Wt&&C.minFilter!==Qt}function g(C){s.generateMipmap(C)}function M(C,w,X,te,re=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=w;if(w===s.RED&&(X===s.FLOAT&&(ee=s.R32F),X===s.HALF_FLOAT&&(ee=s.R16F),X===s.UNSIGNED_BYTE&&(ee=s.R8)),w===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(ee=s.R8UI),X===s.UNSIGNED_SHORT&&(ee=s.R16UI),X===s.UNSIGNED_INT&&(ee=s.R32UI),X===s.BYTE&&(ee=s.R8I),X===s.SHORT&&(ee=s.R16I),X===s.INT&&(ee=s.R32I)),w===s.RG&&(X===s.FLOAT&&(ee=s.RG32F),X===s.HALF_FLOAT&&(ee=s.RG16F),X===s.UNSIGNED_BYTE&&(ee=s.RG8)),w===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(ee=s.RG8UI),X===s.UNSIGNED_SHORT&&(ee=s.RG16UI),X===s.UNSIGNED_INT&&(ee=s.RG32UI),X===s.BYTE&&(ee=s.RG8I),X===s.SHORT&&(ee=s.RG16I),X===s.INT&&(ee=s.RG32I)),w===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),X===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),X===s.UNSIGNED_INT&&(ee=s.RGB32UI),X===s.BYTE&&(ee=s.RGB8I),X===s.SHORT&&(ee=s.RGB16I),X===s.INT&&(ee=s.RGB32I)),w===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),X===s.UNSIGNED_INT&&(ee=s.RGBA32UI),X===s.BYTE&&(ee=s.RGBA8I),X===s.SHORT&&(ee=s.RGBA16I),X===s.INT&&(ee=s.RGBA32I)),w===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),w===s.RGBA){const Re=re?Kr:at.getTransfer(te);X===s.FLOAT&&(ee=s.RGBA32F),X===s.HALF_FLOAT&&(ee=s.RGBA16F),X===s.UNSIGNED_BYTE&&(ee=Re===_t?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function A(C,w){let X;return C?w===null||w===Pi||w===cs?X=s.DEPTH24_STENCIL8:w===vn?X=s.DEPTH32F_STENCIL8:w===Ks&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Pi||w===cs?X=s.DEPTH_COMPONENT24:w===vn?X=s.DEPTH_COMPONENT32F:w===Ks&&(X=s.DEPTH_COMPONENT16),X}function T(C,w){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wt&&C.minFilter!==Qt?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function L(C){const w=C.target;w.removeEventListener("dispose",L),P(w),w.isVideoTexture&&u.delete(w)}function I(C){const w=C.target;w.removeEventListener("dispose",I),J(w)}function P(C){const w=n.get(C);if(w.__webglInit===void 0)return;const X=C.source,te=d.get(X);if(te){const re=te[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&B(C),Object.keys(te).length===0&&d.delete(X)}n.remove(C)}function B(C){const w=n.get(C);s.deleteTexture(w.__webglTexture);const X=C.source,te=d.get(X);delete te[w.__cacheKey],o.memory.textures--}function J(C){const w=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(w.__webglFramebuffer[te]))for(let re=0;re<w.__webglFramebuffer[te].length;re++)s.deleteFramebuffer(w.__webglFramebuffer[te][re]);else s.deleteFramebuffer(w.__webglFramebuffer[te]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[te])}else{if(Array.isArray(w.__webglFramebuffer))for(let te=0;te<w.__webglFramebuffer.length;te++)s.deleteFramebuffer(w.__webglFramebuffer[te]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let te=0;te<w.__webglColorRenderbuffer.length;te++)w.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[te]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=C.textures;for(let te=0,re=X.length;te<re;te++){const ee=n.get(X[te]);ee.__webglTexture&&(s.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(X[te])}n.remove(C)}let S=0;function R(){S=0}function V(){const C=S;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),S+=1,C}function G(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function q(C,w){const X=n.get(C);if(C.isVideoTexture&&Ie(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(X,C,w);return}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+w)}function ne(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){et(X,C,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+w)}function $(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){et(X,C,w);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+w)}function ie(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Z(X,C,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+w)}const Y={[as]:s.REPEAT,[ci]:s.CLAMP_TO_EDGE,[Yr]:s.MIRRORED_REPEAT},ye={[Wt]:s.NEAREST,[ru]:s.NEAREST_MIPMAP_NEAREST,[Hs]:s.NEAREST_MIPMAP_LINEAR,[Qt]:s.LINEAR,[kr]:s.LINEAR_MIPMAP_NEAREST,[Gn]:s.LINEAR_MIPMAP_LINEAR},me={[tf]:s.NEVER,[cf]:s.ALWAYS,[nf]:s.LESS,[vu]:s.LEQUAL,[sf]:s.EQUAL,[af]:s.GEQUAL,[rf]:s.GREATER,[of]:s.NOTEQUAL};function ae(C,w){if(w.type===vn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Qt||w.magFilter===kr||w.magFilter===Hs||w.magFilter===Gn||w.minFilter===Qt||w.minFilter===kr||w.minFilter===Hs||w.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Y[w.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Y[w.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Y[w.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ye[w.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ye[w.minFilter]),w.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,me[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Wt||w.minFilter!==Hs&&w.minFilter!==Gn||w.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Xe(C,w){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",L));const te=w.source;let re=d.get(te);re===void 0&&(re={},d.set(te,re));const ee=G(w);if(ee!==C.__cacheKey){re[ee]===void 0&&(re[ee]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[ee].usedTimes++;const Re=re[C.__cacheKey];Re!==void 0&&(re[C.__cacheKey].usedTimes--,Re.usedTimes===0&&B(w)),C.__cacheKey=ee,C.__webglTexture=re[ee].texture}return X}function et(C,w,X){let te=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(te=s.TEXTURE_3D);const re=Xe(C,w),ee=w.source;t.bindTexture(te,C.__webglTexture,s.TEXTURE0+X);const Re=n.get(ee);if(ee.version!==Re.__version||re===!0){t.activeTexture(s.TEXTURE0+X);const fe=at.getPrimaries(at.workingColorSpace),Ae=w.colorSpace===ai?null:at.getPrimaries(w.colorSpace),Ze=w.colorSpace===ai||fe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let he=v(w.image,!1,i.maxTextureSize);he=pt(w,he);const Te=r.convert(w.format,w.colorSpace),Oe=r.convert(w.type);let Ue=M(w.internalFormat,Te,Oe,w.colorSpace,w.isVideoTexture);ae(te,w);let ge;const Qe=w.mipmaps,ze=w.isVideoTexture!==!0,dt=Re.__version===void 0||re===!0,z=ee.dataReady,_e=T(w,he);if(w.isDepthTexture)Ue=A(w.format===ls,w.type),dt&&(ze?t.texStorage2D(s.TEXTURE_2D,1,Ue,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,Ue,he.width,he.height,0,Te,Oe,null));else if(w.isDataTexture)if(Qe.length>0){ze&&dt&&t.texStorage2D(s.TEXTURE_2D,_e,Ue,Qe[0].width,Qe[0].height);for(let j=0,se=Qe.length;j<se;j++)ge=Qe[j],ze?z&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,ge.width,ge.height,Te,Oe,ge.data):t.texImage2D(s.TEXTURE_2D,j,Ue,ge.width,ge.height,0,Te,Oe,ge.data);w.generateMipmaps=!1}else ze?(dt&&t.texStorage2D(s.TEXTURE_2D,_e,Ue,he.width,he.height),z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he.width,he.height,Te,Oe,he.data)):t.texImage2D(s.TEXTURE_2D,0,Ue,he.width,he.height,0,Te,Oe,he.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ze&&dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ue,Qe[0].width,Qe[0].height,he.depth);for(let j=0,se=Qe.length;j<se;j++)if(ge=Qe[j],w.format!==rn)if(Te!==null)if(ze){if(z)if(w.layerUpdates.size>0){const ve=Hl(ge.width,ge.height,w.format,w.type);for(const xe of w.layerUpdates){const nt=ge.data.subarray(xe*ve/ge.data.BYTES_PER_ELEMENT,(xe+1)*ve/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,xe,ge.width,ge.height,1,Te,nt,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,he.depth,Te,ge.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,Ue,ge.width,ge.height,he.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,he.depth,Te,Oe,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,j,Ue,ge.width,ge.height,he.depth,0,Te,Oe,ge.data)}else{ze&&dt&&t.texStorage2D(s.TEXTURE_2D,_e,Ue,Qe[0].width,Qe[0].height);for(let j=0,se=Qe.length;j<se;j++)ge=Qe[j],w.format!==rn?Te!==null?ze?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,ge.width,ge.height,Te,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,j,Ue,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?z&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,ge.width,ge.height,Te,Oe,ge.data):t.texImage2D(s.TEXTURE_2D,j,Ue,ge.width,ge.height,0,Te,Oe,ge.data)}else if(w.isDataArrayTexture)if(ze){if(dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ue,he.width,he.height,he.depth),z)if(w.layerUpdates.size>0){const j=Hl(he.width,he.height,w.format,w.type);for(const se of w.layerUpdates){const ve=he.data.subarray(se*j/he.data.BYTES_PER_ELEMENT,(se+1)*j/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,se,he.width,he.height,1,Te,Oe,ve)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Te,Oe,he.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,he.width,he.height,he.depth,0,Te,Oe,he.data);else if(w.isData3DTexture)ze?(dt&&t.texStorage3D(s.TEXTURE_3D,_e,Ue,he.width,he.height,he.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Te,Oe,he.data)):t.texImage3D(s.TEXTURE_3D,0,Ue,he.width,he.height,he.depth,0,Te,Oe,he.data);else if(w.isFramebufferTexture){if(dt)if(ze)t.texStorage2D(s.TEXTURE_2D,_e,Ue,he.width,he.height);else{let j=he.width,se=he.height;for(let ve=0;ve<_e;ve++)t.texImage2D(s.TEXTURE_2D,ve,Ue,j,se,0,Te,Oe,null),j>>=1,se>>=1}}else if(Qe.length>0){if(ze&&dt){const j=Ne(Qe[0]);t.texStorage2D(s.TEXTURE_2D,_e,Ue,j.width,j.height)}for(let j=0,se=Qe.length;j<se;j++)ge=Qe[j],ze?z&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,Te,Oe,ge):t.texImage2D(s.TEXTURE_2D,j,Ue,Te,Oe,ge);w.generateMipmaps=!1}else if(ze){if(dt){const j=Ne(he);t.texStorage2D(s.TEXTURE_2D,_e,Ue,j.width,j.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,Oe,he)}else t.texImage2D(s.TEXTURE_2D,0,Ue,Te,Oe,he);p(w)&&g(te),Re.__version=ee.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Z(C,w,X){if(w.image.length!==6)return;const te=Xe(C,w),re=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+X);const ee=n.get(re);if(re.version!==ee.__version||te===!0){t.activeTexture(s.TEXTURE0+X);const Re=at.getPrimaries(at.workingColorSpace),fe=w.colorSpace===ai?null:at.getPrimaries(w.colorSpace),Ae=w.colorSpace===ai||Re===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ze=w.isCompressedTexture||w.image[0].isCompressedTexture,he=w.image[0]&&w.image[0].isDataTexture,Te=[];for(let se=0;se<6;se++)!Ze&&!he?Te[se]=v(w.image[se],!0,i.maxCubemapSize):Te[se]=he?w.image[se].image:w.image[se],Te[se]=pt(w,Te[se]);const Oe=Te[0],Ue=r.convert(w.format,w.colorSpace),ge=r.convert(w.type),Qe=M(w.internalFormat,Ue,ge,w.colorSpace),ze=w.isVideoTexture!==!0,dt=ee.__version===void 0||te===!0,z=re.dataReady;let _e=T(w,Oe);ae(s.TEXTURE_CUBE_MAP,w);let j;if(Ze){ze&&dt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,Qe,Oe.width,Oe.height);for(let se=0;se<6;se++){j=Te[se].mipmaps;for(let ve=0;ve<j.length;ve++){const xe=j[ve];w.format!==rn?Ue!==null?ze?z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve,0,0,xe.width,xe.height,Ue,xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve,Qe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve,0,0,xe.width,xe.height,Ue,ge,xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve,Qe,xe.width,xe.height,0,Ue,ge,xe.data)}}}else{if(j=w.mipmaps,ze&&dt){j.length>0&&_e++;const se=Ne(Te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,Qe,se.width,se.height)}for(let se=0;se<6;se++)if(he){ze?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Te[se].width,Te[se].height,Ue,ge,Te[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,Te[se].width,Te[se].height,0,Ue,ge,Te[se].data);for(let ve=0;ve<j.length;ve++){const nt=j[ve].image[se].image;ze?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve+1,0,0,nt.width,nt.height,Ue,ge,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve+1,Qe,nt.width,nt.height,0,Ue,ge,nt.data)}}else{ze?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ue,ge,Te[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,Ue,ge,Te[se]);for(let ve=0;ve<j.length;ve++){const xe=j[ve];ze?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve+1,0,0,Ue,ge,xe.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve+1,Qe,Ue,ge,xe.image[se])}}}p(w)&&g(s.TEXTURE_CUBE_MAP),ee.__version=re.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function le(C,w,X,te,re,ee){const Re=r.convert(X.format,X.colorSpace),fe=r.convert(X.type),Ae=M(X.internalFormat,Re,fe,X.colorSpace);if(!n.get(w).__hasExternalTextures){const he=Math.max(1,w.width>>ee),Te=Math.max(1,w.height>>ee);re===s.TEXTURE_3D||re===s.TEXTURE_2D_ARRAY?t.texImage3D(re,ee,Ae,he,Te,w.depth,0,Re,fe,null):t.texImage2D(re,ee,Ae,he,Te,0,Re,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),tt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,re,n.get(X).__webglTexture,0,Je(w)):(re===s.TEXTURE_2D||re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,re,n.get(X).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(C,w,X){if(s.bindRenderbuffer(s.RENDERBUFFER,C),w.depthBuffer){const te=w.depthTexture,re=te&&te.isDepthTexture?te.type:null,ee=A(w.stencilBuffer,re),Re=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=Je(w);tt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,ee,w.width,w.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,ee,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ee,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,C)}else{const te=w.textures;for(let re=0;re<te.length;re++){const ee=te[re],Re=r.convert(ee.format,ee.colorSpace),fe=r.convert(ee.type),Ae=M(ee.internalFormat,Re,fe,ee.colorSpace),Ze=Je(w);X&&tt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Ae,w.width,w.height):tt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,Ae,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);const te=n.get(w.depthTexture).__webglTexture,re=Je(w);if(w.depthTexture.format===ts)tt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(w.depthTexture.format===ls)tt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Be(C){const w=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const te=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),te){const re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,te.removeEventListener("dispose",re)};te.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=te}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ee(w.__webglFramebuffer,C)}else if(X){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]===void 0)w.__webglDepthbuffer[te]=s.createRenderbuffer(),Me(w.__webglDepthbuffer[te],C,!1);else{const re=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Me(w.__webglDepthbuffer,C,!1);else{const te=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(C,w,X){const te=n.get(C);w!==void 0&&le(te.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Be(C)}function Ye(C){const w=C.texture,X=n.get(C),te=n.get(w);C.addEventListener("dispose",I);const re=C.textures,ee=C.isWebGLCubeRenderTarget===!0,Re=re.length>1;if(Re||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=w.version,o.memory.textures++),ee){X.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[fe]=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)X.__webglFramebuffer[fe][Ae]=s.createFramebuffer()}else X.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)X.__webglFramebuffer[fe]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Re)for(let fe=0,Ae=re.length;fe<Ae;fe++){const Ze=n.get(re[fe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&tt(C)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const Ae=re[fe];X.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[fe]);const Ze=r.convert(Ae.format,Ae.colorSpace),he=r.convert(Ae.type),Te=M(Ae.internalFormat,Ze,he,Ae.colorSpace,C.isXRRenderTarget===!0),Oe=Je(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,Te,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,X.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Me(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),ae(s.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)le(X.__webglFramebuffer[fe][Ae],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae);else le(X.__webglFramebuffer[fe],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(w)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let fe=0,Ae=re.length;fe<Ae;fe++){const Ze=re[fe],he=n.get(Ze);t.bindTexture(s.TEXTURE_2D,he.__webglTexture),ae(s.TEXTURE_2D,Ze),le(X.__webglFramebuffer,C,Ze,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),p(Ze)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,te.__webglTexture),ae(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)le(X.__webglFramebuffer[Ae],C,w,s.COLOR_ATTACHMENT0,fe,Ae);else le(X.__webglFramebuffer,C,w,s.COLOR_ATTACHMENT0,fe,0);p(w)&&g(fe),t.unbindTexture()}C.depthBuffer&&Be(C)}function ht(C){const w=C.textures;for(let X=0,te=w.length;X<te;X++){const re=w[X];if(p(re)){const ee=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Re=n.get(re).__webglTexture;t.bindTexture(ee,Re),g(ee),t.unbindTexture()}}}const $e=[],U=[];function Ot(C){if(C.samples>0){if(tt(C)===!1){const w=C.textures,X=C.width,te=C.height;let re=s.COLOR_BUFFER_BIT;const ee=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(C),fe=w.length>1;if(fe)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);const Ze=n.get(w[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,X,te,0,0,X,te,re,s.NEAREST),l===!0&&($e.length=0,U.length=0,$e.push(s.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&C.resolveDepthBuffer===!1&&($e.push(ee),U.push(ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);const Ze=n.get(w[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Je(C){return Math.min(i.maxSamples,C.samples)}function tt(C){const w=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ie(C){const w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function pt(C,w){const X=C.colorSpace,te=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Ut&&X!==ai&&(at.getTransfer(X)===_t?(te!==rn||re!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function Ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=R,this.setTexture2D=q,this.setTexture2DArray=ne,this.setTexture3D=$,this.setTextureCube=ie,this.rebindTextures=De,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=le,this.useMultisampledRTT=tt}function R0(s,e){function t(n,i=ai){let r;const o=at.getTransfer(i);if(n===$n)return s.UNSIGNED_BYTE;if(n===dc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===fc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===cu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return s.BYTE;if(n===au)return s.SHORT;if(n===Ks)return s.UNSIGNED_SHORT;if(n===uc)return s.INT;if(n===Pi)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===nr)return s.HALF_FLOAT;if(n===lu)return s.ALPHA;if(n===hu)return s.RGB;if(n===rn)return s.RGBA;if(n===uu)return s.LUMINANCE;if(n===du)return s.LUMINANCE_ALPHA;if(n===ts)return s.DEPTH_COMPONENT;if(n===ls)return s.DEPTH_STENCIL;if(n===pc)return s.RED;if(n===mc)return s.RED_INTEGER;if(n===fu)return s.RG;if(n===gc)return s.RG_INTEGER;if(n===_c)return s.RGBA_INTEGER;if(n===Hr||n===Vr||n===Gr||n===Wr)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ta||n===wa||n===ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Ca||n===Pa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Ca)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===La||n===Da||n===Na||n===Oa||n===Ua||n===Fa||n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===La)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xr||n===Xa||n===$a)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xr)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pu||n===qa||n===Ya||n===ja)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class C0 extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yt extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P0={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const I0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L0=`
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

}`;class D0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Nt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qn({vertexShader:I0,fragmentShader:L0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N0 extends Li{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const v=new D0,p=t.getContextAttributes();let g=null,M=null;const A=[],T=[],L=new be;let I=null;const P=new Gt;P.layers.enable(1),P.viewport=new lt;const B=new Gt;B.layers.enable(2),B.viewport=new lt;const J=[P,B],S=new C0;S.layers.enable(1),S.layers.enable(2);let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=A[Z];return le===void 0&&(le=new Ho,A[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=A[Z];return le===void 0&&(le=new Ho,A[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=A[Z];return le===void 0&&(le=new Ho,A[Z]=le),le.getHandSpace()};function G(Z){const le=T.indexOf(Z.inputSource);if(le===-1)return;const Me=A[le];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||o),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<A.length;Z++){const le=T[Z];le!==null&&(T[Z]=null,A[Z].disconnect(le))}R=null,V=null,v.reset(),e.setRenderTarget(g),f=null,d=null,h=null,i=null,M=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",q),i.addEventListener("inputsourceschange",ne),p.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ii(f.framebufferWidth,f.framebufferHeight,{format:rn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,Me=null,Ee=null;p.depth&&(Ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?ls:ts,Me=p.stencil?cs:Pi);const Be={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Ii(d.textureWidth,d.textureHeight,{format:rn,type:$n,depthTexture:new Pu(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ne(Z){for(let le=0;le<Z.removed.length;le++){const Me=Z.removed[le],Ee=T.indexOf(Me);Ee>=0&&(T[Ee]=null,A[Ee].disconnect(Me))}for(let le=0;le<Z.added.length;le++){const Me=Z.added[le];let Ee=T.indexOf(Me);if(Ee===-1){for(let De=0;De<A.length;De++)if(De>=T.length){T.push(Me),Ee=De;break}else if(T[De]===null){T[De]=Me,Ee=De;break}if(Ee===-1)break}const Be=A[Ee];Be&&Be.connect(Me)}}const $=new D,ie=new D;function Y(Z,le,Me){$.setFromMatrixPosition(le.matrixWorld),ie.setFromMatrixPosition(Me.matrixWorld);const Ee=$.distanceTo(ie),Be=le.projectionMatrix.elements,De=Me.projectionMatrix.elements,Ye=Be[14]/(Be[10]-1),ht=Be[14]/(Be[10]+1),$e=(Be[9]+1)/Be[5],U=(Be[9]-1)/Be[5],Ot=(Be[8]-1)/Be[0],Je=(De[8]+1)/De[0],tt=Ye*Ot,Ie=Ye*Je,pt=Ee/(-Ot+Je),Ne=pt*-Ot;if(le.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ne),Z.translateZ(pt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Be[10]===-1)Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const C=Ye+pt,w=ht+pt,X=tt-Ne,te=Ie+(Ee-Ne),re=$e*ht/w*C,ee=U*ht/w*C;Z.projectionMatrix.makePerspective(X,te,re,ee,C,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ye(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let le=Z.near,Me=Z.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),S.near=B.near=P.near=le,S.far=B.far=P.far=Me,(R!==S.near||V!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,V=S.far);const Ee=Z.parent,Be=S.cameras;ye(S,Ee);for(let De=0;De<Be.length;De++)ye(Be[De],Ee);Be.length===2?Y(S,P,B):S.projectionMatrix.copy(P.projectionMatrix),me(Z,S,Ee)};function me(Z,le,Me){Me===null?Z.matrix.copy(le.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(le.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=hs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ae=null;function Xe(Z,le){if(u=le.getViewerPose(c||o),_=le,u!==null){const Me=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ee=!1;Me.length!==S.cameras.length&&(S.cameras.length=0,Ee=!0);for(let De=0;De<Me.length;De++){const Ye=Me[De];let ht=null;if(f!==null)ht=f.getViewport(Ye);else{const U=h.getViewSubImage(d,Ye);ht=U.viewport,De===0&&(e.setRenderTargetTextures(M,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(M))}let $e=J[De];$e===void 0&&($e=new Gt,$e.layers.enable(De),$e.viewport=new lt,J[De]=$e),$e.matrix.fromArray(Ye.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Ye.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ht.x,ht.y,ht.width,ht.height),De===0&&(S.matrix.copy($e.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ee===!0&&S.cameras.push($e)}const Be=i.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const De=h.getDepthInformation(Me[0]);De&&De.isValid&&De.texture&&v.init(e,De,i.renderState)}}for(let Me=0;Me<A.length;Me++){const Ee=T[Me],Be=A[Me];Ee!==null&&Be!==void 0&&Be.update(Ee,le,c||o)}ae&&ae(Z,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),_=null}const et=new Cu;et.setAnimationLoop(Xe),this.setAnimationLoop=function(Z){ae=Z},this.dispose=function(){}}}const vi=new wn,O0=new He;function U0(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,wu(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,M,A,T){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,T)):g.isMeshMatcapMaterial?(r(p,g),_(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,A):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Xt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Xt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const M=e.get(g),A=M.envMap,T=M.envMapRotation;A&&(p.envMap.value=A,vi.copy(T),vi.x*=-1,vi.y*=-1,vi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),p.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(vi)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,A){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=A*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const M=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function F0(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const T=A.program;n.uniformBlockBinding(M,T)}function c(M,A){let T=i[M.id];T===void 0&&(_(M),T=u(M),i[M.id]=T,M.addEventListener("dispose",p));const L=A.program;n.updateUBOMapping(M,L);const I=e.render.frame;r[M.id]!==I&&(d(M),r[M.id]=I)}function u(M){const A=h();M.__bindingPointIndex=A;const T=s.createBuffer(),L=M.__size,I=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,L,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,T),T}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const A=i[M.id],T=M.uniforms,L=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let I=0,P=T.length;I<P;I++){const B=Array.isArray(T[I])?T[I]:[T[I]];for(let J=0,S=B.length;J<S;J++){const R=B[J];if(f(R,I,J,L)===!0){const V=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let ne=0;ne<G.length;ne++){const $=G[ne],ie=v($);typeof $=="number"||typeof $=="boolean"?(R.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,V+q,R.__data)):$.isMatrix3?(R.__data[0]=$.elements[0],R.__data[1]=$.elements[1],R.__data[2]=$.elements[2],R.__data[3]=0,R.__data[4]=$.elements[3],R.__data[5]=$.elements[4],R.__data[6]=$.elements[5],R.__data[7]=0,R.__data[8]=$.elements[6],R.__data[9]=$.elements[7],R.__data[10]=$.elements[8],R.__data[11]=0):($.toArray(R.__data,q),q+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,A,T,L){const I=M.value,P=A+"_"+T;if(L[P]===void 0)return typeof I=="number"||typeof I=="boolean"?L[P]=I:L[P]=I.clone(),!0;{const B=L[P];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return L[P]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function _(M){const A=M.uniforms;let T=0;const L=16;for(let P=0,B=A.length;P<B;P++){const J=Array.isArray(A[P])?A[P]:[A[P]];for(let S=0,R=J.length;S<R;S++){const V=J[S],G=Array.isArray(V.value)?V.value:[V.value];for(let q=0,ne=G.length;q<ne;q++){const $=G[q],ie=v($),Y=T%L,ye=Y%ie.boundary,me=Y+ye;T+=ye,me!==0&&L-me<ie.storage&&(T+=L-me),V.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=ie.storage}}}const I=T%L;return I>0&&(T+=L-I),M.__size=T,M.__cache={},this}function v(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),A}function p(M){const A=M.target;A.removeEventListener("dispose",p);const T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function g(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}class B0{constructor(e={}){const{canvas:t=Tf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const g=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=di,this.toneMappingExposure=1;const A=this;let T=!1,L=0,I=0,P=null,B=-1,J=null;const S=new lt,R=new lt;let V=null;const G=new Fe(0);let q=0,ne=t.width,$=t.height,ie=1,Y=null,ye=null;const me=new lt(0,0,ne,$),ae=new lt(0,0,ne,$);let Xe=!1;const et=new Sc;let Z=!1,le=!1;const Me=new He,Ee=new He,Be=new D,De=new lt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function $e(){return P===null?ie:1}let U=n;function Ot(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hc}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",xe,!1),U===null){const O="webgl2";if(U=Ot(O,E),U===null)throw Ot(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Je,tt,Ie,pt,Ne,C,w,X,te,re,ee,Re,fe,Ae,Ze,he,Te,Oe,Ue,ge,Qe,ze,dt,z;function _e(){Je=new Gg(U),Je.init(),ze=new R0(U,Je),tt=new Fg(U,Je,e,ze),Ie=new T0(U),tt.reverseDepthBuffer&&Ie.buffers.depth.setReversed(!0),pt=new $g(U),Ne=new h0,C=new b0(U,Je,Ie,Ne,tt,ze,pt),w=new zg(A),X=new Vg(A),te=new Qf(U),dt=new Og(U,te),re=new Wg(U,te,pt,dt),ee=new Yg(U,re,te,pt),Ue=new qg(U,tt,C),he=new Bg(Ne),Re=new l0(A,w,X,Je,tt,dt,he),fe=new U0(A,Ne),Ae=new d0,Ze=new v0(Je),Oe=new Ng(A,w,X,Ie,ee,d,l),Te=new E0(A,ee,tt),z=new F0(U,pt,tt,Ie),ge=new Ug(U,Je,pt),Qe=new Xg(U,Je,pt),pt.programs=Re.programs,A.capabilities=tt,A.extensions=Je,A.properties=Ne,A.renderLists=Ae,A.shadowMap=Te,A.state=Ie,A.info=pt}_e();const j=new N0(A,U);this.xr=j,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(ne,$,!1))},this.getSize=function(E){return E.set(ne,$)},this.setSize=function(E,O,F=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=E,$=O,t.width=Math.floor(E*ie),t.height=Math.floor(O*ie),F===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(ne*ie,$*ie).floor()},this.setDrawingBufferSize=function(E,O,F){ne=E,$=O,ie=F,t.width=Math.floor(E*F),t.height=Math.floor(O*F),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(me)},this.setViewport=function(E,O,F,H){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,O,F,H),Ie.viewport(S.copy(me).multiplyScalar(ie).round())},this.getScissor=function(E){return E.copy(ae)},this.setScissor=function(E,O,F,H){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,O,F,H),Ie.scissor(R.copy(ae).multiplyScalar(ie).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(E){Ie.setScissorTest(Xe=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){ye=E},this.getClearColor=function(E){return E.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(E=!0,O=!0,F=!0){let H=0;if(E){let N=!1;if(P!==null){const K=P.texture.format;N=K===_c||K===gc||K===mc}if(N){const K=P.texture.type,W=K===$n||K===Pi||K===Ks||K===cs||K===dc||K===fc,oe=Oe.getClearColor(),pe=Oe.getClearAlpha(),Se=oe.r,ue=oe.g,ce=oe.b;W?(f[0]=Se,f[1]=ue,f[2]=ce,f[3]=pe,U.clearBufferuiv(U.COLOR,0,f)):(_[0]=Se,_[1]=ue,_[2]=ce,_[3]=pe,U.clearBufferiv(U.COLOR,0,_))}else H|=U.COLOR_BUFFER_BIT}O&&(H|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ae.dispose(),Ze.dispose(),Ne.dispose(),w.dispose(),X.dispose(),ee.dispose(),dt.dispose(),z.dispose(),Re.dispose(),j.dispose(),j.removeEventListener("sessionstart",Sn),j.removeEventListener("sessionend",Ni),an.stop()};function se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=pt.autoReset,O=Te.enabled,F=Te.autoUpdate,H=Te.needsUpdate,N=Te.type;_e(),pt.autoReset=E,Te.enabled=O,Te.autoUpdate=F,Te.needsUpdate=H,Te.type=N}function xe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function nt(E){const O=E.target;O.removeEventListener("dispose",nt),xt(O)}function xt(E){Ft(E),Ne.remove(E)}function Ft(E){const O=Ne.get(E).programs;O!==void 0&&(O.forEach(function(F){Re.releaseProgram(F)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,F,H,N,K){O===null&&(O=Ye);const W=N.isMesh&&N.matrixWorld.determinant()<0,oe=we(E,O,F,H,N);Ie.setMaterial(H,W);let pe=F.index,Se=1;if(H.wireframe===!0){if(pe=re.getWireframeAttribute(F),pe===void 0)return;Se=2}const ue=F.drawRange,ce=F.attributes.position;let qe=ue.start*Se,it=(ue.start+ue.count)*Se;K!==null&&(qe=Math.max(qe,K.start*Se),it=Math.min(it,(K.start+K.count)*Se)),pe!==null?(qe=Math.max(qe,0),it=Math.min(it,pe.count)):ce!=null&&(qe=Math.max(qe,0),it=Math.min(it,ce.count));const st=it-qe;if(st<0||st===1/0)return;dt.setup(N,H,oe,F,pe);let ct,Le=ge;if(pe!==null&&(ct=te.get(pe),Le=Qe,Le.setIndex(ct)),N.isMesh)H.wireframe===!0?(Ie.setLineWidth(H.wireframeLinewidth*$e()),Le.setMode(U.LINES)):Le.setMode(U.TRIANGLES);else if(N.isLine){let Ce=H.linewidth;Ce===void 0&&(Ce=1),Ie.setLineWidth(Ce*$e()),N.isLineSegments?Le.setMode(U.LINES):N.isLineLoop?Le.setMode(U.LINE_LOOP):Le.setMode(U.LINE_STRIP)}else N.isPoints?Le.setMode(U.POINTS):N.isSprite&&Le.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Le.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))Le.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ce=N._multiDrawStarts,gt=N._multiDrawCounts,rt=N._multiDrawCount,At=pe?te.get(pe).bytesPerElement:1,cn=Ne.get(H).currentProgram.getUniforms();for(let Kt=0;Kt<rt;Kt++)cn.setValue(U,"_gl_DrawID",Kt),Le.render(Ce[Kt]/At,gt[Kt])}else if(N.isInstancedMesh)Le.renderInstances(qe,st,N.count);else if(F.isInstancedBufferGeometry){const Ce=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,gt=Math.min(F.instanceCount,Ce);Le.renderInstances(qe,st,gt)}else Le.render(qe,st)};function ot(E,O,F){E.transparent===!0&&E.side===sn&&E.forceSinglePass===!1?(E.side=Xt,E.needsUpdate=!0,k(E,O,F),E.side=Xn,E.needsUpdate=!0,k(E,O,F),E.side=sn):k(E,O,F)}this.compile=function(E,O,F=null){F===null&&(F=E),p=Ze.get(F),p.init(O),M.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==F&&E.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const K=N.material;if(K)if(Array.isArray(K))for(let W=0;W<K.length;W++){const oe=K[W];ot(oe,F,N),H.add(oe)}else ot(K,F,N),H.add(K)}),M.pop(),p=null,H},this.compileAsync=function(E,O,F=null){const H=this.compile(E,O,F);return new Promise(N=>{function K(){if(H.forEach(function(W){Ne.get(W).currentProgram.isReady()&&H.delete(W)}),H.size===0){N(E);return}setTimeout(K,10)}Je.get("KHR_parallel_shader_compile")!==null?K():setTimeout(K,10)})};let mt=null;function on(E){mt&&mt(E)}function Sn(){an.stop()}function Ni(){an.start()}const an=new Cu;an.setAnimationLoop(on),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(E){mt=E,j.setAnimationLoop(E),E===null?an.stop():an.start()},j.addEventListener("sessionstart",Sn),j.addEventListener("sessionend",Ni),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(O),O=j.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,O,P),p=Ze.get(E,M.length),p.init(O),M.push(p),Ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),et.setFromProjectionMatrix(Ee),le=this.localClippingEnabled,Z=he.init(this.clippingPlanes,le),v=Ae.get(E,g.length),v.init(),g.push(v),j.enabled===!0&&j.isPresenting===!0){const K=A.xr.getDepthSensingMesh();K!==null&&Ss(K,O,-1/0,A.sortObjects)}Ss(E,O,0,A.sortObjects),v.finish(),A.sortObjects===!0&&v.sort(Y,ye),ht=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ht&&Oe.addToRenderList(v,E),this.info.render.frame++,Z===!0&&he.beginShadows();const F=p.state.shadowsArray;Te.render(F,E,O),Z===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=v.opaque,N=v.transmissive;if(p.setupLights(),O.isArrayCamera){const K=O.cameras;if(N.length>0)for(let W=0,oe=K.length;W<oe;W++){const pe=K[W];m(H,N,E,pe)}ht&&Oe.render(E);for(let W=0,oe=K.length;W<oe;W++){const pe=K[W];x(v,E,pe,pe.viewport)}}else N.length>0&&m(H,N,E,O),ht&&Oe.render(E),x(v,E,O);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(A,E,O),dt.resetDefaultState(),B=-1,J=null,M.pop(),M.length>0?(p=M[M.length-1],Z===!0&&he.setGlobalState(A.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function Ss(E,O,F,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||et.intersectsSprite(E)){H&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ee);const W=ee.update(E),oe=E.material;oe.visible&&v.push(E,W,oe,F,De.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||et.intersectsObject(E))){const W=ee.update(E),oe=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),De.copy(W.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(Ee)),Array.isArray(oe)){const pe=W.groups;for(let Se=0,ue=pe.length;Se<ue;Se++){const ce=pe[Se],qe=oe[ce.materialIndex];qe&&qe.visible&&v.push(E,W,qe,F,De.z,ce)}}else oe.visible&&v.push(E,W,oe,F,De.z,null)}}const K=E.children;for(let W=0,oe=K.length;W<oe;W++)Ss(K[W],O,F,H)}function x(E,O,F,H){const N=E.opaque,K=E.transmissive,W=E.transparent;p.setupLightsView(F),Z===!0&&he.setGlobalState(A.clippingPlanes,F),H&&Ie.viewport(S.copy(H)),N.length>0&&y(N,O,F),K.length>0&&y(K,O,F),W.length>0&&y(W,O,F),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function m(E,O,F,H){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Ii(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?nr:$n,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const K=p.state.transmissionRenderTarget[H.id],W=H.viewport||S;K.setSize(W.z,W.w);const oe=A.getRenderTarget();A.setRenderTarget(K),A.getClearColor(G),q=A.getClearAlpha(),q<1&&A.setClearColor(16777215,.5),A.clear(),ht&&Oe.render(F);const pe=A.toneMapping;A.toneMapping=di;const Se=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Z===!0&&he.setGlobalState(A.clippingPlanes,H),y(E,F,H),C.updateMultisampleRenderTarget(K),C.updateRenderTargetMipmap(K),Je.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let ce=0,qe=O.length;ce<qe;ce++){const it=O[ce],st=it.object,ct=it.geometry,Le=it.material,Ce=it.group;if(Le.side===sn&&st.layers.test(H.layers)){const gt=Le.side;Le.side=Xt,Le.needsUpdate=!0,b(st,F,H,ct,Le,Ce),Le.side=gt,Le.needsUpdate=!0,ue=!0}}ue===!0&&(C.updateMultisampleRenderTarget(K),C.updateRenderTargetMipmap(K))}A.setRenderTarget(oe),A.setClearColor(G,q),Se!==void 0&&(H.viewport=Se),A.toneMapping=pe}function y(E,O,F){const H=O.isScene===!0?O.overrideMaterial:null;for(let N=0,K=E.length;N<K;N++){const W=E[N],oe=W.object,pe=W.geometry,Se=H===null?W.material:H,ue=W.group;oe.layers.test(F.layers)&&b(oe,O,F,pe,Se,ue)}}function b(E,O,F,H,N,K){E.onBeforeRender(A,O,F,H,N,K),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(A,O,F,H,E,K),N.transparent===!0&&N.side===sn&&N.forceSinglePass===!1?(N.side=Xt,N.needsUpdate=!0,A.renderBufferDirect(F,O,H,N,E,K),N.side=Xn,N.needsUpdate=!0,A.renderBufferDirect(F,O,H,N,E,K),N.side=sn):A.renderBufferDirect(F,O,H,N,E,K),E.onAfterRender(A,O,F,H,N,K)}function k(E,O,F){O.isScene!==!0&&(O=Ye);const H=Ne.get(E),N=p.state.lights,K=p.state.shadowsArray,W=N.state.version,oe=Re.getParameters(E,N.state,K,O,F),pe=Re.getProgramCacheKey(oe);let Se=H.programs;H.environment=E.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(E.isMeshStandardMaterial?X:w).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Se===void 0&&(E.addEventListener("dispose",nt),Se=new Map,H.programs=Se);let ue=Se.get(pe);if(ue!==void 0){if(H.currentProgram===ue&&H.lightsStateVersion===W)return Pe(E,oe),ue}else oe.uniforms=Re.getUniforms(E),E.onBeforeCompile(oe,A),ue=Re.acquireProgram(oe,pe),Se.set(pe,ue),H.uniforms=oe.uniforms;const ce=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ce.clippingPlanes=he.uniform),Pe(E,oe),H.needsLights=We(E),H.lightsStateVersion=W,H.needsLights&&(ce.ambientLightColor.value=N.state.ambient,ce.lightProbe.value=N.state.probe,ce.directionalLights.value=N.state.directional,ce.directionalLightShadows.value=N.state.directionalShadow,ce.spotLights.value=N.state.spot,ce.spotLightShadows.value=N.state.spotShadow,ce.rectAreaLights.value=N.state.rectArea,ce.ltc_1.value=N.state.rectAreaLTC1,ce.ltc_2.value=N.state.rectAreaLTC2,ce.pointLights.value=N.state.point,ce.pointLightShadows.value=N.state.pointShadow,ce.hemisphereLights.value=N.state.hemi,ce.directionalShadowMap.value=N.state.directionalShadowMap,ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ce.spotShadowMap.value=N.state.spotShadowMap,ce.spotLightMatrix.value=N.state.spotLightMatrix,ce.spotLightMap.value=N.state.spotLightMap,ce.pointShadowMap.value=N.state.pointShadowMap,ce.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=ue,H.uniformsList=null,ue}function Q(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=qr.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Pe(E,O){const F=Ne.get(E);F.outputColorSpace=O.outputColorSpace,F.batching=O.batching,F.batchingColor=O.batchingColor,F.instancing=O.instancing,F.instancingColor=O.instancingColor,F.instancingMorph=O.instancingMorph,F.skinning=O.skinning,F.morphTargets=O.morphTargets,F.morphNormals=O.morphNormals,F.morphColors=O.morphColors,F.morphTargetsCount=O.morphTargetsCount,F.numClippingPlanes=O.numClippingPlanes,F.numIntersection=O.numClipIntersection,F.vertexAlphas=O.vertexAlphas,F.vertexTangents=O.vertexTangents,F.toneMapping=O.toneMapping}function we(E,O,F,H,N){O.isScene!==!0&&(O=Ye),C.resetTextureUnits();const K=O.fog,W=H.isMeshStandardMaterial?O.environment:null,oe=P===null?A.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ut,pe=(H.isMeshStandardMaterial?X:w).get(H.envMap||W),Se=H.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,ue=!!F.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ce=!!F.morphAttributes.position,qe=!!F.morphAttributes.normal,it=!!F.morphAttributes.color;let st=di;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(st=A.toneMapping);const ct=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Le=ct!==void 0?ct.length:0,Ce=Ne.get(H),gt=p.state.lights;if(Z===!0&&(le===!0||E!==J)){const en=E===J&&H.id===B;he.setState(H,E,en)}let rt=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==gt.state.version||Ce.outputColorSpace!==oe||N.isBatchedMesh&&Ce.batching===!1||!N.isBatchedMesh&&Ce.batching===!0||N.isBatchedMesh&&Ce.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ce.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ce.instancing===!1||!N.isInstancedMesh&&Ce.instancing===!0||N.isSkinnedMesh&&Ce.skinning===!1||!N.isSkinnedMesh&&Ce.skinning===!0||N.isInstancedMesh&&Ce.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ce.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ce.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ce.instancingMorph===!1&&N.morphTexture!==null||Ce.envMap!==pe||H.fog===!0&&Ce.fog!==K||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==he.numPlanes||Ce.numIntersection!==he.numIntersection)||Ce.vertexAlphas!==Se||Ce.vertexTangents!==ue||Ce.morphTargets!==ce||Ce.morphNormals!==qe||Ce.morphColors!==it||Ce.toneMapping!==st||Ce.morphTargetsCount!==Le)&&(rt=!0):(rt=!0,Ce.__version=H.version);let At=Ce.currentProgram;rt===!0&&(At=k(H,O,N));let cn=!1,Kt=!1,lo=!1;const Mt=At.getUniforms(),jn=Ce.uniforms;if(Ie.useProgram(At.program)&&(cn=!0,Kt=!0,lo=!0),H.id!==B&&(B=H.id,Kt=!0),cn||J!==E){tt.reverseDepthBuffer?(Me.copy(E.projectionMatrix),bf(Me),Rf(Me),Mt.setValue(U,"projectionMatrix",Me)):Mt.setValue(U,"projectionMatrix",E.projectionMatrix),Mt.setValue(U,"viewMatrix",E.matrixWorldInverse);const en=Mt.map.cameraPosition;en!==void 0&&en.setValue(U,Be.setFromMatrixPosition(E.matrixWorld)),tt.logarithmicDepthBuffer&&Mt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Mt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),J!==E&&(J=E,Kt=!0,lo=!0)}if(N.isSkinnedMesh){Mt.setOptional(U,N,"bindMatrix"),Mt.setOptional(U,N,"bindMatrixInverse");const en=N.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Mt.setValue(U,"boneTexture",en.boneTexture,C))}N.isBatchedMesh&&(Mt.setOptional(U,N,"batchingTexture"),Mt.setValue(U,"batchingTexture",N._matricesTexture,C),Mt.setOptional(U,N,"batchingIdTexture"),Mt.setValue(U,"batchingIdTexture",N._indirectTexture,C),Mt.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&Mt.setValue(U,"batchingColorTexture",N._colorsTexture,C));const ho=F.morphAttributes;if((ho.position!==void 0||ho.normal!==void 0||ho.color!==void 0)&&Ue.update(N,F,At),(Kt||Ce.receiveShadow!==N.receiveShadow)&&(Ce.receiveShadow=N.receiveShadow,Mt.setValue(U,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(jn.envMap.value=pe,jn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(jn.envMapIntensity.value=O.environmentIntensity),Kt&&(Mt.setValue(U,"toneMappingExposure",A.toneMappingExposure),Ce.needsLights&&je(jn,lo),K&&H.fog===!0&&fe.refreshFogUniforms(jn,K),fe.refreshMaterialUniforms(jn,H,ie,$,p.state.transmissionRenderTarget[E.id]),qr.upload(U,Q(Ce),jn,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(qr.upload(U,Q(Ce),jn,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Mt.setValue(U,"center",N.center),Mt.setValue(U,"modelViewMatrix",N.modelViewMatrix),Mt.setValue(U,"normalMatrix",N.normalMatrix),Mt.setValue(U,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const en=H.uniformsGroups;for(let uo=0,md=en.length;uo<md;uo++){const Wc=en[uo];z.update(Wc,At),z.bind(Wc,At)}}return At}function je(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function We(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,O,F){Ne.get(E.texture).__webglTexture=O,Ne.get(E.depthTexture).__webglTexture=F;const H=Ne.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=F===void 0,H.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const F=Ne.get(E);F.__webglFramebuffer=O,F.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,F=0){P=E,L=O,I=F;let H=!0,N=null,K=!1,W=!1;if(E){const pe=Ne.get(E);if(pe.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(pe.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(pe.__hasExternalTextures)C.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ce=E.depthTexture;if(pe.__boundDepthTexture!==ce){if(ce!==null&&Ne.has(ce)&&(E.width!==ce.image.width||E.height!==ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Se=E.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(W=!0);const ue=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ue[O])?N=ue[O][F]:N=ue[O],K=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?N=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(ue)?N=ue[F]:N=ue,S.copy(E.viewport),R.copy(E.scissor),V=E.scissorTest}else S.copy(me).multiplyScalar(ie).floor(),R.copy(ae).multiplyScalar(ie).floor(),V=Xe;if(Ie.bindFramebuffer(U.FRAMEBUFFER,N)&&H&&Ie.drawBuffers(E,N),Ie.viewport(S),Ie.scissor(R),Ie.setScissorTest(V),K){const pe=Ne.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,pe.__webglTexture,F)}else if(W){const pe=Ne.get(E.texture),Se=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,pe.__webglTexture,F||0,Se)}B=-1},this.readRenderTargetPixels=function(E,O,F,H,N,K,W){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&W!==void 0&&(oe=oe[W]),oe){Ie.bindFramebuffer(U.FRAMEBUFFER,oe);try{const pe=E.texture,Se=pe.format,ue=pe.type;if(!tt.textureFormatReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&F>=0&&F<=E.height-N&&U.readPixels(O,F,H,N,ze.convert(Se),ze.convert(ue),K)}finally{const pe=P!==null?Ne.get(P).__webglFramebuffer:null;Ie.bindFramebuffer(U.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(E,O,F,H,N,K,W){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let oe=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&W!==void 0&&(oe=oe[W]),oe){const pe=E.texture,Se=pe.format,ue=pe.type;if(!tt.textureFormatReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-H&&F>=0&&F<=E.height-N){Ie.bindFramebuffer(U.FRAMEBUFFER,oe);const ce=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.bufferData(U.PIXEL_PACK_BUFFER,K.byteLength,U.STREAM_READ),U.readPixels(O,F,H,N,ze.convert(Se),ze.convert(ue),0);const qe=P!==null?Ne.get(P).__webglFramebuffer:null;Ie.bindFramebuffer(U.FRAMEBUFFER,qe);const it=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await wf(U,it,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,K),U.deleteBuffer(ce),U.deleteSync(it),K}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,F=0){E.isTexture!==!0&&($r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-F),N=Math.floor(E.image.width*H),K=Math.floor(E.image.height*H),W=O!==null?O.x:0,oe=O!==null?O.y:0;C.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,W,oe,N,K),Ie.unbindTexture()},this.copyTextureToTexture=function(E,O,F=null,H=null,N=0){E.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],O=arguments[2],N=arguments[3]||0,F=null);let K,W,oe,pe,Se,ue;F!==null?(K=F.max.x-F.min.x,W=F.max.y-F.min.y,oe=F.min.x,pe=F.min.y):(K=E.image.width,W=E.image.height,oe=0,pe=0),H!==null?(Se=H.x,ue=H.y):(Se=0,ue=0);const ce=ze.convert(O.format),qe=ze.convert(O.type);C.setTexture2D(O,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const it=U.getParameter(U.UNPACK_ROW_LENGTH),st=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ct=U.getParameter(U.UNPACK_SKIP_PIXELS),Le=U.getParameter(U.UNPACK_SKIP_ROWS),Ce=U.getParameter(U.UNPACK_SKIP_IMAGES),gt=E.isCompressedTexture?E.mipmaps[N]:E.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,oe),U.pixelStorei(U.UNPACK_SKIP_ROWS,pe),E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,Se,ue,K,W,ce,qe,gt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,Se,ue,gt.width,gt.height,ce,gt.data):U.texSubImage2D(U.TEXTURE_2D,N,Se,ue,K,W,ce,qe,gt),U.pixelStorei(U.UNPACK_ROW_LENGTH,it),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ct),U.pixelStorei(U.UNPACK_SKIP_ROWS,Le),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ce),N===0&&O.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(E,O,F=null,H=null,N=0){E.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,H=arguments[1]||null,E=arguments[2],O=arguments[3],N=arguments[4]||0);let K,W,oe,pe,Se,ue,ce,qe,it;const st=E.isCompressedTexture?E.mipmaps[N]:E.image;F!==null?(K=F.max.x-F.min.x,W=F.max.y-F.min.y,oe=F.max.z-F.min.z,pe=F.min.x,Se=F.min.y,ue=F.min.z):(K=st.width,W=st.height,oe=st.depth,pe=0,Se=0,ue=0),H!==null?(ce=H.x,qe=H.y,it=H.z):(ce=0,qe=0,it=0);const ct=ze.convert(O.format),Le=ze.convert(O.type);let Ce;if(O.isData3DTexture)C.setTexture3D(O,0),Ce=U.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)C.setTexture2DArray(O,0),Ce=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const gt=U.getParameter(U.UNPACK_ROW_LENGTH),rt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),At=U.getParameter(U.UNPACK_SKIP_PIXELS),cn=U.getParameter(U.UNPACK_SKIP_ROWS),Kt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,st.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Se),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ue),E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ce,N,ce,qe,it,K,W,oe,ct,Le,st.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,N,ce,qe,it,K,W,oe,ct,st.data):U.texSubImage3D(Ce,N,ce,qe,it,K,W,oe,ct,Le,st),U.pixelStorei(U.UNPACK_ROW_LENGTH,gt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,At),U.pixelStorei(U.UNPACK_SKIP_ROWS,cn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Kt),N===0&&O.generateMipmaps&&U.generateMipmap(Ce),Ie.unbindTexture()},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Ie.unbindTexture()},this.resetState=function(){L=0,I=0,P=null,Ie.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===xc?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===ro?"display-p3":"srgb"}}class z0 extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class k0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Za,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new D;class Ac{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ac(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vl=new D,Gl=new lt,Wl=new lt,H0=new D,Xl=new He,wr=new D,Vo=new bn,$l=new He,Go=new oo;class V0 extends yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jc,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wr),this.boundingBox.expandByPoint(wr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wr),this.boundingSphere.expandByPoint(wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(i),e.ray.intersectsSphere(Vo)!==!1&&($l.copy(i).invert(),Go.copy(e.ray).applyMatrix4($l),!(this.boundingBox!==null&&Go.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Go)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Yd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Gl.fromBufferAttribute(i.attributes.skinIndex,e),Wl.fromBufferAttribute(i.attributes.skinWeight,e),Vl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Wl.getComponent(r);if(o!==0){const a=Gl.getComponent(r);Xl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(H0.copy(Vl).applyMatrix4(Xl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ou extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Uu extends Nt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Wt,u=Wt,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ql=new He,G0=new He;class Tc{constructor(e=[],t=[]){this.uuid=xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:G0;ql.multiplyMatrices(a,t[r]),ql.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Tc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Uu(t,e,e,rn,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ou),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ec extends $t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ji=new He,Yl=new He,br=[],jl=new Yn,W0=new He,bs=new yt,Rs=new bn;class X0 extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ec(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,W0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),jl.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(jl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Rs.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),e.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ji),Yl.multiplyMatrices(n,ji),bs.matrixWorld=Yl,bs.raycast(e,br);for(let o=0,a=br.length;o<a;o++){const l=br[o];l.instanceId=r,l.object=this,t.push(l)}br.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uu(new Float32Array(i*this.count),i,this.count,pc,vn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class er extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const to=new D,no=new D,Kl=new He,Cs=new oo,Rr=new bn,Wo=new D,Jl=new D;class wc extends vt{constructor(e=new qt,t=new er){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)to.fromBufferAttribute(t,i-1),no.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=to.distanceTo(no);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=r,e.ray.intersectsSphere(Rr)===!1)return;Kl.copy(i).invert(),Cs.copy(e.ray).applyMatrix4(Kl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=f,p=_-1;v<p;v+=c){const g=u.getX(v),M=u.getX(v+1),A=Cr(this,e,Cs,l,g,M);A&&t.push(A)}if(this.isLineLoop){const v=u.getX(_-1),p=u.getX(f),g=Cr(this,e,Cs,l,v,p);g&&t.push(g)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=f,p=_-1;v<p;v+=c){const g=Cr(this,e,Cs,l,v,v+1);g&&t.push(g)}if(this.isLineLoop){const v=Cr(this,e,Cs,l,_-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(to.fromBufferAttribute(o,i),no.fromBufferAttribute(o,r),t.distanceSqToSegment(to,no,Wo,Jl)>n)return;Wo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Wo);if(!(l<e.near||l>e.far))return{distance:l,point:Jl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Zl=new D,Ql=new D;class ds extends wc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Zl.fromBufferAttribute(t,i),Ql.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zl.distanceTo(Ql);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $0 extends wc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fu extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const eh=new He,tc=new oo,Pr=new bn,Ir=new D;class q0 extends vt{constructor(e=new qt,t=new Fu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Pr.radius+=r,e.ray.intersectsSphere(Pr)===!1)return;eh.copy(i).invert(),tc.copy(e.ray).applyMatrix4(eh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,v=f;_<v;_++){const p=c.getX(_);Ir.fromBufferAttribute(h,p),th(Ir,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=d,v=f;_<v;_++)Ir.fromBufferAttribute(h,_),th(Ir,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function th(s,e,t,n,i,r,o){const a=tc.distanceSqToPoint(s);if(a<t){const l=new D;tc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new be:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],r=[],o=[],a=new D,l=new He;for(let f=0;f<=e;f++){const _=f/e;i[f]=this.getTangentAt(_,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ct(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ct(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bc extends Rn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new be){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Y0 extends bc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Lr=new D,Xo=new Rc,$o=new Rc,qo=new Rc;class j0 extends Rn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Lr.subVectors(i[0],i[1]).add(i[0]),c=Lr);const h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Lr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Lr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),_<1e-4&&(_=v),p<1e-4&&(p=v),Xo.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,v,p),$o.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,v,p),qo.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,v,p)}else this.curveType==="catmullrom"&&(Xo.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),$o.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),qo.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Xo.calc(l),$o.calc(l),qo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function K0(s,e){const t=1-s;return t*t*e}function J0(s,e){return 2*(1-s)*s*e}function Z0(s,e){return s*s*e}function $s(s,e,t,n){return K0(s,e)+J0(s,t)+Z0(s,n)}function Q0(s,e){const t=1-s;return t*t*t*e}function ev(s,e){const t=1-s;return 3*t*t*s*e}function tv(s,e){return 3*(1-s)*s*s*e}function nv(s,e){return s*s*s*e}function qs(s,e,t,n,i){return Q0(s,e)+ev(s,t)+tv(s,n)+nv(s,i)}class Bu extends Rn{constructor(e=new be,t=new be,n=new be,i=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new be){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qs(e,i.x,r.x,o.x,a.x),qs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class iv extends Rn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qs(e,i.x,r.x,o.x,a.x),qs(e,i.y,r.y,o.y,a.y),qs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zu extends Rn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sv extends Rn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ku extends Rn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set($s(e,i.x,r.x,o.x),$s(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rv extends Rn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set($s(e,i.x,r.x,o.x),$s(e,i.y,r.y,o.y),$s(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hu extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(nh(a,l.x,c.x,u.x,h.x),nh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new be().fromArray(i))}return this}}var ih=Object.freeze({__proto__:null,ArcCurve:Y0,CatmullRomCurve3:j0,CubicBezierCurve:Bu,CubicBezierCurve3:iv,EllipseCurve:bc,LineCurve:zu,LineCurve3:sv,QuadraticBezierCurve:ku,QuadraticBezierCurve3:rv,SplineCurve:Hu});class ov extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ih[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ih[i.type]().fromJSON(i))}return this}}class av extends ov{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new zu(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ku(this.currentPoint.clone(),new be(e,t),new be(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Bu(this.currentPoint.clone(),new be(e,t),new be(n,i),new be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Hu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new bc(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Cc extends qt{constructor(e=[new be(0,-.5),new be(.5,0),new be(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ct(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new D,d=new be,f=new D,_=new D,v=new D;let p=0,g=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:p=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,f.x=g*1,f.y=-p,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:p=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,f.x=g*1,f.y=-p,f.z=g*0,_.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(_)}for(let M=0;M<=t;M++){const A=n+M*u*i,T=Math.sin(A),L=Math.cos(A);for(let I=0;I<=e.length-1;I++){h.x=e[I].x*T,h.y=e[I].y,h.z=e[I].x*L,o.push(h.x,h.y,h.z),d.x=M/t,d.y=I/(e.length-1),a.push(d.x,d.y);const P=l[3*I+0]*T,B=l[3*I+1],J=l[3*I+0]*L;c.push(P,B,J)}}for(let M=0;M<t;M++)for(let A=0;A<e.length-1;A++){const T=A+M*e.length,L=T,I=T+e.length,P=T+e.length+1,B=T+1;r.push(L,I,B),r.push(P,B,I)}this.setIndex(r),this.setAttribute("position",new Et(o,3)),this.setAttribute("uv",new Et(a,2)),this.setAttribute("normal",new Et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.points,e.segments,e.phiStart,e.phiLength)}}class Pc extends Cc{constructor(e=1,t=1,n=4,i=8){const r=new av;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Pc(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ic extends qt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let _=0;const v=[],p=n/2;let g=0;M(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(f,2));function M(){const T=new D,L=new D;let I=0;const P=(t-e)/n;for(let B=0;B<=r;B++){const J=[],S=B/r,R=S*(t-e)+e;for(let V=0;V<=i;V++){const G=V/i,q=G*l+a,ne=Math.sin(q),$=Math.cos(q);L.x=R*ne,L.y=-S*n+p,L.z=R*$,h.push(L.x,L.y,L.z),T.set(ne,P,$).normalize(),d.push(T.x,T.y,T.z),f.push(G,1-S),J.push(_++)}v.push(J)}for(let B=0;B<i;B++)for(let J=0;J<r;J++){const S=v[J][B],R=v[J+1][B],V=v[J+1][B+1],G=v[J][B+1];e>0&&(u.push(S,R,G),I+=3),t>0&&(u.push(R,V,G),I+=3)}c.addGroup(g,I,0),g+=I}function A(T){const L=_,I=new be,P=new D;let B=0;const J=T===!0?e:t,S=T===!0?1:-1;for(let V=1;V<=i;V++)h.push(0,p*S,0),d.push(0,S,0),f.push(.5,.5),_++;const R=_;for(let V=0;V<=i;V++){const q=V/i*l+a,ne=Math.cos(q),$=Math.sin(q);P.x=J*$,P.y=p*S,P.z=J*ne,h.push(P.x,P.y,P.z),d.push(0,S,0),I.x=ne*.5+.5,I.y=$*.5*S+.5,f.push(I.x,I.y),_++}for(let V=0;V<i;V++){const G=L+V,q=R+V;T===!0?u.push(q,q+1,G):u.push(q+1,q,G),B+=3}c.addGroup(g,B,T===!0?1:2),g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class co extends qt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,d=new D,f=[],_=[],v=[],p=[];for(let g=0;g<=n;g++){const M=[],A=g/n;let T=0;g===0&&o===0?T=.5/t:g===n&&l===Math.PI&&(T=-.5/t);for(let L=0;L<=t;L++){const I=L/t;h.x=-e*Math.cos(i+I*r)*Math.sin(o+A*a),h.y=e*Math.cos(o+A*a),h.z=e*Math.sin(i+I*r)*Math.sin(o+A*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),p.push(I+T,1-A),M.push(c++)}u.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){const A=u[g][M+1],T=u[g][M],L=u[g+1][M],I=u[g+1][M+1];(g!==0||o>0)&&f.push(A,T,I),(g!==n-1||l<Math.PI)&&f.push(T,L,I)}this.setIndex(f),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sh extends qt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,r=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let _=d,v=d+f;_<v;_+=3)for(let p=0;p<3;p++){const g=a.getX(_+p),M=a.getX(_+(p+1)%3);i.fromBufferAttribute(o,g),r.fromBufferAttribute(o,M),rh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),rh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Et(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function rh(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class fs extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cn extends fs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Dr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function cv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function lv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function oh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Vu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class sr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hv extends sr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ki,endingEnd:Ki}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ji:r=e,a=2*t-n;break;case jr:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ji:o=e,l=2*n-t;break;case jr:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),v=_*_,p=v*_,g=-d*p+2*d*v-d*_,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*_+1,A=(-1-f)*p+(1.5+f)*v+.5*_,T=f*p-f*v;for(let L=0;L!==a;++L)r[L]=g*o[u+L]+M*o[c+L]+A*o[l+L]+T*o[h+L];return r}}class Gu extends sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class uv extends sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dr(t,this.TimeBufferType),this.values=Dr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Dr(e.times,Array),values:Dr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Js:t=this.InterpolantFactoryMethodDiscrete;break;case Zs:t=this.InterpolantFactoryMethodLinear;break;case fo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return Zs;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&cv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let _=0;_!==n;++_){const v=t[h+_];if(v!==t[d+_]||v!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Zs;class vs extends Pn{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Js;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Wu extends Pn{}Wu.prototype.ValueTypeName="color";class ps extends Pn{}ps.prototype.ValueTypeName="number";class dv extends sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)jt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ms extends Pn{InterpolantFactoryMethodLinear(e){return new dv(this.times,this.values,this.getValueSize(),e)}}ms.prototype.ValueTypeName="quaternion";ms.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Pn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Js;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends Pn{}gs.prototype.ValueTypeName="vector";class nc{constructor(e="",t=-1,n=[],i=vc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(pv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=lv(l);l=oh(l,1,u),c=oh(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ps(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,_,v){if(f.length!==0){const p=[],g=[];Vu(f,p,g,_),p.length!==0&&v.push(new h(d,p,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let v=0;v<d[_].morphTargets.length;v++)f[d[_].morphTargets[v]]=-1;for(const v in f){const p=[],g=[];for(let M=0;M!==d[_].morphTargets.length;++M){const A=d[_];p.push(A.time),g.push(A.morphTarget===v?1:0)}i.push(new ps(".morphTargetInfluence["+v+"]",p,g))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(gs,f+".position",d,"pos",i),n(ms,f+".quaternion",d,"rot",i),n(gs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ps;case"vector":case"vector2":case"vector3":case"vector4":return gs;case"color":return Wu;case"quaternion":return ms;case"bool":case"boolean":return vs;case"string":return xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function pv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fv(s.type);if(s.times===void 0){const t=[],n=[];Vu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const li={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class mv{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const gv=new mv;class ys{constructor(e){this.manager=e!==void 0?e:gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class _v extends Error{constructor(e,t){super(e),this.response=t}}class Xu extends ys{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=li.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:n,onError:i});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Un[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let v=0;const p=new ReadableStream({start(g){M();function M(){h.read().then(({done:A,value:T})=>{if(A)g.close();else{v+=T.byteLength;const L=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:f});for(let I=0,P=u.length;I<P;I++){const B=u[I];B.onProgress&&B.onProgress(L)}g.enqueue(T),M()}},A=>{g.error(A)})}}});return new Response(p)}else throw new _v(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{li.add(e,c);const u=Un[e];delete Un[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Un[e];if(u===void 0)throw this.manager.itemError(e),c;delete Un[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class vv extends ys{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=li.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Qs("img");function l(){u(),li.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class $u extends ys{constructor(e){super(e)}load(e,t,n,i){const r=new Nt,o=new vv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class rr extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xv extends rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Yo=new He,ah=new D,ch=new D;class Lc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(ah),ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ch),t.updateMatrixWorld(),Yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yv extends Lc{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=hs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sv extends rr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new yv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lh=new He,Ps=new D,jo=new D;class Mv extends Lc{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ps),jo.copy(n.position),jo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jo),n.updateMatrixWorld(),i.makeTranslation(-Ps.x,-Ps.y,-Ps.z),lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh)}}class Ev extends rr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Av extends Lc{constructor(){super(new Mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qu extends rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Av}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tv extends rr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ys{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class wv extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=li.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return li.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),li.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});li.add(e,l),r.manager.itemStart(e)}}class bv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){jt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;jt.multiplyQuaternionsFlat(e,o,e,t,e,n),jt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Dc="\\[\\]\\.:\\/",Rv=new RegExp("["+Dc+"]","g"),Nc="[^"+Dc+"]",Cv="[^"+Dc.replace("\\.","")+"]",Pv=/((?:WC+[\/:])*)/.source.replace("WC",Nc),Iv=/(WCOD+)?/.source.replace("WCOD",Cv),Lv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),Dv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),Nv=new RegExp("^"+Pv+Iv+Lv+Dv+"$"),Ov=["material","materials","bones","map"];class Uv{constructor(e,t,n){const i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rv,"")}static parseTrackName(e){const t=Nv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ov.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=Uv;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Ki,endingEnd:Ki};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ka,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Kd:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case vc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===jd;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===mu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ji,i.endingEnd=Ji):(e?i.endingStart=this.zeroSlopeAtStart?Ji:Ki:i.endingStart=jr,t?i.endingEnd=this.zeroSlopeAtEnd?Ji:Ki:i.endingEnd=jr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const Bv=new Float32Array(1);class ic extends Li{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=i[h],f=d.name;let _=u[f];if(_!==void 0)++_.referenceCount,o[h]=_;else{if(_=o[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,f));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;_=new bv(ut.create(n,f,v),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,f),o[h]=_}a[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Gu(new Float32Array(2),new Float32Array(2),1,Bv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?nc.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=vc),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new Fv(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?nc.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class zv extends ds{constructor(e=10,t=10,n=4473924,i=8947848){n=new Fe(n),i=new Fe(i);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,_=-a;d<=t;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const v=d===r?n:i;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const u=new qt;u.setAttribute("position",new Et(l,3)),u.setAttribute("color",new Et(c,3));const h=new er({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);function Oc(s){const e=new Map,t=new Map,n=s.clone();return Yu(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Yu(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Yu(s.children[n],e.children[n],t)}function kv(s){if(Object.prototype.hasOwnProperty.call(s,"__esModule"))return s;var e=s.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var i=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return s[n]}})}),t}var Gs={exports:{}},Hv=Gs.exports,hh;function Uc(){return hh||(hh=1,(function(s,e){(function(t,n){n(e)})(Hv,(function(t){var n=function(x,m){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,b){y.__proto__=b}||function(y,b){for(var k in b)Object.prototype.hasOwnProperty.call(b,k)&&(y[k]=b[k])},n(x,m)};function i(x,m){if(typeof m!="function"&&m!==null)throw new TypeError("Class extends value "+String(m)+" is not a constructor or null");n(x,m);function y(){this.constructor=x}x.prototype=m===null?Object.create(m):(y.prototype=m.prototype,new y)}function r(x,m,y,b){var k=arguments.length,Q=k<3?m:b,Pe;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")Q=Reflect.decorate(x,m,y,b);else for(var we=x.length-1;we>=0;we--)(Pe=x[we])&&(Q=(k<3?Pe(Q):k>3?Pe(m,y,Q):Pe(m,y))||Q);return k>3&&Q&&Object.defineProperty(m,y,Q),Q}function o(x,m,y){if(arguments.length===2)for(var b=0,k=m.length,Q;b<k;b++)(Q||!(b in m))&&(Q||(Q=Array.prototype.slice.call(m,0,b)),Q[b]=m[b]);return x.concat(Q||Array.prototype.slice.call(m))}typeof SuppressedError=="function"&&SuppressedError;var a=255,l=213;t.OPERATION=void 0,(function(x){x[x.ADD=128]="ADD",x[x.REPLACE=0]="REPLACE",x[x.DELETE=64]="DELETE",x[x.DELETE_AND_ADD=192]="DELETE_AND_ADD",x[x.TOUCH=1]="TOUCH",x[x.CLEAR=10]="CLEAR"})(t.OPERATION||(t.OPERATION={}));var c=(function(){function x(m,y,b){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=m,this.setParent(y,b)}return x.prototype.setParent=function(m,y,b){var k=this;if(this.indexes||(this.indexes=this.ref instanceof mt?this.ref._definition.indexes:{}),this.parent=m,this.parentIndex=b,!!y)if(this.root=y,this.ref instanceof mt){var Q=this.ref._definition;for(var Pe in Q.schema){var we=this.ref[Pe];if(we&&we.$changes){var je=Q.indexes[Pe];we.$changes.setParent(this.ref,y,je)}}}else typeof this.ref=="object"&&this.ref.forEach(function(We,E){if(We instanceof mt){var O=We.$changes,F=k.ref.$changes.indexes[E];O.setParent(k.ref,k.root,F)}})},x.prototype.operation=function(m){this.changes.set(--this.currentCustomOperation,m)},x.prototype.change=function(m,y){y===void 0&&(y=t.OPERATION.ADD);var b=typeof m=="number"?m:this.indexes[m];this.assertValidIndex(b,m);var k=this.changes.get(b);(!k||k.op===t.OPERATION.DELETE||k.op===t.OPERATION.TOUCH)&&this.changes.set(b,{op:k&&k.op===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:y,index:b}),this.allChanges.add(b),this.changed=!0,this.touchParents()},x.prototype.touch=function(m){var y=typeof m=="number"?m:this.indexes[m];this.assertValidIndex(y,m),this.changes.has(y)||this.changes.set(y,{op:t.OPERATION.TOUCH,index:y}),this.allChanges.add(y),this.touchParents()},x.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},x.prototype.getType=function(m){if(this.ref._definition){var y=this.ref._definition;return y.schema[y.fieldsByIndex[m]]}else{var y=this.parent._definition,b=y.schema[y.fieldsByIndex[this.parentIndex]];return Object.values(b)[0]}},x.prototype.getChildrenFilter=function(){var m=this.parent._definition.childFilters;return m&&m[this.parentIndex]},x.prototype.getValue=function(m){return this.ref.getByIndex(m)},x.prototype.delete=function(m){var y=typeof m=="number"?m:this.indexes[m];if(y===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(m," (").concat(y,")"));return}var b=this.getValue(y);this.changes.set(y,{op:t.OPERATION.DELETE,index:y}),this.allChanges.delete(y),delete this.caches[y],b&&b.$changes&&(b.$changes.parent=void 0),this.changed=!0,this.touchParents()},x.prototype.discard=function(m,y){var b=this;m===void 0&&(m=!1),y===void 0&&(y=!1),this.ref instanceof mt||this.changes.forEach(function(k){if(k.op===t.OPERATION.DELETE){var Q=b.ref.getIndex(k.index);delete b.indexes[Q]}}),this.changes.clear(),this.changed=m,y&&this.allChanges.clear(),this.currentCustomOperation=0},x.prototype.discardAll=function(){var m=this;this.changes.forEach(function(y){var b=m.getValue(y.index);b&&b.$changes&&b.$changes.discardAll()}),this.discard()},x.prototype.cache=function(m,y){this.caches[m]=y},x.prototype.clone=function(){return new x(this.ref,this.parent,this.root)},x.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},x.prototype.assertValidIndex=function(m,y){if(m===void 0)throw new Error('ChangeTree: missing index for field "'.concat(y,'"'))},x})();function u(x,m,y,b){return x[m]||(x[m]=[]),x[m].push(y),b?.forEach(function(k,Q){return y(k,Q)}),function(){return d(x[m],x[m].indexOf(y))}}function h(x){var m=this,y=typeof this.$changes.getType()!="string";this.$items.forEach(function(b,k){x.push({refId:m.$changes.refId,op:t.OPERATION.DELETE,field:k,value:void 0,previousValue:b}),y&&m.$changes.root.removeRef(b.$changes.refId)})}function d(x,m){if(m===-1||m>=x.length)return!1;for(var y=x.length-1,b=m;b<y;b++)x[b]=x[b+1];return x.length=y,!0}var f=function(x,m){var y=x.toString(),b=m.toString();return y<b?-1:y>b?1:0};function _(x){return x.$proxy=!0,x=new Proxy(x,{get:function(m,y){return typeof y!="symbol"&&!isNaN(y)?m.at(y):m[y]},set:function(m,y,b){if(typeof y!="symbol"&&!isNaN(y)){var k=Array.from(m.$items.keys()),Q=parseInt(k[y]||y);b==null?m.deleteAt(Q):m.setAt(Q,b)}else m[y]=b;return!0},deleteProperty:function(m,y){return typeof y=="number"?m.deleteAt(y):delete m[y],!0},has:function(m,y){return typeof y!="symbol"&&!isNaN(Number(y))?m.$items.has(Number(y)):Reflect.has(m,y)}}),x}var v=(function(){function x(){for(var m=[],y=0;y<arguments.length;y++)m[y]=arguments[y];this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,m)}return x.prototype.onAdd=function(m,y){return y===void 0&&(y=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,m,y?this.$items:void 0)},x.prototype.onRemove=function(m){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,m)},x.prototype.onChange=function(m){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,m)},x.is=function(m){return Array.isArray(m)||m.array!==void 0},Object.defineProperty(x.prototype,"length",{get:function(){return this.$items.size},set:function(m){m===0?this.clear():this.splice(m,this.length-m)},enumerable:!1,configurable:!0}),x.prototype.push=function(){for(var m=this,y=[],b=0;b<arguments.length;b++)y[b]=arguments[b];var k;return y.forEach(function(Q){k=m.$refId++,m.setAt(k,Q)}),k},x.prototype.pop=function(){var m=Array.from(this.$indexes.values()).pop();if(m!==void 0){this.$changes.delete(m),this.$indexes.delete(m);var y=this.$items.get(m);return this.$items.delete(m),y}},x.prototype.at=function(m){if(m=Math.trunc(m)||0,m<0&&(m+=this.length),!(m<0||m>=this.length)){var y=Array.from(this.$items.keys())[m];return this.$items.get(y)}},x.prototype.setAt=function(m,y){var b,k;if(y==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(m)!==y){y.$changes!==void 0&&y.$changes.setParent(this,this.$changes.root,m);var Q=(k=(b=this.$changes.indexes[m])===null||b===void 0?void 0:b.op)!==null&&k!==void 0?k:t.OPERATION.ADD;this.$changes.indexes[m]=m,this.$indexes.set(m,m),this.$items.set(m,y),this.$changes.change(m,Q)}},x.prototype.deleteAt=function(m){var y=Array.from(this.$items.keys())[m];return y===void 0?!1:this.$deleteAt(y)},x.prototype.$deleteAt=function(m){return this.$changes.delete(m),this.$indexes.delete(m),this.$items.delete(m)},x.prototype.clear=function(m){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),m&&h.call(this,m),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.concat=function(){for(var m,y=[],b=0;b<arguments.length;b++)y[b]=arguments[b];return new(x.bind.apply(x,o([void 0],(m=Array.from(this.$items.values())).concat.apply(m,y),!1)))},x.prototype.join=function(m){return Array.from(this.$items.values()).join(m)},x.prototype.reverse=function(){var m=this,y=Array.from(this.$items.keys()),b=Array.from(this.$items.values()).reverse();return b.forEach(function(k,Q){m.setAt(y[Q],k)}),this},x.prototype.shift=function(){var m=Array.from(this.$items.keys()),y=m.shift();if(y!==void 0){var b=this.$items.get(y);return this.$deleteAt(y),b}},x.prototype.slice=function(m,y){var b=new x;return b.push.apply(b,Array.from(this.$items.values()).slice(m,y)),b},x.prototype.sort=function(m){var y=this;m===void 0&&(m=f);var b=Array.from(this.$items.keys()),k=Array.from(this.$items.values()).sort(m);return k.forEach(function(Q,Pe){y.setAt(b[Pe],Q)}),this},x.prototype.splice=function(m,y){y===void 0&&(y=this.length-m);for(var b=[],k=2;k<arguments.length;k++)b[k-2]=arguments[k];for(var Q=Array.from(this.$items.keys()),Pe=[],we=m;we<m+y;we++)Pe.push(this.$items.get(Q[we])),this.$deleteAt(Q[we]);for(var we=0;we<b.length;we++)this.setAt(m+we,b[we]);return Pe},x.prototype.unshift=function(){for(var m=this,y=[],b=0;b<arguments.length;b++)y[b]=arguments[b];var k=this.length,Q=y.length,Pe=Array.from(this.$items.values());return y.forEach(function(we,je){m.setAt(je,we)}),Pe.forEach(function(we,je){m.setAt(Q+je,we)}),k+Q},x.prototype.indexOf=function(m,y){return Array.from(this.$items.values()).indexOf(m,y)},x.prototype.lastIndexOf=function(m,y){return y===void 0&&(y=this.length-1),Array.from(this.$items.values()).lastIndexOf(m,y)},x.prototype.every=function(m,y){return Array.from(this.$items.values()).every(m,y)},x.prototype.some=function(m,y){return Array.from(this.$items.values()).some(m,y)},x.prototype.forEach=function(m,y){Array.from(this.$items.values()).forEach(m,y)},x.prototype.map=function(m,y){return Array.from(this.$items.values()).map(m,y)},x.prototype.filter=function(m,y){return Array.from(this.$items.values()).filter(m,y)},x.prototype.reduce=function(m,y){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},x.prototype.reduceRight=function(m,y){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},x.prototype.find=function(m,y){return Array.from(this.$items.values()).find(m,y)},x.prototype.findIndex=function(m,y){return Array.from(this.$items.values()).findIndex(m,y)},x.prototype.fill=function(m,y,b){throw new Error("ArraySchema#fill() not implemented")},x.prototype.copyWithin=function(m,y,b){throw new Error("ArraySchema#copyWithin() not implemented")},x.prototype.toString=function(){return this.$items.toString()},x.prototype.toLocaleString=function(){return this.$items.toLocaleString()},x.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},x.prototype.includes=function(m,y){return Array.from(this.$items.values()).includes(m,y)},x.prototype.flatMap=function(m,y){throw new Error("ArraySchema#flatMap() is not supported.")},x.prototype.flat=function(m){throw new Error("ArraySchema#flat() is not supported.")},x.prototype.findLast=function(){var m=Array.from(this.$items.values());return m.findLast.apply(m,arguments)},x.prototype.findLastIndex=function(){var m=Array.from(this.$items.values());return m.findLastIndex.apply(m,arguments)},x.prototype.with=function(m,y){var b=Array.from(this.$items.values());return b[m]=y,new(x.bind.apply(x,o([void 0],b,!1)))},x.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},x.prototype.toSorted=function(m){return Array.from(this.$items.values()).sort(m)},x.prototype.toSpliced=function(m,y){var b=Array.from(this.$items.values());return b.toSpliced.apply(b,arguments)},x.prototype.setIndex=function(m,y){this.$indexes.set(m,y)},x.prototype.getIndex=function(m){return this.$indexes.get(m)},x.prototype.getByIndex=function(m){return this.$items.get(this.$indexes.get(m))},x.prototype.deleteByIndex=function(m){var y=this.$indexes.get(m);this.$items.delete(y),this.$indexes.delete(m)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){return this.toArray().map(function(m){return typeof m.toJSON=="function"?m.toJSON():m})},x.prototype.clone=function(m){var y;return m?y=new(x.bind.apply(x,o([void 0],Array.from(this.$items.values()),!1))):y=new(x.bind.apply(x,o([void 0],this.map(function(b){return b.$changes?b.clone():b}),!1))),y},x})();function p(x){return x.$proxy=!0,x=new Proxy(x,{get:function(m,y){return typeof y!="symbol"&&typeof m[y]>"u"?m.get(y):m[y]},set:function(m,y,b){return typeof y!="symbol"&&y.indexOf("$")===-1&&y!=="onAdd"&&y!=="onRemove"&&y!=="onChange"?m.set(y,b):m[y]=b,!0},deleteProperty:function(m,y){return m.delete(y),!0}}),x}var g=(function(){function x(m){var y=this;if(this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,m)if(m instanceof Map||m instanceof x)m.forEach(function(k,Q){return y.set(Q,k)});else for(var b in m)this.set(b,m[b])}return x.prototype.onAdd=function(m,y){return y===void 0&&(y=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,m,y?this.$items:void 0)},x.prototype.onRemove=function(m){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,m)},x.prototype.onChange=function(m){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,m)},x.is=function(m){return m.map!==void 0},x.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(x.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.set=function(m,y){if(y==null)throw new Error("MapSchema#set('".concat(m,"', ").concat(y,"): trying to set ").concat(y," value on '").concat(m,"'."));m=m.toString();var b=typeof this.$changes.indexes[m]<"u",k=b?this.$changes.indexes[m]:this.$refId++,Q=b?t.OPERATION.REPLACE:t.OPERATION.ADD,Pe=y.$changes!==void 0;if(Pe&&y.$changes.setParent(this,this.$changes.root,k),!b)this.$changes.indexes[m]=k,this.$indexes.set(k,m);else{if(!Pe&&this.$items.get(m)===y)return;Pe&&this.$items.get(m)!==y&&(Q=t.OPERATION.ADD)}return this.$items.set(m,y),this.$changes.change(m,Q),this},x.prototype.get=function(m){return this.$items.get(m)},x.prototype.delete=function(m){return this.$changes.delete(m.toString()),this.$items.delete(m)},x.prototype.clear=function(m){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),m&&h.call(this,m),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(m){return this.$items.has(m)},x.prototype.forEach=function(m){this.$items.forEach(m)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(m,y){this.$indexes.set(m,y)},x.prototype.getIndex=function(m){return this.$indexes.get(m)},x.prototype.getByIndex=function(m){return this.$items.get(this.$indexes.get(m))},x.prototype.deleteByIndex=function(m){var y=this.$indexes.get(m);this.$items.delete(y),this.$indexes.delete(m)},x.prototype.toJSON=function(){var m={};return this.forEach(function(y,b){m[b]=typeof y.toJSON=="function"?y.toJSON():y}),m},x.prototype.clone=function(m){var y;return m?y=Object.assign(new x,this):(y=new x,this.forEach(function(b,k){b.$changes?y.set(k,b.clone()):y.set(k,b)})),y},x})(),M={};function A(x,m){M[x]=m}function T(x){return M[x]}var L=(function(){function x(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return x.create=function(m){var y=new x;return y.schema=Object.assign({},m&&m.schema||{}),y.indexes=Object.assign({},m&&m.indexes||{}),y.fieldsByIndex=Object.assign({},m&&m.fieldsByIndex||{}),y.descriptors=Object.assign({},m&&m.descriptors||{}),y.deprecated=Object.assign({},m&&m.deprecated||{}),y},x.prototype.addField=function(m,y){var b=this.getNextFieldIndex();this.fieldsByIndex[b]=m,this.indexes[m]=b,this.schema[m]=Array.isArray(y)?{array:y[0]}:y},x.prototype.hasField=function(m){return this.indexes[m]!==void 0},x.prototype.addFilter=function(m,y){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[m]]=y,this.indexesWithFilters.push(this.indexes[m]),!0},x.prototype.addChildrenFilter=function(m,y){var b=this.indexes[m],k=this.schema[m];if(T(Object.keys(k)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[b]=y,!0;console.warn("@filterChildren: field '".concat(m,"' can't have children. Ignoring filter."))},x.prototype.getChildrenFilter=function(m){return this.childFilters&&this.childFilters[this.indexes[m]]},x.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},x})();function I(x){return x._context&&x._context.useFilters}var P=(function(){function x(){this.types={},this.schemas=new Map,this.useFilters=!1}return x.prototype.has=function(m){return this.schemas.has(m)},x.prototype.get=function(m){return this.types[m]},x.prototype.add=function(m,y){y===void 0&&(y=this.schemas.size),m._definition=L.create(m._definition),m._typeid=y,this.types[y]=m,this.schemas.set(m,y)},x.create=function(m){return m===void 0&&(m={}),function(y){return m.context||(m.context=new x),J(y,m)}},x})(),B=new P;function J(x,m){return m===void 0&&(m={}),function(y,b){var k=m.context||B,Q=y.constructor;if(Q._context=k,!x)throw new Error("".concat(Q.name,': @type() reference provided for "').concat(b,`" is undefined. Make sure you don't have any circular dependencies.`));k.has(Q)||k.add(Q);var Pe=Q._definition;if(Pe.addField(b,x),Pe.descriptors[b]){if(Pe.deprecated[b])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(b,"' definition on '").concat(Q.name,`'.
Check @type() annotation`))}catch(F){var we=F.stack.split(`
`)[4].trim();throw new Error("".concat(F.message," ").concat(we))}}var je=v.is(x),We=!je&&g.is(x);if(typeof x!="string"&&!mt.is(x)){var E=Object.values(x)[0];typeof E!="string"&&!k.has(E)&&k.add(E)}if(m.manual){Pe.descriptors[b]={enumerable:!0,configurable:!0,writable:!0};return}var O="_".concat(b);Pe.descriptors[O]={enumerable:!1,configurable:!1,writable:!0},Pe.descriptors[b]={get:function(){return this[O]},set:function(F){F!==this[O]&&(F!=null?(je&&!(F instanceof v)&&(F=new(v.bind.apply(v,o([void 0],F,!1)))),We&&!(F instanceof g)&&(F=new g(F)),F.$proxy===void 0&&(We?F=p(F):je&&(F=_(F))),this.$changes.change(b),F.$changes&&F.$changes.setParent(this,this.$changes.root,this._definition.indexes[b])):this[O]!==void 0&&this.$changes.delete(b),this[O]=F)},enumerable:!0,configurable:!0}}}function S(x){return function(m,y){var b=m.constructor,k=b._definition;k.addFilter(y,x)&&(b._context.useFilters=!0)}}function R(x){return function(m,y){var b=m.constructor,k=b._definition;k.addChildrenFilter(y,x)&&(b._context.useFilters=!0)}}function V(x){return x===void 0&&(x=!0),function(m,y){var b=m.constructor,k=b._definition;k.deprecated[y]=!0,x&&(k.descriptors[y]={get:function(){throw new Error("".concat(y," is deprecated."))},set:function(Q){},enumerable:!1,configurable:!0})}}function G(x,m,y){y===void 0&&(y={}),y.context||(y.context=x._context||y.context||B);for(var b in m)J(m[b],y)(x.prototype,b);return x}function q(x){for(var m=0,y=0,b=0,k=x.length;b<k;b++)m=x.charCodeAt(b),m<128?y+=1:m<2048?y+=2:m<55296||m>=57344?y+=3:(b++,y+=4);return y}function ne(x,m,y){for(var b=0,k=0,Q=y.length;k<Q;k++)b=y.charCodeAt(k),b<128?x[m++]=b:b<2048?(x[m++]=192|b>>6,x[m++]=128|b&63):b<55296||b>=57344?(x[m++]=224|b>>12,x[m++]=128|b>>6&63,x[m++]=128|b&63):(k++,b=65536+((b&1023)<<10|y.charCodeAt(k)&1023),x[m++]=240|b>>18,x[m++]=128|b>>12&63,x[m++]=128|b>>6&63,x[m++]=128|b&63)}function $(x,m){x.push(m&255)}function ie(x,m){x.push(m&255)}function Y(x,m){x.push(m&255),x.push(m>>8&255)}function ye(x,m){x.push(m&255),x.push(m>>8&255)}function me(x,m){x.push(m&255),x.push(m>>8&255),x.push(m>>16&255),x.push(m>>24&255)}function ae(x,m){var y=m>>24,b=m>>16,k=m>>8,Q=m;x.push(Q&255),x.push(k&255),x.push(b&255),x.push(y&255)}function Xe(x,m){var y=Math.floor(m/Math.pow(2,32)),b=m>>>0;ae(x,b),ae(x,y)}function et(x,m){var y=m/Math.pow(2,32)>>0,b=m>>>0;ae(x,b),ae(x,y)}function Z(x,m){De(x,m)}function le(x,m){Ye(x,m)}var Me=new Int32Array(2),Ee=new Float32Array(Me.buffer),Be=new Float64Array(Me.buffer);function De(x,m){Ee[0]=m,me(x,Me[0])}function Ye(x,m){Be[0]=m,me(x,Me[0]),me(x,Me[1])}function ht(x,m){return ie(x,m?1:0)}function $e(x,m){m||(m="");var y=q(m),b=0;if(y<32)x.push(y|160),b=1;else if(y<256)x.push(217),ie(x,y),b=2;else if(y<65536)x.push(218),ye(x,y),b=3;else if(y<4294967296)x.push(219),ae(x,y),b=5;else throw new Error("String too long");return ne(x,x.length,m),b+y}function U(x,m){if(isNaN(m))return U(x,0);if(isFinite(m)){if(m!==(m|0))return x.push(203),Ye(x,m),9}else return U(x,m>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return m>=0?m<128?(ie(x,m),1):m<256?(x.push(204),ie(x,m),2):m<65536?(x.push(205),ye(x,m),3):m<4294967296?(x.push(206),ae(x,m),5):(x.push(207),et(x,m),9):m>=-32?(x.push(224|m+32),1):m>=-128?(x.push(208),$(x,m),2):m>=-32768?(x.push(209),Y(x,m),3):m>=-2147483648?(x.push(210),me(x,m),5):(x.push(211),Xe(x,m),9)}var Ot=Object.freeze({__proto__:null,boolean:ht,float32:Z,float64:le,int16:Y,int32:me,int64:Xe,int8:$,number:U,string:$e,uint16:ye,uint32:ae,uint64:et,uint8:ie,utf8Write:ne,writeFloat32:De,writeFloat64:Ye});function Je(x,m,y){for(var b="",k=0,Q=m,Pe=m+y;Q<Pe;Q++){var we=x[Q];if((we&128)===0){b+=String.fromCharCode(we);continue}if((we&224)===192){b+=String.fromCharCode((we&31)<<6|x[++Q]&63);continue}if((we&240)===224){b+=String.fromCharCode((we&15)<<12|(x[++Q]&63)<<6|(x[++Q]&63)<<0);continue}if((we&248)===240){k=(we&7)<<18|(x[++Q]&63)<<12|(x[++Q]&63)<<6|(x[++Q]&63)<<0,k>=65536?(k-=65536,b+=String.fromCharCode((k>>>10)+55296,(k&1023)+56320)):b+=String.fromCharCode(k);continue}console.error("Invalid byte "+we.toString(16))}return b}function tt(x,m){return Ie(x,m)<<24>>24}function Ie(x,m){return x[m.offset++]}function pt(x,m){return Ne(x,m)<<16>>16}function Ne(x,m){return x[m.offset++]|x[m.offset++]<<8}function C(x,m){return x[m.offset++]|x[m.offset++]<<8|x[m.offset++]<<16|x[m.offset++]<<24}function w(x,m){return C(x,m)>>>0}function X(x,m){return Ze(x,m)}function te(x,m){return he(x,m)}function re(x,m){var y=w(x,m),b=C(x,m)*Math.pow(2,32);return b+y}function ee(x,m){var y=w(x,m),b=w(x,m)*Math.pow(2,32);return b+y}var Re=new Int32Array(2),fe=new Float32Array(Re.buffer),Ae=new Float64Array(Re.buffer);function Ze(x,m){return Re[0]=C(x,m),fe[0]}function he(x,m){return Re[0]=C(x,m),Re[1]=C(x,m),Ae[0]}function Te(x,m){return Ie(x,m)>0}function Oe(x,m){var y=x[m.offset++],b;y<192?b=y&31:y===217?b=Ie(x,m):y===218?b=Ne(x,m):y===219&&(b=w(x,m));var k=Je(x,m.offset,b);return m.offset+=b,k}function Ue(x,m){var y=x[m.offset];return y<192&&y>160||y===217||y===218||y===219}function ge(x,m){var y=x[m.offset++];if(y<128)return y;if(y===202)return Ze(x,m);if(y===203)return he(x,m);if(y===204)return Ie(x,m);if(y===205)return Ne(x,m);if(y===206)return w(x,m);if(y===207)return ee(x,m);if(y===208)return tt(x,m);if(y===209)return pt(x,m);if(y===210)return C(x,m);if(y===211)return re(x,m);if(y>223)return(255-y+1)*-1}function Qe(x,m){var y=x[m.offset];return y<128||y>=202&&y<=211}function ze(x,m){return x[m.offset]<160}function dt(x,m){return x[m.offset-1]===a&&(x[m.offset]<128||x[m.offset]>=202&&x[m.offset]<=211)}var z=Object.freeze({__proto__:null,arrayCheck:ze,boolean:Te,float32:X,float64:te,int16:pt,int32:C,int64:re,int8:tt,number:ge,numberCheck:Qe,readFloat32:Ze,readFloat64:he,string:Oe,stringCheck:Ue,switchStructureCheck:dt,uint16:Ne,uint32:w,uint64:ee,uint8:Ie}),_e=(function(){function x(m){var y=this;this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,m&&m.forEach(function(b){return y.add(b)})}return x.prototype.onAdd=function(m,y){return y===void 0&&(y=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,m,y?this.$items:void 0)},x.prototype.onRemove=function(m){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,m)},x.prototype.onChange=function(m){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,m)},x.is=function(m){return m.collection!==void 0},x.prototype.add=function(m){var y=this.$refId++,b=m.$changes!==void 0;return b&&m.$changes.setParent(this,this.$changes.root,y),this.$changes.indexes[y]=y,this.$indexes.set(y,y),this.$items.set(y,m),this.$changes.change(y),y},x.prototype.at=function(m){var y=Array.from(this.$items.keys())[m];return this.$items.get(y)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(m){for(var y=this.$items.entries(),b,k;(k=y.next())&&!k.done;)if(m===k.value[1]){b=k.value[0];break}return b===void 0?!1:(this.$changes.delete(b),this.$indexes.delete(b),this.$items.delete(b))},x.prototype.clear=function(m){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),m&&h.call(this,m),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(m){return Array.from(this.$items.values()).some(function(y){return y===m})},x.prototype.forEach=function(m){var y=this;this.$items.forEach(function(b,k,Q){return m(b,k,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(m,y){this.$indexes.set(m,y)},x.prototype.getIndex=function(m){return this.$indexes.get(m)},x.prototype.getByIndex=function(m){return this.$items.get(this.$indexes.get(m))},x.prototype.deleteByIndex=function(m){var y=this.$indexes.get(m);this.$items.delete(y),this.$indexes.delete(m)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var m=[];return this.forEach(function(y,b){m.push(typeof y.toJSON=="function"?y.toJSON():y)}),m},x.prototype.clone=function(m){var y;return m?y=Object.assign(new x,this):(y=new x,this.forEach(function(b){b.$changes?y.add(b.clone()):y.add(b)})),y},x})(),j=(function(){function x(m){var y=this;this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,m&&m.forEach(function(b){return y.add(b)})}return x.prototype.onAdd=function(m,y){return y===void 0&&(y=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,m,y?this.$items:void 0)},x.prototype.onRemove=function(m){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,m)},x.prototype.onChange=function(m){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,m)},x.is=function(m){return m.set!==void 0},x.prototype.add=function(m){var y,b;if(this.has(m))return!1;var k=this.$refId++;m.$changes!==void 0&&m.$changes.setParent(this,this.$changes.root,k);var Q=(b=(y=this.$changes.indexes[k])===null||y===void 0?void 0:y.op)!==null&&b!==void 0?b:t.OPERATION.ADD;return this.$changes.indexes[k]=k,this.$indexes.set(k,k),this.$items.set(k,m),this.$changes.change(k,Q),k},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(m){for(var y=this.$items.entries(),b,k;(k=y.next())&&!k.done;)if(m===k.value[1]){b=k.value[0];break}return b===void 0?!1:(this.$changes.delete(b),this.$indexes.delete(b),this.$items.delete(b))},x.prototype.clear=function(m){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),m&&h.call(this,m),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(m){for(var y=this.$items.values(),b=!1,k;(k=y.next())&&!k.done;)if(m===k.value){b=!0;break}return b},x.prototype.forEach=function(m){var y=this;this.$items.forEach(function(b,k,Q){return m(b,k,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(m,y){this.$indexes.set(m,y)},x.prototype.getIndex=function(m){return this.$indexes.get(m)},x.prototype.getByIndex=function(m){return this.$items.get(this.$indexes.get(m))},x.prototype.deleteByIndex=function(m){var y=this.$indexes.get(m);this.$items.delete(y),this.$indexes.delete(m)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var m=[];return this.forEach(function(y,b){m.push(typeof y.toJSON=="function"?y.toJSON():y)}),m},x.prototype.clone=function(m){var y;return m?y=Object.assign(new x,this):(y=new x,this.forEach(function(b){b.$changes?y.add(b.clone()):y.add(b)})),y},x})(),se=(function(){function x(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return x.prototype.addRefId=function(m){this.refIds.has(m)||(this.refIds.add(m),this.containerIndexes.set(m,new Set))},x.get=function(m){return m.$filterState===void 0&&(m.$filterState=new x),m.$filterState},x})(),ve=(function(){function x(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return x.prototype.getNextUniqueId=function(){return this.nextUniqueId++},x.prototype.addRef=function(m,y,b){b===void 0&&(b=!0),this.refs.set(m,y),b&&(this.refCounts[m]=(this.refCounts[m]||0)+1)},x.prototype.removeRef=function(m){var y=this.refCounts[m];if(y===void 0){console.warn("trying to remove reference ".concat(m," that doesn't exist"));return}if(y===0){console.warn("trying to remove reference ".concat(m," with 0 refCount"));return}this.refCounts[m]=y-1,this.deletedRefs.add(m)},x.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},x.prototype.garbageCollectDeletedRefs=function(){var m=this;this.deletedRefs.forEach(function(y){if(!(m.refCounts[y]>0)){var b=m.refs.get(y);if(b instanceof mt)for(var k in b._definition.schema)typeof b._definition.schema[k]!="string"&&b[k]&&b[k].$changes&&m.removeRef(b[k].$changes.refId);else{var Q=b.$changes.parent._definition,Pe=Q.schema[Q.fieldsByIndex[b.$changes.parentIndex]];typeof Object.values(Pe)[0]=="function"&&Array.from(b.values()).forEach(function(we){return m.removeRef(we.$changes.refId)})}m.refs.delete(y),delete m.refCounts[y]}}),this.deletedRefs.clear()},x})(),xe=(function(x){i(m,x);function m(){return x!==null&&x.apply(this,arguments)||this}return m})(Error);function nt(x,m,y,b){var k,Q=!1;switch(m){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":k="number",isNaN(x)&&console.log('trying to encode "NaN" in '.concat(y.constructor.name,"#").concat(b));break;case"string":k="string",Q=!0;break;case"boolean":return}if(typeof x!==k&&(!Q||Q&&x!==null)){var Pe="'".concat(JSON.stringify(x),"'").concat(x&&x.constructor&&" (".concat(x.constructor.name,")")||"");throw new xe("a '".concat(k,"' was expected, but ").concat(Pe," was provided in ").concat(y.constructor.name,"#").concat(b))}}function xt(x,m,y,b){if(!(x instanceof m))throw new xe("a '".concat(m.name,"' was expected, but '").concat(x.constructor.name,"' was provided in ").concat(y.constructor.name,"#").concat(b))}function Ft(x,m,y,b,k){nt(y,x,b,k);var Q=Ot[x];if(Q)Q(m,y);else throw new xe("a '".concat(x,"' was expected, but ").concat(y," was provided in ").concat(b.constructor.name,"#").concat(k))}function ot(x,m,y){return z[x](m,y)}var mt=(function(){function x(){for(var m=[],y=0;y<arguments.length;y++)m[y]=arguments[y];Object.defineProperties(this,{$changes:{value:new c(this,void 0,new ve),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var b=this._definition.descriptors;b&&Object.defineProperties(this,b),m[0]&&this.assign(m[0])}return x.onError=function(m){console.error(m)},x.is=function(m){return m._definition&&m._definition.schema!==void 0},x.prototype.onChange=function(m){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,m)},x.prototype.onRemove=function(m){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,m)},x.prototype.assign=function(m){return Object.assign(this,m),this},Object.defineProperty(x.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),x.prototype.setDirty=function(m,y){this.$changes.change(m,y)},x.prototype.listen=function(m,y,b){var k=this;return b===void 0&&(b=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[m]||(this.$callbacks[m]=[]),this.$callbacks[m].push(y),b&&this[m]!==void 0&&y(this[m],void 0),function(){return d(k.$callbacks[m],k.$callbacks[m].indexOf(y))}},x.prototype.decode=function(m,y,b){y===void 0&&(y={offset:0}),b===void 0&&(b=this);var k=[],Q=this.$changes.root,Pe=m.length,we=0;for(Q.refs.set(we,this);y.offset<Pe;){var je=m[y.offset++];if(je==a){we=ge(m,y);var We=Q.refs.get(we);if(!We)throw new Error('"refId" not found: '.concat(we));b=We;continue}var E=b.$changes,O=b._definition!==void 0,F=O?je>>6<<6:je;if(F===t.OPERATION.CLEAR){b.clear(k);continue}var H=O?je%(F||255):ge(m,y),N=O?b._definition.fieldsByIndex[H]:"",K=E.getType(H),W=void 0,oe=void 0,pe=void 0;if(O?oe=b["_".concat(N)]:(oe=b.getByIndex(H),(F&t.OPERATION.ADD)===t.OPERATION.ADD?(pe=b instanceof g?Oe(m,y):H,b.setIndex(H,pe)):pe=b.getIndex(H)),(F&t.OPERATION.DELETE)===t.OPERATION.DELETE&&(F!==t.OPERATION.DELETE_AND_ADD&&b.deleteByIndex(H),oe&&oe.$changes&&Q.removeRef(oe.$changes.refId),W=null),N===void 0){console.warn("@colyseus/schema: definition mismatch");for(var Se={offset:y.offset};y.offset<Pe&&!(dt(m,y)&&(Se.offset=y.offset+1,Q.refs.has(ge(m,Se))));)y.offset++;continue}else if(F!==t.OPERATION.DELETE)if(x.is(K)){var ue=ge(m,y);if(W=Q.refs.get(ue),F!==t.OPERATION.REPLACE){var ce=this.getSchemaType(m,y,K);W||(W=this.createTypeInstance(ce),W.$changes.refId=ue,oe&&(W.$callbacks=oe.$callbacks,oe.$changes.refId&&ue!==oe.$changes.refId&&Q.removeRef(oe.$changes.refId))),Q.addRef(ue,W,W!==oe)}}else if(typeof K=="string")W=ot(K,m,y);else{var qe=T(Object.keys(K)[0]),it=ge(m,y),st=Q.refs.has(it)?oe||Q.refs.get(it):new qe.constructor;if(W=st.clone(!0),W.$changes.refId=it,oe&&(W.$callbacks=oe.$callbacks,oe.$changes.refId&&it!==oe.$changes.refId)){Q.removeRef(oe.$changes.refId);for(var ct=oe.entries(),Le=void 0;(Le=ct.next())&&!Le.done;){var Ce=Le.value,gt=Ce[0],rt=Ce[1];k.push({refId:it,op:t.OPERATION.DELETE,field:gt,value:void 0,previousValue:rt})}}Q.addRef(it,W,st!==oe)}if(W!=null){if(W.$changes&&W.$changes.setParent(E.ref,E.root,H),b instanceof x)b[N]=W;else if(b instanceof g){var gt=pe;b.$items.set(gt,W),b.$changes.allChanges.add(H)}else if(b instanceof v)b.setAt(H,W);else if(b instanceof _e){var At=b.add(W);b.setIndex(H,At)}else if(b instanceof j){var At=b.add(W);At!==!1&&b.setIndex(H,At)}}oe!==W&&k.push({refId:we,op:F,field:N,dynamicIndex:pe,value:W,previousValue:oe})}return this._triggerChanges(k),Q.garbageCollectDeletedRefs(),k},x.prototype.encode=function(m,y,b){m===void 0&&(m=!1),y===void 0&&(y=[]),b===void 0&&(b=!1);for(var k=this.$changes,Q=new WeakSet,Pe=[k],we=1,je=0;je<we;je++){var We=Pe[je],E=We.ref,O=E instanceof x;We.ensureRefId(),Q.add(We),We!==k&&(We.changed||m)&&(ie(y,a),U(y,We.refId));for(var F=Array.from(m?We.allChanges:We.changes.values()),H=0,N=F.length;H<N;H++){var K=m?{op:t.OPERATION.ADD,index:F[H]}:F[H],W=K.index,oe=O?E._definition.fieldsByIndex&&E._definition.fieldsByIndex[W]:W,pe=y.length;if(K.op!==t.OPERATION.TOUCH)if(O)ie(y,W|K.op);else{if(ie(y,K.op),K.op===t.OPERATION.CLEAR)continue;U(y,W)}if(!O&&(K.op&t.OPERATION.ADD)==t.OPERATION.ADD&&E instanceof g){var Se=We.ref.$indexes.get(W);$e(y,Se)}if(K.op!==t.OPERATION.DELETE){var ue=We.getType(W),ce=We.getValue(W);if(ce&&ce.$changes&&!Q.has(ce.$changes)&&(Pe.push(ce.$changes),ce.$changes.ensureRefId(),we++),K.op!==t.OPERATION.TOUCH){if(x.is(ue))xt(ce,ue,E,oe),U(y,ce.$changes.refId),(K.op&t.OPERATION.ADD)===t.OPERATION.ADD&&this.tryEncodeTypeId(y,ue,ce.constructor);else if(typeof ue=="string")Ft(ue,y,ce,E,oe);else{var qe=T(Object.keys(ue)[0]);xt(E["_".concat(oe)],qe.constructor,E,oe),U(y,ce.$changes.refId)}b&&We.cache(W,y.slice(pe))}}}!m&&!b&&We.discard()}return y},x.prototype.encodeAll=function(m){return this.encode(!0,[],m)},x.prototype.applyFilters=function(m,y){var b,k;y===void 0&&(y=!1);for(var Q=this,Pe=new Set,we=se.get(m),je=[this.$changes],We=1,E=[],O=function(H){var N=je[H];if(Pe.has(N.refId))return"continue";var K=N.ref,W=K instanceof x;ie(E,a),U(E,N.refId);var oe=we.refIds.has(N),pe=y||!oe;we.addRefId(N);var Se=we.containerIndexes.get(N),ue=Array.from(pe?N.allChanges:N.changes.values());if(!y&&W&&K._definition.indexesWithFilters){var ce=K._definition.indexesWithFilters;ce.forEach(function(cn){!Se.has(cn)&&N.allChanges.has(cn)&&(pe?ue.push(cn):ue.push({op:t.OPERATION.ADD,index:cn}))})}for(var qe=0,it=ue.length;qe<it;qe++){var st=pe?{op:t.OPERATION.ADD,index:ue[qe]}:ue[qe];if(st.op===t.OPERATION.CLEAR){ie(E,st.op);continue}var ct=st.index;if(st.op===t.OPERATION.DELETE){W?ie(E,st.op|ct):(ie(E,st.op),U(E,ct));continue}var Le=N.getValue(ct),Ce=N.getType(ct);if(W){var gt=K._definition.filters&&K._definition.filters[ct];if(gt&&!gt.call(K,m,Le,Q)){Le&&Le.$changes&&Pe.add(Le.$changes.refId);continue}}else{var rt=N.parent,gt=N.getChildrenFilter();if(gt&&!gt.call(rt,m,K.$indexes.get(ct),Le,Q)){Le&&Le.$changes&&Pe.add(Le.$changes.refId);continue}}if(Le.$changes&&(je.push(Le.$changes),We++),st.op!==t.OPERATION.TOUCH)if(st.op===t.OPERATION.ADD||W)E.push.apply(E,(b=N.caches[ct])!==null&&b!==void 0?b:[]),Se.add(ct);else if(Se.has(ct))E.push.apply(E,(k=N.caches[ct])!==null&&k!==void 0?k:[]);else{if(Se.add(ct),ie(E,t.OPERATION.ADD),U(E,ct),K instanceof g){var At=N.ref.$indexes.get(ct);$e(E,At)}Le.$changes?U(E,Le.$changes.refId):Ot[Ce](E,Le)}else if(Le.$changes&&!W){if(ie(E,t.OPERATION.ADD),U(E,ct),K instanceof g){var At=N.ref.$indexes.get(ct);$e(E,At)}U(E,Le.$changes.refId)}}},F=0;F<We;F++)O(F);return E},x.prototype.clone=function(){var m,y=new this.constructor,b=this._definition.schema;for(var k in b)typeof this[k]=="object"&&typeof((m=this[k])===null||m===void 0?void 0:m.clone)=="function"?y[k]=this[k].clone():y[k]=this[k];return y},x.prototype.toJSON=function(){var m=this._definition.schema,y=this._definition.deprecated,b={};for(var k in m)!y[k]&&this[k]!==null&&typeof this[k]<"u"&&(b[k]=typeof this[k].toJSON=="function"?this[k].toJSON():this["_".concat(k)]);return b},x.prototype.discardAllChanges=function(){this.$changes.discardAll()},x.prototype.getByIndex=function(m){return this[this._definition.fieldsByIndex[m]]},x.prototype.deleteByIndex=function(m){this[this._definition.fieldsByIndex[m]]=void 0},x.prototype.tryEncodeTypeId=function(m,y,b){y._typeid!==b._typeid&&(ie(m,l),U(m,b._typeid))},x.prototype.getSchemaType=function(m,y,b){var k;return m[y.offset]===l&&(y.offset++,k=this.constructor._context.get(ge(m,y))),k||b},x.prototype.createTypeInstance=function(m){var y=new m;return y.$changes.root=this.$changes.root,y},x.prototype._triggerChanges=function(m){for(var y,b,k,Q,Pe,we,je,We,E,O=new Set,F=this.$changes.root.refs,H=function(K){var W=m[K],oe=W.refId,pe=F.get(oe),Se=pe.$callbacks;if((W.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&W.previousValue instanceof x&&((b=(y=W.previousValue.$callbacks)===null||y===void 0?void 0:y[t.OPERATION.DELETE])===null||b===void 0||b.forEach(function(ue){return ue()})),!Se)return"continue";if(pe instanceof x){if(!O.has(oe))try{(k=Se?.[t.OPERATION.REPLACE])===null||k===void 0||k.forEach(function(ue){return ue()})}catch(ue){x.onError(ue)}try{Se.hasOwnProperty(W.field)&&((Q=Se[W.field])===null||Q===void 0||Q.forEach(function(ue){return ue(W.value,W.previousValue)}))}catch(ue){x.onError(ue)}}else W.op===t.OPERATION.ADD&&W.previousValue===void 0?(Pe=Se[t.OPERATION.ADD])===null||Pe===void 0||Pe.forEach(function(ue){var ce;return ue(W.value,(ce=W.dynamicIndex)!==null&&ce!==void 0?ce:W.field)}):W.op===t.OPERATION.DELETE?W.previousValue!==void 0&&((we=Se[t.OPERATION.DELETE])===null||we===void 0||we.forEach(function(ue){var ce;return ue(W.previousValue,(ce=W.dynamicIndex)!==null&&ce!==void 0?ce:W.field)})):W.op===t.OPERATION.DELETE_AND_ADD&&(W.previousValue!==void 0&&((je=Se[t.OPERATION.DELETE])===null||je===void 0||je.forEach(function(ue){var ce;return ue(W.previousValue,(ce=W.dynamicIndex)!==null&&ce!==void 0?ce:W.field)})),(We=Se[t.OPERATION.ADD])===null||We===void 0||We.forEach(function(ue){var ce;return ue(W.value,(ce=W.dynamicIndex)!==null&&ce!==void 0?ce:W.field)})),W.value!==W.previousValue&&((E=Se[t.OPERATION.REPLACE])===null||E===void 0||E.forEach(function(ue){var ce;return ue(W.value,(ce=W.dynamicIndex)!==null&&ce!==void 0?ce:W.field)}));O.add(oe)},N=0;N<m.length;N++)H(N)},x._definition=L.create(),x})();function on(x){for(var m=[x.$changes],y=1,b={},k=b,Q=function(we){var je=m[we];je.changes.forEach(function(We){var E=je.ref,O=We.index,F=E._definition?E._definition.fieldsByIndex[O]:E.$indexes.get(O);k[F]=je.getValue(O)})},Pe=0;Pe<y;Pe++)Q(Pe);return b}var Sn={context:new P},Ni=(function(x){i(m,x);function m(){return x!==null&&x.apply(this,arguments)||this}return r([J("string",Sn)],m.prototype,"name",void 0),r([J("string",Sn)],m.prototype,"type",void 0),r([J("number",Sn)],m.prototype,"referencedType",void 0),m})(mt),an=(function(x){i(m,x);function m(){var y=x!==null&&x.apply(this,arguments)||this;return y.fields=new v,y}return r([J("number",Sn)],m.prototype,"id",void 0),r([J([Ni],Sn)],m.prototype,"fields",void 0),m})(mt),Ss=(function(x){i(m,x);function m(){var y=x!==null&&x.apply(this,arguments)||this;return y.types=new v,y}return m.encode=function(y){var b,k=y.constructor,Q=new m;Q.rootType=k._typeid;var Pe=function(E,O){for(var F in O){var H=new Ni;H.name=F;var N=void 0;if(typeof O[F]=="string")N=O[F];else{var K=O[F],W=void 0;mt.is(K)?(N="ref",W=O[F]):(N=Object.keys(K)[0],typeof K[N]=="string"?N+=":"+K[N]:W=K[N]),H.referencedType=W?W._typeid:-1}H.type=N,E.fields.push(H)}Q.types.push(E)},we=(b=k._context)===null||b===void 0?void 0:b.types;for(var je in we){var We=new an;We.id=Number(je),Pe(We,we[je]._definition.schema)}return Q.encodeAll()},m.decode=function(y,b){var k=new P,Q=new m;Q.decode(y,b);var Pe=Q.types.reduce(function(O,F){var H=(function(K){i(W,K);function W(){return K!==null&&K.apply(this,arguments)||this}return W})(mt),N=F.id;return O[N]=H,k.add(H,N),O},{});Q.types.forEach(function(O){var F=Pe[O.id];O.fields.forEach(function(H){var N;if(H.referencedType!==void 0){var K=H.type,W=Pe[H.referencedType];if(!W){var oe=H.type.split(":");K=oe[0],W=oe[1]}K==="ref"?J(W,{context:k})(F.prototype,H.name):J((N={},N[K]=W,N),{context:k})(F.prototype,H.name)}else J(H.type,{context:k})(F.prototype,H.name)})});var we=Pe[Q.rootType],je=new we;for(var We in we._definition.schema){var E=we._definition.schema[We];typeof E!="string"&&(je[We]=typeof E=="function"?new E:new(T(Object.keys(E)[0])).constructor)}return je},r([J([an],Sn)],m.prototype,"types",void 0),r([J("number",Sn)],m.prototype,"rootType",void 0),m})(mt);A("map",{constructor:g}),A("array",{constructor:v}),A("set",{constructor:j}),A("collection",{constructor:_e}),t.ArraySchema=v,t.CollectionSchema=_e,t.Context=P,t.MapSchema=g,t.Reflection=Ss,t.ReflectionField=Ni,t.ReflectionType=an,t.Schema=mt,t.SchemaDefinition=L,t.SetSchema=j,t.decode=z,t.defineTypes=G,t.deprecated=V,t.dumpChanges=on,t.encode=Ot,t.filter=S,t.filterChildren=R,t.hasFilter=I,t.registerType=A,t.type=J}))})(Gs,Gs.exports)),Gs.exports}var St=Uc(),wt=function(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r},bt=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};class Rt extends St.Schema{constructor(){super(...arguments),this.id="",this.x=0,this.y=0,this.z=0,this.yaw=0,this.pitch=0,this.vx=0,this.vy=0,this.vz=0,this.movementState="grounded",this.animationState="idle",this.animationTimeScale=1,this.shield=100,this.maxShield=100,this.health=50,this.maxHealth=50,this.currentWeapon="rifle",this.ammo=30,this.maxAmmo=30}}wt([St.type("string"),bt("design:type",Object)],Rt.prototype,"id",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"x",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"y",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"z",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"yaw",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"pitch",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"vx",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"vy",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"vz",void 0);wt([St.type("string"),bt("design:type",Object)],Rt.prototype,"movementState",void 0);wt([St.type("string"),bt("design:type",Object)],Rt.prototype,"animationState",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"animationTimeScale",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"shield",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"maxShield",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"health",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"maxHealth",void 0);wt([St.type("string"),bt("design:type",Object)],Rt.prototype,"currentWeapon",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"ammo",void 0);wt([St.type("number"),bt("design:type",Object)],Rt.prototype,"maxAmmo",void 0);class ju extends St.Schema{constructor(){super(...arguments),this.players=new St.MapSchema}}wt([St.type({map:Rt}),bt("design:type",Object)],ju.prototype,"players",void 0);const BS={idle:"idle",walk:"walk",walkBackwards:"walkBackwards",strafeLeft:"strafeLeft",strafeRight:"strafeRight",strafeLeftFast:"strafeLeftFast",strafeRightFast:"strafeRightFast",run:"run",jump:"jump",slide:"slide",crouchForward:"crouchForward",crouchBackward:"crouchBackward",crouchLeft:"crouchLeft",crouchRight:"crouchRight"},Vv={idle:"idleaiming",walk:"walk",walkBackwards:"walkbackwards.001",strafeLeft:"strafeLeft",strafeRight:"strafeRight",strafeLeftFast:"strafeleftfast",strafeRightFast:"straferightfast",run:"run",jump:"jump",slide:"sliding",crouchForward:"crouchforward",crouchBackward:"crouchbackward",crouchLeft:"crouchleft",crouchRight:"crouchright"},Gv=30,Ko=1e3/Gv,Wv=.4,js=1.6,Xv=1,Fc=100,Ku=50,Ju=1.6,$v=.13,qv=.03,sc=.2,io=1.45,Bc=.24,Yv=.02,jv=1250,Kv=3,Zu={accel:95,maxSpeedWalk:8,friction:10,gravity:27,jumpForce:11,coyoteTime:.12,jumpBufferTime:.12,slideInitialSpeed:12,slideSpeedBoost:1.1,slideDecay:.95,slideMinSpeed:2,slideDurationMax:1.8,slideEnterSpeed:6,maxSpeedCrouch:3,slideJumpMultiplier:1.25,slideJumpCooldown:2,slideEnterCooldown:.4},Dt=20,ni=.25,Jv=.001,Zv=[[-Dt,Dt,Dt-ni,Dt+ni],[-Dt,Dt,-Dt-ni,-Dt+ni],[Dt-ni,Dt+ni,-Dt,Dt],[-Dt-ni,-Dt+ni,-Dt,Dt]],Nr=Dt,Is=Dt*2;function Jo(s,e,t){let n=s,i=e,r,o;const a=t+Jv;for(const[l,c,u,h]of Zv)n>=l-a&&n<=c+a&&i>=u-a&&i<=h+a&&(n<l+a?(n=l-a,r=1):n>c-a&&(n=c+a,r=-1),i<u+a?(i=u-a,o=1):i>h-a&&(i=h+a,o=-1));return{x:n,z:i,normalX:r,normalZ:o}}function Zo(s,e){e.normalX!==void 0&&e.normalX!==0&&s.x*e.normalX>0&&(s.x=0),e.normalZ!==void 0&&e.normalZ!==0&&s.z*e.normalZ>0&&(s.z=0)}const Qv="mixamorig:Head",ex="mixamorigHead",tx="Head",nx="mixamorig:HeadTop_End",ix="mixamorigHeadTop_End",sx="HeadTop_End",rx="mixamorig:Spine2",ox="mixamorig:Spine1",ax="mixamorig:Spine",cx="mixamorigSpine2",lx="mixamorigSpine1",hx="mixamorigSpine",ux="Spine2",dx="Spine1",fx="Spine",px="mixamorig:Hips",mx="mixamorigHips",gx="Hips",_x="mixamorig:LeftFoot",vx="mixamorigLeftFoot",xx="LeftFoot",yx="mixamorig:RightFoot",Sx="mixamorigRightFoot",Mx="RightFoot",Qu="mixamorig:RightHand",ed="mixamorigRightHand",td="RightHand",Ex="mixamorig:LeftHand",Ax="mixamorigLeftHand",Tx="LeftHand",ii=0;function wx(s,e){s.slideJumpCooldownTimer>0&&(s.slideJumpCooldownTimer-=e),s.slideEnterCooldownTimer>0&&(s.slideEnterCooldownTimer-=e)}function bx(s,e,t,n){const i=Zu,r=s.ext;if(s.movementState==="sliding"){r.slideTime+=t;const M=Math.hypot(s.vx,s.vz);s.vx*=i.slideDecay,s.vz*=i.slideDecay,s.vy-=i.gravity*t,s.vy=Math.max(s.vy,-55),s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<=ii&&(s.y=ii,s.vy=0);const A=Jo(s.x,s.z,n);s.x=A.x,s.z=A.z;const T={x:s.vx,z:s.vz};Zo(T,A),s.vx=T.x,s.vz=T.z;const L=Math.cos(e.yaw),I=Math.sin(e.yaw),P=e.moveX*L-e.moveZ*I,B=-(e.moveX*I+e.moveZ*L),J=Math.hypot(P,B);if(J>.1&&M>.1&&(P*s.vx+B*s.vz)/(J*M)<.5){s.movementState="grounded",r.slideEnterCooldownTimer=i.slideEnterCooldown;return}const R=M>=i.slideMinSpeed&&r.slideTime<i.slideDurationMax&&s.y<=ii+.01,V=r.slideJumpCooldownTimer<=0;if(e.jump&&R&&V){const G=i.slideJumpMultiplier;s.vy=i.jumpForce*G,s.vx*=G,s.vz*=G,r.horSpeedWhenJumped=Math.hypot(s.vx,s.vz),r.slideJumpCooldownTimer=i.slideJumpCooldown,s.movementState="airborne"}else R||(r.slideEnterCooldownTimer=i.slideEnterCooldown,s.movementState=s.y<=ii+.01?"grounded":"airborne");return}if(s.movementState==="airborne"){e.hasSlideIntent&&(r.slideOnLand=!0);const M=Math.hypot(s.vx,s.vz),A=r.horSpeedWhenJumped;if(M>A&&A>0&&(s.vx*=A/M,s.vz*=A/M),s.vy-=i.gravity*t,s.vy=Math.max(s.vy,-55),s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<=ii){s.y=ii,s.vy=0;const I=Math.hypot(s.vx,s.vz);if(r.slideOnLand&&I>=i.slideEnterSpeed){s.movementState="sliding",r.slideTime=0,r.slideJumpCooldownTimer=0;const P=Math.max(I*i.slideSpeedBoost,i.slideInitialSpeed);I>0&&(s.vx=s.vx/I*P,s.vz=s.vz/I*P)}else s.movementState="grounded";r.slideOnLand=!1}else r.horSpeedWhenJumped===0&&M>0&&(r.horSpeedWhenJumped=M),s.movementState="airborne";const T=Jo(s.x,s.z,n);s.x=T.x,s.z=T.z;const L={x:s.vx,z:s.vz};Zo(L,T),s.vx=L.x,s.vz=L.z;return}const o=Math.hypot(s.vx,s.vz),a=r.slideEnterCooldownTimer<=0;if(e.hasSlideIntent&&a&&o>=i.slideEnterSpeed){s.movementState="sliding",r.slideTime=0;const M=Math.hypot(s.vx,s.vz),A=Math.max(M*i.slideSpeedBoost,i.slideInitialSpeed);M>0&&(s.vx=s.vx/M*A,s.vz=s.vz/M*A);return}const u=e.hasSlideIntent?i.maxSpeedCrouch:i.maxSpeedWalk,h=Math.cos(e.yaw),d=Math.sin(e.yaw),f=(e.moveX*h-e.moveZ*d)*i.accel*t,_=(-e.moveX*d-e.moveZ*h)*i.accel*t;s.vx+=f,s.vz+=_,s.vx*=Math.max(0,1-i.friction*t),s.vz*=Math.max(0,1-i.friction*t);const v=Math.hypot(s.vx,s.vz);v>u&&(s.vx*=u/v,s.vz*=u/v),e.jump?(s.vy=i.jumpForce,r.horSpeedWhenJumped=Math.hypot(s.vx,s.vz),s.movementState="airborne"):s.vy=0,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<=ii?(s.y=ii,s.vy=0,s.movementState="grounded"):(r.horSpeedWhenJumped===0&&(r.horSpeedWhenJumped=Math.hypot(s.vx,s.vz)),s.movementState="airborne");const p=Jo(s.x,s.z,n);s.x=p.x,s.z=p.z;const g={x:s.vx,z:s.vz};Zo(g,p),s.vx=g.x,s.vz=g.z}class Rx{running=!1;lastTime=0;accumulator=0;onTick=()=>{};onRender=()=>{};rafId=0;setTickCallback(e){return this.onTick=e,this}setRenderCallback(e){return this.onRender=e,this}start(){this.running||(this.running=!0,this.lastTime=performance.now(),this.tick(0))}stop(){this.running=!1,this.rafId&&cancelAnimationFrame(this.rafId)}tick=e=>{this.rafId=requestAnimationFrame(this.tick);const t=(e-this.lastTime)/1e3;for(this.lastTime=e,this.accumulator+=Math.min(t,.1);this.accumulator>=Ko/1e3;)this.onTick(Ko/1e3),this.accumulator-=Ko/1e3;this.onRender(t)}}const xi={},ke={serverUrl:xi?.VITE_SERVER_URL??"ws://localhost:2567",debugOverlay:!0,logLevel:"info",playerModelUrl:xi?.VITE_PLAYER_MODEL_URL??"/models/player.glb",viewmodelArmsUrl:(xi?.VITE_VIEWMODEL_ARMS_URL??"/models/vanguard_pov.glb").trim(),viewmodelWeaponUrl:(xi?.VITE_VIEWMODEL_WEAPON_URL??"/models/weapons/rifle.glb").trim(),viewmodelWeaponScale:Number(xi?.VITE_VIEWMODEL_WEAPON_SCALE??"3.6")||3.6,viewmodelWeaponTwoPoint:!1,viewmodelWeaponOffset:{x:.26,y:.23,z:.44},viewmodelWeaponPovOffset:{x:0,y:-.4,z:0},viewmodelWeaponGripOffset:{x:0,y:0,z:0},viewmodelWeaponRotationX:-1.68,viewmodelWeaponRotationY:2.93,viewmodelWeaponRotationZ:2*Math.PI,dummyModelUrl:xi?.VITE_DUMMY_MODEL_URL??"/models/dummy.glb",playerSkin:(xi?.VITE_PLAYER_SKIN??"orange").trim(),animationClipNames:{},thirdPersonWeaponOffset:{x:0,y:0,z:0},thirdPersonWeaponGripOffset:{x:0,y:0,z:0},thirdPersonWeaponScale:1,thirdPersonWeaponRotationX:.19,thirdPersonWeaponRotationY:3.16,thirdPersonWeaponRotationZ:1.45,tuning:{crouchTransitionTau:.04,remoteInterpTau:.05,reconcileThreshold:.05,reconcileLerp:.5,reconcileMin:.01,reconcileLerpGentle:.15},thirdPersonWeaponOffsets:{walkBackwards:{x:0,y:0,z:0,rotX:.09,rotY:3.39,rotZ:1.45,scale:1},crouchForward:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1},crouchBackward:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1},crouchLeft:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1},crouchRight:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1}}},Cx={moveX:0,moveZ:0,sprint:!1,jump:!1,slide:!1,slideJustPressed:!1,slideIntentTicks:0,yaw:0,pitch:0,shoot:!1,reload:!1,debugModeJustPressed:!1},Px=["KeyW","KeyN","KeyT","KeyC","ShiftLeft","ShiftRight","ControlLeft","ControlRight"];function Ix(s){document.addEventListener("keydown",e=>{const t=e.code,n=e.key?.toLowerCase();e.ctrlKey&&(t==="KeyW"||t==="KeyN"||t==="KeyT"||n==="w"||n==="n"||n==="t")&&(e.preventDefault(),e.stopImmediatePropagation())},{capture:!0})}class Lx{state={...Cx};pointerLocked=!1;sensitivity=.002;bound=!1;keysDown=new Set;slideWasDown=!1;_slideIntentTicks=0;getState(){this.state.sprint=!1;const e=this.keysDown.has("ShiftLeft")||this.keysDown.has("ShiftRight")||this.keysDown.has("ControlLeft")||this.keysDown.has("ControlRight")||this.keysDown.has("KeyC");return this.state.slideJustPressed=e&&!this.slideWasDown,this.slideWasDown=e,this.state.slide=e,this.state.slideIntentTicks=this._slideIntentTicks,this.state}tick(){this._slideIntentTicks>0&&this._slideIntentTicks--,this.state.debugModeJustPressed=!1}isPointerLocked(){return this.pointerLocked}requestPointerLock(e){if(this.bound)return;this.bound=!0,e.addEventListener("click",()=>{e.requestPointerLock(),navigator.keyboard?.lock&&navigator.keyboard.lock().then(()=>{}).catch(()=>{navigator.keyboard.lock(Px).catch(()=>{})})}),Ix(),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===e,this.keysDown.clear(),this.slideWasDown=!1,this._slideIntentTicks=0,!this.pointerLocked&&navigator.keyboard?.unlock&&navigator.keyboard.unlock()}),document.addEventListener("mousemove",i=>{this.pointerLocked&&(this.state.yaw-=i.movementX*this.sensitivity,this.state.pitch-=i.movementY*this.sensitivity,this.state.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.state.pitch)))});const t={capture:!0},n=i=>{i.addEventListener("keydown",r=>this.onKey(r.code,!0,r),t),i.addEventListener("keyup",r=>this.onKey(r.code,!1,r),t)};n(document),n(window),n(e),window.addEventListener("keydown",i=>this.preventBrowserShortcuts(i),t),window.addEventListener("blur",()=>this.syncModifiers(!1,!1))}preventBrowserShortcuts(e){const t=e.key?.toLowerCase(),n=e.code;e.ctrlKey&&(n==="KeyW"||n==="KeyN"||n==="KeyT"||t==="w"||t==="n"||t==="t")&&e.preventDefault()}syncModifiers(e,t){this.keysDown.clear(),this.slideWasDown=!1,this._slideIntentTicks=0}isSlideKey(e){return e==="ShiftLeft"||e==="ShiftRight"||e==="ControlLeft"||e==="ControlRight"||e==="KeyC"}onKey(e,t,n){if(!n)return;const i=n.key?.toLowerCase();t?(this.keysDown.add(e),this.isSlideKey(e)&&(this._slideIntentTicks=Math.max(this._slideIntentTicks,10))):this.keysDown.delete(e),e==="KeyW"&&(this.state.moveZ=t?1:this.state.moveZ===1?0:this.state.moveZ),e==="KeyS"&&(this.state.moveZ=t?-1:this.state.moveZ===-1?0:this.state.moveZ),e==="KeyA"&&(this.state.moveX=t?-1:this.state.moveX===-1?0:this.state.moveX),e==="KeyD"&&(this.state.moveX=t?1:this.state.moveX===1?0:this.state.moveX),(e==="ShiftLeft"||e==="ShiftRight"||i==="shift")&&n.preventDefault(),(e==="ControlLeft"||e==="ControlRight"||i==="control")&&n.preventDefault(),e==="KeyC"&&n.preventDefault(),this.pointerLocked&&n.ctrlKey&&(e==="KeyW"||e==="KeyN"||e==="KeyT"||i==="w"||i==="n"||i==="t")&&n.preventDefault(),e==="Space"&&(n.preventDefault(),this.state.jump=t),e==="KeyR"&&(this.state.reload=t),e==="KeyB"&&t&&(n.preventDefault(),this.state.debugModeJustPressed=!0)}setShoot(e){this.state.shoot=e}sampleMouse(e){}consumeOneShoot(){this.state.shoot=!1}}class Dx{camera;targetPosition=new D(0,0,0);yaw=0;pitch=0;smooth=.15;constructor(e=75,t=16/9,n=.1,i=1e3){this.camera=new Gt(e,t,n,i)}setTargetPosition(e,t,n){this.targetPosition.set(e,t,n)}setRotation(e,t){this.yaw=e,this.pitch=t}getAimDirection(){this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0,this.camera.updateMatrixWorld(!0);const e=new D;return this.camera.getWorldDirection(e),e}snapToTarget(){this.camera.position.x=this.targetPosition.x,this.camera.position.y=this.targetPosition.y,this.camera.position.z=this.targetPosition.z,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0,this.camera.updateMatrixWorld()}update(e){this.camera.position.x=eo.lerp(this.camera.position.x,this.targetPosition.x,1-Math.exp(-this.smooth*60*e)),this.camera.position.z=eo.lerp(this.camera.position.z,this.targetPosition.z,1-Math.exp(-this.smooth*60*e)),this.camera.position.y=this.targetPosition.y,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0,this.camera.updateMatrixWorld()}getCamera(){return this.camera}getEyePosition(){return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z}}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}}const Nx=0;class Ox{position={x:0,y:Nx,z:0};velocity={x:0,y:0,z:0};yaw=0;pitch=0;state="grounded";crouching=!1;coyoteTimer=0;jumpBufferTimer=0;ext={slideTime:0,slideEnterCooldownTimer:0,slideJumpCooldownTimer:0,slideOnLand:!1,horSpeedWhenJumped:0};update(e,t,n){const i=Zu;t.jump&&(this.jumpBufferTimer=i.jumpBufferTime),this.state==="grounded"?this.coyoteTimer=i.coyoteTime:this.coyoteTimer-=e,wx(this.ext,e);const r=t.slide||t.slideIntentTicks>0,o=this.jumpBufferTimer>0||t.jump&&this.coyoteTimer>0,a={moveX:t.moveX,moveZ:t.moveZ,jump:o,hasSlideIntent:r,yaw:t.yaw,pitch:t.pitch},l={x:this.position.x,y:this.position.y,z:this.position.z,vx:this.velocity.x,vy:this.velocity.y,vz:this.velocity.z,movementState:this.state,ext:this.ext};bx(l,a,e,Wv),this.position.x=l.x,this.position.y=l.y,this.position.z=l.z,this.velocity.x=l.vx,this.velocity.y=l.vy,this.velocity.z=l.vz,this.state=l.movementState,this.yaw=t.yaw,this.pitch=t.pitch,o&&this.state==="airborne"&&(this.jumpBufferTimer=0),this.state==="airborne"&&(this.jumpBufferTimer-=e),this.crouching=this.state==="sliding"||this.state==="grounded"&&r}getSnapshot(){return{position:{...this.position},velocity:{...this.velocity},yaw:this.yaw,pitch:this.pitch,grounded:this.state==="grounded",state:this.state,crouching:this.crouching}}}class Ux{scene=new z0;renderer;floor;constructor(e){this.renderer=new B0({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight;this.renderer.setSize(t,n),this.renderer.setClearColor(2763317),this.scene.background=new Fe(2763317);const i=new Tv(16777215,.5);this.scene.add(i);const r=new xv(2956110,855322,.35);this.scene.add(r);const o=new qu(16777215,.85);o.position.set(12,25,12),this.scene.add(o);const a=new ir(Is,Is),l=new fs({color:14211292});this.floor=new yt(a,l),this.floor.rotation.x=-Math.PI/2,this.scene.add(this.floor);const c=new zv(Is,Is,9079444,11053232);c.position.y=.001,this.scene.add(c);const u=new Di(Is,4,.5),h=new fs({color:14211292});for(const[d,f]of[[0,Nr],[0,-Nr],[Nr,0],[-Nr,0]]){const _=new yt(u,h);_.position.set(d,2,f),f===0&&(_.rotation.y=Math.PI/2),this.scene.add(_)}this.scene.add(this.createProceduralSkybox())}createProceduralSkybox(){const t=new co(500,32,24),n=new qn({uniforms:{},vertexShader:`
        varying vec3 vDirection;
        void main() {
          vDirection = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vDirection;
        float hash(vec3 p) {
          return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
        }
        void main() {
          vec3 dir = normalize(vDirection);
          float t = dir.y * 0.5 + 0.5;
          vec3 top = vec3(0.15, 0.12, 0.25);
          vec3 bottom = vec3(0.02, 0.02, 0.06);
          vec3 base = mix(bottom, top, t);
          float star = step(0.9985, hash(floor(dir * 180.0)));
          star += step(0.9992, hash(floor(dir * 320.0))) * 0.6;
          base += vec3(star, star * 0.95, star) * 1.2;
          float galaxy = exp(-abs(dir.y) * 2.0) * 0.5 * (0.3 + 0.3 * sin(dir.x * 4.0 + dir.z * 3.0));
          base += vec3(galaxy * 0.4, galaxy * 0.35, galaxy * 0.5);
          gl_FragColor = vec4(base, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,side:Xt,depthWrite:!1}),i=new yt(t,n);return i.frustumCulled=!1,i}render(e){this.renderer.render(this.scene,e)}resize(e,t){this.renderer.setSize(e,t)}getScene(){return this.scene}}let Or=null;function Fx(s){const e=document.createElement("div");e.id="crosshair",e.style.cssText=`
    position: fixed; left: 50%; top: 50%; transform: translate(-50%,-50%);
    width: 24px; height: 24px; pointer-events: none;
  `,e.innerHTML=`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="12" y1="6" x2="12" y2="3" stroke="#8f8" stroke-width="1"/>
      <line x1="12" y1="21" x2="12" y2="18" stroke="#8f8" stroke-width="1"/>
      <line x1="6" y1="12" x2="3" y2="12" stroke="#8f8" stroke-width="1"/>
      <line x1="21" y1="12" x2="18" y2="12" stroke="#8f8" stroke-width="1"/>
      <circle cx="12" cy="12" r="1" fill="#8f8"/>
    </svg>
  `,s.appendChild(e);const t=document.createElement("div");t.id="hud-info",t.style.cssText=`
    position: fixed; bottom: 16px; left: 16px; color: #ccc; font-family: monospace; font-size: 14px;
  `,t.textContent="Shield: 100 | HP: 50 | Ammo: 30/30",s.appendChild(t);const n=document.createElement("div");n.id="respawn-overlay",n.style.cssText=`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 24px 48px;
    background: rgba(0,0,0,0.8);
    border: 2px solid #e91e8c;
    border-radius: 8px;
    color: #fff;
    font-family: monospace;
    font-size: 24px;
    text-align: center;
    pointer-events: none;
    display: none;
    z-index: 10000;
  `,n.innerHTML='<div>Respawn</div><div id="respawn-countdown">3.0</div>',s.appendChild(n)}function Bx(s,e,t,n,i){const r=document.getElementById("hud-info"),o=i?"∞":`${t}/${n}`;r&&(r.textContent=`Shield: ${s} | HP: ${e} | Ammo: ${o}`);const a=document.getElementById("respawn-overlay"),l=document.getElementById("respawn-countdown");if(!(!a||!l))if(e<=0){Or===null&&(Or=performance.now());const c=(performance.now()-Or)/1e3,u=Math.max(0,Kv-c);l.textContent=u.toFixed(1),a.style.display="block"}else Or=null,a.style.display="none"}const zx=.5,kx=84,Hx=10,nd="#4dd0e1",id="#2a9ca8",sd="#c62828",Vx="#9a1f1f",Gx=sd,Wx="rgba(0,0,0,0.6)",Xx=80,$x=-14,qx=.06,Yx=.18,jx=.1,Kx=5,Jx=2,Ur=24;let hi=null;const Qi=new Map;let rd=0;const uh=new D,Fr=new D;function Zx(s){hi=document.createElement("div"),hi.id="player-health-bars",hi.style.cssText="position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:9999;",s.appendChild(hi)}function Qx(s){if(!hi)return;let e=Qi.get(s);if(!e){const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      width: ${kx}px;
      height: ${Hx}px;
      background: rgba(0,0,0,0.6);
      border-radius: 2px;
      overflow: hidden;
      transform-origin: center center;
      opacity: 0;
    `;const n=document.createElement("div");n.style.cssText=`
      position: absolute; left: 0; top: 0; bottom: 0;
      width: 100%; background: ${id}; transition: none;
    `,t.appendChild(n);const i=document.createElement("div");i.style.cssText=`
      position: absolute; left: 0; top: 0; bottom: 0;
      width: 0; background: ${nd}; transition: none;
    `,t.appendChild(i),hi.appendChild(t),e={entityId:s,lastDamagedTime:0,lastDamagedMs:0,element:t,chipEl:n,fillEl:i,smoothedScreenX:0,smoothedScreenY:0,visibilityAlpha:0,chipValue:1,chipDelayRemaining:0,prevShield:Fc,prevHealth:Ku,shieldBreakFlashUntil:0},Qi.set(s,e)}e.lastDamagedTime=performance.now()/1e3,e.lastDamagedMs=rd}function ey(s,e,t){rd+=t*1e3;const n=performance.now()/1e3;if(!hi||!s)return;const i=window.innerWidth,r=window.innerHeight,o=Ur,a=i-Ur,l=Ur,c=r-Ur,u=jv/1e3,h=[];s.state.players.forEach((_,v)=>{const p=Qi.get(v);!p||_.health<=0||n-p.lastDamagedTime>u||h.push(p)}),h.sort((_,v)=>v.lastDamagedTime-_.lastDamagedTime);const d=h.slice(0,Jx);s.state.players.forEach((_,v)=>{const p=Qi.get(v);if(!p)return;const g=_.health>0,M=n-p.lastDamagedTime,A=g&&M<u&&d.includes(p);if(uh.set(_.x,_.y+js+zx,_.z),Fr.copy(uh).project(e),Fr.z>1){p.element.style.opacity="0",p.element.style.pointerEvents="none";return}let T=(Fr.x*.5+.5)*i,L=(1-(Fr.y*.5+.5))*r+$x;T=Math.max(o,Math.min(a,T)),L=Math.max(l,Math.min(c,L));const I=T-p.smoothedScreenX,P=L-p.smoothedScreenY,B=Math.hypot(I,P);if((B>80||p.smoothedScreenX===0&&p.smoothedScreenY===0)&&(p.smoothedScreenX=T,p.smoothedScreenY=L),B<=80){const Y=1-Math.exp(-22*t);p.smoothedScreenX+=(T-p.smoothedScreenX)*Y,p.smoothedScreenY+=(L-p.smoothedScreenY)*Y}(A?1:0)>p.visibilityAlpha?p.visibilityAlpha=Math.min(1,p.visibilityAlpha+t/qx):p.visibilityAlpha=Math.max(0,p.visibilityAlpha-t/Yx),p.element.style.left=`${p.smoothedScreenX}px`,p.element.style.top=`${p.smoothedScreenY}px`,p.element.style.transform="translate(-50%, -50%)",p.element.style.opacity=String(p.visibilityAlpha);const S=_.shield??0,R=_.maxShield??Fc,V=S>0,G=V?S/R:_.health/_.maxHealth;p.element.style.background=V?Gx:Wx,p.fillEl.style.background=V?nd:sd,p.fillEl.style.width=`${G*100}%`,p.chipEl.style.background=V?id:Vx,p.prevShield>0&&S===0&&(p.shieldBreakFlashUntil=n*1e3+Xx,p.chipValue=G,p.chipDelayRemaining=0);const ne=V?S<p.prevShield:_.health<p.prevHealth,$=p.prevShield>0?p.prevShield/R:p.prevHealth/_.maxHealth;ne&&(p.chipValue=$,p.chipDelayRemaining=jx),p.prevShield=S,p.prevHealth=_.health,p.chipDelayRemaining>0?p.chipDelayRemaining-=t:p.chipValue>G&&(p.chipValue=Math.max(G,p.chipValue-Kx*t)),p.chipEl.style.width=`${Math.max(0,Math.min(1,p.chipValue))*100}%`;const ie=n*1e3<p.shieldBreakFlashUntil;p.element.style.boxShadow=ie?"0 0 8px 2px rgba(255,80,80,0.8)":"none"});const f=[];Qi.forEach((_,v)=>{s.state.players.get(v)||(hi?.removeChild(_.element),f.push(v))}),f.forEach(_=>Qi.delete(_))}const dh=1,Qo=45,ty=4,ea="#e53935",Br=36,zr=44,fh=40,ny=9995,iy=.5;let Ci=null;const Mn=[],ta=new D,Ls=new D,sy=new D(0,1,0);let ph=0,rc=null;function ry(){return rc}function mh(s,e,t,n,i){const r=Math.sin(-n),o=Math.cos(-n),a=Math.sin(i),l=Math.cos(i);ta.set(r,o*a,-o*l),Ls.crossVectors(ta,sy),Ls.lengthSq()<1e-10?Ls.set(1,0,0):Ls.normalize();const c=new D(s,e,t),u=c.dot(ta),h=c.dot(Ls);let d=Math.atan2(h,u);return d<0&&(d+=2*Math.PI),d*180/Math.PI}function oy(s){Ci=document.createElement("div"),Ci.id="hit-indicator",Ci.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:${ny};`,s.appendChild(Ci)}function ay(s,e,t){if(!Ci)return;for(;Mn.length>=ty;)Mn.shift().element.remove();const n=document.createElement("div");n.style.cssText=`
    position: absolute;
    left: 50%;
    top: 50%;
    width: ${fh}vmin;
    height: ${fh}vmin;
    transform-origin: center center;
  `;const i=document.createElement("div");i.style.cssText=`
    position: absolute;
    inset: 0;
    background: conic-gradient(
      from ${-Qo/2}deg at 50% 50%,
      ${ea} 0deg,
      ${ea} ${Qo}deg,
      transparent ${Qo}deg
    );
    opacity: 0.55;
    mask: radial-gradient(
      circle,
      transparent 0%,
      transparent ${Br}%,
      rgba(255,255,255,0.4) ${Br}%,
      rgba(255,255,255,0.9) ${zr}%,
      transparent ${zr}%
    );
    -webkit-mask: radial-gradient(
      circle,
      transparent 0%,
      transparent ${Br}%,
      rgba(255,255,255,0.4) ${Br}%,
      rgba(255,255,255,0.9) ${zr}%,
      transparent ${zr}%
    );
  `;const r=16,o=19,a=document.createElement("div");a.style.cssText=`
    position: absolute;
    left: 50%;
    top: calc(${o}% - ${r}px);
    width: 0;
    height: 0;
    margin-left: -${r}px;
    border-left: ${r}px solid transparent;
    border-right: ${r}px solid transparent;
    border-bottom: ${r}px solid ${ea};
    opacity: 0.9;
    pointer-events: none;
  `,n.appendChild(i),n.appendChild(a),Ci.appendChild(n),Mn.push({spawnTime:performance.now()/1e3,dirX:s,dirY:e,dirZ:t,element:n,wedge:i,arrow:a})}function cy(s,e,t,n){if(!Ci)return;const i=performance.now()/1e3;if(n&&Mn.length>0&&i-ph>=iy){ph=i;const r=Mn[Mn.length-1],o=mh(r.dirX,r.dirY,r.dirZ,s,e);console.log(`[HitIndicator] dir=(${r.dirX.toFixed(2)},${r.dirY.toFixed(2)},${r.dirZ.toFixed(2)}) angle=${o.toFixed(1)}°`)}rc=null;for(let r=Mn.length-1;r>=0;r--){const o=Mn[r],a=i-o.spawnTime,l=mh(o.dirX,o.dirY,o.dirZ,s,e);r===Mn.length-1&&(rc=l),o.element.style.transform=`translate(-50%, -50%) rotate(${l}deg)`;const c=Math.max(0,1-a/dh);o.wedge.style.opacity=String(.55*c),o.arrow.style.opacity=String(.9*c),a>=dh&&(o.element.remove(),Mn.splice(r,1))}}let mn=null;function ly(s){mn=document.createElement("div"),mn.id="loading-screen",mn.style.cssText=`
    position: fixed; inset: 0; z-index: 1000;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    background: #0a0a0a; color: #ddd; font-family: system-ui, sans-serif;
  `;const e=document.createElement("div");e.style.cssText=`
    width: 280px; height: 6px; background: #333; border-radius: 3px; overflow: hidden;
    margin-bottom: 24px;
  `;const t=document.createElement("div");t.id="loading-fill",t.style.cssText=`
    width: 0%; height: 100%; background: #4a9; border-radius: 3px;
    transition: width 0.3s ease;
  `,e.appendChild(t);const n=document.createElement("div");n.id="loading-text",n.style.cssText="font-size: 18px; font-weight: 500;",n.textContent="Loading game…",mn.appendChild(e),mn.appendChild(n),s.appendChild(mn)}function Ds(s,e){const t=document.getElementById("loading-text"),n=document.getElementById("loading-fill");t&&(t.textContent=s),n&&e!==void 0&&(n.style.width=`${Math.min(100,Math.max(0,e))}%`)}function hy(){mn&&mn.parentNode&&(mn.parentNode.removeChild(mn),mn=null)}let na=0,ia=performance.now(),gh=0,_h=0;const uy=100;function dy(s){const e=document.createElement("div");e.id="debug-overlay",e.style.cssText=`
    position: fixed; top: 8px; right: 8px; color: #8f8; font-family: monospace; font-size: 12px;
    background: rgba(0,0,0,0.6); padding: 8px; border-radius: 4px;
  `,e.textContent="FPS: 0 | Vel: 0,0,0 | State: grounded",s.appendChild(e)}function fy(s,e,t,n,i,r){na++;const o=performance.now();if(o-ia>=500&&(_h=Math.round(na*1e3/(o-ia)),na=0,ia=o),o-gh<uy)return;gh=o;const a=document.getElementById("debug-overlay");if(a){const l=t!==void 0?` | Sprint: ${t}`:"";let c="";n!==void 0&&(c=` | Net: ${n.connected?"ok":"off"} | In room: ${n.playerCount}`);const u=i?" | [B] Debug: ON":"",h=r!=null?` | Hit: ${r.toFixed(0)}°`:"";a.textContent=`FPS: ${_h} | Vel: ${s.x.toFixed(1)}, ${s.y.toFixed(1)}, ${s.z.toFixed(1)} | State: ${e}${l}${c}${u}${h}`}}const vh=.3,py=16776960,xh=.015,my=65416,gy=16746496,sa=16;function yh(s){const e=new Yt,t=new co($v,sa,sa),n=new An({color:s,transparent:!0,opacity:vh,depthWrite:!1}),i=new sh(t.clone()),r=new er({color:s,transparent:!0,opacity:.85,depthWrite:!1}),o=io-sc,a=(sc+io)/2,l=new Yt;l.position.set(0,Ju,0),l.add(new yt(t,n)),l.add(new ds(i,r)),e.add(l);const c=new Pc(Bc,o,4,sa),u=new An({color:s,transparent:!0,opacity:vh,depthWrite:!1}),h=new Yt,d=new yt(c,u);h.add(d);const f=new sh(c.clone()),_=new er({color:s,transparent:!0,opacity:.85,depthWrite:!1});return h.add(new ds(f,_)),h.position.set(0,a,0),e.add(h),e}const _y=io-sc,vy=_y+2*Bc;function Sh(s,e,t){const n=s.children[0],i=s.children[1];if(t){const{head:r,bodyCenter:o,spineTop:a,pelvis:l,feet:c}=t;s.position.set(0,0,0),n.position.set(r.x,r.y,r.z);const u=a.y+Yv,h=u-c.y,d=(o.x+l.x)/2,f=(c.y+u)/2,_=(o.z+l.z)/2;i.position.set(d,f,_);const v=h+2*Bc;i.scale.set(1,Math.max(.1,v)/vy,1),i.visible=!0}else{s.position.set(e.x,e.y,e.z),n.position.set(0,Ju,0);const r=io/2;i.position.set(0,r,0),i.scale.set(1,1,1),i.visible=!0}}class xy{scene;localGroup;remoteGroups=[];aimRayGroup;visible=!1;maxRemote=16;constructor(e){this.scene=e,this.localGroup=yh(my),this.localGroup.visible=!1,this.scene.add(this.localGroup),this.aimRayGroup=new Yt;const t=new Ic(xh,xh,1,8),n=new An({color:py,transparent:!0,opacity:.9,depthTest:!0});this.aimRayGroup.add(new yt(t,n)),this.aimRayGroup.visible=!1,this.scene.add(this.aimRayGroup);for(let i=0;i<this.maxRemote;i++){const r=yh(gy);r.visible=!1,this.scene.add(r),this.remoteGroups.push(r)}}setVisible(e,t=!1){this.visible=e,this.localGroup.visible=e&&!t,this.aimRayGroup.visible=!1,this.remoteGroups.forEach(n=>n.visible=!1)}update(e,t,n){if(this.visible){e&&Sh(this.localGroup,e,n),t.forEach((i,r)=>{const o=this.remoteGroups[r];o&&(o.visible=!0,Sh(o,{x:i.x,y:i.y,z:i.z},i.hitboxPositions))});for(let i=t.length;i<this.remoteGroups.length;i++)this.remoteGroups[i].visible=!1}}dispose(){this.scene.remove(this.aimRayGroup),this.aimRayGroup.traverse(e=>{e instanceof yt&&(e.geometry?.dispose(),e.material?.dispose())}),this.scene.remove(this.localGroup),this.localGroup.traverse(e=>{(e instanceof yt||e instanceof ds)&&(e.geometry?.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material?.dispose())}),this.remoteGroups.forEach(e=>{this.scene.remove(e),e.traverse(t=>{(t instanceof yt||t instanceof ds)&&(t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material?.dispose())})})}}const Mh={ammo:30,maxAmmo:30};var ra={},Eh={},Ah;function yy(){return Ah||(Ah=1,ArrayBuffer.isView||(ArrayBuffer.isView=s=>s!==null&&typeof s=="object"&&s.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window)),Eh}var Fn={},oa={},Th;function zc(){return Th||(Th=1,(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.ServerError=s.CloseCode=void 0,(function(t){t[t.CONSENTED=4e3]="CONSENTED",t[t.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(s.CloseCode||(s.CloseCode={}));class e extends Error{constructor(n,i){super(i),this.name="ServerError",this.code=n}}s.ServerError=e})(oa)),oa}var dn={},yi={},wh;function Sy(){if(wh)return yi;wh=1,Object.defineProperty(yi,"__esModule",{value:!0}),yi.decode=yi.encode=void 0;function s(c,u){if(this._offset=u,c instanceof ArrayBuffer)this._buffer=c,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(c))this._buffer=c.buffer,this._view=new DataView(this._buffer,c.byteOffset,c.byteLength);else throw new Error("Invalid argument")}function e(c,u,h){for(var d="",f=0,_=u,v=u+h;_<v;_++){var p=c.getUint8(_);if((p&128)===0){d+=String.fromCharCode(p);continue}if((p&224)===192){d+=String.fromCharCode((p&31)<<6|c.getUint8(++_)&63);continue}if((p&240)===224){d+=String.fromCharCode((p&15)<<12|(c.getUint8(++_)&63)<<6|(c.getUint8(++_)&63)<<0);continue}if((p&248)===240){f=(p&7)<<18|(c.getUint8(++_)&63)<<12|(c.getUint8(++_)&63)<<6|(c.getUint8(++_)&63)<<0,f>=65536?(f-=65536,d+=String.fromCharCode((f>>>10)+55296,(f&1023)+56320)):d+=String.fromCharCode(f);continue}throw new Error("Invalid byte "+p.toString(16))}return d}s.prototype._array=function(c){for(var u=new Array(c),h=0;h<c;h++)u[h]=this._parse();return u},s.prototype._map=function(c){for(var u="",h={},d=0;d<c;d++)u=this._parse(),h[u]=this._parse();return h},s.prototype._str=function(c){var u=e(this._view,this._offset,c);return this._offset+=c,u},s.prototype._bin=function(c){var u=this._buffer.slice(this._offset,this._offset+c);return this._offset+=c,u},s.prototype._parse=function(){var c=this._view.getUint8(this._offset++),u,h=0,d=0,f=0,_=0;if(c<192)return c<128?c:c<144?this._map(c&15):c<160?this._array(c&15):this._str(c&31);if(c>223)return(255-c+1)*-1;switch(c){case 192:return null;case 194:return!1;case 195:return!0;case 196:return h=this._view.getUint8(this._offset),this._offset+=1,this._bin(h);case 197:return h=this._view.getUint16(this._offset),this._offset+=2,this._bin(h);case 198:return h=this._view.getUint32(this._offset),this._offset+=4,this._bin(h);case 199:if(h=this._view.getUint8(this._offset),d=this._view.getInt8(this._offset+1),this._offset+=2,d===-1){var v=this._view.getUint32(this._offset);return f=this._view.getInt32(this._offset+4),_=this._view.getUint32(this._offset+8),this._offset+=12,new Date((f*4294967296+_)*1e3+v/1e6)}return[d,this._bin(h)];case 200:return h=this._view.getUint16(this._offset),d=this._view.getInt8(this._offset+2),this._offset+=3,[d,this._bin(h)];case 201:return h=this._view.getUint32(this._offset),d=this._view.getInt8(this._offset+4),this._offset+=5,[d,this._bin(h)];case 202:return u=this._view.getFloat32(this._offset),this._offset+=4,u;case 203:return u=this._view.getFloat64(this._offset),this._offset+=8,u;case 204:return u=this._view.getUint8(this._offset),this._offset+=1,u;case 205:return u=this._view.getUint16(this._offset),this._offset+=2,u;case 206:return u=this._view.getUint32(this._offset),this._offset+=4,u;case 207:return f=this._view.getUint32(this._offset)*Math.pow(2,32),_=this._view.getUint32(this._offset+4),this._offset+=8,f+_;case 208:return u=this._view.getInt8(this._offset),this._offset+=1,u;case 209:return u=this._view.getInt16(this._offset),this._offset+=2,u;case 210:return u=this._view.getInt32(this._offset),this._offset+=4,u;case 211:return f=this._view.getInt32(this._offset)*Math.pow(2,32),_=this._view.getUint32(this._offset+4),this._offset+=8,f+_;case 212:if(d=this._view.getInt8(this._offset),this._offset+=1,d===0){this._offset+=1;return}return[d,this._bin(1)];case 213:return d=this._view.getInt8(this._offset),this._offset+=1,[d,this._bin(2)];case 214:return d=this._view.getInt8(this._offset),this._offset+=1,d===-1?(u=this._view.getUint32(this._offset),this._offset+=4,new Date(u*1e3)):[d,this._bin(4)];case 215:if(d=this._view.getInt8(this._offset),this._offset+=1,d===0)return f=this._view.getInt32(this._offset)*Math.pow(2,32),_=this._view.getUint32(this._offset+4),this._offset+=8,new Date(f+_);if(d===-1){f=this._view.getUint32(this._offset),_=this._view.getUint32(this._offset+4),this._offset+=8;var p=(f&3)*4294967296+_;return new Date(p*1e3+(f>>>2)/1e6)}return[d,this._bin(8)];case 216:return d=this._view.getInt8(this._offset),this._offset+=1,[d,this._bin(16)];case 217:return h=this._view.getUint8(this._offset),this._offset+=1,this._str(h);case 218:return h=this._view.getUint16(this._offset),this._offset+=2,this._str(h);case 219:return h=this._view.getUint32(this._offset),this._offset+=4,this._str(h);case 220:return h=this._view.getUint16(this._offset),this._offset+=2,this._array(h);case 221:return h=this._view.getUint32(this._offset),this._offset+=4,this._array(h);case 222:return h=this._view.getUint16(this._offset),this._offset+=2,this._map(h);case 223:return h=this._view.getUint32(this._offset),this._offset+=4,this._map(h)}throw new Error("Could not parse")};function t(c,u=0){var h=new s(c,u),d=h._parse();if(h._offset!==c.byteLength)throw new Error(c.byteLength-h._offset+" trailing bytes");return d}yi.decode=t;var n=4294967296-1,i=17179869184-1;function r(c,u,h){for(var d=0,f=0,_=h.length;f<_;f++)d=h.charCodeAt(f),d<128?c.setUint8(u++,d):d<2048?(c.setUint8(u++,192|d>>6),c.setUint8(u++,128|d&63)):d<55296||d>=57344?(c.setUint8(u++,224|d>>12),c.setUint8(u++,128|d>>6&63),c.setUint8(u++,128|d&63)):(f++,d=65536+((d&1023)<<10|h.charCodeAt(f)&1023),c.setUint8(u++,240|d>>18),c.setUint8(u++,128|d>>12&63),c.setUint8(u++,128|d>>6&63),c.setUint8(u++,128|d&63))}function o(c){for(var u=0,h=0,d=0,f=c.length;d<f;d++)u=c.charCodeAt(d),u<128?h+=1:u<2048?h+=2:u<55296||u>=57344?h+=3:(d++,h+=4);return h}function a(c,u,h){var d=typeof h,f=0,_=0,v=0,p=0,g=0,M=0;if(d==="string"){if(g=o(h),g<32)c.push(g|160),M=1;else if(g<256)c.push(217,g),M=2;else if(g<65536)c.push(218,g>>8,g),M=3;else if(g<4294967296)c.push(219,g>>24,g>>16,g>>8,g),M=5;else throw new Error("String too long");return u.push({_str:h,_length:g,_offset:c.length}),M+g}if(d==="number")return Math.floor(h)!==h||!isFinite(h)?(c.push(203),u.push({_float:h,_length:8,_offset:c.length}),9):h>=0?h<128?(c.push(h),1):h<256?(c.push(204,h),2):h<65536?(c.push(205,h>>8,h),3):h<4294967296?(c.push(206,h>>24,h>>16,h>>8,h),5):(v=h/Math.pow(2,32)>>0,p=h>>>0,c.push(207,v>>24,v>>16,v>>8,v,p>>24,p>>16,p>>8,p),9):h>=-32?(c.push(h),1):h>=-128?(c.push(208,h),2):h>=-32768?(c.push(209,h>>8,h),3):h>=-2147483648?(c.push(210,h>>24,h>>16,h>>8,h),5):(v=Math.floor(h/Math.pow(2,32)),p=h>>>0,c.push(211,v>>24,v>>16,v>>8,v,p>>24,p>>16,p>>8,p),9);if(d==="object"){if(h===null)return c.push(192),1;if(Array.isArray(h)){if(g=h.length,g<16)c.push(g|144),M=1;else if(g<65536)c.push(220,g>>8,g),M=3;else if(g<4294967296)c.push(221,g>>24,g>>16,g>>8,g),M=5;else throw new Error("Array too large");for(f=0;f<g;f++)M+=a(c,u,h[f]);return M}if(h instanceof Date){var A=h.getTime(),T=Math.floor(A/1e3),L=(A-T*1e3)*1e6;return T>=0&&L>=0&&T<=i?L===0&&T<=n?(c.push(214,255,T>>24,T>>16,T>>8,T),6):(v=T/4294967296,p=T&4294967295,c.push(215,255,L>>22,L>>14,L>>6,v,p>>24,p>>16,p>>8,p),10):(v=Math.floor(T/4294967296),p=T>>>0,c.push(199,12,255,L>>24,L>>16,L>>8,L,v>>24,v>>16,v>>8,v,p>>24,p>>16,p>>8,p),15)}if(h instanceof ArrayBuffer){if(g=h.byteLength,g<256)c.push(196,g),M=2;else if(g<65536)c.push(197,g>>8,g),M=3;else if(g<4294967296)c.push(198,g>>24,g>>16,g>>8,g),M=5;else throw new Error("Buffer too large");return u.push({_bin:h,_length:g,_offset:c.length}),M+g}if(typeof h.toJSON=="function")return a(c,u,h.toJSON());var I=[],P="",B=Object.keys(h);for(f=0,_=B.length;f<_;f++)P=B[f],h[P]!==void 0&&typeof h[P]!="function"&&I.push(P);if(g=I.length,g<16)c.push(g|128),M=1;else if(g<65536)c.push(222,g>>8,g),M=3;else if(g<4294967296)c.push(223,g>>24,g>>16,g>>8,g),M=5;else throw new Error("Object too large");for(f=0;f<g;f++)P=I[f],M+=a(c,u,P),M+=a(c,u,h[P]);return M}if(d==="boolean")return c.push(h?195:194),1;if(d==="undefined")return c.push(192),1;if(typeof h.toJSON=="function")return a(c,u,h.toJSON());throw new Error("Could not encode")}function l(c){var u=[],h=[],d=a(u,h,c),f=new ArrayBuffer(d),_=new DataView(f),v=0,p=0,g=-1;h.length>0&&(g=h[0]._offset);for(var M,A=0,T=0,L=0,I=u.length;L<I;L++)if(_.setUint8(p+L,u[L]),L+1===g){if(M=h[v],A=M._length,T=p+g,M._bin)for(var P=new Uint8Array(M._bin),B=0;B<A;B++)_.setUint8(T+B,P[B]);else M._str?r(_,T,M._str):M._float!==void 0&&_.setFloat64(T,M._float);v++,p+=A,h[v]&&(g=h[v]._offset)}return f}return yi.encode=l,yi}var Ns={},Si={},aa,bh;function My(){return bh||(bh=1,aa=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),aa}var Rh;function Ey(){if(Rh)return Si;Rh=1;var s=Si&&Si.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Si,"__esModule",{value:!0}),Si.WebSocketTransport=void 0;const e=s(My()),t=globalThis.WebSocket||e.default;let n=class{constructor(r){this.events=r}send(r){r instanceof ArrayBuffer?this.ws.send(r):Array.isArray(r)&&this.ws.send(new Uint8Array(r).buffer)}connect(r,o){try{this.ws=new t(r,{headers:o,protocols:this.protocols})}catch{this.ws=new t(r,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(r,o){this.ws.close(r,o)}get isOpen(){return this.ws.readyState===t.OPEN}};return Si.WebSocketTransport=n,Si}var Ch;function Ay(){if(Ch)return Ns;Ch=1,Object.defineProperty(Ns,"__esModule",{value:!0}),Ns.Connection=void 0;const s=Ey();let e=class{constructor(){this.events={},this.transport=new s.WebSocketTransport(this.events)}send(n){this.transport.send(n)}connect(n,i){this.transport.connect(n,i)}close(n,i){this.transport.close(n,i)}get isOpen(){return this.transport.isOpen}};return Ns.Connection=e,Ns}var ca={},Ph;function od(){return Ph||(Ph=1,(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.utf8Length=s.utf8Read=s.ErrorCode=s.Protocol=void 0,(function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(s.Protocol||(s.Protocol={})),(function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(s.ErrorCode||(s.ErrorCode={}));function e(n,i){const r=n[i++];for(var o="",a=0,l=i,c=i+r;l<c;l++){var u=n[l];if((u&128)===0){o+=String.fromCharCode(u);continue}if((u&224)===192){o+=String.fromCharCode((u&31)<<6|n[++l]&63);continue}if((u&240)===224){o+=String.fromCharCode((u&15)<<12|(n[++l]&63)<<6|(n[++l]&63)<<0);continue}if((u&248)===240){a=(u&7)<<18|(n[++l]&63)<<12|(n[++l]&63)<<6|(n[++l]&63)<<0,a>=65536?(a-=65536,o+=String.fromCharCode((a>>>10)+55296,(a&1023)+56320)):o+=String.fromCharCode(a);continue}throw new Error("Invalid byte "+u.toString(16))}return o}s.utf8Read=e;function t(n=""){let i=0,r=0;for(let o=0,a=n.length;o<a;o++)i=n.charCodeAt(o),i<128?r+=1:i<2048?r+=2:i<55296||i>=57344?r+=3:(o++,r+=4);return r+1}s.utf8Length=t})(ca)),ca}var Mi={},Ih;function ad(){if(Ih)return Mi;Ih=1,Object.defineProperty(Mi,"__esModule",{value:!0}),Mi.getSerializer=Mi.registerSerializer=void 0;const s={};function e(n,i){s[n]=i}Mi.registerSerializer=e;function t(n){const i=s[n];if(!i)throw new Error("missing serializer: "+n);return i}return Mi.getSerializer=t,Mi}var Os={},Lh;function cd(){if(Lh)return Os;Lh=1,Object.defineProperty(Os,"__esModule",{value:!0}),Os.createNanoEvents=void 0;const s=()=>({emit(e,...t){let n=this.events[e]||[];for(let i=0,r=n.length;i<r;i++)n[i](...t)},events:{},on(e,t){var n;return!((n=this.events[e])===null||n===void 0)&&n.push(t)||(this.events[e]=[t]),()=>{var i;this.events[e]=(i=this.events[e])===null||i===void 0?void 0:i.filter(r=>t!==r)}}});return Os.createNanoEvents=s,Os}var Ei={},Dh;function Ty(){if(Dh)return Ei;Dh=1,Object.defineProperty(Ei,"__esModule",{value:!0}),Ei.createSignal=Ei.EventEmitter=void 0;class s{constructor(){this.handlers=[]}register(n,i=!1){return this.handlers.push(n),this}invoke(...n){this.handlers.forEach(i=>i.apply(this,n))}invokeAsync(...n){return Promise.all(this.handlers.map(i=>i.apply(this,n)))}remove(n){const i=this.handlers.indexOf(n);this.handlers[i]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}Ei.EventEmitter=s;function e(){const t=new s;function n(i){return t.register(i,this===null)}return n.once=i=>{const r=function(...o){i.apply(this,o),t.remove(r)};t.register(r)},n.remove=i=>t.remove(i),n.invoke=(...i)=>t.invoke(...i),n.invokeAsync=(...i)=>t.invokeAsync(...i),n.clear=()=>t.clear(),n}return Ei.createSignal=e,Ei}var Nh;function hd(){if(Nh)return dn;Nh=1;var s=dn&&dn.__createBinding||(Object.create?(function(d,f,_,v){v===void 0&&(v=_);var p=Object.getOwnPropertyDescriptor(f,_);(!p||("get"in p?!f.__esModule:p.writable||p.configurable))&&(p={enumerable:!0,get:function(){return f[_]}}),Object.defineProperty(d,v,p)}):(function(d,f,_,v){v===void 0&&(v=_),d[v]=f[_]})),e=dn&&dn.__setModuleDefault||(Object.create?(function(d,f){Object.defineProperty(d,"default",{enumerable:!0,value:f})}):function(d,f){d.default=f}),t=dn&&dn.__importStar||function(d){if(d&&d.__esModule)return d;var f={};if(d!=null)for(var _ in d)_!=="default"&&Object.prototype.hasOwnProperty.call(d,_)&&s(f,d,_);return e(f,d),f};Object.defineProperty(dn,"__esModule",{value:!0}),dn.Room=void 0;const n=t(Sy()),i=Ay(),r=od(),o=ad(),a=cd(),l=Ty(),c=Uc(),u=zc();let h=class ld{constructor(f,_){this.onStateChange=(0,l.createSignal)(),this.onError=(0,l.createSignal)(),this.onLeave=(0,l.createSignal)(),this.onJoin=(0,l.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,a.createNanoEvents)(),this.roomId=null,this.name=f,_&&(this.serializer=new((0,o.getSerializer)("schema")),this.rootSchema=_,this.serializer.state=new _),this.onError((v,p)=>{var g;return(g=console.warn)===null||g===void 0?void 0:g.call(console,`colyseus.js - onError => (${v}) ${p}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(f,_,v=this,p){const g=new i.Connection;v.connection=g,g.events.onmessage=ld.prototype.onMessageCallback.bind(v),g.events.onclose=function(M){var A;if(!v.hasJoined){(A=console.warn)===null||A===void 0||A.call(console,`Room connection was closed unexpectedly (${M.code}): ${M.reason}`),v.onError.invoke(M.code,M.reason);return}M.code===u.CloseCode.DEVMODE_RESTART&&_?_():(v.onLeave.invoke(M.code,M.reason),v.destroy())},g.events.onerror=function(M){var A;(A=console.warn)===null||A===void 0||A.call(console,`Room, onError (${M.code}): ${M.reason}`),v.onError.invoke(M.code,M.reason)},g.connect(f,p)}leave(f=!0){return new Promise(_=>{this.onLeave(v=>_(v)),this.connection?f?this.connection.send([r.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(u.CloseCode.CONSENTED)})}onMessage(f,_){return this.onMessageHandlers.on(this.getMessageHandlerKey(f),_)}send(f,_){const v=[r.Protocol.ROOM_DATA];typeof f=="string"?c.encode.string(v,f):c.encode.number(v,f);let p;if(_!==void 0){const g=n.encode(_);p=new Uint8Array(v.length+g.byteLength),p.set(new Uint8Array(v),0),p.set(new Uint8Array(g),v.length)}else p=new Uint8Array(v);this.connection.send(p.buffer)}sendBytes(f,_){const v=[r.Protocol.ROOM_DATA_BYTES];typeof f=="string"?c.encode.string(v,f):c.encode.number(v,f);let p;p=new Uint8Array(v.length+(_.byteLength||_.length)),p.set(new Uint8Array(v),0),p.set(new Uint8Array(_),v.length),this.connection.send(p.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(f){const _=Array.from(new Uint8Array(f.data)),v=_[0];if(v===r.Protocol.JOIN_ROOM){let p=1;const g=(0,r.utf8Read)(_,p);if(p+=(0,r.utf8Length)(g),this.serializerId=(0,r.utf8Read)(_,p),p+=(0,r.utf8Length)(this.serializerId),!this.serializer){const M=(0,o.getSerializer)(this.serializerId);this.serializer=new M}_.length>p&&this.serializer.handshake&&this.serializer.handshake(_,{offset:p}),this.reconnectionToken=`${this.roomId}:${g}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([r.Protocol.JOIN_ROOM])}else if(v===r.Protocol.ERROR){const p={offset:1},g=c.decode.number(_,p),M=c.decode.string(_,p);this.onError.invoke(g,M)}else if(v===r.Protocol.LEAVE_ROOM)this.leave();else if(v===r.Protocol.ROOM_DATA_SCHEMA){const p={offset:1},M=this.serializer.getState().constructor._context.get(c.decode.number(_,p)),A=new M;A.decode(_,p),this.dispatchMessage(M,A)}else if(v===r.Protocol.ROOM_STATE)_.shift(),this.setState(_);else if(v===r.Protocol.ROOM_STATE_PATCH)_.shift(),this.patch(_);else if(v===r.Protocol.ROOM_DATA){const p={offset:1},g=c.decode.stringCheck(_,p)?c.decode.string(_,p):c.decode.number(_,p),M=_.length>p.offset?n.decode(f.data,p.offset):void 0;this.dispatchMessage(g,M)}else if(v===r.Protocol.ROOM_DATA_BYTES){const p={offset:1},g=c.decode.stringCheck(_,p)?c.decode.string(_,p):c.decode.number(_,p);this.dispatchMessage(g,new Uint8Array(_.slice(p.offset)))}}setState(f){this.serializer.setState(f),this.onStateChange.invoke(this.serializer.getState())}patch(f){this.serializer.patch(f),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(f,_){var v;const p=this.getMessageHandlerKey(f);this.onMessageHandlers.events[p]?this.onMessageHandlers.emit(p,_):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",f,_):(v=console.warn)===null||v===void 0||v.call(console,`colyseus.js: onMessage() not registered for type '${f}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(f){switch(typeof f){case"function":return`$${f._typeid}`;case"string":return f;case"number":return`i${f}`;default:throw new Error("invalid message type.")}}};return dn.Room=h,dn}var fn={};function Oh(s,e){e.headers=s.headers||{},e.statusMessage=s.statusText,e.statusCode=s.status,e.data=s.response}function yn(s,e,t){return new Promise(function(n,i){t=t||{};var r=new XMLHttpRequest,o,a,l,c=t.body,u=t.headers||{};t.timeout&&(r.timeout=t.timeout),r.ontimeout=r.onerror=function(h){h.timeout=h.type=="timeout",i(h)},r.open(s,e.href||e),r.onload=function(){for(l=r.getAllResponseHeaders().trim().split(/[\r\n]+/),Oh(r,r);a=l.shift();)a=a.split(": "),r.headers[a.shift().toLowerCase()]=a.join(": ");if(a=r.headers["content-type"],a&&~a.indexOf("application/json"))try{r.data=JSON.parse(r.data,t.reviver)}catch(h){return Oh(r,h),i(h)}(r.status>=400?i:n)(r)},typeof FormData<"u"&&c instanceof FormData||c&&typeof c=="object"&&(u["content-type"]="application/json",c=JSON.stringify(c)),r.withCredentials=!!t.withCredentials;for(o in u)r.setRequestHeader(o,u[o]);r.send(c)})}var wy=yn.bind(yn,"GET"),by=yn.bind(yn,"POST"),Ry=yn.bind(yn,"PATCH"),Cy=yn.bind(yn,"DELETE"),Py=yn.bind(yn,"PUT");const Iy=Object.freeze(Object.defineProperty({__proto__:null,del:Cy,get:wy,patch:Ry,post:by,put:Py,send:yn},Symbol.toStringTag,{value:"Module"})),Ly=kv(Iy);var Uh;function Dy(){if(Uh)return fn;Uh=1;var s=fn&&fn.__createBinding||(Object.create?(function(o,a,l,c){c===void 0&&(c=l);var u=Object.getOwnPropertyDescriptor(a,l);(!u||("get"in u?!a.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return a[l]}}),Object.defineProperty(o,c,u)}):(function(o,a,l,c){c===void 0&&(c=l),o[c]=a[l]})),e=fn&&fn.__setModuleDefault||(Object.create?(function(o,a){Object.defineProperty(o,"default",{enumerable:!0,value:a})}):function(o,a){o.default=a}),t=fn&&fn.__importStar||function(o){if(o&&o.__esModule)return o;var a={};if(o!=null)for(var l in o)l!=="default"&&Object.prototype.hasOwnProperty.call(o,l)&&s(a,o,l);return e(a,o),a};Object.defineProperty(fn,"__esModule",{value:!0}),fn.HTTP=void 0;const n=zc(),i=t(Ly);let r=class{constructor(a,l={}){this.client=a,this.headers=l}get(a,l={}){return this.request("get",a,l)}post(a,l={}){return this.request("post",a,l)}del(a,l={}){return this.request("del",a,l)}put(a,l={}){return this.request("put",a,l)}request(a,l,c={}){return i[a](this.client.getHttpEndpoint(l),this.getOptions(c)).catch(u=>{var h;const d=u.statusCode,f=((h=u.data)===null||h===void 0?void 0:h.error)||u.statusMessage||u.message;throw!d&&!f?u:new n.ServerError(d,f)})}getOptions(a){return a.headers=Object.assign({},this.headers,a.headers),this.authToken&&(a.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(a.withCredentials=!0),a}};return fn.HTTP=r,fn}var pn={},Bn={},Fh;function Ny(){if(Fh)return Bn;Fh=1,Object.defineProperty(Bn,"__esModule",{value:!0}),Bn.getItem=Bn.removeItem=Bn.setItem=void 0;let s;function e(){if(!s)try{s=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return s||(s={cache:{},setItem:function(r,o){this.cache[r]=o},getItem:function(r){this.cache[r]},removeItem:function(r){delete this.cache[r]}}),s}function t(r,o){e().setItem(r,o)}Bn.setItem=t;function n(r){e().removeItem(r)}Bn.removeItem=n;function i(r,o){const a=e().getItem(r);typeof Promise>"u"||!(a instanceof Promise)?o(a):a.then(l=>o(l))}return Bn.getItem=i,Bn}var Bh;function ud(){if(Bh)return pn;Bh=1;var s=pn&&pn.__awaiter||function(u,h,d,f){function _(v){return v instanceof d?v:new d(function(p){p(v)})}return new(d||(d=Promise))(function(v,p){function g(T){try{A(f.next(T))}catch(L){p(L)}}function M(T){try{A(f.throw(T))}catch(L){p(L)}}function A(T){T.done?v(T.value):_(T.value).then(g,M)}A((f=f.apply(u,h||[])).next())})},e=pn&&pn.__classPrivateFieldGet||function(u,h,d,f){if(d==="a"&&!f)throw new TypeError("Private accessor was defined without a getter");if(typeof h=="function"?u!==h||!f:!h.has(u))throw new TypeError("Cannot read private member from an object whose class did not declare it");return d==="m"?f:d==="a"?f.call(u):f?f.value:h.get(u)},t=pn&&pn.__classPrivateFieldSet||function(u,h,d,f,_){if(f==="m")throw new TypeError("Private method is not writable");if(f==="a"&&!_)throw new TypeError("Private accessor was defined without a setter");if(typeof h=="function"?u!==h||!_:!h.has(u))throw new TypeError("Cannot write private member to an object whose class did not declare it");return f==="a"?_.call(u,d):_?_.value=d:h.set(u,d),d},n,i,r,o;Object.defineProperty(pn,"__esModule",{value:!0}),pn.Auth=void 0;const a=Ny(),l=cd();let c=class{constructor(h){this.http=h,this.settings={path:"/auth",key:"colyseus-auth-token"},n.set(this,!1),i.set(this,void 0),r.set(this,void 0),o.set(this,(0,l.createNanoEvents)()),(0,a.getItem)(this.settings.key,d=>this.token=d)}set token(h){this.http.authToken=h}get token(){return this.http.authToken}onChange(h){const d=e(this,o,"f").on("change",h);return e(this,n,"f")||t(this,i,new Promise((f,_)=>{this.getUserData().then(v=>{this.emitChange(Object.assign(Object.assign({},v),{token:this.token}))}).catch(v=>{this.emitChange({user:null,token:void 0})}).finally(()=>{f()})}),"f"),t(this,n,!0,"f"),d}getUserData(){return s(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(h,d,f){return s(this,void 0,void 0,function*(){const _=(yield this.http.post(`${this.settings.path}/register`,{body:{email:h,password:d,options:f}})).data;return this.emitChange(_),_})}signInWithEmailAndPassword(h,d){return s(this,void 0,void 0,function*(){const f=(yield this.http.post(`${this.settings.path}/login`,{body:{email:h,password:d}})).data;return this.emitChange(f),f})}signInAnonymously(h){return s(this,void 0,void 0,function*(){const d=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:h}})).data;return this.emitChange(d),d})}sendPasswordResetEmail(h){return s(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:h}})).data})}signInWithProvider(h,d={}){return s(this,void 0,void 0,function*(){return new Promise((f,_)=>{const v=d.width||480,p=d.height||768,g=this.token?`?token=${this.token}`:"",M=`Login with ${h[0].toUpperCase()+h.substring(1)}`,A=this.http.client.getHttpEndpoint(`${d.prefix||`${this.settings.path}/provider`}/${h}${g}`),T=screen.width/2-v/2,L=screen.height/2-p/2;t(this,r,window.open(A,M,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+v+", height="+p+", top="+L+", left="+T),"f");const I=B=>{B.data.user===void 0&&B.data.token===void 0||(clearInterval(P),e(this,r,"f").close(),t(this,r,void 0,"f"),window.removeEventListener("message",I),B.data.error!==void 0?_(B.data.error):(f(B.data),this.emitChange(B.data)))},P=setInterval(()=>{(!e(this,r,"f")||e(this,r,"f").closed)&&(t(this,r,void 0,"f"),_("cancelled"),window.removeEventListener("message",I))},200);window.addEventListener("message",I)})})}signOut(){return s(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(h){h.token!==void 0&&(this.token=h.token,h.token===null?(0,a.removeItem)(this.settings.key):(0,a.setItem)(this.settings.key,h.token)),e(this,o,"f").emit("change",h)}};return pn.Auth=c,n=new WeakMap,i=new WeakMap,r=new WeakMap,o=new WeakMap,pn}var Us={},zh;function Oy(){if(zh)return Us;zh=1,Object.defineProperty(Us,"__esModule",{value:!0}),Us.discordURLBuilder=void 0;function s(e){var t;const n=((t=window?.location)===null||t===void 0?void 0:t.hostname)||"localhost",i=e.hostname.split("."),r=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&i.length>2?`/${i[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${n}${r}${e.pathname}${e.search}`:`${e.protocol}//${n}/.proxy/colyseus${r}${e.pathname}${e.search}`}return Us.discordURLBuilder=s,Us}var kh;function Uy(){if(kh)return Fn;kh=1;var s=Fn&&Fn.__awaiter||function(u,h,d,f){function _(v){return v instanceof d?v:new d(function(p){p(v)})}return new(d||(d=Promise))(function(v,p){function g(T){try{A(f.next(T))}catch(L){p(L)}}function M(T){try{A(f.throw(T))}catch(L){p(L)}}function A(T){T.done?v(T.value):_(T.value).then(g,M)}A((f=f.apply(u,h||[])).next())})},e;Object.defineProperty(Fn,"__esModule",{value:!0}),Fn.Client=Fn.MatchMakeError=void 0;const t=zc(),n=hd(),i=Dy(),r=ud(),o=Oy();class a extends Error{constructor(h,d){super(h),this.code=d,Object.setPrototypeOf(this,a.prototype)}}Fn.MatchMakeError=a;const l=typeof window<"u"&&typeof((e=window?.location)===null||e===void 0?void 0:e.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let c=class{constructor(h=l,d){var f,_;if(typeof h=="string"){const v=h.startsWith("/")?new URL(h,l):new URL(h),p=v.protocol==="https:"||v.protocol==="wss:",g=Number(v.port||(p?443:80));this.settings={hostname:v.hostname,pathname:v.pathname,port:g,secure:p}}else h.port===void 0&&(h.port=h.secure?443:80),h.pathname===void 0&&(h.pathname=""),this.settings=h;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new i.HTTP(this,d?.headers||{}),this.auth=new r.Auth(this.http),this.urlBuilder=d?.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((_=(f=window?.location)===null||f===void 0?void 0:f.hostname)===null||_===void 0)&&_.includes("discordsays.com"))&&(this.urlBuilder=o.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(h,d={},f){return s(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",h,d,f)})}create(h,d={},f){return s(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",h,d,f)})}join(h,d={},f){return s(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",h,d,f)})}joinById(h,d={},f){return s(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",h,d,f)})}reconnect(h,d){return s(this,void 0,void 0,function*(){if(typeof h=="string"&&typeof d=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[f,_]=h.split(":");if(!f||!_)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",f,{reconnectionToken:_},d)})}getAvailableRooms(h=""){return s(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${h}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(h,d,f){return s(this,void 0,void 0,function*(){const _=this.createRoom(h.room.name,d);_.roomId=h.room.roomId,_.sessionId=h.sessionId;const v={sessionId:_.sessionId};h.reconnectionToken&&(v.reconnectionToken=h.reconnectionToken);const p=f||_;return _.connect(this.buildEndpoint(h.room,v),h.devMode&&(()=>s(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${_.roomId}'...`);let g=0,M=8;const A=()=>s(this,void 0,void 0,function*(){g++;try{yield this.consumeSeatReservation(h,d,p),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${_.roomId}'`)}catch{g<M?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${g} out of ${M})`),setTimeout(A,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(A,2e3)})),p,this.http.headers),new Promise((g,M)=>{const A=(T,L)=>M(new t.ServerError(T,L));p.onError.once(A),p.onJoin.once(()=>{p.onError.remove(A),g(p)})})})}createMatchMakeRequest(h,d,f={},_,v){return s(this,void 0,void 0,function*(){const p=(yield this.http.post(`matchmake/${h}/${d}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(f)})).data;if(p.error)throw new a(p.error,p.code);return h==="reconnect"&&(p.reconnectionToken=f.reconnectionToken),yield this.consumeSeatReservation(p,_,v)})}createRoom(h,d){return new n.Room(h,d)}buildEndpoint(h,d={}){const f=[];for(const p in d)d.hasOwnProperty(p)&&f.push(`${p}=${d[p]}`);let _=this.settings.secure?"wss://":"ws://";h.publicAddress?_+=`${h.publicAddress}`:_+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const v=`${_}/${h.processId}/${h.roomId}?${f.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(v)):v}getHttpEndpoint(h=""){const d=h.startsWith("/")?h:`/${h}`,f=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${d}`;return this.urlBuilder?this.urlBuilder(new URL(f)):f}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return Fn.Client=c,Fn}var Fs={},Hh;function Fy(){if(Hh)return Fs;Hh=1,Object.defineProperty(Fs,"__esModule",{value:!0}),Fs.SchemaSerializer=void 0;const s=Uc();let e=class{setState(n){return this.state.decode(n)}getState(){return this.state}patch(n){return this.state.decode(n)}teardown(){var n,i;(i=(n=this.state)===null||n===void 0?void 0:n.$changes)===null||i===void 0||i.root.clearRefs()}handshake(n,i){this.state?new s.Reflection().decode(n,i):this.state=s.Reflection.decode(n,i)}};return Fs.SchemaSerializer=e,Fs}var Bs={},Vh;function By(){if(Vh)return Bs;Vh=1,Object.defineProperty(Bs,"__esModule",{value:!0}),Bs.NoneSerializer=void 0;let s=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return Bs.NoneSerializer=s,Bs}var Gh;function zy(){return Gh||(Gh=1,(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.SchemaSerializer=s.registerSerializer=s.Auth=s.Room=s.ErrorCode=s.Protocol=s.MatchMakeError=s.Client=void 0,yy();var e=Uy();Object.defineProperty(s,"Client",{enumerable:!0,get:function(){return e.Client}}),Object.defineProperty(s,"MatchMakeError",{enumerable:!0,get:function(){return e.MatchMakeError}});var t=od();Object.defineProperty(s,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),Object.defineProperty(s,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}});var n=hd();Object.defineProperty(s,"Room",{enumerable:!0,get:function(){return n.Room}});var i=ud();Object.defineProperty(s,"Auth",{enumerable:!0,get:function(){return i.Auth}});const r=Fy();Object.defineProperty(s,"SchemaSerializer",{enumerable:!0,get:function(){return r.SchemaSerializer}});const o=By(),a=ad();Object.defineProperty(s,"registerSerializer",{enumerable:!0,get:function(){return a.registerSerializer}}),(0,a.registerSerializer)("schema",r.SchemaSerializer),(0,a.registerSerializer)("none",o.NoneSerializer)})(ra)),ra}var ky=zy();class Hy{client=null;room=null;connect(e){this.client=new ky.Client(e)}async joinOrCreate(e){if(!this.client)return!1;try{return this.room=await this.client.joinOrCreate(e,{},ju),!0}catch(t){return console.error("Colyseus joinOrCreate failed:",t),!1}}sendInput(e){this.room?.send("input",e)}getRoom(){return this.room}disconnect(){this.room?.leave(),this.room=null}}function Vy(s,e,t,n,i,r,o){const a={tick:e,moveX:s.moveX,moveZ:s.moveZ,sprint:s.sprint,jump:s.jump,slide:s.slide,slideIntentTicks:s.slideIntentTicks>0?s.slideIntentTicks:void 0,yaw:s.yaw,pitch:s.pitch,shoot:s.shoot,reload:s.reload};if(t&&(a.clientX=t.x,a.clientY=t.y,a.clientZ=t.z),i&&(a.aimDirX=i.x,a.aimDirY=i.y,a.aimDirZ=i.z),s.shoot&&i){a.shootAimX=i.x,a.shootAimY=i.y,a.shootAimZ=i.z;const l=o??t;l&&(a.shootClientX=l.x,a.shootClientY=l.y,a.shootClientZ=l.z)}if(r&&(a.debugMode=!0),n&&t){const l=_=>({x:_.x-t.x,y:_.y-t.y,z:_.z-t.z}),c=l(n.head),u=l(n.bodyCenter),h=l(n.spineTop),d=l(n.pelvis),f=l(n.feet);a.headX=c.x,a.headY=c.y,a.headZ=c.z,a.bodyCenterX=u.x,a.bodyCenterY=u.y,a.bodyCenterZ=u.z,a.spineTopX=h.x,a.spineTopY=h.y,a.spineTopZ=h.z,a.pelvisX=d.x,a.pelvisY=d.y,a.pelvisZ=d.z,a.feetX=f.x,a.feetY=f.y,a.feetZ=f.z}return a}function si(s,e){for(const t of e){const n=s.getBoneByName(t);if(n)return n}}function dd(s){let e=null;return s.traverse(t=>{const n=t;n.isSkinnedMesh&&n.skeleton&&!e&&(e=n.skeleton)}),e}function Gy(s){const e=dd(s);return e?e.getBoneByName(Qu)??e.getBoneByName(ed)??e.getBoneByName(td)??null:null}function Wy(s){let e=s;for(;e.parent;)e=e.parent;e.updateMatrixWorld(!0)}function Wh(s){if(!s)return null;const e=dd(s);if(!e)return null;const t=si(e,[Qv,ex,tx]),n=si(e,[nx,ix,sx]),i=si(e,[ax,hx,fx]),r=si(e,[ox,lx,dx]),o=si(e,[rx,cx,ux]),a=si(e,[px,mx,gx]);if(!t||!a)return null;const l=i??r??o;if(!l)return null;Wy(s);const c=new D;if(c.setFromMatrixPosition(t.matrixWorld),n){const M=new D().setFromMatrixPosition(n.matrixWorld);c.add(M).multiplyScalar(.5)}const u=new D;t.getWorldDirection(u),c.addScaledVector(u,qv);const h=new D;h.setFromMatrixPosition(a.matrixWorld);const d=new D;if(i&&r){const M=new D().setFromMatrixPosition(i.matrixWorld),A=new D().setFromMatrixPosition(r.matrixWorld);d.addVectors(M,A).multiplyScalar(.5)}else d.setFromMatrixPosition(l.matrixWorld);const f=new D,_=o??r??i;f.setFromMatrixPosition(_.matrixWorld);const v=si(e,[_x,vx,xx]),p=si(e,[yx,Sx,Mx]),g=new D;if(v&&p){const M=new D().setFromMatrixPosition(v.matrixWorld),A=new D().setFromMatrixPosition(p.matrixWorld);g.addVectors(M,A).multiplyScalar(.5)}else v?g.setFromMatrixPosition(v.matrixWorld):p?g.setFromMatrixPosition(p.matrixWorld):g.copy(h).lerp(new D(h.x,h.y-.9,h.z),1);return{head:c,bodyCenter:d,spineTop:f,pelvis:h,feet:g}}function Xh(s,e){if(e===Jd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ja||e===gu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ja)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Xy extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ky(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new eS(t)}),this.register(function(t){return new tS(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new iS(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new hS(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ys.extractUrlBase(e);o=Ys.resolveURL(c,this.path)}else o=Ys.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Xu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===fd){try{o[Ke.KHR_BINARY_GLTF]=new uS(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new AS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ke.KHR_MATERIALS_UNLIT:o[h]=new Yy;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[h]=new dS(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[h]=new fS;break;case Ke.KHR_MESH_QUANTIZATION:o[h]=new pS;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function $y(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class qy{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Fe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ut);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qu(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ev(u),c.distance=h;break;case"spot":c=new Sv(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Hn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Yy{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return An}extendParams(e,t,n){const i=[];e.color=new Fe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ut),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(i)}}class jy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Ky{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(r)}}class Jy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Zy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Qy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ut)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Vt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class eS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class tS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],Ut),Promise.all(r)}}class nS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class iS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],Ut),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Vt)),Promise.all(r)}}class sS{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class rS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class oS{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class aS{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class cS{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lS{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class hS{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==nn.TRIANGLES&&c.mode!==nn.TRIANGLE_STRIP&&c.mode!==nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const _ of h){const v=new He,p=new D,g=new jt,M=new D(1,1,1),A=new X0(_.geometry,_.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,T),l.SCALE&&M.fromBufferAttribute(l.SCALE,T),A.setMatrixAt(T,v.compose(p,g,M));for(const T in l)if(T==="_COLOR_0"){const L=l[T];A.instanceColor=new ec(L.array,L.itemSize,L.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&_.geometry.setAttribute(T,l[T]);vt.prototype.copy.call(A,_),this.parser.assignFinalMaterial(A),f.push(A)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const fd="glTF",zs=12,$h={JSON:1313821514,BIN:5130562};class uS{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-zs,r=new DataView(e,zs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===$h.JSON){const c=new Uint8Array(e,zs+o,a);this.content=n.decode(c)}else if(l===$h.BIN){const c=zs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=oc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=oc[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=is[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const _ in f.attributes){const v=f.attributes[_],p=l[_];p!==void 0&&(v.normalized=p)}h(f)},a,c,Ut,d)})})}}class fS{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class pS{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class pd extends sr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,_=e*c,v=_-c,p=-2*f+3*d,g=f-d,M=1-p,A=g-d+h;for(let T=0;T!==a;T++){const L=o[v+T+a],I=o[v+T+l]*u,P=o[_+T+a],B=o[_+T]*u;r[T]=M*L+A*I+p*P+g*B}return r}}const mS=new jt;class gS extends pd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return mS.fromArray(r).normalize().toArray(r),r}}const nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qh={9728:Wt,9729:Qt,9984:ru,9985:kr,9986:Hs,9987:Gn},Yh={33071:ci,33648:Yr,10497:as},la={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},oc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_S={CUBICSPLINE:void 0,LINEAR:Zs,STEP:Js},ha={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new fs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xn})),s.DefaultMaterial}function Ai(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function yS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function SS(s){let e;const t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ua(t.attributes):e=s.indices+":"+ua(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ua(s.targets[n]);return e}function ua(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ac(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function MS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const ES=new He;class AS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $y,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new $u(this.options.manager):this.textureLoader=new wv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ai(r,a,i),Hn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Ys.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=la[i.type],a=is[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new $t(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=la[i.type],c=is[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let v,p;if(f&&f!==h){const g=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let A=t.cache.get(M);A||(v=new c(a,g*f,i.count*f/u),A=new k0(v,f/u),t.cache.add(M,A)),p=new Ac(A,l,d%f/u,_)}else a===null?v=new c(i.count*l):v=new c(a,d,i.count*l),p=new $t(v,l,_);if(i.sparse!==void 0){const g=la.SCALAR,M=is[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,L=new M(o[1],A,i.sparse.count*g),I=new c(o[2],T,i.sparse.count*l);a!==null&&(p=new $t(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let P=0,B=L.length;P<B;P++){const J=L[P];if(p.setX(J,I[P*l]),l>=2&&p.setY(J,I[P*l+1]),l>=3&&p.setZ(J,I[P*l+2]),l>=4&&p.setW(J,I[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=_}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=qh[d.magFilter]||Qt,u.minFilter=qh[d.minFilter]||Gn,u.wrapS=Yh[d.wrapS]||as,u.wrapT=Yh[d.wrapT]||as,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(v){const p=new Nt(v);p.needsUpdate=!0,d(p)}),t.load(Ys.resolveURL(h,r.path),_,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Hn(h,o),h.userData.mimeType=o.mimeType||MS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Fu,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new er,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return fs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const h=i[Ke.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ut),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Vt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=sn);const u=r.alphaMode||ha.OPAQUE;if(u===ha.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ha.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==An&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new be(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==An&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==An){const h=r.emissiveFactor;a.emissive=new Fe().setRGB(h[0],h[1],h[2],Ut)}return r.emissiveTexture!==void 0&&o!==An&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Hn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ai(i,h,r),h})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return jh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=SS(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=jh(new qt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?vS(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,_=u.length;f<_;f++){const v=u[f],p=o[f];let g;const M=c[f];if(p.mode===nn.TRIANGLES||p.mode===nn.TRIANGLE_STRIP||p.mode===nn.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new V0(v,M):new yt(v,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===nn.TRIANGLE_STRIP?g.geometry=Xh(g.geometry,gu):p.mode===nn.TRIANGLE_FAN&&(g.geometry=Xh(g.geometry,Ja));else if(p.mode===nn.LINES)g=new ds(v,M);else if(p.mode===nn.LINE_STRIP)g=new wc(v,M);else if(p.mode===nn.LINE_LOOP)g=new $0(v,M);else if(p.mode===nn.POINTS)g=new q0(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&yS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Hn(g,r),p.extensions&&Ai(i,g,p),t.assignFinalMaterial(g),h.push(g)}for(let f=0,_=h.length;f<_;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ai(i,h[0],r),h[0];const d=new Yt;r.extensions&&Ai(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,_=h.length;f<_;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(eo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Mc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new He;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Tc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],_=i.samplers[f.sampler],v=f.target,p=v.node,g=i.parameters!==void 0?i.parameters[_.input]:_.input,M=i.parameters!==void 0?i.parameters[_.output]:_.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],_=h[2],v=h[3],p=h[4],g=[];for(let M=0,A=d.length;M<A;M++){const T=d[M],L=f[M],I=_[M],P=v[M],B=p[M];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const J=n._createAnimationTracks(T,L,I,P,B);if(J)for(let S=0;S<J.length;S++)g.push(J[S])}return new nc(r,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ES)});for(let f=0,_=h.length;f<_;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Ou:c.length>1?u=new Yt:c.length===1?u=c[0]:u=new vt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Hn(u,r),r.extensions&&Ai(n,u,r),r.matrix!==void 0){const h=new He;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Yt;n.name&&(r.name=i.createUniqueName(n.name)),Hn(r,n),n.extensions&&Ai(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof Tn||d instanceof Nt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];ri[r.path]===ri.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ri[r.path]){case ri.weights:c=ps;break;case ri.rotation:c=ms;break;case ri.position:case ri.scale:c=gs;break;default:switch(n.itemSize){case 1:c=ps;break;case 2:case 3:default:c=gs;break}break}const u=i.interpolation!==void 0?_S[i.interpolation]:Zs,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const _=new c(l[d]+"."+ri[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ac(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ms?gS:pd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function TS(s,e,t){const n=e.attributes,i=new Yn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const u=ac(is[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const v=ac(is[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new bn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function jh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=oc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return at.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Hn(s,e),TS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?xS(s,e.targets,t):s})}const kc=new Xy,wS=new $u;function tr(){const s=new Di(.5,1.8,.5),e=new fs({color:8947967});return new yt(s,e)}async function bS(s){if(!s.trim())return{scene:tr(),animations:[]};try{const e=await kc.loadAsync(s);return{scene:e.scene,animations:e.animations??[]}}catch{return{scene:tr(),animations:[]}}}async function RS(s){if(!s.trim())return{scene:tr(),animations:[]};try{const e=await kc.loadAsync(s),t=e.animations??[];return{scene:e.scene,animations:t}}catch{return{scene:tr(),animations:[]}}}async function Kh(s){if(!s.trim())return null;try{return(await kc.loadAsync(s)).scene}catch{return null}}const CS="/models/skins",Jh=new Map;async function Hc(s){if(!s)return null;const e=Jh.get(s);if(e)return e;try{const t=await wS.loadAsync(`${CS}/${s}.png`);return t.flipY=!1,Jh.set(s,t),t}catch{return null}}async function PS(s,e){const t=await Hc(e);return t?(Vc(s,t),!0):!1}function Vc(s,e){s.traverse(t=>{const n=t;if(!n.isMesh)return;const i=Array.isArray(n.material)?n.material:[n.material],r=[];for(const o of i){const a=o;if(!a)continue;const l=a.clone();l.map=e,r.push(l)}r.length===1?n.material=r[0]:r.length>1&&(n.material=r)})}const IS=.15,LS=2.5,DS=.5,NS=.9;function oi(s){return s.toLowerCase().replace(/\s+/g,"")}class Gc{clipsById=new Map;clipNames;currentActions=new Map;crossfadeDuration;constructor(e={},t=IS){this.clipNames={...Vv,...e},this.crossfadeDuration=t}findIdleClip(e){if(!e.length)return;const t=e.find(i=>oi(i.name)==="idleaiming");if(t)return t;const n=e.find(i=>oi(i.name)==="idle");return n||e[0]}init(e){this.clipsById.clear();const t=new Map;for(const r of e){t.set(oi(r.name),r);const o=r.name.split("|").pop();o&&o!==r.name&&t.set(oi(o),r)}for(const[r,o]of Object.entries(this.clipNames)){const a=oi(o);let l=e.find(c=>c.name===o)??t.get(a)??e.find(c=>{const u=oi(c.name),h=c.name.split("|").pop()??"";return u===a||oi(h)===a});l&&this.clipsById.set(r,l)}const n=this.findIdleClip(e);!this.clipsById.has("idle")&&n&&this.clipsById.set("idle",n);const i=e.find(r=>oi(r.name)==="slide");!this.clipsById.has("slide")&&i&&this.clipsById.set("slide",i)}findClip(e){return this.clipsById.get(e)??Array.from(this.clipsById.values()).find(t=>t.name===e)}updateJumpSync(e,t,n){const i=t.duration*DS,r=t.duration*NS;Math.abs(n)<LS?(e.timeScale=0,e.time<i&&(e.time=i)):(e.timeScale=1,n<0&&e.time<i&&(e.time=i),e.time>r&&(e.time=r,e.timeScale=0))}static STRAFE_SLOW_SCALE=.7;playStaticIdlePose(e){const t=this.findClip("idle");if(!t)return;const n=this.currentActions.get(e),i=e.clipAction(t);n!==i&&(n&&n.fadeOut(.06),i.setLoop(Ka,1/0),i.reset().fadeIn(0).play(),this.currentActions.set(e,i)),i.time=0,i.timeScale=0}playClip(e,t,n){let i=this.findClip(t),r=t;if(!i&&(i=this.findClip("idle"),r="idle",!i))return;const o=this.currentActions.get(e),a=e.clipAction(i);if(o!==a){a.setLoop(r==="jump"?mu:Ka,r==="jump"?1:1/0);const u=this.findClip("jump"),d=o&&u&&o.getClip()===u?.06:this.crossfadeDuration;o&&o.fadeOut(d),a.reset().fadeIn(d).play(),this.currentActions.set(e,a)}r==="jump"&&n?.vy!==void 0&&this.updateJumpSync(a,i,n.vy),r==="strafeLeftFast"||r==="strafeRightFast"?n?.timeScale!==void 0?a.timeScale=n.timeScale:n?.sprint===!1?a.timeScale=Gc.STRAFE_SLOW_SCALE:a.timeScale=1:r==="idle"&&(a.timeScale=1)}updateMixers(e,t){for(const n of e)n.update(t)}}class OS{sceneManager;movement;playerAnimationSystem;playerTemplate=null;weaponTemplate3P=null;remotePlayerMeshes=new Map;remotePlayerMixers=new Map;remotePlayerWeaponContainers=new Map;hasAppliedInitialSpawn=!1;_handPos3p=new D;_handQuat3p=new jt;_offsetVec3p=new D;constructor(e){this.sceneManager=e.sceneManager,this.movement=e.movement,this.playerAnimationSystem=e.playerAnimationSystem}setPlayerAnimationSystem(e){this.playerAnimationSystem=e}setPlayerTemplate(e){this.playerTemplate=e}setWeaponTemplate3P(e){this.weaponTemplate3P=e}getRemotePlayerMeshes(){return this.remotePlayerMeshes}getThirdPersonWeaponCfg(e){const t=ke.thirdPersonWeaponOffsets[e];return t||{x:ke.thirdPersonWeaponOffset.x,y:ke.thirdPersonWeaponOffset.y,z:ke.thirdPersonWeaponOffset.z,rotX:ke.thirdPersonWeaponRotationX,rotY:ke.thirdPersonWeaponRotationY,rotZ:ke.thirdPersonWeaponRotationZ,scale:ke.thirdPersonWeaponScale}}addRemotePlayerMesh(e,t,n){if(e===t||this.remotePlayerMeshes.has(e))return;const i=this.sceneManager.getScene();let r;this.playerTemplate?(r=Oc(this.playerTemplate),r.updateMatrixWorld(!0),Hc("orange").then(a=>{a&&Vc(r,a)})):(r=tr(),r.material.color.setHex(16737792)),r.position.set(n.x,n.y,n.z),r.rotation.set(0,n.yaw+Math.PI,0),i.add(r),this.remotePlayerMeshes.set(e,r);const o=new ic(r);if(this.playerAnimationSystem.playClip(o,n.animationState||"idle"),this.remotePlayerMixers.set(e,o),this.weaponTemplate3P){const a=Gy(r),l=this.weaponTemplate3P.clone(!0),c=new Yt;c.add(l),i.add(c),l.traverse(u=>{u.frustumCulled=!1;const h=u;if(h.isMesh){const d=Array.isArray(h.material)?h.material:[h.material];for(const f of d)f&&"side"in f&&(f.side=sn)}}),this.remotePlayerWeaponContainers.set(e,{container:c,weaponScene:l,rightHandBone:a})}}removeRemotePlayerMesh(e){const t=this.sceneManager.getScene(),n=this.remotePlayerMeshes.get(e),i=this.remotePlayerMixers.get(e);n&&(t.remove(n),this.remotePlayerMeshes.delete(e)),i&&(i.stopAllAction(),this.remotePlayerMixers.delete(e));const r=this.remotePlayerWeaponContainers.get(e);r&&(t.remove(r.container),this.remotePlayerWeaponContainers.delete(e))}setup(e){const t=e.sessionId,n=(r,o)=>{this.addRemotePlayerMesh(o,t,r)},i=(r,o)=>{this.removeRemotePlayerMesh(o)};e.state.players.onAdd(n,!0),e.state.players.onRemove(i)}syncLocalSpawnFromServer(e){const t=e.state.players.get(e.sessionId);if(!t)return;const n=this.movement;n.position.x=t.x,n.position.y=t.y,n.position.z=t.z,n.velocity.x=t.vx,n.velocity.y=t.vy,n.velocity.z=t.vz,n.yaw=t.yaw,n.pitch=t.pitch,this.hasAppliedInitialSpawn=!0}waitForLocalSpawnAndSync(e){return e.state.players.get(e.sessionId)?(this.syncLocalSpawnFromServer(e),Promise.resolve()):new Promise(n=>{const i=(o,a)=>{a===e.sessionId&&(r(),this.syncLocalSpawnFromServer(e),n())},r=e.state.players.onAdd(i,!0)})}reconcile(e){if(!e)return;const t=e.state.players.get(e.sessionId);if(!t)return;const n=this.movement;if(!this.hasAppliedInitialSpawn){this.syncLocalSpawnFromServer(e);return}const i=t.x-n.position.x,r=t.y-n.position.y,o=t.z-n.position.z,a=Math.sqrt(i*i+r*r+o*o),{reconcileMin:l,reconcileThreshold:c,reconcileLerp:u,reconcileLerpGentle:h}=ke.tuning;if(a<=l)return;const d=a>=c?u:h;n.position.x+=i*d,n.position.y+=r*d,n.position.z+=o*d,n.velocity.x+=(t.vx-n.velocity.x)*d,n.velocity.y+=(t.vy-n.velocity.y)*d,n.velocity.z+=(t.vz-n.velocity.z)*d,n.yaw+=((t.yaw-n.yaw+Math.PI)%(2*Math.PI)-Math.PI)*d,n.pitch+=(t.pitch-n.pitch)*d}update(e,t){if(!e)return;const n=e.sessionId,i=1-Math.exp(-t/ke.tuning.remoteInterpTau);e.state.players.forEach((a,l)=>{if(l===n)return;let c=this.remotePlayerMeshes.get(l);if(c||(this.addRemotePlayerMesh(l,n,a),c=this.remotePlayerMeshes.get(l)),c){c.visible=a.health>0;const u=this.remotePlayerWeaponContainers.get(l);if(u&&(u.container.visible=c.visible),c.visible){c.position.lerp(new D(a.x,a.y,a.z),i);const d=(a.yaw+Math.PI-c.rotation.y+Math.PI)%(2*Math.PI)-Math.PI;c.rotation.y+=d*i;const f=this.remotePlayerMixers.get(l);if(f){const _=a.animationState||"idle",v={};_==="jump"&&(v.vy=a.vy),a.animationTimeScale!==1&&(v.timeScale=a.animationTimeScale),this.playerAnimationSystem.playClip(f,_,Object.keys(v).length?v:void 0)}if(u){c.updateMatrixWorld(!0);const _=u.rightHandBone,v=this.getThirdPersonWeaponCfg(a.animationState||"idle"),p=ke.thirdPersonWeaponGripOffset;_&&(_.getWorldPosition(this._handPos3p),_.getWorldQuaternion(this._handQuat3p),this._offsetVec3p.set(v.x,v.y,v.z).applyQuaternion(this._handQuat3p),u.container.position.copy(this._handPos3p).add(this._offsetVec3p),u.container.quaternion.copy(this._handQuat3p)),u.weaponScene.position.set(p.x,p.y,p.z),u.weaponScene.rotation.set(Math.PI/2+v.rotX,v.rotY,v.rotZ),u.weaponScene.scale.setScalar(v.scale)}}}});const r=[],o=new Set;e.state.players.forEach((a,l)=>o.add(String(l))),this.remotePlayerMeshes.forEach((a,l)=>{o.has(String(l))||r.push(l)}),r.forEach(a=>this.removeRemotePlayerMesh(a))}updateRemoteMixers(e){this.remotePlayerMixers.forEach(t=>t.update(e))}}const lc={x:.37,y:-5.34,z:.55,rotX:-.03,rotY:2.968,rotZ:-.02,scale:3.21};async function US(s,e,t){const n=t.getCamera();let i=s,r=e;if(ke.viewmodelArmsUrl){const f=await RS(ke.viewmodelArmsUrl);f.animations.length>0&&f.scene&&(i=f.scene,r=f.animations)}const o=i!==s,a=Oc(i);if(a.updateMatrixWorld(!0),ke.playerSkin){const f=await Hc(ke.playerSkin);f&&Vc(a,f)}o?(a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.setScalar(1)):(a.position.set(0,-js*.5,-.4),a.rotation.set(0,0,0),a.scale.setScalar(1));const l=new Yt;if(l.add(a),o){const f=lc;l.position.set(f.x,f.y,f.z),l.rotation.set(f.rotX,f.rotY,f.rotZ),l.scale.setScalar(f.scale)}else l.position.set(0,0,0),l.quaternion.identity(),l.scale.setScalar(1);n.add(l),a.traverse(f=>{f.frustumCulled=!1;const _=f;_.isMesh&&(_.renderOrder=100)});let c=null,u=null,h=!1,d=null;if(o&&ke.viewmodelWeaponUrl){const f=await Kh(ke.viewmodelWeaponUrl);if(f){f.rotation.x=Math.PI/2,f.rotation.z=-Math.PI/2;let _=null,v=null;a.traverse(T=>{const L=T;L.isSkinnedMesh&&L.skeleton&&!_&&(_=L.skeleton.getBoneByName(Qu)??L.skeleton.getBoneByName(ed)??L.skeleton.getBoneByName(td)??null,v=L.skeleton.getBoneByName(Ex)??L.skeleton.getBoneByName(Ax)??L.skeleton.getBoneByName(Tx)??null)});const p=f.getObjectByName("gripleft"),g=new Yt;g.add(f),c=g;const M=ke.viewmodelWeaponScale??1,A=ke.viewmodelWeaponTwoPoint&&_&&v&&p&&p.position.lengthSq()>1e-6;if(o){u=null,h=!0,t.getCamera().add(g);const T=ke.viewmodelWeaponGripOffset??{x:0,y:0,z:0};f.position.set(T.x,T.y,T.z),f.scale.setScalar(M)}else if(A&&_&&v&&p){const T=p.position.clone();u={rightHand:_,leftHand:v,gripleft:p,gLeftLocal:T},h=!1,a.add(g)}else if(u=null,h=!1,_){_.add(g);const T=ke.viewmodelWeaponOffset;g.position.set(T.x,T.y,T.z);const L=ke.viewmodelWeaponGripOffset??{x:0,y:0,z:0};f.position.set(L.x,L.y,L.z),f.scale.setScalar(M)}else a.add(g),g.position.set(.25,-.15,.35),f.scale.setScalar(M);f.traverse(T=>{T.frustumCulled=!1;const L=T;if(L.isMesh){L.renderOrder=101;const I=Array.isArray(L.material)?L.material:[L.material];for(const P of I)P&&"side"in P&&(P.side=sn)}}),d=f.clone(!0)}}if(ke.viewmodelWeaponUrl&&!d){const f=await Kh(ke.viewmodelWeaponUrl);f&&(f.rotation.x=Math.PI/2,f.rotation.z=-Math.PI/2,d=f)}return{viewmodelModel:a,viewmodelAnimations:r,viewmodelState:{playerViewModel:a,viewmodelHolder:l,viewmodelIsArmsOnly:o,weaponContainerRef:c,twoPointRefs:u,weaponPovDecoupled:h},weaponTemplate3P:d}}const da=new D,ks=new D,Zh=new D,Qh=new jt,eu=new jt;function FS(s){const{viewmodelHolder:e,viewmodelIsArmsOnly:t,weaponContainerRef:n,twoPointRefs:i,weaponPovDecoupled:r,playerViewModel:o}=s;if(e&&t){const a=lc;e.position.set(a.x,a.y,a.z),e.rotation.set(a.rotX,a.rotY,a.rotZ),e.scale.setScalar(a.scale)}if(t&&n&&r){const a=ke.viewmodelWeaponOffset,l=ke.viewmodelWeaponPovOffset??{x:0,y:0,z:0};n.position.set(.25+a.x+l.x,-.4+a.y+l.y,-.7+a.z+l.z),n.rotation.set(0,0,0);const c=ke.viewmodelWeaponGripOffset??{x:0,y:0,z:0},u=ke.viewmodelWeaponRotationX??0,h=ke.viewmodelWeaponRotationY??0,d=ke.viewmodelWeaponRotationZ??0,f=ke.viewmodelWeaponScale??1,_=n.children[0];if(_){const v=_;v.position.set(c.x,c.y,c.z),v.rotation.set(Math.PI/2+u,h,d),v.scale.setScalar(f)}}else if(!i&&n){const a=ke.viewmodelWeaponOffset;n.position.set(a.x,a.y,a.z);const l=ke.viewmodelWeaponGripOffset??{x:0,y:0,z:0},c=ke.viewmodelWeaponRotationX??0,u=ke.viewmodelWeaponRotationY??0,h=ke.viewmodelWeaponRotationZ??0,d=n.children[0];if(d){const f=d;f.position.set(l.x,l.y,l.z),f.rotation.set(Math.PI/2+c,u,h)}}if(i&&n&&o){const{rightHand:a,leftHand:l,gLeftLocal:c}=i;a.getWorldPosition(da),l.getWorldPosition(ks),ks.sub(da);const u=ks.length(),h=c.length();if(u>1e-6&&h>1e-6){const f=lc.scale,_=u/(f*h),v=Math.max(.5,Math.min(_,50));ks.normalize(),Zh.copy(c).normalize(),Qh.setFromUnitVectors(Zh,ks),n.position.copy(da),o.worldToLocal(n.position),o.getWorldQuaternion(eu),n.quaternion.copy(eu).invert().multiply(Qh);const p=n.children[0];p&&p.scale.setScalar(v)}}}const Vn=document.getElementById("app");if(!Vn)throw new Error("No #app");const kn=document.createElement("canvas");Vn.appendChild(kn);const tu=new URLSearchParams(window.location.search).get("tuner");if(tu==="1")$c(()=>import("./TunerBoot-GYc2QB-Y.js"),__vite__mapDeps([0,1])).then(s=>s.bootTuner(Vn,kn));else if(tu==="3p")$c(()=>import("./Tuner3PBoot-CVGvqtXL.js"),__vite__mapDeps([2,1])).then(s=>s.bootTuner3P(Vn,kn));else{let s=function(){const S=kn.clientWidth||window.innerWidth,R=kn.clientHeight||window.innerHeight;return{w:S,h:R}},e=function(){l.disconnect()};const{w:t,h:n}=s(),i=new Ux(kn),r=new Dx(90,t/n||16/9,.1,1e3);i.getScene().add(r.getCamera()),i.resize(t,n),r.resize(t,n);const o=new Lx;o.requestPointerLock(kn);const a=new Ox,l=new Hy,c=new OS({sceneManager:i,movement:a,playerAnimationSystem:void 0});window.addEventListener("beforeunload",S=>{e(),o.isPointerLocked()&&(S.preventDefault(),S.returnValue="")}),window.addEventListener("pagehide",e),kn.addEventListener("mousedown",S=>S.button===0&&o.setShoot(!0)),kn.addEventListener("mouseup",S=>S.button===0&&o.setShoot(!1)),ly(Vn),Fx(Vn),Zx(Vn),oy(Vn),ke.debugOverlay&&dy(Vn);const u=new xy(i.getScene());let h=!1,d=null,f=null;const _={raycast:()=>!1},v=new Rx;let p=0,g=js,M=null,A=null,T=null,L=null,I,P=null,B=null;async function J(){Ds("Loading characters and arena…",15);const S=await bS(ke.playerModelUrl);L=S.scene;const R=S.animations,V=await US(L,R,r);if(M=V.viewmodelState.playerViewModel,A=V.viewmodelState,Ds("Loading characters and arena…",40),I=new Gc(ke.animationClipNames),I.init(V.viewmodelAnimations),c.setPlayerTemplate(L),c.setWeaponTemplate3P(V.weaponTemplate3P),c.setPlayerAnimationSystem(I),V.viewmodelAnimations.length>0&&(T=new ic(V.viewmodelModel),I.playStaticIdlePose(T)),L){const G=Oc(L);G.visible=!1,i.getScene().add(G),P=G,R.length>0&&(B=new ic(G),I.playStaticIdlePose(B))}}v.setTickCallback(S=>{const R=o.getState();R.debugModeJustPressed&&(h=!h),a.update(S,R,_);const V=a.getSnapshot(),G=V.crouching?Xv:js;g=eo.lerp(g,G,1-Math.exp(-S/ke.tuning.crouchTransitionTau)),r.setTargetPosition(V.position.x,V.position.y+g,V.position.z),r.setRotation(V.yaw,V.pitch);const q=l.getRoom();if(q){const ne=r.getAimDirection(),$=d??void 0,ie=R.shoot?r.getEyePosition():void 0,Y=Vy(R,p,V.position,$??void 0,{x:ne.x,y:ne.y,z:ne.z},h,ie);l.sendInput(Y),Y.shoot&&o.consumeOneShoot(),p++,c.reconcile(q)}o.tick()}).setRenderCallback(S=>{const R=a.getSnapshot();if(T&&I.playStaticIdlePose(T),r.update(S),T&&T.update(S),M&&M.updateMatrixWorld(!0),A&&FS(A),c.updateRemoteMixers(S),P){P.position.set(R.position.x,R.position.y,R.position.z),P.rotation.set(0,R.yaw+Math.PI,0),B&&(I.playStaticIdlePose(B),B.update(S));const ae=Wh(P);ae?(f=ae,d={head:{x:ae.head.x,y:ae.head.y,z:ae.head.z},bodyCenter:{x:ae.bodyCenter.x,y:ae.bodyCenter.y,z:ae.bodyCenter.z},spineTop:{x:ae.spineTop.x,y:ae.spineTop.y,z:ae.spineTop.z},pelvis:{x:ae.pelvis.x,y:ae.pelvis.y,z:ae.pelvis.z},feet:{x:ae.feet.x,y:ae.feet.y,z:ae.feet.z}}):(f=null,d=null)}else f=null,d=null;c.update(l.getRoom(),S),u.setVisible(h,A?.viewmodelIsArmsOnly??!1);const V=l.getRoom(),G=h?a.position:null,q=V?Array.from(V.state.players.entries()).filter(([ae])=>ae!==V.sessionId).filter(([,ae])=>ae.health>0).map(([ae,Xe])=>{const et=c.getRemotePlayerMeshes().get(ae),Z=et?Wh(et):void 0;return{id:ae,x:Xe.x,y:Xe.y,z:Xe.z,hitboxPositions:Z??void 0}}):[];u.update(G,q,f??void 0),i.render(r.getCamera()),ey(l.getRoom(),r.getCamera(),S);const ne=l.getRoom(),$=ne?ne.state.players.get(ne.sessionId):null,ie=$?.shield??Fc,Y=$?.health??Ku,ye=$?.ammo??Mh.ammo,me=$?.maxAmmo??Mh.maxAmmo;if(Bx(ie,Y,ye,me,h),cy(R.yaw,R.pitch,S,h),ke.debugOverlay){const ae=ne!==null?{connected:!0,playerCount:ne.state.players.size}:{connected:!1,playerCount:0};fy(R.velocity,R.state,o.getState().sprint,ae,h,ry())}}),window.addEventListener("resize",()=>{const{w:S,h:R}=s();r.resize(S,R),i.resize(S,R)}),J().then(async()=>{if(Ds("Connecting to server…",60),l.connect(ke.serverUrl),!await l.joinOrCreate("arena_ffa"))console.warn("Could not join arena_ffa – playing offline");else{Ds("Joining arena…",85);const V=l.getRoom();V&&(c.setup(V),V.onMessage("hit",G=>{Qx(G.targetId)}),V.onMessage("hitReceived",G=>{ay(G.dirX,G.dirY,G.dirZ)}),await c.waitForLocalSpawnAndSync(V))}Ds("Ready!",100),await new Promise(V=>setTimeout(V,300));const R=a.getSnapshot();r.setTargetPosition(R.position.x,R.position.y+js,R.position.z),r.setRotation(R.yaw,R.pitch),r.snapToTarget(),hy(),v.start(),ke.debugOverlay&&typeof window<"u"&&(window.setPlayerSkin=V=>{M&&PS(M,V)})})}export{BS as A,sn as D,Dx as F,Yt as G,Gc as P,jt as Q,Ux as S,D as V,ly as a,RS as b,ke as c,Oc as d,Hc as e,Vc as f,Kh as g,ic as h,hy as i,js as j,Gt as k,bS as l,Gy as m,Ds as s};
