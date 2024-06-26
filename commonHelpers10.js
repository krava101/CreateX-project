import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import{p as n}from"./assets/data-projects-98539dd2.js";import"./assets/main-form-80133312.js";const d=[{id:0,avatar:new URL("/CreateX-project/assets/project-1-68d98b07.jpg",self.location).href,comment:"Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ",nickname:"Shawn Edwards",position:"HR Manager",companyName:"WiPo"},{id:1,avatar:new URL("/CreateX-project/assets/project-6-5d8ae179.jpg",self.location).href,comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ratione delectus adipisci tenetur a exercitationem cumque vitae molestiae ad, odio sit, dignissimos ipsa iusto debitis cupiditate necessitatibus! Aliquam, voluptates iure?",nickname:"Lo Wung",position:"General Director",companyName:"MSU Group"},{id:2,avatar:new URL("/CreateX-project/assets/project-2-999359c8.jpg",self.location).href,comment:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, dolorum, minima earum saepe animi eaque numquam sequi nisi repudiandae ea magnam facilis fuga voluptas doloremque possimus? Nobis repellendus commodi illo.",nickname:"Denn Miller",position:"Owner",companyName:""},{id:3,avatar:new URL("/CreateX-project/assets/project-8-130fc28a.jpg",self.location).href,comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dolor, ex mollitia impedit labore sit nam totam officiis odio assumenda, recusandae, deserunt iste cumque! Rem veritatis modi cum dolorem deserunt!",nickname:"Anrew Karlson",position:"Owner",companyName:""}],u=document.querySelector("#comments"),v=document.querySelector("#rev-left-btn"),g=document.querySelector("#rev-right-btn");let i=0;function m(t){const e=d[t],o=`
        <h2 class="section-title">What our clients are saying</h2>
        <img
          src="${e.avatar}"
          alt="Client's avatar"
          class="reviews-avatar"
        />
        <p class="reviews-text">
          ${e.comment}
        </p>
        <p class="reviews-nickname">${e.nickname}</p>
        <p class="reviews-position">${e.position+(e.companyName!==""?", "+e.companyName:"")}</p>
    `;u.innerHTML=o}g.addEventListener("click",t=>{i===d.length-1?i=0:i++,m(i)});v.addEventListener("click",t=>{i>=1&&i--,m(i)});const y=document.querySelector(".projects-list"),f=document.querySelector(".media-list"),j=document.querySelectorAll(".media-btn"),s=document.querySelector(".projects-load-more");let r=1;const l=(t="all",e=1)=>{s.style.display="flex",e*9>=n.length&&(s.style.display="none");let o=n.slice(0,e*9);t!=="all"&&(o=n.filter(c=>c.status===t),s.style.display="none");const p=o.reduce((c,a)=>c+`<li class="projects-card">
              <img
                class="projects-img"
                src="${a.previewImg}"
                alt="${a.name}"
              />
              <div class="projects-card-box">
                <h5 class="card-title">${a.name}</h5>
                <p class="projects-card-text">${a.type}</p>
                <a class="projects-card-link" href="./project.html?project=${a.id}"
                  >view project</a
                >
              </div>
            </li>`,"");y.innerHTML=p};l();m(0);f.addEventListener("click",t=>{j.forEach(e=>e.classList.remove("active")),t.target.classList.add("active"),l(t.target.dataset.media)});s.addEventListener("click",t=>{r+=1,l("all",r),r*9>=n.length&&(s.style.display="none")});
//# sourceMappingURL=commonHelpers10.js.map
