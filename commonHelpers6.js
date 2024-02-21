import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import{p as m}from"./assets/data-projects-98539dd2.js";import{a as p}from"./assets/similar-projects-ebbc83be.js";const d=document.querySelector(".hero"),c=document.querySelector(".project-list"),j=document.querySelector(".projects-title-container"),y=document.querySelector(".projects-info"),a=window.location.href,h=a[a.length-1],o=new URL("/CreateX-project/assets/icons-79f9ae6a.svg",self.location).href;function $(i){const l=m[i],t=`<div class="container">
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
          </div>`;d.innerHTML=t,f(l)}$(h);function f(i){const l=m.filter(t=>t.type===i.type&&t!=i);if(l.length){const t=l.reduce((u,s)=>u+`
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
    </li>`,"");c.innerHTML=t}else c.innerHTML="<li></li>",j.textContent="",y.style.margin="0";p()}const b=document.querySelector(".slider-left-btn"),v=document.querySelector(".slider-right-btn"),r=document.querySelector(".project-img-list"),n=document.querySelector(".project-small-img-list");let e=0;b.addEventListener("click",()=>{e<=0?e=r.children.length-1:e--,g(e)});v.addEventListener("click",()=>{e===r.children.length-1?e=0:e++,g(e)});function g(i){Array.from(n.children).map(l=>l.classList.remove("active")),r.style.transform=`translateX(-${e*1230}px)`,n.children[i].classList.add("active")}
//# sourceMappingURL=commonHelpers6.js.map
