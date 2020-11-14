const { toList } = require("./listUtil");
const { reverse } = require("./reverse");

describe("Reverse", () => {
  xit("[]", () => {
    const head = toList([]);

    expect(reverse(head)).toEqual(head);
  });

  xit("[A]", () => {
    const head = toList(["A"]);

    expect(reverse(head)).toEqual(head);
  });

  xit('["A", "B", "C"]', () => {
    const head = toList(["A", "B", "C"]);

    expect(reverse(head)).toEqual(toList(["C", "B", "A"]));
  });
});
