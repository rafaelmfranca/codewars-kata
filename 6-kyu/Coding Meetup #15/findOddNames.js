const findOddNames = (list) => list.filter(({ firstName }) => firstName.split('').reduce((acc, ch) => acc + ch.charCodeAt(), 0) % 2);

const list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

const answer1 = [
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

const list2 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
];

const answer2 = [];

console.log(findOddNames(list1), answer1);
console.log(findOddNames(list2), answer2);