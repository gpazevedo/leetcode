const { toList } = require("./listUtil");
const { reverseBetween } = require("./reverseBetween");

describe("reverseBetween", () => {
  it('["A", "B", "C", "D"]', () => {
    expect(reverseBetween(toList(["A", "B", "C", "D"]), 1, 2)).toEqual(
      toList(["A", "C", "B", "D"])
    );
  });

  it('["A", "B", "C", "D", "E", "F"]', () => {
    expect(
      reverseBetween(toList(["A", "B", "C", "D", "E", "F"]), 1, 3)
    ).toEqual(toList(["A", "D", "C", "B", "E", "F"]));
  });

  it('["A", "B", "C", "D", "E", "F"]', () => {
    expect(
      reverseBetween(toList(["A", "B", "C", "D", "E", "F"]), 0, 3)
    ).toEqual(toList(["C", "B", "A", "D", "E", "F"]));
  });

  it('["A", "B", "C", "D", "E", "F"]', () => {
    expect(
      reverseBetween(toList(["A", "B", "C", "D", "E", "F"]), 3, 3)
    ).toEqual(toList(["A", "B", "C", "F", "E", "D"]));
  });
});
