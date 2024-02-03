const projects = [
  {
    name: "Cubes Building",
    type: "Business Centers",
    location: "Wilhelminakade 663, 3072 AP Rotterdam",
    client: "Mark Beids",
    architect: "OMA",
    size: "162000 sq. m.",
    value: "$900 million",
    completed: "June 2013",
    description: "Completed in 2013, Cubes Building provides spaces for offices, housing, shops and hotels, creating a dynamic urban landscapeon the banks of the Meuse River. Its modern and innovative design reflects the modern architectural aesthetic and plays an important rolein Rotterdam's modern urban appearance.",
    images: ["1-project-1.jpg", "1-project-2.jpg", "1-project-3.jpg", "1-project-4.jpg", "1-project-5.jpg","1-project-6.jpg"]
  },
  {
    name: "Modern Cottage",
    type: "Private houses",
    location: "2464 Royal Ln. Mesa, New Jersey",
    client: "Darlene Robertson",
    architect: "HIK Architecture",
    size: "840 sq. feet",
    value: "$2 million",
    completed: "May 2020",
    description: "Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars. <br/><br/> Modern design and care for each family member to feel as comfortable as possible in the new home.",
    images: ["2-project-1.jpg", "2-project-2.jpg", "2-project-3.jpg", "2-project-4.jpg", "2-project-5.jpg", "2-project-6.jpg", ]
  },
  {
    name: "Luxury Beach House",
    type: "Private houses",
    location: "1226 SW  39th St, Pelican, Cape Coral, Florida",
    client: "Brad Garley",
    architect: "MDA",
    size: "280 sq. m.",
    value: "$1.7 million",
    completed: "June 2015",
    description: "The villa is located on the beautiful Abaco Rose Garden of Cape Coral on a very wide canal and has a fantastic view. This large house is built on a corner lot and has oversized south facing position. 2015 has been completely remodeled and refurbished. <br/> 5 bedrooms and 3 bathrooms with over 3000sq ft has plenty of room for up to 10 people.",
    images: ["3-project-1.jpg", "3-project-2.jpg", "3-project-3.jpg", "3-project-4.jpg", "3-project-5.jpg", "3-project-6.jpg", ]
  },
]

const section = document.querySelector(".hero");
const href = window.location.href;
const projectNum = href[href.length - 1];
const arrowIconUrl = new URL('/img/icons.svg', import.meta.url).href;
const projectImgsUrl = '/img/project-img/';

console.log(projectImgsUrl + '/1-project-1.jpg/');
console.log(arrowIconUrl + '#icon-left-arrow');


function loadProject(project) {
    const currentProject = projects[project];
  const markup = `<div class="container">
          <p class="page-path">
            <span class="page-path-dark">Homepage / Work</span> / ${currentProject.name}
          </p>
          <h1 class="page-title">${currentProject.name}</h1>
          <div class="project-img-list-wrapper">
            <ul class="project-img-list list">
              <li
                style="background-image: url(${projectImgsUrl + currentProject.images[0]})"
              >
              </li>
              <li
                style="background-image: url(${projectImgsUrl + currentProject.images[1]})"
              ></li>
              <li
                style="background-image: url(${projectImgsUrl + currentProject.images[2]})"
              ></li>
              <li
                style="background-image: url(${projectImgsUrl + currentProject.images[3]})"
              ></li>
              <li
                style="background-image: url(${projectImgsUrl + currentProject.images[4]})"
              ></li>
              <li
                style="background-image: url(${projectImgsUrl + currentProject.images[5]})"
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
            <li class="project-small-img-item active" style="background-image: url(${projectImgsUrl + currentProject.images[0]})"></li>
            <li class="project-small-img-item" style="background-image: url(${projectImgsUrl + currentProject.images[1]})"></li>
            <li class="project-small-img-item" style="background-image: url(${projectImgsUrl + currentProject.images[2]})"></li>
            <li class="project-small-img-item" style="background-image: url(${projectImgsUrl + currentProject.images[3]})"></li>
            <li class="project-small-img-item" style="background-image: url(${projectImgsUrl + currentProject.images[4]})"></li>
            <li class="project-small-img-item" style="background-image: url(${projectImgsUrl + currentProject.images[5]})"></li>
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
}

loadProject(projectNum);

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