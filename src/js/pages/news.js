import news from '../../data/data-news';

const newsList = document.querySelector('#news-list');
const filterList = document.getElementById('news-filter');

const filterCurrentBtn = document.getElementById('news-filter-current');
const filterListMobile = document.getElementById('news-filter-mobile');

const iconUrl = new URL('/img/icons.svg', import.meta.url).href;
let pageIndex = 1;
let newsType = 'all';

loadNews(news, newsType);

filterCurrentBtn.addEventListener('click', handleOpenFilterMobile);

filterList.addEventListener('click', event => {
  if (event.target.nodeName === 'BUTTON') {
    const filterBtn = event.target;
    const activeFilter = filterList.querySelector('.active');
    if (activeFilter) {
      activeFilter.classList.remove('active');
    }
    pageIndex = 1;
    newsType = filterBtn.dataset.filter;
    loadNews(news, newsType);
    filterBtn.parentNode.classList.add('active');
  }
});

function handleOpenFilterMobile() {
  filterListMobile.classList.add('active');
  filterCurrentBtn.classList.add('active');
  filterListMobile.addEventListener('click', handleChooseFilter);
  filterCurrentBtn.addEventListener('click', handleCloseFilterMobile);
  document.addEventListener('click', clickOutsideTheFilter);
}

function clickOutsideTheFilter(event) {
  if (
    !filterListMobile.contains(event.target) &&
    event.target !== filterCurrentBtn
  ) {
    handleCloseFilterMobile();
  }
}

function handleCloseFilterMobile() {
  filterListMobile.classList.remove('active');
  filterCurrentBtn.classList.remove('active');
  filterListMobile.removeEventListener('click', handleChooseFilter);
  filterCurrentBtn.removeEventListener('click', handleCloseFilterMobile);
  filterCurrentBtn.addEventListener('click', handleOpenFilterMobile);
  document.removeEventListener('click', clickOutsideTheFilter);
}

function handleChooseFilter(event) {
  if (event.target.nodeName === 'BUTTON') {
    const filterBtn = event.target;
    filterCurrentBtn.textContent = filterBtn.textContent;
    const hiddenFilter = filterListMobile.querySelector('.hidden');
    if (hiddenFilter) {
      hiddenFilter.classList.remove('hidden');
    }
    filterBtn.parentNode.classList.add('hidden');
    pageIndex = 1;
    newsType = filterBtn.dataset.filter;
    loadNews(news, newsType);
    handleCloseFilterMobile();
  }
}

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
