class TouchSlider {
  constructor(list, callback, arrLength, swipeThreshold = 70) {
    this.list = list;
    this.callback = callback;
    this.arrLength = arrLength || list.children.length;
    this.swipeThreshold = swipeThreshold;
    this.startX = 0;
    this._index = 0;

    this.init();
  }

  get index() {
    return this._index;
  }

  set index(value) {
    if (value >= 0 && value < this.arrLength) {
      this._index = value;
    }
  }

  init() {
    this.list.addEventListener('touchstart', this.onTouchStart.bind(this));
    this.list.addEventListener('touchmove', this.onTouchMove.bind(this), {
      passive: false,
    });
    this.list.addEventListener('touchend', this.onTouchEnd.bind(this));
  }

  onTouchStart(event) {
    this.startX = event.touches[0].clientX;
  }

  onTouchMove(event) {
    if (Math.abs(event.touches[0].clientX - this.startX) > 10) {
      event.preventDefault();
    }
  }

  onTouchEnd(event) {
    const endX = event.changedTouches[0].clientX;
    let index = this.index;

    if (endX > this.startX && endX - this.startX > this.swipeThreshold) {
      this.index = index <= 0 ? this.arrLength - 1 : index - 1;
      this.callback(this._index);
    } else if (this.startX > endX && this.startX - endX > this.swipeThreshold) {
      this.index = index === this.arrLength - 1 ? 0 : index + 1;
      this.callback(this._index);
    }
  }
}

export default TouchSlider;
