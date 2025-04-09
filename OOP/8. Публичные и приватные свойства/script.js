// Задача 8: Использование приватного поля

// Сделаем класс User, который:
// 1. Принимает name и password
// 2. Хранит password в приватном поле
// 3. Метод checkPassword(pwd) возвращает true, если пароль совпадает
// 4. Метод changePassword(oldPwd, newPwd) меняет пароль, если oldPwd совпадает

class User {
  #password;

  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  getName() {
    return this.name;
  }
  checkPassword(pwd) {
    return this.#password === pwd;
  }
  changePassword(currentPwd, newPwd) {
    if (this.checkPassword(currentPwd)) {
      this.#password = newPwd;
      return true;
    } else {
      console.error('Текущщий пароль введен не правильно');
      return false;
    }
  }
}

const user = new User('Boba', '1234');
console.log(user.checkPassword('1234')); // true

console.log(user.getName()); // Boba
console.log(user.password); // undefined

user.changePassword('1234', '5678');
console.log(user.checkPassword('5678')); // true
