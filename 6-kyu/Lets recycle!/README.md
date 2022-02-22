## Let's Recycle!

<div class="markdown prose max-w-none" id="description"><h2 id="task">Task</h2>
<p>You will be given a list of objects. Each object has <code>type</code>, <code>material</code>, and possibly <code>secondMaterial</code>. The existing materials are: <code>paper</code>, <code>glass</code>, <code>organic</code>, and <code>plastic</code>.</p>
<p>Your job is to sort these objects across the 4 recycling bins according to their <code>material</code> (and <code>secondMaterial</code> if it's present), by listing the <code>type</code>'s of objects that should go into those bins.</p>
<h3 id="notes">Notes</h3>
<ul>
<li>The bins should come in the same order as the materials listed above</li>
<li>All bins should be listed in the output, even if some of them are empty</li>
<li>If an object is made of two materials, its <code>type</code> should be listed in both of the respective bins</li>
<li>The order of the <code>type</code>'s in each bin should be the same as the order of their respective objects was in the input list</li>
</ul>
<h3 id="example">Example</h3>
<pre><code>input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
</code></pre>
</div>