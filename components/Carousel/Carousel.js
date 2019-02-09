class Carousel {
  constructor(el) {
    this.el = el;
    this.counter = 0;
    this.lftBtn = this.el.querySelector(".left-button");
    this.rtBtn = this.el.querySelector(".right-button");
    this.images = this.el.querySelectorAll("img");

    this.images[this.counter].style.display = "block";

    this.rtBtn.addEventListener("click", this.moveForward.bind(this));
    this.lftBtn.addEventListener("click", this.moveBackward.bind(this));
  }
  moveForward() {
    this.counter++;
    if (this.counter === this.images.length) this.counter = 0;
    this.images.forEach(image => (image.style.display = "none"));
    this.images[this.counter].style.display = "block";
  }

  moveBackward() {
    this.counter--;
    if (this.counter < 0) this.counter = 3;
    this.images.forEach(image => (image.style.display = "none"));
    this.images[this.counter].style.display = "block";
  }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
