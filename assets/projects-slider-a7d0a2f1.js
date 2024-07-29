import{p as s}from"./data-projects-2fb17aac.js";import{t as m}from"./touch-slider-a3d169cb.js";const r=document.getElementById("p-list"),a=document.getElementById("p-left-btn"),d=document.getElementById("p-right-btn"),j=document.getElementById("p__title");let t=0;m(r,i,t);const h=window.location.pathname,u={"/CreateX-project/index.html":"Browse our selected projects and learn more about our work","/CreateX-project/service.html":"Related projects","/CreateX-project/project.html":"Similar projects","/index.html":"Browse our selected projects and learn more about our work","/service.html":"Related projects","/project.html":"Similar projects"};j.textContent=u[h];const f=(o,n)=>{let c=s;if(o&&(c=s.filter(e=>e.type===o.type&&e.name!==o.name)),n&&(c=s.filter(e=>e.status===n)),c.length<1){document.querySelector(".projects__title-container").style.display="none",document.querySelector(".projects__list-wrapper").style.display="none";const e=document.querySelector(".projects");e.style.paddingTop="0",e.style.backgroundColor="#f4f5f6"}c.length===1&&(a.style.display="none",d.style.display="none");const p=c.reduce((e,l)=>e+`<li class="projects__card">
        <img
          class="projects__card-img"
          src="${l.previewImg}"
          alt=""
        />
        <div class="projects__card-box">
          <h5 class="card-title">${l.name}</h5>
          <p class="projects__card-text">${l.type}</p>
          <a class="projects__card-link" href="project.html?project=${l.id}">view project</a>
        </div>
    </li>`,"");r.innerHTML=p};a.addEventListener("click",()=>{t<=0?t=r.children.length-1:t--,i(t)});d.addEventListener("click",()=>{t===r.children.length-1?t=0:t++,i(t)});function i(o){if(r.children.length>1){const n=r.children[0].getBoundingClientRect().width+30;r.style.transform=`translateX(${-o*n}px)`}}export{f as l};
//# sourceMappingURL=projects-slider-a7d0a2f1.js.map
