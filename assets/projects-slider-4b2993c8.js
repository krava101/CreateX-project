import{p as i}from"./data-projects-2fb17aac.js";function m(c,l,e){let n;c.addEventListener("touchstart",t=>{n=t.touches[0].clientX}),c.addEventListener("touchend",t=>{const r=t.changedTouches[0].clientX,d=c.children.length;r>n?r-n>70&&(e<=0?e=d-1:e--):r<n&&n-r>70&&(e===d-1?e=0:e++),l(e)})}const s=document.getElementById("p-list"),p=document.getElementById("p-left-btn"),h=document.getElementById("p-right-btn"),j=document.getElementById("p__title");let o=0;m(s,a,o);const u=window.location.pathname,f={"/CreateX-project/index.html":"Browse our selected projects and learn more about our work","/CreateX-project/service.html":"Related projects","/CreateX-project/project.html":"Similar projects","/index.html":"Browse our selected projects and learn more about our work","/service.html":"Related projects","/project.html":"Similar projects"};j.textContent=f[u];const y=(c,l)=>{let e=i;if(c&&(e=i.filter(t=>t.type===c.type&&t.name!==c.name)),l&&(e=i.filter(t=>t.status===l)),e.length<1){document.querySelector(".projects__title-container").style.display="none",document.querySelector(".projects__list-wrapper").style.display="none";const t=document.querySelector(".projects");t.style.paddingTop="0",t.style.backgroundColor="#f4f5f6"}e.length===1&&(p.style.display="none",h.style.display="none");const n=e.reduce((t,r)=>t+`<li class="projects__card">
        <img
          class="projects__card-img"
          src="${r.previewImg}"
          alt=""
        />
        <div class="projects__card-box">
          <h5 class="card-title">${r.name}</h5>
          <p class="projects__card-text">${r.type}</p>
          <a class="projects__card-link" href="project.html?project=${r.id}">view project</a>
        </div>
    </li>`,"");s.innerHTML=n};p.addEventListener("click",()=>{o<=0?o=s.children.length-1:o--,a(o)});h.addEventListener("click",()=>{o===s.children.length-1?o=0:o++,a(o)});function a(c){if(s.children.length>1){const l=s.children[0].getBoundingClientRect().width+30;s.style.transform=`translateX(${-c*l}px)`}}export{y as l,m as t};
//# sourceMappingURL=projects-slider-4b2993c8.js.map
