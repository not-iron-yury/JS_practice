function createCountdownTimer(duration, onFinish) {
  let timeLeft = duration;
  let isActive = false;
  let hasStarted = false;

  function start() {
    if (hasStarted && !isActive) {
      // продолжение
      isActive = true;
      next();
    } else if (!hasStarted) {
      // первый запуск
      hasStarted = true;
      isActive = true;
      next();
    }
  }

  function next() {
    if (timeLeft > 0 && isActive) {
      timeLeft -= 1;
      setTimeout(next, 1000);
    } else if (timeLeft <= 0) {
      onFinish(); // коллбек, если время завершено
      isActive = false;
    }
  }

  function stop() {
    isActive = false; // останавливаем отсчёт
  }

  function getTimeLeft() {
    return timeLeft;
  }

  return {
    start,
    stop,
    getTimeLeft,
  };
}

const timer = createCountdownTimer(3, () => {
  console.log('⏰ Время вышло!');
});

timer.start();

setTimeout(() => {
  console.log('⏳ Осталось:', timer.getTimeLeft()); // 1 (примерно)
}, 2000);
