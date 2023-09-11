/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let left = 1,
    right = numbers.length; // numbers is 1-indexed
  while (left < right) {
    const sum = numbers[left - 1] + numbers[right - 1];
    if (sum === target) {
      return [left, right];
    }
    if (sum < target) {
      left++;
      continue;
    }
    right--;
  }
};
