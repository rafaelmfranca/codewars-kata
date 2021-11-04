function getCount(str) {
    let vowelsCount = 0;
    const vowels = 'aeiou';

    str.split('').forEach(ch => vowels.includes(ch) ? vowelsCount++ : vowelsCount);

    return vowelsCount;
}


console.log(getCount("abracadabra"), 5)