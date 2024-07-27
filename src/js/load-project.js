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
projectPath.textContent = currentProject.name;

projectGallery.innerHTML = `
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
  ></li>`;

projectSmallGallery.innerHTML = `
  <li class="project-small-img-item active" style="background-image: url(${currentProject.images[0]})"></li>
  <li class="project-small-img-item" style="background-image: url(${currentProject.images[1]})"></li>
  <li class="project-small-img-item" style="background-image: url(${currentProject.images[2]})"></li>
  <li class="project-small-img-item" style="background-image: url(${currentProject.images[3]})"></li>
  <li class="project-small-img-item" style="background-image: url(${currentProject.images[4]})"></li>
  <li class="project-small-img-item" style="background-image: url(${currentProject.images[5]})"></li>`;

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
