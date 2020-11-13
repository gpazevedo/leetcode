const { isPalindrome } = require("./palindrome");

describe("isPalindrome", () => {
  it("'' IS a palindrome", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("'a' IS a palindrome", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("'aa' IS a palindrome", () => {
    expect(isPalindrome("aa")).toBe(true);
  });

  it("'aa,' IS a palindrome", () => {
    expect(isPalindrome("aa,")).toBe(true);
  });

  it("'abc' is NOT a palindrome", () => {
    expect(isPalindrome("abc")).toBe(false);
  });

  it("'abcc,B A' IS a palindrome", () => {
    expect(isPalindrome("abcc,B A")).toBe(true);
  });

  it("'A man, a plan, a canal: Panama'", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
});
