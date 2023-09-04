/** O(n), O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  // The map stores the corresponding number adding up to the sum, if present
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const pair = target - num;
    if (map.has(pair)) {
      return [map.get(pair), i];
    }
    if (!map.has(num)) {
      map.set(num, i);
    }
  }
  return [0, 0];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
