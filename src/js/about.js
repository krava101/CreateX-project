import history from "../data/data-history";

const historyImg = document.querySelector(".active-history-img");
const historySlider = document.querySelector("#history-slider");
const historyList = document.querySelector(".history-list");
const historyText = document.querySelector(".history-text");
const historyListArr = Array.from(historyList.children);
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

