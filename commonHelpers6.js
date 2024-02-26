import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import{n as p}from"./assets/data-news-fe2df6bb.js";const n=document.querySelector(".post"),u=document.querySelector(".hero"),d=document.querySelector(".comments"),i=window.location.href,a=+i[i.length-1],t=new URL("/CreateX-project/assets/icons-fd326858.svg",self.location).href;console.log(a);const s=p.filter(o=>o.id===a)[0];console.log(s,n);function g(){const o=`
    <img
      class="post-img"
      src="${s.img}"
      alt="News image"
    />
    <div class="container">
      ${s.post.reduce((c,e)=>{let l=`<p class="${e.type}">${e.text}</p>`;return e.type==="quote-text"?l=`<div class="quote">
            <svg class="quote-icon">
              <use href="${t}#icon-braces"></use>
            </svg>
            <p class="${e.type}">${e.text}</p>
          </div>`:e.type==="post-list"&&(l=`<ul class="post-list list">
            ${e.text.reduce((r,m)=>r+`<li>
                <svg class="post-list-icon">
                  <use href="${t}#icon-check"></use>
                </svg>
                ${m}
              </li>`,"")}
          </ul>`),c+l},"")}
      <div class="post-share">
        <p>Share:</p>
        <ul class="hero-soc-list list">
          <li>
            <a href="">
              <svg>
                <use href="${t}#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg>
                <use href="${t}#icon-linked"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg>
                <use href="${t}#icon-twitter"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>`;n.innerHTML=o}function v(){const o=`<div class="container">
    <p class="page-path">
      <span class="page-path-dark">Homepage / News</span> / ${s.title}
    </p>
    <h1 class="page-title">
      ${s.title}
    </h1>
    <div class="post-info">
      <ul class="post-date-list list">
        <li>${s.type}</li>
        <li class="post-date-decor-item"></li>
        <li>
          <svg class="post-comment-icon">
            <use href="${t}#icon-clock"></use>
          </svg>
          ${s.date}
        </li>
        <li class="post-date-decor-item"></li>
        <li class="post-comments">
          <svg class="post-comment-icon">
            <use href="${t}#icon-comments"></use>
          </svg>
          ${s.comments.length?s.comments.length:"No"} comments
        </li>
      </ul>
      <ul class="hero-soc-list list">
        <li>
          <a href="">
            <svg>
              <use href="${t}#icon-facebook"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg>
              <use href="${t}#icon-linked"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg>
              <use href="${t}#icon-twitter"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>`;u.innerHTML=o}function h(){const o=`
    <div class="container">
      <p class="comments-title">${s.comments.length?s.comments.length:"No"} comments</p>
      <ul class="comments-list list">
        ${s.comments.reverse().reduce((c,e)=>c+`
            <li>
            <div class="comments-info">
              <p class="comments-nickname">${e.nickname}</p>
              <p class="comments-date">${e.date}</p>
            </div>
            <p class="comment">
              ${e.comment}
              <a href="" class="comment-reply">
                <svg>
                  <use href="${t}#icon-reply"></use>
                </svg> Reply
              </a>
            </p>
          </li>`,"")}
      </ul>
    </div>`;d.innerHTML=o}v();g();h();
//# sourceMappingURL=commonHelpers6.js.map
