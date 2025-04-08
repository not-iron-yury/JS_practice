// Задача 4: Простая цепочка прототипов
// Увидеть разницу между обычным объектом и объектом без прототипа.
// Понять, почему Object.create(null) — надёжный способ создать "чистый словарь".

// Задача:
// Создай объект dictionary, у которого нет прототипа.
// Используй Object.create(null).

// Добавь туда пары ключ-значение:
// dictionary.apple = "яблоко";
// dictionary.__proto__ = "опасность";

// Выведи dictionary.__proto__ в консоль — что ты получишь?
// Пройди циклом for...in по dictionary и выведи все ключи.

const dictionary = Object.create(null);

console.log(Object.getPrototypeOf(dictionary)); // null

dictionary.apple = 'яблоко';
dictionary.__proto__ = 'опасность'; // ВАЖНО!  В обычном объекте __proto__ — это геттер/сеттер, связанный с прототипом. А тут это обыкновенное свойство.

console.log(dictionary.apple); // яблоко
console.log(dictionary.__proto__); // опасность

Object.keys(dictionary).forEach(itm => console.log(itm)); // apple, затем __proto__
Object.values(dictionary).forEach(itm => console.log(itm)); // яблоко, затем опасность
