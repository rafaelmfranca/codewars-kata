## Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:
<ul>
<li><code>true</code> if all developers in the list code in the same language; or</li>
<li><code>false</code> otherwise.</li>
</ul>
For example, given the following input array:

```javascript
var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];
```
your function should return ```true```.

Notes:
<ul>
<li>The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S' </li>
<li>The input array will always be valid and formatted as in the example above.
</li>
</ul>