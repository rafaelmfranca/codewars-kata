## Coding Meetup #15 - Higher-Order Functions Series - Find the odd names

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:
```javascript
var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
```
write a function that when executed as ```findOddNames(list1)``` returns only the developers where <strong>if you add the ASCII representation of all characters in their first names, the result will be an odd number:</strong>

```javascript
[
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]
```
Explanation of the above:
<ul>
<li>Sum of ASCII codes of letters in <code>'Aba'</code> is: <code>65 + 98 + 97 = 260</code> which is an even number</li>
<li>Sum of ASCII codes of letters in <code>'Abb'</code> is: <code>65 + 98 + 98 = 261</code> which is an <strong>odd number</strong></li>
</ul>
Notes:
<ul>
<li>Preserve the order of the original list.</li>
<li>Return an empty array <code>[]</code> if there is no developer with an "odd" name.</li>
<li>The input array and first names will always be valid and formatted as in the example above.
</li>
</ul>