/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  const dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }
  console.log(dp);
  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i - 1 >= 0) {
        dp[i][j] += dp[i - 1][j];
      }
      if (j - 1 >= 0) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }
  //   let paths = 0;
  //   const traverse = function (i, j) {
  //     if (i === m - 1 && j === n - 1) {
  //       paths++;
  //       return;
  //     }
  //     if (i >= m || i < 0 || j >= n || j < 0) {
  //       return;
  //     }
  //     traverse(i + 1, j);
  //     traverse(i, j + 1);
  //   };
  //   traverse(0, 0);
  //   return paths;
  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
