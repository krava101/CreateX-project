import"./assets/header-4ffb22f8.js";/* empty css                     */import{p as g}from"./assets/data-projects-2fb17aac.js";import{l as j}from"./assets/projects-slider-4f04f248.js";const d=window.location.href,u=new URL(d),y=+u.searchParams.get("project"),t=g[y],p=document.getElementById("project-title"),h=document.getElementById("project-path"),_=document.getElementById("project-gallery"),b=document.getElementById("project-small-gallery"),$=document.getElementById("project-info"),E=document.getElementById("project-description");p.textContent=t.name;p.classList.remove("project__title_loader");h.textContent=`/ ${t.name}`;_.innerHTML=`
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
  </li>`;b.innerHTML=`
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
    </button></li>`;$.innerHTML=`
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
  <li>${t.completed}</li>`;E.textContent=t.description;j(t);function f(l,c,o){let i;l.addEventListener("touchstart",m=>{i=m.touches[0].clientX}),l.addEventListener("touchend",m=>{const n=m.changedTouches[0].clientX;n>i?n-i>70&&(o<=0?o=l.children.length-1:o--):n<i&&i-n>70&&(o===l.children.length-1?o=0:o++),c(o)})}const r=document.getElementById("project-gallery"),a=document.getElementById("project-small-gallery");document.getElementById("project-info");const P=document.querySelector(".project__gallery-btn_left"),L=document.querySelector(".project__gallery-btn_right");let e=0;P.addEventListener("click",()=>{e<=0?e=r.children.length-1:e--,s(e)});L.addEventListener("click",()=>{e===r.children.length-1?e=0:e++,s(e)});a.addEventListener("click",l=>{const c=l.target;c.nodeName==="BUTTON"&&(e=Array.from(a.children).indexOf(c.parentNode),s(e))});f(r,s,e);function s(l){a.querySelector(".active").classList.remove("active");const c=r.children[0].getBoundingClientRect().width;r.style.transform=`translateX(-${l*c}px)`,a.children[l].classList.add("active")}
//# sourceMappingURL=commonHelpers7.js.map
