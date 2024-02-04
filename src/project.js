const projects = [
  {
    id: 0,
    name: "Cubes Building",
    type: "Business Centers",
    location: "Wilhelminakade 663, 3072 AP Rotterdam",
    client: "Mark Beids",
    architect: "OMA",
    size: "162000 sq. m.",
    value: "$900 million",
    completed: "June 2013",
    description: "Completed in 2013, Cubes Building provides spaces for offices, housing, shops and hotels, creating a dynamic urban landscapeon the banks of the Meuse River. Its modern and innovative design reflects the modern architectural aesthetic and plays an important rolein Rotterdam's modern urban appearance.",
    previewImg: new URL('/img/work-page-img/project-1.jpg', import.meta.url).href, 
    images: [`${new URL('/img/project-img/1-project-1.jpg', import.meta.url).href}`, `${new URL('/img/project-img/1-project-2.jpg', import.meta.url).href}`, `${new URL('/img/project-img/1-project-3.jpg', import.meta.url).href}`, `${new URL('/img/project-img/1-project-4.jpg', import.meta.url).href}`,`${new URL('/img/project-img/1-project-5.jpg', import.meta.url).href}`,`${new URL('/img/project-img/1-project-6.jpg', import.meta.url).href}`]
  },
  {
    id: 1,
    name: "Modern Cottage",
    type: "Private houses",
    location: "2464 Royal Ln. Mesa, New Jersey",
    client: "Darlene Robertson",
    architect: "HIK Architecture",
    size: "840 sq. feet",
    value: "$2 million",
    completed: "May 2020",
    description: "Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars. <br/><br/> Modern design and care for each family member to feel as comfortable as possible in the new home.",
    previewImg: new URL('/img/work-page-img/project-2.jpg', import.meta.url).href,
    images: [`${new URL('/img/project-img/2-project-1.jpg', import.meta.url).href}`, `${new URL('/img/project-img/2-project-2.jpg', import.meta.url).href}`, `${new URL('/img/project-img/2-project-3.jpg', import.meta.url).href}`, `${new URL('/img/project-img/2-project-4.jpg', import.meta.url).href}`,`${new URL('/img/project-img/2-project-5.jpg', import.meta.url).href}`,`${new URL('/img/project-img/2-project-6.jpg', import.meta.url).href}`]
  },
  {
    id: 2,
    name: "Luxury Beach House",
    type: "Private houses",
    location: "1226 SW  39th St, Pelican, Cape Coral, Florida",
    client: "Brad Garley",
    architect: "MDA",
    size: "280 sq. m.",
    value: "$1.7 million",
    completed: "June 2015",
    description: "The villa is located on the beautiful Abaco Rose Garden of Cape Coral on a very wide canal and has a fantastic view. This large house is built on a corner lot and has oversized south facing position. 2015 has been completely remodeled and refurbished. <br/> 5 bedrooms and 3 bathrooms with over 3000sq ft has plenty of room for up to 10 people.",
    previewImg: new URL('/img/work-page-img/project-3.jpg', import.meta.url).href,
    images: [`${new URL('/img/project-img/3-project-1.jpg', import.meta.url).href}`, `${new URL('/img/project-img/3-project-2.jpg', import.meta.url).href}`, `${new URL('/img/project-img/3-project-3.jpg', import.meta.url).href}`, `${new URL('/img/project-img/3-project-4.jpg', import.meta.url).href}`,`${new URL('/img/project-img/3-project-5.jpg', import.meta.url).href}`,`${new URL('/img/project-img/3-project-6.jpg', import.meta.url).href}`]
  },
  {
    id: 3,
    name: "Modern Double Bedrooms",
    type: "Apartments & flats",
    location: "121 N 2nd St, Philadelphia, Pennsylvania",
    client: "Alan Greed",
    architect: "Loft",
    size: "20 sq. m.",
    value: "$50 thousand",
    completed: "August 2021",
    description: "The modern double bedroom spanning 20 square meters is a cozy and stylish space designed for maximum comfort and functionality. The bright and contemporary design of this bedroom aims to highlight modern trends in interior decor.",
    previewImg: new URL('/img/work-page-img/project-4.jpg', import.meta.url).href,
    images: [`${new URL('/img/project-img/4-project-1.jpg', import.meta.url).href}`, `${new URL('/img/project-img/4-project-2.jpg', import.meta.url).href}`, `${new URL('/img/project-img/4-project-3.jpg', import.meta.url).href}`, `${new URL('/img/project-img/4-project-4.jpg', import.meta.url).href}`,`${new URL('/img/project-img/4-project-5.jpg', import.meta.url).href}`,`${new URL('/img/project-img/4-project-6.jpg', import.meta.url).href}`]
  },
  {
    id: 4,
    name: "Kids Bedroom With Decorations",
    type: "Apartments & flats",
    location: "1550 Burnett St, Houston, Texas",
    client: "Elsa Down",
    architect: "Loft",
    size: "18 sq. m.",
    value: "$30 thousand",
    completed: "May 2022",
    description: "The kids' bedroom with decorations spanning 18 square meters is a vibrant and imaginative space designed to inspire creativity and provide a comfortable haven for little ones. The decor is carefully curated to create a lively and playful atmosphere.",
    previewImg: new URL('/img/work-page-img/project-5.jpg', import.meta.url).href,
    images: [`${new URL('/img/project-img/5-project-1.jpg', import.meta.url).href}`, `${new URL('/img/project-img/5-project-2.jpg', import.meta.url).href}`, `${new URL('/img/project-img/5-project-3.jpg', import.meta.url).href}`, `${new URL('/img/project-img/5-project-4.jpg', import.meta.url).href}`,`${new URL('/img/project-img/5-project-5.jpg', import.meta.url).href}`,`${new URL('/img/project-img/5-project-6.jpg', import.meta.url).href}`]
  },
  {
    id: 5,
    name: "The Pencil Building",
    type: "Stores & Malls",
    location: "600 Peachtree Street NE Atlanta, Georgia, United States",
    client: "CP Group",
    architect: "CPA",
    size: "1,312,980 sq ft",
    value: "$150 million",
    completed: "October 1992",
    description: "Bank of America Plaza is a supertall skyscraper between Midtown Atlanta and Downtown Atlanta. At 311.8 m (1,023 ft), as of February 2024 the tower is the 23rd tallest building in the United States, the tallest building in the Southeastern region of the United States, and the tallest building in any U.S. state capital, overtaking the 250 m (820 ft), 50-story One Atlantic Center in height, which held the record as Georgia's tallest building.",
    previewImg: new URL('/img/work-page-img/project-6.jpg', import.meta.url).href,
    images: [`${new URL('/img/project-img/6-project-1.jpg', import.meta.url).href}`, `${new URL('/img/project-img/6-project-2.jpg', import.meta.url).href}`, `${new URL('/img/project-img/6-project-3.jpg', import.meta.url).href}`, `${new URL('/img/project-img/6-project-4.jpg', import.meta.url).href}`,`${new URL('/img/project-img/6-project-5.jpg', import.meta.url).href}`,`${new URL('/img/project-img/6-project-6.jpg', import.meta.url).href}`]}
]

