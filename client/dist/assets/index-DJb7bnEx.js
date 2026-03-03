const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TunerBoot-C1lpxHlX.js","assets/dat.gui.module-CMI775Zz.js","assets/Tuner3PBoot-CUkgPspO.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Kf="modulepreload",Zf=function(s){return"/"+s},zl={},kl=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=o(t.map(c=>{if(c=Zf(c),c in zl)return;zl[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Kf,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((f,_)=>{d.addEventListener("load",f),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="169",Jf=0,Hl=1,Qf=2,ud=1,ep=2,qn=3,ei=0,Jt=1,mn=2,xi=0,xs=1,yr=2,Vl=3,Gl=4,tp=5,Bi=100,np=101,ip=102,sp=103,rp=104,op=200,ap=201,cp=202,lp=203,ec=204,tc=205,hp=206,up=207,dp=208,fp=209,pp=210,mp=211,gp=212,_p=213,vp=214,nc=0,ic=1,sc=2,Ts=3,rc=4,oc=5,ac=6,lc=7,dd=0,xp=1,yp=2,yi=0,Sp=1,Mp=2,Ep=3,Tp=4,Ap=5,bp=6,wp=7,Wl="attached",Rp="detached",fd=300,As=301,bs=302,hc=303,uc=304,Wo=306,ws=1e3,gi=1001,No=1002,Kt=1003,pd=1004,hr=1005,ln=1006,vo=1007,Zn=1008,ti=1009,md=1010,gd=1011,Sr=1012,sl=1013,Gi=1014,bn=1015,Rr=1016,rl=1017,ol=1018,Rs=1020,_d=35902,vd=1021,xd=1022,hn=1023,yd=1024,Sd=1025,ys=1026,Cs=1027,al=1028,cl=1029,Md=1030,ll=1031,hl=1033,xo=33776,yo=33777,So=33778,Mo=33779,dc=35840,fc=35841,pc=35842,mc=35843,gc=36196,_c=37492,vc=37496,xc=37808,yc=37809,Sc=37810,Mc=37811,Ec=37812,Tc=37813,Ac=37814,bc=37815,wc=37816,Rc=37817,Cc=37818,Pc=37819,Ic=37820,Lc=37821,Eo=36492,Dc=36494,Nc=36495,Ed=36283,Oc=36284,Uc=36285,Fc=36286,Td=2200,Bc=2201,Cp=2202,Mr=2300,Er=2301,Jo=2302,ps=2400,ms=2401,Oo=2402,ul=2500,Pp=2501,Ip=0,Ad=1,zc=2,Lp=3200,Dp=3201,bd=0,Np=1,mi="",jt="srgb",zt="srgb-linear",dl="display-p3",Xo="display-p3-linear",Uo="linear",yt="srgb",Fo="rec709",Bo="p3",Yi=7680,Xl=519,Op=512,Up=513,Fp=514,wd=515,Bp=516,zp=517,kp=518,Hp=519,kc=35044,$l="300 es",Jn=2e3,zo=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const pr=Math.PI/180,Ps=180/Math.PI;function Rn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[s&255]+kt[s>>8&255]+kt[s>>16&255]+kt[s>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function It(s,e,t){return Math.max(e,Math.min(t,s))}function fl(s,e){return(s%e+e)%e}function Vp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Gp(s,e,t){return s!==e?(t-s)/(e-s):0}function mr(s,e,t){return(1-t)*s+t*e}function Wp(s,e,t,n){return mr(s,e,1-Math.exp(-t*n))}function Xp(s,e=1){return e-Math.abs(fl(s,e*2)-e)}function $p(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Yp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function jp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function qp(s,e){return s+Math.random()*(e-s)}function Kp(s){return s*(.5-Math.random())}function Zp(s){s!==void 0&&(Yl=s);let e=Yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jp(s){return s*pr}function Qp(s){return s*Ps}function em(s){return(s&s-1)===0&&s!==0}function tm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function nm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function im(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _t(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ko={DEG2RAD:pr,RAD2DEG:Ps,generateUUID:Rn,clamp:It,euclideanModulo:fl,mapLinear:Vp,inverseLerp:Gp,lerp:mr,damp:Wp,pingpong:Xp,smoothstep:$p,smootherstep:Yp,randInt:jp,randFloat:qp,randFloatSpread:Kp,seededRandom:Zp,degToRad:Jp,radToDeg:Qp,isPowerOfTwo:em,ceilPowerOfTwo:tm,floorPowerOfTwo:nm,setQuaternionFromProperEuler:im,normalize:_t,denormalize:An};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,i,r,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],v=i[0],p=i[3],m=i[6],S=i[1],E=i[4],A=i[7],L=i[2],P=i[5],R=i[8];return r[0]=o*v+a*S+l*L,r[3]=o*p+a*E+l*P,r[6]=o*m+a*A+l*R,r[1]=c*v+u*S+h*L,r[4]=c*p+u*E+h*P,r[7]=c*m+u*A+h*R,r[2]=d*v+f*S+_*L,r[5]=d*p+f*E+_*P,r[8]=d*m+f*A+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new tt;function Rd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sm(){const s=Tr("canvas");return s.style.display="block",s}const jl={};function To(s){s in jl||(jl[s]=!0,console.warn(s))}function rm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function om(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function am(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ql=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kl=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hs={[zt]:{transfer:Uo,primaries:Fo,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[jt]:{transfer:yt,primaries:Fo,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Xo]:{transfer:Uo,primaries:Bo,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Kl),fromReference:s=>s.applyMatrix3(ql)},[dl]:{transfer:yt,primaries:Bo,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Kl),fromReference:s=>s.applyMatrix3(ql).convertLinearToSRGB()}},cm=new Set([zt,Xo]),ft={enabled:!0,_workingColorSpace:zt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!cm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Hs[e].toReference,i=Hs[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Hs[s].primaries},getTransfer:function(s){return s===mi?Uo:Hs[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Hs[e].luminanceCoefficients)}};function Ss(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ea(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ji;class lm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=Tr("canvas")),ji.width=e.width,ji.height=e.height;const n=ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ss(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ss(t[n]/255)*255):t[n]=Ss(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hm=0;class Cd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ta(i[o].image)):r.push(ta(i[o]))}else r=ta(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ta(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let um=0;class Lt extends Xi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=gi,i=gi,r=ln,o=Zn,a=hn,l=ti,c=Lt.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Rn(),this.name="",this.source=new Cd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=fd;Lt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,A=(f+1)/2,L=(m+1)/2,P=(u+d)/4,R=(h+v)/4,F=(_+p)/4;return E>A&&E>L?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=P/n,r=R/n):A>L?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=P/i,r=F/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=R/r,i=F/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-_)*(p-_)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(h-v)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dm extends Xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends dm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pd extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fm extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==_){let p=1-a;const m=l*d+c*f+u*_+h*v,S=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const L=Math.sqrt(E),P=Math.atan2(L,m*S);p=Math.sin(p*P)/L,a=Math.sin(a*P)/L}const A=a*S;if(l=l*p+d*A,c=c*p+f*A,u=u*p+_*A,h=h*p+v*A,p===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-a*f,e[t+2]=c*_+u*f+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new D,Zl=new nn;class ii{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Dr.subVectors(this.max,Vs),qi.subVectors(e.a,Vs),Ki.subVectors(e.b,Vs),Zi.subVectors(e.c,Vs),ri.subVectors(Ki,qi),oi.subVectors(Zi,Ki),Mi.subVectors(qi,Zi);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Mi.z,Mi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Mi.z,0,-Mi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Mi.y,Mi.x,0];return!ia(t,qi,Ki,Zi,Dr)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,qi,Ki,Zi,Dr))?!1:(Nr.crossVectors(ri,oi),t=[Nr.x,Nr.y,Nr.z],ia(t,qi,Ki,Zi,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new D,new D,new D,new D,new D,new D,new D,new D],vn=new D,Lr=new ii,qi=new D,Ki=new D,Zi=new D,ri=new D,oi=new D,Mi=new D,Vs=new D,Dr=new D,Nr=new D,Ei=new D;function ia(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ei.fromArray(s,r);const a=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const pm=new ii,Gs=new D,sa=new D;class Un{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(sa)),this.expandByPoint(Gs.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new D,ra=new D,Or=new D,ai=new D,oa=new D,Ur=new D,aa=new D;class $o{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ra.copy(e).add(t).multiplyScalar(.5),Or.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(ra);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Or),a=ai.dot(this.direction),l=-ai.dot(Or),c=ai.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ra).addScaledVector(Or,d),f}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,i,r){oa.subVectors(t,e),Ur.subVectors(n,e),aa.crossVectors(oa,Ur);let o=this.direction.dot(aa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);const l=a*this.direction.dot(Ur.crossVectors(ai,Ur));if(l<0)return null;const c=a*this.direction.dot(oa.cross(ai));if(c<0||l+c>o)return null;const u=-a*ai.dot(aa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,_,v,p){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,_,v,p)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,_,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=_,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,_=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,v=c*h;t[0]=d+v*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,_=a*u,v=a*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mm,e,gm)}lookAt(e,t,n){const i=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),ci.crossVectors(n,an),ci.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ci.crossVectors(n,an)),ci.normalize(),Fr.crossVectors(an,ci),i[0]=ci.x,i[4]=Fr.x,i[8]=an.x,i[1]=ci.y,i[5]=Fr.y,i[9]=an.y,i[2]=ci.z,i[6]=Fr.z,i[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],v=n[6],p=n[10],m=n[14],S=n[3],E=n[7],A=n[11],L=n[15],P=i[0],R=i[4],F=i[8],j=i[12],M=i[1],C=i[5],G=i[9],X=i[13],q=i[2],J=i[6],W=i[10],K=i[14],Y=i[3],pe=i[7],ue=i[11],me=i[15];return r[0]=o*P+a*M+l*q+c*Y,r[4]=o*R+a*C+l*J+c*pe,r[8]=o*F+a*G+l*W+c*ue,r[12]=o*j+a*X+l*K+c*me,r[1]=u*P+h*M+d*q+f*Y,r[5]=u*R+h*C+d*J+f*pe,r[9]=u*F+h*G+d*W+f*ue,r[13]=u*j+h*X+d*K+f*me,r[2]=_*P+v*M+p*q+m*Y,r[6]=_*R+v*C+p*J+m*pe,r[10]=_*F+v*G+p*W+m*ue,r[14]=_*j+v*X+p*K+m*me,r[3]=S*P+E*M+A*q+L*Y,r[7]=S*R+E*C+A*J+L*pe,r[11]=S*F+E*G+A*W+L*ue,r[15]=S*j+E*X+A*K+L*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],v=e[7],p=e[11],m=e[15];return _*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+v*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+p*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],v=e[13],p=e[14],m=e[15],S=h*p*c-v*d*c+v*l*f-a*p*f-h*l*m+a*d*m,E=_*d*c-u*p*c-_*l*f+o*p*f+u*l*m-o*d*m,A=u*v*c-_*h*c+_*a*f-o*v*f-u*a*m+o*h*m,L=_*h*l-u*v*l-_*a*d+o*v*d+u*a*p-o*h*p,P=t*S+n*E+i*A+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=S*R,e[1]=(v*d*r-h*p*r-v*i*f+n*p*f+h*i*m-n*d*m)*R,e[2]=(a*p*r-v*l*r+v*i*c-n*p*c-a*i*m+n*l*m)*R,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*R,e[4]=E*R,e[5]=(u*p*r-_*d*r+_*i*f-t*p*f-u*i*m+t*d*m)*R,e[6]=(_*l*r-o*p*r-_*i*c+t*p*c+o*i*m-t*l*m)*R,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*R,e[8]=A*R,e[9]=(_*h*r-u*v*r-_*n*f+t*v*f+u*n*m-t*h*m)*R,e[10]=(o*v*r-_*a*r+_*n*c-t*v*c-o*n*m+t*a*m)*R,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*R,e[12]=L*R,e[13]=(u*v*i-_*h*i+_*n*d-t*v*d-u*n*p+t*h*p)*R,e[14]=(_*a*i-o*v*i-_*n*l+t*v*l+o*n*p-t*a*p)*R,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,_=r*h,v=o*u,p=o*h,m=a*h,S=l*c,E=l*u,A=l*h,L=n.x,P=n.y,R=n.z;return i[0]=(1-(v+m))*L,i[1]=(f+A)*L,i[2]=(_-E)*L,i[3]=0,i[4]=(f-A)*P,i[5]=(1-(d+m))*P,i[6]=(p+S)*P,i[7]=0,i[8]=(_+E)*R,i[9]=(p-S)*R,i[10]=(1-(d+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ji.set(i[0],i[1],i[2]).length();const o=Ji.set(i[4],i[5],i[6]).length(),a=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],xn.copy(this);const c=1/r,u=1/o,h=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Jn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===Jn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===zo)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Jn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*c,f=(n+i)*u;let _,v;if(a===Jn)_=(o+r)*h,v=-2*h;else if(a===zo)_=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new D,xn=new je,mm=new D(0,0,0),gm=new D(1,1,1),ci=new D,Fr=new D,an=new D,Jl=new je,Ql=new nn;class _n{constructor(e=0,t=0,n=0,i=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _m=0;const eh=new D,Qi=new nn,Gn=new je,Br=new D,Ws=new D,vm=new D,xm=new nn,th=new D(1,0,0),nh=new D(0,1,0),ih=new D(0,0,1),sh={type:"added"},ym={type:"removed"},es={type:"childadded",child:null},ca={type:"childremoved",child:null};class St extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new D,t=new _n,n=new nn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new tt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Br.copy(e):Br.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ws,Br,this.up):Gn.lookAt(Br,Ws,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sh),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ym),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sh),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}St.DEFAULT_UP=new D(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new D,Wn=new D,la=new D,Xn=new D,ts=new D,ns=new D,rh=new D,ha=new D,ua=new D,da=new D,fa=new pt,pa=new pt,ma=new pt;class gn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yn.subVectors(e,t),i.cross(yn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){yn.subVectors(i,t),Wn.subVectors(n,t),la.subVectors(e,t);const o=yn.dot(yn),a=yn.dot(Wn),l=yn.dot(la),c=Wn.dot(Wn),u=Wn.dot(la),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(e,t),pa.fromBufferAttribute(e,n),ma.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(fa,r.x),o.addScaledVector(pa,r.y),o.addScaledVector(ma,r.z),o}static isFrontFacing(e,t,n,i){return yn.subVectors(n,t),Wn.subVectors(e,t),yn.cross(Wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),yn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ts.subVectors(i,n),ns.subVectors(r,n),ha.subVectors(e,n);const l=ts.dot(ha),c=ns.dot(ha);if(l<=0&&c<=0)return t.copy(n);ua.subVectors(e,i);const u=ts.dot(ua),h=ns.dot(ua);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ts,o);da.subVectors(e,r);const f=ts.dot(da),_=ns.dot(da);if(_>=0&&f<=_)return t.copy(r);const v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(ns,a);const p=u*_-f*h;if(p<=0&&h-u>=0&&f-_>=0)return rh.subVectors(r,i),a=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(rh,a);const m=1/(p+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},zr={h:0,s:0,l:0};function ga(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=fl(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ga(o,r,e+1/3),this.g=ga(o,r,e),this.b=ga(o,r,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=Ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return ft.fromWorkingColorSpace(Ht.copy(this),e),Math.round(It(Ht.r*255,0,255))*65536+Math.round(It(Ht.g*255,0,255))*256+Math.round(It(Ht.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,r=Ht.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=jt){ft.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(zr);const n=mr(li.h,zr.h,t),i=mr(li.s,zr.s,t),r=mr(li.l,zr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new We;We.NAMES=Ld;let Sm=0;class Cn extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=xs,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ec&&(n.blendSrc=this.blendSrc),this.blendDst!==tc&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wn extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new D,kr=new Ce;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kc,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kc&&(e.usage=this.usage),e}}class Dd extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nd extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mm=0;const dn=new je,_a=new St,is=new D,cn=new ii,Xs=new ii,Ut=new D;class Wt extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rd(e)?Nd:Dd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(cn.min,Xs.min),cn.expandByPoint(Ut),Ut.addVectors(cn.max,Xs.max),cn.expandByPoint(Ut)):(cn.expandByPoint(Xs.min),cn.expandByPoint(Xs.max))}cn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),Ut.add(is)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new D,l[F]=new D;const c=new D,u=new D,h=new D,d=new Ce,f=new Ce,_=new Ce,v=new D,p=new D;function m(F,j,M){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,j),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,j),_.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const C=1/(f.x*_.y-_.x*f.y);isFinite(C)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(C),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(C),a[F].add(v),a[j].add(v),a[M].add(v),l[F].add(p),l[j].add(p),l[M].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let F=0,j=S.length;F<j;++F){const M=S[F],C=M.start,G=M.count;for(let X=C,q=C+G;X<q;X+=3)m(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const E=new D,A=new D,L=new D,P=new D;function R(F){L.fromBufferAttribute(i,F),P.copy(L);const j=a[F];E.copy(j),E.sub(L.multiplyScalar(L.dot(j))).normalize(),A.crossVectors(P,j);const C=A.dot(l[F])<0?-1:1;o.setXYZW(F,E.x,E.y,E.z,C)}for(let F=0,j=S.length;F<j;++F){const M=S[F],C=M.start,G=M.count;for(let X=C,q=C+G;X<q;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let m=0;m<u;m++)d[_++]=c[f++]}return new Qt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oh=new je,Ti=new $o,Hr=new Un,ah=new D,Vr=new D,Gr=new D,Wr=new D,va=new D,Xr=new D,ch=new D,$r=new D;class Mt extends St{constructor(e=new Wt,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(va.fromBufferAttribute(h,e),o?Xr.addScaledVector(va,u):Xr.addScaledVector(va.sub(t),u))}t.add(Xr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(Hr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Hr,ah)===null||Ti.origin.distanceToSquared(ah)>(e.far-e.near)**2))&&(oh.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(oh),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const p=d[_],m=o[p.materialIndex],S=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let A=S,L=E;A<L;A+=3){const P=a.getX(A),R=a.getX(A+1),F=a.getX(A+2);i=Yr(this,m,e,n,c,u,h,P,R,F),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=_,m=v;p<m;p+=3){const S=a.getX(p),E=a.getX(p+1),A=a.getX(p+2);i=Yr(this,o,e,n,c,u,h,S,E,A),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const p=d[_],m=o[p.materialIndex],S=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let A=S,L=E;A<L;A+=3){const P=A,R=A+1,F=A+2;i=Yr(this,m,e,n,c,u,h,P,R,F),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=_,m=v;p<m;p+=3){const S=p,E=p+1,A=p+2;i=Yr(this,o,e,n,c,u,h,S,E,A),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Em(s,e,t,n,i,r,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===ei,a),l===null)return null;$r.copy(a),$r.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo($r);return c<t.near||c>t.far?null:{distance:c,point:$r.clone(),object:s}}function Yr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Vr),s.getVertexPosition(l,Gr),s.getVertexPosition(c,Wr);const u=Em(s,e,t,n,Vr,Gr,Wr,ch);if(u){const h=new D;gn.getBarycoord(ch,Vr,Gr,Wr,h),i&&(u.uv=gn.getInterpolatedAttribute(i,a,l,c,h,new Ce)),r&&(u.uv1=gn.getInterpolatedAttribute(r,a,l,c,h,new Ce)),o&&(u.normal=gn.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};gn.getNormal(Vr,Gr,Wr,d.normal),u.face=d,u.barycoord=h}return u}class $i extends Wt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2));function _(v,p,m,S,E,A,L,P,R,F,j){const M=A/R,C=L/F,G=A/2,X=L/2,q=P/2,J=R+1,W=F+1;let K=0,Y=0;const pe=new D;for(let ue=0;ue<W;ue++){const me=ue*C-X;for(let ke=0;ke<J;ke++){const Ye=ke*M-G;pe[v]=Ye*S,pe[p]=me*E,pe[m]=q,c.push(pe.x,pe.y,pe.z),pe[v]=0,pe[p]=0,pe[m]=P>0?1:-1,u.push(pe.x,pe.y,pe.z),h.push(ke/R),h.push(1-ue/F),K+=1}}for(let ue=0;ue<F;ue++)for(let me=0;me<R;me++){const ke=d+me+J*ue,Ye=d+me+J*(ue+1),ee=d+(me+1)+J*(ue+1),ce=d+(me+1)+J*ue;l.push(ke,Ye,ce),l.push(Ye,ee,ce),Y+=6}a.addGroup(f,Y,j),f+=Y,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(s){const e={};for(let t=0;t<s.length;t++){const n=Is(s[t]);for(const i in n)e[i]=n[i]}return e}function Tm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Od(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const Am={clone:Is,merge:Yt};var bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bm,this.fragmentShader=wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ud extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new D,lh=new Ce,hh=new Ce;class qt extends Ud{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,lh,hh),t.subVectors(hh,lh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,rs=1;class Rm extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qt(ss,rs,e,t);i.layers=this.layers,this.add(i);const r=new qt(ss,rs,e,t);r.layers=this.layers,this.add(r);const o=new qt(ss,rs,e,t);o.layers=this.layers,this.add(o);const a=new qt(ss,rs,e,t);a.layers=this.layers,this.add(a);const l=new qt(ss,rs,e,t);l.layers=this.layers,this.add(l);const c=new qt(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Fd extends Lt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cm extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $i(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:xi});r.uniforms.tEquirect.value=t;const o=new Mt(i,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=ln),new Rm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const xa=new D,Pm=new D,Im=new tt;class Ni{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xa.subVectors(n,t).cross(Pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Im.getNormalMatrix(e),i=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Un,jr=new D;class pl{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,r=new Ni,o=new Ni){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],v=i[10],p=i[11],m=i[12],S=i[13],E=i[14],A=i[15];if(n[0].setComponents(l-r,d-c,p-f,A-m).normalize(),n[1].setComponents(l+r,d+c,p+f,A+m).normalize(),n[2].setComponents(l+o,d+u,p+_,A+S).normalize(),n[3].setComponents(l-o,d-u,p-_,A-S).normalize(),n[4].setComponents(l-a,d-h,p-v,A-E).normalize(),t===Jn)n[5].setComponents(l+a,d+h,p+v,A+E).normalize();else if(t===zo)n[5].setComponents(a,h,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(jr.x=i.normal.x>0?e.max.x:e.min.x,jr.y=i.normal.y>0?e.max.y:e.min.y,jr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Lm(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],v=h[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const v=h[f];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Cr extends Wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],_=[],v=[],p=[];for(let m=0;m<u;m++){const S=m*d-o;for(let E=0;E<c;E++){const A=E*h-r;_.push(A,-S,0),v.push(0,0,1),p.push(E/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const E=S+c*m,A=S+c*(m+1),L=S+1+c*(m+1),P=S+1+c*m;f.push(E,A,P),f.push(A,L,P)}this.setIndex(f),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nm=`#ifdef USE_ALPHAHASH
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
#endif`,Om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zm=`#ifdef USE_AOMAP
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
#endif`,km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hm=`#ifdef USE_BATCHING
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
#endif`,Vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$m=`#ifdef USE_IRIDESCENCE
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
#endif`,Ym=`#ifdef USE_BUMPMAP
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ng=`#define PI 3.141592653589793
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
} // validated`,ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sg=`vec3 transformedNormal = objectNormal;
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
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",hg=`
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
}`,ug=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
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
}`,Sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tg=`uniform bool receiveShadow;
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
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
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
#endif`,Ig=`struct PhysicalMaterial {
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
}`,Lg=`
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
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Og=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ug=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vg=`#if defined( USE_POINTS_UV )
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
#endif`,Gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`#ifdef USE_MORPHTARGETS
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
#endif`,qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t0=`#ifdef USE_NORMALMAP
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
#endif`,n0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_0=`float getShadowMask() {
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
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,M0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#ifdef USE_TRANSMISSION
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`#include <common>
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
}`,z0=`#if DEPTH_PACKING == 3200
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
}`,k0=`#define DISTANCE
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
}`,H0=`#define DISTANCE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`uniform float scale;
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
}`,X0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,Y0=`uniform vec3 diffuse;
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
}`,j0=`#define LAMBERT
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
}`,q0=`#define LAMBERT
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
}`,K0=`#define MATCAP
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
}`,Z0=`#define MATCAP
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
}`,J0=`#define NORMAL
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
}`,Q0=`#define NORMAL
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
}`,e_=`#define PHONG
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
}`,t_=`#define PHONG
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
}`,n_=`#define STANDARD
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
}`,i_=`#define STANDARD
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
}`,s_=`#define TOON
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
}`,r_=`#define TOON
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
}`,o_=`uniform float size;
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
}`,a_=`uniform vec3 diffuse;
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
}`,c_=`#include <common>
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
}`,l_=`uniform vec3 color;
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
}`,h_=`uniform float rotation;
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
}`,u_=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Dm,alphahash_pars_fragment:Nm,alphamap_fragment:Om,alphamap_pars_fragment:Um,alphatest_fragment:Fm,alphatest_pars_fragment:Bm,aomap_fragment:zm,aomap_pars_fragment:km,batching_pars_vertex:Hm,batching_vertex:Vm,begin_vertex:Gm,beginnormal_vertex:Wm,bsdfs:Xm,iridescence_fragment:$m,bumpmap_pars_fragment:Ym,clipping_planes_fragment:jm,clipping_planes_pars_fragment:qm,clipping_planes_pars_vertex:Km,clipping_planes_vertex:Zm,color_fragment:Jm,color_pars_fragment:Qm,color_pars_vertex:eg,color_vertex:tg,common:ng,cube_uv_reflection_fragment:ig,defaultnormal_vertex:sg,displacementmap_pars_vertex:rg,displacementmap_vertex:og,emissivemap_fragment:ag,emissivemap_pars_fragment:cg,colorspace_fragment:lg,colorspace_pars_fragment:hg,envmap_fragment:ug,envmap_common_pars_fragment:dg,envmap_pars_fragment:fg,envmap_pars_vertex:pg,envmap_physical_pars_fragment:Ag,envmap_vertex:mg,fog_vertex:gg,fog_pars_vertex:_g,fog_fragment:vg,fog_pars_fragment:xg,gradientmap_pars_fragment:yg,lightmap_pars_fragment:Sg,lights_lambert_fragment:Mg,lights_lambert_pars_fragment:Eg,lights_pars_begin:Tg,lights_toon_fragment:bg,lights_toon_pars_fragment:wg,lights_phong_fragment:Rg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Ig,lights_fragment_begin:Lg,lights_fragment_maps:Dg,lights_fragment_end:Ng,logdepthbuf_fragment:Og,logdepthbuf_pars_fragment:Ug,logdepthbuf_pars_vertex:Fg,logdepthbuf_vertex:Bg,map_fragment:zg,map_pars_fragment:kg,map_particle_fragment:Hg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Wg,morphinstance_vertex:Xg,morphcolor_vertex:$g,morphnormal_vertex:Yg,morphtarget_pars_vertex:jg,morphtarget_vertex:qg,normal_fragment_begin:Kg,normal_fragment_maps:Zg,normal_pars_fragment:Jg,normal_pars_vertex:Qg,normal_vertex:e0,normalmap_pars_fragment:t0,clearcoat_normal_fragment_begin:n0,clearcoat_normal_fragment_maps:i0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:r0,opaque_fragment:o0,packing:a0,premultiplied_alpha_fragment:c0,project_vertex:l0,dithering_fragment:h0,dithering_pars_fragment:u0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:f0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:g0,shadowmask_pars_fragment:_0,skinbase_vertex:v0,skinning_pars_vertex:x0,skinning_vertex:y0,skinnormal_vertex:S0,specularmap_fragment:M0,specularmap_pars_fragment:E0,tonemapping_fragment:T0,tonemapping_pars_fragment:A0,transmission_fragment:b0,transmission_pars_fragment:w0,uv_pars_fragment:R0,uv_pars_vertex:C0,uv_vertex:P0,worldpos_vertex:I0,background_vert:L0,background_frag:D0,backgroundCube_vert:N0,backgroundCube_frag:O0,cube_vert:U0,cube_frag:F0,depth_vert:B0,depth_frag:z0,distanceRGBA_vert:k0,distanceRGBA_frag:H0,equirect_vert:V0,equirect_frag:G0,linedashed_vert:W0,linedashed_frag:X0,meshbasic_vert:$0,meshbasic_frag:Y0,meshlambert_vert:j0,meshlambert_frag:q0,meshmatcap_vert:K0,meshmatcap_frag:Z0,meshnormal_vert:J0,meshnormal_frag:Q0,meshphong_vert:e_,meshphong_frag:t_,meshphysical_vert:n_,meshphysical_frag:i_,meshtoon_vert:s_,meshtoon_frag:r_,points_vert:o_,points_frag:a_,shadow_vert:c_,shadow_frag:l_,sprite_vert:h_,sprite_frag:u_},Ee={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},On={basic:{uniforms:Yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Yt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Yt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Yt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Yt([Ee.points,Ee.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Yt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Yt([Ee.common,Ee.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Yt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Yt([Ee.sprite,Ee.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Yt([Ee.common,Ee.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Yt([Ee.lights,Ee.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};On.physical={uniforms:Yt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const qr={r:0,b:0,g:0},bi=new _n,d_=new je;function f_(s,e,t,n,i,r,o){const a=new We(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function _(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function v(S){let E=!1;const A=_(S);A===null?m(a,l):A&&A.isColor&&(m(A,1),E=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(S,E){const A=_(E);A&&(A.isCubeTexture||A.mapping===Wo)?(u===void 0&&(u=new Mt(new $i(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Is(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),bi.copy(E.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(d_.makeRotationFromEuler(bi)),u.material.toneMapped=ft.getTransfer(A.colorSpace)!==yt,(h!==A||d!==A.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=s.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Mt(new Cr(2,2),new ni({name:"BackgroundMaterial",uniforms:Is(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ft.getTransfer(A.colorSpace)!==yt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,E){S.getRGB(qr,Od(s)),n.buffers.color.setClear(qr.r,qr.g,qr.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),l=E,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:v,addToRenderList:p}}function p_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,C,G,X,q){let J=!1;const W=h(X,G,C);r!==W&&(r=W,c(r.object)),J=f(M,X,G,q),J&&_(M,X,G,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,A(M,C,G,X),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,C,G){const X=G.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let J=q[C.id];J===void 0&&(J={},q[C.id]=J);let W=J[X];return W===void 0&&(W=d(l()),J[X]=W),W}function d(M){const C=[],G=[],X=[];for(let q=0;q<t;q++)C[q]=0,G[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:X,object:M,attributes:{},index:null}}function f(M,C,G,X){const q=r.attributes,J=C.attributes;let W=0;const K=G.getAttributes();for(const Y in K)if(K[Y].location>=0){const ue=q[Y];let me=J[Y];if(me===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),ue===void 0||ue.attribute!==me||me&&ue.data!==me.data)return!0;W++}return r.attributesNum!==W||r.index!==X}function _(M,C,G,X){const q={},J=C.attributes;let W=0;const K=G.getAttributes();for(const Y in K)if(K[Y].location>=0){let ue=J[Y];ue===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const me={};me.attribute=ue,ue&&ue.data&&(me.data=ue.data),q[Y]=me,W++}r.attributes=q,r.attributesNum=W,r.index=X}function v(){const M=r.newAttributes;for(let C=0,G=M.length;C<G;C++)M[C]=0}function p(M){m(M,0)}function m(M,C){const G=r.newAttributes,X=r.enabledAttributes,q=r.attributeDivisors;G[M]=1,X[M]===0&&(s.enableVertexAttribArray(M),X[M]=1),q[M]!==C&&(s.vertexAttribDivisor(M,C),q[M]=C)}function S(){const M=r.newAttributes,C=r.enabledAttributes;for(let G=0,X=C.length;G<X;G++)C[G]!==M[G]&&(s.disableVertexAttribArray(G),C[G]=0)}function E(M,C,G,X,q,J,W){W===!0?s.vertexAttribIPointer(M,C,G,q,J):s.vertexAttribPointer(M,C,G,X,q,J)}function A(M,C,G,X){v();const q=X.attributes,J=G.getAttributes(),W=C.defaultAttributeValues;for(const K in J){const Y=J[K];if(Y.location>=0){let pe=q[K];if(pe===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),pe!==void 0){const ue=pe.normalized,me=pe.itemSize,ke=e.get(pe);if(ke===void 0)continue;const Ye=ke.buffer,ee=ke.type,ce=ke.bytesPerElement,se=ee===s.INT||ee===s.UNSIGNED_INT||pe.gpuType===sl;if(pe.isInterleavedBufferAttribute){const _e=pe.data,oe=_e.stride,he=pe.offset;if(_e.isInstancedInterleavedBuffer){for(let ye=0;ye<Y.locationSize;ye++)m(Y.location+ye,_e.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ye=0;ye<Y.locationSize;ye++)p(Y.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let ye=0;ye<Y.locationSize;ye++)E(Y.location+ye,me/Y.locationSize,ee,ue,oe*ce,(he+me/Y.locationSize*ye)*ce,se)}else{if(pe.isInstancedBufferAttribute){for(let _e=0;_e<Y.locationSize;_e++)m(Y.location+_e,pe.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let _e=0;_e<Y.locationSize;_e++)p(Y.location+_e);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let _e=0;_e<Y.locationSize;_e++)E(Y.location+_e,me/Y.locationSize,ee,ue,me*ce,me/Y.locationSize*_e*ce,se)}}else if(W!==void 0){const ue=W[K];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(Y.location,ue);break;case 3:s.vertexAttrib3fv(Y.location,ue);break;case 4:s.vertexAttrib4fv(Y.location,ue);break;default:s.vertexAttrib1fv(Y.location,ue)}}}}S()}function L(){F();for(const M in n){const C=n[M];for(const G in C){const X=C[G];for(const q in X)u(X[q].object),delete X[q];delete C[G]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const G in C){const X=C[G];for(const q in X)u(X[q].object),delete X[q];delete C[G]}delete n[M.id]}function R(M){for(const C in n){const G=n[C];if(G[M.id]===void 0)continue;const X=G[M.id];for(const q in X)u(X[q].object),delete X[q];delete G[M.id]}}function F(){j(),o=!0,r!==i&&(r=i,c(r.object))}function j(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:F,resetDefaultState:j,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function m_(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v];for(let v=0;v<d.length;v++)t.update(_,n,d[v])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function g_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==hn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const F=R===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ti&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==bn&&!F)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:A,vertexTextures:L,maxSamples:P}}function __(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ni,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const S=r?0:n,E=S*4;let A=m.clippingState||null;l.value=A,A=u(_,d,E,f);for(let L=0;L!==E;++L)A[L]=t[L];m.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const m=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,A=f;E!==v;++E,A+=4)o.copy(h[E]).applyMatrix4(S,a),o.normal.toArray(p,A),p[A+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function v_(s){let e=new WeakMap;function t(o,a){return a===hc?o.mapping=As:a===uc&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===hc||a===uc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cm(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ml extends Ud{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gs=4,uh=[.125,.215,.35,.446,.526,.582],zi=20,ya=new ml,dh=new We;let Sa=null,Ma=0,Ea=0,Ta=!1;const Oi=(1+Math.sqrt(5))/2,os=1/Oi,fh=[new D(-Oi,os,0),new D(Oi,os,0),new D(-os,0,Oi),new D(os,0,Oi),new D(0,Oi,-os),new D(0,Oi,os),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class ph{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Sa=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,Ma,Ea),this._renderer.xr.enabled=Ta,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Rr,format:hn,colorSpace:zt,depthBuffer:!1},i=mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x_(r)),this._blurMaterial=y_(r,e,t)}return i}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,n,i){const a=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(dh),u.toneMapping=yi,u.autoClear=!1;const f=new wn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),_=new Mt(new $i,f);let v=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(dh),v=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const E=this._cubeSize;Kr(i,S*E,m>2?E:0,E,E),u.setRenderTarget(i),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===As||e.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ya)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fh[(i-r-1)%fh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),v=r/_,p=isFinite(r)?1+Math.floor(u*v):zi;p>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zi}`);const m=[];let S=0;for(let R=0;R<zi;++R){const F=R/v,j=Math.exp(-F*F/2);m.push(j),R===0?S+=j:R<p&&(S+=2*j)}for(let R=0;R<m.length;R++)m[R]=m[R]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-n;const A=this._sizeLods[i],L=3*A*(i>E-gs?i-E+gs:0),P=4*(this._cubeSize-A);Kr(t,L,P,3*A,2*A),l.setRenderTarget(t),l.render(h,ya)}}function x_(s){const e=[],t=[],n=[];let i=s;const r=s-gs+1+uh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-gs?l=uh[o-s+gs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,v=3,p=2,m=1,S=new Float32Array(v*_*f),E=new Float32Array(p*_*f),A=new Float32Array(m*_*f);for(let P=0;P<f;P++){const R=P%3*2/3-1,F=P>2?0:-1,j=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];S.set(j,v*_*P),E.set(d,p*_*P);const M=[P,P,P,P,P,P];A.set(M,m*_*P)}const L=new Wt;L.setAttribute("position",new Qt(S,v)),L.setAttribute("uv",new Qt(E,p)),L.setAttribute("faceIndex",new Qt(A,m)),e.push(L),i>gs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mh(s,e,t){const n=new Wi(s,e,t);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function y_(s,e,t){const n=new Float32Array(zi),i=new D(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function gh(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function _h(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function gl(){return`

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
	`}function S_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===hc||l===uc,u=l===As||l===bs;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ph(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new ph(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function M_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&To("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function E_(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const v=f[_];for(let p=0,m=v.length;p<m;p++)e.update(v[p],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,_=h.attributes.position;let v=0;if(f!==null){const S=f.array;v=f.version;for(let E=0,A=S.length;E<A;E+=3){const L=S[E+0],P=S[E+1],R=S[E+2];d.push(L,P,P,R,R,L)}}else if(_!==void 0){const S=_.array;v=_.version;for(let E=0,A=S.length/3-1;E<A;E+=3){const L=E+0,P=E+1,R=E+2;d.push(L,P,P,R,R,L)}}else return;const p=new(Rd(d)?Nd:Dd)(d,1);p.version=v;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function T_(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*o,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];t.update(p,n,1)}function h(d,f,_,v){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,_);let m=0;for(let S=0;S<_;S++)m+=f[S];for(let S=0;S<v.length;S++)t.update(m,n,v[S])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function A_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function b_(s,e,t){const n=new WeakMap,i=new pt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let j=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",j)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let E=0;f===!0&&(E=1),_===!0&&(E=2),v===!0&&(E=3);let A=a.attributes.position.count*E,L=1;A>e.maxTextureSize&&(L=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const P=new Float32Array(A*L*4*h),R=new Pd(P,A,L,h);R.type=bn,R.needsUpdate=!0;const F=E*4;for(let M=0;M<h;M++){const C=p[M],G=m[M],X=S[M],q=A*L*4*M;for(let J=0;J<C.count;J++){const W=J*F;f===!0&&(i.fromBufferAttribute(C,J),P[q+W+0]=i.x,P[q+W+1]=i.y,P[q+W+2]=i.z,P[q+W+3]=0),_===!0&&(i.fromBufferAttribute(G,J),P[q+W+4]=i.x,P[q+W+5]=i.y,P[q+W+6]=i.z,P[q+W+7]=0),v===!0&&(i.fromBufferAttribute(X,J),P[q+W+8]=i.x,P[q+W+9]=i.y,P[q+W+10]=i.z,P[q+W+11]=X.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new Ce(A,L)},n.set(a,d),a.addEventListener("dispose",j)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function w_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class zd extends Lt{constructor(e,t,n,i,r,o,a,l,c,u=ys){if(u!==ys&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ys&&(n=Gi),n===void 0&&u===Cs&&(n=Rs),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kd=new Lt,vh=new zd(1,1),Hd=new Pd,Vd=new fm,Gd=new Fd,xh=[],yh=[],Sh=new Float32Array(16),Mh=new Float32Array(9),Eh=new Float32Array(4);function Fs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=xh[i];if(r===void 0&&(r=new Float32Array(i),xh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Yo(s,e){let t=yh[e];t===void 0&&(t=new Int32Array(e),yh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function R_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function C_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function P_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function I_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function L_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Eh.set(n),s.uniformMatrix2fv(this.addr,!1,Eh),Nt(t,n)}}function D_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Mh.set(n),s.uniformMatrix3fv(this.addr,!1,Mh),Nt(t,n)}}function N_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Sh.set(n),s.uniformMatrix4fv(this.addr,!1,Sh),Nt(t,n)}}function O_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function U_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function F_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function B_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function z_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function k_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function H_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function V_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function G_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(vh.compareFunction=wd,r=vh):r=kd,t.setTexture2D(e||r,i)}function W_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vd,i)}function X_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Gd,i)}function $_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hd,i)}function Y_(s){switch(s){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return I_;case 35674:return L_;case 35675:return D_;case 35676:return N_;case 5124:case 35670:return O_;case 35667:case 35671:return U_;case 35668:case 35672:return F_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return k_;case 36295:return H_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return $_}}function j_(s,e){s.uniform1fv(this.addr,e)}function q_(s,e){const t=Fs(e,this.size,2);s.uniform2fv(this.addr,t)}function K_(s,e){const t=Fs(e,this.size,3);s.uniform3fv(this.addr,t)}function Z_(s,e){const t=Fs(e,this.size,4);s.uniform4fv(this.addr,t)}function J_(s,e){const t=Fs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Q_(s,e){const t=Fs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ev(s,e){const t=Fs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function tv(s,e){s.uniform1iv(this.addr,e)}function nv(s,e){s.uniform2iv(this.addr,e)}function iv(s,e){s.uniform3iv(this.addr,e)}function sv(s,e){s.uniform4iv(this.addr,e)}function rv(s,e){s.uniform1uiv(this.addr,e)}function ov(s,e){s.uniform2uiv(this.addr,e)}function av(s,e){s.uniform3uiv(this.addr,e)}function cv(s,e){s.uniform4uiv(this.addr,e)}function lv(s,e,t){const n=this.cache,i=e.length,r=Yo(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||kd,r[o])}function hv(s,e,t){const n=this.cache,i=e.length,r=Yo(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Vd,r[o])}function uv(s,e,t){const n=this.cache,i=e.length,r=Yo(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Gd,r[o])}function dv(s,e,t){const n=this.cache,i=e.length,r=Yo(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Hd,r[o])}function fv(s){switch(s){case 5126:return j_;case 35664:return q_;case 35665:return K_;case 35666:return Z_;case 35674:return J_;case 35675:return Q_;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return ov;case 36295:return av;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return dv}}class pv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Y_(t.type)}}class mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fv(t.type)}}class gv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Th(s,e){s.seq.push(e),s.map[e.id]=e}function _v(s,e,t){const n=s.name,i=n.length;for(Aa.lastIndex=0;;){const r=Aa.exec(n),o=Aa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Th(t,c===void 0?new pv(a,s,e):new mv(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new gv(a),Th(t,h)),t=h}}}class Ao{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);_v(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ah(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const vv=37297;let xv=0;function yv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Sv(s){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(s);let n;switch(e===t?n="":e===Bo&&t===Fo?n="LinearDisplayP3ToLinearSRGB":e===Fo&&t===Bo&&(n="LinearSRGBToLinearDisplayP3"),s){case zt:case Xo:return[n,"LinearTransferOETF"];case jt:case dl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function bh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+yv(s.getShaderSource(e),o)}else return i}function Mv(s,e){const t=Sv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ev(s,e){let t;switch(e){case Sp:t="Linear";break;case Mp:t="Reinhard";break;case Ep:t="Cineon";break;case Tp:t="ACESFilmic";break;case bp:t="AgX";break;case wp:t="Neutral";break;case Ap:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zr=new D;function Tv(){ft.getLuminanceCoefficients(Zr);const s=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Av(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function bv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ur(s){return s!==""}function wh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(s){return s.replace(Rv,Pv)}const Cv=new Map;function Pv(s,e){let t=et[e];if(t===void 0){const n=Cv.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hc(t)}const Iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(s){return s.replace(Iv,Lv)}function Lv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ph(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Dv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ud?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ep?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Nv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case As:case bs:e="ENVMAP_TYPE_CUBE";break;case Wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ov(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function Uv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dd:e="ENVMAP_BLENDING_MULTIPLY";break;case xp:e="ENVMAP_BLENDING_MIX";break;case yp:e="ENVMAP_BLENDING_ADD";break}return e}function Fv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Bv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Dv(t),c=Nv(t),u=Ov(t),h=Uv(t),d=Fv(t),f=Av(t),_=bv(r),v=i.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ur).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ur).join(`
`),m.length>0&&(m+=`
`)):(p=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),m=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?et.tonemapping_pars_fragment:"",t.toneMapping!==yi?Ev("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Mv("linearToOutputTexel",t.outputColorSpace),Tv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),o=Hc(o),o=wh(o,t),o=Rh(o,t),a=Hc(a),a=wh(a,t),a=Rh(a,t),o=Ch(o),a=Ch(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=S+p+o,A=S+m+a,L=Ah(i,i.VERTEX_SHADER,E),P=Ah(i,i.FRAGMENT_SHADER,A);i.attachShader(v,L),i.attachShader(v,P),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(C){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(v).trim(),X=i.getShaderInfoLog(L).trim(),q=i.getShaderInfoLog(P).trim();let J=!0,W=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,L,P);else{const K=bh(i,L,"vertex"),Y=bh(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+K+`
`+Y)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(X===""||q==="")&&(W=!1);W&&(C.diagnostics={runnable:J,programLog:G,vertexShader:{log:X,prefix:p},fragmentShader:{log:q,prefix:m}})}i.deleteShader(L),i.deleteShader(P),F=new Ao(i,v),j=wv(i,v)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let j;this.getAttributes=function(){return j===void 0&&R(this),j};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,vv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=P,this}let zv=0;class kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hv(e),t.set(e,n)),n}}class Hv{constructor(e){this.id=zv++,this.code=e,this.usedTimes=0}}function Vv(s,e,t,n,i,r,o){const a=new Id,l=new kv,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let _=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,C,G,X,q){const J=X.fog,W=q.geometry,K=M.isMeshStandardMaterial?X.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),pe=Y&&Y.mapping===Wo?Y.image.height:null,ue=v[M.type];M.precision!==null&&(_=i.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ke=me!==void 0?me.length:0;let Ye=0;W.morphAttributes.position!==void 0&&(Ye=1),W.morphAttributes.normal!==void 0&&(Ye=2),W.morphAttributes.color!==void 0&&(Ye=3);let ee,ce,se,_e;if(ue){const vt=On[ue];ee=vt.vertexShader,ce=vt.fragmentShader}else ee=M.vertexShader,ce=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);const oe=s.getRenderTarget(),he=q.isInstancedMesh===!0,ye=q.isBatchedMesh===!0,Se=!!M.map,De=!!M.matcap,N=!!Y,$e=!!M.aoMap,Xe=!!M.lightMap,qe=!!M.bumpMap,Fe=!!M.normalMap,ct=!!M.displacementMap,Be=!!M.emissiveMap,I=!!M.metalnessMap,b=!!M.roughnessMap,k=M.anisotropy>0,te=M.clearcoat>0,ae=M.dispersion>0,ne=M.iridescence>0,Ie=M.sheen>0,xe=M.transmission>0,we=k&&!!M.anisotropyMap,Je=te&&!!M.clearcoatMap,de=te&&!!M.clearcoatNormalMap,Pe=te&&!!M.clearcoatRoughnessMap,He=ne&&!!M.iridescenceMap,Ve=ne&&!!M.iridescenceThicknessMap,ve=Ie&&!!M.sheenColorMap,Ke=Ie&&!!M.sheenRoughnessMap,Ge=!!M.specularMap,ht=!!M.specularColorMap,H=!!M.specularIntensityMap,Re=xe&&!!M.transmissionMap,Z=xe&&!!M.thicknessMap,re=!!M.gradientMap,Te=!!M.alphaMap,Ae=M.alphaTest>0,it=!!M.alphaHash,xt=!!M.extensions;let Ot=yi;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const lt={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:ce,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:ye,batchingColor:ye&&q._colorsTexture!==null,instancing:he,instancingColor:he&&q.instanceColor!==null,instancingMorph:he&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:zt,alphaToCoverage:!!M.alphaToCoverage,map:Se,matcap:De,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:pe,aoMap:$e,lightMap:Xe,bumpMap:qe,normalMap:Fe,displacementMap:f&&ct,emissiveMap:Be,normalMapObjectSpace:Fe&&M.normalMapType===Np,normalMapTangentSpace:Fe&&M.normalMapType===bd,metalnessMap:I,roughnessMap:b,anisotropy:k,anisotropyMap:we,clearcoat:te,clearcoatMap:Je,clearcoatNormalMap:de,clearcoatRoughnessMap:Pe,dispersion:ae,iridescence:ne,iridescenceMap:He,iridescenceThicknessMap:Ve,sheen:Ie,sheenColorMap:ve,sheenRoughnessMap:Ke,specularMap:Ge,specularColorMap:ht,specularIntensityMap:H,transmission:xe,transmissionMap:Re,thicknessMap:Z,gradientMap:re,opaque:M.transparent===!1&&M.blending===xs&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ae,alphaHash:it,combine:M.combine,mapUv:Se&&p(M.map.channel),aoMapUv:$e&&p(M.aoMap.channel),lightMapUv:Xe&&p(M.lightMap.channel),bumpMapUv:qe&&p(M.bumpMap.channel),normalMapUv:Fe&&p(M.normalMap.channel),displacementMapUv:ct&&p(M.displacementMap.channel),emissiveMapUv:Be&&p(M.emissiveMap.channel),metalnessMapUv:I&&p(M.metalnessMap.channel),roughnessMapUv:b&&p(M.roughnessMap.channel),anisotropyMapUv:we&&p(M.anisotropyMap.channel),clearcoatMapUv:Je&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&p(M.sheenRoughnessMap.channel),specularMapUv:Ge&&p(M.specularMap.channel),specularColorMapUv:ht&&p(M.specularColorMap.channel),specularIntensityMapUv:H&&p(M.specularIntensityMap.channel),transmissionMapUv:Re&&p(M.transmissionMap.channel),thicknessMapUv:Z&&p(M.thicknessMap.channel),alphaMapUv:Te&&p(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Fe||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!W.attributes.uv&&(Se||Te),fog:!!J,useFog:M.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:Ye,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Se&&M.map.isVideoTexture===!0&&ft.getTransfer(M.map.colorSpace)===yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:xt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&M.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function S(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)C.push(G),C.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(E(C,M),A(C,M),C.push(s.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function E(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function A(M,C){a.disableAll(),C.supportsVertexTextures&&a.enable(0),C.instancing&&a.enable(1),C.instancingColor&&a.enable(2),C.instancingMorph&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),C.dispersion&&a.enable(20),C.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reverseDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),M.push(a.mask)}function L(M){const C=v[M.type];let G;if(C){const X=On[C];G=Am.clone(X.uniforms)}else G=M.uniforms;return G}function P(M,C){let G;for(let X=0,q=u.length;X<q;X++){const J=u[X];if(J.cacheKey===C){G=J,++G.usedTimes;break}}return G===void 0&&(G=new Bv(s,C,M,r),u.push(G)),G}function R(M){if(--M.usedTimes===0){const C=u.indexOf(M);u[C]=u[u.length-1],u.pop(),M.destroy()}}function F(M){l.remove(M)}function j(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:L,acquireProgram:P,releaseProgram:R,releaseShaderCache:F,programs:u,dispose:j}}function Gv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Wv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ih(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,_,v,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:v,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=v,m.group=p),e++,m}function a(h,d,f,_,v,p){const m=o(h,d,f,_,v,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,d,f,_,v,p){const m=o(h,d,f,_,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||Wv),n.length>1&&n.sort(d||Ih),i.length>1&&i.sort(d||Ih)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Xv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Lh,s.set(n,[o])):i>=r.length?(o=new Lh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function $v(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new We};break;case"SpotLight":t={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Yv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let jv=0;function qv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Kv(s){const e=new $v,t=Yv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new je,o=new je;function a(c){let u=0,h=0,d=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let f=0,_=0,v=0,p=0,m=0,S=0,E=0,A=0,L=0,P=0,R=0;c.sort(qv);for(let j=0,M=c.length;j<M;j++){const C=c[j],G=C.color,X=C.intensity,q=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=G.r*X,h+=G.g*X,d+=G.b*X;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],X);R++}else if(C.isDirectionalLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,Y=t.get(C);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=C.shadow.matrix,S++}n.directional[f]=W,f++}else if(C.isSpotLight){const W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(G).multiplyScalar(X),W.distance=q,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[v]=W;const K=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,K.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[v]=K.matrix,C.castShadow){const Y=t.get(C);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=J,A++}v++}else if(C.isRectAreaLight){const W=e.get(C);W.color.copy(G).multiplyScalar(X),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=W,p++}else if(C.isPointLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const K=C.shadow,Y=t.get(C);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,n.pointShadow[_]=Y,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=C.shadow.matrix,E++}n.point[_]=W,_++}else if(C.isHemisphereLight){const W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(X),W.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[m]=W,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==f||F.pointLength!==_||F.spotLength!==v||F.rectAreaLength!==p||F.hemiLength!==m||F.numDirectionalShadows!==S||F.numPointShadows!==E||F.numSpotShadows!==A||F.numSpotMaps!==L||F.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=A+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,F.directionalLength=f,F.pointLength=_,F.spotLength=v,F.rectAreaLength=p,F.hemiLength=m,F.numDirectionalShadows=S,F.numPointShadows=E,F.numSpotShadows=A,F.numSpotMaps=L,F.numLightProbes=R,n.version=jv++)}function l(c,u){let h=0,d=0,f=0,_=0,v=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const E=c[m];if(E.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(p),h++}else if(E.isSpotLight){const A=n.spot[f];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(p),f++}else if(E.isRectAreaLight){const A=n.rectArea[_];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const A=n.hemi[v];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Dh(s){const e=new Kv(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Zv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Dh(s),e.set(i,[a])):r>=o.length?(a=new Dh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Jv extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qv extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
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
}`;function nx(s,e,t){let n=new pl;const i=new Ce,r=new Ce,o=new pt,a=new Jv({depthPacking:Dp}),l=new Qv,c={},u=t.maxTextureSize,h={[ei]:Jt,[Jt]:ei,[mn]:mn},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:ex,fragmentShader:tx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Wt;_.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Mt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ud;let m=this.type;this.render=function(P,R,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const j=s.getRenderTarget(),M=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),G=s.state;G.setBlending(xi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const X=m!==qn&&this.type===qn,q=m===qn&&this.type!==qn;for(let J=0,W=P.length;J<W;J++){const K=P[J],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const pe=Y.getFrameExtents();if(i.multiply(pe),r.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/pe.x),i.x=r.x*pe.x,Y.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/pe.y),i.y=r.y*pe.y,Y.mapSize.y=r.y)),Y.map===null||X===!0||q===!0){const me=this.type!==qn?{minFilter:Kt,magFilter:Kt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Wi(i.x,i.y,me),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const ue=Y.getViewportCount();for(let me=0;me<ue;me++){const ke=Y.getViewport(me);o.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),G.viewport(o),Y.updateMatrices(K,me),n=Y.getFrustum(),A(R,F,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===qn&&S(Y,F),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(j,M,C)};function S(P,R){const F=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Wi(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(R,null,F,d,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(R,null,F,f,v,null)}function E(P,R,F,j){let M=null;const C=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)M=C;else if(M=F.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=M.uuid,X=R.uuid;let q=c[G];q===void 0&&(q={},c[G]=q);let J=q[X];J===void 0&&(J=M.clone(),q[X]=J,R.addEventListener("dispose",L)),M=J}if(M.visible=R.visible,M.wireframe=R.wireframe,j===qn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=s.properties.get(M);G.light=F}return M}function A(P,R,F,j,M){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===qn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const X=e.update(P),q=P.material;if(Array.isArray(q)){const J=X.groups;for(let W=0,K=J.length;W<K;W++){const Y=J[W],pe=q[Y.materialIndex];if(pe&&pe.visible){const ue=E(P,pe,j,M);P.onBeforeShadow(s,P,R,F,X,ue,Y),s.renderBufferDirect(F,null,X,ue,P,Y),P.onAfterShadow(s,P,R,F,X,ue,Y)}}}else if(q.visible){const J=E(P,q,j,M);P.onBeforeShadow(s,P,R,F,X,J,null),s.renderBufferDirect(F,null,X,J,P,null),P.onAfterShadow(s,P,R,F,X,J,null)}}const G=P.children;for(let X=0,q=G.length;X<q;X++)A(G[X],R,F,j,M)}function L(P){P.target.removeEventListener("dispose",L);for(const F in c){const j=c[F],M=P.target.uuid;M in j&&(j[M].dispose(),delete j[M])}}}const ix={[nc]:ic,[sc]:ac,[rc]:lc,[Ts]:oc,[ic]:nc,[ac]:sc,[lc]:rc,[oc]:Ts};function sx(s){function e(){let H=!1;const Re=new pt;let Z=null;const re=new pt(0,0,0,0);return{setMask:function(Te){Z!==Te&&!H&&(s.colorMask(Te,Te,Te,Te),Z=Te)},setLocked:function(Te){H=Te},setClear:function(Te,Ae,it,xt,Ot){Ot===!0&&(Te*=xt,Ae*=xt,it*=xt),Re.set(Te,Ae,it,xt),re.equals(Re)===!1&&(s.clearColor(Te,Ae,it,xt),re.copy(Re))},reset:function(){H=!1,Z=null,re.set(-1,0,0,0)}}}function t(){let H=!1,Re=!1,Z=null,re=null,Te=null;return{setReversed:function(Ae){Re=Ae},setTest:function(Ae){Ae?se(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(Ae){Z!==Ae&&!H&&(s.depthMask(Ae),Z=Ae)},setFunc:function(Ae){if(Re&&(Ae=ix[Ae]),re!==Ae){switch(Ae){case nc:s.depthFunc(s.NEVER);break;case ic:s.depthFunc(s.ALWAYS);break;case sc:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case rc:s.depthFunc(s.EQUAL);break;case oc:s.depthFunc(s.GEQUAL);break;case ac:s.depthFunc(s.GREATER);break;case lc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}re=Ae}},setLocked:function(Ae){H=Ae},setClear:function(Ae){Te!==Ae&&(s.clearDepth(Ae),Te=Ae)},reset:function(){H=!1,Z=null,re=null,Te=null}}}function n(){let H=!1,Re=null,Z=null,re=null,Te=null,Ae=null,it=null,xt=null,Ot=null;return{setTest:function(lt){H||(lt?se(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(lt){Re!==lt&&!H&&(s.stencilMask(lt),Re=lt)},setFunc:function(lt,vt,sn){(Z!==lt||re!==vt||Te!==sn)&&(s.stencilFunc(lt,vt,sn),Z=lt,re=vt,Te=sn)},setOp:function(lt,vt,sn){(Ae!==lt||it!==vt||xt!==sn)&&(s.stencilOp(lt,vt,sn),Ae=lt,it=vt,xt=sn)},setLocked:function(lt){H=lt},setClear:function(lt){Ot!==lt&&(s.clearStencil(lt),Ot=lt)},reset:function(){H=!1,Re=null,Z=null,re=null,Te=null,Ae=null,it=null,xt=null,Ot=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,_=!1,v=null,p=null,m=null,S=null,E=null,A=null,L=null,P=new We(0,0,0),R=0,F=!1,j=null,M=null,C=null,G=null,X=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,W=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=W>=2);let Y=null,pe={};const ue=s.getParameter(s.SCISSOR_BOX),me=s.getParameter(s.VIEWPORT),ke=new pt().fromArray(ue),Ye=new pt().fromArray(me);function ee(H,Re,Z,re){const Te=new Uint8Array(4),Ae=s.createTexture();s.bindTexture(H,Ae),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<Z;it++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,re,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Re+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return Ae}const ce={};ce[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),se(s.DEPTH_TEST),r.setFunc(Ts),Xe(!1),qe(Hl),se(s.CULL_FACE),N(xi);function se(H){c[H]!==!0&&(s.enable(H),c[H]=!0)}function _e(H){c[H]!==!1&&(s.disable(H),c[H]=!1)}function oe(H,Re){return u[H]!==Re?(s.bindFramebuffer(H,Re),u[H]=Re,H===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Re),H===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function he(H,Re){let Z=d,re=!1;if(H){Z=h.get(Re),Z===void 0&&(Z=[],h.set(Re,Z));const Te=H.textures;if(Z.length!==Te.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let Ae=0,it=Te.length;Ae<it;Ae++)Z[Ae]=s.COLOR_ATTACHMENT0+Ae;Z.length=Te.length,re=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,re=!0);re&&s.drawBuffers(Z)}function ye(H){return f!==H?(s.useProgram(H),f=H,!0):!1}const Se={[Bi]:s.FUNC_ADD,[np]:s.FUNC_SUBTRACT,[ip]:s.FUNC_REVERSE_SUBTRACT};Se[sp]=s.MIN,Se[rp]=s.MAX;const De={[op]:s.ZERO,[ap]:s.ONE,[cp]:s.SRC_COLOR,[ec]:s.SRC_ALPHA,[pp]:s.SRC_ALPHA_SATURATE,[dp]:s.DST_COLOR,[hp]:s.DST_ALPHA,[lp]:s.ONE_MINUS_SRC_COLOR,[tc]:s.ONE_MINUS_SRC_ALPHA,[fp]:s.ONE_MINUS_DST_COLOR,[up]:s.ONE_MINUS_DST_ALPHA,[mp]:s.CONSTANT_COLOR,[gp]:s.ONE_MINUS_CONSTANT_COLOR,[_p]:s.CONSTANT_ALPHA,[vp]:s.ONE_MINUS_CONSTANT_ALPHA};function N(H,Re,Z,re,Te,Ae,it,xt,Ot,lt){if(H===xi){_===!0&&(_e(s.BLEND),_=!1);return}if(_===!1&&(se(s.BLEND),_=!0),H!==tp){if(H!==v||lt!==F){if((p!==Bi||E!==Bi)&&(s.blendEquation(s.FUNC_ADD),p=Bi,E=Bi),lt)switch(H){case xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yr:s.blendFunc(s.ONE,s.ONE);break;case Vl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}m=null,S=null,A=null,L=null,P.set(0,0,0),R=0,v=H,F=lt}return}Te=Te||Re,Ae=Ae||Z,it=it||re,(Re!==p||Te!==E)&&(s.blendEquationSeparate(Se[Re],Se[Te]),p=Re,E=Te),(Z!==m||re!==S||Ae!==A||it!==L)&&(s.blendFuncSeparate(De[Z],De[re],De[Ae],De[it]),m=Z,S=re,A=Ae,L=it),(xt.equals(P)===!1||Ot!==R)&&(s.blendColor(xt.r,xt.g,xt.b,Ot),P.copy(xt),R=Ot),v=H,F=!1}function $e(H,Re){H.side===mn?_e(s.CULL_FACE):se(s.CULL_FACE);let Z=H.side===Jt;Re&&(Z=!Z),Xe(Z),H.blending===xs&&H.transparent===!1?N(xi):N(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),i.setMask(H.colorWrite);const re=H.stencilWrite;o.setTest(re),re&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ct(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(H){j!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),j=H)}function qe(H){H!==Jf?(se(s.CULL_FACE),H!==M&&(H===Hl?s.cullFace(s.BACK):H===Qf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),M=H}function Fe(H){H!==C&&(J&&s.lineWidth(H),C=H)}function ct(H,Re,Z){H?(se(s.POLYGON_OFFSET_FILL),(G!==Re||X!==Z)&&(s.polygonOffset(Re,Z),G=Re,X=Z)):_e(s.POLYGON_OFFSET_FILL)}function Be(H){H?se(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function I(H){H===void 0&&(H=s.TEXTURE0+q-1),Y!==H&&(s.activeTexture(H),Y=H)}function b(H,Re,Z){Z===void 0&&(Y===null?Z=s.TEXTURE0+q-1:Z=Y);let re=pe[Z];re===void 0&&(re={type:void 0,texture:void 0},pe[Z]=re),(re.type!==H||re.texture!==Re)&&(Y!==Z&&(s.activeTexture(Z),Y=Z),s.bindTexture(H,Re||ce[H]),re.type=H,re.texture=Re)}function k(){const H=pe[Y];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function te(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ne(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(H){ke.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ke.copy(H))}function ve(H){Ye.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Ye.copy(H))}function Ke(H,Re){let Z=l.get(Re);Z===void 0&&(Z=new WeakMap,l.set(Re,Z));let re=Z.get(H);re===void 0&&(re=s.getUniformBlockIndex(Re,H.name),Z.set(H,re))}function Ge(H,Re){const re=l.get(Re).get(H);a.get(Re)!==re&&(s.uniformBlockBinding(Re,re,H.__bindingPointIndex),a.set(Re,re))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},Y=null,pe={},u={},h=new WeakMap,d=[],f=null,_=!1,v=null,p=null,m=null,S=null,E=null,A=null,L=null,P=new We(0,0,0),R=0,F=!1,j=null,M=null,C=null,G=null,X=null,ke.set(0,0,s.canvas.width,s.canvas.height),Ye.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:se,disable:_e,bindFramebuffer:oe,drawBuffers:he,useProgram:ye,setBlending:N,setMaterial:$e,setFlipSided:Xe,setCullFace:qe,setLineWidth:Fe,setPolygonOffset:ct,setScissorTest:Be,activeTexture:I,bindTexture:b,unbindTexture:k,compressedTexImage2D:te,compressedTexImage3D:ae,texImage2D:Pe,texImage3D:He,updateUBOMapping:Ke,uniformBlockBinding:Ge,texStorage2D:Je,texStorage3D:de,texSubImage2D:ne,texSubImage3D:Ie,compressedTexSubImage2D:xe,compressedTexSubImage3D:we,scissor:Ve,viewport:ve,reset:ht}}function Nh(s,e,t,n){const i=rx(n);switch(t){case vd:return s*e;case yd:return s*e;case Sd:return s*e*2;case al:return s*e/i.components*i.byteLength;case cl:return s*e/i.components*i.byteLength;case Md:return s*e*2/i.components*i.byteLength;case ll:return s*e*2/i.components*i.byteLength;case xd:return s*e*3/i.components*i.byteLength;case hn:return s*e*4/i.components*i.byteLength;case hl:return s*e*4/i.components*i.byteLength;case xo:case yo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case So:case Mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fc:case mc:return Math.max(s,16)*Math.max(e,8)/4;case dc:case pc:return Math.max(s,8)*Math.max(e,8)/2;case gc:case _c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case wc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Eo:case Dc:case Nc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ed:case Oc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Uc:case Fc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rx(s){switch(s){case ti:case md:return{byteLength:1,components:1};case Sr:case gd:case Rr:return{byteLength:2,components:1};case rl:case ol:return{byteLength:2,components:4};case Gi:case sl:case bn:return{byteLength:4,components:1};case _d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ox(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,b){return f?new OffscreenCanvas(I,b):Tr("canvas")}function v(I,b,k){let te=1;const ae=Be(I);if((ae.width>k||ae.height>k)&&(te=k/Math.max(ae.width,ae.height)),te<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ne=Math.floor(te*ae.width),Ie=Math.floor(te*ae.height);h===void 0&&(h=_(ne,Ie));const xe=b?_(ne,Ie):h;return xe.width=ne,xe.height=Ie,xe.getContext("2d").drawImage(I,0,0,ne,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ne+"x"+Ie+")."),xe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),I;return I}function p(I){return I.generateMipmaps&&I.minFilter!==Kt&&I.minFilter!==ln}function m(I){s.generateMipmap(I)}function S(I,b,k,te,ae=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ne=b;if(b===s.RED&&(k===s.FLOAT&&(ne=s.R32F),k===s.HALF_FLOAT&&(ne=s.R16F),k===s.UNSIGNED_BYTE&&(ne=s.R8)),b===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(ne=s.R8UI),k===s.UNSIGNED_SHORT&&(ne=s.R16UI),k===s.UNSIGNED_INT&&(ne=s.R32UI),k===s.BYTE&&(ne=s.R8I),k===s.SHORT&&(ne=s.R16I),k===s.INT&&(ne=s.R32I)),b===s.RG&&(k===s.FLOAT&&(ne=s.RG32F),k===s.HALF_FLOAT&&(ne=s.RG16F),k===s.UNSIGNED_BYTE&&(ne=s.RG8)),b===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(ne=s.RG8UI),k===s.UNSIGNED_SHORT&&(ne=s.RG16UI),k===s.UNSIGNED_INT&&(ne=s.RG32UI),k===s.BYTE&&(ne=s.RG8I),k===s.SHORT&&(ne=s.RG16I),k===s.INT&&(ne=s.RG32I)),b===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(ne=s.RGB8UI),k===s.UNSIGNED_SHORT&&(ne=s.RGB16UI),k===s.UNSIGNED_INT&&(ne=s.RGB32UI),k===s.BYTE&&(ne=s.RGB8I),k===s.SHORT&&(ne=s.RGB16I),k===s.INT&&(ne=s.RGB32I)),b===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(ne=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(ne=s.RGBA16UI),k===s.UNSIGNED_INT&&(ne=s.RGBA32UI),k===s.BYTE&&(ne=s.RGBA8I),k===s.SHORT&&(ne=s.RGBA16I),k===s.INT&&(ne=s.RGBA32I)),b===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(ne=s.RGB9_E5),b===s.RGBA){const Ie=ae?Uo:ft.getTransfer(te);k===s.FLOAT&&(ne=s.RGBA32F),k===s.HALF_FLOAT&&(ne=s.RGBA16F),k===s.UNSIGNED_BYTE&&(ne=Ie===yt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(I,b){let k;return I?b===null||b===Gi||b===Rs?k=s.DEPTH24_STENCIL8:b===bn?k=s.DEPTH32F_STENCIL8:b===Sr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Gi||b===Rs?k=s.DEPTH_COMPONENT24:b===bn?k=s.DEPTH_COMPONENT32F:b===Sr&&(k=s.DEPTH_COMPONENT16),k}function A(I,b){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Kt&&I.minFilter!==ln?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function L(I){const b=I.target;b.removeEventListener("dispose",L),R(b),b.isVideoTexture&&u.delete(b)}function P(I){const b=I.target;b.removeEventListener("dispose",P),j(b)}function R(I){const b=n.get(I);if(b.__webglInit===void 0)return;const k=I.source,te=d.get(k);if(te){const ae=te[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&F(I),Object.keys(te).length===0&&d.delete(k)}n.remove(I)}function F(I){const b=n.get(I);s.deleteTexture(b.__webglTexture);const k=I.source,te=d.get(k);delete te[b.__cacheKey],o.memory.textures--}function j(I){const b=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let ae=0;ae<b.__webglFramebuffer[te].length;ae++)s.deleteFramebuffer(b.__webglFramebuffer[te][ae]);else s.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)s.deleteFramebuffer(b.__webglFramebuffer[te]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=I.textures;for(let te=0,ae=k.length;te<ae;te++){const ne=n.get(k[te]);ne.__webglTexture&&(s.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(k[te])}n.remove(I)}let M=0;function C(){M=0}function G(){const I=M;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),M+=1,I}function X(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function q(I,b){const k=n.get(I);if(I.isVideoTexture&&Fe(I),I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){const te=I.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(k,I,b);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+b)}function J(I,b){const k=n.get(I);if(I.version>0&&k.__version!==I.version){Ye(k,I,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+b)}function W(I,b){const k=n.get(I);if(I.version>0&&k.__version!==I.version){Ye(k,I,b);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+b)}function K(I,b){const k=n.get(I);if(I.version>0&&k.__version!==I.version){ee(k,I,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+b)}const Y={[ws]:s.REPEAT,[gi]:s.CLAMP_TO_EDGE,[No]:s.MIRRORED_REPEAT},pe={[Kt]:s.NEAREST,[pd]:s.NEAREST_MIPMAP_NEAREST,[hr]:s.NEAREST_MIPMAP_LINEAR,[ln]:s.LINEAR,[vo]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},ue={[Op]:s.NEVER,[Hp]:s.ALWAYS,[Up]:s.LESS,[wd]:s.LEQUAL,[Fp]:s.EQUAL,[kp]:s.GEQUAL,[Bp]:s.GREATER,[zp]:s.NOTEQUAL};function me(I,b){if(b.type===bn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ln||b.magFilter===vo||b.magFilter===hr||b.magFilter===Zn||b.minFilter===ln||b.minFilter===vo||b.minFilter===hr||b.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Y[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Y[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Y[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,pe[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,pe[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,ue[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Kt||b.minFilter!==hr&&b.minFilter!==Zn||b.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ke(I,b){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",L));const te=b.source;let ae=d.get(te);ae===void 0&&(ae={},d.set(te,ae));const ne=X(b);if(ne!==I.__cacheKey){ae[ne]===void 0&&(ae[ne]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ae[ne].usedTimes++;const Ie=ae[I.__cacheKey];Ie!==void 0&&(ae[I.__cacheKey].usedTimes--,Ie.usedTimes===0&&F(b)),I.__cacheKey=ne,I.__webglTexture=ae[ne].texture}return k}function Ye(I,b,k){let te=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=s.TEXTURE_3D);const ae=ke(I,b),ne=b.source;t.bindTexture(te,I.__webglTexture,s.TEXTURE0+k);const Ie=n.get(ne);if(ne.version!==Ie.__version||ae===!0){t.activeTexture(s.TEXTURE0+k);const xe=ft.getPrimaries(ft.workingColorSpace),we=b.colorSpace===mi?null:ft.getPrimaries(b.colorSpace),Je=b.colorSpace===mi||xe===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let de=v(b.image,!1,i.maxTextureSize);de=ct(b,de);const Pe=r.convert(b.format,b.colorSpace),He=r.convert(b.type);let Ve=S(b.internalFormat,Pe,He,b.colorSpace,b.isVideoTexture);me(te,b);let ve;const Ke=b.mipmaps,Ge=b.isVideoTexture!==!0,ht=Ie.__version===void 0||ae===!0,H=ne.dataReady,Re=A(b,de);if(b.isDepthTexture)Ve=E(b.format===Cs,b.type),ht&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,Ve,de.width,de.height):t.texImage2D(s.TEXTURE_2D,0,Ve,de.width,de.height,0,Pe,He,null));else if(b.isDataTexture)if(Ke.length>0){Ge&&ht&&t.texStorage2D(s.TEXTURE_2D,Re,Ve,Ke[0].width,Ke[0].height);for(let Z=0,re=Ke.length;Z<re;Z++)ve=Ke[Z],Ge?H&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,ve.width,ve.height,Pe,He,ve.data):t.texImage2D(s.TEXTURE_2D,Z,Ve,ve.width,ve.height,0,Pe,He,ve.data);b.generateMipmaps=!1}else Ge?(ht&&t.texStorage2D(s.TEXTURE_2D,Re,Ve,de.width,de.height),H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de.width,de.height,Pe,He,de.data)):t.texImage2D(s.TEXTURE_2D,0,Ve,de.width,de.height,0,Pe,He,de.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ge&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Ve,Ke[0].width,Ke[0].height,de.depth);for(let Z=0,re=Ke.length;Z<re;Z++)if(ve=Ke[Z],b.format!==hn)if(Pe!==null)if(Ge){if(H)if(b.layerUpdates.size>0){const Te=Nh(ve.width,ve.height,b.format,b.type);for(const Ae of b.layerUpdates){const it=ve.data.subarray(Ae*Te/ve.data.BYTES_PER_ELEMENT,(Ae+1)*Te/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,Ae,ve.width,ve.height,1,Pe,it,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,de.depth,Pe,ve.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Ve,ve.width,ve.height,de.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,de.depth,Pe,He,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Z,Ve,ve.width,ve.height,de.depth,0,Pe,He,ve.data)}else{Ge&&ht&&t.texStorage2D(s.TEXTURE_2D,Re,Ve,Ke[0].width,Ke[0].height);for(let Z=0,re=Ke.length;Z<re;Z++)ve=Ke[Z],b.format!==hn?Pe!==null?Ge?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,ve.width,ve.height,Pe,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,Z,Ve,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?H&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,ve.width,ve.height,Pe,He,ve.data):t.texImage2D(s.TEXTURE_2D,Z,Ve,ve.width,ve.height,0,Pe,He,ve.data)}else if(b.isDataArrayTexture)if(Ge){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Ve,de.width,de.height,de.depth),H)if(b.layerUpdates.size>0){const Z=Nh(de.width,de.height,b.format,b.type);for(const re of b.layerUpdates){const Te=de.data.subarray(re*Z/de.data.BYTES_PER_ELEMENT,(re+1)*Z/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,re,de.width,de.height,1,Pe,He,Te)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Pe,He,de.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ve,de.width,de.height,de.depth,0,Pe,He,de.data);else if(b.isData3DTexture)Ge?(ht&&t.texStorage3D(s.TEXTURE_3D,Re,Ve,de.width,de.height,de.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Pe,He,de.data)):t.texImage3D(s.TEXTURE_3D,0,Ve,de.width,de.height,de.depth,0,Pe,He,de.data);else if(b.isFramebufferTexture){if(ht)if(Ge)t.texStorage2D(s.TEXTURE_2D,Re,Ve,de.width,de.height);else{let Z=de.width,re=de.height;for(let Te=0;Te<Re;Te++)t.texImage2D(s.TEXTURE_2D,Te,Ve,Z,re,0,Pe,He,null),Z>>=1,re>>=1}}else if(Ke.length>0){if(Ge&&ht){const Z=Be(Ke[0]);t.texStorage2D(s.TEXTURE_2D,Re,Ve,Z.width,Z.height)}for(let Z=0,re=Ke.length;Z<re;Z++)ve=Ke[Z],Ge?H&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,Pe,He,ve):t.texImage2D(s.TEXTURE_2D,Z,Ve,Pe,He,ve);b.generateMipmaps=!1}else if(Ge){if(ht){const Z=Be(de);t.texStorage2D(s.TEXTURE_2D,Re,Ve,Z.width,Z.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,He,de)}else t.texImage2D(s.TEXTURE_2D,0,Ve,Pe,He,de);p(b)&&m(te),Ie.__version=ne.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ee(I,b,k){if(b.image.length!==6)return;const te=ke(I,b),ae=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+k);const ne=n.get(ae);if(ae.version!==ne.__version||te===!0){t.activeTexture(s.TEXTURE0+k);const Ie=ft.getPrimaries(ft.workingColorSpace),xe=b.colorSpace===mi?null:ft.getPrimaries(b.colorSpace),we=b.colorSpace===mi||Ie===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Je=b.isCompressedTexture||b.image[0].isCompressedTexture,de=b.image[0]&&b.image[0].isDataTexture,Pe=[];for(let re=0;re<6;re++)!Je&&!de?Pe[re]=v(b.image[re],!0,i.maxCubemapSize):Pe[re]=de?b.image[re].image:b.image[re],Pe[re]=ct(b,Pe[re]);const He=Pe[0],Ve=r.convert(b.format,b.colorSpace),ve=r.convert(b.type),Ke=S(b.internalFormat,Ve,ve,b.colorSpace),Ge=b.isVideoTexture!==!0,ht=ne.__version===void 0||te===!0,H=ae.dataReady;let Re=A(b,He);me(s.TEXTURE_CUBE_MAP,b);let Z;if(Je){Ge&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,Ke,He.width,He.height);for(let re=0;re<6;re++){Z=Pe[re].mipmaps;for(let Te=0;Te<Z.length;Te++){const Ae=Z[Te];b.format!==hn?Ve!==null?Ge?H&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,0,0,Ae.width,Ae.height,Ve,Ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,Ke,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,0,0,Ae.width,Ae.height,Ve,ve,Ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,Ke,Ae.width,Ae.height,0,Ve,ve,Ae.data)}}}else{if(Z=b.mipmaps,Ge&&ht){Z.length>0&&Re++;const re=Be(Pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,Ke,re.width,re.height)}for(let re=0;re<6;re++)if(de){Ge?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe[re].width,Pe[re].height,Ve,ve,Pe[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ke,Pe[re].width,Pe[re].height,0,Ve,ve,Pe[re].data);for(let Te=0;Te<Z.length;Te++){const it=Z[Te].image[re].image;Ge?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,0,0,it.width,it.height,Ve,ve,it.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,Ke,it.width,it.height,0,Ve,ve,it.data)}}else{Ge?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ve,ve,Pe[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ke,Ve,ve,Pe[re]);for(let Te=0;Te<Z.length;Te++){const Ae=Z[Te];Ge?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,0,0,Ve,ve,Ae.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,Ke,Ve,ve,Ae.image[re])}}}p(b)&&m(s.TEXTURE_CUBE_MAP),ne.__version=ae.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ce(I,b,k,te,ae,ne){const Ie=r.convert(k.format,k.colorSpace),xe=r.convert(k.type),we=S(k.internalFormat,Ie,xe,k.colorSpace);if(!n.get(b).__hasExternalTextures){const de=Math.max(1,b.width>>ne),Pe=Math.max(1,b.height>>ne);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,ne,we,de,Pe,b.depth,0,Ie,xe,null):t.texImage2D(ae,ne,we,de,Pe,0,Ie,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),qe(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,ae,n.get(k).__webglTexture,0,Xe(b)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,ae,n.get(k).__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(I,b,k){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){const te=b.depthTexture,ae=te&&te.isDepthTexture?te.type:null,ne=E(b.stencilBuffer,ae),Ie=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=Xe(b);qe(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,ne,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,ne,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ne,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,I)}else{const te=b.textures;for(let ae=0;ae<te.length;ae++){const ne=te[ae],Ie=r.convert(ne.format,ne.colorSpace),xe=r.convert(ne.type),we=S(ne.internalFormat,Ie,xe,ne.colorSpace),Je=Xe(b);k&&qe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,we,b.width,b.height):qe(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,we,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,we,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _e(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const te=n.get(b.depthTexture).__webglTexture,ae=Xe(b);if(b.depthTexture.format===ys)qe(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(b.depthTexture.format===Cs)qe(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function oe(I){const b=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const te=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),te){const ae=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,te.removeEventListener("dispose",ae)};te.addEventListener("dispose",ae),b.__depthDisposeCallback=ae}b.__boundDepthTexture=te}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");_e(b.__webglFramebuffer,I)}else if(k){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]===void 0)b.__webglDepthbuffer[te]=s.createRenderbuffer(),se(b.__webglDepthbuffer[te],I,!1);else{const ae=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=b.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),se(b.__webglDepthbuffer,I,!1);else{const te=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,ae)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function he(I,b,k){const te=n.get(I);b!==void 0&&ce(te.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&oe(I)}function ye(I){const b=I.texture,k=n.get(I),te=n.get(b);I.addEventListener("dispose",P);const ae=I.textures,ne=I.isWebGLCubeRenderTarget===!0,Ie=ae.length>1;if(Ie||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=b.version,o.memory.textures++),ne){k.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[xe]=[];for(let we=0;we<b.mipmaps.length;we++)k.__webglFramebuffer[xe][we]=s.createFramebuffer()}else k.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let xe=0;xe<b.mipmaps.length;xe++)k.__webglFramebuffer[xe]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let xe=0,we=ae.length;xe<we;xe++){const Je=n.get(ae[xe]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&qe(I)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let xe=0;xe<ae.length;xe++){const we=ae[xe];k.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[xe]);const Je=r.convert(we.format,we.colorSpace),de=r.convert(we.type),Pe=S(we.internalFormat,Je,de,we.colorSpace,I.isXRRenderTarget===!0),He=Xe(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Pe,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,k.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),se(k.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),me(s.TEXTURE_CUBE_MAP,b);for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)ce(k.__webglFramebuffer[xe][we],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we);else ce(k.__webglFramebuffer[xe],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);p(b)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let xe=0,we=ae.length;xe<we;xe++){const Je=ae[xe],de=n.get(Je);t.bindTexture(s.TEXTURE_2D,de.__webglTexture),me(s.TEXTURE_2D,Je),ce(k.__webglFramebuffer,I,Je,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,0),p(Je)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,te.__webglTexture),me(xe,b),b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)ce(k.__webglFramebuffer[we],I,b,s.COLOR_ATTACHMENT0,xe,we);else ce(k.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,xe,0);p(b)&&m(xe),t.unbindTexture()}I.depthBuffer&&oe(I)}function Se(I){const b=I.textures;for(let k=0,te=b.length;k<te;k++){const ae=b[k];if(p(ae)){const ne=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ie=n.get(ae).__webglTexture;t.bindTexture(ne,Ie),m(ne),t.unbindTexture()}}}const De=[],N=[];function $e(I){if(I.samples>0){if(qe(I)===!1){const b=I.textures,k=I.width,te=I.height;let ae=s.COLOR_BUFFER_BIT;const ne=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=n.get(I),xe=b.length>1;if(xe)for(let we=0;we<b.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let we=0;we<b.length;we++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);const Je=n.get(b[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,k,te,0,0,k,te,ae,s.NEAREST),l===!0&&(De.length=0,N.length=0,De.push(s.COLOR_ATTACHMENT0+we),I.depthBuffer&&I.resolveDepthBuffer===!1&&(De.push(ne),N.push(ne),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let we=0;we<b.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);const Je=n.get(b[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Xe(I){return Math.min(i.maxSamples,I.samples)}function qe(I){const b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Fe(I){const b=o.render.frame;u.get(I)!==b&&(u.set(I,b),I.update())}function ct(I,b){const k=I.colorSpace,te=I.format,ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==zt&&k!==mi&&(ft.getTransfer(k)===yt?(te!==hn||ae!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function Be(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=C,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=he,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=qe}function ax(s,e){function t(n,i=mi){let r;const o=ft.getTransfer(i);if(n===ti)return s.UNSIGNED_BYTE;if(n===rl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ol)return s.UNSIGNED_SHORT_5_5_5_1;if(n===_d)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===md)return s.BYTE;if(n===gd)return s.SHORT;if(n===Sr)return s.UNSIGNED_SHORT;if(n===sl)return s.INT;if(n===Gi)return s.UNSIGNED_INT;if(n===bn)return s.FLOAT;if(n===Rr)return s.HALF_FLOAT;if(n===vd)return s.ALPHA;if(n===xd)return s.RGB;if(n===hn)return s.RGBA;if(n===yd)return s.LUMINANCE;if(n===Sd)return s.LUMINANCE_ALPHA;if(n===ys)return s.DEPTH_COMPONENT;if(n===Cs)return s.DEPTH_STENCIL;if(n===al)return s.RED;if(n===cl)return s.RED_INTEGER;if(n===Md)return s.RG;if(n===ll)return s.RG_INTEGER;if(n===hl)return s.RGBA_INTEGER;if(n===xo||n===yo||n===So||n===Mo)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===fc||n===pc||n===mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===_c||n===vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gc||n===_c)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xc||n===yc||n===Sc||n===Mc||n===Ec||n===Tc||n===Ac||n===bc||n===wc||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ac)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ic)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===Dc||n===Nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Eo)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ed||n===Oc||n===Uc||n===Fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class cx extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zt extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lx={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ux=`
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

}`;class dx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Lt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ni({vertexShader:hx,fragmentShader:ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fx extends Xi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const v=new dx,p=t.getContextAttributes();let m=null,S=null;const E=[],A=[],L=new Ce;let P=null;const R=new qt;R.layers.enable(1),R.viewport=new pt;const F=new qt;F.layers.enable(2),F.viewport=new pt;const j=[R,F],M=new cx;M.layers.enable(1),M.layers.enable(2);let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=E[ee];return ce===void 0&&(ce=new ba,E[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=E[ee];return ce===void 0&&(ce=new ba,E[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=E[ee];return ce===void 0&&(ce=new ba,E[ee]=ce),ce.getHandSpace()};function X(ee){const ce=A.indexOf(ee.inputSource);if(ce===-1)return;const se=E[ce];se!==void 0&&(se.update(ee.inputSource,ee.frame,c||o),se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function q(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",J);for(let ee=0;ee<E.length;ee++){const ce=A[ee];ce!==null&&(A[ee]=null,E[ee].disconnect(ce))}C=null,G=null,v.reset(),e.setRenderTarget(m),f=null,d=null,h=null,i=null,S=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",q),i.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const ce={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Wi(f.framebufferWidth,f.framebufferHeight,{format:hn,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ce=null,se=null,_e=null;p.depth&&(_e=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=p.stencil?Cs:ys,se=p.stencil?Rs:Gi);const oe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(oe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Wi(d.textureWidth,d.textureHeight,{format:hn,type:ti,depthTexture:new zd(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(ee){for(let ce=0;ce<ee.removed.length;ce++){const se=ee.removed[ce],_e=A.indexOf(se);_e>=0&&(A[_e]=null,E[_e].disconnect(se))}for(let ce=0;ce<ee.added.length;ce++){const se=ee.added[ce];let _e=A.indexOf(se);if(_e===-1){for(let he=0;he<E.length;he++)if(he>=A.length){A.push(se),_e=he;break}else if(A[he]===null){A[he]=se,_e=he;break}if(_e===-1)break}const oe=E[_e];oe&&oe.connect(se)}}const W=new D,K=new D;function Y(ee,ce,se){W.setFromMatrixPosition(ce.matrixWorld),K.setFromMatrixPosition(se.matrixWorld);const _e=W.distanceTo(K),oe=ce.projectionMatrix.elements,he=se.projectionMatrix.elements,ye=oe[14]/(oe[10]-1),Se=oe[14]/(oe[10]+1),De=(oe[9]+1)/oe[5],N=(oe[9]-1)/oe[5],$e=(oe[8]-1)/oe[0],Xe=(he[8]+1)/he[0],qe=ye*$e,Fe=ye*Xe,ct=_e/(-$e+Xe),Be=ct*-$e;if(ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Be),ee.translateZ(ct),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),oe[10]===-1)ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const I=ye+ct,b=Se+ct,k=qe-Be,te=Fe+(_e-Be),ae=De*Se/b*I,ne=N*Se/b*I;ee.projectionMatrix.makePerspective(k,te,ae,ne,I,b),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function pe(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let ce=ee.near,se=ee.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(se=v.depthFar)),M.near=F.near=R.near=ce,M.far=F.far=R.far=se,(C!==M.near||G!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,G=M.far);const _e=ee.parent,oe=M.cameras;pe(M,_e);for(let he=0;he<oe.length;he++)pe(oe[he],_e);oe.length===2?Y(M,R,F):M.projectionMatrix.copy(R.projectionMatrix),ue(ee,M,_e)};function ue(ee,ce,se){se===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ps*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let me=null;function ke(ee,ce){if(u=ce.getViewerPose(c||o),_=ce,u!==null){const se=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let _e=!1;se.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let he=0;he<se.length;he++){const ye=se[he];let Se=null;if(f!==null)Se=f.getViewport(ye);else{const N=h.getViewSubImage(d,ye);Se=N.viewport,he===0&&(e.setRenderTargetTextures(S,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(S))}let De=j[he];De===void 0&&(De=new qt,De.layers.enable(he),De.viewport=new pt,j[he]=De),De.matrix.fromArray(ye.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ye.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Se.x,Se.y,Se.width,Se.height),he===0&&(M.matrix.copy(De.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push(De)}const oe=i.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const he=h.getDepthInformation(se[0]);he&&he.isValid&&he.texture&&v.init(e,he,i.renderState)}}for(let se=0;se<E.length;se++){const _e=A[se],oe=E[se];_e!==null&&oe!==void 0&&oe.update(_e,ce,c||o)}me&&me(ee,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),_=null}const Ye=new Bd;Ye.setAnimationLoop(ke),this.setAnimationLoop=function(ee){me=ee},this.dispose=function(){}}}const wi=new _n,px=new je;function mx(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Od(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,E,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,A)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),E=S.envMap,A=S.envMapRotation;E&&(p.envMap.value=E,wi.copy(A),wi.x*=-1,wi.y*=-1,wi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),p.envMapRotation.value.setFromMatrix4(px.makeRotationFromEuler(wi)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gx(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const A=E.program;n.uniformBlockBinding(S,A)}function c(S,E){let A=i[S.id];A===void 0&&(_(S),A=u(S),i[S.id]=A,S.addEventListener("dispose",p));const L=E.program;n.updateUBOMapping(S,L);const P=e.render.frame;r[S.id]!==P&&(d(S),r[S.id]=P)}function u(S){const E=h();S.__bindingPointIndex=E;const A=s.createBuffer(),L=S.__size,P=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,L,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,A),A}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=i[S.id],A=S.uniforms,L=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let P=0,R=A.length;P<R;P++){const F=Array.isArray(A[P])?A[P]:[A[P]];for(let j=0,M=F.length;j<M;j++){const C=F[j];if(f(C,P,j,L)===!0){const G=C.__offset,X=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let J=0;J<X.length;J++){const W=X[J],K=v(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,G+q,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,E,A,L){const P=S.value,R=E+"_"+A;if(L[R]===void 0)return typeof P=="number"||typeof P=="boolean"?L[R]=P:L[R]=P.clone(),!0;{const F=L[R];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return L[R]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function _(S){const E=S.uniforms;let A=0;const L=16;for(let R=0,F=E.length;R<F;R++){const j=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,C=j.length;M<C;M++){const G=j[M],X=Array.isArray(G.value)?G.value:[G.value];for(let q=0,J=X.length;q<J;q++){const W=X[q],K=v(W),Y=A%L,pe=Y%K.boundary,ue=Y+pe;A+=pe,ue!==0&&L-ue<K.storage&&(A+=L-ue),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=A,A+=K.storage}}}const P=A%L;return P>0&&(A+=L-P),S.__size=A,S.__cache={},this}function v(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function p(S){const E=S.target;E.removeEventListener("dispose",p);const A=o.indexOf(E.__bindingPointIndex);o.splice(A,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function m(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class _x{constructor(e={}){const{canvas:t=sm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=yi,this.toneMappingExposure=1;const E=this;let A=!1,L=0,P=0,R=null,F=-1,j=null;const M=new pt,C=new pt;let G=null;const X=new We(0);let q=0,J=t.width,W=t.height,K=1,Y=null,pe=null;const ue=new pt(0,0,J,W),me=new pt(0,0,J,W);let ke=!1;const Ye=new pl;let ee=!1,ce=!1;const se=new je,_e=new je,oe=new D,he=new pt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function De(){return R===null?K:1}let N=n;function $e(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),N===null){const U="webgl2";if(N=$e(U,T),N===null)throw $e(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Xe,qe,Fe,ct,Be,I,b,k,te,ae,ne,Ie,xe,we,Je,de,Pe,He,Ve,ve,Ke,Ge,ht,H;function Re(){Xe=new M_(N),Xe.init(),Ge=new ax(N,Xe),qe=new g_(N,Xe,e,Ge),Fe=new sx(N),qe.reverseDepthBuffer&&Fe.buffers.depth.setReversed(!0),ct=new A_(N),Be=new Gv,I=new ox(N,Xe,Fe,Be,qe,Ge,ct),b=new v_(E),k=new S_(E),te=new Lm(N),ht=new p_(N,te),ae=new E_(N,te,ct,ht),ne=new w_(N,ae,te,ct),Ve=new b_(N,qe,I),de=new __(Be),Ie=new Vv(E,b,k,Xe,qe,ht,de),xe=new mx(E,Be),we=new Xv,Je=new Zv(Xe),He=new f_(E,b,k,Fe,ne,d,l),Pe=new nx(E,ne,qe),H=new gx(N,ct,qe,Fe),ve=new m_(N,Xe,ct),Ke=new T_(N,Xe,ct),ct.programs=Ie.programs,E.capabilities=qe,E.extensions=Xe,E.properties=Be,E.renderLists=we,E.shadowMap=Pe,E.state=Fe,E.info=ct}Re();const Z=new fx(E,N);this.xr=Z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=Xe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Xe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(J,W,!1))},this.getSize=function(T){return T.set(J,W)},this.setSize=function(T,U,B=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,W=U,t.width=Math.floor(T*K),t.height=Math.floor(U*K),B===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(J*K,W*K).floor()},this.setDrawingBufferSize=function(T,U,B){J=T,W=U,K=B,t.width=Math.floor(T*B),t.height=Math.floor(U*B),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(ue)},this.setViewport=function(T,U,B,V){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,U,B,V),Fe.viewport(M.copy(ue).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(me)},this.setScissor=function(T,U,B,V){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,U,B,V),Fe.scissor(C.copy(me).multiplyScalar(K).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(T){Fe.setScissorTest(ke=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(T=!0,U=!0,B=!0){let V=0;if(T){let O=!1;if(R!==null){const Q=R.texture.format;O=Q===hl||Q===ll||Q===cl}if(O){const Q=R.texture.type,$=Q===ti||Q===Gi||Q===Sr||Q===Rs||Q===rl||Q===ol,le=He.getClearColor(),Me=He.getClearAlpha(),be=le.r,ge=le.g,fe=le.b;$?(f[0]=be,f[1]=ge,f[2]=fe,f[3]=Me,N.clearBufferuiv(N.COLOR,0,f)):(_[0]=be,_[1]=ge,_[2]=fe,_[3]=Me,N.clearBufferiv(N.COLOR,0,_))}else V|=N.COLOR_BUFFER_BIT}U&&(V|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),we.dispose(),Je.dispose(),Be.dispose(),b.dispose(),k.dispose(),ne.dispose(),ht.dispose(),H.dispose(),Ie.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",un),Z.removeEventListener("sessionend",In),rn.stop()};function re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=ct.autoReset,U=Pe.enabled,B=Pe.autoUpdate,V=Pe.needsUpdate,O=Pe.type;Re(),ct.autoReset=T,Pe.enabled=U,Pe.autoUpdate=B,Pe.needsUpdate=V,Pe.type=O}function Ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function it(T){const U=T.target;U.removeEventListener("dispose",it),xt(U)}function xt(T){Ot(T),Be.remove(T)}function Ot(T){const U=Be.get(T).programs;U!==void 0&&(U.forEach(function(B){Ie.releaseProgram(B)}),T.isShaderMaterial&&Ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,B,V,O,Q){U===null&&(U=ye);const $=O.isMesh&&O.matrixWorld.determinant()<0,le=Le(T,U,B,V,O);Fe.setMaterial(V,$);let Me=B.index,be=1;if(V.wireframe===!0){if(Me=ae.getWireframeAttribute(B),Me===void 0)return;be=2}const ge=B.drawRange,fe=B.attributes.position;let Qe=ge.start*be,st=(ge.start+ge.count)*be;Q!==null&&(Qe=Math.max(Qe,Q.start*be),st=Math.min(st,(Q.start+Q.count)*be)),Me!==null?(Qe=Math.max(Qe,0),st=Math.min(st,Me.count)):fe!=null&&(Qe=Math.max(Qe,0),st=Math.min(st,fe.count));const rt=st-Qe;if(rt<0||rt===1/0)return;ht.setup(O,V,le,B,Me);let ut,ze=ve;if(Me!==null&&(ut=te.get(Me),ze=Ke,ze.setIndex(ut)),O.isMesh)V.wireframe===!0?(Fe.setLineWidth(V.wireframeLinewidth*De()),ze.setMode(N.LINES)):ze.setMode(N.TRIANGLES);else if(O.isLine){let Ne=V.linewidth;Ne===void 0&&(Ne=1),Fe.setLineWidth(Ne*De()),O.isLineSegments?ze.setMode(N.LINES):O.isLineLoop?ze.setMode(N.LINE_LOOP):ze.setMode(N.LINE_STRIP)}else O.isPoints?ze.setMode(N.POINTS):O.isSprite&&ze.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ze.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))ze.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ne=O._multiDrawStarts,gt=O._multiDrawCounts,at=O._multiDrawCount,Tt=Me?te.get(Me).bytesPerElement:1,on=Be.get(V).currentProgram.getUniforms();for(let Xt=0;Xt<at;Xt++)on.setValue(N,"_gl_DrawID",Xt),ze.render(Ne[Xt]/Tt,gt[Xt])}else if(O.isInstancedMesh)ze.renderInstances(Qe,rt,O.count);else if(B.isInstancedBufferGeometry){const Ne=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,gt=Math.min(B.instanceCount,Ne);ze.renderInstances(Qe,rt,gt)}else ze.render(Qe,rt)};function lt(T,U,B){T.transparent===!0&&T.side===mn&&T.forceSinglePass===!1?(T.side=Jt,T.needsUpdate=!0,z(T,U,B),T.side=ei,T.needsUpdate=!0,z(T,U,B),T.side=mn):z(T,U,B)}this.compile=function(T,U,B=null){B===null&&(B=T),p=Je.get(B),p.init(U),S.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==B&&T.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const Q=O.material;if(Q)if(Array.isArray(Q))for(let $=0;$<Q.length;$++){const le=Q[$];lt(le,B,O),V.add(le)}else lt(Q,B,O),V.add(Q)}),S.pop(),p=null,V},this.compileAsync=function(T,U,B=null){const V=this.compile(T,U,B);return new Promise(O=>{function Q(){if(V.forEach(function($){Be.get($).currentProgram.isReady()&&V.delete($)}),V.size===0){O(T);return}setTimeout(Q,10)}Xe.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let vt=null;function sn(T){vt&&vt(T)}function un(){rn.stop()}function In(){rn.start()}const rn=new Bd;rn.setAnimationLoop(sn),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(T){vt=T,Z.setAnimationLoop(T),T===null?rn.stop():rn.start()},Z.addEventListener("sessionstart",un),Z.addEventListener("sessionend",In),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(U),U=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,U,R),p=Je.get(T,S.length),p.init(U),S.push(p),_e.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ye.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,ee=de.init(this.clippingPlanes,ce),v=we.get(T,m.length),v.init(),m.push(v),Z.enabled===!0&&Z.isPresenting===!0){const Q=E.xr.getDepthSensingMesh();Q!==null&&Si(Q,U,-1/0,E.sortObjects)}Si(T,U,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(Y,pe),Se=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Se&&He.addToRenderList(v,T),this.info.render.frame++,ee===!0&&de.beginShadows();const B=p.state.shadowsArray;Pe.render(B,T,U),ee===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=v.opaque,O=v.transmissive;if(p.setupLights(),U.isArrayCamera){const Q=U.cameras;if(O.length>0)for(let $=0,le=Q.length;$<le;$++){const Me=Q[$];g(V,O,T,Me)}Se&&He.render(T);for(let $=0,le=Q.length;$<le;$++){const Me=Q[$];x(v,T,Me,Me.viewport)}}else O.length>0&&g(V,O,T,U),Se&&He.render(T),x(v,T,U);R!==null&&(I.updateMultisampleRenderTarget(R),I.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(E,T,U),ht.resetDefaultState(),F=-1,j=null,S.pop(),S.length>0?(p=S[S.length-1],ee===!0&&de.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Si(T,U,B,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ye.intersectsSprite(T)){V&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_e);const $=ne.update(T),le=T.material;le.visible&&v.push(T,$,le,B,he.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ye.intersectsObject(T))){const $=ne.update(T),le=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),he.copy(T.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),he.copy($.boundingSphere.center)),he.applyMatrix4(T.matrixWorld).applyMatrix4(_e)),Array.isArray(le)){const Me=$.groups;for(let be=0,ge=Me.length;be<ge;be++){const fe=Me[be],Qe=le[fe.materialIndex];Qe&&Qe.visible&&v.push(T,$,Qe,B,he.z,fe)}}else le.visible&&v.push(T,$,le,B,he.z,null)}}const Q=T.children;for(let $=0,le=Q.length;$<le;$++)Si(Q[$],U,B,V)}function x(T,U,B,V){const O=T.opaque,Q=T.transmissive,$=T.transparent;p.setupLightsView(B),ee===!0&&de.setGlobalState(E.clippingPlanes,B),V&&Fe.viewport(M.copy(V)),O.length>0&&y(O,U,B),Q.length>0&&y(Q,U,B),$.length>0&&y($,U,B),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function g(T,U,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Wi(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Rr:ti,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const Q=p.state.transmissionRenderTarget[V.id],$=V.viewport||M;Q.setSize($.z,$.w);const le=E.getRenderTarget();E.setRenderTarget(Q),E.getClearColor(X),q=E.getClearAlpha(),q<1&&E.setClearColor(16777215,.5),E.clear(),Se&&He.render(B);const Me=E.toneMapping;E.toneMapping=yi;const be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ee===!0&&de.setGlobalState(E.clippingPlanes,V),y(T,B,V),I.updateMultisampleRenderTarget(Q),I.updateRenderTargetMipmap(Q),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let fe=0,Qe=U.length;fe<Qe;fe++){const st=U[fe],rt=st.object,ut=st.geometry,ze=st.material,Ne=st.group;if(ze.side===mn&&rt.layers.test(V.layers)){const gt=ze.side;ze.side=Jt,ze.needsUpdate=!0,w(rt,B,V,ut,ze,Ne),ze.side=gt,ze.needsUpdate=!0,ge=!0}}ge===!0&&(I.updateMultisampleRenderTarget(Q),I.updateRenderTargetMipmap(Q))}E.setRenderTarget(le),E.setClearColor(X,q),be!==void 0&&(V.viewport=be),E.toneMapping=Me}function y(T,U,B){const V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,Q=T.length;O<Q;O++){const $=T[O],le=$.object,Me=$.geometry,be=V===null?$.material:V,ge=$.group;le.layers.test(B.layers)&&w(le,U,B,Me,be,ge)}}function w(T,U,B,V,O,Q){T.onBeforeRender(E,U,B,V,O,Q),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(E,U,B,V,T,Q),O.transparent===!0&&O.side===mn&&O.forceSinglePass===!1?(O.side=Jt,O.needsUpdate=!0,E.renderBufferDirect(B,U,V,O,T,Q),O.side=ei,O.needsUpdate=!0,E.renderBufferDirect(B,U,V,O,T,Q),O.side=mn):E.renderBufferDirect(B,U,V,O,T,Q),T.onAfterRender(E,U,B,V,O,Q)}function z(T,U,B){U.isScene!==!0&&(U=ye);const V=Be.get(T),O=p.state.lights,Q=p.state.shadowsArray,$=O.state.version,le=Ie.getParameters(T,O.state,Q,U,B),Me=Ie.getProgramCacheKey(le);let be=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?k:b).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,be===void 0&&(T.addEventListener("dispose",it),be=new Map,V.programs=be);let ge=be.get(Me);if(ge!==void 0){if(V.currentProgram===ge&&V.lightsStateVersion===$)return Oe(T,le),ge}else le.uniforms=Ie.getUniforms(T),T.onBeforeCompile(le,E),ge=Ie.acquireProgram(le,Me),be.set(Me,ge),V.uniforms=le.uniforms;const fe=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(fe.clippingPlanes=de.uniform),Oe(T,le),V.needsLights=Ze(T),V.lightsStateVersion=$,V.needsLights&&(fe.ambientLightColor.value=O.state.ambient,fe.lightProbe.value=O.state.probe,fe.directionalLights.value=O.state.directional,fe.directionalLightShadows.value=O.state.directionalShadow,fe.spotLights.value=O.state.spot,fe.spotLightShadows.value=O.state.spotShadow,fe.rectAreaLights.value=O.state.rectArea,fe.ltc_1.value=O.state.rectAreaLTC1,fe.ltc_2.value=O.state.rectAreaLTC2,fe.pointLights.value=O.state.point,fe.pointLightShadows.value=O.state.pointShadow,fe.hemisphereLights.value=O.state.hemi,fe.directionalShadowMap.value=O.state.directionalShadowMap,fe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,fe.spotShadowMap.value=O.state.spotShadowMap,fe.spotLightMatrix.value=O.state.spotLightMatrix,fe.spotLightMap.value=O.state.spotLightMap,fe.pointShadowMap.value=O.state.pointShadowMap,fe.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=ge,V.uniformsList=null,ge}function ie(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Ao.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Oe(T,U){const B=Be.get(T);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Le(T,U,B,V,O){U.isScene!==!0&&(U=ye),I.resetTextureUnits();const Q=U.fog,$=V.isMeshStandardMaterial?U.environment:null,le=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:zt,Me=(V.isMeshStandardMaterial?k:b).get(V.envMap||$),be=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ge=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),fe=!!B.morphAttributes.position,Qe=!!B.morphAttributes.normal,st=!!B.morphAttributes.color;let rt=yi;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(rt=E.toneMapping);const ut=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ze=ut!==void 0?ut.length:0,Ne=Be.get(V),gt=p.state.lights;if(ee===!0&&(ce===!0||T!==j)){const tn=T===j&&V.id===F;de.setState(V,T,tn)}let at=!1;V.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==gt.state.version||Ne.outputColorSpace!==le||O.isBatchedMesh&&Ne.batching===!1||!O.isBatchedMesh&&Ne.batching===!0||O.isBatchedMesh&&Ne.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ne.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ne.instancing===!1||!O.isInstancedMesh&&Ne.instancing===!0||O.isSkinnedMesh&&Ne.skinning===!1||!O.isSkinnedMesh&&Ne.skinning===!0||O.isInstancedMesh&&Ne.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ne.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ne.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ne.instancingMorph===!1&&O.morphTexture!==null||Ne.envMap!==Me||V.fog===!0&&Ne.fog!==Q||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==de.numPlanes||Ne.numIntersection!==de.numIntersection)||Ne.vertexAlphas!==be||Ne.vertexTangents!==ge||Ne.morphTargets!==fe||Ne.morphNormals!==Qe||Ne.morphColors!==st||Ne.toneMapping!==rt||Ne.morphTargetsCount!==ze)&&(at=!0):(at=!0,Ne.__version=V.version);let Tt=Ne.currentProgram;at===!0&&(Tt=z(V,U,O));let on=!1,Xt=!1,si=!1;const dt=Tt.getUniforms(),en=Ne.uniforms;if(Fe.useProgram(Tt.program)&&(on=!0,Xt=!0,si=!0),V.id!==F&&(F=V.id,Xt=!0),on||j!==T){qe.reverseDepthBuffer?(se.copy(T.projectionMatrix),om(se),am(se),dt.setValue(N,"projectionMatrix",se)):dt.setValue(N,"projectionMatrix",T.projectionMatrix),dt.setValue(N,"viewMatrix",T.matrixWorldInverse);const tn=dt.map.cameraPosition;tn!==void 0&&tn.setValue(N,oe.setFromMatrixPosition(T.matrixWorld)),qe.logarithmicDepthBuffer&&dt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,Xt=!0,si=!0)}if(O.isSkinnedMesh){dt.setOptional(N,O,"bindMatrix"),dt.setOptional(N,O,"bindMatrixInverse");const tn=O.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),dt.setValue(N,"boneTexture",tn.boneTexture,I))}O.isBatchedMesh&&(dt.setOptional(N,O,"batchingTexture"),dt.setValue(N,"batchingTexture",O._matricesTexture,I),dt.setOptional(N,O,"batchingIdTexture"),dt.setValue(N,"batchingIdTexture",O._indirectTexture,I),dt.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&dt.setValue(N,"batchingColorTexture",O._colorsTexture,I));const kn=B.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Ve.update(O,B,Tt),(Xt||Ne.receiveShadow!==O.receiveShadow)&&(Ne.receiveShadow=O.receiveShadow,dt.setValue(N,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(en.envMap.value=Me,en.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(en.envMapIntensity.value=U.environmentIntensity),Xt&&(dt.setValue(N,"toneMappingExposure",E.toneMappingExposure),Ne.needsLights&&nt(en,si),Q&&V.fog===!0&&xe.refreshFogUniforms(en,Q),xe.refreshMaterialUniforms(en,V,K,W,p.state.transmissionRenderTarget[T.id]),Ao.upload(N,ie(Ne),en,I)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ao.upload(N,ie(Ne),en,I),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(N,"center",O.center),dt.setValue(N,"modelViewMatrix",O.modelViewMatrix),dt.setValue(N,"normalMatrix",O.normalMatrix),dt.setValue(N,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const tn=V.uniformsGroups;for(let Zo=0,qf=tn.length;Zo<qf;Zo++){const Bl=tn[Zo];H.update(Bl,Tt),H.bind(Bl,Tt)}}return Tt}function nt(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Ze(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,U,B){Be.get(T.texture).__webglTexture=U,Be.get(T.depthTexture).__webglTexture=B;const V=Be.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const B=Be.get(T);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,B=0){R=T,L=U,P=B;let V=!0,O=null,Q=!1,$=!1;if(T){const Me=Be.get(T);if(Me.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(Me.__webglFramebuffer===void 0)I.setupRenderTarget(T);else if(Me.__hasExternalTextures)I.rebindTextures(T,Be.get(T.texture).__webglTexture,Be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const fe=T.depthTexture;if(Me.__boundDepthTexture!==fe){if(fe!==null&&Be.has(fe)&&(T.width!==fe.image.width||T.height!==fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(T)}}const be=T.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&($=!0);const ge=Be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ge[U])?O=ge[U][B]:O=ge[U],Q=!0):T.samples>0&&I.useMultisampledRTT(T)===!1?O=Be.get(T).__webglMultisampledFramebuffer:Array.isArray(ge)?O=ge[B]:O=ge,M.copy(T.viewport),C.copy(T.scissor),G=T.scissorTest}else M.copy(ue).multiplyScalar(K).floor(),C.copy(me).multiplyScalar(K).floor(),G=ke;if(Fe.bindFramebuffer(N.FRAMEBUFFER,O)&&V&&Fe.drawBuffers(T,O),Fe.viewport(M),Fe.scissor(C),Fe.setScissorTest(G),Q){const Me=Be.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,B)}else if($){const Me=Be.get(T.texture),be=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.__webglTexture,B||0,be)}F=-1},this.readRenderTargetPixels=function(T,U,B,V,O,Q,$){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let le=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&$!==void 0&&(le=le[$]),le){Fe.bindFramebuffer(N.FRAMEBUFFER,le);try{const Me=T.texture,be=Me.format,ge=Me.type;if(!qe.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&B>=0&&B<=T.height-O&&N.readPixels(U,B,V,O,Ge.convert(be),Ge.convert(ge),Q)}finally{const Me=R!==null?Be.get(R).__webglFramebuffer:null;Fe.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(T,U,B,V,O,Q,$){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let le=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&$!==void 0&&(le=le[$]),le){const Me=T.texture,be=Me.format,ge=Me.type;if(!qe.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-V&&B>=0&&B<=T.height-O){Fe.bindFramebuffer(N.FRAMEBUFFER,le);const fe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,fe),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(U,B,V,O,Ge.convert(be),Ge.convert(ge),0);const Qe=R!==null?Be.get(R).__webglFramebuffer:null;Fe.bindFramebuffer(N.FRAMEBUFFER,Qe);const st=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await rm(N,st,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,fe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(fe),N.deleteSync(st),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,B=0){T.isTexture!==!0&&(To("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const V=Math.pow(2,-B),O=Math.floor(T.image.width*V),Q=Math.floor(T.image.height*V),$=U!==null?U.x:0,le=U!==null?U.y:0;I.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,$,le,O,Q),Fe.unbindTexture()},this.copyTextureToTexture=function(T,U,B=null,V=null,O=0){T.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],U=arguments[2],O=arguments[3]||0,B=null);let Q,$,le,Me,be,ge;B!==null?(Q=B.max.x-B.min.x,$=B.max.y-B.min.y,le=B.min.x,Me=B.min.y):(Q=T.image.width,$=T.image.height,le=0,Me=0),V!==null?(be=V.x,ge=V.y):(be=0,ge=0);const fe=Ge.convert(U.format),Qe=Ge.convert(U.type);I.setTexture2D(U,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const st=N.getParameter(N.UNPACK_ROW_LENGTH),rt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ut=N.getParameter(N.UNPACK_SKIP_PIXELS),ze=N.getParameter(N.UNPACK_SKIP_ROWS),Ne=N.getParameter(N.UNPACK_SKIP_IMAGES),gt=T.isCompressedTexture?T.mipmaps[O]:T.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,gt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,le),N.pixelStorei(N.UNPACK_SKIP_ROWS,Me),T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,be,ge,Q,$,fe,Qe,gt.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,be,ge,gt.width,gt.height,fe,gt.data):N.texSubImage2D(N.TEXTURE_2D,O,be,ge,Q,$,fe,Qe,gt),N.pixelStorei(N.UNPACK_ROW_LENGTH,st),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ut),N.pixelStorei(N.UNPACK_SKIP_ROWS,ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ne),O===0&&U.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(T,U,B=null,V=null,O=0){T.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,T=arguments[2],U=arguments[3],O=arguments[4]||0);let Q,$,le,Me,be,ge,fe,Qe,st;const rt=T.isCompressedTexture?T.mipmaps[O]:T.image;B!==null?(Q=B.max.x-B.min.x,$=B.max.y-B.min.y,le=B.max.z-B.min.z,Me=B.min.x,be=B.min.y,ge=B.min.z):(Q=rt.width,$=rt.height,le=rt.depth,Me=0,be=0,ge=0),V!==null?(fe=V.x,Qe=V.y,st=V.z):(fe=0,Qe=0,st=0);const ut=Ge.convert(U.format),ze=Ge.convert(U.type);let Ne;if(U.isData3DTexture)I.setTexture3D(U,0),Ne=N.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)I.setTexture2DArray(U,0),Ne=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const gt=N.getParameter(N.UNPACK_ROW_LENGTH),at=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Tt=N.getParameter(N.UNPACK_SKIP_PIXELS),on=N.getParameter(N.UNPACK_SKIP_ROWS),Xt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Me),N.pixelStorei(N.UNPACK_SKIP_ROWS,be),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ge),T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ne,O,fe,Qe,st,Q,$,le,ut,ze,rt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Ne,O,fe,Qe,st,Q,$,le,ut,rt.data):N.texSubImage3D(Ne,O,fe,Qe,st,Q,$,le,ut,ze,rt),N.pixelStorei(N.UNPACK_ROW_LENGTH,gt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Tt),N.pixelStorei(N.UNPACK_SKIP_ROWS,on),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xt),O===0&&U.generateMipmaps&&N.generateMipmap(Ne),Fe.unbindTexture()},this.initRenderTarget=function(T){Be.get(T).__webglFramebuffer===void 0&&I.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?I.setTextureCube(T,0):T.isData3DTexture?I.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?I.setTexture2DArray(T,0):I.setTexture2D(T,0),Fe.unbindTexture()},this.resetState=function(){L=0,P=0,R=null,Fe.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dl?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===Xo?"display-p3":"srgb"}}class vx extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kc,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new D;class Ar{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ar(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _l extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let as;const $s=new D,cs=new D,ls=new D,hs=new Ce,Ys=new Ce,Xd=new je,Jr=new D,js=new D,Qr=new D,Oh=new Ce,wa=new Ce,Uh=new Ce;class $d extends St{constructor(e=new _l){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wd(t,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new Ar(n,3,0,!1)),as.setAttribute("uv",new Ar(n,2,3,!1))}this.geometry=as,this.material=e,this.center=new Ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Xd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-ls.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;eo(Jr.set(-.5,-.5,0),ls,o,cs,i,r),eo(js.set(.5,-.5,0),ls,o,cs,i,r),eo(Qr.set(.5,.5,0),ls,o,cs,i,r),Oh.set(0,0),wa.set(1,0),Uh.set(1,1);let a=e.ray.intersectTriangle(Jr,js,Qr,!1,$s);if(a===null&&(eo(js.set(-.5,.5,0),ls,o,cs,i,r),wa.set(0,1),a=e.ray.intersectTriangle(Jr,Qr,js,!1,$s),a===null))return;const l=e.ray.origin.distanceTo($s);l<e.near||l>e.far||t.push({distance:l,point:$s.clone(),uv:gn.getInterpolation($s,Jr,js,Qr,Oh,wa,Uh,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function eo(s,e,t,n,i,r){hs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ys.x=r*hs.x-i*hs.y,Ys.y=i*hs.x+r*hs.y):Ys.copy(hs),s.copy(e),s.x+=Ys.x,s.y+=Ys.y,s.applyMatrix4(Xd)}const Fh=new D,Bh=new pt,zh=new pt,xx=new D,kh=new je,to=new D,Ra=new Un,Hh=new je,Ca=new $o;class yx extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wl,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ii),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,to),this.boundingBox.expandByPoint(to)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,to),this.boundingSphere.expandByPoint(to)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(i),e.ray.intersectsSphere(Ra)!==!1&&(Hh.copy(i).invert(),Ca.copy(e.ray).applyMatrix4(Hh),!(this.boundingBox!==null&&Ca.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ca)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Bh.fromBufferAttribute(i.attributes.skinIndex,e),zh.fromBufferAttribute(i.attributes.skinWeight,e),Fh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=zh.getComponent(r);if(o!==0){const a=Bh.getComponent(r);kh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(xx.copy(Fh).applyMatrix4(kh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Yd extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class jd extends Lt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Kt,u=Kt,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vh=new je,Sx=new je;class vl{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Sx;Vh.multiplyMatrices(a,t[r]),Vh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new vl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new jd(t,e,e,hn,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Yd),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Vc extends Qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new je,Gh=new je,no=[],Wh=new ii,Mx=new je,qs=new Mt,Ks=new Un;class Ex extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Mx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Wh.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(Wh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Ks.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),e.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,us),Gh.multiplyMatrices(n,us),qs.matrixWorld=Gh,qs.raycast(e,no);for(let o=0,a=no.length;o<a;o++){const l=no[o];l.instanceId=r,l.object=this,t.push(l)}no.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new jd(new Float32Array(i*this.count),i,this.count,al,bn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class br extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ho=new D,Vo=new D,Xh=new je,Zs=new $o,io=new Un,Pa=new D,$h=new D;class xl extends St{constructor(e=new Wt,t=new br){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ho.fromBufferAttribute(t,i-1),Vo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ho.distanceTo(Vo);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;Xh.copy(i).invert(),Zs.copy(e.ray).applyMatrix4(Xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=f,p=_-1;v<p;v+=c){const m=u.getX(v),S=u.getX(v+1),E=so(this,e,Zs,l,m,S);E&&t.push(E)}if(this.isLineLoop){const v=u.getX(_-1),p=u.getX(f),m=so(this,e,Zs,l,v,p);m&&t.push(m)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=f,p=_-1;v<p;v+=c){const m=so(this,e,Zs,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=so(this,e,Zs,l,_-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function so(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Ho.fromBufferAttribute(o,i),Vo.fromBufferAttribute(o,r),t.distanceSqToSegment(Ho,Vo,Pa,$h)>n)return;Pa.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Pa);if(!(l<e.near||l>e.far))return{distance:l,point:$h.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Yh=new D,jh=new D;class Ls extends xl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Yh.fromBufferAttribute(t,i),jh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yh.distanceTo(jh);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tx extends xl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class qd extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qh=new je,Gc=new $o,ro=new Un,oo=new D;class Ax extends St{constructor(e=new Wt,t=new qd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(i),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;qh.copy(i).invert(),Gc.copy(e.ray).applyMatrix4(qh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,v=f;_<v;_++){const p=c.getX(_);oo.fromBufferAttribute(h,p),Kh(oo,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=d,v=f;_<v;_++)oo.fromBufferAttribute(h,_),Kh(oo,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Kh(s,e,t,n,i,r,o){const a=Gc.distanceSqToPoint(s);if(a<t){const l=new D;Gc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Kd extends Lt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Ce:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],r=[],o=[],a=new D,l=new je;for(let f=0;f<=e;f++){const _=f/e;i[f]=this.getTangentAt(_,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(It(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(It(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yl extends Fn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ce){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class bx extends yl{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sl(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const ao=new D,Ia=new Sl,La=new Sl,Da=new Sl;class wx extends Fn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(ao.subVectors(i[0],i[1]).add(i[0]),c=ao);const h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(ao.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=ao),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),_<1e-4&&(_=v),p<1e-4&&(p=v),Ia.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,v,p),La.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,v,p),Da.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,v,p)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),La.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Da.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ia.calc(l),La.calc(l),Da.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Rx(s,e){const t=1-s;return t*t*e}function Cx(s,e){return 2*(1-s)*s*e}function Px(s,e){return s*s*e}function gr(s,e,t,n){return Rx(s,e)+Cx(s,t)+Px(s,n)}function Ix(s,e){const t=1-s;return t*t*t*e}function Lx(s,e){const t=1-s;return 3*t*t*s*e}function Dx(s,e){return 3*(1-s)*s*s*e}function Nx(s,e){return s*s*s*e}function _r(s,e,t,n,i){return Ix(s,e)+Lx(s,t)+Dx(s,n)+Nx(s,i)}class Zd extends Fn{constructor(e=new Ce,t=new Ce,n=new Ce,i=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ce){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(e,i.x,r.x,o.x,a.x),_r(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ox extends Fn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(e,i.x,r.x,o.x,a.x),_r(e,i.y,r.y,o.y,a.y),_r(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jd extends Fn{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ux extends Fn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qd extends Fn{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(gr(e,i.x,r.x,o.x),gr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fx extends Fn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(gr(e,i.x,r.x,o.x),gr(e,i.y,r.y,o.y),gr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ef extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Zh(a,l.x,c.x,u.x,h.x),Zh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ce().fromArray(i))}return this}}var Jh=Object.freeze({__proto__:null,ArcCurve:bx,CatmullRomCurve3:wx,CubicBezierCurve:Zd,CubicBezierCurve3:Ox,EllipseCurve:yl,LineCurve:Jd,LineCurve3:Ux,QuadraticBezierCurve:Qd,QuadraticBezierCurve3:Fx,SplineCurve:ef});class Bx extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Jh[i.type]().fromJSON(i))}return this}}class zx extends Bx{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Jd(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Qd(this.currentPoint.clone(),new Ce(e,t),new Ce(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Zd(this.currentPoint.clone(),new Ce(e,t),new Ce(n,i),new Ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ef(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new yl(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ml extends Wt{constructor(e=[new Ce(0,-.5),new Ce(.5,0),new Ce(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=It(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new D,d=new Ce,f=new D,_=new D,v=new D;let p=0,m=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:p=e[S+1].x-e[S].x,m=e[S+1].y-e[S].y,f.x=m*1,f.y=-p,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:p=e[S+1].x-e[S].x,m=e[S+1].y-e[S].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(_)}for(let S=0;S<=t;S++){const E=n+S*u*i,A=Math.sin(E),L=Math.cos(E);for(let P=0;P<=e.length-1;P++){h.x=e[P].x*A,h.y=e[P].y,h.z=e[P].x*L,o.push(h.x,h.y,h.z),d.x=S/t,d.y=P/(e.length-1),a.push(d.x,d.y);const R=l[3*P+0]*A,F=l[3*P+1],j=l[3*P+0]*L;c.push(R,F,j)}}for(let S=0;S<t;S++)for(let E=0;E<e.length-1;E++){const A=E+S*e.length,L=A,P=A+e.length,R=A+e.length+1,F=A+1;r.push(L,P,F),r.push(R,F,P)}this.setIndex(r),this.setAttribute("position",new At(o,3)),this.setAttribute("uv",new At(a,2)),this.setAttribute("normal",new At(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.points,e.segments,e.phiStart,e.phiLength)}}class El extends Ml{constructor(e=1,t=1,n=4,i=8){const r=new zx;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new El(e.radius,e.length,e.capSegments,e.radialSegments)}}class jo extends Wt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let _=0;const v=[],p=n/2;let m=0;S(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(d,3)),this.setAttribute("uv",new At(f,2));function S(){const A=new D,L=new D;let P=0;const R=(t-e)/n;for(let F=0;F<=r;F++){const j=[],M=F/r,C=M*(t-e)+e;for(let G=0;G<=i;G++){const X=G/i,q=X*l+a,J=Math.sin(q),W=Math.cos(q);L.x=C*J,L.y=-M*n+p,L.z=C*W,h.push(L.x,L.y,L.z),A.set(J,R,W).normalize(),d.push(A.x,A.y,A.z),f.push(X,1-M),j.push(_++)}v.push(j)}for(let F=0;F<i;F++)for(let j=0;j<r;j++){const M=v[j][F],C=v[j+1][F],G=v[j+1][F+1],X=v[j][F+1];e>0&&(u.push(M,C,X),P+=3),t>0&&(u.push(C,G,X),P+=3)}c.addGroup(m,P,0),m+=P}function E(A){const L=_,P=new Ce,R=new D;let F=0;const j=A===!0?e:t,M=A===!0?1:-1;for(let G=1;G<=i;G++)h.push(0,p*M,0),d.push(0,M,0),f.push(.5,.5),_++;const C=_;for(let G=0;G<=i;G++){const q=G/i*l+a,J=Math.cos(q),W=Math.sin(q);R.x=j*W,R.y=p*M,R.z=j*J,h.push(R.x,R.y,R.z),d.push(0,M,0),P.x=J*.5+.5,P.y=W*.5*M+.5,f.push(P.x,P.y),_++}for(let G=0;G<i;G++){const X=L+G,q=C+G;A===!0?u.push(q,q+1,X):u.push(q+1,q,X),F+=3}c.addGroup(m,F,A===!0?1:2),m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qo extends Wt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,d=new D,f=[],_=[],v=[],p=[];for(let m=0;m<=n;m++){const S=[],E=m/n;let A=0;m===0&&o===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let L=0;L<=t;L++){const P=L/t;h.x=-e*Math.cos(i+P*r)*Math.sin(o+E*a),h.y=e*Math.cos(o+E*a),h.z=e*Math.sin(i+P*r)*Math.sin(o+E*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),p.push(P+A,1-E),S.push(c++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const E=u[m][S+1],A=u[m][S],L=u[m+1][S],P=u[m+1][S+1];(m!==0||o>0)&&f.push(E,A,P),(m!==n-1||l<Math.PI)&&f.push(A,L,P)}this.setIndex(f),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qh extends Wt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,r=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let _=d,v=d+f;_<v;_+=3)for(let p=0;p<3;p++){const m=a.getX(_+p),S=a.getX(_+(p+1)%3);i.fromBufferAttribute(o,m),r.fromBufferAttribute(o,S),eu(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),eu(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new At(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function eu(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class Ds extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bn extends Ds{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function co(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function kx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Hx(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function tu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function tf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Pr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Vx extends Pr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ps,endingEnd:ps}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ms:r=e,a=2*t-n;break;case Oo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ms:o=e,l=2*n-t;break;case Oo:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),v=_*_,p=v*_,m=-d*p+2*d*v-d*_,S=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*_+1,E=(-1-f)*p+(1.5+f)*v+.5*_,A=f*p-f*v;for(let L=0;L!==a;++L)r[L]=m*o[u+L]+S*o[c+L]+E*o[l+L]+A*o[h+L];return r}}class nf extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class Gx extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class zn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=co(t,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:co(e.times,Array),values:co(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Er:t=this.InterpolantFactoryMethodLinear;break;case Jo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Er;case this.InterpolantFactoryMethodSmooth:return Jo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&kx(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Jo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let _=0;_!==n;++_){const v=t[h+_];if(v!==t[d+_]||v!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Er;class Bs extends zn{constructor(e,t,n){super(e,t,n)}}Bs.prototype.ValueTypeName="bool";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Mr;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class sf extends zn{}sf.prototype.ValueTypeName="color";class Ns extends zn{}Ns.prototype.ValueTypeName="number";class Wx extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)nn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Os extends zn{InterpolantFactoryMethodLinear(e){return new Wx(this.times,this.values,this.getValueSize(),e)}}Os.prototype.ValueTypeName="quaternion";Os.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends zn{constructor(e,t,n){super(e,t,n)}}zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=Mr;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends zn{}Us.prototype.ValueTypeName="vector";class Wc{constructor(e="",t=-1,n=[],i=ul){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($x(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(zn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Hx(l);l=tu(l,1,u),c=tu(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ns(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,_,v){if(f.length!==0){const p=[],m=[];tf(f,p,m,_),p.length!==0&&v.push(new h(d,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let v=0;v<d[_].morphTargets.length;v++)f[d[_].morphTargets[v]]=-1;for(const v in f){const p=[],m=[];for(let S=0;S!==d[_].morphTargets.length;++S){const E=d[_];p.push(E.time),m.push(E.morphTarget===v?1:0)}i.push(new Ns(".morphTargetInfluence["+v+"]",p,m))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Us,f+".position",d,"pos",i),n(Os,f+".quaternion",d,"rot",i),n(Us,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Xx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ns;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return sf;case"quaternion":return Os;case"bool":case"boolean":return Bs;case"string":return zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function $x(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Xx(s.type);if(s.times===void 0){const t=[],n=[];tf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const _i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Yx{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const jx=new Yx;class ks{constructor(e){this.manager=e!==void 0?e:jx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class qx extends Error{constructor(e,t){super(e),this.response=t}}class rf extends ks{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:i});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=$n[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let v=0;const p=new ReadableStream({start(m){S();function S(){h.read().then(({done:E,value:A})=>{if(E)m.close();else{v+=A.byteLength;const L=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:f});for(let P=0,R=u.length;P<R;P++){const F=u[P];F.onProgress&&F.onProgress(L)}m.enqueue(A),S()}},E=>{m.error(E)})}}});return new Response(p)}else throw new qx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{_i.add(e,c);const u=$n[e];delete $n[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=$n[e];if(u===void 0)throw this.manager.itemError(e),c;delete $n[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Kx extends ks{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_i.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Tr("img");function l(){u(),_i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class of extends ks{constructor(e){super(e)}load(e,t,n,i){const r=new Lt,o=new Kx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ir extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Zx extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Na=new je,nu=new D,iu=new D;class Tl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(nu),iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(iu),t.updateMatrixWorld(),Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jx extends Tl{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ps*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qx extends Ir{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Jx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const su=new je,Js=new D,Oa=new D;class ey extends Tl{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),n.position.copy(Js),Oa.copy(n.position),Oa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oa),n.updateMatrixWorld(),i.makeTranslation(-Js.x,-Js.y,-Js.z),su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su)}}class ty extends Ir{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ey}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ny extends Tl{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class af extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new ny}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iy extends Ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class sy extends ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_i.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),_i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(e,l),r.manager.itemStart(e)}}class ry{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){nn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;nn.multiplyQuaternionsFlat(e,o,e,t,e,n),nn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Al="\\[\\]\\.:\\/",oy=new RegExp("["+Al+"]","g"),bl="[^"+Al+"]",ay="[^"+Al.replace("\\.","")+"]",cy=/((?:WC+[\/:])*)/.source.replace("WC",bl),ly=/(WCOD+)?/.source.replace("WCOD",ay),hy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),uy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),dy=new RegExp("^"+cy+ly+hy+uy+"$"),fy=["material","materials","bones","map"];class py{constructor(e,t,n){const i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class mt{constructor(e,t,n){this.path=t,this.parsedPath=n||mt.parseTrackName(t),this.node=mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new mt.Composite(e,t,n):new mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oy,"")}static parseTrackName(e){const t=dy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);fy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}mt.Composite=py;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class my{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ps,endingEnd:ps};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Bc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Pp:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case ul:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Cp;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Td){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ms,i.endingEnd=ms):(e?i.endingStart=this.zeroSlopeAtStart?ms:ps:i.endingStart=Oo,t?i.endingEnd=this.zeroSlopeAtEnd?ms:ps:i.endingEnd=Oo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const gy=new Float32Array(1);class Xc extends Xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=i[h],f=d.name;let _=u[f];if(_!==void 0)++_.referenceCount,o[h]=_;else{if(_=o[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,f));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;_=new ry(mt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,f),o[h]=_}a[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new nf(new Float32Array(2),new Float32Array(2),1,gy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Wc.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ul),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new my(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Wc.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class _y extends Ls{constructor(e=10,t=10,n=4473924,i=8947848){n=new We(n),i=new We(i);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,_=-a;d<=t;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const v=d===r?n:i;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const u=new Wt;u.setAttribute("position",new At(l,3)),u.setAttribute("color",new At(c,3));const h=new br({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);function wl(s){const e=new Map,t=new Map,n=s.clone();return cf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function cf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)cf(s.children[n],e.children[n],t)}function vy(s){if(Object.prototype.hasOwnProperty.call(s,"__esModule"))return s;var e=s.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var i=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return s[n]}})}),t}var dr={exports:{}},xy=dr.exports,ru;function Rl(){return ru||(ru=1,(function(s,e){(function(t,n){n(e)})(xy,(function(t){var n=function(x,g){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,w){y.__proto__=w}||function(y,w){for(var z in w)Object.prototype.hasOwnProperty.call(w,z)&&(y[z]=w[z])},n(x,g)};function i(x,g){if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");n(x,g);function y(){this.constructor=x}x.prototype=g===null?Object.create(g):(y.prototype=g.prototype,new y)}function r(x,g,y,w){var z=arguments.length,ie=z<3?g:w,Oe;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")ie=Reflect.decorate(x,g,y,w);else for(var Le=x.length-1;Le>=0;Le--)(Oe=x[Le])&&(ie=(z<3?Oe(ie):z>3?Oe(g,y,ie):Oe(g,y))||ie);return z>3&&ie&&Object.defineProperty(g,y,ie),ie}function o(x,g,y){if(arguments.length===2)for(var w=0,z=g.length,ie;w<z;w++)(ie||!(w in g))&&(ie||(ie=Array.prototype.slice.call(g,0,w)),ie[w]=g[w]);return x.concat(ie||Array.prototype.slice.call(g))}typeof SuppressedError=="function"&&SuppressedError;var a=255,l=213;t.OPERATION=void 0,(function(x){x[x.ADD=128]="ADD",x[x.REPLACE=0]="REPLACE",x[x.DELETE=64]="DELETE",x[x.DELETE_AND_ADD=192]="DELETE_AND_ADD",x[x.TOUCH=1]="TOUCH",x[x.CLEAR=10]="CLEAR"})(t.OPERATION||(t.OPERATION={}));var c=(function(){function x(g,y,w){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=g,this.setParent(y,w)}return x.prototype.setParent=function(g,y,w){var z=this;if(this.indexes||(this.indexes=this.ref instanceof vt?this.ref._definition.indexes:{}),this.parent=g,this.parentIndex=w,!!y)if(this.root=y,this.ref instanceof vt){var ie=this.ref._definition;for(var Oe in ie.schema){var Le=this.ref[Oe];if(Le&&Le.$changes){var nt=ie.indexes[Oe];Le.$changes.setParent(this.ref,y,nt)}}}else typeof this.ref=="object"&&this.ref.forEach(function(Ze,T){if(Ze instanceof vt){var U=Ze.$changes,B=z.ref.$changes.indexes[T];U.setParent(z.ref,z.root,B)}})},x.prototype.operation=function(g){this.changes.set(--this.currentCustomOperation,g)},x.prototype.change=function(g,y){y===void 0&&(y=t.OPERATION.ADD);var w=typeof g=="number"?g:this.indexes[g];this.assertValidIndex(w,g);var z=this.changes.get(w);(!z||z.op===t.OPERATION.DELETE||z.op===t.OPERATION.TOUCH)&&this.changes.set(w,{op:z&&z.op===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:y,index:w}),this.allChanges.add(w),this.changed=!0,this.touchParents()},x.prototype.touch=function(g){var y=typeof g=="number"?g:this.indexes[g];this.assertValidIndex(y,g),this.changes.has(y)||this.changes.set(y,{op:t.OPERATION.TOUCH,index:y}),this.allChanges.add(y),this.touchParents()},x.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},x.prototype.getType=function(g){if(this.ref._definition){var y=this.ref._definition;return y.schema[y.fieldsByIndex[g]]}else{var y=this.parent._definition,w=y.schema[y.fieldsByIndex[this.parentIndex]];return Object.values(w)[0]}},x.prototype.getChildrenFilter=function(){var g=this.parent._definition.childFilters;return g&&g[this.parentIndex]},x.prototype.getValue=function(g){return this.ref.getByIndex(g)},x.prototype.delete=function(g){var y=typeof g=="number"?g:this.indexes[g];if(y===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(g," (").concat(y,")"));return}var w=this.getValue(y);this.changes.set(y,{op:t.OPERATION.DELETE,index:y}),this.allChanges.delete(y),delete this.caches[y],w&&w.$changes&&(w.$changes.parent=void 0),this.changed=!0,this.touchParents()},x.prototype.discard=function(g,y){var w=this;g===void 0&&(g=!1),y===void 0&&(y=!1),this.ref instanceof vt||this.changes.forEach(function(z){if(z.op===t.OPERATION.DELETE){var ie=w.ref.getIndex(z.index);delete w.indexes[ie]}}),this.changes.clear(),this.changed=g,y&&this.allChanges.clear(),this.currentCustomOperation=0},x.prototype.discardAll=function(){var g=this;this.changes.forEach(function(y){var w=g.getValue(y.index);w&&w.$changes&&w.$changes.discardAll()}),this.discard()},x.prototype.cache=function(g,y){this.caches[g]=y},x.prototype.clone=function(){return new x(this.ref,this.parent,this.root)},x.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},x.prototype.assertValidIndex=function(g,y){if(g===void 0)throw new Error('ChangeTree: missing index for field "'.concat(y,'"'))},x})();function u(x,g,y,w){return x[g]||(x[g]=[]),x[g].push(y),w?.forEach(function(z,ie){return y(z,ie)}),function(){return d(x[g],x[g].indexOf(y))}}function h(x){var g=this,y=typeof this.$changes.getType()!="string";this.$items.forEach(function(w,z){x.push({refId:g.$changes.refId,op:t.OPERATION.DELETE,field:z,value:void 0,previousValue:w}),y&&g.$changes.root.removeRef(w.$changes.refId)})}function d(x,g){if(g===-1||g>=x.length)return!1;for(var y=x.length-1,w=g;w<y;w++)x[w]=x[w+1];return x.length=y,!0}var f=function(x,g){var y=x.toString(),w=g.toString();return y<w?-1:y>w?1:0};function _(x){return x.$proxy=!0,x=new Proxy(x,{get:function(g,y){return typeof y!="symbol"&&!isNaN(y)?g.at(y):g[y]},set:function(g,y,w){if(typeof y!="symbol"&&!isNaN(y)){var z=Array.from(g.$items.keys()),ie=parseInt(z[y]||y);w==null?g.deleteAt(ie):g.setAt(ie,w)}else g[y]=w;return!0},deleteProperty:function(g,y){return typeof y=="number"?g.deleteAt(y):delete g[y],!0},has:function(g,y){return typeof y!="symbol"&&!isNaN(Number(y))?g.$items.has(Number(y)):Reflect.has(g,y)}}),x}var v=(function(){function x(){for(var g=[],y=0;y<arguments.length;y++)g[y]=arguments[y];this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,g)}return x.prototype.onAdd=function(g,y){return y===void 0&&(y=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,g,y?this.$items:void 0)},x.prototype.onRemove=function(g){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,g)},x.prototype.onChange=function(g){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,g)},x.is=function(g){return Array.isArray(g)||g.array!==void 0},Object.defineProperty(x.prototype,"length",{get:function(){return this.$items.size},set:function(g){g===0?this.clear():this.splice(g,this.length-g)},enumerable:!1,configurable:!0}),x.prototype.push=function(){for(var g=this,y=[],w=0;w<arguments.length;w++)y[w]=arguments[w];var z;return y.forEach(function(ie){z=g.$refId++,g.setAt(z,ie)}),z},x.prototype.pop=function(){var g=Array.from(this.$indexes.values()).pop();if(g!==void 0){this.$changes.delete(g),this.$indexes.delete(g);var y=this.$items.get(g);return this.$items.delete(g),y}},x.prototype.at=function(g){if(g=Math.trunc(g)||0,g<0&&(g+=this.length),!(g<0||g>=this.length)){var y=Array.from(this.$items.keys())[g];return this.$items.get(y)}},x.prototype.setAt=function(g,y){var w,z;if(y==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(g)!==y){y.$changes!==void 0&&y.$changes.setParent(this,this.$changes.root,g);var ie=(z=(w=this.$changes.indexes[g])===null||w===void 0?void 0:w.op)!==null&&z!==void 0?z:t.OPERATION.ADD;this.$changes.indexes[g]=g,this.$indexes.set(g,g),this.$items.set(g,y),this.$changes.change(g,ie)}},x.prototype.deleteAt=function(g){var y=Array.from(this.$items.keys())[g];return y===void 0?!1:this.$deleteAt(y)},x.prototype.$deleteAt=function(g){return this.$changes.delete(g),this.$indexes.delete(g),this.$items.delete(g)},x.prototype.clear=function(g){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),g&&h.call(this,g),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.concat=function(){for(var g,y=[],w=0;w<arguments.length;w++)y[w]=arguments[w];return new(x.bind.apply(x,o([void 0],(g=Array.from(this.$items.values())).concat.apply(g,y),!1)))},x.prototype.join=function(g){return Array.from(this.$items.values()).join(g)},x.prototype.reverse=function(){var g=this,y=Array.from(this.$items.keys()),w=Array.from(this.$items.values()).reverse();return w.forEach(function(z,ie){g.setAt(y[ie],z)}),this},x.prototype.shift=function(){var g=Array.from(this.$items.keys()),y=g.shift();if(y!==void 0){var w=this.$items.get(y);return this.$deleteAt(y),w}},x.prototype.slice=function(g,y){var w=new x;return w.push.apply(w,Array.from(this.$items.values()).slice(g,y)),w},x.prototype.sort=function(g){var y=this;g===void 0&&(g=f);var w=Array.from(this.$items.keys()),z=Array.from(this.$items.values()).sort(g);return z.forEach(function(ie,Oe){y.setAt(w[Oe],ie)}),this},x.prototype.splice=function(g,y){y===void 0&&(y=this.length-g);for(var w=[],z=2;z<arguments.length;z++)w[z-2]=arguments[z];for(var ie=Array.from(this.$items.keys()),Oe=[],Le=g;Le<g+y;Le++)Oe.push(this.$items.get(ie[Le])),this.$deleteAt(ie[Le]);for(var Le=0;Le<w.length;Le++)this.setAt(g+Le,w[Le]);return Oe},x.prototype.unshift=function(){for(var g=this,y=[],w=0;w<arguments.length;w++)y[w]=arguments[w];var z=this.length,ie=y.length,Oe=Array.from(this.$items.values());return y.forEach(function(Le,nt){g.setAt(nt,Le)}),Oe.forEach(function(Le,nt){g.setAt(ie+nt,Le)}),z+ie},x.prototype.indexOf=function(g,y){return Array.from(this.$items.values()).indexOf(g,y)},x.prototype.lastIndexOf=function(g,y){return y===void 0&&(y=this.length-1),Array.from(this.$items.values()).lastIndexOf(g,y)},x.prototype.every=function(g,y){return Array.from(this.$items.values()).every(g,y)},x.prototype.some=function(g,y){return Array.from(this.$items.values()).some(g,y)},x.prototype.forEach=function(g,y){Array.from(this.$items.values()).forEach(g,y)},x.prototype.map=function(g,y){return Array.from(this.$items.values()).map(g,y)},x.prototype.filter=function(g,y){return Array.from(this.$items.values()).filter(g,y)},x.prototype.reduce=function(g,y){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},x.prototype.reduceRight=function(g,y){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},x.prototype.find=function(g,y){return Array.from(this.$items.values()).find(g,y)},x.prototype.findIndex=function(g,y){return Array.from(this.$items.values()).findIndex(g,y)},x.prototype.fill=function(g,y,w){throw new Error("ArraySchema#fill() not implemented")},x.prototype.copyWithin=function(g,y,w){throw new Error("ArraySchema#copyWithin() not implemented")},x.prototype.toString=function(){return this.$items.toString()},x.prototype.toLocaleString=function(){return this.$items.toLocaleString()},x.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},x.prototype.includes=function(g,y){return Array.from(this.$items.values()).includes(g,y)},x.prototype.flatMap=function(g,y){throw new Error("ArraySchema#flatMap() is not supported.")},x.prototype.flat=function(g){throw new Error("ArraySchema#flat() is not supported.")},x.prototype.findLast=function(){var g=Array.from(this.$items.values());return g.findLast.apply(g,arguments)},x.prototype.findLastIndex=function(){var g=Array.from(this.$items.values());return g.findLastIndex.apply(g,arguments)},x.prototype.with=function(g,y){var w=Array.from(this.$items.values());return w[g]=y,new(x.bind.apply(x,o([void 0],w,!1)))},x.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},x.prototype.toSorted=function(g){return Array.from(this.$items.values()).sort(g)},x.prototype.toSpliced=function(g,y){var w=Array.from(this.$items.values());return w.toSpliced.apply(w,arguments)},x.prototype.setIndex=function(g,y){this.$indexes.set(g,y)},x.prototype.getIndex=function(g){return this.$indexes.get(g)},x.prototype.getByIndex=function(g){return this.$items.get(this.$indexes.get(g))},x.prototype.deleteByIndex=function(g){var y=this.$indexes.get(g);this.$items.delete(y),this.$indexes.delete(g)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){return this.toArray().map(function(g){return typeof g.toJSON=="function"?g.toJSON():g})},x.prototype.clone=function(g){var y;return g?y=new(x.bind.apply(x,o([void 0],Array.from(this.$items.values()),!1))):y=new(x.bind.apply(x,o([void 0],this.map(function(w){return w.$changes?w.clone():w}),!1))),y},x})();function p(x){return x.$proxy=!0,x=new Proxy(x,{get:function(g,y){return typeof y!="symbol"&&typeof g[y]>"u"?g.get(y):g[y]},set:function(g,y,w){return typeof y!="symbol"&&y.indexOf("$")===-1&&y!=="onAdd"&&y!=="onRemove"&&y!=="onChange"?g.set(y,w):g[y]=w,!0},deleteProperty:function(g,y){return g.delete(y),!0}}),x}var m=(function(){function x(g){var y=this;if(this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,g)if(g instanceof Map||g instanceof x)g.forEach(function(z,ie){return y.set(ie,z)});else for(var w in g)this.set(w,g[w])}return x.prototype.onAdd=function(g,y){return y===void 0&&(y=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,g,y?this.$items:void 0)},x.prototype.onRemove=function(g){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,g)},x.prototype.onChange=function(g){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,g)},x.is=function(g){return g.map!==void 0},x.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(x.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.set=function(g,y){if(y==null)throw new Error("MapSchema#set('".concat(g,"', ").concat(y,"): trying to set ").concat(y," value on '").concat(g,"'."));g=g.toString();var w=typeof this.$changes.indexes[g]<"u",z=w?this.$changes.indexes[g]:this.$refId++,ie=w?t.OPERATION.REPLACE:t.OPERATION.ADD,Oe=y.$changes!==void 0;if(Oe&&y.$changes.setParent(this,this.$changes.root,z),!w)this.$changes.indexes[g]=z,this.$indexes.set(z,g);else{if(!Oe&&this.$items.get(g)===y)return;Oe&&this.$items.get(g)!==y&&(ie=t.OPERATION.ADD)}return this.$items.set(g,y),this.$changes.change(g,ie),this},x.prototype.get=function(g){return this.$items.get(g)},x.prototype.delete=function(g){return this.$changes.delete(g.toString()),this.$items.delete(g)},x.prototype.clear=function(g){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),g&&h.call(this,g),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(g){return this.$items.has(g)},x.prototype.forEach=function(g){this.$items.forEach(g)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(g,y){this.$indexes.set(g,y)},x.prototype.getIndex=function(g){return this.$indexes.get(g)},x.prototype.getByIndex=function(g){return this.$items.get(this.$indexes.get(g))},x.prototype.deleteByIndex=function(g){var y=this.$indexes.get(g);this.$items.delete(y),this.$indexes.delete(g)},x.prototype.toJSON=function(){var g={};return this.forEach(function(y,w){g[w]=typeof y.toJSON=="function"?y.toJSON():y}),g},x.prototype.clone=function(g){var y;return g?y=Object.assign(new x,this):(y=new x,this.forEach(function(w,z){w.$changes?y.set(z,w.clone()):y.set(z,w)})),y},x})(),S={};function E(x,g){S[x]=g}function A(x){return S[x]}var L=(function(){function x(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return x.create=function(g){var y=new x;return y.schema=Object.assign({},g&&g.schema||{}),y.indexes=Object.assign({},g&&g.indexes||{}),y.fieldsByIndex=Object.assign({},g&&g.fieldsByIndex||{}),y.descriptors=Object.assign({},g&&g.descriptors||{}),y.deprecated=Object.assign({},g&&g.deprecated||{}),y},x.prototype.addField=function(g,y){var w=this.getNextFieldIndex();this.fieldsByIndex[w]=g,this.indexes[g]=w,this.schema[g]=Array.isArray(y)?{array:y[0]}:y},x.prototype.hasField=function(g){return this.indexes[g]!==void 0},x.prototype.addFilter=function(g,y){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[g]]=y,this.indexesWithFilters.push(this.indexes[g]),!0},x.prototype.addChildrenFilter=function(g,y){var w=this.indexes[g],z=this.schema[g];if(A(Object.keys(z)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[w]=y,!0;console.warn("@filterChildren: field '".concat(g,"' can't have children. Ignoring filter."))},x.prototype.getChildrenFilter=function(g){return this.childFilters&&this.childFilters[this.indexes[g]]},x.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},x})();function P(x){return x._context&&x._context.useFilters}var R=(function(){function x(){this.types={},this.schemas=new Map,this.useFilters=!1}return x.prototype.has=function(g){return this.schemas.has(g)},x.prototype.get=function(g){return this.types[g]},x.prototype.add=function(g,y){y===void 0&&(y=this.schemas.size),g._definition=L.create(g._definition),g._typeid=y,this.types[y]=g,this.schemas.set(g,y)},x.create=function(g){return g===void 0&&(g={}),function(y){return g.context||(g.context=new x),j(y,g)}},x})(),F=new R;function j(x,g){return g===void 0&&(g={}),function(y,w){var z=g.context||F,ie=y.constructor;if(ie._context=z,!x)throw new Error("".concat(ie.name,': @type() reference provided for "').concat(w,`" is undefined. Make sure you don't have any circular dependencies.`));z.has(ie)||z.add(ie);var Oe=ie._definition;if(Oe.addField(w,x),Oe.descriptors[w]){if(Oe.deprecated[w])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(w,"' definition on '").concat(ie.name,`'.
Check @type() annotation`))}catch(B){var Le=B.stack.split(`
`)[4].trim();throw new Error("".concat(B.message," ").concat(Le))}}var nt=v.is(x),Ze=!nt&&m.is(x);if(typeof x!="string"&&!vt.is(x)){var T=Object.values(x)[0];typeof T!="string"&&!z.has(T)&&z.add(T)}if(g.manual){Oe.descriptors[w]={enumerable:!0,configurable:!0,writable:!0};return}var U="_".concat(w);Oe.descriptors[U]={enumerable:!1,configurable:!1,writable:!0},Oe.descriptors[w]={get:function(){return this[U]},set:function(B){B!==this[U]&&(B!=null?(nt&&!(B instanceof v)&&(B=new(v.bind.apply(v,o([void 0],B,!1)))),Ze&&!(B instanceof m)&&(B=new m(B)),B.$proxy===void 0&&(Ze?B=p(B):nt&&(B=_(B))),this.$changes.change(w),B.$changes&&B.$changes.setParent(this,this.$changes.root,this._definition.indexes[w])):this[U]!==void 0&&this.$changes.delete(w),this[U]=B)},enumerable:!0,configurable:!0}}}function M(x){return function(g,y){var w=g.constructor,z=w._definition;z.addFilter(y,x)&&(w._context.useFilters=!0)}}function C(x){return function(g,y){var w=g.constructor,z=w._definition;z.addChildrenFilter(y,x)&&(w._context.useFilters=!0)}}function G(x){return x===void 0&&(x=!0),function(g,y){var w=g.constructor,z=w._definition;z.deprecated[y]=!0,x&&(z.descriptors[y]={get:function(){throw new Error("".concat(y," is deprecated."))},set:function(ie){},enumerable:!1,configurable:!0})}}function X(x,g,y){y===void 0&&(y={}),y.context||(y.context=x._context||y.context||F);for(var w in g)j(g[w],y)(x.prototype,w);return x}function q(x){for(var g=0,y=0,w=0,z=x.length;w<z;w++)g=x.charCodeAt(w),g<128?y+=1:g<2048?y+=2:g<55296||g>=57344?y+=3:(w++,y+=4);return y}function J(x,g,y){for(var w=0,z=0,ie=y.length;z<ie;z++)w=y.charCodeAt(z),w<128?x[g++]=w:w<2048?(x[g++]=192|w>>6,x[g++]=128|w&63):w<55296||w>=57344?(x[g++]=224|w>>12,x[g++]=128|w>>6&63,x[g++]=128|w&63):(z++,w=65536+((w&1023)<<10|y.charCodeAt(z)&1023),x[g++]=240|w>>18,x[g++]=128|w>>12&63,x[g++]=128|w>>6&63,x[g++]=128|w&63)}function W(x,g){x.push(g&255)}function K(x,g){x.push(g&255)}function Y(x,g){x.push(g&255),x.push(g>>8&255)}function pe(x,g){x.push(g&255),x.push(g>>8&255)}function ue(x,g){x.push(g&255),x.push(g>>8&255),x.push(g>>16&255),x.push(g>>24&255)}function me(x,g){var y=g>>24,w=g>>16,z=g>>8,ie=g;x.push(ie&255),x.push(z&255),x.push(w&255),x.push(y&255)}function ke(x,g){var y=Math.floor(g/Math.pow(2,32)),w=g>>>0;me(x,w),me(x,y)}function Ye(x,g){var y=g/Math.pow(2,32)>>0,w=g>>>0;me(x,w),me(x,y)}function ee(x,g){he(x,g)}function ce(x,g){ye(x,g)}var se=new Int32Array(2),_e=new Float32Array(se.buffer),oe=new Float64Array(se.buffer);function he(x,g){_e[0]=g,ue(x,se[0])}function ye(x,g){oe[0]=g,ue(x,se[0]),ue(x,se[1])}function Se(x,g){return K(x,g?1:0)}function De(x,g){g||(g="");var y=q(g),w=0;if(y<32)x.push(y|160),w=1;else if(y<256)x.push(217),K(x,y),w=2;else if(y<65536)x.push(218),pe(x,y),w=3;else if(y<4294967296)x.push(219),me(x,y),w=5;else throw new Error("String too long");return J(x,x.length,g),w+y}function N(x,g){if(isNaN(g))return N(x,0);if(isFinite(g)){if(g!==(g|0))return x.push(203),ye(x,g),9}else return N(x,g>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return g>=0?g<128?(K(x,g),1):g<256?(x.push(204),K(x,g),2):g<65536?(x.push(205),pe(x,g),3):g<4294967296?(x.push(206),me(x,g),5):(x.push(207),Ye(x,g),9):g>=-32?(x.push(224|g+32),1):g>=-128?(x.push(208),W(x,g),2):g>=-32768?(x.push(209),Y(x,g),3):g>=-2147483648?(x.push(210),ue(x,g),5):(x.push(211),ke(x,g),9)}var $e=Object.freeze({__proto__:null,boolean:Se,float32:ee,float64:ce,int16:Y,int32:ue,int64:ke,int8:W,number:N,string:De,uint16:pe,uint32:me,uint64:Ye,uint8:K,utf8Write:J,writeFloat32:he,writeFloat64:ye});function Xe(x,g,y){for(var w="",z=0,ie=g,Oe=g+y;ie<Oe;ie++){var Le=x[ie];if((Le&128)===0){w+=String.fromCharCode(Le);continue}if((Le&224)===192){w+=String.fromCharCode((Le&31)<<6|x[++ie]&63);continue}if((Le&240)===224){w+=String.fromCharCode((Le&15)<<12|(x[++ie]&63)<<6|(x[++ie]&63)<<0);continue}if((Le&248)===240){z=(Le&7)<<18|(x[++ie]&63)<<12|(x[++ie]&63)<<6|(x[++ie]&63)<<0,z>=65536?(z-=65536,w+=String.fromCharCode((z>>>10)+55296,(z&1023)+56320)):w+=String.fromCharCode(z);continue}console.error("Invalid byte "+Le.toString(16))}return w}function qe(x,g){return Fe(x,g)<<24>>24}function Fe(x,g){return x[g.offset++]}function ct(x,g){return Be(x,g)<<16>>16}function Be(x,g){return x[g.offset++]|x[g.offset++]<<8}function I(x,g){return x[g.offset++]|x[g.offset++]<<8|x[g.offset++]<<16|x[g.offset++]<<24}function b(x,g){return I(x,g)>>>0}function k(x,g){return Je(x,g)}function te(x,g){return de(x,g)}function ae(x,g){var y=b(x,g),w=I(x,g)*Math.pow(2,32);return w+y}function ne(x,g){var y=b(x,g),w=b(x,g)*Math.pow(2,32);return w+y}var Ie=new Int32Array(2),xe=new Float32Array(Ie.buffer),we=new Float64Array(Ie.buffer);function Je(x,g){return Ie[0]=I(x,g),xe[0]}function de(x,g){return Ie[0]=I(x,g),Ie[1]=I(x,g),we[0]}function Pe(x,g){return Fe(x,g)>0}function He(x,g){var y=x[g.offset++],w;y<192?w=y&31:y===217?w=Fe(x,g):y===218?w=Be(x,g):y===219&&(w=b(x,g));var z=Xe(x,g.offset,w);return g.offset+=w,z}function Ve(x,g){var y=x[g.offset];return y<192&&y>160||y===217||y===218||y===219}function ve(x,g){var y=x[g.offset++];if(y<128)return y;if(y===202)return Je(x,g);if(y===203)return de(x,g);if(y===204)return Fe(x,g);if(y===205)return Be(x,g);if(y===206)return b(x,g);if(y===207)return ne(x,g);if(y===208)return qe(x,g);if(y===209)return ct(x,g);if(y===210)return I(x,g);if(y===211)return ae(x,g);if(y>223)return(255-y+1)*-1}function Ke(x,g){var y=x[g.offset];return y<128||y>=202&&y<=211}function Ge(x,g){return x[g.offset]<160}function ht(x,g){return x[g.offset-1]===a&&(x[g.offset]<128||x[g.offset]>=202&&x[g.offset]<=211)}var H=Object.freeze({__proto__:null,arrayCheck:Ge,boolean:Pe,float32:k,float64:te,int16:ct,int32:I,int64:ae,int8:qe,number:ve,numberCheck:Ke,readFloat32:Je,readFloat64:de,string:He,stringCheck:Ve,switchStructureCheck:ht,uint16:Be,uint32:b,uint64:ne,uint8:Fe}),Re=(function(){function x(g){var y=this;this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,g&&g.forEach(function(w){return y.add(w)})}return x.prototype.onAdd=function(g,y){return y===void 0&&(y=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,g,y?this.$items:void 0)},x.prototype.onRemove=function(g){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,g)},x.prototype.onChange=function(g){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,g)},x.is=function(g){return g.collection!==void 0},x.prototype.add=function(g){var y=this.$refId++,w=g.$changes!==void 0;return w&&g.$changes.setParent(this,this.$changes.root,y),this.$changes.indexes[y]=y,this.$indexes.set(y,y),this.$items.set(y,g),this.$changes.change(y),y},x.prototype.at=function(g){var y=Array.from(this.$items.keys())[g];return this.$items.get(y)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(g){for(var y=this.$items.entries(),w,z;(z=y.next())&&!z.done;)if(g===z.value[1]){w=z.value[0];break}return w===void 0?!1:(this.$changes.delete(w),this.$indexes.delete(w),this.$items.delete(w))},x.prototype.clear=function(g){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),g&&h.call(this,g),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(g){return Array.from(this.$items.values()).some(function(y){return y===g})},x.prototype.forEach=function(g){var y=this;this.$items.forEach(function(w,z,ie){return g(w,z,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(g,y){this.$indexes.set(g,y)},x.prototype.getIndex=function(g){return this.$indexes.get(g)},x.prototype.getByIndex=function(g){return this.$items.get(this.$indexes.get(g))},x.prototype.deleteByIndex=function(g){var y=this.$indexes.get(g);this.$items.delete(y),this.$indexes.delete(g)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var g=[];return this.forEach(function(y,w){g.push(typeof y.toJSON=="function"?y.toJSON():y)}),g},x.prototype.clone=function(g){var y;return g?y=Object.assign(new x,this):(y=new x,this.forEach(function(w){w.$changes?y.add(w.clone()):y.add(w)})),y},x})(),Z=(function(){function x(g){var y=this;this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,g&&g.forEach(function(w){return y.add(w)})}return x.prototype.onAdd=function(g,y){return y===void 0&&(y=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,g,y?this.$items:void 0)},x.prototype.onRemove=function(g){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,g)},x.prototype.onChange=function(g){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,g)},x.is=function(g){return g.set!==void 0},x.prototype.add=function(g){var y,w;if(this.has(g))return!1;var z=this.$refId++;g.$changes!==void 0&&g.$changes.setParent(this,this.$changes.root,z);var ie=(w=(y=this.$changes.indexes[z])===null||y===void 0?void 0:y.op)!==null&&w!==void 0?w:t.OPERATION.ADD;return this.$changes.indexes[z]=z,this.$indexes.set(z,z),this.$items.set(z,g),this.$changes.change(z,ie),z},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(g){for(var y=this.$items.entries(),w,z;(z=y.next())&&!z.done;)if(g===z.value[1]){w=z.value[0];break}return w===void 0?!1:(this.$changes.delete(w),this.$indexes.delete(w),this.$items.delete(w))},x.prototype.clear=function(g){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),g&&h.call(this,g),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(g){for(var y=this.$items.values(),w=!1,z;(z=y.next())&&!z.done;)if(g===z.value){w=!0;break}return w},x.prototype.forEach=function(g){var y=this;this.$items.forEach(function(w,z,ie){return g(w,z,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(g,y){this.$indexes.set(g,y)},x.prototype.getIndex=function(g){return this.$indexes.get(g)},x.prototype.getByIndex=function(g){return this.$items.get(this.$indexes.get(g))},x.prototype.deleteByIndex=function(g){var y=this.$indexes.get(g);this.$items.delete(y),this.$indexes.delete(g)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var g=[];return this.forEach(function(y,w){g.push(typeof y.toJSON=="function"?y.toJSON():y)}),g},x.prototype.clone=function(g){var y;return g?y=Object.assign(new x,this):(y=new x,this.forEach(function(w){w.$changes?y.add(w.clone()):y.add(w)})),y},x})(),re=(function(){function x(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return x.prototype.addRefId=function(g){this.refIds.has(g)||(this.refIds.add(g),this.containerIndexes.set(g,new Set))},x.get=function(g){return g.$filterState===void 0&&(g.$filterState=new x),g.$filterState},x})(),Te=(function(){function x(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return x.prototype.getNextUniqueId=function(){return this.nextUniqueId++},x.prototype.addRef=function(g,y,w){w===void 0&&(w=!0),this.refs.set(g,y),w&&(this.refCounts[g]=(this.refCounts[g]||0)+1)},x.prototype.removeRef=function(g){var y=this.refCounts[g];if(y===void 0){console.warn("trying to remove reference ".concat(g," that doesn't exist"));return}if(y===0){console.warn("trying to remove reference ".concat(g," with 0 refCount"));return}this.refCounts[g]=y-1,this.deletedRefs.add(g)},x.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},x.prototype.garbageCollectDeletedRefs=function(){var g=this;this.deletedRefs.forEach(function(y){if(!(g.refCounts[y]>0)){var w=g.refs.get(y);if(w instanceof vt)for(var z in w._definition.schema)typeof w._definition.schema[z]!="string"&&w[z]&&w[z].$changes&&g.removeRef(w[z].$changes.refId);else{var ie=w.$changes.parent._definition,Oe=ie.schema[ie.fieldsByIndex[w.$changes.parentIndex]];typeof Object.values(Oe)[0]=="function"&&Array.from(w.values()).forEach(function(Le){return g.removeRef(Le.$changes.refId)})}g.refs.delete(y),delete g.refCounts[y]}}),this.deletedRefs.clear()},x})(),Ae=(function(x){i(g,x);function g(){return x!==null&&x.apply(this,arguments)||this}return g})(Error);function it(x,g,y,w){var z,ie=!1;switch(g){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":z="number",isNaN(x)&&console.log('trying to encode "NaN" in '.concat(y.constructor.name,"#").concat(w));break;case"string":z="string",ie=!0;break;case"boolean":return}if(typeof x!==z&&(!ie||ie&&x!==null)){var Oe="'".concat(JSON.stringify(x),"'").concat(x&&x.constructor&&" (".concat(x.constructor.name,")")||"");throw new Ae("a '".concat(z,"' was expected, but ").concat(Oe," was provided in ").concat(y.constructor.name,"#").concat(w))}}function xt(x,g,y,w){if(!(x instanceof g))throw new Ae("a '".concat(g.name,"' was expected, but '").concat(x.constructor.name,"' was provided in ").concat(y.constructor.name,"#").concat(w))}function Ot(x,g,y,w,z){it(y,x,w,z);var ie=$e[x];if(ie)ie(g,y);else throw new Ae("a '".concat(x,"' was expected, but ").concat(y," was provided in ").concat(w.constructor.name,"#").concat(z))}function lt(x,g,y){return H[x](g,y)}var vt=(function(){function x(){for(var g=[],y=0;y<arguments.length;y++)g[y]=arguments[y];Object.defineProperties(this,{$changes:{value:new c(this,void 0,new Te),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var w=this._definition.descriptors;w&&Object.defineProperties(this,w),g[0]&&this.assign(g[0])}return x.onError=function(g){console.error(g)},x.is=function(g){return g._definition&&g._definition.schema!==void 0},x.prototype.onChange=function(g){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,g)},x.prototype.onRemove=function(g){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,g)},x.prototype.assign=function(g){return Object.assign(this,g),this},Object.defineProperty(x.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),x.prototype.setDirty=function(g,y){this.$changes.change(g,y)},x.prototype.listen=function(g,y,w){var z=this;return w===void 0&&(w=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[g]||(this.$callbacks[g]=[]),this.$callbacks[g].push(y),w&&this[g]!==void 0&&y(this[g],void 0),function(){return d(z.$callbacks[g],z.$callbacks[g].indexOf(y))}},x.prototype.decode=function(g,y,w){y===void 0&&(y={offset:0}),w===void 0&&(w=this);var z=[],ie=this.$changes.root,Oe=g.length,Le=0;for(ie.refs.set(Le,this);y.offset<Oe;){var nt=g[y.offset++];if(nt==a){Le=ve(g,y);var Ze=ie.refs.get(Le);if(!Ze)throw new Error('"refId" not found: '.concat(Le));w=Ze;continue}var T=w.$changes,U=w._definition!==void 0,B=U?nt>>6<<6:nt;if(B===t.OPERATION.CLEAR){w.clear(z);continue}var V=U?nt%(B||255):ve(g,y),O=U?w._definition.fieldsByIndex[V]:"",Q=T.getType(V),$=void 0,le=void 0,Me=void 0;if(U?le=w["_".concat(O)]:(le=w.getByIndex(V),(B&t.OPERATION.ADD)===t.OPERATION.ADD?(Me=w instanceof m?He(g,y):V,w.setIndex(V,Me)):Me=w.getIndex(V)),(B&t.OPERATION.DELETE)===t.OPERATION.DELETE&&(B!==t.OPERATION.DELETE_AND_ADD&&w.deleteByIndex(V),le&&le.$changes&&ie.removeRef(le.$changes.refId),$=null),O===void 0){console.warn("@colyseus/schema: definition mismatch");for(var be={offset:y.offset};y.offset<Oe&&!(ht(g,y)&&(be.offset=y.offset+1,ie.refs.has(ve(g,be))));)y.offset++;continue}else if(B!==t.OPERATION.DELETE)if(x.is(Q)){var ge=ve(g,y);if($=ie.refs.get(ge),B!==t.OPERATION.REPLACE){var fe=this.getSchemaType(g,y,Q);$||($=this.createTypeInstance(fe),$.$changes.refId=ge,le&&($.$callbacks=le.$callbacks,le.$changes.refId&&ge!==le.$changes.refId&&ie.removeRef(le.$changes.refId))),ie.addRef(ge,$,$!==le)}}else if(typeof Q=="string")$=lt(Q,g,y);else{var Qe=A(Object.keys(Q)[0]),st=ve(g,y),rt=ie.refs.has(st)?le||ie.refs.get(st):new Qe.constructor;if($=rt.clone(!0),$.$changes.refId=st,le&&($.$callbacks=le.$callbacks,le.$changes.refId&&st!==le.$changes.refId)){ie.removeRef(le.$changes.refId);for(var ut=le.entries(),ze=void 0;(ze=ut.next())&&!ze.done;){var Ne=ze.value,gt=Ne[0],at=Ne[1];z.push({refId:st,op:t.OPERATION.DELETE,field:gt,value:void 0,previousValue:at})}}ie.addRef(st,$,rt!==le)}if($!=null){if($.$changes&&$.$changes.setParent(T.ref,T.root,V),w instanceof x)w[O]=$;else if(w instanceof m){var gt=Me;w.$items.set(gt,$),w.$changes.allChanges.add(V)}else if(w instanceof v)w.setAt(V,$);else if(w instanceof Re){var Tt=w.add($);w.setIndex(V,Tt)}else if(w instanceof Z){var Tt=w.add($);Tt!==!1&&w.setIndex(V,Tt)}}le!==$&&z.push({refId:Le,op:B,field:O,dynamicIndex:Me,value:$,previousValue:le})}return this._triggerChanges(z),ie.garbageCollectDeletedRefs(),z},x.prototype.encode=function(g,y,w){g===void 0&&(g=!1),y===void 0&&(y=[]),w===void 0&&(w=!1);for(var z=this.$changes,ie=new WeakSet,Oe=[z],Le=1,nt=0;nt<Le;nt++){var Ze=Oe[nt],T=Ze.ref,U=T instanceof x;Ze.ensureRefId(),ie.add(Ze),Ze!==z&&(Ze.changed||g)&&(K(y,a),N(y,Ze.refId));for(var B=Array.from(g?Ze.allChanges:Ze.changes.values()),V=0,O=B.length;V<O;V++){var Q=g?{op:t.OPERATION.ADD,index:B[V]}:B[V],$=Q.index,le=U?T._definition.fieldsByIndex&&T._definition.fieldsByIndex[$]:$,Me=y.length;if(Q.op!==t.OPERATION.TOUCH)if(U)K(y,$|Q.op);else{if(K(y,Q.op),Q.op===t.OPERATION.CLEAR)continue;N(y,$)}if(!U&&(Q.op&t.OPERATION.ADD)==t.OPERATION.ADD&&T instanceof m){var be=Ze.ref.$indexes.get($);De(y,be)}if(Q.op!==t.OPERATION.DELETE){var ge=Ze.getType($),fe=Ze.getValue($);if(fe&&fe.$changes&&!ie.has(fe.$changes)&&(Oe.push(fe.$changes),fe.$changes.ensureRefId(),Le++),Q.op!==t.OPERATION.TOUCH){if(x.is(ge))xt(fe,ge,T,le),N(y,fe.$changes.refId),(Q.op&t.OPERATION.ADD)===t.OPERATION.ADD&&this.tryEncodeTypeId(y,ge,fe.constructor);else if(typeof ge=="string")Ot(ge,y,fe,T,le);else{var Qe=A(Object.keys(ge)[0]);xt(T["_".concat(le)],Qe.constructor,T,le),N(y,fe.$changes.refId)}w&&Ze.cache($,y.slice(Me))}}}!g&&!w&&Ze.discard()}return y},x.prototype.encodeAll=function(g){return this.encode(!0,[],g)},x.prototype.applyFilters=function(g,y){var w,z;y===void 0&&(y=!1);for(var ie=this,Oe=new Set,Le=re.get(g),nt=[this.$changes],Ze=1,T=[],U=function(V){var O=nt[V];if(Oe.has(O.refId))return"continue";var Q=O.ref,$=Q instanceof x;K(T,a),N(T,O.refId);var le=Le.refIds.has(O),Me=y||!le;Le.addRefId(O);var be=Le.containerIndexes.get(O),ge=Array.from(Me?O.allChanges:O.changes.values());if(!y&&$&&Q._definition.indexesWithFilters){var fe=Q._definition.indexesWithFilters;fe.forEach(function(on){!be.has(on)&&O.allChanges.has(on)&&(Me?ge.push(on):ge.push({op:t.OPERATION.ADD,index:on}))})}for(var Qe=0,st=ge.length;Qe<st;Qe++){var rt=Me?{op:t.OPERATION.ADD,index:ge[Qe]}:ge[Qe];if(rt.op===t.OPERATION.CLEAR){K(T,rt.op);continue}var ut=rt.index;if(rt.op===t.OPERATION.DELETE){$?K(T,rt.op|ut):(K(T,rt.op),N(T,ut));continue}var ze=O.getValue(ut),Ne=O.getType(ut);if($){var gt=Q._definition.filters&&Q._definition.filters[ut];if(gt&&!gt.call(Q,g,ze,ie)){ze&&ze.$changes&&Oe.add(ze.$changes.refId);continue}}else{var at=O.parent,gt=O.getChildrenFilter();if(gt&&!gt.call(at,g,Q.$indexes.get(ut),ze,ie)){ze&&ze.$changes&&Oe.add(ze.$changes.refId);continue}}if(ze.$changes&&(nt.push(ze.$changes),Ze++),rt.op!==t.OPERATION.TOUCH)if(rt.op===t.OPERATION.ADD||$)T.push.apply(T,(w=O.caches[ut])!==null&&w!==void 0?w:[]),be.add(ut);else if(be.has(ut))T.push.apply(T,(z=O.caches[ut])!==null&&z!==void 0?z:[]);else{if(be.add(ut),K(T,t.OPERATION.ADD),N(T,ut),Q instanceof m){var Tt=O.ref.$indexes.get(ut);De(T,Tt)}ze.$changes?N(T,ze.$changes.refId):$e[Ne](T,ze)}else if(ze.$changes&&!$){if(K(T,t.OPERATION.ADD),N(T,ut),Q instanceof m){var Tt=O.ref.$indexes.get(ut);De(T,Tt)}N(T,ze.$changes.refId)}}},B=0;B<Ze;B++)U(B);return T},x.prototype.clone=function(){var g,y=new this.constructor,w=this._definition.schema;for(var z in w)typeof this[z]=="object"&&typeof((g=this[z])===null||g===void 0?void 0:g.clone)=="function"?y[z]=this[z].clone():y[z]=this[z];return y},x.prototype.toJSON=function(){var g=this._definition.schema,y=this._definition.deprecated,w={};for(var z in g)!y[z]&&this[z]!==null&&typeof this[z]<"u"&&(w[z]=typeof this[z].toJSON=="function"?this[z].toJSON():this["_".concat(z)]);return w},x.prototype.discardAllChanges=function(){this.$changes.discardAll()},x.prototype.getByIndex=function(g){return this[this._definition.fieldsByIndex[g]]},x.prototype.deleteByIndex=function(g){this[this._definition.fieldsByIndex[g]]=void 0},x.prototype.tryEncodeTypeId=function(g,y,w){y._typeid!==w._typeid&&(K(g,l),N(g,w._typeid))},x.prototype.getSchemaType=function(g,y,w){var z;return g[y.offset]===l&&(y.offset++,z=this.constructor._context.get(ve(g,y))),z||w},x.prototype.createTypeInstance=function(g){var y=new g;return y.$changes.root=this.$changes.root,y},x.prototype._triggerChanges=function(g){for(var y,w,z,ie,Oe,Le,nt,Ze,T,U=new Set,B=this.$changes.root.refs,V=function(Q){var $=g[Q],le=$.refId,Me=B.get(le),be=Me.$callbacks;if(($.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&$.previousValue instanceof x&&((w=(y=$.previousValue.$callbacks)===null||y===void 0?void 0:y[t.OPERATION.DELETE])===null||w===void 0||w.forEach(function(ge){return ge()})),!be)return"continue";if(Me instanceof x){if(!U.has(le))try{(z=be?.[t.OPERATION.REPLACE])===null||z===void 0||z.forEach(function(ge){return ge()})}catch(ge){x.onError(ge)}try{be.hasOwnProperty($.field)&&((ie=be[$.field])===null||ie===void 0||ie.forEach(function(ge){return ge($.value,$.previousValue)}))}catch(ge){x.onError(ge)}}else $.op===t.OPERATION.ADD&&$.previousValue===void 0?(Oe=be[t.OPERATION.ADD])===null||Oe===void 0||Oe.forEach(function(ge){var fe;return ge($.value,(fe=$.dynamicIndex)!==null&&fe!==void 0?fe:$.field)}):$.op===t.OPERATION.DELETE?$.previousValue!==void 0&&((Le=be[t.OPERATION.DELETE])===null||Le===void 0||Le.forEach(function(ge){var fe;return ge($.previousValue,(fe=$.dynamicIndex)!==null&&fe!==void 0?fe:$.field)})):$.op===t.OPERATION.DELETE_AND_ADD&&($.previousValue!==void 0&&((nt=be[t.OPERATION.DELETE])===null||nt===void 0||nt.forEach(function(ge){var fe;return ge($.previousValue,(fe=$.dynamicIndex)!==null&&fe!==void 0?fe:$.field)})),(Ze=be[t.OPERATION.ADD])===null||Ze===void 0||Ze.forEach(function(ge){var fe;return ge($.value,(fe=$.dynamicIndex)!==null&&fe!==void 0?fe:$.field)})),$.value!==$.previousValue&&((T=be[t.OPERATION.REPLACE])===null||T===void 0||T.forEach(function(ge){var fe;return ge($.value,(fe=$.dynamicIndex)!==null&&fe!==void 0?fe:$.field)}));U.add(le)},O=0;O<g.length;O++)V(O)},x._definition=L.create(),x})();function sn(x){for(var g=[x.$changes],y=1,w={},z=w,ie=function(Le){var nt=g[Le];nt.changes.forEach(function(Ze){var T=nt.ref,U=Ze.index,B=T._definition?T._definition.fieldsByIndex[U]:T.$indexes.get(U);z[B]=nt.getValue(U)})},Oe=0;Oe<y;Oe++)ie(Oe);return w}var un={context:new R},In=(function(x){i(g,x);function g(){return x!==null&&x.apply(this,arguments)||this}return r([j("string",un)],g.prototype,"name",void 0),r([j("string",un)],g.prototype,"type",void 0),r([j("number",un)],g.prototype,"referencedType",void 0),g})(vt),rn=(function(x){i(g,x);function g(){var y=x!==null&&x.apply(this,arguments)||this;return y.fields=new v,y}return r([j("number",un)],g.prototype,"id",void 0),r([j([In],un)],g.prototype,"fields",void 0),g})(vt),Si=(function(x){i(g,x);function g(){var y=x!==null&&x.apply(this,arguments)||this;return y.types=new v,y}return g.encode=function(y){var w,z=y.constructor,ie=new g;ie.rootType=z._typeid;var Oe=function(T,U){for(var B in U){var V=new In;V.name=B;var O=void 0;if(typeof U[B]=="string")O=U[B];else{var Q=U[B],$=void 0;vt.is(Q)?(O="ref",$=U[B]):(O=Object.keys(Q)[0],typeof Q[O]=="string"?O+=":"+Q[O]:$=Q[O]),V.referencedType=$?$._typeid:-1}V.type=O,T.fields.push(V)}ie.types.push(T)},Le=(w=z._context)===null||w===void 0?void 0:w.types;for(var nt in Le){var Ze=new rn;Ze.id=Number(nt),Oe(Ze,Le[nt]._definition.schema)}return ie.encodeAll()},g.decode=function(y,w){var z=new R,ie=new g;ie.decode(y,w);var Oe=ie.types.reduce(function(U,B){var V=(function(Q){i($,Q);function $(){return Q!==null&&Q.apply(this,arguments)||this}return $})(vt),O=B.id;return U[O]=V,z.add(V,O),U},{});ie.types.forEach(function(U){var B=Oe[U.id];U.fields.forEach(function(V){var O;if(V.referencedType!==void 0){var Q=V.type,$=Oe[V.referencedType];if(!$){var le=V.type.split(":");Q=le[0],$=le[1]}Q==="ref"?j($,{context:z})(B.prototype,V.name):j((O={},O[Q]=$,O),{context:z})(B.prototype,V.name)}else j(V.type,{context:z})(B.prototype,V.name)})});var Le=Oe[ie.rootType],nt=new Le;for(var Ze in Le._definition.schema){var T=Le._definition.schema[Ze];typeof T!="string"&&(nt[Ze]=typeof T=="function"?new T:new(A(Object.keys(T)[0])).constructor)}return nt},r([j([rn],un)],g.prototype,"types",void 0),r([j("number",un)],g.prototype,"rootType",void 0),g})(vt);E("map",{constructor:m}),E("array",{constructor:v}),E("set",{constructor:Z}),E("collection",{constructor:Re}),t.ArraySchema=v,t.CollectionSchema=Re,t.Context=R,t.MapSchema=m,t.Reflection=Si,t.ReflectionField=In,t.ReflectionType=rn,t.Schema=vt,t.SchemaDefinition=L,t.SetSchema=Z,t.decode=H,t.defineTypes=X,t.deprecated=G,t.dumpChanges=sn,t.encode=$e,t.filter=M,t.filterChildren=C,t.hasFilter=P,t.registerType=E,t.type=j}))})(dr,dr.exports)),dr.exports}var Et=Rl(),bt=function(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r},wt=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};class Rt extends Et.Schema{constructor(){super(...arguments),this.id="",this.x=0,this.y=0,this.z=0,this.yaw=0,this.pitch=0,this.vx=0,this.vy=0,this.vz=0,this.movementState="grounded",this.animationState="idle",this.animationTimeScale=1,this.shield=100,this.maxShield=100,this.health=50,this.maxHealth=50,this.currentWeapon="rifle",this.ammo=30,this.maxAmmo=30,this.lastShotTick=0}}bt([Et.type("string"),wt("design:type",Object)],Rt.prototype,"id",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"x",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"y",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"z",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"yaw",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"pitch",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"vx",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"vy",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"vz",void 0);bt([Et.type("string"),wt("design:type",Object)],Rt.prototype,"movementState",void 0);bt([Et.type("string"),wt("design:type",Object)],Rt.prototype,"animationState",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"animationTimeScale",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"shield",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"maxShield",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"health",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"maxHealth",void 0);bt([Et.type("string"),wt("design:type",Object)],Rt.prototype,"currentWeapon",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"ammo",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"maxAmmo",void 0);bt([Et.type("number"),wt("design:type",Object)],Rt.prototype,"lastShotTick",void 0);class lf extends Et.Schema{constructor(){super(...arguments),this.players=new Et.MapSchema}}bt([Et.type({map:Rt}),wt("design:type",Object)],lf.prototype,"players",void 0);const lT={idle:"idle",walk:"walk",walkBackwards:"walkBackwards",strafeLeft:"strafeLeft",strafeRight:"strafeRight",strafeLeftFast:"strafeLeftFast",strafeRightFast:"strafeRightFast",run:"run",jump:"jump",slide:"slide",crouchForward:"crouchForward",crouchBackward:"crouchBackward",crouchLeft:"crouchLeft",crouchRight:"crouchRight"},yy={idle:"idleaiming",walk:"walk",walkBackwards:"walkbackwards.001",strafeLeft:"strafeLeft",strafeRight:"strafeRight",strafeLeftFast:"strafeleftfast",strafeRightFast:"straferightfast",run:"run",jump:"jump",slide:"sliding",crouchForward:"crouchforward",crouchBackward:"crouchbackward",crouchLeft:"crouchleft",crouchRight:"crouchright"},hf=30,Ua=1e3/hf,Sy=1.8,My=.4,_s=1.6,ou=1,xr=100,$c=50,Cl=1.6,Ey=.13,Ty=.03,Yc=.2,Go=1.41,Pl=.29,Ay=.02,uf=3.3,by=Math.ceil(hf/uf),au=45,wy=1250,Ry=3,jc={accel:95,maxSpeedWalk:8,friction:10,gravity:27,jumpForce:10.5,coyoteTime:.12,jumpBufferTime:.12,slideInitialSpeed:12,slideSpeedBoost:1.1,slideDecay:.95,slideMinSpeed:2,slideDurationMax:1.8,slideEnterSpeed:6,maxSpeedCrouch:3,slideJumpMultiplier:1.15,slideJumpCooldown:2,slideEnterCooldown:.4,wallBounceReflectFactor:.85,wallBounceSpeedMin:6,wallBounceJumpMultiplier:1,wallBounceBoostFactor:1.08,wallBounceBoostMin:8,dashSpeed:18,dashDuration:.2,dashCooldownSec:10},Bt=20,ui=.25,Cy=.001,Py=[[-Bt,Bt,Bt-ui,Bt+ui],[-Bt,Bt,-Bt-ui,-Bt+ui],[Bt-ui,Bt+ui,-Bt,Bt],[-Bt-ui,-Bt+ui,-Bt,Bt]],lo=Bt,Qs=Bt*2;function ho(s,e,t){let n=s,i=e,r,o;const a=t+Cy;for(const[l,c,u,h]of Py)n>=l-a&&n<=c+a&&i>=u-a&&i<=h+a&&(n<l+a?(n=l-a,r=1):n>c-a&&(n=c+a,r=-1),i<u+a?(i=u-a,o=1):i>h-a&&(i=h+a,o=-1));return{x:n,z:i,normalX:r,normalZ:o}}function er(s,e){e.normalX!==void 0&&e.normalX!==0&&s.x*e.normalX>0&&(s.x=0),e.normalZ!==void 0&&e.normalZ!==0&&s.z*e.normalZ>0&&(s.z=0)}const Iy="mixamorig:Head",Ly="mixamorigHead",Dy="Head",Ny="mixamorig:HeadTop_End",Oy="mixamorigHeadTop_End",Uy="HeadTop_End",Fy="mixamorig:Spine2",By="mixamorig:Spine1",zy="mixamorig:Spine",ky="mixamorigSpine2",Hy="mixamorigSpine1",Vy="mixamorigSpine",Gy="Spine2",Wy="Spine1",Xy="Spine",$y="mixamorig:Hips",Yy="mixamorigHips",jy="Hips",qy="mixamorig:LeftFoot",Ky="mixamorigLeftFoot",Zy="LeftFoot",Jy="mixamorig:RightFoot",Qy="mixamorigRightFoot",eS="RightFoot",df="mixamorig:RightHand",ff="mixamorigRightHand",pf="RightHand",tS="mixamorig:LeftHand",nS="mixamorigLeftHand",iS="LeftHand",Ln=0;function sS(s,e){s.slideJumpCooldownTimer>0&&(s.slideJumpCooldownTimer-=e),s.slideEnterCooldownTimer>0&&(s.slideEnterCooldownTimer-=e),s.dashCooldownTimer>0&&(s.dashCooldownTimer-=e)}function rS(s,e,t,n){const i=jc,r=s.ext,o=e.jumpHeld&&!r.lastJumpHeld;r.lastJumpHeld=e.jumpHeld;const a=r.lastHasSlideIntent,l=e.hasSlideIntent&&!a;if(r.lastHasSlideIntent=e.hasSlideIntent,e.dash&&r.dashCooldownTimer<=0&&r.dashActiveTimer<=0){const L=Math.cos(e.yaw),P=Math.sin(e.yaw);let R=e.moveX*L-e.moveZ*P,F=-(e.moveX*P+e.moveZ*L),j=Math.hypot(R,F);j<.01&&(R=-P,F=-L,j=Math.hypot(R,F)),j>.01&&(R/=j,F/=j,s.vx=R*i.dashSpeed,s.vz=F*i.dashSpeed,r.dashActiveTimer=i.dashDuration,r.dashCooldownTimer=i.dashCooldownSec,r.lastDashDirX=R,r.lastDashDirZ=F)}if(r.dashActiveTimer>0){r.dashActiveTimer-=t,s.vy-=i.gravity*t,s.vy=Math.max(s.vy,-55),s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<=Ln&&(s.y=Ln,s.vy=0);const L=ho(s.x,s.z,n);s.x=L.x,s.z=L.z;const P={x:s.vx,z:s.vz};er(P,L),s.vx=P.x,s.vz=P.z;return}if(s.movementState==="sliding"){r.slideTime+=t;const L=Math.hypot(s.vx,s.vz);s.vx*=i.slideDecay,s.vz*=i.slideDecay,s.vy-=i.gravity*t,s.vy=Math.max(s.vy,-55),s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<=Ln&&(s.y=Ln,s.vy=0);const P=ho(s.x,s.z,n);s.x=P.x,s.z=P.z;const R={x:s.vx,z:s.vz};er(R,P),s.vx=R.x,s.vz=R.z;const F=Math.cos(e.yaw),j=Math.sin(e.yaw),M=e.moveX*F-e.moveZ*j,C=-(e.moveX*j+e.moveZ*F),G=Math.hypot(M,C);if(G>.1&&L>.1&&(M*s.vx+C*s.vz)/(G*L)<.5){s.movementState="grounded",r.slideEnterCooldownTimer=i.slideEnterCooldown;return}const q=L>=i.slideMinSpeed&&r.slideTime<i.slideDurationMax&&s.y<=Ln+.01,J=r.slideJumpCooldownTimer<=0;if(e.jump&&q&&J){const W=i.slideJumpMultiplier;s.vy=i.jumpForce*W,s.vx*=W,s.vz*=W,r.horSpeedWhenJumped=Math.hypot(s.vx,s.vz),r.slideJumpCooldownTimer=i.slideJumpCooldown,r.lastApproachVx=s.vx,r.lastApproachVz=s.vz,s.movementState="airborne"}else q||(r.slideEnterCooldownTimer=i.slideEnterCooldown,s.movementState=s.y<=Ln+.01?"grounded":"airborne");return}if(s.movementState==="airborne"){l&&(r.slideOnLand=!0),a&&!e.hasSlideIntent&&(r.slideOnLand=!1);const L=Math.hypot(s.vx,s.vz),P=r.horSpeedWhenJumped;if(L>P&&P>0&&(s.vx*=P/L,s.vz*=P/L),s.vy-=i.gravity*t,s.vy=Math.max(s.vy,-55),s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<=Ln){s.y=Ln,s.vy=0;const M=Math.hypot(s.vx,s.vz);if(r.slideOnLand&&M>=i.slideEnterSpeed){s.movementState="sliding",r.slideTime=0,r.slideJumpCooldownTimer=0;const C=Math.max(M*i.slideSpeedBoost,i.slideInitialSpeed);M>0&&(s.vx=s.vx/M*C,s.vz=s.vz/M*C)}else s.movementState="grounded";r.slideOnLand=!1}else r.horSpeedWhenJumped===0&&L>0&&(r.horSpeedWhenJumped=L),s.movementState="airborne";const R=ho(s.x,s.z,n);if(s.x=R.x,s.z=R.z,R.normalX!==void 0&&R.normalX!==0||R.normalZ!==void 0&&R.normalZ!==0){const M=R.normalX??0,C=R.normalZ??0,G=r.lastApproachVx,X=r.lastApproachVz,q=Math.hypot(G,X),J=G*M+X*C;if(fetch("http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212",{method:"POST",headers:{"Content-Type":"application/json","X-Debug-Session-Id":"e78fd8"},body:JSON.stringify({sessionId:"e78fd8",runId:"post-fix",hypothesisId:"wallbounce-conditions",location:"shared/src/movement/stepPlayerMovement.ts:airborne",message:"airborne wall contact",data:{jumpPressedThisFrame:o,jumpHeld:e.jumpHeld,horSpeedApproach:q,minSpeed:i.wallBounceSpeedMin,dot:J,nx:M,nz:C,movementState:s.movementState},timestamp:Date.now()})}).catch(()=>{}),o&&q>=i.wallBounceSpeedMin&&J>0){let W=G-2*J*M,K=X-2*J*C;W*=i.wallBounceReflectFactor,K*=i.wallBounceReflectFactor;let Y=Math.hypot(W,K);const pe=Math.max(Y*i.wallBounceBoostFactor,i.wallBounceBoostMin);Y>0&&pe>Y&&(W*=pe/Y,K*=pe/Y,Y=pe),s.vx=W,s.vz=K,s.vy=i.jumpForce*i.wallBounceJumpMultiplier,r.horSpeedWhenJumped=Y,r.slideJumpCooldownTimer=i.slideJumpCooldown,r.slideOnLand=!1;const ue={x:s.vx,z:s.vz};er(ue,R),s.vx=ue.x,s.vz=ue.z;return}}else r.lastApproachVx=s.vx,r.lastApproachVz=s.vz;const j={x:s.vx,z:s.vz};er(j,R),s.vx=j.x,s.vz=j.z;return}const c=Math.hypot(s.vx,s.vz),u=r.slideEnterCooldownTimer<=0;if(e.hasSlideIntent&&u&&c>=i.slideEnterSpeed){s.movementState="sliding",r.slideTime=0;const L=Math.hypot(s.vx,s.vz),P=Math.max(L*i.slideSpeedBoost,i.slideInitialSpeed);L>0&&(s.vx=s.vx/L*P,s.vz=s.vz/L*P);return}const f=e.crouch?i.maxSpeedCrouch:i.maxSpeedWalk,_=Math.cos(e.yaw),v=Math.sin(e.yaw),p=(e.moveX*_-e.moveZ*v)*i.accel*t,m=(-e.moveX*v-e.moveZ*_)*i.accel*t;s.vx+=p,s.vz+=m,s.vx*=Math.max(0,1-i.friction*t),s.vz*=Math.max(0,1-i.friction*t);const S=Math.hypot(s.vx,s.vz);S>f&&(s.vx*=f/S,s.vz*=f/S),e.jump?(s.vy=i.jumpForce,r.horSpeedWhenJumped=Math.hypot(s.vx,s.vz),r.lastApproachVx=s.vx,r.lastApproachVz=s.vz,s.movementState="airborne"):s.vy=0,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<=Ln?(s.y=Ln,s.vy=0,s.movementState="grounded"):(r.horSpeedWhenJumped===0&&(r.horSpeedWhenJumped=Math.hypot(s.vx,s.vz)),s.movementState="airborne");const E=ho(s.x,s.z,n);s.x=E.x,s.z=E.z;const A={x:s.vx,z:s.vz};er(A,E),s.vx=A.x,s.vz=A.z}class oS{running=!1;lastTime=0;accumulator=0;onTick=()=>{};onRender=()=>{};rafId=0;setTickCallback(e){return this.onTick=e,this}setRenderCallback(e){return this.onRender=e,this}start(){this.running||(this.running=!0,this.lastTime=performance.now(),this.tick(0))}stop(){this.running=!1,this.rafId&&cancelAnimationFrame(this.rafId)}tick=e=>{this.rafId=requestAnimationFrame(this.tick);const t=(e-this.lastTime)/1e3;for(this.lastTime=e,this.accumulator+=Math.min(t,.1);this.accumulator>=Ua/1e3;)this.onTick(Ua/1e3),this.accumulator-=Ua/1e3;this.onRender(t)}}const Ri={},Ue={serverUrl:Ri?.VITE_SERVER_URL??"ws://localhost:2567",debugOverlay:!0,logLevel:"info",playerModelUrl:Ri?.VITE_PLAYER_MODEL_URL??"/models/player.glb",viewmodelArmsUrl:(Ri?.VITE_VIEWMODEL_ARMS_URL??"/models/vanguard_pov.glb").trim(),viewmodelWeaponUrl:(Ri?.VITE_VIEWMODEL_WEAPON_URL??"/models/weapons/rifle.glb").trim(),viewmodelWeaponScale:Number(Ri?.VITE_VIEWMODEL_WEAPON_SCALE??"3.6")||3.6,viewmodelWeaponTwoPoint:!1,viewmodelWeaponOffset:{x:.26,y:.23,z:.44},viewmodelWeaponPovOffset:{x:0,y:-.4,z:0},viewmodelWeaponGripOffset:{x:0,y:0,z:0},viewmodelWeaponRotationX:-1.68,viewmodelWeaponRotationY:2.93,viewmodelWeaponRotationZ:2*Math.PI,dummyModelUrl:Ri?.VITE_DUMMY_MODEL_URL??"/models/dummy.glb",playerSkin:(Ri?.VITE_PLAYER_SKIN??"orange").trim(),muzzleFlashUrls:[],muzzleFlashDurationMs:50,muzzleFlashScalePov:.21,muzzleFlashScale3P:.11,tracerEnabledDefault:!0,tracerMaxLifetimeMs:100,tracerEveryNthShot:1,tracerColor:16760944,tracerLineRadius:.01,tracerImpactLifetimeMs:90,tracerImpactSize:.08,tracerMuzzleSideOffset:.03,tracerFirstPersonLength:20,animationClipNames:{},thirdPersonWeaponOffset:{x:0,y:0,z:0},thirdPersonWeaponGripOffset:{x:0,y:0,z:0},thirdPersonWeaponScale:1,thirdPersonWeaponRotationX:.19,thirdPersonWeaponRotationY:3.16,thirdPersonWeaponRotationZ:1.45,tuning:{crouchTransitionTau:.04,povMovement:{moveFactorSmoothTau:.06,phaseSpeedSmoothTau:.08,rootApplyTau:.025,bobAmplitudeY:.01512,bobAmplitudeX:.0156,bobAmplitudeRoll:.0052,bobAmplitudePitch:.00258,bobPhaseOffsetX:.3,bobFrequency:10,bobCrouchMultiplier:.5,swayLookFactor:.6,swaySmoothTau:.05,swayDeltaSmoothTau:.04,swayReturnDamping:.88,swaySlideReduce:.92,bobSlideReduce:.98,strafeLeanX:.2,strafeLeanRoll:.025,forwardLeanZ:.1,strafeLeanTau:.06,strafeBobYReduce:.7,strafeBobXBoost:.5,strafeBobRollBoost:.8,idleBreathingAmplitudeY:.008,idleBreathingAmplitudeX:.0024,idleBreathingPeriod:4,idlePitchAmplitude:.0024,idleRollAmplitude:.0012,idleWalkReduce:.85,idleAirborneReduce:.3,jumpTakeoffDip:-.008,jumpTakeoffDecay:8,jumpAirborneFloatY:.032,jumpLandingDip:-.06,jumpLandingSpringK:60,jumpLandingSpringDamp:14,jumpLandingRoll:.016,jumpInertiaZ:.016,swayAirborneReduce:.5,recoilKickPitch:.02,recoilPullback:.15,recoilRollVariation:.02,recoilRecoveryTau:.06,recoilSlideReduce:.5,slideYOffset:-.2,slideZOffset:.1,slideInwardTilt:.38,slidePitchDown:-.1,slideImpactDipAmp:-.012,slideImpactSpringK:80,slideImpactSpringDamp:18,slideWiggleRoll:.005,slideWiggleDuration:.3,slideReleaseBump:0,slideReleaseBumpTau:.1,slideInTau:.04,slideOutTau:.28,bobCrouchFreqMultiplier:1,bobCrouchAmpMultiplier:1,reloadYOffset:-.12,reloadZOffset:.12,reloadPullback:.06,reloadPitchDown:-.3,reloadRoll:-.14,reloadYaw:.18,reloadOvershoot:.08,swayReloadReduce:.8,idleReloadReduce:.4},remoteInterpTau:.05,reconcileThreshold:.05,reconcileLerp:.5,reconcileMin:.01,reconcileYMin:.08,reconcileLerpGentle:.15},thirdPersonWeaponOffsets:{walkBackwards:{x:0,y:0,z:0,rotX:.09,rotY:3.39,rotZ:1.45,scale:1},crouchForward:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1},crouchBackward:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1},crouchLeft:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1},crouchRight:{x:0,y:0,z:0,rotX:.12,rotY:3.43,rotZ:1.45,scale:1}}},aS={moveX:0,moveZ:0,sprint:!1,jump:!1,slide:!1,slideJustPressed:!1,slideIntentTicks:0,crouch:!1,yaw:0,pitch:0,shoot:!1,reload:!1,dash:!1,debugModeJustPressed:!1},cS=["KeyW","KeyN","KeyT","KeyC","ShiftLeft","ShiftRight"];function lS(s){document.addEventListener("keydown",e=>{const t=e.code,n=e.key?.toLowerCase();e.ctrlKey&&(t==="KeyW"||t==="KeyN"||t==="KeyT"||n==="w"||n==="n"||n==="t")&&(e.preventDefault(),e.stopImmediatePropagation())},{capture:!0})}class hS{state={...aS};pointerLocked=!1;sensitivity=.002;bound=!1;keysDown=new Set;slideWasDown=!1;_slideIntentTicks=0;getState(){this.state.sprint=!1;const e=this.keysDown.has("ShiftLeft")||this.keysDown.has("ShiftRight");return this.state.slideJustPressed=e&&!this.slideWasDown,this.slideWasDown=e,this.state.slide=e,this.state.slideIntentTicks=this._slideIntentTicks,this.state.crouch=this.keysDown.has("KeyC"),this.state.dash=this.keysDown.has("KeyB"),this.state}tick(){this._slideIntentTicks>0&&this._slideIntentTicks--,this.state.debugModeJustPressed=!1}isPointerLocked(){return this.pointerLocked}requestPointerLock(e){if(this.bound)return;this.bound=!0,e.addEventListener("click",()=>{e.requestPointerLock(),navigator.keyboard?.lock&&navigator.keyboard.lock().then(()=>{}).catch(()=>{navigator.keyboard.lock(cS).catch(()=>{})})}),lS(),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===e,this.keysDown.clear(),this.slideWasDown=!1,this._slideIntentTicks=0,!this.pointerLocked&&navigator.keyboard?.unlock&&navigator.keyboard.unlock()}),document.addEventListener("mousemove",i=>{this.pointerLocked&&(this.state.yaw-=i.movementX*this.sensitivity,this.state.pitch-=i.movementY*this.sensitivity,this.state.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.state.pitch)))});const t={capture:!0},n=i=>{i.addEventListener("keydown",r=>this.onKey(r.code,!0,r),t),i.addEventListener("keyup",r=>this.onKey(r.code,!1,r),t)};n(document),n(window),n(e),window.addEventListener("keydown",i=>this.preventBrowserShortcuts(i),t),window.addEventListener("blur",()=>this.syncModifiers(!1,!1))}preventBrowserShortcuts(e){const t=e.key?.toLowerCase(),n=e.code;e.ctrlKey&&(n==="KeyW"||n==="KeyN"||n==="KeyT"||t==="w"||t==="n"||t==="t")&&e.preventDefault()}syncModifiers(e,t){this.keysDown.clear(),this.slideWasDown=!1,this._slideIntentTicks=0}isSlideKey(e){return e==="ShiftLeft"||e==="ShiftRight"}onKey(e,t,n){if(!n)return;const i=n.key?.toLowerCase();t?(this.keysDown.add(e),this.isSlideKey(e)&&(this._slideIntentTicks=Math.max(this._slideIntentTicks,10))):this.keysDown.delete(e),e==="KeyW"&&(this.state.moveZ=t?1:this.state.moveZ===1?0:this.state.moveZ),e==="KeyS"&&(this.state.moveZ=t?-1:this.state.moveZ===-1?0:this.state.moveZ),e==="KeyA"&&(this.state.moveX=t?-1:this.state.moveX===-1?0:this.state.moveX),e==="KeyD"&&(this.state.moveX=t?1:this.state.moveX===1?0:this.state.moveX),(e==="ShiftLeft"||e==="ShiftRight"||i==="shift")&&n.preventDefault(),e==="KeyC"&&n.preventDefault(),this.pointerLocked&&n.ctrlKey&&(e==="KeyW"||e==="KeyN"||e==="KeyT"||i==="w"||i==="n"||i==="t")&&n.preventDefault(),e==="Space"&&(n.preventDefault(),this.state.jump=t),e==="KeyR"&&(this.state.reload=t),e==="KeyB"&&n.preventDefault(),e==="F3"&&t&&(n.preventDefault(),this.state.debugModeJustPressed=!0)}setShoot(e){this.state.shoot=e}sampleMouse(e){}consumeOneShoot(){this.state.shoot=!1}setMouseSensitivity(e){const t=Math.max(.2,Math.min(3,e));this.sensitivity=.002*t}}class uS{camera;targetPosition=new D(0,0,0);yaw=0;pitch=0;smooth=.15;constructor(e=75,t=16/9,n=.1,i=1e3){this.camera=new qt(e,t,n,i)}setTargetPosition(e,t,n){this.targetPosition.set(e,t,n)}setRotation(e,t){this.yaw=e,this.pitch=t}getAimDirection(){this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0,this.camera.updateMatrixWorld(!0);const e=new D;return this.camera.getWorldDirection(e),e}snapToTarget(){this.camera.position.x=this.targetPosition.x,this.camera.position.y=this.targetPosition.y,this.camera.position.z=this.targetPosition.z,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0,this.camera.updateMatrixWorld()}update(e){this.camera.position.x=ko.lerp(this.camera.position.x,this.targetPosition.x,1-Math.exp(-this.smooth*60*e)),this.camera.position.z=ko.lerp(this.camera.position.z,this.targetPosition.z,1-Math.exp(-this.smooth*60*e)),this.camera.position.y=this.targetPosition.y,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0,this.camera.updateMatrixWorld()}getCamera(){return this.camera}getEyePosition(){return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z}}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}}const dS=0;class fS{position={x:0,y:dS,z:0};velocity={x:0,y:0,z:0};yaw=0;pitch=0;state="grounded";crouching=!1;coyoteTimer=0;jumpBufferTimer=0;ext={slideTime:0,slideEnterCooldownTimer:0,slideJumpCooldownTimer:0,slideOnLand:!1,horSpeedWhenJumped:0,lastApproachVx:0,lastApproachVz:0,lastJumpHeld:!1,lastHasSlideIntent:!1,dashCooldownTimer:0,dashActiveTimer:0,lastDashDirX:0,lastDashDirZ:0};update(e,t,n){const i=jc;t.jump&&(this.jumpBufferTimer=i.jumpBufferTime),this.state==="grounded"?this.coyoteTimer=i.coyoteTime:this.coyoteTimer-=e,sS(this.ext,e);const r=t.slide||t.slideIntentTicks>0,o=this.jumpBufferTimer>0||t.jump&&this.coyoteTimer>0,a={moveX:t.moveX,moveZ:t.moveZ,jump:o,jumpHeld:t.jump,hasSlideIntent:r,crouch:t.crouch,dash:t.dash,yaw:t.yaw,pitch:t.pitch},l={x:this.position.x,y:this.position.y,z:this.position.z,vx:this.velocity.x,vy:this.velocity.y,vz:this.velocity.z,movementState:this.state,ext:this.ext};rS(l,a,e,My),this.position.x=l.x,this.position.y=l.y,this.position.z=l.z,this.velocity.x=l.vx,this.velocity.y=l.vy,this.velocity.z=l.vz,this.state=l.movementState,this.yaw=t.yaw,this.pitch=t.pitch,o&&this.state==="airborne"&&(this.jumpBufferTimer=0),this.state==="airborne"&&(this.jumpBufferTimer-=e),this.crouching=this.state==="sliding"||this.state==="grounded"&&t.crouch}getSnapshot(){return{position:{...this.position},velocity:{...this.velocity},yaw:this.yaw,pitch:this.pitch,grounded:this.state==="grounded",state:this.state,crouching:this.crouching}}getDashCooldownRemaining(){return Math.max(0,this.ext.dashCooldownTimer)}getDashCooldownTotal(){return jc.dashCooldownSec}isDashing(){return this.ext.dashActiveTimer>0}}class pS{scene=new vx;renderer;floor;renderScale=1;constructor(e,t){const n=t?.antialias??!0;this.renderer=new _x({canvas:e,antialias:n}),this.renderScale=t?.renderScale&&t.renderScale>0?t.renderScale:1;const i=Math.min(window.devicePixelRatio*this.renderScale,2);this.renderer.setPixelRatio(i);const r=e.clientWidth||window.innerWidth,o=e.clientHeight||window.innerHeight;this.renderer.setSize(r,o),this.renderer.setClearColor(2763317),this.scene.background=new We(2763317);const a=new iy(16777215,.5);this.scene.add(a);const l=new Zx(2956110,855322,.35);this.scene.add(l);const c=new af(16777215,.85);c.position.set(12,25,12),this.scene.add(c);const u=new Cr(Qs,Qs),h=new Ds({color:14211292});this.floor=new Mt(u,h),this.floor.rotation.x=-Math.PI/2,this.scene.add(this.floor);const d=new _y(Qs,Qs,9079444,11053232);d.position.y=.001,this.scene.add(d);const f=new $i(Qs,4,.5),_=new Ds({color:14211292});for(const[v,p]of[[0,lo],[0,-lo],[lo,0],[-lo,0]]){const m=new Mt(f,_);m.position.set(v,2,p),p===0&&(m.rotation.y=Math.PI/2),this.scene.add(m)}this.scene.add(this.createProceduralSkybox())}createProceduralSkybox(){const t=new qo(500,32,24),n=new ni({uniforms:{},vertexShader:`
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
      `,side:Jt,depthWrite:!1}),i=new Mt(t,n);return i.frustumCulled=!1,i}render(e){this.renderer.render(this.scene,e)}resize(e,t){this.renderer.setSize(e,t)}getScene(){return this.scene}setPerformance(e){this.renderScale=e.renderScale>0?e.renderScale:1;const t=Math.min(window.devicePixelRatio*this.renderScale,2);this.renderer.setPixelRatio(t)}}const cu=10;function mf(s){return s.length<=cu?s:s.slice(0,cu)+"..."}let uo=null;const gf="#4dd0e1",mS="#c62828",gS="#9a1f1f",_S="rgba(0,0,0,0.6)",bo=10;function vS(s){const e=document.createElement("div");e.id="crosshair",e.style.cssText=`
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
  `,s.appendChild(e);const t=document.createElement("div");t.id="hud-player-panel",t.style.cssText=`
    position: fixed; bottom: 48px; left: 48px;
    display: flex; flex-direction: column; gap: 6px;
    font-family: system-ui, sans-serif; color: #fff;
  `;const n=document.createElement("div");n.id="hud-player-value",n.style.cssText="font-size: 26px; font-weight: 600; letter-spacing: 0.02em;",n.textContent="150 / 150";const i=document.createElement("div");i.id="hud-player-bar",i.style.cssText=`
    display: flex; gap: 2px; width: 230px; height: 17px;
    background: rgba(0,0,0,0.5); border-radius: 4px;
    padding: 4px; box-sizing: border-box;
  `;for(let P=0;P<bo;P++){const R=document.createElement("div");R.style.cssText=`
      flex: 1; border-radius: 2px; min-width: 0;
      background: ${gf}; transition: background 0.15s ease;
    `,i.appendChild(R)}const r=document.createElement("div");r.id="hud-player-name",r.style.cssText="font-size: 18px; color: rgba(255,255,255,0.9);",r.textContent="Player";const o=document.createElement("div");o.id="hud-left-info",o.style.cssText="font-size: 15px; color: rgba(255,255,255,0.5); margin-top: 4px;",o.textContent="";const a=document.createElement("div");a.id="hud-dash-indicator",a.style.cssText=`
    display: flex; align-items: center; gap: 8px; margin-top: 8px;
  `;const l=document.createElement("div");l.id="hud-dash-circle",l.style.cssText=`
    width: 36px; height: 36px; border-radius: 50%;
    background: conic-gradient(var(--dash-fill-color, #4dd0e1) calc(var(--dash-fill, 0) * 360deg), rgba(255,255,255,0.15) 0);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  `;const c=document.createElement("div");c.id="hud-dash-icon",c.setAttribute("aria-label","Dash"),c.style.cssText=`
    width: 28px; height: 28px; border-radius: 50%;
    background: rgba(0,0,0,0.5);
    border: 2px solid currentColor;
    color: #4dd0e1;
    transition: filter 0.2s ease, color 0.2s ease;
  `,l.appendChild(c),a.appendChild(l),t.appendChild(n),t.appendChild(i),t.appendChild(r),t.appendChild(o),t.appendChild(a),s.appendChild(t);const u=document.createElement("div");u.id="hud-dash-lines-left",u.style.cssText=`
    position: fixed; left: 0; top: 0; bottom: 0; width: 4%;
    max-width: 48px; pointer-events: none;
    background: linear-gradient(90deg, rgba(77,208,225,0.25) 0%, transparent 100%);
    opacity: 0; transition: opacity 0.08s ease-out;
    z-index: 1;
  `;const h=document.createElement("div");h.id="hud-dash-lines-right",h.style.cssText=`
    position: fixed; right: 0; top: 0; bottom: 0; width: 4%;
    max-width: 48px; pointer-events: none;
    background: linear-gradient(270deg, rgba(77,208,225,0.25) 0%, transparent 100%);
    opacity: 0; transition: opacity 0.08s ease-out;
    z-index: 1;
  `,s.appendChild(u),s.appendChild(h);const d=document.createElement("div");d.id="hud-weapon-panel",d.style.cssText=`
    position: fixed; bottom: 48px; right: 48px;
    display: flex; flex-direction: row; align-items: stretch; gap: 16px;
    font-family: system-ui, sans-serif; color: #fff;
  `;const f=document.createElement("img");f.id="hud-weapon-image",f.src="/ui/weapon_rifle_white.png",f.alt="Weapon",f.style.cssText=`
    width: 208px; height: auto; object-fit: contain;
    filter: drop-shadow(0 0 6px rgba(0,0,0,0.7));
    transform: scaleX(-1);
  `;const _=document.createElement("div");_.id="hud-info",_.style.cssText=`
    font-size: 26px; font-weight: 600; letter-spacing: 0.02em;
    color: #fff; text-align: right;
  `,_.innerHTML='<span style="color:#fff">30</span><span style="color:rgba(255,255,255,0.6)"> / 30</span>';const v=document.createElement("div");v.style.cssText=`
    display: flex; flex-direction: column; align-items: flex-end; gap: 6px;
  `,v.appendChild(_),v.appendChild(f);const p=document.createElement("div");p.id="hud-weapon-slots",p.style.cssText=`
    display: flex; flex-direction: column; align-items: flex-start; min-height: 0;
  `;const m=document.createElement("div");m.style.cssText=`
    display: flex; flex-direction: row; align-items: center; gap: 8px;
    flex: 1; min-height: 0; opacity: 0.9;
  `;const S=document.createElement("div");S.style.cssText=`
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
  `,S.appendChild(E);const A=document.createElement("div");A.textContent="1",A.style.cssText=`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: rgba(255,255,255,0.9);
  `,m.appendChild(S),m.appendChild(A),p.appendChild(m),d.appendChild(v),d.appendChild(p),s.appendChild(d);const L=document.createElement("div");L.id="respawn-overlay",L.style.cssText=`
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
  `,L.innerHTML='<div>Respawn</div><div id="respawn-countdown">3.0</div>',s.appendChild(L)}function xS(s,e,t,n,i,r,o,a,l,c,u){const h=s>0,d=h?s:t,f=h?e:n,_=f>0?d/f:0,v=Math.round(_*bo),p=h?gf:mS,m=document.getElementById("hud-player-value");if(m){const K=Math.max(0,Math.floor(s+t)),Y=e+n;m.innerHTML=`<span style="color:#fff">${K}</span><span style="color:rgba(255,255,255,0.6)"> / ${Y}</span>`}const S=document.getElementById("hud-player-bar"),E=h?gS:_S;if(S&&S.children.length===bo)for(let K=0;K<bo;K++){const Y=S.children[K];Y.style.background=K<v?p:E}const A=document.getElementById("hud-player-bar");A&&(A.style.background=h?"rgba(40,0,0,0.4)":"rgba(0,0,0,0.5)");const L=document.getElementById("hud-player-name");L&&(L.textContent=mf(o));const P=document.getElementById("hud-info");if(P){const K=a?"∞":String(i),Y=a?"∞":String(r);P.innerHTML=`<span style="color:#fff">${K}</span><span style="color:rgba(255,255,255,0.6)"> / ${Y}</span>`}const R=Math.max(.001,c??10),F=Math.max(0,l??0),j=1-F/R,M=F<=0,C=document.getElementById("hud-dash-circle"),G=document.getElementById("hud-dash-icon");C&&G&&(C.style.setProperty("--dash-fill",String(j)),C.style.setProperty("--dash-fill-color",M?"#4dd0e1":"rgba(255,255,255,0.2)"),G.style.color=M?"#4dd0e1":"rgba(255,255,255,0.4)",G.style.filter=M?"none":"grayscale(1)");const X=document.getElementById("hud-dash-lines-left"),q=document.getElementById("hud-dash-lines-right");if(X&&q){const K=u??!1;X.style.opacity=K?"1":"0",q.style.opacity=K?"1":"0"}const J=document.getElementById("respawn-overlay"),W=document.getElementById("respawn-countdown");if(!(!J||!W))if(t<=0){uo===null&&(uo=performance.now());const K=(performance.now()-uo)/1e3,Y=Math.max(0,Ry-K);W.textContent=Y.toFixed(1),J.style.display="block"}else uo=null,J.style.display="none"}const yS=.5,SS=84,MS=10,qc=10,_f="#4dd0e1",ES="#c62828",TS="#9a1f1f",AS="rgba(0,0,0,0.6)",bS=80,wS=-14,RS=.06,CS=.18,PS=2,fo=24;let vi=null;const vs=new Map;let vf=0;const lu=new D,po=new D;function IS(s){vi=document.createElement("div"),vi.id="player-health-bars",vi.style.cssText="position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:9999;",s.appendChild(vi)}function LS(s){if(!vi)return;let e=vs.get(s);if(!e){const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      display: flex;
      gap: 1px;
      width: ${SS}px;
      height: ${MS}px;
      background: rgba(0,0,0,0.5);
      border: 1px solid rgba(0,0,0,0.85);
      border-radius: 2px;
      padding: 1px;
      box-sizing: border-box;
      transform-origin: center center;
      opacity: 0;
    `;const n=[];for(let i=0;i<qc;i++){const r=document.createElement("div");r.style.cssText=`
        flex: 1; min-width: 0; border-radius: 1px;
        background: ${_f}; transition: background 0.12s ease;
      `,t.appendChild(r),n.push(r)}vi.appendChild(t),e={entityId:s,lastDamagedTime:0,lastDamagedMs:0,element:t,segments:n,smoothedScreenX:0,smoothedScreenY:0,visibilityAlpha:0,prevShield:xr,prevHealth:$c,shieldBreakFlashUntil:0},vs.set(s,e)}e.lastDamagedTime=performance.now()/1e3,e.lastDamagedMs=vf}function DS(s,e,t){vf+=t*1e3;const n=performance.now()/1e3;if(!vi||!s)return;const i=window.innerWidth,r=window.innerHeight,o=fo,a=i-fo,l=fo,c=r-fo,u=wy/1e3,h=[];s.state.players.forEach((_,v)=>{const p=vs.get(v);!p||_.health<=0||n-p.lastDamagedTime>u||h.push(p)}),h.sort((_,v)=>v.lastDamagedTime-_.lastDamagedTime);const d=h.slice(0,PS);s.state.players.forEach((_,v)=>{const p=vs.get(v);if(!p)return;const m=_.health>0,S=n-p.lastDamagedTime,E=m&&S<u&&d.includes(p);if(lu.set(_.x,_.y+_s+yS,_.z),po.copy(lu).project(e),po.z>1){p.element.style.opacity="0",p.element.style.pointerEvents="none";return}let A=(po.x*.5+.5)*i,L=(1-(po.y*.5+.5))*r+wS;A=Math.max(o,Math.min(a,A)),L=Math.max(l,Math.min(c,L));const P=A-p.smoothedScreenX,R=L-p.smoothedScreenY,F=Math.hypot(P,R);if((F>80||p.smoothedScreenX===0&&p.smoothedScreenY===0)&&(p.smoothedScreenX=A,p.smoothedScreenY=L),F<=80){const me=1-Math.exp(-22*t);p.smoothedScreenX+=(A-p.smoothedScreenX)*me,p.smoothedScreenY+=(L-p.smoothedScreenY)*me}(E?1:0)>p.visibilityAlpha?p.visibilityAlpha=Math.min(1,p.visibilityAlpha+t/RS):p.visibilityAlpha=Math.max(0,p.visibilityAlpha-t/CS),p.element.style.left=`${p.smoothedScreenX}px`,p.element.style.top=`${p.smoothedScreenY}px`,p.element.style.transform="translate(-50%, -50%)",p.element.style.opacity=String(p.visibilityAlpha);const M=_.shield??0,C=_.maxShield??xr,G=M>0,X=G?M:_.health,q=G?C:_.maxHealth,J=q>0?X/q:0,W=Math.round(J*qc),K=G?_f:ES,Y=G?TS:AS;p.element.style.background="rgba(0,0,0,0.5)";for(let me=0;me<qc;me++){const ke=p.segments[me];ke&&(ke.style.background=me<W?K:Y)}p.prevShield>0&&M===0&&(p.shieldBreakFlashUntil=n*1e3+bS),p.prevShield=M,p.prevHealth=_.health;const ue=n*1e3<p.shieldBreakFlashUntil;p.element.style.boxShadow=ue?"0 0 8px 2px rgba(255,80,80,0.8)":"none"});const f=[];vs.forEach((_,v)=>{s.state.players.get(v)||(vi?.removeChild(_.element),f.push(v))}),f.forEach(_=>vs.delete(_))}const hu=1,Fa=26,NS=4,Ba="#e53935",mo=60,go=63,uu=52,OS=9995,US=.5;let ki=null;const Nn=[],za=new D,tr=new D,FS=new D(0,1,0);let du=0,Kc=null;function BS(){return Kc}function fu(s,e,t,n,i){const r=Math.sin(-n),o=Math.cos(-n),a=Math.sin(i),l=Math.cos(i);za.set(r,o*a,-o*l),tr.crossVectors(za,FS),tr.lengthSq()<1e-10?tr.set(1,0,0):tr.normalize();const c=new D(s,e,t),u=c.dot(za),h=c.dot(tr);let d=Math.atan2(h,u);return d<0&&(d+=2*Math.PI),d*180/Math.PI}function zS(s){ki=document.createElement("div"),ki.id="hit-indicator",ki.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:${OS};`,s.appendChild(ki)}function kS(s,e,t){if(!ki)return;for(;Nn.length>=NS;)Nn.shift().element.remove();const n=document.createElement("div");n.style.cssText=`
    position: absolute;
    left: 50%;
    top: 50%;
    width: ${uu}vmin;
    height: ${uu}vmin;
    transform-origin: center center;
  `;const i=document.createElement("div");i.style.cssText=`
    position: absolute;
    inset: 0;
    background: conic-gradient(
      from ${-Fa/2}deg at 50% 50%,
      ${Ba} 0deg,
      ${Ba} ${Fa}deg,
      transparent ${Fa}deg
    );
    opacity: 0.55;
    mask: radial-gradient(
      circle,
      transparent 0%,
      transparent ${mo}%,
      rgba(255,255,255,0.4) ${mo}%,
      rgba(255,255,255,0.9) ${go}%,
      transparent ${go}%
    );
    -webkit-mask: radial-gradient(
      circle,
      transparent 0%,
      transparent ${mo}%,
      rgba(255,255,255,0.4) ${mo}%,
      rgba(255,255,255,0.9) ${go}%,
      transparent ${go}%
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
    border-bottom: ${r}px solid ${Ba};
    opacity: 0.9;
    pointer-events: none;
  `,n.appendChild(i),n.appendChild(a),ki.appendChild(n),Nn.push({spawnTime:performance.now()/1e3,dirX:s,dirY:e,dirZ:t,element:n,wedge:i,arrow:a})}function HS(s,e,t,n){if(!ki)return;const i=performance.now()/1e3;if(n&&Nn.length>0&&i-du>=US){du=i;const r=Nn[Nn.length-1],o=fu(r.dirX,r.dirY,r.dirZ,s,e);console.log(`[HitIndicator] dir=(${r.dirX.toFixed(2)},${r.dirY.toFixed(2)},${r.dirZ.toFixed(2)}) angle=${o.toFixed(1)}°`)}Kc=null;for(let r=Nn.length-1;r>=0;r--){const o=Nn[r],a=i-o.spawnTime,l=fu(o.dirX,o.dirY,o.dirZ,s,e);r===Nn.length-1&&(Kc=l),o.element.style.transform=`translate(-50%, -50%) rotate(${l}deg)`;const c=Math.max(0,1-a/hu);o.wedge.style.opacity=String(.55*c),o.arrow.style.opacity=String(.9*c),a>=hu&&(o.element.remove(),Nn.splice(r,1))}}const xf=.2,VS=.58,yf=.23,GS=.72,Sf=.26,WS=.6,Mf=.45,XS=.42,Ko=.28,Ef=.55,pu=.1,$S=22,YS=8;let fn=null,wo=null,Ro=null,Co=null,Ui=null,Po=null,Io=null;const Tf={remaining:0,duration:xf,maxAlpha:VS},Af={remaining:0,duration:yf,maxAlpha:GS},bf={remaining:0,duration:Sf,maxAlpha:WS},Zc={remaining:0,duration:Mf,maxAlpha:XS},wf={remaining:0,duration:Ko,maxAlpha:Ef},Rf={remaining:0,duration:Ko,maxAlpha:Ef};let fr=null,Lo=null,Do=!1;function jS(s){if(fn)return;fn=document.createElement("div"),fn.id="screen-damage-feedback",fn.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:9994;";const e="position:fixed;inset:0;pointer-events:none;background:transparent;opacity:0;transition:none;",t=document.createElement("div");t.style.cssText=`${e}background:
    radial-gradient(ellipse 85% 85% at 0 0, rgba(100,200,255,0.92) 0%, rgba(80,180,255,0.55) 22%, transparent 52%) 0 0 / 34vmin 11vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 0, rgba(100,200,255,0.92) 0%, rgba(80,180,255,0.55) 22%, transparent 52%) 100% 0 / 34vmin 11vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 0 100%, rgba(100,200,255,0.92) 0%, rgba(80,180,255,0.55) 22%, transparent 52%) 0 100% / 34vmin 11vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 100%, rgba(100,200,255,0.92) 0%, rgba(80,180,255,0.55) 22%, transparent 52%) 100% 100% / 34vmin 11vmin no-repeat;`;const n=document.createElement("div");n.style.cssText=`${e}background:
    radial-gradient(ellipse 85% 85% at 0 0, rgba(160,220,255,0.98) 0%, rgba(110,200,255,0.7) 20%, transparent 55%) 0 0 / 30vmin 10vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 0, rgba(160,220,255,0.98) 0%, rgba(110,200,255,0.7) 20%, transparent 55%) 100% 0 / 30vmin 10vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 0 100%, rgba(160,220,255,0.98) 0%, rgba(110,200,255,0.7) 20%, transparent 55%) 0 100% / 30vmin 10vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 100%, rgba(160,220,255,0.98) 0%, rgba(110,200,255,0.7) 20%, transparent 55%) 100% 100% / 30vmin 10vmin no-repeat;`;const i=document.createElement("div");i.style.cssText=`${e}background:
    radial-gradient(ellipse 85% 85% at 0 0, rgba(210,40,40,1) 0%, rgba(210,40,40,0.85) 30%, transparent 80%) 0 0 / 28vmin 9vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 0, rgba(210,40,40,1) 0%, rgba(210,40,40,0.85) 30%, transparent 80%) 100% 0 / 28vmin 9vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 0 100%, rgba(210,40,40,1) 0%, rgba(210,40,40,0.85) 30%, transparent 80%) 0 100% / 28vmin 9vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 100%, rgba(210,40,40,1) 0%, rgba(210,40,40,0.85) 30%, transparent 80%) 100% 100% / 28vmin 9vmin no-repeat;`;const r=document.createElement("div"),o="rgba(100,255,140,0.4)",a="10px",l="1.5px",c=`repeating-linear-gradient(0deg, transparent 0, transparent ${a}, ${o} ${a}, ${o} calc(${a} + ${l}))`,u=`repeating-linear-gradient(90deg, transparent 0, transparent ${a}, ${o} ${a}, ${o} calc(${a} + ${l}))`;r.style.cssText=`
    position: fixed; left: 0; right: 0; bottom: 0; height: 7vmin;
    pointer-events: none; opacity: 0; transition: none;
    border-radius: 55% 55% 0 0;
    background-image: ${c}, ${u},
      radial-gradient(ellipse 75% 100% at 50% 100%, rgba(50,230,95,0.62) 0%, transparent 70%);
    background-size: 100% 100%, 100% 100%, 100% 100%;
    background-position: 0 0, 0 0, 0 0;
    background-repeat: repeat, repeat, no-repeat;`;const h="20px",d="19px",f="rgba(90,190,255,0.78)",_="rgba(255,90,90,0.8)",v=R=>`repeating-linear-gradient(0deg, transparent 0, transparent ${d}, ${R} ${d}, ${R} ${h})`,p=R=>`repeating-linear-gradient(90deg, transparent 0, transparent ${d}, ${R} ${d}, ${R} ${h})`,m=R=>`${v(R)}, ${p(R)}`,S=`${$S}vmin ${YS}vmin`,E="0 0, 0 0, 100% 0, 100% 0, 0 100%, 0 100%, 100% 100%, 100% 100%",A=[S,S,S,S,S,S,S,S].join(", "),L=document.createElement("div");L.style.cssText=`${e}
    background-image: ${m(f)}, ${m(f)}, ${m(f)}, ${m(f)};
    background-size: ${A};
    background-position: ${E};
    background-repeat: no-repeat;`;const P=document.createElement("div");P.style.cssText=`${e}
    background-image: ${m(_)}, ${m(_)}, ${m(_)}, ${m(_)};
    background-size: ${A};
    background-position: ${E};
    background-repeat: no-repeat;`,fn.appendChild(t),fn.appendChild(n),fn.appendChild(i),fn.appendChild(r),fn.appendChild(L),fn.appendChild(P),s.appendChild(fn),wo=t,Ro=n,Co=i,Ui=r,Po=L,Io=P,fr=null,Lo=null,Do=!1}function qS(s,e,t,n,i){if(!fn||!wo||!Ro||!Co||!Ui||!Po||!Io)return;const r=s>pu?pu:s<0?0:s;if(fr!==null&&Lo!==null){const o=e-fr,a=n-Lo;o<0?(e===0?ZS():e>0&&KS(),eM()):e===0&&a<0&&(JS(),tM());const l=e>fr&&e<t;l&&!Do?(QS(),Do=!0):(!l||e===t)&&(Do=!1)}if(fr=e,Lo=n,ds(Tf,wo,r),ds(Af,Ro,r),ds(bf,Co,r),ds(Zc,Ui,r),Zc.remaining>0&&Ui){const o=parseFloat(Ui.style.opacity)||0,a=.88+.12*Math.sin(performance.now()*.004);Ui.style.opacity=Math.max(0,Math.min(1,o*a)).toFixed(3)}ds(wf,Po,r),ds(Rf,Io,r),n<=0&&(wo.style.opacity="0",Ro.style.opacity="0",Co.style.opacity="0",Ui.style.opacity="0",Po.style.opacity="0",Io.style.opacity="0")}function ds(s,e,t){if(s.remaining<=0){e.style.opacity="0";return}if(s.remaining-=t,s.remaining<=0){e.style.opacity="0",s.remaining=0;return}const n=s.duration>0?s.remaining/s.duration:0,i=s.maxAlpha*n,r=i<0?0:i>s.maxAlpha?s.maxAlpha:i;e.style.opacity=r.toFixed(3)}function KS(s,e){Tf.remaining=xf}function ZS(s,e,t){Af.remaining=yf}function JS(s,e){bf.remaining=Sf}function QS(){Zc.remaining=Mf}function eM(){wf.remaining=Ko}function tM(){Rf.remaining=Ko}const Cf=.28,nM=.4,fs="#a0a0a0",iM="#e53935",mu=.1,Fi=40,Pt=Fi/2,gu=9,Il=7,Pf=6,_o=2,sM=9996;let Hi=null,Vi=[],Gt=null;function rM(s){if(Hi)return;const e=document.createElement("div");e.id="crosshair-hit-feedback",e.style.cssText=`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${Fi}px;
    height: ${Fi}px;
    pointer-events: none;
    z-index: ${sM};
    opacity: 0;
    transition: none;
  `,e.innerHTML=`
    <svg width="${Fi}" height="${Fi}" viewBox="0 0 ${Fi} ${Fi}" xmlns="http://www.w3.org/2000/svg">
      <line id="hitmarker-nw" x1="${Pt}" y1="${Pt}" x2="${Pt}" y2="${Pt}" stroke="${fs}" stroke-width="${_o}" stroke-linecap="round" />
      <line id="hitmarker-ne" x1="${Pt}" y1="${Pt}" x2="${Pt}" y2="${Pt}" stroke="${fs}" stroke-width="${_o}" stroke-linecap="round" />
      <line id="hitmarker-se" x1="${Pt}" y1="${Pt}" x2="${Pt}" y2="${Pt}" stroke="${fs}" stroke-width="${_o}" stroke-linecap="round" />
      <line id="hitmarker-sw" x1="${Pt}" y1="${Pt}" x2="${Pt}" y2="${Pt}" stroke="${fs}" stroke-width="${_o}" stroke-linecap="round" />
    </svg>
  `;const t=e.querySelector("svg"),n=t?.querySelector("#hitmarker-nw")??null,i=t?.querySelector("#hitmarker-ne")??null,r=t?.querySelector("#hitmarker-se")??null,o=t?.querySelector("#hitmarker-sw")??null;!t||!n||!i||!r||!o||(Hi=e,Vi=[n,i,r,o],Gt={remaining:0,duration:Cf,color:fs,active:!1},s.appendChild(e),Ll(Il))}function oM(){If(Cf,fs)}function aM(){If(nM,iM)}function cM(s){if(!Hi||Vi.length===0||!Gt||!Gt.active)return;const e=s<0?0:s>mu?mu:s;if(Gt.remaining-=e,Gt.remaining<=0){Gt.active=!1,Gt.remaining=0,Hi.style.opacity="0";return}const t=Gt.duration>0?Gt.remaining/Gt.duration:0,n=t*t;Hi.style.opacity=n.toFixed(3);const i=1-t,r=Il+Pf*(i<0?0:i);Ll(r)}function If(s,e){if(!Hi||Vi.length===0)return;Gt?(Gt.remaining=s,Gt.duration=s,Gt.color=e,Gt.active=!0):Gt={remaining:s,duration:s,color:e,active:!0};for(const n of Vi)n.style.stroke=e;Hi.style.opacity="1";const t=Il+Pf;Ll(t)}function Ll(s){if(Vi.length===0)return;const e=[{x:-1,y:-1},{x:1,y:-1},{x:1,y:1},{x:-1,y:1}],t=gu,n=gu+s;for(let i=0;i<Vi.length&&i<e.length;i++){const r=Vi[i],o=e[i],a=Pt+o.x*t,l=Pt+o.y*t,c=Pt+o.x*n,u=Pt+o.y*n;r.setAttribute("x1",a.toFixed(2)),r.setAttribute("y1",l.toFixed(2)),r.setAttribute("x2",c.toFixed(2)),r.setAttribute("y2",u.toFixed(2))}}let Tn=null;function lM(s){Tn=document.createElement("div"),Tn.id="loading-screen",Tn.style.cssText=`
    position: fixed; inset: 0; z-index: 1000;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    background: #0a0a0a; color: #ddd; font-family: system-ui, sans-serif;
  `;const e=document.createElement("div");e.style.cssText=`
    width: 280px; height: 6px; background: #333; border-radius: 3px; overflow: hidden;
    margin-bottom: 24px;
  `;const t=document.createElement("div");t.id="loading-fill",t.style.cssText=`
    width: 0%; height: 100%; background: #4a9; border-radius: 3px;
    transition: width 0.3s ease;
  `,e.appendChild(t);const n=document.createElement("div");n.id="loading-text",n.style.cssText="font-size: 18px; font-weight: 500;",n.textContent="Loading game…",Tn.appendChild(e),Tn.appendChild(n),s.appendChild(Tn)}function nr(s,e){const t=document.getElementById("loading-text"),n=document.getElementById("loading-fill");t&&(t.textContent=s),n&&e!==void 0&&(n.style.width=`${Math.min(100,Math.max(0,e))}%`)}function hM(){Tn&&Tn.parentNode&&(Tn.parentNode.removeChild(Tn),Tn=null)}let ka=0,Ha=performance.now(),_u=0,vu=0;const uM=100;function dM(s){const e=document.createElement("div");e.id="debug-overlay",e.style.cssText=`
    display: none;
    position: fixed; top: 8px; right: 8px; color: #8f8; font-family: monospace; font-size: 12px;
    background: rgba(0,0,0,0.6); padding: 8px; border-radius: 4px;
  `,e.textContent="FPS: 0 | Vel: 0,0,0 | State: grounded",s.appendChild(e)}function fM(s,e,t,n,i,r,o){ka++;const a=performance.now();if(a-Ha>=500&&(vu=Math.round(ka*1e3/(a-Ha)),ka=0,Ha=a),a-_u<uM)return;_u=a;const l=document.getElementById("debug-overlay");if(l){if(l.style.display=i?"block":"none",!i)return;const c=t!==void 0?` | Sprint: ${t}`:"";let u="";n!==void 0&&(u=` | Net: ${n.connected?"ok":"off"} | In room: ${n.playerCount}`);const h=" | [B] Debug: ON",d=r!=null?` | Hit: ${r.toFixed(0)}°`:"",f=o!=null?` | Ping: ${o}ms`:"";l.textContent=`FPS: ${vu} | Vel: ${s.x.toFixed(1)}, ${s.y.toFixed(1)}, ${s.z.toFixed(1)} | State: ${e}${c}${u}${f}${h}${d}`}}const xu=.3,pM=16776960,yu=.015,mM=65416,gM=16746496,Va=16;function Su(s){const e=new Zt,t=new qo(Ey,Va,Va),n=new wn({color:s,transparent:!0,opacity:xu,depthWrite:!1}),i=new Qh(t.clone()),r=new br({color:s,transparent:!0,opacity:.85,depthWrite:!1}),o=Go-Yc,a=(Yc+Go)/2,l=new Zt;l.position.set(0,Cl,0),l.add(new Mt(t,n)),l.add(new Ls(i,r)),e.add(l);const c=new El(Pl,o,4,Va),u=new wn({color:s,transparent:!0,opacity:xu,depthWrite:!1}),h=new Zt,d=new Mt(c,u);h.add(d);const f=new Qh(c.clone()),_=new br({color:s,transparent:!0,opacity:.85,depthWrite:!1});return h.add(new Ls(f,_)),h.position.set(0,a,0),e.add(h),e}const _M=Go-Yc,vM=_M+2*Pl;function Mu(s,e,t){const n=s.children[0],i=s.children[1];if(t){const{head:r,bodyCenter:o,spineTop:a,pelvis:l,feet:c}=t;s.position.set(0,0,0),n.position.set(r.x,r.y,r.z);const u=a.y+Ay,h=u-c.y,d=(o.x+l.x)/2,f=(c.y+u)/2,_=(o.z+l.z)/2;i.position.set(d,f,_);const v=h+2*Pl;i.scale.set(1,Math.max(.1,v)/vM,1),i.visible=!0}else{s.position.set(e.x,e.y,e.z),n.position.set(0,Cl,0);const r=Go/2;i.position.set(0,r,0),i.scale.set(1,1,1),i.visible=!0}}class xM{scene;localGroup;remoteGroups=[];aimRayGroup;visible=!1;maxRemote=16;constructor(e){this.scene=e,this.localGroup=Su(mM),this.localGroup.visible=!1,this.scene.add(this.localGroup),this.aimRayGroup=new Zt;const t=new jo(yu,yu,1,8),n=new wn({color:pM,transparent:!0,opacity:.9,depthTest:!0});this.aimRayGroup.add(new Mt(t,n)),this.aimRayGroup.visible=!1,this.scene.add(this.aimRayGroup);for(let i=0;i<this.maxRemote;i++){const r=Su(gM);r.visible=!1,this.scene.add(r),this.remoteGroups.push(r)}}setVisible(e,t=!1){this.visible=e,this.localGroup.visible=e&&!t,this.aimRayGroup.visible=!1,this.remoteGroups.forEach(n=>n.visible=!1)}update(e,t,n){if(this.visible){e&&Mu(this.localGroup,e,n),t.forEach((i,r)=>{const o=this.remoteGroups[r];o&&(o.visible=!0,Mu(o,{x:i.x,y:i.y,z:i.z},i.hitboxPositions))});for(let i=t.length;i<this.remoteGroups.length;i++)this.remoteGroups[i].visible=!1}}dispose(){this.scene.remove(this.aimRayGroup),this.aimRayGroup.traverse(e=>{e instanceof Mt&&(e.geometry?.dispose(),e.material?.dispose())}),this.scene.remove(this.localGroup),this.localGroup.traverse(e=>{(e instanceof Mt||e instanceof Ls)&&(e.geometry?.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material?.dispose())}),this.remoteGroups.forEach(e=>{this.scene.remove(e),e.traverse(t=>{(t instanceof Mt||t instanceof Ls)&&(t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material?.dispose())})})}}const Eu={ammo:30,maxAmmo:30};var Ga={},Tu={},Au;function yM(){return Au||(Au=1,ArrayBuffer.isView||(ArrayBuffer.isView=s=>s!==null&&typeof s=="object"&&s.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window)),Tu}var Yn={},Wa={},bu;function Dl(){return bu||(bu=1,(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.ServerError=s.CloseCode=void 0,(function(t){t[t.CONSENTED=4e3]="CONSENTED",t[t.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(s.CloseCode||(s.CloseCode={}));class e extends Error{constructor(n,i){super(i),this.name="ServerError",this.code=n}}s.ServerError=e})(Wa)),Wa}var Sn={},Ci={},wu;function SM(){if(wu)return Ci;wu=1,Object.defineProperty(Ci,"__esModule",{value:!0}),Ci.decode=Ci.encode=void 0;function s(c,u){if(this._offset=u,c instanceof ArrayBuffer)this._buffer=c,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(c))this._buffer=c.buffer,this._view=new DataView(this._buffer,c.byteOffset,c.byteLength);else throw new Error("Invalid argument")}function e(c,u,h){for(var d="",f=0,_=u,v=u+h;_<v;_++){var p=c.getUint8(_);if((p&128)===0){d+=String.fromCharCode(p);continue}if((p&224)===192){d+=String.fromCharCode((p&31)<<6|c.getUint8(++_)&63);continue}if((p&240)===224){d+=String.fromCharCode((p&15)<<12|(c.getUint8(++_)&63)<<6|(c.getUint8(++_)&63)<<0);continue}if((p&248)===240){f=(p&7)<<18|(c.getUint8(++_)&63)<<12|(c.getUint8(++_)&63)<<6|(c.getUint8(++_)&63)<<0,f>=65536?(f-=65536,d+=String.fromCharCode((f>>>10)+55296,(f&1023)+56320)):d+=String.fromCharCode(f);continue}throw new Error("Invalid byte "+p.toString(16))}return d}s.prototype._array=function(c){for(var u=new Array(c),h=0;h<c;h++)u[h]=this._parse();return u},s.prototype._map=function(c){for(var u="",h={},d=0;d<c;d++)u=this._parse(),h[u]=this._parse();return h},s.prototype._str=function(c){var u=e(this._view,this._offset,c);return this._offset+=c,u},s.prototype._bin=function(c){var u=this._buffer.slice(this._offset,this._offset+c);return this._offset+=c,u},s.prototype._parse=function(){var c=this._view.getUint8(this._offset++),u,h=0,d=0,f=0,_=0;if(c<192)return c<128?c:c<144?this._map(c&15):c<160?this._array(c&15):this._str(c&31);if(c>223)return(255-c+1)*-1;switch(c){case 192:return null;case 194:return!1;case 195:return!0;case 196:return h=this._view.getUint8(this._offset),this._offset+=1,this._bin(h);case 197:return h=this._view.getUint16(this._offset),this._offset+=2,this._bin(h);case 198:return h=this._view.getUint32(this._offset),this._offset+=4,this._bin(h);case 199:if(h=this._view.getUint8(this._offset),d=this._view.getInt8(this._offset+1),this._offset+=2,d===-1){var v=this._view.getUint32(this._offset);return f=this._view.getInt32(this._offset+4),_=this._view.getUint32(this._offset+8),this._offset+=12,new Date((f*4294967296+_)*1e3+v/1e6)}return[d,this._bin(h)];case 200:return h=this._view.getUint16(this._offset),d=this._view.getInt8(this._offset+2),this._offset+=3,[d,this._bin(h)];case 201:return h=this._view.getUint32(this._offset),d=this._view.getInt8(this._offset+4),this._offset+=5,[d,this._bin(h)];case 202:return u=this._view.getFloat32(this._offset),this._offset+=4,u;case 203:return u=this._view.getFloat64(this._offset),this._offset+=8,u;case 204:return u=this._view.getUint8(this._offset),this._offset+=1,u;case 205:return u=this._view.getUint16(this._offset),this._offset+=2,u;case 206:return u=this._view.getUint32(this._offset),this._offset+=4,u;case 207:return f=this._view.getUint32(this._offset)*Math.pow(2,32),_=this._view.getUint32(this._offset+4),this._offset+=8,f+_;case 208:return u=this._view.getInt8(this._offset),this._offset+=1,u;case 209:return u=this._view.getInt16(this._offset),this._offset+=2,u;case 210:return u=this._view.getInt32(this._offset),this._offset+=4,u;case 211:return f=this._view.getInt32(this._offset)*Math.pow(2,32),_=this._view.getUint32(this._offset+4),this._offset+=8,f+_;case 212:if(d=this._view.getInt8(this._offset),this._offset+=1,d===0){this._offset+=1;return}return[d,this._bin(1)];case 213:return d=this._view.getInt8(this._offset),this._offset+=1,[d,this._bin(2)];case 214:return d=this._view.getInt8(this._offset),this._offset+=1,d===-1?(u=this._view.getUint32(this._offset),this._offset+=4,new Date(u*1e3)):[d,this._bin(4)];case 215:if(d=this._view.getInt8(this._offset),this._offset+=1,d===0)return f=this._view.getInt32(this._offset)*Math.pow(2,32),_=this._view.getUint32(this._offset+4),this._offset+=8,new Date(f+_);if(d===-1){f=this._view.getUint32(this._offset),_=this._view.getUint32(this._offset+4),this._offset+=8;var p=(f&3)*4294967296+_;return new Date(p*1e3+(f>>>2)/1e6)}return[d,this._bin(8)];case 216:return d=this._view.getInt8(this._offset),this._offset+=1,[d,this._bin(16)];case 217:return h=this._view.getUint8(this._offset),this._offset+=1,this._str(h);case 218:return h=this._view.getUint16(this._offset),this._offset+=2,this._str(h);case 219:return h=this._view.getUint32(this._offset),this._offset+=4,this._str(h);case 220:return h=this._view.getUint16(this._offset),this._offset+=2,this._array(h);case 221:return h=this._view.getUint32(this._offset),this._offset+=4,this._array(h);case 222:return h=this._view.getUint16(this._offset),this._offset+=2,this._map(h);case 223:return h=this._view.getUint32(this._offset),this._offset+=4,this._map(h)}throw new Error("Could not parse")};function t(c,u=0){var h=new s(c,u),d=h._parse();if(h._offset!==c.byteLength)throw new Error(c.byteLength-h._offset+" trailing bytes");return d}Ci.decode=t;var n=4294967296-1,i=17179869184-1;function r(c,u,h){for(var d=0,f=0,_=h.length;f<_;f++)d=h.charCodeAt(f),d<128?c.setUint8(u++,d):d<2048?(c.setUint8(u++,192|d>>6),c.setUint8(u++,128|d&63)):d<55296||d>=57344?(c.setUint8(u++,224|d>>12),c.setUint8(u++,128|d>>6&63),c.setUint8(u++,128|d&63)):(f++,d=65536+((d&1023)<<10|h.charCodeAt(f)&1023),c.setUint8(u++,240|d>>18),c.setUint8(u++,128|d>>12&63),c.setUint8(u++,128|d>>6&63),c.setUint8(u++,128|d&63))}function o(c){for(var u=0,h=0,d=0,f=c.length;d<f;d++)u=c.charCodeAt(d),u<128?h+=1:u<2048?h+=2:u<55296||u>=57344?h+=3:(d++,h+=4);return h}function a(c,u,h){var d=typeof h,f=0,_=0,v=0,p=0,m=0,S=0;if(d==="string"){if(m=o(h),m<32)c.push(m|160),S=1;else if(m<256)c.push(217,m),S=2;else if(m<65536)c.push(218,m>>8,m),S=3;else if(m<4294967296)c.push(219,m>>24,m>>16,m>>8,m),S=5;else throw new Error("String too long");return u.push({_str:h,_length:m,_offset:c.length}),S+m}if(d==="number")return Math.floor(h)!==h||!isFinite(h)?(c.push(203),u.push({_float:h,_length:8,_offset:c.length}),9):h>=0?h<128?(c.push(h),1):h<256?(c.push(204,h),2):h<65536?(c.push(205,h>>8,h),3):h<4294967296?(c.push(206,h>>24,h>>16,h>>8,h),5):(v=h/Math.pow(2,32)>>0,p=h>>>0,c.push(207,v>>24,v>>16,v>>8,v,p>>24,p>>16,p>>8,p),9):h>=-32?(c.push(h),1):h>=-128?(c.push(208,h),2):h>=-32768?(c.push(209,h>>8,h),3):h>=-2147483648?(c.push(210,h>>24,h>>16,h>>8,h),5):(v=Math.floor(h/Math.pow(2,32)),p=h>>>0,c.push(211,v>>24,v>>16,v>>8,v,p>>24,p>>16,p>>8,p),9);if(d==="object"){if(h===null)return c.push(192),1;if(Array.isArray(h)){if(m=h.length,m<16)c.push(m|144),S=1;else if(m<65536)c.push(220,m>>8,m),S=3;else if(m<4294967296)c.push(221,m>>24,m>>16,m>>8,m),S=5;else throw new Error("Array too large");for(f=0;f<m;f++)S+=a(c,u,h[f]);return S}if(h instanceof Date){var E=h.getTime(),A=Math.floor(E/1e3),L=(E-A*1e3)*1e6;return A>=0&&L>=0&&A<=i?L===0&&A<=n?(c.push(214,255,A>>24,A>>16,A>>8,A),6):(v=A/4294967296,p=A&4294967295,c.push(215,255,L>>22,L>>14,L>>6,v,p>>24,p>>16,p>>8,p),10):(v=Math.floor(A/4294967296),p=A>>>0,c.push(199,12,255,L>>24,L>>16,L>>8,L,v>>24,v>>16,v>>8,v,p>>24,p>>16,p>>8,p),15)}if(h instanceof ArrayBuffer){if(m=h.byteLength,m<256)c.push(196,m),S=2;else if(m<65536)c.push(197,m>>8,m),S=3;else if(m<4294967296)c.push(198,m>>24,m>>16,m>>8,m),S=5;else throw new Error("Buffer too large");return u.push({_bin:h,_length:m,_offset:c.length}),S+m}if(typeof h.toJSON=="function")return a(c,u,h.toJSON());var P=[],R="",F=Object.keys(h);for(f=0,_=F.length;f<_;f++)R=F[f],h[R]!==void 0&&typeof h[R]!="function"&&P.push(R);if(m=P.length,m<16)c.push(m|128),S=1;else if(m<65536)c.push(222,m>>8,m),S=3;else if(m<4294967296)c.push(223,m>>24,m>>16,m>>8,m),S=5;else throw new Error("Object too large");for(f=0;f<m;f++)R=P[f],S+=a(c,u,R),S+=a(c,u,h[R]);return S}if(d==="boolean")return c.push(h?195:194),1;if(d==="undefined")return c.push(192),1;if(typeof h.toJSON=="function")return a(c,u,h.toJSON());throw new Error("Could not encode")}function l(c){var u=[],h=[],d=a(u,h,c),f=new ArrayBuffer(d),_=new DataView(f),v=0,p=0,m=-1;h.length>0&&(m=h[0]._offset);for(var S,E=0,A=0,L=0,P=u.length;L<P;L++)if(_.setUint8(p+L,u[L]),L+1===m){if(S=h[v],E=S._length,A=p+m,S._bin)for(var R=new Uint8Array(S._bin),F=0;F<E;F++)_.setUint8(A+F,R[F]);else S._str?r(_,A,S._str):S._float!==void 0&&_.setFloat64(A,S._float);v++,p+=E,h[v]&&(m=h[v]._offset)}return f}return Ci.encode=l,Ci}var ir={},Pi={},Xa,Ru;function MM(){return Ru||(Ru=1,Xa=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),Xa}var Cu;function EM(){if(Cu)return Pi;Cu=1;var s=Pi&&Pi.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Pi,"__esModule",{value:!0}),Pi.WebSocketTransport=void 0;const e=s(MM()),t=globalThis.WebSocket||e.default;let n=class{constructor(r){this.events=r}send(r){r instanceof ArrayBuffer?this.ws.send(r):Array.isArray(r)&&this.ws.send(new Uint8Array(r).buffer)}connect(r,o){try{this.ws=new t(r,{headers:o,protocols:this.protocols})}catch{this.ws=new t(r,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(r,o){this.ws.close(r,o)}get isOpen(){return this.ws.readyState===t.OPEN}};return Pi.WebSocketTransport=n,Pi}var Pu;function TM(){if(Pu)return ir;Pu=1,Object.defineProperty(ir,"__esModule",{value:!0}),ir.Connection=void 0;const s=EM();let e=class{constructor(){this.events={},this.transport=new s.WebSocketTransport(this.events)}send(n){this.transport.send(n)}connect(n,i){this.transport.connect(n,i)}close(n,i){this.transport.close(n,i)}get isOpen(){return this.transport.isOpen}};return ir.Connection=e,ir}var $a={},Iu;function Lf(){return Iu||(Iu=1,(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.utf8Length=s.utf8Read=s.ErrorCode=s.Protocol=void 0,(function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(s.Protocol||(s.Protocol={})),(function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(s.ErrorCode||(s.ErrorCode={}));function e(n,i){const r=n[i++];for(var o="",a=0,l=i,c=i+r;l<c;l++){var u=n[l];if((u&128)===0){o+=String.fromCharCode(u);continue}if((u&224)===192){o+=String.fromCharCode((u&31)<<6|n[++l]&63);continue}if((u&240)===224){o+=String.fromCharCode((u&15)<<12|(n[++l]&63)<<6|(n[++l]&63)<<0);continue}if((u&248)===240){a=(u&7)<<18|(n[++l]&63)<<12|(n[++l]&63)<<6|(n[++l]&63)<<0,a>=65536?(a-=65536,o+=String.fromCharCode((a>>>10)+55296,(a&1023)+56320)):o+=String.fromCharCode(a);continue}throw new Error("Invalid byte "+u.toString(16))}return o}s.utf8Read=e;function t(n=""){let i=0,r=0;for(let o=0,a=n.length;o<a;o++)i=n.charCodeAt(o),i<128?r+=1:i<2048?r+=2:i<55296||i>=57344?r+=3:(o++,r+=4);return r+1}s.utf8Length=t})($a)),$a}var Ii={},Lu;function Df(){if(Lu)return Ii;Lu=1,Object.defineProperty(Ii,"__esModule",{value:!0}),Ii.getSerializer=Ii.registerSerializer=void 0;const s={};function e(n,i){s[n]=i}Ii.registerSerializer=e;function t(n){const i=s[n];if(!i)throw new Error("missing serializer: "+n);return i}return Ii.getSerializer=t,Ii}var sr={},Du;function Nf(){if(Du)return sr;Du=1,Object.defineProperty(sr,"__esModule",{value:!0}),sr.createNanoEvents=void 0;const s=()=>({emit(e,...t){let n=this.events[e]||[];for(let i=0,r=n.length;i<r;i++)n[i](...t)},events:{},on(e,t){var n;return!((n=this.events[e])===null||n===void 0)&&n.push(t)||(this.events[e]=[t]),()=>{var i;this.events[e]=(i=this.events[e])===null||i===void 0?void 0:i.filter(r=>t!==r)}}});return sr.createNanoEvents=s,sr}var Li={},Nu;function AM(){if(Nu)return Li;Nu=1,Object.defineProperty(Li,"__esModule",{value:!0}),Li.createSignal=Li.EventEmitter=void 0;class s{constructor(){this.handlers=[]}register(n,i=!1){return this.handlers.push(n),this}invoke(...n){this.handlers.forEach(i=>i.apply(this,n))}invokeAsync(...n){return Promise.all(this.handlers.map(i=>i.apply(this,n)))}remove(n){const i=this.handlers.indexOf(n);this.handlers[i]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}Li.EventEmitter=s;function e(){const t=new s;function n(i){return t.register(i,this===null)}return n.once=i=>{const r=function(...o){i.apply(this,o),t.remove(r)};t.register(r)},n.remove=i=>t.remove(i),n.invoke=(...i)=>t.invoke(...i),n.invokeAsync=(...i)=>t.invokeAsync(...i),n.clear=()=>t.clear(),n}return Li.createSignal=e,Li}var Ou;function Uf(){if(Ou)return Sn;Ou=1;var s=Sn&&Sn.__createBinding||(Object.create?(function(d,f,_,v){v===void 0&&(v=_);var p=Object.getOwnPropertyDescriptor(f,_);(!p||("get"in p?!f.__esModule:p.writable||p.configurable))&&(p={enumerable:!0,get:function(){return f[_]}}),Object.defineProperty(d,v,p)}):(function(d,f,_,v){v===void 0&&(v=_),d[v]=f[_]})),e=Sn&&Sn.__setModuleDefault||(Object.create?(function(d,f){Object.defineProperty(d,"default",{enumerable:!0,value:f})}):function(d,f){d.default=f}),t=Sn&&Sn.__importStar||function(d){if(d&&d.__esModule)return d;var f={};if(d!=null)for(var _ in d)_!=="default"&&Object.prototype.hasOwnProperty.call(d,_)&&s(f,d,_);return e(f,d),f};Object.defineProperty(Sn,"__esModule",{value:!0}),Sn.Room=void 0;const n=t(SM()),i=TM(),r=Lf(),o=Df(),a=Nf(),l=AM(),c=Rl(),u=Dl();let h=class Of{constructor(f,_){this.onStateChange=(0,l.createSignal)(),this.onError=(0,l.createSignal)(),this.onLeave=(0,l.createSignal)(),this.onJoin=(0,l.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,a.createNanoEvents)(),this.roomId=null,this.name=f,_&&(this.serializer=new((0,o.getSerializer)("schema")),this.rootSchema=_,this.serializer.state=new _),this.onError((v,p)=>{var m;return(m=console.warn)===null||m===void 0?void 0:m.call(console,`colyseus.js - onError => (${v}) ${p}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(f,_,v=this,p){const m=new i.Connection;v.connection=m,m.events.onmessage=Of.prototype.onMessageCallback.bind(v),m.events.onclose=function(S){var E;if(!v.hasJoined){(E=console.warn)===null||E===void 0||E.call(console,`Room connection was closed unexpectedly (${S.code}): ${S.reason}`),v.onError.invoke(S.code,S.reason);return}S.code===u.CloseCode.DEVMODE_RESTART&&_?_():(v.onLeave.invoke(S.code,S.reason),v.destroy())},m.events.onerror=function(S){var E;(E=console.warn)===null||E===void 0||E.call(console,`Room, onError (${S.code}): ${S.reason}`),v.onError.invoke(S.code,S.reason)},m.connect(f,p)}leave(f=!0){return new Promise(_=>{this.onLeave(v=>_(v)),this.connection?f?this.connection.send([r.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(u.CloseCode.CONSENTED)})}onMessage(f,_){return this.onMessageHandlers.on(this.getMessageHandlerKey(f),_)}send(f,_){const v=[r.Protocol.ROOM_DATA];typeof f=="string"?c.encode.string(v,f):c.encode.number(v,f);let p;if(_!==void 0){const m=n.encode(_);p=new Uint8Array(v.length+m.byteLength),p.set(new Uint8Array(v),0),p.set(new Uint8Array(m),v.length)}else p=new Uint8Array(v);this.connection.send(p.buffer)}sendBytes(f,_){const v=[r.Protocol.ROOM_DATA_BYTES];typeof f=="string"?c.encode.string(v,f):c.encode.number(v,f);let p;p=new Uint8Array(v.length+(_.byteLength||_.length)),p.set(new Uint8Array(v),0),p.set(new Uint8Array(_),v.length),this.connection.send(p.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(f){const _=Array.from(new Uint8Array(f.data)),v=_[0];if(v===r.Protocol.JOIN_ROOM){let p=1;const m=(0,r.utf8Read)(_,p);if(p+=(0,r.utf8Length)(m),this.serializerId=(0,r.utf8Read)(_,p),p+=(0,r.utf8Length)(this.serializerId),!this.serializer){const S=(0,o.getSerializer)(this.serializerId);this.serializer=new S}_.length>p&&this.serializer.handshake&&this.serializer.handshake(_,{offset:p}),this.reconnectionToken=`${this.roomId}:${m}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([r.Protocol.JOIN_ROOM])}else if(v===r.Protocol.ERROR){const p={offset:1},m=c.decode.number(_,p),S=c.decode.string(_,p);this.onError.invoke(m,S)}else if(v===r.Protocol.LEAVE_ROOM)this.leave();else if(v===r.Protocol.ROOM_DATA_SCHEMA){const p={offset:1},S=this.serializer.getState().constructor._context.get(c.decode.number(_,p)),E=new S;E.decode(_,p),this.dispatchMessage(S,E)}else if(v===r.Protocol.ROOM_STATE)_.shift(),this.setState(_);else if(v===r.Protocol.ROOM_STATE_PATCH)_.shift(),this.patch(_);else if(v===r.Protocol.ROOM_DATA){const p={offset:1},m=c.decode.stringCheck(_,p)?c.decode.string(_,p):c.decode.number(_,p),S=_.length>p.offset?n.decode(f.data,p.offset):void 0;this.dispatchMessage(m,S)}else if(v===r.Protocol.ROOM_DATA_BYTES){const p={offset:1},m=c.decode.stringCheck(_,p)?c.decode.string(_,p):c.decode.number(_,p);this.dispatchMessage(m,new Uint8Array(_.slice(p.offset)))}}setState(f){this.serializer.setState(f),this.onStateChange.invoke(this.serializer.getState())}patch(f){this.serializer.patch(f),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(f,_){var v;const p=this.getMessageHandlerKey(f);this.onMessageHandlers.events[p]?this.onMessageHandlers.emit(p,_):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",f,_):(v=console.warn)===null||v===void 0||v.call(console,`colyseus.js: onMessage() not registered for type '${f}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(f){switch(typeof f){case"function":return`$${f._typeid}`;case"string":return f;case"number":return`i${f}`;default:throw new Error("invalid message type.")}}};return Sn.Room=h,Sn}var Mn={};function Uu(s,e){e.headers=s.headers||{},e.statusMessage=s.statusText,e.statusCode=s.status,e.data=s.response}function Pn(s,e,t){return new Promise(function(n,i){t=t||{};var r=new XMLHttpRequest,o,a,l,c=t.body,u=t.headers||{};t.timeout&&(r.timeout=t.timeout),r.ontimeout=r.onerror=function(h){h.timeout=h.type=="timeout",i(h)},r.open(s,e.href||e),r.onload=function(){for(l=r.getAllResponseHeaders().trim().split(/[\r\n]+/),Uu(r,r);a=l.shift();)a=a.split(": "),r.headers[a.shift().toLowerCase()]=a.join(": ");if(a=r.headers["content-type"],a&&~a.indexOf("application/json"))try{r.data=JSON.parse(r.data,t.reviver)}catch(h){return Uu(r,h),i(h)}(r.status>=400?i:n)(r)},typeof FormData<"u"&&c instanceof FormData||c&&typeof c=="object"&&(u["content-type"]="application/json",c=JSON.stringify(c)),r.withCredentials=!!t.withCredentials;for(o in u)r.setRequestHeader(o,u[o]);r.send(c)})}var bM=Pn.bind(Pn,"GET"),wM=Pn.bind(Pn,"POST"),RM=Pn.bind(Pn,"PATCH"),CM=Pn.bind(Pn,"DELETE"),PM=Pn.bind(Pn,"PUT");const IM=Object.freeze(Object.defineProperty({__proto__:null,del:CM,get:bM,patch:RM,post:wM,put:PM,send:Pn},Symbol.toStringTag,{value:"Module"})),LM=vy(IM);var Fu;function DM(){if(Fu)return Mn;Fu=1;var s=Mn&&Mn.__createBinding||(Object.create?(function(o,a,l,c){c===void 0&&(c=l);var u=Object.getOwnPropertyDescriptor(a,l);(!u||("get"in u?!a.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return a[l]}}),Object.defineProperty(o,c,u)}):(function(o,a,l,c){c===void 0&&(c=l),o[c]=a[l]})),e=Mn&&Mn.__setModuleDefault||(Object.create?(function(o,a){Object.defineProperty(o,"default",{enumerable:!0,value:a})}):function(o,a){o.default=a}),t=Mn&&Mn.__importStar||function(o){if(o&&o.__esModule)return o;var a={};if(o!=null)for(var l in o)l!=="default"&&Object.prototype.hasOwnProperty.call(o,l)&&s(a,o,l);return e(a,o),a};Object.defineProperty(Mn,"__esModule",{value:!0}),Mn.HTTP=void 0;const n=Dl(),i=t(LM);let r=class{constructor(a,l={}){this.client=a,this.headers=l}get(a,l={}){return this.request("get",a,l)}post(a,l={}){return this.request("post",a,l)}del(a,l={}){return this.request("del",a,l)}put(a,l={}){return this.request("put",a,l)}request(a,l,c={}){return i[a](this.client.getHttpEndpoint(l),this.getOptions(c)).catch(u=>{var h;const d=u.statusCode,f=((h=u.data)===null||h===void 0?void 0:h.error)||u.statusMessage||u.message;throw!d&&!f?u:new n.ServerError(d,f)})}getOptions(a){return a.headers=Object.assign({},this.headers,a.headers),this.authToken&&(a.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(a.withCredentials=!0),a}};return Mn.HTTP=r,Mn}var En={},jn={},Bu;function NM(){if(Bu)return jn;Bu=1,Object.defineProperty(jn,"__esModule",{value:!0}),jn.getItem=jn.removeItem=jn.setItem=void 0;let s;function e(){if(!s)try{s=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return s||(s={cache:{},setItem:function(r,o){this.cache[r]=o},getItem:function(r){this.cache[r]},removeItem:function(r){delete this.cache[r]}}),s}function t(r,o){e().setItem(r,o)}jn.setItem=t;function n(r){e().removeItem(r)}jn.removeItem=n;function i(r,o){const a=e().getItem(r);typeof Promise>"u"||!(a instanceof Promise)?o(a):a.then(l=>o(l))}return jn.getItem=i,jn}var zu;function Ff(){if(zu)return En;zu=1;var s=En&&En.__awaiter||function(u,h,d,f){function _(v){return v instanceof d?v:new d(function(p){p(v)})}return new(d||(d=Promise))(function(v,p){function m(A){try{E(f.next(A))}catch(L){p(L)}}function S(A){try{E(f.throw(A))}catch(L){p(L)}}function E(A){A.done?v(A.value):_(A.value).then(m,S)}E((f=f.apply(u,h||[])).next())})},e=En&&En.__classPrivateFieldGet||function(u,h,d,f){if(d==="a"&&!f)throw new TypeError("Private accessor was defined without a getter");if(typeof h=="function"?u!==h||!f:!h.has(u))throw new TypeError("Cannot read private member from an object whose class did not declare it");return d==="m"?f:d==="a"?f.call(u):f?f.value:h.get(u)},t=En&&En.__classPrivateFieldSet||function(u,h,d,f,_){if(f==="m")throw new TypeError("Private method is not writable");if(f==="a"&&!_)throw new TypeError("Private accessor was defined without a setter");if(typeof h=="function"?u!==h||!_:!h.has(u))throw new TypeError("Cannot write private member to an object whose class did not declare it");return f==="a"?_.call(u,d):_?_.value=d:h.set(u,d),d},n,i,r,o;Object.defineProperty(En,"__esModule",{value:!0}),En.Auth=void 0;const a=NM(),l=Nf();let c=class{constructor(h){this.http=h,this.settings={path:"/auth",key:"colyseus-auth-token"},n.set(this,!1),i.set(this,void 0),r.set(this,void 0),o.set(this,(0,l.createNanoEvents)()),(0,a.getItem)(this.settings.key,d=>this.token=d)}set token(h){this.http.authToken=h}get token(){return this.http.authToken}onChange(h){const d=e(this,o,"f").on("change",h);return e(this,n,"f")||t(this,i,new Promise((f,_)=>{this.getUserData().then(v=>{this.emitChange(Object.assign(Object.assign({},v),{token:this.token}))}).catch(v=>{this.emitChange({user:null,token:void 0})}).finally(()=>{f()})}),"f"),t(this,n,!0,"f"),d}getUserData(){return s(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(h,d,f){return s(this,void 0,void 0,function*(){const _=(yield this.http.post(`${this.settings.path}/register`,{body:{email:h,password:d,options:f}})).data;return this.emitChange(_),_})}signInWithEmailAndPassword(h,d){return s(this,void 0,void 0,function*(){const f=(yield this.http.post(`${this.settings.path}/login`,{body:{email:h,password:d}})).data;return this.emitChange(f),f})}signInAnonymously(h){return s(this,void 0,void 0,function*(){const d=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:h}})).data;return this.emitChange(d),d})}sendPasswordResetEmail(h){return s(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:h}})).data})}signInWithProvider(h,d={}){return s(this,void 0,void 0,function*(){return new Promise((f,_)=>{const v=d.width||480,p=d.height||768,m=this.token?`?token=${this.token}`:"",S=`Login with ${h[0].toUpperCase()+h.substring(1)}`,E=this.http.client.getHttpEndpoint(`${d.prefix||`${this.settings.path}/provider`}/${h}${m}`),A=screen.width/2-v/2,L=screen.height/2-p/2;t(this,r,window.open(E,S,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+v+", height="+p+", top="+L+", left="+A),"f");const P=F=>{F.data.user===void 0&&F.data.token===void 0||(clearInterval(R),e(this,r,"f").close(),t(this,r,void 0,"f"),window.removeEventListener("message",P),F.data.error!==void 0?_(F.data.error):(f(F.data),this.emitChange(F.data)))},R=setInterval(()=>{(!e(this,r,"f")||e(this,r,"f").closed)&&(t(this,r,void 0,"f"),_("cancelled"),window.removeEventListener("message",P))},200);window.addEventListener("message",P)})})}signOut(){return s(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(h){h.token!==void 0&&(this.token=h.token,h.token===null?(0,a.removeItem)(this.settings.key):(0,a.setItem)(this.settings.key,h.token)),e(this,o,"f").emit("change",h)}};return En.Auth=c,n=new WeakMap,i=new WeakMap,r=new WeakMap,o=new WeakMap,En}var rr={},ku;function OM(){if(ku)return rr;ku=1,Object.defineProperty(rr,"__esModule",{value:!0}),rr.discordURLBuilder=void 0;function s(e){var t;const n=((t=window?.location)===null||t===void 0?void 0:t.hostname)||"localhost",i=e.hostname.split("."),r=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&i.length>2?`/${i[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${n}${r}${e.pathname}${e.search}`:`${e.protocol}//${n}/.proxy/colyseus${r}${e.pathname}${e.search}`}return rr.discordURLBuilder=s,rr}var Hu;function UM(){if(Hu)return Yn;Hu=1;var s=Yn&&Yn.__awaiter||function(u,h,d,f){function _(v){return v instanceof d?v:new d(function(p){p(v)})}return new(d||(d=Promise))(function(v,p){function m(A){try{E(f.next(A))}catch(L){p(L)}}function S(A){try{E(f.throw(A))}catch(L){p(L)}}function E(A){A.done?v(A.value):_(A.value).then(m,S)}E((f=f.apply(u,h||[])).next())})},e;Object.defineProperty(Yn,"__esModule",{value:!0}),Yn.Client=Yn.MatchMakeError=void 0;const t=Dl(),n=Uf(),i=DM(),r=Ff(),o=OM();class a extends Error{constructor(h,d){super(h),this.code=d,Object.setPrototypeOf(this,a.prototype)}}Yn.MatchMakeError=a;const l=typeof window<"u"&&typeof((e=window?.location)===null||e===void 0?void 0:e.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let c=class{constructor(h=l,d){var f,_;if(typeof h=="string"){const v=h.startsWith("/")?new URL(h,l):new URL(h),p=v.protocol==="https:"||v.protocol==="wss:",m=Number(v.port||(p?443:80));this.settings={hostname:v.hostname,pathname:v.pathname,port:m,secure:p}}else h.port===void 0&&(h.port=h.secure?443:80),h.pathname===void 0&&(h.pathname=""),this.settings=h;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new i.HTTP(this,d?.headers||{}),this.auth=new r.Auth(this.http),this.urlBuilder=d?.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((_=(f=window?.location)===null||f===void 0?void 0:f.hostname)===null||_===void 0)&&_.includes("discordsays.com"))&&(this.urlBuilder=o.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(h,d={},f){return s(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",h,d,f)})}create(h,d={},f){return s(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",h,d,f)})}join(h,d={},f){return s(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",h,d,f)})}joinById(h,d={},f){return s(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",h,d,f)})}reconnect(h,d){return s(this,void 0,void 0,function*(){if(typeof h=="string"&&typeof d=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[f,_]=h.split(":");if(!f||!_)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",f,{reconnectionToken:_},d)})}getAvailableRooms(h=""){return s(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${h}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(h,d,f){return s(this,void 0,void 0,function*(){const _=this.createRoom(h.room.name,d);_.roomId=h.room.roomId,_.sessionId=h.sessionId;const v={sessionId:_.sessionId};h.reconnectionToken&&(v.reconnectionToken=h.reconnectionToken);const p=f||_;return _.connect(this.buildEndpoint(h.room,v),h.devMode&&(()=>s(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${_.roomId}'...`);let m=0,S=8;const E=()=>s(this,void 0,void 0,function*(){m++;try{yield this.consumeSeatReservation(h,d,p),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${_.roomId}'`)}catch{m<S?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${m} out of ${S})`),setTimeout(E,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(E,2e3)})),p,this.http.headers),new Promise((m,S)=>{const E=(A,L)=>S(new t.ServerError(A,L));p.onError.once(E),p.onJoin.once(()=>{p.onError.remove(E),m(p)})})})}createMatchMakeRequest(h,d,f={},_,v){return s(this,void 0,void 0,function*(){const p=(yield this.http.post(`matchmake/${h}/${d}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(f)})).data;if(p.error)throw new a(p.error,p.code);return h==="reconnect"&&(p.reconnectionToken=f.reconnectionToken),yield this.consumeSeatReservation(p,_,v)})}createRoom(h,d){return new n.Room(h,d)}buildEndpoint(h,d={}){const f=[];for(const p in d)d.hasOwnProperty(p)&&f.push(`${p}=${d[p]}`);let _=this.settings.secure?"wss://":"ws://";h.publicAddress?_+=`${h.publicAddress}`:_+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const v=`${_}/${h.processId}/${h.roomId}?${f.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(v)):v}getHttpEndpoint(h=""){const d=h.startsWith("/")?h:`/${h}`,f=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${d}`;return this.urlBuilder?this.urlBuilder(new URL(f)):f}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return Yn.Client=c,Yn}var or={},Vu;function FM(){if(Vu)return or;Vu=1,Object.defineProperty(or,"__esModule",{value:!0}),or.SchemaSerializer=void 0;const s=Rl();let e=class{setState(n){return this.state.decode(n)}getState(){return this.state}patch(n){return this.state.decode(n)}teardown(){var n,i;(i=(n=this.state)===null||n===void 0?void 0:n.$changes)===null||i===void 0||i.root.clearRefs()}handshake(n,i){this.state?new s.Reflection().decode(n,i):this.state=s.Reflection.decode(n,i)}};return or.SchemaSerializer=e,or}var ar={},Gu;function BM(){if(Gu)return ar;Gu=1,Object.defineProperty(ar,"__esModule",{value:!0}),ar.NoneSerializer=void 0;let s=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return ar.NoneSerializer=s,ar}var Wu;function zM(){return Wu||(Wu=1,(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.SchemaSerializer=s.registerSerializer=s.Auth=s.Room=s.ErrorCode=s.Protocol=s.MatchMakeError=s.Client=void 0,yM();var e=UM();Object.defineProperty(s,"Client",{enumerable:!0,get:function(){return e.Client}}),Object.defineProperty(s,"MatchMakeError",{enumerable:!0,get:function(){return e.MatchMakeError}});var t=Lf();Object.defineProperty(s,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),Object.defineProperty(s,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}});var n=Uf();Object.defineProperty(s,"Room",{enumerable:!0,get:function(){return n.Room}});var i=Ff();Object.defineProperty(s,"Auth",{enumerable:!0,get:function(){return i.Auth}});const r=FM();Object.defineProperty(s,"SchemaSerializer",{enumerable:!0,get:function(){return r.SchemaSerializer}});const o=BM(),a=Df();Object.defineProperty(s,"registerSerializer",{enumerable:!0,get:function(){return a.registerSerializer}}),(0,a.registerSerializer)("schema",r.SchemaSerializer),(0,a.registerSerializer)("none",o.NoneSerializer)})(Ga)),Ga}var kM=zM();const HM=1500;class VM{client=null;room=null;lastPingMs=null;pingIntervalId=null;connect(e){this.client=new kM.Client(e)}async joinOrCreate(e){if(!this.client)return!1;try{return this.room=await this.client.joinOrCreate(e,{},lf),this.setupPing(),!0}catch(t){return console.error("Colyseus joinOrCreate failed:",t),!1}}setupPing(){const e=this.room;if(!e)return;this.stopPing(),this.lastPingMs=null,e.onMessage("pong",n=>{this.lastPingMs=Math.round(performance.now()-n.t)}),e.onLeave(()=>this.stopPing());const t=()=>{e.connection?.isOpen&&e.send("ping",{t:performance.now()})};t(),this.pingIntervalId=setInterval(t,HM)}stopPing(){this.pingIntervalId&&(clearInterval(this.pingIntervalId),this.pingIntervalId=null)}getPing(){return this.lastPingMs}sendInput(e){this.room?.send("input",e)}getRoom(){return this.room}disconnect(){this.stopPing(),this.room?.leave(),this.room=null}}function GM(s,e,t,n,i,r,o){const a={tick:e,moveX:s.moveX,moveZ:s.moveZ,sprint:s.sprint,jump:s.jump,slide:s.slide,slideIntentTicks:s.slideIntentTicks>0?s.slideIntentTicks:void 0,crouch:s.crouch,yaw:s.yaw,pitch:s.pitch,shoot:s.shoot,reload:s.reload,dash:s.dash};if(t&&(a.clientX=t.x,a.clientY=t.y,a.clientZ=t.z),i&&(a.aimDirX=i.x,a.aimDirY=i.y,a.aimDirZ=i.z),s.shoot&&i){a.shootAimX=i.x,a.shootAimY=i.y,a.shootAimZ=i.z;const l=o??t;l&&(a.shootClientX=l.x,a.shootClientY=l.y,a.shootClientZ=l.z)}if(r&&(a.debugMode=!0),n&&t){const l=_=>({x:_.x-t.x,y:_.y-t.y,z:_.z-t.z}),c=l(n.head),u=l(n.bodyCenter),h=l(n.spineTop),d=l(n.pelvis),f=l(n.feet);a.headX=c.x,a.headY=c.y,a.headZ=c.z,a.bodyCenterX=u.x,a.bodyCenterY=u.y,a.bodyCenterZ=u.z,a.spineTopX=h.x,a.spineTopY=h.y,a.spineTopZ=h.z,a.pelvisX=d.x,a.pelvisY=d.y,a.pelvisZ=d.z,a.feetX=f.x,a.feetY=f.y,a.feetZ=f.z}return a}function di(s,e){for(const t of e){const n=s.getBoneByName(t);if(n)return n}}function Bf(s){let e=null;return s.traverse(t=>{const n=t;n.isSkinnedMesh&&n.skeleton&&!e&&(e=n.skeleton)}),e}function WM(s){const e=Bf(s);return e?e.getBoneByName(df)??e.getBoneByName(ff)??e.getBoneByName(pf)??null:null}function XM(s){let e=s;for(;e.parent;)e=e.parent;e.updateMatrixWorld(!0)}function Xu(s){if(!s)return null;const e=Bf(s);if(!e)return null;const t=di(e,[Iy,Ly,Dy]),n=di(e,[Ny,Oy,Uy]),i=di(e,[zy,Vy,Xy]),r=di(e,[By,Hy,Wy]),o=di(e,[Fy,ky,Gy]),a=di(e,[$y,Yy,jy]);if(!t||!a)return null;const l=i??r??o;if(!l)return null;XM(s);const c=new D;if(c.setFromMatrixPosition(t.matrixWorld),n){const S=new D().setFromMatrixPosition(n.matrixWorld);c.add(S).multiplyScalar(.5)}const u=new D;t.getWorldDirection(u),c.addScaledVector(u,Ty);const h=new D;h.setFromMatrixPosition(a.matrixWorld);const d=new D;if(i&&r){const S=new D().setFromMatrixPosition(i.matrixWorld),E=new D().setFromMatrixPosition(r.matrixWorld);d.addVectors(S,E).multiplyScalar(.5)}else d.setFromMatrixPosition(l.matrixWorld);const f=new D,_=o??r??i;f.setFromMatrixPosition(_.matrixWorld);const v=di(e,[qy,Ky,Zy]),p=di(e,[Jy,Qy,eS]),m=new D;if(v&&p){const S=new D().setFromMatrixPosition(v.matrixWorld),E=new D().setFromMatrixPosition(p.matrixWorld);m.addVectors(S,E).multiplyScalar(.5)}else v?m.setFromMatrixPosition(v.matrixWorld):p?m.setFromMatrixPosition(p.matrixWorld):m.copy(h).lerp(new D(h.x,h.y-.9,h.z),1);return{head:c,bodyCenter:d,spineTop:f,pelvis:h,feet:m}}function $u(s,e){if(e===Ip)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===zc||e===Ad){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===zc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class $M extends ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ZM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new aE(t)}),this.register(function(t){return new cE(t)}),this.register(function(t){return new lE(t)}),this.register(function(t){return new eE(t)}),this.register(function(t){return new tE(t)}),this.register(function(t){return new nE(t)}),this.register(function(t){return new iE(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new sE(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new oE(t)}),this.register(function(t){return new rE(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new hE(t)}),this.register(function(t){return new uE(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=vr.extractUrlBase(e);o=vr.resolveURL(c,this.path)}else o=vr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new rf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zf){try{o[ot.KHR_BINARY_GLTF]=new dE(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new AE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:o[h]=new qM;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[h]=new fE(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[h]=new pE;break;case ot.KHR_MESH_QUANTIZATION:o[h]=new mE;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function YM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class jM{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new We(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],zt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new af(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ty(u),c.distance=h;break;case"spot":c=new Qx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Kn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class qM{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return wn}extendParams(e,t,n){const i=[];e.color=new We(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,jt))}return Promise.all(i)}}class KM{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ZM{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(a,a)}return Promise.all(r)}}class JM{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class QM{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class eE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,jt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class tE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class nE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(a[0],a[1],a[2],zt),Promise.all(r)}}class iE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class sE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(a[0],a[1],a[2],zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,jt)),Promise.all(r)}}class rE{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class oE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class aE{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class cE{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lE{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hE{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class uE{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==pn.TRIANGLES&&c.mode!==pn.TRIANGLE_STRIP&&c.mode!==pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const _ of h){const v=new je,p=new D,m=new nn,S=new D(1,1,1),E=new Ex(_.geometry,_.material,d);for(let A=0;A<d;A++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,A),l.SCALE&&S.fromBufferAttribute(l.SCALE,A),E.setMatrixAt(A,v.compose(p,m,S));for(const A in l)if(A==="_COLOR_0"){const L=l[A];E.instanceColor=new Vc(L.array,L.itemSize,L.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&_.geometry.setAttribute(A,l[A]);St.prototype.copy.call(E,_),this.parser.assignFinalMaterial(E),f.push(E)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const zf="glTF",cr=12,Yu={JSON:1313821514,BIN:5130562};class dE{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,cr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-cr,r=new DataView(e,cr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Yu.JSON){const c=new Uint8Array(e,cr+o,a);this.content=n.decode(c)}else if(l===Yu.BIN){const c=cr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Jc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Jc[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Ms[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const _ in f.attributes){const v=f.attributes[_],p=l[_];p!==void 0&&(v.normalized=p)}h(f)},a,c,zt,d)})})}}class pE{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class mE{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class kf extends Pr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,_=e*c,v=_-c,p=-2*f+3*d,m=f-d,S=1-p,E=m-d+h;for(let A=0;A!==a;A++){const L=o[v+A+a],P=o[v+A+l]*u,R=o[_+A+a],F=o[_+A]*u;r[A]=S*L+E*P+p*R+m*F}return r}}const gE=new nn;class _E extends kf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return gE.fromArray(r).normalize().toArray(r),r}}const pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ju={9728:Kt,9729:ln,9984:pd,9985:vo,9986:hr,9987:Zn},qu={33071:gi,33648:No,10497:ws},Ya={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vE={CUBICSPLINE:void 0,LINEAR:Er,STEP:Mr},ja={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ds({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ei})),s.DefaultMaterial}function Di(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Kn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yE(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function SE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ME(s){let e;const t=s.extensions&&s.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qa(t.attributes):e=s.indices+":"+qa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+qa(s.targets[n]);return e}function qa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Qc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function EE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const TE=new je;class AE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new YM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new of(this.options.manager):this.textureLoader=new sy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Di(r,a,i),Kn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(vr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ya[i.type],a=Ms[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Qt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ya[i.type],c=Ms[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let v,p;if(f&&f!==h){const m=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let E=t.cache.get(S);E||(v=new c(a,m*f,i.count*f/u),E=new Wd(v,f/u),t.cache.add(S,E)),p=new Ar(E,l,d%f/u,_)}else a===null?v=new c(i.count*l):v=new c(a,d,i.count*l),p=new Qt(v,l,_);if(i.sparse!==void 0){const m=Ya.SCALAR,S=Ms[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,A=i.sparse.values.byteOffset||0,L=new S(o[1],E,i.sparse.count*m),P=new c(o[2],A,i.sparse.count*l);a!==null&&(p=new Qt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let R=0,F=L.length;R<F;R++){const j=L[R];if(p.setX(j,P[R*l]),l>=2&&p.setY(j,P[R*l+1]),l>=3&&p.setZ(j,P[R*l+2]),l>=4&&p.setW(j,P[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=_}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=ju[d.magFilter]||ln,u.minFilter=ju[d.minFilter]||Zn,u.wrapS=qu[d.wrapS]||ws,u.wrapT=qu[d.wrapT]||ws,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(v){const p=new Lt(v);p.needsUpdate=!0,d(p)}),t.load(vr.resolveURL(h,r.path),_,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Kn(h,o),h.userData.mimeType=o.mimeType||EE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new qd,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new br,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ds}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){const h=i[ot.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new We(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],zt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,jt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=mn);const u=r.alphaMode||ja.OPAQUE;if(u===ja.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ja.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==wn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==wn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==wn){const h=r.emissiveFactor;a.emissive=new We().setRGB(h[0],h[1],h[2],zt)}return r.emissiveTexture!==void 0&&o!==wn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,jt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Kn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Di(i,h,r),h})}createUniqueName(e){const t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ku(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=ME(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Ku(new Wt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?xE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,_=u.length;f<_;f++){const v=u[f],p=o[f];let m;const S=c[f];if(p.mode===pn.TRIANGLES||p.mode===pn.TRIANGLE_STRIP||p.mode===pn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new yx(v,S):new Mt(v,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===pn.TRIANGLE_STRIP?m.geometry=$u(m.geometry,Ad):p.mode===pn.TRIANGLE_FAN&&(m.geometry=$u(m.geometry,zc));else if(p.mode===pn.LINES)m=new Ls(v,S);else if(p.mode===pn.LINE_STRIP)m=new xl(v,S);else if(p.mode===pn.LINE_LOOP)m=new Tx(v,S);else if(p.mode===pn.POINTS)m=new Ax(v,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&SE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Kn(m,r),p.extensions&&Di(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,_=h.length;f<_;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Di(i,h[0],r),h[0];const d=new Zt;r.extensions&&Di(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,_=h.length;f<_;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(ko.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ml(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new vl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],_=i.samplers[f.sampler],v=f.target,p=v.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,S=i.parameters!==void 0?i.parameters[_.output]:_.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(_),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],_=h[2],v=h[3],p=h[4],m=[];for(let S=0,E=d.length;S<E;S++){const A=d[S],L=f[S],P=_[S],R=v[S],F=p[S];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const j=n._createAnimationTracks(A,L,P,R,F);if(j)for(let M=0;M<j.length;M++)m.push(j[M])}return new Wc(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,TE)});for(let f=0,_=h.length;f<_;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Yd:c.length>1?u=new Zt:c.length===1?u=c[0]:u=new St,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Kn(u,r),r.extensions&&Di(n,u,r),r.matrix!==void 0){const h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Zt;n.name&&(r.name=i.createUniqueName(n.name)),Kn(r,n),n.extensions&&Di(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof Cn||d instanceof Lt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];fi[r.path]===fi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(fi[r.path]){case fi.weights:c=Ns;break;case fi.rotation:c=Os;break;case fi.position:case fi.scale:c=Us;break;default:switch(n.itemSize){case 1:c=Ns;break;case 2:case 3:default:c=Us;break}break}const u=i.interpolation!==void 0?vE[i.interpolation]:Er,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const _=new c(l[d]+"."+fi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Qc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Os?_E:kf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function bE(s,e,t){const n=e.attributes,i=new ii;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const u=Qc(Ms[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const v=Qc(Ms[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Un;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ku(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Jc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ft.workingColorSpace!==zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),Kn(s,e),bE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?yE(s,e.targets,t):s})}const Nl=new $M,Hf=new of;function wr(){const s=new $i(.5,1.8,.5),e=new Ds({color:8947967});return new Mt(s,e)}async function wE(s){if(!s.trim())return{scene:wr(),animations:[]};try{const e=await Nl.loadAsync(s);return{scene:e.scene,animations:e.animations??[]}}catch{return{scene:wr(),animations:[]}}}async function RE(s){if(!s.trim())return{scene:wr(),animations:[]};try{const e=await Nl.loadAsync(s),t=e.animations??[];return{scene:e.scene,animations:t}}catch{return{scene:wr(),animations:[]}}}async function Zu(s){if(!s.trim())return null;try{return(await Nl.loadAsync(s)).scene}catch{return null}}const CE="/models/skins",Ju=new Map;function PE(s){return()=>{let e=s+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Qu=10,Ka=.65,ed=.55;function td(s){const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d"),i=512/2,r=i*Ka,o=PE(s*12345+1);n.clearRect(0,0,512,512);const a=s%5===3,l=a?3:3+s%4,c=s*.37*Math.PI,u=a?1.4:.9,h=a?.35:.2,d=a?.4:.35,f=a?.75:1;for(let S=0;S<l;S++){const E=a?(S*2.1+o()*.5)/l:S/l,A=c+E*Math.PI*2+(o()-.5)*u,L=(h+o()*d)*Ka,P=(.1+o()*.18)*Ka;n.save(),n.translate(i,i),n.rotate(A);const R=n.createLinearGradient(0,0,L*512,0);R.addColorStop(0,"rgba(255,130,45,0.78)"),R.addColorStop(.1,"rgba(255,105,35,0.74)"),R.addColorStop(.28,"rgba(240,80,25,0.5)"),R.addColorStop(.48,"rgba(210,60,15,0.24)"),R.addColorStop(.68,"rgba(175,50,10,0.08)"),R.addColorStop(.88,"rgba(140,35,6,0.02)"),R.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=R,n.beginPath(),n.ellipse(0,0,L*512,P*512,0,0,Math.PI*2),n.fill(),n.restore()}const _=r*f,v=n.createRadialGradient(i,i,0,i,i,_);v.addColorStop(0,"rgba(255,135,45,0.94)"),v.addColorStop(.18,"rgba(255,110,35,0.84)"),v.addColorStop(.42,"rgba(245,85,25,0.55)"),v.addColorStop(.65,"rgba(210,60,18,0.22)"),v.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=v,n.beginPath(),n.arc(i,i,_,0,Math.PI*2),n.fill();const p=n.getImageData(0,0,512,512);for(let S=0;S<512;S++)for(let E=0;E<512;E++){const A=(S*512+E)*4,L=(E-i)/i,P=(S-i)/i,R=Math.sqrt(L*L+P*P),F=R<ed?1:Math.max(0,1-(R-ed)/.2),j=p.data[A+3];if(j>2){const M=1+(1-j/255)*1.5,C=(o()-.5)*50*M;p.data[A]=Math.max(0,Math.min(255,p.data[A]+C)),p.data[A+1]=Math.max(0,Math.min(255,p.data[A+1]+C*.5)),p.data[A+2]=Math.max(0,Math.min(255,p.data[A+2]+C*.12)),p.data[A+3]=Math.round(p.data[A+3]*F)}}n.putImageData(p,0,0);const m=new Kd(t);return m.needsUpdate=!0,m}async function IE(s){if(s.length===0)return Array.from({length:Qu},(t,n)=>td(n));const e=[];for(const t of s)try{const n=await Hf.loadAsync(t);n.flipY=!1,e.push(n)}catch{}return e.length===0?Array.from({length:Qu},(t,n)=>td(n)):e}async function Ol(s){if(!s)return null;const e=Ju.get(s);if(e)return e;try{const t=await Hf.loadAsync(`${CE}/${s}.png`);return t.flipY=!1,Ju.set(s,t),t}catch{return null}}async function LE(s,e){const t=await Ol(e);return t?(Ul(s,t),!0):!1}function Ul(s,e){s.traverse(t=>{const n=t;if(!n.isMesh)return;const i=Array.isArray(n.material)?n.material:[n.material],r=[];for(const o of i){const a=o;if(!a)continue;const l=a.clone();l.map=e,r.push(l)}r.length===1?n.material=r[0]:r.length>1&&(n.material=r)})}class Vf{sprite;remainingMs=0;textures=[];config;constructor(e){this.config=e;const t=new _l({map:null,transparent:!0,depthWrite:!1,blending:yr,color:16768136});this.sprite=new $d(t),this.sprite.scale.set(e.scale,e.scale,1),this.sprite.visible=!1}setTextures(e){this.textures=e}trigger(e){if(this.textures.length===0)return;const t=this.textures[Math.floor(Math.random()*this.textures.length)];this.sprite.material.map=t,this.sprite.material.needsUpdate=!0,this.sprite.visible=!0,this.remainingMs=this.config.durationMs,this.sprite.parent!==e&&(this.sprite.parent&&this.sprite.parent.remove(this.sprite),e.add(this.sprite)),this.sprite.position.set(0,0,0)}update(e){return this.remainingMs<=0?(this.sprite.visible&&(this.sprite.visible=!1),!1):(this.remainingMs-=e,this.remainingMs<=0?(this.sprite.visible=!1,!1):!0)}getSprite(){return this.sprite}dispose(){this.sprite.material.dispose()}}const DE=.15,NE=2.5,OE=.5,UE=.9;function pi(s){return s.toLowerCase().replace(/\s+/g,"")}class Fl{clipsById=new Map;clipNames;currentActions=new Map;crossfadeDuration;constructor(e={},t=DE){this.clipNames={...yy,...e},this.crossfadeDuration=t}findIdleClip(e){if(!e.length)return;const t=e.find(i=>pi(i.name)==="idleaiming");if(t)return t;const n=e.find(i=>pi(i.name)==="idle");return n||e[0]}init(e){this.clipsById.clear();const t=new Map;for(const r of e){t.set(pi(r.name),r);const o=r.name.split("|").pop();o&&o!==r.name&&t.set(pi(o),r)}for(const[r,o]of Object.entries(this.clipNames)){const a=pi(o);let l=e.find(c=>c.name===o)??t.get(a)??e.find(c=>{const u=pi(c.name),h=c.name.split("|").pop()??"";return u===a||pi(h)===a});l&&this.clipsById.set(r,l)}const n=this.findIdleClip(e);!this.clipsById.has("idle")&&n&&this.clipsById.set("idle",n);const i=e.find(r=>pi(r.name)==="slide");!this.clipsById.has("slide")&&i&&this.clipsById.set("slide",i)}findClip(e){return this.clipsById.get(e)??Array.from(this.clipsById.values()).find(t=>t.name===e)}updateJumpSync(e,t,n){const i=t.duration*OE,r=t.duration*UE;Math.abs(n)<NE?(e.timeScale=0,e.time<i&&(e.time=i)):(e.timeScale=1,n<0&&e.time<i&&(e.time=i),e.time>r&&(e.time=r,e.timeScale=0))}static STRAFE_SLOW_SCALE=.7;playStaticIdlePose(e){const t=this.findClip("idle");if(!t)return;const n=this.currentActions.get(e),i=e.clipAction(t);n!==i&&(n&&n.fadeOut(.06),i.setLoop(Bc,1/0),i.reset().fadeIn(0).play(),this.currentActions.set(e,i)),i.time=0,i.timeScale=0}playClip(e,t,n){let i=this.findClip(t),r=t;if(!i&&(i=this.findClip("idle"),r="idle",!i))return;const o=this.currentActions.get(e),a=e.clipAction(i);if(o!==a){a.setLoop(r==="jump"?Td:Bc,r==="jump"?1:1/0);const u=this.findClip("jump"),d=o&&u&&o.getClip()===u?.06:this.crossfadeDuration;o&&o.fadeOut(d),a.reset().fadeIn(d).play(),this.currentActions.set(e,a)}r==="jump"&&n?.vy!==void 0&&this.updateJumpSync(a,i,n.vy);const c=r==="strafeLeftFast"||r==="strafeRightFast";n?.timeScale!==void 0?(a.timeScale=n.timeScale,n.timeScale===0&&(a.time=0)):c?n?.sprint===!1?a.timeScale=Fl.STRAFE_SLOW_SCALE:a.timeScale=1:r==="idle"&&(a.timeScale=1)}updateMixers(e,t){for(const n of e)n.update(t)}}class FE{sceneManager;movement;playerAnimationSystem;playerTemplate=null;weaponTemplate3P=null;remotePlayerMeshes=new Map;remotePlayerMixers=new Map;remotePlayerWeaponContainers=new Map;lastShotTickSeen=new Map;remotePlayerMuzzleFlashes=new Map;muzzleFlashTextures=[];hasAppliedInitialSpawn=!1;lastHealthByPlayer=new Map;_handPos3p=new D;_handQuat3p=new nn;_offsetVec3p=new D;tracerSystem;impactSystem;constructor(e){this.sceneManager=e.sceneManager,this.movement=e.movement,this.playerAnimationSystem=e.playerAnimationSystem,this.tracerSystem=e.tracerSystem,this.impactSystem=e.impactSystem}onShot(e){if(!this.tracerSystem)return;const t=this.remotePlayerWeaponContainers.get(e.shooterId);if(!t)return;const n=new D;t.muzzleNode.getWorldPosition(n);const i=new D(e.dx,e.dy,e.dz).normalize(),r=new D(e.ox,e.oy,e.oz);let o=Ue.tracerFirstPersonLength??20,a=null;if(e.hitX!==void 0&&e.hitY!==void 0&&e.hitZ!==void 0){a=new D(e.hitX,e.hitY,e.hitZ),o=n.distanceTo(a);const l=a.clone().sub(n).normalize();this.tracerSystem.spawnTracer(n,l,o)}else{const l=i;o=Ue.tracerFirstPersonLength??20,this.tracerSystem.spawnTracer(n,l,o),a=r.clone().addScaledVector(i,o)}this.impactSystem&&a&&this.impactSystem.spawnImpact(a)}setPlayerAnimationSystem(e){this.playerAnimationSystem=e}setPlayerTemplate(e){this.playerTemplate=e}setWeaponTemplate3P(e){this.weaponTemplate3P=e}setMuzzleFlashTextures(e){this.muzzleFlashTextures=e}getRemotePlayerMeshes(){return this.remotePlayerMeshes}getThirdPersonWeaponCfg(e){const t=Ue.thirdPersonWeaponOffsets[e];return t||{x:Ue.thirdPersonWeaponOffset.x,y:Ue.thirdPersonWeaponOffset.y,z:Ue.thirdPersonWeaponOffset.z,rotX:Ue.thirdPersonWeaponRotationX,rotY:Ue.thirdPersonWeaponRotationY,rotZ:Ue.thirdPersonWeaponRotationZ,scale:Ue.thirdPersonWeaponScale}}addRemotePlayerMesh(e,t,n){if(e===t||this.remotePlayerMeshes.has(e))return;const i=this.sceneManager.getScene();let r;this.playerTemplate?(r=wl(this.playerTemplate),r.updateMatrixWorld(!0),Ol("orange").then(a=>{a&&Ul(r,a)})):(r=wr(),r.material.color.setHex(16737792)),r.position.set(n.x,n.y,n.z),r.rotation.set(0,n.yaw+Math.PI,0),i.add(r),this.remotePlayerMeshes.set(e,r);const o=new Xc(r);if(this.playerAnimationSystem.playClip(o,n.animationState||"idle"),this.remotePlayerMixers.set(e,o),this.weaponTemplate3P){const a=WM(r),l=this.weaponTemplate3P.clone(!0),c=l.getObjectByName("muzzle")??l.getObjectByName("Muzzle")??l,u=new Zt;if(u.add(l),i.add(u),l.traverse(h=>{h.frustumCulled=!1;const d=h;if(d.isMesh){const f=Array.isArray(d.material)?d.material:[d.material];for(const _ of f)_&&"side"in _&&(_.side=mn)}}),this.remotePlayerWeaponContainers.set(e,{container:u,weaponScene:l,rightHandBone:a,muzzleNode:c}),this.lastShotTickSeen.set(e,0),this.muzzleFlashTextures.length>0){const h=new Vf({durationMs:Ue.muzzleFlashDurationMs,scale:Ue.muzzleFlashScale3P});h.setTextures(this.muzzleFlashTextures),this.remotePlayerMuzzleFlashes.set(e,h)}}}removeRemotePlayerMesh(e){const t=this.sceneManager.getScene(),n=this.remotePlayerMeshes.get(e),i=this.remotePlayerMixers.get(e);n&&(t.remove(n),this.remotePlayerMeshes.delete(e)),i&&(i.stopAllAction(),this.remotePlayerMixers.delete(e));const r=this.remotePlayerWeaponContainers.get(e);r&&(t.remove(r.container),this.remotePlayerWeaponContainers.delete(e)),this.lastShotTickSeen.delete(e);const o=this.remotePlayerMuzzleFlashes.get(e);o&&(o.dispose(),this.remotePlayerMuzzleFlashes.delete(e))}setup(e){const t=e.sessionId,n=(r,o)=>{this.addRemotePlayerMesh(o,t,r)},i=(r,o)=>{this.removeRemotePlayerMesh(o)};e.state.players.onAdd(n,!0),e.state.players.onRemove(i)}syncLocalSpawnFromServer(e){const t=e.state.players.get(e.sessionId);if(!t)return;const n=this.movement;n.position.x=t.x,n.position.y=t.y,n.position.z=t.z,n.velocity.x=t.vx,n.velocity.y=t.vy,n.velocity.z=t.vz,n.yaw=t.yaw,n.pitch=t.pitch,this.hasAppliedInitialSpawn=!0}waitForLocalSpawnAndSync(e){return e.state.players.get(e.sessionId)?(this.syncLocalSpawnFromServer(e),Promise.resolve()):new Promise(n=>{const i=(o,a)=>{a===e.sessionId&&(r(),this.syncLocalSpawnFromServer(e),n())},r=e.state.players.onAdd(i,!0)})}reconcile(e){if(!e)return;const t=e.state.players.get(e.sessionId);if(!t)return;const n=this.movement;if(!this.hasAppliedInitialSpawn){this.syncLocalSpawnFromServer(e);return}const i=t.x-n.position.x,r=t.y-n.position.y,o=t.z-n.position.z,a=Math.sqrt(i*i+r*r+o*o),{reconcileMin:l,reconcileYMin:c,reconcileThreshold:u,reconcileLerp:h,reconcileLerpGentle:d}=Ue.tuning;if(a<=l)return;const f=a>=u?h:d,v=n.getSnapshot().state==="airborne",p=t.y<=.02,m=Math.abs(r)<c,S=v&&p||m;n.position.x+=i*f,n.position.z+=o*f,S||(n.position.y+=r*f,n.velocity.y+=(t.vy-n.velocity.y)*f),n.velocity.x+=(t.vx-n.velocity.x)*f,n.velocity.z+=(t.vz-n.velocity.z)*f,n.yaw+=((t.yaw-n.yaw+Math.PI)%(2*Math.PI)-Math.PI)*f,n.pitch+=(t.pitch-n.pitch)*f}update(e,t){if(!e)return;const n=e.sessionId,i=1-Math.exp(-t/Ue.tuning.remoteInterpTau);e.state.players.forEach((l,c)=>{if(c===n)return;let u=this.remotePlayerMeshes.get(c);if(u||(this.addRemotePlayerMesh(c,n,l),u=this.remotePlayerMeshes.get(c)),u){const h=this.lastHealthByPlayer.get(c),d=h!==void 0&&h<=0&&l.health>0;u.visible=l.health>0;const f=this.remotePlayerWeaponContainers.get(c);if(f&&(f.container.visible=u.visible),u.visible){if(d){u.position.set(l.x,l.y,l.z);const v=l.yaw+Math.PI;u.rotation.set(0,v,0)}else{u.position.x+=(l.x-u.position.x)*i,u.position.y+=(l.y-u.position.y)*i,u.position.z+=(l.z-u.position.z)*i;const p=(l.yaw+Math.PI-u.rotation.y+Math.PI)%(2*Math.PI)-Math.PI;u.rotation.y+=p*i}const _=this.remotePlayerMixers.get(c);if(_){const v=l.animationState||"idle",p={};v==="jump"&&(p.vy=l.vy),l.animationTimeScale!==1&&(p.timeScale=l.animationTimeScale),this.playerAnimationSystem.playClip(_,v,Object.keys(p).length?p:void 0)}if(f){u.updateMatrixWorld(!0);const v=f.rightHandBone,p=this.getThirdPersonWeaponCfg(l.animationState||"idle"),m=Ue.thirdPersonWeaponGripOffset;v&&(v.getWorldPosition(this._handPos3p),v.getWorldQuaternion(this._handQuat3p),this._offsetVec3p.set(p.x,p.y,p.z).applyQuaternion(this._handQuat3p),f.container.position.copy(this._handPos3p).add(this._offsetVec3p),f.container.quaternion.copy(this._handQuat3p)),f.weaponScene.position.set(m.x,m.y,m.z),f.weaponScene.rotation.set(Math.PI/2+p.rotX,p.rotY,p.rotZ),f.weaponScene.scale.setScalar(p.scale);const S=this.lastShotTickSeen.get(c)??0;if(l.lastShotTick>S){this.lastShotTickSeen.set(c,l.lastShotTick);const E=this.remotePlayerMuzzleFlashes.get(c);E&&E.trigger(f.muzzleNode)}}}this.lastHealthByPlayer.set(c,l.health)}});const r=t*1e3;this.remotePlayerMuzzleFlashes.forEach(l=>l.update(r));const o=[],a=new Set;e.state.players.forEach((l,c)=>a.add(String(c))),this.remotePlayerMeshes.forEach((l,c)=>{a.has(String(c))||o.push(c)}),o.forEach(l=>this.removeRemotePlayerMesh(l))}updateRemoteMixers(e){this.remotePlayerMixers.forEach(t=>t.update(e))}}function BE(s,e){const t=document.createElement("div");t.id="pause-menu-overlay",t.style.cssText=`
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
  `;const i=document.createElement("div");i.textContent="Paused",i.style.cssText=`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 18px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #8cf;
  `,n.appendChild(i);const r=document.createElement("div");r.style.cssText=`
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
    `,c.addEventListener("click",u=>{u.preventDefault(),l()}),c}return r.appendChild(o("Resume Game",e.onResume)),r.appendChild(o("Go back to lobby",e.onBackToLobby)),r.appendChild(o("Settings",e.onOpenSettings)),n.appendChild(r),t.appendChild(n),s.appendChild(t),{show:()=>{t.style.display="flex"},hide:()=>{t.style.display="none"}}}const Gf="browsershooter:performanceSettings";let Wf=zE();function zE(){if(typeof window>"u")return{renderScale:1,aaEnabled:!1,bulletTracersEnabled:!0};try{const s=window.localStorage.getItem(Gf);if(!s)return{renderScale:1,aaEnabled:!1,bulletTracersEnabled:!0};const e=JSON.parse(s),t=e&&typeof e.renderScale=="number"&&e.renderScale>0?e.renderScale:1,n=!!e?.aaEnabled,i=e&&typeof e.bulletTracersEnabled=="boolean"?e.bulletTracersEnabled:!0;return{renderScale:t,aaEnabled:n,bulletTracersEnabled:i}}catch{return{renderScale:1,aaEnabled:!1,bulletTracersEnabled:!0}}}function kE(s){if(!(typeof window>"u"))try{window.localStorage.setItem(Gf,JSON.stringify(s))}catch{}}function Xf(){return{...Wf}}function HE(s){const e={renderScale:Number.isFinite(s.renderScale)&&s.renderScale>0?s.renderScale:1,aaEnabled:!!s.aaEnabled,bulletTracersEnabled:typeof s.bulletTracersEnabled=="boolean"?s.bulletTracersEnabled:!0};Wf=e,kE(e)}const $f="browsershooter:inputSettings";let el=VE();function VE(){if(typeof window>"u")return{mouseSensitivity:1};try{const s=window.localStorage.getItem($f);if(!s)return{mouseSensitivity:1};const e=JSON.parse(s);return{mouseSensitivity:e&&typeof e.mouseSensitivity=="number"?e.mouseSensitivity:1}}catch{return{mouseSensitivity:1}}}function GE(s){if(!(typeof window>"u"))try{window.localStorage.setItem($f,JSON.stringify(s))}catch{}}function Yf(){return{...el}}function WE(s){el={mouseSensitivity:typeof s.mouseSensitivity=="number"&&Number.isFinite(s.mouseSensitivity)?Math.max(.2,Math.min(3,s.mouseSensitivity)):1},GE(el)}var jf=(s=>(s.Performance="performance",s.Keyboard="keyboard",s.Mouse="mouse",s))(jf||{});function XE(s,e){const t=document.createElement("div");t.id="settings-menu-overlay",t.style.cssText=`
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
  `;const i=document.createElement("div");i.style.cssText=`
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
  `,o.addEventListener("click",se=>{se.preventDefault(),e.onClose()}),i.appendChild(r),i.appendChild(o),n.appendChild(i);const a=document.createElement("div");a.style.cssText=`
    display: flex;
    gap: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    margin-bottom: 12px;
  `;function l(se){const _e=document.createElement("button");return _e.type="button",_e.textContent=se,_e.style.cssText=`
      padding: 6px 10px 8px;
      font-size: 13px;
      border: none;
      border-bottom: 2px solid transparent;
      background: transparent;
      color: #b0d9ff;
      cursor: pointer;
    `,_e}const c=l("Performance"),u=l("Keyboard"),h=l("Mouse");a.appendChild(c),a.appendChild(u),a.appendChild(h),n.appendChild(a);const d=document.createElement("div");d.style.cssText=`
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
  `,n.appendChild(f);let _;function v(se){f.textContent=se,f.style.opacity="1",_!==void 0&&window.clearTimeout(_),_=window.setTimeout(()=>{f.style.opacity="0"},1400)}const p=document.createElement("div");p.style.cssText=`
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
  `;const E=document.createElement("select");E.style.cssText=`
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid rgba(130,190,255,0.6);
    background: #05070c;
    color: #e4f5ff;
    font-size: 13px;
  `;const A=[{label:"100%",value:1},{label:"80%",value:.8},{label:"60%",value:.6}];A.forEach(se=>{const _e=document.createElement("option");_e.value=String(se.value),_e.textContent=se.label,E.appendChild(_e)}),m.appendChild(S),m.appendChild(E),p.appendChild(m);const L=document.createElement("div");L.style.cssText=`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;const P=document.createElement("div");P.textContent="MSAA antialiasing",P.style.cssText=`
    font-size: 14px;
    color: #c7e3ff;
  `;const R=document.createElement("input");R.type="checkbox",R.style.cssText=`
    width: 16px;
    height: 16px;
  `,L.appendChild(P),L.appendChild(R),p.appendChild(L);const F=document.createElement("div");F.style.cssText=`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;const j=document.createElement("div");j.textContent="Bullet tracers",j.style.cssText=`
    font-size: 14px;
    color: #c7e3ff;
  `;const M=document.createElement("input");M.type="checkbox",M.style.cssText=`
    width: 16px;
    height: 16px;
  `,F.appendChild(j),F.appendChild(M),p.appendChild(F);const C=document.createElement("div");C.style.cssText=`
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
  `,G.addEventListener("click",se=>{se.preventDefault();const oe={renderScale:Number(E.value)||1,aaEnabled:R.checked,bulletTracersEnabled:M.checked};e.onApplyPerformance(oe),v("Performance changes applied")}),C.appendChild(G),p.appendChild(C);const X=document.createElement("div");X.style.cssText=`
    display: none;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    color: #c7e3ff;
  `;const q=document.createElement("div");q.textContent="Keyboard bindings are currently fixed (WASD, Space, C, R). Custom keybinds will be added later.",X.appendChild(q);const J=document.createElement("div");J.style.cssText=`
    display: none;
    flex-direction: column;
    gap: 12px;
  `;const W=document.createElement("div");W.style.cssText=`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  `;const K=document.createElement("div");K.textContent="Mouse sensitivity",K.style.cssText=`
    font-size: 14px;
    color: #c7e3ff;
  `;const Y=document.createElement("span");Y.style.cssText=`
    font-size: 13px;
    color: #9fd0ff;
    margin-left: 8px;
  `;const pe=document.createElement("input");pe.type="range",pe.min="0.5",pe.max="2",pe.step="0.1",pe.style.cssText=`
    flex: 1;
    margin-left: 16px;
  `;const ue=document.createElement("div");ue.style.cssText=`
    display: flex;
    align-items: center;
    flex: 1;
  `,ue.appendChild(pe),ue.appendChild(Y),W.appendChild(K),W.appendChild(ue),J.appendChild(W);const me=document.createElement("div");me.style.cssText=`
    display: flex;
    justify-content: flex-end;
    margin-top: 6px;
  `;const ke=document.createElement("button");ke.type="button",ke.textContent="Apply",ke.style.cssText=`
    padding: 7px 14px;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid rgba(140,220,255,0.9);
    background: linear-gradient(135deg, #0d1a28, #14314a);
    color: #e4f5ff;
    cursor: pointer;
  `,ke.addEventListener("click",se=>{se.preventDefault();const oe={mouseSensitivity:Number(pe.value)||1};e.onApplyMouse(oe),v("Mouse settings applied")}),me.appendChild(ke),J.appendChild(me),d.appendChild(p),d.appendChild(X),d.appendChild(J);function Ye(){const se=Xf(),_e=A.reduce((ye,Se)=>{const De=Math.abs(ye.value-se.renderScale);return Math.abs(Se.value-se.renderScale)<De?Se:ye},A[0]);E.value=String(_e.value),R.checked=se.aaEnabled,M.checked=typeof se.bulletTracersEnabled=="boolean"?se.bulletTracersEnabled:!0;const oe=Yf(),he=Math.max(.5,Math.min(2,oe.mouseSensitivity||1));pe.value=String(he),Y.textContent=`${he.toFixed(1)}x`}function ee(){for(const se of[c,u,h])se.style.borderBottomColor="transparent",se.style.color="#b0d9ff";p.style.display="none",X.style.display="none",J.style.display="none"}function ce(se){ee(),se==="performance"?(c.style.borderBottomColor="#8bd3ff",c.style.color="#e4f5ff",p.style.display="flex"):se==="keyboard"?(u.style.borderBottomColor="#8bd3ff",u.style.color="#e4f5ff",X.style.display="flex"):se==="mouse"&&(h.style.borderBottomColor="#8bd3ff",h.style.color="#e4f5ff",J.style.display="flex")}return c.addEventListener("click",se=>{se.preventDefault(),ce("performance")}),u.addEventListener("click",se=>{se.preventDefault(),ce("keyboard")}),h.addEventListener("click",se=>{se.preventDefault(),ce("mouse")}),t.appendChild(n),s.appendChild(t),{show:se=>{Ye(),t.style.display="flex",ce(se??"performance")},hide:()=>{t.style.display="none"}}}const nd=.15,Za=.05,id=8,Ft=(s,e,t)=>s+(e-s)*(1-Math.exp(-t));function $E(){return{moveFactor:0,smoothedPhaseSpeed:0,bobPhase:0,swayYaw:0,swayPitch:0,recoilPitch:0,recoilPullback:0,recoilRoll:0,slideBlend:0,slideImpactSpringY:0,slideImpactSpringVy:0,slideWigglePhase:1,slideReleaseBump:0,strafeLeanX:0,strafeLeanRoll:0,forwardLeanZ:0,dashBlend:0,smoothedYawDelta:0,smoothedPitchDelta:0,idlePhase:0,idleTime:0,prevMovState:"grounded",lastAirborneVy:0,lastAirborneVx:0,jumpTakeoffPhase:1,jumpLandingSpringY:0,jumpLandingSpringVy:0,lastYaw:0,lastPitch:0,firstFrame:!0,_targetPos:new D,_targetRot:new _n(0,0,0,"YXZ"),_pos:new D,_rot:new _n(0,0,0,"YXZ")}}function YE(s,e){const t=Ue.tuning.povMovement??jE,{velocity:n,state:i,crouching:r,yaw:o,pitch:a,shotThisFrame:l,dt:c}=e,u=Math.sqrt(n.x*n.x+n.z*n.z),h=i==="sliding",d=i==="grounded",f=i==="airborne",_=s.prevMovState==="grounded",v=s.prevMovState==="airborne";s.prevMovState=i,f&&(s.lastAirborneVy=n.y,s.lastAirborneVx=n.x);const p=Math.min(1,Math.abs(s.lastAirborneVy)/12);if(_&&f&&(s.jumpTakeoffPhase=0),v&&d){const dt=(t.jumpLandingDip??-.06)*p;s.jumpLandingSpringY=dt,s.jumpLandingSpringVy=0}const m=t.jumpTakeoffDecay??6;s.jumpTakeoffPhase=Math.min(1,s.jumpTakeoffPhase+c*m);const S=s.jumpTakeoffPhase,E=1-S*S,A=(t.jumpTakeoffDip??-.016)*E,L=t.jumpLandingSpringK??60,P=t.jumpLandingSpringDamp??14;if(d&&(Math.abs(s.jumpLandingSpringY)>1e-4||Math.abs(s.jumpLandingSpringVy)>1e-4)){const dt=-L*s.jumpLandingSpringY-P*s.jumpLandingSpringVy;s.jumpLandingSpringVy+=dt*c,s.jumpLandingSpringY+=s.jumpLandingSpringVy*c}else d&&(s.jumpLandingSpringY=0,s.jumpLandingSpringVy=0);const R=d?s.jumpLandingSpringY:0,F=Math.abs(s.jumpLandingSpringY)+Math.abs(s.jumpLandingSpringVy)*.1,j=f?t.jumpAirborneFloatY??.016:0,M=(f?A:0)+R+j,C=d&&F>.001&&Math.abs(s.lastAirborneVx)>1?-Math.sign(s.lastAirborneVx)*(t.jumpLandingRoll??.016)*p*Math.min(1,Math.abs(s.lastAirborneVx)/6)*Math.min(1,F*20):0,G=f&&Math.abs(n.z)>.5?-Math.sign(n.z)*(t.jumpInertiaZ??.004)*Math.min(1,Math.abs(n.z)/6):0,X=Math.min(1,u/id),q=d&&u>nd&&!h?X:0;s.moveFactor=Ft(s.moveFactor,q,c/t.moveFactorSmoothTau);const J=h?1:0,W=h?t.slideInTau:t.slideOutTau,K=s.slideBlend;if(s.slideBlend=Ft(s.slideBlend,J,c/W),s.slideBlend>.05&&K<.1&&(s.slideImpactSpringY=t.slideImpactDipAmp,s.slideImpactSpringVy=0,s.slideWigglePhase=0),s.slideBlend>.01){const dt=t.slideImpactSpringK??80,en=t.slideImpactSpringDamp??12,kn=-dt*s.slideImpactSpringY-en*s.slideImpactSpringVy;s.slideImpactSpringVy+=kn*c,s.slideImpactSpringY+=s.slideImpactSpringVy*c}else s.slideImpactSpringY=0,s.slideImpactSpringVy=0;const pe=s.slideImpactSpringY,ue=t.slideWiggleDuration??.3;s.slideBlend>.01&&s.slideWigglePhase<1?s.slideWigglePhase=Math.min(1,s.slideWigglePhase+c/ue):s.slideBlend<.5&&(s.slideWigglePhase=1);const me=1-s.slideWigglePhase,ke=s.slideBlend*me*(t.slideWiggleRoll??.004)*Math.sin(s.idleTime*18),Ye=K>.3&&!h&&s.slideBlend<K,ee=t.slideReleaseBump??0;Ye&&ee!==0&&(s.slideReleaseBump=ee),s.slideReleaseBump=Ft(s.slideReleaseBump,0,c/(t.slideReleaseBumpTau??.08));const ce=r?t.bobCrouchFreqMultiplier??1:1,se=d&&u>nd&&!h?Math.min(1,u/id)*t.bobFrequency*ce:0;s.smoothedPhaseSpeed=Ft(s.smoothedPhaseSpeed,se,c/t.phaseSpeedSmoothTau),s.bobPhase+=c*s.smoothedPhaseSpeed;const _e=r?t.bobCrouchAmpMultiplier??1:1,oe=s.moveFactor*_e,he=oe<=Za?0:Math.min(1,(oe-Za)/(1-Za)),ye=Math.abs(n.z),Se=Math.abs(n.x),De=ye+Se+1e-6,N=ye/De,$e=Se/De,Xe=n.x>0?1:n.x<0?-1:0,qe=d&&!h?he*$e*s.moveFactor:0,Fe=-Xe*qe*(t.strafeLeanX??0),ct=Xe*qe*(t.strafeLeanRoll??0),Be=t.strafeLeanTau??.06;s.strafeLeanX=Ft(s.strafeLeanX,Fe,c/Be),s.strafeLeanRoll=Ft(s.strafeLeanRoll,ct,c/Be);const I=n.z>0?1:n.z<0?-1:0,b=d&&!h?he*N*s.moveFactor:0,k=I*b*(t.forwardLeanZ??0);s.forwardLeanZ=Ft(s.forwardLeanZ,k,c/Be);const ae=e.isDashing??!1?1:0,ne=t.dashBlendTau??.04;s.dashBlend=Ft(s.dashBlend,ae,c/ne);const Ie=s.dashBlend*(t.dashOffsetZ??.06),xe=s.dashBlend*(t.dashTiltPitch??-.04),we=.4+.6*N,Je=.4+.6*$e,de=.5+.5*$e,Pe=1-$e*(t.strafeBobYReduce??.7),He=1+$e*(t.strafeBobXBoost??.5),Ve=1+$e*(t.strafeBobRollBoost??.8),ve=Math.max(0,Math.min(1,e.reloadProgress??0)),Ke=1-s.slideBlend*(t.bobSlideReduce??.98),Ge=1-ve,ht=s.bobPhase,H=t.bobAmplitudeY*he*we*Pe*Math.sin(ht)*Ke*Ge,Re=t.bobAmplitudeX*he*Je*He*Math.sin(ht+t.bobPhaseOffsetX)*Ke*Ge,Z=t.bobAmplitudeRoll*he*de*Ve*Math.sin(ht+.7)*Ke*Ge,re=t.bobAmplitudePitch*he*Math.sin(ht+.4)*Ke*Ge;let Te=0,Ae=0;s.firstFrame?s.firstFrame=!1:(Te=o-s.lastYaw,Ae=a-s.lastPitch),s.lastYaw=o,s.lastPitch=a;const it=t.swayDeltaSmoothTau??.04;s.smoothedYawDelta=Ft(s.smoothedYawDelta,Te,c/it),s.smoothedPitchDelta=Ft(s.smoothedPitchDelta,Ae,c/it);const xt=(1-s.slideBlend*t.swaySlideReduce)*(1-ve*(t.swayReloadReduce??.8))*(f?t.swayAirborneReduce??.5:1),Ot=-s.smoothedYawDelta*t.swayLookFactor*xt,lt=-s.smoothedPitchDelta*t.swayLookFactor*xt;s.swayYaw=Ft(s.swayYaw,Ot,c/t.swaySmoothTau),s.swayPitch=Ft(s.swayPitch,lt,c/t.swaySmoothTau),s.swayYaw*=t.swayReturnDamping,s.swayPitch*=t.swayReturnDamping;const sn=1/uf/3,un=Math.max(t.recoilRecoveryTau,1e-4),In=Math.min(un,sn);l&&(s.recoilPitch+=t.recoilKickPitch,s.recoilPullback+=t.recoilPullback,s.recoilRoll+=(Math.random()-.5)*t.recoilRollVariation);const rn=(1-s.slideBlend*t.recoilSlideReduce)*(1-ve);s.recoilPitch=Ft(s.recoilPitch,0,c/In)*rn,s.recoilPullback=Ft(s.recoilPullback,0,c/In),s.recoilRoll=Ft(s.recoilRoll,0,c/In);const Si=s.slideBlend*t.slideYOffset+pe+s.slideReleaseBump,x=s.slideBlend*t.slideZOffset,g=s.slideBlend*t.slideInwardTilt+ke,y=s.slideBlend*(t.slidePitchDown??-.1),w=ve>1e-4;let z=0;if(w)if(ve<.25){const dt=ve/.25;z=dt*dt}else if(ve<.7)z=1;else{const dt=(ve-.7)/.3,en=Math.max(0,Math.min(1,dt)),kn=en*en*(3-2*en),tn=t.reloadOvershoot??.08;z=1-kn+tn*(1-kn)*(1-kn)}const ie=t.reloadYOffset??-.12,Oe=t.reloadZOffset??.12,Le=t.reloadPullback??.06,nt=t.reloadPitchDown??-.3,Ze=t.reloadRoll??-.14,T=t.reloadYaw??.18,U=z*ie,B=z*Oe,V=z*Le,O=z*nt,Q=z*Ze,$=z*T;s.idleTime+=c;const le=2*Math.PI/(t.idleBreathingPeriod??4),Me=1+.06*Math.sin(s.idleTime*.4)+.03*Math.sin(s.idleTime*.73);s.idlePhase+=c*le*Me;const be=s.idlePhase,ge=be*2.13+.7,fe=be*.47+1.3,Qe=Math.sin(be)+.18*Math.sin(ge)+.06*Math.sin(fe),st=Math.max(-1,Math.min(1,Qe/1.24)),rt=Math.sign(st)*Math.pow(Math.abs(st),.78),ut=.4*Math.sin(be+.6)+.12*Math.sin(ge+1.1),ze=(1-s.slideBlend)*(1-s.moveFactor*(t.idleWalkReduce??.85))*(1-ve*(t.idleReloadReduce??.4))*(f?t.idleAirborneReduce??.3:1),Ne=(t.idleBreathingAmplitudeY??.002)*ze,gt=(t.idleBreathingAmplitudeX??6e-4)*ze,at=Ne*rt,Tt=gt*ut,on=(t.idlePitchAmplitude??6e-4)*ze*rt,Xt=(t.idleRollAmplitude??3e-4)*ze*ut;s._targetPos.set(Re+s.strafeLeanX+Tt,H+Si+U+at+M,s.recoilPullback+V+x+B+s.forwardLeanZ+G+Ie),s._targetRot.set(s.swayPitch+s.recoilPitch+re+on+y+O+xe,s.swayYaw+$,g+Q+s.recoilRoll+Z+s.strafeLeanRoll+Xt+C,"YXZ");const si=t.rootApplyTau;return s._pos.lerp(s._targetPos,1-Math.exp(-c/si)),s._rot.x=Ft(s._rot.x,s._targetRot.x,c/si),s._rot.y=Ft(s._rot.y,s._targetRot.y,c/si),s._rot.z=Ft(s._rot.z,s._targetRot.z,c/si),{position:s._pos,rotation:s._rot}}const jE={idleBreathingAmplitudeY:.008,idleBreathingAmplitudeX:.0024,idleBreathingPeriod:4,idlePitchAmplitude:.0024,idleRollAmplitude:.0012,idleWalkReduce:.85,idleAirborneReduce:.3,jumpTakeoffDip:-.016,jumpTakeoffDecay:8,jumpAirborneFloatY:.032,jumpLandingDip:-.06,jumpLandingSpringK:60,jumpLandingSpringDamp:14,jumpLandingRoll:.016,jumpInertiaZ:.016,swayAirborneReduce:.5,moveFactorSmoothTau:.06,phaseSpeedSmoothTau:.08,rootApplyTau:.025,bobAmplitudeY:.01512,bobAmplitudeX:.0156,bobAmplitudeRoll:.0052,bobAmplitudePitch:.00258,bobPhaseOffsetX:.3,bobFrequency:10,swayLookFactor:.6,swaySmoothTau:.05,swayDeltaSmoothTau:.04,swayReturnDamping:.88,swaySlideReduce:.92,bobSlideReduce:.98,strafeLeanX:.1,strafeLeanRoll:.025,forwardLeanZ:.1,strafeLeanTau:.06,strafeBobYReduce:.7,strafeBobXBoost:.5,strafeBobRollBoost:.8,recoilKickPitch:.02,recoilPullback:.15,recoilRollVariation:.02,recoilRecoveryTau:.06,recoilSlideReduce:.5,slideYOffset:-.2,slideZOffset:.1,slideInwardTilt:.38,slidePitchDown:-.1,slideImpactDipAmp:-.012,slideImpactSpringK:80,slideImpactSpringDamp:18,slideWiggleRoll:.005,slideWiggleDuration:.3,slideReleaseBump:0,slideReleaseBumpTau:.1,slideInTau:.04,slideOutTau:.28,bobCrouchFreqMultiplier:1,bobCrouchAmpMultiplier:1,reloadYOffset:-.12,reloadZOffset:.12,reloadPullback:.06,reloadPitchDown:-.3,reloadRoll:-.14,reloadYaw:.18,reloadOvershoot:.08,swayReloadReduce:.8,idleReloadReduce:.4},tl={x:.37,y:-5.34,z:.55,rotX:-.03,rotY:2.968,rotZ:-.02,scale:3.21};async function qE(s,e,t){const n=t.getCamera();let i=s,r=e;if(Ue.viewmodelArmsUrl){const v=await RE(Ue.viewmodelArmsUrl);v.animations.length>0&&v.scene&&(i=v.scene,r=v.animations)}const o=i!==s,a=wl(i);if(a.updateMatrixWorld(!0),Ue.playerSkin){const v=await Ol(Ue.playerSkin);v&&Ul(a,v)}o?(a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.setScalar(1)):(a.position.set(0,-_s*.5,-.4),a.rotation.set(0,0,0),a.scale.setScalar(1));const l=new Zt;l.position.set(0,0,0),l.quaternion.identity(),l.scale.setScalar(1);const c=new Zt;if(c.add(a),o){const v=tl;c.position.set(v.x,v.y,v.z),c.rotation.set(v.rotX,v.rotY,v.rotZ),c.scale.setScalar(v.scale)}else c.position.set(0,0,0),c.quaternion.identity(),c.scale.setScalar(1);l.add(c),n.add(l),a.traverse(v=>{v.frustumCulled=!1;const p=v;p.isMesh&&(p.renderOrder=100)});let u=null,h=null,d=null,f=!1,_=null;if(o&&Ue.viewmodelWeaponUrl){const v=await Zu(Ue.viewmodelWeaponUrl);if(v){v.rotation.x=Math.PI/2,v.rotation.z=-Math.PI/2;let p=null,m=null;a.traverse(P=>{const R=P;R.isSkinnedMesh&&R.skeleton&&!p&&(p=R.skeleton.getBoneByName(df)??R.skeleton.getBoneByName(ff)??R.skeleton.getBoneByName(pf)??null,m=R.skeleton.getBoneByName(tS)??R.skeleton.getBoneByName(nS)??R.skeleton.getBoneByName(iS)??null)});const S=v.getObjectByName("gripleft");h=v.getObjectByName("muzzle")??v.getObjectByName("Muzzle")??v;const E=new Zt;E.add(v),u=E;const A=Ue.viewmodelWeaponScale??1,L=Ue.viewmodelWeaponTwoPoint&&p&&m&&S&&S.position.lengthSq()>1e-6;if(o){d=null,f=!0,l.add(E);const P=Ue.viewmodelWeaponGripOffset??{x:0,y:0,z:0};v.position.set(P.x,P.y,P.z),v.scale.setScalar(A)}else if(L&&p&&m&&S){const P=S.position.clone();d={rightHand:p,leftHand:m,gripleft:S,gLeftLocal:P},f=!1,a.add(E)}else if(d=null,f=!1,p){p.add(E);const P=Ue.viewmodelWeaponOffset;E.position.set(P.x,P.y,P.z);const R=Ue.viewmodelWeaponGripOffset??{x:0,y:0,z:0};v.position.set(R.x,R.y,R.z),v.scale.setScalar(A)}else a.add(E),E.position.set(.25,-.15,.35),v.scale.setScalar(A);v.traverse(P=>{P.frustumCulled=!1;const R=P;if(R.isMesh){R.renderOrder=101;const F=Array.isArray(R.material)?R.material:[R.material];for(const j of F)j&&"side"in j&&(j.side=mn)}}),_=v.clone(!0)}}if(Ue.viewmodelWeaponUrl&&!_){const v=await Zu(Ue.viewmodelWeaponUrl);v&&(v.rotation.x=Math.PI/2,v.rotation.z=-Math.PI/2,_=v)}return{viewmodelModel:a,viewmodelAnimations:r,viewmodelState:{playerViewModel:a,viewmodelRoot:l,viewmodelHolder:c,viewmodelIsArmsOnly:o,weaponContainerRef:u,muzzleNodeRef:h,twoPointRefs:d,weaponPovDecoupled:f,movementState:$E()},weaponTemplate3P:_}}const Ja=new D,lr=new D,sd=new D,rd=new nn,od=new nn;function KE(s,e){const{viewmodelRoot:t,viewmodelHolder:n,viewmodelIsArmsOnly:i,weaponContainerRef:r,twoPointRefs:o,weaponPovDecoupled:a,playerViewModel:l,movementState:c}=s;if(n&&i){const u=tl;n.position.set(u.x,u.y,u.z),n.rotation.set(u.rotX,u.rotY,u.rotZ),n.scale.setScalar(u.scale)}if(i&&e&&t){const{position:u,rotation:h}=YE(c,e);t.position.copy(u),t.rotation.set(h.x,h.y,h.z,"YXZ")}if(i&&r&&a){const u=Ue.viewmodelWeaponOffset,h=Ue.viewmodelWeaponPovOffset??{x:0,y:0,z:0};r.position.set(.25+u.x+h.x,-.4+u.y+h.y,-.7+u.z+h.z),r.rotation.set(0,0,0);const d=Ue.viewmodelWeaponGripOffset??{x:0,y:0,z:0},f=Ue.viewmodelWeaponRotationX??0,_=Ue.viewmodelWeaponRotationY??0,v=Ue.viewmodelWeaponRotationZ??0,p=Ue.viewmodelWeaponScale??1,m=r.children[0];if(m){const S=m;S.position.set(d.x,d.y,d.z),S.rotation.set(Math.PI/2+f,_,v),S.scale.setScalar(p)}}else if(!o&&r){const u=Ue.viewmodelWeaponOffset;r.position.set(u.x,u.y,u.z);const h=Ue.viewmodelWeaponGripOffset??{x:0,y:0,z:0},d=Ue.viewmodelWeaponRotationX??0,f=Ue.viewmodelWeaponRotationY??0,_=Ue.viewmodelWeaponRotationZ??0,v=r.children[0];if(v){const p=v;p.position.set(h.x,h.y,h.z),p.rotation.set(Math.PI/2+d,f,_)}}if(o&&r&&l){const{rightHand:u,leftHand:h,gLeftLocal:d}=o;u.getWorldPosition(Ja),h.getWorldPosition(lr),lr.sub(Ja);const f=lr.length(),_=d.length();if(f>1e-6&&_>1e-6){const p=tl.scale,m=f/(p*_),S=Math.max(.5,Math.min(m,50));lr.normalize(),sd.copy(d).normalize(),rd.setFromUnitVectors(sd,lr),r.position.copy(Ja),l.worldToLocal(r.position),l.getWorldQuaternion(od),r.quaternion.copy(od).invert().multiply(rd);const E=r.children[0];E&&E.scale.setScalar(S)}}}const ZE=5,Qa=7e3,ad=500,cd="#4dd0e1",JE="/ui/weapon_rifle_white.png",QE="/ui/headshot_white.png";let Qn=null;const Es=[];let eT=1,nl=0;function tT(s){if(Qn)return;const e=document.createElement("div");e.id="killfeed",e.style.cssText="position:fixed;top:32px;right:32px;pointer-events:none;z-index:9999;display:flex;flex-direction:column;gap:6px;align-items:flex-end;font-family:system-ui,sans-serif;",s.appendChild(e),Qn=e}function nT(s,e){if(!Qn)return;const t=s?.sessionId??null,n=s?.state.players.get(e.killerId)??null,i=s?.state.players.get(e.victimId)??null,r=ld(e.killerId,n?.id),o=ld(e.victimId,i?.id),a=t!==null&&e.killerId===t,l=t!==null&&e.victimId===t,c=document.createElement("div");c.style.cssText="display:flex;align-items:center;gap:8px;padding:4px 11px;background:rgba(0,0,0,0.7);border-radius:4px;color:#fff;font-size:13px;transform-origin:top right;opacity:1;pointer-events:none;";const u=document.createElement("span");u.textContent=r,u.style.fontWeight="600",u.style.color=a?cd:"#ffffff",c.appendChild(u);const h=document.createElement("img");if(h.src=sT(e.weaponId),h.alt=e.weaponId,h.style.height="18px",h.style.width="auto",h.style.filter="drop-shadow(0 0 2px rgba(0,0,0,0.8))",c.appendChild(h),e.isHeadshot){const _=document.createElement("img");_.src=QE,_.alt="Headshot",_.style.height="18px",_.style.width="auto",_.style.filter="drop-shadow(0 0 2px rgba(0,0,0,0.8))",c.appendChild(_)}const d=document.createElement("span");d.textContent=o,d.style.fontWeight="500",d.style.color=l?cd:"#ffffff",c.appendChild(d),Qn.appendChild(c);const f={id:eT++,killerId:e.killerId,victimId:e.victimId,weaponId:e.weaponId,isHeadshot:e.isHeadshot,createdAtMs:nl,element:c};for(Es.push(f);Es.length>ZE;){const _=Es.shift();_&&_.element.parentElement===Qn&&Qn.removeChild(_.element)}}function iT(s){if(Qn){nl+=s*1e3;for(let e=0;e<Es.length;e++){const t=Es[e],n=nl-t.createdAtMs;if(n>=Qa+ad){t.element.parentElement===Qn&&Qn.removeChild(t.element),Es.splice(e,1),e--;continue}let i=1;if(n>Qa){const r=(n-Qa)/ad;i=Math.max(0,1-r)}t.element.style.opacity=i.toFixed(2)}}}function ld(s,e){const t=e&&e.trim().length>0?e:s;return mf(t)}function sT(s){return JE}const rT=.01,oT=new D(0,1,0);class aT{tracers=[];enabled=!0;shotCounter=0;config;lineRadius;lastTracer=null;constructor(e,t){this.config=t,this.lineRadius=Math.max(.001,t.lineRadius??rT);const n=Math.max(1,t.maxTracers|0),i=new jo(1,1,1,6);for(let r=0;r<n;r++){const o=new wn({color:t.color,transparent:!0,opacity:.7,depthWrite:!1,blending:yr}),a=new Mt(i,o);a.visible=!1,e.add(a),this.tracers.push({mesh:a,material:o,start:new D,dir:new D(0,0,1),fullLength:0,active:!1,remainingMs:0})}}setEnabled(e){if(this.enabled=e,!e)for(const t of this.tracers)t.active=!1,t.remainingMs=0,t.mesh.visible=!1}setTracerMesh(e,t){const n=this.lineRadius;e.mesh.position.copy(e.start).addScaledVector(e.dir,t*.5),e.mesh.scale.set(n*2,t,n*2),e.mesh.quaternion.setFromUnitVectors(oT,e.dir),e.mesh.visible=!0}spawnTracer(e,t,n){if(!this.enabled)return;const i=this.config.everyNthShot;if(this.shotCounter++,i>1&&this.shotCounter%i!==0)return;const r=t instanceof D?t.clone():new D(t.x,t.y,t.z);if(r.length()===0||n<=0)return;const a=e instanceof D?e.clone():new D(e.x,e.y,e.z),l=r.normalize();let c=this.tracers.find(u=>!u.active);c||(c=this.tracers[0]),c.start.copy(a),c.dir.copy(l),c.fullLength=n,c.active=!0,c.remainingMs=this.config.lifetimeMs,this.setTracerMesh(c,n),c.material.opacity=.8,this.lastTracer=c}retargetLast(e,t,n){if(!this.enabled)return;const i=this.lastTracer;if(!i||!i.active)return;const r=t instanceof D?t.clone():new D(t.x,t.y,t.z);if(r.length()===0||n<=0)return;const a=e instanceof D?e.clone():new D(e.x,e.y,e.z);i.start.copy(a),i.dir.copy(r.normalize()),i.fullLength=n,i.remainingMs=Math.max(i.remainingMs,this.config.lifetimeMs*.4),this.setTracerMesh(i,n)}update(e){if(this.enabled)for(const t of this.tracers){if(!t.active)continue;t.remainingMs-=e;const n=Math.max(0,t.remainingMs)/this.config.lifetimeMs,i=t.fullLength*n;this.setTracerMesh(t,i);const r=n*n;t.material.opacity=.8*r,t.remainingMs<=0&&(t.active=!1,t.mesh.visible=!1)}}}class cT{impacts=[];config;constructor(e,t){this.config=t;const i=(()=>{if(typeof document>"u")return null;const a=64,l=document.createElement("canvas");l.width=a,l.height=a;const c=l.getContext("2d");if(!c)return null;c.fillStyle="rgba(0, 0, 0, 0)",c.fillRect(0,0,a,a);const u=a/2,h=a/2,d=a*.42,f=c.createRadialGradient(u,h,0,u,h,d);f.addColorStop(0,"rgba(255, 252, 240, 1)"),f.addColorStop(.35,"rgba(255, 230, 180, 0.95)"),f.addColorStop(.7,"rgba(255, 180, 100, 0.4)"),f.addColorStop(1,"rgba(255, 120, 50, 0)"),c.fillStyle=f,c.beginPath(),c.arc(u,h,d,0,Math.PI*2),c.fill(),c.strokeStyle="rgba(255, 248, 220, 0.95)",c.lineWidth=2;const _=8,v=d*.25,p=d*1.05;for(let S=0;S<_;S++){const E=S/_*Math.PI*2,A=u+Math.cos(E)*v,L=h+Math.sin(E)*v,P=u+Math.cos(E)*p,R=h+Math.sin(E)*p;c.beginPath(),c.moveTo(A,L),c.lineTo(P,R),c.stroke()}const m=new Kd(l);return m.format=hn,m.premultiplyAlpha=!1,m.center.set(.5,.5),m.needsUpdate=!0,m})(),r=new _l({map:i,color:t.color,transparent:!0,opacity:.9,depthWrite:!1,blending:yr,alphaTest:.12}),o=Math.max(1,t.maxImpacts|0);for(let a=0;a<o;a++){const l=new $d(r.clone());l.scale.set(t.size,t.size,1),l.visible=!1,e.add(l),this.impacts.push({sprite:l,active:!1,remainingMs:0})}}spawnImpact(e){const t=e instanceof D?e.clone():new D(e.x,e.y,e.z);let n=this.impacts.find(i=>!i.active);n||(n=this.impacts[0]),n.sprite.position.copy(t),n.sprite.visible=!0,n.remainingMs=this.config.lifetimeMs,n.active=!0,n.sprite.material.opacity=.9}update(e){for(const t of this.impacts){if(!t.active)continue;t.remainingMs-=e;const n=Math.max(0,t.remainingMs)/this.config.lifetimeMs,i=t.sprite.material;i.opacity=.9*n,t.remainingMs<=0&&(t.active=!1,t.sprite.visible=!1)}}}const Vt=document.getElementById("app");if(!Vt)throw new Error("No #app");const Dn=document.createElement("canvas");Vt.appendChild(Dn);const hd=new URLSearchParams(window.location.search).get("tuner");if(hd==="1")kl(()=>import("./TunerBoot-C1lpxHlX.js"),__vite__mapDeps([0,1])).then(s=>s.bootTuner(Vt,Dn));else if(hd==="3p")kl(()=>import("./Tuner3PBoot-CUkgPspO.js"),__vite__mapDeps([2,1])).then(s=>s.bootTuner3P(Vt,Dn));else{let s=function(){const oe=Dn.clientWidth||window.innerWidth,he=Dn.clientHeight||window.innerHeight;return{w:oe,h:he}},e=function(){p.disconnect()},t=function(oe){E=oe},n=function(){E!=="paused"&&(!A&&Vt&&(A=BE(Vt,{onResume:()=>i(),onBackToLobby:()=>{p.disconnect(),window.location.reload()},onOpenSettings:()=>r()})),A?.show(),L?.hide(),t("paused"),f.isPointerLocked()&&document.exitPointerLock())},i=function(){E!=="playing"&&(A?.hide(),L?.hide(),t("playing"),f.requestPointerLock(Dn))},r=function(){!L&&Vt&&(L=XE(Vt,{onClose:()=>{E==="settings"&&n()},onApplyPerformance:oe=>{HE(oe),c.setPerformance(oe),u.setEnabled(oe.bulletTracersEnabled)},onApplyMouse:oe=>{WE(oe),f.setMouseSensitivity(oe.mouseSensitivity)}})),L?.show(jf.Performance),A?.hide(),t("settings")};const{w:o,h:a}=s(),l=Xf(),c=new pS(Dn,{antialias:l.aaEnabled,renderScale:l.renderScale}),u=new aT(c.getScene(),{maxTracers:32,lifetimeMs:Ue.tracerMaxLifetimeMs,color:Ue.tracerColor,everyNthShot:Ue.tracerEveryNthShot,lineRadius:Ue.tracerLineRadius}),h=new cT(c.getScene(),{maxImpacts:32,lifetimeMs:Ue.tracerImpactLifetimeMs,color:Ue.tracerColor,size:Ue.tracerImpactSize});u.setEnabled(l.bulletTracersEnabled??Ue.tracerEnabledDefault);const d=new uS(90,o/a||16/9,.1,1e3);c.getScene().add(d.getCamera()),c.resize(o,a),d.resize(o,a);const f=new hS,_=Yf();f.setMouseSensitivity(_.mouseSensitivity),f.requestPointerLock(Dn);const v=new fS,p=new VM,m=new FE({sceneManager:c,movement:v,playerAnimationSystem:void 0,tracerSystem:u,impactSystem:h});window.addEventListener("beforeunload",oe=>{e(),f.isPointerLocked()&&(oe.preventDefault(),oe.returnValue="")}),window.addEventListener("pagehide",e),Dn.addEventListener("mousedown",oe=>oe.button===0&&f.setShoot(!0)),Dn.addEventListener("mouseup",oe=>oe.button===0&&f.setShoot(!1)),lM(Vt),vS(Vt),IS(Vt),zS(Vt),tT(Vt),jS(Vt),rM(Vt),Ue.debugOverlay&&dM(Vt);let S;(oe=>{oe.Playing="playing",oe.Paused="paused",oe.Settings="settings"})(S||(S={}));let E="playing",A=null,L=null;window.addEventListener("keydown",oe=>{oe.code==="Escape"&&(E==="playing"?(oe.preventDefault(),n()):E==="paused"?(oe.preventDefault(),i()):E==="settings"&&(oe.preventDefault(),n()))});const P=new xM(c.getScene());let R=!1,F=null,j=null;const M={raycast:()=>!1},C=new oS;let G=0,X=!1,q=0,J=0,W=_s,K=null,Y=0,pe=null,ue=null,me=null,ke=null,Ye,ee=null,ce=null,se=null;async function _e(){nr("Loading characters and arena…",15);const oe=await wE(Ue.playerModelUrl);ke=oe.scene;const he=oe.animations,ye=await qE(ke,he,d);pe=ye.viewmodelState.playerViewModel,ue=ye.viewmodelState,nr("Loading characters and arena…",40),Ye=new Fl(Ue.animationClipNames),Ye.init(ye.viewmodelAnimations),m.setPlayerTemplate(ke),m.setWeaponTemplate3P(ye.weaponTemplate3P),m.setPlayerAnimationSystem(Ye);const Se=await IE(Ue.muzzleFlashUrls);if(se=new Vf({durationMs:Ue.muzzleFlashDurationMs,scale:Ue.muzzleFlashScalePov}),se.setTextures(Se),m.setMuzzleFlashTextures(Se),ye.viewmodelAnimations.length>0&&(me=new Xc(ye.viewmodelModel),Ye.playStaticIdlePose(me)),ke){const De=wl(ke);De.visible=!1,c.getScene().add(De),ee=De,he.length>0&&(ce=new Xc(De),Ye.playStaticIdlePose(ce))}}C.setTickCallback(oe=>{const he=f.getState();if(E!=="playing"){f.tick();return}q>0&&q--,J>0&&J--,he.debugModeJustPressed&&(R=!R),v.update(oe,he,M);const ye=v.getSnapshot(),Se=ye.crouching?ou:_s;W=ko.lerp(W,Se,1-Math.exp(-oe/Ue.tuning.crouchTransitionTau)),d.setTargetPosition(ye.position.x,ye.position.y+W,ye.position.z),d.setRotation(ye.yaw,ye.pitch);const De=d.getAimDirection(),N=p.getRoom();if(N){const $e=N.state.players.get(N.sessionId);if($e){if(K!==null&&K<=0&&$e.health>0){m.syncLocalSpawnFromServer(N);const k=v.getSnapshot();W=k.crouching?ou:_s,d.setTargetPosition(k.position.x,k.position.y+W,k.position.z),d.setRotation(k.yaw,k.pitch),d.snapToTarget(),Y=.3}K=$e.health;const ct=$e.ammo,Be=$e.maxAmmo,I=R;he.reload&&ct<Be&&J<=0&&(J=au),he.shoot&&(ct>0||I)&&J<=0&&q<=0&&$e.health>0&&(X=!0,q=by)}const Xe=F??void 0,qe=he.shoot?d.getEyePosition():void 0,Fe=GM(he,G,ye.position,Xe??void 0,{x:De.x,y:De.y,z:De.z},R,qe);p.sendInput(Fe),G++,m.reconcile(N)}f.tick()}).setRenderCallback(oe=>{const he=v.getSnapshot();if(me&&Ye.playStaticIdlePose(me),Y>0?(d.snapToTarget(),Y-=oe,Y<0&&(Y=0)):d.update(oe),me&&me.update(oe),pe&&pe.updateMatrixWorld(!0),ue){if(X&&ue.muzzleNodeRef){const ae=d.getAimDirection(),xe=d.getCamera().position.clone().clone().addScaledVector(ae,Ue.tracerFirstPersonLength??20),we=new D;ue.muzzleNodeRef.getWorldPosition(we);const Je=xe.clone().sub(we).normalize(),de=xe.distanceTo(we);u.spawnTracer(we,Je,de),se&&se.trigger(ue.muzzleNodeRef)}const k=J>0?1-J/au:0,te={dt:oe,velocity:he.velocity,state:he.state,crouching:he.crouching,yaw:he.yaw,pitch:he.pitch,shotThisFrame:X,reloadProgress:k,isDashing:v.isDashing()};KE(ue,te),se&&se.update(oe*1e3),X=!1}if(m.updateRemoteMixers(oe),ee){ee.position.set(he.position.x,he.position.y,he.position.z),ee.rotation.set(0,he.yaw+Math.PI,0),ce&&(Ye.playStaticIdlePose(ce),ce.update(oe));const k=Xu(ee);k?(j=k,F={head:{x:k.head.x,y:k.head.y,z:k.head.z},bodyCenter:{x:k.bodyCenter.x,y:k.bodyCenter.y,z:k.bodyCenter.z},spineTop:{x:k.spineTop.x,y:k.spineTop.y,z:k.spineTop.z},pelvis:{x:k.pelvis.x,y:k.pelvis.y,z:k.pelvis.z},feet:{x:k.feet.x,y:k.feet.y,z:k.feet.z}}):(j=null,F=null)}else j=null,F=null;m.update(p.getRoom(),oe),P.setVisible(R,ue?.viewmodelIsArmsOnly??!1);const ye=p.getRoom(),Se=R?v.position:null,De=ye?Array.from(ye.state.players.entries()).filter(([k])=>k!==ye.sessionId).filter(([,k])=>k.health>0).map(([k,te])=>{const ae=m.getRemotePlayerMeshes().get(k),ne=ae?Xu(ae):void 0;return{id:k,x:te.x,y:te.y,z:te.z,hitboxPositions:ne??void 0}}):[];P.update(Se,De,j??void 0),c.render(d.getCamera()),DS(p.getRoom(),d.getCamera(),oe);const N=p.getRoom(),$e=N?N.state.players.get(N.sessionId):null,Xe=$e?.shield??xr,qe=$e?.maxShield??xr,Fe=$e?.health??$c,ct=$e?.maxHealth??$c,Be=$e?.ammo??Eu.ammo,I=$e?.maxAmmo??Eu.maxAmmo,b=$e?.id&&$e.id.trim().length>0?$e.id:N?.sessionId??"Player";if(xS(Xe,qe,Fe,ct,Be,I,b,R,v.getDashCooldownRemaining(),v.getDashCooldownTotal(),v.isDashing()),qS(oe,Xe,xr,Fe),HS(he.yaw,he.pitch,oe,R),iT(oe),cM(oe),u.update(oe*1e3),h.update(oe*1e3),Ue.debugOverlay){const k=N!==null?{connected:!0,playerCount:N.state.players.size}:{connected:!1,playerCount:0};fM(he.velocity,he.state,f.getState().sprint,k,R,BS(),p.getPing())}}),window.addEventListener("resize",()=>{const{w:oe,h:he}=s();d.resize(oe,he),c.resize(oe,he)}),_e().then(async()=>{if(nr("Connecting to server…",60),p.connect(Ue.serverUrl),!await p.joinOrCreate("arena_ffa"))console.warn("Could not join arena_ffa – playing offline");else{nr("Joining arena…",85);const ye=p.getRoom();ye&&(m.setup(ye),ye.onMessage("hit",Se=>{if(LS(Se.targetId),oM(),Se.hitX!==void 0&&Se.hitY!==void 0&&Se.hitZ!==void 0){h.spawnImpact({x:Se.hitX,y:Se.hitY,z:Se.hitZ});return}const De=ye.state.players.get(Se.targetId);if(De){const N=Se.hitboxType==="head"?Cl:Sy*.5;h.spawnImpact({x:De.x,y:De.y+N,z:De.z})}}),ye.onMessage("hitReceived",Se=>{if(kS(Se.dirX,Se.dirY,Se.dirZ),Se.hitX!==void 0&&Se.hitY!==void 0&&Se.hitZ!==void 0)h.spawnImpact({x:Se.hitX,y:Se.hitY,z:Se.hitZ});else{const N=d.getCamera().position.clone(),$e=new D(Se.dirX,Se.dirY,Se.dirZ).normalize();h.spawnImpact(N.clone().addScaledVector($e,1))}}),ye.onMessage("kill",Se=>{nT(ye,Se),ye.sessionId===Se.killerId&&aM()}),ye.onMessage("shot",Se=>{if(m.onShot(Se),Se.shooterId===ye.sessionId&&Se.hitX!==void 0&&Se.hitY!==void 0&&Se.hitZ!==void 0){const De=new D(Se.hitX,Se.hitY,Se.hitZ);if(ue?.muzzleNodeRef){const N=new D;ue.muzzleNodeRef.getWorldPosition(N);const $e=De.clone().sub(N).normalize(),Xe=N.distanceTo(De);u.retargetLast(N,$e,Xe)}h.spawnImpact(De)}}),await m.waitForLocalSpawnAndSync(ye))}nr("Ready!",100),await new Promise(ye=>setTimeout(ye,300));const he=v.getSnapshot();d.setTargetPosition(he.position.x,he.position.y+_s,he.position.z),d.setRotation(he.yaw,he.pitch),d.snapToTarget(),hM(),C.start(),Ue.debugOverlay&&typeof window<"u"&&(window.setPlayerSkin=ye=>{pe&&LE(pe,ye)})})}export{lT as A,mn as D,uS as F,Zt as G,Fl as P,nn as Q,pS as S,D as V,lM as a,RE as b,Ue as c,wl as d,Ol as e,Ul as f,Zu as g,Xc as h,$E as i,hM as j,_s as k,wE as l,qt as m,WM as n,nr as s,YE as u};
