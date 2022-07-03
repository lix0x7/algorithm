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
  const dp = new Array(target + 1).fill(false);

  // init dp
  dp[0] = true;

  // calc
  for (let i = 0; i < nums.length; ++i){
    // 需要注意的是第二层的循环我们需要从大到小计算，因为如果我们从小到大更新 dp 值，那么在计算 dp[j] 值的时候，
    // dp[j−nums[i]] 已经是被更新过的状态，不再是上一行的 dp 值
    for (let j = target; j >= nums[i]; --j){
      dp[j] ||= dp[j - nums[i]];
    }
  }

  return dp[target];
};

console.log(canPartition([1,2,3]), true);
console.log(canPartition([1,5,11,5]), true);
console.log(canPartition([1,2,3,5]), false);
console.log(canPartition([2,2,4,2]), false);
console.log(canPartition([1,2,5]), false);

/**
 * tag 重要
 *
 * 在原始416基础上压缩了dp数组
 *
 */