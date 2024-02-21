import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import{p as m}from"./assets/data-projects-98539dd2.js";const p=document.querySelector(".hero"),c=document.querySelector(".project-list"),d=document.querySelector(".projects-title-container"),j=document.querySelector(".projects-info"),a=window.location.href,y=a[a.length-1],o=new URL("/CreateX-project/assets/icons-79f9ae6a.svg",self.location).href;function h(t){const l=m[t],i=`<div class="container">
          <p class="page-path">
            <span class="page-path-dark">Homepage / Work</span> / ${l.name}
          </p>
          <h1 class="page-title">${l.name}</h1>
          <div class="project-img-list-wrapper">
            <ul class="project-img-list list">
              <li
                style="background-image: url(${l.images[0]})"
              ></li>
              <li
                style="background-image: url(${l.images[1]})"
              ></li>
              <li
                style="background-image: url(${l.images[2]})"
              ></li>
              <li
                style="background-image: url(${l.images[3]})"
              ></li>
              <li
                style="background-image: url(${l.images[4]})"
              ></li>
              <li
                style="background-image: url(${l.images[5]})"
              ></li>
            </ul>
            <button class="slider-left-btn" type="button">
              <svg class="slider-left-icon">
                <use href=${o+"#icon-left-arrow"}></use>
              </svg>
            </button>
            <button class="slider-right-btn" type="button">
              <svg class="slider-right-icon">
                <use href=${o+"#icon-right-arrow"}></use>
              </svg>
            </button>
          </div>
          <ul class="project-small-img-list list">
            <li class="project-small-img-item active" style="background-image: url(${l.images[0]})"></li>
            <li class="project-small-img-item" style="background-image: url(${l.images[1]})"></li>
            <li class="project-small-img-item" style="background-image: url(${l.images[2]})"></li>
            <li class="project-small-img-item" style="background-image: url(${l.images[3]})"></li>
            <li class="project-small-img-item" style="background-image: url(${l.images[4]})"></li>
            <li class="project-small-img-item" style="background-image: url(${l.images[5]})"></li>
          </ul>
          <div class="project-info-box">
            <div class="project-goal">
              <h2 class="section-title">Project goal</h2>
              <p class="project-goal-text">
                ${l.description}
              </p>
            </div>
            <ul class="project-info-list list">
              <li>Location</li>
              <li>${l.location}</li>
              <li>CLIENT</li>
              <li>${l.client}</li>
              <li>ARCHITECT</li>
              <li>${l.architect}</li>
              <li>SIZE</li>
              <li>${l.size}</li>
              <li>VALUE</li>
              <li>${l.value}</li>
              <li>COMPLETED</li>
              <li>${l.completed}</li>
            </ul>
          </div>`;p.innerHTML=i,$(l)}h(y);function $(t){const l=m.filter(i=>i.type===t.type&&i!=t);if(l.length){const i=l.reduce((u,s)=>u+`
    <li class="project-card">
      <img
        class="project-img"
        src="${s.previewImg}"
        alt=""
      />
      <div class="project-card-box">
        <h5 class="card-title">${s.name}</h5>
        <p class="project-card-text">${s.type}</p>
        <a class="project-card-link" href="project.html?project=project${s.id}">view project</a>
      </div>
    </li>`,"");c.innerHTML=i}else c.innerHTML="<li></li>",d.textContent="",j.style.margin="0"}const f=document.querySelector(".slider-left-btn"),b=document.querySelector(".slider-right-btn"),r=document.querySelector(".project-img-list"),n=document.querySelector(".project-small-img-list");let e=0;f.addEventListener("click",()=>{e<=0?e=r.children.length-1:e--,g(e)});b.addEventListener("click",()=>{e===r.children.length-1?e=0:e++,g(e)});function g(t){Array.from(n.children).map(l=>l.classList.remove("active")),r.style.transform=`translateX(-${e*1230}px)`,n.children[t].classList.add("active")}
//# sourceMappingURL=commonHelpers6.js.map
