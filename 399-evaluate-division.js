/**
 * 399. 除法求值
 * 给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和 values[i] 共同表示等式 Ai / Bi = values[i] 。每个 Ai 或 Bi 是一个表示单个变量的字符串。
 *
 * 另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj = ? 的结果作为答案。
 *
 * 返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 -1.0 替代这个答案。
 *
 * 注意：输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。
 *
 *
 *
 * 示例 1：
 *
 * 输入：equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
 * 输出：[6.00000,0.50000,-1.00000,1.00000,-1.00000]
 * 解释：
 * 条件：a / b = 2.0, b / c = 3.0
 * 问题：a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
 * 结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
 * 示例 2：
 *
 * 输入：equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
 * 输出：[3.75000,0.40000,5.00000,0.20000]
 * 示例 3：
 *
 * 输入：equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
 * 输出：[0.50000,2.00000,-1.00000,-1.00000]
 *
 *
 * 提示：
 *
 * 1 <= equations.length <= 20
 * equations[i].length == 2
 * 1 <= Ai.length, Bi.length <= 5
 * values.length == equations.length
 * 0.0 < values[i] <= 20.0
 * 1 <= queries.length <= 20
 * queries[i].length == 2
 * 1 <= Cj.length, Dj.length <= 5
 * Ai, Bi, Cj, Dj 由小写英文字母与数字组成
 */

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {

  const c2i = function (c) {
    return c.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  const floyd = function (g, dp) {
    for (let i = 0; i < g.length; ++i) {
      for (let j = 0; j < g.length; ++j) {
        // 遍历所有的分界点
        for (let k = 0; k < g.length; ++k) {
          dp[i][j] = Math.min(dp[i][j], dp[i][k] * dp[k][j]);
        }
      }
    }
  }

  // init DAG
  const g = new Array(26).fill(0).map(x => new Array(26).fill(Number.POSITIVE_INFINITY));
  // dp[i][j] dp数据表示 从i到j的最短路权值之和
  const dp = new Array(26).fill(0).map(x => new Array(26).fill(Number.POSITIVE_INFINITY));
  // 初始化到自己的路径权值为0
  for (let i = 0; i < dp.length; ++i) {
      dp[i][i] = 1;
  }

  for (let i = 0; i < equations.length; ++i) {
    const eq = equations[i];
    const val = values[i];
    g[c2i(eq[0])][c2i(eq[1])] = val;
    g[c2i(eq[1])][c2i(eq[0])] = 1 / val;
  }

  // 初始化直接相连的节点
  for (let i = 0; i < g.length; ++i) {
    for (let j = 0; j < g.length; ++j) {
      if (g[i][j] < Number.POSITIVE_INFINITY) {
        dp[i][j] = g[i][j];
      }
    }
  }

  // console.log(g);
  floyd(g, dp);
  // console.log(dp);

  // query
  const query = function (g, dp, up, down){
    let ans = 1;
    for (let i = 0; i < up.length; ++i){
      ans *= dp[c2i(up[i])][c2i(down[i])];
    }
    if (ans >= Number.POSITIVE_INFINITY){
      return -1;
    }else {
      return ans;
    }
  }

  const rtn = [];
  for (const q of queries) {
    rtn.push(query(g, dp, q[0], q[1]));
  }
  return rtn;
};

console.log(calcEquation([["a", "b"], ["c", "d"]], [2, 3], [["ac", "bd"], ["ca", "db"], ["ad", "bc"], ["x", "x"]]),);
console.log(
  calcEquation([["a","b"],["b","c"]], [1.5,2.5], [["a","c"],["c","b"]]),
  [3.75,0.4]
);

console.log(
  calcEquation([["a","b"],["b","c"],["bc","cd"]], [1.5,2.5,5.0], [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]),
  [3.75,0.4,5.0,0.2]
);

/**
 * [["a","b"],["c","d"]]
 * [2.0,3.0]
 * [["ac","bd"], ["ca","db"], ["ad","bc"]]
 */

/**
 * tag 错题本 图 动态规划 floyd
 */