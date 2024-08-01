import"./assets/header-4ffb22f8.js";/* empty css                     */import{n as d}from"./assets/data-news-2a056899.js";const g=document.querySelector("#news-list"),v=document.getElementById("news-filter"),n=document.getElementById("news-filter-current"),c=document.getElementById("news-filter-mobile"),p=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href;let a=1,l="all";m(d,l);n.addEventListener("click",f);v.addEventListener("click",e=>{if(e.target.nodeName==="BUTTON"){const s=e.target,i=v.querySelector(".active");i&&i.classList.remove("active"),a=1,l=s.dataset.filter,m(d,l),s.parentNode.classList.add("active")}});function f(){c.classList.add("active"),n.classList.add("active"),c.addEventListener("click",u),n.addEventListener("click",r),document.addEventListener("click",L)}function L(e){!c.contains(e.target)&&e.target!==n&&r()}function r(){c.classList.remove("active"),n.classList.remove("active"),c.removeEventListener("click",u),n.removeEventListener("click",r),n.addEventListener("click",f),document.removeEventListener("click",L)}function u(e){if(e.target.nodeName==="BUTTON"){const s=e.target;n.textContent=s.textContent;const i=c.querySelector(".hidden");i&&i.classList.remove("hidden"),s.parentNode.classList.add("hidden"),a=1,l=s.dataset.filter,m(d,l),r()}}function m(e,s="all"){let i=0;s==="all"?i=e:i=e.filter(o=>o.type.toLowerCase()===s.toLowerCase());const w=i.slice((a-1)*6,a*6).reduce((o,t)=>o+`
      <li class="news__card">
        <div class="news__card-img-wrapper">
          <img
            class="news__card-img"
            src="${t.img}"
            alt="${t.title} image"
          />
        </div>
        <div class="news__card-box">
          <a class="news__card-title card-title" href="./post.html?post=${t.id}">${t.title}</a>
          <ul class="news__date-list list">
            <li>${t.type}</li>
            <li>${t.date}</li>
            <li class="news__comments">
              <svg class="news__comment-icon">
                <use href="${p}#icon-comments"></use>
              </svg>
              <p>
                ${t.comments.length?t.comments.length+(t.comments.length>1?" comments":" comment"):"No comments"}
              </p>
            </li>
          </ul>
          <p class="news__card-text">
          ${t.previewText}</p>
        </div>
      </li>`,"");g.innerHTML=w}
//# sourceMappingURL=commonHelpers4.js.map
