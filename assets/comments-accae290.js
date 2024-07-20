const n=[{id:0,avatar:new URL("/CreateX-project/assets/project-1-68d98b07.jpg",self.location).href,comment:"Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ",nickname:"Shawn Edwards",position:"HR Manager",companyName:"WiPo"},{id:1,avatar:new URL("/CreateX-project/assets/project-6-5d8ae179.jpg",self.location).href,comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ratione delectus adipisci tenetur a exercitationem cumque vitae molestiae ad, odio sit, dignissimos ipsa iusto debitis cupiditate necessitatibus! Aliquam, voluptates iure?",nickname:"Lo Wung",position:"General Director",companyName:"MSU Group"},{id:2,avatar:new URL("/CreateX-project/assets/project-2-999359c8.jpg",self.location).href,comment:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, dolorum, minima earum saepe animi eaque numquam sequi nisi repudiandae ea magnam facilis fuga voluptas doloremque possimus? Nobis repellendus commodi illo.",nickname:"Denn Miller",position:"Owner",companyName:""},{id:3,avatar:new URL("/CreateX-project/assets/project-8-130fc28a.jpg",self.location).href,comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dolor, ex mollitia impedit labore sit nam totam officiis odio assumenda, recusandae, deserunt iste cumque! Rem veritatis modi cum dolorem deserunt!",nickname:"Anrew Karlson",position:"Owner",companyName:""}],s=document.querySelector("#comments"),m=document.querySelector("#rev-left-btn"),c=document.querySelector("#rev-right-btn");let e=0;function a(t){const i=n[t],o=`
        <div class="review-owner">
          <img
            src="${i.avatar}"
            alt="Client's avatar"
            class="reviews-avatar"
          />
          <span>
            <p class="reviews-nickname">${i.nickname}</p>
            <p class="reviews-position">${i.position+(i.companyName!==""?", "+i.companyName:"")}</p>
          </span>
        </div>
        <p class="reviews-text">
          ${i.comment}
        </p>
    `;s.innerHTML=o}a(e);c.addEventListener("click",t=>{e===n.length-1?e=0:e++,a(e)});m.addEventListener("click",t=>{e>=1&&e--,a(e)});
//# sourceMappingURL=comments-accae290.js.map
