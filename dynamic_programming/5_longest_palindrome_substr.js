/**
 * Intuition:
 *
 * Check the palindrome from the middle of the string - For every character, check the max length of palindrome with the character as the center.
 * For ex: "babad" -> i = 0, biggest palindrome len = 1 (b), i = 1, len = 3 (bab), i = 2, len = 3 (aba), i = 3, 4 - len = 1
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let maxStr = "";
  const findLongest = (index) => {
    // odd length
    let start = index,
      end = index;
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      if (end - start + 1 > maxStr.length) {
        maxStr = s.slice(start, end + 1);
      }
      start--;
      end++;
    }

    // even length
    (start = index), (end = index + 1);
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      if (end - start + 1 > maxStr.length) {
        maxStr = s.slice(start, end + 1);
      }
      start--;
      end++;
    }
  };
  for (let i = 0; i < s.length; i++) {
    findLongest(i);
  }
  return maxStr;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