const section = document.querySelector(".hero");
const similarProjList = document.querySelector(".project-list");
const similarProjectsTitle = document.querySelector(".projects-title-container");
const similarProjectsInfo = document.querySelector(".projects-info");
const href = window.location.href;
const projectNum = href[href.length - 1];
const arrowIconUrl = new URL('/img/icons.svg', import.meta.url).href;

function getImgUrl(urlList) {
  const newUrlList = urlList.map(e => new URL('/img/project-img' + e, import.meta.url).href);
  return newUrlList;
}


function loadProject(projectNum) {
  const currentProject = projects[projectNum];
  const images = getImgUrl(currentProject.images);
  const markup = `<div class="container">
          <p class="page-path">
            <span class="page-path-dark">Homepage / Work</span> / ${currentProject.name}
          </p>
          <h1 class="page-title">${currentProject.name}</h1>
          <div class="project-img-list-wrapper">
            <ul class="project-img-list list">
              <li
                style="background-image: url(${currentProject.images[0]})"
              ></li>
              <li
                style="background-image: url(${currentProject.images[1]})"
              ></li>
              <li
                style="background-image: url(${currentProject.images[2]})"
              ></li>
              <li
                style="background-image: url(${currentProject.images[3]})"
              ></li>
              <li
                style="background-image: url(${currentProject.images[4]})"
              ></li>
              <li
                style="background-image: url(${currentProject.images[5]})"
              ></li>
            </ul>
            <button class="slider-left-btn" type="button">
              <svg class="slider-left-icon">
                <use href=${arrowIconUrl + '#icon-left-arrow'}></use>
              </svg>
            </button>
            <button class="slider-right-btn" type="button">
              <svg class="slider-right-icon">
                <use href=${arrowIconUrl + '#icon-right-arrow'}></use>
              </svg>
            </button>
          </div>
          <ul class="project-small-img-list list">
            <li class="project-small-img-item active" style="background-image: url(${currentProject.images[0]})"></li>
            <li class="project-small-img-item" style="background-image: url(${currentProject.images[1]})"></li>
            <li class="project-small-img-item" style="background-image: url(${currentProject.images[2]})"></li>
            <li class="project-small-img-item" style="background-image: url(${currentProject.images[3]})"></li>
            <li class="project-small-img-item" style="background-image: url(${currentProject.images[4]})"></li>
            <li class="project-small-img-item" style="background-image: url(${currentProject.images[5]})"></li>
          </ul>
          <div class="project-info-box">
            <div class="project-goal">
              <h2 class="section-title">Project goal</h2>
              <p class="project-goal-text">
                ${currentProject.description}
              </p>
            </div>
            <ul class="project-info-list list">
              <li>Location</li>
              <li>${currentProject.location}</li>
              <li>CLIENT</li>
              <li>${currentProject.client}</li>
              <li>ARCHITECT</li>
              <li>${currentProject.architect}</li>
              <li>SIZE</li>
              <li>${currentProject.size}</li>
              <li>VALUE</li>
              <li>${currentProject.value}</li>
              <li>COMPLETED</li>
              <li>${currentProject.completed}</li>
            </ul>
          </div>`;
  section.innerHTML = markup;
  loadSimilarProjects(currentProject);
}

