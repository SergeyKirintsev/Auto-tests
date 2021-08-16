const randomizer = require('./randomizer');

it('Генерирует число от 10 до 80, включая их', () => {
  expect(typeof randomizer()).toBe('number');
  expect(randomizer()).toBeGreaterThanOrEqual(10);
  expect(randomizer()).toBeLessThanOrEqual(80);
});
