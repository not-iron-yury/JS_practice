function createCounter() {
  let count = 0;

  function validateCount(newValue) {
    return newValue >= 0;
  }

  return {
    getCount() {
      return count;
    },
    increment() {
      count++;
    },
    decrement() {
      if (validateCount(count - 1)) {
        count--;
      }
    },
    reset() {
      if (validateCount(0)) {
        count = 0;
      }
    },
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
console.log(counter.getCount()); // 2

counter.decrement();
console.log(counter.getCount()); // 1

counter.decrement();
counter.decrement();
console.log(counter.getCount()); // 0 (не уходит в отрицательные значения)
