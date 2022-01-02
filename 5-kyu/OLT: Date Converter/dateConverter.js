// Solution
const f2 = (i) => `${new Date(i.slice(-2))}`.slice(4, 7) + i.slice(2, 4);

// Test -> Max numbers of chars = 52
f=i=>`${new Date(i.slice(4))}`.slice(4,7)+i[2]+i[3];

console.log(f('201809'));
console.log(f('999901'));
