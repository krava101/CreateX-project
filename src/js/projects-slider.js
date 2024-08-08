import { projects } from '../data/data-projects.js';
import { touchSlider } from './helpers/touch-slider.js';

const projectsList = document.getElementById('p-list');
const projectsLeftBtn = document.getElementById('p-left-btn');
const projectsRightBtn = document.getElementById('p-right-btn');
const projectsTitle = document.getElementById('p__title');
const projectsPagList = document.getElementById('p-pag-list');
let projectsIndex = 0;

touchSlider(projectsList, activeProjectsSlider, projectsIndex);

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
  if (list.length < 1) {
    document.querySelector('.projects__title-container').style.display = 'none';
    document.querySelector('.projects__list-wrapper').style.display = 'none';
    const projectsSection = document.querySelector('.projects');
    projectsSection.style.paddingTop = '0';
    projectsSection.style.backgroundColor = '#f4f5f6';
  }
  if (list.length === 1) {
    projectsLeftBtn.style.display = 'none';
    projectsRightBtn.style.display = 'none';
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

  const pag = list.map(
    (_, i) =>
      `<li><button class="projects__pag-btn ${
        i === 0 ? 'active' : ''
      }" type="button" ></button></li>`
  );

  if (pag.length > 1) {
    projectsPagList.innerHTML = pag.join('');
  }
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
    const activePag = projectsPagList.querySelector('.active');
    if (activePag) {
      activePag.classList.remove('active');
    }
    projectsPagList.children[index].firstChild.classList.add('active');
  }
}
