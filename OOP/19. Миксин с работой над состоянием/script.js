// Создай миксин canToggle, который добавляет объекту метод toggle().
// Он должен менять булевое свойство isActive (с true на false и наоборот)
// и выводить в консоль текущий статус ("Состояние: активно" или "Состояние: неактивно").

// Примешай этот миксин к классу Menu.

const canToggle = {
  toggle() {
    this.isActive = !this.isActive;
    console.log(`Состояние: ${this.isActive ? 'активно' : 'неактивно'}`);
  },
};

class Menu {
  constructor(title) {
    this.title = title;
    this.isActive = false;
  }

  show() {
    console.log(`Меню: ${this.title}`);
  }
}

Object.assign(Menu.prototype, canToggle);

const mainMenu = new Menu('Главное');
mainMenu.show(); // Меню: Главное
mainMenu.toggle(); // Состояние: активно
mainMenu.toggle(); // Состояние: неактивно
