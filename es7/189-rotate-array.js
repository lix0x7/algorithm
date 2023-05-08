/**
 * 189. Rotate Array
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * Example 2:
 *
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 * Explanation:
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 105
 * -231 <= nums[i] <= 231 - 1
 * 0 <= k <= 105
 *
 *
 * Follow up:
 *
 * Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  rotate3(nums, k);
};

const rotate1 = function(nums, k){
  for (let i = 0; i < k; ++i){
    const last = nums[nums.length - 1];
    for (let j = nums.length - 1; j > 0; --j){
      nums[j] = nums[j - 1];
    }
    nums[0] = last;
  }
}

const rotate2 = function(nums, k){
  const after = new Array(nums.length).fill(undefined);
  for (let i = 0; i < nums.length; ++i){
    after[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < nums.length; ++i){
    nums[i] = after[i];
  }
}

const rotate3 = function(nums, k){
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

const reverse = function(nums, i, j){
  while (i < j){
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
    i++;
    j--;
  }
}

/**
 * tag 数组 优雅解法
 * 这道题之所以是mid是因为要求了多种解法，而且要求了O(n)时间和O(1)空间
 * 做完这道题，感觉翻转是一种很常见的技巧，需要纳入固定思考范围
 *
 */
