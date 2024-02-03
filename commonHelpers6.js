import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */const n=[{name:"Cubes Building",type:"Business Centers",location:"Wilhelminakade 663, 3072 AP Rotterdam",client:"Mark Beids",architect:"OMA",size:"162000 sq. m.",value:"$900 million",completed:"June 2013",description:"Completed in 2013, Cubes Building provides spaces for offices, housing, shops and hotels, creating a dynamic urban landscapeon the banks of the Meuse River. Its modern and innovative design reflects the modern architectural aesthetic and plays an important rolein Rotterdam's modern urban appearance.",images:[`${new URL("/CreateX-project/assets/1-project-1-f6b48cbf.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/1-project-2-9f85f9ce.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/1-project-3-34d50af2.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/1-project-4-8e647f7e.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/1-project-5-8ebc5868.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/1-project-6-c763ff4a.jpg",self.location).href}`]},{name:"Modern Cottage",type:"Private houses",location:"2464 Royal Ln. Mesa, New Jersey",client:"Darlene Robertson",architect:"HIK Architecture",size:"840 sq. feet",value:"$2 million",completed:"May 2020",description:"Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars. <br/><br/> Modern design and care for each family member to feel as comfortable as possible in the new home.",images:[`${new URL("/CreateX-project/assets/2-project-1-941399db.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/2-project-2-ab764684.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/2-project-3-5924128f.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/2-project-4-3cd11c69.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/2-project-5-c2af5df3.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/2-project-6-1987dbb1.jpg",self.location).href}`]},{name:"Luxury Beach House",type:"Private houses",location:"1226 SW  39th St, Pelican, Cape Coral, Florida",client:"Brad Garley",architect:"MDA",size:"280 sq. m.",value:"$1.7 million",completed:"June 2015",description:"The villa is located on the beautiful Abaco Rose Garden of Cape Coral on a very wide canal and has a fantastic view. This large house is built on a corner lot and has oversized south facing position. 2015 has been completely remodeled and refurbished. <br/> 5 bedrooms and 3 bathrooms with over 3000sq ft has plenty of room for up to 10 people.",images:[`${new URL("/CreateX-project/assets/3-project-1-00fdc6b0.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/3-project-2-64e9013c.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/3-project-3-84a8d952.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/3-project-4-f1f9682b.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/3-project-5-6c5bad9d.jpg",self.location).href}`,`${new URL("/CreateX-project/assets/3-project-6-e43d19dc.jpg",self.location).href}`]}],p=document.querySelector(".hero"),o=window.location.href,m=o[o.length-1],r=new URL("/CreateX-project/assets/icons-0db76ac5.svg",self.location).href;new URL("/img/project-img",self.location).href;function g(s){return s.map(a=>new URL("/img/project-img"+a,import.meta.url).href)}function d(s){const e=n[s];g(e.images);const a=`<div class="container">
          <p class="page-path">
            <span class="page-path-dark">Homepage / Work</span> / ${e.name}
          </p>
          <h1 class="page-title">${e.name}</h1>
          <div class="project-img-list-wrapper">
            <ul class="project-img-list list">
              <li
                style="background-image: url(${e.images[0]})"
              ></li>
              <li
                style="background-image: url(${e.images[1]})"
              ></li>
              <li
                style="background-image: url(${e.images[2]})"
              ></li>
              <li
                style="background-image: url(${e.images[3]})"
              ></li>
              <li
                style="background-image: url(${e.images[4]})"
              ></li>
              <li
                style="background-image: url(${e.images[5]})"
              ></li>
            </ul>
            <button class="slider-left-btn" type="button">
              <svg class="slider-left-icon">
                <use href=${r+"#icon-left-arrow"}></use>
              </svg>
            </button>
            <button class="slider-right-btn" type="button">
              <svg class="slider-right-icon">
                <use href=${r+"#icon-right-arrow"}></use>
              </svg>
            </button>
          </div>
          <ul class="project-small-img-list list">
            <li class="project-small-img-item active" style="background-image: url(${e.images[0]})"></li>
            <li class="project-small-img-item" style="background-image: url(${e.images[1]})"></li>
            <li class="project-small-img-item" style="background-image: url(${e.images[2]})"></li>
            <li class="project-small-img-item" style="background-image: url(${e.images[3]})"></li>
            <li class="project-small-img-item" style="background-image: url(${e.images[4]})"></li>
            <li class="project-small-img-item" style="background-image: url(${e.images[5]})"></li>
          </ul>
          <div class="project-info-box">
            <div class="project-goal">
              <h2 class="section-title">Project goal</h2>
              <p class="project-goal-text">
                ${e.description}
              </p>
            </div>
            <ul class="project-info-list list">
              <li>Location</li>
              <li>${e.location}</li>
              <li>CLIENT</li>
              <li>${e.client}</li>
              <li>ARCHITECT</li>
              <li>${e.architect}</li>
              <li>SIZE</li>
              <li>${e.size}</li>
              <li>VALUE</li>
              <li>${e.value}</li>
              <li>COMPLETED</li>
              <li>${e.completed}</li>
            </ul>
          </div>`;p.innerHTML=a}d(m);const f=document.querySelector(".slider-left-btn"),u=document.querySelector(".slider-right-btn"),l=document.querySelector(".project-img-list"),i=document.querySelector(".project-small-img-list");let t=0;f.addEventListener("click",()=>{t<=0?t=l.children.length-1:t--,c(t)});u.addEventListener("click",()=>{t===l.children.length-1?t=0:t++,c(t)});function c(s){Array.from(i.children).map(e=>e.classList.remove("active")),l.style.transform=`translateX(-${t*1230}px)`,i.children[s].classList.add("active")}
//# sourceMappingURL=commonHelpers6.js.map
