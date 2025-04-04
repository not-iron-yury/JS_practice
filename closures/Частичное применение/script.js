function createTitleFormatter(prefix) {
  return function (title) {
    return prefix + title;
  };
}

const articleFormatter = createTitleFormatter('Статья: ');
const newsFormatter = createTitleFormatter('Новость: ');

console.log(articleFormatter('Как использовать замыкания?')); // "Статья: Как использовать замыкания?"

console.log(newsFormatter('Новые тенденции веб-разработки')); // "Новость: Новые тенденции веб-разработки"
