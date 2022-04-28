/**
 * 55. 跳跃游戏
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 *
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 *
 * 判断你是否能够到达最后一个下标。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 * 示例 2：
 *
 * 输入：nums = [3,2,1,0,4]
 * 输出：false
 * 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 *
 *
 * 提示：
 *
 * 1 <= nums.length <= 3 * 104
 * 0 <= nums[i] <= 105
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; ++i){
        const cur = nums[i];
        if (i <= max){
            const forward = i + cur;
            max = max > forward ? max : forward;
        }
    }
    return nums.length - 1 <= max;
};

console.log(canJump([1,2,3]), true);
console.log(canJump([2,3,1,1,4]), true);
console.log(canJump([2,0]), true);
console.log(canJump([3,2,1,0,4]), false);
console.log(canJump([0]), true);

/**
 * tag dp
 *
 * 思路是dp的思路，十分类似于欧式筛法。
 *
 * 设置每一个位置的可达标记，对于所有可达位置，进一步以此为基础刷新后续的可达标志。最后校验末位的可达标志即可。
 * 而且，由于每个位置数值表达的是最远的跳跃距离，那么可以将可达标志从dp数组压缩为单个最远距离，将空间复杂度由O(n)降为O(1)
 *
 */