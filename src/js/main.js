import { projects } from "../data/data-projects";
import activeSimilarProj from "./similar-projects";
import loadComment from "./comments";

const form = document.querySelector(".application-form");
const questionForm = document.querySelector(".question-form");
const heroList = document.querySelector(".hero-steps-list");
const heroLeftBtn = document.querySelector(".hero-left-btn");
const heroRightBtn = document.querySelector(".hero-right-btn");
const heroPagList = document.querySelector(".hero-pag-list");
const projectList = document.querySelector("#p-list");
let heroIndex = 0;

const userInfo = {
    userName: "", 
    phone: "",
    email: "",
    message: "",
    receive: ""
}

const userQuestion = {
    userName: "", 
    phone: "",
    message: ""
}

function loadSimilarProjects() {
    const markup = projects.reduce((acc, e) => acc + `
    <li class="project-card">
      <img
        class="project-img"
        src="${e.previewImg}"
        alt=""
      />
      <div class="project-card-box">
        <h5 class="card-title">${e.name}</h5>
        <p class="project-card-text">${e.type}</p>
        <a class="project-card-link" href="project.html?project=project${e.id}">view project</a>
      </div>
    </li>`, '');
    projectList.innerHTML = markup;
    activeSimilarProj();
}

loadSimilarProjects();
loadComment(0);

form.addEventListener("submit", event => {
    event.preventDefault();
    userInfo.userName = event.currentTarget.user_name.value;
    userInfo.phone = event.currentTarget.user_tel.value;
    userInfo.email = event.currentTarget.user_email.value;
    userInfo.message = event.currentTarget.user_message.value;
    userInfo.receive = event.currentTarget.user_receive.checked;
    console.log(userInfo);
    event.currentTarget.reset();
})


questionForm.addEventListener("submit", event => {
    event.preventDefault();
    userQuestion.userName = event.currentTarget.user_name.value;
    userQuestion.phone = event.currentTarget.user_tel.value;
    userQuestion.message = event.currentTarget.user_message.value;
    console.log(userQuestion);
    event.currentTarget.reset();
})

heroLeftBtn.addEventListener("click", event => {
    heroIndex <= 0 ? heroIndex = 0 : heroIndex--;
    activHeroSlider(heroIndex);
})

heroRightBtn.addEventListener("click", event => {
    heroIndex === 3 ? null : heroIndex++;
    activHeroSlider(heroIndex);
})

function activHeroSlider(index) {
    Array.from(heroPagList.children).map(e => e.classList.remove("active-hero-pag"));
    heroList.style.transform = `translateX(${-index * 1230}px)`;
    heroPagList.children[index].classList.add("active-hero-pag");
}