import"./assets/header-92b20be3.js";/* empty css                     */import{p as g}from"./assets/data-projects-98539dd2.js";import"./assets/main-form-80133312.js";const p=document.querySelector(".hero"),a=document.querySelector(".project-list"),d=document.querySelector(".projects-title-container"),j=document.querySelector(".projects-info"),y=window.location.href,h=new URL(y),f=+h.searchParams.get("project"),o=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href;function $(t){const e=g[t],i=`<div class="container">
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
          </div>`;p.innerHTML=i,b(e)}$(f);function b(t){const e=g.filter(i=>i.type===t.type&&i!=t);if(e.length){const i=e.reduce((u,s)=>u+`
    <li class="project-card">
      <img
        class="project-img"
        src="${s.previewImg}"
        alt=""
      />
      <div class="project-card-box">
        <h5 class="card-title">${s.name}</h5>
        <p class="project-card-text">${s.type}</p>
        <a class="project-card-link" href="project.html?project=${s.id}">view project</a>
      </div>
    </li>`,"");a.innerHTML=i}else a.innerHTML="<li></li>",d.textContent="",j.style.margin="0";activeSimilarProj()}const v=document.querySelector(".slider-left-btn"),k=document.querySelector(".slider-right-btn"),r=document.querySelector(".project-img-list"),n=document.querySelector(".project-small-img-list"),m=document.querySelector(".project-small-img-list");let l=0;v.addEventListener("click",()=>{l<=0?l=r.children.length-1:l--,c(l)});k.addEventListener("click",()=>{l===r.children.length-1?l=0:l++,c(l)});function c(t){Array.from(n.children).map(e=>e.classList.remove("active")),r.style.transform=`translateX(-${l*1230}px)`,n.children[t].classList.add("active")}m.addEventListener("click",t=>{t.target!==t.currentTarget&&(l=Array.from(m.children).indexOf(t.target),c(l))});
//# sourceMappingURL=commonHelpers7.js.map
