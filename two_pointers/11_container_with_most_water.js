/**
 * @param {number[]} heights
 * @return {number}
 */
const maxArea = (heights) => {
  let maxAreaLogged = 0;
  let left = 0,
    right = heights.length - 1;
  //   while (left < right) {
  //     const isLeftSmaller = heights[left] < heights[right];
  //     const maxBreadth = isLeftSmaller ? heights[left] : heights[right];
  //     const maxLength = right - left;
  //     const maxAreaPossible = heights[left] * maxLength;
  //     if (maxAreaPossible <= maxAreaLogged) {
  //       left++;
  //       right = heights.length - 1;
  //       continue;
  //     }
  //     const area = maxBreadth * maxLength;
  //     if (area >= maxAreaLogged) {
  //       maxAreaLogged = area;
  //       if (isLeftSmaller) {
  //         left++;
  //         right = heights.length - 1;
  //         continue;
  //       }
  //       right--;
  //       continue;
  //     }
  //     // if left is smaller, we have attained the max area possible for this index
  //     if (isLeftSmaller) {
  //       left++;
  //       right = heights.length - 1;
  //       continue;
  //     }
  //     right--;
  //   }
  while (left < right) {
    const isLeftSmaller = heights[left] < heights[right];
    const length = right - left;
    const maxBreadth = Math.min(heights[left], heights[right]);
    const maxArea = length * maxBreadth;
    if (maxArea >= maxAreaLogged) {
      maxAreaLogged = maxArea;
    }
    if (isLeftSmaller) {
      left++;
    } else {
      right--;
    }
  }
  return maxAreaLogged;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([1, 2, 1]));
console.log(maxArea([2, 0]));
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
