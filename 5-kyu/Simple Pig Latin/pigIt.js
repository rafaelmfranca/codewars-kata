const pigIt = (str) => str.split(' ').map((word) => !/[^\w\s]/.test(word) ? `${word.substr(1)}${word.charAt(0)}ay` : word).join(' ');  

console.log(pigIt('Pig latin is ! cool'),'igPay atinlay siay ! oolcay')
console.log(pigIt('This is my string'),'hisTay siay ymay tringsay')