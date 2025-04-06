const input = document.getElementById('username');
const mess = document.getElementById('status');

const debounce = (fn, delay) => {
  let timeoutId;

  return event => {
    clearTimeout(timeoutId);
    if (mess.textContent !== 'Проверка...') {
      mess.textContent = 'Проверка...';
    }
    timeoutId = setTimeout(() => fn(event), delay);
  };
};

function checkUsername(e) {
  console.log('Проверка:', e.target.value);
  mess.textContent = '';
}

const debouncedInput = debounce(checkUsername, 500);
input.addEventListener('input', debouncedInput);
