/**
 * 844. Backspace String Compare
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "ab#c", t = "ad#c"
 * Output: true
 * Explanation: Both s and t become "ac".
 * Example 2:
 *
 * Input: s = "ab##", t = "c#d#"
 * Output: true
 * Explanation: Both s and t become "".
 * Example 3:
 *
 * Input: s = "a#c", t = "b"
 * Output: false
 * Explanation: s becomes "c" while t becomes "b".
 *
 *
 * Constraints:
 *
 * 1 <= s.length, t.length <= 200
 * s and t only contain lowercase letters and '#' characters.
 *
 *
 * Follow up: Can you solve it in O(n) time and O(1) space?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let i = s.length - 1, j = t.length - 1;
  let iback = 0, jback = 0;
  while (i >= 0 || j >= 0){
    while (s[i] === '#' || iback > 0){
      if (s[i] === '#'){
        iback++;
      }else {
        iback--;
      }
      i--;
    }
    while (t[j] === '#' || jback > 0){
      if (t[j] === '#'){
        jback++;
      }else {
        jback--;
      }
      j--;
    }

    // console.log(i, j, s[i], t[j]);
    if (s[i] !== t[j]){
      return false;
    }
    i--;
    j--;
  }

  return i < 0 && j < 0;
};

/**
 * tag 错题本 双指针
 * 这道题思路很简单，但是准确写出来比较麻烦，指针控制细节比较复杂
 */
