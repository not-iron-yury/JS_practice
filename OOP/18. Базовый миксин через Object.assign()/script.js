// У тебя есть класс Logger, в который мы добавим поведение из миксина canLog.

// 1. Создай миксин canLog с методом log(message) — он должен выводить в консоль [ЛОГ]: message.
// 2. Создай класс Logger, у которого есть свойство source (например, 'System').
// 3. Добавь метод logWithSource(message), который выводит [System]: message (используя this.source).
// 4. Примешай canLog в Logger через Object.assign.

// Пример вызова:
// const logger = new Logger('System');

// logger.log('Привет'); // [ЛОГ]: Привет
// logger.logWithSource('Процесс завершен'); // [System]: Процесс завершен

const canLog = {
  log(message) {
    console.log(`[ЛОГ]: ${message}`);
  },
};

class Logger {
  constructor(source) {
    this.source = source;
  }

  logWithSource(message) {
    console.log(`[${this.source}]: ${message}`);
  }
}

Object.assign(Logger.prototype, canLog);

const logger = new Logger('System');

logger.log('Привет'); // [ЛОГ]: Привет
logger.logWithSource('Процесс завершен'); // [System]: Процесс завершен

// Такой подход хорошо работает, когда тебе не нужно управлять приватным состоянием.

// Минус: если в миксине и в классе окажется метод с одним и тем же именем — будет перезапись.
// Так что стоит следить за уникальностью имен.
