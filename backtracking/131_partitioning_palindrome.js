/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
  const partitions = [];

  /**
   *
   * @param { string }s
   */
  const isPalindrome = (s) => {
    let i = 0,
      j = s.length - 1;
    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  };

  /**
   *
   * @param {string[]} curPartition
   * @param {string} curStr
   * @param {number} index
   */
  const search = (curPartition, curStr, index) => {
    if (index === s.length - 1) {
      if (isPalindrome(curStr + s[index])) {
        partitions.push([...curPartition, curStr + s[index]]);
      }
      return;
    }
    if (!isPalindrome(curStr + s[index])) {
      // cannot partition here, need to check with appended string
      return search(curPartition, curStr + s[index], index + 1);
    }
    // create a partition here
    search([...curPartition, curStr + s[index]], "", index + 1);
    // no partition, add to the string
    search([...curPartition], curStr + s[index], index + 1);
  };

  search([], "", 0);
  return partitions;
};

console.log(partition("efe"));
console.log(partition("aab"));
console.log(partition("a"));
