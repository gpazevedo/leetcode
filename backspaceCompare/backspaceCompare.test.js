var { backspaceCompare } = require("./backspaceCompare");
const { lastChar } = require("./backspaceCompare");

describe("lastChar", () => {
  it("a#", () => {
    expect(lastChar("a#", 1)).toEqual(["", -1]);
  });

  it("a##", () => {
    expect(lastChar("a##", 2)).toEqual(["", -1]);
  });

  it("a#a", () => {
    expect(lastChar("a#a", 2)).toEqual(["a", 1]);
  });

  it("ab##", () => {
    expect(lastChar("ab##", 3)).toEqual(["", -1]);
  });

  it("c#d#", () => {
    expect(lastChar("c#d#", 3)).toEqual(["", -1]);
  });
});

describe("backspaceCompare", () => {
  it("Should work for example 1", () => {
    expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
  });

  it("Should work for example 2", () => {
    expect(backspaceCompare("ab##", "c#d#")).toBe(true);
  });

  it("Should work for example 3", () => {
    expect(backspaceCompare("a##c", "#a#c")).toBe(true);
  });

  it("Should work for example 4", () => {
    expect(backspaceCompare("a#c", "b")).toBe(false);
  });
});
