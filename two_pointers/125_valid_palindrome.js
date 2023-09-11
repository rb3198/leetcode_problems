/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let left = 0;
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
