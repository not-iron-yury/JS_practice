// Задача 7: Класс ProductCard

// Создай класс ProductCard, который:

// 1. Принимает объект продукта:
// {
//   name: 'Шоколад',
//   price: 120,
//   discount: 10,
//   image: 'https://example.com/choco.png'
// }

// 2. Создаёт DOM-элемент карточки товара, примерно следующей структуры:

// <div class="product-card">
//   <img src="..." />
//   <h3>Название</h3>
//   <p>Цена без скидки: 120₽</p>
//   <p>Цена со скидкой: 108₽</p>
//   <button>Купить</button>
// </div>

// 3. Вешает на кнопку обработчик клика (onBuy) — просто выводит alert('Вы купили Шоколад')

// 4. Метод render(container) добавляет карточку в DOM

// 💡 Подсказка:
// Ты можешь в конструкторе создать элементы через document.createElement,
// а можешь собрать innerHTML строкой — как тебе удобно.

// Пример вызова:
// const product = {
//   name: 'Шоколад',
//   price: 120,
//   discount: 10,
//   image: 'https://dummyimage.com/100x100/000/fff&text=🍫'
// };

// const card = new ProductCard(product);
// card.render(document.body);

function createProductCard(product) {
  const сardElem = document.createElement('div');
  const imageElem = document.createElement('img');
  const titleElem = document.createElement('h3');
  const priceElem = document.createElement('p');
  const priceWithDiscountElem = document.createElement('p');
  const buttonElem = document.createElement('button');

  сardElem.className = 'product-card';
  imageElem.src = product.image;
  titleElem.textContent = product.name;
  priceElem.textContent = `Цена без скидки: ${product.price}₽`;
  priceWithDiscountElem.textContent = `Цена со скидкой: ${product.price * (1 - product.discount / 100)}₽`;
  buttonElem.textContent = 'Купить';

  сardElem.append(imageElem, titleElem, priceElem, priceWithDiscountElem, buttonElem);

  return [сardElem, buttonElem];
}

class ProductCard {
  constructor(product) {
    [this.productElement, this.btn] = createProductCard(product);
    this.btn.addEventListener('click', () => this.onBuy());
  }
  render(container) {
    container.append(this.productElement);
  }
  onBuy() {
    console.log('Товар добавлен в корзину!');
  }
}

const product = {
  name: 'Шоколад',
  price: 120,
  discount: 10,
  image: 'https://dummyimage.com/100x100/000/fff&text=🍫',
};

const card = new ProductCard(product);
card.render(document.body);
