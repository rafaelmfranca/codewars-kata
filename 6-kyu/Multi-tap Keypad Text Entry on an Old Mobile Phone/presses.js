const presses = (phrase) => {
  let count = 0;
  const keypad = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', '*', ' 0', '#'];
  phrase.toUpperCase().split('').forEach((ch) => keypad.forEach((str) => count += str.indexOf(ch) + 1));
  return count;
};

console.log(presses("LOL"), 9, "should work for simple examples")
console.log(presses("HOW R U"), 13, "should work for phrases with spaces")