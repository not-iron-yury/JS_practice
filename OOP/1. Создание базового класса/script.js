// Создай класс Product, у которого:
// 1. есть свойства name и price, задаваемые в constructor;
// 2. есть метод getInfo(), который возвращает строку: "Товар: <name>, цена: <price>₽"

// Пример:
// const apple = new Product('Яблоко', 25);
// console.log(apple.getInfo()); // Товар: Яблоко, цена: 25₽

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getInfo() {
    return `Товар: ${this.name}, цена: ${this.price}₽`;
  }
}

const apple = new Product('Яблоко', 25);
console.log(apple.getInfo()); // Товар: Яблоко, цена: 25₽
