import"./assets/header-4ffb22f8.js";/* empty css                     */import"./assets/comments-accae290.js";import{p as l}from"./assets/data-projects-2fb17aac.js";const m=document.querySelector(".projects-list"),d=document.querySelector(".media-list");document.querySelectorAll(".media-btn");const s=document.querySelector(".projects-load-more");let r=1;const i=(e="all",t=1)=>{s.style.display="flex",t*9>=l.length&&(s.style.display="none");let o=l.slice(0,t*9);e!=="all"&&(o=l.filter(a=>a.status===e),s.style.display="none");const n=o.reduce((a,c)=>a+`<li class="projects-card">
        <img
          class="projects-img"
          src="${c.previewImg}"
          alt="${c.name}"
        />
        <div class="projects-card-box">
          <h5 class="card-title">${c.name}</h5>
          <p class="projects-card-text">${c.type}</p>
          <a class="projects-card-link" href="./project.html?project=${c.id}"
            >view project</a
          >
        </div>
      </li>`,"");m.innerHTML=n};i();d.addEventListener("click",e=>{const t=d.querySelector(".active");t&&t.classList.remove("active"),e.target.classList.add("active"),i(e.target.dataset.media)});s.addEventListener("click",e=>{r+=1,i("all",r),r*9>=l.length&&(s.style.display="none")});
//# sourceMappingURL=commonHelpers10.js.map
