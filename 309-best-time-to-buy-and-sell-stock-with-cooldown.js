/**
 * 309. 最佳买卖股票时机含冷冻期
 * 给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​
 *
 * 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
 *
 * 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 *
 *
 * 示例 1:
 *
 * 输入: prices = [1,2,3,0,2]
 * 输出: 3
 * 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
 * 示例 2:
 *
 * 输入: prices = [1]
 * 输出: 0
 *
 *
 * 提示：
 *
 * 1 <= prices.length <= 5000
 * 0 <= prices[i] <= 1000
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // dp[i][j] 第i天时某种状态（0-持有、1-冷冻、2-非冷冻）时的收益
  // 卖出 dp[i][0] = Math.max(delta + dp[i - x])
  let rtn = 0;
  const dp = new Array(prices.length).fill(0).map(x => new Array(3).fill(0));
  prices[-1] = Number.MIN_SAFE_INTEGER;
  dp[0] = [-prices[0], 0, 0];
  for (let i = 1; i < prices.length; ++i){
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][2] - prices[i]);
    dp[i][1] = dp[i-1][0] + prices[i];
    dp[i][2] = Math.max(dp[i-1][1], dp[i-1][2]);

    rtn = Math.max(...dp[i]);
  }

  return rtn;
};

console.log(maxProfit([1,2,3,0,2]), 3);
console.log(maxProfit([6,1,6,4,3,0,2]), 7);

/**
 * tag 经典 动态规划 错题本
 *
 * 没有想到最优解，但想到了O(n^2)的dp思路
 */
