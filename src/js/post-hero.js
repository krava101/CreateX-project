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
postPath.textContent = `/ ${currentPost.title}`;
postType.textContent = currentPost.type;
postDate.textContent = currentPost.date;
const commNum = currentPost.comments.length;
postCommentsNum.textContent = commNum
  ? commNum > 1
    ? `${commNum} comments`
    : '1 comment'
  : 'No comments';
