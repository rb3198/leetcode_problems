/**
 * Intuition:
 * No need to build a trie of the word as it is a single word. Traverse the grid and check if anyone matches the required word.
 * Keep track of the index being matched.
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const rows = board.length;
  const columns = board[0].length;
  let isFound = false;

  const getCandidates = (wordIndex, i, j) => {
    const candidates = [];
    // up
    if (
      i - 1 >= 0 &&
      board[i - 1][j] !== "#" &&
      board[i - 1][j] === word[wordIndex]
    ) {
      candidates.push([i - 1, j]);
    }
    // down
    if (
      i + 1 < rows &&
      board[i + 1][j] !== "#" &&
      board[i + 1][j] === word[wordIndex]
    ) {
      candidates.push([i + 1, j]);
    }
    // left
    if (
      j - 1 >= 0 &&
      board[i][j - 1] !== "#" &&
      board[i][j - 1] === word[wordIndex]
    ) {
      candidates.push([i, j - 1]);
    }
    // right
    if (
      j + 1 < columns &&
      board[i][j + 1] !== "#" &&
      board[i][j + 1] === word[wordIndex]
    ) {
      candidates.push([i, j + 1]);
    }
    return candidates;
  };

  const search = (wordIndex, i, j) => {
    if (wordIndex >= word.length) {
      return true;
    }
    if (board[i][j] !== word[wordIndex]) {
      return false;
    }
    if (wordIndex === word.length - 1) {
      return true;
    }
    const cur = board[i][j];
    board[i][j] = "#";
    const candidates = getCandidates(wordIndex + 1, i, j);
    if (!candidates.length) {
      board[i][j] = cur;
      return false;
    }
    let isFound = false;
    for (let i = 0; i < candidates.length; i++) {
      const [k, l] = candidates[i];
      isFound ||= search(wordIndex + 1, k, l);
      if (isFound) {
        break;
      }
    }
    board[i][j] = cur;
    return isFound;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      isFound ||= search(0, i, j);
      if (isFound) {
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  return isFound;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABC"
  )
);

console.log(
  exist(
    [
      ["C", "A", "A"],
      ["A", "A", "A"],
      ["B", "C", "D"],
    ],
    "AAB"
  )
);
