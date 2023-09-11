/**
 * Intuition:
 *
 * For every block in consideration, the amount of rain water that can be trapped in it depends on the
 * biggest block to its left, and the biggest block to its right.
 *
 * Therefore, for every block, track the biggest block to its left, and the biggest block to its right.
 *
 * The amount of rain water that can be trapped can then be calculated as Min(maxLeft, maxRight) - height[i].
 * https://leetcode.com/problems/trapping-rain-water/
 * @param {number[]} heights
 * @return {number}
 */
const trap = (heights) => {
  const n = heights.length;
  const leftMaxes = new Array(n).fill(0);
  const rightMaxes = new Array(n).fill(0);
  let leftMax = 0;
  let rightMax = 0;
  let res = 0;
  for (let i = 1; i < n; i++) {
    leftMaxes[i] = Math.max(leftMax, heights[i - 1]);
    if (heights[i - 1] > leftMax) {
      leftMax = heights[i - 1];
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    rightMaxes[i] = Math.max(rightMax, heights[i + 1]);
    if (heights[i + 1] > rightMax) {
      rightMax = heights[i + 1];
    }
  }
  //   For each block, the amount of rain water it can trap is constrained by the smaller of the biggest blocks to its left & right
  for (i = 1; i < n - 1; i++) {
    const maxTrappedWater = Math.min(leftMaxes[i], rightMaxes[i]) - heights[i];
    if (maxTrappedWater > 0) {
      res += maxTrappedWater;
    }
  }
  return res;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
