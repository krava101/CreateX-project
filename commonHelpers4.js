import"./assets/header-92b20be3.js";/* empty css                     */import{n as r}from"./assets/data-news-fe2df6bb.js";const o=document.querySelector("#news-list"),u=document.querySelector(".news"),t=document.querySelector(".news-pagination-list"),h=document.querySelector("#next-page-btn"),w=document.querySelector(".news-nav-list");let d=Math.ceil(r.length/6),c="all",i=1;function m(e,s="all"){let n=0;s==="all"?n=e:n=e.filter(g=>g.type.toLowerCase()===s.toLowerCase());const a=n.slice((i-1)*6,i*6).reduce((g,l)=>g+`
    <li class="news-card">
      <img
        class="news-card-img"
        src="${l.img}"
        alt="News image"
      />
      <div class="news-card-box">
        <a class="card-title" href="./post.html?post=${l.id}">${l.title}</a>
        <ul class="news-date-list list">
          <li>${l.type}</li>
          <li class="news-date-decor-item"></li>
          <li>${l.date}</li>
          <li class="news-date-decor-item"></li>
          <li class="news-comments">
            <svg class="news-comment-icon">
              <use href="./img/icons.svg#icon-comments"></use>
            </svg>
            ${l.comments.length?l.comments.length:"No"} comments
          </li>
        </ul>
        <p class="news-card-text">
          ${l.previewText}
        </p>
      </div>
    </li>
    `,"");o.innerHTML=a,d=Math.ceil(n.length/6),setTimeout(()=>{o.style.height="100%"},200)}function p(){if(d===1)return h.style.display="none",t.innerHTML="";const s=Array.from({length:d},(n,a)=>a+1).slice(0,4).reduce((n,a)=>n+` 
      <li class="news-pag-item">
        <button class="news-pagination-btn" type="button">${a}</button>
      </li>
  `,"");t.innerHTML=s}m(r,c);p();t.children.length&&t.children[0].classList.add("active");t.addEventListener("click",e=>{e.target!==e.currentTarget&&(Array.from(t.children).forEach(s=>s.classList.remove("active")),o.style.height="1564px",i=+e.target.textContent,e.target.parentNode.classList.add("active"),u.scrollIntoView({block:"start"}),m(r,c))});h.addEventListener("click",()=>{Array.from(t.children).forEach(e=>e.classList.remove("active")),i<d&&(i++,i<=t.children.length&&t.children[i-1].classList.add("active"),o.style.height="1564px",u.scrollIntoView({block:"start"}),m(r,c))});w.addEventListener("click",e=>{Array.from(e.currentTarget.children).forEach(s=>s.classList.remove("active")),e.target.parentNode.classList.add("active"),i=1,c=e.target.dataset.filter,h.style.display="block",m(r,c),p(),t.children.length&&t.children[0].classList.add("active")});
//# sourceMappingURL=commonHelpers4.js.map
