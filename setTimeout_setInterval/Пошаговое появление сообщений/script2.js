const btn = document.getElementById('startMsg2');
const output = document.getElementById('msg2');

btn.addEventListener('click', handlerBtn);

const messages = ['Подключение...', 'Аутентификация...', 'Загрузка данных...', 'Готово!'];

function handlerBtn() {
  btn.disabled = true;
  let index = 0;

  showNextMessage(); // стартуем цепочку

  function showNextMessage() {
    output.textContent = messages[index];
    index++;

    if (index < messages.length) {
      setTimeout(showNextMessage, 2000);
    } else {
      btn.disabled = false; // Завершено — кнопка снова активна
    }
  }
}
