// простой вариант
function getUniqueValues(arr) {
  return [...new Set(arr)];
}

// console.log(getUniqueValues([1, 2, 2, 3, 1, 4])); // [1, 2, 3, 4]
// console.log(getUniqueValues(['a', 'b', 'a', 'c', 'b'])); // ["a", "b", "c"]
// console.log(getUniqueValues([true, false, true, true])); // [true, false]

// ---------------------------------------------------------------- //

// Сложность: ближе к мидлу
// глубокое сравнение
function getDeepUniqueValues(arr) {
  const uniqueValues = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let isUnique = !uniqueValues.some(uniqueItem => deepEqual(arr[i], uniqueItem));

    if (isUnique) {
      uniqueValues.push(arr[i]);
    }
  }

  return uniqueValues;
}

function deepEqual(a, b) {
  // NaN
  if (Number.isNaN(a) && Number.isNaN(b)) return true;

  // примитивы
  if (a === b) return true;
  if (typeof a === null || typeof a !== 'object' || typeof b === null || typeof b !== 'object') return false;

  // МАССИВЫ:
  // только одно из значений массив
  if (Array.isArray(a) !== Array.isArray(b)) return false;

  // гарантированно разные массивы
  if (Array.isArray(a) && Array.isArray(b) && a.length !== b.length) return false;

  // сравнение массивов
  if (Array.isArray(a)) {
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  // ОБЪЕКТЫ:
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // гарантированно разные объекты
  if (keysA.length !== keysB.length) return false;

  // сравнение объектов
  for (const key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }
  return true;
}

const a = [1, [1, 2], { a: 1, b: [2, 3] }, { a: 1, b: [2, 3] }, [1, 2], 'test', 'test', NaN, NaN];
const b = [1, [1, 2], [1, 2, 3], [1, 2], [1, 2, 3], [1, 2, 3, 4], 'test', 'test', NaN, NaN];
const с = [{ a: true }, { a: 1, b: [2, 3] }, { a: 1, b: [2, 3] }];
const d = [null, null, null, false, 'true'];

console.log(getDeepUniqueValues(a)); // [1, [1, 2], {a: 1, b: [2, 3]}, "test", NaN]
console.log(getDeepUniqueValues(b)); // [1, [1, 2], [1, 2, 3], [1, 2, 3, 4], "test", NaN]
console.log(getDeepUniqueValues(с)); // [{a: true}, {a: 1, b: [2, 3]}]
console.log(getDeepUniqueValues(d)); // [null, false, 'true']
