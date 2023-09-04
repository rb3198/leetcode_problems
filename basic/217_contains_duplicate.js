/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (map.has(n)) {
      return true;
    }
    map.set(n, 1);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3]));
