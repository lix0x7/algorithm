/**
 * Given an array of integers temperatures represents the daily temperatures,
 * return an array answer such that answer[i] is the number of days you have
 * to wait after the ith day to get a warmer temperature.
 *
 * If there is no future day for which this is possible, keep answer[i] == 0 instead.
 *
 * Example 1:
 * Input: temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 *
 * Example 2:
 * Input: temperatures = [30,40,50,60]
 * Output: [1,1,1,0]
 *
 * Example 3:
 * Input: temperatures = [30,60,90]
 * Output: [1,1,0]
 *
 * Constraints:
 *
 * 1 <= temperatures.length <= 105
 * 30 <= temperatures[i] <= 100
 *
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const rtn = new Array(temperatures.length).fill(0);
  const s = [];
  const top = function (s) {
    return s[s.length - 1];
  }
  for (let i = 0; i < temperatures.length; ++i) {
    const cur = temperatures[i];
    if (s.length === 0 || top(s)[1] >= cur) {
      // do nothing
    } else {
      // pop existed days
      while (s.length > 0 && top(s)[1] < cur) {
        const p = s.pop();
        rtn[p[0]] = i - p[0];
      }
    }
    s.push([i, cur]);
  }

  return rtn;
};

console.log(dailyTemperatures([2, 1, 3, 5]), [2, 1, 1, 0])
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
console.log(dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0]);
console.log(dailyTemperatures([30, 60, 90]), [1, 1, 0]);


// 2, 1, 3, 5

/**
 * tag 错题本 单调栈
 */