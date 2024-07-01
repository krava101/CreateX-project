import comments from '../data/data-comments';

const comSec = document.querySelector('#comments');
const revLeftBtn = document.querySelector('#rev-left-btn');
const revRightBtn = document.querySelector('#rev-right-btn');
let revIndex = 0;

function loadComment(num) {
  const currentComment = comments[num];
  const markup = `
        <div class="review-owner">
          <img
            src="${currentComment.avatar}"
            alt="Client's avatar"
            class="reviews-avatar"
          />
          <span>
            <p class="reviews-nickname">${currentComment.nickname}</p>
            <p class="reviews-position">${
              currentComment.position +
              (currentComment.companyName !== ''
                ? ', ' + currentComment.companyName
                : '')
            }</p>
          </span>
        </div>
        <p class="reviews-text">
          ${currentComment.comment}
        </p>
    `;
  comSec.innerHTML = markup;
}

loadComment(revIndex);

revRightBtn.addEventListener('click', event => {
  revIndex === comments.length - 1 ? (revIndex = 0) : revIndex++;
  loadComment(revIndex);
});

revLeftBtn.addEventListener('click', event => {
  revIndex >= 1 ? revIndex-- : null;
  loadComment(revIndex);
});
