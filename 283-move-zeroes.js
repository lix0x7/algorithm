/**
 * 283. 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 *
 *
 *
 * 示例 1:
 *
 * 输入: nums = [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 示例 2:
 *
 * 输入: nums = [0]
 * 输出: [0]
 *
 *
 * 提示:
 *
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 *
 * 进阶：你能尽量减少完成的操作次数吗？
 *
 * 通过次数767,651提交次数1,199,530
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0, j = 0;
  while (j < nums.length){
    if (nums[j] === 0){
      j++;
    }else {
      nums[i] = nums[j];
      i++;
      j++;
    }
  }

  while (i < nums.length){
    nums[i] = 0;
    i++;
  }

  return nums;
};

console.log(moveZeroes([0,1,2,0,3,4,0,5,6]))

/**
 * tag 双指针
 */