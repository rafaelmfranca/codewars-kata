const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const high = (x) => {
  const wordsScore = x
    .split(' ')
    .map((word) =>
      word
        .split('')
        .reduce((acc, letter) => acc + (alphabet.indexOf(letter) + 1), 0)
    );
  const highestScoringWordIndex = wordsScore.findIndex(
    (score) => score === Math.max(...wordsScore)
  );
  return x.split(' ')[highestScoringWordIndex];
};
