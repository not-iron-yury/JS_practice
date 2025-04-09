// Задача 1: Создание базового класса
// Создай класс Product, у которого:
// 1. есть свойства name и price, задаваемые в constructor;
// 2. есть метод getInfo(), который возвращает строку: "Товар: <name>, цена: <price>₽"
// Пример:
// const apple = new Product('Яблоко', 25);
// console.log(apple.getInfo()); // Товар: Яблоко, цена: 25₽

// Задача 2: Расширим Product
// Добавим:
// Свойство discount (в процентах, например, 20 значит 20%).
// Метод getFinalPrice() — возвращает цену с учётом скидки.
// Переопредели getInfo(), чтобы она возвращала: "Товар: Яблоко, цена без скидки: 25₽, цена со скидкой: 20₽"
// Пример:
// const apple = new Product('Яблоко', 25, 20);
// console.log(apple.getFinalPrice()); // 20
// console.log(apple.getInfo()); // Товар: Яблоко, цена без скидки: 25₽, цена со скидкой: 20₽

class Product {
  constructor(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  }
  getInfo() {
    return `Товар: ${this.name}, цена без скидки: ${this.price}₽, цена со скидкой: ${this.getFinalPrice()}₽`;
  }
  getFinalPrice() {
    return this.price * (1 - this.discount / 100);
  }
}

const apple = new Product('Яблоко', 25, 20);
console.log(apple.getFinalPrice()); // 20
console.log(apple.getInfo());
