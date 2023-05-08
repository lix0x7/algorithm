/**
 * tag: 树 重要
 * 124. 二叉树中的最大路径和
 * 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
 *
 * 路径和 是路径中各节点值的总和。
 *
 * 给你一个二叉树的根节点 root ，返回其 最大路径和
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
var maxPathSum = function(root) {
    let rtn = Number.MIN_SAFE_INTEGER;
    /**
     *
     * @param root
     * @returns {number} 返回当前树的垂直方向的最大路径和，不包括横向路径
     */
    let impl = function (root){
        if (!root){
            return 0;
        }
        const lsum = impl(root.left);
        const rsum = impl(root.right);
        rtn = Math.max(rtn, lsum + rsum + root.val);
        return Math.max(0, root.val + Math.max(lsum, rsum));
    }

    impl(root);
    return rtn;
};

console.log(maxPathSum(
    {
        val: -10,
        left: {
            val: 9
        },
        right: {
            val: 20,
            left: {
                val: 15
            },
            right: {
                val: 7
            }
        }
    }
), 42);