const coords = document.getElementById('coords');

const throttle = (fn, delay) => {
  let isThrottled = false;

  return event => {
    if (isThrottled) return;

    fr(event);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
};

const handlerMouseMove = e => {
  coords.textContent = `x:${e.clientX}, y:${e.clientY}`;
};

const throttledHandlerMousMove = throttle(handlerMouseMove, 500);
window.addEventListener('mousemove', throttledHandlerMousMove);
