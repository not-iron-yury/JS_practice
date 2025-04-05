const syncBtn = document.getElementById('syncBtn');
syncBtn.addEventListener('click', performSync);

let count = 0;
let intervalId;

function breckSync() {
  clearInterval(intervalId);
  syncBtn.disabled = false;
  syncBtn.textContent = 'Начать синхронизацию';
  count = 0;
}

function performSync() {
  syncBtn.disabled = true;
  syncBtn.textContent = 'Cинхронизация...';

  intervalId = setInterval(() => {
    count++;
    console.log(`Синхронизация #${count}: данные синхронизированы`);

    if (count === 6) {
      breckSync();
    }
  }, 10000);
}
