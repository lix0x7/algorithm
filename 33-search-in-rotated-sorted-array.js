/**
 * 33. 搜索旋转排序数组
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 *
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 *
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
 * 输出：4
 * 示例 2：
 *
 * 输入：nums = [4,5,6,7,0,1,2], target = 3
 * 输出：-1
 * 示例 3：
 *
 * 输入：nums = [1], target = 0
 * 输出：-1
 *
 *
 * 提示：
 *
 * 1 <= nums.length <= 5000
 * -10^4 <= nums[i] <= 10^4
 * nums 中的每个值都 独一无二
 * 题目数据保证 nums 在预先未知的某个下标上进行了旋转
 * -10^4 <= target <= 10^4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r){
        const mid = l + Math.trunc((r - l) / 2);
        const midValue = nums[mid];
        // console.log(nums[l], midValue, nums[r])
        if (midValue === target){
            return mid;
        }
        // mid有可能和左边界重叠，应该纳入这个范围内，二分题目务必注意
        if (midValue >= nums[l]){
            // 左半部分有序
            if (target < midValue && target >= nums[l]){
                r = mid - 1;
            }else {
                l = mid + 1;
            }
        }else {
            // 右半部分有序
            if (target <= nums[r] && target > midValue){
                l = mid + 1;
            }else {
                r = mid - 1;
            }
        }
    }

    return -1;
};

console.log(search([4,5,6,7,0,1,2], 0), 4);
console.log(search([4,5,6,7,0,1,2], 3), -1);
console.log(search([1], 0), -1);
console.log(search([1,3,5], 3), 1);
console.log(search([5,1,3], 5), 0);
console.log(search([3,5,1], 3), 0);
console.log(search([4,5,6,7,8,1,2,3], 8), 4);


/**
 * tag 错题本 二分查找
 *
 * 核心思路在于找出二分后的有序部分，也就是代码中的 midValue >= nums[l]，用于判断是左半边有序还是右半边有序；
 * 知道有序部分后再检查目标值是否在有序区间内，如果在，则收缩到有序区间内；否则收缩到另外一个区间。
 * 对于两侧都有序的情况，这种方法自然会降级为基本的有序数组二分查找。
 *
 */