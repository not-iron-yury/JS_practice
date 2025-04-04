function generateKey(args) {
  return args
    .map(arg => {
      if (typeof arg === 'object' && arg !== null) {
        return JSON.stringify(arg, Object.keys(arg).sort()); // Сортируем ключи объекта
      }
      return String(arg);
    })
    .join('|'); // Разделяем символом, который не встречается в JSON
}

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = generateKey(args);

    if (!cache.has(key)) {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }

    return cache.get(key);
  };
}
function slowFunction(a, b) {
  console.log('Выполняется вычисление...');
  return a + b;
}

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction([2, 3])); // Выполняется вычисление... 5
console.log(memoizedFunction([2, 3])); // 5 (из кеша)
console.log(memoizedFunction(2, 3)); // 5 (из кеша)
console.log(memoizedFunction([3, 4])); // Выполняется вычисление... 7
