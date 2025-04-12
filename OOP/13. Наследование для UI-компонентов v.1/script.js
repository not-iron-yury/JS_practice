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

class AlertComponent extends Component {
  constructor(message, type = 'info', timeout = 3000) {
    super('div');
    this.message = message;
    this.timeout = timeout;
    this.type = this.#isValidType(type);
    this.#init();
  }

  static statusMess = {
    success: 'Сообщение о успехе',
    error: 'Сообщение о ошибке',
    info: 'Информационное сообщение',
  };

  #isValidType(value) {
    if (['success', 'error', 'info'].includes(value)) {
      return value;
    }
    throw new Error('Неправильный тип компонента');
  }

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

const alert = new AlertComponent('Товар добавлен в корзину!', 'error', 4000);
alert.render(document.body);
