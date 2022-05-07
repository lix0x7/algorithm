/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 *
 * 问总共有多少条不同的路径？
 *
 *  
 *
 * 示例 1：
 *
 *
 * 输入：m = 3, n = 7
 * 输出：28
 * 示例 2：
 *
 * 输入：m = 3, n = 2
 * 输出：3
 * 解释：
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向下
 * 示例 3：
 *
 * 输入：m = 7, n = 3
 * 输出：28
 * 示例 4：
 *
 * 输入：m = 3, n = 3
 * 输出：6
 *  
 *
 * 提示：
 *
 * 1 <= m, n <= 100
 * 题目数据保证答案小于等于 2 * 109
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/unique-paths
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(0).map(x => new Array(n).fill(0));
    dp[0][0] = 1;
    for (let i = 0; i < m; ++i){
        for (let j = 0; j < n; ++j){
            if (j + 1 < n){
                dp[i][j + 1] += dp[i][j];
            }
            if (i + 1 < m){
                dp[i + 1][j] += dp[i][j];
            }
        }
    }
    return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 7), 28);
console.log(uniquePaths(7, 3), 28);
console.log(uniquePaths(3, 2), 3);
console.log(uniquePaths(3, 3), 6);

/**
 * tag 动态规划
 *
 * 还有数学排列组合解法，可以看下题解
 */