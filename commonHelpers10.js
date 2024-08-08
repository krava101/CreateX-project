import"./assets/header-4ffb22f8.js";/* empty css                     */import"./assets/comments-accae290.js";import{p as a}from"./assets/data-projects-2fb17aac.js";const p=document.querySelector(".projects-list"),d=document.querySelector(".media-list"),c=document.querySelector(".projects-load-more");let r=1;const i=(e="all",t=1)=>{c.style.display="flex",t*9>=a.length&&(c.style.display="none");let o=a.slice(0,t*9);e!=="all"&&(o=a.filter(l=>l.status===e),c.style.display="none");const n=o.reduce((l,s)=>l+`<li class="projects-card">
        <img
          class="projects-img"
          src="${s.previewImg}"
          alt="${s.name}"
        />
        <div class="projects-card-box">
          <h5 class="card-title">${s.name}</h5>
          <p class="projects-card-text">${s.type}</p>
          <a class="projects-card-link" href="./project.html?project=${s.id}"
            >view project</a
          >
        </div>
      </li>`,"");p.innerHTML=n};i();d.addEventListener("click",e=>{const t=d.querySelector(".active");t&&t.classList.remove("active"),e.target.classList.add("active"),i(e.target.dataset.media)});c.addEventListener("click",e=>{r+=1,i("all",r),r*9>=a.length&&(c.style.display="none")});
//# sourceMappingURL=commonHelpers10.js.map
