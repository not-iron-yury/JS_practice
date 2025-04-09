// Задача 3: Класс FoodProduct, наследующий Product

// Что нужно:
// 1. Класс FoodProduct должен наследовать Product.
// 2. В constructor должны передаваться:
//     name
//     price
//     discount
//     expirationDate — строка вида '2025-07-01'
// 3. Добавить метод isExpired() — возвращает true, если дата истекла.
// 4. Переопредели getInfo() — пусть добавляет инфу о сроке годности: "Молоко, цена без скидки: 100₽, цена со скидкой: 80₽, срок годности до: 2024-01-01"

// Пример использования:

// const milk = new FoodProduct('Молоко', 100, 20, '2024-01-01');

// console.log(milk.getInfo());
// console.log(milk.isExpired()); // true, если сегодня позже 2024-01-01

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

class FoodProduct extends Product {
  constructor(name, price, discount, expirationDate) {
    super(name, price, discount);
    this.expirationDate = expirationDate;
  }

  isExpired() {
    return new Date() > new Date(this.expirationDate);
  }
  getInfo() {
    return `${super.getInfo()}, срок годности до: ${this.expirationDate}`;
  }
}

const milk = new FoodProduct('Молоко', 100, 20, '2024-01-01');

console.log(milk.getInfo()); // Товар: Молоко, цена без скидки: 100₽, цена со скидкой: 80₽, срок годности до: 2024-01-01
console.log(milk.isExpired()); // true
