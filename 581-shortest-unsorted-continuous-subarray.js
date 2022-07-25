/**
 * 581. 最短无序连续子数组
 * 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
 *
 * 请你找出符合题意的 最短 子数组，并输出它的长度。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [2,6,4,8,10,9,15]
 * 输出：5
 * 解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
 * 示例 2：
 *
 * 输入：nums = [1,2,3,4]
 * 输出：0
 * 示例 3：
 *
 * 输入：nums = [1]
 * 输出：0
 *
 *
 * 提示：
 *
 * 1 <= nums.length <= 104
 * -105 <= nums[i] <= 105
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {

  let min = undefined;
  let max = undefined;
  let prev = nums[0];

  for (let i = 1; i < nums.length; ++i){
    const cur = nums[i];
    if (cur < prev){
      // 记录区间中最大最小值索引
      if (min === undefined || cur < nums[min]){
        min = i;
      }
      if (max === undefined || prev >= nums[max]){
        max = i - 1;
      }
    }

    prev = cur;
  }

  const minVal = nums[min], maxVal = nums[max];
  // console.log({min, max})
  min--;
  max++;
  while (min >= 0 && nums[min] > minVal) min--;
  while (max < nums.length && nums[max] < maxVal) max++;

  return (max - min - 1) || 0;
};

console.log(findUnsortedSubarray([1,2,3,4]), 0);
console.log(findUnsortedSubarray([2,1]), 2);
console.log(findUnsortedSubarray([1,3,5,2,7,9,8,10]), 6);
console.log(findUnsortedSubarray([1,3,2,2,2]), 4);
console.log(findUnsortedSubarray([1,3,2,3,3]), 2);
console.log(findUnsortedSubarray([3,2,3,2,4]), 4);


/**
 * tag 错题本 数组 单调栈
 * 计数细节有点琐碎，容易出错
 */