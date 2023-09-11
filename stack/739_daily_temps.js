/**
 * Intuition:
 *
 * Maintain a stack to keep a track of all the days whose next warmer day is still to be figured out.
 * The stack will store indices of the elements whose warmer days are still to be found.
 *
 * When we get a warmer day, pop the stack till the stack contains colder days than the current.
 * Mark the output of the stack element as the difference between the indices of the element in stack and the current element being traversed.
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const stack = [];
  const output = new Array(temperatures.length).fill(0);
  stack.push(0);
  let i = 1;
  while (i < temperatures.length) {
    if (temperatures[i] < temperatures[stack[stack.length - 1]]) {
      stack.push(i);
      i++;
      continue;
    }
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const el = stack.pop();
      output[el] = output[el] > 0 ? output[el] : i - el;
    }
    stack.push(i);
    i++;
  }
  return output;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
