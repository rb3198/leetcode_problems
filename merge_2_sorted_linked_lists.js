/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let mergedList = {
    val: undefined,
    next: null,
  };
  let mergedListStart = mergedList;
  while (!!list1 && !!list2) {
    if (list1.val < list2.val) {
      mergedList.next = list1;
      list1 = list1.next;
    } else {
      mergedList.next = list2;
      list2 = list2.next;
    }
    mergedList = mergedList.next;
  }
  if (!!list1) {
    mergedList.next = list1;
  }
  if (!!list2) {
    mergedList.next = list2;
  }
  return mergedListStart.next;
};

const l1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 5,
      next: null,
    },
  },
};

const l2 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 6,
      next: null,
    },
  },
};

console.log(mergeTwoLists(l1, l2));
