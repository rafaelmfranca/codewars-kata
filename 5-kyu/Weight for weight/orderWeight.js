const sum = (num) => num.split('').reduce((acc, curr) => acc + Number(curr), 0);

const orderWeight = (str) =>
  str
    .split(' ')
    .sort((a, b) => (sum(a) === sum(b) ? a.localeCompare(b) : sum(a) - sum(b)))
    .join(' ');

console.log(orderWeight('103 123 4444 99 2000'), '2000 103 123 4444 99');
console.log(
  orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'),
  '11 11 2000 10003 22 123 1234000 44444444 9999'
);
