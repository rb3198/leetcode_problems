/**
 * Transition function: For every point, cost = min_cost(top, left) + cost(point)
 * Base case = grid[0][0]
 * Location of the answer = grid[m - 1][n - 1]
 * Order of computation = bottom - up
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      const candidates = [];
      if (i - 1 >= 0) {
        candidates.push(grid[i - 1][j]);
      }
      if (j - 1 >= 0) {
        candidates.push(grid[i][j - 1]);
      }
      grid[i][j] += Math.min(...candidates);
    }
  }
  return grid[m - 1][n - 1];
};
