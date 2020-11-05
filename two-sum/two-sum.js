/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (!nums || target == null || nums.length < 2) {
    return null;
  }

  const mapped = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = mapped.get(target - nums[i]);

    if (complement === undefined) {
      mapped.set(nums[i], i);
    } else {
      return [complement, i];
    }
  }

  const half = mapped.get(target / 2);
  if (half !== undefined) {
    return [half, half];
  }
  return null;
};

module.exports = { twoSum };
// const nums = [0, 4, 3, 0];
// const target = null;

// console.log(twoSum(nums, target));
