/**
 * Solution: Iterate the two nodes from left to right.
 * Add any carry left from the previous additions to the current addition between the two nodes
 * Cover the scenarios in which the lists are not equal in length, by iterating over the list which still has unvisited nodes.
 */

/**
 * Function to add two nodes
 * @param {{ val: number; next: object; }} l1
 * @param {{ val: number; next: object; }} l2
 * @param {{ val: number; next: object; }} result
 * @param {{ val: number; next: object; }} carry
 * @returns Carry, if any
 */
const add = (l1, l2, result, carry) => {
  const l1Val = !!l1 ? l1.val : 0;
  const l2Val = !!l2 ? l2.val : 0;
  const sum = l1Val + l2Val + carry;
  const resultDigit = sum % 10;
  carry = Math.floor(sum / 10);
  result.val = resultDigit;
  result.next = {
    val: undefined,
    next: null,
  };
  result = result.next;
  if (!!l1) {
    l1 = l1.next;
  }
  if (!!l2) {
    l2 = l2.next;
  }
  return { l1, l2, result, carry };
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = {
    val: undefined,
    next: null,
  };
  const resultStart = result;
  let carry = 0;
  while (!!l1 || !!l2) {
    const res = add(l1, l2, result, carry);
    result = res.result;
    l1 = res.l1;
    l2 = res.l2;
    carry = res.carry;
  }
  if (carry > 0) {
    result.val = carry;
  }
  let ptr = resultStart;
  while (ptr) {
    if (ptr.next && ptr.next.val === undefined) {
      ptr.next = null;
    }
    ptr = ptr.next;
  }
  return resultStart;
};

const l1 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 9,
              next: null,
            },
          },
        },
      },
    },
  },
};
const l2 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: null,
      },
    },
  },
};

console.log(addTwoNumbers(l1, l2));
