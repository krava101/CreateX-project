import news from '../../data/data-news';

const newsList = document.querySelector('#news-list');
const newsSection = document.querySelector('.news');
const pagList = document.querySelector('.news-pagination-list');
const nextBtn = document.querySelector('#next-page-btn');
const filterList = document.querySelector('.news-nav-list');
let maxPages = Math.ceil(news.length / 6);
let newsType = 'all';
let pageIndex = 1;

function loadNews(newsArr, type = 'all') {
  let arr = 0;
  if (type === 'all') {
    arr = newsArr;
  } else {
    arr = newsArr.filter(e => e.type.toLowerCase() === type.toLowerCase());
  }
  const markup = arr.slice((pageIndex - 1) * 6, pageIndex * 6).reduce(
    (acc, e) =>
      acc +
      `
    <li class="news-card">
      <img
        class="news-card-img"
        src="${e.img}"
        alt="News image"
      />
      <div class="news-card-box">
        <a class="card-title" href="./post.html?post=${e.id}">${e.title}</a>
        <ul class="news-date-list list">
          <li>${e.type}</li>
          <li class="news-date-decor-item"></li>
          <li>${e.date}</li>
          <li class="news-date-decor-item"></li>
          <li class="news-comments">
            <svg class="news-comment-icon">
              <use href="./img/icons.svg#icon-comments"></use>
            </svg>
            ${e.comments.length ? e.comments.length : 'No'} comments
          </li>
        </ul>
        <p class="news-card-text">
          ${e.previewText}
        </p>
      </div>
    </li>
    `,
    ''
  );
  newsList.innerHTML = markup;
  maxPages = Math.ceil(arr.length / 6);
  setTimeout(() => {
    newsList.style.height = '100%';
  }, 200);
}

function loadPag() {
  if (maxPages === 1) {
    nextBtn.style.display = 'none';
    return (pagList.innerHTML = '');
  }
  const pagArr = Array.from({ length: maxPages }, (_, i) => i + 1);
  const markup = pagArr.slice(0, 4).reduce(
    (acc, e) =>
      acc +
      ` 
      <li class="news-pag-item">
        <button class="news-pagination-btn" type="button">${e}</button>
      </li>
  `,
    ''
  );
  pagList.innerHTML = markup;
}
loadNews(news, newsType);
loadPag();
pagList.children.length ? pagList.children[0].classList.add('active') : null;

pagList.addEventListener('click', event => {
  if (event.target !== event.currentTarget) {
    Array.from(pagList.children).forEach(e => e.classList.remove('active'));
    newsList.style.height = '1564px';
    pageIndex = +event.target.textContent;
    event.target.parentNode.classList.add('active');
    newsSection.scrollIntoView({ block: 'start' });
    loadNews(news, newsType);
  }
});

nextBtn.addEventListener('click', () => {
  Array.from(pagList.children).forEach(e => e.classList.remove('active'));
  if (pageIndex < maxPages) {
    pageIndex++;
    if (pageIndex <= pagList.children.length) {
      pagList.children[pageIndex - 1].classList.add('active');
    }
    newsList.style.height = '1564px';
    newsSection.scrollIntoView({ block: 'start' });
    loadNews(news, newsType);
  }
});

filterList.addEventListener('click', event => {
  Array.from(event.currentTarget.children).forEach(e =>
    e.classList.remove('active')
  );
  event.target.parentNode.classList.add('active');
  pageIndex = 1;
  newsType = event.target.dataset.filter;
  nextBtn.style.display = 'block';
  loadNews(news, newsType);
  loadPag();
  pagList.children.length ? pagList.children[0].classList.add('active') : null;
});
