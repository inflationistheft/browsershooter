const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TunerBoot-DBrRuJed.js","assets/dat.gui.module-CMI775Zz.js","assets/Tuner3PBoot-C1imQ91W.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Op="modulepreload",Up=function(i){return"/"+i},eh={},ca=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=o(t.map(c=>{if(c=Up(c),c in eh)return;eh[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Op,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vl="169",Fp=0,th=1,Bp=2,Ld=1,zp=2,jn=3,Qn=0,Qt=1,mn=2,vi=0,Ms=1,Ar=2,nh=3,ih=4,kp=5,zi=100,Hp=101,Vp=102,Gp=103,Wp=104,Xp=200,$p=201,Yp=202,jp=203,mc=204,gc=205,qp=206,Kp=207,Zp=208,Jp=209,Qp=210,em=211,tm=212,nm=213,im=214,_c=0,vc=1,xc=2,ws=3,yc=4,Sc=5,Mc=6,Ec=7,Dd=0,sm=1,rm=2,xi=0,om=1,am=2,cm=3,lm=4,hm=5,um=6,dm=7,sh="attached",fm="detached",Nd=300,Rs=301,Cs=302,Tc=303,Ac=304,ta=306,Ps=1e3,mi=1001,Xo=1002,Jt=1003,Od=1004,fr=1005,ln=1006,Ro=1007,Kn=1008,ei=1009,Ud=1010,Fd=1011,br=1012,xl=1013,Wi=1014,bn=1015,Nr=1016,yl=1017,Sl=1018,Is=1020,Bd=35902,zd=1021,kd=1022,hn=1023,Hd=1024,Vd=1025,Es=1026,Ls=1027,Ml=1028,El=1029,Gd=1030,Tl=1031,Al=1033,Co=33776,Po=33777,Io=33778,Lo=33779,bc=35840,wc=35841,Rc=35842,Cc=35843,Pc=36196,Ic=37492,Lc=37496,Dc=37808,Nc=37809,Oc=37810,Uc=37811,Fc=37812,Bc=37813,zc=37814,kc=37815,Hc=37816,Vc=37817,Gc=37818,Wc=37819,Xc=37820,$c=37821,Do=36492,Yc=36494,jc=36495,Wd=36283,qc=36284,Kc=36285,Zc=36286,Xd=2200,Jc=2201,pm=2202,wr=2300,Rr=2301,la=2302,vs=2400,xs=2401,$o=2402,bl=2500,mm=2501,gm=0,$d=1,Qc=2,_m=3200,vm=3201,Yd=0,xm=1,pi="",Kt="srgb",Vt="srgb-linear",wl="display-p3",na="display-p3-linear",Yo="linear",yt="srgb",jo="rec709",qo="p3",ji=7680,rh=519,ym=512,Sm=513,Mm=514,jd=515,Em=516,Tm=517,Am=518,bm=519,el=35044,oh="300 es",Zn=2e3,Ko=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ah=1234567;const vr=Math.PI/180,Ds=180/Math.PI;function Rn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function Rl(i,e){return(i%e+e)%e}function wm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Rm(i,e,t){return i!==e?(t-i)/(e-i):0}function xr(i,e,t){return(1-t)*i+t*e}function Cm(i,e,t,n){return xr(i,e,1-Math.exp(-t*n))}function Pm(i,e=1){return e-Math.abs(Rl(i,e*2)-e)}function Im(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Lm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Dm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nm(i,e){return i+Math.random()*(e-i)}function Om(i){return i*(.5-Math.random())}function Um(i){i!==void 0&&(ah=i);let e=ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fm(i){return i*vr}function Bm(i){return i*Ds}function zm(i){return(i&i-1)===0&&i!==0}function km(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vm(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ns={DEG2RAD:vr,RAD2DEG:Ds,generateUUID:Rn,clamp:It,euclideanModulo:Rl,mapLinear:wm,inverseLerp:Rm,lerp:xr,damp:Cm,pingpong:Pm,smoothstep:Im,smootherstep:Lm,randInt:Dm,randFloat:Nm,randFloatSpread:Om,seededRandom:Um,degToRad:Fm,radToDeg:Bm,isPowerOfTwo:zm,ceilPowerOfTwo:km,floorPowerOfTwo:Hm,setQuaternionFromProperEuler:Vm,normalize:gt,denormalize:An};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],S=s[1],M=s[4],T=s[7],I=s[2],P=s[5],C=s[8];return r[0]=o*v+a*S+l*I,r[3]=o*p+a*M+l*P,r[6]=o*m+a*T+l*C,r[1]=c*v+h*S+u*I,r[4]=c*p+h*M+u*P,r[7]=c*m+h*T+u*C,r[2]=d*v+f*S+g*I,r[5]=d*p+f*M+g*P,r[8]=d*m+f*T+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new Ke;function qd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gm(){const i=Cr("canvas");return i.style.display="block",i}const ch={};function No(i){i in ch||(ch[i]=!0,console.warn(i))}function Wm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Xm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $m(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lh=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hh=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xs={[Vt]:{transfer:Yo,primaries:jo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Kt]:{transfer:yt,primaries:jo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[na]:{transfer:Yo,primaries:qo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(hh),fromReference:i=>i.applyMatrix3(lh)},[wl]:{transfer:yt,primaries:qo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(hh),fromReference:i=>i.applyMatrix3(lh).convertLinearToSRGB()}},Ym=new Set([Vt,na]),ut={enabled:!0,_workingColorSpace:Vt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ym.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Xs[e].toReference,s=Xs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Xs[i].primaries},getTransfer:function(i){return i===pi?Yo:Xs[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Xs[e].luminanceCoefficients)}};function Ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class jm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=Cr("canvas")),qi.width=e.width,qi.height=e.height;const n=qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ts(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ts(t[n]/255)*255):t[n]=Ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qm=0;class Kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(da(s[o].image)):r.push(da(s[o]))}else r=da(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Km=0;class Lt extends Yi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=mi,s=mi,r=ln,o=Kn,a=hn,l=ei,c=Lt.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Rn(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Nd;Lt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,T=(f+1)/2,I=(m+1)/2,P=(h+d)/4,C=(u+v)/4,N=(g+p)/4;return M>T&&M>I?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=P/n,r=C/n):T>I?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=P/s,r=N/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=C/r,s=N/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zm extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Lt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Zm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zd extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jm extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*v,S=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const I=Math.sqrt(M),P=Math.atan2(I,m*S);p=Math.sin(p*P)/I,a=Math.sin(a*P)/I}const T=a*S;if(l=l*p+d*T,c=c*p+f*T,h=h*p+g*T,u=u*p+v*T,p===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new D,uh=new nn;class ni{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),Hr.subVectors(this.max,$s),Ki.subVectors(e.a,$s),Zi.subVectors(e.b,$s),Ji.subVectors(e.c,$s),si.subVectors(Zi,Ki),ri.subVectors(Ji,Zi),Ei.subVectors(Ki,Ji);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ei.z,Ei.y,si.z,0,-si.x,ri.z,0,-ri.x,Ei.z,0,-Ei.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ei.y,Ei.x,0];return!pa(t,Ki,Zi,Ji,Hr)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,Ki,Zi,Ji,Hr))?!1:(Vr.crossVectors(si,ri),t=[Vr.x,Vr.y,Vr.z],pa(t,Ki,Zi,Ji,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new D,new D,new D,new D,new D,new D,new D,new D],vn=new D,kr=new ni,Ki=new D,Zi=new D,Ji=new D,si=new D,ri=new D,Ei=new D,$s=new D,Hr=new D,Vr=new D,Ti=new D;function pa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);const a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Qm=new ni,Ys=new D,ma=new D;class On{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(ma)),this.expandByPoint(Ys.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new D,ga=new D,Gr=new D,oi=new D,_a=new D,Wr=new D,va=new D;class Or{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ga.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ga);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Gr),a=oi.dot(this.direction),l=-oi.dot(Gr),c=oi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ga).addScaledVector(Gr,d),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,s,r){_a.subVectors(t,e),Wr.subVectors(n,e),va.crossVectors(_a,Wr);let o=this.direction.dot(va),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(Wr.crossVectors(oi,Wr));if(l<0)return null;const c=a*this.direction.dot(_a.cross(oi));if(c<0||l+c>o)return null;const h=-a*oi.dot(va);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,g,v,p){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,v,p)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eg,e,tg)}lookAt(e,t,n){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),ai.crossVectors(n,an),ai.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ai.crossVectors(n,an)),ai.normalize(),Xr.crossVectors(an,ai),s[0]=ai.x,s[4]=Xr.x,s[8]=an.x,s[1]=ai.y,s[5]=Xr.y,s[9]=an.y,s[2]=ai.z,s[6]=Xr.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],S=n[3],M=n[7],T=n[11],I=n[15],P=s[0],C=s[4],N=s[8],X=s[12],E=s[1],b=s[5],G=s[9],V=s[13],Y=s[2],Q=s[6],W=s[10],Z=s[14],K=s[3],ce=s[7],le=s[11],te=s[15];return r[0]=o*P+a*E+l*Y+c*K,r[4]=o*C+a*b+l*Q+c*ce,r[8]=o*N+a*G+l*W+c*le,r[12]=o*X+a*V+l*Z+c*te,r[1]=h*P+u*E+d*Y+f*K,r[5]=h*C+u*b+d*Q+f*ce,r[9]=h*N+u*G+d*W+f*le,r[13]=h*X+u*V+d*Z+f*te,r[2]=g*P+v*E+p*Y+m*K,r[6]=g*C+v*b+p*Q+m*ce,r[10]=g*N+v*G+p*W+m*le,r[14]=g*X+v*V+p*Z+m*te,r[3]=S*P+M*E+T*Y+I*K,r[7]=S*C+M*b+T*Q+I*ce,r[11]=S*N+M*G+T*W+I*le,r[15]=S*X+M*V+T*Z+I*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],S=u*p*c-v*d*c+v*l*f-a*p*f-u*l*m+a*d*m,M=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,T=h*v*c-g*u*c+g*a*f-o*v*f-h*a*m+o*u*m,I=g*u*l-h*v*l-g*a*d+o*v*d+h*a*p-o*u*p,P=t*S+n*M+s*T+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=S*C,e[1]=(v*d*r-u*p*r-v*s*f+n*p*f+u*s*m-n*d*m)*C,e[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*m+n*l*m)*C,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*C,e[4]=M*C,e[5]=(h*p*r-g*d*r+g*s*f-t*p*f-h*s*m+t*d*m)*C,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*C,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*C,e[8]=T*C,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*m-t*u*m)*C,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*m+t*a*m)*C,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*C,e[12]=I*C,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*p+t*u*p)*C,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*p-t*a*p)*C,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,v=o*h,p=o*u,m=a*u,S=l*c,M=l*h,T=l*u,I=n.x,P=n.y,C=n.z;return s[0]=(1-(v+m))*I,s[1]=(f+T)*I,s[2]=(g-M)*I,s[3]=0,s[4]=(f-T)*P,s[5]=(1-(d+m))*P,s[6]=(p+S)*P,s[7]=0,s[8]=(g+M)*C,s[9]=(p-S)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],xn.copy(this);const c=1/r,h=1/o,u=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,t.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Zn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===Zn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ko)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Zn){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h;let g,v;if(a===Zn)g=(o+r)*u,v=-2*u;else if(a===Ko)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new D,xn=new Ge,eg=new D(0,0,0),tg=new D(1,1,1),ai=new D,Xr=new D,an=new D,dh=new Ge,fh=new nn;class _n{constructor(e=0,t=0,n=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ng=0;const ph=new D,es=new nn,Vn=new Ge,$r=new D,js=new D,ig=new D,sg=new nn,mh=new D(1,0,0),gh=new D(0,1,0),_h=new D(0,0,1),vh={type:"added"},rg={type:"removed"},ts={type:"childadded",child:null},xa={type:"childremoved",child:null};class St extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new D,t=new _n,n=new nn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ke}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(mh,e)}rotateY(e){return this.rotateOnAxis(gh,e)}rotateZ(e){return this.rotateOnAxis(_h,e)}translateOnAxis(e,t){return ph.copy(e).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mh,e)}translateY(e){return this.translateOnAxis(gh,e)}translateZ(e){return this.translateOnAxis(_h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$r.copy(e):$r.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(js,$r,this.up):Vn.lookAt($r,js,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Vn),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vh),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rg),xa.child=e,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vh),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,ig),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,sg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}St.DEFAULT_UP=new D(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new D,Gn=new D,ya=new D,Wn=new D,ns=new D,is=new D,xh=new D,Sa=new D,Ma=new D,Ea=new D,Ta=new dt,Aa=new dt,ba=new dt;class gn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yn.subVectors(e,t),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yn.subVectors(s,t),Gn.subVectors(n,t),ya.subVectors(e,t);const o=yn.dot(yn),a=yn.dot(Gn),l=yn.dot(ya),c=Gn.dot(Gn),h=Gn.dot(ya),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ta.setScalar(0),Aa.setScalar(0),ba.setScalar(0),Ta.fromBufferAttribute(e,t),Aa.fromBufferAttribute(e,n),ba.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ta,r.x),o.addScaledVector(Aa,r.y),o.addScaledVector(ba,r.z),o}static isFrontFacing(e,t,n,s){return yn.subVectors(n,t),Gn.subVectors(e,t),yn.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),yn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ns.subVectors(s,n),is.subVectors(r,n),Sa.subVectors(e,n);const l=ns.dot(Sa),c=is.dot(Sa);if(l<=0&&c<=0)return t.copy(n);Ma.subVectors(e,s);const h=ns.dot(Ma),u=is.dot(Ma);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ns,o);Ea.subVectors(e,r);const f=ns.dot(Ea),g=is.dot(Ea);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(is,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return xh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(xh,a);const m=1/(p+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function wa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=Rl(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wa(o,r,e+1/3),this.g=wa(o,r,e),this.b=wa(o,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=Jd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return ut.fromWorkingColorSpace(Wt.copy(this),e),Math.round(It(Wt.r*255,0,255))*65536+Math.round(It(Wt.g*255,0,255))*256+Math.round(It(Wt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Kt){ut.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,s=Wt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Yr);const n=xr(ci.h,Yr.h,t),s=xr(ci.s,Yr.s,t),r=xr(ci.l,Yr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ve;Ve.NAMES=Jd;let og=0;class Cn extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Ms,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mc&&(n.blendSrc=this.blendSrc),this.blendDst!==gc&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wn extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new D,jr=new Ae;class Dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=el,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==el&&(e.usage=this.usage),e}}class Qd extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ef extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ag=0;const dn=new Ge,Ra=new St,ss=new D,cn=new ni,qs=new ni,Bt=new D;class Ut extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qd(e)?ef:Qd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(cn.min,qs.min),cn.expandByPoint(Bt),Bt.addVectors(cn.max,qs.max),cn.expandByPoint(Bt)):(cn.expandByPoint(qs.min),cn.expandByPoint(qs.max))}cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Bt.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(e,c),Bt.add(ss)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new D,l[N]=new D;const c=new D,h=new D,u=new D,d=new Ae,f=new Ae,g=new Ae,v=new D,p=new D;function m(N,X,E){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,X),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,X),g.fromBufferAttribute(r,E),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(b),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(b),a[N].add(v),a[X].add(v),a[E].add(v),l[N].add(p),l[X].add(p),l[E].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,X=S.length;N<X;++N){const E=S[N],b=E.start,G=E.count;for(let V=b,Y=b+G;V<Y;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new D,T=new D,I=new D,P=new D;function C(N){I.fromBufferAttribute(s,N),P.copy(I);const X=a[N];M.copy(X),M.sub(I.multiplyScalar(I.dot(X))).normalize(),T.crossVectors(P,X);const b=T.dot(l[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,b)}for(let N=0,X=S.length;N<X;++N){const E=S[N],b=E.start,G=E.count;for(let V=b,Y=b+G;V<Y;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yh=new Ge,Ai=new Or,qr=new On,Sh=new D,Kr=new D,Zr=new D,Jr=new D,Ca=new D,Qr=new D,Mh=new D,eo=new D;class xt extends St{constructor(e=new Ut,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ca.fromBufferAttribute(u,e),o?Qr.addScaledVector(Ca,h):Qr.addScaledVector(Ca.sub(t),h))}t.add(Qr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(qr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(qr,Sh)===null||Ai.origin.distanceToSquared(Sh)>(e.far-e.near)**2))&&(yh.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(yh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let T=S,I=M;T<I;T+=3){const P=a.getX(T),C=a.getX(T+1),N=a.getX(T+2);s=to(this,m,e,n,c,h,u,P,C,N),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const S=a.getX(p),M=a.getX(p+1),T=a.getX(p+2);s=to(this,o,e,n,c,h,u,S,M,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let T=S,I=M;T<I;T+=3){const P=T,C=T+1,N=T+2;s=to(this,m,e,n,c,h,u,P,C,N),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const S=p,M=p+1,T=p+2;s=to(this,o,e,n,c,h,u,S,M,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function cg(i,e,t,n,s,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Qn,a),l===null)return null;eo.copy(a),eo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:i}}function to(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Kr),i.getVertexPosition(l,Zr),i.getVertexPosition(c,Jr);const h=cg(i,e,t,n,Kr,Zr,Jr,Mh);if(h){const u=new D;gn.getBarycoord(Mh,Kr,Zr,Jr,u),s&&(h.uv=gn.getInterpolatedAttribute(s,a,l,c,u,new Ae)),r&&(h.uv1=gn.getInterpolatedAttribute(r,a,l,c,u,new Ae)),o&&(h.normal=gn.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};gn.getNormal(Kr,Zr,Jr,d.normal),h.face=d,h.barycoord=u}return h}class Si extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(u,2));function g(v,p,m,S,M,T,I,P,C,N,X){const E=T/C,b=I/N,G=T/2,V=I/2,Y=P/2,Q=C+1,W=N+1;let Z=0,K=0;const ce=new D;for(let le=0;le<W;le++){const te=le*b-V;for(let be=0;be<Q;be++){const _e=be*E-G;ce[v]=_e*S,ce[p]=te*M,ce[m]=Y,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[p]=0,ce[m]=P>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(be/C),u.push(1-le/N),Z+=1}}for(let le=0;le<N;le++)for(let te=0;te<C;te++){const be=d+te+Q*le,_e=d+te+Q*(le+1),$=d+(te+1)+Q*(le+1),ie=d+(te+1)+Q*le;l.push(be,_e,ie),l.push(_e,$,ie),K+=6}a.addGroup(f,K,X),f+=K,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=Os(i[t]);for(const s in n)e[s]=n[s]}return e}function lg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const hg={clone:Os,merge:qt};var ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ug,this.fragmentShader=dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=lg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nf extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new D,Eh=new Ae,Th=new Ae;class Zt extends nf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Eh,Th),t.subVectors(Th,Eh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,os=1;class fg extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(rs,os,e,t);s.layers=this.layers,this.add(s);const r=new Zt(rs,os,e,t);r.layers=this.layers,this.add(r);const o=new Zt(rs,os,e,t);o.layers=this.layers,this.add(o);const a=new Zt(rs,os,e,t);a.layers=this.layers,this.add(a);const l=new Zt(rs,os,e,t);l.layers=this.layers,this.add(l);const c=new Zt(rs,os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class sf extends Lt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pg extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new sf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Si(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:vi});r.uniforms.tEquirect.value=t;const o=new xt(s,r),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=ln),new fg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Pa=new D,mg=new D,gg=new Ke;class Oi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Pa.subVectors(n,t).cross(mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gg.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new On,no=new D;class Pl{constructor(e=new Oi,t=new Oi,n=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],p=s[11],m=s[12],S=s[13],M=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,p-f,T-m).normalize(),n[1].setComponents(l+r,d+c,p+f,T+m).normalize(),n[2].setComponents(l+o,d+h,p+g,T+S).normalize(),n[3].setComponents(l-o,d-h,p-g,T-S).normalize(),n[4].setComponents(l-a,d-u,p-v,T-M).normalize(),t===Zn)n[5].setComponents(l+a,d+u,p+v,T+M).normalize();else if(t===Ko)n[5].setComponents(a,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(no.x=s.normal.x>0?e.max.x:e.min.x,no.y=s.normal.y>0?e.max.y:e.min.y,no.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _g(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ur extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const S=m*d-o;for(let M=0;M<c;M++){const T=M*u-r;g.push(T,-S,0),v.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const M=S+c*m,T=S+c*(m+1),I=S+1+c*(m+1),P=S+1+c*m;f.push(M,T,P),f.push(T,I,P)}this.setIndex(f),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}var vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xg=`#ifdef USE_ALPHAHASH
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
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
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
#endif`,Ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
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
#endif`,wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ig=`#ifdef USE_IRIDESCENCE
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
#endif`,Lg=`#ifdef USE_BUMPMAP
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hg=`#define PI 3.141592653589793
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
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gg=`vec3 transformedNormal = objectNormal;
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
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",qg=`
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
}`,Kg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
}`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
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
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
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
#endif`,g0=`struct PhysicalMaterial {
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
}`,_0=`
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w0=`#if defined( USE_POINTS_UV )
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
#endif`,R0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
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
#endif`,N0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k0=`#ifdef USE_NORMALMAP
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
#endif`,H0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n_=`float getShadowMask() {
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
}`,i_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s_=`#ifdef USE_SKINNING
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
#endif`,r_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o_=`#ifdef USE_SKINNING
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
#endif`,a_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#ifdef USE_TRANSMISSION
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const __=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v_=`uniform sampler2D t2D;
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`#include <common>
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
}`,T_=`#if DEPTH_PACKING == 3200
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
}`,A_=`#define DISTANCE
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
}`,b_=`#define DISTANCE
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
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`uniform float scale;
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
}`,P_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,L_=`uniform vec3 diffuse;
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
}`,D_=`#define LAMBERT
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
}`,N_=`#define LAMBERT
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
}`,O_=`#define MATCAP
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
}`,U_=`#define MATCAP
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
}`,F_=`#define NORMAL
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
}`,B_=`#define NORMAL
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
}`,z_=`#define PHONG
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
}`,k_=`#define PHONG
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
}`,H_=`#define STANDARD
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
}`,V_=`#define STANDARD
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
}`,G_=`#define TOON
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
}`,W_=`#define TOON
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
}`,X_=`uniform float size;
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
}`,$_=`uniform vec3 diffuse;
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
}`,Y_=`#include <common>
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
}`,j_=`uniform vec3 color;
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
}`,q_=`uniform float rotation;
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
}`,K_=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:vg,alphahash_pars_fragment:xg,alphamap_fragment:yg,alphamap_pars_fragment:Sg,alphatest_fragment:Mg,alphatest_pars_fragment:Eg,aomap_fragment:Tg,aomap_pars_fragment:Ag,batching_pars_vertex:bg,batching_vertex:wg,begin_vertex:Rg,beginnormal_vertex:Cg,bsdfs:Pg,iridescence_fragment:Ig,bumpmap_pars_fragment:Lg,clipping_planes_fragment:Dg,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:Og,clipping_planes_vertex:Ug,color_fragment:Fg,color_pars_fragment:Bg,color_pars_vertex:zg,color_vertex:kg,common:Hg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Gg,displacementmap_pars_vertex:Wg,displacementmap_vertex:Xg,emissivemap_fragment:$g,emissivemap_pars_fragment:Yg,colorspace_fragment:jg,colorspace_pars_fragment:qg,envmap_fragment:Kg,envmap_common_pars_fragment:Zg,envmap_pars_fragment:Jg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:h0,envmap_vertex:e0,fog_vertex:t0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:o0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:c0,lights_pars_begin:l0,lights_toon_fragment:u0,lights_toon_pars_fragment:d0,lights_phong_fragment:f0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:_0,lights_fragment_maps:v0,lights_fragment_end:x0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:M0,logdepthbuf_vertex:E0,map_fragment:T0,map_pars_fragment:A0,map_particle_fragment:b0,map_particle_pars_fragment:w0,metalnessmap_fragment:R0,metalnessmap_pars_fragment:C0,morphinstance_vertex:P0,morphcolor_vertex:I0,morphnormal_vertex:L0,morphtarget_pars_vertex:D0,morphtarget_vertex:N0,normal_fragment_begin:O0,normal_fragment_maps:U0,normal_pars_fragment:F0,normal_pars_vertex:B0,normal_vertex:z0,normalmap_pars_fragment:k0,clearcoat_normal_fragment_begin:H0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:W0,opaque_fragment:X0,packing:$0,premultiplied_alpha_fragment:Y0,project_vertex:j0,dithering_fragment:q0,dithering_pars_fragment:K0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:J0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:e_,shadowmap_vertex:t_,shadowmask_pars_fragment:n_,skinbase_vertex:i_,skinning_pars_vertex:s_,skinning_vertex:r_,skinnormal_vertex:o_,specularmap_fragment:a_,specularmap_pars_fragment:c_,tonemapping_fragment:l_,tonemapping_pars_fragment:h_,transmission_fragment:u_,transmission_pars_fragment:d_,uv_pars_fragment:f_,uv_pars_vertex:p_,uv_vertex:m_,worldpos_vertex:g_,background_vert:__,background_frag:v_,backgroundCube_vert:x_,backgroundCube_frag:y_,cube_vert:S_,cube_frag:M_,depth_vert:E_,depth_frag:T_,distanceRGBA_vert:A_,distanceRGBA_frag:b_,equirect_vert:w_,equirect_frag:R_,linedashed_vert:C_,linedashed_frag:P_,meshbasic_vert:I_,meshbasic_frag:L_,meshlambert_vert:D_,meshlambert_frag:N_,meshmatcap_vert:O_,meshmatcap_frag:U_,meshnormal_vert:F_,meshnormal_frag:B_,meshphong_vert:z_,meshphong_frag:k_,meshphysical_vert:H_,meshphysical_frag:V_,meshtoon_vert:G_,meshtoon_frag:W_,points_vert:X_,points_frag:$_,shadow_vert:Y_,shadow_frag:j_,sprite_vert:q_,sprite_frag:K_},ye={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Nn={basic:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:qt([ye.points,ye.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:qt([ye.common,ye.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:qt([ye.sprite,ye.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:qt([ye.common,ye.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:qt([ye.lights,ye.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Nn.physical={uniforms:qt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const io={r:0,b:0,g:0},wi=new _n,Z_=new Ge;function J_(i,e,t,n,s,r,o){const a=new Ve(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function v(S){let M=!1;const T=g(S);T===null?m(a,l):T&&T.isColor&&(m(T,1),M=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,M){const T=g(M);T&&(T.isCubeTexture||T.mapping===ta)?(h===void 0&&(h=new xt(new Si(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Os(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),wi.copy(M.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Z_.makeRotationFromEuler(wi)),h.material.toneMapped=ut.getTransfer(T.colorSpace)!==yt,(u!==T||d!==T.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new xt(new Ur(2,2),new ti({name:"BackgroundMaterial",uniforms:Os(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ut.getTransfer(T.colorSpace)!==yt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,M){S.getRGB(io,tf(i)),n.buffers.color.setClear(io.r,io.g,io.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:v,addToRenderList:p}}function Q_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(E,b,G,V,Y){let Q=!1;const W=u(V,G,b);r!==W&&(r=W,c(r.object)),Q=f(E,V,G,Y),Q&&g(E,V,G,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,T(E,b,G,V),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,b,G){const V=G.wireframe===!0;let Y=n[E.id];Y===void 0&&(Y={},n[E.id]=Y);let Q=Y[b.id];Q===void 0&&(Q={},Y[b.id]=Q);let W=Q[V];return W===void 0&&(W=d(l()),Q[V]=W),W}function d(E){const b=[],G=[],V=[];for(let Y=0;Y<t;Y++)b[Y]=0,G[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:G,attributeDivisors:V,object:E,attributes:{},index:null}}function f(E,b,G,V){const Y=r.attributes,Q=b.attributes;let W=0;const Z=G.getAttributes();for(const K in Z)if(Z[K].location>=0){const le=Y[K];let te=Q[K];if(te===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(te=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(te=E.instanceColor)),le===void 0||le.attribute!==te||te&&le.data!==te.data)return!0;W++}return r.attributesNum!==W||r.index!==V}function g(E,b,G,V){const Y={},Q=b.attributes;let W=0;const Z=G.getAttributes();for(const K in Z)if(Z[K].location>=0){let le=Q[K];le===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(le=E.instanceColor));const te={};te.attribute=le,le&&le.data&&(te.data=le.data),Y[K]=te,W++}r.attributes=Y,r.attributesNum=W,r.index=V}function v(){const E=r.newAttributes;for(let b=0,G=E.length;b<G;b++)E[b]=0}function p(E){m(E,0)}function m(E,b){const G=r.newAttributes,V=r.enabledAttributes,Y=r.attributeDivisors;G[E]=1,V[E]===0&&(i.enableVertexAttribArray(E),V[E]=1),Y[E]!==b&&(i.vertexAttribDivisor(E,b),Y[E]=b)}function S(){const E=r.newAttributes,b=r.enabledAttributes;for(let G=0,V=b.length;G<V;G++)b[G]!==E[G]&&(i.disableVertexAttribArray(G),b[G]=0)}function M(E,b,G,V,Y,Q,W){W===!0?i.vertexAttribIPointer(E,b,G,Y,Q):i.vertexAttribPointer(E,b,G,V,Y,Q)}function T(E,b,G,V){v();const Y=V.attributes,Q=G.getAttributes(),W=b.defaultAttributeValues;for(const Z in Q){const K=Q[Z];if(K.location>=0){let ce=Y[Z];if(ce===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),ce!==void 0){const le=ce.normalized,te=ce.itemSize,be=e.get(ce);if(be===void 0)continue;const _e=be.buffer,$=be.type,ie=be.bytesPerElement,oe=$===i.INT||$===i.UNSIGNED_INT||ce.gpuType===xl;if(ce.isInterleavedBufferAttribute){const me=ce.data,Oe=me.stride,Ne=ce.offset;if(me.isInstancedInterleavedBuffer){for(let We=0;We<K.locationSize;We++)m(K.location+We,me.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let We=0;We<K.locationSize;We++)p(K.location+We);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let We=0;We<K.locationSize;We++)M(K.location+We,te/K.locationSize,$,le,Oe*ie,(Ne+te/K.locationSize*We)*ie,oe)}else{if(ce.isInstancedBufferAttribute){for(let me=0;me<K.locationSize;me++)m(K.location+me,ce.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let me=0;me<K.locationSize;me++)p(K.location+me);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let me=0;me<K.locationSize;me++)M(K.location+me,te/K.locationSize,$,le,te*ie,te/K.locationSize*me*ie,oe)}}else if(W!==void 0){const le=W[Z];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(K.location,le);break;case 3:i.vertexAttrib3fv(K.location,le);break;case 4:i.vertexAttrib4fv(K.location,le);break;default:i.vertexAttrib1fv(K.location,le)}}}}S()}function I(){N();for(const E in n){const b=n[E];for(const G in b){const V=b[G];for(const Y in V)h(V[Y].object),delete V[Y];delete b[G]}delete n[E]}}function P(E){if(n[E.id]===void 0)return;const b=n[E.id];for(const G in b){const V=b[G];for(const Y in V)h(V[Y].object),delete V[Y];delete b[G]}delete n[E.id]}function C(E){for(const b in n){const G=n[b];if(G[E.id]===void 0)continue;const V=G[E.id];for(const Y in V)h(V[Y].object),delete V[Y];delete G[E.id]}}function N(){X(),o=!0,r!==s&&(r=s,c(r.object))}function X(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:X,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function ev(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)t.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==hn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===Nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ei&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==bn&&!N)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const C=e.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:T,vertexTextures:I,maxSamples:P}}function nv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Oi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const S=r?0:n,M=S*4;let T=m.clippingState||null;l.value=T,T=h(g,d,M,f);for(let I=0;I!==M;++I)T[I]=t[I];m.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,T=f;M!==v;++M,T+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function iv(i){let e=new WeakMap;function t(o,a){return a===Tc?o.mapping=Rs:a===Ac&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Tc||a===Ac)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pg(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Il extends nf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ys=4,Ah=[.125,.215,.35,.446,.526,.582],ki=20,Ia=new Il,bh=new Ve;let La=null,Da=0,Na=0,Oa=!1;const Ui=(1+Math.sqrt(5))/2,as=1/Ui,wh=[new D(-Ui,as,0),new D(Ui,as,0),new D(-as,0,Ui),new D(as,0,Ui),new D(0,Ui,-as),new D(0,Ui,as),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Rh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Da,Na),this._renderer.xr.enabled=Oa,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Nr,format:hn,colorSpace:Vt,depthBuffer:!1},s=Ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sv(r)),this._blurMaterial=rv(r,e,t)}return s}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,s){const a=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(bh),h.toneMapping=xi,h.autoClear=!1;const f=new wn({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new xt(new Si,f);let v=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(bh),v=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const M=this._cubeSize;so(s,S*M,m>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Rs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;so(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wh[(s-r-1)%wh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new xt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ki-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):ki;p>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ki}`);const m=[];let S=0;for(let C=0;C<ki;++C){const N=C/v,X=Math.exp(-N*N/2);m.push(X),C===0?S+=X:C<p&&(S+=2*X)}for(let C=0;C<m.length;C++)m[C]=m[C]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const T=this._sizeLods[s],I=3*T*(s>M-ys?s-M+ys:0),P=4*(this._cubeSize-T);so(t,I,P,3*T,2*T),l.setRenderTarget(t),l.render(u,Ia)}}function sv(i){const e=[],t=[],n=[];let s=i;const r=i-ys+1+Ah.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ys?l=Ah[o-i+ys-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,p=2,m=1,S=new Float32Array(v*g*f),M=new Float32Array(p*g*f),T=new Float32Array(m*g*f);for(let P=0;P<f;P++){const C=P%3*2/3-1,N=P>2?0:-1,X=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];S.set(X,v*g*P),M.set(d,p*g*P);const E=[P,P,P,P,P,P];T.set(E,m*g*P)}const I=new Ut;I.setAttribute("position",new Dt(S,v)),I.setAttribute("uv",new Dt(M,p)),I.setAttribute("faceIndex",new Dt(T,m)),e.push(I),s>ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ch(i,e,t){const n=new Xi(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function rv(i,e,t){const n=new Float32Array(ki),s=new D(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Ph(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Ih(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Ll(){return`

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
	`}function ov(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Tc||l===Ac,h=l===Rs||l===Cs;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Rh(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Rh(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function av(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&No("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cv(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const S=f.array;v=f.version;for(let M=0,T=S.length;M<T;M+=3){const I=S[M+0],P=S[M+1],C=S[M+2];d.push(I,P,P,C,C,I)}}else if(g!==void 0){const S=g.array;v=g.version;for(let M=0,T=S.length/3-1;M<T;M+=3){const I=M+0,P=M+1,C=M+2;d.push(I,P,P,C,C,I)}}else return;const p=new(qd(d)?ef:Qd)(d,1);p.version=v;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function lv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function u(d,f,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let m=0;for(let S=0;S<g;S++)m+=f[S];for(let S=0;S<v.length;S++)t.update(m,n,v[S])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function uv(i,e,t){const n=new WeakMap,s=new dt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let X=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",X)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let T=a.attributes.position.count*M,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*I*4*u),C=new Zd(P,T,I,u);C.type=bn,C.needsUpdate=!0;const N=M*4;for(let E=0;E<u;E++){const b=p[E],G=m[E],V=S[E],Y=T*I*4*E;for(let Q=0;Q<b.count;Q++){const W=Q*N;f===!0&&(s.fromBufferAttribute(b,Q),P[Y+W+0]=s.x,P[Y+W+1]=s.y,P[Y+W+2]=s.z,P[Y+W+3]=0),g===!0&&(s.fromBufferAttribute(G,Q),P[Y+W+4]=s.x,P[Y+W+5]=s.y,P[Y+W+6]=s.z,P[Y+W+7]=0),v===!0&&(s.fromBufferAttribute(V,Q),P[Y+W+8]=s.x,P[Y+W+9]=s.y,P[Y+W+10]=s.z,P[Y+W+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Ae(T,I)},n.set(a,d),a.addEventListener("dispose",X)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function dv(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class of extends Lt{constructor(e,t,n,s,r,o,a,l,c,h=Es){if(h!==Es&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=Wi),n===void 0&&h===Ls&&(n=Is),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const af=new Lt,Lh=new of(1,1),cf=new Zd,lf=new Jm,hf=new sf,Dh=[],Nh=[],Oh=new Float32Array(16),Uh=new Float32Array(9),Fh=new Float32Array(4);function Hs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Dh[s];if(r===void 0&&(r=new Float32Array(s),Dh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ia(i,e){let t=Nh[e];t===void 0&&(t=new Int32Array(e),Nh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function _v(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;Fh.set(n),i.uniformMatrix2fv(this.addr,!1,Fh),Ot(t,n)}}function vv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;Uh.set(n),i.uniformMatrix3fv(this.addr,!1,Uh),Ot(t,n)}}function xv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;Oh.set(n),i.uniformMatrix4fv(this.addr,!1,Oh),Ot(t,n)}}function yv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function Mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function Tv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function Rv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lh.compareFunction=jd,r=Lh):r=af,t.setTexture2D(e||r,s)}function Cv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||lf,s)}function Pv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hf,s)}function Iv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||cf,s)}function Lv(i){switch(i){case 5126:return fv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return _v;case 35675:return vv;case 35676:return xv;case 5124:case 35670:return yv;case 35667:case 35671:return Sv;case 35668:case 35672:return Mv;case 35669:case 35673:return Ev;case 5125:return Tv;case 36294:return Av;case 36295:return bv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Iv}}function Dv(i,e){i.uniform1fv(this.addr,e)}function Nv(i,e){const t=Hs(e,this.size,2);i.uniform2fv(this.addr,t)}function Ov(i,e){const t=Hs(e,this.size,3);i.uniform3fv(this.addr,t)}function Uv(i,e){const t=Hs(e,this.size,4);i.uniform4fv(this.addr,t)}function Fv(i,e){const t=Hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bv(i,e){const t=Hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zv(i,e){const t=Hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kv(i,e){i.uniform1iv(this.addr,e)}function Hv(i,e){i.uniform2iv(this.addr,e)}function Vv(i,e){i.uniform3iv(this.addr,e)}function Gv(i,e){i.uniform4iv(this.addr,e)}function Wv(i,e){i.uniform1uiv(this.addr,e)}function Xv(i,e){i.uniform2uiv(this.addr,e)}function $v(i,e){i.uniform3uiv(this.addr,e)}function Yv(i,e){i.uniform4uiv(this.addr,e)}function jv(i,e,t){const n=this.cache,s=e.length,r=ia(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||af,r[o])}function qv(i,e,t){const n=this.cache,s=e.length,r=ia(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||lf,r[o])}function Kv(i,e,t){const n=this.cache,s=e.length,r=ia(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hf,r[o])}function Zv(i,e,t){const n=this.cache,s=e.length,r=ia(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||cf,r[o])}function Jv(i){switch(i){case 5126:return Dv;case 35664:return Nv;case 35665:return Ov;case 35666:return Uv;case 35674:return Fv;case 35675:return Bv;case 35676:return zv;case 5124:case 35670:return kv;case 35667:case 35671:return Hv;case 35668:case 35672:return Vv;case 35669:case 35673:return Gv;case 5125:return Wv;case 36294:return Xv;case 36295:return $v;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Zv}}class Qv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lv(t.type)}}class ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jv(t.type)}}class tx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function Bh(i,e){i.seq.push(e),i.map[e.id]=e}function nx(i,e,t){const n=i.name,s=n.length;for(Ua.lastIndex=0;;){const r=Ua.exec(n),o=Ua.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bh(t,c===void 0?new Qv(a,i,e):new ex(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new tx(a),Bh(t,u)),t=u}}}class Oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);nx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function zh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ix=37297;let sx=0;function rx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ox(i){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i);let n;switch(e===t?n="":e===qo&&t===jo?n="LinearDisplayP3ToLinearSRGB":e===jo&&t===qo&&(n="LinearSRGBToLinearDisplayP3"),i){case Vt:case na:return[n,"LinearTransferOETF"];case Kt:case wl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function kh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+rx(i.getShaderSource(e),o)}else return s}function ax(i,e){const t=ox(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cx(i,e){let t;switch(e){case om:t="Linear";break;case am:t="Reinhard";break;case cm:t="Cineon";break;case lm:t="ACESFilmic";break;case um:t="AgX";break;case dm:t="Neutral";break;case hm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ro=new D;function lx(){ut.getLuminanceCoefficients(ro);const i=ro.x.toFixed(4),e=ro.y.toFixed(4),t=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function ux(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function pr(i){return i!==""}function Hh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(i){return i.replace(fx,mx)}const px=new Map;function mx(i,e){let t=qe[e];if(t===void 0){const n=px.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return tl(t)}const gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(gx,_x)}function _x(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function vx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ld?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function xx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function Sx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dd:e="ENVMAP_BLENDING_MULTIPLY";break;case sm:e="ENVMAP_BLENDING_MIX";break;case rm:e="ENVMAP_BLENDING_ADD";break}return e}function Mx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ex(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vx(t),c=xx(t),h=yx(t),u=Sx(t),d=Mx(t),f=hx(t),g=ux(r),v=s.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),m.length>0&&(m+=`
`)):(p=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),m=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?qe.tonemapping_pars_fragment:"",t.toneMapping!==xi?cx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,ax("linearToOutputTexel",t.outputColorSpace),lx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),o=tl(o),o=Hh(o,t),o=Vh(o,t),a=tl(a),a=Hh(a,t),a=Vh(a,t),o=Gh(o),a=Gh(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=S+p+o,T=S+m+a,I=zh(s,s.VERTEX_SHADER,M),P=zh(s,s.FRAGMENT_SHADER,T);s.attachShader(v,I),s.attachShader(v,P),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(b){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(I).trim(),Y=s.getShaderInfoLog(P).trim();let Q=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,P);else{const Z=kh(s,I,"vertex"),K=kh(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+G+`
`+Z+`
`+K)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||Y==="")&&(W=!1);W&&(b.diagnostics={runnable:Q,programLog:G,vertexShader:{log:V,prefix:p},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(I),s.deleteShader(P),N=new Oo(s,v),X=dx(s,v)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let X;this.getAttributes=function(){return X===void 0&&C(this),X};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,ix)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=P,this}let Tx=0;class Ax{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bx(e),t.set(e,n)),n}}class bx{constructor(e){this.id=Tx++,this.code=e,this.usedTimes=0}}function wx(i,e,t,n,s,r,o){const a=new Cl,l=new Ax,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,G,V,Y){const Q=V.fog,W=Y.geometry,Z=E.isMeshStandardMaterial?V.environment:null,K=(E.isMeshStandardMaterial?t:e).get(E.envMap||Z),ce=K&&K.mapping===ta?K.image.height:null,le=v[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const te=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,be=te!==void 0?te.length:0;let _e=0;W.morphAttributes.position!==void 0&&(_e=1),W.morphAttributes.normal!==void 0&&(_e=2),W.morphAttributes.color!==void 0&&(_e=3);let $,ie,oe,me;if(le){const _t=Nn[le];$=_t.vertexShader,ie=_t.fragmentShader}else $=E.vertexShader,ie=E.fragmentShader,l.update(E),oe=l.getVertexShaderID(E),me=l.getFragmentShaderID(E);const Oe=i.getRenderTarget(),Ne=Y.isInstancedMesh===!0,We=Y.isBatchedMesh===!0,rt=!!E.map,Xe=!!E.matcap,F=!!K,Mt=!!E.aoMap,Ze=!!E.lightMap,Qe=!!E.bumpMap,Fe=!!E.normalMap,ft=!!E.displacementMap,Be=!!E.emissiveMap,L=!!E.metalnessMap,w=!!E.roughnessMap,q=E.anisotropy>0,re=E.clearcoat>0,he=E.dispersion>0,se=E.iridescence>0,Pe=E.sheen>0,ve=E.transmission>0,we=q&&!!E.anisotropyMap,et=re&&!!E.clearcoatMap,fe=re&&!!E.clearcoatNormalMap,Re=re&&!!E.clearcoatRoughnessMap,ze=se&&!!E.iridescenceMap,ke=se&&!!E.iridescenceThicknessMap,ge=Pe&&!!E.sheenColorMap,$e=Pe&&!!E.sheenRoughnessMap,He=!!E.specularMap,ct=!!E.specularColorMap,k=!!E.specularIntensityMap,Te=ve&&!!E.transmissionMap,J=ve&&!!E.thicknessMap,ae=!!E.gradientMap,Se=!!E.alphaMap,Me=E.alphaTest>0,tt=!!E.alphaHash,vt=!!E.extensions;let Ft=xi;E.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Ft=i.toneMapping);const at={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:$,fragmentShader:ie,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:We,batchingColor:We&&Y._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&Y.instanceColor!==null,instancingMorph:Ne&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Vt,alphaToCoverage:!!E.alphaToCoverage,map:rt,matcap:Xe,envMap:F,envMapMode:F&&K.mapping,envMapCubeUVHeight:ce,aoMap:Mt,lightMap:Ze,bumpMap:Qe,normalMap:Fe,displacementMap:f&&ft,emissiveMap:Be,normalMapObjectSpace:Fe&&E.normalMapType===xm,normalMapTangentSpace:Fe&&E.normalMapType===Yd,metalnessMap:L,roughnessMap:w,anisotropy:q,anisotropyMap:we,clearcoat:re,clearcoatMap:et,clearcoatNormalMap:fe,clearcoatRoughnessMap:Re,dispersion:he,iridescence:se,iridescenceMap:ze,iridescenceThicknessMap:ke,sheen:Pe,sheenColorMap:ge,sheenRoughnessMap:$e,specularMap:He,specularColorMap:ct,specularIntensityMap:k,transmission:ve,transmissionMap:Te,thicknessMap:J,gradientMap:ae,opaque:E.transparent===!1&&E.blending===Ms&&E.alphaToCoverage===!1,alphaMap:Se,alphaTest:Me,alphaHash:tt,combine:E.combine,mapUv:rt&&p(E.map.channel),aoMapUv:Mt&&p(E.aoMap.channel),lightMapUv:Ze&&p(E.lightMap.channel),bumpMapUv:Qe&&p(E.bumpMap.channel),normalMapUv:Fe&&p(E.normalMap.channel),displacementMapUv:ft&&p(E.displacementMap.channel),emissiveMapUv:Be&&p(E.emissiveMap.channel),metalnessMapUv:L&&p(E.metalnessMap.channel),roughnessMapUv:w&&p(E.roughnessMap.channel),anisotropyMapUv:we&&p(E.anisotropyMap.channel),clearcoatMapUv:et&&p(E.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&p(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&p(E.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&p(E.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(E.sheenColorMap.channel),sheenRoughnessMapUv:$e&&p(E.sheenRoughnessMap.channel),specularMapUv:He&&p(E.specularMap.channel),specularColorMapUv:ct&&p(E.specularColorMap.channel),specularIntensityMapUv:k&&p(E.specularIntensityMap.channel),transmissionMapUv:Te&&p(E.transmissionMap.channel),thicknessMapUv:J&&p(E.thicknessMap.channel),alphaMapUv:Se&&p(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Fe||q),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(rt||Se),fog:!!Q,useFog:E.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:_e,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:rt&&E.map.isVideoTexture===!0&&ut.getTransfer(E.map.colorSpace)===yt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mn,flipSided:E.side===Qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:vt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&E.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function S(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const G in E.defines)b.push(G),b.push(E.defines[G]);return E.isRawShaderMaterial===!1&&(M(b,E),T(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function M(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function T(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),E.push(a.mask)}function I(E){const b=v[E.type];let G;if(b){const V=Nn[b];G=hg.clone(V.uniforms)}else G=E.uniforms;return G}function P(E,b){let G;for(let V=0,Y=h.length;V<Y;V++){const Q=h[V];if(Q.cacheKey===b){G=Q,++G.usedTimes;break}}return G===void 0&&(G=new Ex(i,b,E,r),h.push(G)),G}function C(E){if(--E.usedTimes===0){const b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function N(E){l.remove(E)}function X(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:I,acquireProgram:P,releaseProgram:C,releaseShaderCache:N,programs:h,dispose:X}}function Rx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Cx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $h(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,p){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),e++,m}function a(u,d,f,g,v,p){const m=o(u,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,g,v,p){const m=o(u,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||Cx),n.length>1&&n.sort(d||Xh),s.length>1&&s.sort(d||Xh)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Px(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new $h,i.set(n,[o])):s>=r.length?(o=new $h,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ix(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ve};break;case"SpotLight":t={position:new D,direction:new D,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Lx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Dx=0;function Nx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ox(i){const e=new Ix,t=Lx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new Ge,o=new Ge;function a(c){let h=0,u=0,d=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,S=0,M=0,T=0,I=0,P=0,C=0;c.sort(Nx);for(let X=0,E=c.length;X<E;X++){const b=c[X],G=b.color,V=b.intensity,Y=b.distance,Q=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=G.r*V,u+=G.g*V,d+=G.b*V;else if(b.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(b.sh.coefficients[W],V);C++}else if(b.isDirectionalLight){const W=e.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Z=b.shadow,K=t.get(b);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=b.shadow.matrix,S++}n.directional[f]=W,f++}else if(b.isSpotLight){const W=e.get(b);W.position.setFromMatrixPosition(b.matrixWorld),W.color.copy(G).multiplyScalar(V),W.distance=Y,W.coneCos=Math.cos(b.angle),W.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),W.decay=b.decay,n.spot[v]=W;const Z=b.shadow;if(b.map&&(n.spotLightMap[I]=b.map,I++,Z.updateMatrices(b),b.castShadow&&P++),n.spotLightMatrix[v]=Z.matrix,b.castShadow){const K=t.get(b);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=Q,T++}v++}else if(b.isRectAreaLight){const W=e.get(b);W.color.copy(G).multiplyScalar(V),W.halfWidth.set(b.width*.5,0,0),W.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=W,p++}else if(b.isPointLight){const W=e.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),W.distance=b.distance,W.decay=b.decay,b.castShadow){const Z=b.shadow,K=t.get(b);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=b.shadow.matrix,M++}n.point[g]=W,g++}else if(b.isHemisphereLight){const W=e.get(b);W.skyColor.copy(b.color).multiplyScalar(V),W.groundColor.copy(b.groundColor).multiplyScalar(V),n.hemi[m]=W,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==p||N.hemiLength!==m||N.numDirectionalShadows!==S||N.numPointShadows!==M||N.numSpotShadows!==T||N.numSpotMaps!==I||N.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=T+I-P,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,N.directionalLength=f,N.pointLength=g,N.spotLength=v,N.rectAreaLength=p,N.hemiLength=m,N.numDirectionalShadows=S,N.numPointShadows=M,N.numSpotShadows=T,N.numSpotMaps=I,N.numLightProbes=C,n.version=Dx++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const M=c[m];if(M.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(M.isSpotLight){const T=n.spot[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),f++}else if(M.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const T=n.hemi[v];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Yh(i){const e=new Ox(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ux(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Yh(i),e.set(s,[a])):r>=o.length?(a=new Yh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Fx extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bx extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kx=`uniform sampler2D shadow_pass;
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
}`;function Hx(i,e,t){let n=new Pl;const s=new Ae,r=new Ae,o=new dt,a=new Fx({depthPacking:vm}),l=new Bx,c={},h=t.maxTextureSize,u={[Qn]:Qt,[Qt]:Qn,[mn]:mn},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:zx,fragmentShader:kx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let m=this.type;this.render=function(P,C,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const X=i.getRenderTarget(),E=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),G=i.state;G.setBlending(vi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=m!==jn&&this.type===jn,Y=m===jn&&this.type!==jn;for(let Q=0,W=P.length;Q<W;Q++){const Z=P[Q],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const ce=K.getFrameExtents();if(s.multiply(ce),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,K.mapSize.y=r.y)),K.map===null||V===!0||Y===!0){const te=this.type!==jn?{minFilter:Jt,magFilter:Jt}:{};K.map!==null&&K.map.dispose(),K.map=new Xi(s.x,s.y,te),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const le=K.getViewportCount();for(let te=0;te<le;te++){const be=K.getViewport(te);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),G.viewport(o),K.updateMatrices(Z,te),n=K.getFrustum(),T(C,N,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===jn&&S(K,N),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(X,E,b)};function S(P,C){const N=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Xi(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(C,null,N,d,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(C,null,N,f,v,null)}function M(P,C,N,X){let E=null;const b=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(b!==void 0)E=b;else if(E=N.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=E.uuid,V=C.uuid;let Y=c[G];Y===void 0&&(Y={},c[G]=Y);let Q=Y[V];Q===void 0&&(Q=E.clone(),Y[V]=Q,C.addEventListener("dispose",I)),E=Q}if(E.visible=C.visible,E.wireframe=C.wireframe,X===jn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=i.properties.get(E);G.light=N}return E}function T(P,C,N,X,E){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===jn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const V=e.update(P),Y=P.material;if(Array.isArray(Y)){const Q=V.groups;for(let W=0,Z=Q.length;W<Z;W++){const K=Q[W],ce=Y[K.materialIndex];if(ce&&ce.visible){const le=M(P,ce,X,E);P.onBeforeShadow(i,P,C,N,V,le,K),i.renderBufferDirect(N,null,V,le,P,K),P.onAfterShadow(i,P,C,N,V,le,K)}}}else if(Y.visible){const Q=M(P,Y,X,E);P.onBeforeShadow(i,P,C,N,V,Q,null),i.renderBufferDirect(N,null,V,Q,P,null),P.onAfterShadow(i,P,C,N,V,Q,null)}}const G=P.children;for(let V=0,Y=G.length;V<Y;V++)T(G[V],C,N,X,E)}function I(P){P.target.removeEventListener("dispose",I);for(const N in c){const X=c[N],E=P.target.uuid;E in X&&(X[E].dispose(),delete X[E])}}}const Vx={[_c]:vc,[xc]:Mc,[yc]:Ec,[ws]:Sc,[vc]:_c,[Mc]:xc,[Ec]:yc,[Sc]:ws};function Gx(i){function e(){let k=!1;const Te=new dt;let J=null;const ae=new dt(0,0,0,0);return{setMask:function(Se){J!==Se&&!k&&(i.colorMask(Se,Se,Se,Se),J=Se)},setLocked:function(Se){k=Se},setClear:function(Se,Me,tt,vt,Ft){Ft===!0&&(Se*=vt,Me*=vt,tt*=vt),Te.set(Se,Me,tt,vt),ae.equals(Te)===!1&&(i.clearColor(Se,Me,tt,vt),ae.copy(Te))},reset:function(){k=!1,J=null,ae.set(-1,0,0,0)}}}function t(){let k=!1,Te=!1,J=null,ae=null,Se=null;return{setReversed:function(Me){Te=Me},setTest:function(Me){Me?oe(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(Me){J!==Me&&!k&&(i.depthMask(Me),J=Me)},setFunc:function(Me){if(Te&&(Me=Vx[Me]),ae!==Me){switch(Me){case _c:i.depthFunc(i.NEVER);break;case vc:i.depthFunc(i.ALWAYS);break;case xc:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case yc:i.depthFunc(i.EQUAL);break;case Sc:i.depthFunc(i.GEQUAL);break;case Mc:i.depthFunc(i.GREATER);break;case Ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Me}},setLocked:function(Me){k=Me},setClear:function(Me){Se!==Me&&(i.clearDepth(Me),Se=Me)},reset:function(){k=!1,J=null,ae=null,Se=null}}}function n(){let k=!1,Te=null,J=null,ae=null,Se=null,Me=null,tt=null,vt=null,Ft=null;return{setTest:function(at){k||(at?oe(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(at){Te!==at&&!k&&(i.stencilMask(at),Te=at)},setFunc:function(at,_t,sn){(J!==at||ae!==_t||Se!==sn)&&(i.stencilFunc(at,_t,sn),J=at,ae=_t,Se=sn)},setOp:function(at,_t,sn){(Me!==at||tt!==_t||vt!==sn)&&(i.stencilOp(at,_t,sn),Me=at,tt=_t,vt=sn)},setLocked:function(at){k=at},setClear:function(at){Ft!==at&&(i.clearStencil(at),Ft=at)},reset:function(){k=!1,Te=null,J=null,ae=null,Se=null,Me=null,tt=null,vt=null,Ft=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,S=null,M=null,T=null,I=null,P=new Ve(0,0,0),C=0,N=!1,X=null,E=null,b=null,G=null,V=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,W=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Q=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Q=W>=2);let K=null,ce={};const le=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),be=new dt().fromArray(le),_e=new dt().fromArray(te);function $(k,Te,J,ae){const Se=new Uint8Array(4),Me=i.createTexture();i.bindTexture(k,Me),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<J;tt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(Te+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return Me}const ie={};ie[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),r.setFunc(ws),Ze(!1),Qe(th),oe(i.CULL_FACE),F(vi);function oe(k){c[k]!==!0&&(i.enable(k),c[k]=!0)}function me(k){c[k]!==!1&&(i.disable(k),c[k]=!1)}function Oe(k,Te){return h[k]!==Te?(i.bindFramebuffer(k,Te),h[k]=Te,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Te),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ne(k,Te){let J=d,ae=!1;if(k){J=u.get(Te),J===void 0&&(J=[],u.set(Te,J));const Se=k.textures;if(J.length!==Se.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,tt=Se.length;Me<tt;Me++)J[Me]=i.COLOR_ATTACHMENT0+Me;J.length=Se.length,ae=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ae=!0);ae&&i.drawBuffers(J)}function We(k){return f!==k?(i.useProgram(k),f=k,!0):!1}const rt={[zi]:i.FUNC_ADD,[Hp]:i.FUNC_SUBTRACT,[Vp]:i.FUNC_REVERSE_SUBTRACT};rt[Gp]=i.MIN,rt[Wp]=i.MAX;const Xe={[Xp]:i.ZERO,[$p]:i.ONE,[Yp]:i.SRC_COLOR,[mc]:i.SRC_ALPHA,[Qp]:i.SRC_ALPHA_SATURATE,[Zp]:i.DST_COLOR,[qp]:i.DST_ALPHA,[jp]:i.ONE_MINUS_SRC_COLOR,[gc]:i.ONE_MINUS_SRC_ALPHA,[Jp]:i.ONE_MINUS_DST_COLOR,[Kp]:i.ONE_MINUS_DST_ALPHA,[em]:i.CONSTANT_COLOR,[tm]:i.ONE_MINUS_CONSTANT_COLOR,[nm]:i.CONSTANT_ALPHA,[im]:i.ONE_MINUS_CONSTANT_ALPHA};function F(k,Te,J,ae,Se,Me,tt,vt,Ft,at){if(k===vi){g===!0&&(me(i.BLEND),g=!1);return}if(g===!1&&(oe(i.BLEND),g=!0),k!==kp){if(k!==v||at!==N){if((p!==zi||M!==zi)&&(i.blendEquation(i.FUNC_ADD),p=zi,M=zi),at)switch(k){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ar:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ar:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}m=null,S=null,T=null,I=null,P.set(0,0,0),C=0,v=k,N=at}return}Se=Se||Te,Me=Me||J,tt=tt||ae,(Te!==p||Se!==M)&&(i.blendEquationSeparate(rt[Te],rt[Se]),p=Te,M=Se),(J!==m||ae!==S||Me!==T||tt!==I)&&(i.blendFuncSeparate(Xe[J],Xe[ae],Xe[Me],Xe[tt]),m=J,S=ae,T=Me,I=tt),(vt.equals(P)===!1||Ft!==C)&&(i.blendColor(vt.r,vt.g,vt.b,Ft),P.copy(vt),C=Ft),v=k,N=!1}function Mt(k,Te){k.side===mn?me(i.CULL_FACE):oe(i.CULL_FACE);let J=k.side===Qt;Te&&(J=!J),Ze(J),k.blending===Ms&&k.transparent===!1?F(vi):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);const ae=k.stencilWrite;o.setTest(ae),ae&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ft(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(k){X!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),X=k)}function Qe(k){k!==Fp?(oe(i.CULL_FACE),k!==E&&(k===th?i.cullFace(i.BACK):k===Bp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),E=k}function Fe(k){k!==b&&(Q&&i.lineWidth(k),b=k)}function ft(k,Te,J){k?(oe(i.POLYGON_OFFSET_FILL),(G!==Te||V!==J)&&(i.polygonOffset(Te,J),G=Te,V=J)):me(i.POLYGON_OFFSET_FILL)}function Be(k){k?oe(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function L(k){k===void 0&&(k=i.TEXTURE0+Y-1),K!==k&&(i.activeTexture(k),K=k)}function w(k,Te,J){J===void 0&&(K===null?J=i.TEXTURE0+Y-1:J=K);let ae=ce[J];ae===void 0&&(ae={type:void 0,texture:void 0},ce[J]=ae),(ae.type!==k||ae.texture!==Te)&&(K!==J&&(i.activeTexture(J),K=J),i.bindTexture(k,Te||ie[k]),ae.type=k,ae.texture=Te)}function q(){const k=ce[K];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(k){be.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),be.copy(k))}function ge(k){_e.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),_e.copy(k))}function $e(k,Te){let J=l.get(Te);J===void 0&&(J=new WeakMap,l.set(Te,J));let ae=J.get(k);ae===void 0&&(ae=i.getUniformBlockIndex(Te,k.name),J.set(k,ae))}function He(k,Te){const ae=l.get(Te).get(k);a.get(Te)!==ae&&(i.uniformBlockBinding(Te,ae,k.__bindingPointIndex),a.set(Te,ae))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},K=null,ce={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,S=null,M=null,T=null,I=null,P=new Ve(0,0,0),C=0,N=!1,X=null,E=null,b=null,G=null,V=null,be.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:oe,disable:me,bindFramebuffer:Oe,drawBuffers:Ne,useProgram:We,setBlending:F,setMaterial:Mt,setFlipSided:Ze,setCullFace:Qe,setLineWidth:Fe,setPolygonOffset:ft,setScissorTest:Be,activeTexture:L,bindTexture:w,unbindTexture:q,compressedTexImage2D:re,compressedTexImage3D:he,texImage2D:Re,texImage3D:ze,updateUBOMapping:$e,uniformBlockBinding:He,texStorage2D:et,texStorage3D:fe,texSubImage2D:se,texSubImage3D:Pe,compressedTexSubImage2D:ve,compressedTexSubImage3D:we,scissor:ke,viewport:ge,reset:ct}}function jh(i,e,t,n){const s=Wx(n);switch(t){case zd:return i*e;case Hd:return i*e;case Vd:return i*e*2;case Ml:return i*e/s.components*s.byteLength;case El:return i*e/s.components*s.byteLength;case Gd:return i*e*2/s.components*s.byteLength;case Tl:return i*e*2/s.components*s.byteLength;case kd:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case Al:return i*e*4/s.components*s.byteLength;case Co:case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:case Cc:return Math.max(i,16)*Math.max(e,8)/4;case bc:case Rc:return Math.max(i,8)*Math.max(e,8)/2;case Pc:case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Do:case Yc:case jc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wd:case qc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Kc:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wx(i){switch(i){case ei:case Ud:return{byteLength:1,components:1};case br:case Fd:case Nr:return{byteLength:2,components:1};case yl:case Sl:return{byteLength:2,components:4};case Wi:case xl:case bn:return{byteLength:4,components:1};case Bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xx(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,w){return f?new OffscreenCanvas(L,w):Cr("canvas")}function v(L,w,q){let re=1;const he=Be(L);if((he.width>q||he.height>q)&&(re=q/Math.max(he.width,he.height)),re<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const se=Math.floor(re*he.width),Pe=Math.floor(re*he.height);u===void 0&&(u=g(se,Pe));const ve=w?g(se,Pe):u;return ve.width=se,ve.height=Pe,ve.getContext("2d").drawImage(L,0,0,se,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+se+"x"+Pe+")."),ve}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),L;return L}function p(L){return L.generateMipmaps&&L.minFilter!==Jt&&L.minFilter!==ln}function m(L){i.generateMipmap(L)}function S(L,w,q,re,he=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let se=w;if(w===i.RED&&(q===i.FLOAT&&(se=i.R32F),q===i.HALF_FLOAT&&(se=i.R16F),q===i.UNSIGNED_BYTE&&(se=i.R8)),w===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.R8UI),q===i.UNSIGNED_SHORT&&(se=i.R16UI),q===i.UNSIGNED_INT&&(se=i.R32UI),q===i.BYTE&&(se=i.R8I),q===i.SHORT&&(se=i.R16I),q===i.INT&&(se=i.R32I)),w===i.RG&&(q===i.FLOAT&&(se=i.RG32F),q===i.HALF_FLOAT&&(se=i.RG16F),q===i.UNSIGNED_BYTE&&(se=i.RG8)),w===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RG8UI),q===i.UNSIGNED_SHORT&&(se=i.RG16UI),q===i.UNSIGNED_INT&&(se=i.RG32UI),q===i.BYTE&&(se=i.RG8I),q===i.SHORT&&(se=i.RG16I),q===i.INT&&(se=i.RG32I)),w===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RGB8UI),q===i.UNSIGNED_SHORT&&(se=i.RGB16UI),q===i.UNSIGNED_INT&&(se=i.RGB32UI),q===i.BYTE&&(se=i.RGB8I),q===i.SHORT&&(se=i.RGB16I),q===i.INT&&(se=i.RGB32I)),w===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),q===i.UNSIGNED_INT&&(se=i.RGBA32UI),q===i.BYTE&&(se=i.RGBA8I),q===i.SHORT&&(se=i.RGBA16I),q===i.INT&&(se=i.RGBA32I)),w===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),w===i.RGBA){const Pe=he?Yo:ut.getTransfer(re);q===i.FLOAT&&(se=i.RGBA32F),q===i.HALF_FLOAT&&(se=i.RGBA16F),q===i.UNSIGNED_BYTE&&(se=Pe===yt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function M(L,w){let q;return L?w===null||w===Wi||w===Is?q=i.DEPTH24_STENCIL8:w===bn?q=i.DEPTH32F_STENCIL8:w===br&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Wi||w===Is?q=i.DEPTH_COMPONENT24:w===bn?q=i.DEPTH_COMPONENT32F:w===br&&(q=i.DEPTH_COMPONENT16),q}function T(L,w){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Jt&&L.minFilter!==ln?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function I(L){const w=L.target;w.removeEventListener("dispose",I),C(w),w.isVideoTexture&&h.delete(w)}function P(L){const w=L.target;w.removeEventListener("dispose",P),X(w)}function C(L){const w=n.get(L);if(w.__webglInit===void 0)return;const q=L.source,re=d.get(q);if(re){const he=re[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&N(L),Object.keys(re).length===0&&d.delete(q)}n.remove(L)}function N(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const q=L.source,re=d.get(q);delete re[w.__cacheKey],o.memory.textures--}function X(L){const w=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(w.__webglFramebuffer[re]))for(let he=0;he<w.__webglFramebuffer[re].length;he++)i.deleteFramebuffer(w.__webglFramebuffer[re][he]);else i.deleteFramebuffer(w.__webglFramebuffer[re]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[re])}else{if(Array.isArray(w.__webglFramebuffer))for(let re=0;re<w.__webglFramebuffer.length;re++)i.deleteFramebuffer(w.__webglFramebuffer[re]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let re=0;re<w.__webglColorRenderbuffer.length;re++)w.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[re]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=L.textures;for(let re=0,he=q.length;re<he;re++){const se=n.get(q[re]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(q[re])}n.remove(L)}let E=0;function b(){E=0}function G(){const L=E;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),E+=1,L}function V(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function Y(L,w){const q=n.get(L);if(L.isVideoTexture&&Fe(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){const re=L.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(q,L,w);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+w)}function Q(L,w){const q=n.get(L);if(L.version>0&&q.__version!==L.version){_e(q,L,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+w)}function W(L,w){const q=n.get(L);if(L.version>0&&q.__version!==L.version){_e(q,L,w);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+w)}function Z(L,w){const q=n.get(L);if(L.version>0&&q.__version!==L.version){$(q,L,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+w)}const K={[Ps]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},ce={[Jt]:i.NEAREST,[Od]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Ro]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},le={[ym]:i.NEVER,[bm]:i.ALWAYS,[Sm]:i.LESS,[jd]:i.LEQUAL,[Mm]:i.EQUAL,[Am]:i.GEQUAL,[Em]:i.GREATER,[Tm]:i.NOTEQUAL};function te(L,w){if(w.type===bn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ln||w.magFilter===Ro||w.magFilter===fr||w.magFilter===Kn||w.minFilter===ln||w.minFilter===Ro||w.minFilter===fr||w.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,K[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,K[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,K[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ce[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ce[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Jt||w.minFilter!==fr&&w.minFilter!==Kn||w.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function be(L,w){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",I));const re=w.source;let he=d.get(re);he===void 0&&(he={},d.set(re,he));const se=V(w);if(se!==L.__cacheKey){he[se]===void 0&&(he[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),he[se].usedTimes++;const Pe=he[L.__cacheKey];Pe!==void 0&&(he[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&N(w)),L.__cacheKey=se,L.__webglTexture=he[se].texture}return q}function _e(L,w,q){let re=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(re=i.TEXTURE_3D);const he=be(L,w),se=w.source;t.bindTexture(re,L.__webglTexture,i.TEXTURE0+q);const Pe=n.get(se);if(se.version!==Pe.__version||he===!0){t.activeTexture(i.TEXTURE0+q);const ve=ut.getPrimaries(ut.workingColorSpace),we=w.colorSpace===pi?null:ut.getPrimaries(w.colorSpace),et=w.colorSpace===pi||ve===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let fe=v(w.image,!1,s.maxTextureSize);fe=ft(w,fe);const Re=r.convert(w.format,w.colorSpace),ze=r.convert(w.type);let ke=S(w.internalFormat,Re,ze,w.colorSpace,w.isVideoTexture);te(re,w);let ge;const $e=w.mipmaps,He=w.isVideoTexture!==!0,ct=Pe.__version===void 0||he===!0,k=se.dataReady,Te=T(w,fe);if(w.isDepthTexture)ke=M(w.format===Ls,w.type),ct&&(He?t.texStorage2D(i.TEXTURE_2D,1,ke,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,ke,fe.width,fe.height,0,Re,ze,null));else if(w.isDataTexture)if($e.length>0){He&&ct&&t.texStorage2D(i.TEXTURE_2D,Te,ke,$e[0].width,$e[0].height);for(let J=0,ae=$e.length;J<ae;J++)ge=$e[J],He?k&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,Re,ze,ge.data):t.texImage2D(i.TEXTURE_2D,J,ke,ge.width,ge.height,0,Re,ze,ge.data);w.generateMipmaps=!1}else He?(ct&&t.texStorage2D(i.TEXTURE_2D,Te,ke,fe.width,fe.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,Re,ze,fe.data)):t.texImage2D(i.TEXTURE_2D,0,ke,fe.width,fe.height,0,Re,ze,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,ke,$e[0].width,$e[0].height,fe.depth);for(let J=0,ae=$e.length;J<ae;J++)if(ge=$e[J],w.format!==hn)if(Re!==null)if(He){if(k)if(w.layerUpdates.size>0){const Se=jh(ge.width,ge.height,w.format,w.type);for(const Me of w.layerUpdates){const tt=ge.data.subarray(Me*Se/ge.data.BYTES_PER_ELEMENT,(Me+1)*Se/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Me,ge.width,ge.height,1,Re,tt,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,fe.depth,Re,ge.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ke,ge.width,ge.height,fe.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,fe.depth,Re,ze,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ke,ge.width,ge.height,fe.depth,0,Re,ze,ge.data)}else{He&&ct&&t.texStorage2D(i.TEXTURE_2D,Te,ke,$e[0].width,$e[0].height);for(let J=0,ae=$e.length;J<ae;J++)ge=$e[J],w.format!==hn?Re!==null?He?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,Re,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ke,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?k&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,Re,ze,ge.data):t.texImage2D(i.TEXTURE_2D,J,ke,ge.width,ge.height,0,Re,ze,ge.data)}else if(w.isDataArrayTexture)if(He){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,ke,fe.width,fe.height,fe.depth),k)if(w.layerUpdates.size>0){const J=jh(fe.width,fe.height,w.format,w.type);for(const ae of w.layerUpdates){const Se=fe.data.subarray(ae*J/fe.data.BYTES_PER_ELEMENT,(ae+1)*J/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,fe.width,fe.height,1,Re,ze,Se)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Re,ze,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,fe.width,fe.height,fe.depth,0,Re,ze,fe.data);else if(w.isData3DTexture)He?(ct&&t.texStorage3D(i.TEXTURE_3D,Te,ke,fe.width,fe.height,fe.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Re,ze,fe.data)):t.texImage3D(i.TEXTURE_3D,0,ke,fe.width,fe.height,fe.depth,0,Re,ze,fe.data);else if(w.isFramebufferTexture){if(ct)if(He)t.texStorage2D(i.TEXTURE_2D,Te,ke,fe.width,fe.height);else{let J=fe.width,ae=fe.height;for(let Se=0;Se<Te;Se++)t.texImage2D(i.TEXTURE_2D,Se,ke,J,ae,0,Re,ze,null),J>>=1,ae>>=1}}else if($e.length>0){if(He&&ct){const J=Be($e[0]);t.texStorage2D(i.TEXTURE_2D,Te,ke,J.width,J.height)}for(let J=0,ae=$e.length;J<ae;J++)ge=$e[J],He?k&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Re,ze,ge):t.texImage2D(i.TEXTURE_2D,J,ke,Re,ze,ge);w.generateMipmaps=!1}else if(He){if(ct){const J=Be(fe);t.texStorage2D(i.TEXTURE_2D,Te,ke,J.width,J.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,ze,fe)}else t.texImage2D(i.TEXTURE_2D,0,ke,Re,ze,fe);p(w)&&m(re),Pe.__version=se.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function $(L,w,q){if(w.image.length!==6)return;const re=be(L,w),he=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+q);const se=n.get(he);if(he.version!==se.__version||re===!0){t.activeTexture(i.TEXTURE0+q);const Pe=ut.getPrimaries(ut.workingColorSpace),ve=w.colorSpace===pi?null:ut.getPrimaries(w.colorSpace),we=w.colorSpace===pi||Pe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const et=w.isCompressedTexture||w.image[0].isCompressedTexture,fe=w.image[0]&&w.image[0].isDataTexture,Re=[];for(let ae=0;ae<6;ae++)!et&&!fe?Re[ae]=v(w.image[ae],!0,s.maxCubemapSize):Re[ae]=fe?w.image[ae].image:w.image[ae],Re[ae]=ft(w,Re[ae]);const ze=Re[0],ke=r.convert(w.format,w.colorSpace),ge=r.convert(w.type),$e=S(w.internalFormat,ke,ge,w.colorSpace),He=w.isVideoTexture!==!0,ct=se.__version===void 0||re===!0,k=he.dataReady;let Te=T(w,ze);te(i.TEXTURE_CUBE_MAP,w);let J;if(et){He&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,$e,ze.width,ze.height);for(let ae=0;ae<6;ae++){J=Re[ae].mipmaps;for(let Se=0;Se<J.length;Se++){const Me=J[Se];w.format!==hn?ke!==null?He?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,0,0,Me.width,Me.height,ke,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,$e,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,0,0,Me.width,Me.height,ke,ge,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,$e,Me.width,Me.height,0,ke,ge,Me.data)}}}else{if(J=w.mipmaps,He&&ct){J.length>0&&Te++;const ae=Be(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,$e,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(fe){He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Re[ae].width,Re[ae].height,ke,ge,Re[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,$e,Re[ae].width,Re[ae].height,0,ke,ge,Re[ae].data);for(let Se=0;Se<J.length;Se++){const tt=J[Se].image[ae].image;He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,0,0,tt.width,tt.height,ke,ge,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,$e,tt.width,tt.height,0,ke,ge,tt.data)}}else{He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ke,ge,Re[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,$e,ke,ge,Re[ae]);for(let Se=0;Se<J.length;Se++){const Me=J[Se];He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,0,0,ke,ge,Me.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,$e,ke,ge,Me.image[ae])}}}p(w)&&m(i.TEXTURE_CUBE_MAP),se.__version=he.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ie(L,w,q,re,he,se){const Pe=r.convert(q.format,q.colorSpace),ve=r.convert(q.type),we=S(q.internalFormat,Pe,ve,q.colorSpace);if(!n.get(w).__hasExternalTextures){const fe=Math.max(1,w.width>>se),Re=Math.max(1,w.height>>se);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,se,we,fe,Re,w.depth,0,Pe,ve,null):t.texImage2D(he,se,we,fe,Re,0,Pe,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Qe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,he,n.get(q).__webglTexture,0,Ze(w)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,he,n.get(q).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(L,w,q){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){const re=w.depthTexture,he=re&&re.isDepthTexture?re.type:null,se=M(w.stencilBuffer,he),Pe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=Ze(w);Qe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,se,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,se,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,se,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,L)}else{const re=w.textures;for(let he=0;he<re.length;he++){const se=re[he],Pe=r.convert(se.format,se.colorSpace),ve=r.convert(se.type),we=S(se.internalFormat,Pe,ve,se.colorSpace),et=Ze(w);q&&Qe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,we,w.width,w.height):Qe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,we,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,we,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);const re=n.get(w.depthTexture).__webglTexture,he=Ze(w);if(w.depthTexture.format===Es)Qe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(w.depthTexture.format===Ls)Qe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Oe(L){const w=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const re=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),re){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,re.removeEventListener("dispose",he)};re.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=re}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");me(w.__webglFramebuffer,L)}else if(q){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]===void 0)w.__webglDepthbuffer[re]=i.createRenderbuffer(),oe(w.__webglDepthbuffer[re],L,!1);else{const he=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,se)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),oe(w.__webglDepthbuffer,L,!1);else{const re=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(L,w,q){const re=n.get(L);w!==void 0&&ie(re.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Oe(L)}function We(L){const w=L.texture,q=n.get(L),re=n.get(w);L.addEventListener("dispose",P);const he=L.textures,se=L.isWebGLCubeRenderTarget===!0,Pe=he.length>1;if(Pe||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=w.version,o.memory.textures++),se){q.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[ve]=[];for(let we=0;we<w.mipmaps.length;we++)q.__webglFramebuffer[ve][we]=i.createFramebuffer()}else q.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let ve=0;ve<w.mipmaps.length;ve++)q.__webglFramebuffer[ve]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ve=0,we=he.length;ve<we;ve++){const et=n.get(he[ve]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Qe(L)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ve=0;ve<he.length;ve++){const we=he[ve];q.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ve]);const et=r.convert(we.format,we.colorSpace),fe=r.convert(we.type),Re=S(we.internalFormat,et,fe,we.colorSpace,L.isXRRenderTarget===!0),ze=Ze(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Re,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,q.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),te(i.TEXTURE_CUBE_MAP,w);for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0)for(let we=0;we<w.mipmaps.length;we++)ie(q.__webglFramebuffer[ve][we],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we);else ie(q.__webglFramebuffer[ve],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);p(w)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ve=0,we=he.length;ve<we;ve++){const et=he[ve],fe=n.get(et);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),te(i.TEXTURE_2D,et),ie(q.__webglFramebuffer,L,et,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),p(et)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ve=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,re.__webglTexture),te(ve,w),w.mipmaps&&w.mipmaps.length>0)for(let we=0;we<w.mipmaps.length;we++)ie(q.__webglFramebuffer[we],L,w,i.COLOR_ATTACHMENT0,ve,we);else ie(q.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,ve,0);p(w)&&m(ve),t.unbindTexture()}L.depthBuffer&&Oe(L)}function rt(L){const w=L.textures;for(let q=0,re=w.length;q<re;q++){const he=w[q];if(p(he)){const se=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(he).__webglTexture;t.bindTexture(se,Pe),m(se),t.unbindTexture()}}}const Xe=[],F=[];function Mt(L){if(L.samples>0){if(Qe(L)===!1){const w=L.textures,q=L.width,re=L.height;let he=i.COLOR_BUFFER_BIT;const se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(L),ve=w.length>1;if(ve)for(let we=0;we<w.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let we=0;we<w.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[we]);const et=n.get(w[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,q,re,0,0,q,re,he,i.NEAREST),l===!0&&(Xe.length=0,F.length=0,Xe.push(i.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Xe.push(se),F.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let we=0;we<w.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[we]);const et=n.get(w[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ze(L){return Math.min(s.maxSamples,L.samples)}function Qe(L){const w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Fe(L){const w=o.render.frame;h.get(L)!==w&&(h.set(L,w),L.update())}function ft(L,w){const q=L.colorSpace,re=L.format,he=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Vt&&q!==pi&&(ut.getTransfer(q)===yt?(re!==hn||he!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function Be(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=b,this.setTexture2D=Y,this.setTexture2DArray=Q,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=Ne,this.setupRenderTarget=We,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Qe}function $x(i,e){function t(n,s=pi){let r;const o=ut.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ud)return i.BYTE;if(n===Fd)return i.SHORT;if(n===br)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Nr)return i.HALF_FLOAT;if(n===zd)return i.ALPHA;if(n===kd)return i.RGB;if(n===hn)return i.RGBA;if(n===Hd)return i.LUMINANCE;if(n===Vd)return i.LUMINANCE_ALPHA;if(n===Es)return i.DEPTH_COMPONENT;if(n===Ls)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===El)return i.RED_INTEGER;if(n===Gd)return i.RG;if(n===Tl)return i.RG_INTEGER;if(n===Al)return i.RGBA_INTEGER;if(n===Co||n===Po||n===Io||n===Lo)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===wc||n===Rc||n===Cc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pc||n===Ic||n===Lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pc||n===Ic)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dc||n===Nc||n===Oc||n===Uc||n===Fc||n===Bc||n===zc||n===kc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Do||n===Yc||n===jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Do)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wd||n===qc||n===Kc||n===Zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Yx extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $t extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jx={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kx=`
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

}`;class Zx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Lt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ti({vertexShader:qx,fragmentShader:Kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jx extends Yi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new Zx,p=t.getContextAttributes();let m=null,S=null;const M=[],T=[],I=new Ae;let P=null;const C=new Zt;C.layers.enable(1),C.viewport=new dt;const N=new Zt;N.layers.enable(2),N.viewport=new dt;const X=[C,N],E=new Yx;E.layers.enable(1),E.layers.enable(2);let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=M[$];return ie===void 0&&(ie=new Fa,M[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=M[$];return ie===void 0&&(ie=new Fa,M[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=M[$];return ie===void 0&&(ie=new Fa,M[$]=ie),ie.getHandSpace()};function V($){const ie=T.indexOf($.inputSource);if(ie===-1)return;const oe=M[ie];oe!==void 0&&(oe.update($.inputSource,$.frame,c||o),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Q);for(let $=0;$<M.length;$++){const ie=T[$];ie!==null&&(T[$]=null,M[$].disconnect(ie))}b=null,G=null,v.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,S=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Xi(f.framebufferWidth,f.framebufferHeight,{format:hn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,oe=null,me=null;p.depth&&(me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?Ls:Es,oe=p.stencil?Is:Wi);const Oe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Xi(d.textureWidth,d.textureHeight,{format:hn,type:ei,depthTexture:new of(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q($){for(let ie=0;ie<$.removed.length;ie++){const oe=$.removed[ie],me=T.indexOf(oe);me>=0&&(T[me]=null,M[me].disconnect(oe))}for(let ie=0;ie<$.added.length;ie++){const oe=$.added[ie];let me=T.indexOf(oe);if(me===-1){for(let Ne=0;Ne<M.length;Ne++)if(Ne>=T.length){T.push(oe),me=Ne;break}else if(T[Ne]===null){T[Ne]=oe,me=Ne;break}if(me===-1)break}const Oe=M[me];Oe&&Oe.connect(oe)}}const W=new D,Z=new D;function K($,ie,oe){W.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(oe.matrixWorld);const me=W.distanceTo(Z),Oe=ie.projectionMatrix.elements,Ne=oe.projectionMatrix.elements,We=Oe[14]/(Oe[10]-1),rt=Oe[14]/(Oe[10]+1),Xe=(Oe[9]+1)/Oe[5],F=(Oe[9]-1)/Oe[5],Mt=(Oe[8]-1)/Oe[0],Ze=(Ne[8]+1)/Ne[0],Qe=We*Mt,Fe=We*Ze,ft=me/(-Mt+Ze),Be=ft*-Mt;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Be),$.translateZ(ft),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Oe[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const L=We+ft,w=rt+ft,q=Qe-Be,re=Fe+(me-Be),he=Xe*rt/w*L,se=F*rt/w*L;$.projectionMatrix.makePerspective(q,re,he,se,L,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ie=$.near,oe=$.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(oe=v.depthFar)),E.near=N.near=C.near=ie,E.far=N.far=C.far=oe,(b!==E.near||G!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),b=E.near,G=E.far);const me=$.parent,Oe=E.cameras;ce(E,me);for(let Ne=0;Ne<Oe.length;Ne++)ce(Oe[Ne],me);Oe.length===2?K(E,C,N):E.projectionMatrix.copy(C.projectionMatrix),le($,E,me)};function le($,ie,oe){oe===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ds*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let te=null;function be($,ie){if(h=ie.getViewerPose(c||o),g=ie,h!==null){const oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let me=!1;oe.length!==E.cameras.length&&(E.cameras.length=0,me=!0);for(let Ne=0;Ne<oe.length;Ne++){const We=oe[Ne];let rt=null;if(f!==null)rt=f.getViewport(We);else{const F=u.getViewSubImage(d,We);rt=F.viewport,Ne===0&&(e.setRenderTargetTextures(S,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(S))}let Xe=X[Ne];Xe===void 0&&(Xe=new Zt,Xe.layers.enable(Ne),Xe.viewport=new dt,X[Ne]=Xe),Xe.matrix.fromArray(We.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(We.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(rt.x,rt.y,rt.width,rt.height),Ne===0&&(E.matrix.copy(Xe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),me===!0&&E.cameras.push(Xe)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ne=u.getDepthInformation(oe[0]);Ne&&Ne.isValid&&Ne.texture&&v.init(e,Ne,s.renderState)}}for(let oe=0;oe<M.length;oe++){const me=T[oe],Oe=M[oe];me!==null&&Oe!==void 0&&Oe.update(me,ie,c||o)}te&&te($,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const _e=new rf;_e.setAnimationLoop(be),this.setAnimationLoop=function($){te=$},this.dispose=function(){}}}const Ri=new _n,Qx=new Ge;function ey(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,tf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,M,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Qt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Qt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),M=S.envMap,T=S.envMapRotation;M&&(p.envMap.value=M,Ri.copy(T),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),p.envMapRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(Ri)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ty(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const T=M.program;n.uniformBlockBinding(S,T)}function c(S,M){let T=s[S.id];T===void 0&&(g(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",p));const I=M.program;n.updateUBOMapping(S,I);const P=e.render.frame;r[S.id]!==P&&(d(S),r[S.id]=P)}function h(S){const M=u();S.__bindingPointIndex=M;const T=i.createBuffer(),I=S.__size,P=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=s[S.id],T=S.uniforms,I=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,C=T.length;P<C;P++){const N=Array.isArray(T[P])?T[P]:[T[P]];for(let X=0,E=N.length;X<E;X++){const b=N[X];if(f(b,P,X,I)===!0){const G=b.__offset,V=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let Q=0;Q<V.length;Q++){const W=V[Q],Z=v(W);typeof W=="number"||typeof W=="boolean"?(b.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,G+Y,b.__data)):W.isMatrix3?(b.__data[0]=W.elements[0],b.__data[1]=W.elements[1],b.__data[2]=W.elements[2],b.__data[3]=0,b.__data[4]=W.elements[3],b.__data[5]=W.elements[4],b.__data[6]=W.elements[5],b.__data[7]=0,b.__data[8]=W.elements[6],b.__data[9]=W.elements[7],b.__data[10]=W.elements[8],b.__data[11]=0):(W.toArray(b.__data,Y),Y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,M,T,I){const P=S.value,C=M+"_"+T;if(I[C]===void 0)return typeof P=="number"||typeof P=="boolean"?I[C]=P:I[C]=P.clone(),!0;{const N=I[C];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return I[C]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function g(S){const M=S.uniforms;let T=0;const I=16;for(let C=0,N=M.length;C<N;C++){const X=Array.isArray(M[C])?M[C]:[M[C]];for(let E=0,b=X.length;E<b;E++){const G=X[E],V=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,Q=V.length;Y<Q;Y++){const W=V[Y],Z=v(W),K=T%I,ce=K%Z.boundary,le=K+ce;T+=ce,le!==0&&I-le<Z.storage&&(T+=I-le),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=Z.storage}}}const P=T%I;return P>0&&(T+=I-P),S.__size=T,S.__cache={},this}function v(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){const M=S.target;M.removeEventListener("dispose",p);const T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class ny{constructor(e={}){const{canvas:t=Gm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=xi,this.toneMappingExposure=1;const M=this;let T=!1,I=0,P=0,C=null,N=-1,X=null;const E=new dt,b=new dt;let G=null;const V=new Ve(0);let Y=0,Q=t.width,W=t.height,Z=1,K=null,ce=null;const le=new dt(0,0,Q,W),te=new dt(0,0,Q,W);let be=!1;const _e=new Pl;let $=!1,ie=!1;const oe=new Ge,me=new Ge,Oe=new D,Ne=new dt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Xe(){return C===null?Z:1}let F=n;function Mt(A,U){return t.getContext(A,U)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vl}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Me,!1),F===null){const U="webgl2";if(F=Mt(U,A),F===null)throw Mt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ze,Qe,Fe,ft,Be,L,w,q,re,he,se,Pe,ve,we,et,fe,Re,ze,ke,ge,$e,He,ct,k;function Te(){Ze=new av(F),Ze.init(),He=new $x(F,Ze),Qe=new tv(F,Ze,e,He),Fe=new Gx(F),Qe.reverseDepthBuffer&&Fe.buffers.depth.setReversed(!0),ft=new hv(F),Be=new Rx,L=new Xx(F,Ze,Fe,Be,Qe,He,ft),w=new iv(M),q=new ov(M),re=new _g(F),ct=new Q_(F,re),he=new cv(F,re,ft,ct),se=new dv(F,he,re,ft),ke=new uv(F,Qe,L),fe=new nv(Be),Pe=new wx(M,w,q,Ze,Qe,ct,fe),ve=new ey(M,Be),we=new Px,et=new Ux(Ze),ze=new J_(M,w,q,Fe,se,d,l),Re=new Hx(M,se,Qe),k=new ty(F,ft,Qe,Fe),ge=new ev(F,Ze,ft),$e=new lv(F,Ze,ft),ft.programs=Pe.programs,M.capabilities=Qe,M.extensions=Ze,M.properties=Be,M.renderLists=we,M.shadowMap=Re,M.state=Fe,M.info=ft}Te();const J=new Jx(M,F);this.xr=J,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Ze.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ze.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(Q,W,!1))},this.getSize=function(A){return A.set(Q,W)},this.setSize=function(A,U,B=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=A,W=U,t.width=Math.floor(A*Z),t.height=Math.floor(U*Z),B===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(Q*Z,W*Z).floor()},this.setDrawingBufferSize=function(A,U,B){Q=A,W=U,Z=B,t.width=Math.floor(A*B),t.height=Math.floor(U*B),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,U,B,H){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,U,B,H),Fe.viewport(E.copy(le).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,U,B,H){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,U,B,H),Fe.scissor(b.copy(te).multiplyScalar(Z).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(A){Fe.setScissorTest(be=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){ce=A},this.getClearColor=function(A){return A.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(A=!0,U=!0,B=!0){let H=0;if(A){let O=!1;if(C!==null){const ee=C.texture.format;O=ee===Al||ee===Tl||ee===El}if(O){const ee=C.texture.type,j=ee===ei||ee===Wi||ee===br||ee===Is||ee===yl||ee===Sl,ue=ze.getClearColor(),xe=ze.getClearAlpha(),Ee=ue.r,pe=ue.g,de=ue.b;j?(f[0]=Ee,f[1]=pe,f[2]=de,f[3]=xe,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=Ee,g[1]=pe,g[2]=de,g[3]=xe,F.clearBufferiv(F.COLOR,0,g))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),we.dispose(),et.dispose(),Be.dispose(),w.dispose(),q.dispose(),se.dispose(),ct.dispose(),k.dispose(),Pe.dispose(),J.dispose(),J.removeEventListener("sessionstart",un),J.removeEventListener("sessionend",In),rn.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=ft.autoReset,U=Re.enabled,B=Re.autoUpdate,H=Re.needsUpdate,O=Re.type;Te(),ft.autoReset=A,Re.enabled=U,Re.autoUpdate=B,Re.needsUpdate=H,Re.type=O}function Me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tt(A){const U=A.target;U.removeEventListener("dispose",tt),vt(U)}function vt(A){Ft(A),Be.remove(A)}function Ft(A){const U=Be.get(A).programs;U!==void 0&&(U.forEach(function(B){Pe.releaseProgram(B)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,B,H,O,ee){U===null&&(U=We);const j=O.isMesh&&O.matrixWorld.determinant()<0,ue=Ce(A,U,B,H,O);Fe.setMaterial(H,j);let xe=B.index,Ee=1;if(H.wireframe===!0){if(xe=he.getWireframeAttribute(B),xe===void 0)return;Ee=2}const pe=B.drawRange,de=B.attributes.position;let je=pe.start*Ee,nt=(pe.start+pe.count)*Ee;ee!==null&&(je=Math.max(je,ee.start*Ee),nt=Math.min(nt,(ee.start+ee.count)*Ee)),xe!==null?(je=Math.max(je,0),nt=Math.min(nt,xe.count)):de!=null&&(je=Math.max(je,0),nt=Math.min(nt,de.count));const it=nt-je;if(it<0||it===1/0)return;ct.setup(O,H,ue,B,xe);let lt,Ue=ge;if(xe!==null&&(lt=re.get(xe),Ue=$e,Ue.setIndex(lt)),O.isMesh)H.wireframe===!0?(Fe.setLineWidth(H.wireframeLinewidth*Xe()),Ue.setMode(F.LINES)):Ue.setMode(F.TRIANGLES);else if(O.isLine){let Ie=H.linewidth;Ie===void 0&&(Ie=1),Fe.setLineWidth(Ie*Xe()),O.isLineSegments?Ue.setMode(F.LINES):O.isLineLoop?Ue.setMode(F.LINE_LOOP):Ue.setMode(F.LINE_STRIP)}else O.isPoints?Ue.setMode(F.POINTS):O.isSprite&&Ue.setMode(F.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ue.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Ue.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ie=O._multiDrawStarts,mt=O._multiDrawCounts,ot=O._multiDrawCount,Tt=xe?re.get(xe).bytesPerElement:1,on=Be.get(H).currentProgram.getUniforms();for(let Yt=0;Yt<ot;Yt++)on.setValue(F,"_gl_DrawID",Yt),Ue.render(Ie[Yt]/Tt,mt[Yt])}else if(O.isInstancedMesh)Ue.renderInstances(je,it,O.count);else if(B.isInstancedBufferGeometry){const Ie=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,mt=Math.min(B.instanceCount,Ie);Ue.renderInstances(je,it,mt)}else Ue.render(je,it)};function at(A,U,B){A.transparent===!0&&A.side===mn&&A.forceSinglePass===!1?(A.side=Qt,A.needsUpdate=!0,z(A,U,B),A.side=Qn,A.needsUpdate=!0,z(A,U,B),A.side=mn):z(A,U,B)}this.compile=function(A,U,B=null){B===null&&(B=A),p=et.get(B),p.init(U),S.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),A!==B&&A.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ee=O.material;if(ee)if(Array.isArray(ee))for(let j=0;j<ee.length;j++){const ue=ee[j];at(ue,B,O),H.add(ue)}else at(ee,B,O),H.add(ee)}),S.pop(),p=null,H},this.compileAsync=function(A,U,B=null){const H=this.compile(A,U,B);return new Promise(O=>{function ee(){if(H.forEach(function(j){Be.get(j).currentProgram.isReady()&&H.delete(j)}),H.size===0){O(A);return}setTimeout(ee,10)}Ze.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let _t=null;function sn(A){_t&&_t(A)}function un(){rn.stop()}function In(){rn.start()}const rn=new rf;rn.setAnimationLoop(sn),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(A){_t=A,J.setAnimationLoop(A),A===null?rn.stop():rn.start()},J.addEventListener("sessionstart",un),J.addEventListener("sessionend",In),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(U),U=J.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,U,C),p=et.get(A,S.length),p.init(U),S.push(p),me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),_e.setFromProjectionMatrix(me),ie=this.localClippingEnabled,$=fe.init(this.clippingPlanes,ie),v=we.get(A,m.length),v.init(),m.push(v),J.enabled===!0&&J.isPresenting===!0){const ee=M.xr.getDepthSensingMesh();ee!==null&&Mi(ee,U,-1/0,M.sortObjects)}Mi(A,U,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(K,ce),rt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,rt&&ze.addToRenderList(v,A),this.info.render.frame++,$===!0&&fe.beginShadows();const B=p.state.shadowsArray;Re.render(B,A,U),$===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=v.opaque,O=v.transmissive;if(p.setupLights(),U.isArrayCamera){const ee=U.cameras;if(O.length>0)for(let j=0,ue=ee.length;j<ue;j++){const xe=ee[j];_(H,O,A,xe)}rt&&ze.render(A);for(let j=0,ue=ee.length;j<ue;j++){const xe=ee[j];x(v,A,xe,xe.viewport)}}else O.length>0&&_(H,O,A,U),rt&&ze.render(A),x(v,A,U);C!==null&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(M,A,U),ct.resetDefaultState(),N=-1,X=null,S.pop(),S.length>0?(p=S[S.length-1],$===!0&&fe.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Mi(A,U,B,H){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)B=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||_e.intersectsSprite(A)){H&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);const j=se.update(A),ue=A.material;ue.visible&&v.push(A,j,ue,B,Ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||_e.intersectsObject(A))){const j=se.update(A),ue=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(j.boundingSphere===null&&j.computeBoundingSphere(),Ne.copy(j.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(ue)){const xe=j.groups;for(let Ee=0,pe=xe.length;Ee<pe;Ee++){const de=xe[Ee],je=ue[de.materialIndex];je&&je.visible&&v.push(A,j,je,B,Ne.z,de)}}else ue.visible&&v.push(A,j,ue,B,Ne.z,null)}}const ee=A.children;for(let j=0,ue=ee.length;j<ue;j++)Mi(ee[j],U,B,H)}function x(A,U,B,H){const O=A.opaque,ee=A.transmissive,j=A.transparent;p.setupLightsView(B),$===!0&&fe.setGlobalState(M.clippingPlanes,B),H&&Fe.viewport(E.copy(H)),O.length>0&&y(O,U,B),ee.length>0&&y(ee,U,B),j.length>0&&y(j,U,B),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function _(A,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Xi(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Nr:ei,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const ee=p.state.transmissionRenderTarget[H.id],j=H.viewport||E;ee.setSize(j.z,j.w);const ue=M.getRenderTarget();M.setRenderTarget(ee),M.getClearColor(V),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),rt&&ze.render(B);const xe=M.toneMapping;M.toneMapping=xi;const Ee=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),$===!0&&fe.setGlobalState(M.clippingPlanes,H),y(A,B,H),L.updateMultisampleRenderTarget(ee),L.updateRenderTargetMipmap(ee),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let de=0,je=U.length;de<je;de++){const nt=U[de],it=nt.object,lt=nt.geometry,Ue=nt.material,Ie=nt.group;if(Ue.side===mn&&it.layers.test(H.layers)){const mt=Ue.side;Ue.side=Qt,Ue.needsUpdate=!0,R(it,B,H,lt,Ue,Ie),Ue.side=mt,Ue.needsUpdate=!0,pe=!0}}pe===!0&&(L.updateMultisampleRenderTarget(ee),L.updateRenderTargetMipmap(ee))}M.setRenderTarget(ue),M.setClearColor(V,Y),Ee!==void 0&&(H.viewport=Ee),M.toneMapping=xe}function y(A,U,B){const H=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ee=A.length;O<ee;O++){const j=A[O],ue=j.object,xe=j.geometry,Ee=H===null?j.material:H,pe=j.group;ue.layers.test(B.layers)&&R(ue,U,B,xe,Ee,pe)}}function R(A,U,B,H,O,ee){A.onBeforeRender(M,U,B,H,O,ee),A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(M,U,B,H,A,ee),O.transparent===!0&&O.side===mn&&O.forceSinglePass===!1?(O.side=Qt,O.needsUpdate=!0,M.renderBufferDirect(B,U,H,O,A,ee),O.side=Qn,O.needsUpdate=!0,M.renderBufferDirect(B,U,H,O,A,ee),O.side=mn):M.renderBufferDirect(B,U,H,O,A,ee),A.onAfterRender(M,U,B,H,O,ee)}function z(A,U,B){U.isScene!==!0&&(U=We);const H=Be.get(A),O=p.state.lights,ee=p.state.shadowsArray,j=O.state.version,ue=Pe.getParameters(A,O.state,ee,U,B),xe=Pe.getProgramCacheKey(ue);let Ee=H.programs;H.environment=A.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(A.isMeshStandardMaterial?q:w).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Ee===void 0&&(A.addEventListener("dispose",tt),Ee=new Map,H.programs=Ee);let pe=Ee.get(xe);if(pe!==void 0){if(H.currentProgram===pe&&H.lightsStateVersion===j)return De(A,ue),pe}else ue.uniforms=Pe.getUniforms(A),A.onBeforeCompile(ue,M),pe=Pe.acquireProgram(ue,xe),Ee.set(xe,pe),H.uniforms=ue.uniforms;const de=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(de.clippingPlanes=fe.uniform),De(A,ue),H.needsLights=Ye(A),H.lightsStateVersion=j,H.needsLights&&(de.ambientLightColor.value=O.state.ambient,de.lightProbe.value=O.state.probe,de.directionalLights.value=O.state.directional,de.directionalLightShadows.value=O.state.directionalShadow,de.spotLights.value=O.state.spot,de.spotLightShadows.value=O.state.spotShadow,de.rectAreaLights.value=O.state.rectArea,de.ltc_1.value=O.state.rectAreaLTC1,de.ltc_2.value=O.state.rectAreaLTC2,de.pointLights.value=O.state.point,de.pointLightShadows.value=O.state.pointShadow,de.hemisphereLights.value=O.state.hemi,de.directionalShadowMap.value=O.state.directionalShadowMap,de.directionalShadowMatrix.value=O.state.directionalShadowMatrix,de.spotShadowMap.value=O.state.spotShadowMap,de.spotLightMatrix.value=O.state.spotLightMatrix,de.spotLightMap.value=O.state.spotLightMap,de.pointShadowMap.value=O.state.pointShadowMap,de.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=pe,H.uniformsList=null,pe}function ne(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=Oo.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function De(A,U){const B=Be.get(A);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Ce(A,U,B,H,O){U.isScene!==!0&&(U=We),L.resetTextureUnits();const ee=U.fog,j=H.isMeshStandardMaterial?U.environment:null,ue=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Vt,xe=(H.isMeshStandardMaterial?q:w).get(H.envMap||j),Ee=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pe=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),de=!!B.morphAttributes.position,je=!!B.morphAttributes.normal,nt=!!B.morphAttributes.color;let it=xi;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(it=M.toneMapping);const lt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ue=lt!==void 0?lt.length:0,Ie=Be.get(H),mt=p.state.lights;if($===!0&&(ie===!0||A!==X)){const tn=A===X&&H.id===N;fe.setState(H,A,tn)}let ot=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==mt.state.version||Ie.outputColorSpace!==ue||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==xe||H.fog===!0&&Ie.fog!==ee||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==fe.numPlanes||Ie.numIntersection!==fe.numIntersection)||Ie.vertexAlphas!==Ee||Ie.vertexTangents!==pe||Ie.morphTargets!==de||Ie.morphNormals!==je||Ie.morphColors!==nt||Ie.toneMapping!==it||Ie.morphTargetsCount!==Ue)&&(ot=!0):(ot=!0,Ie.__version=H.version);let Tt=Ie.currentProgram;ot===!0&&(Tt=z(H,U,O));let on=!1,Yt=!1,ii=!1;const ht=Tt.getUniforms(),en=Ie.uniforms;if(Fe.useProgram(Tt.program)&&(on=!0,Yt=!0,ii=!0),H.id!==N&&(N=H.id,Yt=!0),on||X!==A){Qe.reverseDepthBuffer?(oe.copy(A.projectionMatrix),Xm(oe),$m(oe),ht.setValue(F,"projectionMatrix",oe)):ht.setValue(F,"projectionMatrix",A.projectionMatrix),ht.setValue(F,"viewMatrix",A.matrixWorldInverse);const tn=ht.map.cameraPosition;tn!==void 0&&tn.setValue(F,Oe.setFromMatrixPosition(A.matrixWorld)),Qe.logarithmicDepthBuffer&&ht.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ht.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,Yt=!0,ii=!0)}if(O.isSkinnedMesh){ht.setOptional(F,O,"bindMatrix"),ht.setOptional(F,O,"bindMatrixInverse");const tn=O.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),ht.setValue(F,"boneTexture",tn.boneTexture,L))}O.isBatchedMesh&&(ht.setOptional(F,O,"batchingTexture"),ht.setValue(F,"batchingTexture",O._matricesTexture,L),ht.setOptional(F,O,"batchingIdTexture"),ht.setValue(F,"batchingIdTexture",O._indirectTexture,L),ht.setOptional(F,O,"batchingColorTexture"),O._colorsTexture!==null&&ht.setValue(F,"batchingColorTexture",O._colorsTexture,L));const zn=B.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&ke.update(O,B,Tt),(Yt||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,ht.setValue(F,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(en.envMap.value=xe,en.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(en.envMapIntensity.value=U.environmentIntensity),Yt&&(ht.setValue(F,"toneMappingExposure",M.toneMappingExposure),Ie.needsLights&&Je(en,ii),ee&&H.fog===!0&&ve.refreshFogUniforms(en,ee),ve.refreshMaterialUniforms(en,H,Z,W,p.state.transmissionRenderTarget[A.id]),Oo.upload(F,ne(Ie),en,L)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Oo.upload(F,ne(Ie),en,L),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ht.setValue(F,"center",O.center),ht.setValue(F,"modelViewMatrix",O.modelViewMatrix),ht.setValue(F,"normalMatrix",O.normalMatrix),ht.setValue(F,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const tn=H.uniformsGroups;for(let aa=0,Np=tn.length;aa<Np;aa++){const Ql=tn[aa];k.update(Ql,Tt),k.bind(Ql,Tt)}}return Tt}function Je(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Ye(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,U,B){Be.get(A.texture).__webglTexture=U,Be.get(A.depthTexture).__webglTexture=B;const H=Be.get(A);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const B=Be.get(A);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,B=0){C=A,I=U,P=B;let H=!0,O=null,ee=!1,j=!1;if(A){const xe=Be.get(A);if(xe.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(F.FRAMEBUFFER,null),H=!1;else if(xe.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(xe.__hasExternalTextures)L.rebindTextures(A,Be.get(A.texture).__webglTexture,Be.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const de=A.depthTexture;if(xe.__boundDepthTexture!==de){if(de!==null&&Be.has(de)&&(A.width!==de.image.width||A.height!==de.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const Ee=A.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(j=!0);const pe=Be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(pe[U])?O=pe[U][B]:O=pe[U],ee=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?O=Be.get(A).__webglMultisampledFramebuffer:Array.isArray(pe)?O=pe[B]:O=pe,E.copy(A.viewport),b.copy(A.scissor),G=A.scissorTest}else E.copy(le).multiplyScalar(Z).floor(),b.copy(te).multiplyScalar(Z).floor(),G=be;if(Fe.bindFramebuffer(F.FRAMEBUFFER,O)&&H&&Fe.drawBuffers(A,O),Fe.viewport(E),Fe.scissor(b),Fe.setScissorTest(G),ee){const xe=Be.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,B)}else if(j){const xe=Be.get(A.texture),Ee=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.__webglTexture,B||0,Ee)}N=-1},this.readRenderTargetPixels=function(A,U,B,H,O,ee,j){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=Be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&j!==void 0&&(ue=ue[j]),ue){Fe.bindFramebuffer(F.FRAMEBUFFER,ue);try{const xe=A.texture,Ee=xe.format,pe=xe.type;if(!Qe.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-H&&B>=0&&B<=A.height-O&&F.readPixels(U,B,H,O,He.convert(Ee),He.convert(pe),ee)}finally{const xe=C!==null?Be.get(C).__webglFramebuffer:null;Fe.bindFramebuffer(F.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(A,U,B,H,O,ee,j){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=Be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&j!==void 0&&(ue=ue[j]),ue){const xe=A.texture,Ee=xe.format,pe=xe.type;if(!Qe.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=A.width-H&&B>=0&&B<=A.height-O){Fe.bindFramebuffer(F.FRAMEBUFFER,ue);const de=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,de),F.bufferData(F.PIXEL_PACK_BUFFER,ee.byteLength,F.STREAM_READ),F.readPixels(U,B,H,O,He.convert(Ee),He.convert(pe),0);const je=C!==null?Be.get(C).__webglFramebuffer:null;Fe.bindFramebuffer(F.FRAMEBUFFER,je);const nt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Wm(F,nt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,de),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ee),F.deleteBuffer(de),F.deleteSync(nt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,U=null,B=0){A.isTexture!==!0&&(No("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,A=arguments[1]);const H=Math.pow(2,-B),O=Math.floor(A.image.width*H),ee=Math.floor(A.image.height*H),j=U!==null?U.x:0,ue=U!==null?U.y:0;L.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,j,ue,O,ee),Fe.unbindTexture()},this.copyTextureToTexture=function(A,U,B=null,H=null,O=0){A.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1],U=arguments[2],O=arguments[3]||0,B=null);let ee,j,ue,xe,Ee,pe;B!==null?(ee=B.max.x-B.min.x,j=B.max.y-B.min.y,ue=B.min.x,xe=B.min.y):(ee=A.image.width,j=A.image.height,ue=0,xe=0),H!==null?(Ee=H.x,pe=H.y):(Ee=0,pe=0);const de=He.convert(U.format),je=He.convert(U.type);L.setTexture2D(U,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const nt=F.getParameter(F.UNPACK_ROW_LENGTH),it=F.getParameter(F.UNPACK_IMAGE_HEIGHT),lt=F.getParameter(F.UNPACK_SKIP_PIXELS),Ue=F.getParameter(F.UNPACK_SKIP_ROWS),Ie=F.getParameter(F.UNPACK_SKIP_IMAGES),mt=A.isCompressedTexture?A.mipmaps[O]:A.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ue),F.pixelStorei(F.UNPACK_SKIP_ROWS,xe),A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,O,Ee,pe,ee,j,de,je,mt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,O,Ee,pe,mt.width,mt.height,de,mt.data):F.texSubImage2D(F.TEXTURE_2D,O,Ee,pe,ee,j,de,je,mt),F.pixelStorei(F.UNPACK_ROW_LENGTH,nt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,it),F.pixelStorei(F.UNPACK_SKIP_PIXELS,lt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ue),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ie),O===0&&U.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(A,U,B=null,H=null,O=0){A.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,A=arguments[2],U=arguments[3],O=arguments[4]||0);let ee,j,ue,xe,Ee,pe,de,je,nt;const it=A.isCompressedTexture?A.mipmaps[O]:A.image;B!==null?(ee=B.max.x-B.min.x,j=B.max.y-B.min.y,ue=B.max.z-B.min.z,xe=B.min.x,Ee=B.min.y,pe=B.min.z):(ee=it.width,j=it.height,ue=it.depth,xe=0,Ee=0,pe=0),H!==null?(de=H.x,je=H.y,nt=H.z):(de=0,je=0,nt=0);const lt=He.convert(U.format),Ue=He.convert(U.type);let Ie;if(U.isData3DTexture)L.setTexture3D(U,0),Ie=F.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)L.setTexture2DArray(U,0),Ie=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const mt=F.getParameter(F.UNPACK_ROW_LENGTH),ot=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Tt=F.getParameter(F.UNPACK_SKIP_PIXELS),on=F.getParameter(F.UNPACK_SKIP_ROWS),Yt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,it.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,it.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,pe),A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ie,O,de,je,nt,ee,j,ue,lt,Ue,it.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,O,de,je,nt,ee,j,ue,lt,it.data):F.texSubImage3D(Ie,O,de,je,nt,ee,j,ue,lt,Ue,it),F.pixelStorei(F.UNPACK_ROW_LENGTH,mt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Tt),F.pixelStorei(F.UNPACK_SKIP_ROWS,on),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yt),O===0&&U.generateMipmaps&&F.generateMipmap(Ie),Fe.unbindTexture()},this.initRenderTarget=function(A){Be.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Fe.unbindTexture()},this.resetState=function(){I=0,P=0,C=null,Fe.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wl?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===na?"display-p3":"srgb"}}class iy extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class uf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=el,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new D;class Pr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Dl extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cs;const Ks=new D,ls=new D,hs=new D,us=new Ae,Zs=new Ae,df=new Ge,oo=new D,Js=new D,ao=new D,qh=new Ae,Ba=new Ae,Kh=new Ae;class ff extends St{constructor(e=new Dl){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new Ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uf(t,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new Pr(n,3,0,!1)),cs.setAttribute("uv",new Pr(n,2,3,!1))}this.geometry=cs,this.material=e,this.center=new Ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),df.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-hs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;co(oo.set(-.5,-.5,0),hs,o,ls,s,r),co(Js.set(.5,-.5,0),hs,o,ls,s,r),co(ao.set(.5,.5,0),hs,o,ls,s,r),qh.set(0,0),Ba.set(1,0),Kh.set(1,1);let a=e.ray.intersectTriangle(oo,Js,ao,!1,Ks);if(a===null&&(co(Js.set(-.5,.5,0),hs,o,ls,s,r),Ba.set(0,1),a=e.ray.intersectTriangle(oo,ao,Js,!1,Ks),a===null))return;const l=e.ray.origin.distanceTo(Ks);l<e.near||l>e.far||t.push({distance:l,point:Ks.clone(),uv:gn.getInterpolation(Ks,oo,Js,ao,qh,Ba,Kh,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function co(i,e,t,n,s,r){us.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Zs.x=r*us.x-s*us.y,Zs.y=s*us.x+r*us.y):Zs.copy(us),i.copy(e),i.x+=Zs.x,i.y+=Zs.y,i.applyMatrix4(df)}const Zh=new D,Jh=new dt,Qh=new dt,sy=new D,eu=new Ge,lo=new D,za=new On,tu=new Ge,ka=new Or;class ry extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sh,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ni),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingBox.expandByPoint(lo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingSphere.expandByPoint(lo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),za.copy(this.boundingSphere),za.applyMatrix4(s),e.ray.intersectsSphere(za)!==!1&&(tu.copy(s).invert(),ka.copy(e.ray).applyMatrix4(tu),!(this.boundingBox!==null&&ka.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ka)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Jh.fromBufferAttribute(s.attributes.skinIndex,e),Qh.fromBufferAttribute(s.attributes.skinWeight,e),Zh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Qh.getComponent(r);if(o!==0){const a=Jh.getComponent(r);eu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(sy.copy(Zh).applyMatrix4(eu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pf extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mf extends Lt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Jt,h=Jt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nu=new Ge,oy=new Ge;class Nl{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:oy;nu.multiplyMatrices(a,t[r]),nu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Nl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mf(t,e,e,hn,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new pf),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class nl extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new Ge,iu=new Ge,ho=[],su=new ni,ay=new Ge,Qs=new xt,er=new On;class cy extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ay)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),su.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(su)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),er.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),e.ray.intersectsSphere(er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),iu.multiplyMatrices(n,ds),Qs.matrixWorld=iu,Qs.raycast(e,ho);for(let o=0,a=ho.length;o<a;o++){const l=ho[o];l.instanceId=r,l.object=this,t.push(l)}ho.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new mf(new Float32Array(s*this.count),s,this.count,Ml,bn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Us extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zo=new D,Jo=new D,ru=new Ge,tr=new Or,uo=new On,Ha=new D,ou=new D;class Ol extends St{constructor(e=new Ut,t=new Us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Zo.fromBufferAttribute(t,s-1),Jo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Zo.distanceTo(Jo);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;ru.copy(s).invert(),tr.copy(e.ray).applyMatrix4(ru);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=h.getX(v),S=h.getX(v+1),M=fo(this,e,tr,l,m,S);M&&t.push(M)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(f),m=fo(this,e,tr,l,v,p);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=fo(this,e,tr,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=fo(this,e,tr,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fo(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Zo.fromBufferAttribute(o,s),Jo.fromBufferAttribute(o,r),t.distanceSqToSegment(Zo,Jo,Ha,ou)>n)return;Ha.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ha);if(!(l<e.near||l>e.far))return{distance:l,point:ou.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const au=new D,cu=new D;class $i extends Ol{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)au.fromBufferAttribute(t,s),cu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+au.distanceTo(cu);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ly extends Ol{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gf extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lu=new Ge,il=new Or,po=new On,mo=new D;class hy extends St{constructor(e=new Ut,t=new gf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;lu.copy(s).invert(),il.copy(e.ray).applyMatrix4(lu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const p=c.getX(g);mo.fromBufferAttribute(u,p),hu(mo,p,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)mo.fromBufferAttribute(u,g),hu(mo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function hu(i,e,t,n,s,r,o){const a=il.distanceSqToPoint(i);if(a<t){const l=new D;il.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class _f extends Lt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ae:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,s=[],r=[],o=[],a=new D,l=new Ge;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(It(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(It(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ul extends Un{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class uy extends Ul{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fl(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const go=new D,Va=new Fl,Ga=new Fl,Wa=new Fl;class dy extends Un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(go.subVectors(s[0],s[1]).add(s[0]),c=go);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(go.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=go),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Va.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,p),Ga.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,p),Wa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ga.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Wa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Va.calc(l),Ga.calc(l),Wa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function uu(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function fy(i,e){const t=1-i;return t*t*e}function py(i,e){return 2*(1-i)*i*e}function my(i,e){return i*i*e}function yr(i,e,t,n){return fy(i,e)+py(i,t)+my(i,n)}function gy(i,e){const t=1-i;return t*t*t*e}function _y(i,e){const t=1-i;return 3*t*t*i*e}function vy(i,e){return 3*(1-i)*i*i*e}function xy(i,e){return i*i*i*e}function Sr(i,e,t,n,s){return gy(i,e)+_y(i,t)+vy(i,n)+xy(i,s)}class vf extends Un{constructor(e=new Ae,t=new Ae,n=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ae){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(e,s.x,r.x,o.x,a.x),Sr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yy extends Un{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(e,s.x,r.x,o.x,a.x),Sr(e,s.y,r.y,o.y,a.y),Sr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xf extends Un{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sy extends Un{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yf extends Un{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(yr(e,s.x,r.x,o.x),yr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class My extends Un{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(yr(e,s.x,r.x,o.x),yr(e,s.y,r.y,o.y),yr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sf extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(uu(a,l.x,c.x,h.x,u.x),uu(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}}var du=Object.freeze({__proto__:null,ArcCurve:uy,CatmullRomCurve3:dy,CubicBezierCurve:vf,CubicBezierCurve3:yy,EllipseCurve:Ul,LineCurve:xf,LineCurve3:Sy,QuadraticBezierCurve:yf,QuadraticBezierCurve3:My,SplineCurve:Sf});class Ey extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new du[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new du[s.type]().fromJSON(s))}return this}}class Ty extends Ey{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new xf(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new yf(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new vf(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s),new Ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Sf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Ul(e,t,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Bl extends Ut{constructor(e=[new Ae(0,-.5),new Ae(.5,0),new Ae(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=It(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new D,d=new Ae,f=new D,g=new D,v=new D;let p=0,m=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:p=e[S+1].x-e[S].x,m=e[S+1].y-e[S].y,f.x=m*1,f.y=-p,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:p=e[S+1].x-e[S].x,m=e[S+1].y-e[S].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let S=0;S<=t;S++){const M=n+S*h*s,T=Math.sin(M),I=Math.cos(M);for(let P=0;P<=e.length-1;P++){u.x=e[P].x*T,u.y=e[P].y,u.z=e[P].x*I,o.push(u.x,u.y,u.z),d.x=S/t,d.y=P/(e.length-1),a.push(d.x,d.y);const C=l[3*P+0]*T,N=l[3*P+1],X=l[3*P+0]*I;c.push(C,N,X)}}for(let S=0;S<t;S++)for(let M=0;M<e.length-1;M++){const T=M+S*e.length,I=T,P=T+e.length,C=T+e.length+1,N=T+1;r.push(I,P,N),r.push(C,N,P)}this.setIndex(r),this.setAttribute("position",new At(o,3)),this.setAttribute("uv",new At(a,2)),this.setAttribute("normal",new At(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.points,e.segments,e.phiStart,e.phiLength)}}class zl extends Bl{constructor(e=1,t=1,n=4,s=8){const r=new Ty;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new zl(e.radius,e.length,e.capSegments,e.radialSegments)}}class Fr extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],p=n/2;let m=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new At(u,3)),this.setAttribute("normal",new At(d,3)),this.setAttribute("uv",new At(f,2));function S(){const T=new D,I=new D;let P=0;const C=(t-e)/n;for(let N=0;N<=r;N++){const X=[],E=N/r,b=E*(t-e)+e;for(let G=0;G<=s;G++){const V=G/s,Y=V*l+a,Q=Math.sin(Y),W=Math.cos(Y);I.x=b*Q,I.y=-E*n+p,I.z=b*W,u.push(I.x,I.y,I.z),T.set(Q,C,W).normalize(),d.push(T.x,T.y,T.z),f.push(V,1-E),X.push(g++)}v.push(X)}for(let N=0;N<s;N++)for(let X=0;X<r;X++){const E=v[X][N],b=v[X+1][N],G=v[X+1][N+1],V=v[X][N+1];e>0&&(h.push(E,b,V),P+=3),t>0&&(h.push(b,G,V),P+=3)}c.addGroup(m,P,0),m+=P}function M(T){const I=g,P=new Ae,C=new D;let N=0;const X=T===!0?e:t,E=T===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,p*E,0),d.push(0,E,0),f.push(.5,.5),g++;const b=g;for(let G=0;G<=s;G++){const Y=G/s*l+a,Q=Math.cos(Y),W=Math.sin(Y);C.x=X*W,C.y=p*E,C.z=X*Q,u.push(C.x,C.y,C.z),d.push(0,E,0),P.x=Q*.5+.5,P.y=W*.5*E+.5,f.push(P.x,P.y),g++}for(let G=0;G<s;G++){const V=I+G,Y=b+G;T===!0?h.push(Y,Y+1,V):h.push(Y+1,Y,V),N+=3}c.addGroup(m,N,T===!0?1:2),m+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mf extends Fr{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Mf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sa extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const S=[],M=m/n;let T=0;m===0&&o===0?T=.5/t:m===n&&l===Math.PI&&(T=-.5/t);for(let I=0;I<=t;I++){const P=I/t;u.x=-e*Math.cos(s+P*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+P*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(P+T,1-M),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const M=h[m][S+1],T=h[m][S],I=h[m+1][S],P=h[m+1][S+1];(m!==0||o>0)&&f.push(M,T,P),(m!==n-1||l<Math.PI)&&f.push(T,I,P)}this.setIndex(f),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fu extends Ut{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new D,r=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let g=d,v=d+f;g<v;g+=3)for(let p=0;p<3;p++){const m=a.getX(g+p),S=a.getX(g+(p+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,S),pu(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),pu(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new At(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function pu(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class yi extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yd,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fn extends yi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function _o(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ay(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function by(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function mu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Ef(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Br{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wy extends Br{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vs,endingEnd:vs}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xs:r=e,a=2*t-n;break;case $o:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xs:o=e,l=2*n-t;break;case $o:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,S=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,M=(-1-f)*p+(1.5+f)*v+.5*g,T=f*p-f*v;for(let I=0;I!==a;++I)r[I]=m*o[h+I]+S*o[c+I]+M*o[l+I]+T*o[u+I];return r}}class Tf extends Br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Ry extends Br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_o(t,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_o(e.times,Array),values:_o(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ry(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ay(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===la,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Rr;class Vs extends Bn{constructor(e,t,n){super(e,t,n)}}Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=wr;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Af extends Bn{}Af.prototype.ValueTypeName="color";class Fs extends Bn{}Fs.prototype.ValueTypeName="number";class Cy extends Br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let h=c+a;c!==h;c+=4)nn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Bs extends Bn{InterpolantFactoryMethodLinear(e){return new Cy(this.times,this.values,this.getValueSize(),e)}}Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends Bn{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=wr;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Bn{}zs.prototype.ValueTypeName="vector";class sl{constructor(e="",t=-1,n=[],s=bl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Iy(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=by(l);l=mu(l,1,h),c=mu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Fs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const p=[],m=[];Ef(f,p,m,g),p.length!==0&&v.push(new u(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const p=[],m=[];for(let S=0;S!==d[g].morphTargets.length;++S){const M=d[g];p.push(M.time),m.push(M.morphTarget===v?1:0)}s.push(new Fs(".morphTargetInfluence["+v+"]",p,m))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(zs,f+".position",d,"pos",s),n(Bs,f+".quaternion",d,"rot",s),n(zs,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Py(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fs;case"vector":case"vector2":case"vector3":case"vector4":return zs;case"color":return Af;case"quaternion":return Bs;case"bool":case"boolean":return Vs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Iy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Py(i.type);if(i.times===void 0){const t=[],n=[];Ef(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const gi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ly{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Dy=new Ly;class Ws{constructor(e){this.manager=e!==void 0?e:Dy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class Ny extends Error{constructor(e,t){super(e),this.response=t}}class bf extends Ws{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=gi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:s});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Xn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const p=new ReadableStream({start(m){S();function S(){u.read().then(({done:M,value:T})=>{if(M)m.close();else{v+=T.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let P=0,C=h.length;P<C;P++){const N=h[P];N.onProgress&&N.onProgress(I)}m.enqueue(T),S()}},M=>{m.error(M)})}}});return new Response(p)}else throw new Ny(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{gi.add(e,c);const h=Xn[e];delete Xn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Xn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Xn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Oy extends Ws{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Cr("img");function l(){h(),gi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class wf extends Ws{constructor(e){super(e)}load(e,t,n,s){const r=new Lt,o=new Oy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class zr extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Uy extends zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xa=new Ge,gu=new D,_u=new D;class kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pl,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(gu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fy extends kl{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ds*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class By extends zr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vu=new Ge,nr=new D,$a=new D;class zy extends kl{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(e.matrixWorld),n.position.copy(nr),$a.copy(n.position),$a.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($a),n.updateMatrixWorld(),s.makeTranslation(-nr.x,-nr.y,-nr.z),vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu)}}class Rf extends zr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ky extends kl{constructor(){super(new Il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cf extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new ky}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hy extends zr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Vy extends Ws{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return gi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),gi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});gi.add(e,l),r.manager.itemStart(e)}}class Gy{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){nn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;nn.multiplyQuaternionsFlat(e,o,e,t,e,n),nn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const Hl="\\[\\]\\.:\\/",Wy=new RegExp("["+Hl+"]","g"),Vl="[^"+Hl+"]",Xy="[^"+Hl.replace("\\.","")+"]",$y=/((?:WC+[\/:])*)/.source.replace("WC",Vl),Yy=/(WCOD+)?/.source.replace("WCOD",Xy),jy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vl),qy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vl),Ky=new RegExp("^"+$y+Yy+jy+qy+"$"),Zy=["material","materials","bones","map"];class Jy{constructor(e,t,n){const s=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wy,"")}static parseTrackName(e){const t=Ky.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Zy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=Jy;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Qy{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:vs,endingEnd:vs};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Jc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case mm:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case bl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===pm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Xd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=xs,s.endingEnd=xs):(e?s.endingStart=this.zeroSlopeAtStart?xs:vs:s.endingStart=$o,t?s.endingEnd=this.zeroSlopeAtEnd?xs:vs:s.endingEnd=$o)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const eS=new Float32Array(1);class Uo extends Yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=s[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;g=new Gy(pt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Tf(new Float32Array(2),new Float32Array(2),1,eS),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?sl.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=bl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Qy(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?sl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const xu=new Ge;class IA{constructor(e,t,n=0,s=1/0){this.ray=new Or(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xu),this}intersectObject(e,t=!0,n=[]){return rl(e,this,n,t),n.sort(yu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)rl(e[s],this,n,t);return n.sort(yu),n}}function yu(i,e){return i.distance-e.distance}function rl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)rl(r[o],e,t,!0)}}class tS extends $i{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ve(n),s=new Ve(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=d===r?n:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const h=new Ut;h.setAttribute("position",new At(l,3)),h.setAttribute("color",new At(c,3));const u=new Us({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class LA extends $i{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ut;r.setIndex(new Dt(n,1)),r.setAttribute("position",new At(s,3)),super(r,new Us({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);function Gl(i){const e=new Map,t=new Map,n=i.clone();return Pf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Pf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Pf(i.children[n],e.children[n],t)}function nS(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),t}var mr={exports:{}},iS=mr.exports,Su;function Wl(){return Su||(Su=1,(function(i,e){(function(t,n){n(e)})(iS,(function(t){var n=function(x,_){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,R){y.__proto__=R}||function(y,R){for(var z in R)Object.prototype.hasOwnProperty.call(R,z)&&(y[z]=R[z])},n(x,_)};function s(x,_){if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");n(x,_);function y(){this.constructor=x}x.prototype=_===null?Object.create(_):(y.prototype=_.prototype,new y)}function r(x,_,y,R){var z=arguments.length,ne=z<3?_:R,De;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")ne=Reflect.decorate(x,_,y,R);else for(var Ce=x.length-1;Ce>=0;Ce--)(De=x[Ce])&&(ne=(z<3?De(ne):z>3?De(_,y,ne):De(_,y))||ne);return z>3&&ne&&Object.defineProperty(_,y,ne),ne}function o(x,_,y){if(arguments.length===2)for(var R=0,z=_.length,ne;R<z;R++)(ne||!(R in _))&&(ne||(ne=Array.prototype.slice.call(_,0,R)),ne[R]=_[R]);return x.concat(ne||Array.prototype.slice.call(_))}typeof SuppressedError=="function"&&SuppressedError;var a=255,l=213;t.OPERATION=void 0,(function(x){x[x.ADD=128]="ADD",x[x.REPLACE=0]="REPLACE",x[x.DELETE=64]="DELETE",x[x.DELETE_AND_ADD=192]="DELETE_AND_ADD",x[x.TOUCH=1]="TOUCH",x[x.CLEAR=10]="CLEAR"})(t.OPERATION||(t.OPERATION={}));var c=(function(){function x(_,y,R){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=_,this.setParent(y,R)}return x.prototype.setParent=function(_,y,R){var z=this;if(this.indexes||(this.indexes=this.ref instanceof _t?this.ref._definition.indexes:{}),this.parent=_,this.parentIndex=R,!!y)if(this.root=y,this.ref instanceof _t){var ne=this.ref._definition;for(var De in ne.schema){var Ce=this.ref[De];if(Ce&&Ce.$changes){var Je=ne.indexes[De];Ce.$changes.setParent(this.ref,y,Je)}}}else typeof this.ref=="object"&&this.ref.forEach(function(Ye,A){if(Ye instanceof _t){var U=Ye.$changes,B=z.ref.$changes.indexes[A];U.setParent(z.ref,z.root,B)}})},x.prototype.operation=function(_){this.changes.set(--this.currentCustomOperation,_)},x.prototype.change=function(_,y){y===void 0&&(y=t.OPERATION.ADD);var R=typeof _=="number"?_:this.indexes[_];this.assertValidIndex(R,_);var z=this.changes.get(R);(!z||z.op===t.OPERATION.DELETE||z.op===t.OPERATION.TOUCH)&&this.changes.set(R,{op:z&&z.op===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:y,index:R}),this.allChanges.add(R),this.changed=!0,this.touchParents()},x.prototype.touch=function(_){var y=typeof _=="number"?_:this.indexes[_];this.assertValidIndex(y,_),this.changes.has(y)||this.changes.set(y,{op:t.OPERATION.TOUCH,index:y}),this.allChanges.add(y),this.touchParents()},x.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},x.prototype.getType=function(_){if(this.ref._definition){var y=this.ref._definition;return y.schema[y.fieldsByIndex[_]]}else{var y=this.parent._definition,R=y.schema[y.fieldsByIndex[this.parentIndex]];return Object.values(R)[0]}},x.prototype.getChildrenFilter=function(){var _=this.parent._definition.childFilters;return _&&_[this.parentIndex]},x.prototype.getValue=function(_){return this.ref.getByIndex(_)},x.prototype.delete=function(_){var y=typeof _=="number"?_:this.indexes[_];if(y===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(_," (").concat(y,")"));return}var R=this.getValue(y);this.changes.set(y,{op:t.OPERATION.DELETE,index:y}),this.allChanges.delete(y),delete this.caches[y],R&&R.$changes&&(R.$changes.parent=void 0),this.changed=!0,this.touchParents()},x.prototype.discard=function(_,y){var R=this;_===void 0&&(_=!1),y===void 0&&(y=!1),this.ref instanceof _t||this.changes.forEach(function(z){if(z.op===t.OPERATION.DELETE){var ne=R.ref.getIndex(z.index);delete R.indexes[ne]}}),this.changes.clear(),this.changed=_,y&&this.allChanges.clear(),this.currentCustomOperation=0},x.prototype.discardAll=function(){var _=this;this.changes.forEach(function(y){var R=_.getValue(y.index);R&&R.$changes&&R.$changes.discardAll()}),this.discard()},x.prototype.cache=function(_,y){this.caches[_]=y},x.prototype.clone=function(){return new x(this.ref,this.parent,this.root)},x.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},x.prototype.assertValidIndex=function(_,y){if(_===void 0)throw new Error('ChangeTree: missing index for field "'.concat(y,'"'))},x})();function h(x,_,y,R){return x[_]||(x[_]=[]),x[_].push(y),R?.forEach(function(z,ne){return y(z,ne)}),function(){return d(x[_],x[_].indexOf(y))}}function u(x){var _=this,y=typeof this.$changes.getType()!="string";this.$items.forEach(function(R,z){x.push({refId:_.$changes.refId,op:t.OPERATION.DELETE,field:z,value:void 0,previousValue:R}),y&&_.$changes.root.removeRef(R.$changes.refId)})}function d(x,_){if(_===-1||_>=x.length)return!1;for(var y=x.length-1,R=_;R<y;R++)x[R]=x[R+1];return x.length=y,!0}var f=function(x,_){var y=x.toString(),R=_.toString();return y<R?-1:y>R?1:0};function g(x){return x.$proxy=!0,x=new Proxy(x,{get:function(_,y){return typeof y!="symbol"&&!isNaN(y)?_.at(y):_[y]},set:function(_,y,R){if(typeof y!="symbol"&&!isNaN(y)){var z=Array.from(_.$items.keys()),ne=parseInt(z[y]||y);R==null?_.deleteAt(ne):_.setAt(ne,R)}else _[y]=R;return!0},deleteProperty:function(_,y){return typeof y=="number"?_.deleteAt(y):delete _[y],!0},has:function(_,y){return typeof y!="symbol"&&!isNaN(Number(y))?_.$items.has(Number(y)):Reflect.has(_,y)}}),x}var v=(function(){function x(){for(var _=[],y=0;y<arguments.length;y++)_[y]=arguments[y];this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,_)}return x.prototype.onAdd=function(_,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,_,y?this.$items:void 0)},x.prototype.onRemove=function(_){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,_)},x.prototype.onChange=function(_){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,_)},x.is=function(_){return Array.isArray(_)||_.array!==void 0},Object.defineProperty(x.prototype,"length",{get:function(){return this.$items.size},set:function(_){_===0?this.clear():this.splice(_,this.length-_)},enumerable:!1,configurable:!0}),x.prototype.push=function(){for(var _=this,y=[],R=0;R<arguments.length;R++)y[R]=arguments[R];var z;return y.forEach(function(ne){z=_.$refId++,_.setAt(z,ne)}),z},x.prototype.pop=function(){var _=Array.from(this.$indexes.values()).pop();if(_!==void 0){this.$changes.delete(_),this.$indexes.delete(_);var y=this.$items.get(_);return this.$items.delete(_),y}},x.prototype.at=function(_){if(_=Math.trunc(_)||0,_<0&&(_+=this.length),!(_<0||_>=this.length)){var y=Array.from(this.$items.keys())[_];return this.$items.get(y)}},x.prototype.setAt=function(_,y){var R,z;if(y==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(_)!==y){y.$changes!==void 0&&y.$changes.setParent(this,this.$changes.root,_);var ne=(z=(R=this.$changes.indexes[_])===null||R===void 0?void 0:R.op)!==null&&z!==void 0?z:t.OPERATION.ADD;this.$changes.indexes[_]=_,this.$indexes.set(_,_),this.$items.set(_,y),this.$changes.change(_,ne)}},x.prototype.deleteAt=function(_){var y=Array.from(this.$items.keys())[_];return y===void 0?!1:this.$deleteAt(y)},x.prototype.$deleteAt=function(_){return this.$changes.delete(_),this.$indexes.delete(_),this.$items.delete(_)},x.prototype.clear=function(_){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),_&&u.call(this,_),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.concat=function(){for(var _,y=[],R=0;R<arguments.length;R++)y[R]=arguments[R];return new(x.bind.apply(x,o([void 0],(_=Array.from(this.$items.values())).concat.apply(_,y),!1)))},x.prototype.join=function(_){return Array.from(this.$items.values()).join(_)},x.prototype.reverse=function(){var _=this,y=Array.from(this.$items.keys()),R=Array.from(this.$items.values()).reverse();return R.forEach(function(z,ne){_.setAt(y[ne],z)}),this},x.prototype.shift=function(){var _=Array.from(this.$items.keys()),y=_.shift();if(y!==void 0){var R=this.$items.get(y);return this.$deleteAt(y),R}},x.prototype.slice=function(_,y){var R=new x;return R.push.apply(R,Array.from(this.$items.values()).slice(_,y)),R},x.prototype.sort=function(_){var y=this;_===void 0&&(_=f);var R=Array.from(this.$items.keys()),z=Array.from(this.$items.values()).sort(_);return z.forEach(function(ne,De){y.setAt(R[De],ne)}),this},x.prototype.splice=function(_,y){y===void 0&&(y=this.length-_);for(var R=[],z=2;z<arguments.length;z++)R[z-2]=arguments[z];for(var ne=Array.from(this.$items.keys()),De=[],Ce=_;Ce<_+y;Ce++)De.push(this.$items.get(ne[Ce])),this.$deleteAt(ne[Ce]);for(var Ce=0;Ce<R.length;Ce++)this.setAt(_+Ce,R[Ce]);return De},x.prototype.unshift=function(){for(var _=this,y=[],R=0;R<arguments.length;R++)y[R]=arguments[R];var z=this.length,ne=y.length,De=Array.from(this.$items.values());return y.forEach(function(Ce,Je){_.setAt(Je,Ce)}),De.forEach(function(Ce,Je){_.setAt(ne+Je,Ce)}),z+ne},x.prototype.indexOf=function(_,y){return Array.from(this.$items.values()).indexOf(_,y)},x.prototype.lastIndexOf=function(_,y){return y===void 0&&(y=this.length-1),Array.from(this.$items.values()).lastIndexOf(_,y)},x.prototype.every=function(_,y){return Array.from(this.$items.values()).every(_,y)},x.prototype.some=function(_,y){return Array.from(this.$items.values()).some(_,y)},x.prototype.forEach=function(_,y){Array.from(this.$items.values()).forEach(_,y)},x.prototype.map=function(_,y){return Array.from(this.$items.values()).map(_,y)},x.prototype.filter=function(_,y){return Array.from(this.$items.values()).filter(_,y)},x.prototype.reduce=function(_,y){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},x.prototype.reduceRight=function(_,y){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},x.prototype.find=function(_,y){return Array.from(this.$items.values()).find(_,y)},x.prototype.findIndex=function(_,y){return Array.from(this.$items.values()).findIndex(_,y)},x.prototype.fill=function(_,y,R){throw new Error("ArraySchema#fill() not implemented")},x.prototype.copyWithin=function(_,y,R){throw new Error("ArraySchema#copyWithin() not implemented")},x.prototype.toString=function(){return this.$items.toString()},x.prototype.toLocaleString=function(){return this.$items.toLocaleString()},x.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},x.prototype.includes=function(_,y){return Array.from(this.$items.values()).includes(_,y)},x.prototype.flatMap=function(_,y){throw new Error("ArraySchema#flatMap() is not supported.")},x.prototype.flat=function(_){throw new Error("ArraySchema#flat() is not supported.")},x.prototype.findLast=function(){var _=Array.from(this.$items.values());return _.findLast.apply(_,arguments)},x.prototype.findLastIndex=function(){var _=Array.from(this.$items.values());return _.findLastIndex.apply(_,arguments)},x.prototype.with=function(_,y){var R=Array.from(this.$items.values());return R[_]=y,new(x.bind.apply(x,o([void 0],R,!1)))},x.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},x.prototype.toSorted=function(_){return Array.from(this.$items.values()).sort(_)},x.prototype.toSpliced=function(_,y){var R=Array.from(this.$items.values());return R.toSpliced.apply(R,arguments)},x.prototype.setIndex=function(_,y){this.$indexes.set(_,y)},x.prototype.getIndex=function(_){return this.$indexes.get(_)},x.prototype.getByIndex=function(_){return this.$items.get(this.$indexes.get(_))},x.prototype.deleteByIndex=function(_){var y=this.$indexes.get(_);this.$items.delete(y),this.$indexes.delete(_)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){return this.toArray().map(function(_){return typeof _.toJSON=="function"?_.toJSON():_})},x.prototype.clone=function(_){var y;return _?y=new(x.bind.apply(x,o([void 0],Array.from(this.$items.values()),!1))):y=new(x.bind.apply(x,o([void 0],this.map(function(R){return R.$changes?R.clone():R}),!1))),y},x})();function p(x){return x.$proxy=!0,x=new Proxy(x,{get:function(_,y){return typeof y!="symbol"&&typeof _[y]>"u"?_.get(y):_[y]},set:function(_,y,R){return typeof y!="symbol"&&y.indexOf("$")===-1&&y!=="onAdd"&&y!=="onRemove"&&y!=="onChange"?_.set(y,R):_[y]=R,!0},deleteProperty:function(_,y){return _.delete(y),!0}}),x}var m=(function(){function x(_){var y=this;if(this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,_)if(_ instanceof Map||_ instanceof x)_.forEach(function(z,ne){return y.set(ne,z)});else for(var R in _)this.set(R,_[R])}return x.prototype.onAdd=function(_,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,_,y?this.$items:void 0)},x.prototype.onRemove=function(_){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,_)},x.prototype.onChange=function(_){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,_)},x.is=function(_){return _.map!==void 0},x.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(x.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.set=function(_,y){if(y==null)throw new Error("MapSchema#set('".concat(_,"', ").concat(y,"): trying to set ").concat(y," value on '").concat(_,"'."));_=_.toString();var R=typeof this.$changes.indexes[_]<"u",z=R?this.$changes.indexes[_]:this.$refId++,ne=R?t.OPERATION.REPLACE:t.OPERATION.ADD,De=y.$changes!==void 0;if(De&&y.$changes.setParent(this,this.$changes.root,z),!R)this.$changes.indexes[_]=z,this.$indexes.set(z,_);else{if(!De&&this.$items.get(_)===y)return;De&&this.$items.get(_)!==y&&(ne=t.OPERATION.ADD)}return this.$items.set(_,y),this.$changes.change(_,ne),this},x.prototype.get=function(_){return this.$items.get(_)},x.prototype.delete=function(_){return this.$changes.delete(_.toString()),this.$items.delete(_)},x.prototype.clear=function(_){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),_&&u.call(this,_),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(_){return this.$items.has(_)},x.prototype.forEach=function(_){this.$items.forEach(_)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(_,y){this.$indexes.set(_,y)},x.prototype.getIndex=function(_){return this.$indexes.get(_)},x.prototype.getByIndex=function(_){return this.$items.get(this.$indexes.get(_))},x.prototype.deleteByIndex=function(_){var y=this.$indexes.get(_);this.$items.delete(y),this.$indexes.delete(_)},x.prototype.toJSON=function(){var _={};return this.forEach(function(y,R){_[R]=typeof y.toJSON=="function"?y.toJSON():y}),_},x.prototype.clone=function(_){var y;return _?y=Object.assign(new x,this):(y=new x,this.forEach(function(R,z){R.$changes?y.set(z,R.clone()):y.set(z,R)})),y},x})(),S={};function M(x,_){S[x]=_}function T(x){return S[x]}var I=(function(){function x(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return x.create=function(_){var y=new x;return y.schema=Object.assign({},_&&_.schema||{}),y.indexes=Object.assign({},_&&_.indexes||{}),y.fieldsByIndex=Object.assign({},_&&_.fieldsByIndex||{}),y.descriptors=Object.assign({},_&&_.descriptors||{}),y.deprecated=Object.assign({},_&&_.deprecated||{}),y},x.prototype.addField=function(_,y){var R=this.getNextFieldIndex();this.fieldsByIndex[R]=_,this.indexes[_]=R,this.schema[_]=Array.isArray(y)?{array:y[0]}:y},x.prototype.hasField=function(_){return this.indexes[_]!==void 0},x.prototype.addFilter=function(_,y){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[_]]=y,this.indexesWithFilters.push(this.indexes[_]),!0},x.prototype.addChildrenFilter=function(_,y){var R=this.indexes[_],z=this.schema[_];if(T(Object.keys(z)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[R]=y,!0;console.warn("@filterChildren: field '".concat(_,"' can't have children. Ignoring filter."))},x.prototype.getChildrenFilter=function(_){return this.childFilters&&this.childFilters[this.indexes[_]]},x.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},x})();function P(x){return x._context&&x._context.useFilters}var C=(function(){function x(){this.types={},this.schemas=new Map,this.useFilters=!1}return x.prototype.has=function(_){return this.schemas.has(_)},x.prototype.get=function(_){return this.types[_]},x.prototype.add=function(_,y){y===void 0&&(y=this.schemas.size),_._definition=I.create(_._definition),_._typeid=y,this.types[y]=_,this.schemas.set(_,y)},x.create=function(_){return _===void 0&&(_={}),function(y){return _.context||(_.context=new x),X(y,_)}},x})(),N=new C;function X(x,_){return _===void 0&&(_={}),function(y,R){var z=_.context||N,ne=y.constructor;if(ne._context=z,!x)throw new Error("".concat(ne.name,': @type() reference provided for "').concat(R,`" is undefined. Make sure you don't have any circular dependencies.`));z.has(ne)||z.add(ne);var De=ne._definition;if(De.addField(R,x),De.descriptors[R]){if(De.deprecated[R])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(R,"' definition on '").concat(ne.name,`'.
Check @type() annotation`))}catch(B){var Ce=B.stack.split(`
`)[4].trim();throw new Error("".concat(B.message," ").concat(Ce))}}var Je=v.is(x),Ye=!Je&&m.is(x);if(typeof x!="string"&&!_t.is(x)){var A=Object.values(x)[0];typeof A!="string"&&!z.has(A)&&z.add(A)}if(_.manual){De.descriptors[R]={enumerable:!0,configurable:!0,writable:!0};return}var U="_".concat(R);De.descriptors[U]={enumerable:!1,configurable:!1,writable:!0},De.descriptors[R]={get:function(){return this[U]},set:function(B){B!==this[U]&&(B!=null?(Je&&!(B instanceof v)&&(B=new(v.bind.apply(v,o([void 0],B,!1)))),Ye&&!(B instanceof m)&&(B=new m(B)),B.$proxy===void 0&&(Ye?B=p(B):Je&&(B=g(B))),this.$changes.change(R),B.$changes&&B.$changes.setParent(this,this.$changes.root,this._definition.indexes[R])):this[U]!==void 0&&this.$changes.delete(R),this[U]=B)},enumerable:!0,configurable:!0}}}function E(x){return function(_,y){var R=_.constructor,z=R._definition;z.addFilter(y,x)&&(R._context.useFilters=!0)}}function b(x){return function(_,y){var R=_.constructor,z=R._definition;z.addChildrenFilter(y,x)&&(R._context.useFilters=!0)}}function G(x){return x===void 0&&(x=!0),function(_,y){var R=_.constructor,z=R._definition;z.deprecated[y]=!0,x&&(z.descriptors[y]={get:function(){throw new Error("".concat(y," is deprecated."))},set:function(ne){},enumerable:!1,configurable:!0})}}function V(x,_,y){y===void 0&&(y={}),y.context||(y.context=x._context||y.context||N);for(var R in _)X(_[R],y)(x.prototype,R);return x}function Y(x){for(var _=0,y=0,R=0,z=x.length;R<z;R++)_=x.charCodeAt(R),_<128?y+=1:_<2048?y+=2:_<55296||_>=57344?y+=3:(R++,y+=4);return y}function Q(x,_,y){for(var R=0,z=0,ne=y.length;z<ne;z++)R=y.charCodeAt(z),R<128?x[_++]=R:R<2048?(x[_++]=192|R>>6,x[_++]=128|R&63):R<55296||R>=57344?(x[_++]=224|R>>12,x[_++]=128|R>>6&63,x[_++]=128|R&63):(z++,R=65536+((R&1023)<<10|y.charCodeAt(z)&1023),x[_++]=240|R>>18,x[_++]=128|R>>12&63,x[_++]=128|R>>6&63,x[_++]=128|R&63)}function W(x,_){x.push(_&255)}function Z(x,_){x.push(_&255)}function K(x,_){x.push(_&255),x.push(_>>8&255)}function ce(x,_){x.push(_&255),x.push(_>>8&255)}function le(x,_){x.push(_&255),x.push(_>>8&255),x.push(_>>16&255),x.push(_>>24&255)}function te(x,_){var y=_>>24,R=_>>16,z=_>>8,ne=_;x.push(ne&255),x.push(z&255),x.push(R&255),x.push(y&255)}function be(x,_){var y=Math.floor(_/Math.pow(2,32)),R=_>>>0;te(x,R),te(x,y)}function _e(x,_){var y=_/Math.pow(2,32)>>0,R=_>>>0;te(x,R),te(x,y)}function $(x,_){Ne(x,_)}function ie(x,_){We(x,_)}var oe=new Int32Array(2),me=new Float32Array(oe.buffer),Oe=new Float64Array(oe.buffer);function Ne(x,_){me[0]=_,le(x,oe[0])}function We(x,_){Oe[0]=_,le(x,oe[0]),le(x,oe[1])}function rt(x,_){return Z(x,_?1:0)}function Xe(x,_){_||(_="");var y=Y(_),R=0;if(y<32)x.push(y|160),R=1;else if(y<256)x.push(217),Z(x,y),R=2;else if(y<65536)x.push(218),ce(x,y),R=3;else if(y<4294967296)x.push(219),te(x,y),R=5;else throw new Error("String too long");return Q(x,x.length,_),R+y}function F(x,_){if(isNaN(_))return F(x,0);if(isFinite(_)){if(_!==(_|0))return x.push(203),We(x,_),9}else return F(x,_>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return _>=0?_<128?(Z(x,_),1):_<256?(x.push(204),Z(x,_),2):_<65536?(x.push(205),ce(x,_),3):_<4294967296?(x.push(206),te(x,_),5):(x.push(207),_e(x,_),9):_>=-32?(x.push(224|_+32),1):_>=-128?(x.push(208),W(x,_),2):_>=-32768?(x.push(209),K(x,_),3):_>=-2147483648?(x.push(210),le(x,_),5):(x.push(211),be(x,_),9)}var Mt=Object.freeze({__proto__:null,boolean:rt,float32:$,float64:ie,int16:K,int32:le,int64:be,int8:W,number:F,string:Xe,uint16:ce,uint32:te,uint64:_e,uint8:Z,utf8Write:Q,writeFloat32:Ne,writeFloat64:We});function Ze(x,_,y){for(var R="",z=0,ne=_,De=_+y;ne<De;ne++){var Ce=x[ne];if((Ce&128)===0){R+=String.fromCharCode(Ce);continue}if((Ce&224)===192){R+=String.fromCharCode((Ce&31)<<6|x[++ne]&63);continue}if((Ce&240)===224){R+=String.fromCharCode((Ce&15)<<12|(x[++ne]&63)<<6|(x[++ne]&63)<<0);continue}if((Ce&248)===240){z=(Ce&7)<<18|(x[++ne]&63)<<12|(x[++ne]&63)<<6|(x[++ne]&63)<<0,z>=65536?(z-=65536,R+=String.fromCharCode((z>>>10)+55296,(z&1023)+56320)):R+=String.fromCharCode(z);continue}console.error("Invalid byte "+Ce.toString(16))}return R}function Qe(x,_){return Fe(x,_)<<24>>24}function Fe(x,_){return x[_.offset++]}function ft(x,_){return Be(x,_)<<16>>16}function Be(x,_){return x[_.offset++]|x[_.offset++]<<8}function L(x,_){return x[_.offset++]|x[_.offset++]<<8|x[_.offset++]<<16|x[_.offset++]<<24}function w(x,_){return L(x,_)>>>0}function q(x,_){return et(x,_)}function re(x,_){return fe(x,_)}function he(x,_){var y=w(x,_),R=L(x,_)*Math.pow(2,32);return R+y}function se(x,_){var y=w(x,_),R=w(x,_)*Math.pow(2,32);return R+y}var Pe=new Int32Array(2),ve=new Float32Array(Pe.buffer),we=new Float64Array(Pe.buffer);function et(x,_){return Pe[0]=L(x,_),ve[0]}function fe(x,_){return Pe[0]=L(x,_),Pe[1]=L(x,_),we[0]}function Re(x,_){return Fe(x,_)>0}function ze(x,_){var y=x[_.offset++],R;y<192?R=y&31:y===217?R=Fe(x,_):y===218?R=Be(x,_):y===219&&(R=w(x,_));var z=Ze(x,_.offset,R);return _.offset+=R,z}function ke(x,_){var y=x[_.offset];return y<192&&y>160||y===217||y===218||y===219}function ge(x,_){var y=x[_.offset++];if(y<128)return y;if(y===202)return et(x,_);if(y===203)return fe(x,_);if(y===204)return Fe(x,_);if(y===205)return Be(x,_);if(y===206)return w(x,_);if(y===207)return se(x,_);if(y===208)return Qe(x,_);if(y===209)return ft(x,_);if(y===210)return L(x,_);if(y===211)return he(x,_);if(y>223)return(255-y+1)*-1}function $e(x,_){var y=x[_.offset];return y<128||y>=202&&y<=211}function He(x,_){return x[_.offset]<160}function ct(x,_){return x[_.offset-1]===a&&(x[_.offset]<128||x[_.offset]>=202&&x[_.offset]<=211)}var k=Object.freeze({__proto__:null,arrayCheck:He,boolean:Re,float32:q,float64:re,int16:ft,int32:L,int64:he,int8:Qe,number:ge,numberCheck:$e,readFloat32:et,readFloat64:fe,string:ze,stringCheck:ke,switchStructureCheck:ct,uint16:Be,uint32:w,uint64:se,uint8:Fe}),Te=(function(){function x(_){var y=this;this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,_&&_.forEach(function(R){return y.add(R)})}return x.prototype.onAdd=function(_,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,_,y?this.$items:void 0)},x.prototype.onRemove=function(_){return h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,_)},x.prototype.onChange=function(_){return h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,_)},x.is=function(_){return _.collection!==void 0},x.prototype.add=function(_){var y=this.$refId++,R=_.$changes!==void 0;return R&&_.$changes.setParent(this,this.$changes.root,y),this.$changes.indexes[y]=y,this.$indexes.set(y,y),this.$items.set(y,_),this.$changes.change(y),y},x.prototype.at=function(_){var y=Array.from(this.$items.keys())[_];return this.$items.get(y)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(_){for(var y=this.$items.entries(),R,z;(z=y.next())&&!z.done;)if(_===z.value[1]){R=z.value[0];break}return R===void 0?!1:(this.$changes.delete(R),this.$indexes.delete(R),this.$items.delete(R))},x.prototype.clear=function(_){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),_&&u.call(this,_),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(_){return Array.from(this.$items.values()).some(function(y){return y===_})},x.prototype.forEach=function(_){var y=this;this.$items.forEach(function(R,z,ne){return _(R,z,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(_,y){this.$indexes.set(_,y)},x.prototype.getIndex=function(_){return this.$indexes.get(_)},x.prototype.getByIndex=function(_){return this.$items.get(this.$indexes.get(_))},x.prototype.deleteByIndex=function(_){var y=this.$indexes.get(_);this.$items.delete(y),this.$indexes.delete(_)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var _=[];return this.forEach(function(y,R){_.push(typeof y.toJSON=="function"?y.toJSON():y)}),_},x.prototype.clone=function(_){var y;return _?y=Object.assign(new x,this):(y=new x,this.forEach(function(R){R.$changes?y.add(R.clone()):y.add(R)})),y},x})(),J=(function(){function x(_){var y=this;this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,_&&_.forEach(function(R){return y.add(R)})}return x.prototype.onAdd=function(_,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,_,y?this.$items:void 0)},x.prototype.onRemove=function(_){return h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,_)},x.prototype.onChange=function(_){return h(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,_)},x.is=function(_){return _.set!==void 0},x.prototype.add=function(_){var y,R;if(this.has(_))return!1;var z=this.$refId++;_.$changes!==void 0&&_.$changes.setParent(this,this.$changes.root,z);var ne=(R=(y=this.$changes.indexes[z])===null||y===void 0?void 0:y.op)!==null&&R!==void 0?R:t.OPERATION.ADD;return this.$changes.indexes[z]=z,this.$indexes.set(z,z),this.$items.set(z,_),this.$changes.change(z,ne),z},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(_){for(var y=this.$items.entries(),R,z;(z=y.next())&&!z.done;)if(_===z.value[1]){R=z.value[0];break}return R===void 0?!1:(this.$changes.delete(R),this.$indexes.delete(R),this.$items.delete(R))},x.prototype.clear=function(_){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),_&&u.call(this,_),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(_){for(var y=this.$items.values(),R=!1,z;(z=y.next())&&!z.done;)if(_===z.value){R=!0;break}return R},x.prototype.forEach=function(_){var y=this;this.$items.forEach(function(R,z,ne){return _(R,z,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(_,y){this.$indexes.set(_,y)},x.prototype.getIndex=function(_){return this.$indexes.get(_)},x.prototype.getByIndex=function(_){return this.$items.get(this.$indexes.get(_))},x.prototype.deleteByIndex=function(_){var y=this.$indexes.get(_);this.$items.delete(y),this.$indexes.delete(_)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var _=[];return this.forEach(function(y,R){_.push(typeof y.toJSON=="function"?y.toJSON():y)}),_},x.prototype.clone=function(_){var y;return _?y=Object.assign(new x,this):(y=new x,this.forEach(function(R){R.$changes?y.add(R.clone()):y.add(R)})),y},x})(),ae=(function(){function x(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return x.prototype.addRefId=function(_){this.refIds.has(_)||(this.refIds.add(_),this.containerIndexes.set(_,new Set))},x.get=function(_){return _.$filterState===void 0&&(_.$filterState=new x),_.$filterState},x})(),Se=(function(){function x(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return x.prototype.getNextUniqueId=function(){return this.nextUniqueId++},x.prototype.addRef=function(_,y,R){R===void 0&&(R=!0),this.refs.set(_,y),R&&(this.refCounts[_]=(this.refCounts[_]||0)+1)},x.prototype.removeRef=function(_){var y=this.refCounts[_];if(y===void 0){console.warn("trying to remove reference ".concat(_," that doesn't exist"));return}if(y===0){console.warn("trying to remove reference ".concat(_," with 0 refCount"));return}this.refCounts[_]=y-1,this.deletedRefs.add(_)},x.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},x.prototype.garbageCollectDeletedRefs=function(){var _=this;this.deletedRefs.forEach(function(y){if(!(_.refCounts[y]>0)){var R=_.refs.get(y);if(R instanceof _t)for(var z in R._definition.schema)typeof R._definition.schema[z]!="string"&&R[z]&&R[z].$changes&&_.removeRef(R[z].$changes.refId);else{var ne=R.$changes.parent._definition,De=ne.schema[ne.fieldsByIndex[R.$changes.parentIndex]];typeof Object.values(De)[0]=="function"&&Array.from(R.values()).forEach(function(Ce){return _.removeRef(Ce.$changes.refId)})}_.refs.delete(y),delete _.refCounts[y]}}),this.deletedRefs.clear()},x})(),Me=(function(x){s(_,x);function _(){return x!==null&&x.apply(this,arguments)||this}return _})(Error);function tt(x,_,y,R){var z,ne=!1;switch(_){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":z="number",isNaN(x)&&console.log('trying to encode "NaN" in '.concat(y.constructor.name,"#").concat(R));break;case"string":z="string",ne=!0;break;case"boolean":return}if(typeof x!==z&&(!ne||ne&&x!==null)){var De="'".concat(JSON.stringify(x),"'").concat(x&&x.constructor&&" (".concat(x.constructor.name,")")||"");throw new Me("a '".concat(z,"' was expected, but ").concat(De," was provided in ").concat(y.constructor.name,"#").concat(R))}}function vt(x,_,y,R){if(!(x instanceof _))throw new Me("a '".concat(_.name,"' was expected, but '").concat(x.constructor.name,"' was provided in ").concat(y.constructor.name,"#").concat(R))}function Ft(x,_,y,R,z){tt(y,x,R,z);var ne=Mt[x];if(ne)ne(_,y);else throw new Me("a '".concat(x,"' was expected, but ").concat(y," was provided in ").concat(R.constructor.name,"#").concat(z))}function at(x,_,y){return k[x](_,y)}var _t=(function(){function x(){for(var _=[],y=0;y<arguments.length;y++)_[y]=arguments[y];Object.defineProperties(this,{$changes:{value:new c(this,void 0,new Se),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var R=this._definition.descriptors;R&&Object.defineProperties(this,R),_[0]&&this.assign(_[0])}return x.onError=function(_){console.error(_)},x.is=function(_){return _._definition&&_._definition.schema!==void 0},x.prototype.onChange=function(_){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,_)},x.prototype.onRemove=function(_){return h(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,_)},x.prototype.assign=function(_){return Object.assign(this,_),this},Object.defineProperty(x.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),x.prototype.setDirty=function(_,y){this.$changes.change(_,y)},x.prototype.listen=function(_,y,R){var z=this;return R===void 0&&(R=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[_]||(this.$callbacks[_]=[]),this.$callbacks[_].push(y),R&&this[_]!==void 0&&y(this[_],void 0),function(){return d(z.$callbacks[_],z.$callbacks[_].indexOf(y))}},x.prototype.decode=function(_,y,R){y===void 0&&(y={offset:0}),R===void 0&&(R=this);var z=[],ne=this.$changes.root,De=_.length,Ce=0;for(ne.refs.set(Ce,this);y.offset<De;){var Je=_[y.offset++];if(Je==a){Ce=ge(_,y);var Ye=ne.refs.get(Ce);if(!Ye)throw new Error('"refId" not found: '.concat(Ce));R=Ye;continue}var A=R.$changes,U=R._definition!==void 0,B=U?Je>>6<<6:Je;if(B===t.OPERATION.CLEAR){R.clear(z);continue}var H=U?Je%(B||255):ge(_,y),O=U?R._definition.fieldsByIndex[H]:"",ee=A.getType(H),j=void 0,ue=void 0,xe=void 0;if(U?ue=R["_".concat(O)]:(ue=R.getByIndex(H),(B&t.OPERATION.ADD)===t.OPERATION.ADD?(xe=R instanceof m?ze(_,y):H,R.setIndex(H,xe)):xe=R.getIndex(H)),(B&t.OPERATION.DELETE)===t.OPERATION.DELETE&&(B!==t.OPERATION.DELETE_AND_ADD&&R.deleteByIndex(H),ue&&ue.$changes&&ne.removeRef(ue.$changes.refId),j=null),O===void 0){console.warn("@colyseus/schema: definition mismatch");for(var Ee={offset:y.offset};y.offset<De&&!(ct(_,y)&&(Ee.offset=y.offset+1,ne.refs.has(ge(_,Ee))));)y.offset++;continue}else if(B!==t.OPERATION.DELETE)if(x.is(ee)){var pe=ge(_,y);if(j=ne.refs.get(pe),B!==t.OPERATION.REPLACE){var de=this.getSchemaType(_,y,ee);j||(j=this.createTypeInstance(de),j.$changes.refId=pe,ue&&(j.$callbacks=ue.$callbacks,ue.$changes.refId&&pe!==ue.$changes.refId&&ne.removeRef(ue.$changes.refId))),ne.addRef(pe,j,j!==ue)}}else if(typeof ee=="string")j=at(ee,_,y);else{var je=T(Object.keys(ee)[0]),nt=ge(_,y),it=ne.refs.has(nt)?ue||ne.refs.get(nt):new je.constructor;if(j=it.clone(!0),j.$changes.refId=nt,ue&&(j.$callbacks=ue.$callbacks,ue.$changes.refId&&nt!==ue.$changes.refId)){ne.removeRef(ue.$changes.refId);for(var lt=ue.entries(),Ue=void 0;(Ue=lt.next())&&!Ue.done;){var Ie=Ue.value,mt=Ie[0],ot=Ie[1];z.push({refId:nt,op:t.OPERATION.DELETE,field:mt,value:void 0,previousValue:ot})}}ne.addRef(nt,j,it!==ue)}if(j!=null){if(j.$changes&&j.$changes.setParent(A.ref,A.root,H),R instanceof x)R[O]=j;else if(R instanceof m){var mt=xe;R.$items.set(mt,j),R.$changes.allChanges.add(H)}else if(R instanceof v)R.setAt(H,j);else if(R instanceof Te){var Tt=R.add(j);R.setIndex(H,Tt)}else if(R instanceof J){var Tt=R.add(j);Tt!==!1&&R.setIndex(H,Tt)}}ue!==j&&z.push({refId:Ce,op:B,field:O,dynamicIndex:xe,value:j,previousValue:ue})}return this._triggerChanges(z),ne.garbageCollectDeletedRefs(),z},x.prototype.encode=function(_,y,R){_===void 0&&(_=!1),y===void 0&&(y=[]),R===void 0&&(R=!1);for(var z=this.$changes,ne=new WeakSet,De=[z],Ce=1,Je=0;Je<Ce;Je++){var Ye=De[Je],A=Ye.ref,U=A instanceof x;Ye.ensureRefId(),ne.add(Ye),Ye!==z&&(Ye.changed||_)&&(Z(y,a),F(y,Ye.refId));for(var B=Array.from(_?Ye.allChanges:Ye.changes.values()),H=0,O=B.length;H<O;H++){var ee=_?{op:t.OPERATION.ADD,index:B[H]}:B[H],j=ee.index,ue=U?A._definition.fieldsByIndex&&A._definition.fieldsByIndex[j]:j,xe=y.length;if(ee.op!==t.OPERATION.TOUCH)if(U)Z(y,j|ee.op);else{if(Z(y,ee.op),ee.op===t.OPERATION.CLEAR)continue;F(y,j)}if(!U&&(ee.op&t.OPERATION.ADD)==t.OPERATION.ADD&&A instanceof m){var Ee=Ye.ref.$indexes.get(j);Xe(y,Ee)}if(ee.op!==t.OPERATION.DELETE){var pe=Ye.getType(j),de=Ye.getValue(j);if(de&&de.$changes&&!ne.has(de.$changes)&&(De.push(de.$changes),de.$changes.ensureRefId(),Ce++),ee.op!==t.OPERATION.TOUCH){if(x.is(pe))vt(de,pe,A,ue),F(y,de.$changes.refId),(ee.op&t.OPERATION.ADD)===t.OPERATION.ADD&&this.tryEncodeTypeId(y,pe,de.constructor);else if(typeof pe=="string")Ft(pe,y,de,A,ue);else{var je=T(Object.keys(pe)[0]);vt(A["_".concat(ue)],je.constructor,A,ue),F(y,de.$changes.refId)}R&&Ye.cache(j,y.slice(xe))}}}!_&&!R&&Ye.discard()}return y},x.prototype.encodeAll=function(_){return this.encode(!0,[],_)},x.prototype.applyFilters=function(_,y){var R,z;y===void 0&&(y=!1);for(var ne=this,De=new Set,Ce=ae.get(_),Je=[this.$changes],Ye=1,A=[],U=function(H){var O=Je[H];if(De.has(O.refId))return"continue";var ee=O.ref,j=ee instanceof x;Z(A,a),F(A,O.refId);var ue=Ce.refIds.has(O),xe=y||!ue;Ce.addRefId(O);var Ee=Ce.containerIndexes.get(O),pe=Array.from(xe?O.allChanges:O.changes.values());if(!y&&j&&ee._definition.indexesWithFilters){var de=ee._definition.indexesWithFilters;de.forEach(function(on){!Ee.has(on)&&O.allChanges.has(on)&&(xe?pe.push(on):pe.push({op:t.OPERATION.ADD,index:on}))})}for(var je=0,nt=pe.length;je<nt;je++){var it=xe?{op:t.OPERATION.ADD,index:pe[je]}:pe[je];if(it.op===t.OPERATION.CLEAR){Z(A,it.op);continue}var lt=it.index;if(it.op===t.OPERATION.DELETE){j?Z(A,it.op|lt):(Z(A,it.op),F(A,lt));continue}var Ue=O.getValue(lt),Ie=O.getType(lt);if(j){var mt=ee._definition.filters&&ee._definition.filters[lt];if(mt&&!mt.call(ee,_,Ue,ne)){Ue&&Ue.$changes&&De.add(Ue.$changes.refId);continue}}else{var ot=O.parent,mt=O.getChildrenFilter();if(mt&&!mt.call(ot,_,ee.$indexes.get(lt),Ue,ne)){Ue&&Ue.$changes&&De.add(Ue.$changes.refId);continue}}if(Ue.$changes&&(Je.push(Ue.$changes),Ye++),it.op!==t.OPERATION.TOUCH)if(it.op===t.OPERATION.ADD||j)A.push.apply(A,(R=O.caches[lt])!==null&&R!==void 0?R:[]),Ee.add(lt);else if(Ee.has(lt))A.push.apply(A,(z=O.caches[lt])!==null&&z!==void 0?z:[]);else{if(Ee.add(lt),Z(A,t.OPERATION.ADD),F(A,lt),ee instanceof m){var Tt=O.ref.$indexes.get(lt);Xe(A,Tt)}Ue.$changes?F(A,Ue.$changes.refId):Mt[Ie](A,Ue)}else if(Ue.$changes&&!j){if(Z(A,t.OPERATION.ADD),F(A,lt),ee instanceof m){var Tt=O.ref.$indexes.get(lt);Xe(A,Tt)}F(A,Ue.$changes.refId)}}},B=0;B<Ye;B++)U(B);return A},x.prototype.clone=function(){var _,y=new this.constructor,R=this._definition.schema;for(var z in R)typeof this[z]=="object"&&typeof((_=this[z])===null||_===void 0?void 0:_.clone)=="function"?y[z]=this[z].clone():y[z]=this[z];return y},x.prototype.toJSON=function(){var _=this._definition.schema,y=this._definition.deprecated,R={};for(var z in _)!y[z]&&this[z]!==null&&typeof this[z]<"u"&&(R[z]=typeof this[z].toJSON=="function"?this[z].toJSON():this["_".concat(z)]);return R},x.prototype.discardAllChanges=function(){this.$changes.discardAll()},x.prototype.getByIndex=function(_){return this[this._definition.fieldsByIndex[_]]},x.prototype.deleteByIndex=function(_){this[this._definition.fieldsByIndex[_]]=void 0},x.prototype.tryEncodeTypeId=function(_,y,R){y._typeid!==R._typeid&&(Z(_,l),F(_,R._typeid))},x.prototype.getSchemaType=function(_,y,R){var z;return _[y.offset]===l&&(y.offset++,z=this.constructor._context.get(ge(_,y))),z||R},x.prototype.createTypeInstance=function(_){var y=new _;return y.$changes.root=this.$changes.root,y},x.prototype._triggerChanges=function(_){for(var y,R,z,ne,De,Ce,Je,Ye,A,U=new Set,B=this.$changes.root.refs,H=function(ee){var j=_[ee],ue=j.refId,xe=B.get(ue),Ee=xe.$callbacks;if((j.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&j.previousValue instanceof x&&((R=(y=j.previousValue.$callbacks)===null||y===void 0?void 0:y[t.OPERATION.DELETE])===null||R===void 0||R.forEach(function(pe){return pe()})),!Ee)return"continue";if(xe instanceof x){if(!U.has(ue))try{(z=Ee?.[t.OPERATION.REPLACE])===null||z===void 0||z.forEach(function(pe){return pe()})}catch(pe){x.onError(pe)}try{Ee.hasOwnProperty(j.field)&&((ne=Ee[j.field])===null||ne===void 0||ne.forEach(function(pe){return pe(j.value,j.previousValue)}))}catch(pe){x.onError(pe)}}else j.op===t.OPERATION.ADD&&j.previousValue===void 0?(De=Ee[t.OPERATION.ADD])===null||De===void 0||De.forEach(function(pe){var de;return pe(j.value,(de=j.dynamicIndex)!==null&&de!==void 0?de:j.field)}):j.op===t.OPERATION.DELETE?j.previousValue!==void 0&&((Ce=Ee[t.OPERATION.DELETE])===null||Ce===void 0||Ce.forEach(function(pe){var de;return pe(j.previousValue,(de=j.dynamicIndex)!==null&&de!==void 0?de:j.field)})):j.op===t.OPERATION.DELETE_AND_ADD&&(j.previousValue!==void 0&&((Je=Ee[t.OPERATION.DELETE])===null||Je===void 0||Je.forEach(function(pe){var de;return pe(j.previousValue,(de=j.dynamicIndex)!==null&&de!==void 0?de:j.field)})),(Ye=Ee[t.OPERATION.ADD])===null||Ye===void 0||Ye.forEach(function(pe){var de;return pe(j.value,(de=j.dynamicIndex)!==null&&de!==void 0?de:j.field)})),j.value!==j.previousValue&&((A=Ee[t.OPERATION.REPLACE])===null||A===void 0||A.forEach(function(pe){var de;return pe(j.value,(de=j.dynamicIndex)!==null&&de!==void 0?de:j.field)}));U.add(ue)},O=0;O<_.length;O++)H(O)},x._definition=I.create(),x})();function sn(x){for(var _=[x.$changes],y=1,R={},z=R,ne=function(Ce){var Je=_[Ce];Je.changes.forEach(function(Ye){var A=Je.ref,U=Ye.index,B=A._definition?A._definition.fieldsByIndex[U]:A.$indexes.get(U);z[B]=Je.getValue(U)})},De=0;De<y;De++)ne(De);return R}var un={context:new C},In=(function(x){s(_,x);function _(){return x!==null&&x.apply(this,arguments)||this}return r([X("string",un)],_.prototype,"name",void 0),r([X("string",un)],_.prototype,"type",void 0),r([X("number",un)],_.prototype,"referencedType",void 0),_})(_t),rn=(function(x){s(_,x);function _(){var y=x!==null&&x.apply(this,arguments)||this;return y.fields=new v,y}return r([X("number",un)],_.prototype,"id",void 0),r([X([In],un)],_.prototype,"fields",void 0),_})(_t),Mi=(function(x){s(_,x);function _(){var y=x!==null&&x.apply(this,arguments)||this;return y.types=new v,y}return _.encode=function(y){var R,z=y.constructor,ne=new _;ne.rootType=z._typeid;var De=function(A,U){for(var B in U){var H=new In;H.name=B;var O=void 0;if(typeof U[B]=="string")O=U[B];else{var ee=U[B],j=void 0;_t.is(ee)?(O="ref",j=U[B]):(O=Object.keys(ee)[0],typeof ee[O]=="string"?O+=":"+ee[O]:j=ee[O]),H.referencedType=j?j._typeid:-1}H.type=O,A.fields.push(H)}ne.types.push(A)},Ce=(R=z._context)===null||R===void 0?void 0:R.types;for(var Je in Ce){var Ye=new rn;Ye.id=Number(Je),De(Ye,Ce[Je]._definition.schema)}return ne.encodeAll()},_.decode=function(y,R){var z=new C,ne=new _;ne.decode(y,R);var De=ne.types.reduce(function(U,B){var H=(function(ee){s(j,ee);function j(){return ee!==null&&ee.apply(this,arguments)||this}return j})(_t),O=B.id;return U[O]=H,z.add(H,O),U},{});ne.types.forEach(function(U){var B=De[U.id];U.fields.forEach(function(H){var O;if(H.referencedType!==void 0){var ee=H.type,j=De[H.referencedType];if(!j){var ue=H.type.split(":");ee=ue[0],j=ue[1]}ee==="ref"?X(j,{context:z})(B.prototype,H.name):X((O={},O[ee]=j,O),{context:z})(B.prototype,H.name)}else X(H.type,{context:z})(B.prototype,H.name)})});var Ce=De[ne.rootType],Je=new Ce;for(var Ye in Ce._definition.schema){var A=Ce._definition.schema[Ye];typeof A!="string"&&(Je[Ye]=typeof A=="function"?new A:new(T(Object.keys(A)[0])).constructor)}return Je},r([X([rn],un)],_.prototype,"types",void 0),r([X("number",un)],_.prototype,"rootType",void 0),_})(_t);M("map",{constructor:m}),M("array",{constructor:v}),M("set",{constructor:J}),M("collection",{constructor:Te}),t.ArraySchema=v,t.CollectionSchema=Te,t.Context=C,t.MapSchema=m,t.Reflection=Mi,t.ReflectionField=In,t.ReflectionType=rn,t.Schema=_t,t.SchemaDefinition=I,t.SetSchema=J,t.decode=k,t.defineTypes=V,t.deprecated=G,t.dumpChanges=sn,t.encode=Mt,t.filter=E,t.filterChildren=b,t.hasFilter=P,t.registerType=M,t.type=X}))})(mr,mr.exports)),mr.exports}var Et=Wl(),bt=function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},wt=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};class Rt extends Et.Schema{constructor(){super(...arguments),this.id="",this.x=0,this.y=0,this.z=0,this.yaw=0,this.pitch=0,this.vx=0,this.vy=0,this.vz=0,this.movementState="grounded",this.animationState="idle",this.animationTimeScale=1,this.shield=100,this.maxShield=100,this.health=50,this.maxHealth=50,this.currentWeapon="rifle",this.ammo=30,this.maxAmmo=30,this.lastShotTick=0}}bt([Et.type("string"),wt("design:type",Object)],Rt.prototype,"id",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"x",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"y",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"z",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"yaw",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"pitch",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"vx",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"vy",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"vz",void 0);bt([Et.type("string"),wt("design:type",Object)],Rt.prototype,"movementState",void 0);bt([Et.type("string"),wt("design:type",Object)],Rt.prototype,"animationState",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"animationTimeScale",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"shield",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"maxShield",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"health",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"maxHealth",void 0);bt([Et.type("string"),wt("design:type",Object)],Rt.prototype,"currentWeapon",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"ammo",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"maxAmmo",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"lastShotTick",void 0);class If extends Et.Schema{constructor(){super(...arguments),this.players=new Et.MapSchema}}bt([Et.type({map:Rt}),wt("design:type",Object)],If.prototype,"players",void 0);const DA={idle:"idle",walk:"walk",walkBackwards:"walkBackwards",strafeLeft:"strafeLeft",strafeRight:"strafeRight",strafeLeftFast:"strafeLeftFast",strafeRightFast:"strafeRightFast",run:"run",jump:"jump",slide:"slide",crouchForward:"crouchForward",crouchBackward:"crouchBackward",crouchLeft:"crouchLeft",crouchRight:"crouchRight"},sS={idle:"idleaiming",walk:"walk",walkBackwards:"walkbackwards.001",strafeLeft:"strafeLeft",strafeRight:"strafeRight",strafeLeftFast:"strafeleftfast",strafeRightFast:"straferightfast",run:"run",jump:"jump",slide:"sliding",crouchForward:"crouchforward",crouchBackward:"crouchbackward",crouchLeft:"crouchleft",crouchRight:"crouchright"},Lf=30,Ya=1e3/Lf,rS=1.8,ja=.4,ks=1.6,Mu=1,Er=100,ol=50,Xl=1.6,oS=.13,aS=.03,al=.2,Qo=1.41,$l=.29,cS=.02,Df=3.3,lS=Math.ceil(Lf/Df),Nf=45,hS=1250,uS=3,cl={accel:95,maxSpeedWalk:8,friction:10,gravity:27,jumpForce:10.5,coyoteTime:.12,jumpBufferTime:.12,slideInitialSpeed:12,slideSpeedBoost:1.1,slideDecay:.95,slideDecayOnRamp:.95,rampSlideGravityFactor:.5,slideMaxSpeedOnRamp:18,slideMinSpeed:2,slideDurationMax:1.8,slideEnterSpeed:6,slideBoostOnRampFactor:.85,maxSpeedOnRamp:8,rampLandingSpeedFactor:1.2,maxSpeedCrouch:3,slideJumpMultiplier:1.15,slideJumpCooldown:2,slideEnterCooldown:.4,wallBounceReflectFactor:.85,wallBounceSpeedMin:6,wallBounceJumpMultiplier:1,wallBounceBoostFactor:1.08,wallBounceBoostMin:8,dashSpeed:18,dashDuration:.4,dashCooldownSec:10},kt=20,hi=.25,dS=.001,fS=[[-kt,kt,kt-hi,kt+hi],[-kt,kt,-kt-hi,-kt+hi],[kt-hi,kt+hi,-kt,kt],[-kt-hi,-kt+hi,-kt,kt]],vo=kt,ir=kt*2;function xo(i,e,t){let n=i,s=e,r,o;const a=t+dS;for(const[l,c,h,u]of fS)n>=l-a&&n<=c+a&&s>=h-a&&s<=u+a&&(n<l+a?(n=l-a,r=1):n>c-a&&(n=c+a,r=-1),s<h+a?(s=h-a,o=1):s>u-a&&(s=u+a,o=-1));return{x:n,z:s,normalX:r,normalZ:o}}function sr(i,e){e.normalX!==void 0&&e.normalX!==0&&i.x*e.normalX>0&&(i.x=0),e.normalZ!==void 0&&e.normalZ!==0&&i.z*e.normalZ>0&&(i.z=0)}const pS="mixamorig:Head",mS="mixamorigHead",gS="Head",_S="mixamorig:HeadTop_End",vS="mixamorigHeadTop_End",xS="HeadTop_End",yS="mixamorig:Spine2",SS="mixamorig:Spine1",MS="mixamorig:Spine",ES="mixamorigSpine2",TS="mixamorigSpine1",AS="mixamorigSpine",bS="Spine2",wS="Spine1",RS="Spine",CS="mixamorig:Hips",PS="mixamorigHips",IS="Hips",LS="mixamorig:LeftFoot",DS="mixamorigLeftFoot",NS="LeftFoot",OS="mixamorig:RightFoot",US="mixamorigRightFoot",FS="RightFoot",Of="mixamorig:RightHand",Uf="mixamorigRightHand",Ff="RightHand",BS="mixamorig:LeftHand",zS="mixamorigLeftHand",kS="LeftHand";function Eu(i,e,t){if(e.collision!=="box"&&e.collision!=="ramp")return null;const[n,s,r]=e.size,[o,a,l]=i.position.map(Number),c=(Number(i.rotation)%360+360)%360,h=c===90||c===270,u=(h?r:n)/2,d=(h?n:r)/2,f=o-u,g=o+u,v=l-d,p=l+d;let m=a-s/2;const S=a+s/2;e.collision==="ramp"&&(m=t!==void 0?t:a-s/2+WS);const M={minX:f,maxX:g,minY:m,maxY:S,minZ:v,maxZ:p};return e.collision==="ramp"&&(M.rampAxis=h?"x":"z",M.rampInverted=c===270||c===180),e.walkableTopOnly&&(M.walkableTopOnly=!0),M}const qa={collision:"ramp",size:[4,1.2,2],walkableTopOnly:!0},Ka="ramp_1x4",HS=.05;function VS(i,e,t){const n=i.filter(o=>o.id===e);if(n.length===0)return[];const s=[],r=new Map;for(const o of n){const a=(Number(o.rotation)%360+360)%360;r.has(a)||r.set(a,[]),r.get(a).push(o)}for(const[,o]of r){const a=(Number(o[0].rotation)%360+360)%360,l=a===0||a===180,c=a===0||a===90;o.sort((f,g)=>{const v=f.position[0],p=f.position[2],m=g.position[0],S=g.position[2];if(l){const T=p-S;return c?T:-T}const M=v-m;return c?M:-M});const h=f=>l?`${Number(f.position[0]).toFixed(2)}`:`${Number(f.position[2]).toFixed(2)}`,u=f=>Number(l?f.position[2]:f.position[0]),d=new Map;for(const f of o){const g=h(f);d.has(g)||d.set(g,[]),d.get(g).push(f)}for(const f of d.values()){f.sort((v,p)=>c?u(v)-u(p):u(p)-u(v));let g=[f[0]];for(let v=1;v<f.length;v++){const p=f[v-1],m=f[v],S=u(p),M=u(m);Math.abs(M-S-(c?t:-t))<=HS?g.push(m):(g.length>0&&s.push(g),g=[m])}g.length>0&&s.push(g)}}return s}function GS(i,e){const t=[],s=(e[Ka]??qa).size[2];for(const o of i.prefabs){let a=e[o.id];if(o.id===Ka&&!a&&(a=qa),!a||a.collision==="none"||a.collision==="ramp")continue;const l=Eu(o,a);l&&t.push(l)}const r=VS(i.prefabs,Ka,s);for(const o of r){let a;for(const l of o){const c=e[l.id]??qa,h=Eu(l,c,a);h&&(t.push(h),a=h.maxY)}}return{blocks:t}}const WS=.2;function Ir(i,e,t){if(!i.rampAxis)return i.maxY;const n=i.rampAxis==="z"?i.minZ:i.minX,s=i.rampAxis==="z"?i.maxZ:i.maxX,r=i.rampAxis==="z"?t:e,o=s-n,a=o>1e-6?Math.max(0,Math.min(1,(r-n)/o)):0,l=i.rampInverted?1-a:a,c=i.maxY-i.minY;return i.minY+l*c}const Bf=.15,Tu=.01;function zf(i,e,t){if(!i.rampAxis)return!0;const n=i.rampAxis==="z"?i.minZ:i.minX,s=i.rampAxis==="z"?i.maxZ:i.maxX,r=i.rampAxis==="z"?t:e;return r>=n-Tu&&r<=s+Tu}function Tr(i,e,t,n=0,s){const r=[];for(const a of t.blocks){if(i<a.minX-n||i>a.maxX+n||e<a.minZ-n||e>a.maxZ+n||a.rampAxis&&!zf(a,i,e))continue;if(a.walkableTopOnly&&s!==void 0){const c=Ir(a,i,e);if(s<c-n)continue}const l=Ir(a,i,e);r.push(l)}if(r.length===0)return-1/0;if(r.length===1)return r[0];const o=s!==void 0?r.filter(a=>a<=s+Bf):r;return o.length===0?-1/0:Math.max(...o)}function gr(i,e,t,n=0,s){const r=[];for(const l of t.blocks){if(i<l.minX-n||i>l.maxX+n||e<l.minZ-n||e>l.maxZ+n||l.rampAxis&&!zf(l,i,e))continue;if(l.walkableTopOnly&&s!==void 0){const h=Ir(l,i,e);if(s<h-n)continue}const c=Ir(l,i,e);r.push({b:l,topY:c})}if(r.length===0)return!1;const o=r.length>1&&s!==void 0?r.filter(({topY:l})=>l<=s+Bf):r;return o.length===0?!1:o.reduce((l,c)=>c.topY>l.topY?c:l).b.rampAxis!=null}function yo(i,e,t,n,s){let r=i,o=t,a,l;const c=n+.001;for(const h of s.blocks){if(!(e>=h.minY-c&&e<=h.maxY+c))continue;const d=Ir(h,r,o);if(!(e>=d-c)&&r>=h.minX-c&&r<=h.maxX+c&&o>=h.minZ-c&&o<=h.maxZ+c){const f=Math.abs(r-(h.minX-c)),g=Math.abs(h.maxX+c-r),v=Math.abs(o-(h.minZ-c)),p=Math.abs(h.maxZ+c-o),m=Math.min(f,g,v,p);m===f?(r=h.minX-c,a=1):m===g?(r=h.maxX+c,a=-1):m===v?(o=h.minZ-c,l=1):(o=h.maxZ+c,l=-1)}}return{x:r,z:o,normalX:a,normalZ:l}}const XS=0,fs=.15,So=.05;function ps(i,e,t,n=0,s){return t?Tr(i,e,t,n,s):XS}function $S(i,e,t,n,s){if(!t)return null;const r=Tr(i,e,t,n,s);if(!Number.isFinite(r))return null;const o=Tr(i+So,e,t,n,s),a=Tr(i,e+So,t,n,s);return!Number.isFinite(o)||!Number.isFinite(a)?null:{gradX:(o-r)/So,gradZ:(a-r)/So}}function NA(){return{slideTime:0,slideEnterCooldownTimer:0,slideJumpCooldownTimer:0,slideOnLand:!1,horSpeedWhenJumped:0,lastApproachVx:0,lastApproachVz:0,lastJumpHeld:!1,lastHasSlideIntent:!1,dashCooldownTimer:0,dashActiveTimer:0,lastDashDirX:0,lastDashDirZ:0}}function YS(i,e){i.slideJumpCooldownTimer>0&&(i.slideJumpCooldownTimer-=e),i.slideEnterCooldownTimer>0&&(i.slideEnterCooldownTimer-=e),i.dashCooldownTimer>0&&(i.dashCooldownTimer-=e)}function jS(i,e,t,n,s){const r=cl,o=i.ext,a=e.jumpHeld&&!o.lastJumpHeld;o.lastJumpHeld=e.jumpHeld;const l=o.lastHasSlideIntent,c=e.hasSlideIntent&&!l;if(o.lastHasSlideIntent=e.hasSlideIntent,e.dash&&o.dashCooldownTimer<=0&&o.dashActiveTimer<=0){const N=Math.cos(e.yaw),X=Math.sin(e.yaw);let E=e.moveX*N-e.moveZ*X,b=-(e.moveX*X+e.moveZ*N),G=Math.hypot(E,b);if(G<.01){const V=Math.hypot(i.vx,i.vz);V>.01?(E=i.vx/V,b=i.vz/V,G=1):(E=-X,b=-N,G=Math.hypot(E,b))}G>.01&&(E/=G,b/=G,i.vx=E*r.dashSpeed,i.vz=b*r.dashSpeed,o.dashActiveTimer=r.dashDuration,o.dashCooldownTimer=r.dashCooldownSec,o.lastDashDirX=E,o.lastDashDirZ=b)}if(o.dashActiveTimer>0){o.dashActiveTimer-=t,i.vy-=r.gravity*t,i.vy=Math.max(i.vy,-55),i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t;const N=ps(i.x,i.z,s,n,i.y);Number.isFinite(N)&&i.y<=N+fs&&(i.y=N,i.vy=0);const X=s?yo(i.x,i.y,i.z,n,s):xo(i.x,i.z,n);i.x=X.x,i.z=X.z;const E={x:i.vx,z:i.vz};sr(E,X),i.vx=E.x,i.vz=E.z;return}if(i.movementState==="sliding"){o.slideTime+=t;const N=Math.hypot(i.vx,i.vz),X=!!s&&gr(i.x,i.z,s,n,i.y),E=X?r.slideDecayOnRamp:r.slideDecay;if(i.vx*=E,i.vz*=E,X&&r.rampSlideGravityFactor>0){const _e=$S(i.x,i.z,s,n,i.y);if(_e){const ie=r.gravity*t*r.rampSlideGravityFactor;i.vx-=_e.gradX*ie,i.vz-=_e.gradZ*ie}const $=Math.hypot(i.vx,i.vz);$>r.slideMaxSpeedOnRamp&&(i.vx*=r.slideMaxSpeedOnRamp/$,i.vz*=r.slideMaxSpeedOnRamp/$)}i.vy-=r.gravity*t,i.vy=Math.max(i.vy,-55),i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t;let b=ps(i.x,i.z,s,n,i.y);if(!Number.isFinite(b)&&s&&Math.hypot(i.vx,i.vz)>.01){const _e=i.x-i.vx*t*.5,$=i.z-i.vz*t*.5,ie=ps(_e,$,s,n,i.y);Number.isFinite(ie)&&(b=ie)}Number.isFinite(b)&&i.y<=b+fs&&(i.y=b,i.vy=0);const G=s?yo(i.x,i.y,i.z,n,s):xo(i.x,i.z,n);i.x=G.x,i.z=G.z;const V={x:i.vx,z:i.vz};sr(V,G),i.vx=V.x,i.vz=V.z;const Y=Math.cos(e.yaw),Q=Math.sin(e.yaw),W=e.moveX*Y-e.moveZ*Q,Z=-(e.moveX*Q+e.moveZ*Y),K=Math.hypot(W,Z);if(K>.1&&N>.1&&(W*i.vx+Z*i.vz)/(K*N)<.5){i.movementState="grounded",o.slideEnterCooldownTimer=r.slideEnterCooldown;return}const le=ps(i.x,i.z,s,n,i.y),te=N>=r.slideMinSpeed&&o.slideTime<r.slideDurationMax&&Number.isFinite(le)&&i.y<=le+fs,be=o.slideJumpCooldownTimer<=0;if(e.jump&&te&&be){const _e=r.slideJumpMultiplier;i.vy=r.jumpForce*_e,i.vx*=_e,i.vz*=_e,o.horSpeedWhenJumped=Math.hypot(i.vx,i.vz),o.slideJumpCooldownTimer=r.slideJumpCooldown,o.lastApproachVx=i.vx,o.lastApproachVz=i.vz,i.movementState="airborne"}else te||(o.slideEnterCooldownTimer=r.slideEnterCooldown,i.movementState=Number.isFinite(le)&&i.y<=le+fs?"grounded":"airborne");return}if(i.movementState==="airborne"){c&&(o.slideOnLand=!0),l&&!e.hasSlideIntent&&(o.slideOnLand=!1);const N=Math.hypot(i.vx,i.vz),X=o.horSpeedWhenJumped;N>X&&X>0&&(i.vx*=X/N,i.vz*=X/N),i.vy-=r.gravity*t,i.vy=Math.max(i.vy,-55),i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t;const E=ps(i.x,i.z,s,n,i.y);if(Number.isFinite(E)&&i.y<=E+fs){i.y=E,i.vy=0;const Y=Math.hypot(i.vx,i.vz);if(o.slideOnLand&&Y>=r.slideEnterSpeed){i.movementState="sliding",o.slideTime=0,o.slideJumpCooldownTimer=0;const W=!!s&&gr(i.x,i.z,s,n,i.y)?r.slideBoostOnRampFactor:1,Z=Math.max(Y*r.slideSpeedBoost,r.slideInitialSpeed)*W;Y>0&&Z>0&&(i.vx=i.vx/Y*Z,i.vz=i.vz/Y*Z)}else if(i.movementState="grounded",!!s&&gr(i.x,i.z,s,n,i.y)){const W=r.maxSpeedWalk*r.rampLandingSpeedFactor,Z=Math.hypot(i.vx,i.vz);Z>W&&W>0&&(i.vx*=W/Z,i.vz*=W/Z)}o.slideOnLand=!1}else o.horSpeedWhenJumped===0&&N>0&&(o.horSpeedWhenJumped=N),i.movementState="airborne";const b=s?yo(i.x,i.y,i.z,n,s):xo(i.x,i.z,n);if(i.x=b.x,i.z=b.z,b.normalX!==void 0&&b.normalX!==0||b.normalZ!==void 0&&b.normalZ!==0){const Y=b.normalX??0,Q=b.normalZ??0,W=o.lastApproachVx,Z=o.lastApproachVz,K=Math.hypot(W,Z),ce=W*Y+Z*Q;if(a&&K>=r.wallBounceSpeedMin&&ce>0){let le=W-2*ce*Y,te=Z-2*ce*Q;le*=r.wallBounceReflectFactor,te*=r.wallBounceReflectFactor;let be=Math.hypot(le,te);const _e=Math.max(be*r.wallBounceBoostFactor,r.wallBounceBoostMin);be>0&&_e>be&&(le*=_e/be,te*=_e/be,be=_e),i.vx=le,i.vz=te,i.vy=r.jumpForce*r.wallBounceJumpMultiplier,o.horSpeedWhenJumped=be,o.slideJumpCooldownTimer=r.slideJumpCooldown,o.slideOnLand=!1;const $={x:i.vx,z:i.vz};sr($,b),i.vx=$.x,i.vz=$.z;return}}else o.lastApproachVx=i.vx,o.lastApproachVz=i.vz;const V={x:i.vx,z:i.vz};sr(V,b),i.vx=V.x,i.vz=V.z;return}const h=Math.hypot(i.vx,i.vz),u=o.slideEnterCooldownTimer<=0;if(e.hasSlideIntent&&u&&h>=r.slideEnterSpeed){i.movementState="sliding",o.slideTime=0;const N=Math.hypot(i.vx,i.vz),X=Math.max(N*r.slideSpeedBoost,r.slideInitialSpeed);N>0&&(i.vx=i.vx/N*X,i.vz=i.vz/N*X);return}const g=e.crouch?r.maxSpeedCrouch:r.maxSpeedWalk,v=Math.cos(e.yaw),p=Math.sin(e.yaw),m=(e.moveX*v-e.moveZ*p)*r.accel*t,S=(-e.moveX*p-e.moveZ*v)*r.accel*t;i.vx+=m,i.vz+=S,i.vx*=Math.max(0,1-r.friction*t),i.vz*=Math.max(0,1-r.friction*t);const M=Math.hypot(i.vx,i.vz);if(M>g&&(i.vx*=g/M,i.vz*=g/M),!!s&&gr(i.x,i.z,s,n,i.y)){const N=Math.hypot(i.vx,i.vz);N>r.maxSpeedOnRamp&&(i.vx*=r.maxSpeedOnRamp/N,i.vz*=r.maxSpeedOnRamp/N)}e.jump?(i.vy=r.jumpForce,o.horSpeedWhenJumped=Math.hypot(i.vx,i.vz),o.lastApproachVx=i.vx,o.lastApproachVz=i.vz,i.movementState="airborne"):i.vy=0,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t;const I=ps(i.x,i.z,s,n,i.y);Number.isFinite(I)&&i.y<=I+fs?(i.y=I,i.vy=0,i.movementState="grounded"):(o.horSpeedWhenJumped===0&&(o.horSpeedWhenJumped=Math.hypot(i.vx,i.vz)),i.movementState="airborne");const P=s?yo(i.x,i.y,i.z,n,s):xo(i.x,i.z,n);i.x=P.x,i.z=P.z;const C={x:i.vx,z:i.vz};sr(C,P),i.vx=C.x,i.vz=C.z}class qS{running=!1;lastTime=0;accumulator=0;onTick=()=>{};onRender=()=>{};rafId=0;setTickCallback(e){return this.onTick=e,this}setRenderCallback(e){return this.onRender=e,this}start(){this.running||(this.running=!0,this.lastTime=performance.now(),this.tick(0))}stop(){this.running=!1,this.rafId&&cancelAnimationFrame(this.rafId)}tick=e=>{this.rafId=requestAnimationFrame(this.tick);const t=(e-this.lastTime)/1e3;for(this.lastTime=e,this.accumulator+=Math.min(t,.1);this.accumulator>=Ya/1e3;)this.onTick(Ya/1e3),this.accumulator-=Ya/1e3;this.onRender(t)}}class KS{tickSystems=[];renderSystems=[];addTickSystem(e){this.tickSystems.push(e)}addRenderSystem(e){this.renderSystems.push(e)}update(e){for(const t of this.tickSystems)t.tick(e)}render(e){for(const t of this.renderSystems)t.render(e)}}const Ci={},Le={serverUrl:Ci?.VITE_SERVER_URL??"ws://localhost:2567",debugOverlay:!0,logLevel:"info",playerModelUrl:Ci?.VITE_PLAYER_MODEL_URL??"/models/player.glb",viewmodelArmsUrl:(Ci?.VITE_VIEWMODEL_ARMS_URL??"/models/vanguard_pov.glb").trim(),viewmodelWeaponUrl:(Ci?.VITE_VIEWMODEL_WEAPON_URL??"/models/weapons/rifle.glb").trim(),viewmodelWeaponScale:Number(Ci?.VITE_VIEWMODEL_WEAPON_SCALE??"3.6")||3.6,viewmodelWeaponTwoPoint:!1,viewmodelWeaponOffset:{x:.26,y:.23,z:.44},viewmodelWeaponPovOffset:{x:0,y:-.4,z:0},viewmodelWeaponGripOffset:{x:0,y:0,z:0},viewmodelWeaponRotationX:-1.68,viewmodelWeaponRotationY:2.93,viewmodelWeaponRotationZ:2*Math.PI,dummyModelUrl:Ci?.VITE_DUMMY_MODEL_URL??"/models/dummy.glb",playerSkin:(Ci?.VITE_PLAYER_SKIN??"orange").trim(),muzzleFlashUrls:[],muzzleFlashDurationMs:50,muzzleFlashScalePov:.21,muzzleFlashScale3P:.11,tracerEnabledDefault:!0,tracerMaxLifetimeMs:100,tracerEveryNthShot:1,tracerColor:16760944,tracerLineRadius:.01,tracerImpactLifetimeMs:90,tracerImpactSize:.08,tracerMuzzleSideOffset:.03,tracerFirstPersonLength:20,animationClipNames:{},thirdPersonWeaponOffset:{x:0,y:0,z:0},thirdPersonWeaponGripOffset:{x:0,y:0,z:0},thirdPersonWeaponScale:1,thirdPersonWeaponRotationX:.19,thirdPersonWeaponRotationY:3.16,thirdPersonWeaponRotationZ:1.45,tuning:{crouchTransitionTau:.04,povMovement:{moveFactorSmoothTau:.06,phaseSpeedSmoothTau:.08,rootApplyTau:.025,bobAmplitudeY:.01512,bobAmplitudeX:.0156,bobAmplitudeRoll:.0052,bobAmplitudePitch:.00258,bobPhaseOffsetX:.3,bobFrequency:10,bobCrouchMultiplier:.5,swayLookFactor:.6,swaySmoothTau:.05,swayDeltaSmoothTau:.04,swayReturnDamping:.88,swaySlideReduce:.92,bobSlideReduce:.98,strafeLeanX:.2,strafeLeanRoll:.025,forwardLeanZ:.1,strafeLeanTau:.06,strafeBobYReduce:.7,strafeBobXBoost:.5,strafeBobRollBoost:.8,idleBreathingAmplitudeY:.008,idleBreathingAmplitudeX:.0024,idleBreathingPeriod:4,idlePitchAmplitude:.0024,idleRollAmplitude:.0012,idleWalkReduce:.85,idleAirborneReduce:.3,jumpTakeoffDip:-.008,jumpTakeoffDecay:8,jumpAirborneFloatY:.032,jumpLandingDip:-.06,jumpLandingSpringK:60,jumpLandingSpringDamp:14,jumpLandingRoll:.016,jumpInertiaZ:.016,swayAirborneReduce:.5,recoilKickPitch:.02,recoilPullback:.15,recoilRollVariation:.02,recoilRecoveryTau:.06,recoilSlideReduce:.5,slideYOffset:-.2,slideZOffset:.1,slideInwardTilt:.38,slidePitchDown:-.1,slideImpactDipAmp:-.012,slideImpactSpringK:80,slideImpactSpringDamp:18,slideWiggleRoll:.005,slideWiggleDuration:.3,slideReleaseBump:0,slideReleaseBumpTau:.1,slideInTau:.04,slideOutTau:.28,bobCrouchFreqMultiplier:1,bobCrouchAmpMultiplier:1,reloadYOffset:-.12,reloadZOffset:.12,reloadPullback:.06,reloadPitchDown:-.3,reloadRoll:-.14,reloadYaw:.18,reloadOvershoot:.08,swayReloadReduce:.8,idleReloadReduce:.4},remoteInterpTau:.05,reconcileThreshold:.05,reconcileLerp:.5,reconcileMin:.01,reconcileYMin:.08,reconcileLerpGentle:.15},thirdPersonWeaponOffsets:{walkBackwards:{x:0,y:0,z:0,rotX:.09,rotY:3.39,rotZ:1.45,scale:1},crouchForward:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1},crouchBackward:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1},crouchLeft:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1},crouchRight:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1}}},ZS={moveX:0,moveZ:0,sprint:!1,jump:!1,slide:!1,slideJustPressed:!1,slideIntentTicks:0,crouch:!1,yaw:0,pitch:0,shoot:!1,reload:!1,dash:!1,debugModeJustPressed:!1},JS=["KeyW","KeyN","KeyT","KeyC","ShiftLeft","ShiftRight"];function QS(i){document.addEventListener("keydown",e=>{const t=e.code,n=e.key?.toLowerCase();e.ctrlKey&&(t==="KeyW"||t==="KeyN"||t==="KeyT"||n==="w"||n==="n"||n==="t")&&(e.preventDefault(),e.stopImmediatePropagation())},{capture:!0})}class eM{state={...ZS};pointerLocked=!1;sensitivity=.002;bound=!1;keysDown=new Set;slideWasDown=!1;_slideIntentTicks=0;getState(){this.state.sprint=!1;const e=this.keysDown.has("ShiftLeft")||this.keysDown.has("ShiftRight");return this.state.slideJustPressed=e&&!this.slideWasDown,this.slideWasDown=e,this.state.slide=e,this.state.slideIntentTicks=this._slideIntentTicks,this.state.crouch=this.keysDown.has("KeyC"),this.state.dash=this.keysDown.has("KeyQ"),this.state}tick(){this._slideIntentTicks>0&&this._slideIntentTicks--,this.state.debugModeJustPressed=!1}isPointerLocked(){return this.pointerLocked}requestPointerLock(e){if(this.bound)return;this.bound=!0,e.addEventListener("click",()=>{e.requestPointerLock(),navigator.keyboard?.lock&&navigator.keyboard.lock().then(()=>{}).catch(()=>{navigator.keyboard.lock(JS).catch(()=>{})})}),QS(),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===e,this.keysDown.clear(),this.slideWasDown=!1,this._slideIntentTicks=0,!this.pointerLocked&&navigator.keyboard?.unlock&&navigator.keyboard.unlock()}),document.addEventListener("mousemove",s=>{this.pointerLocked&&(this.state.yaw-=s.movementX*this.sensitivity,this.state.pitch-=s.movementY*this.sensitivity,this.state.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.state.pitch)))});const t={capture:!0},n=s=>{s.addEventListener("keydown",r=>this.onKey(r.code,!0,r),t),s.addEventListener("keyup",r=>this.onKey(r.code,!1,r),t)};n(document),n(window),n(e),window.addEventListener("keydown",s=>this.preventBrowserShortcuts(s),t),window.addEventListener("blur",()=>this.syncModifiers(!1,!1))}preventBrowserShortcuts(e){const t=e.key?.toLowerCase(),n=e.code;e.ctrlKey&&(n==="KeyW"||n==="KeyN"||n==="KeyT"||t==="w"||t==="n"||t==="t")&&e.preventDefault()}syncModifiers(e,t){this.keysDown.clear(),this.slideWasDown=!1,this._slideIntentTicks=0}isSlideKey(e){return e==="ShiftLeft"||e==="ShiftRight"}onKey(e,t,n){if(!n)return;const s=n.key?.toLowerCase();t?(this.keysDown.add(e),this.isSlideKey(e)&&(this._slideIntentTicks=Math.max(this._slideIntentTicks,10))):this.keysDown.delete(e),e==="KeyW"&&(this.state.moveZ=t?1:this.state.moveZ===1?0:this.state.moveZ),e==="KeyS"&&(this.state.moveZ=t?-1:this.state.moveZ===-1?0:this.state.moveZ),e==="KeyA"&&(this.state.moveX=t?-1:this.state.moveX===-1?0:this.state.moveX),e==="KeyD"&&(this.state.moveX=t?1:this.state.moveX===1?0:this.state.moveX),(e==="ShiftLeft"||e==="ShiftRight"||s==="shift")&&n.preventDefault(),e==="KeyC"&&n.preventDefault(),this.pointerLocked&&n.ctrlKey&&(e==="KeyW"||e==="KeyN"||e==="KeyT"||s==="w"||s==="n"||s==="t")&&n.preventDefault(),e==="Space"&&(n.preventDefault(),this.state.jump=t),e==="KeyR"&&(this.state.reload=t),e==="KeyB"&&t&&(n.preventDefault(),this.state.debugModeJustPressed=!0)}setShoot(e){this.state.shoot=e}sampleMouse(e){}consumeOneShoot(){this.state.shoot=!1}setMouseSensitivity(e){const t=Math.max(.2,Math.min(3,e));this.sensitivity=.002*t}}class tM{camera;targetPosition=new D(0,0,0);yaw=0;pitch=0;smooth=.15;constructor(e=75,t=16/9,n=.1,s=1e3){this.camera=new Zt(e,t,n,s)}setTargetPosition(e,t,n){this.targetPosition.set(e,t,n)}setRotation(e,t){this.yaw=e,this.pitch=t}getAimDirection(){this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0,this.camera.updateMatrixWorld(!0);const e=new D;return this.camera.getWorldDirection(e),e}snapToTarget(){this.camera.position.x=this.targetPosition.x,this.camera.position.y=this.targetPosition.y,this.camera.position.z=this.targetPosition.z,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0,this.camera.updateMatrixWorld()}update(e){this.camera.position.x=Ns.lerp(this.camera.position.x,this.targetPosition.x,1-Math.exp(-this.smooth*60*e)),this.camera.position.z=Ns.lerp(this.camera.position.z,this.targetPosition.z,1-Math.exp(-this.smooth*60*e)),this.camera.position.y=this.targetPosition.y,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0,this.camera.updateMatrixWorld()}getCamera(){return this.camera}getEyePosition(){return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z}}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}}const nM=0;class iM{position={x:0,y:nM,z:0};velocity={x:0,y:0,z:0};yaw=0;pitch=0;state="grounded";crouching=!1;coyoteTimer=0;jumpBufferTimer=0;staticWorld;ext={slideTime:0,slideEnterCooldownTimer:0,slideJumpCooldownTimer:0,slideOnLand:!1,horSpeedWhenJumped:0,lastApproachVx:0,lastApproachVz:0,lastJumpHeld:!1,lastHasSlideIntent:!1,dashCooldownTimer:0,dashActiveTimer:0,lastDashDirX:0,lastDashDirZ:0};setStaticWorld(e){this.staticWorld=e}update(e,t,n){const s=cl;t.jump&&(this.jumpBufferTimer=s.jumpBufferTime),this.state==="grounded"?this.coyoteTimer=s.coyoteTime:this.coyoteTimer-=e,YS(this.ext,e);const r=t.slide||t.slideIntentTicks>0,o=this.jumpBufferTimer>0||t.jump&&this.coyoteTimer>0,a={moveX:t.moveX,moveZ:t.moveZ,jump:o,jumpHeld:t.jump,hasSlideIntent:r,crouch:t.crouch,dash:t.dash,yaw:t.yaw,pitch:t.pitch},l={x:this.position.x,y:this.position.y,z:this.position.z,vx:this.velocity.x,vy:this.velocity.y,vz:this.velocity.z,movementState:this.state,ext:this.ext};jS(l,a,e,ja,this.staticWorld),this.position.x=l.x,this.position.y=l.y,this.position.z=l.z,this.velocity.x=l.vx,this.velocity.y=l.vy,this.velocity.z=l.vz,this.state=l.movementState,this.yaw=t.yaw,this.pitch=t.pitch,o&&this.state==="airborne"&&(this.jumpBufferTimer=0),this.state==="airborne"&&(this.jumpBufferTimer-=e),this.crouching=this.state==="sliding"||this.state==="grounded"&&t.crouch}getSnapshot(){return{position:{...this.position},velocity:{...this.velocity},yaw:this.yaw,pitch:this.pitch,grounded:this.state==="grounded",state:this.state,crouching:this.crouching}}getDashCooldownRemaining(){return Math.max(0,this.ext.dashCooldownTimer)}getDashCooldownTotal(){return cl.dashCooldownSec}isDashing(){return this.ext.dashActiveTimer>0}getGroundDebugInfo(){if(!this.staticWorld)return null;const e=Tr(this.position.x,this.position.z,this.staticWorld,ja,this.position.y),t=gr(this.position.x,this.position.z,this.staticWorld,ja,this.position.y);return{groundY:Number.isFinite(e)?e:this.position.y,playerY:this.position.y,onRamp:t}}}class sM{scene=new iy;renderer;floor;mapGroup=null;renderScale=1;constructor(e,t){const n=t?.antialias??!0;this.renderer=new ny({canvas:e,antialias:n}),this.renderScale=t?.renderScale&&t.renderScale>0?t.renderScale:1;const s=Math.min(window.devicePixelRatio*this.renderScale,2);this.renderer.setPixelRatio(s);const r=e.clientWidth||window.innerWidth,o=e.clientHeight||window.innerHeight;this.renderer.setSize(r,o),this.renderer.setClearColor(2763317),this.scene.background=new Ve(2763317);const a=new Hy(16777215,.5);this.scene.add(a);const l=new Uy(2956110,855322,.35);this.scene.add(l);const c=new Cf(16777215,.85);c.position.set(12,25,12),this.scene.add(c);const h=new Ur(ir,ir),u=new yi({color:14211292});this.floor=new xt(h,u),this.floor.rotation.x=-Math.PI/2,this.scene.add(this.floor);const d=new tS(ir,ir,9079444,11053232);d.position.y=.001,this.scene.add(d);const f=new Si(ir,4,.5),g=new yi({color:14211292});for(const[v,p]of[[0,vo],[0,-vo],[vo,0],[-vo,0]]){const m=new xt(f,g);m.position.set(v,2,p),p===0&&(m.rotation.y=Math.PI/2),this.scene.add(m)}this.scene.add(this.createProceduralSkybox())}createProceduralSkybox(){const t=new sa(500,32,24),n=new ti({uniforms:{},vertexShader:`
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
      `,side:Qt,depthWrite:!1}),s=new xt(t,n);return s.frustumCulled=!1,s}render(e){this.renderer.render(this.scene,e)}resize(e,t){this.renderer.setSize(e,t)}getScene(){return this.scene}setMapGroup(e){this.mapGroup&&this.scene.remove(this.mapGroup),this.mapGroup=e,this.mapGroup&&this.scene.add(this.mapGroup)}setPerformance(e){this.renderScale=e.renderScale>0?e.renderScale:1;const t=Math.min(window.devicePixelRatio*this.renderScale,2);this.renderer.setPixelRatio(t)}}const Au=10;function kf(i){return i.length<=Au?i:i.slice(0,Au)+"..."}let Mo=null,Hf=null,ll=null,Vf=null,Gf=null,Wf=null,Xf=null,$f=null,Yf=null,jf=null,qf=null,Kf=null;const Zf="#4dd0e1",rM="#c62828",oM="#9a1f1f",aM="rgba(0,0,0,0.6)",Fo=10;function cM(i){const e=document.createElement("div");e.id="crosshair",e.style.cssText=`
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
  `;for(let V=0;V<Fo;V++){const Y=document.createElement("div");Y.style.cssText=`
      flex: 1; border-radius: 2px; min-width: 0;
      background: ${Zf}; transition: background 0.15s ease;
    `,s.appendChild(Y)}const r=document.createElement("div");r.id="hud-player-name",r.style.cssText="font-size: 18px; color: rgba(255,255,255,0.9);",r.textContent="Player";const o=document.createElement("div");o.id="hud-left-info",o.style.cssText="font-size: 15px; color: rgba(255,255,255,0.5); margin-top: 4px;",o.textContent="";const a=document.createElement("div");a.id="hud-dash-indicator",a.style.cssText=`
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
  `,i.appendChild(h),i.appendChild(u);const d="rgba(77,208,225,0.5)",f=55,g=360/f,v=.75,p=[];for(let V=0;V<f;V++){const Y=V*g;p.push(`${d} ${Y}deg`,`transparent ${Y+v}deg`)}const m=`conic-gradient(from 0deg, ${p.join(", ")})`,S=document.createElement("div");S.id="hud-dash-streaks",S.style.cssText=`
    position: fixed; inset: 0;
    pointer-events: none;
    opacity: 0;
    z-index: 0;
    background-image: ${m};
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
  `,P.appendChild(I),P.appendChild(T);const C=document.createElement("div");C.id="hud-weapon-slots",C.style.cssText=`
    display: flex; flex-direction: column; align-items: flex-start; min-height: 0;
  `;const N=document.createElement("div");N.style.cssText=`
    display: flex; flex-direction: row; align-items: center; gap: 8px;
    flex: 1; min-height: 0; opacity: 0.9;
  `;const X=document.createElement("div");X.style.cssText=`
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
  `,X.appendChild(E);const b=document.createElement("div");b.textContent="1",b.style.cssText=`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: rgba(255,255,255,0.9);
  `,N.appendChild(X),N.appendChild(b),C.appendChild(N),M.appendChild(P),M.appendChild(C),i.appendChild(M);const G=document.createElement("div");G.id="respawn-overlay",G.style.cssText=`
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
  `,G.innerHTML='<div>Respawn</div><div id="respawn-countdown">3.0</div>',i.appendChild(G),Hf=n,ll=s,Vf=r,Gf=I,Wf=l,Xf=c,$f=h,Yf=u,jf=S,qf=G,Kf=G.querySelector("#respawn-countdown")}function lM(i,e,t,n,s,r,o,a,l,c,h){const u=i>0,d=u?i:t,f=u?e:n,g=f>0?d/f:0,v=Math.round(g*Fo),p=u?Zf:rM,m=Hf??document.getElementById("hud-player-value");if(m){const ce=Math.max(0,Math.floor(i+t)),le=e+n;m.innerHTML=`<span style="color:#fff">${ce}</span><span style="color:rgba(255,255,255,0.6)"> / ${le}</span>`}const S=ll??document.getElementById("hud-player-bar"),M=u?oM:aM;if(S&&S.children.length===Fo)for(let ce=0;ce<Fo;ce++){const le=S.children[ce];le.style.background=ce<v?p:M}const T=ll??document.getElementById("hud-player-bar");T&&(T.style.background=u?"rgba(40,0,0,0.4)":"rgba(0,0,0,0.5)");const I=Vf??document.getElementById("hud-player-name");I&&(I.textContent=kf(o));const P=Gf??document.getElementById("hud-info");if(P){const ce=a?"∞":String(s),le=a?"∞":String(r);P.innerHTML=`<span style="color:#fff">${ce}</span><span style="color:rgba(255,255,255,0.6)"> / ${le}</span>`}const C=Math.max(.001,c??10),N=Math.max(0,l??0),X=1-N/C,E=N<=0,b=Wf??document.getElementById("hud-dash-circle"),G=Xf??document.getElementById("hud-dash-icon");b&&G&&(b.style.setProperty("--dash-fill",String(X)),b.style.setProperty("--dash-fill-color","#4dd0e1"),G.style.color=E?"#4dd0e1":"rgba(255,255,255,0.4)",G.style.filter=E?"none":"grayscale(1)");const V=$f??document.getElementById("hud-dash-lines-left"),Y=Yf??document.getElementById("hud-dash-lines-right"),Q=jf??document.getElementById("hud-dash-streaks"),W=h??!1;V&&Y&&(V.style.opacity=W?"1":"0",Y.style.opacity=W?"1":"0"),Q&&(Q.style.opacity=W?"0.85":"0");const Z=qf??document.getElementById("respawn-overlay"),K=Kf??document.getElementById("respawn-countdown");if(!(!Z||!K))if(t<=0){Mo===null&&(Mo=performance.now());const ce=(performance.now()-Mo)/1e3,le=Math.max(0,uS-ce);K.textContent=le.toFixed(1),Z.style.display="block"}else Mo=null,Z.style.display="none"}const hM=.5,uM=84,dM=10,hl=10,Jf="#4dd0e1",fM="#c62828",pM="#9a1f1f",mM="rgba(0,0,0,0.6)",gM=80,_M=-14,vM=.06,xM=.18,yM=2,Eo=24;let _i=null;const Ss=new Map;let Qf=0;const bu=new D,To=new D;function SM(i){_i=document.createElement("div"),_i.id="player-health-bars",_i.style.cssText="position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:9999;",i.appendChild(_i)}function MM(i){if(!_i)return;let e=Ss.get(i);if(!e){const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      display: flex;
      gap: 1px;
      width: ${uM}px;
      height: ${dM}px;
      background: rgba(0,0,0,0.5);
      border: 1px solid rgba(0,0,0,0.85);
      border-radius: 2px;
      padding: 1px;
      box-sizing: border-box;
      transform-origin: center center;
      opacity: 0;
    `;const n=[];for(let s=0;s<hl;s++){const r=document.createElement("div");r.style.cssText=`
        flex: 1; min-width: 0; border-radius: 1px;
        background: ${Jf}; transition: background 0.12s ease;
      `,t.appendChild(r),n.push(r)}_i.appendChild(t),e={entityId:i,lastDamagedTime:0,lastDamagedMs:0,element:t,segments:n,smoothedScreenX:0,smoothedScreenY:0,visibilityAlpha:0,prevShield:Er,prevHealth:ol,shieldBreakFlashUntil:0},Ss.set(i,e)}e.lastDamagedTime=performance.now()/1e3,e.lastDamagedMs=Qf}function EM(i,e,t){Qf+=t*1e3;const n=performance.now()/1e3;if(!_i||!i)return;const s=window.innerWidth,r=window.innerHeight,o=Eo,a=s-Eo,l=Eo,c=r-Eo,h=hS/1e3,u=[];i.state.players.forEach((g,v)=>{const p=Ss.get(v);!p||g.health<=0||n-p.lastDamagedTime>h||u.push(p)}),u.sort((g,v)=>v.lastDamagedTime-g.lastDamagedTime);const d=u.slice(0,yM);i.state.players.forEach((g,v)=>{const p=Ss.get(v);if(!p)return;const m=g.health>0,S=n-p.lastDamagedTime,M=m&&S<h&&d.includes(p);if(bu.set(g.x,g.y+ks+hM,g.z),To.copy(bu).project(e),To.z>1){p.element.style.opacity="0",p.element.style.pointerEvents="none";return}let T=(To.x*.5+.5)*s,I=(1-(To.y*.5+.5))*r+_M;T=Math.max(o,Math.min(a,T)),I=Math.max(l,Math.min(c,I));const P=T-p.smoothedScreenX,C=I-p.smoothedScreenY,N=Math.hypot(P,C);if((N>80||p.smoothedScreenX===0&&p.smoothedScreenY===0)&&(p.smoothedScreenX=T,p.smoothedScreenY=I),N<=80){const te=1-Math.exp(-22*t);p.smoothedScreenX+=(T-p.smoothedScreenX)*te,p.smoothedScreenY+=(I-p.smoothedScreenY)*te}(M?1:0)>p.visibilityAlpha?p.visibilityAlpha=Math.min(1,p.visibilityAlpha+t/vM):p.visibilityAlpha=Math.max(0,p.visibilityAlpha-t/xM),p.element.style.left=`${p.smoothedScreenX}px`,p.element.style.top=`${p.smoothedScreenY}px`,p.element.style.transform="translate(-50%, -50%)",p.element.style.opacity=String(p.visibilityAlpha);const E=g.shield??0,b=g.maxShield??Er,G=E>0,V=G?E:g.health,Y=G?b:g.maxHealth,Q=Y>0?V/Y:0,W=Math.round(Q*hl),Z=G?Jf:fM,K=G?pM:mM;p.element.style.background="rgba(0,0,0,0.5)";for(let te=0;te<hl;te++){const be=p.segments[te];be&&(be.style.background=te<W?Z:K)}p.prevShield>0&&E===0&&(p.shieldBreakFlashUntil=n*1e3+gM),p.prevShield=E,p.prevHealth=g.health;const le=n*1e3<p.shieldBreakFlashUntil;p.element.style.boxShadow=le?"0 0 8px 2px rgba(255,80,80,0.8)":"none"});const f=[];Ss.forEach((g,v)=>{i.state.players.get(v)||(_i?.removeChild(g.element),f.push(v))}),f.forEach(g=>Ss.delete(g))}const wu=1,Za=26,TM=4,Ja="#e53935",Ao=60,bo=63,Ru=52,AM=9995,bM=.5;let Hi=null;const Dn=[],Qa=new D,rr=new D,wM=new D(0,1,0);let Cu=0,ul=null;function RM(){return ul}function Pu(i,e,t,n,s){const r=Math.sin(-n),o=Math.cos(-n),a=Math.sin(s),l=Math.cos(s);Qa.set(r,o*a,-o*l),rr.crossVectors(Qa,wM),rr.lengthSq()<1e-10?rr.set(1,0,0):rr.normalize();const c=new D(i,e,t),h=c.dot(Qa),u=c.dot(rr);let d=Math.atan2(u,h);return d<0&&(d+=2*Math.PI),d*180/Math.PI}function CM(i){Hi=document.createElement("div"),Hi.id="hit-indicator",Hi.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:${AM};`,i.appendChild(Hi)}function PM(i,e,t){if(!Hi)return;for(;Dn.length>=TM;)Dn.shift().element.remove();const n=document.createElement("div");n.style.cssText=`
    position: absolute;
    left: 50%;
    top: 50%;
    width: ${Ru}vmin;
    height: ${Ru}vmin;
    transform-origin: center center;
  `;const s=document.createElement("div");s.style.cssText=`
    position: absolute;
    inset: 0;
    background: conic-gradient(
      from ${-Za/2}deg at 50% 50%,
      ${Ja} 0deg,
      ${Ja} ${Za}deg,
      transparent ${Za}deg
    );
    opacity: 0.55;
    mask: radial-gradient(
      circle,
      transparent 0%,
      transparent ${Ao}%,
      rgba(255,255,255,0.4) ${Ao}%,
      rgba(255,255,255,0.9) ${bo}%,
      transparent ${bo}%
    );
    -webkit-mask: radial-gradient(
      circle,
      transparent 0%,
      transparent ${Ao}%,
      rgba(255,255,255,0.4) ${Ao}%,
      rgba(255,255,255,0.9) ${bo}%,
      transparent ${bo}%
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
    border-bottom: ${r}px solid ${Ja};
    opacity: 0.9;
    pointer-events: none;
  `,n.appendChild(s),n.appendChild(a),Hi.appendChild(n),Dn.push({spawnTime:performance.now()/1e3,dirX:i,dirY:e,dirZ:t,element:n,wedge:s,arrow:a})}function IM(i,e,t,n){if(!Hi)return;const s=performance.now()/1e3;if(n&&Dn.length>0&&s-Cu>=bM){Cu=s;const r=Dn[Dn.length-1],o=Pu(r.dirX,r.dirY,r.dirZ,i,e);console.log(`[HitIndicator] dir=(${r.dirX.toFixed(2)},${r.dirY.toFixed(2)},${r.dirZ.toFixed(2)}) angle=${o.toFixed(1)}°`)}ul=null;for(let r=Dn.length-1;r>=0;r--){const o=Dn[r],a=s-o.spawnTime,l=Pu(o.dirX,o.dirY,o.dirZ,i,e);r===Dn.length-1&&(ul=l),o.element.style.transform=`translate(-50%, -50%) rotate(${l}deg)`;const c=Math.max(0,1-a/wu);o.wedge.style.opacity=String(.55*c),o.arrow.style.opacity=String(.9*c),a>=wu&&(o.element.remove(),Dn.splice(r,1))}}const ep=.2,LM=.58,tp=.23,DM=.72,np=.26,NM=.6,ip=.45,OM=.42,ra=.28,sp=.55,Iu=.1,UM=22,FM=8;let fn=null,Bo=null,zo=null,ko=null,Fi=null,Ho=null,Vo=null;const rp={remaining:0,duration:ep,maxAlpha:LM},op={remaining:0,duration:tp,maxAlpha:DM},ap={remaining:0,duration:np,maxAlpha:NM},dl={remaining:0,duration:ip,maxAlpha:OM},cp={remaining:0,duration:ra,maxAlpha:sp},lp={remaining:0,duration:ra,maxAlpha:sp};let _r=null,Go=null,Wo=!1;function BM(i){if(fn)return;fn=document.createElement("div"),fn.id="screen-damage-feedback",fn.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:9994;";const e="position:fixed;inset:0;pointer-events:none;background:transparent;opacity:0;transition:none;",t=document.createElement("div");t.style.cssText=`${e}background:
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
    background-repeat: repeat, repeat, no-repeat;`;const u="20px",d="19px",f="rgba(90,190,255,0.78)",g="rgba(255,90,90,0.8)",v=C=>`repeating-linear-gradient(0deg, transparent 0, transparent ${d}, ${C} ${d}, ${C} ${u})`,p=C=>`repeating-linear-gradient(90deg, transparent 0, transparent ${d}, ${C} ${d}, ${C} ${u})`,m=C=>`${v(C)}, ${p(C)}`,S=`${UM}vmin ${FM}vmin`,M="0 0, 0 0, 100% 0, 100% 0, 0 100%, 0 100%, 100% 100%, 100% 100%",T=[S,S,S,S,S,S,S,S].join(", "),I=document.createElement("div");I.style.cssText=`${e}
    background-image: ${m(f)}, ${m(f)}, ${m(f)}, ${m(f)};
    background-size: ${T};
    background-position: ${M};
    background-repeat: no-repeat;`;const P=document.createElement("div");P.style.cssText=`${e}
    background-image: ${m(g)}, ${m(g)}, ${m(g)}, ${m(g)};
    background-size: ${T};
    background-position: ${M};
    background-repeat: no-repeat;`,fn.appendChild(t),fn.appendChild(n),fn.appendChild(s),fn.appendChild(r),fn.appendChild(I),fn.appendChild(P),i.appendChild(fn),Bo=t,zo=n,ko=s,Fi=r,Ho=I,Vo=P,_r=null,Go=null,Wo=!1}function zM(i,e,t,n,s){if(!fn||!Bo||!zo||!ko||!Fi||!Ho||!Vo)return;const r=i>Iu?Iu:i<0?0:i;if(_r!==null&&Go!==null){const o=e-_r,a=n-Go;o<0?(e===0?HM():e>0&&kM(),WM()):e===0&&a<0&&(VM(),XM());const l=e>_r&&e<t;l&&!Wo?(GM(),Wo=!0):(!l||e===t)&&(Wo=!1)}if(_r=e,Go=n,ms(rp,Bo,r),ms(op,zo,r),ms(ap,ko,r),ms(dl,Fi,r),dl.remaining>0&&Fi){const o=parseFloat(Fi.style.opacity)||0,a=.88+.12*Math.sin(performance.now()*.004);Fi.style.opacity=Math.max(0,Math.min(1,o*a)).toFixed(3)}ms(cp,Ho,r),ms(lp,Vo,r),n<=0&&(Bo.style.opacity="0",zo.style.opacity="0",ko.style.opacity="0",Fi.style.opacity="0",Ho.style.opacity="0",Vo.style.opacity="0")}function ms(i,e,t){if(i.remaining<=0){e.style.opacity="0";return}if(i.remaining-=t,i.remaining<=0){e.style.opacity="0",i.remaining=0;return}const n=i.duration>0?i.remaining/i.duration:0,s=i.maxAlpha*n,r=s<0?0:s>i.maxAlpha?i.maxAlpha:s;e.style.opacity=r.toFixed(3)}function kM(i,e){rp.remaining=ep}function HM(i,e,t){op.remaining=tp}function VM(i,e){ap.remaining=np}function GM(){dl.remaining=ip}function WM(){cp.remaining=ra}function XM(){lp.remaining=ra}const hp=.28,$M=.4,_s="#a0a0a0",YM="#e53935",Lu=.1,Bi=40,Pt=Bi/2,Du=9,Yl=7,up=6,wo=2,jM=9996;let Vi=null,Gi=[],Xt=null;function qM(i){if(Vi)return;const e=document.createElement("div");e.id="crosshair-hit-feedback",e.style.cssText=`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${Bi}px;
    height: ${Bi}px;
    pointer-events: none;
    z-index: ${jM};
    opacity: 0;
    transition: none;
  `,e.innerHTML=`
    <svg width="${Bi}" height="${Bi}" viewBox="0 0 ${Bi} ${Bi}" xmlns="http://www.w3.org/2000/svg">
      <line id="hitmarker-nw" x1="${Pt}" y1="${Pt}" x2="${Pt}" y2="${Pt}" stroke="${_s}" stroke-width="${wo}" stroke-linecap="round" />
      <line id="hitmarker-ne" x1="${Pt}" y1="${Pt}" x2="${Pt}" y2="${Pt}" stroke="${_s}" stroke-width="${wo}" stroke-linecap="round" />
      <line id="hitmarker-se" x1="${Pt}" y1="${Pt}" x2="${Pt}" y2="${Pt}" stroke="${_s}" stroke-width="${wo}" stroke-linecap="round" />
      <line id="hitmarker-sw" x1="${Pt}" y1="${Pt}" x2="${Pt}" y2="${Pt}" stroke="${_s}" stroke-width="${wo}" stroke-linecap="round" />
    </svg>
  `;const t=e.querySelector("svg"),n=t?.querySelector("#hitmarker-nw")??null,s=t?.querySelector("#hitmarker-ne")??null,r=t?.querySelector("#hitmarker-se")??null,o=t?.querySelector("#hitmarker-sw")??null;!t||!n||!s||!r||!o||(Vi=e,Gi=[n,s,r,o],Xt={remaining:0,duration:hp,color:_s,active:!1},i.appendChild(e),jl(Yl))}function KM(){dp(hp,_s)}function ZM(){dp($M,YM)}function JM(i){if(!Vi||Gi.length===0||!Xt||!Xt.active)return;const e=i<0?0:i>Lu?Lu:i;if(Xt.remaining-=e,Xt.remaining<=0){Xt.active=!1,Xt.remaining=0,Vi.style.opacity="0";return}const t=Xt.duration>0?Xt.remaining/Xt.duration:0,n=t*t;Vi.style.opacity=n.toFixed(3);const s=1-t,r=Yl+up*(s<0?0:s);jl(r)}function dp(i,e){if(!Vi||Gi.length===0)return;Xt?(Xt.remaining=i,Xt.duration=i,Xt.color=e,Xt.active=!0):Xt={remaining:i,duration:i,color:e,active:!0};for(const n of Gi)n.style.stroke=e;Vi.style.opacity="1";const t=Yl+up;jl(t)}function jl(i){if(Gi.length===0)return;const e=[{x:-1,y:-1},{x:1,y:-1},{x:1,y:1},{x:-1,y:1}],t=Du,n=Du+i;for(let s=0;s<Gi.length&&s<e.length;s++){const r=Gi[s],o=e[s],a=Pt+o.x*t,l=Pt+o.y*t,c=Pt+o.x*n,h=Pt+o.y*n;r.setAttribute("x1",a.toFixed(2)),r.setAttribute("y1",l.toFixed(2)),r.setAttribute("x2",c.toFixed(2)),r.setAttribute("y2",h.toFixed(2))}}let Tn=null;function QM(i){Tn=document.createElement("div"),Tn.id="loading-screen",Tn.style.cssText=`
    position: fixed; inset: 0; z-index: 1000;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    background: #0a0a0a; color: #ddd; font-family: system-ui, sans-serif;
  `;const e=document.createElement("div");e.style.cssText=`
    width: 280px; height: 6px; background: #333; border-radius: 3px; overflow: hidden;
    margin-bottom: 24px;
  `;const t=document.createElement("div");t.id="loading-fill",t.style.cssText=`
    width: 0%; height: 100%; background: #4a9; border-radius: 3px;
    transition: width 0.3s ease;
  `,e.appendChild(t);const n=document.createElement("div");n.id="loading-text",n.style.cssText="font-size: 18px; font-weight: 500;",n.textContent="Loading game…",Tn.appendChild(e),Tn.appendChild(n),i.appendChild(Tn)}function gs(i,e){const t=document.getElementById("loading-text"),n=document.getElementById("loading-fill");t&&(t.textContent=i),n&&e!==void 0&&(n.style.width=`${Math.min(100,Math.max(0,e))}%`)}function eE(){Tn&&Tn.parentNode&&(Tn.parentNode.removeChild(Tn),Tn=null)}function tE(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ut;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Nu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);const g=Nu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Nu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Dt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const v=h.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function nE(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let S=0,M=a.length;S<M;S++){const T=a[S],I=i.attributes[T];l[T]=new I.constructor(new I.array.constructor(I.count*I.itemSize),I.itemSize,I.normalized);const P=i.morphAttributes[T];P&&(c[T]||(c[T]=[]),P.forEach((C,N)=>{const X=new C.array.constructor(C.count*C.itemSize);c[T][N]=new C.constructor(X,C.itemSize,C.normalized)}))}const f=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),p=f*v;for(let S=0;S<r;S++){const M=n?n.getX(S):S;let T="";for(let I=0,P=a.length;I<P;I++){const C=a[I],N=i.getAttribute(C),X=N.itemSize;for(let E=0;E<X;E++)T+=`${~~(N[u[E]](M)*v+p)},`}if(T in t)h.push(t[T]);else{for(let I=0,P=a.length;I<P;I++){const C=a[I],N=i.getAttribute(C),X=i.morphAttributes[C],E=N.itemSize,b=l[C],G=c[C];for(let V=0;V<E;V++){const Y=u[V],Q=d[V];if(b[Q](o,N[Y](M)),X)for(let W=0,Z=X.length;W<Z;W++)G[W][Q](o,X[W][Y](M))}}t[T]=o,h.push(o),o++}}const m=i.clone();for(const S in i.attributes){const M=l[S];if(m.setAttribute(S,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),S in c)for(let T=0;T<c[S].length;T++){const I=c[S][T];m.morphAttributes[S][T]=new I.constructor(I.array.slice(0,o*I.itemSize),I.itemSize,I.normalized)}}return m.setIndex(h),m}function Ou(i,e){if(e===gm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Qc||e===$d){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Qc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const iE={mesh:"placeholder",collision:"box",size:[2,.2,2]},sE={mesh:"placeholder",collision:"box",size:[4,.2,4]},rE={mesh:"placeholder",collision:"box",size:[2,6,.2],walkableTopOnly:!0},oE={mesh:"placeholder",collision:"box",size:[4,6,.2],walkableTopOnly:!0},aE={mesh:"placeholder",collision:"box",size:[4,1,.2],walkableTopOnly:!0},cE={mesh:"placeholder",collision:"box",size:[4,2,.2],walkableTopOnly:!0},lE={mesh:"placeholder",collision:"ramp",size:[4,1.2,2],walkableTopOnly:!0},hE={mesh:"placeholder",collision:"box",size:[2,2,2],walkableTopOnly:!0},uE={mesh:"placeholder",collision:"box",size:[1,1,.5],walkableTopOnly:!0},dE={mesh:"placeholder",collision:"box",size:[1,1.2,.3],walkableTopOnly:!0},fE={mesh:"placeholder",collision:"box",size:[1,.2,1]},pE={mesh:"placeholder",collision:"box",size:[4,.2,4]},mE={mesh:"placeholder",collision:"none",size:[.5,.5,.5]},gE={mesh:"placeholder",collision:"none",size:[2,2,2]},_E={mesh:"placeholder",collision:"none",size:[.4,.25,.15]},vE={mesh:"placeholder",collision:"none",size:[.4,.25,.15]},xE={mesh:"placeholder",collision:"none",size:[.4,.25,.15]},yE={mesh:"placeholder",collision:"none",size:[.4,.25,.15]},SE={mesh:"placeholder",collision:"none",size:[.4,.25,.15]},ME={floor_2x2:iE,floor_4x4:sE,wall_2x4:rE,wall_4x4:oE,wall_4x1:aE,wall_4x2:cE,ramp_1x4:lE,solid_block:hE,ledge_half_cover:uE,ledge_full_cover:dE,drop_floor:fE,ceiling:pE,spawn_point:mE,kill_volume:gE,wall_lamp_warm_yellow:_E,wall_lamp_orange:vE,wall_lamp_cold_white:xE,wall_lamp_blue:yE,wall_lamp_purple:SE},oa=ME,fp=.2;function pp(i,e,t){const n=i/2,s=t/2,r=Math.max(.01,e-fp),o=-r/2,a=r/2,l=new Float32Array([-n,o,-s,n,o,-s,n,o,s,-n,o,s,-n,o,-s,n,o,-s,n,a,s,-n,a,s]),c=new Uint16Array([0,1,2,0,2,3,4,6,5,4,7,6,0,5,1,0,4,5,1,6,2,1,5,6,3,2,6,3,6,7,0,3,7,0,7,4]),h=new Ut;return h.setAttribute("position",new Dt(l,3)),h.setIndex(new Dt(c,1)),h.computeVertexNormals(),h}function mp(i){return i.startsWith("floor")||i==="drop_floor"?4491519:i==="ceiling"?3368618:i.startsWith("wall")?14211292:i.startsWith("wall_lamp_warm_yellow")?16769953:i.startsWith("wall_lamp_orange")?16757355:i.startsWith("wall_lamp_cold_white")?14412031:i.startsWith("wall_lamp_blue")?6989823:i.startsWith("wall_lamp_purple")?11631871:i==="ramp_1x4"?8962144:i==="solid_block"?8947848:i==="ledge_half_cover"||i==="ledge_full_cover"?6982250:i==="spawn_point"?65416:i==="kill_volume"?16729156:16777215}function EE(i){const t=oa[i]?.size??[1,1,1],n=i.startsWith("wall_lamp_"),s=i==="ramp_1x4"?pp(t[0],t[1],t[2]):new Si(t[0],t[1],t[2]),r=mp(i),o=new yi({color:n?2236962:r,emissive:n?r:0,emissiveIntensity:n?1.3:0}),a=new xt(s,o);if(a.castShadow=!1,a.receiveShadow=!0,n){const l=new Rf(r,12,7,2);l.position.set(0,0,t[2]*.75),a.add(l)}return a}const Lr="ramp_1x4",Uu=oa[Lr]?.size?.[2]??2,TE=.05;function AE(i){const e=i.filter(s=>s.id===Lr);if(e.length===0)return[];const t=[],n=new Map;for(const s of e){const r=(s.rotation%360+360)%360;n.has(r)||n.set(r,[]),n.get(r).push(s)}for(const[,s]of n){const o=(s[0].rotation%360+360)%360,a=o===0||o===180,l=o===0||o===90;s.sort((d,f)=>{const[g,,v]=d.position,[p,,m]=f.position;if(a){const M=v-m;return l?M:-M}const S=g-p;return l?S:-S});const c=d=>a?`${d.position[0].toFixed(2)}`:`${d.position[2].toFixed(2)}`,h=d=>a?d.position[2]:d.position[0],u=new Map;for(const d of s){const f=c(d);u.has(f)||u.set(f,[]),u.get(f).push(d)}for(const d of u.values()){d.sort((g,v)=>l?h(g)-h(v):h(v)-h(g));let f=[d[0]];for(let g=1;g<d.length;g++){const v=d[g-1],p=d[g],m=h(v),S=h(p);Math.abs(S-m-(l?Uu:-Uu))<=TE?f.push(p):(f.length>0&&t.push(f),f=[p])}f.length>0&&t.push(f)}}return t}function bE(i){const e=AE(i),n=oa[Lr]?.size??[4,1.2,2],s=mp(Lr),r=[];for(const o of e){const a=[],l=new Ge,c=new D;for(const g of o){const v=pp(n[0],n[1],n[2]).clone(),[p,m,S]=g.position,M=fp/2;l.identity(),l.makeRotationY(Ns.degToRad(g.rotation)),l.setPosition(p,m+M,S);const T=v.getAttribute("position");for(let I=0;I<T.count;I++)c.fromBufferAttribute(T,I),c.applyMatrix4(l),T.setXYZ(I,c.x,c.y,c.z);T.needsUpdate=!0,v.deleteAttribute("normal"),a.push(v)}const h=tE(a,!1);for(const g of a)g.dispose();if(!h)continue;const u=nE(h,1e-4);h.dispose(),u.computeVertexNormals();const d=new yi({color:s}),f=new xt(u,d);f.castShadow=!1,f.receiveShadow=!0,r.push(f)}return r}function wE(i){const e=new $t,t=[];for(const r of i.prefabs){if(r.id===Lr){t.push(r);continue}const o=EE(r.id),[a,l,c]=r.position;o.position.set(a,l,c),o.rotation.y=Ns.degToRad(r.rotation),e.add(o)}for(const r of bE(t))e.add(r);const n=GS(i,oa),s=i.spawnPoints??[];return{group:e,staticWorld:n,spawnPoints:s}}async function RE(i){const e=await fetch(i);if(!e.ok)throw new Error(`Failed to load map JSON from ${i}: ${e.status} ${e.statusText}`);const t=await e.json();return wE(t)}let ec=0,tc=performance.now(),Fu=0,Bu=0;const CE=100;function PE(i){const e=document.createElement("div");e.id="debug-overlay",e.style.cssText=`
    display: none;
    position: fixed; top: 8px; right: 8px; color: #8f8; font-family: monospace; font-size: 12px;
    background: rgba(0,0,0,0.6); padding: 8px; border-radius: 4px;
  `,e.textContent="FPS: 0 | Vel: 0,0,0 | State: grounded",i.appendChild(e)}function IE(i,e,t,n,s,r,o,a){ec++;const l=performance.now();if(l-tc>=500&&(Bu=Math.round(ec*1e3/(l-tc)),ec=0,tc=l),l-Fu<CE)return;Fu=l;const c=document.getElementById("debug-overlay");if(c){if(c.style.display=s?"block":"none",!s)return;const h=t!==void 0?` | Sprint: ${t}`:"";let u="";n!==void 0&&(u=` | Net: ${n.connected?"ok":"off"} | In room: ${n.playerCount}`);const d=" | [B] Debug: ON",f=r!=null?` | Hit: ${r.toFixed(0)}°`:"",g=o!=null?` | Ping: ${o}ms`:"";let v="";if(a!=null){const p=a.playerY-a.groundY;v=` | Y: ${a.playerY.toFixed(3)} gY: ${a.groundY.toFixed(3)} Δ${p.toFixed(3)}${a.onRamp?" ramp":""}`}c.textContent=`FPS: ${Bu} | Vel: ${i.x.toFixed(1)}, ${i.y.toFixed(1)}, ${i.z.toFixed(1)} | State: ${e}${v}${h}${u}${g}${d}${f}`}}const zu=.3,LE=16776960,ku=.015,DE=65416,NE=16746496,nc=16;function Hu(i){const e=new $t,t=new sa(oS,nc,nc),n=new wn({color:i,transparent:!0,opacity:zu,depthWrite:!1}),s=new fu(t.clone()),r=new Us({color:i,transparent:!0,opacity:.85,depthWrite:!1}),o=Qo-al,a=(al+Qo)/2,l=new $t;l.position.set(0,Xl,0),l.add(new xt(t,n)),l.add(new $i(s,r)),e.add(l);const c=new zl($l,o,4,nc),h=new wn({color:i,transparent:!0,opacity:zu,depthWrite:!1}),u=new $t,d=new xt(c,h);u.add(d);const f=new fu(c.clone()),g=new Us({color:i,transparent:!0,opacity:.85,depthWrite:!1});return u.add(new $i(f,g)),u.position.set(0,a,0),e.add(u),e}const OE=Qo-al,UE=OE+2*$l;function Vu(i,e,t){const n=i.children[0],s=i.children[1];if(t){const{head:r,bodyCenter:o,spineTop:a,pelvis:l,feet:c}=t;i.position.set(0,0,0),n.position.set(r.x,r.y,r.z);const h=a.y+cS,u=h-c.y,d=(o.x+l.x)/2,f=(c.y+h)/2,g=(o.z+l.z)/2;s.position.set(d,f,g);const v=u+2*$l;s.scale.set(1,Math.max(.1,v)/UE,1),s.visible=!0}else{i.position.set(e.x,e.y,e.z),n.position.set(0,Xl,0);const r=Qo/2;s.position.set(0,r,0),s.scale.set(1,1,1),s.visible=!0}}class FE{scene;localGroup;remoteGroups=[];aimRayGroup;visible=!1;maxRemote=16;constructor(e){this.scene=e,this.localGroup=Hu(DE),this.localGroup.visible=!1,this.scene.add(this.localGroup),this.aimRayGroup=new $t;const t=new Fr(ku,ku,1,8),n=new wn({color:LE,transparent:!0,opacity:.9,depthTest:!0});this.aimRayGroup.add(new xt(t,n)),this.aimRayGroup.visible=!1,this.scene.add(this.aimRayGroup);for(let s=0;s<this.maxRemote;s++){const r=Hu(NE);r.visible=!1,this.scene.add(r),this.remoteGroups.push(r)}}setVisible(e,t=!1){this.visible=e,this.localGroup.visible=e&&!t,this.aimRayGroup.visible=!1,this.remoteGroups.forEach(n=>n.visible=!1)}update(e,t,n){if(this.visible){e&&Vu(this.localGroup,e,n),t.forEach((s,r)=>{const o=this.remoteGroups[r];o&&(o.visible=!0,Vu(o,{x:s.x,y:s.y,z:s.z},s.hitboxPositions))});for(let s=t.length;s<this.remoteGroups.length;s++)this.remoteGroups[s].visible=!1}}dispose(){this.scene.remove(this.aimRayGroup),this.aimRayGroup.traverse(e=>{e instanceof xt&&(e.geometry?.dispose(),e.material?.dispose())}),this.scene.remove(this.localGroup),this.localGroup.traverse(e=>{(e instanceof xt||e instanceof $i)&&(e.geometry?.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material?.dispose())}),this.remoteGroups.forEach(e=>{this.scene.remove(e),e.traverse(t=>{(t instanceof xt||t instanceof $i)&&(t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material?.dispose())})})}}var ic={},Gu={},Wu;function BE(){return Wu||(Wu=1,ArrayBuffer.isView||(ArrayBuffer.isView=i=>i!==null&&typeof i=="object"&&i.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window)),Gu}var $n={},sc={},Xu;function ql(){return Xu||(Xu=1,(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.ServerError=i.CloseCode=void 0,(function(t){t[t.CONSENTED=4e3]="CONSENTED",t[t.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(i.CloseCode||(i.CloseCode={}));class e extends Error{constructor(n,s){super(s),this.name="ServerError",this.code=n}}i.ServerError=e})(sc)),sc}var Sn={},Pi={},$u;function zE(){if($u)return Pi;$u=1,Object.defineProperty(Pi,"__esModule",{value:!0}),Pi.decode=Pi.encode=void 0;function i(c,h){if(this._offset=h,c instanceof ArrayBuffer)this._buffer=c,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(c))this._buffer=c.buffer,this._view=new DataView(this._buffer,c.byteOffset,c.byteLength);else throw new Error("Invalid argument")}function e(c,h,u){for(var d="",f=0,g=h,v=h+u;g<v;g++){var p=c.getUint8(g);if((p&128)===0){d+=String.fromCharCode(p);continue}if((p&224)===192){d+=String.fromCharCode((p&31)<<6|c.getUint8(++g)&63);continue}if((p&240)===224){d+=String.fromCharCode((p&15)<<12|(c.getUint8(++g)&63)<<6|(c.getUint8(++g)&63)<<0);continue}if((p&248)===240){f=(p&7)<<18|(c.getUint8(++g)&63)<<12|(c.getUint8(++g)&63)<<6|(c.getUint8(++g)&63)<<0,f>=65536?(f-=65536,d+=String.fromCharCode((f>>>10)+55296,(f&1023)+56320)):d+=String.fromCharCode(f);continue}throw new Error("Invalid byte "+p.toString(16))}return d}i.prototype._array=function(c){for(var h=new Array(c),u=0;u<c;u++)h[u]=this._parse();return h},i.prototype._map=function(c){for(var h="",u={},d=0;d<c;d++)h=this._parse(),u[h]=this._parse();return u},i.prototype._str=function(c){var h=e(this._view,this._offset,c);return this._offset+=c,h},i.prototype._bin=function(c){var h=this._buffer.slice(this._offset,this._offset+c);return this._offset+=c,h},i.prototype._parse=function(){var c=this._view.getUint8(this._offset++),h,u=0,d=0,f=0,g=0;if(c<192)return c<128?c:c<144?this._map(c&15):c<160?this._array(c&15):this._str(c&31);if(c>223)return(255-c+1)*-1;switch(c){case 192:return null;case 194:return!1;case 195:return!0;case 196:return u=this._view.getUint8(this._offset),this._offset+=1,this._bin(u);case 197:return u=this._view.getUint16(this._offset),this._offset+=2,this._bin(u);case 198:return u=this._view.getUint32(this._offset),this._offset+=4,this._bin(u);case 199:if(u=this._view.getUint8(this._offset),d=this._view.getInt8(this._offset+1),this._offset+=2,d===-1){var v=this._view.getUint32(this._offset);return f=this._view.getInt32(this._offset+4),g=this._view.getUint32(this._offset+8),this._offset+=12,new Date((f*4294967296+g)*1e3+v/1e6)}return[d,this._bin(u)];case 200:return u=this._view.getUint16(this._offset),d=this._view.getInt8(this._offset+2),this._offset+=3,[d,this._bin(u)];case 201:return u=this._view.getUint32(this._offset),d=this._view.getInt8(this._offset+4),this._offset+=5,[d,this._bin(u)];case 202:return h=this._view.getFloat32(this._offset),this._offset+=4,h;case 203:return h=this._view.getFloat64(this._offset),this._offset+=8,h;case 204:return h=this._view.getUint8(this._offset),this._offset+=1,h;case 205:return h=this._view.getUint16(this._offset),this._offset+=2,h;case 206:return h=this._view.getUint32(this._offset),this._offset+=4,h;case 207:return f=this._view.getUint32(this._offset)*Math.pow(2,32),g=this._view.getUint32(this._offset+4),this._offset+=8,f+g;case 208:return h=this._view.getInt8(this._offset),this._offset+=1,h;case 209:return h=this._view.getInt16(this._offset),this._offset+=2,h;case 210:return h=this._view.getInt32(this._offset),this._offset+=4,h;case 211:return f=this._view.getInt32(this._offset)*Math.pow(2,32),g=this._view.getUint32(this._offset+4),this._offset+=8,f+g;case 212:if(d=this._view.getInt8(this._offset),this._offset+=1,d===0){this._offset+=1;return}return[d,this._bin(1)];case 213:return d=this._view.getInt8(this._offset),this._offset+=1,[d,this._bin(2)];case 214:return d=this._view.getInt8(this._offset),this._offset+=1,d===-1?(h=this._view.getUint32(this._offset),this._offset+=4,new Date(h*1e3)):[d,this._bin(4)];case 215:if(d=this._view.getInt8(this._offset),this._offset+=1,d===0)return f=this._view.getInt32(this._offset)*Math.pow(2,32),g=this._view.getUint32(this._offset+4),this._offset+=8,new Date(f+g);if(d===-1){f=this._view.getUint32(this._offset),g=this._view.getUint32(this._offset+4),this._offset+=8;var p=(f&3)*4294967296+g;return new Date(p*1e3+(f>>>2)/1e6)}return[d,this._bin(8)];case 216:return d=this._view.getInt8(this._offset),this._offset+=1,[d,this._bin(16)];case 217:return u=this._view.getUint8(this._offset),this._offset+=1,this._str(u);case 218:return u=this._view.getUint16(this._offset),this._offset+=2,this._str(u);case 219:return u=this._view.getUint32(this._offset),this._offset+=4,this._str(u);case 220:return u=this._view.getUint16(this._offset),this._offset+=2,this._array(u);case 221:return u=this._view.getUint32(this._offset),this._offset+=4,this._array(u);case 222:return u=this._view.getUint16(this._offset),this._offset+=2,this._map(u);case 223:return u=this._view.getUint32(this._offset),this._offset+=4,this._map(u)}throw new Error("Could not parse")};function t(c,h=0){var u=new i(c,h),d=u._parse();if(u._offset!==c.byteLength)throw new Error(c.byteLength-u._offset+" trailing bytes");return d}Pi.decode=t;var n=4294967296-1,s=17179869184-1;function r(c,h,u){for(var d=0,f=0,g=u.length;f<g;f++)d=u.charCodeAt(f),d<128?c.setUint8(h++,d):d<2048?(c.setUint8(h++,192|d>>6),c.setUint8(h++,128|d&63)):d<55296||d>=57344?(c.setUint8(h++,224|d>>12),c.setUint8(h++,128|d>>6&63),c.setUint8(h++,128|d&63)):(f++,d=65536+((d&1023)<<10|u.charCodeAt(f)&1023),c.setUint8(h++,240|d>>18),c.setUint8(h++,128|d>>12&63),c.setUint8(h++,128|d>>6&63),c.setUint8(h++,128|d&63))}function o(c){for(var h=0,u=0,d=0,f=c.length;d<f;d++)h=c.charCodeAt(d),h<128?u+=1:h<2048?u+=2:h<55296||h>=57344?u+=3:(d++,u+=4);return u}function a(c,h,u){var d=typeof u,f=0,g=0,v=0,p=0,m=0,S=0;if(d==="string"){if(m=o(u),m<32)c.push(m|160),S=1;else if(m<256)c.push(217,m),S=2;else if(m<65536)c.push(218,m>>8,m),S=3;else if(m<4294967296)c.push(219,m>>24,m>>16,m>>8,m),S=5;else throw new Error("String too long");return h.push({_str:u,_length:m,_offset:c.length}),S+m}if(d==="number")return Math.floor(u)!==u||!isFinite(u)?(c.push(203),h.push({_float:u,_length:8,_offset:c.length}),9):u>=0?u<128?(c.push(u),1):u<256?(c.push(204,u),2):u<65536?(c.push(205,u>>8,u),3):u<4294967296?(c.push(206,u>>24,u>>16,u>>8,u),5):(v=u/Math.pow(2,32)>>0,p=u>>>0,c.push(207,v>>24,v>>16,v>>8,v,p>>24,p>>16,p>>8,p),9):u>=-32?(c.push(u),1):u>=-128?(c.push(208,u),2):u>=-32768?(c.push(209,u>>8,u),3):u>=-2147483648?(c.push(210,u>>24,u>>16,u>>8,u),5):(v=Math.floor(u/Math.pow(2,32)),p=u>>>0,c.push(211,v>>24,v>>16,v>>8,v,p>>24,p>>16,p>>8,p),9);if(d==="object"){if(u===null)return c.push(192),1;if(Array.isArray(u)){if(m=u.length,m<16)c.push(m|144),S=1;else if(m<65536)c.push(220,m>>8,m),S=3;else if(m<4294967296)c.push(221,m>>24,m>>16,m>>8,m),S=5;else throw new Error("Array too large");for(f=0;f<m;f++)S+=a(c,h,u[f]);return S}if(u instanceof Date){var M=u.getTime(),T=Math.floor(M/1e3),I=(M-T*1e3)*1e6;return T>=0&&I>=0&&T<=s?I===0&&T<=n?(c.push(214,255,T>>24,T>>16,T>>8,T),6):(v=T/4294967296,p=T&4294967295,c.push(215,255,I>>22,I>>14,I>>6,v,p>>24,p>>16,p>>8,p),10):(v=Math.floor(T/4294967296),p=T>>>0,c.push(199,12,255,I>>24,I>>16,I>>8,I,v>>24,v>>16,v>>8,v,p>>24,p>>16,p>>8,p),15)}if(u instanceof ArrayBuffer){if(m=u.byteLength,m<256)c.push(196,m),S=2;else if(m<65536)c.push(197,m>>8,m),S=3;else if(m<4294967296)c.push(198,m>>24,m>>16,m>>8,m),S=5;else throw new Error("Buffer too large");return h.push({_bin:u,_length:m,_offset:c.length}),S+m}if(typeof u.toJSON=="function")return a(c,h,u.toJSON());var P=[],C="",N=Object.keys(u);for(f=0,g=N.length;f<g;f++)C=N[f],u[C]!==void 0&&typeof u[C]!="function"&&P.push(C);if(m=P.length,m<16)c.push(m|128),S=1;else if(m<65536)c.push(222,m>>8,m),S=3;else if(m<4294967296)c.push(223,m>>24,m>>16,m>>8,m),S=5;else throw new Error("Object too large");for(f=0;f<m;f++)C=P[f],S+=a(c,h,C),S+=a(c,h,u[C]);return S}if(d==="boolean")return c.push(u?195:194),1;if(d==="undefined")return c.push(192),1;if(typeof u.toJSON=="function")return a(c,h,u.toJSON());throw new Error("Could not encode")}function l(c){var h=[],u=[],d=a(h,u,c),f=new ArrayBuffer(d),g=new DataView(f),v=0,p=0,m=-1;u.length>0&&(m=u[0]._offset);for(var S,M=0,T=0,I=0,P=h.length;I<P;I++)if(g.setUint8(p+I,h[I]),I+1===m){if(S=u[v],M=S._length,T=p+m,S._bin)for(var C=new Uint8Array(S._bin),N=0;N<M;N++)g.setUint8(T+N,C[N]);else S._str?r(g,T,S._str):S._float!==void 0&&g.setFloat64(T,S._float);v++,p+=M,u[v]&&(m=u[v]._offset)}return f}return Pi.encode=l,Pi}var or={},Ii={},rc,Yu;function kE(){return Yu||(Yu=1,rc=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),rc}var ju;function HE(){if(ju)return Ii;ju=1;var i=Ii&&Ii.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ii,"__esModule",{value:!0}),Ii.WebSocketTransport=void 0;const e=i(kE()),t=globalThis.WebSocket||e.default;let n=class{constructor(r){this.events=r}send(r){r instanceof ArrayBuffer?this.ws.send(r):Array.isArray(r)&&this.ws.send(new Uint8Array(r).buffer)}connect(r,o){try{this.ws=new t(r,{headers:o,protocols:this.protocols})}catch{this.ws=new t(r,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(r,o){this.ws.close(r,o)}get isOpen(){return this.ws.readyState===t.OPEN}};return Ii.WebSocketTransport=n,Ii}var qu;function VE(){if(qu)return or;qu=1,Object.defineProperty(or,"__esModule",{value:!0}),or.Connection=void 0;const i=HE();let e=class{constructor(){this.events={},this.transport=new i.WebSocketTransport(this.events)}send(n){this.transport.send(n)}connect(n,s){this.transport.connect(n,s)}close(n,s){this.transport.close(n,s)}get isOpen(){return this.transport.isOpen}};return or.Connection=e,or}var oc={},Ku;function gp(){return Ku||(Ku=1,(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.utf8Length=i.utf8Read=i.ErrorCode=i.Protocol=void 0,(function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(i.Protocol||(i.Protocol={})),(function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(i.ErrorCode||(i.ErrorCode={}));function e(n,s){const r=n[s++];for(var o="",a=0,l=s,c=s+r;l<c;l++){var h=n[l];if((h&128)===0){o+=String.fromCharCode(h);continue}if((h&224)===192){o+=String.fromCharCode((h&31)<<6|n[++l]&63);continue}if((h&240)===224){o+=String.fromCharCode((h&15)<<12|(n[++l]&63)<<6|(n[++l]&63)<<0);continue}if((h&248)===240){a=(h&7)<<18|(n[++l]&63)<<12|(n[++l]&63)<<6|(n[++l]&63)<<0,a>=65536?(a-=65536,o+=String.fromCharCode((a>>>10)+55296,(a&1023)+56320)):o+=String.fromCharCode(a);continue}throw new Error("Invalid byte "+h.toString(16))}return o}i.utf8Read=e;function t(n=""){let s=0,r=0;for(let o=0,a=n.length;o<a;o++)s=n.charCodeAt(o),s<128?r+=1:s<2048?r+=2:s<55296||s>=57344?r+=3:(o++,r+=4);return r+1}i.utf8Length=t})(oc)),oc}var Li={},Zu;function _p(){if(Zu)return Li;Zu=1,Object.defineProperty(Li,"__esModule",{value:!0}),Li.getSerializer=Li.registerSerializer=void 0;const i={};function e(n,s){i[n]=s}Li.registerSerializer=e;function t(n){const s=i[n];if(!s)throw new Error("missing serializer: "+n);return s}return Li.getSerializer=t,Li}var ar={},Ju;function vp(){if(Ju)return ar;Ju=1,Object.defineProperty(ar,"__esModule",{value:!0}),ar.createNanoEvents=void 0;const i=()=>({emit(e,...t){let n=this.events[e]||[];for(let s=0,r=n.length;s<r;s++)n[s](...t)},events:{},on(e,t){var n;return!((n=this.events[e])===null||n===void 0)&&n.push(t)||(this.events[e]=[t]),()=>{var s;this.events[e]=(s=this.events[e])===null||s===void 0?void 0:s.filter(r=>t!==r)}}});return ar.createNanoEvents=i,ar}var Di={},Qu;function GE(){if(Qu)return Di;Qu=1,Object.defineProperty(Di,"__esModule",{value:!0}),Di.createSignal=Di.EventEmitter=void 0;class i{constructor(){this.handlers=[]}register(n,s=!1){return this.handlers.push(n),this}invoke(...n){this.handlers.forEach(s=>s.apply(this,n))}invokeAsync(...n){return Promise.all(this.handlers.map(s=>s.apply(this,n)))}remove(n){const s=this.handlers.indexOf(n);this.handlers[s]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}Di.EventEmitter=i;function e(){const t=new i;function n(s){return t.register(s,this===null)}return n.once=s=>{const r=function(...o){s.apply(this,o),t.remove(r)};t.register(r)},n.remove=s=>t.remove(s),n.invoke=(...s)=>t.invoke(...s),n.invokeAsync=(...s)=>t.invokeAsync(...s),n.clear=()=>t.clear(),n}return Di.createSignal=e,Di}var ed;function yp(){if(ed)return Sn;ed=1;var i=Sn&&Sn.__createBinding||(Object.create?(function(d,f,g,v){v===void 0&&(v=g);var p=Object.getOwnPropertyDescriptor(f,g);(!p||("get"in p?!f.__esModule:p.writable||p.configurable))&&(p={enumerable:!0,get:function(){return f[g]}}),Object.defineProperty(d,v,p)}):(function(d,f,g,v){v===void 0&&(v=g),d[v]=f[g]})),e=Sn&&Sn.__setModuleDefault||(Object.create?(function(d,f){Object.defineProperty(d,"default",{enumerable:!0,value:f})}):function(d,f){d.default=f}),t=Sn&&Sn.__importStar||function(d){if(d&&d.__esModule)return d;var f={};if(d!=null)for(var g in d)g!=="default"&&Object.prototype.hasOwnProperty.call(d,g)&&i(f,d,g);return e(f,d),f};Object.defineProperty(Sn,"__esModule",{value:!0}),Sn.Room=void 0;const n=t(zE()),s=VE(),r=gp(),o=_p(),a=vp(),l=GE(),c=Wl(),h=ql();let u=class xp{constructor(f,g){this.onStateChange=(0,l.createSignal)(),this.onError=(0,l.createSignal)(),this.onLeave=(0,l.createSignal)(),this.onJoin=(0,l.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,a.createNanoEvents)(),this.roomId=null,this.name=f,g&&(this.serializer=new((0,o.getSerializer)("schema")),this.rootSchema=g,this.serializer.state=new g),this.onError((v,p)=>{var m;return(m=console.warn)===null||m===void 0?void 0:m.call(console,`colyseus.js - onError => (${v}) ${p}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(f,g,v=this,p){const m=new s.Connection;v.connection=m,m.events.onmessage=xp.prototype.onMessageCallback.bind(v),m.events.onclose=function(S){var M;if(!v.hasJoined){(M=console.warn)===null||M===void 0||M.call(console,`Room connection was closed unexpectedly (${S.code}): ${S.reason}`),v.onError.invoke(S.code,S.reason);return}S.code===h.CloseCode.DEVMODE_RESTART&&g?g():(v.onLeave.invoke(S.code,S.reason),v.destroy())},m.events.onerror=function(S){var M;(M=console.warn)===null||M===void 0||M.call(console,`Room, onError (${S.code}): ${S.reason}`),v.onError.invoke(S.code,S.reason)},m.connect(f,p)}leave(f=!0){return new Promise(g=>{this.onLeave(v=>g(v)),this.connection?f?this.connection.send([r.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(h.CloseCode.CONSENTED)})}onMessage(f,g){return this.onMessageHandlers.on(this.getMessageHandlerKey(f),g)}send(f,g){const v=[r.Protocol.ROOM_DATA];typeof f=="string"?c.encode.string(v,f):c.encode.number(v,f);let p;if(g!==void 0){const m=n.encode(g);p=new Uint8Array(v.length+m.byteLength),p.set(new Uint8Array(v),0),p.set(new Uint8Array(m),v.length)}else p=new Uint8Array(v);this.connection.send(p.buffer)}sendBytes(f,g){const v=[r.Protocol.ROOM_DATA_BYTES];typeof f=="string"?c.encode.string(v,f):c.encode.number(v,f);let p;p=new Uint8Array(v.length+(g.byteLength||g.length)),p.set(new Uint8Array(v),0),p.set(new Uint8Array(g),v.length),this.connection.send(p.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(f){const g=Array.from(new Uint8Array(f.data)),v=g[0];if(v===r.Protocol.JOIN_ROOM){let p=1;const m=(0,r.utf8Read)(g,p);if(p+=(0,r.utf8Length)(m),this.serializerId=(0,r.utf8Read)(g,p),p+=(0,r.utf8Length)(this.serializerId),!this.serializer){const S=(0,o.getSerializer)(this.serializerId);this.serializer=new S}g.length>p&&this.serializer.handshake&&this.serializer.handshake(g,{offset:p}),this.reconnectionToken=`${this.roomId}:${m}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([r.Protocol.JOIN_ROOM])}else if(v===r.Protocol.ERROR){const p={offset:1},m=c.decode.number(g,p),S=c.decode.string(g,p);this.onError.invoke(m,S)}else if(v===r.Protocol.LEAVE_ROOM)this.leave();else if(v===r.Protocol.ROOM_DATA_SCHEMA){const p={offset:1},S=this.serializer.getState().constructor._context.get(c.decode.number(g,p)),M=new S;M.decode(g,p),this.dispatchMessage(S,M)}else if(v===r.Protocol.ROOM_STATE)g.shift(),this.setState(g);else if(v===r.Protocol.ROOM_STATE_PATCH)g.shift(),this.patch(g);else if(v===r.Protocol.ROOM_DATA){const p={offset:1},m=c.decode.stringCheck(g,p)?c.decode.string(g,p):c.decode.number(g,p),S=g.length>p.offset?n.decode(f.data,p.offset):void 0;this.dispatchMessage(m,S)}else if(v===r.Protocol.ROOM_DATA_BYTES){const p={offset:1},m=c.decode.stringCheck(g,p)?c.decode.string(g,p):c.decode.number(g,p);this.dispatchMessage(m,new Uint8Array(g.slice(p.offset)))}}setState(f){this.serializer.setState(f),this.onStateChange.invoke(this.serializer.getState())}patch(f){this.serializer.patch(f),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(f,g){var v;const p=this.getMessageHandlerKey(f);this.onMessageHandlers.events[p]?this.onMessageHandlers.emit(p,g):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",f,g):(v=console.warn)===null||v===void 0||v.call(console,`colyseus.js: onMessage() not registered for type '${f}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(f){switch(typeof f){case"function":return`$${f._typeid}`;case"string":return f;case"number":return`i${f}`;default:throw new Error("invalid message type.")}}};return Sn.Room=u,Sn}var Mn={};function td(i,e){e.headers=i.headers||{},e.statusMessage=i.statusText,e.statusCode=i.status,e.data=i.response}function Pn(i,e,t){return new Promise(function(n,s){t=t||{};var r=new XMLHttpRequest,o,a,l,c=t.body,h=t.headers||{};t.timeout&&(r.timeout=t.timeout),r.ontimeout=r.onerror=function(u){u.timeout=u.type=="timeout",s(u)},r.open(i,e.href||e),r.onload=function(){for(l=r.getAllResponseHeaders().trim().split(/[\r\n]+/),td(r,r);a=l.shift();)a=a.split(": "),r.headers[a.shift().toLowerCase()]=a.join(": ");if(a=r.headers["content-type"],a&&~a.indexOf("application/json"))try{r.data=JSON.parse(r.data,t.reviver)}catch(u){return td(r,u),s(u)}(r.status>=400?s:n)(r)},typeof FormData<"u"&&c instanceof FormData||c&&typeof c=="object"&&(h["content-type"]="application/json",c=JSON.stringify(c)),r.withCredentials=!!t.withCredentials;for(o in h)r.setRequestHeader(o,h[o]);r.send(c)})}var WE=Pn.bind(Pn,"GET"),XE=Pn.bind(Pn,"POST"),$E=Pn.bind(Pn,"PATCH"),YE=Pn.bind(Pn,"DELETE"),jE=Pn.bind(Pn,"PUT");const qE=Object.freeze(Object.defineProperty({__proto__:null,del:YE,get:WE,patch:$E,post:XE,put:jE,send:Pn},Symbol.toStringTag,{value:"Module"})),KE=nS(qE);var nd;function ZE(){if(nd)return Mn;nd=1;var i=Mn&&Mn.__createBinding||(Object.create?(function(o,a,l,c){c===void 0&&(c=l);var h=Object.getOwnPropertyDescriptor(a,l);(!h||("get"in h?!a.__esModule:h.writable||h.configurable))&&(h={enumerable:!0,get:function(){return a[l]}}),Object.defineProperty(o,c,h)}):(function(o,a,l,c){c===void 0&&(c=l),o[c]=a[l]})),e=Mn&&Mn.__setModuleDefault||(Object.create?(function(o,a){Object.defineProperty(o,"default",{enumerable:!0,value:a})}):function(o,a){o.default=a}),t=Mn&&Mn.__importStar||function(o){if(o&&o.__esModule)return o;var a={};if(o!=null)for(var l in o)l!=="default"&&Object.prototype.hasOwnProperty.call(o,l)&&i(a,o,l);return e(a,o),a};Object.defineProperty(Mn,"__esModule",{value:!0}),Mn.HTTP=void 0;const n=ql(),s=t(KE);let r=class{constructor(a,l={}){this.client=a,this.headers=l}get(a,l={}){return this.request("get",a,l)}post(a,l={}){return this.request("post",a,l)}del(a,l={}){return this.request("del",a,l)}put(a,l={}){return this.request("put",a,l)}request(a,l,c={}){return s[a](this.client.getHttpEndpoint(l),this.getOptions(c)).catch(h=>{var u;const d=h.statusCode,f=((u=h.data)===null||u===void 0?void 0:u.error)||h.statusMessage||h.message;throw!d&&!f?h:new n.ServerError(d,f)})}getOptions(a){return a.headers=Object.assign({},this.headers,a.headers),this.authToken&&(a.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(a.withCredentials=!0),a}};return Mn.HTTP=r,Mn}var En={},Yn={},id;function JE(){if(id)return Yn;id=1,Object.defineProperty(Yn,"__esModule",{value:!0}),Yn.getItem=Yn.removeItem=Yn.setItem=void 0;let i;function e(){if(!i)try{i=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return i||(i={cache:{},setItem:function(r,o){this.cache[r]=o},getItem:function(r){this.cache[r]},removeItem:function(r){delete this.cache[r]}}),i}function t(r,o){e().setItem(r,o)}Yn.setItem=t;function n(r){e().removeItem(r)}Yn.removeItem=n;function s(r,o){const a=e().getItem(r);typeof Promise>"u"||!(a instanceof Promise)?o(a):a.then(l=>o(l))}return Yn.getItem=s,Yn}var sd;function Sp(){if(sd)return En;sd=1;var i=En&&En.__awaiter||function(h,u,d,f){function g(v){return v instanceof d?v:new d(function(p){p(v)})}return new(d||(d=Promise))(function(v,p){function m(T){try{M(f.next(T))}catch(I){p(I)}}function S(T){try{M(f.throw(T))}catch(I){p(I)}}function M(T){T.done?v(T.value):g(T.value).then(m,S)}M((f=f.apply(h,u||[])).next())})},e=En&&En.__classPrivateFieldGet||function(h,u,d,f){if(d==="a"&&!f)throw new TypeError("Private accessor was defined without a getter");if(typeof u=="function"?h!==u||!f:!u.has(h))throw new TypeError("Cannot read private member from an object whose class did not declare it");return d==="m"?f:d==="a"?f.call(h):f?f.value:u.get(h)},t=En&&En.__classPrivateFieldSet||function(h,u,d,f,g){if(f==="m")throw new TypeError("Private method is not writable");if(f==="a"&&!g)throw new TypeError("Private accessor was defined without a setter");if(typeof u=="function"?h!==u||!g:!u.has(h))throw new TypeError("Cannot write private member to an object whose class did not declare it");return f==="a"?g.call(h,d):g?g.value=d:u.set(h,d),d},n,s,r,o;Object.defineProperty(En,"__esModule",{value:!0}),En.Auth=void 0;const a=JE(),l=vp();let c=class{constructor(u){this.http=u,this.settings={path:"/auth",key:"colyseus-auth-token"},n.set(this,!1),s.set(this,void 0),r.set(this,void 0),o.set(this,(0,l.createNanoEvents)()),(0,a.getItem)(this.settings.key,d=>this.token=d)}set token(u){this.http.authToken=u}get token(){return this.http.authToken}onChange(u){const d=e(this,o,"f").on("change",u);return e(this,n,"f")||t(this,s,new Promise((f,g)=>{this.getUserData().then(v=>{this.emitChange(Object.assign(Object.assign({},v),{token:this.token}))}).catch(v=>{this.emitChange({user:null,token:void 0})}).finally(()=>{f()})}),"f"),t(this,n,!0,"f"),d}getUserData(){return i(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(u,d,f){return i(this,void 0,void 0,function*(){const g=(yield this.http.post(`${this.settings.path}/register`,{body:{email:u,password:d,options:f}})).data;return this.emitChange(g),g})}signInWithEmailAndPassword(u,d){return i(this,void 0,void 0,function*(){const f=(yield this.http.post(`${this.settings.path}/login`,{body:{email:u,password:d}})).data;return this.emitChange(f),f})}signInAnonymously(u){return i(this,void 0,void 0,function*(){const d=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:u}})).data;return this.emitChange(d),d})}sendPasswordResetEmail(u){return i(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:u}})).data})}signInWithProvider(u,d={}){return i(this,void 0,void 0,function*(){return new Promise((f,g)=>{const v=d.width||480,p=d.height||768,m=this.token?`?token=${this.token}`:"",S=`Login with ${u[0].toUpperCase()+u.substring(1)}`,M=this.http.client.getHttpEndpoint(`${d.prefix||`${this.settings.path}/provider`}/${u}${m}`),T=screen.width/2-v/2,I=screen.height/2-p/2;t(this,r,window.open(M,S,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+v+", height="+p+", top="+I+", left="+T),"f");const P=N=>{N.data.user===void 0&&N.data.token===void 0||(clearInterval(C),e(this,r,"f").close(),t(this,r,void 0,"f"),window.removeEventListener("message",P),N.data.error!==void 0?g(N.data.error):(f(N.data),this.emitChange(N.data)))},C=setInterval(()=>{(!e(this,r,"f")||e(this,r,"f").closed)&&(t(this,r,void 0,"f"),g("cancelled"),window.removeEventListener("message",P))},200);window.addEventListener("message",P)})})}signOut(){return i(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(u){u.token!==void 0&&(this.token=u.token,u.token===null?(0,a.removeItem)(this.settings.key):(0,a.setItem)(this.settings.key,u.token)),e(this,o,"f").emit("change",u)}};return En.Auth=c,n=new WeakMap,s=new WeakMap,r=new WeakMap,o=new WeakMap,En}var cr={},rd;function QE(){if(rd)return cr;rd=1,Object.defineProperty(cr,"__esModule",{value:!0}),cr.discordURLBuilder=void 0;function i(e){var t;const n=((t=window?.location)===null||t===void 0?void 0:t.hostname)||"localhost",s=e.hostname.split("."),r=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&s.length>2?`/${s[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${n}${r}${e.pathname}${e.search}`:`${e.protocol}//${n}/.proxy/colyseus${r}${e.pathname}${e.search}`}return cr.discordURLBuilder=i,cr}var od;function eT(){if(od)return $n;od=1;var i=$n&&$n.__awaiter||function(h,u,d,f){function g(v){return v instanceof d?v:new d(function(p){p(v)})}return new(d||(d=Promise))(function(v,p){function m(T){try{M(f.next(T))}catch(I){p(I)}}function S(T){try{M(f.throw(T))}catch(I){p(I)}}function M(T){T.done?v(T.value):g(T.value).then(m,S)}M((f=f.apply(h,u||[])).next())})},e;Object.defineProperty($n,"__esModule",{value:!0}),$n.Client=$n.MatchMakeError=void 0;const t=ql(),n=yp(),s=ZE(),r=Sp(),o=QE();class a extends Error{constructor(u,d){super(u),this.code=d,Object.setPrototypeOf(this,a.prototype)}}$n.MatchMakeError=a;const l=typeof window<"u"&&typeof((e=window?.location)===null||e===void 0?void 0:e.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let c=class{constructor(u=l,d){var f,g;if(typeof u=="string"){const v=u.startsWith("/")?new URL(u,l):new URL(u),p=v.protocol==="https:"||v.protocol==="wss:",m=Number(v.port||(p?443:80));this.settings={hostname:v.hostname,pathname:v.pathname,port:m,secure:p}}else u.port===void 0&&(u.port=u.secure?443:80),u.pathname===void 0&&(u.pathname=""),this.settings=u;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new s.HTTP(this,d?.headers||{}),this.auth=new r.Auth(this.http),this.urlBuilder=d?.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((g=(f=window?.location)===null||f===void 0?void 0:f.hostname)===null||g===void 0)&&g.includes("discordsays.com"))&&(this.urlBuilder=o.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(u,d={},f){return i(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",u,d,f)})}create(u,d={},f){return i(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",u,d,f)})}join(u,d={},f){return i(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",u,d,f)})}joinById(u,d={},f){return i(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",u,d,f)})}reconnect(u,d){return i(this,void 0,void 0,function*(){if(typeof u=="string"&&typeof d=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[f,g]=u.split(":");if(!f||!g)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",f,{reconnectionToken:g},d)})}getAvailableRooms(u=""){return i(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${u}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(u,d,f){return i(this,void 0,void 0,function*(){const g=this.createRoom(u.room.name,d);g.roomId=u.room.roomId,g.sessionId=u.sessionId;const v={sessionId:g.sessionId};u.reconnectionToken&&(v.reconnectionToken=u.reconnectionToken);const p=f||g;return g.connect(this.buildEndpoint(u.room,v),u.devMode&&(()=>i(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${g.roomId}'...`);let m=0,S=8;const M=()=>i(this,void 0,void 0,function*(){m++;try{yield this.consumeSeatReservation(u,d,p),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${g.roomId}'`)}catch{m<S?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${m} out of ${S})`),setTimeout(M,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(M,2e3)})),p,this.http.headers),new Promise((m,S)=>{const M=(T,I)=>S(new t.ServerError(T,I));p.onError.once(M),p.onJoin.once(()=>{p.onError.remove(M),m(p)})})})}createMatchMakeRequest(u,d,f={},g,v){return i(this,void 0,void 0,function*(){const p=(yield this.http.post(`matchmake/${u}/${d}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(f)})).data;if(p.error)throw new a(p.error,p.code);return u==="reconnect"&&(p.reconnectionToken=f.reconnectionToken),yield this.consumeSeatReservation(p,g,v)})}createRoom(u,d){return new n.Room(u,d)}buildEndpoint(u,d={}){const f=[];for(const p in d)d.hasOwnProperty(p)&&f.push(`${p}=${d[p]}`);let g=this.settings.secure?"wss://":"ws://";u.publicAddress?g+=`${u.publicAddress}`:g+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const v=`${g}/${u.processId}/${u.roomId}?${f.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(v)):v}getHttpEndpoint(u=""){const d=u.startsWith("/")?u:`/${u}`,f=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${d}`;return this.urlBuilder?this.urlBuilder(new URL(f)):f}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return $n.Client=c,$n}var lr={},ad;function tT(){if(ad)return lr;ad=1,Object.defineProperty(lr,"__esModule",{value:!0}),lr.SchemaSerializer=void 0;const i=Wl();let e=class{setState(n){return this.state.decode(n)}getState(){return this.state}patch(n){return this.state.decode(n)}teardown(){var n,s;(s=(n=this.state)===null||n===void 0?void 0:n.$changes)===null||s===void 0||s.root.clearRefs()}handshake(n,s){this.state?new i.Reflection().decode(n,s):this.state=i.Reflection.decode(n,s)}};return lr.SchemaSerializer=e,lr}var hr={},cd;function nT(){if(cd)return hr;cd=1,Object.defineProperty(hr,"__esModule",{value:!0}),hr.NoneSerializer=void 0;let i=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return hr.NoneSerializer=i,hr}var ld;function iT(){return ld||(ld=1,(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.SchemaSerializer=i.registerSerializer=i.Auth=i.Room=i.ErrorCode=i.Protocol=i.MatchMakeError=i.Client=void 0,BE();var e=eT();Object.defineProperty(i,"Client",{enumerable:!0,get:function(){return e.Client}}),Object.defineProperty(i,"MatchMakeError",{enumerable:!0,get:function(){return e.MatchMakeError}});var t=gp();Object.defineProperty(i,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),Object.defineProperty(i,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}});var n=yp();Object.defineProperty(i,"Room",{enumerable:!0,get:function(){return n.Room}});var s=Sp();Object.defineProperty(i,"Auth",{enumerable:!0,get:function(){return s.Auth}});const r=tT();Object.defineProperty(i,"SchemaSerializer",{enumerable:!0,get:function(){return r.SchemaSerializer}});const o=nT(),a=_p();Object.defineProperty(i,"registerSerializer",{enumerable:!0,get:function(){return a.registerSerializer}}),(0,a.registerSerializer)("schema",r.SchemaSerializer),(0,a.registerSerializer)("none",o.NoneSerializer)})(ic)),ic}var sT=iT();const rT=1500;class oT{client=null;room=null;lastPingMs=null;pingIntervalId=null;connect(e){this.client=new sT.Client(e)}async joinOrCreate(e){if(!this.client)return!1;try{return this.room=await this.client.joinOrCreate(e,{},If),this.setupPing(),!0}catch(t){return console.error("Colyseus joinOrCreate failed:",t),!1}}setupPing(){const e=this.room;if(!e)return;this.stopPing(),this.lastPingMs=null,e.onMessage("pong",n=>{this.lastPingMs=Math.round(performance.now()-n.t)}),e.onLeave(()=>this.stopPing());const t=()=>{e.connection?.isOpen&&e.send("ping",{t:performance.now()})};t(),this.pingIntervalId=setInterval(t,rT)}stopPing(){this.pingIntervalId&&(clearInterval(this.pingIntervalId),this.pingIntervalId=null)}getPing(){return this.lastPingMs}sendInput(e){this.room?.send("input",e)}getRoom(){return this.room}disconnect(){this.stopPing(),this.room?.leave(),this.room=null}}class aT extends Ws{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dT(t)}),this.register(function(t){return new fT(t)}),this.register(function(t){return new MT(t)}),this.register(function(t){return new ET(t)}),this.register(function(t){return new TT(t)}),this.register(function(t){return new mT(t)}),this.register(function(t){return new gT(t)}),this.register(function(t){return new _T(t)}),this.register(function(t){return new vT(t)}),this.register(function(t){return new uT(t)}),this.register(function(t){return new xT(t)}),this.register(function(t){return new pT(t)}),this.register(function(t){return new ST(t)}),this.register(function(t){return new yT(t)}),this.register(function(t){return new lT(t)}),this.register(function(t){return new AT(t)}),this.register(function(t){return new bT(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Mr.extractUrlBase(e);o=Mr.resolveURL(c,this.path)}else o=Mr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new bf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Mp){try{o[st.KHR_BINARY_GLTF]=new wT(e)}catch(u){s&&s(u);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new kT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:o[u]=new hT;break;case st.KHR_DRACO_MESH_COMPRESSION:o[u]=new RT(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[u]=new CT;break;case st.KHR_MESH_QUANTIZATION:o[u]=new PT;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function cT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lT{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ve(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Vt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Cf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Rf(h),c.distance=u;break;case"spot":c=new By(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class hT{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return wn}extendParams(e,t,n){const s=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Vt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Kt))}return Promise.all(s)}}class uT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class dT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(a,a)}return Promise.all(r)}}class fT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class pT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class mT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Vt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Kt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class gT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class _T{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(a[0],a[1],a[2],Vt),Promise.all(r)}}class vT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class xT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(a[0],a[1],a[2],Vt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Kt)),Promise.all(r)}}class yT{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class ST{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class MT{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class ET{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class TT{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class AT{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class bT{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==pn.TRIANGLES&&c.mode!==pn.TRIANGLE_STRIP&&c.mode!==pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new Ge,p=new D,m=new nn,S=new D(1,1,1),M=new cy(g.geometry,g.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,T),l.SCALE&&S.fromBufferAttribute(l.SCALE,T),M.setMatrixAt(T,v.compose(p,m,S));for(const T in l)if(T==="_COLOR_0"){const I=l[T];M.instanceColor=new nl(I.array,I.itemSize,I.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,l[T]);St.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Mp="glTF",ur=12,hd={JSON:1313821514,BIN:5130562};class wT{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ur),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ur,r=new DataView(e,ur);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===hd.JSON){const c=new Uint8Array(e,ur+o,a);this.content=n.decode(c)}else if(l===hd.BIN){const c=ur+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class RT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=fl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=fl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=As[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],p=l[g];p!==void 0&&(v.normalized=p)}u(f)},a,c,Vt,d)})})}}class CT{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class PT{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class Ep extends Br{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,p=-2*f+3*d,m=f-d,S=1-p,M=m-d+u;for(let T=0;T!==a;T++){const I=o[v+T+a],P=o[v+T+l]*h,C=o[g+T+a],N=o[g+T]*h;r[T]=S*I+M*P+p*C+m*N}return r}}const IT=new nn;class LT extends Ep{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return IT.fromArray(r).normalize().toArray(r),r}}const pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},As={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ud={9728:Jt,9729:ln,9984:Od,9985:Ro,9986:fr,9987:Kn},dd={33071:mi,33648:Xo,10497:Ps},ac={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},DT={CUBICSPLINE:void 0,LINEAR:Rr,STEP:wr},lc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function NT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new yi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn})),i.DefaultMaterial}function Ni(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function OT(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function UT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function FT(i){let e;const t=i.extensions&&i.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hc(t.attributes):e=i.indices+":"+hc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+hc(i.targets[n]);return e}function hc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function pl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function BT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const zT=new Ge;class kT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new wf(this.options.manager):this.textureLoader=new Vy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ni(r,a,s),qn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Mr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=ac[s.type],a=As[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Dt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ac[s.type],c=As[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,p;if(f&&f!==u){const m=Math.floor(d/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let M=t.cache.get(S);M||(v=new c(a,m*f,s.count*f/h),M=new uf(v,f/h),t.cache.add(S,M)),p=new Pr(M,l,d%f/h,g)}else a===null?v=new c(s.count*l):v=new c(a,d,s.count*l),p=new Dt(v,l,g);if(s.sparse!==void 0){const m=ac.SCALAR,S=As[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,T=s.sparse.values.byteOffset||0,I=new S(o[1],M,s.sparse.count*m),P=new c(o[2],T,s.sparse.count*l);a!==null&&(p=new Dt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let C=0,N=I.length;C<N;C++){const X=I[C];if(p.setX(X,P[C*l]),l>=2&&p.setY(X,P[C*l+1]),l>=3&&p.setZ(X,P[C*l+2]),l>=4&&p.setW(X,P[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=ud[d.magFilter]||ln,h.minFilter=ud[d.minFilter]||Kn,h.wrapS=dd[d.wrapS]||Ps,h.wrapT=dd[d.wrapT]||Ps,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const p=new Lt(v);p.needsUpdate=!0,d(p)}),t.load(Mr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),qn(u,o),u.userData.mimeType=o.mimeType||BT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new gf,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Us,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return yi}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const u=s[st.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Vt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Kt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=mn);const h=r.alphaMode||lc.OPAQUE;if(h===lc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===lc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==wn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ae(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==wn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==wn){const u=r.emissiveFactor;a.emissive=new Ve().setRGB(u[0],u[1],u[2],Vt)}return r.emissiveTexture!==void 0&&o!==wn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Kt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),qn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ni(s,u,r),u})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=FT(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=fd(new Ut,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?NT(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],p=o[f];let m;const S=c[f];if(p.mode===pn.TRIANGLES||p.mode===pn.TRIANGLE_STRIP||p.mode===pn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new ry(v,S):new xt(v,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===pn.TRIANGLE_STRIP?m.geometry=Ou(m.geometry,$d):p.mode===pn.TRIANGLE_FAN&&(m.geometry=Ou(m.geometry,Qc));else if(p.mode===pn.LINES)m=new $i(v,S);else if(p.mode===pn.LINE_STRIP)m=new Ol(v,S);else if(p.mode===pn.LINE_LOOP)m=new ly(v,S);else if(p.mode===pn.POINTS)m=new hy(v,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&UT(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),qn(m,r),p.extensions&&Ni(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ni(s,u[0],r),u[0];const d=new $t;r.extensions&&Ni(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(Ns.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Il(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ge;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Nl(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],v=f.target,p=v.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],p=u[4],m=[];for(let S=0,M=d.length;S<M;S++){const T=d[S],I=f[S],P=g[S],C=v[S],N=p[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const X=n._createAnimationTracks(T,I,P,C,N);if(X)for(let E=0;E<X.length;E++)m.push(X[E])}return new sl(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,zT)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new pf:c.length>1?h=new $t:c.length===1?h=c[0]:h=new St,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),qn(h,r),r.extensions&&Ni(n,h,r),r.matrix!==void 0){const u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new $t;n.name&&(r.name=s.createUniqueName(n.name)),qn(r,n),n.extensions&&Ni(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof Cn||d instanceof Lt)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ui[r.path]===ui.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ui[r.path]){case ui.weights:c=Fs;break;case ui.rotation:c=Bs;break;case ui.position:case ui.scale:c=zs;break;default:switch(n.itemSize){case 1:c=Fs;break;case 2:case 3:default:c=zs;break}break}const h=s.interpolation!==void 0?DT[s.interpolation]:Rr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ui[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=pl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Bs?LT:Ep;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function HT(i,e,t){const n=e.attributes,s=new ni;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const h=pl(As[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=pl(As[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new On;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function fd(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=fl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ut.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),qn(i,e),HT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?OT(i,e.targets,t):i})}const Kl=new aT,Tp=new wf;function Dr(){const i=new Si(.5,1.8,.5),e=new yi({color:8947967});return new xt(i,e)}async function pd(i){if(!i.trim())return{scene:Dr(),animations:[]};try{const e=await Kl.loadAsync(i);return{scene:e.scene,animations:e.animations??[]}}catch{return{scene:Dr(),animations:[]}}}async function VT(i){if(!i.trim())return{scene:Dr(),animations:[]};try{const e=await Kl.loadAsync(i),t=e.animations??[];return{scene:e.scene,animations:t}}catch{return{scene:Dr(),animations:[]}}}async function md(i){if(!i.trim())return null;try{return(await Kl.loadAsync(i)).scene}catch{return null}}const GT="/models/skins",gd=new Map;function WT(i){return()=>{let e=i+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const _d=10,uc=.65,vd=.55;function xd(i){const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d"),s=512/2,r=s*uc,o=WT(i*12345+1);n.clearRect(0,0,512,512);const a=i%5===3,l=a?3:3+i%4,c=i*.37*Math.PI,h=a?1.4:.9,u=a?.35:.2,d=a?.4:.35,f=a?.75:1;for(let S=0;S<l;S++){const M=a?(S*2.1+o()*.5)/l:S/l,T=c+M*Math.PI*2+(o()-.5)*h,I=(u+o()*d)*uc,P=(.1+o()*.18)*uc;n.save(),n.translate(s,s),n.rotate(T);const C=n.createLinearGradient(0,0,I*512,0);C.addColorStop(0,"rgba(255,130,45,0.78)"),C.addColorStop(.1,"rgba(255,105,35,0.74)"),C.addColorStop(.28,"rgba(240,80,25,0.5)"),C.addColorStop(.48,"rgba(210,60,15,0.24)"),C.addColorStop(.68,"rgba(175,50,10,0.08)"),C.addColorStop(.88,"rgba(140,35,6,0.02)"),C.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=C,n.beginPath(),n.ellipse(0,0,I*512,P*512,0,0,Math.PI*2),n.fill(),n.restore()}const g=r*f,v=n.createRadialGradient(s,s,0,s,s,g);v.addColorStop(0,"rgba(255,135,45,0.94)"),v.addColorStop(.18,"rgba(255,110,35,0.84)"),v.addColorStop(.42,"rgba(245,85,25,0.55)"),v.addColorStop(.65,"rgba(210,60,18,0.22)"),v.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=v,n.beginPath(),n.arc(s,s,g,0,Math.PI*2),n.fill();const p=n.getImageData(0,0,512,512);for(let S=0;S<512;S++)for(let M=0;M<512;M++){const T=(S*512+M)*4,I=(M-s)/s,P=(S-s)/s,C=Math.sqrt(I*I+P*P),N=C<vd?1:Math.max(0,1-(C-vd)/.2),X=p.data[T+3];if(X>2){const E=1+(1-X/255)*1.5,b=(o()-.5)*50*E;p.data[T]=Math.max(0,Math.min(255,p.data[T]+b)),p.data[T+1]=Math.max(0,Math.min(255,p.data[T+1]+b*.5)),p.data[T+2]=Math.max(0,Math.min(255,p.data[T+2]+b*.12)),p.data[T+3]=Math.round(p.data[T+3]*N)}}n.putImageData(p,0,0);const m=new _f(t);return m.needsUpdate=!0,m}async function XT(i){if(i.length===0)return Array.from({length:_d},(t,n)=>xd(n));const e=[];for(const t of i)try{const n=await Tp.loadAsync(t);n.flipY=!1,e.push(n)}catch{}return e.length===0?Array.from({length:_d},(t,n)=>xd(n)):e}async function Zl(i){if(!i)return null;const e=gd.get(i);if(e)return e;try{const t=await Tp.loadAsync(`${GT}/${i}.png`);return t.flipY=!1,gd.set(i,t),t}catch{return null}}async function $T(i,e){const t=await Zl(e);return t?(Jl(i,t),!0):!1}function Jl(i,e){i.traverse(t=>{const n=t;if(!n.isMesh)return;const s=Array.isArray(n.material)?n.material:[n.material],r=[];for(const o of s){const a=o;if(!a)continue;const l=a.clone();l.map=e,r.push(l)}r.length===1?n.material=r[0]:r.length>1&&(n.material=r)})}class Ap{sprite;remainingMs=0;textures=[];config;constructor(e){this.config=e;const t=new Dl({map:null,transparent:!0,depthWrite:!1,blending:Ar,color:16768136});this.sprite=new ff(t),this.sprite.scale.set(e.scale,e.scale,1),this.sprite.visible=!1}setTextures(e){this.textures=e}trigger(e){if(this.textures.length===0)return;const t=this.textures[Math.floor(Math.random()*this.textures.length)];this.sprite.material.map=t,this.sprite.material.needsUpdate=!0,this.sprite.visible=!0,this.remainingMs=this.config.durationMs,this.sprite.parent!==e&&(this.sprite.parent&&this.sprite.parent.remove(this.sprite),e.add(this.sprite)),this.sprite.position.set(0,0,0)}update(e){return this.remainingMs<=0?(this.sprite.visible&&(this.sprite.visible=!1),!1):(this.remainingMs-=e,this.remainingMs<=0?(this.sprite.visible=!1,!1):!0)}getSprite(){return this.sprite}dispose(){this.sprite.material.dispose()}}const YT=.15,jT=2.5,qT=.5,KT=.9;function di(i){return i.toLowerCase().replace(/\s+/g,"")}class ea{clipsById=new Map;clipNames;currentActions=new Map;crossfadeDuration;constructor(e={},t=YT){this.clipNames={...sS,...e},this.crossfadeDuration=t}findIdleClip(e){if(!e.length)return;const t=e.find(s=>di(s.name)==="idleaiming");if(t)return t;const n=e.find(s=>di(s.name)==="idle");return n||e[0]}init(e){this.clipsById.clear();const t=new Map;for(const r of e){t.set(di(r.name),r);const o=r.name.split("|").pop();o&&o!==r.name&&t.set(di(o),r)}for(const[r,o]of Object.entries(this.clipNames)){const a=di(o);let l=e.find(c=>c.name===o)??t.get(a)??e.find(c=>{const h=di(c.name),u=c.name.split("|").pop()??"";return h===a||di(u)===a});l&&this.clipsById.set(r,l)}const n=this.findIdleClip(e);!this.clipsById.has("idle")&&n&&this.clipsById.set("idle",n);const s=e.find(r=>di(r.name)==="slide");!this.clipsById.has("slide")&&s&&this.clipsById.set("slide",s)}findClip(e){return this.clipsById.get(e)??Array.from(this.clipsById.values()).find(t=>t.name===e)}updateJumpSync(e,t,n){const s=t.duration*qT,r=t.duration*KT;Math.abs(n)<jT?(e.timeScale=0,e.time<s&&(e.time=s)):(e.timeScale=1,n<0&&e.time<s&&(e.time=s),e.time>r&&(e.time=r,e.timeScale=0))}static STRAFE_SLOW_SCALE=.7;playStaticIdlePose(e){const t=this.findClip("idle");if(!t)return;const n=this.currentActions.get(e),s=e.clipAction(t);n!==s&&(n&&n.fadeOut(.06),s.setLoop(Jc,1/0),s.reset().fadeIn(0).play(),this.currentActions.set(e,s)),s.time=0,s.timeScale=0}playClip(e,t,n){let s=this.findClip(t),r=t;if(!s&&(s=this.findClip("idle"),r="idle",!s))return;const o=this.currentActions.get(e),a=e.clipAction(s);if(o!==a){a.setLoop(r==="jump"?Xd:Jc,r==="jump"?1:1/0);const h=this.findClip("jump"),d=o&&h&&o.getClip()===h?.06:this.crossfadeDuration;o&&o.fadeOut(d),a.reset().fadeIn(d).play(),this.currentActions.set(e,a)}r==="jump"&&n?.vy!==void 0&&this.updateJumpSync(a,s,n.vy);const c=r==="strafeLeftFast"||r==="strafeRightFast";n?.timeScale!==void 0?(a.timeScale=n.timeScale,n.timeScale===0&&(a.time=0)):c?n?.sprint===!1?a.timeScale=ea.STRAFE_SLOW_SCALE:a.timeScale=1:r==="idle"&&(a.timeScale=1)}updateMixers(e,t){for(const n of e)n.update(t)}}function ZT(i){return{shotThisFrame:!1,lastLocalHealth:null,localRespawnNoLerpTime:0,clientShootCooldownTicks:0,clientReloadTicks:0,inputTick:0,debugMode:!1,currentEyeHeight:i,lastHitboxPositions:null,lastHitboxPositionsRaw:null}}function JT(i,e,t,n,s,r,o){const a={tick:e,moveX:i.moveX,moveZ:i.moveZ,sprint:i.sprint,jump:i.jump,slide:i.slide,slideIntentTicks:i.slideIntentTicks>0?i.slideIntentTicks:void 0,crouch:i.crouch,yaw:i.yaw,pitch:i.pitch,shoot:i.shoot,reload:i.reload,dash:i.dash};if(t&&(a.clientX=t.x,a.clientY=t.y,a.clientZ=t.z),s&&(a.aimDirX=s.x,a.aimDirY=s.y,a.aimDirZ=s.z),i.shoot&&s){a.shootAimX=s.x,a.shootAimY=s.y,a.shootAimZ=s.z;const l=o??t;l&&(a.shootClientX=l.x,a.shootClientY=l.y,a.shootClientZ=l.z)}if(r&&(a.debugMode=!0),n&&t){const l=g=>({x:g.x-t.x,y:g.y-t.y,z:g.z-t.z}),c=l(n.head),h=l(n.bodyCenter),u=l(n.spineTop),d=l(n.pelvis),f=l(n.feet);a.headX=c.x,a.headY=c.y,a.headZ=c.z,a.bodyCenterX=h.x,a.bodyCenterY=h.y,a.bodyCenterZ=h.z,a.spineTopX=u.x,a.spineTopY=u.y,a.spineTopZ=u.z,a.pelvisX=d.x,a.pelvisY=d.y,a.pelvisZ=d.z,a.feetX=f.x,a.feetY=f.y,a.feetZ=f.z}return a}const yd=.15,dc=.05,Sd=8,zt=(i,e,t)=>i+(e-i)*(1-Math.exp(-t));function QT(){return{moveFactor:0,smoothedPhaseSpeed:0,bobPhase:0,swayYaw:0,swayPitch:0,recoilPitch:0,recoilPullback:0,recoilRoll:0,slideBlend:0,slideImpactSpringY:0,slideImpactSpringVy:0,slideWigglePhase:1,slideReleaseBump:0,strafeLeanX:0,strafeLeanRoll:0,forwardLeanZ:0,dashBlend:0,smoothedYawDelta:0,smoothedPitchDelta:0,idlePhase:0,idleTime:0,prevMovState:"grounded",lastAirborneVy:0,lastAirborneVx:0,jumpTakeoffPhase:1,jumpLandingSpringY:0,jumpLandingSpringVy:0,lastYaw:0,lastPitch:0,firstFrame:!0,_targetPos:new D,_targetRot:new _n(0,0,0,"YXZ"),_pos:new D,_rot:new _n(0,0,0,"YXZ")}}function eA(i,e){const t=Le.tuning.povMovement??tA,{velocity:n,state:s,crouching:r,yaw:o,pitch:a,shotThisFrame:l,dt:c}=e,h=Math.sqrt(n.x*n.x+n.z*n.z),u=s==="sliding",d=s==="grounded",f=s==="airborne",g=i.prevMovState==="grounded",v=i.prevMovState==="airborne";i.prevMovState=s,f&&(i.lastAirborneVy=n.y,i.lastAirborneVx=n.x);const p=Math.min(1,Math.abs(i.lastAirborneVy)/12);if(g&&f&&(i.jumpTakeoffPhase=0),v&&d){const ht=(t.jumpLandingDip??-.06)*p;i.jumpLandingSpringY=ht,i.jumpLandingSpringVy=0}const m=t.jumpTakeoffDecay??6;i.jumpTakeoffPhase=Math.min(1,i.jumpTakeoffPhase+c*m);const S=i.jumpTakeoffPhase,M=1-S*S,T=(t.jumpTakeoffDip??-.016)*M,I=t.jumpLandingSpringK??60,P=t.jumpLandingSpringDamp??14;if(d&&(Math.abs(i.jumpLandingSpringY)>1e-4||Math.abs(i.jumpLandingSpringVy)>1e-4)){const ht=-I*i.jumpLandingSpringY-P*i.jumpLandingSpringVy;i.jumpLandingSpringVy+=ht*c,i.jumpLandingSpringY+=i.jumpLandingSpringVy*c}else d&&(i.jumpLandingSpringY=0,i.jumpLandingSpringVy=0);const C=d?i.jumpLandingSpringY:0,N=Math.abs(i.jumpLandingSpringY)+Math.abs(i.jumpLandingSpringVy)*.1,X=f?t.jumpAirborneFloatY??.016:0,E=(f?T:0)+C+X,b=d&&N>.001&&Math.abs(i.lastAirborneVx)>1?-Math.sign(i.lastAirborneVx)*(t.jumpLandingRoll??.016)*p*Math.min(1,Math.abs(i.lastAirborneVx)/6)*Math.min(1,N*20):0,G=f&&Math.abs(n.z)>.5?-Math.sign(n.z)*(t.jumpInertiaZ??.004)*Math.min(1,Math.abs(n.z)/6):0,V=Math.min(1,h/Sd),Y=d&&h>yd&&!u?V:0;i.moveFactor=zt(i.moveFactor,Y,c/t.moveFactorSmoothTau);const Q=u?1:0,W=u?t.slideInTau:t.slideOutTau,Z=i.slideBlend;if(i.slideBlend=zt(i.slideBlend,Q,c/W),i.slideBlend>.05&&Z<.1&&(i.slideImpactSpringY=t.slideImpactDipAmp,i.slideImpactSpringVy=0,i.slideWigglePhase=0),i.slideBlend>.01){const ht=t.slideImpactSpringK??80,en=t.slideImpactSpringDamp??12,zn=-ht*i.slideImpactSpringY-en*i.slideImpactSpringVy;i.slideImpactSpringVy+=zn*c,i.slideImpactSpringY+=i.slideImpactSpringVy*c}else i.slideImpactSpringY=0,i.slideImpactSpringVy=0;const ce=i.slideImpactSpringY,le=t.slideWiggleDuration??.3;i.slideBlend>.01&&i.slideWigglePhase<1?i.slideWigglePhase=Math.min(1,i.slideWigglePhase+c/le):i.slideBlend<.5&&(i.slideWigglePhase=1);const te=1-i.slideWigglePhase,be=i.slideBlend*te*(t.slideWiggleRoll??.004)*Math.sin(i.idleTime*18),_e=Z>.3&&!u&&i.slideBlend<Z,$=t.slideReleaseBump??0;_e&&$!==0&&(i.slideReleaseBump=$),i.slideReleaseBump=zt(i.slideReleaseBump,0,c/(t.slideReleaseBumpTau??.08));const ie=r?t.bobCrouchFreqMultiplier??1:1,oe=d&&h>yd&&!u?Math.min(1,h/Sd)*t.bobFrequency*ie:0;i.smoothedPhaseSpeed=zt(i.smoothedPhaseSpeed,oe,c/t.phaseSpeedSmoothTau),i.bobPhase+=c*i.smoothedPhaseSpeed;const me=r?t.bobCrouchAmpMultiplier??1:1,Oe=i.moveFactor*me,Ne=Oe<=dc?0:Math.min(1,(Oe-dc)/(1-dc)),We=Math.abs(n.z),rt=Math.abs(n.x),Xe=We+rt+1e-6,F=We/Xe,Mt=rt/Xe,Ze=n.x>0?1:n.x<0?-1:0,Qe=d&&!u?Ne*Mt*i.moveFactor:0,Fe=-Ze*Qe*(t.strafeLeanX??0),ft=Ze*Qe*(t.strafeLeanRoll??0),Be=t.strafeLeanTau??.06;i.strafeLeanX=zt(i.strafeLeanX,Fe,c/Be),i.strafeLeanRoll=zt(i.strafeLeanRoll,ft,c/Be);const L=n.z>0?1:n.z<0?-1:0,w=d&&!u?Ne*F*i.moveFactor:0,q=L*w*(t.forwardLeanZ??0);i.forwardLeanZ=zt(i.forwardLeanZ,q,c/Be);const he=e.isDashing??!1?1:0,se=t.dashBlendTau??.04;i.dashBlend=zt(i.dashBlend,he,c/se);const Pe=i.dashBlend*(t.dashOffsetZ??.06),ve=i.dashBlend*(t.dashTiltPitch??-.04),we=.4+.6*F,et=.4+.6*Mt,fe=.5+.5*Mt,Re=1-Mt*(t.strafeBobYReduce??.7),ze=1+Mt*(t.strafeBobXBoost??.5),ke=1+Mt*(t.strafeBobRollBoost??.8),ge=Math.max(0,Math.min(1,e.reloadProgress??0)),$e=1-i.slideBlend*(t.bobSlideReduce??.98),He=1-ge,ct=i.bobPhase,k=t.bobAmplitudeY*Ne*we*Re*Math.sin(ct)*$e*He,Te=t.bobAmplitudeX*Ne*et*ze*Math.sin(ct+t.bobPhaseOffsetX)*$e*He,J=t.bobAmplitudeRoll*Ne*fe*ke*Math.sin(ct+.7)*$e*He,ae=t.bobAmplitudePitch*Ne*Math.sin(ct+.4)*$e*He;let Se=0,Me=0;i.firstFrame?i.firstFrame=!1:(Se=o-i.lastYaw,Me=a-i.lastPitch),i.lastYaw=o,i.lastPitch=a;const tt=t.swayDeltaSmoothTau??.04;i.smoothedYawDelta=zt(i.smoothedYawDelta,Se,c/tt),i.smoothedPitchDelta=zt(i.smoothedPitchDelta,Me,c/tt);const vt=(1-i.slideBlend*t.swaySlideReduce)*(1-ge*(t.swayReloadReduce??.8))*(f?t.swayAirborneReduce??.5:1),Ft=-i.smoothedYawDelta*t.swayLookFactor*vt,at=-i.smoothedPitchDelta*t.swayLookFactor*vt;i.swayYaw=zt(i.swayYaw,Ft,c/t.swaySmoothTau),i.swayPitch=zt(i.swayPitch,at,c/t.swaySmoothTau),i.swayYaw*=t.swayReturnDamping,i.swayPitch*=t.swayReturnDamping;const sn=1/Df/3,un=Math.max(t.recoilRecoveryTau,1e-4),In=Math.min(un,sn);l&&(i.recoilPitch+=t.recoilKickPitch,i.recoilPullback+=t.recoilPullback,i.recoilRoll+=(Math.random()-.5)*t.recoilRollVariation);const rn=(1-i.slideBlend*t.recoilSlideReduce)*(1-ge);i.recoilPitch=zt(i.recoilPitch,0,c/In)*rn,i.recoilPullback=zt(i.recoilPullback,0,c/In),i.recoilRoll=zt(i.recoilRoll,0,c/In);const Mi=i.slideBlend*t.slideYOffset+ce+i.slideReleaseBump,x=i.slideBlend*t.slideZOffset,_=i.slideBlend*t.slideInwardTilt+be,y=i.slideBlend*(t.slidePitchDown??-.1),R=ge>1e-4;let z=0;if(R)if(ge<.25){const ht=ge/.25;z=ht*ht}else if(ge<.7)z=1;else{const ht=(ge-.7)/.3,en=Math.max(0,Math.min(1,ht)),zn=en*en*(3-2*en),tn=t.reloadOvershoot??.08;z=1-zn+tn*(1-zn)*(1-zn)}const ne=t.reloadYOffset??-.12,De=t.reloadZOffset??.12,Ce=t.reloadPullback??.06,Je=t.reloadPitchDown??-.3,Ye=t.reloadRoll??-.14,A=t.reloadYaw??.18,U=z*ne,B=z*De,H=z*Ce,O=z*Je,ee=z*Ye,j=z*A;i.idleTime+=c;const ue=2*Math.PI/(t.idleBreathingPeriod??4),xe=1+.06*Math.sin(i.idleTime*.4)+.03*Math.sin(i.idleTime*.73);i.idlePhase+=c*ue*xe;const Ee=i.idlePhase,pe=Ee*2.13+.7,de=Ee*.47+1.3,je=Math.sin(Ee)+.18*Math.sin(pe)+.06*Math.sin(de),nt=Math.max(-1,Math.min(1,je/1.24)),it=Math.sign(nt)*Math.pow(Math.abs(nt),.78),lt=.4*Math.sin(Ee+.6)+.12*Math.sin(pe+1.1),Ue=(1-i.slideBlend)*(1-i.moveFactor*(t.idleWalkReduce??.85))*(1-ge*(t.idleReloadReduce??.4))*(f?t.idleAirborneReduce??.3:1),Ie=(t.idleBreathingAmplitudeY??.002)*Ue,mt=(t.idleBreathingAmplitudeX??6e-4)*Ue,ot=Ie*it,Tt=mt*lt,on=(t.idlePitchAmplitude??6e-4)*Ue*it,Yt=(t.idleRollAmplitude??3e-4)*Ue*lt;i._targetPos.set(Te+i.strafeLeanX+Tt,k+Mi+U+ot+E,i.recoilPullback+H+x+B+i.forwardLeanZ+G+Pe),i._targetRot.set(i.swayPitch+i.recoilPitch+ae+on+y+O+ve,i.swayYaw+j,_+ee+i.recoilRoll+J+i.strafeLeanRoll+Yt+b,"YXZ");const ii=t.rootApplyTau;return i._pos.lerp(i._targetPos,1-Math.exp(-c/ii)),i._rot.x=zt(i._rot.x,i._targetRot.x,c/ii),i._rot.y=zt(i._rot.y,i._targetRot.y,c/ii),i._rot.z=zt(i._rot.z,i._targetRot.z,c/ii),{position:i._pos,rotation:i._rot}}const tA={idleBreathingAmplitudeY:.008,idleBreathingAmplitudeX:.0024,idleBreathingPeriod:4,idlePitchAmplitude:.0024,idleRollAmplitude:.0012,idleWalkReduce:.85,idleAirborneReduce:.3,jumpTakeoffDip:-.016,jumpTakeoffDecay:8,jumpAirborneFloatY:.032,jumpLandingDip:-.06,jumpLandingSpringK:60,jumpLandingSpringDamp:14,jumpLandingRoll:.016,jumpInertiaZ:.016,swayAirborneReduce:.5,moveFactorSmoothTau:.06,phaseSpeedSmoothTau:.08,rootApplyTau:.025,bobAmplitudeY:.01512,bobAmplitudeX:.0156,bobAmplitudeRoll:.0052,bobAmplitudePitch:.00258,bobPhaseOffsetX:.3,bobFrequency:10,swayLookFactor:.6,swaySmoothTau:.05,swayDeltaSmoothTau:.04,swayReturnDamping:.88,swaySlideReduce:.92,bobSlideReduce:.98,strafeLeanX:.1,strafeLeanRoll:.025,forwardLeanZ:.1,strafeLeanTau:.06,strafeBobYReduce:.7,strafeBobXBoost:.5,strafeBobRollBoost:.8,recoilKickPitch:.02,recoilPullback:.15,recoilRollVariation:.02,recoilRecoveryTau:.06,recoilSlideReduce:.5,slideYOffset:-.2,slideZOffset:.1,slideInwardTilt:.38,slidePitchDown:-.1,slideImpactDipAmp:-.012,slideImpactSpringK:80,slideImpactSpringDamp:18,slideWiggleRoll:.005,slideWiggleDuration:.3,slideReleaseBump:0,slideReleaseBumpTau:.1,slideInTau:.04,slideOutTau:.28,bobCrouchFreqMultiplier:1,bobCrouchAmpMultiplier:1,reloadYOffset:-.12,reloadZOffset:.12,reloadPullback:.06,reloadPitchDown:-.3,reloadRoll:-.14,reloadYaw:.18,reloadOvershoot:.08,swayReloadReduce:.8,idleReloadReduce:.4},ml={x:.37,y:-5.34,z:.55,rotX:-.03,rotY:2.968,rotZ:-.02,scale:3.21};async function Md(i,e,t){const n=t.getCamera();let s=i,r=e;if(Le.viewmodelArmsUrl){const v=await VT(Le.viewmodelArmsUrl);v.animations.length>0&&v.scene&&(s=v.scene,r=v.animations)}const o=s!==i,a=Gl(s);if(a.updateMatrixWorld(!0),Le.playerSkin){const v=await Zl(Le.playerSkin);v&&Jl(a,v)}o?(a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.setScalar(1)):(a.position.set(0,-ks*.5,-.4),a.rotation.set(0,0,0),a.scale.setScalar(1));const l=new $t;l.position.set(0,0,0),l.quaternion.identity(),l.scale.setScalar(1);const c=new $t;if(c.add(a),o){const v=ml;c.position.set(v.x,v.y,v.z),c.rotation.set(v.rotX,v.rotY,v.rotZ),c.scale.setScalar(v.scale)}else c.position.set(0,0,0),c.quaternion.identity(),c.scale.setScalar(1);l.add(c),n.add(l),a.traverse(v=>{v.frustumCulled=!1;const p=v;p.isMesh&&(p.renderOrder=100)});let h=null,u=null,d=null,f=!1,g=null;if(o&&Le.viewmodelWeaponUrl){const v=await md(Le.viewmodelWeaponUrl);if(v){v.rotation.x=Math.PI/2,v.rotation.z=-Math.PI/2;let p=null,m=null;a.traverse(P=>{const C=P;C.isSkinnedMesh&&C.skeleton&&!p&&(p=C.skeleton.getBoneByName(Of)??C.skeleton.getBoneByName(Uf)??C.skeleton.getBoneByName(Ff)??null,m=C.skeleton.getBoneByName(BS)??C.skeleton.getBoneByName(zS)??C.skeleton.getBoneByName(kS)??null)});const S=v.getObjectByName("gripleft");u=v.getObjectByName("muzzle")??v.getObjectByName("Muzzle")??v;const M=new $t;M.add(v),h=M;const T=Le.viewmodelWeaponScale??1,I=Le.viewmodelWeaponTwoPoint&&p&&m&&S&&S.position.lengthSq()>1e-6;if(o){d=null,f=!0,l.add(M);const P=Le.viewmodelWeaponGripOffset??{x:0,y:0,z:0};v.position.set(P.x,P.y,P.z),v.scale.setScalar(T)}else if(I&&p&&m&&S){const P=S.position.clone();d={rightHand:p,leftHand:m,gripleft:S,gLeftLocal:P},f=!1,a.add(M)}else if(d=null,f=!1,p){p.add(M);const P=Le.viewmodelWeaponOffset;M.position.set(P.x,P.y,P.z);const C=Le.viewmodelWeaponGripOffset??{x:0,y:0,z:0};v.position.set(C.x,C.y,C.z),v.scale.setScalar(T)}else a.add(M),M.position.set(.25,-.15,.35),v.scale.setScalar(T);v.traverse(P=>{P.frustumCulled=!1;const C=P;if(C.isMesh){C.renderOrder=101;const N=Array.isArray(C.material)?C.material:[C.material];for(const X of N)X&&"side"in X&&(X.side=mn)}}),g=v.clone(!0)}}if(Le.viewmodelWeaponUrl&&!g){const v=await md(Le.viewmodelWeaponUrl);v&&(v.rotation.x=Math.PI/2,v.rotation.z=-Math.PI/2,g=v)}return{viewmodelModel:a,viewmodelAnimations:r,viewmodelState:{playerViewModel:a,viewmodelRoot:l,viewmodelHolder:c,viewmodelIsArmsOnly:o,weaponContainerRef:h,muzzleNodeRef:u,twoPointRefs:d,weaponPovDecoupled:f,movementState:QT()},weaponTemplate3P:g}}const fc=new D,dr=new D,Ed=new D,Td=new nn,Ad=new nn;function bp(i,e){const{viewmodelRoot:t,viewmodelHolder:n,viewmodelIsArmsOnly:s,weaponContainerRef:r,twoPointRefs:o,weaponPovDecoupled:a,playerViewModel:l,movementState:c}=i;if(n&&s){const h=ml;n.position.set(h.x,h.y,h.z),n.rotation.set(h.rotX,h.rotY,h.rotZ),n.scale.setScalar(h.scale)}if(s&&e&&t){const{position:h,rotation:u}=eA(c,e);t.position.copy(h),t.rotation.set(u.x,u.y,u.z,"YXZ")}if(s&&r&&a){const h=Le.viewmodelWeaponOffset,u=Le.viewmodelWeaponPovOffset??{x:0,y:0,z:0};r.position.set(.25+h.x+u.x,-.4+h.y+u.y,-.7+h.z+u.z),r.rotation.set(0,0,0);const d=Le.viewmodelWeaponGripOffset??{x:0,y:0,z:0},f=Le.viewmodelWeaponRotationX??0,g=Le.viewmodelWeaponRotationY??0,v=Le.viewmodelWeaponRotationZ??0,p=Le.viewmodelWeaponScale??1,m=r.children[0];if(m){const S=m;S.position.set(d.x,d.y,d.z),S.rotation.set(Math.PI/2+f,g,v),S.scale.setScalar(p)}}else if(!o&&r){const h=Le.viewmodelWeaponOffset;r.position.set(h.x,h.y,h.z);const u=Le.viewmodelWeaponGripOffset??{x:0,y:0,z:0},d=Le.viewmodelWeaponRotationX??0,f=Le.viewmodelWeaponRotationY??0,g=Le.viewmodelWeaponRotationZ??0,v=r.children[0];if(v){const p=v;p.position.set(u.x,u.y,u.z),p.rotation.set(Math.PI/2+d,f,g)}}if(o&&r&&l){const{rightHand:h,leftHand:u,gLeftLocal:d}=o;h.getWorldPosition(fc),u.getWorldPosition(dr),dr.sub(fc);const f=dr.length(),g=d.length();if(f>1e-6&&g>1e-6){const p=ml.scale,m=f/(p*g),S=Math.max(.5,Math.min(m,50));dr.normalize(),Ed.copy(d).normalize(),Td.setFromUnitVectors(Ed,dr),r.position.copy(fc),l.worldToLocal(r.position),l.getWorldQuaternion(Ad),r.quaternion.copy(Ad).invert().multiply(Td);const M=r.children[0];M&&M.scale.setScalar(S)}}}function fi(i,e){for(const t of e){const n=i.getBoneByName(t);if(n)return n}}function wp(i){let e=null;return i.traverse(t=>{const n=t;n.isSkinnedMesh&&n.skeleton&&!e&&(e=n.skeleton)}),e}function nA(i){const e=wp(i);return e?e.getBoneByName(Of)??e.getBoneByName(Uf)??e.getBoneByName(Ff)??null:null}function iA(i){let e=i;for(;e.parent;)e=e.parent;e.updateMatrixWorld(!0)}function bd(i){if(!i)return null;const e=wp(i);if(!e)return null;const t=fi(e,[pS,mS,gS]),n=fi(e,[_S,vS,xS]),s=fi(e,[MS,AS,RS]),r=fi(e,[SS,TS,wS]),o=fi(e,[yS,ES,bS]),a=fi(e,[CS,PS,IS]);if(!t||!a)return null;const l=s??r??o;if(!l)return null;iA(i);const c=new D;if(c.setFromMatrixPosition(t.matrixWorld),n){const S=new D().setFromMatrixPosition(n.matrixWorld);c.add(S).multiplyScalar(.5)}const h=new D;t.getWorldDirection(h),c.addScaledVector(h,aS);const u=new D;u.setFromMatrixPosition(a.matrixWorld);const d=new D;if(s&&r){const S=new D().setFromMatrixPosition(s.matrixWorld),M=new D().setFromMatrixPosition(r.matrixWorld);d.addVectors(S,M).multiplyScalar(.5)}else d.setFromMatrixPosition(l.matrixWorld);const f=new D,g=o??r??s;f.setFromMatrixPosition(g.matrixWorld);const v=fi(e,[LS,DS,NS]),p=fi(e,[OS,US,FS]),m=new D;if(v&&p){const S=new D().setFromMatrixPosition(v.matrixWorld),M=new D().setFromMatrixPosition(p.matrixWorld);m.addVectors(S,M).multiplyScalar(.5)}else v?m.setFromMatrixPosition(v.matrixWorld):p?m.setFromMatrixPosition(p.matrixWorld):m.copy(u).lerp(new D(u.x,u.y-.9,u.z),1);return{head:c,bodyCenter:d,spineTop:f,pelvis:u,feet:m}}const sA=5,pc=7e3,wd=500,Rd="#4dd0e1",rA="/ui/weapon_rifle_white.png",oA="/ui/headshot_white.png";let Jn=null;const bs=[];let aA=1,gl=0;function cA(i){if(Jn)return;const e=document.createElement("div");e.id="killfeed",e.style.cssText="position:fixed;top:32px;right:32px;pointer-events:none;z-index:9999;display:flex;flex-direction:column;gap:6px;align-items:flex-end;font-family:system-ui,sans-serif;",i.appendChild(e),Jn=e}function lA(i,e){if(!Jn)return;const t=i?.sessionId??null,n=i?.state.players.get(e.killerId)??null,s=i?.state.players.get(e.victimId)??null,r=Cd(e.killerId,n?.id),o=Cd(e.victimId,s?.id),a=t!==null&&e.killerId===t,l=t!==null&&e.victimId===t,c=document.createElement("div");c.style.cssText="display:flex;align-items:center;gap:8px;padding:4px 11px;background:rgba(0,0,0,0.7);border-radius:4px;color:#fff;font-size:13px;transform-origin:top right;opacity:1;pointer-events:none;";const h=document.createElement("span");h.textContent=r,h.style.fontWeight="600",h.style.color=a?Rd:"#ffffff",c.appendChild(h);const u=document.createElement("img");if(u.src=uA(e.weaponId),u.alt=e.weaponId,u.style.height="18px",u.style.width="auto",u.style.filter="drop-shadow(0 0 2px rgba(0,0,0,0.8))",c.appendChild(u),e.isHeadshot){const g=document.createElement("img");g.src=oA,g.alt="Headshot",g.style.height="18px",g.style.width="auto",g.style.filter="drop-shadow(0 0 2px rgba(0,0,0,0.8))",c.appendChild(g)}const d=document.createElement("span");d.textContent=o,d.style.fontWeight="500",d.style.color=l?Rd:"#ffffff",c.appendChild(d),Jn.appendChild(c);const f={id:aA++,killerId:e.killerId,victimId:e.victimId,weaponId:e.weaponId,isHeadshot:e.isHeadshot,createdAtMs:gl,element:c};for(bs.push(f);bs.length>sA;){const g=bs.shift();g&&g.element.parentElement===Jn&&Jn.removeChild(g.element)}}function hA(i){if(Jn){gl+=i*1e3;for(let e=0;e<bs.length;e++){const t=bs[e],n=gl-t.createdAtMs;if(n>=pc+wd){t.element.parentElement===Jn&&Jn.removeChild(t.element),bs.splice(e,1),e--;continue}let s=1;if(n>pc){const r=(n-pc)/wd;s=Math.max(0,1-r)}t.element.style.opacity=s.toFixed(2)}}}function Cd(i,e){const t=e&&e.trim().length>0?e:i;return kf(t)}function uA(i){return rA}const Pd={ammo:30,maxAmmo:30};class dA{constructor(e){this.ctx=e}tick(e){const{state:t,input:n,movement:s,camera:r,physics:o,netClient:a,remotePlayerSync:l}=this.ctx,c=n.getState();if(!this.ctx.getIsPlaying()){n.tick();return}t.clientShootCooldownTicks>0&&t.clientShootCooldownTicks--,t.clientReloadTicks>0&&t.clientReloadTicks--,c.debugModeJustPressed&&(t.debugMode=!t.debugMode),s.update(e,c,o);const h=s.getSnapshot(),u=h.crouching?Mu:ks;t.currentEyeHeight=Ns.lerp(t.currentEyeHeight,u,1-Math.exp(-e/this.ctx.crouchTransitionTau)),r.setTargetPosition(h.position.x,h.position.y+t.currentEyeHeight,h.position.z),r.setRotation(h.yaw,h.pitch);const d=a.getRoom();if(d){const f=d.state.players.get(d.sessionId);if(f){if(t.lastLocalHealth!==null&&t.lastLocalHealth<=0&&f.health>0){l.syncLocalSpawnFromServer(d);const S=s.getSnapshot();t.currentEyeHeight=S.crouching?Mu:ks,r.setTargetPosition(S.position.x,S.position.y+t.currentEyeHeight,S.position.z),r.setRotation(S.yaw,S.pitch),r.snapToTarget(),t.localRespawnNoLerpTime=.3}t.lastLocalHealth=f.health;const g=f.ammo,v=f.maxAmmo,p=t.debugMode;c.reload&&g<v&&t.clientReloadTicks<=0&&(t.clientReloadTicks=Nf),c.shoot&&(g>0||p)&&t.clientReloadTicks<=0&&t.clientShootCooldownTicks<=0&&f.health>0&&(t.shotThisFrame=!0,t.clientShootCooldownTicks=lS)}}n.tick()}}class fA{constructor(e){this.ctx=e}tick(e){const{state:t,input:n,movement:s,camera:r,netClient:o,remotePlayerSync:a}=this.ctx;if(!this.ctx.getIsPlaying())return;const l=o.getRoom();if(!l)return;const c=n.getState(),h=s.getSnapshot(),u=t.lastHitboxPositions??void 0,d=c.shoot?r.getEyePosition():void 0,f=r.getAimDirection(),g=JT(c,t.inputTick,h.position,u,{x:f.x,y:f.y,z:f.z},t.debugMode,d);o.sendInput(g),t.inputTick++,a.reconcile(l)}}class pA{constructor(e){this.ctx=e}render(e){const{state:t,movement:n,camera:s,viewmodelState:r,tracerSystem:o,muzzleFlashPov:a}=this.ctx,l=n.getSnapshot(),c=this.ctx.playerAnimationSystem;if(c&&this.ctx.localPlayerMixer&&c.playStaticIdlePose(this.ctx.localPlayerMixer),t.localRespawnNoLerpTime>0?(s.snapToTarget(),t.localRespawnNoLerpTime-=e,t.localRespawnNoLerpTime<0&&(t.localRespawnNoLerpTime=0)):s.update(e),c&&this.ctx.localPlayerMixer&&this.ctx.localPlayerMixer.update(e),this.ctx.playerViewModel&&this.ctx.playerViewModel.updateMatrixWorld(!0),r){if(t.shotThisFrame&&r.muzzleNodeRef){const d=s.getAimDirection(),v=s.getCamera().position.clone().clone().addScaledVector(d,this.ctx.tracerFirstPersonLength),p=new D;r.muzzleNodeRef.getWorldPosition(p);const m=v.clone().sub(p).normalize(),S=v.distanceTo(p);o.spawnTracer(p,m,S),a&&a.trigger(r.muzzleNodeRef)}const h=t.clientReloadTicks>0?1-t.clientReloadTicks/Nf:0,u={dt:e,velocity:l.velocity,state:l.state,crouching:l.crouching,yaw:l.yaw,pitch:l.pitch,shotThisFrame:t.shotThisFrame,reloadProgress:h,isDashing:n.isDashing()};bp(r,u),a&&a.update(e*1e3),t.shotThisFrame=!1}this.ctx.remotePlayerSync.updateRemoteMixers(e)}}class mA{constructor(e){this.ctx=e}render(e){const{state:t,movement:n,netClient:s,remotePlayerSync:r,debugHitboxes:o,sceneManager:a}=this.ctx,l=n.getSnapshot(),{hitboxDummy:c,hitboxDummyMixer:h,viewmodelState:u}=this.ctx,d=this.ctx.playerAnimationSystem;if(c){c.position.set(l.position.x,l.position.y,l.position.z),c.rotation.set(0,l.yaw+Math.PI,0),d&&h&&(d.playStaticIdlePose(h),h.update(e));const p=bd(c);p?(t.lastHitboxPositionsRaw=p,t.lastHitboxPositions={head:{x:p.head.x,y:p.head.y,z:p.head.z},bodyCenter:{x:p.bodyCenter.x,y:p.bodyCenter.y,z:p.bodyCenter.z},spineTop:{x:p.spineTop.x,y:p.spineTop.y,z:p.spineTop.z},pelvis:{x:p.pelvis.x,y:p.pelvis.y,z:p.pelvis.z},feet:{x:p.feet.x,y:p.feet.y,z:p.feet.z}}):(t.lastHitboxPositionsRaw=null,t.lastHitboxPositions=null)}else t.lastHitboxPositionsRaw=null,t.lastHitboxPositions=null;r.update(s.getRoom(),e),o.setVisible(t.debugMode,u?.viewmodelIsArmsOnly??!1);const f=s.getRoom(),g=t.debugMode?n.position:null,v=f?Array.from(f.state.players.entries()).filter(([p])=>p!==f.sessionId).filter(([,p])=>p.health>0).map(([p,m])=>{const S=r.getRemotePlayerMeshes().get(p),M=S?bd(S):void 0;return{id:p,x:m.x,y:m.y,z:m.z,hitboxPositions:M??void 0}}):[];o.update(g,v,t.lastHitboxPositionsRaw??void 0),a.render(this.ctx.camera.getCamera())}}class gA{constructor(e){this.ctx=e}render(e){const{state:t,movement:n,camera:s,netClient:r,tracerSystem:o,impactSystem:a}=this.ctx,l=n.getSnapshot();EM(r.getRoom(),s.getCamera(),e);const c=r.getRoom(),h=c?c.state.players.get(c.sessionId):null,u=h?.shield??Er,d=h?.maxShield??Er,f=h?.health??ol,g=h?.maxHealth??ol,v=h?.ammo??Pd.ammo,p=h?.maxAmmo??Pd.maxAmmo,m=h?.id&&h.id.trim().length>0?h.id:c?.sessionId??"Player";if(lM(u,d,f,g,v,p,m,t.debugMode,n.getDashCooldownRemaining(),n.getDashCooldownTotal(),n.isDashing()),zM(e,u,Er,f),IM(l.yaw,l.pitch,e,t.debugMode),hA(e),JM(e),o.update(e*1e3),a.update(e*1e3),this.ctx.debugOverlayEnabled){const S=c!==null?{connected:!0,playerCount:c.state.players.size}:{connected:!1,playerCount:0};IE(l.velocity,l.state,this.ctx.input.getState().sprint,S,t.debugMode,RM(),r.getPing(),t.debugMode?n.getGroundDebugInfo():void 0)}}}class _A{sceneManager;movement;playerAnimationSystem=null;playerTemplate=null;weaponTemplate3P=null;remotePlayerMeshes=new Map;remotePlayerMixers=new Map;remotePlayerWeaponContainers=new Map;lastShotTickSeen=new Map;remotePlayerMuzzleFlashes=new Map;muzzleFlashTextures=[];hasAppliedInitialSpawn=!1;lastHealthByPlayer=new Map;_handPos3p=new D;_handQuat3p=new nn;_offsetVec3p=new D;tracerSystem;impactSystem;constructor(e){this.sceneManager=e.sceneManager,this.movement=e.movement,this.playerAnimationSystem=e.playerAnimationSystem??null,this.tracerSystem=e.tracerSystem,this.impactSystem=e.impactSystem}onShot(e){if(!this.tracerSystem)return;const t=this.remotePlayerWeaponContainers.get(e.shooterId);if(!t)return;const n=new D;t.muzzleNode.getWorldPosition(n);const s=new D(e.dx,e.dy,e.dz).normalize(),r=new D(e.ox,e.oy,e.oz);let o=Le.tracerFirstPersonLength??20,a=null;if(e.hitX!==void 0&&e.hitY!==void 0&&e.hitZ!==void 0){a=new D(e.hitX,e.hitY,e.hitZ),o=n.distanceTo(a);const l=a.clone().sub(n).normalize();this.tracerSystem.spawnTracer(n,l,o)}else{const l=s;o=Le.tracerFirstPersonLength??20,this.tracerSystem.spawnTracer(n,l,o),a=r.clone().addScaledVector(s,o)}this.impactSystem&&a&&this.impactSystem.spawnImpact(a)}setPlayerAnimationSystem(e){this.playerAnimationSystem=e}setPlayerTemplate(e){this.playerTemplate=e}setWeaponTemplate3P(e){this.weaponTemplate3P=e}setMuzzleFlashTextures(e){this.muzzleFlashTextures=e}getRemotePlayerMeshes(){return this.remotePlayerMeshes}getThirdPersonWeaponCfg(e){const t=Le.thirdPersonWeaponOffsets[e];return t||{x:Le.thirdPersonWeaponOffset.x,y:Le.thirdPersonWeaponOffset.y,z:Le.thirdPersonWeaponOffset.z,rotX:Le.thirdPersonWeaponRotationX,rotY:Le.thirdPersonWeaponRotationY,rotZ:Le.thirdPersonWeaponRotationZ,scale:Le.thirdPersonWeaponScale}}addRemotePlayerMesh(e,t,n){if(e===t||this.remotePlayerMeshes.has(e))return;const s=this.sceneManager.getScene();let r;this.playerTemplate?(r=Gl(this.playerTemplate),r.updateMatrixWorld(!0),Zl("orange").then(a=>{a&&Jl(r,a)})):(r=Dr(),r.material.color.setHex(16737792)),r.position.set(n.x,n.y,n.z),r.rotation.set(0,n.yaw+Math.PI,0),s.add(r),this.remotePlayerMeshes.set(e,r);const o=new Uo(r);if(this.playerAnimationSystem&&this.playerAnimationSystem.playClip(o,n.animationState||"idle"),this.remotePlayerMixers.set(e,o),this.weaponTemplate3P){const a=nA(r),l=this.weaponTemplate3P.clone(!0),c=l.getObjectByName("muzzle")??l.getObjectByName("Muzzle")??l,h=new $t;if(h.add(l),s.add(h),l.traverse(u=>{u.frustumCulled=!1;const d=u;if(d.isMesh){const f=Array.isArray(d.material)?d.material:[d.material];for(const g of f)g&&"side"in g&&(g.side=mn)}}),this.remotePlayerWeaponContainers.set(e,{container:h,weaponScene:l,rightHandBone:a,muzzleNode:c}),this.lastShotTickSeen.set(e,0),this.muzzleFlashTextures.length>0){const u=new Ap({durationMs:Le.muzzleFlashDurationMs,scale:Le.muzzleFlashScale3P});u.setTextures(this.muzzleFlashTextures),this.remotePlayerMuzzleFlashes.set(e,u)}}}removeRemotePlayerMesh(e){const t=this.sceneManager.getScene(),n=this.remotePlayerMeshes.get(e),s=this.remotePlayerMixers.get(e);n&&(t.remove(n),this.remotePlayerMeshes.delete(e)),s&&(s.stopAllAction(),this.remotePlayerMixers.delete(e));const r=this.remotePlayerWeaponContainers.get(e);r&&(t.remove(r.container),this.remotePlayerWeaponContainers.delete(e)),this.lastShotTickSeen.delete(e);const o=this.remotePlayerMuzzleFlashes.get(e);o&&(o.dispose(),this.remotePlayerMuzzleFlashes.delete(e))}setup(e){const t=e.sessionId,n=(r,o)=>{this.addRemotePlayerMesh(o,t,r)},s=(r,o)=>{this.removeRemotePlayerMesh(o)};e.state.players.onAdd(n,!0),e.state.players.onRemove(s)}syncLocalSpawnFromServer(e){const t=e.state.players.get(e.sessionId);if(!t)return;const n=this.movement;n.position.x=t.x,n.position.y=t.y,n.position.z=t.z,n.velocity.x=t.vx,n.velocity.y=t.vy,n.velocity.z=t.vz,n.yaw=t.yaw,n.pitch=t.pitch,this.hasAppliedInitialSpawn=!0}waitForLocalSpawnAndSync(e){return e.state.players.get(e.sessionId)?(this.syncLocalSpawnFromServer(e),Promise.resolve()):new Promise(n=>{const s=(o,a)=>{a===e.sessionId&&(r(),this.syncLocalSpawnFromServer(e),n())},r=e.state.players.onAdd(s,!0)})}reconcile(e){if(!e)return;const t=e.state.players.get(e.sessionId);if(!t)return;const n=this.movement;if(!this.hasAppliedInitialSpawn){this.syncLocalSpawnFromServer(e);return}const s=t.x-n.position.x,r=t.y-n.position.y,o=t.z-n.position.z,a=Math.sqrt(s*s+r*r+o*o),{reconcileMin:l,reconcileYMin:c,reconcileThreshold:h,reconcileLerp:u,reconcileLerpGentle:d}=Le.tuning;if(a<=l)return;const f=a>=h?u:d,v=n.getSnapshot().state==="airborne",p=t.y<=.02,m=Math.abs(r)<c,S=v&&p||m;n.position.x+=s*f,n.position.z+=o*f,S||(n.position.y+=r*f,n.velocity.y+=(t.vy-n.velocity.y)*f),n.velocity.x+=(t.vx-n.velocity.x)*f,n.velocity.z+=(t.vz-n.velocity.z)*f,n.yaw+=((t.yaw-n.yaw+Math.PI)%(2*Math.PI)-Math.PI)*f,n.pitch+=(t.pitch-n.pitch)*f}update(e,t){if(!e)return;const n=e.sessionId,s=1-Math.exp(-t/Le.tuning.remoteInterpTau);e.state.players.forEach((l,c)=>{if(c===n)return;let h=this.remotePlayerMeshes.get(c);if(h||(this.addRemotePlayerMesh(c,n,l),h=this.remotePlayerMeshes.get(c)),h){const u=this.lastHealthByPlayer.get(c),d=u!==void 0&&u<=0&&l.health>0;h.visible=l.health>0;const f=this.remotePlayerWeaponContainers.get(c);if(f&&(f.container.visible=h.visible),h.visible){if(d){h.position.set(l.x,l.y,l.z);const v=l.yaw+Math.PI;h.rotation.set(0,v,0)}else{h.position.x+=(l.x-h.position.x)*s,h.position.y+=(l.y-h.position.y)*s,h.position.z+=(l.z-h.position.z)*s;const p=(l.yaw+Math.PI-h.rotation.y+Math.PI)%(2*Math.PI)-Math.PI;h.rotation.y+=p*s}const g=this.remotePlayerMixers.get(c);if(g&&this.playerAnimationSystem){const v=l.animationState||"idle",p={};v==="jump"&&(p.vy=l.vy),l.animationTimeScale!==1&&(p.timeScale=l.animationTimeScale),this.playerAnimationSystem.playClip(g,v,Object.keys(p).length?p:void 0)}if(f){h.updateMatrixWorld(!0);const v=f.rightHandBone,p=this.getThirdPersonWeaponCfg(l.animationState||"idle"),m=Le.thirdPersonWeaponGripOffset;v?(v.getWorldPosition(this._handPos3p),v.getWorldQuaternion(this._handQuat3p),this._offsetVec3p.set(p.x,p.y,p.z).applyQuaternion(this._handQuat3p),f.container.position.copy(this._handPos3p).add(this._offsetVec3p),f.container.quaternion.copy(this._handQuat3p)):(h.getWorldPosition(this._handPos3p),h.getWorldQuaternion(this._handQuat3p),this._offsetVec3p.set(.3,.5,0).applyQuaternion(this._handQuat3p),f.container.position.copy(this._handPos3p).add(this._offsetVec3p),f.container.quaternion.copy(this._handQuat3p)),f.weaponScene.position.set(m.x,m.y,m.z),f.weaponScene.rotation.set(Math.PI/2+p.rotX,p.rotY,p.rotZ),f.weaponScene.scale.setScalar(p.scale);const S=this.lastShotTickSeen.get(c)??0;if(l.lastShotTick>S){this.lastShotTickSeen.set(c,l.lastShotTick);const M=this.remotePlayerMuzzleFlashes.get(c);M&&M.trigger(f.muzzleNode)}}}this.lastHealthByPlayer.set(c,l.health)}});const r=t*1e3;this.remotePlayerMuzzleFlashes.forEach(l=>l.update(r));const o=[],a=new Set;e.state.players.forEach((l,c)=>a.add(String(c))),this.remotePlayerMeshes.forEach((l,c)=>{a.has(String(c))||o.push(c)}),o.forEach(l=>this.removeRemotePlayerMesh(l))}updateRemoteMixers(e){this.remotePlayerMixers.forEach(t=>t.update(e))}}function vA(i,e){const t=document.createElement("div");t.id="pause-menu-overlay",t.style.cssText=`
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
    `,c.addEventListener("click",h=>{h.preventDefault(),l()}),c}return r.appendChild(o("Resume Game",e.onResume)),r.appendChild(o("Go back to lobby",e.onBackToLobby)),r.appendChild(o("Settings",e.onOpenSettings)),n.appendChild(r),t.appendChild(n),i.appendChild(t),{show:()=>{t.style.display="flex"},hide:()=>{t.style.display="none"}}}const Rp="browsershooter:performanceSettings";let Cp=xA();function xA(){if(typeof window>"u")return{renderScale:1,aaEnabled:!1,bulletTracersEnabled:!0};try{const i=window.localStorage.getItem(Rp);if(!i)return{renderScale:1,aaEnabled:!1,bulletTracersEnabled:!0};const e=JSON.parse(i),t=e&&typeof e.renderScale=="number"&&e.renderScale>0?e.renderScale:1,n=!!e?.aaEnabled,s=e&&typeof e.bulletTracersEnabled=="boolean"?e.bulletTracersEnabled:!0;return{renderScale:t,aaEnabled:n,bulletTracersEnabled:s}}catch{return{renderScale:1,aaEnabled:!1,bulletTracersEnabled:!0}}}function yA(i){if(!(typeof window>"u"))try{window.localStorage.setItem(Rp,JSON.stringify(i))}catch{}}function Pp(){return{...Cp}}function SA(i){const e={renderScale:Number.isFinite(i.renderScale)&&i.renderScale>0?i.renderScale:1,aaEnabled:!!i.aaEnabled,bulletTracersEnabled:typeof i.bulletTracersEnabled=="boolean"?i.bulletTracersEnabled:!0};Cp=e,yA(e)}const Ip="browsershooter:inputSettings";let _l=MA();function MA(){if(typeof window>"u")return{mouseSensitivity:1};try{const i=window.localStorage.getItem(Ip);if(!i)return{mouseSensitivity:1};const e=JSON.parse(i);return{mouseSensitivity:e&&typeof e.mouseSensitivity=="number"?e.mouseSensitivity:1}}catch{return{mouseSensitivity:1}}}function EA(i){if(!(typeof window>"u"))try{window.localStorage.setItem(Ip,JSON.stringify(i))}catch{}}function Lp(){return{..._l}}function TA(i){_l={mouseSensitivity:typeof i.mouseSensitivity=="number"&&Number.isFinite(i.mouseSensitivity)?Math.max(.2,Math.min(3,i.mouseSensitivity)):1},EA(_l)}var Dp=(i=>(i.Performance="performance",i.Keyboard="keyboard",i.Mouse="mouse",i))(Dp||{});function AA(i,e){const t=document.createElement("div");t.id="settings-menu-overlay",t.style.cssText=`
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
  `,o.addEventListener("click",oe=>{oe.preventDefault(),e.onClose()}),s.appendChild(r),s.appendChild(o),n.appendChild(s);const a=document.createElement("div");a.style.cssText=`
    display: flex;
    gap: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    margin-bottom: 12px;
  `;function l(oe){const me=document.createElement("button");return me.type="button",me.textContent=oe,me.style.cssText=`
      padding: 6px 10px 8px;
      font-size: 13px;
      border: none;
      border-bottom: 2px solid transparent;
      background: transparent;
      color: #b0d9ff;
      cursor: pointer;
    `,me}const c=l("Performance"),h=l("Keyboard"),u=l("Mouse");a.appendChild(c),a.appendChild(h),a.appendChild(u),n.appendChild(a);const d=document.createElement("div");d.style.cssText=`
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
  `,n.appendChild(f);let g;function v(oe){f.textContent=oe,f.style.opacity="1",g!==void 0&&window.clearTimeout(g),g=window.setTimeout(()=>{f.style.opacity="0"},1400)}const p=document.createElement("div");p.style.cssText=`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `;const m=document.createElement("div");m.style.cssText=`
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
  `;const T=[{label:"100%",value:1},{label:"80%",value:.8},{label:"60%",value:.6}];T.forEach(oe=>{const me=document.createElement("option");me.value=String(oe.value),me.textContent=oe.label,M.appendChild(me)}),m.appendChild(S),m.appendChild(M),p.appendChild(m);const I=document.createElement("div");I.style.cssText=`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;const P=document.createElement("div");P.textContent="MSAA antialiasing",P.style.cssText=`
    font-size: 14px;
    color: #c7e3ff;
  `;const C=document.createElement("input");C.type="checkbox",C.style.cssText=`
    width: 16px;
    height: 16px;
  `,I.appendChild(P),I.appendChild(C),p.appendChild(I);const N=document.createElement("div");N.style.cssText=`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;const X=document.createElement("div");X.textContent="Bullet tracers",X.style.cssText=`
    font-size: 14px;
    color: #c7e3ff;
  `;const E=document.createElement("input");E.type="checkbox",E.style.cssText=`
    width: 16px;
    height: 16px;
  `,N.appendChild(X),N.appendChild(E),p.appendChild(N);const b=document.createElement("div");b.style.cssText=`
    display: flex;
    justify-content: flex-end;
    margin-top: 6px;
  `;const G=document.createElement("button");G.type="button",G.textContent="Apply",G.style.cssText=`
    padding: 7px 14px;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid rgba(140,220,255,0.9);
    background: linear-gradient(135deg, #0d1a28, #14314a);
    color: #e4f5ff;
    cursor: pointer;
  `,G.addEventListener("click",oe=>{oe.preventDefault();const Oe={renderScale:Number(M.value)||1,aaEnabled:C.checked,bulletTracersEnabled:E.checked};e.onApplyPerformance(Oe),v("Performance changes applied")}),b.appendChild(G),p.appendChild(b);const V=document.createElement("div");V.style.cssText=`
    display: none;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    color: #c7e3ff;
  `;const Y=document.createElement("div");Y.textContent="Keyboard bindings are currently fixed (WASD, Space, C, R). Custom keybinds will be added later.",V.appendChild(Y);const Q=document.createElement("div");Q.style.cssText=`
    display: none;
    flex-direction: column;
    gap: 12px;
  `;const W=document.createElement("div");W.style.cssText=`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  `;const Z=document.createElement("div");Z.textContent="Mouse sensitivity",Z.style.cssText=`
    font-size: 14px;
    color: #c7e3ff;
  `;const K=document.createElement("span");K.style.cssText=`
    font-size: 13px;
    color: #9fd0ff;
    margin-left: 8px;
  `;const ce=document.createElement("input");ce.type="range",ce.min="0.5",ce.max="2",ce.step="0.1",ce.style.cssText=`
    flex: 1;
    margin-left: 16px;
  `;const le=document.createElement("div");le.style.cssText=`
    display: flex;
    align-items: center;
    flex: 1;
  `,le.appendChild(ce),le.appendChild(K),W.appendChild(Z),W.appendChild(le),Q.appendChild(W);const te=document.createElement("div");te.style.cssText=`
    display: flex;
    justify-content: flex-end;
    margin-top: 6px;
  `;const be=document.createElement("button");be.type="button",be.textContent="Apply",be.style.cssText=`
    padding: 7px 14px;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid rgba(140,220,255,0.9);
    background: linear-gradient(135deg, #0d1a28, #14314a);
    color: #e4f5ff;
    cursor: pointer;
  `,be.addEventListener("click",oe=>{oe.preventDefault();const Oe={mouseSensitivity:Number(ce.value)||1};e.onApplyMouse(Oe),v("Mouse settings applied")}),te.appendChild(be),Q.appendChild(te),d.appendChild(p),d.appendChild(V),d.appendChild(Q);function _e(){const oe=Pp(),me=T.reduce((We,rt)=>{const Xe=Math.abs(We.value-oe.renderScale);return Math.abs(rt.value-oe.renderScale)<Xe?rt:We},T[0]);M.value=String(me.value),C.checked=oe.aaEnabled,E.checked=typeof oe.bulletTracersEnabled=="boolean"?oe.bulletTracersEnabled:!0;const Oe=Lp(),Ne=Math.max(.5,Math.min(2,Oe.mouseSensitivity||1));ce.value=String(Ne),K.textContent=`${Ne.toFixed(1)}x`}function $(){for(const oe of[c,h,u])oe.style.borderBottomColor="transparent",oe.style.color="#b0d9ff";p.style.display="none",V.style.display="none",Q.style.display="none"}function ie(oe){$(),oe==="performance"?(c.style.borderBottomColor="#8bd3ff",c.style.color="#e4f5ff",p.style.display="flex"):oe==="keyboard"?(h.style.borderBottomColor="#8bd3ff",h.style.color="#e4f5ff",V.style.display="flex"):oe==="mouse"&&(u.style.borderBottomColor="#8bd3ff",u.style.color="#e4f5ff",Q.style.display="flex")}return c.addEventListener("click",oe=>{oe.preventDefault(),ie("performance")}),h.addEventListener("click",oe=>{oe.preventDefault(),ie("keyboard")}),u.addEventListener("click",oe=>{oe.preventDefault(),ie("mouse")}),t.appendChild(n),i.appendChild(t),{show:oe=>{_e(),t.style.display="flex",ie(oe??"performance")},hide:()=>{t.style.display="none"}}}const bA=.01,wA=new D(0,1,0);class RA{tracers=[];enabled=!0;shotCounter=0;config;lineRadius;lastTracer=null;constructor(e,t){this.config=t,this.lineRadius=Math.max(.001,t.lineRadius??bA);const n=Math.max(1,t.maxTracers|0),s=new Fr(1,1,1,6);for(let r=0;r<n;r++){const o=new wn({color:t.color,transparent:!0,opacity:.7,depthWrite:!1,blending:Ar}),a=new xt(s,o);a.visible=!1,e.add(a),this.tracers.push({mesh:a,material:o,start:new D,dir:new D(0,0,1),fullLength:0,active:!1,remainingMs:0})}}setEnabled(e){if(this.enabled=e,!e)for(const t of this.tracers)t.active=!1,t.remainingMs=0,t.mesh.visible=!1}setTracerMesh(e,t){const n=this.lineRadius;e.mesh.position.copy(e.start).addScaledVector(e.dir,t*.5),e.mesh.scale.set(n*2,t,n*2),e.mesh.quaternion.setFromUnitVectors(wA,e.dir),e.mesh.visible=!0}spawnTracer(e,t,n){if(!this.enabled)return;const s=this.config.everyNthShot;if(this.shotCounter++,s>1&&this.shotCounter%s!==0)return;const r=t instanceof D?t.clone():new D(t.x,t.y,t.z);if(r.length()===0||n<=0)return;const a=e instanceof D?e.clone():new D(e.x,e.y,e.z),l=r.normalize();let c=this.tracers.find(h=>!h.active);c||(c=this.tracers[0]),c.start.copy(a),c.dir.copy(l),c.fullLength=n,c.active=!0,c.remainingMs=this.config.lifetimeMs,this.setTracerMesh(c,n),c.material.opacity=.8,this.lastTracer=c}retargetLast(e,t,n){if(!this.enabled)return;const s=this.lastTracer;if(!s||!s.active)return;const r=t instanceof D?t.clone():new D(t.x,t.y,t.z);if(r.length()===0||n<=0)return;const a=e instanceof D?e.clone():new D(e.x,e.y,e.z);s.start.copy(a),s.dir.copy(r.normalize()),s.fullLength=n,s.remainingMs=Math.max(s.remainingMs,this.config.lifetimeMs*.4),this.setTracerMesh(s,n)}update(e){if(this.enabled)for(const t of this.tracers){if(!t.active)continue;t.remainingMs-=e;const n=Math.max(0,t.remainingMs)/this.config.lifetimeMs,s=t.fullLength*n;this.setTracerMesh(t,s);const r=n*n;t.material.opacity=.8*r,t.remainingMs<=0&&(t.active=!1,t.mesh.visible=!1)}}}class CA{impacts=[];config;constructor(e,t){this.config=t;const s=(()=>{if(typeof document>"u")return null;const a=64,l=document.createElement("canvas");l.width=a,l.height=a;const c=l.getContext("2d");if(!c)return null;c.fillStyle="rgba(0, 0, 0, 0)",c.fillRect(0,0,a,a);const h=a/2,u=a/2,d=a*.42,f=c.createRadialGradient(h,u,0,h,u,d);f.addColorStop(0,"rgba(255, 252, 240, 1)"),f.addColorStop(.35,"rgba(255, 230, 180, 0.95)"),f.addColorStop(.7,"rgba(255, 180, 100, 0.4)"),f.addColorStop(1,"rgba(255, 120, 50, 0)"),c.fillStyle=f,c.beginPath(),c.arc(h,u,d,0,Math.PI*2),c.fill(),c.strokeStyle="rgba(255, 248, 220, 0.95)",c.lineWidth=2;const g=8,v=d*.25,p=d*1.05;for(let S=0;S<g;S++){const M=S/g*Math.PI*2,T=h+Math.cos(M)*v,I=u+Math.sin(M)*v,P=h+Math.cos(M)*p,C=u+Math.sin(M)*p;c.beginPath(),c.moveTo(T,I),c.lineTo(P,C),c.stroke()}const m=new _f(l);return m.format=hn,m.premultiplyAlpha=!1,m.center.set(.5,.5),m.needsUpdate=!0,m})(),r=new Dl({map:s,color:t.color,transparent:!0,opacity:.9,depthWrite:!1,blending:Ar,alphaTest:.12}),o=Math.max(1,t.maxImpacts|0);for(let a=0;a<o;a++){const l=new ff(r.clone());l.scale.set(t.size,t.size,1),l.visible=!1,e.add(l),this.impacts.push({sprite:l,active:!1,remainingMs:0})}}spawnImpact(e){const t=e instanceof D?e.clone():new D(e.x,e.y,e.z);let n=this.impacts.find(s=>!s.active);n||(n=this.impacts[0]),n.sprite.position.copy(t),n.sprite.visible=!0,n.remainingMs=this.config.lifetimeMs,n.active=!0,n.sprite.material.opacity=.9}update(e){for(const t of this.impacts){if(!t.active)continue;t.remainingMs-=e;const n=Math.max(0,t.remainingMs)/this.config.lifetimeMs,s=t.sprite.material;s.opacity=.9*n,t.remainingMs<=0&&(t.active=!1,t.sprite.visible=!1)}}}const Ht=document.getElementById("app");if(!Ht)throw new Error("No #app");const Ln=document.createElement("canvas");Ht.appendChild(Ln);const Id=new URLSearchParams(window.location.search).get("tuner"),PA=new URLSearchParams(window.location.search).get("editor");if(Id==="1")ca(()=>import("./TunerBoot-DBrRuJed.js"),__vite__mapDeps([0,1])).then(i=>i.bootTuner(Ht,Ln));else if(Id==="3p")ca(()=>import("./Tuner3PBoot-C1imQ91W.js"),__vite__mapDeps([2,1])).then(i=>i.bootTuner3P(Ht,Ln));else if(PA==="1")ca(()=>import("./main-BMNYF5BU.js"),[]).then(i=>i.bootEditor(Ht,{initViewmodel:async e=>{const t=await pd(Le.playerModelUrl),n={getCamera:()=>e},s=await Md(t.scene,t.animations,n),r=new ea(Le.animationClipNames);r.init(s.viewmodelAnimations);const o=new Uo(s.viewmodelModel);return{viewmodelState:s.viewmodelState,updateViewmodelFrame:bp,updateViewmodelAnimation(a){r.playStaticIdlePose(o),o.update(a)}}}}));else{let i=function(){const te=Ln.clientWidth||window.innerWidth,be=Ln.clientHeight||window.innerHeight;return{w:te,h:be}},e=function(){p.disconnect()},t=function(te){M=te},n=function(){M!=="paused"&&(!T&&Ht&&(T=vA(Ht,{onResume:()=>s(),onBackToLobby:()=>{p.disconnect(),window.location.reload()},onOpenSettings:()=>r()})),T?.show(),I?.hide(),t("paused"),f.isPointerLocked()&&document.exitPointerLock())},s=function(){M!=="playing"&&(T?.hide(),I?.hide(),t("playing"),f.requestPointerLock(Ln))},r=function(){!I&&Ht&&(I=AA(Ht,{onClose:()=>{M==="settings"&&n()},onApplyPerformance:te=>{SA(te),c.setPerformance(te),h.setEnabled(te.bulletTracersEnabled)},onApplyMouse:te=>{TA(te),f.setMouseSensitivity(te.mouseSensitivity)}})),I?.show(Dp.Performance),T?.hide(),t("settings")};const{w:o,h:a}=i(),l=Pp(),c=new sM(Ln,{antialias:l.aaEnabled,renderScale:l.renderScale}),h=new RA(c.getScene(),{maxTracers:32,lifetimeMs:Le.tracerMaxLifetimeMs,color:Le.tracerColor,everyNthShot:Le.tracerEveryNthShot,lineRadius:Le.tracerLineRadius}),u=new CA(c.getScene(),{maxImpacts:32,lifetimeMs:Le.tracerImpactLifetimeMs,color:Le.tracerColor,size:Le.tracerImpactSize});h.setEnabled(l.bulletTracersEnabled??Le.tracerEnabledDefault);const d=new tM(90,o/a||16/9,.1,1e3);c.getScene().add(d.getCamera()),c.resize(o,a),d.resize(o,a);const f=new eM,g=Lp();f.setMouseSensitivity(g.mouseSensitivity),f.requestPointerLock(Ln);const v=new iM,p=new oT,m=new _A({sceneManager:c,movement:v,tracerSystem:h,impactSystem:u});window.addEventListener("beforeunload",te=>{e(),f.isPointerLocked()&&(te.preventDefault(),te.returnValue="")}),window.addEventListener("pagehide",e),Ln.addEventListener("mousedown",te=>te.button===0&&f.setShoot(!0)),Ln.addEventListener("mouseup",te=>te.button===0&&f.setShoot(!1)),QM(Ht),cM(Ht),SM(Ht),CM(Ht),cA(Ht),BM(Ht),qM(Ht),Le.debugOverlay&&PE(Ht);let S;(te=>{te.Playing="playing",te.Paused="paused",te.Settings="settings"})(S||(S={}));let M="playing",T=null,I=null;window.addEventListener("keydown",te=>{te.code==="Escape"&&(M==="playing"?(te.preventDefault(),n()):M==="paused"?(te.preventDefault(),s()):M==="settings"&&(te.preventDefault(),n()))});const P=new FE(c.getScene()),C={raycast:()=>!1},N=new qS,X=new KS,b={state:ZT(ks),getIsPlaying:()=>M==="playing",input:f,movement:v,camera:d,physics:C,netClient:p,remotePlayerSync:m,sceneManager:c,tracerSystem:h,impactSystem:u,debugHitboxes:P,crouchTransitionTau:Le.tuning.crouchTransitionTau,tracerFirstPersonLength:Le.tracerFirstPersonLength??20,debugOverlayEnabled:!!Le.debugOverlay,localPlayerMixer:null,playerViewModel:null,viewmodelState:null,hitboxDummy:null,hitboxDummyMixer:null,muzzleFlashPov:null};let G=null,V=null,Y=null,Q=null,W,Z=null,K=null,ce=null;async function le(){gs("Loading characters and arena…",15);const te=await pd(Le.playerModelUrl);Q=te.scene;const be=te.animations,_e=await Md(Q,be,d);G=_e.viewmodelState.playerViewModel,V=_e.viewmodelState,gs("Loading characters and arena…",40),W=new ea(Le.animationClipNames),W.init(_e.viewmodelAnimations),m.setPlayerTemplate(Q),m.setWeaponTemplate3P(_e.weaponTemplate3P),m.setPlayerAnimationSystem(W);const $=await XT(Le.muzzleFlashUrls);if(ce=new Ap({durationMs:Le.muzzleFlashDurationMs,scale:Le.muzzleFlashScalePov}),ce.setTextures($),m.setMuzzleFlashTextures($),_e.viewmodelAnimations.length>0&&(Y=new Uo(_e.viewmodelModel),W.playStaticIdlePose(Y)),Q){const ie=Gl(Q);ie.visible=!1,c.getScene().add(ie),Z=ie,be.length>0&&(K=new Uo(ie),W.playStaticIdlePose(K))}b.playerAnimationSystem=W,b.viewmodelState=V,b.localPlayerMixer=Y,b.playerViewModel=G,b.hitboxDummy=Z,b.hitboxDummyMixer=K,b.muzzleFlashPov=ce}X.addTickSystem(new dA(b)),X.addTickSystem(new fA(b)),X.addRenderSystem(new pA(b)),X.addRenderSystem(new mA(b)),X.addRenderSystem(new gA(b)),N.setTickCallback(te=>{X.update(te)}).setRenderCallback(te=>{X.render(te)}),window.addEventListener("resize",()=>{const{w:te,h:be}=i();d.resize(te,be),c.resize(te,be)}),le().then(async()=>{gs("Loading map…",55);try{const _e=await RE("/maps/arena_blockout.json");c.setMapGroup(_e.group),v.setStaticWorld(_e.staticWorld)}catch(_e){console.warn("Failed to load map JSON, using built-in arena.",_e)}if(gs("Connecting to server…",60),p.connect(Le.serverUrl),!await p.joinOrCreate("arena_ffa"))console.warn("Could not join arena_ffa – playing offline");else{gs("Joining arena…",85);const _e=p.getRoom();_e&&(m.setup(_e),_e.onMessage("hit",$=>{if(MM($.targetId),KM(),$.hitX!==void 0&&$.hitY!==void 0&&$.hitZ!==void 0){u.spawnImpact({x:$.hitX,y:$.hitY,z:$.hitZ});return}const ie=_e.state.players.get($.targetId);if(ie){const oe=$.hitboxType==="head"?Xl:rS*.5;u.spawnImpact({x:ie.x,y:ie.y+oe,z:ie.z})}}),_e.onMessage("hitReceived",$=>{if(PM($.dirX,$.dirY,$.dirZ),$.hitX!==void 0&&$.hitY!==void 0&&$.hitZ!==void 0)u.spawnImpact({x:$.hitX,y:$.hitY,z:$.hitZ});else{const oe=d.getCamera().position.clone(),me=new D($.dirX,$.dirY,$.dirZ).normalize();u.spawnImpact(oe.clone().addScaledVector(me,1))}}),_e.onMessage("kill",$=>{lA(_e,$),_e.sessionId===$.killerId&&ZM()}),_e.onMessage("shot",$=>{if(m.onShot($),$.shooterId===_e.sessionId&&$.hitX!==void 0&&$.hitY!==void 0&&$.hitZ!==void 0){const ie=new D($.hitX,$.hitY,$.hitZ);if(V?.muzzleNodeRef){const oe=new D;V.muzzleNodeRef.getWorldPosition(oe);const me=ie.clone().sub(oe).normalize(),Oe=oe.distanceTo(ie);h.retargetLast(oe,me,Oe)}u.spawnImpact(ie)}}),await m.waitForLocalSpawnAndSync(_e))}gs("Ready!",100),await new Promise(_e=>setTimeout(_e,300));const be=v.getSnapshot();d.setTargetPosition(be.position.x,be.position.y+ks,be.position.z),d.setRotation(be.yaw,be.pitch),d.snapToTarget(),eE(),N.start(),Le.debugOverlay&&typeof window<"u"&&(window.setPlayerSkin=_e=>{G&&$T(G,_e)})})}export{Ut as $,DA as A,Qt as B,Ve as C,mn as D,_n as E,tM as F,$t as G,Ns as H,Fr as I,Mf as J,ME as K,ni as L,xt as M,LA as N,YS as O,ea as P,nn as Q,IA as R,sM as S,jS as T,ja as U,D as V,ny as W,Rf as X,Ge as Y,tE as Z,nE as _,QM as a,Us as a0,$i as a1,At as a2,Dt as a3,Mu as a4,NA as a5,VT as b,Le as c,Gl as d,Zl as e,Jl as f,md as g,Uo as h,QT as i,eE as j,ks as k,pd as l,Zt as m,nA as n,iy as o,Hy as p,Cf as q,tS as r,gs as s,Ae as t,eA as u,Oi as v,sa as w,ti as x,Si as y,yi as z};
