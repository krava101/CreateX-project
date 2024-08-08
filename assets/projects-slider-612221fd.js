import{p as l}from"./data-projects-2fb17aac.js";import{t as h}from"./touch-slider-a3d169cb.js";const r=document.getElementById("p-list"),d=document.getElementById("p-left-btn"),m=document.getElementById("p-right-btn"),u=document.getElementById("p__title"),i=document.getElementById("p-pag-list");let c=0;h(r,a,c);const g=window.location.pathname,y={"/CreateX-project/index.html":"Browse our selected projects and learn more about our work","/CreateX-project/service.html":"Related projects","/CreateX-project/project.html":"Similar projects","/index.html":"Browse our selected projects and learn more about our work","/service.html":"Related projects","/project.html":"Similar projects"};u.textContent=y[g];const v=(o,s)=>{let e=l;if(o&&(e=l.filter(t=>t.type===o.type&&t.name!==o.name)),s&&(e=l.filter(t=>t.status===s)),e.length<1){document.querySelector(".projects__title-container").style.display="none",document.querySelector(".projects__list-wrapper").style.display="none";const t=document.querySelector(".projects");t.style.paddingTop="0",t.style.backgroundColor="#f4f5f6"}e.length===1&&(d.style.display="none",m.style.display="none");const j=e.reduce((t,n)=>t+`<li class="projects__card">
        <img
          class="projects__card-img"
          src="${n.previewImg}"
          alt=""
        />
        <div class="projects__card-box">
          <h5 class="card-title">${n.name}</h5>
          <p class="projects__card-text">${n.type}</p>
          <a class="projects__card-link" href="project.html?project=${n.id}">view project</a>
        </div>
    </li>`,"");r.innerHTML=j;const p=e.map((t,n)=>`<li><button class="projects__pag-btn ${n===0?"active":""}" type="button" ></button></li>`);p.length>1&&(i.innerHTML=p.join(""))};d.addEventListener("click",()=>{c<=0?c=r.children.length-1:c--,a(c)});m.addEventListener("click",()=>{c===r.children.length-1?c=0:c++,a(c)});function a(o){if(r.children.length>1){const s=r.children[0].getBoundingClientRect().width+30;r.style.transform=`translateX(${-o*s}px)`;const e=i.querySelector(".active");e&&e.classList.remove("active"),i.children[o].firstChild.classList.add("active")}}export{v as l};
//# sourceMappingURL=projects-slider-612221fd.js.map
