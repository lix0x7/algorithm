/**
 * 128. 最长连续序列
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 *
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 * 示例 2：
 *
 * 输入：nums = [0,3,7,2,5,8,4,6,0,1]
 * 输出：9
 *
 *
 * 提示：
 *
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const m = {};

    for (let i = 0; i < nums.length; ++i){
        const num = nums[i];
        m[num] = num;
        let j = num;
        while (m[j] !== undefined){
            m[j] = m[j - 1] === undefined ?  m[j] : m[j - 1];
            j++;
        }
    }

    let max = 0;
    for (const num of nums){
        const curLength = num - m[num] + 1;
        max = max > curLength ? max : curLength;
    }
    return max;
};

console.log(longestConsecutive([1,3,5]), 1);
console.log(longestConsecutive([1,3,5,2]), 3);
console.log(longestConsecutive([3,2,1,5]), 3);
console.log(longestConsecutive([100,4,200,1,3,2]), 4);
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]), 9);

/**
 * tag 并查集
 *
 * 并查集也可以解，但是效率很低
 *
 */
