function loadMock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.25;

      if (success) {
        resolve('Готово!');
      } else {
        reject('Ошибка загрузки');
      }
    }, 1000);
  });
}

loadMock()
  .then(res => console.log(res))
  .catch(err => console.error(err))
  .finally(() => console.log('Операция завершена'));
