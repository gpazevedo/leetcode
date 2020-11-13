function isPalindrome(str) {
  const clearStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  if (clearStr.length < 2) return true;

  let left = 0;
  let right = clearStr.length - 1;
  //console.log(clearStr, left, right);

  while (clearStr[left] === clearStr[right] && left < right) {
    //console.log(clearStr[left], clearStr[right]);
    left++;
    right--;
    //console.log(clearStr, left, right);
  }
  return clearStr[left] === clearStr[right];
}

module.exports = { isPalindrome };
