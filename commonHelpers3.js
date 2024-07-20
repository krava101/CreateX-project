import"./assets/header-92b20be3.js";import"./assets/comments-accae290.js";import{n as m}from"./assets/data-news-fe2df6bb.js";import{p}from"./assets/data-projects-98539dd2.js";import"./assets/main-form-25ecbd05.js";const g=document.getElementById("newsList"),u=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href,f=m.slice(0,3).reduce((t,e,h)=>t+`
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
              <use href="${u}#icon-comments"></use>
            </svg>
            <p>
              ${e.comments.length?e.comments.length+(e.comments.length>1?" comments":" comment"):"No comments"}
            </p>
          </li>
        </ul>
        <p class="news-card-text ${h!==0?"hidden":""}">
        ${e.previewText}</p>
      </div>
    </li>
    `,"");g.innerHTML=f;const o=document.querySelector(".hero-steps-list"),v=document.querySelector(".hero-left-btn"),L=document.querySelector(".hero-right-btn"),d=document.querySelector(".hero-pag-list");let c=0,i;function l(t){const e=o.firstElementChild.getBoundingClientRect();d.querySelector(".active-hero-pag").classList.remove("active-hero-pag"),o.style.transform=`translateX(${-t*e.width}px)`,d.children[t].classList.add("active-hero-pag")}v.addEventListener("click",()=>{c<=0?c=3:c--,l(c)});L.addEventListener("click",()=>{c===3?c=0:c++,l(c)});o.addEventListener("touchstart",t=>{i=t.touches[0].clientX});o.addEventListener("touchend",t=>{const e=t.changedTouches[0].clientX;e>i?e-i>70&&(c<=0?c=3:c--):e<i&&i-e>70&&(c===3?c=0:c++),l(c)});const n=document.querySelector("#p-list"),w=document.querySelector("#p-left-btn"),$=document.querySelector("#p-right-btn");let s=0,r;const j=p.reduce((t,e)=>t+`<li class="project-card">
        <img
          class="project-img"
          src="${e.previewImg}"
          alt=""
        />
        <div class="project-card-box">
          <h5 class="card-title">${e.name}</h5>
          <p class="project-card-text">${e.type}</p>
          <a class="project-card-link" href="project.html?project=project${e.id}">view project</a>
        </div>
    </li>`,"");n.innerHTML=j;w.addEventListener("click",()=>{s<=0?s=n.children.length-2:s--,a(s)});$.addEventListener("click",()=>{s===n.children.length-2?s=0:s++,a(s)});function a(t){if(n.children.length>1){const e=n.children[0].getBoundingClientRect().width+30;n.style.transform=`translateX(${-t*e}px)`}}n.addEventListener("touchstart",t=>{r=t.touches[0].clientX});n.addEventListener("touchend",t=>{const e=t.changedTouches[0].clientX;e>r?e-r>70&&(s<=0?s=n.children.length-2:s--):e<r&&r-e>70&&(s===n.children.length-1?s=0:s++),a(s)});
//# sourceMappingURL=commonHelpers3.js.map
