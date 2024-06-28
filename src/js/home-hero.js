const heroList = document.querySelector('.hero-steps-list');
const heroLeftBtn = document.querySelector('.hero-left-btn');
const heroRightBtn = document.querySelector('.hero-right-btn');
const heroPagList = document.querySelector('.hero-pag-list');
let heroIndex = 0;
let startX;

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
    if (endX - startX > 70) {
      heroIndex <= 0 ? (heroIndex = 3) : heroIndex--;
    }
  } else if (endX < startX) {
    if (startX - endX > 70) {
      heroIndex === 3 ? (heroIndex = 0) : heroIndex++;
    }
  }
  activHeroSlider(heroIndex);
});
