import{S as U,i as z,s as F,l as c,a as S,K as G,m as i,p as l,h as t,c as T,L as g,q as d,M as e,J as a,b as K,n as x}from"../chunks/index-3fa99519.js";function H(Y){let o,R,m,I,p,C,_,w,h,P,b,r,E,v,q,k,s,u,A,j;return{c(){o=c("script"),m=c("script"),p=c("script"),_=c("script"),h=c("script"),b=S(),r=c("a-scene"),E=c("a-assets"),v=c("a-asset-item"),k=S(),s=c("a-marker"),u=c("a-entity"),A=S(),j=c("a-entity"),this.h()},l(f){const n=G('[data-svelte="svelte-co0ft3"]',document.head);o=i(n,"SCRIPT",{src:!0,type:!0});var B=l(o);B.forEach(t),m=i(n,"SCRIPT",{src:!0,type:!0});var D=l(m);D.forEach(t),p=i(n,"SCRIPT",{src:!0,type:!0});var J=l(p);J.forEach(t),_=i(n,"SCRIPT",{src:!0,type:!0});var L=l(_);L.forEach(t),h=i(n,"SCRIPT",{src:!0,type:!0});var O=l(h);O.forEach(t),n.forEach(t),b=T(f),r=i(f,"A-SCENE",{"vr-mode-ui":!0,"loading-screen":!0,renderer:!0,arjs:!0,id:!0,embedded:!0,"gesture-detector":!0});var y=l(r);E=i(y,"A-ASSETS",{});var M=l(E);v=i(M,"A-ASSET-ITEM",{id:!0,src:!0}),l(v).forEach(t),M.forEach(t),k=T(y),s=i(y,"A-MARKER",{id:!0,type:!0,preset:!0,url:!0,raycaster:!0,emitevents:!0,cursor:!0});var N=l(s);u=i(N,"A-ENTITY",{id:!0,scale:!0,"animation-mixer":!0,"gltf-model":!0,class:!0,"gesture-handler":!0}),l(u).forEach(t),N.forEach(t),A=T(y),j=i(y,"A-ENTITY",{camera:!0}),l(j).forEach(t),y.forEach(t),this.h()},h(){g(o.src,R="https://aframe.io/releases/1.0.4/aframe.min.js")||d(o,"src",R),d(o,"type","text/javascript"),g(m.src,I="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js")||d(m,"src",I),d(m,"type","text/javascript"),g(p.src,C="https://raw.githack.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js")||d(p,"src",C),d(p,"type","text/javascript"),g(_.src,w="https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-detector.js")||d(_,"src",w),d(_,"type","text/javascript"),g(h.src,P="https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-handler.js")||d(h,"src",P),d(h,"type","text/javascript"),e(v,"id","animated-asset"),g(v.src,q="assets/asset.gltf")||e(v,"src",q),e(u,"id","bowser-model"),e(u,"scale","1.3275364644496295 1.3275364644496295 1.3275364644496295"),e(u,"animation-mixer","loop: repeat"),e(u,"gltf-model","#animated-asset"),e(u,"class","clickable"),e(u,"gesture-handler",""),e(s,"id","animated-marker"),e(s,"type","pattern"),e(s,"preset","custom"),e(s,"url","assets/marker.patt"),e(s,"raycaster","objects: .clickable"),e(s,"emitevents","true"),e(s,"cursor","fuse: false; rayOrigin: mouse;"),e(j,"camera",""),e(r,"vr-mode-ui","enabled: false;"),e(r,"loading-screen","enabled: false;"),e(r,"renderer","logarithmicDepthBuffer: true;"),e(r,"arjs","trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"),e(r,"id","scene"),e(r,"embedded",""),e(r,"gesture-detector","")},m(f,n){a(document.head,o),a(document.head,m),a(document.head,p),a(document.head,_),a(document.head,h),K(f,b,n),K(f,r,n),a(r,E),a(E,v),a(r,k),a(r,s),a(s,u),a(r,A),a(r,j)},p:x,i:x,o:x,d(f){t(o),t(m),t(p),t(_),t(h),f&&t(b),f&&t(r)}}}class V extends U{constructor(o){super(),z(this,o,null,H,F,{})}}export{V as default};
