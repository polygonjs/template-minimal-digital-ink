var c=Object.create;var a=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var O=Object.getOwnPropertyNames;var R=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty;var o=t=>a(t,"__esModule",{value:!0});var L=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var P=(t,e,E,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of O(e))!d.call(t,s)&&(E||s!=="default")&&a(t,s,{get:()=>e[s],enumerable:!(r=n(e,s))||r.enumerable});return t},S=(t,e)=>P(o(a(t!=null?c(R(t)):{},"default",!e&&t&&t.__esModule?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var Y=(t=>(t.POLY_PROGRESS="POLYProgress",t.SCENE_CREATED="POLYSceneCreated",t.VIEWER_MOUNTED="POLYViewerMounted",t.SCENE_READY="POLYSceneReady",t.VIEWER_READY="POLYViewerReady",t))(Y||{}),u=class{static dispatchProgressEvent(e,E){let r=s=>new CustomEvent(s,{detail:{progress:e}});document.dispatchEvent(r("POLYProgress")),document.dispatchEvent(r(`POLYProgress-${E}`))}};var _={sceneData:{start:0,mult:.25},assets:{start:.25,mult:0},nodes:{start:.25,mult:.75}};export{L as a,S as b,Y as c,u as d,_ as e};
