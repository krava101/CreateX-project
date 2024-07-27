const projectGallery = document.getElementById('project-gallery');
const projectSmallGallery = document.getElementById('project-small-gallery');
const projectInfo = document.getElementById('project-info');
const leftBtn = document.querySelector('.slider-left-btn');
const rightBtn = document.querySelector('.slider-right-btn');
let currentIndex = 0;

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
  if (event.target !== event.currentTarget) {
    currentIndex = Array.from(projectSmallGallery.children).indexOf(
      event.target
    );
    galleryScroll(currentIndex);
  }
});

function galleryScroll(index) {
  projectSmallGallery.querySelector('.active').classList.remove('active');
  projectGallery.style.transform = `translateX(-${currentIndex * 1230}px)`;
  projectSmallGallery.children[index].classList.add('active');
}
