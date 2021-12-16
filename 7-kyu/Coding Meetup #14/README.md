## Coding Meetup #14 - Higher-Order Functions Series - Order the food

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an <strong>object which includes the count of food options selected by the developers on the meetup sign-up form..</strong>

For example, given the following input array:
```javascript
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];
```
your function should return the following object (the order of properties does not matter):
```
{ vegetarian: 2, standard: 1, vegan: 1 }
```

Notes:
<ul>
<li>The order of the meals count in the object does not matter. </li>
<li>The count value should be a valid number.</li>
<li>The input array will always be valid and formatted as in the example above.</li>
<li>there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: <code>'standard'</code>,  <code>'vegetarian'</code>, <code>'vegan'</code>, <code>'diabetic'</code>, <code>'gluten-intolerant'</code>.
</li>
</ul>