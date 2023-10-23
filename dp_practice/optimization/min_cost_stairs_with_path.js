/**
 * At any step, we can take either two steps or a single step to get to the top.
 * @param {number[]} costs
 */
const getMinPath = (costs) => {
  const dp = new Array(costs.length);
  const path = new Array(costs.length);
  dp[0] = costs[0];
  dp[1] = costs[1];
  for (let i = 2; i < costs.length; i++) {
    const minPrevIndex = dp[i - 2] > dp[i - 1] ? i - 1 : i - 2;
    dp[i] = dp[minPrevIndex] + costs[i];
    path[i] = minPrevIndex;
  }
  let i = costs.length - 1;
  let optimalPath = `${i}`;
  while (path[i] !== undefined) {
    optimalPath = path[i] + ", " + optimalPath;
    i = path[i];
  }
  return optimalPath;
};

console.log(getMinPath([3, 2, 4, 6, 1, 1, 5, 3]));
