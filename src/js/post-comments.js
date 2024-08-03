import news from '../data/data-news.js';

const href = window.location.href;
const postId = new URL(href).searchParams.get('post');

const currentPost = news.find(post => post.id === postId);
const commentsNum = currentPost.comments.length;

const commentsSection = document.querySelector('.comments');
if (commentsNum === 0) {
  commentsSection.classList.add('hidden');
}

const commentsTitle = document.getElementById('post-comments-title');
const commentsList = document.getElementById('post-comments');
const iconUrl = new URL('/img/icons.svg', import.meta.url).href;

commentsTitle.textContent =
  commentsNum > 1 ? `${commentsNum} comments` : '1 comment';

const commentsMarkup = currentPost.comments.reverse().reduce(
  (acc, com) =>
    acc +
    `
    <li class="comments__item">
      <div class="comments__info">
        <p class="comments__nickname">${com.nickname}</p>
        <p class="comments__date">${com.date}</p>
      </div>
      <p class="comments__text">
        ${com.comment}
        <button class="comments__reply" href="">
          <svg>
            <use href="${iconUrl}#icon-reply"></use>
          </svg> 
          <p>Reply</p>
        </button>
      </p>
    </li>`,
  ''
);
commentsList.innerHTML = commentsMarkup;
