/**
 * 210. 课程表 II
 * 现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。
 *
 * 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
 * 返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：[0,1]
 * 解释：总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。
 * 示例 2：
 *
 * 输入：numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
 * 输出：[0,2,1,3]
 * 解释：总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
 * 因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。
 * 示例 3：
 *
 * 输入：numCourses = 1, prerequisites = []
 * 输出：[0]
 *
 *
 * 提示：
 * 1 <= numCourses <= 2000
 * 0 <= prerequisites.length <= numCourses * (numCourses - 1)
 * prerequisites[i].length == 2
 * 0 <= ai, bi < numCourses
 * ai != bi
 * 所有[ai, bi] 互不相同
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const m = new Array(numCourses).fill(0).map(x => []);
  const visited = new Array(numCourses).fill(0);  // 0 - 未搜索； 1 - 搜索中；2 - 已搜索
  for (const edge of prerequisites){
    m[edge[0]].push(edge[1]);
  }
  const s = [];
  /**
   *
   * @param i
   * @returns {boolean} 是否合法的搜索状态，如果被搜索的节点是搜索中的状态，那么证明搜索到了环，即非法状态
   */
  const dfs = function (i) {
    if (visited[i] === 2) {
      return true;
    }
    if (visited[i] === 1) {
      return false;
    }

    // visited[i] = 0
    visited[i] = 1;
    for (const target of m[i]) {
      const ok = dfs(target);
      if (!ok) {
        return false;
      }
    }
    visited[i] = 2;
    s.push(i);
    return true;
  }

  for (let i = 0; i < numCourses; ++i){
    const ok = dfs(i);
    if (!ok){
      return [];
    }
  }

  return s;
};

console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]), '[0,1,2,3] 或 [0,2,1,3]');
console.log(findOrder(2, [[0,1], [1,0]]), []);
console.log(findOrder(1, []), [0]);

/**
 * tag 经典 拓扑排序 图 栈 DFS 错题本
 *
 * 官方题解很好，摘录如下，原链接：https://leetcode.cn/problems/course-schedule-ii/solution/ke-cheng-biao-ii-by-leetcode-solution/
 *
 * # 首先，什么是拓扑排序？
 *
 * 给定一个包含 n 个节点的有向图 G，我们给出它的节点编号的一种排列，如果满足：
 *
 * 对于图 G 中的任意一条有向边 (u, v)(u,v)，uu 在排列中都出现在 vv 的前面。
 *
 * 那么称该排列是图 G 的「拓扑排序」。
 *
 * # 如何获得一个拓扑排序？
 *
 * 我们可以将深度优先搜索的流程与拓扑排序的求解联系起来，用一个栈来存储所有已经搜索完成的节点。
 *
 * 对于一个节点 uu，如果它的所有相邻节点都已经搜索完成，那么在搜索回溯到 uu 的时候，uu 本身也会变成一个已经搜索完成的节点。这里的「相邻节点」指的是从 uu 出发通过一条有向边可以到达的所有节点。
 *
 * 假设我们当前搜索到了节点 uu，如果它的所有相邻节点都已经搜索完成，那么这些节点都已经在栈中了，此时我们就可以把 uu 入栈。可以发现，如果我们从栈顶往栈底的顺序看，由于 uu 处于栈顶的位置，那么 uu 出现在所有 uu 的相邻节点的前面。因此对于 uu 这个节点而言，它是满足拓扑排序的要求的。
 *
 * 这样以来，我们对图进行一遍深度优先搜索。当每个节点进行回溯的时候，我们把该节点放入栈中。最终从栈顶到栈底的序列就是一种拓扑排序。
 *
 * 算法
 *
 * 对于图中的任意一个节点，它在搜索的过程中有三种状态，即：
 *
 * 「未搜索」：我们还没有搜索到这个节点；
 *
 * 「搜索中」：我们搜索过这个节点，但还没有回溯到该节点，即该节点还没有入栈，还有相邻的节点没有搜索完成）；
 *
 * 「已完成」：我们搜索过并且回溯过这个节点，即该节点已经入栈，并且所有该节点的相邻节点都出现在栈的更底部的位置，满足拓扑排序的要求。
 *
 * 通过上述的三种状态，我们就可以给出使用深度优先搜索得到拓扑排序的算法流程，在每一轮的搜索搜索开始时，我们任取一个「未搜索」的节点开始进行深度优先搜索。
 *
 * 我们将当前搜索的节点 uu 标记为「搜索中」，遍历该节点的每一个相邻节点 vv：
 *
 * 如果 vv 为「未搜索」，那么我们开始搜索 vv，待搜索完成回溯到 uu；
 *
 * 如果 vv 为「搜索中」，那么我们就找到了图中的一个环，因此是不存在拓扑排序的；
 *
 * 如果 vv 为「已完成」，那么说明 vv 已经在栈中了，而 uu 还不在栈中，因此 uu 无论何时入栈都不会影响到 (u, v)(u,v) 之前的拓扑关系，以及不用进行任何操作。
 *
 * 当 uu 的所有相邻节点都为「已完成」时，我们将 uu 放入栈中，并将其标记为「已完成」。
 *
 * 在整个深度优先搜索的过程结束后，如果我们没有找到图中的环，那么栈中存储这所有的 nn 个节点，从栈顶到栈底的顺序即为一种拓扑排序。
 *
 *
 */