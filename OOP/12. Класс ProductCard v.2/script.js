class PriceHelper {
  static format(price) {
    return this.isValid(price) ? `${Math.round(price)}₽` : '—';
  }

  static applyDiscount(price, discount) {
    return this.isValid(price) && this.isValid(discount) ? price * (1 - discount / 100) : null;
  }

  static isValid(value) {
    return typeof value === 'number' && !Number.isNaN(value) && value >= 0;
  }
}

class ProductCard {
  constructor(product) {
    this.product = product;
    this.element = this.#createCard();
  }

  #createCard() {
    const card = document.createElement('div');
    card.className = 'product-card';

    const image = document.createElement('img');
    image.src = this.product.image;
    image.alt = this.product.name;
    image.width = 100;
    image.height = 100;

    const title = document.createElement('h3');
    title.textContent = this.product.name;

    const originalPrice = document.createElement('p');
    originalPrice.textContent = `Цена: ${PriceHelper.format(this.product.price)}`;

    const finalPrice = document.createElement('p');
    const discounted = PriceHelper.applyDiscount(this.product.price, this.product.discount);
    finalPrice.textContent = `Со скидкой: ${PriceHelper.format(discounted)}`;

    const button = document.createElement('button');
    button.textContent = 'Купить';
    button.addEventListener('click', () => this.#handleBuy());

    card.append(image, title, originalPrice, finalPrice, button);
    return card;
  }

  #handleBuy() {
    console.log(`🛒 "${this.product.name}" добавлен в корзину!`);
  }

  render(container) {
    container.append(this.element);
  }
}

const product = {
  name: 'Какао',
  price: 250,
  discount: 20,
  image: 'https://dummyimage.com/100x100/000/fff&text=🍫',
};

const card = new ProductCard(product);
card.render(document.body);
