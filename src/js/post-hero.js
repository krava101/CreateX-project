import news from '../data/data-news.js';

const href = window.location.href;
const postId = new URL(href).searchParams.get('post');
const currentPost = news.find(post => post.id === postId);

const postPath = document.getElementById('post-path');
const postTitle = document.getElementById('post-title');
const postType = document.getElementById('post-type');
const postDate = document.getElementById('post-date');
const postCommentsNum = document.getElementById('post-comments-num');

postTitle.textContent = currentPost.title;
postTitle.classList.remove('loader');
postPath.textContent = `/ ${currentPost.title}`;
postPath.classList.remove('loader');

postType.textContent = currentPost.type;
postType.classList.remove('loader');
postDate.textContent = currentPost.date;
postDate.classList.remove('loader');
const commNum = currentPost.comments.length;
postCommentsNum.textContent = commNum
  ? commNum > 1
    ? `${commNum} comments`
    : '1 comment'
  : 'No comments';
postCommentsNum.classList.remove('loader');
