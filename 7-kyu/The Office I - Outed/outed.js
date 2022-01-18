const outed = (meet, boss) => {
  const meetList = Object.entries(meet);
  const rating =
    meetList.reduce((acc, [name, value]) => (name === boss ? acc + value * 2 : acc + value), 0) /
    meetList.length;

  return rating <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
};
