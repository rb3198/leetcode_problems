/**
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates
 * where the chosen numbers sum to target. You may return the combinations in any order.
 *
 * - Sort the list of candidates
 * - For every candidate, we can either add it to the solution, or skip it.
 * -> Do so for every candidate.
 * - The search function returns false if current sum is > target.
 * - It continues the above algorithm till sum is <= target.
 * - If current subset sum = target, add the subset to the solution
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const output = [];
  candidates.sort();
  /**
   *
   * @param {number} i
   * @param {number[]} cur
   * @param {number} sum
   */
  const search = (i, cur, sum) => {
    if (sum === target) {
      output.push(cur);
      return;
    }
    if (i === candidates.length || sum > target) {
      return;
    }

    // Add candidate to the current solution
    search(i, [...cur, candidates[i]], sum + candidates[i]);
    // Skip candidate for the current solution
    search(i + 1, cur, sum);
  };
  search(0, [], 0);
  return output;
};

console.log(combinationSum([2, 3, 6, 7], 7));
