/**
 * 2. 两数相加
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 *
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 *
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 * 示例 2：
 *
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 * 示例 3：
 *
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 *
 *
 * 提示：
 *
 * 每个链表中的节点数在范围 [1, 100] 内
 * 0 <= Node.val <= 9
 * 题目数据保证列表表示的数字不含前导零
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let c1 = l1, c2 = l2;
    let res = new ListNode(null, null);
    let rtn = res;
    let acc = 0;
    while ((c1 || c2) || acc !== 0){
        const cur = acc + (c1 || new ListNode(0, null)).val + (c2 || new ListNode(0, null)).val;
        res.next = new ListNode(cur % 10, new ListNode(null, null));
        acc = Math.floor(cur / 10);
        res = res.next;
        c1 && (c1 = c1.next);
        c2 && (c2 = c2.next);
    }
    res.next = null;
    return rtn.next;
};

/**
 * 感受
 * 注意空指针的问题，所有有空指针问题的地方都要判空
 * js里很方便，直接用要检查的对象 && 逻辑就可以了
 */