import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import"./assets/data-projects-98539dd2.js";import"./assets/similar-projects-ebbc83be.js";import"./assets/controls-57926c4e.js";document.querySelector(".question-form");const n=document.querySelector(".hero-steps-list"),s=document.querySelector(".hero-left-btn"),l=document.querySelector(".hero-right-btn"),i=document.querySelector(".hero-pag-list");document.querySelector("#p-list");let e=0,r;function c(t){const o=n.firstElementChild.getBoundingClientRect();i.querySelector(".active-hero-pag").classList.remove("active-hero-pag"),n.style.transform=`translateX(${-t*o.width}px)`,i.children[t].classList.add("active-hero-pag")}s.addEventListener("click",()=>{e<=0?e=3:e--,c(e)});l.addEventListener("click",()=>{e===3?e=0:e++,c(e)});n.addEventListener("touchstart",t=>{r=t.touches[0].clientX});n.addEventListener("touchend",t=>{const o=t.changedTouches[0].clientX;o>r?o-r>70&&(e<=0?e=3:e--):o<r&&r-o>70&&(e===3?e=0:e++),c(e)});
//# sourceMappingURL=commonHelpers3.js.map
