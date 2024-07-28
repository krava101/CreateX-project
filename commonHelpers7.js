import"./assets/header-4ffb22f8.js";/* empty css                     */import{p as a}from"./assets/data-projects-2fb17aac.js";import{l as s}from"./assets/projects-slider-1d3c6a1b.js";const m=window.location.href,p=new URL(m),g=+p.searchParams.get("project"),t=a[g],n=document.getElementById("project-title"),j=document.getElementById("project-path"),d=document.getElementById("project-gallery"),y=document.getElementById("project-small-gallery"),u=document.getElementById("project-info"),_=document.getElementById("project-description");n.textContent=t.name;n.classList.remove("project__title_loader");j.textContent=`/ ${t.name}`;d.innerHTML=`
  <li>
    <img src="${t.images[0]}" alt="Project photo">
  </li>
  <li>
    <img src="${t.images[1]}" alt="Project photo">
  </li>
  <li>
    <img src="${t.images[2]}" alt="Project photo">
  </li>
  <li>
    <img src="${t.images[3]}" alt="Project photo">
  </li>
  <li>
    <img src="${t.images[4]}" alt="Project photo">
  </li>
  <li>
    <img src="${t.images[5]}" alt="Project photo">
  </li>`;y.innerHTML=`
  <li class="project__gallery-small-item active">
    <button class="project__gallery-small-btn" type="button">
      <img src="${t.images[0]}" alt="Project small photo pagination">
    </button>
  </li>
  <li class="project__gallery-small-item">
    <button class="project__gallery-small-btn" type="button">
      <img src="${t.images[1]}" alt="Project small photo pagination">
    </button></li>
  <li class="project__gallery-small-item">
    <button class="project__gallery-small-btn" type="button">
      <img src="${t.images[2]}" alt="Project small photo pagination">
    </button></li>
  <li class="project__gallery-small-item"> 
    <button class="project__gallery-small-btn" type="button">
      <img src="${t.images[3]}" alt="Project small photo pagination">
    </button></li>
  <li class="project__gallery-small-item">
    <button class="project__gallery-small-btn" type="button">
      <img src="${t.images[4]}" alt="Project small photo pagination">
    </button></li>
  <li class="project__gallery-small-item">
    <button class="project__gallery-small-btn" type="button">
      <img src="${t.images[5]}" alt="Project small photo pagination">
    </button></li>`;u.innerHTML=`
  <li>Location</li>
  <li>${t.location}</li>
  <li>CLIENT</li>
  <li>${t.client}</li>
  <li>ARCHITECT</li>
  <li>${t.architect}</li>
  <li>SIZE</li>
  <li>${t.size}</li>
  <li>VALUE</li>
  <li>${t.value}</li>
  <li>COMPLETED</li>
  <li>${t.completed}</li>`;_.textContent=t.description;s(t);const o=document.getElementById("project-gallery"),i=document.getElementById("project-small-gallery");document.getElementById("project-info");const h=document.querySelector(".project__gallery-btn_left"),b=document.querySelector(".project__gallery-btn_right");let e=0;h.addEventListener("click",()=>{e<=0?e=o.children.length-1:e--,r(e)});b.addEventListener("click",()=>{e===o.children.length-1?e=0:e++,r(e)});i.addEventListener("click",c=>{const l=c.target;l.nodeName==="BUTTON"&&(e=Array.from(i.children).indexOf(l.parentNode),r(e))});function r(c){i.querySelector(".active").classList.remove("active");const l=o.children[0].getBoundingClientRect().width;o.style.transform=`translateX(-${e*l}px)`,i.children[c].classList.add("active")}
//# sourceMappingURL=commonHelpers7.js.map
