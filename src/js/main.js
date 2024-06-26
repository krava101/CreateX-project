import { projects } from '../data/data-projects';
import activeSimilarProj from './similar-projects';
// import loadComment from "./comments";
// import * as mainForm from "./main-form";
import './controls.js';

const questionForm = document.querySelector('.question-form');
const heroList = document.querySelector('.hero-steps-list');
const heroLeftBtn = document.querySelector('.hero-left-btn');
const heroRightBtn = document.querySelector('.hero-right-btn');
const heroPagList = document.querySelector('.hero-pag-list');
const projectList = document.querySelector('#p-list');
let heroIndex = 0;
let startX;

const userQuestion = {
  userName: '',
  phone: '',
  message: '',
};

// function loadSimilarProjects() {
//     const markup = projects.reduce((acc, e) => acc + `
//     <li class="project-card">
//       <img
//         class="project-img"
//         src="${e.previewImg}"
//         alt=""
//       />
//       <div class="project-card-box">
//         <h5 class="card-title">${e.name}</h5>
//         <p class="project-card-text">${e.type}</p>
//         <a class="project-card-link" href="project.html?project=project${e.id}">view project</a>
//       </div>
//     </li>`, '');
//     projectList.innerHTML = markup;
//     activeSimilarProj();
// }

// loadSimilarProjects();
// loadComment(0);

// questionForm.addEventListener("submit", event => {
//   event.preventDefault();
//   userQuestion.userName = event.currentTarget.user_name.value;
//   userQuestion.phone = event.currentTarget.user_tel.value;
//   userQuestion.message = event.currentTarget.user_message.value;
//   console.log(userQuestion);
//   event.currentTarget.reset();
// })

function activHeroSlider(index) {
  const step = heroList.firstElementChild.getBoundingClientRect();
  heroPagList
    .querySelector('.active-hero-pag')
    .classList.remove('active-hero-pag');
  heroList.style.transform = `translateX(${-index * step.width}px)`;
  heroPagList.children[index].classList.add('active-hero-pag');
}

heroLeftBtn.addEventListener('click', () => {
  heroIndex <= 0 ? (heroIndex = 3) : heroIndex--;
  activHeroSlider(heroIndex);
});

heroRightBtn.addEventListener('click', () => {
  heroIndex === 3 ? (heroIndex = 0) : heroIndex++;
  activHeroSlider(heroIndex);
});

heroList.addEventListener('touchstart', event => {
  startX = event.touches[0].clientX;
});

heroList.addEventListener('touchend', event => {
  const endX = event.changedTouches[0].clientX;
  if (endX > startX) {
    heroIndex <= 0 ? (heroIndex = 3) : heroIndex--;
  } else if (endX < startX) {
    heroIndex === 3 ? (heroIndex = 0) : heroIndex++;
  }
  activHeroSlider(heroIndex);
});

heroList.addEventListener('mouseover', event => {
  heroList.addEventListener('scroll', event => {
    console.log('d');
  });
});
