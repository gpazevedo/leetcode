const { twoSum } = require("./two-sum");

describe("Two Sum", () => {
  it("Should work with example 1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("Should work with example 1", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("Should work with example 1", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
