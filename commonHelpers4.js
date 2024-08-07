import"./assets/header-4ffb22f8.js";/* empty css                     */import{n as r}from"./assets/data-news-d0acb961.js";import{C as m}from"./assets/custom-dropdown-fcd182db.js";const w=document.getElementById("news-list"),d=document.getElementById("news-filter"),f=document.getElementById("news-filter-mobile"),p=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href;let c=1,i="all";a(r,i);new m("news-filter-current","news-filter-mobile",_);function _(n,t){c=1,i=t.dataset.filter;const s=n.querySelector("span");s&&(s.textContent=t.textContent);const l=f.querySelector(".hidden");l&&l.classList.remove("hidden"),t.parentNode.classList.add("hidden"),a(r,i)}d.addEventListener("click",n=>{if(n.target.nodeName==="BUTTON"){const t=n.target,s=d.querySelector(".active");s&&s.classList.remove("active"),c=1,i=t.dataset.filter,a(r,i),t.parentNode.classList.add("active")}});function a(n,t="all"){let s=0;t==="all"?s=n:s=n.filter(o=>o.type.toLowerCase()===t.toLowerCase());const l=s.slice((c-1)*6,c*6).reduce((o,e)=>o+`
      <li class="news__card">
        <div class="news__card-img-wrapper">
          <img
            class="news__card-img"
            src="${e.img}"
            alt="${e.title} image"
          />
        </div>
        <div class="news__card-box">
          <a class="news__card-title card-title" href="./post.html?post=${e.id}">${e.title}</a>
          <ul class="news__date-list list">
            <li>${e.type}</li>
            <li>${e.date}</li>
            <li class="news__comments">
              <svg class="news__comment-icon">
                <use href="${p}#icon-comments"></use>
              </svg>
              <p>
                ${e.comments.length?e.comments.length+(e.comments.length>1?" comments":" comment"):"No comments"}
              </p>
            </li>
          </ul>
          <p class="news__card-text">
          ${e.previewText}</p>
        </div>
      </li>`,"");w.innerHTML=l}
//# sourceMappingURL=commonHelpers4.js.map
