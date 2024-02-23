import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import{n as r}from"./assets/data-news-5b3ac4ea.js";const o=document.querySelector("#news-list"),u=document.querySelector(".news"),t=document.querySelector(".news-pagination-list"),p=document.querySelector("#next-page-btn"),w=document.querySelector(".news-nav-list");let d=Math.ceil(r.length/6),n="all",i=1;function m(e,s="all"){let l=0;s==="all"?l=e:l=e.filter(g=>g.type.toLowerCase()===s.toLowerCase());const c=l.slice((i-1)*6,i*6).reduce((g,a)=>g+`
    <li class="news-card">
      <img
        class="news-card-img"
        src="${a.img}"
        alt="News image"
      />
      <div class="news-card-box">
        <a class="card-title" href="./post.html?post=${a.id}">${a.title}</a>
        <ul class="news-date-list list">
          <li>${a.type}</li>
          <li class="news-date-decor-item"></li>
          <li>${a.date}</li>
          <li class="news-date-decor-item"></li>
          <li class="news-comments">
            <svg class="news-comment-icon">
              <use href="./img/icons.svg#icon-comments"></use>
            </svg>
            ${a.comments.length} comments
          </li>
        </ul>
        <p class="news-card-text">
          ${a.previewText}
        </p>
      </div>
    </li>
    `,"");o.innerHTML=c,d=Math.ceil(l.length/6),setTimeout(()=>{o.style.height="100%"},200)}function h(){if(d===1)return p.style.display="none",t.innerHTML="";const s=Array.from({length:d},(l,c)=>c+1).slice(0,4).reduce((l,c)=>l+` 
      <li class="news-pag-item">
        <button class="news-pagination-btn" type="button">${c}</button>
      </li>
  `,"");t.innerHTML=s}m(r,n);h();t.children[0].classList.add("active");t.addEventListener("click",e=>{e.target!==e.currentTarget&&(Array.from(t.children).forEach(s=>s.classList.remove("active")),o.style.height="1564px",i=+e.target.textContent,e.target.parentNode.classList.add("active"),u.scrollIntoView({block:"start"}),m(r,n))});p.addEventListener("click",()=>{Array.from(t.children).forEach(e=>e.classList.remove("active")),i<d&&(i++,i<=t.children.length&&t.children[i-1].classList.add("active"),o.style.height="1564px",u.scrollIntoView({block:"start"}),m(r,n))});w.addEventListener("click",e=>{Array.from(e.currentTarget.children).forEach(s=>s.classList.remove("active")),e.target.parentNode.classList.add("active"),i=1,n=e.target.dataset.filter,p.style.display="block",m(r,n),h(),t.children[0].classList.add("active")});
//# sourceMappingURL=commonHelpers4.js.map
