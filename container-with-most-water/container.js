var maxArea = function (height) {
  let ps = 0;
  let pe = height.length - 1;
  let maxArea = 0;

  while (ps < pe) {
    const area = Math.min(height[ps], height[pe]) * (pe - ps);
    maxArea = Math.max(area, maxArea);

    if (height[ps] <= height[pe]) {
      ps++;
      while (height[ps] <= height[ps - 1] && ps < pe) {
        ps++;
      }
    } else {
      pe--;
      while (height[pe] <= height[pe + 1] && ps < pe) {
        pe--;
      }
    }
  }
  return maxArea;
};

module.exports = { maxArea };
