/**
 * 525. Contiguous Array
 * Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [0,1]
 * Output: 2
 * Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
 * Example 2:
 *
 * Input: nums = [0,1,0]
 * Output: 2
 * Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 105
 * nums[i] is either 0 or 1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  const m = new Map();
  m.set(0, -1);
  let curSum = 0, rtn = 0;
  for (let i = 0; i < nums.length; ++i){
    const num = nums[i];
    curSum += num ? 1 : -1;
    m.set(curSum, m.get(curSum) ?? i);
    rtn = Math.max(rtn, (i - m.get(curSum)) ?? 0);
  }
  return rtn;
};

/**
 * tag 错题 前缀和 2-sum
 * 没想出来思路，本质上是前缀和2-sum问题的结合
 */