/**
 * 704. Binary Search
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 * Example 2:
 *
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 104
 * -104 < nums[i], target < 104
 * All the integers in nums are unique.
 * nums is sorted in ascending order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r){
    const mid = l + Math.floor((r - l) / 2);
    const midn = nums[mid];
    if (midn === target){
      return mid;
    }else if (midn > target){
      r = mid - 1;
    }else {
      l = mid + 1;
    }
  }
  return -1;
};

console.log(search([5], 5), 0);
console.log(search([-1,0,1,2,3], 3), 4);
console.log(search([1,2,3,4,5], 0), -1);

/**
 * tag 数组 二分查找
 */