/**
 * 994. Rotting Oranges
 * You are given an m x n grid where each cell can have one of three values:
 *
 * 0 representing an empty cell,
 * 1 representing a fresh orange, or
 * 2 representing a rotten orange.
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 *
 *
 *
 * Example 1:
 * https://assets.leetcode.com/uploads/2019/02/16/oranges.png
 *
 * Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
 * Output: 4
 * Example 2:
 *
 * Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
 * Output: -1
 * Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
 * Example 3:
 *
 * Input: grid = [[0,2]]
 * Output: 0
 * Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 *
 *
 * Constraints:
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 10
 * grid[i][j] is 0, 1, or 2.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const days = new Array(grid.length).fill(0).map(x => new Array(grid[0].length).fill(Number.POSITIVE_INFINITY));
  const visited = new Array(grid.length).fill(0).map(x => new Array(grid[0].length).fill(false));
  const q = [];

  grid.forEach((row, i) => row.forEach((x, j) => {
    if (x === 2){
      q.push([i, j, 0]);
    }
  }));

  while (q.length !== 0){
    let [i, j, distance] = q.shift();
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length
      || grid[i][j] === 0
      || (visited[i][j] && days[i][j] < distance)){
      continue;
    }

    visited[i][j] = true;
    days[i][j] = Math.min(days[i][j], distance);
    distance++;
    q.push([i + 1, j, distance]);
    q.push([i - 1, j, distance]);
    q.push([i, j + 1, distance]);
    q.push([i, j - 1, distance]);
  }

  let max = 0;
  grid.forEach((row, i) => row.forEach((x, j) => {
    if (x !== 0){
      max = Math.max(max, days[i][j]);
    }
  }));
  return max >= Number.POSITIVE_INFINITY ? -1 : max;
};

/**
 * tag 动态规划 图 bfs
 */
