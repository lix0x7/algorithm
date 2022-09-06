/**
 * 662. Maximum Width of Binary Tree
 * Given the root of a binary tree, return the maximum width of the given tree.
 *
 * The maximum width of a tree is the maximum width among all levels.
 *
 * The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.
 *
 * It is guaranteed that the answer will in the range of a 32-bit signed integer.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,3,2,5,3,null,9]
 * Output: 4
 * Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).
 * Example 2:
 *
 *
 * Input: root = [1,3,2,5,null,null,9,6,null,7]
 * Output: 7
 * Explanation: The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).
 * Example 3:
 *
 *
 * Input: root = [1,3,2,5]
 * Output: 2
 * Explanation: The maximum width exists in the second level with length 2 (3,2).
 *
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 3000].
 * -100 <= Node.val <= 100
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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  const layers = [];
  const dfs = function(cur, depth, horizontal){
    if (!cur){
      return;
    }
    // [leftBound, rightBound]
    layers[depth] = layers[depth] ?? [horizontal, horizontal];
    const curLayer = layers[depth];
    curLayer[0] = Math.min(curLayer[0], horizontal);
    curLayer[1] = Math.max(curLayer[1], horizontal);

    // 两个关键：
    // 1. 此处减掉curLayer[0]，也就是减掉了左边界，让任何一层的节点索引始终从1开始计数。
    //    这保证了同层的数据不会导致数字越界，避免树深度过高时数组越界、js精度不准带来的问题
    // 2. 先dfs左节点保证了每一层的左节点一定是最先被遍历到的，由此可以放心的减去curLayer[0]，而且不会出错
    dfs(cur.left, depth + 1, (2 * horizontal) - curLayer[0] + 1);
    dfs(cur.right, depth + 1, (2 * horizontal + 1) - curLayer[0] + 1);
  }

  dfs(root, 0, 1);
  // console.log(layers)
  return Math.max(...(layers.map(x => x[1] - x[0] + 1)));
};

/**
 * tag 经典 错题 树 树状数组
 * 很有意思的一道题，利用了树结构的数组存储方式思路来统计树每一层的左右边界节点的位置。并且很取巧的规避了越界的问题，好题！
 */
