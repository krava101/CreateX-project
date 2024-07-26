const mobileMenu = document.querySelector('.mobile-menu');
const openMobileMenu = document.querySelector('.open-menu-btn');
const closeMobileMenu = document.querySelector('.close-menu-btn');

const currentPath = window.location.pathname;
const navMap = {
  '/CreateX-project/about.html': 'nav-about',
  '/CreateX-project/services.html': 'nav-services',
  '/CreateX-project/work.html': 'nav-work',
  '/CreateX-project/news.html': 'nav-news',
  '/CreateX-project/contacts.html': 'nav-contacts',
};

const activeNavId = navMap[currentPath];

if (activeNavId) {
  document.getElementById(activeNavId).classList.add('active-nav-link');
  const mobileMenu = document.getElementById(activeNavId + '-menu');
  if (mobileMenu) {
    mobileMenu.classList.add('active-nav-link');
  }
}

openMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});
