import"./assets/header-4ffb22f8.js";/* empty css                     */import{p as o}from"./assets/data-projects-98539dd2.js";import{l as n}from"./assets/projects-slider-efec6661.js";const a=window.location.href,s=new URL(a),m=+s.searchParams.get("project"),e=o[m],g=document.getElementById("project-title"),d=document.getElementById("project-path"),u=document.getElementById("project-gallery"),p=document.getElementById("project-small-gallery"),y=document.getElementById("project-info"),j=document.getElementById("project-description");g.textContent=e.name;d.textContent=e.name;u.innerHTML=`
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
  ></li>`;p.innerHTML=`
  <li class="project-small-img-item active" style="background-image: url(${e.images[0]})"></li>
  <li class="project-small-img-item" style="background-image: url(${e.images[1]})"></li>
  <li class="project-small-img-item" style="background-image: url(${e.images[2]})"></li>
  <li class="project-small-img-item" style="background-image: url(${e.images[3]})"></li>
  <li class="project-small-img-item" style="background-image: url(${e.images[4]})"></li>
  <li class="project-small-img-item" style="background-image: url(${e.images[5]})"></li>`;y.innerHTML=`
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
  <li>${e.completed}</li>`;j.textContent=e.description;n(e);const r=document.getElementById("project-gallery"),i=document.getElementById("project-small-gallery");document.getElementById("project-info");const $=document.querySelector(".slider-left-btn"),E=document.querySelector(".slider-right-btn");let t=0;$.addEventListener("click",()=>{t<=0?t=r.children.length-1:t--,c(t)});E.addEventListener("click",()=>{t===r.children.length-1?t=0:t++,c(t)});i.addEventListener("click",l=>{l.target!==l.currentTarget&&(t=Array.from(i.children).indexOf(l.target),c(t))});function c(l){i.querySelector(".active").classList.remove("active"),r.style.transform=`translateX(-${t*1230}px)`,i.children[l].classList.add("active")}
//# sourceMappingURL=commonHelpers7.js.map
