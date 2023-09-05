/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @typedef Node1
 * @property {number} val
 * @property {Node1} next
 * @property {Node1} random
 */

/**
 * Intuition: Make a Map with original node as the key, and a duplicate node as value
 *
 * Then, traverse the new head, with a ptr keeping track of its corresponding original node.
 * Decouple the lists by substituting the original nexts and randoms with their corresponding duplicate nodes stored in the map.
 * @param {Node1} head
 * @return {Node1}
 */
const copyRandomList = (head) => {
  /**
   * Map storing the original node as the key, and duplicate node as the value
   * @type {Map<Node, Node>}
   */
  const ogToCopyMap = new Map();
  const ogHead = head;
  while (!!head) {
    const { val, next, random } = head;
    ogToCopyMap.set(head, {
      val,
      next,
      random,
    });
    head = head.next;
  }

  let newHead = ogToCopyMap.get(ogHead);
  let newHeadParent = ogHead;
  while (!!newHead && !!newHeadParent) {
    newHead.next = ogToCopyMap.get(newHeadParent.next) ?? null;
    newHead.random = ogToCopyMap.get(newHeadParent.random) ?? null;
    newHead = newHead.next;
    newHeadParent = newHeadParent.next;
  }
  console.log(ogToCopyMap.get(ogHead));
  return ogToCopyMap.get(ogHead);
};

/**
 * Recursive solution to the same problem
 * @param {Node} head
 * @return {Node}
 */
const copyRandomListRecursively = (head) => {
  const originalToCopyMap = new Map();

  function copy(originalNode) {
    if (!originalNode) return originalNode;

    if (originalToCopyMap.has(originalNode))
      return originalToCopyMap.get(originalNode);

    const copied = new Node(originalNode.val);
    originalToCopyMap.set(originalNode, copied);

    copied.next = copy(originalNode.next);
    copied.random = copy(originalNode.random);

    return copied;
  }

  return copy(head);
};
