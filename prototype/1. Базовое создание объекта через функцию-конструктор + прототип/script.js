// Создай User(name) — функцию-конструктор.
// Добавь метод sayHi, чтобы new User('Игорь').sayHi() работал.
// Убедись, что метод не создаётся заново для каждого объекта (проверь по ссылке функции).

function User(name) {
  this.name = name;
}

// добавляем новый метод sayHi
User.prototype.sayHi = function () {
  console.log(`Привет! Меня зовут ${this.name}`);
};

const boba = new User('Boba');
boba.sayHi();

const another = new User('Alice');
console.log(boba.sayHi === another.sayHi); // true
