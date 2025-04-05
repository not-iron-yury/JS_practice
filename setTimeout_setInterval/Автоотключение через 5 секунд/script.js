const blinkBtn = document.getElementById('blinkBtn');
const blinker = document.getElementById('blinker');

blinkBtn.addEventListener('click', handlerBtn);

let isBlinkerActive = false;
const blinkerColors = ['red', '#ccc'];

function handlerBtn() {
  if (isBlinkerActive) return;

  isBlinkerActive = true;
  blinkBtn.disabled = true;
  let setIntervalid;
  let index = 0;

  setIntervalid = setInterval(() => {
    blinker.style.background = blinkerColors[index];
    index = 1 - index;
  }, 300);

  setTimeout(() => {
    clearInterval(setIntervalid);
    isBlinkerActive = false;
    blinkBtn.disabled = false;
    blinker.style.background = blinkerColors[1];
  }, 5000);
}
