const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TunerBoot-DCmbATzY.js","assets/dat.gui.module-CMI775Zz.js","assets/Tuner3PBoot-DxOwSdc5.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Wm="modulepreload",$m=function(i){return"/"+i},dh={},ma=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=o(t.map(c=>{if(c=$m(c),c in dh)return;dh[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Wm,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rl="169",jm=0,fh=1,qm=2,Zd=1,Km=2,Qn=3,si=0,en=1,hn=2,bi=0,ws=1,Cr=2,mh=3,ph=4,Jm=5,Vi=100,Qm=101,ep=102,tp=103,np=104,ip=200,sp=201,rp=202,op=203,Ac=204,bc=205,ap=206,cp=207,lp=208,hp=209,up=210,dp=211,fp=212,mp=213,pp=214,wc=0,Rc=1,Cc=2,Ls=3,Pc=4,Ic=5,Lc=6,Dc=7,Wd=0,gp=1,xp=2,wi=0,_p=1,vp=2,yp=3,Sp=4,Mp=5,Ep=6,Tp=7,gh="attached",Ap="detached",$d=300,Ds=301,Ns=302,Nc=303,Oc=304,oa=306,ji=1e3,Ei=1001,qo=1002,Qt=1003,jd=1004,_r=1005,un=1006,Lo=1007,ti=1008,ri=1009,qd=1010,Kd=1011,Pr=1012,Cl=1013,qi=1014,Rn=1015,Fr=1016,Pl=1017,Il=1018,Os=1020,Jd=35902,Qd=1021,ef=1022,dn=1023,tf=1024,nf=1025,Rs=1026,Us=1027,Ll=1028,Dl=1029,sf=1030,Nl=1031,Ol=1033,Do=33776,No=33777,Oo=33778,Uo=33779,Uc=35840,Fc=35841,Bc=35842,zc=35843,kc=36196,Xc=37492,Hc=37496,Yc=37808,Vc=37809,Gc=37810,Zc=37811,Wc=37812,$c=37813,jc=37814,qc=37815,Kc=37816,Jc=37817,Qc=37818,el=37819,tl=37820,nl=37821,Fo=36492,il=36494,sl=36495,rf=36283,rl=36284,ol=36285,al=36286,of=2200,cl=2201,bp=2202,Ir=2300,Lr=2301,pa=2302,Es=2400,Ts=2401,Ko=2402,Ul=2500,wp=2501,Rp=0,af=1,ll=2,Cp=3200,Pp=3201,cf=0,Ip=1,Mi="",Kt="srgb",Vt="srgb-linear",Fl="display-p3",aa="display-p3-linear",Jo="linear",St="srgb",Qo="rec709",ea="p3",es=7680,xh=519,Lp=512,Dp=513,Np=514,lf=515,Op=516,Up=517,Fp=518,Bp=519,hl=35044,_h="300 es",ni=2e3,ta=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vh=1234567;const Er=Math.PI/180,Fs=180/Math.PI;function Pn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function Bl(i,e){return(i%e+e)%e}function zp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function kp(i,e,t){return i!==e?(t-i)/(e-i):0}function Tr(i,e,t){return(1-t)*i+t*e}function Xp(i,e,t,n){return Tr(i,e,1-Math.exp(-t*n))}function Hp(i,e=1){return e-Math.abs(Bl(i,e*2)-e)}function Yp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Zp(i,e){return i+Math.random()*(e-i)}function Wp(i){return i*(.5-Math.random())}function $p(i){i!==void 0&&(vh=i);let e=vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jp(i){return i*Er}function qp(i){return i*Fs}function Kp(i){return(i&i-1)===0&&i!==0}function Jp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function e0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bs={DEG2RAD:Er,RAD2DEG:Fs,generateUUID:Pn,clamp:Nt,euclideanModulo:Bl,mapLinear:zp,inverseLerp:kp,lerp:Tr,damp:Xp,pingpong:Hp,smoothstep:Yp,smootherstep:Vp,randInt:Gp,randFloat:Zp,randFloatSpread:Wp,seededRandom:$p,degToRad:jp,radToDeg:qp,isPowerOfTwo:Kp,ceilPowerOfTwo:Jp,floorPowerOfTwo:Qp,setQuaternionFromProperEuler:e0,normalize:xt,denormalize:wn};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,s,r,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],M=s[4],T=s[7],I=s[2],P=s[5],R=s[8];return r[0]=o*_+a*S+l*I,r[3]=o*m+a*M+l*P,r[6]=o*p+a*T+l*R,r[1]=c*_+h*S+u*I,r[4]=c*m+h*M+u*P,r[7]=c*p+h*T+u*R,r[2]=d*_+f*S+g*I,r[5]=d*m+f*M+g*P,r[8]=d*p+f*T+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new et;function hf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function t0(){const i=Dr("canvas");return i.style.display="block",i}const yh={};function Bo(i){i in yh||(yh[i]=!0,console.warn(i))}function n0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function i0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function s0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Sh=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mh=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[Vt]:{transfer:Jo,primaries:Qo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Kt]:{transfer:St,primaries:Qo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[aa]:{transfer:Jo,primaries:ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Mh),fromReference:i=>i.applyMatrix3(Sh)},[Fl]:{transfer:St,primaries:ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Mh),fromReference:i=>i.applyMatrix3(Sh).convertLinearToSRGB()}},r0=new Set([Vt,aa]),ft={enabled:!0,_workingColorSpace:Vt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!r0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=js[e].toReference,s=js[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return js[i].primaries},getTransfer:function(i){return i===Mi?Jo:js[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(js[e].luminanceCoefficients)}};function Cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ts;class o0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=Dr("canvas")),ts.width=e.width,ts.height=e.height;const n=ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cs(t[n]/255)*255):t[n]=Cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let a0=0;class uf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_a(s[o].image)):r.push(_a(s[o]))}else r=_a(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function _a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?o0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c0=0;class Ot extends Qi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Ei,s=Ei,r=un,o=ti,a=dn,l=ri,c=Ot.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Pn(),this.name="",this.source=new uf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ji:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ji:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=$d;Ot.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,T=(f+1)/2,I=(p+1)/2,P=(h+d)/4,R=(u+_)/4,O=(g+m)/4;return M>T&&M>I?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=P/n,r=R/n):T>I?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=P/s,r=O/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=O/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l0 extends Qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ot(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends l0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class df extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h0 extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const I=Math.sqrt(M),P=Math.atan2(I,p*S);m=Math.sin(m*P)/I,a=Math.sin(a*P)/I}const T=a*S;if(l=l*m+d*T,c=c*m+f*T,h=h*m+g*T,u=u*m+_*T,m===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new D,Eh=new sn;class ai{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Vr.subVectors(this.max,qs),ns.subVectors(e.a,qs),is.subVectors(e.b,qs),ss.subVectors(e.c,qs),hi.subVectors(is,ns),ui.subVectors(ss,is),Ci.subVectors(ns,ss);let t=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ci.z,Ci.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ci.z,0,-Ci.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ci.y,Ci.x,0];return!ya(t,ns,is,ss,Vr)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,ns,is,ss,Vr))?!1:(Gr.crossVectors(hi,ui),t=[Gr.x,Gr.y,Gr.z],ya(t,ns,is,ss,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new D,new D,new D,new D,new D,new D,new D,new D],yn=new D,Yr=new ai,ns=new D,is=new D,ss=new D,hi=new D,ui=new D,Ci=new D,qs=new D,Vr=new D,Gr=new D,Pi=new D;function ya(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);const a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const u0=new ai,Ks=new D,Sa=new D;class Fn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):u0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(Sa)),this.expandByPoint(Ks.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new D,Ma=new D,Zr=new D,di=new D,Ea=new D,Wr=new D,Ta=new D;class Br{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ma.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),di.copy(this.origin).sub(Ma);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Zr),a=di.dot(this.direction),l=-di.dot(Zr),c=di.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ma).addScaledVector(Zr,d),f}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){Ea.subVectors(t,e),Wr.subVectors(n,e),Ta.crossVectors(Ea,Wr);let o=this.direction.dot(Ta),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(Wr.crossVectors(di,Wr));if(l<0)return null;const c=a*this.direction.dot(Ea.cross(di));if(c<0||l+c>o)return null;const h=-a*di.dot(Ta);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,g,_,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d0,e,f0)}lookAt(e,t,n){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),fi.crossVectors(n,cn),fi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),fi.crossVectors(n,cn)),fi.normalize(),$r.crossVectors(cn,fi),s[0]=fi.x,s[4]=$r.x,s[8]=cn.x,s[1]=fi.y,s[5]=$r.y,s[9]=cn.y,s[2]=fi.z,s[6]=$r.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],M=n[7],T=n[11],I=n[15],P=s[0],R=s[4],O=s[8],j=s[12],E=s[1],C=s[5],Y=s[9],V=s[13],Z=s[2],q=s[6],H=s[10],K=s[14],G=s[3],se=s[7],le=s[11],xe=s[15];return r[0]=o*P+a*E+l*Z+c*G,r[4]=o*R+a*C+l*q+c*se,r[8]=o*O+a*Y+l*H+c*le,r[12]=o*j+a*V+l*K+c*xe,r[1]=h*P+u*E+d*Z+f*G,r[5]=h*R+u*C+d*q+f*se,r[9]=h*O+u*Y+d*H+f*le,r[13]=h*j+u*V+d*K+f*xe,r[2]=g*P+_*E+m*Z+p*G,r[6]=g*R+_*C+m*q+p*se,r[10]=g*O+_*Y+m*H+p*le,r[14]=g*j+_*V+m*K+p*xe,r[3]=S*P+M*E+T*Z+I*G,r[7]=S*R+M*C+T*q+I*se,r[11]=S*O+M*Y+T*H+I*le,r[15]=S*j+M*V+T*K+I*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,M=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,T=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,I=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,P=t*S+n*M+s*T+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=S*R,e[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*R,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*R,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*R,e[4]=M*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=T*R,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*R,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*R,e[12]=I*R,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*R,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,S=l*c,M=l*h,T=l*u,I=n.x,P=n.y,R=n.z;return s[0]=(1-(_+p))*I,s[1]=(f+T)*I,s[2]=(g-M)*I,s[3]=0,s[4]=(f-T)*P,s[5]=(1-(d+p))*P,s[6]=(m+S)*P,s[7]=0,s[8]=(g+M)*R,s[9]=(m-S)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=rs.set(s[0],s[1],s[2]).length();const o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);const c=1/r,h=1/o,u=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ni){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===ni)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ta)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ni){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h;let g,_;if(a===ni)g=(o+r)*u,_=-2*u;else if(a===ta)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rs=new D,Sn=new $e,d0=new D(0,0,0),f0=new D(1,1,1),fi=new D,$r=new D,cn=new D,Th=new $e,Ah=new sn;class vn{constructor(e=0,t=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m0=0;const bh=new D,os=new sn,Vn=new $e,jr=new D,Js=new D,p0=new D,g0=new sn,wh=new D(1,0,0),Rh=new D(0,1,0),Ch=new D(0,0,1),Ph={type:"added"},x0={type:"removed"},as={type:"childadded",child:null},Aa={type:"childremoved",child:null};class Mt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new D,t=new vn,n=new sn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new et}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return bh.copy(e).applyQuaternion(this.quaternion),this.position.add(bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jr.copy(e):jr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Js,jr,this.up):Vn.lookAt(jr,Js,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Vn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ph),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x0),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ph),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,p0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new D(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new D,Gn=new D,ba=new D,Zn=new D,cs=new D,ls=new D,Ih=new D,wa=new D,Ra=new D,Ca=new D,Pa=new mt,Ia=new mt,La=new mt;class xn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mn.subVectors(e,t),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mn.subVectors(s,t),Gn.subVectors(n,t),ba.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(Gn),l=Mn.dot(ba),c=Gn.dot(Gn),h=Gn.dot(ba),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Pa.setScalar(0),Ia.setScalar(0),La.setScalar(0),Pa.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,n),La.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Pa,r.x),o.addScaledVector(Ia,r.y),o.addScaledVector(La,r.z),o}static isFrontFacing(e,t,n,s){return Mn.subVectors(n,t),Gn.subVectors(e,t),Mn.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Mn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;cs.subVectors(s,n),ls.subVectors(r,n),wa.subVectors(e,n);const l=cs.dot(wa),c=ls.dot(wa);if(l<=0&&c<=0)return t.copy(n);Ra.subVectors(e,s);const h=cs.dot(Ra),u=ls.dot(Ra);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(cs,o);Ca.subVectors(e,r);const f=cs.dot(Ca),g=ls.dot(Ca);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ls,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ih.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ih,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(cs,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Da(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=Bl(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Da(o,r,e+1/3),this.g=Da(o,r,e),this.b=Da(o,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=ff[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return ft.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Nt(Zt.r*255,0,255))*65536+Math.round(Nt(Zt.g*255,0,255))*256+Math.round(Nt(Zt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Kt){ft.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,s=Zt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(qr);const n=Tr(mi.h,qr.h,t),s=Tr(mi.s,qr.s,t),r=Tr(mi.l,qr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new We;We.NAMES=ff;let _0=0;class In extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=ws,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=bc,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ac&&(n.blendSrc=this.blendSrc),this.blendDst!==bc&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cn extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new D,Kr=new Ce;class bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hl&&(e.usage=this.usage),e}}class mf extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pf extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let v0=0;const mn=new $e,Na=new Mt,hs=new D,ln=new ai,Qs=new ai,zt=new D;class Dt extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hf(e)?pf:mf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(ln.min,Qs.min),ln.expandByPoint(zt),zt.addVectors(ln.max,Qs.max),ln.expandByPoint(zt)):(ln.expandByPoint(Qs.min),ln.expandByPoint(Qs.max))}ln.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)zt.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),zt.add(hs)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new D,l[O]=new D;const c=new D,h=new D,u=new D,d=new Ce,f=new Ce,g=new Ce,_=new D,m=new D;function p(O,j,E){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,j),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,O),f.fromBufferAttribute(r,j),g.fromBufferAttribute(r,E),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[O].add(_),a[j].add(_),a[E].add(_),l[O].add(m),l[j].add(m),l[E].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let O=0,j=S.length;O<j;++O){const E=S[O],C=E.start,Y=E.count;for(let V=C,Z=C+Y;V<Z;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new D,T=new D,I=new D,P=new D;function R(O){I.fromBufferAttribute(s,O),P.copy(I);const j=a[O];M.copy(j),M.sub(I.multiplyScalar(I.dot(j))).normalize(),T.crossVectors(P,j);const C=T.dot(l[O])<0?-1:1;o.setXYZW(O,M.x,M.y,M.z,C)}for(let O=0,j=S.length;O<j;++O){const E=S[O],C=E.start,Y=E.count;for(let V=C,Z=C+Y;V<Z;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new $e,Ii=new Br,Jr=new Fn,Dh=new D,Qr=new D,eo=new D,to=new D,Oa=new D,no=new D,Nh=new D,io=new D;class vt extends Mt{constructor(e=new Dt,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Oa.fromBufferAttribute(u,e),o?no.addScaledVector(Oa,h):no.addScaledVector(Oa.sub(t),h))}t.add(no)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(Jr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Jr,Dh)===null||Ii.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Lh.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let T=S,I=M;T<I;T+=3){const P=a.getX(T),R=a.getX(T+1),O=a.getX(T+2);s=so(this,p,e,n,c,h,u,P,R,O),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),M=a.getX(m+1),T=a.getX(m+2);s=so(this,o,e,n,c,h,u,S,M,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let T=S,I=M;T<I;T+=3){const P=T,R=T+1,O=T+2;s=so(this,p,e,n,c,h,u,P,R,O),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,M=m+1,T=m+2;s=so(this,o,e,n,c,h,u,S,M,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function y0(i,e,t,n,s,r,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===si,a),l===null)return null;io.copy(a),io.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:i}}function so(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Qr),i.getVertexPosition(l,eo),i.getVertexPosition(c,to);const h=y0(i,e,t,n,Qr,eo,to,Nh);if(h){const u=new D;xn.getBarycoord(Nh,Qr,eo,to,u),s&&(h.uv=xn.getInterpolatedAttribute(s,a,l,c,u,new Ce)),r&&(h.uv1=xn.getInterpolatedAttribute(r,a,l,c,u,new Ce)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};xn.getNormal(Qr,eo,to,d.normal),h.face=d,h.barycoord=u}return h}class ci extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(u,2));function g(_,m,p,S,M,T,I,P,R,O,j){const E=T/R,C=I/O,Y=T/2,V=I/2,Z=P/2,q=R+1,H=O+1;let K=0,G=0;const se=new D;for(let le=0;le<H;le++){const xe=le*C-V;for(let ae=0;ae<q;ae++){const Xe=ae*E-Y;se[_]=Xe*S,se[m]=xe*M,se[p]=Z,c.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[p]=P>0?1:-1,h.push(se.x,se.y,se.z),u.push(ae/R),u.push(1-le/O),K+=1}}for(let le=0;le<O;le++)for(let xe=0;xe<R;xe++){const ae=d+xe+q*le,Xe=d+xe+q*(le+1),J=d+(xe+1)+q*(le+1),oe=d+(xe+1)+q*le;l.push(ae,Xe,oe),l.push(Xe,J,oe),G+=6}a.addGroup(f,G,j),f+=G,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=zs(i[t]);for(const s in n)e[s]=n[s]}return e}function S0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const M0={clone:zs,merge:qt};var E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=T0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=S0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xf extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new D,Oh=new Ce,Uh=new Ce;class Jt extends xf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,Oh,Uh),t.subVectors(Uh,Oh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,ds=1;class A0 extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(us,ds,e,t);s.layers=this.layers,this.add(s);const r=new Jt(us,ds,e,t);r.layers=this.layers,this.add(r);const o=new Jt(us,ds,e,t);o.layers=this.layers,this.add(o);const a=new Jt(us,ds,e,t);a.layers=this.layers,this.add(a);const l=new Jt(us,ds,e,t);l.layers=this.layers,this.add(l);const c=new Jt(us,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _f extends Ot{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b0 extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _f(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ci(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:bi});r.uniforms.tEquirect.value=t;const o=new vt(s,r),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=un),new A0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ua=new D,w0=new D,R0=new et;class ki{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ua.subVectors(n,t).cross(w0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ua),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||R0.getNormalMatrix(e),s=this.coplanarPoint(Ua).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Fn,ro=new D;class kl{constructor(e=new ki,t=new ki,n=new ki,s=new ki,r=new ki,o=new ki){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],S=s[13],M=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,m-f,T-p).normalize(),n[1].setComponents(l+r,d+c,m+f,T+p).normalize(),n[2].setComponents(l+o,d+h,m+g,T+S).normalize(),n[3].setComponents(l-o,d-h,m-g,T-S).normalize(),n[4].setComponents(l-a,d-u,m-_,T-M).normalize(),t===ni)n[5].setComponents(l+a,d+u,m+_,T+M).normalize();else if(t===ta)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ro.x=s.normal.x>0?e.max.x:e.min.x,ro.y=s.normal.y>0?e.max.y:e.min.y,ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function C0(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class zr extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*d-o;for(let M=0;M<c;M++){const T=M*u-r;g.push(T,-S,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const M=S+c*p,T=S+c*(p+1),I=S+1+c*(p+1),P=S+1+c*p;f.push(M,T,P),f.push(T,I,P)}this.setIndex(f),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(_,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.widthSegments,e.heightSegments)}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
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
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
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
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
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
#endif`,z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Y0=`#ifdef USE_IRIDESCENCE
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
#endif`,V0=`#ifdef USE_BUMPMAP
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Q0=`#define PI 3.141592653589793
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
} // validated`,eg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tg=`vec3 transformedNormal = objectNormal;
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
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`
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
}`,cg=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hg=`#ifdef USE_ENVMAP
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
#endif`,ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xg=`#ifdef USE_GRADIENTMAP
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
}`,_g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wg=`PhysicalMaterial material;
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
#endif`,Rg=`struct PhysicalMaterial {
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
}`,Cg=`
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
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zg=`#if defined( USE_POINTS_UV )
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
#endif`,kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`#ifdef USE_MORPHTARGETS
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
#endif`,Zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jg=`#ifdef USE_NORMALMAP
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
#endif`,Qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ix=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mx=`float getShadowMask() {
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
}`,px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gx=`#ifdef USE_SKINNING
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
#endif`,xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ex=`#ifdef USE_TRANSMISSION
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
#endif`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Px=`uniform sampler2D t2D;
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`#include <common>
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
}`,Ux=`#if DEPTH_PACKING == 3200
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
}`,Fx=`#define DISTANCE
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
}`,Bx=`#define DISTANCE
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`uniform float scale;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Yx=`#include <common>
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Gx=`#define LAMBERT
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
}`,Zx=`#define LAMBERT
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
}`,Wx=`#define MATCAP
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
}`,$x=`#define MATCAP
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
}`,jx=`#define NORMAL
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
}`,qx=`#define NORMAL
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
}`,Kx=`#define PHONG
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
}`,Jx=`#define PHONG
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
}`,Qx=`#define STANDARD
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
}`,e_=`#define STANDARD
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
}`,t_=`#define TOON
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
}`,n_=`#define TOON
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
}`,i_=`uniform float size;
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,o_=`uniform vec3 color;
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
}`,a_=`uniform float rotation;
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
}`,c_=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:P0,alphahash_pars_fragment:I0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:N0,alphatest_pars_fragment:O0,aomap_fragment:U0,aomap_pars_fragment:F0,batching_pars_vertex:B0,batching_vertex:z0,begin_vertex:k0,beginnormal_vertex:X0,bsdfs:H0,iridescence_fragment:Y0,bumpmap_pars_fragment:V0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:Z0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:$0,color_fragment:j0,color_pars_fragment:q0,color_pars_vertex:K0,color_vertex:J0,common:Q0,cube_uv_reflection_fragment:eg,defaultnormal_vertex:tg,displacementmap_pars_vertex:ng,displacementmap_vertex:ig,emissivemap_fragment:sg,emissivemap_pars_fragment:rg,colorspace_fragment:og,colorspace_pars_fragment:ag,envmap_fragment:cg,envmap_common_pars_fragment:lg,envmap_pars_fragment:hg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:Mg,envmap_vertex:dg,fog_vertex:fg,fog_pars_vertex:mg,fog_fragment:pg,fog_pars_fragment:gg,gradientmap_pars_fragment:xg,lightmap_pars_fragment:_g,lights_lambert_fragment:vg,lights_lambert_pars_fragment:yg,lights_pars_begin:Sg,lights_toon_fragment:Eg,lights_toon_pars_fragment:Tg,lights_phong_fragment:Ag,lights_phong_pars_fragment:bg,lights_physical_fragment:wg,lights_physical_pars_fragment:Rg,lights_fragment_begin:Cg,lights_fragment_maps:Pg,lights_fragment_end:Ig,logdepthbuf_fragment:Lg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Og,map_fragment:Ug,map_pars_fragment:Fg,map_particle_fragment:Bg,map_particle_pars_fragment:zg,metalnessmap_fragment:kg,metalnessmap_pars_fragment:Xg,morphinstance_vertex:Hg,morphcolor_vertex:Yg,morphnormal_vertex:Vg,morphtarget_pars_vertex:Gg,morphtarget_vertex:Zg,normal_fragment_begin:Wg,normal_fragment_maps:$g,normal_pars_fragment:jg,normal_pars_vertex:qg,normal_vertex:Kg,normalmap_pars_fragment:Jg,clearcoat_normal_fragment_begin:Qg,clearcoat_normal_fragment_maps:ex,clearcoat_pars_fragment:tx,iridescence_pars_fragment:nx,opaque_fragment:ix,packing:sx,premultiplied_alpha_fragment:rx,project_vertex:ox,dithering_fragment:ax,dithering_pars_fragment:cx,roughnessmap_fragment:lx,roughnessmap_pars_fragment:hx,shadowmap_pars_fragment:ux,shadowmap_pars_vertex:dx,shadowmap_vertex:fx,shadowmask_pars_fragment:mx,skinbase_vertex:px,skinning_pars_vertex:gx,skinning_vertex:xx,skinnormal_vertex:_x,specularmap_fragment:vx,specularmap_pars_fragment:yx,tonemapping_fragment:Sx,tonemapping_pars_fragment:Mx,transmission_fragment:Ex,transmission_pars_fragment:Tx,uv_pars_fragment:Ax,uv_pars_vertex:bx,uv_vertex:wx,worldpos_vertex:Rx,background_vert:Cx,background_frag:Px,backgroundCube_vert:Ix,backgroundCube_frag:Lx,cube_vert:Dx,cube_frag:Nx,depth_vert:Ox,depth_frag:Ux,distanceRGBA_vert:Fx,distanceRGBA_frag:Bx,equirect_vert:zx,equirect_frag:kx,linedashed_vert:Xx,linedashed_frag:Hx,meshbasic_vert:Yx,meshbasic_frag:Vx,meshlambert_vert:Gx,meshlambert_frag:Zx,meshmatcap_vert:Wx,meshmatcap_frag:$x,meshnormal_vert:jx,meshnormal_frag:qx,meshphong_vert:Kx,meshphong_frag:Jx,meshphysical_vert:Qx,meshphysical_frag:e_,meshtoon_vert:t_,meshtoon_frag:n_,points_vert:i_,points_frag:s_,shadow_vert:r_,shadow_frag:o_,sprite_vert:a_,sprite_frag:c_},Ee={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Un={basic:{uniforms:qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:qt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:qt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:qt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:qt([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:qt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:qt([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:qt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:qt([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:qt([Ee.common,Ee.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:qt([Ee.lights,Ee.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Un.physical={uniforms:qt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const oo={r:0,b:0,g:0},Di=new vn,l_=new $e;function h_(i,e,t,n,s,r,o){const a=new We(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function _(S){let M=!1;const T=g(S);T===null?p(a,l):T&&T.isColor&&(p(T,1),M=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,M){const T=g(M);T&&(T.isCubeTexture||T.mapping===oa)?(h===void 0&&(h=new vt(new ci(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:zs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Di.copy(M.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(l_.makeRotationFromEuler(Di)),h.material.toneMapped=ft.getTransfer(T.colorSpace)!==St,(u!==T||d!==T.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new vt(new zr(2,2),new oi({name:"BackgroundMaterial",uniforms:zs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ft.getTransfer(T.colorSpace)!==St,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(oo,gf(i)),n.buffers.color.setClear(oo.r,oo.g,oo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m}}function u_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(E,C,Y,V,Z){let q=!1;const H=u(V,Y,C);r!==H&&(r=H,c(r.object)),q=f(E,V,Y,Z),q&&g(E,V,Y,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,T(E,C,Y,V),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,C,Y){const V=Y.wireframe===!0;let Z=n[E.id];Z===void 0&&(Z={},n[E.id]=Z);let q=Z[C.id];q===void 0&&(q={},Z[C.id]=q);let H=q[V];return H===void 0&&(H=d(l()),q[V]=H),H}function d(E){const C=[],Y=[],V=[];for(let Z=0;Z<t;Z++)C[Z]=0,Y[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:Y,attributeDivisors:V,object:E,attributes:{},index:null}}function f(E,C,Y,V){const Z=r.attributes,q=C.attributes;let H=0;const K=Y.getAttributes();for(const G in K)if(K[G].location>=0){const le=Z[G];let xe=q[G];if(xe===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(xe=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(xe=E.instanceColor)),le===void 0||le.attribute!==xe||xe&&le.data!==xe.data)return!0;H++}return r.attributesNum!==H||r.index!==V}function g(E,C,Y,V){const Z={},q=C.attributes;let H=0;const K=Y.getAttributes();for(const G in K)if(K[G].location>=0){let le=q[G];le===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(le=E.instanceColor));const xe={};xe.attribute=le,le&&le.data&&(xe.data=le.data),Z[G]=xe,H++}r.attributes=Z,r.attributesNum=H,r.index=V}function _(){const E=r.newAttributes;for(let C=0,Y=E.length;C<Y;C++)E[C]=0}function m(E){p(E,0)}function p(E,C){const Y=r.newAttributes,V=r.enabledAttributes,Z=r.attributeDivisors;Y[E]=1,V[E]===0&&(i.enableVertexAttribArray(E),V[E]=1),Z[E]!==C&&(i.vertexAttribDivisor(E,C),Z[E]=C)}function S(){const E=r.newAttributes,C=r.enabledAttributes;for(let Y=0,V=C.length;Y<V;Y++)C[Y]!==E[Y]&&(i.disableVertexAttribArray(Y),C[Y]=0)}function M(E,C,Y,V,Z,q,H){H===!0?i.vertexAttribIPointer(E,C,Y,Z,q):i.vertexAttribPointer(E,C,Y,V,Z,q)}function T(E,C,Y,V){_();const Z=V.attributes,q=Y.getAttributes(),H=C.defaultAttributeValues;for(const K in q){const G=q[K];if(G.location>=0){let se=Z[K];if(se===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(se=E.instanceColor)),se!==void 0){const le=se.normalized,xe=se.itemSize,ae=e.get(se);if(ae===void 0)continue;const Xe=ae.buffer,J=ae.type,oe=ae.bytesPerElement,ve=J===i.INT||J===i.UNSIGNED_INT||se.gpuType===Cl;if(se.isInterleavedBufferAttribute){const me=se.data,Fe=me.stride,re=se.offset;if(me.isInstancedInterleavedBuffer){for(let de=0;de<G.locationSize;de++)p(G.location+de,me.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let de=0;de<G.locationSize;de++)m(G.location+de);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let de=0;de<G.locationSize;de++)M(G.location+de,xe/G.locationSize,J,le,Fe*oe,(re+xe/G.locationSize*de)*oe,ve)}else{if(se.isInstancedBufferAttribute){for(let me=0;me<G.locationSize;me++)p(G.location+me,se.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<G.locationSize;me++)m(G.location+me);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let me=0;me<G.locationSize;me++)M(G.location+me,xe/G.locationSize,J,le,xe*oe,xe/G.locationSize*me*oe,ve)}}else if(H!==void 0){const le=H[K];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(G.location,le);break;case 3:i.vertexAttrib3fv(G.location,le);break;case 4:i.vertexAttrib4fv(G.location,le);break;default:i.vertexAttrib1fv(G.location,le)}}}}S()}function I(){O();for(const E in n){const C=n[E];for(const Y in C){const V=C[Y];for(const Z in V)h(V[Z].object),delete V[Z];delete C[Y]}delete n[E]}}function P(E){if(n[E.id]===void 0)return;const C=n[E.id];for(const Y in C){const V=C[Y];for(const Z in V)h(V[Z].object),delete V[Z];delete C[Y]}delete n[E.id]}function R(E){for(const C in n){const Y=n[C];if(Y[E.id]===void 0)continue;const V=Y[E.id];for(const Z in V)h(V[Z].object),delete V[Z];delete Y[E.id]}}function O(){j(),o=!0,r!==s&&(r=s,c(r.object))}function j(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:j,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function d_(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function f_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const O=R===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ri&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Rn&&!O)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:T,vertexTextures:I,maxSamples:P}}function m_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ki,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,M=S*4;let T=p.clippingState||null;l.value=T,T=h(g,d,M,f);for(let I=0;I!==M;++I)T[I]=t[I];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,T=f;M!==_;++M,T+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function p_(i){let e=new WeakMap;function t(o,a){return a===Nc?o.mapping=Ds:a===Oc&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nc||a===Oc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new b0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Xl extends xf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,Fh=[.125,.215,.35,.446,.526,.582],Gi=20,Fa=new Xl,Bh=new We;let Ba=null,za=0,ka=0,Xa=!1;const Xi=(1+Math.sqrt(5))/2,fs=1/Xi,zh=[new D(-Xi,fs,0),new D(Xi,fs,0),new D(-fs,0,Xi),new D(fs,0,Xi),new D(0,Xi,-fs),new D(0,Xi,fs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class kh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,za,ka),this._renderer.xr.enabled=Xa,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Fr,format:dn,colorSpace:Vt,depthBuffer:!1},s=Xh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g_(r)),this._blurMaterial=x_(r,e,t)}return s}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,s){const a=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bh),h.toneMapping=wi,h.autoClear=!1;const f=new Cn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new vt(new ci,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Bh),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;ao(s,S*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ds||e.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ao(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zh[(s-r-1)%zh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new vt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const p=[];let S=0;for(let R=0;R<Gi;++R){const O=R/_,j=Math.exp(-O*O/2);p.push(j),R===0?S+=j:R<m&&(S+=2*j)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const T=this._sizeLods[s],I=3*T*(s>M-As?s-M+As:0),P=4*(this._cubeSize-T);ao(t,I,P,3*T,2*T),l.setRenderTarget(t),l.render(u,Fa)}}function g_(i){const e=[],t=[],n=[];let s=i;const r=i-As+1+Fh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-As?l=Fh[o-i+As-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),M=new Float32Array(m*g*f),T=new Float32Array(p*g*f);for(let P=0;P<f;P++){const R=P%3*2/3-1,O=P>2?0:-1,j=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];S.set(j,_*g*P),M.set(d,m*g*P);const E=[P,P,P,P,P,P];T.set(E,p*g*P)}const I=new Dt;I.setAttribute("position",new bt(S,_)),I.setAttribute("uv",new bt(M,m)),I.setAttribute("faceIndex",new bt(T,p)),e.push(I),s>As&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xh(i,e,t){const n=new Ki(i,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function x_(i,e,t){const n=new Float32Array(Gi),s=new D(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Hh(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Yh(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Hl(){return`

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
	`}function __(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nc||l===Oc,h=l===Ds||l===Ns;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new kh(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new kh(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function v_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Bo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function y_(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let M=0,T=S.length;M<T;M+=3){const I=S[M+0],P=S[M+1],R=S[M+2];d.push(I,P,P,R,R,I)}}else if(g!==void 0){const S=g.array;_=g.version;for(let M=0,T=S.length/3-1;M<T;M+=3){const I=M+0,P=M+1,R=M+2;d.push(I,P,P,R,R,I)}}else return;const m=new(hf(d)?pf:mf)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function S_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S];for(let S=0;S<_.length;S++)t.update(p,n,_[S])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function M_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function E_(i,e,t){const n=new WeakMap,s=new mt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let j=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",j)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let T=a.attributes.position.count*M,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*I*4*u),R=new df(P,T,I,u);R.type=Rn,R.needsUpdate=!0;const O=M*4;for(let E=0;E<u;E++){const C=m[E],Y=p[E],V=S[E],Z=T*I*4*E;for(let q=0;q<C.count;q++){const H=q*O;f===!0&&(s.fromBufferAttribute(C,q),P[Z+H+0]=s.x,P[Z+H+1]=s.y,P[Z+H+2]=s.z,P[Z+H+3]=0),g===!0&&(s.fromBufferAttribute(Y,q),P[Z+H+4]=s.x,P[Z+H+5]=s.y,P[Z+H+6]=s.z,P[Z+H+7]=0),_===!0&&(s.fromBufferAttribute(V,q),P[Z+H+8]=s.x,P[Z+H+9]=s.y,P[Z+H+10]=s.z,P[Z+H+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Ce(T,I)},n.set(a,d),a.addEventListener("dispose",j)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function T_(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class yf extends Ot{constructor(e,t,n,s,r,o,a,l,c,h=Rs){if(h!==Rs&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rs&&(n=qi),n===void 0&&h===Us&&(n=Os),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sf=new Ot,Vh=new yf(1,1),Mf=new df,Ef=new h0,Tf=new _f,Gh=[],Zh=[],Wh=new Float32Array(16),$h=new Float32Array(9),jh=new Float32Array(4);function Gs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ca(i,e){let t=Zh[e];t===void 0&&(t=new Int32Array(e),Zh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function A_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function b_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function w_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function R_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function C_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;jh.set(n),i.uniformMatrix2fv(this.addr,!1,jh),Ft(t,n)}}function P_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;$h.set(n),i.uniformMatrix3fv(this.addr,!1,$h),Ft(t,n)}}function I_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Wh.set(n),i.uniformMatrix4fv(this.addr,!1,Wh),Ft(t,n)}}function L_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function D_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function N_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function O_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function U_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function F_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function B_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function k_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vh.compareFunction=lf,r=Vh):r=Sf,t.setTexture2D(e||r,s)}function X_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ef,s)}function H_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tf,s)}function Y_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Mf,s)}function V_(i){switch(i){case 5126:return A_;case 35664:return b_;case 35665:return w_;case 35666:return R_;case 35674:return C_;case 35675:return P_;case 35676:return I_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return N_;case 35669:case 35673:return O_;case 5125:return U_;case 36294:return F_;case 36295:return B_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return Y_}}function G_(i,e){i.uniform1fv(this.addr,e)}function Z_(i,e){const t=Gs(e,this.size,2);i.uniform2fv(this.addr,t)}function W_(i,e){const t=Gs(e,this.size,3);i.uniform3fv(this.addr,t)}function $_(i,e){const t=Gs(e,this.size,4);i.uniform4fv(this.addr,t)}function j_(i,e){const t=Gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function q_(i,e){const t=Gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function K_(i,e){const t=Gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function J_(i,e){i.uniform1iv(this.addr,e)}function Q_(i,e){i.uniform2iv(this.addr,e)}function ev(i,e){i.uniform3iv(this.addr,e)}function tv(i,e){i.uniform4iv(this.addr,e)}function nv(i,e){i.uniform1uiv(this.addr,e)}function iv(i,e){i.uniform2uiv(this.addr,e)}function sv(i,e){i.uniform3uiv(this.addr,e)}function rv(i,e){i.uniform4uiv(this.addr,e)}function ov(i,e,t){const n=this.cache,s=e.length,r=ca(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Sf,r[o])}function av(i,e,t){const n=this.cache,s=e.length,r=ca(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ef,r[o])}function cv(i,e,t){const n=this.cache,s=e.length,r=ca(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Tf,r[o])}function lv(i,e,t){const n=this.cache,s=e.length,r=ca(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Mf,r[o])}function hv(i){switch(i){case 5126:return G_;case 35664:return Z_;case 35665:return W_;case 35666:return $_;case 35674:return j_;case 35675:return q_;case 35676:return K_;case 5124:case 35670:return J_;case 35667:case 35671:return Q_;case 35668:case 35672:return ev;case 35669:case 35673:return tv;case 5125:return nv;case 36294:return iv;case 36295:return sv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return lv}}class uv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=V_(t.type)}}class dv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hv(t.type)}}class fv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function qh(i,e){i.seq.push(e),i.map[e.id]=e}function mv(i,e,t){const n=i.name,s=n.length;for(Ha.lastIndex=0;;){const r=Ha.exec(n),o=Ha.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qh(t,c===void 0?new uv(a,i,e):new dv(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new fv(a),qh(t,u)),t=u}}}class zo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);mv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Kh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const pv=37297;let gv=0;function xv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function _v(i){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(i);let n;switch(e===t?n="":e===ea&&t===Qo?n="LinearDisplayP3ToLinearSRGB":e===Qo&&t===ea&&(n="LinearSRGBToLinearDisplayP3"),i){case Vt:case aa:return[n,"LinearTransferOETF"];case Kt:case Fl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Jh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+xv(i.getShaderSource(e),o)}else return s}function vv(i,e){const t=_v(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yv(i,e){let t;switch(e){case _p:t="Linear";break;case vp:t="Reinhard";break;case yp:t="Cineon";break;case Sp:t="ACESFilmic";break;case Ep:t="AgX";break;case Tp:t="Neutral";break;case Mp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const co=new D;function Sv(){ft.getLuminanceCoefficients(co);const i=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function Ev(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function vr(i){return i!==""}function Qh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(Av,wv)}const bv=new Map;function wv(i,e){let t=Qe[e];if(t===void 0){const n=bv.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ul(t)}const Rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(i){return i.replace(Rv,Cv)}function Cv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Km?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Iv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Ns:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function Dv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wd:e="ENVMAP_BLENDING_MULTIPLY";break;case gp:e="ENVMAP_BLENDING_MIX";break;case xp:e="ENVMAP_BLENDING_ADD";break}return e}function Nv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ov(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Pv(t),c=Iv(t),h=Lv(t),u=Dv(t),d=Nv(t),f=Mv(t),g=Ev(r),_=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(m=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==wi?yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,vv("linearToOutputTexel",t.outputColorSpace),Sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),o=ul(o),o=Qh(o,t),o=eu(o,t),a=ul(a),a=Qh(a,t),a=eu(a,t),o=tu(o),a=tu(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+m+o,T=S+p+a,I=Kh(s,s.VERTEX_SHADER,M),P=Kh(s,s.FRAGMENT_SHADER,T);s.attachShader(_,I),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(_).trim(),V=s.getShaderInfoLog(I).trim(),Z=s.getShaderInfoLog(P).trim();let q=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,P);else{const K=Jh(s,I,"vertex"),G=Jh(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+K+`
`+G)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(V===""||Z==="")&&(H=!1);H&&(C.diagnostics={runnable:q,programLog:Y,vertexShader:{log:V,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(I),s.deleteShader(P),O=new zo(s,_),j=Tv(s,_)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let j;this.getAttributes=function(){return j===void 0&&R(this),j};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,pv)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=P,this}let Uv=0;class Fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Bv(e),t.set(e,n)),n}}class Bv{constructor(e){this.id=Uv++,this.code=e,this.usedTimes=0}}function zv(i,e,t,n,s,r,o){const a=new zl,l=new Fv,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,C,Y,V,Z){const q=V.fog,H=Z.geometry,K=E.isMeshStandardMaterial?V.environment:null,G=(E.isMeshStandardMaterial?t:e).get(E.envMap||K),se=G&&G.mapping===oa?G.image.height:null,le=_[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const xe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=xe!==void 0?xe.length:0;let Xe=0;H.morphAttributes.position!==void 0&&(Xe=1),H.morphAttributes.normal!==void 0&&(Xe=2),H.morphAttributes.color!==void 0&&(Xe=3);let J,oe,ve,me;if(le){const _t=Un[le];J=_t.vertexShader,oe=_t.fragmentShader}else J=E.vertexShader,oe=E.fragmentShader,l.update(E),ve=l.getVertexShaderID(E),me=l.getFragmentShaderID(E);const Fe=i.getRenderTarget(),re=Z.isInstancedMesh===!0,de=Z.isBatchedMesh===!0,ge=!!E.map,Pe=!!E.matcap,N=!!G,je=!!E.aoMap,De=!!E.lightMap,Te=!!E.bumpMap,Oe=!!E.normalMap,lt=!!E.displacementMap,He=!!E.emissiveMap,L=!!E.metalnessMap,b=!!E.roughnessMap,$=E.anisotropy>0,ie=E.clearcoat>0,he=E.dispersion>0,ne=E.iridescence>0,Ue=E.sheen>0,Se=E.transmission>0,Ie=$&&!!E.anisotropyMap,nt=ie&&!!E.clearcoatMap,pe=ie&&!!E.clearcoatNormalMap,Le=ie&&!!E.clearcoatRoughnessMap,Ve=ne&&!!E.iridescenceMap,Ge=ne&&!!E.iridescenceThicknessMap,ye=Ue&&!!E.sheenColorMap,qe=Ue&&!!E.sheenRoughnessMap,Ze=!!E.specularMap,ht=!!E.specularColorMap,k=!!E.specularIntensityMap,Re=Se&&!!E.transmissionMap,Q=Se&&!!E.thicknessMap,ce=!!E.gradientMap,Ae=!!E.alphaMap,be=E.alphaTest>0,it=!!E.alphaHash,yt=!!E.extensions;let Bt=wi;E.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const ct={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:J,fragmentShader:oe,defines:E.defines,customVertexShaderID:ve,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:de,batchingColor:de&&Z._colorsTexture!==null,instancing:re,instancingColor:re&&Z.instanceColor!==null,instancingMorph:re&&Z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Vt,alphaToCoverage:!!E.alphaToCoverage,map:ge,matcap:Pe,envMap:N,envMapMode:N&&G.mapping,envMapCubeUVHeight:se,aoMap:je,lightMap:De,bumpMap:Te,normalMap:Oe,displacementMap:f&&lt,emissiveMap:He,normalMapObjectSpace:Oe&&E.normalMapType===Ip,normalMapTangentSpace:Oe&&E.normalMapType===cf,metalnessMap:L,roughnessMap:b,anisotropy:$,anisotropyMap:Ie,clearcoat:ie,clearcoatMap:nt,clearcoatNormalMap:pe,clearcoatRoughnessMap:Le,dispersion:he,iridescence:ne,iridescenceMap:Ve,iridescenceThicknessMap:Ge,sheen:Ue,sheenColorMap:ye,sheenRoughnessMap:qe,specularMap:Ze,specularColorMap:ht,specularIntensityMap:k,transmission:Se,transmissionMap:Re,thicknessMap:Q,gradientMap:ce,opaque:E.transparent===!1&&E.blending===ws&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:be,alphaHash:it,combine:E.combine,mapUv:ge&&m(E.map.channel),aoMapUv:je&&m(E.aoMap.channel),lightMapUv:De&&m(E.lightMap.channel),bumpMapUv:Te&&m(E.bumpMap.channel),normalMapUv:Oe&&m(E.normalMap.channel),displacementMapUv:lt&&m(E.displacementMap.channel),emissiveMapUv:He&&m(E.emissiveMap.channel),metalnessMapUv:L&&m(E.metalnessMap.channel),roughnessMapUv:b&&m(E.roughnessMap.channel),anisotropyMapUv:Ie&&m(E.anisotropyMap.channel),clearcoatMapUv:nt&&m(E.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&m(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&m(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&m(E.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(E.sheenColorMap.channel),sheenRoughnessMapUv:qe&&m(E.sheenRoughnessMap.channel),specularMapUv:Ze&&m(E.specularMap.channel),specularColorMapUv:ht&&m(E.specularColorMap.channel),specularIntensityMapUv:k&&m(E.specularIntensityMap.channel),transmissionMapUv:Re&&m(E.transmissionMap.channel),thicknessMapUv:Q&&m(E.thicknessMap.channel),alphaMapUv:Ae&&m(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Oe||$),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!H.attributes.uv&&(ge||Ae),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Xe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:ge&&E.map.isVideoTexture===!0&&ft.getTransfer(E.map.colorSpace)===St,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===hn,flipSided:E.side===en,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:yt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&E.extensions.multiDraw===!0||de)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function S(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)C.push(Y),C.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(M(C,E),T(C,E),C.push(i.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function M(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function T(E,C){a.disableAll(),C.supportsVertexTextures&&a.enable(0),C.instancing&&a.enable(1),C.instancingColor&&a.enable(2),C.instancingMorph&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),C.dispersion&&a.enable(20),C.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reverseDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),E.push(a.mask)}function I(E){const C=_[E.type];let Y;if(C){const V=Un[C];Y=M0.clone(V.uniforms)}else Y=E.uniforms;return Y}function P(E,C){let Y;for(let V=0,Z=h.length;V<Z;V++){const q=h[V];if(q.cacheKey===C){Y=q,++Y.usedTimes;break}}return Y===void 0&&(Y=new Ov(i,C,E,r),h.push(Y)),Y}function R(E){if(--E.usedTimes===0){const C=h.indexOf(E);h[C]=h[h.length-1],h.pop(),E.destroy()}}function O(E){l.remove(E)}function j(){l.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:I,acquireProgram:P,releaseProgram:R,releaseShaderCache:O,programs:h,dispose:j}}function kv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function iu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function su(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Xv),n.length>1&&n.sort(d||iu),s.length>1&&s.sort(d||iu)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Hv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new su,i.set(n,[o])):s>=r.length?(o=new su,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new We};break;case"SpotLight":t={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Vv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Gv=0;function Zv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Wv(i){const e=new Yv,t=Vv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new $e,o=new $e;function a(c){let h=0,u=0,d=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,M=0,T=0,I=0,P=0,R=0;c.sort(Zv);for(let j=0,E=c.length;j<E;j++){const C=c[j],Y=C.color,V=C.intensity,Z=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=Y.r*V,u+=Y.g*V,d+=Y.b*V;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],V);R++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,G=t.get(C);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=C.shadow.matrix,S++}n.directional[f]=H,f++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(Y).multiplyScalar(V),H.distance=Z,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[_]=H;const K=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,K.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[_]=K.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=q,T++}_++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(Y).multiplyScalar(V),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=H,m++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const K=C.shadow,G=t.get(C);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=H,g++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(V),H.groundColor.copy(C.groundColor).multiplyScalar(V),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const O=n.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==S||O.numPointShadows!==M||O.numSpotShadows!==T||O.numSpotMaps!==I||O.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=T+I-P,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,O.directionalLength=f,O.pointLength=g,O.spotLength=_,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=S,O.numPointShadows=M,O.numSpotShadows=T,O.numSpotMaps=I,O.numLightProbes=R,n.version=Gv++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const M=c[p];if(M.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),u++}else if(M.isSpotLight){const T=n.spot[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function ru(i){const e=new Wv(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function $v(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ru(i),e.set(s,[a])):r>=o.length?(a=new ru(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class jv extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qv extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jv=`uniform sampler2D shadow_pass;
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
}`;function Qv(i,e,t){let n=new kl;const s=new Ce,r=new Ce,o=new mt,a=new jv({depthPacking:Pp}),l=new qv,c={},h=t.maxTextureSize,u={[si]:en,[en]:si,[hn]:hn},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Kv,fragmentShader:Jv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd;let p=this.type;this.render=function(P,R,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const j=i.getRenderTarget(),E=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(bi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const V=p!==Qn&&this.type===Qn,Z=p===Qn&&this.type!==Qn;for(let q=0,H=P.length;q<H;q++){const K=P[q],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const se=G.getFrameExtents();if(s.multiply(se),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,G.mapSize.y=r.y)),G.map===null||V===!0||Z===!0){const xe=this.type!==Qn?{minFilter:Qt,magFilter:Qt}:{};G.map!==null&&G.map.dispose(),G.map=new Ki(s.x,s.y,xe),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const le=G.getViewportCount();for(let xe=0;xe<le;xe++){const ae=G.getViewport(xe);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),Y.viewport(o),G.updateMatrices(K,xe),n=G.getFrustum(),T(R,O,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===Qn&&S(G,O),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(j,E,C)};function S(P,R){const O=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ki(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,O,d,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,O,f,_,null)}function M(P,R,O,j){let E=null;const C=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)E=C;else if(E=O.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=E.uuid,V=R.uuid;let Z=c[Y];Z===void 0&&(Z={},c[Y]=Z);let q=Z[V];q===void 0&&(q=E.clone(),Z[V]=q,R.addEventListener("dispose",I)),E=q}if(E.visible=R.visible,E.wireframe=R.wireframe,j===Qn?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=i.properties.get(E);Y.light=O}return E}function T(P,R,O,j,E){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===Qn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const V=e.update(P),Z=P.material;if(Array.isArray(Z)){const q=V.groups;for(let H=0,K=q.length;H<K;H++){const G=q[H],se=Z[G.materialIndex];if(se&&se.visible){const le=M(P,se,j,E);P.onBeforeShadow(i,P,R,O,V,le,G),i.renderBufferDirect(O,null,V,le,P,G),P.onAfterShadow(i,P,R,O,V,le,G)}}}else if(Z.visible){const q=M(P,Z,j,E);P.onBeforeShadow(i,P,R,O,V,q,null),i.renderBufferDirect(O,null,V,q,P,null),P.onAfterShadow(i,P,R,O,V,q,null)}}const Y=P.children;for(let V=0,Z=Y.length;V<Z;V++)T(Y[V],R,O,j,E)}function I(P){P.target.removeEventListener("dispose",I);for(const O in c){const j=c[O],E=P.target.uuid;E in j&&(j[E].dispose(),delete j[E])}}}const ey={[wc]:Rc,[Cc]:Lc,[Pc]:Dc,[Ls]:Ic,[Rc]:wc,[Lc]:Cc,[Dc]:Pc,[Ic]:Ls};function ty(i){function e(){let k=!1;const Re=new mt;let Q=null;const ce=new mt(0,0,0,0);return{setMask:function(Ae){Q!==Ae&&!k&&(i.colorMask(Ae,Ae,Ae,Ae),Q=Ae)},setLocked:function(Ae){k=Ae},setClear:function(Ae,be,it,yt,Bt){Bt===!0&&(Ae*=yt,be*=yt,it*=yt),Re.set(Ae,be,it,yt),ce.equals(Re)===!1&&(i.clearColor(Ae,be,it,yt),ce.copy(Re))},reset:function(){k=!1,Q=null,ce.set(-1,0,0,0)}}}function t(){let k=!1,Re=!1,Q=null,ce=null,Ae=null;return{setReversed:function(be){Re=be},setTest:function(be){be?ve(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(be){Q!==be&&!k&&(i.depthMask(be),Q=be)},setFunc:function(be){if(Re&&(be=ey[be]),ce!==be){switch(be){case wc:i.depthFunc(i.NEVER);break;case Rc:i.depthFunc(i.ALWAYS);break;case Cc:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case Pc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Lc:i.depthFunc(i.GREATER);break;case Dc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=be}},setLocked:function(be){k=be},setClear:function(be){Ae!==be&&(i.clearDepth(be),Ae=be)},reset:function(){k=!1,Q=null,ce=null,Ae=null}}}function n(){let k=!1,Re=null,Q=null,ce=null,Ae=null,be=null,it=null,yt=null,Bt=null;return{setTest:function(ct){k||(ct?ve(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(ct){Re!==ct&&!k&&(i.stencilMask(ct),Re=ct)},setFunc:function(ct,_t,rn){(Q!==ct||ce!==_t||Ae!==rn)&&(i.stencilFunc(ct,_t,rn),Q=ct,ce=_t,Ae=rn)},setOp:function(ct,_t,rn){(be!==ct||it!==_t||yt!==rn)&&(i.stencilOp(ct,_t,rn),be=ct,it=_t,yt=rn)},setLocked:function(ct){k=ct},setClear:function(ct){Bt!==ct&&(i.clearStencil(ct),Bt=ct)},reset:function(){k=!1,Re=null,Q=null,ce=null,Ae=null,be=null,it=null,yt=null,Bt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,S=null,M=null,T=null,I=null,P=new We(0,0,0),R=0,O=!1,j=null,E=null,C=null,Y=null,V=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=H>=2);let G=null,se={};const le=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),ae=new mt().fromArray(le),Xe=new mt().fromArray(xe);function J(k,Re,Q,ce){const Ae=new Uint8Array(4),be=i.createTexture();i.bindTexture(k,be),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<Q;it++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(Re+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return be}const oe={};oe[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ve(i.DEPTH_TEST),r.setFunc(Ls),De(!1),Te(fh),ve(i.CULL_FACE),N(bi);function ve(k){c[k]!==!0&&(i.enable(k),c[k]=!0)}function me(k){c[k]!==!1&&(i.disable(k),c[k]=!1)}function Fe(k,Re){return h[k]!==Re?(i.bindFramebuffer(k,Re),h[k]=Re,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Re),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function re(k,Re){let Q=d,ce=!1;if(k){Q=u.get(Re),Q===void 0&&(Q=[],u.set(Re,Q));const Ae=k.textures;if(Q.length!==Ae.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let be=0,it=Ae.length;be<it;be++)Q[be]=i.COLOR_ATTACHMENT0+be;Q.length=Ae.length,ce=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ce=!0);ce&&i.drawBuffers(Q)}function de(k){return f!==k?(i.useProgram(k),f=k,!0):!1}const ge={[Vi]:i.FUNC_ADD,[Qm]:i.FUNC_SUBTRACT,[ep]:i.FUNC_REVERSE_SUBTRACT};ge[tp]=i.MIN,ge[np]=i.MAX;const Pe={[ip]:i.ZERO,[sp]:i.ONE,[rp]:i.SRC_COLOR,[Ac]:i.SRC_ALPHA,[up]:i.SRC_ALPHA_SATURATE,[lp]:i.DST_COLOR,[ap]:i.DST_ALPHA,[op]:i.ONE_MINUS_SRC_COLOR,[bc]:i.ONE_MINUS_SRC_ALPHA,[hp]:i.ONE_MINUS_DST_COLOR,[cp]:i.ONE_MINUS_DST_ALPHA,[dp]:i.CONSTANT_COLOR,[fp]:i.ONE_MINUS_CONSTANT_COLOR,[mp]:i.CONSTANT_ALPHA,[pp]:i.ONE_MINUS_CONSTANT_ALPHA};function N(k,Re,Q,ce,Ae,be,it,yt,Bt,ct){if(k===bi){g===!0&&(me(i.BLEND),g=!1);return}if(g===!1&&(ve(i.BLEND),g=!0),k!==Jm){if(k!==_||ct!==O){if((m!==Vi||M!==Vi)&&(i.blendEquation(i.FUNC_ADD),m=Vi,M=Vi),ct)switch(k){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cr:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ph:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ph:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}p=null,S=null,T=null,I=null,P.set(0,0,0),R=0,_=k,O=ct}return}Ae=Ae||Re,be=be||Q,it=it||ce,(Re!==m||Ae!==M)&&(i.blendEquationSeparate(ge[Re],ge[Ae]),m=Re,M=Ae),(Q!==p||ce!==S||be!==T||it!==I)&&(i.blendFuncSeparate(Pe[Q],Pe[ce],Pe[be],Pe[it]),p=Q,S=ce,T=be,I=it),(yt.equals(P)===!1||Bt!==R)&&(i.blendColor(yt.r,yt.g,yt.b,Bt),P.copy(yt),R=Bt),_=k,O=!1}function je(k,Re){k.side===hn?me(i.CULL_FACE):ve(i.CULL_FACE);let Q=k.side===en;Re&&(Q=!Q),De(Q),k.blending===ws&&k.transparent===!1?N(bi):N(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);const ce=k.stencilWrite;o.setTest(ce),ce&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),lt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(k){j!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),j=k)}function Te(k){k!==jm?(ve(i.CULL_FACE),k!==E&&(k===fh?i.cullFace(i.BACK):k===qm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),E=k}function Oe(k){k!==C&&(q&&i.lineWidth(k),C=k)}function lt(k,Re,Q){k?(ve(i.POLYGON_OFFSET_FILL),(Y!==Re||V!==Q)&&(i.polygonOffset(Re,Q),Y=Re,V=Q)):me(i.POLYGON_OFFSET_FILL)}function He(k){k?ve(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function L(k){k===void 0&&(k=i.TEXTURE0+Z-1),G!==k&&(i.activeTexture(k),G=k)}function b(k,Re,Q){Q===void 0&&(G===null?Q=i.TEXTURE0+Z-1:Q=G);let ce=se[Q];ce===void 0&&(ce={type:void 0,texture:void 0},se[Q]=ce),(ce.type!==k||ce.texture!==Re)&&(G!==Q&&(i.activeTexture(Q),G=Q),i.bindTexture(k,Re||oe[k]),ce.type=k,ce.texture=Re)}function $(){const k=se[G];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ge(k){ae.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ae.copy(k))}function ye(k){Xe.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Xe.copy(k))}function qe(k,Re){let Q=l.get(Re);Q===void 0&&(Q=new WeakMap,l.set(Re,Q));let ce=Q.get(k);ce===void 0&&(ce=i.getUniformBlockIndex(Re,k.name),Q.set(k,ce))}function Ze(k,Re){const ce=l.get(Re).get(k);a.get(Re)!==ce&&(i.uniformBlockBinding(Re,ce,k.__bindingPointIndex),a.set(Re,ce))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,se={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,S=null,M=null,T=null,I=null,P=new We(0,0,0),R=0,O=!1,j=null,E=null,C=null,Y=null,V=null,ae.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ve,disable:me,bindFramebuffer:Fe,drawBuffers:re,useProgram:de,setBlending:N,setMaterial:je,setFlipSided:De,setCullFace:Te,setLineWidth:Oe,setPolygonOffset:lt,setScissorTest:He,activeTexture:L,bindTexture:b,unbindTexture:$,compressedTexImage2D:ie,compressedTexImage3D:he,texImage2D:Le,texImage3D:Ve,updateUBOMapping:qe,uniformBlockBinding:Ze,texStorage2D:nt,texStorage3D:pe,texSubImage2D:ne,texSubImage3D:Ue,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ie,scissor:Ge,viewport:ye,reset:ht}}function ou(i,e,t,n){const s=ny(n);switch(t){case Qd:return i*e;case tf:return i*e;case nf:return i*e*2;case Ll:return i*e/s.components*s.byteLength;case Dl:return i*e/s.components*s.byteLength;case sf:return i*e*2/s.components*s.byteLength;case Nl:return i*e*2/s.components*s.byteLength;case ef:return i*e*3/s.components*s.byteLength;case dn:return i*e*4/s.components*s.byteLength;case Ol:return i*e*4/s.components*s.byteLength;case Do:case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oo:case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:case zc:return Math.max(i,16)*Math.max(e,8)/4;case Uc:case Bc:return Math.max(i,8)*Math.max(e,8)/2;case kc:case Xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $c:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fo:case il:case sl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rf:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ol:case al:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ny(i){switch(i){case ri:case qd:return{byteLength:1,components:1};case Pr:case Kd:case Fr:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case qi:case Cl:case Rn:return{byteLength:4,components:1};case Jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function iy(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return f?new OffscreenCanvas(L,b):Dr("canvas")}function _(L,b,$){let ie=1;const he=He(L);if((he.width>$||he.height>$)&&(ie=$/Math.max(he.width,he.height)),ie<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ne=Math.floor(ie*he.width),Ue=Math.floor(ie*he.height);u===void 0&&(u=g(ne,Ue));const Se=b?g(ne,Ue):u;return Se.width=ne,Se.height=Ue,Se.getContext("2d").drawImage(L,0,0,ne,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ne+"x"+Ue+")."),Se}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==Qt&&L.minFilter!==un}function p(L){i.generateMipmap(L)}function S(L,b,$,ie,he=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ne=b;if(b===i.RED&&($===i.FLOAT&&(ne=i.R32F),$===i.HALF_FLOAT&&(ne=i.R16F),$===i.UNSIGNED_BYTE&&(ne=i.R8)),b===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ne=i.R8UI),$===i.UNSIGNED_SHORT&&(ne=i.R16UI),$===i.UNSIGNED_INT&&(ne=i.R32UI),$===i.BYTE&&(ne=i.R8I),$===i.SHORT&&(ne=i.R16I),$===i.INT&&(ne=i.R32I)),b===i.RG&&($===i.FLOAT&&(ne=i.RG32F),$===i.HALF_FLOAT&&(ne=i.RG16F),$===i.UNSIGNED_BYTE&&(ne=i.RG8)),b===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ne=i.RG8UI),$===i.UNSIGNED_SHORT&&(ne=i.RG16UI),$===i.UNSIGNED_INT&&(ne=i.RG32UI),$===i.BYTE&&(ne=i.RG8I),$===i.SHORT&&(ne=i.RG16I),$===i.INT&&(ne=i.RG32I)),b===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),$===i.UNSIGNED_INT&&(ne=i.RGB32UI),$===i.BYTE&&(ne=i.RGB8I),$===i.SHORT&&(ne=i.RGB16I),$===i.INT&&(ne=i.RGB32I)),b===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),$===i.UNSIGNED_INT&&(ne=i.RGBA32UI),$===i.BYTE&&(ne=i.RGBA8I),$===i.SHORT&&(ne=i.RGBA16I),$===i.INT&&(ne=i.RGBA32I)),b===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),b===i.RGBA){const Ue=he?Jo:ft.getTransfer(ie);$===i.FLOAT&&(ne=i.RGBA32F),$===i.HALF_FLOAT&&(ne=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ne=Ue===St?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(L,b){let $;return L?b===null||b===qi||b===Os?$=i.DEPTH24_STENCIL8:b===Rn?$=i.DEPTH32F_STENCIL8:b===Pr&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qi||b===Os?$=i.DEPTH_COMPONENT24:b===Rn?$=i.DEPTH_COMPONENT32F:b===Pr&&($=i.DEPTH_COMPONENT16),$}function T(L,b){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Qt&&L.minFilter!==un?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function I(L){const b=L.target;b.removeEventListener("dispose",I),R(b),b.isVideoTexture&&h.delete(b)}function P(L){const b=L.target;b.removeEventListener("dispose",P),j(b)}function R(L){const b=n.get(L);if(b.__webglInit===void 0)return;const $=L.source,ie=d.get($);if(ie){const he=ie[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&O(L),Object.keys(ie).length===0&&d.delete($)}n.remove(L)}function O(L){const b=n.get(L);i.deleteTexture(b.__webglTexture);const $=L.source,ie=d.get($);delete ie[b.__cacheKey],o.memory.textures--}function j(L){const b=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let he=0;he<b.__webglFramebuffer[ie].length;he++)i.deleteFramebuffer(b.__webglFramebuffer[ie][he]);else i.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)i.deleteFramebuffer(b.__webglFramebuffer[ie]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=L.textures;for(let ie=0,he=$.length;ie<he;ie++){const ne=n.get($[ie]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove($[ie])}n.remove(L)}let E=0;function C(){E=0}function Y(){const L=E;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),E+=1,L}function V(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function Z(L,b){const $=n.get(L);if(L.isVideoTexture&&Oe(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const ie=L.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe($,L,b);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+b)}function q(L,b){const $=n.get(L);if(L.version>0&&$.__version!==L.version){Xe($,L,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+b)}function H(L,b){const $=n.get(L);if(L.version>0&&$.__version!==L.version){Xe($,L,b);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+b)}function K(L,b){const $=n.get(L);if(L.version>0&&$.__version!==L.version){J($,L,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+b)}const G={[ji]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},se={[Qt]:i.NEAREST,[jd]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},le={[Lp]:i.NEVER,[Bp]:i.ALWAYS,[Dp]:i.LESS,[lf]:i.LEQUAL,[Np]:i.EQUAL,[Fp]:i.GEQUAL,[Op]:i.GREATER,[Up]:i.NOTEQUAL};function xe(L,b){if(b.type===Rn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===un||b.magFilter===Lo||b.magFilter===_r||b.magFilter===ti||b.minFilter===un||b.minFilter===Lo||b.minFilter===_r||b.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,G[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,G[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,G[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,se[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,se[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,le[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qt||b.minFilter!==_r&&b.minFilter!==ti||b.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ae(L,b){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",I));const ie=b.source;let he=d.get(ie);he===void 0&&(he={},d.set(ie,he));const ne=V(b);if(ne!==L.__cacheKey){he[ne]===void 0&&(he[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),he[ne].usedTimes++;const Ue=he[L.__cacheKey];Ue!==void 0&&(he[L.__cacheKey].usedTimes--,Ue.usedTimes===0&&O(b)),L.__cacheKey=ne,L.__webglTexture=he[ne].texture}return $}function Xe(L,b,$){let ie=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=i.TEXTURE_3D);const he=ae(L,b),ne=b.source;t.bindTexture(ie,L.__webglTexture,i.TEXTURE0+$);const Ue=n.get(ne);if(ne.version!==Ue.__version||he===!0){t.activeTexture(i.TEXTURE0+$);const Se=ft.getPrimaries(ft.workingColorSpace),Ie=b.colorSpace===Mi?null:ft.getPrimaries(b.colorSpace),nt=b.colorSpace===Mi||Se===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let pe=_(b.image,!1,s.maxTextureSize);pe=lt(b,pe);const Le=r.convert(b.format,b.colorSpace),Ve=r.convert(b.type);let Ge=S(b.internalFormat,Le,Ve,b.colorSpace,b.isVideoTexture);xe(ie,b);let ye;const qe=b.mipmaps,Ze=b.isVideoTexture!==!0,ht=Ue.__version===void 0||he===!0,k=ne.dataReady,Re=T(b,pe);if(b.isDepthTexture)Ge=M(b.format===Us,b.type),ht&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,Ge,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Ge,pe.width,pe.height,0,Le,Ve,null));else if(b.isDataTexture)if(qe.length>0){Ze&&ht&&t.texStorage2D(i.TEXTURE_2D,Re,Ge,qe[0].width,qe[0].height);for(let Q=0,ce=qe.length;Q<ce;Q++)ye=qe[Q],Ze?k&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ye.width,ye.height,Le,Ve,ye.data):t.texImage2D(i.TEXTURE_2D,Q,Ge,ye.width,ye.height,0,Le,Ve,ye.data);b.generateMipmaps=!1}else Ze?(ht&&t.texStorage2D(i.TEXTURE_2D,Re,Ge,pe.width,pe.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,Le,Ve,pe.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,pe.width,pe.height,0,Le,Ve,pe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ze&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ge,qe[0].width,qe[0].height,pe.depth);for(let Q=0,ce=qe.length;Q<ce;Q++)if(ye=qe[Q],b.format!==dn)if(Le!==null)if(Ze){if(k)if(b.layerUpdates.size>0){const Ae=ou(ye.width,ye.height,b.format,b.type);for(const be of b.layerUpdates){const it=ye.data.subarray(be*Ae/ye.data.BYTES_PER_ELEMENT,(be+1)*Ae/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,be,ye.width,ye.height,1,Le,it,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ye.width,ye.height,pe.depth,Le,ye.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ge,ye.width,ye.height,pe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ye.width,ye.height,pe.depth,Le,Ve,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ge,ye.width,ye.height,pe.depth,0,Le,Ve,ye.data)}else{Ze&&ht&&t.texStorage2D(i.TEXTURE_2D,Re,Ge,qe[0].width,qe[0].height);for(let Q=0,ce=qe.length;Q<ce;Q++)ye=qe[Q],b.format!==dn?Le!==null?Ze?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ye.width,ye.height,Le,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ge,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?k&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ye.width,ye.height,Le,Ve,ye.data):t.texImage2D(i.TEXTURE_2D,Q,Ge,ye.width,ye.height,0,Le,Ve,ye.data)}else if(b.isDataArrayTexture)if(Ze){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ge,pe.width,pe.height,pe.depth),k)if(b.layerUpdates.size>0){const Q=ou(pe.width,pe.height,b.format,b.type);for(const ce of b.layerUpdates){const Ae=pe.data.subarray(ce*Q/pe.data.BYTES_PER_ELEMENT,(ce+1)*Q/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,pe.width,pe.height,1,Le,Ve,Ae)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Le,Ve,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,pe.width,pe.height,pe.depth,0,Le,Ve,pe.data);else if(b.isData3DTexture)Ze?(ht&&t.texStorage3D(i.TEXTURE_3D,Re,Ge,pe.width,pe.height,pe.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Le,Ve,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,pe.width,pe.height,pe.depth,0,Le,Ve,pe.data);else if(b.isFramebufferTexture){if(ht)if(Ze)t.texStorage2D(i.TEXTURE_2D,Re,Ge,pe.width,pe.height);else{let Q=pe.width,ce=pe.height;for(let Ae=0;Ae<Re;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Ge,Q,ce,0,Le,Ve,null),Q>>=1,ce>>=1}}else if(qe.length>0){if(Ze&&ht){const Q=He(qe[0]);t.texStorage2D(i.TEXTURE_2D,Re,Ge,Q.width,Q.height)}for(let Q=0,ce=qe.length;Q<ce;Q++)ye=qe[Q],Ze?k&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Le,Ve,ye):t.texImage2D(i.TEXTURE_2D,Q,Ge,Le,Ve,ye);b.generateMipmaps=!1}else if(Ze){if(ht){const Q=He(pe);t.texStorage2D(i.TEXTURE_2D,Re,Ge,Q.width,Q.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Ve,pe)}else t.texImage2D(i.TEXTURE_2D,0,Ge,Le,Ve,pe);m(b)&&p(ie),Ue.__version=ne.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function J(L,b,$){if(b.image.length!==6)return;const ie=ae(L,b),he=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+$);const ne=n.get(he);if(he.version!==ne.__version||ie===!0){t.activeTexture(i.TEXTURE0+$);const Ue=ft.getPrimaries(ft.workingColorSpace),Se=b.colorSpace===Mi?null:ft.getPrimaries(b.colorSpace),Ie=b.colorSpace===Mi||Ue===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const nt=b.isCompressedTexture||b.image[0].isCompressedTexture,pe=b.image[0]&&b.image[0].isDataTexture,Le=[];for(let ce=0;ce<6;ce++)!nt&&!pe?Le[ce]=_(b.image[ce],!0,s.maxCubemapSize):Le[ce]=pe?b.image[ce].image:b.image[ce],Le[ce]=lt(b,Le[ce]);const Ve=Le[0],Ge=r.convert(b.format,b.colorSpace),ye=r.convert(b.type),qe=S(b.internalFormat,Ge,ye,b.colorSpace),Ze=b.isVideoTexture!==!0,ht=ne.__version===void 0||ie===!0,k=he.dataReady;let Re=T(b,Ve);xe(i.TEXTURE_CUBE_MAP,b);let Q;if(nt){Ze&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,qe,Ve.width,Ve.height);for(let ce=0;ce<6;ce++){Q=Le[ce].mipmaps;for(let Ae=0;Ae<Q.length;Ae++){const be=Q[Ae];b.format!==dn?Ge!==null?Ze?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,0,0,be.width,be.height,Ge,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,qe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,0,0,be.width,be.height,Ge,ye,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,qe,be.width,be.height,0,Ge,ye,be.data)}}}else{if(Q=b.mipmaps,Ze&&ht){Q.length>0&&Re++;const ce=He(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,qe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(pe){Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Le[ce].width,Le[ce].height,Ge,ye,Le[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,Le[ce].width,Le[ce].height,0,Ge,ye,Le[ce].data);for(let Ae=0;Ae<Q.length;Ae++){const it=Q[Ae].image[ce].image;Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,0,0,it.width,it.height,Ge,ye,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,qe,it.width,it.height,0,Ge,ye,it.data)}}else{Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ge,ye,Le[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,Ge,ye,Le[ce]);for(let Ae=0;Ae<Q.length;Ae++){const be=Q[Ae];Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,0,0,Ge,ye,be.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,qe,Ge,ye,be.image[ce])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),ne.__version=he.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function oe(L,b,$,ie,he,ne){const Ue=r.convert($.format,$.colorSpace),Se=r.convert($.type),Ie=S($.internalFormat,Ue,Se,$.colorSpace);if(!n.get(b).__hasExternalTextures){const pe=Math.max(1,b.width>>ne),Le=Math.max(1,b.height>>ne);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,ne,Ie,pe,Le,b.depth,0,Ue,Se,null):t.texImage2D(he,ne,Ie,pe,Le,0,Ue,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Te(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,he,n.get($).__webglTexture,0,De(b)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,he,n.get($).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(L,b,$){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){const ie=b.depthTexture,he=ie&&ie.isDepthTexture?ie.type:null,ne=M(b.stencilBuffer,he),Ue=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=De(b);Te(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,ne,b.width,b.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ne,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ne,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,L)}else{const ie=b.textures;for(let he=0;he<ie.length;he++){const ne=ie[he],Ue=r.convert(ne.format,ne.colorSpace),Se=r.convert(ne.type),Ie=S(ne.internalFormat,Ue,Se,ne.colorSpace),nt=De(b);$&&Te(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Ie,b.width,b.height):Te(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Ie,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z(b.depthTexture,0);const ie=n.get(b.depthTexture).__webglTexture,he=De(b);if(b.depthTexture.format===Rs)Te(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(b.depthTexture.format===Us)Te(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Fe(L){const b=n.get(L),$=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ie=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ie){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ie.removeEventListener("dispose",he)};ie.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=ie}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");me(b.__webglFramebuffer,L)}else if($){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]===void 0)b.__webglDepthbuffer[ie]=i.createRenderbuffer(),ve(b.__webglDepthbuffer[ie],L,!1);else{const he=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=b.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ve(b.__webglDepthbuffer,L,!1);else{const ie=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(L,b,$){const ie=n.get(L);b!==void 0&&oe(ie.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Fe(L)}function de(L){const b=L.texture,$=n.get(L),ie=n.get(b);L.addEventListener("dispose",P);const he=L.textures,ne=L.isWebGLCubeRenderTarget===!0,Ue=he.length>1;if(Ue||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=b.version,o.memory.textures++),ne){$.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[Se]=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)$.__webglFramebuffer[Se][Ie]=i.createFramebuffer()}else $.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let Se=0;Se<b.mipmaps.length;Se++)$.__webglFramebuffer[Se]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let Se=0,Ie=he.length;Se<Ie;Se++){const nt=n.get(he[Se]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Te(L)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Se=0;Se<he.length;Se++){const Ie=he[Se];$.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[Se]);const nt=r.convert(Ie.format,Ie.colorSpace),pe=r.convert(Ie.type),Le=S(Ie.internalFormat,nt,pe,Ie.colorSpace,L.isXRRenderTarget===!0),Ve=De(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Le,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,$.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),ve($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),xe(i.TEXTURE_CUBE_MAP,b);for(let Se=0;Se<6;Se++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)oe($.__webglFramebuffer[Se][Ie],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie);else oe($.__webglFramebuffer[Se],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let Se=0,Ie=he.length;Se<Ie;Se++){const nt=he[Se],pe=n.get(nt);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),xe(i.TEXTURE_2D,nt),oe($.__webglFramebuffer,L,nt,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,0),m(nt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Se=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,ie.__webglTexture),xe(Se,b),b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)oe($.__webglFramebuffer[Ie],L,b,i.COLOR_ATTACHMENT0,Se,Ie);else oe($.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,Se,0);m(b)&&p(Se),t.unbindTexture()}L.depthBuffer&&Fe(L)}function ge(L){const b=L.textures;for(let $=0,ie=b.length;$<ie;$++){const he=b[$];if(m(he)){const ne=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ue=n.get(he).__webglTexture;t.bindTexture(ne,Ue),p(ne),t.unbindTexture()}}}const Pe=[],N=[];function je(L){if(L.samples>0){if(Te(L)===!1){const b=L.textures,$=L.width,ie=L.height;let he=i.COLOR_BUFFER_BIT;const ne=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(L),Se=b.length>1;if(Se)for(let Ie=0;Ie<b.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ie]);const nt=n.get(b[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,$,ie,0,0,$,ie,he,i.NEAREST),l===!0&&(Pe.length=0,N.length=0,Pe.push(i.COLOR_ATTACHMENT0+Ie),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Pe.push(ne),N.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Ie=0;Ie<b.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ie]);const nt=n.get(b[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function De(L){return Math.min(s.maxSamples,L.samples)}function Te(L){const b=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Oe(L){const b=o.render.frame;h.get(L)!==b&&(h.set(L,b),L.update())}function lt(L,b){const $=L.colorSpace,ie=L.format,he=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==Vt&&$!==Mi&&(ft.getTransfer($)===St?(ie!==dn||he!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),b}function He(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=C,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=re,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Te}function sy(i,e){function t(n,s=Mi){let r;const o=ft.getTransfer(s);if(n===ri)return i.UNSIGNED_BYTE;if(n===Pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qd)return i.BYTE;if(n===Kd)return i.SHORT;if(n===Pr)return i.UNSIGNED_SHORT;if(n===Cl)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Fr)return i.HALF_FLOAT;if(n===Qd)return i.ALPHA;if(n===ef)return i.RGB;if(n===dn)return i.RGBA;if(n===tf)return i.LUMINANCE;if(n===nf)return i.LUMINANCE_ALPHA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Us)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===sf)return i.RG;if(n===Nl)return i.RG_INTEGER;if(n===Ol)return i.RGBA_INTEGER;if(n===Do||n===No||n===Oo||n===Uo)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uc||n===Fc||n===Bc||n===zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kc||n===Xc||n===Hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kc||n===Xc)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yc||n===Vc||n===Gc||n===Zc||n===Wc||n===$c||n===jc||n===qc||n===Kc||n===Jc||n===Qc||n===el||n===tl||n===nl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$c)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===il||n===sl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rf||n===rl||n===ol||n===al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class ry extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ht extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oy={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cy=`
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

}`;class ly{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ot,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new oi({vertexShader:ay,fragmentShader:cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new zr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hy extends Qi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new ly,m=t.getContextAttributes();let p=null,S=null;const M=[],T=[],I=new Ce;let P=null;const R=new Jt;R.layers.enable(1),R.viewport=new mt;const O=new Jt;O.layers.enable(2),O.viewport=new mt;const j=[R,O],E=new ry;E.layers.enable(1),E.layers.enable(2);let C=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=M[J];return oe===void 0&&(oe=new Ya,M[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=M[J];return oe===void 0&&(oe=new Ya,M[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=M[J];return oe===void 0&&(oe=new Ya,M[J]=oe),oe.getHandSpace()};function V(J){const oe=T.indexOf(J.inputSource);if(oe===-1)return;const ve=M[oe];ve!==void 0&&(ve.update(J.inputSource,J.frame,c||o),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function Z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",q);for(let J=0;J<M.length;J++){const oe=T[J];oe!==null&&(T[J]=null,M[J].disconnect(oe))}C=null,Y=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ki(f.framebufferWidth,f.framebufferHeight,{format:dn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,ve=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?Us:Rs,ve=m.stencil?Os:qi);const Fe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ki(d.textureWidth,d.textureHeight,{format:dn,type:ri,depthTexture:new yf(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(J){for(let oe=0;oe<J.removed.length;oe++){const ve=J.removed[oe],me=T.indexOf(ve);me>=0&&(T[me]=null,M[me].disconnect(ve))}for(let oe=0;oe<J.added.length;oe++){const ve=J.added[oe];let me=T.indexOf(ve);if(me===-1){for(let re=0;re<M.length;re++)if(re>=T.length){T.push(ve),me=re;break}else if(T[re]===null){T[re]=ve,me=re;break}if(me===-1)break}const Fe=M[me];Fe&&Fe.connect(ve)}}const H=new D,K=new D;function G(J,oe,ve){H.setFromMatrixPosition(oe.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);const me=H.distanceTo(K),Fe=oe.projectionMatrix.elements,re=ve.projectionMatrix.elements,de=Fe[14]/(Fe[10]-1),ge=Fe[14]/(Fe[10]+1),Pe=(Fe[9]+1)/Fe[5],N=(Fe[9]-1)/Fe[5],je=(Fe[8]-1)/Fe[0],De=(re[8]+1)/re[0],Te=de*je,Oe=de*De,lt=me/(-je+De),He=lt*-je;if(oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(He),J.translateZ(lt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Fe[10]===-1)J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const L=de+lt,b=ge+lt,$=Te-He,ie=Oe+(me-He),he=Pe*ge/b*L,ne=N*ge/b*L;J.projectionMatrix.makePerspective($,ie,he,ne,L,b),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function se(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let oe=J.near,ve=J.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),E.near=O.near=R.near=oe,E.far=O.far=R.far=ve,(C!==E.near||Y!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,Y=E.far);const me=J.parent,Fe=E.cameras;se(E,me);for(let re=0;re<Fe.length;re++)se(Fe[re],me);Fe.length===2?G(E,R,O):E.projectionMatrix.copy(R.projectionMatrix),le(J,E,me)};function le(J,oe,ve){ve===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Fs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let xe=null;function ae(J,oe){if(h=oe.getViewerPose(c||o),g=oe,h!==null){const ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let me=!1;ve.length!==E.cameras.length&&(E.cameras.length=0,me=!0);for(let re=0;re<ve.length;re++){const de=ve[re];let ge=null;if(f!==null)ge=f.getViewport(de);else{const N=u.getViewSubImage(d,de);ge=N.viewport,re===0&&(e.setRenderTargetTextures(S,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(S))}let Pe=j[re];Pe===void 0&&(Pe=new Jt,Pe.layers.enable(re),Pe.viewport=new mt,j[re]=Pe),Pe.matrix.fromArray(de.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(de.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(ge.x,ge.y,ge.width,ge.height),re===0&&(E.matrix.copy(Pe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),me===!0&&E.cameras.push(Pe)}const Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const re=u.getDepthInformation(ve[0]);re&&re.isValid&&re.texture&&_.init(e,re,s.renderState)}}for(let ve=0;ve<M.length;ve++){const me=T[ve],Fe=M[ve];me!==null&&Fe!==void 0&&Fe.update(me,oe,c||o)}xe&&xe(J,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Xe=new vf;Xe.setAnimationLoop(ae),this.setAnimationLoop=function(J){xe=J},this.dispose=function(){}}}const Ni=new vn,uy=new $e;function dy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,M,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),M=S.envMap,T=S.envMapRotation;M&&(m.envMap.value=M,Ni.copy(T),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(uy.makeRotationFromEuler(Ni)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fy(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const T=M.program;n.uniformBlockBinding(S,T)}function c(S,M){let T=s[S.id];T===void 0&&(g(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",m));const I=M.program;n.updateUBOMapping(S,I);const P=e.render.frame;r[S.id]!==P&&(d(S),r[S.id]=P)}function h(S){const M=u();S.__bindingPointIndex=M;const T=i.createBuffer(),I=S.__size,P=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=s[S.id],T=S.uniforms,I=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,R=T.length;P<R;P++){const O=Array.isArray(T[P])?T[P]:[T[P]];for(let j=0,E=O.length;j<E;j++){const C=O[j];if(f(C,P,j,I)===!0){const Y=C.__offset,V=Array.isArray(C.value)?C.value:[C.value];let Z=0;for(let q=0;q<V.length;q++){const H=V[q],K=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,Y+Z,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,Z),Z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,M,T,I){const P=S.value,R=M+"_"+T;if(I[R]===void 0)return typeof P=="number"||typeof P=="boolean"?I[R]=P:I[R]=P.clone(),!0;{const O=I[R];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return I[R]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function g(S){const M=S.uniforms;let T=0;const I=16;for(let R=0,O=M.length;R<O;R++){const j=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,C=j.length;E<C;E++){const Y=j[E],V=Array.isArray(Y.value)?Y.value:[Y.value];for(let Z=0,q=V.length;Z<q;Z++){const H=V[Z],K=_(H),G=T%I,se=G%K.boundary,le=G+se;T+=se,le!==0&&I-le<K.storage&&(T+=I-le),Y.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=T,T+=K.storage}}}const P=T%I;return P>0&&(T+=I-P),S.__size=T,S.__cache={},this}function _(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class my{constructor(e={}){const{canvas:t=t0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=wi,this.toneMappingExposure=1;const M=this;let T=!1,I=0,P=0,R=null,O=-1,j=null;const E=new mt,C=new mt;let Y=null;const V=new We(0);let Z=0,q=t.width,H=t.height,K=1,G=null,se=null;const le=new mt(0,0,q,H),xe=new mt(0,0,q,H);let ae=!1;const Xe=new kl;let J=!1,oe=!1;const ve=new $e,me=new $e,Fe=new D,re=new mt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Pe(){return R===null?K:1}let N=n;function je(A,F){return t.getContext(A,F)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rl}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",be,!1),N===null){const F="webgl2";if(N=je(F,A),N===null)throw je(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let De,Te,Oe,lt,He,L,b,$,ie,he,ne,Ue,Se,Ie,nt,pe,Le,Ve,Ge,ye,qe,Ze,ht,k;function Re(){De=new v_(N),De.init(),Ze=new sy(N,De),Te=new f_(N,De,e,Ze),Oe=new ty(N),Te.reverseDepthBuffer&&Oe.buffers.depth.setReversed(!0),lt=new M_(N),He=new kv,L=new iy(N,De,Oe,He,Te,Ze,lt),b=new p_(M),$=new __(M),ie=new C0(N),ht=new u_(N,ie),he=new y_(N,ie,lt,ht),ne=new T_(N,he,ie,lt),Ge=new E_(N,Te,L),pe=new m_(He),Ue=new zv(M,b,$,De,Te,ht,pe),Se=new dy(M,He),Ie=new Hv,nt=new $v(De),Ve=new h_(M,b,$,Oe,ne,d,l),Le=new Qv(M,ne,Te),k=new fy(N,lt,Te,Oe),ye=new d_(N,De,lt),qe=new S_(N,De,lt),lt.programs=Ue.programs,M.capabilities=Te,M.extensions=De,M.properties=He,M.renderLists=Ie,M.shadowMap=Le,M.state=Oe,M.info=lt}Re();const Q=new hy(M,N);this.xr=Q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=De.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=De.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(q,H,!1))},this.getSize=function(A){return A.set(q,H)},this.setSize=function(A,F,B=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,H=F,t.width=Math.floor(A*K),t.height=Math.floor(F*K),B===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(q*K,H*K).floor()},this.setDrawingBufferSize=function(A,F,B){q=A,H=F,K=B,t.width=Math.floor(A*B),t.height=Math.floor(F*B),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,F,B,X){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,F,B,X),Oe.viewport(E.copy(le).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(xe)},this.setScissor=function(A,F,B,X){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,F,B,X),Oe.scissor(C.copy(xe).multiplyScalar(K).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(A){Oe.setScissorTest(ae=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(A=!0,F=!0,B=!0){let X=0;if(A){let U=!1;if(R!==null){const ee=R.texture.format;U=ee===Ol||ee===Nl||ee===Dl}if(U){const ee=R.texture.type,W=ee===ri||ee===qi||ee===Pr||ee===Os||ee===Pl||ee===Il,ue=Ve.getClearColor(),Me=Ve.getClearAlpha(),we=ue.r,_e=ue.g,fe=ue.b;W?(f[0]=we,f[1]=_e,f[2]=fe,f[3]=Me,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=we,g[1]=_e,g[2]=fe,g[3]=Me,N.clearBufferiv(N.COLOR,0,g))}else X|=N.COLOR_BUFFER_BIT}F&&(X|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ie.dispose(),nt.dispose(),He.dispose(),b.dispose(),$.dispose(),ne.dispose(),ht.dispose(),k.dispose(),Ue.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",fn),Q.removeEventListener("sessionend",Dn),on.stop()};function ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=lt.autoReset,F=Le.enabled,B=Le.autoUpdate,X=Le.needsUpdate,U=Le.type;Re(),lt.autoReset=A,Le.enabled=F,Le.autoUpdate=B,Le.needsUpdate=X,Le.type=U}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function it(A){const F=A.target;F.removeEventListener("dispose",it),yt(F)}function yt(A){Bt(A),He.remove(A)}function Bt(A){const F=He.get(A).programs;F!==void 0&&(F.forEach(function(B){Ue.releaseProgram(B)}),A.isShaderMaterial&&Ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,B,X,U,ee){F===null&&(F=de);const W=U.isMesh&&U.matrixWorld.determinant()<0,ue=Ne(A,F,B,X,U);Oe.setMaterial(X,W);let Me=B.index,we=1;if(X.wireframe===!0){if(Me=he.getWireframeAttribute(B),Me===void 0)return;we=2}const _e=B.drawRange,fe=B.attributes.position;let Je=_e.start*we,st=(_e.start+_e.count)*we;ee!==null&&(Je=Math.max(Je,ee.start*we),st=Math.min(st,(ee.start+ee.count)*we)),Me!==null?(Je=Math.max(Je,0),st=Math.min(st,Me.count)):fe!=null&&(Je=Math.max(Je,0),st=Math.min(st,fe.count));const rt=st-Je;if(rt<0||rt===1/0)return;ht.setup(U,X,ue,B,Me);let ut,Ye=ye;if(Me!==null&&(ut=ie.get(Me),Ye=qe,Ye.setIndex(ut)),U.isMesh)X.wireframe===!0?(Oe.setLineWidth(X.wireframeLinewidth*Pe()),Ye.setMode(N.LINES)):Ye.setMode(N.TRIANGLES);else if(U.isLine){let ze=X.linewidth;ze===void 0&&(ze=1),Oe.setLineWidth(ze*Pe()),U.isLineSegments?Ye.setMode(N.LINES):U.isLineLoop?Ye.setMode(N.LINE_LOOP):Ye.setMode(N.LINE_STRIP)}else U.isPoints?Ye.setMode(N.POINTS):U.isSprite&&Ye.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ye.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Ye.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ze=U._multiDrawStarts,gt=U._multiDrawCounts,at=U._multiDrawCount,Tt=Me?ie.get(Me).bytesPerElement:1,an=He.get(X).currentProgram.getUniforms();for(let $t=0;$t<at;$t++)an.setValue(N,"_gl_DrawID",$t),Ye.render(ze[$t]/Tt,gt[$t])}else if(U.isInstancedMesh)Ye.renderInstances(Je,rt,U.count);else if(B.isInstancedBufferGeometry){const ze=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,gt=Math.min(B.instanceCount,ze);Ye.renderInstances(Je,rt,gt)}else Ye.render(Je,rt)};function ct(A,F,B){A.transparent===!0&&A.side===hn&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,z(A,F,B),A.side=si,A.needsUpdate=!0,z(A,F,B),A.side=hn):z(A,F,B)}this.compile=function(A,F,B=null){B===null&&(B=A),m=nt.get(B),m.init(F),S.push(m),B.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),A!==B&&A.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const X=new Set;return A.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ee=U.material;if(ee)if(Array.isArray(ee))for(let W=0;W<ee.length;W++){const ue=ee[W];ct(ue,B,U),X.add(ue)}else ct(ee,B,U),X.add(ee)}),S.pop(),m=null,X},this.compileAsync=function(A,F,B=null){const X=this.compile(A,F,B);return new Promise(U=>{function ee(){if(X.forEach(function(W){He.get(W).currentProgram.isReady()&&X.delete(W)}),X.size===0){U(A);return}setTimeout(ee,10)}De.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let _t=null;function rn(A){_t&&_t(A)}function fn(){on.stop()}function Dn(){on.start()}const on=new vf;on.setAnimationLoop(rn),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(A){_t=A,Q.setAnimationLoop(A),A===null?on.stop():on.start()},Q.addEventListener("sessionstart",fn),Q.addEventListener("sessionend",Dn),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(F),F=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,F,R),m=nt.get(A,S.length),m.init(F),S.push(m),me.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Xe.setFromProjectionMatrix(me),oe=this.localClippingEnabled,J=pe.init(this.clippingPlanes,oe),_=Ie.get(A,p.length),_.init(),p.push(_),Q.enabled===!0&&Q.isPresenting===!0){const ee=M.xr.getDepthSensingMesh();ee!==null&&Ri(ee,F,-1/0,M.sortObjects)}Ri(A,F,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(G,se),ge=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,ge&&Ve.addToRenderList(_,A),this.info.render.frame++,J===!0&&pe.beginShadows();const B=m.state.shadowsArray;Le.render(B,A,F),J===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,U=_.transmissive;if(m.setupLights(),F.isArrayCamera){const ee=F.cameras;if(U.length>0)for(let W=0,ue=ee.length;W<ue;W++){const Me=ee[W];x(X,U,A,Me)}ge&&Ve.render(A);for(let W=0,ue=ee.length;W<ue;W++){const Me=ee[W];v(_,A,Me,Me.viewport)}}else U.length>0&&x(X,U,A,F),ge&&Ve.render(A),v(_,A,F);R!==null&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(M,A,F),ht.resetDefaultState(),O=-1,j=null,S.pop(),S.length>0?(m=S[S.length-1],J===!0&&pe.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ri(A,F,B,X){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)B=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Xe.intersectsSprite(A)){X&&re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);const W=ne.update(A),ue=A.material;ue.visible&&_.push(A,W,ue,B,re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Xe.intersectsObject(A))){const W=ne.update(A),ue=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),re.copy(A.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),re.copy(W.boundingSphere.center)),re.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(ue)){const Me=W.groups;for(let we=0,_e=Me.length;we<_e;we++){const fe=Me[we],Je=ue[fe.materialIndex];Je&&Je.visible&&_.push(A,W,Je,B,re.z,fe)}}else ue.visible&&_.push(A,W,ue,B,re.z,null)}}const ee=A.children;for(let W=0,ue=ee.length;W<ue;W++)Ri(ee[W],F,B,X)}function v(A,F,B,X){const U=A.opaque,ee=A.transmissive,W=A.transparent;m.setupLightsView(B),J===!0&&pe.setGlobalState(M.clippingPlanes,B),X&&Oe.viewport(E.copy(X)),U.length>0&&y(U,F,B),ee.length>0&&y(ee,F,B),W.length>0&&y(W,F,B),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function x(A,F,B,X){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Ki(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Fr:ri,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const ee=m.state.transmissionRenderTarget[X.id],W=X.viewport||E;ee.setSize(W.z,W.w);const ue=M.getRenderTarget();M.setRenderTarget(ee),M.getClearColor(V),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),ge&&Ve.render(B);const Me=M.toneMapping;M.toneMapping=wi;const we=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),J===!0&&pe.setGlobalState(M.clippingPlanes,X),y(A,B,X),L.updateMultisampleRenderTarget(ee),L.updateRenderTargetMipmap(ee),De.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let fe=0,Je=F.length;fe<Je;fe++){const st=F[fe],rt=st.object,ut=st.geometry,Ye=st.material,ze=st.group;if(Ye.side===hn&&rt.layers.test(X.layers)){const gt=Ye.side;Ye.side=en,Ye.needsUpdate=!0,w(rt,B,X,ut,Ye,ze),Ye.side=gt,Ye.needsUpdate=!0,_e=!0}}_e===!0&&(L.updateMultisampleRenderTarget(ee),L.updateRenderTargetMipmap(ee))}M.setRenderTarget(ue),M.setClearColor(V,Z),we!==void 0&&(X.viewport=we),M.toneMapping=Me}function y(A,F,B){const X=F.isScene===!0?F.overrideMaterial:null;for(let U=0,ee=A.length;U<ee;U++){const W=A[U],ue=W.object,Me=W.geometry,we=X===null?W.material:X,_e=W.group;ue.layers.test(B.layers)&&w(ue,F,B,Me,we,_e)}}function w(A,F,B,X,U,ee){A.onBeforeRender(M,F,B,X,U,ee),A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),U.onBeforeRender(M,F,B,X,A,ee),U.transparent===!0&&U.side===hn&&U.forceSinglePass===!1?(U.side=en,U.needsUpdate=!0,M.renderBufferDirect(B,F,X,U,A,ee),U.side=si,U.needsUpdate=!0,M.renderBufferDirect(B,F,X,U,A,ee),U.side=hn):M.renderBufferDirect(B,F,X,U,A,ee),A.onAfterRender(M,F,B,X,U,ee)}function z(A,F,B){F.isScene!==!0&&(F=de);const X=He.get(A),U=m.state.lights,ee=m.state.shadowsArray,W=U.state.version,ue=Ue.getParameters(A,U.state,ee,F,B),Me=Ue.getProgramCacheKey(ue);let we=X.programs;X.environment=A.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(A.isMeshStandardMaterial?$:b).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,we===void 0&&(A.addEventListener("dispose",it),we=new Map,X.programs=we);let _e=we.get(Me);if(_e!==void 0){if(X.currentProgram===_e&&X.lightsStateVersion===W)return ke(A,ue),_e}else ue.uniforms=Ue.getUniforms(A),A.onBeforeCompile(ue,M),_e=Ue.acquireProgram(ue,Me),we.set(Me,_e),X.uniforms=ue.uniforms;const fe=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(fe.clippingPlanes=pe.uniform),ke(A,ue),X.needsLights=Ke(A),X.lightsStateVersion=W,X.needsLights&&(fe.ambientLightColor.value=U.state.ambient,fe.lightProbe.value=U.state.probe,fe.directionalLights.value=U.state.directional,fe.directionalLightShadows.value=U.state.directionalShadow,fe.spotLights.value=U.state.spot,fe.spotLightShadows.value=U.state.spotShadow,fe.rectAreaLights.value=U.state.rectArea,fe.ltc_1.value=U.state.rectAreaLTC1,fe.ltc_2.value=U.state.rectAreaLTC2,fe.pointLights.value=U.state.point,fe.pointLightShadows.value=U.state.pointShadow,fe.hemisphereLights.value=U.state.hemi,fe.directionalShadowMap.value=U.state.directionalShadowMap,fe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,fe.spotShadowMap.value=U.state.spotShadowMap,fe.spotLightMatrix.value=U.state.spotLightMatrix,fe.spotLightMap.value=U.state.spotLightMap,fe.pointShadowMap.value=U.state.pointShadowMap,fe.pointShadowMatrix.value=U.state.pointShadowMatrix),X.currentProgram=_e,X.uniformsList=null,_e}function te(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=zo.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function ke(A,F){const B=He.get(A);B.outputColorSpace=F.outputColorSpace,B.batching=F.batching,B.batchingColor=F.batchingColor,B.instancing=F.instancing,B.instancingColor=F.instancingColor,B.instancingMorph=F.instancingMorph,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function Ne(A,F,B,X,U){F.isScene!==!0&&(F=de),L.resetTextureUnits();const ee=F.fog,W=X.isMeshStandardMaterial?F.environment:null,ue=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vt,Me=(X.isMeshStandardMaterial?$:b).get(X.envMap||W),we=X.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,_e=!!B.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),fe=!!B.morphAttributes.position,Je=!!B.morphAttributes.normal,st=!!B.morphAttributes.color;let rt=wi;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(rt=M.toneMapping);const ut=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ye=ut!==void 0?ut.length:0,ze=He.get(X),gt=m.state.lights;if(J===!0&&(oe===!0||A!==j)){const nn=A===j&&X.id===O;pe.setState(X,A,nn)}let at=!1;X.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==gt.state.version||ze.outputColorSpace!==ue||U.isBatchedMesh&&ze.batching===!1||!U.isBatchedMesh&&ze.batching===!0||U.isBatchedMesh&&ze.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ze.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ze.instancing===!1||!U.isInstancedMesh&&ze.instancing===!0||U.isSkinnedMesh&&ze.skinning===!1||!U.isSkinnedMesh&&ze.skinning===!0||U.isInstancedMesh&&ze.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ze.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ze.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ze.instancingMorph===!1&&U.morphTexture!==null||ze.envMap!==Me||X.fog===!0&&ze.fog!==ee||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==pe.numPlanes||ze.numIntersection!==pe.numIntersection)||ze.vertexAlphas!==we||ze.vertexTangents!==_e||ze.morphTargets!==fe||ze.morphNormals!==Je||ze.morphColors!==st||ze.toneMapping!==rt||ze.morphTargetsCount!==Ye)&&(at=!0):(at=!0,ze.__version=X.version);let Tt=ze.currentProgram;at===!0&&(Tt=z(X,F,U));let an=!1,$t=!1,li=!1;const dt=Tt.getUniforms(),tn=ze.uniforms;if(Oe.useProgram(Tt.program)&&(an=!0,$t=!0,li=!0),X.id!==O&&(O=X.id,$t=!0),an||j!==A){Te.reverseDepthBuffer?(ve.copy(A.projectionMatrix),i0(ve),s0(ve),dt.setValue(N,"projectionMatrix",ve)):dt.setValue(N,"projectionMatrix",A.projectionMatrix),dt.setValue(N,"viewMatrix",A.matrixWorldInverse);const nn=dt.map.cameraPosition;nn!==void 0&&nn.setValue(N,Fe.setFromMatrixPosition(A.matrixWorld)),Te.logarithmicDepthBuffer&&dt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&dt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,$t=!0,li=!0)}if(U.isSkinnedMesh){dt.setOptional(N,U,"bindMatrix"),dt.setOptional(N,U,"bindMatrixInverse");const nn=U.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),dt.setValue(N,"boneTexture",nn.boneTexture,L))}U.isBatchedMesh&&(dt.setOptional(N,U,"batchingTexture"),dt.setValue(N,"batchingTexture",U._matricesTexture,L),dt.setOptional(N,U,"batchingIdTexture"),dt.setValue(N,"batchingIdTexture",U._indirectTexture,L),dt.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&dt.setValue(N,"batchingColorTexture",U._colorsTexture,L));const Xn=B.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&Ge.update(U,B,Tt),($t||ze.receiveShadow!==U.receiveShadow)&&(ze.receiveShadow=U.receiveShadow,dt.setValue(N,"receiveShadow",U.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(tn.envMap.value=Me,tn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(tn.envMapIntensity.value=F.environmentIntensity),$t&&(dt.setValue(N,"toneMappingExposure",M.toneMappingExposure),ze.needsLights&&tt(tn,li),ee&&X.fog===!0&&Se.refreshFogUniforms(tn,ee),Se.refreshMaterialUniforms(tn,X,K,H,m.state.transmissionRenderTarget[A.id]),zo.upload(N,te(ze),tn,L)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(zo.upload(N,te(ze),tn,L),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&dt.setValue(N,"center",U.center),dt.setValue(N,"modelViewMatrix",U.modelViewMatrix),dt.setValue(N,"normalMatrix",U.normalMatrix),dt.setValue(N,"modelMatrix",U.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const nn=X.uniformsGroups;for(let fa=0,Zm=nn.length;fa<Zm;fa++){const uh=nn[fa];k.update(uh,Tt),k.bind(uh,Tt)}}return Tt}function tt(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Ke(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,F,B){He.get(A.texture).__webglTexture=F,He.get(A.depthTexture).__webglTexture=B;const X=He.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=B===void 0,X.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const B=He.get(A);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,B=0){R=A,I=F,P=B;let X=!0,U=null,ee=!1,W=!1;if(A){const Me=He.get(A);if(Me.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(Me.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Me.__hasExternalTextures)L.rebindTextures(A,He.get(A.texture).__webglTexture,He.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const fe=A.depthTexture;if(Me.__boundDepthTexture!==fe){if(fe!==null&&He.has(fe)&&(A.width!==fe.image.width||A.height!==fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const we=A.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(W=!0);const _e=He.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(_e[F])?U=_e[F][B]:U=_e[F],ee=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?U=He.get(A).__webglMultisampledFramebuffer:Array.isArray(_e)?U=_e[B]:U=_e,E.copy(A.viewport),C.copy(A.scissor),Y=A.scissorTest}else E.copy(le).multiplyScalar(K).floor(),C.copy(xe).multiplyScalar(K).floor(),Y=ae;if(Oe.bindFramebuffer(N.FRAMEBUFFER,U)&&X&&Oe.drawBuffers(A,U),Oe.viewport(E),Oe.scissor(C),Oe.setScissorTest(Y),ee){const Me=He.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,B)}else if(W){const Me=He.get(A.texture),we=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.__webglTexture,B||0,we)}O=-1},this.readRenderTargetPixels=function(A,F,B,X,U,ee,W){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=He.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&W!==void 0&&(ue=ue[W]),ue){Oe.bindFramebuffer(N.FRAMEBUFFER,ue);try{const Me=A.texture,we=Me.format,_e=Me.type;if(!Te.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(_e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-X&&B>=0&&B<=A.height-U&&N.readPixels(F,B,X,U,Ze.convert(we),Ze.convert(_e),ee)}finally{const Me=R!==null?He.get(R).__webglFramebuffer:null;Oe.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(A,F,B,X,U,ee,W){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=He.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&W!==void 0&&(ue=ue[W]),ue){const Me=A.texture,we=Me.format,_e=Me.type;if(!Te.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(_e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-X&&B>=0&&B<=A.height-U){Oe.bindFramebuffer(N.FRAMEBUFFER,ue);const fe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,fe),N.bufferData(N.PIXEL_PACK_BUFFER,ee.byteLength,N.STREAM_READ),N.readPixels(F,B,X,U,Ze.convert(we),Ze.convert(_e),0);const Je=R!==null?He.get(R).__webglFramebuffer:null;Oe.bindFramebuffer(N.FRAMEBUFFER,Je);const st=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await n0(N,st,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,fe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ee),N.deleteBuffer(fe),N.deleteSync(st),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,B=0){A.isTexture!==!0&&(Bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const X=Math.pow(2,-B),U=Math.floor(A.image.width*X),ee=Math.floor(A.image.height*X),W=F!==null?F.x:0,ue=F!==null?F.y:0;L.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,W,ue,U,ee),Oe.unbindTexture()},this.copyTextureToTexture=function(A,F,B=null,X=null,U=0){A.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],F=arguments[2],U=arguments[3]||0,B=null);let ee,W,ue,Me,we,_e;B!==null?(ee=B.max.x-B.min.x,W=B.max.y-B.min.y,ue=B.min.x,Me=B.min.y):(ee=A.image.width,W=A.image.height,ue=0,Me=0),X!==null?(we=X.x,_e=X.y):(we=0,_e=0);const fe=Ze.convert(F.format),Je=Ze.convert(F.type);L.setTexture2D(F,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const st=N.getParameter(N.UNPACK_ROW_LENGTH),rt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ut=N.getParameter(N.UNPACK_SKIP_PIXELS),Ye=N.getParameter(N.UNPACK_SKIP_ROWS),ze=N.getParameter(N.UNPACK_SKIP_IMAGES),gt=A.isCompressedTexture?A.mipmaps[U]:A.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,gt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ue),N.pixelStorei(N.UNPACK_SKIP_ROWS,Me),A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,we,_e,ee,W,fe,Je,gt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,we,_e,gt.width,gt.height,fe,gt.data):N.texSubImage2D(N.TEXTURE_2D,U,we,_e,ee,W,fe,Je,gt),N.pixelStorei(N.UNPACK_ROW_LENGTH,st),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ut),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ye),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ze),U===0&&F.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(A,F,B=null,X=null,U=0){A.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,X=arguments[1]||null,A=arguments[2],F=arguments[3],U=arguments[4]||0);let ee,W,ue,Me,we,_e,fe,Je,st;const rt=A.isCompressedTexture?A.mipmaps[U]:A.image;B!==null?(ee=B.max.x-B.min.x,W=B.max.y-B.min.y,ue=B.max.z-B.min.z,Me=B.min.x,we=B.min.y,_e=B.min.z):(ee=rt.width,W=rt.height,ue=rt.depth,Me=0,we=0,_e=0),X!==null?(fe=X.x,Je=X.y,st=X.z):(fe=0,Je=0,st=0);const ut=Ze.convert(F.format),Ye=Ze.convert(F.type);let ze;if(F.isData3DTexture)L.setTexture3D(F,0),ze=N.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)L.setTexture2DArray(F,0),ze=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const gt=N.getParameter(N.UNPACK_ROW_LENGTH),at=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Tt=N.getParameter(N.UNPACK_SKIP_PIXELS),an=N.getParameter(N.UNPACK_SKIP_ROWS),$t=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Me),N.pixelStorei(N.UNPACK_SKIP_ROWS,we),N.pixelStorei(N.UNPACK_SKIP_IMAGES,_e),A.isDataTexture||A.isData3DTexture?N.texSubImage3D(ze,U,fe,Je,st,ee,W,ue,ut,Ye,rt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(ze,U,fe,Je,st,ee,W,ue,ut,rt.data):N.texSubImage3D(ze,U,fe,Je,st,ee,W,ue,ut,Ye,rt),N.pixelStorei(N.UNPACK_ROW_LENGTH,gt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Tt),N.pixelStorei(N.UNPACK_SKIP_ROWS,an),N.pixelStorei(N.UNPACK_SKIP_IMAGES,$t),U===0&&F.generateMipmaps&&N.generateMipmap(ze),Oe.unbindTexture()},this.initRenderTarget=function(A){He.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Oe.unbindTexture()},this.resetState=function(){I=0,P=0,R=null,Oe.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Fl?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===aa?"display-p3":"srgb"}}class py extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Af{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hl,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new D;class Nr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yl extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ms;const er=new D,ps=new D,gs=new D,xs=new Ce,tr=new Ce,bf=new $e,lo=new D,nr=new D,ho=new D,au=new Ce,Va=new Ce,cu=new Ce;class wf extends Mt{constructor(e=new Yl){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Af(t,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new Nr(n,3,0,!1)),ms.setAttribute("uv",new Nr(n,2,3,!1))}this.geometry=ms,this.material=e,this.center=new Ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),bf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-gs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;uo(lo.set(-.5,-.5,0),gs,o,ps,s,r),uo(nr.set(.5,-.5,0),gs,o,ps,s,r),uo(ho.set(.5,.5,0),gs,o,ps,s,r),au.set(0,0),Va.set(1,0),cu.set(1,1);let a=e.ray.intersectTriangle(lo,nr,ho,!1,er);if(a===null&&(uo(nr.set(-.5,.5,0),gs,o,ps,s,r),Va.set(0,1),a=e.ray.intersectTriangle(lo,ho,nr,!1,er),a===null))return;const l=e.ray.origin.distanceTo(er);l<e.near||l>e.far||t.push({distance:l,point:er.clone(),uv:xn.getInterpolation(er,lo,nr,ho,au,Va,cu,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function uo(i,e,t,n,s,r){xs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(tr.x=r*xs.x-s*xs.y,tr.y=s*xs.x+r*xs.y):tr.copy(xs),i.copy(e),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(bf)}const lu=new D,hu=new mt,uu=new mt,gy=new D,du=new $e,fo=new D,Ga=new Fn,fu=new $e,Za=new Br;class xy extends vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gh,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ai),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fo),this.boundingBox.expandByPoint(fo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fo),this.boundingSphere.expandByPoint(fo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(s),e.ray.intersectsSphere(Ga)!==!1&&(fu.copy(s).invert(),Za.copy(e.ray).applyMatrix4(fu),!(this.boundingBox!==null&&Za.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Za)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;hu.fromBufferAttribute(s.attributes.skinIndex,e),uu.fromBufferAttribute(s.attributes.skinWeight,e),lu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=uu.getComponent(r);if(o!==0){const a=hu.getComponent(r);du.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(gy.copy(lu).applyMatrix4(du),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rf extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cf extends Ot{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Qt,h=Qt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mu=new $e,_y=new $e;class Vl{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:_y;mu.multiplyMatrices(a,t[r]),mu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Vl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Cf(t,e,e,dn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Rf),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class dl extends bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _s=new $e,pu=new $e,mo=[],gu=new ai,vy=new $e,ir=new vt,sr=new Fn;class yy extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_s),gu.copy(e.boundingBox).applyMatrix4(_s),this.boundingBox.union(gu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_s),sr.copy(e.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),e.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_s),pu.multiplyMatrices(n,_s),ir.matrixWorld=pu,ir.raycast(e,mo);for(let o=0,a=mo.length;o<a;o++){const l=mo[o];l.instanceId=r,l.object=this,t.push(l)}mo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cf(new Float32Array(s*this.count),s,this.count,Ll,Rn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ks extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const na=new D,ia=new D,xu=new $e,rr=new Br,po=new Fn,Wa=new D,_u=new D;class Gl extends Mt{constructor(e=new Dt,t=new ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)na.fromBufferAttribute(t,s-1),ia.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=na.distanceTo(ia);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;xu.copy(s).invert(),rr.copy(e.ray).applyMatrix4(xu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),S=h.getX(_+1),M=go(this,e,rr,l,p,S);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=go(this,e,rr,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=go(this,e,rr,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=go(this,e,rr,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function go(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(na.fromBufferAttribute(o,s),ia.fromBufferAttribute(o,r),t.distanceSqToSegment(na,ia,Wa,_u)>n)return;Wa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Wa);if(!(l<e.near||l>e.far))return{distance:l,point:_u.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const vu=new D,yu=new D;class Ji extends Gl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)vu.fromBufferAttribute(t,s),yu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vu.distanceTo(yu);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sy extends Gl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pf extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Su=new $e,fl=new Br,xo=new Fn,_o=new D;class My extends Mt{constructor(e=new Dt,t=new Pf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;Su.copy(s).invert(),fl.copy(e.ray).applyMatrix4(Su);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);_o.fromBufferAttribute(u,m),Mu(_o,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)_o.fromBufferAttribute(u,g),Mu(_o,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mu(i,e,t,n,s,r,o){const a=fl.distanceSqToPoint(i);if(a<t){const l=new D;fl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Zl extends Ot{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ce:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,s=[],r=[],o=[],a=new D,l=new $e;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Nt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Nt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wl extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ce){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ey extends Wl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $l(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const vo=new D,$a=new $l,ja=new $l,qa=new $l;class Ty extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(vo.subVectors(s[0],s[1]).add(s[0]),c=vo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(vo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),$a.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),ja.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),qa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&($a.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ja.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),qa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set($a.calc(l),ja.calc(l),qa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Eu(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Ay(i,e){const t=1-i;return t*t*e}function by(i,e){return 2*(1-i)*i*e}function wy(i,e){return i*i*e}function Ar(i,e,t,n){return Ay(i,e)+by(i,t)+wy(i,n)}function Ry(i,e){const t=1-i;return t*t*t*e}function Cy(i,e){const t=1-i;return 3*t*t*i*e}function Py(i,e){return 3*(1-i)*i*i*e}function Iy(i,e){return i*i*i*e}function br(i,e,t,n,s){return Ry(i,e)+Cy(i,t)+Py(i,n)+Iy(i,s)}class If extends Bn{constructor(e=new Ce,t=new Ce,n=new Ce,s=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ce){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ly extends Bn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y),br(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lf extends Bn{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dy extends Bn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Df extends Bn{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ar(e,s.x,r.x,o.x),Ar(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ny extends Bn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ar(e,s.x,r.x,o.x),Ar(e,s.y,r.y,o.y),Ar(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nf extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Eu(a,l.x,c.x,h.x,u.x),Eu(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Ce().fromArray(s))}return this}}var Tu=Object.freeze({__proto__:null,ArcCurve:Ey,CatmullRomCurve3:Ty,CubicBezierCurve:If,CubicBezierCurve3:Ly,EllipseCurve:Wl,LineCurve:Lf,LineCurve3:Dy,QuadraticBezierCurve:Df,QuadraticBezierCurve3:Ny,SplineCurve:Nf});class Oy extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Tu[s.type]().fromJSON(s))}return this}}class Uy extends Oy{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Lf(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Df(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new If(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s),new Ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Nf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Wl(e,t,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class jl extends Dt{constructor(e=[new Ce(0,-.5),new Ce(.5,0),new Ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Nt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new D,d=new Ce,f=new D,g=new D,_=new D;let m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let S=0;S<=t;S++){const M=n+S*h*s,T=Math.sin(M),I=Math.cos(M);for(let P=0;P<=e.length-1;P++){u.x=e[P].x*T,u.y=e[P].y,u.z=e[P].x*I,o.push(u.x,u.y,u.z),d.x=S/t,d.y=P/(e.length-1),a.push(d.x,d.y);const R=l[3*P+0]*T,O=l[3*P+1],j=l[3*P+0]*I;c.push(R,O,j)}}for(let S=0;S<t;S++)for(let M=0;M<e.length-1;M++){const T=M+S*e.length,I=T,P=T+e.length,R=T+e.length+1,O=T+1;r.push(I,P,O),r.push(R,O,P)}this.setIndex(r),this.setAttribute("position",new At(o,3)),this.setAttribute("uv",new At(a,2)),this.setAttribute("normal",new At(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.points,e.segments,e.phiStart,e.phiLength)}}class ql extends jl{constructor(e=1,t=1,n=4,s=8){const r=new Uy;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new ql(e.radius,e.length,e.capSegments,e.radialSegments)}}class kr extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new At(u,3)),this.setAttribute("normal",new At(d,3)),this.setAttribute("uv",new At(f,2));function S(){const T=new D,I=new D;let P=0;const R=(t-e)/n;for(let O=0;O<=r;O++){const j=[],E=O/r,C=E*(t-e)+e;for(let Y=0;Y<=s;Y++){const V=Y/s,Z=V*l+a,q=Math.sin(Z),H=Math.cos(Z);I.x=C*q,I.y=-E*n+m,I.z=C*H,u.push(I.x,I.y,I.z),T.set(q,R,H).normalize(),d.push(T.x,T.y,T.z),f.push(V,1-E),j.push(g++)}_.push(j)}for(let O=0;O<s;O++)for(let j=0;j<r;j++){const E=_[j][O],C=_[j+1][O],Y=_[j+1][O+1],V=_[j][O+1];e>0&&(h.push(E,C,V),P+=3),t>0&&(h.push(C,Y,V),P+=3)}c.addGroup(p,P,0),p+=P}function M(T){const I=g,P=new Ce,R=new D;let O=0;const j=T===!0?e:t,E=T===!0?1:-1;for(let Y=1;Y<=s;Y++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;const C=g;for(let Y=0;Y<=s;Y++){const Z=Y/s*l+a,q=Math.cos(Z),H=Math.sin(Z);R.x=j*H,R.y=m*E,R.z=j*q,u.push(R.x,R.y,R.z),d.push(0,E,0),P.x=q*.5+.5,P.y=H*.5*E+.5,f.push(P.x,P.y),g++}for(let Y=0;Y<s;Y++){const V=I+Y,Z=C+Y;T===!0?h.push(Z,Z+1,V):h.push(Z+1,Z,V),O+=3}c.addGroup(p,O,T===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Of extends kr{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Of(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class la extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],M=p/n;let T=0;p===0&&o===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let I=0;I<=t;I++){const P=I/t;u.x=-e*Math.cos(s+P*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+P*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(P+T,1-M),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const M=h[p][S+1],T=h[p][S],I=h[p+1][S],P=h[p+1][S+1];(p!==0||o>0)&&f.push(M,T,P),(p!==n-1||l<Math.PI)&&f.push(T,I,P)}this.setIndex(f),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(_,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Au extends Dt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new D,r=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let g=d,_=d+f;g<_;g+=3)for(let m=0;m<3;m++){const p=a.getX(g+m),S=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,S),bu(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),bu(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new At(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function bu(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class _n extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zn extends _n{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function yo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Fy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function By(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function wu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Uf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Xr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zy extends Xr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Es,endingEnd:Es}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ts:r=e,a=2*t-n;break;case Ko:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ts:o=e,l=2*n-t;break;case Ko:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,T=f*m-f*_;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+S*o[c+I]+M*o[l+I]+T*o[u+I];return r}}class Ff extends Xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class ky extends Xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class kn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yo(t,this.TimeBufferType),this.values=yo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yo(e.times,Array),values:yo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ky(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ff(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ir:t=this.InterpolantFactoryMethodDiscrete;break;case Lr:t=this.InterpolantFactoryMethodLinear;break;case pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return Lr;case this.InterpolantFactoryMethodSmooth:return pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Fy(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Lr;class Zs extends kn{constructor(e,t,n){super(e,t,n)}}Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Ir;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Bf extends kn{}Bf.prototype.ValueTypeName="color";class Xs extends kn{}Xs.prototype.ValueTypeName="number";class Xy extends Xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let h=c+a;c!==h;c+=4)sn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Hs extends kn{InterpolantFactoryMethodLinear(e){return new Xy(this.times,this.values,this.getValueSize(),e)}}Hs.prototype.ValueTypeName="quaternion";Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends kn{constructor(e,t,n){super(e,t,n)}}Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=Ir;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Ys extends kn{}Ys.prototype.ValueTypeName="vector";class ml{constructor(e="",t=-1,n=[],s=Ul){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Yy(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(kn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=By(l);l=wu(l,1,h),c=wu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Xs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Uf(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let S=0;S!==d[g].morphTargets.length;++S){const M=d[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}s.push(new Xs(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ys,f+".position",d,"pos",s),n(Hs,f+".quaternion",d,"rot",s),n(Ys,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Hy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xs;case"vector":case"vector2":case"vector3":case"vector4":return Ys;case"color":return Bf;case"quaternion":return Hs;case"bool":case"boolean":return Zs;case"string":return Ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Yy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Hy(i.type);if(i.times===void 0){const t=[],n=[];Uf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ti={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Vy{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Gy=new Vy;class $s{constructor(e){this.manager=e!==void 0?e:Gy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$s.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class Zy extends Error{constructor(e,t){super(e),this.response=t}}class zf extends $s{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ti.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:s});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Wn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:M,value:T})=>{if(M)p.close();else{_+=T.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let P=0,R=h.length;P<R;P++){const O=h[P];O.onProgress&&O.onProgress(I)}p.enqueue(T),S()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Zy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ti.add(e,c);const h=Wn[e];delete Wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Wn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Wy extends $s{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ti.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Dr("img");function l(){h(),Ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class kf extends $s{constructor(e){super(e)}load(e,t,n,s){const r=new Ot,o=new Wy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Hr extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $y extends Hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ka=new $e,Ru=new D,Cu=new D;class Kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kl,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ru),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),Ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jy extends Kl{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Fs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class qy extends Hr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pu=new $e,or=new D,Ja=new D;class Ky extends Kl{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),or.setFromMatrixPosition(e.matrixWorld),n.position.copy(or),Ja.copy(n.position),Ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ja),n.updateMatrixWorld(),s.makeTranslation(-or.x,-or.y,-or.z),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu)}}class Jl extends Hr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ky}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jy extends Kl{constructor(){super(new Xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xf extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Jy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qy extends Hr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class e1 extends $s{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ti.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ti.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ti.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ti.add(e,l),r.manager.itemStart(e)}}class t1{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){sn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;sn.multiplyQuaternionsFlat(e,o,e,t,e,n),sn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const Ql="\\[\\]\\.:\\/",n1=new RegExp("["+Ql+"]","g"),eh="[^"+Ql+"]",i1="[^"+Ql.replace("\\.","")+"]",s1=/((?:WC+[\/:])*)/.source.replace("WC",eh),r1=/(WCOD+)?/.source.replace("WCOD",i1),o1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),a1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),c1=new RegExp("^"+s1+r1+o1+a1+"$"),l1=["material","materials","bones","map"];class h1{constructor(e,t,n){const s=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(n1,"")}static parseTrackName(e){const t=c1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);l1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=h1;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class u1{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Es,endingEnd:Es};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=cl,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case wp:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Ul:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===bp;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===of){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=Ts,s.endingEnd=Ts):(e?s.endingStart=this.zeroSlopeAtStart?Ts:Es:s.endingStart=Ko,t?s.endingEnd=this.zeroSlopeAtEnd?Ts:Es:s.endingEnd=Ko)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const d1=new Float32Array(1);class ko extends Qi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=s[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new t1(pt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ff(new Float32Array(2),new Float32Array(2),1,d1),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?ml.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ul),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new u1(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?ml.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Iu=new $e;class tA{constructor(e,t,n=0,s=1/0){this.ray=new Br(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Iu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Iu),this}intersectObject(e,t=!0,n=[]){return pl(e,this,n,t),n.sort(Lu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)pl(e[s],this,n,t);return n.sort(Lu),n}}function Lu(i,e){return i.distance-e.distance}function pl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)pl(r[o],e,t,!0)}}class f1 extends Ji{constructor(e=10,t=10,n=4473924,s=8947848){n=new We(n),s=new We(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===r?n:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new Dt;h.setAttribute("position",new At(l,3)),h.setAttribute("color",new At(c,3));const u=new ks({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class nA extends Ji{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Dt;r.setIndex(new bt(n,1)),r.setAttribute("position",new At(s,3)),super(r,new ks({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);function th(i){const e=new Map,t=new Map,n=i.clone();return Hf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Hf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Hf(i.children[n],e.children[n],t)}function m1(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),t}var yr={exports:{}},p1=yr.exports,Du;function nh(){return Du||(Du=1,(function(i,e){(function(t,n){n(e)})(p1,(function(t){var n=function(v,x){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,w){y.__proto__=w}||function(y,w){for(var z in w)Object.prototype.hasOwnProperty.call(w,z)&&(y[z]=w[z])},n(v,x)};function s(v,x){if(typeof x!="function"&&x!==null)throw new TypeError("Class extends value "+String(x)+" is not a constructor or null");n(v,x);function y(){this.constructor=v}v.prototype=x===null?Object.create(x):(y.prototype=x.prototype,new y)}function r(v,x,y,w){var z=arguments.length,te=z<3?x:w,ke;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")te=Reflect.decorate(v,x,y,w);else for(var Ne=v.length-1;Ne>=0;Ne--)(ke=v[Ne])&&(te=(z<3?ke(te):z>3?ke(x,y,te):ke(x,y))||te);return z>3&&te&&Object.defineProperty(x,y,te),te}function o(v,x,y){if(arguments.length===2)for(var w=0,z=x.length,te;w<z;w++)(te||!(w in x))&&(te||(te=Array.prototype.slice.call(x,0,w)),te[w]=x[w]);return v.concat(te||Array.prototype.slice.call(x))}typeof SuppressedError=="function"&&SuppressedError;var a=255,l=213;t.OPERATION=void 0,(function(v){v[v.ADD=128]="ADD",v[v.REPLACE=0]="REPLACE",v[v.DELETE=64]="DELETE",v[v.DELETE_AND_ADD=192]="DELETE_AND_ADD",v[v.TOUCH=1]="TOUCH",v[v.CLEAR=10]="CLEAR"})(t.OPERATION||(t.OPERATION={}));var c=(function(){function v(x,y,w){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=x,this.setParent(y,w)}return v.prototype.setParent=function(x,y,w){var z=this;if(this.indexes||(this.indexes=this.ref instanceof _t?this.ref._definition.indexes:{}),this.parent=x,this.parentIndex=w,!!y)if(this.root=y,this.ref instanceof _t){var te=this.ref._definition;for(var ke in te.schema){var Ne=this.ref[ke];if(Ne&&Ne.$changes){var tt=te.indexes[ke];Ne.$changes.setParent(this.ref,y,tt)}}}else typeof this.ref=="object"&&this.ref.forEach(function(Ke,A){if(Ke instanceof _t){var F=Ke.$changes,B=z.ref.$changes.indexes[A];F.setParent(z.ref,z.root,B)}})},v.prototype.operation=function(x){this.changes.set(--this.currentCustomOperation,x)},v.prototype.change=function(x,y){y===void 0&&(y=t.OPERATION.ADD);var w=typeof x=="number"?x:this.indexes[x];this.assertValidIndex(w,x);var z=this.changes.get(w);(!z||z.op===t.OPERATION.DELETE||z.op===t.OPERATION.TOUCH)&&this.changes.set(w,{op:z&&z.op===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:y,index:w}),this.allChanges.add(w),this.changed=!0,this.touchParents()},v.prototype.touch=function(x){var y=typeof x=="number"?x:this.indexes[x];this.assertValidIndex(y,x),this.changes.has(y)||this.changes.set(y,{op:t.OPERATION.TOUCH,index:y}),this.allChanges.add(y),this.touchParents()},v.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},v.prototype.getType=function(x){if(this.ref._definition){var y=this.ref._definition;return y.schema[y.fieldsByIndex[x]]}else{var y=this.parent._definition,w=y.schema[y.fieldsByIndex[this.parentIndex]];return Object.values(w)[0]}},v.prototype.getChildrenFilter=function(){var x=this.parent._definition.childFilters;return x&&x[this.parentIndex]},v.prototype.getValue=function(x){return this.ref.getByIndex(x)},v.prototype.delete=function(x){var y=typeof x=="number"?x:this.indexes[x];if(y===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(x," (").concat(y,")"));return}var w=this.getValue(y);this.changes.set(y,{op:t.OPERATION.DELETE,index:y}),this.allChanges.delete(y),delete this.caches[y],w&&w.$changes&&(w.$changes.parent=void 0),this.changed=!0,this.touchParents()},v.prototype.discard=function(x,y){var w=this;x===void 0&&(x=!1),y===void 0&&(y=!1),this.ref instanceof _t||this.changes.forEach(function(z){if(z.op===t.OPERATION.DELETE){var te=w.ref.getIndex(z.index);delete w.indexes[te]}}),this.changes.clear(),this.changed=x,y&&this.allChanges.clear(),this.currentCustomOperation=0},v.prototype.discardAll=function(){var x=this;this.changes.forEach(function(y){var w=x.getValue(y.index);w&&w.$changes&&w.$changes.discardAll()}),this.discard()},v.prototype.cache=function(x,y){this.caches[x]=y},v.prototype.clone=function(){return new v(this.ref,this.parent,this.root)},v.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},v.prototype.assertValidIndex=function(x,y){if(x===void 0)throw new Error('ChangeTree: missing index for field "'.concat(y,'"'))},v})();function h(v,x,y,w){return v[x]||(v[x]=[]),v[x].push(y),w?.forEach(function(z,te){return y(z,te)}),function(){return d(v[x],v[x].indexOf(y))}}function u(v){var x=this,y=typeof this.$changes.getType()!="string";this.$items.forEach(function(w,z){v.push({refId:x.$changes.refId,op:t.OPERATION.DELETE,field:z,value:void 0,previousValue:w}),y&&x.$changes.root.removeRef(w.$changes.refId)})}function d(v,x){if(x===-1||x>=v.length)return!1;for(var y=v.length-1,w=x;w<y;w++)v[w]=v[w+1];return v.length=y,!0}var f=function(v,x){var y=v.toString(),w=x.toString();return y<w?-1:y>w?1:0};function g(v){return v.$proxy=!0,v=new Proxy(v,{get:function(x,y){return typeof y!="symbol"&&!isNaN(y)?x.at(y):x[y]},set:function(x,y,w){if(typeof y!="symbol"&&!isNaN(y)){var z=Array.from(x.$items.keys()),te=parseInt(z[y]||y);w==null?x.deleteAt(te):x.setAt(te,w)}else x[y]=w;return!0},deleteProperty:function(x,y){return typeof y=="number"?x.deleteAt(y):delete x[y],!0},has:function(x,y){return typeof y!="symbol"&&!isNaN(Number(y))?x.$items.has(Number(y)):Reflect.has(x,y)}}),v}var _=(function(){function v(){for(var x=[],y=0;y<arguments.length;y++)x[y]=arguments[y];this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,x)}return v.prototype.onAdd=function(x,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,x,y?this.$items:void 0)},v.prototype.onRemove=function(x){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,x)},v.prototype.onChange=function(x){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,x)},v.is=function(x){return Array.isArray(x)||x.array!==void 0},Object.defineProperty(v.prototype,"length",{get:function(){return this.$items.size},set:function(x){x===0?this.clear():this.splice(x,this.length-x)},enumerable:!1,configurable:!0}),v.prototype.push=function(){for(var x=this,y=[],w=0;w<arguments.length;w++)y[w]=arguments[w];var z;return y.forEach(function(te){z=x.$refId++,x.setAt(z,te)}),z},v.prototype.pop=function(){var x=Array.from(this.$indexes.values()).pop();if(x!==void 0){this.$changes.delete(x),this.$indexes.delete(x);var y=this.$items.get(x);return this.$items.delete(x),y}},v.prototype.at=function(x){if(x=Math.trunc(x)||0,x<0&&(x+=this.length),!(x<0||x>=this.length)){var y=Array.from(this.$items.keys())[x];return this.$items.get(y)}},v.prototype.setAt=function(x,y){var w,z;if(y==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(x)!==y){y.$changes!==void 0&&y.$changes.setParent(this,this.$changes.root,x);var te=(z=(w=this.$changes.indexes[x])===null||w===void 0?void 0:w.op)!==null&&z!==void 0?z:t.OPERATION.ADD;this.$changes.indexes[x]=x,this.$indexes.set(x,x),this.$items.set(x,y),this.$changes.change(x,te)}},v.prototype.deleteAt=function(x){var y=Array.from(this.$items.keys())[x];return y===void 0?!1:this.$deleteAt(y)},v.prototype.$deleteAt=function(x){return this.$changes.delete(x),this.$indexes.delete(x),this.$items.delete(x)},v.prototype.clear=function(x){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),x&&u.call(this,x),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},v.prototype.concat=function(){for(var x,y=[],w=0;w<arguments.length;w++)y[w]=arguments[w];return new(v.bind.apply(v,o([void 0],(x=Array.from(this.$items.values())).concat.apply(x,y),!1)))},v.prototype.join=function(x){return Array.from(this.$items.values()).join(x)},v.prototype.reverse=function(){var x=this,y=Array.from(this.$items.keys()),w=Array.from(this.$items.values()).reverse();return w.forEach(function(z,te){x.setAt(y[te],z)}),this},v.prototype.shift=function(){var x=Array.from(this.$items.keys()),y=x.shift();if(y!==void 0){var w=this.$items.get(y);return this.$deleteAt(y),w}},v.prototype.slice=function(x,y){var w=new v;return w.push.apply(w,Array.from(this.$items.values()).slice(x,y)),w},v.prototype.sort=function(x){var y=this;x===void 0&&(x=f);var w=Array.from(this.$items.keys()),z=Array.from(this.$items.values()).sort(x);return z.forEach(function(te,ke){y.setAt(w[ke],te)}),this},v.prototype.splice=function(x,y){y===void 0&&(y=this.length-x);for(var w=[],z=2;z<arguments.length;z++)w[z-2]=arguments[z];for(var te=Array.from(this.$items.keys()),ke=[],Ne=x;Ne<x+y;Ne++)ke.push(this.$items.get(te[Ne])),this.$deleteAt(te[Ne]);for(var Ne=0;Ne<w.length;Ne++)this.setAt(x+Ne,w[Ne]);return ke},v.prototype.unshift=function(){for(var x=this,y=[],w=0;w<arguments.length;w++)y[w]=arguments[w];var z=this.length,te=y.length,ke=Array.from(this.$items.values());return y.forEach(function(Ne,tt){x.setAt(tt,Ne)}),ke.forEach(function(Ne,tt){x.setAt(te+tt,Ne)}),z+te},v.prototype.indexOf=function(x,y){return Array.from(this.$items.values()).indexOf(x,y)},v.prototype.lastIndexOf=function(x,y){return y===void 0&&(y=this.length-1),Array.from(this.$items.values()).lastIndexOf(x,y)},v.prototype.every=function(x,y){return Array.from(this.$items.values()).every(x,y)},v.prototype.some=function(x,y){return Array.from(this.$items.values()).some(x,y)},v.prototype.forEach=function(x,y){Array.from(this.$items.values()).forEach(x,y)},v.prototype.map=function(x,y){return Array.from(this.$items.values()).map(x,y)},v.prototype.filter=function(x,y){return Array.from(this.$items.values()).filter(x,y)},v.prototype.reduce=function(x,y){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},v.prototype.reduceRight=function(x,y){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},v.prototype.find=function(x,y){return Array.from(this.$items.values()).find(x,y)},v.prototype.findIndex=function(x,y){return Array.from(this.$items.values()).findIndex(x,y)},v.prototype.fill=function(x,y,w){throw new Error("ArraySchema#fill() not implemented")},v.prototype.copyWithin=function(x,y,w){throw new Error("ArraySchema#copyWithin() not implemented")},v.prototype.toString=function(){return this.$items.toString()},v.prototype.toLocaleString=function(){return this.$items.toLocaleString()},v.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(v,Symbol.species,{get:function(){return v},enumerable:!1,configurable:!0}),v.prototype.entries=function(){return this.$items.entries()},v.prototype.keys=function(){return this.$items.keys()},v.prototype.values=function(){return this.$items.values()},v.prototype.includes=function(x,y){return Array.from(this.$items.values()).includes(x,y)},v.prototype.flatMap=function(x,y){throw new Error("ArraySchema#flatMap() is not supported.")},v.prototype.flat=function(x){throw new Error("ArraySchema#flat() is not supported.")},v.prototype.findLast=function(){var x=Array.from(this.$items.values());return x.findLast.apply(x,arguments)},v.prototype.findLastIndex=function(){var x=Array.from(this.$items.values());return x.findLastIndex.apply(x,arguments)},v.prototype.with=function(x,y){var w=Array.from(this.$items.values());return w[x]=y,new(v.bind.apply(v,o([void 0],w,!1)))},v.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},v.prototype.toSorted=function(x){return Array.from(this.$items.values()).sort(x)},v.prototype.toSpliced=function(x,y){var w=Array.from(this.$items.values());return w.toSpliced.apply(w,arguments)},v.prototype.setIndex=function(x,y){this.$indexes.set(x,y)},v.prototype.getIndex=function(x){return this.$indexes.get(x)},v.prototype.getByIndex=function(x){return this.$items.get(this.$indexes.get(x))},v.prototype.deleteByIndex=function(x){var y=this.$indexes.get(x);this.$items.delete(y),this.$indexes.delete(x)},v.prototype.toArray=function(){return Array.from(this.$items.values())},v.prototype.toJSON=function(){return this.toArray().map(function(x){return typeof x.toJSON=="function"?x.toJSON():x})},v.prototype.clone=function(x){var y;return x?y=new(v.bind.apply(v,o([void 0],Array.from(this.$items.values()),!1))):y=new(v.bind.apply(v,o([void 0],this.map(function(w){return w.$changes?w.clone():w}),!1))),y},v})();function m(v){return v.$proxy=!0,v=new Proxy(v,{get:function(x,y){return typeof y!="symbol"&&typeof x[y]>"u"?x.get(y):x[y]},set:function(x,y,w){return typeof y!="symbol"&&y.indexOf("$")===-1&&y!=="onAdd"&&y!=="onRemove"&&y!=="onChange"?x.set(y,w):x[y]=w,!0},deleteProperty:function(x,y){return x.delete(y),!0}}),v}var p=(function(){function v(x){var y=this;if(this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,x)if(x instanceof Map||x instanceof v)x.forEach(function(z,te){return y.set(te,z)});else for(var w in x)this.set(w,x[w])}return v.prototype.onAdd=function(x,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,x,y?this.$items:void 0)},v.prototype.onRemove=function(x){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,x)},v.prototype.onChange=function(x){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,x)},v.is=function(x){return x.map!==void 0},v.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(v.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(v,Symbol.species,{get:function(){return v},enumerable:!1,configurable:!0}),v.prototype.set=function(x,y){if(y==null)throw new Error("MapSchema#set('".concat(x,"', ").concat(y,"): trying to set ").concat(y," value on '").concat(x,"'."));x=x.toString();var w=typeof this.$changes.indexes[x]<"u",z=w?this.$changes.indexes[x]:this.$refId++,te=w?t.OPERATION.REPLACE:t.OPERATION.ADD,ke=y.$changes!==void 0;if(ke&&y.$changes.setParent(this,this.$changes.root,z),!w)this.$changes.indexes[x]=z,this.$indexes.set(z,x);else{if(!ke&&this.$items.get(x)===y)return;ke&&this.$items.get(x)!==y&&(te=t.OPERATION.ADD)}return this.$items.set(x,y),this.$changes.change(x,te),this},v.prototype.get=function(x){return this.$items.get(x)},v.prototype.delete=function(x){return this.$changes.delete(x.toString()),this.$items.delete(x)},v.prototype.clear=function(x){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),x&&u.call(this,x),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},v.prototype.has=function(x){return this.$items.has(x)},v.prototype.forEach=function(x){this.$items.forEach(x)},v.prototype.entries=function(){return this.$items.entries()},v.prototype.keys=function(){return this.$items.keys()},v.prototype.values=function(){return this.$items.values()},Object.defineProperty(v.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),v.prototype.setIndex=function(x,y){this.$indexes.set(x,y)},v.prototype.getIndex=function(x){return this.$indexes.get(x)},v.prototype.getByIndex=function(x){return this.$items.get(this.$indexes.get(x))},v.prototype.deleteByIndex=function(x){var y=this.$indexes.get(x);this.$items.delete(y),this.$indexes.delete(x)},v.prototype.toJSON=function(){var x={};return this.forEach(function(y,w){x[w]=typeof y.toJSON=="function"?y.toJSON():y}),x},v.prototype.clone=function(x){var y;return x?y=Object.assign(new v,this):(y=new v,this.forEach(function(w,z){w.$changes?y.set(z,w.clone()):y.set(z,w)})),y},v})(),S={};function M(v,x){S[v]=x}function T(v){return S[v]}var I=(function(){function v(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return v.create=function(x){var y=new v;return y.schema=Object.assign({},x&&x.schema||{}),y.indexes=Object.assign({},x&&x.indexes||{}),y.fieldsByIndex=Object.assign({},x&&x.fieldsByIndex||{}),y.descriptors=Object.assign({},x&&x.descriptors||{}),y.deprecated=Object.assign({},x&&x.deprecated||{}),y},v.prototype.addField=function(x,y){var w=this.getNextFieldIndex();this.fieldsByIndex[w]=x,this.indexes[x]=w,this.schema[x]=Array.isArray(y)?{array:y[0]}:y},v.prototype.hasField=function(x){return this.indexes[x]!==void 0},v.prototype.addFilter=function(x,y){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[x]]=y,this.indexesWithFilters.push(this.indexes[x]),!0},v.prototype.addChildrenFilter=function(x,y){var w=this.indexes[x],z=this.schema[x];if(T(Object.keys(z)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[w]=y,!0;console.warn("@filterChildren: field '".concat(x,"' can't have children. Ignoring filter."))},v.prototype.getChildrenFilter=function(x){return this.childFilters&&this.childFilters[this.indexes[x]]},v.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},v})();function P(v){return v._context&&v._context.useFilters}var R=(function(){function v(){this.types={},this.schemas=new Map,this.useFilters=!1}return v.prototype.has=function(x){return this.schemas.has(x)},v.prototype.get=function(x){return this.types[x]},v.prototype.add=function(x,y){y===void 0&&(y=this.schemas.size),x._definition=I.create(x._definition),x._typeid=y,this.types[y]=x,this.schemas.set(x,y)},v.create=function(x){return x===void 0&&(x={}),function(y){return x.context||(x.context=new v),j(y,x)}},v})(),O=new R;function j(v,x){return x===void 0&&(x={}),function(y,w){var z=x.context||O,te=y.constructor;if(te._context=z,!v)throw new Error("".concat(te.name,': @type() reference provided for "').concat(w,`" is undefined. Make sure you don't have any circular dependencies.`));z.has(te)||z.add(te);var ke=te._definition;if(ke.addField(w,v),ke.descriptors[w]){if(ke.deprecated[w])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(w,"' definition on '").concat(te.name,`'.
Check @type() annotation`))}catch(B){var Ne=B.stack.split(`
`)[4].trim();throw new Error("".concat(B.message," ").concat(Ne))}}var tt=_.is(v),Ke=!tt&&p.is(v);if(typeof v!="string"&&!_t.is(v)){var A=Object.values(v)[0];typeof A!="string"&&!z.has(A)&&z.add(A)}if(x.manual){ke.descriptors[w]={enumerable:!0,configurable:!0,writable:!0};return}var F="_".concat(w);ke.descriptors[F]={enumerable:!1,configurable:!1,writable:!0},ke.descriptors[w]={get:function(){return this[F]},set:function(B){B!==this[F]&&(B!=null?(tt&&!(B instanceof _)&&(B=new(_.bind.apply(_,o([void 0],B,!1)))),Ke&&!(B instanceof p)&&(B=new p(B)),B.$proxy===void 0&&(Ke?B=m(B):tt&&(B=g(B))),this.$changes.change(w),B.$changes&&B.$changes.setParent(this,this.$changes.root,this._definition.indexes[w])):this[F]!==void 0&&this.$changes.delete(w),this[F]=B)},enumerable:!0,configurable:!0}}}function E(v){return function(x,y){var w=x.constructor,z=w._definition;z.addFilter(y,v)&&(w._context.useFilters=!0)}}function C(v){return function(x,y){var w=x.constructor,z=w._definition;z.addChildrenFilter(y,v)&&(w._context.useFilters=!0)}}function Y(v){return v===void 0&&(v=!0),function(x,y){var w=x.constructor,z=w._definition;z.deprecated[y]=!0,v&&(z.descriptors[y]={get:function(){throw new Error("".concat(y," is deprecated."))},set:function(te){},enumerable:!1,configurable:!0})}}function V(v,x,y){y===void 0&&(y={}),y.context||(y.context=v._context||y.context||O);for(var w in x)j(x[w],y)(v.prototype,w);return v}function Z(v){for(var x=0,y=0,w=0,z=v.length;w<z;w++)x=v.charCodeAt(w),x<128?y+=1:x<2048?y+=2:x<55296||x>=57344?y+=3:(w++,y+=4);return y}function q(v,x,y){for(var w=0,z=0,te=y.length;z<te;z++)w=y.charCodeAt(z),w<128?v[x++]=w:w<2048?(v[x++]=192|w>>6,v[x++]=128|w&63):w<55296||w>=57344?(v[x++]=224|w>>12,v[x++]=128|w>>6&63,v[x++]=128|w&63):(z++,w=65536+((w&1023)<<10|y.charCodeAt(z)&1023),v[x++]=240|w>>18,v[x++]=128|w>>12&63,v[x++]=128|w>>6&63,v[x++]=128|w&63)}function H(v,x){v.push(x&255)}function K(v,x){v.push(x&255)}function G(v,x){v.push(x&255),v.push(x>>8&255)}function se(v,x){v.push(x&255),v.push(x>>8&255)}function le(v,x){v.push(x&255),v.push(x>>8&255),v.push(x>>16&255),v.push(x>>24&255)}function xe(v,x){var y=x>>24,w=x>>16,z=x>>8,te=x;v.push(te&255),v.push(z&255),v.push(w&255),v.push(y&255)}function ae(v,x){var y=Math.floor(x/Math.pow(2,32)),w=x>>>0;xe(v,w),xe(v,y)}function Xe(v,x){var y=x/Math.pow(2,32)>>0,w=x>>>0;xe(v,w),xe(v,y)}function J(v,x){re(v,x)}function oe(v,x){de(v,x)}var ve=new Int32Array(2),me=new Float32Array(ve.buffer),Fe=new Float64Array(ve.buffer);function re(v,x){me[0]=x,le(v,ve[0])}function de(v,x){Fe[0]=x,le(v,ve[0]),le(v,ve[1])}function ge(v,x){return K(v,x?1:0)}function Pe(v,x){x||(x="");var y=Z(x),w=0;if(y<32)v.push(y|160),w=1;else if(y<256)v.push(217),K(v,y),w=2;else if(y<65536)v.push(218),se(v,y),w=3;else if(y<4294967296)v.push(219),xe(v,y),w=5;else throw new Error("String too long");return q(v,v.length,x),w+y}function N(v,x){if(isNaN(x))return N(v,0);if(isFinite(x)){if(x!==(x|0))return v.push(203),de(v,x),9}else return N(v,x>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return x>=0?x<128?(K(v,x),1):x<256?(v.push(204),K(v,x),2):x<65536?(v.push(205),se(v,x),3):x<4294967296?(v.push(206),xe(v,x),5):(v.push(207),Xe(v,x),9):x>=-32?(v.push(224|x+32),1):x>=-128?(v.push(208),H(v,x),2):x>=-32768?(v.push(209),G(v,x),3):x>=-2147483648?(v.push(210),le(v,x),5):(v.push(211),ae(v,x),9)}var je=Object.freeze({__proto__:null,boolean:ge,float32:J,float64:oe,int16:G,int32:le,int64:ae,int8:H,number:N,string:Pe,uint16:se,uint32:xe,uint64:Xe,uint8:K,utf8Write:q,writeFloat32:re,writeFloat64:de});function De(v,x,y){for(var w="",z=0,te=x,ke=x+y;te<ke;te++){var Ne=v[te];if((Ne&128)===0){w+=String.fromCharCode(Ne);continue}if((Ne&224)===192){w+=String.fromCharCode((Ne&31)<<6|v[++te]&63);continue}if((Ne&240)===224){w+=String.fromCharCode((Ne&15)<<12|(v[++te]&63)<<6|(v[++te]&63)<<0);continue}if((Ne&248)===240){z=(Ne&7)<<18|(v[++te]&63)<<12|(v[++te]&63)<<6|(v[++te]&63)<<0,z>=65536?(z-=65536,w+=String.fromCharCode((z>>>10)+55296,(z&1023)+56320)):w+=String.fromCharCode(z);continue}console.error("Invalid byte "+Ne.toString(16))}return w}function Te(v,x){return Oe(v,x)<<24>>24}function Oe(v,x){return v[x.offset++]}function lt(v,x){return He(v,x)<<16>>16}function He(v,x){return v[x.offset++]|v[x.offset++]<<8}function L(v,x){return v[x.offset++]|v[x.offset++]<<8|v[x.offset++]<<16|v[x.offset++]<<24}function b(v,x){return L(v,x)>>>0}function $(v,x){return nt(v,x)}function ie(v,x){return pe(v,x)}function he(v,x){var y=b(v,x),w=L(v,x)*Math.pow(2,32);return w+y}function ne(v,x){var y=b(v,x),w=b(v,x)*Math.pow(2,32);return w+y}var Ue=new Int32Array(2),Se=new Float32Array(Ue.buffer),Ie=new Float64Array(Ue.buffer);function nt(v,x){return Ue[0]=L(v,x),Se[0]}function pe(v,x){return Ue[0]=L(v,x),Ue[1]=L(v,x),Ie[0]}function Le(v,x){return Oe(v,x)>0}function Ve(v,x){var y=v[x.offset++],w;y<192?w=y&31:y===217?w=Oe(v,x):y===218?w=He(v,x):y===219&&(w=b(v,x));var z=De(v,x.offset,w);return x.offset+=w,z}function Ge(v,x){var y=v[x.offset];return y<192&&y>160||y===217||y===218||y===219}function ye(v,x){var y=v[x.offset++];if(y<128)return y;if(y===202)return nt(v,x);if(y===203)return pe(v,x);if(y===204)return Oe(v,x);if(y===205)return He(v,x);if(y===206)return b(v,x);if(y===207)return ne(v,x);if(y===208)return Te(v,x);if(y===209)return lt(v,x);if(y===210)return L(v,x);if(y===211)return he(v,x);if(y>223)return(255-y+1)*-1}function qe(v,x){var y=v[x.offset];return y<128||y>=202&&y<=211}function Ze(v,x){return v[x.offset]<160}function ht(v,x){return v[x.offset-1]===a&&(v[x.offset]<128||v[x.offset]>=202&&v[x.offset]<=211)}var k=Object.freeze({__proto__:null,arrayCheck:Ze,boolean:Le,float32:$,float64:ie,int16:lt,int32:L,int64:he,int8:Te,number:ye,numberCheck:qe,readFloat32:nt,readFloat64:pe,string:Ve,stringCheck:Ge,switchStructureCheck:ht,uint16:He,uint32:b,uint64:ne,uint8:Oe}),Re=(function(){function v(x){var y=this;this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,x&&x.forEach(function(w){return y.add(w)})}return v.prototype.onAdd=function(x,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,x,y?this.$items:void 0)},v.prototype.onRemove=function(x){return h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,x)},v.prototype.onChange=function(x){return h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,x)},v.is=function(x){return x.collection!==void 0},v.prototype.add=function(x){var y=this.$refId++,w=x.$changes!==void 0;return w&&x.$changes.setParent(this,this.$changes.root,y),this.$changes.indexes[y]=y,this.$indexes.set(y,y),this.$items.set(y,x),this.$changes.change(y),y},v.prototype.at=function(x){var y=Array.from(this.$items.keys())[x];return this.$items.get(y)},v.prototype.entries=function(){return this.$items.entries()},v.prototype.delete=function(x){for(var y=this.$items.entries(),w,z;(z=y.next())&&!z.done;)if(x===z.value[1]){w=z.value[0];break}return w===void 0?!1:(this.$changes.delete(w),this.$indexes.delete(w),this.$items.delete(w))},v.prototype.clear=function(x){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),x&&u.call(this,x),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},v.prototype.has=function(x){return Array.from(this.$items.values()).some(function(y){return y===x})},v.prototype.forEach=function(x){var y=this;this.$items.forEach(function(w,z,te){return x(w,z,y)})},v.prototype.values=function(){return this.$items.values()},Object.defineProperty(v.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),v.prototype.setIndex=function(x,y){this.$indexes.set(x,y)},v.prototype.getIndex=function(x){return this.$indexes.get(x)},v.prototype.getByIndex=function(x){return this.$items.get(this.$indexes.get(x))},v.prototype.deleteByIndex=function(x){var y=this.$indexes.get(x);this.$items.delete(y),this.$indexes.delete(x)},v.prototype.toArray=function(){return Array.from(this.$items.values())},v.prototype.toJSON=function(){var x=[];return this.forEach(function(y,w){x.push(typeof y.toJSON=="function"?y.toJSON():y)}),x},v.prototype.clone=function(x){var y;return x?y=Object.assign(new v,this):(y=new v,this.forEach(function(w){w.$changes?y.add(w.clone()):y.add(w)})),y},v})(),Q=(function(){function v(x){var y=this;this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,x&&x.forEach(function(w){return y.add(w)})}return v.prototype.onAdd=function(x,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,x,y?this.$items:void 0)},v.prototype.onRemove=function(x){return h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,x)},v.prototype.onChange=function(x){return h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,x)},v.is=function(x){return x.set!==void 0},v.prototype.add=function(x){var y,w;if(this.has(x))return!1;var z=this.$refId++;x.$changes!==void 0&&x.$changes.setParent(this,this.$changes.root,z);var te=(w=(y=this.$changes.indexes[z])===null||y===void 0?void 0:y.op)!==null&&w!==void 0?w:t.OPERATION.ADD;return this.$changes.indexes[z]=z,this.$indexes.set(z,z),this.$items.set(z,x),this.$changes.change(z,te),z},v.prototype.entries=function(){return this.$items.entries()},v.prototype.delete=function(x){for(var y=this.$items.entries(),w,z;(z=y.next())&&!z.done;)if(x===z.value[1]){w=z.value[0];break}return w===void 0?!1:(this.$changes.delete(w),this.$indexes.delete(w),this.$items.delete(w))},v.prototype.clear=function(x){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),x&&u.call(this,x),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},v.prototype.has=function(x){for(var y=this.$items.values(),w=!1,z;(z=y.next())&&!z.done;)if(x===z.value){w=!0;break}return w},v.prototype.forEach=function(x){var y=this;this.$items.forEach(function(w,z,te){return x(w,z,y)})},v.prototype.values=function(){return this.$items.values()},Object.defineProperty(v.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),v.prototype.setIndex=function(x,y){this.$indexes.set(x,y)},v.prototype.getIndex=function(x){return this.$indexes.get(x)},v.prototype.getByIndex=function(x){return this.$items.get(this.$indexes.get(x))},v.prototype.deleteByIndex=function(x){var y=this.$indexes.get(x);this.$items.delete(y),this.$indexes.delete(x)},v.prototype.toArray=function(){return Array.from(this.$items.values())},v.prototype.toJSON=function(){var x=[];return this.forEach(function(y,w){x.push(typeof y.toJSON=="function"?y.toJSON():y)}),x},v.prototype.clone=function(x){var y;return x?y=Object.assign(new v,this):(y=new v,this.forEach(function(w){w.$changes?y.add(w.clone()):y.add(w)})),y},v})(),ce=(function(){function v(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return v.prototype.addRefId=function(x){this.refIds.has(x)||(this.refIds.add(x),this.containerIndexes.set(x,new Set))},v.get=function(x){return x.$filterState===void 0&&(x.$filterState=new v),x.$filterState},v})(),Ae=(function(){function v(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return v.prototype.getNextUniqueId=function(){return this.nextUniqueId++},v.prototype.addRef=function(x,y,w){w===void 0&&(w=!0),this.refs.set(x,y),w&&(this.refCounts[x]=(this.refCounts[x]||0)+1)},v.prototype.removeRef=function(x){var y=this.refCounts[x];if(y===void 0){console.warn("trying to remove reference ".concat(x," that doesn't exist"));return}if(y===0){console.warn("trying to remove reference ".concat(x," with 0 refCount"));return}this.refCounts[x]=y-1,this.deletedRefs.add(x)},v.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},v.prototype.garbageCollectDeletedRefs=function(){var x=this;this.deletedRefs.forEach(function(y){if(!(x.refCounts[y]>0)){var w=x.refs.get(y);if(w instanceof _t)for(var z in w._definition.schema)typeof w._definition.schema[z]!="string"&&w[z]&&w[z].$changes&&x.removeRef(w[z].$changes.refId);else{var te=w.$changes.parent._definition,ke=te.schema[te.fieldsByIndex[w.$changes.parentIndex]];typeof Object.values(ke)[0]=="function"&&Array.from(w.values()).forEach(function(Ne){return x.removeRef(Ne.$changes.refId)})}x.refs.delete(y),delete x.refCounts[y]}}),this.deletedRefs.clear()},v})(),be=(function(v){s(x,v);function x(){return v!==null&&v.apply(this,arguments)||this}return x})(Error);function it(v,x,y,w){var z,te=!1;switch(x){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":z="number",isNaN(v)&&console.log('trying to encode "NaN" in '.concat(y.constructor.name,"#").concat(w));break;case"string":z="string",te=!0;break;case"boolean":return}if(typeof v!==z&&(!te||te&&v!==null)){var ke="'".concat(JSON.stringify(v),"'").concat(v&&v.constructor&&" (".concat(v.constructor.name,")")||"");throw new be("a '".concat(z,"' was expected, but ").concat(ke," was provided in ").concat(y.constructor.name,"#").concat(w))}}function yt(v,x,y,w){if(!(v instanceof x))throw new be("a '".concat(x.name,"' was expected, but '").concat(v.constructor.name,"' was provided in ").concat(y.constructor.name,"#").concat(w))}function Bt(v,x,y,w,z){it(y,v,w,z);var te=je[v];if(te)te(x,y);else throw new be("a '".concat(v,"' was expected, but ").concat(y," was provided in ").concat(w.constructor.name,"#").concat(z))}function ct(v,x,y){return k[v](x,y)}var _t=(function(){function v(){for(var x=[],y=0;y<arguments.length;y++)x[y]=arguments[y];Object.defineProperties(this,{$changes:{value:new c(this,void 0,new Ae),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var w=this._definition.descriptors;w&&Object.defineProperties(this,w),x[0]&&this.assign(x[0])}return v.onError=function(x){console.error(x)},v.is=function(x){return x._definition&&x._definition.schema!==void 0},v.prototype.onChange=function(x){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,x)},v.prototype.onRemove=function(x){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,x)},v.prototype.assign=function(x){return Object.assign(this,x),this},Object.defineProperty(v.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),v.prototype.setDirty=function(x,y){this.$changes.change(x,y)},v.prototype.listen=function(x,y,w){var z=this;return w===void 0&&(w=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[x]||(this.$callbacks[x]=[]),this.$callbacks[x].push(y),w&&this[x]!==void 0&&y(this[x],void 0),function(){return d(z.$callbacks[x],z.$callbacks[x].indexOf(y))}},v.prototype.decode=function(x,y,w){y===void 0&&(y={offset:0}),w===void 0&&(w=this);var z=[],te=this.$changes.root,ke=x.length,Ne=0;for(te.refs.set(Ne,this);y.offset<ke;){var tt=x[y.offset++];if(tt==a){Ne=ye(x,y);var Ke=te.refs.get(Ne);if(!Ke)throw new Error('"refId" not found: '.concat(Ne));w=Ke;continue}var A=w.$changes,F=w._definition!==void 0,B=F?tt>>6<<6:tt;if(B===t.OPERATION.CLEAR){w.clear(z);continue}var X=F?tt%(B||255):ye(x,y),U=F?w._definition.fieldsByIndex[X]:"",ee=A.getType(X),W=void 0,ue=void 0,Me=void 0;if(F?ue=w["_".concat(U)]:(ue=w.getByIndex(X),(B&t.OPERATION.ADD)===t.OPERATION.ADD?(Me=w instanceof p?Ve(x,y):X,w.setIndex(X,Me)):Me=w.getIndex(X)),(B&t.OPERATION.DELETE)===t.OPERATION.DELETE&&(B!==t.OPERATION.DELETE_AND_ADD&&w.deleteByIndex(X),ue&&ue.$changes&&te.removeRef(ue.$changes.refId),W=null),U===void 0){console.warn("@colyseus/schema: definition mismatch");for(var we={offset:y.offset};y.offset<ke&&!(ht(x,y)&&(we.offset=y.offset+1,te.refs.has(ye(x,we))));)y.offset++;continue}else if(B!==t.OPERATION.DELETE)if(v.is(ee)){var _e=ye(x,y);if(W=te.refs.get(_e),B!==t.OPERATION.REPLACE){var fe=this.getSchemaType(x,y,ee);W||(W=this.createTypeInstance(fe),W.$changes.refId=_e,ue&&(W.$callbacks=ue.$callbacks,ue.$changes.refId&&_e!==ue.$changes.refId&&te.removeRef(ue.$changes.refId))),te.addRef(_e,W,W!==ue)}}else if(typeof ee=="string")W=ct(ee,x,y);else{var Je=T(Object.keys(ee)[0]),st=ye(x,y),rt=te.refs.has(st)?ue||te.refs.get(st):new Je.constructor;if(W=rt.clone(!0),W.$changes.refId=st,ue&&(W.$callbacks=ue.$callbacks,ue.$changes.refId&&st!==ue.$changes.refId)){te.removeRef(ue.$changes.refId);for(var ut=ue.entries(),Ye=void 0;(Ye=ut.next())&&!Ye.done;){var ze=Ye.value,gt=ze[0],at=ze[1];z.push({refId:st,op:t.OPERATION.DELETE,field:gt,value:void 0,previousValue:at})}}te.addRef(st,W,rt!==ue)}if(W!=null){if(W.$changes&&W.$changes.setParent(A.ref,A.root,X),w instanceof v)w[U]=W;else if(w instanceof p){var gt=Me;w.$items.set(gt,W),w.$changes.allChanges.add(X)}else if(w instanceof _)w.setAt(X,W);else if(w instanceof Re){var Tt=w.add(W);w.setIndex(X,Tt)}else if(w instanceof Q){var Tt=w.add(W);Tt!==!1&&w.setIndex(X,Tt)}}ue!==W&&z.push({refId:Ne,op:B,field:U,dynamicIndex:Me,value:W,previousValue:ue})}return this._triggerChanges(z),te.garbageCollectDeletedRefs(),z},v.prototype.encode=function(x,y,w){x===void 0&&(x=!1),y===void 0&&(y=[]),w===void 0&&(w=!1);for(var z=this.$changes,te=new WeakSet,ke=[z],Ne=1,tt=0;tt<Ne;tt++){var Ke=ke[tt],A=Ke.ref,F=A instanceof v;Ke.ensureRefId(),te.add(Ke),Ke!==z&&(Ke.changed||x)&&(K(y,a),N(y,Ke.refId));for(var B=Array.from(x?Ke.allChanges:Ke.changes.values()),X=0,U=B.length;X<U;X++){var ee=x?{op:t.OPERATION.ADD,index:B[X]}:B[X],W=ee.index,ue=F?A._definition.fieldsByIndex&&A._definition.fieldsByIndex[W]:W,Me=y.length;if(ee.op!==t.OPERATION.TOUCH)if(F)K(y,W|ee.op);else{if(K(y,ee.op),ee.op===t.OPERATION.CLEAR)continue;N(y,W)}if(!F&&(ee.op&t.OPERATION.ADD)==t.OPERATION.ADD&&A instanceof p){var we=Ke.ref.$indexes.get(W);Pe(y,we)}if(ee.op!==t.OPERATION.DELETE){var _e=Ke.getType(W),fe=Ke.getValue(W);if(fe&&fe.$changes&&!te.has(fe.$changes)&&(ke.push(fe.$changes),fe.$changes.ensureRefId(),Ne++),ee.op!==t.OPERATION.TOUCH){if(v.is(_e))yt(fe,_e,A,ue),N(y,fe.$changes.refId),(ee.op&t.OPERATION.ADD)===t.OPERATION.ADD&&this.tryEncodeTypeId(y,_e,fe.constructor);else if(typeof _e=="string")Bt(_e,y,fe,A,ue);else{var Je=T(Object.keys(_e)[0]);yt(A["_".concat(ue)],Je.constructor,A,ue),N(y,fe.$changes.refId)}w&&Ke.cache(W,y.slice(Me))}}}!x&&!w&&Ke.discard()}return y},v.prototype.encodeAll=function(x){return this.encode(!0,[],x)},v.prototype.applyFilters=function(x,y){var w,z;y===void 0&&(y=!1);for(var te=this,ke=new Set,Ne=ce.get(x),tt=[this.$changes],Ke=1,A=[],F=function(X){var U=tt[X];if(ke.has(U.refId))return"continue";var ee=U.ref,W=ee instanceof v;K(A,a),N(A,U.refId);var ue=Ne.refIds.has(U),Me=y||!ue;Ne.addRefId(U);var we=Ne.containerIndexes.get(U),_e=Array.from(Me?U.allChanges:U.changes.values());if(!y&&W&&ee._definition.indexesWithFilters){var fe=ee._definition.indexesWithFilters;fe.forEach(function(an){!we.has(an)&&U.allChanges.has(an)&&(Me?_e.push(an):_e.push({op:t.OPERATION.ADD,index:an}))})}for(var Je=0,st=_e.length;Je<st;Je++){var rt=Me?{op:t.OPERATION.ADD,index:_e[Je]}:_e[Je];if(rt.op===t.OPERATION.CLEAR){K(A,rt.op);continue}var ut=rt.index;if(rt.op===t.OPERATION.DELETE){W?K(A,rt.op|ut):(K(A,rt.op),N(A,ut));continue}var Ye=U.getValue(ut),ze=U.getType(ut);if(W){var gt=ee._definition.filters&&ee._definition.filters[ut];if(gt&&!gt.call(ee,x,Ye,te)){Ye&&Ye.$changes&&ke.add(Ye.$changes.refId);continue}}else{var at=U.parent,gt=U.getChildrenFilter();if(gt&&!gt.call(at,x,ee.$indexes.get(ut),Ye,te)){Ye&&Ye.$changes&&ke.add(Ye.$changes.refId);continue}}if(Ye.$changes&&(tt.push(Ye.$changes),Ke++),rt.op!==t.OPERATION.TOUCH)if(rt.op===t.OPERATION.ADD||W)A.push.apply(A,(w=U.caches[ut])!==null&&w!==void 0?w:[]),we.add(ut);else if(we.has(ut))A.push.apply(A,(z=U.caches[ut])!==null&&z!==void 0?z:[]);else{if(we.add(ut),K(A,t.OPERATION.ADD),N(A,ut),ee instanceof p){var Tt=U.ref.$indexes.get(ut);Pe(A,Tt)}Ye.$changes?N(A,Ye.$changes.refId):je[ze](A,Ye)}else if(Ye.$changes&&!W){if(K(A,t.OPERATION.ADD),N(A,ut),ee instanceof p){var Tt=U.ref.$indexes.get(ut);Pe(A,Tt)}N(A,Ye.$changes.refId)}}},B=0;B<Ke;B++)F(B);return A},v.prototype.clone=function(){var x,y=new this.constructor,w=this._definition.schema;for(var z in w)typeof this[z]=="object"&&typeof((x=this[z])===null||x===void 0?void 0:x.clone)=="function"?y[z]=this[z].clone():y[z]=this[z];return y},v.prototype.toJSON=function(){var x=this._definition.schema,y=this._definition.deprecated,w={};for(var z in x)!y[z]&&this[z]!==null&&typeof this[z]<"u"&&(w[z]=typeof this[z].toJSON=="function"?this[z].toJSON():this["_".concat(z)]);return w},v.prototype.discardAllChanges=function(){this.$changes.discardAll()},v.prototype.getByIndex=function(x){return this[this._definition.fieldsByIndex[x]]},v.prototype.deleteByIndex=function(x){this[this._definition.fieldsByIndex[x]]=void 0},v.prototype.tryEncodeTypeId=function(x,y,w){y._typeid!==w._typeid&&(K(x,l),N(x,w._typeid))},v.prototype.getSchemaType=function(x,y,w){var z;return x[y.offset]===l&&(y.offset++,z=this.constructor._context.get(ye(x,y))),z||w},v.prototype.createTypeInstance=function(x){var y=new x;return y.$changes.root=this.$changes.root,y},v.prototype._triggerChanges=function(x){for(var y,w,z,te,ke,Ne,tt,Ke,A,F=new Set,B=this.$changes.root.refs,X=function(ee){var W=x[ee],ue=W.refId,Me=B.get(ue),we=Me.$callbacks;if((W.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&W.previousValue instanceof v&&((w=(y=W.previousValue.$callbacks)===null||y===void 0?void 0:y[t.OPERATION.DELETE])===null||w===void 0||w.forEach(function(_e){return _e()})),!we)return"continue";if(Me instanceof v){if(!F.has(ue))try{(z=we?.[t.OPERATION.REPLACE])===null||z===void 0||z.forEach(function(_e){return _e()})}catch(_e){v.onError(_e)}try{we.hasOwnProperty(W.field)&&((te=we[W.field])===null||te===void 0||te.forEach(function(_e){return _e(W.value,W.previousValue)}))}catch(_e){v.onError(_e)}}else W.op===t.OPERATION.ADD&&W.previousValue===void 0?(ke=we[t.OPERATION.ADD])===null||ke===void 0||ke.forEach(function(_e){var fe;return _e(W.value,(fe=W.dynamicIndex)!==null&&fe!==void 0?fe:W.field)}):W.op===t.OPERATION.DELETE?W.previousValue!==void 0&&((Ne=we[t.OPERATION.DELETE])===null||Ne===void 0||Ne.forEach(function(_e){var fe;return _e(W.previousValue,(fe=W.dynamicIndex)!==null&&fe!==void 0?fe:W.field)})):W.op===t.OPERATION.DELETE_AND_ADD&&(W.previousValue!==void 0&&((tt=we[t.OPERATION.DELETE])===null||tt===void 0||tt.forEach(function(_e){var fe;return _e(W.previousValue,(fe=W.dynamicIndex)!==null&&fe!==void 0?fe:W.field)})),(Ke=we[t.OPERATION.ADD])===null||Ke===void 0||Ke.forEach(function(_e){var fe;return _e(W.value,(fe=W.dynamicIndex)!==null&&fe!==void 0?fe:W.field)})),W.value!==W.previousValue&&((A=we[t.OPERATION.REPLACE])===null||A===void 0||A.forEach(function(_e){var fe;return _e(W.value,(fe=W.dynamicIndex)!==null&&fe!==void 0?fe:W.field)}));F.add(ue)},U=0;U<x.length;U++)X(U)},v._definition=I.create(),v})();function rn(v){for(var x=[v.$changes],y=1,w={},z=w,te=function(Ne){var tt=x[Ne];tt.changes.forEach(function(Ke){var A=tt.ref,F=Ke.index,B=A._definition?A._definition.fieldsByIndex[F]:A.$indexes.get(F);z[B]=tt.getValue(F)})},ke=0;ke<y;ke++)te(ke);return w}var fn={context:new R},Dn=(function(v){s(x,v);function x(){return v!==null&&v.apply(this,arguments)||this}return r([j("string",fn)],x.prototype,"name",void 0),r([j("string",fn)],x.prototype,"type",void 0),r([j("number",fn)],x.prototype,"referencedType",void 0),x})(_t),on=(function(v){s(x,v);function x(){var y=v!==null&&v.apply(this,arguments)||this;return y.fields=new _,y}return r([j("number",fn)],x.prototype,"id",void 0),r([j([Dn],fn)],x.prototype,"fields",void 0),x})(_t),Ri=(function(v){s(x,v);function x(){var y=v!==null&&v.apply(this,arguments)||this;return y.types=new _,y}return x.encode=function(y){var w,z=y.constructor,te=new x;te.rootType=z._typeid;var ke=function(A,F){for(var B in F){var X=new Dn;X.name=B;var U=void 0;if(typeof F[B]=="string")U=F[B];else{var ee=F[B],W=void 0;_t.is(ee)?(U="ref",W=F[B]):(U=Object.keys(ee)[0],typeof ee[U]=="string"?U+=":"+ee[U]:W=ee[U]),X.referencedType=W?W._typeid:-1}X.type=U,A.fields.push(X)}te.types.push(A)},Ne=(w=z._context)===null||w===void 0?void 0:w.types;for(var tt in Ne){var Ke=new on;Ke.id=Number(tt),ke(Ke,Ne[tt]._definition.schema)}return te.encodeAll()},x.decode=function(y,w){var z=new R,te=new x;te.decode(y,w);var ke=te.types.reduce(function(F,B){var X=(function(ee){s(W,ee);function W(){return ee!==null&&ee.apply(this,arguments)||this}return W})(_t),U=B.id;return F[U]=X,z.add(X,U),F},{});te.types.forEach(function(F){var B=ke[F.id];F.fields.forEach(function(X){var U;if(X.referencedType!==void 0){var ee=X.type,W=ke[X.referencedType];if(!W){var ue=X.type.split(":");ee=ue[0],W=ue[1]}ee==="ref"?j(W,{context:z})(B.prototype,X.name):j((U={},U[ee]=W,U),{context:z})(B.prototype,X.name)}else j(X.type,{context:z})(B.prototype,X.name)})});var Ne=ke[te.rootType],tt=new Ne;for(var Ke in Ne._definition.schema){var A=Ne._definition.schema[Ke];typeof A!="string"&&(tt[Ke]=typeof A=="function"?new A:new(T(Object.keys(A)[0])).constructor)}return tt},r([j([on],fn)],x.prototype,"types",void 0),r([j("number",fn)],x.prototype,"rootType",void 0),x})(_t);M("map",{constructor:p}),M("array",{constructor:_}),M("set",{constructor:Q}),M("collection",{constructor:Re}),t.ArraySchema=_,t.CollectionSchema=Re,t.Context=R,t.MapSchema=p,t.Reflection=Ri,t.ReflectionField=Dn,t.ReflectionType=on,t.Schema=_t,t.SchemaDefinition=I,t.SetSchema=Q,t.decode=k,t.defineTypes=V,t.deprecated=Y,t.dumpChanges=rn,t.encode=je,t.filter=E,t.filterChildren=C,t.hasFilter=P,t.registerType=M,t.type=j}))})(yr,yr.exports)),yr.exports}var Et=nh(),wt=function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Rt=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};class Ct extends Et.Schema{constructor(){super(...arguments),this.id="",this.x=0,this.y=0,this.z=0,this.yaw=0,this.pitch=0,this.vx=0,this.vy=0,this.vz=0,this.movementState="grounded",this.animationState="idle",this.animationTimeScale=1,this.shield=100,this.maxShield=100,this.health=50,this.maxHealth=50,this.currentWeapon="rifle",this.ammo=30,this.maxAmmo=30,this.lastShotTick=0}}wt([Et.type("string"),Rt("design:type",Object)],Ct.prototype,"id",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"x",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"y",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"z",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"yaw",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"pitch",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"vx",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"vy",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"vz",void 0);wt([Et.type("string"),Rt("design:type",Object)],Ct.prototype,"movementState",void 0);wt([Et.type("string"),Rt("design:type",Object)],Ct.prototype,"animationState",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"animationTimeScale",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"shield",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"maxShield",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"health",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"maxHealth",void 0);wt([Et.type("string"),Rt("design:type",Object)],Ct.prototype,"currentWeapon",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"ammo",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"maxAmmo",void 0);wt([Et.type("number"),Rt("design:type",Object)],Ct.prototype,"lastShotTick",void 0);class Yf extends Et.Schema{constructor(){super(...arguments),this.players=new Et.MapSchema}}wt([Et.type({map:Ct}),Rt("design:type",Object)],Yf.prototype,"players",void 0);const iA={idle:"idle",walk:"walk",walkBackwards:"walkBackwards",strafeLeft:"strafeLeft",strafeRight:"strafeRight",strafeLeftFast:"strafeLeftFast",strafeRightFast:"strafeRightFast",run:"run",jump:"jump",slide:"slide",crouchForward:"crouchForward",crouchBackward:"crouchBackward",crouchLeft:"crouchLeft",crouchRight:"crouchRight"},g1={idle:"idleaiming",walk:"walk",walkBackwards:"walkbackwards.001",strafeLeft:"strafeLeft",strafeRight:"strafeRight",strafeLeftFast:"strafeleftfast",strafeRightFast:"straferightfast",run:"run",jump:"jump",slide:"sliding",crouchForward:"crouchforward",crouchBackward:"crouchbackward",crouchLeft:"crouchleft",crouchRight:"crouchright"},Vf=30,Qa=1e3/Vf,Gf=1.8,ec=.4,x1=.03,Vs=1.6,Nu=1,Rr=100,gl=50,ih=1.6,_1=.13,v1=.03,xl=.2,sa=1.41,sh=.29,y1=.02,Zf=3.3,Ou=Math.ceil(Vf/Zf),Wf=45,S1=1250,M1=3,_l={accel:95,maxSpeedWalk:8,friction:10,gravity:27,jumpForce:10.5,coyoteTime:.12,jumpBufferTime:.12,slideInitialSpeed:12,slideSpeedBoost:1.1,slideDecay:.95,slideDecayOnRamp:.95,rampSlideGravityFactor:.5,slideMaxSpeedOnRamp:18,slideMinSpeed:2,slideDurationMax:1.8,slideEnterSpeed:6,slideBoostOnRampFactor:.85,maxSpeedOnRamp:8,rampLandingSpeedFactor:1.2,maxSpeedCrouch:3,slideJumpMultiplier:1.15,slideJumpCooldown:2,slideEnterCooldown:.4,wallBounceReflectFactor:.85,wallBounceSpeedMin:6,wallBounceJumpMultiplier:1,wallBounceBoostFactor:1.08,wallBounceBoostMin:8,dashSpeed:18,dashDuration:.4,dashCooldownSec:10},It=10,So=6,gi=.25,E1=.1,T1=-.1;function $n(i,e,t,n,s,r,o){return{minX:i,maxX:e,minY:t,maxY:n,minZ:s,maxZ:r}}function A1(){const i=[];i.push($n(-It,It,T1,E1,-It,It)),i.push($n(-It,It,0,So,It-gi,It+gi)),i.push($n(-It,It,0,So,-It-gi,-It+gi)),i.push($n(It-gi,It+gi,0,So,-It,It)),i.push($n(-It-gi,-It+gi,0,So,-It,It));const e=1,t=2,n=.15;return i.push($n(-4-e,-4+e,0,t,-n,n)),i.push($n(4-e,4+e,0,t,-n,n)),i.push($n(-6-n,-6+n,0,t,-2,2)),i.push($n(6-n,6+n,0,t,-2,2)),i}let tc=null;function b1(){return tc||(tc={blocks:A1()}),tc}const w1=[{minX:-2.02,maxX:2.02,minY:0,maxY:.2,minZ:15.98,maxZ:20.02},{minX:-2.02,maxX:2.02,minY:0,maxY:.2,minZ:11.98,maxZ:16.02},{minX:-2.02,maxX:2.02,minY:0,maxY:.2,minZ:7.98,maxZ:12.02},{minX:-2.02,maxX:2.02,minY:0,maxY:.2,minZ:3.98,maxZ:8.02},{minX:-2.02,maxX:2.02,minY:0,maxY:.2,minZ:-.02,maxZ:4.02},{minX:-2.02,maxX:2.02,minY:0,maxY:.2,minZ:-4.02,maxZ:.02},{minX:-6.02,maxX:-1.98,minY:0,maxY:.2,minZ:-.02,maxZ:4.02},{minX:-6.02,maxX:-1.98,minY:0,maxY:.2,minZ:-4.02,maxZ:.02},{minX:1.98,maxX:6.02,minY:0,maxY:.2,minZ:-4.02,maxZ:.02},{minX:1.98,maxX:6.02,minY:0,maxY:.2,minZ:-.02,maxZ:4.02},{minX:-2,maxX:2,minY:0,maxY:6,minZ:19.9,maxZ:20.1},{minX:-2.1,maxX:-1.9,minY:0,maxY:6,minZ:16,maxZ:20},{minX:1.9,maxX:2.1,minY:0,maxY:6,minZ:16,maxZ:20},{minX:-6.02,maxX:-1.98,minY:6,maxY:6.199999999999999,minZ:15.98,maxZ:20.02},{minX:1.98,maxX:6.02,minY:6,maxY:6.199999999999999,minZ:15.98,maxZ:20.02},{minX:-10.02,maxX:-5.98,minY:6,maxY:6.199999999999999,minZ:15.98,maxZ:20.02},{minX:5.98,maxX:10.02,minY:6,maxY:6.199999999999999,minZ:15.98,maxZ:20.02},{minX:9.98,maxX:14.02,minY:6,maxY:6.199999999999999,minZ:15.98,maxZ:20.02},{minX:13.98,maxX:18.02,minY:6,maxY:6.199999999999999,minZ:15.98,maxZ:20.02},{minX:17.98,maxX:22.02,minY:6,maxY:6.199999999999999,minZ:15.98,maxZ:20.02},{minX:17.98,maxX:22.02,minY:6,maxY:6.199999999999999,minZ:11.98,maxZ:16.02},{minX:13.98,maxX:18.02,minY:6,maxY:6.199999999999999,minZ:11.98,maxZ:16.02},{minX:-14.02,maxX:-9.98,minY:6,maxY:6.199999999999999,minZ:15.98,maxZ:20.02},{minX:-18.02,maxX:-13.98,minY:6,maxY:6.199999999999999,minZ:15.98,maxZ:20.02},{minX:-22.02,maxX:-17.98,minY:6,maxY:6.199999999999999,minZ:15.98,maxZ:20.02},{minX:-22.02,maxX:-17.98,minY:6,maxY:6.199999999999999,minZ:11.98,maxZ:16.02},{minX:-18.02,maxX:-13.98,minY:6,maxY:6.199999999999999,minZ:11.98,maxZ:16.02},{minX:18,maxX:22,minY:6,maxY:12,minZ:19.9,maxZ:20.1},{minX:14,maxX:18,minY:6,maxY:12,minZ:19.9,maxZ:20.1},{minX:10,maxX:14,minY:6,maxY:12,minZ:19.9,maxZ:20.1},{minX:6,maxX:10,minY:6,maxY:12,minZ:19.9,maxZ:20.1},{minX:2,maxX:6,minY:6,maxY:12,minZ:19.9,maxZ:20.1},{minX:-2,maxX:2,minY:6,maxY:12,minZ:19.9,maxZ:20.1},{minX:-6,maxX:-2,minY:6,maxY:12,minZ:19.9,maxZ:20.1},{minX:-10,maxX:-6,minY:6,maxY:12,minZ:19.9,maxZ:20.1},{minX:-14,maxX:-10,minY:6,maxY:12,minZ:19.9,maxZ:20.1},{minX:-18,maxX:-14,minY:6,maxY:12,minZ:19.9,maxZ:20.1},{minX:-22,maxX:-18,minY:6,maxY:12,minZ:19.9,maxZ:20.1},{minX:-22.1,maxX:-21.9,minY:6,maxY:12,minZ:16,maxZ:20},{minX:-22.1,maxX:-21.9,minY:6,maxY:12,minZ:12,maxZ:16},{minX:21.9,maxX:22.1,minY:6,maxY:12,minZ:16,maxZ:20},{minX:21.9,maxX:22.1,minY:6,maxY:12,minZ:12,maxZ:16},{minX:9.98,maxX:14.02,minY:6,maxY:6.199999999999999,minZ:11.98,maxZ:16.02},{minX:-14.02,maxX:-9.98,minY:6,maxY:6.199999999999999,minZ:11.98,maxZ:16.02},{minX:13.98,maxX:18.02,minY:6,maxY:6.199999999999999,minZ:7.98,maxZ:12.02},{minX:13.98,maxX:18.02,minY:6,maxY:6.199999999999999,minZ:3.98,maxZ:8.02},{minX:17.98,maxX:22.02,minY:6,maxY:6.199999999999999,minZ:7.98,maxZ:12.02},{minX:17.98,maxX:22.02,minY:6,maxY:6.199999999999999,minZ:3.98,maxZ:8.02},{minX:-22.02,maxX:-17.98,minY:6,maxY:6.199999999999999,minZ:8.98,maxZ:13.02},{minX:-18.02,maxX:-13.98,minY:6,maxY:6.199999999999999,minZ:8.98,maxZ:13.02},{minX:-18.02,maxX:-13.98,minY:6,maxY:6.199999999999999,minZ:4.98,maxZ:9.02},{minX:-22.02,maxX:-17.98,minY:6,maxY:6.199999999999999,minZ:4.98,maxZ:9.02},{minX:17.98,maxX:22.02,minY:6,maxY:6.199999999999999,minZ:-.02,maxZ:4.02},{minX:15.98,maxX:20.02,minY:6,maxY:6.199999999999999,minZ:15.98,maxZ:20.02},{minX:13.98,maxX:18.02,minY:6,maxY:6.199999999999999,minZ:-.02,maxZ:4.02},{minX:5.98,maxX:10.02,minY:6,maxY:6.199999999999999,minZ:11.98,maxZ:16.02},{minX:1.98,maxX:6.02,minY:6,maxY:6.199999999999999,minZ:11.98,maxZ:16.02},{minX:-6.02,maxX:-1.98,minY:6,maxY:6.199999999999999,minZ:11.98,maxZ:16.02},{minX:-10.02,maxX:-5.98,minY:6,maxY:6.199999999999999,minZ:11.98,maxZ:16.02},{minX:-22.02,maxX:-17.98,minY:6,maxY:6.199999999999999,minZ:.98,maxZ:5.02},{minX:-18.02,maxX:-13.98,minY:6,maxY:6.199999999999999,minZ:.98,maxZ:5.02},{minX:1.9,maxX:2.1,minY:0,maxY:6,minZ:12,maxZ:16},{minX:-2.1,maxX:-1.9,minY:0,maxY:6,minZ:12,maxZ:16},{minX:1.98,maxX:6.02,minY:0,maxY:.2,minZ:-8.02,maxZ:-3.98},{minX:-2.02,maxX:2.02,minY:0,maxY:.2,minZ:-8.02,maxZ:-3.98},{minX:-6.02,maxX:-1.98,minY:0,maxY:.2,minZ:-8.02,maxZ:-3.98},{minX:1.98,maxX:6.02,minY:0,maxY:.2,minZ:3.98,maxZ:8.02},{minX:-6.02,maxX:-1.98,minY:0,maxY:.2,minZ:3.98,maxZ:8.02},{minX:5.98,maxX:10.02,minY:0,maxY:.2,minZ:-.02,maxZ:4.02},{minX:5.98,maxX:10.02,minY:0,maxY:.2,minZ:-4.02,maxZ:.02},{minX:9.98,maxX:14.02,minY:0,maxY:.2,minZ:-4.02,maxZ:.02},{minX:9.98,maxX:14.02,minY:0,maxY:.2,minZ:-.02,maxZ:4.02},{minX:13.98,maxX:18.02,minY:0,maxY:.2,minZ:-.02,maxZ:4.02},{minX:13.98,maxX:18.02,minY:0,maxY:.2,minZ:-4.02,maxZ:.02},{minX:-10.02,maxX:-5.98,minY:0,maxY:.2,minZ:-4.02,maxZ:.02},{minX:-10.02,maxX:-5.98,minY:0,maxY:.2,minZ:-.02,maxZ:4.02},{minX:-14.02,maxX:-9.98,minY:0,maxY:.2,minZ:-.02,maxZ:4.02},{minX:-14.02,maxX:-9.98,minY:0,maxY:.2,minZ:-4.02,maxZ:.02},{minX:-18.02,maxX:-13.98,minY:0,maxY:.2,minZ:-.02,maxZ:4.02},{minX:-18.02,maxX:-13.98,minY:0,maxY:.2,minZ:-4.02,maxZ:.02},{minX:5.9,maxX:6.1,minY:0,maxY:6,minZ:-8,maxZ:-4},{minX:-6.1,maxX:-5.9,minY:0,maxY:6,minZ:-8,maxZ:-4},{minX:5.9,maxX:6.1,minY:0,maxY:6,minZ:4,maxZ:8},{minX:-6.1,maxX:-5.9,minY:0,maxY:6,minZ:4,maxZ:8},{minX:-6,maxX:-2,minY:0,maxY:6,minZ:11.9,maxZ:12.1},{minX:2,maxX:6,minY:0,maxY:6,minZ:11.9,maxZ:12.1},{minX:-6.1,maxX:-5.9,minY:0,maxY:6,minZ:8,maxZ:12},{minX:5.9,maxX:6.1,minY:0,maxY:6,minZ:8,maxZ:12},{minX:-6.02,maxX:-1.98,minY:0,maxY:.2,minZ:7.98,maxZ:12.02},{minX:1.98,maxX:6.02,minY:0,maxY:.2,minZ:7.98,maxZ:12.02},{minX:-22.02,maxX:-17.98,minY:0,maxY:.2,minZ:-.02,maxZ:4.02},{minX:-22.02,maxX:-17.98,minY:0,maxY:.2,minZ:-4.02,maxZ:.02},{minX:-22.02,maxX:-17.98,minY:0,maxY:.2,minZ:-8.02,maxZ:-3.98},{minX:-18.02,maxX:-13.98,minY:0,maxY:.2,minZ:-8.02,maxZ:-3.98},{minX:-18.02,maxX:-13.98,minY:0,maxY:.2,minZ:-12.02,maxZ:-7.98},{minX:-22.02,maxX:-17.98,minY:0,maxY:.2,minZ:-12.02,maxZ:-7.98},{minX:-22.02,maxX:-17.98,minY:0,maxY:.2,minZ:-16.02,maxZ:-11.98},{minX:-18.02,maxX:-13.98,minY:0,maxY:.2,minZ:-16.02,maxZ:-11.98},{minX:-22.02,maxX:-17.98,minY:0,maxY:.2,minZ:-20.02,maxZ:-15.98},{minX:-18.02,maxX:-13.98,minY:0,maxY:.2,minZ:-20.02,maxZ:-15.98},{minX:17.98,maxX:22.02,minY:0,maxY:.2,minZ:-.02,maxZ:4.02},{minX:17.98,maxX:22.02,minY:0,maxY:.2,minZ:-4.02,maxZ:.02},{minX:17.98,maxX:22.02,minY:0,maxY:.2,minZ:-8.02,maxZ:-3.98},{minX:17.98,maxX:22.02,minY:0,maxY:.2,minZ:-12.02,maxZ:-7.98},{minX:17.98,maxX:22.02,minY:0,maxY:.2,minZ:-16.02,maxZ:-11.98},{minX:17.98,maxX:22.02,minY:0,maxY:.2,minZ:-20.02,maxZ:-15.98},{minX:13.98,maxX:18.02,minY:0,maxY:.2,minZ:-20.02,maxZ:-15.98},{minX:13.98,maxX:18.02,minY:0,maxY:.2,minZ:-16.02,maxZ:-11.98},{minX:13.98,maxX:18.02,minY:0,maxY:.2,minZ:-12.02,maxZ:-7.98},{minX:13.98,maxX:18.02,minY:0,maxY:.2,minZ:-8.02,maxZ:-3.98},{minX:14,maxX:16,minY:.2,maxY:1.2,minZ:-20,maxZ:-16,rampAxis:"x",rampInverted:!0,walkableTopOnly:!0},{minX:12,maxX:14,minY:1.2,maxY:2.2,minZ:-20,maxZ:-16,rampAxis:"x",rampInverted:!0,walkableTopOnly:!0},{minX:10,maxX:12,minY:2.2,maxY:3.2,minZ:-20,maxZ:-16,rampAxis:"x",rampInverted:!0,walkableTopOnly:!0},{minX:8,maxX:10,minY:3.2,maxY:4.2,minZ:-20,maxZ:-16,rampAxis:"x",rampInverted:!0,walkableTopOnly:!0},{minX:6,maxX:8,minY:4.199999999999999,maxY:5.199999999999999,minZ:-20,maxZ:-16,rampAxis:"x",rampInverted:!0,walkableTopOnly:!0},{minX:4,maxX:6,minY:5.2,maxY:6.199999999999999,minZ:-20,maxZ:-16,rampAxis:"x",rampInverted:!0,walkableTopOnly:!0},{minX:-16,maxX:-14,minY:.2,maxY:1.2,minZ:-20,maxZ:-16,rampAxis:"x",rampInverted:!1,walkableTopOnly:!0},{minX:-14,maxX:-12,minY:1.2,maxY:2.2,minZ:-20,maxZ:-16,rampAxis:"x",rampInverted:!1,walkableTopOnly:!0},{minX:-12,maxX:-10,minY:2.2,maxY:3.2,minZ:-20,maxZ:-16,rampAxis:"x",rampInverted:!1,walkableTopOnly:!0},{minX:-10,maxX:-8,minY:3.2,maxY:4.2,minZ:-20,maxZ:-16,rampAxis:"x",rampInverted:!1,walkableTopOnly:!0},{minX:-8,maxX:-6,minY:4.199999999999999,maxY:5.199999999999999,minZ:-20,maxZ:-16,rampAxis:"x",rampInverted:!1,walkableTopOnly:!0},{minX:-6,maxX:-4,minY:5.2,maxY:6.199999999999999,minZ:-20,maxZ:-16,rampAxis:"x",rampInverted:!1,walkableTopOnly:!0},{minX:-.02,maxX:4.02,minY:6,maxY:6.199999999999999,minZ:-20.02,maxZ:-15.98},{minX:-4.02,maxX:.02,minY:6,maxY:6.199999999999999,minZ:-20.02,maxZ:-15.98},{minX:6,maxX:10,minY:0,maxY:6,minZ:-4.1,maxZ:-3.9},{minX:10,maxX:14,minY:0,maxY:6,minZ:-4.1,maxZ:-3.9},{minX:13.9,maxX:14.1,minY:0,maxY:6,minZ:-8,maxZ:-4},{minX:13.9,maxX:14.1,minY:0,maxY:6,minZ:-12,maxZ:-8},{minX:13.9,maxX:14.1,minY:0,maxY:6,minZ:-16,maxZ:-12},{minX:-10,maxX:-6,minY:0,maxY:6,minZ:-4.1,maxZ:-3.9},{minX:-14,maxX:-10,minY:0,maxY:6,minZ:-4.1,maxZ:-3.9},{minX:-14.1,maxX:-13.9,minY:0,maxY:6,minZ:-8,maxZ:-4},{minX:-14.1,maxX:-13.9,minY:0,maxY:6,minZ:-12,maxZ:-8},{minX:-14.1,maxX:-13.9,minY:0,maxY:6,minZ:-16,maxZ:-12},{minX:-14,maxX:-10,minY:0,maxY:6,minZ:-16.1,maxZ:-15.9},{minX:-10,maxX:-6,minY:0,maxY:6,minZ:-16.1,maxZ:-15.9},{minX:-6,maxX:-4,minY:0,maxY:6,minZ:-16.1,maxZ:-15.9},{minX:10,maxX:14,minY:0,maxY:6,minZ:-16.1,maxZ:-15.9},{minX:6,maxX:10,minY:0,maxY:6,minZ:-16.1,maxZ:-15.9},{minX:4,maxX:6,minY:0,maxY:6,minZ:-16.1,maxZ:-15.9},{minX:-4.1,maxX:-3.9,minY:0,maxY:6,minZ:-20,maxZ:-16},{minX:3.9,maxX:4.1,minY:0,maxY:6,minZ:-20,maxZ:-16},{minX:-4,maxX:0,minY:0,maxY:6,minZ:-20.1,maxZ:-19.9},{minX:0,maxX:4,minY:0,maxY:6,minZ:-20.1,maxZ:-19.9},{minX:6,maxX:10,minY:0,maxY:6,minZ:-8.1,maxZ:-7.9},{minX:10,maxX:14,minY:0,maxY:6,minZ:-8.1,maxZ:-7.9},{minX:-10,maxX:-6,minY:0,maxY:6,minZ:-8.1,maxZ:-7.9},{minX:-14,maxX:-10,minY:0,maxY:6,minZ:-8.1,maxZ:-7.9},{minX:9.98,maxX:14.02,minY:0,maxY:.2,minZ:-12.02,maxZ:-7.98},{minX:5.98,maxX:10.02,minY:0,maxY:.2,minZ:-12.02,maxZ:-7.98},{minX:1.98,maxX:6.02,minY:0,maxY:.2,minZ:-12.02,maxZ:-7.98},{minX:-2.02,maxX:2.02,minY:0,maxY:.2,minZ:-12.02,maxZ:-7.98},{minX:-6.02,maxX:-1.98,minY:0,maxY:.2,minZ:-12.02,maxZ:-7.98},{minX:-10.02,maxX:-5.98,minY:0,maxY:.2,minZ:-12.02,maxZ:-7.98},{minX:-14.02,maxX:-9.98,minY:0,maxY:.2,minZ:-12.02,maxZ:-7.98},{minX:-14.02,maxX:-9.98,minY:0,maxY:.2,minZ:-16.02,maxZ:-11.98},{minX:-10.02,maxX:-5.98,minY:0,maxY:.2,minZ:-16.02,maxZ:-11.98},{minX:9.98,maxX:14.02,minY:0,maxY:.2,minZ:-16.02,maxZ:-11.98},{minX:5.98,maxX:10.02,minY:0,maxY:.2,minZ:-16.02,maxZ:-11.98},{minX:-6.02,maxX:-1.98,minY:0,maxY:.2,minZ:-16.02,maxZ:-11.98},{minX:1.98,maxX:6.02,minY:0,maxY:.2,minZ:-16.02,maxZ:-11.98},{minX:-2.02,maxX:2.02,minY:0,maxY:.2,minZ:-16.02,maxZ:-11.98},{minX:4,maxX:8,minY:0,maxY:6,minZ:-20.1,maxZ:-19.9},{minX:8,maxX:12,minY:0,maxY:6,minZ:-20.1,maxZ:-19.9},{minX:12,maxX:16,minY:0,maxY:6,minZ:-20.1,maxZ:-19.9},{minX:16,maxX:20,minY:0,maxY:6,minZ:-20.1,maxZ:-19.9},{minX:-8,maxX:-4,minY:0,maxY:6,minZ:-20.1,maxZ:-19.9},{minX:-12,maxX:-8,minY:0,maxY:6,minZ:-20.1,maxZ:-19.9},{minX:-16,maxX:-12,minY:0,maxY:6,minZ:-20.1,maxZ:-19.9},{minX:-20,maxX:-16,minY:0,maxY:6,minZ:-20.1,maxZ:-19.9},{minX:-22,maxX:-20,minY:0,maxY:6,minZ:-20.1,maxZ:-19.9},{minX:20,maxX:22,minY:0,maxY:6,minZ:-20.1,maxZ:-19.9},{minX:-22.1,maxX:-21.9,minY:0,maxY:6,minZ:-20,maxZ:-16},{minX:-22.1,maxX:-21.9,minY:0,maxY:6,minZ:-16,maxZ:-12},{minX:-22.1,maxX:-21.9,minY:0,maxY:6,minZ:-12,maxZ:-8},{minX:17.98,maxX:22.02,minY:0,maxY:.2,minZ:3.98,maxZ:8.02},{minX:17.98,maxX:22.02,minY:0,maxY:.2,minZ:7.98,maxZ:12.02},{minX:17.98,maxX:22.02,minY:0,maxY:.2,minZ:11.98,maxZ:16.02},{minX:17.98,maxX:22.02,minY:0,maxY:.2,minZ:15.98,maxZ:20.02},{minX:13.98,maxX:18.02,minY:0,maxY:.2,minZ:3.98,maxZ:8.02},{minX:13.98,maxX:18.02,minY:0,maxY:.2,minZ:7.98,maxZ:12.02},{minX:13.98,maxX:18.02,minY:0,maxY:.2,minZ:11.98,maxZ:16.02},{minX:-22.02,maxX:-17.98,minY:0,maxY:.2,minZ:3.98,maxZ:8.02},{minX:-18.02,maxX:-13.98,minY:0,maxY:.2,minZ:3.98,maxZ:8.02},{minX:-18.02,maxX:-13.98,minY:0,maxY:.2,minZ:7.98,maxZ:12.02},{minX:-18.02,maxX:-13.98,minY:0,maxY:.2,minZ:11.98,maxZ:16.02},{minX:-22.02,maxX:-17.98,minY:0,maxY:.2,minZ:7.98,maxZ:12.02},{minX:-22.02,maxX:-17.98,minY:0,maxY:.2,minZ:11.98,maxZ:16.02},{minX:-22.02,maxX:-17.98,minY:0,maxY:.2,minZ:15.98,maxZ:20.02},{minX:-18,maxX:-16,minY:-.8,maxY:.19999999999999996,minZ:16,maxZ:20,rampAxis:"x",rampInverted:!0,walkableTopOnly:!0},{minX:-16,maxX:-14,minY:-1.8,maxY:-.7999999999999999,minZ:16,maxZ:20,rampAxis:"x",rampInverted:!0,walkableTopOnly:!0},{minX:-14,maxX:-12,minY:-2.8,maxY:-1.7999999999999998,minZ:16,maxZ:20,rampAxis:"x",rampInverted:!0,walkableTopOnly:!0},{minX:-12,maxX:-10,minY:-3.8,maxY:-2.8,minZ:16,maxZ:20,rampAxis:"x",rampInverted:!0,walkableTopOnly:!0},{minX:-10,maxX:-8,minY:-4.8,maxY:-3.8000000000000003,minZ:16,maxZ:20,rampAxis:"x",rampInverted:!0,walkableTopOnly:!0},{minX:-8,maxX:-6,minY:-5.8,maxY:-4.800000000000001,minZ:16,maxZ:20,rampAxis:"x",rampInverted:!0,walkableTopOnly:!0},{minX:-6.02,maxX:-1.98,minY:-6,maxY:-5.800000000000001,minZ:15.98,maxZ:20.02},{minX:16,maxX:18,minY:-.8,maxY:.19999999999999996,minZ:16,maxZ:20,rampAxis:"x",rampInverted:!1,walkableTopOnly:!0},{minX:14,maxX:16,minY:-1.8,maxY:-.7999999999999999,minZ:16,maxZ:20,rampAxis:"x",rampInverted:!1,walkableTopOnly:!0},{minX:12,maxX:14,minY:-2.8,maxY:-1.7999999999999998,minZ:16,maxZ:20,rampAxis:"x",rampInverted:!1,walkableTopOnly:!0},{minX:10,maxX:12,minY:-3.8,maxY:-2.8,minZ:16,maxZ:20,rampAxis:"x",rampInverted:!1,walkableTopOnly:!0},{minX:8,maxX:10,minY:-4.8,maxY:-3.8000000000000003,minZ:16,maxZ:20,rampAxis:"x",rampInverted:!1,walkableTopOnly:!0},{minX:6,maxX:8,minY:-5.8,maxY:-4.800000000000001,minZ:16,maxZ:20,rampAxis:"x",rampInverted:!1,walkableTopOnly:!0},{minX:1.98,maxX:6.02,minY:-6,maxY:-5.800000000000001,minZ:15.98,maxZ:20.02},{minX:-2.02,maxX:2.02,minY:-6,maxY:-5.800000000000001,minZ:15.98,maxZ:20.02},{minX:-10,maxX:-6,minY:-6,maxY:0,minZ:15.9,maxZ:16.1},{minX:-14,maxX:-10,minY:-6,maxY:0,minZ:15.9,maxZ:16.1},{minX:-18,maxX:-14,minY:-6,maxY:0,minZ:15.9,maxZ:16.1},{minX:14,maxX:18,minY:-6,maxY:0,minZ:15.9,maxZ:16.1},{minX:10,maxX:14,minY:-6,maxY:0,minZ:15.9,maxZ:16.1},{minX:6,maxX:10,minY:-6,maxY:0,minZ:15.9,maxZ:16.1},{minX:-10,maxX:-6,minY:-6,maxY:0,minZ:19.9,maxZ:20.1},{minX:-14,maxX:-10,minY:-6,maxY:0,minZ:19.9,maxZ:20.1},{minX:-18,maxX:-14,minY:-6,maxY:0,minZ:19.9,maxZ:20.1},{minX:-22,maxX:-18,minY:-6,maxY:0,minZ:19.9,maxZ:20.1},{minX:6,maxX:10,minY:-6,maxY:0,minZ:19.9,maxZ:20.1},{minX:10,maxX:14,minY:-6,maxY:0,minZ:19.9,maxZ:20.1},{minX:14,maxX:18,minY:-6,maxY:0,minZ:19.9,maxZ:20.1},{minX:18,maxX:22,minY:-6,maxY:0,minZ:19.9,maxZ:20.1},{minX:-2.02,maxX:2.02,minY:-6,maxY:-5.800000000000001,minZ:11.98,maxZ:16.02},{minX:-2.02,maxX:2.02,minY:-6,maxY:-5.800000000000001,minZ:7.98,maxZ:12.02},{minX:-2.02,maxX:2.02,minY:-6,maxY:-5.800000000000001,minZ:3.98,maxZ:8.02},{minX:-2.02,maxX:2.02,minY:-6,maxY:-5.800000000000001,minZ:-.02,maxZ:4.02},{minX:-2.02,maxX:2.02,minY:-6,maxY:-5.800000000000001,minZ:-4.02,maxZ:.02},{minX:-2.02,maxX:2.02,minY:-6,maxY:-5.800000000000001,minZ:-8.02,maxZ:-3.98},{minX:-2.02,maxX:2.02,minY:-6,maxY:-5.800000000000001,minZ:-12.02,maxZ:-7.98},{minX:-2.02,maxX:2.02,minY:-6,maxY:-5.800000000000001,minZ:-16.02,maxZ:-11.98},{minX:-2.02,maxX:2.02,minY:-6,maxY:-5.800000000000001,minZ:-20.02,maxZ:-15.98},{minX:-2,maxX:2,minY:-6,maxY:0,minZ:-20.1,maxZ:-19.9},{minX:1.98,maxX:6.02,minY:-6,maxY:-5.800000000000001,minZ:-8.02,maxZ:-3.98},{minX:1.98,maxX:6.02,minY:-6,maxY:-5.800000000000001,minZ:-4.02,maxZ:.02},{minX:1.98,maxX:6.02,minY:-6,maxY:-5.800000000000001,minZ:-.02,maxZ:4.02},{minX:-6.02,maxX:-1.98,minY:-6,maxY:-5.800000000000001,minZ:-.02,maxZ:4.02},{minX:-6.02,maxX:-1.98,minY:-6,maxY:-5.800000000000001,minZ:-4.02,maxZ:.02},{minX:-6.02,maxX:-1.98,minY:-6,maxY:-5.800000000000001,minZ:-8.02,maxZ:-3.98},{minX:-6,maxX:-2,minY:-6,maxY:0,minZ:19.9,maxZ:20.1},{minX:-2,maxX:2,minY:-6,maxY:0,minZ:19.9,maxZ:20.1},{minX:2,maxX:6,minY:-6,maxY:0,minZ:19.9,maxZ:20.1},{minX:1.9,maxX:2.1,minY:-6,maxY:0,minZ:-20,maxZ:-16},{minX:-2.1,maxX:-1.9,minY:-6,maxY:0,minZ:-20,maxZ:-16},{minX:-2.1,maxX:-1.9,minY:-6,maxY:-5,minZ:-16,maxZ:-12},{minX:-2.1,maxX:-1.9,minY:-6,maxY:-5,minZ:-12,maxZ:-8},{minX:-6,maxX:-2,minY:-6,maxY:-5,minZ:-8.1,maxZ:-7.9},{minX:1.9,maxX:2.1,minY:-6,maxY:-5,minZ:-16,maxZ:-12},{minX:5.9,maxX:6.1,minY:-6,maxY:-5,minZ:-4,maxZ:0},{minX:1.9,maxX:2.1,minY:-6,maxY:-5,minZ:12,maxZ:16},{minX:1.9,maxX:2.1,minY:-6,maxY:-5,minZ:8,maxZ:12},{minX:-6.1,maxX:-5.9,minY:-6,maxY:-5,minZ:-8,maxZ:-4},{minX:-6.1,maxX:-5.9,minY:-6,maxY:-5,minZ:-4,maxZ:0},{minX:-6.1,maxX:-5.9,minY:-6,maxY:-5,minZ:0,maxZ:4},{minX:-2.1,maxX:-1.9,minY:-6,maxY:-5,minZ:4,maxZ:8},{minX:-2.1,maxX:-1.9,minY:-6,maxY:-5,minZ:8,maxZ:12},{minX:-2.1,maxX:-1.9,minY:-6,maxY:-5,minZ:12,maxZ:16},{minX:5.9,maxX:6.1,minY:-6,maxY:-5,minZ:-8,maxZ:-4},{minX:5.9,maxX:6.1,minY:-6,maxY:-5,minZ:0,maxZ:4},{minX:1.9,maxX:2.1,minY:-6,maxY:-5,minZ:-12,maxZ:-8},{minX:1.9,maxX:2.1,minY:-6,maxY:-5,minZ:4,maxZ:8},{minX:2,maxX:6,minY:-6,maxY:-5,minZ:3.9,maxZ:4.1},{minX:2,maxX:6,minY:-6,maxY:-5,minZ:-8.1,maxZ:-7.9},{minX:-6,maxX:-2,minY:-6,maxY:-5,minZ:3.9,maxZ:4.1},{minX:-6,maxX:-2,minY:-6,maxY:-5,minZ:15.9,maxZ:16.1},{minX:2,maxX:6,minY:-6,maxY:-5,minZ:15.9,maxZ:16.1},{minX:0,maxX:2,minY:-6,maxY:-4,minZ:-1,maxZ:1},{minX:-2,maxX:0,minY:-6,maxY:-4,minZ:-1,maxZ:1},{minX:0,maxX:2,minY:-6,maxY:-4,minZ:-5,maxZ:-3},{minX:-2,maxX:0,minY:-6,maxY:-4,minZ:-5,maxZ:-3},{minX:-4.02,maxX:-1.98,minY:0,maxY:.2,minZ:-18.02,maxZ:-15.98},{minX:-4.02,maxX:-1.98,minY:0,maxY:.2,minZ:-20.02,maxZ:-17.98},{minX:1.98,maxX:4.02,minY:0,maxY:.2,minZ:-20.02,maxZ:-17.98},{minX:1.98,maxX:4.02,minY:0,maxY:.2,minZ:-18.02,maxZ:-15.98},{minX:-5,maxX:-1,minY:0,maxY:6,minZ:19.9,maxZ:20.1},{minX:-8,maxX:-4,minY:0,maxY:6,minZ:19.9,maxZ:20.1},{minX:-12,maxX:-8,minY:0,maxY:6,minZ:19.9,maxZ:20.1},{minX:-20,maxX:-16,minY:0,maxY:6,minZ:19.9,maxZ:20.1},{minX:-22.1,maxX:-21.9,minY:0,maxY:6,minZ:4,maxZ:8},{minX:-22.1,maxX:-21.9,minY:0,maxY:6,minZ:8,maxZ:12},{minX:-22.1,maxX:-21.9,minY:0,maxY:6,minZ:12,maxZ:16},{minX:-22.1,maxX:-21.9,minY:0,maxY:6,minZ:16,maxZ:20},{minX:-22,maxX:-20,minY:0,maxY:6,minZ:19.9,maxZ:20.1},{minX:2,maxX:6,minY:0,maxY:6,minZ:19.9,maxZ:20.1},{minX:6,maxX:10,minY:0,maxY:6,minZ:19.9,maxZ:20.1},{minX:10,maxX:14,minY:0,maxY:6,minZ:19.9,maxZ:20.1},{minX:14,maxX:18,minY:0,maxY:6,minZ:19.9,maxZ:20.1},{minX:18,maxX:22,minY:0,maxY:6,minZ:19.9,maxZ:20.1},{minX:21.9,maxX:22.1,minY:0,maxY:6,minZ:16,maxZ:20},{minX:21.9,maxX:22.1,minY:0,maxY:6,minZ:12,maxZ:16},{minX:21.9,maxX:22.1,minY:0,maxY:6,minZ:8,maxZ:12},{minX:21.9,maxX:22.1,minY:0,maxY:6,minZ:-20,maxZ:-16},{minX:21.9,maxX:22.1,minY:0,maxY:6,minZ:-16,maxZ:-12},{minX:21.9,maxX:22.1,minY:0,maxY:6,minZ:-12,maxZ:-8},{minX:21.9,maxX:22.1,minY:0,maxY:6,minZ:-2,maxZ:2},{minX:21.9,maxX:22.1,minY:0,maxY:1,minZ:-6,maxZ:-2},{minX:21.9,maxX:22.1,minY:0,maxY:1,minZ:2,maxZ:6},{minX:21.9,maxX:22.1,minY:0,maxY:6,minZ:-8,maxZ:-6},{minX:21.9,maxX:22.1,minY:0,maxY:6,minZ:6,maxZ:8},{minX:-22.1,maxX:-21.9,minY:0,maxY:6,minZ:-8,maxZ:-4},{minX:-22.1,maxX:-21.9,minY:0,maxY:6,minZ:-4,maxZ:0},{minX:-22.1,maxX:-21.9,minY:0,maxY:6,minZ:0,maxZ:4},{minX:-16,maxX:-12,minY:0,maxY:6,minZ:19.9,maxZ:20.1},{minX:-10,maxX:-6,minY:0,maxY:6,minZ:3.9,maxZ:4.1},{minX:-14.1,maxX:-13.9,minY:0,maxY:6,minZ:12,maxZ:16},{minX:-14.1,maxX:-13.9,minY:0,maxY:6,minZ:8,maxZ:12},{minX:-14.1,maxX:-13.9,minY:0,maxY:6,minZ:4,maxZ:8},{minX:-14,maxX:-10,minY:0,maxY:6,minZ:3.9,maxZ:4.1},{minX:6,maxX:10,minY:0,maxY:6,minZ:3.9,maxZ:4.1},{minX:10,maxX:14,minY:0,maxY:6,minZ:3.9,maxZ:4.1},{minX:13.9,maxX:14.1,minY:0,maxY:6,minZ:4,maxZ:8},{minX:13.9,maxX:14.1,minY:0,maxY:6,minZ:8,maxZ:12},{minX:13.9,maxX:14.1,minY:0,maxY:6,minZ:12,maxZ:16},{minX:10,maxX:14,minY:0,maxY:1,minZ:15.9,maxZ:16.1},{minX:6,maxX:10,minY:0,maxY:1,minZ:15.9,maxZ:16.1},{minX:-14,maxX:-10,minY:0,maxY:1,minZ:15.9,maxZ:16.1},{minX:-10,maxX:-6,minY:0,maxY:1,minZ:15.9,maxZ:16.1},{minX:-22.02,maxX:-17.98,minY:6,maxY:6.199999999999999,minZ:-3.02,maxZ:1.02},{minX:-18.02,maxX:-13.98,minY:6,maxY:6.199999999999999,minZ:-3.02,maxZ:1.02},{minX:-22.02,maxX:-17.98,minY:6,maxY:6.199999999999999,minZ:-7.02,maxZ:-2.98},{minX:-18.02,maxX:-13.98,minY:6,maxY:6.199999999999999,minZ:-7.02,maxZ:-2.98},{minX:-22.02,maxX:-17.98,minY:6,maxY:6.199999999999999,minZ:-11.02,maxZ:-6.98},{minX:-18.02,maxX:-13.98,minY:6,maxY:6.199999999999999,minZ:-11.02,maxZ:-6.98},{minX:-18.02,maxX:-13.98,minY:6,maxY:6.199999999999999,minZ:-15.02,maxZ:-10.98},{minX:-22.02,maxX:-17.98,minY:6,maxY:6.199999999999999,minZ:-15.02,maxZ:-10.98},{minX:-14.02,maxX:-9.98,minY:6,maxY:6.199999999999999,minZ:-15.02,maxZ:-10.98},{minX:-10.02,maxX:-5.98,minY:6,maxY:6.199999999999999,minZ:-15.02,maxZ:-10.98},{minX:-6.02,maxX:-1.98,minY:6,maxY:6.199999999999999,minZ:-15.02,maxZ:-10.98},{minX:-2.02,maxX:2.02,minY:6,maxY:6.199999999999999,minZ:-15.02,maxZ:-10.98},{minX:1.98,maxX:6.02,minY:6,maxY:6.199999999999999,minZ:-15.02,maxZ:-10.98},{minX:5.98,maxX:10.02,minY:6,maxY:6.199999999999999,minZ:-15.02,maxZ:-10.98},{minX:9.98,maxX:14.02,minY:6,maxY:6.199999999999999,minZ:-15.02,maxZ:-10.98},{minX:13.98,maxX:18.02,minY:6,maxY:6.199999999999999,minZ:-15.02,maxZ:-10.98},{minX:17.98,maxX:22.02,minY:6,maxY:6.199999999999999,minZ:-15.02,maxZ:-10.98},{minX:17.98,maxX:22.02,minY:6,maxY:6.199999999999999,minZ:-4.02,maxZ:.02},{minX:13.98,maxX:18.02,minY:6,maxY:6.199999999999999,minZ:-4.02,maxZ:.02},{minX:13.98,maxX:18.02,minY:6,maxY:6.199999999999999,minZ:-8.02,maxZ:-3.98},{minX:13.98,maxX:18.02,minY:6,maxY:6.199999999999999,minZ:-12.02,maxZ:-7.98},{minX:3.98,maxX:8.02,minY:6,maxY:6.199999999999999,minZ:-16.02,maxZ:-11.98},{minX:.98,maxX:5.02,minY:6,maxY:6.199999999999999,minZ:-16.02,maxZ:-11.98},{minX:-2.02,maxX:2.02,minY:6,maxY:6.199999999999999,minZ:-16.02,maxZ:-11.98},{minX:-4.02,maxX:.02,minY:6,maxY:6.199999999999999,minZ:-16.02,maxZ:-11.98},{minX:-8.02,maxX:-3.98,minY:6,maxY:6.199999999999999,minZ:-16.02,maxZ:-11.98},{minX:-12.02,maxX:-7.98,minY:6,maxY:6.199999999999999,minZ:-16.02,maxZ:-11.98},{minX:-16.02,maxX:-11.98,minY:6,maxY:6.199999999999999,minZ:-16.02,maxZ:-11.98},{minX:-20.02,maxX:-15.98,minY:6,maxY:6.199999999999999,minZ:-16.02,maxZ:-11.98},{minX:-22.02,maxX:-17.98,minY:6,maxY:6.199999999999999,minZ:-16.02,maxZ:-11.98},{minX:7.98,maxX:12.02,minY:6,maxY:6.199999999999999,minZ:-16.02,maxZ:-11.98},{minX:11.98,maxX:16.02,minY:6,maxY:6.199999999999999,minZ:-16.02,maxZ:-11.98},{minX:15.98,maxX:20.02,minY:6,maxY:6.199999999999999,minZ:-16.02,maxZ:-11.98},{minX:17.98,maxX:22.02,minY:6,maxY:6.199999999999999,minZ:-16.02,maxZ:-11.98},{minX:17.98,maxX:22.02,minY:6,maxY:6.199999999999999,minZ:-7.02,maxZ:-2.98},{minX:17.98,maxX:22.02,minY:6,maxY:6.199999999999999,minZ:-11.02,maxZ:-6.98},{minX:9.98,maxX:14.02,minY:6,maxY:6.199999999999999,minZ:7.98,maxZ:12.02},{minX:5.98,maxX:10.02,minY:6,maxY:6.199999999999999,minZ:7.98,maxZ:12.02},{minX:5.98,maxX:10.02,minY:6,maxY:6.199999999999999,minZ:3.98,maxZ:8.02},{minX:9.98,maxX:14.02,minY:6,maxY:6.199999999999999,minZ:3.98,maxZ:8.02},{minX:-14.02,maxX:-9.98,minY:6,maxY:6.199999999999999,minZ:4.98,maxZ:9.02},{minX:-10.02,maxX:-5.98,minY:6,maxY:6.199999999999999,minZ:4.98,maxZ:9.02},{minX:-10.02,maxX:-5.98,minY:6,maxY:6.199999999999999,minZ:7.98,maxZ:12.02},{minX:-14.02,maxX:-9.98,minY:6,maxY:6.199999999999999,minZ:7.98,maxZ:12.02},{minX:-10.02,maxX:-5.98,minY:6,maxY:6.199999999999999,minZ:3.98,maxZ:8.02},{minX:-14.02,maxX:-9.98,minY:6,maxY:6.199999999999999,minZ:3.98,maxZ:8.02},{minX:-14.02,maxX:-9.98,minY:6,maxY:6.199999999999999,minZ:-11.02,maxZ:-6.98},{minX:-14.02,maxX:-9.98,minY:6,maxY:6.199999999999999,minZ:-8.02,maxZ:-3.98},{minX:-10.02,maxX:-5.98,minY:6,maxY:6.199999999999999,minZ:-8.02,maxZ:-3.98},{minX:-10.02,maxX:-5.98,minY:6,maxY:6.199999999999999,minZ:-11.02,maxZ:-6.98},{minX:5.98,maxX:10.02,minY:6,maxY:6.199999999999999,minZ:-8.02,maxZ:-3.98},{minX:9.98,maxX:14.02,minY:6,maxY:6.199999999999999,minZ:-8.02,maxZ:-3.98},{minX:9.98,maxX:14.02,minY:6,maxY:6.199999999999999,minZ:-12.02,maxZ:-7.98},{minX:5.98,maxX:10.02,minY:6,maxY:6.199999999999999,minZ:-11.02,maxZ:-6.98},{minX:-3,maxX:1,minY:6,maxY:7,minZ:-11.1,maxZ:-10.9},{minX:-1,maxX:3,minY:6,maxY:7,minZ:-11.1,maxZ:-10.9},{minX:10,maxX:14,minY:6,maxY:7,minZ:-4.1,maxZ:-3.9},{minX:10,maxX:14,minY:6,maxY:7,minZ:3.9,maxZ:4.1},{minX:5.9,maxX:6.1,minY:6,maxY:7,minZ:8,maxZ:12},{minX:-14,maxX:-10,minY:6,maxY:7,minZ:3.9,maxZ:4.1},{minX:-14,maxX:-10,minY:6,maxY:7,minZ:-4.1,maxZ:-3.9},{minX:-10,maxX:-6,minY:6,maxY:12,minZ:-4.1,maxZ:-3.9},{minX:-10,maxX:-6,minY:6,maxY:12,minZ:3.9,maxZ:4.1},{minX:2,maxX:6,minY:6,maxY:12,minZ:-11.1,maxZ:-10.9},{minX:6,maxX:10,minY:6,maxY:12,minZ:-4.1,maxZ:-3.9},{minX:13.9,maxX:14.1,minY:6,maxY:12,minZ:0,maxZ:4},{minX:13.9,maxX:14.1,minY:6,maxY:12,minZ:-4,maxZ:0},{minX:6,maxX:10,minY:6,maxY:12,minZ:3.9,maxZ:4.1},{minX:5.9,maxX:6.1,minY:6,maxY:12,minZ:4,maxZ:8},{minX:2,maxX:6,minY:6,maxY:12,minZ:11.9,maxZ:12.1},{minX:-6,maxX:-2,minY:6,maxY:12,minZ:11.9,maxZ:12.1},{minX:-2,maxX:2,minY:6,maxY:12,minZ:11.9,maxZ:12.1},{minX:5.9,maxX:6.1,minY:6,maxY:8,minZ:-8,maxZ:-4},{minX:5.9,maxX:6.1,minY:6,maxY:8,minZ:-11,maxZ:-7},{minX:-6.1,maxX:-5.9,minY:6,maxY:8,minZ:-8,maxZ:-4},{minX:-6.1,maxX:-5.9,minY:6,maxY:8,minZ:-11,maxZ:-7},{minX:-6,maxX:-2,minY:6,maxY:12,minZ:-11.1,maxZ:-10.9},{minX:21.9,maxX:22.1,minY:6,maxY:12,minZ:8,maxZ:12},{minX:21.9,maxX:22.1,minY:6,maxY:12,minZ:-2,maxZ:2},{minX:21.9,maxX:22.1,minY:6,maxY:12,minZ:-10,maxZ:-6},{minX:21.9,maxX:22.1,minY:6,maxY:12,minZ:-14,maxZ:-10},{minX:21.9,maxX:22.1,minY:6,maxY:12,minZ:-16,maxZ:-14},{minX:21.9,maxX:22.1,minY:6,maxY:12,minZ:6,maxZ:8},{minX:21.9,maxX:22.1,minY:6,maxY:7,minZ:2,maxZ:6},{minX:21.9,maxX:22.1,minY:6,maxY:7,minZ:-6,maxZ:-2},{minX:21.98,maxX:26.02,minY:0,maxY:.2,minZ:1.98,maxZ:6.02},{minX:21.98,maxX:26.02,minY:0,maxY:.2,minZ:-6.02,maxZ:-1.98},{minX:21.98,maxX:26.02,minY:0,maxY:.2,minZ:-2.02,maxZ:2.02},{minX:22,maxX:26,minY:0,maxY:1,minZ:5.9,maxZ:6.1},{minX:25.9,maxX:26.1,minY:0,maxY:1,minZ:2,maxZ:6},{minX:25.9,maxX:26.1,minY:0,maxY:1,minZ:-2,maxZ:2},{minX:25.9,maxX:26.1,minY:0,maxY:1,minZ:-6,maxZ:-2},{minX:22,maxX:26,minY:0,maxY:1,minZ:-6.1,maxZ:-5.9},{minX:21.9,maxX:22.1,minY:6,maxY:12,minZ:-20,maxZ:-16},{minX:18,maxX:22,minY:6,maxY:12,minZ:-20.1,maxZ:-19.9},{minX:14,maxX:18,minY:6,maxY:12,minZ:-20.1,maxZ:-19.9},{minX:10,maxX:14,minY:6,maxY:12,minZ:-20.1,maxZ:-19.9},{minX:6,maxX:10,minY:6,maxY:12,minZ:-20.1,maxZ:-19.9},{minX:2,maxX:6,minY:6,maxY:12,minZ:-20.1,maxZ:-19.9},{minX:-2,maxX:2,minY:6,maxY:12,minZ:-20.1,maxZ:-19.9},{minX:-6,maxX:-2,minY:6,maxY:12,minZ:-20.1,maxZ:-19.9},{minX:-10,maxX:-6,minY:6,maxY:12,minZ:-20.1,maxZ:-19.9},{minX:-14,maxX:-10,minY:6,maxY:12,minZ:-20.1,maxZ:-19.9},{minX:-18,maxX:-14,minY:6,maxY:12,minZ:-20.1,maxZ:-19.9},{minX:-22,maxX:-18,minY:6,maxY:12,minZ:-20.1,maxZ:-19.9},{minX:-22.1,maxX:-21.9,minY:6,maxY:12,minZ:-20,maxZ:-16},{minX:-22.1,maxX:-21.9,minY:6,maxY:12,minZ:-16,maxZ:-12},{minX:-22.1,maxX:-21.9,minY:6,maxY:12,minZ:-12,maxZ:-8},{minX:-22.1,maxX:-21.9,minY:6,maxY:12,minZ:8,maxZ:12},{minX:-22.1,maxX:-21.9,minY:6,maxY:12,minZ:4,maxZ:8},{minX:-22.1,maxX:-21.9,minY:6,maxY:12,minZ:0,maxZ:4},{minX:-22.1,maxX:-21.9,minY:6,maxY:12,minZ:-4,maxZ:0},{minX:-22.1,maxX:-21.9,minY:6,maxY:12,minZ:-8,maxZ:-4},{minX:-22,maxX:-18,minY:6,maxY:7,minZ:-16.1,maxZ:-15.9},{minX:-18,maxX:-14,minY:6,maxY:7,minZ:-16.1,maxZ:-15.9},{minX:-14,maxX:-10,minY:6,maxY:7,minZ:-16.1,maxZ:-15.9},{minX:-10,maxX:-6,minY:6,maxY:7,minZ:-16.1,maxZ:-15.9},{minX:18,maxX:22,minY:6,maxY:7,minZ:-16.1,maxZ:-15.9},{minX:14,maxX:18,minY:6,maxY:7,minZ:-16.1,maxZ:-15.9},{minX:10,maxX:14,minY:6,maxY:7,minZ:-16.1,maxZ:-15.9},{minX:6,maxX:10,minY:6,maxY:7,minZ:-16.1,maxZ:-15.9},{minX:-14.1,maxX:-13.9,minY:6,maxY:12,minZ:0,maxZ:4},{minX:-14.1,maxX:-13.9,minY:6,maxY:12,minZ:-4,maxZ:0},{minX:1.98,maxX:6.02,minY:12,maxY:12.2,minZ:7.98,maxZ:12.02},{minX:-2.02,maxX:2.02,minY:12,maxY:12.2,minZ:7.98,maxZ:12.02},{minX:1.98,maxX:6.02,minY:12,maxY:12.2,minZ:3.98,maxZ:8.02},{minX:-6.02,maxX:-1.98,minY:12,maxY:12.2,minZ:7.98,maxZ:12.02},{minX:-6.02,maxX:-1.98,minY:12,maxY:12.2,minZ:3.98,maxZ:8.02},{minX:-2.02,maxX:2.02,minY:12,maxY:12.2,minZ:3.98,maxZ:8.02},{minX:-10.02,maxX:-5.98,minY:12,maxY:12.2,minZ:-.02,maxZ:4.02},{minX:-14.02,maxX:-9.98,minY:12,maxY:12.2,minZ:-.02,maxZ:4.02},{minX:-14.02,maxX:-9.98,minY:12,maxY:12.2,minZ:-4.02,maxZ:.02},{minX:-10.02,maxX:-5.98,minY:12,maxY:12.2,minZ:-4.02,maxZ:.02},{minX:5.98,maxX:10.02,minY:12,maxY:12.2,minZ:-.02,maxZ:4.02},{minX:5.98,maxX:10.02,minY:12,maxY:12.2,minZ:-4.02,maxZ:.02},{minX:9.98,maxX:14.02,minY:12,maxY:12.2,minZ:-4.02,maxZ:.02},{minX:9.98,maxX:14.02,minY:12,maxY:12.2,minZ:-.02,maxZ:4.02},{minX:1.98,maxX:6.02,minY:12,maxY:12.2,minZ:-11.02,maxZ:-6.98},{minX:-2.02,maxX:2.02,minY:12,maxY:12.2,minZ:-11.02,maxZ:-6.98},{minX:-6.02,maxX:-1.98,minY:12,maxY:12.2,minZ:-11.02,maxZ:-6.98},{minX:1.98,maxX:6.02,minY:12,maxY:12.2,minZ:-7.02,maxZ:-2.98},{minX:-2.02,maxX:2.02,minY:12,maxY:12.2,minZ:-7.02,maxZ:-2.98},{minX:-6.02,maxX:-1.98,minY:12,maxY:12.2,minZ:-7.02,maxZ:-2.98},{minX:1.98,maxX:6.02,minY:12,maxY:12.2,minZ:-.02,maxZ:4.02},{minX:1.98,maxX:6.02,minY:12,maxY:12.2,minZ:-3.02,maxZ:1.02},{minX:-6.02,maxX:-1.98,minY:12,maxY:12.2,minZ:-.02,maxZ:4.02},{minX:-6.02,maxX:-1.98,minY:12,maxY:12.2,minZ:-3.02,maxZ:1.02},{minX:21.9,maxX:22.1,minY:11,maxY:12,minZ:2,maxZ:6},{minX:21.9,maxX:22.1,minY:11,maxY:12,minZ:-6,maxZ:-2},{minX:5.9,maxX:6.1,minY:11,maxY:12,minZ:8,maxZ:12},{minX:10,maxX:14,minY:11,maxY:12,minZ:3.9,maxZ:4.1},{minX:-14,maxX:-10,minY:11,maxY:12,minZ:3.9,maxZ:4.1},{minX:-6.1,maxX:-5.9,minY:11,maxY:12,minZ:8,maxZ:12},{minX:-6.1,maxX:-5.9,minY:11,maxY:12,minZ:4,maxZ:8},{minX:-6.1,maxX:-5.9,minY:11,maxY:12,minZ:-11,maxZ:-7},{minX:-6.1,maxX:-5.9,minY:11,maxY:12,minZ:-7,maxZ:-3},{minX:-14,maxX:-10,minY:11,maxY:12,minZ:-4.1,maxZ:-3.9},{minX:10,maxX:14,minY:11,maxY:12,minZ:-4.1,maxZ:-3.9},{minX:5.9,maxX:6.1,minY:11,maxY:12,minZ:-11,maxZ:-7},{minX:5.9,maxX:6.1,minY:11,maxY:12,minZ:-8,maxZ:-4},{minX:-2,maxX:2,minY:11,maxY:12,minZ:-11.1,maxZ:-10.9},{minX:-6.1,maxX:-5.9,minY:6,maxY:7,minZ:8,maxZ:12},{minX:-6.1,maxX:-5.9,minY:6,maxY:7,minZ:4,maxZ:8}];let nc=null;function R1(){return nc||(nc={blocks:[...w1]}),nc}const Xt=20,xi=.25,C1=.001,P1=[[-Xt,Xt,Xt-xi,Xt+xi],[-Xt,Xt,-Xt-xi,-Xt+xi],[Xt-xi,Xt+xi,-Xt,Xt],[-Xt-xi,-Xt+xi,-Xt,Xt]],Mo=Xt,ar=Xt*2;function Eo(i,e,t){let n=i,s=e,r,o;const a=t+C1;for(const[l,c,h,u]of P1)n>=l-a&&n<=c+a&&s>=h-a&&s<=u+a&&(n<l+a?(n=l-a,r=1):n>c-a&&(n=c+a,r=-1),s<h+a?(s=h-a,o=1):s>u-a&&(s=u+a,o=-1));return{x:n,z:s,normalX:r,normalZ:o}}function cr(i,e){e.normalX!==void 0&&e.normalX!==0&&i.x*e.normalX>0&&(i.x=0),e.normalZ!==void 0&&e.normalZ!==0&&i.z*e.normalZ>0&&(i.z=0)}const I1="mixamorig:Head",L1="mixamorigHead",D1="Head",N1="mixamorig:HeadTop_End",O1="mixamorigHeadTop_End",U1="HeadTop_End",F1="mixamorig:Spine2",B1="mixamorig:Spine1",z1="mixamorig:Spine",k1="mixamorigSpine2",X1="mixamorigSpine1",H1="mixamorigSpine",Y1="Spine2",V1="Spine1",G1="Spine",Z1="mixamorig:Hips",W1="mixamorigHips",$1="Hips",j1="mixamorig:LeftFoot",q1="mixamorigLeftFoot",K1="LeftFoot",J1="mixamorig:RightFoot",Q1="mixamorigRightFoot",eS="RightFoot",$f="mixamorig:RightHand",jf="mixamorigRightHand",qf="RightHand",tS="mixamorig:LeftHand",nS="mixamorigLeftHand",iS="LeftHand";function Uu(i,e,t){if(e.collision!=="box"&&e.collision!=="ramp")return null;const[n,s,r]=e.size,[o,a,l]=i.position.map(Number),c=(Number(i.rotation)%360+360)%360,h=c===90||c===270,u=(h?r:n)/2,d=(h?n:r)/2,f=o-u,g=o+u,_=l-d,m=l+d;let p=a-s/2;const S=a+s/2;e.collision==="ramp"&&(p=t!==void 0?t:a-s/2+aS);const M={minX:f,maxX:g,minY:p,maxY:S,minZ:_,maxZ:m};return e.collision==="ramp"&&(M.rampAxis=h?"x":"z",M.rampInverted=c===270||c===180),e.walkableTopOnly&&(M.walkableTopOnly=!0),M}const ic={collision:"ramp",size:[4,1.2,2],walkableTopOnly:!0},sc="ramp_1x4",sS=.05;function rS(i,e,t){const n=i.filter(o=>o.id===e);if(n.length===0)return[];const s=[],r=new Map;for(const o of n){const a=(Number(o.rotation)%360+360)%360;r.has(a)||r.set(a,[]),r.get(a).push(o)}for(const[,o]of r){const a=(Number(o[0].rotation)%360+360)%360,l=a===0||a===180,c=a===0||a===90;o.sort((f,g)=>{const _=f.position[0],m=f.position[2],p=g.position[0],S=g.position[2];if(l){const T=m-S;return c?T:-T}const M=_-p;return c?M:-M});const h=f=>l?`${Number(f.position[0]).toFixed(2)}`:`${Number(f.position[2]).toFixed(2)}`,u=f=>Number(l?f.position[2]:f.position[0]),d=new Map;for(const f of o){const g=h(f);d.has(g)||d.set(g,[]),d.get(g).push(f)}for(const f of d.values()){f.sort((_,m)=>c?u(_)-u(m):u(m)-u(_));let g=[f[0]];for(let _=1;_<f.length;_++){const m=f[_-1],p=f[_],S=u(m),M=u(p);Math.abs(M-S-(c?t:-t))<=sS?g.push(p):(g.length>0&&s.push(g),g=[p])}g.length>0&&s.push(g)}}return s}function oS(i,e){const t=[],s=(e[sc]??ic).size[2];for(const o of i.prefabs){let a=e[o.id];if(o.id===sc&&!a&&(a=ic),!a||a.collision==="none"||a.collision==="ramp")continue;const l=Uu(o,a);l&&t.push(l)}const r=rS(i.prefabs,sc,s);for(const o of r){let a;for(const l of o){const c=e[l.id]??ic,h=Uu(l,c,a);h&&(t.push(h),a=h.maxY)}}return{blocks:t}}const aS=.2;function ha(i,e,t){if(!i.rampAxis)return i.maxY;const n=i.rampAxis==="z"?i.minZ:i.minX,s=i.rampAxis==="z"?i.maxZ:i.maxX,r=i.rampAxis==="z"?t:e,o=s-n,a=o>1e-6?Math.max(0,Math.min(1,(r-n)/o)):0,l=i.rampInverted?1-a:a,c=i.maxY-i.minY;return i.minY+l*c}const Kf=.15,Fu=.01;function Jf(i,e,t){if(!i.rampAxis)return!0;const n=i.rampAxis==="z"?i.minZ:i.minX,s=i.rampAxis==="z"?i.maxZ:i.maxX,r=i.rampAxis==="z"?t:e;return r>=n-Fu&&r<=s+Fu}const cS=.02;function lS(i,e,t,n=0){const s=[];for(const o of t.blocks)i<o.minX-n||i>o.maxX+n||e<o.minZ-n||e>o.maxZ+n||(s.push(o.minY),s.push(ha(o,i,e)));if(s.length<=1)return s;s.sort((o,a)=>o-a);const r=[s[0]];for(let o=1;o<s.length;o++){const a=s[o];a-r[r.length-1]>cS&&r.push(a)}return r}function vs(i,e,t){if(t.length===0)return null;if(e<i){const n=t.filter(s=>s>=e&&s<i);return n.length===0?null:Math.max(...n)}if(e>i){const n=t.filter(s=>s>i&&s<=e);return n.length===0?null:Math.min(...n)}return null}function lr(i,e){const t=e.filter(n=>n<=i);return t.length===0?null:Math.max(...t)}function Xo(i,e,t,n=0,s){const r=[];for(const a of t.blocks){if(i<a.minX-n||i>a.maxX+n||e<a.minZ-n||e>a.maxZ+n||a.rampAxis&&!Jf(a,i,e)||a.walkableTopOnly&&!a.rampAxis&&s!==void 0&&s<a.minY-n)continue;const l=ha(a,i,e);r.push(l)}if(r.length===0)return-1/0;if(r.length===1)return r[0];const o=s!==void 0?r.filter(a=>a<=s+Kf):r;return o.length===0?-1/0:Math.max(...o)}function Sr(i,e,t,n=0,s){const r=[];for(const l of t.blocks){if(i<l.minX-n||i>l.maxX+n||e<l.minZ-n||e>l.maxZ+n||l.rampAxis&&!Jf(l,i,e)||l.walkableTopOnly&&!l.rampAxis&&s!==void 0&&s<l.minY-n)continue;const c=ha(l,i,e);r.push({b:l,topY:c})}if(r.length===0)return!1;const o=r.length>1&&s!==void 0?r.filter(({topY:l})=>l<=s+Kf):r;return o.length===0?!1:o.reduce((l,c)=>c.topY>l.topY?c:l).b.rampAxis!=null}function To(i,e,t,n,s){let r=i,o=t,a,l;const c=n+.001;for(const h of s.blocks){if(!(e>=h.minY-c&&e<=h.maxY+c))continue;const d=ha(h,r,o);if(!(e>=d-c)&&r>=h.minX-c&&r<=h.maxX+c&&o>=h.minZ-c&&o<=h.maxZ+c){const f=Math.abs(r-(h.minX-c)),g=Math.abs(h.maxX+c-r),_=Math.abs(o-(h.minZ-c)),m=Math.abs(h.maxZ+c-o),p=Math.min(f,g,_,m);p===f?(r=h.minX-c,a=1):p===g?(r=h.maxX+c,a=-1):p===_?(o=h.minZ-c,l=1):(o=h.maxZ+c,l=-1)}}return{x:r,z:o,normalX:a,normalZ:l}}const hS=0,ys=.15,Ao=.05;function jn(i,e,t,n){return t?lS(i,e,t,n):[hS]}function uS(i,e,t,n,s){if(!t)return null;const r=Xo(i,e,t,n,s);if(!Number.isFinite(r))return null;const o=Xo(i+Ao,e,t,n,s),a=Xo(i,e+Ao,t,n,s);return!Number.isFinite(o)||!Number.isFinite(a)?null:{gradX:(o-r)/Ao,gradZ:(a-r)/Ao}}function sA(){return{slideTime:0,slideEnterCooldownTimer:0,slideJumpCooldownTimer:0,slideOnLand:!1,horSpeedWhenJumped:0,lastApproachVx:0,lastApproachVz:0,lastJumpHeld:!1,lastHasSlideIntent:!1,dashCooldownTimer:0,dashActiveTimer:0,lastDashDirX:0,lastDashDirZ:0}}function dS(i,e){i.slideJumpCooldownTimer>0&&(i.slideJumpCooldownTimer-=e),i.slideEnterCooldownTimer>0&&(i.slideEnterCooldownTimer-=e),i.dashCooldownTimer>0&&(i.dashCooldownTimer-=e)}function fS(i,e,t,n,s,r){const o=_l,a=i.ext,l=n+x1,c=e.jumpHeld&&!a.lastJumpHeld;a.lastJumpHeld=e.jumpHeld;const h=a.lastHasSlideIntent,u=e.hasSlideIntent&&!h;if(a.lastHasSlideIntent=e.hasSlideIntent,e.dash&&a.dashCooldownTimer<=0&&a.dashActiveTimer<=0){const q=Math.cos(e.yaw),H=Math.sin(e.yaw);let K=e.moveX*q-e.moveZ*H,G=-(e.moveX*H+e.moveZ*q),se=Math.hypot(K,G);if(se<.01){const le=Math.hypot(i.vx,i.vz);le>.01?(K=i.vx/le,G=i.vz/le,se=1):(K=-H,G=-q,se=Math.hypot(K,G))}se>.01&&(K/=se,G/=se,i.vx=K*o.dashSpeed,i.vz=G*o.dashSpeed,a.dashActiveTimer=o.dashDuration,a.dashCooldownTimer=o.dashCooldownSec,a.lastDashDirX=K,a.lastDashDirZ=G)}if(a.dashActiveTimer>0){a.dashActiveTimer-=t,i.vy-=o.gravity*t,i.vy=Math.max(i.vy,-55),i.x+=i.vx*t;const q=i.y+i.vy*t;i.z+=i.vz*t;const H=jn(i.x,i.z,r,n);let K;if(q>i.y){const le=vs(i.y+s,q+s,H);K=le!==null?le-s:null,i.y=le!==null?le-s:q}else K=vs(i.y,q,H),i.y=K!==null?K:q;K!==null&&(i.vy=0);const G=r?To(i.x,i.y,i.z,n,r):Eo(i.x,i.z,n);i.x=G.x,i.z=G.z;const se={x:i.vx,z:i.vz};cr(se,G),i.vx=se.x,i.vz=se.z;return}if(i.movementState==="sliding"){a.slideTime+=t;const q=Math.hypot(i.vx,i.vz),H=!!r&&Sr(i.x,i.z,r,n,i.y),K=H?o.slideDecayOnRamp:o.slideDecay;if(i.vx*=K,i.vz*=K,H&&o.rampSlideGravityFactor>0){const De=uS(i.x,i.z,r,n,i.y);if(De){const Oe=o.gravity*t*o.rampSlideGravityFactor;i.vx-=De.gradX*Oe,i.vz-=De.gradZ*Oe}const Te=Math.hypot(i.vx,i.vz);Te>o.slideMaxSpeedOnRamp&&(i.vx*=o.slideMaxSpeedOnRamp/Te,i.vz*=o.slideMaxSpeedOnRamp/Te)}i.vy-=o.gravity*t,i.vy=Math.max(i.vy,-55),i.x+=i.vx*t;const G=i.y;i.y+=i.vy*t,i.z+=i.vz*t;let se=jn(i.x,i.z,r,n);if(se.length===0&&r&&Math.hypot(i.vx,i.vz)>.01){const De=i.x-i.vx*t*.5,Te=i.z-i.vz*t*.5;se=jn(De,Te,r,n)}const xe=i.y>G?(()=>{const De=vs(G+s,i.y+s,se);return De!==null?De-s:null})():vs(G,i.y,se);xe!==null&&(i.y=xe,i.vy=0);const ae=r?To(i.x,i.y,i.z,n,r):Eo(i.x,i.z,n);i.x=ae.x,i.z=ae.z;const Xe={x:i.vx,z:i.vz};cr(Xe,ae),i.vx=Xe.x,i.vz=Xe.z;const J=jn(i.x,i.z,r,n),oe=lr(i.y+ys,J);oe!==null&&i.y<oe&&(i.y=oe,i.vy=0);const ve=Math.cos(e.yaw),me=Math.sin(e.yaw),Fe=e.moveX*ve-e.moveZ*me,re=-(e.moveX*me+e.moveZ*ve),de=Math.hypot(Fe,re);if(de>.1&&q>.1&&(Fe*i.vx+re*i.vz)/(de*q)<.5){i.movementState="grounded",a.slideEnterCooldownTimer=o.slideEnterCooldown;return}const Pe=oe!==null&&(i.y<=oe+ys||i.y<oe),N=q>=o.slideMinSpeed&&a.slideTime<o.slideDurationMax&&Pe,je=a.slideJumpCooldownTimer<=0;if(e.jump&&N&&je){const De=o.slideJumpMultiplier;i.vy=o.jumpForce*De,i.vx*=De,i.vz*=De,a.horSpeedWhenJumped=Math.hypot(i.vx,i.vz),a.slideJumpCooldownTimer=o.slideJumpCooldown,a.lastApproachVx=i.vx,a.lastApproachVz=i.vz,i.movementState="airborne"}else N||(a.slideEnterCooldownTimer=o.slideEnterCooldown,i.movementState=Pe?"grounded":"airborne");return}if(i.movementState==="airborne"){u&&(a.slideOnLand=!0),h&&!e.hasSlideIntent&&(a.slideOnLand=!1);const q=Math.hypot(i.vx,i.vz),H=a.horSpeedWhenJumped;q>H&&H>0&&(i.vx*=H/q,i.vz*=H/q),i.vy-=o.gravity*t,i.vy=Math.max(i.vy,-55),i.x+=i.vx*t,i.z+=i.vz*t;const K=i.y+i.vy*t,G=jn(i.x,i.z,r,n),se=K>i.y;let le;if(se){const me=vs(i.y+s,K+s,G);le=me!==null?me-s:null,i.y=me!==null?me-s:K}else le=vs(i.y,K,G),i.y=le!==null?le:K;const xe=K<i.y;if(le!==null&&xe){i.vy=0;const me=Math.hypot(i.vx,i.vz);if(a.slideOnLand&&me>=o.slideEnterSpeed){i.movementState="sliding",a.slideTime=0,a.slideJumpCooldownTimer=0;const re=!!r&&Sr(i.x,i.z,r,n,i.y)?o.slideBoostOnRampFactor:1,de=Math.max(me*o.slideSpeedBoost,o.slideInitialSpeed)*re;me>0&&de>0&&(i.vx=i.vx/me*de,i.vz=i.vz/me*de)}else if(i.movementState="grounded",!!r&&Sr(i.x,i.z,r,n,i.y)){const re=o.maxSpeedWalk*o.rampLandingSpeedFactor,de=Math.hypot(i.vx,i.vz);de>re&&re>0&&(i.vx*=re/de,i.vz*=re/de)}a.slideOnLand=!1}le===null?(a.horSpeedWhenJumped===0&&q>0&&(a.horSpeedWhenJumped=q),i.movementState="airborne"):xe||(i.vy=0,i.movementState="airborne");const ae=r?To(i.x,i.y,i.z,n,r):Eo(i.x,i.z,n);i.x=ae.x,i.z=ae.z;const Xe=jn(i.x,i.z,r,n),J=lr(i.y+ys,Xe);if(J!==null&&i.y<J&&(i.y=J,i.vy=0),ae.normalX!==void 0&&ae.normalX!==0||ae.normalZ!==void 0&&ae.normalZ!==0){const me=ae.normalX??0,Fe=ae.normalZ??0,re=a.lastApproachVx,de=a.lastApproachVz,ge=Math.hypot(re,de),Pe=re*me+de*Fe;if(c&&ge>=o.wallBounceSpeedMin&&Pe>0){let N=re-2*Pe*me,je=de-2*Pe*Fe;N*=o.wallBounceReflectFactor,je*=o.wallBounceReflectFactor;let De=Math.hypot(N,je);const Te=Math.max(De*o.wallBounceBoostFactor,o.wallBounceBoostMin);De>0&&Te>De&&(N*=Te/De,je*=Te/De,De=Te),i.vx=N,i.vz=je,i.vy=o.jumpForce*o.wallBounceJumpMultiplier,a.horSpeedWhenJumped=De,a.slideJumpCooldownTimer=o.slideJumpCooldown,a.slideOnLand=!1;const Oe={x:i.vx,z:i.vz};cr(Oe,ae),i.vx=Oe.x,i.vz=Oe.z;return}}else a.lastApproachVx=i.vx,a.lastApproachVz=i.vz;const ve={x:i.vx,z:i.vz};cr(ve,ae),i.vx=ve.x,i.vz=ve.z;return}const d=Math.hypot(i.vx,i.vz),f=a.slideEnterCooldownTimer<=0;if(e.hasSlideIntent&&f&&d>=o.slideEnterSpeed){i.movementState="sliding",a.slideTime=0;const q=Math.hypot(i.vx,i.vz),H=Math.max(q*o.slideSpeedBoost,o.slideInitialSpeed);q>0&&(i.vx=i.vx/q*H,i.vz=i.vz/q*H);return}const m=e.crouch?o.maxSpeedCrouch:o.maxSpeedWalk,p=Math.cos(e.yaw),S=Math.sin(e.yaw),M=(e.moveX*p-e.moveZ*S)*o.accel*t,T=(-e.moveX*S-e.moveZ*p)*o.accel*t;i.vx+=M,i.vz+=T,i.vx*=Math.max(0,1-o.friction*t),i.vz*=Math.max(0,1-o.friction*t);const I=Math.hypot(i.vx,i.vz);if(I>m&&(i.vx*=m/I,i.vz*=m/I),!!r&&Sr(i.x,i.z,r,n,i.y)){const q=Math.hypot(i.vx,i.vz);q>o.maxSpeedOnRamp&&(i.vx*=o.maxSpeedOnRamp/q,i.vz*=o.maxSpeedOnRamp/q)}e.jump?(i.vy=o.jumpForce,a.horSpeedWhenJumped=Math.hypot(i.vx,i.vz),a.lastApproachVx=i.vx,a.lastApproachVz=i.vz,i.movementState="airborne"):i.vy=0,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t;const R=jn(i.x,i.z,r,l),O=lr(i.y+ys,R);O!==null&&(i.y<=O+ys||i.y<O)?(i.y=O,i.vy=0,i.movementState="grounded"):(a.horSpeedWhenJumped===0&&(a.horSpeedWhenJumped=Math.hypot(i.vx,i.vz)),i.movementState="airborne");const E=r?To(i.x,i.y,i.z,n,r):Eo(i.x,i.z,n);i.x=E.x,i.z=E.z;const C={x:i.vx,z:i.vz};cr(C,E),i.vx=C.x,i.vz=C.z;const Y=jn(i.x,i.z,r,l);let V=lr(i.y+ys,Y);V!==null&&i.y<V&&(i.y=V,i.vy=0);const Z=Math.hypot(i.vx,i.vz);if(V===null&&r&&Z>.5){const H=i.x+i.vx/Z*.2,K=i.z+i.vz/Z*.2,G=jn(H,K,r,l),se=lr(i.y+.5,G);se!==null&&se>i.y&&se-i.y<=.5&&(i.y=se,i.vy=0)}}class mS{running=!1;lastTime=0;accumulator=0;onTick=()=>{};onRender=()=>{};rafId=0;setTickCallback(e){return this.onTick=e,this}setRenderCallback(e){return this.onRender=e,this}start(){this.running||(this.running=!0,this.lastTime=performance.now(),this.tick(0))}stop(){this.running=!1,this.rafId&&cancelAnimationFrame(this.rafId)}tick=e=>{this.rafId=requestAnimationFrame(this.tick);const t=(e-this.lastTime)/1e3;for(this.lastTime=e,this.accumulator+=Math.min(t,.1);this.accumulator>=Qa/1e3;)this.onTick(Qa/1e3),this.accumulator-=Qa/1e3;this.onRender(t)}}class pS{tickSystems=[];renderSystems=[];addTickSystem(e){this.tickSystems.push(e)}addRenderSystem(e){this.renderSystems.push(e)}update(e){for(const t of this.tickSystems)t.tick(e)}render(e){for(const t of this.renderSystems)t.render(e)}}const Si={},Bu=2567,rc=Si?.VITE_SERVER_URL;function gS(){return typeof window<"u"&&window.location?.hostname?`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.hostname}:${Bu}`:`ws://localhost:${Bu}`}const Be={serverUrl:typeof rc=="string"&&rc.trim()!==""?rc.trim():gS(),roomName:Si?.VITE_ARENA_ROOM??"arena_ffa",debugOverlay:!0,logLevel:"info",playerModelUrl:Si?.VITE_PLAYER_MODEL_URL??"/models/player.glb",viewmodelArmsUrl:(Si?.VITE_VIEWMODEL_ARMS_URL??"/models/vanguard_pov.glb").trim(),viewmodelWeaponUrl:(Si?.VITE_VIEWMODEL_WEAPON_URL??"/models/weapons/rifle.glb").trim(),viewmodelWeaponScale:Number(Si?.VITE_VIEWMODEL_WEAPON_SCALE??"3.6")||3.6,viewmodelWeaponTwoPoint:!1,viewmodelWeaponOffset:{x:.26,y:.23,z:.44},viewmodelWeaponPovOffset:{x:0,y:-.4,z:0},viewmodelWeaponGripOffset:{x:0,y:0,z:0},viewmodelWeaponRotationX:-1.68,viewmodelWeaponRotationY:2.93,viewmodelWeaponRotationZ:2*Math.PI,dummyModelUrl:Si?.VITE_DUMMY_MODEL_URL??"/models/dummy.glb",playerSkin:(Si?.VITE_PLAYER_SKIN??"orange").trim(),muzzleFlashUrls:[],muzzleFlashDurationMs:50,muzzleFlashScalePov:.21,muzzleFlashScale3P:.11,tracerEnabledDefault:!0,tracerMaxLifetimeMs:100,tracerEveryNthShot:1,tracerColor:16760944,tracerLineRadius:.01,tracerImpactLifetimeMs:90,tracerImpactSize:.08,tracerMuzzleSideOffset:.03,tracerFirstPersonLength:20,animationClipNames:{},thirdPersonWeaponOffset:{x:0,y:0,z:0},thirdPersonWeaponGripOffset:{x:0,y:0,z:0},thirdPersonWeaponScale:1,thirdPersonWeaponRotationX:.19,thirdPersonWeaponRotationY:3.16,thirdPersonWeaponRotationZ:1.45,tuning:{crouchTransitionTau:.04,povMovement:{moveFactorSmoothTau:.06,phaseSpeedSmoothTau:.08,rootApplyTau:.025,bobAmplitudeY:.01512,bobAmplitudeX:.0156,bobAmplitudeRoll:.0052,bobAmplitudePitch:.00258,bobPhaseOffsetX:.3,bobFrequency:10,bobCrouchMultiplier:.5,swayLookFactor:.6,swaySmoothTau:.05,swayDeltaSmoothTau:.04,swayReturnDamping:.88,swaySlideReduce:.92,bobSlideReduce:.98,strafeLeanX:.2,strafeLeanRoll:.025,forwardLeanZ:.1,strafeLeanTau:.06,strafeBobYReduce:.7,strafeBobXBoost:.5,strafeBobRollBoost:.8,idleBreathingAmplitudeY:.008,idleBreathingAmplitudeX:.0024,idleBreathingPeriod:4,idlePitchAmplitude:.0024,idleRollAmplitude:.0012,idleWalkReduce:.85,idleAirborneReduce:.3,jumpTakeoffDip:-.008,jumpTakeoffDecay:8,jumpAirborneFloatY:.032,jumpLandingDip:-.06,jumpLandingSpringK:60,jumpLandingSpringDamp:14,jumpLandingRoll:.016,jumpInertiaZ:.016,swayAirborneReduce:.5,recoilKickPitch:.02,recoilPullback:.15,recoilRollVariation:.02,recoilRecoveryTau:.06,recoilSlideReduce:.5,slideYOffset:-.2,slideZOffset:.1,slideInwardTilt:.38,slidePitchDown:-.1,slideImpactDipAmp:-.012,slideImpactSpringK:80,slideImpactSpringDamp:18,slideWiggleRoll:.005,slideWiggleDuration:.3,slideReleaseBump:0,slideReleaseBumpTau:.1,slideInTau:.04,slideOutTau:.28,bobCrouchFreqMultiplier:1,bobCrouchAmpMultiplier:1,reloadYOffset:-.12,reloadZOffset:.12,reloadPullback:.06,reloadPitchDown:-.3,reloadRoll:-.14,reloadYaw:.18,reloadOvershoot:.08,swayReloadReduce:.8,idleReloadReduce:.4},remoteInterpTau:.05,reconcileThreshold:.05,reconcileLerp:.5,reconcileMin:.01,reconcileYMin:.08,reconcileLerpGentle:.15},thirdPersonWeaponOffsets:{walkBackwards:{x:0,y:0,z:0,rotX:.09,rotY:3.39,rotZ:1.45,scale:1},crouchForward:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1},crouchBackward:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1},crouchLeft:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1},crouchRight:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1}}},xS={moveX:0,moveZ:0,sprint:!1,jump:!1,slide:!1,slideJustPressed:!1,slideIntentTicks:0,crouch:!1,yaw:0,pitch:0,shoot:!1,reload:!1,dash:!1,debugModeJustPressed:!1},_S=["KeyW","KeyN","KeyT","KeyC","ShiftLeft","ShiftRight"];function vS(i){document.addEventListener("keydown",e=>{const t=e.code,n=e.key?.toLowerCase();e.ctrlKey&&(t==="KeyW"||t==="KeyN"||t==="KeyT"||n==="w"||n==="n"||n==="t")&&(e.preventDefault(),e.stopImmediatePropagation())},{capture:!0})}class yS{state={...xS};pointerLocked=!1;sensitivity=.002;bound=!1;keysDown=new Set;slideWasDown=!1;_slideIntentTicks=0;getState(){this.state.sprint=!1;const e=this.keysDown.has("ShiftLeft")||this.keysDown.has("ShiftRight");return this.state.slideJustPressed=e&&!this.slideWasDown,this.slideWasDown=e,this.state.slide=e,this.state.slideIntentTicks=this._slideIntentTicks,this.state.crouch=this.keysDown.has("KeyC"),this.state.dash=this.keysDown.has("KeyQ"),this.state}tick(){this._slideIntentTicks>0&&this._slideIntentTicks--,this.state.debugModeJustPressed=!1}isPointerLocked(){return this.pointerLocked}requestPointerLock(e){if(this.bound)return;this.bound=!0,e.addEventListener("click",()=>{e.requestPointerLock(),navigator.keyboard?.lock&&navigator.keyboard.lock().then(()=>{}).catch(()=>{navigator.keyboard.lock(_S).catch(()=>{})})}),vS(),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===e,this.keysDown.clear(),this.slideWasDown=!1,this._slideIntentTicks=0,!this.pointerLocked&&navigator.keyboard?.unlock&&navigator.keyboard.unlock()}),document.addEventListener("mousemove",s=>{this.pointerLocked&&(this.state.yaw-=s.movementX*this.sensitivity,this.state.pitch-=s.movementY*this.sensitivity,this.state.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.state.pitch)))});const t={capture:!0},n=s=>{s.addEventListener("keydown",r=>this.onKey(r.code,!0,r),t),s.addEventListener("keyup",r=>this.onKey(r.code,!1,r),t)};n(document),n(window),n(e),window.addEventListener("keydown",s=>this.preventBrowserShortcuts(s),t),window.addEventListener("blur",()=>this.syncModifiers(!1,!1))}preventBrowserShortcuts(e){const t=e.key?.toLowerCase(),n=e.code;e.ctrlKey&&(n==="KeyW"||n==="KeyN"||n==="KeyT"||t==="w"||t==="n"||t==="t")&&e.preventDefault()}syncModifiers(e,t){this.keysDown.clear(),this.slideWasDown=!1,this._slideIntentTicks=0}isSlideKey(e){return e==="ShiftLeft"||e==="ShiftRight"}onKey(e,t,n){if(!n)return;const s=n.key?.toLowerCase();t?(this.keysDown.add(e),this.isSlideKey(e)&&(this._slideIntentTicks=Math.max(this._slideIntentTicks,10))):this.keysDown.delete(e),e==="KeyW"&&(this.state.moveZ=t?1:this.state.moveZ===1?0:this.state.moveZ),e==="KeyS"&&(this.state.moveZ=t?-1:this.state.moveZ===-1?0:this.state.moveZ),e==="KeyA"&&(this.state.moveX=t?-1:this.state.moveX===-1?0:this.state.moveX),e==="KeyD"&&(this.state.moveX=t?1:this.state.moveX===1?0:this.state.moveX),(e==="ShiftLeft"||e==="ShiftRight"||s==="shift")&&n.preventDefault(),e==="KeyC"&&n.preventDefault(),this.pointerLocked&&n.ctrlKey&&(e==="KeyW"||e==="KeyN"||e==="KeyT"||s==="w"||s==="n"||s==="t")&&n.preventDefault(),e==="Space"&&(n.preventDefault(),this.state.jump=t),e==="KeyR"&&(this.state.reload=t),e==="KeyB"&&t&&(n.preventDefault(),this.state.debugModeJustPressed=!0)}setShoot(e){this.state.shoot=e}sampleMouse(e){}consumeOneShoot(){this.state.shoot=!1}setMouseSensitivity(e){const t=Math.max(.2,Math.min(3,e));this.sensitivity=.002*t}}class SS{camera;targetPosition=new D(0,0,0);yaw=0;pitch=0;smooth=.15;constructor(e=75,t=16/9,n=.1,s=1e3){this.camera=new Jt(e,t,n,s)}setTargetPosition(e,t,n){this.targetPosition.set(e,t,n)}setRotation(e,t){this.yaw=e,this.pitch=t}getAimDirection(){this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0,this.camera.updateMatrixWorld(!0);const e=new D;return this.camera.getWorldDirection(e),e}snapToTarget(){this.camera.position.x=this.targetPosition.x,this.camera.position.y=this.targetPosition.y,this.camera.position.z=this.targetPosition.z,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0,this.camera.updateMatrixWorld()}update(e){this.camera.position.x=Bs.lerp(this.camera.position.x,this.targetPosition.x,1-Math.exp(-this.smooth*60*e)),this.camera.position.z=Bs.lerp(this.camera.position.z,this.targetPosition.z,1-Math.exp(-this.smooth*60*e)),this.camera.position.y=this.targetPosition.y,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0,this.camera.updateMatrixWorld()}getCamera(){return this.camera}getEyePosition(){return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z}}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}}const MS=0;class ES{position={x:0,y:MS,z:0};velocity={x:0,y:0,z:0};yaw=0;pitch=0;state="grounded";crouching=!1;coyoteTimer=0;jumpBufferTimer=0;staticWorld;ext={slideTime:0,slideEnterCooldownTimer:0,slideJumpCooldownTimer:0,slideOnLand:!1,horSpeedWhenJumped:0,lastApproachVx:0,lastApproachVz:0,lastJumpHeld:!1,lastHasSlideIntent:!1,dashCooldownTimer:0,dashActiveTimer:0,lastDashDirX:0,lastDashDirZ:0};setStaticWorld(e){this.staticWorld=e}update(e,t,n){const s=_l;t.jump&&(this.jumpBufferTimer=s.jumpBufferTime),this.state==="grounded"?this.coyoteTimer=s.coyoteTime:this.coyoteTimer-=e,dS(this.ext,e);const r=t.slide||t.slideIntentTicks>0,o=this.jumpBufferTimer>0||t.jump&&this.coyoteTimer>0,a={moveX:t.moveX,moveZ:t.moveZ,jump:o,jumpHeld:t.jump,hasSlideIntent:r,crouch:t.crouch,dash:t.dash,yaw:t.yaw,pitch:t.pitch},l={x:this.position.x,y:this.position.y,z:this.position.z,vx:this.velocity.x,vy:this.velocity.y,vz:this.velocity.z,movementState:this.state,ext:this.ext};fS(l,a,e,ec,Gf,this.staticWorld),this.position.x=l.x,this.position.y=l.y,this.position.z=l.z,this.velocity.x=l.vx,this.velocity.y=l.vy,this.velocity.z=l.vz,this.state=l.movementState,this.yaw=t.yaw,this.pitch=t.pitch,o&&this.state==="airborne"&&(this.jumpBufferTimer=0),this.state==="airborne"&&(this.jumpBufferTimer-=e),this.crouching=this.state==="sliding"||this.state==="grounded"&&t.crouch}getSnapshot(){return{position:{...this.position},velocity:{...this.velocity},yaw:this.yaw,pitch:this.pitch,grounded:this.state==="grounded",state:this.state,crouching:this.crouching}}getDashCooldownRemaining(){return Math.max(0,this.ext.dashCooldownTimer)}getDashCooldownTotal(){return _l.dashCooldownSec}isDashing(){return this.ext.dashActiveTimer>0}getGroundDebugInfo(){if(!this.staticWorld)return null;const e=Xo(this.position.x,this.position.z,this.staticWorld,ec,this.position.y),t=Sr(this.position.x,this.position.z,this.staticWorld,ec,this.position.y);return{groundY:Number.isFinite(e)?e:this.position.y,playerY:this.position.y,onRamp:t}}}class TS{scene=new py;renderer;floor;gridHelper;defaultWalls=[];mapGroup=null;renderScale=1;constructor(e,t){const n=t?.antialias??!0;this.renderer=new my({canvas:e,antialias:n}),this.renderScale=t?.renderScale&&t.renderScale>0?t.renderScale:1;const s=Math.min(window.devicePixelRatio*this.renderScale,2);this.renderer.setPixelRatio(s);const r=e.clientWidth||window.innerWidth,o=e.clientHeight||window.innerHeight;this.renderer.setSize(r,o),this.renderer.setClearColor(2763317),this.scene.background=new We(2763317);const a=new Qy(16777215,.5);this.scene.add(a);const l=new $y(2956110,855322,.35);this.scene.add(l);const c=new Xf(16777215,.85);c.position.set(12,25,12),this.scene.add(c);const h=new zr(ar,ar),u=new _n({color:14211292});this.floor=new vt(h,u),this.floor.rotation.x=-Math.PI/2,this.scene.add(this.floor),this.gridHelper=new f1(ar,ar,9079444,11053232),this.gridHelper.position.y=.001,this.scene.add(this.gridHelper);const d=new ci(ar,4,.5),f=new _n({color:14211292});for(const[g,_]of[[0,Mo],[0,-Mo],[Mo,0],[-Mo,0]]){const m=new vt(d,f);m.position.set(g,2,_),_===0&&(m.rotation.y=Math.PI/2),this.defaultWalls.push(m),this.scene.add(m)}this.scene.add(this.createProceduralSkybox())}createProceduralSkybox(){const t=new la(500,32,24),n=new oi({uniforms:{},vertexShader:`
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
      `,side:en,depthWrite:!1}),s=new vt(t,n);return s.frustumCulled=!1,s}render(e){this.renderer.render(this.scene,e)}resize(e,t){this.renderer.setSize(e,t)}getScene(){return this.scene}setMapGroup(e){this.mapGroup&&this.scene.remove(this.mapGroup),this.mapGroup=e,this.mapGroup&&this.scene.add(this.mapGroup)}setDefaultArenaVisible(e){this.floor.visible=e,this.gridHelper.visible=e,this.defaultWalls.forEach(t=>t.visible=e)}setPerformance(e){this.renderScale=e.renderScale>0?e.renderScale:1;const t=Math.min(window.devicePixelRatio*this.renderScale,2);this.renderer.setPixelRatio(t)}}const zu=10;function Qf(i){return i.length<=zu?i:i.slice(0,zu)+"..."}let bo=null,em=null,vl=null,tm=null,nm=null,im=null,sm=null,rm=null,om=null,am=null,cm=null,lm=null;const hm="#4dd0e1",AS="#c62828",bS="#9a1f1f",wS="rgba(0,0,0,0.6)",Ho=10;function RS(i){const e=document.createElement("div");e.id="crosshair",e.style.cssText=`
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
  `,i.appendChild(e);const t=document.createElement("div");t.id="hud-player-panel",t.style.cssText=`
    position: fixed; bottom: 48px; left: 48px;
    display: flex; flex-direction: column; gap: 6px;
    font-family: system-ui, sans-serif; color: #fff;
  `;const n=document.createElement("div");n.id="hud-player-value",n.style.cssText="font-size: 26px; font-weight: 600; letter-spacing: 0.02em;",n.textContent="150 / 150";const s=document.createElement("div");s.id="hud-player-bar",s.style.cssText=`
    display: flex; gap: 2px; width: 230px; height: 17px;
    background: rgba(0,0,0,0.5); border-radius: 4px;
    padding: 4px; box-sizing: border-box;
  `;for(let V=0;V<Ho;V++){const Z=document.createElement("div");Z.style.cssText=`
      flex: 1; border-radius: 2px; min-width: 0;
      background: ${hm}; transition: background 0.15s ease;
    `,s.appendChild(Z)}const r=document.createElement("div");r.id="hud-player-name",r.style.cssText="font-size: 18px; color: rgba(255,255,255,0.9);",r.textContent="Player";const o=document.createElement("div");o.id="hud-left-info",o.style.cssText="font-size: 15px; color: rgba(255,255,255,0.5); margin-top: 4px;",o.textContent="";const a=document.createElement("div");a.id="hud-dash-indicator",a.style.cssText=`
    display: flex; align-items: center; gap: 8px; margin-bottom: 14px;
  `;const l=document.createElement("div");l.id="hud-dash-circle",l.style.cssText=`
    width: 47px; height: 47px; border-radius: 50%;
    background: conic-gradient(var(--dash-fill-color, #4dd0e1) calc(var(--dash-fill, 0) * 360deg), rgba(255,255,255,0.15) 0);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  `;const c=document.createElement("div");c.id="hud-dash-icon",c.setAttribute("aria-label","Dash"),c.style.cssText=`
    width: 42px; height: 42px; border-radius: 50%;
    background-color: rgba(0,0,0,0.55);
    background-image: url("/ui/ability_dash.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    border: 3px solid currentColor;
    color: #4dd0e1;
    transition: filter 0.2s ease, color 0.2s ease;
  `,l.appendChild(c),a.appendChild(l),t.appendChild(a),t.appendChild(n),t.appendChild(s),t.appendChild(r),t.appendChild(o),i.appendChild(t);const h=document.createElement("div");h.id="hud-dash-lines-left",h.style.cssText=`
    position: fixed; left: 0; top: 0; bottom: 0; width: 4%;
    max-width: 48px; pointer-events: none;
    background: linear-gradient(90deg, rgba(77,208,225,0.25) 0%, transparent 100%);
    opacity: 0; transition: opacity 0.08s ease-out;
    z-index: 1;
  `;const u=document.createElement("div");u.id="hud-dash-lines-right",u.style.cssText=`
    position: fixed; right: 0; top: 0; bottom: 0; width: 4%;
    max-width: 48px; pointer-events: none;
    background: linear-gradient(270deg, rgba(77,208,225,0.25) 0%, transparent 100%);
    opacity: 0; transition: opacity 0.08s ease-out;
    z-index: 1;
  `,i.appendChild(h),i.appendChild(u);const d="rgba(77,208,225,0.5)",f=55,g=360/f,_=.75,m=[];for(let V=0;V<f;V++){const Z=V*g;m.push(`${d} ${Z}deg`,`transparent ${Z+_}deg`)}const p=`conic-gradient(from 0deg, ${m.join(", ")})`,S=document.createElement("div");S.id="hud-dash-streaks",S.style.cssText=`
    position: fixed; inset: 0;
    pointer-events: none;
    opacity: 0;
    z-index: 0;
    background-image: ${p};
    mask-image: radial-gradient(ellipse 85% 85% at 50% 50%, transparent 30%, black 75%);
    -webkit-mask-image: radial-gradient(ellipse 85% 85% at 50% 50%, transparent 30%, black 75%);
    mask-size: 100% 100%;
    -webkit-mask-size: 100% 100%;
    transition: opacity 0.08s ease-out;
  `,i.appendChild(S);const M=document.createElement("div");M.id="hud-weapon-panel",M.style.cssText=`
    position: fixed; bottom: 48px; right: 48px;
    display: flex; flex-direction: row; align-items: stretch; gap: 16px;
    font-family: system-ui, sans-serif; color: #fff;
  `;const T=document.createElement("img");T.id="hud-weapon-image",T.src="/ui/weapon_rifle_white.png",T.alt="Weapon",T.style.cssText=`
    width: 208px; height: auto; object-fit: contain;
    filter: drop-shadow(0 0 6px rgba(0,0,0,0.7));
    transform: scaleX(-1);
  `;const I=document.createElement("div");I.id="hud-info",I.style.cssText=`
    font-size: 26px; font-weight: 600; letter-spacing: 0.02em;
    color: #fff; text-align: right;
  `,I.innerHTML='<span style="color:#fff">30</span><span style="color:rgba(255,255,255,0.6)"> / 30</span>';const P=document.createElement("div");P.style.cssText=`
    display: flex; flex-direction: column; align-items: flex-end; gap: 6px;
  `,P.appendChild(I),P.appendChild(T);const R=document.createElement("div");R.id="hud-weapon-slots",R.style.cssText=`
    display: flex; flex-direction: column; align-items: flex-start; min-height: 0;
  `;const O=document.createElement("div");O.style.cssText=`
    display: flex; flex-direction: row; align-items: center; gap: 8px;
    flex: 1; min-height: 0; opacity: 0.9;
  `;const j=document.createElement("div");j.style.cssText=`
    width: 2px; height: 100%;
    background: rgba(255,255,255,0.6);
    position: relative;
    align-self: stretch;
  `;const E=document.createElement("div");E.style.cssText=`
    width: 10px; height: 10px;
    background: rgba(255,255,255,0.9);
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    border-radius: 1px;
  `,j.appendChild(E);const C=document.createElement("div");C.textContent="1",C.style.cssText=`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: rgba(255,255,255,0.9);
  `,O.appendChild(j),O.appendChild(C),R.appendChild(O),M.appendChild(P),M.appendChild(R),i.appendChild(M);const Y=document.createElement("div");Y.id="respawn-overlay",Y.style.cssText=`
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
  `,Y.innerHTML='<div>Respawn</div><div id="respawn-countdown">3.0</div>',i.appendChild(Y),em=n,vl=s,tm=r,nm=I,im=l,sm=c,rm=h,om=u,am=S,cm=Y,lm=Y.querySelector("#respawn-countdown")}function CS(i,e,t,n,s,r,o,a,l,c,h){const u=i>0,d=u?i:t,f=u?e:n,g=f>0?d/f:0,_=Math.round(g*Ho),m=u?hm:AS,p=em??document.getElementById("hud-player-value");if(p){const se=Math.max(0,Math.floor(i+t)),le=e+n;p.innerHTML=`<span style="color:#fff">${se}</span><span style="color:rgba(255,255,255,0.6)"> / ${le}</span>`}const S=vl??document.getElementById("hud-player-bar"),M=u?bS:wS;if(S&&S.children.length===Ho)for(let se=0;se<Ho;se++){const le=S.children[se];le.style.background=se<_?m:M}const T=vl??document.getElementById("hud-player-bar");T&&(T.style.background=u?"rgba(40,0,0,0.4)":"rgba(0,0,0,0.5)");const I=tm??document.getElementById("hud-player-name");I&&(I.textContent=Qf(o));const P=nm??document.getElementById("hud-info");if(P){const se=a?"∞":String(s),le=a?"∞":String(r);P.innerHTML=`<span style="color:#fff">${se}</span><span style="color:rgba(255,255,255,0.6)"> / ${le}</span>`}const R=Math.max(.001,c??10),O=Math.max(0,l??0),j=1-O/R,E=O<=0,C=im??document.getElementById("hud-dash-circle"),Y=sm??document.getElementById("hud-dash-icon");C&&Y&&(C.style.setProperty("--dash-fill",String(j)),C.style.setProperty("--dash-fill-color","#4dd0e1"),Y.style.color=E?"#4dd0e1":"rgba(255,255,255,0.4)",Y.style.filter=E?"none":"grayscale(1)");const V=rm??document.getElementById("hud-dash-lines-left"),Z=om??document.getElementById("hud-dash-lines-right"),q=am??document.getElementById("hud-dash-streaks"),H=h??!1;V&&Z&&(V.style.opacity=H?"1":"0",Z.style.opacity=H?"1":"0"),q&&(q.style.opacity=H?"0.85":"0");const K=cm??document.getElementById("respawn-overlay"),G=lm??document.getElementById("respawn-countdown");if(!(!K||!G))if(t<=0){bo===null&&(bo=performance.now());const se=(performance.now()-bo)/1e3,le=Math.max(0,M1-se);G.textContent=le.toFixed(1),K.style.display="block"}else bo=null,K.style.display="none"}const PS=.5,IS=84,LS=10,yl=10,um="#4dd0e1",DS="#c62828",NS="#9a1f1f",OS="rgba(0,0,0,0.6)",US=80,FS=-14,BS=.06,zS=.18,kS=2,wo=24;let Ai=null;const bs=new Map;let dm=0;const ku=new D,Ro=new D;function XS(i){Ai=document.createElement("div"),Ai.id="player-health-bars",Ai.style.cssText="position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:9999;",i.appendChild(Ai)}function HS(i){if(!Ai)return;let e=bs.get(i);if(!e){const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      display: flex;
      gap: 1px;
      width: ${IS}px;
      height: ${LS}px;
      background: rgba(0,0,0,0.5);
      border: 1px solid rgba(0,0,0,0.85);
      border-radius: 2px;
      padding: 1px;
      box-sizing: border-box;
      transform-origin: center center;
      opacity: 0;
    `;const n=[];for(let s=0;s<yl;s++){const r=document.createElement("div");r.style.cssText=`
        flex: 1; min-width: 0; border-radius: 1px;
        background: ${um}; transition: background 0.12s ease;
      `,t.appendChild(r),n.push(r)}Ai.appendChild(t),e={entityId:i,lastDamagedTime:0,lastDamagedMs:0,element:t,segments:n,smoothedScreenX:0,smoothedScreenY:0,visibilityAlpha:0,prevShield:Rr,prevHealth:gl,shieldBreakFlashUntil:0},bs.set(i,e)}e.lastDamagedTime=performance.now()/1e3,e.lastDamagedMs=dm}function YS(i,e,t){dm+=t*1e3;const n=performance.now()/1e3;if(!Ai||!i)return;const s=window.innerWidth,r=window.innerHeight,o=wo,a=s-wo,l=wo,c=r-wo,h=S1/1e3,u=[];i.state.players.forEach((g,_)=>{const m=bs.get(_);!m||g.health<=0||n-m.lastDamagedTime>h||u.push(m)}),u.sort((g,_)=>_.lastDamagedTime-g.lastDamagedTime);const d=u.slice(0,kS);i.state.players.forEach((g,_)=>{const m=bs.get(_);if(!m)return;const p=g.health>0,S=n-m.lastDamagedTime,M=p&&S<h&&d.includes(m);if(ku.set(g.x,g.y+Vs+PS,g.z),Ro.copy(ku).project(e),Ro.z>1){m.element.style.opacity="0",m.element.style.pointerEvents="none";return}let T=(Ro.x*.5+.5)*s,I=(1-(Ro.y*.5+.5))*r+FS;T=Math.max(o,Math.min(a,T)),I=Math.max(l,Math.min(c,I));const P=T-m.smoothedScreenX,R=I-m.smoothedScreenY,O=Math.hypot(P,R);if((O>80||m.smoothedScreenX===0&&m.smoothedScreenY===0)&&(m.smoothedScreenX=T,m.smoothedScreenY=I),O<=80){const xe=1-Math.exp(-22*t);m.smoothedScreenX+=(T-m.smoothedScreenX)*xe,m.smoothedScreenY+=(I-m.smoothedScreenY)*xe}(M?1:0)>m.visibilityAlpha?m.visibilityAlpha=Math.min(1,m.visibilityAlpha+t/BS):m.visibilityAlpha=Math.max(0,m.visibilityAlpha-t/zS),m.element.style.left=`${m.smoothedScreenX}px`,m.element.style.top=`${m.smoothedScreenY}px`,m.element.style.transform="translate(-50%, -50%)",m.element.style.opacity=String(m.visibilityAlpha);const E=g.shield??0,C=g.maxShield??Rr,Y=E>0,V=Y?E:g.health,Z=Y?C:g.maxHealth,q=Z>0?V/Z:0,H=Math.round(q*yl),K=Y?um:DS,G=Y?NS:OS;m.element.style.background="rgba(0,0,0,0.5)";for(let xe=0;xe<yl;xe++){const ae=m.segments[xe];ae&&(ae.style.background=xe<H?K:G)}m.prevShield>0&&E===0&&(m.shieldBreakFlashUntil=n*1e3+US),m.prevShield=E,m.prevHealth=g.health;const le=n*1e3<m.shieldBreakFlashUntil;m.element.style.boxShadow=le?"0 0 8px 2px rgba(255,80,80,0.8)":"none"});const f=[];bs.forEach((g,_)=>{i.state.players.get(_)||(Ai?.removeChild(g.element),f.push(_))}),f.forEach(g=>bs.delete(g))}const Xu=1,oc=26,VS=4,ac="#e53935",Co=60,Po=63,Hu=52,GS=9995,ZS=.5;let Zi=null;const On=[],lc=new D,hr=new D,WS=new D(0,1,0);let Yu=0,Sl=null;function $S(){return Sl}function Vu(i,e,t,n,s){const r=Math.sin(-n),o=Math.cos(-n),a=Math.sin(s),l=Math.cos(s);lc.set(r,o*a,-o*l),hr.crossVectors(lc,WS),hr.lengthSq()<1e-10?hr.set(1,0,0):hr.normalize();const c=new D(i,e,t),h=c.dot(lc),u=c.dot(hr);let d=Math.atan2(u,h);return d<0&&(d+=2*Math.PI),d*180/Math.PI}function jS(i){Zi=document.createElement("div"),Zi.id="hit-indicator",Zi.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:${GS};`,i.appendChild(Zi)}function qS(i,e,t){if(!Zi)return;for(;On.length>=VS;)On.shift().element.remove();const n=document.createElement("div");n.style.cssText=`
    position: absolute;
    left: 50%;
    top: 50%;
    width: ${Hu}vmin;
    height: ${Hu}vmin;
    transform-origin: center center;
  `;const s=document.createElement("div");s.style.cssText=`
    position: absolute;
    inset: 0;
    background: conic-gradient(
      from ${-oc/2}deg at 50% 50%,
      ${ac} 0deg,
      ${ac} ${oc}deg,
      transparent ${oc}deg
    );
    opacity: 0.55;
    mask: radial-gradient(
      circle,
      transparent 0%,
      transparent ${Co}%,
      rgba(255,255,255,0.4) ${Co}%,
      rgba(255,255,255,0.9) ${Po}%,
      transparent ${Po}%
    );
    -webkit-mask: radial-gradient(
      circle,
      transparent 0%,
      transparent ${Co}%,
      rgba(255,255,255,0.4) ${Co}%,
      rgba(255,255,255,0.9) ${Po}%,
      transparent ${Po}%
    );
  `;const r=6,o=5.5,a=document.createElement("div");a.style.cssText=`
    position: absolute;
    left: 50%;
    top: calc(${o}% - ${r}px);
    width: 0;
    height: 0;
    margin-left: -${r}px;
    border-left: ${r}px solid transparent;
    border-right: ${r}px solid transparent;
    border-bottom: ${r}px solid ${ac};
    opacity: 0.9;
    pointer-events: none;
  `,n.appendChild(s),n.appendChild(a),Zi.appendChild(n),On.push({spawnTime:performance.now()/1e3,dirX:i,dirY:e,dirZ:t,element:n,wedge:s,arrow:a})}function KS(i,e,t,n){if(!Zi)return;const s=performance.now()/1e3;if(n&&On.length>0&&s-Yu>=ZS){Yu=s;const r=On[On.length-1],o=Vu(r.dirX,r.dirY,r.dirZ,i,e);console.log(`[HitIndicator] dir=(${r.dirX.toFixed(2)},${r.dirY.toFixed(2)},${r.dirZ.toFixed(2)}) angle=${o.toFixed(1)}°`)}Sl=null;for(let r=On.length-1;r>=0;r--){const o=On[r],a=s-o.spawnTime,l=Vu(o.dirX,o.dirY,o.dirZ,i,e);r===On.length-1&&(Sl=l),o.element.style.transform=`translate(-50%, -50%) rotate(${l}deg)`;const c=Math.max(0,1-a/Xu);o.wedge.style.opacity=String(.55*c),o.arrow.style.opacity=String(.9*c),a>=Xu&&(o.element.remove(),On.splice(r,1))}}const fm=.2,JS=.58,mm=.23,QS=.72,pm=.26,eM=.6,gm=.45,tM=.42,ua=.28,xm=.55,Gu=.1,nM=22,iM=8;let pn=null,Yo=null,Vo=null,Go=null,Hi=null,Zo=null,Wo=null;const _m={remaining:0,duration:fm,maxAlpha:JS},vm={remaining:0,duration:mm,maxAlpha:QS},ym={remaining:0,duration:pm,maxAlpha:eM},Ml={remaining:0,duration:gm,maxAlpha:tM},Sm={remaining:0,duration:ua,maxAlpha:xm},Mm={remaining:0,duration:ua,maxAlpha:xm};let Mr=null,$o=null,jo=!1;function sM(i){if(pn)return;pn=document.createElement("div"),pn.id="screen-damage-feedback",pn.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:9994;";const e="position:fixed;inset:0;pointer-events:none;background:transparent;opacity:0;transition:none;",t=document.createElement("div");t.style.cssText=`${e}background:
    radial-gradient(ellipse 85% 85% at 0 0, rgba(100,200,255,0.92) 0%, rgba(80,180,255,0.55) 22%, transparent 52%) 0 0 / 34vmin 11vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 0, rgba(100,200,255,0.92) 0%, rgba(80,180,255,0.55) 22%, transparent 52%) 100% 0 / 34vmin 11vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 0 100%, rgba(100,200,255,0.92) 0%, rgba(80,180,255,0.55) 22%, transparent 52%) 0 100% / 34vmin 11vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 100%, rgba(100,200,255,0.92) 0%, rgba(80,180,255,0.55) 22%, transparent 52%) 100% 100% / 34vmin 11vmin no-repeat;`;const n=document.createElement("div");n.style.cssText=`${e}background:
    radial-gradient(ellipse 85% 85% at 0 0, rgba(160,220,255,0.98) 0%, rgba(110,200,255,0.7) 20%, transparent 55%) 0 0 / 30vmin 10vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 0, rgba(160,220,255,0.98) 0%, rgba(110,200,255,0.7) 20%, transparent 55%) 100% 0 / 30vmin 10vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 0 100%, rgba(160,220,255,0.98) 0%, rgba(110,200,255,0.7) 20%, transparent 55%) 0 100% / 30vmin 10vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 100%, rgba(160,220,255,0.98) 0%, rgba(110,200,255,0.7) 20%, transparent 55%) 100% 100% / 30vmin 10vmin no-repeat;`;const s=document.createElement("div");s.style.cssText=`${e}background:
    radial-gradient(ellipse 85% 85% at 0 0, rgba(210,40,40,1) 0%, rgba(210,40,40,0.85) 30%, transparent 80%) 0 0 / 28vmin 9vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 0, rgba(210,40,40,1) 0%, rgba(210,40,40,0.85) 30%, transparent 80%) 100% 0 / 28vmin 9vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 0 100%, rgba(210,40,40,1) 0%, rgba(210,40,40,0.85) 30%, transparent 80%) 0 100% / 28vmin 9vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 100%, rgba(210,40,40,1) 0%, rgba(210,40,40,0.85) 30%, transparent 80%) 100% 100% / 28vmin 9vmin no-repeat;`;const r=document.createElement("div"),o="rgba(100,255,140,0.4)",a="10px",l="1.5px",c=`repeating-linear-gradient(0deg, transparent 0, transparent ${a}, ${o} ${a}, ${o} calc(${a} + ${l}))`,h=`repeating-linear-gradient(90deg, transparent 0, transparent ${a}, ${o} ${a}, ${o} calc(${a} + ${l}))`;r.style.cssText=`
    position: fixed; left: 0; right: 0; bottom: 0; height: 7vmin;
    pointer-events: none; opacity: 0; transition: none;
    border-radius: 55% 55% 0 0;
    background-image: ${c}, ${h},
      radial-gradient(ellipse 75% 100% at 50% 100%, rgba(50,230,95,0.62) 0%, transparent 70%);
    background-size: 100% 100%, 100% 100%, 100% 100%;
    background-position: 0 0, 0 0, 0 0;
    background-repeat: repeat, repeat, no-repeat;`;const u="20px",d="19px",f="rgba(90,190,255,0.78)",g="rgba(255,90,90,0.8)",_=R=>`repeating-linear-gradient(0deg, transparent 0, transparent ${d}, ${R} ${d}, ${R} ${u})`,m=R=>`repeating-linear-gradient(90deg, transparent 0, transparent ${d}, ${R} ${d}, ${R} ${u})`,p=R=>`${_(R)}, ${m(R)}`,S=`${nM}vmin ${iM}vmin`,M="0 0, 0 0, 100% 0, 100% 0, 0 100%, 0 100%, 100% 100%, 100% 100%",T=[S,S,S,S,S,S,S,S].join(", "),I=document.createElement("div");I.style.cssText=`${e}
    background-image: ${p(f)}, ${p(f)}, ${p(f)}, ${p(f)};
    background-size: ${T};
    background-position: ${M};
    background-repeat: no-repeat;`;const P=document.createElement("div");P.style.cssText=`${e}
    background-image: ${p(g)}, ${p(g)}, ${p(g)}, ${p(g)};
    background-size: ${T};
    background-position: ${M};
    background-repeat: no-repeat;`,pn.appendChild(t),pn.appendChild(n),pn.appendChild(s),pn.appendChild(r),pn.appendChild(I),pn.appendChild(P),i.appendChild(pn),Yo=t,Vo=n,Go=s,Hi=r,Zo=I,Wo=P,Mr=null,$o=null,jo=!1}function rM(i,e,t,n,s){if(!pn||!Yo||!Vo||!Go||!Hi||!Zo||!Wo)return;const r=i>Gu?Gu:i<0?0:i;if(Mr!==null&&$o!==null){const o=e-Mr,a=n-$o;o<0?(e===0?aM():e>0&&oM(),hM()):e===0&&a<0&&(cM(),uM());const l=e>Mr&&e<t;l&&!jo?(lM(),jo=!0):(!l||e===t)&&(jo=!1)}if(Mr=e,$o=n,Ss(_m,Yo,r),Ss(vm,Vo,r),Ss(ym,Go,r),Ss(Ml,Hi,r),Ml.remaining>0&&Hi){const o=parseFloat(Hi.style.opacity)||0,a=.88+.12*Math.sin(performance.now()*.004);Hi.style.opacity=Math.max(0,Math.min(1,o*a)).toFixed(3)}Ss(Sm,Zo,r),Ss(Mm,Wo,r),n<=0&&(Yo.style.opacity="0",Vo.style.opacity="0",Go.style.opacity="0",Hi.style.opacity="0",Zo.style.opacity="0",Wo.style.opacity="0")}function Ss(i,e,t){if(i.remaining<=0){e.style.opacity="0";return}if(i.remaining-=t,i.remaining<=0){e.style.opacity="0",i.remaining=0;return}const n=i.duration>0?i.remaining/i.duration:0,s=i.maxAlpha*n,r=s<0?0:s>i.maxAlpha?i.maxAlpha:s;e.style.opacity=r.toFixed(3)}function oM(i,e){_m.remaining=fm}function aM(i,e,t){vm.remaining=mm}function cM(i,e){ym.remaining=pm}function lM(){Ml.remaining=gm}function hM(){Sm.remaining=ua}function uM(){Mm.remaining=ua}const Em=.28,dM=.4,Ms="#a0a0a0",fM="#e53935",Zu=.1,Yi=40,Lt=Yi/2,Wu=9,rh=7,Tm=6,Io=2,mM=9996;let Wi=null,$i=[],Wt=null;function pM(i){if(Wi)return;const e=document.createElement("div");e.id="crosshair-hit-feedback",e.style.cssText=`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${Yi}px;
    height: ${Yi}px;
    pointer-events: none;
    z-index: ${mM};
    opacity: 0;
    transition: none;
  `,e.innerHTML=`
    <svg width="${Yi}" height="${Yi}" viewBox="0 0 ${Yi} ${Yi}" xmlns="http://www.w3.org/2000/svg">
      <line id="hitmarker-nw" x1="${Lt}" y1="${Lt}" x2="${Lt}" y2="${Lt}" stroke="${Ms}" stroke-width="${Io}" stroke-linecap="round" />
      <line id="hitmarker-ne" x1="${Lt}" y1="${Lt}" x2="${Lt}" y2="${Lt}" stroke="${Ms}" stroke-width="${Io}" stroke-linecap="round" />
      <line id="hitmarker-se" x1="${Lt}" y1="${Lt}" x2="${Lt}" y2="${Lt}" stroke="${Ms}" stroke-width="${Io}" stroke-linecap="round" />
      <line id="hitmarker-sw" x1="${Lt}" y1="${Lt}" x2="${Lt}" y2="${Lt}" stroke="${Ms}" stroke-width="${Io}" stroke-linecap="round" />
    </svg>
  `;const t=e.querySelector("svg"),n=t?.querySelector("#hitmarker-nw")??null,s=t?.querySelector("#hitmarker-ne")??null,r=t?.querySelector("#hitmarker-se")??null,o=t?.querySelector("#hitmarker-sw")??null;!t||!n||!s||!r||!o||(Wi=e,$i=[n,s,r,o],Wt={remaining:0,duration:Em,color:Ms,active:!1},i.appendChild(e),oh(rh))}function gM(){Am(Em,Ms)}function xM(){Am(dM,fM)}function _M(i){if(!Wi||$i.length===0||!Wt||!Wt.active)return;const e=i<0?0:i>Zu?Zu:i;if(Wt.remaining-=e,Wt.remaining<=0){Wt.active=!1,Wt.remaining=0,Wi.style.opacity="0";return}const t=Wt.duration>0?Wt.remaining/Wt.duration:0,n=t*t;Wi.style.opacity=n.toFixed(3);const s=1-t,r=rh+Tm*(s<0?0:s);oh(r)}function Am(i,e){if(!Wi||$i.length===0)return;Wt?(Wt.remaining=i,Wt.duration=i,Wt.color=e,Wt.active=!0):Wt={remaining:i,duration:i,color:e,active:!0};for(const n of $i)n.style.stroke=e;Wi.style.opacity="1";const t=rh+Tm;oh(t)}function oh(i){if($i.length===0)return;const e=[{x:-1,y:-1},{x:1,y:-1},{x:1,y:1},{x:-1,y:1}],t=Wu,n=Wu+i;for(let s=0;s<$i.length&&s<e.length;s++){const r=$i[s],o=e[s],a=Lt+o.x*t,l=Lt+o.y*t,c=Lt+o.x*n,h=Lt+o.y*n;r.setAttribute("x1",a.toFixed(2)),r.setAttribute("y1",l.toFixed(2)),r.setAttribute("x2",c.toFixed(2)),r.setAttribute("y2",h.toFixed(2))}}let bn=null;function vM(i){bn=document.createElement("div"),bn.id="loading-screen",bn.style.cssText=`
    position: fixed; inset: 0; z-index: 1000;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    background: #0a0a0a; color: #ddd; font-family: system-ui, sans-serif;
  `;const e=document.createElement("div");e.style.cssText=`
    width: 280px; height: 6px; background: #333; border-radius: 3px; overflow: hidden;
    margin-bottom: 24px;
  `;const t=document.createElement("div");t.id="loading-fill",t.style.cssText=`
    width: 0%; height: 100%; background: #4a9; border-radius: 3px;
    transition: width 0.3s ease;
  `,e.appendChild(t);const n=document.createElement("div");n.id="loading-text",n.style.cssText="font-size: 18px; font-weight: 500;",n.textContent="Loading game…",bn.appendChild(e),bn.appendChild(n),i.appendChild(bn)}function qn(i,e){const t=document.getElementById("loading-text"),n=document.getElementById("loading-fill");t&&(t.textContent=i),n&&e!==void 0&&(n.style.width=`${Math.min(100,Math.max(0,e))}%`)}function yM(){bn&&bn.parentNode&&(bn.parentNode.removeChild(bn),bn=null)}function SM(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Dt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=$u(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=$u(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function $u(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new bt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function MM(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let S=0,M=a.length;S<M;S++){const T=a[S],I=i.attributes[T];l[T]=new I.constructor(new I.array.constructor(I.count*I.itemSize),I.itemSize,I.normalized);const P=i.morphAttributes[T];P&&(c[T]||(c[T]=[]),P.forEach((R,O)=>{const j=new R.array.constructor(R.count*R.itemSize);c[T][O]=new R.constructor(j,R.itemSize,R.normalized)}))}const f=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=f*_;for(let S=0;S<r;S++){const M=n?n.getX(S):S;let T="";for(let I=0,P=a.length;I<P;I++){const R=a[I],O=i.getAttribute(R),j=O.itemSize;for(let E=0;E<j;E++)T+=`${~~(O[u[E]](M)*_+m)},`}if(T in t)h.push(t[T]);else{for(let I=0,P=a.length;I<P;I++){const R=a[I],O=i.getAttribute(R),j=i.morphAttributes[R],E=O.itemSize,C=l[R],Y=c[R];for(let V=0;V<E;V++){const Z=u[V],q=d[V];if(C[q](o,O[Z](M)),j)for(let H=0,K=j.length;H<K;H++)Y[H][q](o,j[H][Z](M))}}t[T]=o,h.push(o),o++}}const p=i.clone();for(const S in i.attributes){const M=l[S];if(p.setAttribute(S,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),S in c)for(let T=0;T<c[S].length;T++){const I=c[S][T];p.morphAttributes[S][T]=new I.constructor(I.array.slice(0,o*I.itemSize),I.itemSize,I.normalized)}}return p.setIndex(h),p}function ju(i,e){if(e===Rp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ll||e===af){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===ll)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const EM={mesh:"placeholder",collision:"box",size:[2,.2,2]},TM={mesh:"placeholder",collision:"box",size:[4,.2,4]},AM={mesh:"placeholder",collision:"box",size:[2,6,.2],walkableTopOnly:!0},bM={mesh:"placeholder",collision:"box",size:[4,6,.2],walkableTopOnly:!0},wM={mesh:"placeholder",collision:"box",size:[4,1,.2],walkableTopOnly:!0},RM={mesh:"placeholder",collision:"box",size:[4,2,.2],walkableTopOnly:!0},CM={mesh:"placeholder",collision:"ramp",size:[4,1.2,2],walkableTopOnly:!0},PM={mesh:"placeholder",collision:"box",size:[2,2,2],walkableTopOnly:!0},IM={mesh:"placeholder",collision:"box",size:[1,1,.5],walkableTopOnly:!0},LM={mesh:"placeholder",collision:"box",size:[1,1.2,.3],walkableTopOnly:!0},DM={mesh:"placeholder",collision:"box",size:[1,.2,1]},NM={mesh:"placeholder",collision:"box",size:[4,.2,4]},OM={mesh:"placeholder",collision:"none",size:[.5,.5,.5]},UM={mesh:"placeholder",collision:"none",size:[2,2,2]},FM={mesh:"placeholder",collision:"none",size:[.4,.25,.15]},BM={mesh:"placeholder",collision:"none",size:[.4,.25,.15]},zM={mesh:"placeholder",collision:"none",size:[.4,.25,.15]},kM={mesh:"placeholder",collision:"none",size:[.4,.25,.15]},XM={mesh:"placeholder",collision:"none",size:[.4,.25,.15]},HM={floor_2x2:EM,floor_4x4:TM,wall_2x4:AM,wall_4x4:bM,wall_4x1:wM,wall_4x2:RM,ramp_1x4:CM,solid_block:PM,ledge_half_cover:IM,ledge_full_cover:LM,drop_floor:DM,ceiling:NM,spawn_point:OM,kill_volume:UM,wall_lamp_warm_yellow:FM,wall_lamp_orange:BM,wall_lamp_cold_white:zM,wall_lamp_blue:kM,wall_lamp_purple:XM},da=HM,YM=.2;function bm(i,e,t){const n=i/2,s=t/2,r=Math.max(.01,e-YM),o=0,a=r,l=new Float32Array([-n,o,-s,n,o,-s,n,o,s,-n,o,s,-n,o,-s,n,o,-s,n,a,s,-n,a,s]),c=new Uint16Array([0,1,2,0,2,3,4,6,5,4,7,6,0,5,1,0,4,5,1,6,2,1,5,6,3,2,6,3,6,7,0,3,7,0,7,4]),h=new Dt;return h.setAttribute("position",new bt(l,3)),h.setIndex(new bt(c,1)),h.computeVertexNormals(),h}function wm(i){return i.startsWith("floor")||i==="drop_floor"?4491519:i==="ceiling"?3368618:i.startsWith("wall")?14211292:i.startsWith("wall_lamp_warm_yellow")?16769953:i.startsWith("wall_lamp_orange")?16757355:i.startsWith("wall_lamp_cold_white")?14412031:i.startsWith("wall_lamp_blue")?6989823:i.startsWith("wall_lamp_purple")?11631871:i==="ramp_1x4"?8962144:i==="solid_block"?8947848:i==="ledge_half_cover"||i==="ledge_full_cover"?6982250:i==="spawn_point"?65416:i==="kill_volume"?16729156:16777215}function VM(i){const t=da[i]?.size??[1,1,1],n=i.startsWith("wall_lamp_"),s=i==="ramp_1x4"?bm(t[0],t[1],t[2]):new ci(t[0],t[1],t[2]),r=wm(i),o=new _n({color:n?2236962:r,emissive:n?r:0,emissiveIntensity:n?1.3:0}),a=new vt(s,o);if(a.castShadow=!1,a.receiveShadow=!0,n){const l=new Jl(r,12,7,2);l.position.set(0,0,t[2]*.75),a.add(l)}return a}const Or="ramp_1x4",qu=da[Or]?.size?.[2]??2,GM=.05;function ZM(i){const e=i.filter(s=>s.id===Or);if(e.length===0)return[];const t=[],n=new Map;for(const s of e){const r=(s.rotation%360+360)%360;n.has(r)||n.set(r,[]),n.get(r).push(s)}for(const[,s]of n){const o=(s[0].rotation%360+360)%360,a=o===0||o===180,l=o===0||o===90;s.sort((d,f)=>{const[g,,_]=d.position,[m,,p]=f.position;if(a){const M=_-p;return l?M:-M}const S=g-m;return l?S:-S});const c=d=>a?`${d.position[0].toFixed(2)}`:`${d.position[2].toFixed(2)}`,h=d=>a?d.position[2]:d.position[0],u=new Map;for(const d of s){const f=c(d);u.has(f)||u.set(f,[]),u.get(f).push(d)}for(const d of u.values()){d.sort((g,_)=>l?h(g)-h(_):h(_)-h(g));let f=[d[0]];for(let g=1;g<d.length;g++){const _=d[g-1],m=d[g],p=h(_),S=h(m);Math.abs(S-p-(l?qu:-qu))<=GM?f.push(m):(f.length>0&&t.push(f),f=[m])}f.length>0&&t.push(f)}}return t}function WM(i){const e=ZM(i),n=da[Or]?.size??[4,1.2,2],s=wm(Or),r=[];for(const o of e){const a=[],l=new $e,c=new D;for(const g of o){const _=bm(n[0],n[1],n[2]).clone(),[m,p,S]=g.position;l.identity(),l.makeRotationY(Bs.degToRad(g.rotation)),l.setPosition(m,p,S);const M=_.getAttribute("position");for(let T=0;T<M.count;T++)c.fromBufferAttribute(M,T),c.applyMatrix4(l),M.setXYZ(T,c.x,c.y,c.z);M.needsUpdate=!0,_.deleteAttribute("normal"),a.push(_)}const h=SM(a,!1);for(const g of a)g.dispose();if(!h)continue;const u=MM(h,.001);h.dispose(),u.computeVertexNormals();const d=new _n({color:s}),f=new vt(u,d);f.castShadow=!1,f.receiveShadow=!0,r.push(f)}return r}function $M(i){const e=new Ht,t=[];for(const r of i.prefabs){if(r.id===Or){t.push(r);continue}const o=VM(r.id),[a,l,c]=r.position;o.position.set(a,l,c),o.rotation.y=Bs.degToRad(r.rotation),e.add(o)}for(const r of WM(t))e.add(r);const n=oS(i,da),s=i.spawnPoints??[];return{group:e,staticWorld:n,spawnPoints:s}}async function jM(i){const e=await fetch(i);if(!e.ok)throw new Error(`Failed to load map JSON from ${i}: ${e.status} ${e.statusText}`);const t=await e.json();return $M(t)}let hc=0,uc=performance.now(),Ku=0,Ju=0;const qM=100;function KM(i){const e=document.createElement("div");e.id="debug-overlay",e.style.cssText=`
    display: none;
    position: fixed; top: 8px; right: 8px; color: #8f8; font-family: monospace; font-size: 12px;
    background: rgba(0,0,0,0.6); padding: 8px; border-radius: 4px;
  `,e.textContent="FPS: 0 | Vel: 0,0,0 | State: grounded",i.appendChild(e)}function JM(i,e,t,n,s,r,o,a){hc++;const l=performance.now();if(l-uc>=500&&(Ju=Math.round(hc*1e3/(l-uc)),hc=0,uc=l),l-Ku<qM)return;Ku=l;const c=document.getElementById("debug-overlay");if(c){if(c.style.display=s?"block":"none",!s)return;const h=t!==void 0?` | Sprint: ${t}`:"";let u="";n!==void 0&&(u=` | Net: ${n.connected?"ok":"off"} | In room: ${n.playerCount}`);const d=" | [B] Debug: ON",f=r!=null?` | Hit: ${r.toFixed(0)}°`:"",g=o!=null?` | Ping: ${o}ms`:"";let _="";if(a!=null){const m=a.playerY-a.groundY;_=` | Y: ${a.playerY.toFixed(3)} gY: ${a.groundY.toFixed(3)} Δ${m.toFixed(3)}${a.onRamp?" ramp":""}`}c.textContent=`FPS: ${Ju} | Vel: ${i.x.toFixed(1)}, ${i.y.toFixed(1)}, ${i.z.toFixed(1)} | State: ${e}${_}${h}${u}${g}${d}${f}`}}const Qu=.3,QM=16776960,ed=.015,eE=65416,tE=16746496,dc=16;function td(i){const e=new Ht,t=new la(_1,dc,dc),n=new Cn({color:i,transparent:!0,opacity:Qu,depthWrite:!1}),s=new Au(t.clone()),r=new ks({color:i,transparent:!0,opacity:.85,depthWrite:!1}),o=sa-xl,a=(xl+sa)/2,l=new Ht;l.position.set(0,ih,0),l.add(new vt(t,n)),l.add(new Ji(s,r)),e.add(l);const c=new ql(sh,o,4,dc),h=new Cn({color:i,transparent:!0,opacity:Qu,depthWrite:!1}),u=new Ht,d=new vt(c,h);u.add(d);const f=new Au(c.clone()),g=new ks({color:i,transparent:!0,opacity:.85,depthWrite:!1});return u.add(new Ji(f,g)),u.position.set(0,a,0),e.add(u),e}const nE=sa-xl,iE=nE+2*sh;function nd(i,e,t){const n=i.children[0],s=i.children[1];if(t){const{head:r,bodyCenter:o,spineTop:a,pelvis:l,feet:c}=t;i.position.set(0,0,0),n.position.set(r.x,r.y,r.z);const h=a.y+y1,u=h-c.y,d=(o.x+l.x)/2,f=(c.y+h)/2,g=(o.z+l.z)/2;s.position.set(d,f,g);const _=u+2*sh;s.scale.set(1,Math.max(.1,_)/iE,1),s.visible=!0}else{i.position.set(e.x,e.y,e.z),n.position.set(0,ih,0);const r=sa/2;s.position.set(0,r,0),s.scale.set(1,1,1),s.visible=!0}}class sE{scene;localGroup;remoteGroups=[];aimRayGroup;visible=!1;maxRemote=16;constructor(e){this.scene=e,this.localGroup=td(eE),this.localGroup.visible=!1,this.scene.add(this.localGroup),this.aimRayGroup=new Ht;const t=new kr(ed,ed,1,8),n=new Cn({color:QM,transparent:!0,opacity:.9,depthTest:!0});this.aimRayGroup.add(new vt(t,n)),this.aimRayGroup.visible=!1,this.scene.add(this.aimRayGroup);for(let s=0;s<this.maxRemote;s++){const r=td(tE);r.visible=!1,this.scene.add(r),this.remoteGroups.push(r)}}setVisible(e,t=!1){this.visible=e,this.localGroup.visible=e&&!t,this.aimRayGroup.visible=!1,this.remoteGroups.forEach(n=>n.visible=!1)}update(e,t,n){if(this.visible){e&&nd(this.localGroup,e,n),t.forEach((s,r)=>{const o=this.remoteGroups[r];o&&(o.visible=!0,nd(o,{x:s.x,y:s.y,z:s.z},s.hitboxPositions))});for(let s=t.length;s<this.remoteGroups.length;s++)this.remoteGroups[s].visible=!1}}dispose(){this.scene.remove(this.aimRayGroup),this.aimRayGroup.traverse(e=>{e instanceof vt&&(e.geometry?.dispose(),e.material?.dispose())}),this.scene.remove(this.localGroup),this.localGroup.traverse(e=>{(e instanceof vt||e instanceof Ji)&&(e.geometry?.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material?.dispose())}),this.remoteGroups.forEach(e=>{this.scene.remove(e),e.traverse(t=>{(t instanceof vt||t instanceof Ji)&&(t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material?.dispose())})})}}var fc={},id={},sd;function rE(){return sd||(sd=1,ArrayBuffer.isView||(ArrayBuffer.isView=i=>i!==null&&typeof i=="object"&&i.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window)),id}var Kn={},mc={},rd;function ah(){return rd||(rd=1,(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.ServerError=i.CloseCode=void 0,(function(t){t[t.CONSENTED=4e3]="CONSENTED",t[t.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(i.CloseCode||(i.CloseCode={}));class e extends Error{constructor(n,s){super(s),this.name="ServerError",this.code=n}}i.ServerError=e})(mc)),mc}var En={},Oi={},od;function oE(){if(od)return Oi;od=1,Object.defineProperty(Oi,"__esModule",{value:!0}),Oi.decode=Oi.encode=void 0;function i(c,h){if(this._offset=h,c instanceof ArrayBuffer)this._buffer=c,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(c))this._buffer=c.buffer,this._view=new DataView(this._buffer,c.byteOffset,c.byteLength);else throw new Error("Invalid argument")}function e(c,h,u){for(var d="",f=0,g=h,_=h+u;g<_;g++){var m=c.getUint8(g);if((m&128)===0){d+=String.fromCharCode(m);continue}if((m&224)===192){d+=String.fromCharCode((m&31)<<6|c.getUint8(++g)&63);continue}if((m&240)===224){d+=String.fromCharCode((m&15)<<12|(c.getUint8(++g)&63)<<6|(c.getUint8(++g)&63)<<0);continue}if((m&248)===240){f=(m&7)<<18|(c.getUint8(++g)&63)<<12|(c.getUint8(++g)&63)<<6|(c.getUint8(++g)&63)<<0,f>=65536?(f-=65536,d+=String.fromCharCode((f>>>10)+55296,(f&1023)+56320)):d+=String.fromCharCode(f);continue}throw new Error("Invalid byte "+m.toString(16))}return d}i.prototype._array=function(c){for(var h=new Array(c),u=0;u<c;u++)h[u]=this._parse();return h},i.prototype._map=function(c){for(var h="",u={},d=0;d<c;d++)h=this._parse(),u[h]=this._parse();return u},i.prototype._str=function(c){var h=e(this._view,this._offset,c);return this._offset+=c,h},i.prototype._bin=function(c){var h=this._buffer.slice(this._offset,this._offset+c);return this._offset+=c,h},i.prototype._parse=function(){var c=this._view.getUint8(this._offset++),h,u=0,d=0,f=0,g=0;if(c<192)return c<128?c:c<144?this._map(c&15):c<160?this._array(c&15):this._str(c&31);if(c>223)return(255-c+1)*-1;switch(c){case 192:return null;case 194:return!1;case 195:return!0;case 196:return u=this._view.getUint8(this._offset),this._offset+=1,this._bin(u);case 197:return u=this._view.getUint16(this._offset),this._offset+=2,this._bin(u);case 198:return u=this._view.getUint32(this._offset),this._offset+=4,this._bin(u);case 199:if(u=this._view.getUint8(this._offset),d=this._view.getInt8(this._offset+1),this._offset+=2,d===-1){var _=this._view.getUint32(this._offset);return f=this._view.getInt32(this._offset+4),g=this._view.getUint32(this._offset+8),this._offset+=12,new Date((f*4294967296+g)*1e3+_/1e6)}return[d,this._bin(u)];case 200:return u=this._view.getUint16(this._offset),d=this._view.getInt8(this._offset+2),this._offset+=3,[d,this._bin(u)];case 201:return u=this._view.getUint32(this._offset),d=this._view.getInt8(this._offset+4),this._offset+=5,[d,this._bin(u)];case 202:return h=this._view.getFloat32(this._offset),this._offset+=4,h;case 203:return h=this._view.getFloat64(this._offset),this._offset+=8,h;case 204:return h=this._view.getUint8(this._offset),this._offset+=1,h;case 205:return h=this._view.getUint16(this._offset),this._offset+=2,h;case 206:return h=this._view.getUint32(this._offset),this._offset+=4,h;case 207:return f=this._view.getUint32(this._offset)*Math.pow(2,32),g=this._view.getUint32(this._offset+4),this._offset+=8,f+g;case 208:return h=this._view.getInt8(this._offset),this._offset+=1,h;case 209:return h=this._view.getInt16(this._offset),this._offset+=2,h;case 210:return h=this._view.getInt32(this._offset),this._offset+=4,h;case 211:return f=this._view.getInt32(this._offset)*Math.pow(2,32),g=this._view.getUint32(this._offset+4),this._offset+=8,f+g;case 212:if(d=this._view.getInt8(this._offset),this._offset+=1,d===0){this._offset+=1;return}return[d,this._bin(1)];case 213:return d=this._view.getInt8(this._offset),this._offset+=1,[d,this._bin(2)];case 214:return d=this._view.getInt8(this._offset),this._offset+=1,d===-1?(h=this._view.getUint32(this._offset),this._offset+=4,new Date(h*1e3)):[d,this._bin(4)];case 215:if(d=this._view.getInt8(this._offset),this._offset+=1,d===0)return f=this._view.getInt32(this._offset)*Math.pow(2,32),g=this._view.getUint32(this._offset+4),this._offset+=8,new Date(f+g);if(d===-1){f=this._view.getUint32(this._offset),g=this._view.getUint32(this._offset+4),this._offset+=8;var m=(f&3)*4294967296+g;return new Date(m*1e3+(f>>>2)/1e6)}return[d,this._bin(8)];case 216:return d=this._view.getInt8(this._offset),this._offset+=1,[d,this._bin(16)];case 217:return u=this._view.getUint8(this._offset),this._offset+=1,this._str(u);case 218:return u=this._view.getUint16(this._offset),this._offset+=2,this._str(u);case 219:return u=this._view.getUint32(this._offset),this._offset+=4,this._str(u);case 220:return u=this._view.getUint16(this._offset),this._offset+=2,this._array(u);case 221:return u=this._view.getUint32(this._offset),this._offset+=4,this._array(u);case 222:return u=this._view.getUint16(this._offset),this._offset+=2,this._map(u);case 223:return u=this._view.getUint32(this._offset),this._offset+=4,this._map(u)}throw new Error("Could not parse")};function t(c,h=0){var u=new i(c,h),d=u._parse();if(u._offset!==c.byteLength)throw new Error(c.byteLength-u._offset+" trailing bytes");return d}Oi.decode=t;var n=4294967296-1,s=17179869184-1;function r(c,h,u){for(var d=0,f=0,g=u.length;f<g;f++)d=u.charCodeAt(f),d<128?c.setUint8(h++,d):d<2048?(c.setUint8(h++,192|d>>6),c.setUint8(h++,128|d&63)):d<55296||d>=57344?(c.setUint8(h++,224|d>>12),c.setUint8(h++,128|d>>6&63),c.setUint8(h++,128|d&63)):(f++,d=65536+((d&1023)<<10|u.charCodeAt(f)&1023),c.setUint8(h++,240|d>>18),c.setUint8(h++,128|d>>12&63),c.setUint8(h++,128|d>>6&63),c.setUint8(h++,128|d&63))}function o(c){for(var h=0,u=0,d=0,f=c.length;d<f;d++)h=c.charCodeAt(d),h<128?u+=1:h<2048?u+=2:h<55296||h>=57344?u+=3:(d++,u+=4);return u}function a(c,h,u){var d=typeof u,f=0,g=0,_=0,m=0,p=0,S=0;if(d==="string"){if(p=o(u),p<32)c.push(p|160),S=1;else if(p<256)c.push(217,p),S=2;else if(p<65536)c.push(218,p>>8,p),S=3;else if(p<4294967296)c.push(219,p>>24,p>>16,p>>8,p),S=5;else throw new Error("String too long");return h.push({_str:u,_length:p,_offset:c.length}),S+p}if(d==="number")return Math.floor(u)!==u||!isFinite(u)?(c.push(203),h.push({_float:u,_length:8,_offset:c.length}),9):u>=0?u<128?(c.push(u),1):u<256?(c.push(204,u),2):u<65536?(c.push(205,u>>8,u),3):u<4294967296?(c.push(206,u>>24,u>>16,u>>8,u),5):(_=u/Math.pow(2,32)>>0,m=u>>>0,c.push(207,_>>24,_>>16,_>>8,_,m>>24,m>>16,m>>8,m),9):u>=-32?(c.push(u),1):u>=-128?(c.push(208,u),2):u>=-32768?(c.push(209,u>>8,u),3):u>=-2147483648?(c.push(210,u>>24,u>>16,u>>8,u),5):(_=Math.floor(u/Math.pow(2,32)),m=u>>>0,c.push(211,_>>24,_>>16,_>>8,_,m>>24,m>>16,m>>8,m),9);if(d==="object"){if(u===null)return c.push(192),1;if(Array.isArray(u)){if(p=u.length,p<16)c.push(p|144),S=1;else if(p<65536)c.push(220,p>>8,p),S=3;else if(p<4294967296)c.push(221,p>>24,p>>16,p>>8,p),S=5;else throw new Error("Array too large");for(f=0;f<p;f++)S+=a(c,h,u[f]);return S}if(u instanceof Date){var M=u.getTime(),T=Math.floor(M/1e3),I=(M-T*1e3)*1e6;return T>=0&&I>=0&&T<=s?I===0&&T<=n?(c.push(214,255,T>>24,T>>16,T>>8,T),6):(_=T/4294967296,m=T&4294967295,c.push(215,255,I>>22,I>>14,I>>6,_,m>>24,m>>16,m>>8,m),10):(_=Math.floor(T/4294967296),m=T>>>0,c.push(199,12,255,I>>24,I>>16,I>>8,I,_>>24,_>>16,_>>8,_,m>>24,m>>16,m>>8,m),15)}if(u instanceof ArrayBuffer){if(p=u.byteLength,p<256)c.push(196,p),S=2;else if(p<65536)c.push(197,p>>8,p),S=3;else if(p<4294967296)c.push(198,p>>24,p>>16,p>>8,p),S=5;else throw new Error("Buffer too large");return h.push({_bin:u,_length:p,_offset:c.length}),S+p}if(typeof u.toJSON=="function")return a(c,h,u.toJSON());var P=[],R="",O=Object.keys(u);for(f=0,g=O.length;f<g;f++)R=O[f],u[R]!==void 0&&typeof u[R]!="function"&&P.push(R);if(p=P.length,p<16)c.push(p|128),S=1;else if(p<65536)c.push(222,p>>8,p),S=3;else if(p<4294967296)c.push(223,p>>24,p>>16,p>>8,p),S=5;else throw new Error("Object too large");for(f=0;f<p;f++)R=P[f],S+=a(c,h,R),S+=a(c,h,u[R]);return S}if(d==="boolean")return c.push(u?195:194),1;if(d==="undefined")return c.push(192),1;if(typeof u.toJSON=="function")return a(c,h,u.toJSON());throw new Error("Could not encode")}function l(c){var h=[],u=[],d=a(h,u,c),f=new ArrayBuffer(d),g=new DataView(f),_=0,m=0,p=-1;u.length>0&&(p=u[0]._offset);for(var S,M=0,T=0,I=0,P=h.length;I<P;I++)if(g.setUint8(m+I,h[I]),I+1===p){if(S=u[_],M=S._length,T=m+p,S._bin)for(var R=new Uint8Array(S._bin),O=0;O<M;O++)g.setUint8(T+O,R[O]);else S._str?r(g,T,S._str):S._float!==void 0&&g.setFloat64(T,S._float);_++,m+=M,u[_]&&(p=u[_]._offset)}return f}return Oi.encode=l,Oi}var ur={},Ui={},pc,ad;function aE(){return ad||(ad=1,pc=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),pc}var cd;function cE(){if(cd)return Ui;cd=1;var i=Ui&&Ui.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ui,"__esModule",{value:!0}),Ui.WebSocketTransport=void 0;const e=i(aE()),t=globalThis.WebSocket||e.default;let n=class{constructor(r){this.events=r}send(r){r instanceof ArrayBuffer?this.ws.send(r):Array.isArray(r)&&this.ws.send(new Uint8Array(r).buffer)}connect(r,o){try{this.ws=new t(r,{headers:o,protocols:this.protocols})}catch{this.ws=new t(r,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(r,o){this.ws.close(r,o)}get isOpen(){return this.ws.readyState===t.OPEN}};return Ui.WebSocketTransport=n,Ui}var ld;function lE(){if(ld)return ur;ld=1,Object.defineProperty(ur,"__esModule",{value:!0}),ur.Connection=void 0;const i=cE();let e=class{constructor(){this.events={},this.transport=new i.WebSocketTransport(this.events)}send(n){this.transport.send(n)}connect(n,s){this.transport.connect(n,s)}close(n,s){this.transport.close(n,s)}get isOpen(){return this.transport.isOpen}};return ur.Connection=e,ur}var gc={},hd;function Rm(){return hd||(hd=1,(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.utf8Length=i.utf8Read=i.ErrorCode=i.Protocol=void 0,(function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(i.Protocol||(i.Protocol={})),(function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(i.ErrorCode||(i.ErrorCode={}));function e(n,s){const r=n[s++];for(var o="",a=0,l=s,c=s+r;l<c;l++){var h=n[l];if((h&128)===0){o+=String.fromCharCode(h);continue}if((h&224)===192){o+=String.fromCharCode((h&31)<<6|n[++l]&63);continue}if((h&240)===224){o+=String.fromCharCode((h&15)<<12|(n[++l]&63)<<6|(n[++l]&63)<<0);continue}if((h&248)===240){a=(h&7)<<18|(n[++l]&63)<<12|(n[++l]&63)<<6|(n[++l]&63)<<0,a>=65536?(a-=65536,o+=String.fromCharCode((a>>>10)+55296,(a&1023)+56320)):o+=String.fromCharCode(a);continue}throw new Error("Invalid byte "+h.toString(16))}return o}i.utf8Read=e;function t(n=""){let s=0,r=0;for(let o=0,a=n.length;o<a;o++)s=n.charCodeAt(o),s<128?r+=1:s<2048?r+=2:s<55296||s>=57344?r+=3:(o++,r+=4);return r+1}i.utf8Length=t})(gc)),gc}var Fi={},ud;function Cm(){if(ud)return Fi;ud=1,Object.defineProperty(Fi,"__esModule",{value:!0}),Fi.getSerializer=Fi.registerSerializer=void 0;const i={};function e(n,s){i[n]=s}Fi.registerSerializer=e;function t(n){const s=i[n];if(!s)throw new Error("missing serializer: "+n);return s}return Fi.getSerializer=t,Fi}var dr={},dd;function Pm(){if(dd)return dr;dd=1,Object.defineProperty(dr,"__esModule",{value:!0}),dr.createNanoEvents=void 0;const i=()=>({emit(e,...t){let n=this.events[e]||[];for(let s=0,r=n.length;s<r;s++)n[s](...t)},events:{},on(e,t){var n;return!((n=this.events[e])===null||n===void 0)&&n.push(t)||(this.events[e]=[t]),()=>{var s;this.events[e]=(s=this.events[e])===null||s===void 0?void 0:s.filter(r=>t!==r)}}});return dr.createNanoEvents=i,dr}var Bi={},fd;function hE(){if(fd)return Bi;fd=1,Object.defineProperty(Bi,"__esModule",{value:!0}),Bi.createSignal=Bi.EventEmitter=void 0;class i{constructor(){this.handlers=[]}register(n,s=!1){return this.handlers.push(n),this}invoke(...n){this.handlers.forEach(s=>s.apply(this,n))}invokeAsync(...n){return Promise.all(this.handlers.map(s=>s.apply(this,n)))}remove(n){const s=this.handlers.indexOf(n);this.handlers[s]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}Bi.EventEmitter=i;function e(){const t=new i;function n(s){return t.register(s,this===null)}return n.once=s=>{const r=function(...o){s.apply(this,o),t.remove(r)};t.register(r)},n.remove=s=>t.remove(s),n.invoke=(...s)=>t.invoke(...s),n.invokeAsync=(...s)=>t.invokeAsync(...s),n.clear=()=>t.clear(),n}return Bi.createSignal=e,Bi}var md;function Lm(){if(md)return En;md=1;var i=En&&En.__createBinding||(Object.create?(function(d,f,g,_){_===void 0&&(_=g);var m=Object.getOwnPropertyDescriptor(f,g);(!m||("get"in m?!f.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return f[g]}}),Object.defineProperty(d,_,m)}):(function(d,f,g,_){_===void 0&&(_=g),d[_]=f[g]})),e=En&&En.__setModuleDefault||(Object.create?(function(d,f){Object.defineProperty(d,"default",{enumerable:!0,value:f})}):function(d,f){d.default=f}),t=En&&En.__importStar||function(d){if(d&&d.__esModule)return d;var f={};if(d!=null)for(var g in d)g!=="default"&&Object.prototype.hasOwnProperty.call(d,g)&&i(f,d,g);return e(f,d),f};Object.defineProperty(En,"__esModule",{value:!0}),En.Room=void 0;const n=t(oE()),s=lE(),r=Rm(),o=Cm(),a=Pm(),l=hE(),c=nh(),h=ah();let u=class Im{constructor(f,g){this.onStateChange=(0,l.createSignal)(),this.onError=(0,l.createSignal)(),this.onLeave=(0,l.createSignal)(),this.onJoin=(0,l.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,a.createNanoEvents)(),this.roomId=null,this.name=f,g&&(this.serializer=new((0,o.getSerializer)("schema")),this.rootSchema=g,this.serializer.state=new g),this.onError((_,m)=>{var p;return(p=console.warn)===null||p===void 0?void 0:p.call(console,`colyseus.js - onError => (${_}) ${m}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(f,g,_=this,m){const p=new s.Connection;_.connection=p,p.events.onmessage=Im.prototype.onMessageCallback.bind(_),p.events.onclose=function(S){var M;if(!_.hasJoined){(M=console.warn)===null||M===void 0||M.call(console,`Room connection was closed unexpectedly (${S.code}): ${S.reason}`),_.onError.invoke(S.code,S.reason);return}S.code===h.CloseCode.DEVMODE_RESTART&&g?g():(_.onLeave.invoke(S.code,S.reason),_.destroy())},p.events.onerror=function(S){var M;(M=console.warn)===null||M===void 0||M.call(console,`Room, onError (${S.code}): ${S.reason}`),_.onError.invoke(S.code,S.reason)},p.connect(f,m)}leave(f=!0){return new Promise(g=>{this.onLeave(_=>g(_)),this.connection?f?this.connection.send([r.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(h.CloseCode.CONSENTED)})}onMessage(f,g){return this.onMessageHandlers.on(this.getMessageHandlerKey(f),g)}send(f,g){const _=[r.Protocol.ROOM_DATA];typeof f=="string"?c.encode.string(_,f):c.encode.number(_,f);let m;if(g!==void 0){const p=n.encode(g);m=new Uint8Array(_.length+p.byteLength),m.set(new Uint8Array(_),0),m.set(new Uint8Array(p),_.length)}else m=new Uint8Array(_);this.connection.send(m.buffer)}sendBytes(f,g){const _=[r.Protocol.ROOM_DATA_BYTES];typeof f=="string"?c.encode.string(_,f):c.encode.number(_,f);let m;m=new Uint8Array(_.length+(g.byteLength||g.length)),m.set(new Uint8Array(_),0),m.set(new Uint8Array(g),_.length),this.connection.send(m.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(f){const g=Array.from(new Uint8Array(f.data)),_=g[0];if(_===r.Protocol.JOIN_ROOM){let m=1;const p=(0,r.utf8Read)(g,m);if(m+=(0,r.utf8Length)(p),this.serializerId=(0,r.utf8Read)(g,m),m+=(0,r.utf8Length)(this.serializerId),!this.serializer){const S=(0,o.getSerializer)(this.serializerId);this.serializer=new S}g.length>m&&this.serializer.handshake&&this.serializer.handshake(g,{offset:m}),this.reconnectionToken=`${this.roomId}:${p}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([r.Protocol.JOIN_ROOM])}else if(_===r.Protocol.ERROR){const m={offset:1},p=c.decode.number(g,m),S=c.decode.string(g,m);this.onError.invoke(p,S)}else if(_===r.Protocol.LEAVE_ROOM)this.leave();else if(_===r.Protocol.ROOM_DATA_SCHEMA){const m={offset:1},S=this.serializer.getState().constructor._context.get(c.decode.number(g,m)),M=new S;M.decode(g,m),this.dispatchMessage(S,M)}else if(_===r.Protocol.ROOM_STATE)g.shift(),this.setState(g);else if(_===r.Protocol.ROOM_STATE_PATCH)g.shift(),this.patch(g);else if(_===r.Protocol.ROOM_DATA){const m={offset:1},p=c.decode.stringCheck(g,m)?c.decode.string(g,m):c.decode.number(g,m),S=g.length>m.offset?n.decode(f.data,m.offset):void 0;this.dispatchMessage(p,S)}else if(_===r.Protocol.ROOM_DATA_BYTES){const m={offset:1},p=c.decode.stringCheck(g,m)?c.decode.string(g,m):c.decode.number(g,m);this.dispatchMessage(p,new Uint8Array(g.slice(m.offset)))}}setState(f){this.serializer.setState(f),this.onStateChange.invoke(this.serializer.getState())}patch(f){this.serializer.patch(f),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(f,g){var _;const m=this.getMessageHandlerKey(f);this.onMessageHandlers.events[m]?this.onMessageHandlers.emit(m,g):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",f,g):(_=console.warn)===null||_===void 0||_.call(console,`colyseus.js: onMessage() not registered for type '${f}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(f){switch(typeof f){case"function":return`$${f._typeid}`;case"string":return f;case"number":return`i${f}`;default:throw new Error("invalid message type.")}}};return En.Room=u,En}var Tn={};function pd(i,e){e.headers=i.headers||{},e.statusMessage=i.statusText,e.statusCode=i.status,e.data=i.response}function Ln(i,e,t){return new Promise(function(n,s){t=t||{};var r=new XMLHttpRequest,o,a,l,c=t.body,h=t.headers||{};t.timeout&&(r.timeout=t.timeout),r.ontimeout=r.onerror=function(u){u.timeout=u.type=="timeout",s(u)},r.open(i,e.href||e),r.onload=function(){for(l=r.getAllResponseHeaders().trim().split(/[\r\n]+/),pd(r,r);a=l.shift();)a=a.split(": "),r.headers[a.shift().toLowerCase()]=a.join(": ");if(a=r.headers["content-type"],a&&~a.indexOf("application/json"))try{r.data=JSON.parse(r.data,t.reviver)}catch(u){return pd(r,u),s(u)}(r.status>=400?s:n)(r)},typeof FormData<"u"&&c instanceof FormData||c&&typeof c=="object"&&(h["content-type"]="application/json",c=JSON.stringify(c)),r.withCredentials=!!t.withCredentials;for(o in h)r.setRequestHeader(o,h[o]);r.send(c)})}var uE=Ln.bind(Ln,"GET"),dE=Ln.bind(Ln,"POST"),fE=Ln.bind(Ln,"PATCH"),mE=Ln.bind(Ln,"DELETE"),pE=Ln.bind(Ln,"PUT");const gE=Object.freeze(Object.defineProperty({__proto__:null,del:mE,get:uE,patch:fE,post:dE,put:pE,send:Ln},Symbol.toStringTag,{value:"Module"})),xE=m1(gE);var gd;function _E(){if(gd)return Tn;gd=1;var i=Tn&&Tn.__createBinding||(Object.create?(function(o,a,l,c){c===void 0&&(c=l);var h=Object.getOwnPropertyDescriptor(a,l);(!h||("get"in h?!a.__esModule:h.writable||h.configurable))&&(h={enumerable:!0,get:function(){return a[l]}}),Object.defineProperty(o,c,h)}):(function(o,a,l,c){c===void 0&&(c=l),o[c]=a[l]})),e=Tn&&Tn.__setModuleDefault||(Object.create?(function(o,a){Object.defineProperty(o,"default",{enumerable:!0,value:a})}):function(o,a){o.default=a}),t=Tn&&Tn.__importStar||function(o){if(o&&o.__esModule)return o;var a={};if(o!=null)for(var l in o)l!=="default"&&Object.prototype.hasOwnProperty.call(o,l)&&i(a,o,l);return e(a,o),a};Object.defineProperty(Tn,"__esModule",{value:!0}),Tn.HTTP=void 0;const n=ah(),s=t(xE);let r=class{constructor(a,l={}){this.client=a,this.headers=l}get(a,l={}){return this.request("get",a,l)}post(a,l={}){return this.request("post",a,l)}del(a,l={}){return this.request("del",a,l)}put(a,l={}){return this.request("put",a,l)}request(a,l,c={}){return s[a](this.client.getHttpEndpoint(l),this.getOptions(c)).catch(h=>{var u;const d=h.statusCode,f=((u=h.data)===null||u===void 0?void 0:u.error)||h.statusMessage||h.message;throw!d&&!f?h:new n.ServerError(d,f)})}getOptions(a){return a.headers=Object.assign({},this.headers,a.headers),this.authToken&&(a.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(a.withCredentials=!0),a}};return Tn.HTTP=r,Tn}var An={},Jn={},xd;function vE(){if(xd)return Jn;xd=1,Object.defineProperty(Jn,"__esModule",{value:!0}),Jn.getItem=Jn.removeItem=Jn.setItem=void 0;let i;function e(){if(!i)try{i=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return i||(i={cache:{},setItem:function(r,o){this.cache[r]=o},getItem:function(r){this.cache[r]},removeItem:function(r){delete this.cache[r]}}),i}function t(r,o){e().setItem(r,o)}Jn.setItem=t;function n(r){e().removeItem(r)}Jn.removeItem=n;function s(r,o){const a=e().getItem(r);typeof Promise>"u"||!(a instanceof Promise)?o(a):a.then(l=>o(l))}return Jn.getItem=s,Jn}var _d;function Dm(){if(_d)return An;_d=1;var i=An&&An.__awaiter||function(h,u,d,f){function g(_){return _ instanceof d?_:new d(function(m){m(_)})}return new(d||(d=Promise))(function(_,m){function p(T){try{M(f.next(T))}catch(I){m(I)}}function S(T){try{M(f.throw(T))}catch(I){m(I)}}function M(T){T.done?_(T.value):g(T.value).then(p,S)}M((f=f.apply(h,u||[])).next())})},e=An&&An.__classPrivateFieldGet||function(h,u,d,f){if(d==="a"&&!f)throw new TypeError("Private accessor was defined without a getter");if(typeof u=="function"?h!==u||!f:!u.has(h))throw new TypeError("Cannot read private member from an object whose class did not declare it");return d==="m"?f:d==="a"?f.call(h):f?f.value:u.get(h)},t=An&&An.__classPrivateFieldSet||function(h,u,d,f,g){if(f==="m")throw new TypeError("Private method is not writable");if(f==="a"&&!g)throw new TypeError("Private accessor was defined without a setter");if(typeof u=="function"?h!==u||!g:!u.has(h))throw new TypeError("Cannot write private member to an object whose class did not declare it");return f==="a"?g.call(h,d):g?g.value=d:u.set(h,d),d},n,s,r,o;Object.defineProperty(An,"__esModule",{value:!0}),An.Auth=void 0;const a=vE(),l=Pm();let c=class{constructor(u){this.http=u,this.settings={path:"/auth",key:"colyseus-auth-token"},n.set(this,!1),s.set(this,void 0),r.set(this,void 0),o.set(this,(0,l.createNanoEvents)()),(0,a.getItem)(this.settings.key,d=>this.token=d)}set token(u){this.http.authToken=u}get token(){return this.http.authToken}onChange(u){const d=e(this,o,"f").on("change",u);return e(this,n,"f")||t(this,s,new Promise((f,g)=>{this.getUserData().then(_=>{this.emitChange(Object.assign(Object.assign({},_),{token:this.token}))}).catch(_=>{this.emitChange({user:null,token:void 0})}).finally(()=>{f()})}),"f"),t(this,n,!0,"f"),d}getUserData(){return i(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(u,d,f){return i(this,void 0,void 0,function*(){const g=(yield this.http.post(`${this.settings.path}/register`,{body:{email:u,password:d,options:f}})).data;return this.emitChange(g),g})}signInWithEmailAndPassword(u,d){return i(this,void 0,void 0,function*(){const f=(yield this.http.post(`${this.settings.path}/login`,{body:{email:u,password:d}})).data;return this.emitChange(f),f})}signInAnonymously(u){return i(this,void 0,void 0,function*(){const d=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:u}})).data;return this.emitChange(d),d})}sendPasswordResetEmail(u){return i(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:u}})).data})}signInWithProvider(u,d={}){return i(this,void 0,void 0,function*(){return new Promise((f,g)=>{const _=d.width||480,m=d.height||768,p=this.token?`?token=${this.token}`:"",S=`Login with ${u[0].toUpperCase()+u.substring(1)}`,M=this.http.client.getHttpEndpoint(`${d.prefix||`${this.settings.path}/provider`}/${u}${p}`),T=screen.width/2-_/2,I=screen.height/2-m/2;t(this,r,window.open(M,S,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+_+", height="+m+", top="+I+", left="+T),"f");const P=O=>{O.data.user===void 0&&O.data.token===void 0||(clearInterval(R),e(this,r,"f").close(),t(this,r,void 0,"f"),window.removeEventListener("message",P),O.data.error!==void 0?g(O.data.error):(f(O.data),this.emitChange(O.data)))},R=setInterval(()=>{(!e(this,r,"f")||e(this,r,"f").closed)&&(t(this,r,void 0,"f"),g("cancelled"),window.removeEventListener("message",P))},200);window.addEventListener("message",P)})})}signOut(){return i(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(u){u.token!==void 0&&(this.token=u.token,u.token===null?(0,a.removeItem)(this.settings.key):(0,a.setItem)(this.settings.key,u.token)),e(this,o,"f").emit("change",u)}};return An.Auth=c,n=new WeakMap,s=new WeakMap,r=new WeakMap,o=new WeakMap,An}var fr={},vd;function yE(){if(vd)return fr;vd=1,Object.defineProperty(fr,"__esModule",{value:!0}),fr.discordURLBuilder=void 0;function i(e){var t;const n=((t=window?.location)===null||t===void 0?void 0:t.hostname)||"localhost",s=e.hostname.split("."),r=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&s.length>2?`/${s[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${n}${r}${e.pathname}${e.search}`:`${e.protocol}//${n}/.proxy/colyseus${r}${e.pathname}${e.search}`}return fr.discordURLBuilder=i,fr}var yd;function SE(){if(yd)return Kn;yd=1;var i=Kn&&Kn.__awaiter||function(h,u,d,f){function g(_){return _ instanceof d?_:new d(function(m){m(_)})}return new(d||(d=Promise))(function(_,m){function p(T){try{M(f.next(T))}catch(I){m(I)}}function S(T){try{M(f.throw(T))}catch(I){m(I)}}function M(T){T.done?_(T.value):g(T.value).then(p,S)}M((f=f.apply(h,u||[])).next())})},e;Object.defineProperty(Kn,"__esModule",{value:!0}),Kn.Client=Kn.MatchMakeError=void 0;const t=ah(),n=Lm(),s=_E(),r=Dm(),o=yE();class a extends Error{constructor(u,d){super(u),this.code=d,Object.setPrototypeOf(this,a.prototype)}}Kn.MatchMakeError=a;const l=typeof window<"u"&&typeof((e=window?.location)===null||e===void 0?void 0:e.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let c=class{constructor(u=l,d){var f,g;if(typeof u=="string"){const _=u.startsWith("/")?new URL(u,l):new URL(u),m=_.protocol==="https:"||_.protocol==="wss:",p=Number(_.port||(m?443:80));this.settings={hostname:_.hostname,pathname:_.pathname,port:p,secure:m}}else u.port===void 0&&(u.port=u.secure?443:80),u.pathname===void 0&&(u.pathname=""),this.settings=u;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new s.HTTP(this,d?.headers||{}),this.auth=new r.Auth(this.http),this.urlBuilder=d?.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((g=(f=window?.location)===null||f===void 0?void 0:f.hostname)===null||g===void 0)&&g.includes("discordsays.com"))&&(this.urlBuilder=o.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(u,d={},f){return i(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",u,d,f)})}create(u,d={},f){return i(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",u,d,f)})}join(u,d={},f){return i(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",u,d,f)})}joinById(u,d={},f){return i(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",u,d,f)})}reconnect(u,d){return i(this,void 0,void 0,function*(){if(typeof u=="string"&&typeof d=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[f,g]=u.split(":");if(!f||!g)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",f,{reconnectionToken:g},d)})}getAvailableRooms(u=""){return i(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${u}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(u,d,f){return i(this,void 0,void 0,function*(){const g=this.createRoom(u.room.name,d);g.roomId=u.room.roomId,g.sessionId=u.sessionId;const _={sessionId:g.sessionId};u.reconnectionToken&&(_.reconnectionToken=u.reconnectionToken);const m=f||g;return g.connect(this.buildEndpoint(u.room,_),u.devMode&&(()=>i(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${g.roomId}'...`);let p=0,S=8;const M=()=>i(this,void 0,void 0,function*(){p++;try{yield this.consumeSeatReservation(u,d,m),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${g.roomId}'`)}catch{p<S?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${p} out of ${S})`),setTimeout(M,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(M,2e3)})),m,this.http.headers),new Promise((p,S)=>{const M=(T,I)=>S(new t.ServerError(T,I));m.onError.once(M),m.onJoin.once(()=>{m.onError.remove(M),p(m)})})})}createMatchMakeRequest(u,d,f={},g,_){return i(this,void 0,void 0,function*(){const m=(yield this.http.post(`matchmake/${u}/${d}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(f)})).data;if(m.error)throw new a(m.error,m.code);return u==="reconnect"&&(m.reconnectionToken=f.reconnectionToken),yield this.consumeSeatReservation(m,g,_)})}createRoom(u,d){return new n.Room(u,d)}buildEndpoint(u,d={}){const f=[];for(const m in d)d.hasOwnProperty(m)&&f.push(`${m}=${d[m]}`);let g=this.settings.secure?"wss://":"ws://";u.publicAddress?g+=`${u.publicAddress}`:g+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const _=`${g}/${u.processId}/${u.roomId}?${f.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(_)):_}getHttpEndpoint(u=""){const d=u.startsWith("/")?u:`/${u}`,f=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${d}`;return this.urlBuilder?this.urlBuilder(new URL(f)):f}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return Kn.Client=c,Kn}var mr={},Sd;function ME(){if(Sd)return mr;Sd=1,Object.defineProperty(mr,"__esModule",{value:!0}),mr.SchemaSerializer=void 0;const i=nh();let e=class{setState(n){return this.state.decode(n)}getState(){return this.state}patch(n){return this.state.decode(n)}teardown(){var n,s;(s=(n=this.state)===null||n===void 0?void 0:n.$changes)===null||s===void 0||s.root.clearRefs()}handshake(n,s){this.state?new i.Reflection().decode(n,s):this.state=i.Reflection.decode(n,s)}};return mr.SchemaSerializer=e,mr}var pr={},Md;function EE(){if(Md)return pr;Md=1,Object.defineProperty(pr,"__esModule",{value:!0}),pr.NoneSerializer=void 0;let i=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return pr.NoneSerializer=i,pr}var Ed;function TE(){return Ed||(Ed=1,(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.SchemaSerializer=i.registerSerializer=i.Auth=i.Room=i.ErrorCode=i.Protocol=i.MatchMakeError=i.Client=void 0,rE();var e=SE();Object.defineProperty(i,"Client",{enumerable:!0,get:function(){return e.Client}}),Object.defineProperty(i,"MatchMakeError",{enumerable:!0,get:function(){return e.MatchMakeError}});var t=Rm();Object.defineProperty(i,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),Object.defineProperty(i,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}});var n=Lm();Object.defineProperty(i,"Room",{enumerable:!0,get:function(){return n.Room}});var s=Dm();Object.defineProperty(i,"Auth",{enumerable:!0,get:function(){return s.Auth}});const r=ME();Object.defineProperty(i,"SchemaSerializer",{enumerable:!0,get:function(){return r.SchemaSerializer}});const o=EE(),a=Cm();Object.defineProperty(i,"registerSerializer",{enumerable:!0,get:function(){return a.registerSerializer}}),(0,a.registerSerializer)("schema",r.SchemaSerializer),(0,a.registerSerializer)("none",o.NoneSerializer)})(fc)),fc}var AE=TE();const bE=1500;class wE{client=null;room=null;lastPingMs=null;pingIntervalId=null;connect(e){this.client=new AE.Client(e)}async joinOrCreate(e){if(!this.client)return!1;try{return this.room=await this.client.joinOrCreate(e,{},Yf),this.setupPing(),!0}catch(t){return console.error("Colyseus joinOrCreate failed:",t),!1}}setupPing(){const e=this.room;if(!e)return;this.stopPing(),this.lastPingMs=null,e.onMessage("pong",n=>{this.lastPingMs=Math.round(performance.now()-n.t)}),e.onLeave(()=>this.stopPing());const t=()=>{e.connection?.isOpen&&e.send("ping",{t:performance.now()})};t(),this.pingIntervalId=setInterval(t,bE)}stopPing(){this.pingIntervalId&&(clearInterval(this.pingIntervalId),this.pingIntervalId=null)}getPing(){return this.lastPingMs}sendInput(e){this.room?.send("input",e)}getRoom(){return this.room}disconnect(){this.stopPing(),this.room?.leave(),this.room=null}}class RE extends $s{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new DE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new YE(t)}),this.register(function(t){return new VE(t)}),this.register(function(t){return new GE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new zE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new kE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new HE(t)}),this.register(function(t){return new XE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new ZE(t)}),this.register(function(t){return new WE(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=wr.extractUrlBase(e);o=wr.resolveURL(c,this.path)}else o=wr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new zf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Nm){try{o[ot.KHR_BINARY_GLTF]=new $E(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new aT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ot.KHR_MATERIALS_UNLIT:o[u]=new IE;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[u]=new jE(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[u]=new qE;break;case ot.KHR_MESH_QUANTIZATION:o[u]=new KE;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function CE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class PE{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new We(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Vt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Xf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Jl(h),c.distance=u;break;case"spot":c=new qy(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class IE{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,n){const s=[];e.color=new We(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Vt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Kt))}return Promise.all(s)}}class LE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class DE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(a,a)}return Promise.all(r)}}class NE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class OE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class UE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Vt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Kt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class FE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class BE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(a[0],a[1],a[2],Vt),Promise.all(r)}}class zE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class kE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(a[0],a[1],a[2],Vt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Kt)),Promise.all(r)}}class XE{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class HE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class YE{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class VE{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class GE{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ZE{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class WE{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==gn.TRIANGLES&&c.mode!==gn.TRIANGLE_STRIP&&c.mode!==gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new $e,m=new D,p=new sn,S=new D(1,1,1),M=new yy(g.geometry,g.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&S.fromBufferAttribute(l.SCALE,T),M.setMatrixAt(T,_.compose(m,p,S));for(const T in l)if(T==="_COLOR_0"){const I=l[T];M.instanceColor=new dl(I.array,I.itemSize,I.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,l[T]);Mt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Nm="glTF",gr=12,Td={JSON:1313821514,BIN:5130562};class $E{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,gr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-gr,r=new DataView(e,gr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Td.JSON){const c=new Uint8Array(e,gr+o,a);this.content=n.decode(c)}else if(l===Td.BIN){const c=gr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=El[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=El[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ps[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},a,c,Vt,d)})})}}class qE{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class KE{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class Om extends Xr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,S=1-m,M=p-d+u;for(let T=0;T!==a;T++){const I=o[_+T+a],P=o[_+T+l]*h,R=o[g+T+a],O=o[g+T]*h;r[T]=S*I+M*P+m*R+p*O}return r}}const JE=new sn;class QE extends Om{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return JE.fromArray(r).normalize().toArray(r),r}}const gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ad={9728:Qt,9729:un,9984:jd,9985:Lo,9986:_r,9987:ti},bd={33071:Ei,33648:qo,10497:ji},xc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},El={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_i={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eT={CUBICSPLINE:void 0,LINEAR:Lr,STEP:Ir},_c={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new _n({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si})),i.DefaultMaterial}function zi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ei(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nT(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function iT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sT(i){let e;const t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vc(t.attributes):e=i.indices+":"+vc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+vc(i.targets[n]);return e}function vc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Tl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const oT=new $e;class aT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new CE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new kf(this.options.manager):this.textureLoader=new e1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return zi(r,a,s),ei(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(wr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=xc[s.type],a=Ps[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new bt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=xc[s.type],c=Ps[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let M=t.cache.get(S);M||(_=new c(a,p*f,s.count*f/h),M=new Af(_,f/h),t.cache.add(S,M)),m=new Nr(M,l,d%f/h,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),m=new bt(_,l,g);if(s.sparse!==void 0){const p=xc.SCALAR,S=Ps[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,T=s.sparse.values.byteOffset||0,I=new S(o[1],M,s.sparse.count*p),P=new c(o[2],T,s.sparse.count*l);a!==null&&(m=new bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,O=I.length;R<O;R++){const j=I[R];if(m.setX(j,P[R*l]),l>=2&&m.setY(j,P[R*l+1]),l>=3&&m.setZ(j,P[R*l+2]),l>=4&&m.setW(j,P[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Ad[d.magFilter]||un,h.minFilter=Ad[d.minFilter]||ti,h.wrapS=bd[d.wrapS]||ji,h.wrapT=bd[d.wrapT]||ji,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ot(_);m.needsUpdate=!0,d(m)}),t.load(wr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),ei(u,o),u.userData.mimeType=o.mimeType||rT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Pf,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ks,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return _n}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){const u=s[ot.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new We(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Vt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Kt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=hn);const h=r.alphaMode||_c.OPAQUE;if(h===_c.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===_c.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Cn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Cn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Cn){const u=r.emissiveFactor;a.emissive=new We().setRGB(u[0],u[1],u[2],Vt)}return r.emissiveTexture!==void 0&&o!==Cn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Kt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ei(u,r),t.associations.set(u,{materials:e}),r.extensions&&zi(s,u,r),u})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return wd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=sT(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=wd(new Dt,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?tT(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const S=c[f];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new xy(_,S):new vt(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===gn.TRIANGLE_STRIP?p.geometry=ju(p.geometry,af):m.mode===gn.TRIANGLE_FAN&&(p.geometry=ju(p.geometry,ll));else if(m.mode===gn.LINES)p=new Ji(_,S);else if(m.mode===gn.LINE_STRIP)p=new Gl(_,S);else if(m.mode===gn.LINE_LOOP)p=new Sy(_,S);else if(m.mode===gn.POINTS)p=new My(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&iT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ei(p,r),m.extensions&&zi(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&zi(s,u[0],r),u[0];const d=new Ht;r.extensions&&zi(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(Bs.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Xl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ei(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new $e;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Vl(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let S=0,M=d.length;S<M;S++){const T=d[S],I=f[S],P=g[S],R=_[S],O=m[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const j=n._createAnimationTracks(T,I,P,R,O);if(j)for(let E=0;E<j.length;E++)p.push(j[E])}return new ml(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,oT)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Rf:c.length>1?h=new Ht:c.length===1?h=c[0]:h=new Mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ei(h,r),r.extensions&&zi(n,h,r),r.matrix!==void 0){const u=new $e;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ht;n.name&&(r.name=s.createUniqueName(n.name)),ei(r,n),n.extensions&&zi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof In||d instanceof Ot)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];_i[r.path]===_i.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(_i[r.path]){case _i.weights:c=Xs;break;case _i.rotation:c=Hs;break;case _i.position:case _i.scale:c=Ys;break;default:switch(n.itemSize){case 1:c=Xs;break;case 2:case 3:default:c=Ys;break}break}const h=s.interpolation!==void 0?eT[s.interpolation]:Lr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+_i[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Tl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Hs?QE:Om;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cT(i,e,t){const n=e.attributes,s=new ai;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const h=Tl(Ps[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Tl(Ps[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Fn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function wd(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=El[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ft.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),ei(i,e),cT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?nT(i,e.targets,t):i})}const ch=new RE,Um=new kf;function Ur(){const i=new ci(.5,1.8,.5),e=new _n({color:8947967});return new vt(i,e)}async function Rd(i){if(!i.trim())return{scene:Ur(),animations:[]};try{const e=await ch.loadAsync(i);return{scene:e.scene,animations:e.animations??[]}}catch{return{scene:Ur(),animations:[]}}}async function lT(i){if(!i.trim())return{scene:Ur(),animations:[]};try{const e=await ch.loadAsync(i),t=e.animations??[];return{scene:e.scene,animations:t}}catch{return{scene:Ur(),animations:[]}}}async function Cd(i){if(!i.trim())return null;try{return(await ch.loadAsync(i)).scene}catch{return null}}const hT="/models/skins",Pd=new Map;function uT(i){return()=>{let e=i+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Id=10,yc=.65,Ld=.55;function Dd(i){const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d"),s=512/2,r=s*yc,o=uT(i*12345+1);n.clearRect(0,0,512,512);const a=i%5===3,l=a?3:3+i%4,c=i*.37*Math.PI,h=a?1.4:.9,u=a?.35:.2,d=a?.4:.35,f=a?.75:1;for(let S=0;S<l;S++){const M=a?(S*2.1+o()*.5)/l:S/l,T=c+M*Math.PI*2+(o()-.5)*h,I=(u+o()*d)*yc,P=(.1+o()*.18)*yc;n.save(),n.translate(s,s),n.rotate(T);const R=n.createLinearGradient(0,0,I*512,0);R.addColorStop(0,"rgba(255,130,45,0.78)"),R.addColorStop(.1,"rgba(255,105,35,0.74)"),R.addColorStop(.28,"rgba(240,80,25,0.5)"),R.addColorStop(.48,"rgba(210,60,15,0.24)"),R.addColorStop(.68,"rgba(175,50,10,0.08)"),R.addColorStop(.88,"rgba(140,35,6,0.02)"),R.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=R,n.beginPath(),n.ellipse(0,0,I*512,P*512,0,0,Math.PI*2),n.fill(),n.restore()}const g=r*f,_=n.createRadialGradient(s,s,0,s,s,g);_.addColorStop(0,"rgba(255,135,45,0.94)"),_.addColorStop(.18,"rgba(255,110,35,0.84)"),_.addColorStop(.42,"rgba(245,85,25,0.55)"),_.addColorStop(.65,"rgba(210,60,18,0.22)"),_.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=_,n.beginPath(),n.arc(s,s,g,0,Math.PI*2),n.fill();const m=n.getImageData(0,0,512,512);for(let S=0;S<512;S++)for(let M=0;M<512;M++){const T=(S*512+M)*4,I=(M-s)/s,P=(S-s)/s,R=Math.sqrt(I*I+P*P),O=R<Ld?1:Math.max(0,1-(R-Ld)/.2),j=m.data[T+3];if(j>2){const E=1+(1-j/255)*1.5,C=(o()-.5)*50*E;m.data[T]=Math.max(0,Math.min(255,m.data[T]+C)),m.data[T+1]=Math.max(0,Math.min(255,m.data[T+1]+C*.5)),m.data[T+2]=Math.max(0,Math.min(255,m.data[T+2]+C*.12)),m.data[T+3]=Math.round(m.data[T+3]*O)}}n.putImageData(m,0,0);const p=new Zl(t);return p.needsUpdate=!0,p}async function dT(i){if(i.length===0)return Array.from({length:Id},(t,n)=>Dd(n));const e=[];for(const t of i)try{const n=await Um.loadAsync(t);n.flipY=!1,e.push(n)}catch{}return e.length===0?Array.from({length:Id},(t,n)=>Dd(n)):e}async function lh(i){if(!i)return null;const e=Pd.get(i);if(e)return e;try{const t=await Um.loadAsync(`${hT}/${i}.png`);return t.flipY=!1,Pd.set(i,t),t}catch{return null}}async function fT(i,e){const t=await lh(e);return t?(hh(i,t),!0):!1}function hh(i,e){i.traverse(t=>{const n=t;if(!n.isMesh)return;const s=Array.isArray(n.material)?n.material:[n.material],r=[];for(const o of s){const a=o;if(!a)continue;const l=a.clone();l.map=e,r.push(l)}r.length===1?n.material=r[0]:r.length>1&&(n.material=r)})}class Fm{sprite;remainingMs=0;textures=[];config;constructor(e){this.config=e;const t=new Yl({map:null,transparent:!0,depthWrite:!1,blending:Cr,color:16768136});this.sprite=new wf(t),this.sprite.scale.set(e.scale,e.scale,1),this.sprite.visible=!1}setTextures(e){this.textures=e}trigger(e){if(this.textures.length===0)return;const t=this.textures[Math.floor(Math.random()*this.textures.length)];this.sprite.material.map=t,this.sprite.material.needsUpdate=!0,this.sprite.visible=!0,this.remainingMs=this.config.durationMs,this.sprite.parent!==e&&(this.sprite.parent&&this.sprite.parent.remove(this.sprite),e.add(this.sprite)),this.sprite.position.set(0,0,0)}update(e){return this.remainingMs<=0?(this.sprite.visible&&(this.sprite.visible=!1),!1):(this.remainingMs-=e,this.remainingMs<=0?(this.sprite.visible=!1,!1):!0)}getSprite(){return this.sprite}dispose(){this.sprite.material.dispose()}}const mT=.15,pT=2.5,gT=.5,xT=.9;function vi(i){return i.toLowerCase().replace(/\s+/g,"")}class ra{clipsById=new Map;clipNames;currentActions=new Map;crossfadeDuration;constructor(e={},t=mT){this.clipNames={...g1,...e},this.crossfadeDuration=t}findIdleClip(e){if(!e.length)return;const t=e.find(s=>vi(s.name)==="idleaiming");if(t)return t;const n=e.find(s=>vi(s.name)==="idle");return n||e[0]}init(e){this.clipsById.clear();const t=new Map;for(const r of e){t.set(vi(r.name),r);const o=r.name.split("|").pop();o&&o!==r.name&&t.set(vi(o),r)}for(const[r,o]of Object.entries(this.clipNames)){const a=vi(o);let l=e.find(c=>c.name===o)??t.get(a)??e.find(c=>{const h=vi(c.name),u=c.name.split("|").pop()??"";return h===a||vi(u)===a});l&&this.clipsById.set(r,l)}const n=this.findIdleClip(e);!this.clipsById.has("idle")&&n&&this.clipsById.set("idle",n);const s=e.find(r=>vi(r.name)==="slide");!this.clipsById.has("slide")&&s&&this.clipsById.set("slide",s)}findClip(e){return this.clipsById.get(e)??Array.from(this.clipsById.values()).find(t=>t.name===e)}updateJumpSync(e,t,n){const s=t.duration*gT,r=t.duration*xT;Math.abs(n)<pT?(e.timeScale=0,e.time<s&&(e.time=s)):(e.timeScale=1,n<0&&e.time<s&&(e.time=s),e.time>r&&(e.time=r,e.timeScale=0))}static STRAFE_SLOW_SCALE=.7;playStaticIdlePose(e){const t=this.findClip("idle");if(!t)return;const n=this.currentActions.get(e),s=e.clipAction(t);n!==s&&(n&&n.fadeOut(.06),s.setLoop(cl,1/0),s.reset().fadeIn(0).play(),this.currentActions.set(e,s)),s.time=0,s.timeScale=0}playClip(e,t,n){let s=this.findClip(t),r=t;if(!s&&(s=this.findClip("idle"),r="idle",!s))return;const o=this.currentActions.get(e),a=e.clipAction(s);if(o!==a){a.setLoop(r==="jump"?of:cl,r==="jump"?1:1/0);const h=this.findClip("jump"),d=o&&h&&o.getClip()===h?.06:this.crossfadeDuration;o&&o.fadeOut(d),a.reset().fadeIn(d).play(),this.currentActions.set(e,a)}r==="jump"&&n?.vy!==void 0&&this.updateJumpSync(a,s,n.vy);const c=r==="strafeLeftFast"||r==="strafeRightFast";n?.timeScale!==void 0?(a.timeScale=n.timeScale,n.timeScale===0&&(a.time=0)):c?n?.sprint===!1?a.timeScale=ra.STRAFE_SLOW_SCALE:a.timeScale=1:r==="idle"&&(a.timeScale=1)}updateMixers(e,t){for(const n of e)n.update(t)}}function _T(i){return{shotThisFrame:!1,lastLocalHealth:null,localRespawnNoLerpTime:0,clientShootCooldownTicks:0,clientReloadTicks:0,inputTick:0,debugMode:!1,currentEyeHeight:i,lastHitboxPositions:null,lastHitboxPositionsRaw:null}}function vT(i,e,t,n,s,r,o){const a={tick:e,moveX:i.moveX,moveZ:i.moveZ,sprint:i.sprint,jump:i.jump,slide:i.slide,slideIntentTicks:i.slideIntentTicks>0?i.slideIntentTicks:void 0,crouch:i.crouch,yaw:i.yaw,pitch:i.pitch,shoot:i.shoot,reload:i.reload,dash:i.dash};if(t&&(a.clientX=t.x,a.clientY=t.y,a.clientZ=t.z),s&&(a.aimDirX=s.x,a.aimDirY=s.y,a.aimDirZ=s.z),i.shoot&&s){a.shootAimX=s.x,a.shootAimY=s.y,a.shootAimZ=s.z;const l=o??t;l&&(a.shootClientX=l.x,a.shootClientY=l.y,a.shootClientZ=l.z)}if(r&&(a.debugMode=!0),n&&t){const l=g=>({x:g.x-t.x,y:g.y-t.y,z:g.z-t.z}),c=l(n.head),h=l(n.bodyCenter),u=l(n.spineTop),d=l(n.pelvis),f=l(n.feet);a.headX=c.x,a.headY=c.y,a.headZ=c.z,a.bodyCenterX=h.x,a.bodyCenterY=h.y,a.bodyCenterZ=h.z,a.spineTopX=u.x,a.spineTopY=u.y,a.spineTopZ=u.z,a.pelvisX=d.x,a.pelvisY=d.y,a.pelvisZ=d.z,a.feetX=f.x,a.feetY=f.y,a.feetZ=f.z}return a}const Nd=.15,Sc=.05,Od=8,kt=(i,e,t)=>i+(e-i)*(1-Math.exp(-t));function yT(){return{moveFactor:0,smoothedPhaseSpeed:0,bobPhase:0,swayYaw:0,swayPitch:0,recoilPitch:0,recoilPullback:0,recoilRoll:0,slideBlend:0,slideImpactSpringY:0,slideImpactSpringVy:0,slideWigglePhase:1,slideReleaseBump:0,strafeLeanX:0,strafeLeanRoll:0,forwardLeanZ:0,dashBlend:0,smoothedYawDelta:0,smoothedPitchDelta:0,idlePhase:0,idleTime:0,prevMovState:"grounded",lastAirborneVy:0,lastAirborneVx:0,jumpTakeoffPhase:1,jumpLandingSpringY:0,jumpLandingSpringVy:0,lastYaw:0,lastPitch:0,firstFrame:!0,_targetPos:new D,_targetRot:new vn(0,0,0,"YXZ"),_pos:new D,_rot:new vn(0,0,0,"YXZ")}}function ST(i,e){const t=Be.tuning.povMovement??MT,{velocity:n,state:s,crouching:r,yaw:o,pitch:a,shotThisFrame:l,dt:c}=e,h=Math.sqrt(n.x*n.x+n.z*n.z),u=s==="sliding",d=s==="grounded",f=s==="airborne",g=i.prevMovState==="grounded",_=i.prevMovState==="airborne";i.prevMovState=s,f&&(i.lastAirborneVy=n.y,i.lastAirborneVx=n.x);const m=Math.min(1,Math.abs(i.lastAirborneVy)/12);if(g&&f&&(i.jumpTakeoffPhase=0),_&&d){const dt=(t.jumpLandingDip??-.06)*m;i.jumpLandingSpringY=dt,i.jumpLandingSpringVy=0}const p=t.jumpTakeoffDecay??6;i.jumpTakeoffPhase=Math.min(1,i.jumpTakeoffPhase+c*p);const S=i.jumpTakeoffPhase,M=1-S*S,T=(t.jumpTakeoffDip??-.016)*M,I=t.jumpLandingSpringK??60,P=t.jumpLandingSpringDamp??14;if(d&&(Math.abs(i.jumpLandingSpringY)>1e-4||Math.abs(i.jumpLandingSpringVy)>1e-4)){const dt=-I*i.jumpLandingSpringY-P*i.jumpLandingSpringVy;i.jumpLandingSpringVy+=dt*c,i.jumpLandingSpringY+=i.jumpLandingSpringVy*c}else d&&(i.jumpLandingSpringY=0,i.jumpLandingSpringVy=0);const R=d?i.jumpLandingSpringY:0,O=Math.abs(i.jumpLandingSpringY)+Math.abs(i.jumpLandingSpringVy)*.1,j=f?t.jumpAirborneFloatY??.016:0,E=(f?T:0)+R+j,C=d&&O>.001&&Math.abs(i.lastAirborneVx)>1?-Math.sign(i.lastAirborneVx)*(t.jumpLandingRoll??.016)*m*Math.min(1,Math.abs(i.lastAirborneVx)/6)*Math.min(1,O*20):0,Y=f&&Math.abs(n.z)>.5?-Math.sign(n.z)*(t.jumpInertiaZ??.004)*Math.min(1,Math.abs(n.z)/6):0,V=Math.min(1,h/Od),Z=d&&h>Nd&&!u?V:0;i.moveFactor=kt(i.moveFactor,Z,c/t.moveFactorSmoothTau);const q=u?1:0,H=u?t.slideInTau:t.slideOutTau,K=i.slideBlend;if(i.slideBlend=kt(i.slideBlend,q,c/H),i.slideBlend>.05&&K<.1&&(i.slideImpactSpringY=t.slideImpactDipAmp,i.slideImpactSpringVy=0,i.slideWigglePhase=0),i.slideBlend>.01){const dt=t.slideImpactSpringK??80,tn=t.slideImpactSpringDamp??12,Xn=-dt*i.slideImpactSpringY-tn*i.slideImpactSpringVy;i.slideImpactSpringVy+=Xn*c,i.slideImpactSpringY+=i.slideImpactSpringVy*c}else i.slideImpactSpringY=0,i.slideImpactSpringVy=0;const se=i.slideImpactSpringY,le=t.slideWiggleDuration??.3;i.slideBlend>.01&&i.slideWigglePhase<1?i.slideWigglePhase=Math.min(1,i.slideWigglePhase+c/le):i.slideBlend<.5&&(i.slideWigglePhase=1);const xe=1-i.slideWigglePhase,ae=i.slideBlend*xe*(t.slideWiggleRoll??.004)*Math.sin(i.idleTime*18),Xe=K>.3&&!u&&i.slideBlend<K,J=t.slideReleaseBump??0;Xe&&J!==0&&(i.slideReleaseBump=J),i.slideReleaseBump=kt(i.slideReleaseBump,0,c/(t.slideReleaseBumpTau??.08));const oe=r?t.bobCrouchFreqMultiplier??1:1,ve=d&&h>Nd&&!u?Math.min(1,h/Od)*t.bobFrequency*oe:0;i.smoothedPhaseSpeed=kt(i.smoothedPhaseSpeed,ve,c/t.phaseSpeedSmoothTau),i.bobPhase+=c*i.smoothedPhaseSpeed;const me=r?t.bobCrouchAmpMultiplier??1:1,Fe=i.moveFactor*me,re=Fe<=Sc?0:Math.min(1,(Fe-Sc)/(1-Sc)),de=Math.abs(n.z),ge=Math.abs(n.x),Pe=de+ge+1e-6,N=de/Pe,je=ge/Pe,De=n.x>0?1:n.x<0?-1:0,Te=d&&!u?re*je*i.moveFactor:0,Oe=-De*Te*(t.strafeLeanX??0),lt=De*Te*(t.strafeLeanRoll??0),He=t.strafeLeanTau??.06;i.strafeLeanX=kt(i.strafeLeanX,Oe,c/He),i.strafeLeanRoll=kt(i.strafeLeanRoll,lt,c/He);const L=n.z>0?1:n.z<0?-1:0,b=d&&!u?re*N*i.moveFactor:0,$=L*b*(t.forwardLeanZ??0);i.forwardLeanZ=kt(i.forwardLeanZ,$,c/He);const he=e.isDashing??!1?1:0,ne=t.dashBlendTau??.04;i.dashBlend=kt(i.dashBlend,he,c/ne);const Ue=i.dashBlend*(t.dashOffsetZ??.06),Se=i.dashBlend*(t.dashTiltPitch??-.04),Ie=.4+.6*N,nt=.4+.6*je,pe=.5+.5*je,Le=1-je*(t.strafeBobYReduce??.7),Ve=1+je*(t.strafeBobXBoost??.5),Ge=1+je*(t.strafeBobRollBoost??.8),ye=Math.max(0,Math.min(1,e.reloadProgress??0)),qe=1-i.slideBlend*(t.bobSlideReduce??.98),Ze=1-ye,ht=i.bobPhase,k=t.bobAmplitudeY*re*Ie*Le*Math.sin(ht)*qe*Ze,Re=t.bobAmplitudeX*re*nt*Ve*Math.sin(ht+t.bobPhaseOffsetX)*qe*Ze,Q=t.bobAmplitudeRoll*re*pe*Ge*Math.sin(ht+.7)*qe*Ze,ce=t.bobAmplitudePitch*re*Math.sin(ht+.4)*qe*Ze;let Ae=0,be=0;i.firstFrame?i.firstFrame=!1:(Ae=o-i.lastYaw,be=a-i.lastPitch),i.lastYaw=o,i.lastPitch=a;const it=t.swayDeltaSmoothTau??.04;i.smoothedYawDelta=kt(i.smoothedYawDelta,Ae,c/it),i.smoothedPitchDelta=kt(i.smoothedPitchDelta,be,c/it);const yt=(1-i.slideBlend*t.swaySlideReduce)*(1-ye*(t.swayReloadReduce??.8))*(f?t.swayAirborneReduce??.5:1),Bt=-i.smoothedYawDelta*t.swayLookFactor*yt,ct=-i.smoothedPitchDelta*t.swayLookFactor*yt;i.swayYaw=kt(i.swayYaw,Bt,c/t.swaySmoothTau),i.swayPitch=kt(i.swayPitch,ct,c/t.swaySmoothTau),i.swayYaw*=t.swayReturnDamping,i.swayPitch*=t.swayReturnDamping;const rn=1/Zf/3,fn=Math.max(t.recoilRecoveryTau,1e-4),Dn=Math.min(fn,rn);l&&(i.recoilPitch+=t.recoilKickPitch,i.recoilPullback+=t.recoilPullback,i.recoilRoll+=(Math.random()-.5)*t.recoilRollVariation);const on=(1-i.slideBlend*t.recoilSlideReduce)*(1-ye);i.recoilPitch=kt(i.recoilPitch,0,c/Dn)*on,i.recoilPullback=kt(i.recoilPullback,0,c/Dn),i.recoilRoll=kt(i.recoilRoll,0,c/Dn);const Ri=i.slideBlend*t.slideYOffset+se+i.slideReleaseBump,v=i.slideBlend*t.slideZOffset,x=i.slideBlend*t.slideInwardTilt+ae,y=i.slideBlend*(t.slidePitchDown??-.1),w=ye>1e-4;let z=0;if(w)if(ye<.25){const dt=ye/.25;z=dt*dt}else if(ye<.7)z=1;else{const dt=(ye-.7)/.3,tn=Math.max(0,Math.min(1,dt)),Xn=tn*tn*(3-2*tn),nn=t.reloadOvershoot??.08;z=1-Xn+nn*(1-Xn)*(1-Xn)}const te=t.reloadYOffset??-.12,ke=t.reloadZOffset??.12,Ne=t.reloadPullback??.06,tt=t.reloadPitchDown??-.3,Ke=t.reloadRoll??-.14,A=t.reloadYaw??.18,F=z*te,B=z*ke,X=z*Ne,U=z*tt,ee=z*Ke,W=z*A;i.idleTime+=c;const ue=2*Math.PI/(t.idleBreathingPeriod??4),Me=1+.06*Math.sin(i.idleTime*.4)+.03*Math.sin(i.idleTime*.73);i.idlePhase+=c*ue*Me;const we=i.idlePhase,_e=we*2.13+.7,fe=we*.47+1.3,Je=Math.sin(we)+.18*Math.sin(_e)+.06*Math.sin(fe),st=Math.max(-1,Math.min(1,Je/1.24)),rt=Math.sign(st)*Math.pow(Math.abs(st),.78),ut=.4*Math.sin(we+.6)+.12*Math.sin(_e+1.1),Ye=(1-i.slideBlend)*(1-i.moveFactor*(t.idleWalkReduce??.85))*(1-ye*(t.idleReloadReduce??.4))*(f?t.idleAirborneReduce??.3:1),ze=(t.idleBreathingAmplitudeY??.002)*Ye,gt=(t.idleBreathingAmplitudeX??6e-4)*Ye,at=ze*rt,Tt=gt*ut,an=(t.idlePitchAmplitude??6e-4)*Ye*rt,$t=(t.idleRollAmplitude??3e-4)*Ye*ut;i._targetPos.set(Re+i.strafeLeanX+Tt,k+Ri+F+at+E,i.recoilPullback+X+v+B+i.forwardLeanZ+Y+Ue),i._targetRot.set(i.swayPitch+i.recoilPitch+ce+an+y+U+Se,i.swayYaw+W,x+ee+i.recoilRoll+Q+i.strafeLeanRoll+$t+C,"YXZ");const li=t.rootApplyTau;return i._pos.lerp(i._targetPos,1-Math.exp(-c/li)),i._rot.x=kt(i._rot.x,i._targetRot.x,c/li),i._rot.y=kt(i._rot.y,i._targetRot.y,c/li),i._rot.z=kt(i._rot.z,i._targetRot.z,c/li),{position:i._pos,rotation:i._rot}}const MT={idleBreathingAmplitudeY:.008,idleBreathingAmplitudeX:.0024,idleBreathingPeriod:4,idlePitchAmplitude:.0024,idleRollAmplitude:.0012,idleWalkReduce:.85,idleAirborneReduce:.3,jumpTakeoffDip:-.016,jumpTakeoffDecay:8,jumpAirborneFloatY:.032,jumpLandingDip:-.06,jumpLandingSpringK:60,jumpLandingSpringDamp:14,jumpLandingRoll:.016,jumpInertiaZ:.016,swayAirborneReduce:.5,moveFactorSmoothTau:.06,phaseSpeedSmoothTau:.08,rootApplyTau:.025,bobAmplitudeY:.01512,bobAmplitudeX:.0156,bobAmplitudeRoll:.0052,bobAmplitudePitch:.00258,bobPhaseOffsetX:.3,bobFrequency:10,swayLookFactor:.6,swaySmoothTau:.05,swayDeltaSmoothTau:.04,swayReturnDamping:.88,swaySlideReduce:.92,bobSlideReduce:.98,strafeLeanX:.1,strafeLeanRoll:.025,forwardLeanZ:.1,strafeLeanTau:.06,strafeBobYReduce:.7,strafeBobXBoost:.5,strafeBobRollBoost:.8,recoilKickPitch:.02,recoilPullback:.15,recoilRollVariation:.02,recoilRecoveryTau:.06,recoilSlideReduce:.5,slideYOffset:-.2,slideZOffset:.1,slideInwardTilt:.38,slidePitchDown:-.1,slideImpactDipAmp:-.012,slideImpactSpringK:80,slideImpactSpringDamp:18,slideWiggleRoll:.005,slideWiggleDuration:.3,slideReleaseBump:0,slideReleaseBumpTau:.1,slideInTau:.04,slideOutTau:.28,bobCrouchFreqMultiplier:1,bobCrouchAmpMultiplier:1,reloadYOffset:-.12,reloadZOffset:.12,reloadPullback:.06,reloadPitchDown:-.3,reloadRoll:-.14,reloadYaw:.18,reloadOvershoot:.08,swayReloadReduce:.8,idleReloadReduce:.4},Al={x:.37,y:-5.34,z:.55,rotX:-.03,rotY:2.968,rotZ:-.02,scale:3.21};async function Ud(i,e,t){const n=t.getCamera();let s=i,r=e;if(Be.viewmodelArmsUrl){const _=await lT(Be.viewmodelArmsUrl);_.animations.length>0&&_.scene&&(s=_.scene,r=_.animations)}const o=s!==i,a=th(s);if(a.updateMatrixWorld(!0),Be.playerSkin){const _=await lh(Be.playerSkin);_&&hh(a,_)}o?(a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.setScalar(1)):(a.position.set(0,-Vs*.5,-.4),a.rotation.set(0,0,0),a.scale.setScalar(1));const l=new Ht;l.position.set(0,0,0),l.quaternion.identity(),l.scale.setScalar(1);const c=new Ht;if(c.add(a),o){const _=Al;c.position.set(_.x,_.y,_.z),c.rotation.set(_.rotX,_.rotY,_.rotZ),c.scale.setScalar(_.scale)}else c.position.set(0,0,0),c.quaternion.identity(),c.scale.setScalar(1);l.add(c),n.add(l),a.traverse(_=>{_.frustumCulled=!1;const m=_;m.isMesh&&(m.renderOrder=100)});let h=null,u=null,d=null,f=!1,g=null;if(o&&Be.viewmodelWeaponUrl){const _=await Cd(Be.viewmodelWeaponUrl);if(_){_.rotation.x=Math.PI/2,_.rotation.z=-Math.PI/2;let m=null,p=null;a.traverse(P=>{const R=P;R.isSkinnedMesh&&R.skeleton&&!m&&(m=R.skeleton.getBoneByName($f)??R.skeleton.getBoneByName(jf)??R.skeleton.getBoneByName(qf)??null,p=R.skeleton.getBoneByName(tS)??R.skeleton.getBoneByName(nS)??R.skeleton.getBoneByName(iS)??null)});const S=_.getObjectByName("gripleft");u=_.getObjectByName("muzzle")??_.getObjectByName("Muzzle")??_;const M=new Ht;M.add(_),h=M;const T=Be.viewmodelWeaponScale??1,I=Be.viewmodelWeaponTwoPoint&&m&&p&&S&&S.position.lengthSq()>1e-6;if(o){d=null,f=!0,l.add(M);const P=Be.viewmodelWeaponGripOffset??{x:0,y:0,z:0};_.position.set(P.x,P.y,P.z),_.scale.setScalar(T)}else if(I&&m&&p&&S){const P=S.position.clone();d={rightHand:m,leftHand:p,gripleft:S,gLeftLocal:P},f=!1,a.add(M)}else if(d=null,f=!1,m){m.add(M);const P=Be.viewmodelWeaponOffset;M.position.set(P.x,P.y,P.z);const R=Be.viewmodelWeaponGripOffset??{x:0,y:0,z:0};_.position.set(R.x,R.y,R.z),_.scale.setScalar(T)}else a.add(M),M.position.set(.25,-.15,.35),_.scale.setScalar(T);_.traverse(P=>{P.frustumCulled=!1;const R=P;if(R.isMesh){R.renderOrder=101;const O=Array.isArray(R.material)?R.material:[R.material];for(const j of O)j&&"side"in j&&(j.side=hn)}}),g=_.clone(!0)}}if(Be.viewmodelWeaponUrl&&!g){const _=await Cd(Be.viewmodelWeaponUrl);_&&(_.rotation.x=Math.PI/2,_.rotation.z=-Math.PI/2,g=_)}return{viewmodelModel:a,viewmodelAnimations:r,viewmodelState:{playerViewModel:a,viewmodelRoot:l,viewmodelHolder:c,viewmodelIsArmsOnly:o,weaponContainerRef:h,muzzleNodeRef:u,twoPointRefs:d,weaponPovDecoupled:f,movementState:yT()},weaponTemplate3P:g}}const Mc=new D,xr=new D,Fd=new D,Bd=new sn,zd=new sn;function Bm(i,e){const{viewmodelRoot:t,viewmodelHolder:n,viewmodelIsArmsOnly:s,weaponContainerRef:r,twoPointRefs:o,weaponPovDecoupled:a,playerViewModel:l,movementState:c}=i;if(n&&s){const h=Al;n.position.set(h.x,h.y,h.z),n.rotation.set(h.rotX,h.rotY,h.rotZ),n.scale.setScalar(h.scale)}if(s&&e&&t){const{position:h,rotation:u}=ST(c,e);t.position.copy(h),t.rotation.set(u.x,u.y,u.z,"YXZ")}if(s&&r&&a){const h=Be.viewmodelWeaponOffset,u=Be.viewmodelWeaponPovOffset??{x:0,y:0,z:0};r.position.set(.25+h.x+u.x,-.4+h.y+u.y,-.7+h.z+u.z),r.rotation.set(0,0,0);const d=Be.viewmodelWeaponGripOffset??{x:0,y:0,z:0},f=Be.viewmodelWeaponRotationX??0,g=Be.viewmodelWeaponRotationY??0,_=Be.viewmodelWeaponRotationZ??0,m=Be.viewmodelWeaponScale??1,p=r.children[0];if(p){const S=p;S.position.set(d.x,d.y,d.z),S.rotation.set(Math.PI/2+f,g,_),S.scale.setScalar(m)}}else if(!o&&r){const h=Be.viewmodelWeaponOffset;r.position.set(h.x,h.y,h.z);const u=Be.viewmodelWeaponGripOffset??{x:0,y:0,z:0},d=Be.viewmodelWeaponRotationX??0,f=Be.viewmodelWeaponRotationY??0,g=Be.viewmodelWeaponRotationZ??0,_=r.children[0];if(_){const m=_;m.position.set(u.x,u.y,u.z),m.rotation.set(Math.PI/2+d,f,g)}}if(o&&r&&l){const{rightHand:h,leftHand:u,gLeftLocal:d}=o;h.getWorldPosition(Mc),u.getWorldPosition(xr),xr.sub(Mc);const f=xr.length(),g=d.length();if(f>1e-6&&g>1e-6){const m=Al.scale,p=f/(m*g),S=Math.max(.5,Math.min(p,50));xr.normalize(),Fd.copy(d).normalize(),Bd.setFromUnitVectors(Fd,xr),r.position.copy(Mc),l.worldToLocal(r.position),l.getWorldQuaternion(zd),r.quaternion.copy(zd).invert().multiply(Bd);const M=r.children[0];M&&M.scale.setScalar(S)}}}function yi(i,e){for(const t of e){const n=i.getBoneByName(t);if(n)return n}}function zm(i){let e=null;return i.traverse(t=>{const n=t;n.isSkinnedMesh&&n.skeleton&&!e&&(e=n.skeleton)}),e}function ET(i){const e=zm(i);return e?e.getBoneByName($f)??e.getBoneByName(jf)??e.getBoneByName(qf)??null:null}function TT(i){let e=i;for(;e.parent;)e=e.parent;e.updateMatrixWorld(!0)}function kd(i){if(!i)return null;const e=zm(i);if(!e)return null;const t=yi(e,[I1,L1,D1]),n=yi(e,[N1,O1,U1]),s=yi(e,[z1,H1,G1]),r=yi(e,[B1,X1,V1]),o=yi(e,[F1,k1,Y1]),a=yi(e,[Z1,W1,$1]);if(!t||!a)return null;const l=s??r??o;if(!l)return null;TT(i);const c=new D;if(c.setFromMatrixPosition(t.matrixWorld),n){const S=new D().setFromMatrixPosition(n.matrixWorld);c.add(S).multiplyScalar(.5)}const h=new D;t.getWorldDirection(h),c.addScaledVector(h,v1);const u=new D;u.setFromMatrixPosition(a.matrixWorld);const d=new D;if(s&&r){const S=new D().setFromMatrixPosition(s.matrixWorld),M=new D().setFromMatrixPosition(r.matrixWorld);d.addVectors(S,M).multiplyScalar(.5)}else d.setFromMatrixPosition(l.matrixWorld);const f=new D,g=o??r??s;f.setFromMatrixPosition(g.matrixWorld);const _=yi(e,[j1,q1,K1]),m=yi(e,[J1,Q1,eS]),p=new D;if(_&&m){const S=new D().setFromMatrixPosition(_.matrixWorld),M=new D().setFromMatrixPosition(m.matrixWorld);p.addVectors(S,M).multiplyScalar(.5)}else _?p.setFromMatrixPosition(_.matrixWorld):m?p.setFromMatrixPosition(m.matrixWorld):p.copy(u).lerp(new D(u.x,u.y-.9,u.z),1);return{head:c,bodyCenter:d,spineTop:f,pelvis:u,feet:p}}const AT=5,Ec=7e3,Xd=500,Hd="#4dd0e1",bT="/ui/weapon_rifle_white.png",wT="/ui/headshot_white.png";let ii=null;const Is=[];let RT=1,bl=0;function CT(i){if(ii)return;const e=document.createElement("div");e.id="killfeed",e.style.cssText="position:fixed;top:88px;right:32px;pointer-events:none;z-index:9999;display:flex;flex-direction:column;gap:6px;align-items:flex-end;font-family:system-ui,sans-serif;",i.appendChild(e),ii=e}function PT(i,e){if(!ii)return;const t=i?.sessionId??null,n=i?.state.players.get(e.killerId)??null,s=i?.state.players.get(e.victimId)??null,r=Yd(e.killerId,n?.id),o=Yd(e.victimId,s?.id),a=t!==null&&e.killerId===t,l=t!==null&&e.victimId===t,c=document.createElement("div");c.style.cssText="display:flex;align-items:center;gap:8px;padding:4px 11px;background:rgba(0,0,0,0.7);border-radius:4px;color:#fff;font-size:13px;transform-origin:top right;opacity:1;pointer-events:none;";const h=document.createElement("span");h.textContent=r,h.style.fontWeight="600",h.style.color=a?Hd:"#ffffff",c.appendChild(h);const u=document.createElement("img");if(u.src=LT(e.weaponId),u.alt=e.weaponId,u.style.height="18px",u.style.width="auto",u.style.filter="drop-shadow(0 0 2px rgba(0,0,0,0.8))",c.appendChild(u),e.isHeadshot){const g=document.createElement("img");g.src=wT,g.alt="Headshot",g.style.height="18px",g.style.width="auto",g.style.filter="drop-shadow(0 0 2px rgba(0,0,0,0.8))",c.appendChild(g)}const d=document.createElement("span");d.textContent=o,d.style.fontWeight="500",d.style.color=l?Hd:"#ffffff",c.appendChild(d),ii.appendChild(c);const f={id:RT++,killerId:e.killerId,victimId:e.victimId,weaponId:e.weaponId,isHeadshot:e.isHeadshot,createdAtMs:bl,element:c};for(Is.push(f);Is.length>AT;){const g=Is.shift();g&&g.element.parentElement===ii&&ii.removeChild(g.element)}}function IT(i){if(ii){bl+=i*1e3;for(let e=0;e<Is.length;e++){const t=Is[e],n=bl-t.createdAtMs;if(n>=Ec+Xd){t.element.parentElement===ii&&ii.removeChild(t.element),Is.splice(e,1),e--;continue}let s=1;if(n>Ec){const r=(n-Ec)/Xd;s=Math.max(0,1-r)}t.element.style.opacity=s.toFixed(2)}}}function Yd(i,e){const t=e&&e.trim().length>0?e:i;return Qf(t)}function LT(i){return bT}const Vd={ammo:30,maxAmmo:30};class DT{constructor(e){this.ctx=e}tick(e){const{state:t,input:n,movement:s,camera:r,physics:o,netClient:a,remotePlayerSync:l}=this.ctx,c=n.getState();if(!this.ctx.getIsPlaying()){n.tick();return}t.clientShootCooldownTicks>0&&t.clientShootCooldownTicks--,t.clientReloadTicks>0&&t.clientReloadTicks--,c.debugModeJustPressed&&(t.debugMode=!t.debugMode),s.update(e,c,o);const h=s.getSnapshot(),u=h.crouching?Nu:Vs;t.currentEyeHeight=Bs.lerp(t.currentEyeHeight,u,1-Math.exp(-e/this.ctx.crouchTransitionTau)),r.setTargetPosition(h.position.x,h.position.y+t.currentEyeHeight,h.position.z),r.setRotation(h.yaw,h.pitch);const d=a.getRoom(),f=d?.state.players.get(d.sessionId)??null;if(f){if(t.lastLocalHealth!==null&&t.lastLocalHealth<=0&&f.health>0){l.syncLocalSpawnFromServer(d);const S=s.getSnapshot();t.currentEyeHeight=S.crouching?Nu:Vs,r.setTargetPosition(S.position.x,S.position.y+t.currentEyeHeight,S.position.z),r.setRotation(S.yaw,S.pitch),r.snapToTarget(),t.localRespawnNoLerpTime=.3}t.lastLocalHealth=f.health;const g=f.ammo,_=f.maxAmmo,m=t.debugMode;c.reload&&g<_&&t.clientReloadTicks<=0&&(t.clientReloadTicks=Wf),c.shoot&&(g>0||m)&&t.clientReloadTicks<=0&&t.clientShootCooldownTicks<=0&&f.health>0&&(t.shotThisFrame=!0,t.clientShootCooldownTicks=Ou)}else c.shoot&&t.clientShootCooldownTicks<=0&&(t.shotThisFrame=!0,t.clientShootCooldownTicks=Ou);n.tick()}}class NT{constructor(e){this.ctx=e}tick(e){const{state:t,input:n,movement:s,camera:r,netClient:o,remotePlayerSync:a}=this.ctx;if(!this.ctx.getIsPlaying())return;const l=o.getRoom();if(!l)return;const c=n.getState(),h=s.getSnapshot(),u=t.lastHitboxPositions??void 0,d=c.shoot?r.getEyePosition():void 0,f=r.getAimDirection(),g=vT(c,t.inputTick,h.position,u,{x:f.x,y:f.y,z:f.z},t.debugMode,d);o.sendInput(g),t.inputTick++,a.reconcile(l)}}class OT{constructor(e){this.ctx=e}render(e){const{state:t,movement:n,camera:s,viewmodelState:r,tracerSystem:o,muzzleFlashPov:a}=this.ctx,l=n.getSnapshot(),c=this.ctx.playerAnimationSystem;if(c&&this.ctx.localPlayerMixer&&c.playStaticIdlePose(this.ctx.localPlayerMixer),t.localRespawnNoLerpTime>0?(s.snapToTarget(),t.localRespawnNoLerpTime-=e,t.localRespawnNoLerpTime<0&&(t.localRespawnNoLerpTime=0)):s.update(e),c&&this.ctx.localPlayerMixer&&this.ctx.localPlayerMixer.update(e),this.ctx.playerViewModel&&this.ctx.playerViewModel.updateMatrixWorld(!0),r){if(t.shotThisFrame&&r.muzzleNodeRef){const d=s.getAimDirection(),_=s.getCamera().position.clone().clone().addScaledVector(d,this.ctx.tracerFirstPersonLength),m=new D;r.muzzleNodeRef.getWorldPosition(m);const p=_.clone().sub(m).normalize(),S=_.distanceTo(m);o.spawnTracer(m,p,S),a&&a.trigger(r.muzzleNodeRef)}const h=t.clientReloadTicks>0?1-t.clientReloadTicks/Wf:0,u={dt:e,velocity:l.velocity,state:l.state,crouching:l.crouching,yaw:l.yaw,pitch:l.pitch,shotThisFrame:t.shotThisFrame,reloadProgress:h,isDashing:n.isDashing()};Bm(r,u),a&&a.update(e*1e3),t.shotThisFrame=!1}this.ctx.remotePlayerSync.updateRemoteMixers(e)}}class UT{constructor(e){this.ctx=e}render(e){const{state:t,movement:n,netClient:s,remotePlayerSync:r,debugHitboxes:o,sceneManager:a}=this.ctx,l=n.getSnapshot(),{hitboxDummy:c,hitboxDummyMixer:h,viewmodelState:u}=this.ctx,d=this.ctx.playerAnimationSystem;if(c){c.position.set(l.position.x,l.position.y,l.position.z),c.rotation.set(0,l.yaw+Math.PI,0),d&&h&&(d.playStaticIdlePose(h),h.update(e));const m=kd(c);m?(t.lastHitboxPositionsRaw=m,t.lastHitboxPositions={head:{x:m.head.x,y:m.head.y,z:m.head.z},bodyCenter:{x:m.bodyCenter.x,y:m.bodyCenter.y,z:m.bodyCenter.z},spineTop:{x:m.spineTop.x,y:m.spineTop.y,z:m.spineTop.z},pelvis:{x:m.pelvis.x,y:m.pelvis.y,z:m.pelvis.z},feet:{x:m.feet.x,y:m.feet.y,z:m.feet.z}}):(t.lastHitboxPositionsRaw=null,t.lastHitboxPositions=null)}else t.lastHitboxPositionsRaw=null,t.lastHitboxPositions=null;r.update(s.getRoom(),e),o.setVisible(t.debugMode,u?.viewmodelIsArmsOnly??!1);const f=s.getRoom(),g=t.debugMode?n.position:null,_=f?Array.from(f.state.players.entries()).filter(([m])=>m!==f.sessionId).filter(([,m])=>m.health>0).map(([m,p])=>{const S=r.getRemotePlayerMeshes().get(m),M=S?kd(S):void 0;return{id:m,x:p.x,y:p.y,z:p.z,hitboxPositions:M??void 0}}):[];o.update(g,_,t.lastHitboxPositionsRaw??void 0),a.render(this.ctx.camera.getCamera())}}class FT{constructor(e){this.ctx=e}render(e){const{state:t,movement:n,camera:s,netClient:r,tracerSystem:o,impactSystem:a}=this.ctx,l=n.getSnapshot();YS(r.getRoom(),s.getCamera(),e);const c=r.getRoom(),h=c?c.state.players.get(c.sessionId):null,u=h?.shield??Rr,d=h?.maxShield??Rr,f=h?.health??gl,g=h?.maxHealth??gl,_=h?.ammo??Vd.ammo,m=h?.maxAmmo??Vd.maxAmmo,p=h?.id&&h.id.trim().length>0?h.id:c?.sessionId??"Player";if(CS(u,d,f,g,_,m,p,t.debugMode,n.getDashCooldownRemaining(),n.getDashCooldownTotal(),n.isDashing()),rM(e,u,Rr,f),KS(l.yaw,l.pitch,e,t.debugMode),IT(e),_M(e),o.update(e*1e3),a.update(e*1e3),this.ctx.debugOverlayEnabled){const S=c!==null?{connected:!0,playerCount:c.state.players.size}:{connected:!1,playerCount:0};JM(l.velocity,l.state,this.ctx.input.getState().sprint,S,t.debugMode,$S(),r.getPing(),t.debugMode?n.getGroundDebugInfo():void 0)}}}class BT{sceneManager;movement;playerAnimationSystem=null;playerTemplate=null;weaponTemplate3P=null;remotePlayerMeshes=new Map;remotePlayerMixers=new Map;remotePlayerWeaponContainers=new Map;lastShotTickSeen=new Map;remotePlayerMuzzleFlashes=new Map;muzzleFlashTextures=[];hasAppliedInitialSpawn=!1;lastHealthByPlayer=new Map;_handPos3p=new D;_handQuat3p=new sn;_offsetVec3p=new D;tracerSystem;impactSystem;constructor(e){this.sceneManager=e.sceneManager,this.movement=e.movement,this.playerAnimationSystem=e.playerAnimationSystem??null,this.tracerSystem=e.tracerSystem,this.impactSystem=e.impactSystem}onShot(e){if(!this.tracerSystem)return;const t=this.remotePlayerWeaponContainers.get(e.shooterId);if(!t)return;const n=new D;t.muzzleNode.getWorldPosition(n);const s=new D(e.dx,e.dy,e.dz).normalize(),r=new D(e.ox,e.oy,e.oz);let o=Be.tracerFirstPersonLength??20,a=null;if(e.hitX!==void 0&&e.hitY!==void 0&&e.hitZ!==void 0){a=new D(e.hitX,e.hitY,e.hitZ),o=n.distanceTo(a);const l=a.clone().sub(n).normalize();this.tracerSystem.spawnTracer(n,l,o)}else{const l=s;o=Be.tracerFirstPersonLength??20,this.tracerSystem.spawnTracer(n,l,o),a=r.clone().addScaledVector(s,o)}this.impactSystem&&a&&this.impactSystem.spawnImpact(a)}setPlayerAnimationSystem(e){this.playerAnimationSystem=e}setPlayerTemplate(e){this.playerTemplate=e}setWeaponTemplate3P(e){this.weaponTemplate3P=e}setMuzzleFlashTextures(e){this.muzzleFlashTextures=e}getRemotePlayerMeshes(){return this.remotePlayerMeshes}getThirdPersonWeaponCfg(e){const t=Be.thirdPersonWeaponOffsets[e];return t||{x:Be.thirdPersonWeaponOffset.x,y:Be.thirdPersonWeaponOffset.y,z:Be.thirdPersonWeaponOffset.z,rotX:Be.thirdPersonWeaponRotationX,rotY:Be.thirdPersonWeaponRotationY,rotZ:Be.thirdPersonWeaponRotationZ,scale:Be.thirdPersonWeaponScale}}addRemotePlayerMesh(e,t,n){if(e===t||this.remotePlayerMeshes.has(e))return;const s=this.sceneManager.getScene();let r;this.playerTemplate?(r=th(this.playerTemplate),r.updateMatrixWorld(!0),lh("orange").then(a=>{a&&hh(r,a)})):(r=Ur(),r.material.color.setHex(16737792)),r.position.set(n.x,n.y,n.z),r.rotation.set(0,n.yaw+Math.PI,0),s.add(r),this.remotePlayerMeshes.set(e,r);const o=new ko(r);if(this.playerAnimationSystem&&this.playerAnimationSystem.playClip(o,n.animationState||"idle"),this.remotePlayerMixers.set(e,o),this.weaponTemplate3P){const a=ET(r),l=this.weaponTemplate3P.clone(!0),c=l.getObjectByName("muzzle")??l.getObjectByName("Muzzle")??l,h=new Ht;if(h.add(l),s.add(h),l.traverse(u=>{u.frustumCulled=!1;const d=u;if(d.isMesh){const f=Array.isArray(d.material)?d.material:[d.material];for(const g of f)g&&"side"in g&&(g.side=hn)}}),this.remotePlayerWeaponContainers.set(e,{container:h,weaponScene:l,rightHandBone:a,muzzleNode:c}),this.lastShotTickSeen.set(e,0),this.muzzleFlashTextures.length>0){const u=new Fm({durationMs:Be.muzzleFlashDurationMs,scale:Be.muzzleFlashScale3P});u.setTextures(this.muzzleFlashTextures),this.remotePlayerMuzzleFlashes.set(e,u)}}}removeRemotePlayerMesh(e){const t=this.sceneManager.getScene(),n=this.remotePlayerMeshes.get(e),s=this.remotePlayerMixers.get(e);n&&(t.remove(n),this.remotePlayerMeshes.delete(e)),s&&(s.stopAllAction(),this.remotePlayerMixers.delete(e));const r=this.remotePlayerWeaponContainers.get(e);r&&(t.remove(r.container),this.remotePlayerWeaponContainers.delete(e)),this.lastShotTickSeen.delete(e);const o=this.remotePlayerMuzzleFlashes.get(e);o&&(o.dispose(),this.remotePlayerMuzzleFlashes.delete(e))}setup(e){const t=e.sessionId,n=(r,o)=>{this.addRemotePlayerMesh(o,t,r)},s=(r,o)=>{this.removeRemotePlayerMesh(o)};e.state.players.onAdd(n,!0),e.state.players.onRemove(s)}syncLocalSpawnFromServer(e){const t=e.state.players.get(e.sessionId);if(!t)return;const n=this.movement;n.position.x=t.x,n.position.y=t.y,n.position.z=t.z,n.velocity.x=t.vx,n.velocity.y=t.vy,n.velocity.z=t.vz,n.yaw=t.yaw,n.pitch=t.pitch,this.hasAppliedInitialSpawn=!0}waitForLocalSpawnAndSync(e){return e.state.players.get(e.sessionId)?(this.syncLocalSpawnFromServer(e),Promise.resolve()):new Promise(n=>{const s=(o,a)=>{a===e.sessionId&&(r(),this.syncLocalSpawnFromServer(e),n())},r=e.state.players.onAdd(s,!0)})}reconcile(e){if(!e)return;const t=e.state.players.get(e.sessionId);if(!t)return;const n=this.movement;if(!this.hasAppliedInitialSpawn){this.syncLocalSpawnFromServer(e);return}const s=t.x-n.position.x,r=t.y-n.position.y,o=t.z-n.position.z,a=Math.sqrt(s*s+r*r+o*o),{reconcileMin:l,reconcileYMin:c,reconcileThreshold:h,reconcileLerp:u,reconcileLerpGentle:d}=Be.tuning;if(a<=l)return;const f=a>=h?u:d,_=n.getSnapshot().state==="airborne",m=t.y<=.02,p=Math.abs(r)<c,S=_&&m||p;n.position.x+=s*f,n.position.z+=o*f,S||(n.position.y+=r*f,n.velocity.y+=(t.vy-n.velocity.y)*f),n.velocity.x+=(t.vx-n.velocity.x)*f,n.velocity.z+=(t.vz-n.velocity.z)*f,n.yaw+=((t.yaw-n.yaw+Math.PI)%(2*Math.PI)-Math.PI)*f,n.pitch+=(t.pitch-n.pitch)*f}update(e,t){if(!e)return;const n=e.sessionId,s=1-Math.exp(-t/Be.tuning.remoteInterpTau);e.state.players.forEach((l,c)=>{if(c===n)return;let h=this.remotePlayerMeshes.get(c);if(h||(this.addRemotePlayerMesh(c,n,l),h=this.remotePlayerMeshes.get(c)),h){const u=this.lastHealthByPlayer.get(c),d=u!==void 0&&u<=0&&l.health>0;h.visible=l.health>0;const f=this.remotePlayerWeaponContainers.get(c);if(f&&(f.container.visible=h.visible),h.visible){if(d){h.position.set(l.x,l.y,l.z);const _=l.yaw+Math.PI;h.rotation.set(0,_,0)}else{h.position.x+=(l.x-h.position.x)*s,h.position.y+=(l.y-h.position.y)*s,h.position.z+=(l.z-h.position.z)*s;const m=(l.yaw+Math.PI-h.rotation.y+Math.PI)%(2*Math.PI)-Math.PI;h.rotation.y+=m*s}const g=this.remotePlayerMixers.get(c);if(g&&this.playerAnimationSystem){const _=l.animationState||"idle",m={};_==="jump"&&(m.vy=l.vy),l.animationTimeScale!==1&&(m.timeScale=l.animationTimeScale),this.playerAnimationSystem.playClip(g,_,Object.keys(m).length?m:void 0)}if(f){h.updateMatrixWorld(!0);const _=f.rightHandBone,m=this.getThirdPersonWeaponCfg(l.animationState||"idle"),p=Be.thirdPersonWeaponGripOffset;_?(_.getWorldPosition(this._handPos3p),_.getWorldQuaternion(this._handQuat3p),this._offsetVec3p.set(m.x,m.y,m.z).applyQuaternion(this._handQuat3p),f.container.position.copy(this._handPos3p).add(this._offsetVec3p),f.container.quaternion.copy(this._handQuat3p)):(h.getWorldPosition(this._handPos3p),h.getWorldQuaternion(this._handQuat3p),this._offsetVec3p.set(.3,.5,0).applyQuaternion(this._handQuat3p),f.container.position.copy(this._handPos3p).add(this._offsetVec3p),f.container.quaternion.copy(this._handQuat3p)),f.weaponScene.position.set(p.x,p.y,p.z),f.weaponScene.rotation.set(Math.PI/2+m.rotX,m.rotY,m.rotZ),f.weaponScene.scale.setScalar(m.scale);const S=this.lastShotTickSeen.get(c)??0;if(l.lastShotTick>S){this.lastShotTickSeen.set(c,l.lastShotTick);const M=this.remotePlayerMuzzleFlashes.get(c);M&&M.trigger(f.muzzleNode)}}}this.lastHealthByPlayer.set(c,l.health)}});const r=t*1e3;this.remotePlayerMuzzleFlashes.forEach(l=>l.update(r));const o=[],a=new Set;e.state.players.forEach((l,c)=>a.add(String(c))),this.remotePlayerMeshes.forEach((l,c)=>{a.has(String(c))||o.push(c)}),o.forEach(l=>this.removeRemotePlayerMesh(l))}updateRemoteMixers(e){this.remotePlayerMixers.forEach(t=>t.update(e))}}function zT(i,e){const t=document.createElement("div");t.id="pause-menu-overlay",t.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 9000;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.6);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  `;const n=document.createElement("div");n.style.cssText=`
    min-width: 340px;
    padding: 24px 32px;
    background: rgba(8,8,16,0.95);
    border-radius: 10px;
    border: 1px solid rgba(120,220,255,0.5);
    box-shadow: 0 18px 40px rgba(0,0,0,0.6);
    color: #e0f7ff;
    text-align: center;
  `;const s=document.createElement("div");s.textContent="Paused",s.style.cssText=`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 18px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #8cf;
  `,n.appendChild(s);const r=document.createElement("div");r.style.cssText=`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 6px;
  `;function o(a,l){const c=document.createElement("button");return c.textContent=a,c.type="button",c.style.cssText=`
      padding: 10px 16px;
      font-size: 15px;
      border-radius: 6px;
      border: 1px solid rgba(120,220,255,0.6);
      background: linear-gradient(135deg, rgba(18,30,50,0.95), rgba(14,18,30,0.98));
      color: #e0f7ff;
      cursor: pointer;
    `,c.addEventListener("click",h=>{h.preventDefault(),l()}),c}return r.appendChild(o("Resume Game",e.onResume)),r.appendChild(o("Go back to lobby",e.onBackToLobby)),r.appendChild(o("Settings",e.onOpenSettings)),n.appendChild(r),t.appendChild(n),i.appendChild(t),{show:()=>{t.style.display="flex"},hide:()=>{t.style.display="none"}}}const km="browsershooter:performanceSettings";let Xm=kT();function kT(){if(typeof window>"u")return{renderScale:1,aaEnabled:!1,bulletTracersEnabled:!0,duelLampsEnabled:!0};try{const i=window.localStorage.getItem(km);if(!i)return{renderScale:1,aaEnabled:!1,bulletTracersEnabled:!0,duelLampsEnabled:!0};const e=JSON.parse(i),t=e&&typeof e.renderScale=="number"&&e.renderScale>0?e.renderScale:1,n=!!e?.aaEnabled,s=e&&typeof e.bulletTracersEnabled=="boolean"?e.bulletTracersEnabled:!0,r=e&&typeof e.duelLampsEnabled=="boolean"?e.duelLampsEnabled:!0;return{renderScale:t,aaEnabled:n,bulletTracersEnabled:s,duelLampsEnabled:r}}catch{return{renderScale:1,aaEnabled:!1,bulletTracersEnabled:!0,duelLampsEnabled:!0}}}function XT(i){if(!(typeof window>"u"))try{window.localStorage.setItem(km,JSON.stringify(i))}catch{}}function Hm(){return{...Xm}}function HT(i){const e={renderScale:Number.isFinite(i.renderScale)&&i.renderScale>0?i.renderScale:1,aaEnabled:!!i.aaEnabled,bulletTracersEnabled:typeof i.bulletTracersEnabled=="boolean"?i.bulletTracersEnabled:!0,duelLampsEnabled:typeof i.duelLampsEnabled=="boolean"?i.duelLampsEnabled:!0};Xm=e,XT(e)}const Ym="browsershooter:inputSettings";let wl=YT();function YT(){if(typeof window>"u")return{mouseSensitivity:1};try{const i=window.localStorage.getItem(Ym);if(!i)return{mouseSensitivity:1};const e=JSON.parse(i);return{mouseSensitivity:e&&typeof e.mouseSensitivity=="number"?e.mouseSensitivity:1}}catch{return{mouseSensitivity:1}}}function VT(i){if(!(typeof window>"u"))try{window.localStorage.setItem(Ym,JSON.stringify(i))}catch{}}function Vm(){return{...wl}}function GT(i){wl={mouseSensitivity:typeof i.mouseSensitivity=="number"&&Number.isFinite(i.mouseSensitivity)?Math.max(.2,Math.min(3,i.mouseSensitivity)):1},VT(wl)}var Gm=(i=>(i.Performance="performance",i.Keyboard="keyboard",i.Mouse="mouse",i))(Gm||{});function ZT(i,e){const t=document.createElement("div");t.id="settings-menu-overlay",t.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 9050;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.7);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  `;const n=document.createElement("div");n.style.cssText=`
    width: 480px;
    min-height: 260px;
    padding: 20px 24px 22px;
    background: rgba(8,10,18,0.97);
    border-radius: 10px;
    border: 1px solid rgba(130,200,255,0.6);
    box-shadow: 0 20px 45px rgba(0,0,0,0.65);
    color: #e4f5ff;
  `;const s=document.createElement("div");s.style.cssText=`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  `;const r=document.createElement("div");r.textContent="Settings",r.style.cssText=`
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #8bd3ff;
  `;const o=document.createElement("button");o.type="button",o.textContent="Back",o.style.cssText=`
    padding: 6px 12px;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid rgba(140,200,255,0.8);
    background: rgba(8,12,20,0.98);
    color: #e4f5ff;
    cursor: pointer;
  `,o.addEventListener("click",re=>{re.preventDefault(),e.onClose()}),s.appendChild(r),s.appendChild(o),n.appendChild(s);const a=document.createElement("div");a.style.cssText=`
    display: flex;
    gap: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    margin-bottom: 12px;
  `;function l(re){const de=document.createElement("button");return de.type="button",de.textContent=re,de.style.cssText=`
      padding: 6px 10px 8px;
      font-size: 13px;
      border: none;
      border-bottom: 2px solid transparent;
      background: transparent;
      color: #b0d9ff;
      cursor: pointer;
    `,de}const c=l("Performance"),h=l("Keyboard"),u=l("Mouse");a.appendChild(c),a.appendChild(h),a.appendChild(u),n.appendChild(a);const d=document.createElement("div");d.style.cssText=`
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,n.appendChild(d);const f=document.createElement("div");f.style.cssText=`
    margin-top: 10px;
    font-size: 12px;
    color: #8bd3ff;
    opacity: 0;
    transition: opacity 0.2s ease-out;
    text-align: right;
  `,n.appendChild(f);let g;function _(re){f.textContent=re,f.style.opacity="1",g!==void 0&&window.clearTimeout(g),g=window.setTimeout(()=>{f.style.opacity="0"},1400)}const m=document.createElement("div");m.style.cssText=`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `;const p=document.createElement("div");p.style.cssText=`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  `;const S=document.createElement("div");S.textContent="Render scale",S.style.cssText=`
    font-size: 14px;
    color: #c7e3ff;
  `;const M=document.createElement("select");M.style.cssText=`
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid rgba(130,190,255,0.6);
    background: #05070c;
    color: #e4f5ff;
    font-size: 13px;
  `;const T=[{label:"100%",value:1},{label:"80%",value:.8},{label:"60%",value:.6}];T.forEach(re=>{const de=document.createElement("option");de.value=String(re.value),de.textContent=re.label,M.appendChild(de)}),p.appendChild(S),p.appendChild(M),m.appendChild(p);const I=document.createElement("div");I.style.cssText=`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;const P=document.createElement("div");P.textContent="MSAA antialiasing",P.style.cssText=`
    font-size: 14px;
    color: #c7e3ff;
  `;const R=document.createElement("input");R.type="checkbox",R.style.cssText=`
    width: 16px;
    height: 16px;
  `,I.appendChild(P),I.appendChild(R),m.appendChild(I);const O=document.createElement("div");O.style.cssText=`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;const j=document.createElement("div");j.textContent="Bullet tracers",j.style.cssText=`
    font-size: 14px;
    color: #c7e3ff;
  `;const E=document.createElement("input");E.type="checkbox",E.style.cssText=`
    width: 16px;
    height: 16px;
  `,O.appendChild(j),O.appendChild(E),m.appendChild(O);const C=document.createElement("div");C.style.cssText=`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;const Y=document.createElement("div");Y.textContent="Arena lamps (1v1 / 1v1 Ref)",Y.style.cssText=`
    font-size: 14px;
    color: #c7e3ff;
  `;const V=document.createElement("input");V.type="checkbox",V.style.cssText=`
    width: 16px;
    height: 16px;
  `,C.appendChild(Y),C.appendChild(V),m.appendChild(C);const Z=document.createElement("div");Z.style.cssText=`
    display: flex;
    justify-content: flex-end;
    margin-top: 6px;
  `;const q=document.createElement("button");q.type="button",q.textContent="Apply",q.style.cssText=`
    padding: 7px 14px;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid rgba(140,220,255,0.9);
    background: linear-gradient(135deg, #0d1a28, #14314a);
    color: #e4f5ff;
    cursor: pointer;
  `,q.addEventListener("click",re=>{re.preventDefault();const ge={renderScale:Number(M.value)||1,aaEnabled:R.checked,bulletTracersEnabled:E.checked,duelLampsEnabled:V.checked};e.onApplyPerformance(ge),_("Performance changes applied")}),Z.appendChild(q),m.appendChild(Z);const H=document.createElement("div");H.style.cssText=`
    display: none;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    color: #c7e3ff;
  `;const K=document.createElement("div");K.textContent="Keyboard bindings are currently fixed (WASD, Space, C, R). Custom keybinds will be added later.",H.appendChild(K);const G=document.createElement("div");G.style.cssText=`
    display: none;
    flex-direction: column;
    gap: 12px;
  `;const se=document.createElement("div");se.style.cssText=`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  `;const le=document.createElement("div");le.textContent="Mouse sensitivity",le.style.cssText=`
    font-size: 14px;
    color: #c7e3ff;
  `;const xe=document.createElement("span");xe.style.cssText=`
    font-size: 13px;
    color: #9fd0ff;
    margin-left: 8px;
  `;const ae=document.createElement("input");ae.type="range",ae.min="0.5",ae.max="2",ae.step="0.1",ae.style.cssText=`
    flex: 1;
    margin-left: 16px;
  `;const Xe=document.createElement("div");Xe.style.cssText=`
    display: flex;
    align-items: center;
    flex: 1;
  `,Xe.appendChild(ae),Xe.appendChild(xe),se.appendChild(le),se.appendChild(Xe),G.appendChild(se);const J=document.createElement("div");J.style.cssText=`
    display: flex;
    justify-content: flex-end;
    margin-top: 6px;
  `;const oe=document.createElement("button");oe.type="button",oe.textContent="Apply",oe.style.cssText=`
    padding: 7px 14px;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid rgba(140,220,255,0.9);
    background: linear-gradient(135deg, #0d1a28, #14314a);
    color: #e4f5ff;
    cursor: pointer;
  `,oe.addEventListener("click",re=>{re.preventDefault();const ge={mouseSensitivity:Number(ae.value)||1};e.onApplyMouse(ge),_("Mouse settings applied")}),J.appendChild(oe),G.appendChild(J),d.appendChild(m),d.appendChild(H),d.appendChild(G);function ve(){const re=Hm(),de=T.reduce((N,je)=>{const De=Math.abs(N.value-re.renderScale);return Math.abs(je.value-re.renderScale)<De?je:N},T[0]);M.value=String(de.value),R.checked=re.aaEnabled,E.checked=typeof re.bulletTracersEnabled=="boolean"?re.bulletTracersEnabled:!0,V.checked=typeof re.duelLampsEnabled=="boolean"?re.duelLampsEnabled:!0;const ge=Vm(),Pe=Math.max(.5,Math.min(2,ge.mouseSensitivity||1));ae.value=String(Pe),xe.textContent=`${Pe.toFixed(1)}x`}function me(){for(const re of[c,h,u])re.style.borderBottomColor="transparent",re.style.color="#b0d9ff";m.style.display="none",H.style.display="none",G.style.display="none"}function Fe(re){me(),re==="performance"?(c.style.borderBottomColor="#8bd3ff",c.style.color="#e4f5ff",m.style.display="flex"):re==="keyboard"?(h.style.borderBottomColor="#8bd3ff",h.style.color="#e4f5ff",H.style.display="flex"):re==="mouse"&&(u.style.borderBottomColor="#8bd3ff",u.style.color="#e4f5ff",G.style.display="flex")}return c.addEventListener("click",re=>{re.preventDefault(),Fe("performance")}),h.addEventListener("click",re=>{re.preventDefault(),Fe("keyboard")}),u.addEventListener("click",re=>{re.preventDefault(),Fe("mouse")}),t.appendChild(n),i.appendChild(t),{show:re=>{ve(),t.style.display="flex",Fe(re??"performance")},hide:()=>{t.style.display="none"}}}const WT=.01,$T=new D(0,1,0);class jT{tracers=[];enabled=!0;shotCounter=0;config;lineRadius;lastTracer=null;constructor(e,t){this.config=t,this.lineRadius=Math.max(.001,t.lineRadius??WT);const n=Math.max(1,t.maxTracers|0),s=new kr(1,1,1,6);for(let r=0;r<n;r++){const o=new Cn({color:t.color,transparent:!0,opacity:.7,depthWrite:!1,blending:Cr}),a=new vt(s,o);a.visible=!1,e.add(a),this.tracers.push({mesh:a,material:o,start:new D,dir:new D(0,0,1),fullLength:0,active:!1,remainingMs:0})}}setEnabled(e){if(this.enabled=e,!e)for(const t of this.tracers)t.active=!1,t.remainingMs=0,t.mesh.visible=!1}setTracerMesh(e,t){const n=this.lineRadius;e.mesh.position.copy(e.start).addScaledVector(e.dir,t*.5),e.mesh.scale.set(n*2,t,n*2),e.mesh.quaternion.setFromUnitVectors($T,e.dir),e.mesh.visible=!0}spawnTracer(e,t,n){if(!this.enabled)return;const s=this.config.everyNthShot;if(this.shotCounter++,s>1&&this.shotCounter%s!==0)return;const r=t instanceof D?t.clone():new D(t.x,t.y,t.z);if(r.length()===0||n<=0)return;const a=e instanceof D?e.clone():new D(e.x,e.y,e.z),l=r.normalize();let c=this.tracers.find(h=>!h.active);c||(c=this.tracers[0]),c.start.copy(a),c.dir.copy(l),c.fullLength=n,c.active=!0,c.remainingMs=this.config.lifetimeMs,this.setTracerMesh(c,n),c.material.opacity=.8,this.lastTracer=c}retargetLast(e,t,n){if(!this.enabled)return;const s=this.lastTracer;if(!s||!s.active)return;const r=t instanceof D?t.clone():new D(t.x,t.y,t.z);if(r.length()===0||n<=0)return;const a=e instanceof D?e.clone():new D(e.x,e.y,e.z);s.start.copy(a),s.dir.copy(r.normalize()),s.fullLength=n,s.remainingMs=Math.max(s.remainingMs,this.config.lifetimeMs*.4),this.setTracerMesh(s,n)}update(e){if(this.enabled)for(const t of this.tracers){if(!t.active)continue;t.remainingMs-=e;const n=Math.max(0,t.remainingMs)/this.config.lifetimeMs,s=t.fullLength*n;this.setTracerMesh(t,s);const r=n*n;t.material.opacity=.8*r,t.remainingMs<=0&&(t.active=!1,t.mesh.visible=!1)}}}class qT{impacts=[];config;constructor(e,t){this.config=t;const s=(()=>{if(typeof document>"u")return null;const a=64,l=document.createElement("canvas");l.width=a,l.height=a;const c=l.getContext("2d");if(!c)return null;c.fillStyle="rgba(0, 0, 0, 0)",c.fillRect(0,0,a,a);const h=a/2,u=a/2,d=a*.42,f=c.createRadialGradient(h,u,0,h,u,d);f.addColorStop(0,"rgba(255, 252, 240, 1)"),f.addColorStop(.35,"rgba(255, 230, 180, 0.95)"),f.addColorStop(.7,"rgba(255, 180, 100, 0.4)"),f.addColorStop(1,"rgba(255, 120, 50, 0)"),c.fillStyle=f,c.beginPath(),c.arc(h,u,d,0,Math.PI*2),c.fill(),c.strokeStyle="rgba(255, 248, 220, 0.95)",c.lineWidth=2;const g=8,_=d*.25,m=d*1.05;for(let S=0;S<g;S++){const M=S/g*Math.PI*2,T=h+Math.cos(M)*_,I=u+Math.sin(M)*_,P=h+Math.cos(M)*m,R=u+Math.sin(M)*m;c.beginPath(),c.moveTo(T,I),c.lineTo(P,R),c.stroke()}const p=new Zl(l);return p.format=dn,p.premultiplyAlpha=!1,p.center.set(.5,.5),p.needsUpdate=!0,p})(),r=new Yl({map:s,color:t.color,transparent:!0,opacity:.9,depthWrite:!1,blending:Cr,alphaTest:.12}),o=Math.max(1,t.maxImpacts|0);for(let a=0;a<o;a++){const l=new wf(r.clone());l.scale.set(t.size,t.size,1),l.visible=!1,e.add(l),this.impacts.push({sprite:l,active:!1,remainingMs:0})}}spawnImpact(e){const t=e instanceof D?e.clone():new D(e.x,e.y,e.z);let n=this.impacts.find(s=>!s.active);n||(n=this.impacts[0]),n.sprite.position.copy(t),n.sprite.visible=!0,n.remainingMs=this.config.lifetimeMs,n.active=!0,n.sprite.material.opacity=.9}update(e){for(const t of this.impacts){if(!t.active)continue;t.remainingMs-=e;const n=Math.max(0,t.remainingMs)/this.config.lifetimeMs,s=t.sprite.material;s.opacity=.9*n,t.remainingMs<=0&&(t.active=!1,t.sprite.visible=!1)}}}function KT(i,e,t,n,s,r,o,a){const l=(i+e)/2,c=(t+n)/2,h=(s+r)/2,u=(I,P,R)=>[I-l,P-c,R-h];let d,f,g,_,m,p;o==="z"?a?(d=u(i,n,s),f=u(e,n,s),g=u(e,t,r),_=u(i,t,r),m=u(i,t,s),p=u(e,t,s)):(d=u(i,t,s),f=u(e,t,s),g=u(e,t,r),_=u(i,t,r),m=u(i,n,r),p=u(e,n,r)):a?(d=u(e,t,s),f=u(e,t,r),g=u(i,t,r),_=u(i,t,s),m=u(i,n,r),p=u(i,n,s)):(d=u(i,t,s),f=u(i,t,r),g=u(e,t,r),_=u(e,t,s),m=u(e,n,r),p=u(e,n,s));const S=new Float32Array([...d,...f,...g,..._,...m,...p]),M=new Uint16Array([0,1,2,0,2,3,0,1,5,0,5,4,0,3,4,1,2,5,2,3,4,2,4,5]),T=new Dt;return T.setAttribute("position",new bt(S,3)),T.setIndex(new bt(M,1)),T.computeVertexNormals(),T}function JT(i){if(i.rampAxis!=null&&i.rampInverted!==void 0)return"ramp";const e=i.maxY-i.minY<.5;return e&&i.minY>4?"ceiling":e?"floor":"wall"}function Tc(i){const{baseR:e,baseG:t,baseB:n,panelSize:s,seamR:r,seamG:o,seamB:a,panelShadeVariation:l}=i,c=256,h=document.createElement("canvas");h.width=c,h.height=c;const u=h.getContext("2d"),d=u.createImageData(c,c),f=d.data;for(let _=0;_<c;_++)for(let m=0;m<c;m++){const p=Math.floor(m/s),S=Math.floor(_/s),M=m%s===0,T=_%s===0,I=M||T,P=(p+S)%2===0?1:1-l,R=(_*c+m)*4;I?(f[R+0]=r,f[R+1]=o,f[R+2]=a):(f[R+0]=Math.round(Math.max(0,Math.min(255,e*P))),f[R+1]=Math.round(Math.max(0,Math.min(255,t*P))),f[R+2]=Math.round(Math.max(0,Math.min(255,n*P)))),f[R+3]=255}u.putImageData(d,0,0);const g=new Zl(h);return g.wrapS=g.wrapT=ji,g.repeat.set(1.2,1.2),g.needsUpdate=!0,g}function QT(){const i={panelSize:64,seamR:82,seamG:88,seamB:98,panelShadeVariation:.06},e=Tc({...i,baseR:228,baseG:232,baseB:240}),t=Tc({...i,baseR:218,baseG:224,baseB:235}),n=Tc({...i,baseR:212,baseG:218,baseB:230}),s=new _n({map:e,color:16777215,roughness:.65,metalness:.2}),r=new _n({map:t,color:16777215,roughness:.55,metalness:.28}),o=new _n({map:e,color:16777215,roughness:.65,metalness:.2,side:hn}),a=new _n({map:n,color:16777215,roughness:.55,metalness:.28});return{floor:s,wall:r,ramp:o,ceiling:a}}const Yt=document.getElementById("app");if(!Yt)throw new Error("No #app");const Nn=document.createElement("canvas");Yt.appendChild(Nn);const Gd=new URLSearchParams(window.location.search).get("tuner"),eA=new URLSearchParams(window.location.search).get("editor");if(Gd==="1")ma(()=>import("./TunerBoot-DCmbATzY.js"),__vite__mapDeps([0,1])).then(i=>i.bootTuner(Yt,Nn));else if(Gd==="3p")ma(()=>import("./Tuner3PBoot-DxOwSdc5.js"),__vite__mapDeps([2,1])).then(i=>i.bootTuner3P(Yt,Nn));else if(eA==="1")ma(()=>import("./main-DAM7513V.js"),[]).then(i=>i.bootEditor(Yt,{initViewmodel:async e=>{const t=await Rd(Be.playerModelUrl),n={getCamera:()=>e},s=await Ud(t.scene,t.animations,n),r=new ra(Be.animationClipNames);r.init(s.viewmodelAnimations);const o=new ko(s.viewmodelModel);return{viewmodelState:s.viewmodelState,updateViewmodelFrame:Bm,updateViewmodelAnimation(a){r.playStaticIdlePose(o),o.update(a)}}}}));else{let i=function(){const ae=Nn.clientWidth||window.innerWidth,Xe=Nn.clientHeight||window.innerHeight;return{w:ae,h:Xe}},e=function(){m.disconnect()},t=function(ae){M=ae},n=function(){M!=="paused"&&(!T&&Yt&&(T=zT(Yt,{onResume:()=>s(),onBackToLobby:()=>{m.disconnect(),window.location.reload()},onOpenSettings:()=>r()})),T?.show(),I?.hide(),t("paused"),f.isPointerLocked()&&document.exitPointerLock())},s=function(){M!=="playing"&&(T?.hide(),I?.hide(),t("playing"),f.requestPointerLock(Nn))},r=function(){!I&&Yt&&(I=ZT(Yt,{onClose:()=>{M==="settings"&&n()},onApplyPerformance:ae=>{HT(ae),c.setPerformance(ae),h.setEnabled(ae.bulletTracersEnabled),P&&(P.visible=ae.duelLampsEnabled)},onApplyMouse:ae=>{GT(ae),f.setMouseSensitivity(ae.mouseSensitivity)}})),I?.show(Gm.Performance),T?.hide(),t("settings")};const{w:o,h:a}=i(),l=Hm(),c=new TS(Nn,{antialias:l.aaEnabled,renderScale:l.renderScale}),h=new jT(c.getScene(),{maxTracers:32,lifetimeMs:Be.tracerMaxLifetimeMs,color:Be.tracerColor,everyNthShot:Be.tracerEveryNthShot,lineRadius:Be.tracerLineRadius}),u=new qT(c.getScene(),{maxImpacts:32,lifetimeMs:Be.tracerImpactLifetimeMs,color:Be.tracerColor,size:Be.tracerImpactSize});h.setEnabled(l.bulletTracersEnabled??Be.tracerEnabledDefault);const d=new SS(90,o/a||16/9,.1,1e3);c.getScene().add(d.getCamera()),c.resize(o,a),d.resize(o,a);const f=new yS,g=Vm();f.setMouseSensitivity(g.mouseSensitivity),f.requestPointerLock(Nn);const _=new ES,m=new wE,p=new BT({sceneManager:c,movement:_,tracerSystem:h,impactSystem:u});window.addEventListener("beforeunload",ae=>{e(),f.isPointerLocked()&&(ae.preventDefault(),ae.returnValue="")}),window.addEventListener("pagehide",e),Nn.addEventListener("mousedown",ae=>ae.button===0&&f.setShoot(!0)),Nn.addEventListener("mouseup",ae=>ae.button===0&&f.setShoot(!1)),vM(Yt),RS(Yt),XS(Yt),jS(Yt),CT(Yt),sM(Yt),pM(Yt),Be.debugOverlay&&KM(Yt);let S;(ae=>{ae.Playing="playing",ae.Paused="paused",ae.Settings="settings"})(S||(S={}));let M="playing",T=null,I=null,P=null;window.addEventListener("keydown",ae=>{ae.code==="Escape"&&(M==="playing"?(ae.preventDefault(),n()):M==="paused"?(ae.preventDefault(),s()):M==="settings"&&(ae.preventDefault(),n()))});const R=new sE(c.getScene()),O={raycast:()=>!1},j=new mS,E=new pS,Y={state:_T(Vs),getIsPlaying:()=>M==="playing",input:f,movement:_,camera:d,physics:O,netClient:m,remotePlayerSync:p,sceneManager:c,tracerSystem:h,impactSystem:u,debugHitboxes:R,crouchTransitionTau:Be.tuning.crouchTransitionTau,tracerFirstPersonLength:Be.tracerFirstPersonLength??20,debugOverlayEnabled:!!Be.debugOverlay,localPlayerMixer:null,playerViewModel:null,viewmodelState:null,hitboxDummy:null,hitboxDummyMixer:null,muzzleFlashPov:null};let V=null,Z=null,q=null,H=null,K,G=null,se=null,le=null;async function xe(){qn("Loading characters and arena…",15);const ae=await Rd(Be.playerModelUrl);H=ae.scene;const Xe=ae.animations,J=await Ud(H,Xe,d);V=J.viewmodelState.playerViewModel,Z=J.viewmodelState,qn("Loading characters and arena…",40),K=new ra(Be.animationClipNames),K.init(J.viewmodelAnimations),p.setPlayerTemplate(H),p.setWeaponTemplate3P(J.weaponTemplate3P),p.setPlayerAnimationSystem(K);const oe=await dT(Be.muzzleFlashUrls);if(le=new Fm({durationMs:Be.muzzleFlashDurationMs,scale:Be.muzzleFlashScalePov}),le.setTextures(oe),p.setMuzzleFlashTextures(oe),J.viewmodelAnimations.length>0&&(q=new ko(J.viewmodelModel),K.playStaticIdlePose(q)),H){const ve=th(H);ve.visible=!1,c.getScene().add(ve),G=ve,Xe.length>0&&(se=new ko(ve),K.playStaticIdlePose(se))}Y.playerAnimationSystem=K,Y.viewmodelState=Z,Y.localPlayerMixer=q,Y.playerViewModel=V,Y.hitboxDummy=G,Y.hitboxDummyMixer=se,Y.muzzleFlashPov=le}E.addTickSystem(new DT(Y)),E.addTickSystem(new NT(Y)),E.addRenderSystem(new OT(Y)),E.addRenderSystem(new UT(Y)),E.addRenderSystem(new FT(Y)),j.setTickCallback(ae=>{E.update(ae)}).setRenderCallback(ae=>{E.render(ae)}),window.addEventListener("resize",()=>{const{w:ae,h:Xe}=i();d.resize(ae,Xe),c.resize(ae,Xe)}),xe().then(async()=>{const ae=typeof window<"u"?new URLSearchParams(window.location.search).get("room")?.toLowerCase():null,Xe=ae==="1v1"||ae==="arena_1v1"?"arena_1v1":ae==="1v1_ref"||ae==="arena_1v1_ref"?"arena_1v1_ref":ae==="ffa"||ae==="arena_ffa"?"arena_ffa":Be.roomName,J=Xe==="arena_1v1_ref";if(Xe==="arena_1v1"||J){qn("Loading duel arena…",55);const de=J?R1():b1(),ge=new Ht,Pe=QT();for(const Te of de.blocks){const Oe=(Te.minX+Te.maxX)/2,lt=(Te.minY+Te.maxY)/2,He=(Te.minZ+Te.maxZ)/2,L=JT(Te),$=L==="ramp"?KT(Te.minX,Te.maxX,Te.minY,Te.maxY,Te.minZ,Te.maxZ,Te.rampAxis,Te.rampInverted):new ci(Te.maxX-Te.minX,Te.maxY-Te.minY,Te.maxZ-Te.minZ),ie=L==="ramp"?Pe.ramp:L==="floor"?Pe.floor:L==="ceiling"?Pe.ceiling:Pe.wall,he=new vt($,ie);he.position.set(Oe,lt,He),he.castShadow=!1,he.receiveShadow=!0,ge.add(he)}const N=new Ht,je=11176191,De=[[20.490659578661653,5.65,18.48239626579279],[17.641128024397815,5.65,.0367070548557625],[18.03684834366855,5.65,-12.737097335087755],[-.1407457458905403,11.65,7.738486140792297],[3.723808311784971,11.65,.6080742346658519],[-3.7610099774199957,11.65,.618005956039425],[.1729123650605257,11.65,-6.62643190136915],[-17.21381269681255,5.65,-.2258076396672953],[-19.465686589104074,5.65,17.67060638650029],[-18.076036525254224,5.65,-13.482203455746449],[.05906777363913374,4.576719884817777,19.9],[.06647359374698025,-1.3213083998510213,-19.9],[.0262903965857183,.9261021268136503,-19.9],[-.31377494162787073,-.35,-12.634181531820634],[-.2925846268465414,-.35,-2.3106685073100692],[-.1048362887723721,-.35,16.770803853594426]];for(const[Te,Oe,lt]of De){const He=new Jl(je,5,14,2);He.position.set(Te,Oe,lt),N.add(He)}ge.add(N),P=N,P.visible=l.duelLampsEnabled??!0,c.setDefaultArenaVisible(!1),c.setMapGroup(ge),_.setStaticWorld(de)}else{qn("Loading map…",55);try{const de=await jM("/maps/arena_blockout.json");c.setDefaultArenaVisible(!1),c.setMapGroup(de.group),_.setStaticWorld(de.staticWorld)}catch(de){console.warn("Failed to load map JSON, using built-in arena.",de)}}qn("Connecting to server…",60);const ve=Be.serverUrl;console.info("[Colyseus] Connecting to",ve);const me=3;let Fe=!1;for(let de=1;de<=me;de++)try{m.connect(ve),Fe=await m.joinOrCreate(Xe);break}catch(ge){const Pe=ge instanceof ProgressEvent&&(ge.type==="error"||!ge.lengthComputable);if(console.warn("[Colyseus] joinOrCreate failed (attempt "+de+"/"+me+"):",ge),de<me&&Pe){qn("Server not ready, retrying in 2s… ("+de+"/"+me+")",60),await new Promise(je=>setTimeout(je,2e3));continue}const N=Pe?"Server not reachable (port 2567). Start with: npm run dev or npm run prod":ge instanceof Error?ge.message:String(ge);qn(N,60),await new Promise(je=>setTimeout(je,3e3));break}if(!Fe)console.warn(`Could not join ${Xe} – playing offline`);else{qn("Joining arena…",85);const de=m.getRoom();de&&(p.setup(de),de.onMessage("hit",ge=>{if(HS(ge.targetId),gM(),ge.hitX!==void 0&&ge.hitY!==void 0&&ge.hitZ!==void 0){u.spawnImpact({x:ge.hitX,y:ge.hitY,z:ge.hitZ});return}const Pe=de.state.players.get(ge.targetId);if(Pe){const N=ge.hitboxType==="head"?ih:Gf*.5;u.spawnImpact({x:Pe.x,y:Pe.y+N,z:Pe.z})}}),de.onMessage("hitReceived",ge=>{if(qS(ge.dirX,ge.dirY,ge.dirZ),ge.hitX!==void 0&&ge.hitY!==void 0&&ge.hitZ!==void 0)u.spawnImpact({x:ge.hitX,y:ge.hitY,z:ge.hitZ});else{const N=d.getCamera().position.clone(),je=new D(ge.dirX,ge.dirY,ge.dirZ).normalize();u.spawnImpact(N.clone().addScaledVector(je,1))}}),de.onMessage("kill",ge=>{PT(de,ge),de.sessionId===ge.killerId&&xM()}),de.onMessage("shot",ge=>{if(p.onShot(ge),ge.shooterId===de.sessionId&&ge.hitX!==void 0&&ge.hitY!==void 0&&ge.hitZ!==void 0){const Pe=new D(ge.hitX,ge.hitY,ge.hitZ);if(Z?.muzzleNodeRef){const N=new D;Z.muzzleNodeRef.getWorldPosition(N);const je=Pe.clone().sub(N).normalize(),De=N.distanceTo(Pe);h.retargetLast(N,je,De)}u.spawnImpact(Pe)}}),await p.waitForLocalSpawnAndSync(de))}qn("Ready!",100),await new Promise(de=>setTimeout(de,300));const re=_.getSnapshot();d.setTargetPosition(re.position.x,re.position.y+Vs,re.position.z),d.setRotation(re.yaw,re.pitch),d.snapToTarget(),yM(),j.start(),Be.debugOverlay&&typeof window<"u"&&(window.setPlayerSkin=de=>{V&&fT(V,de)})})}export{MM as $,iA as A,en as B,We as C,hn as D,vn as E,SS as F,Ht as G,Bs as H,kr as I,Of as J,HM as K,ai as L,vt as M,nA as N,dS as O,ra as P,sn as Q,tA as R,TS as S,fS as T,Gf as U,D as V,my as W,ec as X,Jl as Y,$e as Z,SM as _,vM as a,Dt as a0,ks as a1,Ji as a2,At as a3,bt as a4,Nu as a5,sA as a6,lT as b,Be as c,th as d,lh as e,hh as f,Cd as g,ko as h,yT as i,yM as j,Vs as k,Rd as l,Jt as m,ET as n,py as o,Qy as p,Xf as q,f1 as r,qn as s,Ce as t,ST as u,ki as v,la as w,oi as x,ci as y,_n as z};
