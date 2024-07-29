import"./assets/header-4ffb22f8.js";import"./assets/comments-accae290.js";import{n as r}from"./assets/data-news-fe2df6bb.js";import"./assets/main-form-25ecbd05.js";import{l as a}from"./assets/projects-slider-4f04f248.js";import"./assets/data-projects-2fb17aac.js";const d=document.getElementById("newsList"),m=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href,h=r.slice(0,3).reduce((s,e,l)=>s+`
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
              <use href="${m}#icon-comments"></use>
            </svg>
            <p>
              ${e.comments.length?e.comments.length+(e.comments.length>1?" comments":" comment"):"No comments"}
            </p>
          </li>
        </ul>
        <p class="news-card-text ${l!==0?"hidden":""}">
        ${e.previewText}</p>
      </div>
    </li>
    `,"");d.innerHTML=h;const n=document.querySelector(".hero-steps-list"),g=document.querySelector(".hero-left-btn"),p=document.querySelector(".hero-right-btn"),o=document.querySelector(".hero-pag-list");let t=0,c;function i(s){const e=n.firstElementChild.getBoundingClientRect();o.querySelector(".active-hero-pag").classList.remove("active-hero-pag"),n.style.transform=`translateX(${-s*e.width}px)`,o.children[s].classList.add("active-hero-pag")}g.addEventListener("click",()=>{t<=0?t=n.children.length-1:t--,i(t)});p.addEventListener("click",()=>{t===n.children.length-1?t=0:t++,i(t)});n.addEventListener("touchstart",s=>{c=s.touches[0].clientX});n.addEventListener("touchend",s=>{const e=s.changedTouches[0].clientX;e>c?e-c>70&&(t<=0?t=n.children.length-1:t--):e<c&&c-e>70&&(t===n.children.length-1?t=0:t++),i(t)});a();
//# sourceMappingURL=commonHelpers3.js.map
