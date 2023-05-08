/**
 * 24. Swap Nodes in Pairs
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 *
 * Example 1:
 * https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg
 *
 * Input: head = [1,2,3,4]
 * Output: [2,1,4,3]
 * Example 2:
 *
 * Input: head = []
 * Output: []
 * Example 3:
 *
 * Input: head = [1]
 * Output: [1]
 *
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 100].
 * 0 <= Node.val <= 100
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next){
    return head;
  }

  const dummyHead = new ListNode();
  dummyHead.next = head;
  let prev = dummyHead, cur = head;
  while (cur && cur.next) {
    const next = cur.next;
    const nn = next?.next;

    prev.next = next;
    next.next = cur;
    cur.next = nn;

    prev = cur;
    cur = nn;
  }

  return dummyHead.next;
};

/**
 * tag 链表
 *
 * 高级版翻转链表
 *
 */
