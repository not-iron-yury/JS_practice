// Функциональный миксин — это функция, которая принимает класс и возвращает расширенный класс,
// добавляя в него дополнительное поведение. Это альтернатива множественному наследованию, которого в JS нет.

// Разница:
// extends — жесткая иерархия: один родитель → один потомок → глубже.
// Object.assign — "примеси" на уровне объекта, но без возможности взаимодействовать с super.
// функциональные миксины — гибкая композиция поведения:
//    1. Поведения независимы друг от друга.
//    2. Можно создавать бесконечно много разных "сборок".
//    3. Удобно комбинировать то, что реально нужно.

class Message {
  constructor(text, author) {
    this.text = text;
    this.author = author;
  }
}

function WithTimestamp(Base) {
  return class extends Base {
    constructor(...args) {
      super(...args);
      this.createdAt = Date.now();
    }

    getFormattedDate() {
      const date = new Date(this.createdAt);
      return `${date.getDate()}.${String(date.getMonth() + 1).padStart(2, 0)}.${date.getFullYear()}.`;
    }
  };
}

function WithLogging(Base) {
  return class extends Base {
    logCreation() {
      console.log(`Сообщение от ${this.author} создано в ${this.createdAt}.`);
    }
  };
}

const LoggedMessage = WithLogging(WithTimestamp(Message));

const msg = new LoggedMessage('Привет!', 'Alice');

msg.logCreation(); // Сообщение от Alice создано в 1712769419623

console.log(msg.getFormattedDate()); // 10.04.2025 (например)
