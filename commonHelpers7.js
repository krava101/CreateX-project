import"./assets/header-35869669.js";/* empty css                     */import{c as j}from"./assets/projects-0519d275.js";import{l as y,T as u}from"./assets/projects-slider-fa13c509.js";const h=window.location.href,E=new URL(h),f=E.searchParams.get("project");async function I(t){try{return await j(t)}catch(l){return console.error("Error fetching project data:",l),null}}async function L(){const t=await I(f);if(t){const l="https://res.cloudinary.com/dxseifgey/image/upload/v1723796772",i=document.getElementById("project-title"),a=document.getElementById("project-path"),s=document.getElementById("project-gallery"),d=document.getElementById("project-small-gallery"),m=document.getElementById("project-info"),p=document.getElementById("project-description");i.textContent=t.name,i.classList.remove("project__title_loader"),a.textContent=`/ ${t.name}`,s.innerHTML=t.images.map(n=>`
      <li>
        <img src="${l+n.src}" alt="Project photo">
      </li>
    `).join(""),d.innerHTML=t.images.map((n,g)=>`
      <li class="project__gallery-small-item ${g===0?"active":""}">
        <button class="project__gallery-small-btn" type="button">
          <img src="${l+n.src}" alt="Project small photo pagination">
        </button>
      </li>
    `).join(""),m.innerHTML=`
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
      <li>${t.completed}</li>
    `,p.textContent=t.description,y(t)}else console.error("Project data is not available.")}L();const o=document.getElementById("project-gallery"),r=document.getElementById("project-small-gallery"),_=document.querySelector(".project__gallery-btn_left"),v=document.querySelector(".project__gallery-btn_right");let e=0;const B=new u(o,c,6);_.addEventListener("click",()=>{e<=0?e=o.children.length-1:e--,c(e)});v.addEventListener("click",()=>{e===o.children.length-1?e=0:e++,c(e)});r.addEventListener("click",t=>{const l=t.target;l.nodeName==="BUTTON"&&(e=[...r.children].indexOf(l.parentNode),c(e))});function c(t){e=t,B.index=e,r.querySelector(".active").classList.remove("active");const l=o.children[0].getBoundingClientRect().width;o.style.transform=`translateX(-${t*l}px)`,r.children[t].classList.add("active")}
//# sourceMappingURL=commonHelpers7.js.map
