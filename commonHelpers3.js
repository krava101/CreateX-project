import"./assets/header-4ffb22f8.js";import"./assets/comments-accae290.js";import{n as r}from"./assets/data-news-fe2df6bb.js";import{t as l}from"./assets/touch-slider-a3d169cb.js";import"./assets/main-form-25ecbd05.js";import{l as a}from"./assets/projects-slider-a7d0a2f1.js";import"./assets/data-projects-2fb17aac.js";const m=document.getElementById("newsList"),d=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href,h=r.slice(0,3).reduce((n,e,i)=>n+`
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
              <use href="${d}#icon-comments"></use>
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
    `,"");m.innerHTML=h;const s=document.querySelector(".hero-steps-list"),p=document.querySelector(".hero-left-btn"),g=document.querySelector(".hero-right-btn"),o=document.querySelector(".hero-pag-list");let t=0;l(s,c,t);p.addEventListener("click",()=>{t<=0?t=s.children.length-1:t--,c(t)});g.addEventListener("click",()=>{t===s.children.length-1?t=0:t++,c(t)});function c(n){const e=s.firstElementChild.getBoundingClientRect();o.querySelector(".active-hero-pag").classList.remove("active-hero-pag"),s.style.transform=`translateX(${-n*e.width}px)`,o.children[n].classList.add("active-hero-pag")}a();
//# sourceMappingURL=commonHelpers3.js.map
