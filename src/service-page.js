import { services } from "./data-services";

const offerSection = document.querySelector(".offer");
const href = window.location.href;
const projectNum = href[href.length - 1];
const iconUrl = new URL('/img/icons.svg', import.meta.url).href;

function loadService(projectNum){
  const currentService = services[projectNum];
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
                return acc + `<li>
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
              }, "")}
            </ul>
          </div>
        </div>
  `
  offerSection.innerHTML = markup;
}

loadService(projectNum);


const offersList = document.querySelector(".offer-list");


offersList.addEventListener("click", event => {
  if (event.target.nodeName === "LI") {
    event.target.classList.toggle("visible");
    if (event.target.classList.contains("visible")) {
      event.target.querySelector("use").href.baseVal = iconUrl + '#icon-minus';
    } else {
      setTimeout(() => {
        event.target.querySelector("use").href.baseVal = iconUrl + '#icon-plus';
      }, 400); 
    }
  }
})

