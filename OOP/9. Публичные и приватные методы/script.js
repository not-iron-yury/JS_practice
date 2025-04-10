// Задача 9: Использование приватного метода

// Создай класс Product, в котором:
// 1. есть публичные поля: name, price,
// 2. есть приватный метод #validatePrice(price),
// 3. при создании объекта в constructor(name, price) вызывается приватный метод #validatePrice(price),
// 4. если price невалиден — выбрасывается ошибка throw new Error("Цена должна быть положительным числом").

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = this.#validatePrice(price);
  }

  #validatePrice(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Цена должна быть положительным числом');
    }
    return value;
  }
}

const p1 = new Product('Молоко', 80); // ✅ ок
const p2 = new Product('Кефир', -50); // ❌ ошибка: Цена должна быть положительным числом
