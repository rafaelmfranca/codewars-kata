## Roman Numerals Encoder

<p>Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.</p>
<p>Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.</p>
<p>Example:</p>
<pre><code class="language-javascript"><span class="cm-variable">solution</span>(<span class="cm-number">1000</span>); <span class="cm-comment">// should return 'M'</span>
</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">solution</span><span class="cm-punctuation">(</span><span class="cm-number">1000</span><span class="cm-punctuation">)</span> <span class="cm-comment"># should return 'M'</span>
</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="cm-variable">solution</span>(<span class="cm-number">1000</span>) <span class="cm-comment"># should return 'M'</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">solution</span>(<span class="cm-number">1000</span>) <span class="cm-comment"># should return 'M'</span>
</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="cm-variable">solution</span> <span class="cm-number">1000</span> <span class="cm-comment">-- should return "M"</span>
</code></pre>
<pre style="display: none;"><code class="language-java"><span class="cm-variable">conversion</span>.<span class="cm-variable">solution</span>(<span class="cm-number">1000</span>); <span class="cm-comment">//should return "M"</span>
</code></pre>
<pre style="display: none;"><code class="language-typescript"><span class="cm-variable">solution</span>(<span class="cm-number">1000</span>); <span class="cm-comment">// should return 'M'</span>
</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="cm-variable">solution</span>(<span class="cm-number">1000</span>); <span class="cm-comment">// should return "M"</span>
</code></pre>
<pre style="display: none;"><code class="language-php"><span class="cm-variable">solution</span>(<span class="cm-number">1000</span>); <span class="cm-comment">// should return "M"</span>
</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="cm-variable">RomanConvert</span>.<span class="cm-variable">Solution</span>(<span class="cm-number">1000</span>) <span class="cm-operator">--</span> <span class="cm-variable">should</span> <span class="cm-keyword">return</span> <span class="cm-string">"M"</span>
</code></pre>
<pre style="display: none;"><code class="language-swift"><span class="cm-variable">solution</span><span class="cm-punctuation">(</span><span class="cm-number">1000</span><span class="cm-punctuation">)</span> <span class="cm-comment">// should return "M"</span>
</code></pre>
<pre style="display: none;"><code class="language-elixir"><span class="cm-variable">solution</span>(<span class="cm-number">1000</span>) <span class="cm-comment"># should return "M"</span>
</code></pre>
<pre style="display: none;"><code class="language-r"><span class="cm-variable">solution</span>(<span class="cm-number">1000</span>) <span class="cm-comment"># should return "M"</span>
</code></pre>
<pre style="display: none;"><code class="language-c"><span class="cm-variable">solution</span>(<span class="cm-number">1000</span>); <span class="cm-comment">// =&gt; "M"</span>
</code></pre>
<pre style="display: none;"><code class="language-nim"><span class="cm-variable">solution</span>(<span class="cm-number">1000</span>) <span class="cm-comment"># should return "M"</span>
</code></pre>
<pre style="display: none;"><code class="language-lua"><span class="cm-variable">romanEncoder</span>(<span class="cm-number">1000</span>) <span class="cm-comment">-- should return 'M'</span>
</code></pre>
<pre style="display: none;"><code class="language-scala"><span class="cm-variable">Roman</span>.<span class="cm-variable">encode</span>(<span class="cm-number">1000</span>) <span class="cm-comment">// should return "M"</span>
</code></pre>
<pre style="display: none;"><code class="language-kotlin"><span class="cm-variable">encode</span>(<span class="cm-number">1000</span>) <span class="cm-comment">// should return "M"</span>
</code></pre>
<pre style="display: none;"><code class="language-clojure"><span class="cm-bracket">(</span><span class="cm-builtin">solution</span> <span class="cm-number">1000</span><span class="cm-bracket">)</span> <span class="cm-comment">;; should return "M"</span>
</code></pre>
<pre style="display: none;"><code class="language-julia"><span class="cm-variable">encoderomannumeral</span>(<span class="cm-number">1000</span>) <span class="cm-comment"># should return "M"</span>
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