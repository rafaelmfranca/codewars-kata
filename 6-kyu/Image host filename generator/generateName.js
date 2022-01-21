const generateRandomString = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randomString = '';

  for (let i = 0; i < 6; i++) {
    randomString += characters[Math.floor(Math.random() * characters.length)];
  }

  return randomString;
};

const generateName = () => {
  let name = '';
  let flag = true;

  do {
    name = generateRandomString();
    photoManager.nameExists(name) ? flag : (flag = false);
  } while (flag);

  return name;
};
