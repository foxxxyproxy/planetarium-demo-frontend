import {Carousel} from "./carousel.js"

const carousel = new Carousel(".about__slider__wrapper", 562);

const btn_prev = document.querySelector(".slider__button--prev");
const btn_next = document.querySelector(".slider__button--next");
const current = document.querySelector(".slider__pagination-current");
const total = document.querySelector("slider__pagination-total");

btn_prev.addEventListener("click", () => {
  carousel.decrementPosition();
  current.innerHTML = carousel.position + 1;
});

btn_next.addEventListener("click", () => {
  carousel.incrementPosition();
  current.innerHTML = carousel.position + 1;
});