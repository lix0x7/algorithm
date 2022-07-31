/**
 * 230. Kth Smallest Element in a BST
 * Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,1,4,null,2], k = 1
 * Output: 1
 * Example 2:
 *
 *
 * Input: root = [5,3,6,2,4,null,null,1], k = 3
 * Output: 3
 *
 *
 * Constraints:
 *
 * The number of nodes in the tree is n.
 * 1 <= k <= n <= 104
 * 0 <= Node.val <= 104
 *
 *
 * Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let curCount = 0;
  const impl = function (cur, k){
    if (!cur){
      return undefined;
    }
    let rtn;
    rtn = impl(cur.left, k);
    if (rtn !== undefined){
      return rtn;
    }
    curCount++;
    if (curCount === k){
      return cur.val;
    }
    return impl(cur.right, k);
  }
  return impl(root, k);
};

/**
 * tag 树
 *
 * follow up考察的是平衡二叉树，确实没想到。还以为是用辅助结构来快速查找，类似LRU那种混用Map和链表的方式。
 * 不过这个也和follow up太简短有关系，如果是现场可以追问+提示的话，应该也不难想到AVL，毕竟树的递进关系也就那样
 *
 */
