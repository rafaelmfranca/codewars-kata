const generateHashtag = (str) => {
  if (!str || !str.trim()) return false;
  const formattedStr = str
    .split(' ')
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join('');
  return validateStrSize(`#${formattedStr}`);
};

const validateStrSize = (str) => (str.length <= 140 ? str : false);

console.log(generateHashtag('Do We have A Hashtag'), '#DoWeHaveAHashtag');
console.log(generateHashtag('Codewars'), '#Codewars');
console.log(generateHashtag('Codewars Is Nice'), '#CodewarsIsNice');
console.log(generateHashtag('Codewars is nice'), '#CodewarsIsNice');
console.log(generateHashtag(' '.repeat(200)), false);
