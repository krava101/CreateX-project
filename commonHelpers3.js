import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */const i=document.querySelector(".application-form"),m=document.querySelector(".question-form"),c=document.querySelector(".works-list"),d=document.querySelector(".p-left-arrow-btn"),g=document.querySelector(".p-right-arrow-btn"),h=document.querySelector(".hero-steps-list"),p=document.querySelector(".hero-left-btn"),f=document.querySelector(".hero-right-btn"),a=document.querySelector(".hero-pag-list");let t=0,r=0;const s={userName:"",phone:"",email:"",message:"",receive:""},n={userName:"",phone:"",message:""};i.addEventListener("submit",e=>{e.preventDefault(),s.userName=e.currentTarget.user_name.value,s.phone=e.currentTarget.user_tel.value,s.email=e.currentTarget.user_email.value,s.message=e.currentTarget.user_message.value,s.receive=e.currentTarget.user_receive.checked,console.log(s),e.currentTarget.reset()});m.addEventListener("submit",e=>{e.preventDefault(),n.userName=e.currentTarget.user_name.value,n.phone=e.currentTarget.user_tel.value,n.message=e.currentTarget.user_message.value,console.log(n),e.currentTarget.reset()});d.addEventListener("click",()=>{t<=0?t=0:t--,u(t)});g.addEventListener("click",()=>{t===c.children.length-2||t++,u(t)});function u(e){const o=c.children[0].getBoundingClientRect().width+30;c.style.transform=`translateX(${-e*o}px)`}p.addEventListener("click",e=>{r<=0?r=0:r--,l(r)});f.addEventListener("click",e=>{r===3||r++,l(r)});function l(e){Array.from(a.children).map(o=>o.classList.remove("active-hero-pag")),h.style.transform=`translateX(${-e*1230}px)`,a.children[e].classList.add("active-hero-pag")}
//# sourceMappingURL=commonHelpers3.js.map