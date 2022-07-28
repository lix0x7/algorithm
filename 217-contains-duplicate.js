/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 *  
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,1]
 * Output: true
 * Example 2:
 *
 * Input: nums = [1,2,3,4]
 * Output: false
 * Example 3:
 *
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *  
 *
 * Constraints:
 *
 * 1 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 * 通过次数622,422提交次数1,118,435
 *
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b);
  let prev = undefined;
  for (const cur of nums){
    if (prev === cur){
      return true;
    }
    prev = cur;
  }
  return false;
};

console.log(containsDuplicate([1,2,3,1]), true);
console.log(containsDuplicate([1,2,3]), false);

/**
 * tag 数组 排序 哈希表
 *
 * 这道题是最基本的数组题思路体现。
 * 最暴力的解法为两次遍历寻找是否有重复，此时时间复杂度O(n^2)，空间复杂度O(1)
 * 这种情况有两个思路：
 * 1. 排序，将O(n^2)降为O(n*lgn)
 * 2. 空间换时间，引入哈希表，空间复杂度O(n)，时间复杂度O(n)
 */