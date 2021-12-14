## Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:
<ul>
<li><code>true</code>  if at least one Ruby developer has signed up; or</li>
<li><code>false</code> if there will be no Ruby developers.</li>
</ul>

For example, given the following input array:
```javascript
var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
```
your function should return ```true```.

Notes:
<ul>
<li>The input array will always be valid and formatted as in the example above.
</li>
</ul>