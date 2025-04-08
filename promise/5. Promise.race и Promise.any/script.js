const loadPart1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.25;
      if (success) {
        resolve('Часть 1');
      } else {
        reject(new Error('Ошибка в части 1'));
      }
    }, 550);
  });
};
const loadPart2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) {
        resolve('Часть 2');
      } else {
        reject(new Error('Ошибка в части 2'));
      }
    }, 450);
  });
};
const loadPart3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.15;
      if (success) {
        resolve('Часть 3');
      } else {
        reject(new Error('Ошибка в части 3'));
      }
    }, 350);
  });
};

// RACE
Promise.race([loadPart1(), loadPart2(), loadPart3()])
  .then(result => console.log('RACE результат:', result))
  .catch(err => console.error('RACE ошибка:', err));

// ANY
Promise.any([loadPart1(), loadPart2(), loadPart3()])
  .then(result => console.log('ANY результат:', result))
  .catch(err => console.error('ANY ошибка (все промисы упали):', err));
