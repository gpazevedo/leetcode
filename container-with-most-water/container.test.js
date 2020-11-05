const { maxArea } = require("./container");

describe("Container with most water", () => {
  it("Should work for example 1", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it("Should work for example 2", () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it("Should work for example 3", () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });

  it("Should work for example 4", () => {
    expect(maxArea([1, 2, 1])).toBe(2);
  });
});
