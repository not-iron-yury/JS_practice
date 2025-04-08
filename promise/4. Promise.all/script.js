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

Promise.all([loadPart1(), loadPart2(), loadPart3()])
  .then(console.log)
  .catch(err => console.error(err));
