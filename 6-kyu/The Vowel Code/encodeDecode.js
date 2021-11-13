const vowels = ['a', 'e', 'i', 'o', 'u'];

function encode(string) {
  return string.split('').map((ch) => vowels.indexOf(ch) + 1 || ch).join('');
}

function decode(string) {
  console.log(string.split(''));
  return string.split('').map((ch) => vowels[Number(ch) - 1] || ch).join('');
}

console.log(encode('hello'), 'h2ll4');
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(decode('h2ll4'), 'hello');