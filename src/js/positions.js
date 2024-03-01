const subBtn = document.querySelector("#sub-btn");
const cvBtn = document.querySelector("#cv-btn");
const subModal = document.querySelector(".sub-modal");
const cvModal = document.querySelector(".cv-modal");
const location = document.querySelector(".location-select-label");
const subForm = subModal.querySelector("form");
const cvForm = cvModal.querySelector("form");

const userSubInfo = {
    name: '',
    email: ''
}

const userCVInfo = {
    name: '',
    location: '',
    phone: '',
    email: '',
    message: '',
    cv: ''
}

subBtn.addEventListener("click", () => {
    subModal.classList.add("active");
    subModal.querySelector('.modal-close-btn').addEventListener(
        "click", () => {
            subModal.classList.remove("active");
        }
    )
})

cvBtn.addEventListener("click", () => {
    cvModal.classList.add("active");
    cvModal.querySelector('.modal-close-btn').addEventListener(
        "click", () => {
            cvModal.classList.remove("active");
        }
    )
})

location.addEventListener("click", event => {
    const list = event.currentTarget.querySelector("ul");
    const input = event.currentTarget.querySelector("input");
    list.classList.add("active");
    list.style.transform = "translateY(0%)";
    if (event.target.nodeName === 'LI') {
        input.value = event.target.textContent;
        list.style.transform = "translateY(-150%)";
        setTimeout(() => {
            list.classList.remove("active");
        }, 800)
    }
})

subForm.addEventListener("submit", event => {
    event.preventDefault();
    userSubInfo.name = event.currentTarget.elements.username.value;
    userSubInfo.email = event.currentTarget.elements.userEmail.value;
    console.log(userSubInfo);
    event.currentTarget.reset();
}) 

cvForm.addEventListener("submit", event => {
    event.preventDefault();
    console.log(event.currentTarget.elements.userLocation.value);
    userCVInfo.name = event.currentTarget.elements.username.value;
    userCVInfo.location = event.currentTarget.elements.userLocation.value;
    userCVInfo.email = event.currentTarget.elements.userEmail.value;
    userCVInfo.phone = event.currentTarget.elements.userPhone.value;
    userCVInfo.message = event.currentTarget.elements.userLetter.value;
    userCVInfo.cv = event.currentTarget.elements.userCV.value;
    console.log(userCVInfo);
}) 


