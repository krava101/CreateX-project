import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import{p as m}from"./assets/data-projects-98539dd2.js";const p=document.querySelector(".hero"),c=document.querySelector(".project-list"),d=document.querySelector(".projects-title-container"),j=document.querySelector(".projects-info"),o=window.location.href,y=o[o.length-1],a=new URL("/CreateX-project/assets/icons-1e66910e.svg",self.location).href;function h(t){const e=m[t],i=`<div class="container">
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
                <use href=${a+"#icon-left-arrow"}></use>
              </svg>
            </button>
            <button class="slider-right-btn" type="button">
              <svg class="slider-right-icon">
                <use href=${a+"#icon-right-arrow"}></use>
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
          </div>`;p.innerHTML=i,$(e)}h(y);function $(t){const e=m.filter(i=>i.type===t.type&&i!=t);if(e.length){const i=e.reduce((u,s)=>u+`
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
    </li>`,"");c.innerHTML=i}else c.innerHTML="<li></li>",d.textContent="",j.style.margin="0"}const b=document.querySelector(".slider-left-btn"),f=document.querySelector(".slider-right-btn"),r=document.querySelector(".project-img-list"),n=document.querySelector(".project-small-img-list");let l=0;b.addEventListener("click",()=>{l<=0?l=r.children.length-1:l--,g(l)});f.addEventListener("click",()=>{l===r.children.length-1?l=0:l++,g(l)});function g(t){Array.from(n.children).map(e=>e.classList.remove("active")),r.style.transform=`translateX(-${l*1230}px)`,n.children[t].classList.add("active")}
//# sourceMappingURL=commonHelpers6.js.map
