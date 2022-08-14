/**
 * 67. Add Binary
 * Given two binary strings a and b, return their sum as a binary string.
 *
 *
 *
 * Example 1:
 *
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 *
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 *
 * Constraints:
 *
 * 1 <= a.length, b.length <= 104
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let acc = 0, i = 0, rtn = [];
  while (true) {
    const cura = a[a.length - 1 - i] === '1' ? 1 : 0;
    const curb = b[b.length - 1 - i] === '1' ? 1 : 0;
    if (i >= a.length && i >= b.length && (cura | curb | acc) === 0){
      rtn.reverse();
      return rtn.join('');
    }

    const curSum = cura + curb + acc;
    acc = (curSum >= 2 ? 1 : 0);
    rtn.push(curSum % 2);
    i++;
  }
};

/**
 * tag easy 模拟
 */
