import{p as i}from"./data-projects-2fb17aac.js";const t=document.getElementById("p-list"),d=document.getElementById("p-left-btn"),p=document.getElementById("p-right-btn"),m=document.getElementById("p__title");let e=0,l;const j=window.location.pathname,u={"/CreateX-project/index.html":"Browse our selected projects and learn more about our work","/CreateX-project/service.html":"Related projects","/CreateX-project/project.html":"Similar projects","/index.html":"Browse our selected projects and learn more about our work","/service.html":"Related projects","/project.html":"Similar projects"};m.textContent=u[j];const y=(r,c)=>{let o=i;if(r&&(o=i.filter(n=>n.type===r.type&&n.name!==r.name)),c&&(o=i.filter(n=>n.status===c)),o.length<1){document.querySelector(".projects__title-container").style.display="none",document.querySelector(".projects__list-wrapper").style.display="none";const n=document.querySelector(".projects");n.style.paddingTop="0",n.style.backgroundColor="#f4f5f6"}o.length===1&&(d.style.display="none",p.style.display="none");const h=o.reduce((n,s)=>n+`<li class="projects__card">
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
    </li>`,"");t.innerHTML=h};d.addEventListener("click",()=>{e<=0?e=t.children.length-1:e--,a(e)});p.addEventListener("click",()=>{e===t.children.length-1?e=0:e++,a(e)});function a(r){if(t.children.length>1){const c=t.children[0].getBoundingClientRect().width+30;t.style.transform=`translateX(${-r*c}px)`}}t.addEventListener("touchstart",r=>{l=r.touches[0].clientX});t.addEventListener("touchend",r=>{const c=r.changedTouches[0].clientX;c>l?c-l>70&&(e<=0?e=t.children.length-2:e--):c<l&&l-c>70&&(e===t.children.length-1?e=0:e++),a(e)});export{y as l};
//# sourceMappingURL=projects-slider-4f04f248.js.map
