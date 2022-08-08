/**
 * 143. Reorder List
 * You are given the head of a singly linked-list. The list can be represented as:
 *
 * L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 *
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 *
 *
 *
 * Example 1:
 * https://assets.leetcode.com/uploads/2021/03/04/reorder1linked-list.jpg
 * Input: head = [1,2,3,4]
 * Output: [1,4,2,3]
 *
 * Example 2:
 * https://assets.leetcode.com/uploads/2021/03/09/reorder2-linked-list.jpg
 * Input: head = [1,2,3,4,5]
 * Output: [1,5,2,4,3]
 *
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [1, 5 * 104].
 * 1 <= Node.val <= 1000
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  /**
   *
   * @param head {ListNode}
   */
  const reverse = function (head){
    let prev = null, cur = head;
    while (cur){
      const next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }

    return prev;
  }

  /**
   *
   * @param l1 {ListNode}
   * @param l2 {ListNode}
   */
  const merge = function (l1, l2){
    let c1 = l1, c2 = l2;
    const dummy = {};
    let cur = dummy;
    while (c1 && c2){
      const nc1 = c1.next;
      cur.next = c1;
      cur.next.next = c2;
      cur = cur.next.next;
      c1 = nc1;
      c2 = c2.next;
    }
    cur.next = c1 || c2;
    if (cur.next){
      cur.next.next = null;
    }
    return dummy.next;
  }

  /**
   *
   * @param head {ListNode}
   */
  const findRightHead = function (head){
    let slow = head, fast = head;
    while (fast){
      slow = slow.next;
      fast = fast?.next?.next;
    }

    return slow;
  }

  const mid = findRightHead(head);
  const right = reverse(mid);
  merge(head, right);
};

/**
 * tag 链表 优雅解法
 */