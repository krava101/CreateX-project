function f(h,s,t,l){let e;h.addEventListener("touchstart",n=>{e=n.touches[0].clientX}),h.addEventListener("touchend",n=>{const c=n.changedTouches[0].clientX;let o=h.children.length;l&&(o=l),c>e?c-e>70&&(t<=0?t=o-1:t--):c<e&&e-c>70&&(t===o-1?t=0:t++),s(t)})}export{f as t};
//# sourceMappingURL=touch-slider-a3d169cb.js.map
