import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import{n as u}from"./assets/data-news-b920c27b.js";const c=document.querySelector(".post"),g=document.querySelector(".hero"),l=window.location.href,a=+l[l.length-1],s=new URL("/CreateX-project/assets/icons-d35276fb.svg",self.location).href;console.log(a);const e=u.filter(o=>o.id===a)[0];console.log(e,c);function h(){const o=`
    <img
      class="post-img"
      src="${e.img}"
      alt="News image"
    />
    <div class="container">
      ${e.post.reduce((n,t)=>{let i=`<p class="${t.type}">${t.text}</p>`;return t.type==="quote-text"?i=`<div class="quote">
            <svg class="quote-icon">
              <use href="${s}#icon-braces"></use>
            </svg>
            <p class="${t.type}">${t.text}</p>
          </div>`:t.type==="post-list"&&(i=`<ul class="post-list list">
            ${t.text.reduce((r,p)=>r+`<li>
                <svg class="post-list-icon">
                  <use href="${s}#icon-check"></use>
                </svg>
                ${p}
              </li>`,"")}
          </ul>`),n+i},"")}
      <div class="post-share">
        <p>Share:</p>
        <ul class="hero-soc-list list">
          <li>
            <a href="">
              <svg>
                <use href="${s}#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg>
                <use href="${s}#icon-linked"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg>
                <use href="${s}#icon-twitter"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>`;c.innerHTML=o}function v(){const o=`<div class="container">
    <p class="page-path">
      <span class="page-path-dark">Homepage / News</span> / ${e.title}
    </p>
    <h1 class="page-title">
      ${e.title}
    </h1>
    <div class="post-info">
      <ul class="post-date-list list">
        <li>${e.type}</li>
        <li class="post-date-decor-item"></li>
        <li>
          <svg class="post-comment-icon">
            <use href="${s}#icon-clock"></use>
          </svg>
          ${e.date}
        </li>
        <li class="post-date-decor-item"></li>
        <li class="post-comments">
          <svg class="post-comment-icon">
            <use href="${s}#icon-comments"></use>
          </svg>
          ${e.comments.length?e.comments.length:"No"} comments
        </li>
      </ul>
      <ul class="hero-soc-list list">
        <li>
          <a href="">
            <svg>
              <use href="${s}#icon-facebook"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg>
              <use href="${s}#icon-linked"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg>
              <use href="${s}#icon-twitter"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>`;g.innerHTML=o}v();h();
//# sourceMappingURL=commonHelpers6.js.map
