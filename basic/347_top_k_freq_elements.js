/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  /**
   * @type {Map<number, number>} Map of <element, frequency>
   */
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  /**
   * @type {number[][]}
   */
  const mostFreqNos = [];
  //   map.
  for (const [key, value] of map) {
    if (mostFreqNos.length === 0) {
      mostFreqNos.push([key, value]);
      continue;
    }
    insertToArr(mostFreqNos, key, value);
  }
  return mostFreqNos.map((noWithCount) => noWithCount[0]).slice(0, k);
};

/**
 *
 * @param {number[][]} arr
 * @param {number} key
 * @param {number} value
 */
const insertToArr = (arr, key, value) => {
  let isInserted = false;
  for (let i = 0; i < arr.length; i++) {
    if (value > arr[i][1]) {
      arr.splice(i, 0, [key, value]);
      isInserted = true;
      break;
    }
  }
  if (!isInserted) {
    arr.push([key, value]);
  }
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([3, 0, 1, 0], 1));
