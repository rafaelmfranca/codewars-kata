## Triple Sorting - Sort & Stringify a list by 3 attributes

<div class="markdown prose max-w-none" id="description"><p>Tale University is a bit messy, and can't maintain an ordered list of their student. Tale's dean wants to print a sortet list of his students by the gpa, last name and age and post it on the walls so everybody can be impressed of his great students.</p>
<p>Given a list of students, sort them by (from most important to least important):</p>
<ul>
<li>GPA (descending)</li>
<li>First letter of last name (ascending)</li>
<li>Age (ascending)</li>
</ul>
<p>And the class Student:</p>
<pre style="display: none;"><code class="language-java"><span class="cm-keyword">class</span> <span class="cm-def">Student</span> {
    ...
  <span class="cm-type">int</span> <span class="cm-variable">getGpa</span>()
  <span class="cm-type">int</span> <span class="cm-variable">getAge</span>();
  <span class="cm-type">String</span> <span class="cm-variable">getFullName</span>();
}
</code></pre>
<pre><code class="language-javascript"><span class="cm-keyword">class</span> <span class="cm-def">Student</span> {
  <span class="cm-property">constructor</span>(<span class="cm-def">age</span>, <span class="cm-def">gpa</span>, <span class="cm-def">fullName</span>) {
    <span class="cm-keyword">this</span>.<span class="cm-property">age</span> <span class="cm-operator">=</span> <span class="cm-variable-2">age</span>;
    <span class="cm-keyword">this</span>.<span class="cm-property">gpa</span> <span class="cm-operator">=</span> <span class="cm-variable-2">gpa</span>;
    <span class="cm-keyword">this</span>.<span class="cm-property">fullName</span> <span class="cm-operator">=</span> <span class="cm-variable-2">fullName</span>;
  };
};
</code></pre>
<p>Return the sorted result as full names string, comma separated.</p>
<p>For Example, given the list (name, age, gpa):</p>
<ul>
<li>David Goodman, 23, 88</li>
<li>Mark Rose, 25, 82</li>
<li>Jane Doe, 22, 90</li>
<li>Jane Dane, 25, 90</li>
</ul>
<pre><code class="language-java"><span class="cm-variable">sort</span>(<span class="cm-variable">students</span>) <span class="cm-variable">should</span> <span class="cm-keyword">return</span> <span class="cm-string">"Jane Doe,Jane Dane,David Goodman,Mark Rose"</span>
</code></pre>
</div>
