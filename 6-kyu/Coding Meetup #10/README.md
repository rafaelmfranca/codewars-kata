## Coding Meetup #10 - Higher-Order Functions Series - Create usernames

Given the following input array:
```javascript
var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
```
write a function that adds the ```username``` property to each object in the input array:
```javascript
[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]
```
The value of the ```username``` property is composed by concatenating:
<ul>
<li><code>firstName</code> in lower-case;</li>
<li>first letter of the <code>lastName</code> in lower-case; and </li>
<li>the birth year which for the purpose of this kata is calculated simply by subtracting <code>age</code> from the current year. <strong>Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time.</strong> The example above assumes that the function is run in year 2020.</li>
</ul>
<p>Notes:</p>
<ul>
<li>The input array will always be valid and formatted as in the example above.</li>
<li>Age is represented by a number which can be any positive integer.</li>
<li>Lastname will always be one upper-cased letter followed by dot, e.g. <code>'N.'</code></li>
<li>Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.
</li>
</ul>