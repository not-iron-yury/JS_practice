function createLimitedFunction(fn, count) {
  return function () {
    if (count > 0) {
      count--;
      return fn(...arguments);
    }
  };
}

function sayHello(mess) {
  console.log(mess);
}

const limitedHello = createLimitedFunction(sayHello, 3);

limitedHello('Привет!'); // "Привет!"
limitedHello('Привет!'); // "Привет!"
limitedHello('Привет!'); // "Привет!"
limitedHello('Привет!'); // (ничего не происходит)
limitedHello('Привет!'); // (ничего не происходит)
