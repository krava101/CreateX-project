import { services } from '../data/data-services';
import { loadProjects } from './projects-slider.js';

const offerSection = document.querySelector('.offer__container');

const href = window.location.href;
const url = new URL(href);
const serviceNum = url.searchParams.get('service');
const iconUrl = new URL('/img/icons.svg', import.meta.url).href;

const currentService = services[serviceNum];

const serviceTitle = document.getElementById('service-title');
const servicePath = document.getElementById('service-path');
serviceTitle.textContent = currentService.type;
servicePath.textContent = currentService.type;

const markup = `
    <img
      class="offer__img"
      src="${currentService.previewImg}"
      alt="${currentService.type}"
    />
    <div class="offer__info">
      <h2 class="offer__title section-title">We offer</h2>
      <ul class="offer__list list">
        ${currentService.offers.reduce((acc, e) => {
          return (
            acc +
            `<li>
              <h4 class="offer__list-title">
                <svg class="offer__list-icon">
                  <use href=${iconUrl + '#icon-plus'}></use>
                </svg>
                ${e}
              </h4>
              <p class="offer__list-about">
                Adipiscing nunc arcu enim elit mattis eu placerat proin.
                Imperdiet elementum faucibus dignissim purus. Fusce parturient
                diam magna ullamcorper morbi semper massa ac facilisis.
              </p>
            </li>`
          );
        }, '')}
      </ul>
    </div>
  `;
offerSection.innerHTML = markup;

loadProjects(null, currentService.status);

document.querySelector('.offer__list').addEventListener('click', event => {
  if (event.target.nodeName === 'LI') {
    event.target.classList.toggle('visible');
    if (event.target.classList.contains('visible')) {
      event.target.querySelector('use').href.baseVal = iconUrl + '#icon-minus';
    } else {
      setTimeout(() => {
        event.target.querySelector('use').href.baseVal = iconUrl + '#icon-plus';
      }, 400);
    }
  }
});
