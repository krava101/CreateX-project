import history from "../data/data-history";
import offices from "../data/data-offices";

const historyImg = document.querySelector(".active-history-img");
const historySlider = document.querySelector("#history-slider");
const historyList = document.querySelector(".history-list");
const historyText = document.querySelector(".history-text");
const historyListArr = Array.from(historyList.children);
const officeLocation = document.querySelector(".map-location div");
const map = document.querySelector(".map-wrapper");
let historyIndex = 0;

function activeHistorySlider(num) {
    const currentHistory = history[num];
    historyListArr.forEach(e => e.classList.remove("active"));
    historyImg.src = currentHistory.image;
    historyText.textContent = currentHistory.text
    historyListArr[num].classList.add("active");
}

historySlider.addEventListener("click", event => {
    if (event.target.dataset.btn === "r") {
        historyIndex !== history.length - 1 ? historyIndex++ : historyIndex = 0;
        activeHistorySlider(historyIndex);
    } else if (event.target.dataset.btn === "l") {
        historyIndex >= 1 ? historyIndex-- : historyIndex = history.length - 1;
        activeHistorySlider(historyIndex);
    }
})

historyList.addEventListener("click", event => {
    if (event.target.type === "button") {
        historyIndex = historyListArr.indexOf(event.target.parentNode);
        activeHistorySlider(historyIndex);
    }
})

map.addEventListener("mouseover", event => {
    if (event.target.nodeName === "IMG" && event.target !== map.querySelector(".map-img")) {
        const currentOffice = offices.filter(e=> e.country.toLowerCase() === event.target.dataset.location)[0];
        const bottom = event.currentTarget.getBoundingClientRect().height - event.target.offsetTop;
        const left = event.target.offsetLeft;
        officeLocation.style.bottom = `${bottom-5}px`;
        officeLocation.style.left = `${left + 32}px`;
        officeLocation.classList.add("active");
        officeLocation.children[0].textContent = currentOffice.city + ", " + currentOffice.country;
        officeLocation.children[1].href = currentOffice.address;
    }
    map.addEventListener("mouseleave", event => {
        officeLocation.classList.remove("active");
    })
})

