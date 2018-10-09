// Open the drawer when the menu icon is clicked.
var hamburger = document.querySelector('.header-hamburger');
var main = document.querySelector('main');
var drawer = document.querySelector('.header-navbar');

hamburger.addEventListener('click', function (e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});
main.addEventListener('click', function () {
    drawer.classList.remove('open');
});