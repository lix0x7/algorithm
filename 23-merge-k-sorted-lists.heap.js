/**
 * tag: 堆 链表
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
    class Heap {
        constructor(size) {
            // h[0] 占位不使用，实际堆顶为 h[1]
            // h[h.length-1] 为添加元素时的临时位置
            this.h = new Array(size + 2);
            // curIndex表示当前可插入数据的位置
            this.curIndex = 1;
        }

        add(n){
            this.h[this.curIndex] = n;
            this._up(this.curIndex);
            this.curIndex++;
        }

        /**
         * 交换堆顶元素和堆尾元素，然后down新堆顶元素到合适的位置
         */
        pop(){
            this._swap(1, this.curIndex - 1);
            const rtn = this.h[this.curIndex - 1];
            this.curIndex--;
            this._down(1);
            return rtn;
        }

        _up(i){
            const pIndex = Math.floor(i / 2);

            if (pIndex <= 0){
                return;
            }

            if (this.h[pIndex].val > this.h[i].val){
                this._swap(pIndex, i);
                this._up(pIndex);
            }
        }

        _down(i){
            const l = i * 2, r = l + 1;
            if (l >= this.curIndex){
                return;
            }

            let toIndex;

            if (r >= this.curIndex){
                toIndex = l;
            }else if (this.h[l].val > this.h[r].val){
                toIndex = r;
            }else {
                toIndex = l;
            }

            if (this.h[i].val > this.h[toIndex].val){
                this._swap(i, toIndex);
                this._down(toIndex);
            }
        }

        isEmpty(){
            return this.curIndex === 1;
        }

        _swap(i, j){
            const tmp = this.h[i];
            this.h[i] = this.h[j];
            this.h[j] = tmp;
        }
    }

    const head = {next: null};
    let cur = head;
    const heap = new Heap(10**4);
    lists.forEach(l => l && heap.add(l));

    while (!heap.isEmpty()){
        const top = heap.pop();
        if (top.next){
            heap.add(top.next);
        }
        cur.next = top;
        cur = cur.next;
    }

    return head.next;
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
 * 时间复杂度O(N*lgK)，空间复杂度O(K)
 *
 * 找出算法中可以优化的点便是寻找最优解的通路
 * 本题中可以优化的点在于，如何寻找当前应该选取的链表节点，正常的遍历会带来O(N)的时间复杂度，但通过堆可以将时间复杂度降低至O(lgN)
 */