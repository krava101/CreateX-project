import { services } from '../data/data-services';
import { loadProjects } from './projects-slider.js';

const offerSection = document.querySelector('.offer');

const href = window.location.href;
const url = new URL(href);
const serviceNum = url.searchParams.get('service');
const iconUrl = new URL('/img/icons.svg', import.meta.url).href;

const currentService = services[serviceNum];
const markup = `
    <div class="container">
          <img
            class="offer-img"
            src="${currentService.previewImg}"
            alt="${currentService.type}"
          />
          <div class="offer-info">
            <h2 class="section-title">We offer</h2>
            <ul class="offer-list list">
              ${currentService.offers.reduce((acc, e) => {
                return (
                  acc +
                  `<li>
                <h4 class="offer-list-title">
                  <svg class="offer-list-icon">
                    <use href=${iconUrl + '#icon-plus'}></use>
                  </svg>
                  ${e}
                </h4>
                <p class="offer-list-about">
                  Adipiscing nunc arcu enim elit mattis eu placerat proin.
                  Imperdiet elementum faucibus dignissim purus. Fusce parturient
                  diam magna ullamcorper morbi semper massa ac facilisis.
                </p>
              </li>`
                );
              }, '')}
            </ul>
          </div>
        </div>
  `;
offerSection.innerHTML = markup;

loadProjects(null, currentService.status);

document.querySelector('.offer-list').addEventListener('click', event => {
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
