const startRegBtn = document.getElementById('startReg');
const disableRegBtn = document.getElementById('disableReg');
const output = document.getElementById('msg');

startRegBtn.addEventListener('click', handlerStartRegBtn);
disableRegBtn.addEventListener('click', handlerDisableRegBtn);

const messages = ['Проверка email...', 'Проверка пароля...', 'Проверка уникальности имени...', 'Успешная регистрация'];
let flag = true;
let timetId;

function handlerDisableRegBtn() {
  flag = false;
  output.textContent = 'Регистрация прервана.';
  startRegBtn.disabled = false;
  clearTimeout(timetId);
  flag = true;
}

function handlerStartRegBtn() {
  startRegBtn.disabled = true;
  let index = 0;
  showNextMessage();

  function showNextMessage() {
    output.textContent = messages[index];
    index++;

    if (index < messages.length && flag) {
      timetId = setTimeout(showNextMessage, 1500);
    } else {
      startRegBtn.disabled = false;
    }
  }
}
