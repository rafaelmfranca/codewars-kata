const sayJoke = async (apiUrl, jokeId) => {
  const response = await fetch(apiUrl);
  const { jokes } = await response.json();

  if (!jokes) throw new Error(`No jokes at url: ${apiUrl}`);

  const jokeObj = jokes.find(({ id }) => id === jokeId);

  if (!jokeObj) throw new Error(`No jokes found id: ${jokeId}`);

  return {
    saySetup: () => jokeObj.setup,
    sayPunchLine: () => jokeObj.punchLine,
  };
};
