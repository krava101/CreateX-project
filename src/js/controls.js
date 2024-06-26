const mobileMenu = document.querySelector(".mobile-menu");
const openMobileMenu = document.querySelector(".open-menu-btn");
const closeMobileMenu = document.querySelector(".close-menu-btn");

openMobileMenu.addEventListener("click", (event) => {
  mobileMenu.classList.add("active");
})

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
})