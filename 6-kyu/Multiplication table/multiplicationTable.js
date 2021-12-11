const multiplicationTable = (size) => {
  const output = [];
  for (let i = 1; i <= size; i++) {
    let temp = [i];
    for (let j = 2; j <= size; j++) temp.push(j * i);
    output.push(temp);
  }
  return output;
};

console.log(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);