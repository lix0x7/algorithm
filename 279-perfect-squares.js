/**
 * 279. 完全平方数
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
 *
 * 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
 *
 *
 *
 * 示例 1：
 *
 * 输入：n = 12
 * 输出：3
 * 解释：12 = 4 + 4 + 4
 * 示例 2：
 *
 * 输入：n = 13
 * 输出：2
 * 解释：13 = 4 + 9
 *
 * 提示：
 *
 * 1 <= n <= 10^4
 *
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 1; i <= n; ++i) {
    for (let base = 1; base ** 2 <= i; base++) {
      dp[i] = Math.min(dp[i], 1 + dp[i - base ** 2]);
    }
  }

  return dp[n];
};

console.log(numSquares(1), 1);
console.log(numSquares(4), 1);
console.log(numSquares(2), 2, '2=1+1');
console.log(numSquares(3), 3, '3=1+1+1');
console.log(numSquares(12), 3, '12=4+4+4');
console.log(numSquares(13), 2, '13=9+4');

/**
 * tag 动态规划
 *
 * 本质上和分硬币一样
 *
 */