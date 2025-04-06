const box = document.getElementById('box');

const throttle = (callback, delay) => {
  let isThrottled = false;

  return (...args) => {
    if (isThrottled) return;

    isThrottled = true;
    setTimeout(() => {
      callback(...args);
      isThrottled = false;
    }, delay);
  };
};

const handlerResize = () => {
  box.textContent = `Размер окна: ${window.innerWidth}x${window.innerHeight}`;
};

const throttledHandlerResize = throttle(handlerResize, 300);
window.addEventListener('resize', throttledHandlerResize);
handlerResize(); // сразу показать текущий размер
