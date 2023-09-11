/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const stack = [];
  const map = new Map();
  let ptr = head;
  while (!!ptr) {
    stack.push(ptr);
    ptr = ptr.next;
  }
  ptr = head;
  let child = ptr.next;
  map.set(ptr);
  map.set(child);
  while (!map.has(stack[stack.length - 1])) {
    const popped = stack.pop();
    map.set(popped);
    ptr.next = popped;
    popped.next = child;
    ptr = child;
    child = child.next;
    map.set(child);
  }
  const map2 = new Map();
  (ptr = head), (child = ptr.next);
  while (!!child && !map2.has(child)) {
    map2.set(child);
    ptr = child;
    child = child.next;
  }
  ptr.next = null;
};
