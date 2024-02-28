import"./assets/main-form-2f40e1ce.js";/* empty css                     */import{n as d}from"./assets/data-news-fe2df6bb.js";const g=document.querySelector(".post"),h=document.querySelector(".hero"),v=document.querySelector(".comments"),a=document.querySelector("#commentForm"),r=window.location.href,f=+r[r.length-1],o=new URL("/CreateX-project/assets/icons-fd326858.svg",self.location).href,i={id:"",nickname:"",date:"",comment:""},t=d.filter(e=>e.id===f)[0];function $(){const e=`
    <img
      class="post-img"
      src="${t.img}"
      alt="News image"
    />
    <div class="container">
      ${t.post.reduce((c,s)=>{let n=`<p class="${s.type}">${s.text}</p>`;return s.type==="quote-text"?n=`<div class="quote">
            <svg class="quote-icon">
              <use href="${o}#icon-braces"></use>
            </svg>
            <p class="${s.type}">${s.text}</p>
          </div>`:s.type==="post-list"&&(n=`<ul class="post-list list">
            ${s.text.reduce((u,p)=>u+`<li>
                <svg class="post-list-icon">
                  <use href="${o}#icon-check"></use>
                </svg>
                ${p}
              </li>`,"")}
          </ul>`),c+n},"")}
      <div class="post-share">
        <p>Share:</p>
        <ul class="hero-soc-list list">
          <li>
            <a href="">
              <svg>
                <use href="${o}#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg>
                <use href="${o}#icon-linked"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg>
                <use href="${o}#icon-twitter"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>`;g.innerHTML=e}function k(){const e=`<div class="container">
    <p class="page-path">
      <span class="page-path-dark">Homepage / News</span> / ${t.title}
    </p>
    <h1 class="page-title">
      ${t.title}
    </h1>
    <div class="post-info">
      <ul class="post-date-list list">
        <li>${t.type}</li>
        <li class="post-date-decor-item"></li>
        <li>
          <svg class="post-comment-icon">
            <use href="${o}#icon-clock"></use>
          </svg>
          ${t.date}
        </li>
        <li class="post-date-decor-item"></li>
        <li class="post-comments">
          <svg class="post-comment-icon">
            <use href="${o}#icon-comments"></use>
          </svg>
          ${t.comments.length?t.comments.length:"No"} comments
        </li>
      </ul>
      <ul class="hero-soc-list list">
        <li>
          <a href="">
            <svg>
              <use href="${o}#icon-facebook"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg>
              <use href="${o}#icon-linked"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg>
              <use href="${o}#icon-twitter"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>`;h.innerHTML=e}function m(){const e=`
    <div class="container">
      <p class="comments-title">${t.comments.length?t.comments.length:"No"} comments</p>
      <ul class="comments-list list">
        ${t.comments.reverse().reduce((c,s)=>c+`
            <li>
            <div class="comments-info">
              <p class="comments-nickname">${s.nickname}</p>
              <p class="comments-date">${s.date}</p>
            </div>
            <p class="comment">
              ${s.comment}
              <a href="" class="comment-reply">
                <svg>
                  <use href="${o}#icon-reply"></use>
                </svg> Reply
              </a>
            </p>
          </li>`,"")}
      </ul>
    </div>`;v.innerHTML=e}k();$();m();function y(e){const c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=e.getDate(),n=c[e.getMonth()],l=e.getFullYear();return`${s} ${n}, ${l}`}a.addEventListener("submit",e=>{e.preventDefault(),i.id=Date.now(),i.nickname=e.currentTarget.elements.username.value,i.date=y(new Date),i.comment=e.currentTarget.elements.userComment.value,a.reset(),t.comments.push(i),m()});
//# sourceMappingURL=commonHelpers6.js.map
