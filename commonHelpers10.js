import"./assets/header-35869669.js";/* empty css                     */import"./assets/comments-accae290.js";import{g as m}from"./assets/projects-0519d275.js";const p=document.querySelector(".projects-list"),n=document.querySelector(".media-list"),c=document.querySelector(".projects-load-more"),y="https://res.cloudinary.com/dxseifgey/image/upload/v1723796772";let l=1,a=[];g();async function g(){a=await m(),r()}const r=async(e="all",t=1)=>{let o=a.slice(0,t*9);c.style.display="flex",t*9>=a.length&&(c.style.display="none"),e!=="all"&&(o=a.filter(i=>i.status===e),c.style.display="none");const d=o.reduce((i,s,u)=>i+`<li class="projects-card">
        <img
          class="projects-img"
          src="${y+s.images[0].src}"
          alt="${s.name}"
        />
        <div class="projects-card-box">
          <h5 class="card-title">${s.name}</h5>
          <p class="projects-card-text">${s.type}</p>
          <a class="projects-card-link" href="./project.html?project=${s._id}"
            >view project</a
          >
        </div>
      </li>`,"");p.innerHTML=d};n.addEventListener("click",e=>{const t=n.querySelector(".active");t&&t.classList.remove("active"),e.target.classList.add("active"),r(e.target.dataset.media)});c.addEventListener("click",e=>{l+=1,r("all",l),l*9>=a.length&&(c.style.display="none")});
//# sourceMappingURL=commonHelpers10.js.map
