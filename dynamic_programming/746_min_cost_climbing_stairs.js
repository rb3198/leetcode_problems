/**
 * Intuition:
 *
 * At every stair, check additional cost by climbing 2 stairs, and climbing 1 stair. Return the minimum of those costs.
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const minCosts = new Array(n);
  const climb = (index) => {
    if (index >= n) {
      return 0;
    }
    if (minCosts[index]) {
      return minCosts[index];
    }
    const newCost = Math.min(
      // climb 1 step
      climb(index + 1),
      // climb 2 steps
      climb(index + 2)
    );
    minCosts[index] = cost[index] + newCost;
    return cost[index] + newCost;
  };

  return Math.min(climb(0), climb(1));
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

/**
 * - Transition Function = dp[i] = min(dp[i - 1], dp[i - 2])
 * - Base cases: dp[0] = cost[0], dp[1] = cost[1]
 * - Location of the answer: dp[n]; We have to cross all stairs, hence dp would be n + 1.
 * - Order of Computation: Bottom up
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairsNonRecursive = function (cost) {
  const n = cost.length;
  const dp = new Array(n + 1);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]);
    if (i < n) {
      dp[i] += cost[i];
    }
  }
  return dp[n];
};

console.log("Non Recursive", minCostClimbingStairsNonRecursive([10, 15, 20]));
console.log(
  "Non Recursive",
  minCostClimbingStairsNonRecursive([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
);
