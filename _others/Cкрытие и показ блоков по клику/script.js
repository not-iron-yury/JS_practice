// функция
function initToggleBlocks1() {
  const toggleBlock = document.querySelectorAll('.toggle-block');

  toggleBlock.forEach(block => {
    const btn = block.querySelector('button');
    const content = block.querySelector('.content');

    if (!btn || !content) return;

    btn.addEventListener('click', () => {
      const isHidden = content.classList.contains('hidden');
      btn.textContent = isHidden ? 'Скрыть' : 'Показать';
      content.classList.toggle('hidden');
    });
  });
}

initToggleBlocks1();

// ---------------------------------------------------------------- //

// функция c делегированием
function initToggleBlocks2() {
  const container = document.getElementById('toggle-container');

  container.addEventListener('click', e => {
    if (!e.target.matches('button')) return;

    const block = e.target.closest('.toggle-block');
    const btn = e.target;
    const content = block.querySelector('.content');

    if (!content) return;

    const isHidden = content.classList.contains('hidden');
    btn.textContent = isHidden ? 'Скрыть' : 'Показать';
    content.classList.toggle('hidden');
  });
}

//initToggleBlocks2();

// ---------------------------------------------------------------- //

// класс
class ToggleBlockA {
  constructor(element) {
    this.element = element;
    this.btn = element.querySelector('button');
    this.content = element.querySelector('.content');

    if (!this.button || !this.content) return;

    this.btn.addEventListener('click', () => this.toggle());
  }

  toggle() {
    const isHidden = this.content.classList.contains('hidden');
    this.content.classList.toggle('hidden');
    this.btn.textContent = isHidden ? 'Скрыть' : 'Показать';
  }
}

function initToggleBlocks3() {
  const blocks = document.querySelectorAll('.toggle-block');
  blocks.forEach(block => new ToggleBlockA(block));
}

//initToggleBlocks3();

// ---------------------------------------------------------------- //

// класс с автоопределением начального состояния
class ToggleBlockB {
  constructor(element) {
    this.element = element;
    this.button = element.querySelector('button');
    this.content = element.querySelector('.content');

    if (!this.button || !this.content) return;

    this.updateButton(); // установка текста кнопки

    this.button.addEventListener('click', () => this.toggle());
  }

  toggle() {
    this.content.classList.toggle('hidden');
    this.updateButton();
  }

  updateButton() {
    const isHidden = this.content.classList.contains('hidden');
    this.button.textContent = isHidden ? 'Показать' : 'Скрыть';
  }
}

function initToggleBlocks4() {
  document.querySelectorAll('.toggle-block').forEach(el => new ToggleBlockB(el));
}

//initToggleBlocks4();
