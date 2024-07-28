import { projects } from '../data/data-projects.js';
import { loadProjects } from './projects-slider.js';

const href = window.location.href;
const url = new URL(href);
const projectNum = +url.searchParams.get('project');
const currentProject = projects[projectNum];

const projectTitle = document.getElementById('project-title');
const projectPath = document.getElementById('project-path');
const projectGallery = document.getElementById('project-gallery');
const projectSmallGallery = document.getElementById('project-small-gallery');
const projectInfo = document.getElementById('project-info');
const projectDescription = document.getElementById('project-description');

projectTitle.textContent = currentProject.name;
projectTitle.classList.remove('project__title_loader');
projectPath.textContent = `/ ${currentProject.name}`;

projectGallery.innerHTML = `
  <li>
    <img src="${currentProject.images[0]}" alt="Project photo">
  </li>
  <li>
    <img src="${currentProject.images[1]}" alt="Project photo">
  </li>
  <li>
    <img src="${currentProject.images[2]}" alt="Project photo">
  </li>
  <li>
    <img src="${currentProject.images[3]}" alt="Project photo">
  </li>
  <li>
    <img src="${currentProject.images[4]}" alt="Project photo">
  </li>
  <li>
    <img src="${currentProject.images[5]}" alt="Project photo">
  </li>`;

projectSmallGallery.innerHTML = `
  <li class="project__gallery-small-item active">
    <button class="project__gallery-small-btn" type="button">
      <img src="${currentProject.images[0]}" alt="Project small photo pagination">
    </button>
  </li>
  <li class="project__gallery-small-item">
    <button class="project__gallery-small-btn" type="button">
      <img src="${currentProject.images[1]}" alt="Project small photo pagination">
    </button></li>
  <li class="project__gallery-small-item">
    <button class="project__gallery-small-btn" type="button">
      <img src="${currentProject.images[2]}" alt="Project small photo pagination">
    </button></li>
  <li class="project__gallery-small-item"> 
    <button class="project__gallery-small-btn" type="button">
      <img src="${currentProject.images[3]}" alt="Project small photo pagination">
    </button></li>
  <li class="project__gallery-small-item">
    <button class="project__gallery-small-btn" type="button">
      <img src="${currentProject.images[4]}" alt="Project small photo pagination">
    </button></li>
  <li class="project__gallery-small-item">
    <button class="project__gallery-small-btn" type="button">
      <img src="${currentProject.images[5]}" alt="Project small photo pagination">
    </button></li>`;

projectInfo.innerHTML = `
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
  <li>${currentProject.completed}</li>`;

projectDescription.textContent = currentProject.description;

loadProjects(currentProject);
