const decipherThis = (str) =>
  str.split(' ')
  .map((word) => {
    const asciiCode = word.match(/\d+/g)
    const newWorld = word.replace(asciiCode, String.fromCharCode(asciiCode));
    let aux = newWorld.split('');
    aux[1] = newWorld[newWorld.length - 1];
    aux[newWorld.length - 1] = newWorld[1];
    return aux.join('');
  }).join(' ');

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do');