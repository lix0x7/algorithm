/**
 * 78. 子集
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 *
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 示例 2：
 *
 * 输入：nums = [0]
 * 输出：[[],[0]]
 *
 *
 * 提示：
 *
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * nums 中的所有元素 互不相同
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const rtn = [];
    const dfs = function (cur, curIndex, n){
        if (curIndex === n){
            rtn.push([...cur]);
            return;
        }

        cur.push(nums[curIndex]);
        // 选择当前位置元素
        dfs(cur, curIndex + 1, n);
        cur.pop();
        // 不选择当前位置元素
        dfs(cur, curIndex + 1, n);
    }
    dfs([], 0, nums.length);
    return rtn;
};

console.log(subsets([1,2,3]));
console.log(subsets([1,2,3,4,5,6,7,8,10,0]));

/**
 * tag 回溯 错题
 * 本质上是在模拟排列组合里组合的计算过程，即「是否选择当前位置元素」
 */