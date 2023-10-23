/**
 * DP Way
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
  const map = new Map(); // map storing palindromic substrings found so far
  let count = 0;

  const isPalindrome = (str) => {
    let start = 0,
      end = str.length - 1;
    while (start <= end) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }
    map.set(str);
    return true;
  };

  const generateSubstrings = (start, end) => {
    if (end > s.length) {
      return;
    }
    const str = s.slice(start, end);
    if (map.has(str) || isPalindrome(str)) {
      count++;
    }
    generateSubstrings(start, end + 1);
  };

  for (let i = 0; i < s.length; i++) {
    generateSubstrings(i, i + 1);
  }

  return count;
};

/**
 * Non DP Way. Better runtime
 * @param {string} s
 * @return {number}
 */
var countSubstrings2 = function (s) {
  const len = s.length;
  let count = 0;

  const findPalindrome = (start, end) => {
    while (start >= 0 && end < len) {
      if (s[start] !== s[end]) {
        break;
      }

      count += 1;
      start = start - 1;
      end = end + 1;
    }
  };

  for (let i = 0; i < len; i++) {
    findPalindrome(i, i);
    findPalindrome(i, i + 1);
  }

  return count;
};

console.log(countSubstrings("aaa"));
console.log(countSubstrings("bab"));
