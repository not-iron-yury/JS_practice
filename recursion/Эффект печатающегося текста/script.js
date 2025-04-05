const btn = document.getElementById('startTyping');
const output = document.getElementById('output');

const textToType = 'Привет! Это эффект печатающегося текста.';

btn.addEventListener('click', () => {
  btn.disabled = true;
  let index = 0;
  output.textContent = '';

  function typeNextChar() {
    if (index < textToType.length) {
      output.textContent += textToType[index]; // Добавляем один символ
      index++;
      setTimeout(typeNextChar, 200); // Вызываем саму себя через 200 мс
    } else {
      btn.disabled = false; // Разблокируем кнопку по завершении
    }
  }

  typeNextChar(); // Стартуем печать
});
