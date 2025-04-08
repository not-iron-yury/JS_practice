// Задача 3: Простая цепочка прототипов
// Цель: осознать, откуда у объектов берутся методы и свойства.

// Создай объект animal с полем eats: true.
// Создай объект rabbit, который наследует от animal, и добавь ему поле jumps: true.
// Проверь, имеет ли rabbit доступ к eats (не прописывая это явно).
// Измени animal.eats = false. Посмотри, как это повлияет на rabbit.eats.

// Вариант 1
// const animal = { eats: true };
// const rabbit = { jump: true };

// rabbit.__proto__ = animal;

// console.log(rabbit.hasOwnProperty('eats')); // false, объект rabbit наследует, но не имеет свойсвто eats
// animal.eats = false;
// console.log(rabbit.eats); // false
// rabbit.eats = true; // добавляем свойство eats объекту rabbit
// console.log(rabbit.hasOwnProperty('eats')); // true, свойство eats переопределяет наследуемое значение

// Вариант 2
const animal = { eats: true };
const rabbit = Object.create(animal);

rabbit.jump = true;

console.log(rabbit.hasOwnProperty('eats'));
animal.eats = false;
console.log(rabbit.eats);
rabbit.eats = true;
console.log(rabbit.hasOwnProperty('eats'));
