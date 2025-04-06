const btn = document.getElementById('clickBtn');
const counter = document.getElementById('counter');
let count = 0;

const throttle = (fn, delay) => {
  let isThrottled = false;

  return event => {
    if (isThrottled) return;

    fn(event);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
};

const handlerBtn = () => {
  counter.textContent = count;
  count++;
};

const throttledHandler = throttle(handlerBtn, 500);
btn.addEventListener('click', throttledHandler);
