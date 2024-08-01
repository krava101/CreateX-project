import news from '../../data/data-news';
import '../post-hero.js';
import { dateFormater } from '../helpers/date-formater.js';

const href = window.location.href;
const postId = new URL(href).searchParams.get('post');
const currentPost = news.find(post => post.id === postId);

const postSection = document.querySelector('.post');
const commentsSection = document.querySelector('.comments');
const commentForm = document.querySelector('#commentForm');

// const newComment = {
//   id: '',
//   nickname: '',
//   date: '',
//   comment: '',
// };

function loadPost() {
  const markup = `
    <div class="container">
      <img
        class="post-img"
        src="${currentPost.img}"
        alt="News image"
      />
      ${currentPost.post.reduce((acc, e) => {
        let text = `<p class="${e.type}">${e.text}</p>`;
        if (e.type === 'quote-text') {
          text = `
          <div class="quote">
            <svg class="quote-icon">
              <use href="${iconUrl}#icon-braces"></use>
            </svg>
            <p class="${e.type}">${e.text}</p>
          </div>`;
        } else if (e.type === 'post-list') {
          const listMarkup = e.text.reduce(
            (accum, li) =>
              accum +
              `<li>
                <svg class="post-list-icon">
                  <use href="${iconUrl}#icon-check"></use>
                </svg>
                ${li}
              </li>`,
            ''
          );
          text = `<ul class="post-list list">
            ${listMarkup}
          </ul>`;
        }
        return acc + text;
      }, '')}
      <div class="post-share">
        <p>Share:</p>
        <ul class="hero-soc-list list">
          <li>
            <a href="">
              <svg>
                <use href="${iconUrl}#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg>
                <use href="${iconUrl}#icon-linked"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg>
                <use href="${iconUrl}#icon-twitter"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>`;
  postSection.innerHTML = markup;
}

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
