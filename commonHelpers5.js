import"./assets/header-40f70231.js";/* empty css                     */const n=document.querySelector("#sub-btn"),l=document.querySelector("#cv-btn"),s=document.querySelector(".sub-modal"),a=document.querySelector(".cv-modal"),u=document.querySelector(".location-select-label"),i=s.querySelector("form"),m=a.querySelector("form"),c={name:"",email:""},t={name:"",location:"",phone:"",email:"",message:"",cv:""};n.addEventListener("click",()=>{s.classList.add("active"),s.querySelector(".modal-close-btn").addEventListener("click",()=>{s.classList.remove("active")})});l.addEventListener("click",()=>{a.classList.add("active"),a.querySelector(".modal-close-btn").addEventListener("click",()=>{a.classList.remove("active")})});u.addEventListener("click",e=>{const r=e.currentTarget.querySelector("ul"),o=e.currentTarget.querySelector("input");r.classList.add("active"),r.style.transform="translateY(0%)",e.target.nodeName==="LI"&&(o.value=e.target.textContent,r.style.transform="translateY(-150%)",setTimeout(()=>{r.classList.remove("active")},800))});i.addEventListener("submit",e=>{e.preventDefault(),c.name=e.currentTarget.elements.username.value,c.email=e.currentTarget.elements.userEmail.value,console.log(c),e.currentTarget.reset()});m.addEventListener("submit",e=>{e.preventDefault(),console.log(e.currentTarget.elements.userLocation.value),t.name=e.currentTarget.elements.username.value,t.location=e.currentTarget.elements.userLocation.value,t.email=e.currentTarget.elements.userEmail.value,t.phone=e.currentTarget.elements.userPhone.value,t.message=e.currentTarget.elements.userLetter.value,t.cv=e.currentTarget.elements.userCV.value,console.log(t)});
//# sourceMappingURL=commonHelpers5.js.map
