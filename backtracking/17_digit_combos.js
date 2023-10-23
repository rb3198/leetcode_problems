const digitToLettersMapping = [
  [],
  [],
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "z"],
];

/**
 * Problem is to find all letter combinations given two digits of a cell phone.
 * - Mapped every digit to the corresponding letters contained in the digit
 * - Generated the combinations using backtracking.
 *   - There would be multiple roots, each corresponding to a letter contained in the first digit.
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }
  const combinations = new Set();
  const generate = (index, curCombination) => {
    if (index >= digits.length) {
      combinations.add(curCombination);
      return curCombination;
    }
    const num = parseInt(digits[index]);
    const possibilities = digitToLettersMapping[num];
    for (let i = 0; i < possibilities.length; i++) {
      generate(index + 1, curCombination + possibilities[i]);
    }
  };
  generate(0, "");
  return Array.from(combinations);
};

console.log(letterCombinations("234"));
