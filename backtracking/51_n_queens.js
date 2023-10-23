/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
  // before placing any queen, check if any queen exists on the diagonal of the current grid spot in contention
  // for ex: for placing on 3,3 - we have to check if any queen exists on 0,0 1,1 2,2
  const solutions = [];
  /**
   *
   * @param {number[][]} curSolution
   * @param {number} curQueenCol
   * @returns
   */
  const getCandidates = (curSolution, curQueenCol) => {
    const candidates = [];
    const forbiddenRows = new Map();
    for (let i = 0; i < curSolution.length; i++) {
      const row = curSolution[i][0];
      forbiddenRows.set(row);
      const colDiff = curQueenCol - curSolution[i][1];
      row + colDiff < n && forbiddenRows.set(row + colDiff);
      row - colDiff >= 0 && forbiddenRows.set(row - colDiff);
    }
    for (let i = 0; i < n; i++) {
      if (!forbiddenRows.has(i)) {
        candidates.push([i, curQueenCol]);
      }
    }
    return candidates;
  };

  /**
   * placing queens column wise
   * @param {number[][]} curSolution
   * @param {number} curQueenCol
   */
  const placeQueen = (curSolution, curQueenCol) => {
    if (curQueenCol >= n) {
      curSolution.sort((a, b) => a[0] - b[0]);
      solutions.push(curSolution);
    }
    const candidates = getCandidates(curSolution, curQueenCol);
    if (!candidates.length) {
      return;
    }
    for (let i = 0; i < candidates.length; i++) {
      curSolution.push(candidates[i]);
      placeQueen(Array.from(curSolution), curQueenCol + 1);
      curSolution.pop();
    }
  };
  placeQueen([], 0);
  const placements = solutions.map((solution) => {
    const config = solution.map((placement) => {
      const rowArr = new Array(n).fill(".");
      rowArr[placement[1]] = "Q";
      return rowArr.join("");
    });
    return config;
  });
  return placements;
};

solveNQueens(4);
solveNQueens(1);
