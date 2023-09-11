/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    } else if (nums[i - 1] === nums[i]) {
      continue;
    }

    const target = 0 - nums[i];

    let j = i + 1,
      k = nums.length - 1;

    while (j < k) {
      const sum = nums[j] + nums[k];

      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[++j]);
      } else if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  return result;
};
