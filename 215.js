// 215. 数组中的第K个最大元素
// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
//
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
//
//
// 示例 1:
//
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:
//
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    const impl = function (nums, left, right, k){
        if (right <= left){
            return;
        }

        let i = left;
        let j = right;
        let pivotal = nums[left];
        while (i < j){
            // 关键在于首先开始遍历的方向不能是pivotal所在的一般
            // 这样才能达到遍历完成的同时交换元素的效果
            while (i < j && nums[j] >= pivotal){
                --j;
            }
            nums[i] = nums[j];
            while (i < j && nums[i] < pivotal){
                ++i;
            }
            nums[j] = nums[i];
        }

        nums[i] = pivotal;

        if (k < i){
            return impl(nums, left, i - 1, k);
        }else if (k > i){
            return impl(nums, i + 1, right, k);
        }else {
            return pivotal;
        }
    }

    impl(nums, 0, nums.length - 1, nums.length - k);
    return nums[nums.length - k];
};

console.log(findKthLargest([1, 2, 3], 3), 1);
console.log(findKthLargest([3, 2, 1], 3), 1);
console.log(findKthLargest([4, 4, 4, 3, 2, 1], 4), 3);
console.log(findKthLargest([3,2,1,5,6,4], 2), 5);
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4), 4);