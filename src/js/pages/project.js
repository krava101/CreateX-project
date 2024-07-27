import { projects } from '../../data/data-projects';
import { loadProjects } from '../projects-slider';

const section = document.querySelector('.hero');
const href = window.location.href;
const url = new URL(href);
const projectNum = +url.searchParams.get('project');
const arrowIconUrl = new URL('/img/icons.svg', import.meta.url).href;

const currentProject = projects[projectNum];
const markup = `
  <div class="container">
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
    <li class="project-small-img-item active" style="background-image: url(${
      currentProject.images[0]
    })"></li>
    <li class="project-small-img-item" style="background-image: url(${
      currentProject.images[1]
    })"></li>
    <li class="project-small-img-item" style="background-image: url(${
      currentProject.images[2]
    })"></li>
    <li class="project-small-img-item" style="background-image: url(${
      currentProject.images[3]
    })"></li>
    <li class="project-small-img-item" style="background-image: url(${
      currentProject.images[4]
    })"></li>
    <li class="project-small-img-item" style="background-image: url(${
      currentProject.images[5]
    })"></li>
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
loadProjects(currentProject);

const leftBtn = document.querySelector('.slider-left-btn');
const rightBtn = document.querySelector('.slider-right-btn');
const gallery = document.querySelector('.project-img-list');
const smallGallery = document.querySelector('.project-small-img-list');
const projectNavList = document.querySelector('.project-small-img-list');
let currentIndex = 0;

leftBtn.addEventListener('click', () => {
  currentIndex <= 0
    ? (currentIndex = gallery.children.length - 1)
    : currentIndex--;
  galleryScroll(currentIndex);
});

rightBtn.addEventListener('click', () => {
  currentIndex === gallery.children.length - 1
    ? (currentIndex = 0)
    : currentIndex++;
  galleryScroll(currentIndex);
});

projectNavList.addEventListener('click', event => {
  if (event.target !== event.currentTarget) {
    currentIndex = Array.from(projectNavList.children).indexOf(event.target);
    galleryScroll(currentIndex);
  }
});

function galleryScroll(index) {
  smallGallery.querySelector('.active').classList.remove('active');
  gallery.style.transform = `translateX(-${currentIndex * 1230}px)`;
  smallGallery.children[index].classList.add('active');
}
