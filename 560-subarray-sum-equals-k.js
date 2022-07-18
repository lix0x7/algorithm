/**
 * 560. 和为 K 的子数组
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [1,1,1], k = 2
 * 输出：2
 * 示例 2：
 *
 * 输入：nums = [1,2,3], k = 3
 * 输出：2
 *
 *
 * 提示：
 *
 * 1 <= nums.length <= 2 * 104
 * -1000 <= nums[i] <= 1000
 * -107 <= k <= 107560. 和为 K 的子数组
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [1,1,1], k = 2
 * 输出：2
 * 示例 2：
 *
 * 输入：nums = [1,2,3], k = 3
 * 输出：2
 *
 *
 * 提示：
 *
 * 1 <= nums.length <= 2 * 104
 * -1000 <= nums[i] <= 1000
 * -107 <= k <= 107
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  // 前缀和map，k为sum，v为满足该前缀和的子数组个数
  const sums = {};
  let rtn = 0;

  for (let i = 0, sum = 0; i < nums.length; ++i){
    sum += nums[i];

    rtn += sums[sum - k] || 0;
    if (sum === k){
      rtn++;
    }

    sums[sum] = (sums[sum] || 0) + 1;
  }

  return rtn;
};

console.log(subarraySum([1,1,1], 2), 2);
console.log(subarraySum([1,2,3], 3), 2);
console.log(subarraySum([1], 0), 0);
console.log(subarraySum([1,2,1,2,1], 3), 4);

/**
 * tag 错题本 前缀和 2-sum
 *
 */