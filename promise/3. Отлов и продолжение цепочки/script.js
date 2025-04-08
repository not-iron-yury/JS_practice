const step1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Шаг 1');
    }, 500);
  });
};

const step2 = value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        resolve(value + ' -> Шаг 2');
      } else {
        reject('Ошибка на шаге №2');
      }
    }, 500);
  });
};

const step3 = value => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value + ' -> Шаг 3');
    }, 500);
  });
};

step1()
  .then(result => step2(result))
  .catch(err => {
    console.error(err);
    return 'Шаг 1 -> [Шаг 2 с ошибкой]';
  })
  .then(result => step3(result))
  .then(result => console.log(result))
  .finally(() => console.log('Цепочка промисов выполненна'));

// компактное оформление
step1()
  .then(step2)
  .catch(err => {
    console.error('Ошибка на step2:', err);
    return 'Шаг 1 -> [Шаг 2 с ошибкой]';
  })
  .then(step3)
  .then(console.log)
  .finally(() => console.log('Цепочка промисов выполнена'));

// Результат
// Ошибка на шаге №2
// Шаг 1 -> [Шаг 2 с ошибкой] -> Шаг 3
// Цепочка промисов выполненна
