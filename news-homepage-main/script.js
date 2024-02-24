const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});
