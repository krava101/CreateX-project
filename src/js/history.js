import history from '../data/data-history';

const historyImg = document.querySelector('.active-history-img');
const historySlider = document.querySelector('#history-slider');
const historyList = document.querySelector('.history-list');
const historyText = document.querySelector('.history-text');
const historyPag = document.querySelector('#history-pag');
let historyIndex = 0;

function activeHistorySlider(num) {
  const currentHistory = history[num];
  historyImg.src = currentHistory.image;
  historyText.textContent = currentHistory.text;
  historyList.querySelector('.active').classList.remove('active');
  historyList.children[num].classList.add('active');
  historyPag.querySelector('.active').classList.remove('active');
  historyPag.children[num].classList.add('active');
}

historySlider.addEventListener('click', event => {
  if (event.target.dataset.btn === 'r') {
    historyIndex !== history.length - 1 ? historyIndex++ : (historyIndex = 0);
    activeHistorySlider(historyIndex);
  } else if (event.target.dataset.btn === 'l') {
    historyIndex >= 1 ? historyIndex-- : (historyIndex = history.length - 1);
    activeHistorySlider(historyIndex);
  }
});

historyList.addEventListener('click', event => {
  if (event.target.type === 'button') {
    historyIndex = [...historyList.children].indexOf(event.target.parentNode);
    activeHistorySlider(historyIndex);
  }
});
