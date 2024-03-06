import { services } from "../data/data-services";
import { projects } from "../data/data-projects";
import activeSimilarProj from "./similar-projects";
import * as mainForm from "./main-form";

const offerSection = document.querySelector(".offer");
const similarList = document.querySelector("#p-list");
const href = window.location.href;
const url = new URL(href);
const serviceNum = url.searchParams.get('service');
const iconUrl = new URL('/img/icons.svg', import.meta.url).href;

function loadService(serviceNum){
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

  similarProjects(currentService.status);
  activeSimilarProj();
}

loadService(serviceNum);


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

function similarProjects(type) {
  const markup = projects.filter(e => e.status === type).reduce((acc, e) => acc + `
    <li class="project-card">
      <img
        class="project-img"
        src="${e.previewImg}"
        alt=""
      />
      <div class="project-card-box">
        <h5 class="card-title">${e.name}</h5>
        <p class="project-card-text">${e.type}</p>
        <a class="project-card-link" href="project.html?project=${e.id}">view project</a>
      </div>
    </li>`, '');
  
  similarList.innerHTML = markup;
}
