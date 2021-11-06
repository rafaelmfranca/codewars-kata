## Roman Numerals Encoder

<p>Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.</p>
<p>Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.</p>
<p>Example:</p>
<pre><code class="language-javascript"><span class="cm-variable">solution</span>(<span class="cm-number">1000</span>); <span class="cm-comment">// should return 'M'</span>
</code></pre>

<p>Help:</p>
<pre><code>Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
</code></pre>
<p>Remember that there can't be more than 3 identical symbols in a row.</p>
<p>More about roman numerals - <a href="http://en.wikipedia.org/wiki/Roman_numerals" target="_blank">http://en.wikipedia.org/wiki/Roman_numerals</a></p>