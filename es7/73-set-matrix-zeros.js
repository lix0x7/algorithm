/**
 * 73. Set Matrix Zeroes
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 *
 * You must do it in place.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
 * Output: [[1,0,1],[0,0,0],[1,0,1]]
 * Example 2:
 *
 *
 * Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 *
 *
 * Constraints:
 *
 * m == matrix.length
 * n == matrix[0].length
 * 1 <= m, n <= 200
 * -231 <= matrix[i][j] <= 231 - 1
 *
 *
 * Follow up:
 *
 * A straightforward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best solution.
 * Could you devise a constant space solution?
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  for (let i = 0; i < matrix.length; ++i){
    for (let j = 0; j < matrix[0].length; ++j){
      if (matrix[i][j] === 0){
        for (let rowi = 0; rowi < matrix[0].length; ++rowi){
          matrix[i][rowi] = matrix[i][rowi] === 0 ? null : 0;
        }
        matrix[i][j] = null;
        break;
      }
    }
  }
  for (let j = 0; j < matrix[0].length; ++j){
    for (let i = 0; i < matrix.length; ++i){
      if (matrix[i][j] === null){
        for (let columni = 0; columni < matrix.length; ++columni){
          matrix[columni][j] = 0;
        }
        break;
      }
    }
  }
};

let matrix;

matrix = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix);
console.log(matrix);

matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(matrix);
console.log(matrix);

/**
 * tag 模拟 矩阵
 * 本质是怎么利用inplace的空间去存储额外的信息标记哪些行和列存在0
 * 官方题解给的方法很tricky的针对该题，利用了矩阵的第一行和第一列存储行列是否应置零的标记，
 * 然后用通过两个变量单独记录原本第一行和第一列是否为0.
 * 这个题解不包含啥通用思路，题目看看就好
 *
 * 我的思路是直接将0的位置置换为null，就不用那么麻烦的去标记行列了
 */