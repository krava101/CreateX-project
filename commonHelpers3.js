import"./assets/modulepreload-polyfill-ec808ebb.js";import"./assets/header-9aec6acd.js";import{p as h}from"./assets/data-projects-98539dd2.js";const s=document.querySelector(".hero-steps-list"),p=document.querySelector(".hero-left-btn"),u=document.querySelector(".hero-right-btn"),a=document.querySelector(".hero-pag-list");let t=0,i;function l(r){const e=s.firstElementChild.getBoundingClientRect();a.querySelector(".active-hero-pag").classList.remove("active-hero-pag"),s.style.transform=`translateX(${-r*e.width}px)`,a.children[r].classList.add("active-hero-pag")}p.addEventListener("click",()=>{t<=0?t=3:t--,l(t)});u.addEventListener("click",()=>{t===3?t=0:t++,l(t)});s.addEventListener("touchstart",r=>{i=r.touches[0].clientX});s.addEventListener("touchend",r=>{const e=r.changedTouches[0].clientX;e>i?e-i>70&&(t<=0?t=3:t--):e<i&&i-e>70&&(t===3?t=0:t++),l(t)});const n=document.querySelector("#p-list"),g=document.querySelector("#p-left-btn"),m=document.querySelector("#p-right-btn");let c=0,o;const f=h.reduce((r,e)=>r+`<li class="project-card">
        <img
          class="project-img"
          src="${e.previewImg}"
          alt=""
        />
        <div class="project-card-box">
          <h5 class="card-title">${e.name}</h5>
          <p class="project-card-text">${e.type}</p>
          <a class="project-card-link" href="project.html?project=project${e.id}">view project</a>
        </div>
    </li>`,"");n.innerHTML=f;g.addEventListener("click",()=>{c<=0?c=n.children.length-2:c--,d(c)});m.addEventListener("click",()=>{c===n.children.length-2?c=0:c++,d(c)});function d(r){if(n.children.length>1){const e=n.children[0].getBoundingClientRect().width+30;n.style.transform=`translateX(${-r*e}px)`}}n.addEventListener("touchstart",r=>{o=r.touches[0].clientX});n.addEventListener("touchend",r=>{const e=r.changedTouches[0].clientX;e>o?e-o>70&&(c<=0?c=n.children.length-2:c--):e<o&&o-e>70&&(c===n.children.length-1?c=0:c++),d(c)});
//# sourceMappingURL=commonHelpers3.js.map
