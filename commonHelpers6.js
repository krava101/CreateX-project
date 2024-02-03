import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */const p=[{name:"Cubes Building",type:"Business Centers",location:"Wilhelminakade 663, 3072 AP Rotterdam",client:"Mark Beids",architect:"OMA",size:"162000 sq. m.",value:"$900 million",completed:"June 2013",description:"Completed in 2013, Cubes Building provides spaces for offices, housing, shops and hotels, creating a dynamic urban landscapeon the banks of the Meuse River. Its modern and innovative design reflects the modern architectural aesthetic and plays an important rolein Rotterdam's modern urban appearance.",images:["1-project-1.jpg","1-project-2.jpg","1-project-3.jpg","1-project-4.jpg","1-project-5.jpg","1-project-6.jpg"]},{name:"Modern Cottage",type:"Private houses",location:"2464 Royal Ln. Mesa, New Jersey",client:"Darlene Robertson",architect:"HIK Architecture",size:"840 sq. feet",value:"$2 million",completed:"May 2020",description:"Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars. <br/><br/> Modern design and care for each family member to feel as comfortable as possible in the new home.",images:["2-project-1.jpg","2-project-2.jpg","2-project-3.jpg","2-project-4.jpg","2-project-5.jpg","2-project-6.jpg"]},{name:"Luxury Beach House",type:"Private houses",location:"1226 SW  39th St, Pelican, Cape Coral, Florida",client:"Brad Garley",architect:"MDA",size:"280 sq. m.",value:"$1.7 million",completed:"June 2015",description:"The villa is located on the beautiful Abaco Rose Garden of Cape Coral on a very wide canal and has a fantastic view. This large house is built on a corner lot and has oversized south facing position. 2015 has been completely remodeled and refurbished. <br/> 5 bedrooms and 3 bathrooms with over 3000sq ft has plenty of room for up to 10 people.",images:["3-project-1.jpg","3-project-2.jpg","3-project-3.jpg","3-project-4.jpg","3-project-5.jpg","3-project-6.jpg"]}],g=document.querySelector(".hero"),s=window.location.href,m=s[s.length-1],o=new URL("/CreateX-project/assets/icons-0db76ac5.svg",self.location).href,t=new URL("/img/project-img/",self.location).href;console.log(t+"/1-project-1.jpg/");console.log(o+"#icon-left-arrow");function d(i){const e=p[i],n=`<div class="container">
          <p class="page-path">
            <span class="page-path-dark">Homepage / Work</span> / ${e.name}
          </p>
          <h1 class="page-title">${e.name}</h1>
          <div class="project-img-list-wrapper">
            <ul class="project-img-list list">
              <li
                style="background-image: url(${t+e.images[0]})"
              >
              </li>
              <li
                style="background-image: url(${t+e.images[1]})"
              ></li>
              <li
                style="background-image: url(${t+e.images[2]})"
              ></li>
              <li
                style="background-image: url(${t+e.images[3]})"
              ></li>
              <li
                style="background-image: url(${t+e.images[4]})"
              ></li>
              <li
                style="background-image: url(${t+e.images[5]})"
              ></li>
            </ul>
            <button class="slider-left-btn" type="button">
              <svg class="slider-left-icon">
                <use href=${o+"#icon-left-arrow"}></use>
              </svg>
            </button>
            <button class="slider-right-btn" type="button">
              <svg class="slider-right-icon">
                <use href=${o+"#icon-right-arrow"}></use>
              </svg>
            </button>
          </div>
          <ul class="project-small-img-list list">
            <li class="project-small-img-item active" style="background-image: url(${t+e.images[0]})"></li>
            <li class="project-small-img-item" style="background-image: url(${t+e.images[1]})"></li>
            <li class="project-small-img-item" style="background-image: url(${t+e.images[2]})"></li>
            <li class="project-small-img-item" style="background-image: url(${t+e.images[3]})"></li>
            <li class="project-small-img-item" style="background-image: url(${t+e.images[4]})"></li>
            <li class="project-small-img-item" style="background-image: url(${t+e.images[5]})"></li>
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
          </div>`;g.innerHTML=n}d(m);const u=document.querySelector(".slider-left-btn"),h=document.querySelector(".slider-right-btn"),a=document.querySelector(".project-img-list"),r=document.querySelector(".project-small-img-list");let l=0;u.addEventListener("click",()=>{l<=0?l=a.children.length-1:l--,c(l)});h.addEventListener("click",()=>{l===a.children.length-1?l=0:l++,c(l)});function c(i){Array.from(r.children).map(e=>e.classList.remove("active")),a.style.transform=`translateX(-${l*1230}px)`,r.children[i].classList.add("active")}
//# sourceMappingURL=commonHelpers6.js.map
