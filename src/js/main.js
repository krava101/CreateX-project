const form = document.querySelector(".application-form");
const questionForm = document.querySelector(".question-form");
const projectsList = document.querySelector(".works-list");
const projectsLeftBtn = document.querySelector(".p-left-arrow-btn");
const projectsRightBtn = document.querySelector(".p-right-arrow-btn");
const heroList = document.querySelector(".hero-steps-list");
const heroLeftBtn = document.querySelector(".hero-left-btn");
const heroRightBtn = document.querySelector(".hero-right-btn");
const heroPagList = document.querySelector(".hero-pag-list");
let projectsIndex = 0;
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

projectsLeftBtn.addEventListener("click", () => {
    projectsIndex <= 0 ? projectsIndex = 0 : projectsIndex--;
    activeProjectsSlider(projectsIndex);
})

projectsRightBtn.addEventListener("click", () => {
    projectsIndex === projectsList.children.length-2 ? null : projectsIndex++;
    activeProjectsSlider(projectsIndex);
})

function activeProjectsSlider(index) {
    const cardWidth = projectsList.children[0].getBoundingClientRect().width + 30;
    projectsList.style.transform = `translateX(${-index*cardWidth}px)`;
}

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