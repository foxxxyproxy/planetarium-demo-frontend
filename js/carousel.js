export class Carousel {
  constructor(selector, step) {
    this.step = step;
    this.position = 0;
    this.element = document.querySelector(selector);
    this.limit = this.element.children.length;
  }

  scroll() {
    this.element.scrollTo(
      this.position * this.step,
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