const btn = document.getElementById('startMsg1');
const output = document.getElementById('msg1');

btn.addEventListener('click', handlerBtn1);

const messages = ['Подключение...', 'Аутентификация...', 'Загрузка данных...', 'Готово!'];
let intervalId;

function handlerBtn1() {
  if (intervalId) return;

  btn.disabled = true;
  let index = 0;

  intervalId = setInterval(() => {
    output.textContent = messages[index];
    index++;

    if (index === messages.length) {
      clearInterval(intervalId);
      intervalId = null;
      btn.disabled = false;
    }
  }, 2000);
}
