// tag: 树 重要
// 236. 二叉树的最近公共祖先
// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
//
// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode} 如果包含p和q，返回root；如果仅包含一个，返回包含的节点；如果都不包含，返回null
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root){
        return null;
    }
    if (root === p || root === q){
        return root;
    }

    const l = lowestCommonAncestor(root.left, p, q);
    const r = lowestCommonAncestor(root.right, p, q);

    if (l && r){
        // 如果左右节点都包含了要寻找的节点，那一定是各自包含了p / q，则当前节点为最近公共祖先
        return root;
    }else {
        return l || r;
    }

};



// tag 经典 树
// 感受
// 1. 树类型的题目先思考空节点、单节点、双节点、三节点的情况如何解题，再去思考如何递归下降
// 2. 涉及到递归的问题空间复杂度都不是O(1)，因为要维护递归栈，此时为O(lgN)