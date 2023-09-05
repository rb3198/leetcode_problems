/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const productExceptSelfWithDivision = (nums) => {
  const zeroIndices = [];
  let product = 1;
  nums.forEach((num, index) => {
    if (num === 0) {
      zeroIndices.push(index);
      return;
    }
    product = product * num;
  });
  if (zeroIndices.length === nums.length) {
    return new Array(nums.length).fill(0);
  }
  const output = nums.map((num, index) => {
    if (zeroIndices.includes(index)) {
      return zeroIndices.length > 1 ? 0 : product;
    }
    if (zeroIndices.length > 0) {
      // there are zeros in the array but not on this index, hence the product except this index will be zero
      return 0;
    }
    // There are no zeros in the array, return product / num
    return product / num;
  });
  return output;
};

/**
 * No division operation allowed.
 * @param {number[]} nums
 * @returns {number[]}
 */
const productExceptSelf = (nums) => {
  const products = new Array(nums.length).fill(1);
  //   Calculate the left product of each element
  for (let i = 1; i < nums.length; i++) {
    products[i] = nums[i - 1] * products[i - 1];
  }
  let right = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    products[i] *= right;
    right *= nums[i];
  }
  return products;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([0, 0]));
console.log(productExceptSelf([0, 4, 0]));
