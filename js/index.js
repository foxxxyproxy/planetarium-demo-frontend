const header = document.querySelector(".page-header");
const menuButton = document.querySelector(".page-header__toggle");
const order_btn = document.querySelectorAll(".button-order");
const close_btn = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const input_name = document.querySelector("#popup-name");
const form = document.querySelector(".popup__form");
const success_msg = document.querySelector(".popup__form-message");
const saccess_btn = document.querySelector(".popup__saccess-button");

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
    popup.classList.toggle("popup--send");
    success_msg.removeAttribute("hidden");
    saccess_btn.removeAttribute("hidden");
});

saccess_btn.addEventListener("click", () => {
    event.preventDefault();
    close_btn.dispatchEvent(new Event("click"));
    success_msg.setAttribute("hidden", "hidden");
    saccess_btn.setAttribute("hidden", "hidden");
    popup.classList.remove("popup--send");
});

menuButton.addEventListener("click", event =>{
    header.classList.toggle("page-header--open");
});
