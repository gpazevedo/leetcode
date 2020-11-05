/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length < 3) return 0;

  const maxis = [];
  let max = 0;

  for (let i = height.length - 1; i > 0; i--) {
    if (height[i] > max) {
      max = height[i];
      maxis.push({ h: max, pos: i });
    }
  }
  if (maxis.length === 0) {
    return 0;
  }

  max = 0;
  let right = maxis.pop();
  let volume = 0;

  for (let i = 0; i < height.length - 1; i++) {
    if (right.pos === i) {
      if (maxis.length === 0) {
        return volume;
      }
      right = maxis.pop();
    }
    if (max < height[i]) {
      max = height[i];
      continue;
    }
    const level = Math.min(max, right.h);

    volume += height[i] < level ? level - height[i] : 0;
  }
  return volume;
};

module.exports = { trap };
