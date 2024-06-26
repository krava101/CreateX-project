import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import{p as l}from"./assets/data-projects-98539dd2.js";import{l as n}from"./assets/comments-a49f048a.js";import"./assets/main-form-80133312.js";const m=document.querySelector(".projects-list"),p=document.querySelector(".media-list"),y=document.querySelectorAll(".media-btn"),s=document.querySelector(".projects-load-more");let o=1;const r=(e="all",c=1)=>{s.style.display="flex",c*9>=l.length&&(s.style.display="none");let i=l.slice(0,c*9);e!=="all"&&(i=l.filter(a=>a.status===e),s.style.display="none");const d=i.reduce((a,t)=>a+`<li class="projects-card">
              <img
                class="projects-img"
                src="${t.previewImg}"
                alt="${t.name}"
              />
              <div class="projects-card-box">
                <h5 class="card-title">${t.name}</h5>
                <p class="projects-card-text">${t.type}</p>
                <a class="projects-card-link" href="./project.html?project=${t.id}"
                  >view project</a
                >
              </div>
            </li>`,"");m.innerHTML=d};r();n(0);p.addEventListener("click",e=>{y.forEach(c=>c.classList.remove("active")),e.target.classList.add("active"),r(e.target.dataset.media)});s.addEventListener("click",e=>{o+=1,r("all",o),o*9>=l.length&&(s.style.display="none")});
//# sourceMappingURL=commonHelpers10.js.map
