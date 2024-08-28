import { getProjects } from '../../api/projects';

const projList = document.querySelector('.projects-list');
const mediaNavList = document.querySelector('.media-list');
const loadMoreBtn = document.querySelector('.projects-load-more');
const imgUrl = 'https://res.cloudinary.com/dxseifgey/image/upload/v1723796772';
let page = 1;
let projects = [];

init();

async function init() {
  projects = await getProjects();
  loadProjects();
}

const loadProjects = async (status = 'all', page = 1) => {
  let projectsList = projects.slice(0, page * 9);
  loadMoreBtn.style.display = 'flex';

  if (page * 9 >= projects.length) {
    loadMoreBtn.style.display = 'none';
  }
  if (status !== 'all') {
    projectsList = projects.filter(e => e.status === status);
    loadMoreBtn.style.display = 'none';
  }

  const markup = projectsList.reduce(
    (acc, proj, i) =>
      acc +
      `<li class="projects-card">
        <img
          class="projects-img"
          src="${imgUrl + proj.images[0].src}"
          alt="${proj.name}"
        />
        <div class="projects-card-box">
          <h5 class="card-title">${proj.name}</h5>
          <p class="projects-card-text">${proj.type}</p>
          <a class="projects-card-link" href="./project.html?project=${
            proj._id
          }"
            >view project</a
          >
        </div>
      </li>`,
    ''
  );
  projList.innerHTML = markup;
};

mediaNavList.addEventListener('click', event => {
  const activeMedia = mediaNavList.querySelector('.active');

  if (activeMedia) {
    activeMedia.classList.remove('active');
  }
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
