/**
 * 146. LRU 缓存
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 * 实现 LRUCache 类：
 * LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 *
 *
 *
 * 示例：
 *
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 *
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 *
 *
 * 提示：
 *
 * 1 <= capacity <= 3000
 * 0 <= key <= 10000
 * 0 <= value <= 105
 * 最多调用 2 * 105 次 get 和 put
 */

class ListNode{
    constructor(key, val, prev, next) {
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }

    deleteThis(){
        this.prev.next = this.next;
        if (this.next){
            this.next.prev = this.prev;
        }
    }

    insertAfter(node){
        if (node.next){
            node.next.prev = this;
            this.next = node.next;
        }
        this.prev = node;
        node.next = this;
    }

}

class LRUCache{
    constructor(capacity) {
        this.m = new Map();
        this.capacity = capacity;
        this.pesudoHead = new ListNode(null, null, null);
        this.last = this.pesudoHead;
    }

    get(key){
        if (this.m.has(key)){
            const node = this.m.get(key);
            this._moveToHead(node);
            return node.val;
        }else{
            return -1;
        }
    }

    put(key, value){
        if (this.m.has(key)){
            const node = this.m.get(key);
            this._moveToHead(node);
            node.val = value;
        }else {
            if (this.m.size >= this.capacity){
                // remove the last node
                this.m.delete(this.last.key);
                this.last = this.last.prev;
            }

            // insert cur node
            const cur = new ListNode(key, value, null, null);
            cur.insertAfter(this.pesudoHead);
            this.last = this.last === this.pesudoHead ? cur : this.last;
            this.m.set(key, cur);
        }
    }

    _moveToHead(node){
        if (node === this.last){
            this.last = this.last.prev === this.pesudoHead ? node : this.last.prev;
        }
        node.deleteThis();
        node.insertAfter(this.pesudoHead);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
let lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 1)); // 缓存是 {1=1}
console.log(lRUCache.put(2, 2)); // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1));    // 返回 1
console.log(lRUCache.put(3, 3)); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2));    // 返回 -1 (未找到)
console.log(lRUCache.put(4, 4)); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1));    // 返回 -1 (未找到)
console.log(lRUCache.get(3));    // 返回 3
console.log(lRUCache.get(4));    // 返回 4

lRUCache = new LRUCache(1);
console.log(lRUCache.put(2,1));
console.log(lRUCache.get(2));       // 1
console.log(lRUCache.put(3,2));
console.log(lRUCache.get(2));       // -1
console.log(lRUCache.get(3));       // 2

/**
 * tag map 链表
 *
 * 基本思路就是链表和哈希表，但是实现细节上容易出错，需要小心
 *
 */