/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let start = 0;
  // find start
  while (start < intervals.length && intervals[start][0] < newInterval[0]){
    start++;
  }
  intervals.splice(start, 0, newInterval);
  for (let i = 0; i < intervals.length - 1;){
    const cur = intervals[i], next = intervals[i + 1];
    if (cur[1] >= next[1]){
      // in
      intervals.splice(i + 1, 1);
    }else if (cur[1] < next[1] && cur[1] >= next[0]){
      // overlapping, should be merged
      cur[1] = next[1];
      intervals.splice(i + 1, 1);
    }else {
      i++;
    }
  }
  return intervals;
};

console.log(insert([[1,2], [3,4]], [2,3]), ' should be: ', [[1, 4]]);
console.log(insert([[1,2], [4,5]], [2,3]), ' should be: ', [[1,3], [4,5]]);
console.log(insert([[1,2], [5,6]], [3,4]), ' should be: ', [[1,2], [3,4], [5,6]]);
console.log(insert([[1,4]], [2,3]), ' should be: ', [[1,4]]);

/**
 * tag 区间
 *
 * 线段树应该也可以做，不过会引入建树的空间
 *
 * 测试用例 in out left-overlapping right-overlapping
 *
 */
