import news from '../../data/data-news';
import '../post-hero.js';
import '../post-content.js';

const href = window.location.href;
const postId = new URL(href).searchParams.get('post');
const currentPost = news.find(post => post.id === postId);
const iconUrl = new URL('/img/icons.svg', import.meta.url).href;

const commentsSection = document.querySelector('.comments');

function loadComments() {
  const markup = `
    <div class="container">
      <p class="comments-title">${
        currentPost.comments.length ? currentPost.comments.length : 'No'
      } comments</p>
      <ul class="comments-list list">
        ${currentPost.comments.reverse().reduce(
          (acc, com) =>
            acc +
            `
            <li>
            <div class="comments-info">
              <p class="comments-nickname">${com.nickname}</p>
              <p class="comments-date">${com.date}</p>
            </div>
            <p class="comment">
              ${com.comment}
              <a href="" class="comment-reply">
                <svg>
                  <use href="${iconUrl}#icon-reply"></use>
                </svg> Reply
              </a>
            </p>
          </li>`,
          ''
        )}
      </ul>
    </div>`;
  commentsSection.innerHTML = markup;
}

// const newComment = {
//   id: '',
//   nickname: '',
//   date: '',
//   comment: '',
// };

// commentForm.addEventListener('submit', event => {
//   event.preventDefault();
//   newComment.id = Date.now();
//   newComment.nickname = event.currentTarget.elements.username.value;
//   newComment.date = dateFormater(new Date());
//   newComment.comment = event.currentTarget.elements.userComment.value;
//   commentForm.reset();
//   currentPost.comments.push(newComment);
//   loadComments();
// });
