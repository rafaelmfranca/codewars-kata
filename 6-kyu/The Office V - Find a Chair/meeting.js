const meeting = (x, need) => {
  if (!need) return 'Game On';

  const result = [];
  for (let [occ, chairs] of x) {
    const n = Math.min(need, Math.max(0, chairs - occ.length));
    result.push(n);
    need -= n;
    if (!need) return result;
  }

  return 'Not enough!';
};
