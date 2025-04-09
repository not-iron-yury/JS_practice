// А теперь next level — наследуемый IconButton

// Создай IconButton, который:
// Наследуется от Button
// Принимает ещё один параметр icon — строка с emoji или текстовой иконкой

// В constructor:
// вызывает super(...)
// добавляет иконку в начало текста

// Не меняет поведение render и обработку клика

// Пример:

// const saveBtn = new IconButton('💾', 'Сохранить', () => alert('Сохранил!'));
// saveBtn.render(document.body); // [💾 Сохранить]

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

class IconButton extends Button {
  constructor(icon, label, onClick) {
    super(label, onClick);
    this.icon = icon;
    this.element.textContent = `${this.icon} ${this.label}`;
  }
}

const saveBtn = new IconButton('💾', 'Сохранить', () => console.log('Сохранил!'));
saveBtn.render(document.body); // [💾 Сохранить]
