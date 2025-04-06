const startRegBtn = document.getElementById('startReg');
const disableRegBtn = document.getElementById('disableReg');
const output = document.getElementById('msg');

const messages = ['Проверка email...', 'Проверка пароля...', 'Проверка уникальности имени...', 'Успешная регистрация'];

let timerId = null;
let currentIndex = 0;

startRegBtn.addEventListener('click', startChain);
disableRegBtn.addEventListener('click', cancelChain);

function startChain() {
  startRegBtn.disabled = true;
  currentIndex = 0;
  showNext();
}

function showNext() {
  if (currentIndex >= messages.length) {
    timerId = null;
    startRegBtn.disabled = false;
    return;
  }

  output.textContent = messages[currentIndex];
  currentIndex++;

  timerId = setTimeout(showNext, 1500);
}

function cancelChain() {
  if (timerId !== null) {
    clearTimeout(timerId);
    output.textContent = 'Регистрация прервана.';
    timerId = null;
    startRegBtn.disabled = false;
  }
}
