class Carousel {
  constructor(selector) {
    this.position = 0;
    this.element = document.querySelector(selector);
    this.limit = this.element.children.length;
  }

  scroll() {
    this.element.scrollTo(
      this.position * 562,
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