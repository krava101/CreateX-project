import"./assets/header-4ffb22f8.js";/* empty css                     */import{t as c}from"./assets/touch-slider-a3d169cb.js";import"./assets/main-form-25ecbd05.js";const s=[{image:new URL("/CreateX-project/assets/history-1-e67c9548.jpg",self.location).href,text:"Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus. Eu nec vitae."},{image:new URL("/CreateX-project/assets/history-2-2060dfb2.jpg",self.location).href,text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi laudantium numquam incidunt deserunt cum, iste beatae porro amet eum qui ipsam velit? Mollitia, vitae! Corporis rerum sint tempore optio nobis."},{image:new URL("/CreateX-project/assets/history-3-f0caa130.jpg",self.location).href,text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa minus nihil dicta earum voluptatibus error explicabo rerum harum mollitia ratione? Laborum ut aliquid adipisci officiis, veniam quibusdam quas ab eos."},{image:new URL("/CreateX-project/assets/history-4-1a9b1bcb.jpg",self.location).href,text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem qui officiis sunt explicabo dicta reprehenderit debitis, quos earum dolorum placeat excepturi aut magni numquam quisquam beatae ratione suscipit eius dolores!"},{image:new URL("/CreateX-project/assets/history-5-54c5ef1c.jpg",self.location).href,text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, est tempore voluptas excepturi eius ea ullam voluptatum, corporis voluptates voluptate sed natus, quaerat quod. Animi tempore vitae ex sunt rerum."},{image:new URL("/CreateX-project/assets/history-6-5c94e521.jpg",self.location).href,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, id? Provident consectetur totam deleniti pariatur cumque dolorum mollitia nihil atque voluptate consequuntur temporibus non ea voluptates quasi, cupiditate praesentium quia!"},{image:new URL("/CreateX-project/assets/history-7-0b5bb1b6.jpg",self.location).href,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi exercitationem, sed nulla veritatis at veniam, autem eveniet, minima hic accusamus ratione possimus enim rem tempore molestiae. Temporibus, eaque cupiditate!"},{image:new URL("/CreateX-project/assets/history-8-5edf0f6a.jpg",self.location).href,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore temporibus fuga voluptatem quis laborum voluptas. Minima, dolor maxime. Provident consequatur quidem numquam reprehenderit non tempora, natus accusantium ullam in."},{image:new URL("/CreateX-project/assets/history-9-eebe1a07.jpg",self.location).href,text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, quasi! Porro vero accusantium repellendus magni autem cumque recusandae qui, dignissimos temporibus, alias iure sequi omnis. Aliquid quidem eius expedita necessitatibus."}],u=document.querySelector(".active-history-img"),i=document.querySelector(".history-list"),n=document.querySelector(".history-text"),r=document.querySelector("#history-pag"),m=document.getElementById("history-btn-right"),l=document.getElementById("history-btn-left");let e=0;c(u,a,e,s.length);m.addEventListener("click",()=>{e!==s.length-1?e++:e=0,a(e)});l.addEventListener("click",()=>{e>=1?e--:e=s.length-1,a(e)});i.addEventListener("click",t=>{t.target.type==="button"&&(e=[...i.children].indexOf(t.target.parentNode),a(e))});function a(t){const o=s[t];u.src=o.image,n.textContent=o.text,i.querySelector(".active").classList.remove("active"),i.children[t].classList.add("active"),r.querySelector(".active").classList.remove("active"),r.children[t].classList.add("active")}
//# sourceMappingURL=commonHelpers.js.map
