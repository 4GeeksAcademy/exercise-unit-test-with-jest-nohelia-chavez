// test.js
const { sum, oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
  expect(sum(14, 9)).toBe(23);
});

test('1 EUR -> 1.07 USD', () => {
  expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

test('1 USD -> JPY', () => {
  const expected = (1 / oneEuroIs.USD) * oneEuroIs.JPY;
  expect(fromDollarToYen(1)).toBeCloseTo(expected, 5);
});

test('1000 JPY -> GBP', () => {
  const expected = (1000 / oneEuroIs.JPY) * oneEuroIs.GBP;
  expect(fromYenToPound(1000)).toBeCloseTo(expected, 5);
});
