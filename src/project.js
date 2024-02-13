import { projects } from "./data-projects";

const section = document.querySelector(".hero");
const similarProjList = document.querySelector(".project-list");
const similarProjectsTitle = document.querySelector(".projects-title-container");
const similarProjectsInfo = document.querySelector(".projects-info");
const href = window.location.href;
const projectNum = href[href.length - 1];
const arrowIconUrl = new URL('/img/icons.svg', import.meta.url).href;

function loadProject(projectNum) {
  const currentProject = projects[projectNum];
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