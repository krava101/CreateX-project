import"./assets/header-92b20be3.js";import"./assets/comments-accae290.js";import{n as l}from"./assets/data-news-fe2df6bb.js";import{l as a}from"./assets/projects-slider-3f6c7301.js";import"./assets/main-form-25ecbd05.js";import"./assets/data-projects-98539dd2.js";const d=document.getElementById("newsList"),m=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href,h=l.slice(0,3).reduce((s,e,r)=>s+`
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
        <p class="news-card-text ${r!==0?"hidden":""}">
        ${e.previewText}</p>
      </div>
    </li>
    `,"");d.innerHTML=h;const c=document.querySelector(".hero-steps-list"),p=document.querySelector(".hero-left-btn"),g=document.querySelector(".hero-right-btn"),o=document.querySelector(".hero-pag-list");let t=0,n;function i(s){const e=c.firstElementChild.getBoundingClientRect();o.querySelector(".active-hero-pag").classList.remove("active-hero-pag"),c.style.transform=`translateX(${-s*e.width}px)`,o.children[s].classList.add("active-hero-pag")}p.addEventListener("click",()=>{t<=0?t=3:t--,i(t)});g.addEventListener("click",()=>{t===3?t=0:t++,i(t)});c.addEventListener("touchstart",s=>{n=s.touches[0].clientX});c.addEventListener("touchend",s=>{const e=s.changedTouches[0].clientX;e>n?e-n>70&&(t<=0?t=3:t--):e<n&&n-e>70&&(t===3?t=0:t++),i(t)});a();
//# sourceMappingURL=commonHelpers3.js.map
