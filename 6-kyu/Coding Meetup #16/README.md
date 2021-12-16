## Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:
```javascript
var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
```
write a function that
<ol>
<li>adds the <code>question</code> property to each object in the input array where the developer has not provided the relevant details (marked with a <code>null</code> value). The value of the <code>question</code> property should be the following string:</li>
</ol>

<code>Hi, could you please provide your &lt;property name&gt;.</code>

<ol start="2">
<li>and returns only the developers with missing details:</li>
</ol>

```javascript
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
```
Notes:
<ul>
<li>At most only one of the values will be <code>null</code>.</li>
<li>Preserve the order of the original list.</li>
<li>Return an empty array <code>[]</code> if there is no developer with missing details.</li>
<li>The input array will always be valid and formatted as in the example above.
</li>
</ul>