import { currentProject } from '../api/projects.js';
import { loadProjects } from './projects-slider.js';

const href = window.location.href;
const url = new URL(href);
const projectId = url.searchParams.get('project');
const project = await currentProject(projectId);
const imgUrl = 'https://res.cloudinary.com/dxseifgey/image/upload/v1723796772';

const projectTitle = document.getElementById('project-title');
const projectPath = document.getElementById('project-path');
const projectGallery = document.getElementById('project-gallery');
const projectSmallGallery = document.getElementById('project-small-gallery');
const projectInfo = document.getElementById('project-info');
const projectDescription = document.getElementById('project-description');

projectTitle.textContent = project.name;
projectTitle.classList.remove('project__title_loader');
projectPath.textContent = `/ ${project.name}`;

projectGallery.innerHTML = `
  <li>
    <img src="${imgUrl + project.images[0].src}" alt="Project photo">
  </li>
  <li>
    <img src="${imgUrl + project.images[1].src}" alt="Project photo">
  </li>
  <li>
    <img src="${imgUrl + project.images[2].src}" alt="Project photo">
  </li>
  <li>
    <img src="${imgUrl + project.images[3].src}" alt="Project photo">
  </li>
  <li>
    <img src="${imgUrl + project.images[4].src}" alt="Project photo">
  </li>
  <li>
    <img src="${imgUrl + project.images[5].src}" alt="Project photo">
  </li>`;

projectSmallGallery.innerHTML = `
  <li class="project__gallery-small-item active">
    <button class="project__gallery-small-btn" type="button">
      <img src="${
        imgUrl + project.images[0].src
      }" alt="Project small photo pagination">
    </button>
  </li>
  <li class="project__gallery-small-item">
    <button class="project__gallery-small-btn" type="button">
      <img src="${
        imgUrl + project.images[1].src
      }" alt="Project small photo pagination">
    </button></li>
  <li class="project__gallery-small-item">
    <button class="project__gallery-small-btn" type="button">
      <img src="${
        imgUrl + project.images[2].src
      }" alt="Project small photo pagination">
    </button></li>
  <li class="project__gallery-small-item"> 
    <button class="project__gallery-small-btn" type="button">
      <img src="${
        imgUrl + project.images[3].src
      }" alt="Project small photo pagination">
    </button></li>
  <li class="project__gallery-small-item">
    <button class="project__gallery-small-btn" type="button">
      <img src="${
        imgUrl + project.images[4].src
      }" alt="Project small photo pagination">
    </button></li>
  <li class="project__gallery-small-item">
    <button class="project__gallery-small-btn" type="button">
      <img src="${
        imgUrl + project.images[5].src
      }" alt="Project small photo pagination">
    </button></li>`;

projectInfo.innerHTML = `
  <li>Location</li>
  <li>${project.location}</li>
  <li>CLIENT</li>
  <li>${project.client}</li>
  <li>ARCHITECT</li>
  <li>${project.architect}</li>
  <li>SIZE</li>
  <li>${project.size}</li>
  <li>VALUE</li>
  <li>${project.value}</li>
  <li>COMPLETED</li>
  <li>${project.completed}</li>`;

projectDescription.textContent = project.description;

loadProjects(project);
