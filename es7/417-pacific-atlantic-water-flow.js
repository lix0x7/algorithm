/**
 * 417. Pacific Atlantic Water Flow
 * There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
 *
 * The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
 *
 * The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
 *
 * Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
 * Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
 * Example 2:
 *
 * Input: heights = [[2,1],[1,2]]
 * Output: [[0,0],[0,1],[1,0],[1,1]]
 *
 *
 * Constraints:
 *
 * m == heights.length
 * n == heights[r].length
 * 1 <= m, n <= 200
 * 0 <= heights[r][c] <= 105
 */

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  if (heights.length === 0 || heights[0].length === 0) {
    return []
  }

  const visited = new Array(heights.length).fill(0).map(x => new Array(heights[0].length).fill(false));
  const memo = new Array(heights.length).fill(0).map(x => new Array(heights[0].length).fill(false));
  const result = [];

  /**
   *
   * @param heights
   * @param i
   * @param j
   * @param fromHeight
   * @return 0 - none, 0b1 - pacific, 0b10 - atlantic, 0b11 - both
   */
  const impl = function (heights, i, j, fromHeight) {
    if (i < 0 || j < 0) {
      return 0b1;
    }
    if (i >= heights.length || j >= heights[0].length) {
      return 0b10;
    }

    const curHeight = heights[i][j];
    if (curHeight > fromHeight || visited[i][j]) {
      return 0;
    }
    if (memo[i][j]){
      return 0b11;
    }

    visited[i][j] = true;
    const rtn = impl(heights, i + 1, j, curHeight)
      | impl(heights, i - 1, j, curHeight)
      | impl(heights, i, j + 1, curHeight)
      | impl(heights, i, j - 1, curHeight);
    visited[i][j] = false;

    if (rtn === 0b11){
      memo[i][j] = true;
    }
    return rtn;
  }
  for (let i = 0; i < heights.length; ++i){
    for (let j = 0; j < heights[0].length; ++j){
      impl(heights, i, j, Number.MAX_SAFE_INTEGER);
    }
  }

  for (let i = 0; i < heights.length; ++i){
    for (let j = 0; j < heights[0].length; ++j){
      if (memo[i][j]){
        result.push([i, j])
      }
    }
  }

  return result;
};

console.log(pacificAtlantic([[10,10,10],[10,1,10],[10,10,10]]), [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]);

/**
 * tag 图
 */