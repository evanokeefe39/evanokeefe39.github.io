import{S as U,i as z,s as F,l as c,a as T,K as G,m as i,p as l,h as t,c as j,L as v,q as k,M as e,J as a,b as K,n as R}from"../chunks/index-3fa99519.js";function H(Y){let d,I,m,w,_,x,p,C,h,P,y,r,E,f,q,A,s,o,S,b;return{c(){d=c("script"),m=c("script"),_=c("script"),p=c("script"),h=c("script"),y=T(),r=c("a-scene"),E=c("a-assets"),f=c("a-asset-item"),A=T(),s=c("a-marker"),o=c("a-entity"),S=T(),b=c("a-entity"),this.h()},l(n){const u=G('[data-svelte="svelte-wct80w"]',document.head);d=i(u,"SCRIPT",{src:!0});var B=l(d);B.forEach(t),m=i(u,"SCRIPT",{src:!0});var D=l(m);D.forEach(t),_=i(u,"SCRIPT",{src:!0});var J=l(_);J.forEach(t),p=i(u,"SCRIPT",{src:!0});var L=l(p);L.forEach(t),h=i(u,"SCRIPT",{src:!0});var O=l(h);O.forEach(t),u.forEach(t),y=j(n),r=i(n,"A-SCENE",{"vr-mode-ui":!0,"loading-screen":!0,renderer:!0,arjs:!0,id:!0,embedded:!0,"gesture-detector":!0});var g=l(r);E=i(g,"A-ASSETS",{});var M=l(E);f=i(M,"A-ASSET-ITEM",{id:!0,src:!0}),l(f).forEach(t),M.forEach(t),A=j(g),s=i(g,"A-MARKER",{id:!0,type:!0,preset:!0,url:!0,raycaster:!0,emitevents:!0,cursor:!0});var N=l(s);o=i(N,"A-ENTITY",{id:!0,scale:!0,"animation-mixer":!0,"gltf-model":!0,class:!0,"gesture-handler":!0}),l(o).forEach(t),N.forEach(t),S=j(g),b=i(g,"A-ENTITY",{camera:!0}),l(b).forEach(t),g.forEach(t),this.h()},h(){v(d.src,I="https://aframe.io/releases/1.0.4/aframe.min.js")||k(d,"src",I),v(m.src,w="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js")||k(m,"src",w),v(_.src,x="https://raw.githack.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js")||k(_,"src",x),v(p.src,C="https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-detector.js")||k(p,"src",C),v(h.src,P="https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-handler.js")||k(h,"src",P),e(f,"id","animated-asset"),v(f.src,q="assets/asset.gltf")||e(f,"src",q),e(o,"id","bowser-model"),e(o,"scale","1.3275364644496295 1.3275364644496295 1.3275364644496295"),e(o,"animation-mixer","loop: repeat"),e(o,"gltf-model","#animated-asset"),e(o,"class","clickable"),e(o,"gesture-handler",""),e(s,"id","animated-marker"),e(s,"type","pattern"),e(s,"preset","custom"),e(s,"url","assets/marker.patt"),e(s,"raycaster","objects: .clickable"),e(s,"emitevents","true"),e(s,"cursor","fuse: false; rayOrigin: mouse;"),e(b,"camera",""),e(r,"vr-mode-ui","enabled: false;"),e(r,"loading-screen","enabled: false;"),e(r,"renderer","logarithmicDepthBuffer: true;"),e(r,"arjs","trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"),e(r,"id","scene"),e(r,"embedded",""),e(r,"gesture-detector","")},m(n,u){a(document.head,d),a(document.head,m),a(document.head,_),a(document.head,p),a(document.head,h),K(n,y,u),K(n,r,u),a(r,E),a(E,f),a(r,A),a(r,s),a(s,o),a(r,S),a(r,b)},p:R,i:R,o:R,d(n){t(d),t(m),t(_),t(p),t(h),n&&t(y),n&&t(r)}}}class V extends U{constructor(d){super(),z(this,d,null,H,F,{})}}export{V as default};
