const findUniq = (arr) => {
  const mappedArr = arr.map((word) =>
    [...new Set(word.toLowerCase())].sort().join('')
  );
  const uniqueWord = mappedArr.find(
    (word) => 
      mappedArr.indexOf(word) === mappedArr.lastIndexOf(word)
  );
  return arr[mappedArr.indexOf(uniqueWord)];
};

console.log(
  findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']),
  'BbBb'
);
console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']), 'foo');
console.log(findUniq(['silvia', 'vasili', 'victor']), 'victor');
console.log(
  findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']),
  'Harry Potter'
);
console.log(findUniq(['    ', 'a', ' ']), 'a');
