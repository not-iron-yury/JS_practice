const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const mess = document.getElementById('timer');

startBtn.addEventListener('click', handlerStartBtn);
stopBtn.addEventListener('click', handlerStoptBtn);
resetBtn.addEventListener('click', handlerResetBtn);

const stateCount = {
  _value: 0,
  get value() {
    return this._value;
  },
  set value(n) {
    this._value = n;
  },
};
const stateIntervalId = {
  _value: null,
  get value() {
    return this._value;
  },
  set value(n) {
    this._value = n;
  },
};

function handlerStartBtn() {
  if (stateIntervalId.value !== null) return;

  startBtn.disabled = true;
  stateIntervalId.value = setInterval(() => {
    mess.textContent = stateCount.value;
    stateCount.value++;
  }, 1000);
}

function handlerStoptBtn() {
  clearInterval(stateIntervalId.value);
  startBtn.disabled = false;
}

function handlerResetBtn() {
  stateCount.value = 0;
  mess.textContent = stateCount.value;
  handlerStoptBtn();
}
