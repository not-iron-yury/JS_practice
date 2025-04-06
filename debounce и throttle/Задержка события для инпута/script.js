const input = document.getElementById('search');
const output = document.getElementById('output');

// function debounce(fn, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// декоратор
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId); // сбрасыавет предыдущие таймауты
    timeoutId = setTimeout(() => fn(...args), delay); // запускает с задержкой handleInput
  };
};

// основной обработчик input
function handleInput(e) {
  output.textContent = `Поиск: ${e.target.value}`;
  console.log('🔍 Выполнен запрос: ' + e.target.value);
}

const debouncedInput = debounce(handleInput, 500); //
input.addEventListener('input', debouncedInput);
