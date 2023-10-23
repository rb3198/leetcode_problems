/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  /**
   * @param {number} curPosition
   * @param {Map<number, number>} stepComboMap
   */
  const climb = (curPosition, stepComboMap) => {
    if (stepComboMap.has(curPosition)) {
      return stepComboMap.get(curPosition);
    }
    if (curPosition > n) {
      return 0;
    }
    if (curPosition === n) {
      return 1;
    }

    // check no of combinations for 1 step and 2 step
    const stepCombos =
      climb(curPosition + 1, stepComboMap) +
      climb(curPosition + 2, stepComboMap);
    stepComboMap.set(curPosition, stepCombos);
    return stepCombos;
  };

  return climb(0, new Map());
};

/**
 * Construct a 1D array storing the results so far.
 * - Transition Function = dp[i] = dp[i - 1] + dp[i - 2]
 * - Base Cases: dp[0] = 1, dp[1] = 1
 * - Order of Computation: Bottom Up
 * - Location of the answer = dp[n]
 * @param {number} n
 * @return {number}
 */
const climbStairsNonRecursive = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

console.log(climbStairs(2));
console.log(climbStairs(45));

console.log("Non recursive DP Solution", climbStairsNonRecursive(2));
console.log("Non recursive DP Solution", climbStairsNonRecursive(45));
