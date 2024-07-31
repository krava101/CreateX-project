import news from '../../data/data-news';

const newsList = document.querySelector('#news-list');
const filterList = document.getElementById('news-filter');

const iconUrl = new URL('/img/icons.svg', import.meta.url).href;
let pageIndex = 1;
let newsType = 'all';

loadNews(news, newsType);

function loadNews(list, type = 'all') {
  let arr = 0;
  if (type === 'all') {
    arr = list;
  } else {
    arr = list.filter(e => e.type.toLowerCase() === type.toLowerCase());
  }
  const markup = arr.slice((pageIndex - 1) * 6, pageIndex * 6).reduce(
    (acc, e) =>
      acc +
      `
      <li class="news__card">
        <div class="news__card-img-wrapper">
          <img
            class="news__card-img"
            src="${e.img}"
            alt="${e.title} image"
          />
        </div>
        <div class="news__card-box">
          <a class="news__card-title card-title" href="./post.html?post=${
            e.id
          }">${e.title}</a>
          <ul class="news__date-list list">
            <li>${e.type}</li>
            <li>${e.date}</li>
            <li class="news__comments">
              <svg class="news__comment-icon">
                <use href="${iconUrl}#icon-comments"></use>
              </svg>
              <p>
                ${
                  e.comments.length
                    ? e.comments.length +
                      (e.comments.length > 1 ? ' comments' : ' comment')
                    : 'No comments'
                }
              </p>
            </li>
          </ul>
          <p class="news__card-text">
          ${e.previewText}</p>
        </div>
      </li>`,
    ''
  );
  newsList.innerHTML = markup;
}

filterList.addEventListener('click', event => {
  if (event.target.nodeName === 'BUTTON') {
    const filterBtn = event.target;
    filterList.querySelector('.active').classList.remove('active');
    pageIndex = 1;
    newsType = filterBtn.dataset.filter;
    loadNews(news, newsType);
    filterBtn.parentNode.classList.add('active');
  }
});
