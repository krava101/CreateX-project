import"./assets/header-4ffb22f8.js";/* empty css                     */import{n as o}from"./assets/data-news-2a056899.js";const d=document.querySelector("#news-list"),a=document.getElementById("news-filter"),w=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href;let i=1,n="all";r(o,n);function r(t,s="all"){let l=0;s==="all"?l=t:l=t.filter(c=>c.type.toLowerCase()===s.toLowerCase());const m=l.slice((i-1)*6,i*6).reduce((c,e)=>c+`
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
                <use href="${w}#icon-comments"></use>
              </svg>
              <p>
                ${e.comments.length?e.comments.length+(e.comments.length>1?" comments":" comment"):"No comments"}
              </p>
            </li>
          </ul>
          <p class="news__card-text">
          ${e.previewText}</p>
        </div>
      </li>`,"");d.innerHTML=m}a.addEventListener("click",t=>{if(t.target.nodeName==="BUTTON"){const s=t.target;a.querySelector(".active").classList.remove("active"),i=1,n=s.dataset.filter,r(o,n),s.parentNode.classList.add("active")}});
//# sourceMappingURL=commonHelpers4.js.map
