const step1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Шаг 1');
    }, 500);
  });
};

const step2 = value => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value + ' -> Шаг 2');
    }, 500);
  });
};

const step3 = value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.25;
      if (success) {
        resolve(value + ' -> Шаг 3');
      } else {
        reject('Ошибка на шаге №3');
      }
    }, 500);
  });
};

step1()
  .then(result => step2(result))
  .then(result => step3(result))
  .then(result => console.log(result))
  .catch(err => console.error(err))
  .finally(() => console.log('Цепочка промисов выполненна'));
