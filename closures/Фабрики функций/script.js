function createDiscount(discountPercentage) {
  return function (price) {
    return price * (1 - discountPercentage / 100);
  };
}

const tenPercentDiscount = createDiscount(10);
const twentyPercentDiscount = createDiscount(20);

console.log(tenPercentDiscount(100)); // 90
console.log(twentyPercentDiscount(200)); // 160
console.log(tenPercentDiscount(50)); // 45
