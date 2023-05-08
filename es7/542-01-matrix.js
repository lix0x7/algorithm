/**
 * 542. 01 Matrix
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
 *
 * The distance between two adjacent cells is 1.
 *
 * Example 1:
 * https://assets.leetcode.com/uploads/2021/04/24/01-1-grid.jpg
 *
 * Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
 * Output: [[0,0,0],[0,1,0],[0,0,0]]
 *
 * Example 2:
 * https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg
 *
 * Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
 * Output: [[0,0,0],[0,1,0],[1,2,1]]
 *
 *
 * Constraints:
 *
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 104
 * 1 <= m * n <= 104
 * mat[i][j] is either 0 or 1.
 * There is at least one 0 in mat.
 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  if (mat.length === 0) return [];
  const dp = new Array(mat.length).fill(0).map(x => new Array(mat[0].length).fill(Number.MAX_SAFE_INTEGER));

  // 遍历左侧和上侧
  for (let i = 0; i < mat.length; ++i){
    for (let j = 0; j < mat[0].length; ++j){
      if (mat[i][j] === 0){
        dp[i][j] = 0;
      }else {
        dp[i][j] = Math.min(dp[i][j], 1 + (dp[i - 1]?.[j] ?? Number.MAX_SAFE_INTEGER), 1 + (dp[i]?.[j - 1] ?? Number.MAX_SAFE_INTEGER));
      }
    }
  }

  // 遍历右侧和下册
  for (let i = mat.length - 1; i >= 0; --i){
    for (let j = mat[0].length - 1; j >= 0; --j){
      if (mat[i][j] === 0){
        dp[i][j] = 0;
      }else {
        dp[i][j] = Math.min(dp[i][j], 1 + (dp[i + 1]?.[j] ?? Number.MAX_SAFE_INTEGER), 1 + (dp[i]?.[j + 1] ?? Number.MAX_SAFE_INTEGER));
      }
    }
  }

  return dp;
};


/**
 * tag 错题本 图 动态规划
 * 暴力解必然超时
 * 很有意思，这是一道十分说明备忘录递归和dp等价的题目，只不过平时我们不会用dp去处理图问题
 */
