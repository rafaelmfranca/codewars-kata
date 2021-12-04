## Decipher this!

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:
<ul>
<li>the second and the last letter is switched (e.g. <code>Hello</code> becomes <code>Holle</code>)</li>
<li>the first letter is replaced by its character code (e.g. <code>H</code> becomes <code>72</code>)</li>
</ul>

Note: there are no special characters used, only letters and spaces

#### Examples
```javascript
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
```