const { longestSubString } = require("./longestSubString");

describe("longestSubString", () => {
  it("", () => {
    expect(longestSubString("")).toBe(0);
  });

  it("a", () => {
    expect(longestSubString("a")).toBe(1);
  });

  it("aa", () => {
    expect(longestSubString("aa")).toBe(1);
  });

  it("abc", () => {
    expect(longestSubString("abc")).toBe(3);
  });

  it("aabc", () => {
    expect(longestSubString("aabc")).toBe(3);
  });

  it("aabca", () => {
    expect(longestSubString("aabca")).toBe(3);
  });

  it("aabcazsd", () => {
    expect(longestSubString("aabcazsd")).toBe(6);
  });

  it("aabcaazsd", () => {
    expect(longestSubString("aabcaazsd")).toBe(4);
  });

  it("aabcaazasd", () => {
    expect(longestSubString("aabcaazasd")).toBe(4);
  });

  it("aabcaazasad", () => {
    expect(longestSubString("aabcaazasad")).toBe(3);
  });
});
