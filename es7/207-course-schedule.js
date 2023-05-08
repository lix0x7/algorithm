/**
 * 207. 课程表
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 *
 * 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
 *
 * 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
 * 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：true
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
 * 示例 2：
 *
 * 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
 * 输出：false
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 *
 *
 * 提示：
 *
 * 1 <= numCourses <= 105
 * 0 <= prerequisites.length <= 5000
 * prerequisites[i].length == 2
 * 0 <= ai, bi < numCourses
 * prerequisites[i] 中的所有课程对 互不相同
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const m = new Array(numCourses).fill(0).map(x => new Array(numCourses));
  const visited = new Array(numCourses).fill(false);
  const memo = new Array(numCourses).fill(null);

  for (const dep of prerequisites) {
    // 增加有向边
    m[dep[0]].push(dep[1]);
  }

  /**
   * 检查从给定位置开始广搜是否有环
   */
  const checkCircle = function (cur) {
    if (memo[cur] !== null) {
      return memo[cur];
    }
    if (visited[cur]) {
      return true;
    }

    let rtn = false;
    visited[cur] = true;
    for (const target of m[cur]) {
      rtn ||= checkCircle(target)
    }
    visited[cur] = false;
    memo[cur] = rtn;
    return rtn;
  }

  for (let i = 0; i < numCourses; ++i){
    if (checkCircle(i)){
      return false;
    }
  }
  return true;
};

/**
 * tag 图 栈 DFS 回溯 拓扑排序 优雅解法
 *
 * 本质上检查图中的环，此处解题思路如此。
 * 该题是210-课程表II的简化版本，如果存在拓扑排序，则为true；不过不存在，则为false，只是没有要求给出拓扑排序
 */