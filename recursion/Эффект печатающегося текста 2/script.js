const btnStart = document.getElementById('startTyping');
const btnStop = document.getElementById('stopTyping');
const output = document.getElementById('output');

const textToType = 'Привет! Это эффект печатающегося текста с задержкой между словами.';

let typingInterval;
let index = 0;

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;
  index = 0;
  output.textContent = ''; // Очистить вывод перед началом

  function typeNextChar() {
    if (index < textToType.length) {
      output.textContent += textToType[index]; // Добавляем один символ
      index++;

      // Определяем задержку в зависимости от символа (для пробела увеличим задержку)
      const delay = textToType[index - 1] === ' ' ? 500 : 200;

      typingInterval = setTimeout(typeNextChar, delay); // Вставляем задержку для следующего символа
    } else {
      btnStart.disabled = false; // Разблокируем кнопку старта после завершения
    }
  }

  typeNextChar(); // Запуск печати
});

btnStop.addEventListener('click', () => {
  clearTimeout(typingInterval); // Останавливаем печать
  btnStart.disabled = false; // Разблокируем кнопку старта
  btnStop.disabled = true; // Блокируем кнопку остановки
  output.textContent += ' (Печать остановлена)'; // Сообщение о прекращении
});
