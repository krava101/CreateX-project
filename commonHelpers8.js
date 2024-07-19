import"./assets/header-92b20be3.js";/* empty css                     */import{p as a}from"./assets/data-projects-98539dd2.js";import"./assets/main-form-25ecbd05.js";const c=[{id:0,type:"Construction",status:"construction",previewImg:new URL("/CreateX-project/assets/construction-73796e43.jpg",self.location).href,offers:["Interior design of apartments","Interior design of private houses"]},{id:1,type:"Project Development",status:"development",previewImg:new URL("/CreateX-project/assets/project-development-a7afb9e0.jpg",self.location).href,offers:["Interior design of apartments","Interior design of private houses"]},{id:2,type:"Interior Design",status:"design",previewImg:new URL("/CreateX-project/assets/interior-design-4386f777.jpg",self.location).href,offers:["Interior design of apartments","Interior design of private houses"]},{id:3,type:"Repairs",status:"repairs",previewImg:new URL("/CreateX-project/assets/repairs-a3af7a95.jpg",self.location).href,offers:["Interior design of apartments","Interior design of private houses"]}],n=document.querySelector(".offer"),l=document.querySelector("#p-list"),f=window.location.href,p=new URL(f),u=p.searchParams.get("service"),i=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href;function m(e){const s=c[e],r=`
    <div class="container">
          <img
            class="offer-img"
            src="${s.previewImg}"
            alt="${s.type}"
          />
          <div class="offer-info">
            <h2 class="section-title">We offer</h2>
            <ul class="offer-list list">
              ${s.offers.reduce((t,o)=>t+`<li>
                <h4 class="offer-list-title">
                  <svg class="offer-list-icon">
                    <use href=${i+"#icon-plus"}></use>
                  </svg>
                  ${o}
                </h4>
                <p class="offer-list-about">
                  Adipiscing nunc arcu enim elit mattis eu placerat proin.
                  Imperdiet elementum faucibus dignissim purus. Fusce parturient
                  diam magna ullamcorper morbi semper massa ac facilisis.
                </p>
              </li>`,"")}
            </ul>
          </div>
        </div>
  `;n.innerHTML=r,g(s.status),activeSimilarProj()}m(u);const d=document.querySelector(".offer-list");d.addEventListener("click",e=>{e.target.nodeName==="LI"&&(e.target.classList.toggle("visible"),e.target.classList.contains("visible")?e.target.querySelector("use").href.baseVal=i+"#icon-minus":setTimeout(()=>{e.target.querySelector("use").href.baseVal=i+"#icon-plus"},400))});function g(e){const s=a.filter(r=>r.status===e).reduce((r,t)=>r+`
    <li class="project-card">
      <img
        class="project-img"
        src="${t.previewImg}"
        alt=""
      />
      <div class="project-card-box">
        <h5 class="card-title">${t.name}</h5>
        <p class="project-card-text">${t.type}</p>
        <a class="project-card-link" href="project.html?project=${t.id}">view project</a>
      </div>
    </li>`,"");l.innerHTML=s}
//# sourceMappingURL=commonHelpers8.js.map
