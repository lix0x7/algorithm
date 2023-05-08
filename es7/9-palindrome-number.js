/**
 * 9. Palindrome Number
 * Given an integer x, return true if x is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward as forward.
 *
 * For example, 121 is a palindrome while 123 is not.
 *
 *
 * Example 1:
 *
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 * Example 2:
 *
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * Example 3:
 *
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 *
 * Constraints:
 *
 * -231 <= x <= 231 - 1
 *
 *
 * Follow up: Could you solve it without converting the integer to a string?
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0){
    return false;
  }
  let bigBase = 10 ** Math.floor(Math.log10(x));
  let smallBase = 1;

  while (bigBase >= smallBase){
    const firstDigital = Math.floor((x % (bigBase * 10)) / bigBase);
    const lastDigital = Math.floor(x / smallBase) % 10;
    if (firstDigital !== lastDigital){
      return false;
    }
    bigBase /= 10;
    smallBase *= 10;
  }

  return true;
};

/**
 * tag 回文 数学 双指针
 */
