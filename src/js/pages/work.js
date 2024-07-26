import { projects } from '../../data/data-projects.js';

const projectsList = document.querySelector('.projects-list');
const mediaNavList = document.querySelector('.media-list');
const mediaBtns = document.querySelectorAll('.media-btn');
const loadMoreBtn = document.querySelector('.projects-load-more');
let page = 1;

const loadProjects = (status = 'all', page = 1) => {
  loadMoreBtn.style.display = 'flex';
  page * 9 >= projects.length && (loadMoreBtn.style.display = 'none');
  let newProjects = projects.slice(0, page * 9);
  status !== 'all' &&
    ((newProjects = projects.filter(e => e.status === status)),
    (loadMoreBtn.style.display = 'none'));

  const markup = newProjects.reduce(
    (acc, proj) =>
      acc +
      `<li class="projects-card">
              <img
                class="projects-img"
                src="${proj.previewImg}"
                alt="${proj.name}"
              />
              <div class="projects-card-box">
                <h5 class="card-title">${proj.name}</h5>
                <p class="projects-card-text">${proj.type}</p>
                <a class="projects-card-link" href="./project.html?project=${proj.id}"
                  >view project</a
                >
              </div>
            </li>`,
    ''
  );
  projectsList.innerHTML = markup;
};

loadProjects();

mediaNavList.addEventListener('click', event => {
  mediaBtns.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  loadProjects(event.target.dataset.media);
});

loadMoreBtn.addEventListener('click', event => {
  page += 1;
  loadProjects('all', page);
  if (page * 9 >= projects.length) {
    loadMoreBtn.style.display = 'none';
  }
});
