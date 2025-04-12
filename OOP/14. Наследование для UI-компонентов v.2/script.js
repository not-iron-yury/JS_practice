// класс основного компонента
class Component {
  constructor(tag = 'div') {
    this.element = document.createElement(tag);
  }

  render(container) {
    container.append(this.element);
  }
  destroy() {
    this.element.remove();
  }
  show() {
    this.element.style.display = '';
  }
  hide() {
    this.element.style.display = 'none';
  }
}

// класс компонента уведомления
class AlertComponent extends Component {
  constructor(message, type = 'info', timeout = 3000) {
    super('div');
    this.message = message;
    this.timeout = timeout;
    this.type = type;
    this.#init();
  }

  static statusMess = {
    success: 'Сообщение о успехе',
    error: 'Сообщение о ошибке',
    info: 'Информационное сообщение',
  };

  #init() {
    this.element.className = 'alert';
    this.element.textContent = AlertComponent.statusMess[this.type];
    this.element.classList.add(`alert-${this.type}`);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.className = 'close-btn';
    closeBtn.addEventListener('click', () => this.destroy());

    this.element.append(closeBtn);

    this.#autoDestroy();
  }

  #autoDestroy() {
    setTimeout(() => this.destroy(), this.timeout);
  }
}

// подклассы отдельных типов уведомлений
class SuccessAlert extends AlertComponent {
  constructor(message, timeout) {
    super(message, timeout);
    this.element.classList.add('alert-success');
  }
}

class ErrorAlert extends AlertComponent {
  constructor(message, timeout) {
    super(message, timeout);
    this.element.classList.add('alert-error');
  }
}

class InfoAlert extends AlertComponent {
  constructor(message, timeout) {
    super(message, timeout);
    this.element.classList.add('alert-info');
  }
}

// проверка
const success = new SuccessAlert('Успешно сохранено!');
success.render(document.body);

const error = new ErrorAlert('Ошибка при сохранении!');
error.render(document.body);

const info = new InfoAlert('Это просто информационное сообщение');
info.render(document.body);
