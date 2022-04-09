// tag: tree
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
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const calcPath = function (cur, target, path){
        if (!cur){
            return;
        }
        if (cur.val === target.val){
            path.push(cur);
            return path;
        }

        path.push(cur);
        const rtn = calcPath(cur.left, target, path) || calcPath(cur.right, target, path);
        if (rtn){
            return rtn;
        }else {
            path.pop();
            return;
        }
    }

    const pPath = calcPath(root, p, []);
    const qPath = calcPath(root, q, []);
    // console.log(pPath.map(x => x.val), qPath.map(x => x.val));

    for (i = 0; i < Math.min(pPath.length, qPath.length); ++i){
        if (pPath[i].val !== qPath[i].val){
            return pPath[i - 1];
        }
    }
    return pPath[Math.min(pPath.length, qPath.length) - 1];
};