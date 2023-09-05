/**
 * @typedef ListNode
 * @property {number} val
 * @property {ListNode} next
 * @property {boolean} visited
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let cycleDetected = false;
  while (!!head) {
    if (head.visited) {
      cycleDetected = true;
      break;
    }
    head.visited = true;
    head = head.next;
  }
  return cycleDetected;
};
