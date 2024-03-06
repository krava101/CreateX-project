import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import{p as g}from"./assets/data-projects-98539dd2.js";import{a as p}from"./assets/similar-projects-ebbc83be.js";import"./assets/main-form-80133312.js";const d=document.querySelector(".hero"),a=document.querySelector(".project-list"),j=document.querySelector(".projects-title-container"),y=document.querySelector(".projects-info"),h=window.location.href,f=new URL(h),$=+f.searchParams.get("project"),o=new URL("/CreateX-project/assets/icons-ecf43c34.svg",self.location).href;function b(t){const e=g[t],i=`<div class="container">
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
          </div>`;d.innerHTML=i,v(e)}b($);function v(t){const e=g.filter(i=>i.type===t.type&&i!=t);if(e.length){const i=e.reduce((u,r)=>u+`
    <li class="project-card">
      <img
        class="project-img"
        src="${r.previewImg}"
        alt=""
      />
      <div class="project-card-box">
        <h5 class="card-title">${r.name}</h5>
        <p class="project-card-text">${r.type}</p>
        <a class="project-card-link" href="project.html?project=${r.id}">view project</a>
      </div>
    </li>`,"");a.innerHTML=i}else a.innerHTML="<li></li>",j.textContent="",y.style.margin="0";p()}const k=document.querySelector(".slider-left-btn"),L=document.querySelector(".slider-right-btn"),s=document.querySelector(".project-img-list"),n=document.querySelector(".project-small-img-list"),m=document.querySelector(".project-small-img-list");let l=0;k.addEventListener("click",()=>{l<=0?l=s.children.length-1:l--,c(l)});L.addEventListener("click",()=>{l===s.children.length-1?l=0:l++,c(l)});function c(t){Array.from(n.children).map(e=>e.classList.remove("active")),s.style.transform=`translateX(-${l*1230}px)`,n.children[t].classList.add("active")}m.addEventListener("click",t=>{t.target!==t.currentTarget&&(l=Array.from(m.children).indexOf(t.target),c(l))});
//# sourceMappingURL=commonHelpers7.js.map
