import TouchSlider from './helpers/touch-slider';

const projectGallery = document.getElementById('project-gallery');
const projectSmallGallery = document.getElementById('project-small-gallery');
const leftBtn = document.querySelector('.project__gallery-btn_left');
const rightBtn = document.querySelector('.project__gallery-btn_right');
let currentIndex = 0;

const slider = new TouchSlider(projectGallery, galleryScroll, 6);

leftBtn.addEventListener('click', () => {
  currentIndex <= 0
    ? (currentIndex = projectGallery.children.length - 1)
    : currentIndex--;
  galleryScroll(currentIndex);
});

rightBtn.addEventListener('click', () => {
  currentIndex === projectGallery.children.length - 1
    ? (currentIndex = 0)
    : currentIndex++;
  galleryScroll(currentIndex);
});

projectSmallGallery.addEventListener('click', event => {
  const target = event.target;
  if (target.nodeName === 'BUTTON') {
    currentIndex = [...projectSmallGallery.children].indexOf(target.parentNode);
    galleryScroll(currentIndex);
  }
});

function galleryScroll(index) {
  currentIndex = index;
  slider.index = currentIndex;
  projectSmallGallery.querySelector('.active').classList.remove('active');
  const imgWidth = projectGallery.children[0].getBoundingClientRect().width;
  projectGallery.style.transform = `translateX(-${index * imgWidth}px)`;
  projectSmallGallery.children[index].classList.add('active');
}
