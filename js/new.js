const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.navbar');
const menuList = document.querySelector('.menu-list');
const searchBar = document.querySelector('.search-bar');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('v-height');
    menuList.classList.toggle('v-class');
    searchBar.classList.toggle('v-class');

})