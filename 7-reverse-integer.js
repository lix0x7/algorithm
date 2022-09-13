/**
 * 7. Reverse Integer
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 *
 *
 * Example 1:
 *
 * Input: x = 123
 * Output: 321
 * Example 2:
 *
 * Input: x = -123
 * Output: -321
 * Example 3:
 *
 * Input: x = 120
 * Output: 21
 *
 *
 * Constraints:
 *
 * -231 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let rtn = 0;
  const isNegative = x < 0;
  x = Math.abs(x);
  while (x > 0){
    rtn = rtn * 10 + x % 10;
    x = Math.trunc(x / 10);
  }
  if (isNegative){
    rtn = -rtn;
  }
  if (rtn <= 2 ** 31 - 1 && rtn >= -(2 ** 31)){
    return rtn;
  }else {
    return 0;
  }
};

console.log(reverse(4294967295), '0');
console.log(reverse(1534236469), '0');

/**
 * tag 数学
 *
 */
