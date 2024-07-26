import { projects } from '../data/data-projects.js';

const projectsList = document.querySelector('#p-list');
const projectsLeftBtn = document.querySelector('#p-left-btn');
const projectsRightBtn = document.querySelector('#p-right-btn');
let projectsIndex = 0;
let startX;

export const loadProjects = (type, status) => {
  let list = projects;
  if (type) {
    list = projects.filter(e => e.type === type);
  }
  if (status) {
    list = projects.filter(e => e.status === status);
  }
  const markup = list.reduce(
    (acc, e) =>
      acc +
      `<li class="project-card">
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
