// Задача 10:
// Создай класс User, который:
// 1. принимает в конструктор firstName и lastName,
// 2. имеет геттер fullName, который возвращает полное имя ("Имя Фамилия"),
// 3. имеет сеттер fullName, который принимает строку из двух слов и присваивает значения firstName и lastName,
// 4. если в fullName передано меньше или больше двух слов — выбрасывает ошибку.

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newName) {
    const parts = newName.trim().split(/\s+/);
    if (parts.length !== 2) {
      throw new Error('Нужно указать имя и фамилию через пробел');
    }
    [this.firstName, this.lastName] = parts;
  }
}

const user = new User('Иван', 'Иванов');
console.log(user.fullName); // Иван Иванов

user.fullName = 'Пётр Петров';
console.log(user.firstName); // Пётр
console.log(user.lastName); // Петров

user.fullName = 'Один'; // ❌ ошибка
