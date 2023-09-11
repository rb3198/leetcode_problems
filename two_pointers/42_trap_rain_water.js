/**
 * Intuition:
 *
 * While traveling each block, keep a track of the biggest block to its left, and the biggest block to its right.
 *
 *
 * https://leetcode.com/problems/trapping-rain-water/
 * @param {number[]} heights
 * @return {number}
 */
const trap = (heights) => {
  const n = heights.length;
  let l = 0;
  let r = n - 1;
  let leftMax = 0;
  let rightMax = 0;
  let res = 0;
  while (l < r) {
    if (heights[l] <= heights[r]) {
      // current block is constrained by the height of the blocks to its left
      if (heights[l] >= leftMax) {
        leftMax = heights[l];
      } else {
        res += leftMax - heights[l];
      }
      l++;
    } else {
      // current block is constrained by the height of the blocks to its right
      if (heights[r] >= rightMax) {
        rightMax = heights[r];
      } else {
        res += rightMax - heights[r];
      }
      r--;
    }
  }
  return res;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
