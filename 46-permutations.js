/**
 * 46. 全排列
 * 难度
 * 中等
 *
 * 1966
 *
 * 收藏
 *
 * 分享
 * 切换为英文
 * 接收动态
 * 反馈
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 示例 2：
 *
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 * 示例 3：
 *
 * 输入：nums = [1]
 * 输出：[[1]]
 *
 *
 * 提示：
 *
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const rtn = [];
    /**
     *
     * @param cur
     * @param used {Set}
     */
    const impl = function (cur, used){
        if (used.size === nums.length){
            rtn.push([...cur]);
        }

        for (const num of nums){
            if (!used.has(num)){
                used.add(num);
                cur.push(num);
                impl(cur, used);
                cur.pop();
                used.delete(num);
            }
        }
    }
    impl([], new Set());
    return rtn;
};

console.log(permute([2]));
console.log(permute([2,3]));
console.log(permute([1,2,3]));

/**
 * tag 回溯
 */