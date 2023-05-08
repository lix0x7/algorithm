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

  const impl = function (x, n){
    if (n === 0 || x === 1){
      return 1;
    }
    const calculated = impl(x, Math.trunc(n / 2));
    return  n % 2 === 1 ? calculated * calculated * x : calculated * calculated;
  }

  const cur = impl(x, Math.abs(n));
  if (n < 0){
    return 1 / cur;
  }else {
    return cur;
  }

};

console.log(myPow(2, 3), 8);
console.log(myPow(2, 10), 1024);

/**
 * tag 数学 快速幂 优雅解
 *
 */