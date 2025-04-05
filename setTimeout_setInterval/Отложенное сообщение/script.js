const btn = document.getElementById('sendBtn');
const mess = document.getElementById('status');

btn.addEventListener('click', handlerBtn);

function handlerBtn() {
  btn.disabled = true;
  mess.textContent = 'отправка...';

  setTimeout(() => {
    mess.textContent = 'Данные отправлены!';
    btn.disabled = false;
  }, 2000);
}
