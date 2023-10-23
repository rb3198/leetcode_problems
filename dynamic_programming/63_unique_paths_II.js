/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
    return 0;
  }
  const grid = new Array(obstacleGrid.length)
    .fill(0)
    .map((i) => new Array(obstacleGrid[0].length).fill(0));
  grid[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        grid[i][j] = 0;
        continue;
      }
      if (i - 1 >= 0) {
        grid[i][j] += grid[i - 1][j];
      }
      if (j - 1 >= 0) {
        grid[i][j] += grid[i][j - 1];
      }
    }
  }
  return grid[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);

console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
);
