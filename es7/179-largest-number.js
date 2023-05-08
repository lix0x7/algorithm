/**
 * 179. Largest Number
 * Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
 *
 * Since the result may be very large, so you need to return a string instead of an integer.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [10,2]
 * Output: "210"
 * Example 2:
 *
 * Input: nums = [3,30,34,5,9]
 * Output: "9534330"
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const comparator = function(a, b){
    return Number.parseInt(b + a) - Number.parseInt(a + b);
  }
  nums = nums.map(x => String(x)).sort(comparator);
  if (nums[0] === '0') return '0';
  return nums.join('');
};

console.log(largestNumber([9, 93, 95, 8]), '995938');
console.log(largestNumber([3,30,34,5,9]), '9534330');
console.log(largestNumber([34323, 3432]), '343234323');
console.log(largestNumber([0, 0]), '0');

/**
 * tag ad-hoc 错题 数学
 * 本质在于证明如何排序可以产生最大的数字。两个很难的点让这题十分的ad-hoc：
 * 1. 如何确定排序顺序
 * 2. 如何证明上述排序是正确的
 * 面试时很难想成这么周全，这题看看就好
 */


