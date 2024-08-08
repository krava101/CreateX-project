import"./assets/header-4ffb22f8.js";/* empty css                     */import{p as n}from"./assets/data-projects-2fb17aac.js";import{l as s}from"./assets/projects-slider-612221fd.js";import{t as m}from"./assets/touch-slider-a3d169cb.js";const p=window.location.href,g=new URL(p),j=+g.searchParams.get("project"),t=n[j],a=document.getElementById("project-title"),d=document.getElementById("project-path"),y=document.getElementById("project-gallery"),u=document.getElementById("project-small-gallery"),_=document.getElementById("project-info"),h=document.getElementById("project-description");a.textContent=t.name;a.classList.remove("project__title_loader");d.textContent=`/ ${t.name}`;y.innerHTML=`
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
  </li>`;u.innerHTML=`
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
    </button></li>`;_.innerHTML=`
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
  <li>${t.completed}</li>`;h.textContent=t.description;s(t);const l=document.getElementById("project-gallery"),c=document.getElementById("project-small-gallery"),b=document.querySelector(".project__gallery-btn_left"),$=document.querySelector(".project__gallery-btn_right");let e=0;b.addEventListener("click",()=>{e<=0?e=l.children.length-1:e--,r(e)});$.addEventListener("click",()=>{e===l.children.length-1?e=0:e++,r(e)});c.addEventListener("click",o=>{const i=o.target;i.nodeName==="BUTTON"&&(e=[...c.children].indexOf(i.parentNode),r(e))});m(l,r,e);function r(o){c.querySelector(".active").classList.remove("active");const i=l.children[0].getBoundingClientRect().width;l.style.transform=`translateX(-${o*i}px)`,c.children[o].classList.add("active")}
//# sourceMappingURL=commonHelpers7.js.map
