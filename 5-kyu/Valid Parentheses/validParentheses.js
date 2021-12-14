const validParentheses = (parens) => {
  let count = 0;
  for (let c of parens) {
    c === '(' ? count++ : count--;
    if (count === -1) return false;
  }
  return count === 0
};

console.log(validParentheses('()'), true);
console.log(validParentheses(')(()))'), false);
console.log(validParentheses('('), false);
console.log(validParentheses('(())((()())())'), true);