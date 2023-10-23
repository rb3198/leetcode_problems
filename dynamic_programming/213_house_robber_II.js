/**
 * Intuition:
 *
 * Search the array once with the last house omitted, and once with the first house omitted.
 *
 * Return the best case out of the two.
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const n = nums.length;
  if (n === 1) {
    return nums[0];
  }
  let maxLoots = new Array(n);
  const search = (index, nums) => {
    // reached the starting point again, cannot loot this house again
    if (index >= nums.length) {
      return 0;
    }
    if (maxLoots[index] >= 0) {
      return maxLoots[index];
    }
    const maxLoot = Math.max(
      // take the loot from this house, skip the next
      nums[index] + search(index + 2, nums),
      // skip this house, search the next
      search(index + 1, nums)
    );
    maxLoots[index] = maxLoot;
    return maxLoot;
  };

  //   with house 1, excluding house n
  const path1 = search(0, nums.slice(0, nums.length - 1));
  maxLoots = new Array(n);
  //   Without house 1, including house n
  const path2 = search(0, nums.slice(1, nums.length));
  return Math.max(path1, path2);
};
