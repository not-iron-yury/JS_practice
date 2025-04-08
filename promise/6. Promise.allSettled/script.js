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

Promise.allSettled([loadPart1(), loadPart2(), loadPart3()]).then(results => {
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`Часть ${index + 1} загружена:`, result.value);
    } else {
      console.warn(`Часть ${index + 1} не загрузилась:`, result.reason.message);
    }
  });
});
