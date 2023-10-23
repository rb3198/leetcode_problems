/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
  const subsetKeys = new Set();
  const subsets = [];
  nums.sort();
  /**
   * @param {number} i
   * @param {number[]} curSubset
   * @returns
   */
  const createSubsets = (i, curSubset) => {
    if (i === nums.length) {
      //   subsetKeys.add(subsetKey);
      subsets.push(curSubset);
      return;
    }
    // add the element to the current subset
    curSubset.push(nums[i]);
    createSubsets(i + 1, Array.from(curSubset));
    // not adding the current element to the current subset
    curSubset.pop();

    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i += 1;
    }
    createSubsets(i + 1, Array.from(curSubset));
  };
  createSubsets(0, []);
  return subsets;
};

console.log(subsetsWithDup([1, 2, 2]));
