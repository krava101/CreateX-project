import { currentProject } from '../api/projects.js';
import { loadProjects } from './projects-slider.js';

const href = window.location.href;
const url = new URL(href);
const projectId = url.searchParams.get('project');

async function getProject(id) {
  try {
    const project = await currentProject(id);
    return project;
  } catch (error) {
    console.error('Error fetching project data:', error);
    return null;
  }
}

async function init() {
  const project = await getProject(projectId);

  if (project) {
    const imgUrl =
      'https://res.cloudinary.com/dxseifgey/image/upload/v1723796772';
    const projectTitle = document.getElementById('project-title');
    const projectPath = document.getElementById('project-path');
    const projectGallery = document.getElementById('project-gallery');
    const projectSmallGallery = document.getElementById(
      'project-small-gallery'
    );
    const projectInfo = document.getElementById('project-info');
    const projectDescription = document.getElementById('project-description');

    projectTitle.textContent = project.name;
    projectTitle.classList.remove('project__title_loader');
    projectPath.textContent = `/ ${project.name}`;

    projectGallery.innerHTML = project.images
      .map(
        image => `
      <li>
        <img src="${imgUrl + image.src}" alt="Project photo">
      </li>
    `
      )
      .join('');

    projectSmallGallery.innerHTML = project.images
      .map(
        (image, index) => `
      <li class="project__gallery-small-item ${index === 0 ? 'active' : ''}">
        <button class="project__gallery-small-btn" type="button">
          <img src="${imgUrl + image.src}" alt="Project small photo pagination">
        </button>
      </li>
    `
      )
      .join('');

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
      <li>${project.completed}</li>
    `;

    projectDescription.textContent = project.description;

    loadProjects(project);
  } else {
    console.error('Project data is not available.');
  }
}

init();
