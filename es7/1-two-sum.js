/**
 * 1. 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 *
 * 你可以按任意顺序返回答案。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 示例 2：
 *
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 * 示例 3：
 *
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 *
 *
 * 提示：
 *
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * 只会存在一个有效答案
 * 进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？


 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numsWithIndex = nums.map((x, index) => [x, index]);

    /**
     * js 排序问题，一定要指明数字的排序函数，否则按字典序排序
     * @type {number[]}
     */
    numsWithIndex.sort((a, b) => a[0] - b[0]);

    let i = 0;
    let j = numsWithIndex.length - 1;

    while (i <= j) {
        const sum = numsWithIndex[i][0] + numsWithIndex[j][0];
        if (sum === target) {
            return [numsWithIndex[i][1], numsWithIndex[j][1]];
        } else if (sum > target) {
            j--;
        } else if (sum < target) {
            i++;
        }
    }

    return [];
};

twoSum = function (nums, target) {
    const m = {};

    for (let i = 0; i < nums.length; ++i){
        const cur = nums[i];
        const other = target - cur;
        if (m[other] !== undefined && m[other] !== i){
            return [m[other], i];
        }else {
            m[cur] = i;
        }
    }

    return [];
};

console.log(twoSum([1, 6, 3, 5, 4, 2], 3), [0, 5]);
console.log(twoSum([1, 2], 3), [0, 1]);
console.log(twoSum([2, 1], 3), [0, 1]);
console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);

/**
 * 感受
 *
 * 2-sum问题解答方案有两种，各有偏重
 *
 * 1. map存储其中一个值，然后用target-当前值查看另一方是否在map中来实现，时间复杂度O(N)、空间复杂度O(N)
 * 2. 数组排序后，通过左右指针按条件移动寻找目标值，在不需要返回原索引值且可以修改数组的情况中，时间复杂度O(NlgN)、空间复杂度O(1)
 *  但是如果需要记录索引，那记录原来的索引关系会消耗O(N)的空间
 *
 */