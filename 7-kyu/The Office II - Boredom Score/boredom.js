const boredom = (staff) => {
  const score = Object.values(staff).reduce((acc, value) => acc + dep[value], 0);
  if (score >= 100) return 'party time!!';
  if (score <= 80) return 'kill me now';
  return 'i can handle this';
};

const dep = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  'pissing about': 25,
};
