const randomizer = () => {
  const min = 10;
  const max = 80;
  return Math.random() * (max - min) + min;
};

module.exports = randomizer;