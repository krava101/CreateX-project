import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import{p as u}from"./assets/data-projects-98539dd2.js";import{a as d}from"./assets/similar-projects-ebbc83be.js";const j=document.querySelector(".hero"),a=document.querySelector(".project-list"),y=document.querySelector(".projects-title-container"),h=document.querySelector(".projects-info"),o=window.location.href,f=o[o.length-1],n=new URL("/CreateX-project/assets/icons-79f9ae6a.svg",self.location).href;function $(t){const e=u[t],i=`<div class="container">
          <p class="page-path">
            <span class="page-path-dark">Homepage / Work</span> / ${e.name}
          </p>
          <h1 class="page-title">${e.name}</h1>
          <div class="project-img-list-wrapper">
            <ul class="project-img-list list">
              <li
                style="background-image: url(${e.images[0]})"
              ></li>
              <li
                style="background-image: url(${e.images[1]})"
              ></li>
              <li
                style="background-image: url(${e.images[2]})"
              ></li>
              <li
                style="background-image: url(${e.images[3]})"
              ></li>
              <li
                style="background-image: url(${e.images[4]})"
              ></li>
              <li
                style="background-image: url(${e.images[5]})"
              ></li>
            </ul>
            <button class="slider-left-btn" type="button">
              <svg class="slider-left-icon">
                <use href=${n+"#icon-left-arrow"}></use>
              </svg>
            </button>
            <button class="slider-right-btn" type="button">
              <svg class="slider-right-icon">
                <use href=${n+"#icon-right-arrow"}></use>
              </svg>
            </button>
          </div>
          <ul class="project-small-img-list list">
            <li class="project-small-img-item active" style="background-image: url(${e.images[0]})"></li>
            <li class="project-small-img-item" style="background-image: url(${e.images[1]})"></li>
            <li class="project-small-img-item" style="background-image: url(${e.images[2]})"></li>
            <li class="project-small-img-item" style="background-image: url(${e.images[3]})"></li>
            <li class="project-small-img-item" style="background-image: url(${e.images[4]})"></li>
            <li class="project-small-img-item" style="background-image: url(${e.images[5]})"></li>
          </ul>
          <div class="project-info-box">
            <div class="project-goal">
              <h2 class="section-title">Project goal</h2>
              <p class="project-goal-text">
                ${e.description}
              </p>
            </div>
            <ul class="project-info-list list">
              <li>Location</li>
              <li>${e.location}</li>
              <li>CLIENT</li>
              <li>${e.client}</li>
              <li>ARCHITECT</li>
              <li>${e.architect}</li>
              <li>SIZE</li>
              <li>${e.size}</li>
              <li>VALUE</li>
              <li>${e.value}</li>
              <li>COMPLETED</li>
              <li>${e.completed}</li>
            </ul>
          </div>`;j.innerHTML=i,b(e)}$(f);function b(t){const e=u.filter(i=>i.type===t.type&&i!=t);if(e.length){const i=e.reduce((p,s)=>p+`
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
    </li>`,"");a.innerHTML=i}else a.innerHTML="<li></li>",y.textContent="",h.style.margin="0";d()}const v=document.querySelector(".slider-left-btn"),k=document.querySelector(".slider-right-btn"),r=document.querySelector(".project-img-list"),m=document.querySelector(".project-small-img-list"),g=document.querySelector(".project-small-img-list");let l=0;v.addEventListener("click",()=>{l<=0?l=r.children.length-1:l--,c(l)});k.addEventListener("click",()=>{l===r.children.length-1?l=0:l++,c(l)});function c(t){Array.from(m.children).map(e=>e.classList.remove("active")),r.style.transform=`translateX(-${l*1230}px)`,m.children[t].classList.add("active")}g.addEventListener("click",t=>{t.target!==t.currentTarget&&(l=Array.from(g.children).indexOf(t.target),c(l))});
//# sourceMappingURL=commonHelpers7.js.map
