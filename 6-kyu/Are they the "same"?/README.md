## Are they the "same"?
Given two arrays ```a``` and ```b``` write a function ```comp(a, b)``` (or```compSame(a, b)```) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in ```b``` are the elements in ```a``` squared, regardless of the order.

### Examples
Valid arrays
```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
```
```comp(a, b)``` returns true because in ```b``` 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write ```b```'s elements in terms of squares:
```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
```
Invalid arrays
If, for example, we change the first number to something else, ```comp``` is not returning true anymore:
```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
```
```comp(a,b)``` returns false because in ```b``` 132 is not the square of any number of ```a```.
```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
```
```comp(a,b)``` returns false because in ```b``` 36100 is not the square of any number of ```a```.

<strong>Remarks</strong>
<ul>
<li><code>a</code> or <code>b</code> might be <code>[] or {}</code> (all languages except R, Shell).</li>
<li><code>a</code> or <code>b</code> might be <code>nil</code> or <code>null</code> or <code>None</code> or <code>nothing</code> (except in C++, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift). </li>
</ul>
<p>If <code>a</code> or <code>b</code> are <code>nil</code> (or <code>null</code> or <code>None</code>, depending on the language), the problem doesn't make sense so return false.</p>

<strong>Note for C</strong>

The two arrays have the same size ```(> 0)``` given as parameter in function ```comp```.


