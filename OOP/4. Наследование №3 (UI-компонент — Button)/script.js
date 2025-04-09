// Задача 5: UI-компонент — Button

// Создай класс Button, который:
// 1. В конструкторе принимает:
//    label — текст кнопки
//    onClick — функция-обработчик клика
// 2. Создаёт DOM-элемент кнопки (<button>)
// 3. Записывает его в свойство this.element
// 4. Вешает обработчик клика на this.element
// 5. Метод render(container) — добавляет кнопку в переданный DOM-элемент

// Пример использования:
// const myButton = new Button('Нажми меня', () => alert('Клик!'));
// myButton.render(document.body);

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

const myButton = new Button('Нажми меня', () => console.log('Клик!'));
myButton.render(document.body);
