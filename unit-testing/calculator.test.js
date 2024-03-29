const calculator = require("./calculator");

test("Die Summe von 2 + 5 ist 7", () => {
  const result = calculator.sum(2, 5);

  expect(result).toEqual(7);
});

test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {
  const result = calculator.sum("Apfel", 5);

  expect(result).toEqual("Apfel5");
});

test("Der Quotient aus 10 durch 2 ist 5", () => {
  const result = calculator.divide(10, 2);

  expect(result).toEqual(5);
});

test("Der Quotient aus 10 durch 3 ist nahe an 3,33", () => {
  const result = calculator.divide(10, 3);

  expect(result).toBeCloseTo(3.33, 2);
});

test("Postive durch negative Zahl ist kleiner als 0", () => {
  const result = calculator.divide(10, -2);

  expect(result).toBeLessThan(0);
});

test("Negativ durch negative Zahl ist größer als 0", () => {
  const result = calculator.divide(-10, -2);

  expect(result).toBeGreaterThan(0);
});

// Homework 04.03.2024 + best practices 05.03.2024

test("Subtraktion bei a und b positiv", () => {
  const a = 10;
  const b = 2;
  const differenz = calculator.substract(a, b);

  expect(differenz).toEqual(8);
});

test("Subtraktion bei a oder b negativ", () => {
  const a = 10;
  const b = -2;
  const differenz = calculator.substract(a, b);

  expect(differenz).toEqual(12);
});

test("Subtraktion bei a und b gleich 0", () => {
  const a = 10;
  const b = 0;
  const differenz = calculator.substract(a, b);

  expect(differenz).toEqual(10);
});

test("Multiplikation bei a und b positiv", () => {
  const a = 10;
  const b = 2;
  const produkt = calculator.multiply(a, b);

  expect(produkt).toEqual(20);
});

test("Multiplikation bei a oder b negativ", () => {
  const a = 10;
  const b = -2;
  const produkt = calculator.multiply(a, b);

  expect(produkt).toEqual(-20);
});

test("Multiplikation bei a oder b gleich 0", () => {
  const a = 10;
  const b = 0;
  const produkt = calculator.multiply(a, b);

  expect(produkt).toEqual(0);
});
