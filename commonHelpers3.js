import"./assets/header-35869669.js";import{T as r,l}from"./assets/projects-slider-fa13c509.js";import"./assets/comments-accae290.js";import{n as a}from"./assets/data-news-d0acb961.js";import"./assets/main-form-25ecbd05.js";import"./assets/projects-0519d275.js";const n=document.querySelector(".hero-steps-list"),m=document.querySelector(".hero-left-btn"),d=document.querySelector(".hero-right-btn"),o=document.querySelector(".hero-pag-list");let t=0;const h=new r(n,c);m.addEventListener("click",()=>{t<=0?t=n.children.length-1:t--,c(t)});d.addEventListener("click",()=>{t===n.children.length-1?t=0:t++,c(t)});function c(s){t=s,h.index=s;const e=n.firstElementChild.getBoundingClientRect();o.querySelector(".active-hero-pag").classList.remove("active-hero-pag"),n.style.transform=`translateX(${-s*e.width}px)`,o.children[s].classList.add("active-hero-pag")}const p=document.getElementById("newsList"),g=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href,u=a.slice(0,3).reduce((s,e,i)=>s+`
    <li class="news-card">
      <div class="news-card-img-wrapper">
        <img
          class="news-card-img"
          src="${e.img}"
          alt="${e.title} image"
        />
      </div>
      <div class="news-card-content">
        <a class="card-title" href="./post.html?post=${e.id}">${e.title}</a>
        <ul class="news-date-list list">
          <li>${e.type}</li>
          <li>${e.date}</li>
          <li class="news-comments">
            <svg class="news-comment-icon">
              <use href="${g}#icon-comments"></use>
            </svg>
            <p>
              ${e.comments.length?e.comments.length+(e.comments.length>1?" comments":" comment"):"No comments"}
            </p>
          </li>
        </ul>
        <p class="news-card-text ${i!==0?"hidden":""}">
        ${e.previewText}</p>
      </div>
    </li>
    `,"");p.innerHTML=u;l();
//# sourceMappingURL=commonHelpers3.js.map
