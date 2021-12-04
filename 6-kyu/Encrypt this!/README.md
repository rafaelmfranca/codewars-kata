## Encrypt this!

### Acknowledgments:
I thank <a href="https://www.codewars.com/users/yvonne-liu" target="_blank">yvonne-liu</a> for the idea and for the example tests :)

### Description:
Encrypt this!

You want to create secret messages which can be deciphered by the <a href="https://www.codewars.com/kata/decipher-this" target="_blank">Decipher this!</a> kata. Here are the conditions:
<ol>
<li>Your message is a string containing space separated words.</li>
<li>You need to encrypt each word in the message using the following rules:<ul>
<li>The first letter must be converted to its ASCII code.</li>
<li>The second letter must be switched with the last letter</li>
</ul>
</li>
<li>Keepin' it simple: There are no special characters in the input.</li>
</ol>

### Examples:
```javascript
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
```