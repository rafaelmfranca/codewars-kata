const createPhoneNumber = (numbers) => {
  const x = numbers.slice(0, 3).join('');
  const y = numbers.slice(3, 6).join('');
  const z = numbers.slice(6).join('');
  return `(${x}) ${y}-${z}`;
};

console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  '(123) 456-7890'
);
console.log(
  createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
  '(111) 111-1111'
);
console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  '(123) 456-7890'
);
