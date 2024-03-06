const { isAdult } = require("./ageFunctions");

describe("Tests for isAdult Function", () => {
  test("Test for age being 18", () => {
    expect(isAdult(18)).toBe(true);
  });
  test("Test for input not being a number", () => {
    expect(() => {
      isAdult("zwölf");
    }).toThrow(TypeError);
  });
  test("Test for age being less than 0", () => {
    expect(() => {
      isAdult(-1);
    }).toThrow(TypeError);
  });
});
