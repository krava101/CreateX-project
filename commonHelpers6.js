import"./assets/header-4ffb22f8.js";/* empty css                     */import{n as m}from"./assets/data-news-d0acb961.js";const $=window.location.href,v=new URL($).searchParams.get("post"),o=m.find(t=>t.id===v),r=document.getElementById("post-path"),p=document.getElementById("post-title"),d=document.getElementById("post-type"),u=document.getElementById("post-date"),_=document.getElementById("post-comments-num");p.textContent=o.title;p.classList.remove("loader");r.textContent=`/ ${o.title}`;r.classList.remove("loader");d.textContent=o.type;d.classList.remove("loader");u.textContent=o.date;u.classList.remove("loader");const n=o.comments.length;_.textContent=n?n>1?`${n} comments`:"1 comment":"No comments";_.classList.remove("loader");const y=window.location.href,L=new URL(y).searchParams.get("post"),a=m.find(t=>t.id===L),i=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href,l=document.getElementById("post-img"),g=document.getElementById("post-text"),w=document.querySelector(".post__img-loader");l.src=a.img;l.alt=`${a.title} image`;l.classList.remove("hidden");w.classList.add("hidden");const I=a.post.reduce((t,e)=>{let s="";switch(e.type){case"preview-text":s=`<p class="post__preview-text">${e.text}</p>`;break;case"quote-text":s=`
        <p class="post__quote">
          <svg class="post__quote-icon">
            <use href="${i}#icon-braces"></use>
          </svg>
          <p class="post__quote-text">${e.text}</p>
        </p>`;break;case"post-list":s=`
        <ul class="post__subtext-list list">
          ${e.text.reduce((f,x)=>f+`
          <li class="post__subtext-item">
            <svg class="post__subtext-icon">
              <use href="${i}#icon-check"></use>
            </svg>
            <p>${x}</p>
          </li>`,"")}
        </ul>`;break;default:s=`<p class="post__main-text">${e.text}</p>`;break}return t+`<li>${s}</li>`},"");g.innerHTML=I;g.classList.remove("loader");const b=window.location.href,k=new URL(b).searchParams.get("post"),h=m.find(t=>t.id===k),c=h.comments.length,B=document.querySelector(".comments");c===0&&B.classList.add("hidden");const C=document.getElementById("post-comments-title"),E=document.getElementById("post-comments"),P=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href;C.textContent=c>1?`${c} comments`:"1 comment";const T=h.comments.reverse().reduce((t,e)=>t+`
    <li class="comments__item">
      <div class="comments__info">
        <p class="comments__nickname">${e.nickname}</p>
        <p class="comments__date">${e.date}</p>
      </div>
      <p class="comments__text">
        ${e.comment}
        <button class="comments__reply" href="">
          <svg>
            <use href="${P}#icon-reply"></use>
          </svg> 
          <p>Reply</p>
        </button>
      </p>
    </li>`,"");E.innerHTML=T;
//# sourceMappingURL=commonHelpers6.js.map
