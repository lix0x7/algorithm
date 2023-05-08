/**
 * 96. 不同的二叉搜索树
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：5
 * 示例 2：
 *
 * 输入：n = 1
 * 输出：1
 *
 *
 * 提示：
 *
 * 1 <= n <= 19
 * 通过次数242,401提交次数345,254
 */

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = new Array(n + 1).fill(null);
    dp[0] = 1;
    dp[1] = 1;

    const impl = function (n){
        if (dp[n] !== null){
            return dp[n]
        }
        let rtn = 0;
        for (let i = 0; i < n; ++i){
            rtn += impl(i) * impl(n - i - 1);
        }
        dp[n] = rtn;
        return rtn;
    }

    return impl(n);
};

console.log(numTrees(1));
console.log(numTrees(2));
console.log(numTrees(3));

/**
 * tag 动态规划 树
 *
 * 虽然是以树的形态出现的题目，但本质上是动态规划
 */