import"./assets/header-4ffb22f8.js";/* empty css                     */import{l as o}from"./assets/projects-slider-a7d0a2f1.js";import"./assets/data-projects-2fb17aac.js";import"./assets/touch-slider-a3d169cb.js";const i=[{id:0,type:"Construction",status:"construction",previewImg:new URL("/CreateX-project/assets/construction-73796e43.jpg",self.location).href,offers:["Construction business centers","Construction stores & malls"]},{id:1,type:"Project Development",status:"development",previewImg:new URL("/CreateX-project/assets/project-development-a7afb9e0.jpg",self.location).href,offers:["Project development of private houses","Project development of cottages"]},{id:2,type:"Interior Design",status:"design",previewImg:new URL("/CreateX-project/assets/interior-design-4386f777.jpg",self.location).href,offers:["Interior design of apartments","Interior design of private houses"]},{id:3,type:"Repairs",status:"repairs",previewImg:new URL("/CreateX-project/assets/repairs-a3af7a95.jpg",self.location).href,offers:["Repairs of apartments","Repairs of private houses"]}],n=document.querySelector(".offer__container"),a=window.location.href,c=new URL(a),l=c.searchParams.get("service"),s=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href,t=i[l],f=document.getElementById("service-title"),p=document.getElementById("service-path");f.textContent=t.type;p.textContent=t.type;const u=`
    <img
      class="offer__img"
      src="${t.previewImg}"
      alt="${t.type}"
    />
    <div class="offer__info">
      <h2 class="offer__title section-title">We offer</h2>
      <ul class="offer__list list">
        ${t.offers.reduce((e,r)=>e+`<li>
              <h4 class="offer__list-title">
                <svg class="offer__list-icon">
                  <use href=${s+"#icon-plus"}></use>
                </svg>
                ${r}
              </h4>
              <p class="offer__list-about">
                Adipiscing nunc arcu enim elit mattis eu placerat proin.
                Imperdiet elementum faucibus dignissim purus. Fusce parturient
                diam magna ullamcorper morbi semper massa ac facilisis.
              </p>
            </li>`,"")}
      </ul>
    </div>
  `;n.innerHTML=u;o(null,t.status);document.querySelector(".offer__list").addEventListener("click",e=>{e.target.nodeName==="LI"&&(e.target.classList.toggle("visible"),e.target.classList.contains("visible")?e.target.querySelector("use").href.baseVal=s+"#icon-minus":setTimeout(()=>{e.target.querySelector("use").href.baseVal=s+"#icon-plus"},400))});
//# sourceMappingURL=commonHelpers8.js.map
