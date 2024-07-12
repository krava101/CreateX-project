import"./assets/header-1301d940.js";import{p as v}from"./assets/data-projects-98539dd2.js";const p=[{id:0,avatar:new URL("/CreateX-project/assets/project-1-68d98b07.jpg",self.location).href,comment:"Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ",nickname:"Shawn Edwards",position:"HR Manager",companyName:"WiPo"},{id:1,avatar:new URL("/CreateX-project/assets/project-6-5d8ae179.jpg",self.location).href,comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ratione delectus adipisci tenetur a exercitationem cumque vitae molestiae ad, odio sit, dignissimos ipsa iusto debitis cupiditate necessitatibus! Aliquam, voluptates iure?",nickname:"Lo Wung",position:"General Director",companyName:"MSU Group"},{id:2,avatar:new URL("/CreateX-project/assets/project-2-999359c8.jpg",self.location).href,comment:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, dolorum, minima earum saepe animi eaque numquam sequi nisi repudiandae ea magnam facilis fuga voluptas doloremque possimus? Nobis repellendus commodi illo.",nickname:"Denn Miller",position:"Owner",companyName:""},{id:3,avatar:new URL("/CreateX-project/assets/project-8-130fc28a.jpg",self.location).href,comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dolor, ex mollitia impedit labore sit nam totam officiis odio assumenda, recusandae, deserunt iste cumque! Rem veritatis modi cum dolorem deserunt!",nickname:"Anrew Karlson",position:"Owner",companyName:""}],g=document.querySelector("#comments"),f=document.querySelector("#rev-left-btn"),L=document.querySelector("#rev-right-btn");let c=0;function l(t){const e=p[t],h=`
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
    `;g.innerHTML=h}l(c);L.addEventListener("click",t=>{c===p.length-1?c=0:c++,l(c)});f.addEventListener("click",t=>{c>=1&&c--,l(c)});const s=document.querySelector(".hero-steps-list"),j=document.querySelector(".hero-left-btn"),q=document.querySelector(".hero-right-btn"),u=document.querySelector(".hero-pag-list");let i=0,r;function m(t){const e=s.firstElementChild.getBoundingClientRect();u.querySelector(".active-hero-pag").classList.remove("active-hero-pag"),s.style.transform=`translateX(${-t*e.width}px)`,u.children[t].classList.add("active-hero-pag")}j.addEventListener("click",()=>{i<=0?i=3:i--,m(i)});q.addEventListener("click",()=>{i===3?i=0:i++,m(i)});s.addEventListener("touchstart",t=>{r=t.touches[0].clientX});s.addEventListener("touchend",t=>{const e=t.changedTouches[0].clientX;e>r?e-r>70&&(i<=0?i=3:i--):e<r&&r-e>70&&(i===3?i=0:i++),m(i)});const o=document.querySelector("#p-list"),y=document.querySelector("#p-left-btn"),w=document.querySelector("#p-right-btn");let n=0,a;const S=v.reduce((t,e)=>t+`<li class="project-card">
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
    </li>`,"");o.innerHTML=S;y.addEventListener("click",()=>{n<=0?n=o.children.length-2:n--,d(n)});w.addEventListener("click",()=>{n===o.children.length-2?n=0:n++,d(n)});function d(t){if(o.children.length>1){const e=o.children[0].getBoundingClientRect().width+30;o.style.transform=`translateX(${-t*e}px)`}}o.addEventListener("touchstart",t=>{a=t.touches[0].clientX});o.addEventListener("touchend",t=>{const e=t.changedTouches[0].clientX;e>a?e-a>70&&(n<=0?n=o.children.length-2:n--):e<a&&a-e>70&&(n===o.children.length-1?n=0:n++),d(n)});
//# sourceMappingURL=commonHelpers3.js.map
