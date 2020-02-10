import { Carousel } from "./carousel.js";

const header = document.querySelector(".page-header");
const menuButton = document.querySelector(".page-header__toggle");

const btn_prev = document.querySelector(".slider__button--prev");
const btn_next = document.querySelector(".slider__button--next");
const carousel = new Carousel(".about__slider__wrapper");


menuButton.addEventListener("click", event =>{
    header.classList.toggle("page-header--open");
});

btn_prev.addEventListener("click", () => {
  carousel.decrementPosition();
});

btn_next.addEventListener("click", () => {
  carousel.incrementPosition();
});