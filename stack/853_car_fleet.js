/**
 * Intuition:
 *
 * - Sort the positions in descending order, since the cars behind a position
 * will ultimately need to adjust their speed according to the car ahead of them already.
 * - Use a stack to keep track of the fleets being formed.
 * - - If a car has an ETA lower than the car ahead (already pushed to stack), then it'll join the car ahead to form a fleet.
 * - - If a car has an ETA higher than the car ahead, then it'll form a separate fleet.
 * All the cars behind this car will never catch up to the car ahead of it, and will join the fleet of this car.
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = (target, position, speed) => {
  /**
   * Array of duos [start position, speed]
   */
  const positionWithSpeed = position.map((pos, index) => [pos, speed[index]]);
  positionWithSpeed.sort((a, b) => b[0] - a[0]);
  const stack = [];
  for (let i = 0; i < positionWithSpeed.length; i++) {
    const [pos, speed] = positionWithSpeed[i];
    const timeToDest = (target - pos) / speed;
    if (stack.length === 0 || timeToDest > stack[stack.length - 1]) {
      stack.push(timeToDest);
    }
  }
  //   console.log(positionWithSpeed);
  //   console.log(stack.length);
  return stack.length;
};

carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);
carFleet(10, [3], [3]);
carFleet(100, [0, 2, 4], [4, 2, 1]);
