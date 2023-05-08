/**
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 *
 *  
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,2,1]
 * 输出：true
 * 示例 2：
 *
 *
 * 输入：head = [1,2]
 * 输出：false
 *  
 *
 * 提示：
 *
 * 链表中节点数目在范围[1, 105] 内
 * 0 <= Node.val <= 9
 *  
 *
 * 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 *
 *
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/palindrome-linked-list
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next){
    return true;
  }

  // find the mid
  let slow = head, fast = head;
  while (fast){
    slow = slow.next;
    fast = fast?.next?.next;
  }
  slow.next = null;

  // reverse the second part
  let prev = null, c = slow;
  while (c){
    let next = c.next;
    c.next = prev;
    prev = c;
    c = next;
  }

  // check
  let left = head, right = prev;
  while (left && right){
    if (left.val !== right.val){
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
};


/**
 * tag 链表
 */