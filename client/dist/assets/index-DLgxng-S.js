(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const za="169",du=0,pc=1,pu=2,oh=1,mu=2,Un=3,kn=0,Xt=1,yn=2,ti=0,Ki=1,mc=2,gc=3,_c=4,gu=5,vi=100,_u=101,vu=102,xu=103,yu=104,Mu=200,Su=201,Eu=202,Au=203,qo=204,jo=205,Tu=206,bu=207,wu=208,Ru=209,Cu=210,Iu=211,Pu=212,Lu=213,Du=214,Ko=0,Yo=1,Zo=2,Qi=3,Jo=4,Qo=5,ea=6,ta=7,ah=0,Nu=1,Uu=2,ni=0,Ou=1,Fu=2,Bu=3,ku=4,zu=5,Hu=6,Vu=7,vc="attached",Gu="detached",ch=300,er=301,tr=302,na=303,ia=304,Gs=306,nr=1e3,Qn=1001,Ps=1002,Gt=1003,lh=1004,Dr=1005,Kt=1006,Ss=1007,Fn=1008,zn=1009,hh=1010,uh=1011,kr=1012,Ha=1013,Ai=1014,fn=1015,Wr=1016,Va=1017,Ga=1018,ir=1020,fh=35902,dh=1021,ph=1022,Qt=1023,mh=1024,gh=1025,Yi=1026,rr=1027,Wa=1028,Xa=1029,_h=1030,$a=1031,qa=1033,Es=33776,As=33777,Ts=33778,bs=33779,ra=35840,sa=35841,oa=35842,aa=35843,ca=36196,la=37492,ha=37496,ua=37808,fa=37809,da=37810,pa=37811,ma=37812,ga=37813,_a=37814,va=37815,xa=37816,ya=37817,Ma=37818,Sa=37819,Ea=37820,Aa=37821,ws=36492,Ta=36494,ba=36495,vh=36283,wa=36284,Ra=36285,Ca=36286,Wu=2200,Xu=2201,$u=2202,zr=2300,Hr=2301,Js=2302,$i=2400,qi=2401,Ls=2402,ja=2500,qu=2501,ju=0,xh=1,Ia=2,Ku=3200,Yu=3201,yh=0,Zu=1,Zn="",Ht="srgb",It="srgb-linear",Ka="display-p3",Ws="display-p3-linear",Ds="linear",_t="srgb",Ns="rec709",Us="p3",Ii=7680,xc=519,Ju=512,Qu=513,ef=514,Mh=515,tf=516,nf=517,rf=518,sf=519,Pa=35044,yc="300 es",Bn=2e3,Os=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mc=1234567;const Or=Math.PI/180,sr=180/Math.PI;function dn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[r&255]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Nt(r,e,t){return Math.max(e,Math.min(t,r))}function Ya(r,e){return(r%e+e)%e}function of(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function af(r,e,t){return r!==e?(t-r)/(e-r):0}function Fr(r,e,t){return(1-t)*r+t*e}function cf(r,e,t,n){return Fr(r,e,1-Math.exp(-t*n))}function lf(r,e=1){return e-Math.abs(Ya(r,e*2)-e)}function hf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function uf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ff(r,e){return r+Math.floor(Math.random()*(e-r+1))}function df(r,e){return r+Math.random()*(e-r)}function pf(r){return r*(.5-Math.random())}function mf(r){r!==void 0&&(Mc=r);let e=Mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gf(r){return r*Or}function _f(r){return r*sr}function vf(r){return(r&r-1)===0&&r!==0}function xf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Mf(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),p=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ft(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Fs={DEG2RAD:Or,RAD2DEG:sr,generateUUID:dn,clamp:Nt,euclideanModulo:Ya,mapLinear:of,inverseLerp:af,lerp:Fr,damp:cf,pingpong:lf,smoothstep:hf,smootherstep:uf,randInt:ff,randFloat:df,randFloatSpread:pf,seededRandom:mf,degToRad:gf,radToDeg:_f,isPowerOfTwo:vf,ceilPowerOfTwo:xf,floorPowerOfTwo:yf,setQuaternionFromProperEuler:Mf,normalize:ft,denormalize:hn};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],y=i[0],m=i[3],g=i[6],b=i[1],T=i[4],w=i[7],O=i[2],N=i[5],I=i[8];return s[0]=o*y+a*b+l*O,s[3]=o*m+a*T+l*N,s[6]=o*g+a*w+l*I,s[1]=c*y+u*b+h*O,s[4]=c*m+u*T+h*N,s[7]=c*g+u*w+h*I,s[2]=f*y+p*b+_*O,s[5]=f*m+p*T+_*N,s[8]=f*g+p*w+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,_=t*h+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(i*c-u*n)*y,e[2]=(a*n-i*o)*y,e[3]=f*y,e[4]=(u*t-i*l)*y,e[5]=(i*s-a*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qs.makeScale(e,t)),this}rotate(e){return this.premultiply(Qs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qs=new He;function Sh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Vr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Sf(){const r=Vr("canvas");return r.style.display="block",r}const Sc={};function Rs(r){r in Sc||(Sc[r]=!0,console.warn(r))}function Ef(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Af(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Tf(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ec=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ac=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_r={[It]:{transfer:Ds,primaries:Ns,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Ht]:{transfer:_t,primaries:Ns,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ws]:{transfer:Ds,primaries:Us,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Ac),fromReference:r=>r.applyMatrix3(Ec)},[Ka]:{transfer:_t,primaries:Us,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ac),fromReference:r=>r.applyMatrix3(Ec).convertLinearToSRGB()}},bf=new Set([It,Ws]),ot={enabled:!0,_workingColorSpace:It,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!bf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=_r[e].toReference,i=_r[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return _r[r].primaries},getTransfer:function(r){return r===Zn?Ds:_r[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(_r[e].luminanceCoefficients)}};function Zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function eo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Pi;class wf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=Vr("canvas")),Pi.width=e.width,Pi.height=e.height;const n=Pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Zi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rf=0;class Eh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(to(i[o].image)):s.push(to(i[o]))}else s=to(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function to(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cf=0;class Rt extends wi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Qn,i=Qn,s=Kt,o=Fn,a=Qt,l=zn,c=Rt.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=dn(),this.name="",this.source=new Eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nr:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nr:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=ch;Rt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,i=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,w=(p+1)/2,O=(g+1)/2,N=(u+f)/4,I=(h+y)/4,H=(_+m)/4;return T>w&&T>O?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=N/n,s=I/n):w>O?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=N/i,s=H/i):O<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(O),n=I/s,i=H/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-y)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class If extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends If{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ah extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pf extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(h!==y||l!==f||c!==p||u!==_){let m=1-a;const g=l*f+c*p+u*_+h*y,b=g>=0?1:-1,T=1-g*g;if(T>Number.EPSILON){const O=Math.sqrt(T),N=Math.atan2(O,g*b);m=Math.sin(m*N)/O,a=Math.sin(a*N)/O}const w=a*b;if(l=l*m+f*w,c=c*m+p*w,u=u*m+_*w,h=h*m+y*w,m===1-a){const O=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=O,c*=O,u*=O,h*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*p-c*f,e[t+1]=l*_+u*f+c*h-a*p,e[t+2]=c*_+u*p+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),p=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return no.copy(this).projectOnVector(e),this.sub(no)}reflect(e){return this.sub(no.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const no=new z,Tc=new pn;class Hn{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(s,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),jr.subVectors(this.max,vr),Li.subVectors(e.a,vr),Di.subVectors(e.b,vr),Ni.subVectors(e.c,vr),Gn.subVectors(Di,Li),Wn.subVectors(Ni,Di),si.subVectors(Li,Ni);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-si.z,si.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,si.z,0,-si.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-si.y,si.x,0];return!io(t,Li,Di,Ni,jr)||(t=[1,0,0,0,1,0,0,0,1],!io(t,Li,Di,Ni,jr))?!1:(Kr.crossVectors(Gn,Wn),t=[Kr.x,Kr.y,Kr.z],io(t,Li,Di,Ni,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new z,new z,new z,new z,new z,new z,new z,new z],rn=new z,qr=new Hn,Li=new z,Di=new z,Ni=new z,Gn=new z,Wn=new z,si=new z,vr=new z,jr=new z,Kr=new z,oi=new z;function io(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){oi.fromArray(r,s);const a=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),u=n.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Lf=new Hn,xr=new z,ro=new z;class En{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(ro)),this.expandByPoint(xr.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new z,so=new z,Yr=new z,Xn=new z,oo=new z,Zr=new z,ao=new z;class Xs{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){so.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(so);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Yr),a=Xn.dot(this.direction),l=-Xn.dot(Yr),c=Xn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const y=1/u;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(so).addScaledVector(Yr,f),p}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),i=wn.dot(wn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,i,s){oo.subVectors(t,e),Zr.subVectors(n,e),ao.crossVectors(oo,Zr);let o=this.direction.dot(ao),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);const l=a*this.direction.dot(Zr.crossVectors(Xn,Zr));if(l<0)return null;const c=a*this.direction.dot(oo.cross(Xn));if(c<0||l+c>o)return null;const u=-a*Xn.dot(ao);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,i,s,o,a,l,c,u,h,f,p,_,y,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,p,_,y,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,p,_,y,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=p,g[7]=_,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),o=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,_=a*u,y=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,y=c*h;t[0]=f+y*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,y=c*h;t[0]=f-y*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,_=a*u,y=a*h;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+y,t[1]=l*h,t[5]=y*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,y=a*c;t[0]=l*u,t[4]=y-f*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+_,t[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,y=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+y,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Df,e,Nf)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),$n.crossVectors(n,qt),$n.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),$n.crossVectors(n,qt)),$n.normalize(),Jr.crossVectors(qt,$n),i[0]=$n.x,i[4]=Jr.x,i[8]=qt.x,i[1]=$n.y,i[5]=Jr.y,i[9]=qt.y,i[2]=$n.z,i[6]=Jr.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],y=n[6],m=n[10],g=n[14],b=n[3],T=n[7],w=n[11],O=n[15],N=i[0],I=i[4],H=i[8],te=i[12],S=i[1],R=i[5],K=i[9],W=i[13],ne=i[2],re=i[6],j=i[10],Q=i[14],$=i[3],ye=i[7],ve=i[11],Me=i[15];return s[0]=o*N+a*S+l*ne+c*$,s[4]=o*I+a*R+l*re+c*ye,s[8]=o*H+a*K+l*j+c*ve,s[12]=o*te+a*W+l*Q+c*Me,s[1]=u*N+h*S+f*ne+p*$,s[5]=u*I+h*R+f*re+p*ye,s[9]=u*H+h*K+f*j+p*ve,s[13]=u*te+h*W+f*Q+p*Me,s[2]=_*N+y*S+m*ne+g*$,s[6]=_*I+y*R+m*re+g*ye,s[10]=_*H+y*K+m*j+g*ve,s[14]=_*te+y*W+m*Q+g*Me,s[3]=b*N+T*S+w*ne+O*$,s[7]=b*I+T*R+w*re+O*ye,s[11]=b*H+T*K+w*j+O*ve,s[15]=b*te+T*W+w*Q+O*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],y=e[7],m=e[11],g=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*p-n*l*p)+y*(+t*l*p-t*c*f+s*o*f-i*o*p+i*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+g*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],y=e[13],m=e[14],g=e[15],b=h*m*c-y*f*c+y*l*p-a*m*p-h*l*g+a*f*g,T=_*f*c-u*m*c-_*l*p+o*m*p+u*l*g-o*f*g,w=u*y*c-_*h*c+_*a*p-o*y*p-u*a*g+o*h*g,O=_*h*l-u*y*l-_*a*f+o*y*f+u*a*m-o*h*m,N=t*b+n*T+i*w+s*O;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=b*I,e[1]=(y*f*s-h*m*s-y*i*p+n*m*p+h*i*g-n*f*g)*I,e[2]=(a*m*s-y*l*s+y*i*c-n*m*c-a*i*g+n*l*g)*I,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*p-n*l*p)*I,e[4]=T*I,e[5]=(u*m*s-_*f*s+_*i*p-t*m*p-u*i*g+t*f*g)*I,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*g-t*l*g)*I,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*p+t*l*p)*I,e[8]=w*I,e[9]=(_*h*s-u*y*s-_*n*p+t*y*p+u*n*g-t*h*g)*I,e[10]=(o*y*s-_*a*s+_*n*c-t*y*c-o*n*g+t*a*g)*I,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*I,e[12]=O*I,e[13]=(u*y*i-_*h*i+_*n*f-t*y*f-u*n*m+t*h*m)*I,e[14]=(_*a*i-o*y*i-_*n*l+t*y*l+o*n*m-t*a*m)*I,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,_=s*h,y=o*u,m=o*h,g=a*h,b=l*c,T=l*u,w=l*h,O=n.x,N=n.y,I=n.z;return i[0]=(1-(y+g))*O,i[1]=(p+w)*O,i[2]=(_-T)*O,i[3]=0,i[4]=(p-w)*N,i[5]=(1-(f+g))*N,i[6]=(m+b)*N,i[7]=0,i[8]=(_+T)*I,i[9]=(m-b)*I,i[10]=(1-(f+y))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ui.set(i[0],i[1],i[2]).length();const o=Ui.set(i[4],i[5],i[6]).length(),a=Ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],sn.copy(this);const c=1/s,u=1/o,h=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Bn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,_;if(a===Bn)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Os)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Bn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,p=(n+i)*u;let _,y;if(a===Bn)_=(o+s)*h,y=-2*h;else if(a===Os)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ui=new z,sn=new ke,Df=new z(0,0,0),Nf=new z(1,1,1),$n=new z,Jr=new z,qt=new z,bc=new ke,wc=new pn;class Sn{constructor(e=0,t=0,n=0,i=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uf=0;const Rc=new z,Oi=new pn,Rn=new ke,Qr=new z,yr=new z,Of=new z,Ff=new pn,Cc=new z(1,0,0),Ic=new z(0,1,0),Pc=new z(0,0,1),Lc={type:"added"},Bf={type:"removed"},Fi={type:"childadded",child:null},co={type:"childremoved",child:null};class xt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new z,t=new Sn,n=new pn,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new He}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(Cc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Pc,e)}translateOnAxis(e,t){return Rc.copy(e).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qr.copy(e):Qr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(yr,Qr,this.up):Rn.lookAt(Qr,yr,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lc),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bf),co.child=e,this.dispatchEvent(co),co.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lc),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,Of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new z(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new z,Cn=new z,lo=new z,In=new z,Bi=new z,ki=new z,Dc=new z,ho=new z,uo=new z,fo=new z,po=new ct,mo=new ct,go=new ct;class un{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),on.subVectors(e,t),i.cross(on);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){on.subVectors(i,t),Cn.subVectors(n,t),lo.subVectors(e,t);const o=on.dot(on),a=on.dot(Cn),l=on.dot(lo),c=Cn.dot(Cn),u=Cn.dot(lo),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return po.setScalar(0),mo.setScalar(0),go.setScalar(0),po.fromBufferAttribute(e,t),mo.fromBufferAttribute(e,n),go.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(po,s.x),o.addScaledVector(mo,s.y),o.addScaledVector(go,s.z),o}static isFrontFacing(e,t,n,i){return on.subVectors(n,t),Cn.subVectors(e,t),on.cross(Cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),on.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Bi.subVectors(i,n),ki.subVectors(s,n),ho.subVectors(e,n);const l=Bi.dot(ho),c=ki.dot(ho);if(l<=0&&c<=0)return t.copy(n);uo.subVectors(e,i);const u=Bi.dot(uo),h=ki.dot(uo);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Bi,o);fo.subVectors(e,s);const p=Bi.dot(fo),_=ki.dot(fo);if(_>=0&&p<=_)return t.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(ki,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Dc.subVectors(s,i),a=(h-u)/(h-u+(p-_)),t.copy(i).addScaledVector(Dc,a);const g=1/(m+y+f);return o=y*g,a=f*g,t.copy(n).addScaledVector(Bi,o).addScaledVector(ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},es={h:0,s:0,l:0};function _o(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=Ya(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=_o(o,s,e+1/3),this.g=_o(o,s,e),this.b=_o(o,s,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=Ht){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=bh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return ot.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Nt(Dt.r*255,0,255))*65536+Math.round(Nt(Dt.g*255,0,255))*256+Math.round(Nt(Dt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,s=Dt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Ht){ot.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(es);const n=Fr(qn.h,es.h,t),i=Fr(qn.s,es.s,t),s=Fr(qn.l,es.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Oe;Oe.NAMES=bh;let kf=0;class Mn extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=Ki,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=jo,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==jo&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yi extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new z,ts=new it;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pa,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pa&&(e.usage=this.usage),e}}class wh extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rh extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mn extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zf=0;const Zt=new ke,vo=new xt,zi=new z,jt=new Hn,Mr=new Hn,bt=new z;class _n extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sh(e)?Rh:wh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return vo.lookAt(e),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(jt.min,Mr.min),jt.expandByPoint(bt),bt.addVectors(jt.max,Mr.max),jt.expandByPoint(bt)):(jt.expandByPoint(Mr.min),jt.expandByPoint(Mr.max))}jt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(zi.fromBufferAttribute(e,c),bt.add(zi)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<n.count;H++)a[H]=new z,l[H]=new z;const c=new z,u=new z,h=new z,f=new it,p=new it,_=new it,y=new z,m=new z;function g(H,te,S){c.fromBufferAttribute(n,H),u.fromBufferAttribute(n,te),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,H),p.fromBufferAttribute(s,te),_.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(f),_.sub(f);const R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(R),a[H].add(y),a[te].add(y),a[S].add(y),l[H].add(m),l[te].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let H=0,te=b.length;H<te;++H){const S=b[H],R=S.start,K=S.count;for(let W=R,ne=R+K;W<ne;W+=3)g(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const T=new z,w=new z,O=new z,N=new z;function I(H){O.fromBufferAttribute(i,H),N.copy(O);const te=a[H];T.copy(te),T.sub(O.multiplyScalar(O.dot(te))).normalize(),w.crossVectors(N,te);const R=w.dot(l[H])<0?-1:1;o.setXYZW(H,T.x,T.y,T.z,R)}for(let H=0,te=b.length;H<te;++H){const S=b[H],R=S.start,K=S.count;for(let W=R,ne=R+K;W<ne;W+=3)I(e.getX(W+0)),I(e.getX(W+1)),I(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let g=0;g<u;g++)f[_++]=c[p++]}return new Wt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new ke,ai=new Xs,ns=new En,Uc=new z,is=new z,rs=new z,ss=new z,xo=new z,os=new z,Oc=new z,as=new z;class Ut extends xt{constructor(e=new _n,t=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){os.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(xo.fromBufferAttribute(h,e),o?os.addScaledVector(xo,u):os.addScaledVector(xo.sub(t),u))}t.add(os)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(s),ai.copy(e.ray).recast(e.near),!(ns.containsPoint(ai.origin)===!1&&(ai.intersectSphere(ns,Uc)===null||ai.origin.distanceToSquared(Uc)>(e.far-e.near)**2))&&(Nc.copy(s).invert(),ai.copy(e.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],g=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=b,O=T;w<O;w+=3){const N=a.getX(w),I=a.getX(w+1),H=a.getX(w+2);i=cs(this,g,e,n,c,u,h,N,I,H),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,g=y;m<g;m+=3){const b=a.getX(m),T=a.getX(m+1),w=a.getX(m+2);i=cs(this,o,e,n,c,u,h,b,T,w),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],g=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=b,O=T;w<O;w+=3){const N=w,I=w+1,H=w+2;i=cs(this,g,e,n,c,u,h,N,I,H),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,g=y;m<g;m+=3){const b=m,T=m+1,w=m+2;i=cs(this,o,e,n,c,u,h,b,T,w),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Hf(r,e,t,n,i,s,o,a){let l;if(e.side===Xt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===kn,a),l===null)return null;as.copy(a),as.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(as);return c<t.near||c>t.far?null:{distance:c,point:as.clone(),object:r}}function cs(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,is),r.getVertexPosition(l,rs),r.getVertexPosition(c,ss);const u=Hf(r,e,t,n,is,rs,ss,Oc);if(u){const h=new z;un.getBarycoord(Oc,is,rs,ss,h),i&&(u.uv=un.getInterpolatedAttribute(i,a,l,c,h,new it)),s&&(u.uv1=un.getInterpolatedAttribute(s,a,l,c,h,new it)),o&&(u.normal=un.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};un.getNormal(is,rs,ss,f.normal),u.face=f,u.barycoord=h}return u}class Ri extends _n{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(h,2));function _(y,m,g,b,T,w,O,N,I,H,te){const S=w/I,R=O/H,K=w/2,W=O/2,ne=N/2,re=I+1,j=H+1;let Q=0,$=0;const ye=new z;for(let ve=0;ve<j;ve++){const Me=ve*R-W;for(let Qe=0;Qe<re;Qe++){const st=Qe*S-K;ye[y]=st*b,ye[m]=Me*T,ye[g]=ne,c.push(ye.x,ye.y,ye.z),ye[y]=0,ye[m]=0,ye[g]=N>0?1:-1,u.push(ye.x,ye.y,ye.z),h.push(Qe/I),h.push(1-ve/H),Q+=1}}for(let ve=0;ve<H;ve++)for(let Me=0;Me<I;Me++){const Qe=f+Me+re*ve,st=f+Me+re*(ve+1),Z=f+(Me+1)+re*(ve+1),ce=f+(Me+1)+re*ve;l.push(Qe,st,ce),l.push(st,Z,ce),$+=6}a.addGroup(p,$,te),p+=$,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(r){const e={};for(let t=0;t<r.length;t++){const n=or(r[t]);for(const i in n)e[i]=n[i]}return e}function Vf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ch(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Gf={clone:or,merge:zt};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=Vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ih extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new z,Fc=new it,Bc=new it;class Vt extends Ih{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Fc,Bc),t.subVectors(Bc,Fc)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Vi=1;class $f extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vt(Hi,Vi,e,t);i.layers=this.layers,this.add(i);const s=new Vt(Hi,Vi,e,t);s.layers=this.layers,this.add(s);const o=new Vt(Hi,Vi,e,t);o.layers=this.layers,this.add(o);const a=new Vt(Hi,Vi,e,t);a.layers=this.layers,this.add(a);const l=new Vt(Hi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Hi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ph extends Rt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qf extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ph(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ri(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:ti});s.uniforms.tEquirect.value=t;const o=new Ut(i,s),a=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Kt),new $f(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const yo=new z,jf=new z,Kf=new He;class gi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=yo.subVectors(n,t).cross(jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kf.getNormalMatrix(e),i=this.coplanarPoint(yo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new En,ls=new z;class Za{constructor(e=new gi,t=new gi,n=new gi,i=new gi,s=new gi,o=new gi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],p=i[8],_=i[9],y=i[10],m=i[11],g=i[12],b=i[13],T=i[14],w=i[15];if(n[0].setComponents(l-s,f-c,m-p,w-g).normalize(),n[1].setComponents(l+s,f+c,m+p,w+g).normalize(),n[2].setComponents(l+o,f+u,m+_,w+b).normalize(),n[3].setComponents(l-o,f-u,m-_,w-b).normalize(),n[4].setComponents(l-a,f-h,m-y,w-T).normalize(),t===Bn)n[5].setComponents(l+a,f+h,m+y,w+T).normalize();else if(t===Os)n[5].setComponents(a,h,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ls.x=i.normal.x>0?e.max.x:e.min.x,ls.y=i.normal.y>0?e.max.y:e.min.y,ls.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Yf(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],y=h[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const y=h[p];r.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Xr extends _n{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,p=[],_=[],y=[],m=[];for(let g=0;g<u;g++){const b=g*f-o;for(let T=0;T<c;T++){const w=T*h-s;_.push(w,-b,0),y.push(0,0,1),m.push(T/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){const T=b+c*g,w=b+c*(g+1),O=b+1+c*(g+1),N=b+1+c*g;p.push(T,w,N),p.push(w,O,N)}this.setIndex(p),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(y,3)),this.setAttribute("uv",new mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
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
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,id=`#ifdef USE_AOMAP
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
#endif`,rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sd=`#ifdef USE_BATCHING
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
#endif`,od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hd=`#ifdef USE_IRIDESCENCE
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
#endif`,ud=`#ifdef USE_BUMPMAP
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yd=`#define PI 3.141592653589793
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
} // validated`,Md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rd=`
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
}`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
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
}`,kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vd=`uniform bool receiveShadow;
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
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jd=`PhysicalMaterial material;
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
#endif`,Kd=`struct PhysicalMaterial {
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
}`,Yd=`
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
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,op=`#if defined( USE_POINTS_UV )
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
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
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
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
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
#endif`,yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Up=`float getShadowMask() {
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
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`#include <common>
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
}`,im=`#if DEPTH_PACKING == 3200
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
}`,rm=`#define DISTANCE
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
}`,sm=`#define DISTANCE
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`uniform float scale;
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
}`,lm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,um=`uniform vec3 diffuse;
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
}`,fm=`#define LAMBERT
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
}`,dm=`#define LAMBERT
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
}`,pm=`#define MATCAP
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
}`,mm=`#define MATCAP
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
}`,gm=`#define NORMAL
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
}`,_m=`#define NORMAL
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
}`,vm=`#define PHONG
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
}`,xm=`#define PHONG
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
}`,ym=`#define STANDARD
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
}`,Mm=`#define STANDARD
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
}`,Sm=`#define TOON
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
}`,Em=`#define TOON
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
}`,Am=`uniform float size;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,wm=`uniform vec3 color;
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
}`,Rm=`uniform float rotation;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Zf,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:ed,alphatest_fragment:td,alphatest_pars_fragment:nd,aomap_fragment:id,aomap_pars_fragment:rd,batching_pars_vertex:sd,batching_vertex:od,begin_vertex:ad,beginnormal_vertex:cd,bsdfs:ld,iridescence_fragment:hd,bumpmap_pars_fragment:ud,clipping_planes_fragment:fd,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:pd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:_d,color_pars_vertex:vd,color_vertex:xd,common:yd,cube_uv_reflection_fragment:Md,defaultnormal_vertex:Sd,displacementmap_pars_vertex:Ed,displacementmap_vertex:Ad,emissivemap_fragment:Td,emissivemap_pars_fragment:bd,colorspace_fragment:wd,colorspace_pars_fragment:Rd,envmap_fragment:Cd,envmap_common_pars_fragment:Id,envmap_pars_fragment:Pd,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Gd,envmap_vertex:Dd,fog_vertex:Nd,fog_pars_vertex:Ud,fog_fragment:Od,fog_pars_fragment:Fd,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:kd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:Hd,lights_pars_begin:Vd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Xd,lights_phong_fragment:$d,lights_phong_pars_fragment:qd,lights_physical_fragment:jd,lights_physical_pars_fragment:Kd,lights_fragment_begin:Yd,lights_fragment_maps:Zd,lights_fragment_end:Jd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:rp,map_particle_fragment:sp,map_particle_pars_fragment:op,metalnessmap_fragment:ap,metalnessmap_pars_fragment:cp,morphinstance_vertex:lp,morphcolor_vertex:hp,morphnormal_vertex:up,morphtarget_pars_vertex:fp,morphtarget_vertex:dp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:vp,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:yp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:Ep,opaque_fragment:Ap,packing:Tp,premultiplied_alpha_fragment:bp,project_vertex:wp,dithering_fragment:Rp,dithering_pars_fragment:Cp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Dp,shadowmap_vertex:Np,shadowmask_pars_fragment:Up,skinbase_vertex:Op,skinning_pars_vertex:Fp,skinning_vertex:Bp,skinnormal_vertex:kp,specularmap_fragment:zp,specularmap_pars_fragment:Hp,tonemapping_fragment:Vp,tonemapping_pars_fragment:Gp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:$p,uv_pars_vertex:qp,uv_vertex:jp,worldpos_vertex:Kp,background_vert:Yp,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:Qp,cube_vert:em,cube_frag:tm,depth_vert:nm,depth_frag:im,distanceRGBA_vert:rm,distanceRGBA_frag:sm,equirect_vert:om,equirect_frag:am,linedashed_vert:cm,linedashed_frag:lm,meshbasic_vert:hm,meshbasic_frag:um,meshlambert_vert:fm,meshlambert_frag:dm,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:gm,meshnormal_frag:_m,meshphong_vert:vm,meshphong_frag:xm,meshphysical_vert:ym,meshphysical_frag:Mm,meshtoon_vert:Sm,meshtoon_frag:Em,points_vert:Am,points_frag:Tm,shadow_vert:bm,shadow_frag:wm,sprite_vert:Rm,sprite_frag:Cm},ue={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},xn={basic:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:zt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:zt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:zt([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:zt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:zt([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:zt([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:zt([ue.common,ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:zt([ue.lights,ue.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};xn.physical={uniforms:zt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const hs={r:0,b:0,g:0},li=new Sn,Im=new ke;function Pm(r,e,t,n,i,s,o){const a=new Oe(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function _(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?t:e).get(T)),T}function y(b){let T=!1;const w=_(b);w===null?g(a,l):w&&w.isColor&&(g(w,1),T=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,T){const w=_(T);w&&(w.isCubeTexture||w.mapping===Gs)?(u===void 0&&(u=new Ut(new Ri(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:or(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),li.copy(T.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(li)),u.material.toneMapped=ot.getTransfer(w.colorSpace)!==_t,(h!==w||f!==w.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,p=r.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ut(new Xr(2,2),new ri({name:"BackgroundMaterial",uniforms:or(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ot.getTransfer(w.colorSpace)!==_t,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,p=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,T){b.getRGB(hs,Ch(r)),n.buffers.color.setClear(hs.r,hs.g,hs.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),l=T,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,g(a,l)},render:y,addToRenderList:m}}function Lm(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(S,R,K,W,ne){let re=!1;const j=h(W,K,R);s!==j&&(s=j,c(s.object)),re=p(S,W,K,ne),re&&_(S,W,K,ne),ne!==null&&e.update(ne,r.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,w(S,R,K,W),ne!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,R,K){const W=K.wireframe===!0;let ne=n[S.id];ne===void 0&&(ne={},n[S.id]=ne);let re=ne[R.id];re===void 0&&(re={},ne[R.id]=re);let j=re[W];return j===void 0&&(j=f(l()),re[W]=j),j}function f(S){const R=[],K=[],W=[];for(let ne=0;ne<t;ne++)R[ne]=0,K[ne]=0,W[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:K,attributeDivisors:W,object:S,attributes:{},index:null}}function p(S,R,K,W){const ne=s.attributes,re=R.attributes;let j=0;const Q=K.getAttributes();for(const $ in Q)if(Q[$].location>=0){const ve=ne[$];let Me=re[$];if(Me===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),ve===void 0||ve.attribute!==Me||Me&&ve.data!==Me.data)return!0;j++}return s.attributesNum!==j||s.index!==W}function _(S,R,K,W){const ne={},re=R.attributes;let j=0;const Q=K.getAttributes();for(const $ in Q)if(Q[$].location>=0){let ve=re[$];ve===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor));const Me={};Me.attribute=ve,ve&&ve.data&&(Me.data=ve.data),ne[$]=Me,j++}s.attributes=ne,s.attributesNum=j,s.index=W}function y(){const S=s.newAttributes;for(let R=0,K=S.length;R<K;R++)S[R]=0}function m(S){g(S,0)}function g(S,R){const K=s.newAttributes,W=s.enabledAttributes,ne=s.attributeDivisors;K[S]=1,W[S]===0&&(r.enableVertexAttribArray(S),W[S]=1),ne[S]!==R&&(r.vertexAttribDivisor(S,R),ne[S]=R)}function b(){const S=s.newAttributes,R=s.enabledAttributes;for(let K=0,W=R.length;K<W;K++)R[K]!==S[K]&&(r.disableVertexAttribArray(K),R[K]=0)}function T(S,R,K,W,ne,re,j){j===!0?r.vertexAttribIPointer(S,R,K,ne,re):r.vertexAttribPointer(S,R,K,W,ne,re)}function w(S,R,K,W){y();const ne=W.attributes,re=K.getAttributes(),j=R.defaultAttributeValues;for(const Q in re){const $=re[Q];if($.location>=0){let ye=ne[Q];if(ye===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),ye!==void 0){const ve=ye.normalized,Me=ye.itemSize,Qe=e.get(ye);if(Qe===void 0)continue;const st=Qe.buffer,Z=Qe.type,ce=Qe.bytesPerElement,Se=Z===r.INT||Z===r.UNSIGNED_INT||ye.gpuType===Ha;if(ye.isInterleavedBufferAttribute){const Ee=ye.data,Fe=Ee.stride,Le=ye.offset;if(Ee.isInstancedInterleavedBuffer){for(let Xe=0;Xe<$.locationSize;Xe++)g($.location+Xe,Ee.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Xe=0;Xe<$.locationSize;Xe++)m($.location+Xe);r.bindBuffer(r.ARRAY_BUFFER,st);for(let Xe=0;Xe<$.locationSize;Xe++)T($.location+Xe,Me/$.locationSize,Z,ve,Fe*ce,(Le+Me/$.locationSize*Xe)*ce,Se)}else{if(ye.isInstancedBufferAttribute){for(let Ee=0;Ee<$.locationSize;Ee++)g($.location+Ee,ye.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ee=0;Ee<$.locationSize;Ee++)m($.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,st);for(let Ee=0;Ee<$.locationSize;Ee++)T($.location+Ee,Me/$.locationSize,Z,ve,Me*ce,Me/$.locationSize*Ee*ce,Se)}}else if(j!==void 0){const ve=j[Q];if(ve!==void 0)switch(ve.length){case 2:r.vertexAttrib2fv($.location,ve);break;case 3:r.vertexAttrib3fv($.location,ve);break;case 4:r.vertexAttrib4fv($.location,ve);break;default:r.vertexAttrib1fv($.location,ve)}}}}b()}function O(){H();for(const S in n){const R=n[S];for(const K in R){const W=R[K];for(const ne in W)u(W[ne].object),delete W[ne];delete R[K]}delete n[S]}}function N(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const K in R){const W=R[K];for(const ne in W)u(W[ne].object),delete W[ne];delete R[K]}delete n[S.id]}function I(S){for(const R in n){const K=n[R];if(K[S.id]===void 0)continue;const W=K[S.id];for(const ne in W)u(W[ne].object),delete W[ne];delete K[S.id]}}function H(){te(),o=!0,s!==i&&(s=i,c(s.object))}function te(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:H,resetDefaultState:te,dispose:O,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function Dm(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=u[y];for(let y=0;y<f.length;y++)t.update(_,n,f[y])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Nm(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==Qt&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const H=I===Wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==zn&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==fn&&!H)}function l(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const I=e.get("EXT_clip_control");I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT)}const p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:w,vertexTextures:O,maxSamples:N}}function Um(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new gi,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,g=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,T=b*4;let w=g.clippingState||null;l.value=w,w=u(_,f,T,p);for(let O=0;O!==T;++O)w[O]=t[O];g.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const g=p+y*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,w=p;T!==y;++T,w+=4)o.copy(h[T]).applyMatrix4(b,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Om(r){let e=new WeakMap;function t(o,a){return a===na?o.mapping=er:a===ia&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===na||a===ia)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qf(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ja extends Ih{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ji=4,kc=[.125,.215,.35,.446,.526,.582],xi=20,Mo=new Ja,zc=new Oe;let So=null,Eo=0,Ao=0,To=!1;const _i=(1+Math.sqrt(5))/2,Gi=1/_i,Hc=[new z(-_i,Gi,0),new z(_i,Gi,0),new z(-Gi,0,_i),new z(Gi,0,_i),new z(0,_i,-Gi),new z(0,_i,Gi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){So=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(So,Eo,Ao),this._renderer.xr.enabled=To,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),So=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Wr,format:Qt,colorSpace:It,depthBuffer:!1},i=Gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fm(s)),this._blurMaterial=Bm(s,e,t)}return i}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,n,i){const a=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(zc),u.toneMapping=ni,u.autoClear=!1;const p=new yi({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),_=new Ut(new Ri,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(zc),y=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):b===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const T=this._cubeSize;us(i,b*T,g>2?T:0,T,T),u.setRenderTarget(i),y&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===er||e.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;us(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Mo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Hc[(i-s-1)%Hc.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ut(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xi-1),y=s/_,m=isFinite(s)?1+Math.floor(u*y):xi;m>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const g=[];let b=0;for(let I=0;I<xi;++I){const H=I/y,te=Math.exp(-H*H/2);g.push(te),I===0?b+=te:I<m&&(b+=2*te)}for(let I=0;I<g.length;I++)g[I]=g[I]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-n;const w=this._sizeLods[i],O=3*w*(i>T-ji?i-T+ji:0),N=4*(this._cubeSize-w);us(t,O,N,3*w,2*w),l.setRenderTarget(t),l.render(h,Mo)}}function Fm(r){const e=[],t=[],n=[];let i=r;const s=r-ji+1+kc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ji?l=kc[o-r+ji-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,y=3,m=2,g=1,b=new Float32Array(y*_*p),T=new Float32Array(m*_*p),w=new Float32Array(g*_*p);for(let N=0;N<p;N++){const I=N%3*2/3-1,H=N>2?0:-1,te=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];b.set(te,y*_*N),T.set(f,m*_*N);const S=[N,N,N,N,N,N];w.set(S,g*_*N)}const O=new _n;O.setAttribute("position",new Wt(b,y)),O.setAttribute("uv",new Wt(T,m)),O.setAttribute("faceIndex",new Wt(w,g)),e.push(O),i>ji&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gc(r,e,t){const n=new Ti(r,e,t);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Bm(r,e,t){const n=new Float32Array(xi),i=new z(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Wc(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Xc(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Qa(){return`

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
	`}function km(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===na||l===ia,u=l===er||l===tr;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Vc(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Vc(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function zm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Rs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hm(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let m=0,g=y.length;m<g;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,g=y.length;m<g;m++)e.update(y[m],r.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,_=h.attributes.position;let y=0;if(p!==null){const b=p.array;y=p.version;for(let T=0,w=b.length;T<w;T+=3){const O=b[T+0],N=b[T+1],I=b[T+2];f.push(O,N,N,I,I,O)}}else if(_!==void 0){const b=_.array;y=_.version;for(let T=0,w=b.length/3-1;T<w;T+=3){const O=T+0,N=T+1,I=T+2;f.push(O,N,N,I,I,O)}}else return;const m=new(Sh(f)?Rh:wh)(f,1);m.version=y;const g=s.get(h);g&&e.remove(g),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Vm(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){r.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,_){_!==0&&(r.drawElementsInstanced(n,p,s,f*o,_),t.update(p,n,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,_);let m=0;for(let g=0;g<_;g++)m+=p[g];t.update(m,n,1)}function h(f,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,p[g],y[g]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,y,0,_);let g=0;for(let b=0;b<_;b++)g+=p[b];for(let b=0;b<y.length;b++)t.update(g,n,y[b])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Gm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wm(r,e,t){const n=new WeakMap,i=new ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){H.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),y===!0&&(w=2),m===!0&&(w=3);let O=a.attributes.position.count*w,N=1;O>e.maxTextureSize&&(N=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const I=new Float32Array(O*N*4*h),H=new Ah(I,O,N,h);H.type=fn,H.needsUpdate=!0;const te=w*4;for(let R=0;R<h;R++){const K=g[R],W=b[R],ne=T[R],re=O*N*4*R;for(let j=0;j<K.count;j++){const Q=j*te;_===!0&&(i.fromBufferAttribute(K,j),I[re+Q+0]=i.x,I[re+Q+1]=i.y,I[re+Q+2]=i.z,I[re+Q+3]=0),y===!0&&(i.fromBufferAttribute(W,j),I[re+Q+4]=i.x,I[re+Q+5]=i.y,I[re+Q+6]=i.z,I[re+Q+7]=0),m===!0&&(i.fromBufferAttribute(ne,j),I[re+Q+8]=i.x,I[re+Q+9]=i.y,I[re+Q+10]=i.z,I[re+Q+11]=ne.itemSize===4?i.w:1)}}f={count:h,texture:H,size:new it(O,N)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",y),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Xm(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Dh extends Rt{constructor(e,t,n,i,s,o,a,l,c,u=Yi){if(u!==Yi&&u!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Yi&&(n=Ai),n===void 0&&u===rr&&(n=ir),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nh=new Rt,$c=new Dh(1,1),Uh=new Ah,Oh=new Pf,Fh=new Ph,qc=[],jc=[],Kc=new Float32Array(16),Yc=new Float32Array(9),Zc=new Float32Array(4);function ur(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=qc[i];if(s===void 0&&(s=new Float32Array(i),qc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Et(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function At(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function $s(r,e){let t=jc[e];t===void 0&&(t=new Int32Array(e),jc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function $m(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2fv(this.addr,e),At(t,e)}}function jm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;r.uniform3fv(this.addr,e),At(t,e)}}function Km(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4fv(this.addr,e),At(t,e)}}function Ym(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Zc.set(n),r.uniformMatrix2fv(this.addr,!1,Zc),At(t,n)}}function Zm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Yc.set(n),r.uniformMatrix3fv(this.addr,!1,Yc),At(t,n)}}function Jm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Kc.set(n),r.uniformMatrix4fv(this.addr,!1,Kc),At(t,n)}}function Qm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function eg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2iv(this.addr,e),At(t,e)}}function tg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3iv(this.addr,e),At(t,e)}}function ng(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4iv(this.addr,e),At(t,e)}}function ig(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2uiv(this.addr,e),At(t,e)}}function sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3uiv(this.addr,e),At(t,e)}}function og(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4uiv(this.addr,e),At(t,e)}}function ag(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?($c.compareFunction=Mh,s=$c):s=Nh,t.setTexture2D(e||s,i)}function cg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Oh,i)}function lg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Fh,i)}function hg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Uh,i)}function ug(r){switch(r){case 5126:return $m;case 35664:return qm;case 35665:return jm;case 35666:return Km;case 35674:return Ym;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return rg;case 36295:return sg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return hg}}function fg(r,e){r.uniform1fv(this.addr,e)}function dg(r,e){const t=ur(e,this.size,2);r.uniform2fv(this.addr,t)}function pg(r,e){const t=ur(e,this.size,3);r.uniform3fv(this.addr,t)}function mg(r,e){const t=ur(e,this.size,4);r.uniform4fv(this.addr,t)}function gg(r,e){const t=ur(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function _g(r,e){const t=ur(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vg(r,e){const t=ur(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xg(r,e){r.uniform1iv(this.addr,e)}function yg(r,e){r.uniform2iv(this.addr,e)}function Mg(r,e){r.uniform3iv(this.addr,e)}function Sg(r,e){r.uniform4iv(this.addr,e)}function Eg(r,e){r.uniform1uiv(this.addr,e)}function Ag(r,e){r.uniform2uiv(this.addr,e)}function Tg(r,e){r.uniform3uiv(this.addr,e)}function bg(r,e){r.uniform4uiv(this.addr,e)}function wg(r,e,t){const n=this.cache,i=e.length,s=$s(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Nh,s[o])}function Rg(r,e,t){const n=this.cache,i=e.length,s=$s(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Oh,s[o])}function Cg(r,e,t){const n=this.cache,i=e.length,s=$s(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Fh,s[o])}function Ig(r,e,t){const n=this.cache,i=e.length,s=$s(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Uh,s[o])}function Pg(r){switch(r){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return xg;case 35667:case 35671:return yg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return Eg;case 36294:return Ag;case 36295:return Tg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Ig}}class Lg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ug(t.type)}}class Dg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pg(t.type)}}class Ng{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function Jc(r,e){r.seq.push(e),r.map[e.id]=e}function Ug(r,e,t){const n=r.name,i=n.length;for(bo.lastIndex=0;;){const s=bo.exec(n),o=bo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Jc(t,c===void 0?new Lg(a,r,e):new Dg(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Ng(a),Jc(t,h)),t=h}}}class Cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ug(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Qc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Og=37297;let Fg=0;function Bg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function kg(r){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(r);let n;switch(e===t?n="":e===Us&&t===Ns?n="LinearDisplayP3ToLinearSRGB":e===Ns&&t===Us&&(n="LinearSRGBToLinearDisplayP3"),r){case It:case Ws:return[n,"LinearTransferOETF"];case Ht:case Ka:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function el(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Bg(r.getShaderSource(e),o)}else return i}function zg(r,e){const t=kg(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hg(r,e){let t;switch(e){case Ou:t="Linear";break;case Fu:t="Reinhard";break;case Bu:t="Cineon";break;case ku:t="ACESFilmic";break;case Hu:t="AgX";break;case Vu:t="Neutral";break;case zu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fs=new z;function Vg(){ot.getLuminanceCoefficients(fs);const r=fs.x.toFixed(4),e=fs.y.toFixed(4),t=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function Wg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xg(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Nr(r){return r!==""}function tl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(r){return r.replace($g,jg)}const qg=new Map;function jg(r,e){let t=ze[e];if(t===void 0){const n=qg.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return La(t)}const Kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function il(r){return r.replace(Kg,Yg)}function Yg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function rl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function Jg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case Gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function e_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ah:e="ENVMAP_BLENDING_MULTIPLY";break;case Nu:e="ENVMAP_BLENDING_MIX";break;case Uu:e="ENVMAP_BLENDING_ADD";break}return e}function t_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function n_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Zg(t),c=Jg(t),u=Qg(t),h=e_(t),f=t_(t),p=Gg(t),_=Wg(s),y=i.createProgram();let m,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Nr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Nr).join(`
`),g.length>0&&(g+=`
`)):(m=[rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),g=[rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?ze.tonemapping_pars_fragment:"",t.toneMapping!==ni?Hg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,zg("linearToOutputTexel",t.outputColorSpace),Vg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),o=La(o),o=tl(o,t),o=nl(o,t),a=La(a),a=tl(a,t),a=nl(a,t),o=il(o),a=il(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=b+m+o,w=b+g+a,O=Qc(i,i.VERTEX_SHADER,T),N=Qc(i,i.FRAGMENT_SHADER,w);i.attachShader(y,O),i.attachShader(y,N),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function I(R){if(r.debug.checkShaderErrors){const K=i.getProgramInfoLog(y).trim(),W=i.getShaderInfoLog(O).trim(),ne=i.getShaderInfoLog(N).trim();let re=!0,j=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(re=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,y,O,N);else{const Q=el(i,O,"vertex"),$=el(i,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+K+`
`+Q+`
`+$)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(W===""||ne==="")&&(j=!1);j&&(R.diagnostics={runnable:re,programLog:K,vertexShader:{log:W,prefix:m},fragmentShader:{log:ne,prefix:g}})}i.deleteShader(O),i.deleteShader(N),H=new Cs(i,y),te=Xg(i,y)}let H;this.getUniforms=function(){return H===void 0&&I(this),H};let te;this.getAttributes=function(){return te===void 0&&I(this),te};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(y,Og)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=N,this}let i_=0;class r_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new s_(e),t.set(e,n)),n}}class s_{constructor(e){this.id=i_++,this.code=e,this.usedTimes=0}}function o_(r,e,t,n,i,s,o){const a=new Th,l=new r_,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,p=i.vertexTextures;let _=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,R,K,W,ne){const re=W.fog,j=ne.geometry,Q=S.isMeshStandardMaterial?W.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||Q),ye=$&&$.mapping===Gs?$.image.height:null,ve=y[S.type];S.precision!==null&&(_=i.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const Me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Qe=Me!==void 0?Me.length:0;let st=0;j.morphAttributes.position!==void 0&&(st=1),j.morphAttributes.normal!==void 0&&(st=2),j.morphAttributes.color!==void 0&&(st=3);let Z,ce,Se,Ee;if(ve){const pt=xn[ve];Z=pt.vertexShader,ce=pt.fragmentShader}else Z=S.vertexShader,ce=S.fragmentShader,l.update(S),Se=l.getVertexShaderID(S),Ee=l.getFragmentShaderID(S);const Fe=r.getRenderTarget(),Le=ne.isInstancedMesh===!0,Xe=ne.isBatchedMesh===!0,lt=!!S.map,Ge=!!S.matcap,D=!!$,Ct=!!S.aoMap,je=!!S.lightMap,Ze=!!S.bumpMap,Ie=!!S.normalMap,dt=!!S.displacementMap,De=!!S.emissiveMap,C=!!S.metalnessMap,E=!!S.roughnessMap,G=S.anisotropy>0,ee=S.clearcoat>0,se=S.dispersion>0,J=S.iridescence>0,we=S.sheen>0,fe=S.transmission>0,Ae=G&&!!S.anisotropyMap,Ke=ee&&!!S.clearcoatMap,le=ee&&!!S.clearcoatNormalMap,Te=ee&&!!S.clearcoatRoughnessMap,Ne=J&&!!S.iridescenceMap,Ue=J&&!!S.iridescenceThicknessMap,pe=we&&!!S.sheenColorMap,Ye=we&&!!S.sheenRoughnessMap,Be=!!S.specularMap,ut=!!S.specularColorMap,F=!!S.specularIntensityMap,me=fe&&!!S.transmissionMap,X=fe&&!!S.thicknessMap,ie=!!S.gradientMap,ge=!!S.alphaMap,_e=S.alphaTest>0,Je=!!S.alphaHash,vt=!!S.extensions;let Pt=ni;S.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Pt=r.toneMapping);const rt={shaderID:ve,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:ce,defines:S.defines,customVertexShaderID:Se,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Xe,batchingColor:Xe&&ne._colorsTexture!==null,instancing:Le,instancingColor:Le&&ne.instanceColor!==null,instancingMorph:Le&&ne.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Fe===null?r.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:It,alphaToCoverage:!!S.alphaToCoverage,map:lt,matcap:Ge,envMap:D,envMapMode:D&&$.mapping,envMapCubeUVHeight:ye,aoMap:Ct,lightMap:je,bumpMap:Ze,normalMap:Ie,displacementMap:p&&dt,emissiveMap:De,normalMapObjectSpace:Ie&&S.normalMapType===Zu,normalMapTangentSpace:Ie&&S.normalMapType===yh,metalnessMap:C,roughnessMap:E,anisotropy:G,anisotropyMap:Ae,clearcoat:ee,clearcoatMap:Ke,clearcoatNormalMap:le,clearcoatRoughnessMap:Te,dispersion:se,iridescence:J,iridescenceMap:Ne,iridescenceThicknessMap:Ue,sheen:we,sheenColorMap:pe,sheenRoughnessMap:Ye,specularMap:Be,specularColorMap:ut,specularIntensityMap:F,transmission:fe,transmissionMap:me,thicknessMap:X,gradientMap:ie,opaque:S.transparent===!1&&S.blending===Ki&&S.alphaToCoverage===!1,alphaMap:ge,alphaTest:_e,alphaHash:Je,combine:S.combine,mapUv:lt&&m(S.map.channel),aoMapUv:Ct&&m(S.aoMap.channel),lightMapUv:je&&m(S.lightMap.channel),bumpMapUv:Ze&&m(S.bumpMap.channel),normalMapUv:Ie&&m(S.normalMap.channel),displacementMapUv:dt&&m(S.displacementMap.channel),emissiveMapUv:De&&m(S.emissiveMap.channel),metalnessMapUv:C&&m(S.metalnessMap.channel),roughnessMapUv:E&&m(S.roughnessMap.channel),anisotropyMapUv:Ae&&m(S.anisotropyMap.channel),clearcoatMapUv:Ke&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(S.sheenRoughnessMap.channel),specularMapUv:Be&&m(S.specularMap.channel),specularColorMapUv:ut&&m(S.specularColorMap.channel),specularIntensityMapUv:F&&m(S.specularIntensityMap.channel),transmissionMapUv:me&&m(S.transmissionMap.channel),thicknessMapUv:X&&m(S.thicknessMap.channel),alphaMapUv:ge&&m(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ie||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!j.attributes.uv&&(lt||ge),fog:!!re,useFog:S.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:ne.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Qe,morphTextureStride:st,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&K.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pt,decodeVideoTexture:lt&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yn,flipSided:S.side===Xt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:vt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&S.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function b(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const K in S.defines)R.push(K),R.push(S.defines[K]);return S.isRawShaderMaterial===!1&&(T(R,S),w(R,S),R.push(r.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function T(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function w(S,R){a.disableAll(),R.supportsVertexTextures&&a.enable(0),R.instancing&&a.enable(1),R.instancingColor&&a.enable(2),R.instancingMorph&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),R.dispersion&&a.enable(20),R.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reverseDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),S.push(a.mask)}function O(S){const R=y[S.type];let K;if(R){const W=xn[R];K=Gf.clone(W.uniforms)}else K=S.uniforms;return K}function N(S,R){let K;for(let W=0,ne=u.length;W<ne;W++){const re=u[W];if(re.cacheKey===R){K=re,++K.usedTimes;break}}return K===void 0&&(K=new n_(r,R,S,s),u.push(K)),K}function I(S){if(--S.usedTimes===0){const R=u.indexOf(S);u[R]=u[u.length-1],u.pop(),S.destroy()}}function H(S){l.remove(S)}function te(){l.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:O,acquireProgram:N,releaseProgram:I,releaseShaderCache:H,programs:u,dispose:te}}function a_(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function c_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function sl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ol(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,p,_,y,m){let g=r[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},r[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=p,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=y,g.group=m),e++,g}function a(h,f,p,_,y,m){const g=o(h,f,p,_,y,m);p.transmission>0?n.push(g):p.transparent===!0?i.push(g):t.push(g)}function l(h,f,p,_,y,m){const g=o(h,f,p,_,y,m);p.transmission>0?n.unshift(g):p.transparent===!0?i.unshift(g):t.unshift(g)}function c(h,f){t.length>1&&t.sort(h||c_),n.length>1&&n.sort(f||sl),i.length>1&&i.sort(f||sl)}function u(){for(let h=e,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function l_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new ol,r.set(n,[o])):i>=s.length?(o=new ol,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function h_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Oe};break;case"SpotLight":t={position:new z,direction:new z,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function u_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let f_=0;function d_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function p_(r){const e=new h_,t=u_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,s=new ke,o=new ke;function a(c){let u=0,h=0,f=0;for(let te=0;te<9;te++)n.probe[te].set(0,0,0);let p=0,_=0,y=0,m=0,g=0,b=0,T=0,w=0,O=0,N=0,I=0;c.sort(d_);for(let te=0,S=c.length;te<S;te++){const R=c[te],K=R.color,W=R.intensity,ne=R.distance,re=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=K.r*W,h+=K.g*W,f+=K.b*W;else if(R.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(R.sh.coefficients[j],W);I++}else if(R.isDirectionalLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,$=t.get(R);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=R.shadow.matrix,b++}n.directional[p]=j,p++}else if(R.isSpotLight){const j=e.get(R);j.position.setFromMatrixPosition(R.matrixWorld),j.color.copy(K).multiplyScalar(W),j.distance=ne,j.coneCos=Math.cos(R.angle),j.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),j.decay=R.decay,n.spot[y]=j;const Q=R.shadow;if(R.map&&(n.spotLightMap[O]=R.map,O++,Q.updateMatrices(R),R.castShadow&&N++),n.spotLightMatrix[y]=Q.matrix,R.castShadow){const $=t.get(R);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,n.spotShadow[y]=$,n.spotShadowMap[y]=re,w++}y++}else if(R.isRectAreaLight){const j=e.get(R);j.color.copy(K).multiplyScalar(W),j.halfWidth.set(R.width*.5,0,0),j.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=j,m++}else if(R.isPointLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),j.distance=R.distance,j.decay=R.decay,R.castShadow){const Q=R.shadow,$=t.get(R);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=re,n.pointShadowMatrix[_]=R.shadow.matrix,T++}n.point[_]=j,_++}else if(R.isHemisphereLight){const j=e.get(R);j.skyColor.copy(R.color).multiplyScalar(W),j.groundColor.copy(R.groundColor).multiplyScalar(W),n.hemi[g]=j,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const H=n.hash;(H.directionalLength!==p||H.pointLength!==_||H.spotLength!==y||H.rectAreaLength!==m||H.hemiLength!==g||H.numDirectionalShadows!==b||H.numPointShadows!==T||H.numSpotShadows!==w||H.numSpotMaps!==O||H.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=_,n.hemi.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=w+O-N,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=I,H.directionalLength=p,H.pointLength=_,H.spotLength=y,H.rectAreaLength=m,H.hemiLength=g,H.numDirectionalShadows=b,H.numPointShadows=T,H.numSpotShadows=w,H.numSpotMaps=O,H.numLightProbes=I,n.version=f_++)}function l(c,u){let h=0,f=0,p=0,_=0,y=0;const m=u.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){const T=c[g];if(T.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),h++}else if(T.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const w=n.hemi[y];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function al(r){const e=new p_(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function m_(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new al(r),e.set(i,[a])):s>=o.length?(a=new al(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class g_ extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class __ extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
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
}`;function y_(r,e,t){let n=new Za;const i=new it,s=new it,o=new ct,a=new g_({depthPacking:Yu}),l=new __,c={},u=t.maxTextureSize,h={[kn]:Xt,[Xt]:kn,[yn]:yn},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:v_,fragmentShader:x_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ut(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oh;let g=this.type;this.render=function(N,I,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;const te=r.getRenderTarget(),S=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),K=r.state;K.setBlending(ti),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const W=g!==Un&&this.type===Un,ne=g===Un&&this.type!==Un;for(let re=0,j=N.length;re<j;re++){const Q=N[re],$=Q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const ye=$.getFrameExtents();if(i.multiply(ye),s.copy($.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ye.x),i.x=s.x*ye.x,$.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ye.y),i.y=s.y*ye.y,$.mapSize.y=s.y)),$.map===null||W===!0||ne===!0){const Me=this.type!==Un?{minFilter:Gt,magFilter:Gt}:{};$.map!==null&&$.map.dispose(),$.map=new Ti(i.x,i.y,Me),$.map.texture.name=Q.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();const ve=$.getViewportCount();for(let Me=0;Me<ve;Me++){const Qe=$.getViewport(Me);o.set(s.x*Qe.x,s.y*Qe.y,s.x*Qe.z,s.y*Qe.w),K.viewport(o),$.updateMatrices(Q,Me),n=$.getFrustum(),w(I,H,$.camera,Q,this.type)}$.isPointLightShadow!==!0&&this.type===Un&&b($,H),$.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(te,S,R)};function b(N,I){const H=e.update(y);f.defines.VSM_SAMPLES!==N.blurSamples&&(f.defines.VSM_SAMPLES=N.blurSamples,p.defines.VSM_SAMPLES=N.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ti(i.x,i.y)),f.uniforms.shadow_pass.value=N.map.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(I,null,H,f,y,null),p.uniforms.shadow_pass.value=N.mapPass.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(I,null,H,p,y,null)}function T(N,I,H,te){let S=null;const R=H.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(R!==void 0)S=R;else if(S=H.isPointLight===!0?l:a,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const K=S.uuid,W=I.uuid;let ne=c[K];ne===void 0&&(ne={},c[K]=ne);let re=ne[W];re===void 0&&(re=S.clone(),ne[W]=re,I.addEventListener("dispose",O)),S=re}if(S.visible=I.visible,S.wireframe=I.wireframe,te===Un?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:h[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,H.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const K=r.properties.get(S);K.light=H}return S}function w(N,I,H,te,S){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&S===Un)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,N.matrixWorld);const W=e.update(N),ne=N.material;if(Array.isArray(ne)){const re=W.groups;for(let j=0,Q=re.length;j<Q;j++){const $=re[j],ye=ne[$.materialIndex];if(ye&&ye.visible){const ve=T(N,ye,te,S);N.onBeforeShadow(r,N,I,H,W,ve,$),r.renderBufferDirect(H,null,W,ve,N,$),N.onAfterShadow(r,N,I,H,W,ve,$)}}}else if(ne.visible){const re=T(N,ne,te,S);N.onBeforeShadow(r,N,I,H,W,re,null),r.renderBufferDirect(H,null,W,re,N,null),N.onAfterShadow(r,N,I,H,W,re,null)}}const K=N.children;for(let W=0,ne=K.length;W<ne;W++)w(K[W],I,H,te,S)}function O(N){N.target.removeEventListener("dispose",O);for(const H in c){const te=c[H],S=N.target.uuid;S in te&&(te[S].dispose(),delete te[S])}}}const M_={[Ko]:Yo,[Zo]:ea,[Jo]:ta,[Qi]:Qo,[Yo]:Ko,[ea]:Zo,[ta]:Jo,[Qo]:Qi};function S_(r){function e(){let F=!1;const me=new ct;let X=null;const ie=new ct(0,0,0,0);return{setMask:function(ge){X!==ge&&!F&&(r.colorMask(ge,ge,ge,ge),X=ge)},setLocked:function(ge){F=ge},setClear:function(ge,_e,Je,vt,Pt){Pt===!0&&(ge*=vt,_e*=vt,Je*=vt),me.set(ge,_e,Je,vt),ie.equals(me)===!1&&(r.clearColor(ge,_e,Je,vt),ie.copy(me))},reset:function(){F=!1,X=null,ie.set(-1,0,0,0)}}}function t(){let F=!1,me=!1,X=null,ie=null,ge=null;return{setReversed:function(_e){me=_e},setTest:function(_e){_e?Se(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(_e){X!==_e&&!F&&(r.depthMask(_e),X=_e)},setFunc:function(_e){if(me&&(_e=M_[_e]),ie!==_e){switch(_e){case Ko:r.depthFunc(r.NEVER);break;case Yo:r.depthFunc(r.ALWAYS);break;case Zo:r.depthFunc(r.LESS);break;case Qi:r.depthFunc(r.LEQUAL);break;case Jo:r.depthFunc(r.EQUAL);break;case Qo:r.depthFunc(r.GEQUAL);break;case ea:r.depthFunc(r.GREATER);break;case ta:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ie=_e}},setLocked:function(_e){F=_e},setClear:function(_e){ge!==_e&&(r.clearDepth(_e),ge=_e)},reset:function(){F=!1,X=null,ie=null,ge=null}}}function n(){let F=!1,me=null,X=null,ie=null,ge=null,_e=null,Je=null,vt=null,Pt=null;return{setTest:function(rt){F||(rt?Se(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(rt){me!==rt&&!F&&(r.stencilMask(rt),me=rt)},setFunc:function(rt,pt,en){(X!==rt||ie!==pt||ge!==en)&&(r.stencilFunc(rt,pt,en),X=rt,ie=pt,ge=en)},setOp:function(rt,pt,en){(_e!==rt||Je!==pt||vt!==en)&&(r.stencilOp(rt,pt,en),_e=rt,Je=pt,vt=en)},setLocked:function(rt){F=rt},setClear:function(rt){Pt!==rt&&(r.clearStencil(rt),Pt=rt)},reset:function(){F=!1,me=null,X=null,ie=null,ge=null,_e=null,Je=null,vt=null,Pt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],p=null,_=!1,y=null,m=null,g=null,b=null,T=null,w=null,O=null,N=new Oe(0,0,0),I=0,H=!1,te=null,S=null,R=null,K=null,W=null;const ne=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,j=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Q)[1]),re=j>=1):Q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),re=j>=2);let $=null,ye={};const ve=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),Qe=new ct().fromArray(ve),st=new ct().fromArray(Me);function Z(F,me,X,ie){const ge=new Uint8Array(4),_e=r.createTexture();r.bindTexture(F,_e),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<X;Je++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(me,0,r.RGBA,1,1,ie,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(me+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return _e}const ce={};ce[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Se(r.DEPTH_TEST),s.setFunc(Qi),je(!1),Ze(pc),Se(r.CULL_FACE),D(ti);function Se(F){c[F]!==!0&&(r.enable(F),c[F]=!0)}function Ee(F){c[F]!==!1&&(r.disable(F),c[F]=!1)}function Fe(F,me){return u[F]!==me?(r.bindFramebuffer(F,me),u[F]=me,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=me),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=me),!0):!1}function Le(F,me){let X=f,ie=!1;if(F){X=h.get(me),X===void 0&&(X=[],h.set(me,X));const ge=F.textures;if(X.length!==ge.length||X[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,Je=ge.length;_e<Je;_e++)X[_e]=r.COLOR_ATTACHMENT0+_e;X.length=ge.length,ie=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,ie=!0);ie&&r.drawBuffers(X)}function Xe(F){return p!==F?(r.useProgram(F),p=F,!0):!1}const lt={[vi]:r.FUNC_ADD,[_u]:r.FUNC_SUBTRACT,[vu]:r.FUNC_REVERSE_SUBTRACT};lt[xu]=r.MIN,lt[yu]=r.MAX;const Ge={[Mu]:r.ZERO,[Su]:r.ONE,[Eu]:r.SRC_COLOR,[qo]:r.SRC_ALPHA,[Cu]:r.SRC_ALPHA_SATURATE,[wu]:r.DST_COLOR,[Tu]:r.DST_ALPHA,[Au]:r.ONE_MINUS_SRC_COLOR,[jo]:r.ONE_MINUS_SRC_ALPHA,[Ru]:r.ONE_MINUS_DST_COLOR,[bu]:r.ONE_MINUS_DST_ALPHA,[Iu]:r.CONSTANT_COLOR,[Pu]:r.ONE_MINUS_CONSTANT_COLOR,[Lu]:r.CONSTANT_ALPHA,[Du]:r.ONE_MINUS_CONSTANT_ALPHA};function D(F,me,X,ie,ge,_e,Je,vt,Pt,rt){if(F===ti){_===!0&&(Ee(r.BLEND),_=!1);return}if(_===!1&&(Se(r.BLEND),_=!0),F!==gu){if(F!==y||rt!==H){if((m!==vi||T!==vi)&&(r.blendEquation(r.FUNC_ADD),m=vi,T=vi),rt)switch(F){case Ki:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mc:r.blendFunc(r.ONE,r.ONE);break;case gc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _c:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ki:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case gc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _c:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}g=null,b=null,w=null,O=null,N.set(0,0,0),I=0,y=F,H=rt}return}ge=ge||me,_e=_e||X,Je=Je||ie,(me!==m||ge!==T)&&(r.blendEquationSeparate(lt[me],lt[ge]),m=me,T=ge),(X!==g||ie!==b||_e!==w||Je!==O)&&(r.blendFuncSeparate(Ge[X],Ge[ie],Ge[_e],Ge[Je]),g=X,b=ie,w=_e,O=Je),(vt.equals(N)===!1||Pt!==I)&&(r.blendColor(vt.r,vt.g,vt.b,Pt),N.copy(vt),I=Pt),y=F,H=!1}function Ct(F,me){F.side===yn?Ee(r.CULL_FACE):Se(r.CULL_FACE);let X=F.side===Xt;me&&(X=!X),je(X),F.blending===Ki&&F.transparent===!1?D(ti):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),i.setMask(F.colorWrite);const ie=F.stencilWrite;o.setTest(ie),ie&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),dt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Se(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function je(F){te!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),te=F)}function Ze(F){F!==du?(Se(r.CULL_FACE),F!==S&&(F===pc?r.cullFace(r.BACK):F===pu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),S=F}function Ie(F){F!==R&&(re&&r.lineWidth(F),R=F)}function dt(F,me,X){F?(Se(r.POLYGON_OFFSET_FILL),(K!==me||W!==X)&&(r.polygonOffset(me,X),K=me,W=X)):Ee(r.POLYGON_OFFSET_FILL)}function De(F){F?Se(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function C(F){F===void 0&&(F=r.TEXTURE0+ne-1),$!==F&&(r.activeTexture(F),$=F)}function E(F,me,X){X===void 0&&($===null?X=r.TEXTURE0+ne-1:X=$);let ie=ye[X];ie===void 0&&(ie={type:void 0,texture:void 0},ye[X]=ie),(ie.type!==F||ie.texture!==me)&&($!==X&&(r.activeTexture(X),$=X),r.bindTexture(F,me||ce[F]),ie.type=F,ie.texture=me)}function G(){const F=ye[$];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ee(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(F){Qe.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Qe.copy(F))}function pe(F){st.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),st.copy(F))}function Ye(F,me){let X=l.get(me);X===void 0&&(X=new WeakMap,l.set(me,X));let ie=X.get(F);ie===void 0&&(ie=r.getUniformBlockIndex(me,F.name),X.set(F,ie))}function Be(F,me){const ie=l.get(me).get(F);a.get(me)!==ie&&(r.uniformBlockBinding(me,ie,F.__bindingPointIndex),a.set(me,ie))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},$=null,ye={},u={},h=new WeakMap,f=[],p=null,_=!1,y=null,m=null,g=null,b=null,T=null,w=null,O=null,N=new Oe(0,0,0),I=0,H=!1,te=null,S=null,R=null,K=null,W=null,Qe.set(0,0,r.canvas.width,r.canvas.height),st.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:Se,disable:Ee,bindFramebuffer:Fe,drawBuffers:Le,useProgram:Xe,setBlending:D,setMaterial:Ct,setFlipSided:je,setCullFace:Ze,setLineWidth:Ie,setPolygonOffset:dt,setScissorTest:De,activeTexture:C,bindTexture:E,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:se,texImage2D:Te,texImage3D:Ne,updateUBOMapping:Ye,uniformBlockBinding:Be,texStorage2D:Ke,texStorage3D:le,texSubImage2D:J,texSubImage3D:we,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ae,scissor:Ue,viewport:pe,reset:ut}}function cl(r,e,t,n){const i=E_(n);switch(t){case dh:return r*e;case mh:return r*e;case gh:return r*e*2;case Wa:return r*e/i.components*i.byteLength;case Xa:return r*e/i.components*i.byteLength;case _h:return r*e*2/i.components*i.byteLength;case $a:return r*e*2/i.components*i.byteLength;case ph:return r*e*3/i.components*i.byteLength;case Qt:return r*e*4/i.components*i.byteLength;case qa:return r*e*4/i.components*i.byteLength;case Es:case As:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ts:case bs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sa:case aa:return Math.max(r,16)*Math.max(e,8)/4;case ra:case oa:return Math.max(r,8)*Math.max(e,8)/2;case ca:case la:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ha:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case da:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case pa:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ma:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ga:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case _a:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case va:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case xa:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ya:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ea:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ws:case Ta:case ba:return Math.ceil(r/4)*Math.ceil(e/4)*16;case vh:case wa:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ra:case Ca:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E_(r){switch(r){case zn:case hh:return{byteLength:1,components:1};case kr:case uh:case Wr:return{byteLength:2,components:1};case Va:case Ga:return{byteLength:2,components:4};case Ai:case Ha:case fn:return{byteLength:4,components:1};case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function A_(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return p?new OffscreenCanvas(C,E):Vr("canvas")}function y(C,E,G){let ee=1;const se=De(C);if((se.width>G||se.height>G)&&(ee=G/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(ee*se.width),we=Math.floor(ee*se.height);h===void 0&&(h=_(J,we));const fe=E?_(J,we):h;return fe.width=J,fe.height=we,fe.getContext("2d").drawImage(C,0,0,J,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+J+"x"+we+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Gt&&C.minFilter!==Kt}function g(C){r.generateMipmap(C)}function b(C,E,G,ee,se=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=E;if(E===r.RED&&(G===r.FLOAT&&(J=r.R32F),G===r.HALF_FLOAT&&(J=r.R16F),G===r.UNSIGNED_BYTE&&(J=r.R8)),E===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.R8UI),G===r.UNSIGNED_SHORT&&(J=r.R16UI),G===r.UNSIGNED_INT&&(J=r.R32UI),G===r.BYTE&&(J=r.R8I),G===r.SHORT&&(J=r.R16I),G===r.INT&&(J=r.R32I)),E===r.RG&&(G===r.FLOAT&&(J=r.RG32F),G===r.HALF_FLOAT&&(J=r.RG16F),G===r.UNSIGNED_BYTE&&(J=r.RG8)),E===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RG8UI),G===r.UNSIGNED_SHORT&&(J=r.RG16UI),G===r.UNSIGNED_INT&&(J=r.RG32UI),G===r.BYTE&&(J=r.RG8I),G===r.SHORT&&(J=r.RG16I),G===r.INT&&(J=r.RG32I)),E===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RGB8UI),G===r.UNSIGNED_SHORT&&(J=r.RGB16UI),G===r.UNSIGNED_INT&&(J=r.RGB32UI),G===r.BYTE&&(J=r.RGB8I),G===r.SHORT&&(J=r.RGB16I),G===r.INT&&(J=r.RGB32I)),E===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),G===r.UNSIGNED_INT&&(J=r.RGBA32UI),G===r.BYTE&&(J=r.RGBA8I),G===r.SHORT&&(J=r.RGBA16I),G===r.INT&&(J=r.RGBA32I)),E===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),E===r.RGBA){const we=se?Ds:ot.getTransfer(ee);G===r.FLOAT&&(J=r.RGBA32F),G===r.HALF_FLOAT&&(J=r.RGBA16F),G===r.UNSIGNED_BYTE&&(J=we===_t?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(C,E){let G;return C?E===null||E===Ai||E===ir?G=r.DEPTH24_STENCIL8:E===fn?G=r.DEPTH32F_STENCIL8:E===kr&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ai||E===ir?G=r.DEPTH_COMPONENT24:E===fn?G=r.DEPTH_COMPONENT32F:E===kr&&(G=r.DEPTH_COMPONENT16),G}function w(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==Kt?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function O(C){const E=C.target;E.removeEventListener("dispose",O),I(E),E.isVideoTexture&&u.delete(E)}function N(C){const E=C.target;E.removeEventListener("dispose",N),te(E)}function I(C){const E=n.get(C);if(E.__webglInit===void 0)return;const G=C.source,ee=f.get(G);if(ee){const se=ee[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&H(C),Object.keys(ee).length===0&&f.delete(G)}n.remove(C)}function H(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const G=C.source,ee=f.get(G);delete ee[E.__cacheKey],o.memory.textures--}function te(C){const E=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let se=0;se<E.__webglFramebuffer[ee].length;se++)r.deleteFramebuffer(E.__webglFramebuffer[ee][se]);else r.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)r.deleteFramebuffer(E.__webglFramebuffer[ee]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=C.textures;for(let ee=0,se=G.length;ee<se;ee++){const J=n.get(G[ee]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(G[ee])}n.remove(C)}let S=0;function R(){S=0}function K(){const C=S;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),S+=1,C}function W(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function ne(C,E){const G=n.get(C);if(C.isVideoTexture&&Ie(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(G,C,E);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+E)}function re(C,E){const G=n.get(C);if(C.version>0&&G.__version!==C.version){st(G,C,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+E)}function j(C,E){const G=n.get(C);if(C.version>0&&G.__version!==C.version){st(G,C,E);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+E)}function Q(C,E){const G=n.get(C);if(C.version>0&&G.__version!==C.version){Z(G,C,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+E)}const $={[nr]:r.REPEAT,[Qn]:r.CLAMP_TO_EDGE,[Ps]:r.MIRRORED_REPEAT},ye={[Gt]:r.NEAREST,[lh]:r.NEAREST_MIPMAP_NEAREST,[Dr]:r.NEAREST_MIPMAP_LINEAR,[Kt]:r.LINEAR,[Ss]:r.LINEAR_MIPMAP_NEAREST,[Fn]:r.LINEAR_MIPMAP_LINEAR},ve={[Ju]:r.NEVER,[sf]:r.ALWAYS,[Qu]:r.LESS,[Mh]:r.LEQUAL,[ef]:r.EQUAL,[rf]:r.GEQUAL,[tf]:r.GREATER,[nf]:r.NOTEQUAL};function Me(C,E){if(E.type===fn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Kt||E.magFilter===Ss||E.magFilter===Dr||E.magFilter===Fn||E.minFilter===Kt||E.minFilter===Ss||E.minFilter===Dr||E.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,$[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,$[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,$[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ye[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ye[E.minFilter]),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Gt||E.minFilter!==Dr&&E.minFilter!==Fn||E.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Qe(C,E){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",O));const ee=E.source;let se=f.get(ee);se===void 0&&(se={},f.set(ee,se));const J=W(E);if(J!==C.__cacheKey){se[J]===void 0&&(se[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[J].usedTimes++;const we=se[C.__cacheKey];we!==void 0&&(se[C.__cacheKey].usedTimes--,we.usedTimes===0&&H(E)),C.__cacheKey=J,C.__webglTexture=se[J].texture}return G}function st(C,E,G){let ee=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=r.TEXTURE_3D);const se=Qe(C,E),J=E.source;t.bindTexture(ee,C.__webglTexture,r.TEXTURE0+G);const we=n.get(J);if(J.version!==we.__version||se===!0){t.activeTexture(r.TEXTURE0+G);const fe=ot.getPrimaries(ot.workingColorSpace),Ae=E.colorSpace===Zn?null:ot.getPrimaries(E.colorSpace),Ke=E.colorSpace===Zn||fe===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let le=y(E.image,!1,i.maxTextureSize);le=dt(E,le);const Te=s.convert(E.format,E.colorSpace),Ne=s.convert(E.type);let Ue=b(E.internalFormat,Te,Ne,E.colorSpace,E.isVideoTexture);Me(ee,E);let pe;const Ye=E.mipmaps,Be=E.isVideoTexture!==!0,ut=we.__version===void 0||se===!0,F=J.dataReady,me=w(E,le);if(E.isDepthTexture)Ue=T(E.format===rr,E.type),ut&&(Be?t.texStorage2D(r.TEXTURE_2D,1,Ue,le.width,le.height):t.texImage2D(r.TEXTURE_2D,0,Ue,le.width,le.height,0,Te,Ne,null));else if(E.isDataTexture)if(Ye.length>0){Be&&ut&&t.texStorage2D(r.TEXTURE_2D,me,Ue,Ye[0].width,Ye[0].height);for(let X=0,ie=Ye.length;X<ie;X++)pe=Ye[X],Be?F&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,pe.width,pe.height,Te,Ne,pe.data):t.texImage2D(r.TEXTURE_2D,X,Ue,pe.width,pe.height,0,Te,Ne,pe.data);E.generateMipmaps=!1}else Be?(ut&&t.texStorage2D(r.TEXTURE_2D,me,Ue,le.width,le.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le.width,le.height,Te,Ne,le.data)):t.texImage2D(r.TEXTURE_2D,0,Ue,le.width,le.height,0,Te,Ne,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Ue,Ye[0].width,Ye[0].height,le.depth);for(let X=0,ie=Ye.length;X<ie;X++)if(pe=Ye[X],E.format!==Qt)if(Te!==null)if(Be){if(F)if(E.layerUpdates.size>0){const ge=cl(pe.width,pe.height,E.format,E.type);for(const _e of E.layerUpdates){const Je=pe.data.subarray(_e*ge/pe.data.BYTES_PER_ELEMENT,(_e+1)*ge/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,_e,pe.width,pe.height,1,Te,Je,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,pe.width,pe.height,le.depth,Te,pe.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Ue,pe.width,pe.height,le.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,pe.width,pe.height,le.depth,Te,Ne,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,X,Ue,pe.width,pe.height,le.depth,0,Te,Ne,pe.data)}else{Be&&ut&&t.texStorage2D(r.TEXTURE_2D,me,Ue,Ye[0].width,Ye[0].height);for(let X=0,ie=Ye.length;X<ie;X++)pe=Ye[X],E.format!==Qt?Te!==null?Be?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,pe.width,pe.height,Te,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,X,Ue,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?F&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,pe.width,pe.height,Te,Ne,pe.data):t.texImage2D(r.TEXTURE_2D,X,Ue,pe.width,pe.height,0,Te,Ne,pe.data)}else if(E.isDataArrayTexture)if(Be){if(ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Ue,le.width,le.height,le.depth),F)if(E.layerUpdates.size>0){const X=cl(le.width,le.height,E.format,E.type);for(const ie of E.layerUpdates){const ge=le.data.subarray(ie*X/le.data.BYTES_PER_ELEMENT,(ie+1)*X/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ie,le.width,le.height,1,Te,Ne,ge)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Te,Ne,le.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,le.width,le.height,le.depth,0,Te,Ne,le.data);else if(E.isData3DTexture)Be?(ut&&t.texStorage3D(r.TEXTURE_3D,me,Ue,le.width,le.height,le.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Te,Ne,le.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,le.width,le.height,le.depth,0,Te,Ne,le.data);else if(E.isFramebufferTexture){if(ut)if(Be)t.texStorage2D(r.TEXTURE_2D,me,Ue,le.width,le.height);else{let X=le.width,ie=le.height;for(let ge=0;ge<me;ge++)t.texImage2D(r.TEXTURE_2D,ge,Ue,X,ie,0,Te,Ne,null),X>>=1,ie>>=1}}else if(Ye.length>0){if(Be&&ut){const X=De(Ye[0]);t.texStorage2D(r.TEXTURE_2D,me,Ue,X.width,X.height)}for(let X=0,ie=Ye.length;X<ie;X++)pe=Ye[X],Be?F&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,Te,Ne,pe):t.texImage2D(r.TEXTURE_2D,X,Ue,Te,Ne,pe);E.generateMipmaps=!1}else if(Be){if(ut){const X=De(le);t.texStorage2D(r.TEXTURE_2D,me,Ue,X.width,X.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Te,Ne,le)}else t.texImage2D(r.TEXTURE_2D,0,Ue,Te,Ne,le);m(E)&&g(ee),we.__version=J.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Z(C,E,G){if(E.image.length!==6)return;const ee=Qe(C,E),se=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);const J=n.get(se);if(se.version!==J.__version||ee===!0){t.activeTexture(r.TEXTURE0+G);const we=ot.getPrimaries(ot.workingColorSpace),fe=E.colorSpace===Zn?null:ot.getPrimaries(E.colorSpace),Ae=E.colorSpace===Zn||we===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ke=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let ie=0;ie<6;ie++)!Ke&&!le?Te[ie]=y(E.image[ie],!0,i.maxCubemapSize):Te[ie]=le?E.image[ie].image:E.image[ie],Te[ie]=dt(E,Te[ie]);const Ne=Te[0],Ue=s.convert(E.format,E.colorSpace),pe=s.convert(E.type),Ye=b(E.internalFormat,Ue,pe,E.colorSpace),Be=E.isVideoTexture!==!0,ut=J.__version===void 0||ee===!0,F=se.dataReady;let me=w(E,Ne);Me(r.TEXTURE_CUBE_MAP,E);let X;if(Ke){Be&&ut&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ye,Ne.width,Ne.height);for(let ie=0;ie<6;ie++){X=Te[ie].mipmaps;for(let ge=0;ge<X.length;ge++){const _e=X[ge];E.format!==Qt?Ue!==null?Be?F&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,_e.width,_e.height,Ue,_e.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,Ye,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,_e.width,_e.height,Ue,pe,_e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,Ye,_e.width,_e.height,0,Ue,pe,_e.data)}}}else{if(X=E.mipmaps,Be&&ut){X.length>0&&me++;const ie=De(Te[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ye,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(le){Be?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Te[ie].width,Te[ie].height,Ue,pe,Te[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ye,Te[ie].width,Te[ie].height,0,Ue,pe,Te[ie].data);for(let ge=0;ge<X.length;ge++){const Je=X[ge].image[ie].image;Be?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,Je.width,Je.height,Ue,pe,Je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,Ye,Je.width,Je.height,0,Ue,pe,Je.data)}}else{Be?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ue,pe,Te[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ye,Ue,pe,Te[ie]);for(let ge=0;ge<X.length;ge++){const _e=X[ge];Be?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,Ue,pe,_e.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,Ye,Ue,pe,_e.image[ie])}}}m(E)&&g(r.TEXTURE_CUBE_MAP),J.__version=se.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ce(C,E,G,ee,se,J){const we=s.convert(G.format,G.colorSpace),fe=s.convert(G.type),Ae=b(G.internalFormat,we,fe,G.colorSpace);if(!n.get(E).__hasExternalTextures){const le=Math.max(1,E.width>>J),Te=Math.max(1,E.height>>J);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,J,Ae,le,Te,E.depth,0,we,fe,null):t.texImage2D(se,J,Ae,le,Te,0,we,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ze(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,se,n.get(G).__webglTexture,0,je(E)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,se,n.get(G).__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(C,E,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer){const ee=E.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,J=T(E.stencilBuffer,se),we=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=je(E);Ze(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,J,E.width,E.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,J,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,J,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,C)}else{const ee=E.textures;for(let se=0;se<ee.length;se++){const J=ee[se],we=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),Ae=b(J.internalFormat,we,fe,J.colorSpace),Ke=je(E);G&&Ze(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,Ae,E.width,E.height):Ze(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ke,Ae,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ne(E.depthTexture,0);const ee=n.get(E.depthTexture).__webglTexture,se=je(E);if(E.depthTexture.format===Yi)Ze(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(E.depthTexture.format===rr)Ze(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Fe(C){const E=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const ee=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),E.__depthDisposeCallback=se}E.__boundDepthTexture=ee}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ee(E.__webglFramebuffer,C)}else if(G){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=r.createRenderbuffer(),Se(E.__webglDepthbuffer[ee],C,!1);else{const se=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,J)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Se(E.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,se)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(C,E,G){const ee=n.get(C);E!==void 0&&ce(ee.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Fe(C)}function Xe(C){const E=C.texture,G=n.get(C),ee=n.get(E);C.addEventListener("dispose",N);const se=C.textures,J=C.isWebGLCubeRenderTarget===!0,we=se.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=E.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)G.__webglFramebuffer[fe][Ae]=r.createFramebuffer()}else G.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)G.__webglFramebuffer[fe]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(we)for(let fe=0,Ae=se.length;fe<Ae;fe++){const Ke=n.get(se[fe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Ze(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){const Ae=se[fe];G.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const Ke=s.convert(Ae.format,Ae.colorSpace),le=s.convert(Ae.type),Te=b(Ae.internalFormat,Ke,le,Ae.colorSpace,C.isXRRenderTarget===!0),Ne=je(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,Te,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Se(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),Me(r.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)ce(G.__webglFramebuffer[fe][Ae],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae);else ce(G.__webglFramebuffer[fe],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(E)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let fe=0,Ae=se.length;fe<Ae;fe++){const Ke=se[fe],le=n.get(Ke);t.bindTexture(r.TEXTURE_2D,le.__webglTexture),Me(r.TEXTURE_2D,Ke),ce(G.__webglFramebuffer,C,Ke,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,0),m(Ke)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,ee.__webglTexture),Me(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)ce(G.__webglFramebuffer[Ae],C,E,r.COLOR_ATTACHMENT0,fe,Ae);else ce(G.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,fe,0);m(E)&&g(fe),t.unbindTexture()}C.depthBuffer&&Fe(C)}function lt(C){const E=C.textures;for(let G=0,ee=E.length;G<ee;G++){const se=E[G];if(m(se)){const J=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,we=n.get(se).__webglTexture;t.bindTexture(J,we),g(J),t.unbindTexture()}}}const Ge=[],D=[];function Ct(C){if(C.samples>0){if(Ze(C)===!1){const E=C.textures,G=C.width,ee=C.height;let se=r.COLOR_BUFFER_BIT;const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=n.get(C),fe=E.length>1;if(fe)for(let Ae=0;Ae<E.length;Ae++)t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ae=0;Ae<E.length;Ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);const Ke=n.get(E[Ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ke,0)}r.blitFramebuffer(0,0,G,ee,0,0,G,ee,se,r.NEAREST),l===!0&&(Ge.length=0,D.length=0,Ge.push(r.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ge.push(J),D.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Ae=0;Ae<E.length;Ae++){t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);const Ke=n.get(E[Ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,Ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function je(C){return Math.min(i.maxSamples,C.samples)}function Ze(C){const E=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ie(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function dt(C,E){const G=C.colorSpace,ee=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==It&&G!==Zn&&(ot.getTransfer(G)===_t?(ee!==Qt||se!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function De(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=R,this.setTexture2D=ne,this.setTexture2DArray=re,this.setTexture3D=j,this.setTextureCube=Q,this.rebindTextures=Le,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ze}function T_(r,e){function t(n,i=Zn){let s;const o=ot.getTransfer(i);if(n===zn)return r.UNSIGNED_BYTE;if(n===Va)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return r.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return r.BYTE;if(n===uh)return r.SHORT;if(n===kr)return r.UNSIGNED_SHORT;if(n===Ha)return r.INT;if(n===Ai)return r.UNSIGNED_INT;if(n===fn)return r.FLOAT;if(n===Wr)return r.HALF_FLOAT;if(n===dh)return r.ALPHA;if(n===ph)return r.RGB;if(n===Qt)return r.RGBA;if(n===mh)return r.LUMINANCE;if(n===gh)return r.LUMINANCE_ALPHA;if(n===Yi)return r.DEPTH_COMPONENT;if(n===rr)return r.DEPTH_STENCIL;if(n===Wa)return r.RED;if(n===Xa)return r.RED_INTEGER;if(n===_h)return r.RG;if(n===$a)return r.RG_INTEGER;if(n===qa)return r.RGBA_INTEGER;if(n===Es||n===As||n===Ts||n===bs)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Es)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Es)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===As)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ra||n===sa||n===oa||n===aa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ra)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===la||n===ha)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ca||n===la)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ha)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ua||n===fa||n===da||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===ya||n===Ma||n===Sa||n===Ea||n===Aa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ua)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ga)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_a)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===va)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ea)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Aa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ws||n===Ta||n===ba)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ws)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ba)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vh||n===wa||n===Ra||n===Ca)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ws)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class b_ extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mi extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w_={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const R_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C_=`
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

}`;class I_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Rt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ri({vertexShader:R_,fragmentShader:C_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P_ extends wi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const y=new I_,m=t.getContextAttributes();let g=null,b=null;const T=[],w=[],O=new it;let N=null;const I=new Vt;I.layers.enable(1),I.viewport=new ct;const H=new Vt;H.layers.enable(2),H.viewport=new ct;const te=[I,H],S=new b_;S.layers.enable(1),S.layers.enable(2);let R=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=T[Z];return ce===void 0&&(ce=new wo,T[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=T[Z];return ce===void 0&&(ce=new wo,T[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=T[Z];return ce===void 0&&(ce=new wo,T[Z]=ce),ce.getHandSpace()};function W(Z){const ce=w.indexOf(Z.inputSource);if(ce===-1)return;const Se=T[ce];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,c||o),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ne(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",ne),i.removeEventListener("inputsourceschange",re);for(let Z=0;Z<T.length;Z++){const ce=w[Z];ce!==null&&(w[Z]=null,T[Z].disconnect(ce))}R=null,K=null,y.reset(),e.setRenderTarget(g),p=null,f=null,h=null,i=null,b=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",ne),i.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(O),i.renderState.layers===void 0){const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Ti(p.framebufferWidth,p.framebufferHeight,{format:Qt,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,Se=null,Ee=null;m.depth&&(Ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?rr:Yi,Se=m.stencil?ir:Ai);const Fe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Fe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Ti(f.textureWidth,f.textureHeight,{format:Qt,type:zn,depthTexture:new Dh(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function re(Z){for(let ce=0;ce<Z.removed.length;ce++){const Se=Z.removed[ce],Ee=w.indexOf(Se);Ee>=0&&(w[Ee]=null,T[Ee].disconnect(Se))}for(let ce=0;ce<Z.added.length;ce++){const Se=Z.added[ce];let Ee=w.indexOf(Se);if(Ee===-1){for(let Le=0;Le<T.length;Le++)if(Le>=w.length){w.push(Se),Ee=Le;break}else if(w[Le]===null){w[Le]=Se,Ee=Le;break}if(Ee===-1)break}const Fe=T[Ee];Fe&&Fe.connect(Se)}}const j=new z,Q=new z;function $(Z,ce,Se){j.setFromMatrixPosition(ce.matrixWorld),Q.setFromMatrixPosition(Se.matrixWorld);const Ee=j.distanceTo(Q),Fe=ce.projectionMatrix.elements,Le=Se.projectionMatrix.elements,Xe=Fe[14]/(Fe[10]-1),lt=Fe[14]/(Fe[10]+1),Ge=(Fe[9]+1)/Fe[5],D=(Fe[9]-1)/Fe[5],Ct=(Fe[8]-1)/Fe[0],je=(Le[8]+1)/Le[0],Ze=Xe*Ct,Ie=Xe*je,dt=Ee/(-Ct+je),De=dt*-Ct;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(De),Z.translateZ(dt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Fe[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const C=Xe+dt,E=lt+dt,G=Ze-De,ee=Ie+(Ee-De),se=Ge*lt/E*C,J=D*lt/E*C;Z.projectionMatrix.makePerspective(G,ee,se,J,C,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ye(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ce=Z.near,Se=Z.far;y.texture!==null&&(y.depthNear>0&&(ce=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),S.near=H.near=I.near=ce,S.far=H.far=I.far=Se,(R!==S.near||K!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,K=S.far);const Ee=Z.parent,Fe=S.cameras;ye(S,Ee);for(let Le=0;Le<Fe.length;Le++)ye(Fe[Le],Ee);Fe.length===2?$(S,I,H):S.projectionMatrix.copy(I.projectionMatrix),ve(Z,S,Ee)};function ve(Z,ce,Se){Se===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=sr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let Me=null;function Qe(Z,ce){if(u=ce.getViewerPose(c||o),_=ce,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Ee=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,Ee=!0);for(let Le=0;Le<Se.length;Le++){const Xe=Se[Le];let lt=null;if(p!==null)lt=p.getViewport(Xe);else{const D=h.getViewSubImage(f,Xe);lt=D.viewport,Le===0&&(e.setRenderTargetTextures(b,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(b))}let Ge=te[Le];Ge===void 0&&(Ge=new Vt,Ge.layers.enable(Le),Ge.viewport=new ct,te[Le]=Ge),Ge.matrix.fromArray(Xe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Xe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(lt.x,lt.y,lt.width,lt.height),Le===0&&(S.matrix.copy(Ge.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ee===!0&&S.cameras.push(Ge)}const Fe=i.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Le=h.getDepthInformation(Se[0]);Le&&Le.isValid&&Le.texture&&y.init(e,Le,i.renderState)}}for(let Se=0;Se<T.length;Se++){const Ee=w[Se],Fe=T[Se];Ee!==null&&Fe!==void 0&&Fe.update(Ee,ce,c||o)}Me&&Me(Z,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),_=null}const st=new Lh;st.setAnimationLoop(Qe),this.setAnimationLoop=function(Z){Me=Z},this.dispose=function(){}}}const hi=new Sn,L_=new ke;function D_(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Ch(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,b,T,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),h(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&p(m,g,w)):g.isMeshMatcapMaterial?(s(m,g),_(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),y(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,b,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Xt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Xt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const b=e.get(g),T=b.envMap,w=b.envMapRotation;T&&(m.envMap.value=T,hi.copy(w),hi.x*=-1,hi.y*=-1,hi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(hi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=T*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){const b=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function N_(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const w=T.program;n.uniformBlockBinding(b,w)}function c(b,T){let w=i[b.id];w===void 0&&(_(b),w=u(b),i[b.id]=w,b.addEventListener("dispose",m));const O=T.program;n.updateUBOMapping(b,O);const N=e.render.frame;s[b.id]!==N&&(f(b),s[b.id]=N)}function u(b){const T=h();b.__bindingPointIndex=T;const w=r.createBuffer(),O=b.__size,N=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,O,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,w),w}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const T=i[b.id],w=b.uniforms,O=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let N=0,I=w.length;N<I;N++){const H=Array.isArray(w[N])?w[N]:[w[N]];for(let te=0,S=H.length;te<S;te++){const R=H[te];if(p(R,N,te,O)===!0){const K=R.__offset,W=Array.isArray(R.value)?R.value:[R.value];let ne=0;for(let re=0;re<W.length;re++){const j=W[re],Q=y(j);typeof j=="number"||typeof j=="boolean"?(R.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,K+ne,R.__data)):j.isMatrix3?(R.__data[0]=j.elements[0],R.__data[1]=j.elements[1],R.__data[2]=j.elements[2],R.__data[3]=0,R.__data[4]=j.elements[3],R.__data[5]=j.elements[4],R.__data[6]=j.elements[5],R.__data[7]=0,R.__data[8]=j.elements[6],R.__data[9]=j.elements[7],R.__data[10]=j.elements[8],R.__data[11]=0):(j.toArray(R.__data,ne),ne+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(b,T,w,O){const N=b.value,I=T+"_"+w;if(O[I]===void 0)return typeof N=="number"||typeof N=="boolean"?O[I]=N:O[I]=N.clone(),!0;{const H=O[I];if(typeof N=="number"||typeof N=="boolean"){if(H!==N)return O[I]=N,!0}else if(H.equals(N)===!1)return H.copy(N),!0}return!1}function _(b){const T=b.uniforms;let w=0;const O=16;for(let I=0,H=T.length;I<H;I++){const te=Array.isArray(T[I])?T[I]:[T[I]];for(let S=0,R=te.length;S<R;S++){const K=te[S],W=Array.isArray(K.value)?K.value:[K.value];for(let ne=0,re=W.length;ne<re;ne++){const j=W[ne],Q=y(j),$=w%O,ye=$%Q.boundary,ve=$+ye;w+=ye,ve!==0&&O-ve<Q.storage&&(w+=O-ve),K.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=w,w+=Q.storage}}}const N=w%O;return N>0&&(w+=O-N),b.__size=w,b.__cache={},this}function y(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function g(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}class U_{constructor(e={}){const{canvas:t=Sf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const g=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this.toneMapping=ni,this.toneMappingExposure=1;const T=this;let w=!1,O=0,N=0,I=null,H=-1,te=null;const S=new ct,R=new ct;let K=null;const W=new Oe(0);let ne=0,re=t.width,j=t.height,Q=1,$=null,ye=null;const ve=new ct(0,0,re,j),Me=new ct(0,0,re,j);let Qe=!1;const st=new Za;let Z=!1,ce=!1;const Se=new ke,Ee=new ke,Fe=new z,Le=new ct,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Ge(){return I===null?Q:1}let D=n;function Ct(M,L){return t.getContext(M,L)}try{const M={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${za}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",_e,!1),D===null){const L="webgl2";if(D=Ct(L,M),D===null)throw Ct(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let je,Ze,Ie,dt,De,C,E,G,ee,se,J,we,fe,Ae,Ke,le,Te,Ne,Ue,pe,Ye,Be,ut,F;function me(){je=new zm(D),je.init(),Be=new T_(D,je),Ze=new Nm(D,je,e,Be),Ie=new S_(D),Ze.reverseDepthBuffer&&Ie.buffers.depth.setReversed(!0),dt=new Gm(D),De=new a_,C=new A_(D,je,Ie,De,Ze,Be,dt),E=new Om(T),G=new km(T),ee=new Yf(D),ut=new Lm(D,ee),se=new Hm(D,ee,dt,ut),J=new Xm(D,se,ee,dt),Ue=new Wm(D,Ze,C),le=new Um(De),we=new o_(T,E,G,je,Ze,ut,le),fe=new D_(T,De),Ae=new l_,Ke=new m_(je),Ne=new Pm(T,E,G,Ie,J,f,l),Te=new y_(T,J,Ze),F=new N_(D,dt,Ze,Ie),pe=new Dm(D,je,dt),Ye=new Vm(D,je,dt),dt.programs=we.programs,T.capabilities=Ze,T.extensions=je,T.properties=De,T.renderLists=Ae,T.shadowMap=Te,T.state=Ie,T.info=dt}me();const X=new P_(T,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(M){M!==void 0&&(Q=M,this.setSize(re,j,!1))},this.getSize=function(M){return M.set(re,j)},this.setSize=function(M,L,U=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=M,j=L,t.width=Math.floor(M*Q),t.height=Math.floor(L*Q),U===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(re*Q,j*Q).floor()},this.setDrawingBufferSize=function(M,L,U){re=M,j=L,Q=U,t.width=Math.floor(M*U),t.height=Math.floor(L*U),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(ve)},this.setViewport=function(M,L,U,k){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,L,U,k),Ie.viewport(S.copy(ve).multiplyScalar(Q).round())},this.getScissor=function(M){return M.copy(Me)},this.setScissor=function(M,L,U,k){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,L,U,k),Ie.scissor(R.copy(Me).multiplyScalar(Q).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(M){Ie.setScissorTest(Qe=M)},this.setOpaqueSort=function(M){$=M},this.setTransparentSort=function(M){ye=M},this.getClearColor=function(M){return M.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(M=!0,L=!0,U=!0){let k=0;if(M){let P=!1;if(I!==null){const q=I.texture.format;P=q===qa||q===$a||q===Xa}if(P){const q=I.texture.type,V=q===zn||q===Ai||q===kr||q===ir||q===Va||q===Ga,oe=Ne.getClearColor(),de=Ne.getClearAlpha(),xe=oe.r,he=oe.g,ae=oe.b;V?(p[0]=xe,p[1]=he,p[2]=ae,p[3]=de,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=xe,_[1]=he,_[2]=ae,_[3]=de,D.clearBufferiv(D.COLOR,0,_))}else k|=D.COLOR_BUFFER_BIT}L&&(k|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),U&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ae.dispose(),Ke.dispose(),De.dispose(),E.dispose(),G.dispose(),J.dispose(),ut.dispose(),F.dispose(),we.dispose(),X.dispose(),X.removeEventListener("sessionstart",vn),X.removeEventListener("sessionend",Ci),tn.stop()};function ie(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=dt.autoReset,L=Te.enabled,U=Te.autoUpdate,k=Te.needsUpdate,P=Te.type;me(),dt.autoReset=M,Te.enabled=L,Te.autoUpdate=U,Te.needsUpdate=k,Te.type=P}function _e(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Je(M){const L=M.target;L.removeEventListener("dispose",Je),vt(L)}function vt(M){Pt(M),De.remove(M)}function Pt(M){const L=De.get(M).programs;L!==void 0&&(L.forEach(function(U){we.releaseProgram(U)}),M.isShaderMaterial&&we.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,U,k,P,q){L===null&&(L=Xe);const V=P.isMesh&&P.matrixWorld.determinant()<0,oe=be(M,L,U,k,P);Ie.setMaterial(k,V);let de=U.index,xe=1;if(k.wireframe===!0){if(de=se.getWireframeAttribute(U),de===void 0)return;xe=2}const he=U.drawRange,ae=U.attributes.position;let We=he.start*xe,et=(he.start+he.count)*xe;q!==null&&(We=Math.max(We,q.start*xe),et=Math.min(et,(q.start+q.count)*xe)),de!==null?(We=Math.max(We,0),et=Math.min(et,de.count)):ae!=null&&(We=Math.max(We,0),et=Math.min(et,ae.count));const tt=et-We;if(tt<0||tt===1/0)return;ut.setup(P,k,oe,U,de);let at,Pe=pe;if(de!==null&&(at=ee.get(de),Pe=Ye,Pe.setIndex(at)),P.isMesh)k.wireframe===!0?(Ie.setLineWidth(k.wireframeLinewidth*Ge()),Pe.setMode(D.LINES)):Pe.setMode(D.TRIANGLES);else if(P.isLine){let Re=k.linewidth;Re===void 0&&(Re=1),Ie.setLineWidth(Re*Ge()),P.isLineSegments?Pe.setMode(D.LINES):P.isLineLoop?Pe.setMode(D.LINE_LOOP):Pe.setMode(D.LINE_STRIP)}else P.isPoints?Pe.setMode(D.POINTS):P.isSprite&&Pe.setMode(D.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Pe.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Pe.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const Re=P._multiDrawStarts,mt=P._multiDrawCounts,nt=P._multiDrawCount,Mt=de?ee.get(de).bytesPerElement:1,nn=De.get(k).currentProgram.getUniforms();for(let $t=0;$t<nt;$t++)nn.setValue(D,"_gl_DrawID",$t),Pe.render(Re[$t]/Mt,mt[$t])}else if(P.isInstancedMesh)Pe.renderInstances(We,tt,P.count);else if(U.isInstancedBufferGeometry){const Re=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,mt=Math.min(U.instanceCount,Re);Pe.renderInstances(We,tt,mt)}else Pe.render(We,tt)};function rt(M,L,U){M.transparent===!0&&M.side===yn&&M.forceSinglePass===!1?(M.side=Xt,M.needsUpdate=!0,B(M,L,U),M.side=kn,M.needsUpdate=!0,B(M,L,U),M.side=yn):B(M,L,U)}this.compile=function(M,L,U=null){U===null&&(U=M),m=Ke.get(U),m.init(L),b.push(m),U.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),M!==U&&M.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),m.setupLights();const k=new Set;return M.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const q=P.material;if(q)if(Array.isArray(q))for(let V=0;V<q.length;V++){const oe=q[V];rt(oe,U,P),k.add(oe)}else rt(q,U,P),k.add(q)}),b.pop(),m=null,k},this.compileAsync=function(M,L,U=null){const k=this.compile(M,L,U);return new Promise(P=>{function q(){if(k.forEach(function(V){De.get(V).currentProgram.isReady()&&k.delete(V)}),k.size===0){P(M);return}setTimeout(q,10)}je.get("KHR_parallel_shader_compile")!==null?q():setTimeout(q,10)})};let pt=null;function en(M){pt&&pt(M)}function vn(){tn.stop()}function Ci(){tn.start()}const tn=new Lh;tn.setAnimationLoop(en),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(M){pt=M,X.setAnimationLoop(M),M===null?tn.stop():tn.start()},X.addEventListener("sessionstart",vn),X.addEventListener("sessionend",Ci),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(L),L=X.getCamera()),M.isScene===!0&&M.onBeforeRender(T,M,L,I),m=Ke.get(M,b.length),m.init(L),b.push(m),Ee.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),st.setFromProjectionMatrix(Ee),ce=this.localClippingEnabled,Z=le.init(this.clippingPlanes,ce),y=Ae.get(M,g.length),y.init(),g.push(y),X.enabled===!0&&X.isPresenting===!0){const q=T.xr.getDepthSensingMesh();q!==null&&gr(q,L,-1/0,T.sortObjects)}gr(M,L,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort($,ye),lt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,lt&&Ne.addToRenderList(y,M),this.info.render.frame++,Z===!0&&le.beginShadows();const U=m.state.shadowsArray;Te.render(U,M,L),Z===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=y.opaque,P=y.transmissive;if(m.setupLights(),L.isArrayCamera){const q=L.cameras;if(P.length>0)for(let V=0,oe=q.length;V<oe;V++){const de=q[V];d(k,P,M,de)}lt&&Ne.render(M);for(let V=0,oe=q.length;V<oe;V++){const de=q[V];v(y,M,de,de.viewport)}}else P.length>0&&d(k,P,M,L),lt&&Ne.render(M),v(y,M,L);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(T,M,L),ut.resetDefaultState(),H=-1,te=null,b.pop(),b.length>0?(m=b[b.length-1],Z===!0&&le.setGlobalState(T.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?y=g[g.length-1]:y=null};function gr(M,L,U,k){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)U=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||st.intersectsSprite(M)){k&&Le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ee);const V=J.update(M),oe=M.material;oe.visible&&y.push(M,V,oe,U,Le.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||st.intersectsObject(M))){const V=J.update(M),oe=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Le.copy(M.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),Le.copy(V.boundingSphere.center)),Le.applyMatrix4(M.matrixWorld).applyMatrix4(Ee)),Array.isArray(oe)){const de=V.groups;for(let xe=0,he=de.length;xe<he;xe++){const ae=de[xe],We=oe[ae.materialIndex];We&&We.visible&&y.push(M,V,We,U,Le.z,ae)}}else oe.visible&&y.push(M,V,oe,U,Le.z,null)}}const q=M.children;for(let V=0,oe=q.length;V<oe;V++)gr(q[V],L,U,k)}function v(M,L,U,k){const P=M.opaque,q=M.transmissive,V=M.transparent;m.setupLightsView(U),Z===!0&&le.setGlobalState(T.clippingPlanes,U),k&&Ie.viewport(S.copy(k)),P.length>0&&x(P,L,U),q.length>0&&x(q,L,U),V.length>0&&x(V,L,U),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function d(M,L,U,k){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new Ti(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Wr:zn,minFilter:Fn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const q=m.state.transmissionRenderTarget[k.id],V=k.viewport||S;q.setSize(V.z,V.w);const oe=T.getRenderTarget();T.setRenderTarget(q),T.getClearColor(W),ne=T.getClearAlpha(),ne<1&&T.setClearColor(16777215,.5),T.clear(),lt&&Ne.render(U);const de=T.toneMapping;T.toneMapping=ni;const xe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),Z===!0&&le.setGlobalState(T.clippingPlanes,k),x(M,U,k),C.updateMultisampleRenderTarget(q),C.updateRenderTargetMipmap(q),je.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let ae=0,We=L.length;ae<We;ae++){const et=L[ae],tt=et.object,at=et.geometry,Pe=et.material,Re=et.group;if(Pe.side===yn&&tt.layers.test(k.layers)){const mt=Pe.side;Pe.side=Xt,Pe.needsUpdate=!0,A(tt,U,k,at,Pe,Re),Pe.side=mt,Pe.needsUpdate=!0,he=!0}}he===!0&&(C.updateMultisampleRenderTarget(q),C.updateRenderTargetMipmap(q))}T.setRenderTarget(oe),T.setClearColor(W,ne),xe!==void 0&&(k.viewport=xe),T.toneMapping=de}function x(M,L,U){const k=L.isScene===!0?L.overrideMaterial:null;for(let P=0,q=M.length;P<q;P++){const V=M[P],oe=V.object,de=V.geometry,xe=k===null?V.material:k,he=V.group;oe.layers.test(U.layers)&&A(oe,L,U,de,xe,he)}}function A(M,L,U,k,P,q){M.onBeforeRender(T,L,U,k,P,q),M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),P.onBeforeRender(T,L,U,k,M,q),P.transparent===!0&&P.side===yn&&P.forceSinglePass===!1?(P.side=Xt,P.needsUpdate=!0,T.renderBufferDirect(U,L,k,P,M,q),P.side=kn,P.needsUpdate=!0,T.renderBufferDirect(U,L,k,P,M,q),P.side=yn):T.renderBufferDirect(U,L,k,P,M,q),M.onAfterRender(T,L,U,k,P,q)}function B(M,L,U){L.isScene!==!0&&(L=Xe);const k=De.get(M),P=m.state.lights,q=m.state.shadowsArray,V=P.state.version,oe=we.getParameters(M,P.state,q,L,U),de=we.getProgramCacheKey(oe);let xe=k.programs;k.environment=M.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(M.isMeshStandardMaterial?G:E).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,xe===void 0&&(M.addEventListener("dispose",Je),xe=new Map,k.programs=xe);let he=xe.get(de);if(he!==void 0){if(k.currentProgram===he&&k.lightsStateVersion===V)return Ce(M,oe),he}else oe.uniforms=we.getUniforms(M),M.onBeforeCompile(oe,T),he=we.acquireProgram(oe,de),xe.set(de,he),k.uniforms=oe.uniforms;const ae=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ae.clippingPlanes=le.uniform),Ce(M,oe),k.needsLights=Ve(M),k.lightsStateVersion=V,k.needsLights&&(ae.ambientLightColor.value=P.state.ambient,ae.lightProbe.value=P.state.probe,ae.directionalLights.value=P.state.directional,ae.directionalLightShadows.value=P.state.directionalShadow,ae.spotLights.value=P.state.spot,ae.spotLightShadows.value=P.state.spotShadow,ae.rectAreaLights.value=P.state.rectArea,ae.ltc_1.value=P.state.rectAreaLTC1,ae.ltc_2.value=P.state.rectAreaLTC2,ae.pointLights.value=P.state.point,ae.pointLightShadows.value=P.state.pointShadow,ae.hemisphereLights.value=P.state.hemi,ae.directionalShadowMap.value=P.state.directionalShadowMap,ae.directionalShadowMatrix.value=P.state.directionalShadowMatrix,ae.spotShadowMap.value=P.state.spotShadowMap,ae.spotLightMatrix.value=P.state.spotLightMatrix,ae.spotLightMap.value=P.state.spotLightMap,ae.pointShadowMap.value=P.state.pointShadowMap,ae.pointShadowMatrix.value=P.state.pointShadowMatrix),k.currentProgram=he,k.uniformsList=null,he}function Y(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Cs.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Ce(M,L){const U=De.get(M);U.outputColorSpace=L.outputColorSpace,U.batching=L.batching,U.batchingColor=L.batchingColor,U.instancing=L.instancing,U.instancingColor=L.instancingColor,U.instancingMorph=L.instancingMorph,U.skinning=L.skinning,U.morphTargets=L.morphTargets,U.morphNormals=L.morphNormals,U.morphColors=L.morphColors,U.morphTargetsCount=L.morphTargetsCount,U.numClippingPlanes=L.numClippingPlanes,U.numIntersection=L.numClipIntersection,U.vertexAlphas=L.vertexAlphas,U.vertexTangents=L.vertexTangents,U.toneMapping=L.toneMapping}function be(M,L,U,k,P){L.isScene!==!0&&(L=Xe),C.resetTextureUnits();const q=L.fog,V=k.isMeshStandardMaterial?L.environment:null,oe=I===null?T.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:It,de=(k.isMeshStandardMaterial?G:E).get(k.envMap||V),xe=k.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,he=!!U.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ae=!!U.morphAttributes.position,We=!!U.morphAttributes.normal,et=!!U.morphAttributes.color;let tt=ni;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(tt=T.toneMapping);const at=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Pe=at!==void 0?at.length:0,Re=De.get(k),mt=m.state.lights;if(Z===!0&&(ce===!0||M!==te)){const Yt=M===te&&k.id===H;le.setState(k,M,Yt)}let nt=!1;k.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==mt.state.version||Re.outputColorSpace!==oe||P.isBatchedMesh&&Re.batching===!1||!P.isBatchedMesh&&Re.batching===!0||P.isBatchedMesh&&Re.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Re.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Re.instancing===!1||!P.isInstancedMesh&&Re.instancing===!0||P.isSkinnedMesh&&Re.skinning===!1||!P.isSkinnedMesh&&Re.skinning===!0||P.isInstancedMesh&&Re.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Re.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Re.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Re.instancingMorph===!1&&P.morphTexture!==null||Re.envMap!==de||k.fog===!0&&Re.fog!==q||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==le.numPlanes||Re.numIntersection!==le.numIntersection)||Re.vertexAlphas!==xe||Re.vertexTangents!==he||Re.morphTargets!==ae||Re.morphNormals!==We||Re.morphColors!==et||Re.toneMapping!==tt||Re.morphTargetsCount!==Pe)&&(nt=!0):(nt=!0,Re.__version=k.version);let Mt=Re.currentProgram;nt===!0&&(Mt=B(k,L,P));let nn=!1,$t=!1,Ks=!1;const yt=Mt.getUniforms(),Vn=Re.uniforms;if(Ie.useProgram(Mt.program)&&(nn=!0,$t=!0,Ks=!0),k.id!==H&&(H=k.id,$t=!0),nn||te!==M){Ze.reverseDepthBuffer?(Se.copy(M.projectionMatrix),Af(Se),Tf(Se),yt.setValue(D,"projectionMatrix",Se)):yt.setValue(D,"projectionMatrix",M.projectionMatrix),yt.setValue(D,"viewMatrix",M.matrixWorldInverse);const Yt=yt.map.cameraPosition;Yt!==void 0&&Yt.setValue(D,Fe.setFromMatrixPosition(M.matrixWorld)),Ze.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&yt.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),te!==M&&(te=M,$t=!0,Ks=!0)}if(P.isSkinnedMesh){yt.setOptional(D,P,"bindMatrix"),yt.setOptional(D,P,"bindMatrixInverse");const Yt=P.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),yt.setValue(D,"boneTexture",Yt.boneTexture,C))}P.isBatchedMesh&&(yt.setOptional(D,P,"batchingTexture"),yt.setValue(D,"batchingTexture",P._matricesTexture,C),yt.setOptional(D,P,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",P._indirectTexture,C),yt.setOptional(D,P,"batchingColorTexture"),P._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",P._colorsTexture,C));const Ys=U.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&Ue.update(P,U,Mt),($t||Re.receiveShadow!==P.receiveShadow)&&(Re.receiveShadow=P.receiveShadow,yt.setValue(D,"receiveShadow",P.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Vn.envMap.value=de,Vn.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Vn.envMapIntensity.value=L.environmentIntensity),$t&&(yt.setValue(D,"toneMappingExposure",T.toneMappingExposure),Re.needsLights&&$e(Vn,Ks),q&&k.fog===!0&&fe.refreshFogUniforms(Vn,q),fe.refreshMaterialUniforms(Vn,k,Q,j,m.state.transmissionRenderTarget[M.id]),Cs.upload(D,Y(Re),Vn,C)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Cs.upload(D,Y(Re),Vn,C),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&yt.setValue(D,"center",P.center),yt.setValue(D,"modelViewMatrix",P.modelViewMatrix),yt.setValue(D,"normalMatrix",P.normalMatrix),yt.setValue(D,"modelMatrix",P.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Yt=k.uniformsGroups;for(let Zs=0,fu=Yt.length;Zs<fu;Zs++){const dc=Yt[Zs];F.update(dc,Mt),F.bind(dc,Mt)}}return Mt}function $e(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Ve(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,L,U){De.get(M.texture).__webglTexture=L,De.get(M.depthTexture).__webglTexture=U;const k=De.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=U===void 0,k.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){const U=De.get(M);U.__webglFramebuffer=L,U.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,U=0){I=M,O=L,N=U;let k=!0,P=null,q=!1,V=!1;if(M){const de=De.get(M);if(de.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(de.__webglFramebuffer===void 0)C.setupRenderTarget(M);else if(de.__hasExternalTextures)C.rebindTextures(M,De.get(M.texture).__webglTexture,De.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ae=M.depthTexture;if(de.__boundDepthTexture!==ae){if(ae!==null&&De.has(ae)&&(M.width!==ae.image.width||M.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(M)}}const xe=M.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(V=!0);const he=De.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(he[L])?P=he[L][U]:P=he[L],q=!0):M.samples>0&&C.useMultisampledRTT(M)===!1?P=De.get(M).__webglMultisampledFramebuffer:Array.isArray(he)?P=he[U]:P=he,S.copy(M.viewport),R.copy(M.scissor),K=M.scissorTest}else S.copy(ve).multiplyScalar(Q).floor(),R.copy(Me).multiplyScalar(Q).floor(),K=Qe;if(Ie.bindFramebuffer(D.FRAMEBUFFER,P)&&k&&Ie.drawBuffers(M,P),Ie.viewport(S),Ie.scissor(R),Ie.setScissorTest(K),q){const de=De.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,de.__webglTexture,U)}else if(V){const de=De.get(M.texture),xe=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,de.__webglTexture,U||0,xe)}H=-1},this.readRenderTargetPixels=function(M,L,U,k,P,q,V){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&V!==void 0&&(oe=oe[V]),oe){Ie.bindFramebuffer(D.FRAMEBUFFER,oe);try{const de=M.texture,xe=de.format,he=de.type;if(!Ze.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-k&&U>=0&&U<=M.height-P&&D.readPixels(L,U,k,P,Be.convert(xe),Be.convert(he),q)}finally{const de=I!==null?De.get(I).__webglFramebuffer:null;Ie.bindFramebuffer(D.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(M,L,U,k,P,q,V){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let oe=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&V!==void 0&&(oe=oe[V]),oe){const de=M.texture,xe=de.format,he=de.type;if(!Ze.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=M.width-k&&U>=0&&U<=M.height-P){Ie.bindFramebuffer(D.FRAMEBUFFER,oe);const ae=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ae),D.bufferData(D.PIXEL_PACK_BUFFER,q.byteLength,D.STREAM_READ),D.readPixels(L,U,k,P,Be.convert(xe),Be.convert(he),0);const We=I!==null?De.get(I).__webglFramebuffer:null;Ie.bindFramebuffer(D.FRAMEBUFFER,We);const et=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ef(D,et,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ae),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,q),D.deleteBuffer(ae),D.deleteSync(et),q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,L=null,U=0){M.isTexture!==!0&&(Rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,M=arguments[1]);const k=Math.pow(2,-U),P=Math.floor(M.image.width*k),q=Math.floor(M.image.height*k),V=L!==null?L.x:0,oe=L!==null?L.y:0;C.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,U,0,0,V,oe,P,q),Ie.unbindTexture()},this.copyTextureToTexture=function(M,L,U=null,k=null,P=0){M.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],L=arguments[2],P=arguments[3]||0,U=null);let q,V,oe,de,xe,he;U!==null?(q=U.max.x-U.min.x,V=U.max.y-U.min.y,oe=U.min.x,de=U.min.y):(q=M.image.width,V=M.image.height,oe=0,de=0),k!==null?(xe=k.x,he=k.y):(xe=0,he=0);const ae=Be.convert(L.format),We=Be.convert(L.type);C.setTexture2D(L,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const et=D.getParameter(D.UNPACK_ROW_LENGTH),tt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),at=D.getParameter(D.UNPACK_SKIP_PIXELS),Pe=D.getParameter(D.UNPACK_SKIP_ROWS),Re=D.getParameter(D.UNPACK_SKIP_IMAGES),mt=M.isCompressedTexture?M.mipmaps[P]:M.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,oe),D.pixelStorei(D.UNPACK_SKIP_ROWS,de),M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,P,xe,he,q,V,ae,We,mt.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,P,xe,he,mt.width,mt.height,ae,mt.data):D.texSubImage2D(D.TEXTURE_2D,P,xe,he,q,V,ae,We,mt),D.pixelStorei(D.UNPACK_ROW_LENGTH,et),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,at),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re),P===0&&L.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(M,L,U=null,k=null,P=0){M.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,k=arguments[1]||null,M=arguments[2],L=arguments[3],P=arguments[4]||0);let q,V,oe,de,xe,he,ae,We,et;const tt=M.isCompressedTexture?M.mipmaps[P]:M.image;U!==null?(q=U.max.x-U.min.x,V=U.max.y-U.min.y,oe=U.max.z-U.min.z,de=U.min.x,xe=U.min.y,he=U.min.z):(q=tt.width,V=tt.height,oe=tt.depth,de=0,xe=0,he=0),k!==null?(ae=k.x,We=k.y,et=k.z):(ae=0,We=0,et=0);const at=Be.convert(L.format),Pe=Be.convert(L.type);let Re;if(L.isData3DTexture)C.setTexture3D(L,0),Re=D.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)C.setTexture2DArray(L,0),Re=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const mt=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Mt=D.getParameter(D.UNPACK_SKIP_PIXELS),nn=D.getParameter(D.UNPACK_SKIP_ROWS),$t=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,de),D.pixelStorei(D.UNPACK_SKIP_ROWS,xe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,he),M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Re,P,ae,We,et,q,V,oe,at,Pe,tt.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,P,ae,We,et,q,V,oe,at,tt.data):D.texSubImage3D(Re,P,ae,We,et,q,V,oe,at,Pe,tt),D.pixelStorei(D.UNPACK_ROW_LENGTH,mt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,nn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,$t),P===0&&L.generateMipmaps&&D.generateMipmap(Re),Ie.unbindTexture()},this.initRenderTarget=function(M){De.get(M).__webglFramebuffer===void 0&&C.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?C.setTextureCube(M,0):M.isData3DTexture?C.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?C.setTexture2DArray(M,0):C.setTexture2D(M,0),Ie.unbindTexture()},this.resetState=function(){O=0,N=0,I=null,Ie.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ka?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Ws?"display-p3":"srgb"}}class O_ extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class F_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pa,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new z;class ec{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ec(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ll=new z,hl=new ct,ul=new ct,B_=new z,fl=new ke,ds=new z,Ro=new En,dl=new ke,Co=new Xs;class k_ extends Ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vc,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ds),this.boundingBox.expandByPoint(ds)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new En),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ds),this.boundingSphere.expandByPoint(ds)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(i),e.ray.intersectsSphere(Ro)!==!1&&(dl.copy(i).invert(),Co.copy(e.ray).applyMatrix4(dl),!(this.boundingBox!==null&&Co.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Co)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;hl.fromBufferAttribute(i.attributes.skinIndex,e),ul.fromBufferAttribute(i.attributes.skinWeight,e),ll.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=ul.getComponent(s);if(o!==0){const a=hl.getComponent(s);fl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(B_.copy(ll).applyMatrix4(fl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Bh extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class kh extends Rt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Gt,u=Gt,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pl=new ke,z_=new ke;class tc{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:z_;pl.multiplyMatrices(a,t[s]),pl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new tc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new kh(t,e,e,Qt,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Bh),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Da extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wi=new ke,ml=new ke,ps=[],gl=new Hn,H_=new ke,Sr=new Ut,Er=new En;class V_ extends Ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Da(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,H_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),gl.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(gl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Er.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),e.ray.intersectsSphere(Er)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Wi),ml.multiplyMatrices(n,Wi),Sr.matrixWorld=ml,Sr.raycast(e,ps);for(let o=0,a=ps.length;o<a;o++){const l=ps[o];l.instanceId=s,l.object=this,t.push(l)}ps.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new kh(new Float32Array(i*this.count),i,this.count,Wa,fn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class nc extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bs=new z,ks=new z,_l=new ke,Ar=new Xs,ms=new En,Io=new z,vl=new z;class ic extends xt{constructor(e=new _n,t=new nc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Bs.fromBufferAttribute(t,i-1),ks.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bs.distanceTo(ks);e.setAttribute("lineDistance",new mn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(i),ms.radius+=s,e.ray.intersectsSphere(ms)===!1)return;_l.copy(i).invert(),Ar.copy(e.ray).applyMatrix4(_l);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let y=p,m=_-1;y<m;y+=c){const g=u.getX(y),b=u.getX(y+1),T=gs(this,e,Ar,l,g,b);T&&t.push(T)}if(this.isLineLoop){const y=u.getX(_-1),m=u.getX(p),g=gs(this,e,Ar,l,y,m);g&&t.push(g)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=p,m=_-1;y<m;y+=c){const g=gs(this,e,Ar,l,y,y+1);g&&t.push(g)}if(this.isLineLoop){const y=gs(this,e,Ar,l,_-1,p);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gs(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(Bs.fromBufferAttribute(o,i),ks.fromBufferAttribute(o,s),t.distanceSqToSegment(Bs,ks,Io,vl)>n)return;Io.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Io);if(!(l<e.near||l>e.far))return{distance:l,point:vl.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const xl=new z,yl=new z;class zh extends ic{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)xl.fromBufferAttribute(t,i),yl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xl.distanceTo(yl);e.setAttribute("lineDistance",new mn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class G_ extends ic{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Hh extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ml=new ke,Na=new Xs,_s=new En,vs=new z;class W_ extends xt{constructor(e=new _n,t=new Hh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(i),_s.radius+=s,e.ray.intersectsSphere(_s)===!1)return;Ml.copy(i).invert(),Na.copy(e.ray).applyMatrix4(Ml);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,y=p;_<y;_++){const m=c.getX(_);vs.fromBufferAttribute(h,m),Sl(vs,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,y=p;_<y;_++)vs.fromBufferAttribute(h,_),Sl(vs,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Sl(r,e,t,n,i,s,o){const a=Na.distanceSqToPoint(r);if(a<t){const l=new z;Na.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ar extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class An extends ar{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function xs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function X_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function $_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function El(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Vh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class $r{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class q_ extends $r{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$i,endingEnd:$i}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case qi:s=e,a=2*t-n;break;case Ls:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qi:o=e,l=2*n-t;break;case Ls:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),y=_*_,m=y*_,g=-f*m+2*f*y-f*_,b=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*_+1,T=(-1-p)*m+(1.5+p)*y+.5*_,w=p*m-p*y;for(let O=0;O!==a;++O)s[O]=g*o[u+O]+b*o[c+O]+T*o[l+O]+w*o[h+O];return s}}class Gh extends $r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class j_ extends $r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xs(t,this.TimeBufferType),this.values=xs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xs(e.times,Array),values:xs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new j_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new q_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zr:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case Js:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Js}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&X_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Js,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,p=h+n;for(let _=0;_!==n;++_){const y=t[h+_];if(y!==t[f+_]||y!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Hr;class fr extends Tn{constructor(e,t,n){super(e,t,n)}}fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=zr;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Wh extends Tn{}Wh.prototype.ValueTypeName="color";class cr extends Tn{}cr.prototype.ValueTypeName="number";class K_ extends $r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)pn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class lr extends Tn{InterpolantFactoryMethodLinear(e){return new K_(this.times,this.values,this.getValueSize(),e)}}lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;class dr extends Tn{constructor(e,t,n){super(e,t,n)}}dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=zr;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class hr extends Tn{}hr.prototype.ValueTypeName="vector";class Ua{constructor(e="",t=-1,n=[],i=ja){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Z_(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Tn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=$_(l);l=El(l,1,u),c=El(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new cr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,_,y){if(p.length!==0){const m=[],g=[];Vh(p,m,g,_),m.length!==0&&y.push(new h(f,m,g))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let y=0;y<f[_].morphTargets.length;y++)p[f[_].morphTargets[y]]=-1;for(const y in p){const m=[],g=[];for(let b=0;b!==f[_].morphTargets.length;++b){const T=f[_];m.push(T.time),g.push(T.morphTarget===y?1:0)}i.push(new cr(".morphTargetInfluence["+y+"]",m,g))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(hr,p+".position",f,"pos",i),n(lr,p+".quaternion",f,"rot",i),n(hr,p+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Y_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cr;case"vector":case"vector2":case"vector3":case"vector4":return hr;case"color":return Wh;case"quaternion":return lr;case"bool":case"boolean":return fr;case"string":return dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Z_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Y_(r.type);if(r.times===void 0){const t=[],n=[];Vh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ei={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class J_{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Q_=new J_;class pr{constructor(e){this.manager=e!==void 0?e:Q_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}pr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pn={};class e0 extends Error{constructor(e,t){super(e),this.response=t}}class Xh extends pr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ei.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Pn[e]!==void 0){Pn[e].push({onLoad:t,onProgress:n,onError:i});return}Pn[e]=[],Pn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Pn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let y=0;const m=new ReadableStream({start(g){b();function b(){h.read().then(({done:T,value:w})=>{if(T)g.close();else{y+=w.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let N=0,I=u.length;N<I;N++){const H=u[N];H.onProgress&&H.onProgress(O)}g.enqueue(w),b()}},T=>{g.error(T)})}}});return new Response(m)}else throw new e0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{ei.add(e,c);const u=Pn[e];delete Pn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Pn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Pn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class t0 extends pr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ei.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Vr("img");function l(){u(),ei.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class $h extends pr{constructor(e){super(e)}load(e,t,n,i){const s=new Rt,o=new t0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class qs extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Po=new ke,Al=new z,Tl=new z;class rc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Za,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Al.setFromMatrixPosition(e.matrixWorld),t.position.copy(Al),Tl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tl),t.updateMatrixWorld(),Po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class n0 extends rc{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=sr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class i0 extends qs{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new n0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bl=new ke,Tr=new z,Lo=new z;class r0 extends rc{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tr),Lo.copy(n.position),Lo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Lo),n.updateMatrixWorld(),i.makeTranslation(-Tr.x,-Tr.y,-Tr.z),bl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl)}}class s0 extends qs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new r0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class o0 extends rc{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qh extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new o0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class a0 extends qs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Br{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class c0 extends pr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ei.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ei.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ei.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ei.add(e,l),s.manager.itemStart(e)}}class l0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){pn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;pn.multiplyQuaternionsFlat(e,o,e,t,e,n),pn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const sc="\\[\\]\\.:\\/",h0=new RegExp("["+sc+"]","g"),oc="[^"+sc+"]",u0="[^"+sc.replace("\\.","")+"]",f0=/((?:WC+[\/:])*)/.source.replace("WC",oc),d0=/(WCOD+)?/.source.replace("WCOD",u0),p0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),m0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),g0=new RegExp("^"+f0+d0+p0+m0+"$"),_0=["material","materials","bones","map"];class v0{constructor(e,t,n){const i=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(h0,"")}static parseTrackName(e){const t=g0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);_0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=v0;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class x0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:$i,endingEnd:$i};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Xu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case qu:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case ja:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===$u;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Wu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=qi,i.endingEnd=qi):(e?i.endingStart=this.zeroSlopeAtStart?qi:$i:i.endingStart=Ls,t?i.endingEnd=this.zeroSlopeAtEnd?qi:$i:i.endingEnd=Ls)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const y0=new Float32Array(1);class jh extends wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const f=i[h],p=f.name;let _=u[p];if(_!==void 0)++_.referenceCount,o[h]=_;else{if(_=o[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,p));continue}const y=t&&t._propertyBindings[h].binding.parsedPath;_=new l0(ht.create(n,p,y),f.ValueTypeName,f.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,p),o[h]=_}a[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Gh(new Float32Array(2),new Float32Array(2),1,y0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Ua.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ja),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new x0(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Ua.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class M0 extends zh{constructor(e=10,t=10,n=4473924,i=8947848){n=new Oe(n),i=new Oe(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,_=-a;f<=t;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=f===s?n:i;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const u=new _n;u.setAttribute("position",new mn(l,3)),u.setAttribute("color",new mn(c,3));const h=new nc({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);function Kh(r){const e=new Map,t=new Map,n=r.clone();return Yh(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Yh(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Yh(r.children[n],e.children[n],t)}function S0(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var e=r.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var i=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return r[n]}})}),t}var Ur={exports:{}},E0=Ur.exports,wl;function ac(){return wl||(wl=1,(function(r,e){(function(t,n){n(e)})(E0,(function(t){var n=function(v,d){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(x,A){x.__proto__=A}||function(x,A){for(var B in A)Object.prototype.hasOwnProperty.call(A,B)&&(x[B]=A[B])},n(v,d)};function i(v,d){if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");n(v,d);function x(){this.constructor=v}v.prototype=d===null?Object.create(d):(x.prototype=d.prototype,new x)}function s(v,d,x,A){var B=arguments.length,Y=B<3?d:A,Ce;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")Y=Reflect.decorate(v,d,x,A);else for(var be=v.length-1;be>=0;be--)(Ce=v[be])&&(Y=(B<3?Ce(Y):B>3?Ce(d,x,Y):Ce(d,x))||Y);return B>3&&Y&&Object.defineProperty(d,x,Y),Y}function o(v,d,x){if(arguments.length===2)for(var A=0,B=d.length,Y;A<B;A++)(Y||!(A in d))&&(Y||(Y=Array.prototype.slice.call(d,0,A)),Y[A]=d[A]);return v.concat(Y||Array.prototype.slice.call(d))}typeof SuppressedError=="function"&&SuppressedError;var a=255,l=213;t.OPERATION=void 0,(function(v){v[v.ADD=128]="ADD",v[v.REPLACE=0]="REPLACE",v[v.DELETE=64]="DELETE",v[v.DELETE_AND_ADD=192]="DELETE_AND_ADD",v[v.TOUCH=1]="TOUCH",v[v.CLEAR=10]="CLEAR"})(t.OPERATION||(t.OPERATION={}));var c=(function(){function v(d,x,A){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=d,this.setParent(x,A)}return v.prototype.setParent=function(d,x,A){var B=this;if(this.indexes||(this.indexes=this.ref instanceof pt?this.ref._definition.indexes:{}),this.parent=d,this.parentIndex=A,!!x)if(this.root=x,this.ref instanceof pt){var Y=this.ref._definition;for(var Ce in Y.schema){var be=this.ref[Ce];if(be&&be.$changes){var $e=Y.indexes[Ce];be.$changes.setParent(this.ref,x,$e)}}}else typeof this.ref=="object"&&this.ref.forEach(function(Ve,M){if(Ve instanceof pt){var L=Ve.$changes,U=B.ref.$changes.indexes[M];L.setParent(B.ref,B.root,U)}})},v.prototype.operation=function(d){this.changes.set(--this.currentCustomOperation,d)},v.prototype.change=function(d,x){x===void 0&&(x=t.OPERATION.ADD);var A=typeof d=="number"?d:this.indexes[d];this.assertValidIndex(A,d);var B=this.changes.get(A);(!B||B.op===t.OPERATION.DELETE||B.op===t.OPERATION.TOUCH)&&this.changes.set(A,{op:B&&B.op===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:x,index:A}),this.allChanges.add(A),this.changed=!0,this.touchParents()},v.prototype.touch=function(d){var x=typeof d=="number"?d:this.indexes[d];this.assertValidIndex(x,d),this.changes.has(x)||this.changes.set(x,{op:t.OPERATION.TOUCH,index:x}),this.allChanges.add(x),this.touchParents()},v.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},v.prototype.getType=function(d){if(this.ref._definition){var x=this.ref._definition;return x.schema[x.fieldsByIndex[d]]}else{var x=this.parent._definition,A=x.schema[x.fieldsByIndex[this.parentIndex]];return Object.values(A)[0]}},v.prototype.getChildrenFilter=function(){var d=this.parent._definition.childFilters;return d&&d[this.parentIndex]},v.prototype.getValue=function(d){return this.ref.getByIndex(d)},v.prototype.delete=function(d){var x=typeof d=="number"?d:this.indexes[d];if(x===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(d," (").concat(x,")"));return}var A=this.getValue(x);this.changes.set(x,{op:t.OPERATION.DELETE,index:x}),this.allChanges.delete(x),delete this.caches[x],A&&A.$changes&&(A.$changes.parent=void 0),this.changed=!0,this.touchParents()},v.prototype.discard=function(d,x){var A=this;d===void 0&&(d=!1),x===void 0&&(x=!1),this.ref instanceof pt||this.changes.forEach(function(B){if(B.op===t.OPERATION.DELETE){var Y=A.ref.getIndex(B.index);delete A.indexes[Y]}}),this.changes.clear(),this.changed=d,x&&this.allChanges.clear(),this.currentCustomOperation=0},v.prototype.discardAll=function(){var d=this;this.changes.forEach(function(x){var A=d.getValue(x.index);A&&A.$changes&&A.$changes.discardAll()}),this.discard()},v.prototype.cache=function(d,x){this.caches[d]=x},v.prototype.clone=function(){return new v(this.ref,this.parent,this.root)},v.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},v.prototype.assertValidIndex=function(d,x){if(d===void 0)throw new Error('ChangeTree: missing index for field "'.concat(x,'"'))},v})();function u(v,d,x,A){return v[d]||(v[d]=[]),v[d].push(x),A?.forEach(function(B,Y){return x(B,Y)}),function(){return f(v[d],v[d].indexOf(x))}}function h(v){var d=this,x=typeof this.$changes.getType()!="string";this.$items.forEach(function(A,B){v.push({refId:d.$changes.refId,op:t.OPERATION.DELETE,field:B,value:void 0,previousValue:A}),x&&d.$changes.root.removeRef(A.$changes.refId)})}function f(v,d){if(d===-1||d>=v.length)return!1;for(var x=v.length-1,A=d;A<x;A++)v[A]=v[A+1];return v.length=x,!0}var p=function(v,d){var x=v.toString(),A=d.toString();return x<A?-1:x>A?1:0};function _(v){return v.$proxy=!0,v=new Proxy(v,{get:function(d,x){return typeof x!="symbol"&&!isNaN(x)?d.at(x):d[x]},set:function(d,x,A){if(typeof x!="symbol"&&!isNaN(x)){var B=Array.from(d.$items.keys()),Y=parseInt(B[x]||x);A==null?d.deleteAt(Y):d.setAt(Y,A)}else d[x]=A;return!0},deleteProperty:function(d,x){return typeof x=="number"?d.deleteAt(x):delete d[x],!0},has:function(d,x){return typeof x!="symbol"&&!isNaN(Number(x))?d.$items.has(Number(x)):Reflect.has(d,x)}}),v}var y=(function(){function v(){for(var d=[],x=0;x<arguments.length;x++)d[x]=arguments[x];this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,d)}return v.prototype.onAdd=function(d,x){return x===void 0&&(x=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,d,x?this.$items:void 0)},v.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,d)},v.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,d)},v.is=function(d){return Array.isArray(d)||d.array!==void 0},Object.defineProperty(v.prototype,"length",{get:function(){return this.$items.size},set:function(d){d===0?this.clear():this.splice(d,this.length-d)},enumerable:!1,configurable:!0}),v.prototype.push=function(){for(var d=this,x=[],A=0;A<arguments.length;A++)x[A]=arguments[A];var B;return x.forEach(function(Y){B=d.$refId++,d.setAt(B,Y)}),B},v.prototype.pop=function(){var d=Array.from(this.$indexes.values()).pop();if(d!==void 0){this.$changes.delete(d),this.$indexes.delete(d);var x=this.$items.get(d);return this.$items.delete(d),x}},v.prototype.at=function(d){if(d=Math.trunc(d)||0,d<0&&(d+=this.length),!(d<0||d>=this.length)){var x=Array.from(this.$items.keys())[d];return this.$items.get(x)}},v.prototype.setAt=function(d,x){var A,B;if(x==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(d)!==x){x.$changes!==void 0&&x.$changes.setParent(this,this.$changes.root,d);var Y=(B=(A=this.$changes.indexes[d])===null||A===void 0?void 0:A.op)!==null&&B!==void 0?B:t.OPERATION.ADD;this.$changes.indexes[d]=d,this.$indexes.set(d,d),this.$items.set(d,x),this.$changes.change(d,Y)}},v.prototype.deleteAt=function(d){var x=Array.from(this.$items.keys())[d];return x===void 0?!1:this.$deleteAt(x)},v.prototype.$deleteAt=function(d){return this.$changes.delete(d),this.$indexes.delete(d),this.$items.delete(d)},v.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&h.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},v.prototype.concat=function(){for(var d,x=[],A=0;A<arguments.length;A++)x[A]=arguments[A];return new(v.bind.apply(v,o([void 0],(d=Array.from(this.$items.values())).concat.apply(d,x),!1)))},v.prototype.join=function(d){return Array.from(this.$items.values()).join(d)},v.prototype.reverse=function(){var d=this,x=Array.from(this.$items.keys()),A=Array.from(this.$items.values()).reverse();return A.forEach(function(B,Y){d.setAt(x[Y],B)}),this},v.prototype.shift=function(){var d=Array.from(this.$items.keys()),x=d.shift();if(x!==void 0){var A=this.$items.get(x);return this.$deleteAt(x),A}},v.prototype.slice=function(d,x){var A=new v;return A.push.apply(A,Array.from(this.$items.values()).slice(d,x)),A},v.prototype.sort=function(d){var x=this;d===void 0&&(d=p);var A=Array.from(this.$items.keys()),B=Array.from(this.$items.values()).sort(d);return B.forEach(function(Y,Ce){x.setAt(A[Ce],Y)}),this},v.prototype.splice=function(d,x){x===void 0&&(x=this.length-d);for(var A=[],B=2;B<arguments.length;B++)A[B-2]=arguments[B];for(var Y=Array.from(this.$items.keys()),Ce=[],be=d;be<d+x;be++)Ce.push(this.$items.get(Y[be])),this.$deleteAt(Y[be]);for(var be=0;be<A.length;be++)this.setAt(d+be,A[be]);return Ce},v.prototype.unshift=function(){for(var d=this,x=[],A=0;A<arguments.length;A++)x[A]=arguments[A];var B=this.length,Y=x.length,Ce=Array.from(this.$items.values());return x.forEach(function(be,$e){d.setAt($e,be)}),Ce.forEach(function(be,$e){d.setAt(Y+$e,be)}),B+Y},v.prototype.indexOf=function(d,x){return Array.from(this.$items.values()).indexOf(d,x)},v.prototype.lastIndexOf=function(d,x){return x===void 0&&(x=this.length-1),Array.from(this.$items.values()).lastIndexOf(d,x)},v.prototype.every=function(d,x){return Array.from(this.$items.values()).every(d,x)},v.prototype.some=function(d,x){return Array.from(this.$items.values()).some(d,x)},v.prototype.forEach=function(d,x){Array.from(this.$items.values()).forEach(d,x)},v.prototype.map=function(d,x){return Array.from(this.$items.values()).map(d,x)},v.prototype.filter=function(d,x){return Array.from(this.$items.values()).filter(d,x)},v.prototype.reduce=function(d,x){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},v.prototype.reduceRight=function(d,x){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},v.prototype.find=function(d,x){return Array.from(this.$items.values()).find(d,x)},v.prototype.findIndex=function(d,x){return Array.from(this.$items.values()).findIndex(d,x)},v.prototype.fill=function(d,x,A){throw new Error("ArraySchema#fill() not implemented")},v.prototype.copyWithin=function(d,x,A){throw new Error("ArraySchema#copyWithin() not implemented")},v.prototype.toString=function(){return this.$items.toString()},v.prototype.toLocaleString=function(){return this.$items.toLocaleString()},v.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(v,Symbol.species,{get:function(){return v},enumerable:!1,configurable:!0}),v.prototype.entries=function(){return this.$items.entries()},v.prototype.keys=function(){return this.$items.keys()},v.prototype.values=function(){return this.$items.values()},v.prototype.includes=function(d,x){return Array.from(this.$items.values()).includes(d,x)},v.prototype.flatMap=function(d,x){throw new Error("ArraySchema#flatMap() is not supported.")},v.prototype.flat=function(d){throw new Error("ArraySchema#flat() is not supported.")},v.prototype.findLast=function(){var d=Array.from(this.$items.values());return d.findLast.apply(d,arguments)},v.prototype.findLastIndex=function(){var d=Array.from(this.$items.values());return d.findLastIndex.apply(d,arguments)},v.prototype.with=function(d,x){var A=Array.from(this.$items.values());return A[d]=x,new(v.bind.apply(v,o([void 0],A,!1)))},v.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},v.prototype.toSorted=function(d){return Array.from(this.$items.values()).sort(d)},v.prototype.toSpliced=function(d,x){var A=Array.from(this.$items.values());return A.toSpliced.apply(A,arguments)},v.prototype.setIndex=function(d,x){this.$indexes.set(d,x)},v.prototype.getIndex=function(d){return this.$indexes.get(d)},v.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},v.prototype.deleteByIndex=function(d){var x=this.$indexes.get(d);this.$items.delete(x),this.$indexes.delete(d)},v.prototype.toArray=function(){return Array.from(this.$items.values())},v.prototype.toJSON=function(){return this.toArray().map(function(d){return typeof d.toJSON=="function"?d.toJSON():d})},v.prototype.clone=function(d){var x;return d?x=new(v.bind.apply(v,o([void 0],Array.from(this.$items.values()),!1))):x=new(v.bind.apply(v,o([void 0],this.map(function(A){return A.$changes?A.clone():A}),!1))),x},v})();function m(v){return v.$proxy=!0,v=new Proxy(v,{get:function(d,x){return typeof x!="symbol"&&typeof d[x]>"u"?d.get(x):d[x]},set:function(d,x,A){return typeof x!="symbol"&&x.indexOf("$")===-1&&x!=="onAdd"&&x!=="onRemove"&&x!=="onChange"?d.set(x,A):d[x]=A,!0},deleteProperty:function(d,x){return d.delete(x),!0}}),v}var g=(function(){function v(d){var x=this;if(this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,d)if(d instanceof Map||d instanceof v)d.forEach(function(B,Y){return x.set(Y,B)});else for(var A in d)this.set(A,d[A])}return v.prototype.onAdd=function(d,x){return x===void 0&&(x=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,d,x?this.$items:void 0)},v.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,d)},v.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,d)},v.is=function(d){return d.map!==void 0},v.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(v.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(v,Symbol.species,{get:function(){return v},enumerable:!1,configurable:!0}),v.prototype.set=function(d,x){if(x==null)throw new Error("MapSchema#set('".concat(d,"', ").concat(x,"): trying to set ").concat(x," value on '").concat(d,"'."));d=d.toString();var A=typeof this.$changes.indexes[d]<"u",B=A?this.$changes.indexes[d]:this.$refId++,Y=A?t.OPERATION.REPLACE:t.OPERATION.ADD,Ce=x.$changes!==void 0;if(Ce&&x.$changes.setParent(this,this.$changes.root,B),!A)this.$changes.indexes[d]=B,this.$indexes.set(B,d);else{if(!Ce&&this.$items.get(d)===x)return;Ce&&this.$items.get(d)!==x&&(Y=t.OPERATION.ADD)}return this.$items.set(d,x),this.$changes.change(d,Y),this},v.prototype.get=function(d){return this.$items.get(d)},v.prototype.delete=function(d){return this.$changes.delete(d.toString()),this.$items.delete(d)},v.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&h.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},v.prototype.has=function(d){return this.$items.has(d)},v.prototype.forEach=function(d){this.$items.forEach(d)},v.prototype.entries=function(){return this.$items.entries()},v.prototype.keys=function(){return this.$items.keys()},v.prototype.values=function(){return this.$items.values()},Object.defineProperty(v.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),v.prototype.setIndex=function(d,x){this.$indexes.set(d,x)},v.prototype.getIndex=function(d){return this.$indexes.get(d)},v.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},v.prototype.deleteByIndex=function(d){var x=this.$indexes.get(d);this.$items.delete(x),this.$indexes.delete(d)},v.prototype.toJSON=function(){var d={};return this.forEach(function(x,A){d[A]=typeof x.toJSON=="function"?x.toJSON():x}),d},v.prototype.clone=function(d){var x;return d?x=Object.assign(new v,this):(x=new v,this.forEach(function(A,B){A.$changes?x.set(B,A.clone()):x.set(B,A)})),x},v})(),b={};function T(v,d){b[v]=d}function w(v){return b[v]}var O=(function(){function v(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return v.create=function(d){var x=new v;return x.schema=Object.assign({},d&&d.schema||{}),x.indexes=Object.assign({},d&&d.indexes||{}),x.fieldsByIndex=Object.assign({},d&&d.fieldsByIndex||{}),x.descriptors=Object.assign({},d&&d.descriptors||{}),x.deprecated=Object.assign({},d&&d.deprecated||{}),x},v.prototype.addField=function(d,x){var A=this.getNextFieldIndex();this.fieldsByIndex[A]=d,this.indexes[d]=A,this.schema[d]=Array.isArray(x)?{array:x[0]}:x},v.prototype.hasField=function(d){return this.indexes[d]!==void 0},v.prototype.addFilter=function(d,x){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[d]]=x,this.indexesWithFilters.push(this.indexes[d]),!0},v.prototype.addChildrenFilter=function(d,x){var A=this.indexes[d],B=this.schema[d];if(w(Object.keys(B)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[A]=x,!0;console.warn("@filterChildren: field '".concat(d,"' can't have children. Ignoring filter."))},v.prototype.getChildrenFilter=function(d){return this.childFilters&&this.childFilters[this.indexes[d]]},v.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},v})();function N(v){return v._context&&v._context.useFilters}var I=(function(){function v(){this.types={},this.schemas=new Map,this.useFilters=!1}return v.prototype.has=function(d){return this.schemas.has(d)},v.prototype.get=function(d){return this.types[d]},v.prototype.add=function(d,x){x===void 0&&(x=this.schemas.size),d._definition=O.create(d._definition),d._typeid=x,this.types[x]=d,this.schemas.set(d,x)},v.create=function(d){return d===void 0&&(d={}),function(x){return d.context||(d.context=new v),te(x,d)}},v})(),H=new I;function te(v,d){return d===void 0&&(d={}),function(x,A){var B=d.context||H,Y=x.constructor;if(Y._context=B,!v)throw new Error("".concat(Y.name,': @type() reference provided for "').concat(A,`" is undefined. Make sure you don't have any circular dependencies.`));B.has(Y)||B.add(Y);var Ce=Y._definition;if(Ce.addField(A,v),Ce.descriptors[A]){if(Ce.deprecated[A])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(A,"' definition on '").concat(Y.name,`'.
Check @type() annotation`))}catch(U){var be=U.stack.split(`
`)[4].trim();throw new Error("".concat(U.message," ").concat(be))}}var $e=y.is(v),Ve=!$e&&g.is(v);if(typeof v!="string"&&!pt.is(v)){var M=Object.values(v)[0];typeof M!="string"&&!B.has(M)&&B.add(M)}if(d.manual){Ce.descriptors[A]={enumerable:!0,configurable:!0,writable:!0};return}var L="_".concat(A);Ce.descriptors[L]={enumerable:!1,configurable:!1,writable:!0},Ce.descriptors[A]={get:function(){return this[L]},set:function(U){U!==this[L]&&(U!=null?($e&&!(U instanceof y)&&(U=new(y.bind.apply(y,o([void 0],U,!1)))),Ve&&!(U instanceof g)&&(U=new g(U)),U.$proxy===void 0&&(Ve?U=m(U):$e&&(U=_(U))),this.$changes.change(A),U.$changes&&U.$changes.setParent(this,this.$changes.root,this._definition.indexes[A])):this[L]!==void 0&&this.$changes.delete(A),this[L]=U)},enumerable:!0,configurable:!0}}}function S(v){return function(d,x){var A=d.constructor,B=A._definition;B.addFilter(x,v)&&(A._context.useFilters=!0)}}function R(v){return function(d,x){var A=d.constructor,B=A._definition;B.addChildrenFilter(x,v)&&(A._context.useFilters=!0)}}function K(v){return v===void 0&&(v=!0),function(d,x){var A=d.constructor,B=A._definition;B.deprecated[x]=!0,v&&(B.descriptors[x]={get:function(){throw new Error("".concat(x," is deprecated."))},set:function(Y){},enumerable:!1,configurable:!0})}}function W(v,d,x){x===void 0&&(x={}),x.context||(x.context=v._context||x.context||H);for(var A in d)te(d[A],x)(v.prototype,A);return v}function ne(v){for(var d=0,x=0,A=0,B=v.length;A<B;A++)d=v.charCodeAt(A),d<128?x+=1:d<2048?x+=2:d<55296||d>=57344?x+=3:(A++,x+=4);return x}function re(v,d,x){for(var A=0,B=0,Y=x.length;B<Y;B++)A=x.charCodeAt(B),A<128?v[d++]=A:A<2048?(v[d++]=192|A>>6,v[d++]=128|A&63):A<55296||A>=57344?(v[d++]=224|A>>12,v[d++]=128|A>>6&63,v[d++]=128|A&63):(B++,A=65536+((A&1023)<<10|x.charCodeAt(B)&1023),v[d++]=240|A>>18,v[d++]=128|A>>12&63,v[d++]=128|A>>6&63,v[d++]=128|A&63)}function j(v,d){v.push(d&255)}function Q(v,d){v.push(d&255)}function $(v,d){v.push(d&255),v.push(d>>8&255)}function ye(v,d){v.push(d&255),v.push(d>>8&255)}function ve(v,d){v.push(d&255),v.push(d>>8&255),v.push(d>>16&255),v.push(d>>24&255)}function Me(v,d){var x=d>>24,A=d>>16,B=d>>8,Y=d;v.push(Y&255),v.push(B&255),v.push(A&255),v.push(x&255)}function Qe(v,d){var x=Math.floor(d/Math.pow(2,32)),A=d>>>0;Me(v,A),Me(v,x)}function st(v,d){var x=d/Math.pow(2,32)>>0,A=d>>>0;Me(v,A),Me(v,x)}function Z(v,d){Le(v,d)}function ce(v,d){Xe(v,d)}var Se=new Int32Array(2),Ee=new Float32Array(Se.buffer),Fe=new Float64Array(Se.buffer);function Le(v,d){Ee[0]=d,ve(v,Se[0])}function Xe(v,d){Fe[0]=d,ve(v,Se[0]),ve(v,Se[1])}function lt(v,d){return Q(v,d?1:0)}function Ge(v,d){d||(d="");var x=ne(d),A=0;if(x<32)v.push(x|160),A=1;else if(x<256)v.push(217),Q(v,x),A=2;else if(x<65536)v.push(218),ye(v,x),A=3;else if(x<4294967296)v.push(219),Me(v,x),A=5;else throw new Error("String too long");return re(v,v.length,d),A+x}function D(v,d){if(isNaN(d))return D(v,0);if(isFinite(d)){if(d!==(d|0))return v.push(203),Xe(v,d),9}else return D(v,d>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return d>=0?d<128?(Q(v,d),1):d<256?(v.push(204),Q(v,d),2):d<65536?(v.push(205),ye(v,d),3):d<4294967296?(v.push(206),Me(v,d),5):(v.push(207),st(v,d),9):d>=-32?(v.push(224|d+32),1):d>=-128?(v.push(208),j(v,d),2):d>=-32768?(v.push(209),$(v,d),3):d>=-2147483648?(v.push(210),ve(v,d),5):(v.push(211),Qe(v,d),9)}var Ct=Object.freeze({__proto__:null,boolean:lt,float32:Z,float64:ce,int16:$,int32:ve,int64:Qe,int8:j,number:D,string:Ge,uint16:ye,uint32:Me,uint64:st,uint8:Q,utf8Write:re,writeFloat32:Le,writeFloat64:Xe});function je(v,d,x){for(var A="",B=0,Y=d,Ce=d+x;Y<Ce;Y++){var be=v[Y];if((be&128)===0){A+=String.fromCharCode(be);continue}if((be&224)===192){A+=String.fromCharCode((be&31)<<6|v[++Y]&63);continue}if((be&240)===224){A+=String.fromCharCode((be&15)<<12|(v[++Y]&63)<<6|(v[++Y]&63)<<0);continue}if((be&248)===240){B=(be&7)<<18|(v[++Y]&63)<<12|(v[++Y]&63)<<6|(v[++Y]&63)<<0,B>=65536?(B-=65536,A+=String.fromCharCode((B>>>10)+55296,(B&1023)+56320)):A+=String.fromCharCode(B);continue}console.error("Invalid byte "+be.toString(16))}return A}function Ze(v,d){return Ie(v,d)<<24>>24}function Ie(v,d){return v[d.offset++]}function dt(v,d){return De(v,d)<<16>>16}function De(v,d){return v[d.offset++]|v[d.offset++]<<8}function C(v,d){return v[d.offset++]|v[d.offset++]<<8|v[d.offset++]<<16|v[d.offset++]<<24}function E(v,d){return C(v,d)>>>0}function G(v,d){return Ke(v,d)}function ee(v,d){return le(v,d)}function se(v,d){var x=E(v,d),A=C(v,d)*Math.pow(2,32);return A+x}function J(v,d){var x=E(v,d),A=E(v,d)*Math.pow(2,32);return A+x}var we=new Int32Array(2),fe=new Float32Array(we.buffer),Ae=new Float64Array(we.buffer);function Ke(v,d){return we[0]=C(v,d),fe[0]}function le(v,d){return we[0]=C(v,d),we[1]=C(v,d),Ae[0]}function Te(v,d){return Ie(v,d)>0}function Ne(v,d){var x=v[d.offset++],A;x<192?A=x&31:x===217?A=Ie(v,d):x===218?A=De(v,d):x===219&&(A=E(v,d));var B=je(v,d.offset,A);return d.offset+=A,B}function Ue(v,d){var x=v[d.offset];return x<192&&x>160||x===217||x===218||x===219}function pe(v,d){var x=v[d.offset++];if(x<128)return x;if(x===202)return Ke(v,d);if(x===203)return le(v,d);if(x===204)return Ie(v,d);if(x===205)return De(v,d);if(x===206)return E(v,d);if(x===207)return J(v,d);if(x===208)return Ze(v,d);if(x===209)return dt(v,d);if(x===210)return C(v,d);if(x===211)return se(v,d);if(x>223)return(255-x+1)*-1}function Ye(v,d){var x=v[d.offset];return x<128||x>=202&&x<=211}function Be(v,d){return v[d.offset]<160}function ut(v,d){return v[d.offset-1]===a&&(v[d.offset]<128||v[d.offset]>=202&&v[d.offset]<=211)}var F=Object.freeze({__proto__:null,arrayCheck:Be,boolean:Te,float32:G,float64:ee,int16:dt,int32:C,int64:se,int8:Ze,number:pe,numberCheck:Ye,readFloat32:Ke,readFloat64:le,string:Ne,stringCheck:Ue,switchStructureCheck:ut,uint16:De,uint32:E,uint64:J,uint8:Ie}),me=(function(){function v(d){var x=this;this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,d&&d.forEach(function(A){return x.add(A)})}return v.prototype.onAdd=function(d,x){return x===void 0&&(x=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,d,x?this.$items:void 0)},v.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,d)},v.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,d)},v.is=function(d){return d.collection!==void 0},v.prototype.add=function(d){var x=this.$refId++,A=d.$changes!==void 0;return A&&d.$changes.setParent(this,this.$changes.root,x),this.$changes.indexes[x]=x,this.$indexes.set(x,x),this.$items.set(x,d),this.$changes.change(x),x},v.prototype.at=function(d){var x=Array.from(this.$items.keys())[d];return this.$items.get(x)},v.prototype.entries=function(){return this.$items.entries()},v.prototype.delete=function(d){for(var x=this.$items.entries(),A,B;(B=x.next())&&!B.done;)if(d===B.value[1]){A=B.value[0];break}return A===void 0?!1:(this.$changes.delete(A),this.$indexes.delete(A),this.$items.delete(A))},v.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&h.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},v.prototype.has=function(d){return Array.from(this.$items.values()).some(function(x){return x===d})},v.prototype.forEach=function(d){var x=this;this.$items.forEach(function(A,B,Y){return d(A,B,x)})},v.prototype.values=function(){return this.$items.values()},Object.defineProperty(v.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),v.prototype.setIndex=function(d,x){this.$indexes.set(d,x)},v.prototype.getIndex=function(d){return this.$indexes.get(d)},v.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},v.prototype.deleteByIndex=function(d){var x=this.$indexes.get(d);this.$items.delete(x),this.$indexes.delete(d)},v.prototype.toArray=function(){return Array.from(this.$items.values())},v.prototype.toJSON=function(){var d=[];return this.forEach(function(x,A){d.push(typeof x.toJSON=="function"?x.toJSON():x)}),d},v.prototype.clone=function(d){var x;return d?x=Object.assign(new v,this):(x=new v,this.forEach(function(A){A.$changes?x.add(A.clone()):x.add(A)})),x},v})(),X=(function(){function v(d){var x=this;this.$changes=new c(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,d&&d.forEach(function(A){return x.add(A)})}return v.prototype.onAdd=function(d,x){return x===void 0&&(x=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,d,x?this.$items:void 0)},v.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,d)},v.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,d)},v.is=function(d){return d.set!==void 0},v.prototype.add=function(d){var x,A;if(this.has(d))return!1;var B=this.$refId++;d.$changes!==void 0&&d.$changes.setParent(this,this.$changes.root,B);var Y=(A=(x=this.$changes.indexes[B])===null||x===void 0?void 0:x.op)!==null&&A!==void 0?A:t.OPERATION.ADD;return this.$changes.indexes[B]=B,this.$indexes.set(B,B),this.$items.set(B,d),this.$changes.change(B,Y),B},v.prototype.entries=function(){return this.$items.entries()},v.prototype.delete=function(d){for(var x=this.$items.entries(),A,B;(B=x.next())&&!B.done;)if(d===B.value[1]){A=B.value[0];break}return A===void 0?!1:(this.$changes.delete(A),this.$indexes.delete(A),this.$items.delete(A))},v.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&h.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},v.prototype.has=function(d){for(var x=this.$items.values(),A=!1,B;(B=x.next())&&!B.done;)if(d===B.value){A=!0;break}return A},v.prototype.forEach=function(d){var x=this;this.$items.forEach(function(A,B,Y){return d(A,B,x)})},v.prototype.values=function(){return this.$items.values()},Object.defineProperty(v.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),v.prototype.setIndex=function(d,x){this.$indexes.set(d,x)},v.prototype.getIndex=function(d){return this.$indexes.get(d)},v.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},v.prototype.deleteByIndex=function(d){var x=this.$indexes.get(d);this.$items.delete(x),this.$indexes.delete(d)},v.prototype.toArray=function(){return Array.from(this.$items.values())},v.prototype.toJSON=function(){var d=[];return this.forEach(function(x,A){d.push(typeof x.toJSON=="function"?x.toJSON():x)}),d},v.prototype.clone=function(d){var x;return d?x=Object.assign(new v,this):(x=new v,this.forEach(function(A){A.$changes?x.add(A.clone()):x.add(A)})),x},v})(),ie=(function(){function v(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return v.prototype.addRefId=function(d){this.refIds.has(d)||(this.refIds.add(d),this.containerIndexes.set(d,new Set))},v.get=function(d){return d.$filterState===void 0&&(d.$filterState=new v),d.$filterState},v})(),ge=(function(){function v(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return v.prototype.getNextUniqueId=function(){return this.nextUniqueId++},v.prototype.addRef=function(d,x,A){A===void 0&&(A=!0),this.refs.set(d,x),A&&(this.refCounts[d]=(this.refCounts[d]||0)+1)},v.prototype.removeRef=function(d){var x=this.refCounts[d];if(x===void 0){console.warn("trying to remove reference ".concat(d," that doesn't exist"));return}if(x===0){console.warn("trying to remove reference ".concat(d," with 0 refCount"));return}this.refCounts[d]=x-1,this.deletedRefs.add(d)},v.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},v.prototype.garbageCollectDeletedRefs=function(){var d=this;this.deletedRefs.forEach(function(x){if(!(d.refCounts[x]>0)){var A=d.refs.get(x);if(A instanceof pt)for(var B in A._definition.schema)typeof A._definition.schema[B]!="string"&&A[B]&&A[B].$changes&&d.removeRef(A[B].$changes.refId);else{var Y=A.$changes.parent._definition,Ce=Y.schema[Y.fieldsByIndex[A.$changes.parentIndex]];typeof Object.values(Ce)[0]=="function"&&Array.from(A.values()).forEach(function(be){return d.removeRef(be.$changes.refId)})}d.refs.delete(x),delete d.refCounts[x]}}),this.deletedRefs.clear()},v})(),_e=(function(v){i(d,v);function d(){return v!==null&&v.apply(this,arguments)||this}return d})(Error);function Je(v,d,x,A){var B,Y=!1;switch(d){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":B="number",isNaN(v)&&console.log('trying to encode "NaN" in '.concat(x.constructor.name,"#").concat(A));break;case"string":B="string",Y=!0;break;case"boolean":return}if(typeof v!==B&&(!Y||Y&&v!==null)){var Ce="'".concat(JSON.stringify(v),"'").concat(v&&v.constructor&&" (".concat(v.constructor.name,")")||"");throw new _e("a '".concat(B,"' was expected, but ").concat(Ce," was provided in ").concat(x.constructor.name,"#").concat(A))}}function vt(v,d,x,A){if(!(v instanceof d))throw new _e("a '".concat(d.name,"' was expected, but '").concat(v.constructor.name,"' was provided in ").concat(x.constructor.name,"#").concat(A))}function Pt(v,d,x,A,B){Je(x,v,A,B);var Y=Ct[v];if(Y)Y(d,x);else throw new _e("a '".concat(v,"' was expected, but ").concat(x," was provided in ").concat(A.constructor.name,"#").concat(B))}function rt(v,d,x){return F[v](d,x)}var pt=(function(){function v(){for(var d=[],x=0;x<arguments.length;x++)d[x]=arguments[x];Object.defineProperties(this,{$changes:{value:new c(this,void 0,new ge),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var A=this._definition.descriptors;A&&Object.defineProperties(this,A),d[0]&&this.assign(d[0])}return v.onError=function(d){console.error(d)},v.is=function(d){return d._definition&&d._definition.schema!==void 0},v.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,d)},v.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,d)},v.prototype.assign=function(d){return Object.assign(this,d),this},Object.defineProperty(v.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),v.prototype.setDirty=function(d,x){this.$changes.change(d,x)},v.prototype.listen=function(d,x,A){var B=this;return A===void 0&&(A=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[d]||(this.$callbacks[d]=[]),this.$callbacks[d].push(x),A&&this[d]!==void 0&&x(this[d],void 0),function(){return f(B.$callbacks[d],B.$callbacks[d].indexOf(x))}},v.prototype.decode=function(d,x,A){x===void 0&&(x={offset:0}),A===void 0&&(A=this);var B=[],Y=this.$changes.root,Ce=d.length,be=0;for(Y.refs.set(be,this);x.offset<Ce;){var $e=d[x.offset++];if($e==a){be=pe(d,x);var Ve=Y.refs.get(be);if(!Ve)throw new Error('"refId" not found: '.concat(be));A=Ve;continue}var M=A.$changes,L=A._definition!==void 0,U=L?$e>>6<<6:$e;if(U===t.OPERATION.CLEAR){A.clear(B);continue}var k=L?$e%(U||255):pe(d,x),P=L?A._definition.fieldsByIndex[k]:"",q=M.getType(k),V=void 0,oe=void 0,de=void 0;if(L?oe=A["_".concat(P)]:(oe=A.getByIndex(k),(U&t.OPERATION.ADD)===t.OPERATION.ADD?(de=A instanceof g?Ne(d,x):k,A.setIndex(k,de)):de=A.getIndex(k)),(U&t.OPERATION.DELETE)===t.OPERATION.DELETE&&(U!==t.OPERATION.DELETE_AND_ADD&&A.deleteByIndex(k),oe&&oe.$changes&&Y.removeRef(oe.$changes.refId),V=null),P===void 0){console.warn("@colyseus/schema: definition mismatch");for(var xe={offset:x.offset};x.offset<Ce&&!(ut(d,x)&&(xe.offset=x.offset+1,Y.refs.has(pe(d,xe))));)x.offset++;continue}else if(U!==t.OPERATION.DELETE)if(v.is(q)){var he=pe(d,x);if(V=Y.refs.get(he),U!==t.OPERATION.REPLACE){var ae=this.getSchemaType(d,x,q);V||(V=this.createTypeInstance(ae),V.$changes.refId=he,oe&&(V.$callbacks=oe.$callbacks,oe.$changes.refId&&he!==oe.$changes.refId&&Y.removeRef(oe.$changes.refId))),Y.addRef(he,V,V!==oe)}}else if(typeof q=="string")V=rt(q,d,x);else{var We=w(Object.keys(q)[0]),et=pe(d,x),tt=Y.refs.has(et)?oe||Y.refs.get(et):new We.constructor;if(V=tt.clone(!0),V.$changes.refId=et,oe&&(V.$callbacks=oe.$callbacks,oe.$changes.refId&&et!==oe.$changes.refId)){Y.removeRef(oe.$changes.refId);for(var at=oe.entries(),Pe=void 0;(Pe=at.next())&&!Pe.done;){var Re=Pe.value,mt=Re[0],nt=Re[1];B.push({refId:et,op:t.OPERATION.DELETE,field:mt,value:void 0,previousValue:nt})}}Y.addRef(et,V,tt!==oe)}if(V!=null){if(V.$changes&&V.$changes.setParent(M.ref,M.root,k),A instanceof v)A[P]=V;else if(A instanceof g){var mt=de;A.$items.set(mt,V),A.$changes.allChanges.add(k)}else if(A instanceof y)A.setAt(k,V);else if(A instanceof me){var Mt=A.add(V);A.setIndex(k,Mt)}else if(A instanceof X){var Mt=A.add(V);Mt!==!1&&A.setIndex(k,Mt)}}oe!==V&&B.push({refId:be,op:U,field:P,dynamicIndex:de,value:V,previousValue:oe})}return this._triggerChanges(B),Y.garbageCollectDeletedRefs(),B},v.prototype.encode=function(d,x,A){d===void 0&&(d=!1),x===void 0&&(x=[]),A===void 0&&(A=!1);for(var B=this.$changes,Y=new WeakSet,Ce=[B],be=1,$e=0;$e<be;$e++){var Ve=Ce[$e],M=Ve.ref,L=M instanceof v;Ve.ensureRefId(),Y.add(Ve),Ve!==B&&(Ve.changed||d)&&(Q(x,a),D(x,Ve.refId));for(var U=Array.from(d?Ve.allChanges:Ve.changes.values()),k=0,P=U.length;k<P;k++){var q=d?{op:t.OPERATION.ADD,index:U[k]}:U[k],V=q.index,oe=L?M._definition.fieldsByIndex&&M._definition.fieldsByIndex[V]:V,de=x.length;if(q.op!==t.OPERATION.TOUCH)if(L)Q(x,V|q.op);else{if(Q(x,q.op),q.op===t.OPERATION.CLEAR)continue;D(x,V)}if(!L&&(q.op&t.OPERATION.ADD)==t.OPERATION.ADD&&M instanceof g){var xe=Ve.ref.$indexes.get(V);Ge(x,xe)}if(q.op!==t.OPERATION.DELETE){var he=Ve.getType(V),ae=Ve.getValue(V);if(ae&&ae.$changes&&!Y.has(ae.$changes)&&(Ce.push(ae.$changes),ae.$changes.ensureRefId(),be++),q.op!==t.OPERATION.TOUCH){if(v.is(he))vt(ae,he,M,oe),D(x,ae.$changes.refId),(q.op&t.OPERATION.ADD)===t.OPERATION.ADD&&this.tryEncodeTypeId(x,he,ae.constructor);else if(typeof he=="string")Pt(he,x,ae,M,oe);else{var We=w(Object.keys(he)[0]);vt(M["_".concat(oe)],We.constructor,M,oe),D(x,ae.$changes.refId)}A&&Ve.cache(V,x.slice(de))}}}!d&&!A&&Ve.discard()}return x},v.prototype.encodeAll=function(d){return this.encode(!0,[],d)},v.prototype.applyFilters=function(d,x){var A,B;x===void 0&&(x=!1);for(var Y=this,Ce=new Set,be=ie.get(d),$e=[this.$changes],Ve=1,M=[],L=function(k){var P=$e[k];if(Ce.has(P.refId))return"continue";var q=P.ref,V=q instanceof v;Q(M,a),D(M,P.refId);var oe=be.refIds.has(P),de=x||!oe;be.addRefId(P);var xe=be.containerIndexes.get(P),he=Array.from(de?P.allChanges:P.changes.values());if(!x&&V&&q._definition.indexesWithFilters){var ae=q._definition.indexesWithFilters;ae.forEach(function(nn){!xe.has(nn)&&P.allChanges.has(nn)&&(de?he.push(nn):he.push({op:t.OPERATION.ADD,index:nn}))})}for(var We=0,et=he.length;We<et;We++){var tt=de?{op:t.OPERATION.ADD,index:he[We]}:he[We];if(tt.op===t.OPERATION.CLEAR){Q(M,tt.op);continue}var at=tt.index;if(tt.op===t.OPERATION.DELETE){V?Q(M,tt.op|at):(Q(M,tt.op),D(M,at));continue}var Pe=P.getValue(at),Re=P.getType(at);if(V){var mt=q._definition.filters&&q._definition.filters[at];if(mt&&!mt.call(q,d,Pe,Y)){Pe&&Pe.$changes&&Ce.add(Pe.$changes.refId);continue}}else{var nt=P.parent,mt=P.getChildrenFilter();if(mt&&!mt.call(nt,d,q.$indexes.get(at),Pe,Y)){Pe&&Pe.$changes&&Ce.add(Pe.$changes.refId);continue}}if(Pe.$changes&&($e.push(Pe.$changes),Ve++),tt.op!==t.OPERATION.TOUCH)if(tt.op===t.OPERATION.ADD||V)M.push.apply(M,(A=P.caches[at])!==null&&A!==void 0?A:[]),xe.add(at);else if(xe.has(at))M.push.apply(M,(B=P.caches[at])!==null&&B!==void 0?B:[]);else{if(xe.add(at),Q(M,t.OPERATION.ADD),D(M,at),q instanceof g){var Mt=P.ref.$indexes.get(at);Ge(M,Mt)}Pe.$changes?D(M,Pe.$changes.refId):Ct[Re](M,Pe)}else if(Pe.$changes&&!V){if(Q(M,t.OPERATION.ADD),D(M,at),q instanceof g){var Mt=P.ref.$indexes.get(at);Ge(M,Mt)}D(M,Pe.$changes.refId)}}},U=0;U<Ve;U++)L(U);return M},v.prototype.clone=function(){var d,x=new this.constructor,A=this._definition.schema;for(var B in A)typeof this[B]=="object"&&typeof((d=this[B])===null||d===void 0?void 0:d.clone)=="function"?x[B]=this[B].clone():x[B]=this[B];return x},v.prototype.toJSON=function(){var d=this._definition.schema,x=this._definition.deprecated,A={};for(var B in d)!x[B]&&this[B]!==null&&typeof this[B]<"u"&&(A[B]=typeof this[B].toJSON=="function"?this[B].toJSON():this["_".concat(B)]);return A},v.prototype.discardAllChanges=function(){this.$changes.discardAll()},v.prototype.getByIndex=function(d){return this[this._definition.fieldsByIndex[d]]},v.prototype.deleteByIndex=function(d){this[this._definition.fieldsByIndex[d]]=void 0},v.prototype.tryEncodeTypeId=function(d,x,A){x._typeid!==A._typeid&&(Q(d,l),D(d,A._typeid))},v.prototype.getSchemaType=function(d,x,A){var B;return d[x.offset]===l&&(x.offset++,B=this.constructor._context.get(pe(d,x))),B||A},v.prototype.createTypeInstance=function(d){var x=new d;return x.$changes.root=this.$changes.root,x},v.prototype._triggerChanges=function(d){for(var x,A,B,Y,Ce,be,$e,Ve,M,L=new Set,U=this.$changes.root.refs,k=function(q){var V=d[q],oe=V.refId,de=U.get(oe),xe=de.$callbacks;if((V.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&V.previousValue instanceof v&&((A=(x=V.previousValue.$callbacks)===null||x===void 0?void 0:x[t.OPERATION.DELETE])===null||A===void 0||A.forEach(function(he){return he()})),!xe)return"continue";if(de instanceof v){if(!L.has(oe))try{(B=xe?.[t.OPERATION.REPLACE])===null||B===void 0||B.forEach(function(he){return he()})}catch(he){v.onError(he)}try{xe.hasOwnProperty(V.field)&&((Y=xe[V.field])===null||Y===void 0||Y.forEach(function(he){return he(V.value,V.previousValue)}))}catch(he){v.onError(he)}}else V.op===t.OPERATION.ADD&&V.previousValue===void 0?(Ce=xe[t.OPERATION.ADD])===null||Ce===void 0||Ce.forEach(function(he){var ae;return he(V.value,(ae=V.dynamicIndex)!==null&&ae!==void 0?ae:V.field)}):V.op===t.OPERATION.DELETE?V.previousValue!==void 0&&((be=xe[t.OPERATION.DELETE])===null||be===void 0||be.forEach(function(he){var ae;return he(V.previousValue,(ae=V.dynamicIndex)!==null&&ae!==void 0?ae:V.field)})):V.op===t.OPERATION.DELETE_AND_ADD&&(V.previousValue!==void 0&&(($e=xe[t.OPERATION.DELETE])===null||$e===void 0||$e.forEach(function(he){var ae;return he(V.previousValue,(ae=V.dynamicIndex)!==null&&ae!==void 0?ae:V.field)})),(Ve=xe[t.OPERATION.ADD])===null||Ve===void 0||Ve.forEach(function(he){var ae;return he(V.value,(ae=V.dynamicIndex)!==null&&ae!==void 0?ae:V.field)})),V.value!==V.previousValue&&((M=xe[t.OPERATION.REPLACE])===null||M===void 0||M.forEach(function(he){var ae;return he(V.value,(ae=V.dynamicIndex)!==null&&ae!==void 0?ae:V.field)}));L.add(oe)},P=0;P<d.length;P++)k(P)},v._definition=O.create(),v})();function en(v){for(var d=[v.$changes],x=1,A={},B=A,Y=function(be){var $e=d[be];$e.changes.forEach(function(Ve){var M=$e.ref,L=Ve.index,U=M._definition?M._definition.fieldsByIndex[L]:M.$indexes.get(L);B[U]=$e.getValue(L)})},Ce=0;Ce<x;Ce++)Y(Ce);return A}var vn={context:new I},Ci=(function(v){i(d,v);function d(){return v!==null&&v.apply(this,arguments)||this}return s([te("string",vn)],d.prototype,"name",void 0),s([te("string",vn)],d.prototype,"type",void 0),s([te("number",vn)],d.prototype,"referencedType",void 0),d})(pt),tn=(function(v){i(d,v);function d(){var x=v!==null&&v.apply(this,arguments)||this;return x.fields=new y,x}return s([te("number",vn)],d.prototype,"id",void 0),s([te([Ci],vn)],d.prototype,"fields",void 0),d})(pt),gr=(function(v){i(d,v);function d(){var x=v!==null&&v.apply(this,arguments)||this;return x.types=new y,x}return d.encode=function(x){var A,B=x.constructor,Y=new d;Y.rootType=B._typeid;var Ce=function(M,L){for(var U in L){var k=new Ci;k.name=U;var P=void 0;if(typeof L[U]=="string")P=L[U];else{var q=L[U],V=void 0;pt.is(q)?(P="ref",V=L[U]):(P=Object.keys(q)[0],typeof q[P]=="string"?P+=":"+q[P]:V=q[P]),k.referencedType=V?V._typeid:-1}k.type=P,M.fields.push(k)}Y.types.push(M)},be=(A=B._context)===null||A===void 0?void 0:A.types;for(var $e in be){var Ve=new tn;Ve.id=Number($e),Ce(Ve,be[$e]._definition.schema)}return Y.encodeAll()},d.decode=function(x,A){var B=new I,Y=new d;Y.decode(x,A);var Ce=Y.types.reduce(function(L,U){var k=(function(q){i(V,q);function V(){return q!==null&&q.apply(this,arguments)||this}return V})(pt),P=U.id;return L[P]=k,B.add(k,P),L},{});Y.types.forEach(function(L){var U=Ce[L.id];L.fields.forEach(function(k){var P;if(k.referencedType!==void 0){var q=k.type,V=Ce[k.referencedType];if(!V){var oe=k.type.split(":");q=oe[0],V=oe[1]}q==="ref"?te(V,{context:B})(U.prototype,k.name):te((P={},P[q]=V,P),{context:B})(U.prototype,k.name)}else te(k.type,{context:B})(U.prototype,k.name)})});var be=Ce[Y.rootType],$e=new be;for(var Ve in be._definition.schema){var M=be._definition.schema[Ve];typeof M!="string"&&($e[Ve]=typeof M=="function"?new M:new(w(Object.keys(M)[0])).constructor)}return $e},s([te([tn],vn)],d.prototype,"types",void 0),s([te("number",vn)],d.prototype,"rootType",void 0),d})(pt);T("map",{constructor:g}),T("array",{constructor:y}),T("set",{constructor:X}),T("collection",{constructor:me}),t.ArraySchema=y,t.CollectionSchema=me,t.Context=I,t.MapSchema=g,t.Reflection=gr,t.ReflectionField=Ci,t.ReflectionType=tn,t.Schema=pt,t.SchemaDefinition=O,t.SetSchema=X,t.decode=F,t.defineTypes=W,t.deprecated=K,t.dumpChanges=en,t.encode=Ct,t.filter=S,t.filterChildren=R,t.hasFilter=N,t.registerType=T,t.type=te}))})(Ur,Ur.exports)),Ur.exports}var Tt=ac(),Ot=function(r,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,n);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(s=(i<3?o(s):i>3?o(e,t,s):o(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},Ft=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};class Bt extends Tt.Schema{constructor(){super(...arguments),this.id="",this.x=0,this.y=0,this.z=0,this.yaw=0,this.pitch=0,this.vx=0,this.vy=0,this.vz=0,this.movementState="grounded",this.health=100,this.maxHealth=100,this.currentWeapon="rifle",this.ammo=30,this.maxAmmo=30}}Ot([Tt.type("string"),Ft("design:type",Object)],Bt.prototype,"id",void 0);Ot([Tt.type("number"),Ft("design:type",Object)],Bt.prototype,"x",void 0);Ot([Tt.type("number"),Ft("design:type",Object)],Bt.prototype,"y",void 0);Ot([Tt.type("number"),Ft("design:type",Object)],Bt.prototype,"z",void 0);Ot([Tt.type("number"),Ft("design:type",Object)],Bt.prototype,"yaw",void 0);Ot([Tt.type("number"),Ft("design:type",Object)],Bt.prototype,"pitch",void 0);Ot([Tt.type("number"),Ft("design:type",Object)],Bt.prototype,"vx",void 0);Ot([Tt.type("number"),Ft("design:type",Object)],Bt.prototype,"vy",void 0);Ot([Tt.type("number"),Ft("design:type",Object)],Bt.prototype,"vz",void 0);Ot([Tt.type("string"),Ft("design:type",Object)],Bt.prototype,"movementState",void 0);Ot([Tt.type("number"),Ft("design:type",Object)],Bt.prototype,"health",void 0);Ot([Tt.type("number"),Ft("design:type",Object)],Bt.prototype,"maxHealth",void 0);Ot([Tt.type("string"),Ft("design:type",Object)],Bt.prototype,"currentWeapon",void 0);Ot([Tt.type("number"),Ft("design:type",Object)],Bt.prototype,"ammo",void 0);Ot([Tt.type("number"),Ft("design:type",Object)],Bt.prototype,"maxAmmo",void 0);class Zh extends Tt.Schema{constructor(){super(...arguments),this.players=new Tt.MapSchema}}Ot([Tt.type({map:Bt}),Ft("design:type",Object)],Zh.prototype,"players",void 0);const A0=30,Do=1e3/A0,No=.4,lc=1.6,T0=1,b0=100,w0={accel:95,maxSpeedWalk:8,maxSpeedSprint:11,sprintAccelFactor:.9,friction:10,airAccel:30,airMaxSpeed:14,gravity:27,jumpForce:11,coyoteTime:.12,jumpBufferTime:.12,slideInitialSpeed:12,slideSpeedBoost:1.1,slideDecay:.95,slideMinSpeed:2,slideDurationMax:1.8,slideEnterSpeed:6,slideEnterMinSprintTime:.15,slideSprintReleaseGrace:.2,maxSpeedCrouch:3,slideJumpMultiplier:1.25,slideJumpCooldown:2},wt=20,Kn=.25,R0=.001,C0=[[-wt,wt,wt-Kn,wt+Kn],[-wt,wt,-wt-Kn,-wt+Kn],[wt-Kn,wt+Kn,-wt,wt],[-wt-Kn,-wt+Kn,-wt,wt]],ys=wt,br=wt*2;function I0(r,e,t){let n=r,i=e,s,o;const a=t+R0;for(const[l,c,u,h]of C0)n>=l-a&&n<=c+a&&i>=u-a&&i<=h+a&&(n<l+a?(n=l-a,s=1):n>c-a&&(n=c+a,s=-1),i<u+a?(i=u-a,o=1):i>h-a&&(i=h+a,o=-1));return{x:n,z:i,normalX:s,normalZ:o}}function P0(r,e){e.normalX!==void 0&&e.normalX!==0&&r.x*e.normalX>0&&(r.x=0),e.normalZ!==void 0&&e.normalZ!==0&&r.z*e.normalZ>0&&(r.z=0)}class L0{running=!1;lastTime=0;accumulator=0;onTick=()=>{};onRender=()=>{};rafId=0;setTickCallback(e){return this.onTick=e,this}setRenderCallback(e){return this.onRender=e,this}start(){this.running||(this.running=!0,this.lastTime=performance.now(),this.tick(0))}stop(){this.running=!1,this.rafId&&cancelAnimationFrame(this.rafId)}tick=e=>{this.rafId=requestAnimationFrame(this.tick);const t=(e-this.lastTime)/1e3;for(this.lastTime=e,this.accumulator+=Math.min(t,.1);this.accumulator>=Do/1e3;)this.onTick(Do/1e3),this.accumulator-=Do/1e3;this.onRender(t)}}const Ms={},Xi={serverUrl:Ms?.VITE_SERVER_URL??"ws://localhost:2567",playerModelUrl:Ms?.VITE_PLAYER_MODEL_URL??"/models/player.glb",dummyModelUrl:Ms?.VITE_DUMMY_MODEL_URL??"/models/dummy.glb",playerSkin:(Ms?.VITE_PLAYER_SKIN??"").trim(),dummySkins:["","orange","purple"]},D0={moveX:0,moveZ:0,sprint:!1,jump:!1,slide:!1,slideJustPressed:!1,slideIntentTicks:0,yaw:0,pitch:0,shoot:!1,reload:!1},N0=["KeyW","KeyN","KeyT"];function U0(r){document.addEventListener("keydown",e=>{const t=e.code,n=e.key?.toLowerCase();e.ctrlKey&&(t==="KeyW"||t==="KeyN"||t==="KeyT"||n==="w"||n==="n"||n==="t")&&(e.preventDefault(),e.stopImmediatePropagation())},{capture:!0})}class O0{state={...D0};pointerLocked=!1;sensitivity=.002;bound=!1;keysDown=new Set;slideWasDown=!1;_slideIntentTicks=0;getState(){this.state.sprint=this.keysDown.has("ShiftLeft")||this.keysDown.has("ShiftRight")||this.keysDown.has("ArrowUp");const e=this.keysDown.has("ControlLeft")||this.keysDown.has("ControlRight")||this.keysDown.has("KeyC");return this.state.slideJustPressed=e&&!this.slideWasDown,this.slideWasDown=e,this.state.slide=e,this.state.slideIntentTicks=this._slideIntentTicks,this.state}tick(){this._slideIntentTicks>0&&this._slideIntentTicks--}isPointerLocked(){return this.pointerLocked}requestPointerLock(e){if(this.bound)return;this.bound=!0,e.addEventListener("click",()=>{e.requestPointerLock(),navigator.keyboard?.lock&&navigator.keyboard.lock().then(()=>{}).catch(()=>{navigator.keyboard.lock(N0).catch(()=>{})})}),U0(),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===e,this.pointerLocked?(this.keysDown.clear(),this.slideWasDown=!1,this._slideIntentTicks=0):navigator.keyboard?.unlock&&navigator.keyboard.unlock()}),document.addEventListener("mousemove",i=>{this.pointerLocked&&(this.state.yaw-=i.movementX*this.sensitivity,this.state.pitch-=i.movementY*this.sensitivity,this.state.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.state.pitch)))});const t={capture:!0},n=i=>{i.addEventListener("keydown",s=>this.onKey(s.code,!0,s),t),i.addEventListener("keyup",s=>this.onKey(s.code,!1,s),t)};n(document),n(window),n(e),window.addEventListener("keydown",i=>this.preventBrowserShortcuts(i),t),window.addEventListener("blur",()=>this.syncModifiers(!1,!1))}preventBrowserShortcuts(e){const t=e.key?.toLowerCase(),n=e.code;e.ctrlKey&&(n==="KeyW"||n==="KeyN"||n==="KeyT"||t==="w"||t==="n"||t==="t")&&e.preventDefault()}syncModifiers(e,t){this.keysDown.clear(),this.slideWasDown=!1,this._slideIntentTicks=0}isSlideKey(e){return e==="ControlLeft"||e==="ControlRight"||e==="KeyC"}onKey(e,t,n){if(!n)return;const i=n.key?.toLowerCase();t?(this.keysDown.add(e),this.isSlideKey(e)&&(this._slideIntentTicks=Math.max(this._slideIntentTicks,10))):this.keysDown.delete(e),e==="KeyW"&&(this.state.moveZ=t?1:this.state.moveZ===1?0:this.state.moveZ),e==="KeyS"&&(this.state.moveZ=t?-1:this.state.moveZ===-1?0:this.state.moveZ),e==="KeyA"&&(this.state.moveX=t?-1:this.state.moveX===-1?0:this.state.moveX),e==="KeyD"&&(this.state.moveX=t?1:this.state.moveX===1?0:this.state.moveX),(e==="ShiftLeft"||e==="ShiftRight"||i==="shift")&&n.preventDefault(),(e==="ControlLeft"||e==="ControlRight"||i==="control")&&n.preventDefault(),e==="KeyC"&&n.preventDefault(),this.pointerLocked&&n.ctrlKey&&(e==="KeyW"||e==="KeyN"||e==="KeyT"||i==="w"||i==="n"||i==="t")&&n.preventDefault(),e==="Space"&&(n.preventDefault(),this.state.jump=t),e==="KeyR"&&(this.state.reload=t)}setShoot(e){this.state.shoot=e}sampleMouse(e){}consumeOneShoot(){this.state.shoot=!1}}class F0{camera;targetPosition=new z(0,0,0);yaw=0;pitch=0;smooth=.15;constructor(e=75,t=16/9,n=.1,i=1e3){this.camera=new Vt(e,t,n,i)}setTargetPosition(e,t,n){this.targetPosition.set(e,t,n)}setRotation(e,t){this.yaw=e,this.pitch=t}update(e){this.camera.position.x=Fs.lerp(this.camera.position.x,this.targetPosition.x,1-Math.exp(-this.smooth*60*e)),this.camera.position.z=Fs.lerp(this.camera.position.z,this.targetPosition.z,1-Math.exp(-this.smooth*60*e)),this.camera.position.y=this.targetPosition.y,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0,this.camera.updateMatrixWorld()}getCamera(){return this.camera}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}}const Uo=I0,Oo=P0,Ln=0;class B0{position={x:0,y:Ln,z:0};velocity={x:0,y:0,z:0};yaw=0;pitch=0;state="grounded";slideTime=0;coyoteTimer=0;jumpBufferTimer=0;crouching=!1;slideOnLand=!1;sprintWarmupTime=0;sprintReleaseGrace=0;slideJumpCooldownTimer=0;horSpeedWhenJumped=0;update(e,t,n){const i=w0;if(t.jump&&(this.jumpBufferTimer=i.jumpBufferTime),this.state==="grounded"?this.coyoteTimer=i.coyoteTime:this.coyoteTimer-=e,this.slideJumpCooldownTimer>0&&(this.slideJumpCooldownTimer-=e),this.state==="sliding"){this.slideTime+=e;const b=Math.hypot(this.velocity.x,this.velocity.z);this.velocity.x*=i.slideDecay,this.velocity.z*=i.slideDecay,this.velocity.y-=i.gravity*e,this.velocity.y=Math.max(this.velocity.y,-55),this.position.x+=this.velocity.x*e,this.position.z+=this.velocity.z*e;const T=this.position.y+this.velocity.y*e;T<=Ln?(this.position.y=Ln,this.velocity.y=0):this.position.y=T;const w=Uo(this.position.x,this.position.z,No);this.position.x=w.x,this.position.z=w.z,Oo(this.velocity,w);const O=Math.cos(this.yaw),N=Math.sin(this.yaw),I=t.moveX*O-t.moveZ*N,H=-t.moveX*N-t.moveZ*O,te=Math.hypot(I,H);if(te>.1&&b>.1&&(I*this.velocity.x+H*this.velocity.z)/(te*b)<.5){this.state="grounded",this.yaw=t.yaw,this.pitch=t.pitch,this.crouching=!1;return}const R=b>=i.slideMinSpeed&&this.slideTime<i.slideDurationMax&&this.position.y<=Ln+.01,K=this.slideJumpCooldownTimer<=0;if(this.jumpBufferTimer>0&&R&&K){const W=i.slideJumpMultiplier;this.velocity.y=i.jumpForce*W,this.velocity.x*=W,this.velocity.z*=W,this.horSpeedWhenJumped=Math.hypot(this.velocity.x,this.velocity.z),this.jumpBufferTimer=0,this.slideJumpCooldownTimer=i.slideJumpCooldown,this.state="airborne"}else R||(this.position.y<=Ln+.01?this.state="grounded":this.state="airborne");this.yaw=t.yaw,this.pitch=t.pitch,this.crouching=!0;return}if(this.state==="airborne"){(t.slideJustPressed||t.slideIntentTicks>0)&&(this.slideOnLand=!0);const b=Math.cos(this.yaw),T=Math.sin(this.yaw),w=(t.moveX*b-t.moveZ*T)*i.airAccel*e*.3,O=(-t.moveX*T-t.moveZ*b)*i.airAccel*e*.3;this.velocity.x+=w,this.velocity.z+=O;const N=Math.hypot(this.velocity.x,this.velocity.z),I=Math.min(i.airMaxSpeed,this.horSpeedWhenJumped);N>I&&I>0&&(this.velocity.x*=I/N,this.velocity.z*=I/N),this.velocity.y-=i.gravity*e,this.velocity.y=Math.max(this.velocity.y,-55),this.position.x+=this.velocity.x*e,this.position.z+=this.velocity.z*e;const H=this.position.y+this.velocity.y*e;if(H<=Ln){this.position.y=Ln,this.velocity.y=0;const S=Math.hypot(this.velocity.x,this.velocity.z);if(this.slideOnLand&&S>=i.slideEnterSpeed){this.state="sliding",this.slideTime=0,this.slideJumpCooldownTimer=0,this.crouching=!0;const R=Math.max(S*i.slideSpeedBoost,i.slideInitialSpeed);S>0&&(this.velocity.x=this.velocity.x/S*R,this.velocity.z=this.velocity.z/S*R)}else this.state="grounded";this.slideOnLand=!1}else this.position.y=H;const te=Uo(this.position.x,this.position.z,No);this.position.x=te.x,this.position.z=te.z,Oo(this.velocity,te),this.yaw=t.yaw,this.pitch=t.pitch,this.jumpBufferTimer-=e,this.crouching=this.state==="sliding";return}t.sprint?(this.sprintWarmupTime+=e,this.sprintReleaseGrace=i.slideSprintReleaseGrace):(this.sprintWarmupTime=0,this.sprintReleaseGrace=Math.max(0,this.sprintReleaseGrace-e));const s=t.sprint||this.sprintReleaseGrace>0,o=this.sprintWarmupTime>=i.slideEnterMinSprintTime||this.sprintReleaseGrace>0,a=Math.hypot(this.velocity.x,this.velocity.z);if(t.slideIntentTicks>0&&s&&o&&a>=i.slideEnterSpeed){this.state="sliding",this.slideTime=0,this.crouching=!0;const b=Math.hypot(this.velocity.x,this.velocity.z),T=Math.max(b*i.slideSpeedBoost,i.slideInitialSpeed);b>0&&(this.velocity.x=this.velocity.x/b*T,this.velocity.z=this.velocity.z/b*T);return}const c=t.sprint?i.maxSpeedSprint:t.slide?i.maxSpeedCrouch:i.maxSpeedWalk,u=Math.cos(this.yaw),h=Math.sin(this.yaw),f=t.sprint?i.accel*(i.maxSpeedSprint/i.maxSpeedWalk)*i.sprintAccelFactor:i.accel,p=(t.moveX*u-t.moveZ*h)*f*e,_=(-t.moveX*h-t.moveZ*u)*f*e;this.velocity.x+=p,this.velocity.z+=_,this.velocity.x*=Math.max(0,1-i.friction*e),this.velocity.z*=Math.max(0,1-i.friction*e);const y=Math.hypot(this.velocity.x,this.velocity.z);y>c&&(this.velocity.x*=c/y,this.velocity.z*=c/y),this.jumpBufferTimer>0||t.jump&&this.coyoteTimer>0?(this.velocity.y=i.jumpForce,this.horSpeedWhenJumped=Math.hypot(this.velocity.x,this.velocity.z),this.state="airborne",this.jumpBufferTimer=0,this.sprintWarmupTime=0):(this.velocity.y-=i.gravity*e,this.velocity.y=Math.max(this.velocity.y,-55)),this.position.x+=this.velocity.x*e,this.position.z+=this.velocity.z*e;const m=this.position.y+this.velocity.y*e;m<=Ln?(this.position.y=Ln,this.velocity.y=0,this.state="grounded"):(this.position.y=m,this.horSpeedWhenJumped=Math.hypot(this.velocity.x,this.velocity.z)||this.horSpeedWhenJumped,this.state="airborne");const g=Uo(this.position.x,this.position.z,No);this.position.x=g.x,this.position.z=g.z,Oo(this.velocity,g),this.yaw=t.yaw,this.pitch=t.pitch,this.jumpBufferTimer-=e,this.crouching=t.slide}getSnapshot(){return{position:{...this.position},velocity:{...this.velocity},yaw:this.yaw,pitch:this.pitch,grounded:this.state==="grounded",state:this.state,crouching:this.crouching}}}class k0{scene=new O_;renderer;floor;constructor(e){this.renderer=new U_({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight;this.renderer.setSize(t,n),this.renderer.setClearColor(2763317),this.scene.background=new Oe(2763317);const i=new a0(16777215,.65);this.scene.add(i);const s=new qh(16777215,.9);s.position.set(10,20,10),this.scene.add(s);const o=new Xr(br,br),a=new ar({color:14211292});this.floor=new Ut(o,a),this.floor.rotation.x=-Math.PI/2,this.scene.add(this.floor);const l=new M0(br,br,9079444,11053232);l.position.y=.001,this.scene.add(l);const c=new Ri(br,4,.5),u=new ar({color:14211292});for(const[h,f]of[[0,ys],[0,-ys],[ys,0],[-ys,0]]){const p=new Ut(c,u);p.position.set(h,2,f),f===0&&(p.rotation.y=Math.PI/2),this.scene.add(p)}}render(e){this.renderer.render(this.scene,e)}resize(e,t){this.renderer.setSize(e,t)}getScene(){return this.scene}}function z0(r){const e=document.createElement("div");e.id="crosshair",e.style.cssText=`
    position: fixed; left: 50%; top: 50%; transform: translate(-50%,-50%);
    width: 4px; height: 4px; background: #0f0; border-radius: 2px; pointer-events: none;
  `,r.appendChild(e);const t=document.createElement("div");t.id="hud-info",t.style.cssText=`
    position: fixed; bottom: 16px; left: 16px; color: #ccc; font-family: monospace; font-size: 14px;
  `,t.textContent="HP: 100 | Ammo: 30/30",r.appendChild(t)}function H0(r,e,t){const n=document.getElementById("hud-info");n&&(n.textContent=`HP: ${r} | Ammo: ${e}/${t}`)}let Fo=0,Bo=performance.now(),Rl=0,Cl=0;const V0=100;function G0(r){const e=document.createElement("div");e.id="debug-overlay",e.style.cssText=`
    position: fixed; top: 8px; right: 8px; color: #8f8; font-family: monospace; font-size: 12px;
    background: rgba(0,0,0,0.6); padding: 8px; border-radius: 4px;
  `,e.textContent="FPS: 0 | Vel: 0,0,0 | State: grounded",r.appendChild(e)}function W0(r,e,t,n){Fo++;const i=performance.now();if(i-Bo>=500&&(Cl=Math.round(Fo*1e3/(i-Bo)),Fo=0,Bo=i),i-Rl<V0)return;Rl=i;const s=document.getElementById("debug-overlay");if(s){const o=t!==void 0?` | Sprint: ${t}`:"",a=n!==void 0?` | Net: ${n.connected?"ok":"off"} | Players: ${n.playerCount} | Remote: ${n.remoteMeshCount}`:"";s.textContent=`FPS: ${Cl} | Vel: ${r.x.toFixed(1)}, ${r.y.toFixed(1)}, ${r.z.toFixed(1)} | State: ${e}${o}${a}`}}const Il={ammo:30,maxAmmo:30};var ko={},Pl={},Ll;function X0(){return Ll||(Ll=1,ArrayBuffer.isView||(ArrayBuffer.isView=r=>r!==null&&typeof r=="object"&&r.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window)),Pl}var Dn={},zo={},Dl;function hc(){return Dl||(Dl=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.ServerError=r.CloseCode=void 0,(function(t){t[t.CONSENTED=4e3]="CONSENTED",t[t.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(r.CloseCode||(r.CloseCode={}));class e extends Error{constructor(n,i){super(i),this.name="ServerError",this.code=n}}r.ServerError=e})(zo)),zo}var an={},ui={},Nl;function $0(){if(Nl)return ui;Nl=1,Object.defineProperty(ui,"__esModule",{value:!0}),ui.decode=ui.encode=void 0;function r(c,u){if(this._offset=u,c instanceof ArrayBuffer)this._buffer=c,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(c))this._buffer=c.buffer,this._view=new DataView(this._buffer,c.byteOffset,c.byteLength);else throw new Error("Invalid argument")}function e(c,u,h){for(var f="",p=0,_=u,y=u+h;_<y;_++){var m=c.getUint8(_);if((m&128)===0){f+=String.fromCharCode(m);continue}if((m&224)===192){f+=String.fromCharCode((m&31)<<6|c.getUint8(++_)&63);continue}if((m&240)===224){f+=String.fromCharCode((m&15)<<12|(c.getUint8(++_)&63)<<6|(c.getUint8(++_)&63)<<0);continue}if((m&248)===240){p=(m&7)<<18|(c.getUint8(++_)&63)<<12|(c.getUint8(++_)&63)<<6|(c.getUint8(++_)&63)<<0,p>=65536?(p-=65536,f+=String.fromCharCode((p>>>10)+55296,(p&1023)+56320)):f+=String.fromCharCode(p);continue}throw new Error("Invalid byte "+m.toString(16))}return f}r.prototype._array=function(c){for(var u=new Array(c),h=0;h<c;h++)u[h]=this._parse();return u},r.prototype._map=function(c){for(var u="",h={},f=0;f<c;f++)u=this._parse(),h[u]=this._parse();return h},r.prototype._str=function(c){var u=e(this._view,this._offset,c);return this._offset+=c,u},r.prototype._bin=function(c){var u=this._buffer.slice(this._offset,this._offset+c);return this._offset+=c,u},r.prototype._parse=function(){var c=this._view.getUint8(this._offset++),u,h=0,f=0,p=0,_=0;if(c<192)return c<128?c:c<144?this._map(c&15):c<160?this._array(c&15):this._str(c&31);if(c>223)return(255-c+1)*-1;switch(c){case 192:return null;case 194:return!1;case 195:return!0;case 196:return h=this._view.getUint8(this._offset),this._offset+=1,this._bin(h);case 197:return h=this._view.getUint16(this._offset),this._offset+=2,this._bin(h);case 198:return h=this._view.getUint32(this._offset),this._offset+=4,this._bin(h);case 199:if(h=this._view.getUint8(this._offset),f=this._view.getInt8(this._offset+1),this._offset+=2,f===-1){var y=this._view.getUint32(this._offset);return p=this._view.getInt32(this._offset+4),_=this._view.getUint32(this._offset+8),this._offset+=12,new Date((p*4294967296+_)*1e3+y/1e6)}return[f,this._bin(h)];case 200:return h=this._view.getUint16(this._offset),f=this._view.getInt8(this._offset+2),this._offset+=3,[f,this._bin(h)];case 201:return h=this._view.getUint32(this._offset),f=this._view.getInt8(this._offset+4),this._offset+=5,[f,this._bin(h)];case 202:return u=this._view.getFloat32(this._offset),this._offset+=4,u;case 203:return u=this._view.getFloat64(this._offset),this._offset+=8,u;case 204:return u=this._view.getUint8(this._offset),this._offset+=1,u;case 205:return u=this._view.getUint16(this._offset),this._offset+=2,u;case 206:return u=this._view.getUint32(this._offset),this._offset+=4,u;case 207:return p=this._view.getUint32(this._offset)*Math.pow(2,32),_=this._view.getUint32(this._offset+4),this._offset+=8,p+_;case 208:return u=this._view.getInt8(this._offset),this._offset+=1,u;case 209:return u=this._view.getInt16(this._offset),this._offset+=2,u;case 210:return u=this._view.getInt32(this._offset),this._offset+=4,u;case 211:return p=this._view.getInt32(this._offset)*Math.pow(2,32),_=this._view.getUint32(this._offset+4),this._offset+=8,p+_;case 212:if(f=this._view.getInt8(this._offset),this._offset+=1,f===0){this._offset+=1;return}return[f,this._bin(1)];case 213:return f=this._view.getInt8(this._offset),this._offset+=1,[f,this._bin(2)];case 214:return f=this._view.getInt8(this._offset),this._offset+=1,f===-1?(u=this._view.getUint32(this._offset),this._offset+=4,new Date(u*1e3)):[f,this._bin(4)];case 215:if(f=this._view.getInt8(this._offset),this._offset+=1,f===0)return p=this._view.getInt32(this._offset)*Math.pow(2,32),_=this._view.getUint32(this._offset+4),this._offset+=8,new Date(p+_);if(f===-1){p=this._view.getUint32(this._offset),_=this._view.getUint32(this._offset+4),this._offset+=8;var m=(p&3)*4294967296+_;return new Date(m*1e3+(p>>>2)/1e6)}return[f,this._bin(8)];case 216:return f=this._view.getInt8(this._offset),this._offset+=1,[f,this._bin(16)];case 217:return h=this._view.getUint8(this._offset),this._offset+=1,this._str(h);case 218:return h=this._view.getUint16(this._offset),this._offset+=2,this._str(h);case 219:return h=this._view.getUint32(this._offset),this._offset+=4,this._str(h);case 220:return h=this._view.getUint16(this._offset),this._offset+=2,this._array(h);case 221:return h=this._view.getUint32(this._offset),this._offset+=4,this._array(h);case 222:return h=this._view.getUint16(this._offset),this._offset+=2,this._map(h);case 223:return h=this._view.getUint32(this._offset),this._offset+=4,this._map(h)}throw new Error("Could not parse")};function t(c,u=0){var h=new r(c,u),f=h._parse();if(h._offset!==c.byteLength)throw new Error(c.byteLength-h._offset+" trailing bytes");return f}ui.decode=t;var n=4294967296-1,i=17179869184-1;function s(c,u,h){for(var f=0,p=0,_=h.length;p<_;p++)f=h.charCodeAt(p),f<128?c.setUint8(u++,f):f<2048?(c.setUint8(u++,192|f>>6),c.setUint8(u++,128|f&63)):f<55296||f>=57344?(c.setUint8(u++,224|f>>12),c.setUint8(u++,128|f>>6&63),c.setUint8(u++,128|f&63)):(p++,f=65536+((f&1023)<<10|h.charCodeAt(p)&1023),c.setUint8(u++,240|f>>18),c.setUint8(u++,128|f>>12&63),c.setUint8(u++,128|f>>6&63),c.setUint8(u++,128|f&63))}function o(c){for(var u=0,h=0,f=0,p=c.length;f<p;f++)u=c.charCodeAt(f),u<128?h+=1:u<2048?h+=2:u<55296||u>=57344?h+=3:(f++,h+=4);return h}function a(c,u,h){var f=typeof h,p=0,_=0,y=0,m=0,g=0,b=0;if(f==="string"){if(g=o(h),g<32)c.push(g|160),b=1;else if(g<256)c.push(217,g),b=2;else if(g<65536)c.push(218,g>>8,g),b=3;else if(g<4294967296)c.push(219,g>>24,g>>16,g>>8,g),b=5;else throw new Error("String too long");return u.push({_str:h,_length:g,_offset:c.length}),b+g}if(f==="number")return Math.floor(h)!==h||!isFinite(h)?(c.push(203),u.push({_float:h,_length:8,_offset:c.length}),9):h>=0?h<128?(c.push(h),1):h<256?(c.push(204,h),2):h<65536?(c.push(205,h>>8,h),3):h<4294967296?(c.push(206,h>>24,h>>16,h>>8,h),5):(y=h/Math.pow(2,32)>>0,m=h>>>0,c.push(207,y>>24,y>>16,y>>8,y,m>>24,m>>16,m>>8,m),9):h>=-32?(c.push(h),1):h>=-128?(c.push(208,h),2):h>=-32768?(c.push(209,h>>8,h),3):h>=-2147483648?(c.push(210,h>>24,h>>16,h>>8,h),5):(y=Math.floor(h/Math.pow(2,32)),m=h>>>0,c.push(211,y>>24,y>>16,y>>8,y,m>>24,m>>16,m>>8,m),9);if(f==="object"){if(h===null)return c.push(192),1;if(Array.isArray(h)){if(g=h.length,g<16)c.push(g|144),b=1;else if(g<65536)c.push(220,g>>8,g),b=3;else if(g<4294967296)c.push(221,g>>24,g>>16,g>>8,g),b=5;else throw new Error("Array too large");for(p=0;p<g;p++)b+=a(c,u,h[p]);return b}if(h instanceof Date){var T=h.getTime(),w=Math.floor(T/1e3),O=(T-w*1e3)*1e6;return w>=0&&O>=0&&w<=i?O===0&&w<=n?(c.push(214,255,w>>24,w>>16,w>>8,w),6):(y=w/4294967296,m=w&4294967295,c.push(215,255,O>>22,O>>14,O>>6,y,m>>24,m>>16,m>>8,m),10):(y=Math.floor(w/4294967296),m=w>>>0,c.push(199,12,255,O>>24,O>>16,O>>8,O,y>>24,y>>16,y>>8,y,m>>24,m>>16,m>>8,m),15)}if(h instanceof ArrayBuffer){if(g=h.byteLength,g<256)c.push(196,g),b=2;else if(g<65536)c.push(197,g>>8,g),b=3;else if(g<4294967296)c.push(198,g>>24,g>>16,g>>8,g),b=5;else throw new Error("Buffer too large");return u.push({_bin:h,_length:g,_offset:c.length}),b+g}if(typeof h.toJSON=="function")return a(c,u,h.toJSON());var N=[],I="",H=Object.keys(h);for(p=0,_=H.length;p<_;p++)I=H[p],h[I]!==void 0&&typeof h[I]!="function"&&N.push(I);if(g=N.length,g<16)c.push(g|128),b=1;else if(g<65536)c.push(222,g>>8,g),b=3;else if(g<4294967296)c.push(223,g>>24,g>>16,g>>8,g),b=5;else throw new Error("Object too large");for(p=0;p<g;p++)I=N[p],b+=a(c,u,I),b+=a(c,u,h[I]);return b}if(f==="boolean")return c.push(h?195:194),1;if(f==="undefined")return c.push(192),1;if(typeof h.toJSON=="function")return a(c,u,h.toJSON());throw new Error("Could not encode")}function l(c){var u=[],h=[],f=a(u,h,c),p=new ArrayBuffer(f),_=new DataView(p),y=0,m=0,g=-1;h.length>0&&(g=h[0]._offset);for(var b,T=0,w=0,O=0,N=u.length;O<N;O++)if(_.setUint8(m+O,u[O]),O+1===g){if(b=h[y],T=b._length,w=m+g,b._bin)for(var I=new Uint8Array(b._bin),H=0;H<T;H++)_.setUint8(w+H,I[H]);else b._str?s(_,w,b._str):b._float!==void 0&&_.setFloat64(w,b._float);y++,m+=T,h[y]&&(g=h[y]._offset)}return p}return ui.encode=l,ui}var wr={},fi={},Ho,Ul;function q0(){return Ul||(Ul=1,Ho=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),Ho}var Ol;function j0(){if(Ol)return fi;Ol=1;var r=fi&&fi.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(fi,"__esModule",{value:!0}),fi.WebSocketTransport=void 0;const e=r(q0()),t=globalThis.WebSocket||e.default;let n=class{constructor(s){this.events=s}send(s){s instanceof ArrayBuffer?this.ws.send(s):Array.isArray(s)&&this.ws.send(new Uint8Array(s).buffer)}connect(s,o){try{this.ws=new t(s,{headers:o,protocols:this.protocols})}catch{this.ws=new t(s,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(s,o){this.ws.close(s,o)}get isOpen(){return this.ws.readyState===t.OPEN}};return fi.WebSocketTransport=n,fi}var Fl;function K0(){if(Fl)return wr;Fl=1,Object.defineProperty(wr,"__esModule",{value:!0}),wr.Connection=void 0;const r=j0();let e=class{constructor(){this.events={},this.transport=new r.WebSocketTransport(this.events)}send(n){this.transport.send(n)}connect(n,i){this.transport.connect(n,i)}close(n,i){this.transport.close(n,i)}get isOpen(){return this.transport.isOpen}};return wr.Connection=e,wr}var Vo={},Bl;function Jh(){return Bl||(Bl=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.utf8Length=r.utf8Read=r.ErrorCode=r.Protocol=void 0,(function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(r.Protocol||(r.Protocol={})),(function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(r.ErrorCode||(r.ErrorCode={}));function e(n,i){const s=n[i++];for(var o="",a=0,l=i,c=i+s;l<c;l++){var u=n[l];if((u&128)===0){o+=String.fromCharCode(u);continue}if((u&224)===192){o+=String.fromCharCode((u&31)<<6|n[++l]&63);continue}if((u&240)===224){o+=String.fromCharCode((u&15)<<12|(n[++l]&63)<<6|(n[++l]&63)<<0);continue}if((u&248)===240){a=(u&7)<<18|(n[++l]&63)<<12|(n[++l]&63)<<6|(n[++l]&63)<<0,a>=65536?(a-=65536,o+=String.fromCharCode((a>>>10)+55296,(a&1023)+56320)):o+=String.fromCharCode(a);continue}throw new Error("Invalid byte "+u.toString(16))}return o}r.utf8Read=e;function t(n=""){let i=0,s=0;for(let o=0,a=n.length;o<a;o++)i=n.charCodeAt(o),i<128?s+=1:i<2048?s+=2:i<55296||i>=57344?s+=3:(o++,s+=4);return s+1}r.utf8Length=t})(Vo)),Vo}var di={},kl;function Qh(){if(kl)return di;kl=1,Object.defineProperty(di,"__esModule",{value:!0}),di.getSerializer=di.registerSerializer=void 0;const r={};function e(n,i){r[n]=i}di.registerSerializer=e;function t(n){const i=r[n];if(!i)throw new Error("missing serializer: "+n);return i}return di.getSerializer=t,di}var Rr={},zl;function eu(){if(zl)return Rr;zl=1,Object.defineProperty(Rr,"__esModule",{value:!0}),Rr.createNanoEvents=void 0;const r=()=>({emit(e,...t){let n=this.events[e]||[];for(let i=0,s=n.length;i<s;i++)n[i](...t)},events:{},on(e,t){var n;return!((n=this.events[e])===null||n===void 0)&&n.push(t)||(this.events[e]=[t]),()=>{var i;this.events[e]=(i=this.events[e])===null||i===void 0?void 0:i.filter(s=>t!==s)}}});return Rr.createNanoEvents=r,Rr}var pi={},Hl;function Y0(){if(Hl)return pi;Hl=1,Object.defineProperty(pi,"__esModule",{value:!0}),pi.createSignal=pi.EventEmitter=void 0;class r{constructor(){this.handlers=[]}register(n,i=!1){return this.handlers.push(n),this}invoke(...n){this.handlers.forEach(i=>i.apply(this,n))}invokeAsync(...n){return Promise.all(this.handlers.map(i=>i.apply(this,n)))}remove(n){const i=this.handlers.indexOf(n);this.handlers[i]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}pi.EventEmitter=r;function e(){const t=new r;function n(i){return t.register(i,this===null)}return n.once=i=>{const s=function(...o){i.apply(this,o),t.remove(s)};t.register(s)},n.remove=i=>t.remove(i),n.invoke=(...i)=>t.invoke(...i),n.invokeAsync=(...i)=>t.invokeAsync(...i),n.clear=()=>t.clear(),n}return pi.createSignal=e,pi}var Vl;function nu(){if(Vl)return an;Vl=1;var r=an&&an.__createBinding||(Object.create?(function(f,p,_,y){y===void 0&&(y=_);var m=Object.getOwnPropertyDescriptor(p,_);(!m||("get"in m?!p.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return p[_]}}),Object.defineProperty(f,y,m)}):(function(f,p,_,y){y===void 0&&(y=_),f[y]=p[_]})),e=an&&an.__setModuleDefault||(Object.create?(function(f,p){Object.defineProperty(f,"default",{enumerable:!0,value:p})}):function(f,p){f.default=p}),t=an&&an.__importStar||function(f){if(f&&f.__esModule)return f;var p={};if(f!=null)for(var _ in f)_!=="default"&&Object.prototype.hasOwnProperty.call(f,_)&&r(p,f,_);return e(p,f),p};Object.defineProperty(an,"__esModule",{value:!0}),an.Room=void 0;const n=t($0()),i=K0(),s=Jh(),o=Qh(),a=eu(),l=Y0(),c=ac(),u=hc();let h=class tu{constructor(p,_){this.onStateChange=(0,l.createSignal)(),this.onError=(0,l.createSignal)(),this.onLeave=(0,l.createSignal)(),this.onJoin=(0,l.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,a.createNanoEvents)(),this.roomId=null,this.name=p,_&&(this.serializer=new((0,o.getSerializer)("schema")),this.rootSchema=_,this.serializer.state=new _),this.onError((y,m)=>{var g;return(g=console.warn)===null||g===void 0?void 0:g.call(console,`colyseus.js - onError => (${y}) ${m}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(p,_,y=this,m){const g=new i.Connection;y.connection=g,g.events.onmessage=tu.prototype.onMessageCallback.bind(y),g.events.onclose=function(b){var T;if(!y.hasJoined){(T=console.warn)===null||T===void 0||T.call(console,`Room connection was closed unexpectedly (${b.code}): ${b.reason}`),y.onError.invoke(b.code,b.reason);return}b.code===u.CloseCode.DEVMODE_RESTART&&_?_():(y.onLeave.invoke(b.code,b.reason),y.destroy())},g.events.onerror=function(b){var T;(T=console.warn)===null||T===void 0||T.call(console,`Room, onError (${b.code}): ${b.reason}`),y.onError.invoke(b.code,b.reason)},g.connect(p,m)}leave(p=!0){return new Promise(_=>{this.onLeave(y=>_(y)),this.connection?p?this.connection.send([s.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(u.CloseCode.CONSENTED)})}onMessage(p,_){return this.onMessageHandlers.on(this.getMessageHandlerKey(p),_)}send(p,_){const y=[s.Protocol.ROOM_DATA];typeof p=="string"?c.encode.string(y,p):c.encode.number(y,p);let m;if(_!==void 0){const g=n.encode(_);m=new Uint8Array(y.length+g.byteLength),m.set(new Uint8Array(y),0),m.set(new Uint8Array(g),y.length)}else m=new Uint8Array(y);this.connection.send(m.buffer)}sendBytes(p,_){const y=[s.Protocol.ROOM_DATA_BYTES];typeof p=="string"?c.encode.string(y,p):c.encode.number(y,p);let m;m=new Uint8Array(y.length+(_.byteLength||_.length)),m.set(new Uint8Array(y),0),m.set(new Uint8Array(_),y.length),this.connection.send(m.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(p){const _=Array.from(new Uint8Array(p.data)),y=_[0];if(y===s.Protocol.JOIN_ROOM){let m=1;const g=(0,s.utf8Read)(_,m);if(m+=(0,s.utf8Length)(g),this.serializerId=(0,s.utf8Read)(_,m),m+=(0,s.utf8Length)(this.serializerId),!this.serializer){const b=(0,o.getSerializer)(this.serializerId);this.serializer=new b}_.length>m&&this.serializer.handshake&&this.serializer.handshake(_,{offset:m}),this.reconnectionToken=`${this.roomId}:${g}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([s.Protocol.JOIN_ROOM])}else if(y===s.Protocol.ERROR){const m={offset:1},g=c.decode.number(_,m),b=c.decode.string(_,m);this.onError.invoke(g,b)}else if(y===s.Protocol.LEAVE_ROOM)this.leave();else if(y===s.Protocol.ROOM_DATA_SCHEMA){const m={offset:1},b=this.serializer.getState().constructor._context.get(c.decode.number(_,m)),T=new b;T.decode(_,m),this.dispatchMessage(b,T)}else if(y===s.Protocol.ROOM_STATE)_.shift(),this.setState(_);else if(y===s.Protocol.ROOM_STATE_PATCH)_.shift(),this.patch(_);else if(y===s.Protocol.ROOM_DATA){const m={offset:1},g=c.decode.stringCheck(_,m)?c.decode.string(_,m):c.decode.number(_,m),b=_.length>m.offset?n.decode(p.data,m.offset):void 0;this.dispatchMessage(g,b)}else if(y===s.Protocol.ROOM_DATA_BYTES){const m={offset:1},g=c.decode.stringCheck(_,m)?c.decode.string(_,m):c.decode.number(_,m);this.dispatchMessage(g,new Uint8Array(_.slice(m.offset)))}}setState(p){this.serializer.setState(p),this.onStateChange.invoke(this.serializer.getState())}patch(p){this.serializer.patch(p),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(p,_){var y;const m=this.getMessageHandlerKey(p);this.onMessageHandlers.events[m]?this.onMessageHandlers.emit(m,_):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",p,_):(y=console.warn)===null||y===void 0||y.call(console,`colyseus.js: onMessage() not registered for type '${p}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(p){switch(typeof p){case"function":return`$${p._typeid}`;case"string":return p;case"number":return`i${p}`;default:throw new Error("invalid message type.")}}};return an.Room=h,an}var cn={};function Gl(r,e){e.headers=r.headers||{},e.statusMessage=r.statusText,e.statusCode=r.status,e.data=r.response}function gn(r,e,t){return new Promise(function(n,i){t=t||{};var s=new XMLHttpRequest,o,a,l,c=t.body,u=t.headers||{};t.timeout&&(s.timeout=t.timeout),s.ontimeout=s.onerror=function(h){h.timeout=h.type=="timeout",i(h)},s.open(r,e.href||e),s.onload=function(){for(l=s.getAllResponseHeaders().trim().split(/[\r\n]+/),Gl(s,s);a=l.shift();)a=a.split(": "),s.headers[a.shift().toLowerCase()]=a.join(": ");if(a=s.headers["content-type"],a&&~a.indexOf("application/json"))try{s.data=JSON.parse(s.data,t.reviver)}catch(h){return Gl(s,h),i(h)}(s.status>=400?i:n)(s)},typeof FormData<"u"&&c instanceof FormData||c&&typeof c=="object"&&(u["content-type"]="application/json",c=JSON.stringify(c)),s.withCredentials=!!t.withCredentials;for(o in u)s.setRequestHeader(o,u[o]);s.send(c)})}var Z0=gn.bind(gn,"GET"),J0=gn.bind(gn,"POST"),Q0=gn.bind(gn,"PATCH"),ev=gn.bind(gn,"DELETE"),tv=gn.bind(gn,"PUT");const nv=Object.freeze(Object.defineProperty({__proto__:null,del:ev,get:Z0,patch:Q0,post:J0,put:tv,send:gn},Symbol.toStringTag,{value:"Module"})),iv=S0(nv);var Wl;function rv(){if(Wl)return cn;Wl=1;var r=cn&&cn.__createBinding||(Object.create?(function(o,a,l,c){c===void 0&&(c=l);var u=Object.getOwnPropertyDescriptor(a,l);(!u||("get"in u?!a.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return a[l]}}),Object.defineProperty(o,c,u)}):(function(o,a,l,c){c===void 0&&(c=l),o[c]=a[l]})),e=cn&&cn.__setModuleDefault||(Object.create?(function(o,a){Object.defineProperty(o,"default",{enumerable:!0,value:a})}):function(o,a){o.default=a}),t=cn&&cn.__importStar||function(o){if(o&&o.__esModule)return o;var a={};if(o!=null)for(var l in o)l!=="default"&&Object.prototype.hasOwnProperty.call(o,l)&&r(a,o,l);return e(a,o),a};Object.defineProperty(cn,"__esModule",{value:!0}),cn.HTTP=void 0;const n=hc(),i=t(iv);let s=class{constructor(a,l={}){this.client=a,this.headers=l}get(a,l={}){return this.request("get",a,l)}post(a,l={}){return this.request("post",a,l)}del(a,l={}){return this.request("del",a,l)}put(a,l={}){return this.request("put",a,l)}request(a,l,c={}){return i[a](this.client.getHttpEndpoint(l),this.getOptions(c)).catch(u=>{var h;const f=u.statusCode,p=((h=u.data)===null||h===void 0?void 0:h.error)||u.statusMessage||u.message;throw!f&&!p?u:new n.ServerError(f,p)})}getOptions(a){return a.headers=Object.assign({},this.headers,a.headers),this.authToken&&(a.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(a.withCredentials=!0),a}};return cn.HTTP=s,cn}var ln={},Nn={},Xl;function sv(){if(Xl)return Nn;Xl=1,Object.defineProperty(Nn,"__esModule",{value:!0}),Nn.getItem=Nn.removeItem=Nn.setItem=void 0;let r;function e(){if(!r)try{r=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return r||(r={cache:{},setItem:function(s,o){this.cache[s]=o},getItem:function(s){this.cache[s]},removeItem:function(s){delete this.cache[s]}}),r}function t(s,o){e().setItem(s,o)}Nn.setItem=t;function n(s){e().removeItem(s)}Nn.removeItem=n;function i(s,o){const a=e().getItem(s);typeof Promise>"u"||!(a instanceof Promise)?o(a):a.then(l=>o(l))}return Nn.getItem=i,Nn}var $l;function iu(){if($l)return ln;$l=1;var r=ln&&ln.__awaiter||function(u,h,f,p){function _(y){return y instanceof f?y:new f(function(m){m(y)})}return new(f||(f=Promise))(function(y,m){function g(w){try{T(p.next(w))}catch(O){m(O)}}function b(w){try{T(p.throw(w))}catch(O){m(O)}}function T(w){w.done?y(w.value):_(w.value).then(g,b)}T((p=p.apply(u,h||[])).next())})},e=ln&&ln.__classPrivateFieldGet||function(u,h,f,p){if(f==="a"&&!p)throw new TypeError("Private accessor was defined without a getter");if(typeof h=="function"?u!==h||!p:!h.has(u))throw new TypeError("Cannot read private member from an object whose class did not declare it");return f==="m"?p:f==="a"?p.call(u):p?p.value:h.get(u)},t=ln&&ln.__classPrivateFieldSet||function(u,h,f,p,_){if(p==="m")throw new TypeError("Private method is not writable");if(p==="a"&&!_)throw new TypeError("Private accessor was defined without a setter");if(typeof h=="function"?u!==h||!_:!h.has(u))throw new TypeError("Cannot write private member to an object whose class did not declare it");return p==="a"?_.call(u,f):_?_.value=f:h.set(u,f),f},n,i,s,o;Object.defineProperty(ln,"__esModule",{value:!0}),ln.Auth=void 0;const a=sv(),l=eu();let c=class{constructor(h){this.http=h,this.settings={path:"/auth",key:"colyseus-auth-token"},n.set(this,!1),i.set(this,void 0),s.set(this,void 0),o.set(this,(0,l.createNanoEvents)()),(0,a.getItem)(this.settings.key,f=>this.token=f)}set token(h){this.http.authToken=h}get token(){return this.http.authToken}onChange(h){const f=e(this,o,"f").on("change",h);return e(this,n,"f")||t(this,i,new Promise((p,_)=>{this.getUserData().then(y=>{this.emitChange(Object.assign(Object.assign({},y),{token:this.token}))}).catch(y=>{this.emitChange({user:null,token:void 0})}).finally(()=>{p()})}),"f"),t(this,n,!0,"f"),f}getUserData(){return r(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(h,f,p){return r(this,void 0,void 0,function*(){const _=(yield this.http.post(`${this.settings.path}/register`,{body:{email:h,password:f,options:p}})).data;return this.emitChange(_),_})}signInWithEmailAndPassword(h,f){return r(this,void 0,void 0,function*(){const p=(yield this.http.post(`${this.settings.path}/login`,{body:{email:h,password:f}})).data;return this.emitChange(p),p})}signInAnonymously(h){return r(this,void 0,void 0,function*(){const f=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:h}})).data;return this.emitChange(f),f})}sendPasswordResetEmail(h){return r(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:h}})).data})}signInWithProvider(h,f={}){return r(this,void 0,void 0,function*(){return new Promise((p,_)=>{const y=f.width||480,m=f.height||768,g=this.token?`?token=${this.token}`:"",b=`Login with ${h[0].toUpperCase()+h.substring(1)}`,T=this.http.client.getHttpEndpoint(`${f.prefix||`${this.settings.path}/provider`}/${h}${g}`),w=screen.width/2-y/2,O=screen.height/2-m/2;t(this,s,window.open(T,b,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+y+", height="+m+", top="+O+", left="+w),"f");const N=H=>{H.data.user===void 0&&H.data.token===void 0||(clearInterval(I),e(this,s,"f").close(),t(this,s,void 0,"f"),window.removeEventListener("message",N),H.data.error!==void 0?_(H.data.error):(p(H.data),this.emitChange(H.data)))},I=setInterval(()=>{(!e(this,s,"f")||e(this,s,"f").closed)&&(t(this,s,void 0,"f"),_("cancelled"),window.removeEventListener("message",N))},200);window.addEventListener("message",N)})})}signOut(){return r(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(h){h.token!==void 0&&(this.token=h.token,h.token===null?(0,a.removeItem)(this.settings.key):(0,a.setItem)(this.settings.key,h.token)),e(this,o,"f").emit("change",h)}};return ln.Auth=c,n=new WeakMap,i=new WeakMap,s=new WeakMap,o=new WeakMap,ln}var Cr={},ql;function ov(){if(ql)return Cr;ql=1,Object.defineProperty(Cr,"__esModule",{value:!0}),Cr.discordURLBuilder=void 0;function r(e){var t;const n=((t=window?.location)===null||t===void 0?void 0:t.hostname)||"localhost",i=e.hostname.split("."),s=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&i.length>2?`/${i[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${n}${s}${e.pathname}${e.search}`:`${e.protocol}//${n}/.proxy/colyseus${s}${e.pathname}${e.search}`}return Cr.discordURLBuilder=r,Cr}var jl;function av(){if(jl)return Dn;jl=1;var r=Dn&&Dn.__awaiter||function(u,h,f,p){function _(y){return y instanceof f?y:new f(function(m){m(y)})}return new(f||(f=Promise))(function(y,m){function g(w){try{T(p.next(w))}catch(O){m(O)}}function b(w){try{T(p.throw(w))}catch(O){m(O)}}function T(w){w.done?y(w.value):_(w.value).then(g,b)}T((p=p.apply(u,h||[])).next())})},e;Object.defineProperty(Dn,"__esModule",{value:!0}),Dn.Client=Dn.MatchMakeError=void 0;const t=hc(),n=nu(),i=rv(),s=iu(),o=ov();class a extends Error{constructor(h,f){super(h),this.code=f,Object.setPrototypeOf(this,a.prototype)}}Dn.MatchMakeError=a;const l=typeof window<"u"&&typeof((e=window?.location)===null||e===void 0?void 0:e.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let c=class{constructor(h=l,f){var p,_;if(typeof h=="string"){const y=h.startsWith("/")?new URL(h,l):new URL(h),m=y.protocol==="https:"||y.protocol==="wss:",g=Number(y.port||(m?443:80));this.settings={hostname:y.hostname,pathname:y.pathname,port:g,secure:m}}else h.port===void 0&&(h.port=h.secure?443:80),h.pathname===void 0&&(h.pathname=""),this.settings=h;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new i.HTTP(this,f?.headers||{}),this.auth=new s.Auth(this.http),this.urlBuilder=f?.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((_=(p=window?.location)===null||p===void 0?void 0:p.hostname)===null||_===void 0)&&_.includes("discordsays.com"))&&(this.urlBuilder=o.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(h,f={},p){return r(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",h,f,p)})}create(h,f={},p){return r(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",h,f,p)})}join(h,f={},p){return r(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",h,f,p)})}joinById(h,f={},p){return r(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",h,f,p)})}reconnect(h,f){return r(this,void 0,void 0,function*(){if(typeof h=="string"&&typeof f=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[p,_]=h.split(":");if(!p||!_)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",p,{reconnectionToken:_},f)})}getAvailableRooms(h=""){return r(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${h}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(h,f,p){return r(this,void 0,void 0,function*(){const _=this.createRoom(h.room.name,f);_.roomId=h.room.roomId,_.sessionId=h.sessionId;const y={sessionId:_.sessionId};h.reconnectionToken&&(y.reconnectionToken=h.reconnectionToken);const m=p||_;return _.connect(this.buildEndpoint(h.room,y),h.devMode&&(()=>r(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${_.roomId}'...`);let g=0,b=8;const T=()=>r(this,void 0,void 0,function*(){g++;try{yield this.consumeSeatReservation(h,f,m),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${_.roomId}'`)}catch{g<b?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${g} out of ${b})`),setTimeout(T,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(T,2e3)})),m,this.http.headers),new Promise((g,b)=>{const T=(w,O)=>b(new t.ServerError(w,O));m.onError.once(T),m.onJoin.once(()=>{m.onError.remove(T),g(m)})})})}createMatchMakeRequest(h,f,p={},_,y){return r(this,void 0,void 0,function*(){const m=(yield this.http.post(`matchmake/${h}/${f}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(p)})).data;if(m.error)throw new a(m.error,m.code);return h==="reconnect"&&(m.reconnectionToken=p.reconnectionToken),yield this.consumeSeatReservation(m,_,y)})}createRoom(h,f){return new n.Room(h,f)}buildEndpoint(h,f={}){const p=[];for(const m in f)f.hasOwnProperty(m)&&p.push(`${m}=${f[m]}`);let _=this.settings.secure?"wss://":"ws://";h.publicAddress?_+=`${h.publicAddress}`:_+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const y=`${_}/${h.processId}/${h.roomId}?${p.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(y)):y}getHttpEndpoint(h=""){const f=h.startsWith("/")?h:`/${h}`,p=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${f}`;return this.urlBuilder?this.urlBuilder(new URL(p)):p}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return Dn.Client=c,Dn}var Ir={},Kl;function cv(){if(Kl)return Ir;Kl=1,Object.defineProperty(Ir,"__esModule",{value:!0}),Ir.SchemaSerializer=void 0;const r=ac();let e=class{setState(n){return this.state.decode(n)}getState(){return this.state}patch(n){return this.state.decode(n)}teardown(){var n,i;(i=(n=this.state)===null||n===void 0?void 0:n.$changes)===null||i===void 0||i.root.clearRefs()}handshake(n,i){this.state?new r.Reflection().decode(n,i):this.state=r.Reflection.decode(n,i)}};return Ir.SchemaSerializer=e,Ir}var Pr={},Yl;function lv(){if(Yl)return Pr;Yl=1,Object.defineProperty(Pr,"__esModule",{value:!0}),Pr.NoneSerializer=void 0;let r=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return Pr.NoneSerializer=r,Pr}var Zl;function hv(){return Zl||(Zl=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.SchemaSerializer=r.registerSerializer=r.Auth=r.Room=r.ErrorCode=r.Protocol=r.MatchMakeError=r.Client=void 0,X0();var e=av();Object.defineProperty(r,"Client",{enumerable:!0,get:function(){return e.Client}}),Object.defineProperty(r,"MatchMakeError",{enumerable:!0,get:function(){return e.MatchMakeError}});var t=Jh();Object.defineProperty(r,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),Object.defineProperty(r,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}});var n=nu();Object.defineProperty(r,"Room",{enumerable:!0,get:function(){return n.Room}});var i=iu();Object.defineProperty(r,"Auth",{enumerable:!0,get:function(){return i.Auth}});const s=cv();Object.defineProperty(r,"SchemaSerializer",{enumerable:!0,get:function(){return s.SchemaSerializer}});const o=lv(),a=Qh();Object.defineProperty(r,"registerSerializer",{enumerable:!0,get:function(){return a.registerSerializer}}),(0,a.registerSerializer)("schema",s.SchemaSerializer),(0,a.registerSerializer)("none",o.NoneSerializer)})(ko)),ko}var uv=hv();class fv{client=null;room=null;connect(e){this.client=new uv.Client(e)}async joinOrCreate(e){if(!this.client)return!1;try{return this.room=await this.client.joinOrCreate(e,{},Zh),!0}catch(t){return console.error("Colyseus joinOrCreate failed:",t),!1}}sendInput(e){this.room?.send("input",e)}getRoom(){return this.room}disconnect(){this.room?.leave(),this.room=null}}function dv(r,e){return{tick:e,moveX:r.moveX,moveZ:r.moveZ,sprint:r.sprint,jump:r.jump,slide:r.slide,yaw:r.yaw,pitch:r.pitch,shoot:r.shoot,reload:r.reload}}function Jl(r,e){if(e===ju)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ia||e===xh){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ia)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class pv extends pr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Dv(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Br.extractUrlBase(e);o=Br.resolveURL(c,this.path)}else o=Br.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Xh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ru){try{o[qe.KHR_BINARY_GLTF]=new Nv(e)}catch(h){i&&i(h);return}s=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new qv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:o[h]=new _v;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new Uv(s,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[h]=new Ov;break;case qe.KHR_MESH_QUANTIZATION:o[h]=new Fv;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function mv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gv{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Oe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],It);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qh(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new s0(u),c.distance=h;break;case"spot":c=new i0(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,On(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class _v{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return yi}extendParams(e,t,n){const i=[];e.color=new Oe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],It),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ht))}return Promise.all(i)}}class vv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class xv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new it(a,a)}return Promise.all(s)}}class yv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Mv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Sv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],It)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ht)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Ev{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Av{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],It),Promise.all(s)}}class Tv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class bv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(a[0],a[1],a[2],It),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ht)),Promise.all(s)}}class wv{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Rv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Cv{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Iv{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Pv{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Lv{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,i.mode,i.filter),p})})}else return null}}class Dv{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Jt.TRIANGLES&&c.mode!==Jt.TRIANGLE_STRIP&&c.mode!==Jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const _ of h){const y=new ke,m=new z,g=new pn,b=new z(1,1,1),T=new V_(_.geometry,_.material,f);for(let w=0;w<f;w++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,w),l.SCALE&&b.fromBufferAttribute(l.SCALE,w),T.setMatrixAt(w,y.compose(m,g,b));for(const w in l)if(w==="_COLOR_0"){const O=l[w];T.instanceColor=new Da(O.array,O.itemSize,O.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&_.geometry.setAttribute(w,l[w]);xt.prototype.copy.call(T,_),this.parser.assignFinalMaterial(T),p.push(T)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const ru="glTF",Lr=12,Ql={JSON:1313821514,BIN:5130562};class Nv{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Lr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ru)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Lr,s=new DataView(e,Lr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Ql.JSON){const c=new Uint8Array(e,Lr+o,a);this.content=n.decode(c)}else if(l===Ql.BIN){const c=Lr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Uv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Oa[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Oa[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],p=Ji[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(p){for(const _ in p.attributes){const y=p.attributes[_],m=l[_];m!==void 0&&(y.normalized=m)}h(p)},a,c,It,f)})})}}class Ov{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Fv{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class su extends $r{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,p=f*h,_=e*c,y=_-c,m=-2*p+3*f,g=p-f,b=1-m,T=g-f+h;for(let w=0;w!==a;w++){const O=o[y+w+a],N=o[y+w+l]*u,I=o[_+w+a],H=o[_+w]*u;s[w]=b*O+T*N+m*I+g*H}return s}}const Bv=new pn;class kv extends su{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Bv.fromArray(s).normalize().toArray(s),s}}const Jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ji={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},eh={9728:Gt,9729:Kt,9984:lh,9985:Ss,9986:Dr,9987:Fn},th={33071:Qn,33648:Ps,10497:nr},Go={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zv={CUBICSPLINE:void 0,LINEAR:Hr,STEP:zr},Wo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Hv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ar({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),r.DefaultMaterial}function mi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function On(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Vv(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function Gv(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Wv(r){let e;const t=r.extensions&&r.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xo(t.attributes):e=r.indices+":"+Xo(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Xo(r.targets[n]);return e}function Xo(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Fa(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const $v=new ke;class qv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new $h(this.options.manager):this.textureLoader=new c0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return mi(s,a,i),On(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Br.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Go[i.type],a=Ji[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Wt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Go[i.type],c=Ji[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let y,m;if(p&&p!==h){const g=Math.floor(f/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let T=t.cache.get(b);T||(y=new c(a,g*p,i.count*p/u),T=new F_(y,p/u),t.cache.add(b,T)),m=new ec(T,l,f%p/u,_)}else a===null?y=new c(i.count*l):y=new c(a,f,i.count*l),m=new Wt(y,l,_);if(i.sparse!==void 0){const g=Go.SCALAR,b=Ji[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,O=new b(o[1],T,i.sparse.count*g),N=new c(o[2],w,i.sparse.count*l);a!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let I=0,H=O.length;I<H;I++){const te=O[I];if(m.setX(te,N[I*l]),l>=2&&m.setY(te,N[I*l+1]),l>=3&&m.setZ(te,N[I*l+2]),l>=4&&m.setW(te,N[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=eh[f.magFilter]||Kt,u.minFilter=eh[f.minFilter]||Fn,u.wrapS=th[f.wrapS]||nr,u.wrapT=th[f.wrapT]||nr,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(y){const m=new Rt(y);m.needsUpdate=!0,f(m)}),t.load(Br.resolveURL(h,s.path),_,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),On(h,o),h.userData.mimeType=o.mimeType||Xv(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Hh,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new nc,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ar}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=i[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],It),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ht)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=yn);const u=s.alphaMode||Wo.OPAQUE;if(u===Wo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Wo.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==yi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new it(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==yi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==yi){const h=s.emissiveFactor;a.emissive=new Oe().setRGB(h[0],h[1],h[2],It)}return s.emissiveTexture!==void 0&&o!==yi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ht)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),On(h,s),t.associations.set(h,{materials:e}),s.extensions&&mi(i,h,s),h})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return nh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Wv(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=nh(new _n,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Hv(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,_=u.length;p<_;p++){const y=u[p],m=o[p];let g;const b=c[p];if(m.mode===Jt.TRIANGLES||m.mode===Jt.TRIANGLE_STRIP||m.mode===Jt.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new k_(y,b):new Ut(y,b),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Jt.TRIANGLE_STRIP?g.geometry=Jl(g.geometry,xh):m.mode===Jt.TRIANGLE_FAN&&(g.geometry=Jl(g.geometry,Ia));else if(m.mode===Jt.LINES)g=new zh(y,b);else if(m.mode===Jt.LINE_STRIP)g=new ic(y,b);else if(m.mode===Jt.LINE_LOOP)g=new G_(y,b);else if(m.mode===Jt.POINTS)g=new W_(y,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&Gv(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),On(g,s),m.extensions&&mi(i,g,m),t.assignFinalMaterial(g),h.push(g)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&mi(i,h[0],s),h[0];const f=new Mi;s.extensions&&mi(i,f,s),t.associations.set(f,{meshes:e});for(let p=0,_=h.length;p<_;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(Fs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ja(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),On(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new ke;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new tc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const p=i.channels[h],_=i.samplers[p.sampler],y=p.target,m=y.node,g=i.parameters!==void 0?i.parameters[_.input]:_.input,b=i.parameters!==void 0?i.parameters[_.output]:_.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",b)),c.push(_),u.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],p=h[1],_=h[2],y=h[3],m=h[4],g=[];for(let b=0,T=f.length;b<T;b++){const w=f[b],O=p[b],N=_[b],I=y[b],H=m[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const te=n._createAnimationTracks(w,O,N,I,H);if(te)for(let S=0;S<te.length;S++)g.push(te[S])}return new Ua(s,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,$v)});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Bh:c.length>1?u=new Mi:c.length===1?u=c[0]:u=new xt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),On(u,s),s.extensions&&mi(n,u,s),s.matrix!==void 0){const h=new ke;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Mi;n.name&&(s.name=i.createUniqueName(n.name)),On(s,n),n.extensions&&mi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,p]of i.associations)(f instanceof Mn||f instanceof Rt)&&h.set(f,p);return u.traverse(f=>{const p=i.associations.get(f);p!=null&&h.set(f,p)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Yn[s.path]===Yn.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Yn[s.path]){case Yn.weights:c=cr;break;case Yn.rotation:c=lr;break;case Yn.position:case Yn.scale:c=hr;break;default:switch(n.itemSize){case 1:c=cr;break;case 2:case 3:default:c=hr;break}break}const u=i.interpolation!==void 0?zv[i.interpolation]:Hr,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){const _=new c(l[f]+"."+Yn[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Fa(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof lr?kv:su;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function jv(r,e,t){const n=e.attributes,i=new Hn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){const u=Fa(Ji[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new z,l=new z;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const y=Fa(Ji[f.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new En;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function nh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Oa[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return ot.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),On(r,e),jv(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Vv(r,e.targets,t):r})}const ou=new pv,Kv=new $h;async function Yv(r){return(await ou.loadAsync(r)).scene}function Gr(){const r=new Ri(.5,1.8,.5),e=new ar({color:8947967});return new Ut(r,e)}async function Zv(r){if(!r.trim())return Gr();try{return await Yv(r)}catch{return Gr()}}async function Jv(r){if(!r.trim())return{scene:Gr(),animations:[]};try{const e=await ou.loadAsync(r);return{scene:e.scene,animations:e.animations??[]}}catch{return{scene:Gr(),animations:[]}}}const Qv="/models/skins",ih=new Map;async function zs(r){if(!r)return null;const e=ih.get(r);if(e)return e;try{const t=await Kv.loadAsync(`${Qv}/${r}.png`);return t.flipY=!1,ih.set(r,t),t}catch{return null}}async function ex(r,e){const t=await zs(e);return t?(Hs(r,t),!0):!1}function Hs(r,e){r.traverse(t=>{const n=t;if(!n.isMesh)return;const i=Array.isArray(n.material)?n.material:[n.material],s=[];for(const o of i){const a=o;if(!a?.map)continue;const l=a.clone();l.map=e,s.push(l)}s.length===1?n.material=s[0]:s.length>1&&(n.material=s)})}const js=document.getElementById("app");if(!js)throw new Error("No #app");const bi=document.createElement("canvas");js.appendChild(bi);function au(){const r=bi.clientWidth||window.innerWidth,e=bi.clientHeight||window.innerHeight;return{w:r,h:e}}const{w:uc,h:fc}=au(),mr=new k0(bi),Si=new F0(75,uc/fc||16/9,.1,1e3);mr.resize(uc,fc);Si.resize(uc,fc);const Ei=new O0;Ei.requestPointerLock(bi);window.addEventListener("beforeunload",r=>{Ei.isPointerLocked()&&(r.preventDefault(),r.returnValue="")});bi.addEventListener("mousedown",r=>r.button===0&&Ei.setShoot(!0));bi.addEventListener("mouseup",r=>r.button===0&&Ei.setShoot(!1));const gt=new B0;z0(js);G0(js);const tx={raycast:()=>!1},cu=new L0,Jn=new fv;let rh=0,$o=lc;const nx=.04;let Ba=null;const lu=[];let ka=null,Is;const ii=new Map,Vs=new Map,ix=.05,rx=.5,sx=.25,sh=[[5,0,5],[-4,0,6],[3,0,-5]];function ox(r){if(!r.length)return;const e=i=>i.toLowerCase().replace(/\s+/g,""),t=r.find(i=>e(i.name)==="idleaiming");if(t)return t;const n=r.find(i=>i.name==="idle");return n||r[0]}async function ax(){const[r,e]=await Promise.all([Zv(Xi.playerModelUrl),Jv(Xi.dummyModelUrl)]);if(Ba=r,Xi.playerSkin){const o=await zs(Xi.playerSkin);o&&Hs(r,o)}Si.getCamera().add(r),r.position.set(0,-lc*.5,-.4),r.rotation.set(0,0,0),r.scale.setScalar(1);const n=ox(e.animations);ka=e.scene,Is=n;const i=mr.getScene(),s=Xi.dummySkins;for(let o=0;o<sh.length;o++){const[a,l,c]=sh[o],u=Kh(e.scene),h=s[o%s.length],f=await zs(h);if(f&&Hs(u,f),u.position.set(a,l,c),i.add(u),n){const p=new jh(u);p.clipAction(n).play(),lu.push(p)}}}function hu(r,e,t){if(r===e||ii.has(r))return;const n=mr.getScene();let i;if(ka&&Is?(i=Kh(ka),i.updateMatrixWorld(!0),zs("orange").then(s=>{s&&Hs(i,s)})):(i=Gr(),i.material.color.setHex(16737792)),i.position.set(t.x,t.y,t.z),i.rotation.set(0,t.yaw+Math.PI,0),n.add(i),ii.set(r,i),Is){const s=new jh(i);s.clipAction(Is).play(),Vs.set(r,s)}}function uu(r){const e=mr.getScene(),t=ii.get(r),n=Vs.get(r);t&&(e.remove(t),ii.delete(r)),n&&(n.stopAllAction(),Vs.delete(r))}function cx(r){const e=r.state.players.get(r.sessionId);e&&(gt.position.x=e.x,gt.position.y=e.y,gt.position.z=e.z,gt.velocity.x=e.vx,gt.velocity.y=e.vy,gt.velocity.z=e.vz,gt.yaw=e.yaw,gt.pitch=e.pitch)}function lx(r){if(!r)return;const e=r.state.players.get(r.sessionId);if(!e)return;const t=e.x-gt.position.x,n=e.y-gt.position.y,i=e.z-gt.position.z;if(Math.sqrt(t*t+n*n+i*i)<=rx)return;const o=sx;gt.position.x+=t*o,gt.position.y+=n*o,gt.position.z+=i*o,gt.velocity.x+=(e.vx-gt.velocity.x)*o,gt.velocity.y+=(e.vy-gt.velocity.y)*o,gt.velocity.z+=(e.vz-gt.velocity.z)*o,gt.yaw+=((e.yaw-gt.yaw+Math.PI)%(2*Math.PI)-Math.PI)*o,gt.pitch+=(e.pitch-gt.pitch)*o}function hx(r){const e=r.sessionId,t=(i,s)=>{hu(s,e,i)},n=(i,s)=>{uu(s)};r.state.players.onAdd(t,!0),r.state.players.onRemove(n)}function ux(r,e){if(!r)return;const t=r.sessionId,n=1-Math.exp(-e/ix);r.state.players.forEach((o,a)=>{if(a===t)return;let l=ii.get(a);if(l||(hu(a,t,o),l=ii.get(a)),l){l.position.lerp(new z(o.x,o.y,o.z),n);const u=(o.yaw+Math.PI-l.rotation.y+Math.PI)%(2*Math.PI)-Math.PI;l.rotation.y+=u*n}});const i=[],s=new Set;r.state.players.forEach((o,a)=>s.add(String(a))),ii.forEach((o,a)=>{s.has(String(a))||i.push(a)}),i.forEach(o=>uu(o))}cu.setTickCallback(r=>{const e=Ei.getState();gt.update(r,e,tx);const t=Jn.getRoom();t&&(Jn.sendInput(dv(e,rh)),rh++,lx(t)),Ei.tick();const n=gt.getSnapshot(),i=n.crouching?T0:lc;$o=Fs.lerp($o,i,1-Math.exp(-r/nx)),Si.setTargetPosition(n.position.x,n.position.y+$o,n.position.z),Si.setRotation(n.yaw,n.pitch)}).setRenderCallback(r=>{Si.update(r),lu.forEach(o=>o.update(r)),Vs.forEach(o=>o.update(r)),ux(Jn.getRoom(),r),mr.render(Si.getCamera());const e=Jn.getRoom(),t=e?e.state.players.get(e.sessionId):null,n=t?.health??b0,i=t?.ammo??Il.ammo,s=t?.maxAmmo??Il.maxAmmo;H0(n,i,s);{const o=gt.getSnapshot(),a=Jn.getRoom(),l=a!==null?{connected:!0,playerCount:a.state.players.size,remoteMeshCount:ii.size}:{connected:!1,playerCount:0,remoteMeshCount:0};W0(o.velocity,o.state,Ei.getState().sprint,l)}});window.addEventListener("resize",()=>{const{w:r,h:e}=au();Si.resize(r,e),mr.resize(r,e)});ax().then(async()=>{if(Jn.connect(Xi.serverUrl),!await Jn.joinOrCreate("arena_ffa"))console.warn("Could not join arena_ffa – playing offline");else{const e=Jn.getRoom();e&&(hx(e),cx(e))}cu.start(),typeof window<"u"&&(window.setPlayerSkin=e=>{Ba&&ex(Ba,e)})});
