function isCleanNumber(value) {
  if (typeof value === 'number') {
    return Number.isInteger(value) && value >= 0;
  }

  if (typeof value === 'string') {
    // только цифры, без пробелов, без ведущих нулей (кроме '0')
    return /^[1-9]\d*$/.test(value) || value === '0';
  }

  return false;
}

console.log(isCleanNumber(42)); // true
console.log(isCleanNumber('42')); // true
console.log(isCleanNumber('0042')); // false
console.log(isCleanNumber('42a')); // false
console.log(isCleanNumber('-42')); // false
console.log(isCleanNumber(' 42 ')); // false
console.log(isCleanNumber(3.14)); // false
console.log(isCleanNumber('3.14')); // false
console.log(isCleanNumber('0')); // true
console.log(isCleanNumber(0)); // true
