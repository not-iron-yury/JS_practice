// Сложность: уверенный джун / мидл-

function groupAnagrams(arr) {
  const result = new Map();
  const getAnagramKey = str => str.split('').sort().join('');

  arr.forEach(itm => {
    const key = getAnagramKey(itm);
    result.has(key) ? result.get(key).push(itm) : result.set(key, [itm]);
  });

  return [...result.values()];
}

console.log(groupAnagrams(['кот', 'ток', 'кто', 'окт', 'акул', 'лука', 'пила', 'лапи', 'пал']));
// [
//   ["кот", "ток", "кто", "окт"],
//   ["акул", "лука"],
//   ["пила", "лапи"],
//   ["пал"]
// ]

console.log(groupAnagrams(['пила', 'пал', 'лука', 'акул', 'кот', 'кто', 'ток', 'окт', 'лапи']));
// [
// ['пила', 'лапи']
// ['пал']
// ['лука', 'акул']
// ['кот', 'кто', 'ток', 'окт']
// ]
