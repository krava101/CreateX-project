import news from "../data/data-news";
import * as mainForm from "./main-form";

const postSection = document.querySelector(".post");
const heroSection = document.querySelector(".hero");
const commentsSection = document.querySelector(".comments");
const commentForm = document.querySelector("#commentForm");
const href = window.location.href;
const url = new URL(href);
const postId = +url.searchParams.get('post');
const iconUrl = new URL('/img/icons.svg', import.meta.url).href;

const newComment = {
  id: '',
  nickname:'',
  date:'',
  comment:'',
}

const currentPost = news.filter(post => post.id === postId)[0];

function loadPost() {
  const markup = `
    <img
      class="post-img"
      src="${currentPost.img}"
      alt="News image"
    />
    <div class="container">
      ${currentPost.post.reduce((acc, e) => {
        let text = `<p class="${e.type}">${e.text}</p>`;
        if (e.type === "quote-text") {
          text =
          `<div class="quote">
            <svg class="quote-icon">
              <use href="${iconUrl}#icon-braces"></use>
            </svg>
            <p class="${e.type}">${e.text}</p>
          </div>`;
        } else if (e.type === "post-list") {
          const listMarkup = e.text.reduce((accum, li) =>
            accum +
            `<li>
                <svg class="post-list-icon">
                  <use href="${iconUrl}#icon-check"></use>
                </svg>
                ${li}
              </li>`
          , '')
          text =
          `<ul class="post-list list">
            ${listMarkup}
          </ul>`
        }
        return acc + text
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
    </div>`
  postSection.innerHTML = markup;
}

function loadHero() {
  const markup =
  `<div class="container">
    <p class="page-path">
      <span class="page-path-dark">Homepage / News</span> / ${currentPost.title}
    </p>
    <h1 class="page-title">
      ${currentPost.title}
    </h1>
    <div class="post-info">
      <ul class="post-date-list list">
        <li>${currentPost.type}</li>
        <li class="post-date-decor-item"></li>
        <li>
          <svg class="post-comment-icon">
            <use href="${iconUrl}#icon-clock"></use>
          </svg>
          ${currentPost.date}
        </li>
        <li class="post-date-decor-item"></li>
        <li class="post-comments">
          <svg class="post-comment-icon">
            <use href="${iconUrl}#icon-comments"></use>
          </svg>
          ${currentPost.comments.length ? currentPost.comments.length : 'No' } comments
        </li>
      </ul>
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
  </div>`
  heroSection.innerHTML = markup;
}

function loadComments() {
  const markup = `
    <div class="container">
      <p class="comments-title">${currentPost.comments.length ? currentPost.comments.length : 'No'} comments</p>
      <ul class="comments-list list">
        ${currentPost.comments.reverse().reduce((acc, com) =>
          acc + `
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
          </li>`, '')}
      </ul>
    </div>`;
  commentsSection.innerHTML = markup;
}

loadHero();
loadPost();
loadComments();

function formatDate(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}

commentForm.addEventListener("submit", event => {
  event.preventDefault();
  newComment.id = Date.now();
  newComment.nickname = event.currentTarget.elements.username.value;
  newComment.date = formatDate(new Date());
  newComment.comment = event.currentTarget.elements.userComment.value;
  commentForm.reset();
  currentPost.comments.push(newComment);
  loadComments();

})