// Задача 11: Статические методы класса

// Создай класс PriceHelper, у которого есть статические методы:
// 1. format(price) — возвращает строку с ценой и символом рубля
// 2. applyDiscount(price, discount) — возвращает цену со скидкой
// 3. isValid(price) — возвращает true, если цена — положительное число

class PriceHelper {
  static format(price) {
    return this.isValid(price) ? `${price}₽` : '—';
  }

  static applyDiscount(price, discount) {
    if (this.isValid(price) && this.isValid(discount)) {
      return Math.round(price * (1 - discount / 100));
    }
    return null;
  }

  static isValid(value) {
    if (typeof value === 'number' && !Number.isNaN(value)) {
      return value >= 0;
    }
    return false;
  }
}

console.log(PriceHelper.format(150)); // → "150₽"
console.log(PriceHelper.applyDiscount(200, 10)); // → 180
console.log(PriceHelper.isValid(0)); // → false
console.log(PriceHelper.isValid(50)); // → true
