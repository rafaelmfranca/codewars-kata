const moveZeros = (arr) => arr.filter((e) => e !== 0).concat(arr.filter((e) => e === 0));

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));