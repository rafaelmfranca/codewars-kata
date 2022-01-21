## Image host filename generator

<div class="markdown prose max-w-none" id="description"><p>You are developing an image hosting website.</p>
<p>You have to create a function for generating random and unique image filenames.</p>
<p>Create a function for generating a random 6 character string which will be used to access the photo URL. </p>
<p>To make sure the name is not already in use, you are given access to an PhotoManager object.</p>
<p>You can call it like so to make sure the name is unique</p>
<pre><code class="language-javascript"><span class="cm-comment">// at this point, the website has only one photo, hosted on the 'ABCDEF' url</span>
<span class="cm-variable">photoManager</span>.<span class="cm-property">nameExists</span>(<span class="cm-string">'ABCDEF'</span>); <span class="cm-comment">// returns true</span>
<span class="cm-variable">photoManager</span>.<span class="cm-property">nameExists</span>(<span class="cm-string">'BBCDEF'</span>); <span class="cm-comment">// returns false</span>
</code></pre>
<pre style="display: none;"><code class="language-java"><span class="cm-comment">// at this point, the website has only one photo, hosted on the 'ABCDEF' url</span>
<span class="cm-variable">photoManager</span>.<span class="cm-variable">nameExists</span>(<span class="cm-string">"ABCDEF"</span>); <span class="cm-comment">// returns true</span>
<span class="cm-variable">photoManager</span>.<span class="cm-variable">nameExists</span>(<span class="cm-string">"BBCDEF"</span>); <span class="cm-comment">// returns false</span>
</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="cm-comment">// at this point, the website has only one photo, hosted on the 'ABCDEF' url</span>
<span class="cm-variable">photoManager</span>.<span class="cm-variable">nameExists</span>(<span class="cm-string">"ABCDEF"</span>); <span class="cm-comment">// returns true</span>
<span class="cm-variable">photoManager</span>.<span class="cm-variable">nameExists</span>(<span class="cm-string">"BBCDEF"</span>); <span class="cm-comment">// returns false</span>
</code></pre>
<p><strong>Note:</strong> We consider two names with same letters but different cases to be unique.</p>
</div>
