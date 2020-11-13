function almostPalindrome(str, dif) {
  const clearStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = clearStr.length - 1;

  return isPalindrome(clearStr, dif, left, right);
}
function isPalindrome(clearStr, dif, left, right) {
  while (left < right) {
    //console.log(clearStr, dif, left, right);

    if (clearStr[left] !== clearStr[right]) {
      if (dif > 0) {
        if (left < right) {
          if (isPalindrome(clearStr, dif - 1, left + 1, right)) return true;

          if (isPalindrome(clearStr, dif - 1, left, right - 1)) return true;
        }
      }
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}

module.exports = { almostPalindrome, isPalindrome };
