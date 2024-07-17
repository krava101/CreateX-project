import"./assets/header-1301d940.js";import{n as v}from"./assets/data-news-fe2df6bb.js";import{p as g}from"./assets/data-projects-98539dd2.js";const h=[{id:0,avatar:new URL("/CreateX-project/assets/project-1-68d98b07.jpg",self.location).href,comment:"Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ",nickname:"Shawn Edwards",position:"HR Manager",companyName:"WiPo"},{id:1,avatar:new URL("/CreateX-project/assets/project-6-5d8ae179.jpg",self.location).href,comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ratione delectus adipisci tenetur a exercitationem cumque vitae molestiae ad, odio sit, dignissimos ipsa iusto debitis cupiditate necessitatibus! Aliquam, voluptates iure?",nickname:"Lo Wung",position:"General Director",companyName:"MSU Group"},{id:2,avatar:new URL("/CreateX-project/assets/project-2-999359c8.jpg",self.location).href,comment:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, dolorum, minima earum saepe animi eaque numquam sequi nisi repudiandae ea magnam facilis fuga voluptas doloremque possimus? Nobis repellendus commodi illo.",nickname:"Denn Miller",position:"Owner",companyName:""},{id:3,avatar:new URL("/CreateX-project/assets/project-8-130fc28a.jpg",self.location).href,comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dolor, ex mollitia impedit labore sit nam totam officiis odio assumenda, recusandae, deserunt iste cumque! Rem veritatis modi cum dolorem deserunt!",nickname:"Anrew Karlson",position:"Owner",companyName:""}],f=document.querySelector("#comments"),w=document.querySelector("#rev-left-btn"),L=document.querySelector("#rev-right-btn");let c=0;function m(t){const e=h[t],l=`
        <div class="review-owner">
          <img
            src="${e.avatar}"
            alt="Client's avatar"
            class="reviews-avatar"
          />
          <span>
            <p class="reviews-nickname">${e.nickname}</p>
            <p class="reviews-position">${e.position+(e.companyName!==""?", "+e.companyName:"")}</p>
          </span>
        </div>
        <p class="reviews-text">
          ${e.comment}
        </p>
    `;f.innerHTML=l}m(c);L.addEventListener("click",t=>{c===h.length-1?c=0:c++,m(c)});w.addEventListener("click",t=>{c>=1&&c--,m(c)});const j=document.getElementById("newsList"),y=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href,$=v.slice(0,3).reduce((t,e,l)=>t+`
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
              <use href="${y}#icon-comments"></use>
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
    `,"");j.innerHTML=$;const r=document.querySelector(".hero-steps-list"),q=document.querySelector(".hero-left-btn"),S=document.querySelector(".hero-right-btn"),u=document.querySelector(".hero-pag-list");let i=0,o;function d(t){const e=r.firstElementChild.getBoundingClientRect();u.querySelector(".active-hero-pag").classList.remove("active-hero-pag"),r.style.transform=`translateX(${-t*e.width}px)`,u.children[t].classList.add("active-hero-pag")}q.addEventListener("click",()=>{i<=0?i=3:i--,d(i)});S.addEventListener("click",()=>{i===3?i=0:i++,d(i)});r.addEventListener("touchstart",t=>{o=t.touches[0].clientX});r.addEventListener("touchend",t=>{const e=t.changedTouches[0].clientX;e>o?e-o>70&&(i<=0?i=3:i--):e<o&&o-e>70&&(i===3?i=0:i++),d(i)});const s=document.querySelector("#p-list"),b=document.querySelector("#p-left-btn"),k=document.querySelector("#p-right-btn");let n=0,a;const E=g.reduce((t,e)=>t+`<li class="project-card">
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
    </li>`,"");s.innerHTML=E;b.addEventListener("click",()=>{n<=0?n=s.children.length-2:n--,p(n)});k.addEventListener("click",()=>{n===s.children.length-2?n=0:n++,p(n)});function p(t){if(s.children.length>1){const e=s.children[0].getBoundingClientRect().width+30;s.style.transform=`translateX(${-t*e}px)`}}s.addEventListener("touchstart",t=>{a=t.touches[0].clientX});s.addEventListener("touchend",t=>{const e=t.changedTouches[0].clientX;e>a?e-a>70&&(n<=0?n=s.children.length-2:n--):e<a&&a-e>70&&(n===s.children.length-1?n=0:n++),p(n)});
//# sourceMappingURL=commonHelpers3.js.map
