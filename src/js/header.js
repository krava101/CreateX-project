const mobileMenu = document.querySelector('.mobile-menu');
const openMobileMenu = document.querySelector('.open-menu-btn');
const closeMobileMenu = document.querySelector('.close-menu-btn');

const currentPath = window.location.pathname;
const navMap = {
  '/about.html': 'nav-about',
  '/services.html': 'nav-services',
  '/work.html': 'nav-work',
  '/news.html': 'nav-news',
  '/contacts.html': 'nav-contacts',
};

const activeNavId = navMap[currentPath];
if (activeNavId) {
  document.getElementById(activeNavId).classList.add('active-nav-link');
  document
    .getElementById(activeNavId + '-menu')
    .classList.add('active-nav-link');
}

openMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});
