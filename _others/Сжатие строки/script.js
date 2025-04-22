function shortestCompressed(str) {
  if (str === '') return '';

  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      result += `${count}${str[i]}`;
      count = 1;
    } else {
      count += 1;
    }
  }

  return result.length >= str.length ? str : result;
}

console.log(shortestCompressed('aaabcccccaaa')); // "3a1b5c3a"
console.log(shortestCompressed('abcdef')); // "abcdef" (невыгодно сжимать)
console.log(shortestCompressed('aabbcc')); // "aabbcc" (невыгодно)
console.log(shortestCompressed('aabcccccaaa')); // "2a1b5c3a"
console.log(shortestCompressed('aabcccccaaad')); // "2a1b5c3ad1"
console.log(shortestCompressed('aabcccccaaad')); // "2a1b5c3ad1"
console.log(shortestCompressed('')); // ""
