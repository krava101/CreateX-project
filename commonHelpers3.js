import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import{p as i}from"./assets/data-projects-98539dd2.js";import{a as l}from"./assets/similar-projects-ebbc83be.js";import{l as u}from"./assets/comments-a49f048a.js";const m=document.querySelector(".application-form"),p=document.querySelector(".question-form"),d=document.querySelector(".hero-steps-list"),g=document.querySelector(".hero-left-btn"),h=document.querySelector(".hero-right-btn"),a=document.querySelector(".hero-pag-list"),v=document.querySelector("#p-list");let r=0;const t={userName:"",phone:"",email:"",message:"",receive:""},s={userName:"",phone:"",message:""};function f(){const e=i.reduce((c,o)=>c+`
    <li class="project-card">
      <img
        class="project-img"
        src="${o.previewImg}"
        alt=""
      />
      <div class="project-card-box">
        <h5 class="card-title">${o.name}</h5>
        <p class="project-card-text">${o.type}</p>
        <a class="project-card-link" href="project.html?project=project${o.id}">view project</a>
      </div>
    </li>`,"");v.innerHTML=e,l()}f();u(0);m.addEventListener("submit",e=>{e.preventDefault(),t.userName=e.currentTarget.user_name.value,t.phone=e.currentTarget.user_tel.value,t.email=e.currentTarget.user_email.value,t.message=e.currentTarget.user_message.value,t.receive=e.currentTarget.user_receive.checked,console.log(t),e.currentTarget.reset()});p.addEventListener("submit",e=>{e.preventDefault(),s.userName=e.currentTarget.user_name.value,s.phone=e.currentTarget.user_tel.value,s.message=e.currentTarget.user_message.value,console.log(s),e.currentTarget.reset()});g.addEventListener("click",e=>{r<=0?r=0:r--,n(r)});h.addEventListener("click",e=>{r===3||r++,n(r)});function n(e){Array.from(a.children).map(c=>c.classList.remove("active-hero-pag")),d.style.transform=`translateX(${-e*1230}px)`,a.children[e].classList.add("active-hero-pag")}
//# sourceMappingURL=commonHelpers3.js.map
