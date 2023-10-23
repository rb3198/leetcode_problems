/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Number.POSITIVE_INFINITY);
  dp[0] = 0;
  for (let i = 1; i < amount + 1; i++) {
    for (let c of coins) {
      if (i - c >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - c]);
      }
    }
  }
  return dp[amount] === Number.POSITIVE_INFINITY ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
