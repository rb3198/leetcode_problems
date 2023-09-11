/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @typedef ListNode
 * @property {number} val
 * @property {ListNode} next
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
  if (!head || left === right) {
    return head;
  }
  const stack = [];
  let dummy = {
    val: undefined,
    next: head,
  };
  let prev = dummy;
  let i = 0;
  while (i < left - 1) {
    prev = prev.next;
    i++;
  }
  let current = prev.next;
  while (i < right) {
    stack.push(current);
    current = current.next;
    i++;
  }
  let n = stack.length;
  while (n !== 0) {
    prev.next = stack.pop();
    n = stack.length;
    prev = prev.next;
  }
  prev.next = current;
  return dummy.next;
};
