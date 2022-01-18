const broken = (x) =>
  x
    .split('')
    .map((ch) => (ch === '0' ? 1 : 0))
    .join('');
