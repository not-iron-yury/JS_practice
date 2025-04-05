const btn = document.getElementById('startBtn');
const mess = document.getElementById('timer');

btn.addEventListener('click', handlerBtn);

function handlerBtn() {
  let count = 5;
  btn.disabled = true;

  let timerId = setInterval(() => {
    mess.textContent = count;
    count--;

    if (count === -1) {
      clearInterval(timerId);
      mess.textContent = 'Готово!';
      btn.disabled = false;
    }
  }, 1000);
}
