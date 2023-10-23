const BOARD_LENGTH = 9;
const GRID_SIZE = 3;
/**
 * - Created a map of board grids and their corresponding contained values. If no value (.) on the grid point, pushed the location to
 *    an array containing all the unsolved points.
 *    ex: The first 3x3 grid inside the 9x9 sudoku board will have a map 0_0: [values present on the first grid]
 * - Start the recursive function "solve" for the first unsolved point. It will create a decision tree in which we will test every candidate and the corresponding solution.
 * - A number is a candidate for a given grid point if it doesn't occur in the row, column, and grid of the given grid point.
 * - Start creating a board for every available candidate.
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function (board) {
  const initialGridMap = new Map();
  const unsolvedPoints = [];

  const getGridKey = (row, col) => {
    return `${Math.floor(row / GRID_SIZE)}_${Math.floor(col / GRID_SIZE)}`;
  };

  for (let i = 0; i < BOARD_LENGTH; i++) {
    for (let j = 0; j < BOARD_LENGTH; j++) {
      const gridKey = getGridKey(i, j);
      if (board[i][j] === ".") {
        unsolvedPoints.push([i, j]);
        if (!initialGridMap.has(gridKey)) {
          initialGridMap.set(gridKey, []);
        }
        continue;
      }
      if (!initialGridMap.has(gridKey)) {
        initialGridMap.set(gridKey, [parseInt(board[i][j])]);
      } else {
        const gridNums = initialGridMap.get(gridKey);
        gridNums.push(parseInt(board[i][j]));
        initialGridMap.set(gridKey, gridNums);
      }
    }
  }

  const getCandidates = (row, col, curBoard, curGrid) => {
    const forbiddenNos = new Map();
    // check row
    for (let j = 0; j < BOARD_LENGTH; j++) {
      curBoard[row][j] !== "." && forbiddenNos.set(parseInt(curBoard[row][j]));
    }
    // check col
    for (let i = 0; i < BOARD_LENGTH; i++) {
      curBoard[i][col] !== "." && forbiddenNos.set(parseInt(curBoard[i][col]));
    }
    for (let i = 0; i < curGrid.length; i++) {
      forbiddenNos.set(curGrid[i]);
    }
    return new Array(9)
      .fill()
      .map((_, index) => index + 1)
      .filter((num) => !forbiddenNos.has(num));
  };

  const solve = (unsolvedPtIndex, curBoard, gridMap) => {
    if (unsolvedPtIndex >= unsolvedPoints.length) {
      return true;
    }
    const [row, col] = unsolvedPoints[unsolvedPtIndex];
    const gridKey = getGridKey(row, col);
    const candidates = getCandidates(row, col, curBoard, gridMap.get(gridKey));
    if (!candidates.length) {
      return false;
    }

    for (let i = 0; i < candidates.length; i++) {
      curBoard[row][col] = `${candidates[i]}`;
      const oldGrids = [...gridMap.get(gridKey)];
      const newGrids = [...oldGrids, candidates[i]];
      gridMap.set(gridKey, newGrids);
      const sol = solve(unsolvedPtIndex + 1, curBoard, gridMap);
      if (!!sol) {
        return sol;
      }
      curBoard[row][col] = ".";

      gridMap.set(gridKey, oldGrids);
    }
  };

  solve(0, board, initialGridMap);
};

const algoAns = solveSudoku([
  [".", ".", "9", "7", "4", "8", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "2", ".", "1", ".", "9", ".", ".", "."],
  [".", ".", "7", ".", ".", ".", "2", "4", "."],
  [".", "6", "4", ".", "1", ".", "5", "9", "."],
  [".", "9", "8", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", "8", ".", "3", ".", "2", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", "2", "7", "5", "9", ".", "."],
]);
