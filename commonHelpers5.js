import"./assets/header-35869669.js";/* empty css                     */const d=document.getElementById("sub-btn"),r=document.getElementById("cv-btn"),E=document.getElementById("sub-modal"),k=document.getElementById("cv-modal");document.getElementById("location-label");const t=document.getElementById("locations-list"),o=document.getElementById("location-input");d.addEventListener("click",()=>v(E,d));r.addEventListener("click",()=>{v(k,r),o.addEventListener("click",u)});function v(e,i){e.classList.add("active");const n=e.querySelector(".modal-close-btn"),c=()=>m(e,c,s),s=L=>B(L,i,e,c,s);n.addEventListener("click",c),document.addEventListener("click",s)}function B(e,i,n,c,s){!n.contains(e.target)&&e.target!==i&&m(n,c,s)}function m(e,i,n){e.classList.remove("active"),e.querySelector(".modal-close-btn").removeEventListener("click",i),document.removeEventListener("click",n),o&&g()}function u(){t.classList.add("active"),t.addEventListener("click",a),o.addEventListener("click",l)}function g(){t.classList.remove("active"),t.removeEventListener("click",a),o.removeEventListener("click",u)}function l(){t.classList.remove("active"),t.removeEventListener("click",a),o.removeEventListener("click",l)}function a(e){e.target.nodeName==="LI"&&(o.value=e.target.textContent,t.classList.remove("active"),l())}
//# sourceMappingURL=commonHelpers5.js.map
