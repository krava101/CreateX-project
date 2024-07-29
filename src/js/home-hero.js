import { touchSlider } from './helpers/touch-slider';

const heroList = document.querySelector('.hero-steps-list');
const heroLeftBtn = document.querySelector('.hero-left-btn');
const heroRightBtn = document.querySelector('.hero-right-btn');
const heroPagList = document.querySelector('.hero-pag-list');
let heroIndex = 0;

touchSlider(heroList, activHeroSlider, heroIndex);

heroLeftBtn.addEventListener('click', () => {
  heroIndex <= 0 ? (heroIndex = heroList.children.length - 1) : heroIndex--;
  activHeroSlider(heroIndex);
});

heroRightBtn.addEventListener('click', () => {
  heroIndex === heroList.children.length - 1 ? (heroIndex = 0) : heroIndex++;
  activHeroSlider(heroIndex);
});

function activHeroSlider(index) {
  const step = heroList.firstElementChild.getBoundingClientRect();
  heroPagList
    .querySelector('.active-hero-pag')
    .classList.remove('active-hero-pag');
  heroList.style.transform = `translateX(${-index * step.width}px)`;
  heroPagList.children[index].classList.add('active-hero-pag');
}
