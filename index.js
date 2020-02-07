
const header = document.querySelector(".page-header");
const menuButton = document.querySelector(".page-header__toggle");

menuButton.addEventListener("click", event =>{
    header.classList.toggle("page-header--open");
});