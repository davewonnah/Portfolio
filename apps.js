const menu_container = document.querySelector(".menu");
const menu_img = document.querySelector(".menu-line");
const dropDown = document.querySelector(".dropDown-menu");

menu_container.onclick = function () {
    dropDown.classList.toggle('open')
}
