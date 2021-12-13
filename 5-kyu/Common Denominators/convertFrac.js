const convertFrac = (lst) => {
  const den = lst.map(([_, d]) => d);
  console.log(den)
  const lcm = calcLcm(den);
  return lst.map(([n, d]) => `(${n * lcm / d},${lcm})`).join('');
};

// Using Euclid's algorithm
const calcLcm = (arr) => {
  let ans = arr[0];
  arr.forEach((d) => ans = d * ans / calcGcd(d, ans));
  return ans;
}; 

const calcGcd = (a, b) => b === 0 ? a : calcGcd(b, a % b);

const lst = [ [1, 2], [1, 3], [1, 4] ];
console.log(convertFrac(lst), "(6,12)(4,12)(3,12)");