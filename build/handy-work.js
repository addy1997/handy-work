import{w as e,n as t,t as s}from"./shared-0bba664c.js";export{n as normalize}from"./shared-0bba664c.js";const o=e(new Worker(new URL("handpose-fffa2717.js",import.meta.url),{type:"module"})).default;function a(e,n){return o.loadPose(e,n)}const r=new EventTarget;class i{#ready;constructor({source:e,handPose:n}){this.handPose=n,this.size=e.hand.size,this.jointKeys=Array.from(e.hand.keys()),this.hand=e.hand,this.jointMatrixArray=new Float32Array(16*e.hand.size),this.handedness=e.handedness,this.#ready=!0}async update(e,n,t){if(!this.#ready)return[];this.#ready=!1,t.fillPoses(this.hand.values(),n,this.jointMatrixArray);const o=await this.handPose.update(e.transform.matrix,s(this.jointMatrixArray,[this.jointMatrixArray.buffer]),this.handedness);return this.jointMatrixArray=o.usedHandArrayBuffer,this.#ready=!0,o.distances}}const d=new Map;function h(){d.clear(),console.log("reset hands")}let c=!1;function l(){c=!0}function f(e,n,s){const o={};for(const n of e)n.hand&&(o[n.handedness]=n.hand);if(o.left&&o.right){window.__dumpHands=!1;const e=o.left.size,a=new Float32Array(1+16*e+16*e+e+e);a[0]=e;const r=new Float32Array(a.buffer,4,16*e),i=new Float32Array(a.buffer,4+16*e*4,16*e);new Float32Array(a.buffer,4+16*e*4*2,2*e).fill(1),s.fillPoses(o.left.values(),n,r),s.fillPoses(o.right.values(),n,i),t(r),t(i),console.log(a);const d=window.document.createElement("a");d.href=window.URL.createObjectURL(new Blob([new Uint8Array(a.buffer)],{type:"application/octet-stream"})),d.download="untitled.handpose",document.body.appendChild(d),d.click(),document.body.removeChild(d)}}function u(e,n,t){const s={handedness:n.handedness,distances:e},o=new CustomEvent("pose",{detail:s});r.dispatchEvent(o),t&&t(s)}function y(e,n,t,s){if(e&&t){const a=t.getViewerPose(n);c&&f(e,n,t);for(const r of e)if(r.hand)if(d.has(0)){const e=d.get(0);if(e instanceof Promise)continue;e.update(a,n,t).then((n=>{n.length&&u(n,e,s)})).catch((function(e){console.log(e)}))}else{console.log("no hand, making hand0"),console.log(e);const n=new o;d.set(0,n),n.then((e=>{const n=new i({source:r,handPose:e});d.set(0,n)}))}}}export{l as dumpHands,f as handDataToFile,r as handPoses,a as loadPose,h as resetHands,y as update};
//# sourceMappingURL=handy-work.js.map
