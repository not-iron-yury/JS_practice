// Базовый класс AppError и наследники

// Условие:
// 1. Создай базовый класс AppError, который будет расширять Error.
// 2. Класс должен принимать message и code (например: 'NOT_FOUND', 'VALIDATION_FAILED' и т.д.).
// 3. Создай два класса-наследника:
//     NotFoundError, по умолчанию с code = 'NOT_FOUND'
//     ValidationError, по умолчанию с code = 'VALIDATION_FAILED'
// 4. В try...catch продемонстрируй работу каждого типа ошибки, выведя:
//     имя ошибки,
//     сообщение,
//     код ошибки.

class AppError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
    this.name = 'AppError';
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
    };
  }
}

class NotFoundError extends AppError {
  constructor(message, code = 'NOT_FOUND') {
    super(message, code);
    this.name = this.constructor.name;
  }
}
class ValidationError extends AppError {
  constructor(message, code = 'VALIDATION_FAILED') {
    super(message, code);
    this.name = this.constructor.name;
  }
}

try {
  throw new ValidationError('Ошибка валидации');
} catch (err) {
  console.error(err); // ValidationError: Ошибка валидации
  console.error(JSON.stringify(err, null)); // {"name":"ValidationError","message":"Ошибка валидации","code":"VALIDATION_FAILED"}
}
try {
  throw new NotFoundError('Объект не найден');
} catch (err) {
  console.error(err); // NotFoundError: Объект не найден
  console.error(err.code); // NOT_FOUND
  console.error(err.message); // Объект не найден
}
