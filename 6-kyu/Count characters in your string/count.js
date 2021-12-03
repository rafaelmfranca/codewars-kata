function count (string) {
    let obj = {};
    string.split('').forEach((ch) => obj[ch] ? obj[ch]++ : obj[ch] = 1);
    return obj;
}

console.log(count('aba'));