const a=[{id:0,avatar:new URL("/CreateX-project/assets/project-1-68d98b07.jpg",self.location).href,comment:"Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ",nickname:"Shawn Edwards",position:"HR Manager",companyName:"WiPo"},{id:1,avatar:new URL("/CreateX-project/assets/project-6-5d8ae179.jpg",self.location).href,comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ratione delectus adipisci tenetur a exercitationem cumque vitae molestiae ad, odio sit, dignissimos ipsa iusto debitis cupiditate necessitatibus! Aliquam, voluptates iure?",nickname:"Lo Wung",position:"General Director",companyName:"MSU Group"},{id:2,avatar:new URL("/CreateX-project/assets/project-2-999359c8.jpg",self.location).href,comment:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, dolorum, minima earum saepe animi eaque numquam sequi nisi repudiandae ea magnam facilis fuga voluptas doloremque possimus? Nobis repellendus commodi illo.",nickname:"Denn Miller",position:"Owner",companyName:""},{id:3,avatar:new URL("/CreateX-project/assets/project-8-130fc28a.jpg",self.location).href,comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dolor, ex mollitia impedit labore sit nam totam officiis odio assumenda, recusandae, deserunt iste cumque! Rem veritatis modi cum dolorem deserunt!",nickname:"Anrew Karlson",position:"Owner",companyName:""}],s=document.querySelector("#comments"),c=document.querySelector("#rev-left-btn"),m=document.querySelector("#rev-right-btn");let e=0;function o(i){const t=a[i],n=`
        <h2 class="section-title">What our clients are saying</h2>
        <img
          src="${t.avatar}"
          alt="Client's avatar"
          class="reviews-avatar"
        />
        <p class="reviews-text">
          ${t.comment}
        </p>
        <p class="reviews-nickname">${t.nickname}</p>
        <p class="reviews-position">${t.position+(t.companyName!==""?", "+t.companyName:"")}</p>
    `;s.innerHTML=n}m.addEventListener("click",i=>{e===a.length-1?e=0:e++,o(e)});c.addEventListener("click",i=>{e>=1&&e--,o(e)});export{o as l};
//# sourceMappingURL=comments-a49f048a.js.map
