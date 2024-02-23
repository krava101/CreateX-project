import news from "../data/data-news";

const postSection = document.querySelector(".post");
const heroSection = document.querySelector(".hero");
const href = window.location.href;
const postId = +href[href.length - 1];
const iconUrl = new URL('/img/icons.svg', import.meta.url).href;

console.log(postId);
const currentPost = news.filter(post => post.id === postId)[0];
console.log(currentPost, postSection);

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

loadHero();
loadPost();