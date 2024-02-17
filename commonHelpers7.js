import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */const a=[{id:0,type:"Construction",previewImg:new URL("/CreateX-project/assets/construction-73796e43.jpg",self.location).href,offers:["Interior design of apartments","Interior design of private houses"]},{id:1,type:"Project Development",previewImg:new URL("/CreateX-project/assets/project-development-a7afb9e0.jpg",self.location).href,offers:["Interior design of apartments","Interior design of private houses"]},{id:2,type:"Interior Design",previewImg:new URL("/CreateX-project/assets/interior-design-4386f777.jpg",self.location).href,offers:["Interior design of apartments","Interior design of private houses"]},{id:3,type:"Repairs",previewImg:new URL("/CreateX-project/assets/repairs-a3af7a95.jpg",self.location).href,offers:["Interior design of apartments","Interior design of private houses"]}],c=document.querySelector(".offer"),t=window.location.href,f=t[t.length-1],r=new URL("/CreateX-project/assets/icons-1e66910e.svg",self.location).href;function l(e){const s=a[e],i=`
    <div class="container">
          <img
            class="offer-img"
            src="${s.previewImg}"
            alt="${s.type}"
          />
          <div class="offer-info">
            <h2 class="section-title">We offer</h2>
            <ul class="offer-list list">
              ${s.offers.reduce((o,n)=>o+`<li>
                <h4 class="offer-list-title">
                  <svg class="offer-list-icon">
                    <use href=${r+"#icon-plus"}></use>
                  </svg>
                  ${n}
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
  `;c.innerHTML=i}l(f);const p=document.querySelector(".offer-list");p.addEventListener("click",e=>{e.target.nodeName==="LI"&&(e.target.classList.toggle("visible"),e.target.classList.contains("visible")?e.target.querySelector(":scope use").href.baseVal=r+"#icon-minus":setTimeout(()=>{e.target.querySelector(":scope use").href.baseVal=r+"#icon-plus"},400))});
//# sourceMappingURL=commonHelpers7.js.map
