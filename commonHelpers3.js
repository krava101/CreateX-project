import"./assets/modulepreload-polyfill-ec808ebb.js";import{p as l}from"./assets/data-projects-98539dd2.js";import{a as u}from"./assets/similar-projects-ebbc83be.js";import{l as d}from"./assets/comments-a49f048a.js";import"./assets/controls-57926c4e.js";const m=document.querySelector(".question-form"),a=document.querySelector(".hero-steps-list"),p=document.querySelector(".hero-left-btn"),h=document.querySelector(".hero-right-btn"),n=document.querySelector(".hero-pag-list"),g=document.querySelector("#p-list");let e=0,o;const s={userName:"",phone:"",message:""};function f(){const t=l.reduce((r,c)=>r+`
    <li class="project-card">
      <img
        class="project-img"
        src="${c.previewImg}"
        alt=""
      />
      <div class="project-card-box">
        <h5 class="card-title">${c.name}</h5>
        <p class="project-card-text">${c.type}</p>
        <a class="project-card-link" href="project.html?project=project${c.id}">view project</a>
      </div>
    </li>`,"");g.innerHTML=t,u()}f();d(0);m.addEventListener("submit",t=>{t.preventDefault(),s.userName=t.currentTarget.user_name.value,s.phone=t.currentTarget.user_tel.value,s.message=t.currentTarget.user_message.value,console.log(s),t.currentTarget.reset()});function i(t){const r=a.firstElementChild.getBoundingClientRect();n.querySelector(".active-hero-pag").classList.remove("active-hero-pag"),a.style.transform=`translateX(${-t*r.width}px)`,n.children[t].classList.add("active-hero-pag")}p.addEventListener("click",()=>{e<=0?e=3:e--,i(e)});h.addEventListener("click",()=>{e===3?e=0:e++,i(e)});a.addEventListener("touchstart",t=>{o=t.touches[0].clientX});a.addEventListener("touchend",t=>{const r=t.changedTouches[0].clientX;r>o?r-o>70&&(e<=0?e=3:e--):r<o&&o-r>70&&(e===3?e=0:e++),i(e)});
//# sourceMappingURL=commonHelpers3.js.map
