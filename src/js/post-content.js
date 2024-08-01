import news from '../data/data-news';

const href = window.location.href;
const postId = new URL(href).searchParams.get('post');
const currentPost = news.find(post => post.id === postId);
const iconUrl = new URL('/img/icons.svg', import.meta.url).href;

const postImg = document.getElementById('post-img');
const postText = document.getElementById('post-text');
const postImgLoader = document.querySelector('.post__img-loader');

postImg.src = currentPost.img;
postImg.alt = `${currentPost.title} image`;
postImg.classList.remove('hidden');
postImgLoader.classList.add('hidden');

const postTextMarkup = currentPost.post.reduce((acc, e) => {
  let text = '';
  switch (e.type) {
    case 'preview-text':
      text = `<p class="post__preview-text">${e.text}</p>`;
      break;
    case 'quote-text':
      text = `
        <p class="post__quote">
          <svg class="post__quote-icon">
            <use href="${iconUrl}#icon-braces"></use>
          </svg>
          <p class="post__quote-text">${e.text}</p>
        </p>`;
      break;
    case 'post-list':
      const listMarkup = e.text.reduce(
        (accum, item) =>
          accum +
          `
          <li class="post__subtext-item">
            <svg class="post__subtext-icon">
              <use href="${iconUrl}#icon-check"></use>
            </svg>
            <p>${item}</p>
          </li>`,
        ''
      );
      text = `
        <ul class="post__subtext-list list">
          ${listMarkup}
        </ul>`;
      break;
    default:
      text = `<p class="post__main-text">${e.text}</p>`;
      break;
  }
  return acc + `<li>${text}</li>`;
}, '');

postText.innerHTML = postTextMarkup;
postText.classList.remove('loader');
