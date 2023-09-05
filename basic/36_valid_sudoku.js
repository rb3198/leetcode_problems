/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  /**
   * @type {Map<number, Map<number, undefined>>}
   */
  const mapRow = new Map();
  /**
   * @type {Map<number, Map<number, undefined>>}
   */
  const mapColumn = new Map();
  /**
   * @type {Map<string, Map<number, undefined>>} key is of the format <row that the box starts from_col that the box starts from>
   */
  const mapBox = new Map();

  for (let i = 0; i < board.length; i++) {
    if (!mapRow.has(i)) {
      mapRow.set(i, new Map());
    }
    const curRowMap = mapRow.get(i);
    for (let j = 0; j < board.length; j++) {
      const el = board[i][j];
      const boxRow = Math.floor(i / 3);
      const boxCol = Math.floor(j / 3);
      const boxMapKey = `${boxRow}_${boxCol}`;
      if (!mapColumn.has(j)) {
        mapColumn.set(j, new Map());
      }
      if (!mapBox.has(boxMapKey)) {
        mapBox.set(boxMapKey, new Map());
      }
      if (el === ".") {
        continue;
      }
      const curColMap = mapColumn.get(j);
      const curBoxMap = mapBox.get(boxMapKey);
      if (curRowMap.has(el) || curColMap.has(el) || curBoxMap.has(el)) {
        return false;
      }
      curRowMap.set(el);
      curColMap.set(el);
      curBoxMap.set(el);
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["1", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
