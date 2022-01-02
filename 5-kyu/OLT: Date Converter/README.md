## One Line Task : Date converter (not that date, the other one)

Given a date period in the following format :

```
vvvv----------- Year
YYYYMM
    ^^--------------- Month
```

An example input could look like this :

```
vvvv---------------- 4 digit code representing the year (2018)
201809
    ^^--------------- 2 digit code representing the month (Sep)
```

Output the same date period in the following format :

```
 vvv------------------------- 3 chars for month
 MMMYY
    ^^---------------- Last 2 digits of the year
```

The output for the above input would be :

```
 vvv------------------- Month (spetember)
 Sep18
    ^^------------- Year (2018)
```

Generalising :

Given input in the form `YYYYMM` output in the form `MMMYY`.

The last two digits of the input will correspond to a month.

The table for them is given as :

```
{
  '01' : 'Jan'
  '02' : 'Feb',
  '03' : 'Mar',
  '04' : 'Apr',
  '05' : 'May',
  '06' : 'Jun',
  '07' : 'Jul',
  '08' : 'Aug',
  '09' : 'Sep',
  '10' : 'Oct',
  '11' : 'Nov',
  '12' : 'Dec',
 }
```

Output should always consist of the following :

first three chars of the month (use above table) and the last two chars of the year (from input).

### Notes:

<ul>
<li>The input will always be six digits long.</li>
<li>The first four digits will always represent the year</li>
<li>The last two digits of input will represent the code for month</li>
<li>The code will be from <code>01 --- 12</code></li>
<li>Input will always be valid</li>
<li>First character of month must be capital while rest must be small</li>
</ul>

### Restrictions:

<ul>
<li>You must not import anything</li>
<li>You must complete the task in under/equal to 52 bytes </li>
<li>You must not use more than one line</li>
</ul>
