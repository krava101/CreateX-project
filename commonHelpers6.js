import"./assets/header-4ffb22f8.js";/* empty css                     */import{n as m}from"./assets/data-news-d0acb961.js";const x=window.location.href,_=new URL(x).searchParams.get("post"),o=m.find(t=>t.id===_),r=document.getElementById("post-path"),p=document.getElementById("post-title"),d=document.getElementById("post-type"),u=document.getElementById("post-date"),g=document.getElementById("post-comments-num");p.textContent=o.title;p.classList.remove("loader");r.textContent=`/ ${o.title}`;r.classList.remove("loader");d.textContent=o.type;d.classList.remove("loader");u.textContent=o.date;u.classList.remove("loader");const c=o.comments.length;g.textContent=c?c>1?`${c} comments`:"1 comment":"No comments";g.classList.remove("loader");const L=window.location.href,y=new URL(L).searchParams.get("post"),a=m.find(t=>t.id===y),i=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href,l=document.getElementById("post-img"),h=document.getElementById("post-text"),w=document.querySelector(".post__img-loader");l.src=a.img;l.alt=`${a.title} image`;l.classList.remove("hidden");w.classList.add("hidden");const I=a.post.reduce((t,e)=>{let s="";switch(e.type){case"preview-text":s=`<p class="post__preview-text">${e.text}</p>`;break;case"quote-text":s=`
        <p class="post__quote">
          <svg class="post__quote-icon">
            <use href="${i}#icon-braces"></use>
          </svg>
          <p class="post__quote-text">${e.text}</p>
        </p>`;break;case"post-list":s=`
        <ul class="post__subtext-list list">
          ${e.text.reduce((f,v)=>f+`
          <li class="post__subtext-item">
            <svg class="post__subtext-icon">
              <use href="${i}#icon-check"></use>
            </svg>
            <p>${v}</p>
          </li>`,"")}
        </ul>`;break;default:s=`<p class="post__main-text">${e.text}</p>`;break}return t+`<li>${s}</li>`},"");h.innerHTML=I;h.classList.remove("loader");const k=window.location.href,b=new URL(k).searchParams.get("post"),n=m.find(t=>t.id===b),C=new URL("/CreateX-project/assets/icons-97ef5a9b.svg",self.location).href,$=document.querySelector(".comments");n.comments.length===0&&$.classList.add("hidden");const B=`
    <div class="container">
      <p class="comments-title">${n.comments.length?n.comments.length:"No"} comments</p>
      <ul class="comments-list list">
        ${n.comments.reverse().reduce((t,e)=>t+`
            <li>
            <div class="comments-info">
              <p class="comments-nickname">${e.nickname}</p>
              <p class="comments-date">${e.date}</p>
            </div>
            <p class="comment">
              ${e.comment}
              <a href="" class="comment-reply">
                <svg>
                  <use href="${C}#icon-reply"></use>
                </svg> Reply
              </a>
            </p>
          </li>`,"")}
      </ul>
    </div>`;$.innerHTML=B;
//# sourceMappingURL=commonHelpers6.js.map
