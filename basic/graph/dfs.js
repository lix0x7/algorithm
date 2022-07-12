/**
 *
 * @param g {[][]}
 */
const dfs = function (g){
  const visited = new Array(g.length).fill(0).map(x => new Array(g[0].length).fill(false));
  const newG = new Array(g.length).fill(0).map(x => new Array(g[0].length).fill(0));
  const impl = function (g, i, j) {
    if (i < 0 || i >= g.length || j < 0 || j >= g[0].length){
      return;
    }

    if (visited[i][j]){
      return;
    }

    visited[i][j] = true;

    newG[i][j] = g[i][j];
    impl(g, i + 1, j);
    impl(g, i - 1, j);
    impl(g, i, j + 1);
    impl(g, i, j - 1);

    visited[i][j] = false;
  }

  impl(g, 0, 0);
  console.log(newG);
}

dfs([
  [1,2,3,4],
  [5,6,7,8],
  [9,0,1,2],
  [3,4,5,6],
]);