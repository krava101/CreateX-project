import news from '../data/data-news.js';

const newsList = document.getElementById('newsList');

const content = news.slice(0, 3).reduce(
  (acc, e, i) =>
    acc +
    `
    <li class="news-card">
      <div class="news-card-img-wrapper">
        <img
          class="news-card-img"
          src="${e.img}"
          alt="${e.title} image"
        />
      </div>
      <div class="news-card-content">
        <a class="card-title" href="./post.html?post=${e.id}">${e.title}</a>
        <ul class="news-date-list list">
          <li>${e.type}</li>
          <li>${e.date}</li>
          <li class="news-comments">
            <svg class="news-comment-icon">
              <use href="/img/icons.svg#icon-comments"></use>
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
        <p class="news-card-text ${i !== 0 ? 'hidden' : ''}">
        ${e.previewText}</p>
      </div>
    </li>
    `,
  ''
);

newsList.innerHTML = content;
