/**
 * @param {number[]} heights
 * @returns {number}
 */
const largestRectangleArea = (heights) => {
  let maxHistogram = 0;
  for (let i = 0; i < heights.length; i++) {
    const maxBreadth = heights[i]; // 8
    const maxLength = heights.length - i; // 16
    let maxArea = maxLength * maxBreadth; // 128
    let maxTrackedArea = maxBreadth * 1; // 8
    let minVisitedBreadth = heights[i]; // 8
    if (maxArea < maxHistogram) {
      continue;
    }
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] >= minVisitedBreadth) {
        maxTrackedArea = Math.max(
          maxTrackedArea,
          minVisitedBreadth * (j - i + 1)
        ); // 35
        continue;
      }
      minVisitedBreadth = heights[j]; // 4
      maxArea = heights[j] * maxLength; // 4 * 16 = 64
      maxTrackedArea = Math.max(
        maxTrackedArea,
        minVisitedBreadth * (j - i + 1)
      );
      if (maxArea < maxTrackedArea) {
        break;
      }
    }
    maxArea = Math.max(maxArea, maxTrackedArea);
    if (maxArea > maxHistogram) {
      maxHistogram = maxArea;
    }
  }
  return maxHistogram;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea1 = (heights) => {
  const stack = [];
  let maxArea = 0;
  let index = 0;
  while (index < heights.length) {
    const height = heights[index];
    let top = stack.length - 1;
    if (stack.length === 0 || height > heights[stack[top]]) {
      stack.push(index);
      index++;
    } else {
      const curBar = stack.pop();
      top = stack.length - 1;
      const area =
        heights[curBar] * (top >= 0 ? index - stack[top] - 1 : index);
      maxArea = Math.max(maxArea, area);
    }
  }
  while (stack.length > 0) {
    const top = stack.pop();
    const area =
      heights[top] *
      (stack.length > 0 ? index - stack[stack.length - 1] - 1 : index);
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
};

console.log(largestRectangleArea1([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea1([2, 4]));
console.log(largestRectangleArea1([9, 0]));
console.log(largestRectangleArea1([2, 1, 0, 2]));
console.log(largestRectangleArea1([5, 4, 1, 2]));
console.log(
  largestRectangleArea1([1, 8, 9, 7, 8, 8, 4, 7, 9, 1, 8, 2, 4, 8, 4, 0, 5])
);
