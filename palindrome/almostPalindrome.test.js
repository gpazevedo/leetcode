const { isPalindrome, almostPalindrome } = require("./almostPalindrome");
//  isPalindrome(clearStr, dif, left, right)
describe("isPalindrome", () => {
  it("'' IS a palindrome", () => {
    expect(isPalindrome("", 0, 0, 0)).toBe(true);
  });

  it("'a' IS a palindrome", () => {
    expect(isPalindrome("a", 1, 0, 0)).toBe(true);
  });

  it("'aa' IS a palindrome", () => {
    expect(isPalindrome("aa", 0, 0, 1)).toBe(true);
  });

  it("'aba,' IS a palindrome", () => {
    expect(isPalindrome("abba,", 0, 0, 3)).toBe(true);
  });

  it("'abca,' IS a palindrome", () => {
    expect(isPalindrome("abba,", 1, 0, 3)).toBe(true);
  });

  it("'abc' is NOT a palindrome", () => {
    expect(almostPalindrome("abc", 0)).toBe(false);
  });

  it("'abcc,B A' IS a palindrome", () => {
    expect(almostPalindrome("abcc,B A", 0)).toBe(true);
  });

  it("'A man, a plan, a canal: Panama'", () => {
    expect(almostPalindrome("A man, a plan, a canal: Panama", 0)).toBe(true);
  });

  it("'A man, a plan, a canaTl: Panama'", () => {
    expect(almostPalindrome("A man, a plan, a canaTl: Panama", 1)).toBe(true);
  });

  it("'A man, a plan, a cTanal: Panama'", () => {
    expect(almostPalindrome("A man, a plan, a cTanal: Panama", 1)).toBe(true);
  });

  it("'A manX, a plan, a cTanal: Panama'", () => {
    expect(almostPalindrome("A manX, a plan, a cTanal: Panama", 2)).toBe(true);
  });
});
