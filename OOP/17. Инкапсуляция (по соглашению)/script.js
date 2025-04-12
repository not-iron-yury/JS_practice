// Базовый класс
class FormComponent {
  constructor() {
    this._errors = [];
  }

  validate() {
    this._errors = []; // сбрасываем ошибки
    this._validate(); // вызываем внутреннюю валидацию
    return this._errors.length === 0;
  }

  _validate() {
    // базовая реализация — пустая
    // в наследнике будет расширяться
  }

  getErrors() {
    return this._errors;
  }

  _addError(msg) {
    this._errors.push(msg);
  }
}

class LoginForm extends FormComponent {
  constructor(username, password) {
    super();
    this.username = username;
    this.password = password;
  }

  _validate() {
    if (!this.username || this.username.length < 3) {
      this._addError('Имя пользователя слишком короткое');
    }
    if (!this.password || this.password.length < 6) {
      this._addError('Пароль должен содержать не менее 6 символов');
    }
  }
}

const form = new LoginForm('jo', '123');
const isValid = form.validate();

if (!isValid) {
  console.log('Ошибки:', form.getErrors());
}

// Почему тут _, а не #?

// #_validate() и #_addError() нельзя было бы переопределить в наследнике — JavaScript этого не позволит.

// А _validate() обязательно должна быть переопределена в LoginForm.

// #errors тоже бы не получилось изменить/сбросить/прочитать вне базового класса.
