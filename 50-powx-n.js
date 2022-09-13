/**
 * 50. Pow(x, n)
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
 *
 *
 *
 * Example 1:
 *
 * Input: x = 2.00000, n = 10
 * Output: 1024.00000
 * Example 2:
 *
 * Input: x = 2.10000, n = 3
 * Output: 9.26100
 * Example 3:
 *
 * Input: x = 2.00000, n = -2
 * Output: 0.25000
 * Explanation: 2-2 = 1/22 = 1/4 = 0.25
 *
 *
 * Constraints:
 *
 * -100.0 < x < 100.0
 * -231 <= n <= 231-1
 * -104 <= xn <= 104
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0 || x === 1){
    return 1;
  }

  const mem = new Map();
  mem.set(1, x);
  let curIter = 1;
  let cur = x;
  while (curIter * 2 < Math.abs(n)){
    cur = cur * cur;
    curIter = curIter * 2;
    mem.set(curIter, cur);
  }

  const calculated = [...mem.entries()].sort((a,b) => b[0] - a[0]);
  for (const calculatedRst of calculated){
    if (calculatedRst[0] <= Math.abs(n) - curIter){
      curIter += calculatedRst[0];
      cur = cur * calculatedRst[1];
    }
  }

  if (n < 0){
    return 1 / cur;
  }else {
    return cur;
  }

};

console.log(myPow(2, 3), 8);
console.log(myPow(2, 10), 1024);

/**
 * tag 数学 快速幂
 *
 */