// Задача 5: Наследование между функциями-конструкторами

// Создай два конструктора: Animal и Dog.

// Animal:
// принимает имя и сохраняет его как this.name;
// имеет метод speak, который выводит "<name> издаёт звук".

// Dog:
// наследует от Animal;
// в speak() выводит "<name> лает".

// Убедись, что:
// экземпляры Dog наследуют от Animal;
// dog instanceof Animal === true.

// Плохая практика.
// Каждый экземпляр Animal будет иметь свою собственную копию метода speak.
/*
function Animal(name) {
  this.name = name;
  this.speak = function() {
    console.log(`${this.name} издает звук`);
  };
}
*/

function Animal(name) {
  this.name = name;
}

// метод будет в одном экземпляре, и не дублироваться в каждом экземпляре (в чем нет необходимости)
Animal.prototype.speak = function () {
  console.log(`${this.name} издает звук`);
};

// конструктор Dog, наследуется от Animal
function Dog(name) {
  Animal.call(this, name); // вызываем конструктор родителя (this - ссылка на ЭКЗЕМПЛЯР Dog), как если бы это был super()
}

// устанавливаем наследование от Animal
Dog.prototype = Object.create(Animal.prototype); // создаём новый объект, чей прототип — это Animal.prototype.

// обязательно восстанавливаем конструктор!
Dog.prototype.constructor = Dog; // после Object.create() у нас конструктор стал Animal, мы это исправляем.

// переопределяем метод speak для Dog
Dog.prototype.speak = function () {
  console.log(`${this.name} лает`);
};

const rex = new Dog('Рекс');
rex.speak(); // Рекс лает

// =========================================================== //
// Проверки прототипной цепочки

// instanceof проверяет: есть ли Dog.prototype или Animal.prototype в цепочке [[Prototype]] объекта rex.
console.log(rex instanceof Dog); // true
console.log(rex instanceof Animal); // true

// Это позволяет пройти по цепочке вверх.
// Полезно, если ты хочешь явно узнать, откуда пошло наследование.
console.log(Object.getPrototypeOf(rex) === Dog.prototype); // true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(rex)) === Animal.prototype); // true

// Проверяет, есть ли Dog.prototype (или Animal.prototype) в цепочке прототипов объекта.
console.log(Dog.prototype.isPrototypeOf(rex)); // true
console.log(Animal.prototype.isPrototypeOf(rex)); // true

// Благодаря тому, что мы сделали Dog.prototype.constructor = Dog, эта связь осталась корректной.
// Если бы не восстановили constructor, он бы указывал на Animal.
console.log(rex.constructor === Dog); // true
