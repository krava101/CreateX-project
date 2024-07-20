import"./assets/header-92b20be3.js";/* empty css                     */import"./assets/comments-accae290.js";import{p as l}from"./assets/data-projects-98539dd2.js";const n=document.querySelector(".projects-list"),m=document.querySelector(".media-list"),p=document.querySelectorAll(".media-btn"),s=document.querySelector(".projects-load-more");let r=1;const o=(e="all",c=1)=>{s.style.display="flex",c*9>=l.length&&(s.style.display="none");let i=l.slice(0,c*9);e!=="all"&&(i=l.filter(a=>a.status===e),s.style.display="none");const d=i.reduce((a,t)=>a+`<li class="projects-card">
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
            </li>`,"");n.innerHTML=d};o();m.addEventListener("click",e=>{p.forEach(c=>c.classList.remove("active")),e.target.classList.add("active"),o(e.target.dataset.media)});s.addEventListener("click",e=>{r+=1,o("all",r),r*9>=l.length&&(s.style.display="none")});
//# sourceMappingURL=commonHelpers10.js.map
