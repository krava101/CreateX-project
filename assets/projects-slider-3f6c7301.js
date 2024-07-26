import{p as o}from"./data-projects-98539dd2.js";const e=document.querySelector("#p-list"),p=document.querySelector("#p-left-btn"),h=document.querySelector("#p-right-btn");let t=0,i;const f=(r,c)=>{let s=o;r&&(s=o.filter(n=>n.type===r)),c&&(s=o.filter(n=>n.status===c));const a=s.reduce((n,l)=>n+`<li class="project-card">
        <img
          class="project-img"
          src="${l.previewImg}"
          alt=""
        />
        <div class="project-card-box">
          <h5 class="card-title">${l.name}</h5>
          <p class="project-card-text">${l.type}</p>
          <a class="project-card-link" href="project.html?project=project${l.id}">view project</a>
        </div>
    </li>`,"");e.innerHTML=a};p.addEventListener("click",()=>{t<=0?t=e.children.length-2:t--,d(t)});h.addEventListener("click",()=>{t===e.children.length-2?t=0:t++,d(t)});function d(r){if(e.children.length>1){const c=e.children[0].getBoundingClientRect().width+30;e.style.transform=`translateX(${-r*c}px)`}}e.addEventListener("touchstart",r=>{i=r.touches[0].clientX});e.addEventListener("touchend",r=>{const c=r.changedTouches[0].clientX;c>i?c-i>70&&(t<=0?t=e.children.length-2:t--):c<i&&i-c>70&&(t===e.children.length-1?t=0:t++),d(t)});export{f as l};
//# sourceMappingURL=projects-slider-3f6c7301.js.map
