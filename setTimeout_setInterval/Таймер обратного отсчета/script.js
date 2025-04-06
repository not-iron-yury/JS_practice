function createCountdownTimer(duration) {
  let timeLeft = duration;
  let isActive = true;
  let hasStarted = false;

  function start() {
    if (hasStarted) return;

    hasStarted = true;
    next();

    function next() {
      if (timeLeft > 0 && isActive) {
        timeLeft -= 1;
        setTimeout(next, 1000);
      } else {
        stop();
      }
    }
  }

  function stop() {
    isActive = false;
    hasStarted = false;
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

const timer = createCountdownTimer(5);

timer.start();

setTimeout(() => console.log(timer.getTimeLeft()), 3000); // 2 (через 3 секунды)
setTimeout(() => timer.stop(), 3000); // Остановка на 3-й секунде
setTimeout(() => console.log(timer.getTimeLeft()), 6000); // 2 (таймер не уменьшился после stop)
