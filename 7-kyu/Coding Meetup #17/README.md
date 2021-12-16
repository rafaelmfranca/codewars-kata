## Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:
```javascript
var list1 = [  
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];
```
Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name:
```javascript
[ 
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' }
];
```
Notes:
<ul>
<li>The input array will always be valid and formatted as in the example above.</li>
<li>The array does not include developers coding in the same language and sharing the same name.
</li>
</ul>