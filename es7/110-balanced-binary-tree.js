/**
 * 110. Balanced Binary Tree
 * Given a binary tree, determine if it is height-balanced.
 *
 * For this problem, a height-balanced binary tree is defined as:
 *
 * a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 *
 *
 *
 * Example 1:
 * https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 * Example 2:
 * https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg
 *
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 * Example 3:
 *
 * Input: root = []
 * Output: true
 *
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 5000].
 * -104 <= Node.val <= 104
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  const impl = function(cur){
    if (!cur){
      return 0;
    }

    const l = 1 + impl(cur.left);
    const r = 1 + impl(cur.right);
    if (Math.abs(l - r) <= 1){
      return Math.max(l, r);
    }else {
      return Number.MIN_SAFE_INTEGER;
    }
  }

  return impl(root) >= 0;
};

/**
 * tag 树
 */
