/**
 * 416. 分割等和子集
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [1,5,11,5]
 * 输出：true
 * 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
 * 示例 2：
 *
 * 输入：nums = [1,2,3,5]
 * 输出：false
 * 解释：数组不能分割成两个元素和相等的子集。
 *
 *
 * 提示：
 *
 * 1 <= nums.length <= 200
 * 1 <= nums[i] <= 100
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((sum, cur) => sum + cur, 0);
  if (nums.length < 2 || sum % 2 !== 0) {
    return false;
  }

  // 问题转化为，nums集合中是否可以选出部分数字，使其和为sum/2
  let target = sum / 2;
  // dp[i][j]含义，前i个数字（包括i位置）个数字是否有选出部分数组满足和为j
  const dp = new Array(nums.length).fill(0).map(x => new Array(target + 1).fill(false));

  // init dp
  for (let i = 0; i < nums.length; ++i){
    dp[i][nums[i]] = true;
  }

  // calc
  for (let i = 1; i < nums.length; ++i){
    for (let j = 0; j < target + 1; ++j){
      dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]] || false;
    }
  }

  return dp[nums.length - 1][target];
};

console.log(canPartition([1,2,3]), true);
console.log(canPartition([1,5,11,5]), true);
console.log(canPartition([1,2,3,5]), false);
console.log(canPartition([2,2,4,2]), false);

/**
 * tag 重要 错题本 动态规划 背包问题
 *
 * 看了题解思路是dp并且看了dp数组含义才做出来。没有意识到这是个背包问题，还是对背包问题不太敏感
 *
 */