/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = (groupSizes) => {
  /**
   * @type {Map<number, number[][]>} groupsize: all combinations
   */
  const map = new Map();
  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i];
    if (!map.has(size)) {
      map.set(size, [[i]]);
    } else {
      const groups = map.get(size);
      const group = groups[groups.length - 1];
      if (group.length < size) {
        group.push(i);
      } else {
        groups.push([i]);
      }
    }
  }
  const solution = [];
  for (const groups of map.values()) {
    solution.push(...groups);
  }
  return solution;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
console.log(groupThePeople([2, 1, 3, 3, 3, 2]));
