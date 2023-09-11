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
 * @return {ListNode}
 */
const reverseList = (head) => {
  if (!head) {
    return null;
  }
  const stack = [];
  while (!!head) {
    stack.push(head);
    head = head.next;
  }
  const newHead = stack[stack.length - 1];
  while (stack.length > 0) {
    const node = stack.pop();
    const l = stack.length;
    node.next = l === 0 ? null : stack[l - 1];
  }
  return newHead;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList1 = (head) => {
  if (!head) {
    return null;
  }
  let ptr = head.next;
  head.next = null;
  while (!!ptr) {
    let child = ptr.next;
    ptr.next = head;
    head = ptr;
    ptr = child;
  }
  return head;
};
