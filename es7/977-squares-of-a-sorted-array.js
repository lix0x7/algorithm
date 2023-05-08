/**
 * 977. Squares of a Sorted Array
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * Explanation: After squaring, the array becomes [16,1,0,9,100].
 * After sorting, it becomes [0,1,9,16,100].
 * Example 2:
 *
 * Input: nums = [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 104
 * -104 <= nums[i] <= 104
 * nums is sorted in non-decreasing order.
 *
 *
 * Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const rtn = [], s = nums;
  let l = -1, r = 0;

  for (let i = 0; i < nums.length; ++i){
    if (nums[i] < 0){
      l = i;
      r = i + 1;
    }
  }

  while (l >= 0 && r < nums.length){
    if (-s[l] > s[r]){
      rtn.push(s[r] ** 2);
      r++;
    }else {
      rtn.push(s[l] ** 2);
      l--;
    }
  }
  while (l >= 0){
    rtn.push(s[l] ** 2);
    l--;
  }
  while (r < nums.length){
    rtn.push(s[r] ** 2);
    r++;
  }

  return rtn;
};


/**
 * tag 双指针
 * 单调栈也可以做
 */