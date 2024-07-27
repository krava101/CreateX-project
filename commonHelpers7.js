import"./assets/header-4ffb22f8.js";/* empty css                     */import{p as o}from"./assets/data-projects-98539dd2.js";import{l as n}from"./assets/projects-slider-efec6661.js";const m=document.querySelector(".hero"),g=window.location.href,u=new URL(g),d=+u.searchParams.get("project"),r=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href,l=o[d],p=`
  <div class="container">
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
        <use href=${r+"#icon-left-arrow"}></use>
      </svg>
    </button>
    <button class="slider-right-btn" type="button">
      <svg class="slider-right-icon">
        <use href=${r+"#icon-right-arrow"}></use>
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
  </div>`;m.innerHTML=p;n(l);const y=document.querySelector(".slider-left-btn"),h=document.querySelector(".slider-right-btn"),t=document.querySelector(".project-img-list"),c=document.querySelector(".project-small-img-list"),a=document.querySelector(".project-small-img-list");let e=0;y.addEventListener("click",()=>{e<=0?e=t.children.length-1:e--,s(e)});h.addEventListener("click",()=>{e===t.children.length-1?e=0:e++,s(e)});a.addEventListener("click",i=>{i.target!==i.currentTarget&&(e=Array.from(a.children).indexOf(i.target),s(e))});function s(i){c.querySelector(".active").classList.remove("active"),t.style.transform=`translateX(-${e*1230}px)`,c.children[i].classList.add("active")}
//# sourceMappingURL=commonHelpers7.js.map
