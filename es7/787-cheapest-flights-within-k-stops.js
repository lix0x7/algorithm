/**
 * 787. Cheapest Flights Within K Stops
 * There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.
 *
 * You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.
 *
 * https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-2drawio.png
 *
 * Example 1:
 *
 *
 * Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
 * Output: 700
 * Explanation:
 * The graph is shown above.
 * The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
 * Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
 * Example 2:
 *
 *
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
 * Output: 200
 * Explanation:
 * The graph is shown above.
 * The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.
 * Example 3:
 *
 *
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
 * Output: 500
 * Explanation:
 * The graph is shown above.
 * The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.
 *
 *
 * Constraints:
 *
 * 1 <= n <= 100
 * 0 <= flights.length <= (n * (n - 1) / 2)
 * flights[i].length == 3
 * 0 <= fromi, toi < n
 * fromi != toi
 * 1 <= pricei <= 104
 * There will not be any multiple flights between two cities.
 * 0 <= src, dst, k < n
 * src != dst
 */

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  // dp 从src出发，经过k站到i节点的花费
  // dp[dst][k] = Math.min( {dp[i][k-1] + edge[i][dst] for edge of flights}, dp[dst][k]);
  const dp = new Array(n + 1).fill(0).map(x => new Array(k + 1).fill(Number.POSITIVE_INFINITY));

  // init
  dp[src][0] = 0;
  dp[src][-1] = 0;

  let rtn = Number.POSITIVE_INFINITY;
  for (let ki = 0; ki <= k; ki++) {
    for (const e of flights) {
      dp[e[1]][ki] = Math.min(
        dp[e[1]][ki],
        (dp[e[0]][ki - 1] ?? Number.POSITIVE_INFINITY) + (e[2] ?? Number.POSITIVE_INFINITY),
      );
      rtn = Math.min(rtn, dp[dst][ki]);
    }
  }

  return rtn >= Number.POSITIVE_INFINITY ? -1 : rtn;
};

console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1), 700);
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 2, 3, 1), 200);
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 3, 3, 1), 0);


/**
 * tag 错题本 单源最短路 动态规划
 *
 * bellman-ford做这题比较合适，本质上是动态规划问题。
 * dijkstra也可以做，不过会比较麻烦，没有尝试。
 *
 * 备注：加号（+）的优先级比 ?? 要高，还是要注意使用括号
 *
 */
