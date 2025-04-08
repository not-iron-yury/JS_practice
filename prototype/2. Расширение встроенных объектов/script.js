// Этап 2: Расширение встроенных объектов
// Задачи:
// Добавь метод Array.prototype.last(), который возвращает последний элемент массива.
// Добавь метод String.prototype.toCapitalize(), который делает первую букву заглавной.

Array.prototype.last = function () {
  return this[this.length - 1];
};

console.log([1, 2, 3, 6].last()); // 6

String.prototype.toCapitalize = function () {
  const str = this.trim();
  return str.length === 0 ? '' : str[0].toUpperCase() + str.slice(1);
};

console.log(' '.toCapitalize()); // Prototype
console.log('  hello'.toCapitalize()); // hello
console.log(''.toCapitalize()); // ''
console.log('    '.toCapitalize()); // ''
