function longestSubString(str) {
  let longest = 0;
  let longer = 0;
  let inside = new Map();
  let start = 0;
  let atual = 0;

  while (atual < str.length) {
    const char = str[atual];
    const posChar = inside.get(char);
    if (posChar >= start) {
      longest = longest > longer ? longest : longer;

      start = posChar + 1;
      longer = atual - start + 1;
    } else {
      longer++;
    }
    inside.set(char, atual);
    atual++;
  }
  longest = longest > longer ? longest : longer;
  return longest;
}

module.exports = { longestSubString };
