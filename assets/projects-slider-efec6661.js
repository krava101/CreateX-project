import{p as i}from"./data-projects-98539dd2.js";const t=document.getElementById("p-list"),p=document.getElementById("p-left-btn"),h=document.getElementById("p-right-btn"),m=document.getElementById("p__title");let e=0,o;const j=window.location.pathname,u={"/CreateX-project/index.html":"Browse our selected projects and learn more about our work","/CreateX-project/service.html":"Related projects","/CreateX-project/project.html":"Similar projects","/index.html":"Browse our selected projects and learn more about our work","/service.html":"Related projects","/project.html":"Similar projects"};m.textContent=u[j];const f=(r,c)=>{let l=i;r&&(l=i.filter(n=>n.type===r.type&&n.name!==r.name)),c&&(l=i.filter(n=>n.status===c));const d=l.reduce((n,s)=>n+`<li class="projects__card">
        <img
          class="projects__card-img"
          src="${s.previewImg}"
          alt=""
        />
        <div class="projects__card-box">
          <h5 class="card-title">${s.name}</h5>
          <p class="projects__card-text">${s.type}</p>
          <a class="projects__card-link" href="project.html?project=${s.id}">view project</a>
        </div>
    </li>`,"");t.innerHTML=d};p.addEventListener("click",()=>{e<=0?e=t.children.length-1:e--,a(e)});h.addEventListener("click",()=>{e===t.children.length-1?e=0:e++,a(e)});function a(r){if(t.children.length>1){const c=t.children[0].getBoundingClientRect().width+30;t.style.transform=`translateX(${-r*c}px)`}}t.addEventListener("touchstart",r=>{o=r.touches[0].clientX});t.addEventListener("touchend",r=>{const c=r.changedTouches[0].clientX;c>o?c-o>70&&(e<=0?e=t.children.length-2:e--):c<o&&o-c>70&&(e===t.children.length-1?e=0:e++),a(e)});export{f as l};
//# sourceMappingURL=projects-slider-efec6661.js.map
