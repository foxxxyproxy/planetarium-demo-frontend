export class Carousel {
  constructor(selector) {
    this.position = 0;
    this.element = document.querySelector(selector);
    this.limit = this.element.children.length;
  }

  scroll() {
    this.element.scrollTo(
      this.position * 563,
      0
    );
  }

  incrementPosition() {
    if (this.position < this.limit - 1) {
      this.position = this.position + 1;
      this.scroll();
    }
  }

  decrementPosition() {
    if (this.position != 0) {
      this.position = this.position - 1;
      this.scroll();
    }
  }
}


const carousel = new Carousel(".about__slider__wrapper");

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