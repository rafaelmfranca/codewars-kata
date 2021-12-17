const numbersOfLetters = (integer) => {
  const nameOfDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const ans = [];
  while (ans[ans.length - 1] !== 'four') {
    const str = String(integer).split('').reduce((acc, digit) => `${acc}${nameOfDigit[digit]}`, '');
    ans.push(str);
    integer = str.length
  };
  return ans;
};

console.log(numbersOfLetters(1), ["one", "three", "five", "four"]);
console.log(numbersOfLetters(12), ["onetwo", "six", "three", "five", "four"]);
console.log(numbersOfLetters(37), ["threeseven", "onezero", "seven", "five", "four"]);
console.log(numbersOfLetters(311), ["threeoneone", "oneone", "six", "three", "five", "four"]);
console.log(numbersOfLetters(999), ["nineninenine", "onetwo", "six", "three", "five", "four"]);