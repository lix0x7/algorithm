/**
 * 31. 下一个排列
 * 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。
 *
 * 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
 * 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。
 *
 * 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
 * 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
 * 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
 * 给你一个整数数组 nums ，找出 nums 的下一个排列。
 *
 * 必须 原地 修改，只允许使用额外常数空间。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [1,2,3]
 * 输出：[1,3,2]
 * 示例 2：
 *
 * 输入：nums = [3,2,1]
 * 输出：[1,2,3]
 * 示例 3：
 *
 * 输入：nums = [1,1,5]
 * 输出：[1,5,1]
 *
 *
 * 提示：
 *
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length <= 1){
        return nums;
    }

    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]){
        i--;
    }
    if (i < 0){
        nums.sort((a, b) => a - b);
        return nums;
    }

    let j = nums.length - 1;
    // 从后到前找到第一个比nums[i]大的数字
    while (nums[j] <= nums[i]){
        j--;
    }
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;

    // reverse，在这种情况下就是有小到大排序
    let a = i + 1, b = nums.length - 1;
    while (a <= b){
        const t = nums[a];
        nums[a] = nums[b];
        nums[b] = t;
        a++;
        b--;
    }

    return nums;
};

console.log(nextPermutation([1,2,3]));
console.log(nextPermutation([1,3,2]));
console.log(nextPermutation([3,2,1]));
console.log(nextPermutation([1,1,5]));
console.log(nextPermutation([2,3,1]));
console.log(nextPermutation([5,1,1]));

/**
 * tag 排列组合 ad-hoc
 * 这题没啥意思，而且个人感觉题目出的不好，也不考察什么东西，有点ad-hoc性质
 * 简单说就是寻找全排列里的下一个排列，解决方法是从后到前寻找第一个非递增的位置，然后将其设置和该位置下一个全排列的数字交换后，
 * 再reverse该位置后的所有数字（因为这部分本身是降序的，所以reverse这个操作便是将其转变为升序）
 */