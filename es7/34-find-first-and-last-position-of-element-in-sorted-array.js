/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 *
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 *
 * 进阶：
 *
 * 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 *
 *
 * 示例 1：
 *
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 示例 2：
 *
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 示例 3：
 *
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 *
 *
 * 提示：
 *
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 * nums 是一个非递减数组
 * -109 <= target <= 109
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i = 0, j = nums.length - 1;
    let l = -1, r = -1;
    while (i <= j){
        let m = i + Math.floor((j - i) / 2);
        let vi = nums[i], vj = nums[j], vm = nums[m];
        if (vm === target){
            if (l === -1){
                l = m;
            }else {
                l = l < m ? l : m;
            }
        }
        if (target <= vm){
            j = m - 1;
        }else {
            i = m + 1;
        }
    }

    i = 0;
    j = nums.length - 1;
    while (i <= j){
        let m = i + Math.floor((j - i) / 2);
        let vi = nums[i], vj = nums[j], vm = nums[m];
        if (vm === target){
            if (r === -1){
                r = m;
            }else {
                r = r > m ? r : m;
            }
        }
        if (target >= vm){
            i = m + 1;
        }else {
            j = m - 1;
        }
    }

    return [l ,r];
};

console.log(searchRange([1,1,1,1,2,2], 1), [0, 3]);
console.log(searchRange([0,1,1,1,1,2,2], 1), [1, 4]);
console.log(searchRange([0,1,1,1,1,2,2], 2), [5, 6]);
console.log(searchRange([0,1,1,2], 2), [3, 3]);
console.log(searchRange([5,7,7,8,8,10], 8), [3, 4]);

/**
 * tag 二分查找
 *
 * 细节很容易出问题，此题用于练习二分很好
 */