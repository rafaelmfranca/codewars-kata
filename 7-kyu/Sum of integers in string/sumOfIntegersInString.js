const sumOfIntegersInString = (s) => {
  const arr = s.match(/\d+/g);
  return arr ? arr.map((ch) => Number(ch)).reduce((a, b) => a + b) : 0;
};
