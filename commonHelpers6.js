import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import{n as u}from"./assets/data-news-5b3ac4ea.js";const l=document.querySelector(".post"),c=window.location.href,r=+c[c.length-1],t=new URL("/CreateX-project/assets/icons-d35276fb.svg",self.location).href;console.log(r);const i=u.filter(e=>e.id===r)[0];console.log(i,l);function f(){const e=`
    <img
      class="post-img"
      src="${i.img}"
      alt="News image"
    />
    <div class="container">
      ${i.post.reduce((n,s)=>{let o=`<p class="${s.type}">${s.text}</p>`;return s.type==="quote-text"?o=`<div class="quote">
            <svg class="quote-icon">
              <use href="${t}#icon-braces"></use>
            </svg>
            <p class="${s.type}">${s.text}</p>
          </div>`:s.type==="post-list"&&(o=`<ul class="post-list list">
            ${s.text.reduce((a,p)=>a+`<li>
                <svg class="post-list-icon">
                  <use href="${t}#icon-check"></use>
                </svg>
                ${p}
              </li>`,"")}
          </ul>`),n+o},"")}
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
    </div>`;l.innerHTML=e}f();
//# sourceMappingURL=commonHelpers6.js.map
