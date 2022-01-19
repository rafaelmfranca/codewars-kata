## The Office V - Find a Chair

<div class="markdown prose max-w-none" id="description"><p>So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.</p>
<p>Your meeting room can take up to <code>8</code> chairs. <code>need</code> will tell you how many have been taken. You need to find that many.</p>
<p>Find the spare chairs from the array of meeting rooms. Each meeting room tuple will have the number of occupants as a string. Each occupant is represented by <code>'X'</code>. The room tuple will also have an integer telling you how many chairs there are in the room.</p>
<p>You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.</p>
<p>example:</p>
<p><code>[['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]]</code> when you need <code>4</code> chairs:</p>
<p><code>result -&gt; [0, 1, 3]</code> no chairs free in room 0, take <code>1</code> from room 1, take <code>3</code> from room 2. no need to consider room 3 as you have your <code>4</code> chairs already.</p>
<p>If you need no chairs, return <code>"Game On"</code>. If there aren't enough spare chairs available, return <code>"Not enough!"</code>.</p>
<p>More in this series:</p>
<p><a href="https://www.codewars.com/kata/the-office-i-outed" target="_blank">The Office I - Outed</a><br><a href="https://www.codewars.com/kata/the-office-ii-boredom-score" target="_blank">The Office II - Boredeom Score</a><br><a href="https://www.codewars.com/kata/the-office-iii-broken-photocopier" target="_blank">The Office III - Broken Photocopier</a><br><a href="https://www.codewars.com/kata/the-office-iv-find-a-meeting-room" target="_blank">The Office IV - Find a Meeting Room</a>  </p>
</div>
