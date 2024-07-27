import { projects } from '../data/data-projects.js';

const projectsList = document.getElementById('p-list');
const projectsLeftBtn = document.getElementById('p-left-btn');
const projectsRightBtn = document.getElementById('p-right-btn');
const projectsTitle = document.getElementById('p__title');
let projectsIndex = 0;
let startX;

const currentPath = window.location.pathname;
const navMap = {
  '/CreateX-project/index.html':
    'Browse our selected projects and learn more about our work',
  '/CreateX-project/service.html': 'Related projects',
  '/CreateX-project/project.html': 'Similar projects',
  '/index.html': 'Browse our selected projects and learn more about our work',
  '/service.html': 'Related projects',
  '/project.html': 'Similar projects',
};

projectsTitle.textContent = navMap[currentPath];

export const loadProjects = (project, status) => {
  let list = projects;
  if (project) {
    list = projects.filter(
      e => e.type === project.type && e.name !== project.name
    );
  }
  if (status) {
    list = projects.filter(e => e.status === status);
  }
  const markup = list.reduce(
    (acc, e) =>
      acc +
      `<li class="projects__card">
        <img
          class="projects__card-img"
          src="${e.previewImg}"
          alt=""
        />
        <div class="projects__card-box">
          <h5 class="card-title">${e.name}</h5>
          <p class="projects__card-text">${e.type}</p>
          <a class="projects__card-link" href="project.html?project=${e.id}">view project</a>
        </div>
    </li>`,
    ''
  );
  projectsList.innerHTML = markup;
};

projectsLeftBtn.addEventListener('click', () => {
  projectsIndex <= 0
    ? (projectsIndex = projectsList.children.length - 1)
    : projectsIndex--;
  activeProjectsSlider(projectsIndex);
});

projectsRightBtn.addEventListener('click', () => {
  projectsIndex === projectsList.children.length - 1
    ? (projectsIndex = 0)
    : projectsIndex++;
  activeProjectsSlider(projectsIndex);
});

function activeProjectsSlider(index) {
  if (projectsList.children.length > 1) {
    const cardWidth =
      projectsList.children[0].getBoundingClientRect().width + 30;
    projectsList.style.transform = `translateX(${-index * cardWidth}px)`;
  }
}

projectsList.addEventListener('touchstart', event => {
  startX = event.touches[0].clientX;
});

projectsList.addEventListener('touchend', event => {
  const endX = event.changedTouches[0].clientX;
  if (endX > startX) {
    if (endX - startX > 70) {
      projectsIndex <= 0
        ? (projectsIndex = projectsList.children.length - 2)
        : projectsIndex--;
    }
  } else if (endX < startX) {
    if (startX - endX > 70) {
      projectsIndex === projectsList.children.length - 1
        ? (projectsIndex = 0)
        : projectsIndex++;
    }
  }
  activeProjectsSlider(projectsIndex);
});
