/**
 *
 * @param {number} n
 * @return {number}
 */
const integerBreak = function (n) {
  if (n < 5) {
    switch (n) {
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 4;
      default:
        break;
    }
  }
  const counters = [2, 2];
  let curCounter = 0; // counter to be incremented.
  let curMaxProduct = 4; // current max product
  for (let i = 5; i <= n; i++) {
    if (counters[curCounter] === 3) {
      // increment the next counter if available, else decrement the cur counter and push a new counter
      if (curCounter === counters.length - 1) {
        counters[curCounter]--;
        counters.push(2);
        curMaxProduct *= 4 / 3;
        continue;
      }
      curCounter++;
    }
    curMaxProduct /= counters[curCounter];
    counters[curCounter]++;
    curMaxProduct *= counters[curCounter];
  }
  return curMaxProduct;
};

console.log(integerBreak(2));
console.log(integerBreak(5));
console.log(integerBreak(6));
console.log(integerBreak(7));
console.log(integerBreak(11));
