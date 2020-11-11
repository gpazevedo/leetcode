/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let pS = S.length - 1;
  let pT = T.length - 1;
  let cS = "";
  let cT = "";
  do {
    [cS, pS] = lastChar(S, pS);
    [cT, pT] = lastChar(T, pT);
  } while (cS === cT && (cS !== "" || cT !== ""));

  return cS === cT && pT === -1 && pS === -1;
};

function lastChar(str, p) {
  let back = 0;
  while (p >= 0) {
    const c = str[p];
    p--;

    if (c === "#") {
      back++;
      continue;
    }
    if (back > 0) {
      back--;
      continue;
    }
    return [c, p];
  }
  return ["", p];
}

module.exports = { backspaceCompare, lastChar };
