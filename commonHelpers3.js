import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import{p as i}from"./assets/data-projects-98539dd2.js";import{a as n}from"./assets/similar-projects-ebbc83be.js";import{l}from"./assets/comments-a49f048a.js";import"./assets/main-form-80133312.js";const m=document.querySelector(".question-form"),u=document.querySelector(".hero-steps-list"),p=document.querySelector(".hero-left-btn"),d=document.querySelector(".hero-right-btn"),s=document.querySelector(".hero-pag-list"),h=document.querySelector("#p-list");let r=0;const o={userName:"",phone:"",message:""};function g(){const e=i.reduce((c,t)=>c+`
    <li class="project-card">
      <img
        class="project-img"
        src="${t.previewImg}"
        alt=""
      />
      <div class="project-card-box">
        <h5 class="card-title">${t.name}</h5>
        <p class="project-card-text">${t.type}</p>
        <a class="project-card-link" href="project.html?project=project${t.id}">view project</a>
      </div>
    </li>`,"");h.innerHTML=e,n()}g();l(0);m.addEventListener("submit",e=>{e.preventDefault(),o.userName=e.currentTarget.user_name.value,o.phone=e.currentTarget.user_tel.value,o.message=e.currentTarget.user_message.value,console.log(o),e.currentTarget.reset()});p.addEventListener("click",e=>{r<=0?r=0:r--,a(r)});d.addEventListener("click",e=>{r===3||r++,a(r)});function a(e){Array.from(s.children).map(c=>c.classList.remove("active-hero-pag")),u.style.transform=`translateX(${-e*1230}px)`,s.children[e].classList.add("active-hero-pag")}
//# sourceMappingURL=commonHelpers3.js.map
