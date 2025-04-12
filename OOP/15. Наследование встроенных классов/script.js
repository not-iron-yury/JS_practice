// Создание своей ошибки
// Создай класс ValidationError, который наследуется от Error.
// Он должен принимать сообщение и имя поля, в котором произошла ошибка.

// Пример использования:
// throw new ValidationError('Имя слишком короткое', 'name');

// Ожидаемый результат:
// error.message → 'Имя слишком короткое'
// error.field → 'name'
// error.name → 'ValidationError'

class ValidationError extends Error {
  constructor(message, field) {
    super(message); // error.message
    this.field = field; // error.field
    this.name = 'ValidationError'; // error.name
  }
}

try {
  throw new ValidationError('Ошибка ввода', 'input');
} catch (err) {
  console.error(err); // ValidationError: Ошибка ввода
  console.error(err.message); // Ошибка ввода
  console.error(err.field); // input
}
