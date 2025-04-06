const input = document.getElementById('username');

const debounce = (fn, delay) => {
  let timeoutId; // Использовано замыкание и функция-обёртка

  return event => {
    clearTimeout(timeoutId); // Таймер сбрасывается при каждом новом input
    timeoutId = setTimeout(() => fn(event), delay); // Контекст event сохранён
  };
};

function checkUsername(e) {
  console.log('Проверка:', e.target.value);
}

const debouncedInput = debounce(checkUsername, 500); // Функция срабатывает только через 500 мс после последнего ввода
input.addEventListener('input', debouncedInput);
