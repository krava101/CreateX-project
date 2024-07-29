export function touchSlider(list, callback, index, arrLength) {
  let startX;

  list.addEventListener('touchstart', event => {
    startX = event.touches[0].clientX;
  });

  list.addEventListener('touchend', event => {
    const endX = event.changedTouches[0].clientX;
    let length = list.children.length;
    if (arrLength) {
      length = arrLength;
    }
    if (endX > startX) {
      if (endX - startX > 70) {
        index <= 0 ? (index = length - 1) : index--;
      }
    } else if (endX < startX) {
      if (startX - endX > 70) {
        index === length - 1 ? (index = 0) : index++;
      }
    }
    callback(index);
  });
}
