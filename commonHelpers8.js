import"./assets/header-40f70231.js";/* empty css                     */import{l as i}from"./assets/projects-slider-224b71ac.js";import"./assets/data-projects-98539dd2.js";const o=[{id:0,type:"Construction",status:"construction",previewImg:new URL("/CreateX-project/assets/construction-73796e43.jpg",self.location).href,offers:["Interior design of apartments","Interior design of private houses"]},{id:1,type:"Project Development",status:"development",previewImg:new URL("/CreateX-project/assets/project-development-a7afb9e0.jpg",self.location).href,offers:["Interior design of apartments","Interior design of private houses"]},{id:2,type:"Interior Design",status:"design",previewImg:new URL("/CreateX-project/assets/interior-design-4386f777.jpg",self.location).href,offers:["Interior design of apartments","Interior design of private houses"]},{id:3,type:"Repairs",status:"repairs",previewImg:new URL("/CreateX-project/assets/repairs-a3af7a95.jpg",self.location).href,offers:["Interior design of apartments","Interior design of private houses"]}],a=document.querySelector(".offer__container"),n=window.location.href,c=new URL(n),f=c.searchParams.get("service"),t=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href,s=o[f],l=`
    <img
      class="offer__img"
      src="${s.previewImg}"
      alt="${s.type}"
    />
    <div class="offer__info">
      <h2 class="offer__title section-title">We offer</h2>
      <ul class="offer__list list">
        ${s.offers.reduce((e,r)=>e+`<li>
              <h4 class="offer__list-title">
                <svg class="offer__list-icon">
                  <use href=${t+"#icon-plus"}></use>
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
  `;a.innerHTML=l;i(null,s.status);document.querySelector(".offer__list").addEventListener("click",e=>{e.target.nodeName==="LI"&&(e.target.classList.toggle("visible"),e.target.classList.contains("visible")?e.target.querySelector("use").href.baseVal=t+"#icon-minus":setTimeout(()=>{e.target.querySelector("use").href.baseVal=t+"#icon-plus"},400))});
//# sourceMappingURL=commonHelpers8.js.map
