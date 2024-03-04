const minMax = require("./minMax");

test("Vergleich bei a < b", () => {
  const result = minMax.min(2, 10);

  expect(result).toEqual(2);
});

test("Vergleich bei b < a", () => {
  const result = minMax.min(10, 2);

  expect(result).toEqual(2);
});

test("Vergleich bei a > b", () => {
  const result = minMax.max(10, 2);

  expect(result).toEqual(10);
});

test("Vergleich bei b > a", () => {
  const result = minMax.max(2, 10);

  expect(result).toEqual(10);
});
