/**
 * 54. Spiral Matrix
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 *
 *
 * Example 1:
 * https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 *
 * Example 2:
 * https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg
 *
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 * Constraints:
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const rtn = []
  let l = 0, r = matrix[0].length - 1, u = 0, d = matrix.length - 1;
  let iOffset = 0, jOffset = 1;
  let i = 0, j = 0;
  while (l <= r && u <= d){
    (i >= u && i <= d && j >= l && j <= r) && rtn.push(matrix[i][j]);

    if (j > r){
      // right top
      j--;
      u++;
      iOffset = 1;
      jOffset = 0;
    }else if (i > d){
      // right bottom
      i--;
      r--;
      iOffset = 0;
      jOffset = -1;
    }else if (j < l){
      j++;
      d--;
      iOffset = -1;
      jOffset = 0;
    }else if (i < u){
      i++;
      l++;
      iOffset = 0;
      jOffset = 1;
    }

    i += iOffset;
    j += jOffset;

  }

  return rtn;
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))

/**
 * tag 模拟
 */