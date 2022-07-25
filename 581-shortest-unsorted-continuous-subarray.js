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
  const s = [];
  let from = undefined, end = undefined;
  const top = function (s){
    return s[s.length - 1];
  }
  for (let i = 0; i < nums.length; ++i){
    const cur = nums[i];
    let topEntry = undefined;
    while (s.length > 0 && top(s)[0] > cur){
      const p = s.pop();
      topEntry = topEntry || p;
      end = i;
      if (p[0] !== cur && (from === undefined || from > p[1])){
        from = p[1];
      }
    }
    s.push([cur, i]);

    if (topEntry){
      s.push(topEntry);
    }
  }
  return from === undefined ? 0 : end - from + 1;
};

console.log(findUnsortedSubarray([1,2,3,4]), 0);
console.log(findUnsortedSubarray([1,3,5,2,7,9,8,10]), 6);
console.log(findUnsortedSubarray([1,3,2,2,2]), 4);
console.log(findUnsortedSubarray([1,3,2,3,3]), 2);

/**
 * tag 错题本 数组 单调栈
 * 计数细节有点琐碎，容易出错
 */