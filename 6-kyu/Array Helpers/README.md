## Array Helpers
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in `Array` class with the following methods: `square()`, `cube()`, `average()`, `sum()`, `even()` and `odd()`.

Explanation:
<ul>
  <li><code>square()</code> must return a copy of the array, containing all values squared</li>
  <li><code>cube()</code> must return a copy of the must return a copy of the array, containing all values cubed</li>
  <li><code>average()</code> must must return the average of all array values; on an empty array must return <code>NaN</code> (note: the empty array is <strong>not</strong> tested in Ruby!)</li>
  <li><code>sum()</code> must return the sum of all array values</li>
  <li><code>even()</code> must return must return an array of all even numbers</li>
  <li><code>odd()</code> must return an array of all odd numbers</li>
</ul>

Note: the original array <strong>must not</strong> be changed in any case!

### Example
```javascript
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
```
