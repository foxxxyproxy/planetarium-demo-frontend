const header = document.querySelector(".page-header");
const menuButton = document.querySelector(".page-header__toggle");
const order_btn = document.querySelectorAll(".button-order");
const close_btn = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const input_name = document.querySelector("#popup-name");
const form = document.querySelector(".popup__form");

order_btn.forEach(btn => btn.addEventListener("click", () => {
    popup.classList.toggle("popup--show");
    form.classList.toggle("form--show");
    input_name.focus();
}));

close_btn.addEventListener("click", () => {
    popup.classList.toggle("popup--show");
    form.classList.toggle("form--show");
});

form.addEventListener("submit", event => {
    event.preventDefault();
    close_btn.dispatchEvent(new Event("click"));
});

menuButton.addEventListener("click", event =>{
    header.classList.toggle("page-header--open");
});
