/**
 * @typedef ListNode
 * @property {number} val
 * @property {ListNode} next
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) {
    return null;
  }
  const sorted = {
    val: undefined,
    next: {
      val: Number.MAX_SAFE_INTEGER,
      next: null,
    },
  };
  let sortedPtr = sorted.next;
  let sortedParent = sorted;
  for (let i = 0; i < lists.length; i++) {
    const list = lists[i];
    let l = list;
    while (!!l) {
      if (sortedPtr.val < l.val) {
        sortedPtr = sortedPtr.next;
        sortedParent =
          sortedParent.next === sortedPtr ? sortedParent : sortedParent.next;
      } else {
        sortedParent.next = l;
        l = l.next;
        sortedParent.next.next = sortedPtr;
        sortedParent = sortedParent.next;
      }
    }
    sortedPtr = sorted.next;
    sortedParent = sorted;
  }
  while (sortedParent.next.val !== Number.MAX_SAFE_INTEGER) {
    sortedParent = sortedParent.next;
  }
  sortedParent.next = null;
  return sorted.next;
};
