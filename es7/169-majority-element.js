/**
 * 169. 多数元素
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [3,2,3]
 * 输出：3
 * 示例 2：
 *
 * 输入：nums = [2,2,1,1,1,2,2]
 * 输出：2
 *
 *
 * 提示：
 * n == nums.length
 * 1 <= n <= 5 * 104
 * -109 <= nums[i] <= 109
 *
 *
 * 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let candidate = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; ++i){
    const num = nums[i];
    if (candidate === num){
      count++;
    }else {
      if (count > 0){
        count--;
      }else {
        candidate = num;
        count = 1;
      }
    }
  }
  return candidate;
};

console.log(majorityElement([1,2,2,2,3,1,1,1,1]), 1)
console.log(majorityElement([1,2,1]), 1)
console.log(majorityElement([1,1,3,2,1,1]), 1)

/**
 * tag 排序 ad-hoc 优雅解法
 *
 * Boyer-Moore 投票算法，有点意思，O(n)时间复杂度，O(1)空间复杂度
 *
 * 比较糙的解法，可以直接对数组排序，排序后取nums[Math.floor(nums.length)/2]位置的值即可。
 */