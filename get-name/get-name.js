const getName = object => {
  const { name } = object;

  if(typeof name === 'string') return name;

  throw new Error('No name or not a string');
};

module.exports = {
  getName
}