/**
 * Stores all the elements with their next in a map. fills the map as we go.
 * Then traverses the map, going towards the next elements in every iteration
 * - If the node is already visited, the max depth analysed while visiting that node is added to the current depth being calculated and the loop breaks
 * - Couldn't handle the case of a large decreasingly ordered list.
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutiveUnoptimized = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  /**
   * @type {Map<number, { next: number, visited: boolean, maxDepth: number }>} Map storing <cur no, number below it inside the array>
   */
  const map = new Map();
  nums.forEach((num) => {
    if (!map.has(num)) {
      map.set(num, {
        next: map.has(num - 1) ? num - 1 : undefined,
        visited: false,
        maxDepth: 0,
      });
    }
    if (map.has(num + 1) && map.get(num + 1).next === undefined) {
      map.set(num + 1, {
        next: num,
        visited: false,
        maxDepth: 0,
      });
    }
  });
  let maxConsecutiveChain = 1;
  for (const [key, value] of map) {
    let currChain = 1;
    let itr = value;
    while (itr.next !== undefined && map.has(itr.next)) {
      if (map.get(itr.next).visited) {
        currChain += map.get(itr.next).maxDepth;
        break;
      }
      itr = map.get(itr.next);
      currChain++;
    }
    map.set(key, {
      ...map.get(key),
      visited: true,
      maxDepth: currChain,
    });
    if (currChain > maxConsecutiveChain) {
      maxConsecutiveChain = currChain;
    }
  }
  return maxConsecutiveChain;
};

/**
 * - Goes through every number and stores it in a map
 * - Traverses the map, checks if num - 1 is present in the map.
 *   - If present, this means that the current number is in the middle of some sequence and can be ignored
 *   - If not present, current number is the start of a sequence - we then loop in the map till we don't find a num + 1, i.e. we reach the end of the sequence.
 *   - We compare the depth of the sequence to the max depth till now, and store it if it's greater than the current max depth.
 * - Return the max depth found.
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  /**
   * @type {Map<number, number>} Map storing <cur no, number below it inside the array>
   */
  const map = new Map();
  nums.forEach((num) => {
    map.set(num, 1);
  });

  let maxDepth = 1;
  for (const [key, value] of map) {
    let currDepth = 1;
    let curr = key;
    if (map.has(curr - 1)) {
      // Current element is the middle element of a sequence
      continue;
    }
    // Current element can be the start of a sequence in the array
    while (map.has(curr + 1)) {
      curr++;
      currDepth++;
    }
    if (currDepth > maxDepth) {
      maxDepth = currDepth;
    }
  }
  return maxDepth;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
