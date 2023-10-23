/**
 * Same as combination sum 1, except that duplicate candidates are not allowed.
 * - Sort the array
 * - Add the candidate to the potential solution
 * - If cur sum = target, push the solution. Else return false
 * Skip duplicates by iterating the candidates till a new number is found.
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
  candidates.sort();
  const sums = [];
  const construct = (i, combination, sum) => {
    if (sum === target) {
      sums.push(combination);
      return true;
    }
    if (i >= candidates.length || sum > target) {
      return false;
    }
    // add current node to the tree
    construct(i + 1, [...combination, candidates[i]], sum + candidates[i]);
    // do not add the current node to the tree - skip duplicates as the same tree will be generated
    const cur = candidates[i];
    while (candidates[i] === cur) {
      i++;
    }
    construct(i, [...combination], sum);
  };
  construct(0, [], 0);
  return sums;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
