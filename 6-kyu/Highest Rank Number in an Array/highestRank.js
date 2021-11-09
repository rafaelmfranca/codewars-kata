function highestRank(numbers) {
    let obj = {};
    numbers.forEach((number) => obj[number] ? obj[number]++ : obj[number] = 1);
    return Number(Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b));
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));
