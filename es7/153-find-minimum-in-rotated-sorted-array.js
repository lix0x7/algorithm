/**
 * 153. Find Minimum in Rotated Sorted Array
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
 *
 * [4,5,6,7,0,1,2] if it was rotated 4 times.
 * [0,1,2,4,5,6,7] if it was rotated 7 times.
 * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 *
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 *
 * You must write an algorithm that runs in O(log n) time.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [3,4,5,1,2]
 * Output: 1
 * Explanation: The original array was [1,2,3,4,5] rotated 3 times.
 * Example 2:
 *
 * Input: nums = [4,5,6,7,0,1,2]
 * Output: 0
 * Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
 * Example 3:
 *
 * Input: nums = [11,13,15,17]
 * Output: 11
 * Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
 *
 *
 * Constraints:
 *
 * n == nums.length
 * 1 <= n <= 5000
 * -5000 <= nums[i] <= 5000
 * All the integers of nums are unique.
 * nums is sorted and rotated between 1 and n times.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let l = 0, r = nums.length - 1;
  while (l < r){
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] >= nums[r]) {
      // 二分类问题的关键在于左侧不能是 l = mid，否则一定会出现死循环
      // 例如只剩两个元素0 1时，l = 0, r = 1,此时l恒等于(l+r)/2，二分查找无法退出循环 while (l < r)
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return nums[l];
};

console.log(findMin([1]), 1);
console.log(findMin([3,1,2]), 1);
console.log(findMin([7,8,1,2,3,4,5,6]), 1);
console.log(findMin([3,4,5,6,1,2]), 1);
console.log(findMin([4,5,6,7,0,1,2]), 0);
console.log(findMin([11,13,15,17]), 11);
console.log(findMin([2,1]), 1);

/**
 * tag 错题本 二分查找
 *
 * 旋转数组类题目，细节很多，这类题目关键在于找到数组最大值左右两部分的差一点，用于二分查找时控制左右指针位置
 * 面试时候case要准备全，本题中的所有case：完全顺序、完全逆序、中途旋转、单元素数组
 *
 */