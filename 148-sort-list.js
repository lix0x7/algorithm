/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 *
 *  
 *
 * 示例 1：
 *
 *
 * 输入：head = [4,2,1,3]
 * 输出：[1,2,3,4]
 * 示例 2：
 *
 *
 * 输入：head = [-1,5,3,4,0]
 * 输出：[-1,0,3,4,5]
 * 示例 3：
 *
 * 输入：head = []
 * 输出：[]
 *  
 *
 * 提示：
 *
 * 链表中节点的数目在范围 [0, 5 * 104] 内
 * -105 <= Node.val <= 105
 *  
 *
 * 进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/sort-list
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
import {ListNode} from './datastructure/ListNode.js';

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
var sortList = function(head) {
  /**
   * 对 [head, end)区间进行排序
   * @param head
   * @param end
   * @returns {*}
   */
  const impl = function (head, end){
    if (head === null || head.next === end){
      head && (head.next = null);
      return head;
    }

    let c1 = head, c2 = head;
    while (c2 !== end && c2?.next !== end){
      c1 = c1.next;
      c2 = c2.next?.next;
    }

    let lp = impl(head, c1);
    let rp = impl(c1, end);

    let fakeHead = {val: null, next: null};
    let cur = fakeHead;
    while (lp && rp){
      if (lp.val < rp.val){
        cur.next = lp;
        lp = lp.next;
      }else {
        cur.next = rp;
        rp = rp.next;
      }

      cur = cur.next;
    }
    cur.next = lp || rp;

    return fakeHead.next;
  }

  return impl(head, null);
};

let ans = sortList({val: 4, next: {val: 2, next: {val: 1, next: {val: 3, next: null}}}});
while (ans){
  console.log(ans.val);
  ans = ans.next;
}

/**
 * tag 链表 归并排序 细节
 *
 * 细节有点复杂。而且自顶向下递归方法的空间复杂度是O(lgN)，只有自底向上的迭代方法空间复杂度才能使O(1)，但是个人认为意义不大，没有细看了
 */

