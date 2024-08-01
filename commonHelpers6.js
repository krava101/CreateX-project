import"./assets/header-4ffb22f8.js";/* empty css                     */import{n as c}from"./assets/data-news-d0acb961.js";const d=window.location.href,u=new URL(d).searchParams.get("post"),o=c.find(t=>t.id===u),g=document.getElementById("post-path"),x=document.getElementById("post-title"),h=document.getElementById("post-type"),f=document.getElementById("post-date"),_=document.getElementById("post-comments-num");x.textContent=o.title;g.textContent=`/ ${o.title}`;h.textContent=o.type;f.textContent=o.date;const n=o.comments.length;_.textContent=n?n>1?`${n} comments`:"1 comment":"No comments";const $=window.location.href,w=new URL($).searchParams.get("post"),p=c.find(t=>t.id===w),r=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href,a=document.getElementById("post-img"),i=document.getElementById("post-text"),y=document.querySelector(".post__img-loader");a.src=p.img;a.alt=`${p.title} image`;a.classList.remove("hidden");y.classList.add("hidden");const I=p.post.reduce((t,e)=>{let s="";switch(e.type){case"preview-text":s=`<p class="post__preview-text">${e.text}</p>`;break;case"quote-text":s=`
        <p class="post__quote">
          <svg class="post__quote-icon">
            <use href="${r}#icon-braces"></use>
          </svg>
          <p class="post__quote-text">${e.text}</p>
        </p>`;break;case"post-list":s=`
        <ul class="post__subtext-list list">
          ${e.text.reduce((m,l)=>m+`
          <li class="post__subtext-item">
            <svg class="post__subtext-icon">
              <use href="${r}#icon-check"></use>
            </svg>
            <p>${l}</p>
          </li>`,"")}
        </ul>`;break;default:s=`<p class="post__main-text">${e.text}</p>`;break}return t+`<li>${s}</li>`},"");i.innerHTML=I;i.classList.remove("loader");const b=window.location.href,v=new URL(b).searchParams.get("post");c.find(t=>t.id===v);new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href;document.querySelector(".comments");
//# sourceMappingURL=commonHelpers6.js.map
