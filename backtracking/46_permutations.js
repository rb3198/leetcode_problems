/**
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const output = [];
  const n = nums.length;
  /**
   * @param {Set} permutation
   */
  const create = (permutation) => {
    if (permutation.size >= n) {
      output.push(Array.from(permutation));
      return;
    }
    for (let j = 0; j < nums.length; j++) {
      if (!permutation.has(nums[j])) {
        permutation.add(nums[j]);
        create(permutation);
        permutation.delete(nums[j]);
      }
    }
  };
  create(new Set());
  return output;
};

console.log(permute([1, 2, 3]));
console.log(permute([1]));