loadProject(projectNum);

function loadSimilarProjects(currentProject) {
  const similarProjects = projects.filter(e => e.type === currentProject.type && e != currentProject);
  if (similarProjects.length) {
    const markup = similarProjects.reduce((acc, e) => acc + `
    <li class="project-card">
      <img
        class="project-img"
        src="${e.previewImg}"
        alt=""
      />
      <div class="project-card-box">
        <h5 class="card-title">${e.name}</h5>
        <p class="project-card-text">${e.type}</p>
        <a class="project-card-link" href="project.html?project=project${e.id}">view project</a>
      </div>
    </li>`, '');
    similarProjList.innerHTML = markup;
  } else {
    similarProjList.innerHTML = `<li></li>`;
    similarProjectsTitle.textContent = "";
    similarProjectsInfo.style.margin = "0";
  }
  
}


const leftBtn = document.querySelector(".slider-left-btn");
const rightBtn = document.querySelector(".slider-right-btn");
const gallery = document.querySelector(".project-img-list");
const smallGallery = document.querySelector(".project-small-img-list");
let currentIndex = 0;

leftBtn.addEventListener("click", () => {
  currentIndex <= 0 ? currentIndex = gallery.children.length - 1 : currentIndex--;
  galleryScroll(currentIndex);
})

rightBtn.addEventListener("click", () => {
  currentIndex === gallery.children.length - 1 ? currentIndex = 0 : currentIndex++;
  galleryScroll(currentIndex);
})

function galleryScroll(index) {
  Array.from(smallGallery.children).map(e => e.classList.remove("active"));
  gallery.style.transform = `translateX(-${currentIndex * 1230}px)`;
  smallGallery.children[index].classList.add("active");
}