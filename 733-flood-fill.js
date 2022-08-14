/**
 * 733. Flood Fill
 * An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
 *
 * You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
 *
 * To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.
 *
 * Return the modified image after performing the flood fill.
 *
 *
 *
 * Example 1:
 * https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg
 *
 * Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
 * Output: [[2,2,2],[2,2,0],[2,0,1]]
 * Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
 * Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
 * Example 2:
 *
 * Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
 * Output: [[0,0,0],[0,0,0]]
 * Explanation: The starting pixel is already colored 0, so no changes are made to the image.
 *
 *
 * Constraints:
 *
 * m == image.length
 * n == image[i].length
 * 1 <= m, n <= 50
 * 0 <= image[i][j], color < 216
 * 0 <= sr < m
 * 0 <= sc < n
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  if (image.length === 0){
    return [];
  }

  const visited = new Array(image.length).fill(0).map(x => new Array(image[0].length).fill(false));
  const dfs = function(image, visited, i, j, originalColor, tragetColor){
    if (i < 0 || i >= image.length || j < 0 || j >= image[0].length || visited[i][j]){
      return;
    }

    visited[i][j] = true;
    const curColor = image[i][j];
    if (curColor === tragetColor || curColor !== originalColor){
      return;
    }

    image[i][j] = tragetColor;
    dfs(image, visited, i + 1, j, originalColor, tragetColor);
    dfs(image, visited, i - 1, j, originalColor, tragetColor);
    dfs(image, visited, i, j + 1, originalColor, tragetColor);
    dfs(image, visited, i, j - 1, originalColor, tragetColor);

    return;
  }
  dfs(image, visited, sr, sc, image[sr][sc], color);
  return image;
};

/**
 * tag 图 dfs
 */
