/**
 * tag: 分治 链表
 *
 * 23. 合并K个升序链表
 * 给你一个链表数组，每个链表都已经按升序排列。
 *
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 *
 *
 *
 * 示例 1：
 *
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 * 示例 2：
 *
 * 输入：lists = []
 * 输出：[]
 * 示例 3：
 *
 * 输入：lists = [[]]
 * 输出：[]
 *
 *
 * 提示：
 *
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] 按 升序 排列
 * lists[i].length 的总和不超过 10^4
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
var mergeKLists = function(lists) {

    const mergeTwoLists = function(list1, list2) {
        if (!list1 || !list2){
            return list1 || list2;
        }

        const head = {};
        let cur = head;
        while (list1 && list2){
            cur.next = list1.val < list2.val ? list1 : list2;

            if (cur.next === list1){
                list1 = list1.next;
            }else {
                list2 = list2.next;
            }

            cur = cur.next;
        }

        cur.next = list1 || list2;

        return head.next;
    };

    const impl = function (partition){
        if (partition.length === 0){
            return null;
        }
        if (partition.length === 1){
            return partition[0];
        }
        const mid = partition.length / 2;
        const l1 = impl(partition.slice(0, mid));
        const l2 = impl(partition.slice(mid, partition.length));
        return mergeTwoLists(l1, l2);
    }

    return impl(lists);
};

console.log(JSON.stringify(mergeKLists([
    {val: 1, next: {val: 4, next: {val: 5}}},
    {val: 1, next: {val: 3, next: {val: 4}}},
    {val: 2, next: {val: 6, next: null}},
])))

console.log(JSON.stringify(mergeKLists([
    {},
])))


/**
 * 感受
 *
 * 本题为
 *
 */