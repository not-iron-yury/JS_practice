// Задача 4: Спецтовары с подарком

// Создадим новый подкласс GiftProduct, который:
// 1. Наследует Product
// 2. Добавляет поле giftName (название подарка)
// 3. Переопределяет getInfo() так, чтобы оно добавляло строку: "в подарок: <giftName>",
// например: "Товар: Чай, цена без скидки: 200₽, цена со скидкой: 160₽, в подарок: Печенье"

// Пример использования:
// const tea = new GiftProduct('Чай', 200, 20, 'Печенье');
// console.log(tea.getInfo());  // Товар: Чай, цена без скидки: 200₽, цена со скидкой: 160₽, в подарок: Печенье

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

class GiftProduct extends Product {
  constructor(name, price, discount, giftName) {
    super(name, price, discount);
    this.giftName = giftName;
  }
  getInfo() {
    return `${super.getInfo()}, в подарок: ${this.giftName}`;
  }
}

const tea = new GiftProduct('Чай', 200, 20, 'Печенье');
console.log(tea.getInfo()); // Товар: Чай, цена без скидки: 200₽, цена со скидкой: 160₽, в подарок: Печенье
