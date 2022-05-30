/**
 * 221. 最大正方形
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * 输出：4
 * 示例 2：
 *
 *
 * 输入：matrix = [["0","1"],["1","0"]]
 * 输出：1
 * 示例 3：
 *
 * 输入：matrix = [["0"]]
 * 输出：0
 *
 *
 * 提示：
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 300
 * matrix[i][j] 为 '0' 或 '1'
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const dp = new Array(matrix.length).fill(0).map(x => new Array(matrix[0].length).fill(0));

  let rtn = 0;
  for (let y = 0; y < matrix.length; ++y) {
    for (let x = 0; x < matrix[0].length; ++x) {
      if (matrix[y][x] === '1') {
        if (x === 0 || y === 0){
          dp[y][x] = 1;
        } else {
          dp[y][x] = 1 + Math.min(dp[y - 1][x], dp[y][x - 1], dp[y - 1][x - 1]);
        }
        rtn = rtn > dp[y][x] ? rtn : dp[y][x];
      }
    }
  }

  return rtn ** 2;
};

console.log(maximalSquare(
  [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ]
), 4)

console.log(maximalSquare(
  [
    ["1", "0", "1", "0", "0"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "1", "1", "1"],
    ["1", "0", "1", "1", "1"],
  ]
), 9)


/**
 * tag 动态规划 错题本
 * 只想到了浅层的动态规划，但是没有想到最优的递推式
 */