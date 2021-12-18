const prime_factors = (n) => {
  const factors = [];
  let div = 2;
  while (n >= 2) {
    if (n % div === 0) {
      factors.push(div);
      n /= div;
    } else div++;
  }
  return factors;
};

console.log(prime_factors(1), [])
console.log(prime_factors(10), [2, 5])
console.log(prime_factors(8), [2, 2, 2])
