// Задача 6: Компонент ToggleButton
// Сделаем кнопку-переключатель: при каждом клике она меняет своё состояние (вкл/выкл) и отображает это.

// Условия:
// Класс ToggleButton, наследует Button

// Принимает:
// labelOn — текст, когда включено
// labelOff — текст, когда выключено
// initialState (по умолчанию false)

// Хранит состояние в this.isActive

// При клике:
// меняет isActive
// обновляет текст кнопки

// Пример:
// const toggle = new ToggleButton('Вкл', 'Выкл');
// toggle.render(document.body);  // Вкл или Выкл

class Button {
  constructor(label, onClick) {
    this.label = label;
    this.onClick = onClick;
    this.element = document.createElement('button');
    this.element.textContent = this.label;
    this.element.addEventListener('click', this.onClick);
  }

  render(container) {
    container.append(this.element);
  }
}

// Вариант 1 (Cложный)
class ToggleButton1 extends Button {
  constructor(labelOn, labelOff, initialState = false) {
    super('', () => this.toggle()); // только срелочная функция

    this.labelOn = labelOn;
    this.labelOff = labelOff;
    this.isActive = initialState;

    this.changeLabel();
  }

  toggle() {
    this.isActive = !this.isActive;
    this.changeLabel();
  }
  changeLabel() {
    this.element.textContent = this.isActive ? this.labelOn : this.labelOff;
  }
}

// Вариант 2 (Упрощённый)
class ToggleButton2 extends Button {
  constructor(labelOn, labelOff, initialState = false) {
    const initialLabel = initialState ? labelOn : labelOff;
    super(initialLabel, () => this.toggle()); // только срелочная функция

    this.labelOn = labelOn;
    this.labelOff = labelOff;
    this.isActive = initialState;
  }

  toggle() {
    this.isActive = !this.isActive;
    this.element.textContent = this.isActive ? this.labelOn : this.labelOff;
  }
}

const toggle1 = new ToggleButton1('Вкл', 'Выкл');
toggle1.render(document.body); // Выкл

const toggle2 = new ToggleButton2('Вкл', 'Выкл', true);
toggle2.render(document.body); // Вкл

// Разница:
// Вариант1 - гибче, полный контроль, легче развивать
// Вариант2 - проще читается, использует возможности родителя, легче писать
