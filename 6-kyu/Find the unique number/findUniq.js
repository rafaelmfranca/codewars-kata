// Clever
const findUniq = (arr) =>
  arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));

// First
const findUniq = (arr) => {
  const numberObj = arr.reduce(
    (acc, number) => (acc[number] = (acc[number] || 0) + 1, acc),
    {}
  );
  console.log(numberObj);
  return Number(Object.keys(numberObj).find((key) => numberObj[key] === 1));
};
