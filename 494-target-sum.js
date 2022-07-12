/**
 * 494. 目标和
 * 给你一个整数数组 nums 和一个整数 target 。
 *
 * 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
 *
 * 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
 * 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [1,1,1,1,1], target = 3
 * 输出：5
 * 解释：一共有 5 种方法让最终目标和为 3 。
 * -1 + 1 + 1 + 1 + 1 = 3
 * +1 - 1 + 1 + 1 + 1 = 3
 * +1 + 1 - 1 + 1 + 1 = 3
 * +1 + 1 + 1 - 1 + 1 = 3
 * +1 + 1 + 1 + 1 - 1 = 3
 * 示例 2：
 *
 * 输入：nums = [1], target = 1
 * 输出：1
 *
 *
 * 提示：
 *
 * 1 <= nums.length <= 20
 * 0 <= nums[i] <= 1000
 * 0 <= sum(nums[i]) <= 1000
 * -1000 <= target <= 1000
 * 通过次数248,012提交次数504,916
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  const maxSum = nums.reduce((sum, cur) => cur + sum, 0);
  // set dp，dp[i][j]表示前i个元素可以有多少种组合计算出目标值j
  const dp = new Array(nums.length + 1).fill(0).map(x => ({}));

  // init
  for (let i = 0; i <= nums.length; ++i){
    for (let j = -maxSum; j <= maxSum; ++j){
      dp[i][j] = 0;
    }
  }
  dp[0][0] = 1;

  // iter
  for (let i = 1; i <= nums.length; ++i){
    for (let j = -maxSum; j <= maxSum; ++j){
      const curNum = nums[i - 1];
      dp[i][j] = (dp[i - 1][j - curNum] || 0) + (dp[i - 1][j + curNum] || 0);
    }
  }

  // return
  return dp[nums.length][target] || 0;
};

console.log(findTargetSumWays([1,1,1,1,1], 3), 5);
console.log(findTargetSumWays([1], 1), 1);
console.log(findTargetSumWays([1], 2), 0);
console.log(findTargetSumWays([100], -200), 0);

/**
 * tag 动态规划 背包问题 错题本
 *
 * 官方题解将问题转换成了另一种形式，可以看一下，本质思路没有区别，但实现简单一些，并且可以做状态压缩
 * [目标和 - 题解 - 力扣（LeetCode）](https://leetcode.cn/problems/target-sum/solution/mu-biao-he-by-leetcode-solution-o0cp/)
 *
 */