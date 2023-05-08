/**
 * 322. 零钱兑换
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 *
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 *
 * 你可以认为每种硬币的数量是无限的。
 *
 *
 *
 * 示例 1：
 *
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 * 示例 2：
 *
 * 输入：coins = [2], amount = 3
 * 输出：-1
 * 示例 3：
 *
 * 输入：coins = [1], amount = 0
 * 输出：0
 *
 *
 * 提示：
 *
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 231 - 1
 * 0 <= amount <= 104
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = new Array(amount + 1).fill(-1);
  dp[0] = 0;
  for (let i = 1; i <= amount; ++i){
    let cur = Number.MAX_SAFE_INTEGER;
    for (const c of coins){
      if (i - c >= 0 && dp[i - c] !== -1){
        cur = Math.min(cur, 1 + dp[i - c]);
      }
    }
    dp[i] = cur;
  }

  return dp[amount] >= Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};

console.log(coinChange([1,2,5], 11), 3);
console.log(coinChange([3], 2), -1);
console.log(coinChange([1], 0), 0);

/**
 * tag 经典 动态规划
 *
 * 标准dp题目
 *
 */
