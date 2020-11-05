const { trap } = require("./trap");
describe("trap", () => {
  it("Should work for example 1", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
  });

  it("Should work for example 2", () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toEqual(9);
  });

  it("Should work for example 3", () => {
    expect(trap([4, 4, 4, 7, 1, 0])).toEqual(0);
  });
});
