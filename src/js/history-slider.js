import history from '../data/data-history';
import { touchSlider } from './helpers/touch-slider';

const historyImg = document.querySelector('.active-history-img');
const historyList = document.querySelector('.history-list');
const historyText = document.querySelector('.history-text');
const historyPag = document.querySelector('#history-pag');
const historyBtnRight = document.getElementById('history-btn-right');
const historyBtnLeft = document.getElementById('history-btn-left');
let historyIndex = 0;

touchSlider(historyImg, activeHistorySlider, historyIndex, history.length);

historyBtnRight.addEventListener('click', () => {
  historyIndex !== history.length - 1 ? historyIndex++ : (historyIndex = 0);
  activeHistorySlider(historyIndex);
});

historyBtnLeft.addEventListener('click', () => {
  historyIndex >= 1 ? historyIndex-- : (historyIndex = history.length - 1);
  activeHistorySlider(historyIndex);
});

historyList.addEventListener('click', event => {
  if (event.target.type === 'button') {
    historyIndex = [...historyList.children].indexOf(event.target.parentNode);
    activeHistorySlider(historyIndex);
  }
});

function activeHistorySlider(num) {
  const currentHistory = history[num];
  historyImg.src = currentHistory.image;
  historyText.textContent = currentHistory.text;
  historyList.querySelector('.active').classList.remove('active');
  historyList.children[num].classList.add('active');
  historyPag.querySelector('.active').classList.remove('active');
  historyPag.children[num].classList.add('active');
}
