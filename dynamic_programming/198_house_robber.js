/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const n = nums.length;
  const maxOutputs = new Array(n); // stores the max money stolen from all combinations from index i onward.
  const search = (index) => {
    if (index >= nums.length) {
      return 0;
    }
    if (maxOutputs[index] >= 0) {
      return maxOutputs[index];
    }

    const maxMoney = Math.max(
      // skip this house to make more money by stealing from the adjacent house and further alternate houses to it
      search(index + 1),
      // steal from this house, and rob the next one not adjacent to it
      nums[index] + search(index + 2)
    );
    maxOutputs[index] = maxMoney;
    return maxMoney;
  };
  return search(0);
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(
  rob([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])
);

/**
 * - Transition function: dp[i] = max(dp[i - 1] + 0, dp[i - 2] + nums[i])
 * - Base cases: dp[0] = nums[0]
 * - Location of the answer: max(dp[n - 1], dp[n - 2])
 * @param {number[]} nums
 * @return {number}
 */
const robNonRecursive = function (nums) {
  const n = nums.length;
  if (n === 1) {
    return nums[0];
  }
  const dp = new Array(n).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[1], nums[0]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + 0, dp[i - 2] + nums[i]);
  }
  return Math.max(dp[n - 1], dp[n - 2]);
};

console.log(robNonRecursive([1, 2, 3, 1]));
console.log(robNonRecursive([2, 7, 9, 3, 1]));
console.log(
  robNonRecursive([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])
);
